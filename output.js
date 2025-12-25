//Thu Dec 25 2025 06:41:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x40c8fc = [...Array.from({
    length: 20
  }, (_0xec9228, _0x3e56fe) => 101 + _0x3e56fe), ...Array.from({
    length: 28
  }, (_0x58aa5d, _0x292ba3) => 201 + _0x292ba3), ...Array.from({
    length: 14
  }, (_0x29ec84, _0x30aa5e) => 301 + _0x30aa5e)];
  const _0x10b57a = {
    "101": "司马懿",
    "102": "郭嘉",
    "103": "关羽",
    "104": "诸葛亮",
    "105": "周瑜",
    "106": "太史慈",
    "107": "吕布",
    "108": "华佗",
    "109": "甄姬",
    "110": "黄月英",
    "111": "孙策",
    "112": "贾诩",
    "113": "曹仁",
    "114": "姜维",
    "115": "孙坚",
    "116": "公孙瓒",
    "117": "典韦",
    "118": "赵云",
    "119": "大乔",
    "120": "张角",
    "201": "徐晃",
    "202": "荀彧",
    "203": "橙典韦",
    "204": "张飞",
    "205": "橙赵云",
    "206": "庞统",
    "207": "鲁肃",
    "208": "陆逊",
    "209": "甘宁",
    "210": "貂蝉",
    "211": "董卓",
    "212": "橙张角",
    "213": "张辽",
    "214": "夏侯惇",
    "215": "许诸",
    "216": "夏侯渊",
    "217": "魏延",
    "218": "黄忠",
    "219": "马超",
    "220": "马岱",
    "221": "吕蒙",
    "222": "黄盖",
    "223": "蔡文姬",
    "224": "小乔",
    "225": "袁绍",
    "226": "华雄",
    "227": "颜良",
    "228": "文丑",
    "301": "周泰",
    "302": "许攸",
    "303": "于禁",
    "304": "张星彩",
    "305": "关银屏",
    "306": "关平",
    "307": "程普",
    "308": "张昭",
    "309": "陆绩",
    "310": "吕玲绮",
    "311": "潘凤",
    "312": "邢道荣",
    "313": "祝融夫人",
    "314": "孟获"
  };
  const _0x20f6e0 = {
    "1101": "黄金锦鲤",
    "1102": "利刃",
    "1103": "惊涛",
    "1104": "骇浪",
    "1105": "星驰",
    "1106": "公同心",
    "1107": "母同心",
    "1108": "公协力",
    "1109": "母协力",
    "1110": "月光",
    "1111": "公铁血",
    "1112": "母铁血",
    "1113": "公丹心",
    "1114": "母丹心",
    "1115": "巨灵",
    "1116": "公剑胆",
    "1117": "母剑胆",
    "1118": "璇玑",
    "1201": "幽影",
    "1202": "青龙",
    "1203": "火镰",
    "1204": "无双",
    "1205": "永霜",
    "1206": "八卦",
    "1207": "紫电",
    "1208": "青囊",
    "1209": "洛神",
    "1210": "机神",
    "1211": "霸王",
    "1212": "蚀骨",
    "1213": "坚盾",
    "1214": "麒麟",
    "1215": "古锤",
    "1216": "义从",
    "1217": "恶来",
    "1218": "龙胆",
    "1219": "国色",
    "1220": "天公",
    "1301": "月尾",
    "1302": "焰神",
    "1303": "红蝶",
    "1304": "赤羽",
    "1305": "千年笛",
    "1401": "四带胡椒",
    "1402": "鬼狮子鱼",
    "1403": "黑斑雀鲷",
    "1404": "诅咒花鳅",
    "1405": "九斑刺豚",
    "1406": "魔鬼刺镰",
    "1407": "黄背刺鲷",
    "1408": "黒鳍刺蜩",
    "1409": "长棘刺蜩",
    "1410": "粒突箱豚",
    "1411": "大跳跳鱼",
    "1412": "蓝心胖头",
    "1501": "钱胡椒",
    "1502": "狮子鱼",
    "1503": "塔雀鯛",
    "1504": "紫斑鳅",
    "1505": "密刺豚",
    "1506": "长鳍鐮",
    "1601": "胖头鱼",
    "1602": "青刺鲷",
    "1603": "跳跳鱼",
    "1604": "箱豚鱼"
  };
  const _0x5c5d45 = {
    PURPLE: [227, 228, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312],
    RED: Array.from({
      length: 20
    }, (_0x4cda36, _0x26b468) => 101 + _0x26b468),
    ORANGE: [...Array.from({
      length: 26
    }, (_0x5c22f6, _0x45cbb4) => 201 + _0x45cbb4), 313, 314]
  };
  const _0x5d1509 = [{
    min: 1,
    max: 5,
    cost: 8
  }, {
    min: 6,
    max: 10,
    cost: 40
  }, {
    min: 11,
    max: 15,
    cost: 80
  }, {
    min: 16,
    max: 20,
    cost: 200
  }, {
    min: 21,
    max: 30,
    cost: 400
  }];
  function _0x106dbc(_0x30d245) {
    if (_0x5c5d45.PURPLE.includes(_0x30d245)) {
      return 1;
    } else {
      return _0x5c5d45.RED.includes(_0x30d245) ? 8 : 4;
    }
  }
  function _0x24a1a3(_0x505ea6, _0x59d081) {
    if (_0x59d081 === -1) {
      return _0x106dbc(_0x505ea6);
    }
    const _0x4d913d = _0x59d081 + 1;
    for (const _0x878d6d of _0x5d1509) {
      if (_0x4d913d >= _0x878d6d.min && _0x4d913d <= _0x878d6d.max) {
        return _0x878d6d.cost;
      }
    }
    return 0;
  }
  function _0x5b6134(_0x13ec76, _0x3df3b4, _0x47dbbf) {
    let _0x516920 = 0;
    let _0x190607 = _0x3df3b4;
    let _0x20513f = _0x47dbbf;
    while (_0x190607 < 30) {
      const _0x2b4c16 = _0x24a1a3(_0x13ec76, _0x190607);
      if (_0x2b4c16 === 0 || _0x20513f < _0x2b4c16) {
        break;
      }
      _0x20513f -= _0x2b4c16;
      _0x190607++;
      _0x516920++;
    }
    return _0x516920;
  }
  let _0x4570b2 = null;
  let _0x4c581e = false;
  async function _0x251f5b() {
    return new Promise(_0x5b59f3 => {
      const _0x3fcf81 = () => {
        window.ws && typeof window.ws.sendAsync === "function" ? _0x5b59f3() : setTimeout(_0x3fcf81, 500);
      };
      _0x3fcf81();
    });
  }
  async function _0x7b0498(_0x34a1fa, _0x52ffd8 = {}) {
    let _0x2b4909;
    window.g_utils && typeof window.g_utils.bon?.["encode"] === "function" ? _0x2b4909 = {
      ack: 0,
      body: window.g_utils.bon.encode(_0x52ffd8),
      cmd: _0x34a1fa,
      seq: Date.now(),
      time: Date.now()
    } : _0x2b4909 = {
      ack: 0,
      cmd: _0x34a1fa,
      params: _0x52ffd8,
      seq: Date.now(),
      time: Date.now()
    };
    return await window.ws.sendAsync(_0x2b4909);
  }
  async function _0x44b3bd() {
    _0x386444("正在获取角色信息...", "info");
    try {
      const _0x19f851 = await _0x7b0498("role_getroleinfo", {});
      const _0x50c300 = _0x19f851?.["_rawData"]?.["role"] || _0x19f851?.["body"]?.["role"] || _0x19f851?.["role"];
      _0x50c300 ? (_0x4570b2 = _0x50c300, _0x386444("角色信息获取成功", "success"), _0x4cdf06()) : _0x386444("获取角色信息失败", "error");
    } catch (_0x363d81) {
      _0x386444("获取角色信息异常: " + _0x363d81.message, "error");
    }
  }
  function _0x4cdf06() {
    if (!_0x4570b2) {
      return;
    }
    const _0x37f585 = _0x4570b2.heroes || {};
    const _0x2f066b = _0x4570b2.items || {};
    const _0x31e8a0 = _0x4570b2.artifactBooks || {};
    const _0x172112 = _0x4570b2.skinBook || {};
    let _0x4a0bd3 = 0;
    let _0x3f793b = 0;
    let _0x4e039a = 0;
    let _0x11dd5d = 0;
    let _0x4d14c2 = [];
    for (const _0x44f2bb of _0x40c8fc) {
      const _0x3f17fc = _0x37f585[_0x44f2bb];
      const _0x208081 = _0x2f066b[_0x44f2bb];
      const _0x285715 = _0x3f17fc ? _0x3f17fc.star || 0 : -1;
      const _0x1bc215 = _0x3f17fc?.["bookStar"] || 0;
      const _0x4741ed = _0x208081?.["quantity"] || 0;
      const _0x1b8b08 = _0x5b6134(parseInt(_0x44f2bb), _0x285715, _0x4741ed);
      if (_0x1b8b08 > 0 && _0x285715 < 30) {
        _0x4a0bd3 += _0x1b8b08;
        const _0x4b7fb3 = _0x10b57a[_0x44f2bb] || "ID:" + _0x44f2bb;
        const _0xe6eabd = _0x285715 === -1 ? "未唤醒" : _0x285715 + "星";
        const _0x38993e = _0x285715 + _0x1b8b08 === 0 ? "唤醒" : _0x285715 + _0x1b8b08 + "星";
        _0x4d14c2.push(_0x4b7fb3 + "(" + _0xe6eabd + "→" + _0x38993e + ")");
      }
      _0x285715 > _0x1bc215 && (_0x3f793b += _0x285715 - _0x1bc215);
    }
    for (const [_0x35ce21, _0x296915] of Object.entries(_0x31e8a0)) {
      const _0x227d37 = String(_0x296915.artifactId || "");
      const _0x921427 = _0x296915.claimedStar || 0;
      let _0x8c5b3d = parseInt(_0x227d37.slice(-1));
      _0x8c5b3d === 0 && _0x227d37.length > 1 && (_0x8c5b3d = parseInt(_0x227d37.slice(-2, -1)));
      _0x8c5b3d > _0x921427 && (_0x4e039a += _0x8c5b3d - _0x921427);
    }
    for (const [_0x41ebed, _0x16f329] of Object.entries(_0x172112)) {
      _0x16f329 === false && _0x11dd5d++;
    }
    document.getElementById("star-hero-count").textContent = _0x4a0bd3;
    document.getElementById("star-book-count").textContent = _0x3f793b;
    document.getElementById("star-artifact-count").textContent = _0x4e039a;
    document.getElementById("star-skin-count").textContent = _0x11dd5d;
    _0x386444("分析完成: 可升星" + _0x4a0bd3 + "次, 图鉴" + (_0x3f793b + _0x4e039a + _0x11dd5d) + "次(武将" + _0x3f793b + "+鱼灵" + _0x4e039a + "+皮肤" + _0x11dd5d + ")", "success");
    _0x4d14c2.length > 0 && _0x386444("可升星: " + _0x4d14c2.join(", "), "info");
  }
  async function _0x5c90f0() {
    if (!_0x4570b2 || _0x4c581e) {
      return;
    }
    _0x4c581e = true;
    _0x1ce78b();
    const _0x406b39 = parseInt(document.getElementById("star-delay").value) || 50;
    let _0x2f97ad = 0;
    _0x386444("开始武将升星...", "info");
    _0x386444("===== 第一阶段：唤醒所有未唤醒英雄 =====", "info");
    const _0x9c766a = _0x4570b2.heroes || {};
    const _0x2091ed = _0x4570b2.items || {};
    for (const _0x24f2e2 of _0x40c8fc) {
      if (!_0x4c581e) {
        break;
      }
      const _0xa2e684 = _0x9c766a[_0x24f2e2];
      const _0x526854 = _0x2091ed[_0x24f2e2];
      let _0x41978a = _0x526854?.["quantity"] || 0;
      if (_0xa2e684 || _0x41978a <= 0) {
        continue;
      }
      const _0x4611e0 = _0x24a1a3(parseInt(_0x24f2e2), -1);
      if (_0x4611e0 === 0 || _0x41978a < _0x4611e0) {
        continue;
      }
      const _0x4fc03e = _0x10b57a[_0x24f2e2] || "ID:" + _0x24f2e2;
      try {
        const _0x2cd21f = await _0x7b0498("hero_synthetic", {
          itemId: parseInt(_0x24f2e2)
        });
        if (_0x2cd21f?.["ack"] === 1 || _0x2cd21f?.["code"] === 0) {
          _0x2f97ad++;
          _0x386444(_0x4fc03e + " 唤醒成功", "success");
          if (!_0x4570b2.heroes) {
            _0x4570b2.heroes = {};
          }
          _0x4570b2.heroes[_0x24f2e2] = {
            star: 0,
            bookStar: 0
          };
          _0x4570b2.items?.[_0x24f2e2] && (_0x4570b2.items[_0x24f2e2].quantity = _0x41978a - _0x4611e0);
        } else {
          _0x386444(_0x4fc03e + " 唤醒失败 (" + JSON.stringify(_0x2cd21f?.["code"] || _0x2cd21f?.["ack"]) + ")", "error");
        }
      } catch (_0x1b2388) {
        _0x386444(_0x4fc03e + " 唤醒异常: " + _0x1b2388.message, "error");
      }
      await _0x27bb4f(_0x406b39);
    }
    _0x4c581e && (_0x386444("唤醒阶段完成，刷新数据中...", "info"), _0x4c581e = false, _0x1ce78b(), await _0x44b3bd(), _0x4c581e = true, _0x1ce78b());
    if (_0x4c581e) {
      _0x386444("===== 第二阶段：执行所有英雄升星 =====", "info");
      const _0x4a43e1 = _0x4570b2.heroes || {};
      const _0x5a434b = _0x4570b2.items || {};
      for (const _0x17f96d of _0x40c8fc) {
        if (!_0x4c581e) {
          break;
        }
        const _0x412bfd = _0x4a43e1[_0x17f96d];
        const _0x4d53a6 = _0x5a434b[_0x17f96d];
        if (!_0x412bfd) {
          continue;
        }
        let _0x5097fb = _0x4d53a6?.["quantity"] || 0;
        if (_0x5097fb <= 0) {
          continue;
        }
        let _0x3062a2 = _0x412bfd.star || 0;
        const _0x1173c6 = _0x10b57a[_0x17f96d] || "ID:" + _0x17f96d;
        const _0x5b605f = _0x5b6134(parseInt(_0x17f96d), _0x3062a2, _0x5097fb);
        if (_0x5b605f <= 0) {
          continue;
        }
        _0x386444(_0x1173c6 + " 开始升星，预计升" + _0x5b605f + "级，当前" + _0x3062a2 + "星，碎片" + _0x5097fb + "个", "info");
        let _0x29555e = 0;
        while (_0x29555e < _0x5b605f && _0x3062a2 < 30 && _0x4c581e) {
          const _0x555950 = _0x24a1a3(parseInt(_0x17f96d), _0x3062a2);
          if (_0x555950 === 0 || _0x5097fb < _0x555950) {
            break;
          }
          try {
            const _0x48eebe = await _0x7b0498("hero_heroupgradestar", {
              heroId: parseInt(_0x17f96d)
            });
            if (_0x48eebe?.["ack"] === 1 || _0x48eebe?.["code"] === 0) {
              _0x3062a2++;
              _0x5097fb -= _0x555950;
              _0x29555e++;
              _0x2f97ad++;
              _0x386444(_0x1173c6 + " 升星成功 → " + _0x3062a2 + "星", "success");
              _0x4570b2.heroes?.[_0x17f96d] && (_0x4570b2.heroes[_0x17f96d].star = _0x3062a2);
              _0x4570b2.items?.[_0x17f96d] && (_0x4570b2.items[_0x17f96d].quantity = _0x5097fb);
            } else {
              _0x386444(_0x1173c6 + " 升星失败 (" + JSON.stringify(_0x48eebe?.["code"] || _0x48eebe?.["ack"]) + ")", "error");
              break;
            }
          } catch (_0x4d71cd) {
            _0x386444(_0x1173c6 + " 升星异常: " + _0x4d71cd.message, "error");
            break;
          }
          await _0x27bb4f(_0x406b39);
        }
      }
    }
    _0x386444("武将升星完成，共操作" + _0x2f97ad + "次", "success");
    _0x4c581e = false;
    _0x1ce78b();
    await _0x44b3bd();
  }
  async function _0x4fac87() {
    if (!_0x4570b2) {
      return;
    }
    _0x4c581e = true;
    _0x1ce78b();
    const _0x6f078e = parseInt(document.getElementById("star-delay").value) || 50;
    let _0x3a8f2e = 0;
    let _0x468082 = 0;
    let _0x161d46 = 0;
    _0x386444("开始图鉴升级...", "info");
    for (const _0x61c7df of _0x40c8fc) {
      if (!_0x4c581e) {
        break;
      }
      const _0x56e944 = _0x4570b2.heroes?.[_0x61c7df];
      if (!_0x56e944) {
        continue;
      }
      const _0x3dfe7e = _0x56e944.star || 0;
      let _0x467a2d = _0x56e944.bookStar || 0;
      const _0x164f62 = _0x10b57a[_0x61c7df] || "ID:" + _0x61c7df;
      while (_0x467a2d < _0x3dfe7e && _0x4c581e) {
        try {
          const _0x17beb4 = await _0x7b0498("book_upgrade", {
            heroId: parseInt(_0x61c7df)
          });
          if (_0x17beb4?.["ack"] === 1 || _0x17beb4?.["code"] === 0) {
            _0x467a2d++;
            _0x3a8f2e++;
            _0x386444(_0x164f62 + " 图鉴升级 → " + _0x467a2d + "星", "success");
          } else {
            break;
          }
        } catch (_0x2b47c8) {
          break;
        }
        await _0x27bb4f(_0x6f078e);
      }
    }
    for (const [_0x330259, _0x30421c] of Object.entries(_0x4570b2.artifactBooks || {})) {
      if (!_0x4c581e) {
        break;
      }
      const _0xdb0da7 = String(_0x30421c.artifactId || "");
      let _0x488a20 = _0x30421c.claimedStar || 0;
      let _0x1090f4 = parseInt(_0xdb0da7.slice(-1));
      if (_0x1090f4 === 0 && _0xdb0da7.length > 1) {
        _0x1090f4 = parseInt(_0xdb0da7.slice(-2, -1));
      }
      const _0x4558d2 = _0x20f6e0[_0xdb0da7.slice(0, 4)] || "鱼灵" + _0x330259;
      while (_0x488a20 < _0x1090f4 && _0x4c581e) {
        try {
          const _0x48fdf3 = await _0x7b0498("book_upgradeartifact", {
            artifactId: parseInt(_0x330259)
          });
          if (_0x48fdf3?.["ack"] === 1 || _0x48fdf3?.["code"] === 0) {
            _0x488a20++;
            _0x468082++;
            _0x386444(_0x4558d2 + " 图鉴升级 → " + _0x488a20 + "星", "success");
          } else {
            break;
          }
        } catch (_0x4e6a14) {
          break;
        }
        await _0x27bb4f(_0x6f078e);
      }
    }
    for (const [_0x58f9ec, _0x232fa2] of Object.entries(_0x4570b2.skinBook || {})) {
      if (!_0x4c581e) {
        break;
      }
      if (_0x232fa2 === false) {
        try {
          const _0x4bbbe3 = await _0x7b0498("book_claimskinpoint", {
            skinId: parseInt(_0x58f9ec)
          });
          (_0x4bbbe3?.["ack"] === 1 || _0x4bbbe3?.["code"] === 0) && (_0x161d46++, _0x386444("皮肤" + _0x58f9ec + " 图鉴升级成功", "success"));
        } catch (_0x74f4d2) {}
        await _0x27bb4f(_0x6f078e);
      }
    }
    _0x386444("图鉴升级完成: 武将" + _0x3a8f2e + "+鱼灵" + _0x468082 + "+皮肤" + _0x161d46, "success");
    _0x4c581e = false;
    _0x1ce78b();
    await _0x44b3bd();
  }
  async function _0x2d391d() {
    if (!_0x4570b2 || _0x4c581e) {
      return;
    }
    _0x4c581e = true;
    _0x1ce78b();
    const _0x302c08 = _0x4570b2.artifactBooks || {};
    const _0x301a85 = parseInt(document.getElementById("star-delay").value) || 50;
    let _0x4f5422 = 0;
    _0x386444("开始鱼灵图鉴升级...", "info");
    for (const [_0x2c9a02, _0x227a23] of Object.entries(_0x302c08)) {
      if (!_0x4c581e) {
        break;
      }
      const _0x31fc5e = String(_0x227a23.artifactId || "");
      let _0x54c297 = _0x227a23.claimedStar || 0;
      let _0x40e672 = parseInt(_0x31fc5e.slice(-1));
      _0x40e672 === 0 && _0x31fc5e.length > 1 && (_0x40e672 = parseInt(_0x31fc5e.slice(-2, -1)));
      const _0x9517ea = _0x20f6e0[_0x31fc5e.slice(0, 4)] || "鱼灵" + _0x2c9a02;
      while (_0x54c297 < _0x40e672 && _0x4c581e) {
        try {
          const _0x3e548a = await _0x7b0498("book_upgradeartifact", {
            artifactId: parseInt(_0x2c9a02)
          });
          if (_0x3e548a?.["ack"] === 1 || _0x3e548a?.["code"] === 0) {
            _0x54c297++;
            _0x4f5422++;
            _0x386444(_0x9517ea + " 图鉴升级成功 → " + _0x54c297 + "星", "success");
          } else {
            _0x386444(_0x9517ea + " 图鉴升级失败", "error");
            break;
          }
        } catch (_0x2bd97b) {
          _0x386444(_0x9517ea + " 图鉴升级异常", "error");
          break;
        }
        await _0x27bb4f(_0x301a85);
      }
    }
    _0x386444("鱼灵图鉴升级完成，共升级" + _0x4f5422 + "次", "success");
    _0x4c581e = false;
    _0x1ce78b();
    await _0x44b3bd();
  }
  async function _0x160ce1() {
    if (!_0x4570b2 || _0x4c581e) {
      return;
    }
    _0x4c581e = true;
    _0x1ce78b();
    const _0x3b0a81 = _0x4570b2.skinBook || {};
    const _0x4ec43c = parseInt(document.getElementById("star-delay").value) || 50;
    let _0x29b437 = 0;
    _0x386444("开始皮肤图鉴升级...", "info");
    for (const [_0x148868, _0x24e1dc] of Object.entries(_0x3b0a81)) {
      if (!_0x4c581e) {
        break;
      }
      if (_0x24e1dc === false) {
        try {
          const _0x24a4cd = await _0x7b0498("book_claimskinpoint", {
            skinId: parseInt(_0x148868)
          });
          _0x24a4cd?.["ack"] === 1 || _0x24a4cd?.["code"] === 0 ? (_0x29b437++, _0x386444("皮肤" + _0x148868 + " 图鉴升级成功", "success")) : _0x386444("皮肤" + _0x148868 + " 图鉴升级失败", "error");
        } catch (_0x2939e5) {
          _0x386444("皮肤" + _0x148868 + " 图鉴升级异常", "error");
        }
        await _0x27bb4f(_0x4ec43c);
      }
    }
    _0x386444("皮肤图鉴升级完成，共升级" + _0x29b437 + "次", "success");
    _0x4c581e = false;
    _0x1ce78b();
    await _0x44b3bd();
  }
  async function _0x57faa4() {
    if (!_0x4570b2 || _0x4c581e) {
      return;
    }
    await _0x5c90f0();
    !_0x4c581e && (_0x4c581e = true, _0x1ce78b(), _0x386444("重新获取最新数据...", "info"), await _0x44b3bd(), _0x4c581e = false, _0x1ce78b());
    !_0x4c581e && _0x4570b2 && (_0x4c581e = true, _0x1ce78b(), await _0x4fac87());
    !_0x4c581e && (_0x4c581e = true, _0x1ce78b(), _0x386444("再次获取最新数据...", "info"), await _0x44b3bd(), _0x4c581e = false, _0x1ce78b());
    if (!_0x4c581e && _0x4570b2) {
      _0x4c581e = true;
      _0x1ce78b();
      const _0xfc47b1 = parseInt(document.getElementById("star-delay").value) || 50;
      _0x386444("领取图鉴积分奖励...", "info");
      let _0x5b6b81 = 0;
      for (let _0x12391b = 0; _0x12391b < 10 && _0x4c581e; _0x12391b++) {
        try {
          const _0xbd23b9 = await _0x7b0498("book_claimpointreward", {});
          (_0xbd23b9?.["ack"] === 1 || _0xbd23b9?.["code"] === 0) && _0x5b6b81++;
        } catch (_0x5ec456) {}
        await _0x27bb4f(_0xfc47b1);
      }
      _0x386444("图鉴奖励领取完成，共" + _0x5b6b81 + "次", "success");
    }
    _0x4c581e = false;
    _0x1ce78b();
    await _0x44b3bd();
  }
  async function _0x28b8d6() {
    if (_0x4c581e) {
      return;
    }
    _0x4c581e = true;
    _0x1ce78b();
    const _0x145699 = parseInt(document.getElementById("star-delay").value) || 50;
    let _0x135041 = 0;
    _0x386444("开始领取图鉴奖励...", "info");
    for (let _0x56f9a1 = 0; _0x56f9a1 < 20; _0x56f9a1++) {
      if (!_0x4c581e) {
        break;
      }
      try {
        const _0x4833d3 = await _0x7b0498("book_claimpointreward", {});
        if (_0x4833d3?.["code"] === 0) {
          _0x135041++;
          _0x386444("领取图鉴奖励成功 (" + _0x135041 + ")", "success");
        } else {
          break;
        }
      } catch (_0x17ec1c) {
        break;
      }
      await _0x27bb4f(_0x145699);
    }
    _0x386444("图鉴奖励领取完成，共" + _0x135041 + "次", "success");
    _0x4c581e = false;
    _0x1ce78b();
  }
  function _0x3922bc() {
    _0x4c581e = false;
    _0x1ce78b();
    _0x386444("已停止", "info");
  }
  function _0x1ce78b() {
    const _0x464950 = document.querySelectorAll(".star-btn-action");
    _0x464950.forEach(_0x5018a1 => {
      _0x5018a1.disabled = _0x4c581e;
      _0x5018a1.style.opacity = _0x4c581e ? "0.5" : "1";
    });
    document.getElementById("star-stop-btn").disabled = !_0x4c581e;
    document.getElementById("star-stop-btn").style.opacity = _0x4c581e ? "1" : "0.5";
  }
  function _0x27bb4f(_0x6c5a7c) {
    return new Promise(_0x211320 => setTimeout(_0x211320, _0x6c5a7c));
  }
  function _0x386444(_0x5aa266, _0x3742e3 = "info") {
    const _0xfd487f = document.getElementById("star-log");
    if (!_0xfd487f) {
      return;
    }
    const _0x462247 = new Date().toLocaleTimeString();
    const _0x1217f6 = {
      success: "#4ade80",
      error: "#f87171",
      info: "#60a5fa"
    };
    const _0x3b2b8f = document.createElement("div");
    _0x3b2b8f.style.color = _0x1217f6[_0x3742e3] || "#aaa";
    _0x3b2b8f.textContent = "[" + _0x462247 + "] " + _0x5aa266;
    _0xfd487f.appendChild(_0x3b2b8f);
    _0xfd487f.scrollTop = _0xfd487f.scrollHeight;
  }
  function _0x4a7e17() {
    const _0x5f09bd = document.getElementById("star-upgrade-panel");
    if (_0x5f09bd) {
      _0x5f09bd.remove();
    }
    const _0x92093e = document.getElementById("star-upgrade-icon");
    if (_0x92093e) {
      _0x92093e.remove();
    }
    const _0x54cfc9 = document.createElement("div");
    _0x54cfc9.id = "star-upgrade-icon";
    _0x54cfc9.innerHTML = "\n            <style>\n                #star-upgrade-icon {\n                    position: fixed;\n                    top: 140px;\n                    right: 20px;\n                    width: 30px;\n                    height: 30px;\n                    cursor: pointer;\n                    z-index: 100000;\n                    transition: transform 0.2s;\n                }\n                #star-upgrade-icon:hover { transform: scale(1.1); }\n                #star-upgrade-icon img { width: 100%; height: 100%; }\n            </style>\n            <img src=\"https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a9/a96c00f7-6ef2-4192-9247-f2fa9f888c8d.01b16.png\" alt=\"升星图鉴\">\n        ";
    document.body.appendChild(_0x54cfc9);
    const _0x36ee8f = document.createElement("div");
    _0x36ee8f.id = "star-upgrade-panel";
    _0x36ee8f.innerHTML = "\n            <style>\n                #star-upgrade-panel {\n                    position: fixed;\n                    top: 50px;\n                    right: 60px;\n                    width: 320px;\n                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);\n                    border: 1px solid #3a3a5a;\n                    border-radius: 12px;\n                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n                    z-index: 99999;\n                    box-shadow: 0 8px 32px rgba(0,0,0,0.4);\n                    display: none;\n                }\n                #star-upgrade-header {\n                    background: rgba(0,0,0,0.3);\n                    padding: 12px 15px;\n                    border-radius: 12px 12px 0 0;\n                    cursor: pointer;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                }\n                #star-upgrade-header span { color: #fff; font-weight: 600; font-size: 14px; }\n                #star-upgrade-body { padding: 15px; }\n                .star-row { display: flex; align-items: center; margin-bottom: 10px; gap: 10px; }\n                .star-label { color: #a0aec0; font-size: 12px; min-width: 80px; }\n                .star-value { color: #4ade80; font-size: 14px; font-weight: 600; }\n                .star-input {\n                    flex: 1;\n                    background: rgba(255,255,255,0.1);\n                    border: 1px solid rgba(255,255,255,0.2);\n                    border-radius: 6px;\n                    padding: 8px 12px;\n                    color: #fff;\n                    font-size: 13px;\n                }\n                .star-btn-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }\n                .star-btn {\n                    flex: 1;\n                    min-width: 90px;\n                    padding: 10px 12px;\n                    border: none;\n                    border-radius: 8px;\n                    cursor: pointer;\n                    font-size: 12px;\n                    font-weight: 600;\n                    transition: all 0.2s;\n                }\n                .star-btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; }\n                .star-btn-success { background: linear-gradient(135deg, #38a169 0%, #2f855a 100%); color: #fff; }\n                .star-btn-warning { background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); color: #fff; }\n                .star-btn-danger { background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%); color: #fff; }\n                .star-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }\n                .star-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }\n                #star-log {\n                    background: rgba(0,0,0,0.3);\n                    border-radius: 8px;\n                    padding: 10px;\n                    height: 150px;\n                    overflow-y: auto;\n                    font-size: 11px;\n                    line-height: 1.6;\n                    margin-top: 10px;\n                }\n                #star-log::-webkit-scrollbar { width: 6px; }\n                #star-log::-webkit-scrollbar-thumb { background: #4a4a6a; border-radius: 3px; }\n                .star-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }\n                .star-stat-item {\n                    background: rgba(255,255,255,0.05);\n                    border-radius: 8px;\n                    padding: 10px;\n                    text-align: center;\n                }\n                .star-stat-label { color: #a0aec0; font-size: 11px; }\n                .star-stat-value { color: #4ade80; font-size: 18px; font-weight: 600; }\n            </style>\n            <div id=\"star-upgrade-header\">\n                <span>升星图鉴助手</span>\n            </div>\n            <div id=\"star-upgrade-body\">\n                <div class=\"star-stats\">\n                    <div class=\"star-stat-item\">\n                        <div class=\"star-stat-label\">可升星次数</div>\n                        <div class=\"star-stat-value\" id=\"star-hero-count\">-</div>\n                    </div>\n                    <div class=\"star-stat-item\">\n                        <div class=\"star-stat-label\">武将图鉴</div>\n                        <div class=\"star-stat-value\" id=\"star-book-count\">-</div>\n                    </div>\n                    <div class=\"star-stat-item\">\n                        <div class=\"star-stat-label\">鱼灵图鉴</div>\n                        <div class=\"star-stat-value\" id=\"star-artifact-count\">-</div>\n                    </div>\n                    <div class=\"star-stat-item\">\n                        <div class=\"star-stat-label\">皮肤图鉴</div>\n                        <div class=\"star-stat-value\" id=\"star-skin-count\">-</div>\n                    </div>\n                </div>\n                <div class=\"star-row\">\n                    <span class=\"star-label\">间隔(毫秒)</span>\n                    <input type=\"number\" class=\"star-input\" id=\"star-delay\" value=\"50\" min=\"10\">\n                </div>\n                <div class=\"star-btn-row\">\n                    <button class=\"star-btn star-btn-primary star-btn-action\" id=\"star-refresh-btn\">刷新数据</button>\n                    <button class=\"star-btn star-btn-success star-btn-action\" id=\"star-hero-btn\">武将升星</button>\n                </div>\n                <div class=\"star-btn-row\">\n                    <button class=\"star-btn star-btn-warning star-btn-action\" id=\"star-book-btn\">图鉴升级</button>\n                    <button class=\"star-btn star-btn-primary star-btn-action\" id=\"star-all-btn\">一键升级</button>\n                </div>\n                <div class=\"star-btn-row\">\n                    <button class=\"star-btn star-btn-danger\" id=\"star-stop-btn\">停止</button>\n                </div>\n                <div id=\"star-log\">\n                    <div style=\"color:#adb5bd;\">等待操作...</div>\n                </div>\n            </div>\n        ";
    document.body.appendChild(_0x36ee8f);
    let _0x461763 = false;
    let _0x1bd72e;
    let _0x23870f;
    let _0x593bfa;
    let _0x586c8b;
    const _0x5940f3 = (_0x20093a, _0x36c757) => {
      _0x461763 = false;
      _0x1bd72e = _0x20093a;
      _0x23870f = _0x36c757;
      _0x593bfa = _0x54cfc9.offsetLeft;
      _0x586c8b = _0x54cfc9.offsetTop;
    };
    const _0x1ee1c6 = (_0xd1e5c, _0x6d7fea) => {
      const _0x1aac59 = _0xd1e5c - _0x1bd72e;
      const _0x2f2029 = _0x6d7fea - _0x23870f;
      (Math.abs(_0x1aac59) > 5 || Math.abs(_0x2f2029) > 5) && (_0x461763 = true, _0x54cfc9.style.left = _0x593bfa + _0x1aac59 + "px", _0x54cfc9.style.top = _0x586c8b + _0x2f2029 + "px", _0x54cfc9.style.right = "auto");
    };
    const _0x5149c5 = () => {
      !_0x461763 && (_0x36ee8f.style.display = _0x36ee8f.style.display === "none" ? "block" : "none");
      document.onmousemove = null;
      document.onmouseup = null;
    };
    _0x54cfc9.onmousedown = _0x3c0823 => {
      _0x5940f3(_0x3c0823.clientX, _0x3c0823.clientY);
      document.onmousemove = _0x1f201a => _0x1ee1c6(_0x1f201a.clientX, _0x1f201a.clientY);
      document.onmouseup = _0x5149c5;
      _0x3c0823.preventDefault();
    };
    _0x54cfc9.ontouchstart = _0x586e63 => {
      const _0x3241c1 = _0x586e63.touches[0];
      _0x5940f3(_0x3241c1.clientX, _0x3241c1.clientY);
      _0x586e63.preventDefault();
    };
    _0x54cfc9.ontouchmove = _0x1510eb => {
      const _0x26d5d3 = _0x1510eb.touches[0];
      _0x1ee1c6(_0x26d5d3.clientX, _0x26d5d3.clientY);
      _0x1510eb.preventDefault();
    };
    _0x54cfc9.ontouchend = _0x5149c5;
    document.getElementById("star-upgrade-header").onclick = () => {
      _0x36ee8f.style.display = "none";
    };
    document.getElementById("star-refresh-btn").onclick = _0x44b3bd;
    document.getElementById("star-hero-btn").onclick = _0x5c90f0;
    document.getElementById("star-book-btn").onclick = _0x4fac87;
    document.getElementById("star-all-btn").onclick = _0x57faa4;
    document.getElementById("star-stop-btn").onclick = _0x3922bc;
  }
  async function _0x44312f() {
    await _0x251f5b();
    _0x4a7e17();
    _0x386444("脚本已加载，点击\"刷新数据\"获取信息", "success");
  }
  document.readyState === "complete" ? _0x44312f() : window.addEventListener("load", _0x44312f);
})();