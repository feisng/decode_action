//Wed Dec 31 2025 01:33:18 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x4e19dc = () => ({
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
  let _0x3b7778 = null;
  const _0x1e70cb = () => {
    _0x3b7778 = _0x4e19dc();
  };
  const _0x47bea7 = "http://14.103.234.187/api";
  const _0x4ac0d6 = "qa_auth_token";
  const _0x47d6e1 = "qa-theme";
  const _0x1f16b = "qa-menu-collapsed";
  const _0x5acf8f = "qa-daily-settings";
  const _0xbd56ba = "https://assets.xyzw.dkon.cn";
  const _0x1892e0 = "https://xyzw.dkon.cn/scripts";
  const _0x45f1ef = "2.2.1";
  const _0x5a5436 = {
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
  const _0x4ec554 = {
    name: "司马懿",
    type: "魏国",
    avatar: "/team/simayi.png"
  };
  const _0x383c5d = {
    name: "郭嘉",
    type: "魏国",
    avatar: "/team/guojia.png"
  };
  const _0x1f7d67 = {
    name: "关羽",
    type: "蜀国",
    avatar: "/team/guanyu.png"
  };
  const _0x4207be = {
    name: "诸葛亮",
    type: "蜀国",
    avatar: "/team/zhugeliang.png"
  };
  const _0x5f1c2e = {
    name: "周瑜",
    type: "吴国",
    avatar: "/team/zhouyu.png"
  };
  const _0xf91c6 = {
    name: "太史慈",
    type: "吴国",
    avatar: "/team/taishici.png"
  };
  const _0x2c9ddb = {
    name: "吕布",
    type: "群雄",
    avatar: "/team/lvbu.png"
  };
  const _0x35b69e = {
    name: "华佗",
    type: "群雄",
    avatar: "/team/huatuo.png"
  };
  const _0x33fcbc = {
    name: "甄姬",
    type: "魏国",
    avatar: "/team/zhenji.png"
  };
  const _0x49fa79 = {
    name: "黄月英",
    type: "蜀国",
    avatar: "/team/huangyueying.png"
  };
  const _0x3e6cfc = {
    name: "孙策",
    type: "吴国",
    avatar: "/team/sunce.png"
  };
  const _0x4f3d49 = {
    name: "贾诩",
    type: "群雄",
    avatar: "/team/jiaxu.png"
  };
  const _0x1b0f63 = {
    name: "曹仁",
    type: "魏国",
    avatar: "/team/caoren.png"
  };
  const _0x391f98 = {
    name: "姜维",
    type: "蜀国",
    avatar: "/team/jiangwei.png"
  };
  const _0x4dfc9d = {
    name: "孙坚",
    type: "吴国",
    avatar: "/team/sunjian.png"
  };
  const _0x211c32 = {
    name: "公孙瓒",
    type: "群雄",
    avatar: "/team/gongsunzan.png"
  };
  const _0x2a5e16 = {
    name: "典韦",
    type: "魏国",
    avatar: "/team/dianwei.png"
  };
  const _0x859a9d = {
    name: "赵云",
    type: "蜀国",
    avatar: "/team/zhaoyun.png"
  };
  const _0xd01df9 = {
    name: "大乔",
    type: "吴国",
    avatar: "/team/daqiao.png"
  };
  const _0x563615 = {
    name: "张角",
    type: "群雄",
    avatar: "/team/zhangjiao.png"
  };
  const _0x18b1de = {
    name: "徐晃",
    type: "魏国",
    avatar: "/team/xuhuang.png"
  };
  const _0x2a2929 = {
    name: "荀彧",
    type: "魏国",
    avatar: "/team/xunyu.png"
  };
  const _0x3a562d = {
    name: "小典韦",
    type: "魏国",
    avatar: "/team/xiaodianwei.png"
  };
  const _0x4722f4 = {
    name: "张飞",
    type: "蜀国",
    avatar: "/team/zhangfei.png"
  };
  const _0x2b452b = {
    name: "小赵云",
    type: "蜀国",
    avatar: "/team/xiaozhaoyun.png"
  };
  const _0x4bfd5c = {
    name: "庞统",
    type: "蜀国",
    avatar: "/team/pangtong.png"
  };
  const _0xd5914e = {
    name: "鲁肃",
    type: "吴国",
    avatar: "/team/lusu.png"
  };
  const _0x988f03 = {
    name: "陆逊",
    type: "吴国",
    avatar: "/team/luxun.png"
  };
  const _0x2e49b2 = {
    name: "甘宁",
    type: "吴国",
    avatar: "/team/ganning.png"
  };
  const _0x44d203 = {
    name: "貂蝉",
    type: "群雄",
    avatar: "/team/diaochan.png"
  };
  const _0x2a1c7f = {
    name: "董卓",
    type: "群雄",
    avatar: "/team/dongzhuo.png"
  };
  const _0x5c7b0b = {
    name: "小张角",
    type: "群雄",
    avatar: "/team/xiaozhangjiao.png"
  };
  const _0x45718c = {
    name: "张辽",
    type: "魏国",
    avatar: "/team/zhangliao.png"
  };
  const _0xca2ff0 = {
    name: "夏侯惇",
    type: "魏国",
    avatar: "/team/xiahoudun.png"
  };
  const _0x393cd8 = {
    name: "许褚",
    type: "魏国",
    avatar: "/team/xuzhu.png"
  };
  const _0x5655b3 = {
    name: "夏侯渊",
    type: "魏国",
    avatar: "/team/xiahouyuan.png"
  };
  const _0xf4e833 = {
    name: "魏延",
    type: "蜀国",
    avatar: "/team/weiyan.png"
  };
  const _0x2e63d9 = {
    name: "黄忠",
    type: "蜀国",
    avatar: "/team/huangzhong.png"
  };
  const _0x5ea479 = {
    name: "马超",
    type: "蜀国",
    avatar: "/team/machao.png"
  };
  const _0x56ae27 = {
    name: "马岱",
    type: "蜀国",
    avatar: "/team/madai.png"
  };
  const _0x4b212e = {
    name: "吕蒙",
    type: "吴国",
    avatar: "/team/lvmeng.png"
  };
  const _0x4cc0b8 = {
    name: "黄盖",
    type: "吴国",
    avatar: "/team/huanggai.png"
  };
  const _0x2f9eb2 = {
    name: "蔡文姬",
    type: "魏国",
    avatar: "/team/caiwenji.png"
  };
  const _0x31d04c = {
    name: "小乔",
    type: "吴国",
    avatar: "/team/xiaoqiao.png"
  };
  const _0x309b56 = {
    name: "袁绍",
    type: "群雄",
    avatar: "/team/yuanshao.png"
  };
  const _0x5caa50 = {
    name: "华雄",
    type: "群雄",
    avatar: "/team/huaxiong.png"
  };
  const _0x2ea330 = {
    name: "颜良",
    type: "群雄",
    avatar: "/team/yanliang.png"
  };
  const _0x56999f = {
    name: "文丑",
    type: "群雄",
    avatar: "/team/wenchou.png"
  };
  const _0x18fcc3 = {
    name: "周泰",
    type: "吴国",
    avatar: "/team/zhoutai.png"
  };
  const _0x293175 = {
    name: "许攸",
    type: "魏国",
    avatar: "/team/xuyou.png"
  };
  const _0x5131e5 = {
    name: "于禁",
    type: "魏国",
    avatar: "/team/yujin.png"
  };
  const _0xbe8944 = {
    name: "张星彩",
    type: "蜀国",
    avatar: "/team/zhangxingcai.png"
  };
  const _0x3996bf = {
    name: "关银屏",
    type: "蜀国",
    avatar: "/team/guanyinping.png"
  };
  const _0x542f0f = {
    name: "关平",
    type: "蜀国",
    avatar: "/team/guanping.png"
  };
  const _0x2b1b27 = {
    name: "程普",
    type: "吴国",
    avatar: "/team/chengpu.png"
  };
  const _0x2f801b = {
    name: "张昭",
    type: "吴国",
    avatar: "/team/zhangzhao.png"
  };
  const _0x2c3f15 = {
    name: "陆绩",
    type: "吴国",
    avatar: "/team/luji.png"
  };
  const _0xc52b4c = {
    name: "吕玲绮",
    type: "群雄",
    avatar: "/team/lvlingqi.png"
  };
  const _0x2d0b1c = {
    name: "潘凤",
    type: "群雄",
    avatar: "/team/panfeng.png"
  };
  const _0x59bffc = {
    name: "邢道荣",
    type: "群雄",
    avatar: "/team/xingdaorong.png"
  };
  const _0x2b8827 = {
    name: "祝融夫人",
    type: "群雄",
    avatar: "/team/zhurongfuren.png"
  };
  const _0x1983c9 = {
    name: "孟获",
    type: "群雄",
    avatar: "/team/menghuo.png"
  };
  const _0x5a3537 = {
    "101": _0x4ec554,
    "102": _0x383c5d,
    "103": _0x1f7d67,
    "104": _0x4207be,
    "105": _0x5f1c2e,
    "106": _0xf91c6,
    "107": _0x2c9ddb,
    "108": _0x35b69e,
    "109": _0x33fcbc,
    "110": _0x49fa79,
    "111": _0x3e6cfc,
    "112": _0x4f3d49,
    "113": _0x1b0f63,
    "114": _0x391f98,
    "115": _0x4dfc9d,
    "116": _0x211c32,
    "117": _0x2a5e16,
    "118": _0x859a9d,
    "119": _0xd01df9,
    "120": _0x563615,
    "201": _0x18b1de,
    "202": _0x2a2929,
    "203": _0x3a562d,
    "204": _0x4722f4,
    "205": _0x2b452b,
    "206": _0x4bfd5c,
    "207": _0xd5914e,
    "208": _0x988f03,
    "209": _0x2e49b2,
    "210": _0x44d203,
    "211": _0x2a1c7f,
    "212": _0x5c7b0b,
    "213": _0x45718c,
    "214": _0xca2ff0,
    "215": _0x393cd8,
    "216": _0x5655b3,
    "217": _0xf4e833,
    "218": _0x2e63d9,
    "219": _0x5ea479,
    "220": _0x56ae27,
    "221": _0x4b212e,
    "222": _0x4cc0b8,
    "223": _0x2f9eb2,
    "224": _0x31d04c,
    "225": _0x309b56,
    "226": _0x5caa50,
    "227": _0x2ea330,
    "228": _0x56999f,
    "301": _0x18fcc3,
    "302": _0x293175,
    "303": _0x5131e5,
    "304": _0xbe8944,
    "305": _0x3996bf,
    "306": _0x542f0f,
    "307": _0x2b1b27,
    "308": _0x2f801b,
    "309": _0x2c3f15,
    "310": _0xc52b4c,
    "311": _0x2d0b1c,
    "312": _0x59bffc,
    "313": _0x2b8827,
    "314": _0x1983c9
  };
  const _0x18ef91 = {
    "1": "#8e8e93",
    "2": "#34c759",
    "3": "#007aff",
    "4": "#af52de",
    "5": "#ff9500",
    "6": "#ff3b30"
  };
  const _0x572c83 = {
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
  const _0x26da2d = () => "\n  .qa-root {\n    --qa-accent: #2f80ed;\n    --qa-accent-hover: #1a6dd6;\n    --qa-accent-weak: #e8f0fe;\n    --qa-text-1: #1f2937;\n    --qa-text-2: #6b7280;\n    --qa-text-3: #9ca3af;\n    --qa-bg-1: #ffffff;\n    --qa-bg-2: #f7f8fa;\n    --qa-bg-3: #f0f1f3;\n    --qa-border: #e5e7eb;\n    --qa-shadow-1: 0 8px 24px rgba(0,0,0,0.12);\n    --qa-shadow-2: 0 2px 8px rgba(0,0,0,0.08);\n    --qa-radius-lg: 16px;\n    --qa-radius-md: 12px;\n    --qa-radius-sm: 8px;\n    --qa-orb-size: 36px;\n    --qa-panel-width: 92vw;\n    --qa-panel-height: 70vh;\n    --qa-menu-width: 130px;\n    --qa-ease: cubic-bezier(0.22, 1, 0.36, 1);\n    --qa-dur-fast: 160ms;\n    --qa-dur-normal: 260ms;\n    font-family: -apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"Segoe UI\", sans-serif;\n    font-size: 13px;\n    color: var(--qa-text-1);\n  }\n  .qa-root[data-theme=\"dark\"] {\n    --qa-accent: #3b8ff6;\n    --qa-accent-hover: #5ca0f8;\n    --qa-accent-weak: #1e3a5f;\n    --qa-text-1: #f9fafb;\n    --qa-text-2: #d1d5db;\n    --qa-text-3: #9ca3af;\n    --qa-bg-1: #1f2937;\n    --qa-bg-2: #111827;\n    --qa-bg-3: #0d1117;\n    --qa-border: #374151;\n    --qa-shadow-1: 0 8px 24px rgba(0,0,0,0.4);\n    --qa-shadow-2: 0 2px 8px rgba(0,0,0,0.3);\n  }\n  .qa-root, .qa-root * { box-sizing: border-box; }\n  .qa-root {\n    position: fixed;\n    inset: 0;\n    pointer-events: none !important;\n    z-index: 99997;\n  }\n  .qa-root .floating-orb,\n  .qa-root .panel-shell,\n  .qa-root .car-reward-popup,\n  .qa-root .car-helper-modal,\n  .qa-root .qa-auth-overlay,\n  .qa-root .qa-autocomplete-dropdown,\n  .calendar-popup.qa-root { pointer-events: auto !important; }\n\n  .qa-root .floating-orb {\n    position: fixed;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: var(--qa-orb-size);\n    height: var(--qa-orb-size);\n    border-radius: 50%;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    box-shadow: var(--qa-shadow-2), 0 0 12px rgba(47, 128, 237, 0.3);\n    cursor: grab;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 99999;\n    transition: box-shadow var(--qa-dur-fast) var(--qa-ease);\n    user-select: none;\n    touch-action: none;\n  }\n  .qa-root .floating-orb:active { cursor: grabbing; }\n  .qa-root .floating-orb.dragging {\n    cursor: grabbing;\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(47, 128, 237, 0.5);\n  }\n  .qa-root .floating-orb:hover {\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(47, 128, 237, 0.5);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb {\n    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);\n    box-shadow: var(--qa-shadow-2), 0 0 12px rgba(0, 0, 0, 0.5);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb:hover {\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(50, 50, 50, 0.6);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb.dragging {\n    box-shadow: var(--qa-shadow-1), 0 0 24px rgba(50, 50, 50, 0.6);\n  }\n  .qa-root .orb-icon {\n    width: 22px;\n    height: 22px;\n    fill: #fff;\n    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));\n  }\n\n  .qa-root .panel-shell {\n    position: fixed;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    width: min(100vw - 8%, var(--qa-panel-width));\n    height: 70vh;\n    max-height: 70vh;\n    background: var(--qa-bg-1);\n    border-radius: var(--qa-radius-lg);\n    box-shadow: var(--qa-shadow-1);\n    overflow: hidden;\n    display: none;\n    flex-direction: column;\n    z-index: 99998;\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .panel-shell.show { display: flex; }\n\n  /* 顶部导航布局 */\n  .qa-root .panel-header {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    position: relative;\n    padding: 0 8px;\n  }\n  /* 去除折叠按钮样式 */\n  .qa-root .menu-toggle {\n    display: none !important;\n  }\n\n  /* ===================== 认证状态 ===================== */\n  .qa-root .auth-status {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    font-size: 12px;\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .auth-status.success {\n    background: var(--qa-accent-weak);\n    border-bottom-color: var(--qa-accent);\n  }\n  .qa-root .auth-status.error {\n    background: rgba(255, 59, 48, 0.1);\n    border-bottom-color: #ff3b30;\n  }\n  .qa-root .auth-status-icon {\n    font-size: 14px;\n    width: 20px;\n    text-align: center;\n  }\n  .qa-root .auth-status-text {\n    flex: 1;\n    color: var(--qa-text-2);\n  }\n  .qa-root .auth-status.success .auth-status-text {\n    color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .auth-status.error .auth-status-text {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n  .qa-root .auth-status-actions {\n    display: flex;\n    gap: 6px;\n  }\n  .qa-root .auth-status .btn-small {\n    padding: 4px 8px;\n    font-size: 11px;\n    border-radius: 6px;\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-2);\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-status .btn-small:hover {\n    background: var(--qa-bg-3);\n  }\n  .qa-root .auth-status .btn-danger {\n    border-color: #ff3b30;\n    color: #ff3b30;\n  }\n  .qa-root .auth-status .btn-danger:hover {\n    background: rgba(255, 59, 48, 0.1);\n  }\n\n  /* 简化的认证状态指示器 */\n  .qa-root .auth-status {\n    margin-left: auto;\n    padding: 6px 10px;\n    border-radius: 6px;\n    font-size: 12px;\n    cursor: default;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .qa-root .auth-status .status-dot {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #9ca3af;\n    flex-shrink: 0;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-status .status-text {\n    color: var(--qa-text-2);\n    white-space: nowrap;\n  }\n\n  /* 不同状态的样式 */\n  .qa-root .auth-status.auth-valid .status-dot {\n    background: #18a058;\n    box-shadow: 0 0 6px rgba(24, 160, 88, 0.4);\n  }\n  .qa-root .auth-status.auth-valid .status-text {\n    color: #18a058;\n    font-weight: 500;\n  }\n\n  .qa-root .auth-status.auth-invalid .status-dot {\n    background: #f0a020;\n  }\n  .qa-root .auth-status.auth-invalid .status-text {\n    color: #f0a020;\n  }\n\n  .qa-root .auth-status.auth-frozen .status-dot {\n    background: #ff3b30;\n    box-shadow: 0 0 6px rgba(255, 59, 48, 0.4);\n  }\n  .qa-root .auth-status.auth-frozen .status-text {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n\n  .qa-root .auth-status.auth-unauthenticated .status-dot {\n    background: #9ca3af;\n  }\n  .qa-root .auth-status.auth-unauthenticated .status-text {\n    color: var(--qa-text-3);\n  }\n\n  /* 认证调试窗口 */\n  .qa-root .auth-debug-window {\n    position: fixed;\n    top: 80px;\n    right: 20px;\n    width: 380px;\n    max-height: 70vh;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n    box-shadow: var(--qa-shadow-1);\n    z-index: 99999;\n    display: none;\n    overflow: hidden;\n    font-size: 12px;\n  }\n  .qa-root .auth-debug-window .debug-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 16px;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-title {\n    color: var(--qa-text-1);\n    font-size: 13px;\n  }\n  .qa-root .auth-debug-window .debug-close {\n    background: none;\n    border: none;\n    color: var(--qa-text-2);\n    font-size: 20px;\n    cursor: pointer;\n    padding: 0;\n    width: 24px;\n    height: 24px;\n    line-height: 24px;\n    text-align: center;\n    border-radius: 4px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-debug-window .debug-close:hover {\n    background: var(--qa-bg-3);\n    color: var(--qa-text-1);\n  }\n  .qa-root .auth-debug-window .debug-content {\n    padding: 16px;\n    overflow-y: auto;\n    max-height: calc(70vh - 50px);\n  }\n  .qa-root .auth-debug-window .debug-section {\n    margin-bottom: 16px;\n  }\n  .qa-root .auth-debug-window .debug-section:last-child {\n    margin-bottom: 0;\n  }\n  .qa-root .auth-debug-window .debug-section-title {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n    margin-bottom: 8px;\n    padding-bottom: 4px;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .auth-debug-window .debug-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 6px 0;\n    gap: 12px;\n  }\n  .qa-root .auth-debug-window .debug-label {\n    color: var(--qa-text-2);\n    font-size: 12px;\n    flex-shrink: 0;\n  }\n  .qa-root .auth-debug-window .debug-value {\n    color: var(--qa-text-1);\n    font-size: 12px;\n    text-align: right;\n    word-break: break-all;\n    max-width: 60%;\n  }\n  .qa-root .auth-debug-window .debug-value.monospace {\n    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;\n    font-size: 11px;\n  }\n  .qa-root .auth-debug-window .debug-value.status-frozen {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-value.status-valid {\n    color: #18a058;\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-value.status-invalid {\n    color: #f0a020;\n  }\n\n  .qa-root .menu-nav {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    flex: 1;\n    background: var(--qa-bg-2);\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n    /* 隐藏滚动条 */\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    padding: 0 4px;\n    /* 启用原生水平滚动 */\n    touch-action: pan-x;\n    -webkit-overflow-scrolling: touch;\n    cursor: grab;\n  }\n  .qa-root .menu-nav.dragging {\n    cursor: grabbing;\n    user-select: none;\n  }\n  .qa-root .menu-nav::-webkit-scrollbar {\n    display: none !important;\n    height: 0 !important;\n  }\n  .qa-root .menu-nav.collapsed {\n    width: 0 !important;\n    overflow: hidden;\n    border-bottom: none;\n  }\n\n  .qa-root .menu-group {\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n    flex-shrink: 0;\n    border-right: none;\n  }\n  .qa-root .menu-group-title {\n    display: none;\n  }\n  .qa-root .menu-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 12px 14px;\n    cursor: pointer;\n    color: var(--qa-text-2);\n    font-size: 14px;\n    font-weight: 500;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    flex-shrink: 0;\n    margin: 4px 2px;\n    border-radius: 8px;\n  }\n  .qa-root .menu-item:hover { background: var(--qa-bg-3); color: var(--qa-text-1); }\n  .qa-root .menu-item.active {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-bottom-color: var(--qa-accent);\n    font-weight: 600;\n  }\n  .qa-root .menu-icon { font-size: 18px; }\n\n  .qa-root .content-wrapper { flex: 1; display: flex; flex-direction: column; overflow: hidden; }\n  .qa-root .content-area { flex: 1; padding: 14px; overflow-y: auto; background: var(--qa-bg-1); }\n\n  .qa-root .page-content { display: none; }\n  .qa-root .page-content.active { display: block; }\n\n  .qa-root .card {\n    background: var(--qa-bg-2);\n    border-radius: var(--qa-radius-md);\n    overflow: hidden;\n    margin-bottom: 12px;\n  }\n  .qa-root .card-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 14px;\n    border-bottom: 1px solid var(--qa-border);\n    cursor: pointer;\n    user-select: none;\n  }\n  .qa-root .card-header:hover { background: var(--qa-bg-3); }\n  .qa-root .card-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  .qa-root .card-title::before {\n    content: '';\n    width: 4px;\n    height: 16px;\n    background: var(--qa-accent);\n    border-radius: 2px;\n  }\n  .qa-root .card-collapse-icon {\n    width: 16px;\n    height: 16px;\n    fill: var(--qa-text-3);\n    transition: transform var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .card.collapsed .card-collapse-icon { transform: rotate(-90deg); }\n  .qa-root .card.collapsed .card-body, .qa-root .card.collapsed .card-footer { display: none; }\n\n  /* 更新日志版本折叠 */\n  .qa-root .changelog-version .card-collapse-icon { transition: transform var(--qa-dur-fast) var(--qa-ease); }\n  .qa-root .changelog-version.collapsed .card-collapse-icon { transform: rotate(-90deg); }\n  .qa-root .changelog-version.collapsed .changelog-content { display: none; }\n\n  .qa-root .card-body { padding: 14px; }\n  .qa-root .card-footer { padding: 10px 14px 14px; display: flex; gap: 8px; flex-wrap: wrap; }\n\n  .qa-root .stats-row {\n    display: flex;\n    gap: 12px;\n    padding: 12px 14px;\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    margin-bottom: 12px;\n  }\n  .qa-root .stat-item { display: flex; align-items: center; gap: 6px; }\n  .qa-root .stat-label { font-size: 12px; color: var(--qa-text-3); }\n  .qa-root .stat-value { font-size: 15px; font-weight: 700; color: var(--qa-accent); }\n\n  .qa-root .progress-bar {\n    width: 100%;\n    height: 8px;\n    background: var(--qa-bg-3);\n    border-radius: 999px;\n    overflow: hidden;\n  }\n  .qa-root .progress-fill {\n    height: 100%;\n    background: linear-gradient(90deg, var(--qa-accent), #6366f1);\n    border-radius: 999px;\n  }\n\n  .qa-root .btn {\n    padding: 8px 14px;\n    border: none;\n    border-radius: var(--qa-radius-sm);\n    font-size: 13px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    font-family: inherit;\n  }\n  .qa-root .btn:disabled { opacity: 0.5; cursor: not-allowed; }\n  .qa-root .btn-primary { background: var(--qa-accent); color: #fff; }\n  .qa-root .btn-primary:hover:not(:disabled) { background: var(--qa-accent-hover); transform: translateY(-1px); }\n  .qa-root .btn-success { background: #10b981; color: #fff; }\n  .qa-root .btn-success:hover:not(:disabled) { background: #059669; }\n  .qa-root .btn-danger { background: #ef4444; color: #fff; }\n  .qa-root .btn-danger:hover:not(:disabled) { background: #dc2626; }\n  .qa-root .btn-warning { background: #f59e0b; color: #fff; }\n  .qa-root .btn-warning:hover:not(:disabled) { background: #d97706; }\n  .qa-root .btn-secondary { background: var(--qa-bg-3); color: var(--qa-text-2); }\n  .qa-root .btn-secondary:hover:not(:disabled) { background: var(--qa-border); }\n  .qa-root .btn-small { padding: 4px 10px; font-size: 11px; border-radius: 6px; }\n  .qa-root .btn-sm { padding: 4px 8px; font-size: 11px; border-radius: 6px; }\n  .qa-root .btn-row { display: flex; gap: 8px; flex-wrap: wrap; }\n\n  /* 换皮闯关BOSS网格 */\n  .qa-root .skin-towers-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 8px;\n  }\n  .qa-root .skin-tower-item {\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 8px;\n    text-align: center;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .skin-tower-item.passed { border-color: #22c55e; background: rgba(34,197,94,0.1); }\n  .qa-root .skin-tower-item.fighting { border-color: #eab308; background: rgba(234,179,8,0.1); animation: qa-pulse 1.5s ease-in-out infinite; }\n  .qa-root .skin-tower-item.disabled { opacity: 0.5; }\n  .qa-root .skin-tower-item .tower-name { font-weight: 600; font-size: 12px; color: var(--qa-accent); margin-bottom: 4px; }\n  .qa-root .skin-tower-item .tower-level { font-size: 14px; font-weight: 700; color: var(--qa-text-1); }\n  .qa-root .skin-tower-item .tower-score { font-size: 11px; color: var(--qa-text-3); margin: 4px 0; }\n  .qa-root .skin-tower-item .tower-status { font-size: 11px; margin-bottom: 6px; }\n  @keyframes qa-pulse { 0%,100%{opacity:1} 50%{opacity:0.7} }\n\n  .qa-root .input, .qa-root .select {\n    padding: 8px 12px;\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-1);\n    font-size: 13px;\n    outline: none;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    font-family: inherit;\n  }\n  .qa-root .input:focus, .qa-root .select:focus { border-color: var(--qa-accent); box-shadow: 0 0 0 3px var(--qa-accent-weak); }\n\n  .qa-root .form-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }\n  .qa-root .form-label { font-size: 12px; color: var(--qa-text-3); }\n  .qa-root .helper-text { font-size: 12px; color: var(--qa-text-3); margin-top: 8px; }\n  .qa-root .qa-input-error { font-size: 12px; color: #ef4444; margin-top: 6px; }\n  .qa-root .input.error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.15); }\n  .qa-root[data-theme=\"dark\"] .input.error { box-shadow: 0 0 0 3px rgba(239,68,68,0.20); }\n\n  .qa-root .qa-target-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .qa-target-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n    padding: 8px 10px;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n  }\n  .qa-root .qa-target-row .qa-target-attr { min-width: 140px; }\n  .qa-root .qa-target-row .qa-target-value { width: 90px; }\n\n  .qa-root .qa-option-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n  .qa-root .qa-option-item {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    border-radius: var(--qa-radius-md);\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    cursor: pointer;\n    user-select: none;\n    transition: transform var(--qa-dur-fast) var(--qa-ease), border-color var(--qa-dur-fast) var(--qa-ease), box-shadow var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-option-item:hover { border-color: var(--qa-accent); transform: translateY(-1px); }\n  .qa-root .qa-option-item.selected { border-color: var(--qa-accent); box-shadow: 0 0 0 3px var(--qa-accent-weak); }\n  .qa-root .qa-option-icon { width: 40px; height: 40px; display: grid; place-items: center; }\n  .qa-root .qa-option-icon svg { width: 40px; height: 40px; display: block; }\n  .qa-root .qa-option-icon .qa-option-img { width: 40px; height: 40px; object-fit: contain; display: block; image-rendering: auto; }\n  .qa-root .qa-option-title { font-weight: 700; color: var(--qa-text-1); }\n  .qa-root .qa-option-sub { font-size: 12px; color: var(--qa-text-3); margin-top: 2px; }\n\n  .qa-root .task-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }\n  .qa-root .task-check {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    color: var(--qa-text-2);\n    padding: 6px 8px;\n    border-radius: 8px;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .task-check input { accent-color: var(--qa-accent); }\n  .qa-root .task-check.done { background: rgba(16,185,129,0.14); color: #059669; }\n  .qa-root[data-theme=\"dark\"] .task-check.done { background: rgba(16,185,129,0.18); color: #34d399; }\n  .qa-root .task-check .task-status { margin-left: auto; font-size: 11px; color: var(--qa-text-3); }\n  .qa-root .task-check.done .task-status { color: inherit; }\n\n  /* 每日任务执行情况列表样式 */\n  .qa-root .task-list { display: flex; flex-direction: column; gap: 6px; }\n  .qa-root .task-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px 12px;\n    background: var(--qa-bg-3);\n    border-radius: 8px;\n    font-size: 13px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .task-item .task-name { color: var(--qa-text-1); font-weight: 500; }\n  .qa-root .task-item .task-progress { font-size: 12px; color: var(--qa-text-2); font-family: monospace; }\n  .qa-root .task-item.done {\n    background: rgba(16, 185, 129, 0.12);\n  }\n  .qa-root .task-item.done .task-name { color: #059669; }\n  .qa-root .task-item.done .task-progress { color: #059669; }\n  .qa-root[data-theme=\"dark\"] .task-item.done { background: rgba(16, 185, 129, 0.18); }\n  .qa-root[data-theme=\"dark\"] .task-item.done .task-name { color: #34d399; }\n  .qa-root[data-theme=\"dark\"] .task-item.done .task-progress { color: #34d399; }\n\n  .qa-root .qa-log {\n    font-size: 12px;\n    color: var(--qa-text-2);\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    white-space: pre-wrap;\n    min-height: 80px;\n  }\n\n  .qa-root .qa-json {\n    font-size: 12px;\n    color: var(--qa-text-1);\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    white-space: pre-wrap;\n    word-break: break-word;\n    overflow: auto;\n    max-height: 260px;\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n\n  .qa-root .qa-hero-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin-bottom: 12px;\n  }\n  .qa-root .qa-hero-item {\n    padding: 8px 14px;\n    background: var(--qa-bg-1);\n    border: 2px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 500;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    color: var(--qa-text-1);\n  }\n  .qa-root .qa-hero-item:hover {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-hero-item.active {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n  }\n\n  .qa-root .qa-equip-tabs { display: flex; gap: 8px; margin-bottom: 12px; }\n  .qa-root .qa-equip-tab {\n    flex: 1;\n    padding: 12px 10px;\n    background: var(--qa-bg-2);\n    border: 2px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n    cursor: pointer;\n    text-align: center;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-equip-tab:hover { border-color: var(--qa-text-3); }\n  .qa-root .qa-equip-tab.active {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-equip-tab .tab-name { font-weight: 600; font-size: 13px; color: var(--qa-text-1); }\n  .qa-root .qa-equip-tab .tab-level { font-size: 11px; color: var(--qa-text-3); margin-top: 3px; }\n  .qa-root .qa-equip-tab.active .tab-name { color: var(--qa-accent); }\n\n  .qa-root .qa-slot-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }\n  .qa-root .qa-slot-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 14px;\n    background: var(--qa-bg-1);\n    border-radius: var(--qa-radius-sm);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .qa-slot-item:hover { border-color: var(--qa-accent); }\n  .qa-root .qa-slot-item.locked { border-color: var(--qa-accent); background: var(--qa-accent-weak); }\n  .qa-root .qa-slot-label { font-weight: 600; color: var(--qa-text-2); font-size: 12px; width: 40px; }\n  .qa-root .qa-slot-checkbox { width: 16px; height: 16px; accent-color: var(--qa-accent); }\n  .qa-root .qa-slot-attr { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 13px; }\n  .qa-root .qa-slot-empty { color: var(--qa-text-3); font-size: 12px; }\n\n  .qa-root .qa-actions { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px; }\n  .qa-root .qa-count-display { font-size: 12px; color: var(--qa-text-2); margin-left: auto; display: flex; align-items: center; gap: 8px; }\n  .qa-root .qa-count-display strong { color: var(--qa-accent); font-size: 14px; }\n\n  .qa-root .qa-auto-section {\n    background: var(--qa-bg-2);\n    border-radius: var(--qa-radius-md);\n    padding: 12px;\n  }\n  .qa-root .qa-section-title { font-size: 13px; font-weight: 600; margin-bottom: 10px; color: var(--qa-text-1); }\n  .qa-root .qa-auto-form { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .qa-root .qa-form-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--qa-text-2); }\n  .qa-root .qa-form-label { font-size: 12px; color: var(--qa-text-2); }\n  .qa-root .qa-loading { font-size: 12px; color: var(--qa-text-3); text-align: center; padding: 6px 0; }\n\n  /* 俱乐部样式 */\n  .qa-root .club-status-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(156, 163, 175, 0.15);\n    color: var(--qa-text-3);\n  }\n  .qa-root .club-status-badge.active {\n    background: rgba(34, 197, 94, 0.15);\n    color: #22c55e;\n  }\n  .qa-root .club-overview { display: flex; flex-direction: column; gap: 12px; }\n  .qa-root .club-header-row { display: flex; align-items: center; gap: 12px; }\n  .qa-root .club-avatar { width: 48px; height: 48px; border-radius: 8px; overflow: hidden; background: var(--qa-bg-3); flex-shrink: 0; }\n  .qa-root .club-avatar img { width: 100%; height: 100%; object-fit: cover; }\n  .qa-root .club-meta { flex: 1; min-width: 0; }\n  .qa-root .club-name { font-size: 16px; font-weight: 600; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .club-sub { font-size: 12px; color: var(--qa-text-2); margin-top: 2px; }\n  .qa-root .club-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }\n  .qa-root .club-stat-item { background: var(--qa-bg-2); border-radius: 8px; padding: 8px; text-align: center; }\n  .qa-root .club-stat-item .stat-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 2px; }\n  .qa-root .club-stat-item .stat-value { font-size: 13px; font-weight: 600; color: var(--qa-text-1); }\n  .qa-root .club-announcement { background: var(--qa-bg-2); border-radius: 8px; padding: 10px; }\n  .qa-root .club-announcement .ann-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 4px; }\n  .qa-root .club-announcement .ann-text { font-size: 12px; color: var(--qa-text-1); white-space: pre-wrap; word-break: break-all; }\n  .qa-root .club-leader .leader-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 4px; }\n  .qa-root .club-leader .leader-info { display: flex; align-items: center; gap: 8px; }\n  .qa-root .club-leader .leader-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--qa-bg-3); }\n  .qa-root .club-members-section { margin-top: 12px; }\n  .qa-root .club-members-section .section-title { font-size: 13px; font-weight: 600; color: var(--qa-text-1); margin-bottom: 8px; }\n  .qa-root .club-members-list { display: flex; flex-direction: column; gap: 6px; max-height: 300px; overflow-y: auto; }\n  .qa-root .member-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: var(--qa-bg-2); border-radius: 8px; }\n  .qa-root .member-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }\n  .qa-root .member-avatar { width: 24px; height: 24px; border-radius: 50%; background: var(--qa-bg-3); flex-shrink: 0; }\n  .qa-root .member-name { font-size: 12px; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .member-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; font-size: 11px; }\n  .qa-root .member-power { color: var(--qa-text-2); font-variant-numeric: tabular-nums; }\n  .qa-root .member-red { color: #ef4444; }\n  .qa-root .member-job { padding: 2px 6px; border-radius: 4px; background: rgba(59, 130, 246, 0.1); color: #3b82f6; }\n  .qa-root .member-job.job-leader { background: rgba(239, 68, 68, 0.1); color: #ef4444; }\n  .qa-root .member-job.job-vice { background: rgba(236, 72, 153, 0.1); color: #ec4899; }\n\n  .qa-toast {\n    position: fixed;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(31, 41, 55, 0.9);\n    color: #fff;\n    padding: 10px 16px;\n    border-radius: 8px;\n    font-size: 13px;\n    z-index: 100000;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-toast.show { opacity: 1; pointer-events: auto; }\n  .qa-toast.success { background: rgba(16, 185, 129, 0.95); }\n  .qa-toast.error { background: rgba(239, 68, 68, 0.95); }\n  .qa-toast.warning { background: rgba(245, 158, 11, 0.95); }\n\n  .qa-auth-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(0,0,0,0.6);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 100001;\n    backdrop-filter: blur(6px);\n  }\n  .qa-auth-modal {\n    background: #fff;\n    border-radius: 14px;\n    padding: 24px;\n    width: 320px;\n    text-align: center;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n  }\n  .qa-auth-title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }\n  .qa-auth-desc { font-size: 13px; color: #6b7280; margin-bottom: 16px; }\n  .qa-auth-input {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #e5e7eb;\n    border-radius: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .qa-auth-error { font-size: 12px; color: #ef4444; margin-bottom: 12px; display: none; }\n\n  .qa-root .qa-watermark {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    z-index: 1;\n    overflow: hidden;\n  }\n  .qa-root .qa-watermark-pattern {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-wrap: wrap;\n    transform: rotate(-30deg);\n  }\n  .qa-root .qa-watermark-item {\n    padding: 30px 50px;\n    font-size: 14px;\n    font-weight: 600;\n    color: rgba(0,0,0,0.04);\n    white-space: nowrap;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-watermark-item { color: rgba(255,255,255,0.08); }\n\n  /* 阵容选择器和展示样式 */\n  .qa-root .team-selector {\n    display: flex;\n    gap: 4px;\n  }\n  .qa-root .team-btn {\n    width: 28px;\n    height: 28px;\n    border: none;\n    border-radius: 50%;\n    background: var(--qa-bg-3);\n    color: var(--qa-text-2);\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .team-btn:hover { background: var(--qa-border); }\n  .qa-root .team-btn.active {\n    background: var(--qa-accent);\n    color: #fff;\n  }\n  .qa-root .team-btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .qa-root .team-heroes-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    min-height: 60px;\n    align-items: center;\n  }\n  .qa-root .team-hero-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    min-width: 52px;\n  }\n  .qa-root .team-hero-circle {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    background: var(--qa-bg-1);\n    border: 2px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .team-hero-circle:hover {\n    border-color: var(--qa-accent);\n    transform: translateY(-2px);\n  }\n  .qa-root .team-hero-avatar {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .team-hero-placeholder {\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2);\n  }\n  .qa-root .team-hero-name {\n    font-size: 11px;\n    color: var(--qa-text-2);\n    text-align: center;\n    max-width: 52px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  /* 疯狂赛车样式 - 紧凑卡片布局 */\n  .qa-root .car-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qa-root .car-item {\n    background: var(--qa-bg-2);\n    border-radius: 6px;\n    padding: 8px 10px;\n    border-left: 3px solid;\n  }\n  .qa-root .car-item.grade-1 { border-left-color: #22c55e; }\n  .qa-root .car-item.grade-2 { border-left-color: #3b82f6; }\n  .qa-root .car-item.grade-3 { border-left-color: #a855f7; }\n  .qa-root .car-item.grade-4 { border-left-color: #f59e0b; }\n  .qa-root .car-item.grade-5 { border-left-color: #ef4444; }\n  .qa-root .car-item.grade-6 { border-left-color: #eab308; }\n\n  .qa-root .car-item-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-bottom: 6px;\n  }\n  .qa-root .car-brand-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 4px;\n  }\n  .qa-root .car-grade-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    background: currentColor;\n    filter: brightness(0.95);\n  }\n  .qa-root .car-grade-icon svg {\n    display: block;\n    fill: #fff;\n    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));\n  }\n  .qa-root .car-badge {\n    font-size: 11px;\n    padding: 1px 6px;\n    border-radius: 4px;\n    border: 1px solid;\n    font-weight: 500;\n  }\n  .qa-root .car-name {\n    font-size: 12px;\n    color: var(--qa-text-2);\n    flex: 1;\n  }\n\n  .qa-root .car-meta-row {\n    display: grid;\n    grid-template-columns: repeat(6, auto);\n    gap: 4px 8px;\n    font-size: 11px;\n    margin-bottom: 6px;\n    align-items: center;\n  }\n  .qa-root .car-meta-row .meta-k {\n    color: var(--qa-text-3);\n    text-align: right;\n  }\n  .qa-root .car-meta-row .meta-v {\n    color: var(--qa-text-1);\n    font-weight: 500;\n  }\n  .qa-root .car-meta-row .reward-trigger {\n    cursor: pointer;\n    color: var(--qa-accent);\n  }\n  .qa-root .car-meta-row .reward-trigger.has-big-prize {\n    color: #10b981;\n    font-weight: 600;\n  }\n  .qa-root .car-meta-row .meta-v.has-helper {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n\n  .qa-root .car-actions {\n    display: flex;\n    gap: 6px;\n  }\n  .qa-root .car-actions .btn {\n    flex: 1;\n    padding: 5px 8px;\n    font-size: 11px;\n  }\n\n  /* 奖励弹窗样式 */\n  .qa-root .car-reward-popup {\n    position: fixed;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: 8px;\n    box-shadow: var(--qa-shadow-1);\n    z-index: 100000;\n    min-width: 180px;\n    max-width: 260px;\n  }\n  .qa-root .car-reward-popup .popup-header {\n    font-size: 12px;\n    font-weight: 600;\n    padding: 8px 12px;\n    border-bottom: 1px solid var(--qa-border);\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-reward-popup .popup-content {\n    padding: 8px 12px;\n    font-size: 11px;\n  }\n  .qa-root .car-reward-popup .reward-row {\n    display: flex;\n    justify-content: space-between;\n    padding: 3px 0;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .car-reward-popup .reward-row:last-child {\n    border-bottom: none;\n  }\n  .qa-root .car-reward-popup .reward-row .name {\n    color: var(--qa-text-2);\n  }\n  .qa-root .car-reward-popup .reward-row .value {\n    color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize {\n    background: rgba(245, 158, 11, 0.12);\n    padding: 4px 6px;\n    margin: 2px -6px;\n    border-radius: 4px;\n    border-bottom: none;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize .name {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize .value {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .car-reward-popup .no-rewards {\n    text-align: center;\n    color: var(--qa-text-3);\n    padding: 4px 0;\n  }\n\n  /* 护卫选择弹窗优化 */\n  .qa-root .car-helper-modal .helper-list {\n    max-height: 320px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin: 12px 0;\n  }\n  .qa-root .car-helper-modal .helper-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 2px solid transparent;\n  }\n  .qa-root .car-helper-modal .helper-item:hover {\n    background: var(--qa-bg-3);\n    border-color: var(--qa-border);\n  }\n  .qa-root .car-helper-modal .helper-item.selected {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n  }\n  .qa-root .car-helper-modal .helper-item.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .car-helper-modal .helper-info {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n  .qa-root .car-helper-modal .helper-name {\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-helper-modal .helper-meta {\n    display: flex;\n    gap: 8px;\n    font-size: 11px;\n    color: var(--qa-text-3);\n  }\n  .qa-root .car-helper-modal .helper-power {\n    color: #f59e0b;\n    font-weight: 500;\n  }\n  .qa-root .car-helper-modal .helper-count {\n    color: var(--qa-accent);\n  }\n  .qa-root .car-helper-modal .helper-count.full {\n    color: #ef4444;\n  }\n\n  /* 赛车状态栏 */\n  .qa-root .car-status-bar {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    padding: 10px 12px;\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    margin-bottom: 12px;\n  }\n  .qa-root .car-status-bar .status-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n  }\n  .qa-root .car-status-bar .status-label {\n    color: var(--qa-text-3);\n  }\n  .qa-root .car-status-bar .status-value {\n    font-weight: 600;\n    color: var(--qa-text-1);\n    padding: 2px 8px;\n    border-radius: 4px;\n    background: var(--qa-bg-2);\n  }\n  .qa-root .car-status-bar .status-value.active {\n    background: rgba(16, 185, 129, 0.15);\n    color: #10b981;\n  }\n  .qa-root .car-status-bar .status-value.inactive {\n    background: rgba(239, 68, 68, 0.15);\n    color: #ef4444;\n  }\n\n  /* 收车倒计时 */\n  .qa-root .car-countdown {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    padding: 5px 10px;\n    background: var(--qa-bg-3);\n    border-radius: 4px;\n  }\n\n  @media (max-width: 768px) {\n    .qa-root { font-size: 12px; }\n    .qa-root .panel-shell {\n      width: 92vw;\n      height: 75vh;\n      max-height: 75vh;\n      border-radius: 14px;\n      bottom: auto;\n      top: 8%;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .qa-root .floating-orb {\n      right: 8px;\n      bottom: auto;\n      top: 40%;\n      transform: translateY(-50%);\n    }\n    .qa-root .task-grid { grid-template-columns: 1fr; }\n    .qa-root .menu-item {\n      padding: 10px 12px;\n      font-size: 13px;\n    }\n    .qa-root .menu-icon { font-size: 16px; }\n    .qa-root .menu-group { padding: 0 2px; }\n    .qa-root .panel-header { height: 48px; }\n    .qa-root .menu-toggle { display: none !important; }\n    .qa-root .content-area { padding: 10px; }\n  }\n\n  /* 盐场匹配详情样式 */\n  .qa-root .salt-match-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .match-date-tag {\n    display: inline-block;\n    padding: 4px 10px;\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-radius: 6px;\n    font-size: 12px;\n    font-weight: 500;\n    margin-bottom: 6px;\n  }\n  .qa-root .match-club-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qa-root .match-club-item {\n    background: var(--qa-bg-2);\n    border-radius: 10px;\n    padding: 12px;\n    border: 1px solid var(--qa-border);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .match-club-item:hover {\n    border-color: var(--qa-accent);\n    box-shadow: var(--qa-shadow-2);\n  }\n  .qa-root .club-main-row {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 8px;\n  }\n  .qa-root .club-rank {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 12px;\n    flex-shrink: 0;\n  }\n  .qa-root .club-logo {\n    width: 36px;\n    height: 36px;\n    border-radius: 8px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .club-logo img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .club-basic { flex: 1; min-width: 0; }\n  .qa-root .club-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }\n  .qa-root .club-name { font-weight: 600; font-size: 14px; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .club-server { font-size: 11px; color: var(--qa-text-3); background: var(--qa-bg-3); padding: 2px 6px; border-radius: 4px; }\n  .qa-root .club-stats-row { display: flex; gap: 6px; flex-wrap: wrap; }\n  .qa-root .stat-tag {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .stat-tag.power { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .stat-tag.red { background: rgba(239, 68, 68, 0.12); color: #ef4444; }\n  .qa-root .stat-tag.score { background: rgba(236, 72, 153, 0.12); color: #ec4899; }\n  .qa-root .club-detail-row {\n    padding: 8px 0;\n    border-top: 1px dashed var(--qa-border);\n    border-bottom: 1px dashed var(--qa-border);\n    margin: 4px 0;\n  }\n  .qa-root .car-heads { display: flex; gap: 12px; flex-wrap: wrap; }\n  .qa-root .car-head-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 11px;\n    padding: 4px 8px;\n    background: rgba(0, 191, 255, 0.1);\n    color: #00bfff;\n    border-radius: 6px;\n  }\n  .qa-root .car-head-avatar {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .car-head-text { white-space: nowrap; }\n  .qa-root .club-extra-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 6px; }\n  .qa-root .alliance-tag {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .alliance-tag.梦 { background: rgba(236, 72, 153, 0.12); color: #ec4899; }\n  .qa-root .alliance-tag.大 { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }\n  .qa-root .alliance-tag.正义 { background: rgba(34, 197, 94, 0.12); color: #22c55e; }\n  .qa-root .alliance-tag.龙 { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .alliance-tag.未知 { background: rgba(107, 114, 128, 0.12); color: #6b7280; }\n  .qa-root .announcement {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    flex: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 0;\n  }\n\n  /* 消耗活动监控样式 */\n  .qa-root .consumption-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .qa-root .consumption-item {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .qa-root .consumption-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .qa-root .consumption-name {\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .consumption-values {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n  .qa-root .consumption-bar {\n    width: 100%;\n    height: 8px;\n    background: var(--qa-bg-3);\n    border-radius: 999px;\n    overflow: hidden;\n  }\n  .qa-root .consumption-bar-fill {\n    height: 100%;\n    border-radius: 999px;\n    transition: width var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .consumption-footer {\n    display: flex;\n    justify-content: flex-end;\n    font-size: 11px;\n  }\n\n  /* 盐场战绩样式 */\n  .qa-root .battle-records-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .battle-records-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .battle-member-card {\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border);\n    overflow: hidden;\n  }\n  .qa-root .battle-member-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .battle-member-header:hover { background: var(--qa-bg-3); }\n  .qa-root .battle-member-info { display: flex; align-items: center; gap: 8px; }\n  .qa-root .battle-rank {\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 11px;\n  }\n  .qa-root .battle-member-avatar {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .battle-member-name { font-weight: 600; font-size: 13px; color: var(--qa-text-1); }\n  .qa-root .battle-member-stats { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }\n  .qa-root .stat-inline {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .stat-inline.win { background: rgba(16, 185, 129, 0.12); color: #10b981; }\n  .qa-root .stat-inline.lose { background: rgba(239, 68, 68, 0.12); color: #ef4444; }\n  .qa-root .stat-inline.kd { background: rgba(99, 102, 241, 0.12); color: #6366f1; }\n  .qa-root .stat-inline.building { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .expand-icon { font-size: 10px; color: var(--qa-text-3); margin-left: 4px; }\n  .qa-root .battle-member-details {\n    padding: 0 12px 12px;\n    border-top: 1px dashed var(--qa-border);\n  }\n  .qa-root .battle-list { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }\n  .qa-root .battle-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 10px;\n    border-radius: 6px;\n    font-size: 11px;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .battle-item.win { background: rgba(16, 185, 129, 0.08); }\n  .qa-root .battle-item.lose { background: rgba(239, 68, 68, 0.08); }\n  .qa-root .battle-time { color: var(--qa-text-3); font-family: monospace; min-width: 40px; }\n  .qa-root .battle-type { color: var(--qa-text-2); min-width: 36px; padding: 2px 6px; border-radius: 4px; font-size: 10px; }\n  .qa-root .battle-type.attack { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }\n  .qa-root .battle-type.defend { background: rgba(99, 102, 241, 0.15); color: #6366f1; }\n  .qa-root .battle-participants { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; }\n  .qa-root .battle-self { color: var(--qa-text-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 60px; }\n  .qa-root .battle-vs { color: var(--qa-text-3); font-size: 10px; }\n  .qa-root .battle-target-avatar { width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; }\n  .qa-root .battle-target { color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .battle-result { font-weight: 600; min-width: 32px; text-align: right; }\n  .qa-root .battle-result.win { color: #10b981; }\n  .qa-root .battle-result.lose { color: #ef4444; }\n\n  /* 榜单样式 */\n  .qa-root .rank-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .rank-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .rank-member-card {\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .rank-member-card:hover {\n    box-shadow: var(--qa-shadow-2);\n    background: var(--qa-bg-3);\n  }\n  .qa-root .rank-member-header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    user-select: none;\n    cursor: grab;\n  }\n  .qa-root .rank-member-header::-webkit-scrollbar {\n    display: none;\n  }\n  .qa-root .rank-member-header {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .qa-root .rank-member-header:active {\n    cursor: grabbing;\n  }\n  .qa-root .rank-badge-top-left {\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    z-index: 10;\n  }\n  .qa-root .rank-badge-left {\n    flex-shrink: 0;\n    min-width: 36px;\n    font-weight: bold;\n    font-size: 16px;\n    color: var(--qa-primary);\n    text-align: center;\n  }\n  .qa-root .rank-member-content {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-root .rank-badge-top-left + .rank-member-content {\n    margin-left: 100px;\n  }\n  .qa-root .rank-member-info {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    min-width: 120px;\n    flex-shrink: 0;\n  }\n  .qa-root .rank-member-stats {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-root .rank-member-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n  }\n  .qa-root .rank-member-avatar {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .rank-member-avatar-small {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .rank-club-logo {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .stat-inline {\n    font-size: 11px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    white-space: nowrap;\n    font-weight: 500;\n    flex-shrink: 0;\n  }\n  .qa-root .stat-inline.rank {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n  .qa-root .stat-inline.win {\n    background: rgba(16, 185, 129, 0.15);\n    color: #059669;\n  }\n  .qa-root .stat-inline.loss {\n    background: rgba(239, 68, 68, 0.15);\n    color: #dc2626;\n  }\n  .qa-root .stat-inline.siege {\n    background: rgba(245, 158, 11, 0.15);\n    color: #d97706;\n  }\n  .qa-root .stat-inline.power {\n    background: rgba(250, 76, 44, 0.15);\n    color: #F96F19;\n  }\n  .qa-root .stat-inline.score {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n  .qa-root .stat-inline.red {\n    background: rgba(249, 203, 35, 0.15);\n    color: #F99D19;\n  }\n  .qa-root .stat-inline.name {\n    background: rgba(194, 166, 248, 0.15);\n    color: #AE86F9;\n  }\n  .qa-root .stat-inline.id {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n\n  /* 分页样式 */\n  .qa-root .pagination-container {\n    margin-top: 16px;\n    padding-top: 12px;\n    border-top: 1px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  .qa-root .pagination-info {\n    font-size: 12px;\n    color: var(--qa-text-2);\n  }\n  .qa-root .pagination-controls {\n    display: flex;\n    gap: 8px;\n  }\n\n  /* 单选按钮组样式 */\n  .qa-root .radio-group {\n    display: flex;\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  .qa-root .radio-option {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    user-select: none;\n  }\n  .qa-root .radio-option input[type=\"radio\"] {\n    margin: 0 4px 0 0;\n    cursor: pointer;\n  }\n  .qa-root .radio-option span {\n    font-size: 12px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    background: var(--qa-bg-3);\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .radio-option input[type=\"radio\"]:checked + span {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .radio-option:hover span {\n    background: var(--qa-border);\n  }\n\n  /* 俱乐部历史战绩样式 */\n  .qa-root .history-records-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .history-records-list { display: flex; flex-direction: column; gap: 6px; }\n  .qa-root .history-war-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 10px 12px;\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .war-type {\n    font-weight: 600;\n    font-size: 13px;\n    color: var(--qa-accent);\n    min-width: 80px;\n  }\n  .qa-root .war-date { font-size: 12px; color: var(--qa-text-2); flex: 1; }\n  .qa-root .war-rank {\n    font-size: 12px;\n    font-weight: 600;\n    padding: 2px 10px;\n    border-radius: 10px;\n    background: rgba(245, 158, 11, 0.12);\n    color: #f59e0b;\n  }\n\n  /* 日历选择器样式 */\n  .qa-root .date-picker-wrapper {\n    position: relative;\n    display: inline-block;\n  }\n  .qa-root .date-picker-btn {\n    padding: 6px 10px;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    cursor: pointer;\n    font-size: 14px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .date-picker-btn:hover {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n  }\n  .qa-root .calendar-popup, .calendar-popup.qa-root {\n    position: fixed;\n    background: var(--qa-bg-1, #1a1a2e);\n    border: 1px solid var(--qa-border, #2d2d44);\n    border-radius: var(--qa-radius-md, 12px);\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n    z-index: 99999;\n    min-width: 280px;\n    display: none;\n    padding: 12px;\n  }\n  .qa-root .calendar-popup.show, .calendar-popup.qa-root.show { display: block; }\n  .qa-root .calendar-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 12px;\n  }\n  .qa-root .calendar-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n  }\n  .qa-root .calendar-nav {\n    width: 28px;\n    height: 28px;\n    border: none;\n    background: var(--qa-bg-3);\n    border-radius: 6px;\n    cursor: pointer;\n    font-size: 14px;\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-nav:hover {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n  }\n  .qa-root .calendar-weekdays {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 2px;\n    margin-bottom: 8px;\n  }\n  .qa-root .calendar-weekday {\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-3);\n    padding: 4px;\n  }\n  .qa-root .calendar-weekday.weekend { color: var(--qa-accent); }\n  .qa-root .calendar-days {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 2px;\n  }\n  .qa-root .calendar-day {\n    text-align: center;\n    padding: 8px 4px;\n    font-size: 12px;\n    border-radius: 6px;\n    cursor: pointer;\n    color: var(--qa-text-1);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-day:hover:not(.disabled):not(.empty) {\n    background: var(--qa-bg-3);\n  }\n  .qa-root .calendar-day.weekend { color: var(--qa-accent); font-weight: 500; }\n  .qa-root .calendar-day.today {\n    background: var(--qa-bg-3);\n    font-weight: 600;\n    box-shadow: inset 0 0 0 1px var(--qa-accent);\n  }\n  .qa-root .calendar-day.selected {\n    background: var(--qa-accent);\n    color: #fff;\n    font-weight: 600;\n  }\n  .qa-root .calendar-day.selected.weekend { color: #fff; }\n  .qa-root .calendar-day.disabled {\n    color: var(--qa-text-3);\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n  .qa-root .calendar-day.other-month { opacity: 0.4; }\n  .qa-root .calendar-day.empty { cursor: default; }\n  .qa-root .calendar-shortcuts {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid var(--qa-border);\n  }\n  .qa-root .calendar-shortcut {\n    padding: 4px 10px;\n    font-size: 11px;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    border-radius: 4px;\n    cursor: pointer;\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-shortcut:hover {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n    color: var(--qa-accent);\n  }\n  .qa-root .calendar-hint {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    margin-top: 8px;\n    text-align: center;\n  }\n\n  /* 自动完成/联想搜索组件样式 */\n  .qa-root .qa-autocomplete {\n    position: relative;\n  }\n  .qa-root .qa-autocomplete-input {\n    width: 100%;\n  }\n  .qa-root .qa-autocomplete-dropdown {\n    display: none;\n    position: fixed;\n    max-height: 240px;\n    overflow-y: auto;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    box-shadow: var(--qa-shadow-1);\n    z-index: 100000;\n  }\n  .qa-root .qa-autocomplete-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background var(--qa-dur-fast) var(--qa-ease);\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .qa-autocomplete-item:last-child {\n    border-bottom: none;\n  }\n  .qa-root .qa-autocomplete-item:hover,\n  .qa-root .qa-autocomplete-item.active {\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-autocomplete-item.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .qa-autocomplete-name {\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .qa-autocomplete-name mark {\n    background: rgba(47, 128, 237, 0.25);\n    color: var(--qa-accent);\n    padding: 0 2px;\n    border-radius: 2px;\n  }\n  .qa-root .qa-autocomplete-level {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n  .qa-root .qa-autocomplete-empty {\n    padding: 16px;\n    text-align: center;\n    color: var(--qa-text-3);\n    font-size: 12px;\n  }\n\n  /* ===================== 头像/武将头像（参考 xyzw_web_helper 展示风格） ===================== */\n  .qa-root .qa-avatar {\n    position: relative;\n    width: 32px;\n    height: 32px;\n    border-radius: 999px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    flex: none;\n  }\n  .qa-root .qa-avatar.qa-avatar-24 { width: 24px; height: 24px; }\n  .qa-root .qa-avatar.qa-avatar-32 { width: 32px; height: 32px; }\n  .qa-root .qa-avatar-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    opacity: 0;\n    transition: opacity var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-avatar-fallback {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2);\n    background: var(--qa-bg-3);\n  }\n  .qa-root .qa-pvp-hero-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 10px;\n    border-radius: 10px;\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n    min-width: 170px;\n  }\n  .qa-root .qa-pvp-hero-meta { min-width: 0; }\n  .qa-root .qa-pvp-hero-name {\n    font-size: 12px;\n    font-weight: 700;\n    color: var(--qa-text-1);\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 110px;\n  }\n  .qa-root .qa-pvp-hero-sub {\n    font-size: 10px;\n    color: var(--qa-text-2);\n    line-height: 1.2;\n    margin-top: 3px;\n    display: flex;\n    gap: 6px;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .qa-root .qa-pvp-hero-red { color: #ff3b30; }\n  .qa-root .qa-pvp-hero-hole { color: #34c759; }\n  .qa-root .qa-pvp-hero-holy.on { color: #34c759; }\n  .qa-root .qa-pvp-hero-holy.off { color: #8e8e93; }\n\n  .qa-hero-overlay { padding: 14px; }\n  .qa-hero-modal {\n    width: min(720px, 92vw);\n    max-height: min(76vh, 720px);\n    overflow: hidden;\n    background: var(--qa-bg-1);\n    border-radius: 14px;\n    border: 1px solid var(--qa-border);\n    box-shadow: var(--qa-shadow-1);\n    display: flex;\n    flex-direction: column;\n  }\n  .qa-hero-modal-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 14px;\n    border-bottom: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n  }\n  .qa-hero-modal-title { font-size: 14px; font-weight: 700; color: var(--qa-text-1); }\n  .qa-hero-modal-close {\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-2);\n    border-radius: 10px;\n    padding: 8px 10px;\n    cursor: pointer;\n  }\n  .qa-hero-summary {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 12px 14px;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-hero-summary-meta { min-width: 0; }\n  .qa-hero-summary-name { font-size: 13px; font-weight: 800; color: var(--qa-text-1); }\n  .qa-hero-summary-sub {\n    margin-top: 6px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-size: 12px;\n    color: #000;\n  }\n  .qa-hero-equip-list {\n    padding: 12px 14px;\n    overflow: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 10px;\n  }\n  .qa-hero-equip {\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n    border-radius: 12px;\n    padding: 10px;\n  }\n  .qa-hero-equip-head {\n    display: flex;\n    align-items: baseline;\n    justify-content: space-between;\n    gap: 10px;\n    margin-bottom: 8px;\n  }\n  .qa-hero-equip-name { font-size: 12px; font-weight: 800; color: #000; }\n  .qa-hero-equip-meta { font-size: 11px; color: #000; }\n  .qa-hero-quench-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }\n  .qa-hero-quench {\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    border-radius: 10px;\n    padding: 8px;\n    min-height: 38px;\n  }\n  .qa-hero-quench-slot { font-size: 10px; color: #000; }\n  .qa-hero-quench-attr { display: block; margin-top: 3px; font-size: 12px; font-weight: 700; }\n  .qa-hero-empty { font-size: 12px; color: var(--qa-text-3); padding: 8px 0; }\n\n  /* 装备淬炼菱形图标展示（用于模态框，不在 .qa-root 内） */\n  .qa-quench-diamond-row {\n    display: flex !important;\n    flex-wrap: wrap;\n    gap: 12px;\n    padding: 10px 14px;\n    background: var(--qa-bg-2, #f7f8fa);\n    border-bottom: 1px solid var(--qa-border, #e5e7eb);\n  }\n  .qa-quench-equip-item {\n    display: flex !important;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    color: #000;\n  }\n  .qa-quench-equip-item .equip-label {\n    color: #000;\n    font-weight: 500;\n  }\n  .qa-quench-diamonds {\n    display: inline-flex !important;\n    gap: 4px;\n    align-items: center;\n  }\n  .qa-quench-diamond {\n    display: inline-block !important;\n    width: 12px !important;\n    height: 12px !important;\n    min-width: 12px !important;\n    min-height: 12px !important;\n    transform: rotate(45deg);\n    border: 1px solid #a7a7a7 !important;\n    background-color: #fff !important;\n    box-sizing: border-box !important;\n    flex-shrink: 0;\n  }\n  .qa-quench-diamond.red {\n    background-color: #ff3b30 !important;\n    border-color: #ff3b30 !important;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-quench-diamond,\n  [data-theme=\"dark\"] .qa-quench-diamond {\n    background-color: #4a4a4a !important;\n    border-color: #6a6a6a !important;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-quench-diamond.red,\n  [data-theme=\"dark\"] .qa-quench-diamond.red {\n    background-color: #ff3b30 !important;\n    border-color: #ff3b30 !important;\n  }\n";
  const _0x66e475 = "daily";
  const _0x4ebed7 = {
    id: "daily",
    label: "日常任务",
    icon: "📋"
  };
  const _0x319543 = {
    id: "club",
    label: "俱乐部",
    icon: "🏠"
  };
  const _0x4f11ad = {
    id: "activity",
    label: "活动助手",
    icon: "🎯"
  };
  const _0xd423eb = {
    id: "toolbox",
    label: "工具箱",
    icon: "🔧"
  };
  const _0x483cf4 = {
    id: "rank",
    label: "榜单",
    icon: "🏆"
  };
  const _0x3d962e = {
    id: "spar",
    label: "切磋",
    icon: "⚡"
  };
  const _0x1663a0 = {
    id: "changelog",
    label: "更新日志",
    icon: "📝"
  };
  const _0x3d62a3 = [_0x4ebed7, _0x319543, _0x4f11ad, _0xd423eb, _0x483cf4, _0x3d962e, _0x1663a0];
  const _0x5ebc1b = _0x3d62a3.map(_0x367244 => _0x367244.id);
  const _0x5a4f27 = "<svg class=\"card-collapse-icon\" viewBox=\"0 0 24 24\"><path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"/></svg>";
  const _0x18a571 = () => {
    const _0x3a6e19 = Object.keys(_0x5a5436 || {}).map(Number).filter(_0x5f1a02 => Number.isFinite(_0x5f1a02)).sort((_0x40ef7d, _0x3451f0) => _0x40ef7d - _0x3451f0);
    const _0xc35908 = _0x3a6e19.map(_0x52ca8a => "<option value=\"" + _0x52ca8a + "\">" + (_0x5a5436[String(_0x52ca8a)] || "属性" + _0x52ca8a) + "</option>").join("");
    return "<option value=\"\">选择目标属性</option>" + _0xc35908;
  };
  const _0x2f9264 = () => _0x3d62a3.map(_0x113655 => "\n  <div class=\"menu-item " + (_0x113655.id === _0x66e475 ? "active" : "") + "\" data-page=\"" + _0x113655.id + "\">\n    <span class=\"menu-icon\">" + _0x113655.icon + "</span>" + _0x113655.label + "\n  </div>\n").join("");
  const _0xfafa22 = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">当前阵容</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <div class=\"team-selector\" id=\"qa-team-selector\">\n          <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">加载中...</span>\n        </div>\n        <button class=\"btn btn-secondary btn-small\" data-action=\"team-refresh\">刷新</button>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-team-heroes\" class=\"team-heroes-container\">\n        <div class=\"helper-text\">点击\"刷新\"加载阵容数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">每日任务补差</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <label class=\"task-check\" style=\"margin:0;\">\n          <input type=\"checkbox\" id=\"qa-daily-select-all\">\n          <span>全选</span>\n        </label>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n        <button class=\"btn btn-success\" data-action=\"daily-fix\">一键补差</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-daily-fix-progress\" style=\"margin-bottom:10px;\">--</div>\n      <div class=\"task-grid\">\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"share\" checked><span>分享游戏</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"friend\" checked><span>赠送好友金币</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"recruit\" checked><span>招募英雄</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"hangup\" checked><span>挂机奖励</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"buygold\" checked><span>免费点金</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"openbox\" checked><span>开启宝箱</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"blackmarket\" checked><span>黑市采购</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"arena\" checked><span>竞技场战斗</span></label>\n        <label class=\"task-check\" style=\"display:flex;align-items:center;gap:4px;\">\n          <input type=\"checkbox\" data-task=\"legionboss\" checked>\n          <span>俱乐部BOSS</span>\n          <select id=\"qa-legionboss-count\" style=\"width:50px;padding:2px 4px;font-size:12px;border-radius:4px;border:1px solid var(--border-color);\">\n            <option value=\"0\">0次</option>\n            <option value=\"1\">1次</option>\n            <option value=\"2\" selected>2次</option>\n            <option value=\"3\">3次</option>\n            <option value=\"4\">4次</option>\n          </select>\n        </label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"dailyboss\" checked><span>每日BOSS</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"bottle\" checked><span>盐罐助手</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"treasure\" checked><span>珍宝阁</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"signin\" checked><span>签到奖励</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"fish\" checked><span>免费钓鱼</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"mail\" checked><span>领取邮件</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"genie\" checked><span>灯神扫荡</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"deepsea\" checked><span>深海扫荡</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"sweepticket\" checked><span>领取扫荡券</span></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">每日任务执行情况</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"daily-refresh\">刷新</button>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-daily-detail\"><div class=\"helper-text\">点击\"刷新\"加载任务数据</div></div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">挂机加钟</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">已挂机</span>\n          <span class=\"stat-value\" id=\"qa-hangup-elapsed\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时长</span>\n          <span class=\"stat-value\" id=\"qa-hangup-time\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"addtime-run\">加钟</button>\n        <button class=\"btn btn-success\" data-action=\"hangup-claim\">领取奖励</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">盐罐机器人</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">状态</span>\n          <span class=\"stat-value\" id=\"qa-bottle-status\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时间</span>\n          <span class=\"stat-value\" id=\"qa-bottle-time\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"bottle-restart\" id=\"qa-bottle-restart-btn\">重启服务</button>\n      </div>\n    </div>\n  </div>\n";
  const _0x22595d = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部信息</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-club-status\">未加入</span>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-secondary\" data-action=\"club-info\">刷新</button>\n        <button class=\"btn btn-success\" data-action=\"club-signin\">俱乐部签到</button>\n        <button class=\"btn btn-primary\" data-action=\"club-export\">导出图片</button>\n      </div>\n      <div id=\"qa-club-content\">\n        <div class=\"helper-text\">点击\"刷新\"加载俱乐部信息</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">疯狂赛车</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-secondary\" data-action=\"car-info\">刷新数据</button>\n        <button class=\"btn btn-primary\" data-action=\"car-smart-send\" title=\"智能发车策略：&#10;• 仅周一至周三 6:00-20:00 可用&#10;• 每日最多发车 4 次&#10;&#10;发车标准：&#10;• 刷新券≥6张：只发红色以上/含4张刷新券奖励/含大奖的车&#10;• 刷新券<6张：发橙色以上/含2张刷新券奖励/含大奖的车&#10;&#10;刷新逻辑：&#10;• 有免费刷新时会先刷新&#10;• 刷新券充足时持续刷新直到达标\">智能发车</button>\n        <button class=\"btn btn-success\" data-action=\"car-claim-all\">一键收车</button>\n      </div>\n      <div id=\"qa-car-content\">\n        <div class=\"helper-text\">点击\"刷新数据\"加载车辆信息</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场匹配详情</span>\n      " + _0x5a4f27 + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-salt-match-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n        <span class=\"helper-text\" style=\"margin:0;\">(周六/周日)</span>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"salt-match-query\">查询</button>\n        <button class=\"btn btn-secondary\" data-action=\"salt-match-sort-red\">红淬排序</button>\n        <button class=\"btn btn-secondary\" data-action=\"salt-match-sort-score\">积分排序</button>\n        <button class=\"btn btn-success\" data-action=\"salt-match-export\">导出图片</button>\n      </div>\n      <div id=\"qa-salt-match-content\">\n        <div class=\"helper-text\">选择日期后点击\"查询\"加载盐场匹配数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场战绩</span>\n      " + _0x5a4f27 + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-battle-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n        <span class=\"helper-text\" style=\"margin:0;\">(周六/周日)</span>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"battle-records-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"battle-records-export\">导出图片</button>\n      </div>\n      <div id=\"qa-battle-records-content\">\n        <div class=\"helper-text\">选择日期后点击\"查询\"加载盐场战绩</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部历史战绩</span>\n      " + _0x5a4f27 + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"history-records-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"history-records-export\">导出图片</button>\n      </div>\n      <div id=\"qa-history-records-content\">\n        <div class=\"helper-text\">点击\"查询\"加载俱乐部历史战绩</div>\n      </div>\n    </div>\n  </div>\n";
  const _0x2cd8dc = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">每周答题</span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"study-start\">开始答题</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-study-status\">点击按钮开始答题</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">消耗活动监控</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-consumption-badge\">未开放</span>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">普通道具</span>\n          <span class=\"stat-value\" id=\"qa-consumption-normal-item\">0</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">黄金道具</span>\n          <span class=\"stat-value\" id=\"qa-consumption-gold-item\">0</span>\n        </div>\n      </div>\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">使用数量</span>\n        <input class=\"input\" id=\"qa-consumption-number\" type=\"number\" value=\"4\" min=\"1\" max=\"100\" style=\"width:80px;\">\n        <button class=\"btn btn-success btn-small\" data-action=\"consumption-open\">打开普通道具</button>\n      </div>\n      <div id=\"qa-consumption-content\">\n        <div class=\"helper-text\">点击\"刷新进度\"加载活动数据</div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-primary\" data-action=\"consumption-info\">刷新进度</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">月度任务补差</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-monthly-status\">--</span>\n        <span class=\"helper-text\" id=\"qa-monthly-days\" style=\"margin:0;font-size:11px;\">--</span>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">钓鱼进度</span>\n          <div id=\"qa-monthly-fish\" style=\"display:flex;flex-direction:column;align-items:flex-end;\">\n            <span class=\"stat-value\">-- / 320</span>\n            <span class=\"stat-sub\" style=\"font-size:10px;color:var(--text-secondary);\">--</span>\n          </div>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">竞技场进度</span>\n          <div id=\"qa-monthly-arena\" style=\"display:flex;flex-direction:column;align-items:flex-end;\">\n            <span class=\"stat-value\">-- / 240</span>\n            <span class=\"stat-sub\" style=\"font-size:10px;color:var(--text-secondary);\">--</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-secondary\" id=\"qa-monthly-refresh-btn\" data-action=\"monthly-refresh\">刷新进度</button>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-primary\" id=\"qa-monthly-fish-btn\" data-action=\"monthly-fish-topup\">钓鱼补齐</button>\n        <button class=\"btn btn-secondary btn-small\" id=\"qa-monthly-fish-complete-btn\" data-action=\"monthly-fish-complete\" title=\"一键完成到满额\">满额</button>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" id=\"qa-monthly-arena-btn\" data-action=\"monthly-arena-topup\">竞技场补齐</button>\n        <button class=\"btn btn-secondary btn-small\" id=\"qa-monthly-arena-complete-btn\" data-action=\"monthly-arena-complete\" title=\"一键完成到满额\">满额</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">补齐规则：让\"当前天数比例\"和\"完成比例\"一致</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸王宝库</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-bosstower-status\">--</span>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-bosstower-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>活动时间：周三 ~ 周日</p>\n      </div>\n      <div id=\"qa-bosstower-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">当前层数</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-floor\">第 1 层</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">普通钻头</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-drill\">0 / 10</span>\n          </div>\n        </div>\n        <div class=\"info-row\" style=\"display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border-color);margin-bottom:10px;\">\n          <span style=\"color:var(--text-secondary);\">门状态</span>\n          <span id=\"qa-bosstower-door\">--</span>\n        </div>\n        <div id=\"qa-bosstower-rewards\" style=\"display:none;margin-bottom:10px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-secondary\" data-action=\"bosstower-refresh\">刷新</button>\n          <button class=\"btn btn-primary\" id=\"qa-bosstower-action-btn\" data-action=\"bosstower-execute\">攻打Boss</button>\n        </div>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">自动攻打Boss/门并领取最高价值奖励</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">换皮闯关</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-skin-towers-status\">--</span>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日挑战</span>\n          <span class=\"stat-value\" id=\"qa-skin-towers-count\">0 / 10</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日可挑战</span>\n          <span class=\"stat-value\" id=\"qa-skin-towers-boss-hint\">--</span>\n        </div>\n      </div>\n      <div id=\"qa-skin-towers-grid\" class=\"skin-towers-grid\">\n        <!-- 动态生成6个BOSS -->\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-secondary\" data-action=\"skin-towers-refresh\">刷新进度</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">活动时间8-20点，周四全部BOSS开放</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">月度竞猜</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-warguess-status\">--</span>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-warguess-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>开放时间：每月最后一个星期日</p>\n        <p id=\"qa-warguess-next-date\" style=\"font-size:11px;margin-top:4px;\">--</p>\n      </div>\n      <div id=\"qa-warguess-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">排名第一</span>\n            <span class=\"stat-value\" id=\"qa-warguess-top-legion\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">军团战力</span>\n            <span class=\"stat-value\" id=\"qa-warguess-top-power\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n          <button class=\"btn btn-secondary\" id=\"qa-warguess-refresh-btn\" data-action=\"warguess-refresh\">刷新排名</button>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" id=\"qa-warguess-start-btn\" data-action=\"warguess-start\">竞猜 (20金币)</button>\n          <button class=\"btn btn-success\" id=\"qa-warguess-coin-btn\" data-action=\"warguess-coin\">领取竞猜币</button>\n        </div>\n        <div class=\"helper-text\" style=\"margin-top:8px;\">自动竞猜排名第一的军团，投入20金币</div>\n      </div>\n    </div>\n  </div>\n";
  const _0x529779 = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">宝箱助手</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">宝箱总积分</span>\n          <span class=\"stat-value\" id=\"qa-box-total-points\">--</span>\n        </div>\n      </div>\n      <input type=\"hidden\" id=\"qa-box-itemid\" value=\"2001\">\n      <div class=\"qa-option-grid\" id=\"qa-box-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-box-option selected\" role=\"button\" tabindex=\"0\" data-itemid=\"2001\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_mzbx\" alt=\"木质宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">木质宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2001\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2002\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_qtbx\" alt=\"青铜宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">青铜宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2002\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2003\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_hjbx\" alt=\"黄金宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">黄金宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2003\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2004\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_bjbx\" alt=\"铂金宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">铂金宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2004\">--</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">数量</span>\n        <input class=\"input\" id=\"qa-box-count\" type=\"number\" value=\"10\" min=\"10\" step=\"10\" style=\"width:80px;\">\n      </div>\n      <div class=\"qa-input-error\" id=\"qa-box-error\" style=\"display:none;\"></div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"box-open\" id=\"qa-box-open-btn\">开启宝箱</button>\n        <button class=\"btn btn-secondary\" data-action=\"box-claim\">领取积分</button>\n      </div>\n      <div class=\"helper-text\">数量需为10的倍数，且不超过库存</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">钓鱼助手</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <input type=\"hidden\" id=\"qa-fish-type\" value=\"1\">\n      <div class=\"qa-option-grid\" id=\"qa-fish-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-fish-option selected\" role=\"button\" tabindex=\"0\" data-type=\"1\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_fish_ptyg\" alt=\"普通鱼竿\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">普通鱼竿</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-fish-count-for=\"1\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-fish-option\" role=\"button\" tabindex=\"0\" data-type=\"2\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_fish_hjyg\" alt=\"黄金鱼竿\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">黄金鱼竿</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-fish-count-for=\"2\">--</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">次数</span>\n        <input class=\"input\" id=\"qa-fish-count\" type=\"number\" value=\"10\" min=\"10\" step=\"10\" style=\"width:80px;\">\n        <label class=\"task-check\" style=\"margin:0;\">\n          <input type=\"checkbox\" id=\"qa-fish-free\" checked>\n          <span>免费模式</span>\n        </label>\n      </div>\n      <div class=\"qa-input-error\" id=\"qa-fish-error\" style=\"display:none;\"></div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"fish-run\" id=\"qa-fish-run-btn\">开始钓鱼</button>\n      </div>\n      <div class=\"helper-text\">数量需为10的倍数，且不超过库存</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">竞技场助手</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"arena-refresh\">刷新</button>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">咸神门票</span>\n          <span class=\"stat-value\" id=\"qa-arena-ticket\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日战斗</span>\n          <span class=\"stat-value\" id=\"qa-arena-fought\">--</span>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">战斗次数</span>\n        <select class=\"input\" id=\"qa-arena-times\" style=\"width:100px;\">\n          <option value=\"1\">1次</option>\n          <option value=\"3\" selected>3次</option>\n          <option value=\"10\">10次</option>\n          <option value=\"50\">50次</option>\n          <option value=\"100\">100次</option>\n          <option value=\"500\">500次</option>\n          <option value=\"1000\">1000次</option>\n          <option value=\"2000\">2000次</option>\n        </select>\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-primary\" data-action=\"arena-auto\" id=\"qa-arena-start-btn\">开始战斗</button>\n        <button class=\"btn btn-danger\" data-action=\"arena-stop\" id=\"qa-arena-stop-btn\" style=\"display:none;\">停止</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-arena-status\">点击刷新加载竞技场数据</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">武将升级</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"hero-upgrade-refresh\">刷新</button>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"flex-wrap:nowrap;\">\n        <span class=\"form-label\" style=\"flex-shrink:0;\">武将选择</span>\n        <div class=\"qa-autocomplete\" id=\"qa-hero-upgrade-autocomplete\" style=\"flex:1;min-width:0;\">\n          <input type=\"text\" class=\"input qa-autocomplete-input\" id=\"qa-hero-upgrade-input\" placeholder=\"输入武将名称搜索...\" autocomplete=\"off\">\n          <input type=\"hidden\" id=\"qa-hero-upgrade-select\" value=\"\">\n          <div class=\"qa-autocomplete-dropdown\" id=\"qa-hero-upgrade-dropdown\"></div>\n        </div>\n      </div>\n      <div id=\"qa-hero-upgrade-info\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\">\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">等级</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-level\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">攻击</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-attack\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">速度</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-speed\">--</span>\n          </div>\n        </div>\n        <div class=\"form-row\" style=\"margin-top:10px;\">\n          <span class=\"form-label\">升级等级</span>\n          <select class=\"input\" id=\"qa-hero-upgrade-num\" style=\"width:80px;\">\n            <option value=\"1\">1</option>\n            <option value=\"5\">5</option>\n            <option value=\"10\">10</option>\n            <option value=\"50\">50</option>\n          </select>\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:10px;\">\n          <button class=\"btn btn-primary\" data-action=\"hero-upgrade-level\" id=\"qa-hero-upgrade-level-btn\">升级</button>\n          <button class=\"btn btn-success\" data-action=\"hero-upgrade-order\" id=\"qa-hero-upgrade-order-btn\" disabled>进阶</button>\n        </div>\n        <div class=\"helper-text\" id=\"qa-hero-upgrade-tip\">选择武将后可进行升级/进阶操作</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">淬炼助手</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"quench-refresh\">刷新阵容</button>\n        " + _0x5a4f27 + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">白玉</span>\n          <span class=\"stat-value\" id=\"qa-jade-count\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">彩玉</span>\n          <span class=\"stat-value\" id=\"qa-color-jade-count\">--</span>\n        </div>\n      </div>\n      <div class=\"qa-hero-list\" id=\"qa-hero-list\">\n        <div class=\"qa-loading\">点击刷新加载阵容</div>\n      </div>\n      <div id=\"qa-equip-section\" style=\"display:none;\">\n        <div class=\"qa-equip-tabs\" id=\"qa-equip-tabs\"></div>\n      </div>\n      <div id=\"qa-quench-section\" style=\"display:none;\">\n        <div class=\"stats-row\" id=\"qa-equip-stats\"></div>\n        <div class=\"qa-slot-list\" id=\"qa-slot-list\"></div>\n        <div class=\"qa-actions\">\n          <button class=\"btn btn-primary\" id=\"qa-quench-once\" data-action=\"quench-once\">淬炼一次</button>\n          <button class=\"btn btn-success\" id=\"qa-quench-continuous\" data-action=\"quench-continuous\">连续淬炼</button>\n          <button class=\"btn btn-danger\" id=\"qa-quench-stop\" data-action=\"quench-stop\" style=\"display:none;\">停止</button>\n          <div class=\"qa-count-display\">\n            <button class=\"btn btn-secondary btn-small\" data-action=\"quench-reset\">清零</button>\n            已淬炼: <strong id=\"qa-quench-count\">0</strong>\n          </div>\n        </div>\n\n        <div style=\"height:10px;\"></div>\n        <div class=\"helper-text\" style=\"margin:0 0 8px;\">自动淬炼（达标自动停止）</div>\n        <div class=\"qa-target-list\" id=\"qa-target-list\" style=\"margin-bottom:8px;\">\n          <div class=\"qa-target-row\">\n            <span class=\"form-label\">属性</span>\n            <select class=\"select qa-target-attr\" style=\"width:160px;\">\n              " + _0x18a571() + "\n            </select>\n            <span class=\"form-label\">数值</span>\n            <input class=\"input qa-target-value\" type=\"number\" value=\"\" min=\"1\" placeholder=\"如 80\" inputmode=\"numeric\" style=\"width:80px;\">\n            <button class=\"btn btn-secondary btn-small\" data-action=\"auto-target-remove\" disabled>删除</button>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n          <button class=\"btn btn-secondary btn-small\" data-action=\"auto-target-add\">新增属性</button>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-warning\" id=\"qa-auto-start\" data-action=\"auto-start\">自动淬炼</button>\n          <button class=\"btn btn-danger\" id=\"qa-auto-stop\" data-action=\"auto-stop\" style=\"display:none;\">停止自动</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">升星助手</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"star-upgrade\">一键升星</button>\n      </div>\n    </div>\n  </div>\n";
  const _0x366e35 = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">巅峰榜</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"top-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"top-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-top-rank-content\">\n        <div class=\"helper-text\">点击\"查询\"加载巅峰榜数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">五百服Top俱乐部</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"club-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"club-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-club-rank-content\">\n        <div class=\"helper-text\">点击\"查询\"加载俱乐部榜数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">黄金积分俱乐部总览</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <div class=\"radio-group\" style=\"display:flex;gap:4px;flex-wrap:wrap;\">\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold1\" checked data-action=\"gold-rank-group-1\">\n            <span>1-100</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold2\" data-action=\"gold-rank-group-2\">\n            <span>101-200</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold3\" data-action=\"gold-rank-group-3\">\n            <span>201-300</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold4\" data-action=\"gold-rank-group-4\">\n            <span>301-400</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold5\" data-action=\"gold-rank-group-5\">\n            <span>401-500</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"gold-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"gold-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-gold-rank-content\">\n        <div class=\"helper-text\">选择排名范围后点击\"查询\"加载黄金积分榜数据</div>\n      </div>\n    </div>\n  </div>\n";
  const _0x360538 = () => "\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">版本信息</span>\n      <div style=\"display:flex;gap:6px;\">\n        <button class=\"btn btn-primary btn-small\" data-action=\"check-update\" id=\"qa-check-update-btn\" style=\"font-size:11px;padding:4px 8px;\">检查更新</button>\n        <button class=\"btn btn-success btn-small\" data-action=\"do-update\" id=\"qa-do-update-btn\" style=\"display:none;font-size:11px;padding:4px 8px;\">立即更新</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">当前版本</span>\n          <span class=\"stat-value\" id=\"qa-current-version\">v" + _0x45f1ef + "</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">最新版本</span>\n          <span class=\"stat-value\" id=\"qa-latest-version\">--</span>\n        </div>\n      </div>\n      <div class=\"helper-text\" id=\"qa-update-status\">点击检查更新获取最新版本信息</div>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-header\"><span class=\"card-title\">更新日志</span></div>\n    <div class=\"card-body\" style=\"padding:0;\">\n      <div class=\"changelog-list\" style=\"padding:16px;\">\n\n        <div class=\"changelog-version\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#007AFF;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.2.1</span>\n            <span style=\"padding:2px 6px;border-radius:4px;font-size:10px;background:#007AFF;color:#fff;\">最新</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2025-12-30</span>\n            " + _0x5a4f27 + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">📋 日常任务</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>当前阵容查看与切换</li>\n              <li>每日任务一键补差（分享、好友、招募、挂机、点金、宝箱、黑市、竞技场、俱乐部BOSS、每日BOSS、盐罐、珍宝阁、签到、钓鱼、邮件、灯神、深海、扫荡券）</li>\n              <li>每日任务执行情况查看</li>\n              <li>挂机加钟与奖励领取</li>\n              <li>盐罐机器人状态监控</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🏠 俱乐部</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>俱乐部信息查看与签到</li>\n              <li>疯狂赛车智能发车与一键收车</li>\n              <li>盐场匹配详情查询与导出</li>\n              <li>盐场战绩查询与导出</li>\n              <li>俱乐部历史战绩查询</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🎯 活动助手</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>每周答题自动答题</li>\n              <li>消耗活动监控与道具使用</li>\n              <li>月度任务补差（钓鱼/竞技场进度追踪）</li>\n              <li>咸王宝库自动攻打与奖励领取</li>\n              <li>换皮闯关BOSS挑战</li>\n              <li>月度竞猜自动投注</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 工具箱</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>宝箱助手批量开启与积分领取</li>\n              <li>钓鱼助手批量钓鱼</li>\n              <li>竞技场助手自动战斗</li>\n              <li>武将升级与进阶</li>\n              <li>淬炼助手（锁定孔位、连续淬炼、自动淬炼达标停止）</li>\n              <li>升星助手一键升星</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🏆 榜单</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>巅峰榜查询与导出</li>\n              <li>五百服Top俱乐部榜查询</li>\n              <li>黄金积分俱乐部总览（分段查询）</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">⚡ 切磋</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>目标玩家信息查询</li>\n              <li>批量切磋与胜率统计</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.0.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2024-12-01</span>\n            " + _0x5a4f27 + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>全新 UI 界面设计，支持亮色/暗色主题切换</li>\n              <li>新增悬浮球拖动与长按切换主题</li>\n              <li>新增菜单栏滑动切换页面</li>\n              <li>优化淬炼助手功能，支持自动淬炼达标停止</li>\n              <li>新增武将升级与进阶功能</li>\n              <li>新增竞技场助手自动战斗</li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n";
  const _0x53aca5 = () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">切磋功能</span>" + _0x5a4f27 + "</div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <span class=\"form-label\">目标ID</span>\n        <input class=\"input\" id=\"qa-pvp-target\" type=\"text\" placeholder=\"输入目标角色ID\" style=\"width:150px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"pvp-query\">查询</button>\n        <span class=\"form-label\">次数</span>\n        <select class=\"input\" id=\"qa-pvp-count\" style=\"width:80px;\">\n          <option value=\"1\">1</option>\n          <option value=\"10\">10</option>\n          <option value=\"25\">25</option>\n          <option value=\"50\">50</option>\n        </select>\n        <button class=\"btn btn-primary\" data-action=\"pvp-start\">切磋</button>\n      </div>\n\n      <!-- 对手信息区域 -->\n      <div id=\"qa-pvp-target-info\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\">\n        <div class=\"pvp-target-header\" style=\"display:flex;align-items:center;gap:12px;margin-bottom:10px;\">\n          <div id=\"qa-pvp-target-avatar\" style=\"width:48px;height:48px;border-radius:50%;background:#e5e5e5;overflow:hidden;\">\n            <img id=\"qa-pvp-avatar-img\" style=\"width:100%;height:100%;object-fit:cover;display:none;\">\n          </div>\n          <div style=\"flex:1;\">\n            <div style=\"font-weight:bold;\" id=\"qa-pvp-target-name\">--</div>\n            <div style=\"font-size:12px;color:var(--text-secondary);\" id=\"qa-pvp-target-server\">--</div>\n          </div>\n        </div>\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">战力</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-power\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">红数</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-red\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">孔数</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-hole\" style=\"color:#34c759;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">玩具</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-weapon\">--</span>\n          </div>\n        </div>\n        <div style=\"margin-top:8px;font-size:12px;color:var(--text-secondary);\">\n          <span>俱乐部: <span id=\"qa-pvp-target-legion\">--</span></span>\n          <span style=\"margin-left:12px;\">历史最高战力: <span id=\"qa-pvp-target-max-power\">--</span></span>\n          <span style=\"margin-left:12px;\">俱乐部红淬: <span id=\"qa-pvp-target-legion-red\" style=\"color:#ff3b30;\">--</span></span>\n        </div>\n        <!-- 武将列表 -->\n        <div id=\"qa-pvp-hero-list\" style=\"display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;\"></div>\n      </div>\n\n      <!-- 战斗结果区域 -->\n      <div id=\"qa-pvp-result\" style=\"display:none;margin-top:12px;\">\n        <div class=\"stats-row\" style=\"background:var(--card-bg);padding:10px;border-radius:8px;margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">胜率</span>\n            <span class=\"stat-value\" id=\"qa-pvp-win-rate\" style=\"color:#34c759;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">掉将率</span>\n            <span class=\"stat-value\" id=\"qa-pvp-die-rate\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">总场次</span>\n            <span class=\"stat-value\" id=\"qa-pvp-total\">--</span>\n          </div>\n        </div>\n        <div id=\"qa-pvp-battles\" style=\"max-height:300px;overflow-y:auto;\"></div>\n      </div>\n\n      <div class=\"helper-text\" id=\"qa-pvp-status\">输入目标ID后点击查询或切磋</div>\n    </div>\n  </div>\n";
  const _0x4ecc3d = {
    daily: _0xfafa22,
    club: _0x22595d,
    activity: _0x2cd8dc,
    toolbox: _0x529779,
    rank: _0x366e35,
    spar: _0x53aca5,
    changelog: _0x360538
  };
  const _0x34ce86 = () => _0x5ebc1b.map(_0x2d4a7d => "\n  <div class=\"page-content " + (_0x2d4a7d === _0x66e475 ? "active" : "") + "\" id=\"page-" + _0x2d4a7d + "\">\n    " + (_0x4ecc3d[_0x2d4a7d] ? _0x4ecc3d[_0x2d4a7d]() : "<div class=\"card\"><div class=\"card-body\">暂无内容</div></div>") + "\n  </div>\n").join("");
  let _0x19f548 = null;
  const _0x166508 = (_0x480520, _0x26d918 = "info", _0x1f3aa6 = 2000) => {
    {
      if (!_0x19f548) {
        _0x19f548 = document.createElement("div");
        _0x19f548.className = "qa-toast";
        document.body.appendChild(_0x19f548);
      }
      _0x19f548.textContent = _0x480520;
      _0x19f548.className = "qa-toast show " + _0x26d918;
      setTimeout(() => {
        _0x19f548.classList.remove("show");
      }, _0x1f3aa6);
    }
  };
  const _0x3c5712 = (_0x58b5f4, _0x37b4d9, _0x3e6ef7) => {
    if (!_0x58b5f4) {
      return;
    }
    const _0x455557 = document.getElementById("qa-result-" + _0x58b5f4);
    if (!_0x455557) {
      return;
    }
    const _0x297c65 = new Date().toLocaleTimeString();
    const _0x11d39b = _0x453ceb => {
      {
        try {
          {
            return JSON.stringify(_0x453ceb, null, 2);
          }
        } catch {
          {
            return String(_0x453ceb);
          }
        }
      }
    };
    _0x455557.textContent = "【" + _0x297c65 + "】" + (_0x37b4d9 || "返回数据") + "\n" + _0x11d39b(_0x3e6ef7);
  };
  const _0x4d3d90 = _0x34cebe => {
    const _0x90c8a = document.getElementById("qa-result-" + _0x34cebe);
    if (_0x90c8a) {
      _0x90c8a.textContent = "暂无数据";
    }
  };
  const _0x1e921c = _0x4c0d5c => {
    const _0xfb2baf = Math.floor(Number(_0x4c0d5c) || 0);
    if (_0xfb2baf <= 0) {
      return "00:00:00";
    }
    const _0x2e1d0e = Math.floor(_0xfb2baf / 3600).toString().padStart(2, "0");
    const _0xec88fc = Math.floor(_0xfb2baf % 3600 / 60).toString().padStart(2, "0");
    const _0x171fe0 = (_0xfb2baf % 60).toString().padStart(2, "0");
    return _0x2e1d0e + ":" + _0xec88fc + ":" + _0x171fe0;
  };
  const _0x59c607 = _0x4865e4 => _0x5a3537[_0x4865e4]?.["name"] || "武将" + _0x4865e4;
  const _0x1dce1d = _0x4e79bf => new Promise(_0x181101 => setTimeout(_0x181101, _0x4e79bf));
  const _0x5f268c = (_0x1ea1c1, _0x1607b1 = 0) => {
    {
      const _0xf4024f = document.getElementById(_0x1ea1c1);
      const _0x3143e8 = Number(_0xf4024f?.["value"]);
      return Number.isFinite(_0x3143e8) ? _0x3143e8 : _0x1607b1;
    }
  };
  const _0x4cbf0b = _0x37403e => {
    {
      const _0x565917 = document.getElementById(_0x37403e);
      return Boolean(_0x565917 && _0x565917.checked);
    }
  };
  const _0x3c22fb = () => {
    const _0x3d8753 = document.createElement("canvas").getContext("webgl");
    let _0x3e104c = "";
    if (_0x3d8753) {
      const _0xf19345 = _0x3d8753.getExtension("WEBGL_debug_renderer_info");
      _0xf19345 && (_0x3e104c = _0x3d8753.getParameter(_0xf19345.UNMASKED_RENDERER_WEBGL));
    }
    const _0x7e89fb = [navigator.userAgent, _0x3e104c, navigator.hardwareConcurrency, navigator.deviceMemory].join("|");
    let _0x1263a4 = 0;
    for (let _0x9270fb = 0; _0x9270fb < _0x7e89fb.length; _0x9270fb++) {
      _0x1263a4 = (_0x1263a4 << 5) - _0x1263a4 + _0x7e89fb.charCodeAt(_0x9270fb);
      _0x1263a4 = _0x1263a4 & _0x1263a4;
    }
    return Math.abs(_0x1263a4).toString(36);
  };
  const _0x53ec78 = (_0x46900e, _0x1ed43a) => {
    const _0x2b3442 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (_0x2b3442) {
      const _0x25273c = _0x46900e.toDataURL("image/png");
      _0x2ad5cf(_0x25273c);
      return Promise.resolve();
    }
    return new Promise((_0x341c5a, _0x18bb3a) => {
      _0x46900e.toBlob(_0x115d65 => {
        if (!_0x115d65) {
          {
            _0x18bb3a(new Error("Canvas toBlob failed"));
            return;
          }
        }
        const _0x39ff46 = URL.createObjectURL(_0x115d65);
        if (typeof GM_download === "function") {
          GM_download({
            url: _0x39ff46,
            name: _0x1ed43a,
            saveAs: false,
            onload: () => {
              URL.revokeObjectURL(_0x39ff46);
              _0x341c5a();
            },
            onerror: () => {
              URL.revokeObjectURL(_0x39ff46);
              _0x2cc218(_0x39ff46, _0x1ed43a);
              _0x341c5a();
            }
          });
        } else {
          {
            _0x2cc218(_0x39ff46, _0x1ed43a);
            URL.revokeObjectURL(_0x39ff46);
            _0x341c5a();
          }
        }
      }, "image/png");
    });
  };
  const _0x2cc218 = (_0x125f2e, _0x164e5b) => {
    {
      const _0x3ffd73 = document.createElement("a");
      _0x3ffd73.href = _0x125f2e;
      _0x3ffd73.download = _0x164e5b;
      _0x3ffd73.style.display = "none";
      document.body.appendChild(_0x3ffd73);
      _0x3ffd73.click();
      document.body.removeChild(_0x3ffd73);
    }
  };
  const _0x2ad5cf = (_0x4e0ef1, _0x5875e4) => {
    const _0x147a56 = document.createElement("div");
    _0x147a56.style.cssText = "\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.85);\n    z-index: 999999;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    box-sizing: border-box;\n  ";
    const _0x3154f7 = document.createElement("div");
    _0x3154f7.style.cssText = "\n    color: #fff;\n    font-size: 16px;\n    margin-bottom: 15px;\n    text-align: center;\n    line-height: 1.5;\n  ";
    _0x3154f7.innerHTML = "长按图片保存到相册<br><span style=\"font-size: 12px; color: #aaa;\">若长按无效，可尝试截图保存</span>";
    const _0x3f3347 = document.createElement("div");
    _0x3f3347.style.cssText = "\n    max-width: 100%;\n    max-height: 65vh;\n    overflow: auto;\n    background: #fff;\n    border-radius: 8px;\n    padding: 5px;\n  ";
    const _0x5e2f58 = document.createElement("img");
    _0x5e2f58.src = _0x4e0ef1;
    _0x5e2f58.style.cssText = "\n    max-width: 100%;\n    display: block;\n    -webkit-touch-callout: default;\n    -webkit-user-select: auto;\n    user-select: auto;\n  ";
    const _0x52a694 = document.createElement("button");
    _0x52a694.textContent = "关闭";
    _0x52a694.style.cssText = "\n    margin-top: 15px;\n    padding: 12px 40px;\n    font-size: 16px;\n    background: #3b82f6;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n  ";
    const _0xe0f999 = () => {
      {
        document.body.removeChild(_0x147a56);
      }
    };
    _0x52a694.onclick = _0xe0f999;
    _0x147a56.onclick = _0x5644ea => {
      if (_0x5644ea.target === _0x147a56) {
        _0xe0f999();
      }
    };
    _0x3f3347.appendChild(_0x5e2f58);
    _0x147a56.appendChild(_0x3154f7);
    _0x147a56.appendChild(_0x3f3347);
    _0x147a56.appendChild(_0x52a694);
    document.body.appendChild(_0x147a56);
  };
  let _0x4d15c2 = 0;
  const _0x1612c0 = ["fight_startareaarena", "fight_startpvp", "fight_starttower", "fight_startboss", "fight_startlegionboss", "fight_startdungeon", "fight_startlevel"];
  function _0x9f770f(_0x43b802) {
    if (_0x43b802 === null || _0x43b802 === undefined) {
      return null;
    }
    const _0x15ef6a = typeof _0x43b802 === "string" ? Number(_0x43b802) : _0x43b802;
    return Number.isFinite(_0x15ef6a) ? _0x15ef6a : null;
  }
  function _0x281ebd(_0xc28a7d) {
    const _0x228b41 = [_0xc28a7d?.["ack"], _0xc28a7d?.["_ack"], _0xc28a7d?.["__qaAck"], _0xc28a7d?.["_qaAck"], window.__qaWsAck];
    for (const _0x43cbaa of _0x228b41) {
      const _0x4d488f = _0x9f770f(_0x43cbaa);
      if (_0x4d488f !== null && _0x4d488f >= 0) {
        return _0x4d488f;
      }
    }
    return 0;
  }
  function _0x358a12(_0x2da0ed) {
    {
      const _0x4711c2 = [_0x2da0ed?.["channel"], _0x2da0ed?.["_channel"], _0x2da0ed?.["enc"], _0x2da0ed?.["_enc"], _0x2da0ed?.["__enc"], _0x2da0ed?.["__channel"], window.h5websocket?.["channel"], window.h5websocket?.["enc"], window.h5websocket?.["ws"]?.["channel"], window.h5websocket?.["ws"]?.["enc"]];
      for (const _0x168929 of _0x4711c2) {
        if (typeof _0x168929 === "string" && _0x168929.trim()) {
          return _0x168929;
        }
      }
      return "auto";
    }
  }
  const _0x27f2c1 = () => {
    {
      const _0x3a9641 = [window.h5websocket?.["ws"], window.h5websocket, window.ws, window.gameWs, window.WebSocketClient];
      const _0x7932c2 = [];
      const _0x5aafe9 = new Set();
      for (const _0x1d1733 of _0x3a9641) {
        {
          if (!_0x1d1733) {
            continue;
          }
          if (_0x5aafe9.has(_0x1d1733)) {
            continue;
          }
          _0x5aafe9.add(_0x1d1733);
          _0x7932c2.push(_0x1d1733);
        }
      }
      for (const _0x53f89e of _0x7932c2) {
        if (_0x53f89e?.["sendAsync"]) {
          return _0x53f89e;
        }
      }
      for (const _0x51ff4c of _0x7932c2) {
        if (_0x51ff4c?.["send"]) {
          return _0x51ff4c;
        }
      }
      return null;
    }
  };
  const _0xb1beb7 = async (_0xfeeea, _0x5d4878 = {}) => {
    const _0xa1849 = _0x27f2c1();
    if (!_0xa1849) {
      {
        throw new Error("游戏WebSocket未连接，请确保在游戏页面中运行");
      }
    }
    let _0x300c39 = _0x5d4878;
    if (_0x1612c0.includes(_0xfeeea) && _0x3b7778?.["battleVersion"]) {
      {
        const _0x57e515 = {
          battleVersion: _0x3b7778.battleVersion,
          ..._0x5d4878
        };
        _0x300c39 = _0x57e515;
      }
    }
    const _0x3b23c2 = _0x281ebd(_0xa1849);
    const _0x42cca0 = _0xfeeea === "_sys/ack" || _0xfeeea === "heart_beat" ? 0 : ++_0x4d15c2;
    const _0x21a3c3 = window.g_utils?.["bon"]?.["encode"] ? {
      ack: _0x3b23c2,
      body: window.g_utils.bon.encode(_0x300c39),
      cmd: _0xfeeea,
      seq: _0x42cca0,
      time: Date.now()
    } : {
      ack: _0x3b23c2,
      cmd: _0xfeeea,
      params: _0x300c39,
      seq: _0x42cca0,
      time: Date.now()
    };
    if (_0xa1849.sendAsync) {
      const _0x2e3b98 = new Promise((_0x2af460, _0x164297) => {
        setTimeout(() => _0x164297(new Error("请求超时: " + _0xfeeea)), 10000);
      });
      const _0x5e6ad7 = await Promise.race([_0xa1849.sendAsync(_0x21a3c3), _0x2e3b98]);
      const _0x1c8750 = _0x9f770f(_0x5e6ad7?.["_raw"]?.["seq"] ?? _0x5e6ad7?.["seq"]);
      _0x1c8750 !== null && _0x1c8750 >= 0 && (window.__qaWsAck = _0x1c8750, _0xa1849.__qaAck = _0x1c8750);
      if (_0x5e6ad7?.["_rawData"]) {
        return _0x5e6ad7._rawData;
      }
      if (_0x5e6ad7?.["getData"]) {
        return _0x5e6ad7.getData();
      }
      if (_0x5e6ad7?.["body"] && typeof _0x5e6ad7.body === "object" && !ArrayBuffer.isView(_0x5e6ad7.body)) {
        return _0x5e6ad7.body;
      }
      return _0x5e6ad7;
    } else {
      if (_0xa1849.send) {
        if (window.g_utils?.["encode"]) {
          {
            try {
              {
                const _0x2e6441 = _0x358a12(_0xa1849);
                const _0x4926c3 = window.g_utils.encode(_0x21a3c3, _0x2e6441);
                _0xa1849.send(_0x4926c3);
                const _0xccccfe = {
                  success: true,
                  message: "已发送（binary）"
                };
                return _0xccccfe;
              }
            } catch (_0x1da736) {
              return {
                success: false,
                message: "发送失败（binary 编码失败）: " + (_0x1da736?.["message"] || String(_0x1da736))
              };
            }
          }
        }
        _0xa1849.send(JSON.stringify(_0x21a3c3));
        const _0x42ef8d = {
          success: true,
          message: "已发送（JSON，无响应确认）"
        };
        return _0x42ef8d;
      }
    }
    throw new Error("WebSocket不支持发送消息");
  };
  const _0x2ff785 = () => {
    try {
      const _0x2c0e43 = localStorage.getItem(_0x5acf8f);
      if (!_0x2c0e43) {
        return _0x3b7778.dailySettings = {};
      }
      _0x3b7778.dailySettings = JSON.parse(_0x2c0e43) || {};
      return _0x3b7778.dailySettings;
    } catch {
      _0x3b7778.dailySettings = {};
      return {};
    }
  };
  const _0x4da15b = () => {
    return Array.from(document.querySelectorAll("#page-daily input[data-task]:checked")).map(_0x249221 => _0x249221.getAttribute("data-task")).filter(Boolean);
  };
  const _0x27f714 = () => {
    {
      const _0x2d3a75 = document.getElementById("qa-daily-select-all");
      if (!_0x2d3a75) {
        return;
      }
      const _0x145a8f = () => {
        const _0x1df5e2 = document.querySelectorAll("#page-daily input[data-task]");
        const _0x41d412 = Array.from(_0x1df5e2).every(_0x3c7dc5 => _0x3c7dc5.checked);
        _0x2d3a75.checked = _0x41d412;
      };
      _0x2d3a75.addEventListener("change", () => {
        {
          const _0x383205 = document.querySelectorAll("#page-daily input[data-task]");
          _0x383205.forEach(_0x541142 => _0x541142.checked = _0x2d3a75.checked);
        }
      });
      const _0x342698 = document.querySelectorAll("#page-daily input[data-task]");
      _0x342698.forEach(_0x2cdf35 => {
        {
          _0x2cdf35.addEventListener("change", _0x145a8f);
        }
      });
      _0x145a8f();
    }
  };
  const _0x5b8e76 = _0x54e371 => {
    const _0x270b6e = document.getElementById("qa-daily-fix-progress");
    if (_0x270b6e) {
      _0x270b6e.textContent = _0x54e371 || "--";
    }
  };
  const _0x21c040 = _0x3b875c => {
    {
      if (!_0x3b875c) {
        return;
      }
      const _0xe57d26 = _0x3b875c["1022"]?.["quantity"] || 0;
      const _0x21e216 = document.getElementById("qa-jade-count");
      if (_0x21e216) {
        _0x21e216.textContent = _0xe57d26.toLocaleString();
      }
      const _0x20e142 = document.getElementById("qa-jade-count-quench");
      if (_0x20e142) {
        _0x20e142.textContent = _0xe57d26.toLocaleString();
      }
      const _0x87200d = _0x3b875c["1023"]?.["quantity"] || 0;
      const _0x16f3b9 = document.getElementById("qa-color-jade-count");
      if (_0x16f3b9) {
        _0x16f3b9.textContent = _0x87200d.toLocaleString();
      }
      const _0x19d0da = document.getElementById("qa-color-jade-count-quench");
      if (_0x19d0da) {
        _0x19d0da.textContent = _0x87200d.toLocaleString();
      }
      const _0x29ec79 = {
        "2001": _0x3b875c["2001"]?.["quantity"] || 0,
        "2002": _0x3b875c["2002"]?.["quantity"] || 0,
        "2003": _0x3b875c["2003"]?.["quantity"] || 0,
        "2004": _0x3b875c["2004"]?.["quantity"] || 0
      };
      const _0x4b080a = _0x29ec79[2001] * 1 + _0x29ec79[2002] * 10 + _0x29ec79[2003] * 20 + _0x29ec79[2004] * 50;
      const _0x33f287 = document.getElementById("qa-box-total-points");
      if (_0x33f287) {
        _0x33f287.textContent = _0x4b080a.toLocaleString();
      }
      [2001, 2002, 2003, 2004].forEach(_0x20cf44 => {
        const _0x35cd3a = document.querySelector("[data-box-count-for=\"" + _0x20cf44 + "\"]");
        if (_0x35cd3a) {
          _0x35cd3a.textContent = String(_0x29ec79[_0x20cf44] ?? 0);
        }
      });
      const _0x3c6965 = document.getElementById("qa-box-count");
      const _0x1e332d = document.getElementById("qa-box-itemid");
      if (_0x1e332d && _0x3c6965) {
        {
          const _0x22d7e9 = Number(_0x1e332d.value) || 2001;
          const _0x508820 = _0x29ec79[_0x22d7e9] ?? 0;
          const _0x3b88dd = Math.max(_0x508820, 10);
          _0x3c6965.max = String(_0x3b88dd);
          const _0x1218cf = Number(_0x3c6965.value);
          if (Number.isFinite(_0x1218cf) && _0x1218cf > _0x3b88dd) {
            const _0xb7569d = Math.max(Math.floor(_0x3b88dd / 10) * 10, 10);
            _0x3c6965.value = String(_0xb7569d);
          }
        }
      }
      const _0x4ca443 = {
        "1": _0x3b875c["1011"]?.["quantity"] || 0,
        "2": _0x3b875c["1012"]?.["quantity"] || 0
      };
      [1, 2].forEach(_0x13ba8f => {
        const _0x26f571 = document.querySelector("[data-fish-count-for=\"" + _0x13ba8f + "\"]");
        if (_0x26f571) {
          _0x26f571.textContent = String(_0x4ca443[_0x13ba8f] ?? 0);
        }
      });
      const _0x4e57e6 = document.getElementById("qa-fish-count");
      const _0x3f4784 = document.getElementById("qa-fish-type");
      if (_0x3f4784 && _0x4e57e6) {
        const _0x500a9c = Number(_0x3f4784.value) || 1;
        const _0x184f78 = _0x4ca443[_0x500a9c] ?? 0;
        const _0x52087d = Math.max(_0x184f78, 10);
        _0x4e57e6.max = String(_0x52087d);
        const _0x134157 = Number(_0x4e57e6.value);
        if (Number.isFinite(_0x134157) && _0x134157 > _0x52087d) {
          {
            const _0x1aa68c = Math.max(Math.floor(_0x52087d / 10) * 10, 10);
            _0x4e57e6.value = String(_0x1aa68c);
          }
        }
      }
    }
  };
  const _0x2034e1 = _0x89b8d8 => {
    _0x756056(_0x89b8d8);
  };
  const _0x756056 = _0x216c5d => {
    const _0x16508e = document.getElementById("qa-daily-detail");
    if (!_0x16508e) {
      return;
    }
    const _0x400ec5 = _0x216c5d?.["dailyTask"] || _0x216c5d?.["daily"] || {};
    const _0x1558c7 = _0x400ec5.complete || {};
    const _0x1ff867 = Object.keys(_0x1558c7 || {});
    if (_0x1ff867.length === 0) {
      {
        _0x16508e.innerHTML = "<div class=\"helper-text\">暂无任务数据</div>";
        return;
      }
    }
    _0x1ff867.sort((_0x3ca657, _0x417888) => Number(_0x3ca657) - Number(_0x417888));
    _0x16508e.innerHTML = "<div class=\"task-grid\">\n    " + _0x1ff867.map(_0x3c36e2 => {
      {
        const _0x3b0eaa = _0x1558c7[_0x3c36e2] === -1 || _0x1558c7[_0x3c36e2] === true;
        const _0x36911c = _0x572c83[_0x3c36e2] || "任务" + _0x3c36e2;
        return "<div class=\"task-check " + (_0x3b0eaa ? "done" : "") + "\">\n        <span>#" + _0x3c36e2 + " " + _0x36911c + "</span>\n        <span class=\"task-status\">" + (_0x3b0eaa ? "已完成" : "未完成") + "</span>\n      </div>";
      }
    }).join("") + "\n  </div>";
  };
  const _0x50777c = "岚山";
  const _0x166a09 = 20;
  const _0xcfe06 = () => document.getElementById("qa-watermark");
  const _0x49d676 = _0x329197 => {
    const _0x4022a5 = String(_0x329197).trim() || _0x50777c;
    let _0x4b6fc8 = "<div class=\"qa-watermark-pattern\">";
    for (let _0x36267c = 0; _0x36267c < _0x166a09; _0x36267c++) {
      _0x4b6fc8 += "<span class=\"qa-watermark-item\">" + _0x4022a5 + "</span>";
    }
    _0x4b6fc8 += "</div>";
    const _0x1d90cf = {
      safe: _0x4022a5,
      patternHtml: _0x4b6fc8
    };
    return _0x1d90cf;
  };
  const _0x462496 = _0x87d98b => {
    const _0x1b9d0b = _0xcfe06();
    if (!_0x1b9d0b) {
      return;
    }
    const {
      safe: _0x5a505e,
      patternHtml: _0x416f94
    } = _0x49d676(_0x87d98b);
    _0x1b9d0b.setAttribute("data-text", _0x5a505e);
    _0x1b9d0b.innerHTML = _0x416f94;
  };
  const _0x261390 = () => {
    {
      const _0x2e6a02 = _0x3b7778?.["roleId"];
      _0x462496(_0x2e6a02 || _0x50777c);
    }
  };
  const _0x2df2cd = () => {
    {
      const _0x35bff2 = _0xcfe06();
      if (!_0x35bff2) {
        return;
      }
      if (_0x35bff2.dataset.inited === "1") {
        return;
      }
      _0x35bff2.dataset.inited = "1";
      _0x261390();
    }
  };
  const _0x4d2291 = async (_0x32a135, _0xd0e935) => {
    {
      if (!_0x3b7778.selectedHeroId || !_0x3b7778.selectedPart) {
        {
          return;
        }
      }
      try {
        const _0xefc089 = {
          heroId: _0x3b7778.selectedHeroId,
          part: _0x3b7778.selectedPart,
          slot: _0x32a135,
          isLocked: _0xd0e935
        };
        const _0x3ad92e = await _0xb1beb7("equipment_updatequenchlock", _0xefc089);
        if (_0x3ad92e?.["success"] === false) {
          throw new Error(_0x3ad92e?.["message"] || "锁定失败");
        }
        if (_0xd0e935) {
          {
            if (!_0x3b7778.lockedSlots.includes(_0x32a135)) {
              _0x3b7778.lockedSlots.push(_0x32a135);
            }
          }
        } else {
          _0x3b7778.lockedSlots = _0x3b7778.lockedSlots.filter(_0x4344b8 => _0x4344b8 !== _0x32a135);
        }
        const _0x1ac7f6 = document.querySelector(".qa-slot-item[data-quench-id=\"" + _0x32a135 + "\"]");
        if (_0x1ac7f6) {
          _0x1ac7f6.classList.toggle("locked", _0xd0e935);
        }
      } catch (_0x173902) {}
    }
  };
  let _0x42d8da = null;
  let _0x4c109f = false;
  const _0x2c43b0 = () => {
    {
      _0x42d8da && (clearInterval(_0x42d8da), _0x42d8da = null);
      const _0x18c590 = document.getElementById("qa-panel");
      if (_0x18c590) {
        _0x18c590.style.display = "none";
      }
      _0x166508("您的账号已被冻结，脚本已停止运行", "error", 0);
    }
  };
  const _0x333a07 = async () => {
    try {
      const _0x516579 = _0x3c22fb();
      const _0x4f89fa = _0x3b7778.roleId;
      if (!_0x4f89fa) {
        _0x166508("[Auth] 角色ID未获取", "warning", 5000);
        return true;
      }
      const _0x191d75 = {
        userAgent: navigator.userAgent,
        language: navigator.language
      };
      _0x166508("[Auth] 验证中... roleId: " + _0x4f89fa, "info", 5000);
      console.log("[Auth] 开始验证，API地址:", _0x47bea7 + "/device-auth/verify");
      const _0x182c7a = {
        "Content-Type": "application/json"
      };
      const _0x4f5d22 = {
        fingerprint: _0x516579,
        roleId: _0x4f89fa,
        deviceInfo: _0x191d75
      };
      const _0x4b3eb5 = await fetch(_0x47bea7 + "/device-auth/verify", {
        method: "POST",
        headers: _0x182c7a,
        body: JSON.stringify(_0x4f5d22)
      });
      console.log("[Auth] 响应状态:", _0x4b3eb5.status);
      const _0x177423 = await _0x4b3eb5.json();
      console.log("[Auth] 响应数据:", _0x177423);
      if (!_0x177423.success) {
        {
          if (_0x177423.code === "DEVICE_FROZEN") {
            _0x2c43b0();
            return false;
          }
          _0x166508("[Auth] 验证失败: " + _0x177423.error, "error", 7500);
          return false;
        }
      }
      localStorage.setItem(_0x4ac0d6, _0x177423.data.token);
      _0x166508("[Auth] 验证成功", "success", 5000);
      return true;
    } catch (_0x416778) {
      console.error("[Auth] 请求异常:", _0x416778);
      _0x166508("[Auth] 请求失败: " + _0x416778.message, "error", 7500);
      return true;
    }
  };
  const _0x3a6d65 = async () => {
    try {
      {
        const _0x224ad6 = localStorage.getItem(_0x4ac0d6);
        const _0x42a33b = _0x3b7778.roleId;
        const _0x46675b = _0x3c22fb();
        if (!_0x224ad6 || !_0x42a33b) {
          return;
        }
        const _0x3cf324 = {
          "Content-Type": "application/json"
        };
        const _0x2d320e = {
          token: _0x224ad6,
          roleId: _0x42a33b,
          fingerprint: _0x46675b
        };
        const _0x14d738 = await fetch(_0x47bea7 + "/device-auth/heartbeat", {
          method: "POST",
          headers: _0x3cf324,
          body: JSON.stringify(_0x2d320e)
        });
        const _0x4ddcbe = await _0x14d738.json();
        if (!_0x4ddcbe.success) {
          {
            if (_0x4ddcbe.code === "DEVICE_FROZEN") {
              {
                _0x2c43b0();
                return;
              }
            }
            return;
          }
        }
        localStorage.setItem(_0x4ac0d6, _0x4ddcbe.data.token);
      }
    } catch (_0x1e5a52) {}
  };
  const _0x3ae996 = () => {
    if (_0x42d8da) {
      return;
    }
    _0x42d8da = setInterval(_0x3a6d65, 1800000);
  };
  const _0x14579c = async () => {
    if (_0x4c109f) {
      {
        return true;
      }
    }
    const _0x56a73b = await _0x333a07();
    if (_0x56a73b) {
      {
        _0x4c109f = true;
        _0x3ae996();
      }
    }
    return _0x56a73b;
  };
  const _0x34dbfd = async (_0x5c3e90, _0x478074, _0x40be4f = {}, _0x54e669 = "") => {
    try {
      const _0x356dc8 = await _0xb1beb7(_0x478074, _0x40be4f);
      _0x3c5712(_0x5c3e90, _0x54e669 || _0x478074, _0x356dc8);
      return _0x356dc8;
    } catch (_0xb8dfd2) {
      throw _0xb8dfd2;
    }
  };
  const _0x332047 = async (_0x5dd3d2, _0x3d2528) => {
    for (const _0xb4690d of _0x3d2528) {
      try {
        await _0x34dbfd(_0x5dd3d2, _0xb4690d.cmd, _0xb4690d.params || {}, _0xb4690d.name || _0xb4690d.cmd);
        await _0x1dce1d(300);
      } catch (_0x2f8544) {}
    }
  };
  const _0x2c3e3a = async () => {
    const _0x13c645 = await _0xb1beb7("role_getroleinfo", {});
    const _0x2bcfc5 = _0x13c645?.["role"] || _0x13c645;
    _0x3b7778.roleInfo = _0x2bcfc5;
    _0x3b7778.items = _0x2bcfc5?.["items"] || {};
    _0x3b7778.roleId = _0x2bcfc5?.["id"] || _0x2bcfc5?.["roleId"] || _0x3b7778.roleId || null;
    _0x261390();
    _0x21c040(_0x3b7778.items);
    _0x2034e1(_0x2bcfc5);
    _0x3c5712("daily-tasks", "role_getroleinfo", _0x13c645);
    console.log("[Debug] roleId:", _0x3b7778.roleId);
    if (_0x3b7778.roleId) {
      {
        console.log("[Debug] 调用 initAuth()");
        _0x14579c();
      }
    } else {
      console.log("[Debug] roleId 为空，跳过认证");
    }
    return _0x2bcfc5;
  };
  const _0xc8c99c = async () => {
    {
      if (_0x3b7778.battleVersion) {
        return _0x3b7778.battleVersion;
      }
      try {
        const _0x2447a3 = await _0xb1beb7("fight_startlevel", {});
        const _0xeaafa = _0x2447a3?.["battleData"]?.["version"] || _0x2447a3?.["battleData"]?.["battleVersion"] || _0x2447a3?.["version"];
        if (_0xeaafa) {
          _0x3b7778.battleVersion = _0xeaafa;
        }
        return _0x3b7778.battleVersion;
      } catch (_0x356c02) {
        return null;
      }
    }
  };
  const _0x1d1874 = _0x51893b => {
    const _0x351d14 = _0x51893b?.["body"] || _0x51893b;
    if (!_0x351d14) {
      return null;
    }
    if (Array.isArray(_0x351d14)) {
      {
        const _0x36d8e2 = _0x351d14[0];
        return _0x36d8e2?.["roleId"] || _0x36d8e2?.["id"] || _0x36d8e2?.["targetId"];
      }
    }
    const _0x1a6243 = _0x351d14?.["rankList"]?.[0] || _0x351d14?.["roleList"]?.[0] || _0x351d14?.["targets"]?.[0] || _0x351d14?.["arenaTargets"]?.[0] || _0x351d14?.["targetList"]?.[0] || _0x351d14?.["list"]?.[0];
    if (_0x1a6243) {
      if (_0x1a6243.roleId) {
        return _0x1a6243.roleId;
      }
      if (_0x1a6243.id) {
        return _0x1a6243.id;
      }
      if (_0x1a6243.targetId) {
        return _0x1a6243.targetId;
      }
    }
    return _0x351d14?.["roleId"] || _0x351d14?.["id"] || _0x351d14?.["targetId"] || null;
  };
  const _0x448075 = _0x5cc782 => {
    {
      if (!_0x5cc782 || typeof _0x5cc782 !== "object") {
        return null;
      }
      if (typeof _0x5cc782.useTeamId === "number") {
        return _0x5cc782.useTeamId;
      }
      for (const _0x2778c2 of Object.keys(_0x5cc782)) {
        {
          const _0x54ea7c = _0x448075(_0x5cc782[_0x2778c2]);
          if (_0x54ea7c) {
            return _0x54ea7c;
          }
        }
      }
      return null;
    }
  };
  const _0x585944 = _0x452685 => {
    {
      const _0x23057d = {
        useTeamId: 1,
        teams: {}
      };
      if (!_0x452685) {
        return _0x23057d;
      }
      const _0x436a4d = _0x452685.presetTeamInfo ?? _0x452685;
      const _0x10d8b6 = _0x436a4d.useTeamId ?? _0x436a4d.presetTeamInfo?.["useTeamId"] ?? _0x448075(_0x436a4d) ?? 1;
      const _0x566558 = _0x436a4d.presetTeamInfo ?? _0x436a4d;
      const _0x465edc = {};
      const _0x3e29fc = Object.keys(_0x566558 || {}).filter(_0x403e4a => /^\d+$/.test(_0x403e4a));
      for (const _0x5b266d of _0x3e29fc) {
        {
          const _0x4c0335 = Number(_0x5b266d);
          const _0x166367 = _0x566558[_0x5b266d];
          if (!_0x166367) {
            const _0x175363 = {
              teamInfo: {}
            };
            _0x465edc[_0x4c0335] = _0x175363;
            continue;
          }
          if (_0x166367.teamInfo) {
            {
              const _0x334272 = {
                teamInfo: _0x166367.teamInfo
              };
              _0x465edc[_0x4c0335] = _0x334272;
            }
          } else {
            if (_0x166367.heroes) {
              const _0x3e4421 = {};
              _0x166367.heroes.forEach((_0x56559a, _0x2916df) => {
                _0x3e4421[String(_0x2916df + 1)] = _0x56559a;
              });
              const _0x4d6880 = {
                teamInfo: _0x3e4421
              };
              _0x465edc[_0x4c0335] = _0x4d6880;
            } else {
              if (typeof _0x166367 === "object") {
                const _0x5cb5e4 = Object.values(_0x166367).some(_0x15f521 => _0x15f521 && typeof _0x15f521 === "object" && "heroId" in _0x15f521);
                const _0x42f5e6 = {
                  teamInfo: _0x5cb5e4 ? _0x166367 : {}
                };
                _0x465edc[_0x4c0335] = _0x42f5e6;
              } else {
                const _0x214cf2 = {
                  teamInfo: {}
                };
                _0x465edc[_0x4c0335] = _0x214cf2;
              }
            }
          }
        }
      }
      return {
        useTeamId: Number(_0x10d8b6) || 1,
        teams: _0x465edc
      };
    }
  };
  const _0x131372 = async () => {
    const _0x2db4d5 = document.getElementById("qa-hero-list");
    _0x2db4d5.innerHTML = "<div class=\"qa-loading\">加载中...</div>";
    try {
      const [_0x281bda, _0x53f930] = await Promise.all([_0xb1beb7("presetteam_getinfo", {}), _0xb1beb7("role_getroleinfo", {})]);
      const _0x266f13 = {
        presetteam_getinfo: _0x281bda,
        role_getroleinfo: _0x53f930
      };
      _0x3c5712(_0x3b7778.activePage || "quench", "刷新阵容", _0x266f13);
      const _0x3ae262 = _0x585944(_0x281bda);
      const _0x25fb57 = _0x3ae262.useTeamId;
      const _0x40bfba = _0x3ae262.teams[_0x25fb57]?.["teamInfo"] || {};
      const _0xc2ed35 = _0x53f930?.["role"] || _0x53f930;
      const _0x15284f = _0xc2ed35?.["heroes"] || {};
      const _0x555529 = _0xc2ed35?.["items"] || {};
      _0x3b7778.roleInfo = _0xc2ed35;
      _0x3b7778.roleId = _0xc2ed35?.["id"] || _0xc2ed35?.["roleId"] || null;
      _0x261390();
      _0x21c040(_0x555529);
      _0x2034e1(_0xc2ed35);
      const _0x40def3 = [];
      for (const [_0x341cd4, _0x347568] of Object.entries(_0x40bfba)) {
        {
          const _0x274143 = _0x347568?.["heroId"] || _0x347568?.["id"];
          if (!_0x274143) {
            continue;
          }
          const _0x20828a = _0x15284f[String(_0x274143)] || {};
          _0x40def3.push({
            id: Number(_0x274143),
            name: _0x59c607(_0x274143),
            position: Number(_0x341cd4),
            level: _0x347568?.["level"] || _0x20828a?.["level"] || 1,
            equipment: _0x20828a?.["equipment"] || {}
          });
        }
      }
      if (_0x40def3.length === 0 && Object.keys(_0x15284f).length > 0) {
        for (const [_0x54b57f, _0x29d321] of Object.entries(_0x15284f)) {
          if (_0x29d321 && _0x29d321.equipment) {
            {
              _0x40def3.push({
                id: Number(_0x54b57f),
                name: _0x59c607(_0x54b57f),
                position: _0x40def3.length + 1,
                level: _0x29d321?.["level"] || 1,
                equipment: _0x29d321?.["equipment"] || {}
              });
            }
          }
        }
      }
      _0x40def3.sort((_0x22ddc8, _0x3f9eae) => _0x22ddc8.position - _0x3f9eae.position);
      _0x3b7778.heroes = _0x40def3;
      _0x3b7778.allHeroesData = _0x15284f;
      _0x3b7778.items = _0x555529;
      _0x487295(_0x40def3);
    } catch (_0xf31198) {
      _0x2db4d5.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">" + _0xf31198.message + "</div>";
    }
  };
  const _0x487295 = _0x4bcb91 => {
    {
      const _0x3db4b1 = document.getElementById("qa-hero-list");
      if (!_0x4bcb91 || _0x4bcb91.length === 0) {
        {
          _0x3db4b1.innerHTML = "<div class=\"qa-loading\">暂无阵容数据</div>";
          return;
        }
      }
      _0x3db4b1.innerHTML = _0x4bcb91.map(_0x20b1cc => "\n    <div class=\"qa-hero-item " + (_0x3b7778.selectedHeroId === _0x20b1cc.id ? "active" : "") + "\" data-hero-id=\"" + _0x20b1cc.id + "\">\n      " + _0x20b1cc.name + " Lv." + _0x20b1cc.level + "\n    </div>\n  ").join("");
      _0x3db4b1.querySelectorAll(".qa-hero-item").forEach(_0x4c926a => {
        _0x4c926a.addEventListener("click", () => _0x1c1488(Number(_0x4c926a.dataset.heroId)));
      });
    }
  };
  const _0x1c1488 = _0x1df924 => {
    {
      _0x3b7778.selectedHeroId = _0x1df924;
      _0x3b7778.selectedPart = null;
      _0x3b7778.lockedSlots = [];
      _0x3b7778.quenchCount = 0;
      const _0x231061 = document.getElementById("qa-quench-count");
      if (_0x231061) {
        _0x231061.textContent = "0";
      }
      document.querySelectorAll(".qa-hero-item").forEach(_0x4c8f80 => {
        {
          _0x4c8f80.classList.toggle("active", Number(_0x4c8f80.dataset.heroId) === _0x1df924);
        }
      });
      const _0x2deb23 = _0x3b7778.allHeroesData?.[String(_0x1df924)] || {};
      const _0xda349e = _0x2deb23.equipment || {};
      const _0x26f7b5 = document.getElementById("qa-equip-section");
      const _0x5cac36 = document.getElementById("qa-equip-tabs");
      const _0x3e4a55 = Object.keys(_0xda349e);
      if (_0x3e4a55.length === 0) {
        _0x26f7b5.style.display = "none";
        document.getElementById("qa-quench-section").style.display = "none";
        return;
      }
      _0x26f7b5.style.display = "block";
      _0x5cac36.innerHTML = _0x3e4a55.map(_0x3dc777 => {
        const _0x32fb53 = _0xda349e[_0x3dc777];
        return "\n      <div class=\"qa-equip-tab " + (_0x3b7778.selectedPart === Number(_0x3dc777) ? "active" : "") + "\" data-slot-id=\"" + _0x3dc777 + "\">\n        <div class=\"tab-name\">" + (["武器", "铠甲", "头冠", "坐骑"][_0x3dc777 - 1] || "装备" + _0x3dc777) + "</div>\n        <div class=\"tab-level\">Lv." + (_0x32fb53?.["level"] || 1) + "</div>\n      </div>\n    ";
      }).join("");
      _0x5cac36.querySelectorAll(".qa-equip-tab").forEach(_0x95bfe3 => {
        _0x95bfe3.addEventListener("click", () => _0x36858e(Number(_0x95bfe3.dataset.slotId)));
      });
      if (_0x3e4a55.length > 0) {
        _0x36858e(Number(_0x3e4a55[0]));
      }
    }
  };
  const _0x36858e = _0x32d08e => {
    _0x3b7778.selectedPart = _0x32d08e;
    document.querySelectorAll(".qa-equip-tab").forEach(_0x53b5a9 => {
      {
        _0x53b5a9.classList.toggle("active", Number(_0x53b5a9.dataset.slotId) === _0x32d08e);
      }
    });
    const _0x5ef07c = _0x3b7778.allHeroesData?.[String(_0x3b7778.selectedHeroId)] || {};
    const _0x417196 = _0x5ef07c.equipment?.[String(_0x32d08e)] || {};
    const _0x423dbf = _0x417196.quenches || {};
    _0x3b7778.lockedSlots = [];
    for (const [_0x53a4a5, _0x35f287] of Object.entries(_0x423dbf)) {
      const _0x12ca27 = _0x35f287.isLocked || _0x35f287.locked;
      if (_0x12ca27) {
        _0x3b7778.lockedSlots.push(Number(_0x53a4a5));
      }
    }
    document.getElementById("qa-quench-section").style.display = "block";
    const _0xd165fc = document.getElementById("qa-quench-times");
    if (_0xd165fc) {
      _0xd165fc.textContent = (_0x417196.quenchTimes || 0) + "次";
    }
    const _0x35a617 = document.getElementById("qa-equip-stats");
    const _0xae8005 = ["攻击", "血量", "防御", "血量"][_0x32d08e - 1] || "加成";
    const _0x106f9c = _0x32d08e === 1 ? "quenchAttackExt" : _0x32d08e === 3 ? "quenchDefenseExt" : "quenchHpExt";
    const _0x507fde = _0x417196[_0x106f9c] || 0;
    _0x35a617 && (_0x35a617.innerHTML = "\n      <div class=\"stat-item\">\n        <span class=\"stat-label\">" + _0xae8005 + "加成</span>\n        <span class=\"stat-value\">+" + _0x507fde + "</span>\n      </div>\n    ");
    _0x49d065(_0x423dbf);
  };
  const _0x49d065 = _0x4d1190 => {
    const _0x8de655 = document.getElementById("qa-slot-list");
    const _0x26e27a = Object.keys(_0x4d1190).sort((_0x489eb1, _0x153e07) => Number(_0x489eb1) - Number(_0x153e07));
    if (_0x26e27a.length === 0) {
      _0x8de655.innerHTML = "<div class=\"qa-loading\">暂无淬炼数据</div>";
      return;
    }
    const _0x4a8da3 = _0x31158b => {
      {
        if (_0x31158b >= 91) {
          return "#ff3b30";
        }
        if (_0x31158b >= 81) {
          return "#ff9500";
        }
        if (_0x31158b >= 61) {
          return "#af52de";
        }
        if (_0x31158b >= 41) {
          return "#007aff";
        }
        if (_0x31158b >= 21) {
          return "#34c759";
        }
        return "#8e8e93";
      }
    };
    _0x8de655.innerHTML = _0x26e27a.map(_0x366586 => {
      const _0x2e7be5 = _0x4d1190[_0x366586];
      const _0x234d66 = _0x2e7be5.isLocked || _0x2e7be5.locked;
      const _0x288d5b = _0x234d66 || _0x3b7778.lockedSlots.includes(Number(_0x366586));
      const _0x43f90b = _0x2e7be5.attrId ? _0x2e7be5.colorId ? _0x18ef91[String(_0x2e7be5.colorId)] || "#8e8e93" : _0x4a8da3(_0x2e7be5.attrNum || 0) : "#8e8e93";
      return "\n      <div class=\"qa-slot-item " + (_0x288d5b ? "locked" : "") + "\" data-quench-id=\"" + _0x366586 + "\">\n        <input type=\"checkbox\" class=\"qa-slot-checkbox\" " + (_0x288d5b ? "checked" : "") + " data-quench-id=\"" + _0x366586 + "\">\n        <span class=\"qa-slot-label\">孔" + _0x366586 + "</span>\n        " + (_0x2e7be5.attrId ? "\n          <div class=\"qa-slot-attr\" style=\"color:" + _0x43f90b + "\">\n            <span>" + (_0x5a5436[String(_0x2e7be5.attrId)] || "属性" + _0x2e7be5.attrId) + "</span>\n            <span>+" + (_0x2e7be5.attrNum || 0) + "</span>\n          </div>\n        " : "<span class=\"qa-slot-empty\">未淬炼</span>") + "\n      </div>\n    ";
    }).join("");
    _0x8de655.querySelectorAll(".qa-slot-checkbox").forEach(_0x872a6c => {
      _0x872a6c.addEventListener("change", async _0x3d3514 => {
        await _0x4d2291(Number(_0x872a6c.dataset.quenchId), _0x3d3514.target.checked);
      });
    });
  };
  const _0xd1a580 = () => {
    const _0x23c3b8 = document.getElementById("qa-bottle-status");
    const _0x927a = document.getElementById("qa-bottle-time");
    const _0x11ac35 = document.getElementById("qa-bottle-restart-btn");
    if (_0x23c3b8) {
      _0x23c3b8.textContent = _0x3b7778.bottleIsRunning ? "运行中" : "已停止";
    }
    if (_0x927a) {
      _0x927a.textContent = _0x1e921c(_0x3b7778.bottleRemainingTime);
    }
    if (_0x11ac35) {
      _0x11ac35.textContent = _0x3b7778.bottleIsRunning ? "重启服务" : "启动服务";
    }
  };
  const _0x3b617d = _0x213a50 => {
    const _0x5b6491 = _0x213a50?.["bottleHelpers"] || _0x213a50?.["role"]?.["bottleHelpers"];
    if (!_0x5b6491) {
      return;
    }
    const _0x311385 = _0x5b6491.helperStopTime;
    if (_0x311385 && _0x311385 > 0) {
      const _0x529c34 = Math.floor(Date.now() / 1000);
      const _0x227747 = _0x311385 - _0x529c34;
      _0x3b7778.bottleRemainingTime = Math.max(0, _0x227747);
      _0x3b7778.bottleIsRunning = _0x227747 > 0;
      if (_0x3b7778.bottleIsRunning) {
        {
          _0x2b18cb();
        }
      }
    } else {
      _0x3b7778.bottleRemainingTime = 0;
      _0x3b7778.bottleIsRunning = false;
    }
    _0xd1a580();
  };
  const _0x2b18cb = () => {
    if (_0x3b7778.bottleTimer) {
      clearInterval(_0x3b7778.bottleTimer);
    }
    _0x3b7778.bottleTimer = setInterval(() => {
      _0x3b7778.bottleRemainingTime > 0 ? (_0x3b7778.bottleRemainingTime--, _0xd1a580()) : (clearInterval(_0x3b7778.bottleTimer), _0x3b7778.bottleTimer = null, _0x3b7778.bottleIsRunning = false, _0xd1a580());
    }, 1000);
  };
  const _0x2b5142 = () => {
    const _0x3dbb4d = document.getElementById("qa-hangup-elapsed");
    const _0x2b55f0 = document.getElementById("qa-hangup-time");
    if (_0x3dbb4d) {
      _0x3dbb4d.textContent = _0x1e921c(_0x3b7778.hangupElapsedTime || 0);
    }
    if (_0x2b55f0) {
      _0x2b55f0.textContent = _0x1e921c(_0x3b7778.hangupRemainingTime || 0);
    }
  };
  const _0x7a0167 = _0x3b8d0b => {
    const _0x5ea3e8 = _0x3b8d0b?.["hangUp"] || _0x3b8d0b?.["role"]?.["hangUp"];
    if (!_0x5ea3e8) {
      return;
    }
    const _0x1ad964 = Math.floor(Date.now() / 1000);
    const _0x2ac33d = _0x5ea3e8.lastTime || 0;
    const _0x34187d = _0x5ea3e8.hangUpTime || 0;
    const _0x4ac05b = _0x1ad964 - _0x2ac33d;
    if (_0x4ac05b <= _0x34187d) {
      _0x3b7778.hangupRemainingTime = Math.floor(_0x34187d - _0x4ac05b);
      _0x3b7778.hangupElapsedTime = Math.floor(_0x4ac05b);
    } else {
      {
        _0x3b7778.hangupRemainingTime = 0;
        _0x3b7778.hangupElapsedTime = _0x34187d;
      }
    }
    _0x3b7778.hangupRemainingTime > 0 && _0x3e2ca8();
    _0x2b5142();
  };
  const _0x3e2ca8 = () => {
    {
      if (_0x3b7778.hangupTimer) {
        clearInterval(_0x3b7778.hangupTimer);
      }
      _0x3b7778.hangupTimer = setInterval(() => {
        _0x3b7778.hangupRemainingTime > 0 ? (_0x3b7778.hangupRemainingTime--, _0x3b7778.hangupElapsedTime++, _0x2b5142()) : (clearInterval(_0x3b7778.hangupTimer), _0x3b7778.hangupTimer = null);
      }, 1000);
    }
  };
  const _0x184690 = () => {
    const _0x44e57a = document.getElementById("qa-tower-floor");
    const _0x273341 = document.getElementById("qa-tower-layer");
    const _0x4a65ee = document.getElementById("qa-tower-energy");
    const _0x3752ac = document.getElementById("qa-tower-status");
    const _0x5eb7dd = document.getElementById("qa-tower-win");
    const _0x5072d7 = document.getElementById("qa-tower-lose");
    const _0x36b49a = document.getElementById("qa-tower-rate");
    const _0x142c8e = document.getElementById("qa-tower-formation");
    if (_0x44e57a) {
      _0x44e57a.textContent = _0x3b7778.towerFloor || "--";
    }
    if (_0x273341) {
      _0x273341.textContent = _0x3b7778.towerLayer || "--";
    }
    if (_0x4a65ee) {
      _0x4a65ee.textContent = _0x3b7778.towerEnergy || "--";
    }
    if (_0x5eb7dd) {
      _0x5eb7dd.textContent = _0x3b7778.towerWinCount || 0;
    }
    if (_0x5072d7) {
      _0x5072d7.textContent = _0x3b7778.towerLoseCount || 0;
    }
    if (_0x36b49a) {
      const _0xa84bba = (_0x3b7778.towerWinCount || 0) + (_0x3b7778.towerLoseCount || 0);
      if (_0xa84bba > 0) {
        {
          const _0x5576a3 = (_0x3b7778.towerWinCount / _0xa84bba * 100).toFixed(1);
          _0x36b49a.textContent = _0x5576a3 + "%";
        }
      } else {
        _0x36b49a.textContent = "--";
      }
    }
    _0x142c8e && !_0x142c8e.dataset.userSet && (_0x142c8e.value = _0x3b7778.towerFormation || 1);
    _0x3752ac && (_0x3b7778.towerClimbing ? _0x3752ac.textContent = "爬塔进行中..." : _0x3752ac.textContent = "--");
  };
  const _0x12f1cf = _0xd129fd => {
    {
      const _0x41dec4 = _0xd129fd?.["tower"] || _0xd129fd?.["role"]?.["tower"] || _0xd129fd;
      if (!_0x41dec4) {
        return;
      }
      const _0x587f13 = _0x41dec4.id || 0;
      _0x3b7778.towerFloor = Math.floor(_0x587f13 / 10) + 1;
      _0x3b7778.towerLayer = _0x587f13 % 10 + 1;
      _0x3b7778.towerEnergy = _0x41dec4.energy || 0;
      _0x184690();
    }
  };
  const _0x130e24 = _0x2aa320 => {
    const _0x15b65e = document.getElementById("qa-tower-status");
    if (_0x15b65e) {
      _0x15b65e.textContent = _0x2aa320 || "--";
    }
  };
  const _0x3b4415 = async _0x59306e => {
    {
      try {
        {
          const _0x577342 = {
            formationId: _0x59306e
          };
          const _0x4b3870 = await _0xb1beb7("fight_switchformation", _0x577342);
          if (_0x4b3870?.["error"] || _0x4b3870?.["code"]) {
            throw new Error(_0x4b3870?.["msg"] || _0x4b3870?.["error"] || "切换阵容失败");
          }
          return true;
        }
      } catch (_0x3206e9) {
        return false;
      }
    }
  };
  const _0x3cebce = async () => {
    {
      try {
        const _0x582d10 = await _0xb1beb7("role_getroleinfo", {}, 8000);
        if (_0x582d10?.["role"]?.["tower"]) {
          {
            _0x12f1cf(_0x582d10);
          }
        }
        return _0x582d10;
      } catch (_0x2fc567) {
        {
          return null;
        }
      }
    }
  };
  const _0x11f222 = async () => {
    {
      const _0x247c15 = await _0xb1beb7("fight_starttower", {});
      if (_0x247c15?.["error"] || _0x247c15?.["code"]) {
        if (_0x247c15?.["code"] === 200400 || _0x247c15?.["msg"]?.["includes"]("200400")) {
          const _0xc16280 = {
            exhausted: true,
            error: "爬塔次数已用完"
          };
          return _0xc16280;
        }
        const _0x3b81ca = {
          error: _0x247c15?.["msg"] || _0x247c15?.["error"] || "未知错误"
        };
        return _0x3b81ca;
      }
      const _0x147769 = _0x247c15?.["role"]?.["tower"] || _0x247c15?.["tower"];
      const _0x17d342 = _0x247c15?.["isWin"] ?? _0x247c15?.["win"] ?? true;
      _0x147769?.["id"] || _0x3b7778.towerFloor * 10 + (_0x3b7778.towerLayer - 1);
      if (_0x147769) {
        {
          _0x12f1cf(_0x247c15);
        }
      }
      const _0x33acda = {
        success: _0x17d342,
        tower: _0x147769,
        result: _0x247c15
      };
      return _0x33acda;
    }
  };
  const _0x55cf71 = async () => {
    {
      if (_0x3b7778.towerClimbing) {
        return;
      }
      _0x3b7778.towerClimbing = true;
      _0x3b7778.towerStopFlag = false;
      _0x3b7778.towerWinCount = 0;
      _0x3b7778.towerLoseCount = 0;
      const _0x5cd4d5 = document.getElementById("qa-tower-loop-btn");
      const _0x102836 = document.getElementById("qa-tower-stop-btn");
      if (_0x5cd4d5) {
        _0x5cd4d5.style.display = "none";
      }
      if (_0x102836) {
        _0x102836.style.display = "inline-block";
      }
      _0x184690();
      const _0x573a4a = _0x3b7778.towerFormation || 1;
      await _0x3b4415(_0x573a4a);
      await _0x3cebce();
      const _0x3edd34 = _0x3b7778.towerFloor;
      const _0x34529b = _0x3b7778.towerLayer;
      let _0x4d6147 = 0;
      const _0x2ff667 = 100;
      let _0x4a4343 = 0;
      const _0x2c459c = 3;
      while (!_0x3b7778.towerStopFlag && _0x4d6147 < _0x2ff667) {
        if (_0x3b7778.towerEnergy <= 0) {
          _0x130e24("体力耗尽，停止爬塔");
          break;
        }
        try {
          {
            _0x4d6147++;
            _0x130e24("第 " + _0x4d6147 + " 次挑战中... (" + _0x3b7778.towerWinCount + "胜 " + _0x3b7778.towerLoseCount + "负)");
            const _0xcc917b = await _0x11f222();
            if (_0xcc917b.exhausted) {
              _0x130e24("爬塔次数已用完");
              break;
            }
            if (_0xcc917b.error) {
              {
                _0x4a4343++;
                _0x3b7778.towerLoseCount++;
                if (_0x4a4343 >= _0x2c459c) {
                  _0x130e24("连续失败" + _0x2c459c + "次，停止爬塔");
                  break;
                }
                _0x130e24("第 " + _0x4d6147 + " 次失败 (" + _0x4a4343 + "/" + _0x2c459c + ")");
                await _0x1dce1d(2000);
                continue;
              }
            }
            _0x4a4343 = 0;
            if (_0xcc917b.success) {
              {
                _0x3b7778.towerWinCount++;
              }
            } else {
              _0x3b7778.towerLoseCount++;
            }
            const _0xffbbc9 = _0x3b7778.towerFloor;
            const _0x5a35bf = _0x3b7778.towerLayer;
            _0x130e24("第 " + _0x4d6147 + " 次: " + (_0xcc917b.success ? "通关" : "失败") + " (" + _0xffbbc9 + "-" + _0x5a35bf + ") 胜" + _0x3b7778.towerWinCount + " 负" + _0x3b7778.towerLoseCount);
            const _0xe45cc1 = Math.floor(Math.random() * 1000) + 1500;
            await _0x1dce1d(_0xe45cc1);
            _0x4d6147 % 5 === 0 && (await _0x3cebce());
          }
        } catch (_0x3814ef) {
          _0x4a4343++;
          _0x3b7778.towerLoseCount++;
          if (_0x4a4343 >= _0x2c459c) {
            _0x130e24("连续失败" + _0x2c459c + "次，停止爬塔");
            break;
          }
          _0x2685c4("第 " + _0x4d6147 + " 次异常: " + _0x3814ef.message + " (" + _0x4a4343 + "/" + _0x2c459c + ")", "error");
          await _0x1dce1d(2000);
        }
      }
      _0x17fd44(_0x3edd34, _0x34529b);
    }
  };
  const _0x2685c4 = (_0x44b353, _0xac9512 = "error") => {
    const _0x506850 = document.getElementById("qa-tower-status");
    if (_0x506850) {
      _0x506850.textContent = _0x44b353;
    }
  };
  const _0x17fd44 = (_0x2a63f4 = null, _0xbcb4fd = null) => {
    {
      _0x3b7778.towerStopFlag = true;
      _0x3b7778.towerClimbing = false;
      const _0x99a39d = document.getElementById("qa-tower-loop-btn");
      const _0x264fe1 = document.getElementById("qa-tower-stop-btn");
      if (_0x99a39d) {
        _0x99a39d.style.display = "inline-block";
      }
      if (_0x264fe1) {
        _0x264fe1.style.display = "none";
      }
      _0x3b7778.towerFloor;
      _0x3b7778.towerLayer;
      _0x3b7778.towerWinCount;
      _0x3b7778.towerLoseCount;
      _0x130e24("--");
      _0x184690();
    }
  };
  const _0x2e09a4 = async () => {
    if (_0x3b7778.towerClimbing) {
      return;
    }
    const _0x240b2b = _0x3b7778.towerFormation || 1;
    await _0x3b4415(_0x240b2b);
    const _0x116821 = await _0x11f222();
    if (!_0x116821.exhausted) {
      if (!_0x116821.error) {}
    }
    await _0x3cebce();
  };
  const _0x248d08 = async () => {
    {
      try {
        {
          const _0x2fa123 = await _0xb1beb7("tower_claimreward", {}, 5000);
          if (!(_0x2fa123?.["error"] || _0x2fa123?.["code"])) {
            await _0x3cebce();
          }
        }
      } catch (_0x3656b3) {}
    }
  };
  const _0x4f9544 = async () => {
    if (!_0x3b7778.selectedHeroId || !_0x3b7778.selectedPart) {
      _0x166508("请先选择英雄和部位", "warning");
      return null;
    }
    if (_0x3b7778.selectedPart === 1) {
      {
        const _0x568c69 = _0x3b7778.allHeroesData?.[String(_0x3b7778.selectedHeroId)];
        const _0x5419b2 = _0x568c69?.["equipment"]?.["1"]?.["level"] || 0;
        if (_0x5419b2 < 4000) {
          {
            _0x166508("武器等级需达到4000级", "warning");
            return null;
          }
        }
      }
    }
    try {
      {
        const _0x7e4688 = {
          heroId: _0x3b7778.selectedHeroId,
          part: _0x3b7778.selectedPart,
          lockedSlot: _0x3b7778.lockedSlots
        };
        const _0x167bdd = await _0xb1beb7("equipment_quench", _0x7e4688);
        if (_0x167bdd?.["success"] === false) {
          throw new Error(_0x167bdd?.["message"] || "淬炼失败");
        }
        _0x3c5712("quench", "equipment_quench", _0x167bdd);
        _0x3b7778.quenchCount++;
        const _0x5bf6dd = document.getElementById("qa-quench-count");
        if (_0x5bf6dd) {
          _0x5bf6dd.textContent = _0x3b7778.quenchCount;
        }
        const _0x18a7f1 = _0x167bdd?.["body"] || _0x167bdd?.["_rawData"] || _0x167bdd;
        const _0x4b82b1 = _0x18a7f1?.["role"] || _0x18a7f1;
        if (_0x4b82b1?.["heroes"]) {
          const _0x13fd1f = _0x4b82b1.heroes[String(_0x3b7778.selectedHeroId)];
          if (_0x13fd1f?.["equipment"]) {
            if (_0x3b7778.allHeroesData) {
              const _0x19445c = _0x3b7778.allHeroesData[String(_0x3b7778.selectedHeroId)];
              if (_0x19445c) {
                for (const [_0x2bc804, _0x2c82f6] of Object.entries(_0x13fd1f.equipment)) {
                  {
                    if (_0x19445c.equipment?.[_0x2bc804]) {
                      if (_0x2c82f6?.["quenches"]) {
                        for (const [_0x450d2d, _0x35b745] of Object.entries(_0x2c82f6.quenches)) {
                          _0x19445c.equipment[_0x2bc804].quenches?.[_0x450d2d] ? _0x19445c.equipment[_0x2bc804].quenches[_0x450d2d] = {
                            ..._0x19445c.equipment[_0x2bc804].quenches[_0x450d2d],
                            ..._0x35b745
                          } : (!_0x19445c.equipment[_0x2bc804].quenches && (_0x19445c.equipment[_0x2bc804].quenches = {}), _0x19445c.equipment[_0x2bc804].quenches[_0x450d2d] = _0x35b745);
                        }
                      }
                      _0x2c82f6?.["quenchTimes"] !== undefined && (_0x19445c.equipment[_0x2bc804].quenchTimes = _0x2c82f6.quenchTimes);
                      _0x2c82f6?.["quenchAttackExt"] !== undefined && (_0x19445c.equipment[_0x2bc804].quenchAttackExt = _0x2c82f6.quenchAttackExt);
                      _0x2c82f6?.["quenchHpExt"] !== undefined && (_0x19445c.equipment[_0x2bc804].quenchHpExt = _0x2c82f6.quenchHpExt);
                      if (_0x2c82f6?.["quenchDefenseExt"] !== undefined) {
                        {
                          _0x19445c.equipment[_0x2bc804].quenchDefenseExt = _0x2c82f6.quenchDefenseExt;
                        }
                      }
                    }
                  }
                }
              }
            }
            const _0x404b7f = _0x3b7778.allHeroesData?.[String(_0x3b7778.selectedHeroId)];
            const _0x2caa5a = _0x404b7f?.["equipment"]?.[String(_0x3b7778.selectedPart)];
            if (_0x2caa5a?.["quenches"]) {
              _0x49d065(_0x2caa5a.quenches);
              const _0x196724 = document.getElementById("qa-equip-stats");
              const _0x2b2a69 = ["攻击", "血量", "防御", "血量"][_0x3b7778.selectedPart - 1] || "加成";
              const _0x46c227 = _0x3b7778.selectedPart === 1 ? "quenchAttackExt" : _0x3b7778.selectedPart === 3 ? "quenchDefenseExt" : "quenchHpExt";
              const _0x108d10 = _0x2caa5a[_0x46c227] || 0;
              if (_0x196724) {
                {
                  const _0x28aeee = _0x2caa5a.quenchTimes || 0;
                  _0x196724.innerHTML = ["<div class=\"stat-item\"><span class=\"stat-label\">" + _0x2b2a69 + "加成</span><span class=\"stat-value\">+" + _0x108d10 + "</span></div>", "<div class=\"stat-item\"><span class=\"stat-label\">淬炼次数</span><span class=\"stat-value\">" + _0x28aeee + "</span></div>"].join("");
                }
              }
            }
          }
        }
        _0x4b82b1?.["items"] && (_0x3b7778.items = _0x4b82b1.items, _0x21c040(_0x4b82b1.items));
        return _0x167bdd;
      }
    } catch (_0x1ff67d) {
      {
        _0x166508("淬炼失败: " + _0x1ff67d.message, "error");
        return null;
      }
    }
  };
  const _0x448652 = () => {
    const _0x2d0836 = _0x3b7778.allHeroesData?.[String(_0x3b7778.selectedHeroId)];
    const _0x32e0b9 = _0x2d0836?.["equipment"]?.[String(_0x3b7778.selectedPart)];
    if (!_0x32e0b9?.["quenches"]) {
      return false;
    }
    for (const _0xe423ad of Object.values(_0x32e0b9.quenches)) {
      if (_0xe423ad.colorId && _0xe423ad.colorId >= 5) {
        return true;
      }
    }
    return false;
  };
  const _0xd67bb4 = () => {
    {
      const _0x448b8c = document.getElementById("qa-target-list");
      if (!_0x448b8c) {
        return [];
      }
      const _0x28875f = Array.from(_0x448b8c.querySelectorAll(".qa-target-row"));
      const _0x4afd76 = [];
      for (const _0x536f17 of _0x28875f) {
        const _0xa664b4 = _0x536f17.querySelector(".qa-target-attr");
        const _0x38aa5a = _0x536f17.querySelector(".qa-target-value");
        const _0x29a0ff = Number(_0xa664b4?.["value"]);
        const _0x4a448f = Number(_0x38aa5a?.["value"]);
        if (!Number.isFinite(_0x29a0ff) || _0x29a0ff <= 0) {
          continue;
        }
        if (!Number.isFinite(_0x4a448f) || _0x4a448f <= 0) {
          continue;
        }
        const _0x3a030b = {
          attrId: _0x29a0ff,
          value: _0x4a448f
        };
        _0x4afd76.push(_0x3a030b);
      }
      const _0x52893b = new Map();
      for (const _0x36e5e6 of _0x4afd76) {
        const _0x2f8877 = _0x52893b.get(_0x36e5e6.attrId);
        _0x52893b.set(_0x36e5e6.attrId, _0x2f8877 ? Math.min(_0x2f8877, _0x36e5e6.value) : _0x36e5e6.value);
      }
      return Array.from(_0x52893b.entries()).map(([_0x35212c, _0x3f26ee]) => ({
        attrId: _0x35212c,
        value: _0x3f26ee
      }));
    }
  };
  const _0x416847 = _0x169170 => {
    {
      const _0x529f14 = document.querySelector("button[data-action=\"auto-target-add\"]");
      if (_0x529f14) {
        _0x529f14.disabled = _0x169170;
      }
      const _0x3d27a2 = document.getElementById("qa-target-list");
      if (!_0x3d27a2) {
        return;
      }
      for (const _0x45cd93 of _0x3d27a2.querySelectorAll("select, input, button[data-action=\"auto-target-remove\"]")) {
        _0x45cd93.disabled = _0x169170;
      }
    }
  };
  const _0x47fd0c = () => {
    const _0x5c45e2 = _0x3b7778.allHeroesData?.[String(_0x3b7778.selectedHeroId)];
    const _0x556d4d = _0x5c45e2?.["equipment"]?.[String(_0x3b7778.selectedPart)];
    if (!_0x556d4d?.["quenches"]) {
      return false;
    }
    const _0x341037 = Array.isArray(_0x3b7778.targetTargets) && _0x3b7778.targetTargets.length ? _0x3b7778.targetTargets : null;
    const _0x51453f = Array.isArray(_0x3b7778.targetAttrId) ? _0x3b7778.targetAttrId.map(_0x3c770e => Number(_0x3c770e)).filter(_0x5d2180 => Number.isFinite(_0x5d2180) && _0x5d2180 > 0) : [Number(_0x3b7778.targetAttrId)].filter(_0x2e238b => Number.isFinite(_0x2e238b) && _0x2e238b > 0);
    const _0x4579af = Number(_0x3b7778.targetAttrValue) || 0;
    const _0x7767c = _0x341037 ? _0x341037 : _0x51453f.length && _0x4579af ? _0x51453f.map(_0x478426 => ({
      attrId: _0x478426,
      value: _0x4579af
    })) : [];
    if (_0x7767c.length === 0) {
      return false;
    }
    const _0x38f0e3 = new Map();
    for (const _0x237bf3 of Object.values(_0x556d4d.quenches)) {
      {
        const _0x1dcd0a = Number(_0x237bf3.attrId);
        const _0x2ae404 = Number(_0x237bf3.attrNum) || 0;
        if (!_0x1dcd0a) {
          continue;
        }
        const _0x1716b1 = _0x38f0e3.get(_0x1dcd0a) || 0;
        if (_0x2ae404 > _0x1716b1) {
          _0x38f0e3.set(_0x1dcd0a, _0x2ae404);
        }
      }
    }
    for (const _0x2462a1 of _0x7767c) {
      const _0xc922cd = _0x38f0e3.get(Number(_0x2462a1.attrId)) || 0;
      if (_0xc922cd >= Number(_0x2462a1.value)) {
        return true;
      }
    }
    return false;
  };
  const _0x5a3e05 = () => {
    {
      if (_0x3b7778.continuousQuenching) {
        return;
      }
      if (_0x3b7778.autoQuenching) {
        {
          _0x166508("请先停止自动淬炼", "warning");
          return;
        }
      }
      _0x3b7778.continuousQuenching = true;
      document.getElementById("qa-quench-continuous").style.display = "none";
      document.getElementById("qa-quench-stop").style.display = "inline-block";
      document.getElementById("qa-quench-once").disabled = true;
      const _0x551a7a = document.getElementById("qa-auto-start");
      if (_0x551a7a) {
        _0x551a7a.disabled = true;
      }
      _0x166508("开始连续淬炼", "info");
      const _0x48532c = async () => {
        {
          if (!_0x3b7778.continuousQuenching) {
            return;
          }
          try {
            {
              const _0x10d2ff = await _0x4f9544();
              if (_0x10d2ff && _0x448652()) {
                _0x998a4f();
                _0x166508("已出橙色或以上属性，停止淬炼", "success");
                return;
              }
              const _0x1f8231 = Math.floor(Math.random() * 150) + 350;
              await new Promise(_0x17769c => setTimeout(_0x17769c, _0x1f8231));
              if (_0x3b7778.continuousQuenching) {
                _0x3b7778.continuousTimer = setTimeout(_0x48532c, 0);
              }
            }
          } catch (_0x422ef9) {
            _0x998a4f();
          }
        }
      };
      _0x48532c();
    }
  };
  const _0x998a4f = () => {
    _0x3b7778.continuousQuenching = false;
    _0x3b7778.continuousTimer && (clearTimeout(_0x3b7778.continuousTimer), _0x3b7778.continuousTimer = null);
    document.getElementById("qa-quench-continuous").style.display = "inline-block";
    document.getElementById("qa-quench-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    const _0x247de4 = document.getElementById("qa-auto-start");
    if (_0x247de4) {
      _0x247de4.disabled = false;
    }
    _0x166508("已停止连续淬炼", "info");
  };
  const _0xa3764 = () => {
    if (_0x3b7778.continuousQuenching) {
      _0x166508("请先停止连续淬炼", "warning");
      return;
    }
    const _0x2eff97 = _0xd67bb4();
    if (!_0x2eff97.length) {
      _0x166508("请先设置目标属性", "warning");
      return;
    }
    _0x3b7778.targetTargets = _0x2eff97;
    _0x3b7778.targetAttrId = null;
    _0x3b7778.targetAttrValue = null;
    _0x3b7778.autoQuenching = true;
    document.getElementById("qa-auto-start").style.display = "none";
    document.getElementById("qa-auto-stop").style.display = "inline-block";
    document.getElementById("qa-quench-once").disabled = true;
    document.getElementById("qa-quench-continuous").disabled = true;
    _0x416847(true);
    const _0x43e3a1 = _0x2eff97.map(_0x372ab4 => (_0x5a5436[String(_0x372ab4.attrId)] || "属性" + _0x372ab4.attrId) + " >= " + _0x372ab4.value).join(" 或 ");
    _0x166508("开始自动淬炼: " + _0x43e3a1, "info");
    const _0x3669a0 = async () => {
      if (!_0x3b7778.autoQuenching) {
        return;
      }
      try {
        const _0x6b00ab = await _0x4f9544();
        if (_0x6b00ab && _0x47fd0c()) {
          _0x2891ac();
          _0x166508("已达到目标属性，停止淬炼", "success");
          return;
        }
        const _0x526a2d = Math.floor(Math.random() * 150) + 350;
        await new Promise(_0x49fd2e => setTimeout(_0x49fd2e, _0x526a2d));
        if (_0x3b7778.autoQuenching) {
          _0x3b7778.autoTimer = setTimeout(_0x3669a0, 0);
        }
      } catch (_0x44a24c) {
        _0x2891ac();
      }
    };
    _0x3669a0();
  };
  const _0x2891ac = () => {
    _0x3b7778.autoQuenching = false;
    if (_0x3b7778.autoTimer) {
      {
        clearTimeout(_0x3b7778.autoTimer);
        _0x3b7778.autoTimer = null;
      }
    }
    document.getElementById("qa-auto-start").style.display = "inline-block";
    document.getElementById("qa-auto-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    document.getElementById("qa-quench-continuous").disabled = false;
    _0x416847(false);
    _0x166508("已停止自动淬炼", "info");
  };
  let _0x2b2ba6 = null;
  const _0x11e109 = _0x3cbee6 => {
    const _0x1884de = Number(_0x3cbee6 || 0);
    if (_0x1884de >= 1000000000000) {
      return (_0x1884de / 1000000000000).toFixed(2) + "兆";
    }
    if (_0x1884de >= 100000000) {
      return (_0x1884de / 100000000).toFixed(2) + "亿";
    }
    if (_0x1884de >= 10000) {
      return (_0x1884de / 10000).toFixed(2) + "万";
    }
    return String(_0x1884de);
  };
  const _0x550bc4 = _0x22977d => {
    {
      if (_0x22977d === 1) {
        return "团长";
      }
      if (_0x22977d === 2) {
        return "副团长";
      }
      return "成员";
    }
  };
  const _0x5dcf60 = _0x5a952b => {
    _0x2b2ba6 = _0x5a952b;
    const _0xbdc288 = document.getElementById("qa-club-content");
    const _0x3d1fc7 = document.getElementById("qa-club-status");
    if (!_0xbdc288) {
      return;
    }
    const _0x474020 = _0x5a952b?.["info"];
    if (!_0x474020) {
      _0xbdc288.innerHTML = "<div class=\"helper-text\">暂无俱乐部</div>";
      _0x3d1fc7 && (_0x3d1fc7.textContent = "未加入", _0x3d1fc7.className = "club-status-badge");
      return;
    }
    _0x3d1fc7 && (_0x3d1fc7.textContent = "已加入", _0x3d1fc7.className = "club-status-badge active");
    const _0x24ec34 = Object.values(_0x474020.members || {});
    _0x24ec34.find(_0x20ff55 => Number(_0x20ff55.roleId) === Number(_0x474020.leaderId));
    const _0xe8e704 = [..._0x24ec34].sort((_0x272345, _0x385052) => Number(_0x385052.power || _0x385052.custom?.["s_power"] || 0) - Number(_0x272345.power || _0x272345.custom?.["s_power"] || 0)).slice(0, 30);
    const _0xe3f09c = _0x11e109(_0x474020.power || 0);
    const _0x5994c4 = _0x24ec34.length;
    const _0x2a9f46 = _0x474020.redQuenchCnt || 0;
    const _0x3fb545 = _0x11e109(_0x474020.currentBoss?.["currentHP"] || 0);
    _0xbdc288.innerHTML = "\n    <div class=\"club-overview\">\n      <div class=\"club-header-row\">\n        <div class=\"club-avatar\">\n          <img src=\"" + (_0x474020.logo || "") + "\" onerror=\"this.style.display='none'\" alt=\"\">\n        </div>\n        <div class=\"club-meta\">\n          <div class=\"club-name\">" + (_0x474020.name || "未知俱乐部") + "</div>\n          <div class=\"club-sub\">ID " + (_0x474020.id || "-") + " · Lv." + (_0x474020.level || 1) + " · 服务器 " + ((_0x474020.serverId || 27) - 27) + "</div>\n        </div>\n      </div>\n      <div class=\"club-stats-grid\">\n        <div class=\"club-stat-item\"><div class=\"stat-label\">战力</div><div class=\"stat-value\">" + _0xe3f09c + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">成员数</div><div class=\"stat-value\">" + _0x5994c4 + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">红粹</div><div class=\"stat-value\">" + _0x2a9f46 + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">Boss血量</div><div class=\"stat-value\">" + _0x3fb545 + "</div></div>\n      </div>\n    </div>\n    <div class=\"club-members-section\">\n      <div class=\"section-title\">成员列表 (前30)</div>\n      <div class=\"club-members-list\" id=\"qa-club-members\">\n        " + _0xe8e704.map(_0x486d23 => "\n          <div class=\"member-row\">\n            <div class=\"member-left\">\n              <img src=\"" + (_0x486d23.headImg || "") + "\" onerror=\"this.style.display='none'\" class=\"member-avatar\">\n              <span class=\"member-name\">" + _0x486d23.name + "</span>\n            </div>\n            <div class=\"member-right\">\n              <span class=\"member-power\">" + _0x11e109(_0x486d23.power || _0x486d23.custom?.["s_power"] || 0) + "</span>\n              <span class=\"member-red\">" + (_0x486d23.custom?.["red_quench_cnt"] || 0) + "红</span>\n              <span class=\"member-job " + (_0x486d23.job === 1 ? "job-leader" : _0x486d23.job === 2 ? "job-vice" : "") + "\">" + _0x550bc4(_0x486d23.job) + "</span>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
  };
  const _0x406f28 = async () => {
    try {
      const _0x1e15ee = await _0xb1beb7("legion_getinfo", {});
      _0x5dcf60(_0x1e15ee);
      return _0x1e15ee;
    } catch (_0x4aa72e) {
      return null;
    }
  };
  const _0x4820af = async () => {
    {
      try {
        await _0xb1beb7("legion_signin", {});
      } catch (_0x256440) {}
    }
  };
  const _0x1879ac = async () => {
    {
      if (!_0x2b2ba6?.["info"]) {
        {
          return;
        }
      }
      const _0x24c2df = _0x2b2ba6.info;
      const _0x52abe9 = Object.values(_0x24c2df.members || {});
      const _0x42ef58 = [..._0x52abe9].sort((_0x4106f2, _0x10734d) => Number(_0x10734d.power || _0x10734d.custom?.["s_power"] || 0) - Number(_0x4106f2.power || _0x4106f2.custom?.["s_power"] || 0));
      const _0x578587 = document.createElement("canvas");
      const _0x28a0c1 = _0x578587.getContext("2d");
      const _0x2ced41 = 20;
      const _0x5a60fa = 32;
      const _0x217b65 = 100;
      const _0x2363e3 = ["排名", "昵称", "战力", "红粹", "职位"];
      const _0x5b4be3 = [60, 150, 120, 80, 80];
      const _0x456986 = _0x5b4be3.reduce((_0x581a10, _0x19a76f) => _0x581a10 + _0x19a76f, 0) + _0x2ced41 * 2;
      const _0x3ad287 = _0x217b65 + (_0x42ef58.length + 1) * _0x5a60fa + _0x2ced41 * 2;
      _0x578587.width = _0x456986;
      _0x578587.height = _0x3ad287;
      _0x28a0c1.fillStyle = "#ffffff";
      _0x28a0c1.fillRect(0, 0, _0x456986, _0x3ad287);
      _0x28a0c1.fillStyle = "#1f2937";
      _0x28a0c1.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x28a0c1.fillText(_0x24c2df.name || "俱乐部", _0x2ced41, _0x2ced41 + 24);
      _0x28a0c1.fillStyle = "#6b7280";
      _0x28a0c1.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x28a0c1.fillText("ID " + _0x24c2df.id + " · Lv." + _0x24c2df.level + " · 服务器 " + ((_0x24c2df.serverId || 27) - 27), _0x2ced41, _0x2ced41 + 48);
      _0x28a0c1.fillText("战力: " + _0x11e109(_0x24c2df.power || 0) + " | 成员: " + _0x52abe9.length + " | 红粹: " + (_0x24c2df.redQuenchCnt || 0), _0x2ced41, _0x2ced41 + 70);
      const _0x51bf1d = _0x217b65;
      _0x28a0c1.fillStyle = "#f3f4f6";
      _0x28a0c1.fillRect(_0x2ced41, _0x51bf1d, _0x456986 - _0x2ced41 * 2, _0x5a60fa);
      _0x28a0c1.fillStyle = "#374151";
      _0x28a0c1.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0x1e5beb = _0x2ced41;
      _0x2363e3.forEach((_0x277ec1, _0x5f190d) => {
        _0x28a0c1.fillText(_0x277ec1, _0x1e5beb + 8, _0x51bf1d + 21);
        _0x1e5beb += _0x5b4be3[_0x5f190d];
      });
      _0x28a0c1.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x42ef58.forEach((_0x50c9da, _0x631dd4) => {
        {
          const _0x4f6943 = _0x51bf1d + (_0x631dd4 + 1) * _0x5a60fa;
          _0x631dd4 % 2 === 1 && (_0x28a0c1.fillStyle = "#f9fafb", _0x28a0c1.fillRect(_0x2ced41, _0x4f6943, _0x456986 - _0x2ced41 * 2, _0x5a60fa));
          _0x28a0c1.fillStyle = "#1f2937";
          let _0x55b2d9 = _0x2ced41;
          _0x28a0c1.fillText(String(_0x631dd4 + 1), _0x55b2d9 + 8, _0x4f6943 + 21);
          _0x55b2d9 += _0x5b4be3[0];
          _0x28a0c1.fillText(_0x50c9da.name || "-", _0x55b2d9 + 8, _0x4f6943 + 21);
          _0x55b2d9 += _0x5b4be3[1];
          _0x28a0c1.fillText(_0x11e109(_0x50c9da.power || _0x50c9da.custom?.["s_power"] || 0), _0x55b2d9 + 8, _0x4f6943 + 21);
          _0x55b2d9 += _0x5b4be3[2];
          _0x28a0c1.fillStyle = "#ef4444";
          _0x28a0c1.fillText((_0x50c9da.custom?.["red_quench_cnt"] || 0) + "红", _0x55b2d9 + 8, _0x4f6943 + 21);
          _0x55b2d9 += _0x5b4be3[3];
          _0x28a0c1.fillStyle = _0x50c9da.job === 1 ? "#ef4444" : _0x50c9da.job === 2 ? "#ec4899" : "#3b82f6";
          _0x28a0c1.fillText(_0x550bc4(_0x50c9da.job), _0x55b2d9 + 8, _0x4f6943 + 21);
          _0x28a0c1.fillStyle = "#1f2937";
        }
      });
      _0x28a0c1.strokeStyle = "#e5e7eb";
      _0x28a0c1.lineWidth = 1;
      _0x28a0c1.strokeRect(_0x2ced41, _0x51bf1d, _0x456986 - _0x2ced41 * 2, (_0x42ef58.length + 1) * _0x5a60fa);
      await _0x53ec78(_0x578587, "俱乐部_" + _0x24c2df.name + "_" + new Date().toLocaleDateString() + ".png");
    }
  };
  const _0x305bc4 = {
    __proto__: null,
    clubSignIn: _0x4820af,
    exportClubImage: _0x1879ac,
    fetchClubInfo: _0x406f28,
    renderClubInfo: _0x5dcf60
  };
  var _0x506479 = Object.freeze(_0x305bc4);
  let _0x21ed1e = null;
  const _0xbc1954 = {};
  const _0x4e85b3 = () => {
    {
      const _0x15fb13 = new Date();
      const _0x216002 = _0x15fb13.getDay();
      return _0x216002 >= 1 && _0x216002 <= 3;
    }
  };
  const _0x4b44db = () => {
    const _0x472c04 = new Date();
    const _0x3b23ad = _0x472c04.getHours();
    return _0x3b23ad >= 6 && _0x3b23ad < 20;
  };
  const _0x8ddbd = () => {
    const _0x516a59 = new Date().getHours();
    if (_0x516a59 < 6) {
      return {
        ok: false,
        text: "未到6点"
      };
    }
    if (_0x516a59 >= 20) {
      return {
        ok: false,
        text: "已过20点"
      };
    }
    const _0x53be87 = {
      ok: true,
      text: "可发车"
    };
    return _0x53be87;
  };
  const _0x3acdec = () => {
    const _0x1f9a2a = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return _0x1f9a2a[new Date().getDay()];
  };
  const _0x16f8fe = 5;
  const _0x295503 = _0x17e463 => {
    if (!_0x17e463) {
      return false;
    }
    const _0xac3b48 = new Date();
    const _0x408cca = new Date(_0x17e463 * 1000);
    const _0x4639ef = new Date(_0xac3b48);
    _0x4639ef.setHours(_0x16f8fe, 0, 0, 0);
    _0xac3b48 < _0x4639ef && _0x4639ef.setDate(_0x4639ef.getDate() - 1);
    return _0x408cca >= _0x4639ef;
  };
  const _0x3e3e88 = () => {
    const _0x232b82 = _0x21ed1e?.["body"] || _0x21ed1e || {};
    const _0xa1a149 = _0x232b82.roleCar || _0x232b82.rolecar || {};
    const _0xb36a4b = Number(_0xa1a149.sendCnt || 0);
    const _0x19e8b0 = Number(_0xa1a149.sendCntResetTime || 0);
    if (_0x295503(_0x19e8b0)) {
      return _0xb36a4b;
    }
    return 0;
  };
  const _0x3d6c47 = () => _0x3e3e88() < 4;
  const _0x548c53 = "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"/></svg>";
  const _0xced3fc = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x1d2f94 = {
    "1": "#22c55e",
    "2": "#3b82f6",
    "3": "#a855f7",
    "4": "#f59e0b",
    "5": "#ef4444",
    "6": "#eab308"
  };
  const _0x546f16 = {
    type: 3,
    itemId: 3201,
    minValue: 10
  };
  const _0x257d51 = {
    type: 3,
    itemId: 1001,
    minValue: 10
  };
  const _0xc301a4 = {
    type: 3,
    itemId: 1022,
    minValue: 2000
  };
  const _0x330e82 = {
    type: 2,
    itemId: 0,
    minValue: 2000
  };
  const _0x7b6dd0 = {
    type: 3,
    itemId: 1023,
    minValue: 5
  };
  const _0xc2f737 = {
    type: 3,
    itemId: 1022,
    minValue: 2500
  };
  const _0x18b074 = {
    type: 3,
    itemId: 1001,
    minValue: 12
  };
  const _0x549f62 = [_0x546f16, _0x257d51, _0xc301a4, _0x330e82, _0x7b6dd0, _0xc2f737, _0x18b074];
  const _0xd5f0ff = {
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
    "10101": "四圣宝珠碎片"
  };
  const _0x205dd9 = _0x25d1c9 => {
    {
      if (!Array.isArray(_0x25d1c9)) {
        return false;
      }
      return _0x549f62.some(_0x5a2373 => _0x25d1c9.find(_0x2962b4 => _0x2962b4.type === _0x5a2373.type && (_0x5a2373.itemId === 0 || _0x2962b4.itemId === _0x5a2373.itemId) && Number(_0x2962b4.value || 0) >= _0x5a2373.minValue));
    }
  };
  const _0x325a0d = _0x33b97f => {
    {
      if (!Array.isArray(_0x33b97f) || _0x33b97f.length === 0) {
        return "-";
      }
      return _0x33b97f.map(_0x420be5 => {
        {
          const _0x491655 = _0x420be5.type || 0;
          const _0x34652f = _0x420be5.itemId || 0;
          const _0x3f8500 = _0x420be5.value || 0;
          if (_0x491655 === 1) {
            return "金币 x" + _0x3f8500.toLocaleString();
          }
          if (_0x491655 === 2) {
            return "金砖 x" + _0x3f8500.toLocaleString();
          }
          if (_0x491655 === 3) {
            {
              const _0x491df9 = _0xd5f0ff[_0x34652f] || "物品#" + _0x34652f;
              return _0x491df9 + " x" + _0x3f8500;
            }
          }
          return "类型" + _0x491655 + "#" + _0x34652f + " x" + _0x3f8500;
        }
      }).join("、");
    }
  };
  const _0x5367a8 = _0x49e49f => {
    const _0xbe44c2 = _0x49e49f || {};
    const _0x4221e5 = _0xbe44c2.body || _0xbe44c2;
    const _0x520603 = _0x4221e5.roleCar || _0x4221e5.rolecar || {};
    const _0x27e528 = _0x520603.carDataMap || _0x520603.cardatamap;
    let _0x562a33 = [];
    if (_0x27e528 && typeof _0x27e528 === "object") {
      const _0x17e926 = Object.keys(_0x27e528).sort((_0x3469cc, _0x44c3dc) => {
        {
          const _0x200769 = Number(_0x3469cc);
          const _0x28536d = Number(_0x44c3dc);
          if (!isNaN(_0x200769) && !isNaN(_0x28536d)) {
            {
              return _0x200769 - _0x28536d;
            }
          }
          return String(_0x3469cc).localeCompare(String(_0x44c3dc));
        }
      });
      _0x562a33 = _0x17e926.map(_0x8eeb0e => {
        const _0x1b20ea = _0x27e528[_0x8eeb0e] || {};
        return {
          ..._0x1b20ea,
          id: String(_0x8eeb0e),
          key: String(_0x8eeb0e)
        };
      });
    } else {
      {
        let _0x378f9a = _0x4221e5.cars || _0x4221e5.list || _0x4221e5.data || [];
        if (!Array.isArray(_0x378f9a) && typeof _0x378f9a === "object") {
          _0x378f9a = Object.values(_0x378f9a);
        }
        _0x562a33 = (Array.isArray(_0x378f9a) ? _0x378f9a : []).map((_0x46070f, _0x504db0) => {
          const _0xc9d557 = String(_0x46070f?.["id"] ?? _0x46070f?.["carId"] ?? _0x504db0);
          const _0x3e12ea = {
            ..._0x46070f,
            id: _0xc9d557,
            key: _0xc9d557
          };
          return _0x3e12ea;
        });
        _0x562a33.sort((_0x452762, _0x425893) => {
          {
            const _0x451ca4 = Number(_0x452762.id);
            const _0x2cea8b = Number(_0x425893.id);
            if (!isNaN(_0x451ca4) && !isNaN(_0x2cea8b)) {
              return _0x451ca4 - _0x2cea8b;
            }
            return String(_0x452762.id).localeCompare(String(_0x425893.id));
          }
        });
      }
    }
    return _0x562a33;
  };
  const _0xcdd1ed = _0x4822db => {
    if (!Array.isArray(_0x4822db)) {
      return 0;
    }
    return _0x4822db.reduce((_0x43578b, _0xf32027) => _0x43578b + (_0xf32027.type === 3 && _0xf32027.itemId === 35002 ? Number(_0xf32027.value || 0) : 0), 0);
  };
  const _0x217e55 = _0x5521c3 => {
    const _0x40a65f = _0x5521c3?.["battleTeam"]?.["name"];
    if (_0x40a65f && typeof _0x40a65f === "string" && _0x40a65f.trim() !== "") {
      return true;
    }
    return Number(_0x5521c3?.["sendAt"] || 0) !== 0;
  };
  const _0x2db5f5 = _0x4eba76 => {
    const _0xd496e8 = _0x4eba76?.["battleTeam"];
    if (_0xd496e8) {
      const _0x48fcca = _0xd496e8.sendAt || _0xd496e8.startTime || _0xd496e8.createTime || _0xd496e8.time;
      if (_0x48fcca && Number(_0x48fcca) > 0) {
        return Number(_0x48fcca);
      }
    }
    return Number(_0x4eba76?.["sendAt"] || 0);
  };
  const _0x2c2941 = (_0x3c2079, _0x61decf) => {
    const _0x186112 = Number(_0x3c2079?.["color"] || 0);
    const _0x3bb416 = Array.isArray(_0x3c2079?.["rewards"]) ? _0x3c2079.rewards : [];
    const _0x412880 = _0xcdd1ed(_0x3bb416);
    if (_0x61decf >= 6) {
      return _0x186112 >= 5 || _0x412880 >= 4 || _0x205dd9(_0x3bb416);
    }
    return _0x186112 >= 4 || _0x412880 >= 2 || _0x205dd9(_0x3bb416);
  };
  const _0x45461b = 14400000;
  const _0x380db1 = _0x5d7834 => {
    const _0x59e89b = _0x2db5f5(_0x5d7834);
    if (!_0x59e89b) {
      return false;
    }
    const _0x59ac6d = _0x59e89b < 1000000000000 ? _0x59e89b * 1000 : _0x59e89b;
    return Date.now() - _0x59ac6d >= _0x45461b;
  };
  const _0x29376a = _0x4b3a1a => {
    const _0xf50367 = _0x2db5f5(_0x4b3a1a);
    if (!_0xf50367) {
      return 0;
    }
    const _0x30d441 = _0xf50367 < 1000000000000 ? _0xf50367 * 1000 : _0xf50367;
    return _0x30d441 + _0x45461b - Date.now();
  };
  const _0x34b504 = _0x4f42d4 => {
    if (_0x4f42d4 <= 0) {
      return "可收车";
    }
    const _0xc6fba = Math.ceil(_0x4f42d4 / 1000);
    const _0x165581 = Math.floor(_0xc6fba / 3600);
    const _0x52d271 = Math.floor(_0xc6fba % 3600 / 60);
    if (_0x165581 > 0) {
      return _0x165581 + "时" + _0x52d271 + "分";
    }
    return _0x52d271 + "分";
  };
  const _0x55f2d8 = async _0x591e2e => {
    _0x21ed1e = _0x591e2e;
    const _0x32395b = document.getElementById("qa-car-content");
    if (!_0x32395b) {
      return;
    }
    try {
      {
        const _0x221a7f = await _0xb1beb7("role_getroleinfo", {});
        _0x3b7778.roleInfo = _0x221a7f;
      }
    } catch (_0x32cf8c) {}
    const _0x1c985b = _0x5367a8(_0x591e2e);
    const _0x1c16c0 = _0x3e3e88();
    const _0x2c0224 = _0x3b7778.roleInfo?.["role"]?.["items"]?.[35002]?.["quantity"] || 0;
    const _0x3c2338 = _0x4e85b3();
    const _0x204d2e = _0x8ddbd();
    const _0x118333 = _0x3c2338 && _0x204d2e.ok && _0x1c16c0 < 4;
    const _0x1a9d5b = _0x1c985b.filter(_0x431326 => !_0x217e55(_0x431326) && Number(_0x431326.refreshCount ?? 0) === 0).length;
    if (_0x1c985b.length === 0) {
      _0x32395b.innerHTML = "<div class=\"helper-text\">暂无可用车辆</div>";
      return;
    }
    const _0x59748a = _0x1c985b.filter(_0x1128f0 => _0x217e55(_0x1128f0));
    _0x1c985b.filter(_0xfe7945 => !_0x217e55(_0xfe7945));
    _0x59748a.filter(_0x380db1);
    const _0x80841c = "\n    <div class=\"car-status-bar\">\n      <div class=\"status-item\">\n        <span class=\"status-label\">活动状态</span>\n        <span class=\"status-value " + (_0x3c2338 ? "active" : "inactive") + "\">\n          " + (_0x3c2338 ? "进行中 (" + _0x3acdec() + ")" : "已结束 (" + _0x3acdec() + ")") + "\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">发车时间</span>\n        <span class=\"status-value " + (_0x204d2e.ok ? "active" : "inactive") + "\">\n          " + _0x204d2e.text + "\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">今日发车</span>\n        <span class=\"status-value " + (_0x1c16c0 >= 4 ? "inactive" : "active") + "\">\n          " + _0x1c16c0 + "/4\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">刷新券</span>\n        <span class=\"status-value\">" + _0x2c0224 + "</span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">免费刷新</span>\n        <span class=\"status-value " + (_0x1a9d5b > 0 ? "active" : "") + "\">" + _0x1a9d5b + " 辆</span>\n      </div>\n    </div>\n  ";
    _0x32395b.innerHTML = "\n    " + _0x80841c + "\n    <div class=\"car-list\">\n      " + _0x1c985b.map(_0x28b4de => {
      const _0x5d01d0 = Number(_0x28b4de.color || 0);
      const _0x139e9d = _0x217e55(_0x28b4de);
      const _0x2bcd75 = _0x380db1(_0x28b4de);
      const _0x350484 = _0xced3fc[_0x5d01d0] || "未知";
      const _0x333ad9 = _0x1d2f94[_0x5d01d0] || "#6b7280";
      const _0x24a029 = _0x205dd9(_0x28b4de.rewards);
      _0x28b4de.rewards ? _0x325a0d(_0x28b4de.rewards) : "-";
      const _0x63355a = !_0x118333;
      const _0x449876 = !_0x3c2338 ? "非活动时间" : !_0x204d2e.ok ? _0x204d2e.text : _0x1c16c0 >= 4 ? "今日次数已满" : "";
      const _0x235e5c = String(_0x28b4de.id);
      const _0x16cf90 = !!_0xbc1954[_0x235e5c];
      const _0x332584 = _0x5d01d0 >= 5 ? _0x16cf90 ? "已选护卫" : "可携带" : "—";
      const _0x1ece4c = _0x16cf90 ? "has-helper" : "";
      return "\n          <div class=\"car-item grade-" + _0x5d01d0 + "\" data-car-id=\"" + _0x28b4de.id + "\">\n            <div class=\"car-item-row\">\n              <span class=\"car-grade-icon\" style=\"color:" + _0x333ad9 + "\">" + _0x548c53 + "</span>\n              <span class=\"car-badge grade-badge\" style=\"color:" + _0x333ad9 + ";border-color:" + _0x333ad9 + "\">" + _0x350484 + "</span>\n              <span class=\"car-name\">车辆 #" + _0x28b4de.id + "</span>\n            </div>\n            <div class=\"car-meta-row\">\n              <span class=\"meta-k\">品阶</span>\n              <span class=\"meta-v\" style=\"color:" + _0x333ad9 + "\">" + _0x350484 + "</span>\n              <span class=\"meta-k\">状态</span>\n              <span class=\"meta-v\">" + (_0x139e9d ? _0x2bcd75 ? "可收车" : "行驶中" : "未发车") + "</span>\n              <span class=\"meta-k\">帮手</span>\n              <span class=\"meta-v " + _0x1ece4c + "\">" + _0x332584 + "</span>\n              <span class=\"meta-k\">奖励</span>\n              <span class=\"meta-v reward-trigger " + (_0x24a029 ? "has-big-prize" : "") + "\" data-car-id=\"" + _0x28b4de.id + "\">\n                " + (_0x24a029 ? "含大奖" : "查看") + "\n              </span>\n            </div>\n            <div class=\"car-actions\">\n              " + (!_0x139e9d ? "\n                <button class=\"btn btn-small btn-primary\" data-action=\"car-single-send\" data-car-id=\"" + _0x28b4de.id + "\"\n                  " + (_0x63355a ? "disabled title=\"" + _0x449876 + "\"" : "") + ">" + (_0x16cf90 ? "发车(带护卫)" : "发车") + "</button>\n                <button class=\"btn btn-small " + (Number(_0x28b4de.refreshCount ?? 0) === 0 ? "btn-success" : "btn-secondary") + "\"\n                  data-action=\"car-single-refresh\" data-car-id=\"" + _0x28b4de.id + "\">\n                  " + (Number(_0x28b4de.refreshCount ?? 0) === 0 ? "免费刷新" : "刷新") + "\n                </button>\n              " : "\n                " + (_0x2bcd75 ? "\n                  <button class=\"btn btn-small btn-success\" data-action=\"car-single-claim\" data-car-id=\"" + _0x28b4de.id + "\">收车</button>\n                " : "\n                  <span class=\"car-countdown\">剩余 " + _0x34b504(_0x29376a(_0x28b4de)) + "</span>\n                ") + "\n              ") + "\n              " + (_0x5d01d0 >= 5 && !_0x139e9d ? "\n                <button class=\"btn btn-small " + (_0x16cf90 ? "btn-warning" : "btn-secondary") + "\" data-action=\"car-single-helper\" data-car-id=\"" + _0x28b4de.id + "\"\n                  " + (_0x63355a ? "disabled" : "") + ">" + (_0x16cf90 ? "换护卫" : "护卫") + "</button>\n              " : "") + "\n            </div>\n          </div>\n        ";
    }).join("") + "\n    </div>\n  ";
    const _0x553c3e = _0x32395b.cloneNode(true);
    _0x32395b.parentNode.replaceChild(_0x553c3e, _0x32395b);
    let _0x583a46 = null;
    _0x553c3e.addEventListener("mouseenter", _0xe15130 => {
      const _0xd39ae9 = _0xe15130.target.closest(".reward-trigger");
      _0xd39ae9 && (_0x583a46 = setTimeout(() => {
        {
          const _0x2b9d3d = _0xd39ae9.getAttribute("data-car-id");
          const _0x3ed780 = _0x1c985b.find(_0xffb03a => String(_0xffb03a.id) === String(_0x2b9d3d));
          _0x3ed780 && _0x3ed780.rewards && _0xe92c96(_0x3ed780, _0xe15130, "hover");
        }
      }, 150));
    }, true);
    _0x553c3e.addEventListener("mouseleave", _0x579a6d => {
      const _0x331d99 = _0x579a6d.target.closest(".reward-trigger");
      if (_0x331d99) {
        {
          _0x583a46 && (clearTimeout(_0x583a46), _0x583a46 = null);
          if (_0x28932f && _0x28932f.dataset.trigger === "hover") {
            {
              setTimeout(() => {
                _0x28932f && !_0x28932f.matches(":hover") && (_0x28932f.remove(), _0x28932f = null);
              }, 100);
            }
          }
        }
      }
    }, true);
    _0x553c3e.addEventListener("click", _0x5d4597 => {
      {
        const _0x1b8d49 = _0x5d4597.target.closest(".reward-trigger");
        if (_0x1b8d49) {
          _0x5d4597.preventDefault();
          _0x5d4597.stopPropagation();
          _0x583a46 && (clearTimeout(_0x583a46), _0x583a46 = null);
          const _0x21ba04 = _0x1b8d49.getAttribute("data-car-id");
          const _0x223bb7 = _0x1c985b.find(_0xa698d0 => String(_0xa698d0.id) === String(_0x21ba04));
          if (_0x223bb7 && _0x223bb7.rewards) {
            {
              _0xe92c96(_0x223bb7, _0x5d4597, "click");
            }
          }
        }
      }
    });
  };
  const _0x14a25f = _0x24ccdf => {
    if (!_0x24ccdf) {
      return false;
    }
    return _0x549f62.some(_0x205f0d => _0x24ccdf.type === _0x205f0d.type && (_0x205f0d.itemId === 0 || _0x24ccdf.itemId === _0x205f0d.itemId) && Number(_0x24ccdf.value || 0) >= _0x205f0d.minValue);
  };
  let _0x28932f = null;
  const _0x5c6392 = _0x23895f => {
    {
      const _0xfb1195 = _0x23895f.type || 0;
      const _0x57e602 = _0x23895f.itemId || 0;
      if (_0xfb1195 === 1) {
        return "金币";
      }
      if (_0xfb1195 === 2) {
        return "金砖";
      }
      return _0xd5f0ff[_0x57e602] || "物品#" + _0x57e602;
    }
  };
  const _0xe92c96 = (_0x3caf02, _0x2febaa, _0x273ad5 = "click") => {
    {
      _0x28932f && (_0x28932f.remove(), _0x28932f = null);
      const _0x563a78 = _0x3caf02.rewards || [];
      const _0x4855a5 = _0x563a78.map(_0x42021d => {
        const _0x4b864b = _0x5c6392(_0x42021d);
        const _0x4e8b2e = (_0x42021d.value || 0).toLocaleString();
        const _0x4dba5b = _0x14a25f(_0x42021d);
        return "<div class=\"reward-row " + (_0x4dba5b ? "is-big-prize" : "") + "\"><span class=\"name\">" + _0x4b864b + "</span><span class=\"value\">x" + _0x4e8b2e + "</span></div>";
      }).join("");
      const _0xbdb84a = document.createElement("div");
      _0xbdb84a.className = "car-reward-popup";
      _0xbdb84a.dataset.trigger = _0x273ad5;
      _0xbdb84a.innerHTML = "\n    <div class=\"popup-header\">车辆奖励详情</div>\n    <div class=\"popup-content\">" + (_0x4855a5 || "<div class=\"no-rewards\">暂无奖励信息</div>") + "</div>\n  ";
      const _0x3b8d05 = _0x2febaa.target.getBoundingClientRect();
      const _0x78e1e2 = Math.min(_0x3b8d05.left, window.innerWidth - 280);
      _0xbdb84a.style.left = _0x78e1e2 + "px";
      _0xbdb84a.style.top = _0x3b8d05.bottom + 8 + "px";
      const _0x43473d = document.querySelector(".qa-root");
      if (_0x43473d) {
        _0x43473d.appendChild(_0xbdb84a);
      } else {
        {
          document.body.appendChild(_0xbdb84a);
        }
      }
      _0x28932f = _0xbdb84a;
      const _0x294c57 = () => {
        _0x28932f === _0xbdb84a && (_0xbdb84a.remove(), _0x28932f = null);
        document.removeEventListener("click", _0xd90d2e);
        _0xbdb84a.removeEventListener("mouseleave", _0x22ea7d);
      };
      const _0xd90d2e = _0x53f8e7 => {
        !_0xbdb84a.contains(_0x53f8e7.target) && !_0x2febaa.target.contains(_0x53f8e7.target) && _0x294c57();
      };
      const _0x22ea7d = () => {
        _0x273ad5 === "hover" && setTimeout(() => {
          const _0x518bea = _0x2febaa.target.closest(".reward-trigger");
          if (!_0xbdb84a.matches(":hover") && (!_0x518bea || !_0x518bea.matches(":hover"))) {
            {
              _0x294c57();
            }
          }
        }, 100);
      };
      _0x273ad5 === "hover" && _0xbdb84a.addEventListener("mouseleave", _0x22ea7d);
      setTimeout(() => {
        {
          document.addEventListener("click", _0xd90d2e);
        }
      }, 50);
    }
  };
  const _0x2f7aea = async () => {
    try {
      const _0x2cf8b8 = await _0xb1beb7("car_getrolecar", {});
      await _0x55f2d8(_0x2cf8b8);
      const _0x4d4e7b = _0x3b7778.roleInfo?.["role"]?.["items"]?.[35002]?.["quantity"] || 0;
      return _0x2cf8b8;
    } catch (_0x5752f6) {
      return null;
    }
  };
  const _0x86dca5 = async _0x13a3d8 => {
    try {
      {
        const _0x434a3a = await _0xb1beb7("car_refresh", {
          carId: String(_0x13a3d8)
        });
        const _0x2b8463 = _0x434a3a?.["carData"] || _0x434a3a?.["body"]?.["carData"] || _0x434a3a?.["car"] || _0x434a3a?.["body"]?.["car"] || {};
        const _0x391ad6 = _0x2b8463.rewards || [];
        const _0x331593 = _0x391ad6.length > 0 ? _0x325a0d(_0x391ad6) : "无奖励信息";
        const _0x5384d5 = Number(_0x2b8463.color || 0);
        const _0x1e6d83 = _0xced3fc[_0x5384d5] || "未知";
        const _0x3b2949 = _0x205dd9(_0x391ad6);
        const _0x3e81da = _0x3b2949 ? "刷新成功【" + _0x1e6d83 + "】含大奖！\n" + _0x331593 : "刷新成功【" + _0x1e6d83 + "】\n" + _0x331593;
        await _0x2f7aea();
        return _0x434a3a;
      }
    } catch (_0x9c1d57) {
      throw _0x9c1d57;
    }
  };
  const _0x4d551a = async (_0x5868c1, _0x4a2538 = null) => {
    if (!_0x4e85b3()) {
      return;
    }
    if (!_0x4b44db()) {
      _0x8ddbd();
      return;
    }
    if (!_0x3d6c47()) {
      {
        return;
      }
    }
    const _0x1999b9 = _0x5367a8(_0x21ed1e);
    const _0x3b5f97 = _0x1999b9.find(_0x1375ba => String(_0x1375ba.id) === String(_0x5868c1));
    const _0x3af006 = Number(_0x3b5f97?.["color"] || 0);
    const _0x62f99f = _0xced3fc[_0x3af006] || "未知";
    const _0x2f36a8 = _0x4a2538 !== null ? _0x4a2538 : _0xbc1954[_0x5868c1] || 0;
    try {
      const _0x632408 = await _0xb1beb7("car_send", {
        carId: String(_0x5868c1),
        helperId: Number(_0x2f36a8),
        text: "",
        isUpgrade: false
      });
      _0x2af80a(_0x5868c1);
      const _0x55b4cf = _0x2f36a8 ? "(带护卫)" : "";
      const _0x1d2fe9 = "【" + _0x62f99f + "】车辆已发出" + _0x55b4cf;
      await _0x2f7aea();
      return _0x632408;
    } catch (_0x167bc5) {
      throw _0x167bc5;
    }
  };
  const _0x184aab = async _0x33109b => {
    try {
      const _0x1c49f0 = await _0xb1beb7("car_claim", {
        carId: String(_0x33109b)
      });
      await _0x2f7aea();
      return _0x1c49f0;
    } catch (_0x3b44d7) {
      throw _0x3b44d7;
    }
  };
  const _0xd8acd2 = () => {
    if (!_0x21ed1e) {
      return [];
    }
    const _0x5c5000 = _0x5367a8(_0x21ed1e);
    return _0x5c5000.filter(_0x380db1);
  };
  const _0xffd3ae = async () => {
    const _0x28fa8a = _0xd8acd2();
    if (_0x28fa8a.length === 0) {
      {
        return;
      }
    }
    let _0x169785 = 0;
    for (const _0x21eac9 of _0x28fa8a) {
      try {
        await _0x184aab(_0x21eac9.id);
        _0x169785++;
        await _0x1dce1d(300);
      } catch (_0x2fc7b9) {}
    }
  };
  const _0x1d26b1 = async () => {
    try {
      if (!_0x4e85b3()) {
        {
          return;
        }
      }
      if (!_0x4b44db()) {
        const _0x5793bf = _0x8ddbd();
        return;
      }
      await _0x2f7aea();
      const _0x194e5d = _0x5367a8(_0x21ed1e);
      if (_0x194e5d.length === 0) {
        return;
      }
      let _0x3567f6 = _0x3b7778.roleInfo?.["role"]?.["items"]?.[35002]?.["quantity"] || 0;
      const _0x52a7c4 = _0x3e3e88();
      if (_0x52a7c4 >= 4) {
        return;
      }
      let _0x44df1e = 0;
      for (const _0x14d3d3 of _0x194e5d) {
        {
          if (_0x217e55(_0x14d3d3)) {
            continue;
          }
          if (_0x52a7c4 + _0x44df1e >= 4) {
            {
              break;
            }
          }
          const _0x32c1a6 = Number(_0x14d3d3.color || 0);
          const _0x5ad5a3 = _0xced3fc[_0x32c1a6] || "未知";
          if (_0x2c2941(_0x14d3d3, _0x3567f6)) {
            await _0x4d551a(_0x14d3d3.id);
            _0x44df1e++;
            await _0x1dce1d(500);
            continue;
          }
          let _0x1e6cd0 = false;
          const _0x1064db = Number(_0x14d3d3.refreshCount ?? 0) === 0;
          if (_0x3567f6 >= 6) {
            _0x1e6cd0 = true;
          } else {
            if (_0x1064db) {
              _0x1e6cd0 = true;
            } else {
              await _0x4d551a(_0x14d3d3.id);
              _0x44df1e++;
              await _0x1dce1d(500);
              continue;
            }
          }
          while (_0x1e6cd0) {
            {
              _0x3567f6 = _0x3b7778.roleInfo?.["role"]?.["items"]?.[35002]?.["quantity"] || 0;
              await _0x86dca5(_0x14d3d3.id);
              await _0x1dce1d(500);
              const _0x2a3785 = _0x5367a8(_0x21ed1e).find(_0x296f6b => _0x296f6b.id === _0x14d3d3.id);
              if (!_0x2a3785) {
                break;
              }
              if (_0x2c2941(_0x2a3785, _0x3567f6)) {
                {
                  await _0x4d551a(_0x2a3785.id);
                  _0x44df1e++;
                  break;
                }
              }
              _0x3567f6 = _0x3b7778.roleInfo?.["role"]?.["items"]?.[35002]?.["quantity"] || 0;
              const _0x2a5a28 = Number(_0x2a3785.color || 0);
              if (_0x3567f6 >= 6) {
                {
                  _0x1e6cd0 = true;
                }
              } else {
                if (_0x3567f6 > 0) {
                  {
                    _0x2a5a28 >= 4 || _0x205dd9(_0x2a3785.rewards) ? (await _0x4d551a(_0x2a3785.id), _0x44df1e++, _0x1e6cd0 = false) : (await _0x4d551a(_0x2a3785.id), _0x44df1e++, _0x1e6cd0 = false);
                  }
                } else {
                  await _0x4d551a(_0x2a3785.id);
                  _0x44df1e++;
                  _0x1e6cd0 = false;
                }
              }
              await _0x1dce1d(500);
            }
          }
        }
      }
    } catch (_0x1e298d) {}
  };
  let _0x4a0bca = null;
  let _0x27499a = [];
  let _0x53fafb = null;
  let _0x11a415 = [];
  const _0x4a058d = _0x247b15 => {
    const _0x31e080 = Number(_0x247b15 || 0);
    if (_0x31e080 >= 100000000) {
      {
        return (_0x31e080 / 100000000).toFixed(2) + "亿";
      }
    } else {
      if (_0x31e080 >= 10000000) {
        return (_0x31e080 / 100000000).toFixed(2) + "亿";
      } else {
        if (_0x31e080 >= 10000) {
          return (_0x31e080 / 10000).toFixed(1) + "万";
        }
      }
    }
    return _0x31e080.toString();
  };
  const _0x55cfe4 = async _0x1717b0 => {
    _0x53fafb = _0x1717b0;
    try {
      const _0x5387d2 = await _0xb1beb7("legion_getinfo", {});
      const _0x3bc8d8 = Object.values(_0x5387d2?.["info"]?.["members"] || {});
      const _0x51d3a3 = await _0xb1beb7("car_getmemberhelpingcnt", {});
      const _0x4883f6 = _0x51d3a3?.["map"] || _0x51d3a3?.["body"]?.["memberHelpingCntMap"] || {};
      _0x11a415 = _0x3bc8d8.map(_0x5eb258 => {
        {
          const _0x323673 = Number(_0x4883f6[_0x5eb258.roleId]?.["cnt"] || _0x4883f6[String(_0x5eb258.roleId)] || 0);
          return {
            roleId: String(_0x5eb258.roleId),
            name: _0x5eb258.name || _0x5eb258.nickname || "玩家" + _0x5eb258.roleId,
            power: _0x5eb258.power || 0,
            powerFormatted: _0x4a058d(_0x5eb258.power),
            helpingCount: _0x323673,
            disabled: _0x323673 >= 4
          };
        }
      }).sort((_0xf83177, _0x13d050) => {
        {
          if (_0xf83177.disabled !== _0x13d050.disabled) {
            return _0xf83177.disabled ? 1 : -1;
          }
          return _0x13d050.power - _0xf83177.power;
        }
      });
      _0x27499a = _0x11a415.filter(_0x2d421a => !_0x2d421a.disabled).map(_0x8e98c1 => ({
        label: _0x8e98c1.name + "（战力 " + _0x8e98c1.powerFormatted + " · 已护卫 " + _0x8e98c1.helpingCount + "/4）",
        value: _0x8e98c1.roleId
      }));
      if (_0x27499a.length === 0) {
        {
          return;
        }
      }
      _0xd5121b();
    } catch (_0x122a6a) {}
  };
  const _0xd5121b = () => {
    const _0x280be9 = document.querySelector(".car-helper-modal");
    if (_0x280be9) {
      _0x280be9.remove();
    }
    if (!_0x11a415 || _0x11a415.length === 0) {
      return;
    }
    _0x4a0bca = _0x27499a.length > 0 ? _0x27499a[0].value : null;
    const _0x55b6ba = document.createElement("div");
    _0x55b6ba.className = "car-helper-modal qa-auth-overlay";
    _0x55b6ba.innerHTML = "\n    <div class=\"car-helper-body qa-auth-modal\" style=\"width:400px;text-align:left;max-height:80vh;overflow:hidden;display:flex;flex-direction:column;\">\n      <div class=\"qa-auth-title\" style=\"font-size:16px;flex-shrink:0;\">选择护卫</div>\n      <div class=\"helper-list\" style=\"flex:1;overflow-y:auto;margin:12px 0;\">\n        " + _0x11a415.map(_0x549727 => "\n          <div class=\"helper-item " + (_0x549727.disabled ? "disabled" : "") + " " + (_0x549727.roleId === _0x4a0bca ? "selected" : "") + "\"\n               data-role-id=\"" + _0x549727.roleId + "\" " + (_0x549727.disabled ? "data-disabled=\"true\"" : "") + ">\n            <div class=\"helper-info\">\n              <div class=\"helper-name\">" + _0x549727.name + "</div>\n              <div class=\"helper-meta\">\n                <span class=\"helper-power\">战力 " + _0x549727.powerFormatted + "</span>\n                <span class=\"helper-count " + (_0x549727.helpingCount >= 4 ? "full" : "") + "\">已护卫 " + _0x549727.helpingCount + "/4</span>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      <div style=\"font-size:12px;color:#6b7280;margin-bottom:16px;flex-shrink:0;\">\n        说明：已护卫满 4 次的成员显示为灰色，无法选择。\n      </div>\n      <div style=\"display:flex;gap:8px;justify-content:flex-end;flex-shrink:0;\">\n        <button class=\"btn btn-secondary\" id=\"qa-helper-cancel\">取消</button>\n        <button class=\"btn btn-primary\" id=\"qa-helper-confirm\">确定</button>\n      </div>\n    </div>\n  ";
    const _0x3cffd3 = document.querySelector(".qa-root");
    _0x3cffd3 ? _0x3cffd3.appendChild(_0x55b6ba) : document.body.appendChild(_0x55b6ba);
    const _0x28d666 = _0x55b6ba.querySelectorAll(".helper-item:not([data-disabled])");
    _0x28d666.forEach(_0x2bff98 => {
      _0x2bff98.addEventListener("click", () => {
        _0x55b6ba.querySelectorAll(".helper-item").forEach(_0x1fea71 => _0x1fea71.classList.remove("selected"));
        _0x2bff98.classList.add("selected");
        _0x4a0bca = _0x2bff98.getAttribute("data-role-id");
      });
    });
    _0x55b6ba.querySelector("#qa-helper-cancel").addEventListener("click", () => {
      _0x55b6ba.remove();
    });
    _0x55b6ba.querySelector("#qa-helper-confirm").addEventListener("click", () => {
      if (!_0x4a0bca) {
        return;
      }
      _0x43472d();
      _0x55b6ba.remove();
    });
    _0x55b6ba.addEventListener("click", _0x4c015a => {
      _0x4c015a.target === _0x55b6ba && _0x55b6ba.remove();
    });
  };
  const _0x43472d = async () => {
    {
      if (!_0x4a0bca || !_0x53fafb) {
        return;
      }
      _0xbc1954[_0x53fafb] = _0x4a0bca;
      const _0x15b494 = _0x11a415.find(_0x48150a => _0x48150a.roleId === _0x4a0bca);
      _0x15b494?.["name"] || _0x4a0bca;
      _0x21ed1e && (await _0x55f2d8(_0x21ed1e));
    }
  };
  const _0x2af80a = _0x22f0b5 => {
    delete _0xbc1954[_0x22f0b5];
  };
  let _0x2bdb71 = null;
  let _0x159c75 = "";
  const _0xf8bb5c = _0x257269 => {
    {
      return new Promise(_0x24698a => {
        if (!_0x257269) {
          _0x24698a(null);
          return;
        }
        const _0x1eea44 = new Image();
        _0x1eea44.crossOrigin = "anonymous";
        _0x1eea44.onload = () => _0x24698a(_0x1eea44);
        _0x1eea44.onerror = () => _0x24698a(null);
        _0x1eea44.src = _0x257269;
        setTimeout(() => _0x24698a(null), 3000);
      });
    }
  };
  const _0x49ab7f = () => {
    const _0x11416a = new Date();
    const _0x475588 = _0x11416a.getFullYear();
    const _0x27caa5 = String(_0x11416a.getMonth() + 1).padStart(2, "0");
    const _0x319a9a = String(_0x11416a.getDate()).padStart(2, "0");
    return _0x475588 + "/" + _0x27caa5 + "/" + _0x319a9a;
  };
  const _0x27753a = () => {
    {
      const _0xd677b = new Date();
      const _0x4225c0 = _0xd677b.getDay();
      const _0x1eaac4 = _0x4225c0 === 0 ? 1 : _0x4225c0 === 6 ? 0 : _0x4225c0 + 1;
      const _0x55457f = new Date(_0xd677b);
      _0x55457f.setDate(_0xd677b.getDate() - _0x1eaac4);
      const _0x3c1639 = _0x55457f.getFullYear();
      const _0xeaa8f0 = String(_0x55457f.getMonth() + 1).padStart(2, "0");
      const _0x4bc403 = String(_0x55457f.getDate()).padStart(2, "0");
      return _0x3c1639 + "/" + _0xeaa8f0 + "/" + _0x4bc403;
    }
  };
  const _0x1b57f4 = _0x529120 => {
    if (!_0x529120) {
      return "0";
    }
    if (_0x529120 >= 100000000) {
      {
        return (_0x529120 / 100000000).toFixed(2) + "亿";
      }
    }
    if (_0x529120 >= 10000) {
      {
        return (_0x529120 / 10000).toFixed(2) + "万";
      }
    }
    return _0x529120.toString();
  };
  const _0x522886 = _0x4f09f3 => {
    if (_0x4f09f3 === undefined || _0x4f09f3 === -1) {
      return "--";
    }
    return _0x4f09f3.toFixed(0);
  };
  const _0x1994a0 = {
    keywords: ["大联盟"],
    value: "大联盟"
  };
  const _0x477086 = {
    keywords: ["正义"],
    value: "正义联盟"
  };
  const _0x44b70e = {
    keywords: ["龙盟", "龍盟"],
    value: "龙盟"
  };
  const _0x466b5d = {
    keywords: ["梦盟", "梦想之盟"],
    value: "梦盟"
  };
  const _0x4cb925 = [_0x1994a0, _0x477086, _0x44b70e, _0x466b5d];
  const _0x1f75e9 = _0x71747d => {
    if (!_0x71747d) {
      return "未知";
    }
    const _0x5e78c8 = _0x4cb925.find(_0x4e4ae7 => _0x4e4ae7.keywords.some(_0x17b5dd => _0x71747d.includes(_0x17b5dd)));
    return _0x5e78c8 ? _0x5e78c8.value : "未知";
  };
  const _0x59153c = _0x1cf60a => {
    {
      _0x2bdb71 = _0x1cf60a;
      const _0x40c782 = document.getElementById("qa-salt-match-content");
      if (!_0x40c782) {
        return;
      }
      if (!_0x1cf60a || !_0x1cf60a.legionRankList || _0x1cf60a.legionRankList.length === 0) {
        _0x40c782.innerHTML = "<div class=\"helper-text\">暂无盐场匹配数据</div>";
        return;
      }
      const _0x1ead3f = _0x1cf60a.legionRankList;
      _0x40c782.innerHTML = "\n    <div class=\"salt-match-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x159c75 + "</div>\n      <div class=\"match-club-list\">\n        " + _0x1ead3f.map((_0x41e38e, _0x5d7a5d) => "\n          <div class=\"match-club-item\">\n            <div class=\"club-main-row\">\n              <div class=\"club-rank\">#" + (_0x5d7a5d + 1) + "</div>\n              <div class=\"club-logo\">\n                <img src=\"" + (_0x41e38e.logo || "") + "\" onerror=\"this.style.display='none'\" alt=\"\">\n              </div>\n              <div class=\"club-basic\">\n                <div class=\"club-name-row\">\n                  <span class=\"club-name\">" + (_0x41e38e.name || "未知") + "</span>\n                  <span class=\"club-server\">S" + ((_0x41e38e.serverId || 27) - 27) + "</span>\n                </div>\n                <div class=\"club-stats-row\">\n                  <span class=\"stat-tag power\">战力 " + _0x1b57f4(_0x41e38e.power) + "</span>\n                  <span class=\"stat-tag red\">红淬 " + (_0x41e38e.redQuench || 0) + "</span>\n                  " + (_0x41e38e.sRScore !== undefined && _0x41e38e.sRScore !== -1 ? "<span class=\"stat-tag score\">积分 " + _0x522886(_0x41e38e.sRScore) + "</span>" : "") + "\n                </div>\n              </div>\n            </div>\n            <div class=\"club-detail-row\">\n              <div class=\"car-heads\">\n                " + [1, 2, 3].map(_0x253ea9 => {
        const _0x48e292 = _0x41e38e["memberImg" + _0x253ea9] || "";
        const _0x47bbd8 = _0x41e38e["redno" + _0x253ea9] || "0红";
        const _0xbf84ac = _0x41e38e["hb" + _0x253ea9];
        return "\n                    <div class=\"car-head-item\">\n                      <img src=\"" + _0x48e292 + "\" class=\"car-head-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                      <span class=\"car-head-text\">车" + _0x253ea9 + ": " + _0x47bbd8 + (_0xbf84ac !== undefined ? "/" + _0xbf84ac + "圣" : "") + "</span>\n                    </div>\n                  ";
      }).join("") + "\n              </div>\n            </div>\n            <div class=\"club-extra-row\">\n              <span class=\"alliance-tag " + _0x1f75e9(_0x41e38e.announcement).replace(/联盟/g, "") + "\">" + _0x1f75e9(_0x41e38e.announcement) + "</span>\n              " + (_0x41e38e.announcement ? "<span class=\"announcement\" title=\"" + _0x41e38e.announcement + "\">公告: " + (_0x41e38e.announcement.length > 30 ? _0x41e38e.announcement.substring(0, 30) + "..." : _0x41e38e.announcement) + "</span>" : "") + "\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
    }
  };
  const _0x8144d5 = async _0x815038 => {
    {
      _0x159c75 = _0x815038 || _0x27753a();
      const _0x3862ea = _0x49ab7f();
      const _0x1758cf = new Date().getHours();
      const _0x217d8c = document.getElementById("qa-salt-match-date");
      if (_0x217d8c) {
        _0x217d8c.value = _0x159c75;
      }
      const _0x3c38f1 = document.getElementById("qa-salt-match-content");
      if (_0x3c38f1) {
        _0x3c38f1.innerHTML = "<div class=\"helper-text\">正在加载盐场匹配数据...</div>";
      }
      try {
        let _0x193da8;
        if (_0x159c75 === _0x3862ea && _0x1758cf < 20) {
          const _0x4989aa = await _0xb1beb7("legion_getbattlefield", {});
          if (!_0x4989aa?.["info"]) {
            if (_0x3c38f1) {
              _0x3c38f1.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>";
            }
            return null;
          }
          const _0x226448 = {
            phase: _0x4989aa.info.phase,
            battlefieldId: _0x4989aa.info.battlefieldId
          };
          const _0x4ba2a7 = await _0xb1beb7("legion_getopponent", _0x226448);
          if (!_0x4ba2a7?.["opponentList"]) {
            {
              if (_0x3c38f1) {
                _0x3c38f1.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>";
              }
              return null;
            }
          }
          const _0x2d0754 = [];
          for (const _0x277535 of _0x4ba2a7.opponentList) {
            try {
              const _0x1ca4df = {
                legionId: _0x277535.id
              };
              const _0x373b9a = await _0xb1beb7("legion_getinfobyid", _0x1ca4df);
              const _0xdfa218 = Object.entries(_0x373b9a?.["legionData"]?.["members"] || {});
              const _0x5ca739 = [];
              const _0x43fa38 = [];
              for (let _0x457640 = 0; _0x457640 < Math.min(3, _0xdfa218.length); _0x457640++) {
                const [, _0x3deed9] = _0xdfa218[_0x457640];
                _0x3deed9.custom?.["red_quench_cnt"] !== undefined && _0x5ca739.push(_0x3deed9.custom.red_quench_cnt + "红");
                _0x43fa38.push(_0x3deed9.headImg || "");
              }
              const _0x281683 = {
                ..._0x277535,
                logo: _0x373b9a?.["legionData"]?.["logo"] || "",
                redQuench: _0x373b9a?.["legionData"]?.["quenchNum"] || 0,
                power: _0x373b9a?.["legionData"]?.["power"] || 0,
                announcement: _0x373b9a?.["legionData"]?.["announcement"] || "",
                redno1: _0x5ca739[0] || "0红",
                redno2: _0x5ca739[1] || "0红",
                redno3: _0x5ca739[2] || "0红",
                memberImg1: _0x43fa38[0] || "",
                memberImg2: _0x43fa38[1] || "",
                memberImg3: _0x43fa38[2] || ""
              };
              _0x2d0754.push(_0x281683);
            } catch (_0x174886) {
              const _0x5c2905 = {
                ..._0x277535,
                redQuench: 0
              };
              _0x2d0754.push(_0x5c2905);
            }
            await new Promise(_0x3ee497 => setTimeout(_0x3ee497, 100));
          }
          const _0x1cf4ce = {
            legionRankList: _0x2d0754
          };
          _0x193da8 = _0x1cf4ce;
        } else {
          const _0x524894 = {
            date: _0x159c75
          };
          const _0x3b111d = await _0xb1beb7("legion_getwarrank", _0x524894);
          if (!_0x3b111d?.["legionRankList"]) {
            if (_0x3c38f1) {
              _0x3c38f1.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>";
            }
            return null;
          }
          const _0x17a899 = [];
          for (const _0x46685a of _0x3b111d.legionRankList) {
            {
              _0x46685a.sRScore = -1;
              try {
                {
                  const _0x4ea120 = {
                    legionId: _0x46685a.id
                  };
                  const _0x37810e = await _0xb1beb7("legion_getinfobyid", _0x4ea120);
                  const _0x33ef49 = Object.entries(_0x37810e?.["legionData"]?.["members"] || {});
                  const _0x98ab7a = [];
                  const _0x343af3 = [];
                  const _0x5a8e4e = [];
                  for (let _0x233199 = 0; _0x233199 < Math.min(3, _0x33ef49.length); _0x233199++) {
                    const [_0x260ac1, _0x32a1ba] = _0x33ef49[_0x233199];
                    _0x32a1ba.custom?.["red_quench_cnt"] !== undefined && _0x98ab7a.push(_0x32a1ba.custom.red_quench_cnt + "红");
                    _0x5a8e4e.push(_0x32a1ba.headImg || "");
                    try {
                      const _0x31b1a8 = {
                        bottleType: 0,
                        includeBottleTeam: false,
                        isSearch: false,
                        roleId: _0x260ac1
                      };
                      const _0x1b5760 = await _0xb1beb7("rank_getroleinfo", _0x31b1a8);
                      let _0x21d274 = 0;
                      for (const [, _0x5e26de] of Object.entries(_0x1b5760?.["roleInfo"]?.["heroes"] || {})) {
                        {
                          if (_0x5e26de.hB?.["active"] !== undefined) {
                            {
                              _0x21d274++;
                            }
                          }
                        }
                      }
                      _0x343af3.push(_0x21d274);
                    } catch (_0x5bfc7d) {
                      _0x343af3.push(0);
                    }
                    await new Promise(_0x6ba7d9 => setTimeout(_0x6ba7d9, 100));
                  }
                  const _0x82026b = {
                    ..._0x46685a,
                    logo: _0x37810e?.["legionData"]?.["logo"] || "",
                    redQuench: _0x37810e?.["legionData"]?.["quenchNum"] || 0,
                    power: _0x37810e?.["legionData"]?.["power"] || 0,
                    announcement: _0x37810e?.["legionData"]?.["announcement"] || "",
                    redno1: _0x98ab7a[0] || "0红",
                    redno2: _0x98ab7a[1] || "0红",
                    redno3: _0x98ab7a[2] || "0红",
                    hb1: _0x343af3[0] || 0,
                    hb2: _0x343af3[1] || 0,
                    hb3: _0x343af3[2] || 0,
                    memberImg1: _0x5a8e4e[0] || "",
                    memberImg2: _0x5a8e4e[1] || "",
                    memberImg3: _0x5a8e4e[2] || ""
                  };
                  _0x17a899.push(_0x82026b);
                }
              } catch (_0x28d839) {
                const _0x5aeba7 = {
                  ..._0x46685a,
                  redQuench: 0
                };
                _0x17a899.push(_0x5aeba7);
              }
            }
          }
          const _0x418b91 = {
            legionRankList: _0x17a899
          };
          _0x193da8 = _0x418b91;
        }
        _0x59153c(_0x193da8);
        return _0x193da8;
      } catch (_0x3e2ddb) {
        {
          if (_0x3c38f1) {
            _0x3c38f1.innerHTML = "<div class=\"helper-text\">获取数据失败，请重试</div>";
          }
          return null;
        }
      }
    }
  };
  const _0x47f31c = () => {
    {
      if (!_0x2bdb71?.["legionRankList"]) {
        return;
      }
      _0x2bdb71.legionRankList.sort((_0xffa4a, _0x4ad818) => (_0x4ad818.redQuench || 0) - (_0xffa4a.redQuench || 0));
      _0x59153c(_0x2bdb71);
    }
  };
  const _0x3a577c = () => {
    if (!_0x2bdb71?.["legionRankList"]) {
      return;
    }
    _0x2bdb71.legionRankList.sort((_0x1cafe4, _0x384cf9) => (_0x384cf9.sRScore || 0) - (_0x1cafe4.sRScore || 0));
    _0x59153c(_0x2bdb71);
  };
  const _0x5679da = async () => {
    {
      if (!_0x2bdb71?.["legionRankList"]) {
        return;
      }
      const _0x383236 = _0x2bdb71.legionRankList;
      const _0x261315 = 2;
      const _0x4798ba = document.createElement("canvas");
      const _0x1f2eb0 = _0x4798ba.getContext("2d");
      const _0x1d9c5f = 20;
      const _0xdf80d0 = 50;
      const _0x14ccd3 = 60;
      const _0x4cbab0 = ["排名", "俱乐部", "区服", "战力", "红淬", "车头信息", "联盟"];
      const _0x1178cf = [50, 180, 60, 100, 80, 280, 80];
      const _0xd7140b = _0x1178cf.reduce((_0x30f270, _0x1f2b33) => _0x30f270 + _0x1f2b33, 0) + _0x1d9c5f * 2;
      const _0x288893 = _0x14ccd3 + _0x383236.length * _0xdf80d0 + _0x1d9c5f * 2;
      _0x4798ba.width = _0xd7140b * _0x261315;
      _0x4798ba.height = _0x288893 * _0x261315;
      _0x1f2eb0.scale(_0x261315, _0x261315);
      _0x1f2eb0.fillStyle = "#ffffff";
      _0x1f2eb0.fillRect(0, 0, _0xd7140b, _0x288893);
      _0x1f2eb0.fillStyle = "#1f2937";
      _0x1f2eb0.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x1f2eb0.fillText("盐场匹配详情 - " + _0x159c75, _0x1d9c5f, _0x1d9c5f + 20);
      const _0x5b2d58 = _0x14ccd3;
      _0x1f2eb0.fillStyle = "#f3f4f6";
      _0x1f2eb0.fillRect(_0x1d9c5f, _0x5b2d58, _0xd7140b - _0x1d9c5f * 2, 30);
      _0x1f2eb0.fillStyle = "#374151";
      _0x1f2eb0.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0x3ba82f = _0x1d9c5f;
      _0x4cbab0.forEach((_0x828fc, _0x2a1a28) => {
        _0x1f2eb0.fillText(_0x828fc, _0x3ba82f + 8, _0x5b2d58 + 20);
        _0x3ba82f += _0x1178cf[_0x2a1a28];
      });
      const _0x4cd30b = _0x383236.map(_0x52d435 => _0xf8bb5c(_0x52d435.logo));
      const _0x2b5fc6 = _0x383236.flatMap(_0x321a07 => [_0xf8bb5c(_0x321a07.memberImg1), _0xf8bb5c(_0x321a07.memberImg2), _0xf8bb5c(_0x321a07.memberImg3)]);
      const [_0x418128, ..._0x535a94] = await Promise.all([Promise.all(_0x4cd30b), ..._0x2b5fc6]);
      const _0x28cd8f = [];
      for (let _0x252437 = 0; _0x252437 < _0x383236.length; _0x252437++) {
        _0x28cd8f.push([_0x535a94[_0x252437 * 3], _0x535a94[_0x252437 * 3 + 1], _0x535a94[_0x252437 * 3 + 2]]);
      }
      _0x1f2eb0.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x383236.forEach((_0x4985d1, _0x35b59d) => {
        const _0x969cf5 = _0x5b2d58 + 30 + _0x35b59d * _0xdf80d0;
        if (_0x35b59d % 2 === 1) {
          {
            _0x1f2eb0.fillStyle = "#f9fafb";
            _0x1f2eb0.fillRect(_0x1d9c5f, _0x969cf5, _0xd7140b - _0x1d9c5f * 2, _0xdf80d0);
          }
        }
        _0x1f2eb0.fillStyle = "#1f2937";
        let _0x422c64 = _0x1d9c5f;
        _0x1f2eb0.fillText(String(_0x35b59d + 1), _0x422c64 + 8, _0x969cf5 + 30);
        _0x422c64 += _0x1178cf[0];
        const _0x52c21c = _0x418128[_0x35b59d];
        if (_0x52c21c) {
          {
            _0x1f2eb0.save();
            _0x1f2eb0.beginPath();
            _0x1f2eb0.arc(_0x422c64 + 8 + 14, _0x969cf5 + _0xdf80d0 / 2, 14, 0, Math.PI * 2);
            _0x1f2eb0.clip();
            _0x1f2eb0.drawImage(_0x52c21c, _0x422c64 + 8, _0x969cf5 + (_0xdf80d0 - 28) / 2, 28, 28);
            _0x1f2eb0.restore();
          }
        }
        _0x1f2eb0.fillText(_0x4985d1.name || "-", _0x422c64 + 44, _0x969cf5 + 30);
        _0x422c64 += _0x1178cf[1];
        _0x1f2eb0.fillText("S" + ((_0x4985d1.serverId || 27) - 27), _0x422c64 + 8, _0x969cf5 + 30);
        _0x422c64 += _0x1178cf[2];
        _0x1f2eb0.fillText(_0x1b57f4(_0x4985d1.power), _0x422c64 + 8, _0x969cf5 + 30);
        _0x422c64 += _0x1178cf[3];
        _0x1f2eb0.fillStyle = "#ef4444";
        _0x1f2eb0.fillText(String(_0x4985d1.redQuench || 0), _0x422c64 + 8, _0x969cf5 + 30);
        _0x1f2eb0.fillStyle = "#1f2937";
        _0x422c64 += _0x1178cf[4];
        const _0x25c47c = _0x28cd8f[_0x35b59d] || [];
        const _0xa6610f = _0x422c64;
        for (let _0x50692e = 0; _0x50692e < 3; _0x50692e++) {
          const _0x5ce60c = _0xa6610f + _0x50692e * 90;
          const _0x590f60 = _0x25c47c[_0x50692e];
          _0x590f60 && (_0x1f2eb0.save(), _0x1f2eb0.beginPath(), _0x1f2eb0.arc(_0x5ce60c + 10 + 10, _0x969cf5 + _0xdf80d0 / 2, 10, 0, Math.PI * 2), _0x1f2eb0.clip(), _0x1f2eb0.drawImage(_0x590f60, _0x5ce60c + 10, _0x969cf5 + (_0xdf80d0 - 20) / 2, 20, 20), _0x1f2eb0.restore());
          const _0x543cc4 = _0x4985d1["redno" + (_0x50692e + 1)] || "0红";
          const _0x32f422 = _0x4985d1["hb" + (_0x50692e + 1)];
          const _0x224fa0 = _0x32f422 !== undefined ? _0x543cc4 + "/" + _0x32f422 + "圣" : _0x543cc4;
          _0x1f2eb0.fillText(_0x224fa0, _0x5ce60c + 34, _0x969cf5 + 30);
        }
        _0x422c64 += _0x1178cf[5];
        const _0x5d7a69 = _0x1f75e9(_0x4985d1.announcement);
        _0x1f2eb0.fillStyle = _0x5d7a69 === "梦盟" ? "#ec4899" : _0x5d7a69 === "大联盟" ? "#3b82f6" : _0x5d7a69 === "正义联盟" ? "#22c55e" : _0x5d7a69 === "龙盟" ? "#f59e0b" : "#6b7280";
        _0x1f2eb0.fillText(_0x5d7a69, _0x422c64 + 8, _0x969cf5 + 30);
        _0x1f2eb0.fillStyle = "#1f2937";
      });
      _0x1f2eb0.strokeStyle = "#e5e7eb";
      _0x1f2eb0.lineWidth = 1;
      _0x1f2eb0.strokeRect(_0x1d9c5f, _0x5b2d58, _0xd7140b - _0x1d9c5f * 2, 30 + _0x383236.length * _0xdf80d0);
      await _0x53ec78(_0x4798ba, "盐场匹配_" + _0x159c75.replace(/\//g, "-") + ".png");
    }
  };
  const _0x5e540b = () => {
    const _0x40b573 = document.getElementById("qa-salt-match-date");
    _0x40b573 && !_0x40b573.value && (_0x40b573.value = _0x27753a());
  };
  const _0x2605bc = () => {
    {
      const _0x1a384d = document.getElementById("qa-salt-match-date");
      return _0x1a384d ? _0x1a384d.value : _0x27753a();
    }
  };
  const _0x111b6c = {
    __proto__: null,
    exportSaltMatchImage: _0x5679da,
    fetchSaltMatchInfo: _0x8144d5,
    getSelectedDate: _0x2605bc,
    initSaltMatchDate: _0x5e540b,
    renderSaltMatchInfo: _0x59153c,
    sortByRedQuench: _0x47f31c,
    sortByScore: _0x3a577c
  };
  var _0x13639f = Object.freeze(_0x111b6c);
  const _0x29c50f = {
    "招募": 1,
    "宝箱": 2,
    "捕获": 3,
    "盐罐": 4,
    "金砖": 5
  };
  const _0x46c54e = {
    [_0x29c50f["招募"]]: "招募",
    [_0x29c50f["宝箱"]]: "宝箱",
    [_0x29c50f["捕获"]]: "捕获",
    [_0x29c50f["盐罐"]]: "盐罐",
    [_0x29c50f["金砖"]]: "金砖"
  };
  const _0x56115b = _0x46c54e;
  const _0x4fe2d2 = {
    num: 80
  };
  const _0x45512e = {
    num: 160
  };
  const _0x50e3d5 = {
    num: 240
  };
  const _0x4e74c6 = {
    num: 320
  };
  const _0x5ed75f = {
    num: 400
  };
  const _0x3e58cc = {
    num: 560
  };
  const _0x5d307f = {
    num: 720
  };
  const _0x56a353 = {
    num: 880
  };
  const _0x3bc6cd = {
    num: 1040
  };
  const _0x45ae0c = {
    num: 1200
  };
  const _0xf9186e = {
    num: 1440
  };
  const _0x3bac33 = {
    num: 1680
  };
  const _0x3f2506 = {
    num: 1920
  };
  const _0x1361a1 = {
    num: 2160
  };
  const _0x4ae77c = {
    num: 2400
  };
  const _0x5e1d8a = {
    num: 2720
  };
  const _0xbf01ad = {
    num: 3040
  };
  const _0x324a23 = {
    num: 3360
  };
  const _0x44be92 = {
    num: 3680
  };
  const _0x20c69c = {
    num: 4000
  };
  const _0x1535ec = {
    num: 2000
  };
  const _0x240e35 = {
    num: 4000
  };
  const _0x418be0 = {
    num: 6000
  };
  const _0x437d9f = {
    num: 8000
  };
  const _0x160a23 = {
    num: 10000
  };
  const _0xad3545 = {
    num: 14000
  };
  const _0x15ba98 = {
    num: 18000
  };
  const _0x478495 = {
    num: 22000
  };
  const _0x33db97 = {
    num: 26000
  };
  const _0x112bdc = {
    num: 30000
  };
  const _0x465f9f = {
    num: 36000
  };
  const _0x5467ff = {
    num: 42000
  };
  const _0x4fb1bc = {
    num: 48000
  };
  const _0x19b9dc = {
    num: 54000
  };
  const _0xffe0e9 = {
    num: 60000
  };
  const _0x456b74 = {
    num: 68000
  };
  const _0x53ef3c = {
    num: 76000
  };
  const _0x57e906 = {
    num: 84000
  };
  const _0xb05069 = {
    num: 92000
  };
  const _0x486c7b = {
    num: 100000
  };
  const _0x4f51e2 = {
    num: 25
  };
  const _0x53fd2f = {
    num: 50
  };
  const _0x5755c1 = {
    num: 75
  };
  const _0x60d7ab = {
    num: 125
  };
  const _0x2e16e1 = {
    num: 175
  };
  const _0x110380 = {
    num: 225
  };
  const _0x3cc7cb = {
    num: 300
  };
  const _0x4b9982 = {
    num: 375
  };
  const _0x15db1a = {
    num: 450
  };
  const _0x560007 = {
    num: 525
  };
  const _0x2b0e07 = {
    num: 625
  };
  const _0x3140f1 = {
    num: 725
  };
  const _0x2dc883 = {
    num: 825
  };
  const _0x121dae = {
    num: 925
  };
  const _0x3d3167 = {
    num: 1050
  };
  const _0x5156fa = {
    num: 1175
  };
  const _0x3754b2 = {
    num: 1300
  };
  const _0x579724 = {
    num: 1450
  };
  const _0x3c5011 = {
    num: 1600
  };
  const _0x1017a4 = {
    num: 1750
  };
  const _0x27317c = {
    num: 3
  };
  const _0x1ca64a = {
    num: 6
  };
  const _0x3b7013 = {
    num: 9
  };
  const _0x35d827 = {
    num: 12
  };
  const _0x1d9cf5 = {
    num: 15
  };
  const _0x2d7c35 = {
    num: 20
  };
  const _0x55e5d5 = {
    num: 25
  };
  const _0x453b34 = {
    num: 30
  };
  const _0x3f0f0c = {
    num: 35
  };
  const _0x398bf8 = {
    num: 40
  };
  const _0x31ad4b = {
    num: 48
  };
  const _0x4f7974 = {
    num: 56
  };
  const _0x1a7dc9 = {
    num: 64
  };
  const _0x3951d1 = {
    num: 72
  };
  const _0x6830f3 = {
    num: 80
  };
  const _0x483c7a = {
    num: 90
  };
  const _0x384df8 = {
    num: 100
  };
  const _0x1f23d1 = {
    num: 110
  };
  const _0xfab8d6 = {
    num: 120
  };
  const _0x1e8e2a = {
    num: 130
  };
  const _0x474711 = {
    num: 10000
  };
  const _0x40a112 = {
    num: 20000
  };
  const _0x53bf04 = {
    num: 30000
  };
  const _0x1f0b88 = {
    num: 40000
  };
  const _0x31b877 = {
    num: 50000
  };
  const _0x26f8ff = {
    num: 70000
  };
  const _0x31b735 = {
    num: 90000
  };
  const _0x218f34 = {
    num: 110000
  };
  const _0x1ae3b9 = {
    num: 130000
  };
  const _0xea83a8 = {
    num: 150000
  };
  const _0x2e07ac = {
    num: 180000
  };
  const _0x531162 = {
    num: 210000
  };
  const _0x3d011d = {
    num: 240000
  };
  const _0x41e028 = {
    num: 270000
  };
  const _0x1e2b64 = {
    num: 300000
  };
  const _0x525461 = {
    num: 340000
  };
  const _0x1467a2 = {
    num: 380000
  };
  const _0x23c322 = {
    num: 420000
  };
  const _0x177b1d = {
    num: 460000
  };
  const _0x3c5d57 = {
    num: 500000
  };
  const _0x2dcb61 = {
    [_0x29c50f["招募"]]: [_0x4fe2d2, _0x45512e, _0x50e3d5, _0x4e74c6, _0x5ed75f, _0x3e58cc, _0x5d307f, _0x56a353, _0x3bc6cd, _0x45ae0c, _0xf9186e, _0x3bac33, _0x3f2506, _0x1361a1, _0x4ae77c, _0x5e1d8a, _0xbf01ad, _0x324a23, _0x44be92, _0x20c69c],
    [_0x29c50f["宝箱"]]: [_0x1535ec, _0x240e35, _0x418be0, _0x437d9f, _0x160a23, _0xad3545, _0x15ba98, _0x478495, _0x33db97, _0x112bdc, _0x465f9f, _0x5467ff, _0x4fb1bc, _0x19b9dc, _0xffe0e9, _0x456b74, _0x53ef3c, _0x57e906, _0xb05069, _0x486c7b],
    [_0x29c50f["捕获"]]: [_0x4f51e2, _0x53fd2f, _0x5755c1, _0x60d7ab, _0x2e16e1, _0x110380, _0x3cc7cb, _0x4b9982, _0x15db1a, _0x560007, _0x2b0e07, _0x3140f1, _0x2dc883, _0x121dae, _0x3d3167, _0x5156fa, _0x3754b2, _0x579724, _0x3c5011, _0x1017a4],
    [_0x29c50f["盐罐"]]: [_0x27317c, _0x1ca64a, _0x3b7013, _0x35d827, _0x1d9cf5, _0x2d7c35, _0x55e5d5, _0x453b34, _0x3f0f0c, _0x398bf8, _0x31ad4b, _0x4f7974, _0x1a7dc9, _0x3951d1, _0x6830f3, _0x483c7a, _0x384df8, _0x1f23d1, _0xfab8d6, _0x1e8e2a],
    [_0x29c50f["金砖"]]: [_0x474711, _0x40a112, _0x53bf04, _0x1f0b88, _0x31b877, _0x26f8ff, _0x31b735, _0x218f34, _0x1ae3b9, _0xea83a8, _0x2e07ac, _0x531162, _0x3d011d, _0x41e028, _0x1e2b64, _0x525461, _0x1467a2, _0x23c322, _0x177b1d, _0x3c5d57]
  };
  const _0x13f007 = _0x2dcb61;
  const _0x5ec5f3 = _0x394fd0 => {
    const _0x39d2f2 = _0x394fd0?.["activity"]?.["commonActivityInfo"] || _0x394fd0?.["commonActivityInfo"];
    if (!_0x39d2f2) {
      return null;
    }
    const _0x432e8d = Object.values(_0x39d2f2).find(_0x49ca48 => {
      {
        if (!_0x49ca48?.["task"]) {
          return false;
        }
        return Object.keys(_0x49ca48.task).some(_0x554d83 => {
          const _0x32bf21 = Number(_0x554d83);
          return _0x32bf21 >= 1 && _0x32bf21 <= 5;
        });
      }
    });
    return _0x432e8d;
  };
  const _0x4ff627 = () => {
    {
      return !!_0x3b7778.consumptionData;
    }
  };
  const _0x2a235f = () => {
    const _0x3bc81c = _0x3b7778.consumptionData;
    if (!_0x3bc81c) {
      return [];
    }
    const _0x34d454 = _0x3bc81c.task || {};
    return Object.keys(_0x56115b).map(_0x5bc494 => {
      const _0x2a5e05 = Number(_0x5bc494);
      const _0x559821 = _0x34d454[_0x2a5e05] || 0;
      const _0x2b8c07 = _0x13f007[_0x2a5e05] || [];
      let _0xc38241 = 0;
      let _0x2f6798 = false;
      const _0x23bed7 = _0x2b8c07.find(_0x4b8368 => _0x4b8368.num > _0x559821);
      if (_0x23bed7) {
        _0xc38241 = _0x23bed7.num;
      } else {
        if (_0x2b8c07.length > 0) {
          {
            _0xc38241 = _0x2b8c07[_0x2b8c07.length - 1].num;
            _0x2f6798 = true;
          }
        }
      }
      let _0x41595e = 0;
      if (_0x2f6798) {
        _0x41595e = 100;
      } else {
        if (_0xc38241 > 0) {
          _0x41595e = Math.min(100, _0x559821 / _0xc38241 * 100);
        }
      }
      const _0x4e6dd2 = {
        id: _0x2a5e05,
        name: _0x56115b[_0x2a5e05],
        current: _0x559821,
        nextTarget: _0xc38241,
        percentage: _0x41595e,
        isCompleted: _0x2f6798
      };
      return _0x4e6dd2;
    });
  };
  const _0x4d21f6 = () => {
    const _0x5a95b8 = document.getElementById("qa-consumption-content");
    if (!_0x5a95b8) {
      return;
    }
    const _0x294095 = _0x4ff627();
    const _0x26a91e = _0x2a235f();
    const _0x21cdb2 = document.getElementById("qa-consumption-normal-item");
    const _0x1b4b5c = document.getElementById("qa-consumption-gold-item");
    if (_0x21cdb2) {
      _0x21cdb2.textContent = _0x3b7778.consumptionActivityItem || 0;
    }
    if (_0x1b4b5c) {
      _0x1b4b5c.textContent = _0x3b7778.consumptionGoldItem || 0;
    }
    const _0x5973df = document.getElementById("qa-consumption-badge");
    if (_0x5973df) {
      _0x5973df.textContent = _0x294095 ? "进行中" : "未开放";
    }
    if (!_0x294095) {
      _0x5a95b8.innerHTML = "<div class=\"helper-text\">暂无活动数据，请点击刷新</div>";
      return;
    }
    const _0x3cfca1 = _0x26a91e.map(_0x148b1d => {
      const _0x4be245 = _0x148b1d.isCompleted ? "#52c41a" : "#1890ff";
      const _0x58f20b = _0x148b1d.isCompleted ? "<span style=\"color:#52c41a;\">已完成所有档位</span>" : "<span style=\"color:var(--text-tertiary);\">下一档: " + _0x148b1d.nextTarget + " (还需 " + (_0x148b1d.nextTarget - _0x148b1d.current) + ")</span>";
      return "\n      <div class=\"consumption-item\">\n        <div class=\"consumption-header\">\n          <span class=\"consumption-name\">" + _0x148b1d.name + "</span>\n          <span class=\"consumption-values\">\n            <span style=\"color:#1890ff;font-weight:600;\">" + _0x148b1d.current + "</span>\n            <span style=\"color:var(--text-tertiary);margin:0 2px;\">/</span>\n            <span style=\"color:var(--text-secondary);\">" + _0x148b1d.nextTarget + "</span>\n          </span>\n        </div>\n        <div class=\"consumption-bar\">\n          <div class=\"consumption-bar-fill\" style=\"width:" + _0x148b1d.percentage + "%;background:" + _0x4be245 + ";\"></div>\n        </div>\n        <div class=\"consumption-footer\">" + _0x58f20b + "</div>\n      </div>\n    ";
    }).join("");
    _0x5a95b8.innerHTML = "<div class=\"consumption-list\">" + _0x3cfca1 + "</div>";
  };
  const _0x5bf398 = async () => {
    try {
      const _0x4c83be = await _0xb1beb7("activity_get", {});
      const _0x2c0e46 = _0x5ec5f3(_0x4c83be);
      _0x3b7778.consumptionData = _0x2c0e46;
      const _0x447861 = await _0xb1beb7("role_getroleinfo", {});
      const _0x56cb47 = _0x447861?.["role"] || _0x447861;
      _0x4613c3(_0x56cb47);
      _0x4d21f6();
    } catch (_0x9745b) {}
  };
  const _0x4613c3 = _0x37b5f3 => {
    const _0x5afb39 = _0x37b5f3?.["items"] || {};
    _0x3b7778.consumptionActivityItem = _0x5afb39[5261]?.["quantity"] || 0;
    _0x3b7778.consumptionGoldItem = _0x5afb39[5262]?.["quantity"] || 0;
    const _0x310d92 = document.getElementById("qa-consumption-normal-item");
    const _0x33ad52 = document.getElementById("qa-consumption-gold-item");
    if (_0x310d92) {
      _0x310d92.textContent = _0x3b7778.consumptionActivityItem;
    }
    if (_0x33ad52) {
      _0x33ad52.textContent = _0x3b7778.consumptionGoldItem;
    }
  };
  const _0x3b3780 = async (_0x411066 = 4) => {
    {
      try {
        {
          const _0xb582b7 = {
            itemId: 5261,
            index: 0,
            number: _0x411066
          };
          await _0xb1beb7("item_openpack", _0xb582b7);
          const _0x43c6d2 = await _0xb1beb7("role_getroleinfo", {});
          const _0x414765 = _0x43c6d2?.["role"] || _0x43c6d2;
          _0x4613c3(_0x414765);
        }
      } catch (_0x56887f) {}
    }
  };
  let _0x4c2fe2 = null;
  let _0x451695 = null;
  let _0x34b0cc = "";
  const _0x8df7c4 = _0x21098d => {
    {
      return new Promise(_0x50a3e5 => {
        if (!_0x21098d) {
          {
            _0x50a3e5(null);
            return;
          }
        }
        const _0x3b4ce2 = new Image();
        _0x3b4ce2.crossOrigin = "anonymous";
        _0x3b4ce2.onload = () => _0x50a3e5(_0x3b4ce2);
        _0x3b4ce2.onerror = () => _0x50a3e5(null);
        _0x3b4ce2.src = _0x21098d;
        setTimeout(() => _0x50a3e5(null), 3000);
      });
    }
  };
  const _0x19b2e1 = () => {
    {
      const _0x3f38e6 = new Date();
      const _0x5d3b8d = _0x3f38e6.getDay();
      const _0x5abc05 = _0x5d3b8d === 0 ? 1 : _0x5d3b8d === 6 ? 0 : _0x5d3b8d + 1;
      const _0x3229d9 = new Date(_0x3f38e6);
      _0x3229d9.setDate(_0x3f38e6.getDate() - _0x5abc05);
      const _0x3bfb2c = _0x3229d9.getFullYear();
      const _0x142488 = String(_0x3229d9.getMonth() + 1).padStart(2, "0");
      const _0x20acd8 = String(_0x3229d9.getDate()).padStart(2, "0");
      return _0x3bfb2c + "/" + _0x142488 + "/" + _0x20acd8;
    }
  };
  const _0x285f72 = _0x199242 => {
    if (!_0x199242) {
      return "--";
    }
    const _0x30027c = new Date(_0x199242 * 1000);
    return String(_0x30027c.getHours()).padStart(2, "0") + ":" + String(_0x30027c.getMinutes()).padStart(2, "0");
  };
  const _0x22936a = _0x5148b6 => {
    {
      const _0x2787be = {
        text: "胜利",
        class: "win"
      };
      if (_0x5148b6 === 2) {
        return _0x2787be;
      }
      const _0x5f5c93 = {
        text: "失败",
        class: "lose"
      };
      return _0x5f5c93;
    }
  };
  const _0xcedd51 = _0x19c965 => {
    return _0x19c965 === 0 ? "进攻" : "防守";
  };
  const _0x5427ab = _0x2e9621 => {
    _0x4c2fe2 = _0x2e9621;
    const _0x3f13c1 = document.getElementById("qa-battle-records-content");
    if (!_0x3f13c1) {
      return;
    }
    if (!_0x2e9621 || !_0x2e9621.roleDetailsList || _0x2e9621.roleDetailsList.length === 0) {
      _0x3f13c1.innerHTML = "<div class=\"helper-text\">暂无战绩数据</div>";
      return;
    }
    const _0x2c8acb = _0x2e9621.roleDetailsList;
    _0x3f13c1.innerHTML = "\n    <div class=\"battle-records-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x34b0cc + "</div>\n      <div class=\"battle-records-list\">\n        " + _0x2c8acb.map((_0x20ee51, _0x385c77) => {
      const _0x296a2f = _0x20ee51.loseCnt > 0 ? (_0x20ee51.winCnt / _0x20ee51.loseCnt).toFixed(2) : _0x20ee51.winCnt || 0;
      return "\n          <div class=\"battle-member-card\" data-member-idx=\"" + _0x385c77 + "\">\n            <div class=\"battle-member-header\" data-toggle-member=\"" + _0x385c77 + "\">\n              <div class=\"battle-member-info\">\n                <span class=\"battle-rank\">#" + (_0x385c77 + 1) + "</span>\n                <img src=\"" + (_0x20ee51.headImg || "") + "\" class=\"battle-member-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                <span class=\"battle-member-name\">" + (_0x20ee51.name || "未知") + "</span>\n              </div>\n              <div class=\"battle-member-stats\">\n                <span class=\"stat-inline win\">胜 " + (_0x20ee51.winCnt || 0) + "</span>\n                <span class=\"stat-inline lose\">负 " + (_0x20ee51.loseCnt || 0) + "</span>\n                <span class=\"stat-inline kd\">KD " + _0x296a2f + "</span>\n                <span class=\"stat-inline building\">攻城 " + (_0x20ee51.buildingCnt || 0) + "</span>\n                <span class=\"expand-icon\">▼</span>\n              </div>\n            </div>\n            <div class=\"battle-member-details\" style=\"display:none;\">\n              " + (_0x20ee51.targetRoleList && _0x20ee51.targetRoleList.length > 0 ? "\n                <div class=\"battle-list\">\n                  " + _0x20ee51.targetRoleList.map(_0xd194eb => {
        {
          const _0x38882e = _0x22936a(_0xd194eb.newWinFlag);
          const _0x183be2 = _0xcedd51(_0xd194eb.attackType);
          const _0x196a09 = _0xd194eb.targetRoleInfo?.["name"] || "未知";
          const _0x4bda0f = _0xd194eb.targetRoleInfo?.["headImg"] || "";
          const _0xd14e9a = _0xd194eb.roleInfo?.["name"] || _0x20ee51.name || "";
          return "\n                      <div class=\"battle-item " + _0x38882e.class + "\">\n                        <span class=\"battle-time\">" + _0x285f72(_0xd194eb.timestamp) + "</span>\n                        <span class=\"battle-type " + (_0xd194eb.attackType === 0 ? "attack" : "defend") + "\">" + _0x183be2 + "</span>\n                        <span class=\"battle-participants\">\n                          <span class=\"battle-self\">" + _0xd14e9a + "</span>\n                          <span class=\"battle-vs\">vs</span>\n                          <img src=\"" + _0x4bda0f + "\" class=\"battle-target-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                          <span class=\"battle-target\">" + _0x196a09 + "</span>\n                        </span>\n                        <span class=\"battle-result " + _0x38882e.class + "\">" + _0x38882e.text + "</span>\n                      </div>\n                    ";
        }
      }).join("") + "\n                </div>\n              " : "<div class=\"helper-text\">无详细战斗记录</div>") + "\n            </div>\n          </div>\n        ";
    }).join("") + "\n      </div>\n    </div>\n  ";
    _0x3f13c1.querySelectorAll("[data-toggle-member]").forEach(_0x43069e => {
      _0x43069e.addEventListener("click", () => {
        const _0x52f220 = _0x43069e.getAttribute("data-toggle-member");
        const _0x5eb5aa = _0x3f13c1.querySelector("[data-member-idx=\"" + _0x52f220 + "\"]");
        const _0x4b19fd = _0x5eb5aa.querySelector(".battle-member-details");
        const _0x2601c5 = _0x43069e.querySelector(".expand-icon");
        _0x4b19fd.style.display === "none" ? (_0x4b19fd.style.display = "block", _0x2601c5.textContent = "▲") : (_0x4b19fd.style.display = "none", _0x2601c5.textContent = "▼");
      });
    });
  };
  const _0x4217ea = async _0x2e26e3 => {
    _0x34b0cc = _0x2e26e3 || _0x19b2e1();
    const _0x581baa = document.getElementById("qa-battle-date");
    if (_0x581baa) {
      _0x581baa.value = _0x34b0cc;
    }
    const _0x113ed0 = document.getElementById("qa-battle-records-content");
    if (_0x113ed0) {
      _0x113ed0.innerHTML = "<div class=\"helper-text\">正在加载战绩数据...</div>";
    }
    try {
      {
        const _0xa84295 = {
          date: _0x34b0cc
        };
        const _0x35c0b4 = await _0xb1beb7("legionwar_getdetails", _0xa84295);
        if (_0x35c0b4 && _0x35c0b4.roleDetailsList) {
          {
            _0x35c0b4.roleDetailsList.sort((_0x2bb6bb, _0x307207) => {
              {
                const _0x1ea88d = _0x2bb6bb.loseCnt > 0 ? _0x2bb6bb.winCnt / _0x2bb6bb.loseCnt : _0x2bb6bb.winCnt || 0;
                const _0x2d8dea = _0x307207.loseCnt > 0 ? _0x307207.winCnt / _0x307207.loseCnt : _0x307207.winCnt || 0;
                if (_0x2d8dea !== _0x1ea88d) {
                  {
                    return _0x2d8dea - _0x1ea88d;
                  }
                }
                return (_0x307207.buildingCnt || 0) - (_0x2bb6bb.buildingCnt || 0);
              }
            });
            _0x5427ab(_0x35c0b4);
            return _0x35c0b4;
          }
        } else {
          {
            if (_0x113ed0) {
              _0x113ed0.innerHTML = "<div class=\"helper-text\">未查询到战绩数据</div>";
            }
            return null;
          }
        }
      }
    } catch (_0x463ae8) {
      if (_0x113ed0) {
        _0x113ed0.innerHTML = "<div class=\"helper-text\">获取战绩失败，请重试</div>";
      }
      return null;
    }
  };
  const _0x59c369 = async () => {
    {
      if (!_0x4c2fe2?.["roleDetailsList"]) {
        {
          return;
        }
      }
      const _0x2f7dd0 = _0x4c2fe2.roleDetailsList;
      const _0xfbd270 = 2;
      const _0x167292 = document.createElement("canvas");
      const _0x6ab870 = _0x167292.getContext("2d");
      const _0x5133e0 = 20;
      const _0x1ce84f = 40;
      const _0x147d51 = 60;
      const _0x1ae322 = ["排名", "成员", "胜", "负", "KD", "攻城"];
      const _0x1b6c84 = [50, 160, 60, 60, 80, 60];
      const _0x512af3 = _0x1b6c84.reduce((_0x3c4a3e, _0x3ed074) => _0x3c4a3e + _0x3ed074, 0) + _0x5133e0 * 2;
      const _0x44ce70 = _0x147d51 + _0x2f7dd0.length * _0x1ce84f + _0x5133e0 * 2;
      _0x167292.width = _0x512af3 * _0xfbd270;
      _0x167292.height = _0x44ce70 * _0xfbd270;
      _0x6ab870.scale(_0xfbd270, _0xfbd270);
      _0x6ab870.fillStyle = "#ffffff";
      _0x6ab870.fillRect(0, 0, _0x512af3, _0x44ce70);
      _0x6ab870.fillStyle = "#1f2937";
      _0x6ab870.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x6ab870.fillText("盐场战绩 - " + _0x34b0cc, _0x5133e0, _0x5133e0 + 20);
      const _0x5fe614 = _0x147d51;
      _0x6ab870.fillStyle = "#f3f4f6";
      _0x6ab870.fillRect(_0x5133e0, _0x5fe614, _0x512af3 - _0x5133e0 * 2, 30);
      _0x6ab870.fillStyle = "#374151";
      _0x6ab870.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0xb47363 = _0x5133e0;
      _0x1ae322.forEach((_0x96ae63, _0x519d02) => {
        _0x6ab870.fillText(_0x96ae63, _0xb47363 + 8, _0x5fe614 + 20);
        _0xb47363 += _0x1b6c84[_0x519d02];
      });
      const _0x4c666f = _0x2f7dd0.map(_0x187197 => _0x8df7c4(_0x187197.headImg));
      const _0x53c300 = await Promise.all(_0x4c666f);
      _0x6ab870.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x2f7dd0.forEach((_0x47b942, _0x52f7f8) => {
        const _0x1f6b13 = _0x5fe614 + 30 + _0x52f7f8 * _0x1ce84f;
        _0x52f7f8 % 2 === 1 && (_0x6ab870.fillStyle = "#f9fafb", _0x6ab870.fillRect(_0x5133e0, _0x1f6b13, _0x512af3 - _0x5133e0 * 2, _0x1ce84f));
        _0x6ab870.fillStyle = "#1f2937";
        let _0x247720 = _0x5133e0;
        _0x6ab870.fillText(String(_0x52f7f8 + 1), _0x247720 + 8, _0x1f6b13 + 26);
        _0x247720 += _0x1b6c84[0];
        const _0xfaa3bd = _0x53c300[_0x52f7f8];
        if (_0xfaa3bd) {
          _0x6ab870.save();
          _0x6ab870.beginPath();
          _0x6ab870.arc(_0x247720 + 8 + 12, _0x1f6b13 + _0x1ce84f / 2, 12, 0, Math.PI * 2);
          _0x6ab870.clip();
          _0x6ab870.drawImage(_0xfaa3bd, _0x247720 + 8, _0x1f6b13 + (_0x1ce84f - 24) / 2, 24, 24);
          _0x6ab870.restore();
        }
        _0x6ab870.fillText((_0x47b942.name || "-").substring(0, 8), _0x247720 + 40, _0x1f6b13 + 26);
        _0x247720 += _0x1b6c84[1];
        _0x6ab870.fillStyle = "#10b981";
        _0x6ab870.fillText(String(_0x47b942.winCnt || 0), _0x247720 + 8, _0x1f6b13 + 26);
        _0x247720 += _0x1b6c84[2];
        _0x6ab870.fillStyle = "#ef4444";
        _0x6ab870.fillText(String(_0x47b942.loseCnt || 0), _0x247720 + 8, _0x1f6b13 + 26);
        _0x247720 += _0x1b6c84[3];
        _0x6ab870.fillStyle = "#6366f1";
        const _0x535de5 = _0x47b942.loseCnt > 0 ? (_0x47b942.winCnt / _0x47b942.loseCnt).toFixed(2) : _0x47b942.winCnt || 0;
        _0x6ab870.fillText(String(_0x535de5), _0x247720 + 8, _0x1f6b13 + 26);
        _0x247720 += _0x1b6c84[4];
        _0x6ab870.fillStyle = "#f59e0b";
        _0x6ab870.fillText(String(_0x47b942.buildingCnt || 0), _0x247720 + 8, _0x1f6b13 + 26);
        _0x6ab870.fillStyle = "#1f2937";
      });
      _0x6ab870.strokeStyle = "#e5e7eb";
      _0x6ab870.lineWidth = 1;
      _0x6ab870.strokeRect(_0x5133e0, _0x5fe614, _0x512af3 - _0x5133e0 * 2, 30 + _0x2f7dd0.length * _0x1ce84f);
      await _0x53ec78(_0x167292, "盐场战绩_" + _0x34b0cc.replace(/\//g, "-") + ".png");
    }
  };
  const _0x80b1d = _0x20226e => {
    switch (_0x20226e) {
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
  };
  const _0x410798 = _0x3c5063 => {
    {
      _0x451695 = _0x3c5063;
      const _0xac646b = document.getElementById("qa-history-records-content");
      if (!_0xac646b) {
        return;
      }
      if (!_0x3c5063 || !_0x3c5063.warMap || _0x3c5063.warMap.length === 0) {
        _0xac646b.innerHTML = "<div class=\"helper-text\">暂无历史战绩数据</div>";
        return;
      }
      _0xac646b.innerHTML = "\n    <div class=\"history-records-info\">\n      <div class=\"history-records-list\">\n        " + _0x3c5063.warMap.map((_0x27df1b, _0x186dd5) => "\n          <div class=\"history-war-item\">\n            <div class=\"war-type\">" + _0x80b1d(_0x27df1b.legionWarType) + "</div>\n            <div class=\"war-date\">日期: " + _0x27df1b.warDate + "</div>\n            <div class=\"war-rank\">名次: " + (_0x3c5063.warRank[_0x186dd5] || "--") + "</div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
    }
  };
  const _0x1653f2 = async () => {
    const _0x22229f = document.getElementById("qa-history-records-content");
    if (_0x22229f) {
      _0x22229f.innerHTML = "<div class=\"helper-text\">正在加载历史战绩...</div>";
    }
    try {
      const _0x4ecf6a = await _0xb1beb7("legion_getinfo", {});
      if (_0x4ecf6a && _0x4ecf6a.info && _0x4ecf6a.info.warRank && _0x4ecf6a.info.warMap) {
        const _0x22f663 = Object.values(_0x4ecf6a.info.warMap);
        const _0x28d54f = {
          warMap: [].concat(..._0x22f663).reverse(),
          warRank: _0x4ecf6a.info.warRank.reverse()
        };
        _0x410798(_0x28d54f);
        return _0x28d54f;
      } else {
        if (_0x22229f) {
          _0x22229f.innerHTML = "<div class=\"helper-text\">未查询到历史战绩数据</div>";
        }
        return null;
      }
    } catch (_0x144897) {
      if (_0x22229f) {
        _0x22229f.innerHTML = "<div class=\"helper-text\">获取历史战绩失败，请重试</div>";
      }
      return null;
    }
  };
  const _0x239329 = async () => {
    if (!_0x451695?.["warMap"]) {
      {
        return;
      }
    }
    const _0x43b404 = _0x451695.warMap;
    const _0x275bf1 = _0x451695.warRank;
    const _0x23f1c5 = 2;
    const _0x40287a = document.createElement("canvas");
    const _0x1df7ba = _0x40287a.getContext("2d");
    const _0xfb4f32 = 20;
    const _0x231871 = 35;
    const _0x3bd72c = 60;
    const _0x321309 = ["序号", "战争类型", "日期", "名次"];
    const _0x45ee82 = [50, 120, 120, 80];
    const _0x1feaf1 = _0x45ee82.reduce((_0x5c9835, _0x4b108f) => _0x5c9835 + _0x4b108f, 0) + _0xfb4f32 * 2;
    const _0x43b75c = _0x3bd72c + _0x43b404.length * _0x231871 + _0xfb4f32 * 2;
    _0x40287a.width = _0x1feaf1 * _0x23f1c5;
    _0x40287a.height = _0x43b75c * _0x23f1c5;
    _0x1df7ba.scale(_0x23f1c5, _0x23f1c5);
    _0x1df7ba.fillStyle = "#ffffff";
    _0x1df7ba.fillRect(0, 0, _0x1feaf1, _0x43b75c);
    _0x1df7ba.fillStyle = "#1f2937";
    _0x1df7ba.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x1df7ba.fillText("俱乐部历史战绩", _0xfb4f32, _0xfb4f32 + 20);
    const _0x39b52b = _0x3bd72c;
    _0x1df7ba.fillStyle = "#f3f4f6";
    _0x1df7ba.fillRect(_0xfb4f32, _0x39b52b, _0x1feaf1 - _0xfb4f32 * 2, 30);
    _0x1df7ba.fillStyle = "#374151";
    _0x1df7ba.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0xab276e = _0xfb4f32;
    _0x321309.forEach((_0x556f20, _0x3968dc) => {
      _0x1df7ba.fillText(_0x556f20, _0xab276e + 8, _0x39b52b + 20);
      _0xab276e += _0x45ee82[_0x3968dc];
    });
    _0x1df7ba.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x43b404.forEach((_0x4783b2, _0x8e93ec) => {
      const _0x1a71b0 = _0x39b52b + 30 + _0x8e93ec * _0x231871;
      if (_0x8e93ec % 2 === 1) {
        {
          _0x1df7ba.fillStyle = "#f9fafb";
          _0x1df7ba.fillRect(_0xfb4f32, _0x1a71b0, _0x1feaf1 - _0xfb4f32 * 2, _0x231871);
        }
      }
      _0x1df7ba.fillStyle = "#1f2937";
      let _0x4886b3 = _0xfb4f32;
      _0x1df7ba.fillText(String(_0x8e93ec + 1), _0x4886b3 + 8, _0x1a71b0 + 22);
      _0x4886b3 += _0x45ee82[0];
      _0x1df7ba.fillText(_0x80b1d(_0x4783b2.legionWarType), _0x4886b3 + 8, _0x1a71b0 + 22);
      _0x4886b3 += _0x45ee82[1];
      _0x1df7ba.fillText(_0x4783b2.warDate || "--", _0x4886b3 + 8, _0x1a71b0 + 22);
      _0x4886b3 += _0x45ee82[2];
      const _0x4b35dd = _0x275bf1[_0x8e93ec] || "--";
      _0x1df7ba.fillStyle = _0x4b35dd <= 3 ? "#f59e0b" : "#6b7280";
      _0x1df7ba.fillText(String(_0x4b35dd), _0x4886b3 + 8, _0x1a71b0 + 22);
      _0x1df7ba.fillStyle = "#1f2937";
    });
    _0x1df7ba.strokeStyle = "#e5e7eb";
    _0x1df7ba.lineWidth = 1;
    _0x1df7ba.strokeRect(_0xfb4f32, _0x39b52b, _0x1feaf1 - _0xfb4f32 * 2, 30 + _0x43b404.length * _0x231871);
    await _0x53ec78(_0x40287a, "俱乐部历史战绩_" + new Date().toLocaleDateString().replace(/\//g, "-") + ".png");
  };
  const _0x29450f = () => {
    const _0x2d0707 = document.getElementById("qa-battle-date");
    _0x2d0707 && !_0x2d0707.value && (_0x2d0707.value = _0x19b2e1());
  };
  const _0x44c9b5 = () => {
    const _0x395b78 = document.getElementById("qa-battle-date");
    return _0x395b78 ? _0x395b78.value : _0x19b2e1();
  };
  const _0x3986f8 = {
    __proto__: null,
    exportBattleRecordsImage: _0x59c369,
    exportHistoryRecordsImage: _0x239329,
    fetchBattleRecords: _0x4217ea,
    fetchHistoryRecords: _0x1653f2,
    getBattleDate: _0x44c9b5,
    initBattleDate: _0x29450f,
    renderBattleRecords: _0x5427ab,
    renderHistoryRecords: _0x410798
  };
  var _0x5a4f62 = Object.freeze(_0x3986f8);
  let _0x3ea3a4 = null;
  let _0x4b0cc3 = null;
  let _0x1e5a4e = null;
  let _0x549ae5 = "";
  let _0x24567d = "";
  let _0x41b565 = "";
  let _0x28f3f4 = "gold1";
  let _0x541298 = 1;
  let _0x48ad0f = 20;
  let _0xb2ad54 = 1;
  let _0x30dbc5 = 20;
  let _0x2113cc = 1;
  let _0x4abb5b = 20;
  const _0x1294ba = _0x1bb97e => {
    return new Promise(_0xdf3150 => {
      if (!_0x1bb97e) {
        {
          _0xdf3150(null);
          return;
        }
      }
      const _0x853ce2 = new Image();
      _0x853ce2.crossOrigin = "anonymous";
      _0x853ce2.onload = () => _0xdf3150(_0x853ce2);
      _0x853ce2.onerror = () => _0xdf3150(null);
      _0x853ce2.src = _0x1bb97e;
      setTimeout(() => _0xdf3150(null), 3000);
    });
  };
  const _0x252ec7 = () => {
    const _0xa6f81c = new Date();
    const _0x2aeaef = _0xa6f81c.getFullYear();
    const _0x55785d = String(_0xa6f81c.getMonth() + 1).padStart(2, "0");
    const _0x4c51b1 = String(_0xa6f81c.getDate()).padStart(2, "0");
    return _0x2aeaef + "/" + _0x55785d + "/" + _0x4c51b1;
  };
  const _0x25f246 = _0x4ea307 => {
    if (!_0x4ea307) {
      return "0";
    }
    if (_0x4ea307 >= 100000000) {
      return (_0x4ea307 / 100000000).toFixed(2) + "亿";
    }
    if (_0x4ea307 >= 10000) {
      {
        return (_0x4ea307 / 10000).toFixed(2) + "万";
      }
    }
    return _0x4ea307.toString();
  };
  const _0x2cd53a = _0x3e37d4 => {
    {
      if (_0x3e37d4 === undefined || _0x3e37d4 === null) {
        return "0";
      }
      return Number(_0x3e37d4).toFixed(0);
    }
  };
  const _0x177927 = _0x2f085c => {
    {
      if (!_0x2f085c) {
        return "0";
      }
      return String(Number(_0x2f085c) - 27);
    }
  };
  const _0x46dd08 = async () => {
    {
      _0x549ae5 = _0x252ec7();
      const _0x587ef2 = document.getElementById("qa-top-rank-content");
      if (_0x587ef2) {
        _0x587ef2.innerHTML = "<div class=\"helper-text\">正在加载巅峰数据...</div>";
      }
      try {
        {
          const _0x5d04b3 = {
            rankType: 1
          };
          const _0x13f057 = await _0xb1beb7("arena_getarearank", _0x5d04b3);
          if (!_0x13f057 || !_0x13f057.list) {
            _0x3ea3a4 = null;
            if (_0x587ef2) {
              _0x587ef2.innerHTML = "<div class=\"helper-text\">未查询到巅峰数据</div>";
            }
            return null;
          }
          const _0x26b980 = {};
          for (const [_0x3c84e7, _0x2869dd] of Object.entries(_0x13f057.list)) {
            {
              _0x26b980[_0x3c84e7] = {
                serverId: _0x2869dd?.["serverId"] || 0,
                roleId: _0x2869dd?.["roleId"] || 0,
                name: _0x2869dd?.["name"] || "",
                headImg: _0x2869dd?.["headImg"] || "",
                power: _0x25f246(_0x2869dd?.["power"] || 0),
                rank: _0x2869dd?.["rank"] || 0,
                score: _0x2cd53a(_0x2869dd?.["score"] || 0)
              };
            }
          }
          _0x3ea3a4 = _0x26b980;
          _0x541298 = 1;
          _0x456b5a();
          return _0x26b980;
        }
      } catch (_0x15b06c) {
        _0x3ea3a4 = null;
        if (_0x587ef2) {
          _0x587ef2.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>";
        }
        return null;
      }
    }
  };
  const _0x456b5a = () => {
    if (!_0x3ea3a4) {
      return;
    }
    const _0x4f7380 = document.getElementById("qa-top-rank-content");
    if (!_0x4f7380) {
      return;
    }
    const _0x8b36ae = Object.entries(_0x3ea3a4);
    const _0xdd607d = Math.ceil(_0x8b36ae.length / _0x48ad0f);
    const _0x4f43e9 = (_0x541298 - 1) * _0x48ad0f;
    const _0x1712a0 = _0x4f43e9 + _0x48ad0f;
    const _0x40ed1d = _0x8b36ae.slice(_0x4f43e9, _0x1712a0);
    _0x4f7380.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x549ae5 + "</div>\n      <div class=\"rank-list\">\n        " + _0x40ed1d.map(([_0x4564a7, _0x25636c]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-left\">" + _0x25636c.rank + "</span>\n              <img src=\"" + (_0x25636c.headImg || "") + "\" class=\"rank-member-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n              <div class=\"rank-member-stats\">\n                <span class=\"stat-inline name\">" + _0x25636c.name + "</span>\n                <span class=\"stat-inline power\">战力 " + _0x25636c.power + "</span>\n                <span class=\"stat-inline score\">积分 " + _0x25636c.score + "</span>\n                <span class=\"stat-inline id\">玩家ID " + _0x25636c.roleId + "</span>\n                <span class=\"stat-inline win\">区服 " + _0x177927(_0x25636c.serverId) + "</span>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (_0xdd607d > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + _0x541298 + " / " + _0xdd607d + " 页，共 " + _0x8b36ae.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (_0x541298 === 1 ? "disabled" : "") + " data-action=\"top-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (_0x541298 === _0xdd607d ? "disabled" : "") + " data-action=\"top-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-top-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (_0x48ad0f === 10 ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (_0x48ad0f === 20 ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (_0x48ad0f === 50 ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (_0x48ad0f === 100 ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    _0x8f75d7("qa-top-rank-content");
  };
  const _0x8f75d7 = _0x25c5a0 => {
    const _0x35e75d = document.getElementById(_0x25c5a0);
    if (!_0x35e75d) {
      return;
    }
    const _0x3deff5 = _0x35e75d.querySelectorAll("[data-rank-scrollable]");
    _0x3deff5.forEach(_0x4e8559 => {
      {
        let _0x3aad34 = false;
        let _0x10c58e;
        let _0x48787a;
        const _0x52ede4 = _0x1cef2d => {
          if (_0x1cef2d.target.closest(".rank-badge-top-left")) {
            {
              return;
            }
          }
          _0x3aad34 = true;
          _0x4e8559.style.cursor = "grabbing";
          _0x10c58e = _0x1cef2d.pageX - _0x4e8559.offsetLeft;
          _0x48787a = _0x4e8559.scrollLeft;
          _0x1cef2d.preventDefault();
        };
        const _0x561b65 = () => {
          {
            _0x3aad34 = false;
            _0x4e8559.style.cursor = "grab";
          }
        };
        const _0x1939cd = () => {
          _0x3aad34 = false;
          _0x4e8559.style.cursor = "grab";
        };
        const _0x2bbbeb = _0x3c9d42 => {
          {
            if (!_0x3aad34) {
              return;
            }
            _0x3c9d42.preventDefault();
            const _0x5e772a = _0x3c9d42.pageX - _0x4e8559.offsetLeft;
            const _0x16205e = (_0x5e772a - _0x10c58e) * 2;
            _0x4e8559.scrollLeft = _0x48787a - _0x16205e;
          }
        };
        _0x4e8559.addEventListener("mousedown", _0x52ede4);
        _0x4e8559.addEventListener("mouseleave", _0x561b65);
        _0x4e8559.addEventListener("mouseup", _0x1939cd);
        _0x4e8559.addEventListener("mousemove", _0x2bbbeb);
      }
    });
  };
  const _0x32ef84 = async () => {
    if (!_0x3ea3a4) {
      return;
    }
    const _0x4d9230 = Object.entries(_0x3ea3a4);
    const _0x21ac6a = 2;
    const _0x36afca = document.createElement("canvas");
    const _0xf4bde9 = _0x36afca.getContext("2d");
    const _0x4e24cd = 20;
    const _0x302f69 = 50;
    const _0x183e05 = 80;
    const _0x2d9965 = ["排名", "头像", "服务器ID", "玩家ID", "玩家名称", "战力", "巅峰积分"];
    const _0x30ba75 = [60, 50, 100, 120, 150, 120, 120];
    const _0x3c087c = _0x30ba75.reduce((_0x593606, _0x5e44c1) => _0x593606 + _0x5e44c1, 0) + _0x4e24cd * 2;
    const _0x2e612d = _0x183e05 + (_0x4d9230.length + 1) * _0x302f69 + _0x4e24cd * 2;
    const _0x487442 = _0x4d9230.map(([, _0x3e5a3f]) => _0x1294ba(_0x3e5a3f.headImg));
    const _0x1e1e12 = await Promise.all(_0x487442);
    _0x36afca.width = _0x3c087c * _0x21ac6a;
    _0x36afca.height = _0x2e612d * _0x21ac6a;
    _0xf4bde9.scale(_0x21ac6a, _0x21ac6a);
    _0xf4bde9.fillStyle = "#ffffff";
    _0xf4bde9.fillRect(0, 0, _0x3c087c, _0x2e612d);
    _0xf4bde9.fillStyle = "#1f2937";
    _0xf4bde9.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0xf4bde9.fillText("巅峰榜 - " + _0x549ae5, _0x4e24cd, _0x4e24cd + 20);
    const _0x551ce8 = _0x183e05;
    _0xf4bde9.fillStyle = "#f3f4f6";
    _0xf4bde9.fillRect(_0x4e24cd, _0x551ce8, _0x3c087c - _0x4e24cd * 2, 30);
    _0xf4bde9.fillStyle = "#374151";
    _0xf4bde9.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x1e560a = _0x4e24cd;
    _0x2d9965.forEach((_0x4085b7, _0x5999be) => {
      _0xf4bde9.fillText(_0x4085b7, _0x1e560a + 8, _0x551ce8 + 20);
      _0x1e560a += _0x30ba75[_0x5999be];
    });
    _0xf4bde9.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x4d9230.forEach(([_0x11c288, _0x935548], _0xc264c7) => {
      {
        const _0x2c2e7b = _0x551ce8 + 30 + _0xc264c7 * _0x302f69;
        _0xc264c7 % 2 === 1 && (_0xf4bde9.fillStyle = "#f9fafb", _0xf4bde9.fillRect(_0x4e24cd, _0x2c2e7b, _0x3c087c - _0x4e24cd * 2, _0x302f69));
        _0xf4bde9.fillStyle = "#1f2937";
        let _0x15921a = _0x4e24cd;
        _0xf4bde9.fillText(String(_0x935548.rank), _0x15921a + 8, _0x2c2e7b + 30);
        _0x15921a += _0x30ba75[0];
        const _0x5e1c1b = _0x1e1e12[_0xc264c7];
        _0x5e1c1b && (_0xf4bde9.save(), _0xf4bde9.beginPath(), _0xf4bde9.arc(_0x15921a + 25, _0x2c2e7b + _0x302f69 / 2, 18, 0, Math.PI * 2), _0xf4bde9.clip(), _0xf4bde9.drawImage(_0x5e1c1b, _0x15921a + 7, _0x2c2e7b + (_0x302f69 - 36) / 2, 36, 36), _0xf4bde9.restore());
        _0x15921a += _0x30ba75[1];
        _0xf4bde9.fillText(_0x177927(_0x935548.serverId), _0x15921a + 8, _0x2c2e7b + 30);
        _0x15921a += _0x30ba75[2];
        _0xf4bde9.fillText(String(_0x935548.roleId), _0x15921a + 8, _0x2c2e7b + 30);
        _0x15921a += _0x30ba75[3];
        _0xf4bde9.fillText(_0x935548.name || "-", _0x15921a + 8, _0x2c2e7b + 30);
        _0x15921a += _0x30ba75[4];
        _0xf4bde9.fillText(_0x935548.power, _0x15921a + 8, _0x2c2e7b + 30);
        _0x15921a += _0x30ba75[5];
        _0xf4bde9.fillText(_0x935548.score, _0x15921a + 8, _0x2c2e7b + 30);
      }
    });
    _0xf4bde9.strokeStyle = "#e5e7eb";
    _0xf4bde9.lineWidth = 1;
    _0xf4bde9.strokeRect(_0x4e24cd, _0x551ce8, _0x3c087c - _0x4e24cd * 2, 30 + _0x4d9230.length * _0x302f69);
    const _0x38962c = _0x549ae5.split("/");
    const _0x44fe56 = _0x38962c[0] + "年" + _0x38962c[1] + "月" + _0x38962c[2] + "日";
    await _0x53ec78(_0x36afca, _0x44fe56 + "巅峰榜信息.png");
  };
  const _0x1e08da = _0x501822 => {
    {
      if (!_0x3ea3a4) {
        return;
      }
      const _0x5e50bc = Object.entries(_0x3ea3a4);
      const _0x144e27 = Math.ceil(_0x5e50bc.length / _0x48ad0f);
      if (_0x501822 === "prev" && _0x541298 > 1) {
        {
          _0x541298--;
        }
      } else {
        if (_0x501822 === "next" && _0x541298 < _0x144e27) {
          {
            _0x541298++;
          }
        }
      }
      _0x456b5a();
    }
  };
  const _0x2eefe6 = _0x1f3469 => {
    _0x48ad0f = Number(_0x1f3469) || 20;
    _0x541298 = 1;
    _0x456b5a();
  };
  const _0x446895 = async () => {
    {
      _0x24567d = _0x252ec7();
      const _0x588c01 = document.getElementById("qa-club-rank-content");
      if (_0x588c01) {
        _0x588c01.innerHTML = "<div class=\"helper-text\">正在加载俱乐部数据...</div>";
      }
      try {
        const _0x20dd44 = await _0xb1beb7("legion_getarearank", {});
        if (!_0x20dd44 || !_0x20dd44.list) {
          {
            _0x4b0cc3 = null;
            if (_0x588c01) {
              _0x588c01.innerHTML = "<div class=\"helper-text\">未查询到俱乐部数据</div>";
            }
            return null;
          }
        }
        const _0x112321 = {};
        const _0x507ad1 = Object.entries(_0x20dd44.list);
        for (const [_0x12dc3d, _0x3a163c] of _0x507ad1) {
          try {
            {
              const _0x514dcd = {
                legionId: _0x3a163c?.["id"]
              };
              const _0x387f5f = await _0xb1beb7("legion_getinfobyid", _0x514dcd, 5000);
              const _0x37e77a = [];
              const _0x65c321 = [];
              const _0x19bfc3 = [];
              for (const [_0x5ef35c, _0x421b07] of Object.entries(_0x387f5f?.["legionData"]?.["members"] || {})) {
                _0x421b07.roleId !== undefined && (_0x37e77a.push(_0x421b07.roleId), _0x65c321.push(_0x421b07.name), _0x19bfc3.push(_0x421b07.headImg || ""));
              }
              _0x112321[_0x12dc3d] = {
                rank: _0x3a163c.rank || 0,
                ServerId: _0x177927(_0x3a163c.serverId || 0),
                Clubname: _0x3a163c.name || "",
                logo: _0x387f5f?.["legionData"]?.["logo"] || "",
                redQuench: _0x387f5f?.["legionData"]?.["quenchNum"] || 0,
                power: _0x25f246(_0x3a163c.power || 0),
                roleID1: _0x37e77a[0] || 0,
                roleID2: _0x37e77a[1] || 0,
                roleID3: _0x37e77a[2] || 0,
                name1: _0x65c321[0] || "",
                name2: _0x65c321[1] || "",
                name3: _0x65c321[2] || "",
                headImg1: _0x19bfc3[0] || "",
                headImg2: _0x19bfc3[1] || "",
                headImg3: _0x19bfc3[2] || ""
              };
            }
          } catch (_0x1f0d52) {
            _0x112321[_0x12dc3d] = {
              rank: _0x3a163c.rank || 0,
              ServerId: _0x177927(_0x3a163c.serverId || 0),
              Clubname: _0x3a163c.name || "",
              logo: "",
              redQuench: 0,
              power: _0x25f246(_0x3a163c.power || 0),
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
        _0x4b0cc3 = _0x112321;
        _0xb2ad54 = 1;
        _0x2651a4();
        return _0x112321;
      } catch (_0x6de6ec) {
        _0x4b0cc3 = null;
        if (_0x588c01) {
          _0x588c01.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>";
        }
        return null;
      }
    }
  };
  const _0x2651a4 = () => {
    if (!_0x4b0cc3) {
      return;
    }
    const _0x32f244 = document.getElementById("qa-club-rank-content");
    if (!_0x32f244) {
      return;
    }
    const _0x221222 = Object.entries(_0x4b0cc3);
    const _0x2fbf64 = Math.ceil(_0x221222.length / _0x30dbc5);
    const _0x577582 = (_0xb2ad54 - 1) * _0x30dbc5;
    const _0xcf0488 = _0x577582 + _0x30dbc5;
    const _0xf6ef4f = _0x221222.slice(_0x577582, _0xcf0488);
    _0x32f244.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x24567d + "</div>\n      <div class=\"rank-list\">\n        " + _0xf6ef4f.map(([_0x6cb263, _0x1502ef]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-top-left\">排名 " + _0x1502ef.rank + "</span>\n              <div class=\"rank-member-content\">\n                <img src=\"" + (_0x1502ef.logo || "") + "\" class=\"rank-club-logo\" onerror=\"this.style.display='none'\" alt=\"\">\n                <div class=\"rank-member-stats\">\n                  <span class=\"stat-inline win\">区服 " + _0x1502ef.ServerId + "</span>\n                  <span class=\"stat-inline loss\">俱乐部名 " + _0x1502ef.Clubname + "</span>\n                  <span class=\"stat-inline red\">总红淬 " + _0x1502ef.redQuench + "红</span>\n                  <span class=\"stat-inline power\">战力 " + _0x1502ef.power + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x1502ef.name1 + "</span>\n                  <img src=\"" + (_0x1502ef.headImg1 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x1502ef.roleID1 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x1502ef.name2 + "</span>\n                  <img src=\"" + (_0x1502ef.headImg2 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x1502ef.roleID2 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0x1502ef.name3 + "</span>\n                  <img src=\"" + (_0x1502ef.headImg3 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0x1502ef.roleID3 + "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (_0x2fbf64 > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + _0xb2ad54 + " / " + _0x2fbf64 + " 页，共 " + _0x221222.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (_0xb2ad54 === 1 ? "disabled" : "") + " data-action=\"club-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (_0xb2ad54 === _0x2fbf64 ? "disabled" : "") + " data-action=\"club-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-club-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (_0x30dbc5 === 10 ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (_0x30dbc5 === 20 ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (_0x30dbc5 === 50 ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (_0x30dbc5 === 100 ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    _0x8f75d7("qa-club-rank-content");
  };
  const _0x3c3503 = async () => {
    if (!_0x4b0cc3) {
      return;
    }
    const _0x501d39 = Object.entries(_0x4b0cc3);
    const _0x45fdb3 = 2;
    const _0x474b28 = document.createElement("canvas");
    const _0x37e5bf = _0x474b28.getContext("2d");
    const _0x103f1b = 20;
    const _0x5682e6 = 70;
    const _0x40f520 = 80;
    const _0x12d65d = ["排名", "俱乐部", "区服", "总红淬", "战力", "玩家1", "玩家2", "玩家3"];
    const _0xa0c60a = [60, 150, 60, 80, 100, 120, 120, 120];
    const _0x338331 = _0xa0c60a.reduce((_0x3a22b0, _0x483ef4) => _0x3a22b0 + _0x483ef4, 0) + _0x103f1b * 2;
    const _0x6c066f = _0x40f520 + (_0x501d39.length + 1) * _0x5682e6 + _0x103f1b * 2;
    _0x474b28.width = _0x338331 * _0x45fdb3;
    _0x474b28.height = _0x6c066f * _0x45fdb3;
    _0x37e5bf.scale(_0x45fdb3, _0x45fdb3);
    const _0x4c24b7 = _0x501d39.map(([, _0x4e54c0]) => _0x1294ba(_0x4e54c0.logo));
    const _0x2f2bfd = _0x501d39.flatMap(([, _0x1e7a1d]) => [_0x1294ba(_0x1e7a1d.headImg1), _0x1294ba(_0x1e7a1d.headImg2), _0x1294ba(_0x1e7a1d.headImg3)]);
    const [_0x43a79c, ..._0x41676c] = await Promise.all([Promise.all(_0x4c24b7), ..._0x2f2bfd]);
    const _0x2f35f0 = [];
    for (let _0x56ccca = 0; _0x56ccca < _0x501d39.length; _0x56ccca++) {
      {
        _0x2f35f0.push([_0x41676c[_0x56ccca * 3], _0x41676c[_0x56ccca * 3 + 1], _0x41676c[_0x56ccca * 3 + 2]]);
      }
    }
    _0x37e5bf.fillStyle = "#ffffff";
    _0x37e5bf.fillRect(0, 0, _0x338331, _0x6c066f);
    _0x37e5bf.fillStyle = "#1f2937";
    _0x37e5bf.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x37e5bf.fillText("五百服Top俱乐部 - " + _0x24567d, _0x103f1b, _0x103f1b + 20);
    const _0x5a1fa7 = _0x40f520;
    _0x37e5bf.fillStyle = "#f3f4f6";
    _0x37e5bf.fillRect(_0x103f1b, _0x5a1fa7, _0x338331 - _0x103f1b * 2, 30);
    _0x37e5bf.fillStyle = "#374151";
    _0x37e5bf.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
    let _0x257d23 = _0x103f1b;
    _0x12d65d.forEach((_0x371cfe, _0x8da278) => {
      _0x37e5bf.fillText(_0x371cfe, _0x257d23 + 4, _0x5a1fa7 + 20);
      _0x257d23 += _0xa0c60a[_0x8da278];
    });
    _0x37e5bf.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    _0x501d39.forEach(([_0x50b93e, _0x2437ab], _0x4777ca) => {
      const _0x17c460 = _0x5a1fa7 + 30 + _0x4777ca * _0x5682e6;
      _0x4777ca % 2 === 1 && (_0x37e5bf.fillStyle = "#f9fafb", _0x37e5bf.fillRect(_0x103f1b, _0x17c460, _0x338331 - _0x103f1b * 2, _0x5682e6));
      _0x37e5bf.fillStyle = "#1f2937";
      let _0x471352 = _0x103f1b;
      _0x37e5bf.fillText(String(_0x2437ab.rank), _0x471352 + 8, _0x17c460 + 20);
      _0x471352 += _0xa0c60a[0];
      const _0x515515 = _0x43a79c[_0x4777ca];
      if (_0x515515) {
        {
          _0x37e5bf.save();
          _0x37e5bf.beginPath();
          _0x37e5bf.arc(_0x471352 + 20, _0x17c460 + _0x5682e6 / 2, 14, 0, Math.PI * 2);
          _0x37e5bf.clip();
          _0x37e5bf.drawImage(_0x515515, _0x471352 + 6, _0x17c460 + (_0x5682e6 - 28) / 2, 28, 28);
          _0x37e5bf.restore();
        }
      }
      _0x37e5bf.fillText(_0x2437ab.Clubname || "-", _0x471352 + 32, _0x17c460 + 20);
      _0x471352 += _0xa0c60a[1];
      _0x37e5bf.fillText(_0x2437ab.ServerId, _0x471352 + 8, _0x17c460 + 20);
      _0x471352 += _0xa0c60a[2];
      _0x37e5bf.fillText(_0x2437ab.redQuench + "红", _0x471352 + 8, _0x17c460 + 20);
      _0x471352 += _0xa0c60a[3];
      _0x37e5bf.fillText(_0x2437ab.power, _0x471352 + 8, _0x17c460 + 20);
      _0x471352 += _0xa0c60a[4];
      const _0x374130 = _0x2f35f0[_0x4777ca] || [];
      for (let _0x3cd95d = 0; _0x3cd95d < 3; _0x3cd95d++) {
        {
          const _0x509c89 = _0x374130[_0x3cd95d];
          const _0x49d93a = _0x2437ab["name" + (_0x3cd95d + 1)] || "-";
          const _0x4747b8 = String(_0x2437ab["roleID" + (_0x3cd95d + 1)] || 0);
          _0x509c89 && (_0x37e5bf.save(), _0x37e5bf.beginPath(), _0x37e5bf.arc(_0x471352 + 12, _0x17c460 + 20, 8, 0, Math.PI * 2), _0x37e5bf.clip(), _0x37e5bf.drawImage(_0x509c89, _0x471352 + 4, _0x17c460 + 12, 16, 16), _0x37e5bf.restore());
          _0x37e5bf.fillText(_0x49d93a, _0x471352 + 24, _0x17c460 + 20);
          _0x37e5bf.fillText(_0x4747b8, _0x471352 + 24, _0x17c460 + 35);
          _0x471352 += _0xa0c60a[5 + _0x3cd95d];
        }
      }
    });
    _0x37e5bf.strokeStyle = "#e5e7eb";
    _0x37e5bf.lineWidth = 1;
    _0x37e5bf.strokeRect(_0x103f1b, _0x5a1fa7, _0x338331 - _0x103f1b * 2, 30 + _0x501d39.length * _0x5682e6);
    const _0x2a0605 = _0x24567d.split("/");
    const _0xc0087b = _0x2a0605[0] + "年" + _0x2a0605[1] + "月" + _0x2a0605[2] + "日";
    await _0x53ec78(_0x474b28, _0xc0087b + "TOP俱乐部信息.png");
  };
  const _0x3dcf00 = _0x5b2a0c => {
    if (!_0x4b0cc3) {
      return;
    }
    const _0x1ab0c1 = Object.entries(_0x4b0cc3);
    const _0x15dba1 = Math.ceil(_0x1ab0c1.length / _0x30dbc5);
    if (_0x5b2a0c === "prev" && _0xb2ad54 > 1) {
      _0xb2ad54--;
    } else {
      _0x5b2a0c === "next" && _0xb2ad54 < _0x15dba1 && _0xb2ad54++;
    }
    _0x2651a4();
  };
  const _0xe83869 = _0x1df06a => {
    _0x30dbc5 = Number(_0x1df06a) || 20;
    _0xb2ad54 = 1;
    _0x2651a4();
  };
  const _0x5a198e = _0x2a14f1 => {
    {
      switch (_0x2a14f1) {
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
    }
  };
  const _0x2a2426 = _0x1a60e5 => {
    {
      switch (_0x1a60e5) {
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
    }
  };
  const _0x478eb3 = async (_0x279f21 = _0x28f3f4) => {
    {
      _0x28f3f4 = _0x279f21;
      _0x41b565 = _0x252ec7();
      const _0x1de2e9 = document.getElementById("qa-gold-rank-content");
      if (_0x1de2e9) {
        _0x1de2e9.innerHTML = "<div class=\"helper-text\">正在加载黄金积分数据...</div>";
      }
      try {
        const _0x21a2ff = await _0xb1beb7("legionwar_getgoldmonthwarrank", {
          startRank: _0x5a198e(_0x279f21),
          endRank: _0x2a2426(_0x279f21)
        });
        if (!_0x21a2ff || !_0x21a2ff.legionList) {
          {
            _0x1e5a4e = null;
            if (_0x1de2e9) {
              _0x1de2e9.innerHTML = "<div class=\"helper-text\">未查询到俱乐部数据</div>";
            }
            return null;
          }
        }
        const _0x1edd90 = {};
        const _0x20f9fc = Object.entries(_0x21a2ff.legionList);
        for (const [_0x414de1, _0x3d1291] of _0x20f9fc) {
          try {
            const _0x345c09 = {
              legionId: _0x3d1291?.["id"]
            };
            const _0x510525 = await _0xb1beb7("legion_getinfobyid", _0x345c09, 5000);
            const _0xe2b3ac = [];
            const _0x4781e7 = [];
            const _0x7b76dd = [];
            const _0x2eba95 = [];
            for (const [_0x586f94, _0x370e8f] of Object.entries(_0x510525?.["legionData"]?.["members"] || {})) {
              if (_0x370e8f.roleId !== undefined) {
                {
                  _0xe2b3ac.push(_0x370e8f.roleId);
                  _0x4781e7.push(_0x370e8f.name);
                  _0x2eba95.push(_0x370e8f.headImg || "");
                  _0x370e8f.custom?.["red_quench_cnt"] !== undefined && _0x7b76dd.push(_0x370e8f.custom.red_quench_cnt + "红");
                }
              }
            }
            _0x1edd90[_0x414de1] = {
              rank: _0x3d1291.rank || 0,
              id: _0x3d1291.id || 0,
              ServerId: _0x177927(_0x3d1291.serverId || 0),
              redQuench: _0x510525?.["legionData"]?.["quenchNum"] || 0,
              Clubname: _0x3d1291.name || "",
              logo: _0x510525?.["legionData"]?.["logo"] || "",
              power: _0x25f246(_0x3d1291.power || 0),
              score: _0x2cd53a(_0x3d1291.score || 0),
              roleID1: _0xe2b3ac[0] || 0,
              roleID2: _0xe2b3ac[1] || 0,
              roleID3: _0xe2b3ac[2] || 0,
              name1: _0x4781e7[0] || "",
              name2: _0x4781e7[1] || "",
              name3: _0x4781e7[2] || "",
              headImg1: _0x2eba95[0] || "",
              headImg2: _0x2eba95[1] || "",
              headImg3: _0x2eba95[2] || "",
              announcement: _0x510525?.["legionData"]?.["announcement"] || "",
              redno1: _0x7b76dd[0] || "0红",
              redno2: _0x7b76dd[1] || "0红",
              redno3: _0x7b76dd[2] || "0红"
            };
          } catch (_0xd37bec) {
            _0x1edd90[_0x414de1] = {
              rank: _0x3d1291.rank || 0,
              id: _0x3d1291.id || 0,
              ServerId: _0x177927(_0x3d1291.serverId || 0),
              redQuench: 0,
              Clubname: _0x3d1291.name || "",
              logo: "",
              power: _0x25f246(_0x3d1291.power || 0),
              score: _0x2cd53a(_0x3d1291.score || 0),
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
        _0x1e5a4e = _0x1edd90;
        _0x2113cc = 1;
        _0x1d8734();
        return _0x1edd90;
      } catch (_0x145517) {
        _0x1e5a4e = null;
        if (_0x1de2e9) {
          _0x1de2e9.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>";
        }
        return null;
      }
    }
  };
  const _0x1d8734 = () => {
    if (!_0x1e5a4e) {
      return;
    }
    const _0x39ae0d = document.getElementById("qa-gold-rank-content");
    if (!_0x39ae0d) {
      return;
    }
    const _0x3224b5 = Object.entries(_0x1e5a4e);
    const _0xb6ff4b = Math.ceil(_0x3224b5.length / _0x4abb5b);
    const _0x439613 = (_0x2113cc - 1) * _0x4abb5b;
    const _0x590c77 = _0x439613 + _0x4abb5b;
    const _0x1f4a41 = _0x3224b5.slice(_0x439613, _0x590c77);
    _0x39ae0d.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + _0x41b565 + "</div>\n      <div class=\"rank-list\">\n        " + _0x1f4a41.map(([_0x4030fe, _0xec7b66]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-top-left\">排名 " + _0xec7b66.rank + "</span>\n              <div class=\"rank-member-content\">\n                <img src=\"" + (_0xec7b66.logo || "") + "\" class=\"rank-club-logo\" onerror=\"this.style.display='none'\" alt=\"\">\n                <div class=\"rank-member-stats\">\n                  <span class=\"stat-inline win\">区服 " + _0xec7b66.ServerId + "</span>\n                  <span class=\"stat-inline loss\">俱乐部名 " + _0xec7b66.Clubname + "</span>\n                  <span class=\"stat-inline score\">黄金积分 " + _0xec7b66.score + "</span>\n                  <span class=\"stat-inline red\">总红淬 " + _0xec7b66.redQuench + "红</span>\n                  <span class=\"stat-inline power\">战力 " + _0xec7b66.power + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0xec7b66.name1 + "</span>\n                  <img src=\"" + (_0xec7b66.headImg1 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0xec7b66.roleID1 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0xec7b66.name2 + "</span>\n                  <img src=\"" + (_0xec7b66.headImg2 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0xec7b66.roleID2 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + _0xec7b66.name3 + "</span>\n                  <img src=\"" + (_0xec7b66.headImg3 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + _0xec7b66.roleID3 + "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (_0xb6ff4b > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + _0x2113cc + " / " + _0xb6ff4b + " 页，共 " + _0x3224b5.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (_0x2113cc === 1 ? "disabled" : "") + " data-action=\"gold-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (_0x2113cc === _0xb6ff4b ? "disabled" : "") + " data-action=\"gold-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-gold-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (_0x4abb5b === 10 ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (_0x4abb5b === 20 ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (_0x4abb5b === 50 ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (_0x4abb5b === 100 ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    _0x8f75d7("qa-gold-rank-content");
  };
  const _0x5a9919 = async () => {
    {
      if (!_0x1e5a4e) {
        {
          return;
        }
      }
      const _0x44b6d0 = Object.entries(_0x1e5a4e);
      const _0x4b6471 = 2;
      const _0x5b8deb = document.createElement("canvas");
      const _0x8c824a = _0x5b8deb.getContext("2d");
      const _0x20edef = 20;
      const _0xe65aba = 70;
      const _0x3bf3f9 = 80;
      const _0xaf7cd0 = ["排名", "俱乐部", "区服", "黄金积分", "总红淬", "战力", "玩家1", "玩家2", "玩家3"];
      const _0x27918c = [60, 150, 60, 100, 80, 100, 120, 120, 120];
      const _0x2ca531 = _0x27918c.reduce((_0xb89808, _0x4a55d4) => _0xb89808 + _0x4a55d4, 0) + _0x20edef * 2;
      const _0x48f923 = _0x3bf3f9 + (_0x44b6d0.length + 1) * _0xe65aba + _0x20edef * 2;
      _0x5b8deb.width = _0x2ca531 * _0x4b6471;
      _0x5b8deb.height = _0x48f923 * _0x4b6471;
      _0x8c824a.scale(_0x4b6471, _0x4b6471);
      const _0x38a44d = _0x44b6d0.map(([, _0xb3ed02]) => _0x1294ba(_0xb3ed02.logo));
      const _0x51ec9c = _0x44b6d0.flatMap(([, _0x4cd99f]) => [_0x1294ba(_0x4cd99f.headImg1), _0x1294ba(_0x4cd99f.headImg2), _0x1294ba(_0x4cd99f.headImg3)]);
      const [_0x19a9d5, ..._0x1389b6] = await Promise.all([Promise.all(_0x38a44d), ..._0x51ec9c]);
      const _0x5cb783 = [];
      for (let _0x19c7fb = 0; _0x19c7fb < _0x44b6d0.length; _0x19c7fb++) {
        {
          _0x5cb783.push([_0x1389b6[_0x19c7fb * 3], _0x1389b6[_0x19c7fb * 3 + 1], _0x1389b6[_0x19c7fb * 3 + 2]]);
        }
      }
      _0x8c824a.fillStyle = "#ffffff";
      _0x8c824a.fillRect(0, 0, _0x2ca531, _0x48f923);
      _0x8c824a.fillStyle = "#1f2937";
      _0x8c824a.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x8c824a.fillText("黄金积分俱乐部总览 - " + _0x41b565, _0x20edef, _0x20edef + 20);
      const _0x21e5eb = _0x3bf3f9;
      _0x8c824a.fillStyle = "#f3f4f6";
      _0x8c824a.fillRect(_0x20edef, _0x21e5eb, _0x2ca531 - _0x20edef * 2, 30);
      _0x8c824a.fillStyle = "#374151";
      _0x8c824a.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
      let _0x578d43 = _0x20edef;
      _0xaf7cd0.forEach((_0x2e71f0, _0x46ea46) => {
        _0x8c824a.fillText(_0x2e71f0, _0x578d43 + 4, _0x21e5eb + 20);
        _0x578d43 += _0x27918c[_0x46ea46];
      });
      _0x8c824a.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
      _0x44b6d0.forEach(([_0x38dbb0, _0x2fb622], _0x52e1c2) => {
        const _0x4f03cd = _0x21e5eb + 30 + _0x52e1c2 * _0xe65aba;
        if (_0x52e1c2 % 2 === 1) {
          {
            _0x8c824a.fillStyle = "#f9fafb";
            _0x8c824a.fillRect(_0x20edef, _0x4f03cd, _0x2ca531 - _0x20edef * 2, _0xe65aba);
          }
        }
        _0x8c824a.fillStyle = "#1f2937";
        let _0x1aa25e = _0x20edef;
        _0x8c824a.fillText(String(_0x2fb622.rank), _0x1aa25e + 8, _0x4f03cd + 20);
        _0x1aa25e += _0x27918c[0];
        const _0x51588d = _0x19a9d5[_0x52e1c2];
        if (_0x51588d) {
          {
            _0x8c824a.save();
            _0x8c824a.beginPath();
            _0x8c824a.arc(_0x1aa25e + 20, _0x4f03cd + _0xe65aba / 2, 14, 0, Math.PI * 2);
            _0x8c824a.clip();
            _0x8c824a.drawImage(_0x51588d, _0x1aa25e + 6, _0x4f03cd + (_0xe65aba - 28) / 2, 28, 28);
            _0x8c824a.restore();
          }
        }
        _0x8c824a.fillText(_0x2fb622.Clubname || "-", _0x1aa25e + 32, _0x4f03cd + 20);
        _0x1aa25e += _0x27918c[1];
        _0x8c824a.fillText(_0x2fb622.ServerId, _0x1aa25e + 8, _0x4f03cd + 20);
        _0x1aa25e += _0x27918c[2];
        _0x8c824a.fillText(_0x2fb622.score, _0x1aa25e + 8, _0x4f03cd + 20);
        _0x1aa25e += _0x27918c[3];
        _0x8c824a.fillText(_0x2fb622.redQuench + "红", _0x1aa25e + 8, _0x4f03cd + 20);
        _0x1aa25e += _0x27918c[4];
        _0x8c824a.fillText(_0x2fb622.power, _0x1aa25e + 8, _0x4f03cd + 20);
        _0x1aa25e += _0x27918c[5];
        const _0x51dbfd = _0x5cb783[_0x52e1c2] || [];
        for (let _0x3d917c = 0; _0x3d917c < 3; _0x3d917c++) {
          const _0x5a87ce = _0x51dbfd[_0x3d917c];
          const _0x29b959 = _0x2fb622["name" + (_0x3d917c + 1)] || "-";
          const _0x13d3eb = String(_0x2fb622["roleID" + (_0x3d917c + 1)] || 0);
          if (_0x5a87ce) {
            {
              _0x8c824a.save();
              _0x8c824a.beginPath();
              _0x8c824a.arc(_0x1aa25e + 12, _0x4f03cd + 20, 8, 0, Math.PI * 2);
              _0x8c824a.clip();
              _0x8c824a.drawImage(_0x5a87ce, _0x1aa25e + 4, _0x4f03cd + 12, 16, 16);
              _0x8c824a.restore();
            }
          }
          _0x8c824a.fillText(_0x29b959, _0x1aa25e + 24, _0x4f03cd + 20);
          _0x8c824a.fillText(_0x13d3eb, _0x1aa25e + 24, _0x4f03cd + 35);
          _0x1aa25e += _0x27918c[6 + _0x3d917c];
        }
      });
      _0x8c824a.strokeStyle = "#e5e7eb";
      _0x8c824a.lineWidth = 1;
      _0x8c824a.strokeRect(_0x20edef, _0x21e5eb, _0x2ca531 - _0x20edef * 2, 30 + _0x44b6d0.length * _0xe65aba);
      const _0x479224 = _0x41b565.split("/");
      const _0x46e93e = _0x479224[0] + "年" + _0x479224[1] + "月" + _0x479224[2] + "日";
      await _0x53ec78(_0x5b8deb, _0x46e93e + "黄金积分榜信息.png");
    }
  };
  const _0x1e424d = _0x44c623 => {
    if (!_0x1e5a4e) {
      return;
    }
    const _0x38ee4c = Object.entries(_0x1e5a4e);
    const _0x62ab41 = Math.ceil(_0x38ee4c.length / _0x4abb5b);
    if (_0x44c623 === "prev" && _0x2113cc > 1) {
      _0x2113cc--;
    } else {
      if (_0x44c623 === "next" && _0x2113cc < _0x62ab41) {
        {
          _0x2113cc++;
        }
      }
    }
    _0x1d8734();
  };
  const _0x579021 = _0x2c1c8f => {
    {
      _0x4abb5b = Number(_0x2c1c8f) || 20;
      _0x2113cc = 1;
      _0x1d8734();
    }
  };
  const _0x267a13 = _0x50c957 => {
    _0x28f3f4 = _0x50c957;
  };
  const _0x35904c = {
    __proto__: null,
    exportClubRankImage: _0x3c3503,
    exportGoldRankImage: _0x5a9919,
    exportTopRankImage: _0x32ef84,
    fetchClubRank: _0x446895,
    fetchGoldRank: _0x478eb3,
    fetchTopRank: _0x46dd08,
    handleClubRankPageChange: _0x3dcf00,
    handleClubRankPageSizeChange: _0xe83869,
    handleGoldRankPageChange: _0x1e424d,
    handleGoldRankPageSizeChange: _0x579021,
    handleTopRankPageChange: _0x1e08da,
    handleTopRankPageSizeChange: _0x2eefe6,
    renderClubRank: _0x2651a4,
    renderGoldRank: _0x1d8734,
    renderTopRank: _0x456b5a,
    setGoldRankGroup: _0x267a13
  };
  var _0x1cddb8 = Object.freeze(_0x35904c);
  const _0x26eb00 = _0x42028d => {
    {
      const _0x1f254d = _0x5a3537[Number(_0x42028d)];
      return _0x1f254d?.["name"] || "英雄" + _0x42028d;
    }
  };
  const _0x45b9bb = _0x19cdd7 => {
    const _0x1ac1df = _0x5a3537[Number(_0x19cdd7)];
    if (!_0x1ac1df?.["avatar"]) {
      return null;
    }
    const _0x542909 = _0x1ac1df.avatar.replace(/^\//, "");
    return _0xbd56ba + "/" + _0x542909;
  };
  const _0x33afa6 = () => {
    {
      const _0x5a92c1 = document.getElementById("qa-team-selector");
      if (!_0x5a92c1) {
        return;
      }
      const _0x2de783 = _0x3b7778.availableTeams || [];
      const _0x421253 = _0x3b7778.currentTeamId || 1;
      if (_0x2de783.length === 0) {
        _0x5a92c1.innerHTML = "<span class=\"helper-text\" style=\"margin:0;font-size:11px;\">加载中...</span>";
        return;
      }
      _0x5a92c1.innerHTML = _0x2de783.map(_0x3b4029 => "\n    <button class=\"team-btn " + (_0x3b4029 === _0x421253 ? "active" : "") + "\" data-team=\"" + _0x3b4029 + "\">" + _0x3b4029 + "</button>\n  ").join("");
      _0x3330ab();
    }
  };
  const _0x3330ab = () => {
    const _0x21373d = document.getElementById("qa-team-selector");
    if (!_0x21373d) {
      return;
    }
    _0x21373d.querySelectorAll(".team-btn").forEach(_0x5d22f6 => {
      _0x5d22f6.addEventListener("click", async () => {
        const _0x1a96ea = parseInt(_0x5d22f6.dataset.team, 10);
        _0x1a96ea && _0x1a96ea !== _0x3b7778.currentTeamId && (_0x21373d.querySelectorAll(".team-btn").forEach(_0x3066d2 => _0x3066d2.disabled = true), await _0x388dd6(_0x1a96ea), _0x21373d.querySelectorAll(".team-btn").forEach(_0x43fd1f => _0x43fd1f.disabled = false));
      });
    });
  };
  const _0x1b950e = () => {
    {
      const _0x49817a = document.getElementById("qa-team-heroes");
      if (!_0x49817a) {
        return;
      }
      const _0x2c422e = _0x3b7778.teamHeroes || [];
      if (_0x2c422e.length === 0) {
        _0x49817a.innerHTML = "<div class=\"helper-text\">暂无阵容数据</div>";
        return;
      }
      _0x49817a.innerHTML = _0x2c422e.map(_0x2f3bd0 => {
        const _0x5d5b9f = _0x2f3bd0.avatar ? "<img class=\"team-hero-avatar\" src=\"" + _0x2f3bd0.avatar + "\" alt=\"" + _0x2f3bd0.name + "\" onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex'\"><div class=\"team-hero-placeholder\" style=\"display:none\">" + _0x2f3bd0.name.substring(0, 2) + "</div>" : "<div class=\"team-hero-placeholder\">" + _0x2f3bd0.name.substring(0, 2) + "</div>";
        return "\n      <div class=\"team-hero-item\">\n        <div class=\"team-hero-circle\">" + _0x5d5b9f + "</div>\n        <span class=\"team-hero-name\">" + _0x2f3bd0.name + "</span>\n      </div>\n    ";
      }).join("");
    }
  };
  const _0x4ea8bc = () => {
    const _0x2538f6 = document.getElementById("qa-team-selector");
    if (!_0x2538f6) {
      return;
    }
    const _0x51cf6e = _0x3b7778.currentTeamId || 1;
    _0x2538f6.querySelectorAll(".team-btn").forEach(_0x2fb420 => {
      const _0x1be509 = parseInt(_0x2fb420.dataset.team, 10);
      _0x2fb420.classList.toggle("active", _0x1be509 === _0x51cf6e);
    });
  };
  const _0x17aa74 = async (_0x2a3b8c = {}) => {
    const {
      silent = false
    } = _0x2a3b8c;
    try {
      const _0x38212c = await _0xb1beb7("presetteam_getinfo", {});
      _0x3b7778.presetTeam = _0x38212c;
      const _0x146399 = _0x585944(_0x38212c);
      _0x3b7778.currentTeamId = _0x146399.useTeamId;
      const _0x5ecc51 = Object.keys(_0x146399.teams).map(Number).filter(_0x3058a9 => Number.isFinite(_0x3058a9) && _0x3058a9 > 0).sort((_0xff90a7, _0x44b556) => _0xff90a7 - _0x44b556);
      const _0x3e9afb = JSON.stringify(_0x3b7778.availableTeams || []);
      const _0x290b0a = JSON.stringify(_0x5ecc51);
      const _0x660a7d = _0x3e9afb !== _0x290b0a;
      _0x3b7778.availableTeams = _0x5ecc51;
      const _0x548e17 = _0x146399.teams[_0x146399.useTeamId]?.["teamInfo"] || {};
      const _0x281810 = [];
      for (const [_0x5c9d0e, _0x242f76] of Object.entries(_0x548e17)) {
        const _0x19b83a = _0x242f76?.["heroId"] || _0x242f76?.["id"];
        if (!_0x19b83a) {
          continue;
        }
        _0x281810.push({
          id: Number(_0x19b83a),
          name: _0x26eb00(_0x19b83a),
          avatar: _0x45b9bb(_0x19b83a),
          position: Number(_0x5c9d0e),
          level: _0x242f76?.["level"] || 1
        });
      }
      _0x281810.sort((_0x466958, _0x51af52) => _0x466958.position - _0x51af52.position);
      _0x3b7778.teamHeroes = _0x281810;
      if (_0x660a7d) {
        _0x33afa6();
      } else {
        _0x4ea8bc();
      }
      _0x1b950e();
    } catch (_0x1c797f) {}
  };
  const _0x388dd6 = async _0x467d8d => {
    {
      if (_0x3b7778.currentTeamId === _0x467d8d) {
        return;
      }
      try {
        const _0x335cde = {
          teamId: _0x467d8d
        };
        await _0xb1beb7("presetteam_saveteam", _0x335cde);
        _0x3b7778.currentTeamId = _0x467d8d;
        const _0x5c2eca = {
          silent: true
        };
        await _0x17aa74(_0x5c2eca);
      } catch (_0x5d6415) {}
    }
  };
  const _0xd888f1 = {
    __proto__: null,
    refreshTeamInfo: _0x17aa74,
    renderTeamHeroes: _0x1b950e,
    renderTeamSelector: _0x33afa6,
    switchTeam: _0x388dd6,
    updateTeamSelector: _0x4ea8bc
  };
  var _0x2c3860 = Object.freeze(_0xd888f1);
  const _0x547718 = {
    name: "",
    value: 2
  };
  const _0x33fd47 = {
    name: "《三国演义》中，「大意失街亭」的是马谩？",
    value: 1
  };
  const _0x40a515 = {
    name: "《三国演义》中，「挥泪斩马谩」的是孙权？",
    value: 2
  };
  const _0x48b490 = {
    name: "《三国演义》中，「火烧博望坡」的是庞统？",
    value: 2
  };
  const _0x4a7fe2 = {
    name: "《三国演义》中，「火烧藤甲兵」的是徐庶？",
    value: 2
  };
  const _0x98b5c0 = {
    name: "《三国演义》中，「千里走单骑」的是赵云？",
    value: 2
  };
  const _0x446b40 = {
    name: "《三国演义》中，「温酒斩华雄」的是张飞？",
    value: 2
  };
  const _0x1009c0 = {
    name: "《三国演义》中，关羽在长坂坡「七进七出」？",
    value: 2
  };
  const _0xdc38bc = {
    name: "《三国演义》中，刘备三顾茅庐请诸葛亮出山？",
    value: 1
  };
  const _0x1629e8 = {
    name: "《三国演义》中，孙权与曹操「煮酒论英雄」？",
    value: 2
  };
  const _0x1f25c4 = {
    name: "《三国演义》中，提出「隆中对」的是诸葛亮？",
    value: 1
  };
  const _0x19cede = {
    name: "《三国演义》中，夏侯杰在当阳桥被张飞吓死？",
    value: 1
  };
  const _0x533800 = {
    name: "《三国演义》中，张飞在当阳桥厉吼吓退曹军？",
    value: 1
  };
  const _0x13a4d0 = {
    name: "《三国演义》中，赵云参与了「三英战吕布」？",
    value: 2
  };
  const _0x54be3a = {
    name: "《三国演义》中，赵云参与了「桃园三结义」？",
    value: 2
  };
  const _0x43b98e = {
    name: "《三国演义》中唯一正式上过战场的女子是祝融夫人？",
    value: 1
  };
  const _0xd306f4 = {
    name: "《三国志》中，华雄被孙坚枭首？",
    value: 1
  };
  const _0x15ed46 = {
    name: "《三国志》中记载，「草船借箭」的是诸葛亮？",
    value: 2
  };
  const _0x39161e = {
    name: "「闭月」是貂蝉的代称？",
    value: 1
  };
  const _0xdee9eb = {
    name: "「常胜将军」指代赵云？",
    value: 1
  };
  const _0x34c3c2 = {
    name: "「赤壁之战」中是黄盖建策火攻？",
    value: 1
  };
  const _0x3345d0 = {
    name: "「官渡之战」中袁绍获胜？",
    value: 2
  };
  const _0x949cdb = {
    name: "「郭嘉不死卧龙不出」出自三国典故？",
    value: 1
  };
  const _0x36b461 = {
    name: "「曲有误，周郎顾」表达了周瑜不懂音律？",
    value: 2
  };
  const _0x532fa4 = {
    name: "「三姓家奴」是指飞将吕布？",
    value: 1
  };
  const _0x65cb53 = {
    name: "「士别三日」形容吕蒙笃志力学？",
    value: 1
  };
  const _0x46b430 = {
    name: "「吴下阿蒙」即指吕蒙？",
    value: 1
  };
  const _0x372551 = {
    name: "「小菜一碟」指的是张飞吃豆芽？",
    value: 1
  };
  const _0x12cb5d = {
    name: "「羞花」是貂蝉的代称？",
    value: 2
  };
  const _0x26836c = {
    name: "「荀令留香」是指荀或厨艺高超？",
    value: 2
  };
  const _0x38e1fa = {
    name: "「与曹操交手而不死，能败诸葛亮而自活」是指司马懿？",
    value: 1
  };
  const _0x51817c = {
    name: "「张辽止啼」指张辽和善，善于哄孩子？",
    value: 2
  };
  const _0x48b654 = {
    name: "「总角之好」用于形容周瑜与孙策的交情？",
    value: 1
  };
  const _0x19dc14 = {
    name: "拜将封侯的董卓为东汉忠臣？",
    value: 2
  };
  const _0xf8ceb = {
    name: "宝马良驹赤兔的主人不包括吕布？",
    value: 2
  };
  const _0xe22332 = {
    name: "蔡文姬擅长音律？",
    value: 1
  };
  const _0x4a9abd = {
    name: "曹仁被称为「天人将军」？",
    value: 1
  };
  const _0x54d714 = {
    name: "曹仁是曹操的儿子？",
    value: 2
  };
  const _0xd8e1e3 = {
    name: "成语「水淹七军」与庞统有关？",
    value: 2
  };
  const _0x11eef9 = {
    name: "大乔为孙策之妻？",
    value: 1
  };
  const _0x245259 = {
    name: "典故「胆大如斗」与姜维有关？",
    value: 1
  };
  const _0x4a16bd = {
    name: "典故「舌战群儒」与周瑜有关？",
    value: 2
  };
  const _0x5939f5 = {
    name: "典故「杏林圣手」出自华佗？",
    value: 2
  };
  const _0x23b4d5 = {
    name: "典故「英雄难过美人关」出自「吕布与貂蝉」？",
    value: 1
  };
  const _0x6069d9 = {
    name: "典韦力大过人，被称为「古之恶来」？",
    value: 1
  };
  const _0x2268cb = {
    name: "典韦善用的武器包括「大双戟」？",
    value: 1
  };
  const _0x3ce42a = {
    name: "典韦是腹隐机谋的知名谋士？",
    value: 2
  };
  const _0x4765e7 = {
    name: "貂蝉的「美人计」用于离间董卓和吕布？",
    value: 1
  };
  const _0x2f1be8 = {
    name: "东汉末年国色美女小乔为周瑜之妻？",
    value: 1
  };
  const _0x2c65af = {
    name: "董卓曾收吕布为义子？",
    value: 1
  };
  const _0x2b2d3c = {
    name: "董卓为曹操帐下大将？",
    value: 2
  };
  const _0x169da8 = {
    name: "甘宁被称为江表之虎臣？",
    value: 1
  };
  const _0x447697 = {
    name: "甘宁为魏国名将？",
    value: 2
  };
  const _0x3f8b95 = {
    name: "甘宁因「少有气力，好游侠」，被称为「锦帆贼」？",
    value: 1
  };
  const _0x5f03a1 = {
    name: "公孙瓒别名「白马将军」？",
    value: 1
  };
  const _0x459f36 = {
    name: "公孙瓒击败袁绍，致袁绍引火自焚？",
    value: 2
  };
  const _0x1afd54 = {
    name: "公孙瓒因数次「大破黄巾」而威名大震？",
    value: 1
  };
  const _0x173708 = {
    name: "郭嘉被史籍称为「才策谋略，世之奇士」？",
    value: 1
  };
  const _0x17b98f = {
    name: "郭嘉为孙策帐下谋士？",
    value: 2
  };
  const _0x35321e = {
    name: "合肥之战中，张辽以少胜多，威震江东？",
    value: 1
  };
  const _0x127969 = {
    name: "华佗被称为「外科鼻祖」？",
    value: 1
  };
  const _0x23483c = {
    name: "华佗因遭曹操怀疑，下狱被铂问致死？",
    value: 1
  };
  const _0x5d29de = {
    name: "华佗与董奉、张仲景并称为「建安三神医」？",
    value: 1
  };
  const _0x5ec8e4 = {
    name: "华雄是奇谋百出的军事战略家？",
    value: 2
  };
  const _0x597db4 = {
    name: "华雄效力于诸葛亮？",
    value: 2
  };
  const _0xbdae67 = {
    name: "贾诩曾任魏国最高军事长官「太尉」？",
    value: 1
  };
  const _0x4a8188 = {
    name: "贾诩为曹操帐下的主要谋士之一？",
    value: 1
  };
  const _0x5c1b28 = {
    name: "贾诩献离间计成功瓦解马超、韩遂？",
    value: 1
  };
  const _0x2898c0 = {
    name: "刘备是三国时期蜀汉「五虎上将」之一？",
    value: 2
  };
  const _0x1eebaf = {
    name: "鲁肃为谋士，效力于蜀国？",
    value: 2
  };
  const _0x262024 = {
    name: "民间，张飞被尊为「屠宰业祖师」？",
    value: 1
  };
  const _0x1a35b5 = {
    name: "民间游戏「华容道」是以三国为背景的游戏？",
    value: 1
  };
  const _0x46dd45 = {
    name: "明教以张角为教祖？",
    value: 1
  };
  const _0x2ec15e = {
    name: "三国时期，五虎上将之首是黄忠？",
    value: 2
  };
  const _0x5f07f7 = {
    name: "三国时期曹操一生未称帝？",
    value: 1
  };
  const _0x505dae = {
    name: "三国时期的吴国由曹操建立？",
    value: 2
  };
  const _0x1d92ba = {
    name: "司马懿曾称帝？",
    value: 2
  };
  const _0x2be6aa = {
    name: "司马懿为曹操谋臣？",
    value: 1
  };
  const _0x538737 = {
    name: "算无遗策的贾诩为吴国谋士？",
    value: 2
  };
  const _0x3e8c43 = {
    name: "孙策曾「一统江东」？",
    value: 1
  };
  const _0x2d90d5 = {
    name: "孙策死于「赤壁之战」？",
    value: 2
  };
  const _0x58836f = {
    name: "太史慈曾为救孔融单骑突围向刘备求援？",
    value: 1
  };
  const _0xab933c = {
    name: "太史慈弦不虚发，被称为「神射手」？",
    value: 1
  };
  const _0x1a6940 = {
    name: "太史慈终效力于刘备？",
    value: 2
  };
  const _0x1dc59f = {
    name: "威振天下的董卓被吕布诛杀？",
    value: 1
  };
  const _0x41d79b = {
    name: "夏侯渊天生独眼？",
    value: 2
  };
  const _0x499d90 = {
    name: "夏侯渊与夏侯惇是父子？",
    value: 2
  };
  const _0x48acb8 = {
    name: "徐晃曾「击破关羽，解樊城之围」？",
    value: 1
  };
  const _0x120dff = {
    name: "荀或被称为「王佐之才」？",
    value: 1
  };
  const _0x1da45c = {
    name: "颜良被关羽斩杀？",
    value: 1
  };
  const _0x2175d5 = {
    name: "颜良被孔融评价「勇冠三军」？",
    value: 1
  };
  const _0x29d7de = {
    name: "颜良在官渡之战中战胜曹操大军？",
    value: 2
  };
  const _0x22d04a = {
    name: "以胆气著称的吕蒙效力于刘备？",
    value: 2
  };
  const _0x344360 = {
    name: "袁绍战胜公孙瓒，统一河北？",
    value: 1
  };
  const _0xfecf4b = {
    name: "张飞与关羽被并称为「万人敌」？",
    value: 1
  };
  const _0x54cf8f = {
    name: "张角为黄巾起义首领之一？",
    value: 1
  };
  const _0x35b072 = {
    name: "张角因战胜黄巾军而声名大噪？",
    value: 2
  };
  const _0x1953fb = {
    name: "赵云与关羽、张飞「桃园结义」？",
    value: 2
  };
  const _0x17e498 = {
    name: "赵云与关羽、张飞并称「燕南三士」？",
    value: 1
  };
  const _0x4902f5 = {
    name: "著名的「官渡之战」由袁绍发起？",
    value: 1
  };
  const _0x4874f2 = {
    name: "甄宓曾为袁绍之妻？",
    value: 2
  };
  const _0x337ab9 = {
    name: "甄宓为魏文帝曹丕妻子？",
    value: 1
  };
  const _0x5e2bd9 = {
    name: "周瑜逝世后，鲁肃代周瑜职务？",
    value: 1
  };
  const _0x31af60 = {
    name: "《三国演义》中，「过五关斩六将」的武将是关羽？",
    value: 1
  };
  const _0x18d128 = {
    name: "《三国演义》中，「火烧藤甲兵」的是诸葛亮？",
    value: 1
  };
  const _0x2271cc = {
    name: "《三国演义》中，「三气周瑜」的是司马懿？",
    value: 2
  };
  const _0x67a981 = {
    name: "《三国演义》中，「三英战吕布」发生在虎牢关？",
    value: 1
  };
  const _0x159166 = {
    name: "《三国演义》中，「身在曹营心在汉」的是刘备？",
    value: 2
  };
  const _0x54d32e = {
    name: "《三国演义》中，「桃园三结义」中的桃园是张飞的住所？",
    value: 1
  };
  const _0x3edf44 = {
    name: "《三国演义》中，「万事俱备，只欠东风」说的是赤壁之战？",
    value: 1
  };
  const _0x528f11 = {
    name: "《三国演义》中，败走麦城的是张飞？",
    value: 2
  };
  const _0x3a4fb5 = {
    name: "《三国演义》中，被称为「大耳贼」的是曹操？",
    value: 2
  };
  const _0x43349d = {
    name: "《三国演义》中，被称为「奸雄」的是司马懿？",
    value: 2
  };
  const _0x2a168b = {
    name: "《三国演义》中，被称为「诸葛村夫」的是诸葛亮？",
    value: 1
  };
  const _0xa13c9e = {
    name: "《三国演义》中，被追杀时「割须断袍」的是马超？",
    value: 2
  };
  const _0x3098c8 = {
    name: "《三国演义》中，曹操赤壁兵败后是曹仁率军接应的？",
    value: 1
  };
  const _0x4664b4 = {
    name: "《三国演义》中，称号「卧龙」的是诸葛亮？",
    value: 1
  };
  const _0x58dc42 = {
    name: "《三国演义》中，持方天画戟的武将是吕布？",
    value: 1
  };
  const _0x62082c = {
    name: "《三国演义》中，持青龙偃月刀的武将是关羽？",
    value: 1
  };
  const _0x2c9b15 = {
    name: "《三国演义》中，单刀赴会的是赵云？",
    value: 2
  };
  const _0x125833 = {
    name: "《三国演义》中，发明「木牛流马」的是诸葛亮？",
    value: 1
  };
  const _0x4de78f = {
    name: "《三国演义》中，关羽曾一边「刮骨疗毒」一边与将领饮酒？",
    value: 2
  };
  const _0x55ddb4 = {
    name: "《三国演义》中，火烧连营大败蜀军的将领是诸葛亮？",
    value: 2
  };
  const _0x76a75a = {
    name: "《三国演义》中，吕布称号「关内侯」？",
    value: 2
  };
  const _0x5b991d = {
    name: "《三国演义》中，庞统的称号是「幼麟」？",
    value: 2
  };
  const _0x2e876b = {
    name: "《三国演义》中，七擒孟获的是司马懿？",
    value: 2
  };
  const _0x52eec4 = {
    name: "《三国演义》中，为关羽「刮骨疗毒」的医生是张仲景？",
    value: 2
  };
  const _0x17c495 = {
    name: "《三国演义》中，要为曹操做开颅手术的是华佗？",
    value: 1
  };
  const _0x3d8e7d = {
    name: "《三国演义》中，赵云的妻子是马超的姝妹马云禄？",
    value: 2
  };
  const _0x7baa6e = {
    name: "《三国演义》中，赵云在「赤壁之战」中救出阿斗？",
    value: 2
  };
  const _0x139ddf = {
    name: "《三国演义》中，甄姬曾为袁绍之子袁熙的夫人？",
    value: 1
  };
  const _0x200dd5 = {
    name: "《三国演义》中，中诸葛亮「空城计」的是曹操？",
    value: 2
  };
  const _0x4a3f5b = {
    name: "《三国演义》中，诸葛亮的「空城计」是为了阻挡曹操大军？",
    value: 2
  };
  const _0x37fdb5 = {
    name: "《三国演义》中，祝融夫人被马超活捉？",
    value: 2
  };
  const _0x54ec9f = {
    name: "《三国演义》中，祝融夫人的丈夫为诸葛亮？",
    value: 2
  };
  const _0x3ce97c = {
    name: "《三国演义》中，祝融夫人擅长的暗器是飞针？",
    value: 2
  };
  const _0x217f4a = {
    name: "「铜雀春深锁二乔」指的是火乔和小乔吗？",
    value: 1
  };
  const _0x52e532 = {
    name: "「文姬归汉」指的是蔡文姬从匈奴回到中原吗？",
    value: 1
  };
  const _0x5bd4f1 = {
    name: "白马义从是赵云的部下？",
    value: 2
  };
  const _0x252bc3 = {
    name: "蔡文姬是被曹操赎回中原的吗？",
    value: 1
  };
  const _0x21dbb2 = {
    name: "黄月英是诸葛亮的妻子？",
    value: 1
  };
  const _0x35ceef = {
    name: "庞统和周瑜并称为「卧龙凤雏」？",
    value: 2
  };
  const _0x3cc68f = {
    name: "庞统是刘备的谋士吗？",
    value: 1
  };
  const _0x54c90f = {
    name: "三国时期，董卓曾想和孙坚结成亲家？",
    value: 1
  };
  const _0x171767 = {
    name: "三国时期，公孙瓒和刘备是师兄弟关系？",
    value: 1
  };
  const _0x34457d = {
    name: "三国时期，姜维始终都是蜀国的将领？",
    value: 2
  };
  const _0x306b29 = {
    name: "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？",
    value: 2
  };
  const _0x5b5d04 = {
    name: "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？",
    value: 2
  };
  const _0x632ff = {
    name: "三国时期，十八路诸侯讨董后，孙坚率军攻入洛阳？",
    value: 1
  };
  const _0x5c9a18 = {
    name: "三国时期，司马懿经常练习「五禽戏」？",
    value: 1
  };
  const _0xf965f4 = {
    name: "三国时期，孙策建立了吴国？",
    value: 1
  };
  const _0x3a431b = {
    name: "三国时期，孙坚中箭而亡？",
    value: 1
  };
  const _0x136ae5 = {
    name: "三国时期，赵云无一败绩？",
    value: 2
  };
  const _0x552fb9 = {
    name: "《出师表》是诸葛亮写给刘禅的吗？",
    value: 1
  };
  const _0x43415a = {
    name: "《三国演义》中，「阿斗」是赵云的儿子？",
    value: 2
  };
  const _0x29e104 = {
    name: "《三国演义》中，「宁教我负天下人，休教天下人负我」出自刘备之口？",
    value: 2
  };
  const _0xa1789c = {
    name: "《三国演义》中，「虽未谱金兰，情谊比桃园」说的是赵云？",
    value: 1
  };
  const _0x4b77df = {
    name: "《三国演义》中，「五虎上将」里没有魏延？",
    value: 1
  };
  const _0x4ca587 = {
    name: "《三国演义》中，「一个愿打一个愿挨」形容的是周瑜与黄忠？",
    value: 2
  };
  const _0x3ae06a = {
    name: "《三国演义》中，被称为「智绝」的是刘备？",
    value: 2
  };
  const _0x1f2b65 = {
    name: "《三国演义》中，曹操让士兵们想象柠檬来止渴？",
    value: 2
  };
  const _0x353d32 = {
    name: "《三国演义》中，关羽，字「云长」？",
    value: 1
  };
  const _0x38882c = {
    name: "《三国演义》中，关羽的坐骑是「绝影」？",
    value: 2
  };
  const _0x222654 = {
    name: "《三国演义》中，关羽为了离开曹操的麾下，达成了「过五关，斩六将」的壮举。",
    value: 1
  };
  const _0x134a57 = {
    name: "《三国演义》中，郭嘉遗计定辽东。",
    value: 1
  };
  const _0xaaaac6 = {
    name: "《三国演义》中，黄忠在定军山击杀了曹魏将领夏侯渊。",
    value: 1
  };
  const _0x274ddd = {
    name: "《三国演义》中，刘备，字「孟德」？",
    value: 2
  };
  const _0x1ae007 = {
    name: "《三国演义》中，刘备的专属武器名为「青龙偃月刀」？",
    value: 2
  };
  const _0x546b5b = {
    name: "《三国演义》中，马超有「花马超」的称呼。",
    value: 2
  };
  const _0x3bd743 = {
    name: "《三国演义》中，呢称为「阿斗」的是刘备？",
    value: 2
  };
  const _0x2c8c0c = {
    name: "《三国演义》中，司马昭是司马懿的父亲？",
    value: 2
  };
  const _0x43f9a2 = {
    name: "《三国演义》中，死于「落凤坡」的名将是庞统？",
    value: 1
  };
  const _0x49604c = {
    name: "《三国演义》中，宣称自己会「梦中杀人」的是曹操？",
    value: 1
  };
  const _0x5723a8 = {
    name: "《三国演义》中，张飞的专属武器名为「丈八蛇矛」？",
    value: 1
  };
  const _0x56193f = {
    name: "《三国演义》中，赵云曾孤胆救黄忠。",
    value: 1
  };
  const _0x2958b5 = {
    name: "《三国演义》中，诸葛亮，字「孔明」？",
    value: 1
  };
  const _0xaa452e = {
    name: "《三国演义》中，诸葛亮发明了「诸葛连弩」？",
    value: 1
  };
  const _0x156545 = {
    name: "《三国演义》中，诸葛亮挥泪斩了马超？",
    value: 2
  };
  const _0x2d88d4 = {
    name: "「白帝城托孤」指的是刘备将自己的儿子托付给赵云？",
    value: 2
  };
  const _0x157757 = {
    name: "「单刀赴会」是诸葛亮邀请关羽前往的。",
    value: 2
  };
  const _0x4e9233 = {
    name: "「扶不起的阿斗」指的是刘禅？",
    value: 1
  };
  const _0x178abd = {
    name: "「割须弃袍」发生于曹操和马超交战时。",
    value: 2
  };
  const _0x155e93 = {
    name: "「黄巾起义」被看做三国时代的开端吗？",
    value: 1
  };
  const _0x1c2200 = {
    name: "「孔明灯」在古代曾用于传递军情？",
    value: 1
  };
  const _0x4b2ba1 = {
    name: "「乐不思蜀」指的是刘禅？",
    value: 1
  };
  const _0x22ac4e = {
    name: "「衣带诏」事发后曹操派军讨伐刘备？",
    value: 1
  };
  const _0x223522 = {
    name: "曹操被评价为「治世之能臣，乱世之奸雄」。",
    value: 1
  };
  const _0xd8ea8d = {
    name: "典故妄自菲薄出自诸葛亮的《前出师表》？",
    value: 1
  };
  const _0x565115 = {
    name: "郭嘉被曹操称为「吾之子房」。",
    value: 2
  };
  const _0x3030a4 = {
    name: "郭嘉是由贾诩推荐给曹操，并加入了曹操麾下。",
    value: 2
  };
  const _0x361b76 = {
    name: "汉献帝自愿禅让帝位给丞相曹丕？",
    value: 2
  };
  const _0x2122fb = {
    name: "华佗使用「麻沸散」是世界医学史上应用全身麻醉进行手术治疗的最早记载？",
    value: 1
  };
  const _0x1b8a10 = {
    name: "华佗有自身编撰的医书流传下来。",
    value: 2
  };
  const _0x47acb5 = {
    name: "刘备曾自称「汉中王」？",
    value: 1
  };
  const _0x51ed8b = {
    name: "刘备称帝后不久就亲自率军伐吴？",
    value: 1
  };
  const _0x16d99c = {
    name: "刘备少年时以织席贩履为生？",
    value: 1
  };
  const _0x40231f = {
    name: "挟天子以令诸侯的是曹操？",
    value: 1
  };
  const _0x17aa81 = {
    name: "荀或与同为曹操麾下的荀攸是叔侄关系。",
    value: 1
  };
  const _0x48c122 = {
    name: "袁术曾经称帝但最后被刘备、朱灵军截道，呕血而死？",
    value: 1
  };
  const _0x4ee539 = {
    name: "在魏蜀吴三国中，吴国是最晚建立的吗？",
    value: 1
  };
  const _0x1618e5 = {
    name: "周泰是受到孙权的招揽加入了吴国。",
    value: 2
  };
  const _0x41d415 = {
    name: "周泰在归顺孙策之前在江中劫掠为生。",
    value: 1
  };
  const _0x7f9f70 = {
    name: "诸葛亮共北伐五次，第五次时病逝于五丈原？",
    value: 1
  };
  const _0x163c62 = {
    name: "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取？",
    value: 1
  };
  const _0x36149d = {
    name: "《咸鱼之王》里「咸神火把」的持续时间为30分钟？",
    value: 1
  };
  const _0xa15f94 = {
    name: "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分？",
    value: 1
  };
  const _0x454540 = {
    name: "《咸鱼之王》里每位玩家每日可以进行三次「免费点金」？",
    value: 1
  };
  const _0x200519 = {
    name: "《咸鱼之王》里鱼缸位于玩家的「客厅」界面内？",
    value: 1
  };
  const _0x4efa38 = {
    name: "《咸鱼之王》里「咸神门票」可以用于参加竞技场战斗？",
    value: 1
  };
  const _0x48c155 = {
    name: "《咸鱼之王》里「梦魇水晶」无法重生，只能通过无损换将置换到其他咸将身上？",
    value: 1
  };
  const _0x2c26c2 = {
    name: "《咸鱼之王》里「龙鱼·八卦」是咸将黄月英的专属鱼灵？",
    value: 2
  };
  const _0x50bd9c = {
    name: "《咸鱼之王》里「万能红将碎片」可以开出蔡文姬的碎片吗？",
    value: 2
  };
  const _0x55e675 = {
    name: "《咸鱼之王》里好友的「客厅」内会随机刷出钻石、白银、普通三种盐罐？",
    value: 2
  };
  const _0x1ce972 = {
    name: "《咸鱼之王》里「招募令」可以招募到咸将关银屏？",
    value: 2
  };
  const _0xb43bdd = {
    name: "《咸鱼之王》里有「万能紫将碎片」？",
    value: 2
  };
  const _0x1f154d = {
    name: "《咸鱼之王》里咸将的专属鱼都有「龙鱼」前缀。",
    value: 1
  };
  const _0x5a30de = {
    name: "《咸鱼之王》里「青铜宝箱」每次开启可以获取到10宝箱积分？",
    value: 1
  };
  const _0x10a345 = {
    name: "《咸鱼之王》里咸将分为四个阵营？",
    value: 1
  };
  const _0x1303e4 = {
    name: "《咸鱼之王》里咸将貂蝉是「群雄」阵营的。",
    value: 1
  };
  const _0x4f9d2d = {
    name: "《咸鱼之王》里咸将貂蝉的主动技能可以减少敌人怒气值。",
    value: 1
  };
  const _0x59a1f1 = {
    name: "《咸鱼之王》里「灯神挑战」每天可以免费获取3个「扫荡魔毯」。",
    value: 1
  };
  const _0xd3bffd = {
    name: "《咸鱼之王》里同种类盐罐同时只能占据一个。",
    value: 1
  };
  const _0x1db5bc = {
    name: "《咸鱼之王》里有「白银宝箱」。",
    value: 2
  };
  const _0x2f01b1 = {
    name: "《咸鱼之王》中升级俱乐部「高级科技」时需要先点满对应职业的「基础科技」。",
    value: 1
  };
  const _0x54a714 = {
    name: "《咸鱼之王》里咸将诸葛亮的主动技能「星落」有控制效果。",
    value: 2
  };
  const _0x127321 = {
    name: "《咸鱼之王》里咸将黄月英的职业是法师。",
    value: 2
  };
  const _0x26864d = {
    name: "《咸鱼之王》里开启「木质宝箱」有概率获取金砖。",
    value: 2
  };
  const _0x442dd1 = {
    name: "《咸鱼之王》里咸将姜维可以同时攻击全部敌人。",
    value: 2
  };
  const _0xda9de2 = {
    name: "《咸鱼之王》里只要咸将貂蝉在场，吕布就不会阵亡。",
    value: 2
  };
  const _0x2041cc = {
    name: "《咸鱼之王》里鱼灵「惊涛」无法将受到的持续伤害效果分5回合扣除。",
    value: 1
  };
  const _0xbbdb0c = {
    name: "《咸鱼之王》里开启「钻石宝箱」时，不会获得宝箱积分。",
    value: 1
  };
  const _0x491e26 = {
    name: "《咸鱼之王》「捕获」玩法中，每进行十次高级捕获必出稀有鱼灵。",
    value: 1
  };
  const _0x4536c7 = {
    name: "《咸鱼之王》「盐场争霸」中，可以通过消耗20金砖来加速行军。",
    value: 1
  };
  const _0x264e8a = {
    name: "《咸鱼之王》里咸将星级在达到21星时，即可获得「机甲皮肤」",
    value: 1
  };
  const _0x193c65 = {
    name: "《咸鱼之王》里宝箱积分达1000分时，可一键领取累计积分奖励宝箱。",
    value: 1
  };
  const _0x15ac9a = {
    name: "《咸鱼之王》里俱乐部团长连续7天未登录，团长职位将自动转让其他成员。",
    value: 1
  };
  const _0x40df16 = {
    name: "《咸鱼之王》里「玩具」每周有一次免费无损转换的机会。",
    value: 1
  };
  const _0x29745b = {
    name: "《咸鱼之王》「灯神挑战」内，每个阵营中有15层可挑战的关卡。",
    value: 1
  };
  const _0x1d31b5 = {
    name: "《咸鱼之王》「咸神竞技场」中，每日可以免费进行3次挑战。",
    value: 1
  };
  const _0xc01e72 = {
    name: "《咸鱼之王》重复攻打击杀过的「俱乐部BOSS」 ，无法再次获得排名奖励。",
    value: 1
  };
  const _0x285c18 = {
    name: "《咸鱼之王》已附身的鱼灵仍会在「鱼缸」中显示。",
    value: 2
  };
  const _0x1a91bd = {
    name: "《咸鱼之王》「普通鱼竿」免费捕获的刷新时间为6个小时。",
    value: 2
  };
  const _0x270895 = {
    name: "《咸鱼之王》「每日咸王考验」中，共有4个不同BOSS。",
    value: 2
  };
  const _0x2b1464 = {
    name: "「孔融让梨」的故事讲的是孔融小小年纪便有谦让的美德？",
    value: 1
  };
  const _0x113b35 = {
    name: "成语「初出茅庐」出自《三国演义》？",
    value: 1
  };
  const _0x355960 = {
    name: "「三家归晋」结束了汉末三国时期以来的割据混战的局面？",
    value: 1
  };
  const _0x2c71bd = {
    name: "《三国演义》中，「虎女焉能配犬子」一句中，虎女指的是关羽之女。",
    value: 1
  };
  const _0x1353f9 = {
    name: "「莫作孔明择妇，正得阿承丑女」说的是诸葛亮的择偶标准。",
    value: 1
  };
  const _0x18321d = {
    name: "《三国演义》中，许褚跟许攸是兄弟。",
    value: 2
  };
  const _0x2792f9 = {
    name: "俗语「赔了夫人又折兵」中的夫人是小乔。",
    value: 2
  };
  const _0x2d0f50 = {
    name: "「赔了夫人又折兵」的上半句为「孔明妙计安天下」。",
    value: 2
  };
  const _0xd99018 = {
    name: "四大美女中「落雁」说的是被匈奴所掳的蔡文姬。",
    value: 2
  };
  const _0x4b0aa4 = {
    name: "「大丈夫何患无妻」一典故出自《三国演义》中的赵云之口？",
    value: 1
  };
  const _0x3753f9 = {
    name: "《咸鱼之王》中，招募界面的NPC名宇是「猫婆婆」？",
    value: 1
  };
  const _0x3170a9 = {
    name: "《咸鱼之王》中，「每日任务」重置时间为每日0点？",
    value: 1
  };
  const _0x14e056 = {
    name: "《咸鱼之王》中，「每日任务」重置时间为每日8点？",
    value: 2
  };
  const _0x1adb9c = {
    name: "《咸鱼之王》中，每位玩家每日有一次免费刷新「黑市」的机会？",
    value: 1
  };
  const _0x4b55fd = {
    name: "《咸鱼之王》中，每位玩家每日有三次免费刷新「黑市」的机会？",
    value: 2
  };
  const _0x496cb0 = {
    name: "《咸鱼之王》中，每消耗20个「普通鱼竿」可以免费获取1个「黄金鱼竿」？",
    value: 1
  };
  const _0x3c0e3e = {
    name: "《咸鱼之王》中，每消耗10个「普通鱼竿」可以免费获取1个「黄金鱼竿」？",
    value: 2
  };
  const _0x3cb25d = {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为1亿？",
    value: 2
  };
  const _0x1f293e = {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为5亿？",
    value: 1
  };
  const _0x211124 = {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为10亿？",
    value: 2
  };
  const _0x3afe5f = {
    name: "《咸鱼之王》中，道具「珍珠」可以在「神秘商店」使用？",
    value: 1
  };
  const _0x5f2d84 = {
    name: "《咸鱼之王》中，鱼灵「黄金锦鲤」可在「神秘商店」中消耗珍珠兑换？",
    value: 1
  };
  const _0x341e91 = {
    name: "《咸鱼之王》中，玩家每次占领「盐罐」会消耗10点「能量」",
    value: 1
  };
  const _0xc480e = {
    name: "《咸鱼之王》中，玩家每次占领「盐罐」会消耗1点「能量」",
    value: 2
  };
  const _0x2c3c9f = {
    name: "《咸鱼之王》中，一个「俱乐部」最多容纳30位成员？",
    value: 1
  };
  const _0x34d86b = {
    name: "《咸鱼之王》中，1个「俱乐部」最多有2位副团长？",
    value: 1
  };
  const _0x510909 = {
    name: "《咸鱼之王》中，玩家可在「图鉴」内可查看满级咸将信息？",
    value: 1
  };
  const _0x495902 = {
    name: "《咸鱼之王》中，「月度活动」每月刷新1次？",
    value: 1
  };
  const _0x552224 = {
    name: "《咸鱼之王》中，「每日任务」中日活跃积分达到80的奖励为钻石宝箱？",
    value: 2
  };
  const _0x36a4c5 = {
    name: "《咸鱼之王》中，「每日任务」中日活跃积分达到100的奖励为招募令？",
    value: 1
  };
  const _0x16ff51 = {
    name: "《咸鱼之王》中，游戏内有金色鱼灵「黄金鲸鱼」？",
    value: 2
  };
  const _0x5ca2d2 = {
    name: "《咸鱼之王》中，玩家可通过「咸将塔」玩法获取「珍珠」道具？",
    value: 2
  };
  const _0x265d3d = {
    name: "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得珍珠。",
    value: 1
  };
  const _0x2c9d67 = {
    name: "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得万能红将碎片。",
    value: 2
  };
  const _0x5f23e5 = {
    name: "《咸鱼之王》中，咸将的四个阵营分别为魏、蜀、吴、群雄。",
    value: 1
  };
  const _0x5c00bf = {
    name: "《咸鱼之王》中，除了咸将外，其余的怪物都没有职业。",
    value: 1
  };
  const _0x45255e = {
    name: "《咸鱼之王》中，「灯神挑战」不同的阵营挑战内，只能上阵对应阵营的减将。",
    value: 1
  };
  const _0x4687f7 = {
    name: "《咸鱼之王》中，精铁可以直接用金砖购买。",
    value: 1
  };
  const _0x4f8a70 = {
    name: "《咸鱼之王》中，进阶石可以直接使用金砖购买。",
    value: 1
  };
  const _0x2594a9 = {
    name: "《咸鱼之王》中，「招募」可以有概率获得红色武将。",
    value: 1
  };
  const _0x5c475f = {
    name: "《咸鱼之王》中，贾诩为吴国阵营咸将？",
    value: 2
  };
  const _0x5e4546 = {
    name: "《咸鱼之王》中，每日可以免费招募一次。",
    value: 1
  };
  const _0x5cba1c = {
    name: "《咸鱼之王》中，「每日咸王考验」可以挑战多次。",
    value: 1
  };
  const _0x386bf9 = {
    name: "《咸鱼之王》中，蔡文姬是红色武将。",
    value: 2
  };
  const _0x3edcf2 = {
    name: "《咸鱼之王》中，「咸王梦境」为每日开放。",
    value: 2
  };
  const _0x2faebf = {
    name: "《咸鱼之王》中，「咸王梦境」周二会开放。",
    value: 2
  };
  const _0xf6f4d = {
    name: "《咸鱼之王》中，姜维攻击后可以获得护盾。",
    value: 2
  };
  const _0x41239f = {
    name: "《咸鱼之王》中，俱乐部人数没有上限。",
    value: 2
  };
  const _0x342397 = {
    name: "《三国演义》中，「怒打督邮」的是张飞。",
    value: 1
  };
  const _0x3506f4 = {
    name: "祝融夫人是《三国演义》虚构人物。",
    value: 1
  };
  const _0x5a98b6 = {
    name: "《三国演义》中，「拔矢啖晴」的是夏侯惇。",
    value: 1
  };
  const _0x2dc5d1 = {
    name: "《三国演义》中，「拔矢啖睛」的是夏侯渊。",
    value: 2
  };
  const _0x4df712 = {
    name: "《三国演义》中，「曹操献刀」本是要刺杀董卓。",
    value: 1
  };
  const _0x130232 = {
    name: "《三国演义》中，许攸被许褚所杀。",
    value: 1
  };
  const _0x450b52 = {
    name: "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿。",
    value: 1
  };
  const _0x2be755 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一0点重置。",
    value: 1
  };
  const _0x41b19e = {
    name: "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一8点重置。",
    value: 2
  };
  const _0x496cb2 = {
    name: "《咸鱼之王》中，挂机奖励加钟，最多可以有5名好友助力。",
    value: 2
  };
  const _0x49ea52 = {
    name: "《咸鱼之王》中，挂机奖励加钟，最多可以有4名好友助力。",
    value: 1
  };
  const _0x425eac = {
    name: "《咸鱼之王》中，每日6点重置点金次数。",
    value: 2
  };
  const _0xe5a27d = {
    name: "《咸鱼之王》中，「俱乐部」每日签到可以获得「军团币」？",
    value: 1
  };
  const _0x52eb0a = {
    name: "《咸鱼之王》中，「黑市」每日0点自动刷新商品？",
    value: 1
  };
  const _0x56a543 = {
    name: "《咸鱼之王》中，「黑市」每日8点自动刷新商品？",
    value: 2
  };
  const _0x3de418 = {
    name: "《咸鱼之王》中，可以使用「珍珠」兑换「万能红将碎片」？",
    value: 1
  };
  const _0x13dea6 = {
    name: "《咸鱼之王》中，「咸神门票」可以通过「金砖」进行购买？",
    value: 1
  };
  const _0x5d1742 = {
    name: "《咸鱼之王》中，「灯神挑战」内分为四个阵营？",
    value: 1
  };
  const _0x45b9a7 = {
    name: "《咸鱼之王》中，玩家的「勋章墙」内最多展示4个「徽章」？",
    value: 1
  };
  const _0x2da5da = {
    name: "《咸鱼之王》中，「主公」达到4001级开启「玩具」玩法？",
    value: 1
  };
  const _0x414eef = {
    name: "《咸鱼之王》中，「玩具」需要花费「扳手」进行激活？",
    value: 1
  };
  const _0x463dea = {
    name: "《咸鱼之王》中，「咸王梦境」每成功通过十层可以遇到一次梦境商人？",
    value: 1
  };
  const _0x51ff49 = {
    name: "《咸鱼之王》中，挑战「咸将塔」需要花费「小鱼干」？",
    value: 1
  };
  const _0x4d49c0 = {
    name: "《咸鱼之王》中，「小鱼干」可以通过「金砖」进行购买？",
    value: 1
  };
  const _0xff071e = {
    name: "《咸鱼之王》中，「招募」无法获得咸将吕玲绮。",
    value: 1
  };
  const _0x2ab1e5 = {
    name: "《咸鱼之王》中，「灯神挑战」的奖励包括「珍珠」？",
    value: 2
  };
  const _0x50103f = {
    name: "《咸鱼之王》中，「咸王梦境」中的梦境调料「普通盐瓶」可以恢复咸将怒气？",
    value: 2
  };
  const _0x10f2e6 = {
    name: "《咸鱼之王》中，进阶石可以通过参与「咸将塔」玩法获取。",
    value: 1
  };
  const _0x15d2de = {
    name: "《咸鱼之王》中，「扳手」在通关主线7001关后可以通过挂机奖励获得。",
    value: 1
  };
  const _0x186381 = {
    name: "《咸鱼之王》中，「军团币」可以用于升级「俱乐部科技」？",
    value: 1
  };
  const _0x14bb18 = {
    name: "《咸鱼之王》中，装备最多可以开到5个淬炼孔位？",
    value: 1
  };
  const _0x3f1c6a = {
    name: "《咸鱼之王》中，「青铜火把」会为主线战斗中上阵的咸将增加5%攻击？",
    value: 1
  };
  const _0x52244c = {
    name: "《咸鱼之王》中，「木材火把」会使主线战斗以1.5倍速进行？",
    value: 1
  };
  const _0x3772fa = {
    name: "《咸鱼之王》中，道具「金砖」可以用于在「黑市」中购买物品？",
    value: 1
  };
  const _0xb4de85 = {
    name: "《咸鱼之王》中，装备中的坐骑会为咸将提供防御加成？",
    value: 2
  };
  const _0x177634 = {
    name: "《咸鱼之王》中，攻打「俱乐部×OSS」后可以获得皮肤币奖励？",
    value: 2
  };
  const _0x31029b = {
    name: "《咸鱼之王》中，咸将皮肤可以使用「军团币」来进行兑换？",
    value: 2
  };
  const _0x3e68d7 = {
    name: "《咸鱼之王》中，咸将的等级上限为2000级？",
    value: 2
  };
  const _0x11d19c = {
    name: "《咸鱼之王》中，咸将「张星彩」属于群雄阵营？",
    value: 2
  };
  const _0x1aa0f2 = {
    name: "《咸鱼之王》中，咸将「颜良」属于魏国阵营？",
    value: 2
  };
  const _0x482aab = {
    name: "《咸鱼之王》中，「招募」无法获得咸将关银屏。",
    value: 1
  };
  const _0xe344e3 = {
    name: "《咸鱼之王》俱乐部中，每日最多可以攻打4次「俱乐部BOSS」。",
    value: 1
  };
  const _0x43c170 = {
    name: "《咸鱼之王》中，俱乐部团长无法退出俱乐部。",
    value: 1
  };
  const _0x17a9b2 = {
    name: "《咸鱼之王》中，主动退出俱乐部12小时后才可以加入新的俱乐部。",
    value: 1
  };
  const _0xe507f3 = {
    name: "《咸鱼之王》中，装备中的铠甲会为咸将提供血量加成？",
    value: 1
  };
  const _0x164ffa = {
    name: "《咸鱼之王》中，红色咸将的觉醒技能需要咸将达到一定星级才能解锁。",
    value: 1
  };
  const _0x1003f0 = {
    name: "《咸鱼之王》中，布阵时，前排可上阵2名咸将，后排可上阵3名咸将。",
    value: 1
  };
  const _0x4d71e2 = {
    name: "《咸鱼之王》竞技场中，未对防守阵容进行设置时，将默认使用主线阵容。",
    value: 1
  };
  const _0x534cfe = {
    name: "《咸鱼之王》中，「邮件」最长保存30天。",
    value: 1
  };
  const _0x18699a = {
    name: "《咸鱼之王》中，「邮件」最长保存10天。",
    value: 2
  };
  const _0x3f78a1 = {
    name: "《咸鱼之王》中，「淬炼」可能出现的属性共21种。",
    value: 1
  };
  const _0x3a2aae = {
    name: "《咸鱼之王》中，「俱乐部BOSS」被击败后会按照玩家造成的总伤害排名发放排名奖励。",
    value: 1
  };
  const _0x1cf1f9 = {
    name: "《咸鱼之王》中，晚上23时仍可以进行竞技场战斗。",
    value: 2
  };
  const _0x53f567 = {
    name: "《咸鱼之王》中，开启「省电模式」将停止主线关卡战斗。",
    value: 2
  };
  const _0x1704c1 = {
    name: "鲁肃，字「子敬」。",
    value: 1
  };
  const _0x1d510e = {
    name: "蔡文姬，本名蔡琰？",
    value: 1
  };
  const _0x2688d4 = {
    name: "「池中之物」一词出自《三国志》中周瑜之口？",
    value: 1
  };
  const _0x50d4bc = {
    name: "《咸鱼之王》中，装备中的头冠会为咸将提供防御加成？",
    value: 1
  };
  const _0x32ddbd = {
    name: "《咸鱼之王》中，「咸神火把」会为主线战斗中上阵的咸将增加15%攻击？",
    value: 1
  };
  const _0x59541b = {
    name: "《咸鱼之王》中，「咸神火把」与「青铜火把」均会使主线战斗以2倍速进行？",
    value: 1
  };
  const _0x33ba53 = {
    name: "刘表是刘备的次子？",
    value: 2
  };
  const _0x17778c = {
    name: "「望梅止渴」是周瑜带队行军时发生的故事？",
    value: 2
  };
  const _0x5d162f = {
    name: "《咸鱼之王》中，「扳手」可以在「黑市」中花费「金砖」获取？",
    value: 1
  };
  const _0x5b1742 = {
    name: "《咸鱼之王》中，在「盐锭商店」中可以花费「盐锭」兑换到「皮肤币」？",
    value: 1
  };
  const _0x331636 = {
    name: "《咸鱼之王》中，月赛助威截止后，未使用的「拍手器」会被回收？",
    value: 1
  };
  const _0x5be113 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」单局累计答对10题可获取10个「招募令」？",
    value: 1
  };
  const _0x513584 = {
    name: "《咸鱼之王》中，通行证「竞技经验」 不需要邮件领取，直接发放给玩家？",
    value: 1
  };
  const _0x1ec5b3 = {
    name: "《咸鱼之王》中，「俱乐部排位赛」的段位一共有7种？",
    value: 1
  };
  const _0x47b028 = {
    name: "《咸鱼之王》中，「阵营光环」上阵任意3个同阵营的武将就能生效。",
    value: 2
  };
  const _0x54445a = {
    name: "《咸鱼之王》中，月度活动「捕获达标」达标奖动包含道具「金砖」？",
    value: 1
  };
  const _0x173cbe = {
    name: "《咸鱼之王》中，俱乐部的「团长」和「副团长」可以选择「排位赛」出战成员？",
    value: 1
  };
  const _0x11ed56 = {
    name: "《咸鱼之王》中，玩家每日可在「灯神挑战」中挑战10次？",
    value: 1
  };
  const _0x2cfd34 = {
    name: "《咸鱼之王》中，咸将「曹仁」的职业是「肉盾」？",
    value: 1
  };
  const _0x257077 = {
    name: "《咸鱼之王》中，「彩玉」可以花费「金币」进行兑换？",
    value: 2
  };
  const _0x26109c = {
    name: "《咸鱼之王》中，在「助威商店」中可以花费「助威币」兑换到「万能红将碎片」？",
    value: 2
  };
  const _0x5bc8a7 = {
    name: "《咸鱼之王》中，月度活动「咸神争霸」达标奖励包含道具「珍珠」？",
    value: 2
  };
  const _0x24db16 = {
    name: "《咸鱼之王》中，在「黑市」可以通过「金砖」兑换「钻石宝箱」？",
    value: 2
  };
  const _0x4e9972 = {
    name: "《咸鱼之王》中，咸将「蔡文姬」属于魏国阵营？",
    value: 1
  };
  const _0xd11e64 = {
    name: "《咸鱼之王》中，可以通过「万能红将碎片」开出「贾诩碎片」？",
    value: 1
  };
  const _0x39cfc1 = {
    name: "《咸鱼之王》中，「咸王梦境」玩法在通关1000关后开放？",
    value: 1
  };
  const _0x2cb21b = {
    name: "《咸鱼之王》中，「灯神挑战」中，每阵营前五层的首通奖励均为精铁和进阶石？",
    value: 1
  };
  const _0x42e688 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」内累计答对30道题目可获得「金鱼公主」皮肤？",
    value: 1
  };
  const _0x29a21a = {
    name: "《咸鱼之王》中，「咸鱼大冲关」内完成20次大冲关任务可获得「马头咸鱼」皮肤？",
    value: 1
  };
  const _0x2d62a8 = {
    name: "《咸鱼之王》中，「金币礼包」可以通过「捕获」玩法获取？",
    value: 1
  };
  const _0x87159d = {
    name: "《咸鱼之王》中，可以通过「图鉴」查看咸将满级后的技能效果？",
    value: 1
  };
  const _0xd7024f = {
    name: "《咸鱼之王》中，攻打「每日咸王考验」内的「癫癫蛙」BOSS可获得招募令。",
    value: 1
  };
  const _0x277aab = {
    name: "《咸鱼之王》中，可以通过「万能橙将碎片」开出「蔡文姬碎片」？",
    value: 2
  };
  const _0x285ce9 = {
    name: "《咸鱼之王》中，通过「高级捕获」可以获得黄金鱼灵「利刃」？",
    value: 2
  };
  const _0x38aa8b = {
    name: "《咸鱼之王》中，咸将星级达到30级，可以觉醒第二技能？",
    value: 2
  };
  const _0x14078d = {
    name: "《咸鱼之王》中，咸将「黄月英」的职业为「法师」？",
    value: 2
  };
  const _0x4b393f = {
    name: "《咸鱼之王》中，咸将「孙策」的职业为「战士」？",
    value: 2
  };
  const _0x53b68d = {
    name: "《咸鱼之王》中，开启「晶石福袋」可以获得「进阶石」？",
    value: 2
  };
  const _0x4680f4 = {
    name: "《三国演义》中，「大丈夫生于乱世，当带三尺剑立不世之功」，是太史慈所说。",
    value: 1
  };
  const _0x13f419 = {
    name: "《咸鱼之王》中，「咸将塔」每通关第10层，会给10个「小鱼干」。",
    value: 1
  };
  const _0x425efa = {
    name: "《咸鱼之王》中，「每日咸王考验」有10层伤害达标奖励。",
    value: 1
  };
  const _0xe275c = {
    name: "《咸鱼之王》中，「巅峰竞技场」 前100名，可登上「巅峰王者榜」。",
    value: 1
  };
  const _0x1c5a94 = {
    name: "《咸鱼之王》中，激活「终身卡」，可以使挂机时间增加2小时。",
    value: 1
  };
  const _0x5bf10f = {
    name: "《咸鱼之王》中，激活「月卡」，可以使挂机时间增加2小时。",
    value: 1
  };
  const _0x5cfe20 = {
    name: "《咸鱼之王》中，「咸神竞技场」 内共分为六个段位。",
    value: 1
  };
  const _0x1236cf = {
    name: "《咸鱼之王》中，「灯神挑战」每日0点刷新挑战次数。",
    value: 1
  };
  const _0x42d4ac = {
    name: "《咸鱼之王》中，若「签到」当日登录未领取，后续登录时可以一并领取。",
    value: 1
  };
  const _0x1d6e86 = {
    name: "《咸鱼之王》中，激活「终身卡」，挂机金币收益增加10%。",
    value: 1
  };
  const _0x545753 = {
    name: "《咸鱼之王》中，激活「周卡」，挂机金币收益增加10%。",
    value: 1
  };
  const _0x5b2ca5 = {
    name: "《咸鱼之王》中，「签到」领取30次奖动内容后，奖动内容会进行刷新。",
    value: 1
  };
  const _0x4d4513 = {
    name: "《咸鱼之王》中，激活「月卡」，挂机金币收益增加10%。",
    value: 2
  };
  const _0x35a463 = {
    name: "《咸鱼之王》中，「竞技场」 每周结算时，巅峰场玩家均可获得「巅峰王者徽章」。",
    value: 2
  };
  const _0x13925f = {
    name: "《咸鱼之王》中，「周卡」激活，可以使挂机时间增加2小时。",
    value: 2
  };
  const _0x5cee08 = {
    name: "《咸鱼之王》中，咸将装备的等级无法超「主公阿咸」的等级。",
    value: 1
  };
  const _0x5d783b = {
    name: "《咸鱼之王》中，开启「金币礼包」获取的金币「招募令」与挂机奖励有关。",
    value: 1
  };
  const _0x2b8ad1 = {
    name: "《咸鱼之王》中，挑战「咸将塔」消耗的小鱼干在通过当前塔后会获得10个。",
    value: 1
  };
  const _0x32ae28 = {
    name: "《咸鱼之王》中，「梦魇水晶」的属性需要佩戴咸将达到701级才会生效。",
    value: 1
  };
  const _0x47cdda = {
    name: "《咸鱼之王》中，咸将达到700级并进阶后可以激活自身全部基础技能。",
    value: 1
  };
  const _0x3fa3ea = {
    name: "电影《喜剧之王》于1999年上映。",
    value: 1
  };
  const _0x5c746f = {
    name: "《喜剧之王》的主演包括周星驰、莫文蔚、张柏芝和吴孟达。",
    value: 1
  };
  const _0x56643c = {
    name: "电影《喜剧之王》是周星驰系列电影的经典之作。",
    value: 1
  };
  const _0x360004 = {
    name: "周星驰不是《喜剧之王》导演。",
    value: 2
  };
  const _0x29c9c1 = {
    name: "“我养你啊”出自电影《喜剧之王》。",
    value: 1
  };
  const _0x14c08a = {
    name: "周星弛身兼《喜剧之王》导演主演的双重身份。",
    value: 1
  };
  const _0x561c3e = {
    name: "《喜剧之王》电影中，尹天仇原本是一名成功的演员。",
    value: 2
  };
  const _0x3ae171 = {
    name: "《喜剧之王》电影中，尹天仇最终成功出演了新戏的男主角。",
    value: 2
  };
  const _0x37c4c5 = {
    name: "《喜剧之王》电影中，尹天仇在片场遇到了卧底警员。",
    value: 1
  };
  const _0x3df909 = {
    name: "《喜剧之王》电影中，尹天仇没有帮助警方破获案件。",
    value: 2
  };
  const _0x2b8ee1 = {
    name: "《喜剧之王》电影中，尹天仇得到了娟姐的赏识。",
    value: 1
  };
  const _0x42f41b = {
    name: "《喜剧之王》电影中，尹天仇的梦想是成为一名演员。",
    value: 1
  };
  const _0x2ded79 = {
    name: "《喜剧之王》电影中，尹天仇在街坊福利会里开设的是舞蹈训练班。",
    value: 2
  };
  const _0x3553ca = {
    name: "《喜剧之王》电影中，尹天仇的盒饭都没有被狗吃掉。",
    value: 2
  };
  const _0x714e3f = {
    name: "《喜剧之王》电影中，柳飘飘是尹天仇街坊剧场的唯一观众。",
    value: 1
  };
  const _0x22f833 = {
    name: "《喜剧之王》电影中，柳飘飘找尹天仇学习演技是因为喜欢他",
    value: 2
  };
  const _0x33aa80 = {
    name: "电影中，尹天仇在柳飘飘支持下继续在街坊福利会的演员训练班里教授表演技巧。",
    value: 1
  };
  const _0x2f7cfd = {
    name: "《喜剧之王》电影中，娟姐没有考核过尹天仇的演技。",
    value: 2
  };
  const _0x2dc22b = {
    name: "《喜剧之王》电影中，洪爷肚子上的伤是尹天仇捅的。",
    value: 2
  };
  const _0x265d55 = {
    name: "《喜剧之王》电影中，尹天仇饰演过神父",
    value: 1
  };
  const _0x4bba47 = {
    name: "《喜剧之王》电影中，“我养你啊”是尹天仇对柳飘飘说的。",
    value: 1
  };
  const _0x4e25a9 = {
    name: "《喜剧之王》电影中，尹天仇曾指导阿飞，拓展保护费市场。",
    value: 1
  };
  const _0x4bdcd5 = {
    name: "《喜剧之王》电影中，尹天仇没有进入了犯罪团伙内部。",
    value: 2
  };
  const _0x5d5064 = {
    name: "《喜剧之王》电影中，片场导演每次说话都要附带一段舞。",
    value: 1
  };
  const _0x23527a = {
    name: "《喜剧之王》电影中，尹天仇最终被召入警方卧底小分队。",
    value: 2
  };
  const _0x5b8642 = {
    name: "《喜剧之王》电影中，尹天仇在街坊福利会里开设的是表演训练班。",
    value: 1
  };
  const _0x7290a1 = {
    name: "《喜剧之王》电影中，尹天仇的盒饭都被狗吃了。",
    value: 2
  };
  const _0xd67987 = {
    name: "《喜剧之王》电影中，尹天仇设有在片场吃过盒饭。",
    value: 1
  };
  const _0x3af89f = {
    name: "《喜剧之王》电影中，街坊福利会剧《雷雨》的主演没有洪爷。",
    value: 2
  };
  const _0x3d3b21 = {
    name: "《喜剧之王》电影中，柳飘飘在尹天仇的指导下逐渐敞开心扉，并对尹天仇产生了感情。",
    value: 1
  };
  const _0x5b4b62 = {
    name: "《喜剧之王》电影中，龙少爷给了柳飘飘很多钱。",
    value: 1
  };
  const _0x3b3a04 = {
    name: "《喜剧之王》电影中，尹天仇把《演员的自我修养》送给了柳飘飘。",
    value: 2
  };
  const _0x336421 = {
    name: "《喜剧之王》电影中，尹天仇得到了大明星娟姐的提携，有机会在新戏中担任男主角。",
    value: 1
  };
  const _0x688a48 = {
    name: "《喜剧之王》电影中，尹天仇饰演卧底警察被娟姐看中。",
    value: 2
  };
  const _0x10fcf2 = {
    name: "《喜剧之王》电影中，杜娟儿出演了社区剧场雷雨。",
    value: 1
  };
  const _0x60abe9 = {
    name: "《喜剧之王》电影中，尹天仇的真实身份是警察。",
    value: 2
  };
  const _0x2114de = {
    name: "《喜剧之王》电影中，尹天仇喜欢娟姐，不喜欢柳飘飘。",
    value: 2
  };
  const _0x2ef16c = {
    name: "《喜剧之王》电影中，柳飘飘为了学习演技给尹天仇交学费。",
    value: 1
  };
  const _0xac231b = {
    name: "《喜剧之王》电影中，周星驰饰演尹天仇。",
    value: 1
  };
  const _0x2f080b = {
    name: "《喜剧之王》电影中，柳飘飘不会抽烟。",
    value: 2
  };
  const _0x3e71b9 = {
    name: "《喜剧之王》电影中，柳飘飘将头发剪短了。",
    value: 2
  };
  const _0x531ffb = {
    name: "《喜剧之王》电影中，尹天仇喜欢霞姨。",
    value: 2
  };
  const _0x15de9d = {
    name: "《喜剧之王》电影中，妈妈桑带领柳飘飘来到尹天仇的演员训练班",
    value: 1
  };
  const _0x172324 = {
    name: "《喜剧之王》电影中，柳飘飘的初恋是尹天仇。",
    value: 2
  };
  const _0x4121bb = {
    name: "《喜剧之王》电影中，霞姨是片场导演。",
    value: 2
  };
  const _0x57e17e = {
    name: "《喜剧之王》电影中，尹天仇凭借演时死尸的忘我，赢得了娟姐的认可。",
    value: 1
  };
  const _0x1f2227 = {
    name: "《喜剧之王》电影中，霞姨暗恋尹天仇。",
    value: 2
  };
  const _0x427a96 = {
    name: "《喜剧之王》电影中，杜娟儿不怕蟑螂。",
    value: 2
  };
  const _0x11c613 = {
    name: "《喜剧之王》电影中，龙少爷打了柳飘飘。",
    value: 1
  };
  const _0x45342b = {
    name: "《喜剧之王》电影中，柳飘飘是杜娟儿粉丝。",
    value: 1
  };
  const _0x1dccba = {
    name: "《喜剧之王》电影中，霞姨很看重尹天仇。",
    value: 2
  };
  const _0x3c9ebe = {
    name: "《喜剧之王》电影中，尹天仇跑龙套饰演过尸体",
    value: 1
  };
  const _0x5bf159 = {
    name: "《喜剧之王》电影中，尹天仇被香蕉皮绊倒过。",
    value: 1
  };
  const _0x1d8b84 = {
    name: "《喜剧之王》电影中，尹天仇被柳飘飘殴打过。",
    value: 1
  };
  const _0x5dd8ad = {
    name: "《喜剧之王》电影中，柳飘飘是龙少爷的初恋。",
    value: 2
  };
  const _0x2bb809 = {
    name: "《喜剧之王》电影中，街坊福利会可以打乒乓球。",
    value: 1
  };
  const _0x39cac9 = {
    name: "《喜剧之王》电影中，柳飘飘不会转呼啦图。",
    value: 2
  };
  const _0x12036c = {
    name: "《演员的自我修养》是尹天仇最喜欢的一本书.",
    value: 1
  };
  const _0x346c2d = {
    name: "《喜剧之王》电影中，柳飘飘拿走了尹天仇的手表。",
    value: 1
  };
  const _0x145a75 = {
    name: "《喜剧之王》电影中，柳飘飘爱上了龙少爷。",
    value: 2
  };
  const _0x1f5f93 = {
    name: "电影《长江7号》是一部科幻喜剧片。",
    value: 1
  };
  const _0x5a2e09 = {
    name: "《长江7号》电影中，外星生物是一个高科技的机器人。",
    value: 2
  };
  const _0xbb8e00 = {
    name: "《长江7号》电影中，周小狄在学校里经常被欺负。",
    value: 1
  };
  const _0x449aeb = {
    name: "《长江7号》电影中，7仔最终被周铁的儿子周小狄收养」",
    value: 2
  };
  const _0x4bfa59 = {
    name: "《长江7号》电影中，周星驰饰演的角色是一名电工。",
    value: 2
  };
  const _0x5527ad = {
    name: "《长江7号》电影中，7仔最终带领周小狄一家去到外星球生活。",
    value: 2
  };
  const _0x3cf285 = {
    name: "《长江7号》电影中，周小狄因为家境贫寒，而被同学取笑。",
    value: 1
  };
  const _0xcfdc74 = {
    name: "《长江7号》电影中，周小狄因为7仔的帮助，成绩突飞猛进。",
    value: 2
  };
  const _0x41915c = {
    name: "《长江7号》电影中，周小狄在学校里与一名女同学成为了好朋友。",
    value: 1
  };
  const _0x14fba5 = {
    name: "《长江7号》电影中，7仔的能量来源是太阳能。",
    value: 2
  };
  const _0x33aed8 = {
    name: "《长江7号》电影中，周铁在建筑工地意外死亡，7仔施展神奇力量救了他。",
    value: 1
  };
  const _0x5c6904 = {
    name: "《长江7号》电影中，周小狄为了保护7仔，与其他小孩发生了打斗。",
    value: 1
  };
  const _0xefcc0 = {
    name: "《长江7号》电影中，周星驰饰演的角色周铁与7仔进行了足球比赛。",
    value: 2
  };
  const _0x3f653d = {
    name: "《长江7号》电影中，周铁与周小狄的老师发展出了一段感情。",
    value: 2
  };
  const _0x221953 = {
    name: "《长江7号》电影中，7仔是从一颗彗星上掉落到地球的。",
    value: 2
  };
  const _0x99afe7 = {
    name: "《长江7号》电影中，周小狄最终成为了学霸，感谢7仔的帮助。",
    value: 2
  };
  const _0xa2b138 = {
    name: "《长江7号》电影中，7仔的能力之一是可以变身成其他物品或生物。",
    value: 2
  };
  const _0x77f461 = {
    name: "《长江7号》电影中，周星驰饰演的角色周铁为了保护7仔，决定将其送回外星球。",
    value: 2
  };
  const _0x4a6ae0 = {
    name: "《长江7号》电影中，周铁为了给儿子周小狄买衣服而去垃圾堆捡拾物品。",
    value: 2
  };
  const _0x502b8e = {
    name: "《长江7号》电影中，周小狄在学校被同学欺负是因为他们家境贫寒。",
    value: 1
  };
  const _0x235d3b = {
    name: "《长江7号》电影中，周铁的儿子名叫大时钟。",
    value: 2
  };
  const _0x3b8e2d = {
    name: "《长江7号》电影中，周星驰饰演的角色经常捡拾物品来维持生计。",
    value: 1
  };
  const _0x2d28b1 = {
    name: "《长江7号》电影中，7仔最终成为了周小狄一家的宠物。",
    value: 2
  };
  const _0x5aa15f = {
    name: "《长江7号》电影中，周小狄因为学习压力大，曾经想过放弃学业。",
    value: 1
  };
  const _0x2e393f = {
    name: "《长江7号》电影中，周星驰饰演的角色被误认为是外星人。",
    value: 2
  };
  const _0x5bd553 = {
    name: "《长江7号》电影中，周小狄在学校里曾经因为7仔成为了同学们的焦点。",
    value: 1
  };
  const _0x17fe45 = {
    name: "《长江7号》电影中，周星驰饰演的角色故意把7仔丢掉，以保护家人免受危险。",
    value: 2
  };
  const _0x5a16e2 = {
    name: "《长江7号》电影中，周小狄曾经因为7仔而卷入一场事故。",
    value: 1
  };
  const _0x680a8c = {
    name: "《长江7号》电影中，周小狄在众人面前展示了7仔的神奇能力。",
    value: 2
  };
  const _0x231f68 = {
    name: "《长江7号》电影中，7仔曾经救过一名落水的小孩。",
    value: 2
  };
  const _0x327acd = {
    name: "《长江7号》电影中，周小狄在学校里因为7仔结交了新朋友。",
    value: 1
  };
  const _0x3c3e8b = {
    name: "《长江7号》电影中，周小狄在学校里遇到了一位善良的女教师，她对他很照顾。",
    value: 1
  };
  const _0x4aad11 = {
    name: "《长江7号》电影中，7仔的能力之一是可以预测未来。",
    value: 2
  };
  const _0x199c56 = {
    name: "《长江7号》电影中，周星驰饰演的角色为了哄儿子开心，故意说7仔是贵重的玩具。",
    value: 1
  };
  const _0x15adb4 = {
    name: "《长江7号》电影中，7仔在周小狄身边变身成一只大熊猫。",
    value: 2
  };
  const _0x1a3a66 = {
    name: "《长江7号》电影中，周小狄曾经因为7仔而受到老师表扬",
    value: 2
  };
  const _0x53ccb4 = {
    name: "《长江7号》电影中，7仔曾经被一名坏人抢走。",
    value: 2
  };
  const _0x2f0c95 = {
    name: "《长江7号》电影中，周星驰饰演的角色为了保护7仔，曾经与一名黑帮打斗。",
    value: 2
  };
  const _0x30a0dd = {
    name: "《长江7号》电影中，7仔最终带领周小狄一家过上了幸福的生活。",
    value: 2
  };
  const _0xc42944 = {
    name: "《长江7号》电影中，周星驰饰演的角色为了给儿子买玩具而去垃圾堆捡拾物品。",
    value: 1
  };
  const _0x490b0f = {
    name: "《长江7号》电影中，周铁捡到的外星生物是灰色的。",
    value: 2
  };
  const _0x255cb3 = {
    name: "《长江7号》电影中，周小狄的学校是一所普通的学校。",
    value: 2
  };
  const _0x5467bb = {
    name: "《长江7号》电影中，7仔有治愈能力。",
    value: 1
  };
  const _0xb7a7f0 = {
    name: "《长江7号》电影中，周星驰饰演的角色是一位贫穷的父亲和建筑工人。",
    value: 1
  };
  const _0x42ea60 = {
    name: "《长江7号》电影中，周小狄最好的朋友是一位女生。",
    value: 1
  };
  const _0x26c974 = {
    name: "《长江7号》电影中，7仔并不会说人类的语言。",
    value: 1
  };
  const _0x35999d = {
    name: "《长江7号》电影中，外星生物7仔会飞。",
    value: 2
  };
  const _0x2053f9 = {
    name: "《长江7号》电影中，7仔可以让时间倒流。",
    value: 2
  };
  const _0x4076aa = {
    name: "《长江7号》电影中，7仔的能量来源是吃食物。",
    value: 2
  };
  const _0x2922ab = {
    name: "《长江7号》电影中，7仔最终变成了一只小狗。",
    value: 2
  };
  const _0x36f8f0 = {
    name: "《长江7号》电影中，周小狄从来没有想过放弃学业。",
    value: 2
  };
  const _0x192d70 = {
    name: "《长江7号》电影中，7仔为了保护周小狄，决定将其带去外星球。",
    value: 2
  };
  const _0x25cc1f = {
    name: "《长江7号》电影中，周星驰饰演的角色最后成为了一位英雄。",
    value: 2
  };
  const _0x3a9371 = {
    name: "《长江7号》电影中，周小狄因为家庭环境的原国，在贵族学校与其他同学格格不入。",
    value: 1
  };
  const _0x589833 = {
    name: "《长江7号》电影中，袁老师非常关心周小狄。",
    value: 1
  };
  const _0x10a564 = {
    name: "周星驰担任《长江7号》的出品人、监制、编剧、导演及主演。",
    value: 1
  };
  const _0xcf166a = {
    name: "《长江7号》电影中，7仔修好了周小狄家的电风扇。",
    value: 1
  };
  const _0x45f057 = {
    name: "《长江7号》电影中，7仔柔韧性很好。",
    value: 1
  };
  const _0x210ae0 = {
    name: "《长江7号》电影中，周小狄家中很干净，没有蟑螂。",
    value: 2
  };
  const _0x3ce723 = {
    name: "《长江7号》电影中，周小狄的成绩非常好。",
    value: 2
  };
  const _0x23ec7a = {
    name: "电影《食神》于1996年12月21日上映。",
    value: 1
  };
  const _0x26b0f5 = {
    name: "《食神》电影中，皇帝炒饭得到了食神周星驰的肯定，拿到满分。",
    value: 2
  };
  const _0x3f2afc = {
    name: "《食神》电影中，莱品[禾花雀]因为厨师太丑得了零分。",
    value: 1
  };
  const _0x29ad20 = {
    name: "《食神》电影中，唐牛背叛了食神史提芬周。",
    value: 1
  };
  const _0x144fec = {
    name: "《食神》电影中，史提芬周的餐馆里用了坏掉的牛肉。",
    value: 1
  };
  const _0xae2a01 = {
    name: "《食神》电影中，唐牛成为了新食神。",
    value: 1
  };
  const _0x33972e = {
    name: "《食神》电影中，火鸡做出了最好吃的撒尿牛丸。",
    value: 2
  };
  const _0x3c3fba = {
    name: "《食神》电影中，撒尿牛丸的第一位顾客是厌食症患者。",
    value: 1
  };
  const _0x227653 = {
    name: "《食神》电影中，撒尿牛丸被用来打乒乓球。",
    value: 1
  };
  const _0x59df66 = {
    name: "《食神》电影中，周星驰饰演的食神史提芬周靠撒尿牛丸翻身。",
    value: 1
  };
  const _0x2e60bb = {
    name: "《食神》电影中，火鸡姐因为保护食神旗被毁容。",
    value: 1
  };
  const _0x5db38c = {
    name: "《食神》电影中，火鸡姐是食神史提芬周的粉丝。",
    value: 1
  };
  const _0x29cb37 = {
    name: "《食神》电影中，火鸡姐为食神史提芬周档了一刀。",
    value: 1
  };
  const _0xb919f4 = {
    name: "《食神》电影中，食神史提芬周成为了少林弟子。",
    value: 1
  };
  const _0x196bb0 = {
    name: "《食神》电影中，火鸡姐曾给史提芬周做了一碗叉烧饭。",
    value: 1
  };
  const _0x586794 = {
    name: "《食神》电影中，撒尿牛丸的第一位顾客是唐牛。",
    value: 2
  };
  const _0x4d0b26 = {
    name: "《食神》电影中，史提芬周与唐牛PK做佛跳墙。",
    value: 1
  };
  const _0x4d7c02 = {
    name: "《食神》电影中，唐牛去的中国厨艺训练学院，其实是少林寺厨房。",
    value: 1
  };
  const _0x1bd8f9 = {
    name: "《食神》电影中，唐牛比赛做的佛跳墙用了七七四十九小时。",
    value: 2
  };
  const _0x2a2c13 = {
    name: "《食神》电影中，火鸡姐救了周星驰饰演的食神史提芬周。",
    value: 1
  };
  const _0xe9319e = {
    name: "《食神》电影中，参加食神比赛的人都拿了满分。",
    value: 2
  };
  const _0x216056 = {
    name: "《食神》电影中，周星驰饰演的食神给所有参赛者都打了满分。",
    value: 2
  };
  const _0x193fd5 = {
    name: "《食神》电影中，史提芬周参加食神比赛迟到了。",
    value: 2
  };
  const _0x3ae455 = {
    name: "《食神》电影中，史提芬周与唐牛PK做皇帝炒饭。",
    value: 2
  };
  const _0x4b621c = {
    name: "《食神》电影中，食神比赛当晚出现了九星连珠。",
    value: 1
  };
  const _0x16befb = {
    name: "《食神》电影中，火鸡姐非常喜欢史提芬周。",
    value: 1
  };
  const _0x58aaa1 = {
    name: "《食神》电影中，食神史提芬周被徒弟唐牛当众击败。",
    value: 1
  };
  const _0x5e8d83 = {
    name: "《食神》电影中，史提芬周一直都是食神。",
    value: 2
  };
  const _0x565448 = {
    name: "《食神》电影中，史提芬周做出的撒尿牛丸很有弹性。",
    value: 1
  };
  const _0x2726a8 = {
    name: "《食神》电影中，火鸡姐曾在中国厨艺技术学院学习。",
    value: 2
  };
  const _0x2ab831 = {
    name: "《食神》电影中，史提芬周的徒弟唐牛喜欢火鸡姐。",
    value: 2
  };
  const _0x2ca162 = {
    name: "《食神》电影中，史提芬周误入了少林寺。",
    value: 1
  };
  const _0xf8c0b1 = {
    name: "《食神》电影中，史提芬周非常有商业头脑。",
    value: 1
  };
  const _0x15da9e = {
    name: "《食神》电影中，史提芬周靠撒尿牛丸重新成为食神。",
    value: 1
  };
  const _0x8112e6 = {
    name: "《食神》电影中，火鸡姐最终去了少林寺。",
    value: 2
  };
  const _0x567664 = {
    name: "《食神》电影中，唐牛曾经是少林寺学徒。",
    value: 1
  };
  const _0x4e05e7 = {
    name: "《食神》电影中，唐牛的拿手菜是撒尿牛丸。",
    value: 2
  };
  const _0x588d22 = {
    name: "《食神》电影中，史提芬周是全港知名的食神，在饮食界首屈一指。",
    value: 1
  };
  const _0x327ce6 = {
    name: "《食神》电影中，使用隔夜米饭来炒米饭是最基本的常识。",
    value: 1
  };
  const _0x4282bc = {
    name: "《食神》电影中，史提芬制作甜品[彩虹鲜花拔丝]是麦芽糖、鲜花瓣制作的。",
    value: 1
  };
  const _0x1db44e = {
    name: "《食神》电影中，火鸡姐卖给史蒂芬是一碗叉烧饭。",
    value: 2
  };
  const _0x38595a = {
    name: "《食神》电影中，在《香港至尊名厨大赛》中史提芬将四大名厨的菜通通打成0分。",
    value: 1
  };
  const _0x100202 = {
    name: "《食神》电影中，卖出第一碗[撒尿牛丸]的价格是1元。",
    value: 2
  };
  const _0x3c6683 = {
    name: "《食神》电影中，史蒂芬凭撒尿牛丸入围香港饮食奇才。",
    value: 1
  };
  const _0x5abf1f = {
    name: "《食神》电影中，火鸡姐摊位下贴满了史蒂芬的照片。",
    value: 1
  };
  const _0x378b42 = {
    name: "《食神》电影中，”好折凳”被誉为七种武器之首。",
    value: 1
  };
  const _0x35c2ef = {
    name: "《食神》电影中，食神制作的叉烧饭，起名是[黯然销魂饭]。",
    value: 1
  };
  const _0x5f32c4 = {
    name: "《食神》电影中，史蒂芬去少林寺的厨房学习仅用了2个月。",
    value: 2
  };
  const _0x17695e = {
    name: "《食神》电影中，《香港至尊名厨大赛》比赛地点在少林寺。",
    value: 2
  };
  const _0x4fec8c = {
    name: "《食神》电影中，最终史提芬周靠咸鱼料理赢得了比赛。",
    value: 2
  };
  const _0x62845b = {
    name: "《食神》电影中，方丈讨厌别人在背后说他坏话。",
    value: 1
  };
  const _0x395543 = {
    name: "《食神》电影中，史提芬周最后在少林寺做和尚，法号星星。",
    value: 2
  };
  const _0x516639 = {
    name: "《食神》电影中，只要用心，人人都可以是食神。",
    value: 1
  };
  const _0xb3170c = {
    name: "《食神》电影中，「黯然销魂饭」吃了会流泪，是因为放了洋葱",
    value: 1
  };
  const _0xedaff3 = {
    name: "《食神》电影中，少林寺方丈，法号为梦遗。",
    value: 1
  };
  const _0x12dabe = {
    name: "《食神》电影中，史提芬周加入了少林寺十八铜人。",
    value: 2
  };
  const _0x277797 = {
    name: "《食神》电影中，火鸡姐最终和方丈在一起了。",
    value: 2
  };
  const _0xbf9ca7 = {
    name: "《食神》电影中，史提芬周在做莱时，使出「屠龙斩」",
    value: 1
  };
  const _0x4a4e4f = {
    name: "《食神》电影中，火鸡姐最终变得很漂亮。",
    value: 1
  };
  const _0x37e966 = {
    name: "《食神》电影中，火鸡姐绰号「双刀火鸡」。",
    value: 1
  };
  var _0x1a65df = [_0x547718, _0x33fd47, _0x40a515, _0x48b490, _0x4a7fe2, _0x98b5c0, _0x446b40, _0x1009c0, _0xdc38bc, _0x1629e8, _0x1f25c4, _0x19cede, _0x533800, _0x13a4d0, _0x54be3a, _0x43b98e, _0xd306f4, _0x15ed46, _0x39161e, _0xdee9eb, _0x34c3c2, _0x3345d0, _0x949cdb, _0x36b461, _0x532fa4, _0x65cb53, _0x46b430, _0x372551, _0x12cb5d, _0x26836c, _0x38e1fa, _0x51817c, _0x48b654, _0x19dc14, _0xf8ceb, _0xe22332, _0x4a9abd, _0x54d714, _0xd8e1e3, _0x11eef9, _0x245259, _0x4a16bd, _0x5939f5, _0x23b4d5, _0x6069d9, _0x2268cb, _0x3ce42a, _0x4765e7, _0x2f1be8, _0x2c65af, _0x2b2d3c, _0x169da8, _0x447697, _0x3f8b95, _0x5f03a1, _0x459f36, _0x1afd54, _0x173708, _0x17b98f, _0x35321e, _0x127969, _0x23483c, _0x5d29de, _0x5ec8e4, _0x597db4, _0xbdae67, _0x4a8188, _0x5c1b28, _0x2898c0, _0x1eebaf, _0x262024, _0x1a35b5, _0x46dd45, _0x2ec15e, _0x5f07f7, _0x505dae, _0x1d92ba, _0x2be6aa, _0x538737, _0x3e8c43, _0x2d90d5, _0x58836f, _0xab933c, _0x1a6940, _0x1dc59f, _0x41d79b, _0x499d90, _0x48acb8, _0x120dff, _0x1da45c, _0x2175d5, _0x29d7de, _0x22d04a, _0x344360, _0xfecf4b, _0x54cf8f, _0x35b072, _0x1953fb, _0x17e498, _0x4902f5, _0x4874f2, _0x337ab9, _0x5e2bd9, _0x31af60, _0x18d128, _0x2271cc, _0x67a981, _0x159166, _0x54d32e, _0x3edf44, _0x528f11, _0x3a4fb5, _0x43349d, _0x2a168b, _0xa13c9e, _0x3098c8, _0x4664b4, _0x58dc42, _0x62082c, _0x2c9b15, _0x125833, _0x4de78f, _0x55ddb4, _0x76a75a, _0x5b991d, _0x2e876b, _0x52eec4, _0x17c495, _0x3d8e7d, _0x7baa6e, _0x139ddf, _0x200dd5, _0x4a3f5b, _0x37fdb5, _0x54ec9f, _0x3ce97c, _0x217f4a, _0x52e532, _0x5bd4f1, _0x252bc3, _0x21dbb2, _0x35ceef, _0x3cc68f, _0x54c90f, _0x171767, _0x34457d, _0x306b29, _0x5b5d04, _0x632ff, _0x5c9a18, _0xf965f4, _0x3a431b, _0x136ae5, _0x552fb9, _0x43415a, _0x29e104, _0xa1789c, _0x4b77df, _0x4ca587, _0x3ae06a, _0x1f2b65, _0x353d32, _0x38882c, _0x222654, _0x134a57, _0xaaaac6, _0x274ddd, _0x1ae007, _0x546b5b, _0x3bd743, _0x2c8c0c, _0x43f9a2, _0x49604c, _0x5723a8, _0x56193f, _0x2958b5, _0xaa452e, _0x156545, _0x2d88d4, _0x157757, _0x4e9233, _0x178abd, _0x155e93, _0x1c2200, _0x4b2ba1, _0x22ac4e, _0x223522, _0xd8ea8d, _0x565115, _0x3030a4, _0x361b76, _0x2122fb, _0x1b8a10, _0x47acb5, _0x51ed8b, _0x16d99c, _0x40231f, _0x17aa81, _0x48c122, _0x4ee539, _0x1618e5, _0x41d415, _0x7f9f70, _0x163c62, _0x36149d, _0xa15f94, _0x454540, _0x200519, _0x4efa38, _0x48c155, _0x2c26c2, _0x50bd9c, _0x55e675, _0x1ce972, _0xb43bdd, _0x1f154d, _0x5a30de, _0x10a345, _0x1303e4, _0x4f9d2d, _0x59a1f1, _0xd3bffd, _0x1db5bc, _0x2f01b1, _0x54a714, _0x127321, _0x26864d, _0x442dd1, _0xda9de2, _0x2041cc, _0xbbdb0c, _0x491e26, _0x4536c7, _0x264e8a, _0x193c65, _0x15ac9a, _0x40df16, _0x29745b, _0x1d31b5, _0xc01e72, _0x285c18, _0x1a91bd, _0x270895, _0x2b1464, _0x113b35, _0x355960, _0x2c71bd, _0x1353f9, _0x18321d, _0x2792f9, _0x2d0f50, _0xd99018, _0x4b0aa4, _0x3753f9, _0x3170a9, _0x14e056, _0x1adb9c, _0x4b55fd, _0x496cb0, _0x3c0e3e, _0x3cb25d, _0x1f293e, _0x211124, _0x3afe5f, _0x5f2d84, _0x341e91, _0xc480e, _0x2c3c9f, _0x34d86b, _0x510909, _0x495902, _0x552224, _0x36a4c5, _0x16ff51, _0x5ca2d2, _0x265d3d, _0x2c9d67, _0x5f23e5, _0x5c00bf, _0x45255e, _0x4687f7, _0x4f8a70, _0x2594a9, _0x5c475f, _0x5e4546, _0x5cba1c, _0x386bf9, _0x3edcf2, _0x2faebf, _0xf6f4d, _0x41239f, _0x342397, _0x3506f4, _0x5a98b6, _0x2dc5d1, _0x4df712, _0x130232, _0x450b52, _0x2be755, _0x41b19e, _0x496cb2, _0x49ea52, _0x425eac, _0xe5a27d, _0x52eb0a, _0x56a543, _0x3de418, _0x13dea6, _0x5d1742, _0x45b9a7, _0x2da5da, _0x414eef, _0x463dea, _0x51ff49, _0x4d49c0, _0xff071e, _0x2ab1e5, _0x50103f, _0x10f2e6, _0x15d2de, _0x186381, _0x14bb18, _0x3f1c6a, _0x52244c, _0x3772fa, _0xb4de85, _0x177634, _0x31029b, _0x3e68d7, _0x11d19c, _0x1aa0f2, _0x482aab, _0xe344e3, _0x43c170, _0x17a9b2, _0xe507f3, _0x164ffa, _0x1003f0, _0x4d71e2, _0x534cfe, _0x18699a, _0x3f78a1, _0x3a2aae, _0x1cf1f9, _0x53f567, _0x1704c1, _0x1d510e, _0x2688d4, _0x50d4bc, _0x32ddbd, _0x59541b, _0x33ba53, _0x17778c, _0x5d162f, _0x5b1742, _0x331636, _0x5be113, _0x513584, _0x1ec5b3, _0x47b028, _0x54445a, _0x173cbe, _0x11ed56, _0x2cfd34, _0x257077, _0x26109c, _0x5bc8a7, _0x24db16, _0x4e9972, _0xd11e64, _0x39cfc1, _0x2cb21b, _0x42e688, _0x29a21a, _0x2d62a8, _0x87159d, _0xd7024f, _0x277aab, _0x285ce9, _0x38aa8b, _0x14078d, _0x4b393f, _0x53b68d, _0x4680f4, _0x13f419, _0x425efa, _0xe275c, _0x1c5a94, _0x5bf10f, _0x5cfe20, _0x1236cf, _0x42d4ac, _0x1d6e86, _0x545753, _0x5b2ca5, _0x4d4513, _0x35a463, _0x13925f, _0x5cee08, _0x5d783b, _0x2b8ad1, _0x32ae28, _0x47cdda, _0x3fa3ea, _0x5c746f, _0x56643c, _0x360004, _0x29c9c1, _0x14c08a, _0x561c3e, _0x3ae171, _0x37c4c5, _0x3df909, _0x2b8ee1, _0x42f41b, _0x2ded79, _0x3553ca, _0x714e3f, _0x22f833, _0x33aa80, _0x2f7cfd, _0x2dc22b, _0x265d55, _0x4bba47, _0x4e25a9, _0x4bdcd5, _0x5d5064, _0x23527a, _0x5b8642, _0x7290a1, _0xd67987, _0x3af89f, _0x3d3b21, _0x5b4b62, _0x3b3a04, _0x336421, _0x688a48, _0x10fcf2, _0x60abe9, _0x2114de, _0x2ef16c, _0xac231b, _0x2f080b, _0x3e71b9, _0x531ffb, _0x15de9d, _0x172324, _0x4121bb, _0x57e17e, _0x1f2227, _0x427a96, _0x11c613, _0x45342b, _0x1dccba, _0x3c9ebe, _0x5bf159, _0x1d8b84, _0x5dd8ad, _0x2bb809, _0x39cac9, _0x12036c, _0x346c2d, _0x145a75, _0x1f5f93, _0x5a2e09, _0xbb8e00, _0x449aeb, _0x4bfa59, _0x5527ad, _0x3cf285, _0xcfdc74, _0x41915c, _0x14fba5, _0x33aed8, _0x5c6904, _0xefcc0, _0x3f653d, _0x221953, _0x99afe7, _0xa2b138, _0x77f461, _0x4a6ae0, _0x502b8e, _0x235d3b, _0x3b8e2d, _0x2d28b1, _0x5aa15f, _0x2e393f, _0x5bd553, _0x17fe45, _0x5a16e2, _0x680a8c, _0x231f68, _0x327acd, _0x3c3e8b, _0x4aad11, _0x199c56, _0x15adb4, _0x1a3a66, _0x53ccb4, _0x2f0c95, _0x30a0dd, _0xc42944, _0x490b0f, _0x255cb3, _0x5467bb, _0xb7a7f0, _0x42ea60, _0x26c974, _0x35999d, _0x2053f9, _0x4076aa, _0x2922ab, _0x36f8f0, _0x192d70, _0x25cc1f, _0x3a9371, _0x589833, _0x10a564, _0xcf166a, _0x45f057, _0x210ae0, _0x3ce723, _0x23ec7a, _0x26b0f5, _0x3f2afc, _0x29ad20, _0x144fec, _0xae2a01, _0x33972e, _0x3c3fba, _0x227653, _0x59df66, _0x2e60bb, _0x5db38c, _0x29cb37, _0xb919f4, _0x196bb0, _0x586794, _0x4d0b26, _0x4d7c02, _0x1bd8f9, _0x2a2c13, _0xe9319e, _0x216056, _0x193fd5, _0x3ae455, _0x4b621c, _0x16befb, _0x58aaa1, _0x5e8d83, _0x565448, _0x2726a8, _0x2ab831, _0x2ca162, _0xf8c0b1, _0x15da9e, _0x8112e6, _0x567664, _0x4e05e7, _0x588d22, _0x327ce6, _0x4282bc, _0x1db44e, _0x38595a, _0x100202, _0x3c6683, _0x5abf1f, _0x378b42, _0x35c2ef, _0x5f32c4, _0x17695e, _0x4fec8c, _0x62845b, _0x395543, _0x516639, _0xb3170c, _0xedaff3, _0x12dabe, _0x277797, _0xbf9ca7, _0x4a4e4f, _0x37e966];
  async function _0x3aae26() {
    return _0x1a65df;
  }
  async function _0x5c1d3f() {}
  async function _0x5bdb69() {
    return _0x1a65df ? _0x1a65df.length : 0;
  }
  function _0x3f6a6e(_0x1b325d, _0x5b7f25) {
    {
      if (!_0x1b325d || !_0x5b7f25) {
        return false;
      }
      const _0x2abc40 = _0x1b325d.replace(/\s+/g, "").toLowerCase();
      const _0xbfe2ba = _0x5b7f25.replace(/\s+/g, "").toLowerCase();
      return _0xbfe2ba.includes(_0x2abc40) || _0x2abc40.includes(_0xbfe2ba);
    }
  }
  async function _0x4a7f46(_0x5d174f) {
    try {
      {
        const _0x4f3d1d = await _0x3aae26();
        if (!_0x4f3d1d || _0x4f3d1d.length === 0) {
          {
            return null;
          }
        }
        for (let _0x58e64c = 0; _0x58e64c < _0x4f3d1d.length; _0x58e64c++) {
          {
            const _0x467b25 = _0x4f3d1d[_0x58e64c];
            if (!_0x467b25.name || !_0x467b25.value) {
              continue;
            }
            if (_0x3f6a6e(_0x467b25.name, _0x5d174f)) {
              return _0x467b25.value;
            }
          }
        }
        return null;
      }
    } catch (_0xc64f7d) {
      return null;
    }
  }
  const _0x16108c = {
    isAnswering: false,
    studyId: null,
    questionCount: 0,
    answeredCount: 0,
    status: "",
    maxCorrectNum: 0,
    thisWeek: false
  };
  function _0x2e9163() {
    {
      const _0x1083f3 = document.getElementById("qa-study-status");
      if (_0x1083f3) {
        {
          let _0x2bb6a3 = "";
          switch (_0x16108c.status) {
            case "starting":
              _0x2bb6a3 = "正在获取题目...";
              break;
            case "answering":
              _0x2bb6a3 = "答题中 " + _0x16108c.answeredCount + "/" + _0x16108c.questionCount;
              break;
            case "claiming_rewards":
              _0x2bb6a3 = "正在领取奖励...";
              break;
            case "completed":
              _0x2bb6a3 = "✅ 答题完成！";
              break;
            default:
              {
                _0x2bb6a3 = "点击按钮开始答题";
              }
          }
          _0x1083f3.textContent = _0x2bb6a3;
        }
      }
    }
  }
  async function _0x569ce9(_0x140e1e) {
    {
      const _0x5e0a8e = _0x140e1e.questionList;
      const _0x22720e = _0x140e1e.role?.["study"]?.["id"];
      if (!_0x5e0a8e || !Array.isArray(_0x5e0a8e)) {
        {
          return;
        }
      }
      if (_0x5e0a8e.length === 0) {
        _0x16108c.status = "";
        _0x16108c.isAnswering = false;
        _0x2e9163();
        _0x166508("未获取到题目", "warning");
        return;
      }
      if (!_0x22720e) {
        _0x166508("未获取到答题ID", "error");
        return;
      }
      _0x16108c.isAnswering = true;
      _0x16108c.questionCount = _0x5e0a8e.length;
      _0x16108c.answeredCount = 0;
      _0x16108c.studyId = _0x22720e;
      _0x16108c.status = "answering";
      _0x2e9163();
      _0x166508("开始答题，共" + _0x5e0a8e.length + "题", "info");
      try {
        for (let _0x19618b = 0; _0x19618b < _0x5e0a8e.length; _0x19618b++) {
          {
            const _0xd9119 = _0x5e0a8e[_0x19618b];
            const _0x410af9 = _0xd9119.question;
            const _0x25c1ab = _0xd9119.id;
            let _0x330138 = await _0x4a7f46(_0x410af9);
            if (_0x330138 === null) {
              {
                _0x330138 = 1;
              }
            }
            try {
              const _0x340c20 = {
                id: _0x22720e,
                option: [_0x330138],
                questionId: [_0x25c1ab]
              };
              await _0xb1beb7("study_answer", _0x340c20);
            } catch (_0x304212) {
              _0x166508("答题失败: " + _0x304212.message, "error");
            }
            _0x16108c.answeredCount = _0x19618b + 1;
            _0x2e9163();
            _0x19618b < _0x5e0a8e.length - 1 && (await new Promise(_0x53c8f9 => setTimeout(_0x53c8f9, 200)));
          }
        }
        await new Promise(_0x2e355b => setTimeout(_0x2e355b, 500));
        await _0x58e237();
      } catch (_0x2aae77) {
        _0x16108c.status = "";
        _0x16108c.isAnswering = false;
        _0x2e9163();
        _0x166508("答题出错: " + _0x2aae77.message, "error");
      }
    }
  }
  async function _0x58e237() {
    {
      _0x16108c.status = "claiming_rewards";
      _0x2e9163();
      _0x166508("正在领取奖励...", "info");
      for (let _0x838186 = 1; _0x838186 <= 10; _0x838186++) {
        {
          try {
            const _0x1a0045 = {
              rewardId: _0x838186
            };
            await _0xb1beb7("study_claimreward", _0x1a0045);
            await new Promise(_0x1866d2 => setTimeout(_0x1866d2, 200));
          } catch (_0x162686) {}
        }
      }
      _0x16108c.status = "completed";
      _0x16108c.isAnswering = false;
      _0x2e9163();
      _0x166508("答题完成，奖励已领取", "success");
      await new Promise(_0x5c271f => setTimeout(_0x5c271f, 3000));
      _0x16108c.isAnswering = false;
      _0x16108c.questionCount = 0;
      _0x16108c.answeredCount = 0;
      _0x16108c.status = "";
      _0x2e9163();
      await new Promise(_0x43b116 => setTimeout(_0x43b116, 1000));
      try {
        await _0xb1beb7("role_getroleinfo", {});
      } catch (_0x1462d4) {}
    }
  }
  async function _0x2f15b2() {
    if (_0x16108c.isAnswering) {
      _0x166508("答题进行中，请勿重复操作", "warning");
      return;
    }
    await _0x5c1d3f();
    await _0x5bdb69();
    _0x16108c.status = "starting";
    _0x16108c.answeredCount = 0;
    _0x16108c.questionCount = 0;
    _0x16108c.isAnswering = true;
    _0x2e9163();
    try {
      {
        const _0x1518f1 = await _0xb1beb7("study_startgame", {});
        _0x1518f1 && _0x1518f1.questionList ? await _0x569ce9(_0x1518f1) : (_0x166508("未获取到题目，请稍后重试", "error"), setTimeout(() => {
          {
            _0x16108c.status === "starting" && (_0x16108c.status = "", _0x16108c.isAnswering = false, _0x2e9163());
          }
        }, 40000));
      }
    } catch (_0x17e12f) {
      _0x16108c.status = "";
      _0x16108c.isAnswering = false;
      _0x2e9163();
      _0x166508("开始答题失败: " + _0x17e12f.message, "error");
    }
  }
  const _0x353a79 = {
    level: 100,
    order: 1
  };
  const _0x114075 = {
    level: 200,
    order: 2
  };
  const _0x341f72 = {
    level: 300,
    order: 3
  };
  const _0x31f068 = {
    level: 500,
    order: 4
  };
  const _0xcfff2a = {
    level: 700,
    order: 5
  };
  const _0xd1bc6a = {
    level: 900,
    order: 6
  };
  const _0x3915f4 = {
    level: 1100,
    order: 7
  };
  const _0x589098 = {
    level: 1300,
    order: 8
  };
  const _0x32a6f9 = {
    level: 1500,
    order: 9
  };
  const _0x2b150d = {
    level: 1800,
    order: 10
  };
  const _0x55440a = {
    level: 2100,
    order: 11
  };
  const _0x58082f = {
    level: 2400,
    order: 12
  };
  const _0x258f33 = {
    level: 2800,
    order: 13
  };
  const _0x59ad3b = {
    level: 3200,
    order: 14
  };
  const _0x58df1b = {
    level: 3600,
    order: 15
  };
  const _0x394208 = {
    level: 4000,
    order: 16
  };
  const _0x585fab = {
    level: 4500,
    order: 17
  };
  const _0x26d83c = {
    level: 5000,
    order: 18
  };
  const _0x2a125f = {
    level: 5500,
    order: 19
  };
  const _0x5ea089 = [_0x353a79, _0x114075, _0x341f72, _0x31f068, _0xcfff2a, _0xd1bc6a, _0x3915f4, _0x589098, _0x32a6f9, _0x2b150d, _0x55440a, _0x58082f, _0x258f33, _0x59ad3b, _0x58df1b, _0x394208, _0x585fab, _0x26d83c, _0x2a125f];
  let _0x12872e = [];
  const _0x9983d7 = (_0x56fe53, _0x5400e9, _0x5e1200) => {
    {
      for (const _0x536641 of _0x5ea089) {
        {
          if (_0x5e1200 !== _0x536641.order && _0x56fe53 <= _0x536641.level && _0x536641.level < _0x56fe53 + _0x5400e9) {
            return _0x536641.level;
          }
        }
      }
      return false;
    }
  };
  const _0x25b1af = (_0x3fea2c, _0x11009b) => {
    return _0x9983d7(_0x3fea2c, 1, _0x11009b) === _0x3fea2c;
  };
  const _0x4ff9af = async () => {
    const _0x1b73b6 = document.getElementById("qa-hero-upgrade-input");
    const _0x2a7074 = document.getElementById("qa-hero-upgrade-select");
    if (!_0x1b73b6) {
      return;
    }
    _0x1b73b6.placeholder = "加载中...";
    _0x1b73b6.disabled = true;
    try {
      const _0x8d0180 = await _0xb1beb7("role_getroleinfo", {});
      const _0x33b243 = _0x8d0180?.["role"] || _0x8d0180;
      _0x3b7778.roleInfo = _0x33b243;
      _0x3b7778.allHeroesData = _0x33b243?.["heroes"] || {};
      const _0x27f42a = _0x33b243?.["heroes"] || {};
      _0x12872e = Object.values(_0x27f42a).filter(_0x112bef => _0x112bef.level < 6000).sort((_0x33177c, _0xd038ce) => _0xd038ce.level - _0x33177c.level).map(_0x2b02cc => {
        {
          const _0x48f3d6 = _0x59c607(_0x2b02cc.heroId);
          const _0x3223c2 = {
            heroId: _0x2b02cc.heroId,
            name: _0x48f3d6,
            level: _0x2b02cc.level,
            label: _0x48f3d6 + " (" + _0x2b02cc.level + "/6000)",
            disabled: false
          };
          return _0x3223c2;
        }
      });
      _0x12872e.length === 0 ? _0x1b73b6.placeholder = "暂无可升级武将" : _0x1b73b6.placeholder = "输入武将名称搜索...";
      _0x1b73b6.disabled = false;
      _0x1b73b6.value = "";
      _0x2a7074.value = "";
      const _0x2734e4 = document.getElementById("qa-hero-upgrade-info");
      if (_0x2734e4) {
        _0x2734e4.style.display = "none";
      }
    } catch (_0x1a6f8b) {
      _0x1b73b6.placeholder = "加载失败";
      _0x1b73b6.disabled = false;
    }
  };
  const _0x18f7db = _0x180450 => {
    {
      const _0x5d565b = document.getElementById("qa-hero-upgrade-info");
      const _0x22fd1c = document.getElementById("qa-hero-upgrade-level");
      const _0x1d57ba = document.getElementById("qa-hero-upgrade-attack");
      const _0x5a4a48 = document.getElementById("qa-hero-upgrade-speed");
      document.getElementById("qa-hero-upgrade-order-btn");
      document.getElementById("qa-hero-upgrade-tip");
      if (!_0x180450) {
        _0x5d565b.style.display = "none";
        _0x3b7778.heroUpgradeSelectedId = null;
        return;
      }
      _0x3b7778.heroUpgradeSelectedId = _0x180450;
      const _0x109b56 = _0x3b7778.allHeroesData?.[String(_0x180450)];
      if (!_0x109b56) {
        {
          _0x5d565b.style.display = "none";
          return;
        }
      }
      _0x5d565b.style.display = "block";
      _0x22fd1c.textContent = (_0x109b56.level || 0) + "/6000";
      _0x1d57ba.textContent = _0x109b56.attack || 0;
      _0x5a4a48.textContent = _0x109b56.speed || 0;
      _0x146bb4(_0x109b56);
    }
  };
  const _0x146bb4 = _0x27eaf8 => {
    {
      const _0x42c6ae = document.getElementById("qa-hero-upgrade-order-btn");
      const _0x159a7e = document.getElementById("qa-hero-upgrade-tip");
      if (!_0x27eaf8) {
        _0x42c6ae.disabled = true;
        _0x159a7e.textContent = "选择武将后可进行升级/进阶操作";
        return;
      }
      const _0x1b7752 = _0x27eaf8.level || 0;
      const _0x1fe52b = _0x27eaf8.order || 0;
      const _0x5be01a = _0x25b1af(_0x1b7752, _0x1fe52b);
      _0x42c6ae.disabled = !_0x5be01a;
      if (_0x1b7752 >= 6000) {
        {
          _0x159a7e.textContent = "武将已满级";
          _0x159a7e.style.color = "#34c759";
        }
      } else {
        if (_0x5be01a) {
          {
            _0x159a7e.textContent = "已达到进阶条件，当前" + _0x1b7752 + "级可进阶";
            _0x159a7e.style.color = "#ff9500";
          }
        } else {
          const _0x25b463 = _0x5ea089.find(_0x36e16d => _0x36e16d.order > _0x1fe52b);
          if (_0x25b463) {
            {
              _0x159a7e.textContent = "下一进阶等级: " + _0x25b463.level + "级";
            }
          } else {
            _0x159a7e.textContent = "已达到最高进阶";
          }
          _0x159a7e.style.color = "";
        }
      }
    }
  };
  const _0x2e301e = async () => {
    const _0x3a40b8 = _0x3b7778.heroUpgradeSelectedId;
    const _0x29147d = document.getElementById("qa-hero-upgrade-num");
    const _0x94e2cb = document.getElementById("qa-hero-upgrade-level-btn");
    const _0x1bd05b = parseInt(_0x29147d?.["value"], 10) || 1;
    if (!_0x3a40b8) {
      _0x166508("请先选择武将", "warning");
      return;
    }
    const _0xe30159 = _0x3b7778.allHeroesData?.[String(_0x3a40b8)];
    if (!_0xe30159) {
      _0x166508("未找到武将数据", "warning");
      return;
    }
    const _0x438585 = _0xe30159.level || 0;
    const _0x455169 = _0xe30159.order || 0;
    const _0x1b800d = _0x9983d7(_0x438585, _0x1bd05b, _0x455169);
    if (_0x1b800d !== false) {
      _0x166508("需要先进阶到" + _0x1b800d + "级", "warning");
      return;
    }
    _0x3b7778.heroUpgradeRunning = true;
    _0x94e2cb.disabled = true;
    try {
      {
        const _0x43a664 = {
          heroId: _0x3a40b8,
          upgradeNum: _0x1bd05b
        };
        const _0x115a9b = await _0xb1beb7("hero_heroupgradelevel", _0x43a664);
        _0x3c5712("hero-upgrade", "武将升级", _0x115a9b);
        if (_0x115a9b?.["role"]?.["heroes"]) {
          _0x3b7778.allHeroesData = _0x115a9b.role.heroes;
          const _0x5da21d = _0x115a9b.role.heroes[String(_0x3a40b8)];
          if (_0x5da21d) {
            {
              const _0x4a7564 = document.getElementById("qa-hero-upgrade-level");
              const _0x107fdb = document.getElementById("qa-hero-upgrade-attack");
              const _0x1c612c = document.getElementById("qa-hero-upgrade-speed");
              _0x4a7564.textContent = (_0x5da21d.level || 0) + "/6000";
              _0x107fdb.textContent = _0x5da21d.attack || 0;
              _0x1c612c.textContent = _0x5da21d.speed || 0;
              _0x1fa37a(_0x3a40b8, _0x5da21d.level);
              _0x146bb4(_0x5da21d);
            }
          }
        }
      }
    } catch (_0x47ae60) {} finally {
      {
        _0x3b7778.heroUpgradeRunning = false;
        _0x94e2cb.disabled = false;
      }
    }
  };
  const _0x127e74 = async () => {
    const _0x1bb6df = _0x3b7778.heroUpgradeSelectedId;
    const _0x5644f3 = document.getElementById("qa-hero-upgrade-order-btn");
    if (!_0x1bb6df) {
      return;
    }
    const _0x5130ab = _0x3b7778.allHeroesData?.[String(_0x1bb6df)];
    if (!_0x5130ab) {
      return;
    }
    const _0x47f81a = _0x5130ab.level || 0;
    const _0xaed976 = _0x5130ab.order || 0;
    if (!_0x25b1af(_0x47f81a, _0xaed976)) {
      {
        return;
      }
    }
    _0x3b7778.heroUpgradeRunning = true;
    _0x5644f3.disabled = true;
    try {
      const _0x4976d5 = {
        heroId: _0x1bb6df
      };
      const _0x27ae45 = await _0xb1beb7("hero_heroupgradeorder", _0x4976d5);
      _0x3c5712("hero-upgrade", "武将进阶", _0x27ae45);
      if (_0x27ae45?.["role"]?.["heroes"]) {
        {
          _0x3b7778.allHeroesData = _0x27ae45.role.heroes;
          const _0x105162 = _0x27ae45.role.heroes[String(_0x1bb6df)];
          if (_0x105162) {
            const _0x3b31df = document.getElementById("qa-hero-upgrade-level");
            const _0x1fc953 = document.getElementById("qa-hero-upgrade-attack");
            const _0x56e6d4 = document.getElementById("qa-hero-upgrade-speed");
            _0x3b31df.textContent = (_0x105162.level || 0) + "/6000";
            _0x1fc953.textContent = _0x105162.attack || 0;
            _0x56e6d4.textContent = _0x105162.speed || 0;
            _0x146bb4(_0x105162);
          }
        }
      }
    } catch (_0x4dbd99) {} finally {
      _0x3b7778.heroUpgradeRunning = false;
      const _0x122909 = _0x3b7778.allHeroesData?.[String(_0x1bb6df)];
      _0x146bb4(_0x122909);
    }
  };
  const _0x3e9457 = () => {
    const _0x409360 = document.getElementById("qa-hero-upgrade-input");
    const _0x24b4c5 = document.getElementById("qa-hero-upgrade-select");
    const _0x69f12d = document.getElementById("qa-hero-upgrade-dropdown");
    _0x409360 && _0x69f12d && (_0x409360.addEventListener("focus", () => {
      _0x3cef75(_0x409360.value);
    }), _0x409360.addEventListener("input", _0x5dbffe => {
      _0x3cef75(_0x5dbffe.target.value);
    }), _0x69f12d.addEventListener("click", _0x293008 => {
      const _0x485b55 = _0x293008.target.closest(".qa-autocomplete-item");
      if (_0x485b55 && !_0x485b55.classList.contains("disabled")) {
        const _0x2a7775 = parseInt(_0x485b55.dataset.heroId, 10);
        const _0x47f57e = _0x485b55.dataset.label;
        _0x409360.value = _0x47f57e;
        _0x24b4c5.value = _0x2a7775;
        _0x3b91db();
        _0x18f7db(_0x2a7775);
      }
    }), document.addEventListener("click", _0x440dd0 => {
      const _0x5eda36 = document.getElementById("qa-hero-upgrade-autocomplete");
      _0x5eda36 && !_0x5eda36.contains(_0x440dd0.target) && _0x3b91db();
    }), _0x409360.addEventListener("keydown", _0x58116b => {
      const _0x3fde88 = _0x69f12d.querySelectorAll(".qa-autocomplete-item:not(.disabled)");
      const _0x132e24 = _0x69f12d.querySelector(".qa-autocomplete-item.active");
      let _0x518e7b = -1;
      if (_0x132e24) {
        {
          _0x518e7b = Array.from(_0x3fde88).indexOf(_0x132e24);
        }
      }
      if (_0x58116b.key === "ArrowDown") {
        {
          _0x58116b.preventDefault();
          if (_0x69f12d.style.display === "none") {
            _0x3cef75(_0x409360.value);
          } else {
            {
              const _0x4f2db4 = _0x518e7b < _0x3fde88.length - 1 ? _0x518e7b + 1 : 0;
              _0x83a0cd(_0x3fde88, _0x4f2db4);
            }
          }
        }
      } else {
        if (_0x58116b.key === "ArrowUp") {
          _0x58116b.preventDefault();
          const _0x160e19 = _0x518e7b > 0 ? _0x518e7b - 1 : _0x3fde88.length - 1;
          _0x83a0cd(_0x3fde88, _0x160e19);
        } else {
          if (_0x58116b.key === "Enter") {
            _0x58116b.preventDefault();
            if (_0x132e24) {
              {
                _0x132e24.click();
              }
            }
          } else {
            _0x58116b.key === "Escape" && _0x3b91db();
          }
        }
      }
    }));
    const _0xa8cafa = document.getElementById("qa-hero-upgrade-num");
    if (_0xa8cafa) {
      {
        _0xa8cafa.addEventListener("change", _0x284545 => {
          _0x3b7778.heroUpgradeLevelNum = parseInt(_0x284545.target.value, 10) || 1;
        });
      }
    }
  };
  const _0x3cef75 = (_0x48a608 = "") => {
    {
      const _0x2022bb = document.getElementById("qa-hero-upgrade-dropdown");
      const _0x223225 = document.getElementById("qa-hero-upgrade-input");
      if (!_0x2022bb || !_0x223225) {
        return;
      }
      const _0x40406f = _0x48a608.toLowerCase().trim();
      const _0x1f0d87 = _0x12872e.filter(_0x197205 => {
        {
          if (!_0x40406f) {
            return true;
          }
          return _0x197205.name.toLowerCase().includes(_0x40406f) || _0x197205.label.toLowerCase().includes(_0x40406f);
        }
      });
      _0x1f0d87.length === 0 ? _0x2022bb.innerHTML = "<div class=\"qa-autocomplete-empty\">无匹配武将</div>" : _0x2022bb.innerHTML = _0x1f0d87.map((_0x50eae5, _0x4c5c37) => "\n      <div class=\"qa-autocomplete-item " + (_0x50eae5.disabled ? "disabled" : "") + "\"\n           data-hero-id=\"" + _0x50eae5.heroId + "\"\n           data-label=\"" + _0x50eae5.label + "\">\n        <span class=\"qa-autocomplete-name\">" + _0x383b81(_0x50eae5.name, _0x40406f) + "</span>\n        <span class=\"qa-autocomplete-level\">Lv." + _0x50eae5.level + "</span>\n      </div>\n    ").join("");
      const _0x114416 = _0x223225.getBoundingClientRect();
      _0x2022bb.style.left = _0x114416.left + "px";
      _0x2022bb.style.top = _0x114416.bottom + "px";
      _0x2022bb.style.width = _0x114416.width + "px";
      _0x2022bb.style.display = "block";
    }
  };
  const _0x3b91db = () => {
    const _0x196efe = document.getElementById("qa-hero-upgrade-dropdown");
    _0x196efe && (_0x196efe.style.display = "none");
  };
  const _0x1fa37a = (_0x597403, _0x49e891) => {
    {
      const _0xa3dda2 = document.getElementById("qa-hero-upgrade-input");
      const _0x3b2ee4 = _0x59c607(_0x597403);
      const _0x50b03a = _0x3b2ee4 + " (" + _0x49e891 + "/6000)";
      const _0x378e87 = _0x12872e.findIndex(_0x2ce7eb => _0x2ce7eb.heroId === _0x597403);
      if (_0x378e87 !== -1) {
        if (_0x49e891 >= 6000) {
          _0x12872e.splice(_0x378e87, 1);
          _0xa3dda2.value = "";
          document.getElementById("qa-hero-upgrade-select").value = "";
          const _0x268397 = document.getElementById("qa-hero-upgrade-info");
          if (_0x268397) {
            _0x268397.style.display = "none";
          }
          _0x3b7778.heroUpgradeSelectedId = null;
        } else {
          _0x12872e[_0x378e87].level = _0x49e891;
          _0x12872e[_0x378e87].label = _0x50b03a;
          _0xa3dda2.value = _0x50b03a;
        }
      }
    }
  };
  const _0x83a0cd = (_0x475a5a, _0x2bdab3) => {
    _0x475a5a.forEach((_0x1285c2, _0x3bcee5) => {
      {
        if (_0x3bcee5 === _0x2bdab3) {
          {
            _0x1285c2.classList.add("active");
            const _0xca046 = {
              block: "nearest"
            };
            _0x1285c2.scrollIntoView(_0xca046);
          }
        } else {
          _0x1285c2.classList.remove("active");
        }
      }
    });
  };
  const _0x383b81 = (_0x548817, _0x1275ca) => {
    if (!_0x1275ca) {
      return _0x548817;
    }
    const _0x19b277 = new RegExp("(" + _0x1275ca.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return _0x548817.replace(_0x19b277, "<mark>$1</mark>");
  };
  const _0x139707 = _0x438625 => {
    if (!_0x438625 || !_0x438625.startsWith("qa_")) {
      return null;
    }
    const _0x1f1ebf = _0x438625.slice(3).split("_");
    if (_0x1f1ebf.length < 2) {
      return null;
    }
    const _0x516a87 = _0x1f1ebf[0];
    const _0x516107 = _0x1f1ebf.slice(1).join("_");
    return _0xbd56ba + "/" + _0x516a87 + "/" + _0x516107 + ".png";
  };
  const _0x4f0d53 = _0x260e8a => {
    try {
      if (typeof GM_getResourceURL === "function") {
        const _0x1a4848 = GM_getResourceURL(_0x260e8a);
        if (_0x1a4848) {
          return _0x1a4848;
        }
      }
    } catch {}
    return _0x139707(_0x260e8a) || "";
  };
  const _0x2687e1 = (_0x400ced = document) => {
    if (!_0x400ced || typeof _0x400ced.querySelectorAll !== "function") {
      return;
    }
    _0x400ced.querySelectorAll("img[data-res]").forEach(_0x356f97 => {
      {
        const _0x52ffb8 = _0x356f97.getAttribute("data-res");
        if (!_0x52ffb8) {
          return;
        }
        if (_0x356f97.getAttribute("src")) {
          return;
        }
        const _0x150da2 = _0x4f0d53(_0x52ffb8);
        if (_0x150da2) {
          _0x356f97.src = _0x150da2;
        }
      }
    });
  };
  const _0x1fcabd = {
    name: "龙鱼·幽影"
  };
  const _0x5c8d29 = {
    name: "龙鱼·青龙"
  };
  const _0x4a00df = {
    name: "龙鱼·火镰"
  };
  const _0x29c2c4 = {
    name: "龙鱼·无双"
  };
  const _0x4df7c2 = {
    name: "龙鱼·永霜"
  };
  const _0x76e5f3 = {
    name: "龙鱼·八卦"
  };
  const _0x219121 = {
    name: "龙鱼·紫电"
  };
  const _0x11cbd9 = {
    name: "龙鱼·青囊"
  };
  const _0x2a21c0 = {
    name: "龙鱼·洛神"
  };
  const _0x440551 = {
    name: "龙鱼·机神"
  };
  const _0x1b5f11 = {
    name: "龙鱼·霸王"
  };
  const _0xfd2975 = {
    name: "龙鱼·蚀骨"
  };
  const _0x5414f7 = {
    name: "龙鱼·坚盾"
  };
  const _0x357c9d = {
    name: "龙鱼·麒麟"
  };
  const _0x2aca57 = {
    name: "龙鱼·古锭"
  };
  const _0x578afc = {
    name: "龙鱼·义从"
  };
  const _0x56ad30 = {
    name: "龙鱼·恶来"
  };
  const _0x10abf1 = {
    name: "龙鱼·龙胆"
  };
  const _0x34b4d9 = {
    name: "龙鱼·国色"
  };
  const _0x395e07 = {
    name: "龙鱼·天公"
  };
  const _0x563d57 = {
    name: "月尾"
  };
  const _0x316540 = {
    name: "焰神"
  };
  const _0x216c3a = {
    name: "红蝶"
  };
  const _0x403114 = {
    name: "赤羽"
  };
  const _0x11265e = {
    name: "千年笛"
  };
  const _0x12c59d = {
    name: "四带胡椒"
  };
  const _0x71eb50 = {
    name: "鬼狮子鱼"
  };
  const _0x50d813 = {
    name: "黑斑雀鲷"
  };
  const _0xbcdd60 = {
    name: "诅咒花椒"
  };
  const _0x2419ee = {
    name: "九斑刺豚"
  };
  const _0x49a2a8 = {
    name: "魔鬼刺镰"
  };
  const _0x444c55 = {
    name: "黄背刺鲷"
  };
  const _0x174e85 = {
    name: "黑鳍刺鲷"
  };
  const _0x65540f = {
    name: "长棘刺鲷"
  };
  const _0x580945 = {
    name: "粒突箱鲀"
  };
  const _0x454033 = {
    name: "大跳跳鱼"
  };
  const _0x713ef7 = {
    name: "蓝心胖头"
  };
  const _0x42f14a = {
    name: "钱胡椒"
  };
  const _0x232eb4 = {
    name: "狮子鱼"
  };
  const _0x9e37cf = {
    name: "塔雀鲷"
  };
  const _0x52cca1 = {
    name: "紫斑鳅"
  };
  const _0x287fa7 = {
    name: "密刺豚"
  };
  const _0x222cfc = {
    name: "长鳍镰"
  };
  const _0x6fe844 = {
    name: "胖头鱼"
  };
  const _0x2a69ef = {
    name: "青刺鲷"
  };
  const _0x58738a = {
    name: "跳跳鱼"
  };
  const _0x599bb1 = {
    name: "箱豚鱼"
  };
  const _0x2f0351 = {
    name: "黄金锦鲤"
  };
  const _0x440c1c = {
    name: "利刃"
  };
  const _0xf5f511 = {
    name: "惊涛"
  };
  const _0x324923 = {
    name: "骇浪"
  };
  const _0x5335c7 = {
    name: "星驰"
  };
  const _0x5b830f = {
    name: "公同心"
  };
  const _0x39f196 = {
    name: "母同心"
  };
  const _0x2d2a2f = {
    name: "公协力"
  };
  const _0x23453f = {
    name: "母协力"
  };
  const _0x4520fd = {
    name: "月光"
  };
  const _0x4739db = {
    name: "公铁血"
  };
  const _0x36e061 = {
    name: "母铁血"
  };
  const _0xe3786f = {
    name: "公丹心"
  };
  const _0x4ac5f5 = {
    name: "母丹心"
  };
  const _0x5cd6c7 = {
    name: "巨灵"
  };
  const _0x1f7f29 = {
    name: "公剑胆"
  };
  const _0x5a2807 = {
    name: "母剑胆"
  };
  const _0x5402cf = {
    name: "璇玑"
  };
  const _0x3155a6 = {
    "1201": _0x1fcabd,
    "1202": _0x5c8d29,
    "1203": _0x4a00df,
    "1204": _0x29c2c4,
    "1205": _0x4df7c2,
    "1206": _0x76e5f3,
    "1207": _0x219121,
    "1208": _0x11cbd9,
    "1209": _0x2a21c0,
    "1210": _0x440551,
    "1211": _0x1b5f11,
    "1212": _0xfd2975,
    "1213": _0x5414f7,
    "1214": _0x357c9d,
    "1215": _0x2aca57,
    "1216": _0x578afc,
    "1217": _0x56ad30,
    "1218": _0x10abf1,
    "1219": _0x34b4d9,
    "1220": _0x395e07,
    "1301": _0x563d57,
    "1302": _0x316540,
    "1303": _0x216c3a,
    "1304": _0x403114,
    "1305": _0x11265e,
    "1401": _0x12c59d,
    "1402": _0x71eb50,
    "1403": _0x50d813,
    "1404": _0xbcdd60,
    "1405": _0x2419ee,
    "1406": _0x49a2a8,
    "1407": _0x444c55,
    "1408": _0x174e85,
    "1409": _0x65540f,
    "1410": _0x580945,
    "1411": _0x454033,
    "1412": _0x713ef7,
    "1501": _0x42f14a,
    "1502": _0x232eb4,
    "1503": _0x9e37cf,
    "1504": _0x52cca1,
    "1505": _0x287fa7,
    "1506": _0x222cfc,
    "1601": _0x6fe844,
    "1602": _0x2a69ef,
    "1603": _0x58738a,
    "1604": _0x599bb1,
    "1101": _0x2f0351,
    "1102": _0x440c1c,
    "1103": _0xf5f511,
    "1104": _0x324923,
    "1105": _0x5335c7,
    "1106": _0x5b830f,
    "1107": _0x39f196,
    "1108": _0x2d2a2f,
    "1109": _0x23453f,
    "1110": _0x4520fd,
    "1111": _0x4739db,
    "1112": _0x36e061,
    "1113": _0xe3786f,
    "1114": _0x4ac5f5,
    "1115": _0x5cd6c7,
    "1116": _0x1f7f29,
    "1117": _0x5a2807,
    "1118": _0x5402cf
  };
  const _0x5960a2 = {
    name: "穿云箭"
  };
  const _0x4ee3bd = {
    name: "皮鞋手机"
  };
  const _0x1d7ac8 = {
    name: "懦弱百合"
  };
  const _0x28fa76 = {
    name: "正义喇叭"
  };
  const _0x440edc = {
    name: "祖传大大饼"
  };
  const _0x38fa5f = {
    name: "冰镇啤酒"
  };
  const _0x1a7f69 = {
    name: "导演话筒"
  };
  const _0x40971a = {
    name: "驱蚊花露水"
  };
  const _0x55b2f6 = {
    name: "止痒花露水"
  };
  const _0x30ac9e = {
    "1": _0x5960a2,
    "2": _0x4ee3bd,
    "3": _0x1d7ac8,
    "4": _0x28fa76,
    "5": _0x440edc,
    "6": _0x38fa5f,
    "7": _0x1a7f69,
    "8": _0x40971a,
    "9": _0x55b2f6
  };
  const _0x4bda04 = {
    name: "碎盾"
  };
  const _0x145286 = {
    name: "冥想"
  };
  const _0x476998 = {
    name: "定心"
  };
  const _0x217047 = {
    name: "冰清"
  };
  const _0x51c604 = {
    name: "攻心"
  };
  const _0x449967 = {
    name: "强权"
  };
  const _0x32fda9 = {
    name: "盾击"
  };
  const _0x103666 = {
    name: "合力"
  };
  const _0x2b9cd5 = {
    name: "仁心"
  };
  const _0x53b6a4 = {
    name: "游龙"
  };
  const _0x53fd80 = {
    name: "回元"
  };
  const _0x2c2706 = {
    "1033007": _0x4bda04,
    "1033008": _0x145286,
    "1033009": _0x476998,
    "1033010": _0x217047,
    "1033011": _0x51c604,
    "1033012": _0x449967,
    "1033013": _0x32fda9,
    "1033014": _0x103666,
    "1033015": _0x2b9cd5,
    "1033016": _0x53b6a4,
    "1033017": _0x53fd80
  };
  const _0x454834 = {
    name: "白色",
    value: "#ffffff"
  };
  const _0x4e4eff = {
    name: "绿色",
    value: "#22c55e"
  };
  const _0x17b66d = {
    name: "蓝色",
    value: "#3b82f6"
  };
  const _0x285509 = {
    name: "紫色",
    value: "#a855f7"
  };
  const _0x41c506 = {
    name: "橙色",
    value: "#f97316"
  };
  const _0x228411 = {
    name: "红色",
    value: "#ef4444"
  };
  const _0x250e0b = {
    "1": _0x454834,
    "2": _0x4e4eff,
    "3": _0x17b66d,
    "4": _0x285509,
    "5": _0x41c506,
    "6": _0x228411
  };
  const _0xf19e3b = _0x386534 => {
    if (!_0x386534) {
      return null;
    }
    const _0x201f3f = String(_0x386534).substring(0, 4);
    return _0x3155a6[_0x201f3f]?.["name"] || null;
  };
  const _0x569753 = _0x5b00d3 => {
    if (!_0x5b00d3 || !Array.isArray(_0x5b00d3)) {
      return null;
    }
    for (const _0x2f1004 of _0x5b00d3) {
      if (_0x2c2706[_0x2f1004.skillId]) {
        return _0x2c2706[_0x2f1004.skillId].name;
      }
    }
    return null;
  };
  const _0x37efe7 = _0x5133f5 => {
    {
      const _0x3c0893 = String(_0x5133f5 || "").trim();
      if (!_0x3c0893) {
        return "?";
      }
      return _0x3c0893.slice(0, 2);
    }
  };
  const _0x47627c = _0x5679d0 => {
    const _0x3e746a = _0x5a3537?.[_0x5679d0];
    if (!_0x3e746a) {
      return "";
    }
    if (_0x3e746a.avatar) {
      const _0x576c32 = String(_0x3e746a.avatar).split("/").filter(Boolean);
      const _0x240794 = _0x576c32.length >= 2 ? _0x576c32[0] : "team";
      const _0x2a8416 = _0x576c32[_0x576c32.length - 1] || "";
      const _0x2d1a50 = _0x2a8416.replace(/\.[^.]+$/, "");
      if (_0x2d1a50) {
        return ("qa_" + _0x240794 + "_" + _0x2d1a50).replace(/[^a-zA-Z0-9_]/g, "_");
      }
    }
    return "qa_team_hero_" + _0x5679d0;
  };
  const _0x4c2400 = (_0x7c7dfc = document) => {
    if (!_0x7c7dfc || typeof _0x7c7dfc.querySelectorAll !== "function") {
      return;
    }
    _0x7c7dfc.querySelectorAll(".qa-avatar-img").forEach(_0x4d5f2d => {
      if (_0x4d5f2d.dataset.qaAvatarBound === "1") {
        return;
      }
      _0x4d5f2d.dataset.qaAvatarBound = "1";
      const _0x1b086b = _0x4d5f2d.closest(".qa-avatar");
      const _0x21fdc7 = _0x1b086b ? _0x1b086b.querySelector(".qa-avatar-fallback") : null;
      const _0x1d0303 = () => {
        _0x4d5f2d.style.display = "block";
        _0x4d5f2d.style.opacity = "1";
        if (_0x21fdc7) {
          _0x21fdc7.style.display = "none";
        }
      };
      const _0x1912fd = () => {
        {
          _0x4d5f2d.style.display = "none";
          if (_0x21fdc7) {
            _0x21fdc7.style.display = "flex";
          }
        }
      };
      _0x4d5f2d.style.opacity = "0";
      if (_0x21fdc7) {
        _0x21fdc7.style.display = "flex";
      }
      const _0x10e58b = {
        once: true
      };
      _0x4d5f2d.addEventListener("load", () => _0x1d0303(), _0x10e58b);
      const _0x4a65bd = {
        once: true
      };
      _0x4d5f2d.addEventListener("error", () => _0x1912fd(), _0x4a65bd);
      if (_0x4d5f2d.complete) {
        {
          if (_0x4d5f2d.naturalWidth > 0) {
            _0x1d0303();
          } else {
            _0x1912fd();
          }
        }
      }
    });
  };
  let _0x4e2a13 = null;
  const _0xc66a2f = () => {
    _0x4e2a13 && (_0x4e2a13.remove(), _0x4e2a13 = null);
  };
  const _0x27a455 = _0x269148 => {
    const _0x381c22 = {
      "1": "武器",
      "2": "衣服",
      "3": "头盔",
      "4": "坐骑"
    };
    const _0xc0325f = Object.entries(_0x269148 || {});
    if (!_0xc0325f.length) {
      return "";
    }
    const _0x191cfa = _0xc0325f.map(([_0x19958e, _0x340223]) => {
      const _0x1d6895 = _0x381c22[_0x19958e] || "部位" + _0x19958e;
      const _0x3f1507 = Object.values(_0x340223?.["quenches"] || {});
      if (!_0x3f1507.length) {
        return "<div class=\"qa-quench-equip-item\">\n        <span class=\"equip-label\">" + _0x1d6895 + ":</span>\n        <span style=\"color:#9ca3af\">--</span>\n      </div>";
      }
      const _0x1354d7 = _0x3f1507.map(_0xc38a0 => {
        {
          const _0x16d8ff = _0xc38a0?.["colorId"] === 6;
          return "<div class=\"qa-quench-diamond" + (_0x16d8ff ? " red" : "") + "\" style=\"display:inline-block;width:12px;height:12px;transform:rotate(45deg);border:1px solid " + (_0x16d8ff ? "#ff3b30" : "#a7a7a7") + ";background:" + (_0x16d8ff ? "#ff3b30" : "#fff") + ";\"></div>";
        }
      }).join("");
      return "<div class=\"qa-quench-equip-item\">\n      <span class=\"equip-label\">" + _0x1d6895 + ":</span>\n      <div class=\"qa-quench-diamonds\" style=\"display:inline-flex;gap:4px;align-items:center;\">" + _0x1354d7 + "</div>\n    </div>";
    }).join("");
    return "<div class=\"qa-quench-diamond-row\">" + _0x191cfa + "</div>";
  };
  const _0x17b212 = _0x3285c7 => {
    {
      if (!_0x3285c7) {
        return;
      }
      _0xc66a2f();
      const _0x1345e5 = document.createElement("div");
      _0x1345e5.className = "qa-auth-overlay qa-hero-overlay";
      _0x4e2a13 = _0x1345e5;
      const _0x205de3 = _0x3285c7.hasHolyBeast ? "已开四圣" : "未开四圣";
      const _0x1a408c = _0x3285c7.hasHolyBeast ? "on" : "off";
      const _0x17daab = () => {
        if (!_0x3285c7.fishSlots || _0x3285c7.fishSlots.length === 0) {
          return "<span style=\"color:#000;\">无淬炼</span>";
        }
        return _0x3285c7.fishSlots.map(_0x13f503 => {
          return "<div style=\"display:inline-block;width:12px;height:12px;border-radius:50%;background:" + _0x13f503.colorValue + ";border:1px solid rgba(0,0,0,0.2);margin-right:4px;\"></div>";
        }).join("");
      };
      _0x1345e5.innerHTML = "\n    <div class=\"qa-hero-modal\" role=\"dialog\" aria-modal=\"true\">\n      <div class=\"qa-hero-modal-head\">\n        <div class=\"qa-hero-modal-title\">武将详情</div>\n        <button class=\"qa-hero-modal-close\" type=\"button\" data-action=\"close\">关闭</button>\n      </div>\n\n      <div class=\"qa-hero-summary\">\n        <div class=\"qa-avatar qa-avatar-32\" title=\"" + _0x3285c7.heroName + "\">\n          <img class=\"qa-avatar-img\" " + (_0x3285c7.heroAvatarRes ? "data-res=\"" + _0x3285c7.heroAvatarRes + "\"" : "") + " alt=\"" + _0x3285c7.heroName + "\" loading=\"lazy\">\n          <div class=\"qa-avatar-fallback\">" + _0x37efe7(_0x3285c7.heroName) + "</div>\n        </div>\n        <div class=\"qa-hero-summary-meta\">\n          <div class=\"qa-hero-summary-name\">" + _0x3285c7.heroName + "</div>\n          <div class=\"qa-hero-summary-sub\">\n            <span>Lv." + (_0x3285c7.level || 1) + "</span>\n            <span>⭐" + (_0x3285c7.star || 0) + "</span>\n            <span>战力:" + _0x3285c7.power + "</span>\n          </div>\n          <div class=\"qa-hero-summary-sub\">\n            <span class=\"qa-pvp-hero-red\">红" + _0x3285c7.red + "</span>\n            <span class=\"qa-pvp-hero-hole\">孔" + _0x3285c7.hole + "</span>\n            <span class=\"qa-pvp-hero-holy " + _0x1a408c + "\">" + _0x205de3 + "</span>\n          </div>\n        </div>\n      </div>\n\n      " + _0x27a455(_0x3285c7.equipment) + "\n\n      <div class=\"qa-hero-fish-section\" style=\"padding:12px 14px;border-bottom:1px solid var(--qa-border,#e5e7eb);\">\n        <div class=\"qa-hero-fish-row\" style=\"display:flex;align-items:center;gap:12px;flex-wrap:wrap;\">\n          <div style=\"display:flex;align-items:center;gap:6px;\">\n            <span style=\"font-size:12px;color:#000;\">鱼灵:</span>\n            <span style=\"font-size:13px;font-weight:600;color:#000;\">" + (_0x3285c7.fishName || "无") + "</span>\n          </div>\n          <div style=\"display:flex;align-items:center;gap:6px;\">\n            <span style=\"font-size:12px;color:#000;\">鱼珠技能:</span>\n            <span style=\"font-size:13px;font-weight:600;color:#000;\">" + (_0x3285c7.pearlSkill || "无") + "</span>\n          </div>\n        </div>\n        <div class=\"qa-hero-fish-quench\" style=\"display:flex;align-items:center;gap:6px;margin-top:8px;\">\n          <span style=\"font-size:12px;color:#000;\">鱼灵淬炼:</span>\n          " + _0x17daab() + "\n        </div>\n      </div>\n    </div>\n  ";
      document.body.appendChild(_0x1345e5);
      _0x2687e1(_0x1345e5);
      _0x4c2400(_0x1345e5);
      _0x1345e5.addEventListener("click", _0xecce5a => {
        if (_0xecce5a.target === _0x1345e5) {
          _0xc66a2f();
        }
      });
      const _0x4a36b1 = _0x1345e5.querySelector("[data-action=\"close\"]");
      if (_0x4a36b1) {
        _0x4a36b1.addEventListener("click", () => _0xc66a2f());
      }
    }
  };
  const _0xc8d0c5 = _0x5e680d => {
    if (!_0x5e680d) {
      return "0";
    }
    if (_0x5e680d >= 100000000) {
      return (_0x5e680d / 100000000).toFixed(2) + "亿";
    }
    if (_0x5e680d >= 10000) {
      {
        return (_0x5e680d / 10000).toFixed(2) + "万";
      }
    }
    return _0x5e680d.toString();
  };
  const _0x9fc82 = _0xdedc3b => {
    {
      let _0x1e4072 = 0;
      let _0x4c8e48 = 0;
      const _0x461321 = {
        redCount: _0x1e4072,
        holeCount: _0x4c8e48
      };
      if (!_0xdedc3b) {
        return _0x461321;
      }
      Object.values(_0xdedc3b).forEach(_0x44d93e => {
        if (_0x44d93e && _0x44d93e.quenches) {
          {
            Object.values(_0x44d93e.quenches).forEach(_0x264e4d => {
              _0x4c8e48++;
              if (_0x264e4d.colorId === 6) {
                {
                  _0x1e4072++;
                }
              }
            });
          }
        }
      });
      const _0x294742 = {
        redCount: _0x1e4072,
        holeCount: _0x4c8e48
      };
      return _0x294742;
    }
  };
  const _0x3a26b3 = _0x386089 => {
    let _0xaa2bdb = 0;
    let _0x22ec9c = 0;
    const _0x11e44b = [];
    const _0x564b7a = {
      redCount: _0xaa2bdb,
      holeCount: _0x22ec9c,
      heroList: _0x11e44b
    };
    if (!_0x386089 || !_0x386089.heroes) {
      return _0x564b7a;
    }
    const _0x2bf1ea = {};
    _0x386089.pearlMap && Object.values(_0x386089.pearlMap).forEach(_0x3dc93a => {
      {
        _0x3dc93a.artifactId && (_0x2bf1ea[_0x3dc93a.artifactId] = _0x3dc93a.slotMap || {});
      }
    });
    Object.values(_0x386089.heroes).forEach(_0x566552 => {
      const _0x56d8a6 = _0x5a3537[_0x566552.heroId] || {};
      const _0x28194e = _0x9fc82(_0x566552.equipment);
      const _0x49b206 = _0xf19e3b(_0x566552.artifactId);
      const _0x23cbeb = _0x569753(_0x566552.appendSkill);
      const _0x4a4cfa = [];
      const _0x69ffdd = _0x2bf1ea[_0x566552.artifactId];
      _0x69ffdd && Object.values(_0x69ffdd).forEach(_0x56f9f8 => {
        const _0x5049bc = {
          name: "未知",
          value: "#9ca3af"
        };
        const _0x4f2e4f = _0x250e0b[_0x56f9f8.colorId] || _0x5049bc;
        const _0x2d56bd = {
          colorId: _0x56f9f8.colorId,
          colorName: _0x4f2e4f.name,
          colorValue: _0x4f2e4f.value
        };
        _0x4a4cfa.push(_0x2d56bd);
      });
      _0x11e44b.push({
        heroId: _0x566552.heroId,
        heroName: _0x56d8a6.name || "武将" + _0x566552.heroId,
        heroAvatarRes: _0x47627c(_0x566552.heroId),
        power: _0xc8d0c5(_0x566552.power),
        star: _0x566552.star || 0,
        level: _0x566552.level || 0,
        red: _0x28194e.redCount,
        hole: _0x28194e.holeCount,
        hasHolyBeast: _0x566552.hB?.["active"] || false,
        equipment: _0x566552.equipment || {},
        fishName: _0x49b206,
        pearlSkill: _0x23cbeb,
        fishSlots: _0x4a4cfa
      });
      _0xaa2bdb += _0x28194e.redCount;
      _0x22ec9c += _0x28194e.holeCount;
    });
    const _0x17086a = {
      redCount: _0xaa2bdb,
      holeCount: _0x22ec9c,
      heroList: _0x11e44b
    };
    return _0x17086a;
  };
  const _0x54d030 = async () => {
    {
      const _0x5ca2ac = document.getElementById("qa-pvp-target");
      const _0x353a99 = _0x5ca2ac?.["value"]?.["trim"]();
      if (!_0x353a99) {
        _0x166508("请输入目标ID", "warning");
        return null;
      }
      const _0x3d64a7 = document.getElementById("qa-pvp-status");
      if (_0x3d64a7) {
        _0x3d64a7.textContent = "正在查询对手信息...";
      }
      try {
        {
          const _0x1d1fa7 = {
            bottleType: 0,
            includeBottleTeam: false,
            isSearch: false,
            roleId: _0x353a99
          };
          const _0x8f1dfe = await _0xb1beb7("rank_getroleinfo", _0x1d1fa7);
          _0x3c5712("pvp", "查询对手信息", _0x8f1dfe);
          if (!_0x8f1dfe.roleInfo && !_0x8f1dfe.legionInfo) {
            {
              _0x166508("未查询到对手信息", "warning");
              if (_0x3d64a7) {
                _0x3d64a7.textContent = "未查询到对手信息";
              }
              return null;
            }
          }
          const _0x52a19b = _0x3a26b3(_0x8f1dfe.roleInfo);
          const _0x5aea01 = _0x8f1dfe.roleInfo?.["lordWeaponId"] || 0;
          const _0x29987e = _0x5aea01 > 0 ? _0x30ac9e[_0x5aea01]?.["name"] || "未知玩具" : "-";
          const _0x35763f = {
            roleId: _0x353a99,
            name: _0x8f1dfe.roleInfo?.["name"] || "未知",
            headImg: _0x8f1dfe.roleInfo?.["headImg"] || "",
            serverName: _0x8f1dfe.roleInfo?.["serverName"] || "未知区服",
            power: _0xc8d0c5(_0x8f1dfe.roleInfo?.["power"]),
            red: _0x52a19b.redCount,
            hole: _0x52a19b.holeCount,
            heroList: _0x52a19b.heroList,
            legionName: _0x8f1dfe.legionInfo?.["name"] || "无俱乐部",
            legionMaxPower: _0xc8d0c5(_0x8f1dfe.legionInfo?.["statistics"]?.["max:power"]),
            legionRed: _0x8f1dfe.legionInfo?.["statistics"]?.["battle:red:quench"] || 0,
            legionMaxRed: _0x8f1dfe.legionInfo?.["statistics"]?.["red:quench"] || 0,
            lordWeaponId: _0x5aea01,
            lordWeaponName: _0x29987e
          };
          _0x3b7778.pvpTargetData = _0x35763f;
          _0x3503d8(_0x35763f);
          if (_0x3d64a7) {
            _0x3d64a7.textContent = "查询完成";
          }
          return _0x35763f;
        }
      } catch (_0x297c4e) {
        if (_0x3d64a7) {
          _0x3d64a7.textContent = "查询失败";
        }
        return null;
      }
    }
  };
  const _0x3503d8 = _0x3e9fd2 => {
    const _0x151ed1 = document.getElementById("qa-pvp-target-info");
    if (!_0x151ed1) {
      return;
    }
    _0x151ed1.style.display = "block";
    const _0x1c7b1f = document.getElementById("qa-pvp-avatar-img");
    if (_0x1c7b1f && _0x3e9fd2.headImg) {
      {
        _0x1c7b1f.src = _0x3e9fd2.headImg;
        _0x1c7b1f.style.display = "block";
        _0x1c7b1f.referrerPolicy = "no-referrer";
        _0x1c7b1f.loading = "lazy";
        _0x1c7b1f.onerror = () => {
          _0x1c7b1f.style.display = "none";
        };
      }
    }
    const _0x4c5905 = document.getElementById("qa-pvp-target-name");
    if (_0x4c5905) {
      _0x4c5905.textContent = _0x3e9fd2.name;
    }
    const _0x91a99e = document.getElementById("qa-pvp-target-server");
    if (_0x91a99e) {
      _0x91a99e.textContent = _0x3e9fd2.serverName;
    }
    const _0x50dd76 = document.getElementById("qa-pvp-target-power");
    if (_0x50dd76) {
      _0x50dd76.textContent = _0x3e9fd2.power;
    }
    const _0x20d163 = document.getElementById("qa-pvp-target-red");
    if (_0x20d163) {
      _0x20d163.textContent = _0x3e9fd2.red;
    }
    const _0x2acfd0 = document.getElementById("qa-pvp-target-hole");
    if (_0x2acfd0) {
      _0x2acfd0.textContent = _0x3e9fd2.hole;
    }
    const _0x7daca4 = document.getElementById("qa-pvp-target-legion");
    if (_0x7daca4) {
      _0x7daca4.textContent = _0x3e9fd2.legionName;
    }
    const _0x4da0cc = document.getElementById("qa-pvp-target-max-power");
    if (_0x4da0cc) {
      _0x4da0cc.textContent = _0x3e9fd2.legionMaxPower;
    }
    const _0x2b8a41 = document.getElementById("qa-pvp-target-legion-red");
    if (_0x2b8a41) {
      _0x2b8a41.textContent = _0x3e9fd2.legionRed;
    }
    const _0xd3aa60 = document.getElementById("qa-pvp-target-weapon");
    if (_0xd3aa60) {
      _0xd3aa60.textContent = _0x3e9fd2.lordWeaponName || "-";
    }
    const _0x52c104 = document.getElementById("qa-pvp-hero-list");
    _0x52c104 && _0x3e9fd2.heroList && (_0x52c104.innerHTML = _0x3e9fd2.heroList.map(_0x1e19ff => "\n      <div class=\"qa-pvp-hero-item\" role=\"button\" tabindex=\"0\" data-hero-id=\"" + _0x1e19ff.heroId + "\">\n        <div class=\"qa-avatar qa-avatar-32\" title=\"" + _0x1e19ff.heroName + "\">\n          <img class=\"qa-avatar-img\" " + (_0x1e19ff.heroAvatarRes ? "data-res=\"" + _0x1e19ff.heroAvatarRes + "\"" : "") + " alt=\"" + _0x1e19ff.heroName + "\" loading=\"lazy\">\n          <div class=\"qa-avatar-fallback\">" + _0x37efe7(_0x1e19ff.heroName) + "</div>\n        </div>\n        <div class=\"qa-pvp-hero-meta\">\n          <div class=\"qa-pvp-hero-name\">" + _0x1e19ff.heroName + "</div>\n          <div class=\"qa-pvp-hero-sub\">战力:" + _0x1e19ff.power + "</div>\n          <div class=\"qa-pvp-hero-sub\">\n            <span class=\"qa-pvp-hero-red\">红" + _0x1e19ff.red + "</span>\n            <span class=\"qa-pvp-hero-hole\">孔" + _0x1e19ff.hole + "</span>\n            <span class=\"qa-pvp-hero-holy " + (_0x1e19ff.hasHolyBeast ? "on" : "off") + "\">" + (_0x1e19ff.hasHolyBeast ? "四圣" : "未开四圣") + "</span>\n          </div>\n        </div>\n      </div>\n    ").join(""), _0x2687e1(_0x52c104), _0x4c2400(_0x52c104), _0x52c104.dataset.qaHeroClickBound !== "1" && (_0x52c104.dataset.qaHeroClickBound = "1", _0x52c104.addEventListener("click", _0x29d144 => {
      {
        const _0x3269fd = _0x29d144.target?.["closest"]?.("[data-hero-id]");
        if (!_0x3269fd) {
          return;
        }
        const _0x3ea2ef = Number(_0x3269fd.getAttribute("data-hero-id"));
        const _0x6fdac6 = _0x3e9fd2.heroList.find(_0x4d1607 => Number(_0x4d1607.heroId) === _0x3ea2ef);
        _0x17b212(_0x6fdac6);
      }
    }), _0x52c104.addEventListener("keydown", _0x5296db => {
      if (_0x5296db.key !== "Enter" && _0x5296db.key !== " ") {
        return;
      }
      const _0x3bbc5e = _0x5296db.target?.["closest"]?.("[data-hero-id]");
      if (!_0x3bbc5e) {
        return;
      }
      _0x5296db.preventDefault();
      const _0x47e225 = Number(_0x3bbc5e.getAttribute("data-hero-id"));
      const _0x26ceab = _0x3e9fd2.heroList.find(_0x1fca92 => Number(_0x1fca92.heroId) === _0x47e225);
      _0x17b212(_0x26ceab);
    })));
  };
  const _0x36d2ff = async () => {
    const _0x268ecc = document.getElementById("qa-pvp-target");
    const _0x31dde1 = document.getElementById("qa-pvp-count");
    const _0xfe384c = _0x268ecc?.["value"]?.["trim"]();
    const _0x59c9f6 = parseInt(_0x31dde1?.["value"], 10) || 1;
    if (!_0xfe384c) {
      {
        _0x166508("请输入目标ID", "warning");
        return;
      }
    }
    const _0x505274 = document.getElementById("qa-pvp-status");
    document.getElementById("qa-pvp-result");
    document.getElementById("qa-pvp-battles");
    if (_0x505274) {
      _0x505274.textContent = "正在切磋中 (0/" + _0x59c9f6 + ")...";
    }
    _0x166508("开始切磋，共" + _0x59c9f6 + "次", "info");
    _0x3b7778.pvpRunning = true;
    try {
      await _0xc8c99c();
      if (!_0x3b7778.battleVersion) {
        {
          if (_0x505274) {
            _0x505274.textContent = "获取战斗版本失败";
          }
          _0x166508("获取战斗版本失败", "error");
          _0x3b7778.pvpRunning = false;
          return;
        }
      }
      let _0x1c2346 = 0;
      let _0x3c28c5 = 0;
      const _0x5b82de = [];
      for (let _0x5e94a8 = 0; _0x5e94a8 < _0x59c9f6; _0x5e94a8++) {
        if (!_0x3b7778.pvpRunning) {
          {
            _0x166508("切磋已停止", "info");
            break;
          }
        }
        if (_0x505274) {
          _0x505274.textContent = "正在切磋中 (" + (_0x5e94a8 + 1) + "/" + _0x59c9f6 + ")...";
        }
        _0x166508("正在切磋 " + (_0x5e94a8 + 1) + "/" + _0x59c9f6, "info");
        const _0x41800a = {
          targetId: _0xfe384c
        };
        const _0x1ff837 = await _0xb1beb7("fight_startpvp", _0x41800a);
        if (!_0x1ff837.battleData) {
          _0x166508("切磋失败，无法获取战斗数据", "error");
          break;
        }
        let _0x45bb72 = 0;
        let _0x3172bf = 0;
        _0x1ff837.battleData.result?.["sponsor"]?.["teamInfo"] && _0x1ff837.battleData.result.sponsor.teamInfo.forEach(_0x724cee => {
          if (_0x724cee.hp === 0) {
            _0x45bb72++;
          }
        });
        _0x1ff837.battleData.result?.["accept"]?.["teamInfo"] && _0x1ff837.battleData.result.accept.teamInfo.forEach(_0x10f261 => {
          {
            if (_0x10f261.hp === 0) {
              _0x3172bf++;
            }
          }
        });
        if (_0x45bb72 > 0) {
          _0x3c28c5++;
        }
        const _0x24c0ba = _0x1ff837.battleData.result?.["isWin"] || false;
        if (_0x24c0ba) {
          _0x1c2346++;
        }
        _0x5b82de.push({
          leftName: _0x1ff837.battleData.leftTeam?.["name"] || "我方",
          leftHeadImg: _0x1ff837.battleData.leftTeam?.["headImg"] || "",
          leftPower: _0xc8d0c5(_0x1ff837.battleData.leftTeam?.["power"]),
          rightName: _0x1ff837.battleData.rightTeam?.["name"] || "对方",
          rightHeadImg: _0x1ff837.battleData.rightTeam?.["headImg"] || "",
          rightPower: _0xc8d0c5(_0x1ff837.battleData.rightTeam?.["power"]),
          leftDieHero: _0x45bb72,
          rightDieHero: _0x3172bf,
          isWin: _0x24c0ba
        });
        if (_0x5e94a8 < _0x59c9f6 - 1) {
          {
            await new Promise(_0x59aa79 => setTimeout(_0x59aa79, 300));
          }
        }
      }
      const _0x24848a = {
        winCount: _0x1c2346,
        dieHeroGameCount: _0x3c28c5,
        total: _0x5b82de.length,
        battles: _0x5b82de
      };
      _0x3b7778.pvpResult = _0x24848a;
      _0x3958e0(_0x24848a);
      _0x3c5712("pvp", "切磋结果", _0x24848a);
      if (_0x505274) {
        _0x505274.textContent = "切磋完成: " + _0x1c2346 + "胜/" + _0x5b82de.length + "场";
      }
      _0x166508("切磋完成: " + _0x1c2346 + "胜/" + _0x5b82de.length + "场", "success");
    } catch (_0x5617f2) {
      {
        if (_0x505274) {
          _0x505274.textContent = "切磋失败";
        }
        _0x166508("切磋失败: " + _0x5617f2.message, "error");
      }
    } finally {
      _0x3b7778.pvpRunning = false;
    }
  };
  const _0x3958e0 = _0x31bc49 => {
    {
      const _0x42fbb1 = document.getElementById("qa-pvp-result");
      if (!_0x42fbb1) {
        return;
      }
      _0x42fbb1.style.display = "block";
      const _0x4b0430 = document.getElementById("qa-pvp-win-rate");
      if (_0x4b0430) {
        const _0x189a21 = _0x31bc49.total > 0 ? (_0x31bc49.winCount / _0x31bc49.total * 100).toFixed(1) : 0;
        _0x4b0430.textContent = _0x189a21 + "%";
      }
      const _0x26535a = document.getElementById("qa-pvp-die-rate");
      if (_0x26535a) {
        const _0x1b4128 = _0x31bc49.total > 0 ? (_0x31bc49.dieHeroGameCount / _0x31bc49.total * 100).toFixed(1) : 0;
        _0x26535a.textContent = _0x1b4128 + "%";
      }
      const _0x35ab65 = document.getElementById("qa-pvp-total");
      if (_0x35ab65) {
        _0x35ab65.textContent = _0x31bc49.total;
      }
      const _0x563a2b = document.getElementById("qa-pvp-battles");
      _0x563a2b && _0x31bc49.battles && (_0x563a2b.innerHTML = _0x31bc49.battles.map((_0x58068b, _0x59da0f) => "\n      <div class=\"pvp-battle-item\" style=\"display:flex;align-items:center;justify-content:space-between;padding:8px;margin-bottom:6px;background:" + (_0x58068b.isWin ? "rgba(52,199,89,0.1)" : "rgba(255,59,48,0.1)") + ";border-radius:6px;border-left:3px solid " + (_0x58068b.isWin ? "#34c759" : "#ff3b30") + ";\">\n        <div style=\"flex:1;display:flex;align-items:center;gap:8px;min-width:0;\">\n          <div class=\"qa-avatar qa-avatar-24\" title=\"" + _0x58068b.leftName + "\">\n            <img class=\"qa-avatar-img\" " + (_0x58068b.leftHeadImg ? "src=\"" + _0x58068b.leftHeadImg + "\"" : "") + " alt=\"" + _0x58068b.leftName + "\" loading=\"lazy\" referrerpolicy=\"no-referrer\">\n            <div class=\"qa-avatar-fallback\">" + _0x37efe7(_0x58068b.leftName) + "</div>\n          </div>\n          <div style=\"flex:1;min-width:0;\">\n            <div style=\"font-size:12px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">" + _0x58068b.leftName + "</div>\n            <div style=\"font-size:10px;color:var(--text-secondary);\">战力:" + _0x58068b.leftPower + "</div>\n            <div style=\"font-size:10px;color:#ff3b30;\">掉将:" + _0x58068b.leftDieHero + "</div>\n          </div>\n        </div>\n        <div style=\"padding:0 10px;\">\n          <span style=\"font-size:12px;font-weight:bold;color:" + (_0x58068b.isWin ? "#34c759" : "#ff3b30") + ";\">\n            " + (_0x58068b.isWin ? "胜利" : "失败") + "\n          </span>\n        </div>\n        <div style=\"flex:1;display:flex;align-items:center;gap:8px;justify-content:flex-end;min-width:0;\">\n          <div style=\"flex:1;min-width:0;text-align:right;\">\n            <div style=\"font-size:12px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">" + _0x58068b.rightName + "</div>\n            <div style=\"font-size:10px;color:var(--text-secondary);\">战力:" + _0x58068b.rightPower + "</div>\n            <div style=\"font-size:10px;color:#ff3b30;\">掉将:" + _0x58068b.rightDieHero + "</div>\n          </div>\n          <div class=\"qa-avatar qa-avatar-24\" title=\"" + _0x58068b.rightName + "\">\n            <img class=\"qa-avatar-img\" " + (_0x58068b.rightHeadImg ? "src=\"" + _0x58068b.rightHeadImg + "\"" : "") + " alt=\"" + _0x58068b.rightName + "\" loading=\"lazy\" referrerpolicy=\"no-referrer\">\n            <div class=\"qa-avatar-fallback\">" + _0x37efe7(_0x58068b.rightName) + "</div>\n          </div>\n        </div>\n      </div>\n    ").join(""), _0x4c2400(_0x563a2b));
    }
  };
  const _0x8c5aaf = () => {
    {
      _0x3b7778.pvpRunning = false;
    }
  };
  let _0x1a7b57 = false;
  const _0x178f55 = _0x14722d => {
    {
      if (!_0x14722d) {
        return null;
      }
      if (Array.isArray(_0x14722d)) {
        const _0x315f4a = _0x14722d[0];
        return _0x315f4a?.["roleId"] || _0x315f4a?.["id"] || _0x315f4a?.["targetId"];
      }
      const _0x535f75 = _0x14722d?.["rankList"]?.[0] || _0x14722d?.["roleList"]?.[0] || _0x14722d?.["targets"]?.[0] || _0x14722d?.["targetList"]?.[0] || _0x14722d?.["list"]?.[0];
      if (_0x535f75) {
        {
          if (_0x535f75.roleId) {
            return _0x535f75.roleId;
          }
          if (_0x535f75.id) {
            return _0x535f75.id;
          }
          if (_0x535f75.targetId) {
            return _0x535f75.targetId;
          }
        }
      }
      return _0x14722d?.["roleId"] || _0x14722d?.["id"] || _0x14722d?.["targetId"];
    }
  };
  const _0x3a90f1 = () => {
    {
      const _0x23b98e = _0x3b7778.roleInfo?.["role"]?.["items"] || _0x3b7778.roleInfo?.["items"] || {};
      return _0x23b98e["1007"]?.["quantity"] || _0x23b98e[1007]?.["quantity"] || 0;
    }
  };
  const _0x2daa1b = async () => {
    const _0x5b4b02 = document.getElementById("qa-arena-ticket");
    const _0x572982 = document.getElementById("qa-arena-fought");
    const _0xe8456a = document.getElementById("qa-arena-status");
    if (_0xe8456a) {
      _0xe8456a.textContent = "刷新中...";
    }
    try {
      const _0xb7e1eb = await _0xb1beb7("role_getroleinfo", {});
      const _0x413db2 = _0xb7e1eb?.["role"] || _0xb7e1eb;
      const _0x110651 = {
        role: _0x413db2
      };
      _0x3b7778.roleInfo = _0x110651;
      const _0x1486c5 = _0x3a90f1();
      if (_0x5b4b02) {
        _0x5b4b02.textContent = _0x1486c5;
      }
      const _0xeef0f8 = _0x413db2?.["dailyTask"] || {};
      const _0x5e78c7 = _0xeef0f8?.["complete"]?.[13];
      _0x572982 && (_0x5e78c7 === -1 ? (_0x572982.textContent = "未完成", _0x572982.style.color = "") : (_0x572982.textContent = "已完成", _0x572982.style.color = "#10b981"));
      if (_0xe8456a) {
        _0xe8456a.textContent = "数据已刷新";
      }
      _0x166508("竞技场数据刷新成功", "success");
    } catch (_0x31dfab) {
      if (_0xe8456a) {
        _0xe8456a.textContent = "刷新失败";
      }
      _0x166508("刷新失败: " + _0x31dfab.message, "error");
    }
  };
  const _0x5f254f = async () => {
    {
      const _0x49245f = document.getElementById("qa-arena-times");
      const _0x1f6625 = document.getElementById("qa-arena-start-btn");
      const _0x2ef935 = document.getElementById("qa-arena-stop-btn");
      const _0x4eeb37 = document.getElementById("qa-arena-status");
      const _0x367dcb = document.getElementById("qa-arena-ticket");
      const _0x53c700 = parseInt(_0x49245f?.["value"], 10) || 1;
      const _0x19f6c8 = _0x3a90f1();
      if (_0x19f6c8 < _0x53c700) {
        _0x166508("门票不足，需要" + _0x53c700 + "张，当前" + _0x19f6c8 + "张", "warning");
        return;
      }
      const _0x513cf2 = new Date().getHours();
      if (_0x513cf2 < 8 || _0x513cf2 > 22) {
        _0x166508("竞技场开放时间为8:00-22:00", "warning");
        return;
      }
      _0x1a7b57 = true;
      if (_0x1f6625) {
        _0x1f6625.style.display = "none";
      }
      if (_0x2ef935) {
        _0x2ef935.style.display = "inline-block";
      }
      if (_0x49245f) {
        _0x49245f.disabled = true;
      }
      _0x166508("开始竞技场战斗，共" + _0x53c700 + "次", "info");
      let _0x15aa48 = 0;
      let _0xf01536 = 0;
      try {
        await _0xc8c99c();
        if (!_0x3b7778.battleVersion) {
          _0x166508("无法获取战斗版本", "error");
          return;
        }
        await _0xb1beb7("arena_startarea", {});
        for (let _0x550ee1 = 0; _0x550ee1 < _0x53c700; _0x550ee1++) {
          if (!_0x1a7b57) {
            if (_0x4eeb37) {
              _0x4eeb37.textContent = "已停止 (完成" + _0x550ee1 + "/" + _0x53c700 + "，胜" + _0x15aa48 + "负" + _0xf01536 + ")";
            }
            break;
          }
          if (_0x4eeb37) {
            _0x4eeb37.textContent = "战斗中 (" + (_0x550ee1 + 1) + "/" + _0x53c700 + ")...";
          }
          try {
            const _0x112573 = await _0xb1beb7("arena_getareatarget", {});
            const _0x2e1768 = _0x178f55(_0x112573);
            if (!_0x2e1768) {
              if (_0x4eeb37) {
                _0x4eeb37.textContent = "未找到可挑战目标";
              }
              break;
            }
            const _0x561f79 = {
              targetId: _0x2e1768
            };
            const _0x28b437 = await _0xb1beb7("fight_startareaarena", _0x561f79);
            _0x3c5712("arena", "竞技场战斗", _0x28b437);
            if (_0x28b437?.["battleData"]?.["result"]) {
              {
                const _0x59024e = _0x28b437.battleData.result.sponsor;
                const _0x32fee4 = _0x28b437.battleData.result.accept;
                const _0x115d8b = _0x59024e?.["teamInfo"]?.["filter"](_0x3fcb25 => _0x3fcb25.hp > 0)["length"] || 0;
                const _0x2abce6 = _0x32fee4?.["teamInfo"]?.["filter"](_0x5bae4d => _0x5bae4d.hp > 0)["length"] || 0;
                if (_0x115d8b > _0x2abce6) {
                  _0x15aa48++;
                } else {
                  {
                    _0xf01536++;
                  }
                }
              }
            }
            const _0x4fff99 = _0x3a90f1() - (_0x550ee1 + 1);
            if (_0x367dcb) {
              _0x367dcb.textContent = Math.max(0, _0x4fff99);
            }
          } catch (_0x1eabb0) {
            {
              _0xf01536++;
            }
          }
          _0x550ee1 < _0x53c700 - 1 && _0x1a7b57 && (await new Promise(_0x360fbb => setTimeout(_0x360fbb, 350)));
        }
        await _0x2daa1b();
        if (_0x1a7b57) {
          if (_0x4eeb37) {
            _0x4eeb37.textContent = "战斗完成 (胜" + _0x15aa48 + "负" + _0xf01536 + ")";
          }
          _0x166508("竞技场战斗完成，胜" + _0x15aa48 + "负" + _0xf01536, "success");
        }
      } catch (_0x4fe7d7) {
        if (_0x4eeb37) {
          _0x4eeb37.textContent = "战斗出错: " + _0x4fe7d7.message;
        }
        _0x166508("战斗出错: " + _0x4fe7d7.message, "error");
      } finally {
        {
          _0x1a7b57 = false;
          if (_0x1f6625) {
            _0x1f6625.style.display = "inline-block";
          }
          if (_0x2ef935) {
            _0x2ef935.style.display = "none";
          }
          if (_0x49245f) {
            _0x49245f.disabled = false;
          }
        }
      }
    }
  };
  const _0x5384e7 = () => {
    _0x1a7b57 = false;
    _0x166508("已停止竞技场战斗", "info");
  };
  const _0x2f8ca2 = 320;
  const _0x49a42f = 240;
  const _0x4eb955 = () => {
    const _0x1ced87 = new Date();
    _0x1ced87.setHours(0, 0, 0, 0);
    return Math.floor(_0x1ced87.getTime() / 1000);
  };
  const _0x297159 = _0x3e014c => {
    {
      if (!_0x3e014c || typeof _0x3e014c !== "number") {
        return true;
      }
      return _0x3e014c < _0x4eb955();
    }
  };
  const _0x5992a7 = () => {
    {
      const _0x1ee943 = new Date();
      const _0x232a49 = new Date(_0x1ee943.getFullYear(), _0x1ee943.getMonth() + 1, 0).getDate();
      const _0x3ddab0 = _0x1ee943.getDate();
      const _0x3e321 = Math.max(0, _0x232a49 - _0x3ddab0);
      const _0x4772e1 = Math.min(1, Math.max(0, _0x3ddab0 / _0x232a49));
      const _0x262cc4 = {
        daysInMonth: _0x232a49,
        dayOfMonth: _0x3ddab0,
        remainingDays: _0x3e321,
        monthProgress: _0x4772e1
      };
      return _0x262cc4;
    }
  };
  const _0x1c150a = (_0x120498, _0x191a2b, _0x4048cd) => {
    {
      return _0x191a2b === 0 ? _0x120498 : Math.min(_0x120498, Math.ceil(_0x4048cd * _0x120498));
    }
  };
  const _0x43f0e6 = _0x16a4f2 => {
    {
      const _0x3f5de1 = _0x16a4f2?.["rankList"]?.[0] || _0x16a4f2?.["roleList"]?.[0] || _0x16a4f2?.["targets"]?.[0] || _0x16a4f2?.["targetList"]?.[0] || _0x16a4f2?.["list"]?.[0];
      if (_0x3f5de1?.["roleId"]) {
        return _0x3f5de1.roleId;
      }
      if (_0x3f5de1?.["id"]) {
        return _0x3f5de1.id;
      }
      return _0x16a4f2?.["roleId"] || _0x16a4f2?.["id"];
    }
  };
  const _0x44db56 = async () => {
    {
      try {
        const _0x547bdf = await _0xb1beb7("activity_get", {});
        const _0xad19ee = _0x547bdf?.["activity"] || _0x547bdf?.["body"]?.["activity"] || _0x547bdf;
        _0x3b7778.monthlyActivity = _0xad19ee || null;
        return _0xad19ee;
      } catch (_0x36f47a) {
        return null;
      }
    }
  };
  const _0x16a9ea = () => {
    const _0x2887be = _0x3b7778.monthlyActivity;
    const {
      remainingDays: _0x10c5fd,
      monthProgress: _0x5e7b63
    } = _0x5992a7();
    const _0x550d87 = document.getElementById("qa-monthly-days");
    _0x550d87 && (_0x550d87.textContent = _0x10c5fd > 0 ? "剩余 " + _0x10c5fd + " 天" : "本月最后一天");
    const _0x282c99 = _0x2887be?.["myMonthInfo"] || {};
    const _0x3c55d4 = _0x2887be?.["myArenaInfo"] || {};
    const _0x4d422e = Number(_0x282c99?.["2"]?.["num"] || 0);
    const _0x58202b = Number(_0x3c55d4?.["num"] || 0);
    const _0x1f5645 = Math.min(100, Math.round(_0x4d422e / _0x2f8ca2 * 100));
    const _0x55c985 = Math.min(100, Math.round(_0x58202b / _0x49a42f * 100));
    const _0x307d14 = _0x1c150a(_0x2f8ca2, _0x10c5fd, _0x5e7b63);
    const _0x64531b = _0x1c150a(_0x49a42f, _0x10c5fd, _0x5e7b63);
    const _0xbefd4 = document.getElementById("qa-monthly-fish");
    const _0x3809e0 = document.getElementById("qa-monthly-arena");
    _0xbefd4 && (_0xbefd4.innerHTML = "\n      <span class=\"stat-value\">" + _0x4d422e + " / " + _0x2f8ca2 + "</span>\n      <span class=\"stat-sub\">" + _0x1f5645 + "% (应达: " + _0x307d14 + ")</span>\n    ");
    _0x3809e0 && (_0x3809e0.innerHTML = "\n      <span class=\"stat-value\">" + _0x58202b + " / " + _0x49a42f + "</span>\n      <span class=\"stat-sub\">" + _0x55c985 + "% (应达: " + _0x64531b + ")</span>\n    ");
    const _0x8781c7 = document.getElementById("qa-monthly-status");
    if (_0x8781c7) {
      {
        if (_0x4d422e >= _0x307d14 && _0x58202b >= _0x64531b) {
          {
            _0x8781c7.textContent = "已达标";
            _0x8781c7.className = "club-status-badge success";
          }
        } else {
          _0x8781c7.textContent = "需补差";
          _0x8781c7.className = "club-status-badge warning";
        }
      }
    }
  };
  const _0x1eb16b = async () => {
    const _0xc97c03 = document.getElementById("qa-monthly-status");
    if (_0xc97c03) {
      _0xc97c03.textContent = "刷新中...";
    }
    const _0x2f3258 = await _0x44db56();
    _0x2f3258 && _0x16a9ea();
  };
  const _0x142605 = async (_0x2a24de = "topup") => {
    {
      const _0x407a5d = _0x3b7778.monthlyActivity;
      if (!_0x407a5d) {
        {
          return;
        }
      }
      const _0x3d3447 = _0x407a5d?.["myMonthInfo"] || {};
      let _0x4ac176 = Number(_0x3d3447?.["2"]?.["num"] || 0);
      const {
        remainingDays: _0x2e887f,
        monthProgress: _0x3370e5
      } = _0x5992a7();
      const _0x4f1a1c = _0x1c150a(_0x2f8ca2, _0x2e887f, _0x3370e5);
      const _0x28e6ab = _0x2a24de === "complete" ? _0x2f8ca2 : _0x4f1a1c;
      let _0x138b85 = Math.max(0, _0x28e6ab - _0x4ac176);
      if (_0x138b85 <= 0) {
        {
          return;
        }
      }
      _0x3b7778.monthlyFishRunning = true;
      _0xb23758();
      try {
        {
          let _0x3aeeee = _0x3b7778.roleInfo;
          if (!_0x3aeeee) {
            {
              _0x3aeeee = await _0x2c3e3a();
            }
          }
          const _0x3789e7 = Number(_0x3aeeee?.["statistics"]?.["artifact:normal:lottery:time"] || 0);
          if (_0x297159(_0x3789e7)) {
            for (let _0x59fb69 = 0; _0x59fb69 < 3; _0x59fb69++) {
              const _0x5cb5fc = document.getElementById("qa-monthly-status");
              if (_0x5cb5fc) {
                {
                  _0x5cb5fc.textContent = "免费钓鱼 " + (_0x59fb69 + 1) + "/3";
                }
              }
              try {
                const _0x4566db = {
                  lotteryNumber: 1,
                  newFree: true,
                  type: 1
                };
                await _0xb1beb7("artifact_lottery", _0x4566db);
                await _0x44db56();
                _0x16a9ea();
                await _0x1dce1d(500);
              } catch {
                break;
              }
            }
            const _0x2608a6 = _0x3b7778.monthlyActivity;
            _0x4ac176 = Number(_0x2608a6?.["myMonthInfo"]?.["2"]?.["num"] || 0);
            _0x138b85 = Math.max(0, _0x28e6ab - _0x4ac176);
          }
          if (_0x138b85 <= 0) {
            _0x16a9ea();
            return;
          }
          let _0x301d0f = _0x138b85;
          let _0x2afeb8 = 0;
          const _0x37442a = Math.ceil(_0x138b85 / 10);
          while (_0x301d0f > 0) {
            const _0x31636a = Math.min(10, _0x301d0f);
            _0x2afeb8++;
            try {
              const _0x63cd64 = {
                lotteryNumber: _0x31636a,
                newFree: true,
                type: 1
              };
              await _0xb1beb7("artifact_lottery", _0x63cd64);
            } catch (_0x25f991) {
              break;
            }
            _0x301d0f -= _0x31636a;
            await _0x44db56();
            _0x16a9ea();
            const _0x1d331f = document.getElementById("qa-monthly-status");
            _0x1d331f && (_0x1d331f.textContent = "钓鱼中 " + _0x2afeb8 + "/" + _0x37442a);
            _0x301d0f > 0 && (await _0x1dce1d(800));
          }
          await _0x44db56();
          _0x16a9ea();
          const _0x2093ec = _0x3b7778.monthlyActivity;
          const _0x46babb = Number(_0x2093ec?.["myMonthInfo"]?.["2"]?.["num"] || 0);
          !(_0x46babb >= _0x28e6ab);
        }
      } finally {
        _0x3b7778.monthlyFishRunning = false;
        _0xb23758();
      }
    }
  };
  const _0x37a3f5 = async (_0x3d0d12 = "topup") => {
    {
      const _0x4ac5e0 = _0x3b7778.monthlyActivity;
      if (!_0x4ac5e0) {
        return;
      }
      const _0x54b7e6 = _0x4ac5e0?.["myArenaInfo"] || {};
      let _0x1baf16 = Number(_0x54b7e6?.["num"] || 0);
      const {
        remainingDays: _0x1bd11f,
        monthProgress: _0x46e091
      } = _0x5992a7();
      const _0x2d813b = _0x1c150a(_0x49a42f, _0x1bd11f, _0x46e091);
      const _0x283d34 = _0x3d0d12 === "complete" ? _0x49a42f : _0x2d813b;
      let _0x53205d = Math.max(0, _0x283d34 - _0x1baf16);
      if (_0x53205d <= 0) {
        {
          return;
        }
      }
      _0x3b7778.monthlyArenaRunning = true;
      _0xb23758();
      try {
        {
          await _0xc8c99c();
          if (!_0x3b7778.battleVersion) {
            return;
          }
          try {
            await _0xb1beb7("arena_startarea", {});
          } catch {}
          const _0x437f3a = 100;
          let _0x24c7d1 = 0;
          let _0x4225bf = 0;
          const _0xf5ddba = Math.ceil(_0x53205d / 2);
          while (_0x53205d > 0 && _0x24c7d1 < _0x437f3a) {
            const _0x454b5d = document.getElementById("qa-monthly-status");
            if (_0x454b5d) {
              {
                _0x454b5d.textContent = "竞技场 " + (_0x4225bf + 1) + "/" + _0xf5ddba + " (进度:" + _0x1baf16 + "/" + _0x283d34 + ")";
              }
            }
            let _0xac1e2b;
            try {
              _0xac1e2b = await _0xb1beb7("arena_getareatarget", {});
            } catch (_0xa6e66a) {
              break;
            }
            const _0x280abd = _0x43f0e6(_0xac1e2b);
            if (!_0x280abd) {
              {
                break;
              }
            }
            try {
              const _0xe9420b = {
                targetId: _0x280abd
              };
              await _0xb1beb7("fight_startareaarena", _0xe9420b);
              _0x4225bf++;
            } catch (_0x1fe283) {}
            _0x24c7d1++;
            await _0x44db56();
            _0x16a9ea();
            const _0x2d0b8b = _0x3b7778.monthlyActivity;
            _0x1baf16 = Number(_0x2d0b8b?.["myArenaInfo"]?.["num"] || 0);
            _0x53205d = Math.max(0, _0x283d34 - _0x1baf16);
            _0x53205d > 0 && (await _0x1dce1d(1000));
          }
          await _0x44db56();
          _0x16a9ea();
          if (!(_0x1baf16 >= _0x283d34)) {
            !(_0x24c7d1 >= _0x437f3a);
          }
        }
      } finally {
        _0x3b7778.monthlyArenaRunning = false;
        _0xb23758();
      }
    }
  };
  const _0xb23758 = () => {
    const _0x54312b = document.getElementById("qa-monthly-fish-btn");
    const _0x5d5034 = document.getElementById("qa-monthly-fish-complete-btn");
    const _0x182698 = document.getElementById("qa-monthly-arena-btn");
    const _0x329654 = document.getElementById("qa-monthly-arena-complete-btn");
    const _0x1b07af = document.getElementById("qa-monthly-refresh-btn");
    const _0x31eda5 = _0x3b7778.monthlyFishRunning;
    const _0x545fc6 = _0x3b7778.monthlyArenaRunning;
    const _0x35a621 = _0x31eda5 || _0x545fc6;
    _0x54312b && (_0x54312b.disabled = _0x35a621, _0x54312b.textContent = _0x31eda5 ? "补齐中..." : "钓鱼补齐");
    _0x5d5034 && (_0x5d5034.disabled = _0x35a621);
    _0x182698 && (_0x182698.disabled = _0x35a621, _0x182698.textContent = _0x545fc6 ? "补齐中..." : "竞技场补齐");
    _0x329654 && (_0x329654.disabled = _0x35a621);
    _0x1b07af && (_0x1b07af.disabled = _0x35a621);
  };
  const _0x273e27 = () => {
    {
      _0x3b7778.monthlyActivity = null;
      _0x3b7778.monthlyFishRunning = false;
      _0x3b7778.monthlyArenaRunning = false;
      _0x3b7778.warguessRankData = null;
      _0x3b7778.warguessRunning = false;
    }
  };
  const _0x444534 = () => {
    {
      const _0x499ef9 = new Date();
      const _0x3fe4aa = _0x499ef9.getDay();
      if (_0x3fe4aa !== 0) {
        return false;
      }
      const _0x4db800 = new Date(_0x499ef9);
      _0x4db800.setDate(_0x499ef9.getDate() + 7);
      return _0x4db800.getMonth() !== _0x499ef9.getMonth();
    }
  };
  const _0x269306 = () => {
    const _0x46de9f = new Date();
    let _0x1dcffc = _0x46de9f.getFullYear();
    let _0x4a18ee = _0x46de9f.getMonth();
    const _0xfd18d4 = (_0x729308, _0x25047f) => {
      const _0x59a9e5 = new Date(_0x729308, _0x25047f + 1, 0);
      const _0x2fd0f5 = _0x59a9e5.getDay();
      const _0x204813 = new Date(_0x59a9e5);
      _0x204813.setDate(_0x59a9e5.getDate() - _0x2fd0f5);
      return _0x204813;
    };
    let _0x573687 = _0xfd18d4(_0x1dcffc, _0x4a18ee);
    _0x46de9f > _0x573687 && (_0x4a18ee++, _0x4a18ee > 11 && (_0x4a18ee = 0, _0x1dcffc++), _0x573687 = _0xfd18d4(_0x1dcffc, _0x4a18ee));
    return _0x573687.getMonth() + 1 + "月" + _0x573687.getDate() + "日 (星期日)";
  };
  const _0x30fb19 = () => {
    {
      const _0x13e629 = document.getElementById("qa-warguess-status");
      const _0x1f5d08 = document.getElementById("qa-warguess-inactive");
      const _0xfd411b = document.getElementById("qa-warguess-content");
      const _0x484cae = document.getElementById("qa-warguess-next-date");
      const _0x31954c = document.getElementById("qa-warguess-top-legion");
      const _0x28d111 = document.getElementById("qa-warguess-top-power");
      const _0x19abd7 = _0x444534();
      _0x13e629 && (_0x13e629.textContent = _0x19abd7 ? "开放中" : "未开放", _0x13e629.className = "club-status-badge " + (_0x19abd7 ? "success" : "warning"));
      if (_0x1f5d08) {
        _0x1f5d08.style.display = _0x19abd7 ? "none" : "block";
      }
      if (_0xfd411b) {
        _0xfd411b.style.display = _0x19abd7 ? "block" : "none";
      }
      if (_0x484cae && !_0x19abd7) {
        {
          _0x484cae.textContent = "下次开放：" + _0x269306();
        }
      }
      const _0x175129 = _0x3b7778.warguessRankData;
      if (_0x175129?.["list"]?.[0]) {
        const _0x718a67 = _0x175129.list[0];
        if (_0x31954c) {
          _0x31954c.textContent = _0x718a67.name || "--";
        }
        if (_0x28d111) {
          _0x28d111.textContent = _0x718a67.power ? _0x718a67.power.toLocaleString() : "--";
        }
      }
    }
  };
  const _0xf7aeb4 = async () => {
    {
      const _0x638679 = document.getElementById("qa-warguess-status");
      const _0x570c32 = document.getElementById("qa-warguess-refresh-btn");
      if (!_0x444534()) {
        return;
      }
      if (_0x570c32) {
        _0x570c32.disabled = true;
      }
      if (_0x638679) {
        _0x638679.textContent = "刷新中...";
      }
      try {
        const _0x528b68 = {
          bfId: ""
        };
        const _0x228f3c = await _0xb1beb7("warguess_getrank", _0x528b68);
        _0x3b7778.warguessRankData = _0x228f3c;
        if (!_0x228f3c?.["list"] || _0x228f3c.list.length === 0) {
          {
            return;
          }
        }
        _0x30fb19();
        const _0xb6932f = _0x228f3c.list[0];
      } catch (_0x12e13c) {} finally {
        {
          if (_0x570c32) {
            _0x570c32.disabled = false;
          }
          _0x30fb19();
        }
      }
    }
  };
  const _0x3de377 = async () => {
    const _0x9c74b5 = document.getElementById("qa-warguess-start-btn");
    const _0x1c395c = document.getElementById("qa-warguess-status");
    if (!_0x444534()) {
      return;
    }
    if (!_0x3b7778.warguessRankData?.["list"]?.[0]) {
      return;
    }
    const _0x47e9ca = _0x3b7778.warguessRankData.list[0];
    if (!_0x47e9ca?.["id"]) {
      return;
    }
    _0x3b7778.warguessRunning = true;
    if (_0x9c74b5) {
      _0x9c74b5.disabled = true;
    }
    if (_0x1c395c) {
      _0x1c395c.textContent = "竞猜中...";
    }
    try {
      {
        const _0x3c9cb9 = {
          legionId: _0x47e9ca.id,
          guessCoin: 20
        };
        await _0xb1beb7("warguess_startguess", _0x3c9cb9);
      }
    } catch (_0x642892) {} finally {
      _0x3b7778.warguessRunning = false;
      if (_0x9c74b5) {
        _0x9c74b5.disabled = false;
      }
      _0x30fb19();
    }
  };
  const _0x16b00c = async () => {
    const _0x314a44 = document.getElementById("qa-warguess-coin-btn");
    if (_0x314a44) {
      _0x314a44.disabled = true;
    }
    try {
      await _0xb1beb7("warguess_getguesscoinreward", {});
    } catch (_0x181643) {} finally {
      if (_0x314a44) {
        _0x314a44.disabled = false;
      }
    }
  };
  const _0x5a9119 = () => {
    _0x30fb19();
  };
  const _0x24a12d = [3, 6, 9, 12];
  const _0x52eac2 = 14;
  const _0x526e34 = {
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
  const _0x40bd39 = {
    "1023": 500,
    "1001": 250,
    "1022": 2
  };
  const _0x2ae7ed = [3012, 1016];
  const _0x395038 = () => {
    const _0x317779 = new Date().getDay();
    return _0x317779 === 0 || _0x317779 >= 3 && _0x317779 <= 6;
  };
  const _0x5712e0 = _0x384f2b => _0x24a12d.includes(_0x384f2b);
  const _0x26085d = _0xf7e09e => {
    {
      if (_0xf7e09e.type === 2) {
        return "金砖";
      }
      return _0x526e34[_0xf7e09e.itemId] || "物品" + _0xf7e09e.itemId;
    }
  };
  const _0x564211 = _0x3ab9aa => {
    {
      if (_0x3ab9aa.type === 2) {
        return true;
      }
      return _0x40bd39[_0x3ab9aa.itemId] > 0;
    }
  };
  const _0x209e1f = _0x59e441 => {
    if (_0x59e441 >= 100000000) {
      return (_0x59e441 / 100000000).toFixed(1) + "亿";
    }
    if (_0x59e441 >= 10000) {
      return (_0x59e441 / 10000).toFixed(1) + "万";
    }
    return _0x59e441.toString();
  };
  const _0x40a86b = _0x461048 => {
    {
      const _0x1bdd2e = _0x461048.map((_0x5963ca, _0x5b13b7) => ({
        idx: _0x5b13b7,
        reward: _0x5963ca,
        value: _0x5963ca.type === 2 ? _0x5963ca.value : (_0x40bd39[_0x5963ca.itemId] || 0) * _0x5963ca.value,
        isHigh: _0x5963ca.type === 2 || _0x40bd39[_0x5963ca.itemId] > 0,
        isSec: _0x2ae7ed.includes(_0x5963ca.itemId)
      }));
      const _0xdbba51 = _0x1bdd2e.filter(_0x25043b => _0x25043b.isHigh).sort((_0x2d5b52, _0x256127) => _0x256127.value - _0x2d5b52.value);
      const _0x4e09e = _0xdbba51.slice(0, 5);
      const _0x575bb4 = () => _0x4e09e.map(_0x16efd4 => _0x16efd4.idx);
      if (_0x4e09e.length < 5) {
        const _0x1fc36f = _0x1bdd2e.filter(_0x1b225c => _0x1b225c.isSec && !_0x575bb4().includes(_0x1b225c.idx));
        _0x4e09e.push(..._0x1fc36f.slice(0, 5 - _0x4e09e.length));
      }
      if (_0x4e09e.length < 5) {
        {
          const _0x4043a2 = _0x1bdd2e.filter(_0x5306a9 => !_0x575bb4().includes(_0x5306a9.idx));
          _0x4e09e.push(..._0x4043a2.slice(0, 5 - _0x4e09e.length));
        }
      }
      return _0x4e09e;
    }
  };
  const _0x4c374d = async () => {
    if (!_0x395038()) {
      _0x3b7778.bossTower = null;
      return null;
    }
    try {
      const _0x15fd59 = await _0xb1beb7("bosstower_getinfo", {});
      const _0x296157 = _0x15fd59?.["bossTower"] || _0x15fd59?.["body"]?.["bossTower"];
      const _0x2e512e = {
        drillCount: _0x296157?.["boxFightCnt"] ?? 0,
        towerId: _0x296157?.["towerId"] ?? 1,
        boxCurHp: _0x296157?.["boxCurHp"] ?? 0,
        boxTotalHp: _0x296157?.["boxTotalHp"] ?? 0,
        levelInfoMap: _0x296157?.["levelInfoMap"] ?? {}
      };
      _0x3b7778.bossTower = _0x2e512e;
      return _0x3b7778.bossTower;
    } catch (_0x3e2ca9) {
      {
        return null;
      }
    }
  };
  const _0x31aa97 = () => {
    const _0x384616 = _0x3b7778.bossTower;
    if (!_0x384616) {
      return [];
    }
    const _0x25a95e = _0x384616.towerId;
    if (!_0x5712e0(_0x25a95e)) {
      return [];
    }
    if (_0x384616.boxCurHp > 0) {
      return [];
    }
    const _0xdd642 = String(_0x25a95e);
    const _0x4623c4 = _0x384616.levelInfoMap?.[_0xdd642];
    return _0x4623c4?.["rewardList"] || [];
  };
  const _0x53786f = () => {
    const _0x302ade = _0x3b7778.bossTower || {};
    const _0x46c27e = _0x395038();
    const _0x40b096 = document.getElementById("qa-bosstower-status");
    if (_0x40b096) {
      if (!_0x46c27e) {
        _0x40b096.textContent = "非活动日";
        _0x40b096.className = "club-status-badge";
      } else {
        if (_0x302ade.towerId >= _0x52eac2 && _0x302ade.boxCurHp === 0) {
          _0x40b096.textContent = "已通关";
          _0x40b096.className = "club-status-badge success";
        } else {
          if (_0x31aa97().length > 0) {
            {
              _0x40b096.textContent = "待领奖";
              _0x40b096.className = "club-status-badge warning";
            }
          } else {
            if (_0x302ade.drillCount > 0) {
              {
                _0x40b096.textContent = "可攻打";
                _0x40b096.className = "club-status-badge success";
              }
            } else {
              {
                _0x40b096.textContent = "已完成";
                _0x40b096.className = "club-status-badge";
              }
            }
          }
        }
      }
    }
    const _0x78e288 = document.getElementById("qa-bosstower-floor");
    _0x78e288 && (_0x78e288.textContent = "第 " + (_0x302ade.towerId || 1) + " 层");
    const _0x11f9b0 = document.getElementById("qa-bosstower-drill");
    _0x11f9b0 && (_0x11f9b0.textContent = (_0x302ade.drillCount || 0) + " / 10");
    const _0xe4c35b = document.getElementById("qa-bosstower-door");
    if (_0xe4c35b) {
      const _0x3ef39c = _0x302ade.towerId || 1;
      const _0x55f007 = _0x3ef39c >= _0x52eac2 && _0x302ade.boxCurHp === 0;
      const _0x14d566 = _0x5712e0(_0x3ef39c);
      const _0x45bbc7 = _0x31aa97().length > 0;
      if (_0x55f007) {
        _0xe4c35b.textContent = "已通关";
      } else {
        if (!_0x14d566) {
          _0xe4c35b.textContent = "需先升层";
        } else {
          if (_0x302ade.boxCurHp > 0) {
            _0xe4c35b.textContent = "攻打中 (剩余: " + _0x209e1f(_0x302ade.boxCurHp) + ")";
          } else {
            if (_0x45bbc7) {
              _0xe4c35b.textContent = "待领奖";
            } else {
              {
                _0xe4c35b.textContent = "未开启";
              }
            }
          }
        }
      }
    }
    const _0x983309 = document.getElementById("qa-bosstower-rewards");
    if (_0x983309) {
      {
        const _0x2d7528 = _0x31aa97();
        if (_0x2d7528.length > 0) {
          {
            const _0x140722 = _0x40a86b(_0x2d7528).sort((_0x4ebeeb, _0x2d368d) => _0x2d368d.value - _0x4ebeeb.value);
            _0x983309.innerHTML = "\n        <div class=\"helper-text\" style=\"margin-bottom:6px;\">将领取的奖励 (" + _0x140722.length + "个)</div>\n        <div class=\"reward-list\">\n          " + _0x140722.map(_0x148994 => "\n            <span class=\"reward-item " + (_0x564211(_0x148994.reward) ? "valuable" : "") + "\">\n              " + _0x26085d(_0x148994.reward) + "x" + _0x148994.reward.value + "\n            </span>\n          ").join("") + "\n        </div>\n      ";
            _0x983309.style.display = "block";
          }
        } else {
          {
            _0x983309.style.display = "none";
          }
        }
      }
    }
    const _0x368138 = document.getElementById("qa-bosstower-action-btn");
    if (_0x368138) {
      {
        const _0x4db36d = _0x302ade.towerId || 1;
        const _0x50b245 = _0x4db36d >= _0x52eac2 && _0x302ade.boxCurHp === 0;
        const _0x120e72 = _0x31aa97().length > 0;
        const _0x43a532 = _0x5712e0(_0x4db36d);
        if (_0x3b7778.bossTowerRunning) {
          _0x368138.textContent = "执行中...";
          _0x368138.disabled = true;
        } else {
          if (_0x50b245) {
            _0x368138.textContent = "已通关";
            _0x368138.disabled = true;
          } else {
            if (_0x120e72) {
              _0x368138.textContent = "领取奖励";
              _0x368138.disabled = false;
            } else {
              if (!_0x43a532) {
                _0x368138.textContent = "攻打Boss";
                _0x368138.disabled = _0x302ade.drillCount <= 0 && _0x302ade.boxCurHp === 0;
              } else {
                if (_0x302ade.boxCurHp > 0) {
                  _0x368138.textContent = "继续攻打";
                  _0x368138.disabled = false;
                } else {
                  if (_0x302ade.drillCount > 0) {
                    _0x368138.textContent = "攻打门";
                    _0x368138.disabled = false;
                  } else {
                    {
                      _0x368138.textContent = "已完成";
                      _0x368138.disabled = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const _0xa2e25b = document.getElementById("qa-bosstower-content");
    const _0x1a58da = document.getElementById("qa-bosstower-inactive");
    _0xa2e25b && _0x1a58da && (_0x46c27e ? (_0xa2e25b.style.display = "block", _0x1a58da.style.display = "none") : (_0xa2e25b.style.display = "none", _0x1a58da.style.display = "block"));
  };
  const _0x5084f9 = async () => {
    if (!_0x395038()) {
      {
        _0x3b7778.bossTower = null;
        _0x53786f();
        return;
      }
    }
    const _0x43a9d3 = document.getElementById("qa-bosstower-status");
    if (_0x43a9d3) {
      _0x43a9d3.textContent = "刷新中...";
    }
    const _0x2bf7f7 = await _0x4c374d();
    _0x53786f();
    if (!_0x2bf7f7) {
      return;
    }
    _0x31aa97().length > 0;
  };
  const _0x40265e = async () => {
    const _0x5ab16a = _0x3b7778.bossTower;
    if (!_0x5ab16a) {
      return;
    }
    const _0x25ec48 = _0x5ab16a.towerId || 1;
    const _0x3293ef = _0x25ec48 >= _0x52eac2 && _0x5ab16a.boxCurHp === 0;
    if (_0x3293ef) {
      return;
    }
    const _0x5931c0 = _0x31aa97();
    if (_0x5931c0.length > 0) {
      {
        await _0x1713c9(_0x5931c0);
        return;
      }
    }
    if (_0x5ab16a.boxCurHp === 0 && _0x5ab16a.drillCount <= 0) {
      {
        return;
      }
    }
    _0x3b7778.bossTowerRunning = true;
    _0x53786f();
    try {
      {
        const _0x5d5250 = _0x17f978 => {
          for (const _0x29aea2 of _0x24a12d) {
            if (_0x29aea2 > _0x17f978) {
              return _0x29aea2;
            }
          }
          return _0x52eac2;
        };
        let _0x3aee2e = _0x5ab16a.towerId;
        let _0x89ebc7 = _0x5ab16a.boxCurHp;
        if (!_0x5712e0(_0x3aee2e)) {
          {
            const _0x40c4a5 = _0x5d5250(_0x3aee2e);
            while (_0x3aee2e < _0x40c4a5 && _0x3aee2e < _0x52eac2) {
              {
                const _0x495d39 = await _0xb1beb7("bosstower_startboss", {});
                const _0x561423 = _0x495d39?.["bossTower"] || _0x495d39?.["body"]?.["bossTower"];
                const _0x38089c = _0x561423?.["towerId"] ?? _0x3aee2e;
                _0x3aee2e = _0x38089c;
                _0x89ebc7 = _0x561423?.["boxCurHp"] ?? 0;
                _0x3b7778.bossTower.towerId = _0x38089c;
                _0x3b7778.bossTower.boxCurHp = _0x89ebc7;
                _0x3b7778.bossTower.drillCount = _0x561423?.["boxFightCnt"] ?? _0x3b7778.bossTower.drillCount;
                _0x3b7778.bossTower.levelInfoMap = _0x561423?.["levelInfoMap"] ?? _0x3b7778.bossTower.levelInfoMap;
                _0x53786f();
                await _0x1dce1d(1500);
                _0x3aee2e < _0x40c4a5;
              }
            }
            if (!_0x24a12d.includes(_0x3aee2e)) {
              if (_0x3aee2e >= _0x52eac2) {
                await _0x4c374d();
                _0x53786f();
                return;
              }
            }
          }
        }
        if (_0x5712e0(_0x3aee2e)) {
          let _0x4913ab = _0x89ebc7 > 0 ? _0x89ebc7 : 1;
          let _0x455382 = [];
          let _0x36741c = 0;
          const _0x4ed586 = String(_0x3aee2e);
          while (_0x4913ab > 0 && _0x36741c < 20) {
            {
              const _0xdb0e59 = await _0xb1beb7("bosstower_startbox", {});
              _0x36741c++;
              const _0x1bf0f4 = _0xdb0e59?.["bossTower"] || _0xdb0e59?.["body"]?.["bossTower"];
              _0x4913ab = _0x1bf0f4?.["boxCurHp"] ?? 0;
              _0x3b7778.bossTower.boxCurHp = _0x4913ab;
              _0x3b7778.bossTower.drillCount = _0x1bf0f4?.["boxFightCnt"] ?? _0x3b7778.bossTower.drillCount;
              _0x3b7778.bossTower.levelInfoMap = _0x1bf0f4?.["levelInfoMap"] ?? _0x3b7778.bossTower.levelInfoMap;
              if (_0x4913ab === 0 && _0x1bf0f4?.["levelInfoMap"]?.[_0x4ed586]?.["rewardList"]) {
                {
                  _0x455382 = _0x1bf0f4.levelInfoMap[_0x4ed586].rewardList;
                }
              }
              _0x53786f();
              await _0x1dce1d(1500);
            }
          }
          if (_0x455382.length === 0) {
            await _0x4c374d();
            _0x53786f();
            return;
          }
          await _0x1713c9(_0x455382);
        }
        await _0x4c374d();
        _0x53786f();
      }
    } catch (_0x2a3f54) {} finally {
      {
        _0x3b7778.bossTowerRunning = false;
        _0x53786f();
      }
    }
  };
  const _0x1713c9 = async _0x21cd32 => {
    {
      const _0x101d6c = _0x40a86b(_0x21cd32);
      _0x101d6c.map(_0x11e004 => _0x26085d(_0x11e004.reward) + "x" + _0x11e004.reward.value);
      const _0xa16104 = [];
      for (const _0x20760e of _0x101d6c) {
        try {
          {
            const _0x51f23f = {
              idx: _0x20760e.idx
            };
            await _0xb1beb7("bosstower_claimreward", _0x51f23f);
            _0xa16104.push(_0x26085d(_0x20760e.reward) + "x" + _0x20760e.reward.value);
            await _0x1dce1d(500);
          }
        } catch (_0x19f7a9) {}
      }
      await _0x4c374d();
      _0x53786f();
    }
  };
  const _0x706a3a = () => {
    _0x3b7778.bossTower = null;
    _0x3b7778.bossTowerRunning = false;
  };
  const _0x395612 = {
    "1": "BOSS 1",
    "2": "BOSS 2",
    "3": "BOSS 3",
    "4": "BOSS 4",
    "5": "BOSS 5",
    "6": "BOSS 6"
  };
  const _0x578758 = () => {
    const _0x53d721 = new Date().getDay();
    const _0x55ce1f = {
      "5": [1],
      "6": [2],
      "0": [3],
      "1": [4],
      "2": [5],
      "3": [6],
      "4": [1, 2, 3, 4, 5, 6]
    };
    return _0x55ce1f[_0x53d721] || [];
  };
  const _0x565d97 = () => {
    const _0x3ac765 = new Date().getHours();
    return _0x3ac765 >= 8 && _0x3ac765 < 20;
  };
  const _0x26c7b8 = _0x3d478e => {
    if (!_0x3d478e) {
      return "0";
    }
    if (_0x3d478e >= 1000000000000) {
      return (_0x3d478e / 1000000000000).toFixed(2) + "万亿";
    }
    if (_0x3d478e >= 100000000) {
      return (_0x3d478e / 100000000).toFixed(2) + "亿";
    }
    if (_0x3d478e >= 10000) {
      return (_0x3d478e / 10000).toFixed(2) + "万";
    }
    return _0x3d478e.toString();
  };
  let _0x3dff2c = null;
  let _0x6b8081 = null;
  let _0x2b3a95 = false;
  let _0x1750b7 = 0;
  const _0x239cc7 = 10;
  const _0x116ab8 = () => {
    const _0x3012bc = document.getElementById("qa-skin-towers-status");
    const _0x3543b3 = document.getElementById("qa-skin-towers-count");
    const _0x5cabf2 = document.getElementById("qa-skin-towers-boss-hint");
    const _0x17c7fc = document.getElementById("qa-skin-towers-grid");
    if (_0x3012bc) {
      {
        if (!_0x565d97()) {
          _0x3012bc.textContent = "非活动时间(8-20点)";
          _0x3012bc.className = "club-status-badge warning";
        } else {
          if (_0x6b8081) {
            _0x3012bc.textContent = "挑战BOSS" + _0x6b8081 + "中";
            _0x3012bc.className = "club-status-badge active";
          } else {
            _0x3dff2c ? (_0x3012bc.textContent = "第" + (_0x3dff2c.season || 1) + "赛季", _0x3012bc.className = "club-status-badge") : (_0x3012bc.textContent = "未加载", _0x3012bc.className = "club-status-badge");
          }
        }
      }
    }
    _0x3543b3 && (_0x3543b3.textContent = _0x1750b7 + " / " + _0x239cc7, _0x3543b3.style.color = _0x1750b7 >= _0x239cc7 ? "#ef4444" : "");
    if (_0x5cabf2) {
      const _0xaf80e4 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      const _0xaf6999 = new Date().getDay();
      const _0x495574 = _0x578758();
      _0x5cabf2.textContent = _0x495574.length === 6 ? _0xaf80e4[_0xaf6999] + " - 全部BOSS" : _0xaf80e4[_0xaf6999] + " - BOSS " + _0x495574.join(", ");
    }
    if (_0x17c7fc && _0x3dff2c?.["towerData"]) {
      const _0x15a3d3 = _0x578758();
      let _0x92aedf = "";
      for (let _0x44ec1c = 1; _0x44ec1c <= 6; _0x44ec1c++) {
        {
          const _0x3cc611 = _0x3dff2c.towerData[_0x44ec1c] || {};
          const _0x4ca7d0 = _0x15a3d3.includes(_0x44ec1c);
          const _0x443c69 = _0x3cc611.pass;
          const _0x18d290 = _0x6b8081 === _0x44ec1c;
          const _0x28fcc4 = _0x4ca7d0 && !_0x443c69 && !_0x6b8081 && _0x1750b7 < _0x239cc7 && _0x565d97();
          _0x92aedf += "\n        <div class=\"skin-tower-item " + (_0x443c69 ? "passed" : "") + " " + (_0x18d290 ? "fighting" : "") + " " + (!_0x4ca7d0 ? "disabled" : "") + "\">\n          <div class=\"tower-name\">" + _0x395612[_0x44ec1c] + "</div>\n          <div class=\"tower-level\">第 " + (_0x3cc611.actTowerLv || 1) + " 层</div>\n          <div class=\"tower-score\">" + _0x26c7b8(_0x3cc611.towerScore) + "</div>\n          <div class=\"tower-status\">\n            " + (_0x443c69 ? "<span style=\"color:#22c55e\">已通关</span>" : _0x18d290 ? "<span style=\"color:#eab308\">挑战中</span>" : !_0x4ca7d0 ? "<span style=\"color:#9ca3af\">未开放</span>" : "<span style=\"color:#6b7280\">进行中</span>") + "\n          </div>\n          <button class=\"btn btn-sm " + (_0x18d290 ? "btn-danger" : "btn-primary") + "\"\n                  data-action=\"" + (_0x18d290 ? "skin-towers-stop" : "skin-towers-challenge") + "\"\n                  data-boss=\"" + _0x44ec1c + "\"\n                  " + (!_0x28fcc4 && !_0x18d290 ? "disabled" : "") + ">\n            " + (_0x18d290 ? "停止" : "挑战") + "\n          </button>\n        </div>";
        }
      }
      _0x17c7fc.innerHTML = _0x92aedf;
    }
  };
  const _0xfe60a = async () => {
    {
      if (!_0x565d97()) {
        {
          _0x116ab8();
          return null;
        }
      }
      try {
        {
          const _0x157f5b = await _0xb1beb7("towers_getinfo", {});
          _0x3dff2c = _0x157f5b?.["towerData"] || _0x157f5b;
          _0x3dff2c?.["todayUseTickCnt"] !== undefined && (_0x1750b7 = _0x3dff2c.todayUseTickCnt);
          _0x116ab8();
          return _0x3dff2c;
        }
      } catch (_0x4e22e6) {
        {
          return null;
        }
      }
    }
  };
  const _0xba61cf = () => {
    _0x2b3a95 = true;
  };
  const _0x475ea6 = _0x29d2e4 => {
    const _0x1a50ee = {
      isVictory: false
    };
    if (!_0x29d2e4?.["result"]) {
      return _0x1a50ee;
    }
    const _0xec4c89 = _0x29d2e4.result.isWin;
    const _0x4ab935 = _0x29d2e4.result.sponsor?.["ext"]?.["curHP"] ?? 0;
    return {
      isVictory: _0xec4c89 !== undefined ? _0xec4c89 : _0x4ab935 > 0,
      myHp: _0x4ab935
    };
  };
  const _0x4b567c = async _0x35be2a => {
    {
      !_0x565d97();
      !_0x578758().includes(_0x35be2a);
      _0x6b8081 = _0x35be2a;
      _0x2b3a95 = false;
      _0x116ab8();
      let _0xeab1ec = 0;
      let _0x1ea30c = 0;
      const _0x2004cd = 100;
      try {
        for (let _0x3db30c = 0; _0x3db30c < _0x2004cd; _0x3db30c++) {
          if (_0x2b3a95) {
            break;
          }
          let _0x11da73;
          try {
            _0x11da73 = await _0xb1beb7("towers_getinfo", {});
          } catch (_0x10cdbf) {}
          const _0x12d2e2 = _0x11da73?.["towerData"]?.["towerData"]?.[_0x35be2a];
          _0x11da73?.["towerData"]?.["todayUseTickCnt"] !== undefined && (_0x1750b7 = _0x11da73.towerData.todayUseTickCnt);
          if (_0x11da73?.["towerData"]) {
            _0x3dff2c = _0x11da73.towerData;
          }
          if (_0x1750b7 >= _0x239cc7) {
            {
              break;
            }
          }
          if (_0x12d2e2?.["pass"]) {
            break;
          }
          const _0x5fe2a7 = _0x12d2e2?.["fighting"] === true;
          const _0x5cc0aa = _0x12d2e2?.["actTowerLv"] || 1;
          if (!_0x5fe2a7) {
            {
              try {
                const _0x239f08 = {
                  towerType: _0x35be2a
                };
                const _0x47be5e = await _0xb1beb7("towers_start", _0x239f08);
                if (_0x47be5e?.["towerData"]?.["todayUseTickCnt"] !== undefined) {
                  {
                    _0x1750b7 = _0x47be5e.towerData.todayUseTickCnt;
                  }
                }
                if (_0x47be5e?.["towerData"]?.["towerData"]?.[_0x35be2a]?.["pass"]) {
                  {
                    break;
                  }
                }
              } catch (_0x2e52e4) {
                {
                  await _0x1dce1d(2000);
                  continue;
                }
              }
            }
          }
          let _0x4b2967;
          try {
            {
              const _0x2bd714 = {
                towerType: _0x35be2a
              };
              _0x4b2967 = await _0xb1beb7("towers_fight", _0x2bd714);
            }
          } catch (_0xf122ce) {
            await _0x1dce1d(2000);
            continue;
          }
          _0x1750b7++;
          const {
            isVictory: _0x270790,
            myHp: _0x30594f
          } = _0x475ea6(_0x4b2967?.["battleData"]);
          if (_0x270790) {
            {
              _0xeab1ec++;
              _0x1ea30c = 0;
              if (_0x4b2967?.["towerData"]?.["pass"]) {
                {
                  break;
                }
              }
              await _0x1dce1d(1500);
            }
          } else {
            _0x1ea30c++;
            if (_0x1ea30c >= 3) {
              break;
            }
            await _0x1dce1d(2000);
          }
          _0x116ab8();
        }
      } catch (_0x58e510) {} finally {
        {
          _0x6b8081 = null;
          _0x2b3a95 = false;
          await _0xfe60a();
        }
      }
    }
  };
  let _0x5312ba = null;
  const _0x4749a0 = (_0x3ef566, _0xbf720d) => {
    const _0x1dcbc2 = _0x3ef566.replace(/^v/, "").split(".").map(Number);
    const _0x4428be = _0xbf720d.replace(/^v/, "").split(".").map(Number);
    for (let _0x46ddab = 0; _0x46ddab < Math.max(_0x1dcbc2.length, _0x4428be.length); _0x46ddab++) {
      const _0x3d359a = _0x1dcbc2[_0x46ddab] || 0;
      const _0x53800f = _0x4428be[_0x46ddab] || 0;
      if (_0x3d359a > _0x53800f) {
        return 1;
      }
      if (_0x3d359a < _0x53800f) {
        return -1;
      }
    }
    return 0;
  };
  const _0x3f4e9d = _0x5b5fbb => {
    const _0x272948 = _0x5b5fbb.match(/@version\s+(\S+)/);
    return _0x272948 ? _0x272948[1] : null;
  };
  const _0x16f3b1 = async () => {
    const _0x10611c = document.getElementById("qa-update-status");
    const _0x43a7b9 = document.getElementById("qa-latest-version");
    const _0x2e11b5 = document.getElementById("qa-do-update-btn");
    const _0x350a6c = document.getElementById("qa-check-update-btn");
    if (_0x10611c) {
      _0x10611c.textContent = "正在检查更新...";
    }
    if (_0x350a6c) {
      _0x350a6c.disabled = true;
    }
    try {
      const _0x82d731 = _0x1892e0 + "/xyzw-monkey.meta.js?t=" + Date.now();
      const _0x5e894e = await new Promise((_0x5723a2, _0x4eaadf) => {
        typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest({
          method: "GET",
          url: _0x82d731,
          onload: _0x2b08ad => _0x5723a2(_0x2b08ad.responseText),
          onerror: _0x40f73d => _0x4eaadf(_0x40f73d)
        }) : fetch(_0x82d731).then(_0x3a07ba => _0x3a07ba.text()).then(_0x5723a2).catch(_0x4eaadf);
      });
      _0x5312ba = _0x3f4e9d(_0x5e894e);
      if (!_0x5312ba) {
        if (_0x10611c) {
          _0x10611c.textContent = "无法获取版本信息";
        }
        return;
      }
      if (_0x43a7b9) {
        _0x43a7b9.textContent = "v" + _0x5312ba;
      }
      const _0x154338 = _0x4749a0(_0x5312ba, _0x45f1ef);
      if (_0x154338 > 0) {
        if (_0x10611c) {
          {
            _0x10611c.innerHTML = "<span style=\"color:#34c759;\">发现新版本！</span> v" + _0x45f1ef + " → v" + _0x5312ba;
          }
        }
        if (_0x2e11b5) {
          _0x2e11b5.style.display = "";
        }
      } else {
        if (_0x154338 === 0) {
          {
            if (_0x10611c) {
              _0x10611c.textContent = "当前已是最新版本";
            }
            if (_0x2e11b5) {
              _0x2e11b5.style.display = "none";
            }
          }
        } else {
          if (_0x10611c) {
            _0x10611c.textContent = "当前版本较新（开发版本）";
          }
          if (_0x2e11b5) {
            _0x2e11b5.style.display = "none";
          }
        }
      }
    } catch (_0x305008) {
      {
        if (_0x10611c) {
          _0x10611c.textContent = "检查更新失败: " + (_0x305008.message || "网络错误");
        }
      }
    } finally {
      if (_0x350a6c) {
        _0x350a6c.disabled = false;
      }
    }
  };
  const _0x1fd5fb = () => {
    const _0x4b43bb = _0x1892e0 + "/xyzw-monkey.user.js";
    window.open(_0x4b43bb, "_blank");
  };
  const _0x610cd5 = async _0x1c5dfa => {
    const _0x2365fb = _0x1c5dfa.getAttribute("data-action");
    if (!_0x2365fb) {
      return;
    }
    if (_0x2365fb === "log-clear") {
      const _0x329416 = document.getElementById("qa-log-" + _0x1c5dfa.getAttribute("data-log-target"));
      if (_0x329416) {
        _0x329416.textContent = "";
      }
      return;
    }
    if (_0x2365fb === "result-clear") {
      _0x4d3d90(_0x1c5dfa.getAttribute("data-result-target"));
      return;
    }
    if (_0x2365fb === "auto-target-add") {
      const _0x3c7b0a = document.getElementById("qa-target-list");
      if (!_0x3c7b0a) {
        return;
      }
      const _0x599ae4 = _0x3c7b0a.querySelector(".qa-target-row");
      if (!_0x599ae4) {
        return;
      }
      const _0x4e0a54 = _0x599ae4.cloneNode(true);
      const _0x41f261 = _0x4e0a54.querySelector(".qa-target-attr");
      const _0x5cd5f8 = _0x4e0a54.querySelector(".qa-target-value");
      if (_0x41f261) {
        _0x41f261.value = "1";
      }
      if (_0x5cd5f8) {
        _0x5cd5f8.value = "";
      }
      const _0x333f4f = _0x4e0a54.querySelector("button[data-action=\"auto-target-remove\"]");
      if (_0x333f4f) {
        _0x333f4f.disabled = false;
      }
      _0x3c7b0a.appendChild(_0x4e0a54);
      const _0x1456bf = Array.from(_0x3c7b0a.querySelectorAll(".qa-target-row"));
      const _0x306960 = _0x1456bf.length <= 1;
      for (const _0x4e3bc3 of _0x1456bf) {
        const _0x38e247 = _0x4e3bc3.querySelector("button[data-action=\"auto-target-remove\"]");
        if (_0x38e247) {
          _0x38e247.disabled = _0x306960;
        }
      }
      return;
    }
    if (_0x2365fb === "auto-target-remove") {
      {
        const _0x41a4c3 = document.getElementById("qa-target-list");
        if (!_0x41a4c3) {
          return;
        }
        const _0x306b9d = _0x1c5dfa.closest(".qa-target-row");
        if (_0x306b9d) {
          _0x306b9d.remove();
        }
        const _0x354eac = Array.from(_0x41a4c3.querySelectorAll(".qa-target-row"));
        if (_0x354eac.length === 0) {
          return;
        }
        const _0x1e5b05 = _0x354eac.length <= 1;
        for (const _0x5b34f0 of _0x354eac) {
          const _0xede6a9 = _0x5b34f0.querySelector("button[data-action=\"auto-target-remove\"]");
          if (_0xede6a9) {
            _0xede6a9.disabled = _0x1e5b05;
          }
        }
        return;
      }
    }
    if (_0x3b7778.actionLocks[_0x2365fb]) {
      return;
    }
    _0x3b7778.actionLocks[_0x2365fb] = true;
    const _0x246667 = _0x1c5dfa.textContent;
    _0x1c5dfa.disabled = true;
    try {
      {
        switch (_0x2365fb) {
          case "study-start":
            await _0x2f15b2();
            break;
          case "team-refresh":
            await _0x17aa74();
            break;
          case "daily-refresh":
            {
              {
                const _0x3d49cf = await _0x2c3e3a();
                _0x756056(_0x3d49cf);
                break;
              }
            }
          case "daily-run":
            {
              break;
            }
          case "daily-fix":
            {
              const _0x5e98e6 = _0x4da15b();
              if (!_0x5e98e6.length) {
                break;
              }
              try {
                {
                  _0x5b8e76("准备中...");
                  const _0x3c97db = await _0x2c3e3a();
                  const _0xdefcbe = _0x3c97db?.["dailyTask"] || _0x3c97db?.["daily"] || {};
                  const _0x49ce8e = _0xdefcbe.complete || {};
                  const _0x9ce09 = _0x260ef6 => _0x49ce8e[String(_0x260ef6)] === -1 || _0x49ce8e[String(_0x260ef6)] === true;
                  const _0x1f8740 = [];
                  if (_0x5e98e6.includes("share") && !_0x9ce09(2)) {
                    {
                      const _0x3dea0c = {
                        isSkipShareCard: true,
                        type: 2
                      };
                      const _0x125533 = {
                        cmd: "system_mysharecallback",
                        params: _0x3dea0c,
                        name: "分享游戏"
                      };
                      _0x1f8740.push(_0x125533);
                    }
                  }
                  if (_0x5e98e6.includes("friend") && !_0x9ce09(3)) {
                    {
                      const _0xd4e143 = {
                        cmd: "friend_batch",
                        params: {},
                        name: "赠送好友金币"
                      };
                      _0x1f8740.push(_0xd4e143);
                    }
                  }
                  if (_0x5e98e6.includes("recruit") && !_0x9ce09(4)) {
                    const _0x272b13 = {
                      recruitType: 3,
                      recruitNumber: 1
                    };
                    const _0x23a2e0 = {
                      cmd: "hero_recruit",
                      params: _0x272b13,
                      name: "免费招募"
                    };
                    _0x1f8740.push(_0x23a2e0);
                    const _0x1e60d3 = {
                      recruitType: 1,
                      recruitNumber: 1
                    };
                    const _0xb8bc24 = {
                      cmd: "hero_recruit",
                      params: _0x1e60d3,
                      name: "付费招募"
                    };
                    _0x1f8740.push(_0xb8bc24);
                  }
                  if (_0x5e98e6.includes("hangup") && !_0x9ce09(5)) {
                    {
                      const _0x25ea01 = {
                        isSkipShareCard: true,
                        type: 2
                      };
                      for (let _0x36626d = 0; _0x36626d < 4; _0x36626d++) {
                        _0x1f8740.push({
                          cmd: "system_mysharecallback",
                          params: _0x25ea01,
                          name: "挂机加钟" + (_0x36626d + 1) + "/5"
                        });
                      }
                      const _0xe18bc6 = {
                        cmd: "system_claimhangupreward",
                        params: {},
                        name: "领取挂机奖励"
                      };
                      _0x1f8740.push(_0xe18bc6);
                      const _0x37be41 = {
                        isSkipShareCard: true,
                        type: 2
                      };
                      const _0x38cfd7 = {
                        cmd: "system_mysharecallback",
                        params: _0x37be41,
                        name: "挂机加钟5/5"
                      };
                      _0x1f8740.push(_0x38cfd7);
                    }
                  }
                  if (_0x5e98e6.includes("buygold") && !_0x9ce09(6)) {
                    const _0x3024cc = {
                      buyNum: 1
                    };
                    for (let _0x41003c = 0; _0x41003c < 3; _0x41003c++) {
                      _0x1f8740.push({
                        cmd: "system_buygold",
                        params: _0x3024cc,
                        name: "免费点金" + (_0x41003c + 1) + "/3"
                      });
                    }
                  }
                  if (_0x5e98e6.includes("openbox") && !_0x9ce09(7)) {
                    const _0x234660 = {
                      itemId: 2001,
                      number: 10
                    };
                    const _0x48f8cf = {
                      cmd: "item_openbox",
                      params: _0x234660,
                      name: "开启木质宝箱10个"
                    };
                    _0x1f8740.push(_0x48f8cf);
                  }
                  if (_0x5e98e6.includes("blackmarket") && !_0x9ce09(12)) {
                    const _0x3b9495 = {
                      cmd: "store_purchase",
                      params: {},
                      name: "黑市一键采购",
                      isBlackmarket: true
                    };
                    _0x1f8740.push(_0x3b9495);
                  }
                  if (_0x5e98e6.includes("arena") && !_0x9ce09(13)) {
                    const _0x144f65 = new Date().getHours();
                    if (_0x144f65 >= 8 && _0x144f65 <= 22) {
                      const _0x54a76e = {
                        cmd: "arena_startarea",
                        params: {},
                        name: "开始竞技场"
                      };
                      _0x1f8740.push(_0x54a76e);
                      for (let _0x314dfc = 1; _0x314dfc <= 3; _0x314dfc++) {
                        {
                          const _0xacc6c9 = {
                            cmd: "arena_getareatarget",
                            params: {},
                            name: "获取竞技场目标" + _0x314dfc,
                            isArenaTarget: true
                          };
                          _0x1f8740.push(_0xacc6c9);
                        }
                      }
                    }
                  }
                  if (_0x5e98e6.includes("legionboss")) {
                    const _0x164a94 = document.getElementById("qa-legionboss-count");
                    const _0x4e734f = parseInt(_0x164a94?.["value"], 10) || 2;
                    if (_0x4e734f > 0) {
                      for (let _0x287b31 = 1; _0x287b31 <= _0x4e734f; _0x287b31++) {
                        {
                          const _0x42062d = {
                            cmd: "fight_startlegionboss",
                            params: {},
                            name: "俱乐部BOSS" + _0x287b31 + "/" + _0x4e734f,
                            isBossBattle: true
                          };
                          _0x1f8740.push(_0x42062d);
                        }
                      }
                    }
                  }
                  if (_0x5e98e6.includes("dailyboss")) {
                    const _0x3de883 = [9904, 9905, 9901, 9902, 9903, 9904, 9905];
                    const _0x521d74 = new Date().getDay();
                    const _0x22007a = _0x3de883[_0x521d74];
                    for (let _0x2780e3 = 1; _0x2780e3 <= 3; _0x2780e3++) {
                      const _0x4390b3 = {
                        bossId: _0x22007a
                      };
                      const _0x28aee3 = {
                        cmd: "fight_startboss",
                        params: _0x4390b3,
                        name: "每日BOSS" + _0x2780e3 + "/3",
                        isBossBattle: true
                      };
                      _0x1f8740.push(_0x28aee3);
                    }
                  }
                  if (_0x5e98e6.includes("bottle")) {
                    const _0x238731 = {
                      cmd: "bottlehelper_stop",
                      params: {},
                      name: "停止盐罐计时"
                    };
                    _0x1f8740.push(_0x238731);
                    const _0x2b8558 = {
                      cmd: "bottlehelper_start",
                      params: {},
                      name: "开始盐罐计时"
                    };
                    _0x1f8740.push(_0x2b8558);
                    if (!_0x9ce09(14)) {
                      _0x1f8740.push({
                        cmd: "bottlehelper_claim",
                        params: {},
                        name: "领取盐罐奖励"
                      });
                    }
                  }
                  if (_0x5e98e6.includes("treasure")) {
                    const _0x93d4b5 = {
                      cmd: "collection_goodslist",
                      params: {},
                      name: "获取珍宝阁列表"
                    };
                    _0x1f8740.push(_0x93d4b5);
                    const _0x4cfcab = {
                      cmd: "collection_claimfreereward",
                      params: {},
                      name: "领取珍宝阁免费礼包"
                    };
                    _0x1f8740.push(_0x4cfcab);
                  }
                  if (_0x5e98e6.includes("signin")) {
                    const _0x3222a5 = {
                      cmd: "system_signinreward",
                      params: {},
                      name: "福利签到"
                    };
                    _0x1f8740.push(_0x3222a5);
                    const _0x1d0d3f = {
                      cmd: "legion_signin",
                      params: {},
                      name: "俱乐部签到"
                    };
                    _0x1f8740.push(_0x1d0d3f);
                    const _0x3484ed = {
                      discountId: 1
                    };
                    const _0x3d2cea = {
                      cmd: "discount_claimreward",
                      params: _0x3484ed,
                      name: "领取每日礼包"
                    };
                    _0x1f8740.push(_0x3d2cea);
                    const _0x4f3f9c = {
                      cardId: 1
                    };
                    const _0x1612b9 = {
                      cmd: "card_claimreward",
                      params: _0x4f3f9c,
                      name: "领取免费礼包"
                    };
                    _0x1f8740.push(_0x1612b9);
                    const _0xd6a4fb = {
                      cardId: 4003
                    };
                    const _0x39ce04 = {
                      cmd: "card_claimreward",
                      params: _0xd6a4fb,
                      name: "领取永久卡礼包"
                    };
                    _0x1f8740.push(_0x39ce04);
                  }
                  if (_0x5e98e6.includes("fish")) {
                    {
                      const _0x28a2d9 = {
                        lotteryNumber: 1,
                        newFree: true,
                        type: 1
                      };
                      for (let _0x4f9fa1 = 0; _0x4f9fa1 < 3; _0x4f9fa1++) {
                        _0x1f8740.push({
                          cmd: "artifact_lottery",
                          params: _0x28a2d9,
                          name: "免费钓鱼" + (_0x4f9fa1 + 1) + "/3"
                        });
                      }
                    }
                  }
                  if (_0x5e98e6.includes("mail")) {
                    {
                      const _0x2836d2 = {
                        cmd: "mail_claimallattachment",
                        params: {},
                        name: "领取邮件奖励"
                      };
                      _0x1f8740.push(_0x2836d2);
                    }
                  }
                  if (_0x5e98e6.includes("sweepticket")) {
                    for (let _0x3e1327 = 0; _0x3e1327 < 3; _0x3e1327++) {
                      _0x1f8740.push({
                        cmd: "genie_buysweep",
                        params: {},
                        name: "领取免费扫荡券" + (_0x3e1327 + 1) + "/3"
                      });
                    }
                  }
                  if (_0x5e98e6.includes("genie")) {
                    for (let _0x4e0c6a = 1; _0x4e0c6a <= 4; _0x4e0c6a++) {
                      const _0xc91586 = ["魏国", "蜀国", "吴国", "群雄"][_0x4e0c6a - 1];
                      const _0x1a4662 = {
                        genieId: _0x4e0c6a
                      };
                      const _0x5ac9f7 = {
                        cmd: "genie_sweep",
                        params: _0x1a4662,
                        name: "灯神扫荡-" + _0xc91586
                      };
                      _0x1f8740.push(_0x5ac9f7);
                    }
                  }
                  if (_0x5e98e6.includes("deepsea")) {
                    {
                      const _0x3af8d0 = new Date().getDay();
                      if (_0x3af8d0 === 1) {
                        const _0x55f745 = {
                          genieId: 5
                        };
                        const _0x1c2048 = {
                          cmd: "genie_sweep",
                          params: _0x55f745,
                          name: "深海扫荡"
                        };
                        _0x1f8740.push(_0x1c2048);
                      }
                    }
                  }
                  for (let _0x5a470c = 1; _0x5a470c <= 10; _0x5a470c++) {
                    const _0x3650e5 = {
                      taskId: _0x5a470c
                    };
                    const _0x5c5771 = {
                      cmd: "task_claimdailypoint",
                      params: _0x3650e5,
                      name: "领取任务奖励" + _0x5a470c
                    };
                    _0x1f8740.push(_0x5c5771);
                  }
                  const _0x2d7033 = {
                    cmd: "task_claimdailyreward",
                    params: {},
                    name: "领取日常任务奖励"
                  };
                  _0x1f8740.push(_0x2d7033);
                  const _0x3e2bd2 = {
                    cmd: "task_claimweekreward",
                    params: {},
                    name: "领取周常任务奖励"
                  };
                  _0x1f8740.push(_0x3e2bd2);
                  if (_0x1f8740.length === 0) {
                    {
                      _0x5b8e76("无需补差");
                      break;
                    }
                  }
                  const _0x2b3cda = _0x1f8740.some(_0x3666a3 => _0x3666a3.isArenaTarget || _0x3666a3.isBossBattle);
                  let _0x1c4a0d = null;
                  if (_0x2b3cda) {
                    _0x1c4a0d = await _0xc8c99c();
                    !_0x1c4a0d;
                  }
                  for (let _0x9d2839 = 0; _0x9d2839 < _0x1f8740.length; _0x9d2839++) {
                    const _0x85c36d = _0x1f8740[_0x9d2839];
                    _0x5b8e76(_0x9d2839 + 1 + "/" + _0x1f8740.length + " " + (_0x85c36d.name || _0x85c36d.cmd));
                    try {
                      {
                        const _0x293eae = await _0x34dbfd("daily-tasks", _0x85c36d.cmd, _0x85c36d.params || {}, _0x85c36d.name || _0x85c36d.cmd);
                        if (_0x85c36d.isBlackmarket) {
                          const _0x133d82 = _0x293eae?.["goodsList"] || _0x293eae?.["body"]?.["goodsList"] || {};
                          let _0x538cf2 = false;
                          for (const _0x6c22c7 in _0x133d82) {
                            if (_0x133d82[_0x6c22c7]?.["buy_quantity"] > 0) {
                              _0x538cf2 = true;
                              break;
                            }
                          }
                          if (!_0x538cf2) {
                            {
                              try {
                                {
                                  const _0x775e43 = {
                                    goodsId: 1
                                  };
                                  await _0x34dbfd("daily-tasks", "store_buy", _0x775e43, "黑市购买第1个物品");
                                }
                              } catch (_0x28563f) {}
                            }
                          }
                        }
                        if (_0x85c36d.isArenaTarget && _0x293eae) {
                          const _0x1e80e3 = _0x1d1874(_0x293eae);
                          if (_0x1e80e3) {
                            {
                              if (!_0x1c4a0d) {
                                _0x1c4a0d = await _0xc8c99c();
                              }
                              if (_0x1c4a0d) {
                                const _0x36b8a8 = {
                                  targetId: _0x1e80e3,
                                  battleVersion: _0x1c4a0d
                                };
                                await _0x34dbfd("daily-tasks", "fight_startareaarena", _0x36b8a8, "竞技场战斗");
                              }
                            }
                          }
                        }
                      }
                    } catch {}
                    await _0x1dce1d(500);
                  }
                  _0x5b8e76("补差完成");
                  await _0x2c3e3a();
                  _0x166508("每日任务补差完成", "success");
                }
              } catch (_0xdebf0d) {
                {
                  _0x5b8e76("执行失败: " + _0xdebf0d.message);
                  _0x166508("执行失败: " + _0xdebf0d.message, "error");
                }
              }
              break;
            }
          case "refresh-role":
            await _0x2c3e3a();
            _0x166508("角色信息刷新成功", "success");
            break;
          case "bottle-restart":
            {
              {
                const _0x13c097 = _0x3b7778.bottleIsRunning;
                const _0x152333 = {
                  bottleType: -1
                };
                await _0xb1beb7("bottlehelper_stop", _0x152333);
                await _0x1dce1d(500);
                const _0x25bd01 = {
                  bottleType: -1
                };
                await _0xb1beb7("bottlehelper_start", _0x25bd01);
                const _0x1aaf65 = await _0xb1beb7("role_getroleinfo", {});
                const _0x53c683 = _0x1aaf65?.["role"] || _0x1aaf65;
                _0x3b617d(_0x53c683);
                break;
              }
            }
          case "hangup-refresh":
            {
              const _0x158958 = await _0xb1beb7("role_getroleinfo", {});
              const _0x591e20 = _0x158958?.["role"] || _0x158958;
              _0x7a0167(_0x591e20);
              break;
            }
          case "hangup-claim":
            {
              const _0x4e25b0 = [];
              for (let _0x2b753f = 1; _0x2b753f <= 4; _0x2b753f++) {
                const _0x717d76 = {
                  isSkipShareCard: true,
                  type: 2
                };
                const _0x412a45 = {
                  cmd: "system_mysharecallback",
                  params: _0x717d76,
                  name: "加钟" + _0x2b753f + "/5"
                };
                _0x4e25b0.push(_0x412a45);
              }
              const _0x1ba0c6 = {
                cmd: "system_claimhangupreward",
                params: {},
                name: "领取挂机奖励"
              };
              _0x4e25b0.push(_0x1ba0c6);
              const _0x170b29 = {
                isSkipShareCard: true,
                type: 2
              };
              const _0x581d81 = {
                cmd: "system_mysharecallback",
                params: _0x170b29,
                name: "加钟5/5"
              };
              _0x4e25b0.push(_0x581d81);
              await _0x332047("add-time", _0x4e25b0);
              break;
            }
          case "addtime-run":
            {
              {
                const _0x33c596 = [];
                const _0x52855a = {
                  isSkipShareCard: true,
                  type: 2
                };
                for (let _0x51c5b2 = 0; _0x51c5b2 < 5; _0x51c5b2++) {
                  _0x33c596.push({
                    cmd: "system_mysharecallback",
                    params: _0x52855a,
                    name: "加钟" + (_0x51c5b2 + 1) + "/5"
                  });
                }
                await _0x332047("add-time", _0x33c596);
                break;
              }
            }
          case "tower-formation":
            {
              const _0x4bdedc = parseInt(_0x1c5dfa.value, 10) || 1;
              _0x3b7778.towerFormation = _0x4bdedc;
              break;
            }
          case "tower-refresh":
            {
              {
                const _0x4aa482 = await _0xb1beb7("tower_getinfo", {});
                _0x12f1cf(_0x4aa482);
                break;
              }
            }
          case "tower-once":
            await _0x2e09a4();
            break;
          case "tower-loop":
            _0x55cf71();
            break;
          case "tower-stop":
            _0x17fd44();
            break;
          case "tower-claim":
            await _0x248d08();
            break;
          case "club-info":
            await _0x406f28();
            break;
          case "club-signin":
            await _0x4820af();
            break;
          case "club-export":
            await _0x1879ac();
            break;
          case "car-info":
            await _0x2f7aea();
            break;
          case "car-smart-send":
            await _0x1d26b1();
            break;
          case "car-claim-all":
            await _0xffd3ae();
            break;
          case "car-single-send":
            {
              {
                const _0xa84747 = _0x1c5dfa.getAttribute("data-car-id");
                await _0x4d551a(_0xa84747);
                break;
              }
            }
          case "car-single-refresh":
            {
              const _0x5a31db = _0x1c5dfa.getAttribute("data-car-id");
              await _0x86dca5(_0x5a31db);
              break;
            }
          case "car-single-claim":
            {
              {
                const _0x1a8c1c = _0x1c5dfa.getAttribute("data-car-id");
                await _0x184aab(_0x1a8c1c);
                break;
              }
            }
          case "car-single-helper":
            {
              const _0x4d896f = _0x1c5dfa.getAttribute("data-car-id");
              await _0x55cfe4(_0x4d896f);
              break;
            }
          case "club-match-signup":
            await _0x34dbfd("club-match", "legionmatch_rolesignup", {}, "俱乐部匹配报名");
            break;
          case "salt-match-query":
            {
              const _0x2b963e = _0x2605bc();
              await _0x8144d5(_0x2b963e);
              break;
            }
          case "salt-match-sort-red":
            _0x47f31c();
            break;
          case "salt-match-sort-score":
            _0x3a577c();
            break;
          case "salt-match-export":
            await _0x5679da();
            break;
          case "battle-records-query":
            {
              const _0x3e6fe5 = _0x44c9b5();
              await _0x4217ea(_0x3e6fe5);
              break;
            }
          case "battle-records-export":
            await _0x59c369();
            break;
          case "history-records-query":
            await _0x1653f2();
            break;
          case "history-records-export":
            await _0x239329();
            break;
          case "monthly-refresh":
            await _0x1eb16b();
            break;
          case "monthly-fish-topup":
            await _0x142605("topup");
            break;
          case "monthly-fish-complete":
            await _0x142605("complete");
            break;
          case "monthly-arena-topup":
            await _0x37a3f5("topup");
            break;
          case "monthly-arena-complete":
            await _0x37a3f5("complete");
            break;
          case "bosstower-refresh":
            await _0x5084f9();
            break;
          case "bosstower-execute":
            await _0x40265e();
            break;
          case "warguess-refresh":
            await _0xf7aeb4();
            break;
          case "warguess-start":
            await _0x3de377();
            break;
          case "warguess-coin":
            await _0x16b00c();
            break;
          case "skin-towers-refresh":
            await _0xfe60a();
            break;
          case "skin-towers-challenge":
            {
              {
                const _0x5cfad0 = parseInt(_0x1c5dfa.getAttribute("data-boss"), 10);
                if (_0x5cfad0 >= 1 && _0x5cfad0 <= 6) {
                  {
                    await _0x4b567c(_0x5cfad0);
                  }
                }
                break;
              }
            }
          case "skin-towers-stop":
            _0xba61cf();
            break;
          case "activity-get":
            await _0x34dbfd("skin-challenge", "activity_get", {}, "获取活动");
            break;
          case "activity-start":
            {
              {
                const _0x22963f = _0x5f268c("qa-activity-actid", 0);
                const _0x54f8f1 = {
                  actId: _0x22963f
                };
                await _0x34dbfd("skin-challenge", "activity_startactegame", _0x54f8f1, "开始闯关");
                break;
              }
            }
          case "treasure-info":
            await _0x34dbfd("treasure", "bosstower_getinfo", {}, "获取宝库信息");
            break;
          case "treasure-rank":
            await _0x34dbfd("treasure", "bosstower_gethelprank", {}, "获取排行");
            break;
          case "fish-challenge-start":
            {
              const _0x4732b3 = _0x5f268c("qa-fish-actid", 0);
              const _0x262ee1 = {
                actId: _0x4732b3
              };
              await _0x34dbfd("fish-challenge", "activity_startactegame", _0x262ee1, "开始闯关");
              break;
            }
          case "consumption-info":
            await _0x5bf398();
            break;
          case "consumption-open":
            {
              const _0x3323ab = _0x5f268c("qa-consumption-number", 4);
              await _0x3b3780(_0x3323ab);
              break;
            }
          case "consumption-get":
            await _0x34dbfd("consumption", "activity_get", {}, "获取消耗活动");
            break;
          case "consumption-claim":
            await _0x34dbfd("consumption", "activity_recyclewarorderrewardclaim", {}, "领取消耗奖励");
            break;
          case "box-open":
            {
              try {
                if (!_0x3b7778.items) {
                  await _0x2c3e3a();
                }
                const _0x1be845 = _0x5f268c("qa-box-itemid", 2001);
                const _0x2fa1ef = Math.floor(_0x5f268c("qa-box-count", 10));
                const _0x4b4739 = _0x3b7778.items?.[String(_0x1be845)]?.["quantity"] || _0x3b7778.items?.[_0x1be845]?.["quantity"] || 0;
                if (!Number.isFinite(_0x2fa1ef) || _0x2fa1ef < 10) {
                  {
                    break;
                  }
                }
                if (_0x2fa1ef % 10 !== 0) {
                  break;
                }
                if (_0x4b4739 <= 0) {
                  {
                    break;
                  }
                }
                if (_0x2fa1ef > _0x4b4739) {
                  break;
                }
                const _0x36e3e6 = Math.floor(_0x2fa1ef / 10);
                for (let _0x1d6d16 = 0; _0x1d6d16 < _0x36e3e6; _0x1d6d16++) {
                  {
                    const _0x253199 = {
                      itemId: _0x1be845,
                      number: 10
                    };
                    await _0xb1beb7("item_openbox", _0x253199);
                    await _0x1dce1d(350);
                  }
                }
                await _0xb1beb7("item_batchclaimboxpointreward", {});
                await _0x1dce1d(500);
                await _0x2c3e3a();
              } catch (_0x316448) {}
              break;
            }
          case "box-claim":
            try {
              await _0xb1beb7("item_batchclaimboxpointreward", {});
              await _0x1dce1d(500);
              await _0x2c3e3a();
            } catch (_0xf0deed) {}
            break;
          case "fish-run":
            {
              {
                try {
                  if (!_0x3b7778.items) {
                    await _0x2c3e3a();
                  }
                  const _0x44f9e4 = Math.floor(_0x5f268c("qa-fish-count", 10));
                  const _0x2949f9 = _0x5f268c("qa-fish-type", 1);
                  const _0xb6926b = _0x4cbf0b("qa-fish-free");
                  const _0xd8debe = _0x2949f9 === 2 ? 1012 : 1011;
                  const _0x1c1d0d = _0x3b7778.items?.[String(_0xd8debe)]?.["quantity"] || _0x3b7778.items?.[_0xd8debe]?.["quantity"] || 0;
                  if (!Number.isFinite(_0x44f9e4) || _0x44f9e4 < 10) {
                    break;
                  }
                  if (_0x44f9e4 % 10 !== 0) {
                    break;
                  }
                  if (_0x1c1d0d <= 0) {
                    {
                      break;
                    }
                  }
                  if (_0x44f9e4 > _0x1c1d0d) {
                    break;
                  }
                  const _0x196ff6 = Math.floor(_0x44f9e4 / 10);
                  for (let _0x217e60 = 0; _0x217e60 < _0x196ff6; _0x217e60++) {
                    {
                      const _0x2643ed = {
                        type: _0x2949f9,
                        lotteryNumber: 10,
                        newFree: _0xb6926b
                      };
                      await _0xb1beb7("artifact_lottery", _0x2643ed);
                      await _0x1dce1d(350);
                    }
                  }
                  await _0x2c3e3a();
                } catch (_0x5b5ccb) {}
                break;
              }
            }
          case "recruit-run":
            {
              const _0x56655f = _0x5f268c("qa-recruit-type", 3);
              const _0x437dea = _0x5f268c("qa-recruit-count", 1);
              const _0x5d1fa2 = _0x4cbf0b("qa-recruit-club");
              const _0x56d464 = {
                byClub: _0x5d1fa2,
                recruitNumber: _0x437dea,
                recruitType: _0x56655f
              };
              await _0x34dbfd("recruit-helper", "hero_recruit", _0x56d464, "开始招募");
              break;
            }
          case "star-upgrade":
            {
              const _0x5206a4 = _0x5f268c("qa-star-hero", 0);
              const _0x2bdf59 = Math.max(1, _0x5f268c("qa-star-count", 1));
              const _0x1f7109 = {
                length: _0x2bdf59
              };
              const _0x58b562 = {
                heroId: _0x5206a4
              };
              const _0x6d208a = Array.from(_0x1f7109, () => ({
                cmd: "hero_heroupgradestar",
                params: _0x58b562,
                name: "升星"
              }));
              await _0x332047("star-upgrade", _0x6d208a);
              break;
            }
          case "book-upgrade":
            {
              const _0x2e784e = _0x5f268c("qa-book-id", 1);
              const _0x3c5d69 = {
                bookId: _0x2e784e
              };
              await _0x34dbfd("star-upgrade", "book_upgrade", _0x3c5d69, "升级秘籍");
              break;
            }
          case "book-claim":
            {
              const _0x21fc54 = _0x5f268c("qa-book-id", 1);
              const _0x3bc05e = {
                bookId: _0x21fc54
              };
              await _0x34dbfd("star-upgrade", "book_claimpointreward", _0x3bc05e, "领取积分");
              break;
            }
          case "arena-refresh":
            await _0x2daa1b();
            break;
          case "arena-auto":
            await _0x5f254f();
            break;
          case "arena-stop":
            _0x5384e7();
            break;
          case "hero-upgrade-refresh":
            await _0x4ff9af();
            break;
          case "hero-upgrade-level":
            await _0x2e301e();
            break;
          case "hero-upgrade-order":
            await _0x127e74();
            break;
          case "quench-refresh":
            await _0x131372();
            break;
          case "quench-once":
            {
              {
                const _0x22c9c2 = await _0x4f9544();
                break;
              }
            }
          case "quench-continuous":
            _0x5a3e05();
            break;
          case "quench-stop":
            _0x998a4f();
            break;
          case "quench-reset":
            _0x3b7778.quenchCount = 0;
            const _0x2624d6 = document.getElementById("qa-quench-count");
            if (_0x2624d6) {
              _0x2624d6.textContent = "0";
            }
            break;
          case "auto-start":
            _0xa3764();
            break;
          case "auto-stop":
            _0x2891ac();
            break;
          case "top-rank-query":
            await _0x46dd08();
            break;
          case "top-rank-export":
            await _0x32ef84();
            break;
          case "top-rank-page-prev":
            _0x1e08da("prev");
            break;
          case "top-rank-page-next":
            _0x1e08da("next");
            break;
          case "club-rank-query":
            await _0x446895();
            break;
          case "club-rank-export":
            await _0x3c3503();
            break;
          case "club-rank-page-prev":
            _0x3dcf00("prev");
            break;
          case "club-rank-page-next":
            _0x3dcf00("next");
            break;
          case "gold-rank-query":
            await _0x478eb3();
            break;
          case "gold-rank-export":
            await _0x5a9919();
            break;
          case "gold-rank-page-prev":
            _0x1e424d("prev");
            break;
          case "gold-rank-page-next":
            _0x1e424d("next");
            break;
          case "gold-rank-group-1":
            _0x267a13("gold1");
            break;
          case "gold-rank-group-2":
            _0x267a13("gold2");
            break;
          case "gold-rank-group-3":
            _0x267a13("gold3");
            break;
          case "gold-rank-group-4":
            _0x267a13("gold4");
            break;
          case "gold-rank-group-5":
            _0x267a13("gold5");
            break;
          case "pvp-query":
            await _0x54d030();
            break;
          case "pvp-start":
            await _0x36d2ff();
            break;
          case "pvp-stop":
            _0x8c5aaf();
            break;
          case "check-update":
            await _0x16f3b1();
            break;
          case "do-update":
            _0x1fd5fb();
            break;
        }
      }
    } catch (_0x2f856c) {} finally {
      _0x1c5dfa.disabled = false;
      _0x1c5dfa.textContent = _0x246667;
      _0x3b7778.actionLocks[_0x2365fb] = false;
    }
  };
  class _0x4f69c6 {
    constructor(_0x2b42f3, _0x3fd4b1 = {}) {
      {
        this.input = _0x2b42f3;
        const _0x4650ff = {
          weekendOnly: _0x3fd4b1.weekendOnly || false,
          format: _0x3fd4b1.format || "yyyy/MM/dd",
          onChange: _0x3fd4b1.onChange || null,
          ..._0x3fd4b1
        };
        this.options = _0x4650ff;
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
        const _0x113b56 = document.createElement("div");
        _0x113b56.style.cssText = "display: flex; gap: 4px; align-items: center;";
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        _0x113b56.appendChild(this.input);
        const _0xb4a280 = document.createElement("button");
        _0xb4a280.className = "date-picker-btn";
        _0xb4a280.innerHTML = "📅";
        _0xb4a280.type = "button";
        _0xb4a280.onclick = _0x2a6a9f => {
          _0x2a6a9f.preventDefault();
          _0x2a6a9f.stopPropagation();
          this.toggle();
        };
        _0x113b56.appendChild(_0xb4a280);
        this.wrapper.appendChild(_0x113b56);
        this.popup = document.createElement("div");
        this.popup.className = "calendar-popup qa-root";
        document.body.appendChild(this.popup);
        if (this.input.value) {
          {
            const _0x54b4cb = this.input.value.split("/");
            if (_0x54b4cb.length === 3) {
              {
                this.selectedDate = new Date(_0x54b4cb[0], _0x54b4cb[1] - 1, _0x54b4cb[2]);
                this.currentDate = new Date(_0x54b4cb[0], _0x54b4cb[1] - 1, 1);
              }
            }
          }
        }
        document.addEventListener("click", _0x38c3a7 => {
          !this.wrapper.contains(_0x38c3a7.target) && !this.popup.contains(_0x38c3a7.target) && this.isOpen && this.close();
        });
        this.input.addEventListener("click", () => this.toggle());
        this.input.addEventListener("focus", () => this.open());
      }
    }
    updatePosition() {
      const _0x2e188b = this.wrapper.getBoundingClientRect();
      const _0x3b192b = this.popup.offsetHeight || 350;
      const _0x59a90e = window.innerHeight;
      const _0x3be8d2 = _0x2e188b.top;
      const _0x5b335d = _0x59a90e - _0x2e188b.bottom;
      if (_0x3be8d2 > _0x3b192b || _0x3be8d2 > _0x5b335d) {
        {
          this.popup.style.top = _0x2e188b.top + window.scrollY - _0x3b192b - 4 + "px";
        }
      } else {
        this.popup.style.top = _0x2e188b.bottom + window.scrollY + 4 + "px";
      }
      this.popup.style.left = _0x2e188b.left + window.scrollX + "px";
    }
    toggle() {
      {
        if (this.isOpen) {
          this.close();
        } else {
          {
            this.open();
          }
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
      this.isOpen = false;
      this.popup.classList.remove("show");
    }
    render() {
      const _0x4dc5c7 = this.currentDate.getFullYear();
      const _0x3b038f = this.currentDate.getMonth();
      this.popup.innerHTML = "\n      <div class=\"calendar-header\">\n        <button class=\"calendar-nav\" data-action=\"prev-year\">«</button>\n        <button class=\"calendar-nav\" data-action=\"prev-month\">‹</button>\n        <span class=\"calendar-title\">" + _0x4dc5c7 + "年" + (_0x3b038f + 1) + "月</span>\n        <button class=\"calendar-nav\" data-action=\"next-month\">›</button>\n        <button class=\"calendar-nav\" data-action=\"next-year\">»</button>\n      </div>\n      <div class=\"calendar-weekdays\">\n        <span class=\"calendar-weekday weekend\">日</span>\n        <span class=\"calendar-weekday\">一</span>\n        <span class=\"calendar-weekday\">二</span>\n        <span class=\"calendar-weekday\">三</span>\n        <span class=\"calendar-weekday\">四</span>\n        <span class=\"calendar-weekday\">五</span>\n        <span class=\"calendar-weekday weekend\">六</span>\n      </div>\n      <div class=\"calendar-days\">\n        " + this.renderDays() + "\n      </div>\n      <div class=\"calendar-shortcuts\">\n        <button class=\"calendar-shortcut\" data-shortcut=\"last-saturday\">上周六</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"last-sunday\">上周日</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"this-saturday\">本周六</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"this-sunday\">本周日</button>\n      </div>\n      " + (this.options.weekendOnly ? "<div class=\"calendar-hint\">💡 盐场仅在周末开放</div>" : "") + "\n    ";
      this.popup.querySelectorAll(".calendar-nav").forEach(_0x34fa69 => {
        {
          _0x34fa69.onclick = _0x1f3090 => {
            {
              _0x1f3090.preventDefault();
              _0x1f3090.stopPropagation();
              this.handleNav(_0x34fa69.dataset.action);
            }
          };
        }
      });
      this.popup.querySelectorAll(".calendar-day:not(.empty):not(.disabled)").forEach(_0x3d50de => {
        _0x3d50de.onclick = _0x164d7b => {
          _0x164d7b.preventDefault();
          _0x164d7b.stopPropagation();
          this.selectDate(parseInt(_0x3d50de.dataset.day), parseInt(_0x3d50de.dataset.month), parseInt(_0x3d50de.dataset.year));
        };
      });
      this.popup.querySelectorAll(".calendar-shortcut").forEach(_0x30c627 => {
        _0x30c627.onclick = _0x256566 => {
          {
            _0x256566.preventDefault();
            _0x256566.stopPropagation();
            this.handleShortcut(_0x30c627.dataset.shortcut);
          }
        };
      });
    }
    renderDays() {
      {
        const _0xae645f = this.currentDate.getFullYear();
        const _0x1c4331 = this.currentDate.getMonth();
        const _0x54d9bc = new Date(_0xae645f, _0x1c4331, 1).getDay();
        const _0x435187 = new Date(_0xae645f, _0x1c4331 + 1, 0).getDate();
        const _0x4b1fa6 = new Date(_0xae645f, _0x1c4331, 0).getDate();
        const _0x1cd6c3 = new Date();
        _0x1cd6c3.setHours(0, 0, 0, 0);
        let _0x3786ac = "";
        for (let _0x3c20f6 = _0x54d9bc - 1; _0x3c20f6 >= 0; _0x3c20f6--) {
          {
            const _0x51a2b3 = _0x4b1fa6 - _0x3c20f6;
            const _0x462691 = _0x1c4331 === 0 ? 11 : _0x1c4331 - 1;
            const _0x1f1a7b = _0x1c4331 === 0 ? _0xae645f - 1 : _0xae645f;
            const _0x2eee58 = new Date(_0x1f1a7b, _0x462691, _0x51a2b3);
            const _0x3e8da1 = _0x2eee58.getDay() === 0 || _0x2eee58.getDay() === 6;
            const _0x428acf = this.options.weekendOnly && !_0x3e8da1;
            _0x3786ac += "<span class=\"calendar-day other-month" + (_0x3e8da1 ? " weekend" : "") + (_0x428acf ? " disabled" : "") + "\"\n                     data-day=\"" + _0x51a2b3 + "\" data-month=\"" + _0x462691 + "\" data-year=\"" + _0x1f1a7b + "\">" + _0x51a2b3 + "</span>";
          }
        }
        for (let _0x1acb28 = 1; _0x1acb28 <= _0x435187; _0x1acb28++) {
          const _0x1a6285 = new Date(_0xae645f, _0x1c4331, _0x1acb28);
          const _0x3e254e = _0x1a6285.getTime() === _0x1cd6c3.getTime();
          const _0x3171e3 = this.selectedDate && _0x1a6285.getFullYear() === this.selectedDate.getFullYear() && _0x1a6285.getMonth() === this.selectedDate.getMonth() && _0x1a6285.getDate() === this.selectedDate.getDate();
          const _0x1142f2 = _0x1a6285.getDay() === 0 || _0x1a6285.getDay() === 6;
          const _0x2337c1 = _0x1a6285 > _0x1cd6c3;
          const _0x136b0e = this.options.weekendOnly && !_0x1142f2 || _0x2337c1;
          let _0x3a9182 = "calendar-day";
          if (_0x3e254e) {
            _0x3a9182 += " today";
          }
          if (_0x3171e3) {
            _0x3a9182 += " selected";
          }
          if (_0x1142f2) {
            _0x3a9182 += " weekend";
          }
          if (_0x136b0e) {
            _0x3a9182 += " disabled";
          }
          _0x3786ac += "<span class=\"" + _0x3a9182 + "\" data-day=\"" + _0x1acb28 + "\" data-month=\"" + _0x1c4331 + "\" data-year=\"" + _0xae645f + "\">" + _0x1acb28 + "</span>";
        }
        const _0x2eb482 = Math.ceil((_0x54d9bc + _0x435187) / 7) * 7;
        const _0x47ffc9 = _0x2eb482 - _0x54d9bc - _0x435187;
        for (let _0x5792b2 = 1; _0x5792b2 <= _0x47ffc9; _0x5792b2++) {
          const _0x1512e6 = _0x1c4331 === 11 ? 0 : _0x1c4331 + 1;
          const _0x3c629b = _0x1c4331 === 11 ? _0xae645f + 1 : _0xae645f;
          _0x3786ac += "<span class=\"calendar-day other-month disabled\"\n                     data-day=\"" + _0x5792b2 + "\" data-month=\"" + _0x1512e6 + "\" data-year=\"" + _0x3c629b + "\">" + _0x5792b2 + "</span>";
        }
        return _0x3786ac;
      }
    }
    handleNav(_0x2ba425) {
      {
        switch (_0x2ba425) {
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
    }
    handleShortcut(_0x569c7d) {
      const _0x2d0bd2 = new Date();
      const _0x48c6c6 = _0x2d0bd2.getDay();
      let _0x5a2904;
      switch (_0x569c7d) {
        case "last-saturday":
          const _0x327a21 = _0x48c6c6 === 6 ? 7 : _0x48c6c6 + 1;
          _0x5a2904 = new Date(_0x2d0bd2);
          _0x5a2904.setDate(_0x2d0bd2.getDate() - _0x327a21);
          break;
        case "last-sunday":
          const _0x5d46bc = _0x48c6c6 === 0 ? 7 : _0x48c6c6;
          _0x5a2904 = new Date(_0x2d0bd2);
          _0x5a2904.setDate(_0x2d0bd2.getDate() - _0x5d46bc);
          break;
        case "this-saturday":
          if (_0x48c6c6 === 6) {
            {
              _0x5a2904 = new Date(_0x2d0bd2);
            }
          } else {
            _0x5a2904 = new Date(_0x2d0bd2);
            _0x5a2904.setDate(_0x2d0bd2.getDate() + (6 - _0x48c6c6));
          }
          if (_0x5a2904 > _0x2d0bd2) {
            {
              _0x5a2904.setDate(_0x5a2904.getDate() - 7);
            }
          }
          break;
        case "this-sunday":
          if (_0x48c6c6 === 0) {
            {
              _0x5a2904 = new Date(_0x2d0bd2);
            }
          } else {
            _0x5a2904 = new Date(_0x2d0bd2);
            _0x5a2904.setDate(_0x2d0bd2.getDate() - _0x48c6c6);
          }
          break;
      }
      _0x5a2904 && this.selectDate(_0x5a2904.getDate(), _0x5a2904.getMonth(), _0x5a2904.getFullYear());
    }
    selectDate(_0x501bd0, _0x15ae10, _0x48239c) {
      {
        this.selectedDate = new Date(_0x48239c, _0x15ae10, _0x501bd0);
        this.currentDate = new Date(_0x48239c, _0x15ae10, 1);
        const _0x2a34b4 = _0x48239c + "/" + String(_0x15ae10 + 1).padStart(2, "0") + "/" + String(_0x501bd0).padStart(2, "0");
        this.input.value = _0x2a34b4;
        this.options.onChange && this.options.onChange(_0x2a34b4, this.selectedDate);
        this.close();
      }
    }
  }
  const _0x36b6ce = () => {
    {
      const _0x1c0950 = document.getElementById("qa-salt-match-date");
      if (_0x1c0950 && !_0x1c0950._datePicker) {
        {
          const _0x27a2f7 = {
            weekendOnly: true,
            onChange: _0x41c262 => {}
          };
          _0x1c0950._datePicker = new _0x4f69c6(_0x1c0950, _0x27a2f7);
        }
      }
      const _0x41629d = document.getElementById("qa-battle-date");
      if (_0x41629d && !_0x41629d._datePicker) {
        {
          const _0x2e680b = {
            weekendOnly: true,
            onChange: _0x19a517 => {}
          };
          _0x41629d._datePicker = new _0x4f69c6(_0x41629d, _0x2e680b);
        }
      }
    }
  };
  const _0x198a65 = (_0xfbda00, _0x5c22c2) => {
    const _0x46addc = document.getElementById(_0xfbda00);
    if (!_0x46addc) {
      return;
    }
    _0x46addc.classList.toggle("error", !!_0x5c22c2);
  };
  const _0x24df2d = (_0x337bc4, _0x434b6b) => {
    const _0x2af0c4 = document.getElementById(_0x337bc4);
    if (!_0x2af0c4) {
      return;
    }
    const _0x4a462c = String(_0x434b6b || "").trim();
    _0x2af0c4.textContent = _0x4a462c;
    _0x2af0c4.style.display = _0x4a462c ? "block" : "none";
  };
  const _0x1b69a5 = _0xb9788 => {
    const _0x4c0000 = _0x3b7778?.["items"] || {};
    return _0x4c0000?.[String(_0xb9788)]?.["quantity"] || _0x4c0000?.[_0xb9788]?.["quantity"] || 0;
  };
  const _0x2dfb9a = () => {
    const _0x1ecfe6 = document.getElementById("qa-box-itemid");
    const _0x1a0760 = document.getElementById("qa-box-count");
    const _0x5cd079 = document.getElementById("qa-box-open-btn");
    const _0x2496ab = Number(_0x1ecfe6?.["value"]) || 2001;
    const _0x22531 = _0x1b69a5(_0x2496ab);
    const _0x2b82da = Number(_0x1a0760?.["value"]);
    let _0x1092c8 = "";
    if (!_0x3b7778?.["items"]) {
      _0x1092c8 = "请先刷新角色信息";
    } else {
      if (!Number.isFinite(_0x2b82da) || !_0x2b82da) {
        _0x1092c8 = "请输入数量";
      } else {
        if (_0x2b82da < 10) {
          _0x1092c8 = "最少输入10";
        } else {
          if (_0x2b82da % 10 !== 0) {
            _0x1092c8 = "数量必须是10的倍数";
          } else {
            if (_0x22531 <= 0) {
              _0x1092c8 = "当前宝箱库存为0";
            } else {
              if (_0x2b82da > _0x22531) {
                _0x1092c8 = "超出库存数量（最大" + _0x22531 + "）";
              }
            }
          }
        }
      }
    }
    _0x24df2d("qa-box-error", _0x1092c8);
    _0x198a65("qa-box-count", !!_0x1092c8);
    if (_0x5cd079) {
      _0x5cd079.disabled = !!_0x1092c8;
    }
    const _0x51704c = document.getElementById("qa-fish-type");
    const _0x44e0d7 = document.getElementById("qa-fish-count");
    const _0x4a158d = document.getElementById("qa-fish-run-btn");
    const _0x45cc80 = Number(_0x51704c?.["value"]) || 1;
    const _0x5ad0e1 = _0x45cc80 === 2 ? 1012 : 1011;
    const _0x3ee00f = _0x1b69a5(_0x5ad0e1);
    const _0x527040 = Number(_0x44e0d7?.["value"]);
    let _0x78e3c0 = "";
    if (!_0x3b7778?.["items"]) {
      _0x78e3c0 = "请先刷新角色信息";
    } else {
      if (!Number.isFinite(_0x527040) || !_0x527040) {
        _0x78e3c0 = "请输入数量";
      } else {
        if (_0x527040 < 10) {
          _0x78e3c0 = "最少输入10";
        } else {
          if (_0x527040 % 10 !== 0) {
            _0x78e3c0 = "数量必须是10的倍数";
          } else {
            if (_0x3ee00f <= 0) {
              _0x78e3c0 = "当前鱼竿库存为0";
            } else {
              if (_0x527040 > _0x3ee00f) {
                _0x78e3c0 = "超出库存数量（最大" + _0x3ee00f + "）";
              }
            }
          }
        }
      }
    }
    _0x24df2d("qa-fish-error", _0x78e3c0);
    _0x198a65("qa-fish-count", !!_0x78e3c0);
    if (_0x4a158d) {
      _0x4a158d.disabled = !!_0x78e3c0;
    }
  };
  const _0x207f33 = () => {
    if (document.getElementById("qa-root")) {
      return;
    }
    const _0x1483d2 = document.createElement("style");
    _0x1483d2.textContent = _0x26da2d();
    document.head.appendChild(_0x1483d2);
    const _0x3b1847 = document.createElement("div");
    _0x3b1847.id = "qa-root";
    _0x3b1847.className = "qa-root";
    _0x3b1847.setAttribute("data-theme", _0x3b7778.theme);
    const _0x1e6e4b = document.createElement("div");
    _0x1e6e4b.id = "qa-orb";
    _0x1e6e4b.className = "floating-orb";
    _0x1e6e4b.innerHTML = "<svg class=\"orb-icon\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z\"/>\n    <path d=\"M7 17l5-8 5 8H7z\" opacity=\"0.5\"/>\n  </svg>";
    _0x1e6e4b.title = "点击展开/收起，长按切换主题，可拖动";
    let _0x2ab913 = false;
    let _0x1b7b56 = 0;
    let _0x2d264c = 0;
    let _0x590420 = 0;
    let _0x2f4561 = 0;
    let _0x452c3b = false;
    let _0x5d4614 = null;
    let _0x3d5cd5 = false;
    const _0x4abdba = () => {
      {
        _0x3b7778.theme = _0x3b7778.theme === "light" ? "dark" : "light";
        localStorage.setItem(_0x47d6e1, _0x3b7778.theme);
        const _0x138b09 = document.getElementById("qa-root");
        if (_0x138b09) {
          _0x138b09.setAttribute("data-theme", _0x3b7778.theme);
        }
      }
    };
    const _0x3dfb91 = _0x519d0b => {
      if (_0x519d0b.type === "mousedown" && _0x519d0b.button !== 0) {
        return;
      }
      _0x519d0b.preventDefault();
      _0x2ab913 = true;
      _0x452c3b = false;
      _0x3d5cd5 = false;
      _0x1e6e4b.classList.add("dragging");
      const _0x2dd2eb = _0x519d0b.touches ? _0x519d0b.touches[0] : _0x519d0b;
      _0x1b7b56 = _0x2dd2eb.clientX;
      _0x2d264c = _0x2dd2eb.clientY;
      const _0x3de018 = _0x1e6e4b.getBoundingClientRect();
      _0x590420 = _0x3de018.left + _0x3de018.width / 2;
      _0x2f4561 = _0x3de018.top + _0x3de018.height / 2;
      _0x5d4614 = setTimeout(() => {
        !_0x452c3b && (_0x3d5cd5 = true, _0x4abdba(), _0x166508(_0x3b7778.theme === "dark" ? "已切换到暗色主题" : "已切换到亮色主题", "success"));
      }, 500);
    };
    const _0x15aa81 = _0x36a6bc => {
      if (!_0x2ab913) {
        return;
      }
      _0x36a6bc.preventDefault();
      const _0x3d7b37 = _0x36a6bc.touches ? _0x36a6bc.touches[0] : _0x36a6bc;
      const _0x5cdaa8 = _0x3d7b37.clientX - _0x1b7b56;
      const _0x69606f = _0x3d7b37.clientY - _0x2d264c;
      (Math.abs(_0x5cdaa8) > 5 || Math.abs(_0x69606f) > 5) && (_0x452c3b = true, _0x5d4614 && (clearTimeout(_0x5d4614), _0x5d4614 = null));
      const _0xa8672 = Math.max(20, Math.min(window.innerWidth - 20, _0x590420 + _0x5cdaa8));
      const _0x5a3bcc = Math.max(20, Math.min(window.innerHeight - 20, _0x2f4561 + _0x69606f));
      _0x1e6e4b.style.left = _0xa8672 + "px";
      _0x1e6e4b.style.top = _0x5a3bcc + "px";
      _0x1e6e4b.style.right = "auto";
      _0x1e6e4b.style.bottom = "auto";
      _0x1e6e4b.style.transform = "translate(-50%, -50%)";
    };
    const _0x4d336a = () => {
      if (!_0x2ab913) {
        return;
      }
      _0x2ab913 = false;
      _0x1e6e4b.classList.remove("dragging");
      if (_0x5d4614) {
        {
          clearTimeout(_0x5d4614);
          _0x5d4614 = null;
        }
      }
      if (!_0x452c3b && !_0x3d5cd5) {
        const _0x5b3275 = document.getElementById("qa-panel");
        const _0x3f29ae = !_0x5b3275.classList.contains("show");
        _0x5b3275.classList.toggle("show");
        if (_0x3f29ae && _0x3b7778.activePage) {
          {
            _0x419628(_0x3b7778.activePage);
          }
        }
      }
    };
    _0x1e6e4b.addEventListener("mousedown", _0x3dfb91);
    const _0x365959 = {
      passive: false
    };
    _0x1e6e4b.addEventListener("touchstart", _0x3dfb91, _0x365959);
    document.addEventListener("mousemove", _0x15aa81);
    const _0x209c83 = {
      passive: false
    };
    document.addEventListener("touchmove", _0x15aa81, _0x209c83);
    document.addEventListener("mouseup", _0x4d336a);
    document.addEventListener("touchend", _0x4d336a);
    const _0x143795 = document.createElement("div");
    _0x143795.id = "qa-panel";
    _0x143795.className = "panel-shell";
    _0x143795.innerHTML = "\n    <div class=\"panel-header\">\n      <div class=\"menu-nav\" id=\"qa-menu-nav\">\n        " + _0x2f9264() + "\n      </div>\n    </div>\n    <div class=\"content-wrapper\">\n      <div class=\"content-area\">\n        " + _0x34ce86() + "\n      </div>\n    </div>\n    <div class=\"qa-watermark\" id=\"qa-watermark\"></div>\n  ";
    _0x3b1847.appendChild(_0x1e6e4b);
    _0x3b1847.appendChild(_0x143795);
    document.body.appendChild(_0x3b1847);
    _0x2df2cd();
    _0x3b1847.setAttribute("data-theme", _0x3b7778.theme);
    const _0x2de51e = document.getElementById("qa-menu-nav");
    _0x2de51e && _0x3b7778.menuCollapsed && _0x2de51e.classList.toggle("collapsed", _0x3b7778.menuCollapsed);
    let _0x2150dd = null;
    let _0x29fe57 = null;
    let _0x5a58f9 = 0;
    let _0x46053e = null;
    let _0x38e2ef = false;
    let _0x4e3ff0 = false;
    const _0x2a443f = () => !!_0x2de51e && _0x2de51e.scrollWidth > _0x2de51e.clientWidth + 1;
    const _0x1c165e = () => {
      _0x4e3ff0 = true;
      setTimeout(() => {
        _0x4e3ff0 = false;
      }, 350);
    };
    const _0x19df9c = _0x5454f0 => {
      const _0x24a574 = _0x5454f0.touches[0];
      _0x2150dd = _0x24a574.clientX;
      _0x29fe57 = _0x24a574.clientY;
      _0x5a58f9 = _0x2de51e?.["scrollLeft"] || 0;
      _0x46053e = null;
      _0x38e2ef = false;
    };
    const _0xb57ff3 = _0x346687 => {
      {
        if (_0x2150dd === null || _0x29fe57 === null) {
          return;
        }
        const _0x53270c = _0x346687.touches[0];
        const _0x43ef07 = _0x53270c.clientX - _0x2150dd;
        const _0x174145 = _0x53270c.clientY - _0x29fe57;
        if (!_0x46053e) {
          {
            if (Math.abs(_0x43ef07) > 8 && Math.abs(_0x43ef07) > Math.abs(_0x174145)) {
              _0x46053e = "horizontal";
            } else {
              if (Math.abs(_0x174145) > 8 && Math.abs(_0x174145) > Math.abs(_0x43ef07)) {
                _0x46053e = "vertical";
              }
            }
          }
        }
        if (_0x46053e === "horizontal") {
          {
            if (Math.abs(_0x43ef07) > 3) {
              _0x38e2ef = true;
            }
            _0x2a443f() && (_0x2de51e.scrollLeft = _0x5a58f9 - _0x43ef07);
            _0x346687.preventDefault();
          }
        }
      }
    };
    const _0x427cd9 = _0x2e0657 => {
      if (_0x2150dd === null || _0x29fe57 === null) {
        return;
      }
      if (_0x2e0657.changedTouches && _0x2e0657.changedTouches.length > 0) {
        const _0x5203e8 = _0x2e0657.changedTouches[0];
        const _0x29b979 = _0x5203e8.clientX - _0x2150dd;
        const _0x574076 = _0x5203e8.clientY - _0x29fe57;
        if (!_0x2a443f() && Math.abs(_0x29b979) > 50 && Math.abs(_0x29b979) > Math.abs(_0x574076)) {
          {
            const _0x2b8af8 = _0x3b7778.activePage;
            const _0x4f814c = _0x5ebc1b.indexOf(_0x2b8af8);
            if (_0x29b979 < 0 && _0x4f814c < _0x5ebc1b.length - 1) {
              {
                _0x52d93c(_0x5ebc1b[_0x4f814c + 1]);
              }
            } else {
              if (_0x29b979 > 0 && _0x4f814c > 0) {
                {
                  _0x52d93c(_0x5ebc1b[_0x4f814c - 1]);
                }
              }
            }
            _0x1c165e();
          }
        } else {
          _0x38e2ef && _0x1c165e();
        }
      }
      _0x2150dd = null;
      _0x29fe57 = null;
      _0x46053e = null;
      _0x38e2ef = false;
    };
    if (_0x2de51e) {
      {
        const _0x4676b0 = {
          passive: true
        };
        _0x2de51e.addEventListener("touchstart", _0x19df9c, _0x4676b0);
        const _0x50ce0e = {
          passive: false
        };
        _0x2de51e.addEventListener("touchmove", _0xb57ff3, _0x50ce0e);
        const _0x1e1ec8 = {
          passive: true
        };
        _0x2de51e.addEventListener("touchend", _0x427cd9, _0x1e1ec8);
        let _0x301e51 = false;
        let _0x2c6919 = 0;
        let _0x6070cc = 0;
        let _0x26945d = false;
        _0x2de51e.addEventListener("mousedown", _0x49a0be => {
          if (_0x49a0be.button !== 0) {
            return;
          }
          _0x301e51 = true;
          _0x26945d = false;
          _0x2c6919 = _0x49a0be.clientX;
          _0x6070cc = _0x2de51e.scrollLeft;
          _0x2de51e.classList.add("dragging");
          _0x49a0be.preventDefault();
        });
        document.addEventListener("mousemove", _0x2edc85 => {
          if (!_0x301e51) {
            return;
          }
          const _0x240a53 = _0x2edc85.clientX - _0x2c6919;
          if (Math.abs(_0x240a53) > 3) {
            _0x26945d = true;
          }
          _0x2de51e.scrollLeft = _0x6070cc - _0x240a53;
          _0x2edc85.preventDefault();
        });
        document.addEventListener("mouseup", () => {
          {
            if (!_0x301e51) {
              return;
            }
            _0x301e51 = false;
            _0x2de51e.classList.remove("dragging");
            if (_0x26945d) {
              _0x1c165e();
            }
          }
        });
      }
    }
    _0x143795.addEventListener("click", _0x28368b => {
      if (_0x4e3ff0 && _0x28368b.target.closest("#qa-menu-nav")) {
        {
          _0x28368b.preventDefault();
          _0x28368b.stopPropagation();
          return;
        }
      }
      const _0x535758 = _0x28368b.target.closest(".card-header");
      if (_0x535758) {
        const _0x500bb8 = _0x535758.closest(".card[data-collapsible]");
        if (_0x500bb8 && !_0x28368b.target.closest("button") && !_0x28368b.target.closest("input")) {
          _0x500bb8.classList.toggle("collapsed");
          return;
        }
      }
      const _0x20908a = _0x28368b.target.closest("[data-changelog-toggle]");
      if (_0x20908a) {
        const _0x27a2af = _0x20908a.closest(".changelog-version");
        if (_0x27a2af) {
          _0x27a2af.classList.toggle("collapsed");
          return;
        }
      }
      const _0x24d863 = _0x28368b.target.closest(".menu-item");
      if (_0x24d863) {
        const _0x3a9c8f = _0x24d863.getAttribute("data-page");
        if (_0x3a9c8f) {
          _0x52d93c(_0x3a9c8f);
        }
        return;
      }
      const _0x5d0f5c = _0x28368b.target.closest(".qa-box-option");
      if (_0x5d0f5c) {
        const _0x256410 = Number(_0x5d0f5c.getAttribute("data-itemid")) || 2001;
        document.querySelectorAll(".qa-box-option").forEach(_0x2129bb => _0x2129bb.classList.toggle("selected", _0x2129bb === _0x5d0f5c));
        const _0x41440 = document.getElementById("qa-box-itemid");
        if (_0x41440) {
          _0x41440.value = String(_0x256410);
        }
        const _0x4231c4 = _0x1b69a5(_0x256410);
        const _0x2e4d24 = document.getElementById("qa-box-count");
        if (_0x2e4d24) {
          _0x2e4d24.max = String(Math.max(_0x4231c4, 10));
          const _0x37c0f2 = Number(_0x2e4d24.value);
          if (Number.isFinite(_0x37c0f2) && _0x4231c4 > 0 && _0x37c0f2 > _0x4231c4) {
            {
              const _0x3faf87 = Math.max(Math.floor(_0x4231c4 / 10) * 10, 10);
              _0x2e4d24.value = String(_0x3faf87);
            }
          }
        }
        _0x2dfb9a();
        return;
      }
      const _0x559e7d = _0x28368b.target.closest(".qa-fish-option");
      if (_0x559e7d) {
        const _0x25b07f = Number(_0x559e7d.getAttribute("data-type")) || 1;
        document.querySelectorAll(".qa-fish-option").forEach(_0x96cce8 => _0x96cce8.classList.toggle("selected", _0x96cce8 === _0x559e7d));
        const _0x5da06e = document.getElementById("qa-fish-type");
        if (_0x5da06e) {
          _0x5da06e.value = String(_0x25b07f);
        }
        const _0x4f531f = _0x25b07f === 2 ? 1012 : 1011;
        const _0x1b8309 = _0x1b69a5(_0x4f531f);
        const _0x29acf4 = document.getElementById("qa-fish-count");
        if (_0x29acf4) {
          _0x29acf4.max = String(Math.max(_0x1b8309, 10));
          const _0x483831 = Number(_0x29acf4.value);
          if (Number.isFinite(_0x483831) && _0x1b8309 > 0 && _0x483831 > _0x1b8309) {
            {
              const _0x18d3ce = Math.max(Math.floor(_0x1b8309 / 10) * 10, 10);
              _0x29acf4.value = String(_0x18d3ce);
            }
          }
        }
        _0x2dfb9a();
        return;
      }
      const _0x116e8b = _0x28368b.target.closest("[data-action]");
      if (_0x116e8b) {
        _0x610cd5(_0x116e8b);
      }
    });
    _0x143795.addEventListener("change", async _0x735b75 => {
      const _0x153449 = _0x735b75.target;
      if (_0x153449 && _0x153449.hasAttribute("data-task")) {
        {
          const _0x3ec80c = document.getElementById("qa-daily-select-all");
          if (_0x3ec80c) {
            const _0x328f18 = document.querySelectorAll("#page-daily-tasks input[data-task]");
            const _0x1948d2 = Array.from(_0x328f18).every(_0x57af39 => _0x57af39.checked);
            _0x3ec80c.checked = _0x1948d2;
          }
        }
      }
      _0x153449 && _0x153449.id === "qa-fish-free" && _0x2dfb9a();
      if (_0x153449 && _0x153449.id === "qa-top-rank-page-size") {
        const {
          handleTopRankPageSizeChange: _0x291713
        } = await Promise.resolve().then(function () {
          {
            return _0x1cddb8;
          }
        });
        _0x291713(_0x153449.value);
      } else {
        if (_0x153449 && _0x153449.id === "qa-club-rank-page-size") {
          {
            const {
              handleClubRankPageSizeChange: _0x2e2aaa
            } = await Promise.resolve().then(function () {
              return _0x1cddb8;
            });
            _0x2e2aaa(_0x153449.value);
          }
        } else {
          if (_0x153449 && _0x153449.id === "qa-gold-rank-page-size") {
            {
              const {
                handleGoldRankPageSizeChange: _0xe0ada2
              } = await Promise.resolve().then(function () {
                return _0x1cddb8;
              });
              _0xe0ada2(_0x153449.value);
            }
          }
        }
      }
    });
    _0x143795.addEventListener("input", _0x318139 => {
      const _0x5d07f4 = _0x318139.target;
      if (!_0x5d07f4) {
        return;
      }
      (_0x5d07f4.id === "qa-box-count" || _0x5d07f4.id === "qa-fish-count") && _0x2dfb9a();
    });
    document.getElementById("qa-menu-toggle")?.["addEventListener"]("click", () => {
      {
        _0x3b7778.menuCollapsed = !_0x3b7778.menuCollapsed;
        localStorage.setItem(_0x1f16b, String(_0x3b7778.menuCollapsed));
        _0x2de51e && _0x2de51e.classList.toggle("collapsed", _0x3b7778.menuCollapsed);
      }
    });
    _0x52d93c(_0x66e475);
    _0x2ff785();
    _0x27f714();
    _0x3e9457();
    _0x5b8e76("--");
    _0x273e27();
    _0x706a3a();
    setTimeout(() => _0x36b6ce(), 100);
    console.log("岚山 v2.2.1");
  };
  const _0x52d93c = _0x518b73 => {
    {
      _0x3b7778.activePage = _0x518b73;
      const _0x2d1b53 = document.getElementById("qa-panel");
      if (!_0x2d1b53) {
        return;
      }
      _0x2d1b53.querySelectorAll(".menu-item").forEach(_0x59a1e1 => {
        _0x59a1e1.classList.toggle("active", _0x59a1e1.getAttribute("data-page") === _0x518b73);
      });
      _0x2d1b53.querySelectorAll(".page-content").forEach(_0x4ee47c => {
        {
          _0x4ee47c.classList.toggle("active", _0x4ee47c.id === "page-" + _0x518b73);
        }
      });
      _0x419628(_0x518b73);
    }
  };
  const _0x419628 = async _0x575843 => {
    try {
      {
        switch (_0x575843) {
          case "daily":
            {
              const _0x3b79f5 = await _0xb1beb7("role_getroleinfo", {});
              const _0x95a329 = _0x3b79f5?.["role"] || _0x3b79f5;
              _0x3b7778.roleInfo = _0x95a329;
              _0x3b7778.items = _0x95a329?.["items"] || {};
              _0x3b7778.roleId = _0x95a329?.["id"] || _0x95a329?.["roleId"] || _0x3b7778.roleId || null;
              _0x21c040(_0x3b7778.items);
              _0x261390();
              _0x2dfb9a();
              _0x7a0167(_0x95a329);
              _0x3b617d(_0x95a329);
              _0x756056(_0x95a329);
              if (_0x3b7778.roleId) {
                _0x14579c();
              }
              const {
                refreshTeamInfo: _0x2417bc
              } = await Promise.resolve().then(function () {
                return _0x2c3860;
              });
              const _0x45e471 = {
                silent: true
              };
              await _0x2417bc(_0x45e471);
              break;
            }
          case "toolbox":
            {
              const _0x7116d3 = await _0xb1beb7("role_getroleinfo", {});
              const _0x6a1cc4 = _0x7116d3?.["role"] || _0x7116d3;
              _0x3b7778.roleInfo = _0x6a1cc4;
              _0x3b7778.items = _0x6a1cc4?.["items"] || {};
              _0x3b7778.roleId = _0x6a1cc4?.["id"] || _0x6a1cc4?.["roleId"] || _0x3b7778.roleId || null;
              _0x21c040(_0x3b7778.items);
              _0x2687e1(document.getElementById("page-toolbox") || document);
              _0x261390();
              _0x2dfb9a();
              break;
            }
          case "tower":
            {
              const _0x25f0fc = await _0xb1beb7("tower_getinfo", {});
              _0x12f1cf(_0x25f0fc);
              break;
            }
          case "club":
            {
              {
                const {
                  fetchClubInfo: _0x347de3
                } = await Promise.resolve().then(function () {
                  return _0x506479;
                });
                const {
                  initSaltMatchDate: _0x54238a
                } = await Promise.resolve().then(function () {
                  {
                    return _0x13639f;
                  }
                });
                const {
                  initBattleDate: _0x5e164d
                } = await Promise.resolve().then(function () {
                  {
                    return _0x5a4f62;
                  }
                });
                _0x347de3();
                _0x54238a();
                _0x5e164d();
                break;
              }
            }
          case "activity":
            {
              {
                const _0x2d2c20 = await _0x44db56();
                if (_0x2d2c20) {
                  _0x16a9ea();
                }
                await _0x4c374d();
                _0x53786f();
                _0x5a9119();
                break;
              }
            }
        }
      }
    } catch (_0x17b8c1) {}
  };
  const _0x512da6 = () => {
    _0x1e70cb();
    const _0x527932 = localStorage.getItem(_0x47d6e1);
    if (_0x527932) {
      _0x3b7778.theme = _0x527932;
    }
    const _0x34df9a = localStorage.getItem(_0x1f16b);
    if (_0x34df9a) {
      {
        _0x3b7778.menuCollapsed = _0x34df9a === "true";
      }
    } else {
      window.innerWidth <= 768 && (_0x3b7778.menuCollapsed = true);
    }
    _0x207f33();
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _0x512da6) : _0x512da6();
})();