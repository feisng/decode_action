//Wed Feb 11 2026 02:21:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _xor = function (_0xcdb6cc, _0x33e37f) {
  return _0xcdb6cc ^ _0x33e37f;
};
var _and = function (_0x3dc81c, _0x1a8be9) {
  return _0x3dc81c & _0x1a8be9;
};
var _or = function (_0x4ad2bd, _0x30ae50) {
  return _0x4ad2bd | _0x30ae50;
};
var _shl = function (_0x13fb54, _0x233e2a) {
  return _0x13fb54 << _0x233e2a;
};
var _shr = function (_0x569b79, _0x471314) {
  return _0x569b79 >> _0x471314;
};
var _not = function (_0x5360c0) {
  return ~_0x5360c0;
};
var _add = function (_0x429e89, _0x4b0e43) {
  return _0x429e89 + _0x4b0e43;
};
var _sub = function (_0x1733f7, _0x232049) {
  return _0x1733f7 - _0x232049;
};
var unsafeWindow = window;
if (typeof GM_addStyle === "undefined") {
  var GM_addStyle = function (_0x1b71c3) {
    var _0xcabec = document.createElement("style");
    _0xcabec.textContent = _0x1b71c3;
    document.head.appendChild(_0xcabec);
  };
}
if (typeof GM_xmlhttpRequest === "undefined") {
  var GM_xmlhttpRequest = function (_0x34fffa) {
    return fetch(_0x34fffa.url, {
      method: _0x34fffa.method || "GET",
      headers: _0x34fffa.headers,
      body: _0x34fffa.data,
      credentials: "include"
    }).then(function (_0x2de6ab) {
      var _0xf2e21 = {
        status: _0x2de6ab.status,
        responseHeaders: Array.from(_0x2de6ab.headers.entries()).map(([_0x2931ad, _0x186e5e]) => _0x2931ad + ": " + _0x186e5e).join("\n"),
        responseText: ""
      };
      return _0x2de6ab.text().then(function (_0x4722ae) {
        _0xf2e21.responseText = _0x4722ae;
        if (_0x34fffa.onload) {
          _0x34fffa.onload(_0xf2e21);
        }
        return _0xf2e21;
      }).catch(function (_0x400cf1) {
        const _0x36011b = {
          error: _0x400cf1
        };
        if (_0x34fffa.onerror) {
          _0x34fffa.onerror(_0x36011b);
        }
        throw _0x400cf1;
      });
    }).catch(function (_0x1e9948) {
      const _0x1cd9bc = {
        error: _0x1e9948
      };
      if (_0x34fffa.onerror) {
        _0x34fffa.onerror(_0x1cd9bc);
      }
      throw _0x1e9948;
    });
  };
}
(function () {
  "use strict";
  const _0x2c8a46 = {
    primary: "#3b82f6",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    dark: "#0b1220",
    lightDark: "#1a2333",
    text: "#eaf0f7",
    textLight: "#9fb2c7",
    border: "rgba(255,255,255,0.22)"
  };
  const _0x2a213a = {
    btn: "0 6px 14px rgba(0,0,0,0.25)",
    tip: "0 8px 20px rgba(0,0,0,0.35)",
    panel: "0 16px 48px rgba(0,0,0,0.45)",
    minBtn: "0 2px 6px rgba(0,0,0,0.35)"
  };
  const _0x350b25 = {
    base: 11,
    small: 9,
    medium: 12,
    title: 13,
    minBtn: 14
  };
  const _0xd6531c = {
    colors: _0x2c8a46,
    shadows: _0x2a213a,
    zIndex: 99999,
    baseWidth: 264,
    minWidth: 240,
    fontSize: _0x350b25,
    radius: 10,
    radiusSmall: 8,
    transition: "all 0.18s ease",
    opacity: 0.95,
    overlay: {}
  };
  _0xd6531c.overlay.background = "radial-gradient(60% 60% at 50% 40%, rgba(2,6,23,0.70), rgba(2,6,23,0.60))";
  _0xd6531c.overlay.backdrop = "blur(4px) saturate(1.05)";
  const _0x4822e7 = {
    top: "50px",
    left: "20px"
  };
  const _0x4a546a = {
    top: "100px",
    left: "20px"
  };
  const _0x3e4c1b = {
    toggleBtn: _0x4822e7,
    panel: _0x4a546a
  };
  const _0x5b26c7 = {
    ui: _0xd6531c,
    position: _0x3e4c1b,
    activeModule: "server-script",
    isPanelVisible: false
  };
  window.treasureQueryWebSocket = null;
  window.isWebSocketConnected = false;
  const _0x54bd58 = {
    isPaused: false,
    isStopped: false,
    isRunning: false
  };
  function _0x513bb5(_0x45a0c8, _0x34f99d = "info") {
    {
      console.log("[服务器脚本] " + _0x45a0c8);
    }
  }
  function _0x533a2b(_0x2c48fa, _0x9f0ba1 = "info") {
    console.log("[提示] " + _0x2c48fa);
  }
  const _0x577d55 = new Map();
  function _0x53be65() {
    let _0x5ab3eb = document.getElementById("server-script-container");
    !_0x5ab3eb && (_0x5ab3eb = document.createElement("div"), _0x5ab3eb.id = "server-script-container", _0x5ab3eb.style.cssText = "\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 0;\n                height: 0;\n                overflow: hidden;\n                z-index: -1;\n            ", document.body.appendChild(_0x5ab3eb));
    return _0x5ab3eb;
  }
  function _0x41413c() {
    return {
      elementsCount: document.body.children.length,
      scriptsCount: document.querySelectorAll("script").length
    };
  }
  function _0x3e6801(_0x3bd7ec, _0x54ea55) {
    const _0x3f4a9f = Object.keys(window);
    const _0x1de168 = {
      initialGlobalKeys: _0x3f4a9f,
      initialDOMState: _0x54ea55,
      createdElements: []
    };
    _0x577d55.set(_0x3bd7ec, _0x1de168);
    const _0x4d2350 = new MutationObserver(_0x4364b => {
      _0x4364b.forEach(_0x1dfe2a => {
        _0x1dfe2a.addedNodes.forEach(_0x7d8f01 => {
          {
            if (_0x7d8f01.nodeType === 1 && _0x7d8f01.id !== "server-script-container") {
              {
                _0x7d8f01.setAttribute("data-script-created", _0x3bd7ec);
                const _0xd4aafb = _0x577d55.get(_0x3bd7ec);
                _0xd4aafb && _0xd4aafb.createdElements.push(_0x7d8f01);
              }
            }
          }
        });
      });
    });
    const _0x7a0942 = {
      childList: true,
      subtree: true
    };
    _0x4d2350.observe(document.body, _0x7a0942);
    setTimeout(() => {
      _0x4d2350.disconnect();
    }, 3000);
  }
  function _0xc93edf(_0x518dbb, _0x357710) {
    {
      try {
        {
          _0x2073b0(_0x357710);
          const _0x45068b = _0x53be65();
          const _0x50ee84 = _0x41413c();
          _0x3e6801(_0x357710, _0x50ee84);
          const _0x919740 = document.createElement("script");
          _0x919740.type = "text/javascript";
          _0x919740.textContent = _0x518dbb;
          _0x919740.setAttribute("data-script-name", _0x357710);
          _0x919740.setAttribute("data-script-source", "server-script");
          _0x45068b.appendChild(_0x919740);
          _0x513bb5("✅ 脚本 " + _0x357710 + " 已成功加载到页面", "success");
          _0x533a2b("✅ 脚本 " + _0x357710 + " 已成功加载", "success");
        }
      } catch (_0x536ccc) {
        {
          _0x513bb5("❌ 加载脚本 " + _0x357710 + " 失败: " + _0x536ccc.message, "error");
          _0x533a2b("❌ 加载脚本 " + _0x357710 + " 失败", "error");
        }
      }
    }
  }
  window.loadScriptToPage = _0xc93edf;
  function _0x2073b0(_0x4b0dbf) {
    try {
      _0x513bb5("🔄 开始移除脚本 " + _0x4b0dbf + "...");
      const _0x23bcf6 = document.querySelectorAll("[data-script-created=\"" + _0x4b0dbf + "\"]");
      _0x23bcf6.forEach(_0x6beb04 => {
        _0x6beb04.parentNode && _0x6beb04.parentNode.removeChild(_0x6beb04);
      });
      _0x513bb5("✅ 移除了 " + _0x23bcf6.length + " 个脚本创建的DOM元素", "info");
      const _0x56dbca = document.getElementById("server-script-container");
      if (_0x56dbca) {
        {
          const _0x5e573d = _0x56dbca.querySelector("script[data-script-name=\"" + _0x4b0dbf + "\"]");
          _0x5e573d && (_0x5e573d.remove(), _0x513bb5("✅ 移除了脚本标签", "info"));
        }
      }
      const _0x5d060c = document.querySelectorAll("script[data-script-name=\"" + _0x4b0dbf + "\"]:not(#server-script-container script)");
      _0x5d060c.forEach(_0x164191 => {
        _0x164191.remove();
      });
      _0x5d060c.length > 0 && _0x513bb5("✅ 移除了 " + _0x5d060c.length + " 个全局脚本标签", "info");
      _0x577d55.delete(_0x4b0dbf);
      const _0x397001 = _0x33eefe();
      if (_0x397001[_0x4b0dbf] === false) {
        {
          delete _0x397001[_0x4b0dbf];
          _0x5f2319(_0x397001);
        }
      }
      _0x513bb5("✅ 脚本 " + _0x4b0dbf + " 已成功移除", "success");
      _0x533a2b("✅ 脚本 " + _0x4b0dbf + " 已成功关闭并清理", "info");
    } catch (_0x4d394c) {
      _0x513bb5("❌ 移除脚本 " + _0x4b0dbf + " 失败: " + _0x4d394c.message, "error");
    }
  }
  function _0x33eefe() {
    try {
      const _0x304795 = localStorage.getItem("serverScriptStates");
      return _0x304795 ? JSON.parse(_0x304795) : {};
    } catch (_0x3b7ca3) {
      _0x513bb5("加载脚本状态失败", "error");
      return {};
    }
  }
  function _0x5f2319(_0x4e3f36) {
    try {
      localStorage.setItem("serverScriptStates", JSON.stringify(_0x4e3f36));
    } catch (_0x549921) {
      _0x513bb5("保存脚本状态失败", "error");
    }
  }
  function _0x5d4f86(_0x17a746) {
    try {
      if (window.treasureQueryWebSocket && window.treasureQueryWebSocket.readyState === WebSocket.OPEN) {
        {
          const _0x3f74c4 = {
            type: "get_script_file",
            client_id: window.gameClientId || "game_unknown_" + Date.now(),
            client_type: "game",
            script_file: _0x17a746
          };
          window.treasureQueryWebSocket.send(JSON.stringify(_0x3f74c4));
          _0x513bb5("正在加载脚本: " + _0x17a746, "info");
        }
      } else {
        _0x513bb5("未连接到助战服务器，请先连接", "warning");
      }
    } catch (_0x21515b) {
      _0x513bb5("加载脚本失败: " + _0x21515b.message, "error");
    }
  }
  window.renderScriptList = function (_0x4515b2) {
    {
      const _0x1a5070 = document.getElementById("server-script-list");
      if (!_0x1a5070) {
        return;
      }
      const _0x5c18da = _0x33eefe();
      if (_0x4515b2.length === 0) {
        _0x1a5070.innerHTML = "<div class=\"server-script-empty\">暂无脚本文件</div>";
        return;
      }
      _0x1a5070.innerHTML = _0x4515b2.map(function (_0x62a863) {
        const _0x518b06 = _0x5c18da[_0x62a863] || false;
        return "<div class=\"server-script-item\"><span class=\"server-script-name\">" + _0x62a863 + "</span>" + "<div class=\"server-script-controls\">" + "<label class=\"server-script-switch\">" + "<input type=\"checkbox\" data-script=\"" + _0x62a863 + "\" " + (_0x518b06 ? "checked" : "") + ">" + "<span class=\"server-script-slider\"></span>" + "</label>" + "</div>" + "</div>";
      }).join("");
      _0x1a5070.querySelectorAll(".server-script-switch input").forEach(function (_0x521219) {
        _0x521219.addEventListener("change", function () {
          const _0x3b2ea5 = this.dataset.script;
          const _0x4bbe71 = this.checked;
          const _0x320979 = _0x33eefe();
          _0x320979[_0x3b2ea5] = _0x4bbe71;
          _0x5f2319(_0x320979);
          if (_0x4bbe71) {
            {
              _0x5d4f86(_0x3b2ea5);
            }
          } else {
            _0x2073b0(_0x3b2ea5);
          }
        });
      });
      _0x4515b2.forEach(function (_0x4f6973) {
        _0x5c18da[_0x4f6973] && _0x5d4f86(_0x4f6973);
      });
    }
  };
  function _0x52222d() {
    try {
      if (window.treasureQueryWebSocket && window.treasureQueryWebSocket.readyState === WebSocket.OPEN) {
        const _0x3e28e7 = {
          type: "get_script_file_list",
          client_id: window.gameClientId || "game_unknown_" + Date.now(),
          client_type: "game"
        };
        window.treasureQueryWebSocket.send(JSON.stringify(_0x3e28e7));
        _0x513bb5("正在请求服务器脚本文件列表...", "info");
      } else {
        {
          _0x513bb5("未连接到助战服务器，请先连接", "warning");
        }
      }
    } catch (_0x28d831) {
      _0x513bb5("请求脚本文件列表失败: " + _0x28d831.message, "error");
    }
  }
  window.requestScriptFileList = _0x52222d;
  function _0x54f774() {
    try {
      _0x513bb5("🚀 开始连接服务器脚本服务器...");
      window.treasureQueryWebSocket && (_0x513bb5("🔄 关闭现有WebSocket连接..."), window.treasureQueryWebSocket.close());
      let _0x4c0207 = "ws://101.43.84.175:8765";
      _0x513bb5("🌐 正在连接到服务器: " + _0x4c0207);
      window.treasureQueryWebSocket = new WebSocket(_0x4c0207);
      window.treasureQueryWebSocket.onopen = function () {
        {
          window.isWebSocketConnected = true;
          _0x513bb5("✅ WebSocket连接成功！");
          const _0x82c2f1 = "game_unknown_" + Date.now();
          window.gameClientId = _0x82c2f1;
          const _0x3f6c72 = {
            type: "client_info",
            client_id: _0x82c2f1,
            client_type: "game",
            current_account: "未知账号",
            is_game_connected: true,
            is_querying: false
          };
          window.treasureQueryWebSocket.send(JSON.stringify(_0x3f6c72));
          _0x513bb5("📤 发送客户端信息到服务器");
          window.requestScriptFileList();
        }
      };
      window.treasureQueryWebSocket.onmessage = function (_0x36aea4) {
        let _0x14c826;
        try {
          {
            _0x14c826 = JSON.parse(_0x36aea4.data);
          }
        } catch (_0x13753a) {
          _0x513bb5("收到非JSON消息: " + _0x36aea4.data);
          return;
        }
        _0x14c826 && _0x14c826.type === "script_file_list" && (_0x513bb5("📋 收到服务器脚本文件列表，共 " + _0x14c826.files.length + " 个文件"), window.renderScriptList(_0x14c826.files));
        if (_0x14c826 && _0x14c826.type === "script_file_content") {
          {
            _0x513bb5("📋 收到服务器脚本文件 " + _0x14c826.file_name + " 内容");
            _0x14c826.content && window.loadScriptToPage(_0x14c826.content, _0x14c826.file_name);
          }
        }
      };
      window.treasureQueryWebSocket.onclose = function (_0x3d015e) {
        window.isWebSocketConnected = false;
        window.treasureQueryWebSocket = null;
        _0x513bb5("❌ WebSocket连接已关闭: " + _0x3d015e.code + " - " + _0x3d015e.reason);
      };
      window.treasureQueryWebSocket.onerror = function (_0x41e0a4) {
        window.isWebSocketConnected = false;
        _0x513bb5("❌ WebSocket连接错误: " + _0x41e0a4.message);
        _0x533a2b("连接服务器脚本服务器错误", "error");
      };
    } catch (_0x3d844f) {
      {
        _0x513bb5("❌ 连接服务器脚本服务器失败: " + _0x3d844f.message);
        _0x533a2b("连接服务器脚本服务器失败", "error");
      }
    }
  }
  function _0x50d4a1() {
    if (treasureQueryWebSocket) {
      {
        treasureQueryWebSocket.close();
        treasureQueryWebSocket = null;
        isWebSocketConnected = false;
        _0x513bb5("❌ 已断开服务器脚本服务器连接");
      }
    }
  }
  function _0x1069fe() {
    const _0x34e467 = document.createElement("div");
    var _0x3d88c0 = ["a1a753d4", "b9b459da", "452bd142"];
    _0x34e467.id = "module-server-script";
    _0x34e467.className = "module-content";
    _0x34e467.style.cssText = "display: block;padding: 8px;background: rgba(15,23,42,0.95);border-radius: 6px;border: 1px solid rgba(51,65,85,0.5);";
    const _0x5339eb = document.createElement("style");
    _0x5339eb.textContent = "/* 服务器脚本列表样式 */.server-script-list {    max-height: 200px;    overflow-y: auto;    margin: 12px 0;    -webkit-overflow-scrolling: touch;    scrollbar-width: thin;    scrollbar-color: rgba(255,255,255,0.3) transparent;    background: transparent;    display: block;    flex-direction: unset;    gap: 0;}.server-script-item {    display: flex;    align-items: center;    justify-content: space-between;    padding: 8px 10px;    background: rgba(255,255,255,0.05);    border-radius: 6px;    margin-bottom: 6px;    font-size: 12px;}.server-script-name {    flex: 1;    color: white;    margin-right: 10px;    overflow: hidden;    text-overflow: ellipsis;    white-space: nowrap;}/* 开关按钮样式 */.server-script-switch {    position: relative;    display: inline-block;    width: 36px;    height: 20px;}.server-script-switch input {    opacity: 0;    width: 0;    height: 0;}.server-script-slider {    position: absolute;    cursor: pointer;    top: 0;    left: 0;    right: 0;    bottom: 0;    background-color: rgba(255,255,255,0.2);    transition: .4s;    border-radius: 20px;}.server-script-slider:before {    position: absolute;    content: \"\";    height: 16px;    width: 16px;    left: 2px;    bottom: 2px;    background-color: white;    transition: .4s;    border-radius: 50%;}input:checked + .server-script-slider {    background-color: #27ae60;}input:focus + .server-script-slider {    box-shadow: 0 0 1px #27ae60;}input:checked + .server-script-slider:before {    transform: translateX(16px);}/* 空状态样式 */.server-script-empty {    text-align: center;    color: #888;    padding: 20px;    font-size: 12px;    background: transparent;    display: block;    flex-direction: unset;    gap: 0;}/* 面板样式 */#server-script-panel {    position: fixed;    width: 280px;    background: rgba(15,23,42,0.95);    border-radius: 10px;    border: 1px solid rgba(51,65,85,0.5);    box-shadow: 0 16px 48px rgba(0,0,0,0.45);    z-index: 99998;    padding: 10px;    display: none;    transition: all 0.3s ease;    cursor: default;}#server-script-panel:hover .panel-title {    cursor: grab;}#server-script-panel:active .panel-title {    cursor: grabbing;}/* 选项卡样式 */.server-script-tabs {    display: flex;    margin-bottom: 10px;    background: rgba(255,255,255,0.05);    border-radius: 8px;    overflow: hidden;}.server-script-tab-btn {    flex: 1;    padding: 8px 0;    background: transparent;    color: #9fb2c7;    border: none;    font-size: 12px;    cursor: pointer;    transition: all 0.2s ease;    outline: none;}.server-script-tab-btn:hover {    background: rgba(255,255,255,0.1);    color: #eaf0f7;}.server-script-tab-btn.active {    background: rgba(59, 130, 246, 0.3);    color: #3b82f6;    font-weight: bold;}.server-script-module {    background: transparent;    border-radius: 8px;    transition: all 0.3s ease;}/* 悬浮按钮样式 */#server-script-toggle {    width: 48px;    height: 48px;    position: fixed;    right: 20px;    top: 20px;    background: #3b82f6;    border: none;    border-radius: 50%;    display: flex;    align-items: center;    justify-content: center;    font-size: 24px;    cursor: pointer;    border: 2px solid rgba(255,255,255,0.3);    box-shadow: 0 6px 14px rgba(0,0,0,0.25);    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;    z-index: 99999;    user-select: none;}#server-script-toggle:hover {    background: #2563eb;    transform: scale(1.1);    box-shadow: 0 8px 20px rgba(0,0,0,0.35);}/* 标题样式 */.panel-title {    margin: 0 0 12px 0;    color: #3b82f6;    font-size: 14px;    text-align: center;}/* 按钮样式 */.panel-btn {    padding: 6px 12px;    background: #3b82f6;    color: white;    border: none;    border-radius: 4px;    font-size: 13px;    cursor: pointer;    transition: background-color 0.3s ease;    width: 100%;    margin-top: 8px;}.panel-btn:hover {    background: #2563eb;}.panel-btn-success {    background: #10b981;}.panel-btn-success:hover {    background: #059669;}/* 账号列表样式 */.account-list {    max-height: 200px;    overflow-y: auto;    margin: 12px 0;    -webkit-overflow-scrolling: touch;    scrollbar-width: thin;    scrollbar-color: rgba(255,255,255,0.3) transparent;    background: transparent;}.account-item {    display: flex;    align-items: center;    justify-content: space-between;    padding: 8px 10px;    background: rgba(255,255,255,0.05);    border-radius: 6px;    margin-bottom: 6px;    font-size: 12px;    cursor: pointer;    transition: all 0.2s ease;}.account-item:hover {    background: rgba(255,255,255,0.1);}.account-item.active {    background: rgba(59, 130, 246, 0.3);    border-left: 3px solid #3b82f6;}.account-name {    flex: 1;    color: white;    margin-right: 10px;    overflow: hidden;    text-overflow: ellipsis;    white-space: nowrap;}.account-actions {    display: flex;    gap: 5px;}.account-btn {    padding: 3px 6px;    background: transparent;    color: #9fb2c7;    border: 1px solid rgba(255,255,255,0.2);    border-radius: 4px;    font-size: 10px;    cursor: pointer;    transition: all 0.2s ease;}.account-btn:hover {    background: rgba(255,255,255,0.1);    color: #eaf0f7;}.account-btn-delete {    color: #ef4444;    border-color: rgba(239, 68, 68, 0.3);}.account-btn-delete:hover {    background: rgba(239, 68, 68, 0.2);}.account-btn-login {    color: #10b981;    border-color: rgba(16, 185, 129, 0.3);}.account-btn-login:hover {    background: rgba(16, 185, 129, 0.2);}.account-upload-area {    padding: 15px;    background: rgba(255,255,255,0.05);    border: 2px dashed rgba(255,255,255,0.2);    border-radius: 8px;    text-align: center;    cursor: pointer;    transition: all 0.2s ease;    margin: 12px 0;}.account-upload-area:hover {    background: rgba(255,255,255,0.1);    border-color: rgba(59, 130, 246, 0.5);}.account-upload-text {    color: #9fb2c7;    font-size: 11px;    margin-bottom: 5px;}.account-upload-hint {    color: #64748b;    font-size: 10px;}.account-empty {    text-align: center;    color: #888;    padding: 20px;    font-size: 12px;    background: transparent;}";
    var _0x4815db = function () {
      {
        return "d5990ca29be191648ae5dc22";
      }
    }();
    document.head.appendChild(_0x5339eb);
    const _0x5d9580 = document.createElement("h3");
    _0x5d9580.textContent = "服务器脚本";
    _0x5d9580.className = "panel-title";
    _0x34e467.appendChild(_0x5d9580);
    const _0x43cc81 = document.createElement("div");
    _0x43cc81.id = "server-script-list";
    _0x43cc81.className = "server-script-list";
    _0x43cc81.innerHTML = "<div class=\"server-script-empty\">暂无脚本文件</div>";
    _0x34e467.appendChild(_0x43cc81);
    const _0x2335b5 = document.createElement("button");
    _0x2335b5.id = "server-script-update-btn";
    _0x2335b5.textContent = "更新列表";
    _0x2335b5.className = "panel-btn";
    _0x2335b5.addEventListener("click", function () {
      {
        _0x52222d();
      }
    });
    _0x34e467.appendChild(_0x2335b5);
    const _0x20d292 = document.createElement("button");
    _0x20d292.id = "server-script-upload-btn";
    _0x20d292.textContent = "上传脚本";
    _0x20d292.style.cssText = "padding: 6px 12px;background: #10b981;color: white;border: none;border-radius: 4px;font-size: 13px;cursor: pointer;transition: background-color 0.3s ease;width: 100%;margin-top: 8px;";
    _0x34e467.appendChild(_0x20d292);
    const _0x1ba45c = document.createElement("input");
    _0x1ba45c.type = "file";
    _0x1ba45c.id = "server-script-file-input";
    _0x1ba45c.accept = "*";
    _0x1ba45c.style.display = "none";
    _0x34e467.appendChild(_0x1ba45c);
    const _0x19de2a = document.createElement("div");
    _0x19de2a.id = "server-script-upload-progress-container";
    _0x19de2a.style.cssText = "margin-top: 1px;background: rgba(255,255,255,0.05);border-radius: 1px;padding: 1px;";
    const _0x140c91 = document.createElement("div");
    _0x140c91.style.cssText = "width: 100%;height: 2px;background: rgba(255, 255, 255, 0);border-radius: 5px;overflow: hidden;";
    const _0x16e6eb = document.createElement("div");
    _0x16e6eb.id = "server-script-progress-bar";
    _0x16e6eb.style.cssText = "height: 20%;width: 0%;background: #10b981;border-radius: 1px;transition: width 0.3s ease;";
    _0x140c91.appendChild(_0x16e6eb);
    _0x19de2a.appendChild(_0x140c91);
    const _0x4c6d83 = document.createElement("div");
    _0x4c6d83.id = "server-script-progress-percent";
    _0x4c6d83.style.cssText = "font-size: 11px;color: white;text-align: center;margin-top: 1px;";
    _0x19de2a.appendChild(_0x4c6d83);
    _0x34e467.appendChild(_0x19de2a);
    const _0x1c3d52 = 524288;
    async function _0x54bc76(_0x1d2002) {
      try {
        if (!treasureQueryWebSocket || treasureQueryWebSocket.readyState !== WebSocket.OPEN) {
          _0x513bb5("未连接到助战服务器，请先连接", "warning");
          return;
        }
        _0x19de2a.style.display = "block";
        const _0x3728fc = Math.ceil(_0x1d2002.size / _0x1c3d52);
        let _0xe014a2 = 0;
        const _0x27d18f = {
          type: "upload_script_file",
          client_id: window.gameClientId,
          client_type: "game",
          file_name: _0x1d2002.name,
          file_size: _0x1d2002.size,
          total_chunks: _0x3728fc,
          chunk_size: _0x1c3d52
        };
        treasureQueryWebSocket.send(JSON.stringify(_0x27d18f));
        for (let _0x342816 = 0; _0x342816 < _0x3728fc; _0x342816++) {
          const _0x3d6055 = _0x342816 * _0x1c3d52;
          const _0x1a7708 = Math.min(_0x3d6055 + _0x1c3d52, _0x1d2002.size);
          const _0x48580c = _0x1d2002.slice(_0x3d6055, _0x1a7708);
          const _0x37171b = new FileReader();
          const _0x56c1fa = await new Promise((_0x30a224, _0x2d2f3d) => {
            _0x37171b.onload = _0x8b6107 => _0x30a224(_0x8b6107.target.result);
            _0x37171b.onerror = _0x2d2f3d;
            _0x37171b.readAsText(_0x48580c);
          });
          const _0x14ad26 = {
            type: "upload_script_chunk",
            client_id: window.gameClientId,
            client_type: "game",
            file_name: _0x1d2002.name,
            chunk_index: _0x342816,
            total_chunks: _0x3728fc,
            chunk_content: _0x56c1fa
          };
          treasureQueryWebSocket.send(JSON.stringify(_0x14ad26));
          _0xe014a2++;
          const _0x27cf60 = Math.round(_0xe014a2 / _0x3728fc * 100);
          _0x16e6eb.style.width = _0x27cf60 + "%";
          _0x4c6d83.textContent = _0x27cf60 + "%";
          await new Promise(_0x34ec77 => setTimeout(_0x34ec77, 50));
        }
        const _0x998aeb = {
          type: "upload_script_finish",
          client_id: window.gameClientId,
          client_type: "game",
          file_name: _0x1d2002.name
        };
        treasureQueryWebSocket.send(JSON.stringify(_0x998aeb));
        setTimeout(() => {
          _0x16e6eb.style.width = "0%";
          _0x4c6d83.textContent = "0%";
        }, 1000);
        _0x533a2b("文件上传成功，等待管理员审核", "info");
        setTimeout(_0x52222d, 1500);
      } catch (_0x3b41aa) {
        _0x513bb5("文件上传失败: " + _0x3b41aa.message, "error");
        _0x16e6eb.style.width = "0%";
        _0x4c6d83.textContent = "0%";
      }
    }
    _0x20d292.addEventListener("click", function () {
      _0x1ba45c.click();
    });
    _0x1ba45c.addEventListener("change", function (_0xe9ac04) {
      const _0xd18dc3 = _0xe9ac04.target.files[0];
      _0xd18dc3 && _0x54bc76(_0xd18dc3);
    });
    return _0x34e467;
  }
  function _0x490846() {
    const _0x4f0fc5 = document.createElement("div");
    _0x4f0fc5.id = "module-account-login";
    _0x4f0fc5.className = "module-content";
    _0x4f0fc5.style.cssText = "display: block;padding: 8px;background: rgba(15,23,42,0.95);border-radius: 6px;border: 1px solid rgba(51,65,85,0.5);";
    const _0x47f015 = document.createElement("h3");
    _0x47f015.textContent = "账号登录";
    _0x47f015.className = "panel-title";
    _0x4f0fc5.appendChild(_0x47f015);
    const _0x4fd474 = document.createElement("div");
    _0x4fd474.id = "account-list";
    _0x4fd474.className = "account-list";
    _0x4fd474.innerHTML = "<div class=\"account-empty\">暂无账号</div>";
    _0x4f0fc5.appendChild(_0x4fd474);
    const _0x43febb = document.createElement("div");
    _0x43febb.className = "account-upload-area";
    _0x43febb.innerHTML = "<div class=\"account-upload-text\">点击或拖拽上传账号文件</div><div class=\"account-upload-hint\">支持.bin文件，自动解析账号数据</div>";
    const _0x3618f6 = document.createElement("input");
    _0x3618f6.type = "file";
    _0x3618f6.id = "account-file-input";
    _0x3618f6.accept = ".bin";
    _0x3618f6.style.display = "none";
    _0x4f0fc5.appendChild(_0x3618f6);
    _0x43febb.addEventListener("click", function () {
      _0x3618f6.click();
    });
    _0x43febb.addEventListener("dragover", function (_0x7d2398) {
      _0x7d2398.preventDefault();
      _0x7d2398.stopPropagation();
      this.style.background = "rgba(255,255,255,0.1)";
    });
    _0x43febb.addEventListener("dragleave", function (_0x167a96) {
      _0x167a96.preventDefault();
      _0x167a96.stopPropagation();
      this.style.background = "rgba(255,255,255,0.05)";
    });
    _0x43febb.addEventListener("drop", function (_0x3af89d) {
      _0x3af89d.preventDefault();
      _0x3af89d.stopPropagation();
      this.style.background = "rgba(255,255,255,0.05)";
      if (_0x3af89d.dataTransfer.files.length > 0) {
        const _0x2cd09b = _0x3af89d.dataTransfer.files[0];
        _0x2cd09b.name.endsWith(".bin") ? _0x1318bd(_0x2cd09b) : _0x533a2b("请上传.bin格式的账号文件", "warning");
      }
    });
    _0x4f0fc5.appendChild(_0x43febb);
    function _0x2f3150() {
      {
        const _0x11fc16 = _0x384c22();
        const _0x57761e = _0x4e9a10();
        if (_0x11fc16.length === 0) {
          _0x4fd474.innerHTML = "<div class=\"account-empty\">暂无账号</div>";
          return;
        }
        _0x4fd474.innerHTML = _0x11fc16.map(_0x18360d => {
          {
            const _0x5b1b48 = _0x57761e && _0x57761e.name === _0x18360d.name;
            return "\n                    <div class=\"account-item " + (_0x5b1b48 ? "active" : "") + "\" data-account-name=\"" + _0x18360d.name + "\">\n                        <span class=\"account-name\">" + _0x18360d.name + "</span>\n                        <div class=\"account-actions\">\n                            <button class=\"account-btn account-btn-login\" title=\"选中并刷新页面\">登录</button>\n                            <button class=\"account-btn account-btn-delete\" title=\"删除账号\">×</button>\n                        </div>\n                    </div>\n                ";
          }
        }).join("");
        _0x4fd474.querySelectorAll(".account-item").forEach(_0xaa8c4e => {
          _0xaa8c4e.addEventListener("click", function (_0x439d8c) {
            {
              if (_0x439d8c.target.className.includes("account-btn-delete") || _0x439d8c.target.className.includes("account-btn-login")) {
                return;
              }
              const _0x356408 = this.dataset.accountName;
              _0x669ea5(_0x356408);
              _0x2f3150();
              _0x533a2b("已选择账号: " + _0x356408, "info");
            }
          });
        });
        _0x4fd474.querySelectorAll(".account-btn-login").forEach(_0x4222b3 => {
          _0x4222b3.addEventListener("click", function (_0x1b6e96) {
            {
              _0x1b6e96.stopPropagation();
              const _0x551fce = this.closest(".account-item").dataset.accountName;
              _0x669ea5(_0x551fce);
              _0x533a2b("已选择账号: " + _0x551fce + "，正在刷新页面...", "info");
              window.location.reload();
            }
          });
        });
        _0x4fd474.querySelectorAll(".account-btn-delete").forEach(_0x42bcf5 => {
          _0x42bcf5.addEventListener("click", function (_0x2e674b) {
            _0x2e674b.stopPropagation();
            const _0x1f3c7a = this.closest(".account-item").dataset.accountName;
            _0x55ace5(_0x1f3c7a);
            _0x2f3150();
            _0x533a2b("已删除账号: " + _0x1f3c7a, "info");
          });
        });
      }
    }
    function _0x1318bd(_0x48b0cb) {
      {
        const _0x1c36a6 = new FileReader();
        _0x1c36a6.onload = function (_0xa7e0fa) {
          try {
            const _0x1b6781 = _0xa7e0fa.target.result;
            const _0x39f555 = Array.from(new Uint8Array(_0x1b6781)).map(_0x388031 => String.fromCharCode(_0x388031)).join("");
            const _0x4465b4 = btoa(_0x39f555);
            _0x566051(_0x48b0cb.name, _0x4465b4);
            _0x2f3150();
            _0x533a2b("账号 " + _0x48b0cb.name + " 上传成功", "success");
          } catch (_0x41c39f) {
            {
              _0x513bb5("账号文件解析失败: " + _0x41c39f.message, "error");
              _0x533a2b("账号文件解析失败", "error");
            }
          }
        };
        _0x1c36a6.onerror = function (_0x40a95c) {
          _0x513bb5("账号文件读取失败: " + _0x40a95c.message, "error");
          _0x533a2b("账号文件读取失败", "error");
        };
        _0x1c36a6.readAsArrayBuffer(_0x48b0cb);
      }
    }
    _0x3618f6.addEventListener("change", function (_0x2c63ed) {
      const _0x4f1e04 = _0x2c63ed.target.files[0];
      _0x4f1e04 && _0x1318bd(_0x4f1e04);
    });
    function _0x384c22() {
      {
        try {
          const _0x1f4c33 = Object.keys(localStorage).filter(_0x52b402 => _0x52b402.startsWith("tc_binfile_"));
          return _0x1f4c33.map(_0x526341 => {
            {
              const _0x2369e1 = JSON.parse(localStorage.getItem(_0x526341));
              return {
                name: _0x526341.replace("tc_binfile_", ""),
                content: _0x2369e1.content
              };
            }
          });
        } catch (_0xf966b) {
          _0x513bb5("获取账号列表失败: " + _0xf966b.message, "error");
          return [];
        }
      }
    }
    function _0x566051(_0x44f0e7, _0x2498a7) {
      try {
        const _0x26948a = "tc_binfile_" + _0x44f0e7;
        localStorage.setItem(_0x26948a, JSON.stringify({
          name: _0x44f0e7,
          content: _0x2498a7,
          createTime: Date.now()
        }));
      } catch (_0x318c47) {
        _0x513bb5("保存账号失败: " + _0x318c47.message, "error");
      }
    }
    function _0x55ace5(_0x1b02e5) {
      try {
        {
          const _0x4a2418 = "tc_binfile_" + _0x1b02e5;
          localStorage.removeItem(_0x4a2418);
          const _0x3b8245 = _0x4e9a10();
          _0x3b8245 && _0x3b8245.name === _0x1b02e5 && localStorage.removeItem("tc_currentAccount");
        }
      } catch (_0x260324) {
        _0x513bb5("删除账号失败: " + _0x260324.message, "error");
      }
    }
    function _0x4e9a10() {
      {
        try {
          {
            const _0x13342b = localStorage.getItem("tc_currentAccount");
            if (_0x13342b) {
              return JSON.parse(_0x13342b);
            }
            return null;
          }
        } catch (_0x46528a) {
          {
            _0x513bb5("获取选中账号失败: " + _0x46528a.message, "error");
            return null;
          }
        }
      }
    }
    function _0x669ea5(_0x23a0a7) {
      {
        try {
          {
            localStorage.setItem("tc_currentAccount", JSON.stringify({
              name: _0x23a0a7,
              selectTime: Date.now()
            }));
            window.updateLoginInterceptor && window.updateLoginInterceptor();
          }
        } catch (_0x30dd6b) {
          {
            _0x513bb5("选择账号失败: " + _0x30dd6b.message, "error");
          }
        }
      }
    }
    _0x2f3150();
    return _0x4f0fc5;
  }
  function _0x223e17() {
    {
      const _0x5ea77a = document.createElement("div");
      _0x5ea77a.id = "server-script-toggle";
      _0x5ea77a.innerHTML = "<img src=\"http://101.43.84.175:8191/favicon.ico\" style=\"width: 100%; height: 100%; display: block; object-fit: cover; border-radius: 50%;\">";
      _0x5ea77a.style.top = _0x5b26c7.position.toggleBtn.top;
      _0x5ea77a.style.left = _0x5b26c7.position.toggleBtn.left;
      _0x5ea77a.style.right = "auto";
      _0x5ea77a.style.bottom = "auto";
      _0x5ea77a.addEventListener("click", function (_0x3cad6e) {
        _0x3cad6e.stopPropagation();
        const _0x1c3a77 = document.getElementById("server-script-panel");
        if (_0x1c3a77) {
          if (_0x1c3a77.style.display === "block") {
            _0x1c3a77.style.display = "none";
          } else {
            _0x1c3a77.style.display = "block";
            if (!window.isWebSocketConnected) {
              {
                if (!window.treasureQueryWebSocket) {
                  _0x513bb5("🚀 开始连接服务器脚本服务器...");
                  let _0x2e97a1 = "ws://101.43.84.175:8765";
                  _0x513bb5("🌐 正在连接到服务器: " + _0x2e97a1);
                  window.treasureQueryWebSocket = new WebSocket(_0x2e97a1);
                  window.treasureQueryWebSocket.onopen = function () {
                    window.isWebSocketConnected = true;
                    var _0x51ad15 = ["280b794f", "929493b0", "860fccde"];
                    _0x513bb5("✅ WebSocket连接成功！");
                    const _0x21fdc5 = "game_unknown_" + Date.now();
                    window.gameClientId = _0x21fdc5;
                    const _0x1c583f = {
                      type: "client_info",
                      client_id: _0x21fdc5,
                      client_type: "game",
                      current_account: "未知账号",
                      is_game_connected: true,
                      is_querying: false
                    };
                    window.treasureQueryWebSocket.send(JSON.stringify(_0x1c583f));
                    _0x513bb5("📤 发送客户端信息到服务器");
                    window.requestScriptFileList && window.requestScriptFileList();
                  };
                  window.treasureQueryWebSocket.onmessage = function (_0xffdca4) {
                    {
                      let _0x14f102;
                      try {
                        _0x14f102 = JSON.parse(_0xffdca4.data);
                      } catch (_0x81091a) {
                        _0x513bb5("收到非JSON消息: " + _0xffdca4.data);
                        return;
                      }
                      _0x14f102 && _0x14f102.type === "script_file_list" && (_0x513bb5("📋 收到服务器脚本文件列表，共 " + _0x14f102.files.length + " 个文件"), window.renderScriptList && window.renderScriptList(_0x14f102.files));
                      _0x14f102 && _0x14f102.type === "script_file_content" && (_0x513bb5("📋 收到服务器脚本文件 " + _0x14f102.file_name + " 内容"), _0x14f102.content && window.loadScriptToPage && window.loadScriptToPage(_0x14f102.content, _0x14f102.file_name));
                    }
                  };
                  window.treasureQueryWebSocket.onclose = function (_0x47fc9a) {
                    window.isWebSocketConnected = false;
                    window.treasureQueryWebSocket = null;
                    _0x513bb5("❌ WebSocket连接已关闭: " + _0x47fc9a.code + " - " + _0x47fc9a.reason);
                  };
                  window.treasureQueryWebSocket.onerror = function (_0x584c43) {
                    window.isWebSocketConnected = false;
                    _0x513bb5("❌ WebSocket连接错误: " + _0x584c43.message);
                    _0x533a2b("连接服务器脚本服务器错误", "error");
                  };
                }
              }
            }
          }
        }
      });
      let _0x3f7fb8 = false;
      let _0x10868b;
      let _0x432d0f;
      let _0x269de3;
      let _0x3a18fb;
      let _0xaa1698 = false;
      function _0x100a5b(_0x2a3ae2) {
        _0x2a3ae2.touches && _0x2a3ae2.touches.length > 0 ? (_0x10868b = _0x2a3ae2.touches[0].clientX, _0x432d0f = _0x2a3ae2.touches[0].clientY, _0xaa1698 = true) : _0x3f7fb8 = true;
        let _0x1c0171;
        let _0x597f38;
        _0x2a3ae2.touches && _0x2a3ae2.touches.length > 0 ? (_0x1c0171 = _0x2a3ae2.touches[0].clientX, _0x597f38 = _0x2a3ae2.touches[0].clientY) : (_0x1c0171 = _0x2a3ae2.clientX, _0x597f38 = _0x2a3ae2.clientY);
        _0x269de3 = _0x1c0171 - _0x5ea77a.offsetLeft;
        _0x3a18fb = _0x597f38 - _0x5ea77a.offsetTop;
        _0x5ea77a.style.transition = "none";
        _0x5ea77a.style.transform = "scale(1)";
        _0x5ea77a.style.cursor = "grabbing";
        _0x5ea77a.style.zIndex = "100001";
      }
      function _0x1691c3(_0x400489) {
        if (_0xaa1698) {
          const _0x570252 = _0x400489.touches[0].clientX;
          const _0x607352 = _0x400489.touches[0].clientY;
          const _0x59e39a = Math.abs(_0x570252 - _0x10868b);
          const _0x55d30c = Math.abs(_0x607352 - _0x432d0f);
          if (_0x59e39a > 5 || _0x55d30c > 5) {
            _0x3f7fb8 = true;
            _0xaa1698 = false;
          } else {
            return;
          }
        }
        if (!_0x3f7fb8) {
          return;
        }
        let _0x2493a2;
        let _0x2448ea;
        _0x400489.touches && _0x400489.touches.length > 0 ? (_0x2493a2 = _0x400489.touches[0].clientX, _0x2448ea = _0x400489.touches[0].clientY) : (_0x2493a2 = _0x400489.clientX, _0x2448ea = _0x400489.clientY);
        let _0x38815c = _0x2493a2 - _0x269de3;
        let _0x3a9ebb = _0x2448ea - _0x3a18fb;
        const _0x30b2b8 = window.innerWidth - _0x5ea77a.offsetWidth;
        const _0x4aad67 = window.innerHeight - _0x5ea77a.offsetHeight;
        _0x38815c = Math.max(0, Math.min(_0x38815c, _0x30b2b8));
        _0x3a9ebb = Math.max(0, Math.min(_0x3a9ebb, _0x4aad67));
        _0x5ea77a.style.left = _0x38815c + "px";
        _0x5ea77a.style.top = _0x3a9ebb + "px";
        _0x5ea77a.style.right = "auto";
        _0x5ea77a.style.bottom = "auto";
        _0x400489.preventDefault();
      }
      function _0x8d6df3() {
        {
          _0x3f7fb8 = false;
          _0xaa1698 = false;
          _0x5ea77a.style.cursor = "";
          _0x5ea77a.style.zIndex = "99999";
          setTimeout(() => {
            _0x5ea77a.style.transition = "";
          }, 50);
          _0x5b26c7.position.toggleBtn.left = _0x5ea77a.style.left;
          _0x5b26c7.position.toggleBtn.top = _0x5ea77a.style.top;
        }
      }
      _0x5ea77a.addEventListener("mousedown", _0x100a5b);
      document.addEventListener("mousemove", _0x1691c3);
      document.addEventListener("mouseup", _0x8d6df3);
      document.addEventListener("mouseleave", _0x8d6df3);
      const _0x32dd7b = {
        passive: true
      };
      _0x5ea77a.addEventListener("touchstart", _0x100a5b, _0x32dd7b);
      const _0x34547b = {
        passive: false
      };
      document.addEventListener("touchmove", _0x1691c3, _0x34547b);
      document.addEventListener("touchend", _0x8d6df3);
      document.addEventListener("touchcancel", _0x8d6df3);
      return _0x5ea77a;
    }
  }
  function _0x4336a3() {
    {
      const _0x1b42b1 = document.createElement("div");
      _0x1b42b1.id = "server-script-panel";
      _0x1b42b1.style.top = _0x5b26c7.position.panel.top;
      _0x1b42b1.style.right = _0x5b26c7.position.panel.right;
      const _0x12e247 = document.createElement("div");
      _0x12e247.className = "server-script-tabs";
      const _0x171ae3 = {
        id: "tab-server-script",
        text: "服务器脚本"
      };
      const _0x24c97d = {
        id: "tab-account-login",
        text: "账号登录"
      };
      const _0x4c07bf = [_0x171ae3, _0x24c97d];
      _0x4c07bf.forEach((_0xda7b9, _0x3e65f5) => {
        {
          const _0x5ca98b = document.createElement("button");
          _0x5ca98b.id = _0xda7b9.id;
          _0x5ca98b.textContent = _0xda7b9.text;
          _0x5ca98b.className = "server-script-tab-btn";
          if (_0x3e65f5 === 0) {
            _0x5ca98b.classList.add("active");
          }
          _0x5ca98b.addEventListener("click", function () {
            {
              document.querySelectorAll(".server-script-tab-btn").forEach(_0x14e98f => _0x14e98f.classList.remove("active"));
              document.querySelectorAll(".server-script-module").forEach(_0xda7913 => _0xda7913.style.display = "none");
              this.classList.add("active");
              const _0x33bfa4 = document.getElementById(this.id.replace("tab-", "module-"));
              if (_0x33bfa4) {
                _0x33bfa4.style.display = "block";
              }
            }
          });
          _0x12e247.appendChild(_0x5ca98b);
        }
      });
      _0x1b42b1.appendChild(_0x12e247);
      const _0xa83475 = _0x1069fe();
      _0xa83475.className = "server-script-module";
      _0xa83475.style.display = "block";
      _0x1b42b1.appendChild(_0xa83475);
      const _0x5f08da = _0x490846();
      _0x5f08da.className = "server-script-module";
      _0x5f08da.style.display = "none";
      _0x1b42b1.appendChild(_0x5f08da);
      let _0x2227b8 = false;
      let _0x28876f;
      let _0x59de10;
      function _0x1e746f(_0x4b67fe) {
        if (_0x4b67fe.button !== undefined && _0x4b67fe.button !== 0) {
          return;
        }
        let _0x5d4df3;
        let _0x1eb2ce;
        _0x4b67fe.touches && _0x4b67fe.touches.length > 0 ? (_0x5d4df3 = _0x4b67fe.touches[0].clientX, _0x1eb2ce = _0x4b67fe.touches[0].clientY) : (_0x5d4df3 = _0x4b67fe.clientX, _0x1eb2ce = _0x4b67fe.clientY);
        if (_0x4b67fe.target === _0x1b42b1 || _0x4b67fe.target.tagName === "H3" || _0x4b67fe.target.className === "panel-title" || _0x4b67fe.target.className === "server-script-tabs") {
          _0x2227b8 = true;
          _0x28876f = _0x5d4df3 - _0x1b42b1.offsetLeft;
          _0x59de10 = _0x1eb2ce - _0x1b42b1.offsetTop;
          _0x1b42b1.style.cursor = "grabbing";
          _0x1b42b1.style.zIndex = "99998";
          _0x4b67fe.preventDefault();
        }
      }
      function _0x2341ef(_0x13da44) {
        if (!_0x2227b8) {
          return;
        }
        let _0x1b18eb;
        let _0x2897c7;
        if (_0x13da44.touches && _0x13da44.touches.length > 0) {
          {
            _0x1b18eb = _0x13da44.touches[0].clientX;
            _0x2897c7 = _0x13da44.touches[0].clientY;
          }
        } else {
          _0x1b18eb = _0x13da44.clientX;
          _0x2897c7 = _0x13da44.clientY;
        }
        const _0x31d6b9 = _0x1b18eb - _0x28876f;
        const _0x56cb42 = _0x2897c7 - _0x59de10;
        const _0x46082d = window.innerWidth - _0x1b42b1.offsetWidth;
        const _0x5e334e = window.innerHeight - _0x1b42b1.offsetHeight;
        _0x1b42b1.style.left = Math.max(0, Math.min(_0x31d6b9, _0x46082d)) + "px";
        _0x1b42b1.style.top = Math.max(0, Math.min(_0x56cb42, _0x5e334e)) + "px";
        _0x1b42b1.style.right = "auto";
        _0x13da44.preventDefault();
      }
      function _0x518c68() {
        if (_0x2227b8) {
          {
            _0x2227b8 = false;
            _0x1b42b1.style.cursor = "default";
            _0x1b42b1.style.zIndex = "99998";
            const _0x59fcc5 = {
              top: _0x1b42b1.style.top,
              left: _0x1b42b1.style.left
            };
            _0x5b26c7.position.panel = _0x59fcc5;
          }
        }
      }
      _0x1b42b1.addEventListener("mousedown", _0x1e746f);
      document.addEventListener("mousemove", _0x2341ef);
      document.addEventListener("mouseup", _0x518c68);
      document.addEventListener("mouseleave", _0x518c68);
      const _0x173edd = {
        passive: false
      };
      _0x1b42b1.addEventListener("touchstart", _0x1e746f, _0x173edd);
      const _0x32cff4 = {
        passive: false
      };
      document.addEventListener("touchmove", _0x2341ef, _0x32cff4);
      document.addEventListener("touchend", _0x518c68);
      document.addEventListener("touchcancel", _0x518c68);
      return _0x1b42b1;
    }
  }
  function _0x34f69c() {
    const _0x3ac39a = document.getElementById("server-script-panel");
    if (_0x3ac39a) {
      {
        _0x3ac39a.style.display === "block" ? _0x3ac39a.style.display = "none" : (_0x3ac39a.style.display = "block", !isWebSocketConnected && _0x54f774());
      }
    }
  }
  function _0x1a4e27() {
    try {
      const _0x2f6460 = localStorage.getItem("tc_currentAccount");
      if (_0x2f6460) {
        {
          const _0x2d7a0d = JSON.parse(_0x2f6460);
          const _0x46f825 = "tc_binfile_" + _0x2d7a0d.name;
          const _0x146422 = localStorage.getItem(_0x46f825);
          if (_0x146422) {
            {
              const _0x8db1c5 = JSON.parse(_0x146422);
              const _0x274767 = {
                base64: _0x8db1c5.content
              };
              return _0x274767;
            }
          }
        }
      }
      return null;
    } catch (_0x4d7833) {
      _0x513bb5("获取选中账号数据失败: " + _0x4d7833.message, "error");
      return null;
      function _0x5e833c() {
        return "edb7844cc8c19a0f3c16";
      }
    }
  }
  function _0x2e8b43(_0x2f5a1a) {
    if (!_0x2f5a1a) {
      return false;
    }
    const _0x13a646 = [/^https:\/\/xxz-xyzw\.hortorgames\.com\/login\/authuser(?:\?|$)/, /^\/login\/authuser(?:\?|$)/];
    return _0x13a646.some(_0x383607 => _0x383607.test(_0x2f5a1a)) && !_0x2f5a1a.includes("/login/manifest");
  }
  function _0xc5ca31(_0x6501da, _0x4bbace) {
    if (!_0x4bbace) {
      return _0x6501da;
    }
    try {
      if (_0x4bbace.base64) {
        const _0x436f7b = _0x4bbace.base64;
        const _0x5cbf21 = atob(_0x436f7b);
        const _0x495ca0 = new ArrayBuffer(_0x5cbf21.length);
        const _0x30cfb0 = new Uint8Array(_0x495ca0);
        for (let _0x1c21c7 = 0; _0x1c21c7 < _0x5cbf21.length; _0x1c21c7++) {
          _0x30cfb0[_0x1c21c7] = _0x5cbf21.charCodeAt(_0x1c21c7);
        }
        return _0x495ca0;
      }
    } catch (_0x1c864d) {
      _0x513bb5("修改登录请求数据失败: " + _0x1c864d.message, "error");
    }
    return _0x6501da;
  }
  function _0x2172a9() {
    try {
      {
        const _0x3e8db9 = _0x1a4e27();
        if (!_0x3e8db9) {
          {
            _0x513bb5("未找到选中的账号数据，登录拦截器未激活", "warning");
            return;
          }
        }
        let _0xe34272;
        let _0x11218a;
        try {
          _0xe34272 = XMLHttpRequest.prototype.open;
          _0x11218a = XMLHttpRequest.prototype.send;
          if (typeof _0xe34272 !== "function" || typeof _0x11218a !== "function") {
            {
              throw new Error("原型方法不是函数");
            }
          }
        } catch (_0x31f7e4) {
          _0x513bb5("从原型获取XMLHttpRequest方法失败: " + _0x31f7e4.message, "warning");
          try {
            {
              const _0x132e62 = new XMLHttpRequest();
              _0xe34272 = _0x132e62.open;
              _0x11218a = _0x132e62.send;
              if (typeof _0xe34272 !== "function" || typeof _0x11218a !== "function") {
                throw new Error("实例方法不是函数");
              }
            }
          } catch (_0x4ab0d7) {
            _0x513bb5("从实例获取XMLHttpRequest方法失败: " + _0x4ab0d7.message, "warning");
            const _0x320aad = window.XMLHttpRequest;
            window.XMLHttpRequest = function () {
              const _0x4e2488 = new _0x320aad();
              if (!_0xe34272) {
                _0xe34272 = _0x4e2488.open;
              }
              if (!_0x11218a) {
                _0x11218a = _0x4e2488.send;
              }
              return _0x4e2488;
            };
            for (const _0x530ccb in _0x320aad) {
              {
                _0x320aad.hasOwnProperty(_0x530ccb) && (window.XMLHttpRequest[_0x530ccb] = _0x320aad[_0x530ccb]);
              }
            }
            const _0x16ade6 = new window.XMLHttpRequest();
            _0xe34272 = _0x16ade6.open;
            _0x11218a = _0x16ade6.send;
          }
        }
        if (typeof _0xe34272 !== "function" || typeof _0x11218a !== "function") {
          _0x513bb5("无法获取原始XMLHttpRequest方法，登录拦截器未激活", "error");
          return;
        }
        const _0x110596 = window.XMLHttpRequest;
        window.XMLHttpRequest = function () {
          const _0x252091 = new _0x110596();
          let _0x24ef1e = "";
          let _0x4611ca = "";
          function _0x23b6c1() {
            return "4b515295bc3099299392";
          }
          const _0x4d1e1f = _0x252091.open;
          _0x252091.open = function (_0x11df5e, _0x568002, _0x4e3e66, _0x3a6e4e, _0x4f04a8) {
            {
              _0x24ef1e = _0x11df5e;
              _0x4611ca = _0x568002;
              return _0x4d1e1f.call(this, _0x11df5e, _0x568002, _0x4e3e66, _0x3a6e4e, _0x4f04a8);
            }
          };
          const _0xe4c9a0 = _0x252091.send;
          _0x252091.send = function (_0x37349d) {
            if (_0x24ef1e === "OPTIONS") {
              {
                return _0xe4c9a0.apply(this, arguments);
              }
            } else {
              if (_0x24ef1e === "POST" && _0x4611ca && _0x2e8b43(_0x4611ca)) {
                this.setRequestHeader("Content-Type", "application/octet-stream");
                const _0x45ba6b = _0xc5ca31(_0x37349d, _0x3e8db9);
                return _0xe4c9a0.call(this, _0x45ba6b);
              } else {
                return _0xe4c9a0.apply(this, arguments);
              }
            }
          };
          return _0x252091;
        };
        for (const _0x3066e5 in _0x110596) {
          _0x110596.hasOwnProperty(_0x3066e5) && (window.XMLHttpRequest[_0x3066e5] = _0x110596[_0x3066e5]);
        }
        window.XMLHttpRequest.prototype = _0x110596.prototype;
        window.XMLHttpRequest.prototype.constructor = window.XMLHttpRequest;
        const _0x31a1b3 = window.fetch;
        _0x31a1b3 && (window.fetch = function (_0x348ace, _0x1d1cb4) {
          const _0x4dda22 = typeof _0x348ace === "string" ? _0x348ace : _0x348ace.url;
          const _0x493e7e = _0x1d1cb4 && _0x1d1cb4.method || "GET";
          if (_0x493e7e === "OPTIONS") {
            return _0x31a1b3.apply(this, arguments);
          } else {
            if (_0x493e7e === "POST" && _0x4dda22 && _0x2e8b43(_0x4dda22)) {
              const _0x4642a6 = _0x1d1cb4 ? {
                ..._0x1d1cb4
              } : {};
              _0x4642a6.body = _0xc5ca31(_0x1d1cb4 ? _0x1d1cb4.body : null, _0x3e8db9);
              if (_0x4642a6.body) {
                {
                  !_0x4642a6.headers && (_0x4642a6.headers = {});
                  _0x4642a6.headers["Content-Type"] = "application/octet-stream";
                }
              }
              return _0x31a1b3.call(this, _0x348ace, _0x4642a6);
            }
          }
          return _0x31a1b3.apply(this, arguments);
        });
        _0x513bb5("登录拦截器已激活", "success");
      }
    } catch (_0x30c4ec) {
      _0x513bb5("初始化登录拦截器失败: " + _0x30c4ec.message, "error");
    }
  }
  window.updateLoginInterceptor = function () {
    {
      _0x513bb5("账号选择已变更，更新登录拦截器", "info");
      try {
        const _0x5a316b = _0x1a4e27();
        if (!_0x5a316b) {
          {
            _0x513bb5("未找到选中的账号数据，登录拦截器未激活", "warning");
            return;
          }
        }
        let _0x38c4c0;
        let _0x37fbe7;
        try {
          _0x38c4c0 = XMLHttpRequest.prototype.open;
          _0x37fbe7 = XMLHttpRequest.prototype.send;
          if (typeof _0x38c4c0 !== "function" || typeof _0x37fbe7 !== "function") {
            {
              throw new Error("原型方法不是函数");
            }
          }
        } catch (_0x413ebf) {
          {
            _0x513bb5("从原型获取XMLHttpRequest方法失败: " + _0x413ebf.message, "warning");
            try {
              {
                const _0x31c901 = new XMLHttpRequest();
                _0x38c4c0 = _0x31c901.open;
                _0x37fbe7 = _0x31c901.send;
                if (typeof _0x38c4c0 !== "function" || typeof _0x37fbe7 !== "function") {
                  throw new Error("实例方法不是函数");
                }
              }
            } catch (_0x545393) {
              {
                _0x513bb5("从实例获取XMLHttpRequest方法失败: " + _0x545393.message, "warning");
                const _0x1c6355 = window.XMLHttpRequest;
                window.XMLHttpRequest = function () {
                  {
                    const _0x2402ab = new _0x1c6355();
                    if (!_0x38c4c0) {
                      _0x38c4c0 = _0x2402ab.open;
                    }
                    if (!_0x37fbe7) {
                      _0x37fbe7 = _0x2402ab.send;
                    }
                    return _0x2402ab;
                  }
                };
                for (const _0x5b6c5e in _0x1c6355) {
                  _0x1c6355.hasOwnProperty(_0x5b6c5e) && (window.XMLHttpRequest[_0x5b6c5e] = _0x1c6355[_0x5b6c5e]);
                }
                const _0x5ba0fb = new window.XMLHttpRequest();
                _0x38c4c0 = _0x5ba0fb.open;
                _0x37fbe7 = _0x5ba0fb.send;
              }
            }
          }
        }
        if (typeof _0x38c4c0 !== "function" || typeof _0x37fbe7 !== "function") {
          _0x513bb5("无法获取原始XMLHttpRequest方法，登录拦截器未激活", "error");
          return;
        }
        const _0x335084 = window.XMLHttpRequest;
        window.XMLHttpRequest = function () {
          const _0x5876fd = new _0x335084();
          let _0x1a7b3b = "";
          let _0x3c2c88 = "";
          const _0x538dae = _0x5876fd.open;
          _0x5876fd.open = function (_0x3c1133, _0x9da26, _0x15fb47, _0x32b061, _0x4cdcaa) {
            _0x1a7b3b = _0x3c1133;
            _0x3c2c88 = _0x9da26;
            return _0x538dae.call(this, _0x3c1133, _0x9da26, _0x15fb47, _0x32b061, _0x4cdcaa);
          };
          const _0x36fe79 = _0x5876fd.send;
          _0x5876fd.send = function (_0x4ba661) {
            {
              if (_0x1a7b3b === "OPTIONS") {
                return _0x36fe79.apply(this, arguments);
              } else {
                if (_0x1a7b3b === "POST" && _0x3c2c88 && _0x2e8b43(_0x3c2c88)) {
                  this.setRequestHeader("Content-Type", "application/octet-stream");
                  const _0x519c11 = _0xc5ca31(_0x4ba661, _0x5a316b);
                  return _0x36fe79.call(this, _0x519c11);
                } else {
                  return _0x36fe79.apply(this, arguments);
                }
              }
            }
          };
          return _0x5876fd;
        };
        for (const _0x3dee21 in _0x335084) {
          {
            _0x335084.hasOwnProperty(_0x3dee21) && (window.XMLHttpRequest[_0x3dee21] = _0x335084[_0x3dee21]);
          }
        }
        window.XMLHttpRequest.prototype = _0x335084.prototype;
        window.XMLHttpRequest.prototype.constructor = window.XMLHttpRequest;
        const _0x5443b6 = window.fetch;
        if (_0x5443b6) {
          {
            window.fetch = function (_0x5722ff, _0x2f80dc) {
              const _0x3b8fde = typeof _0x5722ff === "string" ? _0x5722ff : _0x5722ff.url;
              const _0xcbb967 = _0x2f80dc && _0x2f80dc.method || "GET";
              if (_0xcbb967 === "OPTIONS") {
                {
                  return _0x5443b6.apply(this, arguments);
                }
              } else {
                if (_0xcbb967 === "POST" && _0x3b8fde && _0x2e8b43(_0x3b8fde)) {
                  {
                    const _0x420e92 = _0x2f80dc ? {
                      ..._0x2f80dc
                    } : {};
                    _0x420e92.body = _0xc5ca31(_0x2f80dc ? _0x2f80dc.body : null, _0x5a316b);
                    if (_0x420e92.body) {
                      {
                        if (!_0x420e92.headers) {
                          {
                            _0x420e92.headers = {};
                          }
                        }
                        var _0x31bff8 = ["6269ab21", "684d1f42", "850b9d94"];
                        _0x420e92.headers["Content-Type"] = "application/octet-stream";
                      }
                    }
                    return _0x5443b6.call(this, _0x5722ff, _0x420e92);
                  }
                }
              }
              return _0x5443b6.apply(this, arguments);
            };
          }
        }
        _0x513bb5("登录拦截器已激活", "success");
      } catch (_0x2943df) {
        _0x513bb5("初始化登录拦截器失败: " + _0x2943df.message, "error");
      }
    }
  };
  function _0xcad8e7() {
    const _0x5f036 = _0x223e17();
    document.body.appendChild(_0x5f036);
    const _0x23cc3a = _0x4336a3();
    document.body.appendChild(_0x23cc3a);
    try {
      {
        const _0xaaf32 = localStorage.getItem("tc_currentAccount");
        if (_0xaaf32) {
          {
            const _0x3f0d72 = JSON.parse(_0xaaf32);
            const _0xad9bb8 = "tc_binfile_" + _0x3f0d72.name;
            const _0x27801f = localStorage.getItem(_0xad9bb8);
            if (_0x27801f) {
              {
                const _0x319faf = JSON.parse(_0x27801f);
                const _0x4d742e = {
                  base64: _0x319faf.content
                };
                let _0x52d74a;
                let _0x2eea94;
                try {
                  _0x52d74a = XMLHttpRequest.prototype.open;
                  _0x2eea94 = XMLHttpRequest.prototype.send;
                  if (typeof _0x52d74a !== "function" || typeof _0x2eea94 !== "function") {
                    throw new Error("原型方法不是函数");
                  }
                } catch (_0xd4d451) {
                  _0x513bb5("从原型获取XMLHttpRequest方法失败: " + _0xd4d451.message, "warning");
                  try {
                    const _0x4b3c4b = new XMLHttpRequest();
                    _0x52d74a = _0x4b3c4b.open;
                    _0x2eea94 = _0x4b3c4b.send;
                    if (typeof _0x52d74a !== "function" || typeof _0x2eea94 !== "function") {
                      throw new Error("实例方法不是函数");
                    }
                  } catch (_0x2c29de) {
                    {
                      _0x513bb5("从实例获取XMLHttpRequest方法失败: " + _0x2c29de.message, "warning");
                      const _0x1c5bbd = window.XMLHttpRequest;
                      window.XMLHttpRequest = function () {
                        {
                          const _0x2ab248 = new _0x1c5bbd();
                          if (!_0x52d74a) {
                            _0x52d74a = _0x2ab248.open;
                          }
                          if (!_0x2eea94) {
                            _0x2eea94 = _0x2ab248.send;
                          }
                          return _0x2ab248;
                        }
                      };
                      for (const _0x2a4c99 in _0x1c5bbd) {
                        _0x1c5bbd.hasOwnProperty(_0x2a4c99) && (window.XMLHttpRequest[_0x2a4c99] = _0x1c5bbd[_0x2a4c99]);
                      }
                      const _0x82a00f = new window.XMLHttpRequest();
                      _0x52d74a = _0x82a00f.open;
                      _0x2eea94 = _0x82a00f.send;
                    }
                  }
                }
                if (typeof _0x52d74a !== "function" || typeof _0x2eea94 !== "function") {
                  _0x513bb5("无法获取原始XMLHttpRequest方法，登录拦截器未激活", "error");
                } else {
                  const _0x3eab5f = window.XMLHttpRequest;
                  window.XMLHttpRequest = function () {
                    {
                      const _0x1ee7c9 = new _0x3eab5f();
                      let _0x469003 = "";
                      let _0x161676 = "";
                      const _0x5ac695 = _0x1ee7c9.open;
                      _0x1ee7c9.open = function (_0x740436, _0x3eddc8, _0x25d090, _0x46794c, _0x2c8636) {
                        _0x469003 = _0x740436;
                        _0x161676 = _0x3eddc8;
                        return _0x5ac695.call(this, _0x740436, _0x3eddc8, _0x25d090, _0x46794c, _0x2c8636);
                      };
                      const _0x1a1de2 = _0x1ee7c9.send;
                      _0x1ee7c9.send = function (_0x502c8e) {
                        {
                          if (_0x469003 === "OPTIONS") {
                            return _0x1a1de2.apply(this, arguments);
                          } else {
                            if (_0x469003 === "POST" && _0x161676 && (_0x161676.includes("login/authuser") && !_0x161676.includes("login/manifest") || _0x161676 === "/login/authuser")) {
                              this.setRequestHeader("Content-Type", "application/octet-stream");
                              if (_0x4d742e && _0x319faf.content) {
                                {
                                  const _0x9acb65 = _0x319faf.content;
                                  const _0x1500fa = atob(_0x9acb65);
                                  const _0x1455a7 = new ArrayBuffer(_0x1500fa.length);
                                  const _0x1ed062 = new Uint8Array(_0x1455a7);
                                  for (let _0x12136e = 0; _0x12136e < _0x1500fa.length; _0x12136e++) {
                                    {
                                      _0x1ed062[_0x12136e] = _0x1500fa.charCodeAt(_0x12136e);
                                    }
                                  }
                                  return _0x1a1de2.call(this, _0x1455a7);
                                }
                              }
                            }
                          }
                          return _0x1a1de2.apply(this, arguments);
                        }
                      };
                      return _0x1ee7c9;
                    }
                  };
                  for (const _0x47e91e in _0x3eab5f) {
                    _0x3eab5f.hasOwnProperty(_0x47e91e) && (window.XMLHttpRequest[_0x47e91e] = _0x3eab5f[_0x47e91e]);
                  }
                  window.XMLHttpRequest.prototype = _0x3eab5f.prototype;
                  window.XMLHttpRequest.prototype.constructor = window.XMLHttpRequest;
                  const _0x4cf3f3 = window.fetch;
                  _0x4cf3f3 && (window.fetch = function (_0x2f396f, _0x18154f) {
                    const _0x553239 = typeof _0x2f396f === "string" ? _0x2f396f : _0x2f396f.url;
                    const _0x560331 = _0x18154f && _0x18154f.method || "GET";
                    if (_0x560331 === "OPTIONS") {
                      return _0x4cf3f3.apply(this, arguments);
                    } else {
                      if (_0x560331 === "POST" && _0x553239 && (_0x553239.includes("login/authuser") && !_0x553239.includes("login/manifest") || _0x553239 === "/login/authuser")) {
                        const _0x19f8cd = _0x18154f ? {
                          ..._0x18154f
                        } : {};
                        if (_0x4d742e && _0x319faf.content) {
                          const _0x5aa1c6 = _0x319faf.content;
                          const _0x3fd926 = atob(_0x5aa1c6);
                          const _0x52515b = new ArrayBuffer(_0x3fd926.length);
                          const _0x7aaad5 = new Uint8Array(_0x52515b);
                          for (let _0xb53545 = 0; _0xb53545 < _0x3fd926.length; _0xb53545++) {
                            _0x7aaad5[_0xb53545] = _0x3fd926.charCodeAt(_0xb53545);
                          }
                          _0x19f8cd.body = _0x52515b;
                          !_0x19f8cd.headers && (_0x19f8cd.headers = {});
                          _0x19f8cd.headers["Content-Type"] = "application/octet-stream";
                        }
                        return _0x4cf3f3.call(this, _0x2f396f, _0x19f8cd);
                      }
                    }
                    return _0x4cf3f3.apply(this, arguments);
                  });
                  _0x513bb5("登录拦截器已激活", "success");
                }
              }
            }
          }
        }
      }
    } catch (_0x331c33) {
      _0x513bb5("初始化登录拦截器失败: " + _0x331c33.message, "error");
    }
    _0x513bb5("服务器脚本功能已初始化");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0xcad8e7);
  } else {
    {
      _0xcad8e7();
    }
  }
})();
var _0x4afa77 = 6183996 .toString(16);
function _0x30a34a() {
  return "74df32f200c14b3626bd";
}
var _0x2ee38f = function () {
  return "b1e4927f5d8361fb05a88889";
}();
var _0xd7fc14 = 3609932 .toString(16);