//Thu Nov 27 2025 00:52:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x2ffc8a = Object.defineProperty;
var _0x300072 = Object.defineProperties;
var _0x409d0b = Object.getOwnPropertyDescriptors;
var _0x4b9360 = Object.getOwnPropertySymbols;
var _0x4cecd9 = Object.prototype.hasOwnProperty;
var _0x28cc3c = Object.prototype.propertyIsEnumerable;
var _0x5671fd = (_0x4953e9, _0x4861ed, _0x2069a5) => _0x4861ed in _0x4953e9 ? _0x2ffc8a(_0x4953e9, _0x4861ed, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x2069a5
}) : _0x4953e9[_0x4861ed] = _0x2069a5;
var _0x52e981 = (_0x268f99, _0x3ea7e4) => {
  for (var _0x35fa2e in _0x3ea7e4 || (_0x3ea7e4 = {})) _0x4cecd9.call(_0x3ea7e4, _0x35fa2e) && _0x5671fd(_0x268f99, _0x35fa2e, _0x3ea7e4[_0x35fa2e]);
  if (_0x4b9360) {
    for (var _0x35fa2e of _0x4b9360(_0x3ea7e4)) _0x28cc3c.call(_0x3ea7e4, _0x35fa2e) && _0x5671fd(_0x268f99, _0x35fa2e, _0x3ea7e4[_0x35fa2e]);
  }
  return _0x268f99;
};
import { l as _0x1a34bd, _ as _0x486b60, r, n as _0x977ef7, p as _0x2e2ce0, o as _0xb8db0e, q as _0x5b4628, f as _0x729244, c as _0x463345, s as _0x4c3da8, a as _0xd79bff, b, d as _0x294eff, e as _0x232e32, w as _0x25252c, u as _0x51a3e3, j as _0x292fee, v as _0x538bb7, x as _0x43dc70, F as _0x5a8a53, y as _0xfd9392, z as _0x507b0e, t as _0x46dc30, A as _0x3d5124, B as _0x4b05c0, C as _0x20853b, D as _0x52d5ab, G as _0x4828f3, H as _0x2ec24c, I as _0x373831, J as _0x299a9f, K as _0x45e923, L as _0x12c49a, M as _0x45ec50, N as _0x207085, O as _0x53d6bf, P as _0x4a521e, E as _0x10be74, Q as _0x1309f9, R as _0x42065c, S as _0xfe6191, T as _0x146524, U as _0x57301b, V as _0x183f79, W as _0x31cc67, X as _0x472e6c, Y as _0x1fe5d1, Z as _0x47cac8, $ as _0x1699a7, a0 as _0x123357, a1 as _0x7ce7ce, a2 as _0x5d6f7f, a3 as _0x32e666 } from "./main-DgK-CuC8.js";
import { o as _0x493bd7 } from "./webInjector-BbQhlhRo.js";
const _0x376378 = "" + new URL("../png/1-DFzmoVN7.png", import.meta.url).href;
const _0x5d4689 = _0x1a34bd("WeChatLogin");
class _0x17fefb {
  constructor() {
    this.qrCodeUrl = null;
    this.uuid = null;
    this.timeout = 120000;
    this.interval = 2000;
  }
  async fetchQRCode() {
    const {
      qrCodeUrl: _0x5e92e2,
      uuid: _0x15db21
    } = await _0x5d4689.fetchQRCode();
    this.qrCodeUrl = _0x5e92e2;
    this.uuid = _0x15db21;
    return _0x5e92e2;
  }
  async sendPhoneVerificationCode(_0x53cc3d) {
    await _0x5d4689.sendPhoneVerificationCode({
      phone: _0x53cc3d
    });
  }
  async pollLoginStatus(_0x1dc4a6) {
    const {
      lastCode: _0x301a2b
    } = await _0x5d4689.pollLoginStatus(_0x1dc4a6);
    return _0x301a2b;
  }
  async login() {
    const _0x35ce87 = Date.now();
    const _0x5d26d2 = {
      uuid: this.uuid,
      lastCode: null
    };
    return new Promise((_0x313f75, _0x7db4bc) => {
      const _0x4543d5 = async () => {
        try {
          if (_0x5d26d2.lastCode = await this.pollLoginStatus(_0x5d26d2), _0x5d26d2.lastCode && "waiting" !== _0x5d26d2.lastCode) {
            return void _0x313f75(_0x5d26d2.lastCode);
          }
          if (Date.now() - _0x35ce87 > this.timeout) {
            return void _0x7db4bc("登录超时");
          }
          setTimeout(_0x4543d5, this.interval);
        } catch (_0x2ee3fa) {
          setTimeout(_0x4543d5, interval);
        }
      };
      _0x4543d5();
    });
  }
  gzipEnCode(_0x281d06, _0x36138e, _0x21e18c, _0x2b48c3, _0x127e9c) {
    const _0x46335d = function () {
      function _0x5a7b80() {}
      _0x5a7b80.decode = function (_0x5814cd, _0xc9f50b, _0x1629ec, _0x207cad, _0x1f2ca3) {
        var _0x212368 = _0xc9f50b;
        var _0x3ebf43 = this.transCode(_0x212368, _0x1629ec);
        var _0x3156d6 = this.getKey(_0x3ebf43, _0x207cad);
        return this.crypto(_0x5814cd, _0x3156d6, _0x3156d6.length >> _0x1f2ca3);
      };
      _0x5a7b80.encode = function (_0x16c24a, _0x2263b3, _0x3ce387, _0xdea99, _0xe74811) {
        return this.decode(_0x16c24a, _0x2263b3, _0x3ce387, _0xdea99, _0xe74811);
      };
      _0x5a7b80.crypto = function (_0x5e3f13, _0x3e06fd, _0x42f15a) {
        if (null != _0x5e3f13 && null != _0x3e06fd) {
          for (var _0x107750 = "", _0x5ac55c = 0; _0x5ac55c < _0x5e3f13.length; _0x5ac55c++) {
            _0x42f15a >= _0x3e06fd.length && (_0x42f15a = 0);
            _0x107750 += String.fromCharCode(_0x5e3f13[_0x5ac55c].charCodeAt(0) ^ _0x3e06fd[_0x42f15a].charCodeAt(0));
            _0x42f15a++;
          }
          return _0x107750;
        }
        return null;
      };
      _0x5a7b80.getKey = function (_0x17af9f, _0x2ac6a3) {
        for (var _0xdaac2 = _0x17af9f, _0xb6c044 = "", _0x1ac29c = Math.floor(_0x17af9f.length / _0x2ac6a3), _0x23886f = 0; _0x23886f < _0x1ac29c; _0x23886f++) {
          _0xb6c044 += _0xdaac2[_0x23886f * _0x2ac6a3];
        }
        return _0xb6c044;
      };
      _0x5a7b80.transCode = function (_0x3faeaa, _0x557dae) {
        if (_0x557dae > 0) {
          _0x557dae--;
          var _0x1465cf = this.rightSide(_0x3faeaa);
          var _0x459c6b = this.leftSide(_0x3faeaa);
          return this.transCode(_0x1465cf, _0x557dae) + this.transCode(_0x459c6b, _0x557dae);
        }
        return _0x3faeaa;
      };
      _0x5a7b80.swap = function (_0x3c1e38) {
        return this.rightSide(_0x3c1e38) + this.leftSide(_0x3c1e38);
      };
      _0x5a7b80.rightSide = function (_0x24983d) {
        return _0x24983d.length % 2 != 0 ? null : _0x24983d.substring(_0x24983d.length / 2, _0x24983d.length);
      };
      _0x5a7b80.leftSide = function (_0x2e680b) {
        return _0x2e680b.length % 2 != 0 ? null : _0x2e680b.substring(0, _0x2e680b.length / 2);
      };
      return _0x5a7b80;
    }();
    const _0x3ac6e3 = function (_0x588cfa) {
      const _0x4d8071 = new TextEncoder().encode(_0x588cfa);
      return btoa(String.fromCharCode(..._0x4d8071));
    };
    const _0x443de6 = function (_0x33f6c0, _0x3e46a7) {
      undefined === _0x3e46a7 && (_0x3e46a7 = false);
      return _0x3e46a7 ? _0x3ac6e3(_0x33f6c0).replace(/=/g, "").replace(/[+\/]/g, function (_0x336009) {
        return "+" == _0x336009 ? "-" : "_";
      }) : _0x3ac6e3(_0x33f6c0);
    };
    return _0x443de6(_0x46335d.encode(_0x443de6(JSON.stringify(_0x281d06)), _0x36138e, _0x21e18c, _0x2b48c3, _0x127e9c));
  }
  async getSmsUser(_0x251443, _0x46322e) {
    const {
      detail: _0x2dc067
    } = await _0x5d4689.getMix();
    const _0x1b1c40 = JSON.parse(_0x2dc067).data;
    const _0x57ccf3 = this.gzipEnCode({
      gameId: "xyzwapp",
      gameTp: "app",
      sysInfo: "{\"SDKVersion\":\"3.3.5\",\"brand\":\"microsoft\",\"model\":\"microsoft\",\"system\":\"Windows 11 x64\",\"version\":\"3.9.10\",\"screenHeight\":1184,\"screenWidth\":666,\"pixelRatio\":1,\"benchmarkLevel\":-1,\"hortorSDKVersion\":\"1.10.14\"}",
      smsCode: _0x46322e,
      mobile: _0x251443,
      channel: "android",
      distinctId: "DID-c96a17f3-fbb0-43ca-a515-8b8af8ea7b14",
      packageName: "com.hortor.games.xyzw",
      signPrint: "E6:F7:FE:A9:EC:8E:24:D0:4F:2A:32:50:28:78:E1:C5:5E:70:81:13",
      tp: "app-mobile",
      androidId: "",
      oaid: ""
    }, _0x1b1c40.cryptRule.codeBook, _0x1b1c40.cryptRule.swapTimes, _0x1b1c40.cryptRule.keySkip, _0x1b1c40.cryptRule.keyOffset);
    const _0x19e864 = new URL("https://comb-platform.hortorgames.com/comb-login-server/api/v1/login");
    const _0x2d5a5e = {
      gameId: "xyzwapp",
      timestamp: Math.floor(Date.now() / 1000),
      version: "android-4.2.1-cn-release",
      cryptVersion: "1.1.0",
      gameTp: "app",
      system: "android",
      deviceUniqueId: "DID-c31a89d3-1a85-474f-b529-5135135f56ed",
      packageName: "com.hortor.games.xyzw"
    };
    Object.entries(_0x2d5a5e).forEach(([_0x18583c, _0x2aa2dd]) => _0x19e864.searchParams.append(_0x18583c, _0x2aa2dd));
    const _0x495899 = await _0x5d4689.getCombUser({
      body: _0x57ccf3,
      url: _0x19e864
    });
    return JSON.parse(_0x495899.detail).data;
  }
  async getCombUser(_0x41e74a) {
    const {
      detail: _0x4ab67b
    } = await _0x5d4689.getMix();
    const _0x1a8f6e = JSON.parse(_0x4ab67b).data;
    const _0x13f1c1 = this.gzipEnCode({
      gameId: "xyzwapp",
      code: _0x41e74a,
      gameTp: "app",
      sysInfo: "{\"SDKVersion\":\"3.3.5\",\"brand\":\"microsoft\",\"model\":\"microsoft\",\"system\":\"Windows 11 x64\",\"version\":\"3.9.10\",\"screenHeight\":1184,\"screenWidth\":666,\"pixelRatio\":1,\"benchmarkLevel\":-1,\"hortorSDKVersion\":\"1.10.14\"}",
      channel: "android",
      appFrom: "com.tencent.mm",
      noLogin: "2",
      distinctId: "DID-12f90e14-dbe1-4eb0-819b-35b66b0d805d",
      state: "hortor",
      packageName: "com.hortor.games.xyzw",
      tp: "app-we"
    }, _0x1a8f6e.cryptRule.codeBook, _0x1a8f6e.cryptRule.swapTimes, _0x1a8f6e.cryptRule.keySkip, _0x1a8f6e.cryptRule.keyOffset);
    const _0x4f1f1d = new URL("https://comb-platform.hortorgames.com/comb-login-server/api/v1/login");
    const _0x1819c1 = {
      gameId: "xyzwapp",
      timestamp: Math.floor(Date.now() / 1000),
      version: "android-4.2.1-cn-release",
      cryptVersion: "1.1.0",
      gameTp: "app",
      system: "android",
      deviceUniqueId: "DID-c31a89d3-1a85-474f-b529-5135135f56ed",
      packageName: "com.hortor.games.xyzw"
    };
    Object.entries(_0x1819c1).forEach(([_0x543549, _0x5c35fc]) => _0x4f1f1d.searchParams.append(_0x543549, _0x5c35fc));
    const _0x2ab32c = await _0x5d4689.getCombUser({
      body: _0x13f1c1,
      url: _0x4f1f1d
    });
    return JSON.parse(_0x2ab32c.detail).data;
  }
}
const _0x5ab86e = {
  class: "server-dialog"
};
const _0x11dc6d = {
  class: "server-dialog-header"
};
const _0x30f03b = {
  class: "action-icons"
};
const _0x178798 = {
  class: "left-actions"
};
const _0x3dccc7 = {
  class: "right-actions"
};
const _0x4ef4b7 = {
  class: "search-container"
};
const _0x22e7c3 = {
  class: "server-dialog-content"
};
const _0x1366c1 = ["onClick"];
const _0x29ebb3 = {
  class: "server-checkbox-container"
};
const _0x4dbef7 = ["checked"];
const _0x3c6d26 = {
  class: "server-info"
};
const _0x220272 = {
  class: "server-id"
};
const _0x36815a = {
  class: "server-name"
};
const _0x347d30 = {
  class: "server-power"
};
const _0x520b03 = {
  key: 0,
  class: "empty-state"
};
const _0x1a00b8 = {
  class: "pagination-container"
};
const _0x28ab79 = {
  class: "page-info"
};
const _0x575b8a = {
  class: "add-server-dialog"
};
const _0x4ca43c = {
  class: "add-server-body"
};
const _0x48dcb7 = {
  class: "add-server-footer"
};
const _0x2afcd7 = _0x486b60({
  __name: "index",
  props: {
    visible: Boolean,
    file: Object
  },
  emits: ["update:visible", "confirm"],
  setup(_0xdb2513, {
    emit: _0x994465
  }) {
    const _0x1b4f2a = _0xdb2513;
    const _0x1ec427 = r(false);
    const _0x4621f9 = r("");
    const _0x3f4e5c = _0x977ef7(() => /^\d+-\d+$/.test(_0x4621f9.value));
    const _0x52bf9a = _0x994465;
    const _0x3222b6 = _0x2e2ce0("fileManager");
    const _0x1feaa2 = r([]);
    const _0x2ef89d = r([]);
    const _0x4e81ae = r("");
    const _0x4482b6 = r(1);
    const _0x1a9822 = r(10);
    const _0x4603b3 = r("");
    const _0x1a9bc5 = _0x977ef7(() => {
      if (!_0x4e81ae.value) {
        return _0x1feaa2.value;
      }
      const _0x34f870 = _0x4e81ae.value.toLowerCase();
      return _0x1feaa2.value.filter(_0x48aee7 => _0x48aee7.formattedServerId.toLowerCase().includes(_0x34f870) || _0x48aee7.name && _0x48aee7.name.toLowerCase().includes(_0x34f870));
    });
    const _0x2531ee = _0x977ef7(() => {
      const _0x2c08dd = (_0x4482b6.value - 1) * _0x1a9822.value;
      const _0x2a5dc6 = _0x2c08dd + _0x1a9822.value;
      return _0x1a9bc5.value.slice(_0x2c08dd, _0x2a5dc6);
    });
    const _0x2a7c21 = _0x977ef7(() => Math.ceil(_0x1a9bc5.value.length / _0x1a9822.value));
    const _0x4d0491 = async _0x5f3e4a => {
      try {
        let _0x18de26 = {};
        if (_0x4603b3.value) {
          !function (_0x507e74, _0x3f306a, _0x505aa7) {
            _0x507e74.roles || (_0x507e74.roles = {});
            _0x505aa7 += 27;
            for (let _0x79acf6 = _0x3f306a += 27; _0x79acf6 <= _0x505aa7; _0x79acf6++) {
              [_0x79acf6, 1000000 + _0x79acf6, 2000000 + _0x79acf6].forEach(_0x4c8f13 => {
                const _0x35218b = _0x4c8f13;
                _0x507e74.roles[_0x4c8f13] = {
                  roleId: _0x35218b,
                  serverId: _0x4c8f13,
                  name: "k",
                  level: 1,
                  power: 0,
                  lordSkinId: 0,
                  lordSkinExpireTime: 0,
                  loginAt: new Date().toISOString()
                };
              });
            }
          }(_0x18de26, +_0x4603b3.value.split("-")[0], +_0x4603b3.value.split("-")[1]);
        } else {
          _0x18de26 = (await _0x4b05c0(_0x5f3e4a.content)).body;
        }
        _0x1feaa2.value = Object.entries(_0x18de26.roles).map(([_0x4e9c49, _0x5055b6]) => {
          let _0x30f4d4;
          let _0x3f93af;
          7 === _0x4e9c49.length && _0x4e9c49.startsWith("10") ? (_0x30f4d4 = _0x5055b6.serverId - 1000000 - 27 + "-中", _0x3f93af = 2) : 7 === _0x4e9c49.length && _0x4e9c49.startsWith("20") ? (_0x30f4d4 = _0x5055b6.serverId - 2000000 - 27 + "-右", _0x3f93af = 3) : (_0x30f4d4 = _0x5055b6.serverId - 27 + "-左", _0x3f93af = 1);
          const _0x5b3b4c = parseInt(_0x30f4d4.split("-")[0]);
          _0xdf08ef = _0x52e981({}, _0x5055b6);
          return _0x300072(_0xdf08ef, _0x409d0b({
            formattedServerId: _0x30f4d4,
            originalKey: _0x4e9c49,
            serverIdNum: _0x5b3b4c,
            positionOrder: _0x3f93af
          }));
          var _0xdf08ef;
        }).sort((_0x41d913, _0x4834d1) => _0x41d913.serverIdNum !== _0x4834d1.serverIdNum ? _0x41d913.serverIdNum - _0x4834d1.serverIdNum : _0x41d913.positionOrder - _0x4834d1.positionOrder);
      } catch (_0x332785) {
        _0x1feaa2.value = [];
      }
    };
    const _0x415edf = () => {
      _0x2ef89d.value.length === _0x1feaa2.value.length ? _0x2ef89d.value = [] : _0x2ef89d.value = _0x1feaa2.value.map(_0x4c2ffa => _0x4c2ffa.originalKey);
    };
    const _0x34ca0a = () => {
      const _0x240a95 = _0x1feaa2.value.filter(_0x4c740d => _0x2ef89d.value.includes(_0x4c740d.originalKey));
      _0x3222b6.addServerList(_0x240a95, _0x1b4f2a.file, _0x4603b3.value);
      _0x52bf9a("confirm");
      _0x408ba0();
    };
    _0xb8db0e(async () => {
      await _0x4d0491(_0x1b4f2a.file);
    });
    _0x5b4628(_0x4e81ae, () => {
      _0x4482b6.value = 1;
    });
    const _0x408ba0 = () => {
      _0x52bf9a("update:visible", false);
      _0x4e81ae.value = "";
      _0x4482b6.value = 1;
    };
    const _0x2b063b = async () => {
      if (_0x3f4e5c.value) {
        try {
          _0x4603b3.value = _0x4621f9.value;
          await _0x4d0491(_0x1b4f2a.file);
          _0x1ec427.value = false;
          _0x4621f9.value = "";
        } catch (_0x1ed402) {}
      }
    };
    return (_0x57be15, _0x5ef3eb) => {
      const _0x499812 = _0x729244("el-icon");
      const _0x24f5a7 = _0x729244("Plus");
      const _0x4e2612 = _0x729244("el-input");
      const _0x2c4b02 = _0x729244("el-pagination");
      const _0x431735 = _0x729244("el-button");
      return _0xdb2513.visible ? (_0xd79bff(), _0x463345("div", {
        key: 0,
        class: "server-dialog-overlay",
        onClick: _0x3d5124(_0x408ba0, ["self"])
      }, [b("div", _0x5ab86e, [b("div", _0x11dc6d, [b("div", _0x30f03b, [b("div", _0x178798, [_0x232e32(_0x499812, {
        class: "action-icon",
        onClick: _0x415edf
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x292fee))]),
        _: 1
      }), _0x5ef3eb[6] || (_0x5ef3eb[6] = _0x294eff()), _0x5ef3eb[7] || (_0x5ef3eb[7] = b("h3", null, "选择服务器", -1))]), _0x5ef3eb[10] || (_0x5ef3eb[10] = _0x294eff()), b("div", _0x3dccc7, [_0x232e32(_0x499812, {
        class: "action-icon add-icon",
        onClick: _0x5ef3eb[0] || (_0x5ef3eb[0] = _0x211b7f => _0x1ec427.value = true)
      }, {
        default: _0x25252c(() => [_0x232e32(_0x24f5a7)]),
        _: 1
      }), _0x5ef3eb[8] || (_0x5ef3eb[8] = _0x294eff()), _0x232e32(_0x499812, {
        class: "action-icon confirm-icon",
        onClick: _0x34ca0a
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x292fee))]),
        _: 1
      }), _0x5ef3eb[9] || (_0x5ef3eb[9] = _0x294eff()), _0x232e32(_0x499812, {
        class: "action-icon cancel-icon",
        onClick: _0x408ba0
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x538bb7))]),
        _: 1
      })])])]), _0x5ef3eb[19] || (_0x5ef3eb[19] = _0x294eff()), b("div", _0x4ef4b7, [_0x232e32(_0x4e2612, {
        modelValue: _0x4e81ae.value,
        "onUpdate:modelValue": _0x5ef3eb[1] || (_0x5ef3eb[1] = _0x58e0e0 => _0x4e81ae.value = _0x58e0e0),
        placeholder: "搜索服务器ID或名称",
        clearable: "",
        class: "search-input"
      }, {
        prefix: _0x25252c(() => [_0x232e32(_0x499812, null, {
          default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x43dc70))]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"])]), _0x5ef3eb[20] || (_0x5ef3eb[20] = _0x294eff()), b("div", _0x22e7c3, [(_0xd79bff(true), _0x463345(_0x5a8a53, null, _0xfd9392(_0x2531ee.value, _0x528508 => (_0xd79bff(), _0x463345("div", {
        key: _0x528508.originalKey,
        class: "server-item",
        onClick: _0x562503 => (_0x155c62 => {
          const _0x3fb6c8 = _0x155c62.originalKey;
          const _0xd316d1 = _0x2ef89d.value.indexOf(_0x3fb6c8);
          -1 === _0xd316d1 ? _0x2ef89d.value.push(_0x3fb6c8) : _0x2ef89d.value.splice(_0xd316d1, 1);
        })(_0x528508)
      }, [b("div", _0x29ebb3, [b("input", {
        type: "checkbox",
        checked: _0x2ef89d.value.includes(_0x528508.originalKey),
        class: "server-checkbox"
      }, null, 8, _0x4dbef7), _0x5ef3eb[11] || (_0x5ef3eb[11] = _0x294eff()), b("div", {
        class: _0x507b0e(["checkbox-indicator", {
          checked: _0x2ef89d.value.includes(_0x528508.originalKey)
        }])
      }, null, 2)]), _0x5ef3eb[14] || (_0x5ef3eb[14] = _0x294eff()), b("div", _0x3c6d26, [b("div", _0x220272, _0x46dc30(_0x528508.formattedServerId), 1), _0x5ef3eb[12] || (_0x5ef3eb[12] = _0x294eff()), b("div", _0x36815a, _0x46dc30(_0x528508.name || "未命名"), 1), _0x5ef3eb[13] || (_0x5ef3eb[13] = _0x294eff()), b("div", _0x347d30, "战力: " + _0x46dc30(_0x528508.power.toLocaleString()), 1)])], 8, _0x1366c1))), 128)), _0x5ef3eb[17] || (_0x5ef3eb[17] = _0x294eff()), 0 === _0x1a9bc5.value.length ? (_0xd79bff(), _0x463345("div", _0x520b03, [_0x232e32(_0x499812, {
        class: "empty-icon"
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x43dc70))]),
        _: 1
      }), _0x5ef3eb[15] || (_0x5ef3eb[15] = _0x294eff()), _0x5ef3eb[16] || (_0x5ef3eb[16] = b("p", null, "没有找到匹配的服务器", -1))])) : _0x4c3da8("", true)]), _0x5ef3eb[21] || (_0x5ef3eb[21] = _0x294eff()), b("div", _0x1a00b8, [_0x232e32(_0x2c4b02, {
        "current-page": _0x4482b6.value,
        "onUpdate:currentPage": _0x5ef3eb[2] || (_0x5ef3eb[2] = _0x141d70 => _0x4482b6.value = _0x141d70),
        "page-size": _0x1a9822.value,
        total: _0x1a9bc5.value.length,
        layout: "prev, pager, next",
        background: "",
        small: ""
      }, null, 8, ["current-page", "page-size", "total"]), _0x5ef3eb[18] || (_0x5ef3eb[18] = _0x294eff()), b("div", _0x28ab79, "\r\n          第 " + _0x46dc30(_0x4482b6.value) + " 页 / 共 " + _0x46dc30(_0x2a7c21.value) + " 页\r\n        ", 1)])]), _0x5ef3eb[28] || (_0x5ef3eb[28] = _0x294eff()), _0x1ec427.value ? (_0xd79bff(), _0x463345("div", {
        key: 0,
        class: "add-server-dialog-overlay",
        onClick: _0x5ef3eb[5] || (_0x5ef3eb[5] = _0x3d5124(_0x2531b4 => _0x1ec427.value = false, ["self"]))
      }, [b("div", _0x575b8a, [_0x5ef3eb[25] || (_0x5ef3eb[25] = b("h3", {
        class: "add-server-title"
      }, "添加新服", -1)), _0x5ef3eb[26] || (_0x5ef3eb[26] = _0x294eff()), b("div", _0x4ca43c, [_0x232e32(_0x4e2612, {
        modelValue: _0x4621f9.value,
        "onUpdate:modelValue": _0x5ef3eb[3] || (_0x5ef3eb[3] = _0x2e71fe => _0x4621f9.value = _0x2e71fe),
        placeholder: "输入服务器ID范围 (如: 1-100)",
        clearable: "",
        class: "server-id-input"
      }, null, 8, ["modelValue"])]), _0x5ef3eb[27] || (_0x5ef3eb[27] = _0x294eff()), b("div", _0x48dcb7, [_0x232e32(_0x431735, {
        class: "add-server-btn cancel-btn",
        onClick: _0x5ef3eb[4] || (_0x5ef3eb[4] = _0x11bddd => _0x1ec427.value = false)
      }, {
        default: _0x25252c(() => [...(_0x5ef3eb[22] || (_0x5ef3eb[22] = [_0x294eff("\r\n            取消\r\n          ", -1)]))]),
        _: 1
      }), _0x5ef3eb[24] || (_0x5ef3eb[24] = _0x294eff()), _0x232e32(_0x431735, {
        class: "add-server-btn confirm-btn",
        onClick: _0x2b063b,
        disabled: !_0x3f4e5c.value
      }, {
        default: _0x25252c(() => [...(_0x5ef3eb[23] || (_0x5ef3eb[23] = [_0x294eff("\r\n            确定\r\n          ", -1)]))]),
        _: 1
      }, 8, ["disabled"])])])])) : _0x4c3da8("", true)])) : _0x4c3da8("", true);
    };
  }
}, [["__scopeId", "data-v-fc6d0053"]]);
const _0x2f6b9a = {
  class: "account-manager"
};
const _0x3c7294 = {
  class: "dialog-container"
};
const _0x182f21 = {
  class: "dialog-header"
};
const _0x3a1b34 = {
  key: 0,
  class: "login-methods"
};
const _0x155a9d = {
  class: "method-icon"
};
const _0xed8f64 = {
  class: "method-icon"
};
const _0x4c23e0 = {
  key: 1,
  class: "wechat-login-container"
};
const _0x5df5b8 = {
  key: 0,
  class: "loading-container"
};
const _0x556802 = {
  key: 1,
  class: "qr-code-container"
};
const _0x14c303 = ["src"];
const _0x57841e = {
  class: "login-status"
};
const _0x5364cd = {
  key: 0,
  class: "status-waiting"
};
const _0x506e90 = {
  key: 1,
  class: "status-success"
};
const _0x2f1c7c = {
  key: 2,
  class: "status-expired"
};
const _0x29f559 = {
  class: "action-buttons"
};
const _0x7ddad8 = {
  key: 2,
  class: "sms-login-container"
};
const _0x33f663 = {
  class: "sms-form"
};
const _0x100f8e = {
  class: "form-group"
};
const _0x462757 = {
  key: 0,
  class: "error-text"
};
const _0x2a7b21 = {
  class: "form-group"
};
const _0xa24a3b = {
  class: "verification-code-input"
};
const _0x3c6f4a = {
  class: "action-buttons"
};
const _0x2ca4dd = _0x486b60({
  __name: "index",
  emits: ["update:visible", "confirm"],
  setup(_0x34d1ac, {
    emit: _0x4e52c4
  }) {
    const _0xe3796b = _0x4e52c4;
    const _0x3b30a0 = r(false);
    const _0x5c5a48 = r(null);
    const _0x5f436c = r("");
    const _0x1a8a19 = r("waiting");
    const _0x2c0ca4 = r(null);
    const _0x475fa8 = r({
      name: "",
      content: "",
      ext: {
        info: {
          avatar: "",
          name: ""
        }
      }
    });
    const _0x336354 = r(false);
    const _0x4a5c61 = r("");
    const _0x1a4120 = r("");
    const _0x537a09 = r("");
    const _0x146515 = r(0);
    let _0x2c73fe = null;
    const _0x3cd06d = () => {
      _0x3b30a0.value = true;
      _0x5c5a48.value = null;
      _0x307d14();
    };
    const _0xbad12c = () => {
      _0x3b30a0.value = false;
      _0xe3796b("update:visible", false);
      _0x3db216();
      _0x307d14();
      _0xe3796b("confirm");
    };
    const _0x18abd5 = async _0x416ecf => {
      _0x5c5a48.value = _0x416ecf;
      "wechat" === _0x416ecf && (await _0x70c4f());
    };
    const _0x27a844 = new _0x4a521e();
    const _0x70c4f = async () => {
      _0x1a8a19.value = "waiting";
      const _0x41d059 = new _0x17fefb();
      _0x5f436c.value = await _0x41d059.fetchQRCode();
      _0x1a8a19.value = "waiting";
      _0x41d059.login().then(_0x593e17 => {
        _0x41d059.getCombUser(_0x593e17).then(_0xe6e68d => {
          _0x475fa8.value.name = _0xe6e68d.combSdkInfo.name;
          _0x475fa8.value.content = {
            deviceUniquId: "DID-12f90e14-dbe1-4eb0-819b-35b66b0d805d",
            info: JSON.stringify(_0xe6e68d.combUser),
            platform: "hortor",
            platformExt: "mix",
            scene: 0
          };
          _0x1a8a19.value = "success";
          _0x336354.value = true;
        });
      }).catch(_0x325b3b => {
        _0x27a844.info(_0x325b3b);
        _0x1a8a19.value = "expired";
      });
    };
    const _0x4214a1 = async () => {
      _0x5f436c.value = "";
      await _0x70c4f();
    };
    const _0x1823e0 = () => {
      _0x5c5a48.value = null;
      _0x3db216();
      _0x307d14();
    };
    const _0x3db216 = () => {
      _0x5f436c.value = "";
      _0x1a8a19.value = "waiting";
      _0x2c0ca4.value = null;
    };
    const _0x2a9d45 = () => {
      const _0x3658ce = _0x4a5c61.value;
      _0x3658ce ? /^1[3-9]\d{9}$/.test(_0x3658ce) ? _0x537a09.value = "" : _0x537a09.value = "请输入正确的手机号码" : _0x537a09.value = "";
    };
    const _0x4ebc8e = _0x977ef7(() => /^1[3-9]\d{9}$/.test(_0x4a5c61.value) && !_0x537a09.value);
    const _0x15f74f = _0x977ef7(() => _0x4ebc8e.value && 6 === _0x1a4120.value.length);
    const _0x30e07a = async () => {
      if (_0x4ebc8e.value) {
        try {
          const _0x3ba7dc = new _0x17fefb();
          await _0x3ba7dc.sendPhoneVerificationCode(_0x4a5c61.value);
          _0x10be74.success("验证码已发送");
          _0x146515.value = 60;
          _0x2c73fe = setInterval(() => {
            _0x146515.value--;
            _0x146515.value <= 0 && clearInterval(_0x2c73fe);
          }, 1000);
        } catch (_0x7ec7ad) {
          _0x10be74.error("发送验证码失败: " + _0x7ec7ad.message);
        }
      }
    };
    const _0x1f1a5f = async () => {
      if (_0x15f74f.value) {
        try {
          const _0xf134f3 = new _0x17fefb();
          await _0xf134f3.getSmsUser(_0x4a5c61.value, _0x1a4120.value).then(_0x44ac15 => {
            _0x475fa8.value.name = _0x44ac15.combSdkInfo.name;
            _0x475fa8.value.content = {
              deviceUniquId: "DID-12f90e14-dbe1-4eb0-819b-35b66b0d805d",
              info: JSON.stringify(_0x44ac15.combUser),
              platform: "hortor",
              platformExt: "mix",
              scene: 0
            };
            _0x1a8a19.value = "success";
            _0x336354.value = true;
          });
        } catch (_0x2eeaf1) {
          _0x10be74.error("登录失败: " + _0x2eeaf1.message);
        }
      }
    };
    const _0x307d14 = () => {
      _0x4a5c61.value = "";
      _0x1a4120.value = "";
      _0x537a09.value = "";
      _0x146515.value = 0;
      _0x2c73fe && (clearInterval(_0x2c73fe), _0x2c73fe = null);
    };
    _0x20853b(() => {
      _0x2c73fe && clearInterval(_0x2c73fe);
    });
    return (_0x88e2b3, _0xce7bfd) => {
      const _0x974077 = _0x729244("el-icon");
      const _0x5ae2b2 = _0x729244("el-input");
      const _0x23467b = _0x729244("el-button");
      _0xd79bff();
      return _0x463345("div", _0x2f6b9a, [b("button", {
        onClick: _0x3cd06d,
        class: "add-account-btn"
      }, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x4828f3))]),
        _: 1
      }), _0xce7bfd[5] || (_0xce7bfd[5] = _0x294eff()), _0xce7bfd[6] || (_0xce7bfd[6] = b("span", null, null, -1))]), _0xce7bfd[45] || (_0xce7bfd[45] = _0x294eff()), _0x3b30a0.value ? (_0xd79bff(), _0x463345("div", {
        key: 0,
        class: "dialog-overlay",
        onClick: _0x3d5124(_0xbad12c, ["self"])
      }, [b("div", _0x3c7294, [b("div", _0x182f21, [_0xce7bfd[7] || (_0xce7bfd[7] = b("h3", null, "添加新账号", -1)), _0xce7bfd[8] || (_0xce7bfd[8] = _0x294eff()), _0x232e32(_0x974077, {
        class: "close-icon",
        onClick: _0xbad12c
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x538bb7))]),
        _: 1
      })]), _0xce7bfd[42] || (_0xce7bfd[42] = _0x294eff()), _0x5c5a48.value ? _0x4c3da8("", true) : (_0xd79bff(), _0x463345("div", _0x3a1b34, [b("div", {
        class: "method-card",
        onClick: _0xce7bfd[0] || (_0xce7bfd[0] = _0x1ba616 => _0x18abd5("wechat"))
      }, [b("div", _0x155a9d, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x2ec24c))]),
        _: 1
      })]), _0xce7bfd[9] || (_0xce7bfd[9] = _0x294eff()), _0xce7bfd[10] || (_0xce7bfd[10] = b("div", {
        class: "method-name"
      }, "微信扫码", -1))]), _0xce7bfd[13] || (_0xce7bfd[13] = _0x294eff()), b("div", {
        class: "method-card",
        onClick: _0xce7bfd[1] || (_0xce7bfd[1] = _0x73f73f => _0x18abd5("sms"))
      }, [b("div", _0xed8f64, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x373831))]),
        _: 1
      })]), _0xce7bfd[11] || (_0xce7bfd[11] = _0x294eff()), _0xce7bfd[12] || (_0xce7bfd[12] = b("div", {
        class: "method-name"
      }, "短信登录", -1))])])), _0xce7bfd[43] || (_0xce7bfd[43] = _0x294eff()), "wechat" === _0x5c5a48.value ? (_0xd79bff(), _0x463345("div", _0x4c23e0, [_0x5f436c.value ? (_0xd79bff(), _0x463345("div", _0x556802, [b("img", {
        src: _0x5f436c.value,
        alt: "微信登录二维码",
        class: "qr-code-image"
      }, null, 8, _0x14c303), _0xce7bfd[27] || (_0xce7bfd[27] = _0x294eff()), _0xce7bfd[28] || (_0xce7bfd[28] = b("p", {
        class: "scan-tip"
      }, "请使用微信扫描二维码登录", -1)), _0xce7bfd[29] || (_0xce7bfd[29] = _0x294eff()), b("div", _0x57841e, ["waiting" === _0x1a8a19.value ? (_0xd79bff(), _0x463345("div", _0x5364cd, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x45e923))]),
        _: 1
      }), _0xce7bfd[16] || (_0xce7bfd[16] = _0x294eff()), _0xce7bfd[17] || (_0xce7bfd[17] = b("span", null, "等待扫码...", -1))])) : _0x4c3da8("", true), _0xce7bfd[22] || (_0xce7bfd[22] = _0x294eff()), "success" === _0x1a8a19.value ? (_0xd79bff(), _0x463345("div", _0x506e90, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x12c49a))]),
        _: 1
      }), _0xce7bfd[18] || (_0xce7bfd[18] = _0x294eff()), _0xce7bfd[19] || (_0xce7bfd[19] = b("span", null, "登录成功！", -1))])) : _0x4c3da8("", true), _0xce7bfd[23] || (_0xce7bfd[23] = _0x294eff()), "expired" === _0x1a8a19.value ? (_0xd79bff(), _0x463345("div", _0x2f1c7c, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x45ec50))]),
        _: 1
      }), _0xce7bfd[20] || (_0xce7bfd[20] = _0x294eff()), _0xce7bfd[21] || (_0xce7bfd[21] = b("span", null, "二维码已过期，请刷新重试", -1))])) : _0x4c3da8("", true)]), _0xce7bfd[30] || (_0xce7bfd[30] = _0x294eff()), b("div", _0x29f559, [b("button", {
        onClick: _0x4214a1,
        class: "refresh-btn"
      }, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x207085))]),
        _: 1
      }), _0xce7bfd[24] || (_0xce7bfd[24] = _0x294eff("\r\n                刷新二维码\r\n              ", -1))]), _0xce7bfd[26] || (_0xce7bfd[26] = _0x294eff()), b("button", {
        onClick: _0x1823e0,
        class: "back-btn"
      }, [_0x232e32(_0x974077, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x53d6bf))]),
        _: 1
      }), _0xce7bfd[25] || (_0xce7bfd[25] = _0x294eff("\r\n                返回\r\n              ", -1))])])])) : (_0xd79bff(), _0x463345("div", _0x5df5b8, [_0x232e32(_0x974077, {
        class: "loading-icon"
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x299a9f))]),
        _: 1
      }), _0xce7bfd[14] || (_0xce7bfd[14] = _0x294eff()), _0xce7bfd[15] || (_0xce7bfd[15] = b("p", null, "正在生成登录二维码...", -1))]))])) : _0x4c3da8("", true), _0xce7bfd[44] || (_0xce7bfd[44] = _0x294eff()), "sms" === _0x5c5a48.value ? (_0xd79bff(), _0x463345("div", _0x7ddad8, [b("div", _0x33f663, [b("div", _0x100f8e, [_0xce7bfd[31] || (_0xce7bfd[31] = b("label", null, "手机号码", -1)), _0xce7bfd[32] || (_0xce7bfd[32] = _0x294eff()), _0x232e32(_0x5ae2b2, {
        modelValue: _0x4a5c61.value,
        "onUpdate:modelValue": _0xce7bfd[2] || (_0xce7bfd[2] = _0x18fbf2 => _0x4a5c61.value = _0x18fbf2),
        placeholder: "请输入手机号码",
        maxlength: 11,
        onInput: _0x2a9d45
      }, null, 8, ["modelValue"]), _0xce7bfd[33] || (_0xce7bfd[33] = _0x294eff()), _0x537a09.value ? (_0xd79bff(), _0x463345("div", _0x462757, _0x46dc30(_0x537a09.value), 1)) : _0x4c3da8("", true)]), _0xce7bfd[40] || (_0xce7bfd[40] = _0x294eff()), b("div", _0x2a7b21, [_0xce7bfd[35] || (_0xce7bfd[35] = b("label", null, "验证码", -1)), _0xce7bfd[36] || (_0xce7bfd[36] = _0x294eff()), b("div", _0xa24a3b, [_0x232e32(_0x5ae2b2, {
        modelValue: _0x1a4120.value,
        "onUpdate:modelValue": _0xce7bfd[3] || (_0xce7bfd[3] = _0x1646b9 => _0x1a4120.value = _0x1646b9),
        placeholder: "请输入验证码",
        maxlength: 6
      }, null, 8, ["modelValue"]), _0xce7bfd[34] || (_0xce7bfd[34] = _0x294eff()), _0x232e32(_0x23467b, {
        disabled: !_0x4ebc8e.value || _0x146515.value > 0,
        onClick: _0x30e07a,
        class: "send-code-btn"
      }, {
        default: _0x25252c(() => [_0x294eff(_0x46dc30(_0x146515.value > 0 ? _0x146515.value + "秒后重新获取" : "获取验证码"), 1)]),
        _: 1
      }, 8, ["disabled"])])]), _0xce7bfd[41] || (_0xce7bfd[41] = _0x294eff()), b("div", _0x3c6f4a, [_0x232e32(_0x23467b, {
        type: "primary",
        disabled: !_0x15f74f.value,
        onClick: _0x1f1a5f,
        class: "login-btn"
      }, {
        default: _0x25252c(() => [...(_0xce7bfd[37] || (_0xce7bfd[37] = [_0x294eff("\r\n                登录\r\n              ", -1)]))]),
        _: 1
      }, 8, ["disabled"]), _0xce7bfd[39] || (_0xce7bfd[39] = _0x294eff()), _0x232e32(_0x23467b, {
        onClick: _0x1823e0,
        class: "back-btn"
      }, {
        default: _0x25252c(() => [...(_0xce7bfd[38] || (_0xce7bfd[38] = [_0x294eff("\r\n                返回\r\n              ", -1)]))]),
        _: 1
      })])])])) : _0x4c3da8("", true)])])) : _0x4c3da8("", true), _0xce7bfd[46] || (_0xce7bfd[46] = _0x294eff()), _0x336354.value ? (_0xd79bff(), _0x52d5ab(_0x2afcd7, {
        key: 1,
        visible: _0x336354.value,
        "onUpdate:visible": _0xce7bfd[4] || (_0xce7bfd[4] = _0x347ae8 => _0x336354.value = _0x347ae8),
        file: _0x475fa8.value,
        onConfirm: _0xbad12c
      }, null, 8, ["visible", "file"])) : _0x4c3da8("", true)]);
    };
  }
}, [["__scopeId", "data-v-74607304"]]);
const _0x4f375a = {
  key: 0,
  class: "multi-select-notice"
};
const _0x1b64e3 = {
  key: 1,
  class: "multi-select-notice"
};
const _0x2f56cc = {
  class: "bin-manager"
};
const _0xc75dd1 = {
  class: "notification-content"
};
const _0x3b9ac7 = {
  class: "top-bar"
};
const _0x2d11de = {
  class: "search-container"
};
const _0x570c3a = {
  class: "action-bar"
};
const _0x44f4fa = ["onClick", "title"];
const _0x3e4265 = {
  class: "grid-container"
};
const _0x373e17 = ["onClick", "onTouchstart", "onTouchend", "data-file-id"];
const _0x5cf161 = {
  class: "avatar-name-container"
};
const _0x2a7853 = ["src"];
const _0x3ceda8 = {
  class: "ext-name"
};
const _0x2da9f4 = {
  class: "serve-name"
};
const _0xc1a641 = ["onClick"];
const _0x5ec1ec = ["checked"];
const _0x31a401 = {
  key: 0,
  class: "empty-state"
};
const _0xda1982 = {
  class: "preview-header"
};
const _0x2c8fa4 = {
  class: "preview-title"
};
const _0x1d195f = {
  key: 0
};
const _0x4cef68 = {
  key: 1,
  style: {
    color: "red"
  }
};
const _0x2d85f4 = {
  class: "preview-actions"
};
const _0xe09294 = {
  class: "preview-content"
};
const _0x390fe7 = {
  key: 1,
  class: "preview-nav"
};
const _0x3eb29b = ["disabled"];
const _0x428d39 = ["disabled"];
const _0x220ed2 = {
  key: 3,
  class: "confirm-dialog"
};
const _0x2bffb3 = {
  class: "dialog-content"
};
const _0x3b565a = {
  key: 4,
  class: "rename-dialog"
};
const _0x5826fc = {
  class: "dialog-content"
};
const _0x378203 = {
  class: "dialog-buttons"
};
const _0x2daba8 = _0x486b60({
  __name: "index",
  setup(_0x37e4af) {
    const _0x7266f4 = _0x2e2ce0("fileManager");
    const _0x14480e = r(false);
    const _0x3daff6 = r("");
    const _0x28546c = r(null);
    const _0x19016b = r(-1);
    const _0x275b50 = r(null);
    const _0x54354f = new _0x4a521e();
    const _0x5b1d50 = r({
      showNotification: false,
      notificationMessage: "",
      runSize: 1,
      files: [],
      file: {
        name: ""
      },
      runTask: [],
      selectedFiles: new Set(),
      selectedFileIds: [],
      time: 21600,
      special: 21787,
      countdownTime: 21600,
      label: ""
    });
    const _0x3acf50 = [{
      id: "upload",
      icon: _0x42065c,
      title: "上传文件",
      handler: () => {
        _0x275b50.value.click();
      },
      visible: () => 0 === _0x5b1d50.value.selectedFiles.size
    }, {
      id: "download",
      icon: _0xfe6191,
      title: "下载选中",
      handler: () => {
        _0x14480e.value = true;
        _0x3daff6.value = "确定要下载选中的 " + _0x5b1d50.value.selectedFiles.size + " 个文件吗？";
        _0x28546c.value = _0x5d21f4;
      },
      visible: () => _0x5b1d50.value.selectedFiles.size > 0
    }, {
      id: "toggleSelectAll",
      icon: _0x292fee,
      title: "全选/取消",
      handler: () => _0xc9f4d2(),
      visible: () => true
    }, {
      id: "delete",
      icon: _0x146524,
      title: "删除选中",
      handler: () => _0x2e9f7e(),
      visible: () => _0x5b1d50.value.selectedFiles.size > 0
    }];
    const _0x141ab7 = r("");
    const _0x21980d = _0x977ef7(() => {
      if (!_0x141ab7.value) {
        return _0x5b1d50.value.files;
      }
      const _0x581772 = _0x141ab7.value.toLowerCase();
      return _0x5b1d50.value.files.filter(_0x428ae0 => {
        var _0x170f2b;
        var _0xb8b862;
        return _0x428ae0.name.includes(_0x581772) || (null == (_0x170f2b = _0x428ae0.formattedServerId) ? undefined : _0x170f2b.includes(_0x581772)) || (null == (_0xb8b862 = _0x428ae0.serverId) ? undefined : _0xb8b862.includes(_0x581772));
      });
    });
    const _0x218ca2 = _0x977ef7(() => _0x5b1d50.value.files.findIndex(_0x2ae23b => _0x2ae23b.id === _0x5b1d50.value.file.id) > 0);
    const _0x202296 = _0x977ef7(() => _0x5b1d50.value.files.findIndex(_0x1fd475 => _0x1fd475.id === _0x5b1d50.value.file.id) < _0x5b1d50.value.files.length - 1);
    const _0x2dfb39 = r(null);
    const _0x468a3b = r(null);
    const _0x10537a = r(false);
    const _0x4597a2 = r(null);
    const _0x237f1b = r(0);
    const _0x39ffb0 = r(0);
    const _0x3b4d28 = r(false);
    const _0x2eb707 = r(false);
    const _0x5543b8 = r("");
    const _0x2b50fe = r(null);
    const _0x371cbf = r(false);
    const _0x295ee1 = _0x1309f9().$state;
    _0xb8db0e(async () => {
      await _0x7266f4.init();
      await _0x1cd3ef();
    });
    const _0x173b98 = () => {
      _0x2dfb39.value && (clearInterval(_0x2dfb39.value), _0x2dfb39.value = null);
      _0x5b1d50.value.runTask.value = [];
      _0x5b1d50.value.label = "";
      _0x5b1d50.value.showNotification = false;
    };
    const _0x31c93d = _0x50be41 => _0x50be41.split("/").pop().split("\\").pop().split(".bin")[0];
    const _0x1cd3ef = async () => {
      const _0xc9bdb4 = await _0x7266f4.getAllFiles();
      const _0xcabc38 = {};
      for (let _0x6cda18 = 0; _0x6cda18 < _0xc9bdb4.length; _0x6cda18++) {
        const _0xba01d2 = _0xc9bdb4[_0x6cda18];
        const _0x3d31ef = _0xcabc38[_0xba01d2.id + "_0"];
        _0x3d31ef && (_0xc9bdb4[_0x6cda18] = _0x52e981(_0x52e981({}, _0xba01d2), _0x3d31ef));
      }
      _0x5b1d50.value.files = _0xc9bdb4;
    };
    const _0x2799be = async _0x136df7 => {
      const _0x2d5aa9 = _0x136df7.target.files;
      if (_0x2d5aa9.length) {
        try {
          for (let _0x3ad85e = 0; _0x3ad85e < _0x2d5aa9.length; _0x3ad85e++) {
            const _0x2ea9c8 = _0x2d5aa9[_0x3ad85e];
            _0x2ea9c8.name.endsWith(".zip") ? await _0x7266f4.extractAndSaveZip(_0x2ea9c8) : _0x2ea9c8.name.endsWith(".bin") && (await _0x7266f4.saveFile(_0x2ea9c8));
          }
          await _0x1cd3ef();
          _0x141ab7.value = "";
        } catch (_0x409b88) {} finally {
          _0x136df7.target.value = "";
        }
      }
    };
    const _0xc9f4d2 = () => {
      _0x5b1d50.value.selectedFiles.size === _0x5b1d50.value.files.length ? _0x5b1d50.value.selectedFiles.clear() : _0x5b1d50.value.files.forEach(_0x4ca34f => _0x5b1d50.value.selectedFiles.add(_0x4ca34f.id));
      _0x15d161();
    };
    const _0x73d9fc = async _0x37b1a7 => {
      await _0x7266f4.cacheRoleToken(_0x37b1a7);
      _0x5b1d50.value.runTask = [_0x37b1a7];
      _0x5b1d50.value.file = _0x37b1a7;
    };
    const _0x459534 = () => {
      var _0x24f6f3;
      var _0xfc8627;
      _0x295ee1.autoTaskTime = null;
      _0x19016b.value = -1;
      _0x5b1d50.value.runTask.value = [];
      (null == (_0xfc8627 = null == (_0x24f6f3 = _0x5b1d50.value.file.ext) ? undefined : _0x24f6f3.info) ? undefined : _0xfc8627.update) && (_0x5b1d50.value.file.ext.info.update = undefined, _0x7266f4.updateFilesExtInfo([_0x5b1d50.value.file.id], _0x5b1d50.value.file.ext));
      _0x15d161();
    };
    const _0x35f022 = async () => {
      if (!_0x5b1d50.value.file.id || !_0x218ca2.value) {
        return;
      }
      const _0x431156 = _0x5b1d50.value.files.findIndex(_0x5994ca => _0x5994ca.id === _0x5b1d50.value.file.id);
      if (_0x431156 > 0) {
        const _0x5fc75d = _0x5b1d50.value.files[_0x431156 - 1];
        0 === _0x19016b.value && (await _0x73d9fc(_0x5fc75d));
      }
    };
    const _0x5f07a8 = async () => {
      if (!_0x5b1d50.value.file.id || !_0x202296.value) {
        return;
      }
      const _0x2866e5 = _0x5b1d50.value.files.findIndex(_0x8fc81a => _0x8fc81a.id === _0x5b1d50.value.file.id);
      if (_0x2866e5 < _0x5b1d50.value.files.length - 1) {
        const _0x858fd0 = _0x5b1d50.value.files[_0x2866e5 + 1];
        _0x5b1d50.value.files[_0x2866e5 + 2] && _0x7266f4.cacheRoleToken(_0x5b1d50.value.files[_0x2866e5 + 2]).then();
        0 === _0x19016b.value && (await _0x73d9fc(_0x858fd0));
      }
    };
    const _0x5d21f4 = async () => {
      try {
        const _0x3bcd13 = _0x5b1d50.value.files.filter(_0x2bd5dc => _0x5b1d50.value.selectedFiles.has(_0x2bd5dc.id));
        if (1 === _0x3bcd13.length) {
          const _0x2d4c91 = _0x3bcd13[0];
          const _0x141775 = new Blob([_0x57301b(_0x2d4c91.content)], {
            type: "application/octet-stream"
          });
          if ("web" === _0x183f79.getPlatform()) {
            _0x31cc67.saveAs(_0x141775, "bin_files.bin");
          } else {
            if ("android" === _0x183f79.getPlatform()) {
              const _0x18de2e = new FileReader();
              _0x18de2e.readAsDataURL(_0x57301b(_0x2d4c91.content));
              _0x18de2e.onload = async function () {
                const _0x40ff7f = _0x18de2e.result.split(",")[1];
                const _0x356f1d = await _0x472e6c.writeFile({
                  path: "备份文件.zip",
                  data: _0x40ff7f,
                  directory: _0x1fe5d1.Documents,
                  recursive: true
                });
                _0x54354f.success("保存到：" + _0x356f1d.uri);
              };
            }
          }
        } else {
          const _0x572872 = new _0x47cac8();
          _0x3bcd13.forEach(_0xe07e46 => {
            _0x572872.file(_0xe07e46.name + (_0xe07e46.formattedServerId || "") + ".bin", _0x57301b(_0xe07e46.content));
          });
          const _0x4f0686 = await _0x572872.generateAsync({
            type: "blob"
          });
          const _0xcc1b54 = new Blob([_0x4f0686], {
            type: "application/octet-stream"
          });
          if ("web" === _0x183f79.getPlatform()) {
            _0x31cc67.saveAs(_0xcc1b54, "bin_files.zip");
          } else {
            if ("android" === _0x183f79.getPlatform()) {
              const _0x542b0c = new FileReader();
              _0x542b0c.readAsDataURL(_0x4f0686);
              _0x542b0c.onload = async function () {
                const _0x11ea36 = _0x542b0c.result.split(",")[1];
                const _0x4e9fe4 = await _0x472e6c.writeFile({
                  path: "备份文件.zip",
                  data: _0x11ea36,
                  directory: _0x1fe5d1.Documents,
                  recursive: true
                });
                _0x54354f.success("保存到：" + _0x4e9fe4.uri);
              };
            }
          }
        }
      } catch (_0x18bfbd) {
        alert("文件下载失败");
      } finally {
        _0x14480e.value = false;
      }
    };
    const _0x2e9f7e = () => {
      _0x14480e.value = true;
      _0x3daff6.value = "确定要删除选中的 " + _0x5b1d50.value.selectedFiles.size + " 个文件吗？";
      _0x28546c.value = _0x5c878d;
    };
    const _0x5c878d = async () => {
      try {
        await _0x7266f4.deleteFiles([..._0x5b1d50.value.selectedFiles]);
        await _0x1cd3ef();
        _0x5b1d50.value.selectedFiles.clear();
        _0x15d161();
      } catch (_0x4ade4a) {
        _0x54354f.error("文件删除失败");
      } finally {
        _0x14480e.value = false;
      }
    };
    const _0x211871 = () => {
      _0x28546c.value && _0x28546c.value();
      _0x14480e.value = false;
    };
    const _0x22a060 = () => {
      _0x14480e.value = false;
      _0x28546c.value = null;
    };
    const _0x560d87 = async () => {
      try {
        await _0x7266f4.updateFilesExtInfo(_0x5b1d50.value.selectedFileIds, _0x5b1d50.value.file.ext);
        _0x54354f.success("成功更新 " + _0x5b1d50.value.selectedFileIds.length + " 个文件的设置");
        _0x19016b.value = -1;
        _0x5b1d50.value.selectedFiles.clear();
        await _0x1cd3ef();
      } catch (_0x10b3db) {
        _0x54354f.error("保存设置失败");
      }
    };
    const _0x430fbd = () => {
      _0x5543b8.value = _0x31c93d(_0x5b1d50.value.file.name);
      _0x2eb707.value = true;
    };
    const _0x24485f = async () => {
      if (_0x5543b8.value.trim()) {
        try {
          const _0x2a3744 = _0x5543b8.value.trim() + ".bin";
          await _0x7266f4.renameFile(_0x5b1d50.value.file.id, _0x2a3744);
          _0x5b1d50.value.file = _0x5b1d50.value.files.find(_0x3a5546 => _0x3a5546.id === _0x5b1d50.value.file.id);
          _0x2eb707.value = false;
          _0x54354f.success("文件名修改成功");
        } catch (_0x1f4f57) {
          _0x54354f.error("文件名修改失败");
        }
      } else {
        _0x54354f.warn("文件名不能为空");
      }
    };
    const _0x2c4120 = () => {
      document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen().then(() => {
        _0x371cbf.value = false;
        _0x2b50fe.value.classList.remove("fullscreen");
      }) : _0x2b50fe.value.requestFullscreen && _0x2b50fe.value.requestFullscreen().then(() => {
        _0x371cbf.value = true;
        _0x2b50fe.value.classList.add("fullscreen");
      }).catch(_0x68c255 => {});
    };
    const _0x2050ef = r(false);
    const _0x4b017a = r(new Set());
    const _0x2c4f88 = r(-1);
    const _0xdbdf1 = _0x21fde9 => {
      if (!_0x237f1b.value || !_0x39ffb0.value) {
        return;
      }
      const _0x827586 = _0x21fde9.touches[0];
      const _0x54dafd = Math.abs(_0x827586.clientX - _0x237f1b.value);
      const _0xf29c01 = Math.abs(_0x827586.clientY - _0x39ffb0.value);
      if ((_0x54dafd > 5 || _0xf29c01 > 5) && (_0x3b4d28.value = true, clearTimeout(_0x468a3b.value), _0x2050ef.value)) {
        const _0x3b063c = document.elementsFromPoint(_0x827586.clientX, _0x827586.clientY).find(_0x154852 => _0x154852.classList.contains("grid-item"));
        if (_0x3b063c) {
          const _0x28b219 = _0x3b063c.dataset.fileId;
          _0x4597a2.value = _0x28b219;
          _0x4923f5(_0x2c4f88.value, _0x5b1d50.value.files.findIndex(_0x1c1d89 => _0x1c1d89.id === _0x28b219));
        }
      }
    };
    const _0x19627e = (_0x43aa0e, _0x567843 = false) => {
      if (_0x567843) {
        _0x5b1d50.value.selectedFiles.add(_0x43aa0e.id);
        return void _0x4b017a.value.add(_0x43aa0e.id);
      }
      _0x5b1d50.value.selectedFiles.has(_0x43aa0e.id) ? (_0x5b1d50.value.selectedFiles.delete(_0x43aa0e.id), _0x4b017a.value.delete(_0x43aa0e.id)) : (_0x5b1d50.value.selectedFiles.add(_0x43aa0e.id), _0x4b017a.value.add(_0x43aa0e.id));
      _0x2050ef.value && 0 === _0x5b1d50.value.selectedFiles.size && (_0x2050ef.value = false);
    };
    const _0x4923f5 = (_0x2fbf08, _0x2af4ea) => {
      if (-1 === _0x2fbf08 || -1 === _0x2af4ea) {
        return;
      }
      const _0x442727 = Math.min(_0x2fbf08, _0x2af4ea);
      const _0x5b5601 = Math.max(_0x2fbf08, _0x2af4ea);
      _0x4b017a.value.clear();
      for (let _0x44cf2c = _0x442727; _0x44cf2c <= _0x5b5601; _0x44cf2c++) {
        const _0x1fae1e = _0x5b1d50.value.files[_0x44cf2c].id;
        _0x5b1d50.value.selectedFiles.add(_0x1fae1e);
        _0x4b017a.value.add(_0x1fae1e);
      }
    };
    const _0x15d161 = () => {
      _0x2050ef.value = false;
      _0x4b017a.value.clear();
      _0x2c4f88.value = -1;
    };
    const _0x17d0a = r(false);
    const _0x21f026 = () => {
      _0x17d0a.value = true;
    };
    const _0x44e48e = () => {
      _0x19016b.value = 3;
    };
    return (_0x2e4be2, _0x10035a) => {
      const _0x823455 = _0x729244("el-icon");
      const _0x348aeb = _0x729244("el-input");
      const _0x115f0c = _0x729244("Plus");
      const _0x379846 = _0x729244("el-button");
      _0xd79bff();
      return _0x463345(_0x5a8a53, null, [_0x2050ef.value ? (_0xd79bff(), _0x463345("div", _0x4f375a, "\r\n    多选模式中 (" + _0x46dc30(_0x5b1d50.value.selectedFiles.size) + "个选中)\r\n  ", 1)) : _0x5b1d50.value.selectedFiles.size > 0 ? (_0xd79bff(), _0x463345("div", _0x1b64e3, _0x46dc30(_0x5b1d50.value.selectedFiles.size) + "个选中\r\n  ", 1)) : _0x4c3da8("", true), _0x10035a[37] || (_0x10035a[37] = _0x294eff()), b("div", _0x2f56cc, [_0x5b1d50.value.showNotification ? (_0xd79bff(), _0x463345("div", {
        key: 0,
        class: "notification-overlay",
        onClick: _0x173b98
      }, [b("div", _0xc75dd1, _0x46dc30(_0x5b1d50.value.notificationMessage), 1)])) : _0x4c3da8("", true), _0x10035a[31] || (_0x10035a[31] = _0x294eff()), b("div", _0x3b9ac7, [b("div", _0x2d11de, [_0x232e32(_0x348aeb, {
        modelValue: _0x141ab7.value,
        "onUpdate:modelValue": _0x10035a[0] || (_0x10035a[0] = _0x51b55c => _0x141ab7.value = _0x51b55c),
        placeholder: "搜索文件...接代挂加微信【jcw306】",
        clearable: "",
        class: "search-input"
      }, {
        prefix: _0x25252c(() => [_0x232e32(_0x823455, null, {
          default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x43dc70))]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"])]), _0x10035a[6] || (_0x10035a[6] = _0x294eff()), b("div", _0x570c3a, [b("input", {
        type: "file",
        id: "file-upload",
        ref_key: "fileInput",
        ref: _0x275b50,
        onChange: _0x2799be,
        accept: "*/*",
        multiple: "",
        style: {
          display: "none"
        }
      }, null, 544), _0x10035a[4] || (_0x10035a[4] = _0x294eff()), (_0xd79bff(true), _0x463345(_0x5a8a53, {
        key: 0
      }, _0xfd9392(_0x3acf50.filter(_0x386f6d => _0x386f6d.visible()), (_0x22966d, _0x72b69f) => (_0xd79bff(), _0x463345("button", {
        key: _0x72b69f,
        onClick: _0x22966d.handler,
        class: _0x507b0e(["action-btn", _0x22966d.class]),
        title: _0x22966d.title
      }, [_0x232e32(_0x823455, null, {
        default: _0x25252c(() => [(_0xd79bff(), _0x52d5ab(_0x1699a7(_0x22966d.icon)))]),
        _: 2
      }, 1024)], 10, _0x44f4fa))), 128)), _0x10035a[5] || (_0x10035a[5] = _0x294eff()), 0 === _0x5b1d50.value.selectedFiles.size ? (_0xd79bff(), _0x52d5ab(_0x2ca4dd, {
        key: 1,
        onConfirm: _0x1cd3ef
      })) : _0x4c3da8("", true)])]), _0x10035a[32] || (_0x10035a[32] = _0x294eff()), b("div", _0x3e4265, [(_0xd79bff(true), _0x463345(_0x5a8a53, null, _0xfd9392(_0x21980d.value, _0x75bbe3 => (_0xd79bff(), _0x463345("div", {
        key: _0x75bbe3.id,
        class: _0x507b0e(["grid-item", {
          selected: _0x5b1d50.value.selectedFiles.has(_0x75bbe3.id),
          previewing: _0x5b1d50.value.file.id === _0x75bbe3.id,
          "touch-highlight": _0x4597a2.value === _0x75bbe3.id,
          "range-selected": _0x4b017a.value.has(_0x75bbe3.id)
        }]),
        onClick: _0x5520cc => (async _0x18cebb => {
          await _0x493bd7([_0x18cebb]);
        })(_0x75bbe3),
        onTouchstart: _0x122399 => ((_0x21dfa2, _0x1e45d3) => {
          _0x237f1b.value = _0x21dfa2.touches[0].clientX;
          _0x39ffb0.value = _0x21dfa2.touches[0].clientY;
          _0x3b4d28.value = false;
          _0x4597a2.value = _0x1e45d3.id;
          _0x468a3b.value = setTimeout(() => {
            _0x2050ef.value = true;
            _0x19627e(_0x1e45d3, true);
            _0x2c4f88.value = _0x5b1d50.value.files.findIndex(_0x381854 => _0x381854.id === _0x1e45d3.id);
            _0x10537a.value = true;
            _0x54354f.info("已进入多选模式");
          }, 500);
        })(_0x122399, _0x75bbe3),
        onTouchend: _0x277423 => (clearTimeout(_0x468a3b.value), _0x10537a.value = false, void (_0x4597a2.value = null)),
        onTouchmove: _0xdbdf1,
        "data-file-id": _0x75bbe3.id
      }, [b("div", _0x5cf161, [b("img", {
        src: _0x75bbe3.headImg || _0x51a3e3(_0x376378),
        class: "avatar-image",
        alt: "头像"
      }, null, 8, _0x2a7853), _0x10035a[7] || (_0x10035a[7] = _0x294eff()), b("div", _0x3ceda8, _0x46dc30(_0x31c93d(_0x75bbe3.name)), 1)]), _0x10035a[8] || (_0x10035a[8] = _0x294eff()), b("div", _0x2da9f4, _0x46dc30(_0x75bbe3.formattedServerId), 1), _0x10035a[9] || (_0x10035a[9] = _0x294eff()), b("div", {
        class: "select-checkbox",
        onClick: _0x3d5124(_0x448b85 => _0x19627e(_0x75bbe3), ["stop"])
      }, [b("input", {
        type: "checkbox",
        checked: _0x5b1d50.value.selectedFiles.has(_0x75bbe3.id)
      }, null, 8, _0x5ec1ec)], 8, _0xc1a641)], 42, _0x373e17))), 128)), _0x10035a[13] || (_0x10035a[13] = _0x294eff()), 0 === _0x21980d.value.length ? (_0xd79bff(), _0x463345("div", _0x31a401, [_0x232e32(_0x823455, {
        class: "empty-icon"
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x123357))]),
        _: 1
      }), _0x10035a[11] || (_0x10035a[11] = _0x294eff()), b("p", null, _0x46dc30(_0x141ab7.value ? "没有找到匹配的文件" : "暂无文件"), 1), _0x10035a[12] || (_0x10035a[12] = _0x294eff()), b("button", {
        onClick: _0x10035a[1] || (_0x10035a[1] = (..._0x51a98e) => _0x275b50.value.click && _0x275b50.value.click(..._0x51a98e)),
        class: "upload-btn"
      }, [_0x232e32(_0x823455, null, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x42065c))]),
        _: 1
      }), _0x10035a[10] || (_0x10035a[10] = _0x294eff("\r\n          上传文件\r\n        ", -1))])])) : _0x4c3da8("", true)]), _0x10035a[33] || (_0x10035a[33] = _0x294eff()), -1 !== _0x19016b.value ? (_0xd79bff(), _0x463345("div", {
        key: 1,
        class: "preview-overlay",
        onClick: _0x459534
      })) : _0x4c3da8("", true), _0x10035a[34] || (_0x10035a[34] = _0x294eff()), -1 !== _0x19016b.value ? (_0xd79bff(), _0x463345("div", {
        key: 2,
        class: "preview-container",
        ref_key: "previewContainer",
        ref: _0x2b50fe
      }, [b("div", _0xda1982, [b("div", _0x2c8fa4, [1 !== _0x19016b.value || 1 === _0x5b1d50.value.selectedFileIds.length ? (_0xd79bff(), _0x463345("span", _0x1d195f, _0x46dc30(_0x31c93d(_0x5b1d50.value.file.name)), 1)) : (_0xd79bff(), _0x463345("span", _0x4cef68, "\r\n            批量重置 (" + _0x46dc30(_0x5b1d50.value.selectedFileIds.length) + "个文件)\r\n          ", 1)), _0x10035a[14] || (_0x10035a[14] = _0x294eff()), 1 !== _0x19016b.value || 1 === _0x5b1d50.value.selectedFileIds.length ? (_0xd79bff(), _0x52d5ab(_0x823455, {
        key: 2,
        class: "edit-icon",
        onClick: _0x430fbd
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x7ce7ce))]),
        _: 1
      })) : _0x4c3da8("", true), _0x10035a[15] || (_0x10035a[15] = _0x294eff()), 1 !== _0x19016b.value || 1 === _0x5b1d50.value.selectedFileIds.length ? (_0xd79bff(), _0x52d5ab(_0x823455, {
        key: 3,
        class: "edit-icon",
        onClick: _0x21f026
      }, {
        default: _0x25252c(() => [_0x232e32(_0x115f0c)]),
        _: 1
      })) : _0x4c3da8("", true), _0x10035a[16] || (_0x10035a[16] = _0x294eff()), 1 !== _0x19016b.value || 1 === _0x5b1d50.value.selectedFileIds.length ? (_0xd79bff(), _0x52d5ab(_0x823455, {
        key: 4,
        class: "edit-icon",
        onClick: _0x44e48e
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x5d6f7f))]),
        _: 1
      })) : _0x4c3da8("", true)]), _0x10035a[17] || (_0x10035a[17] = _0x294eff()), b("div", _0x2d85f4, [_0x232e32(_0x823455, {
        class: "fullscreen-icon",
        onClick: _0x2c4120
      }, {
        default: _0x25252c(() => [_0x232e32(_0x51a3e3(_0x32e666))]),
        _: 1
      })])]), _0x10035a[22] || (_0x10035a[22] = _0x294eff()), b("div", _0xe09294, [1 === _0x19016b.value ? (_0xd79bff(), _0x463345("button", {
        key: 0,
        onClick: _0x560d87,
        class: "save-btn fixed-save-btn"
      }, "保存到所有选中文件")) : _0x4c3da8("", true), _0x10035a[21] || (_0x10035a[21] = _0x294eff()), 0 === _0x19016b.value ? (_0xd79bff(), _0x463345("div", _0x390fe7, [b("button", {
        class: "nav-btn",
        onClick: _0x35f022,
        disabled: !_0x218ca2.value
      }, [...(_0x10035a[18] || (_0x10035a[18] = [b("i", {
        class: "fas fa-chevron-left"
      }, null, -1)]))], 8, _0x3eb29b), _0x10035a[20] || (_0x10035a[20] = _0x294eff()), b("button", {
        class: "nav-btn",
        onClick: _0x5f07a8,
        disabled: !_0x202296.value
      }, [...(_0x10035a[19] || (_0x10035a[19] = [b("i", {
        class: "fas fa-chevron-right"
      }, null, -1)]))], 8, _0x428d39)])) : _0x4c3da8("", true)])], 512)) : _0x4c3da8("", true), _0x10035a[35] || (_0x10035a[35] = _0x294eff()), _0x14480e.value ? (_0xd79bff(), _0x463345("div", _0x220ed2, [b("div", _0x2bffb3, [b("p", null, _0x46dc30(_0x3daff6.value), 1), _0x10035a[24] || (_0x10035a[24] = _0x294eff()), b("div", {
        class: "dialog-buttons"
      }, [b("button", {
        onClick: _0x211871
      }, "确认"), _0x10035a[23] || (_0x10035a[23] = _0x294eff()), b("button", {
        onClick: _0x22a060
      }, "取消")])])])) : _0x4c3da8("", true), _0x10035a[36] || (_0x10035a[36] = _0x294eff()), _0x2eb707.value ? (_0xd79bff(), _0x463345("div", _0x3b565a, [b("div", _0x5826fc, [_0x10035a[28] || (_0x10035a[28] = b("h3", null, "重命名文件", -1)), _0x10035a[29] || (_0x10035a[29] = _0x294eff()), _0x232e32(_0x348aeb, {
        modelValue: _0x5543b8.value,
        "onUpdate:modelValue": _0x10035a[2] || (_0x10035a[2] = _0x199a0a => _0x5543b8.value = _0x199a0a),
        placeholder: "请输入新文件名",
        clearable: ""
      }, null, 8, ["modelValue"]), _0x10035a[30] || (_0x10035a[30] = _0x294eff()), b("div", _0x378203, [_0x232e32(_0x379846, {
        type: "primary",
        onClick: _0x24485f
      }, {
        default: _0x25252c(() => [...(_0x10035a[25] || (_0x10035a[25] = [_0x294eff("保存", -1)]))]),
        _: 1
      }), _0x10035a[27] || (_0x10035a[27] = _0x294eff()), _0x232e32(_0x379846, {
        onClick: _0x10035a[3] || (_0x10035a[3] = _0x48db97 => _0x2eb707.value = false)
      }, {
        default: _0x25252c(() => [...(_0x10035a[26] || (_0x10035a[26] = [_0x294eff("取消", -1)]))]),
        _: 1
      })])])])) : _0x4c3da8("", true)])], 64);
    };
  }
}, [["__scopeId", "data-v-6282178d"]]);
export { _0x2daba8 as default };