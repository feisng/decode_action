//Sat Nov 29 2025 08:29:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x4338ab = "7.6.7";
  let _0x4656dc = null;
  function _0x272f69(_0x344f0d) {
    {
      if (typeof _0x344f0d !== "object" || _0x344f0d === null) {
        {
          return null;
        }
      }
      if (_0x344f0d.battleVersion !== undefined) {
        {
          return _0x344f0d.battleVersion;
        }
      }
      for (const _0x3ddf60 in _0x344f0d) {
        {
          if (_0x344f0d.hasOwnProperty(_0x3ddf60)) {
            {
              const _0x1c2c1e = _0x272f69(_0x344f0d[_0x3ddf60]);
              if (_0x1c2c1e !== null) {
                {
                  return _0x1c2c1e;
                }
              }
            }
          }
        }
      }
      return null;
    }
  }
  function _0x50de94() {
    {
      return new Promise((_0x2bd3ea, _0x5d466e) => {
        {
          const _0x4cbdd5 = new XMLHttpRequest();
          _0x4cbdd5.open("POST", "https://xxz-xyzw.hortorgames.com/login/manifest?platform=hortor", true);
          _0x4cbdd5.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          _0x4cbdd5.setRequestHeader("Accept", "application/json, text/plain, */*");
          _0x4cbdd5.onload = function () {
            {
              if (_0x4cbdd5.status === 200) {
                {
                  try {
                    {
                      const _0x48fcc6 = JSON.parse(_0x4cbdd5.responseText);
                      let _0x415862 = null;
                      if (_0x48fcc6.battleVersion) {
                        {
                          _0x415862 = _0x48fcc6.battleVersion;
                        }
                      } else {
                        if (_0x48fcc6.data && _0x48fcc6.data.battleVersion) {
                          {
                            _0x415862 = _0x48fcc6.data.battleVersion;
                          }
                        } else {
                          _0x48fcc6.result && _0x48fcc6.result.battleVersion ? _0x415862 = _0x48fcc6.result.battleVersion : _0x415862 = _0x272f69(_0x48fcc6);
                        }
                      }
                      if (_0x415862) {
                        {
                          _0x4656dc = _0x415862;
                          console.log("成功获取最新battleVersion:", _0x4656dc);
                          _0x2bd3ea(_0x4656dc);
                        }
                      } else {
                        {
                          console.error("严重错误：未能获取battleVersion！");
                          _0x2bd3ea(null);
                        }
                      }
                    }
                  } catch (_0x13fe5f) {
                    {
                      console.error("解析battleVersion失败:", _0x13fe5f);
                      _0x2bd3ea(null);
                    }
                  }
                }
              } else {
                {
                  console.error("获取battleVersion请求失败！状态码:", _0x4cbdd5.status);
                  _0x2bd3ea(null);
                }
              }
            }
          };
          _0x4cbdd5.onerror = function () {
            {
              console.error("获取battleVersion网络错误！");
              _0x2bd3ea(null);
            }
          };
          _0x4cbdd5.timeout = 10000;
          _0x4cbdd5.ontimeout = function () {
            {
              console.error("获取battleVersion超时！");
              _0x2bd3ea(null);
            }
          };
          _0x4cbdd5.send("");
        }
      });
    }
  }
  _0x50de94();
  const _0x59f192 = document.createElement("style");
  _0x59f192.textContent = "\n        :root {\n            --panel-bg: rgba(247, 250, 252, 0.98);\n            --glass-border: rgba(0, 0, 0, 0.1);\n            --highlight: #3182ce; --text-primary: #2d3748; --text-secondary: #718096;\n            --item-bg: #ffffff; --item-border: #e2e8f0;\n            --success: #38a169; --error: #e53e3e;\n        }\n\n        /* 主面板 */\n        .xianxia-panel {\n            color-scheme: light !important;\n            background: transparent !important;\n            color: var(--text-primary) !important;\n            position:fixed;top:10px;backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:12px;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.1);transition:all .3s ease;overflow:hidden;\n        }\n        .xianxia-panel::before {\n            content: '';\n            position: absolute;\n            top: 0; left: 0;\n            width: 100%; height: 100%;\n            background: var(--panel-bg) !important;\n            z-index: -1;\n            border-radius: 12px;\n        }\n\n        .xianxia-panel.collapse{width:44px;height:44px;right:10px;min-height:auto;display:flex;align-items:center;justify-content:center;border-radius:50%;}\n        .xianxia-panel.expanded{width:90vw;max-width:520px;right:5vw;max-height:92vh;display:flex;flex-direction:column;}\n        \n        .panel-header{background:rgba(0,0,0,0.02) !important;cursor:pointer;display:flex !important;align-items:center !important;padding:10px 15px !important;flex-shrink:0;width:100%;box-sizing:border-box !important;transition:background .2s ease; position: relative; z-index: 1;}\n        .xianxia-panel.expanded .panel-header { justify-content:flex-start !important; }\n        .xianxia-panel.collapse .panel-header { \n            justify-content: center !important; \n            align-items: center !important;\n            padding: 0 !important; /* 移除折叠状态下的内边距 */\n            height: 100%; /* 确保头部占满整个折叠面板 */\n        }\n\n        .panel-title{flex-grow: 1; font-weight:600;font-size:16px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:15px !important; color: var(--text-primary) !important;}\n        .panel-icon{font-size:22px;line-height:1;width:100%;text-align:center;display:flex;align-items:center;justify-content:center;}\n        .xianxia-panel.expanded .panel-icon { display: none; }\n        .xianxia-panel.collapse .panel-title, .xianxia-panel.collapse .opacity-control { display: none; }\n        .opacity-control{display:flex;align-items:center;gap:8px;flex-shrink:0;}\n        .opacity-control label{font-size:12px;color:var(--text-secondary) !important;white-space:nowrap;}\n        .opacity-control input{width:90px;height:4px;-webkit-appearance:none;background:rgba(0,0,0,.1);border-radius:2px;outline:none;transition:background .2s;}\n        .opacity-control input:hover{background:rgba(0,0,0,.2);}\n        .opacity-control input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--text-primary);cursor:pointer;}\n        .opacity-value{font-size:12px;color:var(--text-primary) !important;min-width:40px;text-align:left;}\n        \n        .panel-content{padding:10px 0 0 0;display:none;overflow-y:auto;max-height:calc(92vh - 74px); position: relative; z-index: 1;}.expanded .panel-content{display:block}\n        .tab-nav{display:flex;padding:0 5px;margin-bottom:8px;border-bottom:1px solid var(--item-border) !important;}\n        .tab-btn{flex:1;padding:7px 4px;border:none;background:transparent;color:var(--text-secondary) !important;cursor:pointer;font-size:12px;font-weight:600;transition: color .2s ease, border-color .2s ease;border-bottom:3px solid transparent; text-align:center;}\n        .tab-btn:hover{color:var(--text-primary) !important;}\n        .tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;}\n        .tab-pane{display:none; padding:0 10px 10px 10px;}\n        .tab-pane.active{display:block;animation:fadeIn .3s;}\n        @keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}\n        .sub-nav{display:flex;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--item-border) !important; flex-wrap: wrap;}\n        .sub-tab-btn{font-size:11px;padding:2px 0;color:var(--text-secondary) !important;background:transparent;border:none;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s ease;}\n        .sub-tab-btn:hover{color:var(--text-primary) !important;}\n        .sub-tab-btn.active{color:var(--highlight) !important;border-bottom-color:var(--highlight) !important;font-weight:500;}\n.module-content{display:none;}\n.module-content.active{display:block;}\n        .sub-pane{display:none;}\n        .sub-pane.active{display:block;}\n\n        .task-section{background:var(--item-bg) !important;border:1px solid var(--item-border) !important; margin:0;padding:10px;border-radius:7px;}\n        .task-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}\n        .task-header h4{margin:0;color:var(--highlight) !important;font-size:13px;font-weight:600;display:flex;align-items:center;gap:5px;}\n        .status{font-size:10px;color:var(--highlight) !important;background:rgba(49,130,206,.1) !important;padding:3px 5px;border-radius:3px;}\n        .task-row {display:flex;align-items:center;gap:7px;margin-bottom:7px;}\n        .task-row:last-child {margin-bottom:0;}\n        .task-row .task-label {width:55px;font-size:12px;color:var(--text-secondary) !important;flex-shrink:0; text-align:right; padding-right:4px;}\n        .task-row input {width:70px;flex-grow:0;}\n        .task-row .task-btn {flex:1;}\n        .task-btn{display:block;width:100%;margin:0;padding:8px 10px;background:rgba(49,130,206,0.1) !important;border:1px solid rgba(49,130,206,0.2) !important;border-radius:6px;color:var(--highlight) !important;font-weight:600;cursor:pointer;font-size:12px;transition: all .2s ease;}\n        .task-btn:hover{background:rgba(49,130,206,0.15) !important;}\n        .task-btn:disabled{background:rgba(0,0,0,0.05) !important;border-color:transparent !important;color:#ccc !important;cursor:not-allowed;transform:none;box-shadow:none;}\n        .task-btn.stop{background:rgba(229, 62, 62, 0.1) !important;border:1px solid rgba(229, 62, 62, 0.2) !important;color:var(--error) !important;}\n        .task-btn.stop:hover{background:rgba(229, 62, 62, 0.15) !important;}\n        /* 英雄选择按钮选中状态 */\n        .hero-item-selected{background:rgba(49,130,206,0.4) !important;border:2px solid rgba(49,130,206,0.8) !important;color:#ffffff !important;text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;font-weight:bold !important;}\n        .task-row input{border:1px solid var(--item-border) !important;background:rgba(0,0,0,.02) !important;color:var(--text-primary) !important;padding:8px 10px;border-radius:6px;font-size:12px;min-width:0; text-align:center;}\n        .other-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px}.other-btn{padding:8px;font-size:12px}\n        \n        .count-selector{display:flex;align-items:center;justify-content:center;gap:10px;}\n        .count-selector .task-btn{flex:0 0 30px; padding: 5px; font-size: 16px; line-height: 1;}\n        .count-selector .count-display{font-size:14px;font-weight:600;color:var(--text-primary) !important;width:40px;text-align:center;}\n\n        .daily-task-list{border-top: 1px solid var(--item-border) !important; padding-top: 10px;}\n        .main-action-buttons{margin-top:8px !important; display:flex !important; flex-wrap:nowrap !important; gap:4px !important; width:100% !important;}\n        .main-action-buttons > button{flex:1 !important; flex-basis:33.333% !important; padding:6px 4px !important; font-size:12px !important; margin:0 !important; height:34px !important; min-height:34px !important; box-sizing:border-box !important; border-radius:4px !important; display:flex !important; align-items:center !important; justify-content:center !important; white-space:nowrap !important; overflow:hidden !important; text-overflow:ellipsis !important;}\n        .main-action-buttons > button[data-task=\"one-key-100\"]{color:#ff6b6b !important; font-weight:bold !important;}\n        .daily-task-item{display:flex;align-items:center;margin-bottom:4px;}\n        .daily-task-item:last-child{margin-bottom:0;}\n        .daily-task-info{display:flex; align-items:center; flex-grow:1;}\n        .daily-task-item input[type=\"checkbox\"]{margin-right:7px;width:15px;height:15px;accent-color:var(--highlight);}\n        .daily-task-item label{font-size:11px;color:var(--text-secondary) !important;}\n        .daily-task-item .task-btn{flex-shrink:0;width:65px;padding:3px 5px;font-size:10px;}\n        \n        .car-data-container, .ws-log-container{margin:0;border:none;background:transparent;}\n        .car-data-table{width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed;} /* 固定表格布局，确保列宽可控 */\n        .car-data-table th{background:rgba(0,0,0,.02) !important;border:1px solid var(--item-border) !important; padding: 5px 3px; font-size:11px; color: var(--text-secondary) !important;}\n        /* 为各列设置百分比宽度 */\n         .car-data-table th:nth-child(1), .car-data-table td:nth-child(1){width: 11%;} /* 车位列宽度 */\n         .car-data-table th:nth-child(2), .car-data-table td:nth-child(2){width: 11%;} /* 品质列宽度 */\n         .car-data-table th:nth-child(3), .car-data-table td:nth-child(3){width: 18%;} /* 主要奖励列宽度 */\n         .car-data-table th:nth-child(4), .car-data-table td:nth-child(4){width: 24%;} /* 状态列宽度 */\n         .car-data-table th:nth-child(5), .car-data-table td:nth-child(5){width: 36%;} /* 操作列宽度 */\n        .car-data-table td{border:1px solid var(--item-border) !important;color:var(--text-secondary) !important;padding:2px 2px;vertical-align:middle; text-align:center; min-height: 20px;} /* 进一步减少内边距 */\n        .car-rewards{color: var(--text-primary) !important;line-height:1.2em; text-align:left; padding: 1px 0 1px 5px !important; font-size: 10px;} /* 增加行高确保文字完整显示 */\n        .car-rewards span{display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 0 3px 0; padding: 0; width: 100%; box-sizing: border-box; font-size: 10px; line-height: 1.2;} /* 增加行高确保文字完整显示，底部留出1px间距 */\n        .car-rewards span.highlight-reward{color:#e53e3e;} /* 高亮重要奖励 */\n        .car-action-btn{font-size:10px;margin:0 2px 0 0;display:inline-block;width:38px;border-radius:4px; padding:2px 0; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.1); color: var(--text-secondary); }\n        .car-action-btn:hover{background:rgba(0,0,0,0.1);}\n        .car-action-btn.send{background:rgba(76, 175, 80, .1);border-color:rgba(76, 175, 80, .2); color: #2f6f44;}\n        .car-action-btn.claim{background:rgba(255, 152, 0, .1);border-color:rgba(255, 152, 0, .2); color: #b95f00;}\n        .car-action-btn.is-disabled{background:rgba(0,0,0,0.04) !important; border-color:transparent !important; color:#ccc !important; transform: none; box-shadow: none;}\n        .pity-counter.mythic-guaranteed{color:#e53e3e;font-weight:bold;}\n        \n        /* 胜率测试相关样式 */\n        .winrate-result-item { margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px dotted var(--item-border); line-height: 1.3; }\n        .winrate-result-item:last-child { border-bottom: none; }\n        .winrate-win { color: var(--success); font-weight: bold; }\n        .winrate-loss { color: var(--error); font-weight: bold; }\n        .winrate-opponent-placeholder { color: var(--text-secondary); }\n\n        #ws-monitor-module .other-buttons { margin-top: 10px; }\n        .ws-log-container { max-height: 55vh; overflow-y: auto; background: rgba(0,0,0,0.02) !important; border-radius: 8px; padding: 10px; border: 1px solid var(--item-border) !important; margin-top: 10px; }\n        .ws-log-entry { position: relative; font-family: 'Courier New', Courier, monospace; font-size: 11px; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid transparent; word-break: break-all; }\n        .ws-log-entry .log-header { font-weight: bold; margin-bottom: 4px; color: inherit !important; }\n        .ws-log-entry .log-header.send { color: var(--success) !important; }\n        .ws-log-entry.send { border-color: rgba(56, 161, 105, 0.2) !important; background: rgba(56, 161, 105, 0.05) !important; }\n        .ws-log-entry .log-header.receive { color: var(--highlight) !important; }\n        .ws-log-entry.receive { border-color: rgba(49, 130, 206, 0.2) !important; background: rgba(49, 130, 206, 0.05) !important; }\n        .ws-log-entry .log-time { font-size: 10px; color: var(--text-secondary) !important; margin-left: 8px; }\n        .ws-log-content { white-space: pre-wrap; color: var(--text-primary) !important; }\n        .ws-log-content.collapsed { max-height: 2.5em; overflow: hidden; text-overflow: ellipsis; position: relative; padding-right: 50px; }\n        .log-actions { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; }\n        .log-actions button { font-size: 10px; padding: 2px 5px; border-radius: 4px; background: rgba(0,0,0,0.08) !important; border: none !important; color: var(--text-secondary) !important; cursor: pointer; }\n        .log-actions button:hover { background: rgba(0,0,0,0.15) !important; color: var(--text-primary) !important; }\n        \n        .gvh-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--item-bg);backdrop-filter:blur(5px);border:1px solid var(--item-border);color:var(--text-primary);padding:10px 20px;border-radius:8px;font-size:13px;z-index:10001;box-shadow:0 4px 20px rgba(0,0,0,.1);animation:gvh-slideIn .3s,gvh-fadeOut .3s 2.7s}\n        .gvh-toast.success{border-color:var(--success);color:var(--success);}\n        .gvh-toast.error{border-color:var(--highlight);color:var(--error);}\n        .gvh-toast.info{border-color:var(--highlight);color:var(--highlight);}\n    ";
  document.head.appendChild(_0x59f192);
  const _0x38baa9 = document.createElement("div");
  _0x38baa9.className = "xianxia-panel collapse";
  _0x38baa9.innerHTML = "\n        <div class=\"panel-header\">\n            <span class=\"panel-icon\">🎮</span>\n            <div class=\"panel-title\">鲸鱼 v" + _0x4338ab + "</div>\n            <div class=\"opacity-control\">\n                <label for=\"opacity-slider\">透明度：</label>\n                <input type=\"range\" id=\"opacity-slider\" min=\"0\" max=\"100\" value=\"100\">\n                <span class=\"opacity-value\">100%</span>\n            </div>\n        </div>\n        <div class=\"panel-content\">\n            <!-- 垂直排布的功能菜单 -->\n            <div style=\"padding: 0 10px 10px 10px;\">\n                <!-- 功能模块选择器 - 垂直排布 -->\n                <div style=\"margin-bottom: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px;\">\n                    <button class=\"task-btn\" data-module=\"quick-tasks-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🚀 日常</button>\n                    <button class=\"task-btn\" data-module=\"car-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏎️ 赛车</button>\n                    <button class=\"task-btn\" data-module=\"arena-sub\" style=\"font-size: 10px; padding: 4px 2px;\">⚔️ 竞技场</button>\n                    <button class=\"task-btn\" data-module=\"salt-field-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏆 盐场战报</button>\n                    <button class=\"task-btn\" data-module=\"consumption-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🎮 消耗活动</button>\n                    <button class=\"task-btn\" data-module=\"weird-tower-sub\" style=\"font-size: 10px; padding: 4px 2px;\">🏯 怪异塔(关闭)</button>\n                    <button class=\"task-btn\" data-module=\"others-sub\" style=\"font-size: 10px; padding: 4px 2px;\">📋 其他</button>\n                </div>\n                \n                <!-- 所有功能模块内容 -->\n                <div id=\"quick-tasks-sub\" class=\"module-content active\">\n                    <div class=\"task-section\" id=\"quick-tasks-module\">\n                        <div class=\"task-header\"><h4>🚀 日常</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"daily-task-list\"></div>\n                        <div class=\"main-action-buttons\">\n                            <button class=\"task-btn other-btn\" data-task=\"execute-daily-checked\">一键执行勾选</button>\n                            <button class=\"task-btn other-btn\" data-task=\"claim-activity\">领取活跃奖励</button>\n                            <button class=\"task-btn\" data-task=\"one-key-100\">一键100活跃度</button>\n                        </div>\n                    </div>\n                </div>\n                <div id=\"opponent-wash-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"opponent-wash-module\">\n                        <div class=\"task-header\"><h4>🛡️ 对方洗练</h4><div class=\"status\" id=\"wash-data-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\" style=\"align-items: center;\">\n                            <span class=\"task-label\">对手ID：</span>\n                            <input type=\"number\" id=\"target-id\" placeholder=\"可留空\" style=\"flex: 1; width: auto; padding: 4px; border-radius: 4px; border: 1px solid var(--item-border); background: rgba(255,255,255,0.05);\">\n                            <div style=\"display: flex; gap: 5px; margin-left: 10px;\">\n                                 <button class=\"task-btn\" id=\"get-wash-data\" style=\"width: 80px;\">获取洗练</button>\n                                 <button class=\"task-btn\" id=\"monitoring-button\" style=\"width: 80px;\">监控</button>\n                              </div>\n                        </div>\n                        <div id=\"hero-selector-container\" style=\"margin-top: 10px; display: none;\">\n                            <div class=\"task-section\">\n                                <div id=\"player-info\" style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;\">\n                                    <!-- 玩家信息将在这里显示 -->\n                                </div>\n                                <div id=\"hero-selector\" style=\"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; margin-bottom: 8px;\">\n                                    <!-- 英雄选择器 -->\n                                </div>\n                                <div id=\"hero-details\" style=\"background: rgba(0,0,0,0.02); border-radius: 5px; padding: 8px; border: 1px solid var(--item-border);\">\n                                    <!-- 选中英雄的详细属性 -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"salt-field-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"salt-field-module\">\n                        <div class=\"task-header\"><h4>🏆 盐场战报</h4><div class=\"status\" id=\"salt-field-status\">📊 就绪</div></div>\n                        <div class=\"task-row\">\n                            <label class=\"task-label\" style=\"white-space: nowrap;\">查询日期：</label>\n                            <input type=\"date\" id=\"salt-field-date\" style=\"width: auto;\">\n                            <button class=\"task-btn\" id=\"salt-field-query\">查询战报</button>\n                        </div>\n                        <div id=\"salt-field-results\" style=\"margin-top: 10px; max-height: 60vh; overflow-y: auto;\">\n                            <p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">请选择日期并点击查询按钮</p>\n                        </div>\n                        <div style=\"margin-top: 10px; display: none; grid-template-columns: 1fr 1fr; gap: 8px;\" id=\"salt-field-actions\">\n                            <button class=\"task-btn other-btn\" id=\"salt-field-export\">导出战报</button>\n                            <button class=\"task-btn other-btn\" id=\"salt-field-summary\">查看汇总</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div id=\"car-sub\" class=\"module-content\"><div class=\"task-section\" id=\"car-module\">\n                    <div class=\"task-header\"><h4>🏎️ 赛车</h4><div class=\"status\">✅ 就绪</div></div>\n                    <button class=\"task-btn\" data-task=\"car-query\">查询赛车</button>\n                    <div class=\"car-data-container\"><table class=\"car-data-table\" style=\"display:none;\"><thead><tr><th>车位</th><th>品质</th><th>主要奖励</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div>\n                </div></div>\n                \n                <!-- 爬塔模块已移至其他模块内部 -->\n                \n                <div id=\"arena-sub\" class=\"module-content\">\n                    <div class=\"task-section\" id=\"arena-module\">\n                        <div class=\"task-header\"><h4>⚔️ 竞技场</h4><div class=\"status\" id=\"arena-status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"arena-count\" value=\"3\" min=\"1\" max=\"999\">\n                            <button class=\"task-btn\" data-task=\"arena-start\">随机战斗</button>\n                        </div>\n                    </div>\n                    \n\n\n\n\n\n\n                    <div class=\"task-section\" style=\"margin-top: 10px;\" id=\"arena-winrate-module\">\n                        <div class=\"task-header\"><h4>📊 胜率测试</h4><div class=\"status\" id=\"winrate-status\">✅ 准备就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"winrate-fight-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" id=\"start-winrate-btn\" data-task=\"arena-winrate\">获取对手</button></div>\n                        <div id=\"winrate-results\" style=\"margin-top: 10px; padding: 8px; border: 1px solid var(--item-border); border-radius: 6px; background: rgba(0,0,0,0.01); font-size: 12px; line-height: 1.4;\"></div>\n                    </div>\n                </div>\n                 \n                <div id=\"others-sub\" class=\"module-content\">\n                    <!-- 俱乐部Boss功能 -->\n                    <div class=\"task-section\" id=\"club-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>⚔️ 俱乐部Boss</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\">\n                            <span class=\"task-label\">挑战次数:</span>\n                            <div class=\"count-selector\">\n                                <button class=\"task-btn\" data-action=\"decrement\">-</button>\n                                <span class=\"count-display\" id=\"club-boss-count\">2</span>\n                                <button class=\"task-btn\" data-action=\"increment\">+</button>\n                            </div>\n                            <button class=\"task-btn\" data-task=\"club-boss\">开始挑战</button>\n                        </div>\n                    </div>\n                    \n                    <!-- 爬塔功能 -->\n                    <div class=\"task-section\" id=\"tower-module\" style=\"margin-bottom: 15px;\">\n                        <div class=\"task-header\"><h4>🧗 爬塔</h4><div class=\"status\">✅ 就绪</div></div>\n                        <button class=\"task-btn\" data-task=\"tower\">开始爬塔</button>\n                    </div>\n                    \n                    <!-- 升级功能 -->\n                    <div class=\"task-section\" id=\"upgrade-module\">\n                        <div class=\"task-header\"><h4>⚡ 升级</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px;\">\n                            <button class=\"task-btn other-btn\" data-task=\"starUp\">武将升星</button>\n                            <button class=\"task-btn other-btn\" data-task=\"bookUpgrade\">升级图鉴</button>\n                            <button class=\"task-btn other-btn\" data-task=\"collectionUpgrade\">藏品图鉴升级</button>\n                            <!-- 留空右侧位置，等待添加新功能 -->\n                        </div>\n                    </div>\n                </div>\n                \n                <!-- 保留原有模块结构以确保功能兼容 -->\n                <div id=\"club-sub\" class=\"module-content\"></div>\n                <div id=\"upgrade-sub\" class=\"module-content\"></div>\n                \n\n                \n                <div id=\"consumption-sub\" class=\"module-content\">\n                    <!-- 招募功能 -->\n                    <div class=\"task-section\" id=\"recruit-module\">\n                        <div class=\"task-header\"><h4>👥 招募</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"recruit-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"recruit\">开始招募</button></div>\n                    </div>\n                    \n                    <!-- 宝箱功能 -->\n                    <div class=\"task-section\" id=\"box-module\" style=\"margin-top: 15px;\">\n                        <div class=\"task-header\"><h4>📦 宝箱</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">木质宝箱</span><input type=\"number\" id=\"box-count-2001\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2001\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">青铜宝箱</span><input type=\"number\" id=\"box-count-2002\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2002\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">黄金宝箱</span><input type=\"number\" id=\"box-count-2003\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2003\">开启宝箱</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">铂金宝箱</span><input type=\"number\" id=\"box-count-2004\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2004\">开启宝箱</button></div>\n                    </div>\n                    \n                    <!-- 钓鱼功能 -->\n                    <div class=\"task-section\" id=\"fishing-module\" style=\"margin-top: 15px;\">\n                        <div class=\"task-header\"><h4>🎣 钓鱼</h4><div class=\"status\">✅ 就绪</div></div>\n                        <div class=\"task-row\"><span class=\"task-label\">普通钓鱼</span><input type=\"number\" id=\"fishing-count-1\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-1\">开始</button></div>\n                        <div class=\"task-row\"><span class=\"task-label\">高级钓鱼</span><input type=\"number\" id=\"fishing-count-2\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-2\">开始</button></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
  document.body.appendChild(_0x38baa9);
  const _0x358c7d = {
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
  const _0x43bafd = {
    showtip(_0x1a8692, _0x2babba = "info") {
      {
        const _0x52d7fc = document.createElement("div");
        _0x52d7fc.className = "gvh-toast " + _0x2babba;
        _0x52d7fc.innerText = _0x1a8692;
        document.body.appendChild(_0x52d7fc);
        setTimeout(() => _0x52d7fc.remove(), 3000);
      }
    },
    async sendCommand(_0x5e2c6c, _0x4d2034 = {}) {
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
              cmd: _0x5e2c6c,
              params: _0x4d2034,
              seq: Date.now(),
              time: Date.now()
            });
          }
        } catch (_0x2a1e4b) {
          {
            this.showtip("命令发送失败: " + _0x2a1e4b.message, "error");
            throw _0x2a1e4b;
          }
        }
      }
    },
    delay: _0x8088c => new Promise(_0x2189b2 => setTimeout(_0x2189b2, _0x8088c * 1000)),
    getFormatDate: _0x58b9b6 => {
      {
        const _0x3e766e = new Date(_0x58b9b6);
        _0x3e766e.setHours(_0x3e766e.getHours() + 8);
        return _0x3e766e;
      }
    }
  };
  const _0x18215f = {
    currentData: null,
    currentDate: "",
    init() {
      {
        const _0xd83599 = document.getElementById("salt-field-date");
        _0xd83599 && (_0xd83599.value = this.getLastSaturdayString());
        const _0x576e4d = document.getElementById("salt-field-query");
        _0x576e4d && _0x576e4d.addEventListener("click", () => this.queryWarRecords());
        const _0x4b9339 = document.getElementById("salt-field-export");
        if (_0x4b9339) {
          {
            _0x4b9339.addEventListener("click", () => this.exportWarRecords());
          }
        }
        const _0x5d7395 = document.getElementById("salt-field-summary");
        if (_0x5d7395) {
          {
            _0x5d7395.addEventListener("click", () => this.showSummary());
          }
        }
      }
    },
    getLastSaturdayString() {
      {
        const _0x799aec = new Date();
        const _0x565c3f = _0x799aec.getDay();
        let _0x4a9f67 = 0;
        if (_0x565c3f === 6) {
          _0x4a9f67 = 0;
        } else {
          if (_0x565c3f === 0) {
            _0x4a9f67 = 1;
          } else {
            _0x4a9f67 = _0x565c3f + 1;
          }
        }
        const _0x12a033 = new Date(_0x799aec);
        _0x12a033.setDate(_0x799aec.getDate() - _0x4a9f67);
        const _0x3b0d70 = _0x12a033.getFullYear();
        const _0xb6b6bc = String(_0x12a033.getMonth() + 1).padStart(2, "0");
        const _0x210b23 = String(_0x12a033.getDate()).padStart(2, "0");
        return _0x3b0d70 + "-" + _0xb6b6bc + "-" + _0x210b23;
      }
    },
    formatDateForAPI(_0x2b1e9f) {
      {
        return _0x2b1e9f.replace(/-/g, "/");
      }
    },
    async queryWarRecords() {
      {
        const _0x43ba2b = document.getElementById("salt-field-status");
        const _0x4f52d6 = document.getElementById("salt-field-results");
        const _0xb04238 = document.getElementById("salt-field-actions");
        if (!_0x43ba2b || !_0x4f52d6 || !_0xb04238) {
          return;
        }
        _0x43ba2b.textContent = "🔍 查询中...";
        _0x4f52d6.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">正在查询战绩...</p>";
        _0xb04238.style.display = "none";
        try {
          {
            const _0x4b8462 = document.getElementById("salt-field-date");
            if (!_0x4b8462) {
              throw new Error("日期输入框未找到");
            }
            this.currentDate = _0x4b8462.value;
            const _0x21d084 = this.formatDateForAPI(this.currentDate);
            const _0x2fd96e = {
              date: _0x21d084
            };
            const _0x5122a3 = await _0x43bafd.sendCommand("legionwar_getdetails", _0x2fd96e);
            const _0x28f2a8 = _0x5122a3?.["roleDetailsList"] || _0x5122a3?.["_rawData"]?.["roleDetailsList"] || _0x5122a3?.["body"]?.["roleDetailsList"] || _0x5122a3?.["data"]?.["roleDetailsList"] || [];
            this.currentData = _0x28f2a8;
            if (!_0x28f2a8 || _0x28f2a8.length === 0) {
              {
                _0x4f52d6.innerHTML = "<p style=\"text-align: center; color: var(--text-secondary); font-size: 12px;\">暂无战绩数据</p>";
              }
            } else {
              {
                const _0xda3667 = [..._0x28f2a8].sort((_0x2ce55d, _0x1465c0) => Number(_0x1465c0?.["winCnt"] || 0) - Number(_0x2ce55d?.["winCnt"] || 0));
                const _0x13c10c = _0xda3667.map((_0x4767ad, _0x1fb1c3) => {
                  {
                    const _0x520e6c = _0x4767ad?.["name"] || _0x4767ad?.["roleName"] || _0x4767ad?.["nickname"] || "-";
                    const _0x1647da = Number(_0x4767ad?.["winCnt"] || 0);
                    const _0x4d326f = Number(_0x4767ad?.["loseCnt"] || 0);
                    const _0x1c18a7 = Number(_0x4767ad?.["buildingCnt"] || 0);
                    return "\n                        <div style=\"display:flex; align-items:center; justify-content:space-between; padding:8px; margin:4px 0; background: var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                            <div style=\"display:flex; gap:10px; align-items:center;\">\n                                <span style=\"color:var(--text-secondary); font-size:12px;\">" + (_0x1fb1c3 + 1) + ".</span>\n                                <span style=\"color:var(--text-primary); font-weight:500;\">" + _0x520e6c + "</span>\n                            </div>\n                            <div style=\"display:flex; gap:15px; color:var(--text-secondary); font-size:12px;\">\n                                <span>击杀 <span style=\"color:var(--success); font-weight:500;\">" + _0x1647da + "</span></span>\n                                <span>死亡 <span style=\"color:var(--error); font-weight:500;\">" + _0x4d326f + "</span></span>\n                                <span>攻城 <span style=\"color:var(--highlight); font-weight:500;\">" + _0x1c18a7 + "</span></span>\n                            </div>\n                        </div>";
                  }
                }).join("");
                const _0x341e06 = "\n                    <div style=\"margin-bottom:8px; padding:8px; background: rgba(0,0,0,0.02); border-radius:6px; color:var(--text-secondary); font-size:12px;\">\n                        查询日期：" + this.currentDate + "｜参战人数：" + _0x28f2a8.length + "\n                    </div>";
                _0x4f52d6.innerHTML = _0x341e06 + _0x13c10c;
                _0xb04238.style.display = "grid";
              }
            }
            _0x43ba2b.textContent = "📊 就绪";
            _0x43bafd.showtip("盐场战报加载完成", "success");
          }
        } catch (_0x3fd66a) {
          {
            _0x4f52d6.innerHTML = "<p style=\"text-align: center; color: var(--error); font-size: 12px;\">查询失败：" + _0x3fd66a.message + "</p>";
            _0x43ba2b.textContent = "❌ 查询出错";
            console.error("查询盐场战报失败:", _0x3fd66a);
          }
        }
      }
    },
    exportWarRecords() {
      {
        if (!this.currentData || !this.currentDate) {
          {
            _0x43bafd.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0x2d3d85 = "序号,玩家名称,击杀数,死亡数,攻城数\n";
            this.currentData.sort((_0x28d155, _0x30b79c) => Number(_0x30b79c?.["winCnt"] || 0) - Number(_0x28d155?.["winCnt"] || 0)).forEach((_0x8abe41, _0x6f395e) => {
              {
                const _0x32c65d = _0x8abe41?.["name"] || _0x8abe41?.["roleName"] || _0x8abe41?.["nickname"] || "-";
                const _0x15274e = Number(_0x8abe41?.["winCnt"] || 0);
                const _0x4f0717 = Number(_0x8abe41?.["loseCnt"] || 0);
                const _0x2b7e0f = Number(_0x8abe41?.["buildingCnt"] || 0);
                _0x2d3d85 += _0x6f395e + 1 + ",\"" + _0x32c65d + "\"," + _0x15274e + "," + _0x4f0717 + "," + _0x2b7e0f + "\n";
              }
            });
            const _0x24f269 = {
              type: "text/csv;charset=utf-8;"
            };
            const _0x42ff09 = new Blob([_0x2d3d85], _0x24f269);
            const _0x564188 = document.createElement("a");
            const _0x2f0778 = URL.createObjectURL(_0x42ff09);
            _0x564188.setAttribute("href", _0x2f0778);
            _0x564188.setAttribute("download", "盐场战报_" + this.currentDate.replace(/-/g, "") + ".csv");
            _0x564188.style.visibility = "hidden";
            document.body.appendChild(_0x564188);
            _0x564188.click();
            document.body.removeChild(_0x564188);
            _0x43bafd.showtip("战报导出成功", "success");
          }
        } catch (_0x5e7457) {
          {
            _0x43bafd.showtip("导出失败: " + _0x5e7457.message, "error");
            console.error("导出盐场战报失败:", _0x5e7457);
          }
        }
      }
    },
    showSummary() {
      {
        if (!this.currentData) {
          {
            _0x43bafd.showtip("请先查询战报数据", "error");
            return;
          }
        }
        try {
          {
            let _0xe9ee23 = 0;
            let _0x2121e9 = 0;
            let _0x126f9f = 0;
            let _0x57042a = 0;
            this.currentData.forEach(_0x5daeae => {
              {
                const _0xd70e04 = Number(_0x5daeae?.["winCnt"] || 0);
                const _0x2ca885 = Number(_0x5daeae?.["loseCnt"] || 0);
                const _0x421fa6 = Number(_0x5daeae?.["buildingCnt"] || 0);
                _0xe9ee23 += _0xd70e04;
                _0x2121e9 += _0x2ca885;
                _0x126f9f += _0x421fa6;
                (_0xd70e04 > 0 || _0x2ca885 > 0 || _0x421fa6 > 0) && _0x57042a++;
              }
            });
            const _0x5267a0 = document.getElementById("salt-field-results");
            if (_0x5267a0) {
              {
                const _0x49eb5d = "\n                    <div style=\"padding:15px; background: rgba(0,0,0,0.02); border-radius:8px; margin-bottom:10px;\">\n                        <h4 style=\"margin:0 0 10px 0; color:var(--highlight); font-size:14px;\">盐场战报汇总</h4>\n                        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px;\">\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">参战总人数</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">" + this.currentData.length + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">活跃成员数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0x57042a + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总击杀数</div>\n                                <div style=\"color:var(--success); font-size:16px; font-weight:600;\">" + _0xe9ee23 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总死亡数</div>\n                                <div style=\"color:var(--error); font-size:16px; font-weight:600;\">" + _0x2121e9 + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">总攻城数</div>\n                                <div style=\"color:var(--highlight); font-size:16px; font-weight:600;\">" + _0x126f9f + "</div>\n                            </div>\n                            <div style=\"padding:8px; background:var(--item-bg); border:1px solid var(--item-border); border-radius:6px;\">\n                                <div style=\"color:var(--text-secondary); font-size:12px;\">击杀/死亡比</div>\n                                <div style=\"color:var(--text-primary); font-size:16px; font-weight:600;\">\n                                    " + (_0x2121e9 > 0 ? (_0xe9ee23 / _0x2121e9).toFixed(2) : "∞") + "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"text-align:center;\">\n                        <button class=\"task-btn\" onclick=\"document.getElementById('salt-field-query').click();\">\n                            查看详细数据\n                        </button>\n                    </div>";
                _0x5267a0.innerHTML = _0x49eb5d;
              }
            }
          }
        } catch (_0x48d3ec) {
          {
            _0x43bafd.showtip("生成汇总失败: " + _0x48d3ec.message, "error");
            console.error("生成盐场战报汇总失败:", _0x48d3ec);
          }
        }
      }
    }
  };
  const _0x53ab64 = {
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
        const _0x28936d = localStorage.getItem("winrateFightCount");
        _0x28936d && this.dom.fightCountInput && (this.dom.fightCountInput.value = _0x28936d);
        if (this.dom.startButton) {
          {
            this.dom.startButton.addEventListener("click", this.handleMainButtonClick.bind(this));
          }
        }
        if (this.dom.fightCountInput) {
          {
            this.dom.fightCountInput.addEventListener("change", _0x1fe37b => {
              localStorage.setItem("winrateFightCount", _0x1fe37b.target.value);
            });
          }
        }
      }
    },
    updateStatus(_0x2b4629) {
      {
        this.dom.statusEl && (this.dom.statusEl.textContent = _0x2b4629);
      }
    },
    clearResults() {
      {
        this.dom.resultsEl && (this.dom.resultsEl.innerHTML = "");
      }
    },
    displayOpponentResult(_0x24b292, _0x601146) {
      {
        if (!this.dom.resultsEl) {
          return;
        }
        let _0x4dd07a = this.dom.resultsEl.querySelector("[data-opponent-id=\"" + _0x24b292.id + "\"]");
        const _0x34884d = _0x601146.wins + _0x601146.losses + _0x601146.draws;
        const _0x43abf8 = _0x34884d > 0 ? (_0x601146.wins / _0x34884d * 100).toFixed(1) : 0;
        if (_0x4dd07a) {
          _0x4dd07a.innerHTML = "\n                    <div><strong>" + _0x24b292.name + "</strong> (ID: " + _0x24b292.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x601146.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x601146.losses + "负</span> / " + _0x601146.draws + "平 | 胜率: <strong>" + _0x43abf8 + "%</strong></div>\n                ";
        } else {
          {
            _0x4dd07a = document.createElement("div");
            _0x4dd07a.className = "winrate-result-item";
            _0x4dd07a.dataset.opponentId = _0x24b292.id;
            _0x4dd07a.innerHTML = "\n                    <div><strong>" + _0x24b292.name + "</strong> (ID: " + _0x24b292.id + ")</div>\n                    <div>战绩: <span class=\"winrate-win\">" + _0x601146.wins + "胜</span> / <span class=\"winrate-loss\">" + _0x601146.losses + "负</span> / " + _0x601146.draws + "平 | 胜率: <strong>" + _0x43abf8 + "%</strong></div>\n                ";
            this.dom.resultsEl.appendChild(_0x4dd07a);
          }
        }
      }
    },
    stop(_0x457fee = false) {
      {
        !_0x457fee && (this.isStopping = true, this.updateStatus("正在请求停止..."));
        this.isRunning = false;
        this.isStopping = false;
        if (this.dom.startButton) {
          {
            this.dom.startButton.textContent = "获取对手并开始测试";
            this.dom.startButton.classList.remove("stop");
          }
        }
        this.dom.fightCountInput && (this.dom.fightCountInput.disabled = false);
        _0x457fee ? this.updateStatus("✅ 所有测试完成！") : this.updateStatus("✅ 已停止");
      }
    },
    async start() {
      {
        if (this.isRunning) {
          return;
        }
        const _0x3eea20 = parseInt(this.dom.fightCountInput?.["value"] || 30, 10);
        if (isNaN(_0x3eea20) || _0x3eea20 <= 0) {
          {
            this.updateStatus("❌ 请输入有效的战斗次数");
            _0x43bafd.showtip("请输入有效的战斗次数", "error");
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
            await _0x43bafd.sendCommand("arena_startarea", {});
            await _0x43bafd.delay(1);
          }
        } catch (_0x5d36ef) {
          {
            this.updateStatus("❌ 进入竞技场失败: " + _0x5d36ef.message);
            this.stop();
            return;
          }
        }
        this.updateStatus("📋 正在获取竞技场对手列表...");
        let _0x3472cb = [];
        try {
          {
            const _0x53926e = {
              refresh: false
            };
            const _0x2ec237 = await _0x43bafd.sendCommand("arena_getareatarget", _0x53926e);
            const _0x377e71 = _0x2ec237?.["_rawData"]?.["roleList"];
            if (!_0x377e71 || _0x377e71.length === 0) {
              {
                throw new Error("未能获取到对手列表");
              }
            }
            _0x3472cb = _0x377e71.map(_0x2b0a42 => ({
              id: _0x2b0a42.roleId,
              name: _0x2b0a42.info?.["name"] || "对手" + _0x2b0a42.roleId
            }));
            this.clearResults();
            _0x3472cb.forEach(_0x3267c8 => {
              {
                const _0x45f475 = document.createElement("div");
                _0x45f475.className = "winrate-result-item";
                _0x45f475.dataset.opponentId = _0x3267c8.id;
                _0x45f475.innerHTML = "\n                        <div><strong>" + _0x3267c8.name + "</strong> (ID: " + _0x3267c8.id + ")</div>\n                        <div class=\"winrate-opponent-placeholder\">正在准备测试...</div>\n                    ";
                this.dom.resultsEl.appendChild(_0x45f475);
              }
            });
            this.updateStatus("🎯 获取到 " + _0x3472cb.length + " 位对手，开始极速测试...");
          }
        } catch (_0x4deb4d) {
          {
            this.updateStatus("❌ 获取对手失败: " + _0x4deb4d.message);
            _0x43bafd.showtip("获取对手失败: " + _0x4deb4d.message, "error");
            this.stop();
            return;
          }
        }
        let _0x5aca66 = 0;
        for (const _0x5a954e of _0x3472cb) {
          {
            _0x5aca66++;
            if (this.isStopping) {
              {
                this.updateStatus("🛑 测试已手动停止");
                break;
              }
            }
            this.updateStatus("⚔️ 测试对手 " + _0x5a954e.name + " (" + _0x5aca66 + "/" + _0x3472cb.length + ")");
            const _0x50de70 = {
              wins: 0,
              losses: 0,
              draws: 0
            };
            for (let _0x4f91db = 1; _0x4f91db <= _0x3eea20; _0x4f91db++) {
              {
                if (this.isStopping) {
                  break;
                }
                try {
                  {
                    const _0x39baa5 = {
                      battleVersion: _0x4656dc,
                      targetId: _0x5a954e.id
                    };
                    const _0x196776 = await _0x43bafd.sendCommand("fight_startpvp", _0x39baa5);
                    const _0x2819ff = _0x196776?.["_rawData"]?.["battleData"]?.["result"];
                    const _0xeb1ecf = _0x2819ff?.["sponsor"]?.["ext"]?.["curHP"];
                    const _0x2fd59c = _0x2819ff?.["accept"]?.["ext"]?.["curHP"];
                    if (_0x2819ff && typeof _0xeb1ecf !== "undefined" && typeof _0x2fd59c !== "undefined") {
                      {
                        if (_0xeb1ecf > 0 && _0x2fd59c === 0) {
                          _0x50de70.wins++;
                        } else {
                          if (_0xeb1ecf === 0) {
                            {
                              _0x50de70.losses++;
                            }
                          } else {
                            _0x50de70.draws++;
                          }
                        }
                      }
                    } else {
                      {
                        _0x50de70.draws++;
                      }
                    }
                  }
                } catch (_0x3896b3) {
                  _0x50de70.draws++;
                  console.error("挑战 " + _0x5a954e.name + " 时出错:", _0x3896b3.message);
                }
                _0x4f91db % 10 === 0 && (await _0x43bafd.delay(this.delayBetweenFights / 1000));
              }
            }
            this.displayOpponentResult(_0x5a954e, _0x50de70);
          }
        }
        this.stop(true);
      }
    },
    handleMainButtonClick() {
      {
        if (this.isRunning) {
          {
            this.stop();
          }
        } else {
          {
            this.start();
          }
        }
      }
    }
  };
  const _0x2736f7 = _0x38baa9.querySelector(".panel-content");
  const _0x4a98e6 = _0x38baa9.querySelector("#opacity-slider");
  const _0x3902ff = _0x42f2bf => {
    {
      const _0x45aded = _0x42f2bf / 100;
      _0x38baa9.style.background = "transparent";
      _0x38baa9.querySelector(".opacity-value").textContent = _0x42f2bf + "%";
      _0x38baa9.style.setProperty("--panel-bg", "rgba(247, 250, 252, " + 0.98 * _0x45aded + ")");
      _0x38baa9.style.setProperty("--item-bg", "rgba(255, 255, 255, " + _0x45aded + ")");
      const _0x4af3b2 = _0x38baa9.querySelector(".panel-header");
      _0x4af3b2 && (_0x4af3b2.style.background = "rgba(0, 0, 0, " + 0.02 * _0x45aded + ")");
    }
  };
  _0x4a98e6.addEventListener("input", _0x44e10a => _0x3902ff(_0x44e10a.target.value));
  _0x3902ff(_0x4a98e6.value);
  _0x38baa9.querySelector(".panel-header").addEventListener("click", _0x1f21ad => {
    {
      if (_0x1f21ad.target.closest(".opacity-control")) {
        return;
      }
      _0x38baa9.classList.toggle("collapse");
      _0x38baa9.classList.toggle("expanded");
    }
  });
  _0x2736f7.addEventListener("click", _0x38b645 => {
    {
      const _0x6edccb = _0x38b645.target.closest(".tab-btn");
      const _0x4b43c6 = _0x38b645.target.closest(".sub-tab-btn");
      if (_0x6edccb && !_0x6edccb.classList.contains("active")) {
        {
          _0x2736f7.querySelector(".tab-btn.active").classList.remove("active");
          _0x6edccb.classList.add("active");
          _0x2736f7.querySelector(".tab-pane.active").classList.remove("active");
          _0x2736f7.querySelector("#" + _0x6edccb.dataset.tab).classList.add("active");
        }
      }
      if (_0x4b43c6 && !_0x4b43c6.classList.contains("active")) {
        {
          const _0x3a57cb = _0x4b43c6.closest(".tab-pane");
          _0x3a57cb.querySelector(".sub-tab-btn.active").classList.remove("active");
          _0x4b43c6.classList.add("active");
          _0x3a57cb.querySelector(".sub-pane.active").classList.remove("active");
          _0x3a57cb.querySelector("#" + _0x4b43c6.dataset.subTab).classList.add("active");
        }
      }
    }
  });
  const _0x26e48e = document.getElementById("club-boss-count");
  _0x38baa9.querySelector("#club-module").addEventListener("click", _0x356c54 => {
    {
      const _0x5dee38 = _0x356c54.target.dataset.action;
      if (!_0x5dee38) {
        return;
      }
      let _0x38c9d8 = parseInt(_0x26e48e.textContent);
      if (_0x5dee38 === "increment" && _0x38c9d8 < 4) {
        _0x38c9d8++;
      }
      if (_0x5dee38 === "decrement" && _0x38c9d8 > 0) {
        _0x38c9d8--;
      }
      _0x26e48e.textContent = _0x38c9d8;
    }
  });
  _0x2736f7.addEventListener("click", _0x145a6c => {
    {
      const _0x1272c1 = _0x145a6c.target.closest("[data-module]");
      if (_0x1272c1) {
        {
          const _0x29896a = _0x1272c1.dataset.module;
          _0x2736f7.querySelectorAll(".module-content").forEach(_0x3a5abc => {
            {
              _0x3a5abc.classList.remove("active");
            }
          });
          const _0x409d13 = _0x2736f7.querySelector("#" + _0x29896a);
          if (_0x409d13) {
            {
              _0x409d13.classList.add("active");
            }
          }
        }
      }
    }
  });
  const _0x3e918d = {
    id: "daily-hangup-combined",
    label: "收菜5次、加钟",
    task: "daily-task-hangup-combined",
    defaultChecked: true
  };
  const _0x4c1e62 = {
    id: "daily-bottle-renew",
    label: "续罐子",
    task: "daily-task-bottle-renew",
    defaultChecked: true
  };
  const _0x1706a9 = {
    id: "daily-bottle-claim",
    label: "收盐罐",
    task: "daily-task-bottle-claim",
    defaultChecked: false
  };
  const _0x28a266 = {
    id: "daily-quick-tasks",
    label: "邮件、签到、赠金币、福利",
    task: "daily-task-combined-quick",
    defaultChecked: true
  };
  const _0x3ecd5f = {
    id: "daily-boss",
    label: "每日咸王考验",
    task: "daily-task-boss",
    defaultChecked: true
  };
  const _0x500f8b = {
    id: "daily-gold",
    label: "点金三次",
    task: "daily-task-gold",
    defaultChecked: true
  };
  const _0x499f00 = {
    id: "daily-quiz",
    label: "自动答题",
    task: "daily-task-quiz",
    defaultChecked: true
  };
  const _0x4054bf = {
    id: "daily-genie-tickets",
    label: "领取扫荡券",
    task: "daily-task-genie-tickets",
    defaultChecked: true
  };
  const _0x245813 = {
    id: "daily-genie-sweep",
    label: "灯神扫荡",
    task: "daily-task-genie-sweep",
    defaultChecked: true
  };
  const _0x3b7686 = {
    id: "daily-box",
    label: "开启10木箱",
    task: "daily-task-box",
    defaultChecked: false
  };
  const _0x40fe07 = {
    id: "daily-recruit",
    label: "执行2次招募",
    task: "daily-task-recruit",
    defaultChecked: false
  };
  const _0x3972d8 = {
    id: "daily-arena",
    label: "进行3次竞技场战斗",
    task: "daily-task-arena",
    defaultChecked: false
  };
  const _0x5963f8 = {
    id: "daily-buy-bronze-box",
    label: "购买青铜宝箱",
    task: "daily-task-buy-bronze-box",
    defaultChecked: false
  };
  const _0x370335 = [_0x3e918d, _0x4c1e62, _0x1706a9, _0x28a266, _0x3ecd5f, _0x500f8b, _0x499f00, _0x4054bf, _0x245813, _0x3b7686, _0x40fe07, _0x3972d8, _0x5963f8];
  function _0x31d87c() {
    {
      try {
        {
          const _0x15a975 = localStorage.getItem("dailyTaskStates");
          return _0x15a975 ? JSON.parse(_0x15a975) : {};
        }
      } catch (_0x4f4f8d) {
        {
          console.error("读取保存的任务状态失败:", _0x4f4f8d);
          return {};
        }
      }
    }
  }
  function _0x576980(_0x18f0ce) {
    {
      try {
        {
          localStorage.setItem("dailyTaskStates", JSON.stringify(_0x18f0ce));
        }
      } catch (_0x368aa9) {
        {
          console.error("保存任务状态失败:", _0x368aa9);
        }
      }
    }
  }
  const _0x42ee05 = _0x31d87c();
  const _0x5b4f68 = _0x38baa9.querySelector(".daily-task-list");
  _0x370335.forEach(_0x4bffa4 => {
    {
      const _0x312aa6 = _0x42ee05[_0x4bffa4.task] !== undefined ? _0x42ee05[_0x4bffa4.task] : _0x4bffa4.defaultChecked;
      const _0x30872b = document.createElement("div");
      _0x30872b.className = "daily-task-item";
      _0x30872b.innerHTML = "\n            <div class=\"daily-task-info\">\n                <input type=\"checkbox\" id=\"" + _0x4bffa4.id + "\" data-task-name=\"" + _0x4bffa4.task + "\" " + (_0x312aa6 ? "checked" : "") + ">\n                <label for=\"" + _0x4bffa4.id + "\">" + _0x4bffa4.label + "</label>\n            </div>\n            <button class=\"task-btn\" data-task=\"" + _0x4bffa4.task + "\">独立执行</button>\n        ";
      _0x5b4f68.appendChild(_0x30872b);
      const _0x5e0754 = _0x30872b.querySelector("input[type=\"checkbox\"]");
      _0x5e0754.addEventListener("change", () => {
        _0x42ee05[_0x4bffa4.task] = _0x5e0754.checked;
        _0x576980(_0x42ee05);
      });
    }
  });
  _0x5b4f68.querySelectorAll("input[type=\"checkbox\"]").forEach(_0x4c68e1 => {
    {
      _0x4c68e1.addEventListener("change", () => {
        {
          const _0x199bf9 = _0x4c68e1.dataset.taskName;
          _0x199bf9 && (_0x42ee05[_0x199bf9] = _0x4c68e1.checked, _0x576980(_0x42ee05));
        }
      });
    }
  });
  const _0x1e884a = {
    fullCarData: [],
    timeInterval: null,
    sendCount: 0,
    isBatchRefreshing: false,
    availableConditions: ["品质", "金砖", "招募令", "彩玉", "白玉", "万能碎片", "刷新券"]
  };
  const _0x5901e4 = {
    fullCarData: [],
    sendCount: 0,
    timeInterval: null,
    legionMembersMap: {},
    helperSelectionByCarId: {}
  };
  const _0x3eb012 = {
    statusEl: null,
    dataTable: null,
    dataBody: null
  };
  const _0x1bd6ea = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x21cbfb = {
    "1": "color:var(--text-secondary)",
    "2": "color:#3182ce",
    "3": "color:#9f7aea",
    "4": "color:#dd6b20",
    "5": "color:#e53e3e",
    "6": "color:#d69e2e"
  };
  const _0x4a2f5a = {
    state: _0x1e884a,
    state: _0x5901e4,
    dom: _0x3eb012,
    init() {
      {
        const _0xd98ff7 = document.getElementById("car-module");
        this.dom = {
          statusEl: _0xd98ff7.querySelector(".status"),
          dataTable: _0xd98ff7.querySelector(".car-data-table"),
          dataBody: _0xd98ff7.querySelector("tbody")
        };
        _0xd98ff7.addEventListener("click", _0x29a02a => {
          {
            const _0x30759f = _0x29a02a.target.closest(".task-btn, .car-action-btn, .car-batch-btn");
            if (!_0x30759f) {
              return;
            }
            const {
              task: _0x4f17c9,
              action: _0x331809,
              id: _0x58907a
            } = _0x30759f.dataset;
            if (_0x4f17c9 === "car-query") {
              this.handleTask(_0x30759f);
            } else {
              if (_0x331809 === "toggleRefreshFilter") {
                {
                  const _0x442ccc = document.querySelector(".refresh-filter-panel");
                  if (_0x442ccc) {
                    _0x442ccc.style.display = _0x442ccc.style.display === "none" ? "block" : "none";
                  }
                }
              } else {
                if (_0x331809 === "sendAll") {
                  this.sendAllCars();
                } else {
                  if (_0x331809 === "claimAll") {
                    this.claimAllCars();
                  } else {
                    if (_0x331809 === "send") {
                      this.sendCar(_0x58907a);
                    } else {
                      if (_0x331809 === "refresh") {
                        this.refreshCar(_0x58907a);
                      } else {
                        if (_0x331809 === "claim" && !_0x30759f.classList.contains("is-disabled")) {
                          this.claimCar(_0x58907a);
                        } else {
                          if (_0x331809 === "claim") {
                            _0x43bafd.showtip("赛车尚未到站，无法收取", "error");
                          } else {
                            if (_0x331809 === "startBatchRefresh" && !_0x30759f.classList.contains("is-disabled")) {
                              this.startBatchRefresh();
                            } else {
                              if (_0x331809 === "setHelper") {
                                {
                                  const _0x1b3e40 = this.state.fullCarData.find(_0x26b7f0 => String(_0x26b7f0.carId) === String(_0x58907a));
                                  if (_0x1b3e40) {
                                    this.openHelperDialog(_0x1b3e40);
                                  }
                                }
                              } else {
                                if (_0x331809 === "openMembers") {
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
    async handleTask(_0x3286e5) {
      {
        const _0x7cd75e = _0x3286e5.textContent;
        _0x3286e5.disabled = true;
        _0x3286e5.textContent = "查询中...";
        await this.queryClubCars();
        _0x3286e5.disabled = false;
        _0x3286e5.textContent = _0x7cd75e;
      }
    },
    isCarEventActive: () => {
      {
        const _0x57716c = new Date();
        return _0x57716c.getDay() >= 1 && _0x57716c.getDay() <= 3 && _0x57716c.getHours() >= 6 && _0x57716c.getHours() < 20;
      }
    },
    parseRewards(_0x22ebf5) {
      {
        if (!_0x22ebf5?.["length"]) {
          return [];
        }
        const _0x27ce78 = {
          "2_0": "金砖",
          "0_0": "金砖",
          "3_1001": "招募令",
          "3_1023": "彩玉",
          "3_1022": "白玉",
          "3_3201": "万能碎片",
          "3_35002": "刷新券"
        };
        const _0x2dd36a = {};
        _0x22ebf5.forEach(_0x45a072 => {
          {
            const _0x5f4d85 = _0x27ce78[_0x45a072.type + "_" + _0x45a072.itemId];
            if (_0x5f4d85) {
              _0x2dd36a[_0x5f4d85] = (_0x2dd36a[_0x5f4d85] || 0) + _0x45a072.value;
            }
          }
        });
        return Object.entries(_0x2dd36a).map(([_0x4e14a6, _0x184b58]) => _0x4e14a6 + ":" + _0x184b58);
      }
    },
    getCarQualityText: _0x4a5ed9 => _0x1bd6ea[_0x4a5ed9] || "未知",
    getCarQualityStyle: _0x4979c3 => (_0x21cbfb[_0x4979c3] || "") + ";font-weight:bold;",
    getCarStatus(_0x121e0) {
      {
        const _0x50e281 = {
          status: "待发车",
          statusClass: "status-pending"
        };
        if (!_0x121e0.sendAt) {
          return _0x50e281;
        }
        const _0x57375e = {
          "1": 2.5,
          "2": 2.5,
          "3": 3,
          "4": 3,
          "5": 4,
          "6": 4
        };
        const _0x57f85f = (_0x57375e[_0x121e0.quality] || 0) * 3600000;
        const _0x6e91f1 = {
          status: "未知状态",
          statusClass: "status-pending"
        };
        if (!_0x57f85f) {
          return _0x6e91f1;
        }
        const _0x27bb84 = _0x121e0.sendAt * 1000 + _0x57f85f - Date.now();
        if (_0x27bb84 <= 0) {
          return {
            status: "已完成",
            statusClass: "status-completed"
          };
        }
        const _0x362654 = _0x19b7b5 => _0x19b7b5.toString().padStart(2, "0");
        return {
          status: "剩余 " + _0x362654(Math.floor(_0x27bb84 / 3600000)) + ":" + _0x362654(Math.floor(_0x27bb84 % 3600000 / 60000)) + ":" + _0x362654(Math.floor(_0x27bb84 % 60000 / 1000)),
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
        const _0x2d5fa6 = this.state.fullCarData.length > 0;
        this.dom.dataTable.style.display = _0x2d5fa6 ? "table" : "none";
        if (!_0x2d5fa6) {
          {
            this.stopTimeRefresh();
            return;
          }
        }
        this.dom.dataBody.innerHTML = "";
        const _0x1882ee = [...this.state.fullCarData].sort((_0x3c173f, _0x23cc85) => _0x3c173f.slot - _0x23cc85.slot);
        const _0x4fcb5e = {
          "金砖": 2000,
          "万能碎片": 10,
          "招募令": 10,
          "白玉": 2000,
          "彩玉": 2
        };
        const _0x553ab0 = _0x24b9f3 => {
          {
            const [_0x11bc09, _0x44d8d8] = _0x24b9f3.split(":");
            return _0x44d8d8 && parseInt(_0x44d8d8) >= (_0x4fcb5e[_0x11bc09] || Infinity);
          }
        };
        _0x1882ee.forEach(_0x557ff2 => {
          {
            const _0x367ae4 = this.getCarStatus(_0x557ff2);
            let _0x6a4142 = "<div class=\"car-status " + _0x367ae4.statusClass + "\">" + _0x367ae4.status + "</div>";
            if (!_0x557ff2.sendAt) {
              {
                const _0x2c1017 = 5 - _0x557ff2.refreshCount;
                _0x6a4142 += "<div class=\"pity-counter " + (_0x2c1017 <= 1 ? "mythic-guaranteed" : "") + "\">" + (_0x2c1017 <= 1 ? "本次刷新必出神话" : "再刷" + _0x2c1017 + "次出神话") + "</div>";
              }
            }
            const _0x553b2a = !this.isCarEventActive() || this.state.sendCount >= 4;
            const _0x2fc7b7 = _0x367ae4.statusClass === "status-completed";
            let _0x2b22b3 = "";
            if (!_0x557ff2.sendAt) {
              {
                _0x2b22b3 = "<button class=\"car-action-btn\" data-action=\"refresh\" data-id=\"" + _0x557ff2.carId + "\">刷新</button>";
                if (Number(_0x557ff2.quality || 0) >= 5) {
                  {
                    const _0x531f8c = (this.state.helperSelectionByCarId || {})[String(_0x557ff2.carId)];
                    const _0x4ba27e = _0x531f8c ? this.getMemberName(_0x531f8c) : "";
                    _0x2b22b3 += "<button class=\"car-action-btn helper\" data-action=\"setHelper\" data-id=\"" + _0x557ff2.carId + "\">" + (_0x4ba27e ? "护卫(" + _0x4ba27e + ")" : "护卫") + "</button>";
                  }
                }
                _0x2b22b3 += "<button class=\"car-action-btn send " + (_0x553b2a ? "is-disabled" : "") + "\" data-action=\"send\" data-id=\"" + _0x557ff2.carId + "\">发车</button>";
              }
            } else {
              {
                _0x2b22b3 = "<button class=\"car-action-btn claim " + (_0x2fc7b7 ? "" : "is-disabled") + "\" data-action=\"claim\" data-id=\"" + _0x557ff2.carId + "\">收车</button>";
              }
            }
            const _0x2a8994 = this.dom.dataBody.insertRow();
            const _0x54598a = _0x557ff2.rewards.map(_0x1dc7db => "<span class=\"" + (_0x553ab0(_0x1dc7db) ? "highlight-reward" : "") + "\">" + _0x1dc7db + "</span>").join("") || "暂无";
            _0x2a8994.innerHTML = "<td>" + (_0x557ff2.slot + 1) + "</td><td style=\"" + this.getCarQualityStyle(_0x557ff2.quality) + "\">" + this.getCarQualityText(_0x557ff2.quality) + "</td><td class=\"car-rewards\" title=\"" + _0x557ff2.rewards.join("，") + "\">" + _0x54598a + "</td><td>" + _0x6a4142 + "</td><td>" + _0x2b22b3 + "</td>";
          }
        });
        this.renderBatchActionsAndFilterPanel();
        this.startTimeRefresh();
      }
    },
    renderBatchActionsAndFilterPanel() {
      {
        let _0x186eba = this.dom.dataTable.parentElement;
        let _0x532022 = _0x186eba.querySelector(".car-batch-actions");
        if (!_0x532022) {
          {
            _0x532022 = document.createElement("div");
            _0x532022.className = "car-batch-actions";
            _0x532022.style.cssText = "margin-top: 10px; display: flex; gap: 10px;";
            _0x186eba.appendChild(_0x532022);
          }
        }
        const _0x18f8f9 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0xd23379 => !_0xd23379.sendAt);
        const _0x2e4839 = this.state.fullCarData.some(_0x3b87fb => this.getCarStatus(_0x3b87fb).statusClass === "status-completed");
        _0x532022.innerHTML = "\n            <button class=\"task-btn " + (!_0x18f8f9 ? "is-disabled" : "") + "\" data-action=\"sendAll\">一键发车</button>\n            <button class=\"task-btn " + (!_0x2e4839 ? "is-disabled" : "") + "\" data-action=\"claimAll\">一键收车</button>\n            <button class=\"task-btn\" data-action=\"openMembers\">查看成员</button>\n            <button class=\"task-btn\" data-action=\"toggleRefreshFilter\">刷新条件</button>\n        ";
        let _0x3cae76 = _0x186eba.querySelector(".refresh-filter-panel");
        if (!_0x3cae76) {
          {
            _0x3cae76 = document.createElement("div");
            _0x3cae76.className = "refresh-filter-panel";
            _0x3cae76.style.cssText = "display: none; margin-top: 10px; padding: 10px; border: 1px solid var(--item-border); border-radius: 7px; background: var(--item-bg);";
            _0x186eba.appendChild(_0x3cae76);
            this.buildFilterPanelUI(_0x3cae76);
            this.setupFilterPanelEvents(_0x3cae76);
            this.loadUserSettings();
          }
        }
        this.updateRefreshButtonState();
      }
    },
    buildFilterPanelUI(_0x384587) {
      {
        _0x384587.innerHTML = "\n            <style>\n                .filter-group { border: 1px solid var(--item-border); border-radius: 5px; padding: 8px; margin-bottom: 10px; }\n                .group-title { font-size: 13px; font-weight: bold; color: var(--text-primary); display: block; margin-bottom: 8px; }\n                .filter-row, .placeholder-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }\n                .filter-row-label { font-size: 12px; color: var(--text-secondary); min-width: 60px; text-align: right; }\n                .filter-row-value, .placeholder-select { width: 90px; padding: 3px; font-size: 12px; box-sizing: border-box; }\n                .count-selector { display: flex; align-items: center; gap: 0; }\n                .count-display { padding: 0 10px; font-size: 12px; min-width: 40px; text-align: center; }\n                .add-condition-btn { font-size: 12px; padding: 2px 8px; margin-top: 5px; }\n                .remove-condition-btn { font-size: 12px; padding: 0; height: 22px; width: 22px; cursor: pointer; border-radius: 50%; }\n                /* 调整赛车模块按钮字体大小 */\n                #car-module .car-batch-actions button.task-btn, #car-module .refresh-filter-panel button.task-btn { \n                    font-size: 11px !important; \n                    line-height: 1.2;\n                }\n            </style>\n\n            <div class=\"filter-group\" id=\"and-conditions-group\">\n                <strong class=\"group-title\">必须同时满足 (AND)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"and\">[+] 添加必须条件</button>\n            </div>\n\n            <div class=\"filter-group\" id=\"or-conditions-group\">\n                <strong class=\"group-title\">并满足任一条件 (OR)</strong>\n                <div class=\"group-content\"></div>\n                <button class=\"task-btn add-condition-btn\" data-group=\"or\">[+] 添加任一条件</button>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 10px; margin-top: 15px;\">\n                <span style=\"font-size: 12px; font-weight: bold; min-width: 80px;\">单车最大刷新:</span>\n                <div class=\"count-selector\">\n                    <button class=\"task-btn\" data-action=\"decrement-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">-</button>\n                    <span id=\"max-refresh-count\" class=\"count-display\">5</span>\n                    <button class=\"task-btn\" data-action=\"increment-refresh-count\" style=\"width: 28px; height: 28px; padding: 0;\">+</button>\n                </div>\n            </div>\n            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px;\">\n                <button class=\"task-btn is-disabled\" id=\"start-batch-refresh\" data-action=\"startBatchRefresh\">一键刷新</button>\n                <button class=\"task-btn\" id=\"send-all-cars-panel\" data-action=\"sendAll\">一键发车</button>\n            </div>\n        ";
      }
    },
    setupFilterPanelEvents(_0x28dcfc) {
      {
        const _0x28d65b = (_0x5ccbd1, _0x3eb7d8) => {
          {
            let _0x4c3a22;
            return (..._0x199ed3) => {
              clearTimeout(_0x4c3a22);
              _0x4c3a22 = setTimeout(() => _0x5ccbd1.apply(this, _0x199ed3), _0x3eb7d8);
            };
          }
        };
        const _0xcd4820 = _0x28d65b(() => this.saveUserSettings(), 500);
        _0x28dcfc.addEventListener("click", _0x3ad778 => {
          {
            const _0x420fff = _0x3ad778.target;
            const _0x555e76 = _0x420fff.dataset.action;
            if (_0x555e76 === "increment-refresh-count" || _0x555e76 === "decrement-refresh-count") {
              {
                const _0x2b98b9 = document.getElementById("max-refresh-count");
                let _0x1674a0 = parseInt(_0x2b98b9.textContent);
                if (_0x555e76 === "increment-refresh-count" && _0x1674a0 < 100) {
                  _0x1674a0++;
                }
                if (_0x555e76 === "decrement-refresh-count" && _0x1674a0 > 1) {
                  _0x1674a0--;
                }
                _0x2b98b9.textContent = _0x1674a0;
                this.saveUserSettings();
              }
            } else {
              if (_0x420fff.classList.contains("add-condition-btn")) {
                this.addConditionPlaceholder(_0x420fff.dataset.group);
              } else {
                if (_0x420fff.classList.contains("remove-condition-btn")) {
                  {
                    _0x420fff.closest(".filter-row, .placeholder-row").remove();
                    this.saveUserSettings();
                    this.updateRefreshButtonState();
                  }
                }
              }
            }
          }
        });
        _0x28dcfc.addEventListener("change", _0x568193 => {
          {
            const _0x5c2cc9 = _0x568193.target;
            if (_0x5c2cc9.classList.contains("placeholder-select")) {
              this.transformPlaceholder(_0x5c2cc9);
            } else {
              {
                this.saveUserSettings();
                this.updateRefreshButtonState();
              }
            }
          }
        });
        _0x28dcfc.addEventListener("input", _0x458a2c => {
          {
            if (_0x458a2c.target.type === "number") {
              _0xcd4820();
            }
          }
        });
      }
    },
    addConditionPlaceholder(_0x47e7ca) {
      {
        const _0x470b24 = document.querySelector("#" + _0x47e7ca + "-conditions-group .group-content");
        const _0xb04881 = new Set([...document.querySelectorAll(".filter-row")].map(_0x226824 => _0x226824.dataset.type));
        const _0x5cf41c = this.state.availableConditions.filter(_0x4a80f7 => !_0xb04881.has(_0x4a80f7));
        if (_0x5cf41c.length === 0) {
          {
            _0x43bafd.showtip("所有条件都已添加", "info");
            return;
          }
        }
        const _0x377418 = document.createElement("div");
        _0x377418.className = "placeholder-row";
        const _0x1913ee = _0x5cf41c.map(_0x537dc5 => "<option value=\"" + _0x537dc5 + "\">" + _0x537dc5 + "</option>").join("");
        _0x377418.innerHTML = "\n            <input type=\"checkbox\" checked disabled>\n            <select class=\"placeholder-select\"><option value=\"\">--选择条件--</option>" + _0x1913ee + "</select>\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x470b24.appendChild(_0x377418);
      }
    },
    transformPlaceholder(_0x425909) {
      {
        const _0x963279 = _0x425909.closest(".placeholder-row");
        const _0x5d3e6d = _0x425909.value;
        if (!_0x5d3e6d) {
          return;
        }
        const _0xb02c2 = document.createElement("div");
        _0xb02c2.className = "filter-row";
        _0xb02c2.dataset.type = _0x5d3e6d;
        let _0x1b4fe1 = "";
        if (_0x5d3e6d === "品质") {
          {
            _0x1b4fe1 = "<select class=\"filter-row-value\">\n                           <option value=\"6\">传奇</option>\n                           <option value=\"5\" selected>神话</option>\n                           <option value=\"4\">传说</option>\n                           <option value=\"3\">史诗</option>\n                           <option value=\"2\">稀有</option>\n                           <option value=\"1\">普通</option>\n                       </select>";
          }
        } else {
          {
            const _0xe79201 = {
              "金砖": 2000,
              "招募令": 10,
              "彩玉": 5,
              "白玉": 2000,
              "万能碎片": 10,
              "刷新券": 4
            };
            const _0x40cd19 = _0xe79201[_0x5d3e6d] || 1;
            _0x1b4fe1 = "<input type=\"number\" class=\"filter-row-value\" value=\"" + _0x40cd19 + "\" min=\"1\">";
          }
        }
        _0xb02c2.innerHTML = "\n            <input type=\"checkbox\" class=\"condition-enabled\" checked>\n            <label class=\"filter-row-label\">" + _0x5d3e6d + " ≥</label>\n            " + _0x1b4fe1 + "\n            <button class=\"task-btn remove-condition-btn\">-</button>\n        ";
        _0x963279.replaceWith(_0xb02c2);
        this.saveUserSettings();
        this.updateRefreshButtonState();
      }
    },
    saveUserSettings() {
      {
        const _0x36ebd3 = {
          and: [],
          or: [],
          maxRefresh: document.getElementById("max-refresh-count").textContent
        };
        document.querySelectorAll("#and-conditions-group .filter-row").forEach(_0x188ff9 => {
          {
            _0x36ebd3.and.push({
              type: _0x188ff9.dataset.type,
              enabled: _0x188ff9.querySelector(".condition-enabled").checked,
              value: _0x188ff9.querySelector(".filter-row-value").value
            });
          }
        });
        document.querySelectorAll("#or-conditions-group .filter-row").forEach(_0x4719c7 => {
          {
            _0x36ebd3.or.push({
              type: _0x4719c7.dataset.type,
              enabled: _0x4719c7.querySelector(".condition-enabled").checked,
              value: _0x4719c7.querySelector(".filter-row-value").value
            });
          }
        });
        localStorage.setItem("carModuleSettings_v3", JSON.stringify(_0x36ebd3));
      }
    },
    loadUserSettings() {
      {
        const _0xae3f96 = localStorage.getItem("carModuleSettings_v3");
        if (!_0xae3f96) {
          return;
        }
        const _0x8a66b5 = JSON.parse(_0xae3f96);
        const _0x445072 = _0x34e6bb => {
          {
            const _0x5db67a = document.createElement("div");
            _0x5db67a.className = "filter-row";
            _0x5db67a.dataset.type = _0x34e6bb.type;
            let _0x55cdb4 = "";
            _0x34e6bb.type === "品质" ? _0x55cdb4 = "<select class=\"filter-row-value\"><option value=\"6\">传奇</option><option value=\"5\">神话</option><option value=\"4\">传说</option><option value=\"3\">史诗</option><option value=\"2\">稀有</option></select>" : _0x55cdb4 = "<input type=\"number\" class=\"filter-row-value\" min=\"1\">";
            _0x5db67a.innerHTML = "\n                <input type=\"checkbox\" class=\"condition-enabled\" " + (_0x34e6bb.enabled ? "checked" : "") + ">\n                <label class=\"filter-row-label\">" + _0x34e6bb.type + " ≥</label>\n                " + _0x55cdb4 + "\n                <button class=\"task-btn remove-condition-btn\">-</button>\n            ";
            _0x5db67a.querySelector(".filter-row-value").value = _0x34e6bb.value;
            return _0x5db67a;
          }
        };
        const _0x4e666c = document.querySelector("#and-conditions-group .group-content");
        _0x4e666c.innerHTML = "";
        _0x8a66b5.and.forEach(_0x275093 => _0x4e666c.appendChild(_0x445072(_0x275093)));
        const _0x3c6ca0 = document.querySelector("#or-conditions-group .group-content");
        _0x3c6ca0.innerHTML = "";
        _0x8a66b5.or.forEach(_0x55005e => _0x3c6ca0.appendChild(_0x445072(_0x55005e)));
        document.getElementById("max-refresh-count").textContent = _0x8a66b5.maxRefresh;
        this.updateRefreshButtonState();
      }
    },
    updateRefreshButtonState() {
      {
        const _0x2a8197 = document.querySelector(".refresh-filter-panel");
        if (!_0x2a8197) {
          return;
        }
        const _0x48be49 = _0x2a8197.querySelector("#start-batch-refresh");
        const _0xf313b8 = _0x2a8197.querySelector(".condition-enabled:checked");
        if (_0xf313b8) {
          {
            _0x48be49.classList.remove("is-disabled");
          }
        } else {
          _0x48be49.classList.add("is-disabled");
        }
        const _0x53a0b1 = _0x2a8197.querySelector("#send-all-cars-panel");
        const _0x3038f5 = this.isCarEventActive() && this.state.sendCount < 4 && this.state.fullCarData.some(_0x3b0e4c => !_0x3b0e4c.sendAt);
        if (_0x3038f5) {
          {
            _0x53a0b1.classList.remove("is-disabled");
          }
        } else {
          _0x53a0b1.classList.add("is-disabled");
        }
      }
    },
    async startBatchRefresh() {
      {
        if (this.state.isBatchRefreshing) {
          {
            _0x43bafd.showtip("一键刷新任务已在进行中", "warning");
            return;
          }
        }
        const _0x4d1401 = document.getElementById("start-batch-refresh");
        const _0x5ea499 = _0x4d1401 ? _0x4d1401.textContent : "启动...";
        try {
          {
            this.state.isBatchRefreshing = true;
            _0x4d1401 && (_0x4d1401.disabled = true, _0x4d1401.textContent = "运行中...");
            const _0x579785 = parseInt(document.getElementById("max-refresh-count")?.["textContent"] || 5);
            const {
              andConditions: _0x756295,
              orConditions: _0x3382c1
            } = this.collectConditionsFromUI();
            if (_0x756295.length === 0 && _0x3382c1.length === 0) {
              {
                _0x43bafd.showtip("请至少设置一个启用的刷新条件", "error");
                return;
              }
            }
            let _0x153979 = this.state.fullCarData.filter(_0x16d991 => !_0x16d991.sendAt).map(_0x54a38a => ({
              car: _0x54a38a,
              refreshCount: 0,
              isSatisfied: this.checkCarFilterConditions(_0x54a38a, _0x756295, _0x3382c1)
            }));
            const _0x5eb6c0 = _0x153979.filter(_0x4d4a58 => _0x4d4a58.isSatisfied).length;
            if (_0x5eb6c0 > 0) {
              {
                _0x43bafd.showtip("已有 " + _0x5eb6c0 + " 辆车满足条件，将跳过。", "info");
              }
            }
            let _0x2d5ea5 = _0x153979.filter(_0x368c46 => !_0x368c46.isSatisfied);
            if (_0x2d5ea5.length === 0) {
              {
                _0x43bafd.showtip("所有待发车辆都已满足条件，无需刷新！", "success");
                return;
              }
            }
            _0x43bafd.showtip("任务开始，将为 " + _0x2d5ea5.length + " 辆车进行刷新...", "info");
            let _0x53b109 = 0;
            for (const _0x3798d7 of _0x2d5ea5) {
              {
                if (!this.state.isBatchRefreshing) {
                  {
                    _0x43bafd.showtip("任务已手动停止。", "warning");
                    break;
                  }
                }
                while (_0x3798d7.refreshCount < _0x579785 && !_0x3798d7.isSatisfied) {
                  {
                    this.dom.statusEl.textContent = "🔄 刷新中... 车位 " + (_0x3798d7.car.slot + 1) + " (第 " + (_0x3798d7.refreshCount + 1) + "/" + _0x579785 + " 次)";
                    const _0x49d558 = await this.performCarAction("refresh", _0x3798d7.car.carId, "刷新");
                    if (!_0x49d558) {
                      {
                        _0x43bafd.showtip("车位 " + (_0x3798d7.car.slot + 1) + " 刷新失败，可能金砖不足，将跳过此车。", "warning");
                        break;
                      }
                    }
                    _0x3798d7.refreshCount++;
                    _0x53b109++;
                    await this.queryClubCars();
                    const _0xdcd1ec = this.state.fullCarData.find(_0x142c8c => _0x142c8c.carId === _0x3798d7.car.carId);
                    if (_0xdcd1ec) {
                      {
                        _0x3798d7.car = _0xdcd1ec;
                        this.checkCarFilterConditions(_0xdcd1ec, _0x756295, _0x3382c1) && (_0x3798d7.isSatisfied = true, _0x43bafd.showtip("🎉 车位 " + (_0xdcd1ec.slot + 1) + " 在刷新 " + _0x3798d7.refreshCount + " 次后满足条件！", "success"));
                      }
                    } else {
                      {
                        _0x43bafd.showtip("车位 " + (_0x3798d7.car.slot + 1) + " 数据刷新后丢失，跳过此车。", "error");
                        break;
                      }
                    }
                    await new Promise(_0x100667 => setTimeout(_0x100667, 400));
                  }
                }
                !_0x3798d7.isSatisfied && _0x3798d7.refreshCount >= _0x579785 && _0x43bafd.showtip("车位 " + (_0x3798d7.car.slot + 1) + " 已达刷新上限 (" + _0x579785 + "次)，仍未满足条件。", "info");
              }
            }
            const _0x5bb49b = _0x153979.filter(_0x4d5ef3 => _0x4d5ef3.isSatisfied).length;
            _0x43bafd.showtip("刷新任务结束。共 " + _0x5bb49b + "/" + _0x153979.length + " 辆车满足条件，总计刷新 " + _0x53b109 + " 次。", "success");
            this.dom.statusEl.textContent = "✅ 刷新完成: " + _0x5bb49b + "/" + _0x153979.length + " 辆满足";
          }
        } catch (_0x51c9c7) {
          {
            console.error("一键刷新过程中发生错误:", _0x51c9c7);
            _0x43bafd.showtip("刷新过程出错，详情请查看控制台。", "error");
            this.dom.statusEl.textContent = "❌ 刷新出错";
          }
        } finally {
          this.state.isBatchRefreshing = false;
          _0x4d1401 && (_0x4d1401.disabled = false, _0x4d1401.textContent = _0x5ea499);
          setTimeout(() => this.queryClubCars(), 500);
        }
      }
    },
    collectConditionsFromUI() {
      {
        const _0x1a6c3a = [];
        const _0x28b61d = [];
        const _0xfd5a2b = (_0xe5a363, _0x4cedd4) => {
          {
            document.querySelectorAll("#" + _0xe5a363 + " .filter-row").forEach(_0x1c2f22 => {
              {
                if (_0x1c2f22.querySelector(".condition-enabled").checked) {
                  {
                    const _0x26ed3c = _0x1c2f22.dataset.type;
                    const _0x487550 = _0x1c2f22.querySelector(".filter-row-value").value;
                    if (_0x26ed3c === "品质") {
                      _0x4cedd4.push({
                        type: "quality",
                        value: parseInt(_0x487550)
                      });
                    } else {
                      {
                        _0x4cedd4.push({
                          type: "reward",
                          item: _0x26ed3c,
                          count: parseInt(_0x487550) || 1
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        };
        _0xfd5a2b("and-conditions-group", _0x1a6c3a);
        _0xfd5a2b("or-conditions-group", _0x28b61d);
        const _0x12d2e4 = {
          andConditions: _0x1a6c3a,
          orConditions: _0x28b61d
        };
        return _0x12d2e4;
      }
    },
    checkCarFilterConditions(_0x13693c, _0x473dd4, _0x2bc47c) {
      {
        if (_0x473dd4.length === 0 && _0x2bc47c.length === 0) {
          return false;
        }
        const _0x3ea388 = _0xcc985 => {
          {
            if (_0xcc985.type === "quality") {
              {
                return _0x13693c.quality >= _0xcc985.value;
              }
            } else {
              if (_0xcc985.type === "reward") {
                {
                  return this.checkSingleRewardCondition(_0x13693c.rewards, _0xcc985);
                }
              }
            }
            return false;
          }
        };
        const _0x557c20 = _0x473dd4.every(_0x3ea388);
        if (!_0x557c20) {
          return false;
        }
        if (_0x2bc47c.length === 0) {
          return true;
        }
        const _0x4eb84f = _0x2bc47c.some(_0x3ea388);
        return _0x4eb84f;
      }
    },
    checkSingleRewardCondition(_0x14cab0, _0x4e8364) {
      {
        const {
          item: _0x2abd38,
          count: _0x3132e0
        } = _0x4e8364;
        for (const _0x4ec639 of _0x14cab0) {
          {
            const [_0x3e0288, _0x4d5544] = _0x4ec639.split(":");
            if (_0x3e0288 === _0x2abd38) {
              {
                if (parseInt(_0x4d5544) >= _0x3132e0) {
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
            const _0xa16a0b = await _0x43bafd.sendCommand("car_getrolecar");
            if (_0xa16a0b?.["code"] !== 0) {
              throw new Error(_0xa16a0b?.["msg"] || "Code: " + _0xa16a0b?.["code"]);
            }
            const _0x28c530 = (_0x1bf2cb, _0x2a2da8) => _0x2a2da8.split(".").reduce((_0xa5f44b, _0x12ef14) => _0xa5f44b?.[_0x12ef14], _0x1bf2cb);
            const _0x1ca28b = _0x28c530(_0xa16a0b, "_rawData.body.roleCar") || _0x28c530(_0xa16a0b, "data.body.roleCar") || _0x28c530(_0xa16a0b, "_rawData.roleCar") || _0x28c530(_0xa16a0b, "data.roleCar");
            const _0x510c4d = _0x1ca28b?.["carDataMap"] || {};
            let _0x380a7b = _0x1ca28b?.["sendCnt"] || 0;
            const _0x30f906 = new Date().getDay() >= 1 && new Date().getDay() <= 3;
            if (_0x30f906 && _0x1ca28b.sendCntResetTime) {
              {
                const _0x485f0d = new Date(_0x1ca28b.sendCntResetTime * 1000);
                const _0x20aff2 = new Date();
                if (_0x485f0d.getFullYear() !== _0x20aff2.getFullYear() || _0x485f0d.getMonth() !== _0x20aff2.getMonth() || _0x485f0d.getDate() !== _0x20aff2.getDate()) {
                  {
                    _0x380a7b = 0;
                  }
                }
              }
            }
            this.state.sendCount = this.isCarEventActive() ? _0x380a7b : 0;
            this.state.fullCarData = Object.entries(_0x510c4d).map(([_0x4185f4, _0x57c9a0]) => ({
              id: _0x4185f4,
              ..._0x57c9a0,
              carId: _0x4185f4,
              quality: _0x57c9a0.color,
              rewards: this.parseRewards(_0x57c9a0.rewards)
            }));
            this.renderCarData();
            const _0x3e725a = "今日已发车: " + this.state.sendCount + "/4" + (!this.isCarEventActive() ? " (非活动时间)" : "");
            this.dom.statusEl.textContent = "✅ " + _0x3e725a;
          }
        } catch (_0x432528) {
          _0x43bafd.showtip("查询失败: " + _0x432528.message, "error");
          this.dom.statusEl.textContent = "❌ 查询出错";
        }
      }
    },
    async sendCar(_0x47b6f7) {
      {
        if (!this.isCarEventActive()) {
          return _0x43bafd.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x43bafd.showtip("今日发车次数已用完", "error");
        }
        if (await this.performCarAction("send", _0x47b6f7)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async refreshCar(_0x348642) {
      {
        if (await this.performCarAction("refresh", _0x348642)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async claimCar(_0x2ad90f) {
      {
        if (await this.performCarAction("claim", _0x2ad90f)) {
          {
            setTimeout(() => this.queryClubCars(), 300);
          }
        }
      }
    },
    async sendAllCars() {
      {
        if (!this.isCarEventActive()) {
          return _0x43bafd.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x43bafd.showtip("今日发车次数已用完", "error");
        }
        const _0x1c54eb = this.state.fullCarData.filter(_0x56e845 => !_0x56e845.sendAt);
        if (_0x1c54eb.length === 0) {
          return _0x43bafd.showtip("没有可发车的赛车", "info");
        }
        const _0x4aebf0 = Math.min(_0x1c54eb.length, 4 - this.state.sendCount);
        if (_0x4aebf0 === 0) {
          return _0x43bafd.showtip("今日发车次数已用完", "error");
        }
        this.dom.statusEl.textContent = "🚀 批量发送中...";
        let _0x3bd79e = 0;
        for (let _0x4dda2e = 0; _0x4dda2e < _0x4aebf0; _0x4dda2e++) {
          {
            (await this.performCarAction("send", _0x1c54eb[_0x4dda2e].carId, true)) && _0x3bd79e++;
            if (_0x4dda2e < _0x4aebf0 - 1) {
              await new Promise(_0xb88829 => setTimeout(_0xb88829, 300));
            }
          }
        }
        _0x43bafd.showtip("成功发送 " + _0x3bd79e + " 辆赛车", _0x3bd79e > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async claimAllCars() {
      {
        const _0x6cbda0 = this.state.fullCarData.filter(_0x47b4e1 => this.getCarStatus(_0x47b4e1).statusClass === "status-completed");
        if (_0x6cbda0.length === 0) {
          return _0x43bafd.showtip("没有可收取的赛车", "info");
        }
        this.dom.statusEl.textContent = "🚀 批量收取中...";
        let _0x160ea9 = 0;
        for (let _0x532dc2 = 0; _0x532dc2 < _0x6cbda0.length; _0x532dc2++) {
          {
            if (await this.performCarAction("claim", _0x6cbda0[_0x532dc2].carId, true)) {
              {
                _0x160ea9++;
              }
            }
            if (_0x532dc2 < _0x6cbda0.length - 1) {
              await new Promise(_0x473342 => setTimeout(_0x473342, 300));
            }
          }
        }
        _0x43bafd.showtip("成功收取 " + _0x160ea9 + " 辆赛车", _0x160ea9 > 0 ? "success" : "error");
        setTimeout(() => this.queryClubCars(), 500);
      }
    },
    async performCarAction(_0x1b829a, _0x3c73a8, _0x581109 = false, _0x99e0dc = 0) {
      {
        if (!_0x581109) {
          {
            const _0x272c37 = {
              send: "发送",
              refresh: "刷新",
              claim: "收获"
            };
            this.dom.statusEl.textContent = "🚀 " + (_0x272c37[_0x1b829a] || _0x1b829a) + "中...";
          }
        }
        try {
          {
            const _0x18b869 = {
              carId: _0x3c73a8,
              helperId: _0x99e0dc,
              text: ""
            };
            const _0x2fb36b = {
              carId: _0x3c73a8
            };
            const _0x22c0c1 = await _0x43bafd.sendCommand("car_" + _0x1b829a, _0x1b829a === "send" ? _0x18b869 : _0x2fb36b);
            if (_0x22c0c1?.["code"] !== 0) {
              throw new Error(_0x22c0c1?.["msg"] || "Code: " + _0x22c0c1?.["code"]);
            }
            !_0x581109 && _0x43bafd.showtip("赛车操作成功", "success");
            return true;
          }
        } catch (_0x449317) {
          {
            !_0x581109 && (_0x43bafd.showtip("操作失败: " + _0x449317.message, "error"), this.dom.statusEl.textContent = "❌ 操作出错");
            console.error("赛车操作 '" + _0x1b829a + "' 失败 (ID: " + _0x3c73a8 + "):", _0x449317.message);
            return false;
          }
        }
      }
    },
    getMemberName(_0x1915ea) {
      {
        try {
          {
            const _0x7ddc1a = this.state.legionMembersMap || {};
            const _0x215272 = _0x7ddc1a[String(_0x1915ea)] || _0x7ddc1a[_0x1915ea];
            return _0x215272 && (_0x215272.name || _0x215272.nickname || _0x215272.roleName) || null;
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
                let _0x58039b = 0;
                while (this._membersLoading && _0x58039b < 10) {
                  await new Promise(_0x4c6d5a => setTimeout(_0x4c6d5a, 100));
                  _0x58039b++;
                }
                return this.state.legionMembersMap || {};
              }
            }
            this._membersLoading = true;
            const _0x112a99 = this.state.legionMembersMap;
            if (_0x112a99 && Object.keys(_0x112a99).length > 0) {
              this._membersLoading = false;
              return _0x112a99;
            }
            const _0x1e8c8c = new Promise((_0x12cb7e, _0x739413) => {
              setTimeout(() => _0x739413(new Error("获取俱乐部成员超时")), 5000);
            });
            const _0x265bc9 = _0x43bafd.sendCommand("legion_getinfo");
            const _0x170e45 = await Promise.race([_0x265bc9, _0x1e8c8c]);
            if (!_0x170e45) {
              {
                throw new Error("无响应数据");
              }
            }
            if (_0x170e45 && _0x170e45.code !== undefined && _0x170e45.code !== 0) {
              {
                console.log("获取俱乐部信息失败，错误码: " + _0x170e45.code + ", 消息: " + (_0x170e45.msg || "未知错误"));
                this._membersLoading = false;
                return _0x112a99 || {};
              }
            }
            let _0x191877 = [];
            if (_0x170e45._rawData) {
              {
                if (_0x170e45._rawData.body?.["info"]?.["members"]) {
                  _0x191877 = _0x170e45._rawData.body.info.members;
                } else {
                  if (_0x170e45._rawData.info?.["members"]) {
                    _0x191877 = _0x170e45._rawData.info.members;
                  } else {
                    if (_0x170e45._rawData.members) {
                      _0x191877 = _0x170e45._rawData.members;
                    } else {
                      if (_0x170e45._rawData.legionData?.["members"]) {
                        _0x191877 = _0x170e45._rawData.legionData.members;
                      }
                    }
                  }
                }
              }
            } else {
              if (_0x170e45.data) {
                {
                  if (_0x170e45.data.body?.["info"]?.["members"]) {
                    _0x191877 = _0x170e45.data.body.info.members;
                  } else {
                    if (_0x170e45.data.info?.["members"]) {
                      _0x191877 = _0x170e45.data.info.members;
                    } else {
                      if (_0x170e45.data.members) {
                        _0x191877 = _0x170e45.data.members;
                      } else {
                        if (_0x170e45.data.legionData?.["members"]) {
                          _0x191877 = _0x170e45.data.legionData.members;
                        }
                      }
                    }
                  }
                }
              } else {
                {
                  if (_0x170e45.info?.["members"]) {
                    _0x191877 = _0x170e45.info.members;
                  } else {
                    if (_0x170e45.members) {
                      _0x191877 = _0x170e45.members;
                    } else {
                      if (_0x170e45.legionData?.["members"]) {
                        _0x191877 = _0x170e45.legionData.members;
                      }
                    }
                  }
                }
              }
            }
            let _0x5bd07b = {};
            if (Array.isArray(_0x191877)) {
              {
                _0x191877.forEach(_0x52aa07 => {
                  {
                    _0x52aa07 && _0x52aa07.roleId != null && (_0x5bd07b[String(_0x52aa07.roleId)] = _0x52aa07);
                  }
                });
              }
            } else {
              if (typeof _0x191877 === "object" && _0x191877) {
                {
                  Object.keys(_0x191877).forEach(_0x155657 => {
                    {
                      const _0x3dd8ed = _0x191877[_0x155657];
                      if (_0x3dd8ed) {
                        {
                          const _0x5759bc = String(_0x3dd8ed.roleId ?? _0x155657);
                          if (_0x5759bc) {
                            _0x5bd07b[_0x5759bc] = _0x3dd8ed;
                          }
                        }
                      }
                    }
                  });
                }
              }
            }
            this.state.legionMembersMap = _0x5bd07b;
            this._membersLoading = false;
            console.log("成功获取俱乐部成员: " + Object.keys(_0x5bd07b).length + " 个");
            return _0x5bd07b;
          }
        } catch (_0x54960e) {
          {
            console.error("获取俱乐部成员失败: " + _0x54960e.message);
            this._membersLoading = false;
            return this.state.legionMembersMap || {};
          }
        }
      }
    },
    openHelperDialog(_0x4c2b6a) {
      {
        if (!_0x4c2b6a) {
          return;
        }
        if (Number(_0x4c2b6a.quality || 0) < 5) {
          return _0x43bafd.showtip("仅品阶≥5的车辆可设置护卫", "warning");
        }
        if (Number(_0x4c2b6a.sendAt || 0) !== 0) {
          return _0x43bafd.showtip("已发车车辆不可设置护卫", "warning");
        }
        !this.state.helperSelectionByCarId && (this.state.helperSelectionByCarId = {});
        let _0x7d98c8 = document.getElementById("helper-dialog");
        let _0x27df27 = document.getElementById("global-ui-overlay");
        if (!_0x7d98c8) {
          {
            _0x27df27 = document.createElement("div");
            _0x27df27.id = "global-ui-overlay";
            _0x27df27.style.cssText = "\n                position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                display: flex; align-items: center; justify-content: center;\n            ";
            _0x7d98c8 = document.createElement("div");
            _0x7d98c8.id = "helper-dialog";
            _0x7d98c8.style.cssText = "\n                position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                background: #ffffff;\n                color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                z-index: 100000;\n            ";
            let _0x402034 = document.getElementById("member-font-style");
            if (!_0x402034) {
              {
                _0x402034 = document.createElement("style");
                _0x402034.id = "member-font-style";
                _0x402034.textContent = "\n                    /* 仅针对对话框内的玩家名字元素 */\n                    #members-content {\n                        font-size: 10px !important;\n                    }\n                    #members-content div[data-mid] {\n                        font-size: 10px !important;\n                    }\n                    #members-content div[data-mid] span[style*=\"white-space:nowrap\"] {\n                        font-size: 10px !important;\n                        line-height: 1.1 !important;\n                    }\n                    #helper-content {\n                        font-size: 10px !important;\n                    }\n                    #helper-content div[data-mid] {\n                        font-size: 10px !important;\n                    }\n                    #helper-content div[data-mid] .__name {\n                        font-size: 10px !important;\n                    }\n                ";
                document.head.appendChild(_0x402034);
              }
            }
            _0x7d98c8.innerHTML = "\n                <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                  <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">选择护卫</div>\n                  <button id=\"helper-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                </div>\n                <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                  <input id=\"helper-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                </div>\n                <div id=\"helper-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                <div style=\"display:flex; align-items:center; gap:8px; justify-content:flex-end; padding:8px 4px;\">\n                  <div style=\"flex:1; font-size:14px; color:#6b7280;\">当前选择: <span id=\"helper-selected-name\" style=\"color:#2563eb;\">未选择</span></div>\n                  <button id=\"helper-cancel\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#e5e7eb; color:#333333; cursor:pointer;\">取消</button>\n                  <button id=\"helper-confirm\" style=\"padding:6px 16px; border-radius:6px; border:none; background:#2563eb; color:#ffffff; cursor:not-allowed; opacity:0.7;\">确定</button>\n                </div>\n            ";
            document.body.appendChild(_0x27df27);
            document.body.appendChild(_0x7d98c8);
          }
        } else {
          {
            _0x27df27.style.display = "flex";
            _0x7d98c8.style.display = "block";
          }
        }
        const _0x4a80ad = document.getElementById("helper-content");
        const _0x476e98 = document.getElementById("helper-selected-name");
        const _0x4a51cb = document.getElementById("helper-cancel");
        const _0x33afce = document.getElementById("helper-confirm");
        const _0x440e34 = document.getElementById("helper-search-input");
        const _0xf92600 = document.getElementById("helper-close");
        if (!_0x4a80ad || !_0x476e98 || !_0x4a51cb || !_0x33afce) {
          {
            console.error("无法找到必要的DOM元素");
            _0x43bafd.showtip("界面加载失败", "error");
            return;
          }
        }
        const _0x22c5ae = _0x4a51cb.cloneNode(true);
        _0x4a51cb.parentNode.replaceChild(_0x22c5ae, _0x4a51cb);
        const _0x375707 = _0x33afce.cloneNode(true);
        _0x33afce.parentNode.replaceChild(_0x375707, _0x33afce);
        const _0x1af561 = _0x440e34.cloneNode(true);
        _0x440e34.parentNode.replaceChild(_0x1af561, _0x440e34);
        const _0xdeaf3a = _0xf92600 ? _0xf92600.cloneNode(true) : null;
        _0xf92600 && _0xdeaf3a && _0xf92600.parentNode.replaceChild(_0xdeaf3a, _0xf92600);
        const _0x1c9a7b = _0x22c5ae;
        const _0x178476 = _0x375707;
        const _0x3f688a = _0x1af561;
        const _0x40fa00 = _0xdeaf3a;
        const _0x188f72 = String((this.state.helperSelectionByCarId || {})[String(_0x4c2b6a.carId)] || "");
        let _0x1c5664 = _0x188f72;
        const _0x486d4d = _0x5ddad6 => {
          {
            const _0x295f23 = Number(_0x5ddad6 || 0);
            if (_0x295f23 >= 100000000) {
              return (_0x295f23 / 100000000).toFixed(2) + "亿";
            }
            if (_0x295f23 >= 10000) {
              return (_0x295f23 / 10000).toFixed(2) + "万";
            }
            return String(_0x295f23);
          }
        };
        const _0x877495 = _0x62174c => {
          {
            try {
              _0x4a80ad.querySelectorAll("div[data-mid]").forEach(_0x12990e => {
                {
                  _0x12990e.style.background = "rgba(255,255,255,0.06)";
                  _0x12990e.style.border = "";
                  const _0x48ba8c = _0x12990e.querySelector("span.__sel_dot");
                  if (_0x48ba8c) {
                    _0x48ba8c.style.background = "#6b7280";
                  }
                }
              });
            } catch (_0x52b322) {
              console.error("重置UI失败:", _0x52b322);
            }
            if (_0x62174c) {
              {
                try {
                  {
                    const _0x391408 = _0x4a80ad.querySelector("div[data-mid=\"" + _0x62174c + "\"]");
                    if (_0x391408) {
                      {
                        _0x391408.style.transition = "background .18s ease, border-color .18s ease";
                        _0x391408.style.background = "rgba(37,99,235,0.18)";
                        _0x391408.style.border = "1px solid #2563eb";
                        const _0x58870f = _0x391408.querySelector("span.__sel_dot");
                        if (_0x58870f) {
                          _0x58870f.style.background = "#22c55e";
                        }
                        const _0x29a2ef = this.getMemberName(_0x62174c) || _0x62174c;
                        _0x476e98.textContent = _0x29a2ef;
                        _0x178476.disabled = false;
                        _0x178476.textContent = "确定（" + _0x29a2ef + "）";
                        _0x178476.style.opacity = "1";
                        _0x178476.style.cursor = "pointer";
                      }
                    }
                  }
                } catch (_0x469952) {
                  console.error("更新选中UI失败:", _0x469952);
                }
              }
            } else {
              {
                _0x476e98.textContent = "未选择";
                _0x178476.disabled = true;
                _0x178476.textContent = "确定";
                _0x178476.style.opacity = "0.7";
                _0x178476.style.cursor = "not-allowed";
              }
            }
          }
        };
        const _0x277133 = (_0xa2cfb2 = "", _0x4c9bd9 = {}, _0x5e57d0 = {}) => {
          {
            try {
              {
                const _0xa3f47f = String(_0xa2cfb2 || "").trim().toLowerCase();
                const _0x5928e9 = Object.keys(_0x4c9bd9).filter(_0x595fc3 => {
                  {
                    try {
                      {
                        const _0x55a9d8 = _0x4c9bd9[_0x595fc3];
                        const _0xe840a4 = _0x55a9d8?.["name"] || _0x55a9d8?.["nickname"] || "";
                        return !_0xa3f47f || String(_0x595fc3).includes(_0xa3f47f) || String(_0xe840a4).toLowerCase().includes(_0xa3f47f);
                      }
                    } catch (_0x1928c7) {
                      {
                        return false;
                      }
                    }
                  }
                }).map(_0x95cfa6 => {
                  {
                    try {
                      {
                        const _0x30773f = _0x4c9bd9[_0x95cfa6];
                        const _0x392d40 = Number(_0x5e57d0[String(_0x95cfa6)] ?? 0);
                        const _0x423ee6 = _0x30773f?.["name"] || _0x30773f?.["nickname"] || _0x95cfa6;
                        const _0x41543b = Number(_0x30773f?.["power"] ?? _0x30773f?.["s_power"] ?? _0x30773f?.["custom"]?.["s_power"] ?? 0);
                        const _0x4f913b = _0x392d40 >= 4;
                        const _0x726804 = _0x30773f?.["headImg"] || _0x30773f?.["avatar"] || "/icons/xiaoyugan.png";
                        const _0x1f36b2 = _0x1c5664 === _0x95cfa6 ? "#22c55e" : "#6b7280";
                        return "<div data-mid=\"" + _0x95cfa6 + "\" data-disabled=\"" + (_0x4f913b ? "1" : "") + "\" style=\"display:flex; align-items:center; justify-content:space-between; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb; cursor:" + (_0x4f913b ? "not-allowed" : "pointer") + ";\">\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <img src=\"" + _0x726804 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <span class=\"__name\">" + _0x423ee6 + "</span>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x486d4d(_0x41543b) + "</span>\n                                      <span style=\"font-size:12px; color:" + (_0x4f913b ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x392d40 + "/4</span>\n                                      <span class=\"__sel_dot\" style=\"width:10px; height:10px; border-radius:50%; background:" + _0x1f36b2 + "\"></span>\n                                    </div>\n                                </div>";
                      }
                    } catch (_0x5637d5) {
                      {
                        return "";
                      }
                    }
                  }
                }).filter(_0x1f4704 => _0x1f4704).join("");
                _0x4a80ad.innerHTML = _0x5928e9 || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
                _0x4a80ad.querySelectorAll("div[data-mid]").forEach(_0x86417d => {
                  {
                    _0x86417d.addEventListener("click", function () {
                      {
                        const _0x2f0954 = this.getAttribute("data-disabled") === "1";
                        if (_0x2f0954) {
                          return _0x43bafd.showtip("该成员当前护卫次数已满", "warning");
                        }
                        _0x1c5664 = this.getAttribute("data-mid") || "";
                        _0x877495(_0x1c5664);
                      }
                    });
                  }
                });
                _0x877495(_0x1c5664);
              }
            } catch (_0x1a71db) {
              console.error("渲染列表失败:", _0x1a71db);
              _0x4a80ad.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
            }
          }
        };
        const _0x5b5187 = () => {
          {
            try {
              {
                const _0x31a114 = document.getElementById("member-font-style");
                if (_0x31a114) {
                  {
                    _0x31a114.remove();
                  }
                }
                if (_0x7d98c8) {
                  _0x7d98c8.style.display = "none";
                }
                if (_0x27df27) {
                  _0x27df27.style.display = "none";
                }
              }
            } catch (_0x28be1f) {
              console.error("关闭弹窗失败:", _0x28be1f);
            }
          }
        };
        _0x3f688a.oninput = function () {
          {
            clearTimeout(_0x3f688a.searchTimer);
            _0x3f688a.searchTimer = setTimeout(() => {
              _0x32de1(this.value);
            }, 300);
          }
        };
        _0x1c9a7b.onclick = _0x5b5187;
        if (_0x40fa00) {
          _0x40fa00.onclick = _0x5b5187;
        }
        _0x178476.onclick = () => {
          {
            try {
              {
                if (_0x1c5664) {
                  {
                    (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x4c2b6a.carId)] = String(_0x1c5664);
                    const _0x48d959 = this.getMemberName(_0x1c5664) || _0x1c5664;
                    _0x43bafd.showtip("已设置护卫：" + _0x48d959, "success");
                  }
                } else {
                  {
                    (this.state.helperSelectionByCarId || (this.state.helperSelectionByCarId = {}))[String(_0x4c2b6a.carId)] = 0;
                    _0x43bafd.showtip("已取消护卫", "info");
                  }
                }
                _0x5b5187();
              }
            } catch (_0x248817) {
              {
                console.error("确认选择失败:", _0x248817);
                _0x43bafd.showtip("设置护卫失败", "error");
              }
            }
          }
        };
        _0x27df27 && (_0x27df27.style.cursor = "pointer", _0x27df27.onclick = function (_0x22b8ed) {
          {
            if (_0x22b8ed.target === this) {
              _0x5b5187();
            }
          }
        });
        const _0x32de1 = (_0x4b53b5 = "") => {
          _0x4a80ad.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
          Promise.all([new Promise(_0x43466a => {
            {
              try {
                {
                  const _0x1a0c5d = this.ensureLegionMembers();
                  if (_0x1a0c5d && typeof _0x1a0c5d.then === "function") {
                    {
                      _0x1a0c5d.then(_0x5d70e7 => _0x43466a(_0x5d70e7 || {})).catch(() => _0x43466a({}));
                    }
                  } else {
                    {
                      _0x43466a(_0x1a0c5d || {});
                    }
                  }
                }
              } catch (_0x277956) {
                console.error("获取成员数据出错:", _0x277956);
                _0x43466a({});
              }
            }
          }), new Promise(_0x147f85 => {
            {
              try {
                _0x43bafd.sendCommand("car_getmemberhelpingcnt").then(_0x15a517 => {
                  {
                    try {
                      {
                        let _0x230748 = {};
                        let _0x24830c = {};
                        if (_0x15a517) {
                          {
                            if (_0x15a517._rawData?.["body"]?.["memberHelpingCntMap"]) {
                              _0x24830c = _0x15a517._rawData.body.memberHelpingCntMap;
                            } else {
                              if (_0x15a517._rawData?.["memberHelpingCntMap"]) {
                                _0x24830c = _0x15a517._rawData.memberHelpingCntMap;
                              } else {
                                if (_0x15a517.data?.["body"]?.["memberHelpingCntMap"]) {
                                  _0x24830c = _0x15a517.data.body.memberHelpingCntMap;
                                } else {
                                  if (_0x15a517.data?.["memberHelpingCntMap"]) {
                                    _0x24830c = _0x15a517.data.memberHelpingCntMap;
                                  } else {
                                    if (_0x15a517.body?.["memberHelpingCntMap"]) {
                                      _0x24830c = _0x15a517.body.memberHelpingCntMap;
                                    } else {
                                      if (_0x15a517.memberHelpingCntMap) {
                                        _0x24830c = _0x15a517.memberHelpingCntMap;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (Array.isArray(_0x24830c)) {
                          {
                            _0x24830c.forEach(_0x52fb01 => {
                              {
                                const _0x1eaddb = String(_0x52fb01?.["roleId"] ?? _0x52fb01?.["id"] ?? "");
                                if (_0x1eaddb) {
                                  _0x230748[_0x1eaddb] = Number(_0x52fb01?.["cnt"] ?? _0x52fb01?.["count"] ?? 0);
                                }
                              }
                            });
                          }
                        } else {
                          if (typeof _0x24830c === "object" && _0x24830c) {
                            {
                              Object.keys(_0x24830c).forEach(_0x33e617 => {
                                {
                                  try {
                                    {
                                      const _0x17b5c0 = _0x24830c[_0x33e617];
                                      _0x230748[String(_0x33e617)] = Number(typeof _0x17b5c0 === "object" ? _0x17b5c0?.["cnt"] ?? _0x17b5c0?.["count"] ?? 0 : _0x17b5c0 ?? 0);
                                    }
                                  } catch (_0x429b6f) {}
                                }
                              });
                            }
                          }
                        }
                        _0x147f85(_0x230748);
                      }
                    } catch (_0x228512) {
                      console.error("解析护卫次数失败:", _0x228512);
                      _0x147f85({});
                    }
                  }
                }).catch(_0xdd8442 => {
                  {
                    console.error("获取护卫次数失败:", _0xdd8442);
                    _0x147f85({});
                  }
                });
              } catch (_0xa214f7) {
                console.error("创建获取护卫次数Promise失败:", _0xa214f7);
                _0x147f85({});
              }
            }
          })]).then(([_0x41ff06, _0x344edd]) => {
            {
              _0x277133(_0x4b53b5, _0x41ff06 || {}, _0x344edd || {});
            }
          }).catch(_0x440e04 => {
            console.error("加载数据失败:", _0x440e04);
            _0x4a80ad.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
          });
        };
        _0x32de1("");
      }
    },
    openMembersDialog() {
      {
        try {
          {
            let _0x5bba7c = document.getElementById("members-dialog");
            let _0x1afb75 = document.getElementById("global-ui-overlay");
            let _0x1a2b6;
            let _0x20ff44;
            let _0x144ff7;
            if (!_0x5bba7c) {
              {
                if (!_0x1afb75) {
                  _0x1afb75 = document.createElement("div");
                  _0x1afb75.id = "global-ui-overlay";
                  _0x1afb75.style.cssText = "\n                        position: fixed; top: 0; left: 0; right: 0; bottom: 0;\n                        background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 99999;\n                        display: flex; align-items: center; justify-content: center;\n                    ";
                  document.body.appendChild(_0x1afb75);
                } else {
                  {
                    _0x1afb75.style.display = "flex";
                  }
                }
                _0x5bba7c = document.createElement("div");
                _0x5bba7c.id = "members-dialog";
                _0x5bba7c.style.cssText = "\n                    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);\n                    background: #ffffff;\n                    color: #333333; border: 1px solid #e5e7eb; outline: 1px solid rgba(37,99,235,0.1);\n                    border-radius: 12px; padding: 12px; width: 86vw; max-width: 420px;\n                    box-shadow: 0 16px 48px rgba(0,0,0,0.1); box-sizing: border-box;\n                    z-index: 100000;\n                ";
                let _0xa43c31 = document.getElementById("member-font-style");
                if (!_0xa43c31) {
                  {
                    _0xa43c31 = document.createElement("style");
                    _0xa43c31.id = "member-font-style";
                    _0xa43c31.textContent = "\n                        /* 仅针对对话框内的玩家名字元素 */\n                        #members-content {\n                            font-size: 10px !important;\n                        }\n                        #members-content div[data-mid] {\n                            font-size: 10px !important;\n                        }\n                        #members-content div[data-mid] span[style*=\"white-space:nowrap\"] {\n                            font-size: 10px !important;\n                            line-height: 1.1 !important;\n                        }\n                        #helper-content {\n                            font-size: 10px !important;\n                        }\n                        #helper-content div[data-mid] {\n                            font-size: 10px !important;\n                        }\n                        #helper-content div[data-mid] .__name {\n                            font-size: 10px !important;\n                        }\n                    ";
                    document.head.appendChild(_0xa43c31);
                  }
                }
                _0x5bba7c.innerHTML = "\n                    <div style=\"display:flex; align-items:center; justify-content:space-between; padding:10px 12px; font-weight:700;\">\n                      <div style=\"font-weight:700; letter-spacing:.3px; color:#333333;\">俱乐部成员</div>\n                      <button id=\"members-close\" style=\"padding:4px 8px; border-radius:4px; border:none; background:#e5e7eb; color:#333333; cursor:pointer; font-size:12px;\">关闭</button>\n                    </div>\n                    <div style=\"padding:6px 8px; border-bottom: 1px solid #e5e7eb; margin:0 1px 6px 1px;\">\n                      <input id=\"members-search-input\" placeholder=\"按名称或ID搜索\" style=\"width:100%; padding:7px 10px; border-radius:8px; border: 1px solid #d1d5db; background: #ffffff; color: #333333; box-sizing: border-box;\" />\n                    </div>\n                    <div id=\"members-content\" style=\"max-height:240px; overflow:auto; border:1px solid #e5e7eb; border-radius:10px; padding:6px 8px; background:#ffffff; color:#333333;\">加载中...</div>\n                ";
                document.body.appendChild(_0x5bba7c);
                _0x1a2b6 = document.getElementById("members-content");
                _0x20ff44 = document.getElementById("members-search-input");
                _0x144ff7 = document.getElementById("members-close");
                const _0x1ce7d8 = () => {
                  {
                    try {
                      {
                        const _0x2080ce = document.getElementById("member-font-style");
                        if (_0x2080ce) {
                          {
                            _0x2080ce.remove();
                          }
                        }
                        if (_0x5bba7c) {
                          _0x5bba7c.style.display = "none";
                        }
                        if (_0x1afb75) {
                          _0x1afb75.style.display = "none";
                        }
                      }
                    } catch (_0x4210dd) {
                      {
                        console.error("关闭弹窗失败:", _0x4210dd);
                      }
                    }
                  }
                };
                _0x144ff7 && (_0x144ff7.onclick = _0x1ce7d8);
                if (_0x1afb75) {
                  {
                    _0x1afb75.onclick = function (_0x15618f) {
                      {
                        if (_0x15618f.target === this) {
                          _0x1ce7d8();
                        }
                      }
                    };
                  }
                }
              }
            } else {
              {
                _0x5bba7c.style.display = "block";
                if (_0x1afb75) {
                  _0x1afb75.style.display = "flex";
                }
                _0x1a2b6 = document.getElementById("members-content");
                _0x20ff44 = document.getElementById("members-search-input");
                _0x144ff7 = document.getElementById("members-close");
              }
            }
            if (!_0x1a2b6) {
              {
                console.error("未找到内容容器元素");
                return;
              }
            }
            const _0x52e7b4 = _0x2fe76c => {
              {
                const _0x530c7e = Number(_0x2fe76c || 0);
                if (_0x530c7e >= 100000000) {
                  return (_0x530c7e / 100000000).toFixed(2) + "亿";
                }
                if (_0x530c7e >= 10000) {
                  return (_0x530c7e / 10000).toFixed(2) + "万";
                }
                return String(_0x530c7e);
              }
            };
            const _0x2f49b9 = (_0x1140cd = "", _0x47a165 = {}, _0x243249 = {}) => {
              {
                try {
                  {
                    const _0x4a37db = String(_0x1140cd || "").trim().toLowerCase();
                    const _0x3788f5 = Object.keys(_0x47a165).filter(_0x56dfbf => {
                      {
                        const _0x3827a0 = _0x47a165[_0x56dfbf];
                        const _0x3d51eb = _0x3827a0?.["name"] || _0x3827a0?.["nickname"] || "";
                        return !_0x4a37db || String(_0x56dfbf).includes(_0x4a37db) || String(_0x3d51eb).toLowerCase().includes(_0x4a37db);
                      }
                    }).map(_0x41f26a => {
                      {
                        const _0xf40a77 = _0x47a165[_0x41f26a];
                        const _0x343399 = Number(_0x243249[String(_0x41f26a)] ?? 0);
                        const _0x4f8531 = _0xf40a77?.["name"] || _0xf40a77?.["nickname"] || _0x41f26a;
                        const _0x33e2c0 = Number(_0xf40a77?.["power"] ?? _0xf40a77?.["s_power"] ?? _0xf40a77?.["custom"]?.["s_power"] ?? 0);
                        const _0x99d285 = _0xf40a77?.["headImg"] || _0xf40a77?.["avatar"] || "/icons/xiaoyugan.png";
                        const _0xf5e916 = _0xf40a77?.["role"] || _0xf40a77?.["position"] || "";
                        const _0x3806f3 = _0xf5e916 ? "<span style=\"font-size:11px; color:#60a5fa; margin-left:6px;\">" + _0xf5e916 + "</span>" : "";
                        return "<div data-mid=\"" + _0x41f26a + "\" style=\"display:flex; align-items:center; padding:6px; margin:4px 0; background: rgba(249,250,251,0.8); border-radius:6px; border:1px solid #e5e7eb;\">\n                                    <div style=\"display:flex; align-items:center; gap:8px; flex:1;\">\n                                      <img src=\"" + _0x99d285 + "\" onerror=\"this.src='/icons/xiaoyugan.png'\" style=\"width:22px;height:22px;border-radius:50%;object-fit:cover;\" />\n                                      <div style=\"flex:1; overflow:hidden;\">\n                                        <div style=\"display:flex; align-items:center;\">\n                                          <span style=\"white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:120px; display:inline-block;\">" + _0x4f8531 + "</span>\n                                          " + _0x3806f3 + "\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div style=\"display:flex; align-items:center; gap:12px; margin-left:8px;\">\n                                      <span style=\"font-size:12px; color:#6b7280;\">战力 " + _0x52e7b4(_0x33e2c0) + "</span>\n                                      <div style=\"font-size:12px; color:" + (_0x343399 >= 4 ? "#f59e0b" : "#6b7280") + ";\">当前护送 " + _0x343399 + "/4</div>\n                                    </div>\n                                </div>";
                      }
                    }).join("");
                    _0x1a2b6.innerHTML = _0x3788f5 || "<div style=\"padding:6px;\">俱乐部成员为空或加载失败</div>";
                  }
                } catch (_0x18df0d) {
                  {
                    console.error("渲染成员列表失败:", _0x18df0d);
                    _0x1a2b6.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
                  }
                }
              }
            };
            const _0x5648a5 = (_0x169676 = "") => {
              {
                _0x1a2b6.innerHTML = "<div style=\"padding:6px; text-align:center;\">加载中...</div>";
                Promise.all([Promise.resolve().then(() => this.ensureLegionMembers()), new Promise(_0x130540 => {
                  _0x43bafd.sendCommand("car_getmemberhelpingcnt").then(_0xe0f27c => {
                    {
                      try {
                        {
                          let _0x8db351 = {};
                          let _0xbb5848 = {};
                          if (_0xe0f27c) {
                            {
                              if (_0xe0f27c._rawData?.["body"]?.["memberHelpingCntMap"]) {
                                _0xbb5848 = _0xe0f27c._rawData.body.memberHelpingCntMap;
                              } else {
                                if (_0xe0f27c._rawData?.["memberHelpingCntMap"]) {
                                  _0xbb5848 = _0xe0f27c._rawData.memberHelpingCntMap;
                                } else {
                                  if (_0xe0f27c.data?.["body"]?.["memberHelpingCntMap"]) {
                                    _0xbb5848 = _0xe0f27c.data.body.memberHelpingCntMap;
                                  } else {
                                    if (_0xe0f27c.data?.["memberHelpingCntMap"]) {
                                      _0xbb5848 = _0xe0f27c.data.memberHelpingCntMap;
                                    } else {
                                      if (_0xe0f27c.body?.["memberHelpingCntMap"]) {
                                        _0xbb5848 = _0xe0f27c.body.memberHelpingCntMap;
                                      } else {
                                        if (_0xe0f27c.memberHelpingCntMap) {
                                          _0xbb5848 = _0xe0f27c.memberHelpingCntMap;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (Array.isArray(_0xbb5848)) {
                            _0xbb5848.forEach(_0x56643a => {
                              {
                                const _0xde56db = String(_0x56643a?.["roleId"] ?? _0x56643a?.["id"] ?? "");
                                if (_0xde56db) {
                                  _0x8db351[_0xde56db] = Number(_0x56643a?.["cnt"] ?? _0x56643a?.["count"] ?? 0);
                                }
                              }
                            });
                          } else {
                            typeof _0xbb5848 === "object" && _0xbb5848 && Object.keys(_0xbb5848).forEach(_0x2269c7 => {
                              {
                                try {
                                  {
                                    const _0x256220 = _0xbb5848[_0x2269c7];
                                    _0x8db351[String(_0x2269c7)] = Number(typeof _0x256220 === "object" ? _0x256220?.["cnt"] ?? _0x256220?.["count"] ?? 0 : _0x256220 ?? 0);
                                  }
                                } catch (_0x10baa3) {}
                              }
                            });
                          }
                          _0x130540(_0x8db351);
                        }
                      } catch (_0x3d8d8f) {
                        {
                          console.error("解析护卫次数失败:", _0x3d8d8f);
                          _0x130540({});
                        }
                      }
                    }
                  }).catch(_0x532065 => {
                    {
                      console.error("获取护卫次数失败:", _0x532065);
                      _0x130540({});
                    }
                  });
                })]).then(([_0x196092, _0x3ee961]) => {
                  {
                    _0x2f49b9(_0x169676, _0x196092 || {}, _0x3ee961 || {});
                  }
                }).catch(_0x97bef3 => {
                  console.error("加载成员数据失败:", _0x97bef3);
                  _0x1a2b6.innerHTML = "<div style=\"padding:6px; color:#f43f5e;\">加载失败，请重试</div>";
                });
              }
            };
            if (_0x20ff44) {
              {
                _0x20ff44.oninput = function () {
                  clearTimeout(_0x20ff44.searchTimer);
                  _0x20ff44.searchTimer = setTimeout(() => {
                    {
                      _0x5648a5(this.value);
                    }
                  }, 300);
                };
              }
            }
            _0x5648a5("");
          }
        } catch (_0x493af5) {
          console.error("打开成员列表失败:", _0x493af5);
          _0x43bafd.showtip("打开成员列表失败", "error");
        }
      }
    },
    async sendCar(_0x599238) {
      {
        if (!this.isCarEventActive()) {
          return _0x43bafd.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
        }
        if (this.state.sendCount >= 4) {
          return _0x43bafd.showtip("今日发车次数已用完", "error");
        }
        const _0x5d0436 = this.state.fullCarData.find(_0x7ed9aa => String(_0x7ed9aa.carId) === String(_0x599238));
        if (!_0x5d0436) {
          return _0x43bafd.showtip("车辆不存在", "error");
        }
        const _0x281a49 = Number((this.state.helperSelectionByCarId || {})[String(_0x599238)] || 0);
        (await this.performCarAction("send", _0x599238, false, _0x281a49)) && (this.state.helperSelectionByCarId && this.state.helperSelectionByCarId[String(_0x599238)] && delete this.state.helperSelectionByCarId[String(_0x599238)], setTimeout(() => this.queryClubCars(), 300));
      }
    }
  };
  _0x4a2f5a.init();
  async function _0x48c95b(_0x4a7b49) {
    if (_0x4a7b49) {
      _0x4a7b49.textContent = "🔄 开始执行藏品图鉴升级...";
    }
    const _0x116f25 = 100;
    let _0x3b31b7 = 0;
    let _0x409913 = 0;
    const _0x1d9f35 = () => {
      {
        const _0x39a641 = [];
        const _0x81f6f7 = new Set();
        function _0x4dea88(_0x196976, _0x36b966, _0x56e6e4 = 2) {
          {
            const _0x13f198 = _0x196976 + "_" + _0x36b966 + "_" + _0x56e6e4;
            if (!_0x81f6f7.has(_0x13f198)) {
              {
                const _0x5e8c9b = {
                  seriesId: _0x196976,
                  id: _0x36b966,
                  poolType: _0x56e6e4
                };
                _0x39a641.push(_0x5e8c9b);
                _0x81f6f7.add(_0x13f198);
              }
            }
          }
        }
        for (let _0x220210 = 1; _0x220210 <= 12; _0x220210++) {
          _0x4dea88(2, _0x220210, 1);
        }
        for (let _0x230758 = 1001; _0x230758 <= 1015; _0x230758++) {
          {
            _0x4dea88(3, _0x230758, 1);
          }
        }
        const _0x475ddb = [10103, 11302, 10903, 10206, 11705, 10302, 10403, 11005, 11403, 11804, 10503, 10603, 11102, 11504, 10702, 10805, 11204, 11604, 12005, 11904];
        for (const _0x4bdcca of _0x475ddb) {
          {
            _0x4dea88(40001, _0x4bdcca, 3);
          }
        }
        for (let _0x236050 = 2001; _0x236050 <= 2020; _0x236050++) {
          _0x4dea88(6, _0x236050, 1);
        }
        for (let _0x426603 = 3001; _0x426603 <= 3010; _0x426603++) {
          {
            _0x4dea88(6, _0x426603, 1);
          }
        }
        const _0x30b42f = {
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
        for (const _0x57c146 in _0x30b42f) {
          {
            const _0xdf785 = parseInt(_0x57c146, 10);
            const _0xdd7798 = _0x30b42f[_0x57c146];
            let _0x2aa8a3 = Infinity;
            let _0x15ba58 = -Infinity;
            const _0x3cbcf8 = new Set();
            for (const _0x17f8c3 of _0xdd7798) {
              {
                if (Math.floor(_0x17f8c3 / 100) === _0xdf785 && _0x17f8c3 % 100 > 0 && _0x17f8c3 % 100 < 100) {
                  {
                    const _0x13ca5b = _0x17f8c3 % 100;
                    _0x2aa8a3 = Math.min(_0x2aa8a3, _0x13ca5b);
                    _0x15ba58 = Math.max(_0x15ba58, _0x13ca5b);
                  }
                } else {
                  {
                    _0x3cbcf8.add(_0x17f8c3);
                  }
                }
              }
            }
            if (_0x2aa8a3 !== Infinity && _0x15ba58 !== -Infinity) {
              {
                for (let _0x8c4e34 = _0x2aa8a3; _0x8c4e34 <= _0x15ba58; _0x8c4e34++) {
                  {
                    _0x4dea88(_0xdf785, _0xdf785 * 100 + _0x8c4e34);
                  }
                }
              }
            }
            for (const _0x44ecb1 of _0x3cbcf8) {
              {
                _0x4dea88(_0xdf785, _0x44ecb1);
              }
            }
          }
        }
        return _0x39a641.sort((_0x100032, _0x221c9e) => {
          {
            if (_0x100032.seriesId !== _0x221c9e.seriesId) {
              return _0x100032.seriesId - _0x221c9e.seriesId;
            }
            if (_0x100032.id !== _0x221c9e.id) {
              return _0x100032.id - _0x221c9e.id;
            }
            return _0x100032.poolType - _0x221c9e.poolType;
          }
        });
      }
    };
    const _0x5d064a = _0x1d9f35();
    const _0x28d91e = _0x5d064a.length;
    _0x4a7b49.textContent = "🔄 准备领取 " + _0x28d91e + " 个图鉴奖励...";
    for (let _0x4e41ef = 0; _0x4e41ef < _0x5d064a.length; _0x4e41ef++) {
      {
        const _0x58e280 = _0x5d064a[_0x4e41ef];
        const _0x308aaa = _0x4e41ef + 1;
        _0x4a7b49.textContent = "🔄 (" + _0x308aaa + "/" + _0x28d91e + ") 处理系列: " + _0x58e280.seriesId + ", ID: " + _0x58e280.id + ", 类型: " + _0x58e280.poolType;
        try {
          {
            const _0x502e52 = {
              id: _0x58e280.id,
              isAll: false,
              poolType: _0x58e280.poolType,
              seriesId: _0x58e280.seriesId
            };
            const _0x2e3941 = await _0x43bafd.sendCommand("collection_activate", _0x502e52);
            if (_0x2e3941.code === 0) {
              _0x3b31b7++;
            } else {
              {
                _0x409913++;
              }
            }
          }
        } catch (_0x24c329) {
          _0x409913++;
          console.error("处理图鉴失败:", _0x24c329);
        }
        await _0x43bafd.delay(_0x116f25 / 1000);
      }
    }
    _0x4a7b49.textContent = "✅ 图鉴奖励领取完成，开始执行额外领取...";
    const _0x4d31a0 = {
      seriesId: 2,
      poolType: 1
    };
    const _0x13e405 = {
      seriesId: 3,
      poolType: 1
    };
    const _0x23dc9b = {
      seriesId: 40001,
      poolType: 3
    };
    const _0x131c40 = [_0x4d31a0, _0x13e405, _0x23dc9b];
    for (const _0x404ea8 of _0x131c40) {
      try {
        {
          _0x4a7b49.textContent = "🔄 正在领取系列奖励 (seriesId: " + _0x404ea8.seriesId + ")...";
          const _0x41c023 = {
            seriesId: _0x404ea8.seriesId,
            isAll: true,
            poolType: _0x404ea8.poolType
          };
          const _0x135bda = await _0x43bafd.sendCommand("collection_claimseries", _0x41c023);
          _0x135bda.code === 0 && _0x3b31b7++;
        }
      } catch (_0x397904) {
        console.error("系列奖励 (" + _0x404ea8.seriesId + ") 领取失败:", _0x397904);
      }
      await _0x43bafd.delay(_0x116f25 / 1000);
    }
    try {
      _0x4a7b49.textContent = "🔄 正在领取总览奖励...";
      const _0x1845f7 = await _0x43bafd.sendCommand("collection_claimtotal", {});
      _0x1845f7.code === 0 && _0x3b31b7++;
    } catch (_0x1fd848) {
      console.error("总览奖励领取失败:", _0x1fd848);
    }
    await _0x43bafd.delay(_0x116f25 / 1000);
    _0x4a7b49.textContent = "🔄 开始执行30次升级操作...";
    for (let _0x3ef8a5 = 1; _0x3ef8a5 <= 30; _0x3ef8a5++) {
      _0x4a7b49.textContent = "🔄 升级操作 " + _0x3ef8a5 + "/30";
      try {
        const _0x536c5d = {
          id: 1001,
          isAll: false,
          poolType: 1,
          seriesId: 3
        };
        await _0x43bafd.sendCommand("collection_activate", _0x536c5d);
      } catch (_0x5802f4) {
        console.log("升级第 " + _0x3ef8a5 + " 次失败:", _0x5802f4.message);
      }
      await _0x43bafd.delay(0.05);
    }
    const _0x2160bb = "✅ 藏品图鉴升级完成！\n成功: " + _0x3b31b7 + " 次 | 失败: " + _0x409913 + " 次\n已完成全部30次升级操作";
    _0x4a7b49.textContent = _0x2160bb;
  }
  let _0x7b71d7 = false;
  let _0x12c2b1 = false;
  async function _0x15d9d1(_0xe2e719, _0x1ef142) {
    if (_0x7b71d7 && (_0xe2e719.startsWith("daily-task-") || _0xe2e719 === "one-key-100")) {
      _0x43bafd.showtip("已有任务在执行，请稍候", "info");
      return;
    }
    const _0x52657d = _0x1ef142.closest(".task-section").querySelector(".status");
    const _0x54a094 = _0x1ef142.textContent;
    const _0x14394a = _0x5b4f68.querySelectorAll(".task-btn, input[type=\"checkbox\"]");
    if (_0xe2e719 !== "toggle-ws-monitor" && _0xe2e719 !== "clear-ws-log" && _0xe2e719 !== "copy-all-ws-log") {
      _0x1ef142.disabled = true;
      _0x1ef142.textContent = "执行中...";
      if (_0x52657d) {
        _0x52657d.textContent = "🚀 执行中...";
      }
    }
    (_0xe2e719 === "execute-daily-checked" || _0xe2e719 === "one-key-100") && (_0x7b71d7 = true, _0x12c2b1 = false, _0x14394a.forEach(_0x3943f2 => _0x3943f2.disabled = true));
    try {
      const _0x1f5070 = window.__require?.("data-index");
      if (_0xe2e719 === "toggle-ws-monitor") {
        if (WSModule.isMonitoring) {
          WSModule.stop();
        } else {
          WSModule.start();
        }
        return;
      }
      if (_0xe2e719 === "clear-ws-log") {
        WSModule.clear();
        return;
      }
      if (_0xe2e719 === "copy-all-ws-log") {
        WSModule.copyAll();
        return;
      }
      const _0x160967 = window.__require?.("ServerData");
      if (_0xe2e719.startsWith("start-fishing-")) {
        const _0x24a775 = parseInt(_0xe2e719.split("-")[2]);
        const _0x4acd53 = parseInt(_0x1ef142.parentElement.querySelector("input").value) || 0;
        const _0x4a9dae = _0x24a775 === 2 ? "高级钓鱼" : "普通钓鱼";
        if (_0x24a775 === 1 && _0x4acd53 > 0) {
          let _0x2a0246 = 0;
          const _0x9b27d4 = Math.min(_0x4acd53, 3);
          for (let _0x5b5387 = 0; _0x5b5387 < _0x9b27d4; _0x5b5387++) {
            try {
              const _0x28add3 = {
                lotteryNumber: 1,
                newFree: true,
                type: 1
              };
              await _0x1f5070.ArtifactService.lottery(_0x28add3);
            } catch (_0x5ce684) {
              console.log("单次钓鱼尝试失败（正常现象）");
            }
            _0x2a0246++;
            _0x52657d.textContent = _0x4a9dae + " " + _0x2a0246 + "/" + _0x4acd53;
            await _0x43bafd.delay(0.2);
          }
          const _0x342a03 = _0x4acd53 - _0x9b27d4;
          if (_0x342a03 > 0) {
            for (let _0x128654 = 0; _0x128654 < Math.ceil(_0x342a03 / 10); _0x128654++) {
              const _0x247137 = Math.min(10, _0x342a03 - _0x128654 * 10);
              if (_0x247137 <= 0) {
                break;
              }
              const _0x5e1131 = {
                lotteryNumber: _0x247137,
                newFree: true,
                type: 1
              };
              await _0x1f5070.ArtifactService.lottery(_0x5e1131);
              _0x2a0246 += _0x247137;
              _0x52657d.textContent = _0x4a9dae + " " + Math.min(_0x2a0246, _0x4acd53) + "/" + _0x4acd53;
            }
          }
        } else {
          if (_0x24a775 === 2 && _0x4acd53 > 0) {
            for (let _0x290b71 = 0; _0x290b71 < Math.ceil(_0x4acd53 / 10); _0x290b71++) {
              const _0x10d9c8 = Math.min(10, _0x4acd53 - _0x290b71 * 10);
              if (_0x10d9c8 <= 0) {
                break;
              }
              const _0x21a8aa = {
                lotteryNumber: _0x10d9c8,
                newFree: true,
                type: 2
              };
              await _0x1f5070.ArtifactService.lottery(_0x21a8aa);
              _0x52657d.textContent = _0x4a9dae + " " + Math.min((_0x290b71 + 1) * 10, _0x4acd53) + "/" + _0x4acd53;
            }
          }
        }
        _0x52657d.textContent = "✅ " + _0x4a9dae + "完成";
      } else {
        if (_0xe2e719 === "recruit") {
          const _0x83fea9 = parseInt(_0x1ef142.parentElement.querySelector("input").value);
          if (_0x83fea9 <= 0) {
            _0x52657d.textContent = "ℹ️ 次数为0";
            return;
          }
          const _0x2da0ae = Math.floor(_0x83fea9 / 10);
          const _0x5db284 = _0x83fea9 % 10;
          let _0x2ae137 = 0;
          if (_0x2da0ae > 0) {
            for (let _0x343c53 = 0; _0x343c53 < _0x2da0ae; _0x343c53++) {
              _0x52657d.textContent = "招募 " + (_0x2ae137 + 10) + "/" + _0x83fea9;
              const _0x26fad4 = {
                byClub: false,
                recruitNumber: 10,
                recruitType: 1
              };
              await _0x1f5070.HeroService.recruit(_0x26fad4);
              _0x2ae137 += 10;
            }
          }
          if (_0x5db284 > 0) {
            for (let _0x336001 = 0; _0x336001 < _0x5db284; _0x336001++) {
              _0x52657d.textContent = "招募 " + (_0x2ae137 + 1) + "/" + _0x83fea9;
              const _0x442607 = {
                byClub: false,
                recruitNumber: 1,
                recruitType: 3
              };
              await _0x1f5070.HeroService.recruit(_0x442607);
              _0x2ae137++;
              await _0x43bafd.delay(0.2);
            }
          }
          _0x52657d.textContent = "✅ 招募完成";
        } else {
          if (_0xe2e719.startsWith("open-box-")) {
            const _0x3b5aa8 = parseInt(_0xe2e719.split("-")[2]);
            const _0x19450a = parseInt(_0x1ef142.parentElement.querySelector("input").value);
            const _0x12cab1 = {
              "2001": "木质",
              "2002": "青铜",
              "2003": "黄金",
              "2004": "铂金"
            };
            const _0x2a3eeb = _0x12cab1[_0x3b5aa8];
            if (_0x19450a <= 0 || _0x19450a % 10 !== 0) {
              _0x43bafd.showtip("宝箱数量必须是10的倍数", "error");
              _0x52657d.textContent = "❌ 数量错误";
              return;
            }
            for (let _0x1dfdda = 0; _0x1dfdda < _0x19450a / 10; _0x1dfdda++) {
              const _0x47625b = {
                itemId: _0x3b5aa8,
                number: 10
              };
              await _0x1f5070.ItemService.openBox(_0x47625b);
              _0x52657d.textContent = "开启" + _0x2a3eeb + " " + (_0x1dfdda + 1) * 10 + "/" + _0x19450a;
            }
            _0x52657d.textContent = "✅ " + _0x2a3eeb + "开启完成";
          } else {
            if (_0xe2e719 === "starUp" || _0xe2e719 === "bookUpgrade") {
              const _0x5447b4 = _0xe2e719 === "starUp";
              const _0x140920 = _0x5447b4 ? _0x1f5070.HeroService : _0x1f5070.BookService;
              const _0x16bb56 = _0x5447b4 ? "heroUpgradeStar" : "upgrade";
              const _0x84f050 = _0x5447b4 ? "武将升星" : "升级图鉴";
              let _0x3b1ae6 = 0;
              const _0x142893 = {
                length: 20
              };
              const _0x217aa6 = {
                length: 28
              };
              const _0x2d4f0b = {
                length: 14
              };
              const _0x8de414 = [...Array.from(_0x142893, (_0x295920, _0xc40554) => 101 + _0xc40554), ...Array.from(_0x217aa6, (_0x11d28b, _0x238c01) => 201 + _0x238c01), ...Array.from(_0x2d4f0b, (_0x3fe563, _0x1cb199) => 301 + _0x1cb199)];
              for (const _0x463b40 of _0x8de414) {
                for (let _0x323b86 = 0; _0x323b86 < 5; _0x323b86++) {
                  try {
                    const _0x195405 = {
                      heroId: _0x463b40
                    };
                    await _0x140920[_0x16bb56](_0x195405);
                    _0x3b1ae6++;
                    _0x52657d.textContent = _0x84f050 + "完成 " + _0x3b1ae6 + " 次";
                  } catch (_0x235e48) {
                    break;
                  }
                }
              }
              if (!_0x5447b4) {
                try {
                  await _0x1f5070.BookService.claimPointReward({});
                } catch (_0x4357b5) {}
              }
              _0x52657d.textContent = "✅ " + _0x84f050 + "完成";
            } else {
              if (_0xe2e719 === "tower") {
                if (_0x160967?.["ROLE"]?.["levelId"] <= 50) {
                  _0x52657d.textContent = "❌ 等级不足";
                  return;
                }
                await _0x1f5070.TowerService.getInfo({});
                let _0x3f3179 = 0;
                while (true) {
                  const _0x5330b6 = _0x160967?.["ROLE"];
                  if (!_0x5330b6 || _0x5330b6.tower.energy <= 0 || _0x5330b6.tower.id >= 4500) {
                    break;
                  }
                  try {
                    _0x5330b6.tower.id % 10 === 0 && !_0x5330b6.tower.reward[_0x5330b6.tower.id / 10] && (await _0x1f5070.TowerService.claimReward({
                      rewardId: _0x5330b6.tower.id / 10
                    }));
                    await _0x1f5070.FightService.startTower({});
                    _0x3f3179++;
                    _0x52657d.textContent = "已爬" + _0x3f3179 + "层 | 体力:" + (_0x5330b6.tower.energy - 1);
                  } catch (_0x3e3610) {
                    await _0x43bafd.delay(3);
                  }
                }
                _0x52657d.textContent = "✅ 爬塔完成，共" + _0x3f3179 + "层";
              } else {
                if (_0xe2e719 === "arena-start") {
                  const _0x34c4ec = parseInt(_0x1ef142.parentElement.querySelector("input").value) || 3;
                  if (_0x34c4ec < 1 || _0x34c4ec > 999) {
                    _0x43bafd.showtip("次数需在1-999之间", "error");
                    return;
                  }
                  _0x52657d.textContent = "⚔️ 准备开始...";
                  let _0x40bfd8 = 0;
                  for (let _0x23a096 = 1; _0x23a096 <= _0x34c4ec; _0x23a096++) {
                    _0x52657d.textContent = "⚔️ 正在进行 (" + _0x23a096 + "/" + _0x34c4ec + ")";
                    try {
                      const _0x128dfe = {
                        refresh: false
                      };
                      const _0x5d193d = await _0x43bafd.sendCommand("arena_getareatarget", _0x128dfe);
                      const _0xaeef15 = _0x5d193d?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                      if (!_0xaeef15) {
                        throw new Error("未获取到目标ID");
                      }
                      await _0x50de94();
                      const _0x14c62a = {
                        battleVersion: _0x4656dc,
                        targetId: _0xaeef15
                      };
                      await _0x43bafd.sendCommand("fight_startareaarena", _0x14c62a);
                      _0x40bfd8++;
                      _0x43bafd.showtip("第" + _0x23a096 + "轮战斗成功", "success");
                    } catch (_0x5c2107) {
                      _0x43bafd.showtip("第" + _0x23a096 + "轮战斗失败: " + _0x5c2107.message, "error");
                    }
                    if (_0x23a096 < _0x34c4ec) {
                      await _0x43bafd.delay(0.01);
                    }
                  }
                  _0x52657d.textContent = "✅ 完成: 总" + _0x34c4ec + "轮, 成功" + _0x40bfd8 + "轮";
                } else {
                  if (_0xe2e719 === "arena-winrate-battle") {
                    const _0x2c89d8 = parseInt(_0x1ef142.parentElement.querySelector("input").value) || 1;
                    if (_0x2c89d8 < 1 || _0x2c89d8 > 999) {
                      _0x43bafd.showtip("次数需在1-999之间", "error");
                      return;
                    }
                    _0x52657d.textContent = "📊 正在获取对手胜率数据...";
                    try {
                      const _0x117c33 = {
                        refresh: false
                      };
                      const _0x1311f4 = await _0x43bafd.sendCommand("arena_getareatarget", _0x117c33);
                      const _0x31f176 = _0x1311f4?.["_rawData"]?.["roleList"];
                      if (!_0x31f176 || _0x31f176.length === 0) {
                        throw new Error("未获取到对手列表");
                      }
                      const _0x169d69 = document.getElementById("winrate-results");
                      const _0x4ce0b1 = _0x169d69 ? _0x169d69.innerHTML : "";
                      let _0x51a603 = -1;
                      let _0x53d7ed = null;
                      if (_0x4ce0b1) {
                        for (const _0x364d7e of _0x31f176) {
                          const _0x307af1 = _0x364d7e.name || "";
                          const _0x17b16d = new RegExp(_0x307af1 + ".*胜率：(d+(?:.d+)?)%", "i");
                          const _0x2c098a = _0x4ce0b1.match(_0x17b16d);
                          if (_0x2c098a && _0x2c098a[1]) {
                            const _0x2293ce = parseFloat(_0x2c098a[1]);
                            _0x2293ce > _0x51a603 && (_0x51a603 = _0x2293ce, _0x53d7ed = _0x364d7e.roleId);
                          }
                        }
                      }
                      !_0x53d7ed && _0x31f176.length > 0 && (_0x53d7ed = _0x31f176[0].roleId, _0x43bafd.showtip("未找到胜率数据，使用第一个对手", "info"));
                      if (!_0x53d7ed) {
                        throw new Error("未找到合适的对手");
                      }
                      let _0x4dec1b = 0;
                      for (let _0x16b33c = 1; _0x16b33c <= _0x2c89d8; _0x16b33c++) {
                        _0x52657d.textContent = "⚔️ 正在与胜率最高对手战斗 (" + _0x16b33c + "/" + _0x2c89d8 + ")";
                        try {
                          await _0x50de94();
                          const _0x265713 = {
                            battleVersion: _0x4656dc,
                            targetId: _0x53d7ed
                          };
                          await _0x43bafd.sendCommand("fight_startareaarena", _0x265713);
                          _0x4dec1b++;
                          _0x43bafd.showtip("第" + _0x16b33c + "轮战斗成功", "success");
                        } catch (_0x423373) {
                          _0x43bafd.showtip("第" + _0x16b33c + "轮战斗失败: " + _0x423373.message, "error");
                        }
                        if (_0x16b33c < _0x2c89d8) {
                          await _0x43bafd.delay(0.01);
                        }
                      }
                      _0x52657d.textContent = "✅ 胜率战斗完成: 总" + _0x2c89d8 + "轮, 成功" + _0x4dec1b + "轮";
                    } catch (_0x2f9be0) {
                      _0x43bafd.showtip("胜率战斗失败: " + _0x2f9be0.message, "error");
                      _0x52657d.textContent = "❌ 胜率战斗失败";
                    }
                  } else {
                    if (_0xe2e719 === "club-boss") {
                      const _0x5d7411 = parseInt(document.getElementById("club-boss-count").textContent);
                      if (_0x5d7411 <= 0) {
                        _0x52657d.textContent = "ℹ️ 次数为0";
                        return;
                      }
                      for (let _0x1c6723 = 1; _0x1c6723 <= _0x5d7411; _0x1c6723++) {
                        _0x52657d.textContent = "⚔️ 挑战Boss (" + _0x1c6723 + "/" + _0x5d7411 + ")";
                        await _0x1f5070.FightService.startLegionBoss({});
                        await _0x43bafd.delay(0.5);
                      }
                      _0x52657d.textContent = "✅ Boss挑战完成";
                    } else {
                      if (_0xe2e719 === "claim-activity") {
                        _0x52657d.textContent = "🎁 领取每日奖励...";
                        for (const _0x27144e of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                          const _0x21e327 = {
                            taskId: _0x27144e
                          };
                          await _0x1f5070.TaskService.claimDailyPoint(_0x21e327);
                          await _0x43bafd.delay(0.1);
                        }
                        _0x52657d.textContent = "🎁 领取每周奖励...";
                        const _0x54e0cf = {
                          rewardId: 0
                        };
                        await _0x1f5070.TaskService.claimDailyReward(_0x54e0cf);
                        await _0x43bafd.delay(0.1);
                        const _0x3a9f77 = {
                          rewardId: 0
                        };
                        await _0x1f5070.TaskService.claimWeekReward(_0x3a9f77);
                        _0x52657d.textContent = "✅ 活跃奖励领取完毕";
                      } else {
                        if (_0xe2e719.startsWith("daily-task-") || _0xe2e719 === "execute-daily-checked" || _0xe2e719 === "one-key-100") {
                          const _0x4415c8 = {
                            itemId: 2001,
                            number: 10
                          };
                          const _0x2df4ae = {
                            goodsId: 1
                          };
                          const _0x4581bc = {
                            "daily-task-hangup-combined": {
                              func: async () => {
                                for (let _0x444608 = 0; _0x444608 < 4; _0x444608++) {
                                  const _0x51f13e = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x1f5070.SystemService.myShareCallback(_0x51f13e);
                                  await _0x43bafd.delay(0.2);
                                }
                                for (let _0x992f86 = 0; _0x992f86 < 5; _0x992f86++) {
                                  await _0x1f5070.SystemService.claimHangUpReward({});
                                  if (_0x992f86 < 4) {
                                    await _0x43bafd.delay(1);
                                  }
                                }
                                for (let _0x5de6a7 = 0; _0x5de6a7 < 4; _0x5de6a7++) {
                                  const _0x3b8832 = {
                                    isSkipShareCard: true,
                                    type: 2
                                  };
                                  await _0x1f5070.SystemService.myShareCallback(_0x3b8832);
                                  await _0x43bafd.delay(0.2);
                                }
                              },
                              label: "收菜5次、加钟"
                            },
                            "daily-task-bottle-renew": {
                              func: async () => {
                                const _0x3a0df5 = {
                                  bottleType: -1
                                };
                                await _0x1f5070.BottleHelperService.stop(_0x3a0df5);
                                await _0x43bafd.delay(0.2);
                                const _0x4ca46a = {
                                  bottleType: -1
                                };
                                await _0x1f5070.BottleHelperService.start(_0x4ca46a);
                              },
                              label: "续罐子"
                            },
                            "daily-task-bottle-claim": {
                              func: () => _0x1f5070.BottleHelperService.claim({}),
                              label: "收盐罐"
                            },
                            "daily-task-combined-quick": {
                              func: async () => {
                                const _0x2182db = {
                                  category: 0
                                };
                                await _0x1f5070.MailService.claimAllAttachment(_0x2182db);
                                await _0x43bafd.delay(0.2);
                                await _0x1f5070.LegionService.signIn({});
                                await _0x43bafd.delay(0.2);
                                const _0xb0fe8b = {
                                  friendId: 0
                                };
                                await _0x1f5070.FriendService.batch(_0xb0fe8b);
                                await _0x43bafd.delay(0.2);
                                await _0x1f5070.SystemService.signInReward({});
                                await _0x43bafd.delay(0.2);
                                const _0x211922 = {
                                  discountId: 1
                                };
                                await _0x1f5070.DiscountService.claimReward(_0x211922);
                                await _0x43bafd.delay(0.2);
                                const _0x248481 = {
                                  cardId: 1
                                };
                                await _0x1f5070.CardService.claimReward(_0x248481);
                                await _0x43bafd.delay(0.2);
                                try {
                                  await _0x43bafd.sendCommand("collection_claimfreereward", {});
                                  console.log("✅ 成功领取珍宝阁每日免费珍品");
                                } catch (_0x29641b) {
                                  console.log("领取珍宝阁免费珍品时发生错误（可能已领取）:", _0x29641b.message);
                                }
                                await _0x43bafd.delay(0.2);
                                const _0x19215f = {
                                  isSkipShareCard: false,
                                  type: 1
                                };
                                await _0x1f5070.SystemService.myShareCallback(_0x19215f);
                              },
                              label: "邮件、签到、赠金币、福利、珍宝阁"
                            },
                            "daily-task-boss": {
                              func: () => {
                                const _0x1a724a = _0x43bafd.getFormatDate(Date.now()).getUTCDay();
                                const _0x572029 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0x1a724a];
                                const _0x229cfa = {
                                  bossId: _0x572029
                                };
                                return _0x1f5070.FightService.startBoss(_0x229cfa);
                              },
                              label: "每日咸王考验"
                            },
                            "daily-task-gold": {
                              func: async () => {
                                const _0x2b4227 = 6;
                                let _0x3c38d9 = 0;
                                try {
                                  console.log("[智能点金] 初始检查服务器任务状态...");
                                  const _0x2b6a64 = {
                                    taskId: _0x2b4227
                                  };
                                  const _0x12b515 = await _0x43bafd.sendCommand("task_claimdailypoint", _0x2b6a64);
                                  if (_0x12b515?.["code"] === 700020 || _0x12b515?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x2b4227.toString())) {
                                    console.log("[智能点金] 任务已完成，无需执行");
                                    return;
                                  }
                                  console.log("[智能点金] 开始智能点金，每次执行前检查任务状态...");
                                  while (_0x3c38d9 < 3) {
                                    const _0x921df2 = {
                                      taskId: _0x2b4227
                                    };
                                    const _0x5f11ed = await _0x43bafd.sendCommand("task_claimdailypoint", _0x921df2);
                                    if (_0x5f11ed?.["code"] === 700020 || _0x5f11ed?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x2b4227.toString())) {
                                      console.log("[智能点金] 任务已完成，已执行" + _0x3c38d9 + "次点金，停止继续操作");
                                      break;
                                    }
                                    console.log("[智能点金] 执行第" + (_0x3c38d9 + 1) + "/3次点金");
                                    try {
                                      const _0x32ee1e = {
                                        buyNum: 1
                                      };
                                      await _0x1f5070.SystemService.buyGold(_0x32ee1e);
                                      _0x3c38d9++;
                                      console.log("[智能点金] 第" + _0x3c38d9 + "次点金执行成功");
                                    } catch (_0x3d8802) {
                                      console.error("[智能点金] 第" + (_0x3c38d9 + 1) + "次点金执行失败:", _0x3d8802.message);
                                      if (_0x3d8802.message?.["includes"]("钻石") || _0x3d8802.message?.["includes"]("付费")) {
                                        console.log("[智能点金] 检测到付费错误，停止继续操作");
                                        break;
                                      }
                                    }
                                    await _0x43bafd.delay(1);
                                  }
                                  console.log("[智能点金] 智能点金完成，共执行" + _0x3c38d9 + "次点金操作");
                                } catch (_0x5e0176) {
                                  console.error("[智能点金] 点金过程中发生异常:", _0x5e0176.message);
                                }
                              },
                              label: "点金三次"
                            },
                            "daily-task-quiz": {
                              func: async () => {
                                const _0x702a12 = await _0x1f5070.StudyService.startGame({});
                                const _0x549ffc = _0x702a12.getData();
                                for (let _0x58ef72 = 0; _0x58ef72 < _0x549ffc.questionList.length; _0x58ef72++) {
                                  const _0x44990a = _0x549ffc.questionList[_0x58ef72];
                                  let _0x444c5e = _0x358c7d[_0x44990a.question] || Math.floor(2 * Math.random()) + 1;
                                  const _0x332fc7 = {
                                    id: _0x549ffc.role.study.id,
                                    option: [_0x444c5e],
                                    questionId: [_0x44990a.id]
                                  };
                                  await _0x1f5070.StudyService.answer(_0x332fc7);
                                  await _0x43bafd.delay(1);
                                }
                                for (let _0x2165a3 = 1; _0x2165a3 <= 10; _0x2165a3++) {
                                  const _0x592941 = {
                                    rewardId: _0x2165a3
                                  };
                                  await _0x1f5070.StudyService.claimReward(_0x592941);
                                  await _0x43bafd.delay(0.2);
                                }
                              },
                              label: "自动答题"
                            },
                            "daily-task-genie-tickets": {
                              func: async () => {
                                for (let _0x42daa8 = 0; _0x42daa8 < 3; _0x42daa8++) {
                                  await _0x43bafd.sendCommand("genie_buysweep", {});
                                  await _0x43bafd.delay(0.2);
                                }
                              },
                              label: "领取扫荡券"
                            },
                            "daily-task-genie-sweep": {
                              func: async _0x586113 => {
                                if (_0x586113) {
                                  _0x586113.textContent = "🔄 同步服务器数据...";
                                }
                                await _0x43bafd.sendCommand("System_GetTime", {});
                                await _0x43bafd.delay(1);
                                const _0x2d1ea2 = window.__require("ServerData");
                                if (!_0x2d1ea2 || !_0x2d1ea2.ROLE || !_0x2d1ea2.ROLE.statisticsTime) {
                                  throw new Error("无法访问 ServerData.ROLE.statisticsTime 对象");
                                }
                                let _0x3c6f7c = _0x2d1ea2.ROLE.statisticsTime;
                                try {
                                  _0x3c6f7c = JSON.parse(JSON.stringify(_0x3c6f7c));
                                } catch (_0x531b1c) {
                                  console.warn("[灯神扫荡] 警告：无法将 statisticsTime 转换为标准 JSON 对象。尝试直接访问。", _0x531b1c);
                                }
                                const _0x47c102 = {
                                  "1": "魏国",
                                  "2": "蜀国",
                                  "3": "吴国",
                                  "4": "群雄"
                                };
                                let _0x233567 = 0;
                                let _0x4e901d = 0;
                                let _0x3d06ba = true;
                                for (let _0x3903c0 = 1; _0x3903c0 <= 4; _0x3903c0++) {
                                  const _0x46b7a8 = "genie:daily:free:" + _0x3903c0;
                                  const _0x1419b8 = _0x3c6f7c[_0x46b7a8];
                                  const _0x4c6654 = _0x260314 => {
                                    if (typeof _0x260314 !== "number" || isNaN(_0x260314) || _0x260314 <= 0) {
                                      return false;
                                    }
                                    const _0x1d2ea7 = new Date(_0x260314 * 1000);
                                    const _0x1a3544 = new Date();
                                    return _0x1d2ea7.getFullYear() === _0x1a3544.getFullYear() && _0x1d2ea7.getMonth() === _0x1a3544.getMonth() && _0x1d2ea7.getDate() === _0x1a3544.getDate();
                                  };
                                  if (!_0x4c6654(_0x1419b8)) {
                                    _0x3d06ba = false;
                                    break;
                                  }
                                }
                                if (_0x3d06ba) {
                                  if (_0x586113) {
                                    _0x586113.textContent = "✅ 今日已完成灯神扫荡，本次跳过。";
                                  }
                                  return;
                                }
                                for (let _0x71dbd8 = 1; _0x71dbd8 <= 4; _0x71dbd8++) {
                                  const _0x90f5eb = _0x47c102[_0x71dbd8];
                                  const _0x385e81 = "genie:daily:free:" + _0x71dbd8;
                                  await _0x43bafd.delay(0.3);
                                  if (_0x586113) {
                                    _0x586113.textContent = "🔄 检查 " + _0x90f5eb + " 状态...";
                                  }
                                  const _0x230217 = _0x3c6f7c[_0x385e81];
                                  const _0x24607f = _0xe5c7d => {
                                    if (typeof _0xe5c7d !== "number" || isNaN(_0xe5c7d) || _0xe5c7d <= 0) {
                                      return false;
                                    }
                                    const _0x38bbbf = new Date(_0xe5c7d * 1000);
                                    const _0xb15835 = new Date();
                                    return _0x38bbbf.getFullYear() === _0xb15835.getFullYear() && _0x38bbbf.getMonth() === _0xb15835.getMonth() && _0x38bbbf.getDate() === _0xb15835.getDate();
                                  };
                                  if (!_0x24607f(_0x230217)) {
                                    if (_0x586113) {
                                      _0x586113.textContent = "🚀 执行 " + _0x90f5eb + " 免费扫荡...";
                                    }
                                    try {
                                      const _0x1b35de = {
                                        genieId: _0x71dbd8,
                                        sweepCnt: 1
                                      };
                                      const _0x5882ea = await _0x43bafd.sendCommand("genie_sweep", _0x1b35de);
                                      if (_0x5882ea.code === 0) {
                                        _0x233567++;
                                        if (_0x586113) {
                                          _0x586113.textContent = "✅ 已成功扫荡 " + _0x90f5eb + "。";
                                        }
                                        await _0x43bafd.delay(1);
                                      } else {
                                        const _0x311f48 = _0x5882ea.msg || "未知错误 (Code: " + _0x5882ea.code + ")";
                                        if (_0x586113) {
                                          _0x586113.textContent = "❌ " + _0x90f5eb + " 扫荡失败: " + _0x311f48;
                                        }
                                        await _0x43bafd.delay(1);
                                      }
                                    } catch (_0x384aa6) {
                                      if (_0x586113) {
                                        _0x586113.textContent = "❌ " + _0x90f5eb + " 扫荡异常: " + _0x384aa6.message;
                                      }
                                      await _0x43bafd.delay(1);
                                    }
                                  } else {
                                    _0x4e901d++;
                                  }
                                }
                              },
                              label: "灯神扫荡"
                            },
                            "daily-task-box": {
                              func: () => _0x1f5070.ItemService.openBox(_0x4415c8),
                              label: "开启10木箱"
                            },
                            "daily-task-recruit": {
                              func: async () => {
                                const _0x5d32e2 = 4;
                                let _0x1059ab = false;
                                try {
                                  console.log("[智能招募] 检查服务器任务状态...");
                                  const _0x3ef7a5 = {
                                    taskId: _0x5d32e2
                                  };
                                  const _0x2c2786 = await _0x43bafd.sendCommand("task_claimdailypoint", _0x3ef7a5);
                                  if (_0x2c2786?.["code"] === 700020 || _0x2c2786?.["_rawData"]?.["role"]?.["dailyTask"]?.["complete"]?.["hasOwnProperty"](_0x5d32e2.toString())) {
                                    console.log("[智能招募] 任务已完成，无需执行");
                                    return;
                                  }
                                  _0x1059ab = true;
                                } catch (_0xc8e33a) {
                                  _0x1059ab = true;
                                }
                                if (_0x1059ab) {
                                  console.log("[智能招募] 任务未完成，开始招募...");
                                  const _0x5b198d = window.__require?.("ServerData");
                                  const _0x1b130e = _0x5b198d?.["ROLE"]?.["statisticsTime"]?.["recruit:one:free"] || 0;
                                  const _0x43810a = _0x2727d7 => {
                                    if (!_0x2727d7) {
                                      return false;
                                    }
                                    const _0xa3e368 = new Date(_0x2727d7 * 1000);
                                    const _0x37ea74 = new Date();
                                    return _0xa3e368.getFullYear() === _0x37ea74.getFullYear() && _0xa3e368.getMonth() === _0x37ea74.getMonth() && _0xa3e368.getDate() === _0x37ea74.getDate();
                                  };
                                  const _0x50e04c = _0x43810a(_0x1b130e);
                                  if (_0x50e04c) {
                                    console.log("[智能招募] 免费次数已用，执行1次付费单抽");
                                    const _0x294332 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x43bafd.sendCommand("hero_recruit", _0x294332);
                                  } else {
                                    console.log("[智能招募] 免费次数未用，执行1免+1付");
                                    const _0xed0890 = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 3
                                    };
                                    await _0x43bafd.sendCommand("hero_recruit", _0xed0890);
                                    await _0x43bafd.delay(0.2);
                                    const _0x3fabdc = {
                                      byClub: false,
                                      recruitNumber: 1,
                                      recruitType: 1
                                    };
                                    await _0x43bafd.sendCommand("hero_recruit", _0x3fabdc);
                                  }
                                }
                              },
                              label: "执行2次招募"
                            },
                            "daily-task-arena": {
                              func: () => {
                                return new Promise(async _0x484d7b => {
                                  console.log("正在进行3次竞技场战斗...");
                                  try {
                                    console.log("正在进入竞技场...");
                                    await _0x43bafd.sendCommand("arena_startarea", {});
                                    await _0x43bafd.delay(1);
                                    console.log("已成功进入竞技场");
                                  } catch (_0x5ad1a3) {
                                    console.log("进入竞技场失败，但继续尝试战斗:", _0x5ad1a3);
                                  }
                                  let _0x560010 = 0;
                                  for (let _0x2376dc = 1; _0x2376dc <= 3; _0x2376dc++) {
                                    try {
                                      const _0x994d9b = {
                                        refresh: false
                                      };
                                      const _0x4d7879 = await _0x43bafd.sendCommand("arena_getareatarget", _0x994d9b);
                                      const _0x5e9b0b = _0x4d7879?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                                      if (!_0x5e9b0b) {
                                        console.log("竞技场战斗 " + _0x2376dc + "/3 失败: 未获取到目标ID");
                                        continue;
                                      }
                                      await _0x50de94();
                                      const _0x1b46e1 = {
                                        battleVersion: _0x4656dc,
                                        targetId: _0x5e9b0b
                                      };
                                      await _0x43bafd.sendCommand("fight_startareaarena", _0x1b46e1);
                                      _0x560010++;
                                      console.log("竞技场战斗 " + _0x2376dc + "/3 成功");
                                    } catch (_0x3b442c) {
                                      console.log("竞技场战斗 " + _0x2376dc + "/3 失败:", _0x3b442c.message);
                                    }
                                    await _0x43bafd.delay(0.1);
                                  }
                                  console.log("竞技场战斗完成: 总3轮, 成功" + _0x560010 + "轮");
                                  _0x484d7b();
                                });
                              },
                              label: "进行3次竞技场战斗"
                            },
                            "daily-task-buy-bronze-box": {
                              func: () => _0x43bafd.sendCommand("store_buy", _0x2df4ae),
                              label: "购买青铜宝箱"
                            }
                          };
                          let _0x12ccba = [];
                          if (_0xe2e719 === "one-key-100") {
                            _0x12ccba = _0x370335.filter(_0x4c4be0 => _0x4c4be0.task !== "daily-task-quiz").map(_0x1d19ab => _0x4581bc[_0x1d19ab.task]);
                            _0x12ccba.push({
                              func: async _0x1776f8 => {
                                const _0x17cda2 = window.__require?.("data-index");
                                if (!_0x17cda2) {
                                  console.error("无法访问 iso 对象");
                                  return;
                                }
                                const _0x3be7df = 1;
                                const _0x2751a4 = "普通钓鱼";
                                const _0xd6f8ba = 3;
                                if (_0x1776f8) {
                                  _0x1776f8.textContent = "🎣 开始执行" + _0x2751a4 + "...";
                                }
                                let _0x3fa90f = 0;
                                for (let _0x15bae6 = 0; _0x15bae6 < _0xd6f8ba; _0x15bae6++) {
                                  try {
                                    const _0x56f4b3 = {
                                      lotteryNumber: 1,
                                      newFree: true,
                                      type: _0x3be7df
                                    };
                                    await _0x17cda2.ArtifactService.lottery(_0x56f4b3);
                                    _0x3fa90f++;
                                    if (_0x1776f8) {
                                      _0x1776f8.textContent = "🎣 " + _0x2751a4 + " " + _0x3fa90f + "/" + _0xd6f8ba;
                                    }
                                    await _0x43bafd.delay(0.2);
                                  } catch (_0x41c01c) {
                                    console.log("单次" + _0x2751a4 + "尝试失败（正常现象）:", _0x41c01c.message);
                                  }
                                }
                                if (_0x1776f8) {
                                  _0x1776f8.textContent = "🎣 已完成" + _0xd6f8ba + "次" + _0x2751a4;
                                }
                              },
                              label: "3次免费钓鱼"
                            });
                          } else {
                            const _0xfa91c3 = _0xe2e719.startsWith("daily-task-") ? _0xe2e719 : null;
                            if (_0xfa91c3) {
                              if (_0x4581bc[_0xfa91c3]) {
                                _0x12ccba.push(_0x4581bc[_0xfa91c3]);
                              }
                            } else {
                              _0x5b4f68.querySelectorAll("input[type=\"checkbox\"]:checked").forEach(_0x35b7a8 => {
                                const _0x318394 = _0x35b7a8.dataset.taskName;
                                if (_0x4581bc[_0x318394]) {
                                  _0x12ccba.push(_0x4581bc[_0x318394]);
                                }
                              });
                            }
                          }
                          if (_0x12ccba.length === 0) {
                            _0x52657d.textContent = "ℹ️ 没有可执行任务";
                            return;
                          }
                          _0xe2e719.startsWith("daily-task-") && (_0x12c2b1 = false);
                          if (_0xe2e719 === "one-key-100") {
                            const _0x40a52d = _0x12ccba.filter(_0x1c2ff8 => _0x1c2ff8.label !== "收菜5次、加钟");
                            for (let _0x344cfd = 0; _0x344cfd < _0x40a52d.length; _0x344cfd++) {
                              const _0x227f53 = _0x40a52d[_0x344cfd];
                              _0x52657d.textContent = "🔄 (" + (_0x344cfd + 1) + "/" + _0x40a52d.length + ") " + _0x227f53.label + "...";
                              try {
                                await _0x227f53.func();
                                await _0x43bafd.delay(0.5);
                              } catch (_0x2cb8a8) {
                                console.log("任务 " + _0x227f53.label + " 失败:", _0x2cb8a8);
                              }
                            }
                            const _0x4e45ec = {
                              func: () => _0x1f5070.SystemService.claimHangUpReward({}),
                              label: "单次收菜"
                            };
                            for (let _0xb3ed04 = 0; _0xb3ed04 < 5; _0xb3ed04++) {
                              _0x52657d.textContent = "🥬 收菜 (" + (_0xb3ed04 + 1) + "/5)，等待1s...";
                              await _0x4e45ec.func();
                              if (_0xb3ed04 < 4) {
                                await _0x43bafd.delay(1);
                              }
                            }
                            _0x52657d.textContent = "🔄 正在加钟...";
                            for (let _0x1ef69e = 0; _0x1ef69e < 4; _0x1ef69e++) {
                              const _0x1acf0c = {
                                isSkipShareCard: true,
                                type: 2
                              };
                              await _0x1f5070.SystemService.myShareCallback(_0x1acf0c);
                              await _0x43bafd.delay(0.2);
                            }
                            _0x52657d.textContent = "🎁 领取活跃奖励...";
                            await _0x15d9d1("claim-activity", _0x1ef142);
                          } else {
                            for (let _0xb6085d = 0; _0xb6085d < _0x12ccba.length; _0xb6085d++) {
                              const _0x213e5c = _0x12ccba[_0xb6085d];
                              if (_0x213e5c.label === "灯神扫荡" && _0x12c2b1) {
                                continue;
                              }
                              _0x52657d.textContent = "🔄 (" + (_0xb6085d + 1) + "/" + _0x12ccba.length + ") " + _0x213e5c.label + "...";
                              try {
                                _0x213e5c.label === "灯神扫荡" ? (await _0x213e5c.func(_0x52657d), _0x12ccba.length > 1 && (_0x12c2b1 = true)) : await _0x213e5c.func();
                                await _0x43bafd.delay(0.5);
                              } catch (_0x278322) {
                                console.log("任务 " + _0x213e5c.label + " 失败 (可能已完成):", _0x278322);
                              }
                            }
                          }
                          _0x52657d.textContent = "✅ " + (_0xe2e719 === "one-key-100" ? "100活跃度任务" : "任务") + "执行完毕";
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
    } catch (_0xe83301) {
      console.error("任务执行错误:", _0xe83301);
      _0x52657d.textContent = "❌ 执行出错!";
    } finally {
      (_0xe2e719 === "execute-daily-checked" || _0xe2e719 === "one-key-100") && (_0x7b71d7 = false, _0x14394a.forEach(_0x227fc8 => _0x227fc8.disabled = false));
      _0x1ef142.disabled = false;
      _0x1ef142.textContent = _0x54a094;
    }
  }
  function _0x5ee738(_0x18ecd9, _0x1a91a4) {
    if (_0x18ecd9 === "collectionUpgrade") {
      const _0x4d33f6 = _0x1a91a4.textContent;
      _0x1a91a4.disabled = true;
      _0x1a91a4.textContent = "处理中...";
      _0x48c95b(_0x1a91a4).catch(_0x10120c => {
        console.error("藏品图鉴升级错误:", _0x10120c);
        _0x1a91a4.textContent = "❌ 执行出错!";
      }).finally(() => {
        setTimeout(() => {
          _0x1a91a4.disabled = false;
          _0x1a91a4.textContent = _0x4d33f6;
        }, 1000);
      });
      return true;
    }
    return false;
  }
  function _0x2039ce(_0x1dbef3) {
    if (_0x1dbef3 === "treasure-assist") {
      TreasureAssistModule.handleMainButtonClick();
      return true;
    }
    return false;
  }
  function _0x4d2225(_0xa1acd2) {
    if (_0xa1acd2 === "arena-winrate") {
      _0x53ab64.handleMainButtonClick();
      return true;
    }
    return false;
  }
  _0x38baa9.addEventListener("click", _0x5ed934 => {
    const _0x4aac9b = _0x5ed934.target.closest(".task-btn");
    if (_0x4aac9b?.["dataset"]["task"]) {
      if (_0x5ee738(_0x4aac9b.dataset.task, _0x4aac9b)) {
        return;
      }
      if (_0x2039ce(_0x4aac9b.dataset.task)) {
        return;
      }
      if (_0x4d2225(_0x4aac9b.dataset.task)) {
        return;
      }
      _0x15d9d1(_0x4aac9b.dataset.task, _0x4aac9b);
    }
  });
  setTimeout(() => {
    _0x53ab64.init();
    _0x18215f.init();
    OpponentWashModule.init();
  }, 1000);
  console.log("🎮 鲸鱼之王 (v" + _0x4338ab + ") 加载完成！");
})();