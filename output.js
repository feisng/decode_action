//Tue Oct 28 2025 08:09:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x227abe = Object.defineProperty;
var _0x1d2ce0 = Object.defineProperties;
var _0x33d6d1 = Object.getOwnPropertyDescriptors;
var _0x29b033 = Object.getOwnPropertySymbols;
var _0x1ac5f1 = Object.prototype.hasOwnProperty;
var _0x50f1be = Object.prototype.propertyIsEnumerable;
var _0xdcea98 = (_0x404d95, _0x2339bf, _0x51396b) => _0x2339bf in _0x404d95 ? _0x227abe(_0x404d95, _0x2339bf, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x51396b
}) : _0x404d95[_0x2339bf] = _0x51396b;
var _0x2dac9b = (_0x389de3, _0x58b121) => {
  for (var _0x159be2 in _0x58b121 || (_0x58b121 = {})) _0x1ac5f1.call(_0x58b121, _0x159be2) && _0xdcea98(_0x389de3, _0x159be2, _0x58b121[_0x159be2]);
  if (_0x29b033) {
    for (var _0x159be2 of _0x29b033(_0x58b121)) _0x50f1be.call(_0x58b121, _0x159be2) && _0xdcea98(_0x389de3, _0x159be2, _0x58b121[_0x159be2]);
  }
  return _0x389de3;
};
var _0xfdde72 = (_0x285641, _0x15afdc) => _0x1d2ce0(_0x285641, _0x33d6d1(_0x15afdc));
import { _ as _0x4e670f, Q as _0x2aa2db, a4 as _0x29c4cf, o as _0x47d56a, C as _0x439422, c as _0x58e016, a as _0x5f45e4, b, d as _0x41f172, a5 as _0x140f7c, z as _0x124222, e as _0xaeec6a, w as _0x3676b5, f as _0x20ea0b, a6 as _0x5f5205, t as _0x14c75b, D as _0x367b5d, a7 as _0x2d649b, a8 as _0x532a98, a9 as _0x467f08 } from "./main-DgK-CuC8.js";
import { a as _0x4af278 } from "./webInjector-BbQhlhRo.js";
var _0x31f7b4 = 2654435769;
function _0x520745(_0x3278f0, _0x43c898) {
  var _0x56b3b3;
  var _0x439208 = _0x3278f0.length;
  var _0x2ffb27 = _0x439208 >> 2;
  !!(3 & _0x439208) && ++_0x2ffb27;
  _0x56b3b3 = new Uint32Array(_0x2ffb27);
  for (var _0xb4303f = 0; _0xb4303f < _0x439208; ++_0xb4303f) {
    _0x56b3b3[_0xb4303f >> 2] |= _0x3278f0[_0xb4303f] << ((3 & _0xb4303f) << 3);
  }
  return _0x56b3b3;
}
function _0x192ac4(_0x13054e, _0x3055fa, _0x570bef, _0x33f56c, _0x40a4c4, _0x194ea3) {
  return (_0x570bef >>> 5 ^ _0x3055fa << 2) + (_0x3055fa >>> 3 ^ _0x570bef << 4) ^ (_0x13054e ^ _0x3055fa) + (_0x194ea3[3 & _0x33f56c ^ _0x40a4c4] ^ _0x570bef);
}
function _0x51b5e6(_0x4b264f, _0x27d02a) {
  "string" == typeof _0x4b264f && (_0x4b264f = new e(_0x4b264f, "base64"));
  "string" == typeof _0x27d02a && (_0x27d02a = function (_0x12b69d) {
    for (var _0x3d9d12 = _0x12b69d.length, _0x52d1a4 = new Uint8Array(3 * _0x3d9d12), _0x426b4b = 0, _0x2966f9 = 0; _0x2966f9 < _0x3d9d12; _0x2966f9++) {
      var _0x479f35 = _0x12b69d.charCodeAt(_0x2966f9);
      if (_0x479f35 < 128) {
        _0x52d1a4[_0x426b4b++] = _0x479f35;
      } else {
        if (_0x479f35 < 2048) {
          _0x52d1a4[_0x426b4b++] = 192 | _0x479f35 >> 6;
          _0x52d1a4[_0x426b4b++] = 128 | 63 & _0x479f35;
        } else {
          if (!(_0x479f35 < 55296 || _0x479f35 > 57343)) {
            if (_0x2966f9 + 1 < _0x3d9d12) {
              var _0x3a8166 = _0x12b69d.charCodeAt(_0x2966f9 + 1);
              if (_0x479f35 < 56320 && 56320 <= _0x3a8166 && _0x3a8166 <= 57343) {
                var _0x1a4df4 = 65536 + ((1023 & _0x479f35) << 10 | 1023 & _0x3a8166);
                _0x52d1a4[_0x426b4b++] = 240 | _0x1a4df4 >> 18;
                _0x52d1a4[_0x426b4b++] = 128 | _0x1a4df4 >> 12 & 63;
                _0x52d1a4[_0x426b4b++] = 128 | _0x1a4df4 >> 6 & 63;
                _0x52d1a4[_0x426b4b++] = 128 | 63 & _0x1a4df4;
                _0x2966f9++;
                continue;
              }
            }
            throw new Error("Malformed string");
          }
          _0x52d1a4[_0x426b4b++] = 224 | _0x479f35 >> 12;
          _0x52d1a4[_0x426b4b++] = 128 | _0x479f35 >> 6 & 63;
          _0x52d1a4[_0x426b4b++] = 128 | 63 & _0x479f35;
        }
      }
    }
    return _0x52d1a4.subarray(0, _0x426b4b);
  }(_0x27d02a));
  return null == _0x4b264f || 0 === _0x4b264f.length ? _0x4b264f : function (_0x403125) {
    var _0x256062 = _0x403125.length;
    var _0x27bc39 = _0x256062 << 2;
    var _0x3665e0 = _0x403125[_0x256062 - 1];
    if (_0x3665e0 < (_0x27bc39 -= 4) - 3 || _0x3665e0 > _0x27bc39) {
      return null;
    }
    _0x27bc39 = _0x3665e0;
    for (var _0x5b0e1d = new Uint8Array(_0x27bc39), _0x3aa69b = 0; _0x3aa69b < _0x27bc39; ++_0x3aa69b) {
      _0x5b0e1d[_0x3aa69b] = _0x403125[_0x3aa69b >> 2] >> ((3 & _0x3aa69b) << 3);
    }
    return _0x5b0e1d;
  }(function (_0x57f205, _0xb34c83) {
    var _0x441138;
    var _0x226afa;
    var _0x5429cb;
    var _0x1bad39;
    var _0x3f62cf;
    var _0x18c6b0 = _0x57f205.length;
    var _0x175579 = _0x18c6b0 - 1;
    for (_0x441138 = _0x57f205[0], _0x5429cb = Math.floor(6 + 52 / _0x18c6b0) * _0x31f7b4; 0 !== _0x5429cb; _0x5429cb -= _0x31f7b4) {
      for (_0x1bad39 = _0x5429cb >>> 2 & 3, _0x3f62cf = _0x175579; _0x3f62cf > 0; --_0x3f62cf) {
        _0x226afa = _0x57f205[_0x3f62cf - 1];
        _0x441138 = _0x57f205[_0x3f62cf] -= _0x192ac4(_0x5429cb, _0x441138, _0x226afa, _0x3f62cf, _0x1bad39, _0xb34c83);
      }
      _0x226afa = _0x57f205[_0x175579];
      _0x441138 = _0x57f205[0] -= _0x192ac4(_0x5429cb, _0x441138, _0x226afa, _0x3f62cf, _0x1bad39, _0xb34c83);
    }
    return _0x57f205;
  }(_0x520745(_0x4b264f), _0x520745(function (_0x5387f4) {
    if (_0x5387f4.length < 16) {
      var _0x4e4e50 = new Uint8Array(16);
      _0x4e4e50.set(_0x5387f4);
      _0x5387f4 = _0x4e4e50;
    }
    return _0x5387f4;
  }(_0x27d02a))));
}
let _0x1d2317 = (_0x35344d, _0x16105f) => {
  _0x56d37e = _0x35344d;
  _0xd94c4d = "0Aed5E79bbEa69f8";
  let _0x562376 = new TextDecoder("utf-8").decode(_0x51b5e6(new Uint8Array(_0x56d37e), _0xd94c4d));
  var _0x56d37e;
  var _0xd94c4d;
  _0x562376 = _0x562376.replace("isNativeAPP(){return!", "sNativeAPP(){return");
  const _0x4b1aac = _0x16105f.createElement("script");
  _0x4b1aac.textContent = _0x562376;
  _0x4b1aac.type = "text/javascript";
  _0x16105f.body.appendChild(_0x4b1aac);
};
function _0x52debd(_0x6088af, _0x29193c) {
  var _0x50ec32 = _0x6088af._CCSettings;
  _0x6088af._CCSettings = undefined;
  const _0x17ce8b = _0x6088af.cc;
  var _0x3ad013 = _0x17ce8b.AssetManager.BuiltinBundleName.RESOURCES;
  var _0x5c569a = _0x17ce8b.AssetManager.BuiltinBundleName.INTERNAL;
  var _0x169fa5 = _0x17ce8b.AssetManager.BuiltinBundleName.MAIN;
  var _0x329f91 = function () {
    _0x17ce8b.view.enableRetina(true);
    _0x17ce8b.view.resizeWithBrowserSize(true);
    _0x17ce8b.sys.isBrowser;
    _0x17ce8b.sys.isMobile && ("landscape" === _0x50ec32.orientation ? _0x17ce8b.view.setOrientation(_0x17ce8b.macro.ORIENTATION_LANDSCAPE) : "portrait" === _0x50ec32.orientation && _0x17ce8b.view.setOrientation(_0x17ce8b.macro.ORIENTATION_PORTRAIT), _0x17ce8b.view.enableAutoFullScreen([_0x17ce8b.sys.BROWSER_TYPE_BAIDU, _0x17ce8b.sys.BROWSER_TYPE_BAIDU_APP, _0x17ce8b.sys.BROWSER_TYPE_WECHAT, _0x17ce8b.sys.BROWSER_TYPE_MOBILE_QQ, _0x17ce8b.sys.BROWSER_TYPE_MIUI, _0x17ce8b.sys.BROWSER_TYPE_HUAWEI, _0x17ce8b.sys.BROWSER_TYPE_UC].indexOf(_0x17ce8b.sys.browserType) < 0));
    _0x17ce8b.sys.isBrowser && _0x17ce8b.sys.os === _0x17ce8b.sys.OS_ANDROID && (_0x17ce8b.assetManager.downloader.maxConcurrency = 2, _0x17ce8b.assetManager.downloader.maxRequestsPerFrame = 2);
    var _0x5f4c12 = _0x50ec32.launchScene;
    _0x17ce8b.assetManager.bundles.find(function (_0x245281) {
      return _0x245281.getSceneInfo(_0x5f4c12);
    }).loadScene(_0x5f4c12, null, null, function (_0x102acb, _0x2c1689) {
      if (!_0x102acb && (_0x17ce8b.director.runSceneImmediate(_0x2c1689), _0x17ce8b.sys.isBrowser)) {
        _0x29193c.getElementById("GameCanvas").style.visibility = "";
        var _0x461d0f = _0x29193c.getElementById("GameDiv");
        _0x461d0f && (_0x461d0f.style.backgroundImage = "");
      }
    });
  };
  var _0x58a80a = {
    id: "GameCanvas",
    debugMode: _0x50ec32.debug ? _0x17ce8b.debug.DebugMode.INFO : _0x17ce8b.debug.DebugMode.ERROR,
    showFPS: _0x50ec32.debug,
    frameRate: 60,
    groupList: _0x50ec32.groupList,
    collisionMatrix: _0x50ec32.collisionMatrix
  };
  var _0x11a799 = [_0x5c569a];
  _0x50ec32.hasResourcesBundle && _0x11a799.push(_0x3ad013);
  var _0x3a0fc4 = 0;
  function _0x2397b7(_0x33b49e) {
    _0x33b49e || ++_0x3a0fc4 === _0x11a799.length + 1 && _0x17ce8b.assetManager.loadBundle(_0x169fa5, function (_0x34f442) {
      _0x34f442 || _0x17ce8b.game.run(_0x58a80a, _0x329f91);
    });
  }
  var _0x4b37bd = null;
  var _0x1e3631 = 0;
  (_0x4b37bd = function () {
    !function (_0x1634fa, _0x19770d, _0x16b872, _0x4d42c2) {
      var _0x3aff1b = new XMLHttpRequest();
      var _0x40d4ca = "download failed: " + _0x1634fa + ", status: ";
      if (_0x3aff1b.open("POST", _0x1634fa, true), undefined !== _0x19770d.responseType && (_0x3aff1b.responseType = _0x19770d.responseType), undefined !== _0x19770d.withCredentials && (_0x3aff1b.withCredentials = _0x19770d.withCredentials), undefined !== _0x19770d.mimeType && _0x3aff1b.overrideMimeType && _0x3aff1b.overrideMimeType(_0x19770d.mimeType), undefined !== _0x19770d.timeout && (_0x3aff1b.timeout = _0x19770d.timeout), _0x19770d.header) {
        for (var _0x2cbb85 in _0x19770d.header) _0x3aff1b.setRequestHeader(_0x2cbb85, _0x19770d.header[_0x2cbb85]);
      }
      _0x3aff1b.onload = function () {
        200 === _0x3aff1b.status || 0 === _0x3aff1b.status ? _0x4d42c2 && _0x4d42c2(null, _0x3aff1b.response) : _0x4d42c2 && _0x4d42c2(new Error(_0x40d4ca + _0x3aff1b.status + "(no response)"));
      };
      _0x3aff1b.onerror = function () {
        _0x4d42c2 && _0x4d42c2(new Error(_0x40d4ca + _0x3aff1b.status + "(error)"));
      };
      _0x3aff1b.ontimeout = function () {
        _0x4d42c2 && _0x4d42c2(new Error(_0x40d4ca + _0x3aff1b.status + "(time out)"));
      };
      _0x3aff1b.onabort = function () {
        _0x4d42c2 && _0x4d42c2(new Error(_0x40d4ca + _0x3aff1b.status + "(abort)"));
      };
      _0x3aff1b.send(null);
    }(_0x6088af.SERVER + "/login/manifest?platform=hortor&version=0.29.0-android", {
      responseType: "json",
      header: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json, text/plain, */*"
      }
    }, 0, (_0x13af63, _0x76d8b6) => {
      if (_0x13af63) {
        _0x17ce8b.sys.manifestResult = {
          code: -1,
          error: _0x13af63
        };
        ++_0x1e3631 < 60 && setTimeout(_0x4b37bd, 1000);
      } else {
        const _0x93af9f = _0x76d8b6 && _0x76d8b6.body && _0x76d8b6.body.bundleVers;
        const _0x5335e6 = JSON.parse(_0x93af9f);
        _0x76d8b6.body.bundleVers = _0x5335e6;
        let _0x6540de = {
          code: 0,
          error: null,
          rawData: _0x76d8b6.body
        };
        _0x17ce8b.sys.manifestResult = _0x6540de;
        for (let _0x314ee6 in _0x5335e6) "COMMIT_ID" !== _0x314ee6 && (_0x50ec32.bundleVers[_0x314ee6] = _0x5335e6[_0x314ee6], -1 === _0x50ec32.remoteBundles.indexOf(_0x314ee6) && _0x50ec32.remoteBundles.push(_0x314ee6));
        _0x6088af.ccInternalRemoteBundles = new Set(_0x50ec32.remoteBundles);
        _0x17ce8b.assetManager.init({
          bundleVers: _0x50ec32.bundleVers,
          remoteBundles: _0x50ec32.remoteBundles,
          server: _0x50ec32.server
        });
        for (var _0xac136d = 0; _0xac136d < _0x11a799.length; _0xac136d++) {
          _0x17ce8b.assetManager.loadBundle(_0x11a799[_0xac136d], _0x2397b7);
        }
        _0x17ce8b.assetManager.loadScript(_0x50ec32.jsList.map(function (_0x418f02) {
          return "src/" + _0x418f02;
        }), _0x2397b7);
      }
    });
  })();
}
const _0x249399 = {
  class: "multi-account-page"
};
const _0x537681 = {
  id: "control-panel"
};
const _0x534f7a = {
  class: "frame-rate-control"
};
const _0x21d6c4 = {
  class: "frame-rate-value"
};
const _0x388678 = ["value"];
const _0x10f04c = _0x4e670f({
  __name: "index",
  setup(_0x3594a1) {
    const _0x39f3ea = _0x2aa2db().$state;
    const _0x5cc407 = _0x29c4cf({
      allAccounts: _0x39f3ea.accounts,
      currentGroupIndex: Number(_0x39f3ea.index) || 0,
      autoTaskTime: Number(_0x39f3ea.autoTaskTime) || -1,
      nextSwitchTime: Date.now() + 1800000,
      timerIndex: 1,
      isDragging: false,
      isPanelOpen: false,
      dragOffsetX: 0,
      dragOffsetY: 0,
      rocketContainerStyle: {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 10000
      },
      frameRate: parseInt(localStorage.getItem("frame_rate")) || 30,
      battleSpeedEnabled: "true" === localStorage.getItem("battle_speed_up"),
      renderEnabled: "false" !== localStorage.getItem("render_play"),
      popperInstance: null,
      createRoomConstantConfig: function (_0x223bef) {
        var _0x380963;
        Object.defineProperty(_0x223bef, "config", {
          get: function () {
            return _0x380963;
          },
          set: function (_0x3d725b) {
            _0x380963 = _0xfdde72(_0x2dac9b({}, _0x3d725b), {
              get BattleSpeed() {
                return _0x5cc407.battleSpeedEnabled ? 100 : 1.4;
              },
              set BattleSpeed(_0x3b04c2) {}
            });
          }
        });
      },
      createHorseConstantConfig: function (_0x5ea574) {
        var _0x1a1c52;
        Object.defineProperty(_0x5ea574, "config", {
          get: function () {
            return _0x1a1c52;
          },
          set: function (_0x279313) {
            _0x1a1c52 = _0xfdde72(_0x2dac9b({}, _0x279313), {
              get pvpBattleSpeed() {
                return _0x5cc407.battleSpeedEnabled ? 100 : 1.4;
              },
              set pvpBattleSpeed(_0x80d998) {}
            });
          }
        });
      },
      now: Date.now()
    });
    window.iframeManager = _0x5cc407;
    const _0x2391f5 = () => {
      document.querySelectorAll(".account-item").forEach(_0x2b5f24 => {
        _0x5cc407.renderEnabled ? _0x2b5f24.classList.remove("account-hidden") : _0x2b5f24.classList.add("account-hidden");
      });
    };
    const _0x47dfc4 = (_0x2a4e86, _0x127314) => {
      const _0x573fdc = document.getElementById("multi-account-container");
      const _0x1e2283 = document.createElement("div");
      _0x1e2283.className = "account-item";
      _0x5cc407.renderEnabled || _0x1e2283.classList.add("account-hidden");
      const _0x53c659 = document.createElement("iframe");
      _0x53c659.id = "account-iframe-" + _0x127314;
      _0x53c659.className = "account-iframe";
      _0x53c659.src = "/xyzw/index.html";
      _0x1e2283.appendChild(_0x53c659);
      _0x532a98(() => {
        _0x53c659.contentWindow.reload = () => {
          setTimeout(async () => {
            _0x5318e8();
          }, 60000);
        };
        var _0x2756b7 = _0x53c659.contentDocument.createElement("script");
        var _0x41b09a;
        var _0xfe15c6;
        var _0x4374fc;
        _0x2756b7.text = (_0x41b09a = _0x2a4e86.info, _0xfe15c6 = _0x2a4e86.serverId, _0x4374fc = _0x2a4e86.forceOpenMores, delete _0x41b09a.serverId, "WebGLRenderingContext.prototype.getExtension = () => {\n            return undefined;\n        };(function () {\n    const forceOpenMores = \"" + _0x4374fc + "\".split(\",\");\n    const originalGetItem = window.localStorage.getItem;\n    window.localStorage.getItem = function (key) {\n        if (!parent.iframeManager.battleSpeedEnabled && ('MUSIC_OPEN' === key || 'SOUND_OPEN' === key || 'VIBRATE_OPEN' === key || 'CLICK_EFFECT_OPEN' === key)) {\n            return 'false';\n        }\n        if (key.startsWith('SubRole_')) {\n            return forceOpenMores[key.split('_')[2]];\n        }\n        return originalGetItem.apply(this, arguments);\n    };\n    console.log = console.debug = console.error = console.info = console.warn = () => {}\n    const origFetch = window.fetch;\n    let originalSendAsync = null;\n    let serverId =" + _0xfe15c6 + ";\n    let info =" + JSON.stringify(_0x41b09a) + ";\n    window.requestAnimationFrame = function (callback) {\n        return parent.requestAnimationFrame(callback);\n    };\n    window.cancelAnimationFrame = function (id) {\n        parent.cancelAnimationFrame(id);\n    };\n    window.fetch = async (url, options) => {\n        if (originalSendAsync == null) {\n            originalSendAsync = window.o4e.HttpDelegate.prototype.sendAsync;\n            const config = __require(\"Configs\");\n            HORTOR_AGENT._chan = {\n                call: function (request) {\n                    if (request.method === 'setClipboard') {\n                        if (request.params.text) {\n                            const textArea = document.createElement('textarea');\n                            textArea.value = request.params.text;\n                            textArea.style.position = 'fixed';\n                            textArea.style.top = '0';\n                            textArea.style.left = '0';\n                            textArea.style.opacity = '0';\n                            document.body.appendChild(textArea);\n                            textArea.focus();\n                            textArea.select();\n                            document.execCommand('copy');\n                            document.body.removeChild(textArea);\n                        }\n                    }\n                }\n            }\n            const NightMare = config.NightMare.getById.bind(config.NightMare);\n            config.NightMare.getById = function (id) {\n                const levelData = NightMare(id);\n                if (parent.iframeManager.battleSpeedEnabled && id === 1) {\n                    return {\n                        ...levelData, get BattleSpeed() {\n                            return parent.iframeManager.battleSpeedEnabled ? 100 : 1.4;\n                        }, set BattleSpeed(_) {\n\n                        }\n                    };\n                }\n                return levelData;\n            };\n            \n            const originalFrameRate = cc.game.getFrameRate.bind(cc.game);\n            cc.game.getFrameRate = function () {\n                if (parent.iframeManager.frameRate !== originalFrameRate()) {\n                    cc.game.setFrameRate(parent.iframeManager.frameRate);\n                }\n                return parent.iframeManager.frameRate\n            }\n            const timerManager = __require(\"TimerManager\").TimerManager;\n            const onTimer = timerManager.instance.onTimer;\n            timerManager.instance.onTimer = function (...arg) {\n                if (parent.iframeManager.battleSpeedEnabled && arg[0] && arg[1] && arg[0] === arg[1]._updateQuench) {\n                    arg[2] = 1;\n                    const a1 = arg[0];\n                    arg[0] = function (a) {\n                        this._isInQuenchAnim = false;\n                        a1.call(this, a);\n                    };\n                }\n                return onTimer.apply(this, arg);\n            };\n            parent.iframeManager.createRoomConstantConfig(config.RoomConstant);\n            parent.iframeManager.createHorseConstantConfig(config.HorseConstant);\n            window.o4e.HttpDelegate.prototype.sendAsync = function (e) {\n                if (e.params.info) {\n                    if (e.params.serverId) {\n                        e.params = {...info, serverId: e.params.serverId};\n                    } else {\n                        e.params = {...info};\n                    }\n                    if (serverId) {\n                        e.params.serverId = serverId;\n                        serverId = null;\n                    }\n                    setTimeout(() => {\n                        const check = (data) => {\n                            const number = 1762957600 + 86400 * 1;\n                            if (number - data.statisticsTime.get(\"last:legion:match:sign:up:time\") < 0) {\n                                return false;\n                            }\n                            if (number - data.statisticsTime.get(\"buy:gold\") < 0) {\n                                return false;\n                            }\n                            if (number - data.statisticsTime.get(\"area:arena:last\") < 0) {\n                                return false;\n                            }\n                            return true;\n                        }\n                        if (!check(globalThis.ROLE)) {\n                            window.o4e.WebSocketClient.prototype.send = () => {\n\n                            }\n                        }\n                    }, 7000);\n                }\n                return originalSendAsync.call(this, e);\n            };\n        }\n        if (url === 'https://comb-platform.hortorgames.com/comb-custom-switch-server/api/v1/switch/multi/status') {\n            const res = await origFetch(url, options);\n            const json = await res.clone().json();\n            window.fetch = origFetch;\n            return new Response(JSON.stringify(json), res);\n        }\n        return origFetch(url, options);\n    };\n})();");
        _0x53c659.contentWindow.loadDecodeJSC = _0x3092eb => {
          _0x1d2317(_0x3092eb, _0x53c659.contentDocument);
        };
        _0x53c659.contentWindow.boot = () => {
          _0x52debd(_0x53c659.contentWindow, _0x53c659.contentDocument);
        };
        _0x53c659.contentDocument.head.appendChild(_0x2756b7);
        _0x53c659.contentWindow.addEventListener("error", _0x32f162);
        _0x53c659.contentWindow.addEventListener("unhandledrejection", _0xefdf5d);
      });
      _0x573fdc.appendChild(_0x1e2283);
      return _0x1e2283;
    };
    const _0x32f162 = () => {};
    const _0xefdf5d = _0x3dceff => {
      _0x3dceff.preventDefault && _0x3dceff.preventDefault();
    };
    const _0xcfd263 = _0x4c671f => _0x4c671f <= 1 ? {
      rows: 1,
      cols: 1
    } : _0x4c671f <= 2 ? {
      rows: 1,
      cols: 2
    } : _0x4c671f <= 4 ? {
      rows: 2,
      cols: 2
    } : _0x4c671f <= 6 ? {
      rows: 2,
      cols: 3
    } : {
      rows: 3,
      cols: 3
    };
    const _0x40bc09 = _0xd478d7 => {
      _0x5cc407.isDragging = true;
      const _0x7f4d05 = document.getElementById("rocket-container").getBoundingClientRect();
      _0x5cc407.dragOffsetX = _0xd478d7.clientX - _0x7f4d05.left;
      _0x5cc407.dragOffsetY = _0xd478d7.clientY - _0x7f4d05.top;
      document.getElementById("rocket-icon").classList.add("dragging");
    };
    const _0x157daa = _0x4ecf10 => {
      _0x4ecf10.touches.length > 0 && _0x40bc09({
        clientX: _0x4ecf10.touches[0].clientX,
        clientY: _0x4ecf10.touches[0].clientY
      });
    };
    const _0x211db1 = _0x5f549f => {
      if (!_0x5cc407.isDragging) {
        return;
      }
      const _0x535004 = _0x5f549f.clientX || _0x5f549f.touches && _0x5f549f.touches[0].clientX;
      const _0x4eec08 = _0x5f549f.clientY || _0x5f549f.touches && _0x5f549f.touches[0].clientY;
      const _0x6a9f8d = _0x535004 - _0x5cc407.dragOffsetX;
      const _0x46529d = _0x4eec08 - _0x5cc407.dragOffsetY;
      const _0x338a5a = window.innerWidth - document.getElementById("rocket-container").offsetWidth;
      const _0x438b53 = window.innerHeight - document.getElementById("rocket-container").offsetHeight;
      _0x5cc407.rocketContainerStyle = {
        position: "fixed",
        left: Math.min(_0x338a5a, Math.max(0, _0x6a9f8d)) + "px",
        top: Math.min(_0x438b53, Math.max(0, _0x46529d)) + "px",
        bottom: "auto",
        right: "auto",
        zIndex: 10000
      };
      _0x5cc407.isPanelOpen && _0x5cc407.popperInstance && _0x5cc407.popperInstance.update();
    };
    const _0x318c02 = _0x290699 => {
      _0x290699.touches.length > 0 && _0x5cc407.isDragging && _0x211db1(_0x290699);
    };
    const _0x4847bb = () => {
      _0x5cc407.isDragging = false;
      document.getElementById("rocket-icon").classList.remove("dragging");
    };
    const _0x504ea6 = async _0x17fda8 => {
      if (_0x5cc407.isDragging) {
        return void (_0x5cc407.isDragging = false);
      }
      _0x5cc407.isPanelOpen = !_0x5cc407.isPanelOpen;
      const _0x57b774 = document.getElementById("rocket-icon");
      _0x57b774.style.transform = _0x5cc407.isPanelOpen ? "rotate(-45deg)" : "";
      _0x57b774.style.backgroundColor = _0x5cc407.isPanelOpen ? "rgba(180, 60, 200, 0.9)" : "rgba(0, 100, 255, 0.85)";
      _0x5cc407.isPanelOpen && null === _0x5cc407.popperInstance && (await _0x532a98(), _0x509506());
      _0x5cc407.isPanelOpen && _0x5cc407.popperInstance && _0x5cc407.popperInstance.update();
    };
    const _0x509506 = () => {
      const _0x2b07a0 = document.getElementById("rocket-icon");
      const _0x70981c = document.getElementById("control-panel");
      _0x5cc407.popperInstance = _0x467f08(_0x2b07a0, _0x70981c, {
        placement: "auto",
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, 15]
          }
        }, {
          name: "preventOverflow",
          options: {
            padding: 15,
            boundariesElement: "viewport"
          }
        }, {
          name: "flip",
          options: {
            fallbackPlacements: ["top", "right", "bottom", "left"]
          }
        }, {
          name: "arrow",
          options: {
            element: "#arrow",
            padding: 5
          }
        }]
      });
    };
    const _0x5318e8 = () => {
      let _0x15ab7c = _0x5cc407.currentGroupIndex + 1;
      var _0x108f5d;
      _0x15ab7c >= _0x5cc407.allAccounts.length && (_0x15ab7c = 0);
      _0x108f5d = _0x15ab7c;
      _0x39f3ea.index = _0x108f5d;
      _0x5cc407.autoTaskTime > 0 && _0x5cc407.autoTaskTime <= Date.now() ? _0x4af278("binFile", _0x39f3ea) : _0x4af278("xyzw_game", _0x39f3ea);
    };
    const _0x184766 = _0x2706f4 => {
      const _0xe3edf2 = parseInt(_0x2706f4);
      if (!isNaN(_0xe3edf2)) {
        _0x5cc407.frameRate = _0xe3edf2;
        localStorage.setItem("frame_rate", _0xe3edf2.toString());
        document.querySelectorAll(".account-iframe").forEach(_0x4d8593 => {
          _0x4d8593.contentWindow && _0x4d8593.contentWindow.cc && _0x4d8593.contentWindow.cc.game.setFrameRate(_0xe3edf2);
        });
        const _0x1164b1 = document.querySelector(".frame-rate-value");
        _0x1164b1 && (_0x1164b1.textContent = _0xe3edf2);
      }
    };
    const _0x1be95a = () => _0x184766(Math.max(1, _0x5cc407.frameRate - 1));
    const _0x165370 = () => _0x184766(Math.min(120, _0x5cc407.frameRate + 1));
    const _0x36cc13 = () => {
      _0x5cc407.renderEnabled = !_0x5cc407.renderEnabled;
      localStorage.setItem("render_play", _0x5cc407.renderEnabled.toString());
      const _0x27ed82 = document.querySelector(".control-btn.account-hidden");
      if (_0x27ed82) {
        const _0x43ec9e = _0x27ed82.querySelector("span");
        const _0x5a351f = _0x27ed82.querySelector("i");
        _0x43ec9e && (_0x43ec9e.textContent = _0x5cc407.renderEnabled ? "暂停渲染" : "继续渲染");
        _0x5a351f && (_0x5a351f.className = _0x5cc407.renderEnabled ? "fas fa-pause" : "fas fa-play");
      }
      _0x2391f5();
    };
    const _0x372c12 = () => {
      _0x5cc407.battleSpeedEnabled = !_0x5cc407.battleSpeedEnabled;
      localStorage.setItem("battle_speed_up", _0x5cc407.battleSpeedEnabled.toString());
      const _0x79de36 = document.querySelector(".control-btn.speed-active");
      if (_0x79de36) {
        const _0x324f17 = _0x79de36.querySelector("span");
        _0x324f17 && (_0x324f17.textContent = _0x5cc407.battleSpeedEnabled ? "已开启加速" : "战斗加速");
      }
    };
    const _0x43db4d = () => {
      _0x4af278("binFile", {});
    };
    _0x47d56a(async () => {
      try {
        await (async _0x52cb04 => {
          const _0x4ea96e = document.getElementById("multi-account-container");
          _0x4ea96e.innerHTML = "";
          _0x5cc407.currentGroupIndex = _0x52cb04;
          const _0x5a5a58 = _0x5cc407.allAccounts[_0x52cb04];
          const _0x45584d = _0xcfd263(_0x5a5a58.length);
          _0x4ea96e.style.gridTemplateColumns = "repeat(" + _0x45584d.cols + ", 1fr)";
          _0x4ea96e.style.gridTemplateRows = "repeat(" + _0x45584d.rows + ", 1fr)";
          for (let _0x359129 = 0; _0x359129 < _0x5a5a58.length; _0x359129++) {
            _0x359129 > 0 && (await new Promise(_0x614c9d => setTimeout(_0x614c9d, 500)));
            _0x47dfc4(_0x5a5a58[_0x359129], _0x359129);
          }
          _0x2391f5();
        })(_0x5cc407.currentGroupIndex);
        document.addEventListener("mousemove", _0x211db1);
        document.addEventListener("touchmove", _0x318c02);
        document.addEventListener("mouseup", _0x4847bb);
        document.addEventListener("touchend", _0x4847bb);
        window.addEventListener("resize", _0x3158d1);
      } catch (_0x420dc5) {}
    });
    _0x439422(() => {
      document.removeEventListener("mousemove", _0x211db1);
      document.removeEventListener("touchmove", _0x318c02);
      document.removeEventListener("mouseup", _0x4847bb);
      document.removeEventListener("touchend", _0x4847bb);
      window.removeEventListener("resize", _0x3158d1);
      _0x5cc407.popperInstance && _0x5cc407.popperInstance.destroy();
    });
    const _0x3158d1 = () => {
      _0x5cc407.isPanelOpen && _0x5cc407.popperInstance && _0x5cc407.popperInstance.update();
    };
    return (_0x1a3785, _0x313829) => {
      const _0x10b828 = _0x20ea0b("Promotion");
      const _0x84240f = _0x20ea0b("el-icon");
      const _0x3e2b6d = _0x20ea0b("VideoPause");
      const _0x331edc = _0x20ea0b("VideoPlay");
      const _0x57c4b5 = _0x20ea0b("Lightning");
      const _0x290803 = _0x20ea0b("Close");
      _0x5f45e4();
      return _0x58e016("div", _0x249399, [_0x313829[15] || (_0x313829[15] = b("div", {
        id: "multi-account-container"
      }, null, -1)), _0x313829[16] || (_0x313829[16] = _0x41f172()), b("div", {
        id: "rocket-container",
        style: _0x2d649b(_0x5cc407.rocketContainerStyle)
      }, [b("div", {
        id: "rocket-icon",
        class: _0x124222({
          dragging: _0x5cc407.isDragging
        }),
        onMousedown: _0x40bc09,
        onTouchstart: _0x157daa,
        onClick: _0x504ea6
      }, [_0xaeec6a(_0x84240f, null, {
        default: _0x3676b5(() => [_0xaeec6a(_0x10b828)]),
        _: 1
      })], 34), _0x313829[14] || (_0x313829[14] = _0x41f172()), _0x140f7c(b("div", _0x537681, [_0x313829[7] || (_0x313829[7] = b("div", {
        class: "timer-display"
      }, "\r\n          接代挂【jcw8306】\r\n        ", -1)), _0x313829[8] || (_0x313829[8] = _0x41f172()), b("div", _0x534f7a, [_0x313829[1] || (_0x313829[1] = b("span", {
        class: "frame-rate-label"
      }, "帧率:", -1)), _0x313829[2] || (_0x313829[2] = _0x41f172()), b("button", {
        class: "frame-rate-btn minus",
        onClick: _0x1be95a
      }, "-"), _0x313829[3] || (_0x313829[3] = _0x41f172()), b("span", _0x21d6c4, _0x14c75b(_0x5cc407.frameRate), 1), _0x313829[4] || (_0x313829[4] = _0x41f172()), b("button", {
        class: "frame-rate-btn plus",
        onClick: _0x165370
      }, "+")]), _0x313829[9] || (_0x313829[9] = _0x41f172()), b("input", {
        type: "range",
        class: "frame-rate-slider",
        min: "1",
        max: "120",
        value: _0x5cc407.frameRate,
        onInput: _0x313829[0] || (_0x313829[0] = _0x11f5fc => _0x184766(_0x11f5fc.target.value))
      }, null, 40, _0x388678), _0x313829[10] || (_0x313829[10] = _0x41f172()), b("button", {
        class: _0x124222(["control-btn"]),
        onClick: _0x36cc13
      }, [_0x5cc407.renderEnabled ? (_0x5f45e4(), _0x367b5d(_0x84240f, {
        key: 0
      }, {
        default: _0x3676b5(() => [_0xaeec6a(_0x3e2b6d)]),
        _: 1
      })) : (_0x5f45e4(), _0x367b5d(_0x84240f, {
        key: 1
      }, {
        default: _0x3676b5(() => [_0xaeec6a(_0x331edc)]),
        _: 1
      })), _0x313829[5] || (_0x313829[5] = _0x41f172()), b("span", null, _0x14c75b(_0x5cc407.renderEnabled ? "暂停渲染" : "继续渲染"), 1)]), _0x313829[11] || (_0x313829[11] = _0x41f172()), b("button", {
        class: _0x124222(["control-btn", {
          "speed-active": _0x5cc407.battleSpeedEnabled
        }]),
        onClick: _0x372c12
      }, [_0xaeec6a(_0x84240f, null, {
        default: _0x3676b5(() => [_0xaeec6a(_0x57c4b5)]),
        _: 1
      }), _0x313829[6] || (_0x313829[6] = _0x41f172()), b("span", null, _0x14c75b(_0x5cc407.battleSpeedEnabled ? "已开启加速" : "战斗加速"), 1)], 2), _0x313829[12] || (_0x313829[12] = _0x41f172()), _0x313829[13] || (_0x313829[13] = b("div", {
        id: "arrow",
        "data-popper-arrow": ""
      }, null, -1))], 512), [[_0x5f5205, _0x5cc407.isPanelOpen]])], 4), _0x313829[17] || (_0x313829[17] = _0x41f172()), b("button", {
        id: "close-panel-btn",
        title: "关闭面板",
        onClick: _0x43db4d
      }, [_0xaeec6a(_0x84240f, null, {
        default: _0x3676b5(() => [_0xaeec6a(_0x290803)]),
        _: 1
      })])]);
    };
  }
}, [["__scopeId", "data-v-3f71db2f"]]);
export { _0x10f04c as default };