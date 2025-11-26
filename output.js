//Wed Nov 26 2025 12:52:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
  net
} = require("electron");
const path = require("path");
const fs = require("fs");
const https = require("https");
const http = require("http");
const url = require("url");
const MAX_CACHE_SIZE = 5242880;
const FILE_SIZE_THRESHOLD = 102400;
const CACHE_DIR = path.join(app.getPath("userData"), "web_cache");
const cache = new Map();
let currentCacheSize = 0;
!fs.existsSync(CACHE_DIR) && fs.mkdirSync(CACHE_DIR, {
  recursive: true
});
function addToCache(_0x3162b8, _0xe9bf5b, _0x4706c0) {
  const _0x231357 = Buffer.byteLength(_0xe9bf5b);
  if (_0x231357 > FILE_SIZE_THRESHOLD) {
    return false;
  }
  if (_0x231357 > MAX_CACHE_SIZE) {
    return false;
  }
  while (currentCacheSize + _0x231357 > MAX_CACHE_SIZE && cache.size > 0) {
    const _0x3fde29 = cache.keys().next().value;
    if (_0x3fde29) {
      const _0x330d6a = cache.get(_0x3fde29);
      currentCacheSize -= Buffer.byteLength(_0x330d6a.data);
      cache.delete(_0x3fde29);
    }
  }
  cache.set(_0x3162b8, {
    data: _0xe9bf5b,
    mimeType: _0x4706c0,
    timestamp: Date.now()
  });
  currentCacheSize += _0x231357;
  console.log("[缓存] 已缓存文件: " + _0x3162b8 + ", 大小: " + _0x231357 + " bytes");
  return true;
}
function getFromCache(_0x47375e) {
  const _0xd68711 = cache.get(_0x47375e);
  if (_0xd68711) {
    _0xd68711.timestamp = Date.now();
    console.log("[缓存] 命中缓存: " + _0x47375e);
    return _0xd68711;
  }
  return null;
}
function readLargeFileFromDisk(_0x24202) {
  try {
    if (fs.existsSync(_0x24202)) {
      const _0x31cd1d = fs.readFileSync(_0x24202);
      console.log("[缓存] 直接从磁盘读取大文件: " + _0x24202 + ", 大小: " + _0x31cd1d.length + " bytes");
      return _0x31cd1d;
    }
  } catch (_0x584e61) {
    console.error("[缓存] 读取文件失败: " + _0x24202, _0x584e61);
  }
  return null;
}
function fetchAndSaveFile(_0xb7e680, _0x2984ab) {
  return new Promise((_0x3425ec, _0x3d96d3) => {
    console.log("[缓存] 从网络拉取文件: " + _0xb7e680);
    const _0x32575b = url.parse(_0xb7e680);
    const _0x1c7f15 = _0x32575b.protocol === "https:" ? https : http;
    _0x1c7f15.get(_0xb7e680, _0x5ac5d7 => {
      if (_0x5ac5d7.statusCode === 200) {
        const _0xe8276d = [];
        _0x5ac5d7.on("data", _0x295801 => {
          _0xe8276d.push(_0x295801);
        });
        _0x5ac5d7.on("end", () => {
          try {
            const _0x21a9cf = Buffer.concat(_0xe8276d);
            const _0x4ed37f = path.dirname(_0x2984ab);
            !fs.existsSync(_0x4ed37f) && fs.mkdirSync(_0x4ed37f, {
              recursive: true
            });
            fs.writeFileSync(_0x2984ab, _0x21a9cf);
            console.log("[缓存] 文件已保存到磁盘: " + _0x2984ab + ", 大小: " + _0x21a9cf.length + " bytes");
            _0x3425ec(_0x21a9cf);
          } catch (_0x4b2710) {
            console.error("[缓存] 保存文件失败: " + _0x2984ab, _0x4b2710);
            _0x3d96d3(_0x4b2710);
          }
        });
      } else {
        console.error("[缓存] 网络请求失败，状态码: " + _0x5ac5d7.statusCode);
        _0x3d96d3(new Error("HTTP " + _0x5ac5d7.statusCode));
      }
    }).on("error", _0x54b850 => {
      console.error("[缓存] 网络请求失败: " + _0xb7e680, _0x54b850);
      _0x3d96d3(_0x54b850);
    });
  });
}
function getMimeType(_0x6d6589) {
  if (_0x6d6589.endsWith(".js")) {
    return "application/javascript";
  }
  if (_0x6d6589.endsWith(".css")) {
    return "text/css";
  }
  if (_0x6d6589.endsWith(".png")) {
    return "image/png";
  }
  if (_0x6d6589.endsWith(".jpg") || _0x6d6589.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  if (_0x6d6589.endsWith(".gif")) {
    return "image/gif";
  }
  if (_0x6d6589.endsWith(".json")) {
    return "application/json";
  }
  if (_0x6d6589.endsWith(".html")) {
    return "text/html";
  }
  if (_0x6d6589.endsWith(".jsc")) {
    return "application/octet-stream";
  }
  if (_0x6d6589.endsWith(".bin")) {
    return "application/octet-stream";
  }
  if (_0x6d6589.endsWith(".mp3")) {
    return "audio/mpeg";
  }
  if (_0x6d6589.endsWith(".ttf")) {
    return "font/ttf";
  }
  return "text/plain";
}
async function handleFileRequest(_0x4458da, _0x38fdf2) {
  const _0x4b9012 = getFromCache(_0x38fdf2);
  if (_0x4b9012) {
    return _0x4b9012;
  }
  if (fs.existsSync(_0x4458da)) {
    const _0x162e49 = fs.statSync(_0x4458da);
    const _0x86f765 = _0x162e49.size;
    if (_0x86f765 <= FILE_SIZE_THRESHOLD) {
      try {
        const _0x1b5bb3 = fs.readFileSync(_0x4458da);
        const _0x280cdf = getMimeType(_0x38fdf2);
        addToCache(_0x38fdf2, _0x1b5bb3, _0x280cdf);
        return {
          data: _0x1b5bb3,
          mimeType: _0x280cdf
        };
      } catch (_0xfa747c) {
        console.error("[缓存] 读取小文件失败: " + _0x4458da, _0xfa747c);
        return null;
      }
    } else {
      const _0x2fe00e = readLargeFileFromDisk(_0x4458da);
      if (_0x2fe00e) {
        const _0x5b025f = getMimeType(_0x38fdf2);
        return {
          data: _0x2fe00e,
          mimeType: _0x5b025f
        };
      }
    }
  }
  const _0x4a4d9b = getLocalCachePath(_0x38fdf2);
  if (fs.existsSync(_0x4a4d9b)) {
    try {
      const _0x39048b = fs.readFileSync(_0x4a4d9b);
      const _0x60b0b2 = _0x39048b.length;
      const _0x5219e6 = getMimeType(_0x38fdf2);
      _0x60b0b2 <= FILE_SIZE_THRESHOLD && addToCache(_0x38fdf2, _0x39048b, _0x5219e6);
      console.log("[缓存] 从磁盘缓存读取文件: " + _0x38fdf2);
      return {
        data: _0x39048b,
        mimeType: _0x5219e6
      };
    } catch (_0x352019) {
      console.error("[缓存] 读取磁盘缓存文件失败: " + _0x4a4d9b, _0x352019);
    }
  }
  return null;
}
function getLocalCachePath(_0x4cf3b6) {
  const _0x300b00 = url.parse(_0x4cf3b6);
  const _0x3aa626 = _0x300b00.pathname || "/";
  const _0x325b20 = _0x300b00.search || "";
  let _0xce06a8 = _0x3aa626.replace(/[^a-zA-Z0-9\.\-_]/g, "_") + (_0x325b20 ? "_" + _0x325b20.replace(/[^a-zA-Z0-9\.\-_]/g, "_") : "");
  _0xce06a8.startsWith("_") && (_0xce06a8 = "file" + _0xce06a8);
  const _0x22fad7 = 200;
  const _0x343543 = _0xce06a8.length > _0x22fad7 ? _0xce06a8.substring(0, _0x22fad7) : _0xce06a8;
  if (_0x343543.endsWith("_") || _0x343543.length === 0) {
    return path.join(CACHE_DIR, _0x343543 + "index.html");
  }
  return path.join(CACHE_DIR, _0x343543);
}
async function getFile(_0x36180a, _0x10fdce = null) {
  console.log("[缓存] 尝试获取文件: " + _0x36180a);
  const _0x19563c = getFromCache(_0x36180a);
  if (_0x19563c) {
    return _0x19563c;
  }
  if (_0x10fdce && fs.existsSync(_0x10fdce)) {
    try {
      const _0x462993 = fs.statSync(_0x10fdce);
      const _0x368d54 = _0x462993.size;
      const _0x2cdeb4 = fs.readFileSync(_0x10fdce);
      const _0x14b668 = getMimeType(_0x36180a);
      _0x368d54 <= FILE_SIZE_THRESHOLD && addToCache(_0x36180a, _0x2cdeb4, _0x14b668);
      console.log("[缓存] 从本地文件读取: " + _0x10fdce);
      return {
        data: _0x2cdeb4,
        mimeType: _0x14b668
      };
    } catch (_0x4a341c) {
      console.error("[缓存] 读取本地文件失败: " + _0x10fdce, _0x4a341c);
    }
  }
  const _0x3327ba = getLocalCachePath(_0x36180a);
  if (fs.existsSync(_0x3327ba)) {
    try {
      const _0x583b1b = fs.readFileSync(_0x3327ba);
      const _0x7f5b24 = _0x583b1b.length;
      const _0x5261e4 = getMimeType(_0x36180a);
      _0x7f5b24 <= FILE_SIZE_THRESHOLD && addToCache(_0x36180a, _0x583b1b, _0x5261e4);
      console.log("[缓存] 从磁盘缓存读取文件: " + _0x36180a);
      return {
        data: _0x583b1b,
        mimeType: _0x5261e4
      };
    } catch (_0x12672c) {
      console.error("[缓存] 读取磁盘缓存文件失败: " + _0x3327ba, _0x12672c);
    }
  }
  console.log("[缓存] 文件未找到，从网络拉取: " + _0x36180a);
  return await fetchFileFromNetwork(_0x36180a);
}
async function fetchFileFromNetwork(_0x49ce60) {
  try {
    const _0x36cae0 = getLocalCachePath(_0x49ce60);
    const _0x48da67 = await fetchAndSaveFile(_0x49ce60, _0x36cae0);
    const _0x11ffa5 = _0x48da67.length;
    const _0x42a4a9 = getMimeType(_0x49ce60);
    _0x11ffa5 <= FILE_SIZE_THRESHOLD && addToCache(_0x49ce60, _0x48da67, _0x42a4a9);
    return {
      data: _0x48da67,
      mimeType: _0x42a4a9
    };
  } catch (_0x22879d) {
    console.error("[缓存] 从网络拉取文件失败: " + _0x49ce60, _0x22879d);
    return null;
  }
}
function createWindow(_0x3bba47, _0x616729) {
  let _0xd0749c = "";
  if (_0x3bba47) {
    const _0x1dcbc0 = path.basename(_0x3bba47);
    _0xd0749c = _0x1dcbc0.replace(/\.bin$/i, "");
  }
  const _0x3bad4a = new BrowserWindow({
    width: 420,
    height: 740,
    resizable: true,
    maximizable: false,
    title: _0xd0749c ? "Zero - " + _0xd0749c : "Zero",
    icon: path.join(__dirname, "../../resources/app-icon.ico"),
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      nodeIntegration: false,
      contextIsolation: true,
      devTools: true
    }
  });
  _0x3bad4a.loadURL("http://21zero.top/");
  console.log("[窗口${index}] 加载 URL: http://21zero.top/");
  _0x3bba47 && console.log("[窗口" + _0x616729 + "] Bin文件: " + _0x3bba47);
  _0x3bad4a.webContents.on("did-finish-load", () => {
    if (_0x3bba47 && fs.existsSync(_0x3bba47)) {
      const _0x17edce = fs.readFileSync(_0x3bba47);
      const _0x1b328a = _0x17edce.toString("base64");
      _0x3bad4a.webContents.executeJavaScript("\n        (function() {\n          console.log('[登录拦截器] 开始注入登录请求拦截器');\n          \n          // Base64转ArrayBuffer\n          function base64ToArrayBuffer(base64) {\n            const binaryString = atob(base64);\n            const length = binaryString.length;\n            const bytes = new Uint8Array(length);\n            for (let i = 0; i < length; i++) {\n              bytes[i] = binaryString.charCodeAt(i);\n            }\n            return bytes.buffer;\n          }\n          \n          // 从 Base64 解码 bin 文件内容\n          const binBase64 = '" + _0x1b328a + "';\n          const arrayBuffer = base64ToArrayBuffer(binBase64);\n          console.log('[登录拦截器] Bin文件大小:', arrayBuffer.byteLength, '字节');\n          \n          // 拦截 XMLHttpRequest 登录请求\n          const originalXHR = window.XMLHttpRequest;\n          window.XMLHttpRequest = function() {\n            const xhr = new originalXHR();\n            \n            const originalOpen = xhr.open;\n            xhr.open = function(method, url) {\n              if (url.includes('login/authuser')) {\n                this._isLoginRequest = true;\n                console.log('[登录拦截器] 捕获到 XHR 登录请求:', method, url);\n              }\n              return originalOpen.apply(this, arguments);\n            };\n            \n            const originalSend = xhr.send;\n            xhr.send = function(data) {\n              if (this._isLoginRequest) {\n                console.log('[登录拦截器] 替换 XHR 请求体为 bin 文件内容');\n                return originalSend.call(this, arrayBuffer);\n              }\n              return originalSend.apply(this, arguments);\n            };\n            \n            return xhr;\n          };\n          \n          // 拦截 fetch 登录请求\n          if (window.fetch) {\n            const originalFetch = window.fetch;\n            window.fetch = function(url, options) {\n              if (typeof url === 'string' && url.includes('login/authuser')) {\n                console.log('[登录拦截器] 捕获到 fetch 登录请求:', url);\n                const newOptions = {\n                  ...options,\n                  method: 'POST',\n                  body: arrayBuffer,\n                  headers: {\n                    ...options?.headers,\n                    'Content-Type': 'application/octet-stream'\n                  }\n                };\n                console.log('[登录拦截器] 替换 fetch 请求体为 bin 文件内容');\n                return originalFetch(url, newOptions);\n              }\n              return originalFetch.apply(this, arguments);\n            };\n          }\n          \n          console.log('[登录拦截器] 登录请求拦截器注入完成');\n        })();\n      ").catch(_0x5cd005 => {
        console.error("登录拦截器注入失败:", _0x5cd005);
      });
    }
    setTimeout(() => {
      console.log("[修改器] 开始注入游戏修改器");
      _0x3bad4a.webContents.executeJavaScript("\n        (function() {\n          try {\n            console.log('[修改器] 开始执行游戏修改器脚本');\n            \n            // ==================== localStorage 扩展 ====================\n            const recordItems = {};\n            for (var key in recordItems) {\n              localStorage.setItem(key, recordItems[key]);\n            }\n            \n            const oldSetItem = localStorage.setItem;\n            localStorage.setItem = function (key, value) {\n              oldSetItem.call(this, key, value);\n              if (window.electron && window.electron.ipcRenderer) {\n                window.electron.ipcRenderer.send(\"setItemEx\", key, value);\n              }\n            };\n            \n            const oldRemoveItem = localStorage.removeItem;\n            localStorage.removeItem = function (key) {\n              oldRemoveItem.call(this, key);\n              if (window.electron && window.electron.ipcRenderer) {\n                window.electron.ipcRenderer.send(\"removeItemEx\", key);\n              }\n            };\n\n            // ==================== 游戏引擎修改（需要等待加载） ====================\n            function applyGameMods() {\n              console.log('[修改器] 尝试应用游戏修改');\n              \n              // 检查必要的对象是否存在\n              if (!window.__require) {\n                console.log('[修改器] window.__require 不存在');\n                return false;\n              }\n              \n              if (!window.cc) {\n                console.log('[修改器] window.cc 不存在');\n                return false;\n              }\n              \n              console.log('[修改器] 游戏引擎已加载，开始应用修改...');\n\n              // 游戏速度修改\n              try {\n                const configs = window.__require('Configs');\n                console.log('[修改器] Configs 对象:', configs);\n                \n                if(configs.HorseConstant) {\n                  console.log('[修改器] 修改前 HorseConstant.config:', configs.HorseConstant.config);\n                  configs.HorseConstant.config.pvpBattleSpeed = 100;\n                  console.log('[修改器] ✓ 已修改 pvpBattleSpeed');\n                  console.log('[修改器] 修改后 HorseConstant.config:', configs.HorseConstant.config);\n                } else {\n                  console.log('[修改器] HorseConstant 不存在');\n                }\n                \n                if(configs.NightMare) {\n                  console.log('[修改器] 修改前 NightMare.map:', configs.NightMare.map);\n                  configs.NightMare.map.forEach((v, index)=> {\n                    if (v) {\n                      v.BattleSpeed = 100;\n                      console.log('[修改器] ✓ 已修改 NightMare map[' + index + '].BattleSpeed');\n                    }\n                  });\n                  console.log('[修改器] ✓ 已修改 NightMare BattleSpeed');\n                  console.log('[修改器] 修改后 NightMare.map:', configs.NightMare.map);\n                } else {\n                  console.log('[修改器] NightMare 不存在');\n                }\n              } catch(e) {\n                console.error('[修改器] 速度修改失败:', e);\n              }\n\n              // TimerManager 修改\n              try {\n                const TimerManager = window.__require(\"TimerManager\").TimerManager;\n                const oldOnTimer = TimerManager.instance.onTimer;\n                if (!oldOnTimer.isSelfCreate) {\n                  TimerManager.instance.onTimer = function (...args) {\n                    if (args[0] && args[1] && args[0] == args[1]._updateQuench) {\n                      const callback = args[0];\n                      args[2] = 50;\n                      args[0] = callback.newCallback = function (e) {\n                        this._isInQuenchAnim = false;\n                        callback.call(this, e);\n                      };\n                      return oldOnTimer.call(this, ...args);\n                    }\n                    return oldOnTimer.call(this, ...args);\n                  };\n                  TimerManager.instance.onTimer.isSelfCreate = true;\n\n                  const oldOff = TimerManager.instance.off;\n                  TimerManager.instance.off = function (e, t) {\n                    if (e && e.newCallback) {\n                      oldOff.call(this, e.newCallback, t);\n                      delete e.newCallback;\n                    } else {\n                      oldOff.call(this, e, t);\n                    }\n                  };\n                  console.log('[修改器] ✓ 已修改 TimerManager');\n                }\n              } catch(e) {\n                console.error('[修改器] TimerManager修改失败:', e);\n              }\n\n              // PlatformManager 修改\n              try {\n                const PlatformManager = window.__require(\"PlatformManager\").PlatformManager;\n                const oldExitGame = PlatformManager.instance.exitGame;\n                if (!oldExitGame.isSelfCreate) {\n                  PlatformManager.instance.exitGame = function () {\n                    const floatText = document.createElement('div');\n                    floatText.textContent = '禁止退出游戏！';\n                    floatText.style.cssText = `\n                      position: fixed;\n                      top: 50%;\n                      left: 50%;\n                      transform: translate(-50%, -50%);\n                      color: red;\n                      background-color: white;\n                      padding: 12px 24px;\n                      border-radius: 8px;\n                      box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n                      font-size: 30px;\n                      font-weight: bold;\n                      z-index: 10000;\n                    `;\n                    document.body.appendChild(floatText);\n                    if (window.cc) {\n                      cc.director.pause();\n                    }\n                  };\n                  PlatformManager.instance.exitGame.isSelfCreate = true;\n                  console.log('[修改器] ✓ 已修改 PlatformManager');\n                }\n              } catch(e) {\n                console.error('[修改器] PlatformManager修改失败:', e);\n              }\n\n              // 自定义 UI 按钮\n              try {\n                if (window.cc && !cc.isAddCustomBtn) {\n                  // 设置页面标题\n                  const binFileName = '" + _0xd0749c + "';\n                  document.title = binFileName ? 'Zero - ' + binFileName : 'Zero';\n                  \n                  const oldRender = cc.renderer.render;\n                  const buttonContainer = document.createElement(\"div\");\n                  buttonContainer.style.cssText = `\n                    position: fixed;\n                    top: 5px;\n                    right: 5px;\n                    display: flex;\n                    gap: 5px;\n                    z-index: 10000;\n                    background-color: rgba(255, 255, 255, 0.1);\n                    padding: 5px 10px;\n                    border-radius: 15px;\n                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n                    opacity: 0.8;\n                  `;\n\n\n                  [\n                    { id: \"close\", text: \"关渲染\", color: \"#F44336\" },\n                    { id: \"open\", text: \"开渲染\", color: \"#4CAF50\" },\n                  ].forEach((btnData) => {\n                    const button = document.createElement(\"button\");\n                    button.id = btnData.id;\n                    button.textContent = btnData.text;\n                    button.style.cssText = `\n                      padding: 4px 8px;\n                      border: none;\n                      border-radius: 10px;\n                      background-color: ${btnData.color};\n                      color: white;\n                      cursor: pointer;\n                      font-weight: bold;\n                      transition: all 0.3s;\n                      font-size: 0.6em;\n                    `;\n                    \n                    button.addEventListener(\"mouseover\", function () {\n                      button.style.opacity = \"0.8\";\n                      button.style.transform = \"scale(1.05)\";\n                    });\n\n                    button.addEventListener(\"mouseout\", function () {\n                      button.style.opacity = \"1\";\n                      button.style.transform = \"scale(1)\";\n                    });\n\n                    button.addEventListener(\"click\", function () {\n                      if (btnData.id == \"close\") {\n                        cc.renderer.customRenderCount = 0;\n                        cc.renderer.render = function (ecScene, dt) {\n                          cc.renderer.customRenderCount++;\n                          if (cc.renderer.customRenderCount % 300 == 0) {\n                            oldRender.call(this, ecScene, dt);\n                          }\n                        };\n                        if (window.electron && window.electron.ipcRenderer) {\n                          window.electron.ipcRenderer.send(\"disableRender\", \"1\");\n                        }\n                      } else if (btnData.id == \"open\") {\n                        cc.renderer.render = oldRender;\n                        if (window.electron && window.electron.ipcRenderer) {\n                          window.electron.ipcRenderer.send(\"disableRender\", \"0\");\n                        }\n                      }\n                    });\n\n                    buttonContainer.appendChild(button);\n                  });\n\n                  document.body.appendChild(buttonContainer);\n                  cc.isAddCustomBtn = true;\n                  console.log('[修改器] ✓ 已添加自定义按钮');\n                }\n              } catch(e) {\n                console.error('[修改器] UI按钮添加失败:', e);\n              }\n\n              console.log('[修改器] 游戏修改应用完成！');\n              return true;\n            }\n\n            // 开始尝试应用修改\n            let attempts = 0;\n            const maxAttempts = 10;\n            \n            function tryApplyMods() {\n              attempts++;\n              console.log('[修改器] 尝试应用修改，第 ' + attempts + ' 次');\n              \n              const success = applyGameMods();\n              if (success) {\n                console.log('[修改器] 游戏修改已成功应用');\n              } else if (attempts < maxAttempts) {\n                console.log('[修改器] 修改应用失败，' + (2000 * attempts) + 'ms 后重试...');\n                setTimeout(tryApplyMods, 2000 * attempts);\n              } else {\n                console.log('[修改器] 达到最大重试次数，停止重试');\n              }\n            }\n            \n            tryApplyMods();\n\n          } catch(e) {\n            console.error('[修改器] 初始化失败:', e);\n          }\n        })();\n      ").catch(_0x3c030b => {
        console.error("脚本注入失败:", _0x3c030b);
      });
    }, 5000);
  });
  _0x3bad4a.on("ready-to-show", () => {
    _0x3bad4a.show();
  });
  _0x3bad4a.on("closed", () => {
    console.log("[窗口" + _0x616729 + "] 正在关闭");
  });
  return _0x3bad4a;
}
ipcMain.on("setItemEx", (_0x440b6e, _0x8e2161, _0xf28dbc) => {
  console.log("localStorage.setItem: " + _0x8e2161 + " = " + _0xf28dbc);
});
ipcMain.on("removeItemEx", (_0x9fb51e, _0x25a807) => {
  console.log("localStorage.removeItem: " + _0x25a807);
});
ipcMain.on("disableRender", (_0x1c1e0d, _0x4cd2a1) => {
  console.log("渲染状态: " + (_0x4cd2a1 === "1" ? "已禁用" : "已启用"));
});
app.whenReady().then(async () => {
  try {
    console.log("[应用] Electron 应用已准备就绪");
    console.log("[应用] 进程参数: " + JSON.stringify(process.argv));
    console.log("[应用] 工作目录: " + process.cwd());
    console.log("[应用] 资源路径: " + process.resourcesPath);
    console.log("[应用] 跳过服务器启动，直接加载网页");
    const _0x24c386 = process.argv.slice(2);
    console.log("[应用] 命令行参数: " + JSON.stringify(_0x24c386));
    let _0xe6f232 = [];
    _0x24c386.length > 0 && (_0xe6f232 = _0x24c386.filter(_0x3ae68d => _0x3ae68d.toLowerCase().endsWith(".bin") && fs.existsSync(_0x3ae68d)), console.log("[应用] 从命令行参数找到的 BIN 文件: " + JSON.stringify(_0xe6f232)));
    if (_0xe6f232.length === 0) {
      console.log("[应用] 显示文件选择对话框");
      const _0x5e0a2b = new BrowserWindow({
        show: false,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true
        }
      });
      const _0x27dc29 = await dialog.showOpenDialog(_0x5e0a2b, {
        title: "选择游戏 BIN 文件",
        properties: ["openFile", "multiSelections"],
        filters: [{
          name: "BIN 文件",
          extensions: ["bin", "BIN"]
        }]
      });
      _0x5e0a2b.close();
      _0xe6f232 = _0x27dc29.canceled ? [] : _0x27dc29.filePaths;
      console.log("[应用] 用户选择的 BIN 文件: " + JSON.stringify(_0xe6f232));
    }
    if (_0xe6f232.length > 0) {
      console.log("[应用] 为 " + _0xe6f232.length + " 个 BIN 文件创建窗口");
      for (let _0x158bde = 0; _0x158bde < _0xe6f232.length; _0x158bde++) {
        const _0x465216 = _0xe6f232[_0x158bde];
        createWindow(_0x465216, _0x158bde);
      }
    } else {
      console.log("[应用] 启动默认窗口");
      createWindow(null, 0);
    }
  } catch (_0x3eb7b0) {
    console.error("[应用启动] 启动失败:", _0x3eb7b0);
    dialog.showErrorBox("应用启动失败", "启动时发生错误: " + _0x3eb7b0.message);
    app.quit();
  }
});
app.on("window-all-closed", () => {
  console.log("[应用] 所有窗口已关闭");
  console.log("[应用] 应用关闭");
  process.platform !== "darwin" && app.quit();
});
app.on("activate", () => {
  BrowserWindow.getAllWindows().length === 0 && createWindow(null, 0);
});