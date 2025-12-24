//Wed Dec 24 2025 06:51:41 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x18b040 = "7.7.4";
  let _0x234c38 = null;
  function _0x148476(_0x440e66, _0x2388df = 30000) {
    {
      const _0x4bd7fc = Date.now();
      const _0x665ec0 = () => {
        {
          if (!document.body) {
            {
              if (Date.now() - _0x4bd7fc < _0x2388df) {
                {
                  setTimeout(_0x665ec0, 100);
                }
              } else {
                console.error("鲸鱼: 等待DOM超时");
              }
              return;
            }
          }
          _0x440e66();
        }
      };
      _0x665ec0();
    }
  }
  function _0x4937ed(_0x41589c, _0x19cb54 = 60000) {
    {
      const _0x544cee = Date.now();
      const _0x4245be = () => {
        {
          if (window.ws && typeof window.ws.sendAsync === "function") {
            {
              console.log("鲸鱼: WebSocket连接已就绪");
              _0x41589c();
              return;
            }
          }
          if (Date.now() - _0x544cee < _0x19cb54) {
            {
              setTimeout(_0x4245be, 500);
            }
          } else {
            {
              console.error("鲸鱼: 等待WebSocket超时");
              _0x41589c();
            }
          }
        }
      };
      _0x4245be();
    }
  }
  function _0x3ae39c() {
    {
      if (_0x234c38) {
        return _0x234c38;
      }
      try {
        {
          const _0xf9b02 = window.__require("PlatformManager").PlatformManager.instance._battleVersion;
          if (_0xf9b02) {
            {
              _0x234c38 = _0xf9b02;
              console.log("✅ 获取battleVersion:", _0x234c38);
              return _0xf9b02;
            }
          }
        }
      } catch (_0x328bbe) {}
      return null;
    }
  }
  (function _0x4b39ee() {
    {
      const _0x2900d8 = () => {
        {
          if (_0x3ae39c()) {
            return;
          }
          setTimeout(_0x2900d8, 300);
        }
      };
      _0x2900d8();
    }
  })();
  const _0x39b35f = document.createElement("style");
  _0x39b35f.textContent = "\n        :root {\n            --panel-bg: rgba(247, 250, 252, 0.98);\n            --glass-border: rgba(0, 0, 0, 0.1);\n            --highlight: #3182ce; --text-primary: #2d3748; --text-secondary: #718096;\n            --item-bg: #ffffff; --item-border: #e2e8f0;\n            --success: #38a169; --error: #e53e3e;\n        }\n\n        /* 主面板 */\n        .xianxia-panel {\n            color-scheme: light !important;\n            background: transparent !important;\n            color: var(--text-primary) !important;\n            position:fixed;top:10px;backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:12px;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.1);transition:all .3s ease;overflow:hidden;\n        }\n        .xianxia-panel::before {\n            content: '';\n            position: absolute;\n            top: 0; left: 0;\n            width: 100%; height: 100%;\n            background: var(--panel-bg) !important;\n            z-index: -1;\n            border-radius: 12px;\n        }\n\n        .xianxia-panel.collapse{width:44px;height:44px;right:-22px;min-height:auto;display:flex;align-items:center;justify-content:center;border-radius:50%;opacity:0.6;transition:right 0.3s ease, opacity 0.3s ease;}\n        .xianxia-panel.collapse.icon-active{right:10px;opacity:1;}\n        .xianxia-panel.expanded{width:90vw;max-width:520px;right:5vw;max-height:92vh;display:flex;flex-direction:column;}\n        \n        .panel-header{background:rgba(0,0,0,0.02) !important;cursor:pointer;display:flex !important;align-items:center !important;padding:10px 15px !important;flex-shrink:0;width:100%;box-sizing:border-box !important;transition:background .2s ease; position: relative; z-index: 1;}\n        .xianxia-panel.expanded .panel-header { justify-content:flex-start !important; }\n        .xianxia-panel.collapse .panel-header { \n            justify-content: center !important; \n            align-items: center !important;\n            padding: 0 !important; /* 移除折叠状态下的内边距 */\n            height: 100%; /* 确保头部占满整个折叠面板 */\n        }\n\n        .panel-title{flex-grow: 1; font-weight:600;font-size:16px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:15px !important; color: var(--text-primary) !important;}\n        .panel-icon{font-size:22px;line-height:1;width:100%;text-align:center;display:flex;align-items:center;justify-content:center;}\n        .xianxia-panel.expanded .panel-icon { display: none; }\n        .xianxia-panel.collapse .panel-title, .xianxia-panel.collapse .opacity-control { display: none; }\n        .opacity-control{display:flex;align-items:center;gap:8px;flex-shrink:0;}\n        .opacity-control label{font-size:12px;color:var(--text-secondary) !important;white-space:nowrap;}\n        .opacity-control input{width:90px;height:4px;-webkit-appearance:none;background:rgba(0,0,0,.1);border-radius:2px;outline:none;transition:background .2s;}\n        .opacity-control input:hover{background:rgba(0,0,0,.2);}\n        .opacity-control input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--text-primary);cursor:pointer;}\n        .opacity-value{font-size:12px;color:var(--text-primary) !important;min-width:40px;text-align:left;}\n        \n        .panel-content{padding:10px 0 0 0;display:none;overflow-y:auto;max-height:calc(92vh - 74px); position: relative; z-index: 1;}.expanded .panel-content{display:block}\n        .tab-nav{display:flex;padding:0 5px;margin-bottom:8px;border-bottom:1px solid var(--item-border) !important;}\n        .tab-btn{flex:1;padding:7px 4px;border:none;background:transparent;color:var(--text-secondary) !important;cursor:pointer;font-size:12px;font-weight:600;transition: color .2s ease, border-color .2s ease;border-bottom:3px solid transparent; text-align:center;}\n        .tab-btn:hover{color:var(--text-primary) !important;}\n        .tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;}\n        .tab-pane{display:none; padding:0 10px 10px 10px;}\n        .tab-pane.active{display:block;animation:fadeIn .3s;}\n        @keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}\n        .sub-nav{display:flex;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--item-border) !important; flex-wrap: wrap;}\n        .sub-tab-btn{font-size:11px;padding:2px 0;color:var(--text-secondary) !important;background:transparent;border:none;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s ease;}\n        .sub-tab-btn:hover{color:var(--text-primary) !important;}\n        .sub-tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;font-weight:500;}\n.module-content{display:none;}\n.module-content.active{display:block;}\n        .sub-pane{display:none;}\n        .sub-pane.active{display:block;}\n\n        .task-section{background:var(--item-bg) !important;border:1px solid var(--item-border) !important; margin:0;padding:10px;border-radius:7px;}\n        .task-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}\n        .task-header h4{margin:0;color:var(--highlight) !important;font-size:13px;font-weight:600;display:flex;align-items:center;gap:5px;}\n        .status{font-size:10px;color:var(--highlight) !important;background:rgba(49,130,206,.1) !important;padding:3px 5px;border-radius:3px;}\n        .task-row {display:flex;align-items:center;gap:7px;margin-bottom:7px;}\n        .task-row:last-child {margin-bottom:0;}\n        .task-row .task-label {width:55px;font-size:12px;color:var(--text-secondary) !important;flex-shrink:0; text-align:right; padding-right:4px;}\n        .task-row input {width:70px;flex-grow:0;}\n        .task-row .task-btn {flex:1;}\n        .task-btn{display:block;width:100%;margin:0;padding:8px 10px;background:rgba(49,130,206,0.1) !important;border:1px solid rgba(49,130,206,0.2) !important;border-radius:6px;color:var(--highlight) !important;font-weight:600;cursor:pointer;font-size:12px;transition: all .2s ease;}\n        .task-btn:hover{background:rgba(49,130,206,0.15) !important;}\n        .task-btn:disabled{background:rgba(0,0,0,0.05) !important;border-color:transparent !important;color:#ccc !important;cursor:not-allowed;transform:none;box-shadow:none;}\n        .task-btn.stop{background:rgba(229, 62, 62, 0.1) !important;border:1px solid rgba(229, 62, 62, 0.2) !important;color:var(--error) !important;}\n        .task-btn.stop:hover{background:rgba(229, 62, 62, 0.15) !important;}\n        /* 英雄选择按钮选中状态 */\n        .hero-item-selected{background:rgba(49,130,206,0.4) !important;border:2px solid rgba(49,130,206,0.8) !important;color:#ffffff !important;text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;font-weight:bold !important;}\n        .task-row input{border:1px solid var(--item-border) !important;background:rgba(0,0,0,.02) !important;color:var(--text-primary) !important;padding:8px 10px;border-radius:6px;font-size:12px;min-width:0; text-align:center;}\n        .other-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px}.other-btn{padding:8px;font-size:12px}\n        \n        .count-selector{display:flex;align-items:center;justify-content:center;gap:10px;}\n        .count-selector .task-btn{flex:0 0 30px; padding: 5px; font-size: 16px; line-height: 1;}\n        .count-selector .count-display{font-size:14px;font-weight:600;color:var(--text-primary) !important;width:40px;text-align:center;}\n\n        .daily-task-list{border-top: 1px solid var(--item-border) !important; padding-top: 10px;}\n        .main-action-buttons{margin-top:8px !important; display:flex !important; flex-wrap:nowrap !important; gap:4px !important; width:100% !important;}\n        .main-action-buttons > button{flex:1 !important; flex-basis:33.333% !important; padding:6px 4px !important; font-size:12px !important; margin:0 !important; height:34px !important; min-height:34px !important; box-sizing:border-box !important; border-radius:4px !important; display:flex !important; align-items:center !important; justify-content:center !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important;}\n        .main-action-buttons > button[data-task=\"one-key-100\"]{color:#ff6b6b !important; font-weight:bold !important;}\n        .daily-task-item{display:flex;align-items:center;margin-bottom:4px;}\n        .daily-task-item:last-child{margin-bottom:0;}\n        .daily-task-info{display:flex; align-items:center; flex-grow:1;}\n        .daily-task-item input[type=\"checkbox\"]{margin-right:7px;width:15px;height:15px;accent-color:var(--highlight);}\n        .daily-task-item label{font-size:11px;color:var(--text-secondary) !important;}\n        .daily-task-item .task-btn{flex-shrink:0;width:65px;padding:3px 5px;font-size:10px;}\n        \n        .car-data-container, .ws-log-container{margin:0;border:none;background:transparent;}\n        .car-data-table{width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed;} /* 固定表格布局，确保列宽可控 */\n        .car-data-table th{background:rgba(0,0,0,.02) !important;border:1px solid var(--item-border) !important; padding: 5px 3px; font-size:11px; color: var(--text-secondary) !important;}\n        /* 为各列设置百分比宽度 */\n         .car-data-table th:nth-child(1), .car-data-table td:nth-child(1){width: 11%;} /* 车位列宽度 */\n         .car-data-table th:nth-child(2), .car-data-table td:nth-child(2){width: 11%;} /* 品质列宽度 */\n         .car-data-table th:nth-child(3), .car-data-table td:nth-child(3){width: 18%;} /* 主要奖励列宽度 */\n         .car-data-table th:nth-child(4), .car-data-table td:nth-child(4){width: 24%;} /* 状态列宽度 */\n         .car-data-table th:nth-child(5), .car-data-table td:nth-child(5){width: 36%;} /* 操作列宽度 */\n        .car-data-table td{border:1px solid var(--item-border) !important;color:var(--text-secondary) !important;padding:2px 2px;vertical-align:middle; text-align:center; min-height: 20px;} /* 进一步减少内边距 */\n        .car-rewards{color: var(--text-primary) !important;line-height:1.2em; text-align:left; padding: 1px 0 1px 5px !important; font-size: 10px;} /* 增加行高确保文字完整显示 */\n        .car-rewards span{display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 0 3px 0; padding: 0; width: 100%; box-sizing: border-box; font-size: 10px; line-height: 1.2;} /* 增加行高确保文字完整显示，底部留出1px间距 */\n        .car-rewards span.highlight-reward{color:#e53e3e;} /* 高亮重要奖励 */\n        .car-action-btn{font-size:10px;margin:0 2px 0 0;display:inline-block;width:38px;border-radius:4px; padding:2px 0; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.1); color: var(--text-secondary); }\n        .car-action-btn:hover{background:rgba(0,0,0,0.1);}\n        .car-action-btn.send{background:rgba(76, 175, 80, .1);border-color:rgba(76, 175, 80, .2); color: #2f6f44;}\n        .car-action-btn.claim{background:rgba(255, 152, 0, .1);border-color:rgba(255, 152, 0, .2); color: #b95f00;}\n        .car-action-btn.is-disabled{background:rgba(0,0,0,0.04) !important; border-color:transparent !important; color:#ccc !important; transform: none; box-shadow: none;}\n        .pity-counter.mythic-guaranteed{color:#e53e3e;font-weight:bold;}\n        \n        /* 胜率测试相关样式 */\n        .winrate-result-item { margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px dotted var(--item-border); line-height: 1.3; }\n        .winrate-result-item:last-child { border-bottom: none; }\n        .winrate-win { color: var(--success); font-weight: bold; }\n        .winrate-loss { color: var(--error); font-weight: bold; }\n        .winrate-opponent-placeholder { color: var(--text-secondary); }\n\n        #ws-monitor-module .other-buttons { margin-top: 10px; }\n        .ws-log-container { max-height: 55vh; overflow-y: auto; background: rgba(0,0,0,0.02) !important; border-radius: 8px; padding: 10px; border: 1px solid var(--item-border) !important; margin-top: 10px; }\n        .ws-log-entry { position: relative; font-family: 'Courier New', Courier, monospace; font-size: 11px; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid transparent; word-break: break-all; }\n        .ws-log-entry .log-header { font-weight: bold; margin-bottom: 4px; color: inherit !important; }\n        .ws-log-entry .log-header.send { color: var(--success) !important; }\n        .ws-log-entry.send { border-color: rgba(56, 161, 105, 0.2) !important; background: rgba(56, 161, 105, 0.05) !important; }\n        .ws-log-entry .log-header.receive { color: var(--highlight) !important; }\n        .ws-log-entry.receive { border-color: rgba(49, 130, 206, 0.2) !important; background: rgba(49, 130, 206, 0.05) !important; }\n        .ws-log-entry .log-time { font-size: 10px; color: var(--text-secondary) !important; margin-left: 8px; }\n        .ws-log-content { white-space: pre-wrap; color: var(--text-primary) !important; }\n        .ws-log-content.collapsed { max-height: 2.5em; overflow: hidden; text-overflow: ellipsis; position: relative; padding-right: 50px; }\n        .log-actions { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; }\n        .log-actions button { font-size: 10px; padding: 2px 5px; border-radius: 4px; background: rgba(0,0,0,0.08) !important; border: none !important; color: var(--text-secondary) !important; cursor: pointer; }\n        .log-actions button:hover { background: rgba(0,0,0,0.15) !important; color: var(--text-primary) !important; }\n        \n        .gvh-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--item-bg);backdrop-filter:blur(5px);border:1px solid var(--item-border);color:var(--text-primary);padding:10px 20px;border-radius:8px;font-size:13px;z-index:10001;box-shadow:0 4px 20px rgba(0,0,0,.1);animation:gvh-slideIn .3s,gvh-fadeOut .3s 2.7s}\n        .gvh-toast.success{border-color:var(--success);color:var(--success);}\n        .gvh-toast.error{border-color:var(--highlight);color:var(--error);}\n        .gvh-toast.info{border-color:var(--highlight);color:var(--highlight);}\n    ";
  document.head.appendChild(_0x39b35f);
  const _0x531aad = document.createElement("div");
  _0x531aad.className = "xianxia-panel collapse";
  _0x531aad.innerHTML = "\n        <div class=\"panel-header\">\n            <span class=\"panel-icon\">🎮</span>\n            <div class=\"panel-title\">鲸鱼 v" + _0x18b040 + "</div>\n            <div class=\"opacity-control\">\n                <label for=\"opacity-slider\">透明度：</label>\n                <input type=\"range\" id=\"opacity-slider\" min=\"0\" max=\"100\" value=\"100\">\n                <span class=\"opacity-value\">100%</span>\n            </div>\n        </div>\n        <div class=\"panel-content\">\n            <!-- 垂直排布的功能菜单 -->\n            <div style=\"padding: 0 10px 10px 10px;\">\n                <!-- 功能模块选择器 - 垂直排布 -->\n                <div style=\"margin-bottom: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px;\">\n                    <button class=\"task-btn\" data-module=\"quick-tasks-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🚀 日常</button>\n                    <button class=\"task-btn\" data-module=\"car-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏎️ 赛车</button>\n                    <button class=\"task-btn\" data-module=\"arena-sub\" style=\"font-size: 10px; padding: 4px 2px;\">⚔️ 竞技场</button>\n                    <button class=\"task-btn\" data-module=\"salt-field-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏆 盐场战报</button>\n                    <button class=\"task-btn\" data-module=\"consumption-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🎮 消耗活动</button>\n                    <button class=\"task-btn\" data-module=\"weird-tower-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏯 怪异塔</button>\n                    <button class=\"task-btn\" data-module=\"match-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🤜 切磋</button>\n                    <button class=\"task-btn\" data-module=\"others-sub\" style=\"font-size: 10px; padding: 4px 2px;\">📋 其他</button>\n                </div>\n                \n                <!-- 所有功能模块内容 -->\n                <div id=\"quick-tasks-sub\" class=\"module-content active\">\n                    <div class=\"task-section\" id=\"quick-tasks-module\">\n                        <div class=\"task-header\"><h4>🚀 日常</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"daily-task-list\"></div>\n                        <div class=\"main-action-buttons\">\n                            <button class=\"task-btn other-btn\" data-task=\"execute-daily-checked\">一键执行勾选</button>\n                            <button class=\"task-btn other-btn\" data-task=\"claim-activity\">领取活跃奖励</button>\n                            <button class=\"task-btn\" data-task=\"one-key-100\">一键100活跃度</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"salt-field-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"salt-field-module\">\n                        <div class=\"task-header\"><h4>🏆 盐场战报</h4><div class=\"status\" id=\"salt-field-status\">📊 就绪</div></div>\n                        <div class=\"task-row\">\n                            <label class=\"task-label\" style=\"white-space: nowrap;\">查询日期：</label>\n                            <input type=\"date\" id=\"salt-field-date\" style=\"width: auto;\">\n                            <button class=\"task-btn\" id=\"salt-field-query\">查询战报</button>\n                        </div>\n                        <div id=\"salt-field-results\" style=\"margin-top: 10px; max-height: 60vh; overflow-y: auto;\">\n                            <p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">请选择日期并点击查询按钮</p>\n                        </div>\n                        <div style=\"margin-top: 10px; display: none; grid-template-columns: 1fr 1fr; gap: 8px;\" id=\"salt-field-actions\">\n                            <button class=\"task-btn other-btn\" id=\"salt-field-export\">导出战报</button>\n                            <button class=\"task-btn other-btn\" id=\"salt-field-summary\">查看汇总</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"car-sub\" class=\"module-content\"><div class=\"task-section\" id=\"car-module\">\n                    <div class=\"task-header\"><h4>🏎️ 赛车</h4><div class=\"status\">✅ 就绪</div></div>\n                    <button class=\"task-btn\" data-task=\"car-query\">查询赛车</button>\n                    <div class=\"car-data-container\"><table class=\"car-data-table\" style=\"display:none;\"><thead><tr><th>车位</th><th>品质</th><th>主要奖励</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div>\n                </div></div>\n                \n                <!-- 爬塔模块已移至其他模块内部 -->\n                \n                <div id=\"arena-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"arena-module\">\n                        <div class=\"task-header\"><h4>⚔️ 竞技场</h4><div class=\"status\" id=\"arena-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"arena-count\" value=\"3\" min=\"1\" max=\"999\">\n                            <button class=\"task-btn\" data-task=\"arena-start\">随机战斗</button>\n                        </div>\n                    </div>\n\n                    <div class=\"task-section\" style=\"margin-top: 10px;\" id=\"arena-winrate-module\">\n                        <div class=\"task-header\"><h4>📊 胜率测试</h4><div class=\"status\" id=\"winrate-status\">✅ 准备就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"winrate-fight-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" id=\"start-winrate-btn\" data-task=\"arena-winrate\">获取对手</button></div>\n                        <div id=\"winrate-results\" style=\"margin-top: 10px; padding: 8px; border: 1px solid var(--item-border); border-radius: 6px; background: rgba(0,0,0,0.01); font-size: 12px; line-height: 1.4;\"></div>\n                    </div>\n                </div>\n                 \n                <div id=\"others-sub\" class=\"module-content\">\n                    <!-- 月度任务补齐 -->\n                    <div class=\"task-section\" id=\"monthly-task-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>📅 月度任务</h4><div class=\"status\" id=\"monthly-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\" style=\"margin-bottom: 8px;\">\n                            <span class=\"task-label\">竞技场</span>\n                            <span id=\"monthly-arena-progress\" style=\"font-size: 12px; color: var(--highlight); font-weight: 600; min-width: 60px;\">0/240</span>\n                            <button class=\"task-btn\" id=\"monthly-arena-btn\" disabled>已完成</button>\n                        </div>\n                        <div class=\"task-row\">\n                            <span class=\"task-label\">普通钓鱼</span>\n                            <span id=\"monthly-fishing-progress\" style=\"font-size: 12px; color: var(--highlight); font-weight: 600; min-width: 60px;\">0/320</span>\n                            <button class=\"task-btn\" id=\"monthly-fishing-btn\">一键补齐</button>\n                        </div>\n                        <div class=\"task-row\" style=\"margin-top: 8px; justify-content: center;\">\n                            <button class=\"task-btn\" id=\"monthly-refresh-btn\" style=\"width: auto; padding: 4px 12px; font-size: 11px;\">🔄 刷新数据</button>\n                        </div>\n                    </div>\n                    \n                    <!-- 俱乐部Boss功能 -->\n                    <div class=\"task-section\" id=\"club-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>⚔️ 俱乐部Boss</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\">\n                            <span class=\"task-label\">挑战次数:</span>\n                            <div class=\"count-selector\">\n                                <button class=\"task-btn\" data-action=\"decrement\">-</button>\n                                <span class=\"count-display\" id=\"club-boss-count\">2</span>\n                                <button class=\"task-btn\" data-action=\"increment\">+</button>\n                            </div>\n                            <button class=\"task-btn\" data-task=\"club-boss\">开始挑战</button>\n                        </div>\n                    </div>\n                    \n                    <!-- 爬塔功能 -->\n                    <div class=\"task-section\" id=\"tower-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>🧗 爬塔</h4><div class=\"status\">✅ 就绪</div></div>\n                        <button class=\"task-btn\" data-task=\"tower\">开始爬塔</button>\n                    </div>\n                    \n                    <!-- 升级功能 -->\n                    <div class=\"task-section\" id=\"upgrade-module\">\n                        <div class=\"task-header\"><h4>⚡ 升级</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px;\">\n                            <button class=\"task-btn other-btn\" data-task=\"collectionUpgrade\">藏品图鉴升级</button>\n                            <!-- 留空右侧位置，等待添加新功能 -->\n                        </div>\n                    </div>\n                </div>\n                \n                <!-- 保留原有模块结构以确保功能兼容 -->\n                <div id=\"club-sub\" class=\"module-content\"></div>\n                <div id=\"upgrade-sub\" class=\"module-content\"></div>\n                \n\n                \n                <div id=\"consumption-sub\" class=\"module-content\">\n                    <!-- 招募功能 -->\n                    <div class=\"task-section\" id=\"recruit-module\">\n                        <div class=\"task-header\"><h4>👥 招募</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"recruit-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"recruit\">开始招募</button></div>\n                    </div>\n                    \n                    <!-- 宝箱功能 -->\n                    <div class=\"task-section\" id=\"box-module\" style=\"margin-top: 15px;\">\n                        <div class=\"task-header\"><h4>📦 宝箱</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">木质宝箱</span><input type=\"number\" id=\"box-count-2001\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2001\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">青铜宝箱</span><input type=\"number\" id=\"box-count-2002\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2002\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">黄金宝箱</span><input type=\"number\" id=\"box-count-2003\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2003\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">铂金宝箱</span><input type=\"number\" id=\"box-count-2004\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2004\">开启宝箱</button></div>\n                    </div>\n                    \n                    <!-- 钓鱼功能 -->\n                    <div class=\"task-section\" id=\"fishing-module\" style=\"margin-top: 15px;\">\n                        <div class=\"task-header\"><h4>🎣 钓鱼</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">普通钓鱼</span><input type=\"number\" id=\"fishing-count-1\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-1\">开始</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">高级钓鱼</span><input type=\"number\" id=\"fishing-count-2\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-2\">开始</button></div>\n                    </div>\n                </div>\n                \n                <!-- 怪异塔模块 -->\n                <div id=\"weird-tower-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"weird-tower-module\">\n                        <div class=\"task-header\"><h4>🏯 怪异塔</h4><div class=\"status\" id=\"weird-tower-status\">✅ 就绪</div></div>\n                        \n                        <!-- 爬塔信息 -->\n                        <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(0,0,0,0.02); border-radius: 6px; margin-bottom: 10px;\">\n                            <div style=\"text-align: center; flex: 1;\">\n                                <div style=\"font-size: 11px; color: var(--text-secondary);\">小鱼干</div>\n                                <div id=\"evo-energy-value\" style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">--</div>\n                            </div>\n                            <div style=\"text-align: center; flex: 1;\">\n                                <div style=\"font-size: 11px; color: var(--text-secondary);\">当前层数</div>\n                                <div id=\"evo-floor-value\" style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">--</div>\n                            </div>\n                            <div style=\"text-align: center; flex: 1;\">\n                                <div style=\"font-size: 11px; color: var(--text-secondary);\">胜/败</div>\n                                <div id=\"evo-winlose-value\" style=\"font-size: 14px; font-weight: 600; color: var(--text-primary);\">0/0</div>\n                            </div>\n                        </div>\n                        \n                        <!-- 阵容选择 -->\n                        <div class=\"task-row\" style=\"margin-bottom: 10px;\">\n                            <span class=\"task-label\">阵容:</span>\n                            <select id=\"evo-team-select\" style=\"flex: 1; padding: 6px 10px; border: 1px solid var(--item-border); border-radius: 6px; background: var(--item-bg); color: var(--text-primary); font-size: 12px;\">\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                            </select>\n                            <button class=\"task-btn\" id=\"evo-refresh-btn\" style=\"width: 60px;\">刷新</button>\n                        </div>\n                        \n                        <!-- 当前阵容显示 -->\n                        <div id=\"evo-team-heroes\" style=\"background: rgba(0,0,0,0.02); border-radius: 6px; padding: 8px; margin-bottom: 10px; border: 1px solid var(--item-border);\">\n                            <div style=\"font-size: 11px; color: var(--text-secondary); margin-bottom: 6px; text-align: center;\">当前阵容</div>\n                            <div id=\"evo-heroes-grid\" style=\"display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px;\">\n                                <!-- 英雄信息动态生成 -->\n                            </div>\n                        </div>\n                        \n                        <!-- 开始/停止按钮 -->\n                        <button class=\"task-btn\" id=\"evo-toggle-btn\" style=\"margin-bottom: 10px;\">开始爬塔</button>\n                        \n                        <!-- 购买小鱼干 -->\n                        <div style=\"background: rgba(0,0,0,0.02); border-radius: 6px; padding: 8px; border: 1px solid var(--item-border);\">\n                            <div style=\"font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;\">购买小鱼干</div>\n                            <div class=\"task-row\">\n                                <input type=\"number\" id=\"evo-buy-amount\" value=\"1\" min=\"1\" max=\"999\" style=\"width: 60px; text-align: center;\">\n                                <button class=\"task-btn\" id=\"evo-buy-btn\" style=\"flex: 1;\">购买</button>\n                            </div>\n                        </div>\n                        \n                        <!-- 奖励领取合成 -->\n                        <button class=\"task-btn\" id=\"evo-claim-synthesize-btn\" style=\"margin-top: 10px; width: 100%;\">🎁 奖励领取合成（效果重启可见）</button>\n                        \n                        <!-- 说明 -->\n                        <div style=\"margin-top: 10px; padding: 8px; background: rgba(49,130,206,0.08); border-radius: 6px; font-size: 11px; color: var(--text-secondary); line-height: 1.5;\">\n                            💡 所有层的第1~9小关都可以直接过，所有第10关需要自己硬实力过。\n                        </div>\n                        \n                        <!-- 俱乐部成员查询 -->\n                        <button class=\"task-btn\" id=\"evo-legion-refresh-btn\" style=\"margin-top: 10px; width: 100%;\">🏢 查询俱乐部成员层数</button>\n                    </div>\n                </div>\n                \n                <!-- 切磋模块 -->\n                <div id=\"match-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"match-module\">\n                        <div class=\"task-header\"><h4>🤜 切磋测试</h4><div class=\"status\" id=\"match-status\">✅ 就绪</div></div>\n                        \n                        <!-- ID输入 -->\n                        <div class=\"task-row\" style=\"margin-bottom: 10px; flex-wrap: nowrap;\">\n                            <span style=\"font-size: 11px; color: var(--text-secondary); flex-shrink: 0;\">ID:</span>\n                            <input type=\"text\" id=\"match-opponent-id\" placeholder=\"输入ID或点击获取\" maxlength=\"10\" style=\"flex: 1; min-width: 80px; text-align: center; height: 28px; padding: 2px 4px; box-sizing: border-box;\">\n                            <button class=\"task-btn\" id=\"match-get-id-btn\" style=\"padding: 4px 8px; font-size: 10px; flex-shrink: 0; height: 28px; box-sizing: border-box;\">获取</button>\n                            <span style=\"font-size: 11px; color: var(--text-secondary); flex-shrink: 0;\">次数:</span>\n                            <input type=\"number\" id=\"match-fight-count\" value=\"10\" min=\"1\" max=\"999\" style=\"width: 36px; text-align: center; flex-shrink: 0; height: 28px; padding: 2px 4px; box-sizing: border-box;\">\n                            <button class=\"task-btn\" id=\"match-start-btn\" style=\"padding: 4px 8px; font-size: 10px; flex-shrink: 0; height: 28px; box-sizing: border-box;\">开始</button>\n                        </div>\n                        \n                        <!-- 阵容展示区 -->\n                        <div id=\"match-teams-container\" style=\"display: none; margin-bottom: 10px;\">\n                            <div style=\"display: flex; justify-content: space-around; gap: 10px;\">\n                                <!-- 我方阵容 -->\n                                <div style=\"flex: 1; display: flex; flex-direction: column; align-items: center;\">\n                                    <div id=\"match-my-title\" style=\"font-size: 12px; font-weight: bold; margin-bottom: 6px; color: var(--text-primary);\"></div>\n                                    <div id=\"match-my-heroes\"></div>\n                                    <div id=\"match-my-stats\" style=\"font-size: 10px; color: var(--text-secondary); margin-top: 6px; padding: 4px; background: rgba(0,0,0,0.02); border-radius: 4px; display: none;\"></div>\n                                </div>\n                                <!-- 分隔线 -->\n                                <div style=\"width: 1px; background: var(--item-border); margin: 0 5px;\"></div>\n                                <!-- 对方阵容 -->\n                                <div style=\"flex: 1; display: flex; flex-direction: column; align-items: center;\">\n                                    <div id=\"match-opp-title\" style=\"font-size: 12px; font-weight: bold; margin-bottom: 6px; color: var(--text-primary);\"></div>\n                                    <div id=\"match-opp-heroes\"></div>\n                                    <div id=\"match-opp-stats\" style=\"font-size: 10px; color: var(--text-secondary); margin-top: 6px; padding: 4px; background: rgba(0,0,0,0.02); border-radius: 4px; display: none;\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <!-- 结果显示区 -->\n                        <div id=\"match-results\" style=\"padding: 8px; border: 1px solid var(--item-border); border-radius: 6px; background: rgba(0,0,0,0.01); font-size: 12px; line-height: 1.5; max-height: 200px; overflow-y: auto;\">\n                            <div style=\"text-align: center; color: var(--text-secondary);\">等待开始测试...</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
  _0x148476(() => {
    {
      document.body.appendChild(_0x531aad);
    }
  });
  const _0x116ba5 = {
    "《三国演义》中，「大意失街亭」的是马谩？": 1,
    "《三国演义》中，「挥泪斩马谩」的是孙权？": 2,
    "《三国演义》中，「火烧博望坡」的是庞统？": 2,
    "《三国演义》中，「火烧藤甲兵」的是徐庶？": 2,
    "《三国演义》中，「千里走单骑」的是赵云？": 2,
    "《三国演义》中，「温酒斩华雄」的是张飞？": 2,
    "《三国演义》中，关羽在长坂坡「七进七出」？": 2,
    "《三国演义》中，刘备三顾茅庐请诸葛亮出山？": 1,
    "《三国演义》中，孙权与曹操「煮酒论英雄」？": 2,
    "《三国演义》中，提出「隆中对」的是诸葛亮？": 1,
    "《三国演义》中，夏侯杰在当阳桥被张飞吓死？": 1,
    "《三国演义》中，张飞在当阳桥厉吼吓退曹军？": 1,
    "《三国演义》中，赵云参与了「三英战吕布」？": 2,
    "《三国演义》中，赵云参与了「桃园三结义」？": 2,
    "《三国演义》中唯一正式上过战场的女子是祝融夫人？": 1,
    "《三国志》中，华雄被孙坚枭首？": 1,
    "《三国志》中记载，「草船借箭」的是诸葛亮？": 2,
    "「闭月」是貂蝉的代称？": 1,
    "「常胜将军」指代赵云？": 1,
    "「赤壁之战」中是黄盖建策火攻？": 1,
    "「官渡之战」中袁绍获胜？": 2,
    "「郭嘉不死卧龙不出」出自三国典故？": 1,
    "「曲有误，周郎顾」表达了周瑜不懂音律？": 2,
    "「三姓家奴」是指飞将吕布？": 1,
    "「士别三日」形容吕蒙笃志力学？": 1,
    "「吴下阿蒙」即指吕蒙？": 1,
    "「小菜一碟」指的是张飞吃豆芽？": 1,
    "「羞花」是貂蝉的代称？": 2,
    "「荀令留香」是指荀或厨艺高超？": 2,
    "「与曹操交手而不死，能败诸葛亮而自活」是指司马懿？": 1,
    "「张辽止啼」指张辽和善，善于哄孩子？": 2,
    "「总角之好」用于形容周瑜与孙策的交情？": 1,
    "拜将封侯的董卓为东汉忠臣？": 2,
    "宝马良驹赤兔的主人不包括吕布？": 2,
    "蔡文姬擅长音律？": 1,
    "曹仁被称为「天人将军」？": 1,
    "曹仁是曹操的儿子？": 2,
    "成语「水淹七军」与庞统有关？": 2,
    "大乔为孙策之妻？": 1,
    "典故「胆大如斗」与姜维有关？": 1,
    "典故「舌战群儒」与周瑜有关？": 2,
    "典故「杏林圣手」出自华佗？": 2,
    "典故「英雄难过美人关」出自「吕布与貂蝉」？": 1,
    "典韦力大过人，被称为「古之恶来」？": 1,
    "典韦善用的武器包括「大双戟」？": 1,
    "典韦是腹隐机谋的知名谋士？": 2,
    "貂蝉的「美人计」用于离间董卓和吕布？": 1,
    "东汉末年国色美女小乔为周瑜之妻？": 1,
    "董卓曾收吕布为义子？": 1,
    "董卓为曹操帐下大将？": 2,
    "甘宁被称为江表之虎臣？": 1,
    "甘宁为魏国名将？": 2,
    "甘宁因「少有气力，好游侠」，被称为「锦帆贼」？": 1,
    "公孙瓒别名「白马将军」？": 1,
    "公孙瓒击败袁绍，致袁绍引火自焚？": 2,
    "公孙瓒因数次「大破黄巾」而威名大震？": 1,
    "郭嘉被史籍称为「才策谋略，世之奇士」？": 1,
    "郭嘉为孙策帐下谋士？": 2,
    "合肥之战中，张辽以少胜多，威震江东？": 1,
    "华佗被称为「外科鼻祖」？": 1,
    "华佗因遭曹操怀疑，下狱被铂问致死？": 1,
    "华佗与董奉、张仲景并称为「建安三神医」？": 1,
    "华雄是奇谋百出的军事战略家？": 2,
    "华雄效力于诸葛亮？": 2,
    "贾诩曾任魏国最高军事长官「太尉」？": 1,
    "贾诩为曹操帐下的主要谋士之一？": 1,
    "贾诩献离间计成功瓦解马超、韩遂？": 1,
    "刘备是三国时期蜀汉「五虎上将」之一？": 2,
    "鲁肃为谋士，效力于蜀国？": 2,
    "民间，张飞被尊为「屠宰业祖师」？": 1,
    "民间游戏「华容道」是以三国为背景的游戏？": 1,
    "明教以张角为教祖？": 1,
    "三国时期，五虎上将之首是黄忠？": 2,
    "三国时期曹操一生未称帝？": 1,
    "三国时期的吴国由曹操建立？": 2,
    "司马懿曾称帝？": 2,
    "司马懿为曹操谋臣？": 1,
    "算无遗策的贾诩为吴国谋士？": 2,
    "孙策曾「一统江东」？": 1,
    "孙策死于「赤壁之战」？": 2,
    "太史慈曾为救孔融单骑突围向刘备求援？": 1,
    "太史慈弦不虚发，被称为「神射手」？": 1,
    "太史慈终效力于刘备？": 2,
    "威振天下的董卓被吕布诛杀？": 1,
    "夏侯渊天生独眼？": 2,
    "夏侯渊与夏侯惇是父子？": 2,
    "徐晃曾「击破关羽，解樊城之围」？": 1,
    "荀或被称为「王佐之才」？": 1,
    "颜良被关羽斩杀？": 1,
    "颜良被孔融评价「勇冠三军」？": 1,
    "颜良在官渡之战中战胜曹操大军？": 2,
    "以胆气著称的吕蒙效力于刘备？": 2,
    "袁绍战胜公孙瓒，统一河北？": 1,
    "张飞与关羽被并称为「万人敌」？": 1,
    "张角为黄巾起义首领之一？": 1,
    "张角因战胜黄巾军而声名大噪？": 2,
    "赵云与关羽、张飞「桃园结义」？": 2,
    "赵云与关羽、张飞并称「燕南三士」？": 1,
    "著名的「官渡之战」由袁绍发起？": 1,
    "甄宓曾为袁绍之妻？": 2,
    "甄宓为魏文帝曹丕妻子？": 1,
    "周瑜逝世后，鲁肃代周瑜职务？": 1,
    "《三国演义》中，「过五关斩六将」的武将是关羽？": 1,
    "《三国演义》中，「火烧藤甲兵」的是诸葛亮？": 1,
    "《三国演义》中，「三气周瑜」的是司马懿？": 2,
    "《三国演义》中，「三英战吕布」发生在虎牢关？": 1,
    "《三国演义》中，「身在曹营心在汉」的是刘备？": 2,
    "《三国演义》中，「桃园三结义」中的桃园是张飞的住所？": 1,
    "《三国演义》中，「万事俱备，只欠东风」说的是赤壁之战？": 1,
    "《三国演义》中，败走麦城的是张飞？": 2,
    "《三国演义》中，被称为「大耳贼」的是曹操？": 2,
    "《三国演义》中，被称为「奸雄」的是司马懿？": 2,
    "《三国演义》中，被称为「诸葛村夫」的是诸葛亮？": 1,
    "《三国演义》中，被追杀时「割须断袍」的是马超？": 2,
    "《三国演义》中，曹操赤壁兵败后是曹仁率军接应的？": 1,
    "《三国演义》中，称号「卧龙」的是诸葛亮？": 1,
    "《三国演义》中，持方天画戟的武将是吕布？": 1,
    "《三国演义》中，持青龙偃月刀的武将是关羽？": 1,
    "《三国演义》中，单刀赴会的是赵云？": 2,
    "《三国演义》中，发明「木牛流马」的是诸葛亮？": 1,
    "《三国演义》中，关羽曾一边「刮骨疗毒」一边与将领饮酒？": 2,
    "《三国演义》中，火烧连营大败蜀军的将领是诸葛亮？": 2,
    "《三国演义》中，吕布称号「关内侯」？": 2,
    "《三国演义》中，庞统的称号是「幼麟」？": 2,
    "《三国演义》中，七擒孟获的是司马懿？": 2,
    "《三国演义》中，为关羽「刮骨疗毒」的医生是张仲景？": 2,
    "《三国演义》中，要为曹操做开颅手术的是华佗？": 1,
    "《三国演义》中，赵云的妻子是马超的姝妹马云禄？": 2,
    "《三国演义》中，赵云在「赤壁之战」中救出阿斗？": 2,
    "《三国演义》中，甄姬曾为袁绍之子袁熙的夫人？": 1,
    "《三国演义》中，中诸葛亮「空城计」的是曹操？": 2,
    "《三国演义》中，诸葛亮的「空城计」是为了阻挡曹操大军？": 2,
    "《三国演义》中，祝融夫人被马超活捉？": 2,
    "《三国演义》中，祝融夫人的丈夫为诸葛亮？": 2,
    "《三国演义》中，祝融夫人擅长的暗器是飞针？": 2,
    "「铜雀春深锁二乔」指的是火乔和小乔吗？": 1,
    "「文姬归汉」指的是蔡文姬从匈奴回到中原吗？": 1,
    "白马义从是赵云的部下？": 2,
    "蔡文姬是被曹操赎回中原的吗？": 1,
    "黄月英是诸葛亮的妻子？": 1,
    "庞统和周瑜并称为「卧龙凤雏」？": 2,
    "庞统是刘备的谋士吗？": 1,
    "三国时期，董卓曾想和孙坚结成亲家？": 1,
    "三国时期，公孙瓒和刘备是师兄弟关系？": 1,
    "三国时期，姜维始终都是蜀国的将领？": 2,
    "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？": 2,
    "三国时期，十八路诸侯讨董后，孙坚率军攻入洛阳？": 1,
    "三国时期，司马懿经常练习「五禽戏」？": 1,
    "三国时期，孙策建立了吴国？": 1,
    "三国时期，孙坚中箭而亡？": 1,
    "三国时期，赵云无一败绩？": 2,
    "《出师表》是诸葛亮写给刘禅的吗？": 1,
    "《三国演义》中，「阿斗」是赵云的儿子？": 2,
    "《三国演义》中，「宁教我负天下人，休教天下人负我」出自刘备之口？": 2,
    "《三国演义》中，「虽未谱金兰，情谊比桃园」说的是赵云？": 1,
    "《三国演义》中，「五虎上将」里没有魏延？": 1,
    "《三国演义》中，「一个愿打一个愿挨」形容的是周瑜与黄忠？": 2,
    "《三国演义》中，被称为「智绝」的是刘备？": 2,
    "《三国演义》中，曹操让士兵们想象柠檬来止渴？": 2,
    "《三国演义》中，关羽，字「云长」？": 1,
    "《三国演义》中，关羽的坐骑是「绝影」？": 2,
    "《三国演义》中，关羽为了离开曹操的麾下，达成了「过五关，斩六将」的壮举。": 1,
    "《三国演义》中，郭嘉遗计定辽东。": 1,
    "《三国演义》中，黄忠在定军山击杀了曹魏将领夏侯渊。": 1,
    "《三国演义》中，刘备，字「孟德」？": 2,
    "《三国演义》中，刘备的专属武器名为「青龙偃月刀」？": 2,
    "《三国演义》中，马超有「花马超」的称呼。": 2,
    "《三国演义》中，呢称为「阿斗」的是刘备？": 2,
    "《三国演义》中，司马昭是司马懿的父亲？": 2,
    "《三国演义》中，死于「落凤坡」的名将是庞统？": 1,
    "《三国演义》中，宣称自己会「梦中杀人」的是曹操？": 1,
    "《三国演义》中，张飞的专属武器名为「丈八蛇矛」？": 1,
    "《三国演义》中，赵云曾孤胆救黄忠。": 1,
    "《三国演义》中，诸葛亮，字「孔明」？": 1,
    "《三国演义》中，诸葛亮发明了「诸葛连弩」？": 1,
    "《三国演义》中，诸葛亮挥泪斩了马超？": 2,
    "「白帝城托孤」指的是刘备将自己的儿子托付给赵云？": 2,
    "「单刀赴会」是诸葛亮邀请关羽前往的。": 2,
    "「扶不起的阿斗」指的是刘禅？": 1,
    "「割须弃袍」发生于曹操和马超交战时。": 2,
    "「黄巾起义」被看做三国时代的开端吗？": 1,
    "「孔明灯」在古代曾用于传递军情？": 1,
    "「乐不思蜀」指的是刘禅？": 1,
    "「衣带诏」事发后曹操派军讨伐刘备？": 1,
    "曹操被评价为「治世之能臣，乱世之奸雄」。": 1,
    "典故妄自菲薄出自诸葛亮的《前出师表》？": 1,
    "郭嘉被曹操称为「吾之子房」。": 2,
    "郭嘉是由贾诩推荐给曹操，并加入了曹操麾下。": 2,
    "汉献帝自愿禅让帝位给丞相曹丕？": 2,
    "华佗使用「麻沸散」是世界医学史上应用全身麻醉进行手术治疗的最早记载？": 1,
    "华佗有自身编撰的医书流传下来。": 2,
    "刘备曾自称「汉中王」？": 1,
    "刘备称帝后不久就亲自率军伐吴？": 1,
    "刘备少年时以织席贩履为生？": 1,
    "挟天子以令诸侯的是曹操？": 1,
    "荀或与同为曹操麾下的荀攸是叔侄关系。": 1,
    "袁术曾经称帝但最后被刘备、朱灵军截道，呕血而死？": 1,
    "在魏蜀吴三国中，吴国是最晚建立的吗？": 1,
    "周泰是受到孙权的招揽加入了吴国。": 2,
    "周泰在归顺孙策之前在江中劫掠为生。": 1,
    "诸葛亮共北伐五次，第五次时病逝于五丈原？": 1,
    "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取？": 1,
    "《咸鱼之王》里「咸神火把」的持续时间为30分钟？": 1,
    "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分？": 1,
    "《咸鱼之王》里每位玩家每日可以进行三次「免费点金」？": 1,
    "《咸鱼之王》里鱼缸位于玩家的「客厅」界面内？": 1,
    "《咸鱼之王》里「咸神门票」可以用于参加竞技场战斗？": 1,
    "《咸鱼之王》里「梦魇水晶」无法重生，只能通过无损换将置换到其他咸将身上？": 1,
    "《咸鱼之王》里「龙鱼·八卦」是咸将黄月英的专属鱼灵？": 2,
    "《咸鱼之王》里「万能红将碎片」可以开出蔡文姬的碎片吗？": 2,
    "《咸鱼之王》里好友的「客厅」内会随机刷出钻石、白银、普通三种盐罐？": 2,
    "《咸鱼之王》里「招募令」可以招募到咸将关银屏？": 2,
    "《咸鱼之王》里有「万能紫将碎片」？": 2,
    "《咸鱼之王》里咸将的专属鱼都有「龙鱼」前缀。": 1,
    "《咸鱼之王》里「青铜宝箱」每次开启可以获取到10宝箱积分？": 1,
    "《咸鱼之王》里咸将分为四个阵营？": 1,
    "《咸鱼之王》里咸将貂蝉是「群雄」阵营的。": 1,
    "《咸鱼之王》里咸将貂蝉的主动技能可以减少敌人怒气值。": 1,
    "《咸鱼之王》里「灯神挑战」每天可以免费获取3个「扫荡魔毯」。": 1,
    "《咸鱼之王》里同种类盐罐同时只能占据一个。": 1,
    "《咸鱼之王》里有「白银宝箱」。": 2,
    "《咸鱼之王》中升级俱乐部「高级科技」时需要先点满对应职业的「基础科技」。": 1,
    "《咸鱼之王》里咸将诸葛亮的主动技能「星落」有控制效果。": 2,
    "《咸鱼之王》里咸将黄月英的职业是法师。": 2,
    "《咸鱼之王》里开启「木质宝箱」有概率获取金砖。": 2,
    "《咸鱼之王》里咸将姜维可以同时攻击全部敌人。": 2,
    "《咸鱼之王》里只要咸将貂蝉在场，吕布就不会阵亡。": 2,
    "《咸鱼之王》里鱼灵「惊涛」无法将受到的持续伤害效果分5回合扣除。": 1,
    "《咸鱼之王》里开启「钻石宝箱」时，不会获得宝箱积分。": 1,
    "《咸鱼之王》「捕获」玩法中，每进行十次高级捕获必出稀有鱼灵。": 1,
    "《咸鱼之王》「盐场争霸」中，可以通过消耗20金砖来加速行军。": 1,
    "《咸鱼之王》里咸将星级在达到21星时，即可获得「机甲皮肤」。": 1,
    "《咸鱼之王》里宝箱积分达1000分时，可一键领取累计积分奖励宝箱。": 1,
    "《咸鱼之王》里俱乐部团长连续7天未登录，团长职位将自动转让其他成员。": 1,
    "《咸鱼之王》里「玩具」每周有一次免费无损转换的机会。": 1,
    "《咸鱼之王》「灯神挑战」内，每个阵营中有15层可挑战的关卡。": 1,
    "《咸鱼之王》「咸神竞技场」中，每日可以免费进行3次挑战。": 1,
    "《咸鱼之王》重复攻打击杀过的「俱乐部BOSS」，无法再次获得排名奖励。": 1,
    "《咸鱼之王》已附身的鱼灵仍会在「鱼缸」中显示。": 2,
    "《咸鱼之王》「普通鱼竿」免费捕获的刷新时间为6个小时。": 2,
    "《咸鱼之王》「每日咸王考验」中，共有4个不同BOSS。": 2,
    "「孔融让梨」的故事讲的是孔融小小年纪便有谦让的美德？": 1,
    "成语「初出茅庐」出自《三国演义》？": 1,
    "「三家归晋」结束了汉末三国时期以来的割据混战的局面？": 1,
    "《三国演义》中，「虎女焉能配犬子」一句中，虎女指的是关羽之女。": 1,
    "「莫作孔明择妇，正得阿承丑女」说的是诸葛亮的择偶标准。": 1,
    "《三国演义》中，许褚跟许攸是兄弟。": 2,
    "俗语「赔了夫人又折兵」中的夫人是小乔。": 2,
    "「赔了夫人又折兵」的上半句为「孔明妙计安天下」。": 2,
    "四大美女中「落雁」说的是被匈奴所掳的蔡文姬。": 2,
    "「大丈夫何患无妻」一典故出自《三国演义》中的赵云之口？": 1,
    "《咸鱼之王》中，招募界面的NPC名字是「猫婆婆」？": 1,
    "《咸鱼之王》中，「每日任务」重置时间为每日0点？": 1,
    "《咸鱼之王》中，「每日任务」重置时间为每日8点？": 2,
    "《咸鱼之王》中，每位玩家每日有一次免费刷新「黑市」的机会？": 1,
    "《咸鱼之王》中，每位玩家每日有三次免费刷新「黑市」的机会？": 2,
    "《咸鱼之王》中，每消耗20个「普通鱼竿」可以免费获取1个「黄金鱼竿」？": 1,
    "《咸鱼之王》中，每消耗10个「普通鱼竿」可以免费获取1个「黄金鱼竿」？": 2,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为1亿？": 2,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为5亿？": 1,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为10亿？": 2,
    "《咸鱼之王》中，道具「珍珠」可以在「神秘商店」使用？": 1,
    "《咸鱼之王》中，鱼灵「黄金锦鲤」可在「神秘商店」中消耗珍珠兑换？": 1,
    "《咸鱼之王》中，玩家每次占领「盐罐」会消耗10点「能量」": 1,
    "《咸鱼之王》中，玩家每次占领「盐罐」会消耗1点「能量」": 2,
    "《咸鱼之王》中，一个「俱乐部」最多容纳30位成员？": 1,
    "《咸鱼之王》中，1个「俱乐部」最多有2位副团长？": 1,
    "《咸鱼之王》中，玩家可在「图鉴」内可查看满级咸将信息？": 1,
    "《咸鱼之王》中，「月度活动」每月刷新1次？": 1,
    "《咸鱼之王》中，「每日任务」中日活跃积分达到80的奖励为钻石宝箱？": 2,
    "《咸鱼之王》中，「每日任务」中日活跃积分达到100的奖励为招募令？": 1,
    "《咸鱼之王》中，游戏内有金色鱼灵「黄金鲸鱼」？": 2,
    "《咸鱼之王》中，玩家可通过「咸将塔」玩法获取「珍珠」道具？": 2,
    "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得珍珠。": 1,
    "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得万能红将碎片。": 2,
    "《咸鱼之王》中，咸将的四个阵营分别为魏、蜀、吴、群雄。": 1,
    "《咸鱼之王》中，除了咸将外，其余的怪物都没有职业。": 1,
    "《咸鱼之王》中，「灯神挑战」不同的阵营挑战内，只能上阵对应阵营的咸将。": 1,
    "《咸鱼之王》中，精铁可以直接用金砖购买。": 1,
    "《咸鱼之王》中，进阶石可以直接使用金砖购买。": 1,
    "《咸鱼之王》中，「招募」可以有概率获得红色武将。": 1,
    "《咸鱼之王》中，贾诩为吴国阵营咸将？": 2,
    "《咸鱼之王》中，每日可以免费招募一次。": 1,
    "《咸鱼之王》中，「每日咸王考验」可以挑战多次。": 1,
    "《咸鱼之王》中，蔡文姬是红色武将。": 2,
    "《咸鱼之王》中，「咸王梦境」为每日开放。": 2,
    "《咸鱼之王》中，「咸王梦境」周二会开放。": 2,
    "《咸鱼之王》中，姜维攻击后可以获得护盾。": 2,
    "《咸鱼之王》中，俱乐部人数没有上限。": 2,
    "《三国演义》中，「怒打督邮」的是张飞。": 1,
    "祝融夫人是《三国演义》虚构人物。": 1,
    "《三国演义》中，「拔矢啖睛」的是夏侯惇。": 1,
    "《三国演义》中，「拔矢啖睛」的是夏侯渊。": 2,
    "《三国演义》中，「曹操献刀」本是要刺杀董卓。": 1,
    "《三国演义》中，许攸被许褚所杀。": 1,
    "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿。": 1,
    "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿": 1,
    "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一0点重置。": 1,
    "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一8点重置。": 2,
    "《咸鱼之王》中，挂机奖励加钟，最多可以有5名好友助力。": 2,
    "《咸鱼之王》中，挂机奖励加钟，最多可以有4名好友助力。": 1,
    "《咸鱼之王》中，每日6点重置点金次数。": 2,
    "《咸鱼之王》中，「俱乐部」每日签到可以获得「军团币」？": 1,
    "《咸鱼之王》中，「黑市」每日0点自动刷新商品？": 1,
    "《咸鱼之王》中，「黑市」每日8点自动刷新商品？": 2,
    "《咸鱼之王》中，可以使用「珍珠」兑换「万能红将碎片」？": 1,
    "《咸鱼之王》中，「咸神门票」可以通过「金砖」进行购买？": 1,
    "《咸鱼之王》中，「灯神挑战」内分为四个阵营？": 1,
    "《咸鱼之王》中，玩家的「勋章墙」内最多展示4个「徽章」？": 1,
    "《咸鱼之王》中，「主公」达到4001级开启「玩具」玩法？": 1,
    "《咸鱼之王》中，「玩具」需要花费「扳手」进行激活？": 1,
    "《咸鱼之王》中，「咸王梦境」每成功通过十层可以遇到一次梦境商人？": 1,
    "《咸鱼之王》中，挑战「咸将塔」需要花费「小鱼干」？": 1,
    "《咸鱼之王》中，「小鱼干」可以通过「金砖」进行购买？": 1,
    "《咸鱼之王》中，「招募」无法获得咸将吕玲绮。": 1,
    "《咸鱼之王》中，「灯神挑战」的奖励包括「珍珠」？": 2,
    "《咸鱼之王》中，「咸王梦境」中的梦境调料「普通盐瓶」可以恢复咸将怒气？": 2,
    "《咸鱼之王》中，进阶石可以通过参与「咸将塔」玩法获取。": 1,
    "《咸鱼之王》中，「扳手」在通关主线7001关后可以通过挂机奖励获得。": 1,
    "《咸鱼之王》中，「军团币」可以用于升级「俱乐部科技」？": 1,
    "《咸鱼之王》中，装备最多可以开到5个淬炼孔位？": 1,
    "《咸鱼之王》中，「青铜火把」会为主线战斗中上阵的咸将增加5%攻击？": 1,
    "《咸鱼之王》中，「木材火把」会使主线战斗以1.5倍速进行？": 1,
    "《咸鱼之王》中，道具「金砖」可以用于在「黑市」中购买物品？": 1,
    "《咸鱼之王》中，装备中的坐骑会为咸将提供防御加成？": 2,
    "《咸鱼之王》中，攻打「俱乐部BOSS」后可以获得皮肤币奖励？": 2,
    "《咸鱼之王》中，咸将皮肤可以使用「军团币」来进行兑换？": 2,
    "《咸鱼之王》中，咸将的等级上限为2000级？": 2,
    "《咸鱼之王》中，咸将「张星彩」属于群雄阵营？": 2,
    "《咸鱼之王》中，咸将「颜良」属于魏国阵营？": 2,
    "《咸鱼之王》中，「招募」无法获得咸将关银屏。": 1,
    "《咸鱼之王》俱乐部中，每日最多可以攻打4次「俱乐部BOSS」。": 1,
    "《咸鱼之王》中，俱乐部团长无法退出俱乐部。": 1,
    "《咸鱼之王》中，主动退出俱乐部12小时后才可以加入新的俱乐部。": 1,
    "《咸鱼之王》中，装备中的铠甲会为咸将提供血量加成？": 1,
    "《咸鱼之王》中，红色咸将的觉醒技能需要咸将达到一定星级才能解锁。": 1,
    "《咸鱼之王》中，布阵时，前排可上阵2名咸将，后排可上阵3名咸将。": 1,
    "《咸鱼之王》竞技场中，未对防守阵容进行设置时，将默认使用主线阵容。": 1,
    "《咸鱼之王》中，「邮件」最长保存30天。": 1,
    "《咸鱼之王》中，「邮件」最长保存10天。": 2,
    "《咸鱼之王》中，「淬炼」可能出现的属性共21种。": 1,
    "《咸鱼之王》中，「俱乐部BOSS」被击败后会按照玩家造成的总伤害排名发放排名奖励。": 1,
    "《咸鱼之王》中，晚上23时仍可以进行竞技场战斗。": 2,
    "《咸鱼之王》中，开启「省电模式」将停止主线关卡战斗。": 2,
    "鲁肃，字「子敬」。": 1,
    "蔡文姬，本名蔡琰？": 1,
    "「池中之物」一词出自《三国志》中周瑜之口？": 1,
    "《咸鱼之王》中，装备中的头冠会为咸将提供防御加成？": 1,
    "《咸鱼之王》中，「咸神火把」会为主线战斗中上阵的咸将增加15%攻击？": 1,
    "《咸鱼之王》中，「咸神火把」与「青铜火把」均会使主线战斗以2倍速进行？": 1,
    "刘表是刘备的次子？": 2,
    "「望梅止渴」是周瑜带队行军时发生的故事？": 2,
    "《咸鱼之王》中，「扳手」可以在「黑市」中花费「金砖」获取？": 1,
    "《咸鱼之王》中，在「盐锭商店」中可以花费「盐锭」兑换到「皮肤币」？": 1,
    "《咸鱼之王》中，月赛助威截止后，未使用的「拍手器」会被回收？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」单局累计答对10题可获取10个「招募令」？": 1,
    "《咸鱼之王》中，通行证「竞技经验」不需要邮件领取，直接发放给玩家？": 1,
    "《咸鱼之王》中，「俱乐部排位赛」的段位一共有7种？": 1,
    "《咸鱼之王》中，「阵营光环」上阵任意3个同阵营的武将就能生效。": 2,
    "《咸鱼之王》中，月度活动「捕获达标」达标奖励包含道具「金砖」？": 1,
    "《咸鱼之王》中，俱乐部的「团长」和「副团长」可以选择「排位赛」出战成员？": 1,
    "《咸鱼之王》中，玩家每日可在「灯神挑战」中挑战10次？": 1,
    "《咸鱼之王》中，咸将「曹仁」的职业是「肉盾」？": 1,
    "《咸鱼之王》中，「彩玉」可以花费「金币」进行兑换？": 2,
    "《咸鱼之王》中，在「助威商店」中可以花费「助威币」兑换到「万能红将碎片」？": 2,
    "《咸鱼之王》中，月度活动「咸神争霸」达标奖励包含道具「珍珠」？": 2,
    "《咸鱼之王》中，在「黑市」可以通过「金砖」兑换「钻石宝箱」？": 2,
    "《咸鱼之王》中，咸将「蔡文姬」属于魏国阵营？": 1,
    "《咸鱼之王》中，可以通过「万能红将碎片」开出「贾诩碎片」？": 1,
    "《咸鱼之王》中，「咸王梦境」玩法在通关1000关后开放？": 1,
    "《咸鱼之王》中，「灯神挑战」中，每阵营前五层的首通奖励均为精铁和进阶石？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」内累计答对30道题目可获得「金鱼公主」皮肤？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」内完成20次大冲关任务可获得「马头咸鱼」皮肤？": 1,
    "《咸鱼之王》中，「金币礼包」可以通过「捕获」玩法获取？": 1,
    "《咸鱼之王》中，可以通过「图鉴」查看咸将满级后的技能效果？": 1,
    "《咸鱼之王》中，攻打「每日咸王考验」内的「癫癫蛙」BOSS可获得招募令。": 1,
    "《咸鱼之王》中，可以通过「万能橙将碎片」开出「蔡文姬碎片」？": 2,
    "《咸鱼之王》中，通过「高级捕获」可以获得黄金鱼灵「利刃」？": 2,
    "《咸鱼之王》中，咸将星级达到30级，可以觉醒第二技能？": 2,
    "《咸鱼之王》中，咸将「黄月英」的职业为「法师」？": 2,
    "《咸鱼之王》中，咸将「孙策」的职业为「战士」？": 2,
    "《咸鱼之王》中，开启「晶石福袋」可以获得「进阶石」？": 2,
    "《三国演义》中，「大丈夫生于乱世，当带三尺剑立不世之功」，是太史慈所说。": 1,
    "《咸鱼之王》中，「咸将塔」每通关第10层，会给10个「小鱼干」。": 1,
    "《咸鱼之王》中，「每日咸王考验」有10层伤害达标奖励。": 1,
    "《咸鱼之王》中，「巅峰竞技场」前100名，可登上「巅峰王者榜」。": 1,
    "《咸鱼之王》中，激活「终身卡」，可以使挂机时间增加2小时。": 1,
    "《咸鱼之王》中，激活「月卡」，可以使挂机时间增加2小时。": 1,
    "《咸鱼之王》中，「咸神竞技场」内共分为六个段位。": 1,
    "《咸鱼之王》中，「灯神挑战」每日0点刷新挑战次数。": 1,
    "《咸鱼之王》中，若「签到」当日登录未领取，后续登录时可以一并领取。": 1,
    "《咸鱼之王》中，激活「终身卡」，挂机金币收益增加10%。": 1,
    "《咸鱼之王》中，激活「周卡」，挂机金币收益增加10%。": 1,
    "《咸鱼之王》中，「签到」领取30次奖励内容后，奖励内容会进行刷新。": 1,
    "《咸鱼之王》中，激活「月卡」，挂机金币收益增加10%。": 2,
    "《咸鱼之王》中，「竞技场」每周结算时，巅峰场玩家均可获得「巅峰王者徽章」。": 2,
    "《咸鱼之王》中，「周卡」激活，可以使挂机时间增加2小时。": 2,
    "《咸鱼之王》中，咸将装备的等级无法超「主公阿咸」的等级。": 1,
    "《咸鱼之王》中，开启「金币礼包」获取的金币与挂机奖励有关。": 1,
    "《咸鱼之王》中，挑战「咸将塔」消耗的小鱼干在通过当前塔后会获得10个。": 1,
    "《咸鱼之王》中，「梦魇水晶」的属性需要佩戴咸将达到701级才会生效。": 1,
    "《咸鱼之王》中，咸将达到700级并进阶后可以激活自身全部基础技能。": 1
  };
  const _0x258356 = {
    showtip(_0x5a688f, _0x31b72f = "info") {
      {
        const _0x42a882 = document.createElement("div");
        _0x42a882.className = "gvh-toast " + _0x31b72f;
        _0x42a882.innerText = _0x5a688f;
        document.body.appendChild(_0x42a882);
        setTimeout(() => _0x42a882.remove(), 3000);
      }
    },
    async sendCommand(_0x3573bb, _0x4259e7 = {}) {
      {
        if (!window.ws?.["sendAsync"]) {
          {
            this.showtip("错误：WebSocket连接不可用", "error");
            throw new Error("WebSocket connection not available");
          }
        }
        try {
          {
            return await window.ws.sendAsync({
              ack: 0,
              cmd: _0x3573bb,
              params: _0x4259e7,
              seq: Date.now(),
              time: Date.now()
            });
          }
        } catch (_0x1c0d65) {
          {
            this.showtip("命令发送失败: " + _0x1c0d65.message, "error");
            throw _0x1c0d65;
          }
        }
      }
    },
    delay: _0x47a010 => new Promise(_0x5e30a3 => setTimeout(_0x5e30a3, _0x47a010 * 1000)),
    getFormatDate: _0x5f41ef => {
      {
        const _0xa4e12d = new Date(_0x5f41ef);
        _0xa4e12d.setHours(_0xa4e12d.getHours() + 8);
        return _0xa4e12d;
      }
    }
  };
  const _0x3aaa79 = {
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
    "310": "吕玖绮",
    "311": "潘凤",
    "312": "邢道荣",
    "313": "祝融夫人",
    "314": "孟获"
  };
  const _0x384e3e = {
    isRunning: false,
    isClaimSynthesizeRunning: false,
    selectedTeam: 1,
    teamInfo: {},
    teamCount: 4,
    towerInfo: null,
    winCount: 0,
    loseCount: 0,
    hasSwitchedTeam: false
  };
  const _0x30d20b = {
    heroMap: _0x3aaa79,
    state: _0x384e3e,
    init() {
      {
        const _0xd34218 = document.getElementById("evo-toggle-btn");
        const _0x1f6d44 = document.getElementById("evo-refresh-btn");
        const _0x22119b = document.getElementById("evo-buy-btn");
        const _0x2df137 = document.getElementById("evo-team-select");
        const _0x109c16 = document.getElementById("evo-legion-refresh-btn");
        const _0x436b20 = document.getElementById("evo-claim-synthesize-btn");
        if (_0xd34218) {
          _0xd34218.addEventListener("click", () => this.toggleClimb());
        }
        if (_0x1f6d44) {
          _0x1f6d44.addEventListener("click", () => this.refreshTeams());
        }
        if (_0x22119b) {
          _0x22119b.addEventListener("click", () => this.buyEnergy());
        }
        if (_0x109c16) {
          _0x109c16.addEventListener("click", () => this.refreshLegionMembers());
        }
        if (_0x436b20) {
          _0x436b20.addEventListener("click", () => this.toggleClaimSynthesize());
        }
        if (_0x2df137) {
          {
            _0x2df137.addEventListener("change", _0x12be4a => {
              {
                this.state.selectedTeam = parseInt(_0x12be4a.target.value);
                this.state.hasSwitchedTeam = false;
                this.updateTeamHeroesDisplay();
              }
            });
          }
        }
      }
    },
    async getTowerInfo() {
      {
        try {
          {
            const _0x522805 = await _0x258356.sendCommand("evotower_getinfo", {});
            if (!_0x522805?.["_rawData"]?.["evoTower"]) {
              return null;
            }
            const _0x2dd3f9 = _0x522805._rawData.evoTower.energy;
            const _0x12d967 = _0x522805._rawData.evoTower.towerId;
            const _0x4d55d8 = _0x522805._rawData.evoTower.lotteryLeftCnt || 0;
            let _0x4c6a7a;
            if (_0x12d967 === 0) {
              _0x4c6a7a = "1-1";
            } else {
              {
                const _0x53f744 = Math.floor(_0x12d967 / 10) + 1;
                const _0x100f46 = _0x12d967 % 10 + 1;
                _0x4c6a7a = _0x53f744 + "-" + _0x100f46;
              }
            }
            const _0x417907 = {
              energy: _0x2dd3f9,
              rawTowerId: _0x12d967,
              displayFloor: _0x4c6a7a,
              lotteryLeftCnt: _0x4d55d8
            };
            this.state.towerInfo = _0x417907;
            this.updateTowerInfoDisplay();
            return this.state.towerInfo;
          }
        } catch (_0xd3644c) {
          {
            console.error("获取爬塔信息失败:", _0xd3644c);
            return null;
          }
        }
      }
    },
    async getTeamInfo() {
      {
        try {
          {
            const _0x528b97 = await _0x258356.sendCommand("presetteam_getinfo", {});
            if (!_0x528b97?.["_rawData"]?.["presetTeamInfo"]?.["presetTeamInfo"]) {
              return;
            }
            const _0x72294a = _0x528b97._rawData.presetTeamInfo.presetTeamInfo;
            this.state.teamCount = Object.keys(_0x72294a).length;
            this.state.teamInfo = {};
            for (let _0x4218a1 = 0; _0x4218a1 < this.state.teamCount; _0x4218a1++) {
              {
                const _0x41dc74 = (_0x4218a1 + 1).toString();
                const _0x205f5d = _0x72294a[_0x41dc74];
                if (_0x205f5d?.["teamInfo"]) {
                  {
                    const _0x288c00 = {
                      heroes: [],
                      weaponId: _0x205f5d.weapon?.["weaponId"] || null
                    };
                    for (let _0x26ae45 = 0; _0x26ae45 < Object.keys(_0x205f5d.teamInfo).length; _0x26ae45++) {
                      {
                        const _0x3eec09 = _0x26ae45.toString();
                        if (_0x205f5d.teamInfo[_0x3eec09]?.["heroId"]) {
                          {
                            const _0x1f2bc2 = {
                              id: _0x205f5d.teamInfo[_0x3eec09].heroId,
                              level: _0x205f5d.teamInfo[_0x3eec09].level || 1
                            };
                            _0x288c00.heroes.push(_0x1f2bc2);
                          }
                        }
                      }
                    }
                    this.state.teamInfo[_0x4218a1 + 1] = _0x288c00;
                  }
                }
              }
            }
            this.updateTeamDropdown();
            this.updateTeamHeroesDisplay();
          }
        } catch (_0x2cee85) {
          console.error("获取队伍信息失败:", _0x2cee85);
        }
      }
    },
    updateTowerInfoDisplay() {
      {
        const _0x1e605c = document.getElementById("evo-energy-value");
        const _0x1ed340 = document.getElementById("evo-floor-value");
        if (this.state.towerInfo) {
          {
            if (_0x1e605c) {
              _0x1e605c.textContent = this.state.towerInfo.energy;
            }
            if (_0x1ed340) {
              _0x1ed340.textContent = this.state.towerInfo.displayFloor;
            }
          }
        }
      }
    },
    updateTeamDropdown() {
      {
        const _0x4367a6 = document.getElementById("evo-team-select");
        if (!_0x4367a6) {
          return;
        }
        _0x4367a6.innerHTML = "";
        for (let _0x517209 = 1; _0x517209 <= this.state.teamCount; _0x517209++) {
          {
            const _0x17fcce = document.createElement("option");
            _0x17fcce.value = _0x517209;
            _0x17fcce.textContent = _0x517209;
            if (_0x517209 === this.state.selectedTeam) {
              _0x17fcce.selected = true;
            }
            _0x4367a6.appendChild(_0x17fcce);
          }
        }
      }
    },
    updateTeamHeroesDisplay() {
      {
        const _0x29d7e9 = document.getElementById("evo-heroes-grid");
        if (!_0x29d7e9) {
          return;
        }
        _0x29d7e9.innerHTML = "";
        const _0x402a3b = this.state.teamInfo[this.state.selectedTeam];
        if (!_0x402a3b?.["heroes"]?.["length"]) {
          {
            _0x29d7e9.innerHTML = "<div style=\"grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 11px;\">暂无阵容数据</div>";
            return;
          }
        }
        _0x402a3b.heroes.forEach(_0x30793e => {
          {
            const _0x1439dd = this.heroMap[_0x30793e.id.toString()] || "未知(" + _0x30793e.id + ")";
            const _0x3d8745 = document.createElement("div");
            _0x3d8745.style.cssText = "text-align: center; padding: 4px; background: var(--item-bg); border: 1px solid var(--item-border); border-radius: 4px;";
            _0x3d8745.innerHTML = "<div style=\"font-size: 10px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\" title=\"" + _0x1439dd + "\">" + _0x1439dd + "</div><div style=\"font-size: 9px; color: var(--text-secondary);\">Lv." + _0x30793e.level + "</div>";
            _0x29d7e9.appendChild(_0x3d8745);
          }
        });
      }
    },
    updateWinLoseDisplay() {
      {
        const _0x5378d0 = document.getElementById("evo-winlose-value");
        if (_0x5378d0) {
          _0x5378d0.textContent = this.state.winCount + "/" + this.state.loseCount;
        }
      }
    },
    updateStatus(_0x15e203) {
      {
        const _0x35dea9 = document.getElementById("weird-tower-status");
        if (_0x35dea9) {
          _0x35dea9.textContent = _0x15e203;
        }
      }
    },
    refreshTeams() {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x258356.showtip("等待连接就绪...", "error");
            return;
          }
        }
        this.getTeamInfo();
        this.getTowerInfo();
        _0x258356.showtip("已刷新", "success");
      }
    },
    async switchTeam(_0x2141ff) {
      {
        try {
          {
            await _0x258356.sendCommand("presetteam_getinfo", {});
            const _0x3bf3d7 = {
              teamId: _0x2141ff
            };
            await _0x258356.sendCommand("presetteam_saveteam", _0x3bf3d7);
            await _0x258356.sendCommand("presetteam_getinfo", {});
            return true;
          }
        } catch (_0x5283ea) {
          {
            console.error("切换阵容失败:", _0x5283ea);
            return false;
          }
        }
      }
    },
    async toggleClimb() {
      {
        const _0x5510bc = document.getElementById("evo-toggle-btn");
        if (!_0x5510bc) {
          return;
        }
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            this.updateStatus("等待连接...");
            _0x258356.showtip("等待连接就绪...", "error");
            return;
          }
        }
        this.state.isRunning = !this.state.isRunning;
        if (this.state.isRunning) {
          {
            _0x5510bc.textContent = "停止爬塔";
            _0x5510bc.classList.add("stop");
            this.updateStatus("运行中...");
            if (!this.state.hasSwitchedTeam) {
              {
                this.updateStatus("切换阵容...");
                const _0x31e20c = await this.switchTeam(this.state.selectedTeam);
                if (!_0x31e20c) {
                  {
                    this.stopClimb("切换阵容失败");
                    return;
                  }
                }
                this.state.hasSwitchedTeam = true;
              }
            }
            await this.getTowerInfo();
            if (this.state.towerInfo?.["energy"] > 0) {
              this.updateStatus("运行中");
              this.climbTower();
            } else {
              {
                this.stopClimb("小鱼干不足");
              }
            }
          }
        } else {
          this.stopClimb("已停止");
        }
      }
    },
    stopClimb(_0x37c19c) {
      {
        this.state.isRunning = false;
        const _0x2cddf7 = document.getElementById("evo-toggle-btn");
        if (_0x2cddf7) {
          {
            _0x2cddf7.textContent = "开始爬塔";
            _0x2cddf7.classList.remove("stop");
          }
        }
        this.updateStatus(_0x37c19c || "已停止");
      }
    },
    async climbTower() {
      {
        if (!this.state.isRunning) {
          return;
        }
        try {
          {
            await _0x258356.sendCommand("evotower_readyfight", {});
            const _0xfa6d7f = {
              battleNum: 1,
              winNum: 1
            };
            const _0x2efd1e = await _0x258356.sendCommand("evotower_fight", _0xfa6d7f);
            if (!_0x2efd1e?.["_rawData"]?.["evoTower"]) {
              {
                this.state.loseCount++;
                this.updateWinLoseDisplay();
                return;
              }
            }
            this.state.towerInfo.energy = _0x2efd1e._rawData.evoTower.energy;
            this.updateTowerInfoDisplay();
            const _0x120263 = _0x2efd1e._rawData.winList?.[0] === true;
            if (_0x120263) {
              {
                this.state.winCount++;
              }
            } else {
              {
                this.state.loseCount++;
              }
            }
            this.updateWinLoseDisplay();
            const _0x29996d = await _0x258356.sendCommand("evotower_getinfo", {});
            if (_0x29996d?.["_rawData"]?.["evoTower"]) {
              {
                const _0x4ed980 = _0x29996d._rawData.evoTower.towerId;
                const _0x330bb4 = Math.floor(_0x4ed980 / 10) + 1;
                const _0x635dac = _0x4ed980 % 10 + 1;
                this.state.towerInfo.rawTowerId = _0x4ed980;
                this.state.towerInfo.displayFloor = _0x4ed980 === 0 ? "1-1" : _0x330bb4 + "-" + _0x635dac;
                this.state.towerInfo.energy = _0x29996d._rawData.evoTower.energy;
                this.updateTowerInfoDisplay();
                _0x120263 && _0x635dac === 1 && (await _0x258356.sendCommand("evotower_claimreward", {}));
              }
            }
            if (this.state.towerInfo.energy > 0 && this.state.isRunning) {
              {
                setTimeout(() => this.climbTower(), 400);
              }
            } else {
              this.stopClimb(this.state.towerInfo.energy <= 0 ? "小鱼干耗尽" : "已停止");
            }
          }
        } catch (_0x31ddc2) {
          {
            console.error("爬塔错误:", _0x31ddc2);
            this.state.loseCount++;
            this.updateWinLoseDisplay();
            this.stopClimb("发生错误");
          }
        }
      }
    },
    async buyEnergy() {
      {
        const _0x497f70 = document.getElementById("evo-buy-amount");
        const _0x4e6ce8 = document.getElementById("evo-buy-btn");
        if (!_0x497f70 || !_0x4e6ce8) {
          return;
        }
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x258356.showtip("等待连接就绪...", "error");
            return;
          }
        }
        const _0x53008b = parseInt(_0x497f70.value);
        if (isNaN(_0x53008b) || _0x53008b <= 0) {
          {
            _0x258356.showtip("请输入有效数量", "error");
            return;
          }
        }
        _0x4e6ce8.disabled = true;
        _0x4e6ce8.textContent = "购买中...";
        try {
          {
            const _0x45a359 = {
              energy: _0x53008b
            };
            const _0x1ac07a = await _0x258356.sendCommand("evotower_buyenergy", _0x45a359);
            if (_0x1ac07a?.["_rawData"]?.["evoTower"]) {
              {
                this.state.towerInfo.energy = _0x1ac07a._rawData.evoTower.energy;
                this.updateTowerInfoDisplay();
                _0x258356.showtip("成功购买" + _0x53008b + "个小鱼干", "success");
              }
            } else {
              {
                _0x258356.showtip("购买失败", "error");
              }
            }
          }
        } catch (_0x2c859a) {
          _0x258356.showtip("购买失败: " + _0x2c859a.message, "error");
        } finally {
          _0x4e6ce8.disabled = false;
          _0x4e6ce8.textContent = "购买";
        }
      }
    },
    async refreshLegionMembers() {
      {
        const _0x5c263f = document.getElementById("evo-legion-refresh-btn");
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x258356.showtip("等待连接就绪...", "error");
            return;
          }
        }
        if (_0x5c263f) {
          {
            _0x5c263f.disabled = true;
            _0x5c263f.textContent = "查询中...";
          }
        }
        try {
          {
            const _0x52fa94 = await _0x258356.sendCommand("legion_getinfo", {});
            if (!_0x52fa94?.["_rawData"]?.["info"]?.["members"]) {
              {
                _0x258356.showtip("无法获取俱乐部信息", "error");
                return;
              }
            }
            const _0x1bd84a = _0x52fa94._rawData.info.members;
            const _0x245799 = [];
            for (const _0x4c3347 in _0x1bd84a) {
              {
                const _0x550fbb = _0x1bd84a[_0x4c3347];
                _0x245799.push({
                  roleId: parseInt(_0x4c3347),
                  headImg: _0x550fbb.headImg,
                  name: _0x550fbb.name
                });
              }
            }
            const _0x2aca73 = await _0x258356.sendCommand("evotower_getlegionjoinmembers", {});
            const _0x230f95 = _0x2aca73?.["_rawData"]?.["memberScores"] || {};
            if (_0x245799.length === 0) {
              {
                _0x258356.showtip("没有找到俱乐部成员", "error");
                return;
              }
            }
            this.showLegionMembersDialog(_0x245799, _0x230f95);
          }
        } catch (_0x4d9de4) {
          {
            console.error("获取俱乐部成员信息失败:", _0x4d9de4);
            _0x258356.showtip("获取失败，请重试", "error");
          }
        } finally {
          {
            if (_0x5c263f) {
              {
                _0x5c263f.disabled = false;
                _0x5c263f.textContent = "🏢 查询俱乐部成员层数";
              }
            }
          }
        }
      }
    },
    showLegionMembersDialog(_0xe95435, _0x1ce37c) {
      {
        let _0x764604 = document.getElementById("evo-legion-dialog");
        let _0x3db88a = document.getElementById("evo-legion-overlay");
        if (!_0x764604) {
          {
            _0x3db88a = document.createElement("div");
            _0x3db88a.id = "evo-legion-overlay";
            _0x3db88a.style.cssText = "\n                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                    background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                    display: flex; align-items: center; justify-content: center;\n                ";
            _0x764604 = document.createElement("div");
            _0x764604.id = "evo-legion-dialog";
            _0x764604.style.cssText = "\n                    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                    background: #ffffff;\n                    color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                    border-radius: 12px; padding: 12px; width: 86vw; max-width: 400px;\n                    box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                    z-index: 100000;\n                ";
            document.body.appendChild(_0x3db88a);
            document.body.appendChild(_0x764604);
            _0x3db88a.addEventListener("click", () => this.closeLegionDialog());
          }
        } else {
          {
            _0x3db88a.style.display = "flex";
            _0x764604.style.display = "block";
          }
        }
        _0xe95435.sort((_0x11cfae, _0xf03525) => {
          {
            const _0x25a44f = _0x1ce37c[_0x11cfae.roleId.toString()];
            const _0xf122b7 = _0x1ce37c[_0xf03525.roleId.toString()];
            const _0x311b62 = _0x25a44f !== undefined && _0x25a44f !== null ? _0x25a44f : -1;
            const _0x426033 = _0xf122b7 !== undefined && _0xf122b7 !== null ? _0xf122b7 : -1;
            return _0x426033 - _0x311b62;
          }
        });
        let _0x2429d7 = "";
        _0xe95435.forEach(_0x4f8378 => {
          {
            const _0x37d2fa = _0x4f8378.roleId.toString();
            const _0x48d275 = _0x1ce37c[_0x37d2fa];
            let _0x55c4e3 = "未参加";
            let _0x5b979e = "color: #a0aec0;";
            if (_0x48d275 !== undefined && _0x48d275 !== null) {
              {
                if (_0x48d275 === 0) {
                  _0x55c4e3 = "1-1";
                } else {
                  {
                    const _0x31c198 = Math.floor(_0x48d275 / 10) + 1;
                    const _0x13094e = _0x48d275 % 10 + 1;
                    _0x55c4e3 = _0x31c198 + "-" + _0x13094e;
                  }
                }
                _0x5b979e = "color: #2563eb; font-weight: 600;";
              }
            }
            _0x2429d7 += "\n                    <div style=\"display: flex; align-items: center; padding: 8px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 6px;\">\n                        <img src=\"" + _0x4f8378.headImg + "\" style=\"width: 36px; height: 36px; border-radius: 50%; margin-right: 10px; border: 1px solid #e5e7eb;\" onerror=\"this.style.display='none'\">\n                        <div style=\"flex: 1; min-width: 0;\">\n                            <div style=\"font-size: 12px; font-weight: 600; color: #333333; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">" + _0x4f8378.name + "</div>\n                            <div style=\"font-size: 10px; color: #6b7280;\">ID: " + _0x4f8378.roleId + "</div>\n                        </div>\n                        <div style=\"font-size: 14px; " + _0x5b979e + "\">" + _0x55c4e3 + "</div>\n                    </div>\n                ";
          }
        });
        _0x764604.innerHTML = "\n                <div style=\"display:flex; align-items:center; justify-content:space-between; padding:8px 4px 12px; border-bottom: 1px solid #e5e7eb; margin-bottom: 12px;\">\n                    <div style=\"font-weight:700; font-size: 14px; color:#333333;\">🏢 俱乐部成员层数</div>\n                    <button id=\"evo-legion-close\" style=\"padding:4px 12px; border-radius:6px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                </div>\n                <div style=\"max-height: 60vh; overflow-y: auto; padding: 2px;\">\n                    " + _0x2429d7 + "\n                </div>\n                <div style=\"padding: 8px 4px 4px; text-align: center; font-size: 11px; color: #6b7280; border-top: 1px solid #e5e7eb; margin-top: 12px;\">\n                    共 " + _0xe95435.length + " 位成员\n                </div>\n            ";
        document.getElementById("evo-legion-close").addEventListener("click", () => this.closeLegionDialog());
      }
    },
    closeLegionDialog() {
      {
        const _0x275f9c = document.getElementById("evo-legion-dialog");
        const _0x4189af = document.getElementById("evo-legion-overlay");
        if (_0x275f9c) {
          _0x275f9c.style.display = "none";
        }
        if (_0x4189af) {
          _0x4189af.style.display = "none";
        }
      }
    },
    async toggleClaimSynthesize() {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            _0x258356.showtip("等待连接就绪...", "error");
            return;
          }
        }
        this.state.isClaimSynthesizeRunning = !this.state.isClaimSynthesizeRunning;
        const _0x5bfeae = document.getElementById("evo-claim-synthesize-btn");
        if (this.state.isClaimSynthesizeRunning) {
          {
            if (_0x5bfeae) {
              {
                _0x5bfeae.classList.add("stop");
                _0x5bfeae.textContent = "⏹️ 运行中...点击停止";
              }
            }
            this.updateStatus("奖励领取合成中...");
            await this.claimSynthesize();
          }
        } else {
          {
            if (_0x5bfeae) {
              {
                _0x5bfeae.classList.remove("stop");
                _0x5bfeae.textContent = "🎁 奖励领取合成（效果重启可见）";
              }
            }
            this.updateStatus("已停止");
          }
        }
      }
    },
    async claimSynthesize() {
      {
        try {
          {
            const _0x50786c = await this.getTowerInfo();
            if (!_0x50786c) {
              {
                _0x258356.showtip("获取爬塔信息失败", "error");
                this.stopClaimSynthesize();
                return;
              }
            }
            let _0x425705 = _0x50786c.lotteryLeftCnt || 0;
            console.log("当前钥匙数量: " + _0x425705);
            const _0x1756a1 = {
              actType: 1
            };
            const _0x56e1c3 = await _0x258356.sendCommand("mergebox_getinfo", _0x1756a1);
            if (_0x56e1c3?.["_rawData"]?.["mergeBox"]) {
              {
                const _0x32c43d = _0x56e1c3._rawData.mergeBox.freeEnergy || 0;
                if (_0x32c43d > 0) {
                  {
                    console.log("有" + _0x32c43d + "个免费钥匙可领取");
                    const _0x4ce9a9 = {
                      actType: 1
                    };
                    await _0x258356.sendCommand("mergebox_claimfreeenergy", _0x4ce9a9);
                    const _0x2cfa3d = await this.getTowerInfo();
                    if (_0x2cfa3d) {
                      {
                        _0x425705 = _0x2cfa3d.lotteryLeftCnt || 0;
                      }
                    }
                  }
                }
              }
            }
            while (_0x425705 > 0 && this.state.isClaimSynthesizeRunning) {
              {
                let _0x4ecb8f = {};
                for (let _0x2695a9 = 1; _0x2695a9 <= 7; _0x2695a9++) {
                  {
                    _0x4ecb8f[_0x2695a9] = {};
                    for (let _0x25576e = 1; _0x25576e <= 7; _0x25576e++) {
                      {
                        _0x4ecb8f[_0x2695a9][_0x25576e] = null;
                      }
                    }
                  }
                }
                const _0xf1cdf3 = {
                  actType: 1
                };
                const _0x58f3be = await _0x258356.sendCommand("mergebox_getinfo", _0xf1cdf3);
                if (!_0x58f3be?.["_rawData"]?.["mergeBox"]) {
                  {
                    console.error("获取mergebox信息失败");
                    break;
                  }
                }
                const _0x20aa5c = _0x58f3be._rawData.mergeBox;
                const _0x1aeb9b = _0x20aa5c.freeEnergy || 0;
                if (_0x1aeb9b > 0) {
                  {
                    const _0x1cef7a = {
                      actType: 1
                    };
                    await _0x258356.sendCommand("mergebox_claimfreeenergy", _0x1cef7a);
                    const _0x4fbc45 = await this.getTowerInfo();
                    _0x4fbc45 && (_0x425705 = _0x4fbc45.lotteryLeftCnt || 0);
                  }
                }
                if (_0x20aa5c.gridMap) {
                  {
                    for (const _0x44b60b in _0x20aa5c.gridMap) {
                      {
                        const _0xbf6daf = parseInt(_0x44b60b);
                        const _0x5929ee = _0x20aa5c.gridMap[_0x44b60b];
                        for (const _0xeac391 in _0x5929ee) {
                          {
                            const _0x50eb0c = parseInt(_0xeac391);
                            const _0x126315 = _0x5929ee[_0xeac391];
                            if (_0x126315) {
                              {
                                if (_0x126315.gridConfId !== 0) {
                                  {
                                    const _0x4f42e3 = {
                                      gridConfId: _0x126315.gridConfId,
                                      isLock: _0x126315.isLock
                                    };
                                    _0x4ecb8f[_0xbf6daf][_0x50eb0c] = _0x4f42e3;
                                  }
                                } else {
                                  {
                                    const _0x1e8083 = {
                                      gridItemId: _0x126315.gridItemId
                                    };
                                    _0x4ecb8f[_0xbf6daf][_0x50eb0c] = _0x1e8083;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let _0x32214d = true;
                while (_0x32214d && this.state.isClaimSynthesizeRunning) {
                  {
                    _0x32214d = false;
                    let _0x5e564b = new Map();
                    for (let _0x50f188 = 1; _0x50f188 <= 7; _0x50f188++) {
                      {
                        for (let _0x3524fd = 1; _0x3524fd <= 7; _0x3524fd++) {
                          {
                            const _0x3771cd = _0x4ecb8f[_0x50f188][_0x3524fd];
                            if (_0x3771cd && _0x3771cd.gridItemId) {
                              {
                                const _0x11a1ec = _0x3771cd.gridItemId;
                                if (_0x5e564b.has(_0x11a1ec)) {
                                  {
                                    const _0x4cde2a = _0x5e564b.get(_0x11a1ec);
                                    const _0x4ad2ba = {
                                      gridX: _0x4cde2a.col,
                                      gridY: _0x4cde2a.row
                                    };
                                    const _0x230e75 = {
                                      gridX: _0x50f188,
                                      gridY: _0x3524fd
                                    };
                                    const _0x134ed4 = {
                                      actType: 1,
                                      sourcePos: _0x4ad2ba,
                                      targetPos: _0x230e75
                                    };
                                    const _0x37db16 = await _0x258356.sendCommand("mergebox_mergeitem", _0x134ed4);
                                    if (_0x37db16?.["_rawData"]?.["mergeBox"]) {
                                      {
                                        this.updateGridMap(_0x4ecb8f, _0x37db16._rawData.mergeBox);
                                      }
                                    }
                                    _0x32214d = true;
                                    break;
                                  }
                                } else {
                                  {
                                    const _0x2befeb = {
                                      col: _0x50f188,
                                      row: _0x3524fd
                                    };
                                    _0x5e564b.set(_0x11a1ec, _0x2befeb);
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (_0x32214d) {
                          break;
                        }
                      }
                    }
                  }
                }
                let _0x19638b = false;
                for (let _0x581115 = 1; _0x581115 <= 7; _0x581115++) {
                  {
                    for (let _0x4981a2 = 1; _0x4981a2 <= 7; _0x4981a2++) {
                      {
                        const _0x38d402 = _0x4ecb8f[_0x581115][_0x4981a2];
                        if (_0x38d402 && _0x38d402.gridConfId && !_0x38d402.isLock) {
                          {
                            const _0x1b5a2c = {
                              gridX: _0x581115,
                              gridY: _0x4981a2
                            };
                            const _0x1fd49f = {
                              actType: 1,
                              pos: _0x1b5a2c
                            };
                            const _0x55b5ad = await _0x258356.sendCommand("mergebox_openbox", _0x1fd49f);
                            _0x55b5ad?.["_rawData"]?.["mergeBox"] && this.updateGridMap(_0x4ecb8f, _0x55b5ad._rawData.mergeBox);
                            _0x425705--;
                            let _0x5412b4 = true;
                            while (_0x5412b4 && this.state.isClaimSynthesizeRunning) {
                              {
                                _0x5412b4 = false;
                                let _0x27378e = new Map();
                                for (let _0x4e5893 = 1; _0x4e5893 <= 7; _0x4e5893++) {
                                  {
                                    for (let _0x405411 = 1; _0x405411 <= 7; _0x405411++) {
                                      {
                                        const _0x1d537d = _0x4ecb8f[_0x4e5893][_0x405411];
                                        if (_0x1d537d && _0x1d537d.gridItemId) {
                                          {
                                            const _0x4a6837 = _0x1d537d.gridItemId;
                                            if (_0x27378e.has(_0x4a6837)) {
                                              {
                                                const _0xfd0922 = _0x27378e.get(_0x4a6837);
                                                const _0x2d59df = {
                                                  gridX: _0xfd0922.col,
                                                  gridY: _0xfd0922.row
                                                };
                                                const _0xb29b79 = {
                                                  gridX: _0x4e5893,
                                                  gridY: _0x405411
                                                };
                                                const _0x22081b = {
                                                  actType: 1,
                                                  sourcePos: _0x2d59df,
                                                  targetPos: _0xb29b79
                                                };
                                                const _0x21ffe7 = await _0x258356.sendCommand("mergebox_mergeitem", _0x22081b);
                                                _0x21ffe7?.["_rawData"]?.["mergeBox"] && this.updateGridMap(_0x4ecb8f, _0x21ffe7._rawData.mergeBox);
                                                _0x5412b4 = true;
                                                break;
                                              }
                                            } else {
                                              {
                                                const _0x1bccca = {
                                                  col: _0x4e5893,
                                                  row: _0x405411
                                                };
                                                _0x27378e.set(_0x4a6837, _0x1bccca);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (_0x5412b4) {
                                      break;
                                    }
                                  }
                                }
                              }
                            }
                            _0x19638b = true;
                            break;
                          }
                        }
                      }
                    }
                    if (_0x19638b) {
                      break;
                    }
                  }
                }
                if (!_0x19638b) {
                  {
                    console.log("没有可打开的宝箱");
                    break;
                  }
                }
                const _0x5a18a8 = {
                  actType: 1
                };
                const _0x30b829 = await _0x258356.sendCommand("mergebox_getinfo", _0x5a18a8);
                if (_0x30b829?.["_rawData"]?.["mergeBox"]) {
                  {
                    const _0x3ed64d = _0x30b829._rawData.mergeBox;
                    const _0x55cd30 = _0x3ed64d.costClaimCnt || 0;
                    const _0x360c08 = _0x3ed64d.costTotalCnt || 0;
                    if (_0x360c08 > _0x55cd30) {
                      {
                        const _0x5989d9 = {
                          actType: 1
                        };
                        await _0x258356.sendCommand("mergebox_claimcostprogress", _0x5989d9);
                      }
                    }
                    const _0x18867c = _0x3ed64d.taskMap || {};
                    const _0x4daee1 = _0x3ed64d.taskClaimMap || {};
                    for (const _0x48e8a9 in _0x18867c) {
                      {
                        const _0x2011eb = _0x18867c[_0x48e8a9];
                        if (_0x2011eb > 0 && !_0x4daee1.hasOwnProperty(_0x48e8a9)) {
                          {
                            await _0x258356.sendCommand("mergebox_claimmergeprogress", {
                              actType: 1,
                              taskId: parseInt(_0x48e8a9)
                            });
                          }
                        }
                      }
                    }
                  }
                }
                const _0x549124 = await this.getTowerInfo();
                if (!_0x549124) {
                  break;
                }
                _0x425705 = _0x549124.lotteryLeftCnt || 0;
                await _0x258356.delay(0.1);
              }
            }
            _0x258356.showtip("奖励领取合成完成", "success");
          }
        } catch (_0x503bc5) {
          {
            console.error("奖励领取合成过程中发生错误:", _0x503bc5);
            _0x258356.showtip("奖励领取合成出错", "error");
          }
        } finally {
          this.stopClaimSynthesize();
        }
      }
    },
    updateGridMap(_0x42ef9c, _0x22421e) {
      {
        if (_0x22421e.delPosList) {
          {
            for (const _0x31e0bc of _0x22421e.delPosList) {
              _0x42ef9c[_0x31e0bc.gridX][_0x31e0bc.gridY] = null;
            }
          }
        }
        if (_0x22421e.gridMap) {
          {
            for (const _0x31ffca in _0x22421e.gridMap) {
              {
                const _0x347c89 = parseInt(_0x31ffca);
                const _0x5e1a21 = _0x22421e.gridMap[_0x31ffca];
                for (const _0x5b81b8 in _0x5e1a21) {
                  {
                    const _0x14208a = parseInt(_0x5b81b8);
                    const _0x2c3aad = _0x5e1a21[_0x5b81b8];
                    if (_0x2c3aad) {
                      {
                        if (_0x2c3aad.gridConfId !== 0) {
                          {
                            const _0x266c00 = {
                              gridConfId: _0x2c3aad.gridConfId,
                              isLock: _0x2c3aad.isLock
                            };
                            _0x42ef9c[_0x347c89][_0x14208a] = _0x266c00;
                          }
                        } else {
                          {
                            const _0x389819 = {
                              gridItemId: _0x2c3aad.gridItemId
                            };
                            _0x42ef9c[_0x347c89][_0x14208a] = _0x389819;
                          }
                        }
                      }
                    } else {
                      _0x42ef9c[_0x347c89][_0x14208a] = null;
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    stopClaimSynthesize() {
      {
        this.state.isClaimSynthesizeRunning = false;
        const _0x13ff23 = document.getElementById("evo-claim-synthesize-btn");
        if (_0x13ff23) {
          {
            _0x13ff23.classList.remove("stop");
            _0x13ff23.textContent = "🎁 奖励领取合成（效果重启可见）";
          }
        }
        this.updateStatus("✅ 就绪");
      }
    }
  };
  const _0x3aef59 = {
    "101": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fe/fee2129b-7f79-4895-a419-8d2ce7543c91.18c0c.png",
    "10101": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a0/a0935f7d-a191-4b8f-8998-0fce639eb05a.94364.png",
    "10102": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8ffce34d-1aca-4d65-934c-89323c953bec.9229c.png",
    "1009": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/63/63b20748-27e6-47d6-9ad0-6bf652c0247c.ae7c1.png",
    "10103": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5c/5cca3fa4-5734-4bd4-8936-801b498106bd.111fc.png",
    "2001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/37/37c6e4e5-8b98-4464-84f6-8e1a24e57765.6f62f.png",
    "10108": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8f6e1b84-f833-4d09-9f2f-6cf9e1847525.dc75e.png",
    "10109": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ef/ef67bfc7-e1ce-49d4-8afb-50d3c5233bec.d4072.png",
    "113": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c7/c78fac0f-2b99-4fbc-9222-2825b600f642.8122d.png",
    "11301": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3e/3e372c88-c7b4-4692-be96-68dcbf982f34.b1bca.png",
    "11302": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bc/bce41d67-8cc0-4c81-864b-ca8f1588ba16.49690.png",
    "1004": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/04/047a9cba-5c46-4d1c-9095-113a7c0f31db.f0e8d.png",
    "11304": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d5/d57cb0b7-7ee1-4198-86a0-da1e49348ea6.d57a0.png",
    "2003": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b975f089-d65b-4b45-8c7f-7ac2320b856c.29f35.png",
    "11307": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f6/f6e7ddde-856e-4efd-b991-5634d95fdaea.3f019.png",
    "109": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ae/ae5f4cb0-311c-4dfe-a5e3-a878375d6024.9ea04.png",
    "10901": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d4/d43ea72c-ad11-4681-afdd-68f26bf9b602.56961.png",
    "10902": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ee853be-732e-43d6-b0da-2beb86be7433.47d23.png",
    "10903": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b2/b2e7bca3-4ea3-4683-a699-fd54f1c1a5cb.4985d.png",
    "1007": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73d347d1-60c8-436c-92a3-88aaa36a1abc.e28f5.png",
    "2002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d6/d640a8a9-9886-468a-9150-b7bc22cfc1bf.6914f.png",
    "10908": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b6/b6705382-338c-481b-90ad-38ca5f090e74.370bf.png",
    "102": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/54/54d7cd4a-6876-4d7a-8dcc-e295e7e3e341.608e3.png",
    "10201": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4c/4c9278de-4760-474e-9b65-b26c13b5acc3.b36fe.png",
    "10202": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a9/a98ec4bd-5ccd-4796-9d68-c66909307b28.db406.png",
    "1012": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8c/8cb0f296-9c30-462e-9d56-f51e77ef7799.8133d.png",
    "2004": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b1/b1c8dc22-b729-4fe0-95f3-ffcf03a25349.b8cce.png",
    "10206": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f3/f3bf690d-f92e-4969-af90-522bf772289d.dca3a.png",
    "10207": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d9/d9ce7225-de52-46e1-a202-5227a720f0b4.1cc2b.png",
    "11702": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a4b9a0f-6232-4594-897a-62a3a486ac0a.55faf.png",
    "11703": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ff/ffdabcbe-68a8-4ef8-b396-d8bda3926551.56035.png",
    "11704": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/85/8560da42-6af9-4122-84f4-a1ea672f03cf.3239c.png",
    "11705": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f0/f0ff2e1b-f376-4b5b-985e-b9a20d625db4.6b307.png",
    "11706": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0c/0cbaf8fa-4587-4d61-a43f-3fd05e55968c.14074.png",
    "103": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f55987de-682a-4838-8cee-02cd3893c5bf.0b05b.png",
    "10301": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/91/91370b48-41ac-46ec-b56d-7531b134d743.09eda.png",
    "10302": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d9/d9ceebe2-f798-4fac-8588-e86656fd6931.14758.png",
    "1003": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6e/6edcd35a-aa63-40d1-8b8b-a1a5d36d65a2.76a49.png",
    "10304": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/20/200ab11d-6931-40b1-b9e0-f1d39f6d4a9b.f0c41.png",
    "2016": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/62/624393df-d783-4a16-8405-84aa88cd33ac.19ec0.png",
    "10307": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c3/c36fb5c7-c039-43dc-81ec-b7bafb3c45a5.c799d.png",
    "10308": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6b/6bcbe989-cf31-4b0f-9c88-5f9c27183324.af8d6.png",
    "104": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/23/23987a94-3c9d-4778-b3b7-269b10366829.71134.png",
    "10401": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/05/059c91ae-a850-49fa-bc31-1f353b71d9eb.80713.png",
    "10402": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f5cb60b5-e05b-435e-9553-cbec000581d1.1e007.png",
    "10403": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5e/5e120724-faa0-4cf7-b670-b9dbdfda0541.f29d1.png",
    "10404": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ad/ad12b4fd-9430-44a2-851e-44bb66fa7eea.a0dce.png",
    "1014": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1e/1e2bef7a-527d-45b3-a6c9-3fc790964cd9.bed74.png",
    "2013": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/78/78e688e4-1ae1-4b2e-8c29-8051b664f390.b7f6b.png",
    "10408": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c8/c80a52a6-e973-476e-8d8b-2591cb744106.bd5e7.png",
    "110": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c2/c2b806be-c738-4088-b363-65765414a82c.f9de5.png",
    "11001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9a/9a12df8a-8878-4226-97af-7840a2b4c612.8fe42.png",
    "11002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8a/8af35d82-2600-4898-a4a3-0d4f314ac924.5c074.png",
    "1011": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6d/6d7eedd3-7d79-48e8-9431-b836b0e25f29.b0dca.png",
    "2014": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73dcd488-8e7c-4268-8f4e-15a88a28741b.7345e.png",
    "11005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/70/70603d5d-1bfe-4184-9280-95ae2065fe1b.61682.png",
    "11106": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/61/61088853-f654-4ac7-9b75-6e8834dfafb1.a0df1.png",
    "114": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/83/8330788c-86ee-441e-9b44-5f9f0b6762ea.25498.png",
    "11401": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e6/e634d0e5-2eb4-4b83-9786-3130a55c6b69.e77c7.png",
    "11402": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/34/34d34029-fc87-4709-9098-5973153a7689.68355.png",
    "1001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/41/41c14a40-2a18-438e-96e2-4ed113a0b755.578b7.png",
    "11403": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/69/69a547a7-85d2-4c24-8371-002de8e66b4e.2ebfa.png",
    "11406": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ed/ed0d2c93-1928-44e6-98ae-eba8663a5390.ac1f9.png",
    "2015": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9c/9c61d88c-219a-4bd5-a1ca-35fa393d2485.26b47.png",
    "11408": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bb/bb437a6e-ee24-4b7a-bdfd-91732a14b888.e35dc.png",
    "11409": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/4575b6a3-b1dc-4935-b13f-c8379011b2d8.0520c.png",
    "11802": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ec9f7d6-f964-4c01-8b54-60385cb77598.c7f1d.png",
    "11803": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0e/0ee8d538-b249-45cc-9c26-c4a5dbda50d1.37aaa.png",
    "11804": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2f/2fd974a1-9367-4565-85e6-7e5315f633c9.0df84.png",
    "11805": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/88/88142206-5a73-4807-9586-987e02a21f54.2c289.png",
    "11806": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/91/910bd1c0-51d6-48ee-829b-f96ae33e15a8.30f2a.png",
    "105": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8f871c26-04e6-421e-956d-250f27cc92d2.71401.png",
    "10501": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c2/c21b1168-5775-425a-9629-7b4ee40797bf.80646.png",
    "10502": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/24/248cb635-4a3c-4d34-9321-50f4b3f1e599.4dbb6.png",
    "10503": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/1596a11b-0118-4ac7-93e1-aeb09504374a.cbdd2.png",
    "10504": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8e/8e5895e9-09f6-4248-973f-f024e8dbbe13.2a256.png",
    "1013": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/52/52ac08b1-cbd0-46e2-849e-00ccf7891373.05437.png",
    "2005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/55/55421ffb-5fe9-438b-9cc9-6f58ec2c505d.aee33.png",
    "10509": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/33/3362f4a8-6651-4bc8-994c-9737dc9d7673.e5189.png",
    "10508": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f5c67338-f0de-4141-bc7f-f2e9c1df583d.e23dc.png",
    "106": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/03/03d6aca2-9330-4b4b-9d9c-3ede3bbe4712.d06dc.png",
    "10601": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/57/57805cb1-aed4-4b56-a20e-6eab04e75b8a.e5eeb.png",
    "10602": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/27/27b3a214-5bfc-442c-b62e-fca73fea6083.aee0b.png",
    "1002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/35/3561556b-ff33-47ba-b79c-b250a195e9df.b5f46.png",
    "10603": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/24/24f3621c-1275-4ed5-a9ae-1fb9aff9b56c.8a864.png",
    "10606": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/af/af62d1e3-9df8-4d51-837e-3c6ac679fdb1.d3244.png",
    "111": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bd/bd2bfdc0-2c6c-4caa-a7da-9bb765047926.9151b.png",
    "11101": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d88b4d6-a34b-4a2d-b3d1-3e1ad120ca1c.45151.png",
    "11102": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/154d493a-404c-46b9-914a-f8a36674564d.f35ca.png",
    "11103": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3e/3e7d2ad1-e16a-47bf-8e16-e21ffd846b80.b28d5.png",
    "2006": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8b/8bb83672-5c8c-433b-94b4-099218a72409.b104e.png",
    "11104": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e1/e168ee02-776c-439b-a5f8-b16111c48fc5.1f00b.png",
    "11107": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fb/fbd09ad3-e5fe-4e0b-8c14-fad6066e5dd9.da3e2.png",
    "11108": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/90/90d05dbc-68ea-4924-9ace-d8bf8c1c151e.da622.png",
    "115": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/03/0335b158-4a12-440d-8590-098715664ee9.e40a1.png",
    "11501": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c3/c367a175-f79c-4ee1-b7ee-1b93f7c68cd2.67e32.png",
    "11502": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f0/f0f19158-0207-4df6-ae43-19a5be2646a7.4ee5e.png",
    "1006": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/60/606b1506-64b3-433b-a171-2e0326351e0b.de64b.png",
    "11504": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5e/5ed1e275-fd83-4e1e-8aa2-293889cdc4db.a1fee.png",
    "2007": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d1/d1f8f655-da97-46e5-a39a-bf05e47d81ad.80867.png",
    "119": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8d/8def44ff-bc2b-4d4c-83aa-03e43d48b4a8.74e28.png",
    "11903": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bd/bd565fe7-1b3b-43e7-81e5-85d08b47c67f.e3567.png",
    "3001": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ff/fffa1059-57ae-4ee7-bb9e-c8077db66201.859f9.png",
    "11904": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d2/d2eee121-bc0e-48f6-9c9d-511f852c0a23.f927b.png",
    "11905": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/48/4870b3e1-f5b2-48c5-abaf-54f3d02f37e3.d8fb6.png",
    "107": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4f/4f1057c6-fc97-418f-84ce-8283a03bd16c.85fa5.png",
    "10701": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4f/4f1057c6-fc97-418f-84ce-8283a03bd16c.85fa5.png",
    "10702": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/46/467a9927-fcde-40e3-9dad-666abb1c45cb.98e91.png",
    "10703": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c5/c511c6ee-fe69-4d1e-8d68-1a99f22f9f84.5117b.png",
    "10704": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1a/1a0c86e0-711e-4ea8-b715-33c3b1daa9a2.75bf5.png",
    "10705": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d3/d37c3283-472c-471a-9eb0-fbccc9925c5a.8ea31.png",
    "1008": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3a/3a87cfdb-ba80-484a-a8bb-76fafd6d34c3.49bf4.png",
    "10707": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f2/f215ff4a-c27e-4624-bc7e-5a867706d701.90a3f.png",
    "10708": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bf/bf79a91b-43cb-4006-9ea6-955953a8a751.04084.png",
    "2012": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/20/20cb9e88-3d94-496c-89b0-1dbe5db24984.295f4.png",
    "10711": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d2ec2c5-5263-4a7a-bf0d-7bccfe469b6c.f9b97.png",
    "10712": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/cb/cb45e684-da91-4604-9b83-1acaad28a95b.60d98.png",
    "10713": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/64/64814d7d-2e7a-46fe-999f-2ad201cac54b.588a3.png",
    "10714": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/80/80570815-07e1-452e-8079-f1bf0ea670d4.2b71a.png",
    "108": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/74/740f843b-2eaa-47ef-b000-93064dd1a4d0.5e6a0.png",
    "10801": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/64/64f2ca33-c7a9-4373-b3ee-43c3b2b99cd4.eba56.png",
    "10802": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/50/502487fd-1bec-4072-9a17-ec54f667648b.6bd82.png",
    "1010": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f7/f74c93ee-0066-4151-9ef7-88218e6b9617.f37ff.png",
    "2009": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4e7f67c7-e54d-4aba-bea4-dfa394eda964.3d52f.png",
    "10805": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/7c/7cbac315-ffac-4995-9694-1041e2b3e5e4.0f42e.png",
    "10807": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/30/30611900-b74e-4759-835a-b7e2ab85c164.5ed3c.png",
    "112": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bf/bf8e5395-b6af-4615-8d54-ebf51966f03b.24c63.png",
    "11201": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5b/5b533dc5-b188-4463-8b86-aa29ddb3624f.cff48.png",
    "11202": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2e/2e36eb73-0277-4b52-8df9-ab3212c9513a.000e9.png",
    "11203": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c8/c8206f9a-00bf-407a-a543-ea49e2d77fd7.bcdb9.png",
    "11204": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bb/bb2a459d-9a21-4ad9-bd44-95fa0382c8a7.49abf.png",
    "2011": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ee/eea662a3-e5bd-4d28-989b-6de321eb1616.f06f2.png",
    "116": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/cd/cd137088-98a0-4bdc-8bd8-49a6fe9f2d52.2c31d.png",
    "11601": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/93/9305328c-f17b-403b-b5a3-e6ed538f7781.4e521.png",
    "11602": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f4/f41a8045-b618-4aeb-a118-5e5d7d799820.53f20.png",
    "1005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/71/714a7704-337b-49de-93d5-0c8f9343dc37.e1fc3.png",
    "11604": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/23/2306e674-b55b-4878-8989-a3fc73fb465b.a59d4.png",
    "2010": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/29/29c9c920-4f1c-455f-8b1d-802c85d76b56.16885.png",
    "11605": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/77/77228bf3-d4a6-4e1e-9fc9-913ee6f22490.555dc.png",
    "12002": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b979cada-f44b-4f9c-acf6-8556f0eef4d7.9c233.png",
    "12003": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/79/793ba75f-f7a7-4392-a0da-9c1a0cec655b.128f0.png",
    "12004": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/28/289cdf92-c0a9-4915-bb09-8d1443179988.4d20f.png",
    "12005": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/17/17ec3eb6-7cbb-4439-b1f3-c12d5d27e673.4f0be.png",
    "12006": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/72/7246e4e3-7167-4843-86db-b89590fc6122.d252e.png",
    "12007": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/7a/7a7beccc-de85-48b0-a43e-24d04c64acf5.e6ec2.png",
    "201": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/da/da4e4ac4-1df9-42c7-880b-8e3f41994e48.d0559.png",
    "202": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/48/4892abf3-e917-477d-97cf-293e7093a856.dcd4f.png",
    "203": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d4/d47b69e7-6408-4af1-83b3-1d5a5be336a8.d78f2.png",
    "213": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d2/d285b41c-1d7c-4047-a9be-1e1b155cdac9.db396.png",
    "214": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0e/0ec64fd0-8e79-4f38-9fe5-3378fb558389.73497.png",
    "216": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b7/b75788f4-baf0-4999-bf22-b0bb5d5403fa.889c5.png",
    "223": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fa/fae866d7-a86b-4dca-8bee-fde39babc0a0.54efd.png",
    "204": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/eb/eb6598fd-ef92-44dc-b0a4-111328ff2f8b.94429.png",
    "205": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d1/d1c08e44-bd29-4bf5-a844-256e7df4318c.7252d.png",
    "206": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a5b3b2f-1551-46be-9cdd-f3f866fadc8a.8550e.png",
    "217": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ba/bad0acaa-3c7a-479d-98aa-1aa29ef2fc9f.60f34.png",
    "218": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f9/f9eaa977-2136-4dc3-9553-4955cd23ba2c.6691f.png",
    "219": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/ab86fa12-971a-4440-b8d7-2d0dff35950f.dace3.png",
    "220": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2e/2ea44c13-26fd-4459-aa8d-864b66a45726.c073c.png",
    "313": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e7/e7b6662c-127d-4ae8-b6e3-a4898ecdd618.e5896.png",
    "314": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ce/ce9bc3d1-efdc-4734-b7a4-72c4793b20f3.b35af.png",
    "207": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ea/eaa1af3f-9c21-40e0-b62b-2ed1206ad09e.5f8a6.png",
    "208": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e3/e31d1937-8efb-4a5a-a745-408f205a4274.c93c7.png",
    "209": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d8/d8f1601c-777a-43b6-9aac-1b8ff5de1f7a.46391.png",
    "221": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f1/f168b1af-7516-45b8-ae1f-1acde3373421.16f1e.png",
    "222": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/455f1136-ac0a-45bc-acfd-4a07c2caec30.c2001.png",
    "224": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/11/112a8eba-da12-431b-bda3-26e04f7b77de.436e8.png",
    "210": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f2/f2d3cb6f-7d94-49f4-b547-6e9fd8995f6e.122a2.png",
    "211": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f7/f71dfbbc-4d09-4423-a78a-47ae7d75a185.f4ccd.png",
    "212": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/df/dfc7feb9-9253-4bb6-a156-eeaef2d50ca5.34e37.png",
    "225": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/22/22ac8f71-2cd2-4b3d-9318-d2c84ff53a30.354f9.png",
    "226": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/dd/dd2cc35d-f3ba-4908-959a-cb3938f299d5.fc071.png",
    "227": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/abb2e92f-26cb-41b7-933e-43c35628574a.61898.png",
    "228": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/abb2e92f-26cb-41b7-933e-43c35628574a.61898.png",
    "310": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/86/8632aec4-6f12-4d6e-9812-6b5e092da2e9.5246e.png",
    "311": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/159f6d94-c961-4019-80f8-57df22055103.81ffb.png",
    "312": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9dac54ce-f962-499e-a778-91a20235648a.90719.png",
    "302": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/97/978272bc-4d67-485b-8f94-81df83a88a22.3698b.png",
    "303": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/45ca3049-bfc8-4241-ba0c-2b94832b89e8.784fb.png",
    "215": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/be/be698af2-9deb-4833-b751-15abab57ecef.253e5.png",
    "304": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a1/a14b0495-5366-41ba-b80c-e82a1da9269d.993a3.png",
    "305": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5b/5bfb293a-39c2-45c2-9a2a-0ca5b71fc072.936b3.png",
    "306": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/90/90e9325d-183d-4dc8-8104-f562859405e5.9dac8.png",
    "301": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73f8598e-fe61-4862-b326-8c6340b59a0b.7597b.png",
    "307": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/16/16d22463-9ad6-481c-a6b2-79e2f918ea98.a3085.png",
    "308": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e2/e268a294-096e-4af5-9ce2-4fcbd7edcbf4.1a2c6.png",
    "309": "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/41/41c3a9b9-1227-45f9-9527-b0b07e6257fe.a2160.png"
  };
  const _0x2733e2 = {
    "1": "5c4652b9-7e51-4733-879a-1ad89a60a19e.6a8ea",
    "2": "6eaa0510-6969-4e6b-85a9-c0ad78371b83.0164e",
    "3": "1fdc6fac-cac3-4934-93f2-8c3e6b3b958e.0539f",
    "4": "9d0875ac-41b2-4de1-9cb7-e207a3a977b7.458d0",
    "5": "01e407e7-8a48-45e3-a58a-914bbb58af99.28cea",
    "6": "c64f985d-936f-4995-a2b8-29f379bbca77.d2c73",
    "7": "10d02233-c360-4e67-8669-ab8035fc0f39.256f5",
    "8": "88679199-6ae6-425b-8c30-5698461d2b10.478b8",
    "9": "a59734bc-12d2-4959-a2ce-12c3a3c1be88.469fc"
  };
  const _0x574ea4 = {
    isRunning: false,
    isStopping: false,
    isGettingId: false
  };
  const _0x1bf649 = {
    skinImageMap: _0x3aef59,
    weaponImageMap: _0x2733e2,
    getWeaponImageUrl(_0x379ccf) {
      {
        const _0x3ff947 = this.weaponImageMap[_0x379ccf];
        if (!_0x3ff947) {
          return null;
        }
        return "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/" + _0x3ff947.substring(0, 2) + "/" + _0x3ff947 + ".png";
      }
    },
    state: _0x574ea4,
    init() {
      {
        const _0x1893be = document.getElementById("match-start-btn");
        const _0x13e5b9 = document.getElementById("match-get-id-btn");
        _0x1893be && _0x1893be.addEventListener("click", () => this.handleMainButtonClick());
        if (_0x13e5b9) {
          {
            _0x13e5b9.addEventListener("click", () => this.getOpponentId());
          }
        }
        const _0x3e3edc = localStorage.getItem("match_opponent_id");
        if (_0x3e3edc) {
          {
            const _0x3a48f1 = document.getElementById("match-opponent-id");
            if (_0x3a48f1) {
              _0x3a48f1.value = _0x3e3edc;
            }
          }
        }
      }
    },
    handleMainButtonClick() {
      {
        if (this.state.isRunning) {
          {
            this.stop();
          }
        } else {
          {
            this.start();
          }
        }
      }
    },
    updateStatus(_0x1e49b0) {
      {
        const _0x3da1e7 = document.getElementById("match-status");
        if (_0x3da1e7) {
          _0x3da1e7.textContent = _0x1e49b0;
        }
      }
    },
    updateResults(_0x353b1c) {
      {
        const _0x2d6610 = document.getElementById("match-results");
        if (_0x2d6610) {
          _0x2d6610.innerHTML = _0x353b1c;
        }
      }
    },
    async getOpponentId() {
      {
        if (this.state.isGettingId) {
          return;
        }
        const _0x29d11b = document.getElementById("match-get-id-btn");
        this.state.isGettingId = true;
        if (_0x29d11b) {
          _0x29d11b.textContent = "监听中";
        }
        this.updateStatus("请在游戏中切磋一次");
        this.updateResults("<div style=\"text-align:center;color:var(--highlight);\">正在监听切磋请求，请在游戏中进行一次切磋...</div>");
        try {
          {
            const _0x1c4873 = await new Promise((_0x330c23, _0x372ef0) => {
              {
                const _0x2eb23b = setTimeout(() => {
                  _0x372ef0(new Error("监听超时"));
                }, 30000);
                if (!window.ws || typeof window.ws.sendAsync !== "function") {
                  {
                    clearTimeout(_0x2eb23b);
                    _0x372ef0(new Error("WebSocket不可用"));
                    return;
                  }
                }
                const _0x2fa9cd = window.ws.sendAsync;
                window.ws.sendAsync = async _0x68b26 => {
                  {
                    if (_0x68b26 && _0x68b26.cmd === "fight_startpvp" && _0x68b26.params && _0x68b26.params.targetId) {
                      {
                        clearTimeout(_0x2eb23b);
                        window.ws.sendAsync = _0x2fa9cd;
                        _0x330c23(_0x68b26.params.targetId);
                      }
                    }
                    return await _0x2fa9cd.call(window.ws, _0x68b26);
                  }
                };
              }
            });
            const _0x3fa7c3 = document.getElementById("match-opponent-id");
            if (_0x3fa7c3) {
              _0x3fa7c3.value = _0x1c4873;
            }
            localStorage.setItem("match_opponent_id", _0x1c4873);
            this.updateStatus("✅ 已获取");
            this.updateResults("<div style=\"text-align:center;color:var(--success);\">成功获取ID: " + _0x1c4873 + "</div>");
            _0x258356.showtip("获取成功: " + _0x1c4873, "success");
          }
        } catch (_0x38ea97) {
          this.updateStatus("获取失败");
          this.updateResults("<div style=\"text-align:center;color:var(--error);\">" + _0x38ea97.message + "</div>");
        } finally {
          {
            this.state.isGettingId = false;
            if (_0x29d11b) {
              _0x29d11b.textContent = "获取";
            }
          }
        }
      }
    },
    stop(_0x54fffc = false) {
      {
        if (!_0x54fffc) {
          {
            this.state.isStopping = true;
            this.updateStatus("正在停止...");
          }
        }
        this.state.isRunning = false;
        this.state.isStopping = false;
        const _0x1ef1bd = document.getElementById("match-start-btn");
        const _0x5cf681 = document.getElementById("match-opponent-id");
        const _0x2c74cd = document.getElementById("match-fight-count");
        if (_0x1ef1bd) {
          {
            _0x1ef1bd.textContent = "开始";
            _0x1ef1bd.classList.remove("stop");
          }
        }
        if (_0x5cf681) {
          _0x5cf681.disabled = false;
        }
        if (_0x2c74cd) {
          _0x2c74cd.disabled = false;
        }
      }
    },
    isFullTeamAlive(_0xb8c1fa) {
      {
        if (!_0xb8c1fa || !Array.isArray(_0xb8c1fa)) {
          return false;
        }
        return _0xb8c1fa.every(_0x49346a => _0x49346a.hp > 0);
      }
    },
    hasHeroDead(_0x443f13) {
      {
        if (!_0x443f13 || !Array.isArray(_0x443f13)) {
          return false;
        }
        return _0x443f13.some(_0x3396d4 => _0x3396d4.hp === 0);
      }
    },
    calculateAvgRounds(_0xb6ed66) {
      {
        if (_0xb6ed66.length === 0) {
          return 0;
        }
        return (_0xb6ed66.reduce((_0x597e56, _0x335221) => _0x597e56 + _0x335221, 0) / _0xb6ed66.length).toFixed(1);
      }
    },
    formatPower(_0x3fcac4) {
      {
        if (_0x3fcac4 >= 100000000) {
          return (_0x3fcac4 / 100000000).toFixed(1) + "亿";
        }
        if (_0x3fcac4 >= 10000) {
          return (_0x3fcac4 / 10000).toFixed(1) + "万";
        }
        return _0x3fcac4.toString();
      }
    },
    createHeroSlot(_0x37e5b6, _0xb62f62, _0x18c5f3 = false) {
      {
        const _0x42af46 = document.createElement("div");
        _0x42af46.style.cssText = "text-align:center;";
        const _0x44f1ac = _0xb62f62[_0x37e5b6];
        if (!_0x44f1ac) {
          {
            _0x42af46.innerHTML = "<div style=\"width:40px;height:40px;background:var(--border);border-radius:4px;\"></div>";
            return _0x42af46;
          }
        }
        let _0x43f4ba = _0x44f1ac.skin;
        if (_0x43f4ba === -1 || _0x43f4ba === "-1" || _0x43f4ba === undefined || _0x43f4ba === null) {
          {
            const _0x1eef53 = {
              "117": "11702",
              "118": "11802",
              "120": "12002"
            };
            const _0x17f07c = String(_0x44f1ac.id);
            _0x43f4ba = _0x1eef53[_0x17f07c] || _0x44f1ac.id;
          }
        }
        const _0x2314a9 = this.skinImageMap[_0x43f4ba] || this.skinImageMap[_0x44f1ac.id] || "";
        const _0x2f665c = _0x18c5f3 ? "transform:scaleX(-1);" : "";
        _0x42af46.innerHTML = "<img src=\"" + _0x2314a9 + "\" style=\"width:40px;height:40px;border-radius:4px;" + _0x2f665c + "\"><div style=\"font-size:9px;\">Lv." + _0x44f1ac.level + "</div>";
        return _0x42af46;
      }
    },
    displayTeams(_0x509dbf) {
      {
        const _0x5b70d0 = document.getElementById("match-teams-container");
        if (!_0x5b70d0 || !_0x509dbf) {
          return;
        }
        _0x5b70d0.style.display = "block";
        const _0x315dc3 = document.getElementById("match-my-heroes");
        const _0x23ae8d = document.getElementById("match-my-title");
        if (_0x315dc3 && _0x509dbf.leftTeam) {
          {
            _0x315dc3.innerHTML = "";
            _0x315dc3.style.display = "grid";
            _0x315dc3.style.gridTemplateColumns = "1fr 1fr";
            _0x315dc3.style.gridTemplateRows = "repeat(3, 1fr)";
            _0x315dc3.style.rowGap = "2px";
            _0x315dc3.style.columnGap = "8px";
            _0x315dc3.style.alignItems = "center";
            _0x315dc3.style.justifyItems = "center";
            _0x315dc3.style.width = "fit-content";
            const _0xad8e1c = _0x509dbf.leftTeam.team;
            const _0x32ebfb = Array.isArray(_0xad8e1c) ? _0xad8e1c : Object.values(_0xad8e1c || {});
            const _0x3c041d = this.createHeroSlot(2, _0x32ebfb, false);
            _0x3c041d.style.gridColumn = "1";
            _0x3c041d.style.gridRow = "1";
            const _0x405eb2 = this.createHeroSlot(3, _0x32ebfb, false);
            _0x405eb2.style.gridColumn = "1";
            _0x405eb2.style.gridRow = "2";
            const _0x33a7fd = this.createHeroSlot(4, _0x32ebfb, false);
            _0x33a7fd.style.gridColumn = "1";
            _0x33a7fd.style.gridRow = "3";
            const _0x851960 = this.createHeroSlot(0, _0x32ebfb, false);
            _0x851960.style.gridColumn = "2";
            _0x851960.style.gridRow = "1 / 3";
            _0x851960.style.alignSelf = "start";
            _0x851960.style.marginTop = "40%";
            const _0x398857 = this.createHeroSlot(1, _0x32ebfb, false);
            _0x398857.style.gridColumn = "2";
            _0x398857.style.gridRow = "2 / 4";
            _0x398857.style.alignSelf = "start";
            _0x398857.style.marginTop = "40%";
            _0x315dc3.appendChild(_0x3c041d);
            _0x315dc3.appendChild(_0x405eb2);
            _0x315dc3.appendChild(_0x33a7fd);
            _0x315dc3.appendChild(_0x851960);
            _0x315dc3.appendChild(_0x398857);
            const _0x397d17 = _0x509dbf.leftTeam.weaponId;
            if (_0x397d17 && this.weaponImageMap[_0x397d17]) {
              {
                const _0x28fb40 = document.createElement("div");
                _0x28fb40.style.cssText = "grid-column:2;grid-row:3;align-self:end;text-align:center;";
                const _0x47660d = this.getWeaponImageUrl(_0x397d17);
                _0x28fb40.innerHTML = "<img src=\"" + _0x47660d + "\" style=\"width:24px;height:24px;border-radius:4px;\">";
                _0x315dc3.appendChild(_0x28fb40);
              }
            }
            if (_0x23ae8d && _0x509dbf.leftTeam.name) {
              {
                const _0x291c2a = _0x509dbf.leftTeam.headImg ? "<img src=\"" + decodeURIComponent(_0x509dbf.leftTeam.headImg) + "\" style=\"width:24px;height:24px;border-radius:50%;vertical-align:middle;margin-right:4px;\">" : "";
                _0x23ae8d.innerHTML = _0x291c2a + "<span style=\"vertical-align:middle;\">" + _0x509dbf.leftTeam.name + "</span><span style=\"font-size:10px;color:var(--text-secondary);margin-left:4px;vertical-align:middle;\">" + this.formatPower(_0x509dbf.leftTeam.power || 0) + "</span>";
              }
            }
          }
        }
        const _0x2bd7bd = document.getElementById("match-opp-heroes");
        const _0x61fe1a = document.getElementById("match-opp-title");
        if (_0x2bd7bd && _0x509dbf.rightTeam) {
          {
            _0x2bd7bd.innerHTML = "";
            _0x2bd7bd.style.display = "grid";
            _0x2bd7bd.style.gridTemplateColumns = "1fr 1fr";
            _0x2bd7bd.style.gridTemplateRows = "repeat(3, 1fr)";
            _0x2bd7bd.style.rowGap = "2px";
            _0x2bd7bd.style.columnGap = "8px";
            _0x2bd7bd.style.alignItems = "center";
            _0x2bd7bd.style.justifyItems = "center";
            _0x2bd7bd.style.width = "fit-content";
            const _0x5061d7 = _0x509dbf.rightTeam.team;
            const _0x2ffe67 = Array.isArray(_0x5061d7) ? _0x5061d7 : Object.values(_0x5061d7 || {});
            const _0x4c8f82 = this.createHeroSlot(0, _0x2ffe67, true);
            _0x4c8f82.style.gridColumn = "1";
            _0x4c8f82.style.gridRow = "1 / 3";
            _0x4c8f82.style.alignSelf = "start";
            _0x4c8f82.style.marginTop = "40%";
            const _0x47d34d = this.createHeroSlot(1, _0x2ffe67, true);
            _0x47d34d.style.gridColumn = "1";
            _0x47d34d.style.gridRow = "2 / 4";
            _0x47d34d.style.alignSelf = "start";
            _0x47d34d.style.marginTop = "40%";
            const _0x346abb = _0x509dbf.rightTeam.weaponId;
            if (_0x346abb && this.weaponImageMap[_0x346abb]) {
              {
                const _0x229767 = document.createElement("div");
                _0x229767.style.cssText = "grid-column:1;grid-row:3;align-self:end;text-align:center;";
                const _0x517e00 = this.getWeaponImageUrl(_0x346abb);
                _0x229767.innerHTML = "<img src=\"" + _0x517e00 + "\" style=\"width:24px;height:24px;border-radius:4px;transform:scaleX(-1);\">";
                _0x2bd7bd.appendChild(_0x229767);
              }
            }
            const _0x1dff18 = this.createHeroSlot(2, _0x2ffe67, true);
            _0x1dff18.style.gridColumn = "2";
            _0x1dff18.style.gridRow = "1";
            const _0x1e5ea3 = this.createHeroSlot(3, _0x2ffe67, true);
            _0x1e5ea3.style.gridColumn = "2";
            _0x1e5ea3.style.gridRow = "2";
            const _0x1f3d84 = this.createHeroSlot(4, _0x2ffe67, true);
            _0x1f3d84.style.gridColumn = "2";
            _0x1f3d84.style.gridRow = "3";
            _0x2bd7bd.appendChild(_0x4c8f82);
            _0x2bd7bd.appendChild(_0x47d34d);
            _0x2bd7bd.appendChild(_0x1dff18);
            _0x2bd7bd.appendChild(_0x1e5ea3);
            _0x2bd7bd.appendChild(_0x1f3d84);
            if (_0x61fe1a && _0x509dbf.rightTeam.name) {
              {
                const _0x55d108 = _0x509dbf.rightTeam.headImg ? "<img src=\"" + decodeURIComponent(_0x509dbf.rightTeam.headImg) + "\" style=\"width:24px;height:24px;border-radius:50%;vertical-align:middle;margin-right:4px;\">" : "";
                _0x61fe1a.innerHTML = _0x55d108 + "<span style=\"vertical-align:middle;\">" + _0x509dbf.rightTeam.name + "</span><span style=\"font-size:10px;color:var(--text-secondary);margin-left:4px;vertical-align:middle;\">" + this.formatPower(_0x509dbf.rightTeam.power || 0) + "</span>";
              }
            }
          }
        }
      }
    },
    updateTeamStats(_0x327d45, _0x23bfe5) {
      {
        const _0x324bde = document.getElementById("match-my-stats");
        const _0x4b3110 = document.getElementById("match-opp-stats");
        _0x324bde && (_0x324bde.style.display = "block", _0x324bde.innerHTML = "\n                    <div><span style=\"color:var(--success);\">胜" + _0x327d45.wins + "</span> <span style=\"color:var(--highlight);\">平" + _0x327d45.draws + "</span> <span style=\"color:var(--error);\">负" + _0x327d45.losses + "</span></div>\n                    <div>胜率 <strong>" + _0x327d45.winRate + "%</strong></div>\n                    <div>胜利平均回合: <strong>" + _0x327d45.avgRounds + "</strong></div>\n                    <div>满编" + _0x327d45.fullTeamWins + "次 · 满编胜率: " + _0x327d45.fullTeamWinRate + "%</div>\n                ");
        _0x4b3110 && (_0x4b3110.style.display = "block", _0x4b3110.innerHTML = "\n                    <div><span style=\"color:var(--success);\">胜" + _0x23bfe5.wins + "</span> <span style=\"color:var(--highlight);\">平" + _0x23bfe5.draws + "</span> <span style=\"color:var(--error);\">负" + _0x23bfe5.losses + "</span></div>\n                    <div>胜率 <strong>" + _0x23bfe5.winRate + "%</strong></div>\n                    <div>胜利平均回合: <strong>" + _0x23bfe5.avgRounds + "</strong></div>\n                    <div>满编" + _0x23bfe5.fullTeamWins + "次 · 满编胜率: " + _0x23bfe5.fullTeamWinRate + "%</div>\n                ");
      }
    },
    displayFinalResults(_0x3f0c79) {
      {
        const _0x2fab63 = _0x3f0c79.wins + _0x3f0c79.losses + _0x3f0c79.draws;
        const _0x44145b = _0x2fab63 > 0 ? (_0x3f0c79.wins / _0x2fab63 * 100).toFixed(2) : "0.00";
        const _0xccea60 = _0x2fab63 > 0 ? (_0x3f0c79.losses / _0x2fab63 * 100).toFixed(2) : "0.00";
        const _0x305669 = this.calculateAvgRounds(_0x3f0c79.winRounds);
        const _0x5c8e46 = this.calculateAvgRounds(_0x3f0c79.lossRounds);
        const _0x51af35 = _0x2fab63 > 0 ? (_0x3f0c79.leftFullTeamWins / _0x2fab63 * 100).toFixed(2) : "0.00";
        const _0x4b1446 = _0x2fab63 > 0 ? (_0x3f0c79.rightFullTeamWins / _0x2fab63 * 100).toFixed(2) : "0.00";
        const _0x1bcd01 = document.getElementById("match-results");
        if (_0x1bcd01) {
          _0x1bcd01.style.display = "none";
        }
        const _0x41deac = {
          wins: _0x3f0c79.wins,
          draws: _0x3f0c79.draws,
          losses: _0x3f0c79.losses,
          winRate: _0x44145b,
          avgRounds: _0x305669,
          fullTeamWins: _0x3f0c79.leftFullTeamWins,
          fullTeamWinRate: _0x51af35
        };
        const _0x3623ef = {
          wins: _0x3f0c79.losses,
          draws: _0x3f0c79.draws,
          losses: _0x3f0c79.wins,
          winRate: _0xccea60,
          avgRounds: _0x5c8e46,
          fullTeamWins: _0x3f0c79.rightFullTeamWins,
          fullTeamWinRate: _0x4b1446
        };
        this.updateTeamStats(_0x41deac, _0x3623ef);
      }
    },
    async start() {
      {
        if (this.state.isRunning) {
          return;
        }
        const _0x291ade = document.getElementById("match-opponent-id");
        const _0x3ee6c1 = document.getElementById("match-fight-count");
        const _0x520542 = document.getElementById("match-start-btn");
        const _0x451f91 = parseInt(_0x291ade?.["value"], 10);
        const _0x1aea5d = parseInt(_0x3ee6c1?.["value"], 10);
        if (isNaN(_0x451f91) || _0x451f91 <= 0) {
          {
            this.updateStatus("请输入ID");
            _0x258356.showtip("请输入有效的ID", "error");
            return;
          }
        }
        if (isNaN(_0x1aea5d) || _0x1aea5d <= 0 || _0x1aea5d > 999) {
          {
            this.updateStatus("次数1-999");
            _0x258356.showtip("次数范围1-999", "error");
            return;
          }
        }
        localStorage.setItem("match_opponent_id", _0x451f91);
        this.state.isRunning = true;
        this.state.isStopping = false;
        _0x520542 && (_0x520542.textContent = "停止", _0x520542.classList.add("stop"));
        if (_0x291ade) {
          _0x291ade.disabled = true;
        }
        if (_0x3ee6c1) {
          _0x3ee6c1.disabled = true;
        }
        this.updateResults("<div style=\"text-align:center;color:var(--text-secondary);\">正在开始切磋...</div>");
        this.updateStatus("切磋中...");
        const _0x2fff62 = {
          wins: 0,
          losses: 0,
          draws: 0,
          leftFullTeamWins: 0,
          rightFullTeamWins: 0,
          winRounds: [],
          lossRounds: []
        };
        for (let _0x4b2ca0 = 1; _0x4b2ca0 <= _0x1aea5d; _0x4b2ca0++) {
          {
            if (this.state.isStopping) {
              {
                this.updateStatus("已停止");
                break;
              }
            }
            this.updateStatus(_0x4b2ca0 + "/" + _0x1aea5d);
            if (_0x520542) {
              _0x520542.textContent = _0x4b2ca0 + "/" + _0x1aea5d;
            }
            try {
              {
                const _0x1583bb = {
                  battleVersion: _0x234c38,
                  targetId: _0x451f91
                };
                const _0x1d7ced = await _0x258356.sendCommand("fight_startpvp", _0x1583bb);
                const _0xeb03d4 = _0x1d7ced?.["_rawData"]?.["battleData"];
                const _0x149290 = _0xeb03d4?.["result"];
                if (_0x4b2ca0 === 1 && _0xeb03d4) {
                  {
                    this.displayTeams(_0xeb03d4);
                  }
                }
                if (!_0x149290) {
                  {
                    _0x2fff62.draws++;
                    continue;
                  }
                }
                const _0x45aa38 = _0x149290.sponsor?.["teamInfo"];
                const _0x61d241 = _0x149290.accept?.["teamInfo"];
                const _0x5d0912 = _0x149290.round || 0;
                const _0x6a9cc6 = _0x45aa38?.["every"](_0x296cae => _0x296cae.hp === 0);
                const _0x38c5e9 = _0x61d241?.["every"](_0x424be0 => _0x424be0.hp === 0);
                if (_0x6a9cc6 && !_0x38c5e9) {
                  {
                    _0x2fff62.losses++;
                    _0x2fff62.lossRounds.push(_0x5d0912);
                    if (this.isFullTeamAlive(_0x61d241)) {
                      _0x2fff62.rightFullTeamWins++;
                    }
                  }
                } else {
                  if (_0x38c5e9 && !_0x6a9cc6) {
                    {
                      _0x2fff62.wins++;
                      _0x2fff62.winRounds.push(_0x5d0912);
                      if (this.isFullTeamAlive(_0x45aa38)) {
                        _0x2fff62.leftFullTeamWins++;
                      }
                    }
                  } else {
                    {
                      _0x2fff62.draws++;
                    }
                  }
                }
                const _0x43a6dc = _0x2fff62.wins + _0x2fff62.losses + _0x2fff62.draws;
                const _0x5a634e = _0x43a6dc > 0 ? (_0x2fff62.wins / _0x43a6dc * 100).toFixed(1) : 0;
                this.updateResults("<div style=\"text-align:center;\">进度: " + _0x4b2ca0 + "/" + _0x1aea5d + " | <span style=\"color:var(--success);\">" + _0x2fff62.wins + "胜</span> <span style=\"color:var(--highlight);\">" + _0x2fff62.draws + "平</span> <span style=\"color:var(--error);\">" + _0x2fff62.losses + "负</span> | 胜率: " + _0x5a634e + "%</div>");
              }
            } catch (_0x33db37) {
              console.error("第" + _0x4b2ca0 + "场战斗出错:", _0x33db37.message);
              _0x2fff62.draws++;
            }
            _0x4b2ca0 < _0x1aea5d && !this.state.isStopping && (await _0x258356.delay(0.02));
          }
        }
        this.displayFinalResults(_0x2fff62);
        this.updateStatus("完成");
        this.stop(true);
      }
    }
  };
  const _0x45676c = {
    myArenaInfo: null,
    myMonthInfo: null,
    artifactPoint: 0,
    isRunning: false
  };
  const _0x43acb8 = {
    state: _0x45676c,
    init() {
      {
        const _0x495c1d = document.getElementById("monthly-refresh-btn");
        const _0x1598ab = document.getElementById("monthly-arena-btn");
        const _0x18fbe6 = document.getElementById("monthly-fishing-btn");
        if (_0x495c1d) {
          _0x495c1d.addEventListener("click", () => this.getActivityData());
        }
        if (_0x1598ab) {
          _0x1598ab.addEventListener("click", () => this.completeArenaTask());
        }
        if (_0x18fbe6) {
          _0x18fbe6.addEventListener("click", () => this.completeFishingTask());
        }
        this.getActivityData();
      }
    },
    updateStatus(_0x5f5197) {
      {
        const _0x1f1388 = document.getElementById("monthly-status");
        if (_0x1f1388) {
          _0x1f1388.textContent = _0x5f5197;
        }
      }
    },
    async getActivityData() {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            this.updateStatus("⏳ 等待连接...");
            return;
          }
        }
        try {
          {
            this.updateStatus("🔄 获取中...");
            const _0x411a92 = await _0x258356.sendCommand("activity_get", {});
            _0x411a92 && _0x411a92._rawData && _0x411a92._rawData.activity ? (this.state.myArenaInfo = _0x411a92._rawData.activity.myArenaInfo || {}, this.state.myMonthInfo = _0x411a92._rawData.activity.myMonthInfo || {}, this.updateUI(), this.updateStatus("✅ 就绪")) : this.updateStatus("❌ 获取失败");
          }
        } catch (_0x747e1) {
          {
            console.error("获取活动数据失败:", _0x747e1);
            this.updateStatus("❌ 错误");
          }
        }
      }
    },
    updateUI() {
      {
        const _0x16625f = this.state.myArenaInfo?.["num"] || 0;
        const _0x442916 = 240;
        const _0x5affec = Math.min(_0x16625f, _0x442916);
        const _0x23b681 = document.getElementById("monthly-arena-progress");
        const _0x2398d1 = document.getElementById("monthly-arena-btn");
        if (_0x23b681) {
          _0x23b681.textContent = _0x5affec + "/" + _0x442916;
        }
        if (_0x2398d1 && !_0x2398d1.textContent.includes("补齐中")) {
          {
            if (_0x16625f >= _0x442916) {
              {
                _0x2398d1.textContent = "已完成";
                _0x2398d1.disabled = true;
              }
            } else {
              {
                _0x2398d1.textContent = "一键补齐";
                _0x2398d1.disabled = false;
              }
            }
          }
        }
        const _0x3904a7 = this.state.myMonthInfo["2"] && this.state.myMonthInfo["2"].num || 0;
        const _0xb1efaf = 320;
        const _0x362f44 = Math.min(_0x3904a7, _0xb1efaf);
        const _0x59b734 = document.getElementById("monthly-fishing-progress");
        const _0x20cce0 = document.getElementById("monthly-fishing-btn");
        if (_0x59b734) {
          _0x59b734.textContent = _0x362f44 + "/" + _0xb1efaf;
        }
        if (_0x20cce0 && !_0x20cce0.textContent.includes("补齐中")) {
          {
            _0x3904a7 >= _0xb1efaf ? (_0x20cce0.textContent = "已完成", _0x20cce0.disabled = true) : (_0x20cce0.textContent = "一键补齐", _0x20cce0.disabled = false);
          }
        }
      }
    },
    async completeArenaTask() {
      {
        const _0x23fef8 = document.getElementById("monthly-arena-btn");
        const _0x56e8cf = document.getElementById("monthly-arena-progress");
        const _0x6fb72b = this.state.myArenaInfo?.["num"] || 0;
        const _0x2b4d22 = 240;
        if (_0x6fb72b >= _0x2b4d22) {
          {
            _0x258356.showtip("竞技场已完成", "info");
            return;
          }
        }
        _0x23fef8 && (_0x23fef8.disabled = true, _0x23fef8.textContent = "补齐中... " + _0x6fb72b + "/" + _0x2b4d22);
        this.updateStatus("🎮 竞技场补齐中...");
        try {
          {
            while (this.state.myArenaInfo.num < 240) {
              {
                const _0x42c3be = {
                  refresh: false
                };
                const _0x421a05 = await _0x258356.sendCommand("arena_getareatarget", _0x42c3be);
                if (!_0x421a05?.["_rawData"]?.["roleList"]?.[0]) {
                  throw new Error("获取目标失败");
                }
                const _0x617c19 = _0x421a05._rawData.roleList[0].roleId;
                const _0x254c33 = {
                  battleVersion: _0x234c38,
                  targetId: _0x617c19
                };
                const _0x3a433d = await _0x258356.sendCommand("fight_startareaarena", _0x254c33);
                if (!_0x3a433d?.["_rawData"]?.["battleData"]) {
                  throw new Error("战斗响应错误");
                }
                const _0x39fb59 = _0x3a433d._rawData.battleData.result?.["isWin"];
                this.state.myArenaInfo.num += _0x39fb59 ? 2 : 1;
                if (_0x56e8cf) {
                  _0x56e8cf.textContent = this.state.myArenaInfo.num + "/240";
                }
                if (_0x23fef8) {
                  _0x23fef8.textContent = "补齐中... " + this.state.myArenaInfo.num + "/240";
                }
                await _0x258356.delay(0.5);
              }
            }
            if (_0x23fef8) {
              {
                _0x23fef8.textContent = "已完成";
                _0x23fef8.disabled = true;
              }
            }
            this.updateStatus("✅ 就绪");
            _0x258356.showtip("竞技场补齐完成！", "success");
          }
        } catch (_0x53e2de) {
          {
            console.error("竞技场补齐失败:", _0x53e2de);
            if (_0x23fef8) {
              {
                _0x23fef8.disabled = false;
                _0x23fef8.textContent = "一键补齐";
              }
            }
            this.updateStatus("❌ 错误");
            _0x258356.showtip("竞技场补齐失败: " + _0x53e2de.message, "error");
          }
        }
      }
    },
    async completeFishingTask() {
      {
        const _0x4d655f = document.getElementById("monthly-fishing-btn");
        const _0x169bdb = document.getElementById("monthly-fishing-progress");
        const _0x278c03 = this.state.myMonthInfo["2"]?.["num"] || 0;
        const _0x1a2e8c = 320;
        if (_0x278c03 >= _0x1a2e8c) {
          {
            _0x258356.showtip("普通钓鱼已完成", "info");
            return;
          }
        }
        if (_0x4d655f) {
          {
            _0x4d655f.disabled = true;
            _0x4d655f.textContent = "补齐中... " + _0x278c03 + "/" + _0x1a2e8c;
          }
        }
        this.updateStatus("🎣 钓鱼补齐中...");
        let _0x3615b5 = 0;
        try {
          {
            while ((this.state.myMonthInfo["2"]?.["num"] || 0) < 320) {
              {
                const _0x1beadf = this.state.myMonthInfo["2"]?.["num"] || 0;
                const _0xa60a2b = 320 - _0x1beadf;
                let _0x2a717f = _0x3615b5 < 3 ? 1 : Math.min(10, _0xa60a2b);
                _0x3615b5++;
                const _0x96f817 = {
                  lotteryNumber: _0x2a717f,
                  newFree: true,
                  type: 1
                };
                const _0x1a195e = await _0x258356.sendCommand("artifact_lottery", _0x96f817);
                if (!_0x1a195e?.["_rawData"]?.["role"]) {
                  throw new Error("钓鱼响应错误");
                }
                const _0x5b2cb3 = _0x1a195e._rawData.role.statistics?.["month:artifact:2"] || 0;
                this.state.artifactPoint = _0x1a195e._rawData.role.statistics?.["artifact:point"] || 0;
                if (!this.state.myMonthInfo["2"]) {
                  this.state.myMonthInfo["2"] = {};
                }
                this.state.myMonthInfo["2"].num = _0x5b2cb3;
                if (_0x169bdb) {
                  _0x169bdb.textContent = _0x5b2cb3 + "/320";
                }
                if (_0x4d655f) {
                  _0x4d655f.textContent = "补齐中... " + _0x5b2cb3 + "/320";
                }
                await _0x258356.delay(0.5);
              }
            }
            if (_0x4d655f) {
              _0x4d655f.textContent = "领取金鱼竿...";
            }
            await this.exchangeGoldfishRod();
            if (_0x4d655f) {
              {
                _0x4d655f.textContent = "已完成";
                _0x4d655f.disabled = true;
              }
            }
            this.updateStatus("✅ 就绪");
            _0x258356.showtip("普通钓鱼补齐完成！", "success");
          }
        } catch (_0x410d2c) {
          {
            console.error("钓鱼补齐失败:", _0x410d2c);
            if (_0x4d655f) {
              _0x4d655f.textContent = "领取金鱼竿...";
            }
            await this.exchangeGoldfishRod();
            const _0x15a7f8 = this.state.myMonthInfo["2"]?.["num"] || 0;
            if (_0x15a7f8 >= 320) {
              {
                if (_0x4d655f) {
                  {
                    _0x4d655f.textContent = "已完成";
                    _0x4d655f.disabled = true;
                  }
                }
                this.updateStatus("✅ 就绪");
              }
            } else {
              {
                if (_0x4d655f) {
                  {
                    _0x4d655f.disabled = false;
                    _0x4d655f.textContent = "一键补齐";
                  }
                }
                this.updateStatus("❌ 错误");
                _0x258356.showtip("钓鱼补齐失败: " + _0x410d2c.message, "error");
              }
            }
          }
        }
      }
    },
    async exchangeGoldfishRod() {
      {
        try {
          {
            while (this.state.artifactPoint >= 20) {
              {
                const _0x15131d = await _0x258356.sendCommand("artifact_exchange", {});
                if (_0x15131d?.["_rawData"]?.["role"]?.["statistics"]) {
                  this.state.artifactPoint = _0x15131d._rawData.role.statistics["artifact:point"] || 0;
                } else {
                  {
                    break;
                  }
                }
                await _0x258356.delay(0.5);
              }
            }
          }
        } catch (_0x2f97ad) {
          {
            console.error("金鱼竿兑换失败:", _0x2f97ad);
          }
        }
      }
    }
  };
  const _0x6789ec = {
    currentData: null,
    currentDate: "",
    init() {
      {
        const _0x4205b6 = document.getElementById("salt-field-date");
        if (_0x4205b6) {
          {
            _0x4205b6.value = this.getLastSaturdayString();
          }
        }
        const _0x4e931a = document.getElementById("salt-field-query");
        _0x4e931a && _0x4e931a.addEventListener("click", () => this.queryWarRecords());
        const _0x5101a8 = document.getElementById("salt-field-export");
        _0x5101a8 && _0x5101a8.addEventListener("click", () => this.exportWarRecords());
        const _0x3edb9f = document.getElementById("salt-field-summary");
        if (_0x3edb9f) {
          {
            _0x3edb9f.addEventListener("click", () => this.showSummary());
          }
        }
      }
    },
    getLastSaturdayString() {
      {
        const _0x108579 = new Date();
        const _0x52f937 = _0x108579.getDay();
        let _0x5ba76f = 0;
        if (_0x52f937 === 6) {
          _0x5ba76f = 0;
        } else {
          if (_0x52f937 === 0) {
            _0x5ba76f = 1;
          } else {
            _0x5ba76f = _0x52f937 + 1;
          }
        }
        const _0x37c19d = new Date(_0x108579);
        _0x37c19d.setDate(_0x108579.getDate() - _0x5ba76f);
        const _0x397fb8 = _0x37c19d.getFullYear();
        const _0x17290d = String(_0x37c19d.getMonth() + 1).padStart(2, "0");
        const _0x20eab6 = String(_0x37c19d.getDate()).padStart(2, "0");
        return _0x397fb8 + "-" + _0x17290d + "-" + _0x20eab6;
      }
    },
    formatDateForAPI(_0x56fcd9) {
      {
        return _0x56fcd9.replace(/-/g, "/");
      }
    },
    async queryWarRecords() {
      {
        const _0x278462 = document.getElementById("salt-field-status");
        const _0x294ef4 = document.getElementById("salt-field-results");
        const _0x280b52 = document.getElementById("salt-field-actions");
        if (!_0x278462 || !_0x294ef4 || !_0x280b52) {
          return;
        }
        _0x278462.textContent = "🔍 查询中...";
        _0x294ef4.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">正在查询战绩...</p>";
        _0x280b52.style.display = "none";
        try {
          {
            const _0x7ae18f = document.getElementById("salt-field-date");
            if (!_0x7ae18f) {
              throw new Error("日期输入框未找到");
            }
            this.currentDate = _0x7ae18f.value;
            const _0x10602d = this.formatDateForAPI(this.currentDate);
            const _0x2b3ed0 = {
              date: _0x10602d
            };
            const _0x5b66f1 = await _0x258356.sendCommand("legionwar_getdetails", _0x2b3ed0);
            const _0x29be09 = _0x5b66f1?.["roleDetailsList"] || _0x5b66f1?.["_rawData"]?.["roleDetailsList"] || _0x5b66f1?.["body"]?.["roleDetailsList"] || _0x5b66f1?.["data"]?.["roleDetailsList"] || [];
            this.currentData = _0x29be09;
            if (!_0x29be09 || _0x29be09.length === 0) {
              {
                _0x294ef4.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">暂无战绩数据</p>";
              }
            } else {
              {
                const _0x2f6e26 = [..._0x29be09].sort((_0x10127b, _0x51d99a) => Number(_0x51d99a?.["winCnt"] || 0) - Number(_0x10127b?.["winCnt"] || 0));
                const _0x2e30c6 = _0x2f6e26.map((_0x5c9c97, _0x1f90b7) => {
                  {
                    const _0x3f9450 = _0x5c9c97?.["name"] || _0x5c9c97?.["roleName"] || _0x5c9c97?.["nickname"] || "-";
                    const _0x430103 = Number(_0x5c9c97?.["winCnt"] || 0);
                    const _0x3ad9d3 = Number(_0x5c9c97?.["loseCnt"] || 0);
                    const _0x4c79e7 = Number(_0x5c9c97?.["buildingCnt"] || 0);
                    return "\n                        <div style=\"display:flex; align-items:center; justify-content:space-between; padding:8px; margin:4px 0; background: var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                            <div style=\"display:flex; gap:10px; align-items:center;\">\n                                <span style=\"color:var(--text-secondary); font-size:12px;\">" + (_0x1f90b7 + 1) + ".</span>\n                                <span style=\"color:var(--text-primary); font-weight:500;\">" + _0x3f9450 + "</span>\n                            </div>\n                            <div style=\"display:flex; gap:15px; color:var(--text-secondary); font-size:12px;\">\n                                <span>击杀 <span style=\"color:var(--success); font-weight:500;\">" + _0x430103 + "</span></span>\n                                <span>死亡 <span style=\"color:var(--error); font-weight:500;\">" + _0x3ad9d3 + "</span></span>\n                                <span>攻城 <span style=\"color:var(--highlight); font-weight:500;\">" + _0x4c79e7 + "</span></span>\n                            </div>\n                        </div>";
                  }
                }).join("");
                const _0x1d51c3 = "\n                    <div style=\"margin-bottom:8px; padding:8px; background: rgba(0,0,0,0.02); border-radius:6px; color:var(--text-secondary); font-size:12px;\">\n                        查询日期：" + this.currentDate + "｜参战人数：" + _0x29be09.length + "\n                    </div>";
                _0x294ef4.innerHTML = _0x1d51c3 + _0x2e30c6;
                _0x280b52.style.display = "grid";
              }
            }
            _0x278462.textContent = "📊 就绪";
            _0x258356.showtip("盐场战报加载完成", "success");
          }
        } catch (_0x223aa3) {
          {
            _0x294ef4.innerHTML = "<p style=\"text-align: center; color: var(--error); font-size: 12px;\">查询失败：" + _0x223aa3.message + "</p>";
            _0x278462.textContent = "❌ 查询出错";
            console.error("查询盐场战报失败:", _0x223aa3);
          }
        }
      }
    },
    exportWarRecords() {
      {
        if (!this.currentData || !this.currentDate) {
          {
            _0x258356.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0xe1a622 = "序号,玩家名称,击杀数,死亡数,攻城数\n";
            this.currentData.sort((_0x563250, _0x4ddfb9) => Number(_0x4ddfb9?.["winCnt"] || 0) - Number(_0x563250?.["winCnt"] || 0)).forEach((_0x105be3, _0x1f3a68) => {
              {
                const _0x18213b = _0x105be3?.["name"] || _0x105be3?.["roleName"] || _0x105be3?.["nickname"] || "-";
                const _0x2c8778 = Number(_0x105be3?.["winCnt"] || 0);
                const _0x32299f = Number(_0x105be3?.["loseCnt"] || 0);
                const _0x1c2431 = Number(_0x105be3?.["buildingCnt"] || 0);
                _0xe1a622 += _0x1f3a68 + 1 + ",\"" + _0x18213b + "\"," + _0x2c8778 + "," + _0x32299f + "," + _0x1c2431 + "\n";
              }
            });
            const _0x4a9f26 = {
              type: "text/csv;charset=utf-8;"
            };
            const _0x1cd81a = new Blob([_0xe1a622], _0x4a9f26);
            const _0x406dbb = document.createElement("a");
            const _0x4d85a7 = URL.createObjectURL(_0x1cd81a);
            _0x406dbb.setAttribute("href", _0x4d85a7);
            _0x406dbb.setAttribute("download", "盐场战报_" + this.currentDate.replace(/-/g, "") + ".csv");
            _0x406dbb.style.visibility = "hidden";
            document.body.appendChild(_0x406dbb);
            _0x406dbb.click();
            document.body.removeChild(_0x406dbb);
            _0x258356.showtip("战报导出成功", "success");
          }
        } catch (_0x488984) {
          _0x258356.showtip("导出失败: " + _0x488984.message, "error");
          console.error("导出盐场战报失败:", _0x488984);
        }
      }
    },
    showSummary() {
      {
        if (!this.currentData) {
          {
            _0x258356.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0x3cf6e8 = 0;
            let _0x352824 = 0;
            let _0x33dddd = 0;
            let _0x1538a2 = 0;
            this.currentData.forEach(_0x3f26f7 => {
              {
                const _0x428c89 = Number(_0x3f26f7?.["winCnt"] || 0);
                const _0x5acbf2 = Number(_0x3f26f7?.["loseCnt"] || 0);
                const _0x38ddf2 = Number(_0x3f26f7?.["buildingCnt"] || 0);
                _0x3cf6e8 += _0x428c89;
                _0x352824 += _0x5acbf2;
                _0x33dddd += _0x38ddf2;
                if (_0x428c89 > 0 || _0x5acbf2 > 0 || _0x38ddf2 > 0) {
                  {
                    _0x1538a2++;
                  }
                }
              }
            });
            const _0x1ced33 = document.getElementById("salt-field-results");
            if (_0x1ced33) {
              {
                const _0x4ec321 = "\n                    <div style=\"padding:15px; background: rgba(0,0,0,0.02); border-radius:8px; margin-bottom:10px;\">\n                        <h4 style=\"margin:0 0 10px 0; color:var(--highlight); font-size:14px;\">盐场战报汇总</h4>\n                        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px;\">\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">参战总人数</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">" + this.currentData.length + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">活跃成员数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x1538a2 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总击杀数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x3cf6e8 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总死亡数</div>\n                                <div style=\"color:var(--error); font-size:16px; font-weight:600;\">" + _0x352824 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总攻城数</div>\n                                <div style=\"color:var(--highlight); font-size:16px; font-weight:600;\">" + _0x33dddd + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">击杀/死亡比</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">\n                                    " + (_0x352824 > 0 ? (_0x3cf6e8 / _0x352824).toFixed(2) : "∞") + "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"text-align:center;\">\n                        <button class=\"task-btn\" onclick=\"document.getElementById('salt-field-query').click();\">\n                            查看详细数据\n                        </button>\n                    </div>";
                _0x1ced33.innerHTML = _0x4ec321;
              }
            }
          }
        } catch (_0x15e6a3) {
          {
            _0x258356.showtip("生成汇总失败: " + _0x15e6a3.message, "error");
            console.error("生成盐场战报汇总失败:", _0x15e6a3);
          }
        }
      }
    }
  };
  const _0x3aa451 = {
    isRunning: false,
    isStopping: false,
    dom: {},
    delayBetweenFights: 1,
    init() {
      {
        this.dom.startButton = document.querySelector("#start-winrate-btn");
        this.dom.fightCountInput = document.querySelector("#winrate-fight-count");
        this.dom.statusEl = document.querySelector("#winrate-status");
        this.dom.resultsEl = document.querySelector("#winrate-results");
        const _0x1b2df4 = localStorage.getItem("winrateFightCount");
        if (_0x1b2df4 && this.dom.fightCountInput) {
          {
            this.dom.fightCountInput.value = _0x1b2df4;
          }
        }
        if (this.dom.startButton) {
          {
            this.dom.startButton.addEventListener("click", this.handleMainButtonClick.bind(this));
          }
        }
        if (this.dom.fightCountInput) {
          {
            this.dom.fightCountInput.addEventListener("change", _0x3a3d4c => {
              {
                localStorage.setItem("winrateFightCount", _0x3a3d4c.target.value);
              }
            });
          }
        }
      }
    },
    updateStatus(_0x2b0beb) {
      this.dom.statusEl && (this.dom.statusEl.textContent = _0x2b0beb);
    },
    clearResults() {
      this.dom.resultsEl && (this.dom.resultsEl.innerHTML = "");
    },
    displayOpponentResult(_0x26c421, _0x459133) {
      {
        if (!this.dom.resultsEl) {
          return;
        }
        let _0x298b4f = this.dom.resultsEl.querySelector("[data-opponent-id=\"" + _0x26c421.id + "\"]");
        const _0x4aae8d = _0x459133.wins + _0x459133.losses + _0x459133.draws;
        const _0x27090d = _0x4aae8d > 0 ? (_0x459133.wins / _0x4aae8d * 100).toFixed(1) : 0;
        if (_0x298b4f) {
          _0x298b4f.innerHTML = "\n                    <div><strong>" + _0x26c421.name + "</strong> (ID: " + _0x26c421.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x459133.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x459133.losses + "负</span> / " + _0x459133.draws + "平 | 胜率: <strong>" + _0x27090d + "%</strong></div>\n                ";
        } else {
          {
            _0x298b4f = document.createElement("div");
            _0x298b4f.className = "winrate-result-item";
            _0x298b4f.dataset.opponentId = _0x26c421.id;
            _0x298b4f.innerHTML = "\n                    <div><strong>" + _0x26c421.name + "</strong> (ID: " + _0x26c421.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x459133.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x459133.losses + "负</span> / " + _0x459133.draws + "平 | 胜率: <strong>" + _0x27090d + "%</strong></div>\n                ";
            this.dom.resultsEl.appendChild(_0x298b4f);
          }
        }
      }
    },
    stop(_0x5195a2 = false) {
      {
        if (!_0x5195a2) {
          {
            this.isStopping = true;
            this.updateStatus("正在请求停止...");
          }
        }
        this.isRunning = false;
        this.isStopping = false;
        if (this.dom.startButton) {
          {
            this.dom.startButton.textContent = "获取对手并开始测试";
            this.dom.startButton.classList.remove("stop");
          }
        }
        if (this.dom.fightCountInput) {
          {
            this.dom.fightCountInput.disabled = false;
          }
        }
        if (_0x5195a2) {
          {
            this.updateStatus("✅ 所有测试完成！");
          }
        } else {
          this.updateStatus("✅ 已停止");
        }
      }
    },
    async start() {
      {
        if (this.isRunning) {
          return;
        }
        const _0x5380f0 = parseInt(this.dom.fightCountInput?.["value"] || 30, 10);
        if (isNaN(_0x5380f0) || _0x5380f0 <= 0) {
          {
            this.updateStatus("❌ 请输入有效的战斗次数");
            _0x258356.showtip("请输入有效的战斗次数", "error");
            return;
          }
        }
        this.isRunning = true;
        this.isStopping = false;
        this.dom.startButton && (this.dom.startButton.textContent = "停止测试", this.dom.startButton.classList.add("stop"));
        this.dom.fightCountInput && (this.dom.fightCountInput.disabled = true);
        this.clearResults();
        try {
          {
            this.updateStatus("⚔️ 正在进入竞技场...");
            await _0x258356.sendCommand("arena_startarea", {});
            await _0x258356.delay(1);
          }
        } catch (_0x359ede) {
          {
            this.updateStatus("❌ 进入竞技场失败: " + _0x359ede.message);
            this.stop();
            return;
          }
        }
        this.updateStatus("📋 正在获取竞技场对手列表...");
        let _0x168c72 = [];
        try {
          {
            const _0x4b5a6f = {
              refresh: false
            };
            const _0x356ba4 = await _0x258356.sendCommand("arena_getareatarget", _0x4b5a6f);
            const _0x1c3a4c = _0x356ba4?.["_rawData"]?.["roleList"];
            if (!_0x1c3a4c || _0x1c3a4c.length === 0) {
              {
                throw new Error("未能获取到对手列表");
              }
            }
            _0x168c72 = _0x1c3a4c.map(_0x5a45fa => ({
              id: _0x5a45fa.roleId,
              name: _0x5a45fa.info?.["name"] || "对手" + _0x5a45fa.roleId
            }));
            this.clearResults();
            _0x168c72.forEach(_0x70aa35 => {
              {
                const _0x16f5f3 = document.createElement("div");
                _0x16f5f3.className = "winrate-result-item";
                _0x16f5f3.dataset.opponentId = _0x70aa35.id;
                _0x16f5f3.innerHTML = "\n                        <div><strong>" + _0x70aa35.name + "</strong> (ID: " + _0x70aa35.id + ")</div>\n                        <div class=\"winrate-opponent-placeholder\">正在准备测试...</div>\n                    ";
                this.dom.resultsEl.appendChild(_0x16f5f3);
              }
            });
            this.updateStatus("🎯 获取到 " + _0x168c72.length + " 位对手，开始极速测试...");
          }
        } catch (_0x13f33c) {
          {
            this.updateStatus("❌ 获取对手失败: " + _0x13f33c.message);
            _0x258356.showtip("获取对手失败: " + _0x13f33c.message, "error");
            this.stop();
            return;
          }
        }
        let _0x503ccb = 0;
        for (const _0x296661 of _0x168c72) {
          {
            _0x503ccb++;
            if (this.isStopping) {
              {
                this.updateStatus("🛑 测试已手动停止");
                break;
              }
            }
            this.updateStatus("⚔️ 测试对手 " + _0x296661.name + " (" + _0x503ccb + "/" + _0x168c72.length + ")");
            const _0x54d2d7 = {
              wins: 0,
              losses: 0,
              draws: 0
            };
            for (let _0x2001db = 1; _0x2001db <= _0x5380f0; _0x2001db++) {
              {
                if (this.isStopping) {
                  break;
                }
                try {
                  {
                    const _0x41e4ab = {
                      battleVersion: _0x234c38,
                      targetId: _0x296661.id
                    };
                    const _0x50f77c = await _0x258356.sendCommand("fight_startpvp", _0x41e4ab);
                    const _0x35142c = _0x50f77c?.["_rawData"]?.["battleData"]?.["result"];
                    const _0x194099 = _0x35142c?.["sponsor"]?.["ext"]?.["curHP"];
                    const _0x1183f2 = _0x35142c?.["accept"]?.["ext"]?.["curHP"];
                    if (_0x35142c && typeof _0x194099 !== "undefined" && typeof _0x1183f2 !== "undefined") {
                      {
                        if (_0x194099 > 0 && _0x1183f2 === 0) {
                          {
                            _0x54d2d7.wins++;
                          }
                        } else {
                          if (_0x194099 === 0) {
                            _0x54d2d7.losses++;
                          } else {
                            {
                              _0x54d2d7.draws++;
                            }
                          }
                        }
                      }
                    } else {
                      {
                        _0x54d2d7.draws++;
                      }
                    }
                  }
                } catch (_0x5d9e73) {
                  {
                    _0x54d2d7.draws++;
                    console.error("挑战 " + _0x296661.name + " 时出错:", _0x5d9e73.message);
                  }
                }
                _0x2001db % 10 === 0 && (await _0x258356.delay(this.delayBetweenFights / 1000));
              }
            }
            this.displayOpponentResult(_0x296661, _0x54d2d7);
          }
        }
        this.stop(true);
      }
    },
    handleMainButtonClick() {
      {
        this.isRunning ? this.stop() : this.start();
      }
    }
  };
  const _0xbfe1b4 = _0x531aad.querySelector(".panel-content");
  const _0x1793c9 = _0x531aad.querySelector("#opacity-slider");
  const _0x4859d9 = _0x4bbb45 => {
    {
      const _0x4d1b36 = _0x4bbb45 / 100;
      _0x531aad.style.background = "transparent";
      _0x531aad.querySelector(".opacity-value").textContent = _0x4bbb45 + "%";
      _0x531aad.style.setProperty("--panel-bg", "rgba(247, 250, 252, " + 0.98 * _0x4d1b36 + ")");
      _0x531aad.style.setProperty("--item-bg", "rgba(255, 255, 255, " + _0x4d1b36 + ")");
      const _0x1174d7 = _0x531aad.querySelector(".panel-header");
      _0x1174d7 && (_0x1174d7.style.background = "rgba(0, 0, 0, " + 0.02 * _0x4d1b36 + ")");
    }
  };
  _0x1793c9.addEventListener("input", _0x4e0423 => _0x4859d9(_0x4e0423.target.value));
  _0x4859d9(_0x1793c9.value);
  _0x531aad.querySelector(".panel-header").addEventListener("click", _0x17fea0 => {
    {
      if (_0x17fea0.target.closest(".opacity-control")) {
        return;
      }
      _0x531aad.classList.toggle("collapse");
      _0x531aad.classList.toggle("expanded");
      _0x531aad.classList.contains("collapse") && _0x531aad.classList.remove("icon-active");
    }
  });
  _0x531aad.addEventListener("mouseenter", () => {
    _0x531aad.classList.contains("collapse") && _0x531aad.classList.add("icon-active");
  });
  _0x531aad.addEventListener("mouseleave", () => {
    {
      if (_0x531aad.classList.contains("collapse")) {
        {
          _0x531aad.classList.remove("icon-active");
        }
      }
    }
  });
  const _0x4f4b6d = {
    passive: true
  };
  _0x531aad.addEventListener("touchstart", () => {
    {
      if (_0x531aad.classList.contains("collapse")) {
        {
          _0x531aad.classList.add("icon-active");
        }
      }
    }
  }, _0x4f4b6d);
  _0xbfe1b4.addEventListener("click", _0x479578 => {
    {
      const _0x223c5d = _0x479578.target.closest(".tab-btn");
      const _0xf217fa = _0x479578.target.closest(".sub-tab-btn");
      if (_0x223c5d && !_0x223c5d.classList.contains("active")) {
        {
          _0xbfe1b4.querySelector(".tab-btn.active").classList.remove("active");
          _0x223c5d.classList.add("active");
          _0xbfe1b4.querySelector(".tab-pane.active").classList.remove("active");
          _0xbfe1b4.querySelector("#" + _0x223c5d.dataset.tab).classList.add("active");
        }
      }
      if (_0xf217fa && !_0xf217fa.classList.contains("active")) {
        {
          const _0x1da8d4 = _0xf217fa.closest(".tab-pane");
          _0x1da8d4.querySelector(".sub-tab-btn.active").classList.remove("active");
          _0xf217fa.classList.add("active");
          _0x1da8d4.querySelector(".sub-pane.active").classList.remove("active");
          _0x1da8d4.querySelector("#" + _0xf217fa.dataset.subTab).classList.add("active");
        }
      }
    }
  });
  const _0x20eb9d = document.getElementById("club-boss-count");
  _0x531aad.querySelector("#club-module").addEventListener("click", _0x4ee8a7 => {
    {
      const _0xfbf03d = _0x4ee8a7.target.dataset.action;
      if (!_0xfbf03d) {
        return;
      }
      let _0x131827 = parseInt(_0x20eb9d.textContent);
      if (_0xfbf03d === "increment" && _0x131827 < 4) {
        _0x131827++;
      }
      if (_0xfbf03d === "decrement" && _0x131827 > 0) {
        _0x131827--;
      }
      _0x20eb9d.textContent = _0x131827;
    }
  });
  _0xbfe1b4.addEventListener("click", _0x4b0f44 => {
    {
      const _0x47326b = _0x4b0f44.target.closest("[data-module]");
      if (_0x47326b) {
        {
          const _0x1c82a9 = _0x47326b.dataset.module;
          _0xbfe1b4.querySelectorAll(".module-content").forEach(_0x5a8c28 => {
            _0x5a8c28.classList.remove("active");
          });
          const _0xae8edd = _0xbfe1b4.querySelector("#" + _0x1c82a9);
          _0xae8edd && _0xae8edd.classList.add("active");
        }
      }
    }
  });
  const _0x16fff5 = {
    id: "daily-hangup-combined",
    label: "收菜5次、加钟",
    task: "daily-task-hangup-combined",
    defaultChecked: true
  };
  const _0x3e4de1 = {
    id: "daily-bottle-renew",
    label: "续罐子",
    task: "daily-task-bottle-renew",
    defaultChecked: true
  };
  const _0x4e70ca = {
    id: "daily-bottle-claim",
    label: "收盐罐",
    task: "daily-task-bottle-claim",
    defaultChecked: false
  };
  const _0x5843be = {
    id: "daily-quick-tasks",
    label: "邮件、签到、赠金币、福利",
    task: "daily-task-combined-quick",
    defaultChecked: true
  };
  const _0x52a826 = {
    id: "daily-boss",
    label: "每日咸王考验",
    task: "daily-task-boss",
    defaultChecked: true
  };
  const _0x62a879 = {
    id: "daily-gold",
    label: "点金三次",
    task: "daily-task-gold",
    defaultChecked: true
  };
  const _0x1060e1 = {
    id: "daily-quiz",
    label: "自动答题",
    task: "daily-task-quiz",
    defaultChecked: true
  };
  const _0x3c1c5d = {
    id: "daily-genie-tickets",
    label: "领取扫荡券",
    task: "daily-task-genie-tickets",
    defaultChecked: true
  };
  const _0x41138e = {
    id: "daily-genie-sweep",
    label: "灯神扫荡",
    task: "daily-task-genie-sweep",
    defaultChecked: true
  };
  const _0x395ff0 = {
    id: "daily-free-key",
    label: "领取免费钥匙",
    task: "daily-task-free-key",
    defaultChecked: true
  };
  const _0x2a98a0 = {
    id: "daily-box",
    label: "开启10木箱",
    task: "daily-task-box",
    defaultChecked: false
  };
  const _0x352917 = {
    id: "daily-recruit",
    label: "执行2次招募",
    task: "daily-task-recruit",
    defaultChecked: false
  };
  const _0x2e6370 = {
    id: "daily-arena",
    label: "进行3次竞技场战斗",
    task: "daily-task-arena",
    defaultChecked: false
  };
  const _0x54ec04 = {
    id: "daily-buy-bronze-box",
    label: "购买青铜宝箱",
    task: "daily-task-buy-bronze-box",
    defaultChecked: false
  };
  const _0xe754e4 = [_0x16fff5, _0x3e4de1, _0x4e70ca, _0x5843be, _0x52a826, _0x62a879, _0x1060e1, _0x3c1c5d, _0x41138e, _0x395ff0, _0x2a98a0, _0x352917, _0x2e6370, _0x54ec04];
  function _0xc882fd() {
    {
      try {
        {
          const _0x5f00d1 = localStorage.getItem("dailyTaskStates");
          return _0x5f00d1 ? JSON.parse(_0x5f00d1) : {};
        }
      } catch (_0xdebab1) {
        {
          console.error("读取保存的任务状态失败:", _0xdebab1);
          return {};
        }
      }
    }
  }
  function _0x1044c1(_0x2c5f16) {
    {
      try {
        localStorage.setItem("dailyTaskStates", JSON.stringify(_0x2c5f16));
      } catch (_0x53466d) {
        {
          console.error("保存任务状态失败:", _0x53466d);
        }
      }
    }
  }
  const _0x446508 = _0xc882fd();
  const _0x2b6210 = _0x531aad.querySelector(".daily-task-list");
  _0xe754e4.forEach(_0x21a599 => {
    {
      const _0x3a8105 = _0x446508[_0x21a599.task] !== undefined ? _0x446508[_0x21a599.task] : _0x21a599.defaultChecked;
      const _0x5afa65 = document.createElement("div");
      _0x5afa65.className = "daily-task-item";
      _0x5afa65.innerHTML = "\n            <div class=\"daily-task-info\">\n                <input type=\"checkbox\" id=\"" + _0x21a599.id + "\" data-task-name=\"" + _0x21a599.task + "\" " + (_0x3a8105 ? "checked" : "") + ">\n                <label for=\"" + _0x21a599.id + "\">" + _0x21a599.label + "</label>\n            </div>\n            <button class=\"task-btn\" data-task=\"" + _0x21a599.task + "\">独立执行</button>\n        ";
      _0x2b6210.appendChild(_0x5afa65);
      const _0x1427e8 = _0x5afa65.querySelector("input[type=\"checkbox\"]");
      _0x1427e8.addEventListener("change", () => {
        _0x446508[_0x21a599.task] = _0x1427e8.checked;
        _0x1044c1(_0x446508);
      });
    }
  });
  _0x2b6210.querySelectorAll("input[type=\"checkbox\"]").forEach(_0x16d6d7 => {
    {
      _0x16d6d7.addEventListener("change", () => {
        {
          const _0x1a1543 = _0x16d6d7.dataset.taskName;
          if (_0x1a1543) {
            {
              _0x446508[_0x1a1543] = _0x16d6d7.checked;
              _0x1044c1(_0x446508);
            }
          }
        }
      });
    }
  });
  const _0x1f8f2c = {
    fullCarData: [],
    timeInterval: null,
    sendCount: 0,
    isBatchRefreshing: false,
    legionMembersMap: {},
    helperSelectionByCarId: {},
    availableConditions: ["品质", "金砖", "招募令", "彩玉", "白玉", "万能碎片", "刷新券"]
  };
  const _0x5a70e2 = {
    statusEl: null,
    dataTable: null,
    dataBody: null
  };
  const _0x33f5d5 = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x473971 = {
    "1": "color:var(--text-secondary)",
    "2": "color:#3182ce",
    "3": "color:#9f7aea",
    "4": "color:#dd6b20",
    "5": "color:#e53e3e",
    "6": "color:#d69e2e"
  };
  const _0x201546 = {
    state: _0x1f8f2c,
    dom: _0x5a70e2,
    init() {
      {
        const _0x466f68 = document.getElementById("car-module");
        this.dom = {
          statusEl: _0x466f68.querySelector(".status"),
          dataTable: _0x466f68.querySelector(".car-data-table"),
          dataBody: _0x466f68.querySelector("tbody")
        };
        _0x466f68.addEventListener("click", _0x261290 => {
          {
            const _0x3da570 = _0x261290.target.closest(".task-btn, .car-action-btn, .car-batch-btn");
            if (!_0x3da570) {
              return;
            }
            const {
              task: _0x1a566a,
              action: _0x464689,
              id: _0x593ce2
            } = _0x3da570.dataset;
            if (_0x1a566a === "car-query") {
              this.handleTask(_0x3da570);
            } else {
              if (_0x464689 === "toggleRefreshFilter") {
                {
                  const _0x39dc8f = document.querySelector(".refresh-filter-panel");
                  if (_0x39dc8f) {
                    _0x39dc8f.style.display = _0x39dc8f.style.display === "none" ? "block" : "none";
                  }
                }
              } else {
                if (_0x464689 === "sendAll") {
                  this.sendAllCars();
                } else {
                  if (_0x464689 === "claimAll") {
                    this.claimAllCars();
                  } else {
                    if (_0x464689 === "send") {
                      this.sendCar(_0x593ce2);
                    } else {
                      if (_0x464689 === "refresh") {
                        this.refreshCar(_0x593ce2);
                      } else {
                        if (_0x464689 === "claim" && !_0x3da570.classList.contains("is-disabled")) {
                          this.claimCar(_0x593ce2);
                        } else {
                          if (_0x464689 === "claim") {
                            _0x258356.showtip("赛车尚未到站，无法收取", "error");
                          } else {
                            if (_0x464689 === "startBatchRefresh" && !_0x3da570.classList.contains("is-disabled")) {
                              this.startBatchRefresh();
                            } else {
                              if (_0x464689 === "setHelper") {
                                {
                                  const _0x5eb6ea = this.state.fullCarData.find(_0x33a4be => String(_0x33a4be.carId) === String(_0x593ce2));
                                  if (_0x5eb6ea) {
                                    this.openHelperDialog(_0x5eb6ea);
                                  }
                                }
                              } else {
                                if (_0x464689 === "openMembers") {
                                  this.openMembersDialog();
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });
        window.addEventListener("beforeunload", () => this.stopTimeRefresh());
      }
    },
    async handleTask(_0x21cf30) {
      {
        const _0x5c9898 = _0x21cf30.textContent;
        _0x21cf30.disabled = true;
        _0x21cf30.textContent = "查询中...";
        await this.queryClubCars();
        _0x21cf30.disabled = false;
        _0x21cf30.textContent = _0x5c9898;
      }
    },
    isCarEventActive: () => {
      {
        const _0x35ea76 = new Date();
        return _0x35ea76.getDay() >= 1 && _0x35ea76.getDay() <= 3 && _0x35ea76.getHours() >= 6 && _0x35ea76.getHours() < 20;
      }
    },
    parseRewards(_0x5e24fa) {
      {
        if (!_0x5e24fa?.["length"]) {
          return [];
        }
        const _0x3d6f51 = {
          "2_0": "金砖",
          "0_0": "金砖",
          "3_1001": "招募令",
          "3_1023": "彩玉",
          "3_1022": "白玉",
          "3_3201": "万能碎片",
          "3_35002": "刷新券"
        };
        const _0x5a3c7b = {};
        _0x5e24fa.forEach(_0x1b57d0 => {
          {
            const _0x390212 = _0x3d6f51[_0x1b57d0.type + "_" + _0x1b57d0.itemId];
            if (_0x390212) {
              _0x5a3c7b[_0x390212] = (_0x5a3c7b[_0x390212] || 0) + _0x1b57d0.value;
            }
          }
        });
        return Object.entries(_0x5a3c7b).map(([_0x2b2986, _0x4ea254]) => _0x2b2986 + ":" + _0x4ea254);
      }
    },
    getCarQualityText: _0x4068fc => _0x33f5d5[_0x4068fc] || "未知",
    getCarQualityStyle: _0x26997c => (_0x473971[_0x26997c] || "") + ";font-weight:bold;",
    getCarStatus(_0x5662b2) {
      {
        const _0x106bb2 = {
          status: "待发车",
          statusClass: "status-pending"
        };
        if (!_0x5662b2.sendAt) {
          return _0x106bb2;
        }
        const _0x59b03d = {
          "1": 2.5,
          "2": 2.5,
          "3": 3,
          "4": 3,
          "5": 4,
          "6": 4
        };
        const _0x392334 = (_0x59b03d[_0x5662b2.quality] || 0) * 3600000;
        const _0x314e51 = {
          status: "未知状态",
          statusClass: "status-pending"
        };
        if (!_0x392334) {
          return _0x314e51;
        }
        const _0x2b3575 = _0x5662b2.sendAt * 1000 + _0x392334 - Date.now();
        if (_0x2b3575 <= 0) {
          return {
            status: "已完成",
            statusClass: "status-completed"
          };
        }
        const _0x5aac1d = _0x5d68fa => _0x5d68fa.toString().padStart(2, "0");
        return {
          status: "剩余 " + _0x5aac1d(Math.floor(_0x2b3575 / 3600000)) + ":" + _0x5aac1d(Math.floor(_0x2b3575 % 3600000 / 60000)) + ":" + _0x5aac1d(Math.floor(_0x2b3575 % 60000 / 1000)),
          statusClass: "status-running"
        };
      }
    },
    startTimeRefresh() {
      {
        this.stopTimeRefresh();
        this.state.timeInterval = setInterval(() => this.renderCarData(), 1000);
      }
    },
    stopTimeRefresh() {
      {
        if (this.state.timeInterval) {
          clearInterval(this.state.timeInterval);
        }
      }
    },
    renderCarData() {
      {
        const _0x2facac = this.state.fullCarData.length > 0;
        this.dom.dataTable.style.display = _0x2facac ? "table" : "none";
        if (!_0x2facac) {
          {
            this.stopTimeRefresh();
            return;
          }
        }
        this.dom.dataBody.innerHTML = "";
        const _0x3fd082 = [...this.state.fullCarData].sort((_0x2f8119, _0x46724c) => _0x2f8119.slot - _0x46724c.slot);
        const _0x227121 = {
          "金砖": 2000,
          "万能碎片": 10,
          "招募令": 10,
          "白玉": 2000,
          "彩玉": 2
        };
        const _0x44ab34 = _0x3d6162 => {
          {
            const [_0x164d8b, _0xb11da] = _0x3d6162.split(":");
            return _0xb11da && parseInt(_0xb11da) >= (_0x227121[_0x164d8b] || Infinity);
          }
        };
        _0x3fd082.forEach(_0x30b02f => {
          {
            const _0x5e713a = this.getCarStatus(_0x30b02f);
            let _0x3da6ad = "<div class=\"car-status " + _0x5e713a.statusClass + "\">" + _0x5e713a.status + "</div>";
            if (!_0x30b02f.sendAt) {
              {
                const _0x1dc65a = 5 - _0x30b02f.refreshCount;
                _0x3da6ad += "<div class=\"pity-counter " + (_0x1dc65a <= 1 ? "mythic-guaranteed" : "") + "\">" + (_0x1dc65a <= 1 ? "本次刷新必出神话" : "再刷" + _0x1dc65a + "次出神话") + "</div>";
              }
            }
            const _0x4cec10 = !this.isCarEventActive() || this.state.sendCount >= 4;
            const _0x54d008 = _0x5e713a.statusClass === "status-completed";
            let _0x310323 = "";
            if (!_0x30b02f.sendAt) {
              {
                _0x310323 = "<button class=\"car-action-btn\" data-action=\"refresh\" data-id=\"" + _0x30b02f.carId + "\">刷新</button>";
                if (Number(_0x30b02f.quality || 0) >= 5) {
                  {
                    const _0xad8fb = (this.state.helperSelectionByCarId || {})[String(_0x30b02f.carId)];
                    const _0xc693e8 = _0xad8fb ? this.getMemberName(_0xad8fb) : "";
                    _0x310323 += "<button class=\"car-action-btn helper\" data-action=\"setHelper\" data-id=\"" + _0x30b02f.carId + "\">" + (_0xc693e8 ? "护卫(" + _0xc693e8 + ")" : "护卫") + "</button>";
                  }
                }
                _0x310323 += "<button class=\"car-action-btn send " + (_0x4cec10 ? "is-disabled" : "") + "\" data-action=\"send\" data-id=\"" + _0x30b02f.carId + "\">发车</button>";
              }
            } else {
              {
                _0x310323 = "<button class=\"car-action-btn claim " + (_0x54d008 ? "" : "is-disabled") + "\" data-action=\"claim\" data-id=\"" + _0x30b02f.carId + "\">收车</button>";
              }
            }
            const _0x59bad2 = this.dom.dataBody.insertRow();
            const _0x4538f9 = _0x30b02f.rewards.map(_0x24c6ef => "<span class=\"" + (_0x44ab34(_0x24c6ef) ? "highlight-reward" : "") + "\">" + _0x24c6ef + "</span>").join("") || "暂无";
            _0x59bad2.innerHTML = "<td>" + (_0x30b02f.slot + 1) + "</td><td style=\"" + this.getCarQualityStyle(_0x30b02f.quality) + "\">" + this.getCarQualityText(_0x30b02f.quality) + "</td><td class=\"car-rewards\" title=\"" + _0x30b02f.rewards.join("，") + "\">" + _0x4538f9 + "</td><td>" + _0x3da6ad + "</td><td>" + _0x310323 + "</td>";
          }
        });
        this.renderBatchActionsAndFilterPanel();
        this.startTimeRefresh();
      }
    },
    renderBatchActionsAndFilterPanel() {
      {
        let _0x462fab = this.dom.dataTable.parentElement;
        let _0x1e34e0 = _0x462fab.querySelector(".car-batch-actions");
        !_0x1e34e0 && (_0x1e34e0 = document.createElement("div"), _0x1e34e0.className = "car-batch-actions", _0x1e34e0.style.cssText = "margin-top: 10px; display: flex; gap: 10px;", _0x462fab.appendChild(_0x1e34e0));
        const _0x25d700 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x1b26a3 => !_0x1b26a3.sendAt);
        const _0x4f8f1f = this.state.fullCarData.some(_0x50e1d8 => this.getCarStatus(_0x50e1d8).statusClass === "status-completed");
        _0x1e34e0.innerHTML = "\n            <button class=\"task-btn " + (!_0x25d700 ? "is-disabled" : "") + "\" data-action=\"sendAll\">一键发车</button>\n            <button class=\"task-btn " + (!_0x4f8f1f ? "is-disabled" : "") + "\" data-action=\"claimAll\">一键收车</button>\n            <button class=\"task-btn\" data-action=\"openMembers\">查看成员</button>\n            <button class=\"task-btn\" data-action=\"toggleRefreshFilter\">刷新条件</button>\n        ";
        let _0x3d1b5b = _0x462fab.querySelector(".refresh-filter-panel");
        if (!_0x3d1b5b) {
          {
            _0x3d1b5b = document.createElement("div");
            _0x3d1b5b.className = "refresh-filter-panel";
            _0x3d1b5b.style.cssText = "display: none; margin-top: 10px; padding: 10px; border: 1px solid var(--item-border); border-radius: 7px; background: var(--item-bg);";
            _0x462fab.appendChild(_0x3d1b5b);
            this.buildFilterPanelUI(_0x3d1b5b);
            this.setupFilterPanelEvents(_0x3d1b5b);
            this.loadUserSettings();
          }
        }
        this.updateRefreshButtonState();
      }
    },
    buildFilterPanelUI(_0x2a777a) {
      _0x2a777a.innerHTML = "\n            <style>\n                .filter-group { border: 1px solid var(--item-border); border-radius: 5px; padding: 8px; margin-bottom: 10px; }\n                .group-title { font-size: 13px; font-weight: bold; color: var(--text-primary); display: block; margin-bottom: 8px; }\n                .filter-row, .placeholder-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }\n                .filter-row-label { font-size: 12px; color: var(--text-secondary); min-width: 60px; text-align: right; }\n                .filter-row-value, .placeholder-select { width: 90px; padding: 3px; font-size: 12px; box-sizing: border-box; }\n                .count-selector { display: flex; align-items: center; gap: 0; }\n                .count-display { padding: 0 10px; font-size: 12px; min-width: 40px; text-align: center; }\n                .add-condition-btn { font-size: 12px; padding: 2px 8px; margin-top: 5px; }\n                .remove-condition-btn { font-size: 12px; padding: 0; height: 22px; width: 22px; cursor: pointer; border-radius: 50%; }\n                /* 调整赛车模块按钮字体大小 */\n                #car-module .car-batch-actions button.task-btn, #car-module .refresh-filter-panel button.task-btn { \n                    font-size: 11px !important; \n                    line-height: 1.2;\n                }\n            </style>\n\n            <div class=\"filter-group\" id=\"and-conditions-group\">\n                <strong class=\"group-title\">必须同时满足 (AND)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"and\">[+] 添加必须条件</button>\n            </div>\n\n            <div class=\"filter-group\" id=\"or-conditions-group\">\n                <strong class=\"group-title\">并满足任一条件 (OR)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"or\">[+] 添加任一条件</button>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 10px; margin-top: 15px;\">\n                <span style=\"font-size: 12px; font-weight: bold; min-width: 80px;\">单车最大刷新:</span>\n                <div class=\"count-selector\">\n                    <button class=\"task-btn\" data-action=\"decrement-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">-</button>\n                    <span id=\"max-refresh-count\" class=\"count-display\">5</span>\n                    <button class=\"task-btn\" data-action=\"increment-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">+</button>\n                </div>\n            </div>\n            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px;\">\n                <button class=\"task-btn is-disabled\" id=\"start-batch-refresh\" data-action=\"startBatchRefresh\">一键刷新</button>\n                <button class=\"task-btn\" id=\"send-all-cars-panel\" data-action=\"sendAll\">一键发车</button>\n            </div>\n        ";
    },
    setupFilterPanelEvents(_0x2fa52d) {
      {
        const _0xf60422 = (_0x3ca029, _0x1f3403) => {
          {
            let _0x3f51c7;
            return (..._0x5c7cb5) => {
              {
                clearTimeout(_0x3f51c7);
                _0x3f51c7 = setTimeout(() => _0x3ca029.apply(this, _0x5c7cb5), _0x1f3403);
              }
            };
          }
        };
        const _0x2fc200 = _0xf60422(() => this.saveUserSettings(), 500);
        document.addEventListener("click", _0xac97ca => {
          {
            const _0x562450 = _0xac97ca.target;
            const _0x79df1b = _0x562450.dataset.action;
            if (!_0x2fa52d.contains(_0x562450)) {
              return;
            }
            if (_0x79df1b === "increment-refresh-count" || _0x79df1b === "decrement-refresh-count") {
              {
                const _0x433a86 = document.getElementById("max-refresh-count");
                let _0x3f1358 = parseInt(_0x433a86.textContent);
                if (_0x79df1b === "increment-refresh-count" && _0x3f1358 < 100) {
                  _0x3f1358++;
                }
                if (_0x79df1b === "decrement-refresh-count" && _0x3f1358 > 1) {
                  _0x3f1358--;
                }
                _0x433a86.textContent = _0x3f1358;
                this.saveUserSettings();
              }
            } else {
              if (_0x562450.classList.contains("add-condition-btn")) {
                this.addConditionPlaceholder(_0x562450.dataset.group);
              } else {
                _0x562450.classList.contains("remove-condition-btn") && (_0x562450.closest(".filter-row, .placeholder-row").remove(), this.saveUserSettings(), this.updateRefreshButtonState());
              }
            }
          }
        });
        document.addEventListener("change", _0x19a5ce => {
          {
            const _0x119f20 = _0x19a5ce.target;
            if (!_0x2fa52d.contains(_0x119f20)) {
              return;
            }
            _0x119f20.classList.contains("placeholder-select") ? this.transformPlaceholder(_0x119f20) : (this.saveUserSettings(), this.updateRefreshButtonState());
          }
        });
        document.addEventListener("input", _0x44c1bf => {
          {
            _0x2fa52d.contains(_0x44c1bf.target) && _0x44c1bf.target.type === "number" && _0x2fc200();
          }
        });
      }
    },
    addConditionPlaceholder(_0x1edcc4) {
      {
        const _0x867655 = document.querySelector("#" + _0x1edcc4 + "-conditions-group .group-content");
        const _0x3cdcf1 = new Set([...document.querySelectorAll(".filter-row")].map(_0x2c1b70 => _0x2c1b70.dataset.type));
        const _0x66330f = this.state.availableConditions.filter(_0x1727df => !_0x3cdcf1.has(_0x1727df));
        if (_0x66330f.length === 0) {
          {
            _0x258356.showtip("所有条件都已添加", "info");
            return;
          }
        }
        const _0x3dc5a3 = document.createElement("div");
        _0x3dc5a3.className = "placeholder-row";
        const _0x20284b = _0x66330f.map(_0x31eb13 => "<option value=\"" + _0x31eb13 + "\">" + _0x31eb13 + "</option>").join("");
        _0x3dc5a3.innerHTML = "\n            <input type=\"checkbox\" checked disabled>\n            <select class=\"placeholder-select\"><option value=\"\">--选择条件--</option>" + _0x20284b + "</select>\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x867655.appendChild(_0x3dc5a3);
      }
    },
    transformPlaceholder(_0x10725a) {
      {
        const _0x2fb715 = _0x10725a.closest(".placeholder-row");
        const _0x484e41 = _0x10725a.value;
        if (!_0x484e41) {
          return;
        }
        const _0x14ea5b = document.createElement("div");
        _0x14ea5b.className = "filter-row";
        _0x14ea5b.dataset.type = _0x484e41;
        let _0x56d6c9 = "";
        if (_0x484e41 === "品质") {
          {
            _0x56d6c9 = "<select class=\"filter-row-value\">\n                           <option value=\"6\">传奇</option>\n                           <option value=\"5\" selected>神话</option>\n                           <option value=\"4\">传说</option>\n                           <option value=\"3\">史诗</option>\n                           <option value=\"2\">稀有</option>\n                           <option value=\"1\">普通</option>\n                       </select>";
          }
        } else {
          {
            const _0x3b9b4e = {
              "金砖": 2000,
              "招募令": 10,
              "彩玉": 5,
              "白玉": 2000,
              "万能碎片": 10,
              "刷新券": 4
            };
            const _0x2f3858 = _0x3b9b4e[_0x484e41] || 1;
            _0x56d6c9 = "<input type=\"number\" class=\"filter-row-value\" value=\"" + _0x2f3858 + "\" min=\"1\">";
          }
        }
        _0x14ea5b.innerHTML = "\n            <input type=\"checkbox\" class=\"condition-enabled\" checked>\n            <label class=\"filter-row-label\">" + _0x484e41 + " ≥</label>\n            " + _0x56d6c9 + "\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x2fb715.replaceWith(_0x14ea5b);
        this.saveUserSettings();
        this.updateRefreshButtonState();
      }
    },
    saveUserSettings() {
      {
        const _0x27fc6c = {
          and: [],
          or: [],
          maxRefresh: document.getElementById("max-refresh-count").textContent
        };
        document.querySelectorAll("#and-conditions-group .filter-row").forEach(_0x1429cc => {
          _0x27fc6c.and.push({
            type: _0x1429cc.dataset.type,
            enabled: _0x1429cc.querySelector(".condition-enabled").checked,
            value: _0x1429cc.querySelector(".filter-row-value").value
          });
        });
        document.querySelectorAll("#or-conditions-group .filter-row").forEach(_0x2e66f5 => {
          _0x27fc6c.or.push({
            type: _0x2e66f5.dataset.type,
            enabled: _0x2e66f5.querySelector(".condition-enabled").checked,
            value: _0x2e66f5.querySelector(".filter-row-value").value
          });
        });
        localStorage.setItem("carModuleSettings_v3", JSON.stringify(_0x27fc6c));
      }
    },
    loadUserSettings() {
      {
        const _0x4baf41 = localStorage.getItem("carModuleSettings_v3");
        if (!_0x4baf41) {
          return;
        }
        const _0x3ce31d = JSON.parse(_0x4baf41);
        const _0x57d5fa = _0x757b65 => {
          {
            const _0x36c1a9 = document.createElement("div");
            _0x36c1a9.className = "filter-row";
            _0x36c1a9.dataset.type = _0x757b65.type;
            let _0xac9f7a = "";
            if (_0x757b65.type === "品质") {
              _0xac9f7a = "<select class=\"filter-row-value\"><option value=\"6\">传奇</option><option value=\"5\">神话</option><option value=\"4\">传说</option><option value=\"3\">史诗</option><option value=\"2\">稀有</option></select>";
            } else {
              {
                _0xac9f7a = "<input type=\"number\" class=\"filter-row-value\" min=\"1\">";
              }
            }
            _0x36c1a9.innerHTML = "\n                <input type=\"checkbox\" class=\"condition-enabled\" " + (_0x757b65.enabled ? "checked" : "") + ">\n                <label class=\"filter-row-label\">" + _0x757b65.type + " ≥</label>\n                " + _0xac9f7a + "\n                <button class=\"task-btn remove-condition-btn\">-</button>\n            ";
            _0x36c1a9.querySelector(".filter-row-value").value = _0x757b65.value;
            return _0x36c1a9;
          }
        };
        const _0x4b6842 = document.querySelector("#and-conditions-group .group-content");
        _0x4b6842.innerHTML = "";
        _0x3ce31d.and.forEach(_0x5b3cbf => _0x4b6842.appendChild(_0x57d5fa(_0x5b3cbf)));
        const _0x639867 = document.querySelector("#or-conditions-group .group-content");
        _0x639867.innerHTML = "";
        _0x3ce31d.or.forEach(_0x58bac2 => _0x639867.appendChild(_0x57d5fa(_0x58bac2)));
        document.getElementById("max-refresh-count").textContent = _0x3ce31d.maxRefresh;
        this.updateRefreshButtonState();
      }
    },
    updateRefreshButtonState() {
      {
        const _0x2cf3ce = document.querySelector(".refresh-filter-panel");
        if (!_0x2cf3ce) {
          return;
        }
        const _0x189455 = _0x2cf3ce.querySelector("#start-batch-refresh");
        const _0x174328 = _0x2cf3ce.querySelector(".condition-enabled:checked");
        if (_0x174328) {
          {
            _0x189455.classList.remove("is-disabled");
          }
        } else {
          {
            _0x189455.classList.add("is-disabled");
          }
        }
        const _0x525c4a = _0x2cf3ce.querySelector("#send-all-cars-panel");
        const _0x43253a = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x4581e9 => !_0x4581e9.sendAt);
        _0x43253a ? _0x525c4a.classList.remove("is-disabled") : _0x525c4a.classList.add("is-disabled");
      }
    },
    async startBatchRefresh() {
      {
        if (this.state.isBatchRefreshing) {
          {
            _0x258356.showtip("一键刷新任务已在进行中", "warning");
            return;
          }
        }
        const _0x2dd3e6 = document.getElementById("start-batch-refresh");
        const _0x103590 = _0x2dd3e6 ? _0x2dd3e6.textContent : "启动...";
        try {
          {
            this.state.isBatchRefreshing = true;
            if (_0x2dd3e6) {
              {
                _0x2dd3e6.disabled = true;
                _0x2dd3e6.textContent = "运行中...";
              }
            }
            const _0xdf63a2 = parseInt(document.getElementById("max-refresh-count")?.["textContent"] || 5);
            const {
              andConditions: _0x28dba0,
              orConditions: _0x39e689
            } = this.collectConditionsFromUI();
            if (_0x28dba0.length === 0 && _0x39e689.length === 0) {
              {
                _0x258356.showtip("请至少设置一个启用的刷新条件", "error");
                return;
              }
            }
            let _0xa8e032 = this.state.fullCarData.filter(_0x363494 => !_0x363494.sendAt).map(_0x5db47a => ({
              car: _0x5db47a,
              refreshCount: 0,
              isSatisfied: this.checkCarFilterConditions(_0x5db47a, _0x28dba0, _0x39e689)
            }));
            const _0x1858f0 = _0xa8e032.filter(_0x427439 => _0x427439.isSatisfied).length;
            _0x1858f0 > 0 && _0x258356.showtip("已有 " + _0x1858f0 + " 辆车满足条件，将跳过。", "info");
            let _0x55a36e = _0xa8e032.filter(_0x26b8a7 => !_0x26b8a7.isSatisfied);
            if (_0x55a36e.length === 0) {
              {
                _0x258356.showtip("所有待发车辆都已满足条件，无需刷新！", "success");
                return;
              }
            }
            _0x258356.showtip("任务开始，将为 " + _0x55a36e.length + " 辆车进行刷新...", "info");
            let _0x59ad58 = 0;
            for (const _0x24dc79 of _0x55a36e) {
              {
                if (!this.state.isBatchRefreshing) {
                  {
                    _0x258356.showtip("任务已手动停止。", "warning");
                    break;
                  }
                }
                while (_0x24dc79.refreshCount < _0xdf63a2 && !_0x24dc79.isSatisfied) {
                  {
                    this.dom.statusEl.textContent = "🔄 刷新中... 车位 " + (_0x24dc79.car.slot + 1) + " (第 " + (_0x24dc79.refreshCount + 1) + "/" + _0xdf63a2 + " 次)";
                    const _0xa5745c = await this.performCarAction("refresh", _0x24dc79.car.carId, "刷新");
                    if (!_0xa5745c) {
                      {
                        _0x258356.showtip("车位 " + (_0x24dc79.car.slot + 1) + " 刷新失败，可能金砖不足，将跳过此车。", "warning");
                        break;
                      }
                    }
                    _0x24dc79.refreshCount++;
                    _0x59ad58++;
                    await this.queryClubCars();
                    const _0x4bff28 = this.state.fullCarData.find(_0xef6eba => _0xef6eba.carId === _0x24dc79.car.carId);
                    if (_0x4bff28) {
                      {
                        _0x24dc79.car = _0x4bff28;
                        if (this.checkCarFilterConditions(_0x4bff28, _0x28dba0, _0x39e689)) {
                          {
                            _0x24dc79.isSatisfied = true;
                            _0x258356.showtip("🎉 车位 " + (_0x4bff28.slot + 1) + " 在刷新 " + _0x24dc79.refreshCount + " 次后满足条件！", "success");
                          }
                        }
                      }
                    } else {
                      {
                        _0x258356.showtip("车位 " + (_0x24dc79.car.slot + 1) + " 数据刷新后丢失，跳过此车。", "error");
                        break;
                      }
                    }
                    await new Promise(_0x3e7fbb => setTimeout(_0x3e7fbb, 400));
                  }
                }
                if (!_0x24dc79.isSatisfied && _0x24dc79.refreshCount >= _0xdf63a2) {
                  {
                    _0x258356.showtip("车位 " + (_0x24dc79.car.slot + 1) + " 已达刷新上限 (" + _0xdf63a2 + "次)，仍未满足条件。", "info");
                  }
                }
              }
            }
            const _0x4fb3f5 = _0xa8e032.filter(_0x2e3088 => _0x2e3088.isSatisfied).length;
            _0x258356.showtip("刷新任务结束。共 " + _0x4fb3f5 + "/" + _0xa8e032.length + " 辆车满足条件，总计刷新 " + _0x59ad58 + " 次。", "success");
            this.dom.statusEl.textContent = "✅ 刷新完成: " + _0x4fb3f5 + "/" + _0xa8e032.length + " 辆满足";
          }
        } catch (_0x33f4c0) {
          console.error("一键刷新过程中发生错误:", _0x33f4c0);
          _0x258356.showtip("刷新过程出错，详情请查看控制台。", "error");
          this.dom.statusEl.textContent = "❌ 刷新出错";
        } finally {
          {
            this.state.isBatchRefreshing = false;
            if (_0x2dd3e6) {
              {
                _0x2dd3e6.disabled = false;
                _0x2dd3e6.textContent = _0x103590;
              }
            }
            setTimeout(() => this.queryClubCars(), 500);
          }
        }
      }
    },
    collectConditionsFromUI() {
      {
        const _0x1b0e30 = [];
        const _0x1ffacf = [];
        const _0x66537b = (_0x4cf858, _0xc44d00) => {
          document.querySelectorAll("#" + _0x4cf858 + " .filter-row").forEach(_0x5a233e => {
            {
              if (_0x5a233e.querySelector(".condition-enabled").checked) {
                {
                  const _0x52f449 = _0x5a233e.dataset.type;
                  const _0x1ccd9e = _0x5a233e.querySelector(".filter-row-value").value;
                  if (_0x52f449 === "品质") {
                    {
                      _0xc44d00.push({
                        type: "quality",
                        value: parseInt(_0x1ccd9e)
                      });
                    }
                  } else {
                    _0xc44d00.push({
                      type: "reward",
                      item: _0x52f449,
                      count: parseInt(_0x1ccd9e) || 1
                    });
                  }
                }
              }
            }
          });
        };
        _0x66537b("and-conditions-group", _0x1b0e30);
        _0x66537b("or-conditions-group", _0x1ffacf);
        const _0x5a7b62 = {
          andConditions: _0x1b0e30,
          orConditions: _0x1ffacf
        };
        return _0x5a7b62;
      }
    },
    checkCarFilterConditions(_0x4ab587, _0x3701d0, _0x112328) {
      {
        if (_0x3701d0.length === 0 && _0x112328.length === 0) {
          return false;
        }
        const _0x1e00cf = _0x3b8681 => {
          {
            if (_0x3b8681.type === "quality") {
              {
                return _0x4ab587.quality >= _0x3b8681.value;
              }
            } else {
              if (_0x3b8681.type === "reward") {
                {
                  return this.checkSingleRewardCondition(_0x4ab587.rewards, _0x3b8681);
                }
              }
            }
            return false;
          }
        };
        const _0xe78ee6 = _0x3701d0.every(_0x1e00cf);
        if (!_0xe78ee6) {
          return false;
        }
        if (_0x112328.length === 0) {
          return true;
        }
        const _0x4a74e6 = _0x112328.some(_0x1e00cf);
        return _0x4a74e6;
      }
    },
    checkSingleRewardCondition(_0x1ea894, _0x280bd2) {
      {
        const {
          item: _0x904bb4,
          count: _0x294904
        } = _0x280bd2;
        for (const _0x3241fa of _0x1ea894) {
          {
            const [_0x2ab491, _0x2b944b] = _0x3241fa.split(":");
            if (_0x2ab491 === _0x904bb4) {
              {
                if (parseInt(_0x2b944b) >= _0x294904) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      }
    },
    async queryClubCars() {
      {
        this.dom.statusEl.textContent = "🔍 查询中...";
        try {
          {
            const _0x6c89cf = await _0x258356.sendCommand("car_getrolecar");
            if (_0x6c89cf?.["code"] !== 0) {
              throw new Error(_0x6c89cf?.["msg"] || "Code: " + _0x6c89cf?.["code"]);
            }
            const _0x3fc8bf = (_0x4c8d10, _0x43a417) => _0x43a417.split(".").reduce((_0x289b83, _0x331cc4) => _0x289b83?.[_0x331cc4], _0x4c8d10);
            const _0x595aee = _0x3fc8bf(_0x6c89cf, "_rawData.body.roleCar") || _0x3fc8bf(_0x6c89cf, "data.body.roleCar") || _0x3fc8bf(_0x6c89cf, "_rawData.roleCar") || _0x3fc8bf(_0x6c89cf, "data.roleCar");
            const _0x48b633 = _0x595aee?.["carDataMap"] || {};
            let _0xdfee00 = _0x595aee?.["sendCnt"] || 0;
            const _0x2e531f = new Date().getDay() >= 1 && new Date().getDay() <= 3;
            if (_0x2e531f && _0x595aee.sendCntResetTime) {
              {
                const _0x5598f1 = new Date(_0x595aee.sendCntResetTime * 1000);
                const _0x14009d = new Date();
                if (_0x5598f1.getFullYear() !== _0x14009d.getFullYear() || _0x5598f1.getMonth() !== _0x14009d.getMonth() || _0x5598f1.getDate() !== _0x14009d.getDate()) {
                  {
                    _0xdfee00 = 0;
                  }
                }
              }
            }
            this.state.sendCount = this.isCarEventActive() ? _0xdfee00 : 0;
            this.state.fullCarData = Object.entries(_0x48b633).map(([_0x58f6fb, _0x2091af]) => ({
              id: _0x58f6fb,
              ..._0x2091af,
              carId: _0x58f6fb,
              quality: _0x2091af.color,
              rewards: this.parseRewards(_0x2091af.rewards)
            }));
            this.renderCarData();
            const _0x3ba069 = "今日已发车: " + this.state.sendCount + "/4" + (!this.isCarEventActive() ? " (非活动时间)" : "");
            this.dom.statusEl.textContent = "✅ " + _0x3ba069;
          }
        } catch (_0x1adb0b) {
          {
            _0x258356.showtip("查询失败: " + _0x1adb0b.message, "error");
            this.dom.statusEl.textContent = "❌ 查询出错";
          }
        }
      }
    },
    async sendCar(_0x4f250d) {
      {
        if (!this.isCarEventActive()) {
          return _0x258356.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x258356.showtip("今日发车次数已用完", "error");
        }
        if (await this.performCarAction("send", _0x4f250d)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async refreshCar(_0x3ba537) {
      {
        if (await this.performCarAction("refresh", _0x3ba537)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async claimCar(_0x532157) {
      {
        (await this.performCarAction("claim", _0x532157)) && setTimeout(() => this.queryClubCars(), 300);
      }
    },
    async sendAllCars() {
      {
        if (!this.isCarEventActive()) {
          return _0x258356.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x258356.showtip("今日发车次数已用完", "error");
        }
        const _0x5271af = this.state.fullCarData.filter(_0x54e9c9 => !_0x54e9c9.sendAt);
        if (_0x5271af.length === 0) {
          return _0x258356.showtip("没有可发车的赛车", "info");
        }
        const _0x4a718c = Math.min(_0x5271af.length, 4 - this.state.sendCount);
        if (_0x4a718c === 0) {
          return _0x258356.showtip("今日发车次数已用完", "error");
        }
        this.dom.statusEl.textContent = "🚀 批量发送中...";
        let _0x48d4e9 = 0;
        for (let _0x364bc5 = 0; _0x364bc5 < _0x4a718c; _0x364bc5++) {
          {
            if (await this.performCarAction("send", _0x5271af[_0x364bc5].carId, true)) {
              {
                _0x48d4e9++;
              }
            }
            if (_0x364bc5 < _0x4a718c - 1) {
              await new Promise(_0x3d234c => setTimeout(_0x3d234c, 300));
            }
          }
        }
        _0x258356.showtip("成功发送 " + _0x48d4e9 + " 辆赛车", _0x48d4e9 > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async claimAllCars() {
      {
        const _0x3e878f = this.state.fullCarData.filter(_0x1deea2 => this.getCarStatus(_0x1deea2).statusClass === "status-completed");
        if (_0x3e878f.length === 0) {
          return _0x258356.showtip("没有可收取的赛车", "info");
        }
        this.dom.statusEl.textContent = "🚀 批量收取中...";
        let _0x45643c = 0;
        for (let _0x3402d4 = 0; _0x3402d4 < _0x3e878f.length; _0x3402d4++) {
          {
            if (await this.performCarAction("claim", _0x3e878f[_0x3402d4].carId, true)) {
              {
                _0x45643c++;
              }
            }
            if (_0x3402d4 < _0x3e878f.length - 1) {
              await new Promise(_0xf56ff3 => setTimeout(_0xf56ff3, 300));
            }
          }
        }
        _0x258356.showtip("成功收取 " + _0x45643c + " 辆赛车", _0x45643c > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async performCarAction(_0x3b8f7e, _0x29f8a4, _0xf01ee2 = false, _0xc7a2e8 = 0) {
      {
        if (!_0xf01ee2) {
          {
            const _0x21a30f = {
              send: "发送",
              refresh: "刷新",
              claim: "收获"
            };
            this.dom.statusEl.textContent = "🚀 " + (_0x21a30f[_0x3b8f7e] || _0x3b8f7e) + "中...";
          }
        }
        try {
          {
            const _0x3aca77 = {
              carId: _0x29f8a4,
              helperId: _0xc7a2e8,
              text: ""
            };
            const _0x2177f9 = {
              carId: _0x29f8a4
            };
            const _0x569c83 = await _0x258356.sendCommand("car_" + _0x3b8f7e, _0x3b8f7e === "send" ? _0x3aca77 : _0x2177f9);
            if (_0x569c83?.["code"] !== 0) {
              throw new Error(_0x569c83?.["msg"] || "Code: " + _0x569c83?.["code"]);
            }
            if (!_0xf01ee2) {
              {
                _0x258356.showtip("赛车操作成功", "success");
              }
            }
            return true;
          }
        } catch (_0x3fdb9c) {
          {
            !_0xf01ee2 && (_0x258356.showtip("操作失败: " + _0x3fdb9c.message, "error"), this.dom.statusEl.textContent = "❌ 操作出错");
            console.error("赛车操作 '" + _0x3b8f7e + "' 失败 (ID: " + _0x29f8a4 + "):", _0x3fdb9c.message);
            return false;
          }
        }
      }
    },
    getMemberName(_0x47ea59) {
      {
        try {
          {
            const _0x42972e = this.state.legionMembersMap || {};
            const _0x2a6468 = _0x42972e[String(_0x47ea59)] || _0x42972e[_0x47ea59];
            return _0x2a6468 && (_0x2a6468.name || _0x2a6468.nickname || _0x2a6468.roleName) || null;
          }
        } catch {
          {
            return null;
          }
        }
      }
    },
    async ensureLegionMembers() {
      {
        try {
          {
            if (this._membersLoading) {
              {
                let _0x3ee738 = 0;
                while (this._membersLoading && _0x3ee738 < 10) {
                  await new Promise(_0x2e84b7 => setTimeout(_0x2e84b7, 100));
                  _0x3ee738++;
                }
                return this.state.legionMembersMap || {};
              }
            }
            this._membersLoading = true;
            const _0x17d498 = this.state.legionMembersMap;
            if (_0x17d498 && Object.keys(_0x17d498).length > 0) {
              {
                this._membersLoading = false;
                return _0x17d498;
              }
            }
            const _0xd466c7 = new Promise((_0x10db6c, _0x5b1ce0) => {
              setTimeout(() => _0x5b1ce0(new Error("获取俱乐部成员超时")), 5000);
            });
            const _0x24bd39 = _0x258356.sendCommand("legion_getinfo");
            const _0x109ecd = await Promise.race([_0x24bd39, _0xd466c7]);
            if (!_0x109ecd) {
              {
                throw new Error("无响应数据");
              }
            }
            if (_0x109ecd && _0x109ecd.code !== undefined && _0x109ecd.code !== 0) {
              {
                console.log("获取俱乐部信息失败，错误码: " + _0x109ecd.code + ", 消息: " + (_0x109ecd.msg || "未知错误"));
                this._membersLoading = false;
                return _0x17d498 || {};
              }
            }
            let _0x2bfafd = [];
            if (_0x109ecd._rawData) {
              {
                if (_0x109ecd._rawData.body?.["info"]?.["members"]) {
                  _0x2bfafd = _0x109ecd._rawData.body.info.members;
                } else {
                  if (_0x109ecd._rawData.info?.["members"]) {
                    _0x2bfafd = _0x109ecd._rawData.info.members;
                  } else {
                    if (_0x109ecd._rawData.members) {
                      _0x2bfafd = _0x109ecd._rawData.members;
                    } else {
                      if (_0x109ecd._rawData.legionData?.["members"]) {
                        _0x2bfafd = _0x109ecd._rawData.legionData.members;
                      }
                    }
                  }
                }
              }
            } else {
              if (_0x109ecd.data) {
                {
                  if (_0x109ecd.data.body?.["info"]?.["members"]) {
                    _0x2bfafd = _0x109ecd.data.body.info.members;
                  } else {
                    if (_0x109ecd.data.info?.["members"]) {
                      _0x2bfafd = _0x109ecd.data.info.members;
                    } else {
                      if (_0x109ecd.data.members) {
                        _0x2bfafd = _0x109ecd.data.members;
                      } else {
                        if (_0x109ecd.data.legionData?.["members"]) {
                          _0x2bfafd = _0x109ecd.data.legionData.members;
                        }
                      }
                    }
                  }
                }
              } else {
                {
                  if (_0x109ecd.info?.["members"]) {
                    _0x2bfafd = _0x109ecd.info.members;
                  } else {
                    if (_0x109ecd.members) {
                      _0x2bfafd = _0x109ecd.members;
                    } else {
                      if (_0x109ecd.legionData?.["members"]) {
                        _0x2bfafd = _0x109ecd.legionData.members;
                      }
                    }
                  }
                }
              }
            }
            let _0xd372f3 = {};
            if (Array.isArray(_0x2bfafd)) {
              {
                _0x2bfafd.forEach(_0x132c8d => {
                  {
                    if (_0x132c8d && _0x132c8d.roleId != null) {
                      {
                        _0xd372f3[String(_0x132c8d.roleId)] = _0x132c8d;
                      }
                    }
                  }
                });
              }
            } else {
              if (typeof _0x2bfafd === "object" && _0x2bfafd) {
                {
                  Object.keys(_0x2bfafd).forEach(_0x3f45c7 => {
                    {
                      const _0x4edb0d = _0x2bfafd[_0x3f45c7];
                      if (_0x4edb0d) {
                        {
                          const _0x5df392 = String(_0x4edb0d.roleId ?? _0x3f45c7);
                          if (_0x5df392) {
                            _0xd372f3[_0x5df392] = _0x4edb0d;
                          }
                        }
                      }
                    }
                  });
                }
              }
            }
            this.state.legionMembersMap = _0xd372f3;
            this._membersLoading = false;
            console.log("成功获取俱乐部成员: " + Object.keys(_0xd372f3).length + " 个");
            return _0xd372f3;
          }
        } catch (_0x4416a4) {
          {
            console.error("获取俱乐部成员失败: " + _0x4416a4.message);
            this._membersLoading = false;
            return this.state.legionMembersMap || {};
          }
        }
      }
    },
    openHelperDialog(_0x4ac07a) {
      if (!_0x4ac07a) {
        return;
      }
      if (Number(_0x4ac07a.quality || 0) < 5) {
        return _0x258356.showtip("仅品阶≥5的车辆可设置护卫", "warning");
      }
      if (Number(_0x4ac07a.sendAt || 0) !== 0) {
        return _0x258356.showtip("已发车车辆不可设置护卫", "warning");
      }
      !this.state.helperSelectionByCarId && (this.state.helperSelectionByCarId = {});
      let _0x26b198 = document.getElementById("helper-dialog");
      let _0x4e4292 = document.getElementById("global-ui-overlay");
      if (!_0x26b198) {
        {
          _0x4e4292 = document.createElement("div");
          _0x4e4292.id = "global-ui-overlay";
          _0x4e4292.style.cssText = "\n                position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                display: flex; align-items: center; justify-content: center;\n            ";
          _0x26b198 = document.createElement("div");
          _0x26b198.id = "helper-dialog";
          _0x26b198.style.cssText = "\n                position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                background: #ffffff;\n                color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                z-index: 100000;\n            ";
          let _0x3a66b8 = document.getElementById("member-font-style");
          if (!_0x3a66b8) {
            {
              _0x3a66b8 = document.createElement("style");
              _0x3a66b8.id = "member-font-style";
              _0x3a66b8.textContent = "\n                    /* 仅针对对话框内的玩家名字元素 */\n                    #members-content {\n                        font-size: 10px !important;\n                    }\n                    #members-content div[data-mid] {\n                        font-size: 10px !important;\n                    }\n                    #members-content div[data-mid] span[style*=\"white-space:nowrap\"] {\n                        font-size: 10px !important;\n                        line-height: 1.1 !important;\n                    }\n                    #helper-content {\n                        font-size: 10px !important;\n                    }\n                    #helper-content div[data-mid] {\n                        font-size: 10px !important;\n                    }\n                    #helper-content div[data-mid] .__name {\n                        font-size: 10px !important;\n                    }\n                ";
              document.head.appendChild(_0x3a66b8);
            }
          }
          _0x26b198.innerHTML = "\n                <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                  <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">选择护卫</div>\n                  <button id=\"helper-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                </div>\n                <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                  <input id=\"helper-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                </div>\n                <div id=\"helper-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                <div style=\"display:flex; align-items:center; gap:8px; justify-content:flex-end; padding:8px 4px;\">\n                  <div style=\"flex:1; font-size:14px; color:#6b7280;\">当前选择: <span id=\"helper-selected-name\" style=\"color:#2563eb;\">未选择</span></div>\n                  <button id=\"helper-cancel\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#e5e7eb; color:#333333; cursor:pointer;\">取消</button>\n                  <button id=\"helper-confirm\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#2563eb; color:#ffffff; cursor:not-allowed; opacity:0.7;\">确定</button>\n                </div>\n            ";
          document.body.appendChild(_0x4e4292);
          document.body.appendChild(_0x26b198);
        }
      } else {
        {
          _0x4e4292.style.display = "flex";
          _0x26b198.style.display = "block";
        }
      }
      const _0x8fe4fb = document.getElementById("helper-content");
      const _0x5b25ea = document.getElementById("helper-selected-name");
      const _0x1d0ac2 = document.getElementById("helper-cancel");
      const _0x287eef = document.getElementById("helper-confirm");
      const _0x343ec9 = document.getElementById("helper-search-input");
      const _0x3561ce = document.getElementById("helper-close");
      if (!_0x8fe4fb || !_0x5b25ea || !_0x1d0ac2 || !_0x287eef) {
        {
          console.error("无法找到必要的DOM元素");
          _0x258356.showtip("界面加载失败", "error");
          return;
        }
      }
      const _0x11c3a3 = _0x1d0ac2.cloneNode(true);
      _0x1d0ac2.parentNode.replaceChild(_0x11c3a3, _0x1d0ac2);
      const _0x267baf = _0x287eef.cloneNode(true);
      _0x287eef.parentNode.replaceChild(_0x267baf, _0x287eef);
      const _0x2be720 = _0x343ec9.cloneNode(true);
      _0x343ec9.parentNode.replaceChild(_0x2be720, _0x343ec9);
      const _0x334a1d = _0x3561ce ? _0x3561ce.cloneNode(true) : null;
      if (_0x3561ce && _0x334a1d) {
        {
          _0x3561ce.parentNode.replaceChild(_0x334a1d, _0x3561ce);
        }
      }
      const _0x265c6b = _0x11c3a3;
      const _0x4ecfa2 = _0x267baf;
      const _0xad4571 = _0x2be720;
      const _0x4b3123 = _0x334a1d;
      const _0x41e4c6 = String((this.state.helperSelectionByCarId || {})[String(_0x4ac07a.carId)] || "");
      let _0x18f8ae = _0x41e4c6;
      const _0x354c87 = _0x44d0bb => {
        {
          const _0x4cd475 = Number(_0x44d0bb || 0);
          if (_0x4cd475 >= 100000000) {
            return (_0x4cd475 / 100000000).toFixed(2) + "亿";
          }
          if (_0x4cd475 >= 10000) {
            return (_0x4cd475 / 10000).toFixed(2) + "万";
          }
          return String(_0x4cd475);
        }
      };
      const _0x4441d9 = _0x55c7dc => {
        {
          try {
            _0x8fe4fb.querySelectorAll("div[data-mid]").forEach(_0x3835ca => {
              {
                _0x3835ca.style.background = "rgba(255,255,255,0.06)";
                _0x3835ca.style.border = "";
                const _0x76397e = _0x3835ca.querySelector("span.__sel_dot");
                if (_0x76397e) {
                  _0x76397e.style.background = "#6b7280";
                }
              }
            });
          } catch (_0x1f63d8) {
            console.error("重置UI失败:", _0x1f63d8);
          }
          if (_0x55c7dc) {
            {
              try {
                {
                  const _0x943860 = _0x8fe4fb.querySelector("div[data-mid=\"" + _0x55c7dc + "\"]");
                  if (_0x943860) {
                    {
                      _0x943860.style.transition = "background .18s ease, border-color .18s ease";
                      _0x943860.style.background = "rgba(37,99,235,0.18)";
                      _0x943860.style.border = "1px solid #2563eb";
                      const _0x38fc2a = _0x943860.querySelector("span.__sel_dot");
                      if (_0x38fc2a) {
                        _0x38fc2a.style.background = "#22c55e";
                      }
                      const _0x8ddeb9 = this.getMemberName(_0x55c7dc) || _0x55c7dc;
                      _0x5b25ea.textContent = _0x8ddeb9;
                      _0x4ecfa2.disabled = false;
                      _0x4ecfa2.textContent = "确定（" + _0x8ddeb9 + "）";
                      _0x4ecfa2.style.opacity = "1";
                      _0x4ecfa2.style.cursor = "pointer";
                    }
                  }
                }
              } catch (_0x502d2f) {
                {
                  console.error("更新选中UI失败:", _0x502d2f);
                }
              }
            }
          } else {
            {
              _0x5b25ea.textContent = "未选择";
              _0x4ecfa2.disabled = true;
              _0x4ecfa2.textContent = "确定";
              _0x4ecfa2.style.opacity = "0.7";
              _0x4ecfa2.style.cursor = "not-allowed";
            }
          }
        }
      };
      const _0x262090 = (_0x413594 = "", _0x5d9b4e = {}, _0xa33eb4 = {}) => {
        {
          try {
            {
              const _0x42c5c4 = String(_0x413594 || "").trim().toLowerCase();
              const _0x15b58d = Object.keys(_0x5d9b4e).filter(_0x57083d => {
                {
                  try {
                    {
                      const _0x29f676 = _0x5d9b4e[_0x57083d];
                      const _0x3a808f = _0x29f676?.["name"] || _0x29f676?.["nickname"] || "";
                      return !_0x42c5c4 || String(_0x57083d).includes(_0x42c5c4) || String(_0x3a808f).toLowerCase().includes(_0x42c5c4);
                    }
                  } catch (_0x3e1ec4) {
                    {
                      return false;
                    }
                  }
                }
              }).map(_0x198c6a => {
                {
                  try {
                    {
                      const _0x44ca7b = _0x5d9b4e[_0x198c6a];
                      const _0x4a6b0f = Number(_0xa33eb4[String(_0x198c6a)] ?? 0);
                      const _0x5543e9 = _0x44ca7b?.["name"] || _0x44ca7b?.["nickname"] || _0x198c6a;
                      const _0x5153d0 = Number(_0x44ca7b?.["power"] ?? _0x44ca7b?.["s_power"] ?? _0x44ca7b?.["custom"]?.["s_power"] ?? 0);
                      const _0x17343b = _0x4a6b0f >= 4;
                      const _0x1b9f10 = _0x44ca7b?.["headImg"] || _0x44ca7b?.["avatar"] || "/icons/xiaoyugan.png";
                      const _0x46b683 = _0x18f8ae === _0x198c6a ? "#22c55e" : "#6b7280";
                      return "<div data-mid=\"" + _0x198c6a + "\" data-disabled=\"" + (_0x17343b ? "1" : "") + "\" style=\"display:flex; align-items:center; justify-content:space-between; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb; cursor:" + (_0x17343b ? "not-allowed" : "pointer") + ";\">\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <img src=\"" + _0x1b9f10 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <span class=\"__name\">" + _0x5543e9 + "</span>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x354c87(_0x5153d0) + "</span>\n                                      <span style=\"font-size:12px; color:" + (_0x17343b ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x4a6b0f + "/4</span>\n                                      <span class=\"__sel_dot\" style=\"width:10px; height:10px; border-radius:50%; background:" + _0x46b683 + "\"></span>\n                                    </div>\n                                </div>";
                    }
                  } catch (_0x560ede) {
                    {
                      return "";
                    }
                  }
                }
              }).filter(_0x550dfe => _0x550dfe).join("");
              _0x8fe4fb.innerHTML = _0x15b58d || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
              _0x8fe4fb.querySelectorAll("div[data-mid]").forEach(_0x40fd14 => {
                _0x40fd14.addEventListener("click", function () {
                  {
                    const _0x1ba41e = this.getAttribute("data-disabled") === "1";
                    if (_0x1ba41e) {
                      return _0x258356.showtip("该成员当前护卫次数已满", "warning");
                    }
                    _0x18f8ae = this.getAttribute("data-mid") || "";
                    _0x4441d9(_0x18f8ae);
                  }
                });
              });
              _0x4441d9(_0x18f8ae);
            }
          } catch (_0xacf57) {
            console.error("渲染列表失败:", _0xacf57);
            _0x8fe4fb.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
          }
        }
      };
      const _0x211e3c = () => {
        {
          try {
            {
              const _0x1f45d7 = document.getElementById("member-font-style");
              _0x1f45d7 && _0x1f45d7.remove();
              if (_0x26b198) {
                _0x26b198.style.display = "none";
              }
              if (_0x4e4292) {
                _0x4e4292.style.display = "none";
              }
            }
          } catch (_0x46396b) {
            {
              console.error("关闭弹窗失败:", _0x46396b);
            }
          }
        }
      };
      _0xad4571.oninput = function () {
        clearTimeout(_0xad4571.searchTimer);
        _0xad4571.searchTimer = setTimeout(() => {
          {
            _0xfdddc3(this.value);
          }
        }, 300);
      };
      _0x265c6b.onclick = _0x211e3c;
      if (_0x4b3123) {
        _0x4b3123.onclick = _0x211e3c;
      }
      _0x4ecfa2.onclick = () => {
        {
          try {
            {
              if (_0x18f8ae) {
                {
                  (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x4ac07a.carId)] = String(_0x18f8ae);
                  const _0xd9e0d7 = this.getMemberName(_0x18f8ae) || _0x18f8ae;
                  _0x258356.showtip("已设置护卫：" + _0xd9e0d7, "success");
                }
              } else {
                (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x4ac07a.carId)] = 0;
                _0x258356.showtip("已取消护卫", "info");
              }
              _0x211e3c();
            }
          } catch (_0x36a32f) {
            {
              console.error("确认选择失败:", _0x36a32f);
              _0x258356.showtip("设置护卫失败", "error");
            }
          }
        }
      };
      if (_0x4e4292) {
        {
          _0x4e4292.style.cursor = "pointer";
          _0x4e4292.onclick = function (_0xd815c5) {
            {
              if (_0xd815c5.target === this) {
                _0x211e3c();
              }
            }
          };
        }
      }
      const _0xfdddc3 = (_0x176e2b = "") => {
        _0x8fe4fb.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
        Promise.all([new Promise(_0x24120e => {
          {
            try {
              {
                const _0x54ff53 = this.ensureLegionMembers();
                if (_0x54ff53 && typeof _0x54ff53.then === "function") {
                  {
                    _0x54ff53.then(_0x3cdb92 => _0x24120e(_0x3cdb92 || {})).catch(() => _0x24120e({}));
                  }
                } else {
                  {
                    _0x24120e(_0x54ff53 || {});
                  }
                }
              }
            } catch (_0x415165) {
              {
                console.error("获取成员数据出错:", _0x415165);
                _0x24120e({});
              }
            }
          }
        }), new Promise(_0x4894a4 => {
          try {
            _0x258356.sendCommand("car_getmemberhelpingcnt").then(_0x18cccf => {
              {
                try {
                  {
                    let _0x425617 = {};
                    let _0x27baee = {};
                    if (_0x18cccf) {
                      {
                        if (_0x18cccf._rawData?.["body"]?.["memberHelpingCntMap"]) {
                          _0x27baee = _0x18cccf._rawData.body.memberHelpingCntMap;
                        } else {
                          if (_0x18cccf._rawData?.["memberHelpingCntMap"]) {
                            _0x27baee = _0x18cccf._rawData.memberHelpingCntMap;
                          } else {
                            if (_0x18cccf.data?.["body"]?.["memberHelpingCntMap"]) {
                              _0x27baee = _0x18cccf.data.body.memberHelpingCntMap;
                            } else {
                              if (_0x18cccf.data?.["memberHelpingCntMap"]) {
                                _0x27baee = _0x18cccf.data.memberHelpingCntMap;
                              } else {
                                if (_0x18cccf.body?.["memberHelpingCntMap"]) {
                                  _0x27baee = _0x18cccf.body.memberHelpingCntMap;
                                } else {
                                  if (_0x18cccf.memberHelpingCntMap) {
                                    _0x27baee = _0x18cccf.memberHelpingCntMap;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (Array.isArray(_0x27baee)) {
                      {
                        _0x27baee.forEach(_0x4c8471 => {
                          {
                            const _0x3f13a7 = String(_0x4c8471?.["roleId"] ?? _0x4c8471?.["id"] ?? "");
                            if (_0x3f13a7) {
                              _0x425617[_0x3f13a7] = Number(_0x4c8471?.["cnt"] ?? _0x4c8471?.["count"] ?? 0);
                            }
                          }
                        });
                      }
                    } else {
                      if (typeof _0x27baee === "object" && _0x27baee) {
                        {
                          Object.keys(_0x27baee).forEach(_0x2c8d85 => {
                            {
                              try {
                                {
                                  const _0x30808b = _0x27baee[_0x2c8d85];
                                  _0x425617[String(_0x2c8d85)] = Number(typeof _0x30808b === "object" ? _0x30808b?.["cnt"] ?? _0x30808b?.["count"] ?? 0 : _0x30808b ?? 0);
                                }
                              } catch (_0x43fe67) {}
                            }
                          });
                        }
                      }
                    }
                    _0x4894a4(_0x425617);
                  }
                } catch (_0x31d30e) {
                  console.error("解析护卫次数失败:", _0x31d30e);
                  _0x4894a4({});
                }
              }
            }).catch(_0x18cbf4 => {
              {
                console.error("获取护卫次数失败:", _0x18cbf4);
                _0x4894a4({});
              }
            });
          } catch (_0x6def5b) {
            console.error("创建获取护卫次数Promise失败:", _0x6def5b);
            _0x4894a4({});
          }
        })]).then(([_0x5541aa, _0x48971a]) => {
          _0x262090(_0x176e2b, _0x5541aa || {}, _0x48971a || {});
        }).catch(_0x788ddf => {
          console.error("加载数据失败:", _0x788ddf);
          _0x8fe4fb.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
        });
      };
      _0xfdddc3("");
    },
    openMembersDialog() {
      try {
        let _0x3e7d08 = document.getElementById("members-dialog");
        let _0x2421a1 = document.getElementById("global-ui-overlay");
        let _0x4143f6;
        let _0x2acee3;
        let _0x4b9438;
        if (!_0x3e7d08) {
          !_0x2421a1 ? (_0x2421a1 = document.createElement("div"), _0x2421a1.id = "global-ui-overlay", _0x2421a1.style.cssText = "\n                        position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                        background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                        display: flex; align-items: center; justify-content: center;\n                    ", document.body.appendChild(_0x2421a1)) : _0x2421a1.style.display = "flex";
          _0x3e7d08 = document.createElement("div");
          _0x3e7d08.id = "members-dialog";
          _0x3e7d08.style.cssText = "\n                    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                    background: #ffffff;\n                    color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                    border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                    box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                    z-index: 100000;\n                ";
          let _0x5390db = document.getElementById("member-font-style");
          !_0x5390db && (_0x5390db = document.createElement("style"), _0x5390db.id = "member-font-style", _0x5390db.textContent = "\n                        /* 仅针对对话框内的玩家名字元素 */\n                        #members-content {\n                            font-size: 10px !important;\n                        }\n                        #members-content div[data-mid] {\n                            font-size: 10px !important;\n                        }\n                        #members-content div[data-mid] span[style*=\"white-space:nowrap\"] {\n                            font-size: 10px !important;\n                            line-height: 1.1 !important;\n                        }\n                        #helper-content {\n                            font-size: 10px !important;\n                        }\n                        #helper-content div[data-mid] {\n                            font-size: 10px !important;\n                        }\n                        #helper-content div[data-mid] .__name {\n                            font-size: 10px !important;\n                        }\n                    ", document.head.appendChild(_0x5390db));
          _0x3e7d08.innerHTML = "\n                    <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                      <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">俱乐部成员</div>\n                      <button id=\"members-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                    </div>\n                    <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                      <input id=\"members-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                    </div>\n                    <div id=\"members-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                ";
          document.body.appendChild(_0x3e7d08);
          _0x4143f6 = document.getElementById("members-content");
          _0x2acee3 = document.getElementById("members-search-input");
          _0x4b9438 = document.getElementById("members-close");
          const _0x5dcff7 = () => {
            try {
              const _0x9d70bc = document.getElementById("member-font-style");
              _0x9d70bc && _0x9d70bc.remove();
              if (_0x3e7d08) {
                _0x3e7d08.style.display = "none";
              }
              if (_0x2421a1) {
                _0x2421a1.style.display = "none";
              }
            } catch (_0xec10d4) {
              console.error("关闭弹窗失败:", _0xec10d4);
            }
          };
          _0x4b9438 && (_0x4b9438.onclick = _0x5dcff7);
          _0x2421a1 && (_0x2421a1.onclick = function (_0x55ced1) {
            if (_0x55ced1.target === this) {
              _0x5dcff7();
            }
          });
        } else {
          _0x3e7d08.style.display = "block";
          if (_0x2421a1) {
            _0x2421a1.style.display = "flex";
          }
          _0x4143f6 = document.getElementById("members-content");
          _0x2acee3 = document.getElementById("members-search-input");
          _0x4b9438 = document.getElementById("members-close");
        }
        if (!_0x4143f6) {
          console.error("未找到内容容器元素");
          return;
        }
        const _0x43b2ac = _0x56136b => {
          const _0x311291 = Number(_0x56136b || 0);
          if (_0x311291 >= 100000000) {
            return (_0x311291 / 100000000).toFixed(2) + "亿";
          }
          if (_0x311291 >= 10000) {
            return (_0x311291 / 10000).toFixed(2) + "万";
          }
          return String(_0x311291);
        };
        const _0x1d8d41 = (_0x4d49cc = "", _0x12ff91 = {}, _0x454268 = {}) => {
          try {
            const _0x3f11c9 = String(_0x4d49cc || "").trim().toLowerCase();
            const _0x37bac7 = Object.keys(_0x12ff91).filter(_0x40bebc => {
              const _0x20551c = _0x12ff91[_0x40bebc];
              const _0x6b8451 = _0x20551c?.["name"] || _0x20551c?.["nickname"] || "";
              return !_0x3f11c9 || String(_0x40bebc).includes(_0x3f11c9) || String(_0x6b8451).toLowerCase().includes(_0x3f11c9);
            }).map(_0x496ffb => {
              const _0x1fa0b8 = _0x12ff91[_0x496ffb];
              const _0x21f5c6 = Number(_0x454268[String(_0x496ffb)] ?? 0);
              const _0x2a4a1e = _0x1fa0b8?.["name"] || _0x1fa0b8?.["nickname"] || _0x496ffb;
              const _0x185e77 = Number(_0x1fa0b8?.["power"] ?? _0x1fa0b8?.["s_power"] ?? _0x1fa0b8?.["custom"]?.["s_power"] ?? 0);
              const _0x334069 = _0x1fa0b8?.["headImg"] || _0x1fa0b8?.["avatar"] || "/icons/xiaoyugan.png";
              const _0x5e07a1 = _0x1fa0b8?.["role"] || _0x1fa0b8?.["position"] || "";
              const _0x4388b3 = _0x5e07a1 ? "<span style=\"font-size:11px; color:#60a5fa; margin-left:6px;\">" + _0x5e07a1 + "</span>" : "";
              return "<div data-mid=\"" + _0x496ffb + "\" style=\"display:flex; align-items:center; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb;\">\n                                    <div style=\"display:flex; align-items:center; gap:8px; flex:1;\">\n                                      <img src=\"" + _0x334069 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <div style=\"flex:1; overflow:hidden;\">\n                                        <div style=\"display:flex; align-items:center;\">\n                                          <span style=\"white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:120px; display:inline-block;\">" + _0x2a4a1e + "</span>\n                                          " + _0x4388b3 + "\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:12px; margin-left:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x43b2ac(_0x185e77) + "</span>\n                                      <div style=\"font-size:12px; color:" + (_0x21f5c6 >= 4 ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x21f5c6 + "/4</div>\n                                    </div>\n                                </div>";
            }).join("");
            _0x4143f6.innerHTML = _0x37bac7 || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
          } catch (_0xbe0090) {
            console.error("渲染成员列表失败:", _0xbe0090);
            _0x4143f6.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
          }
        };
        const _0x127a59 = (_0x24aa74 = "") => {
          _0x4143f6.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
          Promise.all([Promise.resolve().then(() => this.ensureLegionMembers()), new Promise(_0x4b1bd8 => {
            _0x258356.sendCommand("car_getmemberhelpingcnt").then(_0x314ac2 => {
              try {
                let _0x33d21b = {};
                let _0x1ea620 = {};
                if (_0x314ac2) {
                  if (_0x314ac2._rawData?.["body"]?.["memberHelpingCntMap"]) {
                    _0x1ea620 = _0x314ac2._rawData.body.memberHelpingCntMap;
                  } else {
                    if (_0x314ac2._rawData?.["memberHelpingCntMap"]) {
                      _0x1ea620 = _0x314ac2._rawData.memberHelpingCntMap;
                    } else {
                      if (_0x314ac2.data?.["body"]?.["memberHelpingCntMap"]) {
                        _0x1ea620 = _0x314ac2.data.body.memberHelpingCntMap;
                      } else {
                        if (_0x314ac2.data?.["memberHelpingCntMap"]) {
                          _0x1ea620 = _0x314ac2.data.memberHelpingCntMap;
                        } else {
                          if (_0x314ac2.body?.["memberHelpingCntMap"]) {
                            _0x1ea620 = _0x314ac2.body.memberHelpingCntMap;
                          } else {
                            if (_0x314ac2.memberHelpingCntMap) {
                              _0x1ea620 = _0x314ac2.memberHelpingCntMap;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (Array.isArray(_0x1ea620)) {
                  _0x1ea620.forEach(_0x188952 => {
                    const _0x3f700b = String(_0x188952?.["roleId"] ?? _0x188952?.["id"] ?? "");
                    if (_0x3f700b) {
                      _0x33d21b[_0x3f700b] = Number(_0x188952?.["cnt"] ?? _0x188952?.["count"] ?? 0);
                    }
                  });
                } else {
                  typeof _0x1ea620 === "object" && _0x1ea620 && Object.keys(_0x1ea620).forEach(_0x13369e => {
                    try {
                      const _0x2ac016 = _0x1ea620[_0x13369e];
                      _0x33d21b[String(_0x13369e)] = Number(typeof _0x2ac016 === "object" ? _0x2ac016?.["cnt"] ?? _0x2ac016?.["count"] ?? 0 : _0x2ac016 ?? 0);
                    } catch (_0x55cdc8) {}
                  });
                }
                _0x4b1bd8(_0x33d21b);
              } catch (_0x4db3d4) {
                console.error("解析护卫次数失败:", _0x4db3d4);
                _0x4b1bd8({});
              }
            }).catch(_0x43314a => {
              console.error("获取护卫次数失败:", _0x43314a);
              _0x4b1bd8({});
            });
          })]).then(([_0x2afe72, _0xdefa53]) => {
            _0x1d8d41(_0x24aa74, _0x2afe72 || {}, _0xdefa53 || {});
          }).catch(_0x171a52 => {
            console.error("加载成员数据失败:", _0x171a52);
            _0x4143f6.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
          });
        };
        _0x2acee3 && (_0x2acee3.oninput = function () {
          clearTimeout(_0x2acee3.searchTimer);
          _0x2acee3.searchTimer = setTimeout(() => {
            _0x127a59(this.value);
          }, 300);
        });
        _0x127a59("");
      } catch (_0x3c89c7) {
        console.error("打开成员列表失败:", _0x3c89c7);
        _0x258356.showtip("打开成员列表失败", "error");
      }
    },
    async sendCar(_0x25d581) {
      if (!this.isCarEventActive()) {
        return _0x258356.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
      }
      if (this.state.sendCount >= 4) {
        return _0x258356.showtip("今日发车次数已用完", "error");
      }
      const _0x2e1622 = this.state.fullCarData.find(_0x3dee6c => String(_0x3dee6c.carId) === String(_0x25d581));
      if (!_0x2e1622) {
        return _0x258356.showtip("车辆不存在", "error");
      }
      const _0x3e4fc5 = Number((this.state.helperSelectionByCarId || {})[String(_0x25d581)] || 0);
      (await this.performCarAction("send", _0x25d581, false, _0x3e4fc5)) && (this.state.helperSelectionByCarId && this.state.helperSelectionByCarId[String(_0x25d581)] && delete this.state.helperSelectionByCarId[String(_0x25d581)], setTimeout(() => this.queryClubCars(), 300));
    }
  };
  _0x201546.init();
  async function _0x43be97(_0x4a9732) {
    if (_0x4a9732) {
      _0x4a9732.textContent = "🔄 开始执行藏品图鉴升级...";
    }
    const _0x1a3374 = 100;
    let _0x134392 = 0;
    let _0x42cd7c = 0;
    const _0x167940 = () => {
      const _0x16f0ac = [];
      const _0x299743 = new Set();
      function _0x4fd39c(_0x7e0a8f, _0x5b0354, _0x1f5f42 = 2) {
        const _0x275963 = _0x7e0a8f + "_" + _0x5b0354 + "_" + _0x1f5f42;
        if (!_0x299743.has(_0x275963)) {
          const _0x2887be = {
            seriesId: _0x7e0a8f,
            id: _0x5b0354,
            poolType: _0x1f5f42
          };
          _0x16f0ac.push(_0x2887be);
          _0x299743.add(_0x275963);
        }
      }
      for (let _0x1417db = 1; _0x1417db <= 12; _0x1417db++) {
        _0x4fd39c(2, _0x1417db, 1);
      }
      for (let _0x175140 = 1001; _0x175140 <= 1015; _0x175140++) {
        _0x4fd39c(3, _0x175140, 1);
      }
      const _0x5d9995 = [10103, 11302, 10903, 10206, 11705, 10302, 10403, 11005, 11403, 11804, 10503, 10603, 11102, 11504, 10702, 10805, 11204, 11604, 12005, 11904];
      for (const _0x4ee118 of _0x5d9995) {
        _0x4fd39c(40001, _0x4ee118, 3);
      }
      for (let _0x22f5a2 = 2001; _0x22f5a2 <= 2020; _0x22f5a2++) {
        _0x4fd39c(6, _0x22f5a2, 1);
      }
      for (let _0x51c720 = 3001; _0x51c720 <= 3010; _0x51c720++) {
        _0x4fd39c(6, _0x51c720, 1);
      }
      const _0x3f0bc7 = {
        "101": [10101, 10102, 1009, 10103, 2001],
        "113": [11307, 11302, 11301, 11304, 2003, 1004],
        "109": [10903, 10901, 10908, 2002, 1007, 10902],
        "102": [10206, 10201, 10207, 2004, 1012, 10202],
        "117": [11702, 11705, 11703, 11704],
        "103": [10308, 10307, 10302, 10301, 10304, 2016, 1003],
        "104": [10403, 10401, 10404, 10402, 2013, 1014],
        "110": [11005, 11001, 11006, 2014, 1011, 11002],
        "114": [11409, 11408, 11403, 11401, 11406, 2015, 1001, 11402],
        "118": [11802, 11803, 11804, 11805],
        "105": [10508, 10509, 10503, 10501, 10504, 10502, 2005, 1013],
        "106": [10603, 10601, 10606, 1002, 10602],
        "111": [11101, 11102, 11103, 2006, 11104],
        "115": [11504, 11501, 2007, 1006, 11502],
        "119": [11903, 11904, 11905, 3001],
        "107": [10711, 10704, 10712, 10713, 10714, 10702, 10701, 10708, 10707, 10703, 2012, 1008],
        "108": [10805, 10801, 10807, 2009, 1010, 10802],
        "112": [11204, 11201, 2011, 11203, 11202],
        "116": [11604, 11601, 11605, 2010, 1005, 11602],
        "120": [12002, 12006, 12005, 12003, 12004]
      };
      for (const _0x1d40b9 in _0x3f0bc7) {
        const _0x454992 = parseInt(_0x1d40b9, 10);
        const _0x2a2a0b = _0x3f0bc7[_0x1d40b9];
        let _0x2c5019 = Infinity;
        let _0x387077 = -Infinity;
        const _0x4e9fa9 = new Set();
        for (const _0x5bee76 of _0x2a2a0b) {
          if (Math.floor(_0x5bee76 / 100) === _0x454992 && _0x5bee76 % 100 > 0 && _0x5bee76 % 100 < 100) {
            const _0xfa039f = _0x5bee76 % 100;
            _0x2c5019 = Math.min(_0x2c5019, _0xfa039f);
            _0x387077 = Math.max(_0x387077, _0xfa039f);
          } else {
            _0x4e9fa9.add(_0x5bee76);
          }
        }
        if (_0x2c5019 !== Infinity && _0x387077 !== -Infinity) {
          for (let _0x3bc6a8 = _0x2c5019; _0x3bc6a8 <= _0x387077; _0x3bc6a8++) {
            _0x4fd39c(_0x454992, _0x454992 * 100 + _0x3bc6a8);
          }
        }
        for (const _0x25244b of _0x4e9fa9) {
          _0x4fd39c(_0x454992, _0x25244b);
        }
      }
      return _0x16f0ac.sort((_0x3ffd93, _0x3755fe) => {
        if (_0x3ffd93.seriesId !== _0x3755fe.seriesId) {
          return _0x3ffd93.seriesId - _0x3755fe.seriesId;
        }
        if (_0x3ffd93.id !== _0x3755fe.id) {
          return _0x3ffd93.id - _0x3755fe.id;
        }
        return _0x3ffd93.poolType - _0x3755fe.poolType;
      });
    };
    const _0x8150f = _0x167940();
    const _0x4b8de3 = _0x8150f.length;
    _0x4a9732.textContent = "🔄 准备领取 " + _0x4b8de3 + " 个图鉴奖励...";
    for (let _0x5bce4f = 0; _0x5bce4f < _0x8150f.length; _0x5bce4f++) {
      const _0xe19107 = _0x8150f[_0x5bce4f];
      const _0x4e44ab = _0x5bce4f + 1;
      _0x4a9732.textContent = "🔄 (" + _0x4e44ab + "/" + _0x4b8de3 + ") 处理系列: " + _0xe19107.seriesId + ", ID: " + _0xe19107.id + ", 类型: " + _0xe19107.poolType;
      try {
        const _0x1846ae = {
          id: _0xe19107.id,
          isAll: false,
          poolType: _0xe19107.poolType,
          seriesId: _0xe19107.seriesId
        };
        const _0x2086cc = await _0x258356.sendCommand("collection_activate", _0x1846ae);
        _0x2086cc.code === 0 ? _0x134392++ : _0x42cd7c++;
      } catch (_0x14948d) {
        _0x42cd7c++;
        console.error("处理图鉴失败:", _0x14948d);
      }
      await _0x258356.delay(_0x1a3374 / 1000);
    }
    _0x4a9732.textContent = "✅ 图鉴奖励领取完成，开始执行额外领取...";
    const _0x266826 = {
      seriesId: 2,
      poolType: 1
    };
    const _0x270e48 = {
      seriesId: 3,
      poolType: 1
    };
    const _0x3a83dc = {
      seriesId: 40001,
      poolType: 3
    };
    const _0x27765f = [_0x266826, _0x270e48, _0x3a83dc];
    for (const _0x41f241 of _0x27765f) {
      try {
        _0x4a9732.textContent = "🔄 正在领取系列奖励 (seriesId: " + _0x41f241.seriesId + ")...";
        const _0x42de7b = {
          seriesId: _0x41f241.seriesId,
          isAll: true,
          poolType: _0x41f241.poolType
        };
        const _0x36fa68 = await _0x258356.sendCommand("collection_claimseries", _0x42de7b);
        _0x36fa68.code === 0 && _0x134392++;
      } catch (_0xb2a9d6) {
        console.error("系列奖励 (" + _0x41f241.seriesId + ") 领取失败:", _0xb2a9d6);
      }
      await _0x258356.delay(_0x1a3374 / 1000);
    }
    try {
      _0x4a9732.textContent = "🔄 正在领取总览奖励...";
      const _0x3f1c92 = await _0x258356.sendCommand("collection_claimtotal", {});
      _0x3f1c92.code === 0 && _0x134392++;
    } catch (_0x40491b) {
      console.error("总览奖励领取失败:", _0x40491b);
    }
    await _0x258356.delay(_0x1a3374 / 1000);
    _0x4a9732.textContent = "🔄 开始执行30次升级操作...";
    for (let _0x1f7886 = 1; _0x1f7886 <= 30; _0x1f7886++) {
      _0x4a9732.textContent = "🔄 升级操作 " + _0x1f7886 + "/30";
      try {
        const _0x376dd6 = {
          id: 1001,
          isAll: false,
          poolType: 1,
          seriesId: 3
        };
        await _0x258356.sendCommand("collection_activate", _0x376dd6);
      } catch (_0x333ed2) {
        console.log("升级第 " + _0x1f7886 + " 次失败:", _0x333ed2.message);
      }
      await _0x258356.delay(0.05);
    }
    const _0x4302da = "✅ 藏品图鉴升级完成！\n成功: " + _0x134392 + " 次 | 失败: " + _0x42cd7c + " 次\n已完成全部30次升级操作";
    _0x4a9732.textContent = _0x4302da;
  }
  let _0x1f0ddd = false;
  let _0x2fc08b = false;
  async function _0x310a3d(_0x197a99, _0x2f3113) {
    if (_0x1f0ddd && (_0x197a99.startsWith("daily-task-") || _0x197a99 === "one-key-100")) {
      _0x258356.showtip("已有任务在执行，请稍候", "info");
      return;
    }
    const _0x2fac31 = _0x2f3113.closest(".task-section").querySelector(".status");
    const _0x606a71 = _0x2f3113.textContent;
    const _0x543b3a = _0x2b6210.querySelectorAll(".task-btn, input[type=\"checkbox\"]");
    if (_0x197a99 !== "toggle-ws-monitor" && _0x197a99 !== "clear-ws-log" && _0x197a99 !== "copy-all-ws-log") {
      _0x2f3113.disabled = true;
      _0x2f3113.textContent = "执行中...";
      if (_0x2fac31) {
        _0x2fac31.textContent = "🚀 执行中...";
      }
    }
    (_0x197a99 === "execute-daily-checked" || _0x197a99 === "one-key-100") && (_0x1f0ddd = true, _0x2fc08b = false, _0x543b3a.forEach(_0x2dd9db => _0x2dd9db.disabled = true));
    try {
      const _0x2f0462 = window.__require?.("data-index");
      if (_0x197a99 === "toggle-ws-monitor") {
        if (WSModule.isMonitoring) {
          WSModule.stop();
        } else {
          WSModule.start();
        }
        return;
      }
      if (_0x197a99 === "clear-ws-log") {
        WSModule.clear();
        return;
      }
      if (_0x197a99 === "copy-all-ws-log") {
        WSModule.copyAll();
        return;
      }
      const _0x1ff7ce = window.__require?.("ServerData");
      if (_0x197a99.startsWith("start-fishing-")) {
        const _0x52fe9b = parseInt(_0x197a99.split("-")[2]);
        const _0xbeeae0 = parseInt(_0x2f3113.parentElement.querySelector("input").value) || 0;
        const _0x4877ce = _0x52fe9b === 2 ? "高级钓鱼" : "普通钓鱼";
        if (_0x52fe9b === 1 && _0xbeeae0 > 0) {
          let _0x2d0dc2 = 0;
          const _0x50f5fe = Math.min(_0xbeeae0, 3);
          for (let _0x3338c9 = 0; _0x3338c9 < _0x50f5fe; _0x3338c9++) {
            try {
              const _0x14652 = {
                lotteryNumber: 1,
                newFree: true,
                type: 1
              };
              await _0x2f0462.ArtifactService.lottery(_0x14652);
            } catch (_0x5a4a22) {
              console.log("单次钓鱼尝试失败（正常现象）");
            }
            _0x2d0dc2++;
            _0x2fac31.textContent = _0x4877ce + " " + _0x2d0dc2 + "/" + _0xbeeae0;
            await _0x258356.delay(0.2);
          }
          const _0x1485ce = _0xbeeae0 - _0x50f5fe;
          if (_0x1485ce > 0) {
            for (let _0x302217 = 0; _0x302217 < Math.ceil(_0x1485ce / 10); _0x302217++) {
              const _0x1b4379 = Math.min(10, _0x1485ce - _0x302217 * 10);
              if (_0x1b4379 <= 0) {
                break;
              }
              const _0x3cd1d5 = {
                lotteryNumber: _0x1b4379,
                newFree: true,
                type: 1
              };
              await _0x2f0462.ArtifactService.lottery(_0x3cd1d5);
              _0x2d0dc2 += _0x1b4379;
              _0x2fac31.textContent = _0x4877ce + " " + Math.min(_0x2d0dc2, _0xbeeae0) + "/" + _0xbeeae0;
            }
          }
        } else {
          if (_0x52fe9b === 2 && _0xbeeae0 > 0) {
            for (let _0x46639c = 0; _0x46639c < Math.ceil(_0xbeeae0 / 10); _0x46639c++) {
              const _0x13941c = Math.min(10, _0xbeeae0 - _0x46639c * 10);
              if (_0x13941c <= 0) {
                break;
              }
              const _0xde2f92 = {
                lotteryNumber: _0x13941c,
                newFree: true,
                type: 2
              };
              await _0x2f0462.ArtifactService.lottery(_0xde2f92);
              _0x2fac31.textContent = _0x4877ce + " " + Math.min((_0x46639c + 1) * 10, _0xbeeae0) + "/" + _0xbeeae0;
            }
          }
        }
        _0x2fac31.textContent = "✅ " + _0x4877ce + "完成";
      } else {
        if (_0x197a99 === "recruit") {
          const _0x596afa = parseInt(_0x2f3113.parentElement.querySelector("input").value);
          if (_0x596afa <= 0) {
            _0x2fac31.textContent = "ℹ️ 次数为0";
            return;
          }
          const _0x454c92 = Math.floor(_0x596afa / 10);
          const _0x2b27fb = _0x596afa % 10;
          let _0x105eb9 = 0;
          if (_0x454c92 > 0) {
            for (let _0x50f7eb = 0; _0x50f7eb < _0x454c92; _0x50f7eb++) {
              _0x2fac31.textContent = "招募 " + (_0x105eb9 + 10) + "/" + _0x596afa;
              const _0x407f65 = {
                byClub: false,
                recruitNumber: 10,
                recruitType: 1
              };
              await _0x2f0462.HeroService.recruit(_0x407f65);
              _0x105eb9 += 10;
            }
          }
          if (_0x2b27fb > 0) {
            for (let _0x3385ee = 0; _0x3385ee < _0x2b27fb; _0x3385ee++) {
              _0x2fac31.textContent = "招募 " + (_0x105eb9 + 1) + "/" + _0x596afa;
              const _0x5cd4ac = {
                byClub: false,
                recruitNumber: 1,
                recruitType: 3
              };
              await _0x2f0462.HeroService.recruit(_0x5cd4ac);
              _0x105eb9++;
              await _0x258356.delay(0.2);
            }
          }
          _0x2fac31.textContent = "✅ 招募完成";
        } else {
          if (_0x197a99.startsWith("open-box-")) {
            const _0x3743da = parseInt(_0x197a99.split("-")[2]);
            const _0x2b42e8 = parseInt(_0x2f3113.parentElement.querySelector("input").value);
            const _0x4438f5 = {
              "2001": "木质",
              "2002": "青铜",
              "2003": "黄金",
              "2004": "铂金"
            };
            const _0x4c24ec = _0x4438f5[_0x3743da];
            if (_0x2b42e8 <= 0 || _0x2b42e8 % 10 !== 0) {
              _0x258356.showtip("宝箱数量必须是10的倍数", "error");
              _0x2fac31.textContent = "❌ 数量错误";
              return;
            }
            for (let _0xcf97f4 = 0; _0xcf97f4 < _0x2b42e8 / 10; _0xcf97f4++) {
              const _0x593cb3 = {
                itemId: _0x3743da,
                number: 10
              };
              await _0x2f0462.ItemService.openBox(_0x593cb3);
              _0x2fac31.textContent = "开启" + _0x4c24ec + " " + (_0xcf97f4 + 1) * 10 + "/" + _0x2b42e8;
            }
            _0x2fac31.textContent = "✅ " + _0x4c24ec + "开启完成";
          } else {
            if (_0x197a99 === "starUp" || _0x197a99 === "bookUpgrade") {
              const _0x45049b = _0x197a99 === "starUp";
              const _0x2528b8 = _0x45049b ? _0x2f0462.HeroService : _0x2f0462.BookService;
              const _0x1c6224 = _0x45049b ? "heroUpgradeStar" : "upgrade";
              const _0x378a36 = _0x45049b ? "武将升星" : "升级图鉴";
              let _0x4353c0 = 0;
              const _0x1d91b4 = {
                length: 20
              };
              const _0x1aec87 = {
                length: 28
              };
              const _0x28e0b8 = {
                length: 14
              };
              const _0x58ebb8 = [...Array.from(_0x1d91b4, (_0x39cdba, _0x27919b) => 101 + _0x27919b), ...Array.from(_0x1aec87, (_0x2a916f, _0x2c25b3) => 201 + _0x2c25b3), ...Array.from(_0x28e0b8, (_0x1bc95b, _0x40afed) => 301 + _0x40afed)];
              for (const _0x50bea7 of _0x58ebb8) {
                for (let _0x9bea4d = 0; _0x9bea4d < 5; _0x9bea4d++) {
                  try {
                    const _0x54aa49 = {
                      heroId: _0x50bea7
                    };
                    await _0x2528b8[_0x1c6224](_0x54aa49);
                    _0x4353c0++;
                    _0x2fac31.textContent = _0x378a36 + "完成 " + _0x4353c0 + " 次";
                  } catch (_0x28c02d) {
                    break;
                  }
                }
              }
              if (!_0x45049b) {
                try {
                  await _0x2f0462.BookService.claimPointReward({});
                } catch (_0x269d13) {}
              }
              _0x2fac31.textContent = "✅ " + _0x378a36 + "完成";
            } else {
              if (_0x197a99 === "tower") {
                if (_0x1ff7ce?.["ROLE"]?.["levelId"] <= 50) {
                  _0x2fac31.textContent = "❌ 等级不足";
                  return;
                }
                await _0x2f0462.TowerService.getInfo({});
                let _0x407ac7 = 0;
                while (true) {
                  const _0x465d79 = _0x1ff7ce?.["ROLE"];
                  if (!_0x465d79 || _0x465d79.tower.energy <= 0 || _0x465d79.tower.id >= 4500) {
                    break;
                  }
                  try {
                    _0x465d79.tower.id % 10 === 0 && !_0x465d79.tower.reward[_0x465d79.tower.id / 10] && (await _0x2f0462.TowerService.claimReward({
                      rewardId: _0x465d79.tower.id / 10
                    }));
                    await _0x2f0462.FightService.startTower({});
                    _0x407ac7++;
                    _0x2fac31.textContent = "已爬" + _0x407ac7 + "层 | 体力:" + (_0x465d79.tower.energy - 1);
                  } catch (_0x4b6472) {
                    await _0x258356.delay(3);
                  }
                }
                _0x2fac31.textContent = "✅ 爬塔完成，共" + _0x407ac7 + "层";
              } else {
                if (_0x197a99 === "arena-start") {
                  const _0x2b726d = parseInt(_0x2f3113.parentElement.querySelector("input").value) || 3;
                  if (_0x2b726d < 1 || _0x2b726d > 999) {
                    _0x258356.showtip("次数需在1-999之间", "error");
                    return;
                  }
                  _0x2fac31.textContent = "⚔️ 准备开始...";
                  let _0xc8dc7d = 0;
                  for (let _0x1ccc67 = 1; _0x1ccc67 <= _0x2b726d; _0x1ccc67++) {
                    _0x2fac31.textContent = "⚔️ 正在进行 (" + _0x1ccc67 + "/" + _0x2b726d + ")";
                    try {
                      const _0x5e9643 = {
                        refresh: false
                      };
                      const _0x161ff6 = await _0x258356.sendCommand("arena_getareatarget", _0x5e9643);
                      const _0x1e8ab5 = _0x161ff6?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                      if (!_0x1e8ab5) {
                        throw new Error("未获取到目标ID");
                      }
                      const _0x34506f = {
                        battleVersion: _0x234c38,
                        targetId: _0x1e8ab5
                      };
                      await _0x258356.sendCommand("fight_startareaarena", _0x34506f);
                      _0xc8dc7d++;
                      _0x258356.showtip("第" + _0x1ccc67 + "轮战斗成功", "success");
                    } catch (_0x1790b3) {
                      _0x258356.showtip("第" + _0x1ccc67 + "轮战斗失败: " + _0x1790b3.message, "error");
                    }
                    if (_0x1ccc67 < _0x2b726d) {
                      await _0x258356.delay(0.01);
                    }
                  }
                  _0x2fac31.textContent = "✅ 完成: 总" + _0x2b726d + "轮, 成功" + _0xc8dc7d + "轮";
                } else {
                  if (_0x197a99 === "arena-winrate-battle") {
                    const _0x4d213f = parseInt(_0x2f3113.parentElement.querySelector("input").value) || 1;
                    if (_0x4d213f < 1 || _0x4d213f > 999) {
                      _0x258356.showtip("次数需在1-999之间", "error");
                      return;
                    }
                    _0x2fac31.textContent = "📊 正在获取对手胜率数据...";
                    try {
                      const _0x31cc12 = {
                        refresh: false
                      };
                      const _0x4959a9 = await _0x258356.sendCommand("arena_getareatarget", _0x31cc12);
                      const _0x344095 = _0x4959a9?.["_rawData"]?.["roleList"];
                      if (!_0x344095 || _0x344095.length === 0) {
                        throw new Error("未获取到对手列表");
                      }
                      const _0x5c718d = document.getElementById("winrate-results");
                      const _0x3f9fef = _0x5c718d ? _0x5c718d.innerHTML : "";
                      let _0xd0eafd = -1;
                      let _0x3c814f = null;
                      if (_0x3f9fef) {
                        for (const _0x10555a of _0x344095) {
                          const _0x2bd17e = _0x10555a.name || "";
                          const _0x2d707e = new RegExp(_0x2bd17e + ".*胜率：(d+(?:.d+)?)%", "i");
                          const _0xa8ce3b = _0x3f9fef.match(_0x2d707e);
                          if (_0xa8ce3b && _0xa8ce3b[1]) {
                            const _0x52778d = parseFloat(_0xa8ce3b[1]);
                            _0x52778d > _0xd0eafd && (_0xd0eafd = _0x52778d, _0x3c814f = _0x10555a.roleId);
                          }
                        }
                      }
                      !_0x3c814f && _0x344095.length > 0 && (_0x3c814f = _0x344095[0].roleId, _0x258356.showtip("未找到胜率数据，使用第一个对手", "info"));
                      if (!_0x3c814f) {
                        throw new Error("未找到合适的对手");
                      }
                      let _0x172abd = 0;
                      for (let _0x2e8a5d = 1; _0x2e8a5d <= _0x4d213f; _0x2e8a5d++) {
                        _0x2fac31.textContent = "⚔️ 正在与胜率最高对手战斗 (" + _0x2e8a5d + "/" + _0x4d213f + ")";
                        try {
                          const _0x4f665d = {
                            battleVersion: _0x234c38,
                            targetId: _0x3c814f
                          };
                          await _0x258356.sendCommand("fight_startareaarena", _0x4f665d);
                          _0x172abd++;
                          _0x258356.showtip("第" + _0x2e8a5d + "轮战斗成功", "success");
                        } catch (_0x533f93) {
                          _0x258356.showtip("第" + _0x2e8a5d + "轮战斗失败: " + _0x533f93.message, "error");
                        }
                        if (_0x2e8a5d < _0x4d213f) {
                          await _0x258356.delay(0.01);
                        }
                      }
                      _0x2fac31.textContent = "✅ 胜率战斗完成: 总" + _0x4d213f + "轮, 成功" + _0x172abd + "轮";
                    } catch (_0x43ddcc) {
                      _0x258356.showtip("胜率战斗失败: " + _0x43ddcc.message, "error");
                      _0x2fac31.textContent = "❌ 胜率战斗失败";
                    }
                  } else {
                    if (_0x197a99 === "club-boss") {
                      const _0xf6a92b = parseInt(document.getElementById("club-boss-count").textContent);
                      if (_0xf6a92b <= 0) {
                        _0x2fac31.textContent = "ℹ️ 次数为0";
                        return;
                      }
                      for (let _0x119e2f = 1; _0x119e2f <= _0xf6a92b; _0x119e2f++) {
                        _0x2fac31.textContent = "⚔️ 挑战Boss (" + _0x119e2f + "/" + _0xf6a92b + ")";
                        await _0x2f0462.FightService.startLegionBoss({});
                        await _0x258356.delay(0.5);
                      }
                      _0x2fac31.textContent = "✅ Boss挑战完成";
                    } else {
                      if (_0x197a99 === "claim-activity") {
                        _0x2fac31.textContent = "🎁 领取每日奖励...";
                        for (const _0x2d08e9 of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                          const _0x43e0a2 = {
                            taskId: _0x2d08e9
                          };
                          await _0x2f0462.TaskService.claimDailyPoint(_0x43e0a2);
                          await _0x258356.delay(0.1);
                        }
                        _0x2fac31.textContent = "🎁 领取每周奖励...";
                        const _0x50885c = {
                          rewardId: 0
                        };
                        await _0x2f0462.TaskService.claimDailyReward(_0x50885c);
                        await _0x258356.delay(0.1);
                        const _0x566449 = {
                          rewardId: 0
                        };
                        await _0x2f0462.TaskService.claimWeekReward(_0x566449);
                        _0x2fac31.textContent = "✅ 活跃奖励领取完毕";
                      } else {
                        if (_0x197a99.startsWith("daily-task-") || _0x197a99 === "execute-daily-checked" || _0x197a99 === "one-key-100") {
                          const _0x53acd4 = {
                            itemId: 2001,
                            number: 10
                          };
                          const _0x505fa3 = {
                            goodsId: 1
                          };
                          const _0x194258 = {
                            "daily-task-hangup-combined": {
                              func: async () => {
                                for (let _0x49dfc0 = 0; _0x49dfc0 < 4; _0x49dfc0++) {
                                  const _0x393cdf = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x2f0462.SystemService.myShareCallback(_0x393cdf);
                                  await _0x258356.delay(0.2);
                                }
                                for (let _0x24587c = 0; _0x24587c < 5; _0x24587c++) {
                                  await _0x2f0462.SystemService.claimHangUpReward({});
                                  if (_0x24587c < 4) {
                                    await _0x258356.delay(1);
                                  }
                                }
                                for (let _0x2422a3 = 0; _0x2422a3 < 4; _0x2422a3++) {
                                  const _0x1b0f1c = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x2f0462.SystemService.myShareCallback(_0x1b0f1c);
                                  await _0x258356.delay(0.2);
                                }
                              },
                              label: "收菜5次、加钟"
                            },
                            "daily-task-bottle-renew": {
                              func: async () => {
                                const _0x18f104 = {
                                  bottleType: -1
                                };
                                await _0x2f0462.BottleHelperService.stop(_0x18f104);
                                await _0x258356.delay(0.2);
                                const _0x5cc383 = {
                                  bottleType: -1
                                };
                                await _0x2f0462.BottleHelperService.start(_0x5cc383);
                              },
                              label: "续罐子"
                            },
                            "daily-task-bottle-claim": {
                              func: () => _0x2f0462.BottleHelperService.claim({}),
                              label: "收盐罐"
                            },
                            "daily-task-combined-quick": {
                              func: async () => {
                                const _0x5ded70 = {
                                  category: 0
                                };
                                await _0x2f0462.MailService.claimAllAttachment(_0x5ded70);
                                await _0x258356.delay(0.2);
                                await _0x2f0462.LegionService.signIn({});
                                await _0x258356.delay(0.2);
                                const _0x20c818 = {
                                  friendId: 0
                                };
                                await _0x2f0462.FriendService.batch(_0x20c818);
                                await _0x258356.delay(0.2);
                                await _0x2f0462.SystemService.signInReward({});
                                await _0x258356.delay(0.2);
                                const _0x4bd7c4 = {
                                  discountId: 1
                                };
                                await _0x2f0462.DiscountService.claimReward(_0x4bd7c4);
                                await _0x258356.delay(0.2);
                                const _0x256f88 = {
                                  cardId: 1
                                };
                                await _0x2f0462.CardService.claimReward(_0x256f88);
                                await _0x258356.delay(0.2);
                                try {
                                  await _0x258356.sendCommand("collection_claimfreereward", {});
                                  console.log("✅ 成功领取珍宝阁每日免费珍品");
                                } catch (_0x10a2f8) {
                                  console.log("领取珍宝阁免费珍品时发生错误（可能已领取）:", _0x10a2f8.message);
                                }
                                await _0x258356.delay(0.2);
                                const _0x3161b3 = {
                                  isSkipShareCard: false,
                                  type: 1
                                };
                                await _0x2f0462.SystemService.myShareCallback(_0x3161b3);
                              },
                              label: "邮件、签到、赠金币、福利、珍宝阁"
                            },
                            "daily-task-boss": {
                              func: () => {
                                const _0x34e363 = _0x258356.getFormatDate(Date.now()).getUTCDay();
                                const _0x4cbef5 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0x34e363];
                                const _0x3fc644 = {
                                  bossId: _0x4cbef5
                                };
                                return _0x2f0462.FightService.startBoss(_0x3fc644);
                              },
                              label: "每日咸王考验"
                            },
                            "daily-task-gold": {
                              func: async () => {
                                const _0x1152c6 = 6;
                                let _0xfd0c5e = 0;
                                try {
                                  console.log("[智能点金] 初始检查服务器任务状态...");
                                  const _0x238f90 = {
                                    taskId: _0x1152c6
                                  };
                                  const _0x1a9c4b = await _0x258356.sendCommand("task_claimdailypoint", _0x238f90);
                                  if (_0x1a9c4b?.["code"] === 700020 || _0x1a9c4b?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x1152c6.toString())) {
                                    console.log("[智能点金] 任务已完成，无需执行");
                                    return;
                                  }
                                  console.log("[智能点金] 开始智能点金，每次执行前检查任务状态...");
                                  while (_0xfd0c5e < 3) {
                                    const _0x724156 = {
                                      taskId: _0x1152c6
                                    };
                                    const _0xa00566 = await _0x258356.sendCommand("task_claimdailypoint", _0x724156);
                                    if (_0xa00566?.["code"] === 700020 || _0xa00566?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x1152c6.toString())) {
                                      console.log("[智能点金] 任务已完成，已执行" + _0xfd0c5e + "次点金，停止继续操作");
                                      break;
                                    }
                                    console.log("[智能点金] 执行第" + (_0xfd0c5e + 1) + "/3次点金");
                                    try {
                                      const _0x4d895b = {
                                        buyNum: 1
                                      };
                                      await _0x2f0462.SystemService.buyGold(_0x4d895b);
                                      _0xfd0c5e++;
                                      console.log("[智能点金] 第" + _0xfd0c5e + "次点金执行成功");
                                    } catch (_0x1a4e39) {
                                      console.error("[智能点金] 第" + (_0xfd0c5e + 1) + "次点金执行失败:", _0x1a4e39.message);
                                      if (_0x1a4e39.message?.["includes"]("钻石") || _0x1a4e39.message?.["includes"]("付费")) {
                                        console.log("[智能点金] 检测到付费错误，停止继续操作");
                                        break;
                                      }
                                    }
                                    await _0x258356.delay(1);
                                  }
                                  console.log("[智能点金] 智能点金完成，共执行" + _0xfd0c5e + "次点金操作");
                                } catch (_0x4df31f) {
                                  console.error("[智能点金] 点金过程中发生异常:", _0x4df31f.message);
                                }
                              },
                              label: "点金三次"
                            },
                            "daily-task-quiz": {
                              func: async () => {
                                const _0x6a16fa = await _0x2f0462.StudyService.startGame({});
                                const _0x24d576 = _0x6a16fa.getData();
                                for (let _0x321aa3 = 0; _0x321aa3 < _0x24d576.questionList.length; _0x321aa3++) {
                                  const _0x423e74 = _0x24d576.questionList[_0x321aa3];
                                  let _0x4608e4 = _0x116ba5[_0x423e74.question] || Math.floor(2 * Math.random()) + 1;
                                  const _0xc108e8 = {
                                    id: _0x24d576.role.study.id,
                                    option: [_0x4608e4],
                                    questionId: [_0x423e74.id]
                                  };
                                  await _0x2f0462.StudyService.answer(_0xc108e8);
                                  await _0x258356.delay(1);
                                }
                                for (let _0x594755 = 1; _0x594755 <= 10; _0x594755++) {
                                  const _0x52842b = {
                                    rewardId: _0x594755
                                  };
                                  await _0x2f0462.StudyService.claimReward(_0x52842b);
                                  await _0x258356.delay(0.2);
                                }
                              },
                              label: "自动答题"
                            },
                            "daily-task-genie-tickets": {
                              func: async () => {
                                for (let _0x4c861d = 0; _0x4c861d < 3; _0x4c861d++) {
                                  await _0x258356.sendCommand("genie_buysweep", {});
                                  await _0x258356.delay(0.2);
                                }
                              },
                              label: "领取扫荡券"
                            },
                            "daily-task-genie-sweep": {
                              func: async _0x1e3e79 => {
                                if (_0x1e3e79) {
                                  _0x1e3e79.textContent = "🔄 同步服务器数据...";
                                }
                                await _0x258356.sendCommand("System_GetTime", {});
                                await _0x258356.delay(1);
                                const _0x29f913 = window.__require("ServerData");
                                if (!_0x29f913 || !_0x29f913.ROLE || !_0x29f913.ROLE.statisticsTime) {
                                  throw new Error("无法访问 ServerData.ROLE.statisticsTime 对象");
                                }
                                let _0x5ab59d = _0x29f913.ROLE.statisticsTime;
                                try {
                                  _0x5ab59d = JSON.parse(JSON.stringify(_0x5ab59d));
                                } catch (_0x8c3c20) {
                                  console.warn("[灯神扫荡] 警告：无法将 statisticsTime 转换为标准 JSON 对象。尝试直接访问。", _0x8c3c20);
                                }
                                const _0x19dec9 = {
                                  "1": "魏国",
                                  "2": "蜀国",
                                  "3": "吴国",
                                  "4": "群雄"
                                };
                                let _0x4b86d7 = 0;
                                let _0x4c3add = 0;
                                let _0x253b4e = true;
                                for (let _0x5de3f5 = 1; _0x5de3f5 <= 4; _0x5de3f5++) {
                                  const _0x49d4bb = "genie:daily:free:" + _0x5de3f5;
                                  const _0x4d31f2 = _0x5ab59d[_0x49d4bb];
                                  const _0x1df0b6 = _0x3ca984 => {
                                    if (typeof _0x3ca984 !== "number" || isNaN(_0x3ca984) || _0x3ca984 <= 0) {
                                      return false;
                                    }
                                    const _0x40ee77 = new Date(_0x3ca984 * 1000);
                                    const _0x3ca1ba = new Date();
                                    return _0x40ee77.getFullYear() === _0x3ca1ba.getFullYear() && _0x40ee77.getMonth() === _0x3ca1ba.getMonth() && _0x40ee77.getDate() === _0x3ca1ba.getDate();
                                  };
                                  if (!_0x1df0b6(_0x4d31f2)) {
                                    _0x253b4e = false;
                                    break;
                                  }
                                }
                                if (_0x253b4e) {
                                  if (_0x1e3e79) {
                                    _0x1e3e79.textContent = "✅ 今日已完成灯神扫荡，本次跳过。";
                                  }
                                  return;
                                }
                                for (let _0x5d93c = 1; _0x5d93c <= 4; _0x5d93c++) {
                                  const _0x276a66 = _0x19dec9[_0x5d93c];
                                  const _0x497c12 = "genie:daily:free:" + _0x5d93c;
                                  await _0x258356.delay(0.3);
                                  if (_0x1e3e79) {
                                    _0x1e3e79.textContent = "🔄 检查 " + _0x276a66 + " 状态...";
                                  }
                                  const _0x30d9d1 = _0x5ab59d[_0x497c12];
                                  const _0x45b43b = _0x52fad3 => {
                                    if (typeof _0x52fad3 !== "number" || isNaN(_0x52fad3) || _0x52fad3 <= 0) {
                                      return false;
                                    }
                                    const _0xdb43a7 = new Date(_0x52fad3 * 1000);
                                    const _0x5355dc = new Date();
                                    return _0xdb43a7.getFullYear() === _0x5355dc.getFullYear() && _0xdb43a7.getMonth() === _0x5355dc.getMonth() && _0xdb43a7.getDate() === _0x5355dc.getDate();
                                  };
                                  if (!_0x45b43b(_0x30d9d1)) {
                                    if (_0x1e3e79) {
                                      _0x1e3e79.textContent = "🚀 执行 " + _0x276a66 + " 免费扫荡...";
                                    }
                                    try {
                                      const _0x4e6251 = {
                                        genieId: _0x5d93c,
                                        sweepCnt: 1
                                      };
                                      const _0x1eaf64 = await _0x258356.sendCommand("genie_sweep", _0x4e6251);
                                      if (_0x1eaf64.code === 0) {
                                        _0x4b86d7++;
                                        if (_0x1e3e79) {
                                          _0x1e3e79.textContent = "✅ 已成功扫荡 " + _0x276a66 + "。";
                                        }
                                        await _0x258356.delay(1);
                                      } else {
                                        const _0x2252b5 = _0x1eaf64.msg || "未知错误 (Code: " + _0x1eaf64.code + ")";
                                        if (_0x1e3e79) {
                                          _0x1e3e79.textContent = "❌ " + _0x276a66 + " 扫荡失败: " + _0x2252b5;
                                        }
                                        await _0x258356.delay(1);
                                      }
                                    } catch (_0x507fe7) {
                                      if (_0x1e3e79) {
                                        _0x1e3e79.textContent = "❌ " + _0x276a66 + " 扫荡异常: " + _0x507fe7.message;
                                      }
                                      await _0x258356.delay(1);
                                    }
                                  } else {
                                    _0x4c3add++;
                                  }
                                }
                              },
                              label: "灯神扫荡"
                            },
                            "daily-task-free-key": {
                              func: async () => {
                                try {
                                  const _0x2ae1db = {
                                    actType: 1
                                  };
                                  await _0x258356.sendCommand("mergebox_claimfreeenergy", _0x2ae1db);
                                  console.log("领取免费钥匙成功");
                                } catch (_0x69fff8) {
                                  console.log("领取免费钥匙失败(可能已领取):", _0x69fff8.message);
                                }
                              },
                              label: "领取免费钥匙"
                            },
                            "daily-task-box": {
                              func: () => _0x2f0462.ItemService.openBox(_0x53acd4),
                              label: "开启10木箱"
                            },
                            "daily-task-recruit": {
                              func: async () => {
                                const _0x1ec514 = 4;
                                let _0x33e5a6 = false;
                                try {
                                  console.log("[智能招募] 检查服务器任务状态...");
                                  const _0x2ad73e = {
                                    taskId: _0x1ec514
                                  };
                                  const _0x1e2f51 = await _0x258356.sendCommand("task_claimdailypoint", _0x2ad73e);
                                  if (_0x1e2f51?.["code"] === 700020 || _0x1e2f51?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x1ec514.toString())) {
                                    console.log("[智能招募] 任务已完成，无需执行");
                                    return;
                                  }
                                  _0x33e5a6 = true;
                                } catch (_0xa1c376) {
                                  _0x33e5a6 = true;
                                }
                                if (_0x33e5a6) {
                                  console.log("[智能招募] 任务未完成，开始招募...");
                                  const _0x661829 = window.__require?.("ServerData");
                                  const _0x1123aa = _0x661829?.["ROLE"]?.["statisticsTime"]?.["recruit:one:free"] || 0;
                                  const _0x1423e4 = _0x454f6d => {
                                    if (!_0x454f6d) {
                                      return false;
                                    }
                                    const _0x5dceee = new Date(_0x454f6d * 1000);
                                    const _0x32350d = new Date();
                                    return _0x5dceee.getFullYear() === _0x32350d.getFullYear() && _0x5dceee.getMonth() === _0x32350d.getMonth() && _0x5dceee.getDate() === _0x32350d.getDate();
                                  };
                                  const _0x4a6b94 = _0x1423e4(_0x1123aa);
                                  if (_0x4a6b94) {
                                    console.log("[智能招募] 免费次数已用，执行1次付费单抽");
                                    const _0x583a62 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x258356.sendCommand("hero_recruit", _0x583a62);
                                  } else {
                                    console.log("[智能招募] 免费次数未用，执行1免+1付");
                                    const _0x203cfd = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 3
                                    };
                                    await _0x258356.sendCommand("hero_recruit", _0x203cfd);
                                    await _0x258356.delay(0.2);
                                    const _0x1c8421 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x258356.sendCommand("hero_recruit", _0x1c8421);
                                  }
                                }
                              },
                              label: "执行2次招募"
                            },
                            "daily-task-arena": {
                              func: () => {
                                return new Promise(async _0x54085f => {
                                  console.log("正在进行3次竞技场战斗...");
                                  try {
                                    console.log("正在进入竞技场...");
                                    await _0x258356.sendCommand("arena_startarea", {});
                                    await _0x258356.delay(1);
                                    console.log("已成功进入竞技场");
                                  } catch (_0x3c6d46) {
                                    console.log("进入竞技场失败，但继续尝试战斗:", _0x3c6d46);
                                  }
                                  let _0x4d5b39 = 0;
                                  for (let _0x3e167f = 1; _0x3e167f <= 3; _0x3e167f++) {
                                    try {
                                      const _0x4b6a14 = {
                                        refresh: false
                                      };
                                      const _0x4c0f53 = await _0x258356.sendCommand("arena_getareatarget", _0x4b6a14);
                                      const _0x1e844a = _0x4c0f53?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                                      if (!_0x1e844a) {
                                        console.log("竞技场战斗 " + _0x3e167f + "/3 失败: 未获取到目标ID");
                                        continue;
                                      }
                                      const _0x4cfa6e = {
                                        battleVersion: _0x234c38,
                                        targetId: _0x1e844a
                                      };
                                      await _0x258356.sendCommand("fight_startareaarena", _0x4cfa6e);
                                      _0x4d5b39++;
                                      console.log("竞技场战斗 " + _0x3e167f + "/3 成功");
                                    } catch (_0x1e6b36) {
                                      console.log("竞技场战斗 " + _0x3e167f + "/3 失败:", _0x1e6b36.message);
                                    }
                                    await _0x258356.delay(0.1);
                                  }
                                  console.log("竞技场战斗完成: 总3轮, 成功" + _0x4d5b39 + "轮");
                                  _0x54085f();
                                });
                              },
                              label: "进行3次竞技场战斗"
                            },
                            "daily-task-buy-bronze-box": {
                              func: () => _0x258356.sendCommand("store_buy", _0x505fa3),
                              label: "购买青铜宝箱"
                            }
                          };
                          let _0x3a97ab = [];
                          if (_0x197a99 === "one-key-100") {
                            _0x3a97ab = _0xe754e4.filter(_0xd5e7 => _0xd5e7.task !== "daily-task-quiz").map(_0x2f5fa5 => _0x194258[_0x2f5fa5.task]);
                            _0x3a97ab.push({
                              func: async _0x386c62 => {
                                const _0x467ef4 = window.__require?.("data-index");
                                if (!_0x467ef4) {
                                  console.error("无法访问 iso 对象");
                                  return;
                                }
                                const _0x512020 = 1;
                                const _0x3a01ea = "普通钓鱼";
                                const _0x401b80 = 3;
                                if (_0x386c62) {
                                  _0x386c62.textContent = "🎣 开始执行" + _0x3a01ea + "...";
                                }
                                let _0x1a06c8 = 0;
                                for (let _0x3fd59b = 0; _0x3fd59b < _0x401b80; _0x3fd59b++) {
                                  try {
                                    const _0x4a01bc = {
                                      lotteryNumber: 1,
                                      newFree: true,
                                      type: _0x512020
                                    };
                                    await _0x467ef4.ArtifactService.lottery(_0x4a01bc);
                                    _0x1a06c8++;
                                    if (_0x386c62) {
                                      _0x386c62.textContent = "🎣 " + _0x3a01ea + " " + _0x1a06c8 + "/" + _0x401b80;
                                    }
                                    await _0x258356.delay(0.2);
                                  } catch (_0x1e0f13) {
                                    console.log("单次" + _0x3a01ea + "尝试失败（正常现象）:", _0x1e0f13.message);
                                  }
                                }
                                if (_0x386c62) {
                                  _0x386c62.textContent = "🎣 已完成" + _0x401b80 + "次" + _0x3a01ea;
                                }
                              },
                              label: "3次免费钓鱼"
                            });
                          } else {
                            const _0x480256 = _0x197a99.startsWith("daily-task-") ? _0x197a99 : null;
                            if (_0x480256) {
                              if (_0x194258[_0x480256]) {
                                _0x3a97ab.push(_0x194258[_0x480256]);
                              }
                            } else {
                              _0x2b6210.querySelectorAll("input[type=\"checkbox\"]:checked").forEach(_0x3a8ce3 => {
                                const _0x399c15 = _0x3a8ce3.dataset.taskName;
                                if (_0x194258[_0x399c15]) {
                                  _0x3a97ab.push(_0x194258[_0x399c15]);
                                }
                              });
                            }
                          }
                          if (_0x3a97ab.length === 0) {
                            _0x2fac31.textContent = "ℹ️ 没有可执行任务";
                            return;
                          }
                          _0x197a99.startsWith("daily-task-") && (_0x2fc08b = false);
                          if (_0x197a99 === "one-key-100") {
                            const _0x414dc8 = _0x3a97ab.filter(_0x569df1 => _0x569df1.label !== "收菜5次、加钟");
                            for (let _0x12c930 = 0; _0x12c930 < _0x414dc8.length; _0x12c930++) {
                              const _0x527fe2 = _0x414dc8[_0x12c930];
                              _0x2fac31.textContent = "🔄 (" + (_0x12c930 + 1) + "/" + _0x414dc8.length + ") " + _0x527fe2.label + "...";
                              try {
                                await _0x527fe2.func();
                                await _0x258356.delay(0.5);
                              } catch (_0x341031) {
                                console.log("任务 " + _0x527fe2.label + " 失败:", _0x341031);
                              }
                            }
                            const _0x57222a = {
                              func: () => _0x2f0462.SystemService.claimHangUpReward({}),
                              label: "单次收菜"
                            };
                            for (let _0x2a12fe = 0; _0x2a12fe < 5; _0x2a12fe++) {
                              _0x2fac31.textContent = "🥬 收菜 (" + (_0x2a12fe + 1) + "/5)，等待1s...";
                              await _0x57222a.func();
                              if (_0x2a12fe < 4) {
                                await _0x258356.delay(1);
                              }
                            }
                            _0x2fac31.textContent = "🔄 正在加钟...";
                            for (let _0x20932e = 0; _0x20932e < 4; _0x20932e++) {
                              const _0x16eabd = {
                                isSkipShareCard: true,
                                type: 2
                              };
                              await _0x2f0462.SystemService.myShareCallback(_0x16eabd);
                              await _0x258356.delay(0.2);
                            }
                            _0x2fac31.textContent = "🎁 领取活跃奖励...";
                            await _0x310a3d("claim-activity", _0x2f3113);
                          } else {
                            for (let _0x522646 = 0; _0x522646 < _0x3a97ab.length; _0x522646++) {
                              const _0x2c0b18 = _0x3a97ab[_0x522646];
                              if (_0x2c0b18.label === "灯神扫荡" && _0x2fc08b) {
                                continue;
                              }
                              _0x2fac31.textContent = "🔄 (" + (_0x522646 + 1) + "/" + _0x3a97ab.length + ") " + _0x2c0b18.label + "...";
                              try {
                                _0x2c0b18.label === "灯神扫荡" ? (await _0x2c0b18.func(_0x2fac31), _0x3a97ab.length > 1 && (_0x2fc08b = true)) : await _0x2c0b18.func();
                                await _0x258356.delay(0.5);
                              } catch (_0xe7d9a2) {
                                console.log("任务 " + _0x2c0b18.label + " 失败 (可能已完成):", _0xe7d9a2);
                              }
                            }
                          }
                          _0x2fac31.textContent = "✅ " + (_0x197a99 === "one-key-100" ? "100活跃度任务" : "任务") + "执行完毕";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x268412) {
      console.error("任务执行错误:", _0x268412);
      _0x2fac31.textContent = "❌ 执行出错!";
    } finally {
      (_0x197a99 === "execute-daily-checked" || _0x197a99 === "one-key-100") && (_0x1f0ddd = false, _0x543b3a.forEach(_0xe8f2f0 => _0xe8f2f0.disabled = false));
      _0x2f3113.disabled = false;
      _0x2f3113.textContent = _0x606a71;
    }
  }
  function _0x4a1351(_0x10c2dc, _0x39d807) {
    if (_0x10c2dc === "collectionUpgrade") {
      const _0x5d6d12 = _0x39d807.textContent;
      _0x39d807.disabled = true;
      _0x39d807.textContent = "处理中...";
      _0x43be97(_0x39d807).catch(_0x93340 => {
        console.error("藏品图鉴升级错误:", _0x93340);
        _0x39d807.textContent = "❌ 执行出错!";
      }).finally(() => {
        setTimeout(() => {
          _0x39d807.disabled = false;
          _0x39d807.textContent = _0x5d6d12;
        }, 1000);
      });
      return true;
    }
    return false;
  }
  function _0x31b8a9(_0xf07f32) {
    if (_0xf07f32 === "treasure-assist") {
      TreasureAssistModule.handleMainButtonClick();
      return true;
    }
    return false;
  }
  function _0x4ee337(_0x5aef48) {
    if (_0x5aef48 === "arena-winrate") {
      _0x3aa451.handleMainButtonClick();
      return true;
    }
    return false;
  }
  _0x531aad.addEventListener("click", _0x38b335 => {
    const _0x27bacd = _0x38b335.target.closest(".task-btn");
    if (_0x27bacd?.["dataset"]["task"]) {
      if (_0x4a1351(_0x27bacd.dataset.task, _0x27bacd)) {
        return;
      }
      if (_0x31b8a9(_0x27bacd.dataset.task)) {
        return;
      }
      if (_0x4ee337(_0x27bacd.dataset.task)) {
        return;
      }
      _0x310a3d(_0x27bacd.dataset.task, _0x27bacd);
    }
  });
  _0x148476(() => {
    setTimeout(() => {
      _0x3aa451.init();
      _0x6789ec.init();
      _0x30d20b.init();
      _0x1bf649.init();
      console.log("🎮 鲸鱼之王 (v" + _0x18b040 + ") UI加载完成，等待WebSocket...");
      _0x4937ed(() => {
        _0x43acb8.init();
        console.log("🎮 鲸鱼之王 (v" + _0x18b040 + ") 完全加载完成！");
      });
    }, 500);
  });
})();