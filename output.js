//Wed Jan 14 2026 03:49:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x48fe8e = () => ({
    heroes: null,
    selectedHeroId: null,
    selectedPart: null,
    lockedSlots: [],
    quenchCount: 0,
    continuousQuenching: false,
    autoQuenching: false,
    targetAttrId: null,
    targetAttrValue: null,
    targetTargets: [],
    roleId: null,
    authToken: null,
    theme: "light",
    roleInfo: null,
    items: null,
    allHeroesData: null,
    battleVersion: null,
    menuCollapsed: false,
    actionLocks: {},
    activePage: null,
    dailySettings: null,
    presetTeam: null,
    currentTeamId: 1,
    teamHeroes: [],
    availableTeams: [],
    bottleRemainingTime: 0,
    bottleIsRunning: false,
    bottleTimer: null,
    hangupEndTime: 0,
    hangupRemainingTime: 0,
    hangupElapsedTime: 0,
    hangupTimer: null,
    towerFloor: 0,
    towerLayer: 0,
    towerEnergy: 0,
    towerClimbing: false,
    towerStopFlag: false,
    towerWinCount: 0,
    towerLoseCount: 0,
    towerFormation: 1,
    continuousTimer: null,
    autoTimer: null,
    consumptionData: null,
    consumptionActivityItem: 0,
    consumptionGoldItem: 0,
    heroUpgradeSelectedId: null,
    heroUpgradeLevelNum: 1,
    heroUpgradeRunning: false,
    pvpTargetData: null,
    pvpResult: null,
    pvpRunning: false
  });
  let _0x386da5 = null;
  const _0x356af1 = () => {
    {
      _0x386da5 = _0x48fe8e();
    }
  };
  const _0x568cd2 = "http://14.103.234.187/api";
  const _0x4a1368 = "qa_auth_token";
  const _0x3263b1 = "qa-theme";
  const _0x344633 = "qa-menu-collapsed";
  const _0x3f3488 = "qa-orb-position";
  const _0x193c88 = "qa-daily-settings";
  const _0x4a1e13 = "qa-menu-order";
  const _0x1f3b49 = "https://assets.xyzw.dkon.cn";
  const _0x21b8ce = "2.5.1";
  const _0xab9b82 = {
    "1": "攻击",
    "2": "血量",
    "3": "防御",
    "4": "速度",
    "5": "破甲",
    "6": "破甲抵抗",
    "7": "精准",
    "8": "格挡",
    "9": "减伤",
    "10": "暴击",
    "11": "暴击抵抗",
    "12": "爆伤",
    "13": "爆伤抵抗",
    "14": "技能伤害",
    "15": "免控",
    "16": "眩晕免疫",
    "17": "冰冻免疫",
    "18": "沉默免疫",
    "19": "流血免疫",
    "20": "中毒免疫",
    "21": "灼烧免疫"
  };
  const _0x11ee78 = {
    name: "司马懿",
    type: "魏国",
    avatar: "/team/simayi.png"
  };
  const _0x5ee8c5 = {
    name: "郭嘉",
    type: "魏国",
    avatar: "/team/guojia.png"
  };
  const _0x3bec4a = {
    name: "关羽",
    type: "蜀国",
    avatar: "/team/guanyu.png"
  };
  const _0x27a53d = {
    name: "诸葛亮",
    type: "蜀国",
    avatar: "/team/zhugeliang.png"
  };
  const _0x90ece = {
    name: "周瑜",
    type: "吴国",
    avatar: "/team/zhouyu.png"
  };
  const _0xdd06dd = {
    name: "太史慈",
    type: "吴国",
    avatar: "/team/taishici.png"
  };
  const _0x2c3c35 = {
    name: "吕布",
    type: "群雄",
    avatar: "/team/lvbu.png"
  };
  const _0x35ac13 = {
    name: "华佗",
    type: "群雄",
    avatar: "/team/huatuo.png"
  };
  const _0x421d0a = {
    name: "甄姬",
    type: "魏国",
    avatar: "/team/zhenji.png"
  };
  const _0x5db161 = {
    name: "黄月英",
    type: "蜀国",
    avatar: "/team/huangyueying.png"
  };
  const _0x3b7a62 = {
    name: "孙策",
    type: "吴国",
    avatar: "/team/sunce.png"
  };
  const _0x44daa2 = {
    name: "贾诩",
    type: "群雄",
    avatar: "/team/jiaxu.png"
  };
  const _0x15e57a = {
    name: "曹仁",
    type: "魏国",
    avatar: "/team/caoren.png"
  };
  const _0xf3c509 = {
    name: "姜维",
    type: "蜀国",
    avatar: "/team/jiangwei.png"
  };
  const _0x22a917 = {
    name: "孙坚",
    type: "吴国",
    avatar: "/team/sunjian.png"
  };
  const _0x26f2e6 = {
    name: "公孙瓒",
    type: "群雄",
    avatar: "/team/gongsunzan.png"
  };
  const _0x3048d2 = {
    name: "典韦",
    type: "魏国",
    avatar: "/team/dianwei.png"
  };
  const _0x1ba915 = {
    name: "赵云",
    type: "蜀国",
    avatar: "/team/zhaoyun.png"
  };
  const _0x483a50 = {
    name: "大乔",
    type: "吴国",
    avatar: "/team/daqiao.png"
  };
  const _0xd2233c = {
    name: "张角",
    type: "群雄",
    avatar: "/team/zhangjiao.png"
  };
  const _0x36859b = {
    name: "徐晃",
    type: "魏国",
    avatar: "/team/xuhuang.png"
  };
  const _0x3832c3 = {
    name: "荀彧",
    type: "魏国",
    avatar: "/team/xunyu.png"
  };
  const _0x4b7a85 = {
    name: "小典韦",
    type: "魏国",
    avatar: "/team/xiaodianwei.png"
  };
  const _0x5c926a = {
    name: "张飞",
    type: "蜀国",
    avatar: "/team/zhangfei.png"
  };
  const _0x378938 = {
    name: "小赵云",
    type: "蜀国",
    avatar: "/team/xiaozhaoyun.png"
  };
  const _0x3db505 = {
    name: "庞统",
    type: "蜀国",
    avatar: "/team/pangtong.png"
  };
  const _0x3af7b0 = {
    name: "鲁肃",
    type: "吴国",
    avatar: "/team/lusu.png"
  };
  const _0x4041cb = {
    name: "陆逊",
    type: "吴国",
    avatar: "/team/luxun.png"
  };
  const _0x30a095 = {
    name: "甘宁",
    type: "吴国",
    avatar: "/team/ganning.png"
  };
  const _0x4a0381 = {
    name: "貂蝉",
    type: "群雄",
    avatar: "/team/diaochan.png"
  };
  const _0x432dd4 = {
    name: "董卓",
    type: "群雄",
    avatar: "/team/dongzhuo.png"
  };
  const _0x1cf7d3 = {
    name: "小张角",
    type: "群雄",
    avatar: "/team/xiaozhangjiao.png"
  };
  const _0x1e43d3 = {
    name: "张辽",
    type: "魏国",
    avatar: "/team/zhangliao.png"
  };
  const _0x3b6340 = {
    name: "夏侯惇",
    type: "魏国",
    avatar: "/team/xiahoudun.png"
  };
  const _0x17c75e = {
    name: "许褚",
    type: "魏国",
    avatar: "/team/xuzhu.png"
  };
  const _0x4f5b30 = {
    name: "夏侯渊",
    type: "魏国",
    avatar: "/team/xiahouyuan.png"
  };
  const _0x3a2827 = {
    name: "魏延",
    type: "蜀国",
    avatar: "/team/weiyan.png"
  };
  const _0x144041 = {
    name: "黄忠",
    type: "蜀国",
    avatar: "/team/huangzhong.png"
  };
  const _0x2f9d77 = {
    name: "马超",
    type: "蜀国",
    avatar: "/team/machao.png"
  };
  const _0xa70e9c = {
    name: "马岱",
    type: "蜀国",
    avatar: "/team/madai.png"
  };
  const _0x101573 = {
    name: "吕蒙",
    type: "吴国",
    avatar: "/team/lvmeng.png"
  };
  const _0x1cf270 = {
    name: "黄盖",
    type: "吴国",
    avatar: "/team/huanggai.png"
  };
  const _0x50fb66 = {
    name: "蔡文姬",
    type: "魏国",
    avatar: "/team/caiwenji.png"
  };
  const _0x2630d7 = {
    name: "小乔",
    type: "吴国",
    avatar: "/team/xiaoqiao.png"
  };
  const _0xa8df06 = {
    name: "袁绍",
    type: "群雄",
    avatar: "/team/yuanshao.png"
  };
  const _0x3e9f31 = {
    name: "华雄",
    type: "群雄",
    avatar: "/team/huaxiong.png"
  };
  const _0xe1180e = {
    name: "颜良",
    type: "群雄",
    avatar: "/team/yanliang.png"
  };
  const _0x311434 = {
    name: "文丑",
    type: "群雄",
    avatar: "/team/wenchou.png"
  };
  const _0x5f080d = {
    name: "周泰",
    type: "吴国",
    avatar: "/team/zhoutai.png"
  };
  const _0x7cc64a = {
    name: "许攸",
    type: "魏国",
    avatar: "/team/xuyou.png"
  };
  const _0x49e465 = {
    name: "于禁",
    type: "魏国",
    avatar: "/team/yujin.png"
  };
  const _0x52897c = {
    name: "张星彩",
    type: "蜀国",
    avatar: "/team/zhangxingcai.png"
  };
  const _0xeb5b45 = {
    name: "关银屏",
    type: "蜀国",
    avatar: "/team/guanyinping.png"
  };
  const _0x30afe6 = {
    name: "关平",
    type: "蜀国",
    avatar: "/team/guanping.png"
  };
  const _0x28ed29 = {
    name: "程普",
    type: "吴国",
    avatar: "/team/chengpu.png"
  };
  const _0x5d50e0 = {
    name: "张昭",
    type: "吴国",
    avatar: "/team/zhangzhao.png"
  };
  const _0x9bdd46 = {
    name: "陆绩",
    type: "吴国",
    avatar: "/team/luji.png"
  };
  const _0x5557f1 = {
    name: "吕玲绮",
    type: "群雄",
    avatar: "/team/lvlingqi.png"
  };
  const _0xb85e3c = {
    name: "潘凤",
    type: "群雄",
    avatar: "/team/panfeng.png"
  };
  const _0x307658 = {
    name: "邢道荣",
    type: "群雄",
    avatar: "/team/xingdaorong.png"
  };
  const _0x30e0ca = {
    name: "祝融夫人",
    type: "群雄",
    avatar: "/team/zhurongfuren.png"
  };
  const _0x4cf173 = {
    name: "孟获",
    type: "群雄",
    avatar: "/team/menghuo.png"
  };
  const _0x2f3199 = {
    "101": _0x11ee78,
    "102": _0x5ee8c5,
    "103": _0x3bec4a,
    "104": _0x27a53d,
    "105": _0x90ece,
    "106": _0xdd06dd,
    "107": _0x2c3c35,
    "108": _0x35ac13,
    "109": _0x421d0a,
    "110": _0x5db161,
    "111": _0x3b7a62,
    "112": _0x44daa2,
    "113": _0x15e57a,
    "114": _0xf3c509,
    "115": _0x22a917,
    "116": _0x26f2e6,
    "117": _0x3048d2,
    "118": _0x1ba915,
    "119": _0x483a50,
    "120": _0xd2233c,
    "201": _0x36859b,
    "202": _0x3832c3,
    "203": _0x4b7a85,
    "204": _0x5c926a,
    "205": _0x378938,
    "206": _0x3db505,
    "207": _0x3af7b0,
    "208": _0x4041cb,
    "209": _0x30a095,
    "210": _0x4a0381,
    "211": _0x432dd4,
    "212": _0x1cf7d3,
    "213": _0x1e43d3,
    "214": _0x3b6340,
    "215": _0x17c75e,
    "216": _0x4f5b30,
    "217": _0x3a2827,
    "218": _0x144041,
    "219": _0x2f9d77,
    "220": _0xa70e9c,
    "221": _0x101573,
    "222": _0x1cf270,
    "223": _0x50fb66,
    "224": _0x2630d7,
    "225": _0xa8df06,
    "226": _0x3e9f31,
    "227": _0xe1180e,
    "228": _0x311434,
    "301": _0x5f080d,
    "302": _0x7cc64a,
    "303": _0x49e465,
    "304": _0x52897c,
    "305": _0xeb5b45,
    "306": _0x30afe6,
    "307": _0x28ed29,
    "308": _0x5d50e0,
    "309": _0x9bdd46,
    "310": _0x5557f1,
    "311": _0xb85e3c,
    "312": _0x307658,
    "313": _0x30e0ca,
    "314": _0x4cf173
  };
  const _0x560ba3 = {
    "1": "#8e8e93",
    "2": "#34c759",
    "3": "#007aff",
    "4": "#af52de",
    "5": "#ff9500",
    "6": "#ff3b30"
  };
  const _0x131411 = {
    "1": "登录一次游戏",
    "2": "分享一次游戏",
    "3": "赠送好友金币",
    "4": "招募英雄",
    "5": "挂机加钟",
    "6": "免费点金",
    "7": "开启宝箱",
    "12": "黑市采购",
    "13": "竞技场战斗",
    "14": "领取盐罐奖励"
  };
  const _0xee0f71 = {
    "1": 1,
    "2": 1,
    "3": 3,
    "4": 2,
    "5": 5,
    "6": 3,
    "7": 3,
    "12": 1,
    "13": 1,
    "14": 1
  };
  const _0x2a35bb = () => "\n  .qa-root {\n    --qa-accent: #2f80ed;\n    --qa-accent-hover: #1a6dd6;\n    --qa-accent-weak: #e8f0fe;\n    --qa-text-1: #1f2937;\n    --qa-text-2: #6b7280;\n    --qa-text-3: #9ca3af;\n    --qa-bg-1: #ffffff;\n    --qa-bg-2: #f7f8fa;\n    --qa-bg-3: #f0f1f3;\n    --qa-border: #e5e7eb;\n    --qa-shadow-1: 0 8px 24px rgba(0,0,0,0.12);\n    --qa-shadow-2: 0 2px 8px rgba(0,0,0,0.08);\n    --qa-radius-lg: 16px;\n    --qa-radius-md: 12px;\n    --qa-radius-sm: 8px;\n    --qa-orb-size: 36px;\n    --qa-panel-width: 92vw;\n    --qa-panel-height: 70vh;\n    --qa-menu-width: 130px;\n    --qa-ease: cubic-bezier(0.22, 1, 0.36, 1);\n    --qa-dur-fast: 160ms;\n    --qa-dur-normal: 260ms;\n    --qa-font-xs: 10px;\n    --qa-font-sm: 11px;\n    --qa-font-md: 13px;\n    --qa-font-lg: 14px;\n    --qa-font-xl: 16px;\n    --qa-spacing-xs: 4px;\n    --qa-spacing-sm: 8px;\n    --qa-spacing-md: 12px;\n    --qa-spacing-lg: 16px;\n    --qa-btn-padding: 8px 14px;\n    --qa-btn-sm-padding: 4px 10px;\n    --qa-input-padding: 8px 12px;\n    --qa-card-padding: 14px;\n    --qa-icon-sm: 16px;\n    --qa-icon-md: 18px;\n    --qa-icon-lg: 22px;\n    font-family: -apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"Segoe UI\", sans-serif;\n    font-size: var(--qa-font-md);\n    color: var(--qa-text-1);\n  }\n  .qa-root[data-theme=\"dark\"] {\n    --qa-accent: #3b8ff6;\n    --qa-accent-hover: #5ca0f8;\n    --qa-accent-weak: #1e3a5f;\n    --qa-text-1: #f9fafb;\n    --qa-text-2: #d1d5db;\n    --qa-text-3: #9ca3af;\n    --qa-bg-1: #1f2937;\n    --qa-bg-2: #111827;\n    --qa-bg-3: #0d1117;\n    --qa-border: #374151;\n    --qa-shadow-1: 0 8px 24px rgba(0,0,0,0.4);\n    --qa-shadow-2: 0 2px 8px rgba(0,0,0,0.3);\n  }\n  .qa-root, .qa-root * { box-sizing: border-box; }\n  .qa-root {\n    position: fixed;\n    inset: 0;\n    pointer-events: none !important;\n    z-index: 99997;\n  }\n  .qa-root .floating-orb,\n  .qa-root .panel-shell,\n  .qa-root .car-reward-popup,\n  .qa-root .car-helper-modal,\n  .qa-root .qa-auth-overlay,\n  .qa-root .qa-autocomplete-dropdown,\n  .calendar-popup.qa-root { pointer-events: auto !important; }\n\n  .qa-root .floating-orb {\n    position: fixed;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: var(--qa-orb-size);\n    height: var(--qa-orb-size);\n    border-radius: 50%;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    box-shadow: var(--qa-shadow-2), 0 0 12px rgba(47, 128, 237, 0.3);\n    cursor: grab;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 99999;\n    transition: box-shadow var(--qa-dur-fast) var(--qa-ease);\n    user-select: none;\n    touch-action: none;\n  }\n  .qa-root .floating-orb:active { cursor: grabbing; }\n  .qa-root .floating-orb.dragging {\n    cursor: grabbing;\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(47, 128, 237, 0.5);\n  }\n  .qa-root .floating-orb:hover {\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(47, 128, 237, 0.5);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb {\n    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);\n    box-shadow: var(--qa-shadow-2), 0 0 12px rgba(0, 0, 0, 0.5);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb:hover {\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(50, 50, 50, 0.6);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb.dragging {\n    box-shadow: var(--qa-shadow-1), 0 0 24px rgba(50, 50, 50, 0.6);\n  }\n  .qa-root .orb-icon {\n    width: var(--qa-icon-lg);\n    height: var(--qa-icon-lg);\n    fill: #fff;\n    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));\n  }\n\n  .qa-root .panel-shell {\n    position: fixed;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    width: min(100vw - 8%, var(--qa-panel-width));\n    height: 70vh;\n    max-height: 70vh;\n    background: var(--qa-bg-1);\n    border-radius: var(--qa-radius-lg);\n    box-shadow: var(--qa-shadow-1);\n    overflow: hidden;\n    display: none;\n    flex-direction: column;\n    z-index: 99998;\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .panel-shell.show { display: flex; }\n\n  /* 顶部导航布局 */\n  .qa-root .panel-header {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    position: relative;\n    padding: 0 8px;\n  }\n  /* 去除折叠按钮样式 */\n  .qa-root .menu-toggle {\n    display: none !important;\n  }\n\n  /* ===================== 认证状态 ===================== */\n  .qa-root .auth-status {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    font-size: 12px;\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .auth-status.success {\n    background: var(--qa-accent-weak);\n    border-bottom-color: var(--qa-accent);\n  }\n  .qa-root .auth-status.error {\n    background: rgba(255, 59, 48, 0.1);\n    border-bottom-color: #ff3b30;\n  }\n  .qa-root .auth-status-icon {\n    font-size: 14px;\n    width: 20px;\n    text-align: center;\n  }\n  .qa-root .auth-status-text {\n    flex: 1;\n    color: var(--qa-text-2);\n  }\n  .qa-root .auth-status.success .auth-status-text {\n    color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .auth-status.error .auth-status-text {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n  .qa-root .auth-status-actions {\n    display: flex;\n    gap: 6px;\n  }\n  .qa-root .auth-status .btn-small {\n    padding: 4px 8px;\n    font-size: 11px;\n    border-radius: 6px;\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-2);\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-status .btn-small:hover {\n    background: var(--qa-bg-3);\n  }\n  .qa-root .auth-status .btn-danger {\n    border-color: #ff3b30;\n    color: #ff3b30;\n  }\n  .qa-root .auth-status .btn-danger:hover {\n    background: rgba(255, 59, 48, 0.1);\n  }\n\n  /* 简化的认证状态指示器 */\n  .qa-root .auth-status {\n    margin-left: auto;\n    padding: 6px 10px;\n    border-radius: 6px;\n    font-size: 12px;\n    cursor: default;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .qa-root .auth-status .status-dot {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #9ca3af;\n    flex-shrink: 0;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-status .status-text {\n    color: var(--qa-text-2);\n    white-space: nowrap;\n  }\n\n  /* 不同状态的样式 */\n  .qa-root .auth-status.auth-valid .status-dot {\n    background: #18a058;\n    box-shadow: 0 0 6px rgba(24, 160, 88, 0.4);\n  }\n  .qa-root .auth-status.auth-valid .status-text {\n    color: #18a058;\n    font-weight: 500;\n  }\n\n  .qa-root .auth-status.auth-invalid .status-dot {\n    background: #f0a020;\n  }\n  .qa-root .auth-status.auth-invalid .status-text {\n    color: #f0a020;\n  }\n\n  .qa-root .auth-status.auth-frozen .status-dot {\n    background: #ff3b30;\n    box-shadow: 0 0 6px rgba(255, 59, 48, 0.4);\n  }\n  .qa-root .auth-status.auth-frozen .status-text {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n\n  .qa-root .auth-status.auth-unauthenticated .status-dot {\n    background: #9ca3af;\n  }\n  .qa-root .auth-status.auth-unauthenticated .status-text {\n    color: var(--qa-text-3);\n  }\n\n  /* 认证调试窗口 */\n  .qa-root .auth-debug-window {\n    position: fixed;\n    top: 80px;\n    right: 20px;\n    width: 380px;\n    max-height: 70vh;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n    box-shadow: var(--qa-shadow-1);\n    z-index: 99999;\n    display: none;\n    overflow: hidden;\n    font-size: 12px;\n  }\n  .qa-root .auth-debug-window .debug-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 16px;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-title {\n    color: var(--qa-text-1);\n    font-size: 13px;\n  }\n  .qa-root .auth-debug-window .debug-close {\n    background: none;\n    border: none;\n    color: var(--qa-text-2);\n    font-size: 20px;\n    cursor: pointer;\n    padding: 0;\n    width: 24px;\n    height: 24px;\n    line-height: 24px;\n    text-align: center;\n    border-radius: 4px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-debug-window .debug-close:hover {\n    background: var(--qa-bg-3);\n    color: var(--qa-text-1);\n  }\n  .qa-root .auth-debug-window .debug-content {\n    padding: 16px;\n    overflow-y: auto;\n    max-height: calc(70vh - 50px);\n  }\n  .qa-root .auth-debug-window .debug-section {\n    margin-bottom: 16px;\n  }\n  .qa-root .auth-debug-window .debug-section:last-child {\n    margin-bottom: 0;\n  }\n  .qa-root .auth-debug-window .debug-section-title {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n    margin-bottom: 8px;\n    padding-bottom: 4px;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .auth-debug-window .debug-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 6px 0;\n    gap: 12px;\n  }\n  .qa-root .auth-debug-window .debug-label {\n    color: var(--qa-text-2);\n    font-size: 12px;\n    flex-shrink: 0;\n  }\n  .qa-root .auth-debug-window .debug-value {\n    color: var(--qa-text-1);\n    font-size: 12px;\n    text-align: right;\n    word-break: break-all;\n    max-width: 60%;\n  }\n  .qa-root .auth-debug-window .debug-value.monospace {\n    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;\n    font-size: 11px;\n  }\n  .qa-root .auth-debug-window .debug-value.status-frozen {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-value.status-valid {\n    color: #18a058;\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-value.status-invalid {\n    color: #f0a020;\n  }\n\n  .qa-root .menu-nav {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    flex: 1;\n    background: var(--qa-bg-2);\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n    /* 隐藏滚动条 */\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    padding: 0 4px;\n    /* 启用原生水平滚动 */\n    touch-action: pan-x;\n    -webkit-overflow-scrolling: touch;\n    cursor: grab;\n  }\n  .qa-root .menu-nav.dragging {\n    cursor: grabbing;\n    user-select: none;\n  }\n  .qa-root .menu-nav::-webkit-scrollbar {\n    display: none !important;\n    height: 0 !important;\n  }\n  .qa-root .menu-nav.collapsed {\n    width: 0 !important;\n    overflow: hidden;\n    border-bottom: none;\n  }\n\n  .qa-root .menu-group {\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n    flex-shrink: 0;\n    border-right: none;\n  }\n  .qa-root .menu-group-title {\n    display: none;\n  }\n  .qa-root .menu-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 12px 14px;\n    cursor: pointer;\n    color: var(--qa-text-2);\n    font-size: 14px;\n    font-weight: 500;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    flex-shrink: 0;\n    margin: 4px 2px;\n    border-radius: 8px;\n  }\n  .qa-root .menu-item:hover { background: var(--qa-bg-3); color: var(--qa-text-1); }\n  .qa-root .menu-item.active {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-bottom-color: var(--qa-accent);\n    font-weight: 600;\n  }\n  .qa-root .menu-item.dragging {\n    opacity: 0.5;\n    transform: scale(1.05);\n  }\n  .qa-root .menu-icon { font-size: 18px; }\n\n  .qa-root .content-wrapper { flex: 1; display: flex; flex-direction: column; overflow: hidden; }\n  .qa-root .content-area { flex: 1; padding: var(--qa-card-padding); overflow-y: auto; background: var(--qa-bg-1); }\n\n  .qa-root .page-content { display: none; }\n  .qa-root .page-content.active { display: block; }\n\n  .qa-root .card {\n    background: var(--qa-bg-2);\n    border-radius: var(--qa-radius-md);\n    overflow: hidden;\n    margin-bottom: 12px;\n  }\n  .qa-root .card-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--qa-spacing-md) var(--qa-card-padding);\n    border-bottom: 1px solid var(--qa-border);\n    cursor: pointer;\n    user-select: none;\n  }\n  .qa-root .card-header:hover { background: var(--qa-bg-3); }\n  .qa-root .card-title {\n    font-size: var(--qa-font-lg);\n    font-weight: 600;\n    color: var(--qa-text-1);\n    display: flex;\n    align-items: center;\n    gap: var(--qa-spacing-sm);\n    cursor: grab;\n  }\n  .qa-root .card-title:active {\n    cursor: grabbing;\n  }\n  .qa-root .card-title::before {\n    content: '';\n    width: 4px;\n    height: 16px;\n    background: var(--qa-accent);\n    border-radius: 2px;\n  }\n  .qa-root .card-collapse-icon {\n    width: 16px;\n    height: 16px;\n    fill: var(--qa-text-3);\n    transition: transform var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .card.collapsed .card-collapse-icon { transform: rotate(-90deg); }\n  .qa-root .card.collapsed .card-body, .qa-root .card.collapsed .card-footer { display: none; }\n\n  /* 更新日志版本折叠 */\n  .qa-root .changelog-version .card-collapse-icon { transition: transform var(--qa-dur-fast) var(--qa-ease); }\n  .qa-root .changelog-version.collapsed .card-collapse-icon { transform: rotate(-90deg); }\n  .qa-root .changelog-version.collapsed .changelog-content { display: none; }\n\n  .qa-root .card-body { padding: var(--qa-card-padding); }\n  .qa-root .card-footer { padding: var(--qa-spacing-sm) var(--qa-card-padding) var(--qa-card-padding); display: flex; gap: var(--qa-spacing-sm); flex-wrap: wrap; }\n\n  .qa-root .stats-row {\n    display: flex;\n    gap: var(--qa-spacing-md);\n    padding: var(--qa-spacing-md) var(--qa-card-padding);\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    margin-bottom: var(--qa-spacing-md);\n  }\n  .qa-root .stat-item { display: flex; align-items: center; gap: 6px; }\n  .qa-root .stat-label { font-size: var(--qa-font-sm); color: var(--qa-text-3); }\n  .qa-root .stat-value { font-size: var(--qa-font-xl); font-weight: 700; color: var(--qa-accent); }\n\n  .qa-root .progress-bar {\n    width: 100%;\n    height: 8px;\n    background: var(--qa-bg-3);\n    border-radius: 999px;\n    overflow: hidden;\n  }\n  .qa-root .progress-fill {\n    height: 100%;\n    background: linear-gradient(90deg, var(--qa-accent), #6366f1);\n    border-radius: 999px;\n  }\n\n  .qa-root .btn {\n    padding: var(--qa-btn-padding);\n    border: none;\n    border-radius: var(--qa-radius-sm);\n    font-size: var(--qa-font-md);\n    font-weight: 500;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    font-family: inherit;\n  }\n  .qa-root .btn:disabled { opacity: 0.5; cursor: not-allowed; }\n  .qa-root .btn-primary { background: var(--qa-accent); color: #fff; }\n  .qa-root .btn-primary:hover:not(:disabled) { background: var(--qa-accent-hover); transform: translateY(-1px); }\n  .qa-root .btn-success { background: #10b981; color: #fff; }\n  .qa-root .btn-success:hover:not(:disabled) { background: #059669; }\n  .qa-root .btn-danger { background: #ef4444; color: #fff; }\n  .qa-root .btn-danger:hover:not(:disabled) { background: #dc2626; }\n  .qa-root .btn-warning { background: #f59e0b; color: #fff; }\n  .qa-root .btn-warning:hover:not(:disabled) { background: #d97706; }\n  .qa-root .btn-secondary { background: var(--qa-bg-3); color: var(--qa-text-2); }\n  .qa-root .btn-secondary:hover:not(:disabled) { background: var(--qa-border); }\n  .qa-root .btn-small { padding: var(--qa-btn-sm-padding); font-size: var(--qa-font-sm); border-radius: 6px; }\n  .qa-root .btn-sm { padding: var(--qa-btn-sm-padding); font-size: var(--qa-font-sm); border-radius: 6px; }\n  .qa-root .btn.active { background: var(--qa-accent); color: #fff; }\n  .qa-root .btn-row { display: flex; gap: var(--qa-spacing-sm); flex-wrap: wrap; }\n\n  /* 换皮闯关BOSS网格 */\n  .qa-root .skin-towers-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    gap: var(--qa-spacing-sm);\n  }\n  .qa-root .skin-tower-item {\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 8px;\n    text-align: center;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .skin-tower-item.passed { border-color: #22c55e; background: rgba(34,197,94,0.1); }\n  .qa-root .skin-tower-item.fighting { border-color: #eab308; background: rgba(234,179,8,0.1); animation: qa-pulse 1.5s ease-in-out infinite; }\n  .qa-root .skin-tower-item.disabled { opacity: 0.5; }\n  .qa-root .skin-tower-item .tower-name { font-weight: 600; font-size: 12px; color: var(--qa-accent); margin-bottom: 4px; }\n  .qa-root .skin-tower-item .tower-level { font-size: 14px; font-weight: 700; color: var(--qa-text-1); }\n  .qa-root .skin-tower-item .tower-score { font-size: 11px; color: var(--qa-text-3); margin: 4px 0; }\n  .qa-root .skin-tower-item .tower-status { font-size: 11px; margin-bottom: 6px; }\n  @keyframes qa-pulse { 0%,100%{opacity:1} 50%{opacity:0.7} }\n\n  .qa-root .input, .qa-root .select {\n    padding: var(--qa-input-padding);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-1);\n    font-size: var(--qa-font-md);\n    outline: none;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    font-family: inherit;\n  }\n  .qa-root .input:focus, .qa-root .select:focus { border-color: var(--qa-accent); box-shadow: 0 0 0 3px var(--qa-accent-weak); }\n\n  .qa-root .form-row { display: flex; align-items: center; gap: var(--qa-spacing-sm); flex-wrap: wrap; margin-bottom: var(--qa-spacing-sm); }\n  .qa-root .form-label { font-size: var(--qa-font-sm); color: var(--qa-text-3); }\n  .qa-root .helper-text { font-size: var(--qa-font-sm); color: var(--qa-text-3); margin-top: var(--qa-spacing-sm); }\n  .qa-root .qa-input-error { font-size: var(--qa-font-sm); color: #ef4444; margin-top: 6px; }\n  .qa-root .input.error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.15); }\n  .qa-root[data-theme=\"dark\"] .input.error { box-shadow: 0 0 0 3px rgba(239,68,68,0.20); }\n\n  .qa-root .qa-target-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .qa-target-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n    padding: 8px 10px;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n  }\n  .qa-root .qa-target-row .qa-target-attr { min-width: 140px; }\n  .qa-root .qa-target-row .qa-target-value { width: 90px; }\n\n  .qa-root .qa-option-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--qa-spacing-sm); }\n  .qa-root .qa-option-item {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    border-radius: var(--qa-radius-md);\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    cursor: pointer;\n    user-select: none;\n    transition: transform var(--qa-dur-fast) var(--qa-ease), border-color var(--qa-dur-fast) var(--qa-ease), box-shadow var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-option-item:hover { border-color: var(--qa-accent); transform: translateY(-1px); }\n  .qa-root .qa-option-item.selected { border-color: var(--qa-accent); box-shadow: 0 0 0 3px var(--qa-accent-weak); }\n  .qa-root .qa-option-icon { width: 40px; height: 40px; display: grid; place-items: center; }\n  .qa-root .qa-option-icon svg { width: 40px; height: 40px; display: block; }\n  .qa-root .qa-option-icon .qa-option-img { width: 40px; height: 40px; object-fit: contain; display: block; image-rendering: auto; }\n  .qa-root .qa-option-title { font-weight: 700; color: var(--qa-text-1); }\n  .qa-root .qa-option-sub { font-size: 12px; color: var(--qa-text-3); margin-top: 2px; }\n\n  .qa-root .task-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--qa-spacing-sm); }\n  .qa-root .task-check {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: var(--qa-font-sm);\n    color: var(--qa-text-2);\n    padding: 6px 8px;\n    border-radius: 8px;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .task-check input { accent-color: var(--qa-accent); }\n  .qa-root .task-check.done { background: rgba(16,185,129,0.14); color: #059669; }\n  .qa-root[data-theme=\"dark\"] .task-check.done { background: rgba(16,185,129,0.18); color: #34d399; }\n  .qa-root .task-check .task-status { margin-left: auto; font-size: 11px; color: var(--qa-text-3); }\n  .qa-root .task-check.done .task-status { color: inherit; }\n\n  /* 每日任务执行情况列表样式 */\n  .qa-root .task-list { display: flex; flex-direction: column; gap: 6px; }\n  .qa-root .task-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px 12px;\n    background: var(--qa-bg-3);\n    border-radius: 8px;\n    font-size: 13px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .task-item .task-name { color: var(--qa-text-1); font-weight: 500; }\n  .qa-root .task-item .task-progress { font-size: 12px; color: var(--qa-text-2); font-family: monospace; }\n  .qa-root .task-item.done {\n    background: rgba(16, 185, 129, 0.12);\n  }\n  .qa-root .task-item.done .task-name { color: #059669; }\n  .qa-root .task-item.done .task-progress { color: #059669; }\n  .qa-root[data-theme=\"dark\"] .task-item.done { background: rgba(16, 185, 129, 0.18); }\n  .qa-root[data-theme=\"dark\"] .task-item.done .task-name { color: #34d399; }\n  .qa-root[data-theme=\"dark\"] .task-item.done .task-progress { color: #34d399; }\n\n  .qa-root .qa-log {\n    font-size: 12px;\n    color: var(--qa-text-2);\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    white-space: pre-wrap;\n    min-height: 80px;\n  }\n\n  .qa-root .qa-json {\n    font-size: 12px;\n    color: var(--qa-text-1);\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    white-space: pre-wrap;\n    word-break: break-word;\n    overflow: auto;\n    max-height: 260px;\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n\n  .qa-root .qa-hero-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin-bottom: 12px;\n  }\n  .qa-root .qa-hero-item {\n    padding: 8px 14px;\n    background: var(--qa-bg-1);\n    border: 2px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 500;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    color: var(--qa-text-1);\n  }\n  .qa-root .qa-hero-item:hover {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-hero-item.active {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n  }\n\n  .qa-root .qa-equip-tabs { display: flex; gap: 8px; margin-bottom: 12px; }\n  .qa-root .qa-equip-tab {\n    flex: 1;\n    padding: 12px 10px;\n    background: var(--qa-bg-2);\n    border: 2px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n    cursor: pointer;\n    text-align: center;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-equip-tab:hover { border-color: var(--qa-text-3); }\n  .qa-root .qa-equip-tab.active {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-equip-tab .tab-name { font-weight: 600; font-size: 13px; color: var(--qa-text-1); }\n  .qa-root .qa-equip-tab .tab-level { font-size: 11px; color: var(--qa-text-3); margin-top: 3px; }\n  .qa-root .qa-equip-tab.active .tab-name { color: var(--qa-accent); }\n\n  .qa-root .qa-slot-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }\n  .qa-root .qa-slot-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 14px;\n    background: var(--qa-bg-1);\n    border-radius: var(--qa-radius-sm);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .qa-slot-item:hover { border-color: var(--qa-accent); }\n  .qa-root .qa-slot-item.locked { border-color: var(--qa-accent); background: var(--qa-accent-weak); }\n  .qa-root .qa-slot-label { font-weight: 600; color: var(--qa-text-2); font-size: 12px; width: 40px; }\n  .qa-root .qa-slot-checkbox { width: 16px; height: 16px; accent-color: var(--qa-accent); }\n  .qa-root .qa-slot-attr { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 13px; }\n  .qa-root .qa-slot-empty { color: var(--qa-text-3); font-size: 12px; }\n\n  .qa-root .qa-actions { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px; }\n  .qa-root .qa-count-display { font-size: 12px; color: var(--qa-text-2); margin-left: auto; display: flex; align-items: center; gap: 8px; }\n  .qa-root .qa-count-display strong { color: var(--qa-accent); font-size: 14px; }\n\n  .qa-root .qa-auto-section {\n    background: var(--qa-bg-2);\n    border-radius: var(--qa-radius-md);\n    padding: 12px;\n  }\n  .qa-root .qa-section-title { font-size: 13px; font-weight: 600; margin-bottom: 10px; color: var(--qa-text-1); }\n  .qa-root .qa-auto-form { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .qa-root .qa-form-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--qa-text-2); }\n  .qa-root .qa-form-label { font-size: 12px; color: var(--qa-text-2); }\n  .qa-root .qa-loading { font-size: 12px; color: var(--qa-text-3); text-align: center; padding: 6px 0; }\n\n  /* 俱乐部样式 */\n  .qa-root .club-status-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(156, 163, 175, 0.15);\n    color: var(--qa-text-3);\n  }\n  .qa-root .club-status-badge.active {\n    background: rgba(34, 197, 94, 0.15);\n    color: #22c55e;\n  }\n  .qa-root .energy-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(99, 102, 241, 0.15);\n    color: #6366f1;\n  }\n  .qa-root .time-status-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(156, 163, 175, 0.15);\n    color: var(--qa-text-3);\n  }\n  .qa-root .time-status-badge.available {\n    background: rgba(34, 197, 94, 0.15);\n    color: #22c55e;\n  }\n  .qa-root .time-status-badge.unavailable {\n    background: rgba(239, 68, 68, 0.15);\n    color: #ef4444;\n  }\n  .qa-root .club-overview { display: flex; flex-direction: column; gap: 12px; }\n  .qa-root .club-header-row { display: flex; align-items: center; gap: 12px; }\n  .qa-root .club-avatar { width: 48px; height: 48px; border-radius: 8px; overflow: hidden; background: var(--qa-bg-3); flex-shrink: 0; }\n  .qa-root .club-avatar img { width: 100%; height: 100%; object-fit: cover; }\n  .qa-root .club-meta { flex: 1; min-width: 0; }\n  .qa-root .club-name { font-size: 16px; font-weight: 600; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .club-sub { font-size: 12px; color: var(--qa-text-2); margin-top: 2px; }\n  .qa-root .club-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: var(--qa-spacing-sm); }\n  .qa-root .club-stat-item { background: var(--qa-bg-2); border-radius: 8px; padding: 8px; text-align: center; }\n  .qa-root .club-stat-item .stat-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 2px; }\n  .qa-root .club-stat-item .stat-value { font-size: 13px; font-weight: 600; color: var(--qa-text-1); }\n  .qa-root .club-announcement { background: var(--qa-bg-2); border-radius: 8px; padding: 10px; }\n  .qa-root .club-announcement .ann-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 4px; }\n  .qa-root .club-announcement .ann-text { font-size: 12px; color: var(--qa-text-1); white-space: pre-wrap; word-break: break-all; }\n  .qa-root .club-leader .leader-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 4px; }\n  .qa-root .club-leader .leader-info { display: flex; align-items: center; gap: 8px; }\n  .qa-root .club-leader .leader-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--qa-bg-3); }\n  .qa-root .club-members-section { margin-top: 12px; }\n  .qa-root .club-members-section .section-title { font-size: 13px; font-weight: 600; color: var(--qa-text-1); margin-bottom: 8px; }\n  .qa-root .club-members-list { display: flex; flex-direction: column; gap: 6px; max-height: 300px; overflow-y: auto; }\n  .qa-root .member-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: var(--qa-bg-2); border-radius: 8px; }\n  .qa-root .member-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }\n  .qa-root .member-avatar { width: 24px; height: 24px; border-radius: 50%; background: var(--qa-bg-3); flex-shrink: 0; }\n  .qa-root .member-name { font-size: 12px; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .member-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; font-size: 11px; }\n  .qa-root .member-power { color: var(--qa-text-2); font-variant-numeric: tabular-nums; }\n  .qa-root .member-red { color: #ef4444; }\n  .qa-root .member-job { padding: 2px 6px; border-radius: 4px; background: rgba(59, 130, 246, 0.1); color: #3b82f6; }\n  .qa-root .member-job.job-leader { background: rgba(239, 68, 68, 0.1); color: #ef4444; }\n  .qa-root .member-job.job-vice { background: rgba(236, 72, 153, 0.1); color: #ec4899; }\n\n  .qa-toast {\n    position: fixed;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(31, 41, 55, 0.9);\n    color: #fff;\n    padding: 12px 20px;\n    border-radius: 8px;\n    font-size: 15px;\n    z-index: 100000;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-toast.show { opacity: 1; pointer-events: auto; }\n  .qa-toast.success { background: rgba(16, 185, 129, 0.95); }\n  .qa-toast.error { background: rgba(239, 68, 68, 0.95); }\n  .qa-toast.warning { background: rgba(245, 158, 11, 0.95); }\n  .qa-tip-toast { bottom: 80px; background: rgba(47, 128, 237, 0.95); }\n\n  .qa-auth-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(0,0,0,0.6);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 100001;\n    backdrop-filter: blur(6px);\n  }\n  .qa-auth-modal {\n    background: #fff;\n    border-radius: 14px;\n    padding: 24px;\n    width: 320px;\n    text-align: center;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n  }\n  .qa-auth-title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }\n  .qa-auth-desc { font-size: 13px; color: #6b7280; margin-bottom: 16px; }\n  .qa-auth-input {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #e5e7eb;\n    border-radius: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .qa-auth-error { font-size: 12px; color: #ef4444; margin-bottom: 12px; display: none; }\n\n  .qa-root .qa-watermark {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    z-index: 1;\n    overflow: hidden;\n  }\n  .qa-root .qa-watermark-pattern {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-wrap: wrap;\n    transform: rotate(-30deg);\n  }\n  .qa-root .qa-watermark-item {\n    padding: 30px 50px;\n    font-size: 14px;\n    font-weight: 600;\n    color: rgba(0,0,0,0.05);\n    white-space: nowrap;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-watermark-item { color: rgba(255,255,255,0.05); }\n\n  /* 阵容选择器和展示样式 */\n  .qa-root .team-selector {\n    display: flex;\n    gap: 4px;\n  }\n  .qa-root .team-btn {\n    width: 28px;\n    height: 28px;\n    border: none;\n    border-radius: 50%;\n    background: var(--qa-bg-3);\n    color: var(--qa-text-2);\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .team-btn:hover { background: var(--qa-border); }\n  .qa-root .team-btn.active {\n    background: var(--qa-accent);\n    color: #fff;\n  }\n  .qa-root .team-btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .qa-root .team-heroes-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    min-height: 60px;\n    align-items: center;\n  }\n  .qa-root .team-hero-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    min-width: 52px;\n  }\n  .qa-root .team-hero-circle {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    background: var(--qa-bg-1);\n    border: 2px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .team-hero-circle:hover {\n    border-color: var(--qa-accent);\n    transform: translateY(-2px);\n  }\n  .qa-root .team-hero-avatar {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .team-hero-placeholder {\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2);\n  }\n  .qa-root .team-hero-name {\n    font-size: 11px;\n    color: var(--qa-text-2);\n    text-align: center;\n    max-width: 52px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  /* 疯狂赛车样式 - 紧凑卡片布局 */\n  .qa-root .car-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qa-root .car-item {\n    background: var(--qa-bg-2);\n    border-radius: 6px;\n    padding: 8px 10px;\n    border-left: 3px solid;\n  }\n  .qa-root .car-item.grade-1 { border-left-color: #22c55e; }\n  .qa-root .car-item.grade-2 { border-left-color: #3b82f6; }\n  .qa-root .car-item.grade-3 { border-left-color: #a855f7; }\n  .qa-root .car-item.grade-4 { border-left-color: #f59e0b; }\n  .qa-root .car-item.grade-5 { border-left-color: #ef4444; }\n  .qa-root .car-item.grade-6 { border-left-color: #eab308; }\n\n  .qa-root .car-item-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-bottom: 6px;\n  }\n  .qa-root .car-brand-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 4px;\n  }\n  .qa-root .car-grade-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    background: currentColor;\n    filter: brightness(0.95);\n  }\n  .qa-root .car-grade-icon svg {\n    display: block;\n    fill: #fff;\n    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));\n  }\n  .qa-root .car-badge {\n    font-size: 11px;\n    padding: 1px 6px;\n    border-radius: 4px;\n    border: 1px solid;\n    font-weight: 500;\n  }\n  .qa-root .car-name {\n    font-size: 12px;\n    color: var(--qa-text-2);\n    flex: 1;\n  }\n\n  .qa-root .car-meta-row {\n    display: grid;\n    grid-template-columns: repeat(6, auto);\n    gap: 4px 8px;\n    font-size: 11px;\n    margin-bottom: 6px;\n    align-items: center;\n  }\n  .qa-root .car-meta-row .meta-k {\n    color: var(--qa-text-3);\n    text-align: right;\n  }\n  .qa-root .car-meta-row .meta-v {\n    color: var(--qa-text-1);\n    font-weight: 500;\n  }\n  .qa-root .car-meta-row .reward-trigger {\n    cursor: pointer;\n    color: var(--qa-accent);\n  }\n  .qa-root .car-meta-row .reward-trigger.has-big-prize {\n    color: #10b981;\n    font-weight: 600;\n  }\n  .qa-root .car-meta-row .meta-v.has-helper {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n\n  .qa-root .car-actions {\n    display: flex;\n    gap: 6px;\n  }\n  .qa-root .car-actions .btn {\n    flex: 1;\n    padding: 5px 8px;\n    font-size: 11px;\n  }\n\n  /* 奖励弹窗样式 */\n  .qa-root .car-reward-popup {\n    position: fixed;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: 8px;\n    box-shadow: var(--qa-shadow-1);\n    z-index: 100000;\n    min-width: 180px;\n    max-width: 260px;\n  }\n  .qa-root .car-reward-popup .popup-header {\n    font-size: 12px;\n    font-weight: 600;\n    padding: 8px 12px;\n    border-bottom: 1px solid var(--qa-border);\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-reward-popup .popup-content {\n    padding: 8px 12px;\n    font-size: 11px;\n  }\n  .qa-root .car-reward-popup .reward-row {\n    display: flex;\n    justify-content: space-between;\n    padding: 3px 0;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .car-reward-popup .reward-row:last-child {\n    border-bottom: none;\n  }\n  .qa-root .car-reward-popup .reward-row .name {\n    color: var(--qa-text-2);\n  }\n  .qa-root .car-reward-popup .reward-row .value {\n    color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize {\n    background: rgba(245, 158, 11, 0.12);\n    padding: 4px 6px;\n    margin: 2px -6px;\n    border-radius: 4px;\n    border-bottom: none;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize .name {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize .value {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .car-reward-popup .no-rewards {\n    text-align: center;\n    color: var(--qa-text-3);\n    padding: 4px 0;\n  }\n\n  /* 护卫选择弹窗优化 */\n  .qa-root .car-helper-modal .helper-list {\n    max-height: 320px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin: 12px 0;\n  }\n  .qa-root .car-helper-modal .helper-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 2px solid transparent;\n  }\n  .qa-root .car-helper-modal .helper-item:hover {\n    background: var(--qa-bg-3);\n    border-color: var(--qa-border);\n  }\n  .qa-root .car-helper-modal .helper-item.selected {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n  }\n  .qa-root .car-helper-modal .helper-item.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .car-helper-modal .helper-info {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n  .qa-root .car-helper-modal .helper-name {\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-helper-modal .helper-meta {\n    display: flex;\n    gap: 8px;\n    font-size: 11px;\n    color: var(--qa-text-3);\n  }\n  .qa-root .car-helper-modal .helper-power {\n    color: #f59e0b;\n    font-weight: 500;\n  }\n  .qa-root .car-helper-modal .helper-count {\n    color: var(--qa-accent);\n  }\n  .qa-root .car-helper-modal .helper-count.full {\n    color: #ef4444;\n  }\n\n  /* 赛车状态栏 */\n  .qa-root .car-status-bar {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    padding: 10px 12px;\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    margin-bottom: 12px;\n  }\n  .qa-root .car-status-bar .status-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n  }\n  .qa-root .car-status-bar .status-label {\n    color: var(--qa-text-3);\n  }\n  .qa-root .car-status-bar .status-value {\n    font-weight: 600;\n    color: var(--qa-text-1);\n    padding: 2px 8px;\n    border-radius: 4px;\n    background: var(--qa-bg-2);\n  }\n  .qa-root .car-status-bar .status-value.active {\n    background: rgba(16, 185, 129, 0.15);\n    color: #10b981;\n  }\n  .qa-root .car-status-bar .status-value.inactive {\n    background: rgba(239, 68, 68, 0.15);\n    color: #ef4444;\n  }\n\n  /* 收车倒计时 */\n  .qa-root .car-countdown {\n    font-size: var(--qa-font-sm);\n    color: var(--qa-text-3);\n    padding: 5px 10px;\n    background: var(--qa-bg-3);\n    border-radius: 4px;\n  }\n\n  /* ===================== 响应式断点 ===================== */\n  /* 平板横屏 / 小桌面 */\n  @media (max-width: 1024px) {\n    .qa-root {\n      --qa-panel-width: 94vw;\n      --qa-card-padding: 12px;\n    }\n    .qa-root .skin-towers-grid { grid-template-columns: repeat(2, 1fr); }\n    .qa-root .club-stats-grid { grid-template-columns: repeat(2, 1fr); }\n  }\n\n  /* 平板竖屏 / 大手机 */\n  @media (max-width: 768px) {\n    .qa-root {\n      --qa-font-xs: 9px;\n      --qa-font-sm: 10px;\n      --qa-font-md: 12px;\n      --qa-font-lg: 13px;\n      --qa-font-xl: 15px;\n      --qa-spacing-sm: 6px;\n      --qa-spacing-md: 10px;\n      --qa-spacing-lg: 14px;\n      --qa-btn-padding: 6px 12px;\n      --qa-btn-sm-padding: 4px 8px;\n      --qa-input-padding: 6px 10px;\n      --qa-card-padding: 12px;\n      --qa-radius-lg: 14px;\n      --qa-radius-md: 10px;\n      --qa-orb-size: 32px;\n      --qa-icon-sm: 14px;\n      --qa-icon-md: 16px;\n      --qa-icon-lg: 20px;\n    }\n    .qa-root .panel-shell {\n      width: 94vw;\n      height: 78vh;\n      max-height: 78vh;\n      border-radius: var(--qa-radius-lg);\n      bottom: auto;\n      top: 6%;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .qa-root .floating-orb {\n      right: 8px;\n      bottom: auto;\n      top: 40%;\n      transform: translateY(-50%);\n    }\n    .qa-root .task-grid { grid-template-columns: 1fr; }\n    .qa-root .qa-option-grid { grid-template-columns: 1fr; gap: 8px; }\n    .qa-root .skin-towers-grid { grid-template-columns: repeat(2, 1fr); }\n    .qa-root .club-stats-grid { grid-template-columns: repeat(2, 1fr); }\n    .qa-root .menu-item {\n      padding: 8px 10px;\n      font-size: var(--qa-font-md);\n    }\n    .qa-root .menu-icon { font-size: var(--qa-icon-sm); }\n    .qa-root .menu-group { padding: 0 2px; }\n    .qa-root .panel-header { height: 44px; }\n    .qa-root .menu-toggle { display: none !important; }\n    .qa-root .content-area { padding: var(--qa-spacing-sm); }\n    .qa-root .card-header { padding: 10px 12px; }\n    .qa-root .card-body { padding: var(--qa-card-padding); }\n    .qa-root .card-footer { padding: 8px 12px 12px; }\n    .qa-root .btn { font-size: var(--qa-font-md); }\n    .qa-root .btn-small, .qa-root .btn-sm { font-size: var(--qa-font-xs); }\n  }\n\n  /* 小手机 */\n  @media (max-width: 480px) {\n    .qa-root {\n      --qa-font-xs: 9px;\n      --qa-font-sm: 10px;\n      --qa-font-md: 11px;\n      --qa-font-lg: 12px;\n      --qa-font-xl: 14px;\n      --qa-spacing-xs: 3px;\n      --qa-spacing-sm: 5px;\n      --qa-spacing-md: 8px;\n      --qa-spacing-lg: 12px;\n      --qa-btn-padding: 5px 10px;\n      --qa-btn-sm-padding: 3px 6px;\n      --qa-input-padding: 5px 8px;\n      --qa-card-padding: 10px;\n      --qa-radius-lg: 12px;\n      --qa-radius-md: 8px;\n      --qa-radius-sm: 6px;\n      --qa-orb-size: 28px;\n      --qa-icon-sm: 12px;\n      --qa-icon-md: 14px;\n      --qa-icon-lg: 18px;\n    }\n    .qa-root .panel-shell {\n      width: 96vw;\n      height: 82vh;\n      max-height: 82vh;\n      top: 4%;\n    }\n    .qa-root .floating-orb { right: 6px; }\n    .qa-root .skin-towers-grid { grid-template-columns: 1fr 1fr; gap: 6px; }\n    .qa-root .club-stats-grid { grid-template-columns: 1fr 1fr; gap: 6px; }\n    .qa-root .qa-hero-quench-grid { grid-template-columns: 1fr; }\n    .qa-root .menu-item { padding: 6px 8px; }\n    .qa-root .panel-header { height: 40px; }\n    .qa-root .content-area { padding: var(--qa-spacing-xs); }\n    .qa-root .stats-row { padding: 10px; gap: 8px; flex-wrap: wrap; }\n    .qa-root .form-row { gap: 6px; }\n    .qa-root .btn-row { gap: 6px; }\n  }\n\n  /* 盐场匹配详情样式 */\n  .qa-root .salt-match-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .match-date-tag {\n    display: inline-block;\n    padding: 4px 10px;\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-radius: 6px;\n    font-size: 12px;\n    font-weight: 500;\n    margin-bottom: 6px;\n  }\n  .qa-root .match-club-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qa-root .match-club-item {\n    background: var(--qa-bg-2);\n    border-radius: 10px;\n    padding: 12px;\n    border: 1px solid var(--qa-border);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .match-club-item:hover {\n    border-color: var(--qa-accent);\n    box-shadow: var(--qa-shadow-2);\n  }\n  .qa-root .club-main-row {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 8px;\n  }\n  .qa-root .club-rank {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 12px;\n    flex-shrink: 0;\n  }\n  .qa-root .club-logo {\n    width: 36px;\n    height: 36px;\n    border-radius: 8px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .club-logo img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .club-basic { flex: 1; min-width: 0; }\n  .qa-root .club-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }\n  .qa-root .club-name { font-weight: 600; font-size: 14px; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .club-server { font-size: 11px; color: var(--qa-text-3); background: var(--qa-bg-3); padding: 2px 6px; border-radius: 4px; }\n  .qa-root .club-stats-row { display: flex; gap: 6px; flex-wrap: wrap; }\n  .qa-root .stat-tag {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .stat-tag.power { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .stat-tag.red { background: rgba(239, 68, 68, 0.12); color: #ef4444; }\n  .qa-root .stat-tag.score { background: rgba(236, 72, 153, 0.12); color: #ec4899; }\n  .qa-root .club-detail-row {\n    padding: 8px 0;\n    border-top: 1px dashed var(--qa-border);\n    border-bottom: 1px dashed var(--qa-border);\n    margin: 4px 0;\n  }\n  .qa-root .car-heads { display: flex; gap: 12px; flex-wrap: wrap; }\n  .qa-root .car-head-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 11px;\n    padding: 4px 8px;\n    background: rgba(0, 191, 255, 0.1);\n    color: #00bfff;\n    border-radius: 6px;\n  }\n  .qa-root .car-head-avatar {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .car-head-text { white-space: nowrap; }\n  .qa-root .club-extra-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 6px; }\n  .qa-root .alliance-tag {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .alliance-tag.梦 { background: rgba(236, 72, 153, 0.12); color: #ec4899; }\n  .qa-root .alliance-tag.大 { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }\n  .qa-root .alliance-tag.正义 { background: rgba(34, 197, 94, 0.12); color: #22c55e; }\n  .qa-root .alliance-tag.龙 { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .alliance-tag.未知 { background: rgba(107, 114, 128, 0.12); color: #6b7280; }\n  .qa-root .announcement {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    flex: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 0;\n  }\n\n  /* 消耗活动监控样式 */\n  .qa-root .consumption-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .qa-root .consumption-item {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .qa-root .consumption-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .qa-root .consumption-name {\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .consumption-values {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n  .qa-root .consumption-bar {\n    width: 100%;\n    height: 8px;\n    background: var(--qa-bg-3);\n    border-radius: 999px;\n    overflow: hidden;\n  }\n  .qa-root .consumption-bar-fill {\n    height: 100%;\n    border-radius: 999px;\n    transition: width var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .consumption-footer {\n    display: flex;\n    justify-content: flex-end;\n    font-size: 11px;\n  }\n\n  /* 盐场战绩样式 */\n  .qa-root .battle-records-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .battle-records-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .battle-member-card {\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border);\n    overflow: hidden;\n  }\n  .qa-root .battle-member-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .battle-member-header:hover { background: var(--qa-bg-3); }\n  .qa-root .battle-member-info { display: flex; align-items: center; gap: 8px; }\n  .qa-root .battle-rank {\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 11px;\n  }\n  .qa-root .battle-member-avatar {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .battle-member-name { font-weight: 600; font-size: 13px; color: var(--qa-text-1); }\n  .qa-root .battle-member-stats { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }\n  .qa-root .stat-inline {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .stat-inline.win { background: rgba(16, 185, 129, 0.12); color: #10b981; }\n  .qa-root .stat-inline.lose { background: rgba(239, 68, 68, 0.12); color: #ef4444; }\n  .qa-root .stat-inline.lose.highlight { background: rgba(251, 191, 36, 0.2); color: #f59e0b; font-weight: 700; }\n  .qa-root .stat-inline.kd { background: rgba(99, 102, 241, 0.12); color: #6366f1; }\n  .qa-root .stat-inline.dan { background: rgba(139, 92, 246, 0.12); color: #8b5cf6; }\n  .qa-root .stat-inline.building { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .battle-member-name.name-red { color: #ef4444; }\n  .qa-root .battle-member-name.name-green { color: #10b981; }\n  .qa-root .battle-member-name.name-yellow { color: #f59e0b; }\n  .qa-root .expand-icon { font-size: 10px; color: var(--qa-text-3); margin-left: 4px; }\n  .qa-root .battle-member-details {\n    padding: 0 12px 12px;\n    border-top: 1px dashed var(--qa-border);\n  }\n  .qa-root .battle-list { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }\n  .qa-root .battle-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 10px;\n    border-radius: 6px;\n    font-size: 11px;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .battle-item.win { background: rgba(16, 185, 129, 0.08); }\n  .qa-root .battle-item.lose { background: rgba(239, 68, 68, 0.08); }\n  .qa-root .battle-time { color: var(--qa-text-3); font-family: monospace; min-width: 40px; }\n  .qa-root .battle-type { color: var(--qa-text-2); min-width: 36px; padding: 2px 6px; border-radius: 4px; font-size: 10px; }\n  .qa-root .battle-type.attack { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }\n  .qa-root .battle-type.defend { background: rgba(99, 102, 241, 0.15); color: #6366f1; }\n  .qa-root .battle-participants { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; }\n  .qa-root .battle-self { color: var(--qa-text-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 60px; }\n  .qa-root .battle-vs { color: var(--qa-text-3); font-size: 10px; }\n  .qa-root .battle-target-avatar { width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; }\n  .qa-root .battle-target { color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .battle-result { font-weight: 600; min-width: 32px; text-align: right; }\n  .qa-root .battle-result.win { color: #10b981; }\n  .qa-root .battle-result.lose { color: #ef4444; }\n\n  /* 榜单样式 */\n  .qa-root .rank-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .rank-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .rank-member-card {\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .rank-member-card:hover {\n    box-shadow: var(--qa-shadow-2);\n    background: var(--qa-bg-3);\n  }\n  .qa-root .rank-member-header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    user-select: none;\n    cursor: grab;\n  }\n  .qa-root .rank-member-header::-webkit-scrollbar {\n    display: none;\n  }\n  .qa-root .rank-member-header {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .qa-root .rank-member-header:active {\n    cursor: grabbing;\n  }\n  .qa-root .rank-badge-top-left {\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    z-index: 10;\n  }\n  .qa-root .rank-badge-left {\n    flex-shrink: 0;\n    min-width: 36px;\n    font-weight: bold;\n    font-size: 16px;\n    color: var(--qa-primary);\n    text-align: center;\n  }\n  .qa-root .rank-member-content {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-root .rank-badge-top-left + .rank-member-content {\n    margin-left: 100px;\n  }\n  .qa-root .rank-member-info {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    min-width: 120px;\n    flex-shrink: 0;\n  }\n  .qa-root .rank-member-stats {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-root .rank-member-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n  }\n  .qa-root .rank-member-avatar {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .rank-member-avatar-small {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .rank-club-logo {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .stat-inline {\n    font-size: 11px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    white-space: nowrap;\n    font-weight: 500;\n    flex-shrink: 0;\n  }\n  .qa-root .stat-inline.rank {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n  .qa-root .stat-inline.win {\n    background: rgba(16, 185, 129, 0.15);\n    color: #059669;\n  }\n  .qa-root .stat-inline.loss {\n    background: rgba(239, 68, 68, 0.15);\n    color: #dc2626;\n  }\n  .qa-root .stat-inline.siege {\n    background: rgba(245, 158, 11, 0.15);\n    color: #d97706;\n  }\n  .qa-root .stat-inline.power {\n    background: rgba(250, 76, 44, 0.15);\n    color: #F96F19;\n  }\n  .qa-root .stat-inline.score {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n  .qa-root .stat-inline.red {\n    background: rgba(249, 203, 35, 0.15);\n    color: #F99D19;\n  }\n  .qa-root .stat-inline.name {\n    background: rgba(194, 166, 248, 0.15);\n    color: #AE86F9;\n  }\n  .qa-root .stat-inline.id {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n\n  /* 分页样式 */\n  .qa-root .pagination-container {\n    margin-top: 16px;\n    padding-top: 12px;\n    border-top: 1px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  .qa-root .pagination-info {\n    font-size: 12px;\n    color: var(--qa-text-2);\n  }\n  .qa-root .pagination-controls {\n    display: flex;\n    gap: 8px;\n  }\n\n  /* 单选按钮组样式 */\n  .qa-root .radio-group {\n    display: flex;\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  .qa-root .radio-option {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    user-select: none;\n  }\n  .qa-root .radio-option input[type=\"radio\"] {\n    margin: 0 4px 0 0;\n    cursor: pointer;\n  }\n  .qa-root .radio-option span {\n    font-size: 12px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    background: var(--qa-bg-3);\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .radio-option input[type=\"radio\"]:checked + span {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .radio-option:hover span {\n    background: var(--qa-border);\n  }\n\n  /* 俱乐部历史战绩样式 */\n  .qa-root .history-records-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .history-records-list { display: flex; flex-direction: column; gap: 6px; }\n  .qa-root .history-war-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 10px 12px;\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .war-type {\n    font-weight: 600;\n    font-size: 13px;\n    color: var(--qa-accent);\n    min-width: 80px;\n  }\n  .qa-root .war-date { font-size: 12px; color: var(--qa-text-2); flex: 1; }\n  .qa-root .war-rank {\n    font-size: 12px;\n    font-weight: 600;\n    padding: 2px 10px;\n    border-radius: 10px;\n    background: rgba(245, 158, 11, 0.12);\n    color: #f59e0b;\n  }\n\n  /* 日历选择器样式 */\n  .qa-root .date-picker-wrapper {\n    position: relative;\n    display: inline-block;\n  }\n  .qa-root .date-picker-btn {\n    padding: 6px 10px;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    cursor: pointer;\n    font-size: 14px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .date-picker-btn:hover {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n  }\n  .qa-root .calendar-popup, .calendar-popup.qa-root {\n    position: fixed;\n    background: var(--qa-bg-1, #1a1a2e);\n    border: 1px solid var(--qa-border, #2d2d44);\n    border-radius: var(--qa-radius-md, 12px);\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n    z-index: 99999;\n    min-width: 280px;\n    display: none;\n    padding: 12px;\n  }\n  .qa-root .calendar-popup.show, .calendar-popup.qa-root.show { display: block; }\n  .qa-root .calendar-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 12px;\n  }\n  .qa-root .calendar-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n  }\n  .qa-root .calendar-nav {\n    width: 28px;\n    height: 28px;\n    border: none;\n    background: var(--qa-bg-3);\n    border-radius: 6px;\n    cursor: pointer;\n    font-size: 14px;\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-nav:hover {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n  }\n  .qa-root .calendar-weekdays {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 2px;\n    margin-bottom: 8px;\n  }\n  .qa-root .calendar-weekday {\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-3);\n    padding: 4px;\n  }\n  .qa-root .calendar-weekday.weekend { color: var(--qa-accent); }\n  .qa-root .calendar-days {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 2px;\n  }\n  .qa-root .calendar-day {\n    text-align: center;\n    padding: 8px 4px;\n    font-size: 12px;\n    border-radius: 6px;\n    cursor: pointer;\n    color: var(--qa-text-1);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-day:hover:not(.disabled):not(.empty) {\n    background: var(--qa-bg-3);\n  }\n  .qa-root .calendar-day.weekend { color: var(--qa-accent); font-weight: 500; }\n  .qa-root .calendar-day.today {\n    background: var(--qa-bg-3);\n    font-weight: 600;\n    box-shadow: inset 0 0 0 1px var(--qa-accent);\n  }\n  .qa-root .calendar-day.selected {\n    background: var(--qa-accent);\n    color: #fff;\n    font-weight: 600;\n  }\n  .qa-root .calendar-day.selected.weekend { color: #fff; }\n  .qa-root .calendar-day.disabled {\n    color: var(--qa-text-3);\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n  .qa-root .calendar-day.other-month { opacity: 0.4; }\n  .qa-root .calendar-day.empty { cursor: default; }\n  .qa-root .calendar-shortcuts {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid var(--qa-border);\n  }\n  .qa-root .calendar-shortcut {\n    padding: 4px 10px;\n    font-size: 11px;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    border-radius: 4px;\n    cursor: pointer;\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-shortcut:hover {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n    color: var(--qa-accent);\n  }\n  .qa-root .calendar-hint {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    margin-top: 8px;\n    text-align: center;\n  }\n\n  /* 自动完成/联想搜索组件样式 */\n  .qa-root .qa-autocomplete {\n    position: relative;\n  }\n  .qa-root .qa-autocomplete-input {\n    width: 100%;\n  }\n  .qa-root .qa-autocomplete-dropdown {\n    display: none;\n    position: fixed;\n    max-height: 240px;\n    overflow-y: auto;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    box-shadow: var(--qa-shadow-1);\n    z-index: 100000;\n  }\n  .qa-root .qa-autocomplete-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background var(--qa-dur-fast) var(--qa-ease);\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .qa-autocomplete-item:last-child {\n    border-bottom: none;\n  }\n  .qa-root .qa-autocomplete-item:hover,\n  .qa-root .qa-autocomplete-item.active {\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-autocomplete-item.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .qa-autocomplete-name {\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .qa-autocomplete-name mark {\n    background: rgba(47, 128, 237, 0.25);\n    color: var(--qa-accent);\n    padding: 0 2px;\n    border-radius: 2px;\n  }\n  .qa-root .qa-autocomplete-level {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n  .qa-root .qa-autocomplete-empty {\n    padding: 16px;\n    text-align: center;\n    color: var(--qa-text-3);\n    font-size: 12px;\n  }\n\n  /* ===================== 头像/武将头像（参考 xyzw_web_helper 展示风格） ===================== */\n  .qa-root .qa-avatar {\n    position: relative;\n    width: 32px;\n    height: 32px;\n    border-radius: 999px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    flex: none;\n  }\n  .qa-root .qa-avatar.qa-avatar-24 { width: 24px; height: 24px; }\n  .qa-root .qa-avatar.qa-avatar-32 { width: 32px; height: 32px; }\n  .qa-root .qa-avatar-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    opacity: 0;\n    transition: opacity var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-avatar-fallback {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2);\n    background: var(--qa-bg-3);\n  }\n  .qa-root .qa-pvp-hero-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 10px;\n    border-radius: 10px;\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n    min-width: 170px;\n  }\n  .qa-root .qa-pvp-hero-meta { min-width: 0; }\n  .qa-root .qa-pvp-hero-name {\n    font-size: 12px;\n    font-weight: 700;\n    color: var(--qa-text-1);\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 110px;\n  }\n  .qa-root .qa-pvp-hero-sub {\n    font-size: 10px;\n    color: var(--qa-text-2);\n    line-height: 1.2;\n    margin-top: 3px;\n    display: flex;\n    gap: 6px;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .qa-root .qa-pvp-hero-red { color: #ff3b30; }\n  .qa-root .qa-pvp-hero-hole { color: #34c759; }\n  .qa-root .qa-pvp-hero-holy.on { color: #34c759; }\n  .qa-root .qa-pvp-hero-holy.off { color: #8e8e93; }\n\n  .qa-hero-overlay { padding: 14px; }\n  .qa-hero-modal {\n    width: min(720px, 92vw);\n    max-height: min(76vh, 720px);\n    overflow: hidden;\n    background: var(--qa-bg-1);\n    border-radius: 14px;\n    border: 1px solid var(--qa-border);\n    box-shadow: var(--qa-shadow-1);\n    display: flex;\n    flex-direction: column;\n  }\n  .qa-hero-modal-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 14px;\n    border-bottom: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n  }\n  .qa-hero-modal-title { font-size: 14px; font-weight: 700; color: var(--qa-text-1); }\n  .qa-hero-modal-close {\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-2);\n    border-radius: 10px;\n    padding: 8px 10px;\n    cursor: pointer;\n  }\n  .qa-hero-summary {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 12px 14px;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-hero-summary-meta { min-width: 0; }\n  .qa-hero-summary-name { font-size: 13px; font-weight: 800; color: var(--qa-text-1); }\n  .qa-hero-summary-sub {\n    margin-top: 6px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-size: 12px;\n    color: #000;\n  }\n  .qa-hero-equip-list {\n    padding: 12px 14px;\n    overflow: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 10px;\n  }\n  .qa-hero-equip {\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n    border-radius: 12px;\n    padding: 10px;\n  }\n  .qa-hero-equip-head {\n    display: flex;\n    align-items: baseline;\n    justify-content: space-between;\n    gap: 10px;\n    margin-bottom: 8px;\n  }\n  .qa-hero-equip-name { font-size: 12px; font-weight: 800; color: #000; }\n  .qa-hero-equip-meta { font-size: 11px; color: #000; }\n  .qa-hero-quench-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }\n  .qa-hero-quench {\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    border-radius: 10px;\n    padding: 8px;\n    min-height: 38px;\n  }\n  .qa-hero-quench-slot { font-size: 10px; color: #000; }\n  .qa-hero-quench-attr { display: block; margin-top: 3px; font-size: 12px; font-weight: 700; }\n  .qa-hero-empty { font-size: 12px; color: var(--qa-text-3); padding: 8px 0; }\n\n  /* 装备淬炼菱形图标展示（用于模态框，不在 .qa-root 内） */\n  .qa-quench-diamond-row {\n    display: flex !important;\n    flex-wrap: wrap;\n    gap: 12px;\n    padding: 10px 14px;\n    background: var(--qa-bg-2, #f7f8fa);\n    border-bottom: 1px solid var(--qa-border, #e5e7eb);\n  }\n  .qa-quench-equip-item {\n    display: flex !important;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    color: #000;\n  }\n  .qa-quench-equip-item .equip-label {\n    color: #000;\n    font-weight: 500;\n  }\n  .qa-quench-diamonds {\n    display: inline-flex !important;\n    gap: 4px;\n    align-items: center;\n  }\n  .qa-quench-diamond {\n    display: inline-block !important;\n    width: 12px !important;\n    height: 12px !important;\n    min-width: 12px !important;\n    min-height: 12px !important;\n    transform: rotate(45deg);\n    border: 1px solid #a7a7a7 !important;\n    background-color: #fff !important;\n    box-sizing: border-box !important;\n    flex-shrink: 0;\n  }\n  .qa-quench-diamond.red {\n    background-color: #ff3b30 !important;\n    border-color: #ff3b30 !important;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-quench-diamond,\n  [data-theme=\"dark\"] .qa-quench-diamond {\n    background-color: #4a4a4a !important;\n    border-color: #6a6a6a !important;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-quench-diamond.red,\n  [data-theme=\"dark\"] .qa-quench-diamond.red {\n    background-color: #ff3b30 !important;\n    border-color: #ff3b30 !important;\n  }\n";
  const _0xe81745 = "daily";
  const _0x30c15c = {
    id: "daily",
    label: "日常任务",
    icon: "📋"
  };
  const _0x4afd5f = {
    id: "club",
    label: "俱乐部",
    icon: "🏠"
  };
  const _0xddffaa = {
    id: "activity",
    label: "活动助手",
    icon: "🎯"
  };
  const _0x5a487d = {
    id: "toolbox",
    label: "工具箱",
    icon: "🔧"
  };
  const _0x2ca89a = {
    id: "rank",
    label: "榜单",
    icon: "🏆"
  };
  const _0x571419 = {
    id: "spar",
    label: "切磋",
    icon: "⚡"
  };
  const _0x35b505 = {
    id: "changelog",
    label: "更新日志",
    icon: "📝"
  };
  const _0x58d387 = [_0x30c15c, _0x4afd5f, _0xddffaa, _0x5a487d, _0x2ca89a, _0x571419, _0x35b505];
  const _0x564170 = () => {
    {
      try {
        const _0x2d847f = localStorage.getItem(_0x4a1e13);
        if (_0x2d847f) {
          const _0x18b0a0 = JSON.parse(_0x2d847f);
          if (Array.isArray(_0x18b0a0) && _0x18b0a0.length === _0x58d387.length) {
            {
              const _0x368f68 = _0x58d387.map(_0x1181ec => _0x1181ec.id);
              if (_0x18b0a0.every(_0x4a9617 => _0x368f68.includes(_0x4a9617))) {
                {
                  return _0x18b0a0;
                }
              }
            }
          }
        }
      } catch (_0x188c2c) {}
      return _0x58d387.map(_0x2d8ec0 => _0x2d8ec0.id);
    }
  };
  const _0x5d9986 = _0x564170();
  const _0x96980e = "<svg class=\"card-collapse-icon\" viewBox=\"0 0 24 24\"><path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"/></svg>";
  const _0x1baa64 = () => {
    const _0x267265 = Object.keys(_0xab9b82 || {}).map(Number).filter(_0x2150ea => Number.isFinite(_0x2150ea)).sort((_0x51a04f, _0x52ab86) => _0x51a04f - _0x52ab86);
    const _0x582809 = _0x267265.map(_0x55784f => "<option value=\"" + _0x55784f + "\">" + (_0xab9b82[String(_0x55784f)] || "属性" + _0x55784f) + "</option>").join("");
    return "<option value=\"\">选择目标属性</option>" + _0x582809;
  };
  const _0x9b2621 = () => {
    const _0x19ea10 = _0x564170();
    return _0x19ea10.map(_0x2a457a => {
      const _0x30a824 = _0x58d387.find(_0x269159 => _0x269159.id === _0x2a457a);
      if (!_0x30a824) {
        return "";
      }
      return "  <div class=\"menu-item " + (_0x30a824.id === _0xe81745 ? "active" : "") + "\" data-page=\"" + _0x30a824.id + "\" >    <span class=\"menu-icon\">" + _0x30a824.icon + "</span>" + _0x30a824.label + "  </div>";
    }).join("");
  };
  const _0x4b6ca2 = () => "\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"team\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">当前阵容</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <div class=\"team-selector\" id=\"qa-team-selector\">\n          <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">点击展开加载</span>\n        </div>\n        <button class=\"btn btn-secondary btn-small\" data-action=\"team-refresh\">刷新</button>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-team-heroes\" class=\"team-heroes-container\">\n        <div class=\"helper-text\">展开卡片自动加载阵容数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"daily-fix\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">每日任务补差</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <label class=\"task-check\" style=\"margin:0;\">\n          <input type=\"checkbox\" id=\"qa-daily-select-all\">\n          <span>全选</span>\n        </label>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n        <button class=\"btn btn-success\" data-action=\"daily-fix\">一键补差</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-daily-fix-progress\" style=\"margin-bottom:10px;\">--</div>\n      <div class=\"task-grid\">\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"share\" checked><span>分享游戏</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"friend\" checked><span>赠送好友金币</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"recruit\" checked><span>招募英雄</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"hangup\" checked><span>挂机奖励</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"buygold\" checked><span>免费点金</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"openbox\" checked><span>开启宝箱</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"blackmarket\" checked><span>黑市采购</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"arena\" checked><span>竞技场战斗</span></label>\n        <label class=\"task-check\" style=\"display:flex;align-items:center;gap:4px;\">\n          <input type=\"checkbox\" data-task=\"legionboss\" checked>\n          <span>俱乐部BOSS</span>\n          <select id=\"qa-legionboss-count\" style=\"width:50px;padding:2px 4px;font-size:12px;border-radius:4px;border:1px solid var(--border-color);\">\n            <option value=\"0\">0次</option>\n            <option value=\"1\">1次</option>\n            <option value=\"2\" selected>2次</option>\n            <option value=\"3\">3次</option>\n            <option value=\"4\">4次</option>\n          </select>\n        </label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"dailyboss\" checked><span>每日BOSS</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"bottle\" checked><span>盐罐助手</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"treasure\" checked><span>珍宝阁</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"signin\" checked><span>签到奖励</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"fish\" checked><span>免费钓鱼</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"mail\" checked><span>领取邮件</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"genie\" checked><span>灯神扫荡</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"deepsea\" checked><span>深海扫荡</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"sweepticket\" checked><span>领取扫荡券</span></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"daily-status\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">每日任务执行情况</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"daily-refresh\">刷新</button>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-daily-detail\"><div class=\"helper-text\">展开卡片自动加载任务数据</div></div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"hangup\">\n    <div class=\"card-header\"><span class=\"card-title\">挂机加钟</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">已挂机</span>\n          <span class=\"stat-value\" id=\"qa-hangup-elapsed\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时长</span>\n          <span class=\"stat-value\" id=\"qa-hangup-time\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"addtime-run\">加钟</button>\n        <button class=\"btn btn-success\" data-action=\"hangup-claim\">领取奖励</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"bottle\">\n    <div class=\"card-header\"><span class=\"card-title\">盐罐机器人</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">状态</span>\n          <span class=\"stat-value\" id=\"qa-bottle-status\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时间</span>\n          <span class=\"stat-value\" id=\"qa-bottle-time\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"bottle-restart\" id=\"qa-bottle-restart-btn\">重启服务</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸将塔</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"energy-badge\" id=\"qa-tower-energy-badge\">体力: <span id=\"qa-tower-energy\">--</span></span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"tower-floor-display\" style=\"background:var(--card-bg);border-radius:8px;padding:16px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;\">\n        <span style=\"color:var(--text-secondary);font-size:13px;\">当前层数</span>\n        <span style=\"font-size:18px;font-weight:600;font-family:monospace;color:var(--text-primary);\"><span id=\"qa-tower-floor\">--</span> - <span id=\"qa-tower-layer\">--</span></span>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"tower-loop\" id=\"qa-tower-loop-btn\">开始爬塔</button>\n        <button class=\"btn btn-danger\" data-action=\"tower-stop\" id=\"qa-tower-stop-btn\">停止爬塔</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-tower-status\" style=\"margin-top:8px;\">展开卡片自动加载数据</div>\n    </div>\n  </div>\n";
  const _0x12b81b = () => "\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"club-info\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部信息</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-club-status\">未加入</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-secondary\" data-action=\"club-info\">刷新</button>\n        <button class=\"btn btn-success\" data-action=\"club-signin\">俱乐部签到</button>\n        <button class=\"btn btn-primary\" data-action=\"club-export\">导出图片</button>\n      </div>\n      <div id=\"qa-club-content\">\n        <div class=\"helper-text\">展开卡片自动加载俱乐部信息</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"car\">\n    <div class=\"card-header\"><span class=\"card-title\">疯狂赛车</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-secondary\" data-action=\"car-info\">刷新数据</button>\n        <button class=\"btn btn-primary\" data-action=\"car-smart-send\" data-long-press-info=\"智能发车策略：&#10;• 仅周一至周三 6:00-20:00 可用&#10;• 每日最多发车 4 次&#10;&#10;发车标准：&#10;• 刷新券≥6张：只发红色以上/含4张刷新券奖励/含大奖的车&#10;• 刷新券<6张：发橙色以上/含2张刷新券奖励/含大奖的车&#10;&#10;刷新逻辑：&#10;• 有免费刷新时会先刷新&#10;• 刷新券充足时持续刷新直到达标\" title=\"智能发车策略：&#10;• 仅周一至周三 6:00-20:00 可用&#10;• 每日最多发车 4 次&#10;&#10;发车标准：&#10;• 刷新券≥6张：只发红色以上/含4张刷新券奖励/含大奖的车&#10;• 刷新券<6张：发橙色以上/含2张刷新券奖励/含大奖的车&#10;&#10;刷新逻辑：&#10;• 有免费刷新时会先刷新&#10;• 刷新券充足时持续刷新直到达标\">智能发车</button>\n        <button class=\"btn btn-success\" data-action=\"car-claim-all\">一键收车</button>\n      </div>\n      <div id=\"qa-car-content\">\n        <div class=\"helper-text\">展开卡片自动加载车辆信息</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"salt-match\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场匹配详情</span>\n      " + _0x96980e + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-salt-match-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n        <span class=\"helper-text\" style=\"margin:0;\">(周六/周日)</span>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"salt-match-query\">查询</button>\n        <button class=\"btn btn-secondary\" data-action=\"salt-match-sort-red\">红淬排序</button>\n        <button class=\"btn btn-secondary\" data-action=\"salt-match-sort-score\">积分排序</button>\n        <button class=\"btn btn-success\" data-action=\"salt-match-export\">导出图片</button>\n      </div>\n      <div id=\"qa-salt-match-content\">\n        <div class=\"helper-text\">选择日期后点击\"查询\"加载盐场匹配数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"peachtree\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">蟠桃园统计</span>\n      " + _0x96980e + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-peachtree-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n      </div>\n\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"peachtree-battle\">查询战绩</button>\n        <button class=\"btn btn-primary\" data-action=\"peachtree-opponent\">查询对手信息</button>\n        <button class=\"btn btn-success\" data-action=\"peachtree-combined-export\">导出图片</button>\n      </div>\n      <div id=\"qa-peachtree-content\">\n        <div class=\"helper-text\">选择日期后点击按钮查询</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"battle-records\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场战绩</span>\n      " + _0x96980e + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-battle-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n        <span class=\"helper-text\" style=\"margin:0;\">(周六/周日)</span>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"battle-records-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"battle-records-export\">导出图片</button>\n      </div>\n      <div id=\"qa-battle-records-content\">\n        <div class=\"helper-text\">选择日期后点击\"查询\"加载盐场战绩</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"history-records\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部历史战绩</span>\n      " + _0x96980e + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"history-records-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"history-records-export\">导出图片</button>\n      </div>\n      <div id=\"qa-history-records-content\">\n        <div class=\"helper-text\">点击\"查询\"加载俱乐部历史战绩</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"salt-map\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场地图查询</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"time-status-badge unavailable\" id=\"qa-salt-map-time-status\">仅周六可用</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"salt-map-query\" disabled>查询地图</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-bottom:8px;font-size:11px;color:#9ca3af;\">查询时间：周六 19:55 - 21:30</div>\n      <div id=\"qa-salt-map-content\">\n        <div class=\"helper-text\">点击\"查询地图\"获取俱乐部位置</div>\n      </div>\n    </div>\n  </div>\n";
  const _0x26cf7a = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">每周答题</span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"study-start\">开始答题</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-study-status\">点击按钮开始答题</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"consumption\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">消耗活动监控</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-consumption-badge\">未开放</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">普通道具</span>\n          <span class=\"stat-value\" id=\"qa-consumption-normal-item\">0</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">黄金道具</span>\n          <span class=\"stat-value\" id=\"qa-consumption-gold-item\">0</span>\n        </div>\n      </div>\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">使用数量</span>\n        <input class=\"input\" id=\"qa-consumption-number\" type=\"number\" value=\"4\" min=\"1\" max=\"100\" style=\"width:80px;\">\n        <button class=\"btn btn-success btn-small\" data-action=\"consumption-open\">打开普通道具</button>\n      </div>\n      <div id=\"qa-consumption-content\">\n        <div class=\"helper-text\">展开卡片自动加载活动数据</div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-primary\" data-action=\"consumption-info\">刷新进度</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"monthly\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">月度任务补差</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-monthly-status\">--</span>\n        <span class=\"helper-text\" id=\"qa-monthly-days\" style=\"margin:0;font-size:11px;\">--</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">钓鱼进度</span>\n          <div id=\"qa-monthly-fish\" style=\"display:flex;flex-direction:column;align-items:flex-end;\">\n            <span class=\"stat-value\">-- / 320</span>\n            <span class=\"stat-sub\" style=\"font-size:10px;color:var(--text-secondary);\">--</span>\n          </div>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">竞技场进度</span>\n          <div id=\"qa-monthly-arena\" style=\"display:flex;flex-direction:column;align-items:flex-end;\">\n            <span class=\"stat-value\">-- / 240</span>\n            <span class=\"stat-sub\" style=\"font-size:10px;color:var(--text-secondary);\">--</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-secondary\" id=\"qa-monthly-refresh-btn\" data-action=\"monthly-refresh\">刷新进度</button>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-primary\" id=\"qa-monthly-fish-btn\" data-action=\"monthly-fish-topup\">钓鱼补齐</button>\n        <button class=\"btn btn-secondary btn-small\" id=\"qa-monthly-fish-complete-btn\" data-action=\"monthly-fish-complete\" title=\"一键完成到满额\">满额</button>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" id=\"qa-monthly-arena-btn\" data-action=\"monthly-arena-topup\">竞技场补齐</button>\n        <button class=\"btn btn-secondary btn-small\" id=\"qa-monthly-arena-complete-btn\" data-action=\"monthly-arena-complete\" title=\"一键完成到满额\">满额</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">补齐规则：让\"当前天数比例\"和\"完成比例\"一致</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"boss-tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸王宝库</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-bosstower-status\">--</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-bosstower-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>活动时间：周三 ~ 周日</p>\n      </div>\n      <div id=\"qa-bosstower-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">当前层数</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-floor\">第 1 层</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">普通钻头</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-drill\">0 / 10</span>\n          </div>\n        </div>\n        <div class=\"info-row\" style=\"display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border-color);margin-bottom:10px;\">\n          <span style=\"color:var(--text-secondary);\">门状态</span>\n          <span id=\"qa-bosstower-door\">--</span>\n        </div>\n        <div id=\"qa-bosstower-rewards\" style=\"display:none;margin-bottom:10px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-secondary\" data-action=\"bosstower-refresh\">刷新</button>\n          <button class=\"btn btn-primary\" id=\"qa-bosstower-action-btn\" data-action=\"bosstower-execute\">攻打Boss</button>\n        </div>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">自动攻打Boss/门并领取最高价值奖励</div>\n\n      <div style=\"margin-top:16px;padding-top:16px;border-top:1px solid var(--border-color);\">\n        <div style=\"font-weight:500;margin-bottom:10px;color:var(--text-primary);\">宝库助战</div>\n        <div class=\"task-grid\" style=\"margin-bottom:10px;\">\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"below_7\" checked><span>7层以下</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"7\" checked><span>7层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"8\" checked><span>8层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"10\" checked><span>10层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"11\" checked><span>11层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"13\" checked><span>13层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"14\" checked><span>14层</span></label>\n        </div>\n        <div class=\"form-row\" style=\"margin-bottom:10px;\">\n          <label class=\"task-check\" style=\"margin:0;\">\n            <input type=\"checkbox\" id=\"treasure-switch\">\n            <span>助战前切换阵容</span>\n          </label>\n          <select id=\"treasure-team\" disabled class=\"input\" style=\"width:80px;\">\n            <option value=\"1\">阵容1</option>\n            <option value=\"2\">阵容2</option>\n            <option value=\"3\">阵容3</option>\n            <option value=\"4\">阵容4</option>\n            <option value=\"5\">阵容5</option>\n            <option value=\"6\">阵容6</option>\n          </select>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n          <button class=\"btn btn-primary\" id=\"treasure-start-btn\">开始助战</button>\n        </div>\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">已尝试</span>\n            <span class=\"stat-value\" id=\"treasure-attempted\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">成功</span>\n            <span class=\"stat-value\" id=\"treasure-success\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">失败</span>\n            <span class=\"stat-value\" id=\"treasure-fail\">0</span>\n          </div>\n        </div>\n        <div id=\"treasure-log\" style=\"padding:8px;font-size:11px;background:var(--card-bg);border-radius:4px;max-height:120px;overflow-y:auto;\">等待开始...</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"weird-tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">怪异塔</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-weird-tower-badge\">--</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-weird-tower-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>怪异塔暂未开放</p>\n        <p style=\"font-size:12px;margin-top:4px;\">活动时间：黑市周期间</p>\n      </div>\n      <div id=\"qa-weird-tower-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">当前层数</span>\n            <span class=\"stat-value\" id=\"qa-weird-tower-floor\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">剩余体力</span>\n            <span class=\"stat-value\" id=\"qa-weird-tower-energy\">-- / --</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">钥匙数量</span>\n            <span class=\"stat-value\" id=\"qa-weird-tower-keys\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-secondary\" data-action=\"weird-tower-refresh\">刷新</button>\n          <button class=\"btn btn-primary\" id=\"qa-weird-tower-climb-btn\" data-action=\"weird-tower-climb\">批量爬塔</button>\n          <button class=\"btn btn-danger\" data-action=\"weird-tower-stop\">停止爬塔</button>\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:8px;\">\n          <button class=\"btn btn-warning\" data-action=\"claim-free-keys\">领取钥匙</button>\n          <button class=\"btn btn-success\" id=\"qa-merge-box-btn\" data-action=\"merge-box-start\">智能开箱合成</button>\n          <button class=\"btn btn-danger\" data-action=\"merge-box-stop\">停止</button>\n        </div>\n        <div class=\"helper-text\" id=\"qa-weird-tower-status\" style=\"margin-top:8px;\">展开卡片自动加载数据</div>\n        <div class=\"helper-text\" id=\"qa-merge-box-status\" style=\"margin-top:4px;color:#6b7280;\">--</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"skin-tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">换皮闯关</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-skin-towers-status\">--</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日挑战</span>\n          <span class=\"stat-value\" id=\"qa-skin-towers-count\">0 / 10</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日可挑战</span>\n          <span class=\"stat-value\" id=\"qa-skin-towers-boss-hint\">--</span>\n        </div>\n      </div>\n      <div id=\"qa-skin-towers-grid\" class=\"skin-towers-grid\">\n        <!-- 动态生成6个BOSS -->\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-secondary\" data-action=\"skin-towers-refresh\">刷新进度</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">活动时间8-20点，周四全部BOSS开放</div>\n\n      <!-- 闯关抽奖区域 -->\n      <div style=\"margin-top:12px;padding-top:12px;border-top:1px solid var(--border-color);\">\n        <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n          <span style=\"font-size:13px;font-weight:600;color:var(--text-primary);\">闯关抽奖</span>\n          <span id=\"qa-skin-lottery-actid\" style=\"font-size:11px;color:var(--text-secondary);\">未获取</span>\n        </div>\n        <div class=\"stats-row\" style=\"margin-bottom:8px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">抽奖道具</span>\n            <span class=\"stat-value\" id=\"qa-skin-lottery-count\">0 个</span>\n          </div>\n          <div class=\"stat-item\">\n            <span id=\"qa-skin-lottery-status\" style=\"font-size:12px;\"></span>\n          </div>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" id=\"qa-skin-lottery-start\" data-action=\"skin-lottery-start\">开始抽奖</button>\n          <button class=\"btn btn-danger\" id=\"qa-skin-lottery-stop\" data-action=\"skin-lottery-stop\" style=\"display:none;\">停止抽奖</button>\n          <button class=\"btn btn-secondary\" id=\"qa-skin-lottery-refresh\" data-action=\"skin-lottery-refresh\">刷新道具</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"warguess\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">月度竞猜</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-warguess-status\">--</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-warguess-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>开放时间：每月最后一个星期日</p>\n        <p id=\"qa-warguess-next-date\" style=\"font-size:11px;margin-top:4px;\">--</p>\n      </div>\n      <div id=\"qa-warguess-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">排名第一</span>\n            <span class=\"stat-value\" id=\"qa-warguess-top-legion\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">军团战力</span>\n            <span class=\"stat-value\" id=\"qa-warguess-top-power\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n          <button class=\"btn btn-secondary\" id=\"qa-warguess-refresh-btn\" data-action=\"warguess-refresh\">刷新排名</button>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" id=\"qa-warguess-start-btn\" data-action=\"warguess-start\">竞猜 (20金币)</button>\n          <button class=\"btn btn-success\" id=\"qa-warguess-coin-btn\" data-action=\"warguess-coin\">领取竞猜币</button>\n        </div>\n        <div class=\"helper-text\" style=\"margin-top:8px;\">自动竞猜排名第一的军团，投入20金币</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"dream\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸王梦境</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-dream-status\">--</span>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-dream-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>活动时间：周三、周四、周日、周一</p>\n      </div>\n      <div id=\"qa-dream-content\">\n        <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n          <button class=\"btn btn-secondary\" data-action=\"dream-refresh-team\">获取默认队伍</button>\n          <button class=\"btn btn-primary\" data-action=\"dream-select-team\">选择梦境阵容</button>\n        </div>\n        <div class=\"form-row\" style=\"margin-bottom:10px;\">\n          <label class=\"task-check\" style=\"margin:0;\">\n            <input type=\"checkbox\" id=\"dream-stop-defeat\" checked>\n            <span>战斗失败自动停止</span>\n          </label>\n        </div>\n        <div id=\"dream-team-container\" style=\"margin-bottom:10px;\">\n          <div class=\"helper-text\">点击\"获取默认队伍\"加载阵容</div>\n        </div>\n        <div style=\"border-top:1px solid var(--border-color);padding-top:10px;margin-top:10px;\">\n          <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n            <button class=\"btn btn-secondary\" data-action=\"dream-refresh-merchant\">刷新商店</button>\n            <button class=\"btn btn-primary\" data-action=\"dream-select-gold\">全选金币</button>\n            <button class=\"btn btn-success\" data-action=\"dream-buy-selected\">批量购买(<span id=\"dream-selected-count\">0</span>)</button>\n            <button class=\"btn btn-warning\" data-action=\"dream-buy-all-gold\">一键金币全买</button>\n          </div>\n          <div id=\"dream-merchant-container\" style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;\">\n            <div class=\"helper-text\">点击\"刷新商店\"加载商品</div>\n          </div>\n        </div>\n        <div style=\"font-weight:bold;margin-bottom:6px;\">日志</div>\n        <div id=\"dream-log-container\" style=\"height:150px;overflow-y:auto;background:var(--card-bg);border-radius:4px;padding:5px;font-size:10px;\"></div>\n      </div>\n    </div>\n  </div>\n";
  const _0x3dcfa8 = () => "\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"box\">\n    <div class=\"card-header\"><span class=\"card-title\">宝箱助手</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">宝箱总积分</span>\n          <span class=\"stat-value\" id=\"qa-box-total-points\">--</span>\n        </div>\n      </div>\n      <input type=\"hidden\" id=\"qa-box-itemid\" value=\"2001\">\n      <div class=\"qa-option-grid\" id=\"qa-box-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-box-option selected\" role=\"button\" tabindex=\"0\" data-itemid=\"2001\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_mzbx\" alt=\"木质宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">木质宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2001\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2002\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_qtbx\" alt=\"青铜宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">青铜宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2002\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2003\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_hjbx\" alt=\"黄金宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">黄金宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2003\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2004\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_bjbx\" alt=\"铂金宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">铂金宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2004\">--</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">数量</span>\n        <input class=\"input\" id=\"qa-box-count\" type=\"number\" value=\"10\" min=\"10\" step=\"10\" style=\"width:80px;\">\n      </div>\n      <div class=\"qa-input-error\" id=\"qa-box-error\" style=\"display:none;\"></div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"box-open\" id=\"qa-box-open-btn\">开启宝箱</button>\n        <button class=\"btn btn-secondary\" data-action=\"box-claim\">领取积分</button>\n      </div>\n      <div class=\"helper-text\">数量需为10的倍数，且不超过库存</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"fish\">\n    <div class=\"card-header\"><span class=\"card-title\">钓鱼助手</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <input type=\"hidden\" id=\"qa-fish-type\" value=\"1\">\n      <div class=\"qa-option-grid\" id=\"qa-fish-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-fish-option selected\" role=\"button\" tabindex=\"0\" data-type=\"1\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_fish_ptyg\" alt=\"普通鱼竿\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">普通鱼竿</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-fish-count-for=\"1\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-fish-option\" role=\"button\" tabindex=\"0\" data-type=\"2\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_fish_hjyg\" alt=\"黄金鱼竿\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">黄金鱼竿</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-fish-count-for=\"2\">--</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">次数</span>\n        <input class=\"input\" id=\"qa-fish-count\" type=\"number\" value=\"10\" min=\"10\" step=\"10\" style=\"width:80px;\">\n        <label class=\"task-check\" style=\"margin:0;\">\n          <input type=\"checkbox\" id=\"qa-fish-free\" checked>\n          <span>免费模式</span>\n        </label>\n      </div>\n      <div class=\"qa-input-error\" id=\"qa-fish-error\" style=\"display:none;\"></div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"fish-run\" id=\"qa-fish-run-btn\">开始钓鱼</button>\n      </div>\n      <div class=\"helper-text\">数量需为10的倍数，且不超过库存</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"arena\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">竞技场助手</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"arena-refresh\">刷新</button>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">咸神门票</span>\n          <span class=\"stat-value\" id=\"qa-arena-ticket\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日战斗</span>\n          <span class=\"stat-value\" id=\"qa-arena-fought\">--</span>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">战斗次数</span>\n        <input class=\"input\" id=\"qa-arena-times\" type=\"number\" value=\"3\" min=\"1\" max=\"10000\" style=\"width:100px;\">\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-primary\" data-action=\"arena-auto\" id=\"qa-arena-start-btn\">开始战斗</button>\n        <button class=\"btn btn-danger\" data-action=\"arena-stop\" id=\"qa-arena-stop-btn\" style=\"display:none;\">停止</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-arena-status\">点击刷新加载竞技场数据</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"hero-upgrade\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">武将升级</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"hero-upgrade-refresh\">刷新</button>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"flex-wrap:nowrap;\">\n        <span class=\"form-label\" style=\"flex-shrink:0;\">武将选择</span>\n        <div class=\"qa-autocomplete\" id=\"qa-hero-upgrade-autocomplete\" style=\"flex:1;min-width:0;\">\n          <input type=\"text\" class=\"input qa-autocomplete-input\" id=\"qa-hero-upgrade-input\" placeholder=\"输入武将名称搜索...\" autocomplete=\"off\">\n          <input type=\"hidden\" id=\"qa-hero-upgrade-select\" value=\"\">\n          <div class=\"qa-autocomplete-dropdown\" id=\"qa-hero-upgrade-dropdown\"></div>\n        </div>\n      </div>\n      <div id=\"qa-hero-upgrade-info\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\">\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">等级</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-level\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">攻击</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-attack\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">速度</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-speed\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:10px;gap:4px;\">\n          <button class=\"btn btn-small active\" id=\"qa-hero-upgrade-mode-level\" data-action=\"hero-upgrade-mode\" data-mode=\"level\">目标等级</button>\n          <button class=\"btn btn-small\" id=\"qa-hero-upgrade-mode-speed\" data-action=\"hero-upgrade-mode\" data-mode=\"speed\">目标速度</button>\n        </div>\n        <div class=\"form-row\" style=\"margin-top:10px;\" id=\"qa-hero-upgrade-level-row\">\n          <span class=\"form-label\">目标等级</span>\n          <input type=\"number\" class=\"input\" id=\"qa-hero-upgrade-target\" placeholder=\"输入目标等级\" min=\"1\" max=\"6000\" style=\"width:120px;\">\n        </div>\n        <div class=\"form-row\" style=\"margin-top:10px;display:none;\" id=\"qa-hero-upgrade-speed-row\">\n          <span class=\"form-label\">目标速度</span>\n          <input type=\"number\" class=\"input\" id=\"qa-hero-upgrade-target-speed\" placeholder=\"输入目标速度\" min=\"1\" style=\"width:120px;\">\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:10px;\">\n          <button class=\"btn btn-primary\" data-action=\"hero-upgrade-auto\" id=\"qa-hero-upgrade-auto-btn\">自动升级</button>\n        </div>\n        <div class=\"helper-text\" id=\"qa-hero-upgrade-tip\">选择武将后可进行升级/进阶操作</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"quench\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">淬炼助手</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"quench-refresh\">刷新阵容</button>\n        " + _0x96980e + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">白玉</span>\n          <span class=\"stat-value\" id=\"qa-jade-count\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">彩玉</span>\n          <span class=\"stat-value\" id=\"qa-color-jade-count\">--</span>\n        </div>\n      </div>\n      <div class=\"qa-hero-list\" id=\"qa-hero-list\">\n        <div class=\"qa-loading\">点击刷新加载阵容</div>\n      </div>\n      <div id=\"qa-equip-section\" style=\"display:none;\">\n        <div class=\"qa-equip-tabs\" id=\"qa-equip-tabs\"></div>\n      </div>\n      <div id=\"qa-quench-section\" style=\"display:none;\">\n        <div class=\"stats-row\" id=\"qa-equip-stats\"></div>\n        <div class=\"qa-slot-list\" id=\"qa-slot-list\"></div>\n        <div class=\"qa-actions\">\n          <button class=\"btn btn-primary\" id=\"qa-quench-once\" data-action=\"quench-once\">淬炼一次</button>\n          <button class=\"btn btn-success\" id=\"qa-quench-continuous\" data-action=\"quench-continuous\">连续淬炼</button>\n          <button class=\"btn btn-danger\" id=\"qa-quench-stop\" data-action=\"quench-stop\" style=\"display:none;\">停止</button>\n          <div class=\"qa-count-display\">\n            <button class=\"btn btn-secondary btn-small\" data-action=\"quench-reset\">清零</button>\n            已淬炼: <strong id=\"qa-quench-count\">0</strong>\n          </div>\n        </div>\n\n        <div style=\"height:10px;\"></div>\n        <div class=\"helper-text\" style=\"margin:0 0 8px;\">自动淬炼（达标自动停止）</div>\n        <div class=\"qa-target-list\" id=\"qa-target-list\" style=\"margin-bottom:8px;\">\n          <div class=\"qa-target-row\">\n            <span class=\"form-label\">属性</span>\n            <select class=\"select qa-target-attr\" style=\"width:160px;\">\n              " + _0x1baa64() + "\n            </select>\n            <span class=\"form-label\">数值</span>\n            <input class=\"input qa-target-value\" type=\"number\" value=\"\" min=\"1\" placeholder=\"如 80\" inputmode=\"numeric\" style=\"width:80px;\">\n            <button class=\"btn btn-secondary btn-small\" data-action=\"auto-target-remove\" disabled>删除</button>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n          <button class=\"btn btn-success btn-small\" data-action=\"auto-target-add\">新增属性</button>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-warning\" id=\"qa-auto-start\" data-action=\"auto-start\">自动淬炼</button>\n          <button class=\"btn btn-danger\" id=\"qa-auto-stop\" data-action=\"auto-stop\" style=\"display:none;\">停止自动</button>\n        </div>\n\n        <div style=\"height:10px;\"></div>\n        <div class=\"helper-text\" style=\"margin:0 0 8px;\">指定次数洗练（达到次数自动停止）</div>\n        <div class=\"form-row\" style=\"margin-bottom:8px;\">\n          <span class=\"form-label\">洗练次数</span>\n          <input class=\"input\" id=\"qa-quench-times\" type=\"number\" value=\"100\" min=\"10\" max=\"10000\" step=\"10\" style=\"width:100px;\" placeholder=\"10-10000\">\n          <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">范围: 10-10000</span>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-warning\" id=\"qa-times-start\" data-action=\"quench-times-start\">开始洗练</button>\n          <button class=\"btn btn-danger\" id=\"qa-times-stop\" data-action=\"quench-times-stop\" style=\"display:none;\">停止洗练</button>\n          <span class=\"helper-text\" id=\"qa-times-progress\" style=\"margin:0;font-size:12px;\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"star-upgrade\">\n    <div class=\"card-header\"><span class=\"card-title\">升星助手</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <label class=\"form-label\">延迟(ms)</label>\n        <input type=\"number\" id=\"qa-star-delay\" class=\"form-input\" value=\"300\" min=\"0\" step=\"100\" style=\"width:80px;\">\n        <span class=\"helper-text\" id=\"qa-star-hero-count\" style=\"margin-left:8px;\">英雄数量：62</span>\n      </div>\n      <div class=\"progress-row\" id=\"qa-star-progress-row\" style=\"display:flex;align-items:center;margin:8px 0;\">\n        <div style=\"flex:1;height:6px;background:#e5e5e5;border-radius:3px;overflow:hidden;\">\n          <div id=\"qa-star-progress-bar\" style=\"width:0%;height:100%;background:#3b82f6;transition:width 0.3s;\"></div>\n        </div>\n        <span id=\"qa-star-progress-text\" style=\"margin-left:8px;font-size:12px;color:#666;\">0/0 0%</span>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" id=\"qa-star-hero-btn\" data-action=\"star-hero-upgrade\">升星</button>\n        <button class=\"btn btn-primary\" id=\"qa-star-book-btn\" data-action=\"star-book-upgrade\">图鉴</button>\n        <button class=\"btn btn-primary\" id=\"qa-star-claim-btn\" data-action=\"star-claim-rewards\">领奖</button>\n        <button class=\"btn btn-danger\" id=\"qa-star-stop-btn\" data-action=\"star-stop\" style=\"display:none;\">停止</button>\n      </div>\n    </div>\n  </div>\n";
  const _0x32531b = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">巅峰榜</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"top-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"top-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-top-rank-content\">\n        <div class=\"helper-text\">点击\"查询\"加载巅峰榜数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">五百服Top俱乐部</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"club-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"club-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-club-rank-content\">\n        <div class=\"helper-text\">点击\"查询\"加载俱乐部榜数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">黄金积分俱乐部总览</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <div class=\"radio-group\" style=\"display:flex;gap:4px;flex-wrap:wrap;\">\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold1\" checked data-action=\"gold-rank-group-1\">\n            <span>1-100</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold2\" data-action=\"gold-rank-group-2\">\n            <span>101-200</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold3\" data-action=\"gold-rank-group-3\">\n            <span>201-300</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold4\" data-action=\"gold-rank-group-4\">\n            <span>301-400</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold5\" data-action=\"gold-rank-group-5\">\n            <span>401-500</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"gold-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"gold-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-gold-rank-content\">\n        <div class=\"helper-text\">选择排名范围后点击\"查询\"加载黄金积分榜数据</div>\n      </div>\n    </div>\n  </div>\n";
  const _0x11983a = () => "\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">版本信息</span>\n      <div style=\"display:flex;gap:6px;\">\n        <button class=\"btn btn-primary btn-small\" data-action=\"check-update\" id=\"qa-check-update-btn\" style=\"font-size:11px;padding:4px 8px;\">检查更新</button>\n        <button class=\"btn btn-success btn-small\" data-action=\"do-update\" id=\"qa-do-update-btn\" style=\"display:none;font-size:11px;padding:4px 8px;\">立即更新</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">当前版本</span>\n          <span class=\"stat-value\" id=\"qa-current-version\">v" + _0x21b8ce + "</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">最新版本</span>\n          <span class=\"stat-value\" id=\"qa-latest-version\">--</span>\n        </div>\n      </div>\n      <div class=\"helper-text\" id=\"qa-update-status\">点击检查更新获取最新版本信息</div>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-header\"><span class=\"card-title\">更新日志</span></div>\n    <div class=\"card-body\" style=\"padding:0;\">\n      <div class=\"changelog-list\" style=\"padding:16px;\">\n\n        <div class=\"changelog-version\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#007AFF;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.5.1</span>\n            <span style=\"padding:2px 6px;border-radius:4px;font-size:10px;background:#007AFF;color:#fff;\">最新</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-14</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>武将升级新增目标速度选项</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复蟠桃园对手查询错误和战绩查询错误</li>\n              <li>修复盐场历史战绩查询错误</li>\n              <li>蟠桃园样式修改(copy by 宸总)</li>\n              <li>样式修改若干</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.5.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-13</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>俱乐部->支持对手查询+双方战绩查询</li>\n              <li>导出支持根据当前主题设置样式</li>\n              <li>支持悬浮球记住最后一次位置</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>咸将塔体力值获取修复</li>\n              <li>疯狂赛车任务一键收车后支持自动改装升级</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.4.3</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-12</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">改进优化</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复爬塔体力渲染过慢的问题</li>\n              <li>修复盐场匹配积分不展示</li>\n              <li>修复进阶石资源未做判定缺陷</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.4.2</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-12</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">改进优化</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>淬炼助手获取阵容优化</li>\n              <li>巅峰榜单区服修复</li>\n              <li>咸将塔体力层数展示优化</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.4.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-11</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">更新内容</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复爬塔体力获取异常</li>\n              <li>修复爬塔宝箱领取问题</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.3.5</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-11</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>补充完善升星助手功能</li>\n              <li>优化数据源，避免重新开始战斗</li>\n              <li>优化盐场匹配和盐场战绩</li>\n              <li>优化任务补差挂机加钟</li>\n              <li>盐场地图暂不可用</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.3.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-08</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>优化一键任务补差</li>\n              <li>优化怪异塔合成开箱</li>\n              <li>优化导出的图片清晰度</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.3.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-05</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>新增怪异塔爬塔</li>\n              <li>武将升级调整为一键升级</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.2.3</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2025-01-04</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 Bug 修复</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复淬炼助手缺陷</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>盐场匹配导出支持导出俱乐部公告字段（最后一列，52字符）</li>\n              <li>手机版本支持导出图片（需要 APK 兼容 Blob 格式，超级咸鱼已支持）</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.2.2</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2025-01-03</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>咸王梦境模块：重命名并新增开放时间限制（周三/四/日/一），添加实时状态徽章</li>\n              <li>宝库助战整合：将助战功能移至咸王宝库卡片内部，优化布局结构</li>\n              <li>二级菜单拖动排序：所有卡片支持长按标题拖动调整顺序，自动保存到本地</li>\n              <li>日历选择器增强：修复空白问题，新增蟠桃园日期选择器（默认周日）</li>\n              <li>功能引导提示：加载5秒后提示主题切换，首次展开3秒后提示菜单排序</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🎨 UI 优化</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>Toast 提示字体从 13px 增大到 15px，内边距优化，提升可读性</li>\n              <li>卡片拖动视觉反馈：光标变化、透明度降低、平滑过渡动画</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 Bug 修复</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复 meta.js 文件生成为空导致自动更新失败的问题</li>\n              <li>修复 car.js 中 showToast() 在 return 后无法执行的代码结构问题</li>\n              <li>修复日期格式不匹配导致蟠桃园查询失败的问题（统一为 yyyy-MM-dd）</li>\n              <li>修复卡片拖动事件监听范围问题，改用文档级事件委托</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 工具箱</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>淬炼助手新增「指定次数洗练」功能，支持设置10-10000次，达到次数自动停止</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.1.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2024-12-30</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">📋 日常任务</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>当前阵容查看与切换</li>\n              <li>每日任务一键补差（分享、好友、招募、挂机、点金、宝箱、黑市、竞技场、俱乐部BOSS、每日BOSS、盐罐、珍宝阁、签到、钓鱼、邮件、灯神、深海、扫荡券）</li>\n              <li>每日任务执行情况查看</li>\n              <li>挂机加钟与奖励领取</li>\n              <li>盐罐机器人状态监控</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🏠 俱乐部</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>俱乐部信息查看与签到</li>\n              <li>疯狂赛车智能发车与一键收车</li>\n              <li>盐场匹配详情查询与导出</li>\n              <li>盐场战绩查询与导出</li>\n              <li>俱乐部历史战绩查询</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🎯 活动助手</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>每周答题自动答题</li>\n              <li>消耗活动监控与道具使用</li>\n              <li>月度任务补差（钓鱼/竞技场进度追踪）</li>\n              <li>咸王宝库自动攻打与奖励领取</li>\n              <li>换皮闯关BOSS挑战</li>\n              <li>月度竞猜自动投注</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 工具箱</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>宝箱助手批量开启与积分领取</li>\n              <li>钓鱼助手批量钓鱼</li>\n              <li>竞技场助手自动战斗</li>\n              <li>武将升级与进阶</li>\n              <li>淬炼助手（锁定孔位、连续淬炼、自动淬炼达标停止）</li>\n              <li>升星助手一键升星</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🏆 榜单</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>巅峰榜查询与导出</li>\n              <li>五百服Top俱乐部榜查询</li>\n              <li>黄金积分俱乐部总览（分段查询）</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">⚡ 切磋</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>目标玩家信息查询</li>\n              <li>批量切磋与胜率统计</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.0.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2024-12-01</span>\n            " + _0x96980e + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>全新 UI 界面设计，支持亮色/暗色主题切换</li>\n              <li>新增悬浮球拖动与长按切换主题</li>\n              <li>新增菜单栏滑动切换页面</li>\n              <li>优化淬炼助手功能，支持自动淬炼达标停止</li>\n              <li>新增武将升级与进阶功能</li>\n              <li>新增竞技场助手自动战斗</li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n";
  const _0xa28cb2 = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">切磋功能</span>" + _0x96980e + "</div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <span class=\"form-label\">目标ID</span>\n        <input class=\"input\" id=\"qa-pvp-target\" type=\"text\" placeholder=\"输入目标角色ID\" style=\"width:150px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"pvp-query\">查询</button>\n        <span class=\"form-label\">次数</span>\n        <input class=\"input\" id=\"qa-pvp-count\" type=\"number\" value=\"1\" min=\"1\" max=\"1000\" style=\"width:80px;\">\n        <button class=\"btn btn-primary\" data-action=\"pvp-start\">切磋</button>\n      </div>\n\n      <!-- 对手信息区域 -->\n      <div id=\"qa-pvp-target-info\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\">\n        <div class=\"pvp-target-header\" style=\"display:flex;align-items:center;gap:12px;margin-bottom:10px;\">\n          <div id=\"qa-pvp-target-avatar\" style=\"width:48px;height:48px;border-radius:50%;background:#e5e5e5;overflow:hidden;\">\n            <img id=\"qa-pvp-avatar-img\" style=\"width:100%;height:100%;object-fit:cover;display:none;\">\n          </div>\n          <div style=\"flex:1;\">\n            <div style=\"font-weight:bold;\" id=\"qa-pvp-target-name\">--</div>\n            <div style=\"font-size:12px;color:var(--text-secondary);\" id=\"qa-pvp-target-server\">--</div>\n          </div>\n        </div>\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">战力</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-power\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">红数</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-red\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">孔数</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-hole\" style=\"color:#34c759;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">玩具</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-weapon\">--</span>\n          </div>\n        </div>\n        <div style=\"margin-top:8px;font-size:12px;color:var(--text-secondary);\">\n          <span>俱乐部: <span id=\"qa-pvp-target-legion\">--</span></span>\n          <span style=\"margin-left:12px;\">历史最高战力: <span id=\"qa-pvp-target-max-power\">--</span></span>\n          <span style=\"margin-left:12px;\">俱乐部红淬: <span id=\"qa-pvp-target-legion-red\" style=\"color:#ff3b30;\">--</span></span>\n        </div>\n        <!-- 武将列表 -->\n        <div id=\"qa-pvp-hero-list\" style=\"display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;\"></div>\n      </div>\n\n      <!-- 战斗结果区域 -->\n      <div id=\"qa-pvp-result\" style=\"display:none;margin-top:12px;\">\n        <div class=\"stats-row\" style=\"background:var(--card-bg);padding:10px;border-radius:8px;margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">胜率</span>\n            <span class=\"stat-value\" id=\"qa-pvp-win-rate\" style=\"color:#34c759;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">掉将率</span>\n            <span class=\"stat-value\" id=\"qa-pvp-die-rate\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">总场次</span>\n            <span class=\"stat-value\" id=\"qa-pvp-total\">--</span>\n          </div>\n        </div>\n        <div id=\"qa-pvp-battles\" style=\"max-height:300px;overflow-y:auto;\"></div>\n      </div>\n\n      <div class=\"helper-text\" id=\"qa-pvp-status\">输入目标ID后点击查询或切磋</div>\n    </div>\n  </div>\n";
  const _0x2ad270 = {
    daily: _0x4b6ca2,
    club: _0x12b81b,
    activity: _0x26cf7a,
    toolbox: _0x3dcfa8,
    rank: _0x32531b,
    spar: _0xa28cb2,
    changelog: _0x11983a
  };
  const _0x275336 = () => _0x5d9986.map(_0x32f46a => "\n  <div class=\"page-content " + (_0x32f46a === _0xe81745 ? "active" : "") + "\" id=\"page-" + _0x32f46a + "\">\n    " + (_0x2ad270[_0x32f46a] ? _0x2ad270[_0x32f46a]() : "<div class=\"card\"><div class=\"card-body\">暂无内容</div></div>") + "\n  </div>\n").join("");
  let _0x4a4911 = null;
  const _0x30927d = (_0x57b6b1, _0x52143 = "info", _0x1de174 = 2000) => {
    {
      !_0x4a4911 && (_0x4a4911 = document.createElement("div"), _0x4a4911.className = "qa-toast", document.body.appendChild(_0x4a4911));
      _0x4a4911.textContent = _0x57b6b1;
      _0x4a4911.className = "qa-toast show " + _0x52143;
      setTimeout(() => {
        _0x4a4911.classList.remove("show");
      }, _0x1de174);
    }
  };
  let _0x4bdb21 = null;
  let _0x48c9bb = [];
  let _0x31e1cd = false;
  let _0x149d45 = false;
  const _0x2b0b8a = (_0xfbb3aa, _0x2a0c86 = 4000) => {
    const _0x36f5b8 = {
      msg: _0xfbb3aa,
      duration: _0x2a0c86
    };
    _0x48c9bb.push(_0x36f5b8);
    if (!_0x31e1cd) {
      _0x59fcdb();
    }
  };
  const _0x59fcdb = () => {
    {
      if (_0x48c9bb.length === 0) {
        _0x31e1cd = false;
        return;
      }
      _0x31e1cd = true;
      const {
        msg: _0x1276f,
        duration: _0x399a88
      } = _0x48c9bb.shift();
      !_0x4bdb21 && (_0x4bdb21 = document.createElement("div"), _0x4bdb21.className = "qa-toast qa-tip-toast", document.body.appendChild(_0x4bdb21));
      _0x4bdb21.textContent = _0x1276f;
      _0x4bdb21.classList.add("show");
      setTimeout(() => {
        _0x4bdb21.classList.remove("show");
        setTimeout(_0x59fcdb, 300);
      }, _0x399a88);
    }
  };
  const _0x2aa7ad = () => {
    if (_0x149d45) {
      return;
    }
    _0x149d45 = true;
    _0x2b0b8a("💡 菜单栏左滑查看更多功能", 2000);
  };
  const _0x439352 = (_0x5347a0, _0xfa8a56, _0x5f0e97) => {
    if (!_0x5347a0) {
      return;
    }
    const _0x58c865 = document.getElementById("qa-result-" + _0x5347a0);
    if (!_0x58c865) {
      return;
    }
    const _0xaa5675 = new Date().toLocaleTimeString();
    const _0x2bf9e8 = _0x2f31f9 => {
      try {
        return JSON.stringify(_0x2f31f9, null, 2);
      } catch {
        {
          return String(_0x2f31f9);
        }
      }
    };
    _0x58c865.textContent = "【" + _0xaa5675 + "】" + (_0xfa8a56 || "返回数据") + "\n" + _0x2bf9e8(_0x5f0e97);
  };
  const _0x51d52b = _0x1fa2f5 => {
    const _0x3e1d85 = document.getElementById("qa-result-" + _0x1fa2f5);
    if (_0x3e1d85) {
      _0x3e1d85.textContent = "暂无数据";
    }
  };
  const _0x3f961a = _0x186ff2 => {
    {
      const _0x420150 = Math.floor(Number(_0x186ff2) || 0);
      if (_0x420150 <= 0) {
        return "00:00:00";
      }
      const _0x423cde = Math.floor(_0x420150 / 3600).toString().padStart(2, "0");
      const _0x866e77 = Math.floor(_0x420150 % 3600 / 60).toString().padStart(2, "0");
      const _0x39b582 = (_0x420150 % 60).toString().padStart(2, "0");
      return _0x423cde + ":" + _0x866e77 + ":" + _0x39b582;
    }
  };
  const _0x78a052 = _0x4db124 => _0x2f3199[_0x4db124]?.["name"] || "武将" + _0x4db124;
  const _0x186d8b = _0x28c803 => new Promise(_0x1ba963 => setTimeout(_0x1ba963, _0x28c803));
  const _0x21e446 = (_0x3bd22b, _0x34d86a = 0) => {
    const _0x20d667 = document.getElementById(_0x3bd22b);
    const _0x457c61 = Number(_0x20d667?.["value"]);
    return Number.isFinite(_0x457c61) ? _0x457c61 : _0x34d86a;
  };
  const _0x9fa531 = _0x1f5b9a => {
    const _0x3f0808 = document.getElementById(_0x1f5b9a);
    return Boolean(_0x3f0808 && _0x3f0808.checked);
  };
  const _0x246384 = () => {
    {
      const _0x33bb4a = document.createElement("canvas").getContext("webgl");
      let _0x1ff6e4 = "";
      if (_0x33bb4a) {
        {
          const _0x3b2b8d = _0x33bb4a.getExtension("WEBGL_debug_renderer_info");
          if (_0x3b2b8d) {
            {
              _0x1ff6e4 = _0x33bb4a.getParameter(_0x3b2b8d.UNMASKED_RENDERER_WEBGL);
            }
          }
        }
      }
      const _0x26c364 = [navigator.userAgent, _0x1ff6e4, navigator.hardwareConcurrency, navigator.deviceMemory].join("|");
      let _0x59df06 = 0;
      for (let _0x5c7f69 = 0; _0x5c7f69 < _0x26c364.length; _0x5c7f69++) {
        {
          _0x59df06 = (_0x59df06 << 5) - _0x59df06 + _0x26c364.charCodeAt(_0x5c7f69);
          _0x59df06 = _0x59df06 & _0x59df06;
        }
      }
      return Math.abs(_0x59df06).toString(36);
    }
  };
  const _0x1c6063 = "岚山";
  const _0x1d391c = (_0x57a8eb, _0x399ddf, _0x112d08) => {
    {
      const _0x39f4c9 = String(_0x112d08 || "").trim() || _0x1c6063;
      const _0x1f41c4 = _0x57a8eb.width;
      const _0x5b41c8 = _0x57a8eb.height;
      const _0xa7cea3 = _0x386da5.theme === "dark";
      _0x399ddf.save();
      _0x399ddf.font = "600 14px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x399ddf.fillStyle = _0xa7cea3 ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
      _0x399ddf.textBaseline = "middle";
      _0x399ddf.textAlign = "center";
      const _0x2d12c3 = -30 * Math.PI / 180;
      const _0x491e28 = 150;
      const _0x2474c6 = 90;
      const _0x24af37 = Math.sqrt(_0x1f41c4 * _0x1f41c4 + _0x5b41c8 * _0x5b41c8);
      _0x399ddf.translate(_0x1f41c4 / 2, _0x5b41c8 / 2);
      _0x399ddf.rotate(_0x2d12c3);
      for (let _0x16d2b9 = -_0x24af37; _0x16d2b9 < _0x24af37; _0x16d2b9 += _0x2474c6) {
        {
          for (let _0x13df30 = -_0x24af37; _0x13df30 < _0x24af37; _0x13df30 += _0x491e28) {
            _0x399ddf.fillText(_0x39f4c9, _0x13df30, _0x16d2b9);
          }
        }
      }
      _0x399ddf.restore();
    }
  };
  const _0x4410da = (_0x4d5a1d, _0x252573, _0xeebcb4) => {
    if (_0xeebcb4) {
      _0xeebcb4("正在生成图片...", "info", 1000);
    }
    const _0x63afe8 = _0x4d5a1d.getContext("2d");
    _0x1d391c(_0x4d5a1d, _0x63afe8, _0x386da5?.["roleId"]);
    return new Promise((_0x9af91d, _0x4f82a6) => {
      _0x4d5a1d.toBlob(_0x574882 => {
        {
          if (!_0x574882) {
            if (_0xeebcb4) {
              _0xeebcb4("图片生成失败", "error");
            }
            _0x4f82a6(new Error("Canvas toBlob failed"));
            return;
          }
          const _0x4eba50 = URL.createObjectURL(_0x574882);
          if (typeof GM_download === "function") {
            GM_download({
              url: _0x4eba50,
              name: _0x252573,
              saveAs: false,
              onload: () => {
                URL.revokeObjectURL(_0x4eba50);
                if (_0xeebcb4) {
                  _0xeebcb4("导出成功", "success");
                }
                _0x9af91d();
              },
              onerror: () => {
                URL.revokeObjectURL(_0x4eba50);
                _0x399156(_0x4eba50, _0x252573);
                if (_0xeebcb4) {
                  _0xeebcb4("导出成功", "success");
                }
                _0x9af91d();
              }
            });
          } else {
            _0x399156(_0x4eba50, _0x252573);
            setTimeout(() => URL.revokeObjectURL(_0x4eba50), 100);
            if (_0xeebcb4) {
              _0xeebcb4("导出成功", "success");
            }
            _0x9af91d();
          }
        }
      }, "image/png");
    });
  };
  const _0x399156 = (_0x49c74a, _0xa94d19) => {
    {
      const _0x4876a6 = document.createElement("a");
      _0x4876a6.href = _0x49c74a;
      _0x4876a6.download = _0xa94d19;
      _0x4876a6.style.display = "none";
      document.body.appendChild(_0x4876a6);
      _0x4876a6.click();
      document.body.removeChild(_0x4876a6);
    }
  };
  typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
  const _0x1ddb84 = (_0x31cb1f, _0x28b4dc = "info") => {
    return;
  };
  const _0x4dddd6 = (_0x2ee754, _0x82492b = {}, _0x1cc1c3 = "") => {
    {
      return;
    }
  };
  const _0x348ea9 = (_0x3a9a26, _0x3a3fee, _0x3cff4b = "") => {
    {
      return;
    }
  };
  const _0x1e6f53 = (_0x22ff4c, _0x20b45f, _0x38f0aa) => {
    {
      return;
    }
  };
  let _0x7cb35e = 0;
  const _0x8024db = ["fight_startareaarena", "fight_startpvp", "fight_starttower", "fight_startboss", "fight_startlegionboss", "fight_startdungeon", "fight_startlevel"];
  function _0x40e9ed(_0x20ef7b) {
    if (_0x20ef7b === null || _0x20ef7b === undefined) {
      return null;
    }
    const _0x3cb22a = typeof _0x20ef7b === "string" ? Number(_0x20ef7b) : _0x20ef7b;
    return Number.isFinite(_0x3cb22a) ? _0x3cb22a : null;
  }
  function _0x401443(_0xbd17c3) {
    {
      const _0x25b167 = [_0xbd17c3?.["ack"], _0xbd17c3?.["_ack"], _0xbd17c3?.["__qaAck"], _0xbd17c3?.["_qaAck"], window.__qaWsAck];
      for (const _0x4c7ead of _0x25b167) {
        {
          const _0x437471 = _0x40e9ed(_0x4c7ead);
          if (_0x437471 !== null && _0x437471 >= 0) {
            return _0x437471;
          }
        }
      }
      return 0;
    }
  }
  function _0x4afb94(_0x4682fe) {
    const _0xd0cd80 = [_0x4682fe?.["channel"], _0x4682fe?.["_channel"], _0x4682fe?.["enc"], _0x4682fe?.["_enc"], _0x4682fe?.["__enc"], _0x4682fe?.["__channel"], window.h5websocket?.["channel"], window.h5websocket?.["enc"], window.h5websocket?.["ws"]?.["channel"], window.h5websocket?.["ws"]?.["enc"]];
    for (const _0x37a7e8 of _0xd0cd80) {
      if (typeof _0x37a7e8 === "string" && _0x37a7e8.trim()) {
        return _0x37a7e8;
      }
    }
    return "auto";
  }
  const _0x4957f2 = () => {
    const _0x1373e2 = [window.h5websocket?.["ws"], window.h5websocket, window.ws, window.gameWs, window.WebSocketClient];
    const _0x5a5d90 = [];
    const _0x27cc85 = new Set();
    for (const _0x231b9e of _0x1373e2) {
      if (!_0x231b9e) {
        continue;
      }
      if (_0x27cc85.has(_0x231b9e)) {
        continue;
      }
      _0x27cc85.add(_0x231b9e);
      _0x5a5d90.push(_0x231b9e);
    }
    for (const _0x4d02bf of _0x5a5d90) {
      if (_0x4d02bf?.["sendAsync"]) {
        return _0x4d02bf;
      }
    }
    for (const _0x45847f of _0x5a5d90) {
      {
        if (_0x45847f?.["send"]) {
          return _0x45847f;
        }
      }
    }
    return null;
  };
  const _0x361aec = async (_0x354605, _0x590997 = {}, _0x40ea01 = "") => {
    const _0xbf1640 = _0x4957f2();
    if (!_0xbf1640) {
      throw new Error("游戏WebSocket未连接，请确保在游戏页面中运行");
    }
    let _0x2aadd1 = _0x590997;
    if (_0x8024db.includes(_0x354605) && _0x386da5?.["battleVersion"]) {
      {
        const _0x57a0fb = {
          battleVersion: _0x386da5.battleVersion,
          ..._0x590997
        };
        _0x2aadd1 = _0x57a0fb;
      }
    }
    const _0x1aae62 = _0x401443(_0xbf1640);
    const _0x5e6cb4 = _0x354605 === "_sys/ack" || _0x354605 === "heart_beat" ? 0 : ++_0x7cb35e;
    const _0x444858 = window.g_utils?.["bon"]?.["encode"] ? {
      ack: _0x1aae62,
      body: window.g_utils.bon.encode(_0x2aadd1),
      cmd: _0x354605,
      seq: _0x5e6cb4,
      time: Date.now()
    } : {
      ack: _0x1aae62,
      cmd: _0x354605,
      params: _0x2aadd1,
      seq: _0x5e6cb4,
      time: Date.now()
    };
    if (_0xbf1640.sendAsync) {
      const _0x30448b = new Promise((_0x5ad0f3, _0x2faae8) => {
        setTimeout(() => _0x2faae8(new Error("请求超时: " + _0x354605)), 10000);
      });
      const _0x2bf794 = await Promise.race([_0xbf1640.sendAsync(_0x444858), _0x30448b]);
      const _0x31b206 = _0x40e9ed(_0x2bf794?.["_raw"]?.["seq"] ?? _0x2bf794?.["seq"]);
      _0x31b206 !== null && _0x31b206 >= 0 && (window.__qaWsAck = _0x31b206, _0xbf1640.__qaAck = _0x31b206);
      let _0x87e8d0;
      if (_0x2bf794?.["_rawData"]) {
        _0x87e8d0 = _0x2bf794._rawData;
      } else {
        if (_0x2bf794?.["getData"]) {
          _0x87e8d0 = _0x2bf794.getData();
        } else {
          if (_0x2bf794?.["body"] && typeof _0x2bf794.body === "object" && !ArrayBuffer.isView(_0x2bf794.body)) {
            _0x87e8d0 = _0x2bf794.body;
          } else {
            _0x87e8d0 = _0x2bf794;
          }
        }
      }
      return _0x87e8d0;
    } else {
      if (_0xbf1640.send) {
        if (window.g_utils?.["encode"]) {
          try {
            const _0x2c0b89 = _0x4afb94(_0xbf1640);
            const _0x42db9a = window.g_utils.encode(_0x444858, _0x2c0b89);
            _0xbf1640.send(_0x42db9a);
            const _0x5794e8 = {
              success: true,
              message: "已发送（binary）"
            };
            return _0x5794e8;
          } catch (_0x4708bc) {
            return {
              success: false,
              message: "发送失败（binary 编码失败）: " + (_0x4708bc?.["message"] || String(_0x4708bc))
            };
          }
        }
        _0xbf1640.send(JSON.stringify(_0x444858));
        const _0x2d520a = {
          success: true,
          message: "已发送（JSON，无响应确认）"
        };
        return _0x2d520a;
      }
    }
    throw new Error("WebSocket不支持发送消息");
  };
  const _0x4af3f0 = (_0x175029, _0x116e85) => {
    {
      if (!_0x175029) {
        return undefined;
      }
      if (typeof _0x175029.get === "function") {
        const _0x5787b3 = Number(_0x116e85);
        const _0x21a04c = String(_0x116e85);
        return _0x175029.get(_0x5787b3) ?? _0x175029.get(_0x21a04c);
      }
      return _0x175029[_0x116e85] ?? _0x175029[String(_0x116e85)];
    }
  };
  const _0x358a2a = _0x5eb60a => {
    if (!_0x5eb60a) {
      return [];
    }
    if (typeof _0x5eb60a.keys === "function") {
      {
        return Array.from(_0x5eb60a.keys());
      }
    }
    return Object.keys(_0x5eb60a);
  };
  const _0x196041 = _0x350a33 => {
    if (!_0x350a33) {
      return false;
    }
    if (typeof _0x350a33.size === "number") {
      return _0x350a33.size > 0;
    }
    return Object.keys(_0x350a33).length > 0;
  };
  const _0x209bab = (_0x165436, _0x18f025) => {
    {
      return _0x4af3f0(_0x165436, _0x18f025);
    }
  };
  const _0x16e7d2 = (_0x2c1ee4, _0x2ba281) => {
    const _0x4db16f = _0x209bab(_0x2c1ee4, _0x2ba281);
    return _0x4db16f?.["quantity"] ?? 0;
  };
  const _0x4864a0 = () => {
    try {
      {
        const _0x2dab26 = localStorage.getItem(_0x193c88);
        if (!_0x2dab26) {
          return _0x386da5.dailySettings = {};
        }
        _0x386da5.dailySettings = JSON.parse(_0x2dab26) || {};
        return _0x386da5.dailySettings;
      }
    } catch {
      _0x386da5.dailySettings = {};
      return {};
    }
  };
  const _0x10c948 = () => {
    return Array.from(document.querySelectorAll("#page-daily input[data-task]:checked")).map(_0x1b8183 => _0x1b8183.getAttribute("data-task")).filter(Boolean);
  };
  const _0x3f743d = () => {
    const _0x58e22c = document.getElementById("qa-daily-select-all");
    if (!_0x58e22c) {
      return;
    }
    const _0x19cbdb = () => {
      const _0x420726 = document.querySelectorAll("#page-daily input[data-task]");
      const _0x34286e = Array.from(_0x420726).every(_0x375c35 => _0x375c35.checked);
      _0x58e22c.checked = _0x34286e;
    };
    _0x58e22c.addEventListener("change", () => {
      const _0x541fa8 = document.querySelectorAll("#page-daily input[data-task]");
      _0x541fa8.forEach(_0x2422cf => _0x2422cf.checked = _0x58e22c.checked);
    });
    const _0x5e6ef9 = document.querySelectorAll("#page-daily input[data-task]");
    _0x5e6ef9.forEach(_0x472240 => {
      {
        _0x472240.addEventListener("change", _0x19cbdb);
      }
    });
    _0x19cbdb();
  };
  const _0x9a8c03 = _0x1187de => {
    {
      const _0x3d9010 = document.getElementById("qa-daily-fix-progress");
      if (_0x3d9010) {
        _0x3d9010.textContent = _0x1187de || "--";
      }
    }
  };
  const _0xe12aee = (_0x334fd1, _0x5977c8 = "all") => {
    {
      const _0x5c580a = _0x334fd1 || window.ROLE?.["items"];
      if (!_0x5c580a) {
        return;
      }
      const _0x3e7580 = Object.keys(_0x5c580a).length > 0;
      if (!_0x3e7580) {
        {
          return;
        }
      }
      if (_0x5977c8 === "all" || _0x5977c8 === "jade") {
        const _0x5586e0 = _0x16e7d2(_0x5c580a, 1022);
        const _0x278a4b = document.getElementById("qa-jade-count");
        if (_0x278a4b) {
          _0x278a4b.textContent = _0x5586e0.toLocaleString();
        }
        const _0x5645e4 = document.getElementById("qa-jade-count-quench");
        if (_0x5645e4) {
          _0x5645e4.textContent = _0x5586e0.toLocaleString();
        }
        const _0x4909fe = _0x16e7d2(_0x5c580a, 1023);
        const _0x461342 = document.getElementById("qa-color-jade-count");
        if (_0x461342) {
          _0x461342.textContent = _0x4909fe.toLocaleString();
        }
        const _0x5255f8 = document.getElementById("qa-color-jade-count-quench");
        if (_0x5255f8) {
          _0x5255f8.textContent = _0x4909fe.toLocaleString();
        }
      }
      if (_0x5977c8 === "all" || _0x5977c8 === "toolbox") {
        const _0x3023e9 = {
          2001: _0x16e7d2(_0x5c580a, 2001),
          2002: _0x16e7d2(_0x5c580a, 2002),
          2003: _0x16e7d2(_0x5c580a, 2003),
          2004: _0x16e7d2(_0x5c580a, 2004)
        };
        const _0x1e0011 = _0x3023e9[2001] * 1 + _0x3023e9[2002] * 10 + _0x3023e9[2003] * 20 + _0x3023e9[2004] * 50;
        const _0x4a3e0f = document.getElementById("qa-box-total-points");
        if (_0x4a3e0f) {
          _0x4a3e0f.textContent = _0x1e0011.toLocaleString();
        }
        [2001, 2002, 2003, 2004].forEach(_0x5de6ff => {
          const _0x11b207 = document.querySelector("[data-box-count-for=\"" + _0x5de6ff + "\"]");
          if (_0x11b207) {
            _0x11b207.textContent = String(_0x3023e9[_0x5de6ff] ?? 0);
          }
        });
        const _0x24854f = document.getElementById("qa-box-count");
        const _0x2e6143 = document.getElementById("qa-box-itemid");
        if (_0x2e6143 && _0x24854f) {
          {
            const _0xa26a65 = Number(_0x2e6143.value) || 2001;
            const _0x155c44 = _0x3023e9[_0xa26a65] ?? 0;
            const _0x5a4b73 = Math.max(_0x155c44, 10);
            _0x24854f.max = String(_0x5a4b73);
            const _0x3cdeaa = Number(_0x24854f.value);
            if (Number.isFinite(_0x3cdeaa) && _0x3cdeaa > _0x5a4b73) {
              const _0x57a8b0 = Math.max(Math.floor(_0x5a4b73 / 10) * 10, 10);
              _0x24854f.value = String(_0x57a8b0);
            }
          }
        }
        const _0xf3770a = {
          1: _0x16e7d2(_0x5c580a, 1011),
          2: _0x16e7d2(_0x5c580a, 1012)
        };
        [1, 2].forEach(_0x571ced => {
          const _0x5f19d4 = document.querySelector("[data-fish-count-for=\"" + _0x571ced + "\"]");
          if (_0x5f19d4) {
            _0x5f19d4.textContent = String(_0xf3770a[_0x571ced] ?? 0);
          }
        });
        const _0x3541b5 = document.getElementById("qa-fish-count");
        const _0x454c0b = document.getElementById("qa-fish-type");
        if (_0x454c0b && _0x3541b5) {
          const _0x1b09dd = Number(_0x454c0b.value) || 1;
          const _0xa3cfc3 = _0xf3770a[_0x1b09dd] ?? 0;
          const _0x19b30a = Math.max(_0xa3cfc3, 10);
          _0x3541b5.max = String(_0x19b30a);
          const _0x24bdd5 = Number(_0x3541b5.value);
          if (Number.isFinite(_0x24bdd5) && _0x24bdd5 > _0x19b30a) {
            {
              const _0xf4a2c4 = Math.max(Math.floor(_0x19b30a / 10) * 10, 10);
              _0x3541b5.value = String(_0xf4a2c4);
            }
          }
        }
      }
    }
  };
  const _0x4c6517 = _0x4c8eba => {
    _0x621a8a(_0x4c8eba || window.ROLE?.["dailyTask"]);
  };
  const _0x621a8a = _0x4edb06 => {
    const _0x169150 = document.getElementById("qa-daily-detail");
    if (!_0x169150) {
      return;
    }
    const _0x5278e4 = _0x4edb06 || window.ROLE?.["dailyTask"];
    if (!_0x5278e4) {
      {
        _0x169150.innerHTML = "<div class=\"helper-text\">暂无任务数据</div>";
        return;
      }
    }
    const _0x138b9a = _0x5278e4.complete || {};
    const _0x4087e1 = _0x196041(_0x138b9a);
    if (!_0x4087e1) {
      _0x169150.innerHTML = "<div class=\"helper-text\">等待游戏数据加载...</div>";
      return;
    }
    const _0x576748 = Object.keys(_0x131411).map(Number).sort((_0x338ae8, _0x28c8e6) => _0x338ae8 - _0x28c8e6);
    if (_0x576748.length === 0) {
      {
        _0x169150.innerHTML = "<div class=\"helper-text\">暂无任务数据</div>";
        return;
      }
    }
    const _0x24774d = _0x576748.filter(_0x1024b4 => {
      {
        const _0x51beb6 = _0xee0f71[_0x1024b4] || 1;
        const _0x16afec = _0x4af3f0(_0x138b9a, _0x1024b4);
        const _0x3aa9af = _0x16afec === -1 ? _0x51beb6 : typeof _0x16afec === "number" ? Math.min(_0x16afec, _0x51beb6) : 0;
        return _0x3aa9af >= _0x51beb6;
      }
    }).length;
    _0x1e6f53("renderDailyTaskDetails", "任务完成统计", _0x24774d + "/" + _0x576748.length);
    _0x169150.innerHTML = "<div class=\"task-grid\">\n    " + _0x576748.map(_0x5010a0 => {
      const _0x1709d0 = _0xee0f71[_0x5010a0] || 1;
      const _0x2c11ac = _0x4af3f0(_0x138b9a, _0x5010a0);
      const _0x1ddbc8 = _0x2c11ac === -1 ? _0x1709d0 : typeof _0x2c11ac === "number" ? Math.min(_0x2c11ac, _0x1709d0) : 0;
      const _0x288b22 = _0x1ddbc8 >= _0x1709d0;
      const _0x126d7c = _0x131411[_0x5010a0] || "任务" + _0x5010a0;
      return "<div class=\"task-check " + (_0x288b22 ? "done" : "") + "\">\n        <span>#" + _0x5010a0 + " " + _0x126d7c + "</span>\n        <span class=\"task-status\">" + _0x1ddbc8 + "/" + _0x1709d0 + "</span>\n      </div>";
    }).join("") + "\n  </div>";
  };
  const _0xfcdec8 = "岚山";
  const _0x34159c = 20;
  const _0x24b290 = () => document.getElementById("qa-watermark");
  const _0x131169 = _0x1606ce => {
    const _0x288e1e = String(_0x1606ce).trim() || _0xfcdec8;
    let _0x587fd4 = "<div class=\"qa-watermark-pattern\">";
    for (let _0x4f5dd8 = 0; _0x4f5dd8 < _0x34159c; _0x4f5dd8++) {
      _0x587fd4 += "<span class=\"qa-watermark-item\">" + _0x288e1e + "</span>";
    }
    _0x587fd4 += "</div>";
    const _0xc1834a = {
      safe: _0x288e1e,
      patternHtml: _0x587fd4
    };
    return _0xc1834a;
  };
  const _0x4157eb = _0x3fccbe => {
    {
      const _0x59c074 = _0x24b290();
      if (!_0x59c074) {
        return;
      }
      const {
        safe: _0x212f59,
        patternHtml: _0xf08e72
      } = _0x131169(_0x3fccbe);
      _0x59c074.setAttribute("data-text", _0x212f59);
      _0x59c074.innerHTML = _0xf08e72;
    }
  };
  const _0x5abefb = () => {
    const _0x48857e = _0x386da5?.["roleId"];
    _0x4157eb(_0x48857e || _0xfcdec8);
  };
  const _0x30ea75 = () => {
    {
      const _0x20804e = _0x24b290();
      if (!_0x20804e) {
        return;
      }
      if (_0x20804e.dataset.inited === "1") {
        return;
      }
      _0x20804e.dataset.inited = "1";
      _0x5abefb();
    }
  };
  const _0x54f10b = async (_0x30a613, _0x3c4f0f) => {
    if (!_0x386da5.selectedHeroId || !_0x386da5.selectedPart) {
      return;
    }
    try {
      const _0x3c3dac = {
        heroId: _0x386da5.selectedHeroId,
        part: _0x386da5.selectedPart,
        slot: _0x30a613,
        isLocked: _0x3c4f0f
      };
      const _0x460e11 = await _0x361aec("equipment_updatequenchlock", _0x3c3dac);
      if (_0x460e11?.["success"] === false) {
        throw new Error(_0x460e11?.["message"] || "锁定失败");
      }
      if (_0x3c4f0f) {
        if (!_0x386da5.lockedSlots.includes(_0x30a613)) {
          _0x386da5.lockedSlots.push(_0x30a613);
        }
      } else {
        _0x386da5.lockedSlots = _0x386da5.lockedSlots.filter(_0x2c6fec => _0x2c6fec !== _0x30a613);
      }
      const _0x9b1ccb = document.querySelector(".qa-slot-item[data-quench-id=\"" + _0x30a613 + "\"]");
      if (_0x9b1ccb) {
        _0x9b1ccb.classList.toggle("locked", _0x3c4f0f);
      }
      _0x30927d(_0x3c4f0f ? "已锁定" : "已解锁", "success");
    } catch (_0x313cea) {
      _0x30927d("锁定操作失败: " + (_0x313cea?.["message"] || _0x313cea), "error");
    }
  };
  let _0xa66b9a = null;
  let _0x19d371 = false;
  const _0x279415 = () => {
    if (_0xa66b9a) {
      {
        clearInterval(_0xa66b9a);
        _0xa66b9a = null;
      }
    }
    const _0x1e1bb5 = document.getElementById("qa-panel");
    if (_0x1e1bb5) {
      _0x1e1bb5.style.display = "none";
    }
    _0x30927d("您的账号已被冻结，脚本已停止运行", "error", 0);
  };
  const _0x3d3f69 = async () => {
    try {
      {
        const _0x2dbb7e = _0x246384();
        const _0x41d8d0 = _0x386da5.roleId;
        if (!_0x41d8d0) {
          _0x30927d("[Auth] 角色ID未获取", "warning", 5000);
          return true;
        }
        const _0x1e97c7 = {
          userAgent: navigator.userAgent,
          language: navigator.language
        };
        _0x30927d("[Auth] 验证中... roleId: " + _0x41d8d0, "info", 5000);
        _0x1ddb84("[Auth] 开始验证，API地址: " + _0x568cd2 + "/device-auth/verify", "info");
        const _0x8a6535 = {
          "Content-Type": "application/json"
        };
        const _0x34f184 = {
          fingerprint: _0x2dbb7e,
          roleId: _0x41d8d0,
          deviceInfo: _0x1e97c7
        };
        const _0x335c30 = await fetch(_0x568cd2 + "/device-auth/verify", {
          method: "POST",
          headers: _0x8a6535,
          body: JSON.stringify(_0x34f184)
        });
        _0x1ddb84("[Auth] 响应状态: " + _0x335c30.status, "info");
        const _0x1e40de = await _0x335c30.text();
        if (!_0x1e40de) {
          _0x30927d("[Auth] 服务器返回空响应", "warning", 5000);
          return true;
        }
        let _0x56cc62;
        try {
          _0x56cc62 = JSON.parse(_0x1e40de);
        } catch (_0xf593ee) {
          _0x1ddb84("[Auth] JSON解析失败: " + _0x1e40de, "error");
          _0x30927d("[Auth] 响应格式错误", "warning", 5000);
          return true;
        }
        const _0x3638d9 = {
          label: "[Auth] 响应数据",
          data: _0x56cc62
        };
        _0x1ddb84(_0x3638d9, "info");
        if (!_0x56cc62.success) {
          {
            if (_0x56cc62.code === "DEVICE_FROZEN") {
              _0x279415();
              return false;
            }
            _0x30927d("[Auth] 验证失败: " + _0x56cc62.error, "error", 7500);
            return false;
          }
        }
        localStorage.setItem(_0x4a1368, _0x56cc62.data.token);
        _0x30927d("[Auth] 验证成功", "success", 5000);
        _0x2aa7ad();
        return true;
      }
    } catch (_0x464ec7) {
      _0x1ddb84("[Auth] 请求异常: " + _0x464ec7.message, "error");
      _0x30927d("[Auth] 请求失败: " + _0x464ec7.message, "error", 7500);
      _0x2aa7ad();
      return true;
    }
  };
  const _0x37115c = async () => {
    {
      try {
        {
          const _0xc96f8d = localStorage.getItem(_0x4a1368);
          const _0x256851 = _0x386da5.roleId;
          const _0x522f9e = _0x246384();
          if (!_0xc96f8d || !_0x256851) {
            return;
          }
          const _0x5ba3a4 = {
            "Content-Type": "application/json"
          };
          const _0x2dd639 = {
            token: _0xc96f8d,
            roleId: _0x256851,
            fingerprint: _0x522f9e
          };
          const _0x415f3a = await fetch(_0x568cd2 + "/device-auth/heartbeat", {
            method: "POST",
            headers: _0x5ba3a4,
            body: JSON.stringify(_0x2dd639)
          });
          const _0x147914 = await _0x415f3a.text();
          if (!_0x147914) {
            return;
          }
          let _0x23b7c3;
          try {
            _0x23b7c3 = JSON.parse(_0x147914);
          } catch (_0x332739) {
            {
              return;
            }
          }
          if (!_0x23b7c3.success) {
            if (_0x23b7c3.code === "DEVICE_FROZEN") {
              _0x279415();
              return;
            }
            return;
          }
          localStorage.setItem(_0x4a1368, _0x23b7c3.data.token);
        }
      } catch (_0x1bb5e5) {}
    }
  };
  const _0x1051d9 = () => {
    {
      if (_0xa66b9a) {
        return;
      }
      _0xa66b9a = setInterval(_0x37115c, 300000);
    }
  };
  const _0x2f1fa2 = async () => {
    {
      if (_0x19d371) {
        return true;
      }
      const _0x235829 = await _0x3d3f69();
      _0x235829 && (_0x19d371 = true, _0x1051d9());
      return _0x235829;
    }
  };
  const _0x4ccd7f = async (_0x5ef59c, _0x4c5050, _0x35d113 = {}, _0x3f2d08 = "") => {
    try {
      const _0x56d563 = _0x3f2d08 ? _0x5ef59c + "-" + _0x3f2d08 : _0x5ef59c + "-" + _0x4c5050;
      const _0x1dff0b = await _0x361aec(_0x4c5050, _0x35d113, _0x56d563);
      _0x439352(_0x5ef59c, _0x3f2d08 || _0x4c5050, _0x1dff0b);
      return _0x1dff0b;
    } catch (_0x3328e8) {
      {
        throw _0x3328e8;
      }
    }
  };
  const _0x349779 = async (_0x58c74b, _0xf085fa) => {
    for (const _0x349ec6 of _0xf085fa) {
      {
        try {
          await _0x4ccd7f(_0x58c74b, _0x349ec6.cmd, _0x349ec6.params || {}, _0x349ec6.name || _0x349ec6.cmd);
          await _0x186d8b(300);
        } catch (_0x503cba) {}
      }
    }
  };
  const _0x54b8ca = async () => {
    const _0x14210f = await _0x361aec("role_getroleinfo", {}, "数据管理-刷新角色信息");
    const _0x3320d1 = _0x14210f?.["role"] || _0x14210f;
    _0x386da5.roleInfo = _0x3320d1;
    _0x386da5.items = _0x3320d1?.["items"] || {};
    _0x386da5.allHeroesData = _0x3320d1?.["heroes"] || _0x386da5.allHeroesData;
    _0x386da5.roleId = _0x3320d1?.["id"] || _0x3320d1?.["roleId"] || _0x386da5.roleId || null;
    _0x5abefb();
    _0x4c6517(_0x3320d1?.["dailyTask"]);
    _0x439352("daily-tasks", "role_getroleinfo", _0x14210f);
    _0x1ddb84("[Debug] roleId: " + _0x386da5.roleId, "info");
    _0x386da5.roleId && _0x2f1fa2();
    return _0x3320d1;
  };
  const _0x359bda = async () => {
    if (_0x386da5.battleVersion) {
      return _0x386da5.battleVersion;
    }
    try {
      const _0x2a0d59 = await _0x361aec("fight_startlevel", {}, "数据管理-获取战斗版本");
      const _0x5de8c6 = _0x2a0d59?.["battleData"]?.["version"] || _0x2a0d59?.["battleData"]?.["battleVersion"] || _0x2a0d59?.["version"];
      if (_0x5de8c6) {
        _0x386da5.battleVersion = _0x5de8c6;
      }
      return _0x386da5.battleVersion;
    } catch (_0x4b3b40) {
      {
        return null;
      }
    }
  };
  const _0x5a5332 = _0x3c4dd8 => {
    const _0xfc862a = _0x3c4dd8?.["body"] || _0x3c4dd8;
    if (!_0xfc862a) {
      return null;
    }
    if (Array.isArray(_0xfc862a)) {
      const _0x3f0071 = _0xfc862a[0];
      return _0x3f0071?.["roleId"] || _0x3f0071?.["id"] || _0x3f0071?.["targetId"];
    }
    const _0x1fdffd = _0xfc862a?.["rankList"]?.[0] || _0xfc862a?.["roleList"]?.[0] || _0xfc862a?.["targets"]?.[0] || _0xfc862a?.["arenaTargets"]?.[0] || _0xfc862a?.["targetList"]?.[0] || _0xfc862a?.["list"]?.[0];
    if (_0x1fdffd) {
      {
        if (_0x1fdffd.roleId) {
          return _0x1fdffd.roleId;
        }
        if (_0x1fdffd.id) {
          return _0x1fdffd.id;
        }
        if (_0x1fdffd.targetId) {
          return _0x1fdffd.targetId;
        }
      }
    }
    return _0xfc862a?.["roleId"] || _0xfc862a?.["id"] || _0xfc862a?.["targetId"] || null;
  };
  const _0x4d1cf7 = _0x2a3297 => {
    {
      if (!_0x2a3297 || typeof _0x2a3297 !== "object") {
        return null;
      }
      if (typeof _0x2a3297.useTeamId === "number") {
        return _0x2a3297.useTeamId;
      }
      for (const _0x25db38 of Object.keys(_0x2a3297)) {
        {
          const _0x2e7ba1 = _0x4d1cf7(_0x2a3297[_0x25db38]);
          if (_0x2e7ba1) {
            return _0x2e7ba1;
          }
        }
      }
      return null;
    }
  };
  const _0x56da7c = _0x216dd5 => {
    {
      const _0x4e0d45 = {
        useTeamId: 1,
        teams: {}
      };
      if (!_0x216dd5) {
        return _0x4e0d45;
      }
      const _0x3a6bd1 = _0x216dd5.presetTeamInfo ?? _0x216dd5;
      const _0xc746bf = _0x3a6bd1.useTeamId ?? _0x3a6bd1.presetTeamInfo?.["useTeamId"] ?? _0x4d1cf7(_0x3a6bd1) ?? 1;
      const _0x1a635d = _0x3a6bd1.presetTeamInfo ?? _0x3a6bd1;
      const _0x1cf8e8 = {};
      const _0x1a5705 = Object.keys(_0x1a635d || {}).filter(_0x3ba980 => /^\d+$/.test(_0x3ba980));
      for (const _0x3f4869 of _0x1a5705) {
        const _0x569f07 = Number(_0x3f4869);
        const _0x5cd66e = _0x1a635d[_0x3f4869];
        if (!_0x5cd66e) {
          {
            const _0xac949b = {
              teamInfo: {}
            };
            _0x1cf8e8[_0x569f07] = _0xac949b;
            continue;
          }
        }
        if (_0x5cd66e.teamInfo) {
          const _0x47bfbf = {
            teamInfo: _0x5cd66e.teamInfo
          };
          _0x1cf8e8[_0x569f07] = _0x47bfbf;
        } else {
          if (_0x5cd66e.heroes) {
            {
              const _0x377c89 = {};
              _0x5cd66e.heroes.forEach((_0x158d42, _0x3fc440) => {
                _0x377c89[String(_0x3fc440 + 1)] = _0x158d42;
              });
              const _0x5ca09d = {
                teamInfo: _0x377c89
              };
              _0x1cf8e8[_0x569f07] = _0x5ca09d;
            }
          } else {
            if (typeof _0x5cd66e === "object") {
              const _0x4b8c7d = Object.values(_0x5cd66e).some(_0x3ebcf8 => _0x3ebcf8 && typeof _0x3ebcf8 === "object" && "heroId" in _0x3ebcf8);
              const _0x57cad7 = {
                teamInfo: _0x4b8c7d ? _0x5cd66e : {}
              };
              _0x1cf8e8[_0x569f07] = _0x57cad7;
            } else {
              {
                const _0x84fb0c = {
                  teamInfo: {}
                };
                _0x1cf8e8[_0x569f07] = _0x84fb0c;
              }
            }
          }
        }
      }
      return {
        useTeamId: Number(_0xc746bf) || 1,
        teams: _0x1cf8e8
      };
    }
  };
  const _0x3f5beb = async () => {
    const _0x457354 = document.getElementById("qa-hero-list");
    _0x457354.innerHTML = "<div class=\"qa-loading\">加载中...</div>";
    try {
      {
        const _0x44553e = window.ROLE;
        if (!_0x44553e) {
          _0x457354.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">window.ROLE 数据不可用</div>";
          return;
        }
        const _0x3ac9da = _0x44553e.battleTeam || {};
        const _0x1e7985 = _0x358a2a(_0x3ac9da);
        if (!_0x1e7985.length) {
          _0x457354.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">ROLE.battleTeam 为空</div>";
          return;
        }
        const _0x39bb5b = _0x44553e.heroes || _0x386da5.roleInfo?.["heroes"] || {};
        const _0x57d60e = _0x44553e.items || _0x386da5.items || {};
        _0x386da5.roleInfo = _0x44553e;
        _0x386da5.items = _0x57d60e;
        _0x386da5.allHeroesData = _0x39bb5b || _0x386da5.allHeroesData;
        _0x386da5.roleId = _0x44553e.id || _0x44553e.roleId || _0x386da5.roleId || null;
        _0x5abefb();
        _0xe12aee(_0x57d60e, "jade");
        _0x4c6517(_0x44553e.dailyTask);
        const _0x29c246 = [];
        for (const _0x1d7861 of _0x1e7985) {
          const _0x1071b3 = _0x4af3f0(_0x3ac9da, _0x1d7861);
          const _0x554c01 = _0x1071b3?.["heroId"] || _0x1071b3?.["id"] || _0x1071b3;
          const _0x1db7be = Number(_0x554c01);
          if (!Number.isFinite(_0x1db7be) || _0x1db7be <= 0) {
            continue;
          }
          const _0x5c4586 = _0x4af3f0(_0x39bb5b, _0x1db7be) || {};
          _0x29c246.push({
            id: _0x1db7be,
            name: _0x78a052(_0x1db7be),
            position: Number(_0x1d7861),
            level: _0x1071b3?.["level"] || _0x5c4586?.["level"] || 1,
            equipment: _0x5c4586?.["equipment"] || {}
          });
        }
        _0x29c246.sort((_0x29c616, _0x278f25) => _0x29c616.position - _0x278f25.position);
        _0x386da5.heroes = _0x29c246;
        _0x515d5e(_0x29c246);
      }
    } catch (_0xab0752) {
      _0x457354.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">" + _0xab0752.message + "</div>";
    }
  };
  const _0x515d5e = _0x264d4f => {
    const _0x97096a = document.getElementById("qa-hero-list");
    if (!_0x264d4f || _0x264d4f.length === 0) {
      _0x97096a.innerHTML = "<div class=\"qa-loading\">暂无阵容数据</div>";
      return;
    }
    _0x97096a.innerHTML = _0x264d4f.map(_0x1d1db6 => "\n    <div class=\"qa-hero-item " + (_0x386da5.selectedHeroId === _0x1d1db6.id ? "active" : "") + "\" data-hero-id=\"" + _0x1d1db6.id + "\">\n      " + _0x1d1db6.name + " Lv." + _0x1d1db6.level + "\n    </div>\n  ").join("");
    _0x97096a.querySelectorAll(".qa-hero-item").forEach(_0x56fb87 => {
      _0x56fb87.addEventListener("click", () => _0x5e5aa7(Number(_0x56fb87.dataset.heroId)));
    });
  };
  const _0x5e5aa7 = async _0x534880 => {
    {
      const _0x31663f = document.getElementById("qa-equip-section");
      const _0x228f31 = document.getElementById("qa-quench-section");
      let _0x50e389 = _0x386da5.roleInfo?.["heroes"];
      if (!_0x50e389) {
        {
          if (_0x31663f) {
            _0x31663f.innerHTML = "<div class=\"qa-loading\">加载装备数据...</div>";
          }
          try {
            const _0x419e12 = await _0x54b8ca();
            _0x50e389 = _0x419e12?.["heroes"];
          } catch (_0x1bf26b) {
            {
              _0x50e389 = null;
            }
          }
        }
      }
      if (!_0x50e389) {
        if (_0x31663f) {
          _0x31663f.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">数据未就绪</div>";
        }
        return;
      }
      let _0x290d02 = _0x4af3f0(_0x50e389, _0x534880);
      if (!_0x290d02?.["equipment"]) {
        if (_0x31663f) {
          _0x31663f.innerHTML = "<div class=\"qa-loading\">加载装备数据...</div>";
        }
        if (_0x31663f) {
          _0x31663f.style.display = "block";
        }
        try {
          {
            const _0x3f3186 = await _0x54b8ca();
            _0x50e389 = _0x3f3186?.["heroes"] || _0x50e389;
            _0x290d02 = _0x4af3f0(_0x50e389, _0x534880);
          }
        } catch (_0x44d8a9) {
          if (_0x31663f) {
            _0x31663f.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">加载失败: " + _0x44d8a9.message + "</div>";
          }
          return;
        }
      }
      if (!_0x290d02) {
        {
          if (_0x31663f) {
            _0x31663f.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">武将数据不存在</div>";
          }
          return;
        }
      }
      _0x386da5.selectedHeroId = _0x534880;
      _0x386da5.selectedPart = null;
      _0x386da5.lockedSlots = [];
      _0x386da5.quenchCount = 0;
      const _0x5840b2 = document.getElementById("qa-quench-count");
      if (_0x5840b2) {
        _0x5840b2.textContent = "0";
      }
      document.querySelectorAll(".qa-hero-item").forEach(_0x3913cf => {
        _0x3913cf.classList.toggle("active", Number(_0x3913cf.dataset.heroId) === _0x534880);
      });
      const _0x2f77c0 = _0x290d02.equipment || {};
      const _0xc3a3c9 = document.getElementById("qa-equip-tabs");
      const _0x393388 = _0x358a2a(_0x2f77c0);
      if (_0x393388.length === 0) {
        _0x31663f.style.display = "none";
        if (_0x228f31) {
          _0x228f31.style.display = "none";
        }
        return;
      }
      _0x31663f.style.display = "block";
      _0xc3a3c9.innerHTML = _0x393388.map(_0x540a10 => {
        const _0x3c326b = _0x4af3f0(_0x2f77c0, _0x540a10);
        return "\n      <div class=\"qa-equip-tab " + (_0x386da5.selectedPart === Number(_0x540a10) ? "active" : "") + "\" data-slot-id=\"" + _0x540a10 + "\">\n        <div class=\"tab-name\">" + (["武器", "铠甲", "头冠", "坐骑"][_0x540a10 - 1] || "装备" + _0x540a10) + "</div>\n        <div class=\"tab-level\">Lv." + (_0x3c326b?.["level"] || 1) + "</div>\n      </div>\n    ";
      }).join("");
      _0xc3a3c9.querySelectorAll(".qa-equip-tab").forEach(_0x3fe6f6 => {
        _0x3fe6f6.addEventListener("click", () => _0x431007(Number(_0x3fe6f6.dataset.slotId)));
      });
      if (_0x393388.length > 0) {
        _0x431007(Number(_0x393388[0]));
      }
    }
  };
  const _0x431007 = _0x31302d => {
    {
      const _0x12bd51 = _0x386da5.roleInfo?.["heroes"];
      if (!_0x12bd51) {
        {
          const _0x5a6276 = document.getElementById("qa-quench-section");
          if (_0x5a6276) {
            _0x5a6276.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">数据未就绪</div>";
          }
          return;
        }
      }
      _0x386da5.selectedPart = _0x31302d;
      document.querySelectorAll(".qa-equip-tab").forEach(_0x445d51 => {
        _0x445d51.classList.toggle("active", Number(_0x445d51.dataset.slotId) === _0x31302d);
      });
      const _0x24d1af = _0x4af3f0(_0x12bd51, _0x386da5.selectedHeroId) || {};
      const _0x519ac7 = _0x24d1af.equipment;
      const _0x12869b = _0x4af3f0(_0x519ac7, _0x31302d) || {};
      const _0x1cb3b9 = _0x12869b.quenches || _0x4af3f0(_0x12869b, "quenches") || {};
      _0x386da5.lockedSlots = [];
      const _0xdf0a72 = _0x358a2a(_0x1cb3b9);
      for (const _0x1bcb31 of _0xdf0a72) {
        {
          const _0x5ad86c = _0x4af3f0(_0x1cb3b9, _0x1bcb31);
          const _0x5f2c17 = _0x5ad86c?.["isLocked"] || _0x5ad86c?.["locked"];
          if (_0x5f2c17) {
            _0x386da5.lockedSlots.push(Number(_0x1bcb31));
          }
        }
      }
      document.getElementById("qa-quench-section").style.display = "block";
      const _0x309637 = document.getElementById("qa-quench-times");
      if (_0x309637) {
        _0x309637.textContent = (_0x12869b.quenchTimes || 0) + "次";
      }
      const _0x3099c6 = document.getElementById("qa-equip-stats");
      const _0x1679cd = ["攻击", "血量", "防御", "血量"][_0x31302d - 1] || "加成";
      const _0x3095aa = _0x31302d === 1 ? "quenchAttackExt" : _0x31302d === 3 ? "quenchDefenseExt" : "quenchHpExt";
      const _0x27b763 = _0x12869b[_0x3095aa] || 0;
      if (_0x3099c6) {
        {
          _0x3099c6.innerHTML = "\n      <div class=\"stat-item\">\n        <span class=\"stat-label\">" + _0x1679cd + "加成</span>\n        <span class=\"stat-value\">+" + _0x27b763 + "</span>\n      </div>\n    ";
        }
      }
      _0x27716e(_0x1cb3b9);
    }
  };
  const _0x27716e = _0x453e65 => {
    const _0x360431 = document.getElementById("qa-slot-list");
    const _0x30c8d9 = _0x358a2a(_0x453e65).sort((_0x4cd216, _0x5300f4) => Number(_0x4cd216) - Number(_0x5300f4));
    if (_0x30c8d9.length === 0) {
      _0x360431.innerHTML = "<div class=\"qa-loading\">暂无淬炼数据</div>";
      return;
    }
    const _0x38e942 = _0x324e87 => {
      {
        if (_0x324e87 >= 91) {
          return "#ff3b30";
        }
        if (_0x324e87 >= 81) {
          return "#ff9500";
        }
        if (_0x324e87 >= 61) {
          return "#af52de";
        }
        if (_0x324e87 >= 41) {
          return "#007aff";
        }
        if (_0x324e87 >= 21) {
          return "#34c759";
        }
        return "#8e8e93";
      }
    };
    _0x360431.innerHTML = _0x30c8d9.map(_0x286446 => {
      const _0x214af1 = _0x4af3f0(_0x453e65, _0x286446) || {};
      const _0x556251 = _0x214af1.isLocked || _0x214af1.locked;
      const _0x51bb31 = _0x556251 || _0x386da5.lockedSlots.includes(Number(_0x286446));
      const _0x1ceff7 = _0x214af1.attrId ? _0x214af1.colorId ? _0x560ba3[String(_0x214af1.colorId)] || "#8e8e93" : _0x38e942(_0x214af1.attrNum || 0) : "#8e8e93";
      return "\n      <div class=\"qa-slot-item " + (_0x51bb31 ? "locked" : "") + "\" data-quench-id=\"" + _0x286446 + "\">\n        <input type=\"checkbox\" class=\"qa-slot-checkbox\" " + (_0x51bb31 ? "checked" : "") + " data-quench-id=\"" + _0x286446 + "\">\n        <span class=\"qa-slot-label\">孔" + _0x286446 + "</span>\n        " + (_0x214af1.attrId ? "\n          <div class=\"qa-slot-attr\" style=\"color:" + _0x1ceff7 + "\">\n            <span>" + (_0xab9b82[String(_0x214af1.attrId)] || "属性" + _0x214af1.attrId) + "</span>\n            <span>+" + (_0x214af1.attrNum || 0) + "</span>\n          </div>\n        " : "<span class=\"qa-slot-empty\">未淬炼</span>") + "\n      </div>\n    ";
    }).join("");
    _0x360431.querySelectorAll(".qa-slot-checkbox").forEach(_0x17da35 => {
      _0x17da35.addEventListener("change", async _0x4825e1 => {
        await _0x54f10b(Number(_0x17da35.dataset.quenchId), _0x4825e1.target.checked);
      });
    });
  };
  const _0x5a2aea = {
    __proto__: null,
    ensureBattleVersion: _0x359bda,
    extractTargetId: _0x5a5332,
    findUseTeamId: _0x4d1cf7,
    normalizePresetTeam: _0x56da7c,
    refreshRoleInfo: _0x54b8ca,
    refreshTeamData: _0x3f5beb,
    renderHeroList: _0x515d5e,
    renderQuenchSlots: _0x27716e,
    runCommand: _0x4ccd7f,
    runSequence: _0x349779,
    selectHero: _0x5e5aa7,
    selectPart: _0x431007
  };
  var _0x42d1c6 = Object.freeze(_0x5a2aea);
  const _0x3162a3 = () => {
    {
      const _0x54046d = document.getElementById("qa-bottle-status");
      const _0xf0796a = document.getElementById("qa-bottle-time");
      const _0x15816a = document.getElementById("qa-bottle-restart-btn");
      if (_0x54046d) {
        _0x54046d.textContent = _0x386da5.bottleIsRunning ? "运行中" : "已停止";
      }
      if (_0xf0796a) {
        _0xf0796a.textContent = _0x3f961a(_0x386da5.bottleRemainingTime);
      }
      if (_0x15816a) {
        _0x15816a.textContent = _0x386da5.bottleIsRunning ? "重启服务" : "启动服务";
      }
    }
  };
  const _0xc37c37 = _0x3348da => {
    const _0x1d4c7c = _0x3348da?.["bottleHelpers"] || _0x3348da?.["role"]?.["bottleHelpers"];
    if (!_0x1d4c7c) {
      return;
    }
    const _0x276b6c = _0x1d4c7c.helperStopTime;
    if (_0x276b6c && _0x276b6c > 0) {
      const _0xffcaa2 = Math.floor(Date.now() / 1000);
      const _0xa5e8c7 = _0x276b6c - _0xffcaa2;
      _0x386da5.bottleRemainingTime = Math.max(0, _0xa5e8c7);
      _0x386da5.bottleIsRunning = _0xa5e8c7 > 0;
      _0x386da5.bottleIsRunning && _0x5980c4();
    } else {
      _0x386da5.bottleRemainingTime = 0;
      _0x386da5.bottleIsRunning = false;
    }
    _0x3162a3();
  };
  const _0x5980c4 = () => {
    {
      if (_0x386da5.bottleTimer) {
        clearInterval(_0x386da5.bottleTimer);
      }
      _0x386da5.bottleTimer = setInterval(() => {
        if (_0x386da5.bottleRemainingTime > 0) {
          {
            _0x386da5.bottleRemainingTime--;
            _0x3162a3();
          }
        } else {
          clearInterval(_0x386da5.bottleTimer);
          _0x386da5.bottleTimer = null;
          _0x386da5.bottleIsRunning = false;
          _0x3162a3();
        }
      }, 1000);
    }
  };
  const _0x5f2f51 = () => {
    {
      const _0x7da1f2 = document.getElementById("qa-hangup-elapsed");
      const _0x5a3812 = document.getElementById("qa-hangup-time");
      if (_0x7da1f2) {
        _0x7da1f2.textContent = _0x3f961a(_0x386da5.hangupElapsedTime || 0);
      }
      if (_0x5a3812) {
        _0x5a3812.textContent = _0x3f961a(_0x386da5.hangupRemainingTime || 0);
      }
    }
  };
  const _0x1d1b31 = _0x575874 => {
    const _0x6cd65d = _0x575874?.["hangUp"] || _0x575874?.["role"]?.["hangUp"];
    if (!_0x6cd65d) {
      return;
    }
    const _0x1b3929 = Math.floor(Date.now() / 1000);
    const _0x1cfe4c = _0x6cd65d.lastTime || 0;
    const _0x4ce891 = _0x6cd65d.hangUpTime || 0;
    const _0x3e5a2f = _0x1b3929 - _0x1cfe4c;
    _0x3e5a2f <= _0x4ce891 ? (_0x386da5.hangupRemainingTime = Math.floor(_0x4ce891 - _0x3e5a2f), _0x386da5.hangupElapsedTime = Math.floor(_0x3e5a2f)) : (_0x386da5.hangupRemainingTime = 0, _0x386da5.hangupElapsedTime = _0x4ce891);
    _0x386da5.hangupRemainingTime > 0 && _0x1ca812();
    _0x5f2f51();
  };
  const _0x1ca812 = () => {
    if (_0x386da5.hangupTimer) {
      clearInterval(_0x386da5.hangupTimer);
    }
    _0x386da5.hangupTimer = setInterval(() => {
      _0x386da5.hangupRemainingTime > 0 ? (_0x386da5.hangupRemainingTime--, _0x386da5.hangupElapsedTime++, _0x5f2f51()) : (clearInterval(_0x386da5.hangupTimer), _0x386da5.hangupTimer = null);
    }, 1000);
  };
  const _0x50570f = () => {
    {
      const _0x1e3ec8 = document.getElementById("qa-tower-floor");
      const _0x4c00cb = document.getElementById("qa-tower-layer");
      const _0x58fe0c = document.getElementById("qa-tower-energy");
      const _0x17cecf = document.getElementById("qa-tower-status");
      const _0x211b9b = window.ROLE?.["tower"];
      const _0x34f30c = _0x211b9b?.["id"] || 0;
      const _0x2cde02 = Math.floor(_0x34f30c / 10) + 1;
      const _0x4b37be = _0x34f30c % 10 + 1;
      const _0x1a1db8 = _0x211b9b?.["energy"] ?? "--";
      if (_0x1e3ec8) {
        _0x1e3ec8.textContent = _0x2cde02;
      }
      if (_0x4c00cb) {
        _0x4c00cb.textContent = _0x4b37be;
      }
      if (_0x58fe0c) {
        _0x58fe0c.textContent = _0x1a1db8;
      }
      if (_0x17cecf) {
        if (_0x386da5.towerClimbing) {
          {
            _0x17cecf.textContent = "爬塔进行中...";
          }
        } else {
          _0x17cecf.textContent = "--";
        }
      }
    }
  };
  const _0x5c8702 = () => {
    _0x50570f();
  };
  const _0x59120d = _0xda93c2 => {
    const _0x345f0d = document.getElementById("qa-tower-status");
    if (_0x345f0d) {
      _0x345f0d.textContent = _0xda93c2 || "--";
    }
  };
  let _0x2fa24f = false;
  let _0x2d2450 = null;
  const _0x4acaf2 = async () => {
    try {
      {
        await _0x361aec("tower_getinfo", {}, "爬塔-获取信息");
        return window.ROLE?.["tower"]?.["energy"] ?? 0;
      }
    } catch (_0x2a81b4) {
      return window.ROLE?.["tower"]?.["energy"] ?? 0;
    }
  };
  const _0x44f959 = _0x45225b => {
    {
      if (_0x45225b === null || _0x45225b === undefined) {
        return null;
      }
      const _0x4523c8 = typeof _0x45225b === "string" ? Number(_0x45225b) : _0x45225b;
      return Number.isFinite(_0x4523c8) ? _0x4523c8 : null;
    }
  };
  const _0xeb4c66 = async _0x3c8b78 => {
    {
      try {
        {
          const _0x1b3e09 = _0x44f959(_0x3c8b78?.["battleData"]?.["options"]?.["towerId"]);
          if (_0x1b3e09 === null) {
            return;
          }
          const _0x557783 = _0x1b3e09 % 10;
          if (_0x557783 !== 0) {
            return;
          }
          const _0x102b4b = Math.floor(_0x1b3e09 / 10);
          await _0x186d8b(1500);
          const _0x2875c0 = window.ROLE?.["tower"]?.["reward"];
          if (!_0x2875c0 || !_0x2875c0[_0x102b4b]) {
            const _0x2f4150 = {
              rewardId: _0x102b4b
            };
            await _0x361aec("tower_claimreward", _0x2f4150, "爬塔-领取通关奖励");
            _0x30927d("成功领取第" + _0x102b4b + "层奖励", "success");
          }
        }
      } catch (_0x27de2e) {
        _0x30927d("领取爬塔奖励失败: " + (_0x27de2e.message || "未知错误"), "warning");
      }
    }
  };
  const _0xefad3f = async () => {
    if (_0x386da5.towerClimbing) {
      {
        _0x30927d("正在爬塔中", "warning");
        return;
      }
    }
    const _0x45dfe2 = await _0x4acaf2();
    if (_0x45dfe2 <= 0) {
      _0x30927d("体力不足", "warning");
      return;
    }
    _0x386da5.towerClimbing = true;
    _0x2fa24f = false;
    const _0x1378e4 = document.getElementById("qa-tower-loop-btn");
    const _0x18cc21 = document.getElementById("qa-tower-stop-btn");
    _0x1378e4 && (_0x1378e4.textContent = "爬塔中...", _0x1378e4.disabled = true);
    if (_0x18cc21) {
      _0x18cc21.style.display = "inline-block";
    }
    _0x2d2450 = setTimeout(() => {
      _0x2fa24f = true;
      _0x386da5.towerClimbing = false;
      _0x30927d("批量爬塔已超时自动停止", "info");
      _0x39e951();
    }, 60000);
    let _0x2a988e = 0;
    const _0x633c2c = 100;
    try {
      for (let _0x58b4db = 0; _0x58b4db < _0x633c2c; _0x58b4db++) {
        if (_0x2fa24f) {
          break;
        }
        _0x5c8702();
        const _0x7397ad = await _0x4acaf2();
        if (_0x7397ad <= 0) {
          _0x59120d("体力耗尽");
          break;
        }
        _0x59120d("第 " + (_0x2a988e + 1) + " 次爬塔中...");
        const _0x35fa65 = await _0x361aec("fight_starttower", {}, "爬塔-开始战斗");
        _0x2a988e++;
        await _0x186d8b(2000);
        await _0xeb4c66(_0x35fa65);
      }
      _0x30927d("已自动爬塔" + _0x2a988e + "次，体力已耗尽或达到上限", "success");
    } catch (_0x3ae16f) {
      {
        _0x30927d("批量爬塔失败: " + (_0x3ae16f.message || "未知错误"), "error");
      }
    }
    if (_0x2d2450) {
      clearTimeout(_0x2d2450);
      _0x2d2450 = null;
    }
    _0x386da5.towerClimbing = false;
    _0x39e951();
    _0x59120d("--");
    _0x5c8702();
  };
  const _0x156954 = () => {
    _0x2fa24f = true;
    _0x2d2450 && (clearTimeout(_0x2d2450), _0x2d2450 = null);
    _0x386da5.towerClimbing = false;
    _0x39e951();
    _0x59120d("已停止");
    _0x30927d("已手动停止爬塔", "info");
  };
  const _0x39e951 = () => {
    const _0x372240 = document.getElementById("qa-tower-loop-btn");
    const _0x11d740 = document.getElementById("qa-tower-stop-btn");
    _0x372240 && (_0x372240.textContent = "开始爬塔", _0x372240.disabled = false);
    if (_0x11d740) {
      _0x11d740.style.display = "inline-block";
    }
  };
  const _0x213c35 = (_0x4acd25, _0x3e7210) => {
    {
      const _0x50d83f = _0x386da5.roleInfo?.["heroes"] || _0x386da5.allHeroesData;
      const _0x3133e2 = _0x4af3f0(_0x50d83f, _0x4acd25);
      const _0x67579a = _0x4af3f0(_0x3133e2?.["equipment"], _0x3e7210);
      return _0x67579a?.["quenches"] || _0x4af3f0(_0x67579a, "quenches") || {};
    }
  };
  const _0x21c0e1 = async () => {
    {
      let _0x182817 = _0x386da5.roleInfo?.["heroes"];
      if (!_0x182817) {
        {
          try {
            const _0x1546ea = await _0x54b8ca();
            _0x182817 = _0x1546ea?.["heroes"];
          } catch (_0x4ee1b7) {
            {
              _0x182817 = null;
            }
          }
        }
      }
      if (!_0x182817) {
        {
          _0x30927d("数据未就绪", "warning");
          return null;
        }
      }
      if (!_0x386da5.selectedHeroId || !_0x386da5.selectedPart) {
        {
          _0x30927d("请先选择英雄和部位", "warning");
          return null;
        }
      }
      if (_0x386da5.selectedPart === 1) {
        const _0x2c4b34 = _0x4af3f0(_0x182817, _0x386da5.selectedHeroId);
        const _0x119615 = _0x4af3f0(_0x2c4b34?.["equipment"], 1);
        const _0x346d85 = _0x119615?.["level"] || 0;
        if (_0x346d85 < 4000) {
          _0x30927d("武器等级需达到4000级", "warning");
          return null;
        }
      }
      try {
        {
          const _0x119a96 = _0x213c35(_0x386da5.selectedHeroId, _0x386da5.selectedPart);
          const _0x1e1922 = {};
          const _0x860f87 = _0x358a2a(_0x119a96);
          for (const _0x4b6f61 of _0x860f87) {
            const _0x3f813a = _0x4af3f0(_0x119a96, _0x4b6f61);
            _0x1e1922[_0x4b6f61] = {
              attrId: _0x3f813a?.["attrId"] || 0,
              attrNum: _0x3f813a?.["attrNum"] || 0,
              colorId: _0x3f813a?.["colorId"] || 0,
              isLocked: _0x386da5.lockedSlots.includes(Number(_0x4b6f61))
            };
          }
          const _0x37663e = Object.values(_0x1e1922).some(_0x30af40 => _0x30af40.colorId >= 5);
          let _0xda793c = 0;
          if (_0x37663e) {
            const _0x3826c2 = {
              heroId: _0x386da5.selectedHeroId,
              part: _0x386da5.selectedPart,
              quenchId: 0,
              quenches: _0x1e1922
            };
            const _0xe37868 = await _0x361aec("equipment_confirm", _0x3826c2, "quench.js - doQuench (获取seed)");
            if (_0xe37868?.["success"] === false) {
              throw new Error(_0xe37868?.["message"] || "获取seed失败");
            }
            const _0x707de1 = _0xe37868?.["role"] || _0xe37868;
            _0xda793c = _0x707de1?.["heroes"]?.[String(_0x386da5.selectedHeroId)]?.["equipment"]?.[String(_0x386da5.selectedPart)]?.["seed"] || 0;
            _0x1e6f53("seedResult.role", "heroes[" + _0x386da5.selectedHeroId + "].equipment[" + _0x386da5.selectedPart + "].seed", _0xda793c);
          }
          const _0x3803d2 = {
            heroId: _0x386da5.selectedHeroId,
            part: _0x386da5.selectedPart,
            quenchId: 0,
            quenches: _0x1e1922,
            seed: _0xda793c,
            skipOrange: false
          };
          const _0x1063ed = await _0x361aec("equipment_quench", _0x3803d2, "quench.js - doQuench (执行淬炼)");
          if (_0x1063ed?.["success"] === false) {
            throw new Error(_0x1063ed?.["message"] || "淬炼失败");
          }
          _0x439352("quench", "equipment_quench", _0x1063ed);
          _0x386da5.quenchCount++;
          const _0x16ea65 = document.getElementById("qa-quench-count");
          if (_0x16ea65) {
            _0x16ea65.textContent = _0x386da5.quenchCount;
          }
          const _0x3f3f9e = _0x1063ed?.["role"] || _0x1063ed;
          const _0x51c428 = _0x386da5.selectedHeroId;
          const _0x531be8 = _0x386da5.selectedPart;
          if (_0x3f3f9e?.["heroes"] && _0x386da5.roleInfo?.["heroes"]) {
            const _0x14f502 = _0x386da5.roleInfo.heroes;
            const _0x2a56eb = _0x3f3f9e.heroes[String(_0x51c428)];
            const _0x4dacfc = _0x4af3f0(_0x14f502, _0x51c428);
            if (_0x4dacfc && _0x2a56eb?.["equipment"]) {
              const _0x3ee0ef = _0x2a56eb.equipment[String(_0x531be8)];
              if (_0x3ee0ef) {
                const _0x1a5c67 = _0x4af3f0(_0x4dacfc?.["equipment"], _0x531be8) || {};
                if (_0x3ee0ef.quenches) {
                  {
                    const _0x4bf1d8 = {
                      ...(_0x1a5c67.quenches || {})
                    };
                    const _0xcdead9 = _0x4bf1d8;
                    for (const [_0x17452c, _0x3e0d2d] of Object.entries(_0x3ee0ef.quenches)) {
                      {
                        _0xcdead9[_0x17452c] = {
                          ...(_0xcdead9[_0x17452c] || {}),
                          ..._0x3e0d2d
                        };
                      }
                    }
                    _0x1a5c67.quenches = _0xcdead9;
                    _0x27716e(_0xcdead9);
                  }
                }
                if (_0x3ee0ef.quenchTimes !== undefined) {
                  _0x1a5c67.quenchTimes = _0x3ee0ef.quenchTimes;
                }
                if (_0x3ee0ef.quenchAttackExt !== undefined) {
                  _0x1a5c67.quenchAttackExt = _0x3ee0ef.quenchAttackExt;
                }
                if (_0x3ee0ef.quenchHpExt !== undefined) {
                  _0x1a5c67.quenchHpExt = _0x3ee0ef.quenchHpExt;
                }
                if (_0x3ee0ef.quenchDefenseExt !== undefined) {
                  _0x1a5c67.quenchDefenseExt = _0x3ee0ef.quenchDefenseExt;
                }
                if (_0x3ee0ef.seed !== undefined) {
                  _0x1a5c67.seed = _0x3ee0ef.seed;
                }
                if (!_0x4dacfc.equipment) {
                  _0x4dacfc.equipment = {};
                }
                _0x4dacfc.equipment[_0x531be8] = _0x1a5c67;
                const _0x3dc388 = document.getElementById("qa-equip-stats");
                const _0x59d91c = ["攻击", "血量", "防御", "血量"][_0x531be8 - 1] || "加成";
                const _0x591d30 = _0x531be8 === 1 ? "quenchAttackExt" : _0x531be8 === 3 ? "quenchDefenseExt" : "quenchHpExt";
                const _0x57924f = _0x1a5c67[_0x591d30] ?? 0;
                const _0x2fa5aa = _0x1a5c67.quenchTimes ?? 0;
                _0x3dc388 && (_0x3dc388.innerHTML = ["<div class=\"stat-item\"><span class=\"stat-label\">" + _0x59d91c + "加成</span><span class=\"stat-value\">+" + _0x57924f + "</span></div>", "<div class=\"stat-item\"><span class=\"stat-label\">淬炼次数</span><span class=\"stat-value\">" + _0x2fa5aa + "</span></div>"].join(""));
              }
            }
          }
          if (_0x3f3f9e?.["items"] && _0x386da5.roleInfo) {
            if (!_0x386da5.roleInfo.items) {
              _0x386da5.roleInfo.items = {};
            }
            for (const [_0x18cad5, _0x113c6b] of Object.entries(_0x3f3f9e.items)) {
              const _0x5ab9d6 = _0x4af3f0(_0x386da5.roleInfo.items, _0x18cad5);
              _0x386da5.roleInfo.items[_0x18cad5] = _0x5ab9d6 ? {
                ..._0x5ab9d6,
                ...(_0x113c6b || {})
              } : _0x113c6b;
            }
            _0x386da5.items = _0x386da5.roleInfo.items;
            _0xe12aee(_0x386da5.items, "jade");
          }
          return _0x1063ed;
        }
      } catch (_0x2296a9) {
        _0x30927d("淬炼失败: " + _0x2296a9.message, "error");
        return null;
      }
    }
  };
  const _0x44bb03 = _0xba574c => {
    if (!_0xba574c) {
      return false;
    }
    const _0x8e0b6f = _0xba574c?.["role"] || _0xba574c;
    const _0x1e2c09 = _0x8e0b6f?.["heroes"]?.[String(_0x386da5.selectedHeroId)];
    const _0x3b3058 = _0x1e2c09?.["equipment"]?.[String(_0x386da5.selectedPart)];
    const _0x262db3 = _0x3b3058?.["quenches"];
    if (!_0x262db3) {
      return false;
    }
    for (const _0x26a8c9 of Object.values(_0x262db3)) {
      {
        if (_0x26a8c9.colorId && _0x26a8c9.colorId >= 5) {
          return true;
        }
      }
    }
    return false;
  };
  const _0x4964bd = () => {
    {
      const _0xa172bf = document.getElementById("qa-target-list");
      if (!_0xa172bf) {
        return [];
      }
      const _0x33d3dd = Array.from(_0xa172bf.querySelectorAll(".qa-target-row"));
      const _0x10227c = [];
      for (const _0xf8ea83 of _0x33d3dd) {
        const _0x2b9d14 = _0xf8ea83.querySelector(".qa-target-attr");
        const _0x202a9f = _0xf8ea83.querySelector(".qa-target-value");
        const _0x26d053 = Number(_0x2b9d14?.["value"]);
        const _0x64302b = Number(_0x202a9f?.["value"]);
        if (!Number.isFinite(_0x26d053) || _0x26d053 <= 0) {
          continue;
        }
        if (!Number.isFinite(_0x64302b) || _0x64302b <= 0) {
          continue;
        }
        const _0x5df7a7 = {
          attrId: _0x26d053,
          value: _0x64302b
        };
        _0x10227c.push(_0x5df7a7);
      }
      const _0x310b4b = new Map();
      for (const _0x32759a of _0x10227c) {
        {
          const _0x2a4b2e = _0x310b4b.get(_0x32759a.attrId);
          _0x310b4b.set(_0x32759a.attrId, _0x2a4b2e ? Math.min(_0x2a4b2e, _0x32759a.value) : _0x32759a.value);
        }
      }
      return Array.from(_0x310b4b.entries()).map(([_0x37fc34, _0x3e0fab]) => ({
        attrId: _0x37fc34,
        value: _0x3e0fab
      }));
    }
  };
  const _0x132cee = _0x1e61fd => {
    {
      const _0x461efe = document.querySelector("button[data-action=\"auto-target-add\"]");
      if (_0x461efe) {
        _0x461efe.disabled = _0x1e61fd;
      }
      const _0x22d634 = document.getElementById("qa-target-list");
      if (!_0x22d634) {
        return;
      }
      for (const _0x14eefc of _0x22d634.querySelectorAll("select, input, button[data-action=\"auto-target-remove\"]")) {
        {
          _0x14eefc.disabled = _0x1e61fd;
        }
      }
    }
  };
  const _0x39c4 = _0x3e16cb => {
    {
      if (!_0x3e16cb) {
        return false;
      }
      const _0x58cefa = _0x3e16cb?.["role"] || _0x3e16cb;
      const _0x126620 = _0x58cefa?.["heroes"]?.[String(_0x386da5.selectedHeroId)];
      const _0x3b742b = _0x126620?.["equipment"]?.[String(_0x386da5.selectedPart)];
      const _0x29cc85 = _0x3b742b?.["quenches"];
      if (!_0x29cc85 || Object.keys(_0x29cc85).length === 0) {
        return false;
      }
      const _0x2085d0 = Array.isArray(_0x386da5.targetTargets) && _0x386da5.targetTargets.length ? _0x386da5.targetTargets : null;
      const _0x261d90 = Array.isArray(_0x386da5.targetAttrId) ? _0x386da5.targetAttrId.map(_0x44e107 => Number(_0x44e107)).filter(_0x24944f => Number.isFinite(_0x24944f) && _0x24944f > 0) : [Number(_0x386da5.targetAttrId)].filter(_0x51599f => Number.isFinite(_0x51599f) && _0x51599f > 0);
      const _0x46b29f = Number(_0x386da5.targetAttrValue) || 0;
      const _0x39a808 = _0x2085d0 ? _0x2085d0 : _0x261d90.length && _0x46b29f ? _0x261d90.map(_0x4e1a71 => ({
        attrId: _0x4e1a71,
        value: _0x46b29f
      })) : [];
      if (_0x39a808.length === 0) {
        return false;
      }
      const _0x3ad3c0 = _0x4af3f0(_0x4af3f0(_0x386da5.roleInfo?.["heroes"], _0x386da5.selectedHeroId)?.["equipment"], _0x386da5.selectedPart) || {};
      const _0x59f4cb = {
        ..._0x3ad3c0.quenches
      };
      const _0x4ac768 = _0x59f4cb;
      for (const [_0x28e723, _0x4e5eb5] of Object.entries(_0x29cc85)) {
        _0x4ac768[_0x28e723] = {
          ...(_0x4ac768[_0x28e723] || {}),
          ..._0x4e5eb5
        };
      }
      const _0x24a66b = new Map();
      for (const _0x12afd4 of Object.values(_0x4ac768)) {
        {
          const _0xa821c3 = Number(_0x12afd4.attrId);
          const _0x5f2be3 = Number(_0x12afd4.attrNum) || 0;
          if (!_0xa821c3) {
            continue;
          }
          const _0x492690 = _0x24a66b.get(_0xa821c3) || 0;
          if (_0x5f2be3 > _0x492690) {
            _0x24a66b.set(_0xa821c3, _0x5f2be3);
          }
        }
      }
      for (const _0x397d7b of _0x39a808) {
        const _0x2ca5c2 = _0x24a66b.get(Number(_0x397d7b.attrId)) || 0;
        if (_0x2ca5c2 >= Number(_0x397d7b.value)) {
          return true;
        }
      }
      return false;
    }
  };
  const _0x582877 = () => {
    {
      if (_0x386da5.continuousQuenching) {
        return;
      }
      if (_0x386da5.autoQuenching) {
        _0x30927d("请先停止自动淬炼", "warning");
        return;
      }
      _0x386da5.continuousQuenching = true;
      document.getElementById("qa-quench-continuous").style.display = "none";
      document.getElementById("qa-quench-stop").style.display = "inline-block";
      document.getElementById("qa-quench-once").disabled = true;
      const _0x32ca87 = document.getElementById("qa-auto-start");
      if (_0x32ca87) {
        _0x32ca87.disabled = true;
      }
      _0x30927d("开始连续淬炼", "info");
      const _0x200039 = {
        heroId: _0x386da5.selectedHeroId,
        part: _0x386da5.selectedPart
      };
      _0x1e6f53("quench.js", "startContinuousQuench", _0x200039);
      const _0x461ed0 = async () => {
        if (!_0x386da5.continuousQuenching) {
          return;
        }
        try {
          const _0x5b0d10 = await _0x21c0e1();
          if (_0x5b0d10 && _0x44bb03(_0x5b0d10)) {
            _0x2a8c83();
            _0x30927d("已出橙色或以上属性，停止淬炼", "success");
            _0x1e6f53("quench.js", "stopContinuousQuench", "检测到橙色属性，自动停止");
            return;
          }
          const _0x20a2e3 = Math.floor(Math.random() * 150) + 350;
          await new Promise(_0xd44cfb => setTimeout(_0xd44cfb, _0x20a2e3));
          if (_0x386da5.continuousQuenching) {
            _0x386da5.continuousTimer = setTimeout(_0x461ed0, 0);
          }
        } catch (_0xba1467) {
          _0x2a8c83();
        }
      };
      _0x461ed0();
    }
  };
  const _0x2a8c83 = () => {
    _0x386da5.continuousQuenching = false;
    _0x386da5.continuousTimer && (clearTimeout(_0x386da5.continuousTimer), _0x386da5.continuousTimer = null);
    document.getElementById("qa-quench-continuous").style.display = "inline-block";
    document.getElementById("qa-quench-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    const _0x4ae901 = document.getElementById("qa-auto-start");
    if (_0x4ae901) {
      _0x4ae901.disabled = false;
    }
    _0x30927d("已停止连续淬炼", "info");
  };
  const _0xdfac54 = () => {
    if (_0x386da5.continuousQuenching) {
      _0x30927d("请先停止连续淬炼", "warning");
      return;
    }
    const _0x1c1e94 = _0x4964bd();
    if (!_0x1c1e94.length) {
      {
        _0x30927d("请先设置目标属性", "warning");
        return;
      }
    }
    _0x386da5.targetTargets = _0x1c1e94;
    _0x386da5.targetAttrId = null;
    _0x386da5.targetAttrValue = null;
    _0x386da5.autoQuenching = true;
    document.getElementById("qa-auto-start").style.display = "none";
    document.getElementById("qa-auto-stop").style.display = "inline-block";
    document.getElementById("qa-quench-once").disabled = true;
    document.getElementById("qa-quench-continuous").disabled = true;
    _0x132cee(true);
    const _0x1f78b8 = _0x1c1e94.map(_0x8cfbc1 => (_0xab9b82[String(_0x8cfbc1.attrId)] || "属性" + _0x8cfbc1.attrId) + " >= " + _0x8cfbc1.value).join(" 或 ");
    _0x30927d("开始自动淬炼: " + _0x1f78b8, "info");
    _0x1e6f53("quench.js", "startAutoQuench", {
      heroId: _0x386da5.selectedHeroId,
      part: _0x386da5.selectedPart,
      targets: _0x1c1e94.map(_0x54b071 => ({
        attrName: _0xab9b82[String(_0x54b071.attrId)] || "属性" + _0x54b071.attrId,
        attrId: _0x54b071.attrId,
        targetValue: _0x54b071.value
      }))
    });
    const _0x4950a6 = async () => {
      {
        if (!_0x386da5.autoQuenching) {
          return;
        }
        try {
          const _0x249904 = await _0x21c0e1();
          if (_0x249904 && _0x39c4(_0x249904)) {
            _0x56fb7a();
            _0x30927d("已达到目标属性，停止淬炼", "success");
            _0x1e6f53("quench.js", "stopAutoQuench", "达到目标属性，自动停止");
            return;
          }
          const _0x13360b = Math.floor(Math.random() * 150) + 350;
          await new Promise(_0x5890e2 => setTimeout(_0x5890e2, _0x13360b));
          if (_0x386da5.autoQuenching) {
            _0x386da5.autoTimer = setTimeout(_0x4950a6, 0);
          }
        } catch (_0x1009f0) {
          _0x56fb7a();
        }
      }
    };
    _0x4950a6();
  };
  const _0x56fb7a = () => {
    {
      _0x386da5.autoQuenching = false;
      if (_0x386da5.autoTimer) {
        {
          clearTimeout(_0x386da5.autoTimer);
          _0x386da5.autoTimer = null;
        }
      }
      document.getElementById("qa-auto-start").style.display = "inline-block";
      document.getElementById("qa-auto-stop").style.display = "none";
      document.getElementById("qa-quench-once").disabled = false;
      document.getElementById("qa-quench-continuous").disabled = false;
      _0x132cee(false);
      _0x30927d("已停止自动淬炼", "info");
    }
  };
  const _0x428295 = () => {
    if (_0x386da5.continuousQuenching || _0x386da5.autoQuenching) {
      {
        _0x30927d("请先停止其他淬炼任务", "warning");
        return;
      }
    }
    const _0x40af01 = document.getElementById("qa-quench-times");
    let _0x5d5870 = parseInt(_0x40af01?.["value"], 10);
    if (!Number.isFinite(_0x5d5870) || _0x5d5870 < 10) {
      _0x5d5870 = 10;
    }
    if (_0x5d5870 > 10000) {
      _0x5d5870 = 10000;
    }
    _0x40af01.value = _0x5d5870;
    _0x386da5.timesQuenching = true;
    _0x386da5.timesTarget = _0x5d5870;
    _0x386da5.timesCount = 0;
    document.getElementById("qa-times-start").style.display = "none";
    document.getElementById("qa-times-stop").style.display = "inline-block";
    document.getElementById("qa-quench-once").disabled = true;
    document.getElementById("qa-quench-continuous").disabled = true;
    const _0x2ab9dc = document.getElementById("qa-auto-start");
    if (_0x2ab9dc) {
      _0x2ab9dc.disabled = true;
    }
    _0x40af01.disabled = true;
    const _0x2bd2b9 = document.getElementById("qa-times-progress");
    if (_0x2bd2b9) {
      _0x2bd2b9.textContent = "0 / " + _0x5d5870;
    }
    _0x30927d("开始洗练 " + _0x5d5870 + " 次", "info");
    const _0x51dba6 = async () => {
      if (!_0x386da5.timesQuenching) {
        return;
      }
      try {
        const _0x23ba69 = await _0x21c0e1();
        _0x386da5.timesCount++;
        if (_0x2bd2b9) {
          _0x2bd2b9.textContent = _0x386da5.timesCount + " / " + _0x386da5.timesTarget;
        }
        if (_0x386da5.timesCount >= _0x386da5.timesTarget) {
          _0x50641e();
          _0x30927d("已完成 " + _0x386da5.timesTarget + " 次洗练", "success");
          return;
        }
        const _0x353d8a = Math.floor(Math.random() * 150) + 350;
        await new Promise(_0xbc567b => setTimeout(_0xbc567b, _0x353d8a));
        if (_0x386da5.timesQuenching) {
          _0x386da5.timesTimer = setTimeout(_0x51dba6, 0);
        }
      } catch (_0xd6c04b) {
        {
          _0x50641e();
        }
      }
    };
    _0x51dba6();
  };
  const _0x50641e = () => {
    _0x386da5.timesQuenching = false;
    if (_0x386da5.timesTimer) {
      {
        clearTimeout(_0x386da5.timesTimer);
        _0x386da5.timesTimer = null;
      }
    }
    document.getElementById("qa-times-start").style.display = "inline-block";
    document.getElementById("qa-times-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    document.getElementById("qa-quench-continuous").disabled = false;
    const _0x2fd1cb = document.getElementById("qa-auto-start");
    if (_0x2fd1cb) {
      _0x2fd1cb.disabled = false;
    }
    const _0x2aaaba = document.getElementById("qa-quench-times");
    if (_0x2aaaba) {
      _0x2aaaba.disabled = false;
    }
    _0x30927d("已停止洗练", "info");
  };
  const _0x2eaf22 = () => {
    {
      const _0x159e76 = _0x386da5.theme === "dark";
      const _0xcacaf = {
        bg: _0x159e76 ? "#1a1a2e" : "#ffffff",
        text: _0x159e76 ? "#f9fafb" : "#1f2937",
        textSecondary: _0x159e76 ? "#9ca3af" : "#6b7280",
        headerBg: _0x159e76 ? "#374151" : "#f3f4f6",
        headerText: _0x159e76 ? "#d1d5db" : "#374151",
        border: _0x159e76 ? "#4b5563" : "#e5e7eb",
        zebraStripe: _0x159e76 ? "#2d2d44" : "#f9fafb",
        red: "#ef4444",
        pink: "#ec4899",
        blue: "#3b82f6"
      };
      return _0xcacaf;
    }
  };
  let _0x1acaa3 = null;
  const _0x37bf8f = _0x4e05e4 => {
    const _0x4af69d = Number(_0x4e05e4 || 0);
    if (_0x4af69d >= 1000000000000) {
      return (_0x4af69d / 1000000000000).toFixed(2) + "兆";
    }
    if (_0x4af69d >= 100000000) {
      return (_0x4af69d / 100000000).toFixed(2) + "亿";
    }
    if (_0x4af69d >= 10000) {
      return (_0x4af69d / 10000).toFixed(2) + "万";
    }
    return String(_0x4af69d);
  };
  const _0x51461f = _0x3f6885 => {
    if (_0x3f6885 === 1) {
      return "团长";
    }
    if (_0x3f6885 === 2) {
      return "副团长";
    }
    return "成员";
  };
  const _0x364ad3 = _0xe11482 => {
    _0x1acaa3 = _0xe11482;
    const _0x448a28 = document.getElementById("qa-club-content");
    const _0x2fb1b3 = document.getElementById("qa-club-status");
    if (!_0x448a28) {
      return;
    }
    const _0x3bf2fb = _0xe11482?.["info"];
    if (!_0x3bf2fb) {
      _0x448a28.innerHTML = "<div class=\"helper-text\">暂无俱乐部</div>";
      _0x2fb1b3 && (_0x2fb1b3.textContent = "未加入", _0x2fb1b3.className = "club-status-badge");
      return;
    }
    _0x2fb1b3 && (_0x2fb1b3.textContent = "已加入", _0x2fb1b3.className = "club-status-badge active");
    const _0x3c976d = Object.values(_0x3bf2fb.members || {});
    _0x3c976d.find(_0x30819d => Number(_0x30819d.roleId) === Number(_0x3bf2fb.leaderId));
    const _0x8bd52b = [..._0x3c976d].sort((_0x3cefff, _0x36221d) => Number(_0x36221d.power || _0x36221d.custom?.["s_power"] || 0) - Number(_0x3cefff.power || _0x3cefff.custom?.["s_power"] || 0)).slice(0, 30);
    const _0x1959b7 = _0x37bf8f(_0x3bf2fb.power || 0);
    const _0x515b0a = _0x3c976d.length;
    const _0xe98fda = _0x3bf2fb.redQuenchCnt || 0;
    const _0x270c4a = _0x37bf8f(_0x3bf2fb.currentBoss?.["currentHP"] || 0);
    _0x448a28.innerHTML = "\n    <div class=\"club-overview\">\n      <div class=\"club-header-row\">\n        <div class=\"club-avatar\">\n          <img src=\"" + (_0x3bf2fb.logo || "") + "\" onerror=\"this.style.display='none'\" alt=\"\">\n        </div>\n        <div class=\"club-meta\">\n          <div class=\"club-name\">" + (_0x3bf2fb.name || "未知俱乐部") + "</div>\n          <div class=\"club-sub\">ID " + (_0x3bf2fb.id || "-") + " · Lv." + (_0x3bf2fb.level || 1) + " · 服务器 " + (_0x3bf2fb.serverId || "--") + "</div>\n        </div>\n      </div>\n      <div class=\"club-stats-grid\">\n        <div class=\"club-stat-item\"><div class=\"stat-label\">战力</div><div class=\"stat-value\">" + _0x1959b7 + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">成员数</div><div class=\"stat-value\">" + _0x515b0a + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">红粹</div><div class=\"stat-value\">" + _0xe98fda + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">Boss血量</div><div class=\"stat-value\">" + _0x270c4a + "</div></div>\n      </div>\n    </div>\n    <div class=\"club-members-section\">\n      <div class=\"section-title\">成员列表 (前30)</div>\n      <div class=\"club-members-list\" id=\"qa-club-members\">\n        " + _0x8bd52b.map(_0x584435 => "\n          <div class=\"member-row\">\n            <div class=\"member-left\">\n              <img src=\"" + (_0x584435.headImg || "") + "\" onerror=\"this.style.display='none'\" class=\"member-avatar\">\n              <span class=\"member-name\">" + _0x584435.name + "</span>\n            </div>\n            <div class=\"member-right\">\n              <span class=\"member-power\">" + _0x37bf8f(_0x584435.power || _0x584435.custom?.["s_power"] || 0) + "</span>\n              <span class=\"member-red\">" + (_0x584435.custom?.["red_quench_cnt"] || 0) + "红</span>\n              <span class=\"member-job " + (_0x584435.job === 1 ? "job-leader" : _0x584435.job === 2 ? "job-vice" : "") + "\">" + _0x51461f(_0x584435.job) + "</span>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
  };
  const _0x308613 = async () => {
    {
      try {
        const _0x461b61 = await _0x361aec("legion_getinfo", {});
        _0x1ddb84("[俱乐部] 获取成功", "success");
        _0x1ddb84(_0x461b61, "data");
        _0x364ad3(_0x461b61);
        _0x30927d("获取俱乐部信息成功", "success");
        return _0x461b61;
      } catch (_0x1ba36a) {
        {
          _0x1ddb84("[俱乐部] 获取失败: " + _0x1ba36a.message, "error");
          _0x30927d("获取俱乐部信息失败: " + _0x1ba36a.message, "error");
          return null;
        }
      }
    }
  };
  const _0x20d615 = async () => {
    try {
      {
        const _0x202c3c = await _0x361aec("legion_signin", {});
        _0x1ddb84("[俱乐部] 签到成功", "success");
        _0x1ddb84(_0x202c3c, "data");
        _0x30927d("俱乐部签到成功", "success");
      }
    } catch (_0x4551ad) {
      _0x1ddb84("[俱乐部] 签到失败: " + _0x4551ad.message, "error");
      _0x30927d("俱乐部签到失败: " + _0x4551ad.message, "error");
    }
  };
  const _0x101902 = _0x4602fc => {
    {
      return new Promise(_0x810e21 => {
        if (!_0x4602fc) {
          {
            _0x810e21(null);
            return;
          }
        }
        const _0x6a03bc = new Image();
        _0x6a03bc.crossOrigin = "anonymous";
        _0x6a03bc.onload = () => _0x810e21(_0x6a03bc);
        _0x6a03bc.onerror = () => _0x810e21(null);
        _0x6a03bc.src = _0x4602fc;
      });
    }
  };
  const _0x376be3 = async () => {
    if (!_0x1acaa3?.["info"]) {
      _0x30927d("暂无俱乐部数据", "warning");
      return;
    }
    _0x30927d("正在加载头像...", "info", 2000);
    const _0x647038 = _0x2eaf22();
    const _0x6d6f66 = _0x1acaa3.info;
    const _0x4fdde6 = Object.values(_0x6d6f66.members || {});
    const _0x5c450d = [..._0x4fdde6].sort((_0x1d99da, _0x2a5329) => Number(_0x2a5329.power || _0x2a5329.custom?.["s_power"] || 0) - Number(_0x1d99da.power || _0x1d99da.custom?.["s_power"] || 0));
    const _0x3a4ce0 = await Promise.all(_0x5c450d.map(_0x7d5c12 => _0x101902(_0x7d5c12.headImg)));
    const _0x53800f = document.createElement("canvas");
    const _0x1f489e = _0x53800f.getContext("2d");
    const _0x4fc30f = 2;
    const _0x3a32d8 = 20;
    const _0x497677 = 32;
    const _0x4a2b5f = 24;
    const _0x4740b1 = 100;
    const _0x3e24bd = 30;
    const _0x22f464 = ["排名", "头像", "昵称", "战力", "红粹", "职位"];
    const _0x25389d = [50, 40, 140, 110, 70, 70];
    const _0x69e958 = _0x25389d.reduce((_0xf8ee0e, _0x214602) => _0xf8ee0e + _0x214602, 0) + _0x3a32d8 * 2;
    const _0x39898a = _0x4740b1 + (_0x5c450d.length + 1) * _0x497677 + _0x3e24bd + _0x3a32d8 * 2;
    _0x53800f.width = _0x69e958 * _0x4fc30f;
    _0x53800f.height = _0x39898a * _0x4fc30f;
    _0x1f489e.scale(_0x4fc30f, _0x4fc30f);
    _0x1f489e.fillStyle = _0x647038.bg;
    _0x1f489e.fillRect(0, 0, _0x69e958, _0x39898a);
    _0x1f489e.fillStyle = _0x647038.text;
    _0x1f489e.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x1f489e.fillText(_0x6d6f66.name || "俱乐部", _0x3a32d8, _0x3a32d8 + 24);
    _0x1f489e.fillStyle = _0x647038.textSecondary;
    _0x1f489e.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x1f489e.fillText("ID " + _0x6d6f66.id + " · Lv." + _0x6d6f66.level + " · 服务器 " + (_0x6d6f66.serverId || "--"), _0x3a32d8, _0x3a32d8 + 48);
    _0x1f489e.fillText("战力: " + _0x37bf8f(_0x6d6f66.power || 0) + " | 成员: " + _0x4fdde6.length + " | 红粹: " + (_0x6d6f66.redQuenchCnt || 0), _0x3a32d8, _0x3a32d8 + 70);
    const _0x304ce8 = _0x4740b1;
    _0x1f489e.fillStyle = _0x647038.headerBg;
    _0x1f489e.fillRect(_0x3a32d8, _0x304ce8, _0x69e958 - _0x3a32d8 * 2, _0x497677);
    _0x1f489e.fillStyle = _0x647038.headerText;
    _0x1f489e.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x1e184f = _0x3a32d8;
    _0x22f464.forEach((_0x1aee6c, _0x3bb036) => {
      _0x1f489e.fillText(_0x1aee6c, _0x1e184f + 8, _0x304ce8 + 21);
      _0x1e184f += _0x25389d[_0x3bb036];
    });
    _0x1f489e.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x5c450d.forEach((_0x239beb, _0x385062) => {
      const _0x5f0e32 = _0x304ce8 + (_0x385062 + 1) * _0x497677;
      _0x385062 % 2 === 1 && (_0x1f489e.fillStyle = _0x647038.zebraStripe, _0x1f489e.fillRect(_0x3a32d8, _0x5f0e32, _0x69e958 - _0x3a32d8 * 2, _0x497677));
      _0x1f489e.fillStyle = _0x647038.text;
      let _0x1b6198 = _0x3a32d8;
      _0x1f489e.fillText(String(_0x385062 + 1), _0x1b6198 + 8, _0x5f0e32 + 21);
      _0x1b6198 += _0x25389d[0];
      const _0x282f89 = _0x3a4ce0[_0x385062];
      if (_0x282f89) {
        const _0x22e81e = _0x1b6198 + (_0x25389d[1] - _0x4a2b5f) / 2;
        const _0x3ecf52 = _0x5f0e32 + (_0x497677 - _0x4a2b5f) / 2;
        _0x1f489e.save();
        _0x1f489e.beginPath();
        _0x1f489e.arc(_0x22e81e + _0x4a2b5f / 2, _0x3ecf52 + _0x4a2b5f / 2, _0x4a2b5f / 2, 0, Math.PI * 2);
        _0x1f489e.closePath();
        _0x1f489e.clip();
        _0x1f489e.drawImage(_0x282f89, _0x22e81e, _0x3ecf52, _0x4a2b5f, _0x4a2b5f);
        _0x1f489e.restore();
      }
      _0x1b6198 += _0x25389d[1];
      _0x1f489e.fillText(_0x239beb.name || "-", _0x1b6198 + 8, _0x5f0e32 + 21);
      _0x1b6198 += _0x25389d[2];
      _0x1f489e.fillText(_0x37bf8f(_0x239beb.power || _0x239beb.custom?.["s_power"] || 0), _0x1b6198 + 8, _0x5f0e32 + 21);
      _0x1b6198 += _0x25389d[3];
      _0x1f489e.fillStyle = _0x647038.red;
      _0x1f489e.fillText((_0x239beb.custom?.["red_quench_cnt"] || 0) + "红", _0x1b6198 + 8, _0x5f0e32 + 21);
      _0x1b6198 += _0x25389d[4];
      if (_0x239beb.job === 1) {
        _0x1f489e.fillStyle = _0x647038.red;
      } else {
        if (_0x239beb.job === 2) {
          _0x1f489e.fillStyle = _0x647038.pink;
        } else {
          {
            _0x1f489e.fillStyle = _0x647038.blue;
          }
        }
      }
      _0x1f489e.fillText(_0x51461f(_0x239beb.job), _0x1b6198 + 8, _0x5f0e32 + 21);
      _0x1f489e.fillStyle = _0x647038.text;
    });
    _0x1f489e.strokeStyle = _0x647038.border;
    _0x1f489e.lineWidth = 1;
    _0x1f489e.strokeRect(_0x3a32d8, _0x304ce8, _0x69e958 - _0x3a32d8 * 2, (_0x5c450d.length + 1) * _0x497677);
    const _0x48978b = new Date().toLocaleString("zh-CN");
    _0x1f489e.fillStyle = _0x647038.textSecondary;
    _0x1f489e.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x1f489e.fillText("导出时间: " + _0x48978b, _0x3a32d8, _0x39898a - _0x3a32d8);
    await _0x4410da(_0x53800f, "俱乐部_" + _0x6d6f66.name + "_" + _0x48978b.replace(/[/:]/g, "-") + ".png");
    _0x30927d("俱乐部信息导出成功", "success");
  };
  const _0x376876 = {
    __proto__: null,
    clubSignIn: _0x20d615,
    exportClubImage: _0x376be3,
    fetchClubInfo: _0x308613,
    renderClubInfo: _0x364ad3
  };
  var _0x1557b9 = Object.freeze(_0x376876);
  let _0x4c567c = null;
  const _0x297518 = {};
  const _0x4ce37a = () => {
    const _0x31feeb = new Date();
    const _0x37c0f5 = _0x31feeb.getDay();
    return _0x37c0f5 >= 1 && _0x37c0f5 <= 3;
  };
  const _0x2a18db = () => {
    const _0x147a21 = new Date();
    const _0x597e43 = _0x147a21.getHours();
    return _0x597e43 >= 6 && _0x597e43 < 20;
  };
  const _0x28e13a = () => {
    {
      const _0x5c0b43 = new Date().getHours();
      if (_0x5c0b43 < 6) {
        return {
          ok: false,
          text: "未到6点"
        };
      }
      if (_0x5c0b43 >= 20) {
        return {
          ok: false,
          text: "已过20点"
        };
      }
      const _0x2f34f2 = {
        ok: true,
        text: "可发车"
      };
      return _0x2f34f2;
    }
  };
  const _0x453902 = () => {
    const _0x55b0a9 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return _0x55b0a9[new Date().getDay()];
  };
  const _0x1ae926 = 5;
  const _0x2de285 = _0x3b4835 => {
    if (!_0x3b4835) {
      return false;
    }
    const _0x32887f = new Date();
    const _0xb4297e = new Date(_0x3b4835 * 1000);
    const _0x1de50c = new Date(_0x32887f);
    _0x1de50c.setHours(_0x1ae926, 0, 0, 0);
    _0x32887f < _0x1de50c && _0x1de50c.setDate(_0x1de50c.getDate() - 1);
    return _0xb4297e >= _0x1de50c;
  };
  const _0x12d6d9 = () => {
    const _0x5ce535 = _0x4c567c?.["body"] || _0x4c567c || {};
    const _0x2fdf9d = _0x5ce535.roleCar || _0x5ce535.rolecar || {};
    const _0x3a2962 = Number(_0x2fdf9d.sendCnt || 0);
    const _0x27aa8e = Number(_0x2fdf9d.sendCntResetTime || 0);
    if (_0x2de285(_0x27aa8e)) {
      {
        return _0x3a2962;
      }
    }
    return 0;
  };
  const _0xca634f = () => _0x12d6d9() < 4;
  const _0x264d32 = "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"/></svg>";
  const _0x2919e6 = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x2d78b1 = {
    "1": "#22c55e",
    "2": "#3b82f6",
    "3": "#a855f7",
    "4": "#f59e0b",
    "5": "#ef4444",
    "6": "#eab308"
  };
  const _0x58ba1b = {
    type: 3,
    itemId: 3201,
    minValue: 10
  };
  const _0x2248ad = {
    type: 3,
    itemId: 1001,
    minValue: 10
  };
  const _0x4fc004 = {
    type: 3,
    itemId: 1022,
    minValue: 2000
  };
  const _0xb61410 = {
    type: 2,
    itemId: 0,
    minValue: 2000
  };
  const _0x276ce6 = {
    type: 3,
    itemId: 1023,
    minValue: 5
  };
  const _0x1c059a = {
    type: 3,
    itemId: 1022,
    minValue: 2500
  };
  const _0x2e595c = {
    type: 3,
    itemId: 1001,
    minValue: 12
  };
  const _0x4f059f = [_0x58ba1b, _0x2248ad, _0x4fc004, _0xb61410, _0x276ce6, _0x1c059a, _0x2e595c];
  const _0x227c71 = {
    "3001": "金币袋子",
    "3002": "金砖袋子",
    "3008": "精铁袋子",
    "3009": "进阶袋子",
    "3010": "梦魇袋子",
    "3011": "白玉袋子",
    "3012": "扳手袋子",
    "3005": "紫色随机碎片",
    "3006": "橙色随机碎片",
    "3007": "红色随机碎片",
    "3201": "红色万能碎片",
    "3302": "橙色万能碎片",
    "2001": "木制宝箱",
    "2002": "青铜宝箱",
    "2003": "黄金宝箱",
    "2004": "铂金宝箱",
    "2005": "钻石宝箱",
    "3020": "聚宝盆",
    "3021": "豪华聚宝盆",
    "1001": "招募令",
    "1003": "进阶石",
    "1006": "精铁",
    "1007": "竞技场门票",
    "1011": "普通鱼竿",
    "1012": "黄金鱼竿",
    "1013": "珍珠",
    "1016": "晶石",
    "1019": "盐锭",
    "1020": "皮肤币",
    "1021": "扫荡魔毯",
    "1022": "白玉",
    "1023": "彩玉",
    "1033": "贝壳",
    "1035": "金盐锭",
    "35002": "刷新券",
    "35009": "零件",
    "10101": "四圣宝珠碎片",
    "37001": "怪异钥匙"
  };
  const _0x38cc7d = _0x5ee4b6 => {
    if (!Array.isArray(_0x5ee4b6)) {
      return false;
    }
    return _0x4f059f.some(_0x3ab078 => _0x5ee4b6.find(_0x5b1748 => _0x5b1748.type === _0x3ab078.type && (_0x3ab078.itemId === 0 || _0x5b1748.itemId === _0x3ab078.itemId) && Number(_0x5b1748.value || 0) >= _0x3ab078.minValue));
  };
  const _0x55fc17 = _0x1ac7bf => {
    if (!Array.isArray(_0x1ac7bf) || _0x1ac7bf.length === 0) {
      return "-";
    }
    return _0x1ac7bf.map(_0x4beaf9 => {
      const _0x236835 = _0x4beaf9.type || 0;
      const _0x5e546e = _0x4beaf9.itemId || 0;
      const _0xdae54d = _0x4beaf9.value || 0;
      if (_0x236835 === 1) {
        return "金币 x" + _0xdae54d.toLocaleString();
      }
      if (_0x236835 === 2) {
        return "金砖 x" + _0xdae54d.toLocaleString();
      }
      if (_0x236835 === 3) {
        const _0x2da6a3 = _0x227c71[_0x5e546e] || "物品#" + _0x5e546e;
        return _0x2da6a3 + " x" + _0xdae54d;
      }
      return "类型" + _0x236835 + "#" + _0x5e546e + " x" + _0xdae54d;
    }).join("、");
  };
  const _0x528c1c = _0x60b369 => _0x227c71[_0x60b369] || "物品" + _0x60b369;
  const _0x4fc0be = _0x2325a8 => {
    const _0x32264a = _0x2325a8 || {};
    const _0x26be5e = _0x32264a.body || _0x32264a;
    const _0x1b780f = _0x26be5e.roleCar || _0x26be5e.rolecar || {};
    const _0x4fca90 = _0x1b780f.carDataMap || _0x1b780f.cardatamap;
    let _0x10ad33 = [];
    if (_0x4fca90 && typeof _0x4fca90 === "object") {
      const _0x256fde = Object.keys(_0x4fca90).sort((_0x15da1f, _0x320c79) => {
        const _0x36d594 = Number(_0x15da1f);
        const _0x3e3352 = Number(_0x320c79);
        if (!isNaN(_0x36d594) && !isNaN(_0x3e3352)) {
          {
            return _0x36d594 - _0x3e3352;
          }
        }
        return String(_0x15da1f).localeCompare(String(_0x320c79));
      });
      _0x10ad33 = _0x256fde.map(_0x227792 => {
        {
          const _0x2393f3 = _0x4fca90[_0x227792] || {};
          return {
            ..._0x2393f3,
            id: String(_0x227792),
            key: String(_0x227792)
          };
        }
      });
    } else {
      let _0x351db1 = _0x26be5e.cars || _0x26be5e.list || _0x26be5e.data || [];
      if (!Array.isArray(_0x351db1) && typeof _0x351db1 === "object") {
        _0x351db1 = Object.values(_0x351db1);
      }
      _0x10ad33 = (Array.isArray(_0x351db1) ? _0x351db1 : []).map((_0x333665, _0x2d547a) => {
        {
          const _0x56da50 = String(_0x333665?.["id"] ?? _0x333665?.["carId"] ?? _0x2d547a);
          const _0xcb9ecd = {
            ..._0x333665,
            id: _0x56da50,
            key: _0x56da50
          };
          return _0xcb9ecd;
        }
      });
      _0x10ad33.sort((_0x1a75f1, _0x544946) => {
        {
          const _0x1c2118 = Number(_0x1a75f1.id);
          const _0x12559a = Number(_0x544946.id);
          if (!isNaN(_0x1c2118) && !isNaN(_0x12559a)) {
            {
              return _0x1c2118 - _0x12559a;
            }
          }
          return String(_0x1a75f1.id).localeCompare(String(_0x544946.id));
        }
      });
    }
    return _0x10ad33;
  };
  const _0x2d69ea = _0x421a24 => {
    {
      if (!Array.isArray(_0x421a24)) {
        return 0;
      }
      return _0x421a24.reduce((_0xb7bae, _0x28ca2d) => _0xb7bae + (_0x28ca2d.type === 3 && _0x28ca2d.itemId === 35002 ? Number(_0x28ca2d.value || 0) : 0), 0);
    }
  };
  const _0x1697b5 = _0x2aa1a0 => {
    const _0x385cc1 = _0x2aa1a0?.["battleTeam"]?.["name"];
    if (_0x385cc1 && typeof _0x385cc1 === "string" && _0x385cc1.trim() !== "") {
      return true;
    }
    return Number(_0x2aa1a0?.["sendAt"] || 0) !== 0;
  };
  const _0x16bafe = _0x5da351 => {
    {
      const _0x5ba554 = _0x5da351?.["battleTeam"];
      if (_0x5ba554) {
        const _0x376692 = _0x5ba554.sendAt || _0x5ba554.startTime || _0x5ba554.createTime || _0x5ba554.time;
        if (_0x376692 && Number(_0x376692) > 0) {
          return Number(_0x376692);
        }
      }
      return Number(_0x5da351?.["sendAt"] || 0);
    }
  };
  const _0x69652e = (_0x39cc39, _0x2fcce9) => {
    {
      const _0x237971 = Number(_0x39cc39?.["color"] || 0);
      const _0x483bf2 = Array.isArray(_0x39cc39?.["rewards"]) ? _0x39cc39.rewards : [];
      const _0x5d3dbc = _0x2d69ea(_0x483bf2);
      if (_0x2fcce9 >= 6) {
        return _0x237971 >= 5 || _0x5d3dbc >= 4 || _0x38cc7d(_0x483bf2);
      }
      return _0x237971 >= 4 || _0x5d3dbc >= 2 || _0x38cc7d(_0x483bf2);
    }
  };
  const _0x1160ec = 14400000;
  const _0x57f32b = _0x23ef21 => {
    const _0x119aae = _0x16bafe(_0x23ef21);
    if (!_0x119aae) {
      return false;
    }
    const _0x456a3d = _0x119aae < 1000000000000 ? _0x119aae * 1000 : _0x119aae;
    return Date.now() - _0x456a3d >= _0x1160ec;
  };
  const _0x51f764 = _0x20abf9 => {
    {
      const _0x3eaad8 = _0x16bafe(_0x20abf9);
      if (!_0x3eaad8) {
        return 0;
      }
      const _0x5edbca = _0x3eaad8 < 1000000000000 ? _0x3eaad8 * 1000 : _0x3eaad8;
      return _0x5edbca + _0x1160ec - Date.now();
    }
  };
  const _0x1a1042 = _0x445078 => {
    if (_0x445078 <= 0) {
      return "可收车";
    }
    const _0x36671b = Math.ceil(_0x445078 / 1000);
    const _0x2526df = Math.floor(_0x36671b / 3600);
    const _0x2535ac = Math.floor(_0x36671b % 3600 / 60);
    if (_0x2526df > 0) {
      return _0x2526df + "时" + _0x2535ac + "分";
    }
    return _0x2535ac + "分";
  };
  const _0x302fe4 = async _0x37c33b => {
    _0x4c567c = _0x37c33b;
    const _0x1a5e9e = document.getElementById("qa-car-content");
    if (!_0x1a5e9e) {
      return;
    }
    const _0x13091c = window.ROLE?.["items"] || {};
    const _0x18f925 = _0x4fc0be(_0x37c33b);
    const _0x374763 = _0x12d6d9();
    const _0x21b4db = _0x16e7d2(_0x13091c, 35002);
    const _0x563fc5 = _0x4ce37a();
    const _0x4052ea = _0x28e13a();
    const _0x101511 = _0x563fc5 && _0x4052ea.ok && _0x374763 < 4;
    const _0x34d3b3 = _0x18f925.filter(_0x1eff03 => !_0x1697b5(_0x1eff03) && Number(_0x1eff03.refreshCount ?? 0) === 0).length;
    if (_0x18f925.length === 0) {
      _0x1a5e9e.innerHTML = "<div class=\"helper-text\">暂无可用车辆</div>";
      return;
    }
    const _0x1a1936 = _0x18f925.filter(_0x2f3b8b => _0x1697b5(_0x2f3b8b));
    _0x18f925.filter(_0x49dd52 => !_0x1697b5(_0x49dd52));
    _0x1a1936.filter(_0x57f32b);
    const _0x418ecf = "\n    <div class=\"car-status-bar\">\n      <div class=\"status-item\">\n        <span class=\"status-label\">活动状态</span>\n        <span class=\"status-value " + (_0x563fc5 ? "active" : "inactive") + "\">\n          " + (_0x563fc5 ? "进行中 (" + _0x453902() + ")" : "已结束 (" + _0x453902() + ")") + "\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">发车时间</span>\n        <span class=\"status-value " + (_0x4052ea.ok ? "active" : "inactive") + "\">\n          " + _0x4052ea.text + "\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">今日发车</span>\n        <span class=\"status-value " + (_0x374763 >= 4 ? "inactive" : "active") + "\">\n          " + _0x374763 + "/4\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">刷新券</span>\n        <span class=\"status-value\">" + _0x21b4db + "</span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">免费刷新</span>\n        <span class=\"status-value " + (_0x34d3b3 > 0 ? "active" : "") + "\">" + _0x34d3b3 + " 辆</span>\n      </div>\n    </div>\n  ";
    _0x1a5e9e.innerHTML = "\n    " + _0x418ecf + "\n    <div class=\"car-list\">\n      " + _0x18f925.map(_0x58679b => {
      const _0x3ee5c9 = Number(_0x58679b.color || 0);
      const _0x393c15 = _0x1697b5(_0x58679b);
      const _0x4c6dd3 = _0x57f32b(_0x58679b);
      const _0x3249aa = _0x2919e6[_0x3ee5c9] || "未知";
      const _0x16b192 = _0x2d78b1[_0x3ee5c9] || "#6b7280";
      const _0x2d3f09 = _0x38cc7d(_0x58679b.rewards);
      _0x58679b.rewards ? _0x55fc17(_0x58679b.rewards) : "-";
      const _0x5cece4 = !_0x101511;
      const _0x6681a6 = !_0x563fc5 ? "非活动时间" : !_0x4052ea.ok ? _0x4052ea.text : _0x374763 >= 4 ? "今日次数已满" : "";
      const _0x1ee8ca = String(_0x58679b.id);
      const _0x362505 = !!_0x297518[_0x1ee8ca];
      const _0x4921ba = _0x3ee5c9 >= 5 ? _0x362505 ? "已选护卫" : "可携带" : "—";
      const _0x1e6003 = _0x362505 ? "has-helper" : "";
      return "\n          <div class=\"car-item grade-" + _0x3ee5c9 + "\" data-car-id=\"" + _0x58679b.id + "\">\n            <div class=\"car-item-row\">\n              <span class=\"car-grade-icon\" style=\"color:" + _0x16b192 + "\">" + _0x264d32 + "</span>\n              <span class=\"car-badge grade-badge\" style=\"color:" + _0x16b192 + ";border-color:" + _0x16b192 + "\">" + _0x3249aa + "</span>\n              <span class=\"car-name\">车辆 #" + _0x58679b.id + "</span>\n            </div>\n            <div class=\"car-meta-row\">\n              <span class=\"meta-k\">品阶</span>\n              <span class=\"meta-v\" style=\"color:" + _0x16b192 + "\">" + _0x3249aa + "</span>\n              <span class=\"meta-k\">状态</span>\n              <span class=\"meta-v\">" + (_0x393c15 ? _0x4c6dd3 ? "可收车" : "行驶中" : "未发车") + "</span>\n              <span class=\"meta-k\">帮手</span>\n              <span class=\"meta-v " + _0x1e6003 + "\">" + _0x4921ba + "</span>\n              <span class=\"meta-k\">奖励</span>\n              <span class=\"meta-v reward-trigger " + (_0x2d3f09 ? "has-big-prize" : "") + "\" data-car-id=\"" + _0x58679b.id + "\">\n                " + (_0x2d3f09 ? "含大奖" : "查看") + "\n              </span>\n            </div>\n            <div class=\"car-actions\">\n              " + (!_0x393c15 ? "\n                <button class=\"btn btn-small btn-primary\" data-action=\"car-single-send\" data-car-id=\"" + _0x58679b.id + "\"\n                  " + (_0x5cece4 ? "disabled title=\"" + _0x6681a6 + "\"" : "") + ">" + (_0x362505 ? "发车(带护卫)" : "发车") + "</button>\n                <button class=\"btn btn-small " + (Number(_0x58679b.refreshCount ?? 0) === 0 ? "btn-success" : "btn-secondary") + "\"\n                  data-action=\"car-single-refresh\" data-car-id=\"" + _0x58679b.id + "\">\n                  " + (Number(_0x58679b.refreshCount ?? 0) === 0 ? "免费刷新" : "刷新") + "\n                </button>\n              " : "\n                " + (_0x4c6dd3 ? "\n                  <button class=\"btn btn-small btn-success\" data-action=\"car-single-claim\" data-car-id=\"" + _0x58679b.id + "\">收车</button>\n                " : "\n                  <span class=\"car-countdown\">剩余 " + _0x1a1042(_0x51f764(_0x58679b)) + "</span>\n                ") + "\n              ") + "\n              " + (_0x3ee5c9 >= 5 && !_0x393c15 ? "\n                <button class=\"btn btn-small " + (_0x362505 ? "btn-warning" : "btn-secondary") + "\" data-action=\"car-single-helper\" data-car-id=\"" + _0x58679b.id + "\"\n                  " + (_0x5cece4 ? "disabled" : "") + ">" + (_0x362505 ? "换护卫" : "护卫") + "</button>\n              " : "") + "\n            </div>\n          </div>\n        ";
    }).join("") + "\n    </div>\n  ";
    const _0x4a5944 = _0x1a5e9e.cloneNode(true);
    _0x1a5e9e.parentNode.replaceChild(_0x4a5944, _0x1a5e9e);
    let _0x442f91 = null;
    _0x4a5944.addEventListener("mouseenter", _0x15cc61 => {
      {
        const _0x8a0aaa = _0x15cc61.target.closest(".reward-trigger");
        _0x8a0aaa && (_0x442f91 = setTimeout(() => {
          {
            const _0x599b42 = _0x8a0aaa.getAttribute("data-car-id");
            const _0x4b1036 = _0x18f925.find(_0x243c6f => String(_0x243c6f.id) === String(_0x599b42));
            _0x4b1036 && _0x4b1036.rewards && _0x2c034d(_0x4b1036, _0x15cc61, "hover");
          }
        }, 150));
      }
    }, true);
    _0x4a5944.addEventListener("mouseleave", _0x575627 => {
      {
        const _0x1c7b81 = _0x575627.target.closest(".reward-trigger");
        if (_0x1c7b81) {
          {
            _0x442f91 && (clearTimeout(_0x442f91), _0x442f91 = null);
            if (_0x5eb1c0 && _0x5eb1c0.dataset.trigger === "hover") {
              {
                setTimeout(() => {
                  if (_0x5eb1c0 && !_0x5eb1c0.matches(":hover")) {
                    {
                      _0x5eb1c0.remove();
                      _0x5eb1c0 = null;
                    }
                  }
                }, 100);
              }
            }
          }
        }
      }
    }, true);
    _0x4a5944.addEventListener("click", _0x2ca67d => {
      {
        const _0x44f6ef = _0x2ca67d.target.closest(".reward-trigger");
        if (_0x44f6ef) {
          _0x2ca67d.preventDefault();
          _0x2ca67d.stopPropagation();
          if (_0x442f91) {
            {
              clearTimeout(_0x442f91);
              _0x442f91 = null;
            }
          }
          const _0x45a236 = _0x44f6ef.getAttribute("data-car-id");
          const _0x134f4d = _0x18f925.find(_0x119bf4 => String(_0x119bf4.id) === String(_0x45a236));
          _0x134f4d && _0x134f4d.rewards && _0x2c034d(_0x134f4d, _0x2ca67d, "click");
        }
      }
    });
  };
  const _0x2c25fb = _0x1cb620 => {
    if (!_0x1cb620) {
      return false;
    }
    return _0x4f059f.some(_0x2924f => _0x1cb620.type === _0x2924f.type && (_0x2924f.itemId === 0 || _0x1cb620.itemId === _0x2924f.itemId) && Number(_0x1cb620.value || 0) >= _0x2924f.minValue);
  };
  let _0x5eb1c0 = null;
  const _0x13f9aa = _0x28c8aa => {
    const _0xbc83c0 = _0x28c8aa.type || 0;
    const _0x1aa4f0 = _0x28c8aa.itemId || 0;
    if (_0xbc83c0 === 1) {
      return "金币";
    }
    if (_0xbc83c0 === 2) {
      return "金砖";
    }
    return _0x227c71[_0x1aa4f0] || "物品#" + _0x1aa4f0;
  };
  const _0x2c034d = (_0x477022, _0x22b994, _0x22afb5 = "click") => {
    {
      _0x5eb1c0 && (_0x5eb1c0.remove(), _0x5eb1c0 = null);
      const _0x2e2b45 = _0x477022.rewards || [];
      const _0x2bf718 = _0x2e2b45.map(_0x4f52c => {
        const _0x21af69 = _0x13f9aa(_0x4f52c);
        const _0x47bc7a = (_0x4f52c.value || 0).toLocaleString();
        const _0x333051 = _0x2c25fb(_0x4f52c);
        return "<div class=\"reward-row " + (_0x333051 ? "is-big-prize" : "") + "\"><span class=\"name\">" + _0x21af69 + "</span><span class=\"value\">x" + _0x47bc7a + "</span></div>";
      }).join("");
      const _0x57e898 = document.createElement("div");
      _0x57e898.className = "car-reward-popup";
      _0x57e898.dataset.trigger = _0x22afb5;
      _0x57e898.innerHTML = "\n    <div class=\"popup-header\">车辆奖励详情</div>\n    <div class=\"popup-content\">" + (_0x2bf718 || "<div class=\"no-rewards\">暂无奖励信息</div>") + "</div>\n  ";
      const _0x328b03 = _0x22b994.target.getBoundingClientRect();
      const _0xe07e5c = Math.min(_0x328b03.left, window.innerWidth - 280);
      _0x57e898.style.left = _0xe07e5c + "px";
      _0x57e898.style.top = _0x328b03.bottom + 8 + "px";
      const _0x32c80a = document.querySelector(".qa-root");
      _0x32c80a ? _0x32c80a.appendChild(_0x57e898) : document.body.appendChild(_0x57e898);
      _0x5eb1c0 = _0x57e898;
      const _0x313fb7 = () => {
        if (_0x5eb1c0 === _0x57e898) {
          {
            _0x57e898.remove();
            _0x5eb1c0 = null;
          }
        }
        document.removeEventListener("click", _0x9a203);
        _0x57e898.removeEventListener("mouseleave", _0x17acdb);
      };
      const _0x9a203 = _0x465ec5 => {
        !_0x57e898.contains(_0x465ec5.target) && !_0x22b994.target.contains(_0x465ec5.target) && _0x313fb7();
      };
      const _0x17acdb = () => {
        if (_0x22afb5 === "hover") {
          {
            setTimeout(() => {
              const _0x43951e = _0x22b994.target.closest(".reward-trigger");
              !_0x57e898.matches(":hover") && (!_0x43951e || !_0x43951e.matches(":hover")) && _0x313fb7();
            }, 100);
          }
        }
      };
      if (_0x22afb5 === "hover") {
        {
          _0x57e898.addEventListener("mouseleave", _0x17acdb);
        }
      }
      setTimeout(() => {
        {
          document.addEventListener("click", _0x9a203);
        }
      }, 50);
    }
  };
  const _0x2a2655 = async () => {
    try {
      const _0x57533c = await _0x361aec("car_getrolecar", {});
      _0x1ddb84("[赛车] 获取成功", "success");
      _0x1ddb84(_0x57533c, "data");
      await _0x302fe4(_0x57533c);
      _0x30927d("获取赛车信息成功", "success");
      return _0x57533c;
    } catch (_0x332d0b) {
      {
        _0x1ddb84("[赛车] 获取失败: " + _0x332d0b.message, "error");
        _0x30927d("获取赛车信息失败: " + _0x332d0b.message, "error");
        return null;
      }
    }
  };
  const _0x52ea46 = async _0x13f0ef => {
    try {
      const _0x3c6fd0 = await _0x361aec("car_refresh", {
        carId: String(_0x13f0ef)
      });
      _0x1ddb84("[赛车] 刷新成功", "success");
      _0x1ddb84(_0x3c6fd0, "data");
      const _0x215354 = _0x3c6fd0?.["carData"] || _0x3c6fd0?.["body"]?.["carData"] || _0x3c6fd0?.["car"] || _0x3c6fd0?.["body"]?.["car"] || {};
      const _0x3faf68 = _0x215354.rewards || [];
      const _0x47ebe3 = _0x3faf68.length > 0 ? _0x55fc17(_0x3faf68) : "无奖励信息";
      const _0x173486 = Number(_0x215354.color || 0);
      const _0x4e405a = _0x2919e6[_0x173486] || "未知";
      const _0x450b45 = _0x38cc7d(_0x3faf68);
      const _0x18d3fb = _0x450b45 ? "刷新成功【" + _0x4e405a + "】含大奖！\n" + _0x47ebe3 : "刷新成功【" + _0x4e405a + "】\n" + _0x47ebe3;
      await _0x2a2655();
      _0x30927d(_0x18d3fb, _0x450b45 ? "success" : "info");
      return _0x3c6fd0;
    } catch (_0x1f02fc) {
      _0x1ddb84("[赛车] 刷新失败: " + _0x1f02fc.message, "error");
      _0x30927d("刷新失败: " + _0x1f02fc.message, "error");
      throw _0x1f02fc;
    }
  };
  const _0xaa180 = async (_0x13fdb7, _0x318ce3 = null) => {
    {
      if (!_0x4ce37a()) {
        {
          _0x30927d("非活动时间（周一~周三）", "warning");
          return;
        }
      }
      if (!_0x2a18db()) {
        {
          const _0x5cf227 = _0x28e13a();
          _0x30927d("发车时间限制: " + _0x5cf227.text, "warning");
          return;
        }
      }
      if (!_0xca634f()) {
        {
          _0x30927d("今日发车次数已满（4/4）", "warning");
          return;
        }
      }
      const _0x24f777 = _0x4fc0be(_0x4c567c);
      const _0xfcc2a2 = _0x24f777.find(_0x54486a => String(_0x54486a.id) === String(_0x13fdb7));
      const _0x39302b = Number(_0xfcc2a2?.["color"] || 0);
      const _0x183f67 = _0x2919e6[_0x39302b] || "未知";
      const _0x5f4410 = _0x318ce3 !== null ? _0x318ce3 : _0x297518[_0x13fdb7] || 0;
      try {
        {
          const _0xab1def = await _0x361aec("car_send", {
            carId: String(_0x13fdb7),
            helperId: Number(_0x5f4410),
            text: "",
            isUpgrade: false
          });
          _0x1ddb84("[赛车] 发车成功", "success");
          _0x1ddb84(_0xab1def, "data");
          _0x37f657(_0x13fdb7);
          const _0x411475 = _0x5f4410 ? "(带护卫)" : "";
          const _0x353d55 = "【" + _0x183f67 + "】车辆已发出" + _0x411475;
          await _0x2a2655();
          _0x30927d(_0x353d55, "success");
          return _0xab1def;
        }
      } catch (_0x379ed0) {
        {
          _0x1ddb84("[赛车] 发车失败: " + _0x379ed0.message, "error");
          _0x30927d("发车失败: " + _0x379ed0.message, "error");
          throw _0x379ed0;
        }
      }
    }
  };
  const _0x3491d1 = async _0x3d58f4 => {
    try {
      {
        const _0x25e4ab = await _0x361aec("car_claim", {
          carId: String(_0x3d58f4)
        });
        _0x1ddb84("[赛车] 收车成功", "success");
        _0x1ddb84(_0x25e4ab, "data");
        await _0x2a2655();
        _0x30927d("收车成功", "success");
        return _0x25e4ab;
      }
    } catch (_0x5a88cc) {
      {
        _0x1ddb84("[赛车] 收车失败: " + _0x5a88cc.message, "error");
        _0x30927d("收车失败: " + _0x5a88cc.message, "error");
        throw _0x5a88cc;
      }
    }
  };
  const _0x60ff38 = () => {
    if (!_0x4c567c) {
      return [];
    }
    const _0x315409 = _0x4fc0be(_0x4c567c);
    return _0x315409.filter(_0x57f32b);
  };
  const _0x13aeff = [20, 21, 22, 23, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 78, 82, 86, 90, 94, 99, 104, 109, 114, 119, 126, 133, 140, 147, 154, 163, 172, 181, 190, 199, 210, 221, 232, 243, 369, 393, 422, 457, 498, 548, 607, 678, 763, 865, 1011];
  const _0x1dc243 = async () => {
    try {
      {
        let _0x1c0ed7 = _0x16e7d2(window.ROLE?.["items"], 35009);
        if (_0x1c0ed7 < _0x13aeff[0]) {
          {
            _0x1ddb84("[赛车] 零件不足，当前: " + _0x1c0ed7, "info");
            return 0;
          }
        }
        const _0x35be2d = _0x4c567c?.["body"] || _0x4c567c || {};
        const _0x1af42d = _0x35be2d.roleCar || _0x35be2d.rolecar || {};
        let _0x1d79f0 = Number(_0x1af42d.researchLevel || _0x1af42d.researchlevel || 0);
        _0x1ddb84("[赛车] 开始改装升级, 当前等级: " + _0x1d79f0 + ", 零件: " + _0x1c0ed7, "info");
        let _0x4d753d = 0;
        while (_0x1d79f0 < _0x13aeff.length && _0x1c0ed7 >= _0x13aeff[_0x1d79f0]) {
          try {
            const _0xae4b60 = {
              researchId: 1
            };
            await _0x361aec("car_research", _0xae4b60);
            _0x1d79f0++;
            _0x4d753d++;
            _0x1ddb84("[赛车] 改装升级成功, 等级: " + _0x1d79f0, "success");
            _0x30927d("改装升级 Lv." + _0x1d79f0, "success", 1000);
            await _0x186d8b(300);
            _0x1c0ed7 = _0x16e7d2(window.ROLE?.["items"], 35009);
          } catch (_0x5720c8) {
            {
              _0x1ddb84("[赛车] 改装升级失败: " + _0x5720c8.message, "error");
              break;
            }
          }
        }
        if (_0x4d753d > 0) {
          {
            _0x1ddb84("[赛车] 改装完成, 升级次数: " + _0x4d753d + ", 最终等级: " + _0x1d79f0, "success");
            _0x30927d("改装升级" + _0x4d753d + "次，等级: " + _0x1d79f0, "success");
          }
        }
        return _0x4d753d;
      }
    } catch (_0x276ff8) {
      {
        _0x1ddb84("[赛车] 改装升级异常: " + _0x276ff8.message, "error");
        return 0;
      }
    }
  };
  const _0x528483 = async () => {
    const _0x3faedb = _0x60ff38();
    _0x1ddb84("[赛车] 一键收车, 可收车辆: " + _0x3faedb.length, "info");
    if (_0x3faedb.length === 0) {
      {
        _0x30927d("没有可收的车辆", "info");
        return;
      }
    }
    let _0x1bbfb5 = 0;
    for (const _0x546a3d of _0x3faedb) {
      {
        try {
          await _0x3491d1(_0x546a3d.id);
          _0x1bbfb5++;
          await _0x186d8b(300);
        } catch (_0x215abc) {}
      }
    }
    _0x1bbfb5 > 0 && (_0x30927d("成功收取" + _0x1bbfb5 + "辆车", "success"), await _0x2a2655(), await _0x1dc243());
  };
  const _0x13b89d = async () => {
    try {
      if (!_0x4ce37a()) {
        {
          _0x30927d("当前非活动时间（周一到周三）", "info");
          return;
        }
      }
      if (!_0x2a18db()) {
        _0x30927d("当前不在发车时间段（6:00-20:00）", "info");
        return;
      }
      await _0x2a2655();
      const _0x351147 = _0x4fc0be(_0x4c567c);
      if (_0x351147.length === 0) {
        {
          _0x30927d("没有可用的车辆", "info");
          return;
        }
      }
      let _0x1838fd = _0x16e7d2(window.ROLE?.["items"], 35002);
      const _0x5892a1 = _0x12d6d9();
      if (_0x5892a1 >= 4) {
        {
          _0x30927d("今日发车次数已达上限（4次）", "info");
          return;
        }
      }
      let _0x4aa679 = 0;
      for (const _0x34e9fc of _0x351147) {
        if (_0x1697b5(_0x34e9fc)) {
          continue;
        }
        if (_0x5892a1 + _0x4aa679 >= 4) {
          {
            break;
          }
        }
        const _0x3b14d2 = Number(_0x34e9fc.color || 0);
        const _0x513e30 = _0x2919e6[_0x3b14d2] || "未知";
        if (_0x69652e(_0x34e9fc, _0x1838fd)) {
          await _0xaa180(_0x34e9fc.id);
          _0x4aa679++;
          await _0x186d8b(500);
          continue;
        }
        let _0x21a344 = false;
        const _0x25c210 = Number(_0x34e9fc.refreshCount ?? 0) === 0;
        if (_0x1838fd >= 6) {
          _0x21a344 = true;
        } else {
          if (_0x25c210) {
            _0x21a344 = true;
          } else {
            await _0xaa180(_0x34e9fc.id);
            _0x4aa679++;
            await _0x186d8b(500);
            continue;
          }
        }
        while (_0x21a344) {
          _0x1838fd = _0x16e7d2(window.ROLE?.["items"], 35002);
          await _0x52ea46(_0x34e9fc.id);
          await _0x186d8b(500);
          const _0xc0fdd8 = _0x4fc0be(_0x4c567c).find(_0x2bbfbc => _0x2bbfbc.id === _0x34e9fc.id);
          if (!_0xc0fdd8) {
            {
              break;
            }
          }
          if (_0x69652e(_0xc0fdd8, _0x1838fd)) {
            await _0xaa180(_0xc0fdd8.id);
            _0x4aa679++;
            break;
          }
          _0x1838fd = _0x16e7d2(window.ROLE?.["items"], 35002);
          const _0x55c85f = Number(_0xc0fdd8.color || 0);
          if (_0x1838fd >= 6) {
            _0x21a344 = true;
          } else {
            if (_0x1838fd > 0) {
              {
                if (_0x55c85f >= 4 || _0x38cc7d(_0xc0fdd8.rewards)) {
                  await _0xaa180(_0xc0fdd8.id);
                  _0x4aa679++;
                  _0x21a344 = false;
                } else {
                  {
                    await _0xaa180(_0xc0fdd8.id);
                    _0x4aa679++;
                    _0x21a344 = false;
                  }
                }
              }
            } else {
              await _0xaa180(_0xc0fdd8.id);
              _0x4aa679++;
              _0x21a344 = false;
            }
          }
          await _0x186d8b(500);
        }
      }
    } catch (_0xa108eb) {}
  };
  let _0x4d4328 = null;
  let _0x20b9fa = [];
  let _0x3373a9 = null;
  let _0x5aec05 = [];
  const _0x31d2a0 = _0x1aa712 => {
    const _0x2375c2 = Number(_0x1aa712 || 0);
    if (_0x2375c2 >= 100000000) {
      return (_0x2375c2 / 100000000).toFixed(2) + "亿";
    } else {
      if (_0x2375c2 >= 10000000) {
        return (_0x2375c2 / 100000000).toFixed(2) + "亿";
      } else {
        if (_0x2375c2 >= 10000) {
          return (_0x2375c2 / 10000).toFixed(1) + "万";
        }
      }
    }
    return _0x2375c2.toString();
  };
  const _0xe001fe = async _0x5edd76 => {
    _0x3373a9 = _0x5edd76;
    try {
      const _0x127055 = await _0x361aec("legion_getinfo", {});
      const _0x823ea4 = Object.values(_0x127055?.["info"]?.["members"] || {});
      const _0x1e0828 = await _0x361aec("car_getmemberhelpingcnt", {});
      const _0x36c7f6 = _0x1e0828?.["map"] || _0x1e0828?.["body"]?.["memberHelpingCntMap"] || {};
      _0x5aec05 = _0x823ea4.map(_0x6c8b94 => {
        const _0x311ba2 = Number(_0x36c7f6[_0x6c8b94.roleId]?.["cnt"] || _0x36c7f6[String(_0x6c8b94.roleId)] || 0);
        return {
          roleId: String(_0x6c8b94.roleId),
          name: _0x6c8b94.name || _0x6c8b94.nickname || "玩家" + _0x6c8b94.roleId,
          power: _0x6c8b94.power || 0,
          powerFormatted: _0x31d2a0(_0x6c8b94.power),
          helpingCount: _0x311ba2,
          disabled: _0x311ba2 >= 4
        };
      }).sort((_0x29b882, _0x386918) => {
        {
          if (_0x29b882.disabled !== _0x386918.disabled) {
            return _0x29b882.disabled ? 1 : -1;
          }
          return _0x386918.power - _0x29b882.power;
        }
      });
      _0x20b9fa = _0x5aec05.filter(_0x408c86 => !_0x408c86.disabled).map(_0xf3adf0 => ({
        label: _0xf3adf0.name + "（战力 " + _0xf3adf0.powerFormatted + " · 已护卫 " + _0xf3adf0.helpingCount + "/4）",
        value: _0xf3adf0.roleId
      }));
      if (_0x20b9fa.length === 0) {
        {
          return;
        }
      }
      _0x3c1c35();
    } catch (_0x47305d) {}
  };
  const _0x3c1c35 = () => {
    {
      const _0x47ba3f = document.querySelector(".car-helper-modal");
      if (_0x47ba3f) {
        _0x47ba3f.remove();
      }
      if (!_0x5aec05 || _0x5aec05.length === 0) {
        return;
      }
      _0x4d4328 = _0x20b9fa.length > 0 ? _0x20b9fa[0].value : null;
      const _0x38353a = document.createElement("div");
      _0x38353a.className = "car-helper-modal qa-auth-overlay";
      _0x38353a.innerHTML = "\n    <div class=\"car-helper-body qa-auth-modal\" style=\"width:400px;text-align:left;max-height:80vh;overflow:hidden;display:flex;flex-direction:column;\">\n      <div class=\"qa-auth-title\" style=\"font-size:16px;flex-shrink:0;\">选择护卫</div>\n      <div class=\"helper-list\" style=\"flex:1;overflow-y:auto;margin:12px 0;\">\n        " + _0x5aec05.map(_0x494cb7 => "\n          <div class=\"helper-item " + (_0x494cb7.disabled ? "disabled" : "") + " " + (_0x494cb7.roleId === _0x4d4328 ? "selected" : "") + "\"\n               data-role-id=\"" + _0x494cb7.roleId + "\" " + (_0x494cb7.disabled ? "data-disabled=\"true\"" : "") + ">\n            <div class=\"helper-info\">\n              <div class=\"helper-name\">" + _0x494cb7.name + "</div>\n              <div class=\"helper-meta\">\n                <span class=\"helper-power\">战力 " + _0x494cb7.powerFormatted + "</span>\n                <span class=\"helper-count " + (_0x494cb7.helpingCount >= 4 ? "full" : "") + "\">已护卫 " + _0x494cb7.helpingCount + "/4</span>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      <div style=\"font-size:12px;color:#6b7280;margin-bottom:16px;flex-shrink:0;\">\n        说明：已护卫满 4 次的成员显示为灰色，无法选择。\n      </div>\n      <div style=\"display:flex;gap:8px;justify-content:flex-end;flex-shrink:0;\">\n        <button class=\"btn btn-secondary\" id=\"qa-helper-cancel\">取消</button>\n        <button class=\"btn btn-primary\" id=\"qa-helper-confirm\">确定</button>\n      </div>\n    </div>\n  ";
      const _0x4fb8da = document.querySelector(".qa-root");
      if (_0x4fb8da) {
        _0x4fb8da.appendChild(_0x38353a);
      } else {
        {
          document.body.appendChild(_0x38353a);
        }
      }
      const _0x5b55e6 = _0x38353a.querySelectorAll(".helper-item:not([data-disabled])");
      _0x5b55e6.forEach(_0x2e140e => {
        _0x2e140e.addEventListener("click", () => {
          {
            _0x38353a.querySelectorAll(".helper-item").forEach(_0x64c5de => _0x64c5de.classList.remove("selected"));
            _0x2e140e.classList.add("selected");
            _0x4d4328 = _0x2e140e.getAttribute("data-role-id");
          }
        });
      });
      _0x38353a.querySelector("#qa-helper-cancel").addEventListener("click", () => {
        _0x38353a.remove();
      });
      _0x38353a.querySelector("#qa-helper-confirm").addEventListener("click", () => {
        {
          if (!_0x4d4328) {
            return;
          }
          _0x3d6946();
          _0x38353a.remove();
        }
      });
      _0x38353a.addEventListener("click", _0x3e41d0 => {
        {
          _0x3e41d0.target === _0x38353a && _0x38353a.remove();
        }
      });
    }
  };
  const _0x3d6946 = async () => {
    if (!_0x4d4328 || !_0x3373a9) {
      return;
    }
    _0x297518[_0x3373a9] = _0x4d4328;
    const _0x4d1cf0 = _0x5aec05.find(_0x22c534 => _0x22c534.roleId === _0x4d4328);
    _0x4d1cf0?.["name"] || _0x4d4328;
    if (_0x4c567c) {
      {
        await _0x302fe4(_0x4c567c);
      }
    }
  };
  const _0x37f657 = _0x1d10f9 => {
    delete _0x297518[_0x1d10f9];
  };
  const _0x5cece8 = {
    __proto__: null,
    claimAllCars: _0x528483,
    claimCar: _0x3491d1,
    fetchCarInfo: _0x2a2655,
    getItemName: _0x528c1c,
    refreshCar: _0x52ea46,
    renderCarInfo: _0x302fe4,
    sendCar: _0xaa180,
    showHelperDialog: _0xe001fe,
    smartSendCar: _0x13b89d
  };
  var _0x3e1073 = Object.freeze(_0x5cece8);
  const _0x33c2ea = () => {
    const _0x56a242 = _0x386da5.theme === "dark";
    const _0x48024d = {
      bg: _0x56a242 ? "#1a1a2e" : "#ffffff",
      text: _0x56a242 ? "#f9fafb" : "#1f2937",
      textSecondary: _0x56a242 ? "#9ca3af" : "#6b7280",
      headerBg: _0x56a242 ? "#374151" : "#f3f4f6",
      headerText: _0x56a242 ? "#d1d5db" : "#374151",
      border: _0x56a242 ? "#4b5563" : "#e5e7eb",
      zebraStripe: _0x56a242 ? "#2d2d44" : "#f9fafb",
      red: "#ef4444",
      purple: "#8b5cf6",
      footerText: _0x56a242 ? "#6b7280" : "#9ca3af"
    };
    return _0x48024d;
  };
  let _0x42684c = null;
  let _0x1fa4fe = "";
  const _0x2c8a4f = _0x33c153 => {
    return new Promise(_0x1023b7 => {
      if (!_0x33c153) {
        {
          _0x1023b7(null);
          return;
        }
      }
      const _0x4d5530 = new Image();
      _0x4d5530.crossOrigin = "anonymous";
      _0x4d5530.onload = () => _0x1023b7(_0x4d5530);
      _0x4d5530.onerror = () => _0x1023b7(null);
      _0x4d5530.src = _0x33c153;
      setTimeout(() => _0x1023b7(null), 3000);
    });
  };
  const _0x20f514 = () => {
    const _0x120ddc = new Date();
    const _0x510907 = _0x120ddc.getFullYear();
    const _0x383b4b = String(_0x120ddc.getMonth() + 1).padStart(2, "0");
    const _0x3521a6 = String(_0x120ddc.getDate()).padStart(2, "0");
    return _0x510907 + "/" + _0x383b4b + "/" + _0x3521a6;
  };
  const _0x4bcff2 = () => {
    const _0x38769c = new Date();
    const _0x48f636 = _0x38769c.getDay();
    const _0x307dff = _0x48f636 === 0 ? 1 : _0x48f636 === 6 ? 0 : _0x48f636 + 1;
    const _0x369e63 = new Date(_0x38769c);
    _0x369e63.setDate(_0x38769c.getDate() - _0x307dff);
    const _0x4338cf = _0x369e63.getFullYear();
    const _0x24d1b3 = String(_0x369e63.getMonth() + 1).padStart(2, "0");
    const _0x8d3941 = String(_0x369e63.getDate()).padStart(2, "0");
    return _0x4338cf + "/" + _0x24d1b3 + "/" + _0x8d3941;
  };
  const _0x3d6faf = _0x3dc537 => {
    {
      if (!_0x3dc537) {
        return "0";
      }
      if (_0x3dc537 >= 100000000) {
        {
          return (_0x3dc537 / 100000000).toFixed(2) + "亿";
        }
      }
      if (_0x3dc537 >= 10000) {
        return (_0x3dc537 / 10000).toFixed(2) + "万";
      }
      return _0x3dc537.toString();
    }
  };
  const _0x101081 = _0x418ad8 => {
    if (_0x418ad8 === undefined || _0x418ad8 === -1) {
      return "--";
    }
    return _0x418ad8.toFixed(0);
  };
  const _0x1c19cd = {
    keywords: ["大联盟"],
    value: "大联盟",
    priority: 1
  };
  const _0x24fa68 = {
    keywords: ["正义"],
    value: "正义联盟",
    priority: 4
  };
  const _0x53e73e = {
    keywords: ["龙盟", "龍盟"],
    value: "龙盟",
    priority: 3
  };
  const _0x214d97 = {
    keywords: ["梦盟", "梦想之盟"],
    value: "梦盟",
    priority: 2
  };
  const _0xad6ded = [_0x1c19cd, _0x24fa68, _0x53e73e, _0x214d97];
  const _0x4fd57a = _0x57bb8b => {
    {
      if (!_0x57bb8b) {
        return "未知";
      }
      const _0x25b07c = _0xad6ded.find(_0x101fa9 => _0x101fa9.keywords.some(_0x3d9649 => _0x57bb8b.includes(_0x3d9649)));
      return _0x25b07c ? _0x25b07c.value : "未知";
    }
  };
  const _0x4abb09 = _0x1e17cf => {
    {
      if (!_0x1e17cf) {
        return 99;
      }
      const _0x276cf6 = _0xad6ded.find(_0x3912ee => _0x3912ee.keywords.some(_0x4a8f33 => _0x1e17cf.includes(_0x4a8f33)));
      return _0x276cf6 ? _0x276cf6.priority : 99;
    }
  };
  const _0x23072f = _0x3d2f84 => {
    {
      return [..._0x3d2f84].sort((_0x16ed1e, _0x4c905c) => {
        const _0x49b34f = _0x4abb09(_0x16ed1e.announcement);
        const _0x2c427a = _0x4abb09(_0x4c905c.announcement);
        if (_0x49b34f !== _0x2c427a) {
          return _0x49b34f - _0x2c427a;
        }
        return (_0x4c905c.redQuench || 0) - (_0x16ed1e.redQuench || 0);
      });
    }
  };
  const _0x3c1ed1 = (_0x51d77e, _0x1fdb81 = false) => {
    _0x42684c = _0x51d77e;
    const _0x445bfc = document.getElementById("qa-salt-match-content");
    if (!_0x445bfc) {
      return;
    }
    if (!_0x51d77e || !_0x51d77e.legionRankList || _0x51d77e.legionRankList.length === 0) {
      {
        _0x445bfc.innerHTML = "<div class=\"helper-text\">暂无盐场匹配数据</div>";
        return;
      }
    }
    const _0x3e7e9b = _0x1fdb81 ? _0x51d77e.legionRankList : _0x23072f(_0x51d77e.legionRankList);
    _0x445bfc.innerHTML = "\n    <div class=\"salt-match-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x1fa4fe + "</div>\n      <div class=\"match-club-list\">\n        " + _0x3e7e9b.map((_0x22966c, _0xe0576c) => "\n          <div class=\"match-club-item\">\n            <div class=\"club-main-row\">\n              <div class=\"club-rank\">#" + (_0xe0576c + 1) + "</div>\n              <div class=\"club-logo\">\n                <img src=\"" + (_0x22966c.logo || "") + "\" onerror=\"this.style.display='none'\" alt=\"\">\n              </div>\n              <div class=\"club-basic\">\n                <div class=\"club-name-row\">\n                  <span class=\"club-name\">" + (_0x22966c.name || "未知") + "</span>\n                  <span class=\"club-server\">" + (_0x22966c.serverId || "--") + "</span>\n                </div>\n                <div class=\"club-stats-row\">\n                  <span class=\"stat-tag power\">战力 " + _0x3d6faf(_0x22966c.power) + "</span>\n                  <span class=\"stat-tag red\">红淬 " + (_0x22966c.redQuench || 0) + "</span>\n                  " + ((_0x22966c.sRScore ?? _0x22966c.score) !== undefined && (_0x22966c.sRScore ?? _0x22966c.score) !== -1 ? "<span class=\"stat-tag score\">积分 " + _0x101081(_0x22966c.sRScore ?? _0x22966c.score) + "</span>" : "") + "\n                </div>\n              </div>\n            </div>\n            <div class=\"club-detail-row\">\n              <div class=\"car-heads\">\n                " + [1, 2, 3].map(_0x51be00 => {
      const _0x535f9e = _0x22966c["memberImg" + _0x51be00] || "";
      const _0x8b57c0 = _0x22966c["memberName" + _0x51be00] || "";
      const _0x197dd0 = _0x22966c["redno" + _0x51be00] || "0红";
      const _0x24ffb5 = _0x22966c["hb" + _0x51be00];
      return "\n                    <div class=\"car-head-item\">\n                      <img src=\"" + _0x535f9e + "\" class=\"car-head-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                      <span class=\"car-head-text\">" + (_0x8b57c0 ? _0x8b57c0 + ": " : "车" + _0x51be00 + ": ") + _0x197dd0 + (_0x24ffb5 !== undefined ? "/" + _0x24ffb5 + "圣" : "") + "</span>\n                    </div>\n                  ";
    }).join("") + "\n              </div>\n            </div>\n            <div class=\"club-extra-row\">\n              <span class=\"alliance-tag " + _0x4fd57a(_0x22966c.announcement).replace(/联盟/g, "") + "\">" + _0x4fd57a(_0x22966c.announcement) + "</span>\n              " + (_0x22966c.announcement ? "<span class=\"announcement\" title=\"" + _0x22966c.announcement + "\">公告: " + (_0x22966c.announcement.length > 30 ? _0x22966c.announcement.substring(0, 30) + "..." : _0x22966c.announcement) + "</span>" : "") + "\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
  };
  const _0x40e1bb = async _0x3b280f => {
    {
      _0x1fa4fe = _0x3b280f || _0x4bcff2();
      const _0x3f5299 = _0x20f514();
      const _0x4b5b40 = new Date().getHours();
      const _0x506196 = document.getElementById("qa-salt-match-date");
      if (_0x506196) {
        _0x506196.value = _0x1fa4fe;
      }
      const _0x2bbfef = document.getElementById("qa-salt-match-content");
      if (_0x2bbfef) {
        _0x2bbfef.innerHTML = "<div class=\"helper-text\">正在加载盐场匹配数据...</div>";
      }
      try {
        {
          let _0x25af6b;
          if (_0x1fa4fe === _0x3f5299 && _0x4b5b40 < 20) {
            {
              _0x1ddb84("[盐场匹配] 获取实时匹配数据", "info");
              const _0x227319 = await _0x361aec("legion_getbattlefield", {});
              _0x1ddb84("[盐场匹配] 战场信息", "data");
              _0x1ddb84(_0x227319, "data");
              if (!_0x227319?.["info"]) {
                {
                  if (_0x2bbfef) {
                    _0x2bbfef.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>";
                  }
                  return null;
                }
              }
              const _0x7d260 = {
                phase: _0x227319.info.phase,
                battlefieldId: _0x227319.info.battlefieldId
              };
              const _0x2aeb37 = await _0x361aec("legion_getopponent", _0x7d260);
              if (!_0x2aeb37?.["opponentList"]) {
                if (_0x2bbfef) {
                  _0x2bbfef.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>";
                }
                return null;
              }
              const _0x5269a0 = [];
              for (const _0x10b8a6 of _0x2aeb37.opponentList) {
                try {
                  {
                    const _0x2bbfe5 = {
                      legionId: _0x10b8a6.id
                    };
                    const _0x5f5034 = await _0x361aec("legion_getinfobyid", _0x2bbfe5);
                    const _0x4f225d = Object.entries(_0x5f5034?.["legionData"]?.["members"] || {});
                    const _0x353c3c = [];
                    const _0x3434ec = [];
                    const _0x47422b = [];
                    for (let _0x3aee2a = 0; _0x3aee2a < Math.min(3, _0x4f225d.length); _0x3aee2a++) {
                      const [, _0x5593f] = _0x4f225d[_0x3aee2a];
                      if (_0x5593f.custom?.["red_quench_cnt"] !== undefined) {
                        {
                          _0x353c3c.push(_0x5593f.custom.red_quench_cnt + "红");
                        }
                      }
                      _0x3434ec.push(_0x5593f.headImg || "");
                      _0x47422b.push(_0x5593f.name || _0x5593f.nickName || "");
                    }
                    const _0x372352 = {
                      ..._0x10b8a6,
                      logo: _0x5f5034?.["legionData"]?.["logo"] || "",
                      redQuench: _0x5f5034?.["legionData"]?.["quenchNum"] || 0,
                      power: _0x5f5034?.["legionData"]?.["power"] || 0,
                      announcement: _0x5f5034?.["legionData"]?.["announcement"] || "",
                      sRScore: _0x10b8a6.sRScore ?? _0x10b8a6.score,
                      sRRank: _0x10b8a6.sRRank,
                      redno1: _0x353c3c[0] || "0红",
                      redno2: _0x353c3c[1] || "0红",
                      redno3: _0x353c3c[2] || "0红",
                      memberImg1: _0x3434ec[0] || "",
                      memberImg2: _0x3434ec[1] || "",
                      memberImg3: _0x3434ec[2] || "",
                      memberName1: _0x47422b[0] || "",
                      memberName2: _0x47422b[1] || "",
                      memberName3: _0x47422b[2] || ""
                    };
                    _0x5269a0.push(_0x372352);
                  }
                } catch (_0x1837f8) {
                  const _0x575f59 = {
                    ..._0x10b8a6,
                    redQuench: 0,
                    sRScore: _0x10b8a6.sRScore ?? _0x10b8a6.score,
                    sRRank: _0x10b8a6.sRRank
                  };
                  _0x5269a0.push(_0x575f59);
                }
                await new Promise(_0x3f817c => setTimeout(_0x3f817c, 100));
              }
              const _0x1b2702 = {
                legionRankList: _0x5269a0
              };
              _0x25af6b = _0x1b2702;
            }
          } else {
            {
              _0x1ddb84("[盐场匹配] 获取历史匹配数据", "info");
              const _0x13b4c3 = {
                date: _0x1fa4fe
              };
              const _0x25bfbd = await _0x361aec("legion_getwarrank", _0x13b4c3);
              _0x1ddb84("[盐场匹配] 历史数据", "data");
              _0x1ddb84(_0x25bfbd, "data");
              if (!_0x25bfbd?.["legionRankList"]) {
                {
                  if (_0x2bbfef) {
                    _0x2bbfef.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>";
                  }
                  return null;
                }
              }
              const _0x450f5d = [];
              for (const _0x24554e of _0x25bfbd.legionRankList) {
                try {
                  {
                    const _0x442795 = {
                      legionId: _0x24554e.id
                    };
                    const _0x24188f = await _0x361aec("legion_getinfobyid", _0x442795);
                    const _0x14bdef = Object.entries(_0x24188f?.["legionData"]?.["members"] || {});
                    const _0x12c376 = [];
                    const _0x5d13ca = [];
                    const _0x30ade1 = [];
                    const _0x56824c = [];
                    for (let _0xfd83bd = 0; _0xfd83bd < Math.min(3, _0x14bdef.length); _0xfd83bd++) {
                      {
                        const [_0x1894f7, _0x599fe0] = _0x14bdef[_0xfd83bd];
                        _0x599fe0.custom?.["red_quench_cnt"] !== undefined && _0x12c376.push(_0x599fe0.custom.red_quench_cnt + "红");
                        _0x30ade1.push(_0x599fe0.headImg || "");
                        _0x56824c.push(_0x599fe0.name || _0x599fe0.nickName || "");
                        try {
                          const _0x4d1cf3 = {
                            bottleType: 0,
                            includeBottleTeam: false,
                            isSearch: false,
                            roleId: _0x1894f7
                          };
                          const _0x2930e8 = await _0x361aec("rank_getroleinfo", _0x4d1cf3);
                          let _0x200f90 = 0;
                          for (const [, _0x58f22d] of Object.entries(_0x2930e8?.["roleInfo"]?.["heroes"] || {})) {
                            if (_0x58f22d.hB?.["active"] !== undefined) {
                              {
                                _0x200f90++;
                              }
                            }
                          }
                          _0x5d13ca.push(_0x200f90);
                        } catch (_0x54d32c) {
                          _0x5d13ca.push(0);
                        }
                        await new Promise(_0x4d676b => setTimeout(_0x4d676b, 100));
                      }
                    }
                    const _0x1389c7 = {
                      ..._0x24554e,
                      logo: _0x24188f?.["legionData"]?.["logo"] || "",
                      redQuench: _0x24188f?.["legionData"]?.["quenchNum"] || 0,
                      power: _0x24188f?.["legionData"]?.["power"] || 0,
                      announcement: _0x24188f?.["legionData"]?.["announcement"] || "",
                      sRScore: _0x24554e.sRScore ?? _0x24554e.score,
                      redno1: _0x12c376[0] || "0红",
                      redno2: _0x12c376[1] || "0红",
                      redno3: _0x12c376[2] || "0红",
                      hb1: _0x5d13ca[0] || 0,
                      hb2: _0x5d13ca[1] || 0,
                      hb3: _0x5d13ca[2] || 0,
                      memberImg1: _0x30ade1[0] || "",
                      memberImg2: _0x30ade1[1] || "",
                      memberImg3: _0x30ade1[2] || "",
                      memberName1: _0x56824c[0] || "",
                      memberName2: _0x56824c[1] || "",
                      memberName3: _0x56824c[2] || ""
                    };
                    _0x450f5d.push(_0x1389c7);
                  }
                } catch (_0x3d302c) {
                  const _0x1ffa22 = {
                    ..._0x24554e,
                    redQuench: 0,
                    sRScore: _0x24554e.sRScore ?? _0x24554e.score
                  };
                  _0x450f5d.push(_0x1ffa22);
                }
              }
              const _0x4fc668 = {
                legionRankList: _0x450f5d
              };
              _0x25af6b = _0x4fc668;
            }
          }
          _0x1ddb84("[盐场匹配] 查询完成, 俱乐部数: " + (_0x25af6b.legionRankList?.["length"] || 0), "success");
          _0x3c1ed1(_0x25af6b);
          return _0x25af6b;
        }
      } catch (_0x55789c) {
        _0x1ddb84("[盐场匹配] 查询失败: " + _0x55789c.message, "error");
        if (_0x2bbfef) {
          _0x2bbfef.innerHTML = "<div class=\"helper-text\">获取数据失败，请重试</div>";
        }
        return null;
      }
    }
  };
  const _0x32cc08 = () => {
    {
      if (!_0x42684c?.["legionRankList"]) {
        return;
      }
      _0x42684c.legionRankList.sort((_0x53d627, _0x50dcd2) => (_0x50dcd2.redQuench || 0) - (_0x53d627.redQuench || 0));
      _0x3c1ed1(_0x42684c, true);
    }
  };
  const _0x2e26d7 = () => {
    if (!_0x42684c?.["legionRankList"]) {
      return;
    }
    _0x42684c.legionRankList.sort((_0x230d39, _0x129b53) => ((_0x129b53.sRScore ?? _0x129b53.score) || 0) - ((_0x230d39.sRScore ?? _0x230d39.score) || 0));
    _0x3c1ed1(_0x42684c, true);
  };
  const _0xdb3ca1 = async () => {
    if (!_0x42684c?.["legionRankList"]) {
      return;
    }
    const _0x58229e = _0x33c2ea();
    const _0x48820f = _0x23072f(_0x42684c.legionRankList);
    const _0x1e4db3 = {
      hour12: false
    };
    const _0x176323 = new Date().toLocaleString("zh-CN", _0x1e4db3);
    const _0x34325f = _0x48820f.some(_0x146c06 => (_0x146c06.sRScore ?? _0x146c06.score) !== undefined && (_0x146c06.sRScore ?? _0x146c06.score) !== -1 && (_0x146c06.sRScore ?? _0x146c06.score) !== 0);
    const _0x35974f = 2;
    const _0x32161d = document.createElement("canvas");
    const _0x195ee2 = _0x32161d.getContext("2d");
    const _0x4fe698 = 20;
    const _0x237985 = 50;
    const _0x2e59bb = 60;
    const _0x4faf2f = 30;
    const _0x2f2f29 = _0x34325f ? ["排名", "俱乐部", "区服", "战力", "红淬", "积分", "车头信息", "联盟", "公告"] : ["排名", "俱乐部", "区服", "战力", "红淬", "车头信息", "联盟", "公告"];
    const _0x4416f6 = _0x34325f ? [50, 160, 50, 90, 70, 70, 360, 70, 220] : [50, 160, 50, 90, 70, 360, 70, 300];
    const _0x8fad7c = _0x4416f6.reduce((_0x316965, _0x50f515) => _0x316965 + _0x50f515, 0) + _0x4fe698 * 2;
    const _0x43d2af = _0x2e59bb + _0x48820f.length * _0x237985 + _0x4fe698 * 2 + _0x4faf2f;
    _0x32161d.width = _0x8fad7c * _0x35974f;
    _0x32161d.height = _0x43d2af * _0x35974f;
    _0x195ee2.scale(_0x35974f, _0x35974f);
    _0x195ee2.fillStyle = _0x58229e.bg;
    _0x195ee2.fillRect(0, 0, _0x8fad7c, _0x43d2af);
    _0x195ee2.fillStyle = _0x58229e.text;
    _0x195ee2.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x195ee2.fillText("盐场匹配详情 - " + _0x1fa4fe, _0x4fe698, _0x4fe698 + 20);
    const _0x53620e = _0x2e59bb;
    _0x195ee2.fillStyle = _0x58229e.headerBg;
    _0x195ee2.fillRect(_0x4fe698, _0x53620e, _0x8fad7c - _0x4fe698 * 2, 30);
    _0x195ee2.fillStyle = _0x58229e.headerText;
    _0x195ee2.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0xba31c4 = _0x4fe698;
    _0x2f2f29.forEach((_0x5dcf22, _0x24c487) => {
      _0x195ee2.fillText(_0x5dcf22, _0xba31c4 + 8, _0x53620e + 20);
      _0xba31c4 += _0x4416f6[_0x24c487];
    });
    const _0x3d612f = _0x48820f.map(_0xbd423d => _0x2c8a4f(_0xbd423d.logo));
    const _0x3dc4be = _0x48820f.flatMap(_0x1de1c8 => [_0x2c8a4f(_0x1de1c8.memberImg1), _0x2c8a4f(_0x1de1c8.memberImg2), _0x2c8a4f(_0x1de1c8.memberImg3)]);
    const [_0x16ea4e, ..._0x3f0cba] = await Promise.all([Promise.all(_0x3d612f), ..._0x3dc4be]);
    const _0x2b20f8 = [];
    for (let _0xbb1fd5 = 0; _0xbb1fd5 < _0x48820f.length; _0xbb1fd5++) {
      {
        _0x2b20f8.push([_0x3f0cba[_0xbb1fd5 * 3], _0x3f0cba[_0xbb1fd5 * 3 + 1], _0x3f0cba[_0xbb1fd5 * 3 + 2]]);
      }
    }
    _0x195ee2.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x48820f.forEach((_0x171c7f, _0x44f00b) => {
      const _0x51098f = _0x53620e + 30 + _0x44f00b * _0x237985;
      _0x44f00b % 2 === 1 && (_0x195ee2.fillStyle = _0x58229e.zebraStripe, _0x195ee2.fillRect(_0x4fe698, _0x51098f, _0x8fad7c - _0x4fe698 * 2, _0x237985));
      _0x195ee2.fillStyle = _0x58229e.text;
      let _0x109984 = _0x4fe698;
      _0x195ee2.fillText(String(_0x44f00b + 1), _0x109984 + 8, _0x51098f + 30);
      _0x109984 += _0x4416f6[0];
      const _0x13460e = _0x16ea4e[_0x44f00b];
      _0x13460e && (_0x195ee2.save(), _0x195ee2.beginPath(), _0x195ee2.arc(_0x109984 + 8 + 14, _0x51098f + _0x237985 / 2, 14, 0, Math.PI * 2), _0x195ee2.clip(), _0x195ee2.drawImage(_0x13460e, _0x109984 + 8, _0x51098f + (_0x237985 - 28) / 2, 28, 28), _0x195ee2.restore());
      _0x195ee2.fillText(_0x171c7f.name || "-", _0x109984 + 44, _0x51098f + 30);
      _0x109984 += _0x4416f6[1];
      _0x195ee2.fillText(String(_0x171c7f.serverId || "--"), _0x109984 + 8, _0x51098f + 30);
      _0x109984 += _0x4416f6[2];
      _0x195ee2.fillText(_0x3d6faf(_0x171c7f.power), _0x109984 + 8, _0x51098f + 30);
      _0x109984 += _0x4416f6[3];
      _0x195ee2.fillStyle = _0x58229e.red;
      _0x195ee2.fillText(String(_0x171c7f.redQuench || 0), _0x109984 + 8, _0x51098f + 30);
      _0x195ee2.fillStyle = _0x58229e.text;
      _0x109984 += _0x4416f6[4];
      if (_0x34325f) {
        {
          _0x195ee2.fillStyle = _0x58229e.purple;
          const _0x28b5a5 = _0x171c7f.sRScore ?? _0x171c7f.score;
          _0x195ee2.fillText(_0x28b5a5 !== undefined && _0x28b5a5 !== -1 ? _0x101081(_0x28b5a5) : "--", _0x109984 + 8, _0x51098f + 30);
          _0x195ee2.fillStyle = _0x58229e.text;
          _0x109984 += _0x4416f6[5];
        }
      }
      const _0x247532 = _0x2b20f8[_0x44f00b] || [];
      const _0x511f4f = _0x109984;
      for (let _0x4d8f6b = 0; _0x4d8f6b < 3; _0x4d8f6b++) {
        const _0x2088dc = _0x511f4f + _0x4d8f6b * 115;
        const _0x49c8af = _0x247532[_0x4d8f6b];
        _0x49c8af && (_0x195ee2.save(), _0x195ee2.beginPath(), _0x195ee2.arc(_0x2088dc + 10 + 10, _0x51098f + _0x237985 / 2, 10, 0, Math.PI * 2), _0x195ee2.clip(), _0x195ee2.drawImage(_0x49c8af, _0x2088dc + 10, _0x51098f + (_0x237985 - 20) / 2, 20, 20), _0x195ee2.restore());
        const _0x1adae9 = _0x171c7f["memberName" + (_0x4d8f6b + 1)] || "";
        const _0x2d557e = _0x171c7f["redno" + (_0x4d8f6b + 1)] || "0红";
        const _0x2f4904 = _0x171c7f["hb" + (_0x4d8f6b + 1)];
        const _0x37ed15 = _0x1adae9 ? (_0x1adae9.length > 4 ? _0x1adae9.substring(0, 4) : _0x1adae9) + ":" : "";
        const _0x14365f = _0x2f4904 !== undefined ? "" + _0x37ed15 + _0x2d557e + "/" + _0x2f4904 + "圣" : "" + _0x37ed15 + _0x2d557e;
        _0x195ee2.fillText(_0x14365f, _0x2088dc + 34, _0x51098f + 30);
      }
      _0x109984 += _0x4416f6[_0x34325f ? 6 : 5];
      const _0x4c5346 = _0x4fd57a(_0x171c7f.announcement);
      _0x195ee2.fillStyle = _0x4c5346 === "梦盟" ? "#ec4899" : _0x4c5346 === "大联盟" ? "#3b82f6" : _0x4c5346 === "正义联盟" ? "#22c55e" : _0x4c5346 === "龙盟" ? "#f59e0b" : _0x58229e.textSecondary;
      _0x195ee2.fillText(_0x4c5346, _0x109984 + 8, _0x51098f + 30);
      _0x195ee2.fillStyle = _0x58229e.text;
      _0x109984 += _0x4416f6[_0x34325f ? 7 : 6];
      const _0x127d90 = (_0x171c7f.announcement || "").substring(0, _0x34325f ? 42 : 52);
      _0x195ee2.fillStyle = _0x58229e.textSecondary;
      _0x195ee2.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x195ee2.fillText(_0x127d90, _0x109984 + 8, _0x51098f + 30);
      _0x195ee2.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x195ee2.fillStyle = _0x58229e.text;
    });
    _0x195ee2.strokeStyle = _0x58229e.border;
    _0x195ee2.lineWidth = 1;
    _0x195ee2.strokeRect(_0x4fe698, _0x53620e, _0x8fad7c - _0x4fe698 * 2, 30 + _0x48820f.length * _0x237985);
    _0x195ee2.fillStyle = _0x58229e.footerText;
    _0x195ee2.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x195ee2.fillText("数据获取时间: " + _0x176323, _0x4fe698, _0x43d2af - _0x4fe698);
    await _0x4410da(_0x32161d, "盐场匹配_" + _0x1fa4fe.replace(/\//g, "-") + ".png", _0x30927d);
  };
  const _0x1ebbc1 = () => {
    const _0xbdc7f2 = document.getElementById("qa-salt-match-date");
    _0xbdc7f2 && !_0xbdc7f2.value && (_0xbdc7f2.value = _0x4bcff2());
  };
  const _0x1221b9 = () => {
    {
      const _0x14510b = document.getElementById("qa-salt-match-date");
      return _0x14510b ? _0x14510b.value : _0x4bcff2();
    }
  };
  const _0x548946 = {
    __proto__: null,
    exportSaltMatchImage: _0xdb3ca1,
    fetchSaltMatchInfo: _0x40e1bb,
    getSelectedDate: _0x1221b9,
    initSaltMatchDate: _0x1ebbc1,
    renderSaltMatchInfo: _0x3c1ed1,
    sortByRedQuench: _0x32cc08,
    sortByScore: _0x2e26d7
  };
  var _0x4b0064 = Object.freeze(_0x548946);
  let _0x4d60e5 = null;
  const _0x254084 = () => {
    {
      const _0x3e61b7 = new Date();
      const _0x5b06eb = _0x3e61b7.getDay();
      const _0x28e248 = _0x3e61b7.getHours();
      const _0xf83a75 = _0x3e61b7.getMinutes();
      const _0x388410 = _0x28e248 * 60 + _0xf83a75;
      const _0x2b5341 = 1195;
      const _0x276445 = 1290;
      return _0x5b06eb === 6 && _0x388410 >= _0x2b5341 && _0x388410 < _0x276445;
    }
  };
  const _0x1036f5 = () => {
    {
      const _0x100f9e = new Date();
      const _0x684573 = _0x100f9e.getDay();
      const _0x5d8daf = _0x100f9e.getHours();
      const _0x58aad8 = _0x100f9e.getMinutes();
      const _0x56732c = _0x5d8daf * 60 + _0x58aad8;
      const _0x400baa = 1195;
      const _0x54c72f = 1290;
      if (_0x684573 !== 6) {
        return "仅周六可用";
      }
      if (_0x56732c < _0x400baa) {
        const _0x3677c3 = _0x400baa - _0x56732c;
        const _0x229be5 = Math.floor(_0x3677c3 / 60);
        const _0x1567cf = _0x3677c3 % 60;
        return _0x229be5 > 0 ? _0x229be5 + "小时" + _0x1567cf + "分钟后开放" : _0x1567cf + "分钟后开放";
      }
      if (_0x56732c >= _0x54c72f) {
        return "已结束";
      }
      const _0x3e8c32 = _0x54c72f - _0x56732c;
      return "剩余" + _0x3e8c32 + "分钟";
    }
  };
  const _0x100e46 = () => {
    if (_0x4d60e5) {
      try {
        _0x4d60e5.close();
      } catch (_0x4eb625) {}
      _0x4d60e5 = null;
    }
  };
  const _0x463b96 = (_0x3f4d3c, _0x39ae67, _0x294007) => {
    {
      return new Promise((_0x17c3c4, _0xb41b63) => {
        {
          _0x100e46();
          const _0x24389d = encodeURIComponent(_0x294007);
          const _0x59c4f8 = _0x3f4d3c.startsWith("wss://") || _0x3f4d3c.startsWith("ws://") ? _0x3f4d3c : "wss://" + _0x3f4d3c;
          const _0x15b9ff = _0x59c4f8 + "?p=" + _0x24389d + "&e=x&sid2=" + _0x39ae67 + "&lang=chinese&sid2=" + _0x39ae67;
          try {
            {
              _0x4d60e5 = new WebSocket(_0x15b9ff);
              _0x4d60e5.binaryType = "arraybuffer";
              const _0x839d3e = setTimeout(() => {
                _0x100e46();
                _0xb41b63(new Error("连接超时"));
              }, 10000);
              _0x4d60e5.onopen = () => {
                clearTimeout(_0x839d3e);
                _0x1ddb84("[盐场地图] 战场服务器连接成功", "success");
                _0x17c3c4(_0x4d60e5);
              };
              _0x4d60e5.onerror = _0x3a48d8 => {
                {
                  clearTimeout(_0x839d3e);
                  _0x1ddb84("[盐场地图] 连接错误: " + (_0x3a48d8.message || "未知错误"), "error");
                  _0xb41b63(new Error("连接失败"));
                }
              };
              _0x4d60e5.onclose = () => {
                _0x1ddb84("[盐场地图] 战场连接已关闭", "info");
              };
            }
          } catch (_0x37c134) {
            _0xb41b63(_0x37c134);
          }
        }
      });
    }
  };
  const _0x571ea2 = (_0x40135c, _0x12496c, _0x20dbf0 = {}) => {
    {
      return new Promise((_0xa4a649, _0xe60019) => {
        if (!_0x40135c || _0x40135c.readyState !== WebSocket.OPEN) {
          _0xe60019(new Error("战场连接未就绪"));
          return;
        }
        const _0x491d21 = setTimeout(() => {
          {
            _0xe60019(new Error("请求超时"));
          }
        }, 10000);
        const _0x4b19c2 = _0x3cde43 => {
          {
            try {
              {
                let _0x475879;
                if (_0x3cde43.data instanceof ArrayBuffer) {
                  if (window.g_utils?.["bon"]?.["decode"]) {
                    const _0x174123 = window.g_utils.bon.decode(new Uint8Array(_0x3cde43.data));
                    _0x475879 = _0x174123;
                  } else {
                    {
                      const _0x5760af = new TextDecoder().decode(_0x3cde43.data);
                      _0x475879 = JSON.parse(_0x5760af);
                    }
                  }
                } else {
                  _0x475879 = JSON.parse(_0x3cde43.data);
                }
                (_0x475879.cmd === _0x12496c + "resp" || _0x475879.cmd === _0x12496c) && (clearTimeout(_0x491d21), _0x40135c.removeEventListener("message", _0x4b19c2), _0xa4a649(_0x475879));
              }
            } catch (_0x5447c0) {}
          }
        };
        _0x40135c.addEventListener("message", _0x4b19c2);
        const _0x40097f = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode(_0x20dbf0),
          cmd: _0x12496c,
          seq: 1,
          time: Date.now()
        } : {
          ack: 0,
          cmd: _0x12496c,
          params: _0x20dbf0,
          seq: 1,
          time: Date.now()
        };
        window.g_utils?.["bon"]?.["encode"] ? _0x40135c.send(window.g_utils.bon.encode(_0x40097f)) : _0x40135c.send(JSON.stringify(_0x40097f));
      });
    }
  };
  const _0x39e888 = _0x1b5d28 => {
    const _0x3134c3 = document.getElementById("qa-salt-map-content");
    if (!_0x3134c3) {
      return;
    }
    if (!_0x1b5d28 || !_0x1b5d28.legions || Object.keys(_0x1b5d28.legions).length === 0) {
      _0x3134c3.innerHTML = "<div class=\"helper-text\">暂无地图数据</div>";
      return;
    }
    const _0x5e95d4 = Object.entries(_0x1b5d28.legions);
    let _0x58cc39 = Infinity;
    let _0x1dbddf = -Infinity;
    let _0x191bf9 = Infinity;
    let _0x4a45f3 = -Infinity;
    _0x5e95d4.forEach(([, _0x3a0d14]) => {
      const _0x53b56c = _0x3a0d14.position || {};
      _0x53b56c.x !== undefined && (_0x58cc39 = Math.min(_0x58cc39, _0x53b56c.x), _0x1dbddf = Math.max(_0x1dbddf, _0x53b56c.x));
      _0x53b56c.y !== undefined && (_0x191bf9 = Math.min(_0x191bf9, _0x53b56c.y), _0x4a45f3 = Math.max(_0x4a45f3, _0x53b56c.y));
    });
    const _0x7e2d77 = 300;
    const _0x477b68 = 200;
    const _0x543cc3 = 20;
    const _0x90ce2f = _0x6e5e0d => {
      if (_0x1dbddf === _0x58cc39) {
        return _0x7e2d77 / 2;
      }
      return _0x543cc3 + (_0x6e5e0d - _0x58cc39) / (_0x1dbddf - _0x58cc39) * (_0x7e2d77 - 2 * _0x543cc3);
    };
    const _0x25bc5f = _0x1ad0e8 => {
      {
        if (_0x4a45f3 === _0x191bf9) {
          return _0x477b68 / 2;
        }
        return _0x543cc3 + (_0x1ad0e8 - _0x191bf9) / (_0x4a45f3 - _0x191bf9) * (_0x477b68 - 2 * _0x543cc3);
      }
    };
    _0x3134c3.innerHTML = "\n    <div class=\"salt-map-container\">\n      <div class=\"salt-map-canvas\" style=\"position:relative;width:" + _0x7e2d77 + "px;height:" + _0x477b68 + "px;background:#1a1a2e;border-radius:8px;margin:0 auto 12px;\">\n        " + _0x5e95d4.map(([_0x374bfb, _0x25ac61]) => {
      {
        const _0x149ec1 = _0x25ac61.position || {};
        const _0x336c54 = _0x90ce2f(_0x149ec1.x || 0);
        const _0x4dcf17 = _0x25bc5f(_0x149ec1.y || 0);
        const _0x1ad420 = _0x25ac61.color || "#4ade80";
        return "\n            <div class=\"map-marker\" style=\"position:absolute;left:" + _0x336c54 + "px;top:" + _0x4dcf17 + "px;transform:translate(-50%,-50%);\" title=\"" + (_0x25ac61.name || _0x374bfb) + "\">\n              <div style=\"width:12px;height:12px;background:" + _0x1ad420 + ";border-radius:50%;border:2px solid #fff;box-shadow:0 0 6px " + _0x1ad420 + ";\"></div>\n            </div>\n          ";
      }
    }).join("") + "\n      </div>\n      <div class=\"salt-map-legend\">\n        <div class=\"legend-title\">俱乐部位置</div>\n        <div class=\"legend-list\">\n          " + _0x5e95d4.map(([_0x3739a, _0x3d8d9c]) => {
      const _0x561d57 = _0x3d8d9c.position || {};
      const _0x25d947 = _0x3d8d9c.color || "#4ade80";
      return "\n              <div class=\"legend-item\" style=\"display:flex;align-items:center;gap:8px;padding:4px 0;\">\n                <span style=\"width:10px;height:10px;background:" + _0x25d947 + ";border-radius:50%;flex-shrink:0;\"></span>\n                <span style=\"flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">" + (_0x3d8d9c.name || _0x3739a) + "</span>\n                <span style=\"color:#9ca3af;font-size:11px;\">(" + (_0x561d57.x || 0) + ", " + (_0x561d57.y || 0) + ")</span>\n              </div>\n            ";
    }).join("") + "\n        </div>\n      </div>\n    </div>\n  ";
  };
  const _0x6e1dce = async () => {
    {
      if (!_0x254084()) {
        _0x30927d("当前不在查询时间范围内（周六 19:55-21:30）", "warning");
        return null;
      }
      const _0x822703 = document.getElementById("qa-salt-map-content");
      if (_0x822703) {
        _0x822703.innerHTML = "<div class=\"helper-text\">正在获取地图数据...</div>";
      }
      try {
        {
          const _0x1641d2 = await _0x361aec("legion_getbattlefield", {});
          _0x1ddb84("[盐场地图] 战场信息响应", "data");
          _0x1ddb84(_0x1641d2, "data");
          const _0x187fb8 = _0x1641d2?.["body"]?.["info"] || _0x1641d2?.["info"] || {};
          const _0x58c434 = _0x187fb8.domainName;
          const _0xdc61f0 = _0x187fb8.sid;
          if (!_0x58c434) {
            if (_0x822703) {
              _0x822703.innerHTML = "<div class=\"helper-text\">未获取到战场服务器信息</div>";
            }
            _0x30927d("未获取到战场服务器信息", "error");
            return null;
          }
          if (!_0xdc61f0) {
            if (_0x822703) {
              _0x822703.innerHTML = "<div class=\"helper-text\">战场未开放或已结束，无法获取地图数据</div>";
            }
            _0x30927d("战场未开放或已结束", "warning");
            return null;
          }
          _0x1ddb84("[盐场地图] 战场服务器: " + _0x58c434 + ", SID: " + _0xdc61f0, "info");
          const _0x46e0e8 = () => {
            {
              if (window.ws?.["connectOptions"]?.["token"]) {
                _0x1ddb84("[盐场地图] 从 ws.connectOptions.token 获取到凭证", "success");
                return window.ws.connectOptions.token;
              }
              if (window.ws?.["_connParam"]?.["roleToken"]) {
                {
                  _0x1ddb84("[盐场地图] 从 ws._connParam.roleToken 获取到凭证", "success");
                  return window.ws._connParam.roleToken;
                }
              }
              return "";
            }
          };
          const _0xb272aa = _0x46e0e8();
          if (!_0xb272aa) {
            if (_0x822703) {
              _0x822703.innerHTML = "<div class=\"helper-text\">未获取到登录凭证</div>";
            }
            _0x30927d("未获取到登录凭证", "error");
            return null;
          }
          _0x1ddb84("[盐场地图] 获取到凭证长度: " + _0xb272aa.length, "info");
          const _0xd55dce = await _0x463b96(_0x58c434, _0xdc61f0, _0xb272aa);
          const _0x9a1b11 = await _0x571ea2(_0xd55dce, "war_enterbattlefield", {});
          _0x1ddb84("[盐场地图] 进入战场响应", "data");
          _0x1ddb84(_0x9a1b11, "data");
          const _0x38ca55 = _0x9a1b11?.["body"] || _0x9a1b11 || {};
          const _0x242d44 = _0x38ca55.battlefield || {};
          const _0x4c8729 = _0x242d44.legions || {};
          _0x100e46();
          if (Object.keys(_0x4c8729).length === 0) {
            {
              if (_0x822703) {
                _0x822703.innerHTML = "<div class=\"helper-text\">未获取到俱乐部位置数据</div>";
              }
              _0x30927d("未获取到俱乐部位置数据", "warning");
              return null;
            }
          }
          _0x1ddb84("[盐场地图] 获取到 " + Object.keys(_0x4c8729).length + " 个俱乐部位置", "success");
          const _0xf93c9b = {
            legions: _0x4c8729
          };
          _0x39e888(_0xf93c9b);
          _0x30927d("地图数据获取成功", "success");
          const _0x54f682 = {
            legions: _0x4c8729
          };
          return _0x54f682;
        }
      } catch (_0x3fe31a) {
        {
          _0x1ddb84("[盐场地图] 获取失败: " + _0x3fe31a.message, "error");
          if (_0x822703) {
            _0x822703.innerHTML = "<div class=\"helper-text\">获取失败: " + _0x3fe31a.message + "</div>";
          }
          _0x30927d("获取地图数据失败: " + _0x3fe31a.message, "error");
          _0x100e46();
          return null;
        }
      }
    }
  };
  const _0x15d066 = () => {
    const _0x5b8674 = document.getElementById("qa-salt-map-time-status");
    const _0x5e0308 = document.querySelector("[data-action=\"salt-map-query\"]");
    if (_0x5b8674) {
      {
        const _0x1ca395 = _0x254084();
        _0x5b8674.textContent = _0x1036f5();
        _0x5b8674.className = "time-status-badge " + (_0x1ca395 ? "available" : "unavailable");
      }
    }
    _0x5e0308 && (_0x5e0308.disabled = !_0x254084());
  };
  const _0x2160fb = {
    __proto__: null,
    fetchSaltMap: _0x6e1dce,
    getTimeStatusText: _0x1036f5,
    isQueryTimeAvailable: _0x254084,
    updateTimeStatus: _0x15d066
  };
  var _0x22ebf2 = Object.freeze(_0x2160fb);
  const _0x5a953e = {
    "招募": 1,
    "宝箱": 2,
    "捕获": 3,
    "盐罐": 4,
    "金砖": 5
  };
  const _0x29219b = {
    [_0x5a953e["招募"]]: "招募",
    [_0x5a953e["宝箱"]]: "宝箱",
    [_0x5a953e["捕获"]]: "捕获",
    [_0x5a953e["盐罐"]]: "盐罐",
    [_0x5a953e["金砖"]]: "金砖"
  };
  const _0x2ad90b = _0x29219b;
  const _0x431829 = {
    num: 80
  };
  const _0x14ec45 = {
    num: 160
  };
  const _0x4e7fd4 = {
    num: 240
  };
  const _0x524860 = {
    num: 320
  };
  const _0x466b1f = {
    num: 400
  };
  const _0x3ce42c = {
    num: 560
  };
  const _0x19f23d = {
    num: 720
  };
  const _0x59310a = {
    num: 880
  };
  const _0x30a2e6 = {
    num: 1040
  };
  const _0x6acb3c = {
    num: 1200
  };
  const _0x3b3b98 = {
    num: 1440
  };
  const _0x300bd9 = {
    num: 1680
  };
  const _0x2e8a20 = {
    num: 1920
  };
  const _0x12a600 = {
    num: 2160
  };
  const _0x4e8df6 = {
    num: 2400
  };
  const _0x534b02 = {
    num: 2720
  };
  const _0x38367d = {
    num: 3040
  };
  const _0x5a3a05 = {
    num: 3360
  };
  const _0x28e33b = {
    num: 3680
  };
  const _0xf4ea6a = {
    num: 4000
  };
  const _0x29477e = {
    num: 2000
  };
  const _0x4b5b05 = {
    num: 4000
  };
  const _0xf360e7 = {
    num: 6000
  };
  const _0x585a8b = {
    num: 8000
  };
  const _0x153f7f = {
    num: 10000
  };
  const _0x9537a7 = {
    num: 14000
  };
  const _0x26b3c5 = {
    num: 18000
  };
  const _0x2dd840 = {
    num: 22000
  };
  const _0x278ad2 = {
    num: 26000
  };
  const _0x4af3d9 = {
    num: 30000
  };
  const _0xd17cfb = {
    num: 36000
  };
  const _0x2e7a28 = {
    num: 42000
  };
  const _0x599fc2 = {
    num: 48000
  };
  const _0x466582 = {
    num: 54000
  };
  const _0x1d627d = {
    num: 60000
  };
  const _0xb7a93a = {
    num: 68000
  };
  const _0x5e67f4 = {
    num: 76000
  };
  const _0x3d4c5e = {
    num: 84000
  };
  const _0x4cef60 = {
    num: 92000
  };
  const _0x45ee4e = {
    num: 100000
  };
  const _0x19794f = {
    num: 25
  };
  const _0x258910 = {
    num: 50
  };
  const _0x5b1d32 = {
    num: 75
  };
  const _0x5e330e = {
    num: 125
  };
  const _0xda88d3 = {
    num: 175
  };
  const _0x4939e3 = {
    num: 225
  };
  const _0xe8e6aa = {
    num: 300
  };
  const _0x3a5ac6 = {
    num: 375
  };
  const _0x3e4a1e = {
    num: 450
  };
  const _0x2db8da = {
    num: 525
  };
  const _0x491152 = {
    num: 625
  };
  const _0x14558e = {
    num: 725
  };
  const _0x49ea5b = {
    num: 825
  };
  const _0x3a1645 = {
    num: 925
  };
  const _0x4fe323 = {
    num: 1050
  };
  const _0x2fdf26 = {
    num: 1175
  };
  const _0x5d5630 = {
    num: 1300
  };
  const _0x10ec59 = {
    num: 1450
  };
  const _0x4ae469 = {
    num: 1600
  };
  const _0x5c67d9 = {
    num: 1750
  };
  const _0x18c42d = {
    num: 3
  };
  const _0x239a00 = {
    num: 6
  };
  const _0x9276b0 = {
    num: 9
  };
  const _0xc94bc0 = {
    num: 12
  };
  const _0x2f3d13 = {
    num: 15
  };
  const _0x3739eb = {
    num: 20
  };
  const _0x2ea645 = {
    num: 25
  };
  const _0x2072d3 = {
    num: 30
  };
  const _0x1ba397 = {
    num: 35
  };
  const _0x54c1d9 = {
    num: 40
  };
  const _0x168628 = {
    num: 48
  };
  const _0x509041 = {
    num: 56
  };
  const _0x11813c = {
    num: 64
  };
  const _0x5b88a1 = {
    num: 72
  };
  const _0x3647b5 = {
    num: 80
  };
  const _0x6cd157 = {
    num: 90
  };
  const _0x2be668 = {
    num: 100
  };
  const _0x56301f = {
    num: 110
  };
  const _0x44316c = {
    num: 120
  };
  const _0x28868c = {
    num: 130
  };
  const _0x1a0a55 = {
    num: 10000
  };
  const _0x5dd46f = {
    num: 20000
  };
  const _0x10c08c = {
    num: 30000
  };
  const _0x34064c = {
    num: 40000
  };
  const _0x24c150 = {
    num: 50000
  };
  const _0x478b5b = {
    num: 70000
  };
  const _0x1411e6 = {
    num: 90000
  };
  const _0x27570d = {
    num: 110000
  };
  const _0x2d1623 = {
    num: 130000
  };
  const _0x594a55 = {
    num: 150000
  };
  const _0x55acb2 = {
    num: 180000
  };
  const _0x3eacdd = {
    num: 210000
  };
  const _0x1c8d42 = {
    num: 240000
  };
  const _0x5cf15a = {
    num: 270000
  };
  const _0xc6a32b = {
    num: 300000
  };
  const _0x2e2920 = {
    num: 340000
  };
  const _0x251d9b = {
    num: 380000
  };
  const _0x3e7a48 = {
    num: 420000
  };
  const _0x34ddfd = {
    num: 460000
  };
  const _0x2030b4 = {
    num: 500000
  };
  const _0x4b89b4 = {
    [_0x5a953e["招募"]]: [_0x431829, _0x14ec45, _0x4e7fd4, _0x524860, _0x466b1f, _0x3ce42c, _0x19f23d, _0x59310a, _0x30a2e6, _0x6acb3c, _0x3b3b98, _0x300bd9, _0x2e8a20, _0x12a600, _0x4e8df6, _0x534b02, _0x38367d, _0x5a3a05, _0x28e33b, _0xf4ea6a],
    [_0x5a953e["宝箱"]]: [_0x29477e, _0x4b5b05, _0xf360e7, _0x585a8b, _0x153f7f, _0x9537a7, _0x26b3c5, _0x2dd840, _0x278ad2, _0x4af3d9, _0xd17cfb, _0x2e7a28, _0x599fc2, _0x466582, _0x1d627d, _0xb7a93a, _0x5e67f4, _0x3d4c5e, _0x4cef60, _0x45ee4e],
    [_0x5a953e["捕获"]]: [_0x19794f, _0x258910, _0x5b1d32, _0x5e330e, _0xda88d3, _0x4939e3, _0xe8e6aa, _0x3a5ac6, _0x3e4a1e, _0x2db8da, _0x491152, _0x14558e, _0x49ea5b, _0x3a1645, _0x4fe323, _0x2fdf26, _0x5d5630, _0x10ec59, _0x4ae469, _0x5c67d9],
    [_0x5a953e["盐罐"]]: [_0x18c42d, _0x239a00, _0x9276b0, _0xc94bc0, _0x2f3d13, _0x3739eb, _0x2ea645, _0x2072d3, _0x1ba397, _0x54c1d9, _0x168628, _0x509041, _0x11813c, _0x5b88a1, _0x3647b5, _0x6cd157, _0x2be668, _0x56301f, _0x44316c, _0x28868c],
    [_0x5a953e["金砖"]]: [_0x1a0a55, _0x5dd46f, _0x10c08c, _0x34064c, _0x24c150, _0x478b5b, _0x1411e6, _0x27570d, _0x2d1623, _0x594a55, _0x55acb2, _0x3eacdd, _0x1c8d42, _0x5cf15a, _0xc6a32b, _0x2e2920, _0x251d9b, _0x3e7a48, _0x34ddfd, _0x2030b4]
  };
  const _0x1c0f88 = _0x4b89b4;
  const _0x4e74e7 = _0xe0fca1 => {
    const _0x34fe73 = _0xe0fca1?.["activity"]?.["commonActivityInfo"] || _0xe0fca1?.["commonActivityInfo"];
    if (!_0x34fe73) {
      return null;
    }
    const _0x2eac86 = Object.values(_0x34fe73).find(_0x48b747 => {
      if (!_0x48b747?.["task"]) {
        return false;
      }
      return Object.keys(_0x48b747.task).some(_0x1d9a42 => {
        const _0x51c507 = Number(_0x1d9a42);
        return _0x51c507 >= 1 && _0x51c507 <= 5;
      });
    });
    return _0x2eac86;
  };
  const _0x48aa91 = () => {
    return !!_0x386da5.consumptionData;
  };
  const _0x4ada34 = () => {
    {
      const _0x297edb = _0x386da5.consumptionData;
      if (!_0x297edb) {
        return [];
      }
      const _0x4a81be = _0x297edb.task || {};
      return Object.keys(_0x2ad90b).map(_0x565365 => {
        {
          const _0x3fbb99 = Number(_0x565365);
          const _0x5560bf = _0x4a81be[_0x3fbb99] || 0;
          const _0x1e8b5e = _0x1c0f88[_0x3fbb99] || [];
          let _0x58b644 = 0;
          let _0xf7ace0 = false;
          const _0x49e43b = _0x1e8b5e.find(_0x4e8b29 => _0x4e8b29.num > _0x5560bf);
          if (_0x49e43b) {
            _0x58b644 = _0x49e43b.num;
          } else {
            _0x1e8b5e.length > 0 && (_0x58b644 = _0x1e8b5e[_0x1e8b5e.length - 1].num, _0xf7ace0 = true);
          }
          let _0x296516 = 0;
          if (_0xf7ace0) {
            _0x296516 = 100;
          } else {
            if (_0x58b644 > 0) {
              _0x296516 = Math.min(100, _0x5560bf / _0x58b644 * 100);
            }
          }
          const _0x447331 = {
            id: _0x3fbb99,
            name: _0x2ad90b[_0x3fbb99],
            current: _0x5560bf,
            nextTarget: _0x58b644,
            percentage: _0x296516,
            isCompleted: _0xf7ace0
          };
          return _0x447331;
        }
      });
    }
  };
  const _0xf307df = () => {
    {
      const _0x3d7caa = document.getElementById("qa-consumption-content");
      if (!_0x3d7caa) {
        return;
      }
      const _0x5ab6d1 = _0x48aa91();
      const _0x28935c = _0x4ada34();
      const _0x754612 = document.getElementById("qa-consumption-normal-item");
      const _0x5555d0 = document.getElementById("qa-consumption-gold-item");
      if (_0x754612) {
        _0x754612.textContent = _0x386da5.consumptionActivityItem || 0;
      }
      if (_0x5555d0) {
        _0x5555d0.textContent = _0x386da5.consumptionGoldItem || 0;
      }
      const _0x243546 = document.getElementById("qa-consumption-badge");
      if (_0x243546) {
        _0x243546.textContent = _0x5ab6d1 ? "进行中" : "未开放";
      }
      if (!_0x5ab6d1) {
        _0x3d7caa.innerHTML = "<div class=\"helper-text\">暂无活动数据，请点击刷新</div>";
        return;
      }
      const _0x45eade = _0x28935c.map(_0x2a0083 => {
        {
          const _0x47f3d3 = _0x2a0083.isCompleted ? "#52c41a" : "#1890ff";
          const _0x6af49d = _0x2a0083.isCompleted ? "<span style=\"color:#52c41a;\">已完成所有档位</span>" : "<span style=\"color:var(--text-tertiary);\">下一档: " + _0x2a0083.nextTarget + " (还需 " + (_0x2a0083.nextTarget - _0x2a0083.current) + ")</span>";
          return "\n      <div class=\"consumption-item\">\n        <div class=\"consumption-header\">\n          <span class=\"consumption-name\">" + _0x2a0083.name + "</span>\n          <span class=\"consumption-values\">\n            <span style=\"color:#1890ff;font-weight:600;\">" + _0x2a0083.current + "</span>\n            <span style=\"color:var(--text-tertiary);margin:0 2px;\">/</span>\n            <span style=\"color:var(--text-secondary);\">" + _0x2a0083.nextTarget + "</span>\n          </span>\n        </div>\n        <div class=\"consumption-bar\">\n          <div class=\"consumption-bar-fill\" style=\"width:" + _0x2a0083.percentage + "%;background:" + _0x47f3d3 + ";\"></div>\n        </div>\n        <div class=\"consumption-footer\">" + _0x6af49d + "</div>\n      </div>\n    ";
        }
      }).join("");
      _0x3d7caa.innerHTML = "<div class=\"consumption-list\">" + _0x45eade + "</div>";
    }
  };
  const _0x4537c8 = async () => {
    {
      try {
        const _0x2e7f01 = await _0x361aec("activity_get", {});
        const _0x24d4c0 = _0x4e74e7(_0x2e7f01);
        _0x386da5.consumptionData = _0x24d4c0;
        const _0x5aaf0b = {
          items: window.ROLE?.["items"]
        };
        _0x4e63e5(_0x5aaf0b);
        _0xf307df();
        _0x30927d("刷新消耗活动数据成功", "success");
      } catch (_0x2c1dcf) {
        _0x30927d("刷新消耗活动数据失败: " + _0x2c1dcf.message, "error");
      }
    }
  };
  const _0x4e63e5 = _0x4c07f9 => {
    {
      const _0x475221 = _0x4c07f9?.["items"] || {};
      _0x386da5.consumptionActivityItem = _0x16e7d2(_0x475221, 5261);
      _0x386da5.consumptionGoldItem = _0x16e7d2(_0x475221, 5262);
      const _0x15f0c6 = document.getElementById("qa-consumption-normal-item");
      const _0x2543b4 = document.getElementById("qa-consumption-gold-item");
      if (_0x15f0c6) {
        _0x15f0c6.textContent = _0x386da5.consumptionActivityItem;
      }
      if (_0x2543b4) {
        _0x2543b4.textContent = _0x386da5.consumptionGoldItem;
      }
    }
  };
  const _0x1040dd = async (_0x4bc432 = 4) => {
    try {
      const _0x1232e7 = {
        itemId: 5261,
        index: 0,
        number: _0x4bc432
      };
      await _0x361aec("item_openpack", _0x1232e7);
      const _0x403766 = {
        items: window.ROLE?.["items"]
      };
      _0x4e63e5(_0x403766);
      _0x30927d("成功打开" + _0x4bc432 + "个道具", "success");
    } catch (_0x235b92) {
      _0x30927d("打开道具失败: " + _0x235b92.message, "error");
    }
  };
  const _0x3ffdcd = {
    __proto__: null,
    ConsumptionTaskID: _0x5a953e,
    TaskNames: _0x2ad90b,
    fetchConsumptionData: _0x4537c8,
    getProgressList: _0x4ada34,
    hasConsumptionData: _0x48aa91,
    missionTypes: _0x1c0f88,
    openConsumptionItem: _0x1040dd,
    parseConsumptionData: _0x4e74e7,
    syncConsumptionItems: _0x4e63e5,
    updateConsumptionDisplay: _0xf307df
  };
  var _0x2fd5bd = Object.freeze(_0x3ffdcd);
  const _0x158974 = () => {
    const _0x41124f = _0x386da5.theme === "dark";
    const _0x366333 = {
      bg: _0x41124f ? "#1a1a2e" : "#ffffff",
      text: _0x41124f ? "#f9fafb" : "#1f2937",
      textSecondary: _0x41124f ? "#9ca3af" : "#6b7280",
      headerBg: _0x41124f ? "#374151" : "#f3f4f6",
      headerText: _0x41124f ? "#e5e7eb" : "#374151",
      rowAlt: _0x41124f ? "#2d2d44" : "#f9fafb",
      border: _0x41124f ? "#4b5563" : "#e5e7eb",
      summaryBg: _0x41124f ? "#374151" : "#f3f4f6",
      footerText: _0x41124f ? "#6b7280" : "#9ca3af"
    };
    return _0x366333;
  };
  let _0xe44854 = null;
  let _0x4ef132 = null;
  let _0x1bd210 = "";
  const _0x19beac = _0x3ae1f0 => {
    {
      return new Promise(_0x3e46e3 => {
        {
          if (!_0x3ae1f0) {
            _0x3e46e3(null);
            return;
          }
          const _0x436d33 = new Image();
          _0x436d33.crossOrigin = "anonymous";
          _0x436d33.onload = () => _0x3e46e3(_0x436d33);
          _0x436d33.onerror = () => _0x3e46e3(null);
          _0x436d33.src = _0x3ae1f0;
          setTimeout(() => _0x3e46e3(null), 3000);
        }
      });
    }
  };
  const _0x21a1ec = () => {
    const _0x3c6f43 = new Date();
    const _0x4a119c = _0x3c6f43.getDay();
    const _0x22f347 = _0x4a119c === 0 ? 1 : _0x4a119c === 6 ? 0 : _0x4a119c + 1;
    const _0x5ee720 = new Date(_0x3c6f43);
    _0x5ee720.setDate(_0x3c6f43.getDate() - _0x22f347);
    const _0x45cee2 = _0x5ee720.getFullYear();
    const _0x106285 = String(_0x5ee720.getMonth() + 1).padStart(2, "0");
    const _0x5d69ef = String(_0x5ee720.getDate()).padStart(2, "0");
    return _0x45cee2 + "/" + _0x106285 + "/" + _0x5d69ef;
  };
  const _0x457665 = _0xe0fe46 => {
    {
      if (!_0xe0fe46) {
        return "--";
      }
      const _0x367c87 = new Date(_0xe0fe46 * 1000);
      return String(_0x367c87.getHours()).padStart(2, "0") + ":" + String(_0x367c87.getMinutes()).padStart(2, "0");
    }
  };
  const _0xe0a6c5 = _0x2cb12b => {
    {
      if (_0x2cb12b === 2) {
        return {
          text: "胜利",
          class: "win"
        };
      }
      const _0x4b61d4 = {
        text: "失败",
        class: "lose"
      };
      return _0x4b61d4;
    }
  };
  const _0x16d77a = _0x35769e => {
    {
      return _0x35769e === 0 ? "进攻" : "防守";
    }
  };
  const _0x1f6448 = _0x58aee4 => {
    _0xe44854 = _0x58aee4;
    const _0x68317 = document.getElementById("qa-battle-records-content");
    if (!_0x68317) {
      return;
    }
    if (!_0x58aee4 || !_0x58aee4.roleDetailsList || _0x58aee4.roleDetailsList.length === 0) {
      _0x68317.innerHTML = "<div class=\"helper-text\">暂无战绩数据</div>";
      return;
    }
    const _0x1bfb98 = _0x58aee4.roleDetailsList;
    _0x68317.innerHTML = "\n    <div class=\"battle-records-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x1bd210 + "</div>\n      <div class=\"battle-records-list\">\n        " + _0x1bfb98.map((_0x31d506, _0x1cb5a5) => {
      const _0x446788 = _0x31d506.winCnt || 0;
      const _0x50e312 = _0x31d506.loseCnt || 0;
      const _0x3d0ceb = _0x50e312 > 0 ? (_0x446788 / _0x50e312).toFixed(2) : _0x446788;
      const _0x25614f = _0x50e312 > 0 ? _0x446788 / _0x50e312 : _0x446788;
      const _0x44cae4 = Math.max(_0x50e312 - 6, 0);
      let _0x19d21a = "";
      if (_0x50e312 < 5) {
        _0x19d21a = "name-red";
      } else {
        _0x25614f >= 1 ? _0x19d21a = "name-green" : _0x19d21a = "name-yellow";
      }
      return "\n          <div class=\"battle-member-card\" data-member-idx=\"" + _0x1cb5a5 + "\">\n            <div class=\"battle-member-header\" data-toggle-member=\"" + _0x1cb5a5 + "\">\n              <div class=\"battle-member-info\">\n                <span class=\"battle-rank\">#" + (_0x1cb5a5 + 1) + "</span>\n                <img src=\"" + (_0x31d506.headImg || "") + "\" class=\"battle-member-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                <span class=\"battle-member-name " + _0x19d21a + "\">" + (_0x31d506.name || "未知") + "</span>\n              </div>\n              <div class=\"battle-member-stats\">\n                <span class=\"stat-inline win\">胜 " + _0x446788 + "</span>\n                <span class=\"stat-inline lose\">负 " + _0x50e312 + "</span>\n                <span class=\"stat-inline kd\">KD " + _0x3d0ceb + "</span>\n                <span class=\"stat-inline dan\">丹 " + _0x44cae4 + "</span>\n                <span class=\"stat-inline building\">攻城 " + (_0x31d506.buildingCnt || 0) + "</span>\n                <span class=\"expand-icon\">▼</span>\n              </div>\n            </div>\n            <div class=\"battle-member-details\" style=\"display:none;\">\n              " + (_0x31d506.targetRoleList && _0x31d506.targetRoleList.length > 0 ? "\n                <div class=\"battle-list\">\n                  " + _0x31d506.targetRoleList.map(_0x273b52 => {
        {
          const _0x26d910 = _0xe0a6c5(_0x273b52.newWinFlag);
          const _0x4aa8a3 = _0x16d77a(_0x273b52.attackType);
          const _0x100e05 = _0x273b52.targetRoleInfo?.["name"] || "未知";
          const _0x5d7354 = _0x273b52.targetRoleInfo?.["headImg"] || "";
          const _0x1e4602 = _0x273b52.roleInfo?.["name"] || _0x31d506.name || "";
          return "\n                      <div class=\"battle-item " + _0x26d910.class + "\">\n                        <span class=\"battle-time\">" + _0x457665(_0x273b52.timestamp) + "</span>\n                        <span class=\"battle-type " + (_0x273b52.attackType === 0 ? "attack" : "defend") + "\">" + _0x4aa8a3 + "</span>\n                        <span class=\"battle-participants\">\n                          <span class=\"battle-self\">" + _0x1e4602 + "</span>\n                          <span class=\"battle-vs\">vs</span>\n                          <img src=\"" + _0x5d7354 + "\" class=\"battle-target-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                          <span class=\"battle-target\">" + _0x100e05 + "</span>\n                        </span>\n                        <span class=\"battle-result " + _0x26d910.class + "\">" + _0x26d910.text + "</span>\n                      </div>\n                    ";
        }
      }).join("") + "\n                </div>\n              " : "<div class=\"helper-text\">无详细战斗记录</div>") + "\n            </div>\n          </div>\n        ";
    }).join("") + "\n      </div>\n    </div>\n  ";
    _0x68317.querySelectorAll("[data-toggle-member]").forEach(_0x1a82d2 => {
      _0x1a82d2.addEventListener("click", () => {
        const _0x560eea = _0x1a82d2.getAttribute("data-toggle-member");
        const _0x53d0e5 = _0x68317.querySelector("[data-member-idx=\"" + _0x560eea + "\"]");
        const _0x5d6003 = _0x53d0e5.querySelector(".battle-member-details");
        const _0x4d201c = _0x1a82d2.querySelector(".expand-icon");
        _0x5d6003.style.display === "none" ? (_0x5d6003.style.display = "block", _0x4d201c.textContent = "▲") : (_0x5d6003.style.display = "none", _0x4d201c.textContent = "▼");
      });
    });
  };
  const _0x51687d = async _0x2af569 => {
    {
      _0x1bd210 = _0x2af569 || _0x21a1ec();
      const _0x54269e = document.getElementById("qa-battle-date");
      if (_0x54269e) {
        _0x54269e.value = _0x1bd210;
      }
      const _0x22d9dd = document.getElementById("qa-battle-records-content");
      if (_0x22d9dd) {
        _0x22d9dd.innerHTML = "<div class=\"helper-text\">正在加载战绩数据...</div>";
      }
      try {
        {
          const _0x32ec34 = {
            date: _0x1bd210
          };
          const _0x347ec3 = await _0x361aec("legionwar_getdetails", _0x32ec34);
          _0x1ddb84("[盐场战绩] 获取成功", "success");
          _0x1ddb84(_0x347ec3, "data");
          if (_0x347ec3 && _0x347ec3.roleDetailsList) {
            {
              _0x347ec3.roleDetailsList.sort((_0x39eef1, _0x327d42) => {
                const _0x5cd526 = _0x39eef1.winCnt || 0;
                const _0x2de3c6 = _0x327d42.winCnt || 0;
                if (_0x2de3c6 !== _0x5cd526) {
                  return _0x2de3c6 - _0x5cd526;
                }
                return (_0x327d42.buildingCnt || 0) - (_0x39eef1.buildingCnt || 0);
              });
              _0x1ddb84("[盐场战绩] 成员数: " + _0x347ec3.roleDetailsList.length, "success");
              _0x1f6448(_0x347ec3);
              return _0x347ec3;
            }
          } else {
            if (_0x22d9dd) {
              _0x22d9dd.innerHTML = "<div class=\"helper-text\">未查询到战绩数据</div>";
            }
            return null;
          }
        }
      } catch (_0x1197b0) {
        {
          _0x1ddb84("[盐场战绩] 查询失败: " + _0x1197b0.message, "error");
          if (_0x22d9dd) {
            _0x22d9dd.innerHTML = "<div class=\"helper-text\">获取战绩失败，请重试</div>";
          }
          return null;
        }
      }
    }
  };
  const _0x3e8081 = async () => {
    if (!_0xe44854?.["roleDetailsList"]) {
      return;
    }
    const _0x11ca8e = _0xe44854.roleDetailsList;
    const _0x22e6ac = _0x158974();
    let _0x33958d = 0;
    let _0x4d4302 = 0;
    let _0x21e0c9 = 0;
    let _0x589845 = 0;
    _0x11ca8e.forEach(_0x486ea7 => {
      {
        const _0x209859 = _0x486ea7.winCnt || 0;
        const _0x24cd39 = _0x486ea7.loseCnt || 0;
        _0x33958d += _0x209859;
        _0x4d4302 += _0x24cd39;
        _0x21e0c9 += _0x486ea7.buildingCnt || 0;
        _0x589845 += Math.max(_0x24cd39 - 6, 0);
      }
    });
    const _0x4eaa41 = _0x4d4302 > 0 ? (_0x33958d / _0x4d4302).toFixed(2) : _0x33958d;
    const _0x49b083 = 2;
    const _0x15cdf1 = document.createElement("canvas");
    const _0x4aa215 = _0x15cdf1.getContext("2d");
    const _0x504a68 = 20;
    const _0x25b138 = 40;
    const _0x5a4319 = 60;
    const _0x57a3d3 = 70;
    const _0x43b48f = ["排名", "成员", "胜", "负", "KD", "丹", "攻城"];
    const _0x2a3fc1 = [50, 140, 50, 50, 70, 50, 60];
    const _0x353bbb = _0x2a3fc1.reduce((_0x3e431b, _0x47970f) => _0x3e431b + _0x47970f, 0) + _0x504a68 * 2;
    const _0x3f1ac2 = _0x5a4319 + _0x11ca8e.length * _0x25b138 + _0x57a3d3 + _0x504a68 * 2;
    _0x15cdf1.width = _0x353bbb * _0x49b083;
    _0x15cdf1.height = _0x3f1ac2 * _0x49b083;
    _0x4aa215.scale(_0x49b083, _0x49b083);
    _0x4aa215.fillStyle = _0x22e6ac.bg;
    _0x4aa215.fillRect(0, 0, _0x353bbb, _0x3f1ac2);
    _0x4aa215.fillStyle = _0x22e6ac.text;
    _0x4aa215.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4aa215.fillText("盐场战绩 - " + _0x1bd210, _0x504a68, _0x504a68 + 20);
    const _0x1c37df = _0x5a4319;
    _0x4aa215.fillStyle = _0x22e6ac.headerBg;
    _0x4aa215.fillRect(_0x504a68, _0x1c37df, _0x353bbb - _0x504a68 * 2, 30);
    _0x4aa215.fillStyle = _0x22e6ac.headerText;
    _0x4aa215.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x1106fd = _0x504a68;
    _0x43b48f.forEach((_0x3f439a, _0x584122) => {
      _0x4aa215.fillText(_0x3f439a, _0x1106fd + 8, _0x1c37df + 20);
      _0x1106fd += _0x2a3fc1[_0x584122];
    });
    const _0x9541c5 = _0x11ca8e.map(_0x50d3fc => _0x19beac(_0x50d3fc.headImg));
    const _0x23396d = await Promise.all(_0x9541c5);
    _0x4aa215.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x11ca8e.forEach((_0x32b0ba, _0x43a246) => {
      {
        const _0x5b65bd = _0x1c37df + 30 + _0x43a246 * _0x25b138;
        const _0x467a7a = _0x32b0ba.winCnt || 0;
        const _0x10a3cf = _0x32b0ba.loseCnt || 0;
        const _0x1123f0 = _0x10a3cf > 0 ? _0x467a7a / _0x10a3cf : _0x467a7a;
        const _0x488290 = Math.max(_0x10a3cf - 6, 0);
        _0x43a246 % 2 === 1 && (_0x4aa215.fillStyle = _0x22e6ac.rowAlt, _0x4aa215.fillRect(_0x504a68, _0x5b65bd, _0x353bbb - _0x504a68 * 2, _0x25b138));
        _0x4aa215.fillStyle = _0x22e6ac.text;
        let _0x3325e1 = _0x504a68;
        _0x4aa215.fillText(String(_0x43a246 + 1), _0x3325e1 + 8, _0x5b65bd + 26);
        _0x3325e1 += _0x2a3fc1[0];
        const _0x50f45e = _0x23396d[_0x43a246];
        if (_0x50f45e) {
          _0x4aa215.save();
          _0x4aa215.beginPath();
          _0x4aa215.arc(_0x3325e1 + 8 + 12, _0x5b65bd + _0x25b138 / 2, 12, 0, Math.PI * 2);
          _0x4aa215.clip();
          _0x4aa215.drawImage(_0x50f45e, _0x3325e1 + 8, _0x5b65bd + (_0x25b138 - 24) / 2, 24, 24);
          _0x4aa215.restore();
        }
        if (_0x10a3cf < 5) {
          {
            _0x4aa215.fillStyle = "#ef4444";
          }
        } else {
          if (_0x1123f0 >= 1) {
            {
              _0x4aa215.fillStyle = "#10b981";
            }
          } else {
            _0x4aa215.fillStyle = "#f59e0b";
          }
        }
        _0x4aa215.fillText((_0x32b0ba.name || "-").substring(0, 8), _0x3325e1 + 40, _0x5b65bd + 26);
        _0x3325e1 += _0x2a3fc1[1];
        _0x4aa215.fillStyle = "#10b981";
        _0x4aa215.fillText(String(_0x467a7a), _0x3325e1 + 8, _0x5b65bd + 26);
        _0x3325e1 += _0x2a3fc1[2];
        _0x4aa215.fillStyle = "#ef4444";
        _0x4aa215.fillText(String(_0x10a3cf), _0x3325e1 + 8, _0x5b65bd + 26);
        _0x3325e1 += _0x2a3fc1[3];
        _0x4aa215.fillStyle = "#6366f1";
        const _0x33cf5b = _0x10a3cf > 0 ? (_0x467a7a / _0x10a3cf).toFixed(2) : _0x467a7a;
        _0x4aa215.fillText(String(_0x33cf5b), _0x3325e1 + 8, _0x5b65bd + 26);
        _0x3325e1 += _0x2a3fc1[4];
        _0x4aa215.fillStyle = "#8b5cf6";
        _0x4aa215.fillText(String(_0x488290), _0x3325e1 + 8, _0x5b65bd + 26);
        _0x3325e1 += _0x2a3fc1[5];
        _0x4aa215.fillStyle = "#f59e0b";
        _0x4aa215.fillText(String(_0x32b0ba.buildingCnt || 0), _0x3325e1 + 8, _0x5b65bd + 26);
        _0x4aa215.fillStyle = _0x22e6ac.text;
      }
    });
    _0x4aa215.strokeStyle = _0x22e6ac.border;
    _0x4aa215.lineWidth = 1;
    _0x4aa215.strokeRect(_0x504a68, _0x1c37df, _0x353bbb - _0x504a68 * 2, 30 + _0x11ca8e.length * _0x25b138);
    const _0x2ce24d = _0x1c37df + 30 + _0x11ca8e.length * _0x25b138 + 10;
    _0x4aa215.fillStyle = _0x22e6ac.summaryBg;
    _0x4aa215.fillRect(_0x504a68, _0x2ce24d, _0x353bbb - _0x504a68 * 2, 50);
    _0x4aa215.strokeStyle = _0x22e6ac.border;
    _0x4aa215.strokeRect(_0x504a68, _0x2ce24d, _0x353bbb - _0x504a68 * 2, 50);
    _0x4aa215.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4aa215.fillStyle = _0x22e6ac.text;
    _0x4aa215.fillText("俱乐部汇总数据", _0x504a68 + 10, _0x2ce24d + 16);
    _0x4aa215.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4aa215.fillStyle = _0x22e6ac.headerText;
    const _0x4580be = "总KD: " + _0x4eaa41 + "  |  总击杀: " + _0x33958d + "  |  总死亡: " + _0x4d4302 + "  |  总刨地: " + _0x21e0c9 + "  |  总用丹: " + _0x589845;
    _0x4aa215.fillText(_0x4580be, _0x504a68 + 10, _0x2ce24d + 36);
    _0x4aa215.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4aa215.fillStyle = _0x22e6ac.footerText;
    _0x4aa215.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), _0x504a68 + 10, _0x2ce24d + 66);
    await _0x4410da(_0x15cdf1, "盐场战绩_" + _0x1bd210.replace(/\//g, "-") + ".png", _0x30927d);
  };
  const _0x56736e = _0x1c11c0 => {
    {
      switch (_0x1c11c0) {
        case 1:
          return "盐场争夺";
        case 2:
          return "黄金之战";
        case 3:
          return "盐道争夺";
        case 4:
          return "巅峰对决";
        case 6:
          return "夺旗赛";
        case 15:
          return "灰岩岛";
        case 16:
          return "进阶周赛";
        case 17:
          return "进阶月赛";
        case 18:
          return "青铜周赛";
        case 19:
          return "青铜月赛";
        case 20:
          return "秘蓝周赛";
        case 21:
          return "秘蓝月赛";
        case 22:
          return "月宫周赛";
        case 23:
          return "月宫月赛";
        case 24:
          return "天宫周赛";
        case 25:
          return "天宫月赛";
        default:
          return "伟大航路";
      }
    }
  };
  const _0x2de5b1 = _0x5c0686 => {
    {
      _0x4ef132 = _0x5c0686;
      const _0x54b0c7 = document.getElementById("qa-history-records-content");
      if (!_0x54b0c7) {
        return;
      }
      if (!_0x5c0686 || !_0x5c0686.warMap || _0x5c0686.warMap.length === 0) {
        {
          _0x54b0c7.innerHTML = "<div class=\"helper-text\">暂无历史战绩数据</div>";
          return;
        }
      }
      _0x54b0c7.innerHTML = "\n    <div class=\"history-records-info\">\n      <div class=\"history-records-list\">\n        " + _0x5c0686.warMap.map((_0x2e1d3e, _0x404d4e) => "\n          <div class=\"history-war-item\">\n            <div class=\"war-type\">" + _0x56736e(_0x2e1d3e.legionWarType) + "</div>\n            <div class=\"war-date\">日期: " + _0x2e1d3e.warDate + "</div>\n            <div class=\"war-rank\">名次: " + (_0x5c0686.warRank[_0x404d4e] || "--") + "</div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
    }
  };
  const _0xee3ef9 = async () => {
    const _0x5328e3 = document.getElementById("qa-history-records-content");
    if (_0x5328e3) {
      _0x5328e3.innerHTML = "<div class=\"helper-text\">正在加载历史战绩...</div>";
    }
    try {
      {
        const _0x5cc1b4 = await _0x361aec("legion_getinfo", {});
        _0x1ddb84("[历史战绩] 获取成功", "success");
        _0x1ddb84(_0x5cc1b4, "data");
        if (_0x5cc1b4 && _0x5cc1b4.info && _0x5cc1b4.info.warRank && _0x5cc1b4.info.warMap) {
          const _0x531980 = Object.values(_0x5cc1b4.info.warMap);
          const _0x554724 = {
            warMap: [].concat(..._0x531980).reverse(),
            warRank: _0x5cc1b4.info.warRank.reverse()
          };
          _0x1ddb84("[历史战绩] 战绩数: " + _0x554724.warMap.length, "success");
          _0x2de5b1(_0x554724);
          return _0x554724;
        } else {
          {
            if (_0x5328e3) {
              _0x5328e3.innerHTML = "<div class=\"helper-text\">未查询到历史战绩数据</div>";
            }
            return null;
          }
        }
      }
    } catch (_0x2896eb) {
      _0x1ddb84("[历史战绩] 查询失败: " + _0x2896eb.message, "error");
      if (_0x5328e3) {
        _0x5328e3.innerHTML = "<div class=\"helper-text\">获取历史战绩失败，请重试</div>";
      }
      return null;
    }
  };
  const _0x36bade = async () => {
    if (!_0x4ef132?.["warMap"]) {
      return;
    }
    const _0x516624 = _0x4ef132.warMap;
    const _0x1a6824 = _0x4ef132.warRank;
    const _0x2fd276 = _0x158974();
    const _0x2e97c6 = 2;
    const _0x1a0e77 = document.createElement("canvas");
    const _0x175ac6 = _0x1a0e77.getContext("2d");
    const _0x2b3e79 = 20;
    const _0x4b81fa = 35;
    const _0x4e47e3 = 60;
    const _0x124191 = ["序号", "战争类型", "日期", "名次"];
    const _0x57c9c6 = [50, 120, 120, 80];
    const _0xcbf6c0 = _0x57c9c6.reduce((_0x3eb109, _0x14ff1f) => _0x3eb109 + _0x14ff1f, 0) + _0x2b3e79 * 2;
    const _0x472554 = _0x4e47e3 + _0x516624.length * _0x4b81fa + _0x2b3e79 * 2;
    _0x1a0e77.width = _0xcbf6c0 * _0x2e97c6;
    _0x1a0e77.height = _0x472554 * _0x2e97c6;
    _0x175ac6.scale(_0x2e97c6, _0x2e97c6);
    _0x175ac6.fillStyle = _0x2fd276.bg;
    _0x175ac6.fillRect(0, 0, _0xcbf6c0, _0x472554);
    _0x175ac6.fillStyle = _0x2fd276.text;
    _0x175ac6.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x175ac6.fillText("俱乐部历史战绩", _0x2b3e79, _0x2b3e79 + 20);
    const _0x56f476 = _0x4e47e3;
    _0x175ac6.fillStyle = _0x2fd276.headerBg;
    _0x175ac6.fillRect(_0x2b3e79, _0x56f476, _0xcbf6c0 - _0x2b3e79 * 2, 30);
    _0x175ac6.fillStyle = _0x2fd276.headerText;
    _0x175ac6.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x56ec28 = _0x2b3e79;
    _0x124191.forEach((_0x5c59bb, _0x1ce1fc) => {
      _0x175ac6.fillText(_0x5c59bb, _0x56ec28 + 8, _0x56f476 + 20);
      _0x56ec28 += _0x57c9c6[_0x1ce1fc];
    });
    _0x175ac6.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x516624.forEach((_0x46e9f1, _0xb45e29) => {
      const _0x4134bc = _0x56f476 + 30 + _0xb45e29 * _0x4b81fa;
      _0xb45e29 % 2 === 1 && (_0x175ac6.fillStyle = _0x2fd276.rowAlt, _0x175ac6.fillRect(_0x2b3e79, _0x4134bc, _0xcbf6c0 - _0x2b3e79 * 2, _0x4b81fa));
      _0x175ac6.fillStyle = _0x2fd276.text;
      let _0x1b8252 = _0x2b3e79;
      _0x175ac6.fillText(String(_0xb45e29 + 1), _0x1b8252 + 8, _0x4134bc + 22);
      _0x1b8252 += _0x57c9c6[0];
      _0x175ac6.fillText(_0x56736e(_0x46e9f1.legionWarType), _0x1b8252 + 8, _0x4134bc + 22);
      _0x1b8252 += _0x57c9c6[1];
      _0x175ac6.fillText(_0x46e9f1.warDate || "--", _0x1b8252 + 8, _0x4134bc + 22);
      _0x1b8252 += _0x57c9c6[2];
      const _0x3a6e25 = _0x1a6824[_0xb45e29] || "--";
      _0x175ac6.fillStyle = _0x3a6e25 <= 3 ? "#f59e0b" : _0x2fd276.textSecondary;
      _0x175ac6.fillText(String(_0x3a6e25), _0x1b8252 + 8, _0x4134bc + 22);
      _0x175ac6.fillStyle = _0x2fd276.text;
    });
    _0x175ac6.strokeStyle = _0x2fd276.border;
    _0x175ac6.lineWidth = 1;
    _0x175ac6.strokeRect(_0x2b3e79, _0x56f476, _0xcbf6c0 - _0x2b3e79 * 2, 30 + _0x516624.length * _0x4b81fa);
    const _0xe1fe42 = new Date().toLocaleString("zh-CN");
    await _0x4410da(_0x1a0e77, "俱乐部历史战绩_" + _0xe1fe42.replace(/[/:]/g, "-") + ".png", _0x30927d);
  };
  const _0x584bc8 = () => {
    {
      const _0x94ab82 = document.getElementById("qa-battle-date");
      _0x94ab82 && !_0x94ab82.value && (_0x94ab82.value = _0x21a1ec());
    }
  };
  const _0x3fb8ee = () => {
    {
      const _0x3096ba = document.getElementById("qa-battle-date");
      return _0x3096ba ? _0x3096ba.value : _0x21a1ec();
    }
  };
  const _0x3927fa = {
    __proto__: null,
    exportBattleRecordsImage: _0x3e8081,
    exportHistoryRecordsImage: _0x36bade,
    fetchBattleRecords: _0x51687d,
    fetchHistoryRecords: _0xee3ef9,
    getBattleDate: _0x3fb8ee,
    initBattleDate: _0x584bc8,
    renderBattleRecords: _0x1f6448,
    renderHistoryRecords: _0x2de5b1
  };
  var _0xa07d3a = Object.freeze(_0x3927fa);
  const _0xa324e1 = () => {
    const _0x3f29d8 = _0x386da5.theme === "dark";
    const _0xec7b5c = {
      bg: _0x3f29d8 ? "#1a1a2e" : "#ffffff",
      text: _0x3f29d8 ? "#f9fafb" : "#1f2937",
      textSecondary: _0x3f29d8 ? "#9ca3af" : "#6b7280",
      headerBg: _0x3f29d8 ? "#374151" : "#f3f4f6",
      headerText: _0x3f29d8 ? "#d1d5db" : "#374151",
      border: _0x3f29d8 ? "#4b5563" : "#e5e7eb",
      zebraStripe: _0x3f29d8 ? "#2d2d44" : "#f9fafb"
    };
    return _0xec7b5c;
  };
  let _0x1582a0 = null;
  let _0x1a8f31 = null;
  let _0x1761d7 = null;
  let _0x1198a8 = "";
  let _0x222f3d = "";
  let _0x2a4fc5 = "";
  let _0x48a829 = "gold1";
  let _0x4a0bed = 1;
  let _0x4126c3 = 20;
  let _0x16d6ca = 1;
  let _0x58c7c6 = 20;
  let _0x58262e = 1;
  let _0x4cb524 = 20;
  const _0x270119 = _0x1e38e3 => {
    {
      return new Promise(_0x360e2a => {
        if (!_0x1e38e3) {
          _0x360e2a(null);
          return;
        }
        const _0x27cb83 = new Image();
        _0x27cb83.crossOrigin = "anonymous";
        _0x27cb83.onload = () => _0x360e2a(_0x27cb83);
        _0x27cb83.onerror = () => _0x360e2a(null);
        _0x27cb83.src = _0x1e38e3;
        setTimeout(() => _0x360e2a(null), 3000);
      });
    }
  };
  const _0x358221 = () => {
    {
      const _0x4b5609 = new Date();
      const _0x4191ca = _0x4b5609.getFullYear();
      const _0x3a3325 = String(_0x4b5609.getMonth() + 1).padStart(2, "0");
      const _0x3faaf0 = String(_0x4b5609.getDate()).padStart(2, "0");
      return _0x4191ca + "/" + _0x3a3325 + "/" + _0x3faaf0;
    }
  };
  const _0x141455 = _0x4a667 => {
    {
      if (!_0x4a667) {
        return "0";
      }
      if (_0x4a667 >= 100000000) {
        return (_0x4a667 / 100000000).toFixed(2) + "亿";
      }
      if (_0x4a667 >= 10000) {
        {
          return (_0x4a667 / 10000).toFixed(2) + "万";
        }
      }
      return _0x4a667.toString();
    }
  };
  const _0xec51b4 = _0x47bb9b => {
    if (_0x47bb9b === undefined || _0x47bb9b === null) {
      return "0";
    }
    return Number(_0x47bb9b).toFixed(0);
  };
  const _0x69e6eb = _0x40d2d4 => {
    if (!_0x40d2d4) {
      return "0";
    }
    return String(_0x40d2d4);
  };
  const _0x4eec58 = async () => {
    {
      _0x1198a8 = _0x358221();
      const _0x5c97ee = document.getElementById("qa-top-rank-content");
      if (_0x5c97ee) {
        _0x5c97ee.innerHTML = "<div class=\"helper-text\">正在加载巅峰数据...</div>";
      }
      try {
        {
          const _0x17ec22 = {
            rankType: 1
          };
          const _0x361c21 = await _0x361aec("arena_getarearank", _0x17ec22);
          if (!_0x361c21 || !_0x361c21.list) {
            _0x1582a0 = null;
            if (_0x5c97ee) {
              _0x5c97ee.innerHTML = "<div class=\"helper-text\">未查询到巅峰数据</div>";
            }
            return null;
          }
          const _0x5968f5 = {};
          for (const [_0x2014eb, _0x1ca9d3] of Object.entries(_0x361c21.list)) {
            _0x5968f5[_0x2014eb] = {
              serverId: _0x1ca9d3?.["serverId"] || 0,
              roleId: _0x1ca9d3?.["roleId"] || 0,
              name: _0x1ca9d3?.["name"] || "",
              headImg: _0x1ca9d3?.["headImg"] || "",
              power: _0x141455(_0x1ca9d3?.["power"] || 0),
              rank: _0x1ca9d3?.["rank"] || 0,
              score: _0xec51b4(_0x1ca9d3?.["score"] || 0)
            };
          }
          _0x1582a0 = _0x5968f5;
          _0x4a0bed = 1;
          _0x27448e();
          return _0x5968f5;
        }
      } catch (_0x5535ce) {
        {
          _0x1582a0 = null;
          if (_0x5c97ee) {
            _0x5c97ee.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>";
          }
          return null;
        }
      }
    }
  };
  const _0x27448e = () => {
    if (!_0x1582a0) {
      return;
    }
    const _0x48d6b6 = document.getElementById("qa-top-rank-content");
    if (!_0x48d6b6) {
      return;
    }
    const _0x55e4ab = Object.entries(_0x1582a0);
    const _0x11a896 = Math.ceil(_0x55e4ab.length / _0x4126c3);
    const _0x27dbbc = (_0x4a0bed - 1) * _0x4126c3;
    const _0x25348f = _0x27dbbc + _0x4126c3;
    const _0x5db6dc = _0x55e4ab.slice(_0x27dbbc, _0x25348f);
    _0x48d6b6.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x1198a8 + "</div>\n      <div class=\"rank-list\">\n        " + _0x5db6dc.map(([_0x588180, _0x23133b]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-left\">" + _0x23133b.rank + "</span>\n              <img src=\"" + (_0x23133b.headImg || "") + "\" class=\"rank-member-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n              <div class=\"rank-member-stats\">\n                <span class=\"stat-inline name\">" + _0x23133b.name + "</span>\n                <span class=\"stat-inline power\">战力 " + _0x23133b.power + "</span>\n                <span class=\"stat-inline score\">积分 " + _0x23133b.score + "</span>\n                <span class=\"stat-inline id\">玩家ID " + _0x23133b.roleId + "</span>\n                <span class=\"stat-inline win\">区服 " + _0x69e6eb(_0x23133b.serverId) + "</span>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (_0x11a896 > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + _0x4a0bed + " / " + _0x11a896 + " 页，共 " + _0x55e4ab.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (_0x4a0bed === 1 ? "disabled" : "") + " data-action=\"top-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (_0x4a0bed === _0x11a896 ? "disabled" : "") + " data-action=\"top-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-top-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (_0x4126c3 === 10 ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (_0x4126c3 === 20 ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (_0x4126c3 === 50 ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (_0x4126c3 === 100 ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    _0x49b0e0("qa-top-rank-content");
  };
  const _0x49b0e0 = _0x55dc71 => {
    {
      const _0x297a10 = document.getElementById(_0x55dc71);
      if (!_0x297a10) {
        return;
      }
      const _0x34a149 = _0x297a10.querySelectorAll("[data-rank-scrollable]");
      _0x34a149.forEach(_0x560ec3 => {
        let _0x34864f = false;
        let _0x2f18e;
        let _0x3aca4e;
        const _0x278df8 = _0x3b4bbe => {
          {
            if (_0x3b4bbe.target.closest(".rank-badge-top-left")) {
              {
                return;
              }
            }
            _0x34864f = true;
            _0x560ec3.style.cursor = "grabbing";
            _0x2f18e = _0x3b4bbe.pageX - _0x560ec3.offsetLeft;
            _0x3aca4e = _0x560ec3.scrollLeft;
            _0x3b4bbe.preventDefault();
          }
        };
        const _0x5ee56a = () => {
          _0x34864f = false;
          _0x560ec3.style.cursor = "grab";
        };
        const _0x28c0f8 = () => {
          _0x34864f = false;
          _0x560ec3.style.cursor = "grab";
        };
        const _0x4c51e3 = _0x47777f => {
          if (!_0x34864f) {
            return;
          }
          _0x47777f.preventDefault();
          const _0x42ecf9 = _0x47777f.pageX - _0x560ec3.offsetLeft;
          const _0x258953 = (_0x42ecf9 - _0x2f18e) * 2;
          _0x560ec3.scrollLeft = _0x3aca4e - _0x258953;
        };
        _0x560ec3.addEventListener("mousedown", _0x278df8);
        _0x560ec3.addEventListener("mouseleave", _0x5ee56a);
        _0x560ec3.addEventListener("mouseup", _0x28c0f8);
        _0x560ec3.addEventListener("mousemove", _0x4c51e3);
      });
    }
  };
  const _0x4161db = async () => {
    if (!_0x1582a0) {
      {
        return;
      }
    }
    const _0x4ec321 = _0xa324e1();
    const _0x4bb5ae = Object.entries(_0x1582a0);
    const _0x9892d7 = 2;
    const _0x37121f = document.createElement("canvas");
    const _0x4675e5 = _0x37121f.getContext("2d");
    const _0x350c23 = 20;
    const _0x31adbf = 50;
    const _0x5dd828 = 80;
    const _0x2b2789 = ["排名", "头像", "服务器ID", "玩家ID", "玩家名称", "战力", "巅峰积分"];
    const _0x12efc3 = [60, 50, 100, 120, 150, 120, 120];
    const _0xcdffdc = _0x12efc3.reduce((_0x369c96, _0x5cb560) => _0x369c96 + _0x5cb560, 0) + _0x350c23 * 2;
    const _0xbf2fba = _0x5dd828 + (_0x4bb5ae.length + 1) * _0x31adbf + _0x350c23 * 2;
    const _0x1426ce = _0x4bb5ae.map(([, _0x11edbd]) => _0x270119(_0x11edbd.headImg));
    const _0x588a75 = await Promise.all(_0x1426ce);
    _0x37121f.width = _0xcdffdc * _0x9892d7;
    _0x37121f.height = _0xbf2fba * _0x9892d7;
    _0x4675e5.scale(_0x9892d7, _0x9892d7);
    _0x4675e5.fillStyle = _0x4ec321.bg;
    _0x4675e5.fillRect(0, 0, _0xcdffdc, _0xbf2fba);
    _0x4675e5.fillStyle = _0x4ec321.text;
    _0x4675e5.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4675e5.fillText("巅峰榜 - " + _0x1198a8, _0x350c23, _0x350c23 + 20);
    const _0x31da0b = _0x5dd828;
    _0x4675e5.fillStyle = _0x4ec321.headerBg;
    _0x4675e5.fillRect(_0x350c23, _0x31da0b, _0xcdffdc - _0x350c23 * 2, 30);
    _0x4675e5.fillStyle = _0x4ec321.headerText;
    _0x4675e5.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x506bba = _0x350c23;
    _0x2b2789.forEach((_0x13275f, _0x22874b) => {
      _0x4675e5.fillText(_0x13275f, _0x506bba + 8, _0x31da0b + 20);
      _0x506bba += _0x12efc3[_0x22874b];
    });
    _0x4675e5.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4bb5ae.forEach(([_0x203770, _0x2aeca3], _0x226c59) => {
      const _0x28f330 = _0x31da0b + 30 + _0x226c59 * _0x31adbf;
      _0x226c59 % 2 === 1 && (_0x4675e5.fillStyle = _0x4ec321.zebraStripe, _0x4675e5.fillRect(_0x350c23, _0x28f330, _0xcdffdc - _0x350c23 * 2, _0x31adbf));
      _0x4675e5.fillStyle = _0x4ec321.text;
      let _0x495668 = _0x350c23;
      _0x4675e5.fillText(String(_0x2aeca3.rank), _0x495668 + 8, _0x28f330 + 30);
      _0x495668 += _0x12efc3[0];
      const _0x322dee = _0x588a75[_0x226c59];
      if (_0x322dee) {
        _0x4675e5.save();
        _0x4675e5.beginPath();
        _0x4675e5.arc(_0x495668 + 25, _0x28f330 + _0x31adbf / 2, 18, 0, Math.PI * 2);
        _0x4675e5.clip();
        _0x4675e5.drawImage(_0x322dee, _0x495668 + 7, _0x28f330 + (_0x31adbf - 36) / 2, 36, 36);
        _0x4675e5.restore();
      }
      _0x495668 += _0x12efc3[1];
      _0x4675e5.fillText(_0x69e6eb(_0x2aeca3.serverId), _0x495668 + 8, _0x28f330 + 30);
      _0x495668 += _0x12efc3[2];
      _0x4675e5.fillText(String(_0x2aeca3.roleId), _0x495668 + 8, _0x28f330 + 30);
      _0x495668 += _0x12efc3[3];
      _0x4675e5.fillText(_0x2aeca3.name || "-", _0x495668 + 8, _0x28f330 + 30);
      _0x495668 += _0x12efc3[4];
      _0x4675e5.fillText(_0x2aeca3.power, _0x495668 + 8, _0x28f330 + 30);
      _0x495668 += _0x12efc3[5];
      _0x4675e5.fillText(_0x2aeca3.score, _0x495668 + 8, _0x28f330 + 30);
    });
    _0x4675e5.strokeStyle = _0x4ec321.border;
    _0x4675e5.lineWidth = 1;
    _0x4675e5.strokeRect(_0x350c23, _0x31da0b, _0xcdffdc - _0x350c23 * 2, 30 + _0x4bb5ae.length * _0x31adbf);
    const _0x14d3c2 = _0x1198a8.split("/");
    const _0x4915f5 = _0x14d3c2[0] + "年" + _0x14d3c2[1] + "月" + _0x14d3c2[2] + "日";
    await _0x4410da(_0x37121f, _0x4915f5 + "巅峰榜信息.png");
  };
  const _0x25f552 = _0x4997de => {
    {
      if (!_0x1582a0) {
        return;
      }
      const _0x416d58 = Object.entries(_0x1582a0);
      const _0x479307 = Math.ceil(_0x416d58.length / _0x4126c3);
      if (_0x4997de === "prev" && _0x4a0bed > 1) {
        _0x4a0bed--;
      } else {
        _0x4997de === "next" && _0x4a0bed < _0x479307 && _0x4a0bed++;
      }
      _0x27448e();
    }
  };
  const _0x36d994 = _0x463479 => {
    _0x4126c3 = Number(_0x463479) || 20;
    _0x4a0bed = 1;
    _0x27448e();
  };
  const _0x3d1712 = async () => {
    {
      _0x222f3d = _0x358221();
      const _0x542d8b = document.getElementById("qa-club-rank-content");
      if (_0x542d8b) {
        _0x542d8b.innerHTML = "<div class=\"helper-text\">正在加载俱乐部数据...</div>";
      }
      try {
        const _0x494b8d = await _0x361aec("legion_getarearank", {});
        if (!_0x494b8d || !_0x494b8d.list) {
          _0x1a8f31 = null;
          if (_0x542d8b) {
            _0x542d8b.innerHTML = "<div class=\"helper-text\">未查询到俱乐部数据</div>";
          }
          return null;
        }
        const _0x5b4aa8 = {};
        const _0x16b9b6 = Object.entries(_0x494b8d.list);
        for (const [_0x356b69, _0x5ae547] of _0x16b9b6) {
          {
            try {
              {
                const _0x3a8b17 = {
                  legionId: _0x5ae547?.["id"]
                };
                const _0x273375 = await _0x361aec("legion_getinfobyid", _0x3a8b17, 5000);
                const _0xc7f293 = [];
                const _0x3c77a9 = [];
                const _0x5ab9b7 = [];
                for (const [_0x5b3b8e, _0x31b637] of Object.entries(_0x273375?.["legionData"]?.["members"] || {})) {
                  {
                    _0x31b637.roleId !== undefined && (_0xc7f293.push(_0x31b637.roleId), _0x3c77a9.push(_0x31b637.name), _0x5ab9b7.push(_0x31b637.headImg || ""));
                  }
                }
                _0x5b4aa8[_0x356b69] = {
                  rank: _0x5ae547.rank || 0,
                  ServerId: _0x69e6eb(_0x5ae547.serverId || 0),
                  Clubname: _0x5ae547.name || "",
                  logo: _0x273375?.["legionData"]?.["logo"] || "",
                  redQuench: _0x273375?.["legionData"]?.["quenchNum"] || 0,
                  power: _0x141455(_0x5ae547.power || 0),
                  roleID1: _0xc7f293[0] || 0,
                  roleID2: _0xc7f293[1] || 0,
                  roleID3: _0xc7f293[2] || 0,
                  name1: _0x3c77a9[0] || "",
                  name2: _0x3c77a9[1] || "",
                  name3: _0x3c77a9[2] || "",
                  headImg1: _0x5ab9b7[0] || "",
                  headImg2: _0x5ab9b7[1] || "",
                  headImg3: _0x5ab9b7[2] || ""
                };
              }
            } catch (_0x14fff6) {
              _0x5b4aa8[_0x356b69] = {
                rank: _0x5ae547.rank || 0,
                ServerId: _0x69e6eb(_0x5ae547.serverId || 0),
                Clubname: _0x5ae547.name || "",
                logo: "",
                redQuench: 0,
                power: _0x141455(_0x5ae547.power || 0),
                roleID1: 0,
                roleID2: 0,
                roleID3: 0,
                name1: "",
                name2: "",
                name3: "",
                headImg1: "",
                headImg2: "",
                headImg3: ""
              };
            }
          }
        }
        _0x1a8f31 = _0x5b4aa8;
        _0x16d6ca = 1;
        _0x1d3931();
        return _0x5b4aa8;
      } catch (_0x5947a4) {
        {
          _0x1a8f31 = null;
          if (_0x542d8b) {
            _0x542d8b.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>";
          }
          return null;
        }
      }
    }
  };
  const _0x1d3931 = () => {
    if (!_0x1a8f31) {
      return;
    }
    const _0x3826da = document.getElementById("qa-club-rank-content");
    if (!_0x3826da) {
      return;
    }
    const _0x480277 = Object.entries(_0x1a8f31);
    const _0x31b417 = Math.ceil(_0x480277.length / _0x58c7c6);
    const _0xe2ac4b = (_0x16d6ca - 1) * _0x58c7c6;
    const _0x26dd88 = _0xe2ac4b + _0x58c7c6;
    const _0x3f7885 = _0x480277.slice(_0xe2ac4b, _0x26dd88);
    _0x3826da.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x222f3d + "</div>\n      <div class=\"rank-list\">\n        " + _0x3f7885.map(([_0xe0fc88, _0x26f85c]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-top-left\">排名 " + _0x26f85c.rank + "</span>\n              <div class=\"rank-member-content\">\n                <img src=\"" + (_0x26f85c.logo || "") + "\" class=\"rank-club-logo\" onerror=\"this.style.display='none'\" alt=\"\">\n                <div class=\"rank-member-stats\">\n                  <span class=\"stat-inline win\">区服 " + _0x26f85c.ServerId + "</span>\n                  <span class=\"stat-inline loss\">俱乐部名 " + _0x26f85c.Clubname + "</span>\n                  <span class=\"stat-inline red\">总红淬 " + _0x26f85c.redQuench + "红</span>\n                  <span class=\"stat-inline power\">战力 " + _0x26f85c.power + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x26f85c.name1 + "</span>\n                  <img src=\"" + (_0x26f85c.headImg1 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x26f85c.roleID1 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x26f85c.name2 + "</span>\n                  <img src=\"" + (_0x26f85c.headImg2 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x26f85c.roleID2 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x26f85c.name3 + "</span>\n                  <img src=\"" + (_0x26f85c.headImg3 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x26f85c.roleID3 + "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (_0x31b417 > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + _0x16d6ca + " / " + _0x31b417 + " 页，共 " + _0x480277.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (_0x16d6ca === 1 ? "disabled" : "") + " data-action=\"club-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (_0x16d6ca === _0x31b417 ? "disabled" : "") + " data-action=\"club-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-club-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (_0x58c7c6 === 10 ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (_0x58c7c6 === 20 ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (_0x58c7c6 === 50 ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (_0x58c7c6 === 100 ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    _0x49b0e0("qa-club-rank-content");
  };
  const _0x2f314a = async () => {
    if (!_0x1a8f31) {
      {
        return;
      }
    }
    const _0x156e65 = _0xa324e1();
    const _0x3775c3 = Object.entries(_0x1a8f31);
    const _0x51b707 = 2;
    const _0x543663 = document.createElement("canvas");
    const _0xd92502 = _0x543663.getContext("2d");
    const _0x1eb262 = 20;
    const _0x62483a = 70;
    const _0xa4e0f9 = 80;
    const _0x3df21e = ["排名", "俱乐部", "区服", "总红淬", "战力", "玩家1", "玩家2", "玩家3"];
    const _0x2d0901 = [60, 150, 60, 80, 100, 120, 120, 120];
    const _0x1f7407 = _0x2d0901.reduce((_0xa8bfe, _0x5bb40e) => _0xa8bfe + _0x5bb40e, 0) + _0x1eb262 * 2;
    const _0x5bfd28 = _0xa4e0f9 + (_0x3775c3.length + 1) * _0x62483a + _0x1eb262 * 2;
    _0x543663.width = _0x1f7407 * _0x51b707;
    _0x543663.height = _0x5bfd28 * _0x51b707;
    _0xd92502.scale(_0x51b707, _0x51b707);
    const _0x9f0002 = _0x3775c3.map(([, _0x36acdf]) => _0x270119(_0x36acdf.logo));
    const _0x4ee649 = _0x3775c3.flatMap(([, _0x2f973d]) => [_0x270119(_0x2f973d.headImg1), _0x270119(_0x2f973d.headImg2), _0x270119(_0x2f973d.headImg3)]);
    const [_0x4796e1, ..._0x39af52] = await Promise.all([Promise.all(_0x9f0002), ..._0x4ee649]);
    const _0x1c06ba = [];
    for (let _0x4cc4f6 = 0; _0x4cc4f6 < _0x3775c3.length; _0x4cc4f6++) {
      _0x1c06ba.push([_0x39af52[_0x4cc4f6 * 3], _0x39af52[_0x4cc4f6 * 3 + 1], _0x39af52[_0x4cc4f6 * 3 + 2]]);
    }
    _0xd92502.fillStyle = _0x156e65.bg;
    _0xd92502.fillRect(0, 0, _0x1f7407, _0x5bfd28);
    _0xd92502.fillStyle = _0x156e65.text;
    _0xd92502.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0xd92502.fillText("五百服Top俱乐部 - " + _0x222f3d, _0x1eb262, _0x1eb262 + 20);
    const _0x18658a = _0xa4e0f9;
    _0xd92502.fillStyle = _0x156e65.headerBg;
    _0xd92502.fillRect(_0x1eb262, _0x18658a, _0x1f7407 - _0x1eb262 * 2, 30);
    _0xd92502.fillStyle = _0x156e65.headerText;
    _0xd92502.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x19caa5 = _0x1eb262;
    _0x3df21e.forEach((_0x426824, _0x19b3a4) => {
      _0xd92502.fillText(_0x426824, _0x19caa5 + 4, _0x18658a + 20);
      _0x19caa5 += _0x2d0901[_0x19b3a4];
    });
    _0xd92502.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x3775c3.forEach(([_0x3760bc, _0x3f3b58], _0x1995c5) => {
      {
        const _0x4f85ef = _0x18658a + 30 + _0x1995c5 * _0x62483a;
        _0x1995c5 % 2 === 1 && (_0xd92502.fillStyle = _0x156e65.zebraStripe, _0xd92502.fillRect(_0x1eb262, _0x4f85ef, _0x1f7407 - _0x1eb262 * 2, _0x62483a));
        _0xd92502.fillStyle = _0x156e65.text;
        let _0x24f79b = _0x1eb262;
        _0xd92502.fillText(String(_0x3f3b58.rank), _0x24f79b + 8, _0x4f85ef + 20);
        _0x24f79b += _0x2d0901[0];
        const _0x4752aa = _0x4796e1[_0x1995c5];
        if (_0x4752aa) {
          _0xd92502.save();
          _0xd92502.beginPath();
          _0xd92502.arc(_0x24f79b + 20, _0x4f85ef + _0x62483a / 2, 14, 0, Math.PI * 2);
          _0xd92502.clip();
          _0xd92502.drawImage(_0x4752aa, _0x24f79b + 6, _0x4f85ef + (_0x62483a - 28) / 2, 28, 28);
          _0xd92502.restore();
        }
        _0xd92502.fillText(_0x3f3b58.Clubname || "-", _0x24f79b + 32, _0x4f85ef + 20);
        _0x24f79b += _0x2d0901[1];
        _0xd92502.fillText(_0x3f3b58.ServerId, _0x24f79b + 8, _0x4f85ef + 20);
        _0x24f79b += _0x2d0901[2];
        _0xd92502.fillText(_0x3f3b58.redQuench + "红", _0x24f79b + 8, _0x4f85ef + 20);
        _0x24f79b += _0x2d0901[3];
        _0xd92502.fillText(_0x3f3b58.power, _0x24f79b + 8, _0x4f85ef + 20);
        _0x24f79b += _0x2d0901[4];
        const _0x1ae864 = _0x1c06ba[_0x1995c5] || [];
        for (let _0x54c75e = 0; _0x54c75e < 3; _0x54c75e++) {
          {
            const _0x193e85 = _0x1ae864[_0x54c75e];
            const _0xa8677a = _0x3f3b58["name" + (_0x54c75e + 1)] || "-";
            const _0x4ae3ea = String(_0x3f3b58["roleID" + (_0x54c75e + 1)] || 0);
            if (_0x193e85) {
              {
                _0xd92502.save();
                _0xd92502.beginPath();
                _0xd92502.arc(_0x24f79b + 12, _0x4f85ef + 20, 8, 0, Math.PI * 2);
                _0xd92502.clip();
                _0xd92502.drawImage(_0x193e85, _0x24f79b + 4, _0x4f85ef + 12, 16, 16);
                _0xd92502.restore();
              }
            }
            _0xd92502.fillText(_0xa8677a, _0x24f79b + 24, _0x4f85ef + 20);
            _0xd92502.fillText(_0x4ae3ea, _0x24f79b + 24, _0x4f85ef + 35);
            _0x24f79b += _0x2d0901[5 + _0x54c75e];
          }
        }
      }
    });
    _0xd92502.strokeStyle = _0x156e65.border;
    _0xd92502.lineWidth = 1;
    _0xd92502.strokeRect(_0x1eb262, _0x18658a, _0x1f7407 - _0x1eb262 * 2, 30 + _0x3775c3.length * _0x62483a);
    const _0x45b762 = _0x222f3d.split("/");
    const _0x42cfa4 = _0x45b762[0] + "年" + _0x45b762[1] + "月" + _0x45b762[2] + "日";
    await _0x4410da(_0x543663, _0x42cfa4 + "TOP俱乐部信息.png");
  };
  const _0x2c867f = _0x4771f => {
    {
      if (!_0x1a8f31) {
        return;
      }
      const _0x167b47 = Object.entries(_0x1a8f31);
      const _0x43e6e7 = Math.ceil(_0x167b47.length / _0x58c7c6);
      if (_0x4771f === "prev" && _0x16d6ca > 1) {
        _0x16d6ca--;
      } else {
        _0x4771f === "next" && _0x16d6ca < _0x43e6e7 && _0x16d6ca++;
      }
      _0x1d3931();
    }
  };
  const _0x43d2a8 = _0x3d40fe => {
    _0x58c7c6 = Number(_0x3d40fe) || 20;
    _0x16d6ca = 1;
    _0x1d3931();
  };
  const _0x148b2e = _0x317c85 => {
    switch (_0x317c85) {
      case "gold1":
        return 1;
      case "gold2":
        return 101;
      case "gold3":
        return 201;
      case "gold4":
        return 301;
      case "gold5":
        return 401;
      default:
        return 1;
    }
  };
  const _0x331859 = _0x5cb6ab => {
    switch (_0x5cb6ab) {
      case "gold1":
        return 100;
      case "gold2":
        return 200;
      case "gold3":
        return 300;
      case "gold4":
        return 400;
      case "gold5":
        return 500;
      default:
        return 100;
    }
  };
  const _0x4cb212 = async (_0x30d684 = _0x48a829) => {
    _0x48a829 = _0x30d684;
    _0x2a4fc5 = _0x358221();
    const _0x5f9c7f = document.getElementById("qa-gold-rank-content");
    if (_0x5f9c7f) {
      _0x5f9c7f.innerHTML = "<div class=\"helper-text\">正在加载黄金积分数据...</div>";
    }
    try {
      const _0x23eae8 = await _0x361aec("legionwar_getgoldmonthwarrank", {
        startRank: _0x148b2e(_0x30d684),
        endRank: _0x331859(_0x30d684)
      });
      if (!_0x23eae8 || !_0x23eae8.legionList) {
        {
          _0x1761d7 = null;
          if (_0x5f9c7f) {
            _0x5f9c7f.innerHTML = "<div class=\"helper-text\">未查询到俱乐部数据</div>";
          }
          return null;
        }
      }
      const _0xdd51e8 = {};
      const _0x3123f1 = Object.entries(_0x23eae8.legionList);
      for (const [_0x176a28, _0x4e8125] of _0x3123f1) {
        try {
          const _0x4e1468 = {
            legionId: _0x4e8125?.["id"]
          };
          const _0x37c2a4 = await _0x361aec("legion_getinfobyid", _0x4e1468, 5000);
          const _0x59c507 = [];
          const _0x27932d = [];
          const _0x1ede4c = [];
          const _0x3fbd9f = [];
          for (const [_0x4ca3c4, _0x66755] of Object.entries(_0x37c2a4?.["legionData"]?.["members"] || {})) {
            _0x66755.roleId !== undefined && (_0x59c507.push(_0x66755.roleId), _0x27932d.push(_0x66755.name), _0x3fbd9f.push(_0x66755.headImg || ""), _0x66755.custom?.["red_quench_cnt"] !== undefined && _0x1ede4c.push(_0x66755.custom.red_quench_cnt + "红"));
          }
          _0xdd51e8[_0x176a28] = {
            rank: _0x4e8125.rank || 0,
            id: _0x4e8125.id || 0,
            ServerId: _0x69e6eb(_0x4e8125.serverId || 0),
            redQuench: _0x37c2a4?.["legionData"]?.["quenchNum"] || 0,
            Clubname: _0x4e8125.name || "",
            logo: _0x37c2a4?.["legionData"]?.["logo"] || "",
            power: _0x141455(_0x4e8125.power || 0),
            score: _0xec51b4(_0x4e8125.score || 0),
            roleID1: _0x59c507[0] || 0,
            roleID2: _0x59c507[1] || 0,
            roleID3: _0x59c507[2] || 0,
            name1: _0x27932d[0] || "",
            name2: _0x27932d[1] || "",
            name3: _0x27932d[2] || "",
            headImg1: _0x3fbd9f[0] || "",
            headImg2: _0x3fbd9f[1] || "",
            headImg3: _0x3fbd9f[2] || "",
            announcement: _0x37c2a4?.["legionData"]?.["announcement"] || "",
            redno1: _0x1ede4c[0] || "0红",
            redno2: _0x1ede4c[1] || "0红",
            redno3: _0x1ede4c[2] || "0红"
          };
        } catch (_0x1c97b1) {
          _0xdd51e8[_0x176a28] = {
            rank: _0x4e8125.rank || 0,
            id: _0x4e8125.id || 0,
            ServerId: _0x69e6eb(_0x4e8125.serverId || 0),
            redQuench: 0,
            Clubname: _0x4e8125.name || "",
            logo: "",
            power: _0x141455(_0x4e8125.power || 0),
            score: _0xec51b4(_0x4e8125.score || 0),
            roleID1: 0,
            roleID2: 0,
            roleID3: 0,
            name1: "",
            name2: "",
            name3: "",
            headImg1: "",
            headImg2: "",
            headImg3: "",
            announcement: "",
            redno1: "0红",
            redno2: "0红",
            redno3: "0红"
          };
        }
      }
      _0x1761d7 = _0xdd51e8;
      _0x58262e = 1;
      _0x2f770f();
      return _0xdd51e8;
    } catch (_0x2b1d67) {
      {
        _0x1761d7 = null;
        if (_0x5f9c7f) {
          _0x5f9c7f.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>";
        }
        return null;
      }
    }
  };
  const _0x2f770f = () => {
    if (!_0x1761d7) {
      return;
    }
    const _0x3a71ef = document.getElementById("qa-gold-rank-content");
    if (!_0x3a71ef) {
      return;
    }
    const _0x2bf892 = Object.entries(_0x1761d7);
    const _0x712712 = Math.ceil(_0x2bf892.length / _0x4cb524);
    const _0x402940 = (_0x58262e - 1) * _0x4cb524;
    const _0x473291 = _0x402940 + _0x4cb524;
    const _0x5e6815 = _0x2bf892.slice(_0x402940, _0x473291);
    _0x3a71ef.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x2a4fc5 + "</div>\n      <div class=\"rank-list\">\n        " + _0x5e6815.map(([_0x1ffca0, _0x4e0dd0]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-top-left\">排名 " + _0x4e0dd0.rank + "</span>\n              <div class=\"rank-member-content\">\n                <img src=\"" + (_0x4e0dd0.logo || "") + "\" class=\"rank-club-logo\" onerror=\"this.style.display='none'\" alt=\"\">\n                <div class=\"rank-member-stats\">\n                  <span class=\"stat-inline win\">区服 " + _0x4e0dd0.ServerId + "</span>\n                  <span class=\"stat-inline loss\">俱乐部名 " + _0x4e0dd0.Clubname + "</span>\n                  <span class=\"stat-inline score\">黄金积分 " + _0x4e0dd0.score + "</span>\n                  <span class=\"stat-inline red\">总红淬 " + _0x4e0dd0.redQuench + "红</span>\n                  <span class=\"stat-inline power\">战力 " + _0x4e0dd0.power + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x4e0dd0.name1 + "</span>\n                  <img src=\"" + (_0x4e0dd0.headImg1 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x4e0dd0.roleID1 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x4e0dd0.name2 + "</span>\n                  <img src=\"" + (_0x4e0dd0.headImg2 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x4e0dd0.roleID2 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x4e0dd0.name3 + "</span>\n                  <img src=\"" + (_0x4e0dd0.headImg3 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x4e0dd0.roleID3 + "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (_0x712712 > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + _0x58262e + " / " + _0x712712 + " 页，共 " + _0x2bf892.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (_0x58262e === 1 ? "disabled" : "") + " data-action=\"gold-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (_0x58262e === _0x712712 ? "disabled" : "") + " data-action=\"gold-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-gold-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (_0x4cb524 === 10 ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (_0x4cb524 === 20 ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (_0x4cb524 === 50 ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (_0x4cb524 === 100 ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    _0x49b0e0("qa-gold-rank-content");
  };
  const _0x21664b = async () => {
    {
      if (!_0x1761d7) {
        return;
      }
      const _0x43b04a = _0xa324e1();
      const _0x349042 = Object.entries(_0x1761d7);
      const _0x3409ee = 2;
      const _0x3a9f60 = document.createElement("canvas");
      const _0x2adeaf = _0x3a9f60.getContext("2d");
      const _0x335dcf = 20;
      const _0x2783cb = 70;
      const _0x5b5d32 = 80;
      const _0x27bb08 = ["排名", "俱乐部", "区服", "黄金积分", "总红淬", "战力", "玩家1", "玩家2", "玩家3"];
      const _0x31f0bd = [60, 150, 60, 100, 80, 100, 120, 120, 120];
      const _0x58963f = _0x31f0bd.reduce((_0x65bcf1, _0x4f8d20) => _0x65bcf1 + _0x4f8d20, 0) + _0x335dcf * 2;
      const _0x5a9ba9 = _0x5b5d32 + (_0x349042.length + 1) * _0x2783cb + _0x335dcf * 2;
      _0x3a9f60.width = _0x58963f * _0x3409ee;
      _0x3a9f60.height = _0x5a9ba9 * _0x3409ee;
      _0x2adeaf.scale(_0x3409ee, _0x3409ee);
      const _0x173273 = _0x349042.map(([, _0x44e250]) => _0x270119(_0x44e250.logo));
      const _0x4af2ff = _0x349042.flatMap(([, _0x2c7b07]) => [_0x270119(_0x2c7b07.headImg1), _0x270119(_0x2c7b07.headImg2), _0x270119(_0x2c7b07.headImg3)]);
      const [_0x37c52a, ..._0xac7a73] = await Promise.all([Promise.all(_0x173273), ..._0x4af2ff]);
      const _0x4c34ca = [];
      for (let _0x4da2ab = 0; _0x4da2ab < _0x349042.length; _0x4da2ab++) {
        _0x4c34ca.push([_0xac7a73[_0x4da2ab * 3], _0xac7a73[_0x4da2ab * 3 + 1], _0xac7a73[_0x4da2ab * 3 + 2]]);
      }
      _0x2adeaf.fillStyle = _0x43b04a.bg;
      _0x2adeaf.fillRect(0, 0, _0x58963f, _0x5a9ba9);
      _0x2adeaf.fillStyle = _0x43b04a.text;
      _0x2adeaf.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x2adeaf.fillText("黄金积分俱乐部总览 - " + _0x2a4fc5, _0x335dcf, _0x335dcf + 20);
      const _0xb58f2d = _0x5b5d32;
      _0x2adeaf.fillStyle = _0x43b04a.headerBg;
      _0x2adeaf.fillRect(_0x335dcf, _0xb58f2d, _0x58963f - _0x335dcf * 2, 30);
      _0x2adeaf.fillStyle = _0x43b04a.headerText;
      _0x2adeaf.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0x2b5848 = _0x335dcf;
      _0x27bb08.forEach((_0x5bc804, _0x73d07) => {
        _0x2adeaf.fillText(_0x5bc804, _0x2b5848 + 4, _0xb58f2d + 20);
        _0x2b5848 += _0x31f0bd[_0x73d07];
      });
      _0x2adeaf.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x349042.forEach(([_0x3da85f, _0x13808d], _0x4d52bc) => {
        const _0x522534 = _0xb58f2d + 30 + _0x4d52bc * _0x2783cb;
        _0x4d52bc % 2 === 1 && (_0x2adeaf.fillStyle = _0x43b04a.zebraStripe, _0x2adeaf.fillRect(_0x335dcf, _0x522534, _0x58963f - _0x335dcf * 2, _0x2783cb));
        _0x2adeaf.fillStyle = _0x43b04a.text;
        let _0x7d0b4e = _0x335dcf;
        _0x2adeaf.fillText(String(_0x13808d.rank), _0x7d0b4e + 8, _0x522534 + 20);
        _0x7d0b4e += _0x31f0bd[0];
        const _0x3a5118 = _0x37c52a[_0x4d52bc];
        _0x3a5118 && (_0x2adeaf.save(), _0x2adeaf.beginPath(), _0x2adeaf.arc(_0x7d0b4e + 20, _0x522534 + _0x2783cb / 2, 14, 0, Math.PI * 2), _0x2adeaf.clip(), _0x2adeaf.drawImage(_0x3a5118, _0x7d0b4e + 6, _0x522534 + (_0x2783cb - 28) / 2, 28, 28), _0x2adeaf.restore());
        _0x2adeaf.fillText(_0x13808d.Clubname || "-", _0x7d0b4e + 32, _0x522534 + 20);
        _0x7d0b4e += _0x31f0bd[1];
        _0x2adeaf.fillText(_0x13808d.ServerId, _0x7d0b4e + 8, _0x522534 + 20);
        _0x7d0b4e += _0x31f0bd[2];
        _0x2adeaf.fillText(_0x13808d.score, _0x7d0b4e + 8, _0x522534 + 20);
        _0x7d0b4e += _0x31f0bd[3];
        _0x2adeaf.fillText(_0x13808d.redQuench + "红", _0x7d0b4e + 8, _0x522534 + 20);
        _0x7d0b4e += _0x31f0bd[4];
        _0x2adeaf.fillText(_0x13808d.power, _0x7d0b4e + 8, _0x522534 + 20);
        _0x7d0b4e += _0x31f0bd[5];
        const _0x72ee27 = _0x4c34ca[_0x4d52bc] || [];
        for (let _0x4ec90c = 0; _0x4ec90c < 3; _0x4ec90c++) {
          {
            const _0x1f7278 = _0x72ee27[_0x4ec90c];
            const _0x5a2734 = _0x13808d["name" + (_0x4ec90c + 1)] || "-";
            const _0x7928c = String(_0x13808d["roleID" + (_0x4ec90c + 1)] || 0);
            if (_0x1f7278) {
              {
                _0x2adeaf.save();
                _0x2adeaf.beginPath();
                _0x2adeaf.arc(_0x7d0b4e + 12, _0x522534 + 20, 8, 0, Math.PI * 2);
                _0x2adeaf.clip();
                _0x2adeaf.drawImage(_0x1f7278, _0x7d0b4e + 4, _0x522534 + 12, 16, 16);
                _0x2adeaf.restore();
              }
            }
            _0x2adeaf.fillText(_0x5a2734, _0x7d0b4e + 24, _0x522534 + 20);
            _0x2adeaf.fillText(_0x7928c, _0x7d0b4e + 24, _0x522534 + 35);
            _0x7d0b4e += _0x31f0bd[6 + _0x4ec90c];
          }
        }
      });
      _0x2adeaf.strokeStyle = _0x43b04a.border;
      _0x2adeaf.lineWidth = 1;
      _0x2adeaf.strokeRect(_0x335dcf, _0xb58f2d, _0x58963f - _0x335dcf * 2, 30 + _0x349042.length * _0x2783cb);
      const _0x462a2e = _0x2a4fc5.split("/");
      const _0x9c8f16 = _0x462a2e[0] + "年" + _0x462a2e[1] + "月" + _0x462a2e[2] + "日";
      await _0x4410da(_0x3a9f60, _0x9c8f16 + "黄金积分榜信息.png");
    }
  };
  const _0x35c1c7 = _0x5b3bd5 => {
    {
      if (!_0x1761d7) {
        return;
      }
      const _0x56fc26 = Object.entries(_0x1761d7);
      const _0x107a60 = Math.ceil(_0x56fc26.length / _0x4cb524);
      if (_0x5b3bd5 === "prev" && _0x58262e > 1) {
        _0x58262e--;
      } else {
        if (_0x5b3bd5 === "next" && _0x58262e < _0x107a60) {
          {
            _0x58262e++;
          }
        }
      }
      _0x2f770f();
    }
  };
  const _0x22a94b = _0x558a98 => {
    _0x4cb524 = Number(_0x558a98) || 20;
    _0x58262e = 1;
    _0x2f770f();
  };
  const _0x555f95 = _0x500e51 => {
    _0x48a829 = _0x500e51;
  };
  const _0x1c4541 = {
    __proto__: null,
    exportClubRankImage: _0x2f314a,
    exportGoldRankImage: _0x21664b,
    exportTopRankImage: _0x4161db,
    fetchClubRank: _0x3d1712,
    fetchGoldRank: _0x4cb212,
    fetchTopRank: _0x4eec58,
    handleClubRankPageChange: _0x2c867f,
    handleClubRankPageSizeChange: _0x43d2a8,
    handleGoldRankPageChange: _0x35c1c7,
    handleGoldRankPageSizeChange: _0x22a94b,
    handleTopRankPageChange: _0x25f552,
    handleTopRankPageSizeChange: _0x36d994,
    renderClubRank: _0x1d3931,
    renderGoldRank: _0x2f770f,
    renderTopRank: _0x27448e,
    setGoldRankGroup: _0x555f95
  };
  var _0x528705 = Object.freeze(_0x1c4541);
  const _0x55d0ec = _0x5b837f => {
    {
      const _0x41ad35 = _0x2f3199[Number(_0x5b837f)];
      return _0x41ad35?.["name"] || "英雄" + _0x5b837f;
    }
  };
  const _0x1141b2 = _0x122f32 => {
    const _0x39e5e9 = _0x2f3199[Number(_0x122f32)];
    if (!_0x39e5e9?.["avatar"]) {
      return null;
    }
    const _0x50c1e9 = _0x39e5e9.avatar.replace(/^\//, "");
    return _0x1f3b49 + "/" + _0x50c1e9;
  };
  const _0x497359 = () => {
    {
      const _0x3b3b9d = document.getElementById("qa-team-selector");
      if (!_0x3b3b9d) {
        return;
      }
      const _0x504922 = _0x386da5.availableTeams || [];
      const _0x175e51 = _0x386da5.currentTeamId || 1;
      if (_0x504922.length === 0) {
        {
          _0x3b3b9d.innerHTML = "<span class=\"helper-text\" style=\"margin:0;font-size:11px;\">加载中...</span>";
          return;
        }
      }
      _0x3b3b9d.innerHTML = _0x504922.map(_0x42dd58 => "\n    <button class=\"team-btn " + (_0x42dd58 === _0x175e51 ? "active" : "") + "\" data-team=\"" + _0x42dd58 + "\">" + _0x42dd58 + "</button>\n  ").join("");
      _0x58b785();
    }
  };
  const _0x58b785 = () => {
    {
      const _0x202bb3 = document.getElementById("qa-team-selector");
      if (!_0x202bb3) {
        return;
      }
      _0x202bb3.querySelectorAll(".team-btn").forEach(_0x24b71 => {
        _0x24b71.addEventListener("click", async () => {
          const _0x268596 = parseInt(_0x24b71.dataset.team, 10);
          _0x268596 && _0x268596 !== _0x386da5.currentTeamId && (_0x202bb3.querySelectorAll(".team-btn").forEach(_0x488505 => _0x488505.disabled = true), await _0x367c69(_0x268596), _0x202bb3.querySelectorAll(".team-btn").forEach(_0x52ae79 => _0x52ae79.disabled = false));
        });
      });
    }
  };
  const _0x4a46ea = () => {
    const _0x12588d = document.getElementById("qa-team-heroes");
    if (!_0x12588d) {
      return;
    }
    const _0x189843 = _0x386da5.teamHeroes || [];
    if (_0x189843.length === 0) {
      _0x12588d.innerHTML = "<div class=\"helper-text\">暂无阵容数据</div>";
      return;
    }
    _0x12588d.innerHTML = _0x189843.map(_0x416f4c => {
      const _0x494378 = _0x416f4c.avatar ? "<img class=\"team-hero-avatar\" src=\"" + _0x416f4c.avatar + "\" alt=\"" + _0x416f4c.name + "\" onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex'\"><div class=\"team-hero-placeholder\" style=\"display:none\">" + _0x416f4c.name.substring(0, 2) + "</div>" : "<div class=\"team-hero-placeholder\">" + _0x416f4c.name.substring(0, 2) + "</div>";
      return "\n      <div class=\"team-hero-item\">\n        <div class=\"team-hero-circle\">" + _0x494378 + "</div>\n        <span class=\"team-hero-name\">" + _0x416f4c.name + "</span>\n      </div>\n    ";
    }).join("");
  };
  const _0x3a81af = () => {
    {
      const _0x14b761 = document.getElementById("qa-team-selector");
      if (!_0x14b761) {
        return;
      }
      const _0x19f5df = _0x386da5.currentTeamId || 1;
      _0x14b761.querySelectorAll(".team-btn").forEach(_0x186a9b => {
        {
          const _0x1f97d6 = parseInt(_0x186a9b.dataset.team, 10);
          _0x186a9b.classList.toggle("active", _0x1f97d6 === _0x19f5df);
        }
      });
    }
  };
  const _0x304732 = async (_0x214f11 = {}) => {
    const {
      silent = false
    } = _0x214f11;
    try {
      const _0x147b81 = await _0x361aec("presetteam_getinfo", {});
      _0x386da5.presetTeam = _0x147b81;
      const _0x4acb14 = _0x56da7c(_0x147b81);
      _0x386da5.currentTeamId = _0x4acb14.useTeamId;
      const _0x503d69 = Object.keys(_0x4acb14.teams).map(Number).filter(_0x363ef9 => Number.isFinite(_0x363ef9) && _0x363ef9 > 0).sort((_0x48ac03, _0x156aaa) => _0x48ac03 - _0x156aaa);
      const _0x49e5ae = JSON.stringify(_0x386da5.availableTeams || []);
      const _0xd94a = JSON.stringify(_0x503d69);
      const _0x87f809 = _0x49e5ae !== _0xd94a;
      _0x386da5.availableTeams = _0x503d69;
      const _0x5375f5 = _0x4acb14.teams[_0x4acb14.useTeamId]?.["teamInfo"] || {};
      const _0x10847a = [];
      for (const [_0x241fd4, _0xb75160] of Object.entries(_0x5375f5)) {
        {
          const _0xe72023 = _0xb75160?.["heroId"] || _0xb75160?.["id"];
          if (!_0xe72023) {
            continue;
          }
          _0x10847a.push({
            id: Number(_0xe72023),
            name: _0x55d0ec(_0xe72023),
            avatar: _0x1141b2(_0xe72023),
            position: Number(_0x241fd4),
            level: _0xb75160?.["level"] || 1
          });
        }
      }
      _0x10847a.sort((_0x350538, _0x1b3236) => _0x350538.position - _0x1b3236.position);
      _0x386da5.teamHeroes = _0x10847a;
      _0x87f809 ? _0x497359() : _0x3a81af();
      _0x4a46ea();
    } catch (_0x24a5b3) {}
  };
  const _0x367c69 = async _0x416835 => {
    {
      if (_0x386da5.currentTeamId === _0x416835) {
        return;
      }
      try {
        {
          const _0x2cade1 = {
            teamId: _0x416835
          };
          await _0x361aec("presetteam_saveteam", _0x2cade1);
          _0x386da5.currentTeamId = _0x416835;
          const _0x3c370f = {
            silent: true
          };
          await _0x304732(_0x3c370f);
        }
      } catch (_0x392735) {}
    }
  };
  const _0x5a7bbe = {
    __proto__: null,
    refreshTeamInfo: _0x304732,
    renderTeamHeroes: _0x4a46ea,
    renderTeamSelector: _0x497359,
    switchTeam: _0x367c69,
    updateTeamSelector: _0x3a81af
  };
  var _0x4f85f2 = Object.freeze(_0x5a7bbe);
  const _0x1b08ff = {
    name: "",
    value: 2
  };
  const _0x39d127 = {
    name: "《三国演义》中，「大意失街亭」的是马谩？",
    value: 1
  };
  const _0x2604c6 = {
    name: "《三国演义》中，「挥泪斩马谩」的是孙权？",
    value: 2
  };
  const _0x1f047f = {
    name: "《三国演义》中，「火烧博望坡」的是庞统？",
    value: 2
  };
  const _0x3f5c56 = {
    name: "《三国演义》中，「火烧藤甲兵」的是徐庶？",
    value: 2
  };
  const _0x29c956 = {
    name: "《三国演义》中，「千里走单骑」的是赵云？",
    value: 2
  };
  const _0x132e20 = {
    name: "《三国演义》中，「温酒斩华雄」的是张飞？",
    value: 2
  };
  const _0x165dcc = {
    name: "《三国演义》中，关羽在长坂坡「七进七出」？",
    value: 2
  };
  const _0xa158ca = {
    name: "《三国演义》中，刘备三顾茅庐请诸葛亮出山？",
    value: 1
  };
  const _0x1be925 = {
    name: "《三国演义》中，孙权与曹操「煮酒论英雄」？",
    value: 2
  };
  const _0x22eec7 = {
    name: "《三国演义》中，提出「隆中对」的是诸葛亮？",
    value: 1
  };
  const _0x21cdf6 = {
    name: "《三国演义》中，夏侯杰在当阳桥被张飞吓死？",
    value: 1
  };
  const _0x28aaf8 = {
    name: "《三国演义》中，张飞在当阳桥厉吼吓退曹军？",
    value: 1
  };
  const _0x1132c6 = {
    name: "《三国演义》中，赵云参与了「三英战吕布」？",
    value: 2
  };
  const _0x3be05e = {
    name: "《三国演义》中，赵云参与了「桃园三结义」？",
    value: 2
  };
  const _0x524058 = {
    name: "《三国演义》中唯一正式上过战场的女子是祝融夫人？",
    value: 1
  };
  const _0x13943c = {
    name: "《三国志》中，华雄被孙坚枭首？",
    value: 1
  };
  const _0x1808df = {
    name: "《三国志》中记载，「草船借箭」的是诸葛亮？",
    value: 2
  };
  const _0x4afb14 = {
    name: "「闭月」是貂蝉的代称？",
    value: 1
  };
  const _0x1b5f51 = {
    name: "「常胜将军」指代赵云？",
    value: 1
  };
  const _0x394627 = {
    name: "「赤壁之战」中是黄盖建策火攻？",
    value: 1
  };
  const _0x5a9235 = {
    name: "「官渡之战」中袁绍获胜？",
    value: 2
  };
  const _0x5e6ec5 = {
    name: "「郭嘉不死卧龙不出」出自三国典故？",
    value: 1
  };
  const _0x4d191b = {
    name: "「曲有误，周郎顾」表达了周瑜不懂音律？",
    value: 2
  };
  const _0x16696a = {
    name: "「三姓家奴」是指飞将吕布？",
    value: 1
  };
  const _0x5ab2c1 = {
    name: "「士别三日」形容吕蒙笃志力学？",
    value: 1
  };
  const _0x1155e8 = {
    name: "「吴下阿蒙」即指吕蒙？",
    value: 1
  };
  const _0xacb2c6 = {
    name: "「小菜一碟」指的是张飞吃豆芽？",
    value: 1
  };
  const _0x5c29c1 = {
    name: "「羞花」是貂蝉的代称？",
    value: 2
  };
  const _0xe49bca = {
    name: "「荀令留香」是指荀或厨艺高超？",
    value: 2
  };
  const _0x4acd61 = {
    name: "「与曹操交手而不死，能败诸葛亮而自活」是指司马懿？",
    value: 1
  };
  const _0x48ab98 = {
    name: "「张辽止啼」指张辽和善，善于哄孩子？",
    value: 2
  };
  const _0x220148 = {
    name: "「总角之好」用于形容周瑜与孙策的交情？",
    value: 1
  };
  const _0x3bec58 = {
    name: "拜将封侯的董卓为东汉忠臣？",
    value: 2
  };
  const _0x2121e3 = {
    name: "宝马良驹赤兔的主人不包括吕布？",
    value: 2
  };
  const _0x15f8e2 = {
    name: "蔡文姬擅长音律？",
    value: 1
  };
  const _0x1ef4df = {
    name: "曹仁被称为「天人将军」？",
    value: 1
  };
  const _0x2fc463 = {
    name: "曹仁是曹操的儿子？",
    value: 2
  };
  const _0x9d3ad3 = {
    name: "成语「水淹七军」与庞统有关？",
    value: 2
  };
  const _0x1e5c47 = {
    name: "大乔为孙策之妻？",
    value: 1
  };
  const _0x362001 = {
    name: "典故「胆大如斗」与姜维有关？",
    value: 1
  };
  const _0x255cb3 = {
    name: "典故「舌战群儒」与周瑜有关？",
    value: 2
  };
  const _0x10f395 = {
    name: "典故「杏林圣手」出自华佗？",
    value: 2
  };
  const _0x3333df = {
    name: "典故「英雄难过美人关」出自「吕布与貂蝉」？",
    value: 1
  };
  const _0x57ddb7 = {
    name: "典韦力大过人，被称为「古之恶来」？",
    value: 1
  };
  const _0x219de5 = {
    name: "典韦善用的武器包括「大双戟」？",
    value: 1
  };
  const _0x2744a5 = {
    name: "典韦是腹隐机谋的知名谋士？",
    value: 2
  };
  const _0x48d2f2 = {
    name: "貂蝉的「美人计」用于离间董卓和吕布？",
    value: 1
  };
  const _0x2fe637 = {
    name: "东汉末年国色美女小乔为周瑜之妻？",
    value: 1
  };
  const _0x4ef59d = {
    name: "董卓曾收吕布为义子？",
    value: 1
  };
  const _0x2f8c26 = {
    name: "董卓为曹操帐下大将？",
    value: 2
  };
  const _0x2e827d = {
    name: "甘宁被称为江表之虎臣？",
    value: 1
  };
  const _0x946281 = {
    name: "甘宁为魏国名将？",
    value: 2
  };
  const _0x49c4cf = {
    name: "甘宁因「少有气力，好游侠」，被称为「锦帆贼」？",
    value: 1
  };
  const _0x587e08 = {
    name: "公孙瓒别名「白马将军」？",
    value: 1
  };
  const _0x3d9dfb = {
    name: "公孙瓒击败袁绍，致袁绍引火自焚？",
    value: 2
  };
  const _0x582aaf = {
    name: "公孙瓒因数次「大破黄巾」而威名大震？",
    value: 1
  };
  const _0x59f3f2 = {
    name: "郭嘉被史籍称为「才策谋略，世之奇士」？",
    value: 1
  };
  const _0x324868 = {
    name: "郭嘉为孙策帐下谋士？",
    value: 2
  };
  const _0x3198c5 = {
    name: "合肥之战中，张辽以少胜多，威震江东？",
    value: 1
  };
  const _0x5c9eaa = {
    name: "华佗被称为「外科鼻祖」？",
    value: 1
  };
  const _0x1dfaaf = {
    name: "华佗因遭曹操怀疑，下狱被铂问致死？",
    value: 1
  };
  const _0x4385bb = {
    name: "华佗与董奉、张仲景并称为「建安三神医」？",
    value: 1
  };
  const _0x23c10f = {
    name: "华雄是奇谋百出的军事战略家？",
    value: 2
  };
  const _0x2c04ea = {
    name: "华雄效力于诸葛亮？",
    value: 2
  };
  const _0x2d8f9a = {
    name: "贾诩曾任魏国最高军事长官「太尉」？",
    value: 1
  };
  const _0x255daa = {
    name: "贾诩为曹操帐下的主要谋士之一？",
    value: 1
  };
  const _0x4ad3a4 = {
    name: "贾诩献离间计成功瓦解马超、韩遂？",
    value: 1
  };
  const _0x4dfb28 = {
    name: "刘备是三国时期蜀汉「五虎上将」之一？",
    value: 2
  };
  const _0x15fd20 = {
    name: "鲁肃为谋士，效力于蜀国？",
    value: 2
  };
  const _0x571abf = {
    name: "民间，张飞被尊为「屠宰业祖师」？",
    value: 1
  };
  const _0x418c4b = {
    name: "民间游戏「华容道」是以三国为背景的游戏？",
    value: 1
  };
  const _0x520ef0 = {
    name: "明教以张角为教祖？",
    value: 1
  };
  const _0x27e402 = {
    name: "三国时期，五虎上将之首是黄忠？",
    value: 2
  };
  const _0x39b654 = {
    name: "三国时期曹操一生未称帝？",
    value: 1
  };
  const _0x564329 = {
    name: "三国时期的吴国由曹操建立？",
    value: 2
  };
  const _0x2f3453 = {
    name: "司马懿曾称帝？",
    value: 2
  };
  const _0x39461e = {
    name: "司马懿为曹操谋臣？",
    value: 1
  };
  const _0x33c210 = {
    name: "算无遗策的贾诩为吴国谋士？",
    value: 2
  };
  const _0x19bab3 = {
    name: "孙策曾「一统江东」？",
    value: 1
  };
  const _0x12469b = {
    name: "孙策死于「赤壁之战」？",
    value: 2
  };
  const _0x4e2edd = {
    name: "太史慈曾为救孔融单骑突围向刘备求援？",
    value: 1
  };
  const _0x51d2e9 = {
    name: "太史慈弦不虚发，被称为「神射手」？",
    value: 1
  };
  const _0x118af4 = {
    name: "太史慈终效力于刘备？",
    value: 2
  };
  const _0xa5acd = {
    name: "威振天下的董卓被吕布诛杀？",
    value: 1
  };
  const _0x3f8f8f = {
    name: "夏侯渊天生独眼？",
    value: 2
  };
  const _0x1d15ae = {
    name: "夏侯渊与夏侯惇是父子？",
    value: 2
  };
  const _0x15a490 = {
    name: "徐晃曾「击破关羽，解樊城之围」？",
    value: 1
  };
  const _0x36f8a2 = {
    name: "荀或被称为「王佐之才」？",
    value: 1
  };
  const _0x5e8954 = {
    name: "颜良被关羽斩杀？",
    value: 1
  };
  const _0x918c2c = {
    name: "颜良被孔融评价「勇冠三军」？",
    value: 1
  };
  const _0x7c2423 = {
    name: "颜良在官渡之战中战胜曹操大军？",
    value: 2
  };
  const _0x570256 = {
    name: "以胆气著称的吕蒙效力于刘备？",
    value: 2
  };
  const _0x38de08 = {
    name: "袁绍战胜公孙瓒，统一河北？",
    value: 1
  };
  const _0x3afb6e = {
    name: "张飞与关羽被并称为「万人敌」？",
    value: 1
  };
  const _0xdae62f = {
    name: "张角为黄巾起义首领之一？",
    value: 1
  };
  const _0x2d8ddb = {
    name: "张角因战胜黄巾军而声名大噪？",
    value: 2
  };
  const _0xd538fd = {
    name: "赵云与关羽、张飞「桃园结义」？",
    value: 2
  };
  const _0x38831e = {
    name: "赵云与关羽、张飞并称「燕南三士」？",
    value: 1
  };
  const _0x54f7c5 = {
    name: "著名的「官渡之战」由袁绍发起？",
    value: 1
  };
  const _0x1ce037 = {
    name: "甄宓曾为袁绍之妻？",
    value: 2
  };
  const _0x3c04bb = {
    name: "甄宓为魏文帝曹丕妻子？",
    value: 1
  };
  const _0x1d6c3e = {
    name: "周瑜逝世后，鲁肃代周瑜职务？",
    value: 1
  };
  const _0x358ecb = {
    name: "《三国演义》中，「过五关斩六将」的武将是关羽？",
    value: 1
  };
  const _0x513d4e = {
    name: "《三国演义》中，「火烧藤甲兵」的是诸葛亮？",
    value: 1
  };
  const _0x27caaf = {
    name: "《三国演义》中，「三气周瑜」的是司马懿？",
    value: 2
  };
  const _0x59b188 = {
    name: "《三国演义》中，「三英战吕布」发生在虎牢关？",
    value: 1
  };
  const _0x3556ec = {
    name: "《三国演义》中，「身在曹营心在汉」的是刘备？",
    value: 2
  };
  const _0x3a8e5a = {
    name: "《三国演义》中，「桃园三结义」中的桃园是张飞的住所？",
    value: 1
  };
  const _0x1859a9 = {
    name: "《三国演义》中，「万事俱备，只欠东风」说的是赤壁之战？",
    value: 1
  };
  const _0xd58172 = {
    name: "《三国演义》中，败走麦城的是张飞？",
    value: 2
  };
  const _0x4a29bf = {
    name: "《三国演义》中，被称为「大耳贼」的是曹操？",
    value: 2
  };
  const _0x9c4f75 = {
    name: "《三国演义》中，被称为「奸雄」的是司马懿？",
    value: 2
  };
  const _0x26fee1 = {
    name: "《三国演义》中，被称为「诸葛村夫」的是诸葛亮？",
    value: 1
  };
  const _0x2356a4 = {
    name: "《三国演义》中，被追杀时「割须断袍」的是马超？",
    value: 2
  };
  const _0xc402b1 = {
    name: "《三国演义》中，曹操赤壁兵败后是曹仁率军接应的？",
    value: 1
  };
  const _0x1e319f = {
    name: "《三国演义》中，称号「卧龙」的是诸葛亮？",
    value: 1
  };
  const _0x51b127 = {
    name: "《三国演义》中，持方天画戟的武将是吕布？",
    value: 1
  };
  const _0x4f9832 = {
    name: "《三国演义》中，持青龙偃月刀的武将是关羽？",
    value: 1
  };
  const _0x5639a5 = {
    name: "《三国演义》中，单刀赴会的是赵云？",
    value: 2
  };
  const _0x5a3b02 = {
    name: "《三国演义》中，发明「木牛流马」的是诸葛亮？",
    value: 1
  };
  const _0x30c056 = {
    name: "《三国演义》中，关羽曾一边「刮骨疗毒」一边与将领饮酒？",
    value: 2
  };
  const _0x42dc5b = {
    name: "《三国演义》中，火烧连营大败蜀军的将领是诸葛亮？",
    value: 2
  };
  const _0xf6ac43 = {
    name: "《三国演义》中，吕布称号「关内侯」？",
    value: 2
  };
  const _0x4ccf37 = {
    name: "《三国演义》中，庞统的称号是「幼麟」？",
    value: 2
  };
  const _0x185d7f = {
    name: "《三国演义》中，七擒孟获的是司马懿？",
    value: 2
  };
  const _0x4c59ff = {
    name: "《三国演义》中，为关羽「刮骨疗毒」的医生是张仲景？",
    value: 2
  };
  const _0x2e5218 = {
    name: "《三国演义》中，要为曹操做开颅手术的是华佗？",
    value: 1
  };
  const _0x509451 = {
    name: "《三国演义》中，赵云的妻子是马超的姝妹马云禄？",
    value: 2
  };
  const _0x1dbe27 = {
    name: "《三国演义》中，赵云在「赤壁之战」中救出阿斗？",
    value: 2
  };
  const _0x348295 = {
    name: "《三国演义》中，甄姬曾为袁绍之子袁熙的夫人？",
    value: 1
  };
  const _0x46ada8 = {
    name: "《三国演义》中，中诸葛亮「空城计」的是曹操？",
    value: 2
  };
  const _0x2cfa8a = {
    name: "《三国演义》中，诸葛亮的「空城计」是为了阻挡曹操大军？",
    value: 2
  };
  const _0x12856c = {
    name: "《三国演义》中，祝融夫人被马超活捉？",
    value: 2
  };
  const _0x500d3b = {
    name: "《三国演义》中，祝融夫人的丈夫为诸葛亮？",
    value: 2
  };
  const _0x42473b = {
    name: "《三国演义》中，祝融夫人擅长的暗器是飞针？",
    value: 2
  };
  const _0x27e30b = {
    name: "「铜雀春深锁二乔」指的是火乔和小乔吗？",
    value: 1
  };
  const _0x5b1af4 = {
    name: "「文姬归汉」指的是蔡文姬从匈奴回到中原吗？",
    value: 1
  };
  const _0x3ffeea = {
    name: "白马义从是赵云的部下？",
    value: 2
  };
  const _0x391965 = {
    name: "蔡文姬是被曹操赎回中原的吗？",
    value: 1
  };
  const _0x57e7b5 = {
    name: "黄月英是诸葛亮的妻子？",
    value: 1
  };
  const _0x1c5587 = {
    name: "庞统和周瑜并称为「卧龙凤雏」？",
    value: 2
  };
  const _0x2da556 = {
    name: "庞统是刘备的谋士吗？",
    value: 1
  };
  const _0x29ee8f = {
    name: "三国时期，董卓曾想和孙坚结成亲家？",
    value: 1
  };
  const _0x20f9a0 = {
    name: "三国时期，公孙瓒和刘备是师兄弟关系？",
    value: 1
  };
  const _0x8975b4 = {
    name: "三国时期，姜维始终都是蜀国的将领？",
    value: 2
  };
  const _0x3da8f7 = {
    name: "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？",
    value: 2
  };
  const _0x4f84de = {
    name: "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？",
    value: 2
  };
  const _0x452087 = {
    name: "三国时期，十八路诸侯讨董后，孙坚率军攻入洛阳？",
    value: 1
  };
  const _0x3dc013 = {
    name: "三国时期，司马懿经常练习「五禽戏」？",
    value: 1
  };
  const _0x867e78 = {
    name: "三国时期，孙策建立了吴国？",
    value: 1
  };
  const _0x40ba54 = {
    name: "三国时期，孙坚中箭而亡？",
    value: 1
  };
  const _0x1b0c82 = {
    name: "三国时期，赵云无一败绩？",
    value: 2
  };
  const _0x34f75f = {
    name: "《出师表》是诸葛亮写给刘禅的吗？",
    value: 1
  };
  const _0x4dd838 = {
    name: "《三国演义》中，「阿斗」是赵云的儿子？",
    value: 2
  };
  const _0x27b53f = {
    name: "《三国演义》中，「宁教我负天下人，休教天下人负我」出自刘备之口？",
    value: 2
  };
  const _0x42457e = {
    name: "《三国演义》中，「虽未谱金兰，情谊比桃园」说的是赵云？",
    value: 1
  };
  const _0xf4ac8f = {
    name: "《三国演义》中，「五虎上将」里没有魏延？",
    value: 1
  };
  const _0x4fca67 = {
    name: "《三国演义》中，「一个愿打一个愿挨」形容的是周瑜与黄忠？",
    value: 2
  };
  const _0x50eadd = {
    name: "《三国演义》中，被称为「智绝」的是刘备？",
    value: 2
  };
  const _0x19268e = {
    name: "《三国演义》中，曹操让士兵们想象柠檬来止渴？",
    value: 2
  };
  const _0x266916 = {
    name: "《三国演义》中，关羽，字「云长」？",
    value: 1
  };
  const _0x3ec519 = {
    name: "《三国演义》中，关羽的坐骑是「绝影」？",
    value: 2
  };
  const _0x3c73cb = {
    name: "《三国演义》中，关羽为了离开曹操的麾下，达成了「过五关，斩六将」的壮举。",
    value: 1
  };
  const _0x31f558 = {
    name: "《三国演义》中，郭嘉遗计定辽东。",
    value: 1
  };
  const _0x5ea9f1 = {
    name: "《三国演义》中，黄忠在定军山击杀了曹魏将领夏侯渊。",
    value: 1
  };
  const _0x10413b = {
    name: "《三国演义》中，刘备，字「孟德」？",
    value: 2
  };
  const _0x5c2ceb = {
    name: "《三国演义》中，刘备的专属武器名为「青龙偃月刀」？",
    value: 2
  };
  const _0x2fbe11 = {
    name: "《三国演义》中，马超有「花马超」的称呼。",
    value: 2
  };
  const _0x51ed6b = {
    name: "《三国演义》中，呢称为「阿斗」的是刘备？",
    value: 2
  };
  const _0x2489a9 = {
    name: "《三国演义》中，司马昭是司马懿的父亲？",
    value: 2
  };
  const _0x506daf = {
    name: "《三国演义》中，死于「落凤坡」的名将是庞统？",
    value: 1
  };
  const _0x105d14 = {
    name: "《三国演义》中，宣称自己会「梦中杀人」的是曹操？",
    value: 1
  };
  const _0x5c765b = {
    name: "《三国演义》中，张飞的专属武器名为「丈八蛇矛」？",
    value: 1
  };
  const _0x599f19 = {
    name: "《三国演义》中，赵云曾孤胆救黄忠。",
    value: 1
  };
  const _0x404d13 = {
    name: "《三国演义》中，诸葛亮，字「孔明」？",
    value: 1
  };
  const _0x2bb7b3 = {
    name: "《三国演义》中，诸葛亮发明了「诸葛连弩」？",
    value: 1
  };
  const _0x285fda = {
    name: "《三国演义》中，诸葛亮挥泪斩了马超？",
    value: 2
  };
  const _0x3c5562 = {
    name: "「白帝城托孤」指的是刘备将自己的儿子托付给赵云？",
    value: 2
  };
  const _0xbf9e8e = {
    name: "「单刀赴会」是诸葛亮邀请关羽前往的。",
    value: 2
  };
  const _0x4568e2 = {
    name: "「扶不起的阿斗」指的是刘禅？",
    value: 1
  };
  const _0x15e361 = {
    name: "「割须弃袍」发生于曹操和马超交战时。",
    value: 2
  };
  const _0x89c869 = {
    name: "「黄巾起义」被看做三国时代的开端吗？",
    value: 1
  };
  const _0x460595 = {
    name: "「孔明灯」在古代曾用于传递军情？",
    value: 1
  };
  const _0x26da2b = {
    name: "「乐不思蜀」指的是刘禅？",
    value: 1
  };
  const _0x3a55f3 = {
    name: "「衣带诏」事发后曹操派军讨伐刘备？",
    value: 1
  };
  const _0x91ed79 = {
    name: "曹操被评价为「治世之能臣，乱世之奸雄」。",
    value: 1
  };
  const _0x1935a3 = {
    name: "典故妄自菲薄出自诸葛亮的《前出师表》？",
    value: 1
  };
  const _0x50e526 = {
    name: "郭嘉被曹操称为「吾之子房」。",
    value: 2
  };
  const _0x26b0ec = {
    name: "郭嘉是由贾诩推荐给曹操，并加入了曹操麾下。",
    value: 2
  };
  const _0x3cc92a = {
    name: "汉献帝自愿禅让帝位给丞相曹丕？",
    value: 2
  };
  const _0x35a522 = {
    name: "华佗使用「麻沸散」是世界医学史上应用全身麻醉进行手术治疗的最早记载？",
    value: 1
  };
  const _0x104273 = {
    name: "华佗有自身编撰的医书流传下来。",
    value: 2
  };
  const _0x34f64c = {
    name: "刘备曾自称「汉中王」？",
    value: 1
  };
  const _0x42f9d0 = {
    name: "刘备称帝后不久就亲自率军伐吴？",
    value: 1
  };
  const _0x6002d4 = {
    name: "刘备少年时以织席贩履为生？",
    value: 1
  };
  const _0x24c02e = {
    name: "挟天子以令诸侯的是曹操？",
    value: 1
  };
  const _0x8a7388 = {
    name: "荀或与同为曹操麾下的荀攸是叔侄关系。",
    value: 1
  };
  const _0x42c5f4 = {
    name: "袁术曾经称帝但最后被刘备、朱灵军截道，呕血而死？",
    value: 1
  };
  const _0x820dc8 = {
    name: "在魏蜀吴三国中，吴国是最晚建立的吗？",
    value: 1
  };
  const _0x4836a7 = {
    name: "周泰是受到孙权的招揽加入了吴国。",
    value: 2
  };
  const _0x874ed2 = {
    name: "周泰在归顺孙策之前在江中劫掠为生。",
    value: 1
  };
  const _0x58c11e = {
    name: "诸葛亮共北伐五次，第五次时病逝于五丈原？",
    value: 1
  };
  const _0x1a64ba = {
    name: "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取？",
    value: 1
  };
  const _0x2a93d1 = {
    name: "《咸鱼之王》里「咸神火把」的持续时间为30分钟？",
    value: 1
  };
  const _0x35412a = {
    name: "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分？",
    value: 1
  };
  const _0x8970d9 = {
    name: "《咸鱼之王》里每位玩家每日可以进行三次「免费点金」？",
    value: 1
  };
  const _0x4607cb = {
    name: "《咸鱼之王》里鱼缸位于玩家的「客厅」界面内？",
    value: 1
  };
  const _0x505d98 = {
    name: "《咸鱼之王》里「咸神门票」可以用于参加竞技场战斗？",
    value: 1
  };
  const _0x5f7c4b = {
    name: "《咸鱼之王》里「梦魇水晶」无法重生，只能通过无损换将置换到其他咸将身上？",
    value: 1
  };
  const _0x1f241b = {
    name: "《咸鱼之王》里「龙鱼·八卦」是咸将黄月英的专属鱼灵？",
    value: 2
  };
  const _0x218266 = {
    name: "《咸鱼之王》里「万能红将碎片」可以开出蔡文姬的碎片吗？",
    value: 2
  };
  const _0x353771 = {
    name: "《咸鱼之王》里好友的「客厅」内会随机刷出钻石、白银、普通三种盐罐？",
    value: 2
  };
  const _0x3da09d = {
    name: "《咸鱼之王》里「招募令」可以招募到咸将关银屏？",
    value: 2
  };
  const _0x5a74cd = {
    name: "《咸鱼之王》里有「万能紫将碎片」？",
    value: 2
  };
  const _0x2a50bf = {
    name: "《咸鱼之王》里咸将的专属鱼都有「龙鱼」前缀。",
    value: 1
  };
  const _0x5b75ba = {
    name: "《咸鱼之王》里「青铜宝箱」每次开启可以获取到10宝箱积分？",
    value: 1
  };
  const _0x244a38 = {
    name: "《咸鱼之王》里咸将分为四个阵营？",
    value: 1
  };
  const _0x591e6c = {
    name: "《咸鱼之王》里咸将貂蝉是「群雄」阵营的。",
    value: 1
  };
  const _0x46f7c8 = {
    name: "《咸鱼之王》里咸将貂蝉的主动技能可以减少敌人怒气值。",
    value: 1
  };
  const _0x4b9eba = {
    name: "《咸鱼之王》里「灯神挑战」每天可以免费获取3个「扫荡魔毯」。",
    value: 1
  };
  const _0x3a986d = {
    name: "《咸鱼之王》里同种类盐罐同时只能占据一个。",
    value: 1
  };
  const _0x5546d4 = {
    name: "《咸鱼之王》里有「白银宝箱」。",
    value: 2
  };
  const _0xa98616 = {
    name: "《咸鱼之王》中升级俱乐部「高级科技」时需要先点满对应职业的「基础科技」。",
    value: 1
  };
  const _0x284f90 = {
    name: "《咸鱼之王》里咸将诸葛亮的主动技能「星落」有控制效果。",
    value: 2
  };
  const _0x558490 = {
    name: "《咸鱼之王》里咸将黄月英的职业是法师。",
    value: 2
  };
  const _0x563b76 = {
    name: "《咸鱼之王》里开启「木质宝箱」有概率获取金砖。",
    value: 2
  };
  const _0x3ea998 = {
    name: "《咸鱼之王》里咸将姜维可以同时攻击全部敌人。",
    value: 2
  };
  const _0x3b4410 = {
    name: "《咸鱼之王》里只要咸将貂蝉在场，吕布就不会阵亡。",
    value: 2
  };
  const _0x44ecee = {
    name: "《咸鱼之王》里鱼灵「惊涛」无法将受到的持续伤害效果分5回合扣除。",
    value: 1
  };
  const _0x409b9f = {
    name: "《咸鱼之王》里开启「钻石宝箱」时，不会获得宝箱积分。",
    value: 1
  };
  const _0x2298da = {
    name: "《咸鱼之王》「捕获」玩法中，每进行十次高级捕获必出稀有鱼灵。",
    value: 1
  };
  const _0x166d97 = {
    name: "《咸鱼之王》「盐场争霸」中，可以通过消耗20金砖来加速行军。",
    value: 1
  };
  const _0x4c6832 = {
    name: "《咸鱼之王》里咸将星级在达到21星时，即可获得「机甲皮肤」",
    value: 1
  };
  const _0x587d27 = {
    name: "《咸鱼之王》里宝箱积分达1000分时，可一键领取累计积分奖励宝箱。",
    value: 1
  };
  const _0x4743eb = {
    name: "《咸鱼之王》里俱乐部团长连续7天未登录，团长职位将自动转让其他成员。",
    value: 1
  };
  const _0x861966 = {
    name: "《咸鱼之王》里「玩具」每周有一次免费无损转换的机会。",
    value: 1
  };
  const _0x2739d8 = {
    name: "《咸鱼之王》「灯神挑战」内，每个阵营中有15层可挑战的关卡。",
    value: 1
  };
  const _0x37141a = {
    name: "《咸鱼之王》「咸神竞技场」中，每日可以免费进行3次挑战。",
    value: 1
  };
  const _0x3a090f = {
    name: "《咸鱼之王》重复攻打击杀过的「俱乐部BOSS」 ，无法再次获得排名奖励。",
    value: 1
  };
  const _0x18a622 = {
    name: "《咸鱼之王》已附身的鱼灵仍会在「鱼缸」中显示。",
    value: 2
  };
  const _0x48d831 = {
    name: "《咸鱼之王》「普通鱼竿」免费捕获的刷新时间为6个小时。",
    value: 2
  };
  const _0x38636e = {
    name: "《咸鱼之王》「每日咸王考验」中，共有4个不同BOSS。",
    value: 2
  };
  const _0x2aee91 = {
    name: "「孔融让梨」的故事讲的是孔融小小年纪便有谦让的美德？",
    value: 1
  };
  const _0x40eaa2 = {
    name: "成语「初出茅庐」出自《三国演义》？",
    value: 1
  };
  const _0x122835 = {
    name: "「三家归晋」结束了汉末三国时期以来的割据混战的局面？",
    value: 1
  };
  const _0x137582 = {
    name: "《三国演义》中，「虎女焉能配犬子」一句中，虎女指的是关羽之女。",
    value: 1
  };
  const _0x148c74 = {
    name: "「莫作孔明择妇，正得阿承丑女」说的是诸葛亮的择偶标准。",
    value: 1
  };
  const _0x9751d5 = {
    name: "《三国演义》中，许褚跟许攸是兄弟。",
    value: 2
  };
  const _0x34f1fb = {
    name: "俗语「赔了夫人又折兵」中的夫人是小乔。",
    value: 2
  };
  const _0x26428f = {
    name: "「赔了夫人又折兵」的上半句为「孔明妙计安天下」。",
    value: 2
  };
  const _0x25a328 = {
    name: "四大美女中「落雁」说的是被匈奴所掳的蔡文姬。",
    value: 2
  };
  const _0x376cfb = {
    name: "「大丈夫何患无妻」一典故出自《三国演义》中的赵云之口？",
    value: 1
  };
  const _0x1a112d = {
    name: "《咸鱼之王》中，招募界面的NPC名宇是「猫婆婆」？",
    value: 1
  };
  const _0x399d50 = {
    name: "《咸鱼之王》中，「每日任务」重置时间为每日0点？",
    value: 1
  };
  const _0x139e8a = {
    name: "《咸鱼之王》中，「每日任务」重置时间为每日8点？",
    value: 2
  };
  const _0x3ee144 = {
    name: "《咸鱼之王》中，每位玩家每日有一次免费刷新「黑市」的机会？",
    value: 1
  };
  const _0x34eb43 = {
    name: "《咸鱼之王》中，每位玩家每日有三次免费刷新「黑市」的机会？",
    value: 2
  };
  const _0x4f5578 = {
    name: "《咸鱼之王》中，每消耗20个「普通鱼竿」可以免费获取1个「黄金鱼竿」？",
    value: 1
  };
  const _0x50cb51 = {
    name: "《咸鱼之王》中，每消耗10个「普通鱼竿」可以免费获取1个「黄金鱼竿」？",
    value: 2
  };
  const _0x2a8abf = {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为1亿？",
    value: 2
  };
  const _0x4d4e8e = {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为5亿？",
    value: 1
  };
  const _0x4e96bf = {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为10亿？",
    value: 2
  };
  const _0x58d854 = {
    name: "《咸鱼之王》中，道具「珍珠」可以在「神秘商店」使用？",
    value: 1
  };
  const _0x3a427e = {
    name: "《咸鱼之王》中，鱼灵「黄金锦鲤」可在「神秘商店」中消耗珍珠兑换？",
    value: 1
  };
  const _0x11fe89 = {
    name: "《咸鱼之王》中，玩家每次占领「盐罐」会消耗10点「能量」",
    value: 1
  };
  const _0x530662 = {
    name: "《咸鱼之王》中，玩家每次占领「盐罐」会消耗1点「能量」",
    value: 2
  };
  const _0x330c94 = {
    name: "《咸鱼之王》中，一个「俱乐部」最多容纳30位成员？",
    value: 1
  };
  const _0x432803 = {
    name: "《咸鱼之王》中，1个「俱乐部」最多有2位副团长？",
    value: 1
  };
  const _0x1aa79b = {
    name: "《咸鱼之王》中，玩家可在「图鉴」内可查看满级咸将信息？",
    value: 1
  };
  const _0x3f3f3b = {
    name: "《咸鱼之王》中，「月度活动」每月刷新1次？",
    value: 1
  };
  const _0x3e7ba5 = {
    name: "《咸鱼之王》中，「每日任务」中日活跃积分达到80的奖励为钻石宝箱？",
    value: 2
  };
  const _0x22e686 = {
    name: "《咸鱼之王》中，「每日任务」中日活跃积分达到100的奖励为招募令？",
    value: 1
  };
  const _0x4cb419 = {
    name: "《咸鱼之王》中，游戏内有金色鱼灵「黄金鲸鱼」？",
    value: 2
  };
  const _0x1bf944 = {
    name: "《咸鱼之王》中，玩家可通过「咸将塔」玩法获取「珍珠」道具？",
    value: 2
  };
  const _0x182dab = {
    name: "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得珍珠。",
    value: 1
  };
  const _0x134bcc = {
    name: "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得万能红将碎片。",
    value: 2
  };
  const _0x482f1c = {
    name: "《咸鱼之王》中，咸将的四个阵营分别为魏、蜀、吴、群雄。",
    value: 1
  };
  const _0x6ea108 = {
    name: "《咸鱼之王》中，除了咸将外，其余的怪物都没有职业。",
    value: 1
  };
  const _0x26884c = {
    name: "《咸鱼之王》中，「灯神挑战」不同的阵营挑战内，只能上阵对应阵营的减将。",
    value: 1
  };
  const _0x17d491 = {
    name: "《咸鱼之王》中，精铁可以直接用金砖购买。",
    value: 1
  };
  const _0xb28349 = {
    name: "《咸鱼之王》中，进阶石可以直接使用金砖购买。",
    value: 1
  };
  const _0x32acaa = {
    name: "《咸鱼之王》中，「招募」可以有概率获得红色武将。",
    value: 1
  };
  const _0x4213a4 = {
    name: "《咸鱼之王》中，贾诩为吴国阵营咸将？",
    value: 2
  };
  const _0x1c5086 = {
    name: "《咸鱼之王》中，每日可以免费招募一次。",
    value: 1
  };
  const _0x459951 = {
    name: "《咸鱼之王》中，「每日咸王考验」可以挑战多次。",
    value: 1
  };
  const _0x434c50 = {
    name: "《咸鱼之王》中，蔡文姬是红色武将。",
    value: 2
  };
  const _0x1b182a = {
    name: "《咸鱼之王》中，「咸王梦境」为每日开放。",
    value: 2
  };
  const _0x5b3a68 = {
    name: "《咸鱼之王》中，「咸王梦境」周二会开放。",
    value: 2
  };
  const _0x4aca63 = {
    name: "《咸鱼之王》中，姜维攻击后可以获得护盾。",
    value: 2
  };
  const _0x3a190f = {
    name: "《咸鱼之王》中，俱乐部人数没有上限。",
    value: 2
  };
  const _0x5b674b = {
    name: "《三国演义》中，「怒打督邮」的是张飞。",
    value: 1
  };
  const _0xbbbc27 = {
    name: "祝融夫人是《三国演义》虚构人物。",
    value: 1
  };
  const _0x22c4c7 = {
    name: "《三国演义》中，「拔矢啖晴」的是夏侯惇。",
    value: 1
  };
  const _0x3123ac = {
    name: "《三国演义》中，「拔矢啖睛」的是夏侯渊。",
    value: 2
  };
  const _0xc387b4 = {
    name: "《三国演义》中，「曹操献刀」本是要刺杀董卓。",
    value: 1
  };
  const _0x303016 = {
    name: "《三国演义》中，许攸被许褚所杀。",
    value: 1
  };
  const _0x28421c = {
    name: "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿。",
    value: 1
  };
  const _0x43e4c2 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一0点重置。",
    value: 1
  };
  const _0x2b643b = {
    name: "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一8点重置。",
    value: 2
  };
  const _0x3c65a = {
    name: "《咸鱼之王》中，挂机奖励加钟，最多可以有5名好友助力。",
    value: 2
  };
  const _0x4b14f5 = {
    name: "《咸鱼之王》中，挂机奖励加钟，最多可以有4名好友助力。",
    value: 1
  };
  const _0x214b61 = {
    name: "《咸鱼之王》中，每日6点重置点金次数。",
    value: 2
  };
  const _0x329c8f = {
    name: "《咸鱼之王》中，「俱乐部」每日签到可以获得「军团币」？",
    value: 1
  };
  const _0x992c37 = {
    name: "《咸鱼之王》中，「黑市」每日0点自动刷新商品？",
    value: 1
  };
  const _0x51cabe = {
    name: "《咸鱼之王》中，「黑市」每日8点自动刷新商品？",
    value: 2
  };
  const _0x2e8fe7 = {
    name: "《咸鱼之王》中，可以使用「珍珠」兑换「万能红将碎片」？",
    value: 1
  };
  const _0x211a9e = {
    name: "《咸鱼之王》中，「咸神门票」可以通过「金砖」进行购买？",
    value: 1
  };
  const _0x549a0b = {
    name: "《咸鱼之王》中，「灯神挑战」内分为四个阵营？",
    value: 1
  };
  const _0x442744 = {
    name: "《咸鱼之王》中，玩家的「勋章墙」内最多展示4个「徽章」？",
    value: 1
  };
  const _0x22497a = {
    name: "《咸鱼之王》中，「主公」达到4001级开启「玩具」玩法？",
    value: 1
  };
  const _0x4ece5b = {
    name: "《咸鱼之王》中，「玩具」需要花费「扳手」进行激活？",
    value: 1
  };
  const _0x2526fc = {
    name: "《咸鱼之王》中，「咸王梦境」每成功通过十层可以遇到一次梦境商人？",
    value: 1
  };
  const _0x4c58b8 = {
    name: "《咸鱼之王》中，挑战「咸将塔」需要花费「小鱼干」？",
    value: 1
  };
  const _0xdb9ccc = {
    name: "《咸鱼之王》中，「小鱼干」可以通过「金砖」进行购买？",
    value: 1
  };
  const _0x4c129c = {
    name: "《咸鱼之王》中，「招募」无法获得咸将吕玲绮。",
    value: 1
  };
  const _0x32c83a = {
    name: "《咸鱼之王》中，「灯神挑战」的奖励包括「珍珠」？",
    value: 2
  };
  const _0x21935d = {
    name: "《咸鱼之王》中，「咸王梦境」中的梦境调料「普通盐瓶」可以恢复咸将怒气？",
    value: 2
  };
  const _0x401352 = {
    name: "《咸鱼之王》中，进阶石可以通过参与「咸将塔」玩法获取。",
    value: 1
  };
  const _0x3f61b4 = {
    name: "《咸鱼之王》中，「扳手」在通关主线7001关后可以通过挂机奖励获得。",
    value: 1
  };
  const _0x3ac348 = {
    name: "《咸鱼之王》中，「军团币」可以用于升级「俱乐部科技」？",
    value: 1
  };
  const _0x225bbb = {
    name: "《咸鱼之王》中，装备最多可以开到5个淬炼孔位？",
    value: 1
  };
  const _0x5f2eb7 = {
    name: "《咸鱼之王》中，「青铜火把」会为主线战斗中上阵的咸将增加5%攻击？",
    value: 1
  };
  const _0x73ce03 = {
    name: "《咸鱼之王》中，「木材火把」会使主线战斗以1.5倍速进行？",
    value: 1
  };
  const _0x1dd0e4 = {
    name: "《咸鱼之王》中，道具「金砖」可以用于在「黑市」中购买物品？",
    value: 1
  };
  const _0x1ba940 = {
    name: "《咸鱼之王》中，装备中的坐骑会为咸将提供防御加成？",
    value: 2
  };
  const _0xcfd1c9 = {
    name: "《咸鱼之王》中，攻打「俱乐部×OSS」后可以获得皮肤币奖励？",
    value: 2
  };
  const _0x35f17a = {
    name: "《咸鱼之王》中，咸将皮肤可以使用「军团币」来进行兑换？",
    value: 2
  };
  const _0x48b5b8 = {
    name: "《咸鱼之王》中，咸将的等级上限为2000级？",
    value: 2
  };
  const _0x232381 = {
    name: "《咸鱼之王》中，咸将「张星彩」属于群雄阵营？",
    value: 2
  };
  const _0x4a9fc5 = {
    name: "《咸鱼之王》中，咸将「颜良」属于魏国阵营？",
    value: 2
  };
  const _0x3c9f1a = {
    name: "《咸鱼之王》中，「招募」无法获得咸将关银屏。",
    value: 1
  };
  const _0x526da8 = {
    name: "《咸鱼之王》俱乐部中，每日最多可以攻打4次「俱乐部BOSS」。",
    value: 1
  };
  const _0x4669b5 = {
    name: "《咸鱼之王》中，俱乐部团长无法退出俱乐部。",
    value: 1
  };
  const _0x16f03f = {
    name: "《咸鱼之王》中，主动退出俱乐部12小时后才可以加入新的俱乐部。",
    value: 1
  };
  const _0x561aa5 = {
    name: "《咸鱼之王》中，装备中的铠甲会为咸将提供血量加成？",
    value: 1
  };
  const _0x3f3624 = {
    name: "《咸鱼之王》中，红色咸将的觉醒技能需要咸将达到一定星级才能解锁。",
    value: 1
  };
  const _0x5f4800 = {
    name: "《咸鱼之王》中，布阵时，前排可上阵2名咸将，后排可上阵3名咸将。",
    value: 1
  };
  const _0x1b5e0d = {
    name: "《咸鱼之王》竞技场中，未对防守阵容进行设置时，将默认使用主线阵容。",
    value: 1
  };
  const _0x1ca3c8 = {
    name: "《咸鱼之王》中，「邮件」最长保存30天。",
    value: 1
  };
  const _0x4a706c = {
    name: "《咸鱼之王》中，「邮件」最长保存10天。",
    value: 2
  };
  const _0x2f1c78 = {
    name: "《咸鱼之王》中，「淬炼」可能出现的属性共21种。",
    value: 1
  };
  const _0x301939 = {
    name: "《咸鱼之王》中，「俱乐部BOSS」被击败后会按照玩家造成的总伤害排名发放排名奖励。",
    value: 1
  };
  const _0x5d8413 = {
    name: "《咸鱼之王》中，晚上23时仍可以进行竞技场战斗。",
    value: 2
  };
  const _0x20ea3a = {
    name: "《咸鱼之王》中，开启「省电模式」将停止主线关卡战斗。",
    value: 2
  };
  const _0x31f974 = {
    name: "鲁肃，字「子敬」。",
    value: 1
  };
  const _0x106cf6 = {
    name: "蔡文姬，本名蔡琰？",
    value: 1
  };
  const _0x488dc4 = {
    name: "「池中之物」一词出自《三国志》中周瑜之口？",
    value: 1
  };
  const _0x1f7141 = {
    name: "《咸鱼之王》中，装备中的头冠会为咸将提供防御加成？",
    value: 1
  };
  const _0x5ab346 = {
    name: "《咸鱼之王》中，「咸神火把」会为主线战斗中上阵的咸将增加15%攻击？",
    value: 1
  };
  const _0x22ec97 = {
    name: "《咸鱼之王》中，「咸神火把」与「青铜火把」均会使主线战斗以2倍速进行？",
    value: 1
  };
  const _0x2c25d3 = {
    name: "刘表是刘备的次子？",
    value: 2
  };
  const _0x565ccc = {
    name: "「望梅止渴」是周瑜带队行军时发生的故事？",
    value: 2
  };
  const _0x34aae9 = {
    name: "《咸鱼之王》中，「扳手」可以在「黑市」中花费「金砖」获取？",
    value: 1
  };
  const _0xd311b0 = {
    name: "《咸鱼之王》中，在「盐锭商店」中可以花费「盐锭」兑换到「皮肤币」？",
    value: 1
  };
  const _0x39ff0f = {
    name: "《咸鱼之王》中，月赛助威截止后，未使用的「拍手器」会被回收？",
    value: 1
  };
  const _0x40cbce = {
    name: "《咸鱼之王》中，「咸鱼大冲关」单局累计答对10题可获取10个「招募令」？",
    value: 1
  };
  const _0x4b09eb = {
    name: "《咸鱼之王》中，通行证「竞技经验」 不需要邮件领取，直接发放给玩家？",
    value: 1
  };
  const _0x5cc98f = {
    name: "《咸鱼之王》中，「俱乐部排位赛」的段位一共有7种？",
    value: 1
  };
  const _0x4ef9dc = {
    name: "《咸鱼之王》中，「阵营光环」上阵任意3个同阵营的武将就能生效。",
    value: 2
  };
  const _0x328dd2 = {
    name: "《咸鱼之王》中，月度活动「捕获达标」达标奖动包含道具「金砖」？",
    value: 1
  };
  const _0x48f074 = {
    name: "《咸鱼之王》中，俱乐部的「团长」和「副团长」可以选择「排位赛」出战成员？",
    value: 1
  };
  const _0x534227 = {
    name: "《咸鱼之王》中，玩家每日可在「灯神挑战」中挑战10次？",
    value: 1
  };
  const _0x1b1586 = {
    name: "《咸鱼之王》中，咸将「曹仁」的职业是「肉盾」？",
    value: 1
  };
  const _0x30eddd = {
    name: "《咸鱼之王》中，「彩玉」可以花费「金币」进行兑换？",
    value: 2
  };
  const _0x1611bf = {
    name: "《咸鱼之王》中，在「助威商店」中可以花费「助威币」兑换到「万能红将碎片」？",
    value: 2
  };
  const _0x346452 = {
    name: "《咸鱼之王》中，月度活动「咸神争霸」达标奖励包含道具「珍珠」？",
    value: 2
  };
  const _0x167fa6 = {
    name: "《咸鱼之王》中，在「黑市」可以通过「金砖」兑换「钻石宝箱」？",
    value: 2
  };
  const _0x29ac75 = {
    name: "《咸鱼之王》中，咸将「蔡文姬」属于魏国阵营？",
    value: 1
  };
  const _0x255a66 = {
    name: "《咸鱼之王》中，可以通过「万能红将碎片」开出「贾诩碎片」？",
    value: 1
  };
  const _0x2b5f16 = {
    name: "《咸鱼之王》中，「咸王梦境」玩法在通关1000关后开放？",
    value: 1
  };
  const _0x5cfe00 = {
    name: "《咸鱼之王》中，「灯神挑战」中，每阵营前五层的首通奖励均为精铁和进阶石？",
    value: 1
  };
  const _0x1294c0 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」内累计答对30道题目可获得「金鱼公主」皮肤？",
    value: 1
  };
  const _0x2d55e3 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」内完成20次大冲关任务可获得「马头咸鱼」皮肤？",
    value: 1
  };
  const _0x58e63c = {
    name: "《咸鱼之王》中，「金币礼包」可以通过「捕获」玩法获取？",
    value: 1
  };
  const _0x499295 = {
    name: "《咸鱼之王》中，可以通过「图鉴」查看咸将满级后的技能效果？",
    value: 1
  };
  const _0x16ee10 = {
    name: "《咸鱼之王》中，攻打「每日咸王考验」内的「癫癫蛙」BOSS可获得招募令。",
    value: 1
  };
  const _0x2e48c2 = {
    name: "《咸鱼之王》中，可以通过「万能橙将碎片」开出「蔡文姬碎片」？",
    value: 2
  };
  const _0x3f97c2 = {
    name: "《咸鱼之王》中，通过「高级捕获」可以获得黄金鱼灵「利刃」？",
    value: 2
  };
  const _0x272119 = {
    name: "《咸鱼之王》中，咸将星级达到30级，可以觉醒第二技能？",
    value: 2
  };
  const _0x362a8b = {
    name: "《咸鱼之王》中，咸将「黄月英」的职业为「法师」？",
    value: 2
  };
  const _0xe265a5 = {
    name: "《咸鱼之王》中，咸将「孙策」的职业为「战士」？",
    value: 2
  };
  const _0x4aae63 = {
    name: "《咸鱼之王》中，开启「晶石福袋」可以获得「进阶石」？",
    value: 2
  };
  const _0x49fcb6 = {
    name: "《三国演义》中，「大丈夫生于乱世，当带三尺剑立不世之功」，是太史慈所说。",
    value: 1
  };
  const _0x5e9ad2 = {
    name: "《咸鱼之王》中，「咸将塔」每通关第10层，会给10个「小鱼干」。",
    value: 1
  };
  const _0x18aa4e = {
    name: "《咸鱼之王》中，「每日咸王考验」有10层伤害达标奖励。",
    value: 1
  };
  const _0x3f084b = {
    name: "《咸鱼之王》中，「巅峰竞技场」 前100名，可登上「巅峰王者榜」。",
    value: 1
  };
  const _0x25cba7 = {
    name: "《咸鱼之王》中，激活「终身卡」，可以使挂机时间增加2小时。",
    value: 1
  };
  const _0x4a73d7 = {
    name: "《咸鱼之王》中，激活「月卡」，可以使挂机时间增加2小时。",
    value: 1
  };
  const _0x30dad1 = {
    name: "《咸鱼之王》中，「咸神竞技场」 内共分为六个段位。",
    value: 1
  };
  const _0x5019e4 = {
    name: "《咸鱼之王》中，「灯神挑战」每日0点刷新挑战次数。",
    value: 1
  };
  const _0x1b6d85 = {
    name: "《咸鱼之王》中，若「签到」当日登录未领取，后续登录时可以一并领取。",
    value: 1
  };
  const _0x21224b = {
    name: "《咸鱼之王》中，激活「终身卡」，挂机金币收益增加10%。",
    value: 1
  };
  const _0x2b6cd8 = {
    name: "《咸鱼之王》中，激活「周卡」，挂机金币收益增加10%。",
    value: 1
  };
  const _0x54d696 = {
    name: "《咸鱼之王》中，「签到」领取30次奖动内容后，奖动内容会进行刷新。",
    value: 1
  };
  const _0x50d48b = {
    name: "《咸鱼之王》中，激活「月卡」，挂机金币收益增加10%。",
    value: 2
  };
  const _0x4ea3d3 = {
    name: "《咸鱼之王》中，「竞技场」 每周结算时，巅峰场玩家均可获得「巅峰王者徽章」。",
    value: 2
  };
  const _0x41e22f = {
    name: "《咸鱼之王》中，「周卡」激活，可以使挂机时间增加2小时。",
    value: 2
  };
  const _0x5e36c1 = {
    name: "《咸鱼之王》中，咸将装备的等级无法超「主公阿咸」的等级。",
    value: 1
  };
  const _0x2305af = {
    name: "《咸鱼之王》中，开启「金币礼包」获取的金币「招募令」与挂机奖励有关。",
    value: 1
  };
  const _0x217b2a = {
    name: "《咸鱼之王》中，挑战「咸将塔」消耗的小鱼干在通过当前塔后会获得10个。",
    value: 1
  };
  const _0x4646e0 = {
    name: "《咸鱼之王》中，「梦魇水晶」的属性需要佩戴咸将达到701级才会生效。",
    value: 1
  };
  const _0x240621 = {
    name: "《咸鱼之王》中，咸将达到700级并进阶后可以激活自身全部基础技能。",
    value: 1
  };
  const _0x4b23e9 = {
    name: "电影《喜剧之王》于1999年上映。",
    value: 1
  };
  const _0x1ce36f = {
    name: "《喜剧之王》的主演包括周星驰、莫文蔚、张柏芝和吴孟达。",
    value: 1
  };
  const _0x131d8a = {
    name: "电影《喜剧之王》是周星驰系列电影的经典之作。",
    value: 1
  };
  const _0xef550e = {
    name: "周星驰不是《喜剧之王》导演。",
    value: 2
  };
  const _0x5d175c = {
    name: "“我养你啊”出自电影《喜剧之王》。",
    value: 1
  };
  const _0x28d51b = {
    name: "周星弛身兼《喜剧之王》导演主演的双重身份。",
    value: 1
  };
  const _0x5b60ad = {
    name: "《喜剧之王》电影中，尹天仇原本是一名成功的演员。",
    value: 2
  };
  const _0x21bff4 = {
    name: "《喜剧之王》电影中，尹天仇最终成功出演了新戏的男主角。",
    value: 2
  };
  const _0x39c176 = {
    name: "《喜剧之王》电影中，尹天仇在片场遇到了卧底警员。",
    value: 1
  };
  const _0x25f64b = {
    name: "《喜剧之王》电影中，尹天仇没有帮助警方破获案件。",
    value: 2
  };
  const _0x4e1768 = {
    name: "《喜剧之王》电影中，尹天仇得到了娟姐的赏识。",
    value: 1
  };
  const _0x4bf1c3 = {
    name: "《喜剧之王》电影中，尹天仇的梦想是成为一名演员。",
    value: 1
  };
  const _0x1a69a = {
    name: "《喜剧之王》电影中，尹天仇在街坊福利会里开设的是舞蹈训练班。",
    value: 2
  };
  const _0x4771df = {
    name: "《喜剧之王》电影中，尹天仇的盒饭都没有被狗吃掉。",
    value: 2
  };
  const _0x3c39b0 = {
    name: "《喜剧之王》电影中，柳飘飘是尹天仇街坊剧场的唯一观众。",
    value: 1
  };
  const _0xc07bcc = {
    name: "《喜剧之王》电影中，柳飘飘找尹天仇学习演技是因为喜欢他",
    value: 2
  };
  const _0x2c3c63 = {
    name: "电影中，尹天仇在柳飘飘支持下继续在街坊福利会的演员训练班里教授表演技巧。",
    value: 1
  };
  const _0x213cfc = {
    name: "《喜剧之王》电影中，娟姐没有考核过尹天仇的演技。",
    value: 2
  };
  const _0xde1dc2 = {
    name: "《喜剧之王》电影中，洪爷肚子上的伤是尹天仇捅的。",
    value: 2
  };
  const _0x1404a9 = {
    name: "《喜剧之王》电影中，尹天仇饰演过神父",
    value: 1
  };
  const _0x30e090 = {
    name: "《喜剧之王》电影中，“我养你啊”是尹天仇对柳飘飘说的。",
    value: 1
  };
  const _0x1b844d = {
    name: "《喜剧之王》电影中，尹天仇曾指导阿飞，拓展保护费市场。",
    value: 1
  };
  const _0x11d2e7 = {
    name: "《喜剧之王》电影中，尹天仇没有进入了犯罪团伙内部。",
    value: 2
  };
  const _0x448953 = {
    name: "《喜剧之王》电影中，片场导演每次说话都要附带一段舞。",
    value: 1
  };
  const _0x44ae3e = {
    name: "《喜剧之王》电影中，尹天仇最终被召入警方卧底小分队。",
    value: 2
  };
  const _0x394655 = {
    name: "《喜剧之王》电影中，尹天仇在街坊福利会里开设的是表演训练班。",
    value: 1
  };
  const _0x201815 = {
    name: "《喜剧之王》电影中，尹天仇的盒饭都被狗吃了。",
    value: 2
  };
  const _0x24fdf0 = {
    name: "《喜剧之王》电影中，尹天仇设有在片场吃过盒饭。",
    value: 1
  };
  const _0x224348 = {
    name: "《喜剧之王》电影中，街坊福利会剧《雷雨》的主演没有洪爷。",
    value: 2
  };
  const _0x322541 = {
    name: "《喜剧之王》电影中，柳飘飘在尹天仇的指导下逐渐敞开心扉，并对尹天仇产生了感情。",
    value: 1
  };
  const _0x654fd1 = {
    name: "《喜剧之王》电影中，龙少爷给了柳飘飘很多钱。",
    value: 1
  };
  const _0x53109d = {
    name: "《喜剧之王》电影中，尹天仇把《演员的自我修养》送给了柳飘飘。",
    value: 2
  };
  const _0x3625e7 = {
    name: "《喜剧之王》电影中，尹天仇得到了大明星娟姐的提携，有机会在新戏中担任男主角。",
    value: 1
  };
  const _0x36c934 = {
    name: "《喜剧之王》电影中，尹天仇饰演卧底警察被娟姐看中。",
    value: 2
  };
  const _0x4967f7 = {
    name: "《喜剧之王》电影中，杜娟儿出演了社区剧场雷雨。",
    value: 1
  };
  const _0x54c222 = {
    name: "《喜剧之王》电影中，尹天仇的真实身份是警察。",
    value: 2
  };
  const _0x1ef70d = {
    name: "《喜剧之王》电影中，尹天仇喜欢娟姐，不喜欢柳飘飘。",
    value: 2
  };
  const _0x34b1a1 = {
    name: "《喜剧之王》电影中，柳飘飘为了学习演技给尹天仇交学费。",
    value: 1
  };
  const _0x444f5c = {
    name: "《喜剧之王》电影中，周星驰饰演尹天仇。",
    value: 1
  };
  const _0x5e7f07 = {
    name: "《喜剧之王》电影中，柳飘飘不会抽烟。",
    value: 2
  };
  const _0x240ea7 = {
    name: "《喜剧之王》电影中，柳飘飘将头发剪短了。",
    value: 2
  };
  const _0x59d554 = {
    name: "《喜剧之王》电影中，尹天仇喜欢霞姨。",
    value: 2
  };
  const _0x464430 = {
    name: "《喜剧之王》电影中，妈妈桑带领柳飘飘来到尹天仇的演员训练班",
    value: 1
  };
  const _0x105ed6 = {
    name: "《喜剧之王》电影中，柳飘飘的初恋是尹天仇。",
    value: 2
  };
  const _0x90bc87 = {
    name: "《喜剧之王》电影中，霞姨是片场导演。",
    value: 2
  };
  const _0x3c1842 = {
    name: "《喜剧之王》电影中，尹天仇凭借演时死尸的忘我，赢得了娟姐的认可。",
    value: 1
  };
  const _0x53dd0b = {
    name: "《喜剧之王》电影中，霞姨暗恋尹天仇。",
    value: 2
  };
  const _0x3beaa5 = {
    name: "《喜剧之王》电影中，杜娟儿不怕蟑螂。",
    value: 2
  };
  const _0x2a9825 = {
    name: "《喜剧之王》电影中，龙少爷打了柳飘飘。",
    value: 1
  };
  const _0x2ee123 = {
    name: "《喜剧之王》电影中，柳飘飘是杜娟儿粉丝。",
    value: 1
  };
  const _0x5cdb02 = {
    name: "《喜剧之王》电影中，霞姨很看重尹天仇。",
    value: 2
  };
  const _0x361891 = {
    name: "《喜剧之王》电影中，尹天仇跑龙套饰演过尸体",
    value: 1
  };
  const _0x4a26ac = {
    name: "《喜剧之王》电影中，尹天仇被香蕉皮绊倒过。",
    value: 1
  };
  const _0x28299e = {
    name: "《喜剧之王》电影中，尹天仇被柳飘飘殴打过。",
    value: 1
  };
  const _0x12ce2c = {
    name: "《喜剧之王》电影中，柳飘飘是龙少爷的初恋。",
    value: 2
  };
  const _0xf9de21 = {
    name: "《喜剧之王》电影中，街坊福利会可以打乒乓球。",
    value: 1
  };
  const _0x376613 = {
    name: "《喜剧之王》电影中，柳飘飘不会转呼啦图。",
    value: 2
  };
  const _0x3d73c7 = {
    name: "《演员的自我修养》是尹天仇最喜欢的一本书.",
    value: 1
  };
  const _0x2791c3 = {
    name: "《喜剧之王》电影中，柳飘飘拿走了尹天仇的手表。",
    value: 1
  };
  const _0x29eccc = {
    name: "《喜剧之王》电影中，柳飘飘爱上了龙少爷。",
    value: 2
  };
  const _0x11e661 = {
    name: "电影《长江7号》是一部科幻喜剧片。",
    value: 1
  };
  const _0xc6d7c3 = {
    name: "《长江7号》电影中，外星生物是一个高科技的机器人。",
    value: 2
  };
  const _0x3d25e5 = {
    name: "《长江7号》电影中，周小狄在学校里经常被欺负。",
    value: 1
  };
  const _0x3038d4 = {
    name: "《长江7号》电影中，7仔最终被周铁的儿子周小狄收养」",
    value: 2
  };
  const _0x583a03 = {
    name: "《长江7号》电影中，周星驰饰演的角色是一名电工。",
    value: 2
  };
  const _0x10f85a = {
    name: "《长江7号》电影中，7仔最终带领周小狄一家去到外星球生活。",
    value: 2
  };
  const _0x456f2f = {
    name: "《长江7号》电影中，周小狄因为家境贫寒，而被同学取笑。",
    value: 1
  };
  const _0x5a425f = {
    name: "《长江7号》电影中，周小狄因为7仔的帮助，成绩突飞猛进。",
    value: 2
  };
  const _0x54f4a6 = {
    name: "《长江7号》电影中，周小狄在学校里与一名女同学成为了好朋友。",
    value: 1
  };
  const _0x263bea = {
    name: "《长江7号》电影中，7仔的能量来源是太阳能。",
    value: 2
  };
  const _0x4b8776 = {
    name: "《长江7号》电影中，周铁在建筑工地意外死亡，7仔施展神奇力量救了他。",
    value: 1
  };
  const _0x30d076 = {
    name: "《长江7号》电影中，周小狄为了保护7仔，与其他小孩发生了打斗。",
    value: 1
  };
  const _0x4bc84f = {
    name: "《长江7号》电影中，周星驰饰演的角色周铁与7仔进行了足球比赛。",
    value: 2
  };
  const _0x17626c = {
    name: "《长江7号》电影中，周铁与周小狄的老师发展出了一段感情。",
    value: 2
  };
  const _0x80fd84 = {
    name: "《长江7号》电影中，7仔是从一颗彗星上掉落到地球的。",
    value: 2
  };
  const _0x2ebb57 = {
    name: "《长江7号》电影中，周小狄最终成为了学霸，感谢7仔的帮助。",
    value: 2
  };
  const _0x5aad0f = {
    name: "《长江7号》电影中，7仔的能力之一是可以变身成其他物品或生物。",
    value: 2
  };
  const _0x1b4947 = {
    name: "《长江7号》电影中，周星驰饰演的角色周铁为了保护7仔，决定将其送回外星球。",
    value: 2
  };
  const _0x167774 = {
    name: "《长江7号》电影中，周铁为了给儿子周小狄买衣服而去垃圾堆捡拾物品。",
    value: 2
  };
  const _0x1926fa = {
    name: "《长江7号》电影中，周小狄在学校被同学欺负是因为他们家境贫寒。",
    value: 1
  };
  const _0x57280f = {
    name: "《长江7号》电影中，周铁的儿子名叫大时钟。",
    value: 2
  };
  const _0x337850 = {
    name: "《长江7号》电影中，周星驰饰演的角色经常捡拾物品来维持生计。",
    value: 1
  };
  const _0x4d2b9c = {
    name: "《长江7号》电影中，7仔最终成为了周小狄一家的宠物。",
    value: 2
  };
  const _0x593ae1 = {
    name: "《长江7号》电影中，周小狄因为学习压力大，曾经想过放弃学业。",
    value: 1
  };
  const _0x5c9001 = {
    name: "《长江7号》电影中，周星驰饰演的角色被误认为是外星人。",
    value: 2
  };
  const _0x1c863d = {
    name: "《长江7号》电影中，周小狄在学校里曾经因为7仔成为了同学们的焦点。",
    value: 1
  };
  const _0x2e3fde = {
    name: "《长江7号》电影中，周星驰饰演的角色故意把7仔丢掉，以保护家人免受危险。",
    value: 2
  };
  const _0x39a92e = {
    name: "《长江7号》电影中，周小狄曾经因为7仔而卷入一场事故。",
    value: 1
  };
  const _0x44677a = {
    name: "《长江7号》电影中，周小狄在众人面前展示了7仔的神奇能力。",
    value: 2
  };
  const _0x33e8cd = {
    name: "《长江7号》电影中，7仔曾经救过一名落水的小孩。",
    value: 2
  };
  const _0x5a39a2 = {
    name: "《长江7号》电影中，周小狄在学校里因为7仔结交了新朋友。",
    value: 1
  };
  const _0xbf0d1f = {
    name: "《长江7号》电影中，周小狄在学校里遇到了一位善良的女教师，她对他很照顾。",
    value: 1
  };
  const _0x3d2e7a = {
    name: "《长江7号》电影中，7仔的能力之一是可以预测未来。",
    value: 2
  };
  const _0x832415 = {
    name: "《长江7号》电影中，周星驰饰演的角色为了哄儿子开心，故意说7仔是贵重的玩具。",
    value: 1
  };
  const _0x2bc2f8 = {
    name: "《长江7号》电影中，7仔在周小狄身边变身成一只大熊猫。",
    value: 2
  };
  const _0x202e9c = {
    name: "《长江7号》电影中，周小狄曾经因为7仔而受到老师表扬",
    value: 2
  };
  const _0x54c193 = {
    name: "《长江7号》电影中，7仔曾经被一名坏人抢走。",
    value: 2
  };
  const _0x4b2129 = {
    name: "《长江7号》电影中，周星驰饰演的角色为了保护7仔，曾经与一名黑帮打斗。",
    value: 2
  };
  const _0x4654f5 = {
    name: "《长江7号》电影中，7仔最终带领周小狄一家过上了幸福的生活。",
    value: 2
  };
  const _0x4e1f97 = {
    name: "《长江7号》电影中，周星驰饰演的角色为了给儿子买玩具而去垃圾堆捡拾物品。",
    value: 1
  };
  const _0x168d63 = {
    name: "《长江7号》电影中，周铁捡到的外星生物是灰色的。",
    value: 2
  };
  const _0x2c9eb3 = {
    name: "《长江7号》电影中，周小狄的学校是一所普通的学校。",
    value: 2
  };
  const _0x73654d = {
    name: "《长江7号》电影中，7仔有治愈能力。",
    value: 1
  };
  const _0x241de5 = {
    name: "《长江7号》电影中，周星驰饰演的角色是一位贫穷的父亲和建筑工人。",
    value: 1
  };
  const _0x1a5085 = {
    name: "《长江7号》电影中，周小狄最好的朋友是一位女生。",
    value: 1
  };
  const _0x59786c = {
    name: "《长江7号》电影中，7仔并不会说人类的语言。",
    value: 1
  };
  const _0x307726 = {
    name: "《长江7号》电影中，外星生物7仔会飞。",
    value: 2
  };
  const _0xbcdc2a = {
    name: "《长江7号》电影中，7仔可以让时间倒流。",
    value: 2
  };
  const _0x1e81a6 = {
    name: "《长江7号》电影中，7仔的能量来源是吃食物。",
    value: 2
  };
  const _0x147b8c = {
    name: "《长江7号》电影中，7仔最终变成了一只小狗。",
    value: 2
  };
  const _0x19f9a0 = {
    name: "《长江7号》电影中，周小狄从来没有想过放弃学业。",
    value: 2
  };
  const _0x288ed7 = {
    name: "《长江7号》电影中，7仔为了保护周小狄，决定将其带去外星球。",
    value: 2
  };
  const _0x489972 = {
    name: "《长江7号》电影中，周星驰饰演的角色最后成为了一位英雄。",
    value: 2
  };
  const _0x4272a7 = {
    name: "《长江7号》电影中，周小狄因为家庭环境的原国，在贵族学校与其他同学格格不入。",
    value: 1
  };
  const _0x5af6af = {
    name: "《长江7号》电影中，袁老师非常关心周小狄。",
    value: 1
  };
  const _0x28a2c3 = {
    name: "周星驰担任《长江7号》的出品人、监制、编剧、导演及主演。",
    value: 1
  };
  const _0x1ef49a = {
    name: "《长江7号》电影中，7仔修好了周小狄家的电风扇。",
    value: 1
  };
  const _0x4302a7 = {
    name: "《长江7号》电影中，7仔柔韧性很好。",
    value: 1
  };
  const _0x4fb434 = {
    name: "《长江7号》电影中，周小狄家中很干净，没有蟑螂。",
    value: 2
  };
  const _0x13345e = {
    name: "《长江7号》电影中，周小狄的成绩非常好。",
    value: 2
  };
  const _0x4122cd = {
    name: "电影《食神》于1996年12月21日上映。",
    value: 1
  };
  const _0x4e7f7d = {
    name: "《食神》电影中，皇帝炒饭得到了食神周星驰的肯定，拿到满分。",
    value: 2
  };
  const _0x2d7671 = {
    name: "《食神》电影中，莱品[禾花雀]因为厨师太丑得了零分。",
    value: 1
  };
  const _0x17b5c8 = {
    name: "《食神》电影中，唐牛背叛了食神史提芬周。",
    value: 1
  };
  const _0x57117a = {
    name: "《食神》电影中，史提芬周的餐馆里用了坏掉的牛肉。",
    value: 1
  };
  const _0x114be8 = {
    name: "《食神》电影中，唐牛成为了新食神。",
    value: 1
  };
  const _0x454698 = {
    name: "《食神》电影中，火鸡做出了最好吃的撒尿牛丸。",
    value: 2
  };
  const _0x4b1e87 = {
    name: "《食神》电影中，撒尿牛丸的第一位顾客是厌食症患者。",
    value: 1
  };
  const _0x3fd5aa = {
    name: "《食神》电影中，撒尿牛丸被用来打乒乓球。",
    value: 1
  };
  const _0x19e176 = {
    name: "《食神》电影中，周星驰饰演的食神史提芬周靠撒尿牛丸翻身。",
    value: 1
  };
  const _0x14f239 = {
    name: "《食神》电影中，火鸡姐因为保护食神旗被毁容。",
    value: 1
  };
  const _0x5d17b8 = {
    name: "《食神》电影中，火鸡姐是食神史提芬周的粉丝。",
    value: 1
  };
  const _0x31f74f = {
    name: "《食神》电影中，火鸡姐为食神史提芬周档了一刀。",
    value: 1
  };
  const _0xf5da36 = {
    name: "《食神》电影中，食神史提芬周成为了少林弟子。",
    value: 1
  };
  const _0x206e6f = {
    name: "《食神》电影中，火鸡姐曾给史提芬周做了一碗叉烧饭。",
    value: 1
  };
  const _0x30775c = {
    name: "《食神》电影中，撒尿牛丸的第一位顾客是唐牛。",
    value: 2
  };
  const _0x4c422f = {
    name: "《食神》电影中，史提芬周与唐牛PK做佛跳墙。",
    value: 1
  };
  const _0x10716c = {
    name: "《食神》电影中，唐牛去的中国厨艺训练学院，其实是少林寺厨房。",
    value: 1
  };
  const _0x106db8 = {
    name: "《食神》电影中，唐牛比赛做的佛跳墙用了七七四十九小时。",
    value: 2
  };
  const _0x129f49 = {
    name: "《食神》电影中，火鸡姐救了周星驰饰演的食神史提芬周。",
    value: 1
  };
  const _0x3f6854 = {
    name: "《食神》电影中，参加食神比赛的人都拿了满分。",
    value: 2
  };
  const _0x29f646 = {
    name: "《食神》电影中，周星驰饰演的食神给所有参赛者都打了满分。",
    value: 2
  };
  const _0xbdffc = {
    name: "《食神》电影中，史提芬周参加食神比赛迟到了。",
    value: 2
  };
  const _0x4d53c8 = {
    name: "《食神》电影中，史提芬周与唐牛PK做皇帝炒饭。",
    value: 2
  };
  const _0x952cfd = {
    name: "《食神》电影中，食神比赛当晚出现了九星连珠。",
    value: 1
  };
  const _0x20a1fd = {
    name: "《食神》电影中，火鸡姐非常喜欢史提芬周。",
    value: 1
  };
  const _0x69ccce = {
    name: "《食神》电影中，食神史提芬周被徒弟唐牛当众击败。",
    value: 1
  };
  const _0x22f133 = {
    name: "《食神》电影中，史提芬周一直都是食神。",
    value: 2
  };
  const _0x54b04f = {
    name: "《食神》电影中，史提芬周做出的撒尿牛丸很有弹性。",
    value: 1
  };
  const _0x1fe18b = {
    name: "《食神》电影中，火鸡姐曾在中国厨艺技术学院学习。",
    value: 2
  };
  const _0x51234d = {
    name: "《食神》电影中，史提芬周的徒弟唐牛喜欢火鸡姐。",
    value: 2
  };
  const _0x2b0a6e = {
    name: "《食神》电影中，史提芬周误入了少林寺。",
    value: 1
  };
  const _0x745ef4 = {
    name: "《食神》电影中，史提芬周非常有商业头脑。",
    value: 1
  };
  const _0x218012 = {
    name: "《食神》电影中，史提芬周靠撒尿牛丸重新成为食神。",
    value: 1
  };
  const _0x36dcdb = {
    name: "《食神》电影中，火鸡姐最终去了少林寺。",
    value: 2
  };
  const _0x3b394e = {
    name: "《食神》电影中，唐牛曾经是少林寺学徒。",
    value: 1
  };
  const _0x5ed5f4 = {
    name: "《食神》电影中，唐牛的拿手菜是撒尿牛丸。",
    value: 2
  };
  const _0x1b51d1 = {
    name: "《食神》电影中，史提芬周是全港知名的食神，在饮食界首屈一指。",
    value: 1
  };
  const _0x443af4 = {
    name: "《食神》电影中，使用隔夜米饭来炒米饭是最基本的常识。",
    value: 1
  };
  const _0x32659a = {
    name: "《食神》电影中，史提芬制作甜品[彩虹鲜花拔丝]是麦芽糖、鲜花瓣制作的。",
    value: 1
  };
  const _0x1472e4 = {
    name: "《食神》电影中，火鸡姐卖给史蒂芬是一碗叉烧饭。",
    value: 2
  };
  const _0xaceb2 = {
    name: "《食神》电影中，在《香港至尊名厨大赛》中史提芬将四大名厨的菜通通打成0分。",
    value: 1
  };
  const _0xdd9286 = {
    name: "《食神》电影中，卖出第一碗[撒尿牛丸]的价格是1元。",
    value: 2
  };
  const _0x141148 = {
    name: "《食神》电影中，史蒂芬凭撒尿牛丸入围香港饮食奇才。",
    value: 1
  };
  const _0x925557 = {
    name: "《食神》电影中，火鸡姐摊位下贴满了史蒂芬的照片。",
    value: 1
  };
  const _0x1742a3 = {
    name: "《食神》电影中，”好折凳”被誉为七种武器之首。",
    value: 1
  };
  const _0x39e023 = {
    name: "《食神》电影中，食神制作的叉烧饭，起名是[黯然销魂饭]。",
    value: 1
  };
  const _0x15fac9 = {
    name: "《食神》电影中，史蒂芬去少林寺的厨房学习仅用了2个月。",
    value: 2
  };
  const _0x2e662c = {
    name: "《食神》电影中，《香港至尊名厨大赛》比赛地点在少林寺。",
    value: 2
  };
  const _0x2bf9bb = {
    name: "《食神》电影中，最终史提芬周靠咸鱼料理赢得了比赛。",
    value: 2
  };
  const _0x533d11 = {
    name: "《食神》电影中，方丈讨厌别人在背后说他坏话。",
    value: 1
  };
  const _0x17170d = {
    name: "《食神》电影中，史提芬周最后在少林寺做和尚，法号星星。",
    value: 2
  };
  const _0x5b3ad0 = {
    name: "《食神》电影中，只要用心，人人都可以是食神。",
    value: 1
  };
  const _0x37117d = {
    name: "《食神》电影中，「黯然销魂饭」吃了会流泪，是因为放了洋葱",
    value: 1
  };
  const _0x3a3149 = {
    name: "《食神》电影中，少林寺方丈，法号为梦遗。",
    value: 1
  };
  const _0x283940 = {
    name: "《食神》电影中，史提芬周加入了少林寺十八铜人。",
    value: 2
  };
  const _0x4a6724 = {
    name: "《食神》电影中，火鸡姐最终和方丈在一起了。",
    value: 2
  };
  const _0x1bd180 = {
    name: "《食神》电影中，史提芬周在做莱时，使出「屠龙斩」",
    value: 1
  };
  const _0x3c34a9 = {
    name: "《食神》电影中，火鸡姐最终变得很漂亮。",
    value: 1
  };
  const _0x114168 = {
    name: "《食神》电影中，火鸡姐绰号「双刀火鸡」。",
    value: 1
  };
  var _0x5bf1f7 = [_0x1b08ff, _0x39d127, _0x2604c6, _0x1f047f, _0x3f5c56, _0x29c956, _0x132e20, _0x165dcc, _0xa158ca, _0x1be925, _0x22eec7, _0x21cdf6, _0x28aaf8, _0x1132c6, _0x3be05e, _0x524058, _0x13943c, _0x1808df, _0x4afb14, _0x1b5f51, _0x394627, _0x5a9235, _0x5e6ec5, _0x4d191b, _0x16696a, _0x5ab2c1, _0x1155e8, _0xacb2c6, _0x5c29c1, _0xe49bca, _0x4acd61, _0x48ab98, _0x220148, _0x3bec58, _0x2121e3, _0x15f8e2, _0x1ef4df, _0x2fc463, _0x9d3ad3, _0x1e5c47, _0x362001, _0x255cb3, _0x10f395, _0x3333df, _0x57ddb7, _0x219de5, _0x2744a5, _0x48d2f2, _0x2fe637, _0x4ef59d, _0x2f8c26, _0x2e827d, _0x946281, _0x49c4cf, _0x587e08, _0x3d9dfb, _0x582aaf, _0x59f3f2, _0x324868, _0x3198c5, _0x5c9eaa, _0x1dfaaf, _0x4385bb, _0x23c10f, _0x2c04ea, _0x2d8f9a, _0x255daa, _0x4ad3a4, _0x4dfb28, _0x15fd20, _0x571abf, _0x418c4b, _0x520ef0, _0x27e402, _0x39b654, _0x564329, _0x2f3453, _0x39461e, _0x33c210, _0x19bab3, _0x12469b, _0x4e2edd, _0x51d2e9, _0x118af4, _0xa5acd, _0x3f8f8f, _0x1d15ae, _0x15a490, _0x36f8a2, _0x5e8954, _0x918c2c, _0x7c2423, _0x570256, _0x38de08, _0x3afb6e, _0xdae62f, _0x2d8ddb, _0xd538fd, _0x38831e, _0x54f7c5, _0x1ce037, _0x3c04bb, _0x1d6c3e, _0x358ecb, _0x513d4e, _0x27caaf, _0x59b188, _0x3556ec, _0x3a8e5a, _0x1859a9, _0xd58172, _0x4a29bf, _0x9c4f75, _0x26fee1, _0x2356a4, _0xc402b1, _0x1e319f, _0x51b127, _0x4f9832, _0x5639a5, _0x5a3b02, _0x30c056, _0x42dc5b, _0xf6ac43, _0x4ccf37, _0x185d7f, _0x4c59ff, _0x2e5218, _0x509451, _0x1dbe27, _0x348295, _0x46ada8, _0x2cfa8a, _0x12856c, _0x500d3b, _0x42473b, _0x27e30b, _0x5b1af4, _0x3ffeea, _0x391965, _0x57e7b5, _0x1c5587, _0x2da556, _0x29ee8f, _0x20f9a0, _0x8975b4, _0x3da8f7, _0x4f84de, _0x452087, _0x3dc013, _0x867e78, _0x40ba54, _0x1b0c82, _0x34f75f, _0x4dd838, _0x27b53f, _0x42457e, _0xf4ac8f, _0x4fca67, _0x50eadd, _0x19268e, _0x266916, _0x3ec519, _0x3c73cb, _0x31f558, _0x5ea9f1, _0x10413b, _0x5c2ceb, _0x2fbe11, _0x51ed6b, _0x2489a9, _0x506daf, _0x105d14, _0x5c765b, _0x599f19, _0x404d13, _0x2bb7b3, _0x285fda, _0x3c5562, _0xbf9e8e, _0x4568e2, _0x15e361, _0x89c869, _0x460595, _0x26da2b, _0x3a55f3, _0x91ed79, _0x1935a3, _0x50e526, _0x26b0ec, _0x3cc92a, _0x35a522, _0x104273, _0x34f64c, _0x42f9d0, _0x6002d4, _0x24c02e, _0x8a7388, _0x42c5f4, _0x820dc8, _0x4836a7, _0x874ed2, _0x58c11e, _0x1a64ba, _0x2a93d1, _0x35412a, _0x8970d9, _0x4607cb, _0x505d98, _0x5f7c4b, _0x1f241b, _0x218266, _0x353771, _0x3da09d, _0x5a74cd, _0x2a50bf, _0x5b75ba, _0x244a38, _0x591e6c, _0x46f7c8, _0x4b9eba, _0x3a986d, _0x5546d4, _0xa98616, _0x284f90, _0x558490, _0x563b76, _0x3ea998, _0x3b4410, _0x44ecee, _0x409b9f, _0x2298da, _0x166d97, _0x4c6832, _0x587d27, _0x4743eb, _0x861966, _0x2739d8, _0x37141a, _0x3a090f, _0x18a622, _0x48d831, _0x38636e, _0x2aee91, _0x40eaa2, _0x122835, _0x137582, _0x148c74, _0x9751d5, _0x34f1fb, _0x26428f, _0x25a328, _0x376cfb, _0x1a112d, _0x399d50, _0x139e8a, _0x3ee144, _0x34eb43, _0x4f5578, _0x50cb51, _0x2a8abf, _0x4d4e8e, _0x4e96bf, _0x58d854, _0x3a427e, _0x11fe89, _0x530662, _0x330c94, _0x432803, _0x1aa79b, _0x3f3f3b, _0x3e7ba5, _0x22e686, _0x4cb419, _0x1bf944, _0x182dab, _0x134bcc, _0x482f1c, _0x6ea108, _0x26884c, _0x17d491, _0xb28349, _0x32acaa, _0x4213a4, _0x1c5086, _0x459951, _0x434c50, _0x1b182a, _0x5b3a68, _0x4aca63, _0x3a190f, _0x5b674b, _0xbbbc27, _0x22c4c7, _0x3123ac, _0xc387b4, _0x303016, _0x28421c, _0x43e4c2, _0x2b643b, _0x3c65a, _0x4b14f5, _0x214b61, _0x329c8f, _0x992c37, _0x51cabe, _0x2e8fe7, _0x211a9e, _0x549a0b, _0x442744, _0x22497a, _0x4ece5b, _0x2526fc, _0x4c58b8, _0xdb9ccc, _0x4c129c, _0x32c83a, _0x21935d, _0x401352, _0x3f61b4, _0x3ac348, _0x225bbb, _0x5f2eb7, _0x73ce03, _0x1dd0e4, _0x1ba940, _0xcfd1c9, _0x35f17a, _0x48b5b8, _0x232381, _0x4a9fc5, _0x3c9f1a, _0x526da8, _0x4669b5, _0x16f03f, _0x561aa5, _0x3f3624, _0x5f4800, _0x1b5e0d, _0x1ca3c8, _0x4a706c, _0x2f1c78, _0x301939, _0x5d8413, _0x20ea3a, _0x31f974, _0x106cf6, _0x488dc4, _0x1f7141, _0x5ab346, _0x22ec97, _0x2c25d3, _0x565ccc, _0x34aae9, _0xd311b0, _0x39ff0f, _0x40cbce, _0x4b09eb, _0x5cc98f, _0x4ef9dc, _0x328dd2, _0x48f074, _0x534227, _0x1b1586, _0x30eddd, _0x1611bf, _0x346452, _0x167fa6, _0x29ac75, _0x255a66, _0x2b5f16, _0x5cfe00, _0x1294c0, _0x2d55e3, _0x58e63c, _0x499295, _0x16ee10, _0x2e48c2, _0x3f97c2, _0x272119, _0x362a8b, _0xe265a5, _0x4aae63, _0x49fcb6, _0x5e9ad2, _0x18aa4e, _0x3f084b, _0x25cba7, _0x4a73d7, _0x30dad1, _0x5019e4, _0x1b6d85, _0x21224b, _0x2b6cd8, _0x54d696, _0x50d48b, _0x4ea3d3, _0x41e22f, _0x5e36c1, _0x2305af, _0x217b2a, _0x4646e0, _0x240621, _0x4b23e9, _0x1ce36f, _0x131d8a, _0xef550e, _0x5d175c, _0x28d51b, _0x5b60ad, _0x21bff4, _0x39c176, _0x25f64b, _0x4e1768, _0x4bf1c3, _0x1a69a, _0x4771df, _0x3c39b0, _0xc07bcc, _0x2c3c63, _0x213cfc, _0xde1dc2, _0x1404a9, _0x30e090, _0x1b844d, _0x11d2e7, _0x448953, _0x44ae3e, _0x394655, _0x201815, _0x24fdf0, _0x224348, _0x322541, _0x654fd1, _0x53109d, _0x3625e7, _0x36c934, _0x4967f7, _0x54c222, _0x1ef70d, _0x34b1a1, _0x444f5c, _0x5e7f07, _0x240ea7, _0x59d554, _0x464430, _0x105ed6, _0x90bc87, _0x3c1842, _0x53dd0b, _0x3beaa5, _0x2a9825, _0x2ee123, _0x5cdb02, _0x361891, _0x4a26ac, _0x28299e, _0x12ce2c, _0xf9de21, _0x376613, _0x3d73c7, _0x2791c3, _0x29eccc, _0x11e661, _0xc6d7c3, _0x3d25e5, _0x3038d4, _0x583a03, _0x10f85a, _0x456f2f, _0x5a425f, _0x54f4a6, _0x263bea, _0x4b8776, _0x30d076, _0x4bc84f, _0x17626c, _0x80fd84, _0x2ebb57, _0x5aad0f, _0x1b4947, _0x167774, _0x1926fa, _0x57280f, _0x337850, _0x4d2b9c, _0x593ae1, _0x5c9001, _0x1c863d, _0x2e3fde, _0x39a92e, _0x44677a, _0x33e8cd, _0x5a39a2, _0xbf0d1f, _0x3d2e7a, _0x832415, _0x2bc2f8, _0x202e9c, _0x54c193, _0x4b2129, _0x4654f5, _0x4e1f97, _0x168d63, _0x2c9eb3, _0x73654d, _0x241de5, _0x1a5085, _0x59786c, _0x307726, _0xbcdc2a, _0x1e81a6, _0x147b8c, _0x19f9a0, _0x288ed7, _0x489972, _0x4272a7, _0x5af6af, _0x28a2c3, _0x1ef49a, _0x4302a7, _0x4fb434, _0x13345e, _0x4122cd, _0x4e7f7d, _0x2d7671, _0x17b5c8, _0x57117a, _0x114be8, _0x454698, _0x4b1e87, _0x3fd5aa, _0x19e176, _0x14f239, _0x5d17b8, _0x31f74f, _0xf5da36, _0x206e6f, _0x30775c, _0x4c422f, _0x10716c, _0x106db8, _0x129f49, _0x3f6854, _0x29f646, _0xbdffc, _0x4d53c8, _0x952cfd, _0x20a1fd, _0x69ccce, _0x22f133, _0x54b04f, _0x1fe18b, _0x51234d, _0x2b0a6e, _0x745ef4, _0x218012, _0x36dcdb, _0x3b394e, _0x5ed5f4, _0x1b51d1, _0x443af4, _0x32659a, _0x1472e4, _0xaceb2, _0xdd9286, _0x141148, _0x925557, _0x1742a3, _0x39e023, _0x15fac9, _0x2e662c, _0x2bf9bb, _0x533d11, _0x17170d, _0x5b3ad0, _0x37117d, _0x3a3149, _0x283940, _0x4a6724, _0x1bd180, _0x3c34a9, _0x114168];
  async function _0x7d5ada() {
    {
      return _0x5bf1f7;
    }
  }
  async function _0x268503() {}
  async function _0x1639a9() {
    return _0x5bf1f7 ? _0x5bf1f7.length : 0;
  }
  function _0x8542c9(_0x273439, _0x57f25c) {
    if (!_0x273439 || !_0x57f25c) {
      return false;
    }
    const _0x4548ca = _0x273439.replace(/\s+/g, "").toLowerCase();
    const _0x51a96b = _0x57f25c.replace(/\s+/g, "").toLowerCase();
    return _0x51a96b.includes(_0x4548ca) || _0x4548ca.includes(_0x51a96b);
  }
  async function _0x123a14(_0x453275) {
    try {
      const _0x1177ba = await _0x7d5ada();
      if (!_0x1177ba || _0x1177ba.length === 0) {
        return null;
      }
      for (let _0x1a3060 = 0; _0x1a3060 < _0x1177ba.length; _0x1a3060++) {
        const _0x347b6f = _0x1177ba[_0x1a3060];
        if (!_0x347b6f.name || !_0x347b6f.value) {
          continue;
        }
        if (_0x8542c9(_0x347b6f.name, _0x453275)) {
          {
            return _0x347b6f.value;
          }
        }
      }
      return null;
    } catch (_0xf674c0) {
      {
        return null;
      }
    }
  }
  const _0x389792 = {
    isAnswering: false,
    studyId: null,
    questionCount: 0,
    answeredCount: 0,
    status: "",
    maxCorrectNum: 0,
    thisWeek: false
  };
  function _0x776ffb() {
    {
      const _0x128d47 = document.getElementById("qa-study-status");
      if (_0x128d47) {
        {
          let _0x3bcfb = "";
          switch (_0x389792.status) {
            case "starting":
              _0x3bcfb = "正在获取题目...";
              break;
            case "answering":
              _0x3bcfb = "答题中 " + _0x389792.answeredCount + "/" + _0x389792.questionCount;
              break;
            case "claiming_rewards":
              _0x3bcfb = "正在领取奖励...";
              break;
            case "completed":
              _0x3bcfb = "✅ 答题完成！";
              break;
            default:
              {
                {
                  _0x3bcfb = "点击按钮开始答题";
                }
              }
          }
          _0x128d47.textContent = _0x3bcfb;
        }
      }
    }
  }
  async function _0x431b29(_0x1a9f27) {
    const _0x404313 = _0x1a9f27.questionList;
    const _0x42b31c = _0x1a9f27.role?.["study"]?.["id"];
    if (!_0x404313 || !Array.isArray(_0x404313)) {
      return;
    }
    if (_0x404313.length === 0) {
      _0x389792.status = "";
      _0x389792.isAnswering = false;
      _0x776ffb();
      _0x30927d("未获取到题目", "warning");
      return;
    }
    if (!_0x42b31c) {
      {
        _0x30927d("未获取到答题ID", "error");
        return;
      }
    }
    _0x389792.isAnswering = true;
    _0x389792.questionCount = _0x404313.length;
    _0x389792.answeredCount = 0;
    _0x389792.studyId = _0x42b31c;
    _0x389792.status = "answering";
    _0x776ffb();
    _0x30927d("开始答题，共" + _0x404313.length + "题", "info");
    try {
      {
        for (let _0x1ae328 = 0; _0x1ae328 < _0x404313.length; _0x1ae328++) {
          {
            const _0x49482d = _0x404313[_0x1ae328];
            const _0x2d2a1e = _0x49482d.question;
            const _0x27af94 = _0x49482d.id;
            let _0x1fa81d = await _0x123a14(_0x2d2a1e);
            if (_0x1fa81d === null) {
              _0x1fa81d = 1;
            }
            try {
              {
                const _0x126dc4 = {
                  id: _0x42b31c,
                  option: [_0x1fa81d],
                  questionId: [_0x27af94]
                };
                await _0x361aec("study_answer", _0x126dc4);
              }
            } catch (_0x64a253) {
              _0x30927d("答题失败: " + _0x64a253.message, "error");
            }
            _0x389792.answeredCount = _0x1ae328 + 1;
            _0x776ffb();
            _0x1ae328 < _0x404313.length - 1 && (await new Promise(_0x207624 => setTimeout(_0x207624, 200)));
          }
        }
        await new Promise(_0x27e502 => setTimeout(_0x27e502, 500));
        await _0xcae6c8();
      }
    } catch (_0x6e610c) {
      {
        _0x389792.status = "";
        _0x389792.isAnswering = false;
        _0x776ffb();
        _0x30927d("答题出错: " + _0x6e610c.message, "error");
      }
    }
  }
  async function _0xcae6c8() {
    _0x389792.status = "claiming_rewards";
    _0x776ffb();
    _0x30927d("正在领取奖励...", "info");
    for (let _0x24dbd9 = 1; _0x24dbd9 <= 10; _0x24dbd9++) {
      {
        try {
          const _0x527f0d = {
            rewardId: _0x24dbd9
          };
          await _0x361aec("study_claimreward", _0x527f0d);
          await new Promise(_0x4094c4 => setTimeout(_0x4094c4, 200));
        } catch (_0x2470ca) {}
      }
    }
    _0x389792.status = "completed";
    _0x389792.isAnswering = false;
    _0x776ffb();
    _0x30927d("答题完成，奖励已领取", "success");
    await new Promise(_0x48472d => setTimeout(_0x48472d, 3000));
    _0x389792.isAnswering = false;
    _0x389792.questionCount = 0;
    _0x389792.answeredCount = 0;
    _0x389792.status = "";
    _0x776ffb();
    await new Promise(_0x509de5 => setTimeout(_0x509de5, 1000));
    try {
      await _0x361aec("role_getroleinfo", {});
    } catch (_0x363bd6) {}
  }
  async function _0x21f6a8() {
    if (_0x389792.isAnswering) {
      _0x30927d("答题进行中，请勿重复操作", "warning");
      return;
    }
    await _0x268503();
    await _0x1639a9();
    _0x389792.status = "starting";
    _0x389792.answeredCount = 0;
    _0x389792.questionCount = 0;
    _0x389792.isAnswering = true;
    _0x776ffb();
    try {
      const _0x1978ba = await _0x361aec("study_startgame", {});
      _0x1978ba && _0x1978ba.questionList ? await _0x431b29(_0x1978ba) : (_0x30927d("未获取到题目，请稍后重试", "error"), setTimeout(() => {
        _0x389792.status === "starting" && (_0x389792.status = "", _0x389792.isAnswering = false, _0x776ffb());
      }, 40000));
    } catch (_0x5db473) {
      {
        _0x389792.status = "";
        _0x389792.isAnswering = false;
        _0x776ffb();
        _0x30927d("开始答题失败: " + _0x5db473.message, "error");
      }
    }
  }
  let _0x467db6 = null;
  let _0x4d4a3c = "level";
  const _0x82034 = {
    level: 100,
    order: 1
  };
  const _0x57d969 = {
    level: 200,
    order: 2
  };
  const _0x575cd5 = {
    level: 300,
    order: 3
  };
  const _0x30dc1d = {
    level: 500,
    order: 4
  };
  const _0x3b8557 = {
    level: 700,
    order: 5
  };
  const _0x429151 = {
    level: 900,
    order: 6
  };
  const _0x29b21c = {
    level: 1100,
    order: 7
  };
  const _0x539e16 = {
    level: 1300,
    order: 8
  };
  const _0x529d3b = {
    level: 1500,
    order: 9
  };
  const _0x32a16a = {
    level: 1800,
    order: 10
  };
  const _0x8a0c4a = {
    level: 2100,
    order: 11
  };
  const _0x424a1c = {
    level: 2400,
    order: 12
  };
  const _0x25caf9 = {
    level: 2800,
    order: 13
  };
  const _0x48f465 = {
    level: 3200,
    order: 14
  };
  const _0x1f15dc = {
    level: 3600,
    order: 15
  };
  const _0x59edd0 = {
    level: 4000,
    order: 16
  };
  const _0xfd2181 = {
    level: 4500,
    order: 17
  };
  const _0x13c5c3 = {
    level: 5000,
    order: 18
  };
  const _0x43d38d = {
    level: 5500,
    order: 19
  };
  const _0x63d707 = [_0x82034, _0x57d969, _0x575cd5, _0x30dc1d, _0x3b8557, _0x429151, _0x29b21c, _0x539e16, _0x529d3b, _0x32a16a, _0x8a0c4a, _0x424a1c, _0x25caf9, _0x48f465, _0x1f15dc, _0x59edd0, _0xfd2181, _0x13c5c3, _0x43d38d];
  let _0x223c87 = [];
  const _0x4b4876 = (_0x44b216, _0x1ddd55, _0x182c46) => {
    for (const _0x533a5b of _0x63d707) {
      {
        if (_0x182c46 !== _0x533a5b.order && _0x44b216 <= _0x533a5b.level && _0x533a5b.level < _0x44b216 + _0x1ddd55) {
          return _0x533a5b.level;
        }
      }
    }
    return false;
  };
  const _0x22b443 = (_0x16adab, _0xb9c07b) => {
    return _0x4b4876(_0x16adab, 1, _0xb9c07b) === _0x16adab;
  };
  const _0x6f4984 = async () => {
    {
      const _0x5ab1cd = document.getElementById("qa-hero-upgrade-input");
      const _0x22904b = document.getElementById("qa-hero-upgrade-select");
      if (!_0x5ab1cd) {
        return;
      }
      _0x5ab1cd.placeholder = "加载中...";
      _0x5ab1cd.disabled = true;
      try {
        if (!window.ROLE?.["heroes"]) {
          _0x1e6f53("window.ROLE", "heroes", undefined);
          _0x5ab1cd.placeholder = "数据未就绪";
          _0x5ab1cd.disabled = false;
          return;
        }
        const _0x512408 = window.ROLE.heroes;
        const _0xa0ef43 = _0x358a2a(_0x512408);
        _0x1e6f53("window.ROLE", "heroes", "共 " + _0xa0ef43.length + " 个武将");
        _0x223c87 = _0xa0ef43.map(_0x311f23 => _0x4af3f0(_0x512408, _0x311f23)).filter(_0x5b05c9 => _0x5b05c9 && _0x5b05c9.level < 6000).sort((_0x3db37f, _0x166e92) => _0x166e92.level - _0x3db37f.level).map(_0xe99a6f => {
          {
            const _0x7e6b0a = _0x78a052(_0xe99a6f.heroId);
            const _0x5efb5a = {
              heroId: _0xe99a6f.heroId,
              name: _0x7e6b0a,
              level: _0xe99a6f.level,
              label: _0x7e6b0a + " (" + _0xe99a6f.level + "/6000)",
              disabled: false
            };
            return _0x5efb5a;
          }
        });
        _0x1e6f53("heroOptionsList", "filtered", "可升级武将 " + _0x223c87.length + " 个");
        if (_0x223c87.length === 0) {
          _0x5ab1cd.placeholder = "暂无可升级武将";
        } else {
          {
            _0x5ab1cd.placeholder = "输入武将名称搜索...";
          }
        }
        _0x5ab1cd.disabled = false;
        _0x5ab1cd.value = "";
        _0x22904b.value = "";
        const _0x5c4b25 = document.getElementById("qa-hero-upgrade-info");
        if (_0x5c4b25) {
          _0x5c4b25.style.display = "none";
        }
      } catch (_0x4c3758) {
        _0x5ab1cd.placeholder = "加载失败";
        _0x5ab1cd.disabled = false;
      }
    }
  };
  const _0x5c25ac = _0x106cf3 => {
    {
      const _0x3590fd = document.getElementById("qa-hero-upgrade-info");
      const _0x34b53c = document.getElementById("qa-hero-upgrade-level");
      const _0x243b15 = document.getElementById("qa-hero-upgrade-attack");
      const _0x2a37be = document.getElementById("qa-hero-upgrade-speed");
      document.getElementById("qa-hero-upgrade-order-btn");
      document.getElementById("qa-hero-upgrade-tip");
      if (!_0x106cf3) {
        {
          _0x3590fd.style.display = "none";
          _0x467db6 = null;
          return;
        }
      }
      _0x467db6 = _0x106cf3;
      if (!window.ROLE?.["heroes"]) {
        _0x30927d("数据未就绪", "warning");
        _0x3590fd.style.display = "none";
        return;
      }
      const _0x355bf3 = _0x4af3f0(window.ROLE.heroes, _0x106cf3);
      if (!_0x355bf3) {
        {
          _0x3590fd.style.display = "none";
          return;
        }
      }
      _0x3590fd.style.display = "block";
      _0x34b53c.textContent = (_0x355bf3.level || 0) + "/6000";
      _0x243b15.textContent = _0x355bf3.attack || 0;
      _0x2a37be.textContent = _0x355bf3.speed || 0;
      _0x34e7ff(_0x355bf3);
    }
  };
  const _0x34e7ff = _0x4538ab => {
    const _0x170f9a = document.getElementById("qa-hero-upgrade-order-btn");
    const _0x3e6e7c = document.getElementById("qa-hero-upgrade-tip");
    if (!_0x170f9a || !_0x3e6e7c) {
      return;
    }
    if (!_0x4538ab) {
      _0x170f9a.disabled = true;
      _0x3e6e7c.textContent = "选择武将后可进行升级/进阶操作";
      return;
    }
    const _0x36a112 = _0x4538ab.level || 0;
    const _0x54294d = _0x4538ab.order || 0;
    const _0x6238e8 = _0x22b443(_0x36a112, _0x54294d);
    _0x170f9a.disabled = !_0x6238e8;
    if (_0x36a112 >= 6000) {
      _0x3e6e7c.textContent = "武将已满级";
      _0x3e6e7c.style.color = "#34c759";
    } else {
      if (_0x6238e8) {
        _0x3e6e7c.textContent = "已达到进阶条件，当前" + _0x36a112 + "级可进阶";
        _0x3e6e7c.style.color = "#ff9500";
      } else {
        {
          const _0x161103 = _0x63d707.find(_0x407a24 => _0x407a24.order > _0x54294d);
          if (_0x161103) {
            {
              _0x3e6e7c.textContent = "下一进阶等级: " + _0x161103.level + "级";
            }
          } else {
            _0x3e6e7c.textContent = "已达到最高进阶";
          }
          _0x3e6e7c.style.color = "";
        }
      }
    }
  };
  const _0x5cc386 = async () => {
    const _0x39eade = _0x467db6;
    const _0x2ec8ae = document.getElementById("qa-hero-upgrade-target");
    const _0xaf9b2c = document.getElementById("qa-hero-upgrade-auto-btn");
    const _0x5aeb5c = parseInt(_0x2ec8ae?.["value"], 10);
    if (!_0x39eade) {
      _0x30927d("请先选择武将", "warning");
      return;
    }
    if (!window.ROLE?.["heroes"]) {
      _0x30927d("数据未就绪", "warning");
      return;
    }
    const _0x5a5adf = _0x4af3f0(window.ROLE.heroes, _0x39eade);
    if (!_0x5a5adf) {
      _0x30927d("未找到武将数据", "warning");
      return;
    }
    const _0x1564a2 = _0x5a5adf.level || 0;
    if (!_0x5aeb5c || _0x5aeb5c <= _0x1564a2) {
      {
        _0x30927d("目标等级必须大于当前等级", "warning");
        return;
      }
    }
    if (_0x5aeb5c > 6000) {
      _0x30927d("目标等级不能超过6000", "warning");
      return;
    }
    _0x1e6f53("window.ROLE.heroes", "[" + _0x39eade + "]", {
      name: _0x78a052(_0x39eade),
      order: _0x5a5adf.order || 0
    });
    if (_0xaf9b2c) {
      _0xaf9b2c.disabled = true;
    }
    try {
      {
        let _0x41472a = _0x1564a2;
        let _0x758178 = _0x5a5adf.order || 0;
        const _0x255b39 = [1, 5, 10, 50];
        while (_0x41472a < _0x5aeb5c) {
          if (_0x22b443(_0x41472a, _0x758178)) {
            const _0x4ecbcc = {
              heroId: _0x39eade
            };
            const _0x3edac2 = await _0x361aec("hero_heroupgradeorder", _0x4ecbcc, "武将升级-进阶");
            _0x348ea9("hero_heroupgradeorder", _0x3edac2, "进阶前: " + _0x41472a + "级");
            if (_0x3edac2?.["errCode"] || _0x3edac2?.["code"] || _0x3edac2?.["error"]) {
              {
                const _0x138f1a = _0x3edac2?.["msg"] || _0x3edac2?.["errMsg"] || _0x3edac2?.["error"] || "进阶失败";
                _0x30927d("进阶失败: " + _0x138f1a, "error");
                throw new Error(_0x138f1a);
              }
            }
            if (_0x3edac2?.["role"]?.["heroes"]) {
              const _0x123044 = _0x3edac2.role.heroes[String(_0x39eade)];
              if (_0x123044) {
                const _0x5c9ab5 = _0x41472a;
                _0x41472a = _0x123044.level || 0;
                _0x758178 = _0x123044.order || 0;
                const _0x341149 = {
                  level: _0x41472a,
                  order: _0x758178,
                  attack: _0x123044.attack,
                  speed: _0x123044.speed
                };
                _0x1e6f53("orderResult.role.heroes", "[" + _0x39eade + "]", _0x341149);
                _0x32bed6(_0x39eade, _0x123044);
                _0x30927d("进阶成功，当前" + _0x41472a + "级", "success");
                if (_0x41472a === _0x5c9ab5 && _0x758178 === (_0x5a5adf.order || 0)) {
                  _0x30927d("进阶未生效，可能资源不足", "warning");
                  throw new Error("进阶未生效");
                }
              }
            } else {
              _0x30927d("进阶请求异常，请检查进阶石是否充足", "warning");
              throw new Error("进阶请求异常");
            }
            await new Promise(_0x4c2064 => setTimeout(_0x4c2064, 500));
            continue;
          }
          const _0x188a56 = _0x5aeb5c - _0x41472a;
          let _0x6000e = 1;
          for (const _0xee1256 of _0x255b39.reverse()) {
            if (_0xee1256 <= _0x188a56) {
              const _0x20a9bb = _0x4b4876(_0x41472a, _0xee1256, _0x758178);
              if (_0x20a9bb === false) {
                {
                  _0x6000e = _0xee1256;
                  break;
                }
              }
            }
          }
          _0x255b39.reverse();
          const _0x3c0aad = {
            heroId: _0x39eade,
            upgradeNum: _0x6000e
          };
          const _0x3e229a = await _0x361aec("hero_heroupgradelevel", _0x3c0aad, "武将升级-升级");
          _0x348ea9("hero_heroupgradelevel", _0x3e229a, "升级 " + _0x6000e + " 级，从 " + _0x41472a + " -> " + (_0x41472a + _0x6000e));
          if (_0x3e229a?.["errCode"] || _0x3e229a?.["code"] || _0x3e229a?.["error"]) {
            {
              const _0x3953bd = _0x3e229a?.["msg"] || _0x3e229a?.["errMsg"] || _0x3e229a?.["error"] || "升级失败";
              _0x30927d("升级失败: " + _0x3953bd, "error");
              throw new Error(_0x3953bd);
            }
          }
          if (_0x3e229a?.["role"]?.["heroes"]) {
            {
              const _0x19cbc2 = _0x3e229a.role.heroes[String(_0x39eade)];
              if (_0x19cbc2) {
                const _0x263e9b = _0x41472a;
                _0x41472a = _0x19cbc2.level || 0;
                _0x758178 = _0x19cbc2.order || 0;
                const _0x126a94 = {
                  level: _0x41472a,
                  order: _0x758178,
                  attack: _0x19cbc2.attack,
                  speed: _0x19cbc2.speed
                };
                _0x1e6f53("result.role.heroes", "[" + _0x39eade + "]", _0x126a94);
                _0x32bed6(_0x39eade, _0x19cbc2);
                if (_0x41472a === _0x263e9b) {
                  _0x30927d("升级未生效，可能金币不足", "warning");
                  throw new Error("升级未生效");
                }
              }
            }
          } else {
            _0x30927d("升级请求异常，请检查金币是否充足", "warning");
            throw new Error("升级请求异常");
          }
          await new Promise(_0x14ae69 => setTimeout(_0x14ae69, 500));
        }
        const _0x97f37 = {
          success: true,
          message: "升级完成，当前" + _0x41472a + "级"
        };
        _0x439352("hero-upgrade", "自动升级", _0x97f37);
        _0x30927d("自动升级完成", "success");
      }
    } catch (_0x52ec38) {
      _0x30927d("升级失败: " + _0x52ec38.message, "error");
    } finally {
      if (_0xaf9b2c) {
        _0xaf9b2c.disabled = false;
      }
    }
  };
  const _0x586363 = async () => {
    const _0x2dcb33 = _0x467db6;
    const _0x3ecf6b = document.getElementById("qa-hero-upgrade-target-speed");
    const _0x5051f7 = document.getElementById("qa-hero-upgrade-auto-btn");
    const _0x22a141 = parseInt(_0x3ecf6b?.["value"], 10);
    if (!_0x2dcb33) {
      _0x30927d("请先选择武将", "warning");
      return;
    }
    if (!window.ROLE?.["heroes"]) {
      _0x30927d("数据未就绪", "warning");
      return;
    }
    const _0x4a4fc8 = _0x4af3f0(window.ROLE.heroes, _0x2dcb33);
    if (!_0x4a4fc8) {
      _0x30927d("未找到武将数据", "warning");
      return;
    }
    const _0x474831 = _0x4a4fc8.speed || 0;
    if (!_0x22a141 || _0x22a141 <= _0x474831) {
      {
        _0x30927d("目标速度必须大于当前速度", "warning");
        return;
      }
    }
    const _0x183a35 = _0x4a4fc8.level || 0;
    if (_0x183a35 >= 6000) {
      _0x30927d("武将已满级", "warning");
      return;
    }
    _0x1e6f53("window.ROLE.heroes", "[" + _0x2dcb33 + "]", {
      name: _0x78a052(_0x2dcb33),
      order: _0x4a4fc8.order || 0
    });
    if (_0x5051f7) {
      _0x5051f7.disabled = true;
    }
    const _0x5a95f3 = 1.3;
    const _0x1b1cb1 = [50, 10, 5, 1];
    let _0x3d05ab = [];
    let _0x517296 = 0;
    let _0x2ee12a = true;
    try {
      {
        let _0xf6560a = _0x474831;
        let _0x38a617 = _0x183a35;
        let _0x3d7ada = _0x4a4fc8.order || 0;
        while (_0xf6560a < _0x22a141 && _0x38a617 < 6000) {
          if (_0x22b443(_0x38a617, _0x3d7ada)) {
            const _0x5bf5c2 = {
              heroId: _0x2dcb33
            };
            const _0x4d95e3 = await _0x361aec("hero_heroupgradeorder", _0x5bf5c2, "武将升级-进阶(速度模式)");
            _0x348ea9("hero_heroupgradeorder", _0x4d95e3, "进阶前: " + _0x38a617 + "级");
            if (_0x4d95e3?.["errCode"] || _0x4d95e3?.["code"] || _0x4d95e3?.["error"]) {
              {
                const _0x3bdf61 = _0x4d95e3?.["msg"] || _0x4d95e3?.["errMsg"] || _0x4d95e3?.["error"] || "进阶失败";
                _0x30927d("进阶失败: " + _0x3bdf61, "error");
                throw new Error(_0x3bdf61);
              }
            }
            if (_0x4d95e3?.["role"]?.["heroes"]) {
              const _0x3c1f60 = _0x4d95e3.role.heroes[String(_0x2dcb33)];
              if (_0x3c1f60) {
                const _0x1c2d0e = _0x38a617;
                const _0x4da0d1 = _0xf6560a;
                const _0x1f4b76 = _0x3c1f60.level || 0;
                const _0xdc96a2 = _0x3c1f60.order || 0;
                const _0x108ad1 = _0x3c1f60.speed || 0;
                const _0x4e5958 = {
                  level: _0x1f4b76,
                  order: _0xdc96a2,
                  speed: _0x108ad1
                };
                _0x1e6f53("orderResult.role.heroes", "[" + _0x2dcb33 + "]", _0x4e5958);
                if (_0x1f4b76 <= 0 || _0x1f4b76 < _0x1c2d0e) {
                  _0x3c1f60.level = _0x1c2d0e;
                } else {
                  {
                    _0x38a617 = _0x1f4b76;
                  }
                }
                _0x108ad1 <= 0 || _0x108ad1 < _0x4da0d1 ? _0x3c1f60.speed = _0x4da0d1 : (_0xf6560a = _0x108ad1, _0xf6560a > _0x4da0d1 && _0x3d05ab.push({
                  levels: 0,
                  gain: _0xf6560a - _0x4da0d1,
                  isOrder: true
                }));
                _0x3d7ada = _0xdc96a2 > 0 ? _0xdc96a2 : _0x3d7ada;
                _0x32bed6(_0x2dcb33, _0x3c1f60);
                _0x30927d("进阶成功，速度 " + _0x4da0d1 + " → " + _0x3c1f60.speed, "success");
              }
            } else {
              {
                _0x30927d("进阶请求异常", "warning");
                throw new Error("进阶请求异常");
              }
            }
            await new Promise(_0x79ff39 => setTimeout(_0x79ff39, 500));
            continue;
          }
          const _0x12d906 = _0x22a141 - _0xf6560a;
          let _0x1f70e9 = 1;
          if (_0x2ee12a) {
            _0x1f70e9 = 1;
          } else {
            if (_0x517296 > 0) {
              for (const _0x2274a6 of _0x1b1cb1) {
                const _0xa21e98 = _0x2274a6 * _0x517296 * _0x5a95f3;
                const _0x133a39 = _0x4b4876(_0x38a617, _0x2274a6, _0x3d7ada) !== false;
                if (_0xa21e98 <= _0x12d906 && !_0x133a39) {
                  _0x1f70e9 = _0x2274a6;
                  break;
                }
              }
            } else {
              for (const _0x42ac7e of [10, 5, 1]) {
                {
                  const _0x1a270e = _0x4b4876(_0x38a617, _0x42ac7e, _0x3d7ada) !== false;
                  if (!_0x1a270e) {
                    if (_0x42ac7e === 10 && _0x12d906 > 500) {
                      {
                        _0x1f70e9 = 10;
                        break;
                      }
                    }
                    if (_0x42ac7e === 5 && _0x12d906 > 100) {
                      _0x1f70e9 = 5;
                      break;
                    }
                    if (_0x42ac7e === 1) {
                      _0x1f70e9 = 1;
                      break;
                    }
                  }
                }
              }
            }
          }
          const _0x25c436 = _0xf6560a;
          const _0x4a0571 = {
            heroId: _0x2dcb33,
            upgradeNum: _0x1f70e9
          };
          const _0x13b42c = await _0x361aec("hero_heroupgradelevel", _0x4a0571, "武将升级-升级(速度模式)");
          _0x348ea9("hero_heroupgradelevel", _0x13b42c, "升级 " + _0x1f70e9 + " 级，速度 " + _0xf6560a);
          if (_0x13b42c?.["errCode"] || _0x13b42c?.["code"] || _0x13b42c?.["error"]) {
            const _0x579df9 = _0x13b42c?.["msg"] || _0x13b42c?.["errMsg"] || _0x13b42c?.["error"] || "升级失败";
            _0x30927d("升级失败: " + _0x579df9, "error");
            throw new Error(_0x579df9);
          }
          if (_0x13b42c?.["role"]?.["heroes"]) {
            const _0x303422 = _0x13b42c.role.heroes[String(_0x2dcb33)];
            if (_0x303422) {
              _0x38a617 = _0x303422.level || 0;
              _0x3d7ada = _0x303422.order || 0;
              const _0x1110ff = _0x303422.speed || 0;
              const _0x237b29 = {
                level: _0x38a617,
                order: _0x3d7ada,
                speed: _0x1110ff
              };
              _0x1e6f53("result.role.heroes", "[" + _0x2dcb33 + "]", _0x237b29);
              _0x2ee12a = false;
              if (_0x1110ff <= 0 || _0x1110ff < _0x25c436) {
                _0x303422.speed = _0x25c436;
              } else {
                const _0x448637 = _0x1110ff - _0x25c436;
                _0xf6560a = _0x1110ff;
                if (_0x448637 > 0 && _0x1f70e9 > 0) {
                  {
                    const _0xfa38a7 = {
                      levels: _0x1f70e9,
                      gain: _0x448637
                    };
                    _0x3d05ab.push(_0xfa38a7);
                    const _0x10faeb = _0x3d05ab.filter(_0x32b831 => !_0x32b831.isOrder && _0x32b831.levels > 0);
                    _0x10faeb.length > 0 && (_0x517296 = _0x10faeb.reduce((_0x38d4df, _0x106a1d) => _0x38d4df + _0x106a1d.gain / _0x106a1d.levels, 0) / _0x10faeb.length);
                  }
                }
              }
              _0x32bed6(_0x2dcb33, _0x303422);
            }
          } else {
            _0x30927d("升级请求异常", "warning");
            throw new Error("升级请求异常");
          }
          await new Promise(_0x48fa21 => setTimeout(_0x48fa21, 500));
        }
        const _0x3b27da = _0xf6560a >= _0x22a141 ? "达到目标速度 " + _0xf6560a + "，等级 " + _0x38a617 : "已满级 " + _0x38a617 + "，速度 " + _0xf6560a;
        const _0x267008 = {
          success: true,
          message: _0x3b27da
        };
        _0x439352("hero-upgrade", "目标速度升级", _0x267008);
        _0x30927d(_0x3b27da, "success");
      }
    } catch (_0xb8ef3f) {
      _0x30927d("升级失败: " + _0xb8ef3f.message, "error");
    } finally {
      if (_0x5051f7) {
        _0x5051f7.disabled = false;
      }
    }
  };
  const _0x46ed5e = _0x13ccb0 => {
    _0x4d4a3c = _0x13ccb0;
    const _0x56f517 = document.getElementById("qa-hero-upgrade-level-row");
    const _0x54d1a3 = document.getElementById("qa-hero-upgrade-speed-row");
    const _0x332dd9 = document.getElementById("qa-hero-upgrade-mode-level");
    const _0x189fd1 = document.getElementById("qa-hero-upgrade-mode-speed");
    const _0x187ec3 = _0x13ccb0 === "level";
    if (_0x56f517) {
      _0x56f517.style.display = _0x187ec3 ? "" : "none";
    }
    if (_0x54d1a3) {
      _0x54d1a3.style.display = _0x187ec3 ? "none" : "";
    }
    if (_0x332dd9) {
      _0x332dd9.classList.toggle("active", _0x187ec3);
    }
    if (_0x189fd1) {
      _0x189fd1.classList.toggle("active", !_0x187ec3);
    }
  };
  const _0x168124 = async () => {
    if (_0x4d4a3c === "speed") {
      {
        await _0x586363();
      }
    } else {
      await _0x5cc386();
    }
  };
  const _0x32bed6 = (_0x36bf94, _0xf4f854) => {
    const _0xf7235b = document.getElementById("qa-hero-upgrade-level");
    const _0x1028f5 = document.getElementById("qa-hero-upgrade-attack");
    const _0x4b63eb = document.getElementById("qa-hero-upgrade-speed");
    if (_0xf7235b) {
      _0xf7235b.textContent = (_0xf4f854.level || 0) + "/6000";
    }
    if (_0x1028f5) {
      _0x1028f5.textContent = _0xf4f854.attack || 0;
    }
    if (_0x4b63eb) {
      _0x4b63eb.textContent = _0xf4f854.speed || 0;
    }
    _0x2c9ca6(_0x36bf94, _0xf4f854.level || 0);
    _0x34e7ff(_0xf4f854);
  };
  const _0x3a33f3 = async () => {
    {
      const _0x217150 = _0x467db6;
      const _0x1e34c1 = document.getElementById("qa-hero-upgrade-order-btn");
      if (!_0x217150) {
        {
          return;
        }
      }
      if (!window.ROLE?.["heroes"]) {
        _0x30927d("数据未就绪", "warning");
        return;
      }
      const _0x4ecb69 = _0x4af3f0(window.ROLE.heroes, _0x217150);
      if (!_0x4ecb69) {
        {
          return;
        }
      }
      const _0x278814 = _0x4ecb69.level || 0;
      const _0x2b7046 = _0x4ecb69.order || 0;
      if (!_0x22b443(_0x278814, _0x2b7046)) {
        return;
      }
      _0x1e6f53("window.ROLE.heroes", "[" + _0x217150 + "]", {
        name: _0x78a052(_0x217150)
      });
      if (_0x1e34c1) {
        _0x1e34c1.disabled = true;
      }
      try {
        {
          const _0x37fe65 = {
            heroId: _0x217150
          };
          const _0xa3e472 = await _0x361aec("hero_heroupgradeorder", _0x37fe65, "武将升级-手动进阶");
          _0x348ea9("hero_heroupgradeorder", _0xa3e472, "进阶前: " + _0x278814 + "级");
          _0x439352("hero-upgrade", "武将进阶", _0xa3e472);
          if (_0xa3e472?.["role"]?.["heroes"]) {
            {
              const _0x5dcfb0 = _0xa3e472.role.heroes[String(_0x217150)];
              if (_0x5dcfb0) {
                const _0x3dcd16 = {
                  level: _0x5dcfb0.level,
                  order: _0x5dcfb0.order,
                  attack: _0x5dcfb0.attack,
                  speed: _0x5dcfb0.speed
                };
                _0x1e6f53("result.role.heroes", "[" + _0x217150 + "]", _0x3dcd16);
                _0x32bed6(_0x217150, _0x5dcfb0);
              }
            }
          }
        }
      } catch (_0x28648c) {} finally {
        const _0x132845 = _0x4af3f0(window.ROLE?.["heroes"], _0x217150);
        _0x34e7ff(_0x132845);
      }
    }
  };
  const _0x18afbd = () => {
    const _0x5258d5 = document.getElementById("qa-hero-upgrade-input");
    const _0x4cd20e = document.getElementById("qa-hero-upgrade-select");
    const _0x4a3b33 = document.getElementById("qa-hero-upgrade-dropdown");
    if (_0x5258d5 && _0x4a3b33) {
      {
        _0x5258d5.addEventListener("focus", () => {
          _0x5232da(_0x5258d5.value);
        });
        _0x5258d5.addEventListener("input", _0x4b1466 => {
          _0x5232da(_0x4b1466.target.value);
        });
        _0x4a3b33.addEventListener("click", _0x4abe5a => {
          const _0x256572 = _0x4abe5a.target.closest(".qa-autocomplete-item");
          if (_0x256572 && !_0x256572.classList.contains("disabled")) {
            {
              const _0x222a35 = parseInt(_0x256572.dataset.heroId, 10);
              const _0x5f04c8 = _0x256572.dataset.label;
              _0x5258d5.value = _0x5f04c8;
              _0x4cd20e.value = _0x222a35;
              _0x1337c0();
              _0x5c25ac(_0x222a35);
            }
          }
        });
        document.addEventListener("click", _0x463f85 => {
          const _0x226681 = document.getElementById("qa-hero-upgrade-autocomplete");
          _0x226681 && !_0x226681.contains(_0x463f85.target) && _0x1337c0();
        });
        _0x5258d5.addEventListener("keydown", _0x54ce68 => {
          {
            const _0x3ff676 = _0x4a3b33.querySelectorAll(".qa-autocomplete-item:not(.disabled)");
            const _0x27fc1e = _0x4a3b33.querySelector(".qa-autocomplete-item.active");
            let _0x389652 = -1;
            _0x27fc1e && (_0x389652 = Array.from(_0x3ff676).indexOf(_0x27fc1e));
            if (_0x54ce68.key === "ArrowDown") {
              {
                _0x54ce68.preventDefault();
                if (_0x4a3b33.style.display === "none") {
                  _0x5232da(_0x5258d5.value);
                } else {
                  {
                    const _0x453c4a = _0x389652 < _0x3ff676.length - 1 ? _0x389652 + 1 : 0;
                    _0x17a937(_0x3ff676, _0x453c4a);
                  }
                }
              }
            } else {
              if (_0x54ce68.key === "ArrowUp") {
                _0x54ce68.preventDefault();
                const _0x58af3e = _0x389652 > 0 ? _0x389652 - 1 : _0x3ff676.length - 1;
                _0x17a937(_0x3ff676, _0x58af3e);
              } else {
                if (_0x54ce68.key === "Enter") {
                  _0x54ce68.preventDefault();
                  _0x27fc1e && _0x27fc1e.click();
                } else {
                  _0x54ce68.key === "Escape" && _0x1337c0();
                }
              }
            }
          }
        });
      }
    }
  };
  const _0x5232da = (_0x5c18cb = "") => {
    const _0x433522 = document.getElementById("qa-hero-upgrade-dropdown");
    const _0x1d737b = document.getElementById("qa-hero-upgrade-input");
    if (!_0x433522 || !_0x1d737b) {
      return;
    }
    const _0x5b34e1 = _0x5c18cb.toLowerCase().trim();
    const _0x17bdae = _0x223c87.filter(_0x18bfb2 => {
      if (!_0x5b34e1) {
        return true;
      }
      return _0x18bfb2.name.toLowerCase().includes(_0x5b34e1) || _0x18bfb2.label.toLowerCase().includes(_0x5b34e1);
    });
    if (_0x17bdae.length === 0) {
      _0x433522.innerHTML = "<div class=\"qa-autocomplete-empty\">无匹配武将</div>";
    } else {
      {
        _0x433522.innerHTML = _0x17bdae.map((_0x27a351, _0x1c6225) => "\n      <div class=\"qa-autocomplete-item " + (_0x27a351.disabled ? "disabled" : "") + "\"\n           data-hero-id=\"" + _0x27a351.heroId + "\"\n           data-label=\"" + _0x27a351.label + "\">\n        <span class=\"qa-autocomplete-name\">" + _0x43bcd9(_0x27a351.name, _0x5b34e1) + "</span>\n        <span class=\"qa-autocomplete-level\">Lv." + _0x27a351.level + "</span>\n      </div>\n    ").join("");
      }
    }
    const _0x4ee922 = _0x1d737b.getBoundingClientRect();
    _0x433522.style.left = _0x4ee922.left + "px";
    _0x433522.style.top = _0x4ee922.bottom + "px";
    _0x433522.style.width = _0x4ee922.width + "px";
    _0x433522.style.display = "block";
  };
  const _0x1337c0 = () => {
    {
      const _0x452e2e = document.getElementById("qa-hero-upgrade-dropdown");
      if (_0x452e2e) {
        {
          _0x452e2e.style.display = "none";
        }
      }
    }
  };
  const _0x2c9ca6 = (_0x2bb2a1, _0x62047f) => {
    {
      const _0x1a83fc = document.getElementById("qa-hero-upgrade-input");
      const _0x57233f = _0x78a052(_0x2bb2a1);
      const _0x16f64a = _0x57233f + " (" + _0x62047f + "/6000)";
      const _0x1aad33 = _0x223c87.findIndex(_0x5d98e4 => _0x5d98e4.heroId === _0x2bb2a1);
      if (_0x1aad33 !== -1) {
        if (_0x62047f >= 6000) {
          _0x223c87.splice(_0x1aad33, 1);
          _0x1a83fc.value = "";
          document.getElementById("qa-hero-upgrade-select").value = "";
          const _0x3ee857 = document.getElementById("qa-hero-upgrade-info");
          if (_0x3ee857) {
            _0x3ee857.style.display = "none";
          }
          _0x467db6 = null;
        } else {
          {
            _0x223c87[_0x1aad33].level = _0x62047f;
            _0x223c87[_0x1aad33].label = _0x16f64a;
            _0x1a83fc.value = _0x16f64a;
          }
        }
      }
    }
  };
  const _0x17a937 = (_0x592f01, _0x17fdec) => {
    {
      _0x592f01.forEach((_0x31d185, _0x2fc29b) => {
        {
          if (_0x2fc29b === _0x17fdec) {
            _0x31d185.classList.add("active");
            const _0x2f545e = {
              block: "nearest"
            };
            _0x31d185.scrollIntoView(_0x2f545e);
          } else {
            {
              _0x31d185.classList.remove("active");
            }
          }
        }
      });
    }
  };
  const _0x43bcd9 = (_0x3b6754, _0x160044) => {
    if (!_0x160044) {
      return _0x3b6754;
    }
    const _0x2e5b83 = new RegExp("(" + _0x160044.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return _0x3b6754.replace(_0x2e5b83, "<mark>$1</mark>");
  };
  const _0x39f4c4 = _0x5f3549 => {
    if (!_0x5f3549 || !_0x5f3549.startsWith("qa_")) {
      return null;
    }
    const _0x1ddde5 = _0x5f3549.slice(3).split("_");
    if (_0x1ddde5.length < 2) {
      return null;
    }
    const _0x2d242b = _0x1ddde5[0];
    const _0x3ec540 = _0x1ddde5.slice(1).join("_");
    return _0x1f3b49 + "/" + _0x2d242b + "/" + _0x3ec540 + ".png";
  };
  const _0xca362d = _0x3bb0dd => {
    {
      try {
        if (typeof GM_getResourceURL === "function") {
          const _0x4eb03c = GM_getResourceURL(_0x3bb0dd);
          if (_0x4eb03c) {
            return _0x4eb03c;
          }
        }
      } catch {}
      return _0x39f4c4(_0x3bb0dd) || "";
    }
  };
  const _0xd3734a = (_0x5a062b = document) => {
    if (!_0x5a062b || typeof _0x5a062b.querySelectorAll !== "function") {
      return;
    }
    _0x5a062b.querySelectorAll("img[data-res]").forEach(_0x513275 => {
      {
        const _0x4479b9 = _0x513275.getAttribute("data-res");
        if (!_0x4479b9) {
          return;
        }
        if (_0x513275.getAttribute("src")) {
          return;
        }
        const _0x4be858 = _0xca362d(_0x4479b9);
        if (_0x4be858) {
          _0x513275.src = _0x4be858;
        }
      }
    });
  };
  const _0x2f62ed = {
    name: "龙鱼·幽影"
  };
  const _0x543d1b = {
    name: "龙鱼·青龙"
  };
  const _0x31336e = {
    name: "龙鱼·火镰"
  };
  const _0x37ae00 = {
    name: "龙鱼·无双"
  };
  const _0x106d79 = {
    name: "龙鱼·永霜"
  };
  const _0x25833e = {
    name: "龙鱼·八卦"
  };
  const _0x2ead2a = {
    name: "龙鱼·紫电"
  };
  const _0x1fed6c = {
    name: "龙鱼·青囊"
  };
  const _0x3ce7ac = {
    name: "龙鱼·洛神"
  };
  const _0x248d26 = {
    name: "龙鱼·机神"
  };
  const _0x47190c = {
    name: "龙鱼·霸王"
  };
  const _0x424ec1 = {
    name: "龙鱼·蚀骨"
  };
  const _0x440b63 = {
    name: "龙鱼·坚盾"
  };
  const _0x16f241 = {
    name: "龙鱼·麒麟"
  };
  const _0x1ae7d3 = {
    name: "龙鱼·古锭"
  };
  const _0x4118b6 = {
    name: "龙鱼·义从"
  };
  const _0x440d23 = {
    name: "龙鱼·恶来"
  };
  const _0xe43519 = {
    name: "龙鱼·龙胆"
  };
  const _0x5c17e4 = {
    name: "龙鱼·国色"
  };
  const _0xa2d6ad = {
    name: "龙鱼·天公"
  };
  const _0x1eaf2b = {
    name: "月尾"
  };
  const _0x4a81bd = {
    name: "焰神"
  };
  const _0x47a41d = {
    name: "红蝶"
  };
  const _0x425734 = {
    name: "赤羽"
  };
  const _0x59ba61 = {
    name: "千年笛"
  };
  const _0x43066e = {
    name: "四带胡椒"
  };
  const _0x4eaeb3 = {
    name: "鬼狮子鱼"
  };
  const _0x4eef91 = {
    name: "黑斑雀鲷"
  };
  const _0x34c82f = {
    name: "诅咒花椒"
  };
  const _0x21e294 = {
    name: "九斑刺豚"
  };
  const _0x1fe9a5 = {
    name: "魔鬼刺镰"
  };
  const _0x549857 = {
    name: "黄背刺鲷"
  };
  const _0x31bfde = {
    name: "黑鳍刺鲷"
  };
  const _0x349e43 = {
    name: "长棘刺鲷"
  };
  const _0x49f315 = {
    name: "粒突箱鲀"
  };
  const _0x2834d5 = {
    name: "大跳跳鱼"
  };
  const _0xce9975 = {
    name: "蓝心胖头"
  };
  const _0x1c3355 = {
    name: "钱胡椒"
  };
  const _0x30f43b = {
    name: "狮子鱼"
  };
  const _0x1007cd = {
    name: "塔雀鲷"
  };
  const _0x815ec8 = {
    name: "紫斑鳅"
  };
  const _0x1b59f2 = {
    name: "密刺豚"
  };
  const _0x443919 = {
    name: "长鳍镰"
  };
  const _0x4ffacd = {
    name: "胖头鱼"
  };
  const _0x208c15 = {
    name: "青刺鲷"
  };
  const _0x506d65 = {
    name: "跳跳鱼"
  };
  const _0x426a3d = {
    name: "箱豚鱼"
  };
  const _0x3f6bfb = {
    name: "黄金锦鲤"
  };
  const _0x270c89 = {
    name: "利刃"
  };
  const _0x147e20 = {
    name: "惊涛"
  };
  const _0x384b7f = {
    name: "骇浪"
  };
  const _0x57d996 = {
    name: "星驰"
  };
  const _0x38279f = {
    name: "公同心"
  };
  const _0x383f41 = {
    name: "母同心"
  };
  const _0x284f05 = {
    name: "公协力"
  };
  const _0x2acc78 = {
    name: "母协力"
  };
  const _0x414515 = {
    name: "月光"
  };
  const _0x2d2d81 = {
    name: "公铁血"
  };
  const _0x459cec = {
    name: "母铁血"
  };
  const _0x409561 = {
    name: "公丹心"
  };
  const _0x828b54 = {
    name: "母丹心"
  };
  const _0x4c7a1a = {
    name: "巨灵"
  };
  const _0x4d72c8 = {
    name: "公剑胆"
  };
  const _0x12da7c = {
    name: "母剑胆"
  };
  const _0x445de3 = {
    name: "璇玑"
  };
  const _0x357939 = {
    "1201": _0x2f62ed,
    "1202": _0x543d1b,
    "1203": _0x31336e,
    "1204": _0x37ae00,
    "1205": _0x106d79,
    "1206": _0x25833e,
    "1207": _0x2ead2a,
    "1208": _0x1fed6c,
    "1209": _0x3ce7ac,
    "1210": _0x248d26,
    "1211": _0x47190c,
    "1212": _0x424ec1,
    "1213": _0x440b63,
    "1214": _0x16f241,
    "1215": _0x1ae7d3,
    "1216": _0x4118b6,
    "1217": _0x440d23,
    "1218": _0xe43519,
    "1219": _0x5c17e4,
    "1220": _0xa2d6ad,
    "1301": _0x1eaf2b,
    "1302": _0x4a81bd,
    "1303": _0x47a41d,
    "1304": _0x425734,
    "1305": _0x59ba61,
    "1401": _0x43066e,
    "1402": _0x4eaeb3,
    "1403": _0x4eef91,
    "1404": _0x34c82f,
    "1405": _0x21e294,
    "1406": _0x1fe9a5,
    "1407": _0x549857,
    "1408": _0x31bfde,
    "1409": _0x349e43,
    "1410": _0x49f315,
    "1411": _0x2834d5,
    "1412": _0xce9975,
    "1501": _0x1c3355,
    "1502": _0x30f43b,
    "1503": _0x1007cd,
    "1504": _0x815ec8,
    "1505": _0x1b59f2,
    "1506": _0x443919,
    "1601": _0x4ffacd,
    "1602": _0x208c15,
    "1603": _0x506d65,
    "1604": _0x426a3d,
    "1101": _0x3f6bfb,
    "1102": _0x270c89,
    "1103": _0x147e20,
    "1104": _0x384b7f,
    "1105": _0x57d996,
    "1106": _0x38279f,
    "1107": _0x383f41,
    "1108": _0x284f05,
    "1109": _0x2acc78,
    "1110": _0x414515,
    "1111": _0x2d2d81,
    "1112": _0x459cec,
    "1113": _0x409561,
    "1114": _0x828b54,
    "1115": _0x4c7a1a,
    "1116": _0x4d72c8,
    "1117": _0x12da7c,
    "1118": _0x445de3
  };
  const _0x2b811a = {
    name: "穿云箭"
  };
  const _0xbc2c02 = {
    name: "皮鞋手机"
  };
  const _0x3dea89 = {
    name: "懦弱百合"
  };
  const _0x1c739d = {
    name: "正义喇叭"
  };
  const _0x28136f = {
    name: "祖传大大饼"
  };
  const _0x15f387 = {
    name: "冰镇啤酒"
  };
  const _0x35b08d = {
    name: "导演话筒"
  };
  const _0x293a45 = {
    name: "驱蚊花露水"
  };
  const _0x1e5046 = {
    name: "止痒花露水"
  };
  const _0x4713de = {
    "1": _0x2b811a,
    "2": _0xbc2c02,
    "3": _0x3dea89,
    "4": _0x1c739d,
    "5": _0x28136f,
    "6": _0x15f387,
    "7": _0x35b08d,
    "8": _0x293a45,
    "9": _0x1e5046
  };
  const _0x161511 = {
    name: "碎盾"
  };
  const _0x191d35 = {
    name: "冥想"
  };
  const _0x508995 = {
    name: "定心"
  };
  const _0x52c944 = {
    name: "冰清"
  };
  const _0x5d16b2 = {
    name: "攻心"
  };
  const _0x12ec45 = {
    name: "强权"
  };
  const _0x48ed61 = {
    name: "盾击"
  };
  const _0x4c148a = {
    name: "合力"
  };
  const _0x156307 = {
    name: "仁心"
  };
  const _0x441008 = {
    name: "游龙"
  };
  const _0x1732ea = {
    name: "回元"
  };
  const _0x3b9f8e = {
    "1033007": _0x161511,
    "1033008": _0x191d35,
    "1033009": _0x508995,
    "1033010": _0x52c944,
    "1033011": _0x5d16b2,
    "1033012": _0x12ec45,
    "1033013": _0x48ed61,
    "1033014": _0x4c148a,
    "1033015": _0x156307,
    "1033016": _0x441008,
    "1033017": _0x1732ea
  };
  const _0x226b03 = {
    name: "白色",
    value: "#ffffff"
  };
  const _0x1e27ed = {
    name: "绿色",
    value: "#22c55e"
  };
  const _0x58bb5e = {
    name: "蓝色",
    value: "#3b82f6"
  };
  const _0x1f3ab6 = {
    name: "紫色",
    value: "#a855f7"
  };
  const _0x193762 = {
    name: "橙色",
    value: "#f97316"
  };
  const _0x476f0f = {
    name: "红色",
    value: "#ef4444"
  };
  const _0x1522d4 = {
    "1": _0x226b03,
    "2": _0x1e27ed,
    "3": _0x58bb5e,
    "4": _0x1f3ab6,
    "5": _0x193762,
    "6": _0x476f0f
  };
  const _0x316f93 = _0x24a510 => {
    {
      if (!_0x24a510) {
        return null;
      }
      const _0x277dbb = String(_0x24a510).substring(0, 4);
      return _0x357939[_0x277dbb]?.["name"] || null;
    }
  };
  const _0xd9ec2c = _0x37c3f8 => {
    if (!_0x37c3f8 || !Array.isArray(_0x37c3f8)) {
      return null;
    }
    for (const _0x2cf762 of _0x37c3f8) {
      if (_0x3b9f8e[_0x2cf762.skillId]) {
        {
          return _0x3b9f8e[_0x2cf762.skillId].name;
        }
      }
    }
    return null;
  };
  const _0x22c5a4 = _0xde4fc0 => {
    {
      const _0x48daf7 = String(_0xde4fc0 || "").trim();
      if (!_0x48daf7) {
        return "?";
      }
      return _0x48daf7.slice(0, 2);
    }
  };
  const _0x25000a = _0x27943d => {
    const _0x77d346 = _0x2f3199?.[_0x27943d];
    if (!_0x77d346) {
      return "";
    }
    if (_0x77d346.avatar) {
      const _0x201062 = String(_0x77d346.avatar).split("/").filter(Boolean);
      const _0x4e452c = _0x201062.length >= 2 ? _0x201062[0] : "team";
      const _0x35b33d = _0x201062[_0x201062.length - 1] || "";
      const _0x2853e5 = _0x35b33d.replace(/\.[^.]+$/, "");
      if (_0x2853e5) {
        return ("qa_" + _0x4e452c + "_" + _0x2853e5).replace(/[^a-zA-Z0-9_]/g, "_");
      }
    }
    return "qa_team_hero_" + _0x27943d;
  };
  const _0x2bb425 = (_0x1041fe = document) => {
    if (!_0x1041fe || typeof _0x1041fe.querySelectorAll !== "function") {
      return;
    }
    _0x1041fe.querySelectorAll(".qa-avatar-img").forEach(_0x42e120 => {
      {
        if (_0x42e120.dataset.qaAvatarBound === "1") {
          return;
        }
        _0x42e120.dataset.qaAvatarBound = "1";
        const _0x4a0b1a = _0x42e120.closest(".qa-avatar");
        const _0x263c74 = _0x4a0b1a ? _0x4a0b1a.querySelector(".qa-avatar-fallback") : null;
        const _0x5c2645 = () => {
          _0x42e120.style.display = "block";
          _0x42e120.style.opacity = "1";
          if (_0x263c74) {
            _0x263c74.style.display = "none";
          }
        };
        const _0x2f4739 = () => {
          _0x42e120.style.display = "none";
          if (_0x263c74) {
            _0x263c74.style.display = "flex";
          }
        };
        _0x42e120.style.opacity = "0";
        if (_0x263c74) {
          _0x263c74.style.display = "flex";
        }
        const _0x2a8320 = {
          once: true
        };
        _0x42e120.addEventListener("load", () => _0x5c2645(), _0x2a8320);
        const _0x221145 = {
          once: true
        };
        _0x42e120.addEventListener("error", () => _0x2f4739(), _0x221145);
        if (_0x42e120.complete) {
          if (_0x42e120.naturalWidth > 0) {
            _0x5c2645();
          } else {
            _0x2f4739();
          }
        }
      }
    });
  };
  let _0x934dd = null;
  const _0x2efcc3 = () => {
    _0x934dd && (_0x934dd.remove(), _0x934dd = null);
  };
  const _0x32864c = _0x31a1f3 => {
    {
      const _0x12012a = {
        "1": "武器",
        "2": "衣服",
        "3": "头盔",
        "4": "坐骑"
      };
      const _0x1c748f = Object.entries(_0x31a1f3 || {});
      if (!_0x1c748f.length) {
        return "";
      }
      const _0x5dcda9 = _0x1c748f.map(([_0x169c3f, _0x5f0d77]) => {
        {
          const _0x27db57 = _0x12012a[_0x169c3f] || "部位" + _0x169c3f;
          const _0x324312 = Object.values(_0x5f0d77?.["quenches"] || {});
          if (!_0x324312.length) {
            return "<div class=\"qa-quench-equip-item\">\n        <span class=\"equip-label\">" + _0x27db57 + ":</span>\n        <span style=\"color:#9ca3af\">--</span>\n      </div>";
          }
          const _0x1a65f4 = _0x324312.map(_0x54750e => {
            const _0x3fe7d0 = _0x54750e?.["colorId"] === 6;
            return "<div class=\"qa-quench-diamond" + (_0x3fe7d0 ? " red" : "") + "\" style=\"display:inline-block;width:12px;height:12px;transform:rotate(45deg);border:1px solid " + (_0x3fe7d0 ? "#ff3b30" : "#a7a7a7") + ";background:" + (_0x3fe7d0 ? "#ff3b30" : "#fff") + ";\"></div>";
          }).join("");
          return "<div class=\"qa-quench-equip-item\">\n      <span class=\"equip-label\">" + _0x27db57 + ":</span>\n      <div class=\"qa-quench-diamonds\" style=\"display:inline-flex;gap:4px;align-items:center;\">" + _0x1a65f4 + "</div>\n    </div>";
        }
      }).join("");
      return "<div class=\"qa-quench-diamond-row\">" + _0x5dcda9 + "</div>";
    }
  };
  const _0x1d33f9 = _0x16c3d8 => {
    {
      if (!_0x16c3d8) {
        return;
      }
      _0x2efcc3();
      const _0x216c20 = document.createElement("div");
      _0x216c20.className = "qa-auth-overlay qa-hero-overlay";
      _0x934dd = _0x216c20;
      const _0x40dfe7 = _0x16c3d8.hasHolyBeast ? "已开四圣" : "未开四圣";
      const _0x9fd0d9 = _0x16c3d8.hasHolyBeast ? "on" : "off";
      const _0x5206c8 = () => {
        {
          if (!_0x16c3d8.fishSlots || _0x16c3d8.fishSlots.length === 0) {
            return "<span style=\"color:#000;\">无淬炼</span>";
          }
          return _0x16c3d8.fishSlots.map(_0x4fa1db => {
            return "<div style=\"display:inline-block;width:12px;height:12px;border-radius:50%;background:" + _0x4fa1db.colorValue + ";border:1px solid rgba(0,0,0,0.2);margin-right:4px;\"></div>";
          }).join("");
        }
      };
      _0x216c20.innerHTML = "\n    <div class=\"qa-hero-modal\" role=\"dialog\" aria-modal=\"true\">\n      <div class=\"qa-hero-modal-head\">\n        <div class=\"qa-hero-modal-title\">武将详情</div>\n        <button class=\"qa-hero-modal-close\" type=\"button\" data-action=\"close\">关闭</button>\n      </div>\n\n      <div class=\"qa-hero-summary\">\n        <div class=\"qa-avatar qa-avatar-32\" title=\"" + _0x16c3d8.heroName + "\">\n          <img class=\"qa-avatar-img\" " + (_0x16c3d8.heroAvatarRes ? "data-res=\"" + _0x16c3d8.heroAvatarRes + "\"" : "") + " alt=\"" + _0x16c3d8.heroName + "\" loading=\"lazy\">\n          <div class=\"qa-avatar-fallback\">" + _0x22c5a4(_0x16c3d8.heroName) + "</div>\n        </div>\n        <div class=\"qa-hero-summary-meta\">\n          <div class=\"qa-hero-summary-name\">" + _0x16c3d8.heroName + "</div>\n          <div class=\"qa-hero-summary-sub\">\n            <span>Lv." + (_0x16c3d8.level || 1) + "</span>\n            <span>⭐" + (_0x16c3d8.star || 0) + "</span>\n            <span>战力:" + _0x16c3d8.power + "</span>\n          </div>\n          <div class=\"qa-hero-summary-sub\">\n            <span class=\"qa-pvp-hero-red\">红" + _0x16c3d8.red + "</span>\n            <span class=\"qa-pvp-hero-hole\">孔" + _0x16c3d8.hole + "</span>\n            <span class=\"qa-pvp-hero-holy " + _0x9fd0d9 + "\">" + _0x40dfe7 + "</span>\n          </div>\n        </div>\n      </div>\n\n      " + _0x32864c(_0x16c3d8.equipment) + "\n\n      <div class=\"qa-hero-fish-section\" style=\"padding:12px 14px;border-bottom:1px solid var(--qa-border,#e5e7eb);\">\n        <div class=\"qa-hero-fish-row\" style=\"display:flex;align-items:center;gap:12px;flex-wrap:wrap;\">\n          <div style=\"display:flex;align-items:center;gap:6px;\">\n            <span style=\"font-size:12px;color:#000;\">鱼灵:</span>\n            <span style=\"font-size:13px;font-weight:600;color:#000;\">" + (_0x16c3d8.fishName || "无") + "</span>\n          </div>\n          <div style=\"display:flex;align-items:center;gap:6px;\">\n            <span style=\"font-size:12px;color:#000;\">鱼珠技能:</span>\n            <span style=\"font-size:13px;font-weight:600;color:#000;\">" + (_0x16c3d8.pearlSkill || "无") + "</span>\n          </div>\n        </div>\n        <div class=\"qa-hero-fish-quench\" style=\"display:flex;align-items:center;gap:6px;margin-top:8px;\">\n          <span style=\"font-size:12px;color:#000;\">鱼灵淬炼:</span>\n          " + _0x5206c8() + "\n        </div>\n      </div>\n    </div>\n  ";
      document.body.appendChild(_0x216c20);
      _0xd3734a(_0x216c20);
      _0x2bb425(_0x216c20);
      _0x216c20.addEventListener("click", _0x74075a => {
        if (_0x74075a.target === _0x216c20) {
          _0x2efcc3();
        }
      });
      const _0x156195 = _0x216c20.querySelector("[data-action=\"close\"]");
      if (_0x156195) {
        _0x156195.addEventListener("click", () => _0x2efcc3());
      }
    }
  };
  const _0x35c520 = _0x35620c => {
    if (!_0x35620c) {
      return "0";
    }
    if (_0x35620c >= 100000000) {
      {
        return (_0x35620c / 100000000).toFixed(2) + "亿";
      }
    }
    if (_0x35620c >= 10000) {
      return (_0x35620c / 10000).toFixed(2) + "万";
    }
    return _0x35620c.toString();
  };
  const _0x2405fe = _0x4086bb => {
    let _0x1a52e7 = 0;
    let _0x363240 = 0;
    const _0x1ed096 = {
      redCount: _0x1a52e7,
      holeCount: _0x363240
    };
    if (!_0x4086bb) {
      return _0x1ed096;
    }
    Object.values(_0x4086bb).forEach(_0x38d94b => {
      _0x38d94b && _0x38d94b.quenches && Object.values(_0x38d94b.quenches).forEach(_0x176f63 => {
        _0x363240++;
        if (_0x176f63.colorId === 6) {
          {
            _0x1a52e7++;
          }
        }
      });
    });
    const _0x18e287 = {
      redCount: _0x1a52e7,
      holeCount: _0x363240
    };
    return _0x18e287;
  };
  const _0x21fb54 = _0x224506 => {
    let _0x29ded3 = 0;
    let _0x50d357 = 0;
    const _0x7b288d = [];
    const _0x1f0f6d = {
      redCount: _0x29ded3,
      holeCount: _0x50d357,
      heroList: _0x7b288d
    };
    if (!_0x224506 || !_0x224506.heroes) {
      return _0x1f0f6d;
    }
    const _0x3602d7 = {};
    _0x224506.pearlMap && Object.values(_0x224506.pearlMap).forEach(_0x8579e4 => {
      {
        if (_0x8579e4.artifactId) {
          {
            _0x3602d7[_0x8579e4.artifactId] = _0x8579e4.slotMap || {};
          }
        }
      }
    });
    Object.values(_0x224506.heroes).forEach(_0x2a6450 => {
      {
        const _0x1cd659 = _0x2f3199[_0x2a6450.heroId] || {};
        const _0x368bc3 = _0x2405fe(_0x2a6450.equipment);
        const _0x594095 = _0x316f93(_0x2a6450.artifactId);
        const _0x44a053 = _0xd9ec2c(_0x2a6450.appendSkill);
        const _0x51ed18 = [];
        const _0x122a59 = _0x3602d7[_0x2a6450.artifactId];
        _0x122a59 && Object.values(_0x122a59).forEach(_0x3943ca => {
          const _0x15fc20 = {
            name: "未知",
            value: "#9ca3af"
          };
          const _0x54b368 = _0x1522d4[_0x3943ca.colorId] || _0x15fc20;
          const _0x71e45e = {
            colorId: _0x3943ca.colorId,
            colorName: _0x54b368.name,
            colorValue: _0x54b368.value
          };
          _0x51ed18.push(_0x71e45e);
        });
        _0x7b288d.push({
          heroId: _0x2a6450.heroId,
          heroName: _0x1cd659.name || "武将" + _0x2a6450.heroId,
          heroAvatarRes: _0x25000a(_0x2a6450.heroId),
          power: _0x35c520(_0x2a6450.power),
          star: _0x2a6450.star || 0,
          level: _0x2a6450.level || 0,
          red: _0x368bc3.redCount,
          hole: _0x368bc3.holeCount,
          hasHolyBeast: _0x2a6450.hB?.["active"] || false,
          equipment: _0x2a6450.equipment || {},
          fishName: _0x594095,
          pearlSkill: _0x44a053,
          fishSlots: _0x51ed18
        });
        _0x29ded3 += _0x368bc3.redCount;
        _0x50d357 += _0x368bc3.holeCount;
      }
    });
    const _0x47c0f5 = {
      redCount: _0x29ded3,
      holeCount: _0x50d357,
      heroList: _0x7b288d
    };
    return _0x47c0f5;
  };
  const _0x78b904 = async () => {
    {
      const _0x5735cc = document.getElementById("qa-pvp-target");
      const _0x746ee0 = _0x5735cc?.["value"]?.["trim"]();
      if (!_0x746ee0) {
        {
          _0x30927d("请输入目标ID", "warning");
          return null;
        }
      }
      const _0x49e6fd = document.getElementById("qa-pvp-status");
      if (_0x49e6fd) {
        _0x49e6fd.textContent = "正在查询对手信息...";
      }
      try {
        {
          const _0xbd60e1 = {
            bottleType: 0,
            includeBottleTeam: false,
            isSearch: false,
            roleId: _0x746ee0
          };
          const _0x23e7b7 = await _0x361aec("rank_getroleinfo", _0xbd60e1);
          _0x439352("pvp", "查询对手信息", _0x23e7b7);
          if (!_0x23e7b7.roleInfo && !_0x23e7b7.legionInfo) {
            _0x30927d("未查询到对手信息", "warning");
            if (_0x49e6fd) {
              _0x49e6fd.textContent = "未查询到对手信息";
            }
            return null;
          }
          const _0x2d1c31 = _0x21fb54(_0x23e7b7.roleInfo);
          const _0x5cb141 = _0x23e7b7.roleInfo?.["lordWeaponId"] || 0;
          const _0x183b62 = _0x5cb141 > 0 ? _0x4713de[_0x5cb141]?.["name"] || "未知玩具" : "-";
          const _0x3187ed = {
            roleId: _0x746ee0,
            name: _0x23e7b7.roleInfo?.["name"] || "未知",
            headImg: _0x23e7b7.roleInfo?.["headImg"] || "",
            serverName: _0x23e7b7.roleInfo?.["serverName"] || "未知区服",
            power: _0x35c520(_0x23e7b7.roleInfo?.["power"]),
            red: _0x2d1c31.redCount,
            hole: _0x2d1c31.holeCount,
            heroList: _0x2d1c31.heroList,
            legionName: _0x23e7b7.legionInfo?.["name"] || "无俱乐部",
            legionMaxPower: _0x35c520(_0x23e7b7.legionInfo?.["statistics"]?.["max:power"]),
            legionRed: _0x23e7b7.legionInfo?.["statistics"]?.["battle:red:quench"] || 0,
            legionMaxRed: _0x23e7b7.legionInfo?.["statistics"]?.["red:quench"] || 0,
            lordWeaponId: _0x5cb141,
            lordWeaponName: _0x183b62
          };
          _0x386da5.pvpTargetData = _0x3187ed;
          _0x10cb09(_0x3187ed);
          if (_0x49e6fd) {
            _0x49e6fd.textContent = "查询完成";
          }
          return _0x3187ed;
        }
      } catch (_0x239885) {
        {
          if (_0x49e6fd) {
            _0x49e6fd.textContent = "查询失败";
          }
          return null;
        }
      }
    }
  };
  const _0x10cb09 = _0x1889e3 => {
    const _0x453a02 = document.getElementById("qa-pvp-target-info");
    if (!_0x453a02) {
      return;
    }
    _0x453a02.style.display = "block";
    const _0x2d2f32 = document.getElementById("qa-pvp-avatar-img");
    if (_0x2d2f32 && _0x1889e3.headImg) {
      _0x2d2f32.src = _0x1889e3.headImg;
      _0x2d2f32.style.display = "block";
      _0x2d2f32.referrerPolicy = "no-referrer";
      _0x2d2f32.loading = "lazy";
      _0x2d2f32.onerror = () => {
        _0x2d2f32.style.display = "none";
      };
    }
    const _0x55d227 = document.getElementById("qa-pvp-target-name");
    if (_0x55d227) {
      _0x55d227.textContent = _0x1889e3.name;
    }
    const _0x57c30c = document.getElementById("qa-pvp-target-server");
    if (_0x57c30c) {
      _0x57c30c.textContent = _0x1889e3.serverName;
    }
    const _0x2e2b65 = document.getElementById("qa-pvp-target-power");
    if (_0x2e2b65) {
      _0x2e2b65.textContent = _0x1889e3.power;
    }
    const _0x534a43 = document.getElementById("qa-pvp-target-red");
    if (_0x534a43) {
      _0x534a43.textContent = _0x1889e3.red;
    }
    const _0x35fb76 = document.getElementById("qa-pvp-target-hole");
    if (_0x35fb76) {
      _0x35fb76.textContent = _0x1889e3.hole;
    }
    const _0x249d6a = document.getElementById("qa-pvp-target-legion");
    if (_0x249d6a) {
      _0x249d6a.textContent = _0x1889e3.legionName;
    }
    const _0x1b05fa = document.getElementById("qa-pvp-target-max-power");
    if (_0x1b05fa) {
      _0x1b05fa.textContent = _0x1889e3.legionMaxPower;
    }
    const _0x315b98 = document.getElementById("qa-pvp-target-legion-red");
    if (_0x315b98) {
      _0x315b98.textContent = _0x1889e3.legionRed;
    }
    const _0x2a874b = document.getElementById("qa-pvp-target-weapon");
    if (_0x2a874b) {
      _0x2a874b.textContent = _0x1889e3.lordWeaponName || "-";
    }
    const _0x1fba1a = document.getElementById("qa-pvp-hero-list");
    if (_0x1fba1a && _0x1889e3.heroList) {
      {
        _0x1fba1a.innerHTML = _0x1889e3.heroList.map(_0x14e106 => "\n      <div class=\"qa-pvp-hero-item\" role=\"button\" tabindex=\"0\" data-hero-id=\"" + _0x14e106.heroId + "\">\n        <div class=\"qa-avatar qa-avatar-32\" title=\"" + _0x14e106.heroName + "\">\n          <img class=\"qa-avatar-img\" " + (_0x14e106.heroAvatarRes ? "data-res=\"" + _0x14e106.heroAvatarRes + "\"" : "") + " alt=\"" + _0x14e106.heroName + "\" loading=\"lazy\">\n          <div class=\"qa-avatar-fallback\">" + _0x22c5a4(_0x14e106.heroName) + "</div>\n        </div>\n        <div class=\"qa-pvp-hero-meta\">\n          <div class=\"qa-pvp-hero-name\">" + _0x14e106.heroName + "</div>\n          <div class=\"qa-pvp-hero-sub\">战力:" + _0x14e106.power + "</div>\n          <div class=\"qa-pvp-hero-sub\">\n            <span class=\"qa-pvp-hero-red\">红" + _0x14e106.red + "</span>\n            <span class=\"qa-pvp-hero-hole\">孔" + _0x14e106.hole + "</span>\n            <span class=\"qa-pvp-hero-holy " + (_0x14e106.hasHolyBeast ? "on" : "off") + "\">" + (_0x14e106.hasHolyBeast ? "四圣" : "未开四圣") + "</span>\n          </div>\n        </div>\n      </div>\n    ").join("");
        _0xd3734a(_0x1fba1a);
        _0x2bb425(_0x1fba1a);
        _0x1fba1a.dataset.qaHeroClickBound !== "1" && (_0x1fba1a.dataset.qaHeroClickBound = "1", _0x1fba1a.addEventListener("click", _0x394f9f => {
          const _0x33bdf7 = _0x394f9f.target?.["closest"]?.("[data-hero-id]");
          if (!_0x33bdf7) {
            return;
          }
          const _0x474028 = Number(_0x33bdf7.getAttribute("data-hero-id"));
          const _0x5d3e5d = _0x1889e3.heroList.find(_0x228fc2 => Number(_0x228fc2.heroId) === _0x474028);
          _0x1d33f9(_0x5d3e5d);
        }), _0x1fba1a.addEventListener("keydown", _0x4de322 => {
          {
            if (_0x4de322.key !== "Enter" && _0x4de322.key !== " ") {
              return;
            }
            const _0x5ae1f1 = _0x4de322.target?.["closest"]?.("[data-hero-id]");
            if (!_0x5ae1f1) {
              return;
            }
            _0x4de322.preventDefault();
            const _0x48b375 = Number(_0x5ae1f1.getAttribute("data-hero-id"));
            const _0x29bc27 = _0x1889e3.heroList.find(_0x3235b0 => Number(_0x3235b0.heroId) === _0x48b375);
            _0x1d33f9(_0x29bc27);
          }
        }));
      }
    }
  };
  const _0x2b096a = async () => {
    const _0x5dee53 = document.getElementById("qa-pvp-target");
    const _0x470d80 = document.getElementById("qa-pvp-count");
    const _0x30a6df = _0x5dee53?.["value"]?.["trim"]();
    const _0x3c5977 = parseInt(_0x470d80?.["value"], 10) || 1;
    if (!_0x30a6df) {
      _0x30927d("请输入目标ID", "warning");
      return;
    }
    const _0x49ff80 = document.getElementById("qa-pvp-status");
    document.getElementById("qa-pvp-result");
    document.getElementById("qa-pvp-battles");
    if (_0x49ff80) {
      _0x49ff80.textContent = "正在切磋中 (0/" + _0x3c5977 + ")...";
    }
    _0x30927d("开始切磋，共" + _0x3c5977 + "次", "info");
    _0x386da5.pvpRunning = true;
    try {
      await _0x359bda();
      if (!_0x386da5.battleVersion) {
        {
          if (_0x49ff80) {
            _0x49ff80.textContent = "获取战斗版本失败";
          }
          _0x30927d("获取战斗版本失败", "error");
          _0x386da5.pvpRunning = false;
          return;
        }
      }
      let _0x636a21 = 0;
      let _0x1d806e = 0;
      const _0x25bde6 = [];
      for (let _0x872872 = 0; _0x872872 < _0x3c5977; _0x872872++) {
        if (!_0x386da5.pvpRunning) {
          _0x30927d("切磋已停止", "info");
          break;
        }
        if (_0x49ff80) {
          _0x49ff80.textContent = "正在切磋中 (" + (_0x872872 + 1) + "/" + _0x3c5977 + ")...";
        }
        _0x30927d("正在切磋 " + (_0x872872 + 1) + "/" + _0x3c5977, "info");
        const _0x455b9b = {
          targetId: _0x30a6df
        };
        const _0x50937d = await _0x361aec("fight_startpvp", _0x455b9b);
        if (!_0x50937d.battleData) {
          {
            _0x30927d("切磋失败，无法获取战斗数据", "error");
            break;
          }
        }
        let _0x23ce42 = 0;
        let _0x40fc40 = 0;
        _0x50937d.battleData.result?.["sponsor"]?.["teamInfo"] && _0x50937d.battleData.result.sponsor.teamInfo.forEach(_0x50e200 => {
          if (_0x50e200.hp === 0) {
            _0x23ce42++;
          }
        });
        if (_0x50937d.battleData.result?.["accept"]?.["teamInfo"]) {
          {
            _0x50937d.battleData.result.accept.teamInfo.forEach(_0x400a30 => {
              if (_0x400a30.hp === 0) {
                _0x40fc40++;
              }
            });
          }
        }
        if (_0x23ce42 > 0) {
          _0x1d806e++;
        }
        const _0x592f2d = _0x50937d.battleData.result?.["isWin"] || false;
        if (_0x592f2d) {
          _0x636a21++;
        }
        _0x25bde6.push({
          leftName: _0x50937d.battleData.leftTeam?.["name"] || "我方",
          leftHeadImg: _0x50937d.battleData.leftTeam?.["headImg"] || "",
          leftPower: _0x35c520(_0x50937d.battleData.leftTeam?.["power"]),
          rightName: _0x50937d.battleData.rightTeam?.["name"] || "对方",
          rightHeadImg: _0x50937d.battleData.rightTeam?.["headImg"] || "",
          rightPower: _0x35c520(_0x50937d.battleData.rightTeam?.["power"]),
          leftDieHero: _0x23ce42,
          rightDieHero: _0x40fc40,
          isWin: _0x592f2d
        });
        _0x872872 < _0x3c5977 - 1 && (await new Promise(_0x5b5854 => setTimeout(_0x5b5854, 300)));
      }
      const _0x12bc55 = {
        winCount: _0x636a21,
        dieHeroGameCount: _0x1d806e,
        total: _0x25bde6.length,
        battles: _0x25bde6
      };
      _0x386da5.pvpResult = _0x12bc55;
      _0x210640(_0x12bc55);
      _0x439352("pvp", "切磋结果", _0x12bc55);
      if (_0x49ff80) {
        _0x49ff80.textContent = "切磋完成: " + _0x636a21 + "胜/" + _0x25bde6.length + "场";
      }
      _0x30927d("切磋完成: " + _0x636a21 + "胜/" + _0x25bde6.length + "场", "success");
    } catch (_0x20baa3) {
      if (_0x49ff80) {
        _0x49ff80.textContent = "切磋失败";
      }
      _0x30927d("切磋失败: " + _0x20baa3.message, "error");
    } finally {
      _0x386da5.pvpRunning = false;
    }
  };
  const _0x210640 = _0xdff9c4 => {
    {
      const _0x32e8dc = document.getElementById("qa-pvp-result");
      if (!_0x32e8dc) {
        return;
      }
      _0x32e8dc.style.display = "block";
      const _0x390799 = document.getElementById("qa-pvp-win-rate");
      if (_0x390799) {
        const _0x245346 = _0xdff9c4.total > 0 ? (_0xdff9c4.winCount / _0xdff9c4.total * 100).toFixed(1) : 0;
        _0x390799.textContent = _0x245346 + "%";
      }
      const _0x36d382 = document.getElementById("qa-pvp-die-rate");
      if (_0x36d382) {
        const _0x9a1c8c = _0xdff9c4.total > 0 ? (_0xdff9c4.dieHeroGameCount / _0xdff9c4.total * 100).toFixed(1) : 0;
        _0x36d382.textContent = _0x9a1c8c + "%";
      }
      const _0x57654d = document.getElementById("qa-pvp-total");
      if (_0x57654d) {
        _0x57654d.textContent = _0xdff9c4.total;
      }
      const _0x444fc8 = document.getElementById("qa-pvp-battles");
      _0x444fc8 && _0xdff9c4.battles && (_0x444fc8.innerHTML = _0xdff9c4.battles.map((_0x326c41, _0x237485) => "\n      <div class=\"pvp-battle-item\" style=\"display:flex;align-items:center;justify-content:space-between;padding:8px;margin-bottom:6px;background:" + (_0x326c41.isWin ? "rgba(52,199,89,0.1)" : "rgba(255,59,48,0.1)") + ";border-radius:6px;border-left:3px solid " + (_0x326c41.isWin ? "#34c759" : "#ff3b30") + ";\">\n        <div style=\"flex:1;display:flex;align-items:center;gap:8px;min-width:0;\">\n          <div class=\"qa-avatar qa-avatar-24\" title=\"" + _0x326c41.leftName + "\">\n            <img class=\"qa-avatar-img\" " + (_0x326c41.leftHeadImg ? "src=\"" + _0x326c41.leftHeadImg + "\"" : "") + " alt=\"" + _0x326c41.leftName + "\" loading=\"lazy\" referrerpolicy=\"no-referrer\">\n            <div class=\"qa-avatar-fallback\">" + _0x22c5a4(_0x326c41.leftName) + "</div>\n          </div>\n          <div style=\"flex:1;min-width:0;\">\n            <div style=\"font-size:12px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">" + _0x326c41.leftName + "</div>\n            <div style=\"font-size:10px;color:var(--text-secondary);\">战力:" + _0x326c41.leftPower + "</div>\n            <div style=\"font-size:10px;color:#ff3b30;\">掉将:" + _0x326c41.leftDieHero + "</div>\n          </div>\n        </div>\n        <div style=\"padding:0 10px;\">\n          <span style=\"font-size:12px;font-weight:bold;color:" + (_0x326c41.isWin ? "#34c759" : "#ff3b30") + ";\">\n            " + (_0x326c41.isWin ? "胜利" : "失败") + "\n          </span>\n        </div>\n        <div style=\"flex:1;display:flex;align-items:center;gap:8px;justify-content:flex-end;min-width:0;\">\n          <div style=\"flex:1;min-width:0;text-align:right;\">\n            <div style=\"font-size:12px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">" + _0x326c41.rightName + "</div>\n            <div style=\"font-size:10px;color:var(--text-secondary);\">战力:" + _0x326c41.rightPower + "</div>\n            <div style=\"font-size:10px;color:#ff3b30;\">掉将:" + _0x326c41.rightDieHero + "</div>\n          </div>\n          <div class=\"qa-avatar qa-avatar-24\" title=\"" + _0x326c41.rightName + "\">\n            <img class=\"qa-avatar-img\" " + (_0x326c41.rightHeadImg ? "src=\"" + _0x326c41.rightHeadImg + "\"" : "") + " alt=\"" + _0x326c41.rightName + "\" loading=\"lazy\" referrerpolicy=\"no-referrer\">\n            <div class=\"qa-avatar-fallback\">" + _0x22c5a4(_0x326c41.rightName) + "</div>\n          </div>\n        </div>\n      </div>\n    ").join(""), _0x2bb425(_0x444fc8));
    }
  };
  const _0x468ba0 = () => {
    _0x386da5.pvpRunning = false;
  };
  let _0x267994 = false;
  const _0x366361 = _0x19dd26 => {
    {
      if (!_0x19dd26) {
        return null;
      }
      if (Array.isArray(_0x19dd26)) {
        const _0x33a808 = _0x19dd26[0];
        return _0x33a808?.["roleId"] || _0x33a808?.["id"] || _0x33a808?.["targetId"];
      }
      const _0x34146f = _0x19dd26?.["rankList"]?.[0] || _0x19dd26?.["roleList"]?.[0] || _0x19dd26?.["targets"]?.[0] || _0x19dd26?.["targetList"]?.[0] || _0x19dd26?.["list"]?.[0];
      if (_0x34146f) {
        {
          if (_0x34146f.roleId) {
            return _0x34146f.roleId;
          }
          if (_0x34146f.id) {
            return _0x34146f.id;
          }
          if (_0x34146f.targetId) {
            return _0x34146f.targetId;
          }
        }
      }
      return _0x19dd26?.["roleId"] || _0x19dd26?.["id"] || _0x19dd26?.["targetId"];
    }
  };
  const _0x490745 = () => {
    if (!window.ROLE) {
      return 0;
    }
    const _0x1f1eb4 = window.ROLE.items || {};
    return _0x16e7d2(_0x1f1eb4, 1007);
  };
  const _0x216883 = async () => {
    const _0x3b3fb9 = document.getElementById("qa-arena-ticket");
    const _0x438953 = document.getElementById("qa-arena-fought");
    const _0x4c5f77 = document.getElementById("qa-arena-status");
    if (_0x4c5f77) {
      _0x4c5f77.textContent = "刷新中...";
    }
    try {
      {
        const _0x2f6f44 = window.ROLE;
        if (!_0x2f6f44) {
          {
            if (_0x4c5f77) {
              _0x4c5f77.textContent = "数据未就绪";
            }
            _0x30927d("window.ROLE 数据未就绪", "warning");
            return;
          }
        }
        _0x1e6f53("window.ROLE", "直接读取", "成功");
        const _0x576e07 = _0x490745();
        _0x1e6f53("window.ROLE", "items[1007].quantity", _0x576e07);
        if (_0x3b3fb9) {
          _0x3b3fb9.textContent = _0x576e07;
        }
        const _0x271935 = _0x2f6f44?.["dailyTask"] || {};
        const _0x452ddb = _0x4af3f0(_0x271935?.["complete"], 13);
        _0x1e6f53("roleInfo", "dailyTask.complete[13]", _0x452ddb);
        if (_0x438953) {
          {
            _0x452ddb === -1 ? (_0x438953.textContent = "未完成", _0x438953.style.color = "") : (_0x438953.textContent = "已完成", _0x438953.style.color = "#10b981");
          }
        }
        if (_0x4c5f77) {
          _0x4c5f77.textContent = "数据已刷新";
        }
        _0x30927d("竞技场数据刷新成功", "success");
      }
    } catch (_0x593e78) {
      if (_0x4c5f77) {
        _0x4c5f77.textContent = "刷新失败";
      }
      _0x30927d("刷新失败: " + _0x593e78.message, "error");
    }
  };
  const _0x59073e = async () => {
    const _0x3451d3 = document.getElementById("qa-arena-times");
    const _0x4653cb = document.getElementById("qa-arena-start-btn");
    const _0x2386eb = document.getElementById("qa-arena-stop-btn");
    const _0x4a0f5 = document.getElementById("qa-arena-status");
    const _0x14ccc2 = document.getElementById("qa-arena-ticket");
    if (!window.ROLE) {
      _0x30927d("数据未就绪，请稍后重试", "warning");
      return;
    }
    const _0x47bbee = parseInt(_0x3451d3?.["value"], 10) || 1;
    const _0x50e358 = _0x490745();
    if (_0x50e358 < _0x47bbee) {
      {
        _0x30927d("门票不足，需要" + _0x47bbee + "张，当前" + _0x50e358 + "张", "warning");
        return;
      }
    }
    const _0x59ca71 = new Date().getHours();
    if (_0x59ca71 < 8 || _0x59ca71 > 22) {
      _0x30927d("竞技场开放时间为8:00-22:00", "warning");
      return;
    }
    _0x267994 = true;
    if (_0x4653cb) {
      _0x4653cb.style.display = "none";
    }
    if (_0x2386eb) {
      _0x2386eb.style.display = "inline-block";
    }
    if (_0x3451d3) {
      _0x3451d3.disabled = true;
    }
    _0x30927d("开始竞技场战斗，共" + _0x47bbee + "次", "info");
    let _0x1c228d = 0;
    let _0x5ed65b = 0;
    try {
      {
        const _0x570dab = await _0x359bda();
        if (!_0x570dab) {
          _0x30927d("无法获取战斗版本", "error");
          return;
        }
        await _0x361aec("arena_startarea", {}, "竞技场-开始");
        for (let _0x4b8b9d = 0; _0x4b8b9d < _0x47bbee; _0x4b8b9d++) {
          {
            if (!_0x267994) {
              if (_0x4a0f5) {
                _0x4a0f5.textContent = "已停止 (完成" + _0x4b8b9d + "/" + _0x47bbee + "，胜" + _0x1c228d + "负" + _0x5ed65b + ")";
              }
              break;
            }
            if (_0x4a0f5) {
              _0x4a0f5.textContent = "战斗中 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")...";
            }
            try {
              _0x4dddd6("arena_getareatarget", {}, "竞技场-获取目标 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")");
              const _0x2c7109 = await _0x361aec("arena_getareatarget", {}, "竞技场-获取目标 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")");
              const _0x1badc6 = _0x366361(_0x2c7109);
              _0x1e6f53("targets", "targetId", _0x1badc6);
              if (!_0x1badc6) {
                {
                  if (_0x4a0f5) {
                    _0x4a0f5.textContent = "未找到可挑战目标";
                  }
                  break;
                }
              }
              const _0x42eab3 = {
                targetId: _0x1badc6
              };
              _0x4dddd6("fight_startareaarena", _0x42eab3, "竞技场-战斗 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")");
              const _0x5749af = {
                targetId: _0x1badc6
              };
              const _0x716ad = await _0x361aec("fight_startareaarena", _0x5749af, "竞技场-战斗 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")");
              _0x439352("arena", "竞技场战斗", _0x716ad);
              if (_0x716ad?.["battleData"]?.["result"]) {
                const _0x260a24 = _0x716ad.battleData.result.sponsor;
                const _0x28845a = _0x716ad.battleData.result.accept;
                const _0x47e2e2 = _0x260a24?.["teamInfo"]?.["filter"](_0x234e03 => _0x234e03.hp > 0)["length"] || 0;
                const _0x428fd3 = _0x28845a?.["teamInfo"]?.["filter"](_0x51668a => _0x51668a.hp > 0)["length"] || 0;
                _0x47e2e2 > _0x428fd3 ? (_0x1c228d++, _0x1e6f53("battleData.result", "战斗结果 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")", "胜利 (我方存活" + _0x47e2e2 + ", 敌方存活" + _0x428fd3 + ")")) : (_0x5ed65b++, _0x1e6f53("battleData.result", "战斗结果 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")", "失败 (我方存活" + _0x47e2e2 + ", 敌方存活" + _0x428fd3 + ")"));
              }
              const _0x5122f9 = _0x490745() - (_0x4b8b9d + 1);
              if (_0x14ccc2) {
                _0x14ccc2.textContent = Math.max(0, _0x5122f9);
              }
            } catch (_0x28d417) {
              _0x5ed65b++;
              _0x1e6f53("error", "战斗异常 (" + (_0x4b8b9d + 1) + "/" + _0x47bbee + ")", _0x28d417.message);
            }
            _0x4b8b9d < _0x47bbee - 1 && _0x267994 && (await new Promise(_0x4802ae => setTimeout(_0x4802ae, 350)));
          }
        }
        await _0x216883();
        try {
          const _0x556ed6 = window.ROLE?.["dailyTask"]?.["complete"] || {};
          const _0x3d07ff = 13;
          const _0x33cb2f = 9;
          const _0x4f6f19 = _0x4af3f0(_0x556ed6, _0x3d07ff);
          if (_0x4f6f19 !== undefined && _0x4f6f19 !== -1) {
            {
              const _0x1be5ce = {
                taskId: _0x33cb2f
              };
              _0x4dddd6("task_claimdailypoint", _0x1be5ce, "竞技场-领取任务积分");
              const _0x531a49 = {
                taskId: _0x33cb2f
              };
              await _0x361aec("task_claimdailypoint", _0x531a49, "竞技场-领取任务积分");
              _0x30927d("竞技场任务积分已领取", "success");
            }
          }
        } catch (_0x2537a3) {
          _0x1ddb84("领取竞技场任务积分失败: " + _0x2537a3.message, "warning");
        }
        if (_0x267994) {
          {
            if (_0x4a0f5) {
              _0x4a0f5.textContent = "战斗完成 (胜" + _0x1c228d + "负" + _0x5ed65b + ")";
            }
            _0x1e6f53("战斗统计", "最终结果", "胜利" + _0x1c228d + "次, 失败" + _0x5ed65b + "次");
            _0x30927d("竞技场战斗完成，胜" + _0x1c228d + "负" + _0x5ed65b, "success");
          }
        }
      }
    } catch (_0x4faf38) {
      if (_0x4a0f5) {
        _0x4a0f5.textContent = "战斗出错: " + _0x4faf38.message;
      }
      _0x30927d("战斗出错: " + _0x4faf38.message, "error");
    } finally {
      {
        _0x267994 = false;
        if (_0x4653cb) {
          _0x4653cb.style.display = "inline-block";
        }
        if (_0x2386eb) {
          _0x2386eb.style.display = "none";
        }
        if (_0x3451d3) {
          _0x3451d3.disabled = false;
        }
      }
    }
  };
  const _0x10d504 = () => {
    {
      _0x267994 = false;
      _0x30927d("已停止竞技场战斗", "info");
    }
  };
  const _0xd4d30a = 320;
  const _0x27199c = 240;
  const _0x5495 = () => {
    {
      const _0xf97da2 = new Date();
      _0xf97da2.setHours(0, 0, 0, 0);
      return Math.floor(_0xf97da2.getTime() / 1000);
    }
  };
  const _0x47c13b = _0x5ce28b => {
    if (!_0x5ce28b || typeof _0x5ce28b !== "number") {
      return true;
    }
    return _0x5ce28b < _0x5495();
  };
  const _0x2f7525 = () => {
    const _0xe504ca = new Date();
    const _0x48752b = new Date(_0xe504ca.getFullYear(), _0xe504ca.getMonth() + 1, 0).getDate();
    const _0x5ca63a = _0xe504ca.getDate();
    const _0x39f907 = Math.max(0, _0x48752b - _0x5ca63a);
    const _0xf7156 = Math.min(1, Math.max(0, _0x5ca63a / _0x48752b));
    const _0x432d1f = {
      daysInMonth: _0x48752b,
      dayOfMonth: _0x5ca63a,
      remainingDays: _0x39f907,
      monthProgress: _0xf7156
    };
    return _0x432d1f;
  };
  const _0x53bda1 = (_0x15fcb8, _0x44b14b, _0x12913a) => {
    return _0x44b14b === 0 ? _0x15fcb8 : Math.min(_0x15fcb8, Math.ceil(_0x12913a * _0x15fcb8));
  };
  const _0x2222fd = _0x382a18 => {
    {
      const _0x9c6483 = _0x382a18?.["rankList"]?.[0] || _0x382a18?.["roleList"]?.[0] || _0x382a18?.["targets"]?.[0] || _0x382a18?.["targetList"]?.[0] || _0x382a18?.["list"]?.[0];
      if (_0x9c6483?.["roleId"]) {
        return _0x9c6483.roleId;
      }
      if (_0x9c6483?.["id"]) {
        return _0x9c6483.id;
      }
      return _0x382a18?.["roleId"] || _0x382a18?.["id"];
    }
  };
  const _0x4b665e = async () => {
    try {
      _0x4dddd6("activity_get", {}, "月度任务-获取活动数据");
      const _0x4efe85 = await _0x361aec("activity_get", {}, "月度任务-获取活动数据");
      const _0xff49cc = _0x4efe85?.["activity"] || _0x4efe85?.["body"]?.["activity"] || _0x4efe85;
      _0x386da5.monthlyActivity = _0xff49cc || null;
      _0x348ea9("activity_get", _0x4efe85, "钓鱼: " + (_0xff49cc?.["myMonthInfo"]?.["2"]?.["num"] || 0) + ", 竞技场: " + (_0xff49cc?.["myArenaInfo"]?.["num"] || 0));
      return _0xff49cc;
    } catch (_0xfbd1f1) {
      _0x1ddb84("获取月度活动数据失败: " + _0xfbd1f1.message, "error");
      _0x30927d("获取月度活动数据失败: " + _0xfbd1f1.message, "error");
      return null;
    }
  };
  const _0xbe257b = () => {
    const _0x238e0a = _0x386da5.monthlyActivity;
    const {
      remainingDays: _0x16fe2b,
      monthProgress: _0x404526
    } = _0x2f7525();
    const _0x3624b3 = document.getElementById("qa-monthly-days");
    if (_0x3624b3) {
      {
        _0x3624b3.textContent = _0x16fe2b > 0 ? "剩余 " + _0x16fe2b + " 天" : "本月最后一天";
      }
    }
    const _0x58048c = _0x238e0a?.["myMonthInfo"] || {};
    const _0x573aa8 = _0x238e0a?.["myArenaInfo"] || {};
    const _0x1d5a6d = Number(_0x58048c?.["2"]?.["num"] || 0);
    const _0x1ade65 = Number(_0x573aa8?.["num"] || 0);
    const _0x49f166 = Math.min(100, Math.round(_0x1d5a6d / _0xd4d30a * 100));
    const _0x29ea67 = Math.min(100, Math.round(_0x1ade65 / _0x27199c * 100));
    const _0x24c77f = _0x53bda1(_0xd4d30a, _0x16fe2b, _0x404526);
    const _0x319c38 = _0x53bda1(_0x27199c, _0x16fe2b, _0x404526);
    const _0x4f3125 = document.getElementById("qa-monthly-fish");
    const _0x1ae5e6 = document.getElementById("qa-monthly-arena");
    _0x4f3125 && (_0x4f3125.innerHTML = "\n      <span class=\"stat-value\">" + _0x1d5a6d + " / " + _0xd4d30a + "</span>\n      <span class=\"stat-sub\">" + _0x49f166 + "% (应达: " + _0x24c77f + ")</span>\n    ");
    _0x1ae5e6 && (_0x1ae5e6.innerHTML = "\n      <span class=\"stat-value\">" + _0x1ade65 + " / " + _0x27199c + "</span>\n      <span class=\"stat-sub\">" + _0x29ea67 + "% (应达: " + _0x319c38 + ")</span>\n    ");
    const _0x9f4b84 = document.getElementById("qa-monthly-status");
    _0x9f4b84 && (_0x1d5a6d >= _0x24c77f && _0x1ade65 >= _0x319c38 ? (_0x9f4b84.textContent = "已达标", _0x9f4b84.className = "club-status-badge success") : (_0x9f4b84.textContent = "需补差", _0x9f4b84.className = "club-status-badge warning"));
  };
  const _0x2f0e8c = async () => {
    const _0x1fef65 = document.getElementById("qa-monthly-status");
    if (_0x1fef65) {
      _0x1fef65.textContent = "刷新中...";
    }
    const _0x2ed028 = await _0x4b665e();
    _0x2ed028 && (_0xbe257b(), _0x30927d("刷新月度进度成功", "success"));
  };
  const _0x459284 = async (_0x4927bd = "topup") => {
    const _0x225105 = _0x386da5.monthlyActivity;
    if (!_0x225105) {
      return;
    }
    const _0x164702 = _0x225105?.["myMonthInfo"] || {};
    let _0x139173 = Number(_0x164702?.["2"]?.["num"] || 0);
    const {
      remainingDays: _0x550767,
      monthProgress: _0x1dcd2f
    } = _0x2f7525();
    const _0x38f798 = _0x53bda1(_0xd4d30a, _0x550767, _0x1dcd2f);
    const _0x5681d3 = _0x4927bd === "complete" ? _0xd4d30a : _0x38f798;
    let _0x5750ab = Math.max(0, _0x5681d3 - _0x139173);
    if (_0x5750ab <= 0) {
      return;
    }
    _0x386da5.monthlyFishRunning = true;
    _0x4b6229();
    try {
      {
        let _0x37ecf8 = _0x386da5.roleInfo;
        !_0x37ecf8 && (_0x1ddb84("获取角色信息以检查免费钓鱼次数", "info"), _0x37ecf8 = await _0x54b8ca());
        const _0x4f0fc2 = Number(_0x37ecf8?.["statistics"]?.["artifact:normal:lottery:time"] || 0);
        if (_0x47c13b(_0x4f0fc2)) {
          {
            _0x1ddb84("开始免费钓鱼 (3次)", "info");
            for (let _0x54b300 = 0; _0x54b300 < 3; _0x54b300++) {
              {
                const _0x249240 = document.getElementById("qa-monthly-status");
                _0x249240 && (_0x249240.textContent = "免费钓鱼 " + (_0x54b300 + 1) + "/3");
                try {
                  const _0x433288 = {
                    lotteryNumber: 1,
                    newFree: true,
                    type: 1
                  };
                  _0x4dddd6("artifact_lottery", _0x433288, "月度任务-免费钓鱼 " + (_0x54b300 + 1) + "/3");
                  const _0x4a21df = {
                    lotteryNumber: 1,
                    newFree: true,
                    type: 1
                  };
                  await _0x361aec("artifact_lottery", _0x4a21df, "月度任务-免费钓鱼 " + (_0x54b300 + 1) + "/3");
                  _0x1ddb84("免费钓鱼 " + (_0x54b300 + 1) + "/3 完成", "success");
                  await _0x4b665e();
                  _0xbe257b();
                  await _0x186d8b(500);
                } catch {
                  {
                    _0x1ddb84("免费钓鱼 " + (_0x54b300 + 1) + "/3 失败", "error");
                    break;
                  }
                }
              }
            }
            const _0x5a50db = _0x386da5.monthlyActivity;
            _0x139173 = Number(_0x5a50db?.["myMonthInfo"]?.["2"]?.["num"] || 0);
            _0x5750ab = Math.max(0, _0x5681d3 - _0x139173);
            _0x1ddb84("免费钓鱼后进度: " + _0x139173 + ", 剩余需要: " + _0x5750ab, "info");
          }
        }
        if (_0x5750ab <= 0) {
          _0x1ddb84("免费钓鱼后已达标", "success");
          _0xbe257b();
          return;
        }
        let _0x400d4c = _0x5750ab;
        let _0x1a4cf1 = 0;
        const _0x18d01b = Math.ceil(_0x5750ab / 10);
        _0x1ddb84("开始付费钓鱼 - 总批次: " + _0x18d01b, "info");
        while (_0x400d4c > 0) {
          {
            const _0x3cf175 = Math.min(10, _0x400d4c);
            _0x1a4cf1++;
            try {
              const _0xeec3c6 = {
                lotteryNumber: _0x3cf175,
                newFree: true,
                type: 1
              };
              _0x4dddd6("artifact_lottery", _0xeec3c6, "月度任务-钓鱼批次 " + _0x1a4cf1 + "/" + _0x18d01b);
              const _0x2ff761 = {
                lotteryNumber: _0x3cf175,
                newFree: true,
                type: 1
              };
              await _0x361aec("artifact_lottery", _0x2ff761, "月度任务-钓鱼批次 " + _0x1a4cf1 + "/" + _0x18d01b);
              _0x1ddb84("钓鱼批次 " + _0x1a4cf1 + "/" + _0x18d01b + " 完成 (" + _0x3cf175 + "次)", "success");
            } catch (_0x14557c) {
              _0x1ddb84("钓鱼批次 " + _0x1a4cf1 + "/" + _0x18d01b + " 失败: " + _0x14557c.message, "error");
              break;
            }
            _0x400d4c -= _0x3cf175;
            await _0x4b665e();
            _0xbe257b();
            const _0x36e633 = document.getElementById("qa-monthly-status");
            _0x36e633 && (_0x36e633.textContent = "钓鱼中 " + _0x1a4cf1 + "/" + _0x18d01b);
            if (_0x400d4c > 0) {
              {
                await _0x186d8b(800);
              }
            }
          }
        }
        await _0x4b665e();
        _0xbe257b();
        const _0x2e35c0 = _0x386da5.monthlyActivity;
        const _0x5937f4 = Number(_0x2e35c0?.["myMonthInfo"]?.["2"]?.["num"] || 0);
        _0x1ddb84("钓鱼补差完成 - 起始: " + _0x139173 + ", 最终: " + _0x5937f4 + ", 目标: " + _0x5681d3, "success");
        if (!(_0x5937f4 >= _0x5681d3)) {
          _0x30927d("钓鱼补差完成: " + _0x139173 + " -> " + _0x5937f4, "success");
        }
      }
    } finally {
      {
        _0x386da5.monthlyFishRunning = false;
        _0x4b6229();
      }
    }
  };
  const _0x3ed216 = async (_0x3fb44b = "topup") => {
    const _0x2a16c1 = _0x386da5.monthlyActivity;
    if (!_0x2a16c1) {
      return;
    }
    const _0x3952d5 = _0x2a16c1?.["myArenaInfo"] || {};
    let _0xb5fded = Number(_0x3952d5?.["num"] || 0);
    const {
      remainingDays: _0x3b16eb,
      monthProgress: _0x470e2f
    } = _0x2f7525();
    const _0x2c689f = _0x53bda1(_0x27199c, _0x3b16eb, _0x470e2f);
    const _0x5e1391 = _0x3fb44b === "complete" ? _0x27199c : _0x2c689f;
    let _0x363ad0 = Math.max(0, _0x5e1391 - _0xb5fded);
    if (_0x363ad0 <= 0) {
      {
        return;
      }
    }
    _0x30927d("竞技场已达标", "info");
    _0x386da5.monthlyArenaRunning = true;
    _0x4b6229();
    try {
      {
        _0x1ddb84("获取 battleVersion", "info");
        await _0x359bda();
        if (!_0x386da5.battleVersion) {
          {
            _0x1ddb84("无法获取 battleVersion", "error");
            return;
          }
        }
        _0x30927d("无法获取battleVersion", "error");
        try {
          _0x4dddd6("arena_startarea", {}, "月度任务-开始竞技场");
          await _0x361aec("arena_startarea", {}, "月度任务-开始竞技场");
          _0x1ddb84("竞技场已开启", "success");
        } catch {}
        const _0x198c99 = 100;
        let _0x4ddbed = 0;
        let _0x4294ff = 0;
        const _0x3c5892 = Math.ceil(_0x363ad0 / 2);
        _0x1ddb84("预估需要战斗 " + _0x3c5892 + " 次", "info");
        while (_0x363ad0 > 0 && _0x4ddbed < _0x198c99) {
          {
            const _0x4d6483 = document.getElementById("qa-monthly-status");
            _0x4d6483 && (_0x4d6483.textContent = "竞技场 " + (_0x4294ff + 1) + "/" + _0x3c5892 + " (进度:" + _0xb5fded + "/" + _0x5e1391 + ")");
            let _0x4e3356;
            try {
              {
                _0x4dddd6("arena_getareatarget", {}, "月度任务-获取竞技场目标");
                _0x4e3356 = await _0x361aec("arena_getareatarget", {}, "月度任务-获取竞技场目标");
              }
            } catch (_0xe4ad8b) {
              {
                _0x1ddb84("获取竞技场目标失败: " + _0xe4ad8b.message, "error");
                break;
              }
            }
            const _0x547729 = _0x2222fd(_0x4e3356);
            if (!_0x547729) {
              {
                _0x1ddb84("未找到有效的竞技场目标", "warning");
                break;
              }
            }
            _0x1ddb84("竞技场目标 ID: " + _0x547729, "info");
            try {
              {
                const _0x5db934 = {
                  targetId: _0x547729
                };
                _0x4dddd6("fight_startareaarena", _0x5db934, "月度任务-竞技场战斗 " + (_0x4294ff + 1));
                const _0x4cabaa = {
                  targetId: _0x547729
                };
                await _0x361aec("fight_startareaarena", _0x4cabaa, "月度任务-竞技场战斗 " + (_0x4294ff + 1));
                _0x4294ff++;
                _0x1ddb84("竞技场战斗 " + _0x4294ff + " 完成", "success");
              }
            } catch (_0x3072e5) {
              {
                _0x1ddb84("竞技场战斗失败: " + _0x3072e5.message, "error");
              }
            }
            _0x4ddbed++;
            await _0x4b665e();
            _0xbe257b();
            const _0x49b1dc = _0x386da5.monthlyActivity;
            _0xb5fded = Number(_0x49b1dc?.["myArenaInfo"]?.["num"] || 0);
            _0x363ad0 = Math.max(0, _0x5e1391 - _0xb5fded);
            _0x363ad0 > 0 && (await _0x186d8b(1000));
          }
        }
        await _0x4b665e();
        _0xbe257b();
        _0x1ddb84("竞技场补差完成 - 战斗次数: " + _0x4294ff + ", 最终进度: " + _0xb5fded + "/" + _0x5e1391, "success");
        if (!(_0xb5fded >= _0x5e1391)) {
          if (_0x4ddbed >= _0x198c99) {
            _0x30927d("竞技场补差完成: " + _0xb5fded + "次", "success");
          }
        }
      }
    } finally {
      _0x386da5.monthlyArenaRunning = false;
      _0x4b6229();
    }
  };
  const _0x4b6229 = () => {
    {
      const _0x24d6ab = document.getElementById("qa-monthly-fish-btn");
      const _0x102bfb = document.getElementById("qa-monthly-fish-complete-btn");
      const _0x1bf5ae = document.getElementById("qa-monthly-arena-btn");
      const _0x97d273 = document.getElementById("qa-monthly-arena-complete-btn");
      const _0x427ce3 = document.getElementById("qa-monthly-refresh-btn");
      const _0x29d77b = _0x386da5.monthlyFishRunning;
      const _0x355209 = _0x386da5.monthlyArenaRunning;
      const _0x5450cf = _0x29d77b || _0x355209;
      _0x24d6ab && (_0x24d6ab.disabled = _0x5450cf, _0x24d6ab.textContent = _0x29d77b ? "补齐中..." : "钓鱼补齐");
      _0x102bfb && (_0x102bfb.disabled = _0x5450cf);
      _0x1bf5ae && (_0x1bf5ae.disabled = _0x5450cf, _0x1bf5ae.textContent = _0x355209 ? "补齐中..." : "竞技场补齐");
      _0x97d273 && (_0x97d273.disabled = _0x5450cf);
      _0x427ce3 && (_0x427ce3.disabled = _0x5450cf);
    }
  };
  const _0x8d4c44 = () => {
    _0x386da5.monthlyActivity = null;
    _0x386da5.monthlyFishRunning = false;
    _0x386da5.monthlyArenaRunning = false;
    _0x386da5.warguessRankData = null;
    _0x386da5.warguessRunning = false;
  };
  const _0x495aee = () => {
    const _0xdcac1e = new Date();
    const _0x4e2959 = _0xdcac1e.getDay();
    if (_0x4e2959 !== 0) {
      return false;
    }
    const _0x283342 = new Date(_0xdcac1e);
    _0x283342.setDate(_0xdcac1e.getDate() + 7);
    return _0x283342.getMonth() !== _0xdcac1e.getMonth();
  };
  const _0x24805d = () => {
    const _0x280812 = new Date();
    let _0x2da250 = _0x280812.getFullYear();
    let _0x4905fe = _0x280812.getMonth();
    const _0x48aab9 = (_0x2250b3, _0x302c4a) => {
      {
        const _0x60e9ed = new Date(_0x2250b3, _0x302c4a + 1, 0);
        const _0x19a184 = _0x60e9ed.getDay();
        const _0xd6fec8 = new Date(_0x60e9ed);
        _0xd6fec8.setDate(_0x60e9ed.getDate() - _0x19a184);
        return _0xd6fec8;
      }
    };
    let _0x109c42 = _0x48aab9(_0x2da250, _0x4905fe);
    _0x280812 > _0x109c42 && (_0x4905fe++, _0x4905fe > 11 && (_0x4905fe = 0, _0x2da250++), _0x109c42 = _0x48aab9(_0x2da250, _0x4905fe));
    return _0x109c42.getMonth() + 1 + "月" + _0x109c42.getDate() + "日 (星期日)";
  };
  const _0x365f8b = () => {
    {
      const _0x226db4 = document.getElementById("qa-warguess-status");
      const _0x1e4c09 = document.getElementById("qa-warguess-inactive");
      const _0x3b6aa3 = document.getElementById("qa-warguess-content");
      const _0x262e57 = document.getElementById("qa-warguess-next-date");
      const _0x2a4203 = document.getElementById("qa-warguess-top-legion");
      const _0x4f8eab = document.getElementById("qa-warguess-top-power");
      const _0x4c99f3 = _0x495aee();
      _0x226db4 && (_0x226db4.textContent = _0x4c99f3 ? "开放中" : "未开放", _0x226db4.className = "club-status-badge " + (_0x4c99f3 ? "success" : "warning"));
      if (_0x1e4c09) {
        _0x1e4c09.style.display = _0x4c99f3 ? "none" : "block";
      }
      if (_0x3b6aa3) {
        _0x3b6aa3.style.display = _0x4c99f3 ? "block" : "none";
      }
      _0x262e57 && !_0x4c99f3 && (_0x262e57.textContent = "下次开放：" + _0x24805d());
      const _0x22a52d = _0x386da5.warguessRankData;
      if (_0x22a52d?.["list"]?.[0]) {
        {
          const _0x3f4ca1 = _0x22a52d.list[0];
          if (_0x2a4203) {
            _0x2a4203.textContent = _0x3f4ca1.name || "--";
          }
          if (_0x4f8eab) {
            _0x4f8eab.textContent = _0x3f4ca1.power ? _0x3f4ca1.power.toLocaleString() : "--";
          }
        }
      }
    }
  };
  const _0x15253a = async () => {
    const _0x177890 = document.getElementById("qa-warguess-status");
    const _0x5c8371 = document.getElementById("qa-warguess-refresh-btn");
    if (!_0x495aee()) {
      {
        return;
      }
    }
    if (_0x5c8371) {
      _0x5c8371.disabled = true;
    }
    if (_0x177890) {
      _0x177890.textContent = "刷新中...";
    }
    try {
      {
        const _0x3d875e = {
          bfId: ""
        };
        _0x4dddd6("warguess_getrank", _0x3d875e, "月度任务-获取竞猜排名");
        const _0x3ede5b = {
          bfId: ""
        };
        const _0x549293 = await _0x361aec("warguess_getrank", _0x3ede5b, "月度任务-获取竞猜排名");
        _0x386da5.warguessRankData = _0x549293;
        if (!_0x549293?.["list"] || _0x549293.list.length === 0) {
          {
            _0x1ddb84("竞猜排名数据为空", "warning");
            return;
          }
        }
        _0x365f8b();
        const _0x3a54d2 = _0x549293.list[0];
        _0x348ea9("warguess_getrank", _0x549293, "第一名: " + _0x3a54d2.name + ", 战力: " + _0x3a54d2.power);
        _0x1ddb84("刷新竞猜排名成功 - 第一名: " + _0x3a54d2.name, "success");
      }
    } catch (_0x291eca) {
      {
        _0x1ddb84("刷新竞猜排名失败: " + _0x291eca.message, "error");
      }
    } finally {
      {
        if (_0x5c8371) {
          _0x5c8371.disabled = false;
        }
        _0x365f8b();
      }
    }
  };
  const _0x33ce67 = async () => {
    {
      const _0x600de4 = document.getElementById("qa-warguess-start-btn");
      const _0x468e9a = document.getElementById("qa-warguess-status");
      if (!_0x495aee()) {
        return;
      }
      if (!_0x386da5.warguessRankData?.["list"]?.[0]) {
        return;
      }
      const _0x2b1fcd = _0x386da5.warguessRankData.list[0];
      if (!_0x2b1fcd?.["id"]) {
        return;
      }
      _0x1ddb84("开始竞猜 - 军团: " + _0x2b1fcd.name + ", ID: " + _0x2b1fcd.id, "info");
      _0x386da5.warguessRunning = true;
      if (_0x600de4) {
        _0x600de4.disabled = true;
      }
      if (_0x468e9a) {
        _0x468e9a.textContent = "竞猜中...";
      }
      try {
        const _0x3c211c = {
          legionId: _0x2b1fcd.id,
          guessCoin: 20
        };
        _0x4dddd6("warguess_startguess", _0x3c211c, "月度任务-执行竞猜");
        const _0x5e8952 = {
          legionId: _0x2b1fcd.id,
          guessCoin: 20
        };
        await _0x361aec("warguess_startguess", _0x5e8952, "月度任务-执行竞猜");
        _0x1ddb84("竞猜成功 - 军团: " + _0x2b1fcd.name, "success");
      } catch (_0x5d1558) {
        _0x1ddb84("竞猜失败: " + _0x5d1558.message, "error");
      } finally {
        {
          _0x386da5.warguessRunning = false;
          if (_0x600de4) {
            _0x600de4.disabled = false;
          }
          _0x365f8b();
        }
      }
    }
  };
  const _0x261301 = async () => {
    const _0x335b1b = document.getElementById("qa-warguess-coin-btn");
    if (_0x335b1b) {
      _0x335b1b.disabled = true;
    }
    try {
      _0x4dddd6("warguess_getguesscoinreward", {}, "月度任务-领取竞猜币");
      await _0x361aec("warguess_getguesscoinreward", {}, "月度任务-领取竞猜币");
      _0x1ddb84("领取竞猜币成功", "success");
    } catch (_0x424d1e) {
      _0x1ddb84("领取竞猜币失败: " + _0x424d1e.message, "error");
    } finally {
      if (_0x335b1b) {
        _0x335b1b.disabled = false;
      }
    }
  };
  const _0x43e07c = () => {
    _0x365f8b();
  };
  const _0x1e11f4 = [3, 6, 9, 12];
  const _0x1810e2 = 14;
  const _0x5b7eee = {
    "1023": "彩玉",
    "1001": "招募令",
    "1022": "白玉",
    "1016": "晶石",
    "3007": "红色随机碎片",
    "3008": "精铁袋子",
    "3009": "进阶袋子",
    "3010": "梦魇袋子",
    "3011": "白玉袋子",
    "3012": "扳手",
    "3020": "聚宝盆"
  };
  const _0x392599 = {
    "1023": 500,
    "1001": 250,
    "1022": 2
  };
  const _0x52ef17 = [3012, 1016];
  const _0x3aeef1 = () => {
    const _0x29b7a1 = new Date().getDay();
    return _0x29b7a1 === 0 || _0x29b7a1 >= 3 && _0x29b7a1 <= 6;
  };
  const _0x2c8efe = _0x1145b6 => _0x1e11f4.includes(_0x1145b6);
  const _0x342ea2 = _0x327555 => {
    if (_0x327555.type === 2) {
      return "金砖";
    }
    return _0x5b7eee[_0x327555.itemId] || "物品" + _0x327555.itemId;
  };
  const _0x2c3a84 = _0x5f4920 => {
    {
      if (_0x5f4920.type === 2) {
        return true;
      }
      return _0x392599[_0x5f4920.itemId] > 0;
    }
  };
  const _0x9aee07 = _0x43f601 => {
    if (_0x43f601 >= 100000000) {
      return (_0x43f601 / 100000000).toFixed(1) + "亿";
    }
    if (_0x43f601 >= 10000) {
      return (_0x43f601 / 10000).toFixed(1) + "万";
    }
    return _0x43f601.toString();
  };
  const _0x44ad78 = _0x4921a8 => {
    {
      const _0x2f424c = _0x4921a8.map((_0x1d7275, _0x532aa8) => ({
        idx: _0x532aa8,
        reward: _0x1d7275,
        value: _0x1d7275.type === 2 ? _0x1d7275.value : (_0x392599[_0x1d7275.itemId] || 0) * _0x1d7275.value,
        isHigh: _0x1d7275.type === 2 || _0x392599[_0x1d7275.itemId] > 0,
        isSec: _0x52ef17.includes(_0x1d7275.itemId)
      }));
      const _0x38da8d = _0x2f424c.filter(_0x9e529e => _0x9e529e.isHigh).sort((_0x4f15c1, _0x2c07c0) => _0x2c07c0.value - _0x4f15c1.value);
      const _0x53c4f1 = _0x38da8d.slice(0, 5);
      const _0x13770f = () => _0x53c4f1.map(_0x5413a7 => _0x5413a7.idx);
      if (_0x53c4f1.length < 5) {
        const _0xb3c47e = _0x2f424c.filter(_0x547564 => _0x547564.isSec && !_0x13770f().includes(_0x547564.idx));
        _0x53c4f1.push(..._0xb3c47e.slice(0, 5 - _0x53c4f1.length));
      }
      if (_0x53c4f1.length < 5) {
        const _0x154d65 = _0x2f424c.filter(_0x36ba96 => !_0x13770f().includes(_0x36ba96.idx));
        _0x53c4f1.push(..._0x154d65.slice(0, 5 - _0x53c4f1.length));
      }
      return _0x53c4f1;
    }
  };
  const _0x1ab5a0 = async () => {
    {
      if (!_0x3aeef1()) {
        _0x386da5.bossTower = null;
        _0x30927d("今日非活动日（周三~周日）", "info");
        return null;
      }
      try {
        {
          _0x1ddb84("咸王宝库: 开始获取宝库信息", "info");
          const _0xb128a2 = await _0x361aec("bosstower_getinfo", {}, "咸王宝库-获取信息");
          const _0x735dba = _0xb128a2?.["bossTower"] || _0xb128a2?.["body"]?.["bossTower"];
          const _0x447784 = {
            drillCount: _0x735dba?.["boxFightCnt"] ?? 0,
            towerId: _0x735dba?.["towerId"] ?? 1,
            boxCurHp: _0x735dba?.["boxCurHp"] ?? 0,
            boxTotalHp: _0x735dba?.["boxTotalHp"] ?? 0,
            levelInfoMap: _0x735dba?.["levelInfoMap"] ?? {}
          };
          _0x386da5.bossTower = _0x447784;
          _0x1ddb84("咸王宝库: 获取成功 - 层数:" + _0x386da5.bossTower.towerId + ", 钻头:" + _0x386da5.bossTower.drillCount + ", 血量:" + _0x386da5.bossTower.boxCurHp + "/" + _0x386da5.bossTower.boxTotalHp, "success");
          return _0x386da5.bossTower;
        }
      } catch (_0x2956c7) {
        {
          _0x30927d("获取咸王宝库信息失败", "error");
          _0x1ddb84("咸王宝库: 获取信息失败 - " + _0x2956c7.message, "error");
          return null;
        }
      }
    }
  };
  const _0x23081a = () => {
    const _0x4df3ab = _0x386da5.bossTower;
    if (!_0x4df3ab) {
      return [];
    }
    const _0x22023e = _0x4df3ab.towerId;
    if (!_0x2c8efe(_0x22023e)) {
      return [];
    }
    if (_0x4df3ab.boxCurHp > 0) {
      return [];
    }
    const _0x40a0dd = String(_0x22023e);
    const _0x30ee41 = _0x4df3ab.levelInfoMap?.[_0x40a0dd];
    return _0x30ee41?.["rewardList"] || [];
  };
  const _0x596d3d = () => {
    {
      const _0x46ef3d = _0x386da5.bossTower || {};
      const _0x50e444 = _0x3aeef1();
      const _0x2c5d96 = document.getElementById("qa-bosstower-status");
      if (_0x2c5d96) {
        if (!_0x50e444) {
          _0x2c5d96.textContent = "非活动日";
          _0x2c5d96.className = "club-status-badge";
        } else {
          if (_0x46ef3d.towerId >= _0x1810e2 && _0x46ef3d.boxCurHp === 0) {
            _0x2c5d96.textContent = "已通关";
            _0x2c5d96.className = "club-status-badge success";
          } else {
            if (_0x23081a().length > 0) {
              _0x2c5d96.textContent = "待领奖";
              _0x2c5d96.className = "club-status-badge warning";
            } else {
              _0x46ef3d.drillCount > 0 ? (_0x2c5d96.textContent = "可攻打", _0x2c5d96.className = "club-status-badge success") : (_0x2c5d96.textContent = "已完成", _0x2c5d96.className = "club-status-badge");
            }
          }
        }
      }
      const _0x41c4c4 = document.getElementById("qa-bosstower-floor");
      _0x41c4c4 && (_0x41c4c4.textContent = "第 " + (_0x46ef3d.towerId || 1) + " 层");
      const _0x35f805 = document.getElementById("qa-bosstower-drill");
      if (_0x35f805) {
        {
          _0x35f805.textContent = (_0x46ef3d.drillCount || 0) + " / 10";
        }
      }
      const _0x10d21a = document.getElementById("qa-bosstower-door");
      if (_0x10d21a) {
        {
          const _0x59f396 = _0x46ef3d.towerId || 1;
          const _0x3e9595 = _0x59f396 >= _0x1810e2 && _0x46ef3d.boxCurHp === 0;
          const _0x192af4 = _0x2c8efe(_0x59f396);
          const _0x477706 = _0x23081a().length > 0;
          if (_0x3e9595) {
            _0x10d21a.textContent = "已通关";
          } else {
            if (!_0x192af4) {
              {
                _0x10d21a.textContent = "需先升层";
              }
            } else {
              if (_0x46ef3d.boxCurHp > 0) {
                _0x10d21a.textContent = "攻打中 (剩余: " + _0x9aee07(_0x46ef3d.boxCurHp) + ")";
              } else {
                if (_0x477706) {
                  {
                    _0x10d21a.textContent = "待领奖";
                  }
                } else {
                  {
                    _0x10d21a.textContent = "未开启";
                  }
                }
              }
            }
          }
        }
      }
      const _0xd0f07b = document.getElementById("qa-bosstower-rewards");
      if (_0xd0f07b) {
        {
          const _0x174b2a = _0x23081a();
          if (_0x174b2a.length > 0) {
            const _0x5eca40 = _0x44ad78(_0x174b2a).sort((_0x4d8ed1, _0x200b8d) => _0x200b8d.value - _0x4d8ed1.value);
            _0xd0f07b.innerHTML = "\n        <div class=\"helper-text\" style=\"margin-bottom:6px;\">将领取的奖励 (" + _0x5eca40.length + "个)</div>\n        <div class=\"reward-list\">\n          " + _0x5eca40.map(_0x25d731 => "\n            <span class=\"reward-item " + (_0x2c3a84(_0x25d731.reward) ? "valuable" : "") + "\">\n              " + _0x342ea2(_0x25d731.reward) + "x" + _0x25d731.reward.value + "\n            </span>\n          ").join("") + "\n        </div>\n      ";
            _0xd0f07b.style.display = "block";
          } else {
            _0xd0f07b.style.display = "none";
          }
        }
      }
      const _0x9e4c8a = document.getElementById("qa-bosstower-action-btn");
      if (_0x9e4c8a) {
        {
          const _0x394d55 = _0x46ef3d.towerId || 1;
          const _0x5855b8 = _0x394d55 >= _0x1810e2 && _0x46ef3d.boxCurHp === 0;
          const _0xd13e5b = _0x23081a().length > 0;
          const _0x549fd2 = _0x2c8efe(_0x394d55);
          if (_0x386da5.bossTowerRunning) {
            {
              _0x9e4c8a.textContent = "执行中...";
              _0x9e4c8a.disabled = true;
            }
          } else {
            if (_0x5855b8) {
              {
                _0x9e4c8a.textContent = "已通关";
                _0x9e4c8a.disabled = true;
              }
            } else {
              if (_0xd13e5b) {
                _0x9e4c8a.textContent = "领取奖励";
                _0x9e4c8a.disabled = false;
              } else {
                if (!_0x549fd2) {
                  _0x9e4c8a.textContent = "攻打Boss";
                  _0x9e4c8a.disabled = _0x46ef3d.drillCount <= 0 && _0x46ef3d.boxCurHp === 0;
                } else {
                  if (_0x46ef3d.boxCurHp > 0) {
                    _0x9e4c8a.textContent = "继续攻打";
                    _0x9e4c8a.disabled = false;
                  } else {
                    _0x46ef3d.drillCount > 0 ? (_0x9e4c8a.textContent = "攻打门", _0x9e4c8a.disabled = false) : (_0x9e4c8a.textContent = "已完成", _0x9e4c8a.disabled = true);
                  }
                }
              }
            }
          }
        }
      }
      const _0x451944 = document.getElementById("qa-bosstower-content");
      const _0x52b7d6 = document.getElementById("qa-bosstower-inactive");
      _0x451944 && _0x52b7d6 && (_0x50e444 ? (_0x451944.style.display = "block", _0x52b7d6.style.display = "none") : (_0x451944.style.display = "none", _0x52b7d6.style.display = "block"));
    }
  };
  const _0x44c75d = async () => {
    if (!_0x3aeef1()) {
      _0x386da5.bossTower = null;
      _0x596d3d();
      return;
    }
    const _0x88e021 = document.getElementById("qa-bosstower-status");
    if (_0x88e021) {
      _0x88e021.textContent = "刷新中...";
    }
    const _0x58dd26 = await _0x1ab5a0();
    _0x596d3d();
    if (!_0x58dd26) {
      {
        _0x30927d("未获取到宝库数据", "warning");
        return;
      }
    }
    if (_0x23081a().length > 0) {
      {
        _0x30927d("有待领取的奖励", "info");
      }
    } else {
      _0x30927d("刷新成功", "success");
    }
  };
  const _0x2c51eb = async () => {
    {
      const _0x374577 = _0x386da5.bossTower;
      if (!_0x374577) {
        {
          _0x30927d("未获取到宝库数据", "warning");
          return;
        }
      }
      const _0x3dae4e = _0x374577.towerId || 1;
      const _0x5339b4 = _0x3dae4e >= _0x1810e2 && _0x374577.boxCurHp === 0;
      if (_0x5339b4) {
        {
          _0x30927d("已通关咸王宝库", "success");
          return;
        }
      }
      const _0x463473 = _0x23081a();
      if (_0x463473.length > 0) {
        {
          _0x1ddb84("咸王宝库: 检测到" + _0x463473.length + "个待领取奖励，开始领取", "info");
          await _0x3d0cf2(_0x463473);
          return;
        }
      }
      if (_0x374577.boxCurHp === 0 && _0x374577.drillCount <= 0) {
        {
          _0x30927d("钻头不足", "warning");
          return;
        }
      }
      _0x386da5.bossTowerRunning = true;
      _0x596d3d();
      _0x1ddb84("咸王宝库: 开始执行 - 当前层数:" + _0x3dae4e + ", 钻头:" + _0x374577.drillCount, "info");
      try {
        const _0x132370 = _0x2f091b => {
          {
            for (const _0x18c849 of _0x1e11f4) {
              {
                if (_0x18c849 > _0x2f091b) {
                  return _0x18c849;
                }
              }
            }
            return _0x1810e2;
          }
        };
        let _0x41006d = _0x374577.towerId;
        let _0x3a7405 = _0x374577.boxCurHp;
        if (!_0x2c8efe(_0x41006d)) {
          const _0x4ad14f = _0x132370(_0x41006d);
          _0x1ddb84("咸王宝库: 阶段1 - 攻打Boss升层至第" + _0x4ad14f + "层门", "info");
          while (_0x41006d < _0x4ad14f && _0x41006d < _0x1810e2) {
            {
              _0x1ddb84("咸王宝库: 攻打Boss - 当前第" + _0x41006d + "层", "info");
              const _0x9e463f = await _0x361aec("bosstower_startboss", {}, "咸王宝库-攻打Boss");
              const _0x5a6727 = _0x9e463f?.["bossTower"] || _0x9e463f?.["body"]?.["bossTower"];
              const _0x2927b2 = _0x5a6727?.["towerId"] ?? _0x41006d;
              _0x41006d = _0x2927b2;
              _0x3a7405 = _0x5a6727?.["boxCurHp"] ?? 0;
              _0x386da5.bossTower.towerId = _0x2927b2;
              _0x386da5.bossTower.boxCurHp = _0x3a7405;
              _0x386da5.bossTower.drillCount = _0x5a6727?.["boxFightCnt"] ?? _0x386da5.bossTower.drillCount;
              _0x386da5.bossTower.levelInfoMap = _0x5a6727?.["levelInfoMap"] ?? _0x386da5.bossTower.levelInfoMap;
              _0x1ddb84("咸王宝库: Boss击败 - 升至第" + _0x2927b2 + "层", "success");
              _0x596d3d();
              await _0x186d8b(1500);
              _0x41006d < _0x4ad14f;
            }
          }
          if (_0x1e11f4.includes(_0x41006d)) {
            _0x30927d("已到达第" + _0x41006d + "层门", "info");
            _0x1ddb84("咸王宝库: 到达第" + _0x41006d + "层门", "info");
          } else {
            if (_0x41006d >= _0x1810e2) {
              _0x1ddb84("咸王宝库: 已到达最大层数", "info");
              await _0x1ab5a0();
              _0x596d3d();
              return;
            }
          }
        }
        if (_0x2c8efe(_0x41006d)) {
          _0x1ddb84("咸王宝库: 阶段2 - 攻打第" + _0x41006d + "层门", "info");
          let _0x381e5e = _0x3a7405 > 0 ? _0x3a7405 : 1;
          let _0x361002 = [];
          let _0x107774 = 0;
          const _0xbcf115 = String(_0x41006d);
          while (_0x381e5e > 0 && _0x107774 < 20) {
            _0x1ddb84("咸王宝库: 攻打门 - 第" + (_0x107774 + 1) + "次，剩余血量:" + _0x381e5e, "info");
            const _0x2dd333 = await _0x361aec("bosstower_startbox", {}, "咸王宝库-攻打门");
            _0x107774++;
            const _0x5f02ba = _0x2dd333?.["bossTower"] || _0x2dd333?.["body"]?.["bossTower"];
            _0x381e5e = _0x5f02ba?.["boxCurHp"] ?? 0;
            _0x386da5.bossTower.boxCurHp = _0x381e5e;
            _0x386da5.bossTower.drillCount = _0x5f02ba?.["boxFightCnt"] ?? _0x386da5.bossTower.drillCount;
            _0x386da5.bossTower.levelInfoMap = _0x5f02ba?.["levelInfoMap"] ?? _0x386da5.bossTower.levelInfoMap;
            if (_0x381e5e === 0 && _0x5f02ba?.["levelInfoMap"]?.[_0xbcf115]?.["rewardList"]) {
              {
                _0x361002 = _0x5f02ba.levelInfoMap[_0xbcf115].rewardList;
                _0x1ddb84("咸王宝库: 门已击破，获得" + _0x361002.length + "个奖励选项", "success");
              }
            }
            _0x596d3d();
            await _0x186d8b(1500);
          }
          if (_0x361002.length === 0) {
            _0x1ddb84("咸王宝库: 未获取到奖励列表", "warning");
            await _0x1ab5a0();
            _0x596d3d();
            return;
          }
          _0x1ddb84("咸王宝库: 阶段3 - 选择并领取奖励", "info");
          await _0x3d0cf2(_0x361002);
        }
        await _0x1ab5a0();
        _0x596d3d();
        _0x1ddb84("咸王宝库: 执行完成", "success");
      } catch (_0x4609f5) {
        _0x1ddb84("咸王宝库: 执行异常 - " + _0x4609f5.message, "error");
      } finally {
        {
          _0x386da5.bossTowerRunning = false;
          _0x596d3d();
        }
      }
    }
  };
  const _0x3d0cf2 = async _0x39eabf => {
    const _0x35269a = _0x44ad78(_0x39eabf);
    const _0x81f74a = _0x35269a.map(_0xbf09b9 => _0x342ea2(_0xbf09b9.reward) + "x" + _0xbf09b9.reward.value);
    _0x1ddb84("咸王宝库: 开始领取奖励 - 共" + _0x35269a.length + "个: " + _0x81f74a.join("、"), "info");
    const _0x4cdd58 = [];
    for (const _0x59e47d of _0x35269a) {
      {
        try {
          {
            _0x1ddb84("咸王宝库: 领取奖励 - " + _0x342ea2(_0x59e47d.reward) + "x" + _0x59e47d.reward.value, "info");
            const _0xc447a5 = {
              idx: _0x59e47d.idx
            };
            await _0x361aec("bosstower_claimreward", _0xc447a5, "咸王宝库-领取奖励");
            _0x4cdd58.push(_0x342ea2(_0x59e47d.reward) + "x" + _0x59e47d.reward.value);
            await _0x186d8b(500);
          }
        } catch (_0x4aad9a) {
          _0x1ddb84("咸王宝库: 领取奖励失败 - " + _0x342ea2(_0x59e47d.reward) + "x" + _0x59e47d.reward.value + ": " + _0x4aad9a.message, "error");
        }
      }
    }
    if (_0x4cdd58.length > 0) {
      {
        _0x30927d("领取奖励成功: " + _0x4cdd58.join("、"), "success");
      }
    }
    await _0x1ab5a0();
    _0x596d3d();
  };
  const _0x42e503 = () => {
    _0x386da5.bossTower = null;
    _0x386da5.bossTowerRunning = false;
  };
  const _0x475a52 = {
    "1": "BOSS 1",
    "2": "BOSS 2",
    "3": "BOSS 3",
    "4": "BOSS 4",
    "5": "BOSS 5",
    "6": "BOSS 6"
  };
  const _0x1f2027 = () => {
    const _0x219a16 = new Date().getDay();
    const _0x254547 = {
      "5": [1],
      "6": [2],
      "0": [3],
      "1": [4],
      "2": [5],
      "3": [6],
      "4": [1, 2, 3, 4, 5, 6]
    };
    return _0x254547[_0x219a16] || [];
  };
  const _0x16686e = () => {
    const _0x2ac2a9 = new Date().getHours();
    return _0x2ac2a9 >= 8 && _0x2ac2a9 < 20;
  };
  const _0x469f98 = _0x53fdc8 => {
    {
      if (!_0x53fdc8) {
        return "0";
      }
      if (_0x53fdc8 >= 1000000000000) {
        return (_0x53fdc8 / 1000000000000).toFixed(2) + "万亿";
      }
      if (_0x53fdc8 >= 100000000) {
        return (_0x53fdc8 / 100000000).toFixed(2) + "亿";
      }
      if (_0x53fdc8 >= 10000) {
        return (_0x53fdc8 / 10000).toFixed(2) + "万";
      }
      return _0x53fdc8.toString();
    }
  };
  let _0x49db9a = null;
  let _0x5813bd = null;
  let _0x1ab60c = false;
  let _0x3df86e = 0;
  const _0x38af51 = 10;
  let _0x5a4d3a = null;
  let _0x5e0801 = 0;
  let _0x268f26 = null;
  let _0x4efb15 = false;
  let _0x1cba4d = false;
  let _0x2087a0 = 0;
  const _0x102448 = () => {
    {
      const _0x130261 = document.getElementById("qa-skin-towers-status");
      const _0x4976f5 = document.getElementById("qa-skin-towers-count");
      const _0x5e05dd = document.getElementById("qa-skin-towers-boss-hint");
      const _0x42e10e = document.getElementById("qa-skin-towers-grid");
      if (_0x130261) {
        if (!_0x16686e()) {
          _0x130261.textContent = "非活动时间(8-20点)";
          _0x130261.className = "club-status-badge warning";
        } else {
          if (_0x5813bd) {
            _0x130261.textContent = "挑战BOSS" + _0x5813bd + "中";
            _0x130261.className = "club-status-badge active";
          } else {
            if (_0x4efb15) {
              {
                _0x130261.textContent = "抽奖中";
                _0x130261.className = "club-status-badge active";
              }
            } else {
              _0x49db9a ? (_0x130261.textContent = "第" + (_0x49db9a.season || 1) + "赛季", _0x130261.className = "club-status-badge") : (_0x130261.textContent = "未加载", _0x130261.className = "club-status-badge");
            }
          }
        }
      }
      _0x4976f5 && (_0x4976f5.textContent = _0x3df86e + " / " + _0x38af51, _0x4976f5.style.color = _0x3df86e >= _0x38af51 ? "#ef4444" : "");
      if (_0x5e05dd) {
        {
          const _0x12f52c = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
          const _0x1c348c = new Date().getDay();
          const _0x44b90c = _0x1f2027();
          _0x5e05dd.textContent = _0x44b90c.length === 6 ? _0x12f52c[_0x1c348c] + " - 全部BOSS" : _0x12f52c[_0x1c348c] + " - BOSS " + _0x44b90c.join(", ");
        }
      }
      if (_0x42e10e && _0x49db9a?.["towerData"]) {
        const _0x36e8fa = _0x1f2027();
        let _0x454b4c = "";
        for (let _0xa8a558 = 1; _0xa8a558 <= 6; _0xa8a558++) {
          {
            const _0xb90649 = _0x49db9a.towerData[_0xa8a558] || {};
            const _0x147573 = _0x36e8fa.includes(_0xa8a558);
            const _0xe87e5f = _0xb90649.pass;
            const _0x5e4d55 = _0x5813bd === _0xa8a558;
            const _0x2d1b93 = _0x147573 && !_0xe87e5f && !_0x5813bd && _0x3df86e < _0x38af51 && _0x16686e();
            _0x454b4c += "\n        <div class=\"skin-tower-item " + (_0xe87e5f ? "passed" : "") + " " + (_0x5e4d55 ? "fighting" : "") + " " + (!_0x147573 ? "disabled" : "") + "\">\n          <div class=\"tower-name\">" + _0x475a52[_0xa8a558] + "</div>\n          <div class=\"tower-level\">第 " + (_0xb90649.actTowerLv || 1) + " 层</div>\n          <div class=\"tower-score\">" + _0x469f98(_0xb90649.towerScore) + "</div>\n          <div class=\"tower-status\">\n            " + (_0xe87e5f ? "<span style=\"color:#22c55e\">已通关</span>" : _0x5e4d55 ? "<span style=\"color:#eab308\">挑战中</span>" : !_0x147573 ? "<span style=\"color:#9ca3af\">未开放</span>" : "<span style=\"color:#6b7280\">进行中</span>") + "\n          </div>\n          <button class=\"btn btn-sm " + (_0x5e4d55 ? "btn-danger" : "btn-primary") + "\"\n                  data-action=\"" + (_0x5e4d55 ? "skin-towers-stop" : "skin-towers-challenge") + "\"\n                  data-boss=\"" + _0xa8a558 + "\"\n                  " + (!_0x2d1b93 && !_0x5e4d55 ? "disabled" : "") + ">\n            " + (_0x5e4d55 ? "停止" : "挑战") + "\n          </button>\n        </div>";
          }
        }
        _0x42e10e.innerHTML = _0x454b4c;
      }
      const _0x3704b0 = document.getElementById("qa-skin-lottery-count");
      const _0x418353 = document.getElementById("qa-skin-lottery-actid");
      const _0x192b81 = document.getElementById("qa-skin-lottery-status");
      const _0x37ebfd = document.getElementById("qa-skin-lottery-start");
      const _0x2c25f7 = document.getElementById("qa-skin-lottery-stop");
      const _0xadbad8 = document.getElementById("qa-skin-lottery-refresh");
      if (_0x3704b0) {
        {
          _0x3704b0.textContent = _0x5e0801 + " 个";
          _0x3704b0.style.color = _0x5e0801 > 0 ? "#22c55e" : "";
        }
      }
      _0x418353 && (_0x418353.textContent = _0x5a4d3a ? "活动ID: " + _0x5a4d3a : "未获取");
      if (_0x192b81) {
        {
          _0x4efb15 ? (_0x192b81.textContent = "抽奖中... 已完成 " + _0x2087a0 + " 次", _0x192b81.style.color = "#eab308") : _0x192b81.textContent = "";
        }
      }
      _0x37ebfd && (_0x37ebfd.style.display = _0x4efb15 ? "none" : "", _0x37ebfd.disabled = !_0x5a4d3a || _0x5e0801 <= 0);
      _0x2c25f7 && (_0x2c25f7.style.display = _0x4efb15 ? "" : "none");
      _0xadbad8 && (_0xadbad8.disabled = _0x4efb15 || !_0x5a4d3a);
    }
  };
  const _0x46a5a5 = async () => {
    {
      try {
        {
          const _0x505747 = await _0x361aec("towers_getinfo", {}, "换皮闯关-获取信息");
          _0x49db9a = _0x505747?.["towerData"] || _0x505747;
          _0x49db9a?.["todayUseTickCnt"] !== undefined && (_0x3df86e = _0x49db9a.todayUseTickCnt, _0x1e6f53("towers_getinfo响应", "todayUseTickCnt", _0x3df86e));
          if (_0x49db9a?.["actId"]) {
            {
              _0x5a4d3a = _0x49db9a.actId + 1;
              _0x1e6f53("towers_getinfo响应", "actId", _0x49db9a.actId + " (抽奖ID: " + _0x5a4d3a + ")");
            }
          }
          _0x102448();
          _0x30927d("获取换皮闯关信息成功", "success");
          return _0x49db9a;
        }
      } catch (_0x40b6d0) {
        _0x30927d("获取换皮闯关信息失败: " + _0x40b6d0.message, "error");
        return null;
      }
    }
  };
  const _0x29cd5a = () => {
    {
      _0x1ab60c = true;
    }
  };
  const _0x1f53a9 = _0x2008c0 => {
    {
      const _0x24763a = {
        isVictory: false
      };
      if (!_0x2008c0?.["result"]) {
        return _0x24763a;
      }
      const _0x36a661 = _0x2008c0.result.isWin;
      const _0x1caf81 = _0x2008c0.result.sponsor?.["ext"]?.["curHP"] ?? 0;
      return {
        isVictory: _0x36a661 !== undefined ? _0x36a661 : _0x1caf81 > 0,
        myHp: _0x1caf81
      };
    }
  };
  const _0x1b2816 = async _0x984866 => {
    if (!_0x16686e()) {
      {
        _0x30927d("非活动时间（8:00-20:00）", "warning");
        return;
      }
    }
    if (!_0x1f2027().includes(_0x984866)) {
      {
        _0x30927d("BOSS" + _0x984866 + "今日未开放", "warning");
        return;
      }
    }
    if (_0x3df86e >= _0x38af51) {
      _0x30927d("今日挑战次数已用完", "warning");
      return;
    }
    if (_0x5813bd) {
      {
        _0x30927d("已有挑战进行中", "warning");
        return;
      }
    }
    _0x5813bd = _0x984866;
    _0x1ab60c = false;
    _0x102448();
    let _0x353b45 = 0;
    let _0x2f31fa = 0;
    const _0x1e15c2 = 100;
    try {
      {
        for (let _0x439694 = 0; _0x439694 < _0x1e15c2; _0x439694++) {
          if (_0x1ab60c) {
            break;
          }
          let _0x3b50d5;
          try {
            {
              _0x3b50d5 = await _0x361aec("towers_getinfo", {}, "换皮闯关-BOSS" + _0x984866 + "-状态查询");
            }
          } catch (_0x531278) {}
          const _0x2724d1 = _0x3b50d5?.["towerData"]?.["towerData"]?.[_0x984866];
          _0x3b50d5?.["towerData"]?.["todayUseTickCnt"] !== undefined && (_0x3df86e = _0x3b50d5.towerData.todayUseTickCnt, _0x1e6f53("towers_getinfo响应", "todayUseTickCnt", _0x3df86e));
          if (_0x3b50d5?.["towerData"]) {
            _0x49db9a = _0x3b50d5.towerData;
          }
          if (_0x3df86e >= _0x38af51) {
            break;
          }
          if (_0x2724d1?.["pass"]) {
            break;
          }
          const _0x3eb71d = _0x2724d1?.["fighting"] === true;
          const _0xf8e4f = _0x2724d1?.["actTowerLv"] || 1;
          if (!_0x3eb71d) {
            try {
              const _0x29790b = {
                towerType: _0x984866
              };
              const _0x1ee060 = await _0x361aec("towers_start", _0x29790b, "换皮闯关-BOSS" + _0x984866 + "-开始挑战");
              if (_0x1ee060?.["towerData"]?.["todayUseTickCnt"] !== undefined) {
                {
                  _0x3df86e = _0x1ee060.towerData.todayUseTickCnt;
                  _0x1e6f53("towers_start响应", "todayUseTickCnt", _0x3df86e);
                }
              }
              if (_0x1ee060?.["towerData"]?.["towerData"]?.[_0x984866]?.["pass"]) {
                {
                  _0x1e6f53("towers_start响应", "towerData[" + _0x984866 + "].pass", true);
                  break;
                }
              }
            } catch (_0x52c36c) {
              await _0x186d8b(2000);
              continue;
            }
          }
          let _0x8ac14e = false;
          let _0x196385 = 0;
          const _0xbf1854 = 3;
          while (!_0x8ac14e && _0x196385 < _0xbf1854 && !_0x1ab60c) {
            {
              let _0xd1cb25;
              try {
                const _0x500955 = {
                  towerType: _0x984866
                };
                _0xd1cb25 = await _0x361aec("towers_fight", _0x500955, "换皮闯关-BOSS" + _0x984866 + "-战斗(第" + (_0x196385 + 1) + "次)");
              } catch (_0x50839c) {
                _0x196385++;
                await _0x186d8b(2000);
                continue;
              }
              if (_0xd1cb25?.["towerData"]?.["todayUseTickCnt"] !== undefined) {
                {
                  _0x3df86e = _0xd1cb25.towerData.todayUseTickCnt;
                  _0x1e6f53("towers_fight响应", "todayUseTickCnt", _0x3df86e);
                }
              }
              const {
                isVictory: _0x52984b,
                myHp: _0x464552
              } = _0x1f53a9(_0xd1cb25?.["battleData"]);
              const _0x54dc42 = {
                isVictory: _0x52984b,
                myHp: _0x464552
              };
              _0x1e6f53("towers_fight响应", "battleData.result", _0x54dc42);
              if (_0x52984b) {
                _0x353b45++;
                _0x2f31fa = 0;
                _0x8ac14e = true;
                if (_0xd1cb25?.["towerData"]?.["pass"]) {
                  _0x1e6f53("towers_fight响应", "towerData.pass", true);
                  break;
                }
                await _0x186d8b(1500);
              } else {
                {
                  _0x2f31fa++;
                  _0x8ac14e = true;
                  if (_0x2f31fa >= 3) {
                    {
                      break;
                    }
                  }
                  await _0x186d8b(2000);
                }
              }
            }
          }
          if (!_0x8ac14e) {
            continue;
          }
          _0x102448();
        }
      }
    } catch (_0x563ef5) {
      _0x30927d("挑战BOSS" + _0x984866 + "失败: " + _0x563ef5.message, "error");
    } finally {
      _0x5813bd = null;
      _0x1ab60c = false;
      await _0x46a5a5();
      _0x353b45 > 0 && _0x30927d("BOSS" + _0x984866 + "挑战完成，胜利" + _0x353b45 + "次", "success");
    }
  };
  const _0x51bce2 = async () => {
    if (!_0x5a4d3a) {
      _0x30927d("请先刷新进度获取活动ID", "warning");
      return;
    }
    try {
      if (!_0x268f26) {
        const _0x3e4db6 = {
          actId: _0x5a4d3a
        };
        const _0x421c16 = await _0x361aec("activity_startactegame", _0x3e4db6, "换皮闯关-抽奖-获取道具ID");
        const _0x5eb563 = _0x421c16?.["role"]?.["items"];
        if (_0x5eb563) {
          {
            const _0x5cede6 = Object.keys(_0x5eb563);
            if (_0x5cede6.length > 0) {
              _0x268f26 = Number(_0x5cede6[0]);
              _0x5e0801 = _0x16e7d2(_0x5eb563, _0x268f26);
              const _0x19e126 = {
                lotteryItemId: _0x268f26,
                lotteryItemCount: _0x5e0801
              };
              _0x1e6f53("activity_startactegame响应", "role.items", _0x19e126);
            }
          }
        }
      } else {
        const _0x45c833 = await _0x361aec("role_getroleinfo", {}, "换皮闯关-抽奖-查询道具数量");
        const _0x5958e8 = _0x45c833?.["role"]?.["items"];
        const _0x49cb6b = _0x209bab(_0x5958e8, _0x268f26);
        _0x49cb6b ? (_0x5e0801 = _0x49cb6b.quantity || 0, _0x1e6f53("role_getroleinfo响应", "role.items[" + _0x268f26 + "].quantity", _0x5e0801)) : (_0x5e0801 = 0, _0x1e6f53("role_getroleinfo响应", "role.items[" + _0x268f26 + "]", "不存在"));
      }
      _0x102448();
      _0x30927d("抽奖道具: " + _0x5e0801 + " 个", "success");
    } catch (_0x3cc0c4) {
      _0x30927d("获取抽奖道具失败: " + _0x3cc0c4.message, "error");
    }
  };
  const _0x59a16c = async () => {
    {
      if (!_0x5a4d3a) {
        _0x30927d("请先刷新进度获取活动ID", "warning");
        return;
      }
      if (_0x4efb15) {
        {
          _0x30927d("抽奖进行中", "warning");
          return;
        }
      }
      if (!_0x268f26) {
        try {
          const _0x2afc67 = {
            actId: _0x5a4d3a
          };
          const _0x2964bd = await _0x361aec("activity_startactegame", _0x2afc67, "换皮闯关-抽奖-首次获取道具ID");
          const _0x4c194b = _0x2964bd?.["role"]?.["items"];
          if (_0x4c194b) {
            const _0x1f702a = Object.keys(_0x4c194b);
            if (_0x1f702a.length > 0) {
              {
                _0x268f26 = Number(_0x1f702a[0]);
                _0x5e0801 = _0x16e7d2(_0x4c194b, _0x268f26);
                const _0x5dc036 = {
                  lotteryItemId: _0x268f26,
                  lotteryItemCount: _0x5e0801
                };
                _0x1e6f53("activity_startactegame响应", "role.items", _0x5dc036);
              }
            }
          }
          _0x2087a0 = 1;
          _0x30927d("首次抽奖完成，已获取道具信息", "success");
        } catch (_0x444b4f) {
          _0x30927d("获取道具信息失败: " + _0x444b4f.message, "error");
          return;
        }
      } else {
        _0x2087a0 = 0;
      }
      _0x4efb15 = true;
      _0x1cba4d = false;
      _0x102448();
      try {
        while (!_0x1cba4d) {
          while (_0x5e0801 > 0 && !_0x1cba4d) {
            {
              try {
                const _0x25fca9 = {
                  actId: _0x5a4d3a
                };
                await _0x361aec("activity_startactegame", _0x25fca9, "换皮闯关-抽奖-第" + (_0x2087a0 + 1) + "次");
                _0x5e0801--;
                _0x2087a0++;
                _0x102448();
                await _0x186d8b(500);
              } catch (_0x11b266) {
                _0x30927d("抽奖失败: " + _0x11b266.message, "error");
                await _0x186d8b(1000);
              }
            }
          }
          if (_0x1cba4d) {
            break;
          }
          try {
            const _0x3f309c = {
              actId: _0x5a4d3a
            };
            const _0x1a0910 = await _0x361aec("activity_actegamestageclaim", _0x3f309c, "换皮闯关-抽奖-领取节点奖励");
            const _0x4eee3a = _0x1a0910?.["role"]?.["items"];
            const _0x48c317 = _0x16e7d2(_0x4eee3a, _0x268f26);
            if (_0x4eee3a && _0x268f26 && _0x48c317 > 0) {
              _0x5e0801 = _0x48c317;
              _0x1e6f53("activity_actegamestageclaim响应", "role.items[" + _0x268f26 + "].quantity", _0x5e0801);
              _0x30927d("领取节点奖励成功，获得 " + _0x5e0801 + " 个道具", "success");
              _0x102448();
              await _0x186d8b(500);
            } else {
              _0x1e6f53("activity_actegamestageclaim响应", "节点奖励", "无更多道具");
              break;
            }
          } catch (_0x5dd8f3) {
            {
              break;
            }
          }
        }
        _0x1cba4d ? _0x30927d("已停止抽奖，共完成 " + _0x2087a0 + " 次", "info") : _0x30927d("抽奖完成，共完成 " + _0x2087a0 + " 次", "success");
      } catch (_0x520884) {
        _0x30927d("抽奖出错: " + _0x520884.message, "error");
      } finally {
        _0x4efb15 = false;
        _0x102448();
      }
    }
  };
  const _0x29bedc = () => {
    {
      _0x1cba4d = true;
      _0x30927d("正在停止抽奖...", "info");
    }
  };
  const _0x516a65 = {
    __proto__: null,
    fetchLotteryInfo: _0x51bce2,
    fetchSkinTowersInfo: _0x46a5a5,
    startLottery: _0x59a16c,
    startSkinTowersChallenge: _0x1b2816,
    stopLottery: _0x29bedc,
    stopSkinTowersChallenge: _0x29cd5a,
    updateSkinTowersUI: _0x102448
  };
  var _0x50fc5b = Object.freeze(_0x516a65);
  let _0x425d86 = null;
  const _0x2ab513 = (_0x34cbe2, _0x52d5dd, _0x35b357) => {
    {
      const _0x5784c6 = _0x35b357.map((_0x3a0977, _0x47486e) => "<button class=\"qa-modal-btn qa-modal-btn-" + (_0x3a0977.type || "default") + "\" data-btn-idx=\"" + _0x47486e + "\">" + _0x3a0977.label + "</button>").join("");
      return "\n    <div class=\"qa-modal-backdrop\">\n      <div class=\"qa-modal-container\">\n        <div class=\"qa-modal-header\">\n          <h3 class=\"qa-modal-title\">" + _0x34cbe2 + "</h3>\n          <button class=\"qa-modal-close\" aria-label=\"关闭\">&times;</button>\n        </div>\n        <div class=\"qa-modal-body\">" + _0x52d5dd + "</div>\n        <div class=\"qa-modal-footer\">" + _0x5784c6 + "</div>\n      </div>\n    </div>\n  ";
    }
  };
  const _0x483d42 = (_0x33cf2e, _0x2443a2, _0x359c97 = []) => {
    _0x425d86 && _0x2bff35();
    const _0x2fbdd1 = document.createElement("div");
    _0x2fbdd1.innerHTML = _0x2ab513(_0x33cf2e, _0x2443a2, _0x359c97);
    const _0x4e69b3 = _0x2fbdd1.firstElementChild;
    document.body.appendChild(_0x4e69b3);
    _0x425d86 = _0x4e69b3;
    _0x57ddce();
    _0x4e69b3.querySelector(".qa-modal-container");
    const _0x3a7b8c = _0x4e69b3.querySelector(".qa-modal-close");
    _0x3a7b8c.addEventListener("click", _0x2bff35);
    _0x4e69b3.addEventListener("click", _0x2f4ef8 => {
      {
        if (_0x2f4ef8.target === _0x4e69b3) {
          {
            _0x2bff35();
          }
        }
      }
    });
    const _0x2059dd = _0x13d82a => {
      _0x13d82a.key === "Escape" && (_0x2bff35(), document.removeEventListener("keydown", _0x2059dd));
    };
    document.addEventListener("keydown", _0x2059dd);
    _0x359c97.forEach((_0x17daee, _0x30e3b6) => {
      const _0x3cba5f = _0x4e69b3.querySelector("[data-btn-idx=\"" + _0x30e3b6 + "\"]");
      _0x3cba5f && _0x17daee.onClick && _0x3cba5f.addEventListener("click", () => {
        _0x17daee.onClick();
        if (_0x17daee.closeOnClick !== false) {
          {
            _0x2bff35();
          }
        }
      });
    });
    requestAnimationFrame(() => {
      {
        _0x4e69b3.classList.add("qa-modal-show");
      }
    });
  };
  const _0x2bff35 = () => {
    {
      if (!_0x425d86) {
        return;
      }
      _0x425d86.classList.remove("qa-modal-show");
      setTimeout(() => {
        if (_0x425d86 && _0x425d86.parentNode) {
          {
            _0x425d86.parentNode.removeChild(_0x425d86);
          }
        }
        _0x425d86 = null;
      }, 300);
    }
  };
  let _0x395ee6 = false;
  const _0x57ddce = () => {
    if (_0x395ee6) {
      return;
    }
    _0x395ee6 = true;
    const _0x4b26a3 = document.createElement("style");
    _0x4b26a3.textContent = "\n    .qa-modal-backdrop {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: rgba(0, 0, 0, 0.5);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 10000;\n      opacity: 0;\n      transition: opacity 0.3s ease;\n    }\n    .qa-modal-backdrop.qa-modal-show {\n      opacity: 1;\n    }\n    .qa-modal-container {\n      background: var(--card-bg, #fff);\n      border-radius: 12px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n      max-width: 500px;\n      width: 90%;\n      max-height: 80vh;\n      display: flex;\n      flex-direction: column;\n      transform: scale(0.9);\n      transition: transform 0.3s ease;\n    }\n    .qa-modal-show .qa-modal-container {\n      transform: scale(1);\n    }\n    .qa-modal-header {\n      padding: 16px 20px;\n      border-bottom: 1px solid var(--border-color, #e5e5e5);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .qa-modal-title {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: var(--text-primary, #000);\n    }\n    .qa-modal-close {\n      background: none;\n      border: none;\n      font-size: 28px;\n      line-height: 1;\n      color: var(--text-secondary, #666);\n      cursor: pointer;\n      padding: 0;\n      width: 32px;\n      height: 32px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 4px;\n      transition: background 0.2s;\n    }\n    .qa-modal-close:hover {\n      background: var(--hover-bg, #f0f0f0);\n    }\n    .qa-modal-body {\n      padding: 20px;\n      overflow-y: auto;\n      flex: 1;\n      color: var(--text-primary, #000);\n      line-height: 1.6;\n    }\n    .qa-modal-footer {\n      padding: 12px 20px;\n      border-top: 1px solid var(--border-color, #e5e5e5);\n      display: flex;\n      gap: 10px;\n      justify-content: flex-end;\n    }\n    .qa-modal-btn {\n      padding: 8px 16px;\n      border-radius: 6px;\n      border: none;\n      font-size: 14px;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n    .qa-modal-btn-primary {\n      background: #007AFF;\n      color: #fff;\n    }\n    .qa-modal-btn-primary:hover {\n      background: #0051D5;\n    }\n    .qa-modal-btn-default {\n      background: var(--card-bg, #f0f0f0);\n      color: var(--text-primary, #000);\n      border: 1px solid var(--border-color, #e5e5e5);\n    }\n    .qa-modal-btn-default:hover {\n      background: var(--hover-bg, #e5e5e5);\n    }\n  ";
    document.head.appendChild(_0x4b26a3);
  };
  let _0x3a913c = null;
  let _0x1f7584 = null;
  const _0x577ca6 = (_0x2e01ba, _0x40e877) => {
    const _0x4cf7db = _0x2e01ba.replace(/^v/, "").split(".").map(Number);
    const _0x4353b4 = _0x40e877.replace(/^v/, "").split(".").map(Number);
    for (let _0x22273a = 0; _0x22273a < Math.max(_0x4cf7db.length, _0x4353b4.length); _0x22273a++) {
      const _0x4c0699 = _0x4cf7db[_0x22273a] || 0;
      const _0x15f94c = _0x4353b4[_0x22273a] || 0;
      if (_0x4c0699 > _0x15f94c) {
        return 1;
      }
      if (_0x4c0699 < _0x15f94c) {
        return -1;
      }
    }
    return 0;
  };
  const _0x1e4d7f = (_0x4a539e, _0x3c1d59) => "接口响应 " + _0x4a539e + " / " + _0x3c1d59 + "ms";
  const _0x145b5f = async () => {
    const _0x3989d2 = document.getElementById("qa-update-status");
    const _0x4dea41 = document.getElementById("qa-latest-version");
    const _0x387f15 = document.getElementById("qa-do-update-btn");
    const _0xc677cf = document.getElementById("qa-check-update-btn");
    if (_0x3989d2) {
      _0x3989d2.textContent = "正在检查更新...";
    }
    if (_0xc677cf) {
      _0xc677cf.disabled = true;
    }
    try {
      const _0xc237bd = performance.now();
      const _0x549245 = _0x568cd2 + "/version-updates/latest?t=" + Date.now();
      const _0x373681 = await fetch(_0x549245, {
        headers: {
          "Cache-Control": "no-cache"
        }
      });
      const _0x5da0e4 = Math.round(performance.now() - _0xc237bd);
      if (!_0x373681.ok) {
        throw new Error("请求失败 (" + _0x373681.status + ")");
      }
      let _0x2f5ebb;
      try {
        _0x2f5ebb = await _0x373681.json();
      } catch (_0x3c62b3) {
        {
          if (_0x3989d2) {
            _0x3989d2.textContent = _0x1e4d7f(_0x373681.status, _0x5da0e4) + "，返回格式异常";
          }
          if (_0x4dea41) {
            _0x4dea41.textContent = "--";
          }
          if (_0x387f15) {
            _0x387f15.style.display = "none";
          }
          return;
        }
      }
      const _0x219ef3 = {
        label: "[Update] version api response",
        status: _0x373681.status,
        elapsedMs: _0x5da0e4,
        data: _0x2f5ebb
      };
      _0x1ddb84(_0x219ef3, "info");
      const _0x1318a2 = _0x1e4d7f(_0x373681.status, _0x5da0e4);
      if (!_0x2f5ebb.version) {
        if (_0x3989d2) {
          _0x3989d2.textContent = "接口可用（" + _0x1318a2 + "），暂无版本信息";
        }
        if (_0x4dea41) {
          _0x4dea41.textContent = "--";
        }
        if (_0x387f15) {
          _0x387f15.style.display = "none";
        }
        _0x3a913c = null;
        _0x1f7584 = null;
        return;
      }
      _0x3a913c = _0x2f5ebb.version;
      _0x1f7584 = _0x2f5ebb.scriptUrl || null;
      if (_0x4dea41) {
        _0x4dea41.textContent = "v" + _0x3a913c;
      }
      const _0x25232b = _0x577ca6(_0x3a913c, _0x21b8ce);
      if (_0x25232b > 0) {
        {
          if (!_0x1f7584) {
            {
              if (_0x3989d2) {
                _0x3989d2.textContent = "发现新版本 v" + _0x3a913c + "，但脚本链接缺失（" + _0x1318a2 + "）";
              }
              if (_0x387f15) {
                _0x387f15.style.display = "none";
              }
            }
          } else {
            _0x3989d2 && (_0x3989d2.innerHTML = "<span style=\"color:#34c759;\">发现新版本！</span> v" + _0x21b8ce + " → v" + _0x3a913c + " <span style=\"color:#8e8e93;\">(" + _0x1318a2 + ")</span>");
            if (_0x387f15) {
              _0x387f15.style.display = "";
            }
            _0x30927d("发现新版本 v" + _0x3a913c, "success");
          }
        }
      } else {
        if (_0x25232b === 0) {
          if (_0x3989d2) {
            _0x3989d2.textContent = "当前已是最新版本（" + _0x1318a2 + "）";
          }
          if (_0x387f15) {
            _0x387f15.style.display = "none";
          }
        } else {
          {
            if (_0x3989d2) {
              _0x3989d2.textContent = "当前版本较新（开发版本）（" + _0x1318a2 + "）";
            }
            if (_0x387f15) {
              _0x387f15.style.display = "none";
            }
          }
        }
      }
    } catch (_0x445883) {
      if (_0x3989d2) {
        _0x3989d2.textContent = "检查更新失败: " + (_0x445883.message || "网络错误");
      }
    } finally {
      {
        if (_0xc677cf) {
          _0xc677cf.disabled = false;
        }
      }
    }
  };
  const _0x1e7fd8 = () => {
    if (!_0x1f7584) {
      {
        _0x30927d("未获取到脚本链接", "error");
        return;
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      {
        navigator.clipboard.writeText(_0x1f7584).then(() => {
          _0x30927d("更新链接已复制到粘贴板", "success");
        }).catch(() => {
          _0x2e2adc(_0x1f7584);
        });
      }
    } else {
      _0x2e2adc(_0x1f7584);
    }
  };
  const _0x2e2adc = _0x11edc0 => {
    const _0x154947 = document.createElement("textarea");
    _0x154947.value = _0x11edc0;
    _0x154947.style.position = "fixed";
    _0x154947.style.opacity = "0";
    document.body.appendChild(_0x154947);
    _0x154947.select();
    let _0x1120a4 = false;
    try {
      _0x1120a4 = document.execCommand("copy");
    } catch (_0x711e82) {
      {
        _0x1120a4 = false;
      }
    }
    document.body.removeChild(_0x154947);
    if (_0x1120a4) {
      _0x30927d("更新链接已复制到粘贴板", "success");
    } else {
      {
        _0x483d42("复制失败", "\n      <p style=\"margin-bottom:12px;\">无法自动复制到粘贴板，请手动复制以下链接：</p>\n      <textarea readonly style=\"width:100%;height:80px;padding:8px;border:1px solid var(--border-color);border-radius:4px;font-size:12px;resize:none;background:var(--card-bg);\">" + _0x11edc0 + "</textarea>\n    ", [{
          label: "关闭",
          type: "default"
        }]);
      }
    }
  };
  const _0x1b528f = () => {
    const _0x54d044 = _0x386da5.theme === "dark";
    const _0x1b65d3 = {
      bg: _0x54d044 ? "#1a1a2e" : "#ffffff",
      text: _0x54d044 ? "#f9fafb" : "#1f2937",
      textSecondary: _0x54d044 ? "#9ca3af" : "#6b7280",
      headerBg: _0x54d044 ? "#374151" : "#f3f4f6",
      headerText: _0x54d044 ? "#d1d5db" : "#374151",
      border: _0x54d044 ? "#4b5563" : "#e5e7eb",
      zebraStripe: _0x54d044 ? "#2d2d44" : "#f9fafb",
      gold: "#fbbf24",
      red: "#f87171",
      footerText: _0x54d044 ? "#6b7280" : "#9ca3af"
    };
    return _0x1b65d3;
  };
  const _0x596c9d = _0x5e3cc9 => {
    {
      return new Promise(_0x106485 => {
        if (!_0x5e3cc9) {
          _0x106485(null);
          return;
        }
        const _0x420430 = new Image();
        _0x420430.crossOrigin = "anonymous";
        _0x420430.onload = () => _0x106485(_0x420430);
        _0x420430.onerror = () => _0x106485(null);
        _0x420430.src = _0x5e3cc9;
        setTimeout(() => _0x106485(null), 3000);
      });
    }
  };
  let _0x32283c = null;
  let _0x4168f6 = null;
  let _0x5e3089 = null;
  let _0x1c1945 = null;
  const _0x301bab = _0x25b941 => {
    {
      if (!_0x25b941) {
        return "0";
      }
      if (_0x25b941 >= 100000000) {
        return (_0x25b941 / 100000000).toFixed(1) + "亿";
      }
      if (_0x25b941 >= 10000) {
        return Math.round(_0x25b941 / 10000) + "w";
      }
      return String(_0x25b941);
    }
  };
  const _0x25af7d = async () => {
    const _0x32bf91 = document.getElementById("qa-peachtree-date");
    const _0x48bcf8 = document.getElementById("qa-peachtree-content");
    if (!_0x32bf91 || !_0x48bcf8) {
      return;
    }
    const _0x3e11c9 = _0x32bf91.value.trim();
    if (!_0x3e11c9) {
      {
        _0x48bcf8.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请输入日期</div>";
        return;
      }
    }
    _0x48bcf8.innerHTML = "<div class=\"helper-text\">查询中...</div>";
    try {
      const _0x72d0d2 = await _0x361aec("legion_getinfo", {});
      const _0x30f84a = _0x72d0d2._rawData || _0x72d0d2;
      if (!_0x30f84a || !_0x30f84a.info || !_0x30f84a.info.id) {
        throw new Error("获取军团信息失败");
      }
      const _0x30d123 = _0x30f84a.info.id;
      const _0x49a722 = _0x30f84a.info.name;
      const _0x1a8dc6 = _0x3e11c9.split(/[/-]/);
      const _0x1d1929 = [_0x1a8dc6[0].slice(2) + _0x1a8dc6[1] + _0x1a8dc6[2], _0x3e11c9.replace(/[/-]/g, ""), _0x3e11c9.replace(/-/g, "/")];
      let _0x2556c4 = null;
      for (const _0x26a204 of _0x1d1929) {
        {
          try {
            {
              const _0x35e759 = {
                date: _0x26a204
              };
              _0x2556c4 = await _0x361aec("legion_getpayloadkillrecord", _0x35e759);
              const _0x47e0ca = _0x2556c4._rawData || _0x2556c4;
              if (_0x47e0ca && _0x47e0ca.recordsMap) {
                break;
              }
            }
          } catch (_0x4333d4) {
            continue;
          }
        }
      }
      if (!_0x2556c4) {
        throw new Error("获取战斗记录失败");
      }
      const _0x4a4465 = _0x2556c4._rawData || _0x2556c4;
      const _0xa357e9 = _0x4a4465.recordsMap;
      const _0x1496b1 = _0xa357e9[_0x30d123] || _0xa357e9[String(_0x30d123)] || _0xa357e9[Number(_0x30d123)];
      if (!_0x1496b1) {
        throw new Error("未找到军团ID " + _0x30d123 + " 的数据");
      }
      const _0x278685 = _0x1496b1.sort((_0x1d26a6, _0x26bbe7) => (_0x26bbe7.killCnt || 0) - (_0x1d26a6.killCnt || 0)).slice(0, 30);
      const _0x870ce6 = {
        memberDetails: _0x278685,
        legionName: _0x49a722,
        date: _0x3e11c9
      };
      _0x32283c = _0x870ce6;
      _0x5bbd6b(_0x278685, _0x49a722, _0x3e11c9);
    } catch (_0x56c66c) {
      _0x48bcf8.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + _0x56c66c.message + "</div>";
    }
  };
  const _0x1c5b33 = () => {
    {
      return new Date().getDay() === 6;
    }
  };
  const _0xca33b = (_0x326645 = null) => {
    const _0x3f9649 = _0x326645 ? new Date(_0x326645) : new Date();
    const _0xf83c36 = _0x3f9649.getDay();
    const _0x204666 = _0xf83c36 === 0 ? 0 : _0xf83c36;
    const _0x5f0e3c = new Date(_0x3f9649);
    _0x5f0e3c.setDate(_0x3f9649.getDate() - _0x204666);
    return _0x5f0e3c;
  };
  const _0x3ecb67 = _0x5d7b69 => {
    const _0x3aeb94 = String(_0x5d7b69.getFullYear()).slice(2);
    const _0x2e5c4f = String(_0x5d7b69.getMonth() + 1).padStart(2, "0");
    const _0x3d4384 = String(_0x5d7b69.getDate()).padStart(2, "0");
    return _0x3aeb94 + _0x2e5c4f + _0x3d4384;
  };
  const _0x562d5a = async () => {
    {
      const _0x38f23c = document.getElementById("qa-peachtree-date");
      const _0x122903 = document.getElementById("qa-peachtree-content");
      if (_0x122903) {
        _0x122903.innerHTML = "<div class=\"helper-text\">查询中...</div>";
      }
      try {
        {
          let _0xd5326b = null;
          const _0x2c1953 = _0x38f23c?.["value"]?.["trim"]();
          if (_0x1c5b33() && !_0x2c1953) {
            {
              _0x1ddb84("[蟠桃园] 活动日，使用 legion_getpayloadbf", "info");
              const _0x241085 = await _0x361aec("legion_getpayloadbf", {});
              const _0xc071ad = _0x241085?.["_rawData"] || _0x241085;
              _0x1ddb84("[蟠桃园] 活动日查询结果", "data");
              _0x1ddb84(_0xc071ad, "data");
              const _0x3d8596 = _0xc071ad?.["legions"] || _0xc071ad?.["body"]?.["legions"] || [];
              if (_0x3d8596.length > 0) {
                const _0x1ae787 = await _0x361aec("legion_getinfo", {});
                const _0x49de52 = _0x1ae787?.["_rawData"]?.["info"]?.["id"] || _0x1ae787?.["info"]?.["id"];
                const _0x421208 = _0x3d8596.find(_0x476ab7 => _0x476ab7.id !== _0x49de52) || _0x3d8596[0];
                _0xd5326b = _0x421208?.["id"];
              }
              if (!_0xd5326b) {
                {
                  const _0x22ba2f = _0xc071ad?.["info"] || _0xc071ad?.["body"]?.["info"] || {};
                  _0xd5326b = _0x22ba2f.opponentLegionId || _0x22ba2f.opponentId;
                }
              }
            }
          } else {
            {
              _0x1ddb84("[蟠桃园] 使用 legion_getpayloadrecord 查询历史对手", "info");
              const _0x3d06a9 = await _0x361aec("legion_getpayloadrecord", {});
              const _0x4fc459 = _0x3d06a9?.["_rawData"] || _0x3d06a9;
              _0x1ddb84("[蟠桃园] 历史记录查询结果", "data");
              _0x1ddb84(_0x4fc459, "data");
              const _0x5b60ea = _0x4fc459?.["enemyLegionMap"] || _0x4fc459?.["body"]?.["enemyLegionMap"] || {};
              let _0x329845;
              if (_0x2c1953) {
                {
                  const _0x341abc = _0x2c1953.split(/[/-]/);
                  if (_0x341abc.length >= 3) {
                    const _0x329052 = _0x341abc[0].length === 2 ? "20" + _0x341abc[0] : _0x341abc[0];
                    _0x329845 = _0xca33b(new Date(_0x329052, parseInt(_0x341abc[1]) - 1, parseInt(_0x341abc[2])));
                  } else {
                    _0x329845 = _0xca33b();
                  }
                }
              } else {
                _0x329845 = _0xca33b();
              }
              const _0x174d3f = _0x3ecb67(_0x329845);
              _0x1ddb84("[蟠桃园] 查找日期: " + _0x174d3f, "info");
              if (_0x5b60ea[_0x174d3f]) {
                _0xd5326b = _0x5b60ea[_0x174d3f].id;
                _0x1ddb84("[蟠桃园] 从 enemyLegionMap[" + _0x174d3f + "] 获取到对手ID: " + _0xd5326b, "success");
              } else {
                const _0x6eb5e3 = Object.keys(_0x5b60ea).sort().reverse();
                _0x1ddb84("[蟠桃园] enemyLegionMap 可用日期: " + _0x6eb5e3.join(", "), "info");
                if (_0x6eb5e3.length > 0) {
                  {
                    _0xd5326b = _0x5b60ea[_0x6eb5e3[0]].id;
                    _0x1ddb84("[蟠桃园] 使用最近日期 " + _0x6eb5e3[0] + " 的对手ID: " + _0xd5326b, "info");
                  }
                }
              }
            }
          }
          if (!_0xd5326b) {
            if (_0x122903) {
              _0x122903.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">未匹配到对手俱乐部</div>";
            }
            _0x30927d("未匹配到对手俱乐部", "warning");
            return null;
          }
          const _0x4353e0 = {
            legionId: _0xd5326b
          };
          const _0x3a323e = await _0x361aec("legion_getinfobyid", _0x4353e0);
          const _0x40207a = _0x3a323e?.["_rawData"] || _0x3a323e;
          _0x1ddb84("[蟠桃园] 对手俱乐部信息", "data");
          _0x1ddb84(_0x40207a, "data");
          const _0x14ab20 = _0x40207a?.["legionData"] || _0x40207a?.["info"] || {};
          const _0x345510 = _0x14ab20.members ? Object.values(_0x14ab20.members) : [];
          const _0x2de81f = [..._0x345510].sort((_0x56021b, _0x13bb54) => Number(_0x13bb54.power || _0x13bb54.custom?.["s_power"] || 0) - Number(_0x56021b.power || _0x56021b.custom?.["s_power"] || 0)).slice(0, 3);
          const _0x4a735d = {
            id: _0x14ab20.id || _0xd5326b,
            name: _0x14ab20.name || "未知俱乐部",
            logo: _0x14ab20.logo || "",
            serverId: _0x14ab20.serverId || "--",
            level: _0x14ab20.level || 1,
            power: _0x14ab20.power || 0,
            redQuench: _0x14ab20.quenchNum || 0,
            announcement: _0x14ab20.announcement || "",
            memberCount: _0x345510.length,
            topMembers: _0x2de81f,
            allMembers: _0x345510
          };
          _0x4168f6 = _0x4a735d;
          _0x18564c(_0x4168f6);
          _0x1c1945 = "opponent";
          const _0x35cd73 = _0x1c5b33() ? "活动日" : "非活动日";
          _0x30927d("蟠桃园对手查询成功 (" + _0x35cd73 + ")", "success");
          return _0x4168f6;
        }
      } catch (_0x5213f5) {
        {
          _0x1ddb84("[蟠桃园] 查询失败: " + _0x5213f5.message, "error");
          if (_0x122903) {
            _0x122903.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + _0x5213f5.message + "</div>";
          }
          _0x30927d("蟠桃园对手查询失败: " + _0x5213f5.message, "error");
          return null;
        }
      }
    }
  };
  const _0x18564c = _0x30997 => {
    {
      const _0x3cc946 = document.getElementById("qa-peachtree-content");
      if (!_0x3cc946 || !_0x30997) {
        return;
      }
      const _0x388877 = [..._0x30997.allMembers].sort((_0x4b9b9e, _0x23e094) => Number(_0x23e094.power || _0x23e094.custom?.["s_power"] || 0) - Number(_0x4b9b9e.power || _0x4b9b9e.custom?.["s_power"] || 0)).slice(0, 30);
      _0x3cc946.innerHTML = "\n    <div class=\"opponent-overview\" style=\"margin-bottom:12px;\">\n      <div class=\"opponent-header\" style=\"display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:10px;\">\n        " + (_0x30997.logo ? "<img src=\"" + _0x30997.logo + "\" style=\"width:40px;height:40px;border-radius:6px;\" onerror=\"this.style.display='none'\">" : "") + "\n        <div style=\"text-align:center;\">\n          <div style=\"font-weight:600;font-size:14px;\">" + _0x30997.name + "</div>\n          <div style=\"font-size:11px;color:var(--qa-text-2);\">ID " + _0x30997.id + " · Lv." + _0x30997.level + " · 服务器 " + _0x30997.serverId + "</div>\n        </div>\n      </div>\n      <div class=\"stats-row\" style=\"display:flex;gap:12px;flex-wrap:wrap;margin-bottom:10px;justify-content:center;\">\n        <div class=\"stat-item\" style=\"text-align:center;\">\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">战力</div>\n          <div style=\"font-size:13px;font-weight:600;color:#fbbf24;\">" + _0x301bab(_0x30997.power) + "</div>\n        </div>\n        <div class=\"stat-item\" style=\"text-align:center;\">\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">成员</div>\n          <div style=\"font-size:13px;font-weight:600;\">" + _0x30997.memberCount + "</div>\n        </div>\n        <div class=\"stat-item\" style=\"text-align:center;\">\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">红淬</div>\n          <div style=\"font-size:13px;font-weight:600;color:#f87171;\">" + _0x30997.redQuench + "</div>\n        </div>\n      </div>\n      " + (_0x30997.announcement ? "<div style=\"font-size:11px;color:var(--qa-text-2);padding:6px 8px;background:var(--qa-bg-2);border-radius:4px;word-break:break-all;text-align:center;\">公告: " + _0x30997.announcement.slice(0, 100) + (_0x30997.announcement.length > 100 ? "..." : "") + "</div>" : "") + "\n    </div>\n    <div style=\"font-size:12px;font-weight:600;margin-bottom:8px;text-align:center;\">成员列表 (前30)</div>\n    <div style=\"overflow-x:auto;\">\n      <table style=\"width:100%;border-collapse:collapse;font-size:11px;\">\n        <tr style=\"background:var(--qa-bg-2);\">\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">序号</th>\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">头像</th>\n          <th style=\"padding:6px 4px;text-align:center;\">名称</th>\n          <th style=\"padding:6px 4px;text-align:right;\">战力</th>\n          <th style=\"padding:6px 4px;text-align:right;\">红淬</th>\n        </tr>\n        " + _0x388877.map((_0x215086, _0x32b3c4) => "\n          <tr style=\"border-bottom:1px solid var(--qa-border);\">\n            <td style=\"padding:6px 4px;text-align:center;\">" + (_0x32b3c4 + 1) + "</td>\n            <td style=\"padding:6px 4px;text-align:center;\">" + (_0x215086.headImg ? "<img src=\"" + _0x215086.headImg + "\" style=\"width:18px;height:18px;border-radius:3px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "</td>\n            <td style=\"padding:6px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px;\" title=\"" + (_0x215086.name || "") + "\">" + (_0x215086.name || "-") + "</td>\n            <td style=\"padding:6px 4px;text-align:right;color:#fbbf24;\">" + _0x301bab(_0x215086.power || _0x215086.custom?.["s_power"] || 0) + "</td>\n            <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + (_0x215086.custom?.["red_quench_cnt"] || 0) + "</td>\n          </tr>\n        ").join("") + "\n      </table>\n    </div>\n  ";
    }
  };
  const _0x21c9b9 = async () => {
    if (!_0x4168f6) {
      {
        _0x30927d("无对手数据可导出", "warning");
        return;
      }
    }
    const _0x144aff = _0x4168f6;
    const _0x330049 = _0x1b528f();
    const _0x130d0c = [..._0x144aff.allMembers].sort((_0x269de6, _0x44a81e) => Number(_0x44a81e.power || _0x44a81e.custom?.["s_power"] || 0) - Number(_0x269de6.power || _0x269de6.custom?.["s_power"] || 0)).slice(0, 30);
    const _0x6c5cc3 = 2;
    const _0x3919d3 = document.createElement("canvas");
    const _0x148c62 = _0x3919d3.getContext("2d");
    const _0x5ce3e6 = 20;
    const _0x6dbea6 = 32;
    const _0x2bba68 = 100;
    const _0x5bbcbe = 22;
    const _0x1ddda4 = ["序号", "头像", "名称", "战力", "红淬"];
    const _0x1c9662 = [50, 40, 150, 100, 80];
    const _0x190cb7 = _0x1c9662.reduce((_0x59b5bf, _0xf5aac9) => _0x59b5bf + _0xf5aac9, 0) + _0x5ce3e6 * 2;
    const _0x51e52b = _0x2bba68 + (_0x130d0c.length + 1) * _0x6dbea6 + _0x5ce3e6 * 2 + 30;
    _0x3919d3.width = _0x190cb7 * _0x6c5cc3;
    _0x3919d3.height = _0x51e52b * _0x6c5cc3;
    _0x148c62.scale(_0x6c5cc3, _0x6c5cc3);
    _0x148c62.fillStyle = _0x330049.bg;
    _0x148c62.fillRect(0, 0, _0x190cb7, _0x51e52b);
    _0x148c62.fillStyle = _0x330049.text;
    _0x148c62.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x148c62.fillText("蟠桃园对手信息", _0x5ce3e6, _0x5ce3e6 + 20);
    _0x148c62.fillStyle = _0x330049.textSecondary;
    _0x148c62.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x148c62.fillText(_0x144aff.name + " · Lv." + _0x144aff.level + " · 服务器 " + _0x144aff.serverId, _0x5ce3e6, _0x5ce3e6 + 44);
    _0x148c62.fillText("战力: " + _0x301bab(_0x144aff.power) + " | 成员: " + _0x144aff.memberCount + " | 红淬: " + _0x144aff.redQuench, _0x5ce3e6, _0x5ce3e6 + 66);
    const _0x1359a4 = new Map();
    await Promise.all(_0x130d0c.map(async _0x43f80f => {
      if (_0x43f80f.headImg) {
        {
          const _0x50f479 = await _0x596c9d(_0x43f80f.headImg);
          if (_0x50f479) {
            _0x1359a4.set(_0x43f80f.headImg, _0x50f479);
          }
        }
      }
    }));
    const _0x36ef6e = _0x2bba68;
    _0x148c62.fillStyle = _0x330049.headerBg;
    _0x148c62.fillRect(_0x5ce3e6, _0x36ef6e, _0x190cb7 - _0x5ce3e6 * 2, _0x6dbea6);
    _0x148c62.fillStyle = _0x330049.headerText;
    _0x148c62.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x360376 = _0x5ce3e6;
    _0x1ddda4.forEach((_0x60f5be, _0x3bc59f) => {
      _0x148c62.fillText(_0x60f5be, _0x360376 + 8, _0x36ef6e + 21);
      _0x360376 += _0x1c9662[_0x3bc59f];
    });
    _0x148c62.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x130d0c.forEach((_0x5f4b23, _0x380b8b) => {
      const _0x41dafc = _0x36ef6e + (_0x380b8b + 1) * _0x6dbea6;
      _0x380b8b % 2 === 1 && (_0x148c62.fillStyle = _0x330049.zebraStripe, _0x148c62.fillRect(_0x5ce3e6, _0x41dafc, _0x190cb7 - _0x5ce3e6 * 2, _0x6dbea6));
      _0x148c62.fillStyle = _0x330049.text;
      let _0x3be0f1 = _0x5ce3e6;
      _0x148c62.fillText(String(_0x380b8b + 1), _0x3be0f1 + 8, _0x41dafc + 21);
      _0x3be0f1 += _0x1c9662[0];
      const _0x22e278 = _0x5f4b23.headImg ? _0x1359a4.get(_0x5f4b23.headImg) : null;
      if (_0x22e278) {
        _0x148c62.save();
        _0x148c62.beginPath();
        _0x148c62.roundRect(_0x3be0f1 + (_0x1c9662[1] - _0x5bbcbe) / 2, _0x41dafc + (_0x6dbea6 - _0x5bbcbe) / 2, _0x5bbcbe, _0x5bbcbe, 4);
        _0x148c62.clip();
        _0x148c62.drawImage(_0x22e278, _0x3be0f1 + (_0x1c9662[1] - _0x5bbcbe) / 2, _0x41dafc + (_0x6dbea6 - _0x5bbcbe) / 2, _0x5bbcbe, _0x5bbcbe);
        _0x148c62.restore();
      }
      _0x3be0f1 += _0x1c9662[1];
      _0x148c62.fillStyle = _0x330049.text;
      _0x148c62.fillText((_0x5f4b23.name || "-").substring(0, 10), _0x3be0f1 + 8, _0x41dafc + 21);
      _0x3be0f1 += _0x1c9662[2];
      _0x148c62.fillStyle = _0x330049.gold;
      _0x148c62.fillText(_0x301bab(_0x5f4b23.power || _0x5f4b23.custom?.["s_power"] || 0), _0x3be0f1 + 8, _0x41dafc + 21);
      _0x3be0f1 += _0x1c9662[3];
      _0x148c62.fillStyle = _0x330049.red;
      _0x148c62.fillText(String(_0x5f4b23.custom?.["red_quench_cnt"] || 0), _0x3be0f1 + 8, _0x41dafc + 21);
      _0x148c62.fillStyle = _0x330049.text;
    });
    _0x148c62.strokeStyle = _0x330049.border;
    _0x148c62.lineWidth = 1;
    _0x148c62.strokeRect(_0x5ce3e6, _0x36ef6e, _0x190cb7 - _0x5ce3e6 * 2, (_0x130d0c.length + 1) * _0x6dbea6);
    _0x148c62.fillStyle = _0x330049.footerText;
    _0x148c62.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x148c62.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), _0x5ce3e6, _0x51e52b - _0x5ce3e6);
    await _0x4410da(_0x3919d3, "蟠桃园对手_" + _0x144aff.name + ".png", _0x30927d);
  };
  const _0x208fcb = async () => {
    {
      const _0x525992 = document.getElementById("qa-peachtree-date");
      const _0x3b8f5a = document.getElementById("qa-peachtree-opponent-records-content");
      if (!_0x3b8f5a) {
        return;
      }
      const _0x54b337 = _0x525992?.["value"]?.["trim"]();
      if (!_0x54b337) {
        {
          _0x3b8f5a.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请先输入日期</div>";
          return;
        }
      }
      _0x3b8f5a.innerHTML = "<div class=\"helper-text\">查询中...</div>";
      try {
        {
          if (!_0x4168f6?.["id"]) {
            {
              await _0x562d5a();
            }
          }
          if (!_0x4168f6?.["id"]) {
            _0x3b8f5a.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请先查询对手俱乐部</div>";
            return;
          }
          const _0x513328 = _0x4168f6.id;
          const _0x596994 = _0x54b337.split(/[/-]/);
          const _0x205223 = _0x596994.length >= 3 ? [_0x596994[0].slice(2) + _0x596994[1] + _0x596994[2], _0x54b337.replace(/[/-]/g, ""), _0x54b337.replace(/-/g, "/")] : [_0x54b337.replace(/[/-]/g, ""), _0x54b337];
          let _0x210030 = null;
          for (const _0x46adfc of _0x205223) {
            try {
              const _0x4e3a96 = {
                date: _0x46adfc
              };
              _0x210030 = await _0x361aec("legion_getpayloadkillrecord", _0x4e3a96);
              const _0x57e400 = _0x210030._rawData || _0x210030;
              if (_0x57e400 && _0x57e400.recordsMap) {
                break;
              }
            } catch (_0xfa0703) {
              continue;
            }
          }
          if (!_0x210030) {
            throw new Error("获取战斗记录失败");
          }
          const _0x47131f = _0x210030._rawData || _0x210030;
          const _0xa01643 = _0x47131f.recordsMap;
          const _0x9a30a9 = _0xa01643[_0x513328] || _0xa01643[String(_0x513328)] || _0xa01643[Number(_0x513328)];
          if (!_0x9a30a9 || _0x9a30a9.length === 0) {
            _0x3b8f5a.innerHTML = "<div class=\"helper-text\">未找到对手战绩数据</div>";
            return;
          }
          const _0xf13ca2 = _0x9a30a9.sort((_0x592ccc, _0x7563a) => (_0x7563a.killCnt || 0) - (_0x592ccc.killCnt || 0)).slice(0, 30);
          const _0x265019 = {
            memberDetails: _0xf13ca2,
            date: _0x54b337
          };
          _0x4168f6.battleRecords = _0x265019;
          _0x1a6588(_0xf13ca2, _0x4168f6.name, _0x54b337);
          _0x30927d("对手战绩查询成功", "success");
        }
      } catch (_0x4f316f) {
        {
          _0x1ddb84("[蟠桃园] 对手战绩查询失败: " + _0x4f316f.message, "error");
          _0x3b8f5a.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + _0x4f316f.message + "</div>";
          _0x30927d("对手战绩查询失败: " + _0x4f316f.message, "error");
        }
      }
    }
  };
  const _0x1a6588 = (_0x4fc580, _0x590785, _0x4e946e) => {
    {
      const _0xaa9852 = document.getElementById("qa-peachtree-opponent-records-content");
      if (!_0xaa9852) {
        return;
      }
      const _0x4cbc52 = _0x4fc580.reduce((_0x802d37, _0x48f4b6) => _0x802d37 + (_0x48f4b6.killCnt || 0), 0);
      const _0x1634ce = _0x4fc580.reduce((_0x769689, _0x2ae4f6) => _0x769689 + (_0x2ae4f6.carCnt || 0), 0);
      const _0x41fe4d = _0x4fc580.reduce((_0x5448f8, _0x977d31) => _0x5448f8 + (_0x977d31.mCKCnt || 0), 0);
      const _0xd17118 = _0x4fc580.reduce((_0x3c039e, _0x45a934) => _0x3c039e + (_0x45a934.reviveCnt || 0), 0);
      _0xaa9852.innerHTML = "\n    <div style=\"margin-bottom:10px;font-size:12px;color:var(--qa-text-2);\">\n      " + _0x590785 + " | " + _0x4e946e + " | 共" + _0x4fc580.length + "人\n    </div>\n    <div style=\"overflow-x:auto;\">\n      <table style=\"width:100%;border-collapse:collapse;font-size:11px;\">\n        <tr style=\"background:var(--qa-bg-2);\">\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">序号</th>\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">头像</th>\n          <th style=\"padding:6px 4px;text-align:left;\">角色名称</th>\n          <th style=\"padding:6px 4px;text-align:right;width:50px;\">战力</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">击杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">抢船</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">连杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">复活</th>\n        </tr>\n        " + _0x4fc580.map((_0x155f32, _0x253419) => {
        const _0xa171dc = _0x155f32.roleInfo || {};
        return "\n            <tr style=\"border-bottom:1px solid var(--qa-border);\">\n              <td style=\"padding:6px 4px;text-align:center;\">" + (_0x253419 + 1) + "</td>\n              <td style=\"padding:6px 4px;text-align:center;\">" + (_0xa171dc.headImg ? "<img src=\"" + _0xa171dc.headImg + "\" style=\"width:18px;height:18px;border-radius:3px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "</td>\n              <td style=\"padding:6px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px;\" title=\"" + (_0xa171dc.name || "") + "\">" + (_0xa171dc.name || "-") + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#fbbf24;\">" + _0x301bab(_0xa171dc.power) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + (_0x155f32.killCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (_0x155f32.carCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (_0x155f32.mCKCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (_0x155f32.reviveCnt || 0) + "</td>\n            </tr>\n          ";
      }).join("") + "\n        <tr style=\"font-weight:bold;background:var(--qa-bg-2);\">\n          <td colspan=\"4\" style=\"padding:6px 4px;text-align:center;\">总计</td>\n          <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + _0x4cbc52 + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + _0x1634ce + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + _0x41fe4d + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + _0xd17118 + "</td>\n        </tr>\n      </table>\n    </div>\n  ";
    }
  };
  const _0x102461 = async () => {
    if (!_0x4168f6?.["battleRecords"]?.["memberDetails"]?.["length"]) {
      {
        _0x30927d("无对手战绩数据可导出", "warning");
        return;
      }
    }
    const {
      memberDetails: _0x3db2d1,
      date: _0x2b623f
    } = _0x4168f6.battleRecords;
    const _0x384d51 = _0x4168f6.name;
    const _0xe00e12 = _0x1b528f();
    const _0x477e02 = _0x3db2d1.reduce((_0x5e11d0, _0x5ddc48) => _0x5e11d0 + (_0x5ddc48.killCnt || 0), 0);
    const _0x3eab55 = _0x3db2d1.reduce((_0x5668f9, _0x11b708) => _0x5668f9 + (_0x11b708.carCnt || 0), 0);
    const _0x31e2f3 = _0x3db2d1.reduce((_0x55f306, _0xd3ee00) => _0x55f306 + (_0xd3ee00.mCKCnt || 0), 0);
    const _0xc849f3 = _0x3db2d1.reduce((_0x2455c6, _0x1bf87a) => _0x2455c6 + (_0x1bf87a.reviveCnt || 0), 0);
    const _0x45134c = 2;
    const _0x2501b7 = document.createElement("canvas");
    const _0x2194ad = _0x2501b7.getContext("2d");
    const _0x25f65e = 20;
    const _0x17bb46 = 32;
    const _0x4bdebe = 80;
    const _0x18bf07 = 50;
    const _0x33ad49 = ["序号", "角色名称", "战力", "击杀", "抢船", "连杀", "复活"];
    const _0x2ad07f = [50, 120, 80, 60, 60, 60, 60];
    const _0x3c1f4d = _0x2ad07f.reduce((_0x4e5bc8, _0x16e745) => _0x4e5bc8 + _0x16e745, 0) + _0x25f65e * 2;
    const _0x58d96a = _0x4bdebe + (_0x3db2d1.length + 1) * _0x17bb46 + _0x18bf07 + _0x25f65e * 2;
    _0x2501b7.width = _0x3c1f4d * _0x45134c;
    _0x2501b7.height = _0x58d96a * _0x45134c;
    _0x2194ad.scale(_0x45134c, _0x45134c);
    _0x2194ad.fillStyle = _0xe00e12.bg;
    _0x2194ad.fillRect(0, 0, _0x3c1f4d, _0x58d96a);
    _0x2194ad.fillStyle = _0xe00e12.text;
    _0x2194ad.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x2194ad.fillText("蟠桃园对手战绩 - " + _0x2b623f, _0x25f65e, _0x25f65e + 20);
    _0x2194ad.fillStyle = _0xe00e12.textSecondary;
    _0x2194ad.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x2194ad.fillText(_0x384d51 + " | 共" + _0x3db2d1.length + "人", _0x25f65e, _0x25f65e + 44);
    const _0x245266 = _0x4bdebe;
    _0x2194ad.fillStyle = _0xe00e12.headerBg;
    _0x2194ad.fillRect(_0x25f65e, _0x245266, _0x3c1f4d - _0x25f65e * 2, _0x17bb46);
    _0x2194ad.fillStyle = _0xe00e12.headerText;
    _0x2194ad.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x2de50d = _0x25f65e;
    _0x33ad49.forEach((_0x11bde7, _0x29cf5b) => {
      _0x2194ad.fillText(_0x11bde7, _0x2de50d + 8, _0x245266 + 21);
      _0x2de50d += _0x2ad07f[_0x29cf5b];
    });
    _0x2194ad.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x3db2d1.forEach((_0x327aad, _0x96c379) => {
      const _0x4ac3fb = _0x245266 + (_0x96c379 + 1) * _0x17bb46;
      const _0x399001 = _0x327aad.roleInfo || {};
      if (_0x96c379 % 2 === 1) {
        {
          _0x2194ad.fillStyle = _0xe00e12.zebraStripe;
          _0x2194ad.fillRect(_0x25f65e, _0x4ac3fb, _0x3c1f4d - _0x25f65e * 2, _0x17bb46);
        }
      }
      _0x2194ad.fillStyle = _0xe00e12.text;
      let _0x2699dd = _0x25f65e;
      _0x2194ad.fillText(String(_0x96c379 + 1), _0x2699dd + 8, _0x4ac3fb + 21);
      _0x2699dd += _0x2ad07f[0];
      _0x2194ad.fillText((_0x399001.name || "-").substring(0, 8), _0x2699dd + 8, _0x4ac3fb + 21);
      _0x2699dd += _0x2ad07f[1];
      _0x2194ad.fillStyle = _0xe00e12.gold;
      _0x2194ad.fillText(_0x301bab(_0x399001.power), _0x2699dd + 8, _0x4ac3fb + 21);
      _0x2699dd += _0x2ad07f[2];
      _0x2194ad.fillStyle = _0xe00e12.red;
      _0x2194ad.fillText(String(_0x327aad.killCnt || 0), _0x2699dd + 8, _0x4ac3fb + 21);
      _0x2699dd += _0x2ad07f[3];
      _0x2194ad.fillStyle = _0xe00e12.text;
      _0x2194ad.fillText(String(_0x327aad.carCnt || 0), _0x2699dd + 8, _0x4ac3fb + 21);
      _0x2699dd += _0x2ad07f[4];
      _0x2194ad.fillText(String(_0x327aad.mCKCnt || 0), _0x2699dd + 8, _0x4ac3fb + 21);
      _0x2699dd += _0x2ad07f[5];
      _0x2194ad.fillText(String(_0x327aad.reviveCnt || 0), _0x2699dd + 8, _0x4ac3fb + 21);
    });
    const _0x264157 = _0x245266 + (_0x3db2d1.length + 1) * _0x17bb46;
    _0x2194ad.fillStyle = _0xe00e12.headerBg;
    _0x2194ad.fillRect(_0x25f65e, _0x264157, _0x3c1f4d - _0x25f65e * 2, _0x17bb46);
    _0x2194ad.fillStyle = _0xe00e12.text;
    _0x2194ad.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x2194ad.fillText("总计", _0x25f65e + 8, _0x264157 + 21);
    let _0x1328cd = _0x25f65e + _0x2ad07f[0] + _0x2ad07f[1] + _0x2ad07f[2];
    _0x2194ad.fillStyle = _0xe00e12.red;
    _0x2194ad.fillText(String(_0x477e02), _0x1328cd + 8, _0x264157 + 21);
    _0x1328cd += _0x2ad07f[3];
    _0x2194ad.fillStyle = _0xe00e12.text;
    _0x2194ad.fillText(String(_0x3eab55), _0x1328cd + 8, _0x264157 + 21);
    _0x1328cd += _0x2ad07f[4];
    _0x2194ad.fillText(String(_0x31e2f3), _0x1328cd + 8, _0x264157 + 21);
    _0x1328cd += _0x2ad07f[5];
    _0x2194ad.fillText(String(_0xc849f3), _0x1328cd + 8, _0x264157 + 21);
    _0x2194ad.strokeStyle = _0xe00e12.border;
    _0x2194ad.lineWidth = 1;
    _0x2194ad.strokeRect(_0x25f65e, _0x245266, _0x3c1f4d - _0x25f65e * 2, (_0x3db2d1.length + 2) * _0x17bb46);
    _0x2194ad.fillStyle = _0xe00e12.footerText;
    _0x2194ad.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x2194ad.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), _0x25f65e, _0x58d96a - _0x25f65e);
    await _0x4410da(_0x2501b7, "蟠桃园对手战绩_" + _0x384d51 + "_" + _0x2b623f.replace(/[/-]/g, "") + ".png", _0x30927d);
  };
  const _0x5bbd6b = (_0x56e753, _0x461547, _0x1a7e32) => {
    const _0x1959a3 = document.getElementById("qa-peachtree-content");
    if (!_0x1959a3) {
      return;
    }
    const _0x1ad299 = _0x56e753.reduce((_0x2de21a, _0x5d80e9) => _0x2de21a + (_0x5d80e9.killCnt || 0), 0);
    const _0x5223fb = _0x56e753.reduce((_0x207fce, _0x29e6f6) => _0x207fce + (_0x29e6f6.carCnt || 0), 0);
    const _0x1fa82a = _0x56e753.reduce((_0x463f88, _0x34e135) => _0x463f88 + (_0x34e135.mCKCnt || 0), 0);
    const _0x2a0d7f = _0x56e753.reduce((_0x4525f2, _0x18ef45) => _0x4525f2 + (_0x18ef45.reviveCnt || 0), 0);
    _0x1959a3.innerHTML = "\n    <div style=\"margin-bottom:10px;font-size:12px;color:var(--qa-text-2);\">\n      " + _0x461547 + " | " + _0x1a7e32 + " | 共" + _0x56e753.length + "人\n    </div>\n    <div style=\"overflow-x:auto;\">\n      <table class=\"peachtree-table\" style=\"width:100%;border-collapse:collapse;font-size:11px;\">\n        <tr style=\"background:var(--qa-bg-2);\">\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">序号</th>\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">头像</th>\n          <th style=\"padding:6px 4px;text-align:left;\">角色名称</th>\n          <th style=\"padding:6px 4px;text-align:right;width:50px;\">战力</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">击杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">抢船</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">连杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">复活</th>\n        </tr>\n        " + _0x56e753.map((_0x504313, _0xe2c921) => {
      {
        const _0x1517f4 = _0x504313.roleInfo || {};
        return "\n            <tr style=\"border-bottom:1px solid var(--qa-border);\">\n              <td style=\"padding:6px 4px;text-align:center;\">" + (_0xe2c921 + 1) + "</td>\n              <td style=\"padding:6px 4px;text-align:center;\">" + (_0x1517f4.headImg ? "<img src=\"" + _0x1517f4.headImg + "\" style=\"width:18px;height:18px;border-radius:3px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "</td>\n              <td style=\"padding:6px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px;\" title=\"" + (_0x1517f4.name || "") + "\">" + (_0x1517f4.name || "-") + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#fbbf24;\">" + _0x301bab(_0x1517f4.power) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + (_0x504313.killCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (_0x504313.carCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (_0x504313.mCKCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (_0x504313.reviveCnt || 0) + "</td>\n            </tr>\n          ";
      }
    }).join("") + "\n        <tr style=\"font-weight:bold;background:var(--qa-bg-2);\">\n          <td colspan=\"4\" style=\"padding:6px 4px;text-align:center;\">总计</td>\n          <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + _0x1ad299 + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + _0x5223fb + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + _0x1fa82a + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + _0x2a0d7f + "</td>\n        </tr>\n      </table>\n    </div>\n  ";
  };
  const _0x6882d2 = async () => {
    {
      if (!_0x32283c?.["memberDetails"]?.["length"]) {
        {
          _0x30927d("无数据可导出", "warning");
          return;
        }
      }
      const {
        memberDetails: _0x22e432,
        legionName: _0x3ac9ac,
        date: _0x1fd235
      } = _0x32283c;
      const _0x1e69d1 = _0x1b528f();
      const _0x324a30 = _0x22e432.reduce((_0x19b21f, _0x2feea3) => _0x19b21f + (_0x2feea3.killCnt || 0), 0);
      const _0x2124d6 = _0x22e432.reduce((_0x1091ea, _0x42e325) => _0x1091ea + (_0x42e325.carCnt || 0), 0);
      const _0x5868b7 = _0x22e432.reduce((_0x18f523, _0xdbf447) => _0x18f523 + (_0xdbf447.mCKCnt || 0), 0);
      const _0x5c028e = _0x22e432.reduce((_0x5c89c3, _0xe18718) => _0x5c89c3 + (_0xe18718.reviveCnt || 0), 0);
      const _0x4a5e3d = 2;
      const _0x61b101 = document.createElement("canvas");
      const _0x30986a = _0x61b101.getContext("2d");
      const _0x223372 = 20;
      const _0x20ff17 = 32;
      const _0x5423bb = 80;
      const _0x13a224 = 50;
      const _0x40b0a2 = ["序号", "角色名称", "战力", "击杀", "抢船", "连杀", "复活"];
      const _0x5d9434 = [50, 120, 80, 60, 60, 60, 60];
      const _0x9b5e6b = _0x5d9434.reduce((_0x400e0a, _0x175a09) => _0x400e0a + _0x175a09, 0) + _0x223372 * 2;
      const _0x36cbb0 = _0x5423bb + (_0x22e432.length + 1) * _0x20ff17 + _0x13a224 + _0x223372 * 2;
      _0x61b101.width = _0x9b5e6b * _0x4a5e3d;
      _0x61b101.height = _0x36cbb0 * _0x4a5e3d;
      _0x30986a.scale(_0x4a5e3d, _0x4a5e3d);
      _0x30986a.fillStyle = _0x1e69d1.bg;
      _0x30986a.fillRect(0, 0, _0x9b5e6b, _0x36cbb0);
      _0x30986a.fillStyle = _0x1e69d1.text;
      _0x30986a.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x30986a.fillText("蟠桃园统计 - " + _0x1fd235, _0x223372, _0x223372 + 20);
      _0x30986a.fillStyle = _0x1e69d1.textSecondary;
      _0x30986a.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x30986a.fillText(_0x3ac9ac + " | 共" + _0x22e432.length + "人", _0x223372, _0x223372 + 44);
      const _0x33edfe = _0x5423bb;
      _0x30986a.fillStyle = _0x1e69d1.headerBg;
      _0x30986a.fillRect(_0x223372, _0x33edfe, _0x9b5e6b - _0x223372 * 2, _0x20ff17);
      _0x30986a.fillStyle = _0x1e69d1.headerText;
      _0x30986a.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0x94d8a9 = _0x223372;
      _0x40b0a2.forEach((_0x521a2b, _0x38fda8) => {
        _0x30986a.fillText(_0x521a2b, _0x94d8a9 + 8, _0x33edfe + 21);
        _0x94d8a9 += _0x5d9434[_0x38fda8];
      });
      _0x30986a.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x22e432.forEach((_0x4b4e74, _0x49d5e7) => {
        const _0x10967a = _0x33edfe + (_0x49d5e7 + 1) * _0x20ff17;
        const _0x25c90c = _0x4b4e74.roleInfo || {};
        _0x49d5e7 % 2 === 1 && (_0x30986a.fillStyle = _0x1e69d1.zebraStripe, _0x30986a.fillRect(_0x223372, _0x10967a, _0x9b5e6b - _0x223372 * 2, _0x20ff17));
        _0x30986a.fillStyle = _0x1e69d1.text;
        let _0x2b7309 = _0x223372;
        _0x30986a.fillText(String(_0x49d5e7 + 1), _0x2b7309 + 8, _0x10967a + 21);
        _0x2b7309 += _0x5d9434[0];
        _0x30986a.fillText((_0x25c90c.name || "-").substring(0, 8), _0x2b7309 + 8, _0x10967a + 21);
        _0x2b7309 += _0x5d9434[1];
        _0x30986a.fillStyle = _0x1e69d1.gold;
        _0x30986a.fillText(_0x301bab(_0x25c90c.power), _0x2b7309 + 8, _0x10967a + 21);
        _0x2b7309 += _0x5d9434[2];
        _0x30986a.fillStyle = _0x1e69d1.red;
        _0x30986a.fillText(String(_0x4b4e74.killCnt || 0), _0x2b7309 + 8, _0x10967a + 21);
        _0x2b7309 += _0x5d9434[3];
        _0x30986a.fillStyle = _0x1e69d1.text;
        _0x30986a.fillText(String(_0x4b4e74.carCnt || 0), _0x2b7309 + 8, _0x10967a + 21);
        _0x2b7309 += _0x5d9434[4];
        _0x30986a.fillText(String(_0x4b4e74.mCKCnt || 0), _0x2b7309 + 8, _0x10967a + 21);
        _0x2b7309 += _0x5d9434[5];
        _0x30986a.fillText(String(_0x4b4e74.reviveCnt || 0), _0x2b7309 + 8, _0x10967a + 21);
      });
      const _0x3ebe96 = _0x33edfe + (_0x22e432.length + 1) * _0x20ff17;
      _0x30986a.fillStyle = _0x1e69d1.headerBg;
      _0x30986a.fillRect(_0x223372, _0x3ebe96, _0x9b5e6b - _0x223372 * 2, _0x20ff17);
      _0x30986a.fillStyle = _0x1e69d1.text;
      _0x30986a.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x30986a.fillText("总计", _0x223372 + 8, _0x3ebe96 + 21);
      let _0x56b901 = _0x223372 + _0x5d9434[0] + _0x5d9434[1] + _0x5d9434[2];
      _0x30986a.fillStyle = _0x1e69d1.red;
      _0x30986a.fillText(String(_0x324a30), _0x56b901 + 8, _0x3ebe96 + 21);
      _0x56b901 += _0x5d9434[3];
      _0x30986a.fillStyle = _0x1e69d1.text;
      _0x30986a.fillText(String(_0x2124d6), _0x56b901 + 8, _0x3ebe96 + 21);
      _0x56b901 += _0x5d9434[4];
      _0x30986a.fillText(String(_0x5868b7), _0x56b901 + 8, _0x3ebe96 + 21);
      _0x56b901 += _0x5d9434[5];
      _0x30986a.fillText(String(_0x5c028e), _0x56b901 + 8, _0x3ebe96 + 21);
      _0x30986a.strokeStyle = _0x1e69d1.border;
      _0x30986a.lineWidth = 1;
      _0x30986a.strokeRect(_0x223372, _0x33edfe, _0x9b5e6b - _0x223372 * 2, (_0x22e432.length + 2) * _0x20ff17);
      _0x30986a.fillStyle = _0x1e69d1.footerText;
      _0x30986a.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x30986a.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), _0x223372, _0x36cbb0 - _0x223372);
      await _0x4410da(_0x61b101, "蟠桃园统计_" + _0x3ac9ac + "_" + _0x1fd235.replace(/[/-]/g, "") + ".png", _0x30927d);
    }
  };
  const _0x230199 = async () => {
    const _0x2c9aa9 = document.getElementById("qa-peachtree-date");
    const _0x32d172 = document.getElementById("qa-peachtree-content");
    if (!_0x32d172) {
      return;
    }
    const _0x4b691a = _0x2c9aa9?.["value"]?.["trim"]();
    if (!_0x4b691a) {
      {
        _0x32d172.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请输入日期</div>";
        return;
      }
    }
    _0x32d172.innerHTML = "<div class=\"helper-text\">查询中...</div>";
    try {
      const _0x453ec1 = await _0x361aec("legion_getinfo", {});
      const _0x18708e = _0x453ec1._rawData || _0x453ec1;
      if (!_0x18708e?.["info"]?.["id"]) {
        throw new Error("获取军团信息失败");
      }
      const _0x249cd3 = _0x18708e.info.id;
      const _0x7e1d6c = _0x18708e.info.name || "本俱乐部";
      const _0x5a247f = _0x18708e.info.logo || "";
      const _0x3d62ee = _0x18708e.info.power || 0;
      let _0xbfc3c3 = null;
      let _0x1652b6 = "对手俱乐部";
      let _0xe7ac82 = "";
      let _0x2355cb = 0;
      const _0x4cb5d7 = await _0x361aec("legion_getpayloadrecord", {});
      const _0x5105f1 = _0x4cb5d7?.["_rawData"] || _0x4cb5d7;
      const _0x4ab661 = _0x5105f1?.["enemyLegionMap"] || {};
      const _0x269cdf = _0x4b691a.split(/[/-]/);
      let _0x6d43ae;
      if (_0x269cdf.length >= 3) {
        const _0x5cae4c = _0x269cdf[0].length === 2 ? "20" + _0x269cdf[0] : _0x269cdf[0];
        _0x6d43ae = _0xca33b(new Date(_0x5cae4c, parseInt(_0x269cdf[1]) - 1, parseInt(_0x269cdf[2])));
      } else {
        _0x6d43ae = _0xca33b();
      }
      const _0x3fa87c = _0x3ecb67(_0x6d43ae);
      _0x1ddb84("[蟠桃园战绩] 查找对手日期: " + _0x3fa87c, "info");
      if (_0x4ab661[_0x3fa87c]) {
        _0xbfc3c3 = _0x4ab661[_0x3fa87c].id;
        _0x1652b6 = _0x4ab661[_0x3fa87c].name || "对手俱乐部";
      } else {
        const _0x1fe72a = Object.keys(_0x4ab661).sort().reverse();
        _0x1ddb84("[蟠桃园战绩] enemyLegionMap 可用日期: " + _0x1fe72a.join(", "), "info");
        _0x1fe72a.length > 0 && (_0xbfc3c3 = _0x4ab661[_0x1fe72a[0]].id, _0x1652b6 = _0x4ab661[_0x1fe72a[0]].name || "对手俱乐部");
      }
      if (_0xbfc3c3) {
        const _0xe72b9a = {
          legionId: _0xbfc3c3
        };
        const _0x5bc5d4 = await _0x361aec("legion_getinfobyid", _0xe72b9a);
        const _0x163cfe = _0x5bc5d4?.["_rawData"] || _0x5bc5d4;
        const _0x2dd14a = _0x163cfe?.["legionData"] || _0x163cfe?.["info"] || {};
        _0x1652b6 = _0x2dd14a.name || _0x1652b6;
        _0xe7ac82 = _0x2dd14a.logo || "";
        _0x2355cb = _0x2dd14a.power || 0;
      }
      const _0x358b24 = _0x269cdf.length >= 3 ? [_0x269cdf[0].slice(2) + _0x269cdf[1] + _0x269cdf[2], _0x4b691a.replace(/[/-]/g, "")] : [_0x4b691a.replace(/[/-]/g, ""), _0x4b691a];
      let _0x460568 = null;
      for (const _0xbcb9a1 of _0x358b24) {
        try {
          const _0x2acd63 = {
            date: _0xbcb9a1
          };
          _0x460568 = await _0x361aec("legion_getpayloadkillrecord", _0x2acd63);
          const _0x1166fa = _0x460568._rawData || _0x460568;
          if (_0x1166fa?.["recordsMap"]) {
            break;
          }
        } catch (_0x46836e) {
          continue;
        }
      }
      if (!_0x460568) {
        throw new Error("获取战斗记录失败");
      }
      const _0x286dfe = _0x460568._rawData || _0x460568;
      const _0x2923e3 = _0x286dfe.recordsMap;
      const _0x5c04e6 = _0x2923e3[_0x249cd3] || _0x2923e3[String(_0x249cd3)] || [];
      const _0xd4f079 = _0xbfc3c3 ? _0x2923e3[_0xbfc3c3] || _0x2923e3[String(_0xbfc3c3)] || [] : [];
      const _0x30ad76 = _0x2ed306 => _0x2ed306.map(_0x348699 => ({
        ..._0x348699,
        kd: _0x348699.reviveCnt > 0 ? ((_0x348699.killCnt || 0) / _0x348699.reviveCnt).toFixed(2) : (_0x348699.killCnt || 0).toFixed(2)
      })).sort((_0x4e46f1, _0x42ecc4) => (_0x42ecc4.killCnt || 0) - (_0x4e46f1.killCnt || 0));
      const _0xb16b28 = _0x30ad76(_0x5c04e6);
      const _0x59ee2e = _0x30ad76(_0xd4f079);
      const _0x5f0509 = _0xb16b28.reduce((_0xb207e, _0x37e8b8) => _0xb207e + (_0x37e8b8.killCnt || 0), 0);
      const _0x191173 = _0x59ee2e.reduce((_0x4cdad6, _0xeaebb0) => _0x4cdad6 + (_0xeaebb0.killCnt || 0), 0);
      const _0x49ac8f = {
        id: _0x249cd3,
        name: _0x7e1d6c,
        logo: _0x5a247f,
        power: _0x3d62ee,
        members: _0xb16b28,
        totalKill: _0x5f0509
      };
      const _0x4c30fd = {
        id: _0xbfc3c3,
        name: _0x1652b6,
        logo: _0xe7ac82,
        power: _0x2355cb,
        members: _0x59ee2e,
        totalKill: _0x191173
      };
      const _0x3dead3 = {
        date: _0x4b691a,
        my: _0x49ac8f,
        opponent: _0x4c30fd
      };
      _0x5e3089 = _0x3dead3;
      _0x586859(_0x5e3089);
      _0x1c1945 = "battle";
      _0x30927d("战绩查询成功", "success");
    } catch (_0x436081) {
      _0x1ddb84("[蟠桃园] 战绩查询失败: " + _0x436081.message, "error");
      _0x32d172.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + _0x436081.message + "</div>";
      _0x30927d("战绩查询失败: " + _0x436081.message, "error");
    }
  };
  const _0x3c59af = (_0x277b9c, _0x76da11, _0xe89e15) => {
    const _0x513aae = {
      kill: "击杀榜",
      kd: "K/D榜",
      revive: "复活榜"
    };
    const _0x3bf6d0 = _0xeb9ff0 => {
      {
        if (_0xe89e15 === "kill") {
          return _0xeb9ff0.killCnt || 0;
        }
        if (_0xe89e15 === "kd") {
          return parseFloat(_0xeb9ff0.kd) || 0;
        }
        if (_0xe89e15 === "revive") {
          return _0xeb9ff0.reviveCnt || 0;
        }
        return 0;
      }
    };
    const _0x3e5f5e = _0x1b5dc6 => {
      {
        if (_0xe89e15 === "kd") {
          return _0x1b5dc6.kd;
        }
        return _0x3bf6d0(_0x1b5dc6);
      }
    };
    const _0x14233b = [..._0x277b9c.map(_0x192939 => ({
      ..._0x192939,
      side: "my"
    })), ..._0x76da11.map(_0x346a4e => ({
      ..._0x346a4e,
      side: "opponent"
    }))].sort((_0x2d36d9, _0xf82850) => _0x3bf6d0(_0xf82850) - _0x3bf6d0(_0x2d36d9)).slice(0, 3);
    const _0x16f57f = ["#fbbf24", "#9ca3af", "#cd7f32"];
    return "\n    <div class=\"rank-board\" style=\"flex:1;min-width:140px;background:var(--qa-bg-2);border-radius:8px;padding:8px;\">\n      <div style=\"text-align:center;font-size:11px;font-weight:600;color:var(--qa-accent);margin-bottom:6px;\">" + _0x513aae[_0xe89e15] + "</div>\n      " + _0x14233b.map((_0x11458c, _0x4d4d83) => {
      {
        const _0x40eb03 = _0x11458c.roleInfo || {};
        const _0x49f2cb = _0x11458c.side === "my" ? "#60a5fa" : "#f87171";
        return "\n          <div style=\"display:flex;align-items:center;gap:4px;padding:3px 0;font-size:10px;color:var(--qa-text-1);\">\n            <span style=\"color:" + _0x16f57f[_0x4d4d83] + ";font-weight:bold;width:14px;\">" + (_0x4d4d83 + 1) + "</span>\n            " + (_0x40eb03.headImg ? "<img src=\"" + _0x40eb03.headImg + "\" style=\"width:16px;height:16px;border-radius:3px;\" onerror=\"this.style.display='none'\">" : "<span style=\"width:16px;\"></span>") + "\n            <span style=\"flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:" + _0x49f2cb + ";\">" + (_0x40eb03.name || "-") + "</span>\n            <span style=\"font-weight:600;\">" + _0x3e5f5e(_0x11458c) + "</span>\n          </div>\n        ";
      }
    }).join("") + "\n    </div>\n  ";
  };
  const _0x50afe8 = (_0x3b51f0, _0xbe7d11) => {
    {
      const _0x3d2324 = _0xbe7d11 === "my" ? "#60a5fa" : "#f87171";
      return "\n    <table style=\"width:100%;border-collapse:collapse;font-size:10px;\">\n      <tr>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";width:20px;\">排名</th>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";\">成员</th>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";width:32px;\">击杀</th>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";width:28px;\">抢船</th>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";width:28px;\">连杀</th>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";width:28px;\">复活</th>\n        <th style=\"padding:4px 2px;color:" + _0x3d2324 + ";width:32px;\">K/D</th>\n      </tr>\n      " + _0x3b51f0.slice(0, 30).map((_0x19644c, _0x122647) => {
        const _0x512fee = _0x19644c.roleInfo || {};
        return "\n          <tr style=\"border-bottom:1px solid var(--qa-border);\">\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (_0x122647 + 1) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">\n              <div style=\"display:inline-flex;align-items:center;justify-content:center;gap:3px;\">\n                " + (_0x512fee.headImg ? "<img src=\"" + _0x512fee.headImg + "\" style=\"width:14px;height:14px;border-radius:2px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "\n                <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60px;\">" + (_0x512fee.name || "-") + "</span>\n              </div>\n            </td>\n            <td style=\"padding:3px 2px;text-align:center;color:#f87171;font-weight:600;\">" + (_0x19644c.killCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (_0x19644c.carCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (_0x19644c.mCKCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (_0x19644c.reviveCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:#fbbf24;\">" + _0x19644c.kd + "</td>\n          </tr>\n        ";
      }).join("") + "\n    </table>\n  ";
    }
  };
  const _0x586859 = _0x478f4d => {
    {
      const _0x53b330 = document.getElementById("qa-peachtree-content");
      if (!_0x53b330 || !_0x478f4d) {
        return;
      }
      const {
        my: _0x5aebfc,
        opponent: _0x52b31f,
        date: _0x4825d6
      } = _0x478f4d;
      _0x53b330.innerHTML = "\n    <div class=\"peachtree-battle-vs\" style=\"background:var(--qa-bg-2);border-radius:12px;padding:16px;margin-bottom:12px;\">\n      <!-- VS头部 -->\n      <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;\">\n        <!-- 左侧俱乐部 -->\n        <div style=\"flex:1;text-align:center;\">\n          " + (_0x5aebfc.logo ? "<img src=\"" + _0x5aebfc.logo + "\" style=\"width:48px;height:48px;border-radius:8px;margin-bottom:4px;\" onerror=\"this.style.display='none'\">" : "<div style=\"width:48px;height:48px;border-radius:8px;background:#3b82f6;margin:0 auto 4px;\"></div>") + "\n          <div style=\"font-size:13px;font-weight:600;color:#60a5fa;\">" + _0x5aebfc.name + "</div>\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">战力: " + _0x301bab(_0x5aebfc.power) + "</div>\n        </div>\n        <!-- VS中间 -->\n        <div style=\"text-align:center;padding:0 12px;\">\n          <div style=\"font-size:20px;font-weight:bold;background:linear-gradient(135deg,#fbbf24,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;\">VS</div>\n          <div style=\"font-size:10px;color:var(--qa-text-2);margin:4px 0;\">" + _0x4825d6 + "</div>\n          <div style=\"font-size:11px;color:var(--qa-text-2);\">总击杀</div>\n          <div style=\"font-size:16px;font-weight:bold;\">\n            <span style=\"color:#60a5fa;\">" + _0x5aebfc.totalKill + "</span>\n            <span style=\"color:var(--qa-text-2);margin:0 4px;\">:</span>\n            <span style=\"color:#f87171;\">" + _0x52b31f.totalKill + "</span>\n          </div>\n        </div>\n        <!-- 右侧俱乐部 -->\n        <div style=\"flex:1;text-align:center;\">\n          " + (_0x52b31f.logo ? "<img src=\"" + _0x52b31f.logo + "\" style=\"width:48px;height:48px;border-radius:8px;margin-bottom:4px;\" onerror=\"this.style.display='none'\">" : "<div style=\"width:48px;height:48px;border-radius:8px;background:#ef4444;margin:0 auto 4px;\"></div>") + "\n          <div style=\"font-size:13px;font-weight:600;color:#f87171;\">" + _0x52b31f.name + "</div>\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">战力: " + _0x301bab(_0x52b31f.power) + "</div>\n        </div>\n      </div>\n\n      <!-- 排行榜 -->\n      <div style=\"display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;\">\n        " + _0x3c59af(_0x5aebfc.members, _0x52b31f.members, "kill") + "\n        " + _0x3c59af(_0x5aebfc.members, _0x52b31f.members, "kd") + "\n        " + _0x3c59af(_0x5aebfc.members, _0x52b31f.members, "revive") + "\n      </div>\n\n      <!-- 双方成员列表 -->\n      <div style=\"display:flex;gap:8px;\">\n        <div style=\"flex:1;min-width:0;\">\n          <div style=\"font-size:11px;font-weight:600;color:#60a5fa;margin-bottom:6px;display:flex;align-items:center;gap:4px;\">\n            <span style=\"width:8px;height:8px;background:rgba(59,130,246,0.3);border-radius:50%;border:1.5px solid #3b82f6;box-sizing:border-box;\"></span>\n            " + _0x5aebfc.name + "\n          </div>\n          <div style=\"background:var(--qa-bg-3);border-radius:8px;padding:6px;max-height:400px;overflow-y:auto;\">\n            " + _0x50afe8(_0x5aebfc.members, "my") + "\n          </div>\n        </div>\n        <div style=\"flex:1;min-width:0;\">\n          <div style=\"font-size:11px;font-weight:600;color:#f87171;margin-bottom:6px;display:flex;align-items:center;gap:4px;\">\n            <span style=\"width:8px;height:8px;background:rgba(239,68,68,0.3);border-radius:50%;border:1.5px solid #ef4444;box-sizing:border-box;\"></span>\n            " + _0x52b31f.name + "\n          </div>\n          <div style=\"background:var(--qa-bg-3);border-radius:8px;padding:6px;max-height:400px;overflow-y:auto;\">\n            " + _0x50afe8(_0x52b31f.members, "opponent") + "\n          </div>\n        </div>\n      </div>\n    </div>\n  ";
    }
  };
  const _0x5de94a = async () => {
    if (!_0x5e3089) {
      _0x30927d("无战绩数据可导出", "warning");
      return;
    }
    const _0x950327 = _0x1b528f();
    const {
      my: _0x33dfec,
      opponent: _0x35fd07,
      date: _0x1f8e70
    } = _0x5e3089;
    const _0x456cb0 = [..._0x33dfec.members, ..._0x35fd07.members];
    const _0x56c39a = new Map();
    await Promise.all(_0x456cb0.map(async _0x2a5c71 => {
      {
        const _0x3bb3da = _0x2a5c71.roleInfo || {};
        if (_0x3bb3da.headImg) {
          const _0x74c5f9 = await _0x596c9d(_0x3bb3da.headImg);
          if (_0x74c5f9) {
            _0x56c39a.set(_0x3bb3da.headImg, _0x74c5f9);
          }
        }
      }
    }));
    const _0x5276c7 = _0x33dfec.logo ? await _0x596c9d(_0x33dfec.logo) : null;
    const _0x44078b = _0x35fd07.logo ? await _0x596c9d(_0x35fd07.logo) : null;
    const _0x3629c9 = 2;
    const _0x240a93 = document.createElement("canvas");
    const _0x918957 = _0x240a93.getContext("2d");
    const _0x4aabab = 24;
    const _0x5ebcfd = 20;
    const _0x2803ec = 30;
    const _0x4bb03e = 140;
    const _0x5c35c0 = 100;
    const _0x5cd840 = 32;
    const _0x489d8a = Math.max(_0x33dfec.members.length, _0x35fd07.members.length, 30);
    const _0x5e95b2 = Math.min(_0x489d8a, 30);
    const _0x575773 = ["排名", "成员", "击杀", "抢船", "连杀", "复活", "K/D"];
    const _0x548476 = [40, 120, 50, 45, 45, 45, 50];
    const _0x1edb4a = _0x548476.reduce((_0x5cb26b, _0x372b46) => _0x5cb26b + _0x372b46, 0);
    const _0x21dd22 = _0x1edb4a * 2 + _0x4aabab * 3;
    const _0x4895b8 = _0x4bb03e + _0x5c35c0 + _0x5cd840 + _0x5e95b2 * _0x2803ec + _0x4aabab * 2 + 40;
    _0x240a93.width = _0x21dd22 * _0x3629c9;
    _0x240a93.height = _0x4895b8 * _0x3629c9;
    _0x918957.scale(_0x3629c9, _0x3629c9);
    const _0x19d55a = _0x918957.createLinearGradient(0, 0, 0, _0x4895b8);
    _0x19d55a.addColorStop(0, _0x950327.bg);
    _0x19d55a.addColorStop(1, _0x386da5.theme === "dark" ? "#0f0f1a" : "#f8fafc");
    _0x918957.fillStyle = _0x19d55a;
    _0x918957.fillRect(0, 0, _0x21dd22, _0x4895b8);
    const _0x48c700 = _0x21dd22 / 2;
    const _0x1522a7 = 56;
    const _0x9f5398 = _0x4aabab + 10;
    _0x918957.save();
    _0x918957.beginPath();
    _0x918957.roundRect(_0x4aabab + 40, _0x9f5398, _0x1522a7, _0x1522a7, 10);
    _0x918957.clip();
    _0x5276c7 ? _0x918957.drawImage(_0x5276c7, _0x4aabab + 40, _0x9f5398, _0x1522a7, _0x1522a7) : (_0x918957.fillStyle = "#3b82f6", _0x918957.fillRect(_0x4aabab + 40, _0x9f5398, _0x1522a7, _0x1522a7));
    _0x918957.restore();
    _0x918957.fillStyle = "#60a5fa";
    _0x918957.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.textAlign = "center";
    _0x918957.fillText(_0x33dfec.name, _0x4aabab + 40 + _0x1522a7 / 2, _0x9f5398 + _0x1522a7 + 20);
    _0x918957.fillStyle = _0x950327.textSecondary;
    _0x918957.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillText("战力: " + _0x301bab(_0x33dfec.power), _0x4aabab + 40 + _0x1522a7 / 2, _0x9f5398 + _0x1522a7 + 36);
    _0x918957.fillStyle = _0x950327.gold;
    _0x918957.font = "bold 28px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.textAlign = "center";
    _0x918957.fillText("VS", _0x48c700, _0x9f5398 + 30);
    _0x918957.fillStyle = _0x950327.textSecondary;
    _0x918957.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillText(_0x1f8e70, _0x48c700, _0x9f5398 + 48);
    _0x918957.fillText("总击杀", _0x48c700, _0x9f5398 + 68);
    _0x918957.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillStyle = "#60a5fa";
    _0x918957.fillText(String(_0x33dfec.totalKill), _0x48c700 - 35, _0x9f5398 + 92);
    _0x918957.fillStyle = _0x950327.textSecondary;
    _0x918957.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillText(":", _0x48c700, _0x9f5398 + 92);
    _0x918957.fillStyle = "#f87171";
    _0x918957.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillText(String(_0x35fd07.totalKill), _0x48c700 + 35, _0x9f5398 + 92);
    _0x918957.save();
    _0x918957.beginPath();
    _0x918957.roundRect(_0x21dd22 - _0x4aabab - 40 - _0x1522a7, _0x9f5398, _0x1522a7, _0x1522a7, 10);
    _0x918957.clip();
    if (_0x44078b) {
      _0x918957.drawImage(_0x44078b, _0x21dd22 - _0x4aabab - 40 - _0x1522a7, _0x9f5398, _0x1522a7, _0x1522a7);
    } else {
      {
        _0x918957.fillStyle = "#ef4444";
        _0x918957.fillRect(_0x21dd22 - _0x4aabab - 40 - _0x1522a7, _0x9f5398, _0x1522a7, _0x1522a7);
      }
    }
    _0x918957.restore();
    _0x918957.fillStyle = "#f87171";
    _0x918957.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.textAlign = "center";
    _0x918957.fillText(_0x35fd07.name, _0x21dd22 - _0x4aabab - 40 - _0x1522a7 / 2, _0x9f5398 + _0x1522a7 + 20);
    _0x918957.fillStyle = _0x950327.textSecondary;
    _0x918957.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillText("战力: " + _0x301bab(_0x35fd07.power), _0x21dd22 - _0x4aabab - 40 - _0x1522a7 / 2, _0x9f5398 + _0x1522a7 + 36);
    _0x918957.textAlign = "left";
    const _0x2c90a1 = _0x4bb03e;
    const _0x48d353 = (_0x21dd22 - _0x4aabab * 4) / 3;
    const _0x32a450 = _0x5c35c0 - 16;
    const _0x42cfa3 = {
      key: "kill",
      title: "击杀榜",
      getValue: _0x42e633 => _0x42e633.killCnt || 0,
      format: _0x797150 => _0x797150
    };
    const _0x1a0244 = [_0x42cfa3, {
      key: "kd",
      title: "K/D榜",
      getValue: _0x1f79da => parseFloat(_0x1f79da.kd) || 0,
      format: (_0x21fd57, _0x5ad8dc) => _0x5ad8dc.kd
    }, {
      key: "revive",
      title: "复活榜",
      getValue: _0x99ad19 => _0x99ad19.reviveCnt || 0,
      format: _0x5f4d78 => _0x5f4d78
    }];
    const _0x3f214f = ["#fbbf24", "#9ca3af", "#cd7f32"];
    _0x1a0244.forEach((_0x532e38, _0x4851f8) => {
      const _0x5b5bd8 = _0x4aabab + _0x4851f8 * (_0x48d353 + _0x4aabab / 2);
      _0x918957.fillStyle = _0x386da5.theme === "dark" ? "#1e1e2e" : "#f1f5f9";
      _0x918957.beginPath();
      _0x918957.roundRect(_0x5b5bd8, _0x2c90a1, _0x48d353, _0x32a450, 8);
      _0x918957.fill();
      _0x918957.fillStyle = _0x950327.gold;
      _0x918957.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x918957.textAlign = "center";
      _0x918957.fillText(_0x532e38.title, _0x5b5bd8 + _0x48d353 / 2, _0x2c90a1 + 18);
      const _0x52debb = [..._0x33dfec.members.map(_0x36b90b => ({
        ..._0x36b90b,
        side: "my"
      })), ..._0x35fd07.members.map(_0x27e365 => ({
        ..._0x27e365,
        side: "opponent"
      }))].sort((_0x31059a, _0x57072d) => _0x532e38.getValue(_0x57072d) - _0x532e38.getValue(_0x31059a)).slice(0, 3);
      _0x52debb.forEach((_0x175a5e, _0x2031e9) => {
        {
          const _0x3d74c2 = _0x175a5e.roleInfo || {};
          const _0xfd83c3 = _0x2c90a1 + 28 + _0x2031e9 * 22;
          const _0x3c950c = _0x175a5e.side === "my" ? "#60a5fa" : "#f87171";
          _0x918957.fillStyle = _0x3f214f[_0x2031e9];
          _0x918957.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
          _0x918957.textAlign = "left";
          _0x918957.fillText(String(_0x2031e9 + 1), _0x5b5bd8 + 8, _0xfd83c3 + 14);
          const _0x105b33 = _0x3d74c2.headImg ? _0x56c39a.get(_0x3d74c2.headImg) : null;
          _0x105b33 && (_0x918957.save(), _0x918957.beginPath(), _0x918957.roundRect(_0x5b5bd8 + 22, _0xfd83c3 + 2, 16, 16, 3), _0x918957.clip(), _0x918957.drawImage(_0x105b33, _0x5b5bd8 + 22, _0xfd83c3 + 2, 16, 16), _0x918957.restore());
          _0x918957.fillStyle = _0x3c950c;
          _0x918957.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
          _0x918957.fillText((_0x3d74c2.name || "-").substring(0, 8), _0x5b5bd8 + 42, _0xfd83c3 + 14);
          _0x918957.fillStyle = _0x950327.text;
          _0x918957.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
          _0x918957.textAlign = "right";
          _0x918957.fillText(String(_0x532e38.format(_0x532e38.getValue(_0x175a5e), _0x175a5e)), _0x5b5bd8 + _0x48d353 - 8, _0xfd83c3 + 14);
        }
      });
      _0x918957.textAlign = "left";
    });
    const _0x1e488f = _0x4bb03e + _0x5c35c0;
    const _0x578b0b = (_0x348948, _0xf20acb, _0x35bf7d, _0xb94555) => {
      const _0xab7993 = _0xf20acb + 4;
      const _0x4dae75 = _0x1e488f + 6;
      const _0x252de4 = 4;
      _0x918957.beginPath();
      _0x918957.arc(_0xab7993, _0x4dae75, _0x252de4, 0, Math.PI * 2);
      _0x918957.fillStyle = _0xb94555 === "#60a5fa" ? "rgba(59,130,246,0.3)" : "rgba(248,113,113,0.3)";
      _0x918957.fill();
      _0x918957.beginPath();
      _0x918957.arc(_0xab7993, _0x4dae75, _0x252de4, 0, Math.PI * 2);
      _0x918957.strokeStyle = _0xb94555;
      _0x918957.lineWidth = 1.5;
      _0x918957.stroke();
      _0x918957.fillStyle = _0xb94555;
      _0x918957.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x918957.fillText(_0x35bf7d, _0xf20acb + 12, _0x1e488f + 12);
      const _0x49722c = _0x1e488f + 20;
      _0x918957.fillStyle = _0x386da5.theme === "dark" ? "#252538" : "#e2e8f0";
      _0x918957.beginPath();
      _0x918957.roundRect(_0xf20acb, _0x49722c, _0x1edb4a, _0x5cd840, [8, 8, 0, 0]);
      _0x918957.fill();
      _0x918957.fillStyle = _0xb94555;
      _0x918957.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0x44d3d4 = _0xf20acb;
      _0x575773.forEach((_0x4c6f0f, _0x2e2f7f) => {
        {
          const _0x5091f9 = _0x44d3d4 + _0x548476[_0x2e2f7f] / 2;
          _0x918957.textAlign = "center";
          _0x918957.fillText(_0x4c6f0f, _0x5091f9, _0x49722c + 21);
          _0x44d3d4 += _0x548476[_0x2e2f7f];
        }
      });
      _0x918957.textAlign = "left";
      _0x918957.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x348948.slice(0, _0x5e95b2).forEach((_0x5ee25d, _0x28dff1) => {
        {
          const _0x8b361d = _0x49722c + _0x5cd840 + _0x28dff1 * _0x2803ec;
          const _0x1fc64e = _0x5ee25d.roleInfo || {};
          _0x28dff1 % 2 === 1 && (_0x918957.fillStyle = _0x950327.zebraStripe, _0x918957.fillRect(_0xf20acb, _0x8b361d, _0x1edb4a, _0x2803ec));
          let _0x2a37de = _0xf20acb;
          _0x918957.fillStyle = _0x950327.text;
          _0x918957.textAlign = "center";
          _0x918957.fillText(String(_0x28dff1 + 1), _0x2a37de + _0x548476[0] / 2, _0x8b361d + 20);
          _0x2a37de += _0x548476[0];
          const _0x17f037 = _0x1fc64e.headImg ? _0x56c39a.get(_0x1fc64e.headImg) : null;
          _0x17f037 && (_0x918957.save(), _0x918957.beginPath(), _0x918957.roundRect(_0x2a37de + 4, _0x8b361d + (_0x2803ec - _0x5ebcfd) / 2, _0x5ebcfd, _0x5ebcfd, 4), _0x918957.clip(), _0x918957.drawImage(_0x17f037, _0x2a37de + 4, _0x8b361d + (_0x2803ec - _0x5ebcfd) / 2, _0x5ebcfd, _0x5ebcfd), _0x918957.restore());
          _0x918957.fillStyle = _0x950327.text;
          _0x918957.textAlign = "left";
          _0x918957.fillText((_0x1fc64e.name || "-").substring(0, 6), _0x2a37de + _0x5ebcfd + 8, _0x8b361d + 20);
          _0x2a37de += _0x548476[1];
          _0x918957.fillStyle = _0x950327.red;
          _0x918957.textAlign = "center";
          _0x918957.fillText(String(_0x5ee25d.killCnt || 0), _0x2a37de + _0x548476[2] / 2, _0x8b361d + 20);
          _0x2a37de += _0x548476[2];
          _0x918957.fillStyle = _0x950327.text;
          _0x918957.fillText(String(_0x5ee25d.carCnt || 0), _0x2a37de + _0x548476[3] / 2, _0x8b361d + 20);
          _0x2a37de += _0x548476[3];
          _0x918957.fillText(String(_0x5ee25d.mCKCnt || 0), _0x2a37de + _0x548476[4] / 2, _0x8b361d + 20);
          _0x2a37de += _0x548476[4];
          _0x918957.fillText(String(_0x5ee25d.reviveCnt || 0), _0x2a37de + _0x548476[5] / 2, _0x8b361d + 20);
          _0x2a37de += _0x548476[5];
          _0x918957.fillStyle = _0x950327.gold;
          _0x918957.fillText(_0x5ee25d.kd || "0", _0x2a37de + _0x548476[6] / 2, _0x8b361d + 20);
        }
      });
      _0x918957.textAlign = "left";
      _0x918957.strokeStyle = _0x950327.border;
      _0x918957.lineWidth = 1;
      _0x918957.beginPath();
      _0x918957.roundRect(_0xf20acb, _0x49722c, _0x1edb4a, _0x5cd840 + _0x5e95b2 * _0x2803ec, 8);
      _0x918957.stroke();
    };
    _0x578b0b(_0x33dfec.members, _0x4aabab, _0x33dfec.name, "#60a5fa");
    _0x578b0b(_0x35fd07.members, _0x4aabab * 2 + _0x1edb4a, _0x35fd07.name, "#f87171");
    _0x918957.fillStyle = _0x950327.footerText;
    _0x918957.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x918957.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), _0x4aabab, _0x4895b8 - _0x4aabab);
    await _0x4410da(_0x240a93, "蟠桃园战绩_" + _0x33dfec.name + "_vs_" + _0x35fd07.name + "_" + _0x1f8e70.replace(/[/-]/g, "") + ".png", _0x30927d);
  };
  const _0x4fd132 = async () => {
    {
      if (_0x1c1945 === "battle" && _0x5e3089) {
        await _0x5de94a();
      } else {
        if (_0x1c1945 === "opponent" && _0x4168f6) {
          await _0x21c9b9();
        } else {
          if (_0x5e3089) {
            await _0x5de94a();
          } else {
            _0x4168f6 ? await _0x21c9b9() : _0x30927d("请先查询战绩或对手信息", "warning");
          }
        }
      }
    }
  };
  const _0x4027e6 = {
    attempted: 0,
    success: 0,
    fail: 0
  };
  const _0x404150 = {
    isRunning: false,
    stats: _0x4027e6,
    delay: 1000,
    getSelectedLevels() {
      const _0x589c3c = document.querySelectorAll("input[name=\"treasure-level\"]:checked");
      const _0x2b669a = [];
      _0x589c3c.forEach(_0x542fab => {
        _0x542fab.value === "below_7" ? [1, 2, 3, 4, 5, 6].forEach(_0x2209f5 => _0x2b669a.push(_0x2209f5)) : _0x2b669a.push(parseInt(_0x542fab.value, 10));
      });
      return [...new Set(_0x2b669a)];
    },
    log(_0x27d228) {
      const _0x302317 = document.getElementById("treasure-log");
      if (!_0x302317) {
        return;
      }
      const _0x230956 = new Date().toLocaleTimeString();
      _0x302317.innerHTML = "<div>" + _0x230956 + ": " + _0x27d228 + "</div>" + _0x302317.innerHTML;
    },
    updateStats() {
      const _0x6aeb77 = document.getElementById("treasure-attempted");
      const _0x59e506 = document.getElementById("treasure-success");
      const _0x578f1e = document.getElementById("treasure-fail");
      if (_0x6aeb77) {
        _0x6aeb77.textContent = this.stats.attempted;
      }
      if (_0x59e506) {
        _0x59e506.textContent = this.stats.success;
      }
      if (_0x578f1e) {
        _0x578f1e.textContent = this.stats.fail;
      }
    },
    async start() {
      if (this.isRunning) {
        return;
      }
      this.isRunning = true;
      const _0x17e128 = document.getElementById("treasure-start-btn");
      const _0x4a2097 = document.querySelectorAll("input[name=\"treasure-level\"]");
      const _0x765c02 = document.getElementById("treasure-switch");
      const _0x144eb7 = document.getElementById("treasure-team");
      if (_0x17e128) {
        _0x17e128.textContent = "停止助战";
      }
      _0x4a2097.forEach(_0x4de25f => _0x4de25f.disabled = true);
      if (_0x765c02) {
        _0x765c02.disabled = true;
      }
      if (_0x144eb7) {
        _0x144eb7.disabled = true;
      }
      const _0x3f9c80 = {
        attempted: 0,
        success: 0,
        fail: 0
      };
      this.stats = _0x3f9c80;
      this.updateStats();
      this.log("脚本启动");
      this.loop();
    },
    stop() {
      {
        this.isRunning = false;
        const _0xb07812 = document.getElementById("treasure-start-btn");
        const _0x4eb421 = document.querySelectorAll("input[name=\"treasure-level\"]");
        const _0x20c2f0 = document.getElementById("treasure-switch");
        const _0x2ff4d5 = document.getElementById("treasure-team");
        if (_0xb07812) {
          _0xb07812.textContent = "开始助战";
        }
        _0x4eb421.forEach(_0x3322b4 => _0x3322b4.disabled = false);
        if (_0x20c2f0) {
          _0x20c2f0.disabled = false;
        }
        if (_0x2ff4d5 && _0x20c2f0?.["checked"]) {
          _0x2ff4d5.disabled = false;
        }
        this.log("脚本停止");
      }
    },
    async loop() {
      if (!this.isRunning) {
        return;
      }
      const _0x4f6344 = this.getSelectedLevels();
      if (_0x4f6344.length === 0) {
        this.log("未选择层数");
        this.stop();
        return;
      }
      try {
        this.log("查找房间 " + _0x4f6344.join(","));
        const _0x448e4e = await _0x361aec("bosstower_gethall", {});
        const _0x3e5c0c = _0x448e4e?.["_rawData"] || _0x448e4e;
        const _0x432029 = _0x3e5c0c?.["recommendRoleList"] || [];
        const _0x2377fb = _0x432029.find(_0x38576e => _0x4f6344.includes(_0x38576e.towerId));
        if (_0x2377fb) {
          {
            this.log("找到房间 " + _0x2377fb.towerId + " 层");
            this.stats.attempted++;
            const _0x25128c = document.getElementById("treasure-switch");
            if (_0x25128c?.["checked"]) {
              const _0x277b3f = document.getElementById("treasure-team");
              const _0x1682c8 = parseInt(_0x277b3f?.["value"] || "1", 10);
              this.log("切换阵容 " + _0x1682c8);
              const _0x3adcae = {
                teamId: _0x1682c8
              };
              await _0x361aec("presetteam_saveteam", _0x3adcae);
              await _0x361aec("presetteam_getinfo", {});
            }
            const _0x5b253e = {
              name: "",
              notice: "",
              secret: 0,
              apply: 0,
              applyList: []
            };
            const _0x2e1155 = {
              teamCfgId: 6,
              setting: _0x5b253e,
              param: 0,
              custom: {
                leaderId: String(_0x2377fb.id),
                teamId: _0x2377fb.teamId
              }
            };
            const _0x486518 = await _0x361aec("matchteam_create", _0x2e1155);
            const _0x195417 = _0x486518?.["_rawData"] || _0x486518;
            const _0x50337b = _0x195417?.["teamInfo"]?.["fightRoleBase"] || [];
            if (!_0x50337b.length) {
              throw new Error("进房失败");
            }
            const _0x5526c9 = _0x50337b.find(_0x2fc3b7 => _0x2fc3b7.roleId !== _0x2377fb.id);
            if (!_0x5526c9) {
              throw new Error("无法定位自己");
            }
            const _0x541fcb = _0x5526c9.roleId;
            const _0x5762ee = {
              cCMonsterId: 0,
              targetId: _0x541fcb,
              teamType: 11
            };
            const _0x3624b8 = await _0x361aec("role_gettargetteam", _0x5762ee);
            const _0x5183b8 = _0x3624b8?.["_rawData"] || _0x3624b8;
            const _0x3a28ff = _0x5183b8?.["teamInfo"] || {};
            const _0x8073bd = _0x3a28ff?.["team"];
            const _0x531f91 = _0x3a28ff?.["weaponId"];
            if (!_0x8073bd || !_0x531f91) {
              throw new Error("阵容解析失败");
            }
            const _0x273a2a = {};
            for (const _0x491eae in _0x8073bd) {
              _0x273a2a[_0x491eae] = _0x8073bd[_0x491eae].id;
            }
            if (Object.keys(_0x273a2a).length < 1) {
              throw new Error("阵容为空");
            }
            const _0x41894f = {
              battleTeam: _0x273a2a,
              lordWeaponId: _0x531f91,
              teamType: 11,
              cCMonsterId: 0
            };
            const _0x27c433 = await _0x361aec("team_setteam", _0x41894f);
            const _0xa6ca6d = _0x27c433?.["_rawData"] || _0x27c433;
            const _0x49e532 = _0xa6ca6d?.["body"]?.["battleData"]?.["result"]?.["isWin"];
            _0x49e532 ? (this.stats.success++, this.log("助战成功 " + _0x2377fb.towerId + " 层")) : (this.stats.fail++, this.log("助战失败 " + _0x2377fb.towerId + " 层"));
          }
        } else {
          {
            this.log("未找到房间");
          }
        }
      } catch (_0x2223b7) {
        {
          this.log("错误: " + _0x2223b7.message);
          this.stats.fail++;
        }
      } finally {
        {
          this.updateStats();
          setTimeout(() => this.loop(), this.delay);
        }
      }
    },
    handleClick() {
      {
        if (this.isRunning) {
          this.stop();
        } else {
          this.start();
        }
      }
    }
  };
  const _0x5e1bdc = () => {
    const _0x242637 = document.getElementById("treasure-switch");
    const _0x1cfd0d = document.getElementById("treasure-team");
    const _0x52af4f = document.getElementById("treasure-start-btn");
    _0x242637 && _0x1cfd0d && _0x242637.addEventListener("change", _0x1de730 => {
      _0x1cfd0d.disabled = !_0x1de730.target.checked;
    });
    _0x52af4f && _0x52af4f.addEventListener("click", () => _0x404150.handleClick());
  };
  const _0x2f03a7 = {
    __proto__: null,
    TreasureAssist: _0x404150,
    initTreasureAssist: _0x5e1bdc
  };
  var _0x481579 = Object.freeze(_0x2f03a7);
  const _0x19db26 = {
    name: "司马懿",
    type: "魏国"
  };
  const _0x171962 = {
    name: "郭嘉",
    type: "魏国"
  };
  const _0x500939 = {
    name: "关羽",
    type: "蜀国"
  };
  const _0x30a266 = {
    name: "诸葛亮",
    type: "蜀国"
  };
  const _0x46c13c = {
    name: "周瑜",
    type: "吴国"
  };
  const _0x55ac14 = {
    name: "太史慈",
    type: "吴国"
  };
  const _0x2bd625 = {
    name: "吕布",
    type: "群雄"
  };
  const _0xc8c5e6 = {
    name: "华佗",
    type: "群雄"
  };
  const _0x1c14ef = {
    name: "甄姬",
    type: "魏国"
  };
  const _0x32dbb4 = {
    name: "黄月英",
    type: "蜀国"
  };
  const _0x28ea45 = {
    name: "孙策",
    type: "吴国"
  };
  const _0x19929d = {
    name: "贾诩",
    type: "群雄"
  };
  const _0x5c27df = {
    name: "曹仁",
    type: "魏国"
  };
  const _0x17161c = {
    name: "姜维",
    type: "蜀国"
  };
  const _0x2f0332 = {
    name: "孙坚",
    type: "吴国"
  };
  const _0xee5f2 = {
    name: "公孙瓒",
    type: "群雄"
  };
  const _0x5c35bb = {
    name: "典韦",
    type: "魏国"
  };
  const _0x520b5f = {
    name: "赵云",
    type: "蜀国"
  };
  const _0x521390 = {
    name: "大乔",
    type: "吴国"
  };
  const _0x2e6b7a = {
    name: "张角",
    type: "群雄"
  };
  const _0xe46409 = {
    "101": _0x19db26,
    "102": _0x171962,
    "103": _0x500939,
    "104": _0x30a266,
    "105": _0x46c13c,
    "106": _0x55ac14,
    "107": _0x2bd625,
    "108": _0xc8c5e6,
    "109": _0x1c14ef,
    "110": _0x32dbb4,
    "111": _0x28ea45,
    "112": _0x19929d,
    "113": _0x5c27df,
    "114": _0x17161c,
    "115": _0x2f0332,
    "116": _0xee5f2,
    "117": _0x5c35bb,
    "118": _0x520b5f,
    "119": _0x521390,
    "120": _0x2e6b7a
  };
  const _0x57d703 = {
    name: "初级商人",
    items: ["进阶石", "精铁", "木质宝箱", "青铜宝箱", "普通鱼竿", "挑战票", "咸神火把"]
  };
  const _0x49ccfc = {
    name: "中级商人",
    items: ["梦魇晶石", "进阶石", "精铁", "黄金宝箱", "黄金鱼竿", "招募令", "橙将碎片", "紫将碎片"]
  };
  const _0x48646b = {
    name: "高级商人",
    items: ["梦魇晶石", "铂金宝箱", "黄金鱼竿", "招募令", "红将碎片", "橙将碎片", "红将碎片", "普通鱼竿"]
  };
  const _0x441ab9 = {
    "1": _0x57d703,
    "2": _0x49ccfc,
    "3": _0x48646b
  };
  const _0x13ccb4 = {
    "1": [5, 6],
    "2": [6, 7],
    "3": [5, 6, 7]
  };
  const _0x4c4bee = {
    isLoading: false,
    defaultTeam: null,
    currentTeamHeroes: [],
    hasDefaultInfo: false,
    continuousBattles: {},
    stopOnDefeat: true
  };
  const _0x59ad60 = {
    "1": [],
    "2": [],
    "3": []
  };
  const _0x395977 = {
    battle: _0x4c4bee,
    buy: {
      merchantData: _0x59ad60,
      levelId: 0,
      selectedItems: new Set(),
      isRunning: false
    }
  };
  const _0x13cbcc = _0x3f50e3 => new Promise(_0x5302e8 => setTimeout(_0x5302e8, _0x3f50e3 * 1000));
  const _0xb2b988 = () => {
    const _0x399263 = new Date().getDay();
    return _0x399263 === 0 || _0x399263 === 1 || _0x399263 === 3 || _0x399263 === 4;
  };
  const _0x5b5b4f = (_0x11b9c1, _0x1f60d8 = "info") => {
    const _0x10c06b = document.getElementById("dream-log-container");
    if (!_0x10c06b) {
      return;
    }
    const _0xb9c665 = document.createElement("div");
    const _0x4eb427 = {
      hour12: false
    };
    const _0x5727be = new Date().toLocaleTimeString("zh-CN", _0x4eb427);
    _0xb9c665.textContent = "[" + _0x5727be + "] " + _0x11b9c1;
    let _0x16bd71 = "var(--text-primary)";
    if (_0x1f60d8 === "success") {
      _0x16bd71 = "#34c759";
    }
    if (_0x1f60d8 === "error") {
      _0x16bd71 = "#ff3b30";
    }
    if (_0x1f60d8 === "warning") {
      _0x16bd71 = "#ff9500";
    }
    if (_0x1f60d8 === "info") {
      _0x16bd71 = "#007aff";
    }
    _0xb9c665.style.cssText = "margin:1px 0;padding:3px 5px;border-radius:3px;color:" + _0x16bd71 + ";font-size:11px;";
    _0x10c06b.appendChild(_0xb9c665);
    _0x10c06b.scrollTop = _0x10c06b.scrollHeight;
  };
  const _0x54f291 = async () => {
    if (_0x395977.battle.isLoading) {
      return _0x5b5b4f("操作正在进行中", "warning");
    }
    if (!_0xb2b988()) {
      return _0x5b5b4f("❌ 当前不是梦境开放时间", "error");
    }
    _0x395977.battle.isLoading = true;
    _0x5b5b4f("获取默认队伍信息...", "info");
    try {
      {
        const _0xc2e930 = await _0x361aec("role_getroleinfo", {});
        const _0x4b15f1 = _0xc2e930._rawData || _0xc2e930;
        if (_0x4b15f1?.["role"]?.["battleTeam"]) {
          {
            _0x395977.battle.defaultTeam = _0x4b15f1.role.battleTeam;
            _0x395977.battle.currentTeamHeroes = [];
            for (let _0x68d333 = 0; _0x68d333 < 5; _0x68d333++) {
              const _0x12ec79 = _0x68d333.toString();
              if (_0x395977.battle.defaultTeam[_0x12ec79]) {
                const _0x41553a = _0x395977.battle.defaultTeam[_0x12ec79];
                const _0x596043 = _0x41553a.heroId || _0x41553a;
                if (_0x596043 !== 0 && _0xe46409[_0x596043]) {
                  const _0x18a062 = {
                    id: _0x596043,
                    name: _0xe46409[_0x596043].name,
                    type: _0xe46409[_0x596043].type,
                    position: _0x68d333
                  };
                  _0x395977.battle.currentTeamHeroes.push(_0x18a062);
                }
              }
            }
            _0x395977.battle.hasDefaultInfo = true;
            _0x5b5b4f("✅ 默认队伍信息获取成功", "success");
            _0x3fe580();
            return true;
          }
        } else {
          _0x5b5b4f("❌ 无法提取队伍数据", "error");
          return false;
        }
      }
    } catch (_0x3d9ea7) {
      _0x5b5b4f("❌ 获取默认队伍信息出错: " + _0x3d9ea7.message, "error");
      return false;
    } finally {
      _0x395977.battle.isLoading = false;
    }
  };
  const _0x962289 = async () => {
    if (_0x395977.battle.isLoading) {
      return _0x5b5b4f("操作正在进行中", "warning");
    }
    if (!_0xb2b988()) {
      return _0x5b5b4f("❌ 当前不是梦境开放时间", "error");
    }
    if (!_0x395977.battle.hasDefaultInfo) {
      const _0x4f3c78 = await _0x54f291();
      if (!_0x4f3c78) {
        return _0x5b5b4f("请先获取默认队伍", "warning");
      }
    }
    _0x395977.battle.isLoading = true;
    _0x5b5b4f("选择梦境阵容...", "info");
    try {
      {
        const _0x1641ca = {};
        let _0x329544 = false;
        for (let _0x2cfab0 = 0; _0x2cfab0 < 5; _0x2cfab0++) {
          {
            if (_0x395977.battle.defaultTeam && _0x395977.battle.defaultTeam[_0x2cfab0.toString()]) {
              {
                const _0x2661b7 = _0x395977.battle.defaultTeam[_0x2cfab0.toString()];
                const _0x1c6339 = _0x2661b7.heroId || _0x2661b7;
                _0x1641ca[_0x2cfab0.toString()] = _0x1c6339;
                if (_0x1c6339 !== 0) {
                  _0x329544 = true;
                }
              }
            } else {
              {
                _0x1641ca[_0x2cfab0.toString()] = 0;
              }
            }
          }
        }
        if (!_0x329544) {
          return _0x5b5b4f("⚠️ 默认队伍中没有英雄", "warning");
        }
        const _0x5a4a5e = {
          battleTeam: _0x1641ca
        };
        const _0x1be288 = await _0x361aec("dungeon_selecthero", _0x5a4a5e);
        const _0xa8d1b1 = _0x1be288._rawData || _0x1be288;
        if (_0xa8d1b1 && (_0xa8d1b1.code === 0 || _0xa8d1b1.code === undefined)) {
          _0x5b5b4f("✅ 梦境阵容选择成功", "success");
          if (_0xa8d1b1.reward) {
            const _0x4315f0 = Array.isArray(_0xa8d1b1.reward) ? _0xa8d1b1.reward : [_0xa8d1b1.reward];
            _0x4315f0.forEach(_0x2d45e5 => {
              if (_0x2d45e5.type === 3) {
                _0x5b5b4f("🎁 获得物品: ID=" + _0x2d45e5.itemId + ", 数量=" + _0x2d45e5.value, "success");
              }
            });
          }
        } else {
          throw new Error("选择梦境阵容失败");
        }
      }
    } catch (_0x20b384) {
      _0x5b5b4f("❌ 选择梦境阵容出错: " + _0x20b384.message, "error");
    } finally {
      _0x395977.battle.isLoading = false;
    }
  };
  const _0x555a2d = async _0x49e379 => {
    {
      const _0x4949c9 = _0xe46409[_0x49e379] ? _0xe46409[_0x49e379].name : "ID:" + _0x49e379;
      _0x5b5b4f("⚔️ 开始战斗: " + _0x4949c9, "info");
      try {
        const _0x3507f8 = await _0x361aec("fight_startdungeon", {
          heroId: parseInt(_0x49e379)
        });
        const _0x5d0aef = _0x3507f8._rawData || _0x3507f8;
        if (_0x5d0aef && (_0x5d0aef.code === 0 || _0x5d0aef.code === undefined)) {
          {
            if (_0x5d0aef.isWin) {
              _0x5b5b4f("🎉 " + _0x4949c9 + " 战斗胜利!", "success");
            } else {
              {
                _0x5b5b4f("💔 " + _0x4949c9 + " 战斗失败", "warning");
                if (_0x395977.battle.stopOnDefeat) {
                  _0x5b5b4f("⏹️ 检测到战斗失败，已停止连续战斗", "warning");
                  return "stop";
                }
              }
            }
            if (_0x5d0aef.reward) {
              {
                const _0x576c49 = Array.isArray(_0x5d0aef.reward) ? _0x5d0aef.reward : [_0x5d0aef.reward];
                _0x576c49.forEach(_0x35b2aa => {
                  if (_0x35b2aa.type === 3) {
                    _0x5b5b4f("🎁 " + _0x4949c9 + " 战斗获得物品: ID=" + _0x35b2aa.itemId + ", 数量=" + _0x35b2aa.value, "success");
                  }
                });
              }
            }
            return true;
          }
        } else {
          throw new Error("开始战斗失败");
        }
      } catch (_0x48b23d) {
        if (_0x48b23d.message.includes("2600080") || _0x48b23d.message.includes("2600050")) {
          {
            const _0x3239c7 = _0x48b23d.message.includes("2600080") ? "2600080" : "2600050";
            _0x5b5b4f("⏹️ " + _0x4949c9 + " 连续战斗已停止 (错误码: " + _0x3239c7 + ")", "warning");
            return "stop";
          }
        } else {
          _0x5b5b4f("❌ " + _0x4949c9 + " 开始战斗出错: " + _0x48b23d.message, "error");
          return false;
        }
      }
    }
  };
  const _0x207f97 = async _0x48601b => {
    const _0x239ff3 = _0xe46409[_0x48601b] ? _0xe46409[_0x48601b].name : "ID:" + _0x48601b;
    if (_0x395977.battle.continuousBattles[_0x48601b]) {
      {
        _0x34f45f(_0x48601b);
        return;
      }
    }
    _0x395977.battle.continuousBattles[_0x48601b] = true;
    _0x3fe580();
    _0x5b5b4f("🔄 " + _0x239ff3 + " 开始连续战斗", "info");
    const _0x22c501 = async () => {
      while (_0x395977.battle.continuousBattles[_0x48601b]) {
        const _0x3a81f3 = await _0x555a2d(_0x48601b);
        if (_0x3a81f3 === "stop") {
          _0x34f45f(_0x48601b);
          break;
        }
        if (_0x395977.battle.continuousBattles[_0x48601b]) {
          await _0x13cbcc(0.1);
        }
      }
    };
    _0x22c501();
  };
  const _0x34f45f = _0x22a129 => {
    {
      const _0x3e0feb = _0xe46409[_0x22a129] ? _0xe46409[_0x22a129].name : "ID:" + _0x22a129;
      if (_0x395977.battle.continuousBattles[_0x22a129]) {
        {
          _0x395977.battle.continuousBattles[_0x22a129] = false;
          _0x3fe580();
          _0x5b5b4f("⏹️ " + _0x3e0feb + " 连续战斗已停止", "info");
        }
      }
    }
  };
  const _0x3fe580 = () => {
    {
      const _0x459fb4 = document.getElementById("dream-team-container");
      if (!_0x459fb4) {
        return;
      }
      _0x459fb4.innerHTML = "";
      if (_0x395977.battle.currentTeamHeroes.length === 0) {
        _0x459fb4.innerHTML = "<div class=\"helper-text\">暂无队伍信息</div>";
        return;
      }
      _0x395977.battle.currentTeamHeroes.forEach(_0x1e423c => {
        {
          const _0x2d3e13 = _0x395977.battle.continuousBattles[_0x1e423c.id] || false;
          const _0x4dd780 = document.createElement("div");
          _0x4dd780.style.cssText = "display:flex;align-items:center;justify-content:space-between;padding:8px;margin-bottom:6px;background:var(--card-bg);border-radius:6px;border-left:3px solid #8b5cf6;";
          _0x4dd780.innerHTML = "\n      <div style=\"flex:1;\">\n        <div style=\"font-size:12px;font-weight:bold;\">" + _0x1e423c.name + "</div>\n        <div style=\"font-size:10px;color:var(--text-secondary);\">" + _0x1e423c.type + " | 位置: " + (_0x1e423c.position + 1) + "</div>\n      </div>\n      <button class=\"btn btn-small " + (_0x2d3e13 ? "btn-danger" : "btn-primary") + "\" data-hero=\"" + _0x1e423c.id + "\" style=\"padding:4px 8px;font-size:11px;\">" + (_0x2d3e13 ? "停止" : "战斗") + "</button>\n    ";
          _0x459fb4.appendChild(_0x4dd780);
        }
      });
      _0x459fb4.querySelectorAll("button[data-hero]").forEach(_0x352e95 => {
        _0x352e95.addEventListener("click", () => _0x207f97(_0x352e95.getAttribute("data-hero")));
      });
    }
  };
  const _0x216e36 = async () => {
    if (!_0xb2b988()) {
      return _0x5b5b4f("当前不是梦境开放时间", "error");
    }
    try {
      _0x5b5b4f("刷新商店信息...", "info");
      if (!_0x395977.battle.hasDefaultInfo) {
        await _0x54f291();
      }
      await _0x962289();
      const _0xbe9b44 = await _0x361aec("role_getroleinfo", {});
      const _0x3f85ef = _0xbe9b44._rawData || _0xbe9b44;
      if (!_0x3f85ef) {
        throw new Error("获取角色信息失败");
      }
      const _0x4016f2 = _0x3f85ef.role?.["dungeon"]?.["merchant"];
      if (_0x4016f2) {
        _0x395977.buy.merchantData = _0x4016f2;
      }
      const _0x2538b5 = _0x3f85ef.role?.["levelId"];
      if (_0x2538b5 !== undefined) {
        _0x395977.buy.levelId = _0x2538b5;
      }
      _0x3a3e87();
      _0x5b5b4f("✅ 商品列表获取完成", "success");
    } catch (_0x32c67a) {
      _0x5b5b4f("❌ 获取商品列表失败: " + _0x32c67a.message, "error");
    }
  };
  const _0x14658d = (_0x179f13, _0x5377db) => {
    return _0x13ccb4[_0x179f13] && _0x13ccb4[_0x179f13].includes(_0x5377db);
  };
  const _0x45b070 = (_0x1f7c22, _0x1cb557) => {
    const _0x1d7d17 = _0x441ab9[_0x1f7c22];
    if (_0x1d7d17 && _0x1d7d17.items[_0x1cb557] !== undefined) {
      return _0x1d7d17.items[_0x1cb557];
    }
    return "未知商品(" + _0x1cb557 + ")";
  };
  const _0x3a3e87 = () => {
    const _0x1fbe67 = document.getElementById("dream-merchant-container");
    if (!_0x1fbe67) {
      return;
    }
    _0x1fbe67.innerHTML = "";
    for (const _0x5728ec in _0x441ab9) {
      {
        const _0x2fa487 = _0x441ab9[_0x5728ec];
        const _0x301273 = _0x395977.buy.merchantData[_0x5728ec] || [];
        const _0xda6359 = document.createElement("div");
        _0xda6359.style.cssText = "background:var(--card-bg);border-radius:4px;padding:8px;";
        _0xda6359.innerHTML = "<div style=\"font-weight:bold;color:#8b5cf6;margin-bottom:6px;text-align:center;font-size:11px;\">" + _0x2fa487.name + "</div>";
        if (_0x301273.length === 0) {
          _0xda6359.innerHTML += "<div style=\"color:var(--text-secondary);font-size:10px;text-align:center;padding:8px 0;\">无商品</div>";
        } else {
          {
            _0x301273.forEach((_0x209394, _0x1002f6) => {
              {
                const _0x871a13 = _0x5728ec + "-" + _0x209394 + "-" + _0x1002f6;
                const _0x20adf3 = _0x395977.buy.selectedItems.has(_0x871a13);
                const _0x149360 = _0x14658d(parseInt(_0x5728ec), _0x209394);
                const _0x294699 = document.createElement("div");
                _0x294699.style.cssText = "display:flex;align-items:center;padding:4px;margin:2px 0;border-radius:3px;cursor:pointer;font-size:10px;" + (_0x20adf3 ? "background:rgba(139,92,246,0.2);" : "");
                _0x294699.innerHTML = "\n          <input type=\"checkbox\" " + (_0x20adf3 ? "checked" : "") + " style=\"margin-right:4px;\">\n          <span style=\"color:" + (_0x149360 ? "#ffa500" : "var(--text-primary)") + ";flex:1;\">" + _0x45b070(parseInt(_0x5728ec), _0x209394) + "</span>\n        ";
                _0x294699.onclick = _0x97d6f2 => {
                  if (_0x97d6f2.target.type !== "checkbox") {
                    const _0x1abf57 = _0x294699.querySelector("input");
                    _0x1abf57.checked = !_0x1abf57.checked;
                  }
                  if (_0x294699.querySelector("input").checked) {
                    _0x395977.buy.selectedItems.add(_0x871a13);
                  } else {
                    _0x395977.buy.selectedItems.delete(_0x871a13);
                  }
                  _0x46c5b6();
                  _0x3a3e87();
                };
                _0xda6359.appendChild(_0x294699);
              }
            });
          }
        }
        _0x1fbe67.appendChild(_0xda6359);
      }
    }
  };
  const _0x46c5b6 = () => {
    {
      const _0x4a9487 = document.getElementById("dream-selected-count");
      if (_0x4a9487) {
        _0x4a9487.textContent = _0x395977.buy.selectedItems.size;
      }
    }
  };
  const _0x499c2f = () => {
    _0x395977.buy.selectedItems.clear();
    for (const _0x242c42 in _0x395977.buy.merchantData) {
      {
        const _0x5692a0 = _0x395977.buy.merchantData[_0x242c42];
        _0x5692a0.forEach((_0x265c84, _0xc0248c) => {
          {
            _0x14658d(parseInt(_0x242c42), _0x265c84) && _0x395977.buy.selectedItems.add(_0x242c42 + "-" + _0x265c84 + "-" + _0xc0248c);
          }
        });
      }
    }
    _0x46c5b6();
    _0x3a3e87();
    _0x5b5b4f("已选择 " + _0x395977.buy.selectedItems.size + " 个金币商品", "success");
  };
  const _0x1b381e = async () => {
    {
      if (_0x395977.buy.selectedItems.size === 0) {
        return _0x5b5b4f("请先选择商品", "warning");
      }
      if (!_0xb2b988()) {
        return _0x5b5b4f("当前不是梦境开放时间", "error");
      }
      if (_0x395977.buy.levelId < 4000) {
        return _0x5b5b4f("关卡数小于4000，无法购买金币商品", "error");
      }
      _0x395977.buy.isRunning = true;
      const _0x2f3bef = Array.from(_0x395977.buy.selectedItems);
      _0x2f3bef.sort((_0x86e14b, _0xce1fd0) => {
        const [_0x76a6fd,, _0xe92618] = _0x86e14b.split("-").map(Number);
        const [_0x31e528,, _0x2b4b16] = _0xce1fd0.split("-").map(Number);
        if (_0x76a6fd !== _0x31e528) {
          return _0x31e528 - _0x76a6fd;
        }
        return _0x2b4b16 - _0xe92618;
      });
      let _0xeded40 = 0;
      let _0x102e7f = 0;
      _0x5b5b4f("开始批量购买 " + _0x2f3bef.length + " 件商品...", "info");
      for (const _0x18a5e5 of _0x2f3bef) {
        const [_0x35a333, _0x9e4c62, _0x45f875] = _0x18a5e5.split("-").map(Number);
        try {
          const _0x1ec562 = {
            id: _0x35a333,
            index: _0x9e4c62,
            pos: _0x45f875
          };
          const _0xd1e54 = await _0x361aec("dungeon_buymerchant", _0x1ec562);
          const _0x3a1193 = _0xd1e54._rawData || _0xd1e54;
          if (_0x3a1193?.["code"] === 0 || _0x3a1193?.["code"] === undefined) {
            _0x395977.buy.selectedItems.delete(_0x18a5e5);
            _0xeded40++;
            _0x5b5b4f("成功购买: " + _0x441ab9[_0x35a333].name + " - " + _0x45b070(_0x35a333, _0x9e4c62), "success");
          } else {
            throw new Error("购买失败，错误码: " + _0x3a1193?.["code"]);
          }
        } catch (_0x30e889) {
          _0x102e7f++;
          _0x5b5b4f("购买失败: " + _0x45b070(_0x35a333, _0x9e4c62) + " - " + _0x30e889.message, "error");
        }
        await _0x13cbcc(0.5);
      }
      await _0x216e36();
      _0x5b5b4f("批量购买完成: 成功 " + _0xeded40 + ", 失败 " + _0x102e7f, _0x102e7f === 0 ? "success" : "warning");
      _0x395977.buy.isRunning = false;
    }
  };
  const _0x43aa27 = async () => {
    if (!_0xb2b988()) {
      return _0x5b5b4f("当前不是梦境开放时间", "error");
    }
    if (_0x395977.buy.levelId < 4000) {
      return _0x5b5b4f("关卡数小于4000，无法购买金币商品", "error");
    }
    _0x395977.buy.isRunning = true;
    let _0x1dfb5b = 0;
    let _0x1d4bf5 = 0;
    _0x5b5b4f("开始一键购买所有金币商品...", "info");
    for (const _0x8a9a10 in _0x395977.buy.merchantData) {
      {
        const _0x73a84 = _0x395977.buy.merchantData[_0x8a9a10];
        const _0x13e6f5 = parseInt(_0x8a9a10);
        for (let _0x2820c7 = _0x73a84.length - 1; _0x2820c7 >= 0; _0x2820c7--) {
          const _0xa19bf7 = _0x73a84[_0x2820c7];
          if (_0x14658d(_0x13e6f5, _0xa19bf7)) {
            try {
              const _0x22c589 = {
                id: _0x13e6f5,
                index: _0xa19bf7,
                pos: _0x2820c7
              };
              const _0x3d455a = await _0x361aec("dungeon_buymerchant", _0x22c589);
              const _0xf9fda = _0x3d455a._rawData || _0x3d455a;
              if (_0xf9fda?.["code"] === 0 || _0xf9fda?.["code"] === undefined) {
                _0x1dfb5b++;
                _0x5b5b4f("成功购买: " + _0x441ab9[_0x13e6f5].name + " - " + _0x45b070(_0x13e6f5, _0xa19bf7), "success");
              } else {
                {
                  throw new Error("购买失败，错误码: " + _0xf9fda?.["code"]);
                }
              }
            } catch (_0x533885) {
              _0x1d4bf5++;
              _0x5b5b4f("购买失败: " + _0x45b070(_0x13e6f5, _0xa19bf7) + " - " + _0x533885.message, "error");
            }
            await _0x13cbcc(0.5);
          }
        }
      }
    }
    await _0x216e36();
    _0x5b5b4f("一键购买完成: 成功 " + _0x1dfb5b + ", 失败 " + _0x1d4bf5, _0x1d4bf5 === 0 ? "success" : "warning");
    _0x395977.buy.isRunning = false;
  };
  const _0x1e95de = () => {
    const _0x56d940 = new Date().getDay();
    return _0x56d940 === 0 || _0x56d940 === 1 || _0x56d940 === 3 || _0x56d940 === 4;
  };
  const _0x1047f0 = () => {
    const _0x538f4c = document.getElementById("qa-dream-status");
    const _0x1f8ee2 = document.getElementById("qa-dream-inactive");
    const _0x4052d2 = document.getElementById("qa-dream-content");
    const _0xc834f3 = _0x1e95de();
    if (_0x538f4c) {
      {
        _0x538f4c.textContent = _0xc834f3 ? "开放中" : "未开放";
        _0x538f4c.className = "club-status-badge " + (_0xc834f3 ? "success" : "warning");
      }
    }
    if (_0x1f8ee2) {
      _0x1f8ee2.style.display = _0xc834f3 ? "none" : "block";
    }
    if (_0x4052d2) {
      _0x4052d2.style.display = _0xc834f3 ? "block" : "none";
    }
    const _0x374463 = document.getElementById("dream-stop-defeat");
    _0x374463 && (_0x395977.battle.stopOnDefeat = _0x374463.checked, _0x374463.onchange = _0x1e4a71 => {
      _0x395977.battle.stopOnDefeat = _0x1e4a71.target.checked;
      _0x5b5b4f("设置更新: 失败自动停止 = " + (_0x1e4a71.target.checked ? "开启" : "关闭"), "info");
    });
  };
  const _0x136260 = {
    __proto__: null,
    batchBuySelected: _0x1b381e,
    buyAllGoldItems: _0x43aa27,
    getDreamDefaultTeamInfo: _0x54f291,
    initDreamModule: _0x1047f0,
    refreshDreamMerchantList: _0x216e36,
    selectAllGoldItems: _0x499c2f,
    selectDreamTeam: _0x962289,
    startDreamContinuousBattle: _0x207f97
  };
  var _0xc96279 = Object.freeze(_0x136260);
  let _0x524f4f = null;
  const _0x4c7035 = async () => {
    {
      try {
        _0x1ddb84("检测黑市周状态...", "info");
        const _0x14fa27 = await _0x361aec("activity_get", {}, 5000, "怪异塔-检测黑市周");
        const _0x264f9c = _0x14fa27?.["activity"]?.["activity"] || _0x14fa27?.["body"]?.["activity"]?.["activity"] || [];
        const _0x22de24 = _0x264f9c.find(_0x5160e5 => _0x5160e5.name === "江湖黑市");
        if (!_0x22de24) {
          _0x1ddb84("当前不是黑市周", "info");
          _0x524f4f = false;
          return false;
        }
        const _0x3493d0 = new Date();
        const _0x3c3f8b = new Date(_0x22de24.endTime);
        if (_0x3493d0 > _0x3c3f8b) {
          _0x1ddb84("黑市周已结束", "info");
          _0x524f4f = false;
          return false;
        }
        _0x1ddb84("检测到黑市周，结束时间: " + _0x22de24.endTime, "success");
        _0x524f4f = true;
        return true;
      } catch (_0x3b3c86) {
        {
          _0x1ddb84("黑市周检测失败: " + _0x3b3c86.message, "error");
          _0x524f4f = false;
          return false;
        }
      }
    }
  };
  const _0x2ce1b5 = _0x56b116 => {
    {
      const _0x4c73cc = document.getElementById("qa-weird-tower-content");
      const _0xca7b28 = document.getElementById("qa-weird-tower-inactive");
      const _0x6852f8 = document.getElementById("qa-weird-tower-badge");
      if (_0x4c73cc && _0xca7b28) {
        if (_0x56b116) {
          {
            _0x4c73cc.style.display = "block";
            _0xca7b28.style.display = "none";
          }
        } else {
          _0x4c73cc.style.display = "none";
          _0xca7b28.style.display = "block";
        }
      }
      if (_0x6852f8) {
        {
          _0x56b116 ? (_0x6852f8.textContent = "开放中", _0x6852f8.className = "club-status-badge success") : (_0x6852f8.textContent = "未开放", _0x6852f8.className = "club-status-badge warning");
        }
      }
    }
  };
  const _0x1c3c71 = async () => {
    {
      try {
        const _0xeb188d = await _0x361aec("evotower_getinfo", {}, 5000, "怪异塔-刷新");
        const _0x3a61ed = _0xeb188d?.["evoTower"] || _0xeb188d?.["body"]?.["evoTower"];
        const _0x19dddb = {
          towerId: _0x3a61ed?.["towerId"] ?? 0,
          energy: _0x3a61ed?.["energy"] ?? 0,
          maxEnergy: _0x3a61ed?.["maxEnergy"] ?? 0,
          lotteryLeftCnt: _0x3a61ed?.["lotteryLeftCnt"] ?? 0
        };
        _0x386da5.weirdTower = _0x19dddb;
        _0x1ddb84("怪异塔信息: 层数=" + _0x386da5.weirdTower.towerId + ", 能量=" + _0x386da5.weirdTower.energy + "/" + _0x386da5.weirdTower.maxEnergy + ", 钥匙=" + _0x386da5.weirdTower.lotteryLeftCnt, "success");
        _0x515d9e();
        return _0x386da5.weirdTower;
      } catch (_0x14c033) {
        _0x1ddb84("获取怪异塔信息失败: " + _0x14c033.message, "error");
        _0x30927d("获取怪异塔信息失败", "error");
        return null;
      }
    }
  };
  const _0x515d9e = () => {
    {
      const _0x49e7c5 = _0x386da5.weirdTower;
      if (!_0x49e7c5) {
        return;
      }
      const _0x5329b7 = _0x49e7c5.towerId || 0;
      const _0x2e2f9d = Math.floor(_0x5329b7 / 10) + 1;
      const _0x4a34f3 = _0x5329b7 % 10 + 1;
      const _0x5151e = document.getElementById("qa-weird-tower-floor");
      const _0x1a8427 = document.getElementById("qa-weird-tower-energy");
      const _0x3fc9da = document.getElementById("qa-weird-tower-keys");
      if (_0x5151e) {
        _0x5151e.textContent = _0x2e2f9d + "-" + _0x4a34f3;
      }
      if (_0x1a8427) {
        _0x1a8427.textContent = _0x49e7c5.energy + " / " + _0x49e7c5.maxEnergy;
      }
      if (_0x3fc9da) {
        _0x3fc9da.textContent = _0x49e7c5.lotteryLeftCnt || 0;
      }
    }
  };
  const _0x3beb1a = async () => {
    try {
      {
        _0x1ddb84("准备怪异塔战斗...", "info");
        await _0x361aec("evotower_readyfight", {}, 5000, "怪异塔-准备战斗");
        const _0x3dc4ba = {
          battleNum: 1,
          winNum: 1
        };
        const _0x519952 = await _0x361aec("evotower_fight", _0x3dc4ba, 10000, "怪异塔-战斗");
        if (_0x519952?.["error"] || _0x519952?.["code"]) {
          {
            const _0x5b0b01 = _0x519952?.["msg"] || _0x519952?.["error"] || "挑战失败";
            _0x1ddb84("怪异塔挑战失败: " + _0x5b0b01, "error");
            const _0x5e205a = {
              error: _0x5b0b01
            };
            return _0x5e205a;
          }
        }
        _0x1ddb84("怪异塔挑战成功", "success");
        const _0x49f353 = {
          success: true,
          result: _0x519952
        };
        return _0x49f353;
      }
    } catch (_0x1bc809) {
      {
        _0x1ddb84("怪异塔挑战异常: " + _0x1bc809.message, "error");
        const _0x24e634 = {
          error: _0x1bc809.message || "未知错误"
        };
        return _0x24e634;
      }
    }
  };
  const _0x1f4276 = async () => {
    if (_0x386da5.weirdTowerClimbing) {
      {
        _0x30927d("怪异塔爬塔进行中", "warning");
        return;
      }
    }
    _0x386da5.weirdTowerClimbing = true;
    const _0x45800a = document.getElementById("qa-weird-tower-status");
    const _0x10a456 = document.getElementById("qa-weird-tower-climb-btn");
    if (_0x10a456) {
      _0x10a456.disabled = true;
    }
    try {
      {
        await _0x1c3c71();
        let _0x209945 = _0x386da5.weirdTower?.["energy"] || 0;
        let _0x55993e = 0;
        _0x1ddb84("初始能量: " + _0x209945, "info");
        while (_0x209945 > 0 && _0x386da5.weirdTowerClimbing) {
          if (_0x45800a) {
            _0x45800a.textContent = "爬塔中 " + (_0x55993e + 1) + "次";
          }
          const _0x1c936b = await _0x3beb1a();
          if (_0x1c936b.error) {
            {
              _0x30927d("挑战失败: " + _0x1c936b.error, "error");
              break;
            }
          }
          _0x55993e++;
          await _0x186d8b(400);
          await _0x1c3c71();
          _0x209945 = _0x386da5.weirdTower?.["energy"] || 0;
          const _0x1af5c4 = _0x386da5.weirdTower?.["towerId"] || 0;
          const _0x3d73f1 = _0x1af5c4 % 10 + 1;
          if (_0x3d73f1 === 1 && _0x55993e > 0) {
            try {
              {
                _0x1ddb84("尝试领取第" + Math.floor(_0x1af5c4 / 10) + "章通关奖励", "info");
                await _0x361aec("evotower_claimreward", {}, 5000, "怪异塔-领取通关奖励");
                const _0x5ebf83 = Math.floor(_0x1af5c4 / 10);
                _0x30927d("成功领取第" + _0x5ebf83 + "章通关奖励", "success");
                _0x1ddb84("成功领取第" + _0x5ebf83 + "章通关奖励", "success");
              }
            } catch (_0x2dfdc2) {
              _0x1ddb84("领取通关奖励失败: " + _0x2dfdc2.message, "error");
            }
          }
        }
        if (_0x45800a) {
          _0x45800a.textContent = "完成 (共" + _0x55993e + "次)";
        }
        _0x30927d("怪异塔爬塔完成，共" + _0x55993e + "次", "success");
        _0x1ddb84("怪异塔爬塔完成，共挑战" + _0x55993e + "次", "success");
      }
    } catch (_0x27e107) {
      {
        _0x1ddb84("爬塔异常: " + _0x27e107.message, "error");
        _0x30927d("爬塔异常: " + _0x27e107.message, "error");
      }
    } finally {
      _0x386da5.weirdTowerClimbing = false;
      if (_0x10a456) {
        _0x10a456.disabled = false;
      }
      await _0x1c3c71();
    }
  };
  const _0xa545a4 = () => {
    _0x386da5.weirdTowerClimbing = false;
    _0x30927d("已停止怪异塔爬塔", "info");
  };
  const _0x4922d1 = async () => {
    try {
      _0x1ddb84("尝试领取免费钥匙", "info");
      const _0x1a106f = {
        actType: 1
      };
      const _0x10ad24 = await _0x361aec("mergebox_claimfreeenergy", _0x1a106f, 5000, "怪异塔-领取免费钥匙");
      const _0x3c91a8 = _0x10ad24?.["body"]?.["reward"] || _0x10ad24?.["reward"];
      if (_0x3c91a8 && _0x3c91a8.length > 0) {
        const _0xe7258e = _0x3c91a8.find(_0x195292 => _0x195292.itemId === 37001);
        if (_0xe7258e) {
          _0x1ddb84("成功领取 " + _0xe7258e.value + " 个怪异钥匙", "success");
          _0x30927d("成功领取 " + _0xe7258e.value + " 个怪异钥匙", "success");
          await _0x1c3c71();
          return;
        }
      }
      _0x1ddb84("领取钥匙成功", "success");
      _0x30927d("领取钥匙成功", "success");
      await _0x1c3c71();
    } catch (_0x209682) {
      _0x1ddb84("领取钥匙失败: " + _0x209682.message, "error");
      _0x30927d("领取钥匙失败: " + _0x209682.message, "error");
    }
  };
  const _0x383bc0 = async () => {
    const _0xb54b78 = {
      actType: 1
    };
    const _0x5be150 = await _0x361aec("mergebox_getinfo", _0xb54b78, 8000);
    return _0x5be150?.["body"]?.["mergeBox"] || _0x5be150?.["mergeBox"];
  };
  const _0x5e3435 = async (_0xbb90a7, _0x52926e, _0xba8878, _0x33f3cc) => {
    const _0x4d054b = {
      gridX: _0xbb90a7,
      gridY: _0x52926e
    };
    const _0x45c95a = {
      gridX: _0xba8878,
      gridY: _0x33f3cc
    };
    const _0x1dd74c = {
      actType: 1,
      sourcePos: _0x4d054b,
      targetPos: _0x45c95a
    };
    await _0x361aec("mergebox_mergeitem", _0x1dd74c, 8000);
  };
  const _0x554d6c = _0x2c6068 => {
    {
      const _0x1cfaa1 = [];
      if (!_0x2c6068) {
        return _0x1cfaa1;
      }
      for (const _0x516ae8 in _0x2c6068) {
        const _0x2bad31 = _0x2c6068[_0x516ae8];
        if (!_0x2bad31) {
          continue;
        }
        for (const _0x2f1ba5 in _0x2bad31) {
          {
            const _0x40e524 = _0x2bad31[_0x2f1ba5];
            _0x40e524 && _0x40e524.gridType === 1 && !_0x40e524.isLock && _0x1cfaa1.push({
              x: Number(_0x516ae8),
              y: Number(_0x2f1ba5)
            });
          }
        }
      }
      return _0x1cfaa1;
    }
  };
  const _0x418f29 = _0x1c4b6d => {
    const _0x48852f = {};
    if (!_0x1c4b6d) {
      return [];
    }
    for (const _0x63a8f4 in _0x1c4b6d) {
      const _0x5a5138 = _0x1c4b6d[_0x63a8f4];
      if (!_0x5a5138) {
        continue;
      }
      for (const _0x53fb20 in _0x5a5138) {
        {
          const _0x3e37bd = _0x5a5138[_0x53fb20];
          if (_0x3e37bd && _0x3e37bd.gridType === 2 && !_0x3e37bd.isLock) {
            {
              const _0x4ac88c = _0x3e37bd.gridItemId;
              if (_0x4ac88c === undefined || _0x4ac88c === null) {
                continue;
              }
              if (!_0x48852f[_0x4ac88c]) {
                _0x48852f[_0x4ac88c] = [];
              }
              _0x48852f[_0x4ac88c].push({
                x: Number(_0x63a8f4),
                y: Number(_0x53fb20)
              });
            }
          }
        }
      }
    }
    const _0x1c0302 = [];
    const _0x5f0a76 = Object.keys(_0x48852f).map(Number).sort((_0xf916f7, _0x25f46a) => _0xf916f7 - _0x25f46a);
    for (const _0x484f93 of _0x5f0a76) {
      {
        const _0x3b4625 = Array.isArray(_0x48852f[_0x484f93]) ? _0x48852f[_0x484f93] : [];
        for (let _0x42ce50 = 0; _0x42ce50 < _0x3b4625.length - 1; _0x42ce50 += 2) {
          {
            _0x1c0302.push({
              level: _0x484f93,
              pos1: _0x3b4625[_0x42ce50],
              pos2: _0x3b4625[_0x42ce50 + 1]
            });
          }
        }
      }
    }
    return _0x1c0302;
  };
  let _0x1f144c = null;
  const _0x582659 = (_0x4c4487, _0x487a55, _0x38f8d0) => {
    {
      if (!_0x1f144c) {
        return;
      }
      if (_0x1f144c[_0x4c4487]?.[_0x487a55]) {
        {
          delete _0x1f144c[_0x4c4487][_0x487a55];
        }
      }
      for (const _0x5379d3 of _0x38f8d0 || []) {
        {
          const _0x53c95f = _0x5379d3.gridX;
          const _0x3c3765 = _0x5379d3.gridY;
          if (!_0x1f144c[_0x53c95f]) {
            _0x1f144c[_0x53c95f] = {};
          }
          const _0xab594d = {
            gridType: 2,
            gridItemId: _0x5379d3.gridItemId,
            isLock: false
          };
          _0x1f144c[_0x53c95f][_0x3c3765] = _0xab594d;
        }
      }
    }
  };
  const _0x38115b = (_0x5d8ec3, _0x8cddbc, _0x517c34, _0x53ef8b, _0x1e4a55) => {
    if (!_0x1f144c) {
      return;
    }
    if (_0x1f144c[_0x5d8ec3]?.[_0x8cddbc]) {
      delete _0x1f144c[_0x5d8ec3][_0x8cddbc];
    }
    if (!_0x1f144c[_0x517c34]) {
      _0x1f144c[_0x517c34] = {};
    }
    const _0x53f250 = {
      gridType: 2,
      gridItemId: _0x1e4a55,
      isLock: false
    };
    _0x1f144c[_0x517c34][_0x53ef8b] = _0x53f250;
  };
  const _0x3dd526 = async () => {
    if (_0x386da5.smartMergeBoxRunning) {
      {
        _0x30927d("智能开箱合成进行中", "warning");
        return;
      }
    }
    _0x386da5.smartMergeBoxRunning = true;
    const _0x174f29 = document.getElementById("qa-merge-box-status");
    const _0x22fcb3 = document.getElementById("qa-merge-box-btn");
    if (_0x22fcb3) {
      _0x22fcb3.disabled = true;
    }
    let _0x30a0e5 = 0;
    let _0x24a9bf = 0;
    let _0x19f85b = 0;
    _0x1f144c = null;
    try {
      {
        await _0x1c3c71();
        let _0x4aac22 = _0x386da5.weirdTower?.["lotteryLeftCnt"] || 0;
        _0x1ddb84("初始钥匙数量: " + _0x4aac22, "info");
        const _0x58c378 = await _0x383bc0();
        if (!_0x58c378) {
          _0x1ddb84("获取地图信息失败", "error");
          _0x30927d("获取地图信息失败", "error");
          return;
        }
        _0x1f144c = JSON.parse(JSON.stringify(_0x58c378.gridMap || {}));
        let _0x5c6080 = _0x58c378;
        while (_0x386da5.smartMergeBoxRunning) {
          {
            const _0x2b6280 = _0x554d6c(_0x1f144c) || [];
            let _0x12b5d4 = false;
            if (_0x4aac22 > 0 && _0x2b6280.length > 0) {
              _0x1ddb84("发现 " + _0x2b6280.length + " 个可开箱子", "info");
              for (const _0x1f3d2d of _0x2b6280) {
                {
                  if (!_0x386da5.smartMergeBoxRunning || _0x4aac22 <= 0) {
                    break;
                  }
                  try {
                    const _0x1ed028 = {
                      gridX: _0x1f3d2d.x,
                      gridY: _0x1f3d2d.y
                    };
                    const _0xfa7472 = {
                      actType: 1,
                      pos: _0x1ed028
                    };
                    const _0x34bf98 = await _0x361aec("mergebox_openbox", _0xfa7472, 8000, "怪异塔-开箱合成");
                    const _0x227fae = _0x34bf98?.["body"]?.["newPosList"] || _0x34bf98?.["newPosList"] || [];
                    _0x30a0e5++;
                    _0x582659(_0x1f3d2d.x, _0x1f3d2d.y, _0x227fae);
                    const _0x237e83 = _0x34bf98?.["body"]?.["evoTower"]?.["lotteryLeftCnt"] ?? _0x34bf98?.["evoTower"]?.["lotteryLeftCnt"];
                    if (_0x237e83 !== undefined) {
                      _0x4aac22 = _0x237e83;
                      if (_0x386da5.weirdTower) {
                        _0x386da5.weirdTower.lotteryLeftCnt = _0x4aac22;
                      }
                      _0x515d9e();
                    } else {
                      {
                        _0x4aac22--;
                      }
                    }
                    _0x1ddb84("开箱成功 (" + _0x1f3d2d.x + "," + _0x1f3d2d.y + "), 获得 " + _0x227fae.length + " 张卡片, 剩余钥匙: " + _0x4aac22, "success");
                    if (_0x174f29) {
                      _0x174f29.textContent = "已开箱 " + _0x30a0e5 + " 次，合成 " + _0x24a9bf + " 次";
                    }
                    if (!_0x227fae || _0x227fae.length === 0) {
                      {
                        _0x12b5d4 = true;
                        break;
                      }
                    }
                    await _0x186d8b(300);
                  } catch (_0x50a1e1) {
                    {
                      _0x1ddb84("开箱失败: " + _0x50a1e1.message, "error");
                      if (_0x50a1e1.message?.["includes"]("物品数量不足")) {
                        _0x4aac22 = 0;
                      }
                      _0x12b5d4 = true;
                      break;
                    }
                  }
                }
              }
            } else {
              _0x12b5d4 = true;
            }
            if (_0x12b5d4) {
              const _0x158702 = _0x418f29(_0x1f144c) || [];
              if (_0x158702.length === 0) {
                {
                  if (_0x4aac22 <= 0) {
                    {
                      try {
                        {
                          _0x1ddb84("尝试领取消耗进度奖励", "info");
                          const _0x531619 = {
                            actType: 1
                          };
                          const _0x34ec07 = await _0x361aec("mergebox_claimcostprogress", _0x531619, 5000, "怪异塔-领取消耗进度奖励");
                          const _0x41955f = _0x34ec07?.["body"]?.["reward"] || _0x34ec07?.["reward"] || [];
                          const _0x4574c7 = _0x34ec07?.["body"]?.["evoTower"]?.["lotteryLeftCnt"] ?? _0x34ec07?.["evoTower"]?.["lotteryLeftCnt"];
                          _0x4574c7 !== undefined && _0x386da5.weirdTower && (_0x386da5.weirdTower.lotteryLeftCnt = _0x4574c7, _0x4aac22 = _0x4574c7, _0x515d9e());
                          if (_0x41955f.length > 0) {
                            const _0x14555c = _0x41955f.map(_0x1a2587 => _0x528c1c(_0x1a2587.itemId) + "x" + _0x1a2587.value).join(", ");
                            _0x1ddb84("领取消耗进度奖励: " + _0x14555c, "success");
                            _0x30927d("领取消耗进度奖励: " + _0x14555c, "success");
                            _0x19f85b++;
                            if (_0x174f29) {
                              _0x174f29.textContent = "已领取奖励 " + _0x19f85b + " 次";
                            }
                            await _0x186d8b(300);
                          }
                        }
                      } catch (_0xb5f25f) {
                        _0x1ddb84("领取消耗进度奖励失败: " + _0xb5f25f.message, "error");
                      }
                      const _0x3b36e0 = _0x5c6080.taskMap || {};
                      const _0x16a777 = _0x5c6080.taskClaimMap || {};
                      for (const _0x4b0aee in _0x3b36e0) {
                        if (_0x3b36e0[_0x4b0aee] > 0 && !_0x16a777[_0x4b0aee]) {
                          {
                            try {
                              {
                                _0x1ddb84("尝试领取累计奖励 taskId=" + _0x4b0aee, "info");
                                const _0x569bdf = {
                                  actType: 1,
                                  taskId: _0x4b0aee
                                };
                                const _0x44e2b0 = await _0x361aec("mergebox_claimmergeprogress", _0x569bdf, 5000, "怪异塔-领取累计奖励");
                                const _0x498516 = _0x44e2b0?.["body"]?.["reward"] || _0x44e2b0?.["reward"] || [];
                                _0x19f85b++;
                                _0x16a777[_0x4b0aee] = true;
                                const _0x5cb097 = _0x498516.map(_0x3a8b9f => _0x528c1c(_0x3a8b9f.itemId) + "x" + _0x3a8b9f.value).join(", ");
                                _0x1ddb84("领取累计奖励成功: " + (_0x5cb097 || "任务" + _0x4b0aee), "success");
                                _0x30927d("领取累计奖励: " + (_0x5cb097 || "任务" + _0x4b0aee), "success");
                                if (_0x174f29) {
                                  _0x174f29.textContent = "已领取奖励 " + _0x19f85b + " 次";
                                }
                                await _0x186d8b(300);
                              }
                            } catch (_0x24f68e) {
                              {
                                _0x1ddb84("领取累计奖励失败: " + _0x24f68e.message, "error");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (_0x4aac22 <= 0) {
                    break;
                  }
                  _0x1ddb84("无可合成卡片，刷新地图缓存", "info");
                  const _0xa4af5c = await _0x383bc0();
                  _0xa4af5c && (_0x1f144c = JSON.parse(JSON.stringify(_0xa4af5c.gridMap || {})), _0x5c6080 = _0xa4af5c);
                  continue;
                }
              }
              _0x1ddb84("发现 " + _0x158702.length + " 对可合成卡片", "info");
              for (const _0x3447d7 of _0x158702) {
                if (!_0x386da5.smartMergeBoxRunning) {
                  break;
                }
                try {
                  {
                    await _0x5e3435(_0x3447d7.pos1.x, _0x3447d7.pos1.y, _0x3447d7.pos2.x, _0x3447d7.pos2.y);
                    _0x24a9bf++;
                    _0x38115b(_0x3447d7.pos1.x, _0x3447d7.pos1.y, _0x3447d7.pos2.x, _0x3447d7.pos2.y, _0x3447d7.level + 1);
                    _0x1ddb84("合成" + _0x3447d7.level + "级卡片 -> " + (_0x3447d7.level + 1) + "级", "success");
                    _0x30927d("合成" + _0x3447d7.level + "级卡片", "info");
                    if (_0x174f29) {
                      _0x174f29.textContent = "已开箱 " + _0x30a0e5 + " 次，合成 " + _0x24a9bf + " 次";
                    }
                    await _0x186d8b(300);
                  }
                } catch (_0x206134) {
                  {
                    _0x1ddb84("合成失败: " + _0x206134.message, "error");
                  }
                }
              }
            }
          }
        }
        if (_0x174f29) {
          _0x174f29.textContent = "完成：开箱 " + _0x30a0e5 + " 次，合成 " + _0x24a9bf + " 次，领取 " + _0x19f85b + " 次";
        }
        _0x30927d("智能开箱合成完成：开箱 " + _0x30a0e5 + " 次，合成 " + _0x24a9bf + " 次，领取 " + _0x19f85b + " 次", "success");
        _0x1ddb84("智能开箱合成完成：开箱 " + _0x30a0e5 + " 次，合成 " + _0x24a9bf + " 次，领取 " + _0x19f85b + " 次", "success");
      }
    } catch (_0x5e76b0) {
      _0x1ddb84("开箱合成异常: " + _0x5e76b0.message, "error");
      _0x30927d("开箱合成异常: " + _0x5e76b0.message, "error");
    } finally {
      {
        _0x386da5.smartMergeBoxRunning = false;
        _0x1f144c = null;
        if (_0x22fcb3) {
          _0x22fcb3.disabled = false;
        }
      }
    }
  };
  const _0x2f3fc8 = () => {
    _0x386da5.smartMergeBoxRunning = false;
    _0x30927d("已停止智能开箱合成", "info");
  };
  const _0x537732 = {
    __proto__: null,
    checkBlackMarketWeek: _0x4c7035,
    claimFreeKeys: _0x4922d1,
    refreshWeirdTowerInfo: _0x1c3c71,
    startSmartMergeBox: _0x3dd526,
    startWeirdTowerClimb: _0x1f4276,
    stopSmartMergeBox: _0x2f3fc8,
    stopWeirdTowerClimb: _0xa545a4,
    updateWeirdTowerAvailability: _0x2ce1b5,
    updateWeirdTowerUI: _0x515d9e
  };
  var _0x1b5753 = Object.freeze(_0x537732);
  const _0xa2e906 = {
    length: 20
  };
  const _0x4aad76 = {
    length: 28
  };
  const _0x28ea49 = {
    length: 14
  };
  const _0x526155 = [...Array.from(_0xa2e906, (_0x331933, _0x5b5dd2) => 101 + _0x5b5dd2), ...Array.from(_0x4aad76, (_0x5910b7, _0x47a7f0) => 201 + _0x47a7f0), ...Array.from(_0x28ea49, (_0x116b48, _0x4180a7) => 301 + _0x4180a7)];
  const _0x54c917 = {
    isRunning: false,
    stopRequested: false,
    total: 0,
    done: 0
  };
  const _0x1f0ea0 = () => {
    {
      const _0x53ebb4 = document.getElementById("qa-star-progress-bar");
      const _0x2a6fdb = document.getElementById("qa-star-progress-text");
      const _0x2cd1ba = _0x54c917.total > 0 ? Math.min(100, Math.round(_0x54c917.done / _0x54c917.total * 100)) : 0;
      if (_0x53ebb4) {
        _0x53ebb4.style.width = _0x2cd1ba + "%";
      }
      if (_0x2a6fdb) {
        _0x2a6fdb.textContent = _0x54c917.done + "/" + _0x54c917.total + " " + _0x2cd1ba + "%";
      }
    }
  };
  const _0x3da1f2 = _0x40a522 => {
    const _0x1ec5b1 = document.getElementById("qa-star-hero-btn");
    const _0x37dd58 = document.getElementById("qa-star-book-btn");
    const _0x155a4f = document.getElementById("qa-star-claim-btn");
    const _0x530f27 = document.getElementById("qa-star-stop-btn");
    if (_0x1ec5b1) {
      _0x1ec5b1.disabled = _0x40a522;
    }
    if (_0x37dd58) {
      _0x37dd58.disabled = _0x40a522;
    }
    if (_0x155a4f) {
      _0x155a4f.disabled = _0x40a522;
    }
    if (_0x530f27) {
      _0x530f27.style.display = _0x40a522 ? "inline-block" : "none";
    }
  };
  const _0x31362d = () => {
    {
      const _0x12b7f9 = document.getElementById("qa-star-delay");
      return _0x12b7f9 ? parseInt(_0x12b7f9.value, 10) || 300 : 300;
    }
  };
  const _0x447c28 = async () => {
    {
      if (_0x54c917.isRunning) {
        return;
      }
      _0x54c917.stopRequested = false;
      _0x54c917.total = _0x526155.length;
      _0x54c917.done = 0;
      _0x54c917.isRunning = true;
      _0x3da1f2(true);
      _0x1f0ea0();
      const _0x4e041b = _0x31362d();
      try {
        for (const _0x7d146 of _0x526155) {
          if (_0x54c917.stopRequested) {
            break;
          }
          for (let _0x566c79 = 1; _0x566c79 <= 10; _0x566c79++) {
            {
              if (_0x54c917.stopRequested) {
                break;
              }
              try {
                const _0x3cda9a = {
                  heroId: _0x7d146
                };
                const _0x573f17 = await _0x361aec("hero_heroupgradestar", _0x3cda9a);
                const _0x208ae1 = _0x573f17 && (_0x573f17.code === 0 || _0x573f17.success === true || _0x573f17.result === 0);
                if (!_0x208ae1) {
                  break;
                }
              } catch {
                {
                  break;
                }
              }
              await _0x186d8b(_0x4e041b);
            }
          }
          _0x54c917.done++;
          _0x1f0ea0();
        }
        _0x30927d(_0x54c917.stopRequested ? "已停止" : "英雄升星完成", _0x54c917.stopRequested ? "warning" : "success");
      } finally {
        _0x54c917.isRunning = false;
        _0x3da1f2(false);
      }
    }
  };
  const _0x1662b4 = async () => {
    if (_0x54c917.isRunning) {
      return;
    }
    _0x54c917.stopRequested = false;
    _0x54c917.total = _0x526155.length;
    _0x54c917.done = 0;
    _0x54c917.isRunning = true;
    _0x3da1f2(true);
    _0x1f0ea0();
    const _0x53d043 = _0x31362d();
    try {
      {
        for (const _0x557727 of _0x526155) {
          if (_0x54c917.stopRequested) {
            break;
          }
          for (let _0x192618 = 1; _0x192618 <= 10; _0x192618++) {
            if (_0x54c917.stopRequested) {
              break;
            }
            try {
              {
                const _0x54ccc2 = {
                  heroId: _0x557727
                };
                const _0x53ea3c = await _0x361aec("book_upgrade", _0x54ccc2);
                const _0x26e097 = _0x53ea3c && (_0x53ea3c.code === 0 || _0x53ea3c.success === true || _0x53ea3c.result === 0);
                if (!_0x26e097) {
                  break;
                }
              }
            } catch {
              {
                break;
              }
            }
            await _0x186d8b(_0x53d043);
          }
          _0x54c917.done++;
          _0x1f0ea0();
        }
        _0x30927d(_0x54c917.stopRequested ? "已停止" : "图鉴升星完成", _0x54c917.stopRequested ? "warning" : "success");
      }
    } finally {
      {
        _0x54c917.isRunning = false;
        _0x3da1f2(false);
      }
    }
  };
  const _0x52c406 = async () => {
    if (_0x54c917.isRunning) {
      return;
    }
    _0x54c917.stopRequested = false;
    _0x54c917.total = 10;
    _0x54c917.done = 0;
    _0x54c917.isRunning = true;
    _0x3da1f2(true);
    _0x1f0ea0();
    const _0x1686c2 = _0x31362d();
    try {
      for (let _0x492470 = 1; _0x492470 <= 10; _0x492470++) {
        {
          if (_0x54c917.stopRequested) {
            break;
          }
          try {
            const _0x201049 = await _0x361aec("book_claimpointreward", {});
            const _0x431558 = _0x201049 && (_0x201049.code === 0 || _0x201049.success === true || _0x201049.result === 0);
            _0x54c917.done++;
            _0x1f0ea0();
            if (!_0x431558) {
              break;
            }
          } catch {
            _0x54c917.done++;
            _0x1f0ea0();
            break;
          }
          await _0x186d8b(_0x1686c2);
        }
      }
      _0x30927d(_0x54c917.stopRequested ? "已停止" : "领取奖励完成", _0x54c917.stopRequested ? "warning" : "success");
    } finally {
      _0x54c917.isRunning = false;
      _0x3da1f2(false);
    }
  };
  const _0x2d75fc = () => {
    _0x54c917.stopRequested = true;
  };
  const _0x324b6f = async _0x56afa4 => {
    {
      const _0x20a0d4 = _0x56afa4.getAttribute("data-action");
      if (!_0x20a0d4) {
        return;
      }
      if (_0x20a0d4 === "log-clear") {
        const _0x27bec2 = document.getElementById("qa-log-" + _0x56afa4.getAttribute("data-log-target"));
        if (_0x27bec2) {
          _0x27bec2.textContent = "";
        }
        return;
      }
      if (_0x20a0d4 === "result-clear") {
        {
          _0x51d52b(_0x56afa4.getAttribute("data-result-target"));
          return;
        }
      }
      if (_0x20a0d4 === "auto-target-add") {
        {
          const _0x436a5c = document.getElementById("qa-target-list");
          if (!_0x436a5c) {
            return;
          }
          const _0x476b3d = _0x436a5c.querySelector(".qa-target-row");
          if (!_0x476b3d) {
            return;
          }
          const _0x3c54c0 = _0x476b3d.cloneNode(true);
          const _0x3df111 = _0x3c54c0.querySelector(".qa-target-attr");
          const _0x152c1f = _0x3c54c0.querySelector(".qa-target-value");
          if (_0x3df111) {
            _0x3df111.value = "1";
          }
          if (_0x152c1f) {
            _0x152c1f.value = "";
          }
          const _0x109535 = _0x3c54c0.querySelector("button[data-action=\"auto-target-remove\"]");
          if (_0x109535) {
            _0x109535.disabled = false;
          }
          _0x436a5c.appendChild(_0x3c54c0);
          const _0x305b0d = Array.from(_0x436a5c.querySelectorAll(".qa-target-row"));
          const _0x415baf = _0x305b0d.length <= 1;
          for (const _0xa8e4d1 of _0x305b0d) {
            const _0x15ddc5 = _0xa8e4d1.querySelector("button[data-action=\"auto-target-remove\"]");
            if (_0x15ddc5) {
              _0x15ddc5.disabled = _0x415baf;
            }
          }
          return;
        }
      }
      if (_0x20a0d4 === "auto-target-remove") {
        const _0x10befe = document.getElementById("qa-target-list");
        if (!_0x10befe) {
          return;
        }
        const _0x2ccdd1 = _0x56afa4.closest(".qa-target-row");
        if (_0x2ccdd1) {
          _0x2ccdd1.remove();
        }
        const _0x3df623 = Array.from(_0x10befe.querySelectorAll(".qa-target-row"));
        if (_0x3df623.length === 0) {
          return;
        }
        const _0xf9e96b = _0x3df623.length <= 1;
        for (const _0x515b6f of _0x3df623) {
          {
            const _0x1103b8 = _0x515b6f.querySelector("button[data-action=\"auto-target-remove\"]");
            if (_0x1103b8) {
              _0x1103b8.disabled = _0xf9e96b;
            }
          }
        }
        return;
      }
      if (_0x386da5.actionLocks[_0x20a0d4]) {
        return;
      }
      _0x386da5.actionLocks[_0x20a0d4] = true;
      const _0x3d9d83 = _0x56afa4.textContent;
      _0x56afa4.disabled = true;
      try {
        switch (_0x20a0d4) {
          case "study-start":
            await _0x21f6a8();
            break;
          case "team-refresh":
            await _0x304732();
            break;
          case "daily-refresh":
            {
              {
                if (!window.ROLE) {
                  _0x30927d("数据未就绪，请稍后重试", "warning");
                  break;
                }
                _0x621a8a(window.ROLE.dailyTask);
                _0x30927d("已刷新", "info");
                break;
              }
            }
          case "daily-run":
            {
              break;
            }
          case "daily-fix":
            {
              {
                const _0x3cca7f = _0x10c948();
                if (!_0x3cca7f.length) {
                  {
                    break;
                  }
                }
                try {
                  {
                    _0x9a8c03("准备中...");
                    if (!window.ROLE) {
                      _0x30927d("数据未就绪，请稍后重试", "warning");
                      break;
                    }
                    const _0x23b36c = window.ROLE.dailyTask || window.ROLE.daily || {};
                    const _0x1a2b90 = _0x23b36c.complete || {};
                    const _0x3eb05d = _0x562149 => {
                      const _0x9c05c9 = _0x4af3f0(_0x1a2b90, _0x562149);
                      return _0x9c05c9 === -1 || _0x9c05c9 === true;
                    };
                    const _0x53936e = [];
                    if (_0x3cca7f.includes("share") && !_0x3eb05d(2)) {
                      const _0x190a77 = {
                        isSkipShareCard: true,
                        type: 2
                      };
                      const _0x4ec70c = {
                        cmd: "system_mysharecallback",
                        params: _0x190a77,
                        name: "分享游戏"
                      };
                      _0x53936e.push(_0x4ec70c);
                    }
                    if (_0x3cca7f.includes("friend") && !_0x3eb05d(3)) {
                      const _0x38941d = {
                        cmd: "friend_batch",
                        params: {},
                        name: "赠送好友金币"
                      };
                      _0x53936e.push(_0x38941d);
                    }
                    if (_0x3cca7f.includes("recruit") && !_0x3eb05d(4)) {
                      const _0x184def = {
                        recruitType: 3,
                        recruitNumber: 1
                      };
                      const _0x1ca2c1 = {
                        cmd: "hero_recruit",
                        params: _0x184def,
                        name: "免费招募"
                      };
                      _0x53936e.push(_0x1ca2c1);
                      const _0x25048f = {
                        recruitType: 1,
                        recruitNumber: 1
                      };
                      const _0x3fb892 = {
                        cmd: "hero_recruit",
                        params: _0x25048f,
                        name: "付费招募"
                      };
                      _0x53936e.push(_0x3fb892);
                    }
                    if (_0x3cca7f.includes("hangup") && !_0x3eb05d(5)) {
                      {
                        const _0x4d5609 = {
                          isSkipShareCard: true,
                          type: 2
                        };
                        for (let _0x583ba0 = 0; _0x583ba0 < 4; _0x583ba0++) {
                          _0x53936e.push({
                            cmd: "system_mysharecallback",
                            params: _0x4d5609,
                            name: "挂机加钟" + (_0x583ba0 + 1) + "/8"
                          });
                        }
                        const _0x13ea13 = {
                          cmd: "system_claimhangupreward",
                          params: {},
                          name: "领取挂机奖励"
                        };
                        _0x53936e.push(_0x13ea13);
                        const _0x52e2fb = {
                          isSkipShareCard: true,
                          type: 2
                        };
                        for (let _0x2ee8db = 0; _0x2ee8db < 4; _0x2ee8db++) {
                          _0x53936e.push({
                            cmd: "system_mysharecallback",
                            params: _0x52e2fb,
                            name: "挂机加钟" + (_0x2ee8db + 5) + "/8"
                          });
                        }
                      }
                    }
                    if (_0x3cca7f.includes("buygold") && !_0x3eb05d(6)) {
                      {
                        const _0x35a5bb = window.ROLE?.["statistics"] || {};
                        const _0x24cad2 = window.ROLE?.["statisticsTime"] || {};
                        if (_0x47c13b(_0x24cad2["buy:gold"])) {
                          const _0x5a0f13 = {
                            buyNum: 1
                          };
                          for (let _0x3bee7a = 0; _0x3bee7a < 3; _0x3bee7a++) {
                            _0x53936e.push({
                              cmd: "system_buygold",
                              params: _0x5a0f13,
                              name: "免费点金" + (_0x3bee7a + 1) + "/3"
                            });
                          }
                        }
                      }
                    }
                    if (_0x3cca7f.includes("openbox") && !_0x3eb05d(7)) {
                      const _0x3bc2f4 = {
                        itemId: 2001,
                        number: 10
                      };
                      const _0x3a6c3c = {
                        cmd: "item_openbox",
                        params: _0x3bc2f4,
                        name: "开启木质宝箱10个"
                      };
                      _0x53936e.push(_0x3a6c3c);
                    }
                    if (_0x3cca7f.includes("blackmarket") && !_0x3eb05d(12)) {
                      {
                        const _0x1171ee = {
                          cmd: "store_purchase",
                          params: {},
                          name: "黑市一键采购",
                          isBlackmarket: true
                        };
                        _0x53936e.push(_0x1171ee);
                      }
                    }
                    if (_0x3cca7f.includes("arena") && !_0x3eb05d(13)) {
                      {
                        const _0x812e4 = new Date().getHours();
                        if (_0x812e4 >= 8 && _0x812e4 <= 22) {
                          const _0x52fff1 = {
                            cmd: "arena_startarea",
                            params: {},
                            name: "开始竞技场"
                          };
                          _0x53936e.push(_0x52fff1);
                          for (let _0x2f1e45 = 1; _0x2f1e45 <= 3; _0x2f1e45++) {
                            const _0x53dd46 = {
                              cmd: "arena_getareatarget",
                              params: {},
                              name: "获取竞技场目标" + _0x2f1e45,
                              isArenaTarget: true
                            };
                            _0x53936e.push(_0x53dd46);
                          }
                        }
                      }
                    }
                    if (_0x3cca7f.includes("legionboss")) {
                      const _0x5a2372 = document.getElementById("qa-legionboss-count");
                      const _0x48d5ff = parseInt(_0x5a2372?.["value"], 10) || 2;
                      if (_0x48d5ff > 0) {
                        {
                          for (let _0x34105e = 1; _0x34105e <= _0x48d5ff; _0x34105e++) {
                            const _0x10cd18 = {
                              cmd: "fight_startlegionboss",
                              params: {},
                              name: "俱乐部BOSS" + _0x34105e + "/" + _0x48d5ff,
                              isBossBattle: true
                            };
                            _0x53936e.push(_0x10cd18);
                          }
                        }
                      }
                    }
                    if (_0x3cca7f.includes("dailyboss")) {
                      const _0x45dce7 = [9904, 9905, 9901, 9902, 9903, 9904, 9905];
                      const _0x24fa37 = new Date().getDay();
                      const _0x55608d = _0x45dce7[_0x24fa37];
                      for (let _0x3db229 = 1; _0x3db229 <= 3; _0x3db229++) {
                        const _0x111168 = {
                          bossId: _0x55608d
                        };
                        const _0x588c84 = {
                          cmd: "fight_startboss",
                          params: _0x111168,
                          name: "每日BOSS" + _0x3db229 + "/3",
                          isBossBattle: true
                        };
                        _0x53936e.push(_0x588c84);
                      }
                    }
                    if (_0x3cca7f.includes("bottle")) {
                      const _0x49b95f = {
                        cmd: "bottlehelper_stop",
                        params: {},
                        name: "停止盐罐计时"
                      };
                      _0x53936e.push(_0x49b95f);
                      const _0x31d480 = {
                        cmd: "bottlehelper_start",
                        params: {},
                        name: "开始盐罐计时"
                      };
                      _0x53936e.push(_0x31d480);
                      const _0x3f779f = {
                        cmd: "bottlehelper_claim",
                        params: {},
                        name: "领取盐罐奖励"
                      };
                      if (!_0x3eb05d(14)) {
                        _0x53936e.push(_0x3f779f);
                      }
                    }
                    if (_0x3cca7f.includes("treasure")) {
                      const _0x3c4c51 = {
                        cmd: "collection_goodslist",
                        params: {},
                        name: "获取珍宝阁列表"
                      };
                      _0x53936e.push(_0x3c4c51);
                      const _0x514f29 = {
                        cmd: "collection_claimfreereward",
                        params: {},
                        name: "领取珍宝阁免费礼包"
                      };
                      _0x53936e.push(_0x514f29);
                    }
                    if (_0x3cca7f.includes("signin")) {
                      const _0x267c54 = {
                        cmd: "system_signinreward",
                        params: {},
                        name: "福利签到"
                      };
                      _0x53936e.push(_0x267c54);
                      const _0xbe63aa = {
                        cmd: "legion_signin",
                        params: {},
                        name: "俱乐部签到"
                      };
                      _0x53936e.push(_0xbe63aa);
                      const _0x18b103 = {
                        discountId: 1
                      };
                      const _0x10e872 = {
                        cmd: "discount_claimreward",
                        params: _0x18b103,
                        name: "领取每日礼包"
                      };
                      _0x53936e.push(_0x10e872);
                      const _0xf5d8e7 = {
                        cardId: 1
                      };
                      const _0x25195f = {
                        cmd: "card_claimreward",
                        params: _0xf5d8e7,
                        name: "领取免费礼包"
                      };
                      _0x53936e.push(_0x25195f);
                      const _0x5488ac = {
                        cardId: 4003
                      };
                      const _0x24f9c5 = {
                        cmd: "card_claimreward",
                        params: _0x5488ac,
                        name: "领取永久卡礼包"
                      };
                      _0x53936e.push(_0x24f9c5);
                    }
                    if (_0x3cca7f.includes("fish")) {
                      const _0x3e32 = {
                        lotteryNumber: 1,
                        newFree: true,
                        type: 1
                      };
                      for (let _0x1beb62 = 0; _0x1beb62 < 3; _0x1beb62++) {
                        _0x53936e.push({
                          cmd: "artifact_lottery",
                          params: _0x3e32,
                          name: "免费钓鱼" + (_0x1beb62 + 1) + "/3"
                        });
                      }
                    }
                    if (_0x3cca7f.includes("mail")) {
                      const _0x1ff7c8 = {
                        cmd: "mail_claimallattachment",
                        params: {},
                        name: "领取邮件奖励"
                      };
                      _0x53936e.push(_0x1ff7c8);
                    }
                    if (_0x3cca7f.includes("sweepticket")) {
                      for (let _0x3536b8 = 0; _0x3536b8 < 3; _0x3536b8++) {
                        {
                          const _0x227a77 = {
                            cmd: "genie_buysweep",
                            params: {},
                            name: "领取免费扫荡券" + (_0x3536b8 + 1) + "/3"
                          };
                          _0x53936e.push(_0x227a77);
                        }
                      }
                    }
                    if (_0x3cca7f.includes("genie")) {
                      for (let _0x2f756b = 1; _0x2f756b <= 4; _0x2f756b++) {
                        {
                          const _0x456df6 = ["魏国", "蜀国", "吴国", "群雄"][_0x2f756b - 1];
                          const _0x13ddad = {
                            genieId: _0x2f756b
                          };
                          const _0x5ef71f = {
                            cmd: "genie_sweep",
                            params: _0x13ddad,
                            name: "灯神扫荡-" + _0x456df6
                          };
                          _0x53936e.push(_0x5ef71f);
                        }
                      }
                    }
                    if (_0x3cca7f.includes("deepsea")) {
                      const _0x54a066 = new Date().getDay();
                      if (_0x54a066 === 1) {
                        const _0x93dd94 = {
                          genieId: 5
                        };
                        const _0x16db08 = {
                          cmd: "genie_sweep",
                          params: _0x93dd94,
                          name: "深海扫荡"
                        };
                        _0x53936e.push(_0x16db08);
                      }
                    }
                    for (let _0x2ea4de = 1; _0x2ea4de <= 10; _0x2ea4de++) {
                      const _0x98a7e4 = _0x4af3f0(_0x1a2b90, _0x2ea4de);
                      if (_0x98a7e4 !== -1) {
                        const _0x39b20e = {
                          taskId: _0x2ea4de
                        };
                        const _0x57421f = {
                          cmd: "task_claimdailypoint",
                          params: _0x39b20e,
                          name: "领取任务奖励" + _0x2ea4de
                        };
                        _0x53936e.push(_0x57421f);
                      }
                    }
                    const _0x56ec1e = {
                      cmd: "task_claimdailyreward",
                      params: {},
                      name: "领取日常任务奖励"
                    };
                    _0x53936e.push(_0x56ec1e);
                    const _0x523537 = {
                      cmd: "task_claimweekreward",
                      params: {},
                      name: "领取周常任务奖励"
                    };
                    _0x53936e.push(_0x523537);
                    if (_0x53936e.length === 0) {
                      _0x9a8c03("无需补差");
                      break;
                    }
                    const _0x6c354e = _0x53936e.some(_0x41b240 => _0x41b240.isArenaTarget || _0x41b240.isBossBattle);
                    let _0x3bcf67 = null;
                    if (_0x6c354e) {
                      _0x3bcf67 = await _0x359bda();
                      !_0x3bcf67;
                    }
                    for (let _0x388d57 = 0; _0x388d57 < _0x53936e.length; _0x388d57++) {
                      const _0x3174a6 = _0x53936e[_0x388d57];
                      _0x9a8c03(_0x388d57 + 1 + "/" + _0x53936e.length + " " + (_0x3174a6.name || _0x3174a6.cmd));
                      try {
                        const _0x3689c3 = await _0x4ccd7f("daily-tasks", _0x3174a6.cmd, _0x3174a6.params || {}, _0x3174a6.name || _0x3174a6.cmd);
                        if (_0x3174a6.isBlackmarket) {
                          const _0x33bfd2 = _0x3689c3?.["goodsList"] || _0x3689c3?.["body"]?.["goodsList"] || {};
                          let _0x1b3ec9 = false;
                          for (const _0x134321 in _0x33bfd2) {
                            {
                              if (_0x33bfd2[_0x134321]?.["buy_quantity"] > 0) {
                                {
                                  _0x1b3ec9 = true;
                                  break;
                                }
                              }
                            }
                          }
                          if (!_0x1b3ec9) {
                            {
                              try {
                                {
                                  const _0x48c88b = {
                                    goodsId: 1
                                  };
                                  await _0x4ccd7f("daily-tasks", "store_buy", _0x48c88b, "黑市购买第1个物品");
                                }
                              } catch (_0x596b41) {}
                            }
                          }
                        }
                        if (_0x3174a6.isArenaTarget && _0x3689c3) {
                          const _0x870c5f = _0x5a5332(_0x3689c3);
                          if (_0x870c5f) {
                            {
                              const _0x2f9838 = {
                                targetId: _0x870c5f
                              };
                              await _0x4ccd7f("daily-tasks", "fight_startareaarena", _0x2f9838, "竞技场战斗");
                            }
                          }
                        }
                      } catch {}
                      await _0x186d8b(500);
                    }
                    _0x9a8c03("补差完成");
                    _0x621a8a(window.ROLE?.["dailyTask"]);
                    _0x30927d("每日任务补差完成", "success");
                  }
                } catch (_0x2bc4db) {
                  {
                    _0x9a8c03("执行失败: " + _0x2bc4db.message);
                    _0x30927d("执行失败: " + _0x2bc4db.message, "error");
                  }
                }
                break;
              }
            }
          case "refresh-role":
            await _0x54b8ca();
            _0x30927d("角色信息刷新成功", "success");
            break;
          case "bottle-restart":
            {
              {
                const _0x538e6f = _0x386da5.bottleIsRunning;
                const _0x268aaa = {
                  bottleType: -1
                };
                await _0x361aec("bottlehelper_stop", _0x268aaa, "盐罐助手-停止");
                await _0x186d8b(500);
                const _0x492665 = {
                  bottleType: -1
                };
                await _0x361aec("bottlehelper_start", _0x492665, "盐罐助手-启动");
                const _0x232d95 = await _0x361aec("role_getroleinfo", {}, "盐罐助手-刷新状态");
                const _0x5bf31d = _0x232d95?.["role"] || _0x232d95;
                _0xc37c37(_0x5bf31d);
                break;
              }
            }
          case "hangup-refresh":
            {
              const _0x17b458 = await _0x361aec("role_getroleinfo", {}, "挂机奖励-刷新状态");
              const _0x55f279 = _0x17b458?.["role"] || _0x17b458;
              _0x1d1b31(_0x55f279);
              break;
            }
          case "hangup-claim":
            {
              const _0x3b1448 = [];
              for (let _0x2173f3 = 1; _0x2173f3 <= 4; _0x2173f3++) {
                {
                  const _0x207cd5 = {
                    isSkipShareCard: true,
                    type: 2
                  };
                  const _0x508262 = {
                    cmd: "system_mysharecallback",
                    params: _0x207cd5,
                    name: "加钟" + _0x2173f3 + "/8"
                  };
                  _0x3b1448.push(_0x508262);
                }
              }
              const _0x112db4 = {
                cmd: "system_claimhangupreward",
                params: {},
                name: "领取挂机奖励"
              };
              _0x3b1448.push(_0x112db4);
              for (let _0x5ead87 = 5; _0x5ead87 <= 8; _0x5ead87++) {
                const _0xa79611 = {
                  isSkipShareCard: true,
                  type: 2
                };
                const _0xa8eec = {
                  cmd: "system_mysharecallback",
                  params: _0xa79611,
                  name: "加钟" + _0x5ead87 + "/8"
                };
                _0x3b1448.push(_0xa8eec);
              }
              await _0x349779("add-time", _0x3b1448);
              const _0x4de0d2 = await _0x361aec("role_getroleinfo", {}, "挂机奖励-刷新状态");
              _0x1d1b31(_0x4de0d2?.["role"] || _0x4de0d2);
              break;
            }
          case "addtime-run":
            {
              {
                const _0x3461e8 = [];
                const _0x22fbe9 = {
                  isSkipShareCard: true,
                  type: 2
                };
                for (let _0x57a82a = 0; _0x57a82a < 5; _0x57a82a++) {
                  _0x3461e8.push({
                    cmd: "system_mysharecallback",
                    params: _0x22fbe9,
                    name: "加钟" + (_0x57a82a + 1) + "/5"
                  });
                }
                await _0x349779("add-time", _0x3461e8);
                const _0x5933cc = await _0x361aec("role_getroleinfo", {}, "挂机加钟-刷新状态");
                _0x1d1b31(_0x5933cc?.["role"] || _0x5933cc);
                break;
              }
            }
          case "tower-loop":
            _0xefad3f();
            break;
          case "tower-stop":
            _0x156954();
            break;
          case "club-info":
            await _0x308613();
            break;
          case "club-signin":
            await _0x20d615();
            break;
          case "club-export":
            await _0x376be3();
            break;
          case "car-info":
            await _0x2a2655();
            break;
          case "car-smart-send":
            await _0x13b89d();
            break;
          case "car-claim-all":
            await _0x528483();
            break;
          case "car-single-send":
            {
              const _0x394bfd = _0x56afa4.getAttribute("data-car-id");
              await _0xaa180(_0x394bfd);
              break;
            }
          case "car-single-refresh":
            {
              {
                const _0x47f1a4 = _0x56afa4.getAttribute("data-car-id");
                await _0x52ea46(_0x47f1a4);
                break;
              }
            }
          case "car-single-claim":
            {
              const _0x31c89b = _0x56afa4.getAttribute("data-car-id");
              await _0x3491d1(_0x31c89b);
              break;
            }
          case "car-single-helper":
            {
              const _0x1cf1bf = _0x56afa4.getAttribute("data-car-id");
              await _0xe001fe(_0x1cf1bf);
              break;
            }
          case "club-match-signup":
            await _0x4ccd7f("club-match", "legionmatch_rolesignup", {}, "俱乐部匹配报名");
            break;
          case "salt-match-query":
            {
              {
                const _0x3b8c69 = _0x1221b9();
                await _0x40e1bb(_0x3b8c69);
                break;
              }
            }
          case "salt-match-sort-red":
            _0x32cc08();
            break;
          case "salt-match-sort-score":
            _0x2e26d7();
            break;
          case "salt-match-export":
            await _0xdb3ca1();
            break;
          case "salt-map-query":
            await _0x6e1dce();
            break;
          case "battle-records-query":
            {
              const _0x32b7bd = _0x3fb8ee();
              await _0x51687d(_0x32b7bd);
              break;
            }
          case "battle-records-export":
            await _0x3e8081();
            break;
          case "history-records-query":
            await _0xee3ef9();
            break;
          case "history-records-export":
            await _0x36bade();
            break;
          case "monthly-refresh":
            await _0x2f0e8c();
            break;
          case "monthly-fish-topup":
            await _0x459284("topup");
            break;
          case "monthly-fish-complete":
            await _0x459284("complete");
            break;
          case "monthly-arena-topup":
            await _0x3ed216("topup");
            break;
          case "monthly-arena-complete":
            await _0x3ed216("complete");
            break;
          case "bosstower-refresh":
            await _0x44c75d();
            break;
          case "bosstower-execute":
            await _0x2c51eb();
            break;
          case "warguess-refresh":
            await _0x15253a();
            break;
          case "warguess-start":
            await _0x33ce67();
            break;
          case "warguess-coin":
            await _0x261301();
            break;
          case "skin-towers-refresh":
            await _0x46a5a5();
            break;
          case "skin-towers-challenge":
            {
              {
                const _0x44f9a0 = parseInt(_0x56afa4.getAttribute("data-boss"), 10);
                if (_0x44f9a0 >= 1 && _0x44f9a0 <= 6) {
                  {
                    await _0x1b2816(_0x44f9a0);
                  }
                }
                break;
              }
            }
          case "skin-towers-stop":
            _0x29cd5a();
            break;
          case "skin-lottery-refresh":
            await _0x51bce2();
            break;
          case "skin-lottery-start":
            await _0x59a16c();
            break;
          case "skin-lottery-stop":
            _0x29bedc();
            break;
          case "activity-get":
            await _0x4ccd7f("skin-challenge", "activity_get", {}, "获取活动");
            break;
          case "activity-start":
            {
              const _0x450895 = _0x21e446("qa-activity-actid", 0);
              const _0x2f8d1a = {
                actId: _0x450895
              };
              await _0x4ccd7f("skin-challenge", "activity_startactegame", _0x2f8d1a, "开始闯关");
              break;
            }
          case "treasure-info":
            await _0x4ccd7f("treasure", "bosstower_getinfo", {}, "获取宝库信息");
            break;
          case "treasure-rank":
            await _0x4ccd7f("treasure", "bosstower_gethelprank", {}, "获取排行");
            break;
          case "fish-challenge-start":
            {
              const _0x5466d9 = _0x21e446("qa-fish-actid", 0);
              const _0x17eb1b = {
                actId: _0x5466d9
              };
              await _0x4ccd7f("fish-challenge", "activity_startactegame", _0x17eb1b, "开始闯关");
              break;
            }
          case "consumption-info":
            await _0x4537c8();
            break;
          case "consumption-open":
            {
              {
                const _0x15cca0 = _0x21e446("qa-consumption-number", 4);
                await _0x1040dd(_0x15cca0);
                break;
              }
            }
          case "consumption-get":
            await _0x4ccd7f("consumption", "activity_get", {}, "获取消耗活动");
            break;
          case "consumption-claim":
            await _0x4ccd7f("consumption", "activity_recyclewarorderrewardclaim", {}, "领取消耗奖励");
            break;
          case "box-open":
            {
              {
                try {
                  {
                    const _0x18ff5b = _0x21e446("qa-box-itemid", 2001);
                    const _0x2b5bff = Math.floor(_0x21e446("qa-box-count", 10));
                    if (!Number.isFinite(_0x2b5bff) || _0x2b5bff < 10) {
                      {
                        _0x30927d("数量无效，最少输入10", "warning");
                        _0x1ddb84("宝箱助手: 数量无效 (" + _0x2b5bff + ")，最少10", "warning");
                        break;
                      }
                    }
                    if (_0x2b5bff % 10 !== 0) {
                      _0x30927d("数量必须是10的倍数", "warning");
                      _0x1ddb84("宝箱助手: 数量 " + _0x2b5bff + " 不是10的倍数", "warning");
                      break;
                    }
                    _0x1ddb84("宝箱助手: 正在获取物品数据...", "info");
                    const _0x4dfa70 = window.ROLE?.["items"] || {};
                    const _0x49846d = _0x16e7d2(_0x4dfa70, _0x18ff5b);
                    _0x1ddb84("宝箱助手: itemId=" + _0x18ff5b + ", 数量=" + _0x2b5bff + ", 库存=" + _0x49846d, "info");
                    if (_0x49846d <= 0) {
                      _0x30927d("宝箱库存为0", "warning");
                      _0x1ddb84("宝箱助手: 库存为0 (itemId=" + _0x18ff5b + ")", "warning");
                      break;
                    }
                    if (_0x2b5bff > _0x49846d) {
                      {
                        _0x30927d("超出库存数量（最大" + _0x49846d + "）", "warning");
                        _0x1ddb84("宝箱助手: 数量 " + _0x2b5bff + " 超出库存 " + _0x49846d, "warning");
                        break;
                      }
                    }
                    const _0x467344 = Math.floor(_0x2b5bff / 10);
                    _0x1ddb84("宝箱助手: 开始开箱，共 " + _0x467344 + " 批", "info");
                    for (let _0x5f5001 = 0; _0x5f5001 < _0x467344; _0x5f5001++) {
                      {
                        _0x1ddb84("宝箱助手: 开箱 " + (_0x5f5001 + 1) + "/" + _0x467344, "info");
                        const _0x3c40ad = {
                          itemId: _0x18ff5b,
                          number: 10
                        };
                        await _0x361aec("item_openbox", _0x3c40ad, "工具箱-开宝箱");
                        await _0x186d8b(350);
                      }
                    }
                    await _0x361aec("item_batchclaimboxpointreward", {}, "工具箱-领取宝箱积分奖励");
                    _0xe12aee(window.ROLE?.["items"], "toolbox");
                    _0x30927d("宝箱开启完成", "success");
                    _0x1ddb84("宝箱助手: 开箱完成", "success");
                  }
                } catch (_0x3c9593) {
                  _0x30927d("开箱失败: " + _0x3c9593.message, "error");
                  _0x1ddb84("宝箱助手: 异常 - " + _0x3c9593.message, "error");
                }
                break;
              }
            }
          case "box-claim":
            try {
              await _0x361aec("item_batchclaimboxpointreward", {}, "工具箱-领取宝箱积分奖励");
            } catch (_0x4f331c) {}
            break;
          case "fish-run":
            {
              try {
                const _0x332939 = Math.floor(_0x21e446("qa-fish-count", 10));
                const _0x2fbfac = _0x21e446("qa-fish-type", 1);
                const _0x1f532b = _0x9fa531("qa-fish-free");
                const _0x31700d = _0x2fbfac === 2 ? 1012 : 1011;
                if (!Number.isFinite(_0x332939) || _0x332939 < 10) {
                  {
                    _0x30927d("数量无效，最少输入10", "warning");
                    _0x1ddb84("钓鱼助手: 数量无效 (" + _0x332939 + ")，最少10", "warning");
                    break;
                  }
                }
                if (_0x332939 % 10 !== 0) {
                  _0x30927d("数量必须是10的倍数", "warning");
                  _0x1ddb84("钓鱼助手: 数量 " + _0x332939 + " 不是10的倍数", "warning");
                  break;
                }
                _0x1ddb84("钓鱼助手: 正在获取物品数据...", "info");
                const _0x3282fe = window.ROLE?.["items"] || {};
                const _0x48e5de = _0x16e7d2(_0x3282fe, _0x31700d);
                _0x1ddb84("钓鱼助手: type=" + _0x2fbfac + ", 数量=" + _0x332939 + ", 鱼竿库存=" + _0x48e5de, "info");
                if (_0x48e5de <= 0) {
                  _0x30927d("鱼竿库存为0", "warning");
                  _0x1ddb84("钓鱼助手: 鱼竿库存为0 (rodItemId=" + _0x31700d + ")", "warning");
                  break;
                }
                if (_0x332939 > _0x48e5de) {
                  _0x30927d("超出库存数量（最大" + _0x48e5de + "）", "warning");
                  _0x1ddb84("钓鱼助手: 数量 " + _0x332939 + " 超出库存 " + _0x48e5de, "warning");
                  break;
                }
                const _0x147f9e = Math.floor(_0x332939 / 10);
                _0x1ddb84("钓鱼助手: 开始钓鱼，共 " + _0x147f9e + " 批", "info");
                for (let _0x57c960 = 0; _0x57c960 < _0x147f9e; _0x57c960++) {
                  _0x1ddb84("钓鱼助手: 钓鱼 " + (_0x57c960 + 1) + "/" + _0x147f9e, "info");
                  const _0x37264a = {
                    type: _0x2fbfac,
                    lotteryNumber: 10,
                    newFree: _0x1f532b
                  };
                  await _0x361aec("artifact_lottery", _0x37264a, "工具箱-钓鱼");
                  await _0x186d8b(350);
                }
                _0xe12aee(window.ROLE?.["items"], "toolbox");
                _0x30927d("钓鱼完成", "success");
                _0x1ddb84("钓鱼助手: 钓鱼完成", "success");
              } catch (_0x487bb7) {
                _0x30927d("钓鱼失败: " + _0x487bb7.message, "error");
                _0x1ddb84("钓鱼助手: 异常 - " + _0x487bb7.message, "error");
              }
              break;
            }
          case "recruit-run":
            {
              const _0x5c44e9 = _0x21e446("qa-recruit-type", 3);
              const _0x2e190b = _0x21e446("qa-recruit-count", 1);
              const _0x23a6b5 = _0x9fa531("qa-recruit-club");
              const _0x6a3f0f = {
                byClub: _0x23a6b5,
                recruitNumber: _0x2e190b,
                recruitType: _0x5c44e9
              };
              await _0x4ccd7f("recruit-helper", "hero_recruit", _0x6a3f0f, "开始招募");
              break;
            }
          case "star-hero-upgrade":
            await _0x447c28();
            break;
          case "star-book-upgrade":
            await _0x1662b4();
            break;
          case "star-claim-rewards":
            await _0x52c406();
            break;
          case "star-stop":
            _0x2d75fc();
            break;
          case "arena-refresh":
            await _0x216883();
            break;
          case "arena-auto":
            await _0x59073e();
            break;
          case "arena-stop":
            _0x10d504();
            break;
          case "hero-upgrade-refresh":
            await _0x6f4984();
            break;
          case "hero-upgrade-auto":
            await _0x168124();
            break;
          case "hero-upgrade-order":
            await _0x3a33f3();
            break;
          case "hero-upgrade-mode":
            {
              {
                const _0x186004 = _0x56afa4.dataset.mode;
                if (_0x186004) {
                  _0x46ed5e(_0x186004);
                }
                break;
              }
            }
          case "quench-refresh":
            await _0x3f5beb();
            break;
          case "quench-once":
            {
              const _0x2cffab = await _0x21c0e1();
              break;
            }
          case "quench-continuous":
            _0x582877();
            break;
          case "quench-stop":
            _0x2a8c83();
            break;
          case "quench-reset":
            _0x386da5.quenchCount = 0;
            const _0x17a20a = document.getElementById("qa-quench-count");
            if (_0x17a20a) {
              _0x17a20a.textContent = "0";
            }
            break;
          case "auto-start":
            _0xdfac54();
            break;
          case "auto-stop":
            _0x56fb7a();
            break;
          case "quench-times-start":
            _0x428295();
            break;
          case "quench-times-stop":
            _0x50641e();
            break;
          case "top-rank-query":
            await _0x4eec58();
            break;
          case "top-rank-export":
            await _0x4161db();
            break;
          case "top-rank-page-prev":
            _0x25f552("prev");
            break;
          case "top-rank-page-next":
            _0x25f552("next");
            break;
          case "club-rank-query":
            await _0x3d1712();
            break;
          case "club-rank-export":
            await _0x2f314a();
            break;
          case "club-rank-page-prev":
            _0x2c867f("prev");
            break;
          case "club-rank-page-next":
            _0x2c867f("next");
            break;
          case "gold-rank-query":
            await _0x4cb212();
            break;
          case "gold-rank-export":
            await _0x21664b();
            break;
          case "gold-rank-page-prev":
            _0x35c1c7("prev");
            break;
          case "gold-rank-page-next":
            _0x35c1c7("next");
            break;
          case "gold-rank-group-1":
            _0x555f95("gold1");
            break;
          case "gold-rank-group-2":
            _0x555f95("gold2");
            break;
          case "gold-rank-group-3":
            _0x555f95("gold3");
            break;
          case "gold-rank-group-4":
            _0x555f95("gold4");
            break;
          case "gold-rank-group-5":
            _0x555f95("gold5");
            break;
          case "pvp-query":
            await _0x78b904();
            break;
          case "pvp-start":
            await _0x2b096a();
            break;
          case "pvp-stop":
            _0x468ba0();
            break;
          case "check-update":
            await _0x145b5f();
            break;
          case "do-update":
            _0x1e7fd8();
            break;
          case "peachtree-query":
            await _0x25af7d();
            break;
          case "peachtree-opponent":
            await _0x562d5a();
            break;
          case "peachtree-export":
            await _0x6882d2();
            break;
          case "peachtree-opponent-export":
            await _0x21c9b9();
            break;
          case "peachtree-opponent-records":
            await _0x208fcb();
            break;
          case "peachtree-opponent-records-export":
            await _0x102461();
            break;
          case "peachtree-battle":
            await _0x230199();
            break;
          case "peachtree-battle-export":
            await _0x5de94a();
            break;
          case "peachtree-combined-export":
            await _0x4fd132();
            break;
          case "dream-refresh-team":
            await _0x54f291();
            break;
          case "dream-select-team":
            await _0x962289();
            break;
          case "dream-refresh-merchant":
            await _0x216e36();
            break;
          case "dream-select-gold":
            _0x499c2f();
            break;
          case "dream-buy-selected":
            await _0x1b381e();
            break;
          case "dream-buy-all-gold":
            await _0x43aa27();
            break;
          case "weird-tower-refresh":
            await _0x1c3c71();
            break;
          case "weird-tower-climb":
            await _0x1f4276();
            break;
          case "weird-tower-stop":
            _0xa545a4();
            break;
          case "claim-free-keys":
            await _0x4922d1();
            break;
          case "merge-box-start":
            await _0x3dd526();
            break;
          case "merge-box-stop":
            _0x2f3fc8();
            break;
        }
      } catch (_0x54f83d) {} finally {
        _0x56afa4.disabled = false;
        _0x56afa4.textContent = _0x3d9d83;
        _0x386da5.actionLocks[_0x20a0d4] = false;
      }
    }
  };
  class _0x364228 {
    constructor(_0x13416c, _0x35220f = {}) {
      {
        this.input = _0x13416c;
        const _0x4c36f7 = {
          weekendOnly: _0x35220f.weekendOnly || false,
          format: _0x35220f.format || "yyyy/MM/dd",
          onChange: _0x35220f.onChange || null,
          ..._0x35220f
        };
        this.options = _0x4c36f7;
        this.currentDate = new Date();
        this.selectedDate = null;
        this.isOpen = false;
        this.popup = null;
        this.wrapper = null;
        this.init();
      }
    }
    init() {
      {
        this.wrapper = document.createElement("div");
        this.wrapper.className = "date-picker-wrapper";
        const _0xf1fb32 = document.createElement("div");
        _0xf1fb32.style.cssText = "display: flex; gap: 4px; align-items: center;";
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        _0xf1fb32.appendChild(this.input);
        const _0x2f3f73 = document.createElement("button");
        _0x2f3f73.className = "date-picker-btn";
        _0x2f3f73.innerHTML = "📅";
        _0x2f3f73.type = "button";
        _0x2f3f73.onclick = _0x7cec5f => {
          _0x7cec5f.preventDefault();
          _0x7cec5f.stopPropagation();
          this.toggle();
        };
        _0xf1fb32.appendChild(_0x2f3f73);
        this.wrapper.appendChild(_0xf1fb32);
        this.popup = document.createElement("div");
        this.popup.className = "calendar-popup qa-root";
        document.body.appendChild(this.popup);
        if (this.input.value) {
          {
            const _0x34506 = this.input.value.split("/");
            if (_0x34506.length === 3) {
              {
                this.selectedDate = new Date(_0x34506[0], _0x34506[1] - 1, _0x34506[2]);
                this.currentDate = new Date(_0x34506[0], _0x34506[1] - 1, 1);
              }
            }
          }
        }
        document.addEventListener("click", _0x5e8751 => {
          !this.wrapper.contains(_0x5e8751.target) && !this.popup.contains(_0x5e8751.target) && this.isOpen && this.close();
        });
        this.input.addEventListener("click", () => this.toggle());
        this.input.addEventListener("focus", () => this.open());
      }
    }
    updatePosition() {
      {
        const _0x5bc0db = this.wrapper.getBoundingClientRect();
        const _0x4f096d = this.popup.offsetHeight || 320;
        const _0x6889f4 = window.innerHeight;
        const _0x2c165f = _0x6889f4 - _0x5bc0db.bottom;
        if (_0x2c165f < _0x4f096d && _0x5bc0db.top > _0x4f096d) {
          this.popup.style.top = _0x5bc0db.top + window.scrollY - _0x4f096d - 4 + "px";
        } else {
          {
            this.popup.style.top = _0x5bc0db.bottom + window.scrollY + 4 + "px";
          }
        }
        this.popup.style.left = _0x5bc0db.left + window.scrollX + "px";
      }
    }
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        {
          this.open();
        }
      }
    }
    open() {
      this.isOpen = true;
      this.render();
      this.popup.classList.add("show");
      requestAnimationFrame(() => this.updatePosition());
    }
    close() {
      {
        this.isOpen = false;
        this.popup.classList.remove("show");
      }
    }
    render() {
      {
        const _0x4e9883 = this.currentDate.getFullYear();
        const _0x107f50 = this.currentDate.getMonth();
        this.popup.innerHTML = "\n      <div class=\"calendar-header\">\n        <button class=\"calendar-nav\" data-action=\"prev-year\">«</button>\n        <button class=\"calendar-nav\" data-action=\"prev-month\">‹</button>\n        <span class=\"calendar-title\">" + _0x4e9883 + "年" + (_0x107f50 + 1) + "月</span>\n        <button class=\"calendar-nav\" data-action=\"next-month\">›</button>\n        <button class=\"calendar-nav\" data-action=\"next-year\">»</button>\n      </div>\n      <div class=\"calendar-weekdays\">\n        <span class=\"calendar-weekday weekend\">日</span>\n        <span class=\"calendar-weekday\">一</span>\n        <span class=\"calendar-weekday\">二</span>\n        <span class=\"calendar-weekday\">三</span>\n        <span class=\"calendar-weekday\">四</span>\n        <span class=\"calendar-weekday\">五</span>\n        <span class=\"calendar-weekday weekend\">六</span>\n      </div>\n      <div class=\"calendar-days\">\n        " + this.renderDays() + "\n      </div>\n      <div class=\"calendar-shortcuts\">\n        <button class=\"calendar-shortcut\" data-shortcut=\"last-saturday\">上周六</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"last-sunday\">上周日</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"this-saturday\">本周六</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"this-sunday\">本周日</button>\n      </div>\n    ";
        this.popup.querySelectorAll(".calendar-nav").forEach(_0x1909ff => {
          {
            _0x1909ff.onclick = _0x4058f4 => {
              _0x4058f4.preventDefault();
              _0x4058f4.stopPropagation();
              this.handleNav(_0x1909ff.dataset.action);
            };
          }
        });
        this.popup.querySelectorAll(".calendar-day:not(.empty):not(.disabled)").forEach(_0x57e9eb => {
          _0x57e9eb.onclick = _0x240c61 => {
            _0x240c61.preventDefault();
            _0x240c61.stopPropagation();
            this.selectDate(parseInt(_0x57e9eb.dataset.day), parseInt(_0x57e9eb.dataset.month), parseInt(_0x57e9eb.dataset.year));
          };
        });
        this.popup.querySelectorAll(".calendar-shortcut").forEach(_0x54bc02 => {
          _0x54bc02.onclick = _0x1ad965 => {
            _0x1ad965.preventDefault();
            _0x1ad965.stopPropagation();
            this.handleShortcut(_0x54bc02.dataset.shortcut);
          };
        });
      }
    }
    renderDays() {
      const _0x5b7a9f = this.currentDate.getFullYear();
      const _0x4b8818 = this.currentDate.getMonth();
      const _0x55405b = new Date(_0x5b7a9f, _0x4b8818, 1).getDay();
      const _0xcfc467 = new Date(_0x5b7a9f, _0x4b8818 + 1, 0).getDate();
      const _0x1f575b = new Date(_0x5b7a9f, _0x4b8818, 0).getDate();
      const _0x3253f5 = new Date();
      _0x3253f5.setHours(0, 0, 0, 0);
      let _0x53386d = "";
      for (let _0x3d04c3 = _0x55405b - 1; _0x3d04c3 >= 0; _0x3d04c3--) {
        const _0x412b8e = _0x1f575b - _0x3d04c3;
        const _0x4ea08d = _0x4b8818 === 0 ? 11 : _0x4b8818 - 1;
        const _0x34834e = _0x4b8818 === 0 ? _0x5b7a9f - 1 : _0x5b7a9f;
        const _0x4c1636 = new Date(_0x34834e, _0x4ea08d, _0x412b8e);
        const _0x28e369 = _0x4c1636.getDay() === 0 || _0x4c1636.getDay() === 6;
        const _0x259347 = this.options.weekendOnly && !_0x28e369;
        _0x53386d += "<span class=\"calendar-day other-month" + (_0x28e369 ? " weekend" : "") + (_0x259347 ? " disabled" : "") + "\"\n                     data-day=\"" + _0x412b8e + "\" data-month=\"" + _0x4ea08d + "\" data-year=\"" + _0x34834e + "\">" + _0x412b8e + "</span>";
      }
      for (let _0x4c845d = 1; _0x4c845d <= _0xcfc467; _0x4c845d++) {
        const _0x15dbad = new Date(_0x5b7a9f, _0x4b8818, _0x4c845d);
        const _0x24f4d7 = _0x15dbad.getTime() === _0x3253f5.getTime();
        const _0x354f5a = this.selectedDate && _0x15dbad.getFullYear() === this.selectedDate.getFullYear() && _0x15dbad.getMonth() === this.selectedDate.getMonth() && _0x15dbad.getDate() === this.selectedDate.getDate();
        const _0x3794e5 = _0x15dbad.getDay() === 0 || _0x15dbad.getDay() === 6;
        const _0x20d102 = _0x15dbad > _0x3253f5;
        const _0x422951 = this.options.weekendOnly && !_0x3794e5 || _0x20d102;
        let _0x41a28f = "calendar-day";
        if (_0x24f4d7) {
          _0x41a28f += " today";
        }
        if (_0x354f5a) {
          _0x41a28f += " selected";
        }
        if (_0x3794e5) {
          _0x41a28f += " weekend";
        }
        if (_0x422951) {
          _0x41a28f += " disabled";
        }
        _0x53386d += "<span class=\"" + _0x41a28f + "\" data-day=\"" + _0x4c845d + "\" data-month=\"" + _0x4b8818 + "\" data-year=\"" + _0x5b7a9f + "\">" + _0x4c845d + "</span>";
      }
      const _0x177c4e = Math.ceil((_0x55405b + _0xcfc467) / 7) * 7;
      const _0x80cee6 = _0x177c4e - _0x55405b - _0xcfc467;
      for (let _0x392084 = 1; _0x392084 <= _0x80cee6; _0x392084++) {
        const _0x132087 = _0x4b8818 === 11 ? 0 : _0x4b8818 + 1;
        const _0xf7ef18 = _0x4b8818 === 11 ? _0x5b7a9f + 1 : _0x5b7a9f;
        _0x53386d += "<span class=\"calendar-day other-month disabled\"\n                     data-day=\"" + _0x392084 + "\" data-month=\"" + _0x132087 + "\" data-year=\"" + _0xf7ef18 + "\">" + _0x392084 + "</span>";
      }
      return _0x53386d;
    }
    handleNav(_0x5b0f10) {
      switch (_0x5b0f10) {
        case "prev-year":
          this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
          break;
        case "prev-month":
          this.currentDate.setMonth(this.currentDate.getMonth() - 1);
          break;
        case "next-month":
          this.currentDate.setMonth(this.currentDate.getMonth() + 1);
          break;
        case "next-year":
          this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
          break;
      }
      this.render();
    }
    handleShortcut(_0x24a5d1) {
      {
        const _0x964151 = new Date();
        const _0x13cde8 = _0x964151.getDay();
        let _0x432670;
        switch (_0x24a5d1) {
          case "last-saturday":
            const _0x4d7997 = _0x13cde8 === 6 ? 7 : _0x13cde8 + 1;
            _0x432670 = new Date(_0x964151);
            _0x432670.setDate(_0x964151.getDate() - _0x4d7997);
            break;
          case "last-sunday":
            const _0x4f9af4 = _0x13cde8 === 0 ? 7 : _0x13cde8;
            _0x432670 = new Date(_0x964151);
            _0x432670.setDate(_0x964151.getDate() - _0x4f9af4);
            break;
          case "this-saturday":
            if (_0x13cde8 === 6) {
              _0x432670 = new Date(_0x964151);
            } else {
              {
                _0x432670 = new Date(_0x964151);
                _0x432670.setDate(_0x964151.getDate() + (6 - _0x13cde8));
              }
            }
            _0x432670 > _0x964151 && _0x432670.setDate(_0x432670.getDate() - 7);
            break;
          case "this-sunday":
            if (_0x13cde8 === 0) {
              {
                _0x432670 = new Date(_0x964151);
              }
            } else {
              _0x432670 = new Date(_0x964151);
              _0x432670.setDate(_0x964151.getDate() - _0x13cde8);
            }
            break;
        }
        if (_0x432670) {
          {
            this.selectDate(_0x432670.getDate(), _0x432670.getMonth(), _0x432670.getFullYear());
          }
        }
      }
    }
    selectDate(_0x5e9723, _0x527bd5, _0x4dd327) {
      this.selectedDate = new Date(_0x4dd327, _0x527bd5, _0x5e9723);
      this.currentDate = new Date(_0x4dd327, _0x527bd5, 1);
      const _0x46ba59 = _0x4dd327 + "/" + String(_0x527bd5 + 1).padStart(2, "0") + "/" + String(_0x5e9723).padStart(2, "0");
      this.input.value = _0x46ba59;
      this.options.onChange && this.options.onChange(_0x46ba59, this.selectedDate);
      this.close();
    }
  }
  const _0x4456ad = () => {
    const _0x1b23de = document.getElementById("qa-salt-match-date");
    if (_0x1b23de && !_0x1b23de._datePicker) {
      const _0x367469 = {
        weekendOnly: true,
        onChange: _0x26e27f => {}
      };
      _0x1b23de._datePicker = new _0x364228(_0x1b23de, _0x367469);
    }
    const _0x569796 = document.getElementById("qa-battle-date");
    if (_0x569796 && !_0x569796._datePicker) {
      const _0x1b42f1 = {
        weekendOnly: true,
        onChange: _0x5b1b07 => {}
      };
      _0x569796._datePicker = new _0x364228(_0x569796, _0x1b42f1);
    }
    const _0x23bf1a = document.getElementById("qa-peachtree-date");
    if (_0x23bf1a && !_0x23bf1a._datePicker) {
      const _0x53c21d = new Date();
      const _0x310ef3 = _0x53c21d.getDay();
      const _0x4eccf0 = new Date(_0x53c21d);
      _0x310ef3 === 0 ? _0x4eccf0.setDate(_0x53c21d.getDate()) : _0x4eccf0.setDate(_0x53c21d.getDate() - _0x310ef3);
      const _0x2bd8b6 = _0x4eccf0.getFullYear() + "-" + String(_0x4eccf0.getMonth() + 1).padStart(2, "0") + "-" + String(_0x4eccf0.getDate()).padStart(2, "0");
      !_0x23bf1a.value && (_0x23bf1a.value = _0x2bd8b6);
      const _0x188f71 = {
        weekendOnly: false,
        onChange: _0x223fe9 => {}
      };
      _0x23bf1a._datePicker = new _0x364228(_0x23bf1a, _0x188f71);
    }
  };
  const _0x2233e2 = () => {
    let _0x1ff42c = null;
    let _0x1f9265 = false;
    const _0x24fe16 = _0x5a4069 => {
      {
        const _0x212f3c = _0x5a4069.target.closest("[data-long-press-info]");
        if (!_0x212f3c) {
          return;
        }
        const _0x16ae0f = _0x212f3c.getAttribute("data-long-press-info");
        if (!_0x16ae0f) {
          return;
        }
        _0x1f9265 = false;
        _0x1ff42c = setTimeout(() => {
          const _0xc766c7 = _0x16ae0f.replace(/&#10;/g, "\n");
          _0x36ed98(_0xc766c7);
          _0x1f9265 = true;
        }, 1500);
      }
    };
    const _0x5aa58d = _0x26d4c4 => {
      {
        _0x1ff42c && (clearTimeout(_0x1ff42c), _0x1ff42c = null);
        if (_0x1f9265) {
          {
            _0x26d4c4.preventDefault();
            _0x26d4c4.stopPropagation();
            _0x1f9265 = false;
          }
        }
      }
    };
    const _0x36ed98 = _0x107681 => {
      const _0x5438dc = document.createElement("div");
      _0x5438dc.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.7);\n      z-index: 999999;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      box-sizing: border-box;\n    ";
      const _0x1e3d4e = document.createElement("div");
      _0x1e3d4e.style.cssText = "\n      background: #1e293b;\n      border-radius: 12px;\n      padding: 20px;\n      max-width: 90%;\n      max-height: 70vh;\n      overflow-y: auto;\n      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n    ";
      const _0x4ebe70 = document.createElement("div");
      _0x4ebe70.textContent = "功能说明";
      _0x4ebe70.style.cssText = "\n      font-size: 16px;\n      font-weight: bold;\n      color: #fff;\n      margin-bottom: 15px;\n      text-align: center;\n    ";
      const _0x54a03b = document.createElement("div");
      _0x54a03b.textContent = _0x107681;
      _0x54a03b.style.cssText = "\n      color: #cbd5e1;\n      font-size: 14px;\n      line-height: 1.6;\n      white-space: pre-wrap;\n      margin-bottom: 15px;\n    ";
      const _0x7e270b = document.createElement("button");
      _0x7e270b.textContent = "关闭";
      _0x7e270b.style.cssText = "\n      width: 100%;\n      padding: 12px;\n      background: #3b82f6;\n      color: #fff;\n      border: none;\n      border-radius: 8px;\n      font-size: 14px;\n      font-weight: 600;\n      cursor: pointer;\n    ";
      const _0x47a3b2 = () => {
        {
          document.body.removeChild(_0x5438dc);
        }
      };
      _0x7e270b.onclick = _0x47a3b2;
      _0x5438dc.onclick = _0x12a35a => {
        {
          if (_0x12a35a.target === _0x5438dc) {
            _0x47a3b2();
          }
        }
      };
      _0x1e3d4e.appendChild(_0x4ebe70);
      _0x1e3d4e.appendChild(_0x54a03b);
      _0x1e3d4e.appendChild(_0x7e270b);
      _0x5438dc.appendChild(_0x1e3d4e);
      document.body.appendChild(_0x5438dc);
    };
    const _0xc6f99b = {
      passive: true
    };
    document.addEventListener("touchstart", _0x24fe16, _0xc6f99b);
    document.addEventListener("touchend", _0x5aa58d);
    document.addEventListener("mousedown", _0x24fe16);
    document.addEventListener("mouseup", _0x5aa58d);
    document.addEventListener("mouseleave", _0x5aa58d);
  };
  let _0x418a20 = false;
  let _0x65e019 = false;
  const _0x52ead2 = () => {
    {
      if (_0x65e019) {
        return;
      }
      _0x65e019 = true;
      setTimeout(() => {
        _0x2b0b8a("💡 长按二级菜单标题调整菜单顺序", 2000);
      }, 500);
    }
  };
  const _0x19dbd8 = () => {
    const _0x5ed63d = () => {
      if (window.ROLE?.["roleId"] || window.ROLE?.["id"]) {
        const _0x599b9d = window.ROLE.roleId || window.ROLE.id;
        _0x386da5.roleId = _0x599b9d;
        _0x386da5.items = window.ROLE.items || {};
        _0x5abefb();
        _0x2f1fa2();
      } else {
        setTimeout(_0x5ed63d, 500);
      }
    };
    _0x5ed63d();
  };
  const _0x115380 = (_0x525755, _0x3abada) => {
    {
      const _0x1b14c6 = document.getElementById(_0x525755);
      if (!_0x1b14c6) {
        return;
      }
      _0x1b14c6.classList.toggle("error", !!_0x3abada);
    }
  };
  const _0x13b809 = (_0x5c842e, _0x188fc6) => {
    const _0xdf2a13 = document.getElementById(_0x5c842e);
    if (!_0xdf2a13) {
      return;
    }
    const _0x33e90f = String(_0x188fc6 || "").trim();
    _0xdf2a13.textContent = _0x33e90f;
    _0xdf2a13.style.display = _0x33e90f ? "block" : "none";
  };
  const _0x416507 = _0x19a27f => {
    {
      const _0x4c47f6 = window.ROLE?.["items"] || _0x386da5?.["items"] || {};
      return _0x16e7d2(_0x4c47f6, _0x19a27f);
    }
  };
  const _0x15dd6a = () => {
    const _0x3337d0 = document.getElementById("qa-box-itemid");
    const _0x55d9f4 = document.getElementById("qa-box-count");
    const _0x239790 = document.getElementById("qa-box-open-btn");
    const _0x5985d3 = Number(_0x3337d0?.["value"]) || 2001;
    const _0x53bd6e = _0x416507(_0x5985d3);
    const _0x277223 = Number(_0x55d9f4?.["value"]);
    let _0x21e6ca = "";
    if (!_0x386da5?.["items"]) {
      _0x21e6ca = "请先刷新角色信息";
    } else {
      if (!Number.isFinite(_0x277223) || !_0x277223) {
        _0x21e6ca = "请输入数量";
      } else {
        if (_0x277223 < 10) {
          _0x21e6ca = "最少输入10";
        } else {
          if (_0x277223 % 10 !== 0) {
            _0x21e6ca = "数量必须是10的倍数";
          } else {
            if (_0x53bd6e <= 0) {
              _0x21e6ca = "当前宝箱库存为0";
            } else {
              if (_0x277223 > _0x53bd6e) {
                _0x21e6ca = "超出库存数量（最大" + _0x53bd6e + "）";
              }
            }
          }
        }
      }
    }
    _0x13b809("qa-box-error", _0x21e6ca);
    _0x115380("qa-box-count", !!_0x21e6ca);
    if (_0x239790) {
      _0x239790.disabled = !!_0x21e6ca;
    }
    const _0x1c7ecf = document.getElementById("qa-fish-type");
    const _0xb03d55 = document.getElementById("qa-fish-count");
    const _0x9027e4 = document.getElementById("qa-fish-run-btn");
    const _0x4b3635 = Number(_0x1c7ecf?.["value"]) || 1;
    const _0x4c23e5 = _0x4b3635 === 2 ? 1012 : 1011;
    const _0x3ae006 = _0x416507(_0x4c23e5);
    const _0x18cb5c = Number(_0xb03d55?.["value"]);
    let _0x5837b3 = "";
    if (!_0x386da5?.["items"]) {
      _0x5837b3 = "请先刷新角色信息";
    } else {
      if (!Number.isFinite(_0x18cb5c) || !_0x18cb5c) {
        _0x5837b3 = "请输入数量";
      } else {
        if (_0x18cb5c < 10) {
          _0x5837b3 = "最少输入10";
        } else {
          if (_0x18cb5c % 10 !== 0) {
            _0x5837b3 = "数量必须是10的倍数";
          } else {
            if (_0x3ae006 <= 0) {
              _0x5837b3 = "当前鱼竿库存为0";
            } else {
              if (_0x18cb5c > _0x3ae006) {
                _0x5837b3 = "超出库存数量（最大" + _0x3ae006 + "）";
              }
            }
          }
        }
      }
    }
    _0x13b809("qa-fish-error", _0x5837b3);
    _0x115380("qa-fish-count", !!_0x5837b3);
    if (_0x9027e4) {
      _0x9027e4.disabled = !!_0x5837b3;
    }
  };
  const _0x3b219a = async () => {
    {
      if (document.getElementById("qa-root")) {
        return;
      }
      const _0x7c2022 = document.createElement("style");
      _0x7c2022.textContent = _0x2a35bb();
      document.head.appendChild(_0x7c2022);
      const _0x39a57c = document.createElement("div");
      _0x39a57c.id = "qa-root";
      _0x39a57c.className = "qa-root";
      _0x39a57c.setAttribute("data-theme", _0x386da5.theme);
      const _0x122fcd = document.createElement("div");
      _0x122fcd.id = "qa-orb";
      _0x122fcd.className = "floating-orb";
      _0x122fcd.innerHTML = "<svg class=\"orb-icon\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z\"/>\n    <path d=\"M7 17l5-8 5 8H7z\" opacity=\"0.5\"/>\n  </svg>";
      _0x122fcd.title = "点击展开/收起\n长按切换主题\n可拖动位置";
      const _0x792a53 = localStorage.getItem(_0x3f3488);
      if (_0x792a53) {
        {
          try {
            const {
              x: _0x51fa48,
              y: _0x4e69eb
            } = JSON.parse(_0x792a53);
            const _0x2618ec = Math.max(20, Math.min(window.innerWidth - 20, _0x51fa48));
            const _0x58d284 = Math.max(20, Math.min(window.innerHeight - 20, _0x4e69eb));
            _0x122fcd.style.left = _0x2618ec + "px";
            _0x122fcd.style.top = _0x58d284 + "px";
            _0x122fcd.style.right = "auto";
            _0x122fcd.style.bottom = "auto";
            _0x122fcd.style.transform = "translate(-50%, -50%)";
          } catch (_0x4c4ca6) {}
        }
      }
      let _0x44b930 = false;
      let _0x9ff5d5 = 0;
      let _0x24780a = 0;
      let _0x215c43 = 0;
      let _0x4c1357 = 0;
      let _0x574fc2 = false;
      let _0x957a6f = null;
      let _0x4be144 = false;
      const _0xeb0d1e = () => {
        {
          _0x386da5.theme = _0x386da5.theme === "light" ? "dark" : "light";
          localStorage.setItem(_0x3263b1, _0x386da5.theme);
          const _0x26ae0c = document.getElementById("qa-root");
          if (_0x26ae0c) {
            _0x26ae0c.setAttribute("data-theme", _0x386da5.theme);
          }
        }
      };
      const _0x22de8f = _0x3654fc => {
        if (_0x3654fc.type === "mousedown" && _0x3654fc.button !== 0) {
          return;
        }
        _0x3654fc.preventDefault();
        _0x44b930 = true;
        _0x574fc2 = false;
        _0x4be144 = false;
        _0x122fcd.classList.add("dragging");
        const _0x515cd3 = _0x3654fc.touches ? _0x3654fc.touches[0] : _0x3654fc;
        _0x9ff5d5 = _0x515cd3.clientX;
        _0x24780a = _0x515cd3.clientY;
        const _0x1dda83 = _0x122fcd.getBoundingClientRect();
        _0x215c43 = _0x1dda83.left + _0x1dda83.width / 2;
        _0x4c1357 = _0x1dda83.top + _0x1dda83.height / 2;
        _0x957a6f = setTimeout(() => {
          {
            !_0x574fc2 && (_0x4be144 = true, _0xeb0d1e(), _0x30927d(_0x386da5.theme === "dark" ? "已切换到暗色主题" : "已切换到亮色主题", "success"));
          }
        }, 500);
      };
      const _0x13f925 = _0x28d1de => {
        {
          if (!_0x44b930) {
            return;
          }
          _0x28d1de.preventDefault();
          const _0x1ebf87 = _0x28d1de.touches ? _0x28d1de.touches[0] : _0x28d1de;
          const _0x48a427 = _0x1ebf87.clientX - _0x9ff5d5;
          const _0x4f491d = _0x1ebf87.clientY - _0x24780a;
          (Math.abs(_0x48a427) > 5 || Math.abs(_0x4f491d) > 5) && (_0x574fc2 = true, _0x957a6f && (clearTimeout(_0x957a6f), _0x957a6f = null));
          const _0x5472c6 = Math.max(20, Math.min(window.innerWidth - 20, _0x215c43 + _0x48a427));
          const _0x75e8bb = Math.max(20, Math.min(window.innerHeight - 20, _0x4c1357 + _0x4f491d));
          _0x122fcd.style.left = _0x5472c6 + "px";
          _0x122fcd.style.top = _0x75e8bb + "px";
          _0x122fcd.style.right = "auto";
          _0x122fcd.style.bottom = "auto";
          _0x122fcd.style.transform = "translate(-50%, -50%)";
        }
      };
      const _0x4840d3 = () => {
        {
          if (!_0x44b930) {
            return;
          }
          _0x44b930 = false;
          _0x122fcd.classList.remove("dragging");
          _0x957a6f && (clearTimeout(_0x957a6f), _0x957a6f = null);
          if (_0x574fc2) {
            const _0x3dfdff = _0x122fcd.getBoundingClientRect();
            const _0x594b87 = {
              x: _0x3dfdff.left + _0x3dfdff.width / 2,
              y: _0x3dfdff.top + _0x3dfdff.height / 2
            };
            localStorage.setItem(_0x3f3488, JSON.stringify(_0x594b87));
          }
          if (!_0x574fc2 && !_0x4be144) {
            const _0x10339f = document.getElementById("qa-panel");
            const _0xf7fa6f = !_0x10339f.classList.contains("show");
            _0x10339f.classList.toggle("show");
            if (_0xf7fa6f) {
              {
                !_0x418a20 && (_0x418a20 = true, _0x52ead2());
                if (_0x386da5.activePage) {
                  {
                    _0x788674(_0x386da5.activePage);
                  }
                }
              }
            }
          }
        }
      };
      _0x122fcd.addEventListener("mousedown", _0x22de8f);
      const _0x4f22d7 = {
        passive: false
      };
      _0x122fcd.addEventListener("touchstart", _0x22de8f, _0x4f22d7);
      document.addEventListener("mousemove", _0x13f925);
      const _0x1fd165 = {
        passive: false
      };
      document.addEventListener("touchmove", _0x13f925, _0x1fd165);
      document.addEventListener("mouseup", _0x4840d3);
      document.addEventListener("touchend", _0x4840d3);
      const _0x35db8a = document.createElement("div");
      _0x35db8a.id = "qa-panel";
      _0x35db8a.className = "panel-shell";
      _0x35db8a.innerHTML = "\n    <div class=\"panel-header\">\n      <div class=\"menu-nav\" id=\"qa-menu-nav\">\n        " + _0x9b2621() + "\n      </div>\n    </div>\n    <div class=\"content-wrapper\">\n      <div class=\"content-area\">\n        " + _0x275336() + "\n      </div>\n    </div>\n    <div class=\"qa-watermark\" id=\"qa-watermark\"></div>\n  ";
      _0x39a57c.appendChild(_0x122fcd);
      _0x39a57c.appendChild(_0x35db8a);
      document.body.appendChild(_0x39a57c);
      _0x30ea75();
      _0x39a57c.setAttribute("data-theme", _0x386da5.theme);
      const _0x14b563 = document.getElementById("qa-menu-nav");
      _0x14b563 && _0x386da5.menuCollapsed && _0x14b563.classList.toggle("collapsed", _0x386da5.menuCollapsed);
      let _0x21f8a2 = null;
      let _0x50e43a = null;
      let _0x4e77b1 = 0;
      let _0x2daf94 = null;
      let _0x5560dd = false;
      let _0x295b83 = false;
      const _0x1e9d91 = () => !!_0x14b563 && _0x14b563.scrollWidth > _0x14b563.clientWidth + 1;
      const _0x2f7203 = () => {
        _0x295b83 = true;
        setTimeout(() => {
          {
            _0x295b83 = false;
          }
        }, 350);
      };
      const _0x526e76 = _0x32d279 => {
        const _0x4398d3 = _0x32d279.touches[0];
        _0x21f8a2 = _0x4398d3.clientX;
        _0x50e43a = _0x4398d3.clientY;
        _0x4e77b1 = _0x14b563?.["scrollLeft"] || 0;
        _0x2daf94 = null;
        _0x5560dd = false;
      };
      const _0x27f8fa = _0x51b764 => {
        {
          if (_0x21f8a2 === null || _0x50e43a === null) {
            return;
          }
          const _0x28f9b9 = _0x51b764.touches[0];
          const _0x123a7f = _0x28f9b9.clientX - _0x21f8a2;
          const _0x5739c4 = _0x28f9b9.clientY - _0x50e43a;
          if (!_0x2daf94) {
            {
              if (Math.abs(_0x123a7f) > 8 && Math.abs(_0x123a7f) > Math.abs(_0x5739c4)) {
                _0x2daf94 = "horizontal";
              } else {
                if (Math.abs(_0x5739c4) > 8 && Math.abs(_0x5739c4) > Math.abs(_0x123a7f)) {
                  _0x2daf94 = "vertical";
                }
              }
            }
          }
          if (_0x2daf94 === "horizontal") {
            {
              if (Math.abs(_0x123a7f) > 3) {
                _0x5560dd = true;
              }
              _0x1e9d91() && (_0x14b563.scrollLeft = _0x4e77b1 - _0x123a7f);
              _0x51b764.preventDefault();
            }
          }
        }
      };
      const _0xd15180 = _0x236449 => {
        if (_0x21f8a2 === null || _0x50e43a === null) {
          return;
        }
        if (_0x236449.changedTouches && _0x236449.changedTouches.length > 0) {
          const _0x511171 = _0x236449.changedTouches[0];
          const _0x5a377d = _0x511171.clientX - _0x21f8a2;
          const _0x575db9 = _0x511171.clientY - _0x50e43a;
          if (!_0x1e9d91() && Math.abs(_0x5a377d) > 50 && Math.abs(_0x5a377d) > Math.abs(_0x575db9)) {
            const _0x37dbde = _0x386da5.activePage;
            const _0x33c4aa = _0x5d9986.indexOf(_0x37dbde);
            if (_0x5a377d < 0 && _0x33c4aa < _0x5d9986.length - 1) {
              _0x422f68(_0x5d9986[_0x33c4aa + 1]);
            } else {
              _0x5a377d > 0 && _0x33c4aa > 0 && _0x422f68(_0x5d9986[_0x33c4aa - 1]);
            }
            _0x2f7203();
          } else {
            _0x5560dd && _0x2f7203();
          }
        }
        _0x21f8a2 = null;
        _0x50e43a = null;
        _0x2daf94 = null;
        _0x5560dd = false;
      };
      if (_0x14b563) {
        const _0x3ed84c = {
          passive: true
        };
        _0x14b563.addEventListener("touchstart", _0x526e76, _0x3ed84c);
        const _0x37dd27 = {
          passive: false
        };
        _0x14b563.addEventListener("touchmove", _0x27f8fa, _0x37dd27);
        const _0x5ceaa9 = {
          passive: true
        };
        _0x14b563.addEventListener("touchend", _0xd15180, _0x5ceaa9);
        let _0x6737c8 = false;
        let _0x32c51a = 0;
        let _0x4bb54c = 0;
        let _0x33d42a = false;
        _0x14b563.addEventListener("mousedown", _0x163a76 => {
          {
            if (_0x163a76.button !== 0) {
              return;
            }
            _0x6737c8 = true;
            _0x33d42a = false;
            _0x32c51a = _0x163a76.clientX;
            _0x4bb54c = _0x14b563.scrollLeft;
            _0x14b563.classList.add("dragging");
            _0x163a76.preventDefault();
          }
        });
        document.addEventListener("mousemove", _0x47df4b => {
          {
            if (!_0x6737c8) {
              return;
            }
            const _0x5c68e6 = _0x47df4b.clientX - _0x32c51a;
            if (Math.abs(_0x5c68e6) > 3) {
              _0x33d42a = true;
            }
            _0x14b563.scrollLeft = _0x4bb54c - _0x5c68e6;
            _0x47df4b.preventDefault();
          }
        });
        document.addEventListener("mouseup", () => {
          if (!_0x6737c8) {
            return;
          }
          _0x6737c8 = false;
          _0x14b563.classList.remove("dragging");
          if (_0x33d42a) {
            _0x2f7203();
          }
        });
      }
      _0x35db8a.addEventListener("click", _0x4986de => {
        if (_0x295b83 && _0x4986de.target.closest("#qa-menu-nav")) {
          {
            _0x4986de.preventDefault();
            _0x4986de.stopPropagation();
            return;
          }
        }
        const _0x135d6f = _0x4986de.target.closest(".card-header");
        if (_0x135d6f) {
          const _0x1f022b = _0x135d6f.closest(".card[data-collapsible]");
          if (_0x1f022b && !_0x4986de.target.closest("button") && !_0x4986de.target.closest("input")) {
            const _0x11a092 = _0x1f022b.classList.contains("collapsed");
            _0x1f022b.classList.toggle("collapsed");
            if (_0x11a092) {
              const _0x188004 = _0x1f022b.dataset.cardId;
              _0x188004 && (_0x188004 === "tower" || !_0x1f022b.dataset.loaded) && _0x4c3612(_0x188004, _0x1f022b);
            }
            return;
          }
        }
        const _0x3363e7 = _0x4986de.target.closest("[data-changelog-toggle]");
        if (_0x3363e7) {
          const _0x1206b2 = _0x3363e7.closest(".changelog-version");
          if (_0x1206b2) {
            {
              _0x1206b2.classList.toggle("collapsed");
              return;
            }
          }
        }
        const _0x38cd13 = _0x4986de.target.closest(".menu-item");
        if (_0x38cd13) {
          const _0x207a4f = _0x38cd13.getAttribute("data-page");
          if (_0x207a4f) {
            _0x422f68(_0x207a4f);
          }
          return;
        }
        const _0x4bc6ba = _0x4986de.target.closest(".qa-box-option");
        if (_0x4bc6ba) {
          const _0x4547ed = Number(_0x4bc6ba.getAttribute("data-itemid")) || 2001;
          document.querySelectorAll(".qa-box-option").forEach(_0x3f0fa3 => _0x3f0fa3.classList.toggle("selected", _0x3f0fa3 === _0x4bc6ba));
          const _0x27952b = document.getElementById("qa-box-itemid");
          if (_0x27952b) {
            _0x27952b.value = String(_0x4547ed);
          }
          const _0x15e409 = _0x416507(_0x4547ed);
          const _0x5de6de = document.getElementById("qa-box-count");
          if (_0x5de6de) {
            _0x5de6de.max = String(Math.max(_0x15e409, 10));
            const _0x1d6376 = Number(_0x5de6de.value);
            if (Number.isFinite(_0x1d6376) && _0x15e409 > 0 && _0x1d6376 > _0x15e409) {
              const _0x228d28 = Math.max(Math.floor(_0x15e409 / 10) * 10, 10);
              _0x5de6de.value = String(_0x228d28);
            }
          }
          _0x15dd6a();
          return;
        }
        const _0x3a06ae = _0x4986de.target.closest(".qa-fish-option");
        if (_0x3a06ae) {
          const _0x4a14b4 = Number(_0x3a06ae.getAttribute("data-type")) || 1;
          document.querySelectorAll(".qa-fish-option").forEach(_0x51298d => _0x51298d.classList.toggle("selected", _0x51298d === _0x3a06ae));
          const _0x28c7e2 = document.getElementById("qa-fish-type");
          if (_0x28c7e2) {
            _0x28c7e2.value = String(_0x4a14b4);
          }
          const _0x25f083 = _0x4a14b4 === 2 ? 1012 : 1011;
          const _0x1c9d2b = _0x416507(_0x25f083);
          const _0x16fdf8 = document.getElementById("qa-fish-count");
          if (_0x16fdf8) {
            {
              _0x16fdf8.max = String(Math.max(_0x1c9d2b, 10));
              const _0x3a8f0c = Number(_0x16fdf8.value);
              if (Number.isFinite(_0x3a8f0c) && _0x1c9d2b > 0 && _0x3a8f0c > _0x1c9d2b) {
                const _0x4e5ba8 = Math.max(Math.floor(_0x1c9d2b / 10) * 10, 10);
                _0x16fdf8.value = String(_0x4e5ba8);
              }
            }
          }
          _0x15dd6a();
          return;
        }
        const _0x37ac48 = _0x4986de.target.closest("[data-action]");
        if (_0x37ac48) {
          _0x324b6f(_0x37ac48);
        }
      });
      _0x35db8a.addEventListener("change", async _0x5df5b0 => {
        const _0xb8d5db = _0x5df5b0.target;
        if (_0xb8d5db && _0xb8d5db.hasAttribute("data-task")) {
          const _0x2c72e7 = document.getElementById("qa-daily-select-all");
          if (_0x2c72e7) {
            const _0x3ce401 = document.querySelectorAll("#page-daily-tasks input[data-task]");
            const _0x526580 = Array.from(_0x3ce401).every(_0x2b40cd => _0x2b40cd.checked);
            _0x2c72e7.checked = _0x526580;
          }
        }
        _0xb8d5db && _0xb8d5db.id === "qa-fish-free" && _0x15dd6a();
        if (_0xb8d5db && _0xb8d5db.id === "qa-top-rank-page-size") {
          const {
            handleTopRankPageSizeChange: _0x59c4a9
          } = await Promise.resolve().then(function () {
            {
              return _0x528705;
            }
          });
          _0x59c4a9(_0xb8d5db.value);
        } else {
          if (_0xb8d5db && _0xb8d5db.id === "qa-club-rank-page-size") {
            {
              const {
                handleClubRankPageSizeChange: _0x1b9e1a
              } = await Promise.resolve().then(function () {
                return _0x528705;
              });
              _0x1b9e1a(_0xb8d5db.value);
            }
          } else {
            if (_0xb8d5db && _0xb8d5db.id === "qa-gold-rank-page-size") {
              const {
                handleGoldRankPageSizeChange: _0x46b00f
              } = await Promise.resolve().then(function () {
                {
                  return _0x528705;
                }
              });
              _0x46b00f(_0xb8d5db.value);
            }
          }
        }
      });
      _0x35db8a.addEventListener("input", _0x13d63b => {
        const _0x2f9fdf = _0x13d63b.target;
        if (!_0x2f9fdf) {
          return;
        }
        (_0x2f9fdf.id === "qa-box-count" || _0x2f9fdf.id === "qa-fish-count") && _0x15dd6a();
      });
      document.getElementById("qa-menu-toggle")?.["addEventListener"]("click", () => {
        _0x386da5.menuCollapsed = !_0x386da5.menuCollapsed;
        localStorage.setItem(_0x344633, String(_0x386da5.menuCollapsed));
        if (_0x14b563) {
          {
            _0x14b563.classList.toggle("collapsed", _0x386da5.menuCollapsed);
          }
        }
      });
      _0x422f68(_0xe81745);
      _0x4864a0();
      _0x3f743d();
      _0x18afbd();
      _0x9a8c03("--");
      _0x8d4c44();
      _0x42e503();
      const {
        initTreasureAssist: _0x36ccfc
      } = await Promise.resolve().then(function () {
        return _0x481579;
      });
      const {
        initDreamModule: _0x30780e
      } = await Promise.resolve().then(function () {
        return _0xc96279;
      });
      _0x36ccfc();
      _0x30780e();
      setTimeout(() => _0x4456ad(), 100);
      _0x2233e2();
      _0x19dbd8();
    }
  };
  const _0x422f68 = _0x15215f => {
    _0x386da5.activePage = _0x15215f;
    const _0x229f47 = document.getElementById("qa-panel");
    if (!_0x229f47) {
      return;
    }
    _0x229f47.querySelectorAll(".menu-item").forEach(_0x2a7d60 => {
      _0x2a7d60.classList.toggle("active", _0x2a7d60.getAttribute("data-page") === _0x15215f);
    });
    _0x229f47.querySelectorAll(".page-content").forEach(_0x556dde => {
      {
        _0x556dde.classList.toggle("active", _0x556dde.id === "page-" + _0x15215f);
      }
    });
    const _0x233507 = _0x229f47.querySelector(".page-content.active");
    _0x233507 && Promise.resolve().then(function () {
      return _0x2a6285;
    }).then(({
      initCardReordering: _0x311507,
      loadCardOrder: _0x32ef80
    }) => {
      _0x32ef80(_0x233507);
      _0x311507(_0x233507);
    });
    _0x418a20 && _0x788674(_0x15215f);
  };
  const _0x788674 = async _0x4b21d2 => {
    try {
      switch (_0x4b21d2) {
        case "daily":
          if (window.ROLE) {
            _0x621a8a(window.ROLE.dailyTask);
          } else {
            {
              const _0x28772e = (_0x2132f1 = 10) => {
                {
                  if (window.ROLE) {
                    _0x621a8a(window.ROLE.dailyTask);
                  } else {
                    _0x2132f1 > 0 && setTimeout(() => _0x28772e(_0x2132f1 - 1), 500);
                  }
                }
              };
              _0x28772e();
            }
          }
          break;
        case "toolbox":
          break;
        case "tower":
          {
            _0x5c8702();
            break;
          }
        case "club":
          {
            const {
              initSaltMatchDate: _0x5cde9a
            } = await Promise.resolve().then(function () {
              return _0x4b0064;
            });
            const {
              initBattleDate: _0x27645f
            } = await Promise.resolve().then(function () {
              return _0xa07d3a;
            });
            const {
              updateTimeStatus: _0x3e10d2
            } = await Promise.resolve().then(function () {
              return _0x22ebf2;
            });
            _0x5cde9a();
            _0x27645f();
            _0x3e10d2();
            break;
          }
        case "activity":
          break;
      }
    } catch (_0x26cd9a) {}
  };
  const _0x4c3612 = async (_0x4ae24c, _0x2c972e) => {
    try {
      switch (_0x4ae24c) {
        case "team":
          {
            const {
              refreshTeamInfo: _0x221e3f
            } = await Promise.resolve().then(function () {
              {
                return _0x4f85f2;
              }
            });
            const _0x43a616 = {
              silent: true
            };
            await _0x221e3f(_0x43a616);
            break;
          }
        case "daily-status":
          {
            const _0x1569b0 = window.ROLE?.["dailyTask"]?.["complete"] && _0x196041(window.ROLE.dailyTask.complete);
            if (_0x1569b0) {
              _0x621a8a(window.ROLE.dailyTask);
            } else {
              {
                const {
                  refreshRoleInfo: _0xe7da5d
                } = await Promise.resolve().then(function () {
                  return _0x42d1c6;
                });
                const _0x4546b4 = await _0xe7da5d();
                _0x621a8a(_0x4546b4?.["dailyTask"]);
              }
            }
            break;
          }
        case "hangup":
          {
            {
              if (window.ROLE?.["hangUp"]) {
                {
                  _0x1d1b31(window.ROLE);
                }
              } else {
                const _0x3e812e = await _0x361aec("role_getroleinfo", {});
                const _0xb82537 = _0x3e812e?.["role"] || _0x3e812e;
                _0x1d1b31(_0xb82537);
              }
              break;
            }
          }
        case "bottle":
          {
            if (window.ROLE?.["bottle"]) {
              _0xc37c37(window.ROLE);
            } else {
              {
                const _0x5cf9a1 = await _0x361aec("role_getroleinfo", {});
                const _0x2ee92a = _0x5cf9a1?.["role"] || _0x5cf9a1;
                _0xc37c37(_0x2ee92a);
              }
            }
            break;
          }
        case "tower":
          {
            {
              try {
                await _0x361aec("tower_getinfo", {}, "爬塔-获取信息");
              } catch (_0x11d8ef) {}
              _0x5c8702();
              break;
            }
          }
        case "daily-fix":
          break;
        case "club-info":
          {
            const {
              fetchClubInfo: _0x3a9924
            } = await Promise.resolve().then(function () {
              return _0x1557b9;
            });
            await _0x3a9924();
            break;
          }
        case "car":
          {
            const {
              fetchCarInfo: _0x4827c3
            } = await Promise.resolve().then(function () {
              return _0x3e1073;
            });
            await _0x4827c3();
            break;
          }
        case "box":
        case "fish":
          {
            {
              if (window.ROLE?.["items"]) {
                {
                  _0x386da5.items = window.ROLE.items;
                  _0xe12aee(window.ROLE.items, "toolbox");
                  _0x15dd6a();
                }
              }
              _0xd3734a(document.getElementById("page-toolbox") || document);
              break;
            }
          }
        case "quench":
          {
            {
              window.ROLE?.["items"] && (_0x386da5.items = window.ROLE.items, _0xe12aee(window.ROLE.items, "jade"));
              _0xd3734a(document.getElementById("page-toolbox") || document);
              break;
            }
          }
        case "arena":
        case "hero-upgrade":
        case "star-upgrade":
          break;
        case "monthly":
          {
            {
              const _0x1b0f87 = await _0x4b665e();
              if (_0x1b0f87) {
                _0xbe257b();
              }
              break;
            }
          }
        case "boss-tower":
          {
            await _0x1ab5a0();
            _0x596d3d();
            break;
          }
        case "warguess":
          _0x43e07c();
          break;
        case "consumption":
          {
            {
              const {
                fetchConsumptionData: _0x24e923
              } = await Promise.resolve().then(function () {
                return _0x2fd5bd;
              });
              await _0x24e923();
              break;
            }
          }
        case "skin-tower":
          {
            {
              const {
                fetchSkinTowersInfo: _0x4f3c72
              } = await Promise.resolve().then(function () {
                return _0x50fc5b;
              });
              await _0x4f3c72();
              break;
            }
          }
        case "weird-tower":
          {
            const {
              checkBlackMarketWeek: _0x56fe56,
              updateWeirdTowerAvailability: _0x42b6cb,
              refreshWeirdTowerInfo: _0xf71de4
            } = await Promise.resolve().then(function () {
              {
                return _0x1b5753;
              }
            });
            const _0x56640d = await _0x56fe56();
            _0x42b6cb(_0x56640d);
            _0x56640d && (await _0xf71de4());
            break;
          }
        case "dream":
          {
            {
              const {
                initDreamModule: _0xbf1ae3
              } = await Promise.resolve().then(function () {
                {
                  return _0xc96279;
                }
              });
              _0xbf1ae3();
              break;
            }
          }
      }
      _0x2c972e.dataset.loaded = "1";
    } catch (_0x4f0667) {}
  };
  const _0x12eccd = () => {
    _0x356af1();
    const _0x30e094 = localStorage.getItem(_0x3263b1);
    if (_0x30e094) {
      _0x386da5.theme = _0x30e094;
    }
    const _0x5a9e96 = localStorage.getItem(_0x344633);
    if (_0x5a9e96) {
      {
        _0x386da5.menuCollapsed = _0x5a9e96 === "true";
      }
    } else {
      window.innerWidth <= 768 && (_0x386da5.menuCollapsed = true);
    }
    _0x3b219a();
    setTimeout(() => {
      {
        _0x145b5f().catch(() => {});
      }
    }, 2000);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x12eccd);
  } else {
    {
      _0x12eccd();
    }
  }
  const _0x6195cf = _0x1d09da => {
    {
      if (!_0x1d09da) {
        return;
      }
      let _0x815c1d = null;
      let _0xf83f57 = null;
      let _0x3c9428 = false;
      const _0x5212d4 = _0x1a0525 => {
        {
          if (!_0x3c9428 || !_0x815c1d) {
            return;
          }
          _0x1a0525.preventDefault();
          const _0x364577 = _0x1a0525.type.startsWith("touch");
          const _0x4b004b = _0x364577 ? _0x1a0525.touches[0].clientY : _0x1a0525.clientY;
          const _0x4cb964 = _0x3e8296(_0x1d09da, _0x4b004b);
          _0x4cb964 == null ? _0x1d09da.appendChild(_0x815c1d) : _0x1d09da.insertBefore(_0x815c1d, _0x4cb964);
        }
      };
      const _0x116aa6 = () => {
        clearTimeout(_0xf83f57);
        _0x3c9428 && _0x815c1d && (_0x815c1d.classList.remove("dragging"), _0x815c1d.style.opacity = "", _0x5d8b5d(_0x1d09da));
        _0x3c9428 = false;
        _0x815c1d = null;
        document.removeEventListener("mousemove", _0x5212d4);
        document.removeEventListener("mouseup", _0x116aa6);
        document.removeEventListener("touchmove", _0x5212d4);
        document.removeEventListener("touchend", _0x116aa6);
      };
      const _0xa20f49 = _0x1d09da.querySelectorAll(".card[data-collapsible]");
      _0xa20f49.forEach(_0x194ffc => {
        {
          const _0x23e058 = _0x4f127e => {
            {
              const _0x3d3d24 = _0x4f127e.type.startsWith("touch");
              const _0x10339c = _0x3d3d24 ? _0x4f127e.touches[0].target : _0x4f127e.target;
              if (!_0x10339c.closest(".card-title")) {
                return;
              }
              _0xf83f57 = setTimeout(() => {
                _0x3c9428 = true;
                _0x815c1d = _0x194ffc;
                _0x194ffc.classList.add("dragging");
                _0x194ffc.style.opacity = "0.5";
                document.addEventListener("mousemove", _0x5212d4);
                document.addEventListener("mouseup", _0x116aa6);
                const _0x4271d4 = {
                  passive: false
                };
                document.addEventListener("touchmove", _0x5212d4, _0x4271d4);
                document.addEventListener("touchend", _0x116aa6);
              }, 1000);
            }
          };
          const _0x1f5d00 = () => clearTimeout(_0xf83f57);
          _0x194ffc.addEventListener("mousedown", _0x23e058);
          const _0x3b4bd1 = {
            passive: true
          };
          _0x194ffc.addEventListener("touchstart", _0x23e058, _0x3b4bd1);
          _0x194ffc.addEventListener("mouseup", _0x1f5d00);
          _0x194ffc.addEventListener("touchend", _0x1f5d00);
          _0x194ffc.addEventListener("mouseleave", _0x1f5d00);
        }
      });
    }
  };
  const _0x3e8296 = (_0x7fd522, _0x518508) => {
    {
      const _0x52eafc = [..._0x7fd522.querySelectorAll(".card[data-collapsible]:not(.dragging)")];
      const _0x16bf91 = {
        offset: Number.NEGATIVE_INFINITY
      };
      return _0x52eafc.reduce((_0x2e92eb, _0x59f399) => {
        const _0x3434cb = _0x59f399.getBoundingClientRect();
        const _0x18f671 = _0x518508 - _0x3434cb.top - _0x3434cb.height / 2;
        if (_0x18f671 < 0 && _0x18f671 > _0x2e92eb.offset) {
          {
            const _0x209634 = {
              offset: _0x18f671,
              element: _0x59f399
            };
            return _0x209634;
          }
        } else {
          {
            return _0x2e92eb;
          }
        }
      }, _0x16bf91).element;
    }
  };
  const _0x5d8b5d = _0x342c45 => {
    {
      const _0x3f069e = [..._0x342c45.querySelectorAll(".card[data-collapsible]")];
      const _0xc7e10b = _0x3f069e.map(_0x4b9d01 => {
        const _0x425267 = _0x4b9d01.querySelector(".card-title")?.["textContent"]?.["trim"]();
        return _0x425267;
      }).filter(Boolean);
      const _0x48e60b = _0x342c45.id?.["replace"]("page-", "");
      if (_0x48e60b) {
        const _0x2794cd = "qa-card-order-" + _0x48e60b;
        localStorage.setItem(_0x2794cd, JSON.stringify(_0xc7e10b));
      }
    }
  };
  const _0x391ee5 = _0x20127e => {
    if (!_0x20127e) {
      return;
    }
    const _0x35e2b3 = _0x20127e.id?.["replace"]("page-", "");
    if (!_0x35e2b3) {
      return;
    }
    const _0x1b04d7 = "qa-card-order-" + _0x35e2b3;
    const _0x1178b4 = localStorage.getItem(_0x1b04d7);
    if (_0x1178b4) {
      {
        try {
          const _0x22f71d = JSON.parse(_0x1178b4);
          const _0x50da76 = [..._0x20127e.querySelectorAll(".card[data-collapsible]")];
          _0x22f71d.forEach((_0xa99b6e, _0x5af066) => {
            const _0x6c52de = _0x50da76.find(_0x1058ac => _0x1058ac.querySelector(".card-title")?.["textContent"]?.["trim"]() === _0xa99b6e);
            _0x6c52de && _0x20127e.appendChild(_0x6c52de);
          });
        } catch (_0x42ff70) {
          _0x1ddb84("Failed to load card order: " + _0x42ff70.message, "error");
        }
      }
    }
    _0x235b81(_0x20127e, _0x35e2b3);
  };
  const _0x235b81 = (_0x151a05, _0x2ccc0c) => {
    if (_0x2ccc0c === "rank" || _0x2ccc0c === "spar") {
      return;
    }
    const _0x1bfdf2 = _0x151a05.querySelectorAll(".card[data-collapsible]");
    _0x1bfdf2.forEach(_0x5e8158 => {
      {
        !_0x5e8158.classList.contains("collapsed") && _0x5e8158.classList.add("collapsed");
      }
    });
  };
  const _0xdb15da = {
    __proto__: null,
    initCardReordering: _0x6195cf,
    loadCardOrder: _0x391ee5
  };
  var _0x2a6285 = Object.freeze(_0xdb15da);
})();