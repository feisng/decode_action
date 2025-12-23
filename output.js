//Tue Dec 23 2025 10:44:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";

  const _0x5b190f = (_0x21dcca, _0x4907f5, _0x6e8abc, _0x5a1b08) => {
    return new Promise(_0x5eb058 => {
      if (window[_0x4907f5] && _0x5a1b08.value) {
        _0x5eb058(true);
        return;
      }
      let _0x50ba57 = 0;
      const _0x38b14b = 10000;
      const _0x228a95 = () => {
        if (_0x50ba57 >= _0x6e8abc.length) {
          _0x5eb058(false);
          return;
        }
        const _0x314f79 = document.createElement("script");
        _0x314f79.src = _0x6e8abc[_0x50ba57];
        const _0x26d01a = setTimeout(() => {
          console.warn(_0x21dcca + "加载超时 (" + _0x6e8abc[_0x50ba57] + ")");
          _0x314f79.onerror();
        }, _0x38b14b);
        _0x314f79.onload = () => {
          clearTimeout(_0x26d01a);
          _0x5a1b08.value = true;
          console.log(_0x21dcca + "加载成功 (" + _0x6e8abc[_0x50ba57] + ")");
          _0x5eb058(true);
        };
        _0x314f79.onerror = () => {
          clearTimeout(_0x26d01a);
          console.warn(_0x21dcca + "加载失败，尝试下一个源 (" + _0x6e8abc[_0x50ba57] + ")");
          _0x50ba57++;
          _0x228a95();
        };
        document.head.appendChild(_0x314f79);
      };
      _0x228a95();
    });
  };
  const _0x33e031 = {
    html2canvas: false,
    sheetjs: false
  };
  const _0x37bca4 = () => _0x5b190f("html2canvas", "html2canvas", ["https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js", "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", "https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"], {
    value: _0x33e031.html2canvas
  });
  const _0x181315 = _0x619a14 => !_0x619a14 ? "0" : _0x619a14 >= 100000000 ? (_0x619a14 / 100000000).toFixed(1) + "亿" : _0x619a14 >= 10000 ? Math.round(_0x619a14 / 10000) + "w" : String(_0x619a14);
  const _0x1776c3 = (_0x42ace1, _0x4fb368 = Infinity) => {
    const _0x25afbe = [];
    const _0x44dce6 = new Date();
    const _0x183260 = _0x44dce6.getFullYear();
    const _0x11987f = _0x44dce6.getMonth();
    const _0x2e64b0 = new Date(_0x183260, _0x11987f, 1);
    const _0x222d87 = new Date(_0x183260, _0x11987f + 1, 0);
    let _0x38dd4a = new Date(_0x2e64b0);
    while (_0x38dd4a.getDay() !== _0x42ace1 && _0x38dd4a <= _0x222d87) {
      _0x38dd4a.setDate(_0x38dd4a.getDate() + 1);
    }
    while (_0x38dd4a <= _0x222d87 && _0x25afbe.length < _0x4fb368) {
      const _0x33346d = new Date(_0x38dd4a);
      _0x25afbe.push({
        displayDate: _0x33346d,
        actualDate: new Date(_0x33346d)
      });
      _0x38dd4a.setDate(_0x38dd4a.getDate() + 7);
    }
    return _0x25afbe;
  };
  const _0x4f67a8 = () => _0x1776c3(0, 3);
  const _0x406605 = _0x17c12e => {
    const _0x23ca2a = _0x17c12e.getFullYear();
    const _0xc30cdc = String(_0x17c12e.getMonth() + 1).padStart(2, "0");
    const _0x9dc02b = String(_0x17c12e.getDate()).padStart(2, "0");
    return {
      display: _0x23ca2a + "-" + _0xc30cdc + "-" + _0x9dc02b,
      actual: _0x23ca2a + "/" + _0xc30cdc + "/" + _0x9dc02b
    };
  };
  const _0x3bf9f5 = (_0x131d95, _0x5108c8, _0x2ae1b7 = null) => {
    const _0x5d6eb8 = document.getElementById(_0x131d95);
    if (!_0x5d6eb8) {
      return;
    }
    _0x5d6eb8.innerHTML = "";
    _0x5108c8.forEach(_0x300fc0 => {
      const {
        display: _0x5d8018,
        actual: _0x571a76
      } = _0x406605(_0x300fc0.displayDate);
      const _0x35d1c3 = document.createElement("option");
      _0x35d1c3.value = _0x571a76;
      _0x35d1c3.textContent = _0x5d8018;
      _0x5d6eb8.appendChild(_0x35d1c3);
    });
    if (_0x2ae1b7 && _0x5108c8.length > 0) {
      const {
        actual: _0x20c926
      } = _0x406605(_0x2ae1b7.actualDate);
      _0x5d6eb8.value = _0x20c926;
    } else {
      if (_0x5108c8.length > 0) {
        const {
          actual: _0x1f4099
        } = _0x406605(_0x5108c8[0].actualDate);
        _0x5d6eb8.value = _0x1f4099;
      }
    }
  };
  const _0x295ad7 = async (_0x272eef, _0x9f7f96 = {}) => {
    const _0x5b0bf1 = window.ws || window.h5websocket?.["ws"];
    if (!_0x5b0bf1?.["sendAsync"]) {
      throw new Error("游戏未连接");
    }
    const _0x1e0f81 = window.g_utils?.["bon"]?.["encode"] ? {
      ack: 0,
      body: window.g_utils.bon.encode(_0x9f7f96),
      cmd: _0x272eef,
      seq: Date.now(),
      time: Date.now()
    } : {
      ack: 0,
      cmd: _0x272eef,
      params: _0x9f7f96,
      seq: Date.now(),
      time: Date.now()
    };
    const _0x367c9e = await _0x5b0bf1.sendAsync(_0x1e0f81);
    if (_0x367c9e?.["_rawData"]) {
      return _0x367c9e._rawData;
    }
    if (_0x367c9e?.["getData"]) {
      return _0x367c9e.getData();
    }
    if (_0x367c9e?.["body"] && typeof _0x367c9e.body === "object" && !ArrayBuffer.isView(_0x367c9e.body)) {
      return _0x367c9e.body;
    }
    return _0x367c9e;
  };
  const _0x3ca658 = document.createElement("style");
  _0x3ca658.textContent = "\n    #lw-panel { position:fixed; left:0; top:0; transform:none; width:100%; height:100vh; max-height:100vh; background:linear-gradient(180deg,#1a237e,#303f9f); border-radius:0; box-shadow:none; z-index:99999; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; font-size:11px; color:#e0e0e0; overflow:hidden; transition:all 0.3s; }\n    #lw-panel.collapsed { position:fixed; left:auto; right:10px; top:50%; transform:translateY(-50%); width:30px; height:30px; border-radius:50%; cursor:pointer; }\n    #lw-panel.collapsed #lw-content, #lw-panel.collapsed #lw-header span, #lw-panel.collapsed #lw-tabs { display:none; }\n    #lw-panel.collapsed #lw-header { justify-content:center; padding:10px; border-radius:50%; background:rgba(102,126,234,0.5); }\n    #lw-header { display:flex; align-items:center; justify-content:center; padding:8px 12px; background:linear-gradient(180deg,#1a237e,#303f9f); cursor:default; }\n    #lw-header span { font-weight:bold; font-size:12px; text-align:center; width:100%; }\n    #lw-close { cursor:pointer; font-size:16px; color:#e0e0e0; }\n    #lw-content { padding:0; height:calc(100vh - 80px); max-height:calc(100vh - 80px); overflow-y:auto; background:transparent; }\n    .lw-toolbar { display:flex; flex-direction:row; align-items:center; justify-content:space-between; gap:6px; margin-bottom:0; padding:8px; background:transparent; }\n    .lw-input { padding:4px 6px; border:1px solid rgba(59,130,246,0.5); border-radius:4px; background:#3b82f6; color:#fff; font-size:10px; }\n    .lw-input option { background:#1a237e; color:#fff; }\n    .lw-input option:checked { background:#3b82f6; color:#fff; }\n    .lw-btn { padding:4px 8px; border:none; border-radius:4px; background:#667eea; color:#fff; cursor:pointer; font-size:10px; }\n    #lw-query, #lw-battle-query { background:#3b82f6; }\n    #lw-export, #lw-battle-export { background:#22c55e; }\n    #lw-battle-export-xlsx { background:#f59e0b; }\n    .lw-btn:hover { opacity:0.9; }\n    .lw-btn:disabled { opacity:0.5; cursor:not-allowed; }\n    .lw-info { font-size:10px; color:#e0e0e0; margin-bottom:6px; text-align:center; }\n    .lw-table { width:100%; border-collapse:collapse; font-size:10px; table-layout:fixed; }\n    .lw-table th, .lw-table td { padding:4px 3px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.1); }\n    .lw-avatar { width:18px; height:18px; border-radius:3px; vertical-align:middle; }\n    .lw-loading { text-align:center; color:#e0e0e0; padding:20px; }\n    /* 新增：滚动条样式 */\n    #lw-content::-webkit-scrollbar { width:8px; }\n    #lw-content::-webkit-scrollbar-track { background:rgba(255,255,255,0.1); }\n    #lw-content::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.3); border-radius:4px; }\n    #lw-content::-webkit-scrollbar-thumb:hover { background:rgba(255,255,255,0.5); }\n    \n    /* 新增：选项卡样式 */\n    #lw-tabs { display:flex; background:transparent; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:0; }\n    .lw-tab { padding:8px 16px; cursor:pointer; font-size:12px; color:#e0e0e0; border-right:1px solid rgba(255,255,255,0.1); transition:all 0.3s; background:rgba(255,255,255,0.05); }\n    .lw-tab.active { background:rgba(59,130,246,0.8); color:#fff; }\n    .lw-tab:hover { background:rgba(255,255,255,0.1); }\n    \n    /* 新增：选项卡内容样式 */\n    .lw-tab-content { display:none; padding:8px; }\n    .lw-tab-content.active { display:block; }\n    \n    /* 新增：分组数据样式 */\n    .grouped-data { margin:10px 0; }\n    \n    /* 新增：队伍部分样式 */\n    .team-section { margin-bottom:10px; }\n    .team-section h4 { margin:0 0 5px 0; font-size:12px; font-weight:bold; text-align:center; }\n    .blue-team h4 { color:#3B82F6; }\n    .red-team h4 { color:#EF4444; }\n    \n    /* 新增：队伍表格样式 */\n    .team-table { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:4px; overflow:hidden; margin-bottom:8px; }\n    .table-header { display:flex; background:rgba(255,255,255,0.1); padding:4px 0; font-weight:bold; font-size:10px; color:#e0e0e0; }\n    .table-row { display:flex; padding:4px 0; border-top:1px solid rgba(255,255,255,0.05); font-size:10px; color:#e0e0e0; }\n    .table-row:hover { background:rgba(255,255,255,0.05); }\n    .table-total { display:flex; padding:4px 0; background:rgba(255,255,255,0.1); font-weight:bold; font-size:10px; color:#e0e0e0; margin-top:3px; }\n    .table-cell { flex:1; text-align:center; padding:0 2px; min-width:40px; }\n    \n    /* 新增：俱乐部头像样式 */\n    .club-avatar { width:24px; height:24px; border-radius:50%; object-fit:cover; }\n    \n    /* 蟠桃大会样式 */\n    .peach-container {\n      display: flex;\n      gap: 15px;\n      background: linear-gradient(180deg, #0f172a, #1e293b);\n      padding: 15px;\n      border-radius: 8px;\n      color: #e2e8f0;\n    }\n    .peach-left {\n      flex: 1;\n      background: rgba(30, 41, 59, 0.8);\n      border-radius: 6px;\n      padding: 10px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n    }\n    .peach-right {\n      width: 200px;\n      background: rgba(30, 41, 59, 0.8);\n      border-radius: 6px;\n      padding: 10px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n    }\n    .peach-title {\n      font-size: 14px;\n      font-weight: bold;\n      text-align: center;\n      margin-bottom: 10px;\n      color: #60a5fa;\n    }\n    .peach-table {\n      width: 100%;\n      border-collapse: collapse;\n      font-size: 10px;\n      table-layout: fixed;\n    }\n    .peach-table th,\n    .peach-table td {\n      padding: 3px 2px;\n      text-align: center;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    }\n    .peach-table th {\n      background: rgba(100, 116, 139, 0.3);\n      color: #94a3b8;\n      font-weight: 500;\n    }\n    .peach-table .gold {\n      color: #fbbf24;\n    }\n    .peach-table .red {\n      color: #ef4444;\n    }\n    .peach-table .green {\n      color: #22c55e;\n    }\n    .peach-summary {\n      margin-bottom: 15px;\n    }\n    .summary-item {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 6px;\n      font-size: 10px;\n    }\n    .summary-label {\n      color: #94a3b8;\n    }\n    .summary-value {\n      font-weight: bold;\n    }\n    /* 盐场战报汇总样式 */\n    .peach-battle-report {\n      margin-bottom: 15px;\n      background: rgba(102, 126, 234, 0.1);\n      padding: 10px;\n      border-radius: 8px;\n    }\n    .report-title {\n      font-size: 12px;\n      font-weight: bold;\n      margin-bottom: 8px;\n      text-align: center;\n    }\n    .report-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 8px;\n      margin-bottom: 10px;\n    }\n    .report-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n    }\n    .report-label {\n      font-size: 10px;\n      color: #94a3b8;\n    }\n    .report-value {\n      font-size: 12px;\n      font-weight: bold;\n    }\n    .report-value.green {\n      color: #10b981;\n    }\n    .report-value.blue {\n      color: #3b82f6;\n    }\n    .report-value.red {\n      color: #ef4444;\n    }\n    .peach-ranking {\n      margin-top: 15px;\n    }\n    .ranking-title {\n      font-size: 11px;\n      font-weight: bold;\n      margin-bottom: 8px;\n      color: #60a5fa;\n      text-align: center;\n    }\n  ";
  document.head.appendChild(_0x3ca658);
  const _0x1827c7 = {
    position: {
      toggleBtn: {
        top: 20,
        right: 20
      },
      mainPanel: {
        top: 10,
        right: 10
      }
    },
    ui: {
      colors: {
        dark: "#1e293b",
        text: "#f1f5f9",
        textLight: "#94a3b8",
        primary: "#667eea"
      },
      shadows: {
        btn: "0 4px 12px rgba(0,0,0,0.15)"
      },
      zIndex: 99999
    }
  };
  function _0x1d9e8f() {
    ["arenaToggleBtn", "arenaMainPanel", "lw-panel", "lw-close"].forEach(_0x4a8f91 => document.getElementById(_0x4a8f91)?.["remove"]());
    const _0x16c6aa = document.createElement("div");
    _0x16c6aa.id = "arenaToggleBtn";
    _0x16c6aa.textContent = "✨ ✨ 助 手";
    const _0x2ff118 = localStorage.getItem("lw-toggleBtn-position");
    const _0x5663a7 = "\n      background: " + _0x1827c7.ui.colors.dark + "; color: " + _0x1827c7.ui.colors.text + "; border: 1px solid " + _0x1827c7.ui.colors.textLight + ";\n      padding: 6px 10px; border-radius: 8px; font-size: 12px; cursor: pointer; z-index: " + _0x1827c7.ui.zIndex + ";\n      box-shadow: " + _0x1827c7.ui.shadows.btn + "; display: flex; align-items: center; gap: 4px; min-width: 80px; justify-content: center;\n      transition: all 0.3s ease; position: fixed;\n    ";
    if (_0x2ff118) {
      const _0x5b9edf = JSON.parse(_0x2ff118);
      _0x16c6aa.style.cssText = _0x5663a7 + ("left: " + _0x5b9edf.left + "px; top: " + _0x5b9edf.top + "px; right: auto;");
    } else {
      _0x16c6aa.style.cssText = _0x5663a7 + ("right: " + _0x1827c7.position.toggleBtn.right + "px; top: 50%; transform: translateY(-50%); left: auto;");
    }
    document.body.appendChild(_0x16c6aa);
    let _0x77a901 = false;
    let _0x22bcea = {
      x: 0,
      y: 0
    };
    let _0x548b96 = {
      width: 0,
      height: 0
    };
    _0x16c6aa.addEventListener("mousedown", _0x4d7e14 => {
      _0x77a901 = true;
      _0x4d7e14.preventDefault();
      const _0x59fe59 = _0x16c6aa.getBoundingClientRect();
      _0x22bcea = {
        x: _0x4d7e14.clientX - _0x59fe59.left,
        y: _0x4d7e14.clientY - _0x59fe59.top
      };
      _0x548b96 = {
        width: _0x59fe59.width,
        height: _0x59fe59.height
      };
      _0x16c6aa.style.cursor = "grabbing";
      _0x16c6aa.style.zIndex = _0x1827c7.ui.zIndex + 1;
      _0x16c6aa.style.transform = "none";
    });
    document.addEventListener("mousemove", _0x4f2574 => {
      if (!_0x77a901) {
        return;
      }
      const {
        innerWidth: _0x487160,
        innerHeight: _0x3bb7fc
      } = window;
      const _0x455dc6 = Math.max(0, Math.min(_0x4f2574.clientX - _0x22bcea.x, _0x487160 - _0x548b96.width));
      const _0x207fa3 = Math.max(0, Math.min(_0x4f2574.clientY - _0x22bcea.y, _0x3bb7fc - _0x548b96.height));
      _0x16c6aa.style.left = _0x455dc6 + "px";
      _0x16c6aa.style.top = _0x207fa3 + "px";
      _0x16c6aa.style.right = "auto";
    });
    const _0x2dc66f = () => {
      if (_0x77a901) {
        _0x77a901 = false;
        _0x16c6aa.style.cursor = "pointer";
        _0x16c6aa.style.zIndex = _0x1827c7.ui.zIndex;
        const _0x137548 = _0x16c6aa.getBoundingClientRect();
        localStorage.setItem("lw-toggleBtn-position", JSON.stringify({
          left: Math.round(_0x137548.left),
          top: Math.round(_0x137548.top)
        }));
      }
    };
    document.addEventListener("mouseup", _0x2dc66f);
    document.addEventListener("mouseleave", _0x2dc66f);
    const _0x4e5c9f = document.createElement("div");
    _0x4e5c9f.id = "arenaMainPanel";
    _0x4e5c9f.style.cssText = "\n      position: fixed; top: " + _0x1827c7.position.mainPanel.top + "px; right: " + _0x1827c7.position.mainPanel.right + "px;\n      background: linear-gradient(180deg,#1a237e,#303f9f); border: 1px solid " + _0x1827c7.ui.colors.textLight + "; border-radius: 12px;\n      box-shadow: 0 8px 24px rgba(0,0,0,0.2); width: 500px; max-height: 190vh; overflow-y: auto;\n      z-index: " + (_0x1827c7.ui.zIndex - 1) + "; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;\n      font-size: 11px; color: #e0e0e0; transition: all 0.3s ease; display: none;\n      transform: scale(0.6); transform-origin: top right;\n    ";
    _0x4e5c9f.innerHTML = "\n      <div id=\"lw-header\" style=\"display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: rgba(0,0,0,0.1); border-bottom: 1px solid rgba(255,255,255,0.1);\">\n        <span>9479星星✨工具箱3.1.4</span>\n        <span id=\"lw-close\" style=\"cursor: pointer; font-size: 16px; padding: 4px; border-radius: 4px; transition: all 0.2s;\">×</span>\n      </div>\n      \n      <div id=\"lw-content\" style=\"padding: 15px;\">\n        <div id=\"lw-tabs\" style=\"display: flex; gap: 8px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;\">\n          <div class=\"lw-tab active\" data-tab=\"peach-garden\">蟠桃大会</div>\n        </div>\n      \n      <!-- 蟠桃大会选项卡 -->\n      <div class=\"lw-tab-content active\" id=\"peach-garden\" style=\"display: block;\">\n        <div class=\"lw-toolbar\" style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;\">\n          <select class=\"lw-input\" id=\"lw-peach-date\"></select>\n          <div style=\"display:flex;gap:6px;\">\n            <button class=\"lw-btn\" id=\"lw-peach-query\">查询</button>\n            <button class=\"lw-btn\" id=\"lw-peach-export\" disabled>📷导出图片</button>\n          </div>\n        </div>\n        <div id=\"lw-peach-info\" class=\"lw-info\"></div>\n        <div id=\"lw-peach-list\"><div class=\"lw-loading\">选择日期查询</div></div>\n      </div>\n    </div>\n  ";
    document.body.appendChild(_0x4e5c9f);
    const _0x5b5955 = document.getElementById("lw-close");
    const _0x50f8ec = document.getElementById("arenaMainPanel");
    const _0x55dd90 = () => {
      const _0x2f341b = _0x50f8ec.style.display !== "none";
      _0x50f8ec.style.display = _0x2f341b ? "none" : "block";
      _0x16c6aa.textContent = _0x2f341b ? "✨ ✨ 助 手" : "✨ ✨ 关 闭";
    };
    _0x16c6aa.addEventListener("click", _0x55dd90);
    _0x5b5955.addEventListener("click", _0x55dd90);
    const _0x2791e1 = document.querySelectorAll(".lw-tab");
    const _0x3b7146 = document.querySelectorAll(".lw-tab-content");
    _0x2791e1.forEach(_0x534986 => {
      _0x534986.addEventListener("click", () => {
        const _0x12c770 = _0x534986.dataset.tab;
        _0x2791e1.forEach(_0x1b3a55 => {
          _0x1b3a55.classList.remove("active");
          _0x1b3a55.style.background = "transparent";
        });
        _0x3b7146.forEach(_0x2a4d83 => _0x2a4d83.style.display = "none");
        _0x534986.classList.add("active");
        _0x534986.style.background = "rgba(102, 126, 234, 0.3)";
        document.getElementById(_0x12c770).style.display = "block";
      });
    });
    document.querySelector(".lw-tab.active").click();
  }
  _0x1d9e8f();
  const _0x5eef14 = () => {
    const _0x48dc1e = _0x4f67a8();
    _0x3bf9f5("lw-peach-date", _0x48dc1e);
  };
  _0x5eef14();
  const _0x598024 = async () => {
    const _0x3063b3 = document.getElementById("lw-peach-date").value;
    if (!_0x3063b3) {
      return alert("请选择日期");
    }
    const _0x2b0066 = _0x3063b3.split("/");
    const _0x260ba6 = [_0x2b0066[0].slice(2) + _0x2b0066[1] + _0x2b0066[2], _0x3063b3.replace(/\//g, ""), _0x3063b3];
    const _0x1f88ba = document.getElementById("lw-peach-list");
    const _0x5b9b9d = document.getElementById("lw-peach-info");
    const _0xc075e4 = document.getElementById("lw-peach-export");
    const _0x45cc64 = document.getElementById("lw-peach-query");
    _0x45cc64.disabled = true;
    _0x1f88ba.innerHTML = "<div class=\"lw-loading\">查询中...</div>";
    _0x5b9b9d.textContent = "";
    _0xc075e4.disabled = true;
    try {
      const _0x49781a = await _0x295ad7("legion_getinfo", {});
      const _0x12e5b8 = _0x49781a._rawData || _0x49781a;
      if (!_0x12e5b8 || !_0x12e5b8.info || !_0x12e5b8.info.id) {
        throw new Error("获取军团信息失败");
      }
      const _0x1fe32c = _0x12e5b8.info.id;
      const _0x38d705 = _0x12e5b8.info.name;
      let _0x3a2531 = null;
      for (const _0x3ff829 of _0x260ba6) {
        try {
          _0x3a2531 = await _0x295ad7("legion_getpayloadkillrecord", {
            date: _0x3ff829
          });
          const _0x5b6b4c = _0x3a2531._rawData || _0x3a2531;
          if (_0x5b6b4c && _0x5b6b4c.recordsMap) {
            break;
          }
        } catch (_0x1041a4) {
          continue;
        }
      }
      if (!_0x3a2531) {
        throw new Error("获取战斗记录失败");
      }
      const _0x1fb6c4 = _0x3a2531._rawData || _0x3a2531;
      if (!_0x1fb6c4 || !_0x1fb6c4.recordsMap) {
        throw new Error("获取战斗记录失败");
      }
      const _0x2ad28f = _0x1fb6c4.recordsMap;
      const _0x2483a9 = _0x2ad28f[_0x1fe32c] || _0x2ad28f[String(_0x1fe32c)] || _0x2ad28f[Number(_0x1fe32c)];
      if (!_0x2483a9) {
        throw new Error("未找到军团ID " + _0x1fe32c + " 的数据");
      }
      const _0xd06d67 = _0x2483a9.sort((_0x332f3b, _0x25fc21) => (_0x25fc21.killCnt || 0) - (_0x332f3b.killCnt || 0)).slice(0, 30);
      _0x33a422(_0xd06d67, _0x38d705, _0x3063b3);
      _0xc075e4.disabled = false;
    } catch (_0x37d479) {
      _0x1f88ba.innerHTML = "<div class=\"lw-loading\" style=\"color:#f87171;\">" + _0x37d479.message + "</div>";
    } finally {
      _0x45cc64.disabled = false;
    }
  };
  const _0x33a422 = (_0x478cf1, _0x226136, _0x49e0c4) => {
    const _0x4cad81 = document.getElementById("lw-peach-list");
    const _0x1db6f1 = document.getElementById("lw-peach-info");
    _0x1db6f1.textContent = _0x226136 + " | " + _0x49e0c4 + " | 共" + _0x478cf1.length + "人";
    const _0x444505 = _0x478cf1.reduce((_0x255a84, _0x3ef585) => _0x255a84 + (_0x3ef585.killCnt || 0), 0);
    const _0x372a29 = _0x478cf1.reduce((_0x4af1c5, _0x187815) => _0x4af1c5 + (_0x187815.carCnt || 0), 0);
    const _0x283232 = _0x478cf1.reduce((_0x4b47d3, _0x1cdb7d) => _0x4b47d3 + (_0x1cdb7d.mCKCnt || 0), 0);
    const _0x4410b0 = _0x478cf1.reduce((_0x34917b, _0x18d6d7) => _0x34917b + (_0x18d6d7.reviveCnt || 0), 0);
    const _0x4907f9 = _0x478cf1.length > 0 ? (_0x444505 / _0x478cf1.length).toFixed(1) : "0.0";
    const _0x380b7d = _0x478cf1.length > 0 ? (_0x372a29 / _0x478cf1.length).toFixed(1) : "0.0";
    const _0x52b90d = _0x478cf1.length > 0 ? (_0x4410b0 / _0x478cf1.length).toFixed(1) : "0.0";
    const _0x8fb5ac = (_0xdb683, _0x254861, _0x5ef5be = "#fbbf24") => {
      return _0x478cf1.sort((_0x256ee2, _0x2a6b49) => (_0x2a6b49[_0xdb683] || 0) - (_0x256ee2[_0xdb683] || 0)).slice(0, 3).map((_0x205e1f, _0x2a89db) => {
        const _0x779c13 = _0x205e1f.roleInfo || {};
        return "\n          <div style=\"display:flex;align-items:center;gap:8px;margin-bottom:8px;\">\n            <div style=\"width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:" + _0x5ef5be + ";color:white;font-size:10px;\">" + (_0x2a89db + 1) + "</div>\n            " + (_0x779c13.headImg ? "<img class=\"lw-avatar\" src=\"" + _0x779c13.headImg + "\" onerror=\"this.style.display='none'\">" : "") + "\n            <div style=\"font-size:10px;\">" + (_0x779c13.name || "-") + "</div>\n            <div style=\"margin-left:auto;color:" + _0x5ef5be + ";\">" + (_0x205e1f[_0xdb683] || 0) + "</div>\n          </div>\n        ";
      }).join("");
    };
    const _0x87b133 = "\n    <div class=\"peach-container\">\n      <!-- 左侧详细列表 -->\n      <div class=\"peach-left\">\n        <div class=\"peach-title\">蟠桃大会战报</div>\n        <table class=\"peach-table\">\n          <tr>\n            <th style=\"width: 20px;\">序号</th>\n            <th style=\"width: 25px;\">头像</th>\n            <th style=\"width: 30px;\">昵称</th>\n            <th style=\"width: 35px;\">战力</th>\n            <th style=\"width: 30px;\">击杀</th>\n            <th style=\"width: 30px;\">抢船</th>\n            <th style=\"width: 30px;\">连杀</th>\n            <th style=\"width: 30px;\">复活</th>\n          </tr>\n          " + _0x478cf1.map((_0x4ebda0, _0x1311b5) => {
      const _0x1b1ac6 = _0x4ebda0.roleInfo || {};
      return "\n            <tr>\n              <td>" + (_0x1311b5 + 1) + "</td>\n              <td>" + (_0x1b1ac6.headImg ? "<img class=\"lw-avatar\" src=\"" + _0x1b1ac6.headImg + "\" onerror=\"this.style.display='none'\">" : "") + "</td>\n              <td style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;\">" + (_0x1b1ac6.name || "-") + "</td>\n              <td class=\"gold\">" + _0x181315(_0x1b1ac6.power) + "</td>\n              <td class=\"red\">" + (_0x4ebda0.killCnt || 0) + "</td>\n              <td>" + (_0x4ebda0.carCnt || 0) + "</td>\n              <td>" + (_0x4ebda0.mCKCnt || 0) + "</td>\n              <td>" + (_0x4ebda0.reviveCnt || 0) + "</td>\n            </tr>\n          ";
    }).join("") + "\n        </table>\n      </div>\n      \n      <!-- 右侧汇总信息 -->\n      <div class=\"peach-right\">\n        <div class=\"peach-battle-report\">\n          <div class=\"report-title\">蟠桃大会战报汇总</div>\n          \n          <!-- 顶部汇总信息：垂直双排布局 -->\n          <div class=\"report-grid\">\n            <div class=\"report-item\">\n              <div class=\"report-label\">参战人数</div>\n              <div class=\"report-value\">" + _0x478cf1.length + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">活跃人数</div>\n              <div class=\"report-value green\">" + _0x478cf1.filter(_0x554f28 => (_0x554f28.killCnt || 0) + (_0x554f28.carCnt || 0) > 0).length + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">总击杀数</div>\n              <div class=\"report-value green\">" + _0x444505 + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">总抢船数</div>\n              <div class=\"report-value blue\">" + _0x372a29 + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">总连杀数</div>\n              <div class=\"report-value\">" + _0x283232 + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">总复活数</div>\n              <div class=\"report-value red\">" + _0x4410b0 + "</div>\n            </div>\n          </div>\n          \n          <!-- 平均值信息：垂直双排布局 -->\n          <div class=\"report-grid\">\n            <div class=\"report-item\">\n              <div class=\"report-label\">场均击杀</div>\n              <div class=\"report-value\">" + _0x4907f9 + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">场均抢船</div>\n              <div class=\"report-value\">" + _0x380b7d + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">场均复活</div>\n              <div class=\"report-value\">" + _0x52b90d + "</div>\n            </div>\n            <div class=\"report-item\">\n              <div class=\"report-label\">战报日期</div>\n              <div class=\"report-value\">" + _0x49e0c4.split("/").slice(1).join("-") + "</div>\n            </div>\n          </div>\n        </div>\n        \n        <!-- 击杀前三 -->\n        <div class=\"peach-ranking\">\n          <div class=\"ranking-title\">击杀前三</div>\n          " + _0x8fb5ac("killCnt", "击杀", "#ef4444") + "\n        </div>\n        \n        <!-- 抢船前三 -->\n        <div class=\"peach-ranking\">\n          <div class=\"ranking-title\">抢船前三</div>\n          " + _0x8fb5ac("carCnt", "抢船", "#22c55e") + "\n        </div>\n        \n        <!-- 连杀前三 -->\n        <div class=\"peach-ranking\">\n          <div class=\"ranking-title\">连杀前三</div>\n          " + _0x8fb5ac("mCKCnt", "连杀", "#f59e0b") + "\n        </div>\n        \n        <!-- 复活前三 -->\n        <div class=\"peach-ranking\">\n          <div class=\"ranking-title\">复活前三</div>\n          " + _0x8fb5ac("reviveCnt", "复活", "#60a5fa") + "\n        </div>\n      </div>\n    </div>\n  ";
    _0x4cad81.innerHTML = _0x87b133;
  };
  const _0x3dc8a2 = async () => {
    const _0x3b7812 = document.getElementById("lw-peach-list");
    const _0xd927e9 = document.getElementById("lw-peach-info");
    if (!_0x3b7812.innerHTML || _0x3b7812.innerHTML.includes("lw-loading")) {
      return alert("无数据可导出");
    }
    const _0x4b0bed = document.getElementById("lw-peach-export");
    const _0x67e35c = _0x4b0bed.innerHTML;
    _0x4b0bed.disabled = true;
    _0x4b0bed.innerHTML = "📷导出中...";
    try {
      const _0x35fe84 = await _0x37bca4();
      if (!_0x35fe84 || !window.html2canvas) {
        confirm("html2canvas加载失败，是否尝试使用浏览器打印功能导出？") && window.print();
        return;
      }
      const _0x314826 = document.createElement("div");
      _0x314826.style.cssText = "\n      position:fixed;\n      left:-9999px;\n      top:0;\n      background:linear-gradient(180deg, #0f172a, #1e293b);\n      padding:20px;\n      width:800px;\n      font-family:-apple-system,sans-serif;\n      color:#e2e8f0;\n      border-radius:12px;\n    ";
      const _0x54c4fa = _0xd927e9.textContent.split(" | ")[0];
      _0x314826.innerHTML = "\n      <div style=\"text-align:center;font-size:12px;font-weight:bold;margin-bottom:10px;color:#667eea;\">查询时间：" + _0x54c4fa + "</div>\n      <div style=\"font-size:16px;font-weight:bold;text-align:center;margin-bottom:10px;color:#60a5fa;\">蟠桃大会战报</div>\n      " + _0x3b7812.innerHTML + "\n      <div style=\"text-align:center;font-size:10px;margin-top:10px;color:#aaa;\">导出时间：" + new Date().toLocaleString("zh-CN") + "</div>\n    ";
      document.body.appendChild(_0x314826);
      try {
        const _0x1cf30b = await window.html2canvas(_0x314826, {
          backgroundColor: "#0f172a",
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          letterRendering: true
        });
        const _0x55b82a = _0x1cf30b.toDataURL("image/png");
        try {
          const _0x26fce8 = await (await fetch(_0x55b82a)).blob();
          const _0x22459e = URL.createObjectURL(_0x26fce8);
          const _0x4307cc = document.createElement("a");
          _0x4307cc.href = _0x22459e;
          _0x4307cc.download = "蟠桃大会战报_" + _0xd927e9.textContent.split(" | ")[1].replace(/\//g, "-") + ".png";
          document.body.appendChild(_0x4307cc);
          _0x4307cc.click();
          setTimeout(() => {
            try {
              document.body.removeChild(_0x4307cc);
              URL.revokeObjectURL(_0x22459e);
            } catch (_0x328b5f) {}
          }, 100);
        } catch (_0x28e656) {
          console.error("Blob下载失败，尝试使用dataURL方式:", _0x28e656);
          const _0x247d8e = document.createElement("a");
          _0x247d8e.download = "蟠桃园战斗详情_" + _0xd927e9.textContent.split(" | ")[1].replace(/\//g, "-") + ".png";
          _0x247d8e.href = _0x55b82a;
          document.body.appendChild(_0x247d8e);
          _0x247d8e.click();
          setTimeout(() => {
            try {
              document.body.removeChild(_0x247d8e);
            } catch (_0xd7d126) {}
          }, 100);
        }
      } catch (_0xc8a6b0) {
        console.error("html2canvas渲染失败:", _0xc8a6b0);
        confirm("图片渲染失败，是否尝试使用浏览器打印功能导出？") && window.print();
      } finally {
        try {
          document.body.removeChild(_0x314826);
        } catch (_0x24b3ab) {}
      }
    } finally {
      _0x4b0bed.innerHTML = _0x67e35c;
      _0x4b0bed.disabled = false;
    }
  };
  document.getElementById("lw-peach-query").onclick = _0x598024;
  document.getElementById("lw-peach-export").onclick = _0x3dc8a2;
  console.log("[9479蟠桃大会工具箱] 已加载 v1.0.0");
})();