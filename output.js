//Wed Dec 17 2025 06:49:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x23520b = {
    _0x41fa99: "#5d8bf4",
    success: "#36d399",
    error: "#f43f5e",
    warning: "#fbbd23",
    _0x509083: "#1e1b4b",
    lightDark: "#2d3748",
    text: "#f9fafb",
    _0x542524: "#a3a3a3"
  };
  const _0x628db5 = {
    _0x68af91: "0 2px 6px rgba(0,0,0,0.15)",
    _0x1c2492: "0 4px 12px rgba(0,0,0,0.1)",
    _0x165c37: "0 8px 24px rgba(0,0,0,0.15)"
  };
  const _0x572a03 = {
    _0xc028f1: _0x23520b,
    _0x118ca9: _0x628db5,
    zIndex: 9999,
    _0xb299aa: 300,
    minWidth: 280,
    _0x4977e9: 1,
    _0x50a677: 0.3
  };
  const _0x56ec91 = {
    top: 20,
    right: 15
  };
  const _0x2fd112 = {
    top: 70,
    right: 15
  };
  const _0x3d8484 = {
    _0x419f9b: _0x56ec91,
    _0x165c37: _0x2fd112
  };
  const _0x3a39cb = {
    enabled: true,
    _0xb6fc81: 0,
    type: 2001
  };
  const _0xd55f3e = {
    enabled: true,
    _0xb6fc81: 0,
    type: 1
  };
  const _0x4ca183 = {
    enabled: true,
    _0xb6fc81: 0,
    type: 1
  };
  const _0x52ff68 = {
    enabled: true,
    _0xb6fc81: 0,
    type: 1008
  };
  const _0x11479a = {
    enabled: true,
    count: 3,
    _0x2840b0: 0
  };
  const _0x2a568c = {
    enabled: true
  };
  const _0xf1bfd1 = {
    enabled: true
  };
  const _0x2bbcf6 = {
    chest: _0x3a39cb,
    fishing: _0xd55f3e,
    recruit: _0x4ca183,
    torch: _0x52ff68,
    _0x5b86bf: _0x11479a,
    _0x4f946c: _0x2a568c,
    vehicle: _0xf1bfd1
  };
  const _0x264720 = {
    _0x920bd8: _0x572a03,
    position: _0x3d8484,
    _0x30f9a9: 1000,
    _0x458322: 1200,
    _0x2c39fa: _0x2bbcf6,
    _0x17c296: "dailyTask",
    _0x14a3e2: false,
    _0x3dd4b3: 240476
  };
  const _0x404a7d = {
    _0x35e0d0: false,
    _0x307300: false,
    _0x5c8544: false,
    _0x4087b2: []
  };
  let _0x3f2737 = {
    _0x510082: null,
    _0x37d1e3: null,
    _0x30be67: null,
    _0x1a6538: null,
    _0x32cfca: null,
    _0x7eb530: null,
    _0x189233: null,
    _0x556d3e: null,
    _0x30a676: null,
    _0x4d3ebc: null,
    _0x2f6aea: null,
    _0x33a333: null,
    _0x26efa0: null
  };
  const _0x455630 = {
    _0x453704: [],
    _0x5c1976: null,
    _0x260cd6: 1
  };
  const _0x517a17 = {
    name: "木质宝箱",
    _0x11303c: "item_openbox",
    _0x22a6fe: _0x58dce4 => ({
      itemId: 2001,
      number: _0x58dce4
    })
  };
  const _0x2bdd30 = {
    name: "青铜宝箱",
    _0x11303c: "item_openbox",
    _0x22a6fe: _0x1ab9a7 => ({
      itemId: 2002,
      number: _0x1ab9a7
    })
  };
  const _0x196605 = {
    name: "黄金宝箱",
    _0x11303c: "item_openbox",
    _0x22a6fe: _0x543974 => ({
      itemId: 2003,
      number: _0x543974
    })
  };
  const _0x2ae2a5 = {
    name: "铂金宝箱",
    _0x11303c: "item_openbox",
    _0x22a6fe: _0x5aefbf => ({
      itemId: 2004,
      number: _0x5aefbf
    })
  };
  const _0x3f450a = {
    name: "钻石宝箱",
    _0x11303c: "item_openbox",
    _0x22a6fe: _0x1d0f0a => ({
      itemId: 2005,
      number: _0x1d0f0a
    })
  };
  const _0x3aa969 = {
    "2001": _0x517a17,
    "2002": _0x2bdd30,
    "2003": _0x196605,
    "2004": _0x2ae2a5,
    "2005": _0x3f450a
  };
  const _0x11bb9d = {
    name: "普通钓鱼",
    _0x11303c: "artifact_lottery",
    _0x22a6fe: _0x4747ba => ({
      _0x24d555: _0x4747ba,
      _0x3c14b2: true,
      type: 1
    })
  };
  const _0x20c907 = {
    name: "高级钓鱼",
    _0x11303c: "artifact_lottery",
    _0x22a6fe: _0x1f3e7f => ({
      _0x24d555: _0x1f3e7f,
      _0x3c14b2: true,
      type: 2
    })
  };
  const _0x45dc28 = {
    "1": _0x11bb9d,
    "2": _0x20c907
  };
  const _0x232d95 = {
    name: "付费招募",
    _0x11303c: "hero_recruit",
    _0x22a6fe: _0xebd7ce => ({
      _0x72a0a0: false,
      _0x1eb5be: _0xebd7ce,
      _0x1b2d82: 1
    })
  };
  const _0x5828e9 = {
    "1": _0x232d95
  };
  const _0x21dae4 = {
    name: "普通火把",
    _0x11303c: "item_consume",
    _0x22a6fe: _0x1e7f27 => ({
      itemId: 1008,
      _0x8d07a1: _0x1e7f27
    })
  };
  const _0x73fae9 = {
    name: "青铜火把",
    _0x11303c: "item_consume",
    _0x22a6fe: _0x437219 => ({
      itemId: 1009,
      _0x8d07a1: _0x437219
    })
  };
  const _0x4616a2 = {
    name: "咸神火把",
    _0x11303c: "item_consume",
    _0x22a6fe: _0x56c058 => ({
      itemId: 1010,
      _0x8d07a1: _0x56c058
    })
  };
  const _0x1c16a6 = {
    "1008": _0x21dae4,
    "1009": _0x73fae9,
    "1010": _0x4616a2
  };
  const _0x5bf2dd = {
    chest: _0x3aa969,
    fishing: _0x45dc28,
    recruit: _0x5828e9,
    torch: _0x1c16a6
  };
  const _0x4e6e36 = {
    id: "shareTorch",
    name: "领取火把",
    enabled: false
  };
  const _0x5571e5 = {
    id: "claimMail",
    name: "领取邮件",
    enabled: false
  };
  const _0x13e11e = {
    id: "dailyBoss",
    name: "每日咸王",
    enabled: false
  };
  const _0x33304a = {
    id: "openChest",
    name: "开启木箱",
    enabled: false
  };
  const _0x20996c = {
    id: "recruit",
    name: "每日招募",
    enabled: false
  };
  const _0x2d805b = {
    id: "goldenTouch",
    name: "点金",
    enabled: false
  };
  const _0x4ee9ec = {
    id: "fishing",
    name: "每日钓鱼",
    enabled: false
  };
  const _0x4fbbc1 = {
    id: "signIn",
    name: "每日登录",
    enabled: false
  };
  const _0x1ccdb6 = {
    id: "dailyGift",
    name: "每日特惠",
    enabled: false
  };
  const _0x3492bd = {
    id: "cardReward",
    name: "每日福利",
    enabled: false
  };
  const _0x4b09d7 = {
    id: "legionSign",
    name: "签到",
    enabled: false
  };
  const _0x49fb1d = {
    id: "answerQuiz",
    name: "答题",
    enabled: false
  };
  const _0x3f57ab = {
    id: "friendGold",
    name: "赠领金币",
    enabled: false
  };
  const _0x43a880 = {
    id: "autoBottle",
    name: "重置盐罐",
    enabled: false
  };
  const _0x2ce879 = {
    id: "autoCollect",
    name: "收罐子",
    enabled: false
  };
  const _0x38faa0 = {
    id: "autoHarvest",
    name: "加钟收菜",
    enabled: false
  };
  const _0x4a5674 = {
    id: "claimTaskReward",
    name: "领任务奖励",
    enabled: false
  };
  const _0x4b1e07 = {
    id: "genieSweep",
    name: "每日扫荡",
    enabled: false
  };
  const _0x301bb2 = {
    id: "buyTreasureBoxes",
    name: "购买宝箱",
    enabled: false
  };
  const _0x564422 = {
    id: "autoTower",
    name: "爬塔",
    enabled: false,
    _0x283d11: 10
  };
  const _0x4cce56 = {
    id: "legionBoss",
    name: "俱乐部boss",
    enabled: false,
    _0x38bbdd: 2
  };
  const _0x25d3d6 = {
    id: "autoPurchase",
    name: "一键采购",
    enabled: false
  };
  const _0x420444 = {
    id: "evoEvoTower",
    name: "怪异塔",
    enabled: false,
    _0x35bf3d: 3
  };
  const _0x1b5598 = {
    "1": _0x4e6e36,
    "2": _0x5571e5,
    "3": _0x13e11e,
    "4": _0x33304a,
    "5": _0x20996c,
    "6": _0x2d805b,
    "7": _0x4ee9ec,
    "8": _0x4fbbc1,
    "9": _0x1ccdb6,
    "10": _0x3492bd,
    "11": _0x4b09d7,
    "12": _0x49fb1d,
    "13": _0x3f57ab,
    "14": _0x43a880,
    "15": _0x2ce879,
    "16": _0x38faa0,
    "17": _0x4a5674,
    "18": _0x4b1e07,
    "19": _0x301bb2,
    "20": _0x564422,
    "21": _0x4cce56,
    "22": _0x25d3d6,
    "23": _0x420444
  };
  const _0x451365 = {
    _0x13930c: _0x1b5598
  };
  function _0x34944c(_0x2fb75a, _0x410bf5 = "info") {
    {
      document.querySelectorAll(".arena-tip").forEach(_0x3b741d => _0x3b741d.remove());
      const _0x4f1d57 = document.createElement("div");
      _0x4f1d57.className = "arena-tip";
      _0x4f1d57.textContent = _0x2fb75a;
      let _0x41aba6 = _0x264720._0x920bd8._0xc028f1._0x41fa99;
      if (_0x410bf5 === "success") {
        _0x41aba6 = _0x264720._0x920bd8._0xc028f1.success;
      }
      if (_0x410bf5 === "error") {
        _0x41aba6 = _0x264720._0x920bd8._0xc028f1.error;
      }
      if (_0x410bf5 === "warning") {
        _0x41aba6 = _0x264720._0x920bd8._0xc028f1.warning;
      }
      _0x4f1d57.style.cssText = "\n            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);\n            background: " + _0x41aba6 + "; color: white; padding: 6px 12px; border-radius: 6px;\n            font-size: 12px; z-index: " + (_0x264720._0x920bd8.zIndex + 1) + "; box-shadow: " + _0x264720._0x920bd8._0x118ca9._0x1c2492 + ";\n            white-space: nowrap; opacity: 0; transition: opacity 0.3s ease;\n        ";
      document.body.appendChild(_0x4f1d57);
      setTimeout(() => _0x4f1d57.style.opacity = "1", 10);
      setTimeout(() => {
        _0x4f1d57.style.opacity = "0";
        setTimeout(() => _0x4f1d57.remove(), 300);
      }, 3000);
    }
  }
  function _0x2434d9(_0x1f8eb8, _0x5c8458 = "info", _0x387461 = "") {
    {
      const _0x2dd156 = document.getElementById("arenaLogContainer");
      if (!_0x2dd156) {
        return;
      }
      const _0x26ac04 = document.createElement("div");
      _0x26ac04.className = "arena-log-item arena-log-" + _0x5c8458;
      const _0x1e0f52 = new Date().toLocaleTimeString("zh-CN", {
        _0x219b53: false,
        _0x3a243d: "2-digit",
        _0x440f62: "2-digit",
        _0x3a5cfe: "2-digit"
      });
      _0x26ac04.textContent = _0x387461 ? "[" + _0x1e0f52 + "] [" + _0x387461 + "] " + _0x1f8eb8 : "[" + _0x1e0f52 + "] " + _0x1f8eb8;
      let _0x1d9ea9 = _0x264720._0x920bd8._0xc028f1.text;
      if (_0x5c8458 === "success") {
        _0x1d9ea9 = _0x264720._0x920bd8._0xc028f1.success;
      }
      if (_0x5c8458 === "error") {
        _0x1d9ea9 = _0x264720._0x920bd8._0xc028f1.error;
      }
      if (_0x5c8458 === "warning") {
        _0x1d9ea9 = _0x264720._0x920bd8._0xc028f1.warning;
      }
      if (_0x5c8458 === "summary") {
        _0x1d9ea9 = _0x264720._0x920bd8._0xc028f1.success;
      }
      _0x26ac04.style.cssText = "\n            margin: 2px 0; padding: 2px 4px; border-radius: 4px; color: " + _0x1d9ea9 + ";\n            font-size: 10px; line-height: 1.3; font-family: 'Consolas', monospace;\n            word-wrap: break-word; white-space: normal;\n        ";
      if (_0x5c8458 === "summary") {
        {
          _0x26ac04.style.fontWeight = "bold";
          _0x26ac04.style.marginTop = "6px";
          _0x26ac04.style.background = _0x264720._0x920bd8._0xc028f1.success + "10";
          _0x26ac04.style.borderLeft = "3px solid " + _0x264720._0x920bd8._0xc028f1.success;
        }
      }
      _0x2dd156.appendChild(_0x26ac04);
      _0x2dd156.scrollTop = _0x2dd156.scrollHeight;
    }
  }
  function _0x3bb623(_0x5622f7, _0x250600, _0x1ad1c5 = false) {
    {
      const _0x1b4e69 = document.createElement("button");
      _0x1b4e69.textContent = _0x5622f7;
      _0x1b4e69.style.cssText = "\n            padding: 7px 12px; border-radius: 8px; border: none; font-size: 12px;\n            font-weight: 500; cursor: pointer; transition: all 0.2s ease;\n            font-family: 'Microsoft YaHei', sans-serif; box-shadow: " + _0x264720._0x920bd8._0x118ca9._0x68af91 + ";\n            " + (_0x1ad1c5 ? "background: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + "; color: white;" : "background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";") + "\n        ";
      _0x1b4e69.addEventListener("mouseover", () => _0x1b4e69.style.transform = "translateY(-1px)");
      _0x1b4e69.addEventListener("mouseout", () => _0x1b4e69.style.transform = "translateY(0)");
      _0x1b4e69.addEventListener("click", _0x3b2437 => {
        _0x3b2437.stopPropagation();
        _0x250600(_0x3b2437);
      });
      return _0x1b4e69;
    }
  }
  function _0xcd3d0d(_0x5c37bb, _0x47e126 = "", _0xd124a0 = false) {
    {
      const _0x27c06a = document.createElement("input");
      _0x27c06a.type = "text";
      _0x27c06a.placeholder = _0x5c37bb;
      _0x27c06a.value = _0x47e126;
      _0x27c06a.disabled = _0xd124a0;
      _0x27c06a.style.cssText = "\n            width: 100%; padding: 6px 8px; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n            border-radius: 8px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n            font-size: 10px; box-sizing: border-box; outline: none;\n            " + (_0xd124a0 ? "opacity: 0.7; cursor: not-allowed;" : "") + "\n        ";
      _0x27c06a.addEventListener("focus", () => !_0xd124a0 && (_0x27c06a.style.borderColor = _0x264720._0x920bd8._0xc028f1._0x41fa99));
      _0x27c06a.addEventListener("blur", () => !_0xd124a0 && (_0x27c06a.style.borderColor = _0x264720._0x920bd8._0xc028f1._0x542524));
      return _0x27c06a;
    }
  }
  function _0x49a7c1(_0x3d64e7, _0x34cd9e) {
    {
      const _0x268d15 = document.createElement("select");
      _0x268d15.style.cssText = "\n            width: 100%; padding: 6px 8px; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n            border-radius: 6px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n            font-size: 10px; outline: none;\n        ";
      Object.entries(_0x3d64e7).forEach(([_0xf9b899, _0x42496d]) => {
        {
          const _0x159196 = document.createElement("option");
          _0x159196.value = _0xf9b899;
          _0x159196.textContent = _0x42496d.name;
          _0x159196.selected = parseInt(_0xf9b899) === _0x34cd9e;
          _0x268d15.appendChild(_0x159196);
        }
      });
      return _0x268d15;
    }
  }
  function _0x48be2d(_0x355b19, _0x169705 = false, _0x27cf28 = null) {
    {
      const _0x441572 = document.createElement("div");
      _0x441572.style.cssText = "display: flex; align-items: center; gap: 3px;";
      const _0x2de346 = document.createElement("input");
      _0x2de346.type = "checkbox";
      _0x2de346.checked = _0x169705;
      _0x2de346.style.cssText = "\n            width: 14px; height: 14px; accent-color: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + ";\n            cursor: pointer;\n        ";
      const _0x1b663e = document.createElement("label");
      _0x1b663e.textContent = _0x355b19;
      _0x1b663e.style.cssText = "\n            font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1.text + "; cursor: pointer;\n        ";
      _0x441572.appendChild(_0x2de346);
      _0x441572.appendChild(_0x1b663e);
      if (_0x27cf28) {
        {
          _0x2de346.addEventListener("change", _0x27cf28);
        }
      }
      const _0x300b09 = {
        _0x3694c0: _0x441572,
        checkbox: _0x2de346
      };
      return _0x300b09;
    }
  }
  function _0x2656c3(_0x342e21) {
    {
      return new Promise(_0x143437 => setTimeout(_0x143437, _0x342e21 * 1000));
    }
  }
  function _0x2d132() {
    {
      _0x264720._0x14a3e2 = !_0x264720._0x14a3e2;
      _0x3f2737._0x33a333.style.display = _0x264720._0x14a3e2 ? "block" : "none";
      _0x264720._0x14a3e2 ? (_0x3f2737._0x26efa0.style.transform = "rotate(180deg)", _0x34944c("显示花狗助手面板"), _0x2e4613()) : (_0x3f2737._0x26efa0.style.transform = "rotate(0deg)", _0x34944c("隐藏花狗助手面板"), _0x3f2737._0x419f9b.style.opacity = "1");
    }
  }
  function _0x2e4613() {
    {
      if (_0x264720._0x14a3e2 && _0x3f2737._0x2f6aea) {
        {
          const _0x24aec4 = parseInt(_0x3f2737._0x2f6aea.value) / 100;
          _0x3f2737._0x419f9b.style.opacity = _0x24aec4;
        }
      }
    }
  }
  function _0x77303b(_0xffc488) {
    {
      if (!_0x3f2737._0x33a333) {
        return;
      }
      const _0x9d1766 = Math.round(_0xffc488 * 255).toString(16).padStart(2, "0");
      const _0x426c04 = _0x3f2737._0x33a333;
      _0x426c04.style.background = "" + _0x264720._0x920bd8._0xc028f1._0x509083.slice(0, 7) + _0x9d1766;
      _0x426c04.style.borderColor = "" + _0x264720._0x920bd8._0xc028f1._0x542524.slice(0, 7) + _0x9d1766;
      document.querySelectorAll(".module-content > div, .arena-log-container").forEach(_0x3b52f7 => {
        {
          const _0x4c8d97 = _0x3b52f7.style.background.includes("lightDark") ? _0x264720._0x920bd8._0xc028f1.lightDark : _0x264720._0x920bd8._0xc028f1._0x509083;
          _0x3b52f7.style.background = "" + _0x4c8d97.slice(0, 7) + _0x9d1766;
        }
      });
      document.querySelector(".module-tabs")?.["style"]["setProperty"]("background", "" + _0x264720._0x920bd8._0xc028f1.lightDark.slice(0, 7) + _0x9d1766);
      _0x264720._0x14a3e2 && (_0x3f2737._0x419f9b.style.opacity = _0xffc488);
      _0x2434d9("UI透明度调节至：" + Math.round(_0xffc488 * 100) + "%", "info");
    }
  }
  function _0x1a0854(_0x1256f8) {
    {
      if (!_0x404a7d._0x5c8544) {
        {
          _0x34944c("无正在执行的任务", "error");
          return;
        }
      }
      _0x404a7d._0x35e0d0 = !_0x404a7d._0x35e0d0;
      const _0x40ea61 = _0x404a7d._0x35e0d0 ? "恢复" : "暂停";
      const _0x417713 = _0x404a7d._0x35e0d0 ? "warning" : "success";
      const _0x56f1fd = _0x404a7d._0x35e0d0 ? "任务已暂停" : "任务已恢复";
      if (_0x3f2737._0x510082) {
        _0x3f2737._0x510082.textContent = _0x40ea61;
      }
      if (_0x3f2737._0x30be67) {
        _0x3f2737._0x30be67.textContent = _0x40ea61;
      }
      if (_0x3f2737._0x32cfca) {
        _0x3f2737._0x32cfca.textContent = _0x40ea61;
      }
      _0x34944c(_0x56f1fd, _0x417713);
      _0x2434d9(_0x56f1fd, _0x417713);
    }
  }
  async function _0x60218e() {
    {
      if (!_0x404a7d._0x5c8544) {
        {
          _0x34944c("无正在执行的任务", "error");
          return;
        }
      }
      _0x404a7d._0x307300 = true;
      _0x404a7d._0x35e0d0 = false;
      if (_0x3f2737._0x510082) {
        {
          _0x3f2737._0x510082.disabled = true;
          _0x3f2737._0x510082.textContent = "暂停";
        }
      }
      if (_0x3f2737._0x37d1e3) {
        _0x3f2737._0x37d1e3.disabled = true;
      }
      if (_0x3f2737._0x30be67) {
        {
          _0x3f2737._0x30be67.disabled = true;
          _0x3f2737._0x30be67.textContent = "暂停";
        }
      }
      if (_0x3f2737._0x1a6538) {
        _0x3f2737._0x1a6538.disabled = true;
      }
      if (_0x3f2737._0x32cfca) {
        {
          _0x3f2737._0x32cfca.disabled = true;
          _0x3f2737._0x32cfca.textContent = "暂停";
        }
      }
      if (_0x3f2737._0x7eb530) {
        _0x3f2737._0x7eb530.disabled = true;
      }
      _0x34944c("正在终止所有任务...", "warning");
      _0x2434d9("任务终止中...", "warning");
      await Promise.allSettled(_0x404a7d._0x4087b2);
      _0x404a7d._0x307300 = false;
      _0x404a7d._0x5c8544 = false;
      _0x404a7d._0x4087b2 = [];
      if (_0x3f2737._0x189233) {
        {
          _0x3f2737._0x189233.disabled = false;
          _0x3f2737._0x189233.textContent = "同时开始所有资源任务";
          _0x3f2737._0x189233.style.opacity = "1";
        }
      }
      _0x3f2737._0x556d3e && (_0x3f2737._0x556d3e.disabled = false, _0x3f2737._0x556d3e.textContent = "开始战斗", _0x3f2737._0x556d3e.style.opacity = "1");
      _0x3f2737._0x30a676 && (_0x3f2737._0x30a676.disabled = false, _0x3f2737._0x30a676.textContent = "开始升星", _0x3f2737._0x30a676.style.opacity = "1");
      _0x3f2737._0x4d3ebc && (_0x3f2737._0x4d3ebc.disabled = false, _0x3f2737._0x4d3ebc.textContent = "执行选中任务", _0x3f2737._0x4d3ebc.style.opacity = "1");
      _0x34944c("所有任务已终止", "error");
      _0x2434d9("所有任务已终止", "error");
    }
  }
  async function _0x30f4f7(_0x279bde) {
    {
      if (_0x404a7d._0x307300) {
        throw new Error("任务已终止");
      }
      while (_0x404a7d._0x35e0d0) {
        await new Promise(_0x1b3ad7 => setTimeout(_0x1b3ad7, 500));
        _0x2434d9(_0x279bde + "：等待恢复执行", "warning");
      }
    }
  }
  function _0x2f0b90(_0xab748a) {
    {
      const _0x64b9b9 = document.createElement("div");
      _0x64b9b9.className = "module-tabs";
      _0x64b9b9.style.cssText = "\n            display: flex; background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "; border-radius: 8px;\n            padding: 2px; margin-bottom: 8px; gap: 2px;\n        ";
      const _0x2d2859 = {
        id: "dailyTask",
        name: "📅 每日任务"
      };
      const _0x308779 = {
        id: "resource",
        name: "📦 资源"
      };
      const _0x49a4cb = {
        id: "arenaStar",
        name: "⚔️ 竞技&升星"
      };
      const _0x204388 = {
        id: "vehicle",
        name: "🚗 车辆助手"
      };
      const _0x3f7bab = [_0x2d2859, _0x308779, _0x49a4cb, _0x204388];
      _0x3f7bab.forEach(_0x38a914 => {
        {
          const _0x510f9a = document.createElement("div");
          _0x510f9a.className = "module-tab";
          _0x510f9a.textContent = _0x38a914.name;
          _0x510f9a.style.cssText = "\n                flex: 1; text-align: center; padding: 5px 2px; border-radius: 6px;\n                cursor: pointer; font-size: 10px; font-weight: 500; transition: all 0.2s ease;\n                color: " + (_0x38a914.id === _0x264720._0x17c296 ? "white" : _0x264720._0x920bd8._0xc028f1._0x542524) + ";\n                background: " + (_0x38a914.id === _0x264720._0x17c296 ? _0x264720._0x920bd8._0xc028f1._0x41fa99 : "transparent") + ";\n            ";
          _0x510f9a.addEventListener("click", () => {
            {
              document.querySelectorAll(".module-tab").forEach(_0x1e1984 => {
                _0x1e1984.style.background = "transparent";
                _0x1e1984.style.color = _0x264720._0x920bd8._0xc028f1._0x542524;
              });
              _0x510f9a.style.background = _0x264720._0x920bd8._0xc028f1._0x41fa99;
              _0x510f9a.style.color = "white";
              document.querySelectorAll(".module-content").forEach(_0x38a7d7 => _0x38a7d7.style.display = "none");
              document.getElementById("module-" + _0x38a914.id)?.["style"]["setProperty"]("display", "block");
              _0x264720._0x17c296 = _0x38a914.id;
            }
          });
          _0x64b9b9.appendChild(_0x510f9a);
        }
      });
      _0xab748a.appendChild(_0x64b9b9);
    }
  }
  function _0x386ce8() {
    {
      const _0x1e1a6d = document.createElement("div");
      _0x1e1a6d.id = "module-dailyTask";
      _0x1e1a6d.className = "module-content";
      _0x1e1a6d.style.display = _0x264720._0x17c296 === "dailyTask" ? "block" : "none";
      const _0x21b69a = document.createElement("div");
      _0x21b69a.style.cssText = "\n            display: flex; gap: 4px; margin-bottom: 6px;\n            font-size: 13px; font-weight: bold; color: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + ";\n        ";
      const _0x3d322a = _0x3bb623("全部", () => {
        {
          Object.values(_0x451365._0x13930c).forEach(_0x36137e => {
            _0x36137e.enabled = _0x36137e.id !== "poseidonChallenge";
          });
          document.querySelectorAll("#module-dailyTask input[type=\"checkbox\"]").forEach(_0x2b45f5 => {
            {
              const _0x1d5c53 = _0x2b45f5.nextElementSibling?.["textContent"];
              _0x2b45f5.checked = _0x1d5c53 !== "海神挑战";
            }
          });
          _0x34944c("已选择所有任务（排除海神挑战）", "success");
        }
      }, false);
      _0x3d322a.style.flex = "1";
      _0x3d322a.style.padding = "4px 6px";
      _0x3d322a.style.fontSize = "10px";
      _0x3d322a.style.color = _0x264720._0x920bd8._0xc028f1.warning;
      const _0x3a6eea = _0x3bb623("收菜", () => {
        {
          Object.values(_0x451365._0x13930c).forEach(_0x2c91ea => {
            {
              _0x2c91ea.enabled = false;
            }
          });
          _0x451365._0x13930c[14].enabled = true;
          _0x451365._0x13930c[16].enabled = true;
          _0x451365._0x13930c[17].enabled = true;
          _0x451365._0x13930c[22].enabled = true;
          document.querySelectorAll("#module-dailyTask input[type=\"checkbox\"]").forEach(_0x10e777 => {
            {
              const _0xcab0d0 = _0x10e777.nextElementSibling?.["textContent"];
              _0x10e777.checked = _0xcab0d0 === "重置盐罐" || _0xcab0d0 === "加钟收菜" || _0xcab0d0 === "领任务奖励" || _0xcab0d0 === "一键采购";
            }
          });
          _0x34944c("已选择收菜相关任务", "success");
        }
      }, false);
      _0x3a6eea.style.flex = "1";
      _0x3a6eea.style.padding = "4px 6px";
      _0x3a6eea.style.fontSize = "10px";
      _0x3a6eea.style.color = _0x264720._0x920bd8._0xc028f1.warning;
      const _0x10b0e2 = _0x3bb623("挑战", () => {
        {
          Object.values(_0x451365._0x13930c).forEach(_0x10dffb => {
            _0x10dffb.enabled = false;
          });
          _0x451365._0x13930c[20].enabled = true;
          _0x451365._0x13930c[23].enabled = true;
          document.querySelectorAll("#module-dailyTask input[type=\"checkbox\"]").forEach((_0x1331b9, _0x2cd751) => {
            {
              const _0x26f1e8 = _0x1331b9.nextElementSibling?.["textContent"];
              _0x1331b9.checked = _0x26f1e8 === "爬塔" || _0x26f1e8 === "怪异塔";
            }
          });
          _0x34944c("已选择挑战相关任务", "success");
        }
      }, false);
      _0x10b0e2.style.flex = "1";
      _0x10b0e2.style.padding = "4px 6px";
      _0x10b0e2.style.fontSize = "10px";
      _0x10b0e2.style.color = _0x264720._0x920bd8._0xc028f1.warning;
      _0x21b69a.appendChild(_0x3d322a);
      _0x21b69a.appendChild(_0x3a6eea);
      _0x21b69a.appendChild(_0x10b0e2);
      _0x1e1a6d.appendChild(_0x21b69a);
      const _0x30c70e = document.createElement("div");
      _0x30c70e.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 4px;\n            border-radius: 6px; margin-bottom: 6px; max-height: 200px;\n            overflow-y: auto;\n            display: grid;\n            grid-template-columns: repeat(3, minmax(80px, 1fr));\n            gap: 2px;\n        ";
      const _0x41c6e9 = Object.values(_0x451365._0x13930c);
      const _0x49a49e = _0x41c6e9.filter(_0x4ba44b => _0x4ba44b.id !== "autoTower" && _0x4ba44b.id !== "legionBoss" && _0x4ba44b.id !== "poseidonChallenge" && _0x4ba44b.id !== "evoEvoTower");
      const _0x46435a = _0x41c6e9.filter(_0x3f46d0 => _0x3f46d0.id === "autoTower" || _0x3f46d0.id === "legionBoss" || _0x3f46d0.id === "evoEvoTower");
      _0x49a49e.sort((_0x57d999, _0x16dac5) => {
        {
          if (_0x57d999.name.length !== _0x16dac5.name.length) {
            {
              return _0x57d999.name.length - _0x16dac5.name.length;
            }
          }
          return _0x57d999.name.localeCompare(_0x16dac5.name);
        }
      });
      _0x49a49e.forEach(_0x54bb7d => {
        {
          const _0x5dac81 = document.createElement("div");
          _0x5dac81.style.cssText = "\n                background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "30; padding: 1px;\n                border-radius: 4px;\n                display: flex; align-items: center;\n                justify-content: left;\n                text-align: left;\n                min-height: 15px;\n            ";
          const _0x1ee41c = _0x48be2d(_0x54bb7d.name, _0x54bb7d.enabled, _0x5cf304 => {
            _0x54bb7d.enabled = _0x5cf304.target.checked;
          });
          _0x5dac81.appendChild(_0x1ee41c._0x3694c0);
          _0x30c70e.appendChild(_0x5dac81);
        }
      });
      const _0x473d4f = document.createElement("div");
      _0x473d4f.style.cssText = "\n            width: 100%;\n            grid-column: 1 / -1; // 跨越所有列\n            margin-top: 4px;\n        ";
      _0x30c70e.appendChild(_0x473d4f);
      if (_0x46435a.length > 0) {
        {
          const _0x21e761 = document.createElement("div");
          _0x21e761.style.cssText = "\n                display: flex; flex-direction: column; gap: 1px;\n                width: 100%;\n            ";
          _0x473d4f.appendChild(_0x21e761);
          let _0x116743 = null;
          let _0x31a6cd = 0;
          const _0xb0311a = () => {
            {
              const _0x4a1f3e = document.createElement("div");
              _0x4a1f3e.style.cssText = "\n                    background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "30; padding: 1px;\n                    border-radius: 4px;\n                    display: flex; gap: 8px; align-items: center;\n                    justify-content: space-between;\n                    min-height: 15px;\n                    width: 100%;\n                    flex-wrap: nowrap;\n                ";
              _0x21e761.appendChild(_0x4a1f3e);
              return _0x4a1f3e;
            }
          };
          _0x46435a.forEach(_0x46163c => {
            {
              const _0x5dac3e = document.createElement("div");
              _0x5dac3e.style.cssText = "display: flex; align-items: center; gap: 4px; flex-shrink: 0;";
              const _0x29cf0a = _0x48be2d(_0x46163c.name, _0x46163c.enabled, _0x576c0b => {
                {
                  _0x46163c.enabled = _0x576c0b.target.checked;
                }
              });
              const _0x9f02c5 = document.createElement("div");
              _0x9f02c5.style.cssText = "display: flex; align-items: center;";
              let _0xafadb8 = false;
              if (_0x46163c.id === "legionBoss") {
                {
                  _0xafadb8 = true;
                  const _0x44f624 = document.createElement("button");
                  _0x44f624.textContent = "-";
                  _0x44f624.style.cssText = "\n                        width: 10px; height: 10px; padding: 0; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;\n                    ";
                  _0x44f624.addEventListener("click", () => {
                    {
                      const _0x371d71 = parseInt(_0x14c786.value);
                      _0x371d71 > 1 && (_0x14c786.value = _0x371d71 - 1, _0x46163c._0x38bbdd = _0x371d71 - 1);
                    }
                  });
                  const _0x14c786 = document.createElement("input");
                  _0x14c786.type = "number";
                  _0x14c786.min = "1";
                  _0x14c786.max = "10";
                  _0x14c786.value = _0x46163c._0x38bbdd || 2;
                  _0x14c786.style.cssText = "\n                        width: 10px; padding: 0; margin: 0 1px; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; text-align: center; height: 10px;\n                    ";
                  _0x14c786.addEventListener("change", _0x1bda80 => {
                    {
                      const _0x263b89 = parseInt(_0x1bda80.target.value);
                      if (_0x263b89 >= 1 && _0x263b89 <= 10) {
                        _0x46163c._0x38bbdd = _0x263b89;
                      } else {
                        {
                          _0x1bda80.target.value = _0x46163c._0x38bbdd || 2;
                        }
                      }
                    }
                  });
                  const _0x523886 = document.createElement("button");
                  _0x523886.textContent = "+";
                  _0x523886.style.cssText = "\n                        width: 10px; height: 10px; padding: 0; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;\n                    ";
                  _0x523886.addEventListener("click", () => {
                    {
                      const _0x3ea006 = parseInt(_0x14c786.value);
                      _0x3ea006 < 10 && (_0x14c786.value = _0x3ea006 + 1, _0x46163c._0x38bbdd = _0x3ea006 + 1);
                    }
                  });
                  _0x9f02c5.appendChild(_0x44f624);
                  _0x9f02c5.appendChild(_0x14c786);
                  _0x9f02c5.appendChild(_0x523886);
                }
              }
              if (_0x46163c.id === "autoTower") {
                {
                  _0xafadb8 = true;
                  const _0x1b1013 = document.createElement("button");
                  _0x1b1013.textContent = "-";
                  _0x1b1013.style.cssText = "\n                        width: 10px; height: 10px; padding: 0; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;\n                    ";
                  _0x1b1013.addEventListener("click", () => {
                    {
                      const _0x2346f2 = parseInt(_0x219da8.value);
                      _0x2346f2 > 1 && (_0x219da8.value = _0x2346f2 - 1, _0x46163c._0x283d11 = _0x2346f2 - 1);
                    }
                  });
                  const _0x219da8 = document.createElement("input");
                  _0x219da8.type = "number";
                  _0x219da8.min = "1";
                  _0x219da8.max = "10";
                  _0x219da8.value = _0x46163c._0x283d11 || 1;
                  _0x219da8.style.cssText = "\n                        width: 10px; padding: 0; margin: 0 1px; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; text-align: center; height: 10px;\n                    ";
                  _0x219da8.addEventListener("change", _0x40527d => {
                    {
                      const _0x592677 = parseInt(_0x40527d.target.value);
                      if (_0x592677 >= 1 && _0x592677 <= 10) {
                        _0x46163c._0x283d11 = _0x592677;
                      } else {
                        {
                          _0x40527d.target.value = _0x46163c._0x283d11 || 1;
                        }
                      }
                    }
                  });
                  const _0x2db711 = document.createElement("button");
                  _0x2db711.textContent = "+";
                  _0x2db711.style.cssText = "\n                        width: 10px; height: 10px; padding: 0; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;\n                    ";
                  _0x2db711.addEventListener("click", () => {
                    {
                      const _0x62bed = parseInt(_0x219da8.value);
                      _0x62bed < 10 && (_0x219da8.value = _0x62bed + 1, _0x46163c._0x283d11 = _0x62bed + 1);
                    }
                  });
                  _0x9f02c5.appendChild(_0x1b1013);
                  _0x9f02c5.appendChild(_0x219da8);
                  _0x9f02c5.appendChild(_0x2db711);
                }
              }
              if (_0x46163c.id === "evoEvoTower") {
                {
                  _0xafadb8 = true;
                  const _0x9e5313 = document.createElement("button");
                  _0x9e5313.textContent = "-";
                  _0x9e5313.style.cssText = "\n                        width: 10px; height: 10px; padding: 0; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;\n                    ";
                  _0x9e5313.addEventListener("click", () => {
                    {
                      const _0x1cc12e = parseInt(_0x6e26eb.value);
                      _0x1cc12e > 1 && (_0x6e26eb.value = _0x1cc12e - 1, _0x46163c._0x35bf3d = _0x1cc12e - 1);
                    }
                  });
                  const _0x6e26eb = document.createElement("input");
                  _0x6e26eb.type = "number";
                  _0x6e26eb.min = "1";
                  _0x6e26eb.max = "10";
                  _0x6e26eb.value = _0x46163c._0x35bf3d || 3;
                  _0x6e26eb.style.cssText = "\n                        width: 10px; padding: 0; margin: 0 1px; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; text-align: center; height: 10px;\n                    ";
                  _0x6e26eb.addEventListener("change", _0x3504d7 => {
                    {
                      const _0xa811a3 = parseInt(_0x3504d7.target.value);
                      if (_0xa811a3 >= 1 && _0xa811a3 <= 10) {
                        {
                          _0x46163c._0x35bf3d = _0xa811a3;
                        }
                      } else {
                        {
                          _0x3504d7.target.value = _0x46163c._0x35bf3d || 3;
                        }
                      }
                    }
                  });
                  const _0x2c08f5 = document.createElement("button");
                  _0x2c08f5.textContent = "+";
                  _0x2c08f5.style.cssText = "\n                        width: 10px; height: 10px; padding: 0; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                        border-radius: 2px; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n                        font-size: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center;\n                    ";
                  _0x2c08f5.addEventListener("click", () => {
                    {
                      const _0x1cd3ad = parseInt(_0x6e26eb.value);
                      _0x1cd3ad < 10 && (_0x6e26eb.value = _0x1cd3ad + 1, _0x46163c._0x35bf3d = _0x1cd3ad + 1);
                    }
                  });
                  _0x9f02c5.appendChild(_0x9e5313);
                  _0x9f02c5.appendChild(_0x6e26eb);
                  _0x9f02c5.appendChild(_0x2c08f5);
                }
              }
              _0x5dac3e.appendChild(_0x29cf0a._0x3694c0);
              _0x5dac3e.appendChild(_0x9f02c5);
              _0xafadb8 && ((!_0x116743 || _0x31a6cd >= 2) && (_0x116743 = _0xb0311a(), _0x31a6cd = 0), _0x116743.appendChild(_0x5dac3e), _0x31a6cd++);
            }
          });
          _0x21e761.children.length > 0 && _0x30c70e.appendChild(_0x21e761);
        }
      }
      _0x1e1a6d.appendChild(_0x30c70e);
      const _0x4a56fc = _0x3bb623("执行选中任务", async _0x54e4bc => {
        {
          const _0x17457c = _0x54e4bc.target;
          const _0x162490 = Object.values(_0x451365._0x13930c).filter(_0x1cd390 => _0x1cd390.enabled);
          if (_0x162490.length === 0) {
            {
              _0x34944c("请至少勾选一个任务", "error");
              return;
            }
          }
          if (!window._0x5eb372) {
            {
              _0x34944c("正在注入每日任务功能...", "info");
              await _0x448c70();
              _0x34944c("注入完成", "success");
              await new Promise(_0x34d8e5 => setTimeout(_0x34d8e5, 1000));
            }
          }
          _0x404a7d._0x35e0d0 = false;
          _0x404a7d._0x307300 = false;
          _0x404a7d._0x5c8544 = true;
          _0x404a7d._0x4087b2 = [];
          if (_0x3f2737._0x32cfca) {
            _0x3f2737._0x32cfca.disabled = false;
          }
          if (_0x3f2737._0x7eb530) {
            _0x3f2737._0x7eb530.disabled = false;
          }
          _0x17457c.disabled = true;
          _0x17457c.textContent = "执行中";
          _0x17457c.style.opacity = "0.8";
          _0x3f2737._0x4d3ebc = _0x17457c;
          const _0x16dc69 = (async () => {
            {
              try {
                {
                  _0x34944c("开始并行执行" + _0x162490.length + "个任务", "success");
                  _0x2434d9("开始并行执行" + _0x162490.length + "个每日任务", "info");
                  const _0x3fcc66 = [];
                  const _0x52f9d9 = [];
                  _0x162490.forEach(_0x4f2b43 => {
                    {
                      const _0x52b6ff = (async () => {
                        {
                          await _0x30f4f7(_0x4f2b43.name);
                          _0x2434d9("执行任务: " + _0x4f2b43.name, "info");
                          try {
                            {
                              switch (_0x4f2b43.id) {
                                case "shareTorch":
                                  await _0x39916a();
                                  break;
                                case "claimMail":
                                  await _0x586d95();
                                  break;
                                case "dailyBoss":
                                  await _0x38e3cb();
                                  break;
                                case "openChest":
                                  await _0x5d2000();
                                  break;
                                case "recruit":
                                  await _0xdf0af();
                                  break;
                                case "goldenTouch":
                                  await _0x2befe2();
                                  break;
                                case "fishing":
                                  await _0xaef80c();
                                  break;
                                case "signIn":
                                  await _0xb403d();
                                  break;
                                case "dailyGift":
                                  await _0x12d3d3();
                                  break;
                                case "cardReward":
                                  await _0x550ee1();
                                  break;
                                case "legionSign":
                                  await _0x2d8f26();
                                  break;
                                case "legionBoss":
                                  await _0x542040(_0x4f2b43._0x38bbdd || 2);
                                  break;
                                case "answerQuiz":
                                  await _0x4531f5();
                                  break;
                                case "claimTaskReward":
                                  await _0x4e2447();
                                  break;
                                case "friendGold":
                                  await _0x51d3e5();
                                  break;
                                case "autoTower":
                                  await _0xb6baf3();
                                  break;
                                case "autoBottle":
                                  await _0x32a825();
                                  break;
                                case "autoCollect":
                                  await _0x5d7dcf();
                                  break;
                                case "autoHarvest":
                                  await _0x4e60f0();
                                  break;
                                case "genieSweep":
                                  await _0x6d81e3();
                                  break;
                                case "buyTreasureBoxes":
                                  await _0x26d83e();
                                  break;
                                case "autoPurchase":
                                  await _0x49bc48();
                                  break;
                                case "evoEvoTower":
                                  await _0x47a8e3(_0x4f2b43._0x35bf3d || 3);
                                  break;
                              }
                              _0x2434d9(_0x4f2b43.name + " 完成", "success");
                              _0x34944c(_0x4f2b43.name + " 完成", "success");
                            }
                          } catch (_0x32899e) {
                            {
                              _0x2434d9(_0x4f2b43.name + " 失败: " + _0x32899e.message, "error");
                              _0x34944c(_0x4f2b43.name + " 失败", "error");
                            }
                          }
                        }
                      })();
                      _0x3fcc66.push(_0x52b6ff);
                      _0x52f9d9.push(_0x52b6ff);
                    }
                  });
                  await Promise.allSettled(_0x3fcc66);
                  const _0x11481e = _0x52f9d9.filter(_0x181d8a => _0x181d8a.status === "rejected").length;
                  _0x2434d9("所有选中任务执行完成", "summary");
                  _0x34944c("所有选中任务执行完成", "success");
                }
              } catch (_0x57dc8b) {
                _0x2434d9("任务执行异常: " + _0x57dc8b.message, "error");
                _0x34944c("任务执行异常", "error");
              } finally {
                {
                  if (!_0x404a7d._0x307300) {
                    {
                      _0x17457c.disabled = false;
                      _0x17457c.textContent = "执行选中任务";
                      _0x17457c.style.opacity = "1";
                      _0x404a7d._0x5c8544 = false;
                      if (_0x3f2737._0x32cfca) {
                        _0x3f2737._0x32cfca.disabled = true;
                      }
                      if (_0x3f2737._0x7eb530) {
                        _0x3f2737._0x7eb530.disabled = true;
                      }
                    }
                  }
                  _0x404a7d._0x4087b2 = _0x404a7d._0x4087b2.filter(_0x1bf6c8 => _0x1bf6c8 !== _0x16dc69);
                  if (_0x404a7d._0x4087b2.length === 0) {
                    {
                      _0x404a7d._0x5c8544 = false;
                      if (_0x3f2737._0x32cfca) {
                        _0x3f2737._0x32cfca.disabled = true;
                      }
                      if (_0x3f2737._0x7eb530) {
                        _0x3f2737._0x7eb530.disabled = true;
                      }
                    }
                  }
                }
              }
            }
          })();
          _0x404a7d._0x4087b2.push(_0x16dc69);
        }
      }, true);
      _0x4a56fc.style.width = "100%";
      _0x1e1a6d.appendChild(_0x4a56fc);
      const _0x2d321f = document.createElement("div");
      _0x2d321f.style.cssText = "\n            display: flex; gap: 6px; margin-top: 8px;\n        ";
      const _0x350f45 = _0x3bb623("暂停", () => _0x1a0854("dailyTask"), false);
      _0x350f45.style.flex = "1";
      _0x350f45.disabled = true;
      _0x3f2737._0x32cfca = _0x350f45;
      const _0x129fa2 = _0x3bb623("停止", _0x60218e, false);
      _0x129fa2.style.flex = "1";
      _0x129fa2.style.background = _0x264720._0x920bd8._0xc028f1.error;
      _0x129fa2.disabled = true;
      _0x3f2737._0x7eb530 = _0x129fa2;
      _0x2d321f.appendChild(_0x350f45);
      _0x2d321f.appendChild(_0x129fa2);
      _0x1e1a6d.appendChild(_0x2d321f);
      const _0x10b61c = document.createElement("div");
      _0x10b61c.style.cssText = "\n            display: flex; justify-content: space-between; margin-top: 6px;\n        ";
      const _0x36dbab = _0x3bb623("全选", () => {
        {
          Object.values(_0x451365._0x13930c).forEach(_0x3a4ac0 => {
            {
              _0x3a4ac0.enabled = true;
            }
          });
          document.querySelectorAll("#module-dailyTask input[type=\"checkbox\"]").forEach(_0x2397bc => {
            {
              _0x2397bc.checked = true;
            }
          });
          _0x34944c("已全选所有任务", "success");
        }
      }, false);
      _0x36dbab.style.padding = "3px 8px";
      _0x36dbab.style.fontSize = "10px";
      const _0x362374 = _0x3bb623("全不选", () => {
        {
          Object.values(_0x451365._0x13930c).forEach(_0x5af406 => {
            {
              _0x5af406.enabled = false;
            }
          });
          document.querySelectorAll("#module-dailyTask input[type=\"checkbox\"]").forEach(_0x5a7dda => {
            {
              _0x5a7dda.checked = false;
            }
          });
          _0x34944c("已取消所有任务", "info");
        }
      }, false);
      _0x362374.style.padding = "3px 8px";
      _0x362374.style.fontSize = "10px";
      _0x10b61c.appendChild(_0x36dbab);
      _0x10b61c.appendChild(_0x362374);
      _0x1e1a6d.appendChild(_0x10b61c);
      return _0x1e1a6d;
    }
  }
  function _0x2546ec() {
    {
      const _0x4e482c = document.createElement("div");
      _0x4e482c.id = "module-resource";
      _0x4e482c.className = "module-content";
      _0x4e482c.style.display = _0x264720._0x17c296 === "resource" ? "block" : "none";
      const _0x56cc80 = _0x264720._0x2c39fa.chest;
      const _0x4f3e0a = _0x264720._0x2c39fa.fishing;
      const _0x514fc0 = _0x264720._0x2c39fa.recruit;
      const _0x3d62ed = _0x264720._0x2c39fa.torch;
      const _0xb1a1c2 = document.createElement("div");
      _0xb1a1c2.style.cssText = "\n            font-size: 13px; font-weight: bold; color: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + ";\n            margin-bottom: 6px;\n        ";
      _0xb1a1c2.textContent = "资源批量处理（并行执行·火把支持999个）";
      _0x4e482c.appendChild(_0xb1a1c2);
      const _0x13d70a = document.createElement("div");
      _0x13d70a.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px; margin-bottom: 8px;\n        ";
      const _0x1923ad = document.createElement("div");
      _0x1923ad.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px;\n        ";
      _0x1923ad.textContent = "全局延迟（ms·任务内部轮次间隔）";
      const _0xed9ad6 = _0xcd3d0d("延迟", _0x264720._0x30f9a9);
      _0xed9ad6.type = "number";
      _0xed9ad6.min = 0;
      _0xed9ad6.addEventListener("change", () => {
        {
          _0x264720._0x30f9a9 = parseInt(_0xed9ad6.value) || 1000;
          _0xed9ad6.value = _0x264720._0x30f9a9;
          _0x2434d9("全局延迟：" + _0x264720._0x30f9a9 + "ms", "info");
        }
      });
      _0x13d70a.appendChild(_0x1923ad);
      _0x13d70a.appendChild(_0xed9ad6);
      _0x4e482c.appendChild(_0x13d70a);
      const _0x1081cc = document.createElement("div");
      _0x1081cc.style.cssText = "\n            display: grid; grid-template-columns: 1fr; gap: 6px;\n            margin-bottom: 8px;\n        ";
      const _0x134baa = document.createElement("div");
      _0x134baa.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px; padding-left: 4px;\n        ";
      _0x134baa.textContent = "宝箱&招募&钓鱼&火把";
      _0x1081cc.appendChild(_0x134baa);
      const _0x53f0bb = _0x11cae7(_0x5bf2dd.chest, _0x56cc80.type, _0x56cc80._0xb6fc81, _0x76c30 => _0x56cc80.type = parseInt(_0x76c30), _0x5486d8 => {
        _0x56cc80._0xb6fc81 = parseInt(_0x5486d8) || 0;
        _0x2434d9("宝箱：" + _0x56cc80._0xb6fc81 + "→" + Math.floor(_0x56cc80._0xb6fc81 / 10) + "次", "info");
      });
      _0x1081cc.appendChild(_0x53f0bb);
      const _0x3b3996 = _0x11cae7(_0x5bf2dd.fishing, _0x4f3e0a.type, _0x4f3e0a._0xb6fc81, _0xcd8b56 => _0x4f3e0a.type = parseInt(_0xcd8b56), _0x1dfe9a => {
        _0x4f3e0a._0xb6fc81 = parseInt(_0x1dfe9a) || 0;
        _0x2434d9("钓鱼：" + _0x4f3e0a._0xb6fc81 + "→" + Math.floor(_0x4f3e0a._0xb6fc81 / 10) + "次", "info");
      });
      _0x1081cc.appendChild(_0x3b3996);
      const _0x25f1b6 = _0x11cae7(_0x5bf2dd.recruit, _0x514fc0.type, _0x514fc0._0xb6fc81, _0x4dd293 => _0x514fc0.type = parseInt(_0x4dd293), _0x587878 => {
        _0x514fc0._0xb6fc81 = parseInt(_0x587878) || 0;
        _0x2434d9("招募：" + _0x514fc0._0xb6fc81 + "→" + Math.floor(_0x514fc0._0xb6fc81 / 10) + "次", "info");
      });
      _0x1081cc.appendChild(_0x25f1b6);
      const _0x4eb764 = _0x11cae7(_0x5bf2dd.torch, _0x3d62ed.type, _0x3d62ed._0xb6fc81, _0x1d923b => _0x3d62ed.type = parseInt(_0x1d923b), _0x5ab0e3 => {
        {
          _0x3d62ed._0xb6fc81 = parseInt(_0x5ab0e3) || 0;
          _0x2434d9("火把：" + _0x3d62ed._0xb6fc81 + "个", "info");
        }
      });
      _0x1081cc.appendChild(_0x4eb764);
      _0x4e482c.appendChild(_0x1081cc);
      const _0x10bcd0 = _0x3bb623("同时开始所有资源任务", async _0x5db2b2 => {
        {
          const _0x430933 = _0x5db2b2.target;
          _0x404a7d._0x35e0d0 = false;
          _0x404a7d._0x307300 = false;
          _0x404a7d._0x4087b2 = [];
          _0x404a7d._0x5c8544 = true;
          if (_0x3f2737._0x510082) {
            _0x3f2737._0x510082.disabled = false;
          }
          if (_0x3f2737._0x37d1e3) {
            _0x3f2737._0x37d1e3.disabled = false;
          }
          _0x430933.disabled = true;
          _0x430933.textContent = "并行执行中";
          _0x430933.style.opacity = "0.8";
          _0x3f2737._0x189233 = _0x430933;
          const _0x13954c = Math.floor(_0x56cc80._0xb6fc81 / 10);
          const _0xcad6e8 = Math.floor(_0x4f3e0a._0xb6fc81 / 10);
          const _0x3f5932 = Math.floor(_0x514fc0._0xb6fc81 / 10);
          const _0x1ad092 = _0x3d62ed._0xb6fc81 > 0 ? 1 : 0;
          if (_0x13954c === 0 && _0xcad6e8 === 0 && _0x3f5932 === 0 && _0x1ad092 === 0) {
            {
              _0x34944c("消耗需≥1", "error");
              _0x430933.disabled = false;
              _0x430933.textContent = "同时开始所有资源任务";
              _0x430933.style.opacity = "1";
              _0x404a7d._0x5c8544 = false;
              return;
            }
          }
          const _0x47c69c = [];
          if (_0x13954c > 0) {
            {
              const _0x1f104b = _0x8a67e9("chest", "宝箱", _0x56cc80, _0x13954c);
              _0x47c69c.push(_0x1f104b);
              _0x404a7d._0x4087b2.push(_0x1f104b);
            }
          }
          if (_0xcad6e8 > 0) {
            {
              const _0x5b9005 = _0x8a67e9("fishing", "钓鱼", _0x4f3e0a, _0xcad6e8);
              _0x47c69c.push(_0x5b9005);
              _0x404a7d._0x4087b2.push(_0x5b9005);
            }
          }
          if (_0x3f5932 > 0) {
            {
              const _0x182c4b = _0x8a67e9("recruit", "招募", _0x514fc0, _0x3f5932);
              _0x47c69c.push(_0x182c4b);
              _0x404a7d._0x4087b2.push(_0x182c4b);
            }
          }
          if (_0x1ad092 > 0) {
            {
              const _0x4a0cc4 = _0x50976f("torch", "火把", _0x3d62ed, _0x1ad092);
              _0x47c69c.push(_0x4a0cc4);
              _0x404a7d._0x4087b2.push(_0x4a0cc4);
            }
          }
          try {
            {
              _0x34944c("所有资源任务并行启动", "success");
              _0x2434d9("资源任务并行启动", "info");
              await Promise.all(_0x47c69c);
              _0x404a7d._0x4087b2 = _0x404a7d._0x4087b2.filter(_0x40195f => !_0x47c69c.includes(_0x40195f));
              if (_0x404a7d._0x4087b2.length === 0) {
                {
                  _0x404a7d._0x5c8544 = false;
                  if (_0x3f2737._0x510082) {
                    _0x3f2737._0x510082.disabled = true;
                  }
                  if (_0x3f2737._0x37d1e3) {
                    _0x3f2737._0x37d1e3.disabled = true;
                  }
                }
              }
              _0x34944c("所有资源任务并行完成", "success");
              _0x2434d9("所有资源任务并行完成", "summary");
            }
          } catch (_0x487807) {
            {
              _0x34944c("部分任务失败，查看日志", "error");
              _0x2434d9("部分任务异常：" + _0x487807.message, "error");
            }
          } finally {
            {
              if (!_0x404a7d._0x307300) {
                {
                  _0x430933.disabled = false;
                  _0x430933.textContent = "同时开始所有资源任务";
                  _0x430933.style.opacity = "1";
                  _0x404a7d._0x5c8544 = false;
                  if (_0x3f2737._0x510082) {
                    _0x3f2737._0x510082.disabled = true;
                  }
                  if (_0x3f2737._0x37d1e3) {
                    _0x3f2737._0x37d1e3.disabled = true;
                  }
                }
              }
            }
          }
        }
      }, true);
      _0x10bcd0.style.width = "100%";
      _0x4e482c.appendChild(_0x10bcd0);
      const _0x465518 = document.createElement("div");
      _0x465518.style.cssText = "\n            display: flex; gap: 6px; margin-top: 8px;\n        ";
      const _0x104929 = _0x3bb623("暂停", () => _0x1a0854("resource"), false);
      _0x104929.style.flex = "1";
      _0x104929.disabled = true;
      _0x3f2737._0x510082 = _0x104929;
      const _0x40bfaa = _0x3bb623("停止", _0x60218e, false);
      _0x40bfaa.style.flex = "1";
      _0x40bfaa.style.background = _0x264720._0x920bd8._0xc028f1.error;
      _0x40bfaa.disabled = true;
      _0x3f2737._0x37d1e3 = _0x40bfaa;
      _0x465518.appendChild(_0x104929);
      _0x465518.appendChild(_0x40bfaa);
      _0x4e482c.appendChild(_0x465518);
      return _0x4e482c;
    }
  }
  function _0x11cae7(_0x29f05b, _0x482865, _0x23836a, _0x545daa, _0x418061) {
    {
      const _0x1177f0 = document.createElement("div");
      _0x1177f0.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px;\n        ";
      const _0x23266f = document.createElement("div");
      _0x23266f.style.cssText = "\n            display: grid; grid-template-columns: 1fr 1fr; gap: 6px;\n        ";
      const _0x59cccb = document.createElement("div");
      _0x59cccb.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
      const _0x20b7bd = document.createElement("label");
      _0x20b7bd.textContent = "类型:";
      _0x20b7bd.style.cssText = "font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";";
      const _0x3995e7 = _0x49a7c1(_0x29f05b, _0x482865);
      _0x3995e7.addEventListener("change", () => _0x545daa(_0x3995e7.value));
      _0x59cccb.appendChild(_0x20b7bd);
      _0x59cccb.appendChild(_0x3995e7);
      _0x23266f.appendChild(_0x59cccb);
      const _0x528225 = document.createElement("div");
      _0x528225.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
      const _0x503273 = document.createElement("label");
      _0x503273.textContent = "消耗:";
      _0x503273.style.cssText = "font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";";
      const _0x48ae38 = _0xcd3d0d("数量", _0x23836a);
      _0x48ae38.type = "number";
      _0x48ae38.min = 0;
      _0x48ae38.max = 999;
      _0x48ae38.addEventListener("change", () => {
        {
          const _0x5d2e41 = parseInt(_0x48ae38.value) || 0;
          _0x48ae38.value = _0x5d2e41;
          _0x418061(_0x5d2e41);
        }
      });
      _0x528225.appendChild(_0x503273);
      _0x528225.appendChild(_0x48ae38);
      _0x23266f.appendChild(_0x528225);
      _0x1177f0.appendChild(_0x23266f);
      return _0x1177f0;
    }
  }
  function _0x59b644() {
    {
      const _0x1546a8 = document.createElement("div");
      _0x1546a8.id = "module-arenaStar";
      _0x1546a8.className = "module-content";
      _0x1546a8.style.display = _0x264720._0x17c296 === "arenaStar" ? "block" : "none";
      const _0x7fe894 = _0x264720._0x2c39fa._0x5b86bf;
      const _0x447f7c = _0x264720._0x2c39fa._0x4f946c;
      const _0x4dbad3 = document.createElement("div");
      _0x4dbad3.style.cssText = "\n            font-size: 13px; font-weight: bold; color: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + ";\n            margin-bottom: 6px;\n        ";
      _0x4dbad3.textContent = "竞技&升星";
      _0x1546a8.appendChild(_0x4dbad3);
      const _0xdbf570 = document.createElement("div");
      _0xdbf570.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px; margin-bottom: 6px;\n        ";
      const _0x4e4bc7 = document.createElement("div");
      _0x4e4bc7.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px;\n        ";
      _0x4e4bc7.textContent = "任务延迟（ms·竞技场&升星共用）";
      const _0x54bf12 = _0xcd3d0d("延迟", _0x264720._0x458322);
      _0x54bf12.type = "number";
      _0x54bf12.min = 0;
      _0x54bf12.addEventListener("change", () => {
        {
          _0x264720._0x458322 = parseInt(_0x54bf12.value) || 1200;
          _0x54bf12.value = _0x264720._0x458322;
          _0x2434d9("任务延迟：" + _0x264720._0x458322 + "ms", "info");
        }
      });
      _0xdbf570.appendChild(_0x4e4bc7);
      _0xdbf570.appendChild(_0x54bf12);
      _0x1546a8.appendChild(_0xdbf570);
      const _0x526158 = document.createElement("div");
      _0x526158.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px; margin-bottom: 6px;\n        ";
      const _0x2f209f = document.createElement("div");
      _0x2f209f.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px;\n        ";
      _0x2f209f.textContent = "竞技场";
      _0x526158.appendChild(_0x2f209f);
      const _0x45519e = document.createElement("div");
      _0x45519e.style.cssText = "\n            display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 4px;\n        ";
      const _0x34e303 = document.createElement("div");
      _0x34e303.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
      const _0x1ec86a = document.createElement("label");
      _0x1ec86a.textContent = "次数:";
      _0x1ec86a.style.cssText = "font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";";
      const _0x1fbe55 = _0xcd3d0d("次数", _0x7fe894.count);
      _0x1fbe55.type = "number";
      _0x1fbe55.min = 1;
      _0x1fbe55.max = 99;
      _0x1fbe55.addEventListener("change", () => _0x7fe894.count = parseInt(_0x1fbe55.value) || 3);
      _0x34e303.appendChild(_0x1ec86a);
      _0x34e303.appendChild(_0x1fbe55);
      _0x45519e.appendChild(_0x34e303);
      const _0x5376dc = document.createElement("div");
      _0x5376dc.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
      const _0x402014 = document.createElement("label");
      _0x402014.textContent = "目标ID:";
      _0x402014.style.cssText = "font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";";
      const _0x34e91a = _0xcd3d0d("ID", _0x7fe894._0x2840b0);
      _0x34e91a.type = "number";
      _0x34e91a.addEventListener("change", () => _0x7fe894._0x2840b0 = parseInt(_0x34e91a.value) || 0);
      _0x5376dc.appendChild(_0x402014);
      _0x5376dc.appendChild(_0x34e91a);
      _0x45519e.appendChild(_0x5376dc);
      _0x526158.appendChild(_0x45519e);
      const _0x44e798 = _0x3bb623("开始战斗");
      _0x44e798.style.width = "100%";
      _0x44e798.addEventListener("click", _0x880fe5 => {
        _0x3f2737._0x556d3e = _0x880fe5.target;
        _0x367852(_0x7fe894, _0x1fbe55, _0x34e91a, _0x880fe5);
      });
      _0x526158.appendChild(_0x44e798);
      _0x1546a8.appendChild(_0x526158);
      const _0x3ec408 = document.createElement("div");
      _0x3ec408.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px;\n        ";
      const _0x155734 = document.createElement("div");
      _0x155734.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px;\n        ";
      _0x155734.textContent = "升星";
      _0x3ec408.appendChild(_0x155734);
      const _0x57fcbb = _0x3bb623("开始升星");
      _0x57fcbb.style.width = "100%";
      _0x57fcbb.addEventListener("click", _0x424186 => {
        _0x3f2737._0x30a676 = _0x424186.target;
        _0x20de0a(_0x447f7c, _0x424186);
      });
      _0x3ec408.appendChild(_0x57fcbb);
      const _0x577b47 = document.createElement("div");
      _0x577b47.style.cssText = "\n            display: flex; gap: 6px; margin-top: 8px;\n        ";
      const _0x3118d7 = _0x3bb623("暂停", () => _0x1a0854("arenaStar"), false);
      _0x3118d7.style.flex = "1";
      _0x3118d7.disabled = true;
      _0x3f2737._0x30be67 = _0x3118d7;
      const _0x3501fc = _0x3bb623("停止", _0x60218e, false);
      _0x3501fc.style.flex = "1";
      _0x3501fc.style.background = _0x264720._0x920bd8._0xc028f1.error;
      _0x3501fc.disabled = true;
      _0x3f2737._0x1a6538 = _0x3501fc;
      _0x577b47.appendChild(_0x3118d7);
      _0x577b47.appendChild(_0x3501fc);
      _0x3ec408.appendChild(_0x577b47);
      _0x1546a8.appendChild(_0x3ec408);
      return _0x1546a8;
    }
  }
  function _0x2900f1() {
    {
      const _0x2f6956 = document.createElement("div");
      _0x2f6956.id = "module-vehicle";
      _0x2f6956.className = "module-content";
      _0x2f6956.style.display = _0x264720._0x17c296 === "vehicle" ? "block" : "none";
      const _0x4253d1 = document.createElement("div");
      _0x4253d1.style.cssText = "\n            font-size: 13px; font-weight: bold; color: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + ";\n            margin-bottom: 6px;\n        ";
      _0x4253d1.textContent = "车辆助手";
      _0x2f6956.appendChild(_0x4253d1);
      const _0x3b0d60 = document.createElement("div");
      _0x3b0d60.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px; margin-bottom: 8px;\n        ";
      const _0x434f12 = document.createElement("div");
      _0x434f12.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px;\n        ";
      _0x434f12.textContent = "俱乐部车辆功能";
      _0x3b0d60.appendChild(_0x434f12);
      const _0x4ed815 = _0x3bb623("查询俱乐部车辆", async () => {
        {
          await _0xadad30();
        }
      }, true);
      _0x4ed815.style.width = "100%";
      _0x4ed815.style.marginBottom = "8px";
      _0x3b0d60.appendChild(_0x4ed815);
      const _0x1a7c63 = document.createElement("div");
      _0x1a7c63.style.cssText = "\n            display: grid; grid-template-columns: 1fr; gap: 4px;\n            margin-bottom: 8px;\n        ";
      const _0x1b96dc = [];
      for (let _0x3d6c0b = 0; _0x3d6c0b < 4; _0x3d6c0b++) {
        {
          const _0x1e15e8 = document.createElement("div");
          _0x1e15e8.style.cssText = "display: flex; align-items: center; gap: 6px;";
          const _0x3a5a83 = document.createElement("span");
          _0x3a5a83.textContent = "车辆" + (_0x3d6c0b + 1) + ":";
          _0x3a5a83.style.cssText = "font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1._0x542524 + "; width: 50px;";
          const _0x43c729 = _0xcd3d0d("车辆ID", "");
          _0x43c729.id = "vehicle-car-id-" + _0x3d6c0b;
          _0x1e15e8.appendChild(_0x3a5a83);
          _0x1e15e8.appendChild(_0x43c729);
          _0x1a7c63.appendChild(_0x1e15e8);
          _0x1b96dc.push(_0x43c729);
        }
      }
      _0x3b0d60.appendChild(_0x1a7c63);
      const _0x351ffd = document.createElement("div");
      _0x351ffd.style.cssText = "display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 8px;";
      const _0x186b22 = _0x3bb623("发送所有车辆", async () => {
        {
          const _0xb24da = _0x1b96dc.map(_0x5c98b6 => _0x5c98b6.value.trim()).filter(_0x302d07 => _0x302d07);
          if (_0xb24da.length === 0) {
            {
              _0x34944c("没有可发送的车辆ID", "warning");
              return;
            }
          }
          _0x34944c("准备发送 " + _0xb24da.length + " 辆车辆", "info");
          _0x2434d9("开始批量发送 " + _0xb24da.length + " 辆车辆", "info");
          for (const [_0x4139a8, _0x2f11a1] of _0xb24da.entries()) {
            {
              _0x34944c("正在发送第 " + (_0x4139a8 + 1) + "/" + _0xb24da.length + " 辆", "info", _0x4139a8 + 1 + "/" + _0xb24da.length);
              await _0x402f2b(_0x2f11a1);
              _0x4139a8 < _0xb24da.length - 1 && (await new Promise(_0x5de6b7 => setTimeout(_0x5de6b7, 1000)));
            }
          }
          _0x34944c("已完成 " + _0xb24da.length + " 辆车辆发送", "success");
          _0x2434d9("批量发送完成，共发送 " + _0xb24da.length + " 辆车辆", "success");
        }
      });
      const _0x459c76 = _0x3bb623("收获所有车辆", async () => {
        {
          const _0xb4dc9e = _0x1b96dc.map(_0x6d2c9c => _0x6d2c9c.value.trim()).filter(_0x1aea4f => _0x1aea4f);
          if (_0xb4dc9e.length === 0) {
            {
              _0x34944c("没有可收获的车辆ID", "warning");
              return;
            }
          }
          _0x34944c("准备收获 " + _0xb4dc9e.length + " 辆车辆", "info");
          _0x2434d9("开始批量收获 " + _0xb4dc9e.length + " 辆车辆", "info");
          for (const [_0x50dabb, _0x40dfd5] of _0xb4dc9e.entries()) {
            {
              _0x34944c("正在收获第 " + (_0x50dabb + 1) + "/" + _0xb4dc9e.length + " 辆", "info", _0x50dabb + 1 + "/" + _0xb4dc9e.length);
              await _0x20833c(_0x40dfd5);
              _0x50dabb < _0xb4dc9e.length - 1 && (await new Promise(_0x1149af => setTimeout(_0x1149af, 1000)));
            }
          }
          _0x34944c("已完成 " + _0xb4dc9e.length + " 辆车辆收获", "success");
          _0x2434d9("批量收获完成，共收获 " + _0xb4dc9e.length + " 辆车辆", "success");
        }
      });
      _0x351ffd.appendChild(_0x186b22);
      _0x351ffd.appendChild(_0x459c76);
      _0x3b0d60.appendChild(_0x351ffd);
      _0x2f6956.appendChild(_0x3b0d60);
      const _0x49115f = document.createElement("div");
      _0x49115f.style.cssText = "\n            background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "20; padding: 6px;\n            border-radius: 6px; margin-bottom: 8px;\n        ";
      const _0x4dea91 = document.createElement("div");
      _0x4dea91.style.cssText = "\n            font-size: 11px; font-weight: 500; color: " + _0x264720._0x920bd8._0xc028f1.warning + ";\n            margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;\n        ";
      _0x4dea91.innerHTML = "<span>车辆信息与奖励</span>";
      const _0x1710f1 = _0x3bb623("复制所有ID", () => {
        {
          const _0x523f7b = _0x455630._0x453704.map(_0x5b826a => _0x5b826a._0x211d75).join("\n");
          _0x479f7c(_0x523f7b, "已复制所有车辆ID");
        }
      });
      _0x1710f1.style.padding = "3px 8px";
      _0x1710f1.style.fontSize = "10px";
      _0x4dea91.appendChild(_0x1710f1);
      _0x49115f.appendChild(_0x4dea91);
      const _0x3b3b46 = document.createElement("div");
      _0x3b3b46.id = "vehicle-car-data-container";
      _0x3b3b46.style.cssText = "\n            max-height: 150px; overflow-y: auto; background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + ";\n            border-radius: 4px; padding: 4px; font-size: 10px;\n        ";
      _0x49115f.appendChild(_0x3b3b46);
      _0x2f6956.appendChild(_0x49115f);
      return _0x2f6956;
    }
  }
  async function _0x8a67e9(_0x1ab1f4, _0x46bc33, _0x9cc0ac, _0x5bed5b) {
    {
      const _0x4c1a24 = _0x5bf2dd[_0x1ab1f4][_0x9cc0ac.type];
      if (!_0x4c1a24) {
        throw new Error("无效" + _0x46bc33 + "类型");
      }
      if (!window._0x2d1cd4 || !window._0x2d1cd4._0x514853) {
        throw new Error("无WebSocket");
      }
      const _0x450ff7 = 10;
      const _0x4adeff = _0x5bed5b * _0x450ff7;
      _0x2434d9(_0x4c1a24.name + "：并行启动（" + _0x5bed5b + "次·" + _0x4adeff + "个）", "info");
      let _0x56557e = 0;
      try {
        {
          for (let _0x36c34d = 1; _0x36c34d <= _0x5bed5b; _0x36c34d++) {
            {
              await _0x30f4f7(_0x4c1a24.name);
              const _0x4b5301 = _0x4c1a24.name + " #" + _0x36c34d + "/" + _0x5bed5b;
              try {
                {
                  const _0x51ab55 = _0x4c1a24._0x22a6fe(_0x450ff7);
                  const _0x3e8a37 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                    _0x31732a: 0,
                    body: window._0x3045db._0x394b13.encode(_0x51ab55),
                    _0x11303c: _0x4c1a24._0x11303c,
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  } : {
                    _0x31732a: 0,
                    _0x11303c: _0x4c1a24._0x11303c,
                    _0x22a6fe: _0x51ab55,
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  };
                  const _0xe3b3d1 = await window._0x2d1cd4._0x514853(_0x3e8a37);
                  const _0x3cdc47 = (_0xe3b3d1?.["code"] === 0 || _0xe3b3d1?.["_0x31732a"] === 0 || !_0xe3b3d1?.["code"] && !_0xe3b3d1?.["_0x31732a"]) && !_0xe3b3d1?.["_0x21d09a"]?.["error"];
                  if (_0x3cdc47) {
                    _0x2434d9(_0x4c1a24.name + "成功", "success", _0x4b5301);
                    _0x56557e++;
                  } else {
                    {
                      throw new Error("码：" + (_0xe3b3d1?.["code"] || _0xe3b3d1?.["_0x31732a"] || "未知"));
                    }
                  }
                }
              } catch (_0x320b29) {
                {
                  _0x2434d9("失败：" + _0x320b29.message, "error", _0x4b5301);
                  continue;
                }
              }
              if (_0x36c34d < _0x5bed5b) {
                await new Promise(_0x188c74 => setTimeout(_0x188c74, _0x264720._0x30f9a9));
              }
            }
          }
          const _0xad8972 = _0x4c1a24.name + "：" + _0x56557e + "/" + _0x5bed5b + "次（" + _0x56557e * _0x450ff7 + "个）";
          _0x2434d9(_0xad8972, "summary");
          _0x34944c(_0xad8972, "success");
          return _0xad8972;
        }
      } catch (_0xded315) {
        {
          _0x2434d9(_0x4c1a24.name + "中断：" + _0xded315.message, "error");
          throw _0xded315;
        }
      }
    }
  }
  async function _0x50976f(_0x48c86d, _0x141a73, _0x223c1a, _0x4d2808) {
    {
      const _0x25db0e = _0x5bf2dd[_0x48c86d][_0x223c1a.type];
      if (!_0x25db0e) {
        throw new Error("无效" + _0x141a73 + "类型");
      }
      if (!window._0x2d1cd4 || !window._0x2d1cd4._0x514853) {
        throw new Error("无WebSocket");
      }
      const _0x34b4c5 = _0x223c1a._0xb6fc81;
      _0x2434d9(_0x25db0e.name + "：启动（" + _0x34b4c5 + "个）", "info");
      try {
        {
          await _0x30f4f7(_0x25db0e.name);
          const _0x209525 = _0x25db0e._0x22a6fe(_0x34b4c5);
          const _0x5e118e = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
            _0x31732a: 0,
            body: window._0x3045db._0x394b13.encode(_0x209525),
            _0x11303c: _0x25db0e._0x11303c,
            _0xa5fe37: Date.now(),
            time: Date.now()
          } : {
            _0x31732a: 0,
            _0x11303c: _0x25db0e._0x11303c,
            _0x22a6fe: _0x209525,
            _0xa5fe37: Date.now(),
            time: Date.now()
          };
          const _0x428a25 = await window._0x2d1cd4._0x514853(_0x5e118e);
          const _0x379d5a = (_0x428a25?.["code"] === 0 || _0x428a25?.["_0x31732a"] === 0 || !_0x428a25?.["code"] && !_0x428a25?.["_0x31732a"]) && !_0x428a25?.["_0x21d09a"]?.["error"];
          if (_0x379d5a) {
            {
              _0x2434d9(_0x25db0e.name + "成功使用" + _0x34b4c5 + "个", "success");
              _0x34944c(_0x25db0e.name + "使用成功", "success");
              return _0x25db0e.name + "：" + _0x34b4c5 + "个";
            }
          } else {
            {
              throw new Error("码：" + (_0x428a25?.["code"] || _0x428a25?.["_0x31732a"] || "未知"));
            }
          }
        }
      } catch (_0x589a38) {
        {
          _0x2434d9(_0x25db0e.name + "失败：" + _0x589a38.message, "error");
          throw _0x589a38;
        }
      }
    }
  }
  async function _0x3a57ae() {
    {
      return new Promise((_0x2684cd, _0x4e6ce1) => {
        {
          const _0x1e7fea = "https://xxz-xyzw.hortorgames.com/login/manifest?platform=hortor&version=0.30.0-android";
          GM_xmlhttpRequest({
            method: "POST",
            url: _0x1e7fea,
            headers: {
              _0x3add0a: "application/x-www-form-urlencoded"
            },
            onload: function (_0x4ebf70) {
              {
                try {
                  {
                    if (_0x4ebf70.status === 200) {
                      {
                        const _0x1c6219 = JSON.parse(_0x4ebf70.responseText);
                        if (_0x1c6219._0x3dd4b3) {
                          {
                            _0x264720._0x3dd4b3 = _0x1c6219._0x3dd4b3;
                            _0x2434d9("成功获取战斗版本: " + _0x264720._0x3dd4b3, "success");
                            _0x2684cd(_0x264720._0x3dd4b3);
                          }
                        } else {
                          _0x2434d9("获取battleVersion失败，使用默认值", "warning");
                          _0x2684cd(_0x264720._0x3dd4b3);
                        }
                      }
                    } else {
                      {
                        _0x2434d9("获取battleVersion失败，状态码: " + _0x4ebf70.status + "，使用默认值", "warning");
                        _0x2684cd(_0x264720._0x3dd4b3);
                      }
                    }
                  }
                } catch (_0x349bad) {
                  _0x2434d9("解析battleVersion失败: " + _0x349bad.message + "，使用默认值", "warning");
                  _0x2684cd(_0x264720._0x3dd4b3);
                }
              }
            },
            onerror: function (_0x2dd80f) {
              {
                _0x2434d9("获取battleVersion请求失败: " + _0x2dd80f + "，使用默认值", "warning");
                _0x2684cd(_0x264720._0x3dd4b3);
              }
            },
            timeout: 5000
          });
        }
      });
    }
  }
  async function _0x367852(_0xc4a8bd, _0xf0fdee, _0x167c99, _0x373d1b) {
    {
      const _0xca9aab = parseInt(_0xf0fdee.value) || 3;
      const _0x46dc01 = parseInt(_0x167c99.value) || 0;
      const _0x2b13fd = _0x264720._0x458322;
      if (_0xca9aab < 1 || _0xca9aab > 1000) {
        {
          _0x34944c("次数1-1000", "error");
          return;
        }
      }
      if (!window._0x2d1cd4 || !window._0x2d1cd4._0x514853) {
        {
          _0x34944c("无WebSocket", "error");
          _0x2434d9("无WebSocket", "error");
          return;
        }
      }
      if (!confirm("竞技场" + _0xca9aab + "轮（ID：" + _0x46dc01 + "）？")) {
        return;
      }
      _0x404a7d._0x35e0d0 = false;
      _0x404a7d._0x307300 = false;
      _0x404a7d._0x5c8544 = true;
      _0x404a7d._0x4087b2 = [];
      if (_0x3f2737._0x30be67) {
        _0x3f2737._0x30be67.disabled = false;
      }
      if (_0x3f2737._0x1a6538) {
        _0x3f2737._0x1a6538.disabled = false;
      }
      const _0x3a1483 = _0x373d1b.target;
      _0x3a1483.disabled = true;
      _0x3a1483.textContent = "执行中";
      _0x3a1483.style.opacity = "0.8";
      _0x3f2737._0x556d3e = _0x3a1483;
      const _0x3bc7f3 = (async () => {
        {
          _0x34944c("竞技场" + _0xca9aab + "轮", "success");
          _0x2434d9("竞技场：" + _0xca9aab + "轮，ID" + _0x46dc01 + "，延迟" + _0x2b13fd + "ms");
          let _0x48c2d5 = 0;
          try {
            {
              for (let _0xbbd615 = 1; _0xbbd615 <= _0xca9aab; _0xbbd615++) {
                {
                  await _0x30f4f7("竞技场");
                  const _0x10fab4 = "#" + _0xbbd615 + "/" + _0xca9aab;
                  _0x2434d9("===== " + _0x10fab4 + " =====", "info");
                  const _0x162145 = {
                    refresh: false
                  };
                  const _0x1fd1fc = {
                    refresh: false
                  };
                  const _0x37fb97 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                    _0x31732a: 0,
                    body: window._0x3045db._0x394b13.encode(_0x162145),
                    _0x11303c: "arena_getareatarget",
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  } : {
                    _0x31732a: 0,
                    _0x11303c: "arena_getareatarget",
                    _0x22a6fe: _0x1fd1fc,
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  };
                  const _0x5077db = await window._0x2d1cd4._0x514853(_0x37fb97);
                  const _0xdceb1e = _0x5077db?.["_0x1ce45c"]?.["_0x9aec2f"]?.[0]?.["_0x3258a7"];
                  if (!_0xdceb1e) {
                    throw new Error("无角色ID");
                  }
                  _0x2434d9("获ID：" + _0xdceb1e, "success", _0x10fab4);
                  const _0x2ca265 = _0x264720._0x3dd4b3;
                  const _0x52f891 = {
                    _0x2840b0: _0xdceb1e
                  };
                  const _0x362859 = {
                    _0x2840b0: _0xdceb1e,
                    _0x3dd4b3: _0x2ca265
                  };
                  const _0x540b83 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                    _0x31732a: 0,
                    body: window._0x3045db._0x394b13.encode(_0x52f891),
                    _0x11303c: "fight_startareaarena",
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  } : {
                    _0x31732a: 0,
                    _0x11303c: "fight_startareaarena",
                    _0x22a6fe: _0x362859,
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  };
                  const _0x236d9a = await window._0x2d1cd4._0x514853(_0x540b83);
                  if (_0x236d9a?.["code"] !== 0) {
                    throw new Error("码：" + (_0x236d9a?.["code"] || "未知"));
                  }
                  _0x2434d9("战斗成功", "success", _0x10fab4);
                  const _0x5dc5f6 = {
                    _0x5c6723: 0
                  };
                  const _0xd1ec4e = {
                    _0x5c6723: 0
                  };
                  const _0x317029 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                    _0x31732a: 0,
                    body: window._0x3045db._0x394b13.encode(_0x5dc5f6),
                    _0x11303c: "arena_getarearank",
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  } : {
                    _0x31732a: 0,
                    _0x11303c: "arena_getarearank",
                    _0x22a6fe: _0xd1ec4e,
                    _0xa5fe37: Date.now(),
                    time: Date.now()
                  };
                  await window._0x2d1cd4._0x514853(_0x317029);
                  _0x2434d9("获排名", "success", _0x10fab4);
                  _0x48c2d5++;
                  if (_0xbbd615 < _0xca9aab) {
                    await new Promise(_0x52ea0e => setTimeout(_0x52ea0e, _0x2b13fd));
                  }
                }
              }
              const _0x4f2945 = "竞技场：" + _0x48c2d5 + "/" + _0xca9aab + "轮";
              _0x2434d9(_0x4f2945, "summary");
              _0x34944c(_0x4f2945, "success");
            }
          } catch (_0x1137dd) {
            {
              _0x2434d9("失败：" + _0x1137dd.message, "error");
              _0x34944c("失败：" + _0x1137dd.message, "error");
            }
          } finally {
            {
              if (!_0x404a7d._0x307300) {
                {
                  _0x3a1483.disabled = false;
                  _0x3a1483.textContent = "开始战斗";
                  _0x3a1483.style.opacity = "1";
                  _0x404a7d._0x5c8544 = false;
                  if (_0x3f2737._0x30be67) {
                    _0x3f2737._0x30be67.disabled = true;
                  }
                  if (_0x3f2737._0x1a6538) {
                    _0x3f2737._0x1a6538.disabled = true;
                  }
                }
              }
              _0x404a7d._0x4087b2 = _0x404a7d._0x4087b2.filter(_0x38624a => _0x38624a !== _0x3bc7f3);
              if (_0x404a7d._0x4087b2.length === 0) {
                {
                  _0x404a7d._0x5c8544 = false;
                  if (_0x3f2737._0x30be67) {
                    _0x3f2737._0x30be67.disabled = true;
                  }
                  if (_0x3f2737._0x1a6538) {
                    _0x3f2737._0x1a6538.disabled = true;
                  }
                }
              }
            }
          }
        }
      })();
      _0x404a7d._0x4087b2.push(_0x3bc7f3);
    }
  }
  async function _0x20de0a(_0x29e93e, _0x47d9d4) {
    {
      const _0x4c4758 = _0x264720._0x458322;
      const _0x587373 = {
        length: 20
      };
      const _0xf239d8 = {
        length: 28
      };
      const _0x533650 = {
        length: 14
      };
      const _0x2b716b = [...Array.from(_0x587373, (_0x21550a, _0x4bc534) => 101 + _0x4bc534), ...Array.from(_0xf239d8, (_0x5b829a, _0x47af35) => 201 + _0x47af35), ...Array.from(_0x533650, (_0xd5606c, _0x3ac19e) => 301 + _0x3ac19e)];
      if (!window._0x2d1cd4 || !window._0x2d1cd4._0x514853) {
        {
          _0x34944c("无WebSocket", "error");
          _0x2434d9("无WebSocket", "error");
          return;
        }
      }
      if (!confirm("升星所有英雄（每步10次）？")) {
        return;
      }
      _0x404a7d._0x35e0d0 = false;
      _0x404a7d._0x307300 = false;
      _0x404a7d._0x5c8544 = true;
      _0x404a7d._0x4087b2 = [];
      if (_0x3f2737._0x30be67) {
        _0x3f2737._0x30be67.disabled = false;
      }
      if (_0x3f2737._0x1a6538) {
        _0x3f2737._0x1a6538.disabled = false;
      }
      const _0x7b70db = _0x47d9d4.target;
      _0x7b70db.disabled = true;
      _0x7b70db.textContent = "执行中";
      _0x7b70db.style.opacity = "0.8";
      _0x3f2737._0x30a676 = _0x7b70db;
      const _0x467c82 = (async () => {
        {
          _0x34944c("开始升星", "success");
          _0x2434d9("升星启动");
          try {
            {
              for (const _0x4be02d of _0x2b716b) {
                {
                  await _0x30f4f7("升星");
                  let _0x5164e1 = false;
                  for (let _0x22ba7a = 1; _0x22ba7a <= 10; _0x22ba7a++) {
                    {
                      await _0x30f4f7("升星(英雄" + _0x4be02d + ")");
                      try {
                        {
                          const _0x3dd6de = {
                            _0xe862c2: _0x4be02d
                          };
                          const _0x1cb912 = {
                            _0xe862c2: _0x4be02d
                          };
                          const _0x33b648 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                            _0x31732a: 0,
                            body: window._0x3045db._0x394b13.encode(_0x3dd6de),
                            _0x11303c: "hero_heroupgradestar",
                            _0xa5fe37: Date.now(),
                            time: Date.now()
                          } : {
                            _0x31732a: 0,
                            _0x11303c: "hero_heroupgradestar",
                            _0x22a6fe: _0x1cb912,
                            _0xa5fe37: Date.now(),
                            time: Date.now()
                          };
                          const _0x1a35a5 = await window._0x2d1cd4._0x514853(_0x33b648);
                          if (_0x1a35a5?.["code"] !== 0) {
                            throw new Error("失败");
                          }
                          _0x2434d9("英雄" + _0x4be02d + " #" + _0x22ba7a, "success");
                        }
                      } catch (_0x423703) {
                        {
                          _0x2434d9("英雄" + _0x4be02d + " #" + _0x22ba7a + "失败", "error");
                          _0x5164e1 = true;
                          break;
                        }
                      }
                      await new Promise(_0x5c0908 => setTimeout(_0x5c0908, _0x4c4758));
                    }
                  }
                  if (_0x5164e1) {
                    continue;
                  }
                }
              }
              _0x2434d9("英雄升星完", "success");
              _0x34944c("英雄升星完", "success");
              for (const _0x3d6c05 of _0x2b716b) {
                {
                  await _0x30f4f7("图鉴升星");
                  let _0x2c7f02 = false;
                  for (let _0x231334 = 1; _0x231334 <= 10; _0x231334++) {
                    {
                      await _0x30f4f7("图鉴升星(英雄" + _0x3d6c05 + ")");
                      try {
                        {
                          const _0x30bdba = {
                            _0xe862c2: _0x3d6c05
                          };
                          const _0x3d2da4 = {
                            _0xe862c2: _0x3d6c05
                          };
                          const _0x2530f9 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                            _0x31732a: 0,
                            body: window._0x3045db._0x394b13.encode(_0x30bdba),
                            _0x11303c: "book_upgrade",
                            _0xa5fe37: Date.now(),
                            time: Date.now()
                          } : {
                            _0x31732a: 0,
                            _0x11303c: "book_upgrade",
                            _0x22a6fe: _0x3d2da4,
                            _0xa5fe37: Date.now(),
                            time: Date.now()
                          };
                          const _0x47d731 = await window._0x2d1cd4._0x514853(_0x2530f9);
                          if (_0x47d731?.["code"] !== 0) {
                            throw new Error("失败");
                          }
                          _0x2434d9("图鉴" + _0x3d6c05 + " #" + _0x231334, "success");
                        }
                      } catch (_0x3b2e03) {
                        {
                          _0x2434d9("图鉴" + _0x3d6c05 + " #" + _0x231334 + "失败", "error");
                          _0x2c7f02 = true;
                          break;
                        }
                      }
                      await new Promise(_0x5c8d75 => setTimeout(_0x5c8d75, _0x4c4758));
                    }
                  }
                  if (_0x2c7f02) {
                    continue;
                  }
                }
              }
              _0x2434d9("图鉴升星完", "success");
              _0x34944c("图鉴升星完", "success");
              for (let _0x123379 = 1; _0x123379 <= 10; _0x123379++) {
                {
                  await _0x30f4f7("领升星奖励");
                  try {
                    {
                      const _0x443a84 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
                        _0x31732a: 0,
                        body: window._0x3045db._0x394b13.encode({}),
                        _0x11303c: "book_claimpointreward",
                        _0xa5fe37: Date.now(),
                        time: Date.now()
                      } : {
                        _0x31732a: 0,
                        _0x11303c: "book_claimpointreward",
                        _0x22a6fe: {},
                        _0xa5fe37: Date.now(),
                        time: Date.now()
                      };
                      const _0x50da82 = await window._0x2d1cd4._0x514853(_0x443a84);
                      if (_0x50da82?.["code"] !== 0) {
                        throw new Error("失败");
                      }
                      _0x2434d9("领奖#" + _0x123379, "success");
                    }
                  } catch (_0x5a906d) {
                    {
                      _0x2434d9("领奖#" + _0x123379 + "失败", "error");
                      break;
                    }
                  }
                  await new Promise(_0xe9b31b => setTimeout(_0xe9b31b, _0x4c4758));
                }
              }
              _0x34944c("升星完", "success");
              _0x2434d9("升星完", "summary");
            }
          } catch (_0x2f8d7e) {
            _0x2434d9("升星失败：" + _0x2f8d7e.message, "error");
            _0x34944c("失败：" + _0x2f8d7e.message, "error");
          } finally {
            {
              if (!_0x404a7d._0x307300) {
                {
                  _0x7b70db.disabled = false;
                  _0x7b70db.textContent = "开始升星";
                  _0x7b70db.style.opacity = "1";
                  _0x404a7d._0x5c8544 = false;
                  if (_0x3f2737._0x30be67) {
                    _0x3f2737._0x30be67.disabled = true;
                  }
                  if (_0x3f2737._0x1a6538) {
                    _0x3f2737._0x1a6538.disabled = true;
                  }
                }
              }
              _0x404a7d._0x4087b2 = _0x404a7d._0x4087b2.filter(_0x3eb4d5 => _0x3eb4d5 !== _0x467c82);
              if (_0x404a7d._0x4087b2.length === 0) {
                {
                  _0x404a7d._0x5c8544 = false;
                  if (_0x3f2737._0x30be67) {
                    _0x3f2737._0x30be67.disabled = true;
                  }
                  if (_0x3f2737._0x1a6538) {
                    _0x3f2737._0x1a6538.disabled = true;
                  }
                }
              }
            }
          }
        }
      })();
      _0x404a7d._0x4087b2.push(_0x467c82);
    }
  }
  function _0x1b4c30() {
    {
      if (!window._0x2d1cd4 || typeof window._0x2d1cd4._0x514853 !== "function") {
        {
          _0x34944c("错误：未找到可用的WebSocket连接", "error");
          return false;
        }
      }
      return true;
    }
  }
  async function _0x25a59f(_0x27e121, _0x48a54b = {}) {
    {
      if (!_0x1b4c30()) {
        return null;
      }
      try {
        {
          const _0x36377e = _0x455630._0x260cd6++;
          const _0x3aeff8 = Date.now();
          const _0x112704 = {
            _0x31732a: 0,
            _0x11303c: _0x27e121,
            _0x22a6fe: _0x48a54b,
            _0xa5fe37: _0x36377e,
            time: _0x3aeff8
          };
          _0x2434d9("发送命令[" + _0x36377e + "]: " + _0x27e121, "info");
          const _0x24464d = await window._0x2d1cd4._0x514853(_0x112704);
          _0x455630._0x5c1976 = _0x24464d;
          if (_0x24464d.code === 0) {
            {
              _0x2434d9("命令成功[" + _0x36377e + "]: " + _0x27e121, "success");
            }
          } else {
            {
              _0x2434d9("命令失败[" + _0x36377e + ", 错误码: " + _0x24464d.code + "]: " + _0x27e121, "error");
            }
          }
          return _0x24464d;
        }
      } catch (_0x2273b1) {
        {
          _0x2434d9("命令出错: " + _0x27e121 + " - " + _0x2273b1.message, "error");
          return null;
        }
      }
    }
  }
  function _0x479f7c(_0x1da04e, _0x10f413) {
    {
      navigator.clipboard.writeText(_0x1da04e).then(() => {
        _0x34944c(_0x10f413 || "复制成功", "success");
      }).catch(_0x11df69 => {
        {
          _0x34944c("复制失败，请手动复制", "error");
          _0x2434d9("复制失败: " + _0x11df69.message, "error");
        }
      });
    }
  }
  function _0x7413e1(_0x47d704) {
    {
      if (!_0x47d704 || !Array.isArray(_0x47d704)) {
        {
          return [];
        }
      }
      const _0x3822b6 = {
        name: "金砖",
        count: 0
      };
      const _0x56cd33 = {
        name: "金砖",
        count: 0
      };
      const _0x301e9a = {
        name: "招募令",
        count: 0
      };
      const _0x35dcd2 = {
        name: "刷新票",
        count: 0
      };
      const _0x477f65 = {
        name: "彩玉",
        count: 0
      };
      const _0x4601ff = {
        name: "白玉",
        count: 0
      };
      const _0x53f335 = {
        _0x182c45: _0x3822b6,
        _0x4c1b5f: _0x56cd33,
        _0xcada3e: _0x301e9a,
        _0x57b677: _0x35dcd2,
        _0x31046d: _0x477f65,
        _0x281e8a: _0x4601ff
      };
      _0x47d704.forEach(_0x2e9740 => {
        {
          if (_0x2e9740.itemId === 0) {
            {
              if (_0x2e9740.type === 2) {
                _0x53f335._0x182c45.count += _0x2e9740.value || 0;
              } else {
                _0x2e9740.type === 0 && (_0x53f335._0x4c1b5f.count += _0x2e9740.value || 0);
              }
            }
          } else {
            if (_0x2e9740.itemId === 1001 && _0x2e9740.type === 3) {
              _0x53f335._0xcada3e.count += _0x2e9740.value || 0;
            } else {
              if (_0x2e9740.itemId === 35002 && _0x2e9740.type === 3) {
                _0x53f335._0x57b677.count += _0x2e9740.value || 0;
              } else {
                if (_0x2e9740.itemId === 1023 && _0x2e9740.type === 3) {
                  _0x53f335._0x31046d.count += _0x2e9740.value || 0;
                } else {
                  _0x2e9740.itemId === 1022 && _0x2e9740.type === 3 && (_0x53f335._0x281e8a.count += _0x2e9740.value || 0);
                }
              }
            }
          }
        }
      });
      const _0x2f469d = _0x53f335._0x182c45.count + _0x53f335._0x4c1b5f.count;
      const _0x412eca = [];
      _0x2f469d > 0 && _0x412eca.push(_0x53f335._0x182c45.name + ":" + _0x2f469d);
      if (_0x53f335._0xcada3e.count > 0) {
        {
          _0x412eca.push(_0x53f335._0xcada3e.name + ":" + _0x53f335._0xcada3e.count);
        }
      }
      _0x53f335._0x57b677.count > 0 && _0x412eca.push(_0x53f335._0x57b677.name + ":" + _0x53f335._0x57b677.count);
      _0x53f335._0x31046d.count > 0 && _0x412eca.push(_0x53f335._0x31046d.name + ":" + _0x53f335._0x31046d.count);
      _0x53f335._0x281e8a.count > 0 && _0x412eca.push(_0x53f335._0x281e8a.name + ":" + _0x53f335._0x281e8a.count);
      return _0x412eca;
    }
  }
  function _0x141836(_0x7ea66c) {
    {
      const _0x44a349 = {
        "1": "绿色(普通)",
        "2": "蓝色(精致)",
        "3": "紫色(卓越)",
        "4": "橙色(传说)",
        "5": "红色(神话)",
        "6": "金色(传说)"
      };
      return _0x44a349[_0x7ea66c] || "未知品质";
    }
  }
  function _0x53b2af() {
    {
      const _0x50ab79 = document.getElementById("vehicle-car-data-container");
      if (!_0x50ab79) {
        return;
      }
      _0x50ab79.innerHTML = "";
      if (_0x455630._0x453704.length === 0) {
        {
          _0x50ab79.innerHTML = "<div style=\"text-align:center; padding:10px; color:#94a3b8; font-size:10px;\">暂无车辆数据，请先查询</div>";
          return;
        }
      }
      const _0x2c5e59 = document.createElement("table");
      _0x2c5e59.style.cssText = "\n            width: 100%; border-collapse: collapse; font-size: 9px;\n            color: " + _0x264720._0x920bd8._0xc028f1.text + ";\n        ";
      const _0x3dd021 = document.createElement("thead");
      const _0x3637f8 = document.createElement("tr");
      ["序号", "车辆ID", "品质", "奖励", "操作"].forEach(_0x1c245d => {
        {
          const _0x1d728d = document.createElement("th");
          _0x1d728d.textContent = _0x1c245d;
          _0x1d728d.style.cssText = "\n                padding: 3px 4px; text-align: left; border-bottom: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n                background: " + _0x264720._0x920bd8._0xc028f1.lightDark + ";\n            ";
          _0x3637f8.appendChild(_0x1d728d);
        }
      });
      _0x3dd021.appendChild(_0x3637f8);
      _0x2c5e59.appendChild(_0x3dd021);
      const _0x87965a = document.createElement("tbody");
      _0x455630._0x453704.forEach((_0xc3a071, _0x46b55e) => {
        {
          const _0x29ee4e = document.createElement("tr");
          _0x29ee4e.style.borderBottom = "1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + "30";
          const _0x2a058a = document.createElement("td");
          _0x2a058a.textContent = _0x46b55e + 1;
          _0x2a058a.style.padding = "3px 4px";
          _0x29ee4e.appendChild(_0x2a058a);
          const _0x5a821f = document.createElement("td");
          _0x5a821f.textContent = _0xc3a071._0x211d75;
          _0x5a821f.style.padding = "3px 4px";
          _0x29ee4e.appendChild(_0x5a821f);
          const _0x4dd874 = document.createElement("td");
          _0x4dd874.textContent = _0x141836(_0xc3a071._0x259120);
          _0x4dd874.style.padding = "3px 4px";
          _0x29ee4e.appendChild(_0x4dd874);
          const _0x239e87 = document.createElement("td");
          const _0x54fc6e = _0xc3a071._0x189809 && _0xc3a071._0x189809.length > 0 ? _0xc3a071._0x189809.join("，") : "无奖励";
          _0x239e87.textContent = _0x54fc6e;
          _0x239e87.style.padding = "3px 4px";
          _0x239e87.title = _0x54fc6e;
          _0x29ee4e.appendChild(_0x239e87);
          const _0x3b40d4 = document.createElement("td");
          _0x3b40d4.style.padding = "3px 4px";
          _0x3b40d4.style.whiteSpace = "nowrap";
          const _0x111cf7 = document.createElement("button");
          _0x111cf7.textContent = "刷新";
          _0x111cf7.style.cssText = "\n                padding: 2px 4px; margin-right: 2px; font-size: 8px;\n                background: " + _0x264720._0x920bd8._0xc028f1.warning + "; color: white; border: none;\n                border-radius: 3px; cursor: pointer;\n            ";
          _0x111cf7.onclick = () => _0x2e8a08(_0xc3a071._0x211d75);
          const _0x1b571f = document.createElement("button");
          _0x1b571f.textContent = "收获";
          _0x1b571f.style.cssText = "\n                padding: 2px 4px; margin-right: 2px; font-size: 8px;\n                background: " + _0x264720._0x920bd8._0xc028f1.success + "; color: white; border: none;\n                border-radius: 3px; cursor: pointer;\n            ";
          _0x1b571f.onclick = () => _0x20833c(_0xc3a071._0x211d75);
          const _0x360b8f = document.createElement("button");
          _0x360b8f.textContent = "复制";
          _0x360b8f.style.cssText = "\n                padding: 2px 4px; font-size: 8px;\n                background: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + "; color: white; border: none;\n                border-radius: 3px; cursor: pointer;\n            ";
          _0x360b8f.onclick = () => _0x479f7c(_0xc3a071._0x211d75, "已复制车辆ID: " + _0xc3a071._0x211d75);
          _0x3b40d4.appendChild(_0x111cf7);
          _0x3b40d4.appendChild(_0x1b571f);
          _0x3b40d4.appendChild(_0x360b8f);
          _0x29ee4e.appendChild(_0x3b40d4);
          _0x87965a.appendChild(_0x29ee4e);
        }
      });
      _0x2c5e59.appendChild(_0x87965a);
      _0x50ab79.appendChild(_0x2c5e59);
    }
  }
  async function _0x2e8a08(_0x51c92b) {
    {
      if (!_0x1b4c30()) {
        return;
      }
      try {
        {
          _0x2434d9("开始刷新车辆，ID: " + _0x51c92b, "info");
          _0x34944c("正在刷新车辆: " + _0x51c92b, "info");
          const _0x45b37a = {
            _0x211d75: _0x51c92b
          };
          const _0x596a99 = await _0x25a59f("car_refresh", _0x45b37a);
          if (_0x596a99?.["code"] === 0) {
            {
              _0x2434d9("车辆刷新成功，ID: " + _0x51c92b, "success");
              _0x34944c("车辆 " + _0x51c92b + " 刷新成功", "success");
              await _0xadad30();
            }
          } else {
            {
              _0x2434d9("车辆刷新失败，ID: " + _0x51c92b + ", 错误码: " + _0x596a99?.["code"], "error");
              _0x34944c("车辆 " + _0x51c92b + " 刷新失败", "error");
            }
          }
        }
      } catch (_0x5b9d77) {
        _0x2434d9("刷新车辆出错: " + _0x5b9d77.message, "error");
        _0x34944c("刷新车辆 " + _0x51c92b + " 过程出错", "error");
      }
    }
  }
  async function _0xadad30() {
    {
      if (!_0x1b4c30()) {
        return;
      }
      try {
        {
          _0x2434d9("开始查询俱乐部车辆信息...", "info");
          _0x34944c("正在查询俱乐部车辆", "info");
          const _0x402c02 = await _0x25a59f("car_getrolecar");
          if (_0x402c02?.["code"] === 0) {
            {
              _0x455630._0x453704 = [];
              let _0x23b7c4 = null;
              if (_0x402c02._0x1ce45c) {
                {
                  if (_0x402c02._0x1ce45c.body?.["_0x5771ed"]?.["_0x3ad896"]) {
                    _0x23b7c4 = _0x402c02._0x1ce45c.body._0x5771ed._0x3ad896;
                  } else {
                    if (_0x402c02._0x1ce45c._0x5771ed?.["_0x3ad896"]) {
                      _0x23b7c4 = _0x402c02._0x1ce45c._0x5771ed._0x3ad896;
                    } else {
                      _0x402c02._0x1ce45c._0x3ad896 && (_0x23b7c4 = _0x402c02._0x1ce45c._0x3ad896);
                    }
                  }
                }
              } else {
                _0x402c02.data?.["body"]?.["_0x5771ed"]?.["_0x3ad896"] && (_0x23b7c4 = _0x402c02.data.body._0x5771ed._0x3ad896);
              }
              if (_0x23b7c4 && Object.keys(_0x23b7c4).length > 0) {
                {
                  const _0x14a3e4 = [];
                  for (const [_0x3585e3, _0x138510] of Object.entries(_0x23b7c4)) {
                    {
                      const _0x470678 = _0x7413e1(_0x138510._0x189809);
                      const _0x21e602 = {
                        _0x211d75: _0x3585e3,
                        _0x259120: _0x138510.color || "未知",
                        _0x189809: _0x470678,
                        _0x2689b2: _0x138510
                      };
                      _0x14a3e4.push(_0x21e602);
                    }
                  }
                  _0x14a3e4.sort((_0x5c67fb, _0x483397) => {
                    {
                      if (_0x5c67fb._0x259120 !== _0x483397._0x259120) {
                        {
                          return _0x483397._0x259120 - _0x5c67fb._0x259120;
                        }
                      }
                      return parseInt(_0x5c67fb._0x211d75) - parseInt(_0x483397._0x211d75);
                    }
                  });
                  _0x455630._0x453704 = _0x14a3e4.slice(0, 4);
                  _0x2434d9("查询到 " + _0x14a3e4.length + " 辆俱乐部车辆，显示前4辆", "success");
                  _0x2434d9("固定顺序车辆：" + _0x455630._0x453704.map(_0x1885e6 => _0x1885e6._0x211d75 + "(" + _0x141836(_0x1885e6._0x259120) + ")").join(", "), "info");
                  const _0x461573 = [];
                  for (let _0x8c1dbe = 0; _0x8c1dbe < 4; _0x8c1dbe++) {
                    {
                      const _0x18a3c0 = document.getElementById("vehicle-car-id-" + _0x8c1dbe);
                      if (_0x18a3c0) {
                        _0x461573.push(_0x18a3c0);
                      }
                    }
                  }
                  _0x455630._0x453704.forEach((_0x295222, _0xcbbc3) => {
                    {
                      _0x461573[_0xcbbc3] && (_0x461573[_0xcbbc3].value = _0x295222._0x211d75);
                    }
                  });
                  for (let _0x1c895c = _0x455630._0x453704.length; _0x1c895c < _0x461573.length; _0x1c895c++) {
                    {
                      if (_0x461573[_0x1c895c]) {
                        _0x461573[_0x1c895c].value = "";
                      }
                    }
                  }
                  _0x53b2af();
                  _0x34944c("成功查询到 " + _0x14a3e4.length + " 辆车辆，固定显示前4辆", "success");
                }
              } else {
                {
                  _0x2434d9("未查询到俱乐部车辆数据", "warning");
                  _0x34944c("未查询到车辆数据", "warning");
                  const _0xfb190e = [];
                  for (let _0x2c3358 = 0; _0x2c3358 < 4; _0x2c3358++) {
                    {
                      const _0x3bca25 = document.getElementById("vehicle-car-id-" + _0x2c3358);
                      if (_0x3bca25) {
                        {
                          _0xfb190e.push(_0x3bca25);
                          _0x3bca25.value = "";
                        }
                      }
                    }
                  }
                  _0x53b2af();
                }
              }
            }
          } else {
            _0x2434d9("查询失败，错误码: " + _0x402c02?.["code"], "error");
            _0x34944c("车辆查询失败", "error");
          }
        }
      } catch (_0x55e467) {
        {
          _0x2434d9("查询出错: " + _0x55e467.message, "error");
          _0x34944c("查询过程出错", "error");
        }
      }
    }
  }
  async function _0x402f2b(_0x1a2515) {
    if (!_0x1b4c30()) {
      return;
    }
    try {
      _0x2434d9("开始发送车辆，ID: " + _0x1a2515, "info");
      _0x34944c("正在发送车辆: " + _0x1a2515, "info");
      const _0x352aaa = {
        _0x211d75: _0x1a2515,
        _0x50de4c: 0,
        text: ""
      };
      const _0x26aafc = await _0x25a59f("car_send", _0x352aaa);
      _0x26aafc?.["code"] === 0 ? (_0x2434d9("车辆发送成功，ID: " + _0x1a2515, "success"), _0x34944c("车辆 " + _0x1a2515 + " 发送成功", "success")) : (_0x2434d9("车辆发送失败，错误码: " + _0x26aafc?.["code"], "error"), _0x34944c("车辆 " + _0x1a2515 + " 发送失败", "error"));
    } catch (_0x4d2e1d) {
      _0x2434d9("发送车辆出错: " + _0x4d2e1d.message, "error");
      _0x34944c("发送车辆 " + _0x1a2515 + " 过程出错", "error");
    }
  }
  async function _0x20833c(_0x4ca7ec) {
    if (!_0x1b4c30()) {
      return;
    }
    try {
      _0x2434d9("开始收获车辆，ID: " + _0x4ca7ec, "info");
      _0x34944c("正在收获车辆: " + _0x4ca7ec, "info");
      const _0x67581e = {
        _0x211d75: _0x4ca7ec
      };
      const _0x5f3bb2 = await _0x25a59f("car_claim", _0x67581e);
      _0x5f3bb2?.["code"] === 0 ? (_0x2434d9("车辆收获成功，ID: " + _0x4ca7ec, "success"), _0x34944c("车辆 " + _0x4ca7ec + " 收获成功", "success"), await _0xadad30()) : (_0x2434d9("车辆收获失败，ID: " + _0x4ca7ec + ", 错误码: " + _0x5f3bb2?.["code"], "error"), _0x34944c("车辆 " + _0x4ca7ec + " 收获失败", "error"));
    } catch (_0x1e5e95) {
      _0x2434d9("收获车辆出错: " + _0x1e5e95.message, "error");
      _0x34944c("收获车辆 " + _0x4ca7ec + " 过程出错", "error");
    }
  }
  async function _0x448c70() {
    return new Promise((_0x5870fe, _0x8e4a0f) => {
      try {
        var _0x40502f = window._0x36f347("SubRole").SubRole;
        var _0x228ddb = _0x40502f.prototype._0xbc85dc;
        _0x40502f.prototype._0xbc85dc = function (..._0xd8baa2) {
          window._0x5eb372.add(this);
          return _0x228ddb.call(this, ..._0xd8baa2);
        };
        var _0x17eae9 = _0x40502f.prototype._0x1d4d4c;
        _0x40502f.prototype._0x1d4d4c = function (..._0x13607a) {
          window._0x5eb372.delete(this);
          return _0x17eae9.call(this, ..._0x13607a);
        };
        window._0x5eb372 = new Set();
        _0x5870fe();
      } catch (_0x5117af) {
        _0x8e4a0f(_0x5117af);
      }
    });
  }
  async function _0x4cafa8(_0x5a5739, _0x3fdefe) {
    const _0x1b3259 = async function (_0x35d75c, _0x349022) {
      try {
        var _0x4fa43a = window._0x36f347("data-index");
        var _0x76452c = window._0x36f347("ServerData");
        await _0x349022(_0x4fa43a, _0x76452c._0x23495d, true, "主号");
        _0x2434d9("主号执行[" + _0x35d75c + "]完成!");
      } catch (_0x2c5595) {
        _0x2434d9("主号执行[" + _0x35d75c + "]出错, " + _0x2c5595, "error");
        throw _0x2c5595;
      }
      var _0x24bf51 = 0;
      for (const _0x47fb7a of window._0x5eb372) {
        _0x24bf51++;
        try {
          await _0x349022(_0x47fb7a._0x1962d9, _0x47fb7a.role, false, "多开" + _0x24bf51 + "号");
          _0x2434d9("多开" + _0x24bf51 + "号执行[" + _0x35d75c + "]完成!");
        } catch (_0x57eab2) {
          _0x2434d9("多开" + _0x24bf51 + "号执行出错, " + _0x57eab2, "error");
        }
      }
    };
    const _0x40e2cd = function (_0x58e118) {
      return new Promise(function (_0x3728a6) {
        setTimeout(_0x3728a6, 0);
      });
    };
    await _0x1b3259(_0x5a5739, _0x3fdefe);
    await _0x40e2cd(1);
  }
  async function _0x6d81e3() {
    await _0x4cafa8("灯神免费扫荡", async function (_0x7a19e1, _0x3e9454, _0x3d9341, _0x5e9d4c) {
      const _0x1398ea = ["魏国", "蜀国", "吴国", "群雄"];
      _0x2434d9(_0x5e9d4c + " 开始执行灯神免费扫荡", "info");
      for (let _0x285f59 = 1; _0x285f59 <= 4; _0x285f59++) {
        try {
          if (_0x7a19e1 && _0x7a19e1._0x3071c0) {
            const _0x5c5f22 = {
              _0x3e4028: _0x285f59
            };
            await _0x7a19e1._0xfb7630._0x5a8f2e(_0x5c5f22);
          } else {
            const _0x32b142 = {
              _0x3e4028: _0x285f59
            };
            const _0x1ac448 = {
              _0x3e4028: _0x285f59
            };
            const _0x21d1f5 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
              _0x31732a: 0,
              body: window._0x3045db._0x394b13.encode(_0x32b142),
              _0x11303c: "genie_sweep",
              _0xa5fe37: Date.now(),
              time: Date.now()
            } : {
              _0x31732a: 0,
              _0x11303c: "genie_sweep",
              _0x22a6fe: _0x1ac448,
              _0xa5fe37: Date.now(),
              time: Date.now()
            };
            await window._0x2d1cd4._0x514853(_0x21d1f5);
          }
          _0x2434d9(_0x5e9d4c + " " + _0x1398ea[_0x285f59 - 1] + "灯神免费扫荡成功", "success");
        } catch (_0xd0ba3d) {
          _0x2434d9(_0x5e9d4c + " " + _0x1398ea[_0x285f59 - 1] + "灯神免费扫荡失败: " + _0xd0ba3d.message, "error");
        }
        await _0x2656c3(0.3);
      }
      _0x2434d9(_0x5e9d4c + " 开始领取免费扫荡卷", "info");
      for (let _0x9c5a03 = 0; _0x9c5a03 < 3; _0x9c5a03++) {
        try {
          if (_0x7a19e1 && _0x7a19e1._0xfb7630) {
            await _0x7a19e1._0xfb7630._0x13f439({});
          } else {
            const _0x3cb63e = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
              _0x31732a: 0,
              body: window._0x3045db._0x394b13.encode({}),
              _0x11303c: "genie_buysweep",
              _0xa5fe37: Date.now(),
              time: Date.now()
            } : {
              _0x31732a: 0,
              _0x11303c: "genie_buysweep",
              _0x22a6fe: {},
              _0xa5fe37: Date.now(),
              time: Date.now()
            };
            await window._0x2d1cd4._0x514853(_0x3cb63e);
          }
          _0x2434d9(_0x5e9d4c + " 领取免费扫荡卷 " + (_0x9c5a03 + 1) + "/3 成功", "success");
        } catch (_0x80fa9f) {
          _0x2434d9(_0x5e9d4c + " 领取免费扫荡卷 " + (_0x9c5a03 + 1) + "/3 失败: " + _0x80fa9f.message, "error");
        }
        await _0x2656c3(0.3);
      }
      _0x2434d9(_0x5e9d4c + " 灯神免费扫荡任务完成", "summary");
    });
  }
  async function _0x26d83e() {
    await _0x4cafa8("购买三种宝箱", async function (_0xb31a25, _0x3292a4, _0x10755e, _0x5d385e) {
      _0x2434d9(_0x5d385e + " 开始执行购买三种宝箱", "info");
      const _0x44d42d = async (_0x1981ad, _0x3a9f21) => {
        try {
          _0x2434d9(_0x5d385e + " 开始购买" + _0x3a9f21, "info");
          if (_0xb31a25 && _0xb31a25._0x1f7a0f) {
            const _0x366a4d = {
              _0x10f1dd: _0x1981ad
            };
            await _0xb31a25._0x1f7a0f._0x37f87f(_0x366a4d);
          } else {
            const _0x142fa9 = {
              _0x10f1dd: _0x1981ad
            };
            const _0x33cb12 = {
              _0x10f1dd: _0x1981ad
            };
            const _0x449b1f = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
              _0x31732a: 106,
              body: window._0x3045db._0x394b13.encode(_0x142fa9),
              _0x11303c: "store_buy",
              _0xa5fe37: Date.now(),
              time: Date.now()
            } : {
              _0x31732a: 106,
              body: _0x33cb12,
              _0x11303c: "store_buy",
              _0xa5fe37: Date.now(),
              time: Date.now()
            };
            await window._0x2d1cd4._0x514853(_0x449b1f);
          }
          _0x2434d9(_0x5d385e + " " + _0x3a9f21 + "购买成功", "success");
          _0x34944c(_0x3a9f21 + "购买成功", "success");
        } catch (_0x238ce9) {
          _0x2434d9(_0x5d385e + " " + _0x3a9f21 + "购买失败: " + _0x238ce9.message, "error");
          _0x34944c(_0x3a9f21 + "购买失败", "error");
        }
      };
      await _0x44d42d(1, "青铜宝箱");
      await _0x2656c3(0.5);
      await _0x44d42d(2, "黄金宝箱");
      await _0x2656c3(0.5);
      await _0x44d42d(3, "铂金宝箱");
      _0x2434d9(_0x5d385e + " 三种宝箱购买任务完成", "summary");
    });
  }
  async function _0x49bc48() {
    await _0x4cafa8("一键采购", async function (_0x3b5d79, _0x1e0014, _0x33c5b6, _0x5308c1) {
      _0x2434d9(_0x5308c1 + " 开始执行一键采购", "info");
      try {
        if (_0x3b5d79 && _0x3b5d79._0x1f7a0f) {
          await _0x3b5d79._0x1f7a0f._0x7c691({});
        } else {
          const _0x378eb7 = window._0x3045db?.["_0x394b13"]?.["encode"] ? {
            _0x31732a: 0,
            body: window._0x3045db._0x394b13.encode({}),
            _0x11303c: "store_purchase",
            _0xa5fe37: Date.now(),
            time: Date.now()
          } : {
            _0x31732a: 0,
            body: {},
            _0x11303c: "store_purchase",
            _0xa5fe37: Date.now(),
            time: Date.now()
          };
          await window._0x2d1cd4._0x514853(_0x378eb7);
        }
        _0x2434d9(_0x5308c1 + " 一键采购成功", "success");
        _0x34944c("一键采购成功", "success");
      } catch (_0x648d69) {
        _0x2434d9(_0x5308c1 + " 一键采购失败: " + _0x648d69.message, "error");
        _0x34944c("一键采购失败", "error");
      }
      _0x2434d9(_0x5308c1 + " 一键采购任务完成", "summary");
    });
  }
  async function _0x47a8e3(_0x108047 = 3) {
    await _0x4cafa8("怪异塔", async function (_0x1de44b, _0x300953, _0x2b5d5b, _0x132b4d) {
      try {
        _0x2434d9(_0x132b4d + " 🗼 怪异塔任务开始", "info");
        let _0x316885 = null;
        try {
          const _0x50b2bf = window._0x36f347("data-index");
          _0x316885 = _0x50b2bf;
          _0x2434d9(_0x132b4d + " 使用主号ISO服务", "info");
        } catch (_0x460deb) {
          window._0x1962d9 && window._0x1962d9._0x3e6762 ? (_0x316885 = window._0x1962d9, _0x2434d9(_0x132b4d + " 使用window.iso服务", "info")) : _0x2434d9(_0x132b4d + " 无法获取ISO服务，将使用WebSocket", "warning");
        }
        let _0x3ce74d = 0;
        let _0x6b830c = 0;
        let _0x54983a = 0;
        _0x2434d9(_0x132b4d + " 获取爬塔信息...", "info");
        if (_0x316885 && _0x316885._0x3e6762) {
          _0x2434d9(_0x132b4d + " 使用ISO服务获取爬塔信息...", "info");
          try {
            const _0x1f6d98 = await _0x316885._0x3e6762._0x3449a8({});
            const _0xd3a657 = _0x1f6d98.getData?.() || _0x1f6d98;
            const _0x4a82a2 = _0xd3a657?.["_0x2d2097"] || _0xd3a657;
            _0x4a82a2 && _0x4a82a2._0x46113a !== undefined ? (_0x6b830c = _0x4a82a2._0x46113a || 0, _0x54983a = _0x4a82a2._0x37ac24 || 0, _0x2434d9(_0x132b4d + " 当前层数: " + _0x54983a + ", 剩余能量: " + _0x6b830c, "info")) : _0x2434d9(_0x132b4d + " [DEBUG] ISO响应格式: " + JSON.stringify(_0xd3a657).substring(0, 150), "info");
          } catch (_0x1748f9) {
            _0x2434d9(_0x132b4d + " ISO服务调用失败: " + _0x1748f9.message, "warning");
          }
        }
        if (_0x6b830c === 0 && window._0x2d1cd4 && typeof window._0x2d1cd4._0x514853 === "function") {
          _0x2434d9(_0x132b4d + " 使用WebSocket获取爬塔信息...", "info");
          let _0x12083e = Math.floor(Date.now() / 1000);
          let _0x5e02f3 = _0x12083e;
          const _0x2a84fd = {
            _0x31732a: _0x5e02f3++,
            body: {},
            _0x11303c: "evotower_getinfo",
            _0xa5fe37: _0x12083e++,
            time: Date.now()
          };
          _0x2434d9(_0x132b4d + " [发送] evotower_getinfo: " + JSON.stringify(_0x2a84fd), "info");
          console.log("[EvoTower] 发送 evotower_getinfo:", _0x2a84fd);
          const _0x5a9cda = await window._0x2d1cd4._0x514853(_0x2a84fd);
          _0x2434d9(_0x132b4d + " [响应] evotower_getinfo: " + JSON.stringify(_0x5a9cda), "info");
          console.log("[EvoTower] 响应 evotower_getinfo:", _0x5a9cda);
          if (_0x5a9cda && _0x5a9cda.code === 0) {
            _0x2434d9(_0x132b4d + " [DEBUG] WS响应: " + JSON.stringify(_0x5a9cda).substring(0, 200), "info");
            let _0x504a91 = _0x5a9cda._0x1ce45c?.["body"]?.["_0x2d2097"] || _0x5a9cda.body?.["_0x2d2097"] || _0x5a9cda._0x1ce45c?.["_0x2d2097"] || _0x5a9cda._0x2d2097 || _0x5a9cda.data?.["_0x2d2097"] || _0x5a9cda._0x1ce45c?.["body"];
            _0x504a91 && _0x504a91._0x46113a !== undefined ? (_0x6b830c = _0x504a91._0x46113a || 0, _0x54983a = _0x504a91._0x37ac24 || 0, _0x2434d9(_0x132b4d + " 当前层数: " + _0x54983a + ", 剩余能量: " + _0x6b830c, "info")) : _0x2434d9(_0x132b4d + " [DEBUG] 完整WS响应: " + JSON.stringify(_0x5a9cda), "error");
          } else {
            _0x2434d9(_0x132b4d + " WebSocket获取爬塔信息失败", "error");
          }
        }
        if (_0x6b830c === 0 && _0x54983a === 0) {
          _0x2434d9(_0x132b4d + " 无法解析爬塔信息，请检查游戏连接", "error");
          return;
        }
        if (_0x6b830c <= 0) {
          _0x2434d9(_0x132b4d + " 能量不足，无法挑战", "warning");
          return;
        }
        let _0xe05d17 = Math.floor(Date.now() / 1000);
        let _0x3603c3 = _0xe05d17;
        while (_0x3ce74d < _0x108047 && _0x6b830c > 0) {
          await _0x30f4f7("怪异塔");
          _0x2434d9(_0x132b4d + " 第 " + (_0x3ce74d + 1) + "/" + _0x108047 + " 次挑战...", "info");
          let _0xf01643 = _0x54983a + 1;
          let _0x5ab300 = _0x6b830c;
          let _0x5eadd0 = false;
          if (_0x316885 && _0x316885._0x3e6762) {
            try {
              const _0x318dfa = await _0x316885._0x3e6762._0x3c39c0({});
              const _0x5d0c98 = _0x318dfa.getData?.() || _0x318dfa;
              const _0x21ad40 = _0x5d0c98?.["_0x3ee5b8"] || _0x5d0c98;
              _0x21ad40 && _0x21ad40.options?.["_0x37ac24"] && (_0xf01643 = _0x21ad40.options._0x37ac24);
              _0x2434d9(_0x132b4d + " 准备挑战第 " + _0xf01643 + " 层", "info");
            } catch (_0x37e3c9) {
              _0x2434d9(_0x132b4d + " ISO准备战斗失败: " + _0x37e3c9.message, "warning");
            }
          }
          if (!_0x316885 || !_0x316885._0x3e6762) {
            const _0x146b22 = {
              _0x31732a: _0x3603c3++,
              body: {},
              _0x11303c: "evotower_readyfight",
              _0xa5fe37: _0xe05d17++,
              time: Date.now()
            };
            _0x2434d9(_0x132b4d + " [发送] evotower_readyfight: " + JSON.stringify(_0x146b22), "info");
            console.log("[EvoTower] 发送 evotower_readyfight:", _0x146b22);
            const _0x55e05b = await window._0x2d1cd4._0x514853(_0x146b22);
            _0x2434d9(_0x132b4d + " [响应] evotower_readyfight: " + JSON.stringify(_0x55e05b).substring(0, 500), "info");
            console.log("[EvoTower] 响应 evotower_readyfight:", _0x55e05b);
            if (!_0x55e05b || _0x55e05b.code !== 0) {
              _0x2434d9(_0x132b4d + " 准备战斗失败", "error");
              break;
            }
            const _0x15feb2 = _0x55e05b._0x1ce45c?.["body"] || _0x55e05b.body;
            _0x15feb2?.["_0x3ee5b8"]?.["options"]?.["_0x37ac24"] && (_0xf01643 = _0x15feb2._0x3ee5b8.options._0x37ac24);
            _0x2434d9(_0x132b4d + " 准备挑战第 " + _0xf01643 + " 层", "info");
          }
          await new Promise(_0x4a4318 => setTimeout(_0x4a4318, 500));
          if (_0x316885 && _0x316885._0x3e6762) {
            try {
              const _0x26b6ce = {
                _0x31f2a4: 1,
                _0x11a89c: 1
              };
              const _0x410253 = await _0x316885._0x3e6762._0x5b4403(_0x26b6ce);
              const _0x1cc3a8 = _0x410253.getData?.() || _0x410253;
              const _0x298ddd = _0x1cc3a8?.["_0x2d2097"] || _0x1cc3a8;
              const _0x57337b = _0x1cc3a8?.["_0x3a0c1d"] || _0x1cc3a8?.["body"]?.["_0x3a0c1d"] || [];
              _0x298ddd && _0x298ddd._0x46113a !== undefined ? (_0x5ab300 = _0x298ddd._0x46113a || 0, _0x57337b.length > 0 && _0x57337b[0] === true ? (_0x5eadd0 = true, _0x2434d9(_0x132b4d + " ✅ 第 " + _0xf01643 + " 层通关！剩余能量: " + _0x5ab300, "success")) : _0x2434d9(_0x132b4d + " ❌ 第 " + _0xf01643 + " 层失败，剩余能量: " + _0x5ab300, "warning")) : _0x2434d9(_0x132b4d + " ❌ 第 " + _0xf01643 + " 层失败，无法获取能量信息", "warning");
            } catch (_0x3a90c0) {
              _0x2434d9(_0x132b4d + " ISO提交战斗失败: " + _0x3a90c0.message, "warning");
            }
          }
          if (!_0x316885 || !_0x316885._0x3e6762) {
            const _0x37c79e = {
              _0x31f2a4: 1,
              _0x11a89c: 1
            };
            const _0x360453 = {
              _0x31732a: _0x3603c3++,
              body: _0x37c79e,
              _0x11303c: "evotower_fight",
              _0xa5fe37: _0xe05d17++,
              time: Date.now()
            };
            _0x2434d9(_0x132b4d + " [发送] evotower_fight: " + JSON.stringify(_0x360453), "info");
            console.log("[EvoTower] 发送 evotower_fight:", _0x360453);
            const _0x423b62 = await window._0x2d1cd4._0x514853(_0x360453);
            _0x2434d9(_0x132b4d + " [响应] evotower_fight: " + JSON.stringify(_0x423b62), "info");
            console.log("[EvoTower] 响应 evotower_fight:", _0x423b62);
            if (!_0x423b62 || _0x423b62.code !== 0) {
              _0x2434d9(_0x132b4d + " 第 " + (_0x3ce74d + 1) + " 次挑战失败", "error");
              break;
            }
            _0x5ab300 = _0x423b62._0x1ce45c?.["body"]?.["_0x2d2097"]?.["_0x46113a"] || _0x423b62.body?.["_0x2d2097"]?.["_0x46113a"] || 0;
            const _0x193c58 = _0x423b62._0x1ce45c?.["body"]?.["_0x3a0c1d"] || _0x423b62.body?.["_0x3a0c1d"] || [];
            _0x193c58.length > 0 ? (_0x2434d9(_0x132b4d + " ✅ 第 " + _0xf01643 + " 层通关！剩余能量: " + _0x5ab300, "success"), _0x5eadd0 = true) : _0x2434d9(_0x132b4d + " ❌ 第 " + _0xf01643 + " 层失败，剩余能量: " + _0x5ab300, "warning");
          }
          _0x3ce74d++;
          _0x6b830c = _0x5ab300;
          if (_0xf01643 % 10 === 0) {
            _0x2434d9(_0x132b4d + " 🎁 第 " + _0xf01643 + " 层是奖励关卡，正在领取奖励...", "info");
            if (_0x316885 && _0x316885._0x3e6762 && _0x316885._0x3e6762._0x4e11f2) {
              try {
                const _0x1937d4 = await _0x316885._0x3e6762._0x4e11f2({
                  _0x5d4215: Math.floor(_0xf01643 / 10)
                });
                _0x2434d9(_0x132b4d + " ✅ 奖励已领取", "success");
              } catch (_0x13ec2a) {
                _0x2434d9(_0x132b4d + " 奖励领取失败: " + _0x13ec2a.message, "warning");
              }
            }
          }
          if (_0x5ab300 <= 0) {
            _0x2434d9(_0x132b4d + " 能量已耗尽", "warning");
            break;
          }
          await new Promise(_0x138b46 => setTimeout(_0x138b46, 1000));
          _0x2434d9(_0x132b4d + " 重新获取爬塔信息...", "info");
          if (_0x316885 && _0x316885._0x3e6762) {
            try {
              const _0x30986d = await _0x316885._0x3e6762._0x3449a8({});
              const _0x5e9bd8 = _0x30986d.getData?.() || _0x30986d;
              const _0x13e0bb = _0x5e9bd8?.["_0x2d2097"] || _0x5e9bd8;
              _0x13e0bb && _0x13e0bb._0x46113a !== undefined && (_0x6b830c = _0x13e0bb._0x46113a || 0, _0x54983a = _0x13e0bb._0x37ac24 || 0, _0x2434d9(_0x132b4d + " [刷新] 当前层数: " + _0x54983a + ", 剩余能量: " + _0x6b830c, "info"));
            } catch (_0x4f80c5) {
              _0x2434d9(_0x132b4d + " ISO刷新信息失败: " + _0x4f80c5.message, "warning");
            }
          }
          if (!_0x316885 || !_0x316885._0x3e6762) {
            const _0x1fd99d = {
              _0x31732a: _0x3603c3++,
              body: {},
              _0x11303c: "evotower_getinfo",
              _0xa5fe37: _0xe05d17++,
              time: Date.now()
            };
            _0x2434d9(_0x132b4d + " [发送] evotower_getinfo: " + JSON.stringify(_0x1fd99d), "info");
            console.log("[EvoTower] 发送 evotower_getinfo:", _0x1fd99d);
            const _0x27f394 = await window._0x2d1cd4._0x514853(_0x1fd99d);
            _0x2434d9(_0x132b4d + " [响应] evotower_getinfo: " + JSON.stringify(_0x27f394), "info");
            console.log("[EvoTower] 响应 evotower_getinfo:", _0x27f394);
            if (_0x27f394 && _0x27f394.code === 0) {
              let _0x37d4c4 = _0x27f394._0x1ce45c?.["body"]?.["_0x2d2097"] || _0x27f394.body?.["_0x2d2097"] || _0x27f394._0x1ce45c?.["_0x2d2097"] || _0x27f394._0x2d2097 || _0x27f394.data?.["_0x2d2097"] || _0x27f394._0x1ce45c?.["body"];
              _0x37d4c4 && _0x37d4c4._0x46113a !== undefined && (_0x6b830c = _0x37d4c4._0x46113a || 0, _0x54983a = _0x37d4c4._0x37ac24 || 0, _0x2434d9(_0x132b4d + " [刷新] 当前层数: " + _0x54983a + ", 剩余能量: " + _0x6b830c, "info"));
            }
          }
        }
        _0x2434d9(_0x132b4d + " 怪异塔完成，共进行 " + _0x3ce74d + " 次挑战", "summary");
        _0x34944c("怪异塔完成 (" + _0x3ce74d + "次)", "success");
      } catch (_0x14b77b) {
        _0x2434d9(_0x132b4d + " 怪异塔异常: " + _0x14b77b.message, "error");
        _0x34944c("怪异塔异常", "error");
      }
    });
  }
  async function _0x39916a() {
    await _0x4cafa8("分享领取木材火把", async function (_0xe4ffbf) {
      const _0x4417c7 = {
        _0x103f7c: false,
        type: 1
      };
      await _0xe4ffbf._0x58e7b8._0x16999c(_0x4417c7);
    });
  }
  async function _0x586d95() {
    await _0x4cafa8("领取邮件奖励", async function (_0x7d67ae) {
      const _0x56a726 = {
        category: 0
      };
      await _0x7d67ae._0x30635e._0x4f07fa(_0x56a726);
    });
  }
  async function _0x38e3cb() {
    const _0x12b1ab = function (_0x37e6cb) {
      const _0x55a221 = new Date(_0x37e6cb);
      _0x55a221.setHours(_0x55a221.getHours() + 8);
      return _0x55a221;
    };
    await _0x4cafa8("挑战每日咸王boss", async function (_0x38b643) {
      const _0xf554 = _0x12b1ab(Date.now()).getUTCDay();
      const _0x5fd462 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0xf554];
      const _0x4b7a0a = {
        _0x2bd369: _0x5fd462
      };
      await _0x38b643._0x4cd657._0xc0be94(_0x4b7a0a);
    });
  }
  async function _0x5d2000() {
    await _0x4cafa8("开启10个木质宝箱", async function (_0x4e259c) {
      const _0x195d3b = {
        itemId: 2001,
        number: 10
      };
      await _0x4e259c._0xb22f7._0x306942(_0x195d3b);
    });
  }
  async function _0xdf0af() {
    await _0x4cafa8("进行两次招募", async function (_0x4fe1fb) {
      const _0x61e3d6 = {
        _0x72a0a0: false,
        _0x1eb5be: 1,
        _0x1b2d82: 3
      };
      await _0x4fe1fb._0x272298.recruit(_0x61e3d6);
      await new Promise(_0x478526 => setTimeout(_0x478526, 1000));
      const _0x4675fa = {
        _0x72a0a0: false,
        _0x1eb5be: 1,
        _0x1b2d82: 1
      };
      await _0x4fe1fb._0x272298.recruit(_0x4675fa);
    });
  }
  async function _0x2befe2() {
    await _0x4cafa8("点金三次", async function (_0xb776ad) {
      const _0x996b7b = {
        _0x21f19a: 1
      };
      await _0xb776ad._0x58e7b8._0x5aeba0(_0x996b7b);
      await new Promise(_0x7f1a2b => setTimeout(_0x7f1a2b, 1000));
      const _0x35225a = {
        _0x21f19a: 1
      };
      await _0xb776ad._0x58e7b8._0x5aeba0(_0x35225a);
      await new Promise(_0x4f5844 => setTimeout(_0x4f5844, 1000));
      const _0x84e53 = {
        _0x21f19a: 1
      };
      await _0xb776ad._0x58e7b8._0x5aeba0(_0x84e53);
    });
  }
  async function _0xaef80c() {
    await _0x4cafa8("普通钓鱼三次", async function (_0x46afc6) {
      const _0x17f13a = {
        _0x24d555: 1,
        _0x3c14b2: true,
        type: 1
      };
      await _0x46afc6._0x364b10._0x51e047(_0x17f13a);
      await new Promise(_0x121bbc => setTimeout(_0x121bbc, 1000));
      const _0x1df086 = {
        _0x24d555: 1,
        _0x3c14b2: true,
        type: 1
      };
      await _0x46afc6._0x364b10._0x51e047(_0x1df086);
      await new Promise(_0x19df9e => setTimeout(_0x19df9e, 1000));
      const _0x405e27 = {
        _0x24d555: 1,
        _0x3c14b2: true,
        type: 1
      };
      await _0x46afc6._0x364b10._0x51e047(_0x405e27);
    });
  }
  async function _0xb403d() {
    await _0x4cafa8("领取每日登录奖励", async function (_0x515b6c) {
      await _0x515b6c._0x58e7b8._0x32ff95({});
    });
  }
  async function _0x12d3d3() {
    await _0x4cafa8("领取每日特惠礼包", async function (_0x581f5c) {
      const _0x455c89 = {
        _0x59f047: 1
      };
      await _0x581f5c._0xcf1496._0x4e11f2(_0x455c89);
    });
  }
  async function _0x550ee1() {
    await _0x4cafa8("领取[福利卡]每日奖励", async function (_0x188c84) {
      const _0x5d164d = {
        _0x21f8b1: 1
      };
      await _0x188c84._0x4a51b0._0x4e11f2(_0x5d164d);
    });
  }
  async function _0x2d8f26() {
    await _0x4cafa8("俱乐部签到", async function (_0x5a07ea) {
      await _0x5a07ea._0x3ebf1b.signIn({});
    });
  }
  async function _0x542040(_0x2d42b9 = 2) {
    await _0x4cafa8("攻打" + _0x2d42b9 + "次boss", async function (_0x39a71c) {
      for (let _0x19230d = 0; _0x19230d < _0x2d42b9; _0x19230d++) {
        await _0x39a71c._0x4cd657._0x177210({});
        _0x19230d < _0x2d42b9 - 1 && (await new Promise(_0x43d1d5 => setTimeout(_0x43d1d5, 1000)));
      }
    });
  }
  async function _0x4531f5() {
    const _0x197cba = {
      _0x11c189: 1,
      _0x3f84ed: 1,
      _0x1905f8: 1,
      _0x19f20d: 1,
      _0x492280: 1,
      _0x1c3717: 1,
      _0xc0787e: 1,
      _0x353456: 1,
      _0x4eacfa: 1,
      _0x2eb5f3: 1,
      _0x1d8498: 1,
      _0x4cefd5: 1,
      _0x4cbefe: 1,
      _0x372f24: 1,
      _0x3b08f2: 1,
      _0x389036: 1,
      _0x238682: 1,
      _0x212b1b: 1,
      _0x288914: 1,
      _0x111921: 1,
      _0x4179da: 1,
      _0x17306c: 1,
      _0x814155: 1,
      _0x41e84a: 1,
      _0x5cc836: 1,
      _0x115fa4: 1,
      _0x2c616d: 1,
      _0x12a3fa: 1,
      _0x34efab: 1,
      _0x1795dc: 1,
      _0x1134d3: 1,
      _0x39f662: 1,
      _0x31277d: 1,
      _0x1d4314: 1,
      _0x12bee0: 1,
      _0x305b50: 1,
      _0x1dd7c2: 1,
      _0x22ee95: 1,
      _0x567e2b: 1,
      _0xd0ed3: 1,
      _0x29b669: 1,
      _0x3ddfcb: 1,
      _0x46ca15: 1,
      _0x1e770c: 1,
      _0xd64d74: 1,
      _0x53922c: 1,
      _0x42d106: 1,
      _0x5a311f: 1,
      _0x33c78e: 1,
      _0x234d8e: 1,
      _0x58c96f: 1,
      _0x272d9d: 1,
      _0x2a56c2: 1,
      _0xb72fcb: 1,
      _0x2a9898: 1,
      _0x46af5a: 1,
      _0x2dbd6c: 1,
      _0x1d3242: 1,
      _0x4307d4: 1,
      _0x52f522: 1,
      _0x3c99e3: 1,
      _0xd7273e: 1,
      _0x46e9c1: 1,
      _0x1c1e3c: 1,
      _0x25294d: 1,
      _0x586e14: 1,
      _0x481892: 1,
      _0x21277a: 1,
      _0x286f3e: 1,
      _0x8c7cca: 1,
      _0x46905e: 1,
      _0x597265: 1,
      _0x65bac2: 1,
      _0x375381: 1,
      _0x50a86a: 1,
      _0x129739: 1,
      _0x579364: 1,
      _0x3dd378: 1,
      _0x3b64ed: 1,
      _0x246347: 1,
      _0xa01f29: 1,
      _0x467176: 1,
      _0x4d19cb: 1,
      _0x1b34e6: 1,
      _0x44a19d: 1,
      _0x49bcac: 1,
      _0x41f360: 1,
      _0x40fc80: 1,
      _0x4123c6: 1,
      _0x5445ad: 1,
      _0x57c6f6: 1,
      _0x3911de: 1,
      _0x1628df: 1,
      _0x4e2d30: 1,
      _0xdc2127: 1,
      _0x199164: 1,
      _0x373517: 1,
      _0x1357d6: 2,
      _0x266910: 1,
      _0x59deb2: 1,
      _0x571096: 1,
      _0xa7d650: 1,
      _0x23572a: 1,
      _0x2fcc15: 1,
      _0x1f5306: 1,
      _0x2738e7: 1,
      _0x1191df: 1,
      _0x1c05ec: 1,
      _0x24c48d: 1,
      _0x2ef2b1: 1,
      _0x4dfb0a: 1,
      _0x497f0b: 1,
      _0x159a93: 1,
      _0x821375: 1,
      _0x7d2c52: 1,
      _0x49e27d: 1,
      _0x1f4440: 1,
      _0x160376: 1,
      _0x3a510d: 1,
      _0x31ed81: 1,
      _0x2c1170: 2,
      _0x1f02dd: 1,
      _0x58bfbb: 1,
      _0x2be2b9: 1,
      _0x3cde35: 1,
      _0x38b5c5: 1,
      _0x5c0483: 1,
      _0x22360e: 1,
      _0x4ab6e6: 1,
      _0x6f0b01: 1,
      _0x471646: 1,
      _0x19e6e1: 1,
      _0x3b00c7: 1,
      _0x2b520a: 1,
      _0x39f663: 1,
      _0x4905cb: 1,
      _0x71160c: 1,
      _0x310d57: 1,
      _0x4e8316: 1,
      _0x220363: 1,
      _0xe78976: 1,
      _0x51406e: 1,
      _0x4b4969: 1,
      _0x4126ac: 1,
      _0x4a9e61: 1,
      _0x26393f: 1,
      _0x465ebe: 1,
      _0x2fe6e1: 1,
      _0x563d82: 1,
      _0x4b0c77: 1,
      _0x311679: 1,
      _0x2d7b3b: 1,
      _0x340a64: 1,
      _0x4d231c: 1,
      _0x75ab19: 1,
      _0x3b92b1: 1,
      _0x1913e5: 1,
      _0x3818f0: 1,
      _0x18068a: 1,
      _0x2cab3e: 1,
      _0x558f91: 1,
      _0x8735e7: 1,
      _0x45ff66: 1,
      _0x394242: 1,
      _0x3f866f: 1,
      _0xb68473: 1,
      _0xb57002: 1,
      _0x1e87a8: 1,
      _0x4319a5: 1,
      _0x5239d3: 1,
      _0x391a8d: 1,
      _0x265cf3: 1,
      _0x1e86d4: 1,
      _0x5ec3dc: 1,
      _0x724385: 1,
      _0x21523b: 1,
      _0x4d87d9: 1,
      _0x50b8a6: 1,
      _0x26ab4c: 1,
      _0x55ea8e: 1,
      _0xbf99e8: 1,
      _0x547c02: 1,
      _0x3016e4: 1,
      _0x4085c1: 1,
      _0x1c15a2: 1,
      _0x19668a: 1,
      _0x17fd0d: 1,
      _0x564681: 1,
      _0x36d78a: 1,
      _0x1ead07: 1,
      _0x866f43: 1,
      _0x5256f3: 1,
      _0x1f7be4: 1,
      _0x14a0d4: 1,
      _0x4a691d: 1,
      _0x2cee96: 1,
      _0x609306: 1,
      _0x2b7d46: 1,
      _0x1e2770: 1,
      _0x5355c6: 1,
      _0x490671: 1,
      _0x2b04c7: 1,
      _0x50beb8: 1,
      _0x1260d2: 1,
      _0x5782dc: 1,
      _0x1dd784: 1,
      _0xe5738b: 1,
      _0x399f60: 1,
      _0x555ad6: 1,
      _0xfa48e3: 1,
      _0x86c442: 1,
      _0x5d7862: 1,
      _0x4ff21f: 1,
      _0x3213c5: 1,
      _0x4c5e04: 1,
      _0x33d8bf: 1,
      _0x1910d6: 1,
      _0x46f917: 1,
      _0x55d730: 1,
      _0x4494eb: 1,
      _0x1c781e: 1,
      _0xdc4181: 1,
      _0x42b4b4: 1,
      _0xb7cd38: 1,
      _0x50d1e5: 1,
      _0x509370: 1,
      _0x489aaa: 1,
      _0x3a186c: 1,
      _0x4fc961: 1,
      _0x3b66f9: 1,
      _0x171749: 1,
      _0x2296dd: 1,
      _0x4ade0a: 1,
      _0x13578f: 1,
      _0x102d25: 1,
      _0x4a2c43: 1
    };
    await _0x4cafa8("答题领奖", async function (_0x46e38f) {
      const _0x538aaf = await _0x46e38f._0x4173e4._0x5d6d41({});
      const _0x36ab5a = _0x538aaf.getData();
      const _0x4288c3 = _0x36ab5a._0x48e41c;
      for (let _0x5b0087 = 0; _0x5b0087 < _0x4288c3.length; _0x5b0087++) {
        const _0x3c3594 = _0x4288c3[_0x5b0087];
        let _0xcbb3f6 = _0x197cba[_0x3c3594._0x4ee13b];
        !_0xcbb3f6 && (_0xcbb3f6 = 2);
        const _0x3cd323 = {
          id: _0x36ab5a.role._0x36db4d.id,
          option: [_0xcbb3f6],
          _0x254d91: [_0x3c3594.id]
        };
        await _0x46e38f._0x4173e4._0x1cc2c0(_0x3cd323);
        await new Promise(_0x29dce1 => setTimeout(_0x29dce1, 1000));
      }
      for (let _0x5a9fcf = 1; _0x5a9fcf <= 10; _0x5a9fcf++) {
        const _0x33086b = {
          _0x5d4215: _0x5a9fcf
        };
        await _0x46e38f._0x4173e4._0x4e11f2(_0x33086b);
        await new Promise(_0x4e22bf => setTimeout(_0x4e22bf, 1000));
      }
    });
  }
  async function _0x4e2447() {
    await _0x4cafa8("领任务奖励", async function (_0x1e09f2) {
      for (const _0x2e6445 of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        const _0x505985 = {
          _0xea75a2: _0x2e6445
        };
        await _0x1e09f2._0x2ad19b._0x2afe35(_0x505985);
        await new Promise(_0x23356e => setTimeout(_0x23356e, 1000));
      }
      const _0x256438 = {
        _0x5d4215: 0
      };
      await _0x1e09f2._0x2ad19b._0x3b2b4c(_0x256438);
      await new Promise(_0x3ab7af => setTimeout(_0x3ab7af, 1000));
      const _0x38ec36 = {
        _0x5d4215: 0
      };
      await _0x1e09f2._0x2ad19b._0x48e3c1(_0x38ec36);
    });
  }
  async function _0x51d3e5() {
    await _0x4cafa8("领取和赠送好友金币", async function (_0x139276) {
      const _0x207173 = {
        _0x512d89: 0
      };
      await _0x139276._0x52ceac._0xf04230(_0x207173);
    });
  }
  async function _0xb6baf3() {
    await _0x4cafa8("自动爬塔", async function (_0x2ad253, _0x211650, _0x51d798, _0x4c1c75) {
      if (!_0x51d798) {
        return;
      }
      if (_0x211650._0x21f926 <= 50) {
        return;
      }
      await _0x2ad253._0x526c3f._0x3449a8({});
      for (let _0x2d3503 = 0; _0x2d3503 <= 30; _0x2d3503++) {
        if (_0x211650._0x5a1522._0x46113a <= 0) {
          break;
        }
        if (_0x211650._0x5a1522.id % 10 == 0) {
          const _0x2e495c = _0x211650._0x5a1522.id / 10;
          if (!_0x211650._0x5a1522._0x1a5b84[_0x2e495c]) {
            _0x2434d9(_0x4c1c75 + "领取咸将塔第" + _0x2e495c + "-10层通关奖励");
            const _0xb9f75e = {
              _0x5d4215: _0x2e495c
            };
            await _0x2ad253._0x526c3f._0x4e11f2(_0xb9f75e);
          }
        }
        if (_0x211650._0x5a1522.id >= 4500) {
          return;
        }
        const _0x5bd80e = Math.floor(_0x211650._0x5a1522.id / 10) + 1;
        const _0x34a945 = (_0x211650._0x5a1522.id + 1) % 10 || 10;
        _0x2434d9(_0x4c1c75 + "挑战咸将塔第" + _0x5bd80e + "-" + _0x34a945 + "层, 体力: " + _0x211650._0x5a1522._0x46113a + " => " + (_0x211650._0x5a1522._0x46113a - 1));
        await _0x2ad253._0x4cd657._0x17dd0d({});
        await new Promise(_0x5be9f1 => setTimeout(_0x5be9f1, 1000));
      }
    });
  }
  async function _0x32a825() {
    await _0x4cafa8("自动续罐子", async function (_0x2b9873) {
      const _0x3f831e = {
        _0x495c25: -1
      };
      await _0x2b9873._0x443868.stop(_0x3f831e);
      const _0x20675b = {
        _0x495c25: -1
      };
      await _0x2b9873._0x443868.start(_0x20675b);
    });
  }
  async function _0x5d7dcf() {
    await _0x4cafa8("自动收罐子", async function (_0x25a22d) {
      await _0x25a22d._0x443868._0x389b40({});
    });
  }
  async function _0x4e60f0(_0x343a43 = 5) {
    await _0x4cafa8("自动收菜加钟", async function (_0x5a0021) {
      await _0x5a0021._0x58e7b8._0x44e22a({});
      for (let _0x1a43e2 = 0; _0x1a43e2 < _0x343a43; _0x1a43e2++) {
        const _0x17954a = {
          _0x103f7c: true,
          type: 2
        };
        await _0x5a0021._0x58e7b8._0x16999c(_0x17954a);
        _0x1a43e2 < _0x343a43 - 1 && (await new Promise(_0x2a31e4 => setTimeout(_0x2a31e4, 500)));
      }
    });
  }
  function _0x30161d() {
    document.getElementById("arenaToggleBtn")?.["remove"]();
    document.getElementById("arenaMainPanel")?.["remove"]();
    const _0x58597c = document.createElement("div");
    _0x58597c.id = "arenaToggleBtn";
    const _0x1a817a = document.createElement("span");
    _0x1a817a.textContent = "🐶";
    _0x1a817a.style.cssText = "\n            font-size: 24px; transition: transform 0.3s ease;\n            display: inline-block; cursor: pointer;\n        ";
    _0x3f2737._0x26efa0 = _0x1a817a;
    _0x58597c.appendChild(_0x1a817a);
    _0x58597c.style.cssText = "\n            position: fixed; top: " + _0x264720.position._0x419f9b.top + "px; right: " + _0x264720.position._0x419f9b.right + "px;\n            background: transparent; border: none; box-shadow: none;\n            padding: 6px; border-radius: 8px; z-index: " + _0x264720._0x920bd8.zIndex + ";\n            display: flex; align-items: center; justify-content: center; min-width: 40px;\n            color: " + _0x264720._0x920bd8._0xc028f1.text + "; cursor: pointer;\n        ";
    const _0x1aad91 = document.createElement("div");
    _0x1aad91.id = "arenaMainPanel";
    _0x3f2737._0x33a333 = _0x1aad91;
    _0x1aad91.style.cssText = "\n            position: fixed; top: " + _0x264720.position._0x165c37.top + "px; right: " + _0x264720.position._0x165c37.right + "px;\n            width: " + _0x264720._0x920bd8._0xb299aa + "px; min-width: " + _0x264720._0x920bd8.minWidth + "px; \n            background: " + _0x264720._0x920bd8._0xc028f1._0x509083 + "; border: 1px solid " + _0x264720._0x920bd8._0xc028f1._0x542524 + ";\n            border-radius: 12px; padding: 8px; z-index: " + (_0x264720._0x920bd8.zIndex - 1) + ";\n            box-shadow: " + _0x264720._0x920bd8._0x118ca9._0x165c37 + "; display: " + (_0x264720._0x14a3e2 ? "block" : "none") + ";\n            max-height: 420px; overflow-y: auto;\n            transition: background 0.2s ease, border-color 0.2s ease;\n        ";
    const _0x23a668 = document.createElement("div");
    _0x23a668.style.cssText = "\n            display: flex; align-items: center; justify-content: space-between;\n            margin: 0 0 6px 0;\n        ";
    const _0xa6461a = document.createElement("h3");
    _0xa6461a.style.cssText = "\n            margin: 0; color: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + "; font-size: 14px;\n            font-family: 'Microsoft YaHei', sans-serif; display: flex; align-items: center; gap: 6px;\n        ";
    const _0x35b90a = document.createElement("span");
    _0x35b90a.textContent = "🐶";
    _0x35b90a.style.cssText = "font-size: 14px;";
    _0xa6461a.appendChild(_0x35b90a);
    _0xa6461a.appendChild(document.createTextNode("花狗助手"));
    const _0x47109a = document.createElement("div");
    _0x47109a.style.cssText = "\n            display: flex; align-items: center; gap: 6px; flex: 1; margin-left: 10px;\n        ";
    const _0x5a84db = document.createElement("span");
    _0x5a84db.textContent = "透明度";
    _0x5a84db.style.cssText = "\n            font-size: 9px; color: " + _0x264720._0x920bd8._0xc028f1._0x542524 + "; white-space: nowrap;\n        ";
    const _0x4f143a = document.createElement("input");
    _0x4f143a.type = "range";
    _0x4f143a.min = _0x264720._0x920bd8._0x50a677 * 100;
    _0x4f143a.max = 100;
    _0x4f143a.value = _0x264720._0x920bd8._0x4977e9 * 100;
    _0x4f143a.style.cssText = "\n            flex: 1; height: 6px; appearance: none;\n            background: " + _0x264720._0x920bd8._0xc028f1._0x542524 + "; border-radius: 3px; outline: none;\n        ";
    _0x4f143a.style.setProperty("-webkit-appearance", "none");
    _0x4f143a.style.setProperty("::-webkit-slider-thumb", "\n            -webkit-appearance: none; width: 12px; height: 12px;\n            border-radius: 50%; background: " + _0x264720._0x920bd8._0xc028f1._0x41fa99 + "; cursor: pointer;\n        ");
    _0x3f2737._0x2f6aea = _0x4f143a;
    _0x4f143a.addEventListener("input", _0x3eb5f5 => {
      const _0x4d7a34 = parseInt(_0x3eb5f5.target.value) / 100;
      _0x77303b(_0x4d7a34);
    });
    _0x47109a.appendChild(_0x5a84db);
    _0x47109a.appendChild(_0x4f143a);
    _0x23a668.appendChild(_0xa6461a);
    _0x23a668.appendChild(_0x47109a);
    _0x1aad91.appendChild(_0x23a668);
    _0x2f0b90(_0x1aad91);
    const _0xf3ed8c = document.createElement("div");
    _0xf3ed8c.appendChild(_0x386ce8());
    _0xf3ed8c.appendChild(_0x2546ec());
    _0xf3ed8c.appendChild(_0x59b644());
    _0xf3ed8c.appendChild(_0x2900f1());
    _0x1aad91.appendChild(_0xf3ed8c);
    const _0x4ec357 = document.createElement("div");
    _0x4ec357.style.cssText = "margin-top: 6px; display: flex; flex-direction: column; gap: 4px;";
    const _0x42a50e = document.createElement("div");
    _0x42a50e.style.cssText = "display: flex; justify-content: space-between; align-items: center;";
    const _0x4aadc2 = document.createElement("div");
    _0x4aadc2.textContent = "日志";
    _0x4aadc2.style.cssText = "font-size: 10px; color: " + _0x264720._0x920bd8._0xc028f1.warning + "; font-weight: 500;";
    const _0x29002a = _0x3bb623("清");
    _0x29002a.style.padding = "2px 5px";
    _0x29002a.style.fontSize = "9px";
    _0x29002a.addEventListener("click", () => {
      document.getElementById("arenaLogContainer").innerHTML = "";
      _0x2434d9("日志清");
    });
    _0x42a50e.appendChild(_0x4aadc2);
    _0x42a50e.appendChild(_0x29002a);
    const _0x583b08 = document.createElement("div");
    _0x583b08.id = "arenaLogContainer";
    _0x583b08.style.cssText = "\n            height: 80px; overflow-y: auto; background: " + _0x264720._0x920bd8._0xc028f1.lightDark + "30;\n            border-radius: 6px; padding: 4px; font-size: 9px; word-wrap: break-word; white-space: normal;\n        ";
    _0x4ec357.appendChild(_0x42a50e);
    _0x4ec357.appendChild(_0x583b08);
    _0x1aad91.appendChild(_0x4ec357);
    _0x58597c.addEventListener("click", _0x2d47ba => {
      _0x2d132();
    });
    _0x77303b(_0x264720._0x920bd8._0x4977e9);
    document.body.appendChild(_0x58597c);
    document.body.appendChild(_0x1aad91);
    setTimeout(() => {
      _0x2434d9("🐶<花狗助手就绪（四大模块：每日任务+资源并行+竞技升星+车辆助手+灯神扫荡+怪异塔）");
      _0x2434d9("竞技场版本号: " + _0x264720._0x3dd4b3, "info");
      _0x34944c("花狗助手就绪", "success");
    }, 5000);
  }
  function _0x5a96a3() {
    _0x3a57ae().then(() => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _0x30161d) : _0x30161d();
    }).catch(_0x1022f9 => {
      _0x2434d9("初始化时获取battleVersion失败: " + _0x1022f9 + "，使用默认值", "warning");
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _0x30161d) : _0x30161d();
    });
  }
  _0x5a96a3();
})();