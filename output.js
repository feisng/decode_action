//Wed Jan 28 2026 03:13:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function () {
  "use strict";
  let T0 = null;
  const T1 = {
    name: "诸葛亮",
    type: "蜀国",
    avatar: "/team/zhugeliang.png"
  };
  const T2 = {
    name: "周瑜",
    type: "吴国",
    avatar: "/team/zhouyu.png"
  };
  const T3 = {
    name: "孙策",
    type: "吴国",
    avatar: "/team/sunce.png"
  };
  const T4 = {
    name: "张飞",
    type: "蜀国",
    avatar: "/team/zhangfei.png"
  };
  const T5 = {
    name: "貂蝉",
    type: "群雄",
    avatar: "/team/diaochan.png"
  };
  const T6 = {
    name: "董卓",
    type: "群雄",
    avatar: "/team/dongzhuo.png"
  };
  const T7 = {
    name: "马岱",
    type: "蜀国",
    avatar: "/team/madai.png"
  };
  const T8 = {
    name: "黄盖",
    type: "吴国",
    avatar: "/team/huanggai.png"
  };
  const T9 = {
    name: "袁绍",
    type: "群雄",
    avatar: "/team/yuanshao.png"
  };
  const TP = {
    name: "华雄",
    type: "群雄",
    avatar: "/team/huaxiong.png"
  };
  const TD = {
    name: "周泰",
    type: "吴国",
    avatar: "/team/zhoutai.png"
  };
  const Tv = {
    name: "于禁",
    type: "魏国",
    avatar: "/team/yujin.png"
  };
  const TB = {
    name: "关银屏",
    type: "蜀国",
    avatar: "/team/guanyinping.png"
  };
  const Tz = {
    name: "陆绩",
    type: "吴国",
    avatar: "/team/luji.png"
  };
  const TS = {
    length: 24
  };
  const TT = {
    length: 7
  };
  const TR = new Proxy({}, {
    get: (Ib, II) => T0?.[II],
    set: (Ib, II, If) => (T0 && (T0[II] = If), true),
    has: (Ib, II) => !!T0 && II in T0,
    ownKeys: () => T0 ? Object.keys(T0) : [],
    getOwnPropertyDescriptor: (Ib, II) => T0 && II in T0 ? {
      enumerable: true,
      configurable: true,
      value: T0[II]
    } : undefined
  });
  const TZ = "http://14.103.234.187/api";
  const TU = TZ;
  const TN = "qa-theme";
  const Tu = "qa-menu-collapsed";
  const TF = "qa-orb-position";
  const Tp = Ib => Ib ? "qa-schedule-config-" + Ib : "qa-schedule-config";
  const TV = Ib => Ib ? "qa-schedule-logs-" + Ib : "qa-schedule-logs";
  const TJ = Ib => Ib ? "qa-legacy-gift-config-" + Ib : "qa-legacy-gift-config";
  const TH = Ib => Ib ? "qa_auth_token_" + Ib : "qa_auth_token";
  const Th = Ib => Ib ? "qa_donation_records_" + Ib : "qa_donation_records";
  const TO = Ib => Ib ? "qa_donation_total_" + Ib : "qa_donation_total";
  const Tj = 590925069;
  const Tq = TZ + "/donation";
  const Tw = "https://xyzw222.eu.cc/xyzw/assets";
  const Tb = "3.2.1";
  const TI = {
    1: "攻击",
    2: "血量",
    3: "防御",
    4: "速度",
    5: "破甲",
    6: "破甲抵抗",
    7: "精准",
    8: "格挡",
    9: "减伤",
    10: "暴击",
    11: "暴击抵抗",
    12: "爆伤",
    13: "爆伤抵抗",
    14: "技能伤害",
    15: "免控",
    16: "眩晕免疫",
    17: "冰冻免疫",
    18: "沉默免疫",
    19: "流血免疫",
    20: "中毒免疫",
    21: "灼烧免疫"
  };
  const Tf = {
    101: {
      name: "司马懿",
      type: "魏国",
      avatar: "/team/simayi.png"
    },
    102: {
      name: "郭嘉",
      type: "魏国",
      avatar: "/team/guojia.png"
    },
    103: {
      name: "关羽",
      type: "蜀国",
      avatar: "/team/guanyu.png"
    },
    104: T1,
    105: T2,
    106: {
      name: "太史慈",
      type: "吴国",
      avatar: "/team/taishici.png"
    },
    107: {
      name: "吕布",
      type: "群雄",
      avatar: "/team/lvbu.png"
    },
    108: {
      name: "华佗",
      type: "群雄",
      avatar: "/team/huatuo.png"
    },
    109: {
      name: "甄姬",
      type: "魏国",
      avatar: "/team/zhenji.png"
    },
    110: {
      name: "黄月英",
      type: "蜀国",
      avatar: "/team/huangyueying.png"
    },
    111: T3,
    112: {
      name: "贾诩",
      type: "群雄",
      avatar: "/team/jiaxu.png"
    },
    113: {
      name: "曹仁",
      type: "魏国",
      avatar: "/team/caoren.png"
    },
    114: {
      name: "姜维",
      type: "蜀国",
      avatar: "/team/jiangwei.png"
    },
    115: {
      name: "孙坚",
      type: "吴国",
      avatar: "/team/sunjian.png"
    },
    116: {
      name: "公孙瓒",
      type: "群雄",
      avatar: "/team/gongsunzan.png"
    },
    117: {
      name: "典韦",
      type: "魏国",
      avatar: "/team/dianwei.png"
    },
    118: {
      name: "赵云",
      type: "蜀国",
      avatar: "/team/zhaoyun.png"
    },
    119: {
      name: "大乔",
      type: "吴国",
      avatar: "/team/daqiao.png"
    },
    120: {
      name: "张角",
      type: "群雄",
      avatar: "/team/zhangjiao.png"
    },
    201: {
      name: "徐晃",
      type: "魏国",
      avatar: "/team/xuhuang.png"
    },
    202: {
      name: "荀彧",
      type: "魏国",
      avatar: "/team/xunyu.png"
    },
    203: {
      name: "小典韦",
      type: "魏国",
      avatar: "/team/xiaodianwei.png"
    },
    204: T4,
    205: {
      name: "小赵云",
      type: "蜀国",
      avatar: "/team/xiaozhaoyun.png"
    },
    206: {
      name: "庞统",
      type: "蜀国",
      avatar: "/team/pangtong.png"
    },
    207: {
      name: "鲁肃",
      type: "吴国",
      avatar: "/team/lusu.png"
    },
    208: {
      name: "陆逊",
      type: "吴国",
      avatar: "/team/luxun.png"
    },
    209: {
      name: "甘宁",
      type: "吴国",
      avatar: "/team/ganning.png"
    },
    210: T5,
    211: T6,
    212: {
      name: "小张角",
      type: "群雄",
      avatar: "/team/xiaozhangjiao.png"
    },
    213: {
      name: "张辽",
      type: "魏国",
      avatar: "/team/zhangliao.png"
    },
    214: {
      name: "夏侯惇",
      type: "魏国",
      avatar: "/team/xiahoudun.png"
    },
    215: {
      name: "许褚",
      type: "魏国",
      avatar: "/team/xuzhu.png"
    },
    216: {
      name: "夏侯渊",
      type: "魏国",
      avatar: "/team/xiahouyuan.png"
    },
    217: {
      name: "魏延",
      type: "蜀国",
      avatar: "/team/weiyan.png"
    },
    218: {
      name: "黄忠",
      type: "蜀国",
      avatar: "/team/huangzhong.png"
    },
    219: {
      name: "马超",
      type: "蜀国",
      avatar: "/team/machao.png"
    },
    220: T7,
    221: {
      name: "吕蒙",
      type: "吴国",
      avatar: "/team/lvmeng.png"
    },
    222: T8,
    223: {
      name: "蔡文姬",
      type: "魏国",
      avatar: "/team/caiwenji.png"
    },
    224: {
      name: "小乔",
      type: "吴国",
      avatar: "/team/xiaoqiao.png"
    },
    225: T9,
    226: TP,
    227: {
      name: "颜良",
      type: "群雄",
      avatar: "/team/yanliang.png"
    },
    228: {
      name: "文丑",
      type: "群雄",
      avatar: "/team/wenchou.png"
    },
    301: TD,
    302: {
      name: "许攸",
      type: "魏国",
      avatar: "/team/xuyou.png"
    },
    303: Tv,
    304: {
      name: "张星彩",
      type: "蜀国",
      avatar: "/team/zhangxingcai.png"
    },
    305: TB,
    306: {
      name: "关平",
      type: "蜀国",
      avatar: "/team/guanping.png"
    },
    307: {
      name: "程普",
      type: "吴国",
      avatar: "/team/chengpu.png"
    },
    308: {
      name: "张昭",
      type: "吴国",
      avatar: "/team/zhangzhao.png"
    },
    309: Tz,
    310: {
      name: "吕玲绮",
      type: "群雄",
      avatar: "/team/lvlingqi.png"
    },
    311: {
      name: "潘凤",
      type: "群雄",
      avatar: "/team/panfeng.png"
    },
    312: {
      name: "邢道荣",
      type: "群雄",
      avatar: "/team/xingdaorong.png"
    },
    313: {
      name: "祝融夫人",
      type: "群雄",
      avatar: "/team/zhurongfuren.png"
    },
    314: {
      name: "孟获",
      type: "群雄",
      avatar: "/team/menghuo.png"
    }
  };
  const TK = {
    1: "#8e8e93",
    2: "#34c759",
    3: "#007aff",
    4: "#af52de",
    5: "#ff9500",
    6: "#ff3b30"
  };
  const TW = {
    1: "登录一次游戏",
    2: "分享一次游戏",
    3: "赠送好友金币",
    4: "招募英雄",
    5: "挂机加钟",
    6: "免费点金",
    7: "开启宝箱",
    12: "黑市采购",
    13: "竞技场战斗",
    14: "领取盐罐奖励"
  };
  const TC = {
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
  const Ty = "daily";
  const TY = [{
    id: "daily",
    label: "日常任务",
    icon: "📋"
  }, {
    id: "club",
    label: "俱乐部",
    icon: "🏠"
  }, {
    id: "activity",
    label: "活动助手",
    icon: "🎯"
  }, {
    id: "toolbox",
    label: "工具箱",
    icon: "🔧"
  }, {
    id: "schedule",
    label: "定时任务",
    icon: "⏰"
  }, {
    id: "rank",
    label: "榜单",
    icon: "🏆"
  }, {
    id: "spar",
    label: "切磋",
    icon: "⚡"
  }, {
    id: "changelog",
    label: "更新日志",
    icon: "📝"
  }];
  const Tm = () => {
    try {
      {
        const II = localStorage.getItem("qa-menu-order");
        if (II) {
          const If = JSON.parse(II);
          if (Array.isArray(If) && If.length === TY.length) {
            const IK = TY.map(IW => IW.id);
            if (If.every(IW => IK.includes(IW))) {
              return If;
            }
          }
        }
      }
    } catch (IC) {}
    return TY.map(Iy => Iy.id);
  };
  const TE = Tm();
  const TX = "<svg class=\"card-collapse-icon\" viewBox=\"0 0 24 24\"><path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"/></svg>";
  const TG = {
    daily: () => "\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"team\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">当前阵容</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <div class=\"team-selector\" id=\"qa-team-selector\">\n          <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">点击展开加载</span>\n        </div>\n        <button class=\"btn btn-secondary btn-small\" data-action=\"team-refresh\">刷新</button>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-team-heroes\" class=\"team-heroes-container\">\n        <div class=\"helper-text\">展开卡片自动加载阵容数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"daily-fix\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">每日任务补差</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <label class=\"task-check\" style=\"margin:0;\">\n          <input type=\"checkbox\" id=\"qa-daily-select-all\">\n          <span>全选</span>\n        </label>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n        <button class=\"btn btn-success\" data-action=\"daily-fix\">一键补差</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-daily-fix-progress\" style=\"margin-bottom:10px;\">--</div>\n      <div class=\"task-grid\">\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"share\" checked><span>分享游戏</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"friend\" checked><span>赠送好友金币</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"recruit\" checked><span>招募英雄</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"hangup\" checked><span>挂机奖励</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"buygold\" checked><span>免费点金</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"openbox\" checked><span>开启宝箱</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"blackmarket\" checked><span>黑市采购</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"arena\" checked><span>竞技场战斗</span></label>\n        <label class=\"task-check\" style=\"display:flex;align-items:center;gap:4px;\">\n          <input type=\"checkbox\" data-task=\"legionboss\" checked>\n          <span>俱乐部BOSS</span>\n          <select id=\"qa-legionboss-count\" style=\"width:50px;padding:2px 4px;font-size:12px;border-radius:4px;border:1px solid var(--border-color);\">\n            <option value=\"0\">0次</option>\n            <option value=\"1\">1次</option>\n            <option value=\"2\" selected>2次</option>\n            <option value=\"3\">3次</option>\n            <option value=\"4\">4次</option>\n          </select>\n        </label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"dailyboss\" checked><span>每日BOSS</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"bottle\" checked><span>盐罐助手</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"treasure\" checked><span>珍宝阁</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"signin\" checked><span>签到奖励</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"fish\" checked><span>免费钓鱼</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"mail\" checked><span>领取邮件</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"genie\" checked><span>灯神扫荡</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"deepsea\" checked><span>深海扫荡</span></label>\n        <label class=\"task-check\"><input type=\"checkbox\" data-task=\"sweepticket\" checked><span>领取扫荡券</span></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"daily-status\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">每日任务执行情况</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"daily-refresh\">刷新</button>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-daily-detail\"><div class=\"helper-text\">展开卡片自动加载任务数据</div></div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"hangup\">\n    <div class=\"card-header\"><span class=\"card-title\">挂机加钟</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">已挂机</span>\n          <span class=\"stat-value\" id=\"qa-hangup-elapsed\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时长</span>\n          <span class=\"stat-value\" id=\"qa-hangup-time\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"addtime-run\">加钟</button>\n        <button class=\"btn btn-success\" data-action=\"hangup-claim\">领取奖励</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"bottle\">\n    <div class=\"card-header\"><span class=\"card-title\">盐罐机器人</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">状态</span>\n          <span class=\"stat-value\" id=\"qa-bottle-status\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时间</span>\n          <span class=\"stat-value\" id=\"qa-bottle-time\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"bottle-restart\" id=\"qa-bottle-restart-btn\">重启服务</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"legacy\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">功法绝学</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">已探寻时间</span>\n          <span class=\"stat-value\" id=\"qa-legacy-elapsed\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">残卷数量</span>\n          <span class=\"stat-value\" id=\"qa-legacy-scroll-count\">--</span>\n        </div>\n      </div>\n      <div class=\"form-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-primary\" data-action=\"legacy-claim\">领取残卷</button>\n        <span class=\"form-label\">目标ID</span>\n        <input class=\"input\" id=\"qa-legacy-target-id\" type=\"text\" placeholder=\"输入目标ID\" style=\"width:100px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"legacy-query\">查询</button>\n        <span class=\"form-label\">数量</span>\n        <input class=\"input\" id=\"qa-legacy-gift-count\" type=\"number\" placeholder=\"全部\" min=\"0\" style=\"width:70px;\">\n        <button class=\"btn btn-success\" data-action=\"legacy-sendgift\">赠送</button>\n      </div>\n\n      <!-- 目标信息区域 -->\n      <div id=\"qa-legacy-target-info\" style=\"display:none;margin:8px 0;padding:10px;background:var(--card-bg);border-radius:8px;border:1px solid var(--border-color);\">\n        <div style=\"display:flex;align-items:center;gap:10px;margin-bottom:8px;\">\n          <div style=\"width:40px;height:40px;border-radius:50%;background:#e5e5e5;overflow:hidden;\">\n            <img id=\"qa-legacy-avatar-img\" style=\"width:100%;height:100%;object-fit:cover;display:none;\">\n          </div>\n          <div style=\"flex:1;\">\n            <div style=\"font-weight:bold;\" id=\"qa-legacy-target-name\">--</div>\n            <div style=\"font-size:11px;color:var(--text-secondary);\" id=\"qa-legacy-target-server\">--</div>\n          </div>\n        </div>\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">战力</span>\n            <span class=\"stat-value\" id=\"qa-legacy-target-power\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">俱乐部</span>\n            <span class=\"stat-value\" id=\"qa-legacy-target-legion\">--</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- 密码验证区域 -->\n      <div id=\"qa-legacy-password-row\" class=\"form-row\" style=\"display:none;margin-top:8px;\">\n        <span class=\"form-label\">二级密码</span>\n        <input class=\"input\" id=\"qa-legacy-password\" type=\"password\" placeholder=\"输入二级密码\" style=\"width:120px;\">\n        <button class=\"btn btn-primary btn-small\" data-action=\"legacy-verify-password\">验证</button>\n        <span class=\"helper-text\" id=\"qa-legacy-password-status\" style=\"display:none;color:#34c759;\">已验证</span>\n      </div>\n\n      <div class=\"helper-text\" id=\"qa-legacy-status\" style=\"margin-top:8px;\">点击按钮领取或赠送残卷</div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible data-card-id=\"torch\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">火把助手</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">使用状态</span>\n          <span class=\"stat-value\" id=\"qa-torch-status\">未使用</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">剩余时间</span>\n          <span class=\"stat-value\" id=\"qa-torch-remaining\" style=\"font-family:monospace;\">--:--:--</span>\n        </div>\n      </div>\n\n      <input type=\"hidden\" id=\"qa-torch-itemid\" value=\"1008\">\n      <div class=\"qa-option-grid\" id=\"qa-torch-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-torch-option selected\" role=\"button\" tabindex=\"0\" data-itemid=\"1008\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" src=\"https://xxz-xyzw-res.hortorgames.com/remote/icons/native/31/3189f271-d0e2-4778-b54a-291740ed0381.7a511.png\" alt=\"木火把\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">木火把</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" id=\"qa-torch-wood-count\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-torch-option\" role=\"button\" tabindex=\"0\" data-itemid=\"1009\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" src=\"https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b6/b6cba2a8-f0db-4b15-96b5-5e6b918523db.7aadf.png\" alt=\"青铜火把\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">青铜火把</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" id=\"qa-torch-bronze-count\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-torch-option\" role=\"button\" tabindex=\"0\" data-itemid=\"1010\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" src=\"https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e4/e4f766de-fb90-4961-8b22-cc2fbc269f60.b0dbf.png\" alt=\"咸神火把\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">咸神火把</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" id=\"qa-torch-golden-count\">--</span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <span class=\"form-label\">数量</span>\n        <input class=\"input\" id=\"qa-torch-quantity\" type=\"number\" value=\"1\" min=\"1\" style=\"width:80px;\">\n        <button class=\"btn btn-primary\" data-action=\"torch-use\">使用火把</button>\n      </div>\n\n      <div class=\"helper-text\" id=\"qa-torch-message\">展开卡片自动加载火把数据</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸将塔</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"energy-badge\" id=\"qa-tower-energy-badge\">体力: <span id=\"qa-tower-energy\">--</span></span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"tower-floor-display\" style=\"background:var(--card-bg);border-radius:8px;padding:16px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;\">\n        <span style=\"color:var(--text-secondary);font-size:13px;\">当前层数</span>\n        <span style=\"font-size:18px;font-weight:600;font-family:monospace;color:var(--text-primary);\"><span id=\"qa-tower-floor\">--</span> - <span id=\"qa-tower-layer\">--</span></span>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"tower-loop\" id=\"qa-tower-loop-btn\">开始爬塔</button>\n        <button class=\"btn btn-danger\" data-action=\"tower-stop\" id=\"qa-tower-stop-btn\">停止爬塔</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-tower-status\" style=\"margin-top:8px;\">展开卡片自动加载数据</div>\n    </div>\n  </div>\n",
    club: () => "\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"club-info\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部信息</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-club-status\">未加入</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-secondary\" data-action=\"club-info\">刷新</button>\n        <button class=\"btn btn-success\" data-action=\"club-signin\">俱乐部签到</button>\n        <button class=\"btn btn-primary\" data-action=\"club-export\">导出图片</button>\n      </div>\n      <div id=\"qa-club-content\">\n        <div class=\"helper-text\">展开卡片自动加载俱乐部信息</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"car\">\n    <div class=\"card-header\"><span class=\"card-title\">疯狂赛车</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-secondary\" data-action=\"car-info\">刷新数据</button>\n        <button class=\"btn btn-primary\" data-action=\"car-smart-send\" data-long-press-info=\"智能发车策略：&#10;• 仅周一至周三 6:00-20:00 可用&#10;• 每日最多发车 4 次&#10;&#10;发车标准：&#10;• 刷新券≥6张：只发红色以上/含4张刷新券奖励/含大奖的车&#10;• 刷新券<6张：发橙色以上/含2张刷新券奖励/含大奖的车&#10;&#10;刷新逻辑：&#10;• 有免费刷新时会先刷新&#10;• 刷新券充足时持续刷新直到达标\" title=\"智能发车策略：&#10;• 仅周一至周三 6:00-20:00 可用&#10;• 每日最多发车 4 次&#10;&#10;发车标准：&#10;• 刷新券≥6张：只发红色以上/含4张刷新券奖励/含大奖的车&#10;• 刷新券<6张：发橙色以上/含2张刷新券奖励/含大奖的车&#10;&#10;刷新逻辑：&#10;• 有免费刷新时会先刷新&#10;• 刷新券充足时持续刷新直到达标\">智能发车</button>\n        <button class=\"btn btn-primary\" data-action=\"car-one-click-send\">一键发车</button>\n        <button class=\"btn btn-success\" data-action=\"car-claim-all\">一键收车</button>\n        <button class=\"btn btn-icon\" data-action=\"car-settings\" title=\"发车条件设置\" style=\"padding:4px 8px;\">\n          <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z\"/></svg>\n        </button>\n      </div>\n      <div id=\"qa-car-content\">\n        <div class=\"helper-text\">展开卡片自动加载车辆信息</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"salt-match\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场匹配详情</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-salt-match-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n        <span class=\"helper-text\" style=\"margin:0;\">(周六/周日)</span>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"salt-match-query\">查询</button>\n        <button class=\"btn btn-secondary\" data-action=\"salt-match-sort-red\">红淬排序</button>\n        <button class=\"btn btn-secondary\" data-action=\"salt-match-sort-score\">积分排序</button>\n        <button class=\"btn btn-success\" data-action=\"salt-match-export\">导出图片</button>\n      </div>\n      <div id=\"qa-salt-match-content\">\n        <div class=\"helper-text\">选择日期后点击\"查询\"加载盐场匹配数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"peachtree\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">蟠桃园统计</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-peachtree-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n      </div>\n\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"peachtree-battle\">查询战绩</button>\n        <button class=\"btn btn-primary\" data-action=\"peachtree-opponent\">查询对手信息</button>\n        <button class=\"btn btn-success\" data-action=\"peachtree-combined-export\">导出图片</button>\n      </div>\n      <div id=\"qa-peachtree-content\">\n        <div class=\"helper-text\">选择日期后点击按钮查询</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"battle-records\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场战绩</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">查询日期</span>\n        <input class=\"input\" id=\"qa-battle-date\" type=\"text\" placeholder=\"YYYY/MM/DD\" style=\"width:120px;\">\n        <span class=\"helper-text\" style=\"margin:0;\">(周六/周日)</span>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"battle-records-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"battle-records-export\">导出图片</button>\n      </div>\n      <div id=\"qa-battle-records-content\">\n        <div class=\"helper-text\">选择日期后点击\"查询\"加载盐场战绩</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"history-records\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部历史战绩</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"history-records-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"history-records-export\">导出图片</button>\n      </div>\n      <div id=\"qa-history-records-content\">\n        <div class=\"helper-text\">点击\"查询\"加载俱乐部历史战绩</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"salt-map\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">盐场地图导出</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"time-status-badge unavailable\" id=\"qa-salt-map-time-status\">仅周六可用</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"salt-map-export\">导出地图</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-bottom:8px;font-size:11px;color:#9ca3af;\">\n        <strong>功能说明：</strong><br>\n        • 周六 19:55-21:30：导出真实战场地图<br>\n        • 其他时间：导出 Mock 数据地图（99个建筑）<br>\n        • 导出分辨率：标准清晰度（约 7030x5300 像素）\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"club-casualties\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">俱乐部全局战损查询</span>\n      " + TX + "\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"casualties-query\">查询战损</button>\n        <button class=\"btn btn-success\" data-action=\"casualties-export\">导出图片</button>\n      </div>\n      <div id=\"qa-casualties-content\">\n        <div class=\"helper-text\">点击\"查询战损\"获取所有俱乐部战损数据（需在盐场战斗期间）</div>\n      </div>\n    </div>\n  </div>\n",
    activity: () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\">\n      <span class=\"card-title\">每周答题</span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"study-start\">开始答题</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-study-status\">点击按钮开始答题</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"consumption\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">消耗活动监控</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-consumption-badge\">未开放</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">普通道具</span>\n          <span class=\"stat-value\" id=\"qa-consumption-normal-item\">0</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">黄金道具</span>\n          <span class=\"stat-value\" id=\"qa-consumption-gold-item\">0</span>\n        </div>\n      </div>\n      <div class=\"form-row\" style=\"margin-bottom:10px;\">\n        <span class=\"form-label\">使用数量</span>\n        <input class=\"input\" id=\"qa-consumption-number\" type=\"number\" value=\"4\" min=\"1\" max=\"100\" style=\"width:80px;\">\n        <button class=\"btn btn-success btn-small\" data-action=\"consumption-open\">打开普通道具</button>\n      </div>\n      <div id=\"qa-consumption-content\">\n        <div class=\"helper-text\">展开卡片自动加载活动数据</div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-primary\" data-action=\"consumption-info\">刷新进度</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"monthly\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">月度任务补差</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-monthly-status\">--</span>\n        <span class=\"helper-text\" id=\"qa-monthly-days\" style=\"margin:0;font-size:11px;\">--</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">钓鱼进度</span>\n          <div id=\"qa-monthly-fish\" style=\"display:flex;flex-direction:column;align-items:flex-end;\">\n            <span class=\"stat-value\">-- / 320</span>\n            <span class=\"stat-sub\" style=\"font-size:10px;color:var(--text-secondary);\">--</span>\n          </div>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">竞技场进度</span>\n          <div id=\"qa-monthly-arena\" style=\"display:flex;flex-direction:column;align-items:flex-end;\">\n            <span class=\"stat-value\">-- / 240</span>\n            <span class=\"stat-sub\" style=\"font-size:10px;color:var(--text-secondary);\">--</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-secondary\" id=\"qa-monthly-refresh-btn\" data-action=\"monthly-refresh\">刷新进度</button>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n        <button class=\"btn btn-primary\" id=\"qa-monthly-fish-btn\" data-action=\"monthly-fish-topup\">钓鱼补齐</button>\n        <button class=\"btn btn-secondary btn-small\" id=\"qa-monthly-fish-complete-btn\" data-action=\"monthly-fish-complete\" title=\"一键完成到满额\">满额</button>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" id=\"qa-monthly-arena-btn\" data-action=\"monthly-arena-topup\">竞技场补齐</button>\n        <button class=\"btn btn-secondary btn-small\" id=\"qa-monthly-arena-complete-btn\" data-action=\"monthly-arena-complete\" title=\"一键完成到满额\">满额</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">补齐规则：让\"当前天数比例\"和\"完成比例\"一致</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"boss-tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸王宝库</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-bosstower-status\">--</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-bosstower-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>活动时间：周三 ~ 周日</p>\n      </div>\n      <div id=\"qa-bosstower-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">当前层数</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-floor\">第 1 层</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">普通钻头</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-drill\">0 / 10</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">付费钻头</span>\n            <span class=\"stat-value\" id=\"qa-bosstower-paid-drill\">0</span>\n          </div>\n        </div>\n        <div class=\"info-row\" style=\"display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border-color);margin-bottom:10px;\">\n          <span style=\"color:var(--text-secondary);\">门状态</span>\n          <span id=\"qa-bosstower-door\">--</span>\n        </div>\n        <div id=\"qa-bosstower-rewards\" style=\"display:none;margin-bottom:10px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n        </div>\n        <div class=\"btn-row\" style=\"align-items:center;\">\n          <button class=\"btn btn-secondary\" data-action=\"bosstower-refresh\">刷新</button>\n          <button class=\"btn btn-primary\" id=\"qa-bosstower-action-btn\" data-action=\"bosstower-execute\">攻打Boss</button>\n          <label class=\"task-check\" style=\"margin:0;margin-left:8px;white-space:nowrap;\">\n            <input type=\"checkbox\" id=\"qa-bosstower-use-paid-drill\">\n            <span style=\"font-size:12px;\">用付费钻头</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">自动攻打Boss/门并领取最高价值奖励</div>\n\n      <div style=\"margin-top:16px;padding-top:16px;border-top:1px solid var(--border-color);\">\n        <div style=\"font-weight:500;margin-bottom:10px;color:var(--text-primary);\">宝库助战</div>\n        <div class=\"task-grid\" style=\"margin-bottom:10px;\">\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"below_7\"><span>7层以下</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"7\"><span>7层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"8\"><span>8层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"10\"><span>10层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"11\"><span>11层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"13\"><span>13层</span></label>\n          <label class=\"task-check\"><input type=\"checkbox\" name=\"treasure-level\" value=\"14\"><span>14层</span></label>\n        </div>\n        <div class=\"form-row\" style=\"margin-bottom:10px;\">\n          <label class=\"task-check\" style=\"margin:0;\">\n            <input type=\"checkbox\" id=\"treasure-switch\">\n            <span>助战前切换阵容</span>\n          </label>\n          <select id=\"treasure-team\" disabled class=\"input\" style=\"width:80px;\">\n            <option value=\"1\">阵容1</option>\n            <option value=\"2\">阵容2</option>\n            <option value=\"3\">阵容3</option>\n            <option value=\"4\">阵容4</option>\n            <option value=\"5\">阵容5</option>\n            <option value=\"6\">阵容6</option>\n          </select>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n          <button class=\"btn btn-primary\" id=\"treasure-start-btn\">开始助战</button>\n          <span id=\"treasure-help-info\" style=\"font-size:12px;color:var(--text-secondary);margin-left:8px;\">助战值: -- | 剩余: --</span>\n        </div>\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">已尝试</span>\n            <span class=\"stat-value\" id=\"treasure-attempted\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">成功</span>\n            <span class=\"stat-value\" id=\"treasure-success\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">失败</span>\n            <span class=\"stat-value\" id=\"treasure-fail\">0</span>\n          </div>\n        </div>\n        <div id=\"treasure-log\" style=\"padding:8px;font-size:11px;background:var(--card-bg);border-radius:4px;max-height:120px;overflow-y:auto;\">等待开始...</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- 联网助战卡片由 coopAssist.js 的 getCoopAssistCardHtml() 动态生成 -->\n  <div id=\"qa-coop-assist-placeholder\"></div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"weird-tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">怪异塔</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-weird-tower-badge\">--</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-weird-tower-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>怪异塔暂未开放</p>\n        <p style=\"font-size:12px;margin-top:4px;\">活动时间：黑市周期间</p>\n      </div>\n      <div id=\"qa-weird-tower-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">当前层数</span>\n            <span class=\"stat-value\" id=\"qa-weird-tower-floor\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">剩余体力</span>\n            <span class=\"stat-value\" id=\"qa-weird-tower-energy\">-- / --</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">钥匙数量</span>\n            <span class=\"stat-value\" id=\"qa-weird-tower-keys\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-secondary\" data-action=\"weird-tower-refresh\">刷新</button>\n          <button class=\"btn btn-primary\" id=\"qa-weird-tower-climb-btn\" data-action=\"weird-tower-climb\">批量爬塔</button>\n          <button class=\"btn btn-danger\" data-action=\"weird-tower-stop\">停止爬塔</button>\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:8px;\">\n          <button class=\"btn btn-warning\" data-action=\"claim-free-keys\">领取钥匙</button>\n          <button class=\"btn btn-success\" id=\"qa-merge-box-btn\" data-action=\"merge-box-start\">智能开箱合成</button>\n          <button class=\"btn btn-danger\" data-action=\"merge-box-stop\">停止</button>\n        </div>\n        <div class=\"helper-text\" id=\"qa-weird-tower-status\" style=\"margin-top:8px;\">展开卡片自动加载数据</div>\n        <div class=\"helper-text\" id=\"qa-merge-box-status\" style=\"margin-top:4px;color:#6b7280;\">--</div>\n\n        <!-- 俱乐部怪异塔排名 -->\n        <div style=\"margin-top:12px;padding-top:12px;border-top:1px solid var(--border-color);\">\n          <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n            <span style=\"font-size:13px;font-weight:600;color:var(--text-primary);\">俱乐部排名</span>\n            <span id=\"qa-weird-tower-rank-status\" style=\"font-size:11px;color:var(--text-secondary);\">未查询</span>\n          </div>\n          <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n            <button class=\"btn btn-secondary\" data-action=\"weird-tower-rank-query\">查询排名</button>\n            <button class=\"btn btn-primary\" data-action=\"weird-tower-rank-export\">导出图片</button>\n          </div>\n          <div id=\"qa-weird-tower-rank-content\">\n            <div class=\"helper-text\">点击\"查询排名\"获取俱乐部成员怪异塔进度</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"skin-tower\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">换皮闯关</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-skin-towers-status\">--</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日挑战</span>\n          <span class=\"stat-value\" id=\"qa-skin-towers-count\">0 / 10</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日可挑战</span>\n          <span class=\"stat-value\" id=\"qa-skin-towers-boss-hint\">--</span>\n        </div>\n      </div>\n      <div id=\"qa-skin-towers-grid\" class=\"skin-towers-grid\">\n        <!-- 动态生成6个BOSS -->\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-secondary\" data-action=\"skin-towers-refresh\">刷新进度</button>\n      </div>\n      <div class=\"helper-text\" style=\"margin-top:8px;\">活动时间8-20点，周四全部BOSS开放</div>\n\n      <!-- 闯关抽奖区域 -->\n      <div style=\"margin-top:12px;padding-top:12px;border-top:1px solid var(--border-color);\">\n        <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n          <span style=\"font-size:13px;font-weight:600;color:var(--text-primary);\">闯关抽奖</span>\n          <span id=\"qa-skin-lottery-actid\" style=\"font-size:11px;color:var(--text-secondary);\">未获取</span>\n        </div>\n        <div class=\"stats-row\" style=\"margin-bottom:8px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">抽奖道具</span>\n            <span class=\"stat-value\" id=\"qa-skin-lottery-count\">0 个</span>\n          </div>\n          <div class=\"stat-item\">\n            <span id=\"qa-skin-lottery-status\" style=\"font-size:12px;\"></span>\n          </div>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" id=\"qa-skin-lottery-start\" data-action=\"skin-lottery-start\">开始抽奖</button>\n          <button class=\"btn btn-danger\" id=\"qa-skin-lottery-stop\" data-action=\"skin-lottery-stop\" style=\"display:none;\">停止抽奖</button>\n          <button class=\"btn btn-secondary\" id=\"qa-skin-lottery-refresh\" data-action=\"skin-lottery-refresh\">刷新道具</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"warguess\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">月度竞猜</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-warguess-status\">--</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-warguess-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>开放时间：每月最后一个星期日</p>\n        <p id=\"qa-warguess-next-date\" style=\"font-size:11px;margin-top:4px;\">--</p>\n      </div>\n      <div id=\"qa-warguess-content\">\n        <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">排名第一</span>\n            <span class=\"stat-value\" id=\"qa-warguess-top-legion\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">军团战力</span>\n            <span class=\"stat-value\" id=\"qa-warguess-top-power\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n          <button class=\"btn btn-secondary\" id=\"qa-warguess-refresh-btn\" data-action=\"warguess-refresh\">刷新排名</button>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-primary\" id=\"qa-warguess-start-btn\" data-action=\"warguess-start\">竞猜 (20金币)</button>\n          <button class=\"btn btn-success\" id=\"qa-warguess-coin-btn\" data-action=\"warguess-coin\">领取竞猜币</button>\n        </div>\n        <div class=\"helper-text\" style=\"margin-top:8px;\">自动竞猜排名第一的军团，投入20金币</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"dream\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">咸王梦境</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"club-status-badge\" id=\"qa-dream-status\">--</span>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-dream-inactive\" style=\"display:none;text-align:center;padding:12px;color:var(--text-secondary);\">\n        <p>活动时间：周三、周四、周日、周一</p>\n      </div>\n      <div id=\"qa-dream-content\">\n        <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n          <button class=\"btn btn-secondary\" data-action=\"dream-refresh-team\">获取默认队伍</button>\n          <button class=\"btn btn-primary\" data-action=\"dream-select-team\">选择梦境阵容</button>\n        </div>\n        <div class=\"form-row\" style=\"margin-bottom:10px;\">\n          <label class=\"task-check\" style=\"margin:0;\">\n            <input type=\"checkbox\" id=\"dream-stop-defeat\" checked>\n            <span>战斗失败自动停止</span>\n          </label>\n        </div>\n        <div id=\"dream-team-container\" style=\"margin-bottom:10px;\">\n          <div class=\"helper-text\">点击\"获取默认队伍\"加载阵容</div>\n        </div>\n        <div style=\"border-top:1px solid var(--border-color);padding-top:10px;margin-top:10px;\">\n          <div class=\"btn-row\" style=\"margin-bottom:10px;\">\n            <button class=\"btn btn-secondary\" data-action=\"dream-refresh-merchant\">刷新商店</button>\n            <button class=\"btn btn-primary\" data-action=\"dream-select-gold\">全选金币</button>\n            <button class=\"btn btn-success\" data-action=\"dream-buy-selected\">批量购买(<span id=\"dream-selected-count\">0</span>)</button>\n            <button class=\"btn btn-warning\" data-action=\"dream-buy-all-gold\">一键金币全买</button>\n          </div>\n          <div id=\"dream-merchant-container\" style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;\">\n            <div class=\"helper-text\">点击\"刷新商店\"加载商品</div>\n          </div>\n        </div>\n        <div style=\"font-weight:bold;margin-bottom:6px;\">日志</div>\n        <div id=\"dream-log-container\" style=\"height:150px;overflow-y:auto;background:var(--card-bg);border-radius:4px;padding:5px;font-size:10px;\"></div>\n      </div>\n    </div>\n  </div>\n",
    toolbox: () => "\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"box\">\n    <div class=\"card-header\"><span class=\"card-title\">宝箱助手</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">宝箱总积分</span>\n          <span class=\"stat-value\" id=\"qa-box-total-points\">--</span>\n        </div>\n      </div>\n      <input type=\"hidden\" id=\"qa-box-itemid\" value=\"2001\">\n      <div class=\"qa-option-grid\" id=\"qa-box-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-box-option selected\" role=\"button\" tabindex=\"0\" data-itemid=\"2001\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_mzbx\" alt=\"木质宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">木质宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2001\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2002\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_qtbx\" alt=\"青铜宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">青铜宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2002\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2003\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_hjbx\" alt=\"黄金宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">黄金宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2003\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-box-option\" role=\"button\" tabindex=\"0\" data-itemid=\"2004\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_box_bjbx\" alt=\"铂金宝箱\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">铂金宝箱</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-box-count-for=\"2004\">--</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">数量</span>\n        <input class=\"input\" id=\"qa-box-count\" type=\"number\" value=\"10\" min=\"10\" step=\"10\" style=\"width:80px;\">\n      </div>\n      <div class=\"qa-input-error\" id=\"qa-box-error\" style=\"display:none;\"></div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"box-open\" id=\"qa-box-open-btn\">开启宝箱</button>\n        <button class=\"btn btn-secondary\" data-action=\"box-claim\">领取积分</button>\n      </div>\n      <div class=\"helper-text\">数量需为10的倍数，且不超过库存</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"fish\">\n    <div class=\"card-header\"><span class=\"card-title\">钓鱼助手</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <input type=\"hidden\" id=\"qa-fish-type\" value=\"1\">\n      <div class=\"qa-option-grid\" id=\"qa-fish-grid\" style=\"margin-bottom:10px;\">\n        <div class=\"qa-option-item qa-fish-option selected\" role=\"button\" tabindex=\"0\" data-type=\"1\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_fish_ptyg\" alt=\"普通鱼竿\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">普通鱼竿</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-fish-count-for=\"1\">--</span></div>\n          </div>\n        </div>\n        <div class=\"qa-option-item qa-fish-option\" role=\"button\" tabindex=\"0\" data-type=\"2\">\n          <div class=\"qa-option-icon\">\n            <img class=\"qa-option-img\" data-res=\"qa_fish_hjyg\" alt=\"黄金鱼竿\">\n          </div>\n          <div class=\"qa-option-meta\">\n            <div class=\"qa-option-title\">黄金鱼竿</div>\n            <div class=\"qa-option-sub\">数量：<span class=\"qa-option-count\" data-fish-count-for=\"2\">--</span></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">次数</span>\n        <input class=\"input\" id=\"qa-fish-count\" type=\"number\" value=\"10\" min=\"10\" step=\"10\" style=\"width:80px;\">\n        <label class=\"task-check\" style=\"margin:0;\">\n          <input type=\"checkbox\" id=\"qa-fish-free\" checked>\n          <span>免费模式</span>\n        </label>\n      </div>\n      <div class=\"qa-input-error\" id=\"qa-fish-error\" style=\"display:none;\"></div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" data-action=\"fish-run\" id=\"qa-fish-run-btn\">开始钓鱼</button>\n      </div>\n      <div class=\"helper-text\">数量需为10的倍数，且不超过库存</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"arena\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">竞技场助手</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"arena-refresh\">刷新</button>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\" style=\"margin-bottom:10px;\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">咸神门票</span>\n          <span class=\"stat-value\" id=\"qa-arena-ticket\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">今日战斗</span>\n          <span class=\"stat-value\" id=\"qa-arena-fought\">--</span>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <span class=\"form-label\">战斗次数</span>\n        <input class=\"input\" id=\"qa-arena-times\" type=\"number\" value=\"3\" min=\"1\" max=\"10000\" style=\"width:100px;\">\n      </div>\n      <div class=\"btn-row\" style=\"margin-top:10px;\">\n        <button class=\"btn btn-primary\" data-action=\"arena-auto\" id=\"qa-arena-start-btn\">开始战斗</button>\n        <button class=\"btn btn-danger\" data-action=\"arena-stop\" id=\"qa-arena-stop-btn\" style=\"display:none;\">停止</button>\n      </div>\n      <div class=\"helper-text\" id=\"qa-arena-status\">点击刷新加载竞技场数据</div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"hero-upgrade\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">武将升级</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"hero-upgrade-refresh\">刷新</button>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\" style=\"flex-wrap:nowrap;\">\n        <span class=\"form-label\" style=\"flex-shrink:0;\">武将选择</span>\n        <div class=\"qa-autocomplete\" id=\"qa-hero-upgrade-autocomplete\" style=\"flex:1;min-width:0;\">\n          <input type=\"text\" class=\"input qa-autocomplete-input\" id=\"qa-hero-upgrade-input\" placeholder=\"输入武将名称搜索...\" autocomplete=\"off\">\n          <input type=\"hidden\" id=\"qa-hero-upgrade-select\" value=\"\">\n          <div class=\"qa-autocomplete-dropdown\" id=\"qa-hero-upgrade-dropdown\"></div>\n        </div>\n      </div>\n      <div id=\"qa-hero-upgrade-info\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\">\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">等级</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-level\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">攻击</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-attack\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">速度</span>\n            <span class=\"stat-value\" id=\"qa-hero-upgrade-speed\">--</span>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:10px;gap:4px;\">\n          <button class=\"btn btn-small active\" id=\"qa-hero-upgrade-mode-level\" data-action=\"hero-upgrade-mode\" data-mode=\"level\">目标等级</button>\n          <button class=\"btn btn-small\" id=\"qa-hero-upgrade-mode-speed\" data-action=\"hero-upgrade-mode\" data-mode=\"speed\">目标速度</button>\n        </div>\n        <div class=\"form-row\" style=\"margin-top:10px;\" id=\"qa-hero-upgrade-level-row\">\n          <span class=\"form-label\">目标等级</span>\n          <input type=\"number\" class=\"input\" id=\"qa-hero-upgrade-target\" placeholder=\"输入目标等级\" min=\"1\" max=\"6000\" style=\"width:120px;\">\n        </div>\n        <div class=\"form-row\" style=\"margin-top:10px;display:none;\" id=\"qa-hero-upgrade-speed-row\">\n          <span class=\"form-label\">目标速度</span>\n          <input type=\"number\" class=\"input\" id=\"qa-hero-upgrade-target-speed\" placeholder=\"输入目标速度\" min=\"1\" style=\"width:120px;\">\n        </div>\n        <div class=\"btn-row\" style=\"margin-top:10px;\">\n          <button class=\"btn btn-primary\" data-action=\"hero-upgrade-auto\" id=\"qa-hero-upgrade-auto-btn\">自动升级</button>\n          <button class=\"btn btn-danger\" data-action=\"hero-upgrade-stop\" id=\"qa-hero-upgrade-stop-btn\" style=\"display:none;\">停止升级</button>\n        </div>\n        <div class=\"helper-text\" id=\"qa-hero-upgrade-tip\">选择武将后可进行升级/进阶操作</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"quench\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">淬炼助手</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"quench-refresh\">刷新阵容</button>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">白玉</span>\n          <span class=\"stat-value\" id=\"qa-jade-count\">--</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">彩玉</span>\n          <span class=\"stat-value\" id=\"qa-color-jade-count\">--</span>\n        </div>\n      </div>\n      <div class=\"qa-hero-list\" id=\"qa-hero-list\">\n        <div class=\"qa-loading\">点击刷新加载阵容</div>\n      </div>\n      <div id=\"qa-equip-section\" style=\"display:none;\">\n        <div class=\"qa-equip-tabs\" id=\"qa-equip-tabs\"></div>\n      </div>\n      <div id=\"qa-quench-section\" style=\"display:none;\">\n        <div class=\"stats-row\" id=\"qa-equip-stats\"></div>\n        <div class=\"qa-slot-list\" id=\"qa-slot-list\"></div>\n\n        <!-- 密码验证区 -->\n        <div class=\"qa-password-section\" id=\"qa-password-section\">\n          <div class=\"helper-text\" style=\"margin:0 0 8px;\">二级密码验证（保护高价值淬炼操作）</div>\n          <div class=\"form-row\" style=\"margin-bottom:8px;\">\n            <input class=\"input\" id=\"qa-second-password\" type=\"password\" placeholder=\"请输入二级密码\" style=\"width:140px;\">\n            <button class=\"btn btn-primary btn-small\" id=\"qa-verify-password\" data-action=\"verify-password\">验证</button>\n            <span class=\"helper-text\" id=\"qa-password-status\" style=\"margin:0;color:#52c41a;display:none;\">已验证</span>\n          </div>\n        </div>\n\n        <div class=\"qa-actions\">\n          <button class=\"btn btn-primary\" id=\"qa-quench-once\" data-action=\"quench-once\">淬炼一次</button>\n          <button class=\"btn btn-success\" id=\"qa-quench-continuous\" data-action=\"quench-continuous\">连续淬炼</button>\n          <button class=\"btn btn-danger\" id=\"qa-quench-stop\" data-action=\"quench-stop\" style=\"display:none;\">停止</button>\n          <div class=\"qa-count-display\">\n            <button class=\"btn btn-secondary btn-small\" data-action=\"quench-reset\">清零</button>\n            已淬炼: <strong id=\"qa-quench-count\">0</strong>\n          </div>\n        </div>\n\n        <div style=\"height:10px;\"></div>\n        <div class=\"helper-text\" style=\"margin:0 0 8px;\">自动淬炼（达标自动停止）</div>\n        <div class=\"qa-target-list\" id=\"qa-target-list\" style=\"margin-bottom:8px;\">\n          <div class=\"qa-target-row\">\n            <span class=\"form-label\">属性</span>\n            <select class=\"select qa-target-attr\" style=\"width:160px;\">\n              <option value=\"\">选择目标属性</option>" + Object.keys(TI || {}).map(Number).filter(Ib => Number.isFinite(Ib)).sort((Ib, II) => Ib - II).map(Ib => "<option value=\"" + Ib + "\">" + (TI[String(Ib)] || "属性" + Ib) + "</option>").join("") + "\n            </select>\n            <span class=\"form-label\">数值</span>\n            <input class=\"input qa-target-value\" type=\"number\" value=\"\" min=\"1\" placeholder=\"如 80\" inputmode=\"numeric\" style=\"width:80px;\">\n            <button class=\"btn btn-secondary btn-small\" data-action=\"auto-target-remove\" disabled>删除</button>\n          </div>\n        </div>\n        <div class=\"btn-row\" style=\"margin-bottom:8px;\">\n          <button class=\"btn btn-success btn-small\" data-action=\"auto-target-add\">新增属性</button>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-warning\" id=\"qa-auto-start\" data-action=\"auto-start\">自动淬炼</button>\n          <button class=\"btn btn-danger\" id=\"qa-auto-stop\" data-action=\"auto-stop\" style=\"display:none;\">停止自动</button>\n        </div>\n\n        <div style=\"height:10px;\"></div>\n        <div class=\"helper-text\" style=\"margin:0 0 8px;\">指定次数洗练（达到次数自动停止）</div>\n        <div class=\"form-row\" style=\"margin-bottom:8px;\">\n          <span class=\"form-label\">洗练次数</span>\n          <input class=\"input\" id=\"qa-quench-times\" type=\"number\" value=\"100\" min=\"10\" max=\"10000\" step=\"10\" style=\"width:100px;\" placeholder=\"10-10000\">\n          <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">范围: 10-10000</span>\n        </div>\n        <div class=\"btn-row\">\n          <button class=\"btn btn-warning\" id=\"qa-times-start\" data-action=\"quench-times-start\">开始洗练</button>\n          <button class=\"btn btn-danger\" id=\"qa-times-stop\" data-action=\"quench-times-stop\" style=\"display:none;\">停止洗练</button>\n          <span class=\"helper-text\" id=\"qa-times-progress\" style=\"margin:0;font-size:12px;\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"star-upgrade\">\n    <div class=\"card-header\"><span class=\"card-title\">升星助手</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <label class=\"form-label\">延迟(ms)</label>\n        <input type=\"number\" id=\"qa-star-delay\" class=\"form-input\" value=\"300\" min=\"0\" step=\"100\" style=\"width:80px;\">\n        <span class=\"helper-text\" id=\"qa-star-hero-count\" style=\"margin-left:8px;\">英雄数量：62</span>\n      </div>\n      <div class=\"progress-row\" id=\"qa-star-progress-row\" style=\"display:flex;align-items:center;margin:8px 0;\">\n        <div style=\"flex:1;height:6px;background:#e5e5e5;border-radius:3px;overflow:hidden;\">\n          <div id=\"qa-star-progress-bar\" style=\"width:0%;height:100%;background:#3b82f6;transition:width 0.3s;\"></div>\n        </div>\n        <span id=\"qa-star-progress-text\" style=\"margin-left:8px;font-size:12px;color:#666;\">0/0 0%</span>\n      </div>\n      <div class=\"btn-row\">\n        <button class=\"btn btn-primary\" id=\"qa-star-hero-btn\" data-action=\"star-hero-upgrade\">升星</button>\n        <button class=\"btn btn-primary\" id=\"qa-star-book-btn\" data-action=\"star-book-upgrade\">图鉴</button>\n        <button class=\"btn btn-primary\" id=\"qa-star-claim-btn\" data-action=\"star-claim-rewards\">领奖</button>\n        <button class=\"btn btn-danger\" id=\"qa-star-stop-btn\" data-action=\"star-stop\" style=\"display:none;\">停止</button>\n      </div>\n    </div>\n  </div>\n",
    schedule: () => "\n  <div class=\"card\" data-collapsible data-card-id=\"schedule-config\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">定时任务</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <span class=\"schedule-status-badge\" id=\"qa-schedule-status\">已停止</span>\n        <label class=\"task-check\" style=\"margin:0;\" onclick=\"event.stopPropagation()\">\n          <input type=\"checkbox\" id=\"qa-schedule-enabled\">\n          <span>启用</span>\n        </label>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"helper-text\" style=\"margin-bottom:12px;color:#ff9500;\">注意：需保持游戏前台运行</div>\n\n      <div class=\"schedule-task-list\">\n        <div class=\"schedule-task-item\" data-collapsible-task>\n          <div class=\"schedule-task-header\" data-task-toggle>\n            <label class=\"task-check\" onclick=\"event.stopPropagation()\"><input type=\"checkbox\" id=\"qa-schedule-daily-enabled\"><span>日常任务</span></label>\n            <div style=\"display:flex;align-items:center;gap:8px;\">\n              <span class=\"schedule-next\">下次: <span id=\"qa-schedule-daily-next\">--</span></span>\n              <span class=\"task-collapse-icon\">▼</span>\n            </div>\n          </div>\n          <div class=\"schedule-task-body\">\n            <div class=\"schedule-task-config\">\n              <span class=\"form-label\">执行时间</span>\n              <input type=\"time\" class=\"input schedule-time-input\" id=\"qa-schedule-daily-time\" value=\"08:00\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"schedule-task-item\" data-collapsible-task>\n          <div class=\"schedule-task-header\" data-task-toggle>\n            <label class=\"task-check\" onclick=\"event.stopPropagation()\"><input type=\"checkbox\" id=\"qa-schedule-hangup-enabled\"><span>挂机奖励</span></label>\n            <div style=\"display:flex;align-items:center;gap:8px;\">\n              <span class=\"schedule-next\">下次: <span id=\"qa-schedule-hangup-next\">--</span></span>\n              <span class=\"task-collapse-icon\">▼</span>\n            </div>\n          </div>\n          <div class=\"schedule-task-body\">\n            <div class=\"schedule-task-config\">\n              <span class=\"form-label\">间隔</span>\n              <select class=\"input\" id=\"qa-schedule-hangup-interval\" style=\"width:80px;\">\n                " + Array.from(TS, (Ib, II) => II + 1).map(Ib => "<option value=\"" + Ib + "\"" + (4 === Ib ? " selected" : "") + ">" + Ib + "小时</option>").join("") + "\n              </select>\n              <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">(从0点开始)</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"schedule-task-item\" data-collapsible-task>\n          <div class=\"schedule-task-header\" data-task-toggle>\n            <label class=\"task-check\" onclick=\"event.stopPropagation()\"><input type=\"checkbox\" id=\"qa-schedule-bottle-enabled\"><span>盐罐助手</span></label>\n            <div style=\"display:flex;align-items:center;gap:8px;\">\n              <span class=\"schedule-next\">下次: <span id=\"qa-schedule-bottle-next\">--</span></span>\n              <span class=\"task-collapse-icon\">▼</span>\n            </div>\n          </div>\n          <div class=\"schedule-task-body\">\n            <div class=\"schedule-task-config\">\n              <span class=\"form-label\">间隔</span>\n              <select class=\"input\" id=\"qa-schedule-bottle-interval\" style=\"width:80px;\">\n                " + Array.from(TT, (Ib, II) => II + 1).map(Ib => "<option value=\"" + Ib + "\"" + (6 === Ib ? " selected" : "") + ">" + Ib + "小时</option>").join("") + "\n              </select>\n              <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">(从0点开始)</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"schedule-task-item\" data-collapsible-task>\n          <div class=\"schedule-task-header\" data-task-toggle>\n            <label class=\"task-check\" onclick=\"event.stopPropagation()\"><input type=\"checkbox\" id=\"qa-schedule-legacy-enabled\"><span>功法绝学</span></label>\n            <div style=\"display:flex;align-items:center;gap:8px;\">\n              <span class=\"schedule-next\">下次: <span id=\"qa-schedule-legacy-next\">--</span></span>\n              <span class=\"task-collapse-icon\">▼</span>\n            </div>\n          </div>\n          <div class=\"schedule-task-body\">\n            <div class=\"schedule-task-config\">\n              <span class=\"form-label\">间隔</span>\n              <select class=\"input\" id=\"qa-schedule-legacy-interval\" style=\"width:80px;\">\n                <option value=\"1\">1小时</option>\n                <option value=\"2\">2小时</option>\n                <option value=\"3\" selected>3小时</option>\n              </select>\n              <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">(从0点开始)</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"schedule-task-item\" data-collapsible-task>\n          <div class=\"schedule-task-header\" data-task-toggle>\n            <label class=\"task-check\" onclick=\"event.stopPropagation()\"><input type=\"checkbox\" id=\"qa-schedule-legacyGift-enabled\"><span>残卷赠送</span></label>\n            <div style=\"display:flex;align-items:center;gap:8px;\">\n              <span class=\"schedule-next\">下次: <span id=\"qa-schedule-legacyGift-next\">--</span></span>\n              <span class=\"task-collapse-icon\">▼</span>\n            </div>\n          </div>\n          <div class=\"schedule-task-body\">\n            <div class=\"schedule-task-config\">\n              <span class=\"form-label\">执行时间</span>\n              <input type=\"time\" class=\"input schedule-time-input\" id=\"qa-schedule-legacyGift-time\" value=\"06:00\">\n              <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">(需先配置目标)</span>\n            </div>\n            <div class=\"schedule-task-config\" style=\"margin-top:6px;\">\n              <span class=\"form-label\">目标ID</span>\n              <input class=\"input\" id=\"qa-schedule-legacyGift-targetId\" type=\"text\" placeholder=\"输入目标ID\" style=\"width:100px;\">\n              <button class=\"btn btn-secondary btn-small\" data-action=\"schedule-legacyGift-query\">查询</button>\n            </div>\n            <div id=\"qa-schedule-legacyGift-target-info\" style=\"display:none;margin-top:6px;padding:8px;background:var(--card-bg);border-radius:6px;border:1px solid var(--border-color);\">\n              <div style=\"display:flex;align-items:center;gap:8px;\">\n                <div style=\"width:32px;height:32px;border-radius:50%;background:#e5e5e5;overflow:hidden;\">\n                  <img id=\"qa-schedule-legacyGift-avatar\" style=\"width:100%;height:100%;object-fit:cover;display:none;\">\n                </div>\n                <div style=\"flex:1;\">\n                  <div style=\"font-weight:bold;font-size:13px;\" id=\"qa-schedule-legacyGift-name\">--</div>\n                  <div style=\"font-size:11px;color:var(--text-secondary);\" id=\"qa-schedule-legacyGift-server\">--</div>\n                </div>\n                <span class=\"helper-text\" id=\"qa-schedule-legacyGift-status\" style=\"margin:0;color:#34c759;display:none;\">已验证</span>\n              </div>\n            </div>\n            <div id=\"qa-schedule-legacyGift-password-row\" class=\"schedule-task-config\" style=\"display:none;margin-top:6px;\">\n              <span class=\"form-label\">二级密码</span>\n              <input class=\"input\" id=\"qa-schedule-legacyGift-password\" type=\"password\" placeholder=\"输入密码\" style=\"width:100px;\">\n              <button class=\"btn btn-primary btn-small\" data-action=\"schedule-legacyGift-verify\">验证</button>\n              <button class=\"btn btn-secondary btn-small\" id=\"qa-schedule-legacyGift-reset\" data-action=\"schedule-legacyGift-reset\" style=\"display:none;\">重新验证</button>\n            </div>\n            <div class=\"schedule-task-config\" style=\"margin-top:6px;\">\n              <span class=\"form-label\">数量</span>\n              <input class=\"input\" id=\"qa-schedule-legacyGift-count\" type=\"number\" placeholder=\"全部\" min=\"0\" style=\"width:70px;\">\n              <span class=\"helper-text\" style=\"margin:0;font-size:11px;\">(空=全部)</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"btn-row\" style=\"margin-top:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"schedule-save\">保存配置</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card collapsed\" data-collapsible data-card-id=\"schedule-logs\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">执行日志</span>\n      <div style=\"display:flex;align-items:center;gap:8px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"schedule-clear-logs\">清空</button>\n        " + TX + "\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div id=\"qa-schedule-logs\" class=\"schedule-logs-container\">\n        <div class=\"helper-text\">暂无执行记录</div>\n      </div>\n    </div>\n  </div>\n",
    rank: () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">巅峰榜</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"top-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"top-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-top-rank-content\">\n        <div class=\"helper-text\">点击\"查询\"加载巅峰榜数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">五百服Top俱乐部</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"club-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"club-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-club-rank-content\">\n        <div class=\"helper-text\">点击\"查询\"加载俱乐部榜数据</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">黄金积分俱乐部总览</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <div class=\"radio-group\" style=\"display:flex;gap:4px;flex-wrap:wrap;\">\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold1\" checked data-action=\"gold-rank-group-1\">\n            <span>1-100</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold2\" data-action=\"gold-rank-group-2\">\n            <span>101-200</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold3\" data-action=\"gold-rank-group-3\">\n            <span>201-300</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold4\" data-action=\"gold-rank-group-4\">\n            <span>301-400</span>\n          </label>\n          <label class=\"radio-option\">\n            <input type=\"radio\" name=\"gold-rank-group\" value=\"gold5\" data-action=\"gold-rank-group-5\">\n            <span>401-500</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n        <button class=\"btn btn-primary\" data-action=\"gold-rank-query\">查询</button>\n        <button class=\"btn btn-success\" data-action=\"gold-rank-export\">导出图片</button>\n      </div>\n      <div id=\"qa-gold-rank-content\">\n        <div class=\"helper-text\">选择排名范围后点击\"查询\"加载黄金积分榜数据</div>\n      </div>\n    </div>\n  </div>\n",
    spar: () => "\n  <div class=\"card\" data-collapsible>\n    <div class=\"card-header\"><span class=\"card-title\">切磋功能</span>" + TX + "</div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <span class=\"form-label\">目标ID</span>\n        <input class=\"input\" id=\"qa-pvp-target\" type=\"text\" placeholder=\"输入目标角色ID\" style=\"width:150px;\">\n        <button class=\"btn btn-secondary btn-small\" data-action=\"pvp-query\">查询</button>\n        <span class=\"form-label\">次数</span>\n        <input class=\"input\" id=\"qa-pvp-count\" type=\"number\" value=\"1\" min=\"1\" max=\"1000\" style=\"width:80px;\">\n        <button class=\"btn btn-primary\" data-action=\"pvp-start\">切磋</button>\n      </div>\n\n      <!-- 对手信息区域 -->\n      <div id=\"qa-pvp-target-info\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\">\n        <div class=\"pvp-target-header\" style=\"display:flex;align-items:center;gap:12px;margin-bottom:10px;\">\n          <div id=\"qa-pvp-target-avatar\" style=\"width:48px;height:48px;border-radius:50%;background:#e5e5e5;overflow:hidden;\">\n            <img id=\"qa-pvp-avatar-img\" style=\"width:100%;height:100%;object-fit:cover;display:none;\">\n          </div>\n          <div style=\"flex:1;\">\n            <div style=\"font-weight:bold;\" id=\"qa-pvp-target-name\">--</div>\n            <div style=\"font-size:12px;color:var(--text-secondary);\" id=\"qa-pvp-target-server\">--</div>\n          </div>\n        </div>\n        <div class=\"stats-row\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">战力</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-power\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">红数</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-red\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">孔数</span>\n            <span class=\"stat-value\" id=\"qa-pvp-target-hole\" style=\"color:#34c759;\">--</span>\n          </div>\n        </div>\n        <div style=\"margin-top:8px;font-size:12px;color:var(--text-secondary);\">\n          <span>俱乐部: <span id=\"qa-pvp-target-legion\">--</span></span>\n          <span style=\"margin-left:12px;\">历史最高战力: <span id=\"qa-pvp-target-max-power\">--</span></span>\n          <span style=\"margin-left:12px;\">俱乐部红淬: <span id=\"qa-pvp-target-legion-red\" style=\"color:#ff3b30;\">--</span></span>\n        </div>\n      </div>\n\n      <!-- 双方阵容对比区域 (查询后/切磋中/切磋后都用这个) -->\n      <div id=\"qa-pvp-teams-container\" style=\"display:none;margin:12px 0;padding:12px;background:var(--card-bg);border-radius:8px;\"></div>\n\n      <!-- 战斗结果区域 -->\n      <div id=\"qa-pvp-result\" style=\"display:none;margin-top:12px;\">\n        <div class=\"stats-row\" style=\"background:var(--card-bg);padding:10px;border-radius:8px;margin-bottom:10px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">胜率</span>\n            <span class=\"stat-value\" id=\"qa-pvp-win-rate\" style=\"color:#34c759;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">掉将率</span>\n            <span class=\"stat-value\" id=\"qa-pvp-die-rate\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">总场次</span>\n            <span class=\"stat-value\" id=\"qa-pvp-total\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">我方满编胜</span>\n            <span class=\"stat-value\" id=\"qa-pvp-left-full-wins\" style=\"color:#34c759;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">对方满编胜</span>\n            <span class=\"stat-value\" id=\"qa-pvp-right-full-wins\" style=\"color:#ff3b30;\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">胜利均回合</span>\n            <span class=\"stat-value\" id=\"qa-pvp-avg-win-rounds\">--</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">失败均回合</span>\n            <span class=\"stat-value\" id=\"qa-pvp-avg-loss-rounds\">--</span>\n          </div>\n        </div>\n        <div id=\"qa-pvp-battles\" style=\"max-height:300px;overflow-y:auto;\"></div>\n      </div>\n\n      <div class=\"helper-text\" id=\"qa-pvp-status\">输入目标ID后点击查询或切磋</div>\n    </div>\n  </div>\n",
    changelog: () => "\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <span class=\"card-title\">版本信息</span>\n      <div style=\"display:flex;gap:6px;\">\n        <button class=\"btn btn-primary btn-small\" data-action=\"check-update\" id=\"qa-check-update-btn\" style=\"font-size:11px;padding:4px 8px;\">检查更新</button>\n        <button class=\"btn btn-success btn-small\" data-action=\"do-update\" id=\"qa-do-update-btn\" style=\"display:none;font-size:11px;padding:4px 8px;\">立即更新</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"stats-row\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">当前版本</span>\n          <span class=\"stat-value\" id=\"qa-current-version\">v" + Tb + "</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">最新版本</span>\n          <span class=\"stat-value\" id=\"qa-latest-version\">--</span>\n        </div>\n      </div>\n      <div class=\"helper-text\" id=\"qa-update-status\">点击检查更新获取最新版本信息</div>\n      <div style=\"margin-top:12px;padding-top:12px;border-top:1px solid var(--border-color,#e5e5e5);\">\n        <button class=\"btn btn-secondary\" data-action=\"show-donation\" style=\"width:100%;font-size:14px;padding:10px;\">\n          ❤️ 捐赠支持\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-header\"><span class=\"card-title\">更新日志</span></div>\n    <div class=\"card-body\" style=\"padding:0;\">\n      <div class=\"changelog-list\" style=\"padding:16px;\">\n\n        <div class=\"changelog-version\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#007AFF;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v3.2.1</span>\n            <span style=\"padding:2px 6px;border-radius:4px;font-size:10px;background:#007AFF;color:#fff;\">最新</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-27</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>新增捐赠排行榜</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 缺陷修复</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复联网助手bug</li>\n              <li>修复切磋界面展示问题</li>\n              <li>修复残卷赠送大于9999的处理机制</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v3.2.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-26</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>新增火把助手</li>\n              <li>新增怪异塔排行导出</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>盐场匹配导出图片优化</li>\n              <li>联网助手任务分发，自打逻辑优化</li>\n              <li>切磋界面优化</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 缺陷修复</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复图片加载失败</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v3.1.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-23</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>优化联网助力下的自助力逻辑和黑名单机制</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 缺陷修复</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复一些性能问题</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v3.1.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-22</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>新增联网助战功能</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>宝库支持付费钻头</li>\n              <li>赛车一键收车按钮修复</li>\n              <li>赛车目标奖励默认值修复</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v3.0.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-20</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>疯狂赛车新增自定义奖励</li>\n              <li>新增功法券赠送</li>\n              <li>定时任务新增功法券赠送</li>\n              <li>淬炼支持二级密码（仅本地存储，不上传服务器，如不放心可退出脚本）</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>优化蟠桃园对手查询</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">📝 说明</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>盐场地图、全局战损暂未实现</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v3.0.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-17</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>新增一级菜单「定时任务」模块，可配置日常定时任务（一键补差、挂机奖励、盐罐重启、残卷领取），支持24h运行及多标签页</li>\n              <li>日常任务新增功法绝学领取残卷按钮</li>\n            </ul>\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 缺陷修复</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复盐场匹配积分取值错误</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.5.2</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-14</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 改进优化</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>脑补修复护卫状态检测问题</li>\n              <li>修复悬浮球无法跟随窗口位置固定</li>\n              <li>工具箱-->武将升级-->新增暂停按钮</li>\n              <li>赛车任务支持改装后自动领取相关奖励</li>\n              <li>脑补修复盐场匹配积分取值错误</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.5.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-14</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>武将升级新增目标速度选项</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复蟠桃园对手查询错误和战绩查询错误</li>\n              <li>修复盐场历史战绩查询错误</li>\n              <li>蟠桃园样式修改(copy by 宸总)</li>\n              <li>样式修改若干</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.5.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-13</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>俱乐部->支持对手查询+双方战绩查询</li>\n              <li>导出支持根据当前主题设置样式</li>\n              <li>支持悬浮球记住最后一次位置</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>咸将塔体力值获取修复</li>\n              <li>疯狂赛车任务一键收车后支持自动改装升级</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.4.3</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-12</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">改进优化</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复爬塔体力渲染过慢的问题</li>\n              <li>修复盐场匹配积分不展示</li>\n              <li>修复进阶石资源未做判定缺陷</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.4.2</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-12</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">改进优化</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>淬炼助手获取阵容优化</li>\n              <li>巅峰榜单区服修复</li>\n              <li>咸将塔体力层数展示优化</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.4.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-11</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">更新内容</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复爬塔体力获取异常</li>\n              <li>修复爬塔宝箱领取问题</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.3.5</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-11</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>补充完善升星助手功能</li>\n              <li>优化数据源，避免重新开始战斗</li>\n              <li>优化盐场匹配和盐场战绩</li>\n              <li>优化任务补差挂机加钟</li>\n              <li>盐场地图暂不可用</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.3.1</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-08</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🔧 优化改进</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>优化一键任务补差</li>\n              <li>优化怪异塔合成开箱</li>\n              <li>优化导出的图片清晰度</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.3.0</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2026-01-05</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>新增怪异塔爬塔</li>\n              <li>武将升级调整为一键升级</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"changelog-version collapsed\" style=\"position:relative;padding-left:24px;margin-bottom:24px;\">\n          <div style=\"position:absolute;left:0;top:6px;width:10px;height:10px;border-radius:50%;background:#C7C7CC;\"></div>\n\n          <div class=\"changelog-header\" style=\"display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;\" data-changelog-toggle>\n            <span style=\"font-weight:600;font-size:15px;color:var(--text-primary);\">v2.2.3</span>\n            <span style=\"font-size:12px;color:var(--text-secondary);margin-left:auto;\">2025-01-04</span>\n            " + TX + "\n          </div>\n\n          <div class=\"changelog-content\" style=\"background:var(--card-bg);border-radius:8px;padding:12px 16px;border:1px solid var(--border-color);\">\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">🐛 Bug 修复</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>修复淬炼助手缺陷</li>\n            </ul>\n\n            <div style=\"font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;\">✨ 新增功能</div>\n            <ul style=\"margin:0 0 12px;padding-left:20px;font-size:12px;line-height:1.8;color:var(--text-secondary);\">\n              <li>盐场匹配导出支持导出俱乐部公告字段（最后一列，52字符）</li>\n              <li>手机版本支持导出图片（需要 APK 兼容 Blob 格式，超级咸鱼已支持）</li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n"
  };
  let TA = null;
  const TQ = (Ib, II = "info", If = 2000) => {
    TA || (TA = document.createElement("div"), TA.className = "qa-toast", document.body.appendChild(TA));
    TA.textContent = Ib;
    TA.className = "qa-toast show " + II;
    setTimeout(() => {
      TA.classList.remove("show");
    }, If);
  };
  let Tx = null;
  let Tk = [];
  let Tg = false;
  let TL = false;
  const Td = (Ib, II = 4000) => {
    {
      const IK = {
        msg: Ib,
        duration: II
      };
      Tk.push(IK);
      Tg || R0();
    }
  };
  const R0 = () => {
    if (0 === Tk.length) {
      return void (Tg = false);
    }
    Tg = true;
    const {
      msg: Ib,
      duration: II
    } = Tk.shift();
    Tx || (Tx = document.createElement("div"), Tx.className = "qa-toast qa-tip-toast", document.body.appendChild(Tx));
    Tx.textContent = Ib;
    Tx.classList.add("show");
    setTimeout(() => {
      {
        Tx.classList.remove("show");
        setTimeout(R0, 300);
      }
    }, II);
  };
  const R1 = (Ib, II, If) => {
    {
      if (!Ib) {
        return;
      }
      const IW = document.getElementById("qa-result-" + Ib);
      if (!IW) {
        return;
      }
      const IC = new Date().toLocaleTimeString();
      IW.textContent = "【" + IC + "】" + (II || "返回数据") + "\n" + (Iy => {
        try {
          return JSON.stringify(Iy, null, 2);
        } catch {
          return String(Iy);
        }
      })(If);
    }
  };
  const R2 = Ib => {
    {
      const II = Math.floor(Number(Ib) || 0);
      return II <= 0 ? "00:00:00" : Math.floor(II / 3600).toString().padStart(2, "0") + ":" + Math.floor(II % 3600 / 60).toString().padStart(2, "0") + ":" + (II % 60).toString().padStart(2, "0");
    }
  };
  const R3 = Ib => Tf[Ib]?.["name"] || "武将" + Ib;
  const R4 = Ib => new Promise(II => setTimeout(II, Ib));
  const R5 = () => ("undefined" != typeof unsafeWindow ? unsafeWindow : window).g_utils;
  const R6 = (Ib, II = 0) => {
    const If = document.getElementById(Ib);
    const IK = Number(If?.["value"]);
    return Number.isFinite(IK) ? IK : II;
  };
  const R7 = Ib => {
    const II = document.getElementById(Ib);
    return Boolean(II && II.checked);
  };
  const R8 = () => {
    const Ib = document.createElement("canvas");
    const II = Ib.getContext("2d");
    II.textBaseline = "top";
    II.font = "14px Arial";
    II.fillText("fingerprint", 2, 2);
    const If = Ib.toDataURL();
    const IK = [navigator.userAgent, navigator.language, screen.width + "x" + screen.height, screen.colorDepth, new Date().getTimezoneOffset(), If.slice(-50)].join("|");
    let IW = 0;
    for (let IC = 0; IC < IK.length; IC++) {
      IW = (IW << 5) - IW + IK.charCodeAt(IC);
      IW &= IW;
    }
    return Math.abs(IW).toString(36);
  };
  const R9 = (Ib, II, If) => {
    If && If("正在生成图片...", "info", 1000);
    const IW = Ib.getContext("2d");
    ((IC, Iy, IY) => {
      const Im = String(IY || "").trim() || "岚山";
      const IE = IC.width;
      const IX = IC.height;
      const IG = "dark" === TR.theme;
      Iy.save();
      Iy.font = "600 14px -apple-system, BlinkMacSystemFont, sans-serif";
      Iy.fillStyle = IG ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
      Iy.textBaseline = "middle";
      Iy.textAlign = "center";
      const IA = -30 * Math.PI / 180;
      const IQ = Math.sqrt(IE * IE + IX * IX);
      Iy.translate(IE / 2, IX / 2);
      Iy.rotate(IA);
      for (let Ix = -IQ; Ix < IQ; Ix += 90) {
        for (let Ik = -IQ; Ik < IQ; Ik += 150) {
          Iy.fillText(Im, Ik, Ix);
        }
      }
      Iy.restore();
    })(Ib, IW, TR?.["roleId"]);
    return new Promise((IC, Iy) => {
      {
        Ib.toBlob(Im => {
          {
            if (!Im) {
              If && If("图片生成失败", "error");
              return void Iy(new Error("Canvas toBlob failed"));
            }
            const IX = URL.createObjectURL(Im);
            "function" == typeof GM_download ? GM_download({
              url: IX,
              name: II,
              saveAs: false,
              onload: () => {
                {
                  URL.revokeObjectURL(IX);
                  If && If("导出成功", "success");
                  IC();
                }
              },
              onerror: () => {
                {
                  URL.revokeObjectURL(IX);
                  RP(IX, II);
                  If && If("导出成功", "success");
                  IC();
                }
              }
            }) : (RP(IX, II), setTimeout(() => URL.revokeObjectURL(IX), 100), If && If("导出成功", "success"), IC());
          }
        }, "image/png");
      }
    });
  };
  const RP = (Ib, II) => {
    {
      const IK = document.createElement("a");
      IK.href = Ib;
      IK.download = II;
      IK.style.display = "none";
      document.body.appendChild(IK);
      IK.click();
      document.body.removeChild(IK);
    }
  };
  "undefined" != typeof unsafeWindow ? unsafeWindow : window;
  let RD = 0;
  const Rv = ["fight_startareaarena", "fight_startpvp", "fight_starttower", "fight_startboss", "fight_startlegionboss", "fight_startdungeon", "fight_startlevel"];
  function RB(Ib) {
    {
      if (null == Ib) {
        return null;
      }
      const If = "string" == typeof Ib ? Number(Ib) : Ib;
      return Number.isFinite(If) ? If : null;
    }
  }
  const Rz = async (Ib, II = {}, If = "") => {
    const IW = (() => {
      const IE = [window.h5websocket?.["ws"], window.h5websocket, window.ws, window.gameWs, window.WebSocketClient];
      const IX = [];
      const IG = new Set();
      for (const IA of IE) IA && (IG.has(IA) || (IG.add(IA), IX.push(IA)));
      for (const IQ of IX) if (IQ?.["sendAsync"]) {
        return IQ;
      }
      for (const Ix of IX) if (Ix?.["send"]) {
        return Ix;
      }
      return null;
    })();
    if (!IW) {
      throw new Error("游戏WebSocket未连接，请确保在游戏页面中运行");
    }
    let IC = II;
    Rv.includes(Ib) && TR?.["battleVersion"] && (IC = {
      battleVersion: TR.battleVersion,
      ...II
    });
    const Iy = function (IE) {
      const IX = [IE?.["ack"], IE?.["_ack"], IE?.["__qaAck"], IE?.["_qaAck"], window.__qaWsAck];
      for (const IG of IX) {
        const IA = RB(IG);
        if (null !== IA && IA >= 0) {
          return IA;
        }
      }
      return 0;
    }(IW);
    const IY = "_sys/ack" === Ib || "heart_beat" === Ib ? 0 : ++RD;
    const Im = R5()?.["bon"]?.["encode"] ? {
      ack: Iy,
      body: R5().bon.encode(IC),
      cmd: Ib,
      seq: IY,
      time: Date.now()
    } : {
      ack: Iy,
      cmd: Ib,
      params: IC,
      seq: IY,
      time: Date.now()
    };
    if (IW.sendAsync) {
      let IE;
      const IX = new Promise((IG, IA) => {
        IE = setTimeout(() => IA(new Error("请求超时: " + Ib)), 10000);
      });
      try {
        {
          const IA = await Promise.race([IW.sendAsync(Im), IX]);
          const IQ = RB(IA?.["_raw"]?.["seq"] ?? IA?.["seq"]);
          let Ix;
          null !== IQ && IQ >= 0 && (window.__qaWsAck = IQ, IW.__qaAck = IQ);
          Ix = IA?.["_rawData"] ? IA._rawData : IA?.["getData"] ? IA.getData() : IA?.["body"] && "object" == typeof IA.body && !ArrayBuffer.isView(IA.body) ? IA.body : IA;
          return Ix;
        }
      } finally {
        clearTimeout(IE);
      }
    } else {
      if (IW.send) {
        if (R5()?.["encode"]) {
          try {
            {
              const IL = function (c1) {
                const c2 = [c1?.["channel"], c1?.["_channel"], c1?.["enc"], c1?.["_enc"], c1?.["__enc"], c1?.["__channel"], window.h5websocket?.["channel"], window.h5websocket?.["enc"], window.h5websocket?.["ws"]?.["channel"], window.h5websocket?.["ws"]?.["enc"]];
                for (const c3 of c2) if ("string" == typeof c3 && c3.trim()) {
                  return c3;
                }
                return "auto";
              }(IW);
              const Id = R5().encode(Im, IL);
              const c0 = {
                success: true,
                message: "已发送（binary）"
              };
              IW.send(Id);
              return c0;
            }
          } catch (c1) {
            {
              return {
                success: false,
                message: "发送失败（binary 编码失败）: " + (c1?.["message"] || String(c1))
              };
            }
          }
        }
        const Ik = {
          success: true,
          message: "已发送（JSON，无响应确认）"
        };
        IW.send(JSON.stringify(Im));
        return Ik;
      }
    }
    throw new Error("WebSocket不支持发送消息");
  };
  const RM = (Ib, II) => {
    {
      if (Ib) {
        if ("function" == typeof Ib.get) {
          {
            const IC = Number(II);
            const Iy = String(II);
            return Ib.get(IC) ?? Ib.get(Iy);
          }
        }
        return Ib[II] ?? Ib[String(II)];
      }
    }
  };
  const RS = Ib => Ib ? "function" == typeof Ib.keys ? Array.from(Ib.keys()) : Object.keys(Ib) : [];
  const RT = Ib => !!Ib && ("number" == typeof Ib.size ? Ib.size > 0 : Object.keys(Ib).length > 0);
  const RR = (Ib, II) => RM(Ib, II);
  const RZ = (Ib, II) => {
    const If = RR(Ib, II);
    return If?.["quantity"] ?? 0;
  };
  const RU = Ib => {
    {
      const IK = window.ROLE?.["items"];
      return RZ(IK, Ib);
    }
  };
  const RN = Ib => {
    {
      const IK = document.getElementById("qa-daily-fix-progress");
      IK && (IK.textContent = Ib || "--");
    }
  };
  const Ru = (Ib, II = "all") => {
    const IK = Ib || window.ROLE?.["items"];
    if (IK && Object.keys(IK).length > 0) {
      if ("all" === II || "jade" === II) {
        {
          const IW = RZ(IK, 1022);
          const IC = document.getElementById("qa-jade-count");
          IC && (IC.textContent = IW.toLocaleString());
          const Iy = document.getElementById("qa-jade-count-quench");
          Iy && (Iy.textContent = IW.toLocaleString());
          const IY = RZ(IK, 1023);
          const Im = document.getElementById("qa-color-jade-count");
          Im && (Im.textContent = IY.toLocaleString());
          const IE = document.getElementById("qa-color-jade-count-quench");
          IE && (IE.textContent = IY.toLocaleString());
        }
      }
      if ("all" === II || "toolbox" === II) {
        const IG = {
          2001: RZ(IK, 2001),
          2002: RZ(IK, 2002),
          2003: RZ(IK, 2003),
          2004: RZ(IK, 2004)
        };
        const IA = 1 * IG[2001] + 10 * IG[2002] + 20 * IG[2003] + 50 * IG[2004];
        const IQ = document.getElementById("qa-box-total-points");
        IQ && (IQ.textContent = IA.toLocaleString());
        [2001, 2002, 2003, 2004].forEach(c0 => {
          const c1 = document.querySelector("[data-box-count-for=\"" + c0 + "\"]");
          c1 && (c1.textContent = String(IG[c0] ?? 0));
        });
        const Ix = document.getElementById("qa-box-count");
        const Ik = document.getElementById("qa-box-itemid");
        if (Ik && Ix) {
          const c0 = Number(Ik.value) || 2001;
          const c1 = IG[c0] ?? 0;
          const c2 = Math.max(c1, 10);
          Ix.max = String(c2);
          const c3 = Number(Ix.value);
          if (Number.isFinite(c3) && c3 > c2) {
            {
              const c5 = Math.max(10 * Math.floor(c2 / 10), 10);
              Ix.value = String(c5);
            }
          }
        }
        const Ig = {
          1: RZ(IK, 1011),
          2: RZ(IK, 1012)
        };
        [1, 2].forEach(c6 => {
          const c7 = document.querySelector("[data-fish-count-for=\"" + c6 + "\"]");
          c7 && (c7.textContent = String(Ig[c6] ?? 0));
        });
        const IL = document.getElementById("qa-fish-count");
        const Id = document.getElementById("qa-fish-type");
        if (Id && IL) {
          {
            const c7 = Number(Id.value) || 1;
            const c8 = Ig[c7] ?? 0;
            const c9 = Math.max(c8, 10);
            IL.max = String(c9);
            const cP = Number(IL.value);
            if (Number.isFinite(cP) && cP > c9) {
              const cD = Math.max(10 * Math.floor(c9 / 10), 10);
              IL.value = String(cD);
            }
          }
        }
      }
    }
  };
  const RF = Ib => {
    Rp(Ib || window.ROLE?.["dailyTask"]);
  };
  const Rp = Ib => {
    {
      const If = document.getElementById("qa-daily-detail");
      if (!If) {
        return;
      }
      const IK = Ib || window.ROLE?.["dailyTask"];
      if (!IK) {
        return void (If.innerHTML = "<div class=\"helper-text\">暂无任务数据</div>");
      }
      const IW = IK.complete || {};
      if (!RT(IW)) {
        return void (If.innerHTML = "<div class=\"helper-text\">等待游戏数据加载...</div>");
      }
      const IC = Object.keys(TW).map(Number).sort((Iy, IY) => Iy - IY);
      0 !== IC.length ? (IC.filter(Iy => {
        {
          const Im = TC[Iy] || 1;
          const IE = RM(IW, Iy);
          return (-1 === IE ? Im : "number" == typeof IE ? Math.min(IE, Im) : 0) >= Im;
        }
      }).length, If.innerHTML = "<div class=\"task-grid\">\n    " + IC.map(Iy => {
        const IY = TC[Iy] || 1;
        const Im = RM(IW, Iy);
        const IE = -1 === Im ? IY : "number" == typeof Im ? Math.min(Im, IY) : 0;
        return "<div class=\"task-check " + (IE >= IY ? "done" : "") + "\">\n        <span>#" + Iy + " " + (TW[Iy] || "任务" + Iy) + "</span>\n        <span class=\"task-status\">" + IE + "/" + IY + "</span>\n      </div>";
      }).join("") + "\n  </div>") : If.innerHTML = "<div class=\"helper-text\">暂无任务数据</div>";
    }
  };
  const RV = () => document.getElementById("qa-watermark");
  const RJ = () => {
    const II = TR?.["roleId"];
    (If => {
      const IW = RV();
      if (!IW) {
        return;
      }
      const {
        safe: IC,
        patternHtml: Iy
      } = (IY => {
        {
          const IE = String(IY).trim() || "岚山";
          let IX = "<div class=\"qa-watermark-pattern\">";
          for (let IG = 0; IG < 20; IG++) {
            IX += "<span class=\"qa-watermark-item\">" + IE + "</span>";
          }
          IX += "</div>";
          return {
            safe: IE,
            patternHtml: IX
          };
        }
      })(If);
      IW.setAttribute("data-text", IC);
      IW.innerHTML = Iy;
    })(II || "岚山");
  };
  let RH = null;
  let Rh = false;
  let RO = null;
  const Rj = () => {
    {
      RH && (clearInterval(RH), RH = null);
      const Ib = document.getElementById("qa-panel");
      Ib && (Ib.style.display = "none");
    }
  };
  const Rq = async () => {
    try {
      {
        const If = TR.roleId;
        const IK = TH(If);
        const IW = localStorage.getItem(IK);
        const IC = R8();
        if (!IW || !If) {
          return void Rj();
        }
        const Iy = {
          token: IW,
          roleId: If,
          fingerprint: IC
        };
        const IY = await fetch(TZ + "/device-auth/heartbeat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(Iy)
        });
        if (!IY.ok) {
          return void Rj();
        }
        const Im = await IY.text();
        if (!Im) {
          return void Rj();
        }
        let IE;
        try {
          IE = JSON.parse(Im);
        } catch (IA) {
          return void Rj();
        }
        const IX = IE.data || IE;
        if (IX.frozen || IX.disabled) {
          return void Rj();
        }
        IX.token && localStorage.setItem(IK, IX.token);
      }
    } catch (IQ) {
      {
        Rj();
      }
    }
  };
  const Rw = async (Ib = false) => {
    {
      const IW = TR.roleId;
      if (RO && IW && RO !== IW && (Ib = true), Rh && !Ib) {
        return true;
      }
      const IC = await (async () => {
        try {
          {
            const Im = R8();
            const IE = TR.roleId;
            if (!IE) {
              Rj();
              return false;
            }
            const IG = {
              userAgent: navigator.userAgent,
              language: navigator.language
            };
            const IA = await fetch(TZ + "/device-auth/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                fingerprint: Im,
                roleId: IE,
                deviceInfo: IG
              })
            });
            if (!IA.ok) {
              Rj();
              return false;
            }
            const IQ = await IA.text();
            if (!IQ) {
              Rj();
              return false;
            }
            let Ix;
            try {
              Ix = JSON.parse(IQ);
            } catch (IL) {
              Rj();
              return false;
            }
            const Ik = Ix.data || Ix;
            if (Ik.frozen || Ik.disabled || Ik.error || !Ik.token) {
              Rj();
              return false;
            }
            const Ig = TH(IE);
            localStorage.setItem(Ig, Ik.token);
            TL || (TL = true, Td("💡 菜单栏左滑查看更多功能", 2000));
            return true;
          }
        } catch (c0) {
          {
            Rj();
            return false;
          }
        }
      })();
      IC && (Rh = true, RO = IW, RH || (RH = setInterval(Rq, 300000)));
      return IC;
    }
  };
  const Rb = async (Ib, II, If = {}, IK = "") => {
    try {
      const IW = IK ? Ib + "-" + IK : Ib + "-" + II;
      const IC = await Rz(II, If, IW);
      R1(Ib, IK || II, IC);
      return IC;
    } catch (Iy) {
      throw Iy;
    }
  };
  const RI = async (Ib, II) => {
    for (const If of II) try {
      await Rb(Ib, If.cmd, If.params || {}, If.name || If.cmd);
      await R4(300);
    } catch (IK) {}
  };
  const Rc = async () => {
    {
      const Ib = await Rz("role_getroleinfo", {}, "数据管理-刷新角色信息");
      const II = Ib?.["role"] || Ib;
      TR.roleInfo = II;
      TR.items = II?.["items"] || {};
      TR.allHeroesData = II?.["heroes"] || TR.allHeroesData;
      TR.roleId = II?.["id"] || II?.["roleId"] || TR.roleId || null;
      RJ();
      RF(II?.["dailyTask"]);
      R1("daily-tasks", "role_getroleinfo", Ib);
      TR.roleId && Rw();
      return II;
    }
  };
  const Rf = async () => {
    if (TR.battleVersion) {
      return TR.battleVersion;
    }
    try {
      const Ib = await Rz("fight_startlevel", {}, "数据管理-获取战斗版本");
      const II = Ib?.["battleData"]?.["version"] || Ib?.["battleData"]?.["battleVersion"] || Ib?.["version"];
      II && (TR.battleVersion = II);
      return TR.battleVersion;
    } catch (If) {
      {
        return null;
      }
    }
  };
  const RK = Ib => {
    {
      const If = Ib?.["body"] || Ib;
      if (!If) {
        return null;
      }
      if (Array.isArray(If)) {
        const IW = If[0];
        return IW?.["roleId"] || IW?.["id"] || IW?.["targetId"];
      }
      const IK = If?.["rankList"]?.[0] || If?.["roleList"]?.[0] || If?.["targets"]?.[0] || If?.["arenaTargets"]?.[0] || If?.["targetList"]?.[0] || If?.["list"]?.[0];
      if (IK) {
        {
          if (IK.roleId) {
            return IK.roleId;
          }
          if (IK.id) {
            return IK.id;
          }
          if (IK.targetId) {
            return IK.targetId;
          }
        }
      }
      return If?.["roleId"] || If?.["id"] || If?.["targetId"] || null;
    }
  };
  const RW = Ib => {
    {
      if (!Ib || "object" != typeof Ib) {
        return null;
      }
      if ("number" == typeof Ib.useTeamId) {
        return Ib.useTeamId;
      }
      for (const II of Object.keys(Ib)) {
        const If = RW(Ib[II]);
        if (If) {
          return If;
        }
      }
      return null;
    }
  };
  const RC = Ib => {
    const II = {
      useTeamId: 1,
      teams: {}
    };
    if (!Ib) {
      return II;
    }
    const If = Ib.presetTeamInfo ?? Ib;
    const IK = If.useTeamId ?? If.presetTeamInfo?.["useTeamId"] ?? RW(If) ?? 1;
    const IW = If.presetTeamInfo ?? If;
    const IC = {};
    const Iy = Object.keys(IW || {}).filter(IY => /^\d+$/.test(IY));
    for (const IY of Iy) {
      const IE = Number(IY);
      const IX = IW[IY];
      const IG = {
        teamInfo: {}
      };
      const IA = {
        teamInfo: {}
      };
      if (IX) {
        if (IX.teamInfo) {
          IC[IE] = {
            teamInfo: IX.teamInfo
          };
        } else {
          if (IX.heroes) {
            const IQ = {};
            IX.heroes.forEach((Ix, Ik) => {
              IQ[String(Ik + 1)] = Ix;
            });
            IC[IE] = {
              teamInfo: IQ
            };
          } else {
            if ("object" == typeof IX) {
              const Ix = Object.values(IX).some(Ig => Ig && "object" == typeof Ig && "heroId" in Ig);
              const Ik = {
                teamInfo: Ix ? IX : {}
              };
              IC[IE] = Ik;
            } else {
              IC[IE] = IG;
            }
          }
        }
      } else {
        IC[IE] = IA;
      }
    }
    return {
      useTeamId: Number(IK) || 1,
      teams: IC
    };
  };
  const Ry = async () => {
    const Ib = document.getElementById("qa-hero-list");
    Ib.innerHTML = "<div class=\"qa-loading\">加载中...</div>";
    try {
      const II = window.ROLE;
      if (!II) {
        return void (Ib.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">window.ROLE 数据不可用</div>");
      }
      const If = II.battleTeam || {};
      const IK = RS(If);
      if (!IK.length) {
        return void (Ib.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">ROLE.battleTeam 为空</div>");
      }
      const IW = II.heroes || TR.roleInfo?.["heroes"] || {};
      const IC = II.items || TR.items || {};
      TR.roleInfo = II;
      TR.items = IC;
      TR.allHeroesData = IW || TR.allHeroesData;
      TR.roleId = II.id || II.roleId || TR.roleId || null;
      RJ();
      Ru(IC, "jade");
      RF(II.dailyTask);
      const Iy = [];
      for (const IY of IK) {
        const Im = RM(If, IY);
        const IE = Number(Im?.["heroId"] || Im?.["id"] || Im);
        if (!Number.isFinite(IE) || IE <= 0) {
          continue;
        }
        const IX = RM(IW, IE) || {};
        Iy.push({
          id: IE,
          name: R3(IE),
          position: Number(IY),
          level: Im?.["level"] || IX?.["level"] || 1,
          equipment: IX?.["equipment"] || {}
        });
      }
      Iy.sort((IG, IA) => IG.position - IA.position);
      TR.heroes = Iy;
      RY(Iy);
    } catch (IG) {
      Ib.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">" + IG.message + "</div>";
    }
  };
  const RY = Ib => {
    const If = document.getElementById("qa-hero-list");
    Ib && 0 !== Ib.length ? (If.innerHTML = Ib.map(IK => {
      {
        const IW = (IC => {
          const Iy = Tf[IC];
          return Iy?.["avatar"] ? "" + Tw + Iy.avatar : "";
        })(IK.id);
        return "\n    <div class=\"qa-hero-item " + (TR.selectedHeroId === IK.id ? "active" : "") + "\" data-hero-id=\"" + IK.id + "\">\n      " + (IW ? "<img src=\"" + IW + "\" style=\"width:20px;height:20px;border-radius:4px;vertical-align:middle;margin-right:4px;\" onerror=\"this.style.display='none'\">" : "") + IK.name + " Lv." + IK.level + "\n    </div>\n  ";
      }
    }).join(""), If.querySelectorAll(".qa-hero-item").forEach(IK => {
      {
        IK.addEventListener("click", () => Rm(Number(IK.dataset.heroId)));
      }
    })) : If.innerHTML = "<div class=\"qa-loading\">暂无阵容数据</div>";
  };
  const Rm = async Ib => {
    const If = document.getElementById("qa-equip-section");
    const IK = document.getElementById("qa-quench-section");
    let IW = TR.roleInfo?.["heroes"];
    if (!IW) {
      If && (If.innerHTML = "<div class=\"qa-loading\">加载装备数据...</div>");
      try {
        {
          const IG = await Rc();
          IW = IG?.["heroes"];
        }
      } catch (IA) {
        IW = null;
      }
    }
    if (!IW) {
      return void (If && (If.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">数据未就绪</div>"));
    }
    let IC = RM(IW, Ib);
    if (!IC?.["equipment"]) {
      If && (If.innerHTML = "<div class=\"qa-loading\">加载装备数据...</div>");
      If && (If.style.display = "block");
      try {
        const Ix = await Rc();
        IW = Ix?.["heroes"] || IW;
        IC = RM(IW, Ib);
      } catch (Ik) {
        return void (If && (If.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">加载失败: " + Ik.message + "</div>"));
      }
    }
    if (!IC) {
      return void (If && (If.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">武将数据不存在</div>"));
    }
    TR.selectedHeroId = Ib;
    TR.selectedPart = null;
    TR.lockedSlots = [];
    TR.quenchCount = 0;
    const Iy = document.getElementById("qa-quench-count");
    Iy && (Iy.textContent = "0");
    document.querySelectorAll(".qa-hero-item").forEach(Ig => {
      Ig.classList.toggle("active", Number(Ig.dataset.heroId) === Ib);
    });
    const IY = IC.equipment || {};
    const Im = document.getElementById("qa-equip-tabs");
    const IE = RS(IY);
    if (0 === IE.length) {
      If.style.display = "none";
      return void (IK && (IK.style.display = "none"));
    }
    If.style.display = "block";
    Im.innerHTML = IE.map(Ig => {
      {
        const Id = RM(IY, Ig);
        return "\n      <div class=\"qa-equip-tab " + (TR.selectedPart === Number(Ig) ? "active" : "") + "\" data-slot-id=\"" + Ig + "\">\n        <div class=\"tab-name\">" + (["武器", "铠甲", "头冠", "坐骑"][Ig - 1] || "装备" + Ig) + "</div>\n        <div class=\"tab-level\">Lv." + (Id?.["level"] || 1) + "</div>\n      </div>\n    ";
      }
    }).join("");
    Im.querySelectorAll(".qa-equip-tab").forEach(Ig => {
      Ig.addEventListener("click", () => RE(Number(Ig.dataset.slotId)));
    });
    IE.length > 0 && RE(Number(IE[0]));
  };
  const RE = Ib => {
    {
      const IK = TR.roleInfo?.["heroes"];
      if (!IK) {
        {
          const IA = document.getElementById("qa-quench-section");
          return void (IA && (IA.innerHTML = "<div class=\"qa-loading\" style=\"color:#ff3b30;\">数据未就绪</div>"));
        }
      }
      TR.selectedPart = Ib;
      document.querySelectorAll(".qa-equip-tab").forEach(Ix => {
        Ix.classList.toggle("active", Number(Ix.dataset.slotId) === Ib);
      });
      const IW = (RM(IK, TR.selectedHeroId) || {}).equipment;
      const IC = RM(IW, Ib) || {};
      const Iy = IC.quenches || RM(IC, "quenches") || {};
      TR.lockedSlots = [];
      const IY = RS(Iy);
      for (const Ix of IY) {
        const Ik = RM(Iy, Ix);
        (Ik?.["isLocked"] || Ik?.["locked"]) && TR.lockedSlots.push(Number(Ix));
      }
      document.getElementById("qa-quench-section").style.display = "block";
      const Im = document.getElementById("qa-quench-times");
      Im && (Im.textContent = (IC.quenchTimes || 0) + "次");
      const IE = document.getElementById("qa-equip-stats");
      const IX = ["攻击", "血量", "防御", "血量"][Ib - 1] || "加成";
      const IG = IC[1 === Ib ? "quenchAttackExt" : 3 === Ib ? "quenchDefenseExt" : "quenchHpExt"] || 0;
      IE && (IE.innerHTML = "\n      <div class=\"stat-item\">\n        <span class=\"stat-label\">" + IX + "加成</span>\n        <span class=\"stat-value\">+" + IG + "</span>\n      </div>\n    ");
      RX(Iy);
    }
  };
  const RX = Ib => {
    {
      const If = document.getElementById("qa-slot-list");
      const IK = RS(Ib).sort((IW, IC) => Number(IW) - Number(IC));
      0 !== IK.length ? (If.innerHTML = IK.map(IW => {
        {
          const Iy = RM(Ib, IW) || {};
          const IY = Iy.isLocked || Iy.locked || TR.lockedSlots.includes(Number(IW));
          const Im = Iy.attrId ? Iy.colorId ? TK[String(Iy.colorId)] || TK[1] : (IC = Iy.attrNum || 0) >= 91 ? TK[6] : IC >= 81 ? TK[5] : IC >= 61 ? TK[4] : IC >= 41 ? TK[3] : IC >= 21 ? TK[2] : TK[1] : TK[1];
          var IC;
          return "\n      <div class=\"qa-slot-item " + (IY ? "locked" : "") + "\" data-quench-id=\"" + IW + "\">\n        <input type=\"checkbox\" class=\"qa-slot-checkbox\" " + (IY ? "checked" : "") + " data-quench-id=\"" + IW + "\">\n        <span class=\"qa-slot-label\">孔" + IW + "</span>\n        " + (Iy.attrId ? "\n          <div class=\"qa-slot-attr\" style=\"color:" + Im + "\">\n            <span>" + (TI[String(Iy.attrId)] || "属性" + Iy.attrId) + "</span>\n            <span>+" + (Iy.attrNum || 0) + "</span>\n          </div>\n        " : "<span class=\"qa-slot-empty\">未淬炼</span>") + "\n      </div>\n    ";
        }
      }).join(""), If.querySelectorAll(".qa-slot-checkbox").forEach(IW => {
        {
          IW.addEventListener("change", async IY => {
            {
              await (async (IE, IX) => {
                if (TR.selectedHeroId && TR.selectedPart) {
                  try {
                    {
                      const IA = {
                        heroId: TR.selectedHeroId,
                        part: TR.selectedPart,
                        slot: IE,
                        isLocked: IX
                      };
                      const IQ = await Rz("equipment_updatequenchlock", IA);
                      if (false === IQ?.["success"]) {
                        throw new Error(IQ?.["message"] || "锁定失败");
                      }
                      IX ? TR.lockedSlots.includes(IE) || TR.lockedSlots.push(IE) : TR.lockedSlots = TR.lockedSlots.filter(Ik => Ik !== IE);
                      const Ix = document.querySelector(".qa-slot-item[data-quench-id=\"" + IE + "\"]");
                      Ix && Ix.classList.toggle("locked", IX);
                      TQ(IX ? "已锁定" : "已解锁", "success");
                    }
                  } catch (Ig) {
                    TQ("锁定操作失败: " + (Ig?.["message"] || Ig), "error");
                  }
                }
              })(Number(IW.dataset.quenchId), IY.target.checked);
            }
          });
        }
      })) : If.innerHTML = "<div class=\"qa-loading\">暂无淬炼数据</div>";
    }
  };
  const RG = {
    __proto__: null,
    ensureBattleVersion: Rf,
    extractTargetId: RK,
    findUseTeamId: RW,
    normalizePresetTeam: RC,
    refreshRoleInfo: Rc,
    refreshTeamData: Ry,
    renderHeroList: RY,
    renderQuenchSlots: RX,
    runCommand: Rb,
    runSequence: RI,
    selectHero: Rm,
    selectPart: RE
  };
  var RA = Object.freeze(RG);
  const RQ = () => {
    const Ib = document.getElementById("qa-bottle-status");
    const II = document.getElementById("qa-bottle-time");
    const If = document.getElementById("qa-bottle-restart-btn");
    Ib && (Ib.textContent = TR.bottleIsRunning ? "运行中" : "已停止");
    II && (II.textContent = R2(TR.bottleRemainingTime));
    If && (If.textContent = TR.bottleIsRunning ? "重启服务" : "启动服务");
  };
  const Rx = Ib => {
    {
      const IK = Ib?.["bottleHelpers"] || Ib?.["role"]?.["bottleHelpers"];
      if (!IK) {
        return;
      }
      const IW = IK.helperStopTime;
      if (IW && IW > 0) {
        {
          const IC = IW - Math.floor(Date.now() / 1000);
          TR.bottleRemainingTime = Math.max(0, IC);
          TR.bottleIsRunning = IC > 0;
          TR.bottleIsRunning && Rk();
        }
      } else {
        TR.bottleRemainingTime = 0;
        TR.bottleIsRunning = false;
      }
      RQ();
    }
  };
  const Rk = () => {
    {
      TR.bottleTimer && clearInterval(TR.bottleTimer);
      TR.bottleTimer = setInterval(() => {
        TR.bottleRemainingTime > 0 ? (TR.bottleRemainingTime--, RQ()) : (clearInterval(TR.bottleTimer), TR.bottleTimer = null, TR.bottleIsRunning = false, RQ());
      }, 1000);
    }
  };
  const Rg = () => {
    {
      const II = document.getElementById("qa-hangup-elapsed");
      const If = document.getElementById("qa-hangup-time");
      II && (II.textContent = R2(TR.hangupElapsedTime || 0));
      If && (If.textContent = R2(TR.hangupRemainingTime || 0));
    }
  };
  const RL = Ib => {
    const II = Ib?.["hangUp"] || Ib?.["role"]?.["hangUp"];
    if (!II) {
      return;
    }
    const If = Math.floor(Date.now() / 1000);
    const IK = II.lastTime || 0;
    const IW = II.hangUpTime || 0;
    const IC = If - IK;
    IC <= IW ? (TR.hangupRemainingTime = Math.floor(IW - IC), TR.hangupElapsedTime = Math.floor(IC)) : (TR.hangupRemainingTime = 0, TR.hangupElapsedTime = IW);
    TR.hangupRemainingTime > 0 && Rd();
    Rg();
  };
  const Rd = () => {
    TR.hangupTimer && clearInterval(TR.hangupTimer);
    TR.hangupTimer = setInterval(() => {
      {
        TR.hangupRemainingTime > 0 ? (TR.hangupRemainingTime--, TR.hangupElapsedTime++, Rg()) : (clearInterval(TR.hangupTimer), TR.hangupTimer = null);
      }
    }, 1000);
  };
  const Z0 = () => {
    const Ib = document.getElementById("qa-legacy-elapsed");
    Ib && (Ib.textContent = R2(TR.legacyElapsedTime || 0));
    const II = document.getElementById("qa-legacy-scroll-count");
    II && (II.textContent = RU(37007));
  };
  const Z1 = Ib => {
    const II = Ib?.["roleLegacy"];
    if (!II || !II.hangUpBeginTime) {
      TR.legacyElapsedTime = 0;
      return void Z0();
    }
    const If = Date.now();
    const IK = Math.floor((If - II.hangUpBeginTime) / 1000);
    TR.legacyElapsedTime = Math.max(0, IK);
    Z2();
    Z0();
  };
  const Z2 = () => {
    TR.legacyTimer && clearInterval(TR.legacyTimer);
    TR.legacyTimer = setInterval(() => {
      TR.legacyElapsedTime++;
      Z0();
    }, 1000);
  };
  const Z3 = () => {
    {
      (() => {
        const If = document.getElementById("qa-tower-floor");
        const IK = document.getElementById("qa-tower-layer");
        const IW = document.getElementById("qa-tower-energy");
        const IC = document.getElementById("qa-tower-status");
        const Iy = window.ROLE?.["tower"];
        const IY = Iy?.["id"] || 0;
        const Im = Math.floor(IY / 10) + 1;
        const IE = IY % 10 + 1;
        const IX = Iy?.["energy"] ?? "--";
        If && (If.textContent = Im);
        IK && (IK.textContent = IE);
        IW && (IW.textContent = IX);
        IC && (TR.towerClimbing ? IC.textContent = "爬塔进行中..." : IC.textContent = "--");
      })();
    }
  };
  const Z4 = Ib => {
    const II = document.getElementById("qa-tower-status");
    II && (II.textContent = Ib || "--");
  };
  const Z5 = new Map();
  let Z6 = 0;
  const Z7 = (Ib, II, If = "") => {
    const IK = ++Z6;
    const IW = setTimeout(() => {
      {
        Z5.delete(IK);
        Ib();
      }
    }, II);
    const IC = {
      handle: IW,
      type: "timeout",
      label: If
    };
    Z5.set(IK, IC);
    return IK;
  };
  const Z8 = Ib => {
    const II = Z5.get(Ib);
    return !!II && ("timeout" === II.type ? clearTimeout(II.handle) : clearInterval(II.handle), Z5.delete(Ib), true);
  };
  "undefined" != typeof window && window.addEventListener("beforeunload", () => {
    for (const [Ib, II] of Z5) "timeout" === II.type ? clearTimeout(II.handle) : clearInterval(II.handle);
    Z5.clear();
  });
  const Z9 = {
    name: "日常",
    action: "daily-fix"
  };
  const ZP = {
    name: "挂机",
    action: "hangup-claim"
  };
  const ZD = {
    name: "盐罐",
    action: "bottle-restart"
  };
  const Zv = {
    name: "功法",
    action: "legacy-claim"
  };
  const ZB = {
    name: "残卷赠送",
    action: "legacy-sendgift-scheduled"
  };
  const ZM = {
    enabled: true,
    time: "08:00"
  };
  const ZS = {
    enabled: true,
    interval: 4
  };
  const ZT = {
    enabled: true,
    interval: 6
  };
  const ZR = {
    enabled: true,
    interval: 2
  };
  const ZZ = {
    enabled: false,
    time: "06:00"
  };
  const ZU = {
    daily: ZM,
    hangup: ZS,
    bottle: ZT,
    legacy: ZR,
    legacyGift: ZZ
  };
  const Zu = {
    daily: Z9,
    hangup: ZP,
    bottle: ZD,
    legacy: Zv,
    legacyGift: ZB
  };
  const ZF = {
    enabled: false,
    tasks: ZU
  };
  let Zp = null;
  let ZV = -1;
  const ZJ = () => window.ROLE?.["roleId"] || TR?.["roleId"] || null;
  const ZH = () => {
    {
      try {
        const If = ZJ();
        const IK = Tp(If);
        const IW = localStorage.getItem(IK);
        if (IW) {
          {
            const IC = JSON.parse(IW);
            const Iy = {
              ...ZF,
              ...IC,
              tasks: {
                ...ZF.tasks,
                ...IC.tasks
              }
            };
            return Iy;
          }
        }
      } catch (Im) {}
      const II = {
        ...ZF
      };
      return II;
    }
  };
  const Zh = Ib => {
    try {
      const II = ZJ();
      const If = Tp(II);
      localStorage.setItem(If, JSON.stringify(Ib));
      TR.scheduleConfig = Ib;
    } catch (IK) {}
  };
  const ZO = () => {
    {
      try {
        const II = ZJ();
        const If = TV(II);
        const IK = localStorage.getItem(If);
        if (IK) {
          return JSON.parse(IK);
        }
      } catch (IW) {}
      return [];
    }
  };
  const Zj = (Ib, II, If = "") => {
    {
      const IK = ZO();
      const IW = new Date();
      const IC = String(IW.getHours()).padStart(2, "0") + ":" + String(IW.getMinutes()).padStart(2, "0") + ":" + String(IW.getSeconds()).padStart(2, "0");
      const Iy = IW.getMonth() + 1 + "/" + IW.getDate();
      const IY = "ok" === II ? "✓" : "skip" === II ? "○" : "✗";
      IK.unshift({
        t: Date.now(),
        d: Iy,
        h: IC,
        k: Ib,
        s: IY,
        n: If
      });
      const Im = Date.now() - 604800000;
      const IE = IK.filter(IX => IX.t > Im).slice(0, 500);
      try {
        const IX = ZJ();
        const IG = TV(IX);
        localStorage.setItem(IG, JSON.stringify(IE));
      } catch (IA) {}
      Zq();
    }
  };
  const Zq = () => {
    {
      const If = document.getElementById("qa-schedule-logs");
      if (!If) {
        return;
      }
      const IK = ZO();
      0 !== IK.length ? If.innerHTML = IK.map(IW => "<div class=\"schedule-log-item\"><span class=\"log-time\">" + IW.d + " " + IW.h + "</span><span class=\"log-task\">" + IW.k + "</span><span class=\"log-status " + ("✓" === IW.s ? "ok" : "○" === IW.s ? "skip" : "fail") + "\">" + IW.s + "</span>" + (IW.n ? "<span class=\"log-note\">" + IW.n + "</span>" : "") + "</div>").join("") : If.innerHTML = "<div class=\"helper-text\">暂无执行记录</div>";
    }
  };
  const Zw = Ib => {
    const II = [];
    for (let If = 0; If < 24; If += Ib) {
      II.push(String(If).padStart(2, "0") + ":00");
    }
    return II;
  };
  const Zb = () => {
    try {
      const II = ZJ();
      const If = TJ(II);
      const IK = localStorage.getItem(If);
      if (IK) {
        return JSON.parse(IK);
      }
    } catch (IW) {}
    const Ib = {
      targetId: null,
      password: null,
      passwordVerified: false
    };
    return Ib;
  };
  const ZI = Ib => {
    {
      try {
        {
          const IW = ZJ();
          const IC = TJ(IW);
          localStorage.setItem(IC, JSON.stringify(Ib));
        }
      } catch (Iy) {}
    }
  };
  const Zc = async Ib => {
    {
      const If = Zu[Ib];
      if (If) {
        if (Zj("[" + If.name + "] 开始执行", "ok"), "legacyGift" !== Ib) {
          try {
            const IK = document.querySelector("[data-action=\"" + If.action + "\"]");
            IK && !IK.disabled ? (IK.click(), TQ("定时执行: " + If.name, "success")) : Zj("[" + If.name + "] 按钮不可用", "skip");
          } catch (IW) {
            {
              Zj("[" + If.name + "] 执行失败", "fail", IW.message?.["slice"](0, 20));
            }
          }
        } else {
          await (async () => {
            const IY = Zb();
            if (IY.targetId) {
              if (IY.passwordVerified) {
                try {
                  {
                    const Im = RU(37007);
                    if (Im <= 0) {
                      return void Zj("[残卷赠送] 无可赠送残卷", "skip");
                    }
                    const IE = IY.giftCount > 0 && IY.giftCount <= Im ? IY.giftCount : Im;
                    const IX = 9999;
                    let IG = IE;
                    let IA = null;
                    for (; IG > 0;) {
                      {
                        const IQ = Math.min(IG, IX);
                        IA = await Rz("legacy_sendgift", {
                          itemCnt: IQ,
                          legacyUIds: [],
                          targetId: parseInt(IY.targetId)
                        }, "定时残卷赠送");
                        IG -= IQ;
                        IG > 0 && (await R4(500));
                      }
                    }
                    Zj("[残卷赠送] 成功", "ok", IE + "个,累计" + (IA?.["roleLegacy"]?.["sendItemCnt"] || 0));
                    TQ("定时赠送成功: " + IE + "个残卷", "success");
                  }
                } catch (Ig) {
                  Zj("[残卷赠送] 失败", "fail", Ig.message?.["slice"](0, 20));
                }
              } else {
                Zj("[残卷赠送] 未验证二级密码", "skip");
              }
            } else {
              Zj("[残卷赠送] 未配置目标ID", "skip");
            }
          })();
        }
      }
    }
  };
  const Zf = () => {
    const II = ZH();
    if (!II.enabled) {
      return;
    }
    const If = new Date();
    const IK = 60 * If.getHours() + If.getMinutes();
    if (IK === ZV) {
      return;
    }
    ZV = IK;
    const IW = String(If.getHours()).padStart(2, "0") + ":" + String(If.getMinutes()).padStart(2, "0");
    const IC = If.getDay();
    Object.entries(II.tasks).forEach(([Iy, IY]) => {
      !IY.enabled || IY.allowedDays && !IY.allowedDays.includes(IC) || (IY.time ? IY.time === IW && Zc(Iy) : IY.interval && Zw(IY.interval).includes(IW) && Zc(Iy));
    });
  };
  const ZK = () => {
    if (Zp) {
      return;
    }
    const Ib = ZH();
    TR.scheduleConfig = Ib;
    Zp = ((II, If, IK = "") => {
      const IW = ++Z6;
      const IC = setInterval(II, 30000);
      const Iy = {
        handle: IC,
        type: "interval",
        label: IK
      };
      Z5.set(IW, Iy);
      return IW;
    })(Zf, 0, "schedule-check");
    Zf();
    ZC();
  };
  const ZW = () => {
    Zp && (Z8(Zp), Zp = null);
    ZV = -1;
    ZC();
  };
  const ZC = () => {
    const Ib = document.getElementById("qa-schedule-status");
    Ib && (ZH().enabled && Zp ? (Ib.textContent = "运行中", Ib.className = "schedule-status-badge running") : (Ib.textContent = "已停止", Ib.className = "schedule-status-badge stopped"));
  };
  const Zy = () => {
    const Ib = ZH();
    const II = document.getElementById("qa-schedule-enabled");
    II && (II.checked = Ib.enabled);
    Object.entries(Ib.tasks).forEach(([IC, Iy]) => {
      const IY = document.getElementById("qa-schedule-" + IC + "-enabled");
      if (IY && (IY.checked = Iy.enabled), Iy.time) {
        const Im = document.getElementById("qa-schedule-" + IC + "-time");
        Im && (Im.value = Iy.time);
      }
      if (Iy.interval) {
        const IE = document.getElementById("qa-schedule-" + IC + "-interval");
        IE && (IE.value = Iy.interval);
      }
    });
    const If = Zb();
    const IK = document.getElementById("qa-schedule-legacyGift-targetId");
    IK && If.targetId && (IK.value = If.targetId);
    const IW = document.getElementById("qa-schedule-legacyGift-count");
    if (IW && If.giftCount && (IW.value = If.giftCount), If.passwordVerified && If.targetId) {
      const IC = document.getElementById("qa-schedule-legacyGift-target-info");
      IC && (IC.style.display = "block");
      const Iy = document.getElementById("qa-schedule-legacyGift-name");
      Iy && If.targetName && (Iy.textContent = If.targetName);
      const IY = document.getElementById("qa-schedule-legacyGift-status");
      IY && (IY.style.display = "inline");
      const Im = document.getElementById("qa-schedule-legacyGift-password-row");
      Im && (Im.style.display = "flex");
      const IE = document.getElementById("qa-schedule-legacyGift-password");
      IE && (IE.disabled = true);
      const IX = document.querySelector("[data-action=\"schedule-legacyGift-verify\"]");
      IX && (IX.style.display = "none");
      const IG = document.getElementById("qa-schedule-legacyGift-reset");
      IG && (IG.style.display = "");
    }
    ZC();
    Zq();
    ZY();
  };
  const ZY = () => {
    const II = ZH();
    if (!II.enabled) {
      return;
    }
    const If = new Date();
    const IK = 60 * If.getHours() + If.getMinutes();
    Object.entries(II.tasks).forEach(([IW, IC]) => {
      {
        const Im = document.getElementById("qa-schedule-" + IW + "-next");
        if (!Im) {
          return;
        }
        if (!IC.enabled) {
          return void (Im.textContent = "--");
        }
        let IE = "--";
        if (IC.time) {
          {
            const [IG, IA] = IC.time.split(":").map(Number);
            IE = 60 * IG + IA > IK ? IC.time : "明天 " + IC.time;
          }
        } else {
          if (IC.interval) {
            {
              const Ix = Zw(IC.interval);
              IE = Ix.find(Ik => {
                const [Ig, IL] = Ik.split(":").map(Number);
                return 60 * Ig + IL > IK;
              }) || "明天 " + Ix[0];
            }
          }
        }
        Im.textContent = IE;
      }
    });
  };
  const Zm = 320;
  const ZE = 240;
  const ZX = Ib => !Ib || "number" != typeof Ib || Ib < (() => {
    const II = new Date();
    II.setHours(0, 0, 0, 0);
    return Math.floor(II.getTime() / 1000);
  })();
  const ZG = () => {
    const Ib = new Date();
    const II = new Date(Ib.getFullYear(), Ib.getMonth() + 1, 0).getDate();
    const If = Ib.getDate();
    return {
      daysInMonth: II,
      dayOfMonth: If,
      remainingDays: Math.max(0, II - If),
      monthProgress: Math.min(1, Math.max(0, If / II))
    };
  };
  const ZA = (Ib, II, If) => 0 === II ? Ib : Math.min(Ib, Math.ceil(If * Ib));
  const ZQ = Ib => {
    {
      const If = Ib?.["rankList"]?.[0] || Ib?.["roleList"]?.[0] || Ib?.["targets"]?.[0] || Ib?.["targetList"]?.[0] || Ib?.["list"]?.[0];
      return If?.["roleId"] ? If.roleId : If?.["id"] ? If.id : Ib?.["roleId"] || Ib?.["id"];
    }
  };
  const Zx = async () => {
    try {
      {
        const If = await Rz("activity_get", {}, "月度任务-获取活动数据");
        const IK = If?.["activity"] || If?.["body"]?.["activity"] || If;
        TR.monthlyActivity = IK || null;
        return IK;
      }
    } catch (IW) {
      {
        TQ("获取月度活动数据失败: " + IW.message, "error");
        return null;
      }
    }
  };
  const Zk = () => {
    {
      const Ib = TR.monthlyActivity;
      const {
        remainingDays: II,
        monthProgress: If
      } = ZG();
      const IK = document.getElementById("qa-monthly-days");
      IK && (IK.textContent = II > 0 ? "剩余 " + II + " 天" : "本月最后一天");
      const IW = Ib?.["myMonthInfo"] || {};
      const IC = Ib?.["myArenaInfo"] || {};
      const Iy = Number(IW?.[2]?.["num"] || 0);
      const IY = Number(IC?.["num"] || 0);
      const Im = Math.min(100, Math.round(Iy / Zm * 100));
      const IE = Math.min(100, Math.round(IY / ZE * 100));
      const IX = ZA(Zm, II, If);
      const IG = ZA(ZE, II, If);
      const IA = document.getElementById("qa-monthly-fish");
      const IQ = document.getElementById("qa-monthly-arena");
      IA && (IA.innerHTML = "\n      <span class=\"stat-value\">" + Iy + " / 320</span>\n      <span class=\"stat-sub\">" + Im + "% (应达: " + IX + ")</span>\n    ");
      IQ && (IQ.innerHTML = "\n      <span class=\"stat-value\">" + IY + " / 240</span>\n      <span class=\"stat-sub\">" + IE + "% (应达: " + IG + ")</span>\n    ");
      const Ix = document.getElementById("qa-monthly-status");
      Ix && (Iy >= IX && IY >= IG ? (Ix.textContent = "已达标", Ix.className = "club-status-badge success") : (Ix.textContent = "需补差", Ix.className = "club-status-badge warning"));
    }
  };
  const Zg = async (Ib = "topup") => {
    const If = TR.monthlyActivity;
    if (!If) {
      return;
    }
    const IK = If?.["myMonthInfo"] || {};
    let IW = Number(IK?.[2]?.["num"] || 0);
    const {
      remainingDays: IC,
      monthProgress: Iy
    } = ZG();
    const IY = ZA(Zm, IC, Iy);
    const Im = "complete" === Ib ? Zm : IY;
    let IE = Math.max(0, Im - IW);
    if (!(IE <= 0)) {
      TR.monthlyFishRunning = true;
      Zd();
      try {
        {
          let IX = TR.roleInfo;
          IX || (IX = await Rc());
          const IG = Number(IX?.["statistics"]?.["artifact:normal:lottery:time"] || 0);
          if (ZX(IG)) {
            for (let Id = 0; Id < 3; Id++) {
              const c0 = document.getElementById("qa-monthly-status");
              c0 && (c0.textContent = "免费钓鱼 " + (Id + 1) + "/3");
              try {
                const c1 = {
                  lotteryNumber: 1,
                  newFree: true,
                  type: 1
                };
                await Rz("artifact_lottery", c1, "月度任务-免费钓鱼 " + (Id + 1) + "/3");
                await Zx();
                Zk();
                await R4(500);
              } catch {
                break;
              }
            }
            const IL = TR.monthlyActivity;
            IW = Number(IL?.["myMonthInfo"]?.[2]?.["num"] || 0);
            IE = Math.max(0, Im - IW);
          }
          if (IE <= 0) {
            return void Zk();
          }
          let IA = IE;
          let IQ = 0;
          const Ix = Math.ceil(IE / 10);
          for (; IA > 0;) {
            const c2 = Math.min(10, IA);
            IQ++;
            try {
              const c4 = {
                lotteryNumber: c2,
                newFree: true,
                type: 1
              };
              await Rz("artifact_lottery", c4, "月度任务-钓鱼批次 " + IQ + "/" + Ix);
            } catch (c5) {
              {
                break;
              }
            }
            IA -= c2;
            await Zx();
            Zk();
            const c3 = document.getElementById("qa-monthly-status");
            c3 && (c3.textContent = "钓鱼中 " + IQ + "/" + Ix);
            IA > 0 && (await R4(800));
          }
          await Zx();
          Zk();
          const Ik = TR.monthlyActivity;
          const Ig = Number(Ik?.["myMonthInfo"]?.[2]?.["num"] || 0);
          Ig >= Im || TQ("钓鱼补差完成: " + IW + " -> " + Ig, "success");
        }
      } finally {
        TR.monthlyFishRunning = false;
        Zd();
      }
    }
  };
  const ZL = async (Ib = "topup") => {
    const If = TR.monthlyActivity;
    if (!If) {
      return;
    }
    const IK = If?.["myArenaInfo"] || {};
    let IW = Number(IK?.["num"] || 0);
    const {
      remainingDays: IC,
      monthProgress: Iy
    } = ZG();
    const IY = ZA(ZE, IC, Iy);
    const Im = "complete" === Ib ? ZE : IY;
    let IE = Math.max(0, Im - IW);
    if (!(IE <= 0)) {
      TQ("竞技场已达标", "info");
      TR.monthlyArenaRunning = true;
      Zd();
      try {
        if (await Rf(), !TR.battleVersion) {
          return;
        }
        TQ("无法获取battleVersion", "error");
        try {
          await Rz("arena_startarea", {}, "月度任务-开始竞技场");
        } catch {}
        const IX = 100;
        let IG = 0;
        let IA = 0;
        const IQ = Math.ceil(IE / 2);
        for (; IE > 0 && IG < IX;) {
          {
            const Ik = document.getElementById("qa-monthly-status");
            let Ig;
            Ik && (Ik.textContent = "竞技场 " + (IA + 1) + "/" + IQ + " (进度:" + IW + "/" + Im + ")");
            try {
              Ig = await Rz("arena_getareatarget", {}, "月度任务-获取竞技场目标");
            } catch (c1) {
              break;
            }
            const IL = ZQ(Ig);
            if (!IL) {
              break;
            }
            try {
              {
                const c2 = {
                  targetId: IL
                };
                await Rz("fight_startareaarena", c2, "月度任务-竞技场战斗 " + (IA + 1));
                IA++;
              }
            } catch (c4) {}
            IG++;
            await Zx();
            Zk();
            const Id = TR.monthlyActivity;
            IW = Number(Id?.["myArenaInfo"]?.["num"] || 0);
            IE = Math.max(0, Im - IW);
            IE > 0 && (await R4(1000));
          }
        }
        await Zx();
        Zk();
        IW >= Im || IG >= IX && TQ("竞技场补差完成: " + IW + "次", "success");
      } finally {
        {
          TR.monthlyArenaRunning = false;
          Zd();
        }
      }
    }
  };
  const Zd = () => {
    const Ib = document.getElementById("qa-monthly-fish-btn");
    const II = document.getElementById("qa-monthly-fish-complete-btn");
    const If = document.getElementById("qa-monthly-arena-btn");
    const IK = document.getElementById("qa-monthly-arena-complete-btn");
    const IW = document.getElementById("qa-monthly-refresh-btn");
    const IC = TR.monthlyFishRunning;
    const Iy = TR.monthlyArenaRunning;
    const IY = IC || Iy;
    Ib && (Ib.disabled = IY, Ib.textContent = IC ? "补齐中..." : "钓鱼补齐");
    II && (II.disabled = IY);
    If && (If.disabled = IY, If.textContent = Iy ? "补齐中..." : "竞技场补齐");
    IK && (IK.disabled = IY);
    IW && (IW.disabled = IY);
  };
  const U0 = () => {
    const Ib = new Date();
    if (0 !== Ib.getDay()) {
      return false;
    }
    const II = new Date(Ib);
    II.setDate(Ib.getDate() + 7);
    return II.getMonth() !== Ib.getMonth();
  };
  const U1 = () => {
    {
      const II = document.getElementById("qa-warguess-status");
      const If = document.getElementById("qa-warguess-inactive");
      const IK = document.getElementById("qa-warguess-content");
      const IW = document.getElementById("qa-warguess-next-date");
      const IC = document.getElementById("qa-warguess-top-legion");
      const Iy = document.getElementById("qa-warguess-top-power");
      const IY = U0();
      II && (II.textContent = IY ? "开放中" : "未开放", II.className = "club-status-badge " + (IY ? "success" : "warning"));
      If && (If.style.display = IY ? "none" : "block");
      IK && (IK.style.display = IY ? "block" : "none");
      IW && !IY && (IW.textContent = "下次开放：" + (() => {
        {
          const IX = new Date();
          let IG = IX.getFullYear();
          let IA = IX.getMonth();
          const IQ = (Ik, Ig) => {
            const IL = new Date(Ik, Ig + 1, 0);
            const Id = IL.getDay();
            const c0 = new Date(IL);
            c0.setDate(IL.getDate() - Id);
            return c0;
          };
          let Ix = IQ(IG, IA);
          IX > Ix && (IA++, IA > 11 && (IA = 0, IG++), Ix = IQ(IG, IA));
          return Ix.getMonth() + 1 + "月" + Ix.getDate() + "日 (星期日)";
        }
      })());
      const Im = TR.warguessRankData;
      if (Im?.["list"]?.[0]) {
        const IE = Im.list[0];
        IC && (IC.textContent = IE.name || "--");
        Iy && (Iy.textContent = IE.power ? IE.power.toLocaleString() : "--");
      }
    }
  };
  let U2 = null;
  const U3 = Ib => {
    {
      const If = Number(Ib || 0);
      return If >= 1000000000000 ? (If / 1000000000000).toFixed(2) + "兆" : If >= 100000000 ? (If / 100000000).toFixed(2) + "亿" : If >= 10000 ? (If / 10000).toFixed(2) + "万" : String(If);
    }
  };
  const U4 = Ib => 1 === Ib ? "团长" : 2 === Ib ? "副团长" : "成员";
  const U5 = Ib => {
    U2 = Ib;
    const II = document.getElementById("qa-club-content");
    const If = document.getElementById("qa-club-status");
    if (!II) {
      return;
    }
    const IK = Ib?.["info"];
    if (!IK) {
      II.innerHTML = "<div class=\"helper-text\">暂无俱乐部</div>";
      return void (If && (If.textContent = "未加入", If.className = "club-status-badge"));
    }
    If && (If.textContent = "已加入", If.className = "club-status-badge active");
    const IW = Object.values(IK.members || {});
    IW.find(IX => Number(IX.roleId) === Number(IK.leaderId));
    const IC = [...IW].sort((IX, IG) => Number(IG.power || IG.custom?.["s_power"] || 0) - Number(IX.power || IX.custom?.["s_power"] || 0)).slice(0, 30);
    const Iy = U3(IK.power || 0);
    const IY = IW.length;
    const Im = IK.redQuenchCnt || 0;
    const IE = U3(IK.currentBoss?.["currentHP"] || 0);
    II.innerHTML = "\n    <div class=\"club-overview\">\n      <div class=\"club-header-row\">\n        <div class=\"club-avatar\">\n          <img src=\"" + (IK.logo || "") + "\" onerror=\"this.style.display='none'\" alt=\"\">\n        </div>\n        <div class=\"club-meta\">\n          <div class=\"club-name\">" + (IK.name || "未知俱乐部") + "</div>\n          <div class=\"club-sub\">ID " + (IK.id || "-") + " · Lv." + (IK.level || 1) + " · 服务器 " + (IK.serverId || "--") + "</div>\n        </div>\n      </div>\n      <div class=\"club-stats-grid\">\n        <div class=\"club-stat-item\"><div class=\"stat-label\">战力</div><div class=\"stat-value\">" + Iy + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">成员数</div><div class=\"stat-value\">" + IY + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">红粹</div><div class=\"stat-value\">" + Im + "</div></div>\n        <div class=\"club-stat-item\"><div class=\"stat-label\">Boss血量</div><div class=\"stat-value\">" + IE + "</div></div>\n      </div>\n    </div>\n    <div class=\"club-members-section\">\n      <div class=\"section-title\">成员列表 (前30)</div>\n      <div class=\"club-members-list\" id=\"qa-club-members\">\n        " + IC.map(IX => "\n          <div class=\"member-row\">\n            <div class=\"member-left\">\n              <img src=\"" + (IX.headImg || "") + "\" onerror=\"this.style.display='none'\" class=\"member-avatar\">\n              <span class=\"member-name\">" + IX.name + "</span>\n            </div>\n            <div class=\"member-right\">\n              <span class=\"member-power\">" + U3(IX.power || IX.custom?.["s_power"] || 0) + "</span>\n              <span class=\"member-red\">" + (IX.custom?.["red_quench_cnt"] || 0) + "红</span>\n              <span class=\"member-job " + (1 === IX.job ? "job-leader" : 2 === IX.job ? "job-vice" : "") + "\">" + U4(IX.job) + "</span>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
  };
  const U6 = async () => {
    try {
      {
        const If = await Rz("legion_getinfo", {});
        U5(If);
        TQ("获取俱乐部信息成功", "success");
        return If;
      }
    } catch (IK) {
      TQ("获取俱乐部信息失败: " + IK.message, "error");
      return null;
    }
  };
  const U7 = async () => {
    {
      try {
        await Rz("legion_signin", {});
        TQ("俱乐部签到成功", "success");
      } catch (II) {
        TQ("俱乐部签到失败: " + II.message, "error");
      }
    }
  };
  const U8 = async () => {
    if (!U2?.["info"]) {
      return void TQ("暂无俱乐部数据", "warning");
    }
    TQ("正在加载头像...", "info", 2000);
    const II = (() => {
      {
        const Ik = "dark" === TR.theme;
        const Ig = {
          bg: Ik ? "#1a1a2e" : "#ffffff",
          text: Ik ? "#f9fafb" : "#1f2937",
          textSecondary: Ik ? "#9ca3af" : "#6b7280",
          headerBg: Ik ? "#374151" : "#f3f4f6",
          headerText: Ik ? "#d1d5db" : "#374151",
          border: Ik ? "#4b5563" : "#e5e7eb",
          zebraStripe: Ik ? "#2d2d44" : "#f9fafb",
          red: "#ef4444",
          pink: "#ec4899",
          blue: "#3b82f6"
        };
        return Ig;
      }
    })();
    const If = U2.info;
    const IK = Object.values(If.members || {});
    const IW = [...IK].sort((Ix, Ik) => Number(Ik.power || Ik.custom?.["s_power"] || 0) - Number(Ix.power || Ix.custom?.["s_power"] || 0));
    const IC = await Promise.all(IW.map(Ix => {
      Ik = Ix.headImg;
      return new Promise(Ig => {
        if (!Ik) {
          return void Ig(null);
        }
        const IL = new Image();
        IL.crossOrigin = "anonymous";
        IL.onload = () => Ig(IL);
        IL.onerror = () => Ig(null);
        IL.src = Ik;
      });
      var Ik;
    }));
    const Iy = document.createElement("canvas");
    const IY = Iy.getContext("2d");
    const Im = 20;
    const IE = [50, 40, 140, 110, 70, 70];
    const IX = IE.reduce((Ix, Ik) => Ix + Ik, 0) + 40;
    const IG = 100 + 32 * (IW.length + 1) + 30 + 40;
    Iy.width = 2 * IX;
    Iy.height = 2 * IG;
    IY.scale(2, 2);
    IY.fillStyle = II.bg;
    IY.fillRect(0, 0, IX, IG);
    IY.fillStyle = II.text;
    IY.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText(If.name || "俱乐部", Im, 44);
    IY.fillStyle = II.textSecondary;
    IY.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText("ID " + If.id + " · Lv." + If.level + " · 服务器 " + (If.serverId || "--"), Im, 68);
    IY.fillText("战力: " + U3(If.power || 0) + " | 成员: " + IK.length + " | 红粹: " + (If.redQuenchCnt || 0), Im, 90);
    IY.fillStyle = II.headerBg;
    IY.fillRect(Im, 100, IX - 40, 32);
    IY.fillStyle = II.headerText;
    IY.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
    let IA = Im;
    ["排名", "头像", "昵称", "战力", "红粹", "职位"].forEach((Ix, Ik) => {
      IY.fillText(Ix, IA + 8, 121);
      IA += IE[Ik];
    });
    IY.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
    IW.forEach((Ix, Ik) => {
      {
        const Id = 100 + 32 * (Ik + 1);
        Ik % 2 == 1 && (IY.fillStyle = II.zebraStripe, IY.fillRect(Im, Id, IX - 40, 32));
        IY.fillStyle = II.text;
        let c0 = Im;
        IY.fillText(String(Ik + 1), c0 + 8, Id + 21);
        c0 += IE[0];
        const c1 = IC[Ik];
        if (c1) {
          {
            const c2 = c0 + (IE[1] - 24) / 2;
            const c3 = Id + 4;
            IY.save();
            IY.beginPath();
            IY.arc(c2 + 12, c3 + 12, 12, 0, 2 * Math.PI);
            IY.closePath();
            IY.clip();
            IY.drawImage(c1, c2, c3, 24, 24);
            IY.restore();
          }
        }
        c0 += IE[1];
        IY.fillText(Ix.name || "-", c0 + 8, Id + 21);
        c0 += IE[2];
        IY.fillText(U3(Ix.power || Ix.custom?.["s_power"] || 0), c0 + 8, Id + 21);
        c0 += IE[3];
        IY.fillStyle = II.red;
        IY.fillText((Ix.custom?.["red_quench_cnt"] || 0) + "红", c0 + 8, Id + 21);
        c0 += IE[4];
        1 === Ix.job ? IY.fillStyle = II.red : 2 === Ix.job ? IY.fillStyle = II.pink : IY.fillStyle = II.blue;
        IY.fillText(U4(Ix.job), c0 + 8, Id + 21);
        IY.fillStyle = II.text;
      }
    });
    IY.strokeStyle = II.border;
    IY.lineWidth = 1;
    IY.strokeRect(Im, 100, IX - 40, 32 * (IW.length + 1));
    const IQ = new Date().toLocaleString("zh-CN");
    IY.fillStyle = II.textSecondary;
    IY.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText("导出时间: " + IQ, Im, IG - Im);
    await R9(Iy, "俱乐部_" + If.name + "_" + IQ.replace(/[/:]/g, "-") + ".png");
    TQ("俱乐部信息导出成功", "success");
  };
  const U9 = {
    __proto__: null,
    clubSignIn: U7,
    exportClubImage: U8,
    fetchClubInfo: U6,
    renderClubInfo: U5
  };
  var UP = Object.freeze(U9);
  let UD = false;
  let Uv = null;
  const UB = async () => {
    try {
      {
        await Rz("tower_getinfo", {}, "爬塔-获取信息");
        return window.ROLE?.["tower"]?.["energy"] ?? 0;
      }
    } catch (If) {
      return window.ROLE?.["tower"]?.["energy"] ?? 0;
    }
  };
  const Uz = async Ib => {
    {
      try {
        const If = (IC => {
          {
            if (null == IC) {
              return null;
            }
            const IY = "string" == typeof IC ? Number(IC) : IC;
            return Number.isFinite(IY) ? IY : null;
          }
        })(Ib?.["battleData"]?.["options"]?.["towerId"]);
        if (null === If) {
          return;
        }
        if (0 != If % 10) {
          return;
        }
        const IK = Math.floor(If / 10);
        await R4(1500);
        const IW = window.ROLE?.["tower"]?.["reward"];
        IW && IW[IK] || (await Rz("tower_claimreward", {
          rewardId: IK
        }, "爬塔-领取通关奖励"), TQ("成功领取第" + IK + "层奖励", "success"));
      } catch (IC) {
        TQ("领取爬塔奖励失败: " + (IC.message || "未知错误"), "warning");
      }
    }
  };
  const UM = () => {
    {
      const Ib = document.getElementById("qa-tower-loop-btn");
      const II = document.getElementById("qa-tower-stop-btn");
      Ib && (Ib.textContent = "开始爬塔", Ib.disabled = false);
      II && (II.style.display = "inline-block");
    }
  };
  let US = false;
  const UR = Ib => {
    if (!Ib) {
      return null;
    }
    if (Array.isArray(Ib)) {
      {
        const If = Ib[0];
        return If?.["roleId"] || If?.["id"] || If?.["targetId"];
      }
    }
    const II = Ib?.["rankList"]?.[0] || Ib?.["roleList"]?.[0] || Ib?.["targets"]?.[0] || Ib?.["targetList"]?.[0] || Ib?.["list"]?.[0];
    if (II) {
      if (II.roleId) {
        return II.roleId;
      }
      if (II.id) {
        return II.id;
      }
      if (II.targetId) {
        return II.targetId;
      }
    }
    return Ib?.["roleId"] || Ib?.["id"] || Ib?.["targetId"];
  };
  const UZ = () => {
    {
      if (!window.ROLE) {
        return 0;
      }
      const II = window.ROLE.items || {};
      return RZ(II, 1007);
    }
  };
  const UU = async () => {
    const Ib = document.getElementById("qa-arena-ticket");
    const II = document.getElementById("qa-arena-fought");
    const If = document.getElementById("qa-arena-status");
    If && (If.textContent = "刷新中...");
    try {
      {
        const IW = window.ROLE;
        if (!IW) {
          If && (If.textContent = "数据未就绪");
          return void TQ("window.ROLE 数据未就绪", "warning");
        }
        const IC = UZ();
        Ib && (Ib.textContent = IC);
        const Iy = IW?.["dailyTask"] || {};
        const IY = RM(Iy?.["complete"], 13);
        II && (-1 === IY ? (II.textContent = "未完成", II.style.color = "") : (II.textContent = "已完成", II.style.color = "#10b981"));
        If && (If.textContent = "数据已刷新");
        TQ("竞技场数据刷新成功", "success");
      }
    } catch (Im) {
      If && (If.textContent = "刷新失败");
      TQ("刷新失败: " + Im.message, "error");
    }
  };
  const UN = {
    PUSH: 1,
    POP: 2,
    DUP: 3,
    SWAP: 4,
    ADD: 16,
    SUB: 17,
    MUL: 18,
    DIV: 19,
    MOD: 20,
    EQ: 32,
    NE: 33,
    LT: 34,
    GT: 35,
    JMP: 48,
    JZ: 49,
    JNZ: 50,
    CALL: 51,
    RET: 52,
    GET: 64,
    SET: 65,
    INVOKE: 66,
    NEW: 67,
    AWAIT: 80,
    LOAD: 96,
    STORE: 97,
    CONST: 98
  };
  Object.fromEntries(Object.entries(UN).map(([Ib, II]) => [II, Ib]));
  const Uu = (() => {
    {
      const II = new Uint32Array(256);
      for (let If = 0; If < 256; If++) {
        {
          let IK = If;
          for (let IW = 0; IW < 8; IW++) {
            IK = 1 & IK ? 3988292384 ^ IK >>> 1 : IK >>> 1;
          }
          II[If] = IK;
        }
      }
      return II;
    }
  })();
  class UF {
    constructor() {
      this.constants = [];
      this.constantMap = new Map();
      this.bytecode = [];
      this.labels = new Map();
      this.pendingJumps = [];
    }
    addConstant(Ib) {
      {
        const IK = "object" == typeof Ib ? JSON.stringify(Ib) : String(Ib);
        if (this.constantMap.has(IK)) {
          return this.constantMap.get(IK);
        }
        const IW = this.constants.length;
        this.constants.push(Ib);
        this.constantMap.set(IK, IW);
        return IW;
      }
    }
    emit(Ib) {
      this.bytecode.push(Ib);
      return this.bytecode.length - 1;
    }
    emitWithArg(Ib, II) {
      {
        this.bytecode.push(Ib);
        this.bytecode.push(255 & II);
        this.bytecode.push(II >> 8 & 255);
        return this.bytecode.length - 3;
      }
    }
    emitWithArgs(Ib, II, If) {
      {
        this.bytecode.push(Ib);
        this.bytecode.push(255 & II);
        this.bytecode.push(II >> 8 & 255);
        this.bytecode.push(255 & If);
        return this.bytecode.length - 4;
      }
    }
    defineLabel(Ib) {
      this.labels.set(Ib, this.bytecode.length);
    }
    jumpToLabel(Ib, II) {
      const If = this.emitWithArg(Ib, 0);
      this.pendingJumps.push({
        pos: If + 1,
        label: II
      });
    }
    resolveJumps() {
      for (const {
        pos: Ib,
        label: II
      } of this.pendingJumps) {
        const If = this.labels.get(II);
        if (undefined === If) {
          throw new Error("Undefined label: " + II);
        }
        this.bytecode[Ib] = 255 & If;
        this.bytecode[Ib + 1] = If >> 8 & 255;
      }
    }
    compilePush(Ib) {
      const II = this.addConstant(Ib);
      this.emitWithArg(UN.PUSH, II);
    }
    compileLoad(Ib) {
      {
        const If = this.addConstant(Ib);
        this.emitWithArg(UN.LOAD, If);
      }
    }
    compileStore(Ib) {
      const II = this.addConstant(Ib);
      this.emitWithArg(UN.STORE, II);
    }
    compileGetProp(Ib) {
      {
        const If = this.addConstant(Ib);
        this.emitWithArg(UN.GET, If);
      }
    }
    compileSetProp(Ib) {
      const II = this.addConstant(Ib);
      this.emitWithArg(UN.SET, II);
    }
    compileInvoke(Ib, II) {
      const If = this.addConstant(Ib);
      this.emitWithArgs(UN.INVOKE, If, II);
    }
    compileAwait() {
      {
        this.emit(UN.AWAIT);
      }
    }
    compileReturn() {
      {
        this.emit(UN.RET);
      }
    }
    compileBinaryOp(Ib) {
      const II = {
        "+": UN.ADD,
        "-": UN.SUB,
        "*": UN.MUL,
        "/": UN.DIV,
        "%": UN.MOD,
        "==": UN.EQ,
        "===": UN.EQ,
        "!=": UN.NE,
        "!==": UN.NE,
        "<": UN.LT,
        ">": UN.GT
      };
      const If = II[Ib];
      if (undefined === If) {
        throw new Error("Unsupported operator: " + Ib);
      }
      this.emit(If);
    }
    finalize() {
      this.resolveJumps();
      const II = new Uint8Array(this.bytecode);
      const If = Math.floor(256 * Math.random());
      const IK = (IG => {
        let IA = 4294967295;
        for (let IQ = 0; IQ < IG.length; IQ++) {
          IA = Uu[255 & (IA ^ IG[IQ])] ^ IA >>> 8;
        }
        return (4294967295 ^ IA) >>> 0;
      })(II);
      const IW = ((IG, IA) => {
        const IQ = new Uint8Array(IG.length);
        for (let Ix = 0; Ix < IG.length; Ix++) {
          IQ[Ix] = 255 & (IG[Ix] ^ IA ^ 255 & Ix);
        }
        return IQ;
      })(II, If);
      const IC = JSON.stringify(this.constants);
      const Iy = new TextEncoder().encode(IC);
      const IY = 7 + Iy.length + IW.length;
      const Im = new Uint8Array(IY);
      const IE = new DataView(Im.buffer);
      let IX = 0;
      IE.setUint8(IX++, If);
      IE.setUint32(IX, IK, true);
      IX += 4;
      IE.setUint16(IX, Iy.length, true);
      IX += 2;
      Im.set(Iy, IX);
      IX += Iy.length;
      Im.set(IW, IX);
      return Im;
    }
    toBase64() {
      const Ib = this.finalize();
      return btoa(String.fromCharCode(...Ib));
    }
  }
  const Up = (() => {
    const Ib = new Uint32Array(256);
    for (let II = 0; II < 256; II++) {
      let If = II;
      for (let IK = 0; IK < 8; IK++) {
        If = 1 & If ? 3988292384 ^ If >>> 1 : If >>> 1;
      }
      Ib[II] = If;
    }
    return Ib;
  })();
  var UV = Object.freeze({
    __proto__: null,
    VMInterpreter: class {
      constructor(Ib, II = {}) {
        const {
          bytecode: If,
          constants: IK,
          checksum: IW,
          key: IC
        } = this._parseBlob(Ib);
        if (this.bytecode = ((Iy, IY) => {
          const Im = new Uint8Array(Iy.length);
          for (let IE = 0; IE < Iy.length; IE++) {
            Im[IE] = 255 & (Iy[IE] ^ IY ^ 255 & IE);
          }
          return Im;
        })(If, IC), this.constants = IK, this.externals = II, !this._verifyChecksum(IW)) {
          throw new Error("VM: Bytecode integrity check failed");
        }
        this.stack = new Array(256);
        this.sp = 0;
        this.callStack = [];
        this.locals = {};
        this.pc = 0;
      }
      _parseBlob(Ib) {
        {
          const If = new DataView(Ib.buffer || Ib);
          let IK = 0;
          const IW = If.getUint8(IK++);
          const IC = If.getUint32(IK, true);
          IK += 4;
          const Iy = If.getUint16(IK, true);
          IK += 2;
          const IY = new Uint8Array(Ib.slice(IK, IK + Iy));
          const Im = new TextDecoder().decode(IY);
          const IE = JSON.parse(Im);
          IK += Iy;
          return {
            bytecode: new Uint8Array(Ib.slice(IK)),
            constants: IE,
            checksum: IC,
            key: IW
          };
        }
      }
      _verifyChecksum(Ib) {
        const If = (IK => {
          let IW = 4294967295;
          for (let IC = 0; IC < IK.length; IC++) {
            IW = Up[255 & (IW ^ IK[IC])] ^ IW >>> 8;
          }
          return (4294967295 ^ IW) >>> 0;
        })(this.bytecode);
        return If === Ib;
      }
      _push(Ib) {
        this.sp >= this.stack.length && (this.stack.length = 2 * this.stack.length);
        this.stack[this.sp++] = Ib;
      }
      _pop() {
        if (0 === this.sp) {
          throw new Error("VM: Stack underflow");
        }
        return this.stack[--this.sp];
      }
      _peek() {
        {
          if (0 === this.sp) {
            throw new Error("VM: Stack underflow");
          }
          return this.stack[this.sp - 1];
        }
      }
      _readByte() {
        {
          return this.bytecode[this.pc++];
        }
      }
      _readUint16() {
        const Ib = this.bytecode[this.pc] | this.bytecode[this.pc + 1] << 8;
        this.pc += 2;
        return Ib;
      }
      async execute() {
        {
          if (!([() => {
            {
              const IW = performance.now();
              return performance.now() - IW < 10;
            }
          }, () => {
            let If = false;
            const IK = () => {
              If = true;
            };
            IK.toString = () => (If = true, "");
            console.log("%c", IK);
            return !If;
          }, () => !(window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160)].filter(If => {
            try {
              {
                return If();
              }
            } catch {
              return false;
            }
          }).length >= 2)) {
            throw new Error("VM: Environment check failed");
          }
          for (; this.pc < this.bytecode.length;) {
            const If = this._readByte();
            switch (If) {
              case UN.PUSH:
                {
                  {
                    const IW = this._readUint16();
                    this._push(this.constants[IW]);
                    break;
                  }
                }
              case UN.POP:
                this._pop();
                break;
              case UN.DUP:
                this._push(this._peek());
                break;
              case UN.SWAP:
                {
                  const IC = this._pop();
                  const Iy = this._pop();
                  this._push(IC);
                  this._push(Iy);
                  break;
                }
              case UN.ADD:
                {
                  const IY = this._pop();
                  const Im = this._pop();
                  this._push(Im + IY);
                  break;
                }
              case UN.SUB:
                {
                  const IE = this._pop();
                  const IX = this._pop();
                  this._push(IX - IE);
                  break;
                }
              case UN.MUL:
                {
                  {
                    const IA = this._pop();
                    const IQ = this._pop();
                    this._push(IQ * IA);
                    break;
                  }
                }
              case UN.DIV:
                {
                  const Ix = this._pop();
                  const Ik = this._pop();
                  this._push(Ik / Ix);
                  break;
                }
              case UN.MOD:
                {
                  const Ig = this._pop();
                  const IL = this._pop();
                  this._push(IL % Ig);
                  break;
                }
              case UN.EQ:
                {
                  const Id = this._pop();
                  const c0 = this._pop();
                  this._push(c0 === Id ? 1 : 0);
                  break;
                }
              case UN.NE:
                {
                  const c1 = this._pop();
                  const c2 = this._pop();
                  this._push(c2 !== c1 ? 1 : 0);
                  break;
                }
              case UN.LT:
                {
                  const c3 = this._pop();
                  const c4 = this._pop();
                  this._push(c4 < c3 ? 1 : 0);
                  break;
                }
              case UN.GT:
                {
                  {
                    const c5 = this._pop();
                    const c6 = this._pop();
                    this._push(c6 > c5 ? 1 : 0);
                    break;
                  }
                }
              case UN.JMP:
                this.pc = this._readUint16();
                break;
              case UN.JZ:
                {
                  const c8 = this._readUint16();
                  this._pop() || (this.pc = c8);
                  break;
                }
              case UN.JNZ:
                {
                  const c9 = this._readUint16();
                  this._pop() && (this.pc = c9);
                  break;
                }
              case UN.CALL:
                {
                  const cP = this._readUint16();
                  const cD = this.constants[cP];
                  if ("function" == typeof cD) {
                    const cv = cD();
                    this._push(cv);
                  } else {
                    this.callStack.push({
                      pc: this.pc,
                      locals: {
                        ...this.locals
                      }
                    });
                    this.pc = cD;
                  }
                  break;
                }
              case UN.RET:
                {
                  if (0 === this.callStack.length) {
                    return this._pop();
                  }
                  const cB = this.callStack.pop();
                  this.pc = cB.pc;
                  this.locals = cB.locals;
                  break;
                }
              case UN.GET:
                {
                  const cz = this._readUint16();
                  const cM = this.constants[cz];
                  const cS = this._pop();
                  this._push(cS[cM]);
                  break;
                }
              case UN.SET:
                {
                  {
                    const cT = this._readUint16();
                    const cR = this.constants[cT];
                    const cZ = this._pop();
                    const cU = this._pop();
                    cU[cR] = cZ;
                    this._push(cU);
                    break;
                  }
                }
              case UN.INVOKE:
                {
                  const cu = this._readUint16();
                  const cF = this._readByte();
                  const cp = this.constants[cu];
                  const cV = [];
                  for (let cH = 0; cH < cF; cH++) {
                    cV.unshift(this._pop());
                  }
                  const cJ = this._pop();
                  if (this.externals[cp]) {
                    const ch = this.externals[cp](...cV);
                    this._push(ch);
                  } else {
                    const cO = cJ[cp](...cV);
                    this._push(cO);
                  }
                  break;
                }
              case UN.NEW:
                {
                  const cj = this._readUint16();
                  const cq = this._readByte();
                  const cw = this.constants[cj];
                  const cb = [];
                  for (let cI = 0; cI < cq; cI++) {
                    cb.unshift(this._pop());
                  }
                  this._push(new cw(...cb));
                  break;
                }
              case UN.AWAIT:
                {
                  const cf = this._pop();
                  const cK = await cf;
                  this._push(cK);
                  break;
                }
              case UN.LOAD:
                {
                  const cW = this._readUint16();
                  const cC = this.constants[cW];
                  this._push(this.locals[cC]);
                  break;
                }
              case UN.STORE:
                {
                  const cy = this._readUint16();
                  const cY = this.constants[cy];
                  this.locals[cY] = this._pop();
                  break;
                }
              case UN.CONST:
                {
                  {
                    const cm = this._readUint16();
                    this._push(this.constants[cm]);
                    break;
                  }
                }
              default:
                throw new Error("VM: Unknown opcode 0x" + If.toString(16));
            }
          }
          return this.sp > 0 ? this._pop() : undefined;
        }
      }
    }
  });
  let UJ = null;
  let UH = null;
  var Uh = Object.freeze({
    __proto__: null,
    getInterpreter: async () => {
      if ("undefined" != typeof window && window.__VM_USE_JS__) {
        console.log("[VM] Force using JS interpreter (dev mode)");
        const {
          VMInterpreter: IW
        } = await Promise.resolve().then(function () {
          return UV;
        });
        const IC = {
          VMInterpreter: IW,
          type: "js"
        };
        return IC;
      }
      if (!(() => {
        if (null !== UJ) {
          return UJ;
        }
        try {
          if ("object" != typeof WebAssembly) {
            UJ = false;
            return false;
          }
          const Iy = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
          UJ = Iy instanceof WebAssembly.Module;
        } catch (IY) {
          UJ = false;
        }
        return UJ;
      })()) {
        console.warn("[VM] WASM not supported, falling back to JS interpreter");
        const {
          VMInterpreter: Iy
        } = await Promise.resolve().then(function () {
          return UV;
        });
        const IY = {
          VMInterpreter: Iy,
          type: "js"
        };
        return IY;
      }
      const II = await (async () => {
        {
          if (false === UH) {
            return null;
          }
          if (UH) {
            return UH;
          }
          try {
            {
              const IX = await Promise.resolve().then(function () {
                return Ip;
              });
              return IX && "function" == typeof IX.VMInterpreterWasm ? (UH = IX, console.log("[VM] WASM interpreter loaded successfully"), UH) : (console.warn("[VM] WASM interpreter module not available, falling back to JS"), UH = false, null);
            }
          } catch (IA) {
            console.warn("[VM] Failed to load WASM interpreter:", IA.message);
            UH = false;
            return null;
          }
        }
      })();
      if (II) {
        return {
          VMInterpreter: II.VMInterpreterWasm,
          type: "wasm"
        };
      }
      console.warn("[VM] WASM load failed, falling back to JS interpreter");
      const {
        VMInterpreter: If
      } = await Promise.resolve().then(function () {
        {
          return UV;
        }
      });
      const IK = {
        VMInterpreter: If,
        type: "js"
      };
      return IK;
    }
  });
  let UO = null;
  const Uj = async (Ib, II = {}) => {
    const {
      getInterpreter: If
    } = await Promise.resolve().then(function () {
      return Uh;
    });
    const {
      VMInterpreter: IK,
      type: IW
    } = await If();
    UO !== IW && (UO = IW, console.log("[VM] Using " + IW.toUpperCase() + " interpreter"));
    return async (...IC) => {
      const Iy = Uint8Array.from(atob(Ib), Im => Im.charCodeAt(0));
      const IY = new IK(Iy, II);
      "wasm" === IW && IY.init && (await IY.init());
      IC.forEach((Im, IE) => {
        IY.setLocal ? IY.setLocal("arg" + IE, Im) : IY.locals["arg" + IE] = Im;
      });
      return IY.execute();
    };
  };
  let Uq = null;
  let Uw = null;
  const Ub = {
    name: "龙鱼·火镰"
  };
  const UI = {
    name: "龙鱼·紫电"
  };
  const Uc = {
    name: "龙鱼·洛神"
  };
  const Uf = {
    name: "龙鱼·霸王"
  };
  const UK = {
    name: "龙鱼·坚盾"
  };
  const UW = {
    name: "龙鱼·天公"
  };
  const UC = {
    name: "月尾"
  };
  const Uy = {
    name: "焰神"
  };
  const UY = {
    name: "红蝶"
  };
  const Um = {
    name: "赤羽"
  };
  const UE = {
    name: "四带胡椒"
  };
  const UX = {
    name: "九斑刺豚"
  };
  const UG = {
    name: "黄背刺鲷"
  };
  const UA = {
    name: "大跳跳鱼"
  };
  const UQ = {
    name: "钱胡椒"
  };
  const Ux = {
    name: "塔雀鲷"
  };
  const Uk = {
    name: "密刺豚"
  };
  const Ug = {
    name: "青刺鲷"
  };
  const UL = {
    name: "利刃"
  };
  const Ud = {
    name: "惊涛"
  };
  const N0 = {
    name: "骇浪"
  };
  const N1 = {
    name: "星驰"
  };
  const N2 = {
    name: "月光"
  };
  const N3 = {
    name: "巨灵"
  };
  const N4 = {
    name: "璇玑"
  };
  const N5 = {
    name: "祖传大大饼"
  };
  const N6 = {
    name: "冰镇啤酒"
  };
  const N7 = {
    name: "止痒花露水"
  };
  const N8 = {
    name: "碎盾"
  };
  const N9 = {
    name: "冥想"
  };
  const NP = {
    name: "定心"
  };
  const ND = {
    name: "冰清"
  };
  const Nv = {
    name: "攻心"
  };
  const NB = {
    name: "强权"
  };
  const Nz = {
    name: "盾击"
  };
  const NM = {
    name: "合力"
  };
  const NS = {
    name: "仁心"
  };
  const NT = {
    name: "游龙"
  };
  const NR = {
    name: "回元"
  };
  const NU = {
    name: "橙色",
    value: "#f97316"
  };
  const NN = () => {
    Uq || (Uq = (() => {
      {
        const If = new UF();
        If.compileLoad("arg0");
        If.emitWithArg(UN.JNZ, 0);
        const IK = If.bytecode.length - 2;
        If.compilePush(false);
        If.compileReturn();
        const IW = If.bytecode.length;
        If.bytecode[IK] = 255 & IW;
        If.bytecode[IK + 1] = IW >> 8 & 255;
        If.compileLoad("arg0");
        If.compileGetProp("role");
        If.emit(UN.DUP);
        If.emitWithArg(UN.JNZ, 0);
        const IC = If.bytecode.length - 2;
        If.emit(UN.POP);
        If.compileLoad("arg0");
        const Iy = If.bytecode.length;
        If.bytecode[IC] = 255 & Iy;
        If.bytecode[IC + 1] = Iy >> 8 & 255;
        If.compileStore("roleData");
        If.compileLoad("roleData");
        If.compileGetProp("heroes");
        If.compileLoad("arg1");
        If.compilePush(null);
        If.compileInvoke("toString", 0);
        If.emit(UN.GET);
        If.compileStore("heroData");
        If.compileLoad("heroData");
        If.emitWithArg(UN.JNZ, 0);
        const IY = If.bytecode.length - 2;
        If.compilePush(false);
        If.compileReturn();
        const Im = If.bytecode.length;
        If.bytecode[IY] = 255 & Im;
        If.bytecode[IY + 1] = Im >> 8 & 255;
        If.compileLoad("heroData");
        If.compileGetProp("equipment");
        If.compileLoad("arg2");
        If.compilePush(null);
        If.compileInvoke("toString", 0);
        If.emit(UN.GET);
        If.compileStore("equipData");
        If.compileLoad("equipData");
        If.emitWithArg(UN.JNZ, 0);
        const IE = If.bytecode.length - 2;
        If.compilePush(false);
        If.compileReturn();
        const IX = If.bytecode.length;
        If.bytecode[IE] = 255 & IX;
        If.bytecode[IE + 1] = IX >> 8 & 255;
        If.compileLoad("equipData");
        If.compileGetProp("quenches");
        If.compileStore("quenches");
        If.compileLoad("quenches");
        If.emitWithArg(UN.JNZ, 0);
        const IG = If.bytecode.length - 2;
        If.compilePush(false);
        If.compileReturn();
        const IA = If.bytecode.length;
        If.bytecode[IG] = 255 & IA;
        If.bytecode[IG + 1] = IA >> 8 & 255;
        If.compileLoad("quenches");
        If.compilePush(5);
        If.compilePush(null);
        If.compileInvoke("checkColorInQuenches", 2);
        If.compileReturn();
        return If.toBase64();
      }
    })());
    Uw || (Uw = (() => {
      const II = new UF();
      II.compileLoad("arg0");
      II.emitWithArg(UN.JNZ, 0);
      const If = II.bytecode.length - 2;
      II.compilePush(false);
      II.compileReturn();
      const IK = II.bytecode.length;
      II.bytecode[If] = 255 & IK;
      II.bytecode[If + 1] = IK >> 8 & 255;
      II.compileLoad("arg1");
      II.emitWithArg(UN.JNZ, 0);
      const IW = II.bytecode.length - 2;
      II.compilePush(false);
      II.compileReturn();
      const IC = II.bytecode.length;
      II.bytecode[IW] = 255 & IC;
      II.bytecode[IW + 1] = IC >> 8 & 255;
      II.compileLoad("arg1");
      II.compileGetProp("length");
      II.compilePush(0);
      II.emit(UN.GT);
      II.emitWithArg(UN.JNZ, 0);
      const Iy = II.bytecode.length - 2;
      II.compilePush(false);
      II.compileReturn();
      const IY = II.bytecode.length;
      II.bytecode[Iy] = 255 & IY;
      II.bytecode[Iy + 1] = IY >> 8 & 255;
      II.compileLoad("arg0");
      II.compileLoad("arg1");
      II.compilePush(null);
      II.compileInvoke("matchTargets", 2);
      II.compileReturn();
      return II.toBase64();
    })());
  };
  const Nu = (Ib, II) => {
    if (!Ib || "object" != typeof Ib) {
      return false;
    }
    for (const If of Object.values(Ib)) if (If && If.colorId && If.colorId >= II) {
      return true;
    }
    return false;
  };
  const NF = (Ib, II) => {
    {
      if (!Ib || !II) {
        return false;
      }
      const IK = new Map();
      for (const IW of Object.values(Ib)) {
        const IC = Number(IW?.["attrId"]);
        const Iy = Number(IW?.["attrNum"]) || 0;
        IC && Iy > (IK.get(IC) || 0) && IK.set(IC, Iy);
      }
      for (const IY of II) if ((IK.get(Number(IY.attrId)) || 0) >= Number(IY.value)) {
        return true;
      }
      return false;
    }
  };
  const Np = (Ib, II, If) => {
    {
      if (!Ib) {
        return false;
      }
      const IW = Ib?.["role"] || Ib;
      const IC = IW?.["heroes"]?.[String(II)];
      const Iy = IC?.["equipment"]?.[String(If)];
      const IY = Iy?.["quenches"];
      if (!IY) {
        return false;
      }
      for (const Im of Object.values(IY)) if (Im.colorId && Im.colorId >= 5) {
        return true;
      }
      return false;
    }
  };
  const NV = (Ib, II) => {
    if (!Ib || !II || 0 === II.length) {
      return false;
    }
    const If = new Map();
    for (const IK of Object.values(Ib)) {
      const IW = Number(IK?.["attrId"]);
      const IC = Number(IK?.["attrNum"]) || 0;
      IW && IC > (If.get(IW) || 0) && If.set(IW, IC);
    }
    for (const Iy of II) if ((If.get(Number(Iy.attrId)) || 0) >= Number(Iy.value)) {
      return true;
    }
    return false;
  };
  const NJ = async () => {
    let II = TR.roleInfo?.["heroes"];
    if (!II) {
      try {
        const If = await Rc();
        II = If?.["heroes"];
      } catch (IK) {
        II = null;
      }
    }
    if (!II) {
      TQ("数据未就绪", "warning");
      return null;
    }
    if (!TR.selectedHeroId || !TR.selectedPart) {
      TQ("请先选择英雄和部位", "warning");
      return null;
    }
    if (1 === TR.selectedPart) {
      {
        const IC = RM(II, TR.selectedHeroId);
        const Iy = RM(IC?.["equipment"], 1);
        if ((Iy?.["level"] || 0) < 4000) {
          TQ("武器等级需达到4000级", "warning");
          return null;
        }
      }
    }
    try {
      const IY = ((Id, c0) => {
        {
          const c2 = TR.roleInfo?.["heroes"] || TR.allHeroesData;
          const c3 = RM(c2, Id);
          const c4 = RM(c3?.["equipment"], c0);
          return c4?.["quenches"] || RM(c4, "quenches") || {};
        }
      })(TR.selectedHeroId, TR.selectedPart);
      const Im = {};
      const IE = RS(IY);
      for (const Id of IE) {
        const c0 = RM(IY, Id);
        Im[Id] = {
          attrId: c0?.["attrId"] || 0,
          attrNum: c0?.["attrNum"] || 0,
          colorId: c0?.["colorId"] || 0,
          isLocked: TR.lockedSlots.includes(Number(Id))
        };
      }
      const IX = Object.values(Im).some(c1 => c1.colorId >= 5);
      let IG = 0;
      if (IX) {
        const c1 = {
          heroId: TR.selectedHeroId,
          part: TR.selectedPart,
          quenchId: 0,
          quenches: Im
        };
        const c2 = await Rz("equipment_confirm", c1, "quench.js - doQuench (获取seed)");
        if (false === c2?.["success"]) {
          throw new Error(c2?.["message"] || "获取seed失败");
        }
        const c3 = c2?.["role"] || c2;
        IG = c3?.["heroes"]?.[String(TR.selectedHeroId)]?.["equipment"]?.[String(TR.selectedPart)]?.["seed"] || 0;
      }
      const IA = {
        heroId: TR.selectedHeroId,
        part: TR.selectedPart,
        quenchId: 0,
        quenches: Im,
        seed: IG,
        skipOrange: false
      };
      const IQ = await Rz("equipment_quench", IA, "quench.js - doQuench (执行淬炼)");
      if (false === IQ?.["success"]) {
        throw new Error(IQ?.["message"] || "淬炼失败");
      }
      R1("quench", "equipment_quench", IQ);
      TR.quenchCount++;
      const Ix = document.getElementById("qa-quench-count");
      Ix && (Ix.textContent = TR.quenchCount);
      const Ik = IQ?.["role"] || IQ;
      const Ig = TR.selectedHeroId;
      const IL = TR.selectedPart;
      if (Ik?.["heroes"] && TR.roleInfo?.["heroes"]) {
        {
          const c5 = TR.roleInfo.heroes;
          const c6 = Ik.heroes[String(Ig)];
          const c7 = RM(c5, Ig);
          if (c7 && c6?.["equipment"]) {
            const c8 = c6.equipment[String(IL)];
            if (c8) {
              {
                const c9 = RM(c7?.["equipment"], IL) || {};
                if (c8.quenches) {
                  {
                    const cz = {
                      ...(c9.quenches || {})
                    };
                    const cM = cz;
                    for (const [cS, cT] of Object.entries(c8.quenches)) cM[cS] = {
                      ...(cM[cS] || {}),
                      ...cT
                    };
                    c9.quenches = cM;
                    RX(cM);
                  }
                }
                undefined !== c8.quenchTimes && (c9.quenchTimes = c8.quenchTimes);
                undefined !== c8.quenchAttackExt && (c9.quenchAttackExt = c8.quenchAttackExt);
                undefined !== c8.quenchHpExt && (c9.quenchHpExt = c8.quenchHpExt);
                undefined !== c8.quenchDefenseExt && (c9.quenchDefenseExt = c8.quenchDefenseExt);
                undefined !== c8.seed && (c9.seed = c8.seed);
                c7.equipment || (c7.equipment = {});
                c7.equipment[IL] = c9;
                const cP = document.getElementById("qa-equip-stats");
                const cD = ["攻击", "血量", "防御", "血量"][IL - 1] || "加成";
                const cv = c9[1 === IL ? "quenchAttackExt" : 3 === IL ? "quenchDefenseExt" : "quenchHpExt"] ?? 0;
                const cB = c9.quenchTimes ?? 0;
                cP && (cP.innerHTML = ["<div class=\"stat-item\"><span class=\"stat-label\">" + cD + "加成</span><span class=\"stat-value\">+" + cv + "</span></div>", "<div class=\"stat-item\"><span class=\"stat-label\">淬炼次数</span><span class=\"stat-value\">" + cB + "</span></div>"].join(""));
              }
            }
          }
        }
      }
      if (Ik?.["items"] && TR.roleInfo) {
        TR.roleInfo.items || (TR.roleInfo.items = {});
        for (const [cU, cN] of Object.entries(Ik.items)) {
          {
            const cu = RM(TR.roleInfo.items, cU);
            TR.roleInfo.items[cU] = cu ? {
              ...cu,
              ...(cN || {})
            } : cN;
          }
        }
        TR.items = TR.roleInfo.items;
        Ru(TR.items, "jade");
      }
      return IQ;
    } catch (cp) {
      {
        TQ("淬炼失败: " + cp.message, "error");
        return null;
      }
    }
  };
  const NH = Ib => {
    {
      const II = document.querySelector("button[data-action=\"auto-target-add\"]");
      II && (II.disabled = Ib);
      const If = document.getElementById("qa-target-list");
      if (If) {
        for (const IK of If.querySelectorAll("select, input, button[data-action=\"auto-target-remove\"]")) IK.disabled = Ib;
      }
    }
  };
  const Nh = () => {
    TR.continuousQuenching = false;
    TR.continuousTimer && (clearTimeout(TR.continuousTimer), TR.continuousTimer = null);
    document.getElementById("qa-quench-continuous").style.display = "inline-block";
    document.getElementById("qa-quench-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    const Ib = document.getElementById("qa-auto-start");
    Ib && (Ib.disabled = false);
    TQ("已停止连续淬炼", "info");
  };
  const NO = () => {
    {
      if (TR.continuousQuenching) {
        return void TQ("请先停止连续淬炼", "warning");
      }
      const II = (() => {
        const IC = document.getElementById("qa-target-list");
        if (!IC) {
          return [];
        }
        const Iy = Array.from(IC.querySelectorAll(".qa-target-row"));
        const IY = [];
        for (const IE of Iy) {
          {
            const IX = IE.querySelector(".qa-target-attr");
            const IG = IE.querySelector(".qa-target-value");
            const IA = Number(IX?.["value"]);
            const IQ = Number(IG?.["value"]);
            !Number.isFinite(IA) || IA <= 0 || !Number.isFinite(IQ) || IQ <= 0 || IY.push({
              attrId: IA,
              value: IQ
            });
          }
        }
        const Im = new Map();
        for (const Ik of IY) {
          const Ig = Im.get(Ik.attrId);
          Im.set(Ik.attrId, Ig ? Math.min(Ig, Ik.value) : Ik.value);
        }
        return Array.from(Im.entries()).map(([IL, Id]) => ({
          attrId: IL,
          value: Id
        }));
      })();
      if (!II.length) {
        return void TQ("请先设置目标属性", "warning");
      }
      TR.targetTargets = II;
      TR.targetAttrId = null;
      TR.targetAttrValue = null;
      TR.autoQuenching = true;
      document.getElementById("qa-auto-start").style.display = "none";
      document.getElementById("qa-auto-stop").style.display = "inline-block";
      document.getElementById("qa-quench-once").disabled = true;
      document.getElementById("qa-quench-continuous").disabled = true;
      NH(true);
      const If = II.map(IW => (TI[String(IW.attrId)] || "属性" + IW.attrId) + " >= " + IW.value).join(" 或 ");
      TQ("开始自动淬炼: " + If, "info");
      II.map(IW => ({
        attrName: TI[String(IW.attrId)] || "属性" + IW.attrId,
        attrId: IW.attrId,
        targetValue: IW.value
      }));
      const IK = async () => {
        if (TR.autoQuenching) {
          try {
            const IW = await NJ();
            if (IW && (await (async Iy => {
              {
                if (!Iy) {
                  return false;
                }
                const Im = Iy?.["role"] || Iy;
                const IE = Im?.["heroes"]?.[String(TR.selectedHeroId)];
                const IX = IE?.["equipment"]?.[String(TR.selectedPart)];
                const IG = IX?.["quenches"];
                if (!IG || 0 === Object.keys(IG).length) {
                  return false;
                }
                const IA = Array.isArray(TR.targetTargets) && TR.targetTargets.length ? TR.targetTargets : null;
                const IQ = Array.isArray(TR.targetAttrId) ? TR.targetAttrId.map(IL => Number(IL)).filter(IL => Number.isFinite(IL) && IL > 0) : [Number(TR.targetAttrId)].filter(IL => Number.isFinite(IL) && IL > 0);
                const Ix = Number(TR.targetAttrValue) || 0;
                const Ik = IA || (IQ.length && Ix ? IQ.map(IL => ({
                  attrId: IL,
                  value: Ix
                })) : []);
                if (0 === Ik.length) {
                  return false;
                }
                const Ig = {
                  ...(RM(RM(TR.roleInfo?.["heroes"], TR.selectedHeroId)?.["equipment"], TR.selectedPart) || {}).quenches
                };
                for (const [IL, Id] of Object.entries(IG)) Ig[IL] = {
                  ...(Ig[IL] || {}),
                  ...Id
                };
                return await (async (c0, c1) => {
                  try {
                    const c2 = {
                      matchTargets: NF
                    };
                    const c3 = await (async () => (NN(), await Uj(Uw, c2)))();
                    return await c3(c0, c1);
                  } catch (c4) {
                    {
                      console.warn("[VM] 目标检测回退到 JS:", c4.message);
                      return NV(c0, c1);
                    }
                  }
                })(Ig, Ik);
              }
            })(IW))) {
              Nj();
              return void TQ("已达到目标属性，停止淬炼", "success");
            }
            const IC = Math.floor(150 * Math.random()) + 350;
            await new Promise(Iy => setTimeout(Iy, IC));
            TR.autoQuenching && (TR.autoTimer = setTimeout(IK, 0));
          } catch (Iy) {
            {
              Nj();
            }
          }
        }
      };
      IK();
    }
  };
  const Nj = () => {
    TR.autoQuenching = false;
    TR.autoTimer && (clearTimeout(TR.autoTimer), TR.autoTimer = null);
    document.getElementById("qa-auto-start").style.display = "inline-block";
    document.getElementById("qa-auto-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    document.getElementById("qa-quench-continuous").disabled = false;
    NH(false);
    TQ("已停止自动淬炼", "info");
  };
  const Nq = () => {
    TR.timesQuenching = false;
    TR.timesTimer && (clearTimeout(TR.timesTimer), TR.timesTimer = null);
    document.getElementById("qa-times-start").style.display = "inline-block";
    document.getElementById("qa-times-stop").style.display = "none";
    document.getElementById("qa-quench-once").disabled = false;
    document.getElementById("qa-quench-continuous").disabled = false;
    const Ib = document.getElementById("qa-auto-start");
    Ib && (Ib.disabled = false);
    const II = document.getElementById("qa-quench-times");
    II && (II.disabled = false);
    TQ("已停止洗练", "info");
  };
  const Nw = (Ib = document) => {
    Ib && "function" == typeof Ib.querySelectorAll && Ib.querySelectorAll("img[data-res]").forEach(II => {
      {
        const IK = II.getAttribute("data-res");
        if (!IK) {
          return;
        }
        if (II.getAttribute("src")) {
          return;
        }
        const IW = (IC => {
          try {
            {
              if ("function" == typeof GM_getResourceURL) {
                const Im = GM_getResourceURL(IC);
                if (Im) {
                  return Im;
                }
              }
            }
          } catch {}
          return (IX => {
            if (!IX || !IX.startsWith("qa_")) {
              return null;
            }
            const IG = IX.slice(3).split("_");
            if (IG.length < 2) {
              return null;
            }
            const IA = IG[0];
            const IQ = IG.slice(1).join("_");
            return Tw + "/" + IA + "/" + IQ + ".png";
          })(IC) || "";
        })(IK);
        IW && (II.src = IW);
      }
    });
  };
  const Nb = {
    101: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fe/fee2129b-7f79-4895-a419-8d2ce7543c91.18c0c.png",
    10101: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a0/a0935f7d-a191-4b8f-8998-0fce639eb05a.94364.png",
    10102: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8ffce34d-1aca-4d65-934c-89323c953bec.9229c.png",
    10103: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5c/5cca3fa4-5734-4bd4-8936-801b498106bd.111fc.png",
    10108: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8f6e1b84-f833-4d09-9f2f-6cf9e1847525.dc75e.png",
    10109: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ef/ef67bfc7-e1ce-49d4-8afb-50d3c5233bec.d4072.png",
    102: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/54/54d7cd4a-6876-4d7a-8dcc-e295e7e3e341.608e3.png",
    10201: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4c/4c9278de-4760-474e-9b65-b26c13b5acc3.b36fe.png",
    10202: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a9/a98ec4bd-5ccd-4796-9d68-c66909307b28.db406.png",
    10206: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f3/f3bf690d-f92e-4969-af90-522bf772289d.dca3a.png",
    10207: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d9/d9ce7225-de52-46e1-a202-5227a720f0b4.1cc2b.png",
    103: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f55987de-682a-4838-8cee-02cd3893c5bf.0b05b.png",
    10301: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/91/91370b48-41ac-46ec-b56d-7531b134d743.09eda.png",
    10302: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d9/d9ceebe2-f798-4fac-8588-e86656fd6931.14758.png",
    10304: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/20/200ab11d-6931-40b1-b9e0-f1d39f6d4a9b.f0c41.png",
    10307: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c3/c36fb5c7-c039-43dc-81ec-b7bafb3c45a5.c799d.png",
    10308: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6b/6bcbe989-cf31-4b0f-9c88-5f9c27183324.af8d6.png",
    104: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/23/23987a94-3c9d-4778-b3b7-269b10366829.71134.png",
    10401: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/05/059c91ae-a850-49fa-bc31-1f353b71d9eb.80713.png",
    10402: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f5cb60b5-e05b-435e-9553-cbec000581d1.1e007.png",
    10403: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5e/5e120724-faa0-4cf7-b670-b9dbdfda0541.f29d1.png",
    10404: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ad/ad12b4fd-9430-44a2-851e-44bb66fa7eea.a0dce.png",
    10408: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c8/c80a52a6-e973-476e-8d8b-2591cb744106.bd5e7.png",
    105: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8f/8f871c26-04e6-421e-956d-250f27cc92d2.71401.png",
    10501: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c2/c21b1168-5775-425a-9629-7b4ee40797bf.80646.png",
    10502: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/24/248cb635-4a3c-4d34-9321-50f4b3f1e599.4dbb6.png",
    10503: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/1596a11b-0118-4ac7-93e1-aeb09504374a.cbdd2.png",
    10504: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8e/8e5895e9-09f6-4248-973f-f024e8dbbe13.2a256.png",
    10508: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f5/f5c67338-f0de-4141-bc7f-f2e9c1df583d.e23dc.png",
    10509: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/33/3362f4a8-6651-4bc8-994c-9737dc9d7673.e5189.png",
    106: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/03/03d6aca2-9330-4b4b-9d9c-3ede3bbe4712.d06dc.png",
    10601: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/57/57805cb1-aed4-4b56-a20e-6eab04e75b8a.e5eeb.png",
    10602: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/27/27b3a214-5bfc-442c-b62e-fca73fea6083.aee0b.png",
    10603: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/24/24f3621c-1275-4ed5-a9ae-1fb9aff9b56c.8a864.png",
    10606: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/af/af62d1e3-9df8-4d51-837e-3c6ac679fdb1.d3244.png",
    107: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4f/4f1057c6-fc97-418f-84ce-8283a03bd16c.85fa5.png",
    10701: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4f/4f1057c6-fc97-418f-84ce-8283a03bd16c.85fa5.png",
    10702: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/46/467a9927-fcde-40e3-9dad-666abb1c45cb.98e91.png",
    10703: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c5/c511c6ee-fe69-4d1e-8d68-1a99f22f9f84.5117b.png",
    10704: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1a/1a0c86e0-711e-4ea8-b715-33c3b1daa9a2.75bf5.png",
    10705: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d3/d37c3283-472c-471a-9eb0-fbccc9925c5a.8ea31.png",
    10707: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f2/f215ff4a-c27e-4624-bc7e-5a867706d701.90a3f.png",
    10708: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bf/bf79a91b-43cb-4006-9ea6-955953a8a751.04084.png",
    10711: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d2ec2c5-5263-4a7a-bf0d-7bccfe469b6c.f9b97.png",
    10712: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/cb/cb45e684-da91-4604-9b83-1acaad28a95b.60d98.png",
    10713: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/64/64814d7d-2e7a-46fe-999f-2ad201cac54b.588a3.png",
    10714: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/80/80570815-07e1-452e-8079-f1bf0ea670d4.2b71a.png",
    108: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/74/740f843b-2eaa-47ef-b000-93064dd1a4d0.5e6a0.png",
    10801: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/64/64f2ca33-c7a9-4373-b3ee-43c3b2b99cd4.eba56.png",
    10802: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/50/502487fd-1bec-4072-9a17-ec54f667648b.6bd82.png",
    10805: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/7c/7cbac315-ffac-4995-9694-1041e2b3e5e4.0f42e.png",
    10807: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/30/30611900-b74e-4759-835a-b7e2ab85c164.5ed3c.png",
    109: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ae/ae5f4cb0-311c-4dfe-a5e3-a878375d6024.9ea04.png",
    10901: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d4/d43ea72c-ad11-4681-afdd-68f26bf9b602.56961.png",
    10902: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ee853be-732e-43d6-b0da-2beb86be7433.47d23.png",
    10903: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b2/b2e7bca3-4ea3-4683-a699-fd54f1c1a5cb.4985d.png",
    10908: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b6/b6705382-338c-481b-90ad-38ca5f090e74.370bf.png",
    110: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c2/c2b806be-c738-4088-b363-65765414a82c.f9de5.png",
    11001: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9a/9a12df8a-8878-4226-97af-7840a2b4c612.8fe42.png",
    11002: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8a/8af35d82-2600-4898-a4a3-0d4f314ac924.5c074.png",
    11005: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/70/70603d5d-1bfe-4184-9280-95ae2065fe1b.61682.png",
    111: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bd/bd2bfdc0-2c6c-4caa-a7da-9bb765047926.9151b.png",
    11101: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d88b4d6-a34b-4a2d-b3d1-3e1ad120ca1c.45151.png",
    11102: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/154d493a-404c-46b9-914a-f8a36674564d.f35ca.png",
    11103: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3e/3e7d2ad1-e16a-47bf-8e16-e21ffd846b80.b28d5.png",
    11104: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e1/e168ee02-776c-439b-a5f8-b16111c48fc5.1f00b.png",
    11106: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/61/61088853-f654-4ac7-9b75-6e8834dfafb1.a0df1.png",
    11107: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fb/fbd09ad3-e5fe-4e0b-8c14-fad6066e5dd9.da3e2.png",
    11108: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/90/90d05dbc-68ea-4924-9ace-d8bf8c1c151e.da622.png",
    112: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bf/bf8e5395-b6af-4615-8d54-ebf51966f03b.24c63.png",
    11201: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5b/5b533dc5-b188-4463-8b86-aa29ddb3624f.cff48.png",
    11202: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2e/2e36eb73-0277-4b52-8df9-ab3212c9513a.000e9.png",
    11203: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c8/c8206f9a-00bf-407a-a543-ea49e2d77fd7.bcdb9.png",
    11204: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bb/bb2a459d-9a21-4ad9-bd44-95fa0382c8a7.49abf.png",
    113: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c7/c78fac0f-2b99-4fbc-9222-2825b600f642.8122d.png",
    11301: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3e/3e372c88-c7b4-4692-be96-68dcbf982f34.b1bca.png",
    11302: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bc/bce41d67-8cc0-4c81-864b-ca8f1588ba16.49690.png",
    11304: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d5/d57cb0b7-7ee1-4198-86a0-da1e49348ea6.d57a0.png",
    11307: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f6/f6e7ddde-856e-4efd-b991-5634d95fdaea.3f019.png",
    114: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/83/8330788c-86ee-441e-9b44-5f9f0b6762ea.25498.png",
    11401: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e6/e634d0e5-2eb4-4b83-9786-3130a55c6b69.e77c7.png",
    11402: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/34/34d34029-fc87-4709-9098-5973153a7689.68355.png",
    11403: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/69/69a547a7-85d2-4c24-8371-002de8e66b4e.2ebfa.png",
    11406: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ed/ed0d2c93-1928-44e6-98ae-eba8663a5390.ac1f9.png",
    11408: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bb/bb437a6e-ee24-4b7a-bdfd-91732a14b888.e35dc.png",
    11409: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/4575b6a3-b1dc-4935-b13f-c8379011b2d8.0520c.png",
    115: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/03/0335b158-4a12-440d-8590-098715664ee9.e40a1.png",
    11501: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c3/c367a175-f79c-4ee1-b7ee-1b93f7c68cd2.67e32.png",
    11502: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f0/f0f19158-0207-4df6-ae43-19a5be2646a7.4ee5e.png",
    11504: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5e/5ed1e275-fd83-4e1e-8aa2-293889cdc4db.a1fee.png",
    116: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/cd/cd137088-98a0-4bdc-8bd8-49a6fe9f2d52.2c31d.png",
    11601: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/93/9305328c-f17b-403b-b5a3-e6ed538f7781.4e521.png",
    11602: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f4/f41a8045-b618-4aeb-a118-5e5d7d799820.53f20.png",
    11604: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/23/2306e674-b55b-4878-8989-a3fc73fb465b.a59d4.png",
    11605: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/77/77228bf3-d4a6-4e1e-9fc9-913ee6f22490.555dc.png",
    117: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a4b9a0f-6232-4594-897a-62a3a486ac0a.55faf.png",
    11702: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a4b9a0f-6232-4594-897a-62a3a486ac0a.55faf.png",
    11703: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ff/ffdabcbe-68a8-4ef8-b396-d8bda3926551.56035.png",
    11704: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/85/8560da42-6af9-4122-84f4-a1ea672f03cf.3239c.png",
    11705: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f0/f0ff2e1b-f376-4b5b-985e-b9a20d625db4.6b307.png",
    11706: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0c/0cbaf8fa-4587-4d61-a43f-3fd05e55968c.14074.png",
    118: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ec9f7d6-f964-4c01-8b54-60385cb77598.c7f1d.png",
    11802: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4ec9f7d6-f964-4c01-8b54-60385cb77598.c7f1d.png",
    11803: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0e/0ee8d538-b249-45cc-9c26-c4a5dbda50d1.37aaa.png",
    11804: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2f/2fd974a1-9367-4565-85e6-7e5315f633c9.0df84.png",
    11805: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/88/88142206-5a73-4807-9586-987e02a21f54.2c289.png",
    11806: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/91/910bd1c0-51d6-48ee-829b-f96ae33e15a8.30f2a.png",
    119: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8d/8def44ff-bc2b-4d4c-83aa-03e43d48b4a8.74e28.png",
    11903: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/bd/bd565fe7-1b3b-43e7-81e5-85d08b47c67f.e3567.png",
    11904: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d2/d2eee121-bc0e-48f6-9c9d-511f852c0a23.f927b.png",
    11905: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/48/4870b3e1-f5b2-48c5-abaf-54f3d02f37e3.d8fb6.png",
    120: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b979cada-f44b-4f9c-acf6-8556f0eef4d7.9c233.png",
    12002: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b979cada-f44b-4f9c-acf6-8556f0eef4d7.9c233.png",
    12003: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/79/793ba75f-f7a7-4392-a0da-9c1a0cec655b.128f0.png",
    12004: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/28/289cdf92-c0a9-4915-bb09-8d1443179988.4d20f.png",
    12005: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/17/17ec3eb6-7cbb-4439-b1f3-c12d5d27e673.4f0be.png",
    12006: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/72/7246e4e3-7167-4843-86db-b89590fc6122.d252e.png",
    12007: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/7a/7a7beccc-de85-48b0-a43e-24d04c64acf5.e6ec2.png",
    201: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/da/da4e4ac4-1df9-42c7-880b-8e3f41994e48.d0559.png",
    202: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/48/4892abf3-e917-477d-97cf-293e7093a856.dcd4f.png",
    203: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d4/d47b69e7-6408-4af1-83b3-1d5a5be336a8.d78f2.png",
    204: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/eb/eb6598fd-ef92-44dc-b0a4-111328ff2f8b.94429.png",
    205: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d1/d1c08e44-bd29-4bf5-a844-256e7df4318c.7252d.png",
    206: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6a/6a5b3b2f-1551-46be-9cdd-f3f866fadc8a.8550e.png",
    207: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ea/eaa1af3f-9c21-40e0-b62b-2ed1206ad09e.5f8a6.png",
    208: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e3/e31d1937-8efb-4a5a-a745-408f205a4274.c93c7.png",
    209: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d8/d8f1601c-777a-43b6-9aac-1b8ff5de1f7a.46391.png",
    210: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f2/f2d3cb6f-7d94-49f4-b547-6e9fd8995f6e.122a2.png",
    211: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f7/f71dfbbc-4d09-4423-a78a-47ae7d75a185.f4ccd.png",
    212: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/df/dfc7feb9-9253-4bb6-a156-eeaef2d50ca5.34e37.png",
    213: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d2/d285b41c-1d7c-4047-a9be-1e1b155cdac9.db396.png",
    214: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0e/0ec64fd0-8e79-4f38-9fe5-3378fb558389.73497.png",
    215: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/be/be698af2-9deb-4833-b751-15abab57ecef.253e5.png",
    216: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b7/b75788f4-baf0-4999-bf22-b0bb5d5403fa.889c5.png",
    217: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ba/bad0acaa-3c7a-479d-98aa-1aa29ef2fc9f.60f34.png",
    218: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f9/f9eaa977-2136-4dc3-9553-4955cd23ba2c.6691f.png",
    219: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/ab86fa12-971a-4440-b8d7-2d0dff35950f.dace3.png",
    220: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/2e/2ea44c13-26fd-4459-aa8d-864b66a45726.c073c.png",
    221: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f1/f168b1af-7516-45b8-ae1f-1acde3373421.16f1e.png",
    222: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/455f1136-ac0a-45bc-acfd-4a07c2caec30.c2001.png",
    223: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/fa/fae866d7-a86b-4dca-8bee-fde39babc0a0.54efd.png",
    224: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/11/112a8eba-da12-431b-bda3-26e04f7b77de.436e8.png",
    225: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/22/22ac8f71-2cd2-4b3d-9318-d2c84ff53a30.354f9.png",
    226: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/dd/dd2cc35d-f3ba-4908-959a-cb3938f299d5.fc071.png",
    227: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/abb2e92f-26cb-41b7-933e-43c35628574a.61898.png",
    228: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ab/abb2e92f-26cb-41b7-933e-43c35628574a.61898.png",
    301: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73f8598e-fe61-4862-b326-8c6340b59a0b.7597b.png",
    302: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/97/978272bc-4d67-485b-8f94-81df83a88a22.3698b.png",
    303: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/45/45ca3049-bfc8-4241-ba0c-2b94832b89e8.784fb.png",
    304: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a1/a14b0495-5366-41ba-b80c-e82a1da9269d.993a3.png",
    305: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5b/5bfb293a-39c2-45c2-9a2a-0ca5b71fc072.936b3.png",
    306: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/90/90e9325d-183d-4dc8-8104-f562859405e5.9dac8.png",
    307: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/16/16d22463-9ad6-481c-a6b2-79e2f918ea98.a3085.png",
    308: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e2/e268a294-096e-4af5-9ce2-4fcbd7edcbf4.1a2c6.png",
    309: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/41/41c3a9b9-1227-45f9-9527-b0b07e6257fe.a2160.png",
    310: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/86/8632aec4-6f12-4d6e-9812-6b5e092da2e9.5246e.png",
    311: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/15/159f6d94-c961-4019-80f8-57df22055103.81ffb.png",
    312: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9dac54ce-f962-499e-a778-91a20235648a.90719.png",
    313: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/e7/e7b6662c-127d-4ae8-b6e3-a4898ecdd618.e5896.png",
    314: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ce/ce9bc3d1-efdc-4734-b7a4-72c4793b20f3.b35af.png",
    1001: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/41/41c14a40-2a18-438e-96e2-4ed113a0b755.578b7.png",
    1002: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/35/3561556b-ff33-47ba-b79c-b250a195e9df.b5f46.png",
    1003: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6e/6edcd35a-aa63-40d1-8b8b-a1a5d36d65a2.76a49.png",
    1004: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/04/047a9cba-5c46-4d1c-9095-113a7c0f31db.f0e8d.png",
    1005: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/71/714a7704-337b-49de-93d5-0c8f9343dc37.e1fc3.png",
    1006: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/60/606b1506-64b3-433b-a171-2e0326351e0b.de64b.png",
    1007: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73d347d1-60c8-436c-92a3-88aaa36a1abc.e28f5.png",
    1008: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/3a/3a87cfdb-ba80-484a-a8bb-76fafd6d34c3.49bf4.png",
    1009: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/63/63b20748-27e6-47d6-9ad0-6bf652c0247c.ae7c1.png",
    1010: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/f7/f74c93ee-0066-4151-9ef7-88218e6b9617.f37ff.png",
    1011: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/6d/6d7eedd3-7d79-48e8-9431-b836b0e25f29.b0dca.png",
    1012: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8c/8cb0f296-9c30-462e-9d56-f51e77ef7799.8133d.png",
    1013: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/52/52ac08b1-cbd0-46e2-849e-00ccf7891373.05437.png",
    1014: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1e/1e2bef7a-527d-45b3-a6c9-3fc790964cd9.bed74.png",
    2001: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/37/37c6e4e5-8b98-4464-84f6-8e1a24e57765.6f62f.png",
    2002: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d6/d640a8a9-9886-468a-9150-b7bc22cfc1bf.6914f.png",
    2003: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b9/b975f089-d65b-4b45-8c7f-7ac2320b856c.29f35.png",
    2004: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/b1/b1c8dc22-b729-4fe0-95f3-ffcf03a25349.b8cce.png",
    2005: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/55/55421ffb-5fe9-438b-9cc9-6f58ec2c505d.aee33.png",
    2006: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/8b/8bb83672-5c8c-433b-94b4-099218a72409.b104e.png",
    2007: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/d1/d1f8f655-da97-46e5-a39a-bf05e47d81ad.80867.png",
    2009: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/4e/4e7f67c7-e54d-4aba-bea4-dfa394eda964.3d52f.png",
    2010: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/29/29c9c920-4f1c-455f-8b1d-802c85d76b56.16885.png",
    2011: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ee/eea662a3-e5bd-4d28-989b-6de321eb1616.f06f2.png",
    2012: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/20/20cb9e88-3d94-496c-89b0-1dbe5db24984.295f4.png",
    2013: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/78/78e688e4-1ae1-4b2e-8c29-8051b664f390.b7f6b.png",
    2014: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/73/73dcd488-8e7c-4268-8f4e-15a88a28741b.7345e.png",
    2015: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9c/9c61d88c-219a-4bd5-a1ca-35fa393d2485.26b47.png",
    2016: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/62/624393df-d783-4a16-8405-84aa88cd33ac.19ec0.png",
    3001: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/ff/fffa1059-57ae-4ee7-bb9e-c8077db66201.859f9.png"
  };
  const NI = {
    1: "5c4652b9-7e51-4733-879a-1ad89a60a19e.6a8ea",
    2: "0f0f103c-bce6-4951-8293-789d07b91ea1.925a2",
    3: "1fdc6fac-cac3-4934-93f2-8c3e6b3b958e.0539f",
    4: "9d0875ac-41b2-4de1-9cb7-e207a3a977b7.458d0",
    5: "01e407e7-8a48-45e3-a58a-914bbb58af99.28cea",
    6: "c64f985d-936f-4995-a2b8-29f379bbca77.d2c73",
    7: "59966b57-2cd4-4e6d-bb50-3eedcb52e4ea.44cd2",
    8: "88679199-6ae6-425b-8c30-5698461d2b10.478b8",
    9: "a59734bc-12d2-4959-a2ce-12c3a3c1be88.469fc"
  };
  const Nc = Ib => {
    {
      if (null == Ib) {
        return null;
      }
      if (-1 === Ib || "-1" === Ib || 0 === Ib || "0" === Ib) {
        return null;
      }
      if ("number" == typeof Ib) {
        return Number.isFinite(Ib) ? Ib : null;
      }
      if ("string" == typeof Ib) {
        const IK = Ib.trim();
        return IK && "-1" !== IK && "0" !== IK ? IK : null;
      }
      if (Array.isArray(Ib)) {
        for (const IW of Ib) {
          {
            const IC = Nc(IW);
            if (null !== IC) {
              return IC;
            }
          }
        }
        return null;
      }
      return "object" == typeof Ib ? Nc(Ib.skinId ?? Ib.skin ?? Ib.id) : null;
    }
  };
  const Nf = (Ib, II) => {
    const If = Nc(Ib?.["skin"]);
    if (null !== If) {
      return If;
    }
    const IK = Nc(Ib?.["skinId"]);
    return null !== IK ? IK : II;
  };
  const NK = {
    1201: {
      name: "龙鱼·幽影"
    },
    1202: {
      name: "龙鱼·青龙"
    },
    1203: Ub,
    1204: {
      name: "龙鱼·无双"
    },
    1205: {
      name: "龙鱼·永霜"
    },
    1206: {
      name: "龙鱼·八卦"
    },
    1207: UI,
    1208: {
      name: "龙鱼·青囊"
    },
    1209: Uc,
    1210: {
      name: "龙鱼·机神"
    },
    1211: Uf,
    1212: {
      name: "龙鱼·蚀骨"
    },
    1213: UK,
    1214: {
      name: "龙鱼·麒麟"
    },
    1215: {
      name: "龙鱼·古锭"
    },
    1216: {
      name: "龙鱼·义从"
    },
    1217: {
      name: "龙鱼·恶来"
    },
    1218: {
      name: "龙鱼·龙胆"
    },
    1219: {
      name: "龙鱼·国色"
    },
    1220: UW,
    1301: UC,
    1302: Uy,
    1303: UY,
    1304: Um,
    1305: {
      name: "千年笛"
    },
    1401: UE,
    1402: {
      name: "鬼狮子鱼"
    },
    1403: {
      name: "黑斑雀鲷"
    },
    1404: {
      name: "诅咒花椒"
    },
    1405: UX,
    1406: {
      name: "魔鬼刺镰"
    },
    1407: UG,
    1408: {
      name: "黑鳍刺鲷"
    },
    1409: {
      name: "长棘刺鲷"
    },
    1410: {
      name: "粒突箱鲀"
    },
    1411: UA,
    1412: {
      name: "蓝心胖头"
    },
    1501: UQ,
    1502: {
      name: "狮子鱼"
    },
    1503: Ux,
    1504: {
      name: "紫斑鳅"
    },
    1505: Uk,
    1506: {
      name: "长鳍镰"
    },
    1601: {
      name: "胖头鱼"
    },
    1602: Ug,
    1603: {
      name: "跳跳鱼"
    },
    1604: {
      name: "箱豚鱼"
    },
    1101: {
      name: "黄金锦鲤"
    },
    1102: UL,
    1103: Ud,
    1104: N0,
    1105: N1,
    1106: {
      name: "公同心"
    },
    1107: {
      name: "母同心"
    },
    1108: {
      name: "公协力"
    },
    1109: {
      name: "母协力"
    },
    1110: N2,
    1111: {
      name: "公铁血"
    },
    1112: {
      name: "母铁血"
    },
    1113: {
      name: "公丹心"
    },
    1114: {
      name: "母丹心"
    },
    1115: N3,
    1116: {
      name: "公剑胆"
    },
    1117: {
      name: "母剑胆"
    },
    1118: N4
  };
  const NW = {
    1: {
      name: "穿云箭"
    },
    2: {
      name: "皮鞋手机"
    },
    3: {
      name: "懦弱百合"
    },
    4: {
      name: "正义喇叭"
    },
    5: N5,
    6: N6,
    7: {
      name: "导演话筒"
    },
    8: {
      name: "驱蚊花露水"
    },
    9: N7
  };
  const NC = {
    "1033007": N8,
    "1033008": N9,
    "1033009": NP,
    "1033010": ND,
    "1033011": Nv,
    "1033012": NB,
    "1033013": Nz,
    "1033014": NM,
    "1033015": NS,
    "1033016": NT,
    "1033017": NR
  };
  const Ny = {
    1: {
      name: "白色",
      value: "#ffffff"
    },
    2: {
      name: "绿色",
      value: "#22c55e"
    },
    3: {
      name: "蓝色",
      value: "#3b82f6"
    },
    4: {
      name: "紫色",
      value: "#a855f7"
    },
    5: NU,
    6: {
      name: "红色",
      value: "#ef4444"
    }
  };
  const NY = Ib => {
    {
      const IK = String(Ib || "").trim();
      return IK ? IK.slice(0, 2) : "?";
    }
  };
  const Nm = Ib => {
    const II = Tf?.[Ib];
    if (!II) {
      return "";
    }
    if (II.avatar) {
      const If = String(II.avatar).split("/").filter(Boolean);
      const IK = If.length >= 2 ? If[0] : "team";
      const IW = (If[If.length - 1] || "").replace(/\.[^.]+$/, "");
      if (IW) {
        return ("qa_" + IK + "_" + IW).replace(/[^a-zA-Z0-9_]/g, "_");
      }
    }
    return "qa_team_hero_" + Ib;
  };
  const NE = (Ib = document) => {
    Ib && "function" == typeof Ib.querySelectorAll && Ib.querySelectorAll(".qa-avatar-img").forEach(IK => {
      if ("1" === IK.dataset.qaAvatarBound) {
        return;
      }
      IK.dataset.qaAvatarBound = "1";
      const Iy = IK.closest(".qa-avatar");
      const IY = Iy ? Iy.querySelector(".qa-avatar-fallback") : null;
      const Im = () => {
        IK.style.display = "block";
        IK.style.opacity = "1";
        IY && (IY.style.display = "none");
      };
      const IE = () => {
        IK.style.display = "none";
        IY && (IY.style.display = "flex");
      };
      const IX = {
        once: true
      };
      const IG = {
        once: true
      };
      IK.style.opacity = "0";
      IY && (IY.style.display = "flex");
      IK.addEventListener("load", () => Im(), IX);
      IK.addEventListener("error", () => IE(), IG);
      IK.complete && (IK.naturalWidth > 0 ? Im() : IE());
    });
  };
  let NX = null;
  let NG = null;
  const NA = () => {
    {
      NX && (NX.remove(), NX = null);
    }
  };
  const NQ = () => {
    {
      NG && (NG.remove(), NG = null);
    }
  };
  const Nx = (Ib, II) => {
    {
      if (!Ib) {
        return;
      }
      NQ();
      const {
        name: If,
        legion: IK,
        legionMaxPower: IW,
        legionRed: IC
      } = Ib;
      const Iy = document.createElement("div");
      if (Iy.className = "qa-player-tooltip", Iy.style.cssText = "\n    position:absolute;\n    background:var(--bg-primary,#1e293b);border:1px solid var(--border-color,#334155);\n    border-radius:8px;padding:10px 14px;z-index:99999;\n    box-shadow:0 4px 12px rgba(0,0,0,0.3);min-width:140px;max-width:200px;\n    pointer-events:auto;\n  ", Iy.innerHTML = "\n    <div style=\"font-size:13px;font-weight:600;color:var(--text-primary,#f1f5f9);margin-bottom:6px;text-align:center;\">" + (If || "未知") + "</div>\n    <div style=\"font-size:12px;color:var(--text-secondary,#94a3b8);line-height:1.6;\">\n      <div style=\"display:flex;justify-content:space-between;gap:12px;\"><span>俱乐部</span><span style=\"color:var(--text-primary,#f1f5f9);\">" + (IK || "无") + "</span></div>\n      " + (IW ? "<div style=\"display:flex;justify-content:space-between;gap:12px;\"><span>战力</span><span style=\"color:var(--text-primary,#f1f5f9);\">" + IW + "</span></div>" : "") + "\n      " + (IC ? "<div style=\"display:flex;justify-content:space-between;gap:12px;\"><span>红淬</span><span style=\"color:#ef4444;\">" + IC + "</span></div>" : "") + "\n    </div>\n  ", document.body.appendChild(Iy), NG = Iy, II) {
        const Im = II.getBoundingClientRect();
        const IE = Iy.getBoundingClientRect();
        let IX = Im.left + Im.width / 2 - IE.width / 2;
        let IG = Im.bottom + 8;
        IX < 8 && (IX = 8);
        IX + IE.width > window.innerWidth - 8 && (IX = window.innerWidth - IE.width - 8);
        IG + IE.height > window.innerHeight - 8 && (IG = Im.top - IE.height - 8);
        Iy.style.left = IX + "px";
        Iy.style.top = IG + "px";
      }
      Iy.addEventListener("mouseleave", NQ);
      const IY = IA => {
        !NG || NG.contains(IA.target) || IA.target.closest(".pvp-player-avatar") || (NQ(), document.removeEventListener("click", IY));
      };
      setTimeout(() => document.addEventListener("click", IY), 10);
    }
  };
  const Nk = Ib => {
    {
      if (!Ib) {
        return;
      }
      NA();
      const IC = document.createElement("div");
      IC.className = "qa-auth-overlay qa-hero-overlay";
      NX = IC;
      const Iy = Ib.hasHolyBeast ? "已开四圣" : "未开四圣";
      const IY = Ib.hasHolyBeast ? "on" : "off";
      var If;
      var IK;
      IC.innerHTML = "\n    <div class=\"qa-hero-modal\" role=\"dialog\" aria-modal=\"true\">\n      <div class=\"qa-watermark\">\n        <div class=\"qa-watermark-pattern\">\n          " + Array(20).fill(0).map(() => "<span class=\"qa-watermark-item\">" + (TR?.["roleId"] || "岚山") + "</span>").join("") + "\n        </div>\n      </div>\n      <div class=\"qa-hero-modal-head\">\n        <span class=\"qa-hero-modal-title\">武将详情</span>\n        <button class=\"qa-hero-modal-close\" type=\"button\" data-action=\"close\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n            <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n          </svg>\n        </button>\n      </div>\n\n      <div class=\"qa-hero-modal-body\">\n        <div class=\"qa-hero-profile\">\n          <div class=\"qa-hero-avatar-wrap\">\n            <div class=\"qa-avatar qa-avatar-48\" title=\"" + Ib.heroName + "\">\n              <img class=\"qa-avatar-img\" " + (Ib.heroAvatarRes ? "data-res=\"" + Ib.heroAvatarRes + "\"" : "") + " alt=\"" + Ib.heroName + "\" loading=\"lazy\">\n              <div class=\"qa-avatar-fallback\">" + NY(Ib.heroName) + "</div>\n            </div>\n          </div>\n          <div class=\"qa-hero-info\">\n            <div class=\"qa-hero-name\">" + Ib.heroName + "</div>\n            <div class=\"qa-hero-stats\">\n              <span class=\"qa-hero-stat\">Lv." + (Ib.level || 1) + "</span>\n              <span class=\"qa-hero-stat star\">★" + (Ib.star || 0) + "</span>\n              <span class=\"qa-hero-stat power\">战力:" + Ib.power + "</span>\n            </div>\n            <div class=\"qa-hero-tags\">\n              <span class=\"qa-hero-tag red\">红" + Ib.red + "</span>\n              <span class=\"qa-hero-tag hole\">孔" + Ib.hole + "</span>\n              <span class=\"qa-hero-tag holy " + IY + "\">" + Iy + "</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"qa-hero-section\">\n          <div class=\"qa-hero-section-title\">基础属性</div>\n          <div class=\"qa-hero-attr-grid\">\n            <div class=\"qa-hero-attr-item\">\n              <span class=\"qa-hero-attr-label\">攻击力</span>\n              <span class=\"qa-hero-attr-value\">" + (IK = Ib.attack, IK ? (IK / 100000000).toFixed(3) + "亿" : "0") + "</span>\n            </div>\n            <div class=\"qa-hero-attr-item\">\n              <span class=\"qa-hero-attr-label\">生命值</span>\n              <span class=\"qa-hero-attr-value\">" + (If = Ib.hp, If ? (If / 100000000).toFixed(3) + "亿" : "0") + "</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"qa-hero-section\">\n          <div class=\"qa-hero-section-title\">装备淬炼</div>\n          <div class=\"qa-hero-equip-grid\">\n            " + (IE => {
        const IG = {
          "1": "武器",
          "2": "衣服",
          "3": "头盔",
          "4": "坐骑"
        };
        const IA = Object.entries(IE || {});
        return IA.length ? IA.map(([IQ, Ix]) => {
          {
            const Ik = IG[IQ] || "部位" + IQ;
            const Ig = Object.values(Ix?.["quenches"] || {});
            return Ig.length ? "<div class=\"qa-hero-equip-slot\">\n        <span class=\"qa-hero-equip-label\">" + Ik + "</span>\n        <div class=\"qa-hero-equip-diamonds\">" + Ig.map(IL => "<div class=\"qa-hero-equip-diamond" + (6 === IL?.["colorId"] ? " red" : "") + "\"></div>").join("") + "</div>\n      </div>" : "<div class=\"qa-hero-equip-slot\">\n          <span class=\"qa-hero-equip-label\">" + Ik + "</span>\n          <span class=\"qa-hero-equip-none\">--</span>\n        </div>";
          }
        }).join("") : "<div class=\"qa-hero-equip-empty\">暂无装备数据</div>";
      })(Ib.equipment) + "\n          </div>\n        </div>\n\n        <div class=\"qa-hero-section\">\n          <div class=\"qa-hero-section-title\">鱼灵信息</div>\n          <div class=\"qa-hero-fish-grid\">\n            <div class=\"qa-hero-fish-item\">\n              <span class=\"qa-hero-fish-label\">鱼灵</span>\n              <span class=\"qa-hero-fish-value\">" + (Ib.fishName || "无") + "</span>\n            </div>\n            <div class=\"qa-hero-fish-item\">\n              <span class=\"qa-hero-fish-label\">鱼珠技能</span>\n              <span class=\"qa-hero-fish-value\">" + (Ib.pearlSkill || "无") + "</span>\n            </div>\n            <div class=\"qa-hero-fish-item full\">\n              <span class=\"qa-hero-fish-label\">鱼灵淬炼</span>\n              <div class=\"qa-hero-fish-dots\">" + (Ib.fishSlots && 0 !== Ib.fishSlots.length ? Ib.fishSlots.map(IE => "<div class=\"qa-hero-fish-dot\" style=\"background:" + IE.colorValue + ";\"></div>").join("") : "<span class=\"qa-hero-fish-empty\">无淬炼</span>") + "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ";
      document.body.appendChild(IC);
      Nw(IC);
      NE(IC);
      IC.addEventListener("mouseleave", IE => {
        setTimeout(() => {
          NX && !NX.matches(":hover") && NA();
        }, 100);
      });
      IC.addEventListener("click", IE => {
        {
          IE.target === IC && NA();
        }
      });
      const Im = IC.querySelector("[data-action=\"close\"]");
      Im && Im.addEventListener("click", () => NA());
    }
  };
  const Ng = Ib => Ib ? Ib >= 100000000 ? (Ib / 100000000).toFixed(2) + "亿" : Ib >= 10000 ? (Ib / 10000).toFixed(2) + "万" : Ib.toString() : "0";
  const NL = Ib => {
    let II = 0;
    let If = 0;
    const IK = [];
    const IW = {
      redCount: II,
      holeCount: If,
      heroList: IK
    };
    if (!Ib || !Ib.heroes) {
      return IW;
    }
    const IC = {};
    Ib.pearlMap && Object.values(Ib.pearlMap).forEach(Iy => {
      Iy.artifactId && (IC[Iy.artifactId] = Iy.slotMap || {});
    });
    Object.values(Ib.heroes).forEach(Iy => {
      {
        const Im = Iy?.["heroId"] ?? Iy?.["id"];
        if (!Im) {
          return;
        }
        const IE = Tf[Im] || {};
        const IX = (Ik => {
          {
            let Id = 0;
            let c0 = 0;
            return Ik ? (Object.values(Ik).forEach(c1 => {
              c1 && c1.quenches && Object.values(c1.quenches).forEach(c2 => {
                {
                  c0++;
                  6 === c2.colorId && Id++;
                }
              });
            }), {
              redCount: Id,
              holeCount: c0
            }) : {
              redCount: Id,
              holeCount: c0
            };
          }
        })(Iy.equipment);
        const IG = (Ik => {
          if (!Ik) {
            return null;
          }
          const Ig = String(Ik).substring(0, 4);
          return NK[Ig]?.["name"] || null;
        })(Iy.artifactId);
        const IA = (Ik => {
          {
            if (!Ik || !Array.isArray(Ik)) {
              return null;
            }
            for (const Ig of Ik) if (NC[Ig.skillId]) {
              return NC[Ig.skillId].name;
            }
            return null;
          }
        })(Iy.appendSkill);
        const IQ = [];
        const Ix = IC[Iy.artifactId];
        Ix && Object.values(Ix).forEach(Ik => {
          const Ig = {
            name: "未知",
            value: "#9ca3af"
          };
          const IL = Ny[Ik.colorId] || Ig;
          const Id = {
            colorId: Ik.colorId,
            colorName: IL.name,
            colorValue: IL.value
          };
          IQ.push(Id);
        });
        IK.push({
          heroId: Im,
          skinId: Nf(Iy, Im),
          heroName: IE.name || "武将" + Im,
          heroAvatarRes: Nm(Im),
          power: Ng(Iy.power),
          star: Iy.star || 0,
          level: Iy.level || 0,
          red: IX.redCount,
          hole: IX.holeCount,
          hasHolyBeast: Iy.hB?.["active"] || false,
          equipment: Iy.equipment || {},
          fishName: IG,
          pearlSkill: IA,
          fishSlots: IQ,
          attack: Iy.attack || 0,
          hp: Iy.hp || 0
        });
        II += IX.redCount;
        If += IX.holeCount;
      }
    });
    return {
      redCount: II,
      holeCount: If,
      heroList: IK
    };
  };
  const Nd = (Ib, II, If) => {
    if (!II?.["team"] || 0 === Ib.length) {
      return;
    }
    const IW = {};
    const IC = {};
    Object.entries(II.team).forEach(([Iy, IY]) => {
      IY.id && (IW[IY.id] = IY, IC[IY.id] = Number(Iy));
    });
    Ib.forEach(Iy => {
      const Im = IW[Iy.heroId];
      if (Im) {
        {
          Iy.attack = Im.attack || Iy.attack || 0;
          Iy.hp = Im.curHp || Im.hp || Iy.hp || 0;
          Iy.position = IC[Iy.heroId];
          const IE = Im.skin;
          Iy.skinId = IE && -1 !== IE && "-1" !== IE ? IE : Iy.heroId;
        }
      }
    });
    Ib.sort((Iy, IY) => (Iy.position ?? 999) - (IY.position ?? 999));
  };
  const u0 = (Ib, II = false, If = "") => {
    {
      if (!Ib) {
        return "<div class=\"pvp-hero-slot empty\" style=\"" + If + "\"><div class=\"pvp-hero-placeholder\">空</div></div>";
      }
      const IW = Ib?.["heroId"] ?? Ib?.["id"];
      const IC = ((IX, IG) => {
        if (IG && -1 !== IG && "-1" !== IG) {
          const Ix = Nb[String(IG)];
          if (Ix) {
            return Ix;
          }
        }
        const IA = Nb[String(IX)];
        if (IA) {
          return IA;
        }
        const IQ = Tf[IX];
        return IQ?.["avatar"] ? "" + Tw + IQ.avatar : null;
      })(IW, Nf(Ib, IW));
      const Iy = Ib.heroName || Ib.name || Tf[IW]?.["name"] || "武将" + IW;
      const IY = II ? "transform:scaleX(-1);" : "";
      const Im = Ib.level || "";
      const IE = Im ? "<div class=\"pvp-hero-level\">Lv." + Im + "</div>" : "";
      return IC ? "<div class=\"pvp-hero-slot\" style=\"" + If + "\" data-hero-id=\"" + IW + "\">\n      <img src=\"" + IC + "\" alt=\"" + Iy + "\" style=\"" + IY + "\" loading=\"lazy\" onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex';\">\n      <div class=\"pvp-hero-placeholder\" style=\"display:none;\">" + NY(Iy) + "</div>\n      " + IE + "\n    </div>" : "<div class=\"pvp-hero-slot\" style=\"" + If + "\" data-hero-id=\"" + IW + "\">\n    <div class=\"pvp-hero-placeholder\">" + NY(Iy) + "</div>\n    " + IE + "\n  </div>";
    }
  };
  const u1 = (Ib, II, If, IK = false) => {
    if (!II || 0 === II.length) {
      return "<div class=\"pvp-team-side " + Ib + "\"><div class=\"pvp-team-empty\">无阵容数据</div></div>";
    }
    const IW = [...II.slice(0, 5)];
    for (; IW.length < 5;) {
      IW.push(null);
    }
    let IC = "";
    if (If && If > 0) {
      const IY = (IE => {
        const IX = NI[IE];
        return IX ? "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/" + IX.substring(0, 2) + "/" + IX + ".png" : null;
      })(If);
      const Im = NW[If]?.["name"] || "玩具";
      IY && (IC = "<div class=\"pvp-weapon-slot\" title=\"" + Im + "\"><img src=\"" + IY + "\" alt=\"" + Im + "\" style=\"" + (IK ? "transform:scaleX(-1);" : "") + "\" loading=\"lazy\"></div>");
    }
    let Iy = "";
    Iy = IK ? "\n      " + u0(IW[0], true, "grid-column:1;grid-row:1/3;align-self:start;margin-top:40%;") + "\n      " + u0(IW[1], true, "grid-column:1;grid-row:2/4;align-self:start;margin-top:40%;") + "\n      <div class=\"pvp-weapon-cell\" style=\"grid-column:1;grid-row:3;align-self:end;\">" + IC + "</div>\n      " + u0(IW[2], true, "grid-column:2;grid-row:1;") + "\n      " + u0(IW[3], true, "grid-column:2;grid-row:2;") + "\n      " + u0(IW[4], true, "grid-column:2;grid-row:3;") + "\n    " : "\n      " + u0(IW[2], false, "grid-column:1;grid-row:1;") + "\n      " + u0(IW[3], false, "grid-column:1;grid-row:2;") + "\n      " + u0(IW[4], false, "grid-column:1;grid-row:3;") + "\n      " + u0(IW[0], false, "grid-column:2;grid-row:1/3;align-self:start;margin-top:40%;") + "\n      " + u0(IW[1], false, "grid-column:2;grid-row:2/4;align-self:start;margin-top:40%;") + "\n      <div class=\"pvp-weapon-cell\" style=\"grid-column:2;grid-row:3;align-self:end;\">" + IC + "</div>\n    ";
    return "\n    <div class=\"pvp-team-side " + Ib + "\">\n      <div class=\"pvp-team-grid-3x2\">\n        " + Iy + "\n      </div>\n    </div>\n  ";
  };
  const u2 = Ib => {
    const If = {
      power: 0,
      totalHoles: 0,
      redQuench: 0,
      holyBeast: 0
    };
    if (!Ib) {
      return If;
    }
    If.power = Ib.power || Ib.fighting || 0;
    const IK = Ib.heroes;
    return IK ? (Object.values(IK).forEach(IW => {
      IW && (IW.equipment && Object.values(IW.equipment).forEach(Iy => {
        Iy && Iy.quenches && Object.values(Iy.quenches).forEach(Im => {
          If.totalHoles++;
          6 === Im.colorId && If.redQuench++;
        });
      }), undefined !== IW.hB?.["active"] && If.holyBeast++);
    }), If) : If;
  };
  const u3 = Ib => Ib >= 100000000 ? (Ib / 100000000).toFixed(2) + "亿" : Ib >= 10000 ? (Ib / 10000).toFixed(2) + "万" : Ib.toString();
  const u4 = (Ib, II) => {
    const IK = document.getElementById("qa-pvp-teams-container");
    if (!IK) {
      return;
    }
    const IW = [...(Ib?.["heroes"] || []), ...(II?.["heroes"] || [])];
    const IC = Ib?.["playerInfo"] || {};
    const Iy = II?.["playerInfo"] || {};
    const IY = IC.name || window.ROLE?.["name"] || TR.roleName || "我方";
    const Im = IC.headImg || window.ROLE?.["headImg"] || "";
    const IE = IC.legion || TR.legionName || "无俱乐部";
    const IX = IC.legionMaxPower || "";
    const IG = IC.legionRed || 0;
    const IA = Iy.name || TR.pvpTargetData?.["name"] || "对方";
    const IQ = Iy.headImg || TR.pvpTargetData?.["headImg"] || "";
    const Ix = Iy.legion || TR.pvpTargetData?.["legionName"] || "无俱乐部";
    const Ik = Iy.legionMaxPower || TR.pvpTargetData?.["legionMaxPower"] || "";
    const Ig = Iy.legionRed || TR.pvpTargetData?.["legionRed"] || 0;
    const IL = u2(TR.myRoleInfo || window.ROLE || TR.roleInfo);
    let c0 = {
      power: 0,
      heroes: {}
    };
    TR.pvpTargetData && (c0.power = TR.pvpTargetData.power || 0, TR.pvpTargetData.heroList && Array.isArray(TR.pvpTargetData.heroList) && (c0.heroes = {}, TR.pvpTargetData.heroList.forEach(c9 => {
      c9 && c9.heroId && (c0.heroes[c9.heroId] = c9);
    })));
    const c1 = u2(c0);
    const c2 = u1("left", Ib?.["heroes"] || [], Ib?.["weaponId"] || 0, false);
    const c3 = u1("right", II?.["heroes"] || [], II?.["weaponId"] || 0, true);
    IK.style.display = "block";
    IK.innerHTML = "\n    <div class=\"pvp-teams-wrapper\">\n      <!-- 玩家对比头部 -->\n      <div class=\"pvp-players-header\">\n        <div class=\"pvp-player-info left\">\n          <div class=\"pvp-player-avatar\" data-player=\"left\" style=\"cursor:pointer;\">\n            " + (Im ? "<img src=\"" + Im + "\" alt=\"" + IY + "\" referrerpolicy=\"no-referrer\" loading=\"lazy\" onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex';\">" : "") + "\n            <div class=\"pvp-player-avatar-fallback\" style=\"" + (Im ? "display:none;" : "") + "\">" + IY.charAt(0) + "</div>\n          </div>\n          <div class=\"pvp-player-name\">" + IY + "</div>\n          <div class=\"pvp-player-stats\">\n            战力: <span class=\"stat-power\">" + u3(IL.power) + "</span> |\n            孔: <span class=\"stat-holes\">" + IL.totalHoles + "</span> |\n            红: <span class=\"stat-red\">" + IL.redQuench + "</span> |\n            四圣: <span class=\"stat-holy\">" + IL.holyBeast + "</span>\n          </div>\n        </div>\n        <div class=\"pvp-vs-text\">VS</div>\n        <div class=\"pvp-player-info right\">\n          <div class=\"pvp-player-avatar\" data-player=\"right\" style=\"cursor:pointer;\">\n            " + (IQ ? "<img src=\"" + IQ + "\" alt=\"" + IA + "\" referrerpolicy=\"no-referrer\" loading=\"lazy\" onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex';\">" : "") + "\n            <div class=\"pvp-player-avatar-fallback\" style=\"" + (IQ ? "display:none;" : "") + "\">" + IA.charAt(0) + "</div>\n          </div>\n          <div class=\"pvp-player-name\">" + IA + "</div>\n          <div class=\"pvp-player-stats\">\n            战力: <span class=\"stat-power\">" + u3(c1.power) + "</span> |\n            孔: <span class=\"stat-holes\">" + c1.totalHoles + "</span> |\n            红: <span class=\"stat-red\">" + c1.redQuench + "</span> |\n            四圣: <span class=\"stat-holy\">" + c1.holyBeast + "</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- 阵容对比 -->\n      <div class=\"pvp-teams-content\">\n        <div class=\"pvp-team-column\">\n          <div class=\"pvp-team-title\">我方阵容</div>\n          " + c2 + "\n        </div>\n        <div class=\"pvp-team-column\">\n          <div class=\"pvp-team-title\">对方阵容</div>\n          " + c3 + "\n        </div>\n      </div>\n    </div>\n  ";
    const c6 = {
      name: IY,
      legion: IE,
      legionMaxPower: IX,
      legionRed: IG
    };
    const c7 = {
      name: IA,
      legion: Ix,
      legionMaxPower: Ik,
      legionRed: Ig
    };
    IK.querySelectorAll(".pvp-player-avatar[data-player]").forEach(c9 => {
      const cD = "left" === c9.dataset.player ? c6 : c7;
      c9.addEventListener("click", () => Nx(cD, c9));
      c9.addEventListener("mouseenter", () => Nx(cD, c9));
      c9.addEventListener("mouseleave", cv => {
        {
          setTimeout(() => {
            NG && !NG.matches(":hover") && NQ();
          }, 100);
        }
      });
    });
    let c8 = null;
    IK.querySelectorAll(".pvp-hero-slot:not(.empty)").forEach(c9 => {
      const cD = c9.dataset.heroId;
      if (!cD) {
        return;
      }
      const cv = IW.find(cB => String(cB.heroId || cB.id) === cD);
      cv && (c9.addEventListener("click", cB => {
        {
          c8 && (clearTimeout(c8), c8 = null);
          Nk(cv);
        }
      }), c9.addEventListener("mouseenter", () => {
        {
          c8 && clearTimeout(c8);
          c8 = setTimeout(() => Nk(cv), 300);
        }
      }), c9.addEventListener("mouseleave", () => {
        c8 && (clearTimeout(c8), c8 = null);
        setTimeout(() => {
          {
            NX && !NX.matches(":hover") && NA();
          }
        }, 100);
      }));
    });
  };
  const u5 = () => {
    {
      const II = "dark" === TR.theme;
      const If = {
        bg: II ? "#1a1a2e" : "#ffffff",
        text: II ? "#f9fafb" : "#1f2937",
        textSecondary: II ? "#9ca3af" : "#6b7280",
        headerBg: II ? "#374151" : "#f3f4f6",
        headerText: II ? "#d1d5db" : "#374151",
        border: II ? "#4b5563" : "#e5e7eb",
        zebraStripe: II ? "#2d2d44" : "#f9fafb"
      };
      return If;
    }
  };
  let u6 = null;
  let u7 = null;
  let u8 = null;
  let u9 = "";
  let uP = "";
  let uD = "";
  let uv = "gold1";
  let uB = 1;
  let uz = 20;
  let uM = 1;
  let uS = 20;
  let uT = 1;
  let uR = 20;
  const uZ = Ib => new Promise(II => {
    {
      if (!Ib) {
        return void II(null);
      }
      const IK = new Image();
      IK.crossOrigin = "anonymous";
      IK.onload = () => II(IK);
      IK.onerror = () => II(null);
      IK.src = Ib;
      setTimeout(() => II(null), 3000);
    }
  });
  const uU = () => {
    const Ib = new Date();
    return Ib.getFullYear() + "/" + String(Ib.getMonth() + 1).padStart(2, "0") + "/" + String(Ib.getDate()).padStart(2, "0");
  };
  const uN = Ib => Ib ? Ib >= 100000000 ? (Ib / 100000000).toFixed(2) + "亿" : Ib >= 10000 ? (Ib / 10000).toFixed(2) + "万" : Ib.toString() : "0";
  const uu = Ib => null == Ib ? "0" : Number(Ib).toFixed(0);
  const uF = Ib => Ib ? String(Ib) : "0";
  const up = async () => {
    u9 = uU();
    const Ib = document.getElementById("qa-top-rank-content");
    Ib && (Ib.innerHTML = "<div class=\"helper-text\">正在加载巅峰数据...</div>");
    try {
      {
        const II = {
          rankType: 1
        };
        const If = await Rz("arena_getarearank", II);
        if (!If || !If.list) {
          u6 = null;
          Ib && (Ib.innerHTML = "<div class=\"helper-text\">未查询到巅峰数据</div>");
          return null;
        }
        const IK = {};
        for (const [IW, IC] of Object.entries(If.list)) IK[IW] = {
          serverId: IC?.["serverId"] || 0,
          roleId: IC?.["roleId"] || 0,
          name: IC?.["name"] || "",
          headImg: IC?.["headImg"] || "",
          power: uN(IC?.["power"] || 0),
          rank: IC?.["rank"] || 0,
          score: uu(IC?.["score"] || 0)
        };
        u6 = IK;
        uB = 1;
        uV();
        return IK;
      }
    } catch (IY) {
      u6 = null;
      Ib && (Ib.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>");
      return null;
    }
  };
  const uV = () => {
    if (!u6) {
      return;
    }
    const Ib = document.getElementById("qa-top-rank-content");
    if (!Ib) {
      return;
    }
    const II = Object.entries(u6);
    const If = Math.ceil(II.length / uz);
    const IK = (uB - 1) * uz;
    const IW = IK + uz;
    const IC = II.slice(IK, IW);
    Ib.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + u9 + "</div>\n      <div class=\"rank-list\">\n        " + IC.map(([Iy, IY]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-left\">" + IY.rank + "</span>\n              <img src=\"" + (IY.headImg || "") + "\" class=\"rank-member-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n              <div class=\"rank-member-stats\">\n                <span class=\"stat-inline name\">" + IY.name + "</span>\n                <span class=\"stat-inline power\">战力 " + IY.power + "</span>\n                <span class=\"stat-inline score\">积分 " + IY.score + "</span>\n                <span class=\"stat-inline id\">玩家ID " + IY.roleId + "</span>\n                <span class=\"stat-inline win\">区服 " + uF(IY.serverId) + "</span>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (If > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + uB + " / " + If + " 页，共 " + II.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (1 === uB ? "disabled" : "") + " data-action=\"top-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (uB === If ? "disabled" : "") + " data-action=\"top-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-top-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (10 === uz ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (20 === uz ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (50 === uz ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (100 === uz ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
    uJ("qa-top-rank-content");
  };
  const uJ = Ib => {
    const If = document.getElementById(Ib);
    If && If.querySelectorAll("[data-rank-scrollable]").forEach(IK => {
      let IC;
      let Iy;
      let IY = false;
      IK.addEventListener("mousedown", Im => {
        Im.target.closest(".rank-badge-top-left") || (IY = true, IK.style.cursor = "grabbing", IC = Im.pageX - IK.offsetLeft, Iy = IK.scrollLeft, Im.preventDefault());
      });
      IK.addEventListener("mouseleave", () => {
        IY = false;
        IK.style.cursor = "grab";
      });
      IK.addEventListener("mouseup", () => {
        IY = false;
        IK.style.cursor = "grab";
      });
      IK.addEventListener("mousemove", Im => {
        if (!IY) {
          return;
        }
        Im.preventDefault();
        const IE = 2 * (Im.pageX - IK.offsetLeft - IC);
        IK.scrollLeft = Iy - IE;
      });
    });
  };
  const uH = async () => {
    if (!u6) {
      return;
    }
    const II = u5();
    const If = Object.entries(u6);
    const IK = document.createElement("canvas");
    const IW = IK.getContext("2d");
    const IC = 20;
    const Iy = [60, 50, 100, 120, 150, 120, 120];
    const IY = Iy.reduce((Ix, Ik) => Ix + Ik, 0) + 40;
    const Im = 80 + 50 * (If.length + 1) + 40;
    const IE = If.map(([, Ix]) => uZ(Ix.headImg));
    const IX = await Promise.all(IE);
    IK.width = 2 * IY;
    IK.height = 2 * Im;
    IW.scale(2, 2);
    IW.fillStyle = II.bg;
    IW.fillRect(0, 0, IY, Im);
    IW.fillStyle = II.text;
    IW.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IW.fillText("巅峰榜 - " + u9, IC, 40);
    IW.fillStyle = II.headerBg;
    IW.fillRect(IC, 80, IY - 40, 30);
    IW.fillStyle = II.headerText;
    IW.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let IG = IC;
    ["排名", "头像", "服务器ID", "玩家ID", "玩家名称", "战力", "巅峰积分"].forEach((Ix, Ik) => {
      IW.fillText(Ix, IG + 8, 100);
      IG += Iy[Ik];
    });
    IW.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    If.forEach(([Ix, Ik], Ig) => {
      {
        const Id = 110 + 50 * Ig;
        Ig % 2 == 1 && (IW.fillStyle = II.zebraStripe, IW.fillRect(IC, Id, IY - 40, 50));
        IW.fillStyle = II.text;
        let c0 = IC;
        IW.fillText(String(Ik.rank), c0 + 8, Id + 30);
        c0 += Iy[0];
        const c1 = IX[Ig];
        c1 && (IW.save(), IW.beginPath(), IW.arc(c0 + 25, Id + 25, 18, 0, 2 * Math.PI), IW.clip(), IW.drawImage(c1, c0 + 7, Id + 7, 36, 36), IW.restore());
        c0 += Iy[1];
        IW.fillText(uF(Ik.serverId), c0 + 8, Id + 30);
        c0 += Iy[2];
        IW.fillText(String(Ik.roleId), c0 + 8, Id + 30);
        c0 += Iy[3];
        IW.fillText(Ik.name || "-", c0 + 8, Id + 30);
        c0 += Iy[4];
        IW.fillText(Ik.power, c0 + 8, Id + 30);
        c0 += Iy[5];
        IW.fillText(Ik.score, c0 + 8, Id + 30);
      }
    });
    IW.strokeStyle = II.border;
    IW.lineWidth = 1;
    IW.strokeRect(IC, 80, IY - 40, 30 + 50 * If.length);
    const IA = u9.split("/");
    const IQ = IA[0] + "年" + IA[1] + "月" + IA[2] + "日";
    await R9(IK, IQ + "巅峰榜信息.png");
  };
  const uh = Ib => {
    if (!u6) {
      return;
    }
    const II = Object.entries(u6);
    const If = Math.ceil(II.length / uz);
    "prev" === Ib && uB > 1 ? uB-- : "next" === Ib && uB < If && uB++;
    uV();
  };
  const uO = async () => {
    uP = uU();
    const Ib = document.getElementById("qa-club-rank-content");
    Ib && (Ib.innerHTML = "<div class=\"helper-text\">正在加载俱乐部数据...</div>");
    try {
      const II = await Rz("legion_getarearank", {});
      if (!II || !II.list) {
        u7 = null;
        Ib && (Ib.innerHTML = "<div class=\"helper-text\">未查询到俱乐部数据</div>");
        return null;
      }
      const If = {};
      const IK = Object.entries(II.list);
      for (const [IW, IC] of IK) try {
        const Iy = {
          legionId: IC?.["id"]
        };
        const IY = await Rz("legion_getinfobyid", Iy, 5000);
        const Im = [];
        const IE = [];
        const IX = [];
        for (const [IG, IA] of Object.entries(IY?.["legionData"]?.["members"] || {})) undefined !== IA.roleId && (Im.push(IA.roleId), IE.push(IA.name), IX.push(IA.headImg || ""));
        If[IW] = {
          rank: IC.rank || 0,
          ServerId: uF(IC.serverId || 0),
          Clubname: IC.name || "",
          logo: IY?.["legionData"]?.["logo"] || "",
          redQuench: IY?.["legionData"]?.["quenchNum"] || 0,
          power: uN(IC.power || 0),
          roleID1: Im[0] || 0,
          roleID2: Im[1] || 0,
          roleID3: Im[2] || 0,
          name1: IE[0] || "",
          name2: IE[1] || "",
          name3: IE[2] || "",
          headImg1: IX[0] || "",
          headImg2: IX[1] || "",
          headImg3: IX[2] || ""
        };
      } catch (IQ) {
        If[IW] = {
          rank: IC.rank || 0,
          ServerId: uF(IC.serverId || 0),
          Clubname: IC.name || "",
          logo: "",
          redQuench: 0,
          power: uN(IC.power || 0),
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
      u7 = If;
      uM = 1;
      uj();
      return If;
    } catch (Ix) {
      u7 = null;
      Ib && (Ib.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>");
      return null;
    }
  };
  const uj = () => {
    {
      if (!u7) {
        return;
      }
      const II = document.getElementById("qa-club-rank-content");
      if (!II) {
        return;
      }
      const If = Object.entries(u7);
      const IK = Math.ceil(If.length / uS);
      const IW = (uM - 1) * uS;
      const IC = IW + uS;
      const Iy = If.slice(IW, IC);
      II.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + uP + "</div>\n      <div class=\"rank-list\">\n        " + Iy.map(([IY, Im]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-top-left\">排名 " + Im.rank + "</span>\n              <div class=\"rank-member-content\">\n                <img src=\"" + (Im.logo || "") + "\" class=\"rank-club-logo\" onerror=\"this.style.display='none'\" alt=\"\">\n                <div class=\"rank-member-stats\">\n                  <span class=\"stat-inline win\">区服 " + Im.ServerId + "</span>\n                  <span class=\"stat-inline loss\">俱乐部名 " + Im.Clubname + "</span>\n                  <span class=\"stat-inline red\">总红淬 " + Im.redQuench + "红</span>\n                  <span class=\"stat-inline power\">战力 " + Im.power + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + Im.name1 + "</span>\n                  <img src=\"" + (Im.headImg1 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + Im.roleID1 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + Im.name2 + "</span>\n                  <img src=\"" + (Im.headImg2 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + Im.roleID2 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + Im.name3 + "</span>\n                  <img src=\"" + (Im.headImg3 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + Im.roleID3 + "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (IK > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + uM + " / " + IK + " 页，共 " + If.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (1 === uM ? "disabled" : "") + " data-action=\"club-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (uM === IK ? "disabled" : "") + " data-action=\"club-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-club-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (10 === uS ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (20 === uS ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (50 === uS ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (100 === uS ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
      uJ("qa-club-rank-content");
    }
  };
  const uq = async () => {
    {
      if (!u7) {
        return;
      }
      const If = u5();
      const IK = Object.entries(u7);
      const IW = document.createElement("canvas");
      const IC = IW.getContext("2d");
      const Iy = 20;
      const IY = [60, 150, 60, 80, 100, 120, 120, 120];
      const Im = IY.reduce((Id, c0) => Id + c0, 0) + 40;
      const IE = 80 + 70 * (IK.length + 1) + 40;
      IW.width = 2 * Im;
      IW.height = 2 * IE;
      IC.scale(2, 2);
      const IX = IK.map(([, Id]) => uZ(Id.logo));
      const IG = IK.flatMap(([, Id]) => [uZ(Id.headImg1), uZ(Id.headImg2), uZ(Id.headImg3)]);
      const [IA, ...IQ] = await Promise.all([Promise.all(IX), ...IG]);
      const Ix = [];
      for (let Id = 0; Id < IK.length; Id++) {
        Ix.push([IQ[3 * Id], IQ[3 * Id + 1], IQ[3 * Id + 2]]);
      }
      IC.fillStyle = If.bg;
      IC.fillRect(0, 0, Im, IE);
      IC.fillStyle = If.text;
      IC.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
      IC.fillText("五百服Top俱乐部 - " + uP, Iy, 40);
      IC.fillStyle = If.headerBg;
      IC.fillRect(Iy, 80, Im - 40, 30);
      IC.fillStyle = If.headerText;
      IC.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
      let Ik = Iy;
      ["排名", "俱乐部", "区服", "总红淬", "战力", "玩家1", "玩家2", "玩家3"].forEach((c0, c1) => {
        IC.fillText(c0, Ik + 4, 100);
        Ik += IY[c1];
      });
      IC.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
      IK.forEach(([c0, c1], c2) => {
        const c3 = 110 + 70 * c2;
        c2 % 2 == 1 && (IC.fillStyle = If.zebraStripe, IC.fillRect(Iy, c3, Im - 40, 70));
        IC.fillStyle = If.text;
        let c4 = Iy;
        IC.fillText(String(c1.rank), c4 + 8, c3 + 20);
        c4 += IY[0];
        const c5 = IA[c2];
        c5 && (IC.save(), IC.beginPath(), IC.arc(c4 + 20, c3 + 35, 14, 0, 2 * Math.PI), IC.clip(), IC.drawImage(c5, c4 + 6, c3 + 21, 28, 28), IC.restore());
        IC.fillText(c1.Clubname || "-", c4 + 32, c3 + 20);
        c4 += IY[1];
        IC.fillText(c1.ServerId, c4 + 8, c3 + 20);
        c4 += IY[2];
        IC.fillText(c1.redQuench + "红", c4 + 8, c3 + 20);
        c4 += IY[3];
        IC.fillText(c1.power, c4 + 8, c3 + 20);
        c4 += IY[4];
        const c6 = Ix[c2] || [];
        for (let c7 = 0; c7 < 3; c7++) {
          {
            const c8 = c6[c7];
            const c9 = c1["name" + (c7 + 1)] || "-";
            const cP = String(c1["roleID" + (c7 + 1)] || 0);
            c8 && (IC.save(), IC.beginPath(), IC.arc(c4 + 12, c3 + 20, 8, 0, 2 * Math.PI), IC.clip(), IC.drawImage(c8, c4 + 4, c3 + 12, 16, 16), IC.restore());
            IC.fillText(c9, c4 + 24, c3 + 20);
            IC.fillText(cP, c4 + 24, c3 + 35);
            c4 += IY[5 + c7];
          }
        }
      });
      IC.strokeStyle = If.border;
      IC.lineWidth = 1;
      IC.strokeRect(Iy, 80, Im - 40, 30 + 70 * IK.length);
      const Ig = uP.split("/");
      const IL = Ig[0] + "年" + Ig[1] + "月" + Ig[2] + "日";
      await R9(IW, IL + "TOP俱乐部信息.png");
    }
  };
  const uw = Ib => {
    if (!u7) {
      return;
    }
    const II = Object.entries(u7);
    const If = Math.ceil(II.length / uS);
    "prev" === Ib && uM > 1 ? uM-- : "next" === Ib && uM < If && uM++;
    uj();
  };
  const ub = Ib => {
    {
      switch (Ib) {
        case "gold1":
        default:
          return 1;
        case "gold2":
          return 101;
        case "gold3":
          return 201;
        case "gold4":
          return 301;
        case "gold5":
          return 401;
      }
    }
  };
  const uI = Ib => {
    {
      switch (Ib) {
        case "gold1":
        default:
          return 100;
        case "gold2":
          return 200;
        case "gold3":
          return 300;
        case "gold4":
          return 400;
        case "gold5":
          return 500;
      }
    }
  };
  const uf = async (Ib = uv) => {
    uv = Ib;
    uD = uU();
    const II = document.getElementById("qa-gold-rank-content");
    II && (II.innerHTML = "<div class=\"helper-text\">正在加载黄金积分数据...</div>");
    try {
      {
        const If = await Rz("legionwar_getgoldmonthwarrank", {
          startRank: ub(Ib),
          endRank: uI(Ib)
        });
        if (!If || !If.legionList) {
          u8 = null;
          II && (II.innerHTML = "<div class=\"helper-text\">未查询到俱乐部数据</div>");
          return null;
        }
        const IK = {};
        const IW = Object.entries(If.legionList);
        for (const [IC, Iy] of IW) try {
          const IY = {
            legionId: Iy?.["id"]
          };
          const Im = await Rz("legion_getinfobyid", IY, 5000);
          const IE = [];
          const IX = [];
          const IG = [];
          const IA = [];
          for (const [IQ, Ix] of Object.entries(Im?.["legionData"]?.["members"] || {})) undefined !== Ix.roleId && (IE.push(Ix.roleId), IX.push(Ix.name), IA.push(Ix.headImg || ""), undefined !== Ix.custom?.["red_quench_cnt"] && IG.push(Ix.custom.red_quench_cnt + "红"));
          IK[IC] = {
            rank: Iy.rank || 0,
            id: Iy.id || 0,
            ServerId: uF(Iy.serverId || 0),
            redQuench: Im?.["legionData"]?.["quenchNum"] || 0,
            Clubname: Iy.name || "",
            logo: Im?.["legionData"]?.["logo"] || "",
            power: uN(Iy.power || 0),
            score: uu(Iy.score || 0),
            roleID1: IE[0] || 0,
            roleID2: IE[1] || 0,
            roleID3: IE[2] || 0,
            name1: IX[0] || "",
            name2: IX[1] || "",
            name3: IX[2] || "",
            headImg1: IA[0] || "",
            headImg2: IA[1] || "",
            headImg3: IA[2] || "",
            announcement: Im?.["legionData"]?.["announcement"] || "",
            redno1: IG[0] || "0红",
            redno2: IG[1] || "0红",
            redno3: IG[2] || "0红"
          };
        } catch (Ik) {
          IK[IC] = {
            rank: Iy.rank || 0,
            id: Iy.id || 0,
            ServerId: uF(Iy.serverId || 0),
            redQuench: 0,
            Clubname: Iy.name || "",
            logo: "",
            power: uN(Iy.power || 0),
            score: uu(Iy.score || 0),
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
        u8 = IK;
        uT = 1;
        uK();
        return IK;
      }
    } catch (IL) {
      {
        u8 = null;
        II && (II.innerHTML = "<div class=\"helper-text\">查询失败，请重试</div>");
        return null;
      }
    }
  };
  const uK = () => {
    {
      if (!u8) {
        return;
      }
      const II = document.getElementById("qa-gold-rank-content");
      if (!II) {
        return;
      }
      const If = Object.entries(u8);
      const IK = Math.ceil(If.length / uR);
      const IW = (uT - 1) * uR;
      const IC = IW + uR;
      const Iy = If.slice(IW, IC);
      II.innerHTML = "\n    <div class=\"rank-info\">\n      <div class=\"match-date-tag\">查询日期: " + uD + "</div>\n      <div class=\"rank-list\">\n        " + Iy.map(([IY, Im]) => "\n          <div class=\"rank-member-card\">\n            <div class=\"rank-member-header\" data-rank-scrollable>\n              <span class=\"stat-inline rank rank-badge-top-left\">排名 " + Im.rank + "</span>\n              <div class=\"rank-member-content\">\n                <img src=\"" + (Im.logo || "") + "\" class=\"rank-club-logo\" onerror=\"this.style.display='none'\" alt=\"\">\n                <div class=\"rank-member-stats\">\n                  <span class=\"stat-inline win\">区服 " + Im.ServerId + "</span>\n                  <span class=\"stat-inline loss\">俱乐部名 " + Im.Clubname + "</span>\n                  <span class=\"stat-inline score\">黄金积分 " + Im.score + "</span>\n                  <span class=\"stat-inline red\">总红淬 " + Im.redQuench + "红</span>\n                  <span class=\"stat-inline power\">战力 " + Im.power + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + Im.name1 + "</span>\n                  <img src=\"" + (Im.headImg1 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + Im.roleID1 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + Im.name2 + "</span>\n                  <img src=\"" + (Im.headImg2 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + Im.roleID2 + "</span>\n                  <span class=\"stat-inline name\">玩家名称 " + Im.name3 + "</span>\n                  <img src=\"" + (Im.headImg3 || "") + "\" class=\"rank-member-avatar-small\" onerror=\"this.style.display='none'\" alt=\"\">\n                  <span class=\"stat-inline id\">玩家ID " + Im.roleID3 + "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      " + (IK > 1 ? "\n        <div class=\"pagination-container\">\n          <div class=\"pagination-info\">\n            第 " + uT + " / " + IK + " 页，共 " + If.length + " 条\n          </div>\n          <div class=\"pagination-controls\">\n            <button class=\"btn btn-secondary btn-small\" " + (1 === uT ? "disabled" : "") + " data-action=\"gold-rank-page-prev\">上一页</button>\n            <button class=\"btn btn-secondary btn-small\" " + (uT === IK ? "disabled" : "") + " data-action=\"gold-rank-page-next\">下一页</button>\n          </div>\n          <select class=\"input\" id=\"qa-gold-rank-page-size\" style=\"width:80px;\">\n            <option value=\"10\" " + (10 === uR ? "selected" : "") + ">10</option>\n            <option value=\"20\" " + (20 === uR ? "selected" : "") + ">20</option>\n            <option value=\"50\" " + (50 === uR ? "selected" : "") + ">50</option>\n            <option value=\"100\" " + (100 === uR ? "selected" : "") + ">100</option>\n          </select>\n        </div>\n      " : "") + "\n    </div>\n  ";
      uJ("qa-gold-rank-content");
    }
  };
  const uW = async () => {
    if (!u8) {
      return;
    }
    const II = u5();
    const If = Object.entries(u8);
    const IK = document.createElement("canvas");
    const IW = IK.getContext("2d");
    const IC = 20;
    const Iy = [60, 150, 60, 100, 80, 100, 120, 120, 120];
    const IY = Iy.reduce((IL, Id) => IL + Id, 0) + 40;
    const Im = 80 + 70 * (If.length + 1) + 40;
    IK.width = 2 * IY;
    IK.height = 2 * Im;
    IW.scale(2, 2);
    const IE = If.map(([, IL]) => uZ(IL.logo));
    const IX = If.flatMap(([, IL]) => [uZ(IL.headImg1), uZ(IL.headImg2), uZ(IL.headImg3)]);
    const [IG, ...IA] = await Promise.all([Promise.all(IE), ...IX]);
    const IQ = [];
    for (let IL = 0; IL < If.length; IL++) {
      IQ.push([IA[3 * IL], IA[3 * IL + 1], IA[3 * IL + 2]]);
    }
    IW.fillStyle = II.bg;
    IW.fillRect(0, 0, IY, Im);
    IW.fillStyle = II.text;
    IW.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IW.fillText("黄金积分俱乐部总览 - " + uD, IC, 40);
    IW.fillStyle = II.headerBg;
    IW.fillRect(IC, 80, IY - 40, 30);
    IW.fillStyle = II.headerText;
    IW.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
    let Ix = IC;
    ["排名", "俱乐部", "区服", "黄金积分", "总红淬", "战力", "玩家1", "玩家2", "玩家3"].forEach((Id, c0) => {
      IW.fillText(Id, Ix + 4, 100);
      Ix += Iy[c0];
    });
    IW.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    If.forEach(([Id, c0], c1) => {
      {
        const c3 = 110 + 70 * c1;
        c1 % 2 == 1 && (IW.fillStyle = II.zebraStripe, IW.fillRect(IC, c3, IY - 40, 70));
        IW.fillStyle = II.text;
        let c4 = IC;
        IW.fillText(String(c0.rank), c4 + 8, c3 + 20);
        c4 += Iy[0];
        const c5 = IG[c1];
        c5 && (IW.save(), IW.beginPath(), IW.arc(c4 + 20, c3 + 35, 14, 0, 2 * Math.PI), IW.clip(), IW.drawImage(c5, c4 + 6, c3 + 21, 28, 28), IW.restore());
        IW.fillText(c0.Clubname || "-", c4 + 32, c3 + 20);
        c4 += Iy[1];
        IW.fillText(c0.ServerId, c4 + 8, c3 + 20);
        c4 += Iy[2];
        IW.fillText(c0.score, c4 + 8, c3 + 20);
        c4 += Iy[3];
        IW.fillText(c0.redQuench + "红", c4 + 8, c3 + 20);
        c4 += Iy[4];
        IW.fillText(c0.power, c4 + 8, c3 + 20);
        c4 += Iy[5];
        const c6 = IQ[c1] || [];
        for (let c7 = 0; c7 < 3; c7++) {
          {
            const c9 = c6[c7];
            const cP = c0["name" + (c7 + 1)] || "-";
            const cD = String(c0["roleID" + (c7 + 1)] || 0);
            c9 && (IW.save(), IW.beginPath(), IW.arc(c4 + 12, c3 + 20, 8, 0, 2 * Math.PI), IW.clip(), IW.drawImage(c9, c4 + 4, c3 + 12, 16, 16), IW.restore());
            IW.fillText(cP, c4 + 24, c3 + 20);
            IW.fillText(cD, c4 + 24, c3 + 35);
            c4 += Iy[6 + c7];
          }
        }
      }
    });
    IW.strokeStyle = II.border;
    IW.lineWidth = 1;
    IW.strokeRect(IC, 80, IY - 40, 30 + 70 * If.length);
    const Ik = uD.split("/");
    const Ig = Ik[0] + "年" + Ik[1] + "月" + Ik[2] + "日";
    await R9(IK, Ig + "黄金积分榜信息.png");
  };
  const uC = Ib => {
    if (!u8) {
      return;
    }
    const II = Object.entries(u8);
    const If = Math.ceil(II.length / uR);
    "prev" === Ib && uT > 1 ? uT-- : "next" === Ib && uT < If && uT++;
    uK();
  };
  const uy = Ib => {
    uv = Ib;
  };
  var uY = Object.freeze({
    __proto__: null,
    exportClubRankImage: uq,
    exportGoldRankImage: uW,
    exportTopRankImage: uH,
    fetchClubRank: uO,
    fetchGoldRank: uf,
    fetchTopRank: up,
    handleClubRankPageChange: uw,
    handleClubRankPageSizeChange: Ib => {
      uS = Number(Ib) || 20;
      uM = 1;
      uj();
    },
    handleGoldRankPageChange: uC,
    handleGoldRankPageSizeChange: Ib => {
      {
        uR = Number(Ib) || 20;
        uT = 1;
        uK();
      }
    },
    handleTopRankPageChange: uh,
    handleTopRankPageSizeChange: Ib => {
      uz = Number(Ib) || 20;
      uB = 1;
      uV();
    },
    renderClubRank: uj,
    renderGoldRank: uK,
    renderTopRank: uV,
    setGoldRankGroup: uy
  });
  const uX = {
    name: "司马懿",
    type: "魏国"
  };
  const uG = {
    name: "郭嘉",
    type: "魏国"
  };
  const uA = {
    name: "关羽",
    type: "蜀国"
  };
  const uQ = {
    name: "周瑜",
    type: "吴国"
  };
  const ux = {
    name: "太史慈",
    type: "吴国"
  };
  const uk = {
    name: "吕布",
    type: "群雄"
  };
  const ug = {
    name: "华佗",
    type: "群雄"
  };
  const uL = {
    name: "甄姬",
    type: "魏国"
  };
  const ud = {
    name: "孙策",
    type: "吴国"
  };
  const F0 = {
    name: "贾诩",
    type: "群雄"
  };
  const F1 = {
    name: "曹仁",
    type: "魏国"
  };
  const F2 = {
    name: "姜维",
    type: "蜀国"
  };
  const F3 = {
    name: "孙坚",
    type: "吴国"
  };
  const F4 = {
    name: "公孙瓒",
    type: "群雄"
  };
  const F5 = {
    name: "典韦",
    type: "魏国"
  };
  const F6 = {
    name: "赵云",
    type: "蜀国"
  };
  const F7 = {
    name: "大乔",
    type: "吴国"
  };
  const F8 = {
    name: "张角",
    type: "群雄"
  };
  const F9 = {
    "1": [5, 6],
    "2": [6, 7],
    "3": [5, 6, 7]
  };
  const FP = {
    isLoading: false,
    defaultTeam: null,
    currentTeamHeroes: [],
    hasDefaultInfo: false,
    continuousBattles: {},
    stopOnDefeat: true
  };
  const FD = {
    "1": [],
    "2": [],
    "3": []
  };
  const Fv = [3, 6, 9, 12];
  const FB = 14;
  const Fz = {
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
    "3020": "聚宝盆",
    "14105": "付费钻头"
  };
  const FM = () => {
    const Ib = window.ROLE?.["items"] || TR.items;
    return Ib ? RZ(Ib, 14105) : 0;
  };
  const FS = {
    "1023": 500,
    "1001": 250,
    "1022": 2
  };
  const FT = [3012, 1016];
  const FR = () => {
    const Ib = new Date().getDay();
    return 0 === Ib || Ib >= 3 && Ib <= 6;
  };
  const FZ = Ib => Fv.includes(Ib);
  const FU = Ib => 2 === Ib.type ? "金砖" : Fz[Ib.itemId] || "物品" + Ib.itemId;
  const FN = Ib => {
    {
      const IK = Ib.map((Iy, IY) => ({
        idx: IY,
        reward: Iy,
        value: 2 === Iy.type ? Iy.value : (FS[Iy.itemId] || 0) * Iy.value,
        isHigh: 2 === Iy.type || FS[Iy.itemId] > 0,
        isSec: FT.includes(Iy.itemId)
      }));
      const IW = IK.filter(Iy => Iy.isHigh).sort((Iy, IY) => IY.value - Iy.value).slice(0, 5);
      const IC = () => IW.map(Iy => Iy.idx);
      if (IW.length < 5) {
        {
          const Iy = IK.filter(IY => IY.isSec && !IC().includes(IY.idx));
          IW.push(...Iy.slice(0, 5 - IW.length));
        }
      }
      if (IW.length < 5) {
        {
          const IE = IK.filter(IX => !IC().includes(IX.idx));
          IW.push(...IE.slice(0, 5 - IW.length));
        }
      }
      return IW;
    }
  };
  const Fu = async () => {
    if (!FR()) {
      TR.bossTower = null;
      TQ("今日非活动日（周三~周日）", "info");
      return null;
    }
    try {
      const If = await Rz("bosstower_getinfo", {}, "咸王宝库-获取信息");
      const IK = If?.["bossTower"] || If?.["body"]?.["bossTower"];
      const IW = {
        drillCount: IK?.["boxFightCnt"] ?? 0,
        towerId: IK?.["towerId"] ?? 1,
        boxCurHp: IK?.["boxCurHp"] ?? 0,
        boxTotalHp: IK?.["boxTotalHp"] ?? 0,
        levelInfoMap: IK?.["levelInfoMap"] ?? {},
        helpValue: IK?.["helpValue"] ?? 0,
        remainHelpCnt: IK?.["remainHelpCnt"] ?? 0
      };
      TR.bossTower = IW;
      return TR.bossTower;
    } catch (IC) {
      {
        TQ("获取咸王宝库信息失败", "error");
        return null;
      }
    }
  };
  const FF = () => {
    const Ib = TR.bossTower;
    if (!Ib) {
      return [];
    }
    const II = Ib.towerId;
    if (!FZ(II)) {
      return [];
    }
    if (Ib.boxCurHp > 0) {
      return [];
    }
    const If = String(II);
    const IK = Ib.levelInfoMap?.[If];
    return IK?.["rewardList"] || [];
  };
  const Fp = () => {
    const II = TR.bossTower || {};
    const If = FR();
    const IK = document.getElementById("qa-bosstower-status");
    IK && (If ? II.towerId >= FB && 0 === II.boxCurHp ? (IK.textContent = "已通关", IK.className = "club-status-badge success") : FF().length > 0 ? (IK.textContent = "待领奖", IK.className = "club-status-badge warning") : II.drillCount > 0 ? (IK.textContent = "可攻打", IK.className = "club-status-badge success") : (IK.textContent = "已完成", IK.className = "club-status-badge") : (IK.textContent = "非活动日", IK.className = "club-status-badge"));
    const IW = document.getElementById("qa-bosstower-floor");
    IW && (IW.textContent = "第 " + (II.towerId || 1) + " 层");
    const IC = document.getElementById("qa-bosstower-drill");
    IC && (IC.textContent = (II.drillCount || 0) + " / 10");
    const Iy = document.getElementById("qa-bosstower-paid-drill");
    Iy && (Iy.textContent = FM());
    const IY = document.getElementById("qa-bosstower-door");
    if (IY) {
      const Ig = II.towerId || 1;
      const IL = Ig >= FB && 0 === II.boxCurHp;
      const Id = FZ(Ig);
      const c0 = FF().length > 0;
      IL ? IY.textContent = "已通关" : Id && II.boxCurHp > 0 ? IY.textContent = "攻打中 (剩余: " + (Im = II.boxCurHp, Im >= 100000000 ? (Im / 100000000).toFixed(1) + "亿" : Im >= 10000 ? (Im / 10000).toFixed(1) + "万" : Im.toString()) + ")" : IY.textContent = Id && c0 ? "待领奖" : Id ? "未开启" : "需攻打Boss升层";
    }
    var Im;
    const IE = document.getElementById("qa-bosstower-rewards");
    if (IE) {
      const c1 = FF();
      if (c1.length > 0) {
        {
          const c2 = FN(c1).sort((c3, c4) => c4.value - c3.value);
          IE.innerHTML = "\n        <div class=\"helper-text\" style=\"margin-bottom:6px;\">将领取的奖励 (" + c2.length + "个)</div>\n        <div class=\"reward-list\">\n          " + c2.map(c3 => {
            return "\n            <span class=\"reward-item " + (c4 = c3.reward, 2 === c4.type || FS[c4.itemId] > 0 ? "valuable" : "") + "\">\n              " + FU(c3.reward) + "x" + c3.reward.value + "\n            </span>\n          ";
            var c4;
          }).join("") + "\n        </div>\n      ";
          IE.style.display = "block";
        }
      } else {
        IE.style.display = "none";
      }
    }
    const IX = document.getElementById("qa-bosstower-action-btn");
    if (IX) {
      const c4 = II.towerId || 1;
      const c5 = c4 >= FB && 0 === II.boxCurHp;
      const c6 = FF().length > 0;
      const c7 = FZ(c4);
      if (TR.bossTowerRunning) {
        IX.textContent = "执行中...";
        IX.disabled = true;
      } else {
        if (c5) {
          IX.textContent = "已通关";
          IX.disabled = true;
        } else {
          if (c6) {
            IX.textContent = "领取奖励";
            IX.disabled = false;
          } else {
            if (c7) {
              if (II.boxCurHp > 0) {
                IX.textContent = "继续攻打";
                IX.disabled = false;
              } else {
                if (II.drillCount > 0) {
                  IX.textContent = "攻打门";
                  IX.disabled = false;
                } else {
                  const c8 = document.getElementById("qa-bosstower-use-paid-drill")?.["checked"];
                  const c9 = FM();
                  c8 && c9 > 0 ? (IX.textContent = "攻打门(付费)", IX.disabled = false) : (IX.textContent = "已完成", IX.disabled = true);
                }
              }
            } else {
              IX.textContent = "攻打Boss";
              IX.disabled = false;
            }
          }
        }
      }
    }
    const IG = document.getElementById("qa-bosstower-content");
    const IA = document.getElementById("qa-bosstower-inactive");
    IG && IA && (If ? (IG.style.display = "block", IA.style.display = "none") : (IG.style.display = "none", IA.style.display = "block"));
    const IQ = "助战值: " + (II.helpValue ?? "--") + " | 剩余: " + (II.remainHelpCnt ?? "--");
    const Ix = document.getElementById("treasure-help-info");
    Ix && (Ix.textContent = IQ);
    const Ik = document.getElementById("coop-help-info");
    Ik && (Ik.textContent = IQ);
  };
  const FV = async Ib => {
    {
      const II = FN(Ib);
      const If = II.map(IW => FU(IW.reward) + "x" + IW.reward.value);
      II.length;
      If.join("、");
      const IK = [];
      for (const IW of II) try {
        const IC = {
          idx: IW.idx
        };
        await Rz("bosstower_claimreward", IC, "咸王宝库-领取奖励");
        IK.push(FU(IW.reward) + "x" + IW.reward.value);
        await R4(500);
      } catch (Iy) {}
      IK.length > 0 && TQ("领取奖励成功: " + IK.join("、"), "success");
      await Fu();
      Fp();
    }
  };
  const FJ = {
    101: uX,
    102: uG,
    103: uA,
    104: {
      name: "诸葛亮",
      type: "蜀国"
    },
    105: uQ,
    106: ux,
    107: uk,
    108: ug,
    109: uL,
    110: {
      name: "黄月英",
      type: "蜀国"
    },
    111: ud,
    112: F0,
    113: F1,
    114: F2,
    115: F3,
    116: F4,
    117: F5,
    118: F6,
    119: F7,
    120: F8
  };
  const FH = {
    1: {
      name: "初级商人",
      items: ["进阶石", "精铁", "木质宝箱", "青铜宝箱", "普通鱼竿", "挑战票", "咸神火把"]
    },
    2: {
      name: "中级商人",
      items: ["梦魇晶石", "进阶石", "精铁", "黄金宝箱", "黄金鱼竿", "招募令", "橙将碎片", "紫将碎片"]
    },
    3: {
      name: "高级商人",
      items: ["梦魇晶石", "铂金宝箱", "黄金鱼竿", "招募令", "红将碎片", "橙将碎片", "红将碎片", "普通鱼竿"]
    }
  };
  const Fh = F9;
  const FO = {
    battle: FP,
    buy: {
      merchantData: FD,
      levelId: 0,
      selectedItems: new Set(),
      isRunning: false
    }
  };
  const Fj = Ib => new Promise(II => Z7(II, 1000 * Ib, "dream-delay"));
  const Fq = () => {
    const Ib = new Date().getDay();
    return 0 === Ib || 1 === Ib || 3 === Ib || 4 === Ib;
  };
  const Fw = (Ib, II = "info") => {
    {
      const IK = document.getElementById("dream-log-container");
      if (!IK) {
        return;
      }
      const IW = {
        hour12: false
      };
      const IC = document.createElement("div");
      const Iy = new Date().toLocaleTimeString("zh-CN", IW);
      IC.textContent = "[" + Iy + "] " + Ib;
      let IY = "var(--text-primary)";
      "success" === II && (IY = "#34c759");
      "error" === II && (IY = "#ff3b30");
      "warning" === II && (IY = "#ff9500");
      "info" === II && (IY = "#007aff");
      IC.style.cssText = "margin:1px 0;padding:3px 5px;border-radius:3px;color:" + IY + ";font-size:11px;";
      IK.appendChild(IC);
      IK.scrollTop = IK.scrollHeight;
    }
  };
  const Fb = async () => {
    {
      if (FO.battle.isLoading) {
        return Fw("操作正在进行中", "warning");
      }
      if (!Fq()) {
        return Fw("❌ 当前不是梦境开放时间", "error");
      }
      FO.battle.isLoading = true;
      Fw("获取默认队伍信息...", "info");
      try {
        const If = await Rz("role_getroleinfo", {});
        const IK = If._rawData || If;
        if (IK?.["role"]?.["battleTeam"]) {
          FO.battle.defaultTeam = IK.role.battleTeam;
          FO.battle.currentTeamHeroes = [];
          for (let IW = 0; IW < 5; IW++) {
            const IC = IW.toString();
            if (FO.battle.defaultTeam[IC]) {
              const Iy = FO.battle.defaultTeam[IC];
              const IY = Iy.heroId || Iy;
              0 !== IY && FJ[IY] && FO.battle.currentTeamHeroes.push({
                id: IY,
                name: FJ[IY].name,
                type: FJ[IY].type,
                position: IW
              });
            }
          }
          FO.battle.hasDefaultInfo = true;
          Fw("✅ 默认队伍信息获取成功", "success");
          FW();
          return true;
        }
        Fw("❌ 无法提取队伍数据", "error");
        return false;
      } catch (Im) {
        Fw("❌ 获取默认队伍信息出错: " + Im.message, "error");
        return false;
      } finally {
        {
          FO.battle.isLoading = false;
        }
      }
    }
  };
  const FI = async () => {
    if (FO.battle.isLoading) {
      return Fw("操作正在进行中", "warning");
    }
    if (!Fq()) {
      return Fw("❌ 当前不是梦境开放时间", "error");
    }
    if (!FO.battle.hasDefaultInfo && !(await Fb())) {
      return Fw("请先获取默认队伍", "warning");
    }
    FO.battle.isLoading = true;
    Fw("选择梦境阵容...", "info");
    try {
      {
        const II = {};
        let If = false;
        for (let Iy = 0; Iy < 5; Iy++) {
          if (FO.battle.defaultTeam && FO.battle.defaultTeam[Iy.toString()]) {
            const IY = FO.battle.defaultTeam[Iy.toString()];
            const Im = IY.heroId || IY;
            II[Iy.toString()] = Im;
            0 !== Im && (If = true);
          } else {
            II[Iy.toString()] = 0;
          }
        }
        if (!If) {
          return Fw("⚠️ 默认队伍中没有英雄", "warning");
        }
        const IK = {
          battleTeam: II
        };
        const IW = await Rz("dungeon_selecthero", IK);
        const IC = IW._rawData || IW;
        if (!IC || 0 !== IC.code && undefined !== IC.code) {
          throw new Error("选择梦境阵容失败");
        }
        Fw("✅ 梦境阵容选择成功", "success");
        IC.reward && (Array.isArray(IC.reward) ? IC.reward : [IC.reward]).forEach(IE => {
          {
            3 === IE.type && Fw("🎁 获得物品: ID=" + IE.itemId + ", 数量=" + IE.value, "success");
          }
        });
      }
    } catch (IX) {
      Fw("❌ 选择梦境阵容出错: " + IX.message, "error");
    } finally {
      FO.battle.isLoading = false;
    }
  };
  const Fc = async Ib => {
    const If = FJ[Ib] ? FJ[Ib].name : "ID:" + Ib;
    Fw("⚔️ 开始战斗: " + If, "info");
    try {
      const IK = await Rz("fight_startdungeon", {
        heroId: parseInt(Ib)
      });
      const IW = IK._rawData || IK;
      if (!IW || 0 !== IW.code && undefined !== IW.code) {
        throw new Error("开始战斗失败");
      }
      if (IW.isWin) {
        Fw("🎉 " + If + " 战斗胜利!", "success");
      } else {
        if (Fw("💔 " + If + " 战斗失败", "warning"), FO.battle.stopOnDefeat) {
          Fw("⏹️ 检测到战斗失败，已停止连续战斗", "warning");
          return "stop";
        }
      }
      IW.reward && (Array.isArray(IW.reward) ? IW.reward : [IW.reward]).forEach(IC => {
        {
          3 === IC.type && Fw("🎁 " + If + " 战斗获得物品: ID=" + IC.itemId + ", 数量=" + IC.value, "success");
        }
      });
      return true;
    } catch (IC) {
      {
        if (IC.message.includes("2600080") || IC.message.includes("2600050")) {
          {
            const Im = IC.message.includes("2600080") ? "2600080" : "2600050";
            Fw("⏹️ " + If + " 连续战斗已停止 (错误码: " + Im + ")", "warning");
            return "stop";
          }
        }
        Fw("❌ " + If + " 开始战斗出错: " + IC.message, "error");
        return false;
      }
    }
  };
  const Ff = async Ib => {
    const If = FJ[Ib] ? FJ[Ib].name : "ID:" + Ib;
    FO.battle.continuousBattles[Ib] ? FK(Ib) : (FO.battle.continuousBattles[Ib] = true, FW(), Fw("🔄 " + If + " 开始连续战斗", "info"), (async () => {
      {
        for (; FO.battle.continuousBattles[Ib];) {
          {
            if ("stop" === (await Fc(Ib))) {
              {
                FK(Ib);
                break;
              }
            }
            FO.battle.continuousBattles[Ib] && (await Fj(0.1));
          }
        }
      }
    })());
  };
  const FK = Ib => {
    const II = FJ[Ib] ? FJ[Ib].name : "ID:" + Ib;
    FO.battle.continuousBattles[Ib] && (FO.battle.continuousBattles[Ib] = false, FW(), Fw("⏹️ " + II + " 连续战斗已停止", "info"));
  };
  const FW = () => {
    {
      const Ib = document.getElementById("dream-team-container");
      Ib && (Ib.innerHTML = "", 0 !== FO.battle.currentTeamHeroes.length ? (FO.battle.currentTeamHeroes.forEach(II => {
        {
          const IC = FO.battle.continuousBattles[II.id] || false;
          const Iy = document.createElement("div");
          Iy.style.cssText = "display:flex;align-items:center;justify-content:space-between;padding:8px;margin-bottom:6px;background:var(--card-bg);border-radius:6px;border-left:3px solid #8b5cf6;";
          Iy.innerHTML = "\n      <div style=\"flex:1;\">\n        <div style=\"font-size:12px;font-weight:bold;\">" + II.name + "</div>\n        <div style=\"font-size:10px;color:var(--text-secondary);\">" + II.type + " | 位置: " + (II.position + 1) + "</div>\n      </div>\n      <button class=\"btn btn-small " + (IC ? "btn-danger" : "btn-primary") + "\" data-hero=\"" + II.id + "\" style=\"padding:4px 8px;font-size:11px;\">" + (IC ? "停止" : "战斗") + "</button>\n    ";
          Ib.appendChild(Iy);
        }
      }), Ib.querySelectorAll("button[data-hero]").forEach(II => {
        II.addEventListener("click", () => Ff(II.getAttribute("data-hero")));
      })) : Ib.innerHTML = "<div class=\"helper-text\">暂无队伍信息</div>");
    }
  };
  const FC = async () => {
    if (!Fq()) {
      return Fw("当前不是梦境开放时间", "error");
    }
    try {
      Fw("刷新商店信息...", "info");
      FO.battle.hasDefaultInfo || (await Fb());
      await FI();
      const Ib = await Rz("role_getroleinfo", {});
      const II = Ib._rawData || Ib;
      if (!II) {
        throw new Error("获取角色信息失败");
      }
      const If = II.role?.["dungeon"]?.["merchant"];
      If && (FO.buy.merchantData = If);
      const IK = II.role?.["levelId"];
      undefined !== IK && (FO.buy.levelId = IK);
      Fm();
      Fw("✅ 商品列表获取完成", "success");
    } catch (IW) {
      Fw("❌ 获取商品列表失败: " + IW.message, "error");
    }
  };
  const Fy = (Ib, II) => Fh[Ib] && Fh[Ib].includes(II);
  const FY = (Ib, II) => {
    {
      const IW = FH[Ib];
      return IW && undefined !== IW.items[II] ? IW.items[II] : "未知商品(" + II + ")";
    }
  };
  const Fm = () => {
    {
      const If = document.getElementById("dream-merchant-container");
      if (If) {
        If.innerHTML = "";
        for (const IK in FH) {
          {
            const IC = FH[IK];
            const Iy = FO.buy.merchantData[IK] || [];
            const IY = document.createElement("div");
            IY.style.cssText = "background:var(--card-bg);border-radius:4px;padding:8px;";
            IY.innerHTML = "<div style=\"font-weight:bold;color:#8b5cf6;margin-bottom:6px;text-align:center;font-size:11px;\">" + IC.name + "</div>";
            0 === Iy.length ? IY.innerHTML += "<div style=\"color:var(--text-secondary);font-size:10px;text-align:center;padding:8px 0;\">无商品</div>" : Iy.forEach((Im, IE) => {
              const IX = IK + "-" + Im + "-" + IE;
              const IG = FO.buy.selectedItems.has(IX);
              const IA = Fy(parseInt(IK), Im);
              const IQ = document.createElement("div");
              IQ.style.cssText = "display:flex;align-items:center;padding:4px;margin:2px 0;border-radius:3px;cursor:pointer;font-size:10px;" + (IG ? "background:rgba(139,92,246,0.2);" : "");
              IQ.innerHTML = "\n          <input type=\"checkbox\" " + (IG ? "checked" : "") + " style=\"margin-right:4px;\">\n          <span style=\"color:" + (IA ? "#ffa500" : "var(--text-primary)") + ";flex:1;\">" + FY(parseInt(IK), Im) + "</span>\n        ";
              IQ.onclick = Ix => {
                if ("checkbox" !== Ix.target.type) {
                  const Ik = IQ.querySelector("input");
                  Ik.checked = !Ik.checked;
                }
                IQ.querySelector("input").checked ? FO.buy.selectedItems.add(IX) : FO.buy.selectedItems.delete(IX);
                FE();
                Fm();
              };
              IY.appendChild(IQ);
            });
            If.appendChild(IY);
          }
        }
      }
    }
  };
  const FE = () => {
    const Ib = document.getElementById("dream-selected-count");
    Ib && (Ib.textContent = FO.buy.selectedItems.size);
  };
  const FX = () => {
    {
      FO.buy.selectedItems.clear();
      for (const II in FO.buy.merchantData) FO.buy.merchantData[II].forEach((If, IK) => {
        Fy(parseInt(II), If) && FO.buy.selectedItems.add(II + "-" + If + "-" + IK);
      });
      FE();
      Fm();
      Fw("已选择 " + FO.buy.selectedItems.size + " 个金币商品", "success");
    }
  };
  const FG = async () => {
    if (0 === FO.buy.selectedItems.size) {
      return Fw("请先选择商品", "warning");
    }
    if (!Fq()) {
      return Fw("当前不是梦境开放时间", "error");
    }
    if (FO.buy.levelId < 4000) {
      return Fw("关卡数小于4000，无法购买金币商品", "error");
    }
    FO.buy.isRunning = true;
    const II = Array.from(FO.buy.selectedItems);
    II.sort((IW, IC) => {
      const [Iy,, IY] = IW.split("-").map(Number);
      const [Im,, IE] = IC.split("-").map(Number);
      return Iy !== Im ? Im - Iy : IE - IY;
    });
    let If = 0;
    let IK = 0;
    Fw("开始批量购买 " + II.length + " 件商品...", "info");
    for (const IW of II) {
      const [IC, Iy, IY] = IW.split("-").map(Number);
      try {
        {
          const IE = {
            id: IC,
            index: Iy,
            pos: IY
          };
          const IX = await Rz("dungeon_buymerchant", IE);
          const IG = IX._rawData || IX;
          if (0 !== IG?.["code"] && undefined !== IG?.["code"]) {
            throw new Error("购买失败，错误码: " + IG?.["code"]);
          }
          FO.buy.selectedItems.delete(IW);
          If++;
          Fw("成功购买: " + FH[IC].name + " - " + FY(IC, Iy), "success");
        }
      } catch (IA) {
        {
          IK++;
          Fw("购买失败: " + FY(IC, Iy) + " - " + IA.message, "error");
        }
      }
      await Fj(0.5);
    }
    await FC();
    Fw("批量购买完成: 成功 " + If + ", 失败 " + IK, 0 === IK ? "success" : "warning");
    FO.buy.isRunning = false;
  };
  const FA = async () => {
    if (!Fq()) {
      return Fw("当前不是梦境开放时间", "error");
    }
    if (FO.buy.levelId < 4000) {
      return Fw("关卡数小于4000，无法购买金币商品", "error");
    }
    FO.buy.isRunning = true;
    let If = 0;
    let IK = 0;
    Fw("开始一键购买所有金币商品...", "info");
    for (const IW in FO.buy.merchantData) {
      const IC = FO.buy.merchantData[IW];
      const Iy = parseInt(IW);
      for (let IY = IC.length - 1; IY >= 0; IY--) {
        const Im = IC[IY];
        if (Fy(Iy, Im)) {
          {
            try {
              {
                const IG = {
                  id: Iy,
                  index: Im,
                  pos: IY
                };
                const IA = await Rz("dungeon_buymerchant", IG);
                const IQ = IA._rawData || IA;
                if (0 !== IQ?.["code"] && undefined !== IQ?.["code"]) {
                  throw new Error("购买失败，错误码: " + IQ?.["code"]);
                }
                If++;
                Fw("成功购买: " + FH[Iy].name + " - " + FY(Iy, Im), "success");
              }
            } catch (Ix) {
              IK++;
              Fw("购买失败: " + FY(Iy, Im) + " - " + Ix.message, "error");
            }
            await Fj(0.5);
          }
        }
      }
    }
    await FC();
    Fw("一键购买完成: 成功 " + If + ", 失败 " + IK, 0 === IK ? "success" : "warning");
    FO.buy.isRunning = false;
  };
  const FQ = {
    name: "",
    value: 2
  };
  const Fx = {
    name: "《三国演义》中，「温酒斩华雄」的是张飞？",
    value: 2
  };
  const Fk = {
    name: "「官渡之战」中袁绍获胜？",
    value: 2
  };
  const Fg = {
    name: "「羞花」是貂蝉的代称？",
    value: 2
  };
  const FL = {
    name: "「总角之好」用于形容周瑜与孙策的交情？",
    value: 1
  };
  const Fd = {
    name: "蔡文姬擅长音律？",
    value: 1
  };
  const p0 = {
    name: "曹仁被称为「天人将军」？",
    value: 1
  };
  const p1 = {
    name: "成语「水淹七军」与庞统有关？",
    value: 2
  };
  const p2 = {
    name: "典故「英雄难过美人关」出自「吕布与貂蝉」？",
    value: 1
  };
  const p3 = {
    name: "董卓曾收吕布为义子？",
    value: 1
  };
  const p4 = {
    name: "董卓为曹操帐下大将？",
    value: 2
  };
  const p5 = {
    name: "华雄效力于诸葛亮？",
    value: 2
  };
  const p6 = {
    name: "民间，张飞被尊为「屠宰业祖师」？",
    value: 1
  };
  const p7 = {
    name: "明教以张角为教祖？",
    value: 1
  };
  const p8 = {
    name: "司马懿曾称帝？",
    value: 2
  };
  const p9 = {
    name: "太史慈终效力于刘备？",
    value: 2
  };
  const pP = {
    name: "赵云与关羽、张飞「桃园结义」？",
    value: 2
  };
  const pD = {
    name: "甄宓为魏文帝曹丕妻子？",
    value: 1
  };
  const pv = {
    name: "《三国演义》中，「过五关斩六将」的武将是关羽？",
    value: 1
  };
  const pB = {
    name: "《三国演义》中，「三气周瑜」的是司马懿？",
    value: 2
  };
  const pz = {
    name: "《三国演义》中，「桃园三结义」中的桃园是张飞的住所？",
    value: 1
  };
  const pM = {
    name: "《三国演义》中，「万事俱备，只欠东风」说的是赤壁之战？",
    value: 1
  };
  const pS = {
    name: "《三国演义》中，被称为「奸雄」的是司马懿？",
    value: 2
  };
  const pT = {
    name: "《三国演义》中，称号「卧龙」的是诸葛亮？",
    value: 1
  };
  const pR = {
    name: "《三国演义》中，单刀赴会的是赵云？",
    value: 2
  };
  const pZ = {
    name: "《三国演义》中，发明「木牛流马」的是诸葛亮？",
    value: 1
  };
  const pU = {
    name: "《三国演义》中，祝融夫人被马超活捉？",
    value: 2
  };
  const pN = {
    name: "黄月英是诸葛亮的妻子？",
    value: 1
  };
  const pu = {
    name: "庞统和周瑜并称为「卧龙凤雏」？",
    value: 2
  };
  const pF = {
    name: "三国时期，董卓曾想和孙坚结成亲家？",
    value: 1
  };
  const pp = {
    name: "三国时期，孙策建立了吴国？",
    value: 1
  };
  const pV = {
    name: "《三国演义》中，「虽未谱金兰，情谊比桃园」说的是赵云？",
    value: 1
  };
  const pJ = {
    name: "《三国演义》中，刘备的专属武器名为「青龙偃月刀」？",
    value: 2
  };
  const pH = {
    name: "《三国演义》中，宣称自己会「梦中杀人」的是曹操？",
    value: 1
  };
  const ph = {
    name: "汉献帝自愿禅让帝位给丞相曹丕？",
    value: 2
  };
  const pO = {
    name: "华佗有自身编撰的医书流传下来。",
    value: 2
  };
  const pj = {
    name: "刘备曾自称「汉中王」？",
    value: 1
  };
  const pq = {
    name: "刘备少年时以织席贩履为生？",
    value: 1
  };
  const pw = {
    name: "荀或与同为曹操麾下的荀攸是叔侄关系。",
    value: 1
  };
  const pb = {
    name: "在魏蜀吴三国中，吴国是最晚建立的吗？",
    value: 1
  };
  const pI = {
    name: "周泰是受到孙权的招揽加入了吴国。",
    value: 2
  };
  const pf = {
    name: "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取？",
    value: 1
  };
  const pK = {
    name: "《咸鱼之王》里「青铜宝箱」每次开启可以获取到10宝箱积分？",
    value: 1
  };
  const pW = {
    name: "《咸鱼之王》中升级俱乐部「高级科技」时需要先点满对应职业的「基础科技」。",
    value: 1
  };
  const pC = {
    name: "《咸鱼之王》里咸将诸葛亮的主动技能「星落」有控制效果。",
    value: 2
  };
  const py = {
    name: "《咸鱼之王》里咸将姜维可以同时攻击全部敌人。",
    value: 2
  };
  const pY = {
    name: "《咸鱼之王》里鱼灵「惊涛」无法将受到的持续伤害效果分5回合扣除。",
    value: 1
  };
  const pm = {
    name: "《咸鱼之王》里「玩具」每周有一次免费无损转换的机会。",
    value: 1
  };
  const pE = {
    name: "《咸鱼之王》重复攻打击杀过的「俱乐部BOSS」 ，无法再次获得排名奖励。",
    value: 1
  };
  const pX = {
    name: "《咸鱼之王》「普通鱼竿」免费捕获的刷新时间为6个小时。",
    value: 2
  };
  const pG = {
    name: "「孔融让梨」的故事讲的是孔融小小年纪便有谦让的美德？",
    value: 1
  };
  const pA = {
    name: "成语「初出茅庐」出自《三国演义》？",
    value: 1
  };
  const pQ = {
    name: "《三国演义》中，「虎女焉能配犬子」一句中，虎女指的是关羽之女。",
    value: 1
  };
  const px = {
    name: "四大美女中「落雁」说的是被匈奴所掳的蔡文姬。",
    value: 2
  };
  const pk = {
    name: "「大丈夫何患无妻」一典故出自《三国演义》中的赵云之口？",
    value: 1
  };
  const pg = {
    name: "《咸鱼之王》中，鱼灵「黄金锦鲤」可在「神秘商店」中消耗珍珠兑换？",
    value: 1
  };
  const pL = {
    name: "《咸鱼之王》中，「每日任务」中日活跃积分达到100的奖励为招募令？",
    value: 1
  };
  const pd = {
    name: "《咸鱼之王》中，「灯神挑战」不同的阵营挑战内，只能上阵对应阵营的减将。",
    value: 1
  };
  const V0 = {
    name: "《咸鱼之王》中，「招募」可以有概率获得红色武将。",
    value: 1
  };
  const V1 = {
    name: "《咸鱼之王》中，蔡文姬是红色武将。",
    value: 2
  };
  const V2 = {
    name: "《三国演义》中，「怒打督邮」的是张飞。",
    value: 1
  };
  const V3 = {
    name: "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿。",
    value: 1
  };
  const V4 = {
    name: "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一0点重置。",
    value: 1
  };
  const V5 = {
    name: "《咸鱼之王》中，「黑市」每日8点自动刷新商品？",
    value: 2
  };
  const V6 = {
    name: "《咸鱼之王》中，「玩具」需要花费「扳手」进行激活？",
    value: 1
  };
  const V7 = {
    name: "《咸鱼之王》中，进阶石可以通过参与「咸将塔」玩法获取。",
    value: 1
  };
  const V8 = {
    name: "《咸鱼之王》中，「军团币」可以用于升级「俱乐部科技」？",
    value: 1
  };
  const V9 = {
    name: "《咸鱼之王》中，装备最多可以开到5个淬炼孔位？",
    value: 1
  };
  const VP = {
    name: "《咸鱼之王》中，「青铜火把」会为主线战斗中上阵的咸将增加5%攻击？",
    value: 1
  };
  const VD = {
    name: "《咸鱼之王》中，道具「金砖」可以用于在「黑市」中购买物品？",
    value: 1
  };
  const Vv = {
    name: "《咸鱼之王》俱乐部中，每日最多可以攻打4次「俱乐部BOSS」。",
    value: 1
  };
  const VB = {
    name: "刘表是刘备的次子？",
    value: 2
  };
  const Vz = {
    name: "《咸鱼之王》中，月赛助威截止后，未使用的「拍手器」会被回收？",
    value: 1
  };
  const VM = {
    name: "《咸鱼之王》中，「彩玉」可以花费「金币」进行兑换？",
    value: 2
  };
  const VS = {
    name: "《咸鱼之王》中，在「助威商店」中可以花费「助威币」兑换到「万能红将碎片」？",
    value: 2
  };
  const VT = {
    name: "《咸鱼之王》中，月度活动「咸神争霸」达标奖励包含道具「珍珠」？",
    value: 2
  };
  const VR = {
    name: "《咸鱼之王》中，咸将「蔡文姬」属于魏国阵营？",
    value: 1
  };
  const VZ = {
    name: "《咸鱼之王》中，「咸王梦境」玩法在通关1000关后开放？",
    value: 1
  };
  const VU = {
    name: "《咸鱼之王》中，可以通过「图鉴」查看咸将满级后的技能效果？",
    value: 1
  };
  const VN = {
    name: "《咸鱼之王》中，攻打「每日咸王考验」内的「癫癫蛙」BOSS可获得招募令。",
    value: 1
  };
  const Vu = {
    name: "《咸鱼之王》中，激活「周卡」，挂机金币收益增加10%。",
    value: 1
  };
  const VF = {
    name: "《咸鱼之王》中，挑战「咸将塔」消耗的小鱼干在通过当前塔后会获得10个。",
    value: 1
  };
  const Vp = {
    name: "周星弛身兼《喜剧之王》导演主演的双重身份。",
    value: 1
  };
  const VV = {
    name: "《喜剧之王》电影中，尹天仇在片场遇到了卧底警员。",
    value: 1
  };
  const VJ = {
    name: "《喜剧之王》电影中，柳飘飘是尹天仇街坊剧场的唯一观众。",
    value: 1
  };
  const VH = {
    name: "《喜剧之王》电影中，娟姐没有考核过尹天仇的演技。",
    value: 2
  };
  const Vh = {
    name: "《喜剧之王》电影中，尹天仇在街坊福利会里开设的是表演训练班。",
    value: 1
  };
  const VO = {
    name: "《喜剧之王》电影中，尹天仇的盒饭都被狗吃了。",
    value: 2
  };
  const Vj = {
    name: "《喜剧之王》电影中，尹天仇的真实身份是警察。",
    value: 2
  };
  const Vq = {
    name: "《喜剧之王》电影中，柳飘飘不会抽烟。",
    value: 2
  };
  const Vw = {
    name: "《喜剧之王》电影中，尹天仇喜欢霞姨。",
    value: 2
  };
  const Vb = {
    name: "《喜剧之王》电影中，柳飘飘的初恋是尹天仇。",
    value: 2
  };
  const VI = {
    name: "《喜剧之王》电影中，龙少爷打了柳飘飘。",
    value: 1
  };
  const Vc = {
    name: "《喜剧之王》电影中，霞姨很看重尹天仇。",
    value: 2
  };
  const Vf = {
    name: "《喜剧之王》电影中，尹天仇跑龙套饰演过尸体",
    value: 1
  };
  const VK = {
    name: "《喜剧之王》电影中，街坊福利会可以打乒乓球。",
    value: 1
  };
  const VW = {
    name: "《演员的自我修养》是尹天仇最喜欢的一本书.",
    value: 1
  };
  const VC = {
    name: "《喜剧之王》电影中，柳飘飘爱上了龙少爷。",
    value: 2
  };
  const Vy = {
    name: "《长江7号》电影中，7仔最终被周铁的儿子周小狄收养」",
    value: 2
  };
  const VY = {
    name: "《长江7号》电影中，周铁在建筑工地意外死亡，7仔施展神奇力量救了他。",
    value: 1
  };
  const Vm = {
    name: "《长江7号》电影中，7仔的能力之一是可以变身成其他物品或生物。",
    value: 2
  };
  const VE = {
    name: "《长江7号》电影中，周小狄在学校被同学欺负是因为他们家境贫寒。",
    value: 1
  };
  const VX = {
    name: "《长江7号》电影中，周星驰饰演的角色经常捡拾物品来维持生计。",
    value: 1
  };
  const VG = {
    name: "《长江7号》电影中，7仔最终成为了周小狄一家的宠物。",
    value: 2
  };
  const VA = {
    name: "《长江7号》电影中，周小狄在学校里曾经因为7仔成为了同学们的焦点。",
    value: 1
  };
  const VQ = {
    name: "《长江7号》电影中，周星驰饰演的角色故意把7仔丢掉，以保护家人免受危险。",
    value: 2
  };
  const Vx = {
    name: "《长江7号》电影中，周小狄曾经因为7仔而卷入一场事故。",
    value: 1
  };
  const Vk = {
    name: "《长江7号》电影中，周小狄在学校里遇到了一位善良的女教师，她对他很照顾。",
    value: 1
  };
  const Vg = {
    name: "《长江7号》电影中，7仔在周小狄身边变身成一只大熊猫。",
    value: 2
  };
  const VL = {
    name: "《长江7号》电影中，周小狄的学校是一所普通的学校。",
    value: 2
  };
  const Vd = {
    name: "《长江7号》电影中，7仔最终变成了一只小狗。",
    value: 2
  };
  const n0 = {
    name: "《长江7号》电影中，7仔为了保护周小狄，决定将其带去外星球。",
    value: 2
  };
  const n1 = {
    name: "《长江7号》电影中，7仔柔韧性很好。",
    value: 1
  };
  const n2 = {
    name: "《长江7号》电影中，周小狄的成绩非常好。",
    value: 2
  };
  const n3 = {
    name: "《食神》电影中，皇帝炒饭得到了食神周星驰的肯定，拿到满分。",
    value: 2
  };
  const n4 = {
    name: "《食神》电影中，莱品[禾花雀]因为厨师太丑得了零分。",
    value: 1
  };
  const n5 = {
    name: "《食神》电影中，撒尿牛丸被用来打乒乓球。",
    value: 1
  };
  const n6 = {
    name: "《食神》电影中，火鸡姐为食神史提芬周档了一刀。",
    value: 1
  };
  const n7 = {
    name: "《食神》电影中，撒尿牛丸的第一位顾客是唐牛。",
    value: 2
  };
  const n8 = {
    name: "《食神》电影中，火鸡姐非常喜欢史提芬周。",
    value: 1
  };
  const n9 = {
    name: "《食神》电影中，食神史提芬周被徒弟唐牛当众击败。",
    value: 1
  };
  const nP = {
    name: "《食神》电影中，火鸡姐最终去了少林寺。",
    value: 2
  };
  const nD = {
    name: "《食神》电影中，唐牛曾经是少林寺学徒。",
    value: 1
  };
  const nv = {
    name: "《食神》电影中，史提芬周是全港知名的食神，在饮食界首屈一指。",
    value: 1
  };
  const nB = {
    name: "《食神》电影中，使用隔夜米饭来炒米饭是最基本的常识。",
    value: 1
  };
  const nz = {
    name: "《食神》电影中，在《香港至尊名厨大赛》中史提芬将四大名厨的菜通通打成0分。",
    value: 1
  };
  const nM = {
    name: "《食神》电影中，只要用心，人人都可以是食神。",
    value: 1
  };
  var nS = Object.freeze({
    __proto__: null,
    batchBuySelected: FG,
    buyAllGoldItems: FA,
    getDreamDefaultTeamInfo: Fb,
    initDreamModule: () => {
      const Ib = document.getElementById("qa-dream-status");
      const II = document.getElementById("qa-dream-inactive");
      const If = document.getElementById("qa-dream-content");
      const IK = (() => {
        {
          const Iy = new Date().getDay();
          return 0 === Iy || 1 === Iy || 3 === Iy || 4 === Iy;
        }
      })();
      Ib && (Ib.textContent = IK ? "开放中" : "未开放", Ib.className = "club-status-badge " + (IK ? "success" : "warning"));
      II && (II.style.display = IK ? "none" : "block");
      If && (If.style.display = IK ? "block" : "none");
      const IW = document.getElementById("dream-stop-defeat");
      IW && (FO.battle.stopOnDefeat = IW.checked, IW.onchange = IC => {
        FO.battle.stopOnDefeat = IC.target.checked;
        Fw("设置更新: 失败自动停止 = " + (IC.target.checked ? "开启" : "关闭"), "info");
      });
    },
    refreshDreamMerchantList: FC,
    selectAllGoldItems: FX,
    selectDreamTeam: FI,
    startDreamContinuousBattle: Ff
  });
  var nT = [FQ, {
    name: "《三国演义》中，「大意失街亭」的是马谩？",
    value: 1
  }, {
    name: "《三国演义》中，「挥泪斩马谩」的是孙权？",
    value: 2
  }, {
    name: "《三国演义》中，「火烧博望坡」的是庞统？",
    value: 2
  }, {
    name: "《三国演义》中，「火烧藤甲兵」的是徐庶？",
    value: 2
  }, {
    name: "《三国演义》中，「千里走单骑」的是赵云？",
    value: 2
  }, Fx, {
    name: "《三国演义》中，关羽在长坂坡「七进七出」？",
    value: 2
  }, {
    name: "《三国演义》中，刘备三顾茅庐请诸葛亮出山？",
    value: 1
  }, {
    name: "《三国演义》中，孙权与曹操「煮酒论英雄」？",
    value: 2
  }, {
    name: "《三国演义》中，提出「隆中对」的是诸葛亮？",
    value: 1
  }, {
    name: "《三国演义》中，夏侯杰在当阳桥被张飞吓死？",
    value: 1
  }, {
    name: "《三国演义》中，张飞在当阳桥厉吼吓退曹军？",
    value: 1
  }, {
    name: "《三国演义》中，赵云参与了「三英战吕布」？",
    value: 2
  }, {
    name: "《三国演义》中，赵云参与了「桃园三结义」？",
    value: 2
  }, {
    name: "《三国演义》中唯一正式上过战场的女子是祝融夫人？",
    value: 1
  }, {
    name: "《三国志》中，华雄被孙坚枭首？",
    value: 1
  }, {
    name: "《三国志》中记载，「草船借箭」的是诸葛亮？",
    value: 2
  }, {
    name: "「闭月」是貂蝉的代称？",
    value: 1
  }, {
    name: "「常胜将军」指代赵云？",
    value: 1
  }, {
    name: "「赤壁之战」中是黄盖建策火攻？",
    value: 1
  }, Fk, {
    name: "「郭嘉不死卧龙不出」出自三国典故？",
    value: 1
  }, {
    name: "「曲有误，周郎顾」表达了周瑜不懂音律？",
    value: 2
  }, {
    name: "「三姓家奴」是指飞将吕布？",
    value: 1
  }, {
    name: "「士别三日」形容吕蒙笃志力学？",
    value: 1
  }, {
    name: "「吴下阿蒙」即指吕蒙？",
    value: 1
  }, {
    name: "「小菜一碟」指的是张飞吃豆芽？",
    value: 1
  }, Fg, {
    name: "「荀令留香」是指荀或厨艺高超？",
    value: 2
  }, {
    name: "「与曹操交手而不死，能败诸葛亮而自活」是指司马懿？",
    value: 1
  }, {
    name: "「张辽止啼」指张辽和善，善于哄孩子？",
    value: 2
  }, FL, {
    name: "拜将封侯的董卓为东汉忠臣？",
    value: 2
  }, {
    name: "宝马良驹赤兔的主人不包括吕布？",
    value: 2
  }, Fd, p0, {
    name: "曹仁是曹操的儿子？",
    value: 2
  }, p1, {
    name: "大乔为孙策之妻？",
    value: 1
  }, {
    name: "典故「胆大如斗」与姜维有关？",
    value: 1
  }, {
    name: "典故「舌战群儒」与周瑜有关？",
    value: 2
  }, {
    name: "典故「杏林圣手」出自华佗？",
    value: 2
  }, p2, {
    name: "典韦力大过人，被称为「古之恶来」？",
    value: 1
  }, {
    name: "典韦善用的武器包括「大双戟」？",
    value: 1
  }, {
    name: "典韦是腹隐机谋的知名谋士？",
    value: 2
  }, {
    name: "貂蝉的「美人计」用于离间董卓和吕布？",
    value: 1
  }, {
    name: "东汉末年国色美女小乔为周瑜之妻？",
    value: 1
  }, p3, p4, {
    name: "甘宁被称为江表之虎臣？",
    value: 1
  }, {
    name: "甘宁为魏国名将？",
    value: 2
  }, {
    name: "甘宁因「少有气力，好游侠」，被称为「锦帆贼」？",
    value: 1
  }, {
    name: "公孙瓒别名「白马将军」？",
    value: 1
  }, {
    name: "公孙瓒击败袁绍，致袁绍引火自焚？",
    value: 2
  }, {
    name: "公孙瓒因数次「大破黄巾」而威名大震？",
    value: 1
  }, {
    name: "郭嘉被史籍称为「才策谋略，世之奇士」？",
    value: 1
  }, {
    name: "郭嘉为孙策帐下谋士？",
    value: 2
  }, {
    name: "合肥之战中，张辽以少胜多，威震江东？",
    value: 1
  }, {
    name: "华佗被称为「外科鼻祖」？",
    value: 1
  }, {
    name: "华佗因遭曹操怀疑，下狱被铂问致死？",
    value: 1
  }, {
    name: "华佗与董奉、张仲景并称为「建安三神医」？",
    value: 1
  }, {
    name: "华雄是奇谋百出的军事战略家？",
    value: 2
  }, p5, {
    name: "贾诩曾任魏国最高军事长官「太尉」？",
    value: 1
  }, {
    name: "贾诩为曹操帐下的主要谋士之一？",
    value: 1
  }, {
    name: "贾诩献离间计成功瓦解马超、韩遂？",
    value: 1
  }, {
    name: "刘备是三国时期蜀汉「五虎上将」之一？",
    value: 2
  }, {
    name: "鲁肃为谋士，效力于蜀国？",
    value: 2
  }, p6, {
    name: "民间游戏「华容道」是以三国为背景的游戏？",
    value: 1
  }, p7, {
    name: "三国时期，五虎上将之首是黄忠？",
    value: 2
  }, {
    name: "三国时期曹操一生未称帝？",
    value: 1
  }, {
    name: "三国时期的吴国由曹操建立？",
    value: 2
  }, p8, {
    name: "司马懿为曹操谋臣？",
    value: 1
  }, {
    name: "算无遗策的贾诩为吴国谋士？",
    value: 2
  }, {
    name: "孙策曾「一统江东」？",
    value: 1
  }, {
    name: "孙策死于「赤壁之战」？",
    value: 2
  }, {
    name: "太史慈曾为救孔融单骑突围向刘备求援？",
    value: 1
  }, {
    name: "太史慈弦不虚发，被称为「神射手」？",
    value: 1
  }, p9, {
    name: "威振天下的董卓被吕布诛杀？",
    value: 1
  }, {
    name: "夏侯渊天生独眼？",
    value: 2
  }, {
    name: "夏侯渊与夏侯惇是父子？",
    value: 2
  }, {
    name: "徐晃曾「击破关羽，解樊城之围」？",
    value: 1
  }, {
    name: "荀或被称为「王佐之才」？",
    value: 1
  }, {
    name: "颜良被关羽斩杀？",
    value: 1
  }, {
    name: "颜良被孔融评价「勇冠三军」？",
    value: 1
  }, {
    name: "颜良在官渡之战中战胜曹操大军？",
    value: 2
  }, {
    name: "以胆气著称的吕蒙效力于刘备？",
    value: 2
  }, {
    name: "袁绍战胜公孙瓒，统一河北？",
    value: 1
  }, {
    name: "张飞与关羽被并称为「万人敌」？",
    value: 1
  }, {
    name: "张角为黄巾起义首领之一？",
    value: 1
  }, {
    name: "张角因战胜黄巾军而声名大噪？",
    value: 2
  }, pP, {
    name: "赵云与关羽、张飞并称「燕南三士」？",
    value: 1
  }, {
    name: "著名的「官渡之战」由袁绍发起？",
    value: 1
  }, {
    name: "甄宓曾为袁绍之妻？",
    value: 2
  }, pD, {
    name: "周瑜逝世后，鲁肃代周瑜职务？",
    value: 1
  }, pv, {
    name: "《三国演义》中，「火烧藤甲兵」的是诸葛亮？",
    value: 1
  }, pB, {
    name: "《三国演义》中，「三英战吕布」发生在虎牢关？",
    value: 1
  }, {
    name: "《三国演义》中，「身在曹营心在汉」的是刘备？",
    value: 2
  }, pz, pM, {
    name: "《三国演义》中，败走麦城的是张飞？",
    value: 2
  }, {
    name: "《三国演义》中，被称为「大耳贼」的是曹操？",
    value: 2
  }, pS, {
    name: "《三国演义》中，被称为「诸葛村夫」的是诸葛亮？",
    value: 1
  }, {
    name: "《三国演义》中，被追杀时「割须断袍」的是马超？",
    value: 2
  }, {
    name: "《三国演义》中，曹操赤壁兵败后是曹仁率军接应的？",
    value: 1
  }, pT, {
    name: "《三国演义》中，持方天画戟的武将是吕布？",
    value: 1
  }, {
    name: "《三国演义》中，持青龙偃月刀的武将是关羽？",
    value: 1
  }, pR, pZ, {
    name: "《三国演义》中，关羽曾一边「刮骨疗毒」一边与将领饮酒？",
    value: 2
  }, {
    name: "《三国演义》中，火烧连营大败蜀军的将领是诸葛亮？",
    value: 2
  }, {
    name: "《三国演义》中，吕布称号「关内侯」？",
    value: 2
  }, {
    name: "《三国演义》中，庞统的称号是「幼麟」？",
    value: 2
  }, {
    name: "《三国演义》中，七擒孟获的是司马懿？",
    value: 2
  }, {
    name: "《三国演义》中，为关羽「刮骨疗毒」的医生是张仲景？",
    value: 2
  }, {
    name: "《三国演义》中，要为曹操做开颅手术的是华佗？",
    value: 1
  }, {
    name: "《三国演义》中，赵云的妻子是马超的姝妹马云禄？",
    value: 2
  }, {
    name: "《三国演义》中，赵云在「赤壁之战」中救出阿斗？",
    value: 2
  }, {
    name: "《三国演义》中，甄姬曾为袁绍之子袁熙的夫人？",
    value: 1
  }, {
    name: "《三国演义》中，中诸葛亮「空城计」的是曹操？",
    value: 2
  }, {
    name: "《三国演义》中，诸葛亮的「空城计」是为了阻挡曹操大军？",
    value: 2
  }, pU, {
    name: "《三国演义》中，祝融夫人的丈夫为诸葛亮？",
    value: 2
  }, {
    name: "《三国演义》中，祝融夫人擅长的暗器是飞针？",
    value: 2
  }, {
    name: "「铜雀春深锁二乔」指的是火乔和小乔吗？",
    value: 1
  }, {
    name: "「文姬归汉」指的是蔡文姬从匈奴回到中原吗？",
    value: 1
  }, {
    name: "白马义从是赵云的部下？",
    value: 2
  }, {
    name: "蔡文姬是被曹操赎回中原的吗？",
    value: 1
  }, pN, pu, {
    name: "庞统是刘备的谋士吗？",
    value: 1
  }, pF, {
    name: "三国时期，公孙瓒和刘备是师兄弟关系？",
    value: 1
  }, {
    name: "三国时期，姜维始终都是蜀国的将领？",
    value: 2
  }, {
    name: "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？",
    value: 2
  }, {
    name: "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？",
    value: 2
  }, {
    name: "三国时期，十八路诸侯讨董后，孙坚率军攻入洛阳？",
    value: 1
  }, {
    name: "三国时期，司马懿经常练习「五禽戏」？",
    value: 1
  }, pp, {
    name: "三国时期，孙坚中箭而亡？",
    value: 1
  }, {
    name: "三国时期，赵云无一败绩？",
    value: 2
  }, {
    name: "《出师表》是诸葛亮写给刘禅的吗？",
    value: 1
  }, {
    name: "《三国演义》中，「阿斗」是赵云的儿子？",
    value: 2
  }, {
    name: "《三国演义》中，「宁教我负天下人，休教天下人负我」出自刘备之口？",
    value: 2
  }, pV, {
    name: "《三国演义》中，「五虎上将」里没有魏延？",
    value: 1
  }, {
    name: "《三国演义》中，「一个愿打一个愿挨」形容的是周瑜与黄忠？",
    value: 2
  }, {
    name: "《三国演义》中，被称为「智绝」的是刘备？",
    value: 2
  }, {
    name: "《三国演义》中，曹操让士兵们想象柠檬来止渴？",
    value: 2
  }, {
    name: "《三国演义》中，关羽，字「云长」？",
    value: 1
  }, {
    name: "《三国演义》中，关羽的坐骑是「绝影」？",
    value: 2
  }, {
    name: "《三国演义》中，关羽为了离开曹操的麾下，达成了「过五关，斩六将」的壮举。",
    value: 1
  }, {
    name: "《三国演义》中，郭嘉遗计定辽东。",
    value: 1
  }, {
    name: "《三国演义》中，黄忠在定军山击杀了曹魏将领夏侯渊。",
    value: 1
  }, {
    name: "《三国演义》中，刘备，字「孟德」？",
    value: 2
  }, pJ, {
    name: "《三国演义》中，马超有「花马超」的称呼。",
    value: 2
  }, {
    name: "《三国演义》中，呢称为「阿斗」的是刘备？",
    value: 2
  }, {
    name: "《三国演义》中，司马昭是司马懿的父亲？",
    value: 2
  }, {
    name: "《三国演义》中，死于「落凤坡」的名将是庞统？",
    value: 1
  }, pH, {
    name: "《三国演义》中，张飞的专属武器名为「丈八蛇矛」？",
    value: 1
  }, {
    name: "《三国演义》中，赵云曾孤胆救黄忠。",
    value: 1
  }, {
    name: "《三国演义》中，诸葛亮，字「孔明」？",
    value: 1
  }, {
    name: "《三国演义》中，诸葛亮发明了「诸葛连弩」？",
    value: 1
  }, {
    name: "《三国演义》中，诸葛亮挥泪斩了马超？",
    value: 2
  }, {
    name: "「白帝城托孤」指的是刘备将自己的儿子托付给赵云？",
    value: 2
  }, {
    name: "「单刀赴会」是诸葛亮邀请关羽前往的。",
    value: 2
  }, {
    name: "「扶不起的阿斗」指的是刘禅？",
    value: 1
  }, {
    name: "「割须弃袍」发生于曹操和马超交战时。",
    value: 2
  }, {
    name: "「黄巾起义」被看做三国时代的开端吗？",
    value: 1
  }, {
    name: "「孔明灯」在古代曾用于传递军情？",
    value: 1
  }, {
    name: "「乐不思蜀」指的是刘禅？",
    value: 1
  }, {
    name: "「衣带诏」事发后曹操派军讨伐刘备？",
    value: 1
  }, {
    name: "曹操被评价为「治世之能臣，乱世之奸雄」。",
    value: 1
  }, {
    name: "典故妄自菲薄出自诸葛亮的《前出师表》？",
    value: 1
  }, {
    name: "郭嘉被曹操称为「吾之子房」。",
    value: 2
  }, {
    name: "郭嘉是由贾诩推荐给曹操，并加入了曹操麾下。",
    value: 2
  }, ph, {
    name: "华佗使用「麻沸散」是世界医学史上应用全身麻醉进行手术治疗的最早记载？",
    value: 1
  }, pO, pj, {
    name: "刘备称帝后不久就亲自率军伐吴？",
    value: 1
  }, pq, {
    name: "挟天子以令诸侯的是曹操？",
    value: 1
  }, pw, {
    name: "袁术曾经称帝但最后被刘备、朱灵军截道，呕血而死？",
    value: 1
  }, pb, pI, {
    name: "周泰在归顺孙策之前在江中劫掠为生。",
    value: 1
  }, {
    name: "诸葛亮共北伐五次，第五次时病逝于五丈原？",
    value: 1
  }, pf, {
    name: "《咸鱼之王》里「咸神火把」的持续时间为30分钟？",
    value: 1
  }, {
    name: "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分？",
    value: 1
  }, {
    name: "《咸鱼之王》里每位玩家每日可以进行三次「免费点金」？",
    value: 1
  }, {
    name: "《咸鱼之王》里鱼缸位于玩家的「客厅」界面内？",
    value: 1
  }, {
    name: "《咸鱼之王》里「咸神门票」可以用于参加竞技场战斗？",
    value: 1
  }, {
    name: "《咸鱼之王》里「梦魇水晶」无法重生，只能通过无损换将置换到其他咸将身上？",
    value: 1
  }, {
    name: "《咸鱼之王》里「龙鱼·八卦」是咸将黄月英的专属鱼灵？",
    value: 2
  }, {
    name: "《咸鱼之王》里「万能红将碎片」可以开出蔡文姬的碎片吗？",
    value: 2
  }, {
    name: "《咸鱼之王》里好友的「客厅」内会随机刷出钻石、白银、普通三种盐罐？",
    value: 2
  }, {
    name: "《咸鱼之王》里「招募令」可以招募到咸将关银屏？",
    value: 2
  }, {
    name: "《咸鱼之王》里有「万能紫将碎片」？",
    value: 2
  }, {
    name: "《咸鱼之王》里咸将的专属鱼都有「龙鱼」前缀。",
    value: 1
  }, pK, {
    name: "《咸鱼之王》里咸将分为四个阵营？",
    value: 1
  }, {
    name: "《咸鱼之王》里咸将貂蝉是「群雄」阵营的。",
    value: 1
  }, {
    name: "《咸鱼之王》里咸将貂蝉的主动技能可以减少敌人怒气值。",
    value: 1
  }, {
    name: "《咸鱼之王》里「灯神挑战」每天可以免费获取3个「扫荡魔毯」。",
    value: 1
  }, {
    name: "《咸鱼之王》里同种类盐罐同时只能占据一个。",
    value: 1
  }, {
    name: "《咸鱼之王》里有「白银宝箱」。",
    value: 2
  }, pW, pC, {
    name: "《咸鱼之王》里咸将黄月英的职业是法师。",
    value: 2
  }, {
    name: "《咸鱼之王》里开启「木质宝箱」有概率获取金砖。",
    value: 2
  }, py, {
    name: "《咸鱼之王》里只要咸将貂蝉在场，吕布就不会阵亡。",
    value: 2
  }, pY, {
    name: "《咸鱼之王》里开启「钻石宝箱」时，不会获得宝箱积分。",
    value: 1
  }, {
    name: "《咸鱼之王》「捕获」玩法中，每进行十次高级捕获必出稀有鱼灵。",
    value: 1
  }, {
    name: "《咸鱼之王》「盐场争霸」中，可以通过消耗20金砖来加速行军。",
    value: 1
  }, {
    name: "《咸鱼之王》里咸将星级在达到21星时，即可获得「机甲皮肤」",
    value: 1
  }, {
    name: "《咸鱼之王》里宝箱积分达1000分时，可一键领取累计积分奖励宝箱。",
    value: 1
  }, {
    name: "《咸鱼之王》里俱乐部团长连续7天未登录，团长职位将自动转让其他成员。",
    value: 1
  }, pm, {
    name: "《咸鱼之王》「灯神挑战」内，每个阵营中有15层可挑战的关卡。",
    value: 1
  }, {
    name: "《咸鱼之王》「咸神竞技场」中，每日可以免费进行3次挑战。",
    value: 1
  }, pE, {
    name: "《咸鱼之王》已附身的鱼灵仍会在「鱼缸」中显示。",
    value: 2
  }, pX, {
    name: "《咸鱼之王》「每日咸王考验」中，共有4个不同BOSS。",
    value: 2
  }, pG, pA, {
    name: "「三家归晋」结束了汉末三国时期以来的割据混战的局面？",
    value: 1
  }, pQ, {
    name: "「莫作孔明择妇，正得阿承丑女」说的是诸葛亮的择偶标准。",
    value: 1
  }, {
    name: "《三国演义》中，许褚跟许攸是兄弟。",
    value: 2
  }, {
    name: "俗语「赔了夫人又折兵」中的夫人是小乔。",
    value: 2
  }, {
    name: "「赔了夫人又折兵」的上半句为「孔明妙计安天下」。",
    value: 2
  }, px, pk, {
    name: "《咸鱼之王》中，招募界面的NPC名宇是「猫婆婆」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「每日任务」重置时间为每日0点？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「每日任务」重置时间为每日8点？",
    value: 2
  }, {
    name: "《咸鱼之王》中，每位玩家每日有一次免费刷新「黑市」的机会？",
    value: 1
  }, {
    name: "《咸鱼之王》中，每位玩家每日有三次免费刷新「黑市」的机会？",
    value: 2
  }, {
    name: "《咸鱼之王》中，每消耗20个「普通鱼竿」可以免费获取1个「黄金鱼竿」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，每消耗10个「普通鱼竿」可以免费获取1个「黄金鱼竿」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为1亿？",
    value: 2
  }, {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为5亿？",
    value: 1
  }, {
    name: "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为10亿？",
    value: 2
  }, {
    name: "《咸鱼之王》中，道具「珍珠」可以在「神秘商店」使用？",
    value: 1
  }, pg, {
    name: "《咸鱼之王》中，玩家每次占领「盐罐」会消耗10点「能量」",
    value: 1
  }, {
    name: "《咸鱼之王》中，玩家每次占领「盐罐」会消耗1点「能量」",
    value: 2
  }, {
    name: "《咸鱼之王》中，一个「俱乐部」最多容纳30位成员？",
    value: 1
  }, {
    name: "《咸鱼之王》中，1个「俱乐部」最多有2位副团长？",
    value: 1
  }, {
    name: "《咸鱼之王》中，玩家可在「图鉴」内可查看满级咸将信息？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「月度活动」每月刷新1次？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「每日任务」中日活跃积分达到80的奖励为钻石宝箱？",
    value: 2
  }, pL, {
    name: "《咸鱼之王》中，游戏内有金色鱼灵「黄金鲸鱼」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，玩家可通过「咸将塔」玩法获取「珍珠」道具？",
    value: 2
  }, {
    name: "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得珍珠。",
    value: 1
  }, {
    name: "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得万能红将碎片。",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将的四个阵营分别为魏、蜀、吴、群雄。",
    value: 1
  }, {
    name: "《咸鱼之王》中，除了咸将外，其余的怪物都没有职业。",
    value: 1
  }, pd, {
    name: "《咸鱼之王》中，精铁可以直接用金砖购买。",
    value: 1
  }, {
    name: "《咸鱼之王》中，进阶石可以直接使用金砖购买。",
    value: 1
  }, V0, {
    name: "《咸鱼之王》中，贾诩为吴国阵营咸将？",
    value: 2
  }, {
    name: "《咸鱼之王》中，每日可以免费招募一次。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「每日咸王考验」可以挑战多次。",
    value: 1
  }, V1, {
    name: "《咸鱼之王》中，「咸王梦境」为每日开放。",
    value: 2
  }, {
    name: "《咸鱼之王》中，「咸王梦境」周二会开放。",
    value: 2
  }, {
    name: "《咸鱼之王》中，姜维攻击后可以获得护盾。",
    value: 2
  }, {
    name: "《咸鱼之王》中，俱乐部人数没有上限。",
    value: 2
  }, V2, {
    name: "祝融夫人是《三国演义》虚构人物。",
    value: 1
  }, {
    name: "《三国演义》中，「拔矢啖晴」的是夏侯惇。",
    value: 1
  }, {
    name: "《三国演义》中，「拔矢啖睛」的是夏侯渊。",
    value: 2
  }, {
    name: "《三国演义》中，「曹操献刀」本是要刺杀董卓。",
    value: 1
  }, {
    name: "《三国演义》中，许攸被许褚所杀。",
    value: 1
  }, V3, V4, {
    name: "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一8点重置。",
    value: 2
  }, {
    name: "《咸鱼之王》中，挂机奖励加钟，最多可以有5名好友助力。",
    value: 2
  }, {
    name: "《咸鱼之王》中，挂机奖励加钟，最多可以有4名好友助力。",
    value: 1
  }, {
    name: "《咸鱼之王》中，每日6点重置点金次数。",
    value: 2
  }, {
    name: "《咸鱼之王》中，「俱乐部」每日签到可以获得「军团币」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「黑市」每日0点自动刷新商品？",
    value: 1
  }, V5, {
    name: "《咸鱼之王》中，可以使用「珍珠」兑换「万能红将碎片」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸神门票」可以通过「金砖」进行购买？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「灯神挑战」内分为四个阵营？",
    value: 1
  }, {
    name: "《咸鱼之王》中，玩家的「勋章墙」内最多展示4个「徽章」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「主公」达到4001级开启「玩具」玩法？",
    value: 1
  }, V6, {
    name: "《咸鱼之王》中，「咸王梦境」每成功通过十层可以遇到一次梦境商人？",
    value: 1
  }, {
    name: "《咸鱼之王》中，挑战「咸将塔」需要花费「小鱼干」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「小鱼干」可以通过「金砖」进行购买？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「招募」无法获得咸将吕玲绮。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「灯神挑战」的奖励包括「珍珠」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，「咸王梦境」中的梦境调料「普通盐瓶」可以恢复咸将怒气？",
    value: 2
  }, V7, {
    name: "《咸鱼之王》中，「扳手」在通关主线7001关后可以通过挂机奖励获得。",
    value: 1
  }, V8, V9, VP, {
    name: "《咸鱼之王》中，「木材火把」会使主线战斗以1.5倍速进行？",
    value: 1
  }, VD, {
    name: "《咸鱼之王》中，装备中的坐骑会为咸将提供防御加成？",
    value: 2
  }, {
    name: "《咸鱼之王》中，攻打「俱乐部×OSS」后可以获得皮肤币奖励？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将皮肤可以使用「军团币」来进行兑换？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将的等级上限为2000级？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将「张星彩」属于群雄阵营？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将「颜良」属于魏国阵营？",
    value: 2
  }, {
    name: "《咸鱼之王》中，「招募」无法获得咸将关银屏。",
    value: 1
  }, Vv, {
    name: "《咸鱼之王》中，俱乐部团长无法退出俱乐部。",
    value: 1
  }, {
    name: "《咸鱼之王》中，主动退出俱乐部12小时后才可以加入新的俱乐部。",
    value: 1
  }, {
    name: "《咸鱼之王》中，装备中的铠甲会为咸将提供血量加成？",
    value: 1
  }, {
    name: "《咸鱼之王》中，红色咸将的觉醒技能需要咸将达到一定星级才能解锁。",
    value: 1
  }, {
    name: "《咸鱼之王》中，布阵时，前排可上阵2名咸将，后排可上阵3名咸将。",
    value: 1
  }, {
    name: "《咸鱼之王》竞技场中，未对防守阵容进行设置时，将默认使用主线阵容。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「邮件」最长保存30天。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「邮件」最长保存10天。",
    value: 2
  }, {
    name: "《咸鱼之王》中，「淬炼」可能出现的属性共21种。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「俱乐部BOSS」被击败后会按照玩家造成的总伤害排名发放排名奖励。",
    value: 1
  }, {
    name: "《咸鱼之王》中，晚上23时仍可以进行竞技场战斗。",
    value: 2
  }, {
    name: "《咸鱼之王》中，开启「省电模式」将停止主线关卡战斗。",
    value: 2
  }, {
    name: "鲁肃，字「子敬」。",
    value: 1
  }, {
    name: "蔡文姬，本名蔡琰？",
    value: 1
  }, {
    name: "「池中之物」一词出自《三国志》中周瑜之口？",
    value: 1
  }, {
    name: "《咸鱼之王》中，装备中的头冠会为咸将提供防御加成？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸神火把」会为主线战斗中上阵的咸将增加15%攻击？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸神火把」与「青铜火把」均会使主线战斗以2倍速进行？",
    value: 1
  }, VB, {
    name: "「望梅止渴」是周瑜带队行军时发生的故事？",
    value: 2
  }, {
    name: "《咸鱼之王》中，「扳手」可以在「黑市」中花费「金砖」获取？",
    value: 1
  }, {
    name: "《咸鱼之王》中，在「盐锭商店」中可以花费「盐锭」兑换到「皮肤币」？",
    value: 1
  }, Vz, {
    name: "《咸鱼之王》中，「咸鱼大冲关」单局累计答对10题可获取10个「招募令」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，通行证「竞技经验」 不需要邮件领取，直接发放给玩家？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「俱乐部排位赛」的段位一共有7种？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「阵营光环」上阵任意3个同阵营的武将就能生效。",
    value: 2
  }, {
    name: "《咸鱼之王》中，月度活动「捕获达标」达标奖动包含道具「金砖」？",
    value: 1
  }, {
    name: "《咸鱼之王》中，俱乐部的「团长」和「副团长」可以选择「排位赛」出战成员？",
    value: 1
  }, {
    name: "《咸鱼之王》中，玩家每日可在「灯神挑战」中挑战10次？",
    value: 1
  }, {
    name: "《咸鱼之王》中，咸将「曹仁」的职业是「肉盾」？",
    value: 1
  }, VM, VS, VT, {
    name: "《咸鱼之王》中，在「黑市」可以通过「金砖」兑换「钻石宝箱」？",
    value: 2
  }, VR, {
    name: "《咸鱼之王》中，可以通过「万能红将碎片」开出「贾诩碎片」？",
    value: 1
  }, VZ, {
    name: "《咸鱼之王》中，「灯神挑战」中，每阵营前五层的首通奖励均为精铁和进阶石？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸鱼大冲关」内累计答对30道题目可获得「金鱼公主」皮肤？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸鱼大冲关」内完成20次大冲关任务可获得「马头咸鱼」皮肤？",
    value: 1
  }, {
    name: "《咸鱼之王》中，「金币礼包」可以通过「捕获」玩法获取？",
    value: 1
  }, VU, VN, {
    name: "《咸鱼之王》中，可以通过「万能橙将碎片」开出「蔡文姬碎片」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，通过「高级捕获」可以获得黄金鱼灵「利刃」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将星级达到30级，可以觉醒第二技能？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将「黄月英」的职业为「法师」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将「孙策」的职业为「战士」？",
    value: 2
  }, {
    name: "《咸鱼之王》中，开启「晶石福袋」可以获得「进阶石」？",
    value: 2
  }, {
    name: "《三国演义》中，「大丈夫生于乱世，当带三尺剑立不世之功」，是太史慈所说。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸将塔」每通关第10层，会给10个「小鱼干」。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「每日咸王考验」有10层伤害达标奖励。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「巅峰竞技场」 前100名，可登上「巅峰王者榜」。",
    value: 1
  }, {
    name: "《咸鱼之王》中，激活「终身卡」，可以使挂机时间增加2小时。",
    value: 1
  }, {
    name: "《咸鱼之王》中，激活「月卡」，可以使挂机时间增加2小时。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「咸神竞技场」 内共分为六个段位。",
    value: 1
  }, {
    name: "《咸鱼之王》中，「灯神挑战」每日0点刷新挑战次数。",
    value: 1
  }, {
    name: "《咸鱼之王》中，若「签到」当日登录未领取，后续登录时可以一并领取。",
    value: 1
  }, {
    name: "《咸鱼之王》中，激活「终身卡」，挂机金币收益增加10%。",
    value: 1
  }, Vu, {
    name: "《咸鱼之王》中，「签到」领取30次奖动内容后，奖动内容会进行刷新。",
    value: 1
  }, {
    name: "《咸鱼之王》中，激活「月卡」，挂机金币收益增加10%。",
    value: 2
  }, {
    name: "《咸鱼之王》中，「竞技场」 每周结算时，巅峰场玩家均可获得「巅峰王者徽章」。",
    value: 2
  }, {
    name: "《咸鱼之王》中，「周卡」激活，可以使挂机时间增加2小时。",
    value: 2
  }, {
    name: "《咸鱼之王》中，咸将装备的等级无法超「主公阿咸」的等级。",
    value: 1
  }, {
    name: "《咸鱼之王》中，开启「金币礼包」获取的金币「招募令」与挂机奖励有关。",
    value: 1
  }, VF, {
    name: "《咸鱼之王》中，「梦魇水晶」的属性需要佩戴咸将达到701级才会生效。",
    value: 1
  }, {
    name: "《咸鱼之王》中，咸将达到700级并进阶后可以激活自身全部基础技能。",
    value: 1
  }, {
    name: "电影《喜剧之王》于1999年上映。",
    value: 1
  }, {
    name: "《喜剧之王》的主演包括周星驰、莫文蔚、张柏芝和吴孟达。",
    value: 1
  }, {
    name: "电影《喜剧之王》是周星驰系列电影的经典之作。",
    value: 1
  }, {
    name: "周星驰不是《喜剧之王》导演。",
    value: 2
  }, {
    name: "“我养你啊”出自电影《喜剧之王》。",
    value: 1
  }, Vp, {
    name: "《喜剧之王》电影中，尹天仇原本是一名成功的演员。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，尹天仇最终成功出演了新戏的男主角。",
    value: 2
  }, VV, {
    name: "《喜剧之王》电影中，尹天仇没有帮助警方破获案件。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，尹天仇得到了娟姐的赏识。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇的梦想是成为一名演员。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇在街坊福利会里开设的是舞蹈训练班。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，尹天仇的盒饭都没有被狗吃掉。",
    value: 2
  }, VJ, {
    name: "《喜剧之王》电影中，柳飘飘找尹天仇学习演技是因为喜欢他",
    value: 2
  }, {
    name: "电影中，尹天仇在柳飘飘支持下继续在街坊福利会的演员训练班里教授表演技巧。",
    value: 1
  }, VH, {
    name: "《喜剧之王》电影中，洪爷肚子上的伤是尹天仇捅的。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，尹天仇饰演过神父",
    value: 1
  }, {
    name: "《喜剧之王》电影中，“我养你啊”是尹天仇对柳飘飘说的。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇曾指导阿飞，拓展保护费市场。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇没有进入了犯罪团伙内部。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，片场导演每次说话都要附带一段舞。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇最终被召入警方卧底小分队。",
    value: 2
  }, Vh, VO, {
    name: "《喜剧之王》电影中，尹天仇设有在片场吃过盒饭。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，街坊福利会剧《雷雨》的主演没有洪爷。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，柳飘飘在尹天仇的指导下逐渐敞开心扉，并对尹天仇产生了感情。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，龙少爷给了柳飘飘很多钱。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇把《演员的自我修养》送给了柳飘飘。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，尹天仇得到了大明星娟姐的提携，有机会在新戏中担任男主角。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇饰演卧底警察被娟姐看中。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，杜娟儿出演了社区剧场雷雨。",
    value: 1
  }, Vj, {
    name: "《喜剧之王》电影中，尹天仇喜欢娟姐，不喜欢柳飘飘。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，柳飘飘为了学习演技给尹天仇交学费。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，周星驰饰演尹天仇。",
    value: 1
  }, Vq, {
    name: "《喜剧之王》电影中，柳飘飘将头发剪短了。",
    value: 2
  }, Vw, {
    name: "《喜剧之王》电影中，妈妈桑带领柳飘飘来到尹天仇的演员训练班",
    value: 1
  }, Vb, {
    name: "《喜剧之王》电影中，霞姨是片场导演。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，尹天仇凭借演时死尸的忘我，赢得了娟姐的认可。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，霞姨暗恋尹天仇。",
    value: 2
  }, {
    name: "《喜剧之王》电影中，杜娟儿不怕蟑螂。",
    value: 2
  }, VI, {
    name: "《喜剧之王》电影中，柳飘飘是杜娟儿粉丝。",
    value: 1
  }, Vc, Vf, {
    name: "《喜剧之王》电影中，尹天仇被香蕉皮绊倒过。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，尹天仇被柳飘飘殴打过。",
    value: 1
  }, {
    name: "《喜剧之王》电影中，柳飘飘是龙少爷的初恋。",
    value: 2
  }, VK, {
    name: "《喜剧之王》电影中，柳飘飘不会转呼啦图。",
    value: 2
  }, VW, {
    name: "《喜剧之王》电影中，柳飘飘拿走了尹天仇的手表。",
    value: 1
  }, VC, {
    name: "电影《长江7号》是一部科幻喜剧片。",
    value: 1
  }, {
    name: "《长江7号》电影中，外星生物是一个高科技的机器人。",
    value: 2
  }, {
    name: "《长江7号》电影中，周小狄在学校里经常被欺负。",
    value: 1
  }, Vy, {
    name: "《长江7号》电影中，周星驰饰演的角色是一名电工。",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔最终带领周小狄一家去到外星球生活。",
    value: 2
  }, {
    name: "《长江7号》电影中，周小狄因为家境贫寒，而被同学取笑。",
    value: 1
  }, {
    name: "《长江7号》电影中，周小狄因为7仔的帮助，成绩突飞猛进。",
    value: 2
  }, {
    name: "《长江7号》电影中，周小狄在学校里与一名女同学成为了好朋友。",
    value: 1
  }, {
    name: "《长江7号》电影中，7仔的能量来源是太阳能。",
    value: 2
  }, VY, {
    name: "《长江7号》电影中，周小狄为了保护7仔，与其他小孩发生了打斗。",
    value: 1
  }, {
    name: "《长江7号》电影中，周星驰饰演的角色周铁与7仔进行了足球比赛。",
    value: 2
  }, {
    name: "《长江7号》电影中，周铁与周小狄的老师发展出了一段感情。",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔是从一颗彗星上掉落到地球的。",
    value: 2
  }, {
    name: "《长江7号》电影中，周小狄最终成为了学霸，感谢7仔的帮助。",
    value: 2
  }, Vm, {
    name: "《长江7号》电影中，周星驰饰演的角色周铁为了保护7仔，决定将其送回外星球。",
    value: 2
  }, {
    name: "《长江7号》电影中，周铁为了给儿子周小狄买衣服而去垃圾堆捡拾物品。",
    value: 2
  }, VE, {
    name: "《长江7号》电影中，周铁的儿子名叫大时钟。",
    value: 2
  }, VX, VG, {
    name: "《长江7号》电影中，周小狄因为学习压力大，曾经想过放弃学业。",
    value: 1
  }, {
    name: "《长江7号》电影中，周星驰饰演的角色被误认为是外星人。",
    value: 2
  }, VA, VQ, Vx, {
    name: "《长江7号》电影中，周小狄在众人面前展示了7仔的神奇能力。",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔曾经救过一名落水的小孩。",
    value: 2
  }, {
    name: "《长江7号》电影中，周小狄在学校里因为7仔结交了新朋友。",
    value: 1
  }, Vk, {
    name: "《长江7号》电影中，7仔的能力之一是可以预测未来。",
    value: 2
  }, {
    name: "《长江7号》电影中，周星驰饰演的角色为了哄儿子开心，故意说7仔是贵重的玩具。",
    value: 1
  }, Vg, {
    name: "《长江7号》电影中，周小狄曾经因为7仔而受到老师表扬",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔曾经被一名坏人抢走。",
    value: 2
  }, {
    name: "《长江7号》电影中，周星驰饰演的角色为了保护7仔，曾经与一名黑帮打斗。",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔最终带领周小狄一家过上了幸福的生活。",
    value: 2
  }, {
    name: "《长江7号》电影中，周星驰饰演的角色为了给儿子买玩具而去垃圾堆捡拾物品。",
    value: 1
  }, {
    name: "《长江7号》电影中，周铁捡到的外星生物是灰色的。",
    value: 2
  }, VL, {
    name: "《长江7号》电影中，7仔有治愈能力。",
    value: 1
  }, {
    name: "《长江7号》电影中，周星驰饰演的角色是一位贫穷的父亲和建筑工人。",
    value: 1
  }, {
    name: "《长江7号》电影中，周小狄最好的朋友是一位女生。",
    value: 1
  }, {
    name: "《长江7号》电影中，7仔并不会说人类的语言。",
    value: 1
  }, {
    name: "《长江7号》电影中，外星生物7仔会飞。",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔可以让时间倒流。",
    value: 2
  }, {
    name: "《长江7号》电影中，7仔的能量来源是吃食物。",
    value: 2
  }, Vd, {
    name: "《长江7号》电影中，周小狄从来没有想过放弃学业。",
    value: 2
  }, n0, {
    name: "《长江7号》电影中，周星驰饰演的角色最后成为了一位英雄。",
    value: 2
  }, {
    name: "《长江7号》电影中，周小狄因为家庭环境的原国，在贵族学校与其他同学格格不入。",
    value: 1
  }, {
    name: "《长江7号》电影中，袁老师非常关心周小狄。",
    value: 1
  }, {
    name: "周星驰担任《长江7号》的出品人、监制、编剧、导演及主演。",
    value: 1
  }, {
    name: "《长江7号》电影中，7仔修好了周小狄家的电风扇。",
    value: 1
  }, n1, {
    name: "《长江7号》电影中，周小狄家中很干净，没有蟑螂。",
    value: 2
  }, n2, {
    name: "电影《食神》于1996年12月21日上映。",
    value: 1
  }, n3, n4, {
    name: "《食神》电影中，唐牛背叛了食神史提芬周。",
    value: 1
  }, {
    name: "《食神》电影中，史提芬周的餐馆里用了坏掉的牛肉。",
    value: 1
  }, {
    name: "《食神》电影中，唐牛成为了新食神。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡做出了最好吃的撒尿牛丸。",
    value: 2
  }, {
    name: "《食神》电影中，撒尿牛丸的第一位顾客是厌食症患者。",
    value: 1
  }, n5, {
    name: "《食神》电影中，周星驰饰演的食神史提芬周靠撒尿牛丸翻身。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐因为保护食神旗被毁容。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐是食神史提芬周的粉丝。",
    value: 1
  }, n6, {
    name: "《食神》电影中，食神史提芬周成为了少林弟子。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐曾给史提芬周做了一碗叉烧饭。",
    value: 1
  }, n7, {
    name: "《食神》电影中，史提芬周与唐牛PK做佛跳墙。",
    value: 1
  }, {
    name: "《食神》电影中，唐牛去的中国厨艺训练学院，其实是少林寺厨房。",
    value: 1
  }, {
    name: "《食神》电影中，唐牛比赛做的佛跳墙用了七七四十九小时。",
    value: 2
  }, {
    name: "《食神》电影中，火鸡姐救了周星驰饰演的食神史提芬周。",
    value: 1
  }, {
    name: "《食神》电影中，参加食神比赛的人都拿了满分。",
    value: 2
  }, {
    name: "《食神》电影中，周星驰饰演的食神给所有参赛者都打了满分。",
    value: 2
  }, {
    name: "《食神》电影中，史提芬周参加食神比赛迟到了。",
    value: 2
  }, {
    name: "《食神》电影中，史提芬周与唐牛PK做皇帝炒饭。",
    value: 2
  }, {
    name: "《食神》电影中，食神比赛当晚出现了九星连珠。",
    value: 1
  }, n8, n9, {
    name: "《食神》电影中，史提芬周一直都是食神。",
    value: 2
  }, {
    name: "《食神》电影中，史提芬周做出的撒尿牛丸很有弹性。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐曾在中国厨艺技术学院学习。",
    value: 2
  }, {
    name: "《食神》电影中，史提芬周的徒弟唐牛喜欢火鸡姐。",
    value: 2
  }, {
    name: "《食神》电影中，史提芬周误入了少林寺。",
    value: 1
  }, {
    name: "《食神》电影中，史提芬周非常有商业头脑。",
    value: 1
  }, {
    name: "《食神》电影中，史提芬周靠撒尿牛丸重新成为食神。",
    value: 1
  }, nP, nD, {
    name: "《食神》电影中，唐牛的拿手菜是撒尿牛丸。",
    value: 2
  }, nv, nB, {
    name: "《食神》电影中，史提芬制作甜品[彩虹鲜花拔丝]是麦芽糖、鲜花瓣制作的。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐卖给史蒂芬是一碗叉烧饭。",
    value: 2
  }, nz, {
    name: "《食神》电影中，卖出第一碗[撒尿牛丸]的价格是1元。",
    value: 2
  }, {
    name: "《食神》电影中，史蒂芬凭撒尿牛丸入围香港饮食奇才。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐摊位下贴满了史蒂芬的照片。",
    value: 1
  }, {
    name: "《食神》电影中，”好折凳”被誉为七种武器之首。",
    value: 1
  }, {
    name: "《食神》电影中，食神制作的叉烧饭，起名是[黯然销魂饭]。",
    value: 1
  }, {
    name: "《食神》电影中，史蒂芬去少林寺的厨房学习仅用了2个月。",
    value: 2
  }, {
    name: "《食神》电影中，《香港至尊名厨大赛》比赛地点在少林寺。",
    value: 2
  }, {
    name: "《食神》电影中，最终史提芬周靠咸鱼料理赢得了比赛。",
    value: 2
  }, {
    name: "《食神》电影中，方丈讨厌别人在背后说他坏话。",
    value: 1
  }, {
    name: "《食神》电影中，史提芬周最后在少林寺做和尚，法号星星。",
    value: 2
  }, nM, {
    name: "《食神》电影中，「黯然销魂饭」吃了会流泪，是因为放了洋葱",
    value: 1
  }, {
    name: "《食神》电影中，少林寺方丈，法号为梦遗。",
    value: 1
  }, {
    name: "《食神》电影中，史提芬周加入了少林寺十八铜人。",
    value: 2
  }, {
    name: "《食神》电影中，火鸡姐最终和方丈在一起了。",
    value: 2
  }, {
    name: "《食神》电影中，史提芬周在做莱时，使出「屠龙斩」",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐最终变得很漂亮。",
    value: 1
  }, {
    name: "《食神》电影中，火鸡姐绰号「双刀火鸡」。",
    value: 1
  }];
  function nR(Ib, II) {
    {
      if (!Ib || !II) {
        return false;
      }
      const If = Ib.replace(/\s+/g, "").toLowerCase();
      const IK = II.replace(/\s+/g, "").toLowerCase();
      return IK.includes(If) || If.includes(IK);
    }
  }
  async function nZ(Ib) {
    {
      try {
        const IK = await async function () {
          return nT;
        }();
        if (!IK || 0 === IK.length) {
          return null;
        }
        for (let IW = 0; IW < IK.length; IW++) {
          const IC = IK[IW];
          if (IC.name && IC.value && nR(IC.name, Ib)) {
            return IC.value;
          }
        }
        return null;
      } catch (Iy) {
        return null;
      }
    }
  }
  const nN = {
    isAnswering: false,
    studyId: null,
    questionCount: 0,
    answeredCount: 0,
    status: ""
  };
  function nu() {
    const Ib = document.getElementById("qa-study-status");
    if (Ib) {
      {
        let If = "";
        switch (nN.status) {
          case "starting":
            If = "正在获取题目...";
            break;
          case "answering":
            If = "答题中 " + nN.answeredCount + "/" + nN.questionCount;
            break;
          case "claiming_rewards":
            If = "正在领取奖励...";
            break;
          case "completed":
            If = "✅ 答题完成！";
            break;
          default:
            If = "点击按钮开始答题";
        }
        Ib.textContent = If;
      }
    }
  }
  async function nF() {
    {
      if (nN.isAnswering) {
        TQ("答题进行中，请勿重复操作", "warning");
      } else {
        await async function () {}();
        await async function () {
          return nT ? nT.length : 0;
        }();
        nN.status = "starting";
        nN.answeredCount = 0;
        nN.questionCount = 0;
        nN.isAnswering = true;
        nu();
        try {
          {
            const If = await Rz("study_startgame", {});
            If && If.questionList ? await async function (IK) {
              const IC = IK.questionList;
              const Iy = IK.role?.["study"]?.["id"];
              if (IC && Array.isArray(IC)) {
                if (0 === IC.length) {
                  nN.status = "";
                  nN.isAnswering = false;
                  nu();
                  return void TQ("未获取到题目", "warning");
                }
                if (Iy) {
                  {
                    nN.isAnswering = true;
                    nN.questionCount = IC.length;
                    nN.answeredCount = 0;
                    nN.studyId = Iy;
                    nN.status = "answering";
                    nu();
                    TQ("开始答题，共" + IC.length + "题", "info");
                    try {
                      for (let Im = 0; Im < IC.length; Im++) {
                        const IE = IC[Im];
                        const IX = IE.question;
                        const IG = IE.id;
                        let IA = await nZ(IX);
                        null === IA && (IA = 1);
                        try {
                          {
                            const IQ = {
                              id: Iy,
                              option: [IA],
                              questionId: [IG]
                            };
                            await Rz("study_answer", IQ);
                          }
                        } catch (Ik) {
                          TQ("答题失败: " + Ik.message, "error");
                        }
                        nN.answeredCount = Im + 1;
                        nu();
                        Im < IC.length - 1 && (await new Promise(Ig => setTimeout(Ig, 200)));
                      }
                      await new Promise(Ig => setTimeout(Ig, 500));
                      await async function () {
                        nN.status = "claiming_rewards";
                        nu();
                        TQ("正在领取奖励...", "info");
                        for (let Ig = 1; Ig <= 10; Ig++) {
                          try {
                            const IL = {
                              rewardId: Ig
                            };
                            await Rz("study_claimreward", IL);
                            await new Promise(Id => setTimeout(Id, 200));
                          } catch (Id) {}
                        }
                        nN.status = "completed";
                        nN.isAnswering = false;
                        nu();
                        TQ("答题完成，奖励已领取", "success");
                        await new Promise(c0 => setTimeout(c0, 3000));
                        nN.isAnswering = false;
                        nN.questionCount = 0;
                        nN.answeredCount = 0;
                        nN.status = "";
                        nu();
                        await new Promise(c0 => setTimeout(c0, 1000));
                        try {
                          await Rz("role_getroleinfo", {});
                        } catch (c0) {}
                      }();
                    } catch (Ig) {
                      nN.status = "";
                      nN.isAnswering = false;
                      nu();
                      TQ("答题出错: " + Ig.message, "error");
                    }
                  }
                } else {
                  TQ("未获取到答题ID", "error");
                }
              }
            }(If) : (TQ("未获取到题目，请稍后重试", "error"), setTimeout(() => {
              {
                "starting" === nN.status && (nN.status = "", nN.isAnswering = false, nu());
              }
            }, 40000));
          }
        } catch (IK) {
          nN.status = "";
          nN.isAnswering = false;
          nu();
          TQ("开始答题失败: " + IK.message, "error");
        }
      }
    }
  }
  const np = Ib => {
    {
      const IK = Tf[Number(Ib)];
      return IK?.["name"] || "英雄" + Ib;
    }
  };
  const nV = Ib => {
    {
      const If = Tf[Number(Ib)];
      if (!If?.["avatar"]) {
        return null;
      }
      const IK = If.avatar.replace(/^\//, "");
      return Tw + "/" + IK;
    }
  };
  const nJ = () => {
    const Ib = document.getElementById("qa-team-selector");
    if (!Ib) {
      return;
    }
    const II = TR.availableTeams || [];
    const If = TR.currentTeamId || 1;
    0 !== II.length ? (Ib.innerHTML = II.map(IK => "\n    <button class=\"team-btn " + (IK === If ? "active" : "") + "\" data-team=\"" + IK + "\">" + IK + "</button>\n  ").join(""), nH()) : Ib.innerHTML = "<span class=\"helper-text\" style=\"margin:0;font-size:11px;\">加载中...</span>";
  };
  const nH = () => {
    const II = document.getElementById("qa-team-selector");
    II && II.querySelectorAll(".team-btn").forEach(If => {
      If.addEventListener("click", async () => {
        const IW = parseInt(If.dataset.team, 10);
        IW && IW !== TR.currentTeamId && (II.querySelectorAll(".team-btn").forEach(IC => IC.disabled = true), await nq(IW), II.querySelectorAll(".team-btn").forEach(IC => IC.disabled = false));
      });
    });
  };
  const nh = () => {
    const Ib = document.getElementById("qa-team-heroes");
    if (!Ib) {
      return;
    }
    const II = TR.teamHeroes || [];
    0 !== II.length ? Ib.innerHTML = II.map(If => "\n      <div class=\"team-hero-item\">\n        <div class=\"team-hero-circle\">" + (If.avatar ? "<img class=\"team-hero-avatar\" src=\"" + If.avatar + "\" alt=\"" + If.name + "\" onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex'\"><div class=\"team-hero-placeholder\" style=\"display:none\">" + If.name.substring(0, 2) + "</div>" : "<div class=\"team-hero-placeholder\">" + If.name.substring(0, 2) + "</div>") + "</div>\n        <span class=\"team-hero-name\">" + If.name + "</span>\n      </div>\n    ").join("") : Ib.innerHTML = "<div class=\"helper-text\">暂无阵容数据</div>";
  };
  const nO = () => {
    const II = document.getElementById("qa-team-selector");
    if (!II) {
      return;
    }
    const If = TR.currentTeamId || 1;
    II.querySelectorAll(".team-btn").forEach(IK => {
      const IW = parseInt(IK.dataset.team, 10);
      IK.classList.toggle("active", IW === If);
    });
  };
  const nj = async (Ib = {}) => {
    try {
      {
        const IK = await Rz("presetteam_getinfo", {});
        TR.presetTeam = IK;
        const IW = RC(IK);
        TR.currentTeamId = IW.useTeamId;
        const IC = Object.keys(IW.teams).map(Number).filter(IE => Number.isFinite(IE) && IE > 0).sort((IE, IX) => IE - IX);
        const Iy = JSON.stringify(TR.availableTeams || []) !== JSON.stringify(IC);
        TR.availableTeams = IC;
        const IY = IW.teams[IW.useTeamId]?.["teamInfo"] || {};
        const Im = [];
        for (const [IE, IX] of Object.entries(IY)) {
          {
            const IA = IX?.["heroId"] || IX?.["id"];
            IA && Im.push({
              id: Number(IA),
              name: np(IA),
              avatar: nV(IA),
              position: Number(IE),
              level: IX?.["level"] || 1
            });
          }
        }
        Im.sort((IQ, Ix) => IQ.position - Ix.position);
        TR.teamHeroes = Im;
        Iy ? nJ() : nO();
        nh();
      }
    } catch (IQ) {}
  };
  const nq = async Ib => {
    if (TR.currentTeamId !== Ib) {
      try {
        {
          const If = {
            teamId: Ib
          };
          await Rz("presetteam_saveteam", If);
          TR.currentTeamId = Ib;
          await nj({});
        }
      } catch (IK) {}
    }
  };
  const nw = {
    __proto__: null,
    refreshTeamInfo: nj,
    renderTeamHeroes: nh,
    renderTeamSelector: nJ,
    switchTeam: nq,
    updateTeamSelector: nO
  };
  var nb = Object.freeze(nw);
  let nI = null;
  const nf = {
    label: "金砖",
    itemType: 2,
    itemId: 0
  };
  const nK = {
    label: "白玉",
    itemType: 3,
    itemId: 1022
  };
  const nW = {
    label: "招募令",
    itemType: 3,
    itemId: 1001
  };
  const nC = {
    label: "品质",
    itemType: "grade",
    itemId: 0
  };
  const ny = {
    label: "彩玉",
    itemType: 3,
    itemId: 1023
  };
  const nY = {
    label: "红色万能碎片",
    itemType: 3,
    itemId: 3201
  };
  const nm = {
    label: "刷新券",
    itemType: 3,
    itemId: 35002
  };
  const nX = {};
  const nG = "xyzw_car_send_config";
  const nA = {
    gold: nf,
    jade: nK,
    recruit: nW,
    grade: nC,
    colorJade: ny,
    redFragment: nY,
    refreshTicket: nm
  };
  const nQ = () => window.ROLE?.["roleId"] || window.ROLE?.["id"] || "default";
  const nx = () => {
    {
      try {
        const Im = nQ();
        const IE = localStorage.getItem(nG + "_" + Im);
        const IX = {
          type: "gold",
          enabled: true,
          value: 2000
        };
        const IG = {
          type: "jade",
          enabled: true,
          value: 2000
        };
        const IA = {
          type: "recruit",
          enabled: true,
          value: 10
        };
        const IQ = {
          type: "grade",
          enabled: true,
          value: 5
        };
        if (IE) {
          return {
            andConditions: [],
            orConditions: [IX, IG, IA, IQ],
            maxRefreshPerCar: 5,
            ...JSON.parse(IE)
          };
        }
      } catch (Ix) {}
      const IK = {
        type: "gold",
        enabled: true,
        value: 2000
      };
      const IW = {
        type: "jade",
        enabled: true,
        value: 2000
      };
      const IC = {
        type: "recruit",
        enabled: true,
        value: 10
      };
      const Iy = {
        type: "grade",
        enabled: true,
        value: 5
      };
      const IY = {
        andConditions: [],
        orConditions: [IK, IW, IC, Iy],
        maxRefreshPerCar: 5
      };
      return IY;
    }
  };
  let nk = nx();
  const nL = {
    type: 3,
    itemId: 3201,
    minValue: 10
  };
  const nd = {
    type: 3,
    itemId: 1001,
    minValue: 10
  };
  const J0 = {
    type: 3,
    itemId: 1022,
    minValue: 2000
  };
  const J1 = {
    type: 2,
    itemId: 0,
    minValue: 2000
  };
  const J2 = {
    type: 3,
    itemId: 1023,
    minValue: 5
  };
  const J3 = {
    type: 3,
    itemId: 1022,
    minValue: 2500
  };
  const J4 = {
    type: 3,
    itemId: 1001,
    minValue: 12
  };
  const J5 = () => {
    const Ib = new Date().getDay();
    return Ib >= 1 && Ib <= 3;
  };
  const J6 = () => {
    const Ib = new Date().getHours();
    return Ib >= 6 && Ib < 20;
  };
  const J7 = () => {
    {
      const II = new Date().getHours();
      const If = {
        ok: false,
        text: "未到6点"
      };
      const IK = {
        ok: true,
        text: "可发车"
      };
      return II < 6 ? If : II >= 20 ? {
        ok: false,
        text: "已过20点"
      } : IK;
    }
  };
  const J8 = () => ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][new Date().getDay()];
  const J9 = () => {
    {
      const If = nI?.["body"] || nI || {};
      const IK = If.roleCar || If.rolecar || {};
      const IW = Number(IK.sendCnt || 0);
      return (IC => {
        {
          if (!IC) {
            return false;
          }
          const Iy = new Date();
          const IY = new Date(1000 * IC);
          const Im = new Date(Iy);
          Im.setHours(5, 0, 0, 0);
          Iy < Im && Im.setDate(Im.getDate() - 1);
          return IY >= Im;
        }
      })(Number(IK.sendCntResetTime || 0)) ? IW : 0;
    }
  };
  const JP = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const JD = {
    1: "#22c55e",
    2: "#3b82f6",
    3: "#a855f7",
    4: "#f59e0b",
    5: "#ef4444",
    6: "#eab308"
  };
  const Jv = [nL, nd, J0, J1, J2, J3, J4];
  const JB = {
    3001: "金币袋子",
    3002: "金砖袋子",
    3008: "精铁袋子",
    3009: "进阶袋子",
    3010: "梦魇袋子",
    3011: "白玉袋子",
    3012: "扳手袋子",
    3005: "紫色随机碎片",
    3006: "橙色随机碎片",
    3007: "红色随机碎片",
    3201: "红色万能碎片",
    3302: "橙色万能碎片",
    2001: "木制宝箱",
    2002: "青铜宝箱",
    2003: "黄金宝箱",
    2004: "铂金宝箱",
    2005: "钻石宝箱",
    3020: "聚宝盆",
    3021: "豪华聚宝盆",
    1001: "招募令",
    1003: "进阶石",
    1006: "精铁",
    1007: "竞技场门票",
    1011: "普通鱼竿",
    1012: "黄金鱼竿",
    1013: "珍珠",
    1016: "晶石",
    1019: "盐锭",
    1020: "皮肤币",
    1021: "扫荡魔毯",
    1022: "白玉",
    1023: "彩玉",
    1033: "贝壳",
    1035: "金盐锭",
    35002: "刷新券",
    35009: "零件",
    10101: "四圣宝珠碎片",
    37001: "怪异钥匙"
  };
  const Jz = Ib => !!Array.isArray(Ib) && Jv.some(II => Ib.find(If => If.type === II.type && (0 === II.itemId || If.itemId === II.itemId) && Number(If.value || 0) >= II.minValue));
  const JM = Ib => Array.isArray(Ib) && 0 !== Ib.length ? Ib.map(II => {
    const If = II.type || 0;
    const IK = II.itemId || 0;
    const IW = II.value || 0;
    return 1 === If ? "金币 x" + IW.toLocaleString() : 2 === If ? "金砖 x" + IW.toLocaleString() : 3 === If ? (JB[IK] || "物品#" + IK) + " x" + IW : "类型" + If + "#" + IK + " x" + IW;
  }).join("、") : "-";
  const JS = Ib => JB[Ib] || "物品" + Ib;
  const JT = Ib => {
    const If = Ib || {};
    const IK = If.body || If;
    const IW = IK.roleCar || IK.rolecar || {};
    const IC = IW.carDataMap || IW.cardatamap;
    let Iy = [];
    if (IC && "object" == typeof IC) {
      Iy = Object.keys(IC).sort((IY, Im) => {
        const IE = Number(IY);
        const IX = Number(Im);
        return isNaN(IE) || isNaN(IX) ? String(IY).localeCompare(String(Im)) : IE - IX;
      }).map(IY => ({
        ...(IC[IY] || {}),
        id: String(IY),
        key: String(IY)
      }));
    } else {
      let IY = IK.cars || IK.list || IK.data || [];
      Array.isArray(IY) || "object" != typeof IY || (IY = Object.values(IY));
      Iy = (Array.isArray(IY) ? IY : []).map((Im, IE) => {
        const IX = String(Im?.["id"] ?? Im?.["carId"] ?? IE);
        const IG = {
          ...Im,
          id: IX,
          key: IX
        };
        return IG;
      });
      Iy.sort((Im, IE) => {
        {
          const IG = Number(Im.id);
          const IA = Number(IE.id);
          return isNaN(IG) || isNaN(IA) ? String(Im.id).localeCompare(String(IE.id)) : IG - IA;
        }
      });
    }
    return Iy;
  };
  const JR = Ib => {
    const II = Ib?.["battleTeam"]?.["name"];
    return !(!II || "string" != typeof II || "" === II.trim()) || 0 !== Number(Ib?.["sendAt"] || 0);
  };
  const JZ = Ib => {
    {
      const IK = Ib?.["battleTeam"];
      if (IK) {
        {
          const IW = IK.sendAt || IK.startTime || IK.createTime || IK.time;
          if (IW && Number(IW) > 0) {
            return Number(IW);
          }
        }
      }
      return Number(Ib?.["sendAt"] || 0);
    }
  };
  const JU = (Ib, II, If) => {
    if (!Ib || !Ib.enabled) {
      return true;
    }
    if ("grade" === Ib.type) {
      return Number(II?.["color"] || 0) >= Number(Ib.value || 0);
    }
    const IK = ((IW, IC) => {
      if (!Array.isArray(IW)) {
        return 0;
      }
      const Iy = nA[IC];
      return Iy ? IW.reduce((IY, Im) => 2 === Iy.itemType && 2 === Im.type || 3 === Iy.itemType && 3 === Im.type && Im.itemId === Iy.itemId ? IY + Number(Im.value || 0) : IY, 0) : 0;
    })(If, Ib.type);
    return IK >= Number(Ib.value || 0);
  };
  const JN = (Ib, II) => {
    {
      if ((IW => {
        const IC = Array.isArray(IW?.["rewards"]) ? IW.rewards : [];
        const Iy = nk;
        const IY = (Iy.andConditions || []).filter(IE => IE.enabled);
        if (IY.length > 0 && !IY.every(IE => JU(IE, IW, IC))) {
          return false;
        }
        const Im = (Iy.orConditions || []).filter(IE => IE.enabled);
        return 0 === Im.length ? IY.length > 0 : Im.some(IE => JU(IE, IW, IC));
      })(Ib)) {
        return true;
      }
      const IK = Array.isArray(Ib?.["rewards"]) ? Ib.rewards : [];
      return Jz(IK);
    }
  };
  const Ju = 14400000;
  const JF = Ib => {
    const II = JZ(Ib);
    if (!II) {
      return false;
    }
    const If = II < 1000000000000 ? 1000 * II : II;
    return Date.now() - If >= Ju;
  };
  const Jp = async Ib => {
    {
      nI = Ib;
      const IK = document.getElementById("qa-car-content");
      if (!IK) {
        return;
      }
      const IW = window.ROLE?.["items"] || {};
      const IC = JT(Ib);
      const Iy = J9();
      const IY = RZ(IW, 35002);
      const Im = J5();
      const IE = J7();
      const IX = Im && IE.ok && Iy < 4;
      const IG = IC.filter(Ig => !JR(Ig) && 0 === Number(Ig.refreshCount ?? 0)).length;
      if (0 === IC.length) {
        return void (IK.innerHTML = "<div class=\"helper-text\">暂无可用车辆</div>");
      }
      const IA = IC.filter(Ig => JR(Ig));
      IC.filter(Ig => !JR(Ig));
      IA.filter(JF);
      const IQ = "\n    <div class=\"car-status-bar\">\n      <div class=\"status-item\">\n        <span class=\"status-label\">活动状态</span>\n        <span class=\"status-value " + (Im ? "active" : "inactive") + "\">\n          " + (Im ? "进行中 (" + J8() + ")" : "已结束 (" + J8() + ")") + "\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">发车时间</span>\n        <span class=\"status-value " + (IE.ok ? "active" : "inactive") + "\">\n          " + IE.text + "\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">今日发车</span>\n        <span class=\"status-value " + (Iy >= 4 ? "inactive" : "active") + "\">\n          " + Iy + "/4\n        </span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">刷新券</span>\n        <span class=\"status-value\">" + IY + "</span>\n      </div>\n      <div class=\"status-item\">\n        <span class=\"status-label\">免费刷新</span>\n        <span class=\"status-value " + (IG > 0 ? "active" : "") + "\">" + IG + " 辆</span>\n      </div>\n    </div>\n  ";
      IK.innerHTML = "\n    " + IQ + "\n    <div class=\"car-list\">\n      " + IC.map(Ig => {
        const Id = Number(Ig.color || 0);
        const c0 = JR(Ig);
        const c1 = JF(Ig);
        const c2 = JP[Id] || "未知";
        const c3 = JD[Id] || "#6b7280";
        const c4 = Jz(Ig.rewards);
        !Ig.rewards || JM(Ig.rewards);
        const c5 = !IX;
        const c6 = Im ? IE.ok ? Iy >= 4 ? "今日次数已满" : "" : IE.text : "非活动时间";
        const c7 = String(Ig.id);
        const c8 = !!nX[c7];
        const c9 = Id >= 5 ? c8 ? "已选护卫" : "可携带" : "—";
        const cP = c8 ? "has-helper" : "";
        return "\n          <div class=\"car-item grade-" + Id + "\" data-car-id=\"" + Ig.id + "\">\n            <div class=\"car-item-row\">\n              <span class=\"car-grade-icon\" style=\"color:" + c3 + "\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"/></svg></span>\n              <span class=\"car-badge grade-badge\" style=\"color:" + c3 + ";border-color:" + c3 + "\">" + c2 + "</span>\n              <span class=\"car-name\">车辆 #" + Ig.id + "</span>\n            </div>\n            <div class=\"car-meta-row\">\n              <span class=\"meta-k\">品阶</span>\n              <span class=\"meta-v\" style=\"color:" + c3 + "\">" + c2 + "</span>\n              <span class=\"meta-k\">状态</span>\n              <span class=\"meta-v\">" + (c0 ? c1 ? "可收车" : "行驶中" : "未发车") + "</span>\n              <span class=\"meta-k\">帮手</span>\n              <span class=\"meta-v " + cP + "\">" + c9 + "</span>\n              <span class=\"meta-k\">奖励</span>\n              <span class=\"meta-v reward-trigger " + (c4 ? "has-big-prize" : "") + "\" data-car-id=\"" + Ig.id + "\">\n                " + (c4 ? "含大奖" : "查看") + "\n              </span>\n            </div>\n            <div class=\"car-actions\">\n              " + (c0 ? "\n                " + (c1 ? "\n                  <button class=\"btn btn-small btn-success\" data-action=\"car-single-claim\" data-car-id=\"" + Ig.id + "\">收车</button>\n                " : "\n                  <span class=\"car-countdown\">剩余 " + (cD => {
          if (cD <= 0) {
            return "可收车";
          }
          const cv = Math.ceil(cD / 1000);
          const cB = Math.floor(cv / 3600);
          const cz = Math.floor(cv % 3600 / 60);
          return cB > 0 ? cB + "时" + cz + "分" : cz + "分";
        })((cD => {
          const cv = JZ(cD);
          return cv ? (cv < 1000000000000 ? 1000 * cv : cv) + Ju - Date.now() : 0;
        })(Ig)) + "</span>\n                ") + "\n              " : "\n                <button class=\"btn btn-small btn-primary\" data-action=\"car-single-send\" data-car-id=\"" + Ig.id + "\"\n                  " + (c5 ? "disabled title=\"" + c6 + "\"" : "") + ">" + (c8 ? "发车(带护卫)" : "发车") + "</button>\n                <button class=\"btn btn-small " + (0 === Number(Ig.refreshCount ?? 0) ? "btn-success" : "btn-secondary") + "\"\n                  data-action=\"car-single-refresh\" data-car-id=\"" + Ig.id + "\">\n                  " + (0 === Number(Ig.refreshCount ?? 0) ? "免费刷新" : "刷新") + "\n                </button>\n              ") + "\n              " + (Id >= 5 && !c0 ? "\n                <button class=\"btn btn-small " + (c8 ? "btn-warning" : "btn-secondary") + "\" data-action=\"car-single-helper\" data-car-id=\"" + Ig.id + "\"\n                  " + (c5 ? "disabled" : "") + ">" + (c8 ? "换护卫" : "护卫") + "</button>\n              " : "") + "\n            </div>\n          </div>\n        ";
      }).join("") + "\n    </div>\n  ";
      const Ix = IK.cloneNode(true);
      IK.parentNode.replaceChild(Ix, IK);
      let Ik = null;
      Ix.addEventListener("mouseenter", Ig => {
        {
          const Id = Ig.target.closest(".reward-trigger");
          Id && (Ik = setTimeout(() => {
            const c0 = Id.getAttribute("data-car-id");
            const c1 = IC.find(c2 => String(c2.id) === String(c0));
            c1 && c1.rewards && JJ(c1, Ig, "hover");
          }, 150));
        }
      }, true);
      Ix.addEventListener("mouseleave", Ig => {
        Ig.target.closest(".reward-trigger") && (Ik && (clearTimeout(Ik), Ik = null), JV && "hover" === JV.dataset.trigger && setTimeout(() => {
          JV && !JV.matches(":hover") && (JV.remove(), JV = null);
        }, 100));
      }, true);
      Ix.addEventListener("click", Ig => {
        const IL = Ig.target.closest(".reward-trigger");
        if (IL) {
          Ig.preventDefault();
          Ig.stopPropagation();
          Ik && (clearTimeout(Ik), Ik = null);
          const Id = IL.getAttribute("data-car-id");
          const c0 = IC.find(c1 => String(c1.id) === String(Id));
          c0 && c0.rewards && JJ(c0, Ig, "click");
        }
      });
    }
  };
  let JV = null;
  const JJ = (Ib, II, If = "click") => {
    JV && (JV.remove(), JV = null);
    const IW = (Ib.rewards || []).map(IA => {
      const IQ = (Ig => {
        const IL = Ig.type || 0;
        const Id = Ig.itemId || 0;
        return 1 === IL ? "金币" : 2 === IL ? "金砖" : JB[Id] || "物品#" + Id;
      })(IA);
      const Ix = (IA.value || 0).toLocaleString();
      var Ik;
      return "<div class=\"reward-row " + ((Ik = IA) && Jv.some(Ig => Ik.type === Ig.type && (0 === Ig.itemId || Ik.itemId === Ig.itemId) && Number(Ik.value || 0) >= Ig.minValue) ? "is-big-prize" : "") + "\"><span class=\"name\">" + IQ + "</span><span class=\"value\">x" + Ix + "</span></div>";
    }).join("");
    const IC = document.createElement("div");
    IC.className = "car-reward-popup";
    IC.dataset.trigger = If;
    IC.innerHTML = "\n    <div class=\"popup-header\">车辆奖励详情</div>\n    <div class=\"popup-content\">" + (IW || "<div class=\"no-rewards\">暂无奖励信息</div>") + "</div>\n  ";
    const Iy = II.target.getBoundingClientRect();
    const IY = Math.min(Iy.left, window.innerWidth - 280);
    IC.style.left = IY + "px";
    IC.style.top = Iy.bottom + 8 + "px";
    const Im = document.querySelector(".qa-root");
    Im ? Im.appendChild(IC) : document.body.appendChild(IC);
    JV = IC;
    const IE = () => {
      {
        JV === IC && (IC.remove(), JV = null);
        document.removeEventListener("click", IX);
        IC.removeEventListener("mouseleave", IG);
      }
    };
    const IX = IA => {
      {
        IC.contains(IA.target) || II.target.contains(IA.target) || IE();
      }
    };
    const IG = () => {
      "hover" === If && setTimeout(() => {
        {
          const IQ = II.target.closest(".reward-trigger");
          IC.matches(":hover") || IQ && IQ.matches(":hover") || IE();
        }
      }, 100);
    };
    "hover" === If && IC.addEventListener("mouseleave", IG);
    setTimeout(() => {
      document.addEventListener("click", IX);
    }, 50);
  };
  const JH = async () => {
    try {
      {
        const II = await Rz("car_getrolecar", {});
        await Jp(II);
        TQ("获取赛车信息成功", "success");
        return II;
      }
    } catch (If) {
      TQ("获取赛车信息失败: " + If.message, "error");
      return null;
    }
  };
  const Jh = async Ib => {
    try {
      const II = await Rz("car_refresh", {
        carId: String(Ib)
      });
      const If = II?.["carData"] || II?.["body"]?.["carData"] || II?.["car"] || II?.["body"]?.["car"] || {};
      const IK = If.rewards || [];
      const IW = IK.length > 0 ? JM(IK) : "无奖励信息";
      const IC = Number(If.color || 0);
      const Iy = JP[IC] || "未知";
      const IY = Jz(IK);
      const Im = IY ? "刷新成功【" + Iy + "】含大奖！\n" + IW : "刷新成功【" + Iy + "】\n" + IW;
      await JH();
      TQ(Im, IY ? "success" : "info");
      return II;
    } catch (IE) {
      {
        throw TQ("刷新失败: " + IE.message, "error"), IE;
      }
    }
  };
  const JO = async (Ib, II = null) => {
    if (!J5()) {
      return void TQ("非活动时间（周一~周三）", "warning");
    }
    if (!J6()) {
      const Iy = J7();
      return void TQ("发车时间限制: " + Iy.text, "warning");
    }
    if (!(J9() < 4)) {
      return void TQ("今日发车次数已满（4/4）", "warning");
    }
    const If = JT(nI).find(IY => String(IY.id) === String(Ib));
    const IK = Number(If?.["color"] || 0);
    const IW = JP[IK] || "未知";
    const IC = null !== II ? II : nX[Ib] || 0;
    try {
      const IY = await Rz("car_send", {
        carId: String(Ib),
        helperId: Number(IC),
        text: "",
        isUpgrade: false
      });
      Jm(Ib);
      const Im = "【" + IW + "】车辆已发出" + (IC ? "(带护卫)" : "");
      await JH();
      TQ(Im, "success");
      return IY;
    } catch (IE) {
      throw TQ("发车失败: " + IE.message, "error"), IE;
    }
  };
  const Jj = async Ib => {
    {
      try {
        const If = await Rz("car_claim", {
          carId: String(Ib)
        });
        await JH();
        TQ("收车成功", "success");
        return If;
      } catch (IK) {
        throw TQ("收车失败: " + IK.message, "error"), IK;
      }
    }
  };
  const Jq = [20, 21, 22, 23, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 78, 82, 86, 90, 94, 99, 104, 109, 114, 119, 126, 133, 140, 147, 154, 163, 172, 181, 190, 199, 210, 221, 232, 243, 369, 393, 422, 457, 498, 548, 607, 678, 763, 865, 1011];
  const Jw = async () => {
    {
      const II = nI ? JT(nI).filter(JF) : [];
      if (0 === II.length) {
        return void TQ("没有可收的车辆", "info");
      }
      let If = 0;
      for (const IK of II) try {
        {
          await Jj(IK.id);
          If++;
          await R4(300);
        }
      } catch (IC) {}
      If > 0 && (TQ("成功收取" + If + "辆车", "success"), await JH(), await (async () => {
        try {
          {
            let Im = RZ(window.ROLE?.["items"], 35009);
            if (Im < Jq[0]) {
              return 0;
            }
            const IE = nI?.["body"] || nI || {};
            const IX = IE.roleCar || IE.rolecar || {};
            let IG = Number(IX.researchLevel || IX.researchlevel || 0);
            let IA = 0;
            for (; IG < Jq.length && Im >= Jq[IG];) {
              try {
                const IQ = {
                  researchId: 1
                };
                await Rz("car_research", IQ);
                IG++;
                IA++;
                TQ("改装升级 Lv." + IG, "success", 1000);
                await R4(300);
                Im = RZ(window.ROLE?.["items"], 35009);
              } catch (Ix) {
                break;
              }
            }
            IA > 0 && (TQ("改装升级" + IA + "次，等级: " + IG, "success"), await (async () => {
              try {
                const Ik = nI?.["body"] || nI || {};
                const Ig = (Ik.roleCar || Ik.rolecar || {}).partConsumeRewardMap || {};
                const IL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                let Id = 0;
                let c0 = 0;
                for (const c1 of IL) if (true !== Ig[c1]) {
                  try {
                    {
                      const c3 = {
                        rewardId: c1
                      };
                      const c4 = await Rz("car_claimpartconsumereward", c3);
                      const c5 = (c4?.["body"]?.["reward"] || c4?.["reward"] || []).reduce((c6, c7) => 3 === c7.type && 35011 === c7.itemId ? c6 + Number(c7.value || 0) : c6, 0);
                      c5 > 0 && (Id++, c0 += c5);
                      await R4(200);
                    }
                  } catch (c6) {}
                }
                if (Id > 0) {
                  const c7 = RZ(window.ROLE?.["items"], 35011);
                  TQ("领取改装奖励 x" + Id + "，获得改装券 x" + c0 + "，背包共 " + c7 + " 张", "success", 1500);
                }
                return Id;
              } catch (c8) {
                return 0;
              }
            })());
            return IA;
          }
        } catch (Ik) {
          return 0;
        }
      })());
    }
  };
  const Jb = async () => {
    {
      try {
        {
          if (!J5()) {
            return void TQ("当前非活动时间（周一到周三）", "info");
          }
          if (!J6()) {
            return void TQ("当前不在发车时间段（6:00-20:00）", "info");
          }
          await JH();
          const II = JT(nI);
          if (0 === II.length) {
            return void TQ("没有可用的车辆", "info");
          }
          let If = RZ(window.ROLE?.["items"], 35002);
          const IK = J9();
          if (IK >= 4) {
            return void TQ("今日发车次数已达上限（4次）", "info");
          }
          let IW = 0;
          for (const IC of II) {
            {
              if (JR(IC)) {
                continue;
              }
              if (IK + IW >= 4) {
                break;
              }
              if (JN(IC)) {
                {
                  await JO(IC.id);
                  IW++;
                  await R4(500);
                  continue;
                }
              }
              let IY = false;
              const Im = 0 === Number(IC.refreshCount ?? 0);
              if (If >= 6) {
                IY = true;
              } else {
                if (!Im) {
                  await JO(IC.id);
                  IW++;
                  await R4(500);
                  continue;
                }
                IY = true;
              }
              for (; IY;) {
                If = RZ(window.ROLE?.["items"], 35002);
                await Jh(IC.id);
                await R4(500);
                const IX = JT(nI).find(IG => IG.id === IC.id);
                if (!IX) {
                  break;
                }
                if (JN(IX)) {
                  await JO(IX.id);
                  IW++;
                  break;
                }
                If = RZ(window.ROLE?.["items"], 35002);
                If >= 6 ? IY = true : (await JO(IX.id), IW++, IY = false);
                await R4(500);
              }
            }
          }
        }
      } catch (IA) {}
    }
  };
  let JI = null;
  let Jc = [];
  let Jf = null;
  let JK = [];
  const JW = Ib => {
    const II = Number(Ib || 0);
    return II >= 100000000 || II >= 10000000 ? (II / 100000000).toFixed(2) + "亿" : II >= 10000 ? (II / 10000).toFixed(1) + "万" : II.toString();
  };
  const JC = async Ib => {
    Jf = Ib;
    try {
      const II = await Rz("legion_getinfo", {});
      const If = Object.values(II?.["info"]?.["members"] || {});
      const IK = await Rz("car_getmemberhelpingcnt", {});
      const IW = IK?.["memberHelpingCntMap"] || IK?.["body"]?.["memberHelpingCntMap"] || {};
      if (JK = If.map(IC => {
        const Iy = Number(IW[String(IC.roleId)] ?? 0);
        return {
          roleId: String(IC.roleId),
          name: IC.name || IC.nickname || "玩家" + IC.roleId,
          power: IC.power || 0,
          powerFormatted: JW(IC.power),
          helpingCount: Iy,
          disabled: Iy >= 4
        };
      }).sort((IC, Iy) => IC.disabled !== Iy.disabled ? IC.disabled ? 1 : -1 : Iy.power - IC.power), Jc = JK.filter(IC => !IC.disabled).map(IC => ({
        label: IC.name + "（战力 " + IC.powerFormatted + " · 已护卫 " + IC.helpingCount + "/4）",
        value: IC.roleId
      })), 0 === Jc.length) {
        return;
      }
      Jy();
    } catch (IC) {}
  };
  const Jy = () => {
    const II = document.querySelector(".car-helper-modal");
    if (II && II.remove(), !JK || 0 === JK.length) {
      return;
    }
    JI = Jc.length > 0 ? Jc[0].value : null;
    const If = document.createElement("div");
    If.className = "car-helper-modal qa-auth-overlay";
    If.innerHTML = "\n    <div class=\"car-helper-body qa-auth-modal\" style=\"width:400px;text-align:left;max-height:80vh;overflow:hidden;display:flex;flex-direction:column;\">\n      <div class=\"qa-auth-title\" style=\"font-size:16px;flex-shrink:0;\">选择护卫</div>\n      <div class=\"helper-list\" style=\"flex:1;overflow-y:auto;margin:12px 0;\">\n        " + JK.map(IW => "\n          <div class=\"helper-item " + (IW.disabled ? "disabled" : "") + " " + (IW.roleId === JI ? "selected" : "") + "\"\n               data-role-id=\"" + IW.roleId + "\" " + (IW.disabled ? "data-disabled=\"true\"" : "") + ">\n            <div class=\"helper-info\">\n              <div class=\"helper-name\">" + IW.name + "</div>\n              <div class=\"helper-meta\">\n                <span class=\"helper-power\">战力 " + IW.powerFormatted + "</span>\n                <span class=\"helper-count " + (IW.helpingCount >= 4 ? "full" : "") + "\">已护卫 " + IW.helpingCount + "/4</span>\n              </div>\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n      <div style=\"font-size:12px;color:#6b7280;margin-bottom:16px;flex-shrink:0;\">\n        说明：已护卫满 4 次的成员显示为灰色，无法选择。\n      </div>\n      <div style=\"display:flex;gap:8px;justify-content:flex-end;flex-shrink:0;\">\n        <button class=\"btn btn-secondary\" id=\"qa-helper-cancel\">取消</button>\n        <button class=\"btn btn-primary\" id=\"qa-helper-confirm\">确定</button>\n      </div>\n    </div>\n  ";
    const IK = document.querySelector(".qa-root");
    IK ? IK.appendChild(If) : document.body.appendChild(If);
    If.querySelectorAll(".helper-item:not([data-disabled])").forEach(IW => {
      IW.addEventListener("click", () => {
        {
          If.querySelectorAll(".helper-item").forEach(Iy => Iy.classList.remove("selected"));
          IW.classList.add("selected");
          JI = IW.getAttribute("data-role-id");
        }
      });
    });
    If.querySelector("#qa-helper-cancel").addEventListener("click", () => {
      If.remove();
    });
    If.querySelector("#qa-helper-confirm").addEventListener("click", () => {
      JI && (JY(), If.remove());
    });
    If.addEventListener("click", IW => {
      IW.target === If && If.remove();
    });
  };
  const JY = async () => {
    JI && Jf && (nX[Jf] = JI, JK.find(II => II.roleId === JI), nI && (await Jp(nI)));
  };
  const Jm = Ib => {
    {
      delete nX[Ib];
    }
  };
  const JE = () => {
    {
      const II = document.querySelector(".car-settings-modal");
      II && II.remove();
      nk = nx();
      const If = document.createElement("div");
      If.className = "car-settings-modal qa-auth-overlay";
      If.innerHTML = "\n    <div class=\"car-settings-body qa-auth-modal\" style=\"width:340px;text-align:left;max-height:70vh;overflow:hidden;display:flex;flex-direction:column;\">\n      <div class=\"qa-auth-title\" style=\"font-size:16px;flex-shrink:0;\">发车条件设置</div>\n\n      <div class=\"settings-content\" style=\"flex:1;overflow-y:auto;margin:12px 0;padding-right:8px;\">\n        <!-- AND 条件区域 -->\n        <div class=\"condition-section\">\n          <div class=\"section-title\">必须同时满足 (AND)</div>\n          <div id=\"and-conditions-list\"></div>\n          <button class=\"btn btn-small btn-secondary add-condition-btn\" data-group=\"and\">[+] 添加必须条件</button>\n        </div>\n\n        <!-- OR 条件区域 -->\n        <div class=\"condition-section\" style=\"margin-top:16px;\">\n          <div class=\"section-title\">并满足任一条件 (OR)</div>\n          <div id=\"or-conditions-list\"></div>\n          <button class=\"btn btn-small btn-secondary add-condition-btn\" data-group=\"or\">[+] 添加任一条件</button>\n        </div>\n\n        <!-- 刷新次数设置 -->\n        <div class=\"refresh-limit-section\" style=\"margin-top:16px;display:flex;align-items:center;gap:12px;\">\n          <span style=\"font-weight:500;\">单车最大刷新:</span>\n          <button class=\"btn btn-small btn-secondary\" id=\"refresh-minus\">-</button>\n          <span id=\"refresh-count\" style=\"min-width:24px;text-align:center;font-weight:600;\">" + nk.maxRefreshPerCar + "</span>\n          <button class=\"btn btn-small btn-secondary\" id=\"refresh-plus\">+</button>\n        </div>\n      </div>\n\n      <div style=\"display:flex;gap:8px;justify-content:space-between;flex-shrink:0;margin-top:12px;\">\n        <button class=\"btn btn-secondary\" id=\"car-settings-reset\">恢复默认</button>\n        <div style=\"display:flex;gap:8px;\">\n          <button class=\"btn btn-secondary\" id=\"car-settings-cancel\">取消</button>\n          <button class=\"btn btn-primary\" id=\"car-settings-save\">保存</button>\n        </div>\n      </div>\n    </div>\n  ";
      const IK = document.querySelector(".qa-root");
      IK ? IK.appendChild(If) : document.body.appendChild(If);
      JX(If);
      JA(If);
    }
  };
  const JX = Ib => {
    const II = Ib.querySelector("#and-conditions-list");
    const If = Ib.querySelector("#or-conditions-list");
    II.innerHTML = JG(nk.andConditions, "and");
    If.innerHTML = JG(nk.orConditions, "or");
  };
  const JG = (Ib, II) => Ib && 0 !== Ib.length ? Ib.map((If, IK) => {
    const IW = nA[If.type];
    const IC = IW?.["label"] || If.type;
    const Iy = "grade" === If.type;
    return "\n      <div class=\"condition-row\" data-group=\"" + II + "\" data-index=\"" + IK + "\">\n        <label class=\"condition-checkbox\">\n          <input type=\"checkbox\" " + (If.enabled ? "checked" : "") + " data-field=\"enabled\">\n        </label>\n        <span class=\"condition-label\">" + IC + " ≥</span>\n        " + (Iy ? "\n          <select class=\"condition-input\" data-field=\"value\">\n            <option value=\"1\" " + (1 == If.value ? "selected" : "") + ">普通</option>\n            <option value=\"2\" " + (2 == If.value ? "selected" : "") + ">稀有</option>\n            <option value=\"3\" " + (3 == If.value ? "selected" : "") + ">史诗</option>\n            <option value=\"4\" " + (4 == If.value ? "selected" : "") + ">传说</option>\n            <option value=\"5\" " + (5 == If.value ? "selected" : "") + ">神话</option>\n            <option value=\"6\" " + (6 == If.value ? "selected" : "") + ">传奇</option>\n          </select>\n        " : "\n          <input type=\"number\" class=\"condition-input\" value=\"" + If.value + "\" data-field=\"value\" min=\"0\">\n        ") + "\n        <button class=\"btn btn-small btn-danger remove-condition-btn\" data-group=\"" + II + "\" data-index=\"" + IK + "\">-</button>\n      </div>\n    ";
  }).join("") : "<div class=\"no-conditions\" style=\"color:#9ca3af;font-size:12px;padding:8px 0;\">暂无条件</div>";
  const JA = Ib => {
    {
      const IK = Ib.querySelector(".car-settings-body");
      IK.addEventListener("click", IW => {
        IW.stopPropagation();
      });
      IK.addEventListener("click", IW => {
        const IC = IW.target.closest(".add-condition-btn");
        if (IC) {
          IW.preventDefault();
          const IY = IC.dataset.group;
          return void JQ(IC, IY, Ib);
        }
        const Iy = IW.target.closest(".remove-condition-btn");
        if (Iy) {
          IW.preventDefault();
          const Im = Iy.dataset.group;
          const IE = parseInt(Iy.dataset.index);
          ("and" === Im ? nk.andConditions : nk.orConditions).splice(IE, 1);
          return void JX(Ib);
        }
      });
      Ib.querySelector("#refresh-minus").addEventListener("click", IW => {
        IW.stopPropagation();
        nk.maxRefreshPerCar > 1 && (nk.maxRefreshPerCar--, Ib.querySelector("#refresh-count").textContent = nk.maxRefreshPerCar);
      });
      Ib.querySelector("#refresh-plus").addEventListener("click", IW => {
        {
          IW.stopPropagation();
          nk.maxRefreshPerCar < 20 && (nk.maxRefreshPerCar++, Ib.querySelector("#refresh-count").textContent = nk.maxRefreshPerCar);
        }
      });
      Ib.addEventListener("change", IW => {
        const IC = IW.target.closest(".condition-row");
        if (!IC) {
          return;
        }
        const Iy = IC.dataset.group;
        const IY = parseInt(IC.dataset.index);
        const Im = IW.target.dataset.field;
        const IE = "and" === Iy ? nk.andConditions : nk.orConditions;
        IE[IY] && ("enabled" === Im ? IE[IY].enabled = IW.target.checked : "value" === Im && (IE[IY].value = parseInt(IW.target.value) || 0));
      });
      Ib.querySelector("#car-settings-reset").addEventListener("click", () => {
        const IW = {
          type: "gold",
          enabled: true,
          value: 2000
        };
        const IC = {
          type: "jade",
          enabled: true,
          value: 2000
        };
        const Iy = {
          type: "recruit",
          enabled: true,
          value: 10
        };
        const IY = {
          type: "grade",
          enabled: true,
          value: 5
        };
        const Im = {
          andConditions: [],
          orConditions: [IW, IC, Iy, IY],
          maxRefreshPerCar: 5
        };
        nk = Im;
        JX(Ib);
        Ib.querySelector("#refresh-count").textContent = nk.maxRefreshPerCar;
        TQ("已恢复默认配置", "info");
      });
      Ib.querySelector("#car-settings-cancel").addEventListener("click", () => {
        nk = nx();
        Ib.remove();
        nI && Jp(nI);
      });
      Ib.querySelector("#car-settings-save").addEventListener("click", () => {
        (IC => {
          {
            try {
              {
                const IY = nQ();
                localStorage.setItem(nG + "_" + IY, JSON.stringify(IC));
              }
            } catch (IE) {}
          }
        })(nk);
        Ib.remove();
        TQ("发车条件已保存", "success");
        nI && Jp(nI);
      });
      Ib.addEventListener("click", IW => {
        {
          IW.target === Ib && (nk = nx(), Ib.remove(), nI && Jp(nI));
        }
      });
    }
  };
  const JQ = (Ib, II, If) => {
    {
      const IC = document.querySelector(".condition-add-menu");
      IC && IC.remove();
      const Iy = "and" === II ? nk.andConditions : nk.orConditions;
      const IY = Iy.map(IA => IA.type);
      const Im = document.createElement("div");
      Im.className = "condition-add-menu";
      Im.style.cssText = "position:fixed;background:var(--qa-bg-1, #fff);border:1px solid var(--qa-border, #e5e7eb);border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);padding:4px 0;z-index:100002;min-width:120px;";
      const IE = Object.entries(nA).filter(([IA]) => !IY.includes(IA));
      0 === IE.length ? Im.innerHTML = "<div style=\"padding:8px 12px;color:#9ca3af;font-size:12px;\">已添加所有条件</div>" : Im.innerHTML = IE.map(([IA, IQ]) => "\n      <div class=\"condition-menu-item\" data-type=\"" + IA + "\" style=\"padding:8px 12px;cursor:pointer;font-size:13px;transition:background 0.15s;color:var(--qa-text-1, #1f2937);\">\n        " + IQ.label + "\n      </div>\n    ").join("");
      const IX = Ib.getBoundingClientRect();
      Im.style.left = IX.left + "px";
      Im.style.top = IX.bottom + 4 + "px";
      const IG = If.querySelector(".car-settings-body");
      IG ? IG.appendChild(Im) : If.appendChild(Im);
      Im.querySelectorAll(".condition-menu-item").forEach(IA => {
        IA.addEventListener("mouseenter", () => IA.style.background = "#f3f4f6");
        IA.addEventListener("mouseleave", () => IA.style.background = "");
        IA.addEventListener("click", () => {
          const IQ = {
            grade: 5,
            recruit: 10,
            redFragment: 10,
            colorJade: 2,
            refreshTicket: 2
          };
          const Ix = IA.dataset.type;
          const Ik = IQ[Ix] ?? 2000;
          const Ig = {
            type: Ix,
            enabled: true,
            value: Ik
          };
          Iy.push(Ig);
          JX(If);
          Im.remove();
        });
      });
      setTimeout(() => {
        const IQ = Ix => {
          {
            Im.contains(Ix.target) || Ix.target === Ib || (Im.remove(), document.removeEventListener("click", IQ));
          }
        };
        document.addEventListener("click", IQ);
      }, 10);
    }
  };
  const Jx = async () => {
    if (!J5()) {
      return void TQ("当前非活动时间（周一到周三）", "warning");
    }
    if (!J6()) {
      return void TQ("当前不在发车时间段（6:00-20:00）", "warning");
    }
    await JH();
    const II = JT(nI);
    if (0 === II.length) {
      return void TQ("没有可用的车辆", "info");
    }
    const If = J9();
    if (If >= 4) {
      return void TQ("今日发车次数已达上限（4次）", "info");
    }
    const IK = nk.maxRefreshPerCar || 5;
    let IW = 0;
    let IC = RZ(window.ROLE?.["items"], 35002);
    for (const Iy of II) {
      {
        if (JR(Iy)) {
          continue;
        }
        if (If + IW >= 4) {
          break;
        }
        if (JN(Iy)) {
          await JO(Iy.id);
          IW++;
          await R4(500);
          continue;
        }
        let Im = 0;
        const IE = 0 === Number(Iy.refreshCount ?? 0);
        for (; Im < IK && (IC = RZ(window.ROLE?.["items"], 35002), 0 === Im && IE || !(IC < 1));) {
          {
            await Jh(Iy.id);
            Im++;
            await R4(500);
            const IG = JT(nI).find(IA => IA.id === Iy.id);
            if (!IG) {
              break;
            }
            if (JN(IG)) {
              await JO(IG.id);
              IW++;
              await R4(500);
              break;
            }
            if (Im >= IK) {
              await JO(IG.id);
              IW++;
              await R4(500);
              break;
            }
          }
        }
      }
    }
    await JH();
    TQ("一键发车完成，发出 " + IW + " 辆车", "success");
  };
  const Jk = {
    __proto__: null,
    claimAllCars: Jw,
    claimCar: Jj,
    fetchCarInfo: JH,
    getItemName: JS,
    oneClickSend: Jx,
    refreshCar: Jh,
    renderCarInfo: Jp,
    sendCar: JO,
    showCarSettingsModal: JE,
    showHelperDialog: JC,
    smartSendCar: Jb
  };
  var Jg = Object.freeze(Jk);
  let JL = null;
  let Jd = "";
  const H0 = {
    keywords: ["正义"],
    value: "正义联盟",
    priority: 4
  };
  const H1 = {
    keywords: ["龙盟", "龍盟"],
    value: "龙盟",
    priority: 3
  };
  const H2 = Ib => new Promise(II => {
    {
      if (!Ib) {
        return void II(null);
      }
      const IK = new Image();
      IK.crossOrigin = "anonymous";
      IK.onload = () => II(IK);
      IK.onerror = () => II(null);
      IK.src = Ib;
      setTimeout(() => II(null), 3000);
    }
  });
  const H3 = () => {
    const Ib = new Date();
    const II = Ib.getDay();
    const If = 0 === II ? 1 : 6 === II ? 0 : II + 1;
    const IK = new Date(Ib);
    IK.setDate(Ib.getDate() - If);
    return IK.getFullYear() + "/" + String(IK.getMonth() + 1).padStart(2, "0") + "/" + String(IK.getDate()).padStart(2, "0");
  };
  const H4 = Ib => Ib ? Ib >= 100000000 ? (Ib / 100000000).toFixed(2) + "亿" : Ib >= 10000 ? (Ib / 10000).toFixed(2) + "万" : Ib.toString() : "0";
  const H5 = Ib => undefined === Ib || -1 === Ib ? "--" : Ib.toFixed(0);
  const H6 = [{
    keywords: ["大联盟"],
    value: "大联盟",
    priority: 1
  }, H0, H1, {
    keywords: ["梦盟", "梦想之盟"],
    value: "梦盟",
    priority: 2
  }];
  const H7 = Ib => {
    {
      if (!Ib) {
        return "未知";
      }
      const If = H6.find(IK => IK.keywords.some(IW => Ib.includes(IW)));
      return If ? If.value : "未知";
    }
  };
  const H8 = Ib => {
    if (!Ib) {
      return 99;
    }
    const II = H6.find(If => If.keywords.some(IK => Ib.includes(IK)));
    return II ? II.priority : 99;
  };
  const H9 = Ib => [...Ib].sort((II, If) => {
    const IK = H8(II.announcement);
    const IW = H8(If.announcement);
    return IK !== IW ? IK - IW : (If.redQuench || 0) - (II.redQuench || 0);
  });
  const HP = (Ib, II = false) => {
    JL = Ib;
    const IK = document.getElementById("qa-salt-match-content");
    if (!IK) {
      return;
    }
    if (!Ib || !Ib.legionRankList || 0 === Ib.legionRankList.length) {
      return void (IK.innerHTML = "<div class=\"helper-text\">暂无盐场匹配数据</div>");
    }
    const IW = II ? Ib.legionRankList : H9(Ib.legionRankList);
    IK.innerHTML = "\n    <div class=\"salt-match-info\">\n      <div class=\"match-date-tag\">查询日期: " + Jd + "</div>\n      <div class=\"match-club-list\">\n        " + IW.map((IC, Iy) => "\n          <div class=\"match-club-item\">\n            <div class=\"club-main-row\">\n              <div class=\"club-rank\">#" + (Iy + 1) + "</div>\n              <div class=\"club-logo\">\n                <img src=\"" + (IC.logo || "") + "\" onerror=\"this.style.display='none'\" alt=\"\">\n              </div>\n              <div class=\"club-basic\">\n                <div class=\"club-name-row\">\n                  <span class=\"club-name\">" + (IC.name || "未知") + "</span>\n                  <span class=\"club-server\">" + (IC.serverId || "--") + "</span>\n                </div>\n                <div class=\"club-stats-row\">\n                  <span class=\"stat-tag power\">战力 " + H4(IC.power) + "</span>\n                  <span class=\"stat-tag red\">红淬 " + (IC.redQuench || 0) + "</span>\n                  " + ((IC.goldenScore ?? 0) > 0 ? "<span class=\"stat-tag score\">积分 " + H5(IC.goldenScore) + "</span>" : "") + "\n                </div>\n              </div>\n            </div>\n            <div class=\"club-detail-row\">\n              <div class=\"car-heads\">\n                " + [1, 2, 3].map(IY => {
      const Im = IC["memberImg" + IY] || "";
      const IE = IC["memberName" + IY] || "";
      const IX = IC["redno" + IY] || "0红";
      const IG = IC["hb" + IY];
      return "\n                    <div class=\"car-head-item\">\n                      <img src=\"" + Im + "\" class=\"car-head-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                      <span class=\"car-head-text\">" + (IE ? IE + ": " : "车" + IY + ": ") + IX + (undefined !== IG ? "/" + IG + "圣" : "") + "</span>\n                    </div>\n                  ";
    }).join("") + "\n              </div>\n            </div>\n            <div class=\"club-extra-row\">\n              <span class=\"alliance-tag " + H7(IC.announcement).replace(/联盟/g, "") + "\">" + H7(IC.announcement) + "</span>\n              " + (IC.announcement ? "<span class=\"announcement\" title=\"" + IC.announcement + "\">公告: " + (IC.announcement.length > 30 ? IC.announcement.substring(0, 30) + "..." : IC.announcement) + "</span>" : "") + "\n            </div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  ";
  };
  const HD = async Ib => {
    {
      Jd = Ib || H3();
      const IK = (() => {
        {
          const IE = new Date();
          return IE.getFullYear() + "/" + String(IE.getMonth() + 1).padStart(2, "0") + "/" + String(IE.getDate()).padStart(2, "0");
        }
      })();
      const IW = new Date().getHours();
      const IC = document.getElementById("qa-salt-match-date");
      IC && (IC.value = Jd);
      const Iy = document.getElementById("qa-salt-match-content");
      Iy && (Iy.innerHTML = "<div class=\"helper-text\">正在加载盐场匹配数据...</div>");
      try {
        let IY;
        if (Jd === IK && IW < 20) {
          const Im = await Rz("legion_getbattlefield", {});
          if (!Im?.["info"]) {
            Iy && (Iy.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>");
            return null;
          }
          const IE = {
            phase: Im.info.phase,
            battlefieldId: Im.info.battlefieldId
          };
          const IX = await Rz("legion_getopponent", IE);
          if (!IX?.["opponentList"]) {
            Iy && (Iy.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>");
            return null;
          }
          const IG = [];
          const IA = IX.opponentList;
          const IQ = 5;
          for (let Ik = 0; Ik < IA.length; Ik += IQ) {
            const Ig = IA.slice(Ik, Ik + IQ);
            Iy && (Iy.innerHTML = "<div class=\"helper-text\">正在查询俱乐部信息... (" + Math.min(Ik + IQ, IA.length) + "/" + IA.length + ")</div>");
            const IL = await Promise.all(Ig.map(async Id => {
              {
                try {
                  {
                    const c2 = {
                      legionId: Id.id
                    };
                    const c3 = await Rz("legion_getinfobyid", c2);
                    const c4 = Object.entries(c3?.["legionData"]?.["members"] || {});
                    const c5 = [];
                    const c6 = [];
                    const c7 = [];
                    for (let c9 = 0; c9 < Math.min(3, c4.length); c9++) {
                      const [, cP] = c4[c9];
                      undefined !== cP.custom?.["red_quench_cnt"] && c5.push(cP.custom.red_quench_cnt + "红");
                      c6.push(cP.headImg || "");
                      c7.push(cP.name || cP.nickName || "");
                    }
                    const c8 = {
                      ...Id,
                      logo: c3?.["legionData"]?.["logo"] || "",
                      redQuench: c3?.["legionData"]?.["quenchNum"] || 0,
                      power: c3?.["legionData"]?.["power"] || 0,
                      announcement: c3?.["legionData"]?.["announcement"] || "",
                      goldenScore: Id.goldenScore ?? 0,
                      goldenRank: Id.goldenRank ?? 0,
                      redno1: c5[0] || "0红",
                      redno2: c5[1] || "0红",
                      redno3: c5[2] || "0红",
                      memberImg1: c6[0] || "",
                      memberImg2: c6[1] || "",
                      memberImg3: c6[2] || "",
                      memberName1: c7[0] || "",
                      memberName2: c7[1] || "",
                      memberName3: c7[2] || ""
                    };
                    return c8;
                  }
                } catch (cD) {
                  const cv = {
                    ...Id,
                    redQuench: 0,
                    goldenScore: Id.goldenScore ?? 0,
                    goldenRank: Id.goldenRank ?? 0
                  };
                  return cv;
                }
              }
            }));
            IG.push(...IL);
            Ik + IQ < IA.length && (await new Promise(Id => Z7(Id, 200, "salt-match-batch-delay")));
          }
          const Ix = {
            legionRankList: IG
          };
          IY = Ix;
        } else {
          const Id = {
            date: Jd
          };
          const c0 = await Rz("legion_getwarrank", Id);
          if (!c0?.["legionRankList"]) {
            Iy && (Iy.innerHTML = "<div class=\"helper-text\">未查询到盐场匹配数据</div>");
            return null;
          }
          const c1 = [];
          const c2 = c0.legionRankList;
          const c3 = 5;
          for (let c5 = 0; c5 < c2.length; c5 += c3) {
            {
              const c7 = c2.slice(c5, c5 + c3);
              Iy && (Iy.innerHTML = "<div class=\"helper-text\">正在查询俱乐部信息... (" + Math.min(c5 + c3, c2.length) + "/" + c2.length + ")</div>");
              const c8 = await Promise.all(c7.map(async c9 => {
                try {
                  {
                    const cv = {
                      legionId: c9.id
                    };
                    const cB = await Rz("legion_getinfobyid", cv);
                    const cz = Object.entries(cB?.["legionData"]?.["members"] || {}).slice(0, 3);
                    const cM = await Promise.all(cz.map(async ([, cR]) => {
                      const cZ = undefined !== cR.custom?.["red_quench_cnt"] ? cR.custom.red_quench_cnt + "红" : "0红";
                      const cU = cR.headImg || "";
                      const cN = cR.name || cR.nickName || "";
                      const cu = cR.roleId || cR.id;
                      let cF = 0;
                      let cp = 0;
                      if (cu) {
                        try {
                          {
                            const cH = await Rz("rank_getroleinfo", {
                              bottleType: 0,
                              includeBottleTeam: false,
                              isSearch: false,
                              roleId: Number(cu)
                            });
                            cp = cH?.["roleInfo"]?.["power"] || 0;
                            for (const [, ch] of Object.entries(cH?.["roleInfo"]?.["heroes"] || {})) undefined !== ch.hB?.["active"] && cF++;
                          }
                        } catch (cO) {}
                      }
                      const cV = {
                        redQuench: cZ,
                        memberImg: cU,
                        memberName: cN,
                        holyBeast: cF,
                        memberPower: cp
                      };
                      return cV;
                    }));
                    const cS = {
                      redQuench: "0红",
                      memberImg: "",
                      memberName: "",
                      holyBeast: 0,
                      memberPower: 0
                    };
                    for (; cM.length < 3;) {
                      cM.push(cS);
                    }
                    const cT = {
                      ...c9,
                      logo: cB?.["legionData"]?.["logo"] || "",
                      redQuench: cB?.["legionData"]?.["quenchNum"] || 0,
                      power: cB?.["legionData"]?.["power"] || 0,
                      announcement: cB?.["legionData"]?.["announcement"] || "",
                      goldenScore: c9.goldenScore ?? 0,
                      redno1: cM[0].redQuench,
                      redno2: cM[1].redQuench,
                      redno3: cM[2].redQuench,
                      hb1: cM[0].holyBeast,
                      hb2: cM[1].holyBeast,
                      hb3: cM[2].holyBeast,
                      memberPower1: cM[0].memberPower,
                      memberPower2: cM[1].memberPower,
                      memberPower3: cM[2].memberPower,
                      memberImg1: cM[0].memberImg,
                      memberImg2: cM[1].memberImg,
                      memberImg3: cM[2].memberImg,
                      memberName1: cM[0].memberName,
                      memberName2: cM[1].memberName,
                      memberName3: cM[2].memberName
                    };
                    return cT;
                  }
                } catch (cR) {
                  {
                    const cZ = {
                      ...c9,
                      redQuench: 0,
                      goldenScore: c9.goldenScore ?? 0
                    };
                    return cZ;
                  }
                }
              }));
              c1.push(...c8);
              c5 + c3 < c2.length && (await new Promise(c9 => Z7(c9, 200, "salt-match-history-batch-delay")));
            }
          }
          const c4 = {
            legionRankList: c1
          };
          IY = c4;
        }
        Iy && (Iy.innerHTML = "<div class=\"helper-text\">正在获取积分数据...</div>");
        try {
          const c9 = await (async () => {
            const cD = (() => {
              {
                const cB = new Date();
                const cz = cB.getFullYear();
                const cM = cB.getMonth();
                let cS = null;
                let cT = 0;
                for (let cZ = 1; cZ <= 31; cZ++) {
                  {
                    const cU = new Date(cz, cM, cZ);
                    if (cU.getMonth() !== cM) {
                      break;
                    }
                    if (6 === cU.getDay() && 4 === ++cT) {
                      cS = cU;
                      break;
                    }
                  }
                }
                if (!cS) {
                  return "";
                }
                const cR = new Date(cS);
                cR.setDate(cS.getDate() + 1);
                return "" + String(cR.getFullYear()).slice(-2) + String(cR.getMonth() + 1).padStart(2, "0") + String(cR.getDate()).padStart(2, "0");
              }
            })();
            if (!cD) {
              return [];
            }
            const cv = [];
            for (let cB = 1; cB <= 1000; cB += 100) {
              try {
                const cz = await Rz("saltroad_getsaltroadwartotalrank", {
                  date: cD,
                  startRank: cB,
                  endRank: Math.min(cB + 99, 1000)
                });
                const cM = cz?.["_rawData"]?.["legionList"] || cz?.["legionList"] || cz?.["list"] || cz?.["data"] || [];
                cv.push(...cM.map(cS => ({
                  id: cS.id || cS.legionId,
                  rank: cS.rank,
                  score: cS.score
                })));
              } catch (cS) {}
            }
            return cv;
          })();
          if (c9.length > 0) {
            const cP = new Map(c9.map(cD => [cD.id, {
              rank: cD.rank,
              score: cD.score
            }]));
            IY.legionRankList = IY.legionRankList.map(cD => ({
              ...cD,
              goldenRank: cP.get(cD.id || cD.legionId)?.["rank"] || cD.goldenRank || 0,
              goldenScore: cP.get(cD.id || cD.legionId)?.["score"] ?? cD.goldenScore ?? 0
            }));
          }
        } catch (cD) {}
        HP(IY);
        return IY;
      } catch (cv) {
        Iy && (Iy.innerHTML = "<div class=\"helper-text\">获取数据失败，请重试</div>");
        return null;
      }
    }
  };
  const Hv = () => {
    {
      JL?.["legionRankList"] && (JL.legionRankList.sort((II, If) => (If.redQuench || 0) - (II.redQuench || 0)), HP(JL, true));
    }
  };
  const HB = () => {
    JL?.["legionRankList"] && (JL.legionRankList.sort((Ib, II) => (II.goldenScore || 0) - (Ib.goldenScore || 0)), HP(JL, true));
  };
  const HM = (Ib, II, If) => {
    {
      if (!II) {
        return [];
      }
      const IC = [];
      let Iy = "";
      for (const IY of II) {
        {
          const Im = Iy + IY;
          Ib.measureText(Im).width > If && Iy ? (IC.push(Iy), Iy = IY) : Iy = Im;
        }
      }
      Iy && IC.push(Iy);
      return IC;
    }
  };
  const HS = async () => {
    if (!JL?.["legionRankList"]) {
      return;
    }
    const II = {
      hour12: false
    };
    const If = (() => {
      {
        const c5 = "dark" === TR.theme;
        const c6 = {
          bg: c5 ? "#1a1a2e" : "#ffffff",
          text: c5 ? "#f9fafb" : "#000000",
          textSecondary: c5 ? "#9ca3af" : "#6b7280",
          headerBg: c5 ? "#374151" : "#f3f4f6",
          headerText: c5 ? "#d1d5db" : "#374151",
          border: c5 ? "#4b5563" : "#e5e7eb",
          zebraStripe: c5 ? "#2d2d44" : "#f9fafb",
          red: "#ef4444",
          purple: "#8b5cf6",
          footerText: c5 ? "#6b7280" : "#9ca3af"
        };
        return c6;
      }
    })();
    const IK = H9(JL.legionRankList);
    const IW = new Date().toLocaleString("zh-CN", II);
    const IC = IK.some(c4 => (c4.goldenScore ?? 0) > 0);
    const Iy = document.createElement("canvas");
    const IY = Iy.getContext("2d");
    const Im = 20;
    const IE = IC ? ["排名", "俱乐部", "区服", "战力", "红淬", "积分", "车头信息", "联盟", "公告"] : ["排名", "俱乐部", "区服", "战力", "红淬", "车头信息", "联盟", "公告"];
    const IX = IC ? [50, 160, 50, 90, 70, 70, 450, 70, 280] : [50, 160, 50, 90, 70, 450, 70, 360];
    const IG = IX[IX.length - 1] - 16;
    IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    const IA = IK.map(c4 => {
      const c5 = c4.announcement || "";
      const c6 = HM(IY, c5, IG);
      const c7 = 12 * Math.max(1, c6.length);
      return Math.max(60, c7 + 20);
    });
    const IQ = IX.reduce((c4, c5) => c4 + c5, 0) + 40;
    const Ix = IA.reduce((c4, c5) => c4 + c5, 0);
    const Ik = 90 + Ix + 40 + 30;
    Iy.width = 3 * IQ;
    Iy.height = 3 * Ik;
    IY.scale(3, 3);
    IY.fillStyle = If.bg;
    IY.fillRect(0, 0, IQ, Ik);
    IY.fillStyle = If.text;
    IY.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText("盐场匹配详情 - " + Jd, Im, 40);
    IY.fillStyle = If.headerBg;
    IY.fillRect(Im, 60, IQ - 40, 30);
    IY.fillStyle = If.headerText;
    IY.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let Ig = Im;
    IE.forEach((c4, c5) => {
      IY.fillText(c4, Ig + 8, 80);
      Ig += IX[c5];
    });
    const IL = IK.map(c4 => H2(c4.logo));
    const Id = IK.flatMap(c4 => [H2(c4.memberImg1), H2(c4.memberImg2), H2(c4.memberImg3)]);
    const [c0, ...c1] = await Promise.all([Promise.all(IL), ...Id]);
    const c2 = [];
    for (let c4 = 0; c4 < IK.length; c4++) {
      c2.push([c1[3 * c4], c1[3 * c4 + 1], c1[3 * c4 + 2]]);
    }
    IY.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    let c3 = 90;
    IK.forEach((c5, c6) => {
      {
        const c7 = IA[c6];
        const c8 = c3;
        c6 % 2 == 1 && (IY.fillStyle = If.zebraStripe, IY.fillRect(Im, c8, IQ - 40, c7));
        IY.fillStyle = If.text;
        let c9 = Im;
        IY.fillText(String(c6 + 1), c9 + 8, c8 + 30);
        c9 += IX[0];
        const cP = c0[c6];
        if (cP && (IY.save(), IY.beginPath(), IY.arc(c9 + 8 + 14, c8 + c7 / 2, 14, 0, 2 * Math.PI), IY.clip(), IY.drawImage(cP, c9 + 8, c8 + (c7 - 28) / 2, 28, 28), IY.restore()), IY.fillStyle = If.text, IY.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif", IY.fillText(c5.name || "-", c9 + 44, c8 + 30), IY.font = "12px -apple-system, BlinkMacSystemFont, sans-serif", c9 += IX[1], IY.fillStyle = If.text, IY.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif", IY.fillText(String(c5.serverId || "--"), c9 + 8, c8 + 30), c9 += IX[2], IY.fillText(H4(c5.power), c9 + 8, c8 + 30), IY.font = "12px -apple-system, BlinkMacSystemFont, sans-serif", IY.fillStyle = If.text, c9 += IX[3], IY.fillStyle = If.red, IY.fillText(String(c5.redQuench || 0), c9 + 8, c8 + 30), IY.fillStyle = If.text, c9 += IX[4], IC) {
          IY.fillStyle = If.purple;
          const cM = c5.goldenScore ?? 0;
          IY.fillText(cM > 0 ? H5(cM) : "--", c9 + 8, c8 + 30);
          IY.fillStyle = If.text;
          c9 += IX[5];
        }
        const cD = c2[c6] || [];
        const cv = c9;
        for (let cS = 0; cS < 3; cS++) {
          const cT = cv + 150 * cS + 4;
          const cR = cD[cS];
          cR && (IY.save(), IY.beginPath(), IY.arc(cT + 12, c8 + 18, 12, 0, 2 * Math.PI), IY.clip(), IY.drawImage(cR, cT, c8 + 6, 24, 24), IY.restore());
          const cZ = c5["memberName" + (cS + 1)] || "";
          IY.fillStyle = If.text;
          IY.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
          IY.fillText(cZ, cT + 24 + 4, c8 + 20);
          const cU = c5["memberPower" + (cS + 1)] || 0;
          const cN = (c5["redno" + (cS + 1)] || "0红").replace("红", "");
          const cu = c5["hb" + (cS + 1)] || 0;
          IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
          let cF = cT + 24 + 4;
          IY.fillStyle = "#f59e0b";
          const cp = H4(cU);
          IY.fillText(cp, cF, c8 + 38);
          cF += IY.measureText(cp).width + 2;
          IY.fillStyle = If.textSecondary;
          IY.fillText("|", cF, c8 + 38);
          cF += IY.measureText("|").width + 2;
          IY.fillStyle = "#ef4444";
          const cV = cN + "红";
          IY.fillText(cV, cF, c8 + 38);
          cF += IY.measureText(cV).width + 2;
          IY.fillStyle = If.textSecondary;
          IY.fillText("|", cF, c8 + 38);
          cF += IY.measureText("|").width + 2;
          IY.fillStyle = "#8b5cf6";
          IY.fillText(cu + "圣", cF, c8 + 38);
        }
        IY.fillStyle = If.text;
        IY.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
        c9 += IX[IC ? 6 : 5];
        const cB = H7(c5.announcement);
        IY.fillStyle = "梦盟" === cB ? "#ec4899" : "大联盟" === cB ? "#3b82f6" : "正义联盟" === cB ? "#22c55e" : "龙盟" === cB ? "#f59e0b" : If.textSecondary;
        IY.fillText(cB, c9 + 8, c8 + 30);
        IY.fillStyle = If.text;
        c9 += IX[IC ? 7 : 6];
        const cz = c5.announcement || "";
        IY.fillStyle = If.text;
        IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
        HM(IY, cz, IG).forEach((cJ, cH) => {
          IY.fillText(cJ, c9 + 8, c8 + 16 + 12 * cH);
        });
        IY.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
        IY.fillStyle = If.text;
        c3 += c7;
      }
    });
    IY.strokeStyle = If.border;
    IY.lineWidth = 1;
    IY.strokeRect(Im, 60, IQ - 40, 30 + Ix);
    IY.fillStyle = If.footerText;
    IY.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText("数据获取时间: " + IW, Im, Ik - Im);
    await R9(Iy, "盐场匹配_" + Jd.replace(/\//g, "-") + ".png", TQ);
  };
  const HT = () => {
    const Ib = document.getElementById("qa-salt-match-date");
    return Ib ? Ib.value : H3();
  };
  var HR = Object.freeze({
    __proto__: null,
    exportSaltMatchImage: HS,
    fetchSaltMatchInfo: HD,
    getSelectedDate: HT,
    initSaltMatchDate: () => {
      {
        const II = document.getElementById("qa-salt-match-date");
        II && !II.value && (II.value = H3());
      }
    },
    renderSaltMatchInfo: HP,
    sortByRedQuench: Hv,
    sortByScore: HB
  });
  class HZ {
    constructor(Ib) {
      this._data = Ib || new Uint8Array(0);
      this._view = null;
      this.position = 0;
    }
    get dataView() {
      return this._view || (this._view = new DataView(this._data.buffer, this._data.byteOffset, this._data.byteLength));
    }
    reset(Ib) {
      this._data = Ib;
      this.position = 0;
      this._view = null;
    }
    validate(Ib) {
      {
        return this.position + Ib <= this._data.length;
      }
    }
    readUInt8() {
      {
        if (this.validate(1)) {
          return this._data[this.position++];
        }
      }
    }
    readInt16() {
      if (this.validate(2)) {
        return (this._data[this.position++] | this._data[this.position++] << 8) << 16 >> 16;
      }
    }
    readInt32() {
      if (this.validate(4)) {
        return this._data[this.position++] | this._data[this.position++] << 8 | this._data[this.position++] << 16 | this._data[this.position++] << 24;
      }
    }
    readInt64() {
      const Ib = this.readInt32();
      if (undefined === Ib) {
        return;
      }
      let II = Ib < 0 ? Ib + 4294967296 : Ib;
      const If = this.readInt32();
      return undefined !== If ? II + 4294967296 * If : undefined;
    }
    readFloat32() {
      {
        if (!this.validate(4)) {
          return;
        }
        const IK = this.dataView.getFloat32(this.position, true);
        this.position += 4;
        return IK;
      }
    }
    readFloat64() {
      if (!this.validate(8)) {
        return;
      }
      const Ib = this.dataView.getFloat64(this.position, true);
      this.position += 8;
      return Ib;
    }
    read7BitInt() {
      let Ib = 0;
      let II = 0;
      let If = 0;
      let IK = 0;
      do {
        {
          if (35 === IK++) {
            throw new Error("Format_Bad7BitInt32");
          }
          If = this.readUInt8();
          Ib |= (127 & If) << II;
          II += 7;
        }
      } while (128 & If);
      return Ib >>> 0;
    }
    readUTF() {
      const Ib = this.read7BitInt();
      return this.readUTFBytes(Ib);
    }
    readUint8Array(Ib) {
      {
        const II = this.position;
        this.position += Ib;
        return this._data.subarray(II, this.position);
      }
    }
    readUTFBytes(Ib) {
      if (0 === Ib) {
        return "";
      }
      if (!this.validate(Ib)) {
        return;
      }
      const II = new TextDecoder("utf8").decode(this._data.subarray(this.position, this.position + Ib));
      this.position += Ib;
      return II;
    }
  }
  class HU {
    constructor(Ib = 8192) {
      this.position = 0;
      this._view = null;
      this.data = new Uint8Array(Ib);
    }
    get dataView() {
      return this._view || (this._view = new DataView(this.data.buffer, 0, this.data.byteLength));
    }
    reset() {
      this._view = null;
      this.position = 0;
    }
    ensureBuffer(Ib) {
      if (this.position + Ib <= this.data.byteLength) {
        return;
      }
      const II = this.data;
      const If = Math.max(Math.floor(12 * this.data.byteLength / 10), this.position + Ib);
      this.data = new Uint8Array(If);
      this.data.set(II, 0);
      this._view = null;
    }
    writeInt8(Ib) {
      this.ensureBuffer(1);
      this.data[this.position++] = 0 | Ib;
    }
    writeInt16(Ib) {
      this.ensureBuffer(2);
      this.data[this.position++] = 0 | Ib;
      this.data[this.position++] = Ib >> 8 & 255;
    }
    writeInt32(Ib) {
      this.ensureBuffer(4);
      this.data[this.position++] = 0 | Ib;
      this.data[this.position++] = Ib >> 8 & 255;
      this.data[this.position++] = Ib >> 16 & 255;
      this.data[this.position++] = Ib >> 24 & 255;
    }
    writeInt64(Ib) {
      this.writeInt32(Ib);
      this.writeInt32(Ib < 0 ? ~Math.floor(-Ib / 4294967296) : 0 | Math.floor(Ib / 4294967296));
    }
    writeFloat32(Ib) {
      this.ensureBuffer(4);
      this.dataView.setFloat32(this.position, Ib, true);
      this.position += 4;
    }
    writeFloat64(Ib) {
      {
        this.ensureBuffer(8);
        this.dataView.setFloat64(this.position, Ib, true);
        this.position += 8;
      }
    }
    write7BitInt(Ib) {
      this.ensureBuffer(5);
      let II = Ib >>> 0;
      for (; II >= 128;) {
        this.data[this.position++] = 255 & II | 128;
        II >>>= 7;
      }
      this.data[this.position++] = 127 & II;
    }
    writeUTF(Ib) {
      {
        const II = new TextEncoder().encode(Ib);
        this.write7BitInt(II.length);
        this.writeBytes(II);
      }
    }
    writeBytes(Ib) {
      this.ensureBuffer(Ib.length);
      this.data.set(Ib, this.position);
      this.position += Ib.length;
    }
    toBytes(Ib = true) {
      {
        return Ib ? this.data.slice(0, this.position) : this.data.subarray(0, this.position);
      }
    }
  }
  class HN {
    constructor() {
      this.dw = new HU();
      this.strMap = new Map();
      this.strArr = [];
    }
    encode(Ib) {
      this.dw.reset();
      this.strMap.clear();
      this.strArr.length = 0;
      this._encode(Ib);
    }
    getBytes(Ib = true) {
      return this.dw.toBytes(Ib);
    }
    _encode(Ib) {
      if (null == Ib) {
        this.dw.writeInt8(0);
      } else {
        if ("boolean" == typeof Ib) {
          this.dw.writeInt8(Ib ? 2 : 1);
        } else {
          if ("number" == typeof Ib) {
            Number.isInteger(Ib) ? Ib >= -128 && Ib <= 127 ? (this.dw.writeInt8(3), this.dw.writeInt8(Ib)) : Ib >= -32768 && Ib <= 32767 ? (this.dw.writeInt8(4), this.dw.writeInt16(Ib)) : Ib >= -2147483648 && Ib <= 2147483647 ? (this.dw.writeInt8(5), this.dw.writeInt32(Ib)) : (this.dw.writeInt8(6), this.dw.writeInt64(Ib)) : (this.dw.writeInt8(8), this.dw.writeFloat64(Ib));
          } else {
            if ("string" == typeof Ib) {
              {
                let If = this.strMap.get(Ib);
                undefined !== If ? (this.dw.writeInt8(99), this.dw.write7BitInt(If)) : (If = this.strArr.length, this.strMap.set(Ib, If), this.strArr.push(Ib), this.dw.writeInt8(9), this.dw.writeUTF(Ib));
              }
            } else {
              if (Ib instanceof Uint8Array || Ib instanceof ArrayBuffer) {
                {
                  const IC = Ib instanceof ArrayBuffer ? new Uint8Array(Ib) : Ib;
                  this.dw.writeInt8(11);
                  this.dw.write7BitInt(IC.length);
                  this.dw.writeBytes(IC);
                }
              } else {
                if (Array.isArray(Ib)) {
                  this.dw.writeInt8(12);
                  this.dw.write7BitInt(Ib.length);
                  for (const Iy of Ib) this._encode(Iy);
                } else {
                  if (Ib instanceof Date) {
                    this.dw.writeInt8(10);
                    this.dw.writeInt64(Ib.getTime());
                  } else {
                    if ("object" == typeof Ib) {
                      const IY = Object.keys(Ib);
                      this.dw.writeInt8(13);
                      this.dw.write7BitInt(IY.length);
                      for (const Im of IY) this._encode(Im), this._encode(Ib[Im]);
                    } else {
                      this.dw.writeInt8(0);
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
  class Hu {
    constructor() {
      this.dr = new HZ();
      this.strArr = [];
    }
    reset(Ib) {
      {
        this.dr.reset(Ib);
        this.strArr.length = 0;
      }
    }
    decode() {
      {
        return this._decode();
      }
    }
    _decode() {
      switch (this.dr.readUInt8()) {
        case 0:
        default:
          return null;
        case 1:
          return false;
        case 2:
          return true;
        case 3:
          return this.dr.readUInt8() << 24 >> 24;
        case 4:
          return this.dr.readInt16();
        case 5:
          return this.dr.readInt32();
        case 6:
          return this.dr.readInt64();
        case 7:
          return this.dr.readFloat32();
        case 8:
          return this.dr.readFloat64();
        case 9:
          {
            const Ib = this.dr.readUTF();
            this.strArr.push(Ib);
            return Ib;
          }
        case 11:
          {
            const II = this.dr.read7BitInt();
            return this.dr.readUint8Array(II);
          }
        case 12:
          {
            const If = this.dr.read7BitInt();
            const IK = new Array(If);
            for (let IW = 0; IW < If; IW++) {
              IK[IW] = this._decode();
            }
            return IK;
          }
        case 13:
          {
            const IC = this.dr.read7BitInt();
            const Iy = {};
            for (let IY = 0; IY < IC; IY++) {
              Iy[this._decode()] = this._decode();
            }
            return Iy;
          }
        case 10:
          return new Date(this.dr.readInt64() || 0);
        case 99:
          return this.strArr[this.dr.read7BitInt()];
      }
    }
  }
  const HF = {
    encode: (Ib, II = true) => {
      const If = new HN();
      If.encode(Ib);
      return If.getBytes(II);
    },
    decode: Ib => {
      const II = new Hu();
      II.reset(Ib);
      return II.decode();
    }
  };
  class Hp {
    constructor(Ib) {
      Ib?.["cmd"] && (Ib.cmd = Ib.cmd.toLowerCase());
      this._raw = Ib;
      this._rawData = undefined;
    }
    get seq() {
      return this._raw.seq;
    }
    get ack() {
      return this._raw.ack;
    }
    get cmd() {
      return this._raw?.["cmd"]?.["toLowerCase"]();
    }
    get code() {
      return ~~this._raw.code;
    }
    get error() {
      return this._raw.error;
    }
    get time() {
      {
        return this._raw.time;
      }
    }
    get body() {
      {
        return this._raw.body;
      }
    }
    get rawData() {
      undefined !== this._rawData || undefined === this.body || (this._rawData = HF.decode(this.body));
      return this._rawData;
    }
  }
  const HV = {
    encode: (Ib, II = "x") => function (If) {
      {
        const IK = (IW => {
          const IC = ~~(4294967295 * Math.random()) >>> 0;
          const Iy = new Uint8Array(IW.length + 4);
          Iy[0] = 255 & IC;
          Iy[1] = IC >>> 8 & 255;
          Iy[2] = IC >>> 16 & 255;
          Iy[3] = IC >>> 24 & 255;
          Iy.set(IW, 4);
          const IY = 2 + ~~(248 * Math.random());
          for (let Im = Iy.length; --Im >= 0;) {
            Iy[Im] ^= IY;
          }
          Iy[0] = 112;
          Iy[1] = 120;
          Iy[2] = 170 & Iy[2] | (IY >> 7 & 1) << 6 | (IY >> 6 & 1) << 4 | (IY >> 5 & 1) << 2 | IY >> 4 & 1;
          Iy[3] = 170 & Iy[3] | (IY >> 3 & 1) << 6 | (IY >> 2 & 1) << 4 | (IY >> 1 & 1) << 2 | 1 & IY;
          return Iy;
        })(HF.encode(If, false));
        return IK.buffer.byteLength === IK.length ? IK.buffer : IK.buffer.slice(0, IK.length);
      }
    }(Ib),
    parse: Ib => function (II) {
      {
        const IW = new Uint8Array(II);
        const IC = (If = new Uint8Array(IW)).length > 4 && 112 === If[0] && 120 === If[1] ? (IY => {
          {
            const IX = (IY[2] >> 6 & 1) << 7 | (IY[2] >> 4 & 1) << 6 | (IY[2] >> 2 & 1) << 5 | (1 & IY[2]) << 4 | (IY[3] >> 6 & 1) << 3 | (IY[3] >> 4 & 1) << 2 | (IY[3] >> 2 & 1) << 1 | 1 & IY[3];
            for (let IG = IY.length; --IG >= 4;) {
              IY[IG] ^= IX;
            }
            return IY.subarray(4);
          }
        })(If) : If;
        var If;
        const Iy = HF.decode(IC);
        return new Hp(Iy);
      }
    }(Ib),
    bon: HF
  };
  let HJ = null;
  const HH = {
    color: "#2ecc71",
    label: "2",
    point: 3
  };
  const Hh = {
    color: "#9b59b6",
    label: "B"
  };
  const HO = () => {
    if (HJ) {
      try {
        {
          HJ.close();
        }
      } catch (IK) {}
      HJ = null;
    }
  };
  const Hj = (Ib, II, If, IK = "[战场]") => new Promise((IW, IC) => {
    HO();
    const IY = encodeURIComponent(If);
    const Im = (Ib.startsWith("wss://") || Ib.startsWith("ws://") ? Ib : "wss://" + Ib) + "?p=" + IY + "&e=x&sid2=" + II + "&lang=chinese&sid2=" + II;
    try {
      HJ = new WebSocket(Im);
      HJ.binaryType = "arraybuffer";
      let IE = Z7(() => {
        HO();
        IC(new Error("连接超时"));
      }, 10000, "battlefield-ws-connect");
      const IX = () => {
        {
          IE && (Z8(IE), IE = null);
        }
      };
      HJ.onopen = () => {
        IX();
        IW(HJ);
      };
      HJ.onerror = IG => {
        {
          IX();
          IC(new Error("连接失败"));
        }
      };
      HJ.onclose = () => {
        IX();
      };
    } catch (IG) {
      IC(IG);
    }
  });
  const Hq = (Ib, II, If = {}, IK = "[战场]") => new Promise((IW, IC) => {
    {
      if (!Ib || Ib.readyState !== WebSocket.OPEN) {
        return void IC(new Error("战场连接未就绪"));
      }
      const IY = (() => {
        {
          if (window.g_utils && "function" == typeof window.g_utils.encode) {
            return window.g_utils;
          }
          if (window.bon && window.ws?.["enc"]) {
            try {
              {
                return {
                  bon: window.bon,
                  encode: (Ik, Ig = "x") => {
                    {
                      const Id = window.bon.encode(Ik);
                      return window.ws.enc.encrypt(Id);
                    }
                  },
                  parse: Ik => {
                    const Ig = window.ws.enc.decrypt(new Uint8Array(Ik));
                    return {
                      _raw: window.bon.decode(Ig)
                    };
                  }
                };
              }
            } catch (Ig) {
              console.warn("[BON] Failed to create game utils bridge:", Ig);
            }
          }
          if (HV && "function" == typeof HV.encode) {
            return HV;
          }
          throw new Error("[BON] No available protocol implementation");
        }
      })();
      let Im = null;
      let IE = false;
      const IX = () => {
        {
          IE || (IE = true, Im && Z8(Im), Ib.removeEventListener("message", IG), Ib.removeEventListener("close", IA));
        }
      };
      Im = Z7(() => {
        IX();
        IC(new Error("请求超时"));
      }, 15000, "battlefield-ws-msg");
      const IG = Ix => {
        try {
          let Ik;
          if (Ix.data instanceof ArrayBuffer) {
            const IL = IY.parse(Ix.data);
            Ik = IL._raw || IL;
            Ik.body && Ik.body instanceof Uint8Array && (Ik.body = IY.bon.decode(Ik.body));
          } else {
            Ik = JSON.parse(Ix.data);
          }
          const Ig = Ik.cmd?.["toLowerCase"]();
          if ("_sys/fatal" === Ig || "_sys/error" === Ig) {
            IX();
            return void IC(new Error(Ik.error || Ik.msg || "服务器返回错误"));
          }
          Ig !== II + "resp" && Ig !== II && Ig !== II.toLowerCase() + "resp" || (IX(), IW(Ik));
        } catch (Id) {}
      };
      const IA = () => {
        IX();
        IC(new Error("连接意外关闭"));
      };
      Ib.addEventListener("message", IG);
      Ib.addEventListener("close", IA);
      const IQ = {
        cmd: II,
        body: If && Object.keys(If).length > 0 ? IY.bon.encode(If) : undefined,
        ack: 0,
        seq: 1,
        time: Date.now()
      };
      try {
        const Ix = IY.encode(IQ, "x");
        Ib.send(Ix);
      } catch (Ik) {
        IX();
        IC(new Error("消息发送失败: " + Ik.message));
      }
    }
  });
  const Hw = {
    GROUND: "#D2B48C",
    STROKE: "rgba(0,0,0,0.15)",
    BUILDING: {
      1: {
        color: "#e74c3c",
        label: "1",
        point: 1
      },
      2: HH,
      3: {
        color: "#3498db",
        label: "3",
        point: 7
      },
      4: {
        color: "#f1c40f",
        label: "C",
        point: 15
      },
      BASE: Hh,
      TOWER: {
        color: "#34495e",
        label: "T"
      }
    }
  };
  const Hb = new Set();
  "x轴为1y轴为18，x轴为2y轴为18，x轴为3y轴为17、18、19、22、23，x轴为4y轴为17、20、22、24，x轴为5y轴为14、17、20、21、24，x轴为6y轴为10、15、17、18、19、22、23、24，x轴为7y轴为4、10、14、15、16、19、22、24，x轴为8y轴为5、6、7、10、11、12、14、19、20、23、24、25，x轴为9y轴为5、7、8、9、12、13、17、18、20、21、22、25，x轴为10y轴为5、8、14、17、19、20、26，x轴为11y轴为5、7、10、11、12、14、16、19、23、24、25，x轴为12y轴为6、8、9、10、13、14、15、16、19、23，x轴为13y轴为3、4、5、8、10、18、23，x轴为14y轴为3、9、10、11、12、14、15、16、19、20、21、24、25，x轴为15y轴为3、8、12、13、16、20、25，x轴为16y轴为4、5、7、8、15、16、18、19、21、25，x轴为17y轴为5、6、14、17、19、20、24，x轴为18y轴为6、12、13、15、17、23、24，x轴为19y轴为3、4、5、11、13、15、16、17、18、19、20、22、24、25、27、28、29、30，x轴为20y轴为31、27、26、23、21、18、17、16、13、11、8、7、3，x轴为21y轴为3、4、5、6、8、9、11、13、14、15、16、17、18、20、22、28、29、30，x轴为22y轴为10、11、17、19、21、22、28，x轴为23y轴为9、13、14、16、19、27、28，x轴为24y轴为9、13、15、16、18、19、26、27、29、30，x轴为25y轴为8、13、17、20、21、25、27、30，x轴为26y轴为9、10、14、15、18、19、20、22、23、24、25、28、31，x轴为27y轴为30、29、28、23、15、10，x轴为28y轴为11、15、18、19、20、21、24、25、26、28，x轴为29y轴为28、26、23、22、21、19、、17、14、10、9、8，x轴为30y轴为8、14、15、17、20、26、29，x轴为31y轴为28、26、25、24、21、20、16、15、13、12、11、8，x轴为32y轴为9、10、11、14、15、20、22、23、24、27、28、29，x轴为33y轴为29、23、19、18、17、14、11、9，x轴为34y轴为10、11、12、15、16、17、19、23，x轴为35y轴为19、16、13、12、9，x轴为36y轴为10、12、14、17，x轴为37y轴为10、11、14、15、16，x轴为38y轴为16，x轴为39y轴为16".split("，").forEach(Ib => {
    {
      const If = Ib.trim().match(/x轴为?(\d+)y轴为(.+)/);
      if (If) {
        const IK = parseInt(If[1]);
        If[2].split(/、|,|\s+/).map(IW => IW.trim()).filter(IW => "" !== IW).map(Number).forEach(IW => {
          isNaN(IW) || Hb.add(IK + "," + IW);
        });
      }
    }
  });
  const HI = new Map();
  const Hc = {
    x: 1,
    y: 18,
    name: "花开惊鸿影"
  };
  const Hf = {
    x: 3,
    y: 23,
    name: "咸鱼组织"
  };
  const HK = {
    x: 5,
    y: 14,
    name: "影从散人"
  };
  const HW = {
    x: 6,
    y: 10,
    name: "桃花⁵⁷⁹"
  };
  const HC = {
    x: 7,
    y: 4,
    name: "懒人在偷懒"
  };
  const Hy = {
    x: 12,
    y: 19,
    name: "江湖丶战之巅"
  };
  const HY = {
    x: 13,
    y: 23,
    name: "刨地小分队"
  };
  const Hm = {
    x: 14,
    y: 3,
    name: "棕泡泡"
  };
  const HE = {
    x: 14,
    y: 12,
    name: "曼巴集团|冥"
  };
  const HX = {
    x: 19,
    y: 28,
    name: "无憾嘎嘎猛"
  };
  const HG = {
    x: 21,
    y: 5,
    name: "旺仔Cyan"
  };
  const HA = {
    x: 26,
    y: 22,
    name: "劫营"
  };
  const HQ = {
    x: 26,
    y: 31,
    name: "群星⭐"
  };
  const Hx = {
    x: 27,
    y: 10,
    name: "江湖-渔公馆"
  };
  const Hk = {
    x: 28,
    y: 15,
    name: "无双-烟雨楼"
  };
  const Hg = {
    x: 33,
    y: 29,
    name: "咸鱼摆子团"
  };
  const HL = {
    x: 34,
    y: 23,
    name: "名流²"
  };
  const Hd = {
    x: 35,
    y: 19,
    name: "龍「朝酒晚舞"
  };
  const h0 = {
    x: 37,
    y: 10,
    name: "赤兔追风"
  };
  const h1 = {
    x: 39,
    y: 16,
    name: "猫窝儿"
  };
  [Hc, Hf, HK, HW, HC, Hy, HY, Hm, HE, HX, HG, HA, HQ, Hx, Hk, Hg, HL, Hd, h0, h1].forEach(Ib => {
    HI.set(Ib.x + "," + Ib.y, Ib.name);
  });
  const h2 = Ib => {
    if (0 !== Ib.getDay()) {
      return false;
    }
    const II = Ib.getDate();
    return II >= 22 && II <= 28;
  };
  const h3 = () => {
    const Ib = new Date();
    const II = Ib.getDay();
    const If = 60 * Ib.getHours() + Ib.getMinutes();
    return 6 === II && If >= 1195 && If < 1260 || !!(h2(Ib) && If >= 1195 && If < 1290);
  };
  const h4 = () => {
    {
      const If = new Date();
      const IK = If.getDay();
      const IW = 60 * If.getHours() + If.getMinutes();
      const IC = 1195;
      if (6 === IK) {
        if (IW < IC) {
          const Iy = IC - IW;
          const IY = Math.floor(Iy / 60);
          const Im = Iy % 60;
          return IY > 0 ? IY + "小时" + Im + "分钟后开放" : Im + "分钟后开放";
        }
        return IW < 1260 ? "剩余" + (1260 - IW) + "分钟" : "已结束";
      }
      if (h2(If)) {
        {
          if (IW < IC) {
            const IX = IC - IW;
            const IG = Math.floor(IX / 60);
            const IA = IX % 60;
            return IG > 0 ? IG + "小时" + IA + "分钟后开放" : IA + "分钟后开放";
          }
          return IW < 1290 ? "剩余" + (1290 - IW) + "分钟" : "已结束";
        }
      }
      return "仅周六或第四周周日可用";
    }
  };
  const h5 = async () => {
    TQ("正在获取地图数据...", "info", 1000);
    let II = null;
    const If = new Promise((IK, IW) => {
      {
        II = Z7(() => {
          IW(new Error("导出超时（30秒），Canvas 可能过大"));
        }, 30000, "saltmap-export-timeout");
      }
    });
    try {
      const IK = await (async () => {
        {
          if (!h3()) {
            throw new Error("当前不在查询时间段内（周六 19:55-21:00 或 第四周周日 19:55-21:30）");
          }
          try {
            {
              const c6 = await Rz("legion_getbattlefield", {});
              const c7 = c6?.["body"]?.["info"] || c6?.["info"] || {};
              const c8 = c7.domainName;
              const c9 = c7.sid;
              const cP = c7.battlefieldId;
              if (!c8) {
                throw new Error("未获取到战场服务器信息");
              }
              if (!c9) {
                throw new Error("战场未开放或已结束");
              }
              if (!cP) {
                throw new Error("未获取到战场ID");
              }
              const cD = window.ws?.["_connParam"]?.["roleToken"] ? window.ws._connParam.roleToken : window.ws?.["connectOptions"]?.["token"] ? window.ws.connectOptions.token : "";
              if (!cD) {
                throw new Error("未获取到登录凭证");
              }
              const cv = {
                battlefieldId: cP,
                useGzip: true
              };
              const cB = await Hj(c8, c9, cD, "[盐场地图]");
              const cz = await Hq(cB, "war_enterbattlefield", cv, "[盐场地图]");
              const cM = (cz?.["body"] || cz || {}).battlefield || {};
              if (HO(), !cM.buildingData || 0 === Object.keys(cM.buildingData).length) {
                throw new Error("未获取到战场数据");
              }
              const cS = cM.buildingData || {};
              const cT = {};
              Object.entries(cS).forEach(([cR, cZ]) => {
                const cU = cR.replace("_", ",");
                cT[cU] = cZ;
              });
              return {
                battlefield: {
                  ...cM,
                  buildingData: cT
                }
              };
            }
          } catch (cZ) {
            {
              throw HO(), cZ;
            }
          }
        }
      })();
      if (!IK || !IK.battlefield) {
        return void TQ("获取地图数据失败", "error");
      }
      const IW = IK.battlefield.buildingData || {};
      TQ("正在生成高清地图...", "info", 2000);
      const IC = 1;
      const Iy = document.createElement("canvas");
      const IY = Iy.getContext("2d");
      const Im = 7030;
      const IE = 5300;
      Iy.width = Im * IC;
      Iy.height = IE * IC;
      IY.scale(IC, IC);
      (Iy.width * Iy.height * 4 / 1024 / 1024).toFixed(2);
      IY.fillStyle = "#ffffff";
      IY.fillRect(0, 0, Im, IE);
      const IX = [];
      const IG = 180;
      const IA = 130;
      const IQ = (IG - 90) / 2;
      for (let c5 = -2; c5 < 37; c5++) {
        for (let c6 = -5; c6 < 45; c6++) {
          {
            const c8 = c6 + "," + c5;
            if (!Hb.has(c8)) {
              continue;
            }
            const c9 = IW[c8];
            let cP = null;
            if (c9) {
              const cz = c9.type;
              cz >= 1 && cz <= 4 && (cP = Hw.BUILDING[cz]);
            }
            const cD = HI.get(c8);
            cD && (cP = Hw.BUILDING.BASE);
            let cv = 135 * (c6 - -5);
            let cB = (c5 - -2) * IA;
            if (Math.abs(c6) % 2 == 1 && (cB += IA / 2), IY.beginPath(), IY.moveTo(cv + IQ, cB), IY.lineTo(cv + IG - IQ, cB), IY.lineTo(cv + IG, cB + IA / 2), IY.lineTo(cv + IG - IQ, cB + IA), IY.lineTo(cv + IQ, cB + IA), IY.lineTo(cv, cB + IA / 2), IY.closePath(), IY.fillStyle = Hw.GROUND, IY.fill(), IY.strokeStyle = Hw.STROKE, IY.lineWidth = 1, IY.stroke(), cP) {
              {
                const cM = cv + IG / 2;
                const cS = cB + IA / 2;
                const cT = 0.35 * IA;
                IY.beginPath();
                IY.arc(cM, cS, cT, 0, 2 * Math.PI);
                IY.fillStyle = cP.color;
                IY.fill();
                IY.strokeStyle = "#fff";
                IY.lineWidth = 2;
                IY.stroke();
                IY.fillStyle = "#fff";
                IY.font = "bold 32px Arial";
                IY.textAlign = "center";
                IY.textBaseline = "middle";
                IY.fillText(cP.label, cM, cS);
                cD && IX.push({
                  cx: cM,
                  cy: cS,
                  radius: cT,
                  name: cD
                });
              }
            }
          }
        }
      }
      IX.forEach(cZ => {
        const {
          cx: cU,
          cy: cN,
          radius: cu,
          name: cF
        } = cZ;
        const cp = cN + cu + 50;
        IY.fillStyle = "rgba(255, 255, 255, 0.95)";
        IY.fillRect(cU - 120, cp - 30, 240, 60);
        IY.strokeStyle = "#dee2e6";
        IY.lineWidth = 2;
        IY.strokeRect(cU - 120, cp - 30, 240, 60);
        IY.fillStyle = "#333";
        IY.font = "bold 50px Microsoft YaHei";
        IY.textAlign = "center";
        IY.textBaseline = "middle";
        IY.fillText(cF, cU, cp);
      });
      const Ix = 450;
      const Ik = 30;
      const Ig = 80;
      const IL = 6930 - Ix - 30;
      const Id = 30;
      const c0 = [{
        type: "title",
        text: "图例说明"
      }, {
        type: "ground",
        text: "可通行地面"
      }, {
        type: "building",
        color: "#e74c3c",
        label: "1",
        text: "1分 (小型)"
      }, {
        type: "building",
        color: "#2ecc71",
        label: "2",
        text: "3分 (中型)"
      }, {
        type: "building",
        color: "#3498db",
        label: "3",
        text: "7分 (大型)"
      }, {
        type: "building",
        color: "#f1c40f",
        label: "C",
        text: "15分 (核心)"
      }, {
        type: "building",
        color: "#9b59b6",
        label: "B",
        text: "大本营"
      }, {
        type: "building",
        color: "#34495e",
        label: "T",
        text: "防御塔"
      }];
      const c1 = 2 * Ik + c0.length * Ig + 20;
      IY.fillStyle = "rgba(255, 255, 255, 0.95)";
      IY.fillRect(IL, Id, Ix, c1);
      IY.strokeStyle = "#dee2e6";
      IY.lineWidth = 3;
      IY.strokeRect(IL, Id, Ix, c1);
      let c2 = Id + Ik;
      c0.forEach(cZ => {
        if ("title" === cZ.type) {
          IY.fillStyle = "#333";
          IY.font = "bold 50px Microsoft YaHei";
          IY.textAlign = "left";
          IY.textBaseline = "top";
          IY.fillText(cZ.text, IL + Ik, c2);
          IY.strokeStyle = "#eee";
          IY.lineWidth = 3;
          IY.beginPath();
          IY.moveTo(IL + Ik, c2 + 60);
          IY.lineTo(IL + Ix - Ik, c2 + 60);
          IY.stroke();
        } else {
          if ("ground" === cZ.type) {
            {
              const cu = IL + Ik + 20;
              const cF = c2 + 30;
              IY.save();
              IY.translate(cu, cF);
              IY.rotate(Math.PI / 6);
              IY.fillStyle = "#D2B48C";
              IY.fillRect(-20, -20, 40, 40);
              IY.strokeStyle = "rgba(0,0,0,0.2)";
              IY.lineWidth = 3;
              IY.strokeRect(-20, -20, 40, 40);
              IY.restore();
              IY.fillStyle = "#555";
              IY.font = "bold 50px Microsoft YaHei";
              IY.textAlign = "left";
              IY.textBaseline = "middle";
              IY.fillText(cZ.text, IL + Ik + 70, c2 + 30);
            }
          } else {
            if ("building" === cZ.type) {
              const cp = IL + Ik + 20;
              const cV = c2 + 30;
              IY.beginPath();
              IY.arc(cp, cV, 20, 0, 2 * Math.PI);
              IY.fillStyle = cZ.color;
              IY.fill();
              IY.strokeStyle = "#fff";
              IY.lineWidth = 3;
              IY.stroke();
              IY.fillStyle = "#fff";
              IY.font = "bold 28px Arial";
              IY.textAlign = "center";
              IY.textBaseline = "middle";
              IY.fillText(cZ.label, cp, cV);
              IY.fillStyle = "#555";
              IY.font = "bold 50px Microsoft YaHei";
              IY.textAlign = "left";
              IY.textBaseline = "middle";
              IY.fillText(cZ.text, IL + Ik + 70, c2 + 30);
            }
          }
        }
        c2 += Ig;
      });
      const c3 = {
        hour12: false
      };
      const c4 = new Date().toLocaleString("zh-CN", c3).replace(/[/:]/g, "-");
      await Promise.race([R9(Iy, "盐场地图_" + c4 + ".png", TQ), If]);
      II && Z8(II);
    } catch (cZ) {
      II && Z8(II);
      TQ("导出失败: " + cZ.message, "error");
    }
  };
  var h6 = Object.freeze({
    __proto__: null,
    exportSaltMapImage: h5,
    getTimeStatusText: h4,
    isQueryTimeAvailable: h3,
    updateTimeStatus: () => {
      const Ib = document.getElementById("qa-salt-map-time-status");
      if (Ib) {
        const II = h3();
        Ib.textContent = h4();
        Ib.className = "time-status-badge " + (II ? "available" : "unavailable");
      }
    }
  });
  let h7 = null;
  const h9 = {
    num: 80
  };
  const hP = {
    num: 160
  };
  const hD = {
    num: 240
  };
  const hv = {
    num: 320
  };
  const hB = {
    num: 400
  };
  const hz = {
    num: 560
  };
  const hM = {
    num: 720
  };
  const hS = {
    num: 880
  };
  const hT = {
    num: 1040
  };
  const hR = {
    num: 1200
  };
  const hZ = {
    num: 1440
  };
  const hU = {
    num: 1680
  };
  const hN = {
    num: 1920
  };
  const hu = {
    num: 2160
  };
  const hF = {
    num: 2400
  };
  const hp = {
    num: 2720
  };
  const hV = {
    num: 3040
  };
  const hJ = {
    num: 3360
  };
  const hH = {
    num: 3680
  };
  const hh = {
    num: 4000
  };
  const hO = {
    num: 2000
  };
  const hj = {
    num: 4000
  };
  const hq = {
    num: 6000
  };
  const hw = {
    num: 8000
  };
  const hb = {
    num: 10000
  };
  const hI = {
    num: 14000
  };
  const hf = {
    num: 18000
  };
  const hK = {
    num: 22000
  };
  const hW = {
    num: 26000
  };
  const hC = {
    num: 30000
  };
  const hy = {
    num: 36000
  };
  const hY = {
    num: 42000
  };
  const hm = {
    num: 48000
  };
  const hE = {
    num: 54000
  };
  const hX = {
    num: 60000
  };
  const hG = {
    num: 68000
  };
  const hA = {
    num: 76000
  };
  const hQ = {
    num: 84000
  };
  const hx = {
    num: 92000
  };
  const hk = {
    num: 100000
  };
  const hg = {
    num: 25
  };
  const hL = {
    num: 50
  };
  const hd = {
    num: 75
  };
  const t0 = {
    num: 125
  };
  const t1 = {
    num: 175
  };
  const t2 = {
    num: 225
  };
  const t3 = {
    num: 300
  };
  const t4 = {
    num: 375
  };
  const t5 = {
    num: 450
  };
  const t6 = {
    num: 525
  };
  const t7 = {
    num: 625
  };
  const t8 = {
    num: 725
  };
  const t9 = {
    num: 825
  };
  const tP = {
    num: 925
  };
  const tD = {
    num: 1050
  };
  const tv = {
    num: 1175
  };
  const tB = {
    num: 1300
  };
  const tz = {
    num: 1450
  };
  const tM = {
    num: 1600
  };
  const tS = {
    num: 1750
  };
  const tT = {
    num: 3
  };
  const tR = {
    num: 6
  };
  const tZ = {
    num: 9
  };
  const tU = {
    num: 12
  };
  const tN = {
    num: 15
  };
  const tu = {
    num: 20
  };
  const tF = {
    num: 25
  };
  const tp = {
    num: 30
  };
  const tV = {
    num: 35
  };
  const tJ = {
    num: 40
  };
  const tH = {
    num: 48
  };
  const th = {
    num: 56
  };
  const tO = {
    num: 64
  };
  const tj = {
    num: 72
  };
  const tq = {
    num: 80
  };
  const tw = {
    num: 90
  };
  const tb = {
    num: 100
  };
  const tI = {
    num: 110
  };
  const tf = {
    num: 120
  };
  const tK = {
    num: 130
  };
  const tW = {
    num: 10000
  };
  const tC = {
    num: 20000
  };
  const ty = {
    num: 30000
  };
  const tY = {
    num: 40000
  };
  const tm = {
    num: 50000
  };
  const tE = {
    num: 70000
  };
  const tX = {
    num: 90000
  };
  const tG = {
    num: 110000
  };
  const tA = {
    num: 130000
  };
  const tQ = {
    num: 150000
  };
  const tx = {
    num: 180000
  };
  const tk = {
    num: 210000
  };
  const tg = {
    num: 240000
  };
  const tL = {
    num: 270000
  };
  const td = {
    num: 300000
  };
  const O0 = {
    num: 340000
  };
  const O1 = {
    num: 380000
  };
  const O2 = {
    num: 420000
  };
  const O3 = {
    num: 460000
  };
  const O4 = {
    num: 500000
  };
  const O5 = async () => {
    {
      const If = document.getElementById("qa-casualties-content");
      If && (If.innerHTML = "<div class=\"helper-text\">正在获取战场数据...</div>");
      try {
        TQ("正在连接战场服务器...", "info", 2000);
        let IK = (IW => {
          const IC = IW.roles || IW.roleData || {};
          const Iy = IW.legions || IW.legionData || {};
          const IY = {};
          for (const [IE, IX] of Object.entries(IC)) {
            const IG = IX.legionID;
            const IA = {
              totalKills: 0,
              totalDeaths: 0,
              totalRevivePills: 0,
              totalAttackBuilding: 0,
              memberCount: 0
            };
            IG && (IY[IG] || (IY[IG] = IA), IY[IG].totalKills += IX.killCnt || 0, IY[IG].totalDeaths += IX.d || 0, IY[IG].totalAttackBuilding += IX.aB || 0, IY[IG].totalRevivePills += Math.max(0, (IX.d || 0) - 6), IY[IG].memberCount++);
          }
          const Im = [];
          for (const [IQ, Ix] of Object.entries(IY)) {
            {
              const Ig = Iy[IQ];
              if (!Ig) {
                continue;
              }
              const IL = Ix.totalDeaths > 0 ? (Ix.totalKills / Ix.totalDeaths).toFixed(2) : Ix.totalKills.toString();
              const Id = {
                id: IQ,
                name: Ig.name || "未知",
                serverId: Ig.serverId || "--",
                point: Ig.point || 0,
                logo: "",
                kd: IL,
                ...Ix
              };
              Im.push(Id);
            }
          }
          return Im.sort((c0, c1) => c1.point - c0.point);
        })(await (async () => {
          {
            if (!h3()) {
              throw new Error("当前不在查询时间段内（周六 19:55-21:00 或 第四周周日 19:55-21:30）");
            }
            try {
              const Iy = await Rz("legion_getbattlefield", {});
              const IY = Iy?.["body"]?.["info"] || Iy?.["info"] || {};
              const Im = IY.domainName;
              const IE = IY.sid;
              if (!Im) {
                throw new Error("未获取到战场服务器信息");
              }
              if (!IE) {
                throw new Error("战场未开放或已结束");
              }
              const IX = window.ws?.["connectOptions"]?.["token"] ? window.ws.connectOptions.token : window.ws?.["_connParam"]?.["roleToken"] ? window.ws._connParam.roleToken : "";
              if (!IX) {
                throw new Error("未获取到登录凭证");
              }
              const IG = await Hj(Im, IE, IX, "[全局战损]");
              const IA = await Hq(IG, "war_enterbattlefield", {}, "[全局战损]");
              const IQ = (IA?.["body"] || IA || {}).battlefield || {};
              HO();
              const Ix = IQ.roles || IQ.roleData || {};
              if (0 === Object.keys(Ix).length) {
                throw new Error("未获取到战场角色数据");
              }
              return IQ;
            } catch (Ik) {
              {
                throw HO(), Ik;
              }
            }
          }
        })());
        If && (If.innerHTML = "<div class=\"helper-text\">正在获取俱乐部头像...</div>");
        IK = await (async IW => {
          {
            for (const Iy of IW) try {
              {
                const Im = {
                  legionId: Iy.id
                };
                const IE = await Rz("legion_getinfobyid", Im);
                Iy.logo = IE?.["legionData"]?.["logo"] || IE?.["body"]?.["legionData"]?.["logo"] || "";
                await new Promise(IX => setTimeout(IX, 100));
              }
            } catch (IX) {
              Iy.logo = "";
            }
            return IW;
          }
        })(IK);
        h7 = IK;
        (IW => {
          {
            const Iy = document.getElementById("qa-casualties-content");
            if (!Iy) {
              return;
            }
            if (!IW || 0 === IW.length) {
              return void (Iy.innerHTML = "<div class=\"helper-text\">暂无战损数据</div>");
            }
            const IY = "\n    <div class=\"casualties-table-wrapper\">\n      <table class=\"casualties-table\">\n        <thead>\n          <tr>\n            <th>排名</th>\n            <th>俱乐部</th>\n            <th>服务器</th>\n            <th>积分</th>\n            <th>击杀</th>\n            <th>死亡</th>\n            <th>KD</th>\n            <th>复活丹</th>\n            <th>攻城</th>\n            <th>成员</th>\n          </tr>\n        </thead>\n        <tbody>\n          " + IW.map((Im, IE) => "\n            <tr>\n              <td class=\"rank-cell\">" + (IE + 1) + "</td>\n              <td class=\"name-cell\">\n                " + (Im.logo ? "<img src=\"" + Im.logo + "\" class=\"club-logo\" onerror=\"this.style.display='none'\">" : "") + "\n                <span title=\"" + Im.name + "\">" + Im.name + "</span>\n              </td>\n              <td>" + Im.serverId + "</td>\n              <td class=\"point-cell\">" + Im.point + "</td>\n              <td class=\"kill-cell\">" + Im.totalKills + "</td>\n              <td class=\"death-cell\">" + Im.totalDeaths + "</td>\n              <td class=\"kd-cell\">" + Im.kd + "</td>\n              <td class=\"revive-cell\">" + Im.totalRevivePills + "</td>\n              <td>" + Im.totalAttackBuilding + "</td>\n              <td>" + Im.memberCount + "</td>\n            </tr>\n          ").join("") + "\n        </tbody>\n      </table>\n    </div>\n  ";
            Iy.innerHTML = IY;
          }
        })(IK);
        TQ("获取成功，共 " + IK.length + " 个俱乐部", "success");
      } catch (IW) {
        If && (If.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">获取失败: " + IW.message + "</div>");
        TQ("获取失败: " + IW.message, "error");
      }
    }
  };
  const O6 = {
    "招募": 1,
    "宝箱": 2,
    "捕获": 3,
    "盐罐": 4,
    "金砖": 5
  };
  const O7 = {
    [O6["招募"]]: "招募",
    [O6["宝箱"]]: "宝箱",
    [O6["捕获"]]: "捕获",
    [O6["盐罐"]]: "盐罐",
    [O6["金砖"]]: "金砖"
  };
  const O8 = {
    [O6["招募"]]: [h9, hP, hD, hv, hB, hz, hM, hS, hT, hR, hZ, hU, hN, hu, hF, hp, hV, hJ, hH, hh],
    [O6["宝箱"]]: [hO, hj, hq, hw, hb, hI, hf, hK, hW, hC, hy, hY, hm, hE, hX, hG, hA, hQ, hx, hk],
    [O6["捕获"]]: [hg, hL, hd, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, tP, tD, tv, tB, tz, tM, tS],
    [O6["盐罐"]]: [tT, tR, tZ, tU, tN, tu, tF, tp, tV, tJ, tH, th, tO, tj, tq, tw, tb, tI, tf, tK],
    [O6["金砖"]]: [tW, tC, ty, tY, tm, tE, tX, tG, tA, tQ, tx, tk, tg, tL, td, O0, O1, O2, O3, O4]
  };
  const O9 = Ib => {
    const II = Ib?.["activity"]?.["commonActivityInfo"] || Ib?.["commonActivityInfo"];
    return II ? Object.values(II).find(If => !!If?.["task"] && Object.keys(If.task).some(IK => {
      {
        const Iy = Number(IK);
        return Iy >= 1 && Iy <= 5;
      }
    })) : null;
  };
  const OP = () => !!TR.consumptionData;
  const OD = () => {
    const If = TR.consumptionData;
    if (!If) {
      return [];
    }
    const IK = If.task || {};
    return Object.keys(O7).map(IW => {
      {
        const IC = Number(IW);
        const Iy = IK[IC] || 0;
        const IY = O8[IC] || [];
        let Im = 0;
        let IE = false;
        const IX = IY.find(IA => IA.num > Iy);
        IX ? Im = IX.num : IY.length > 0 && (Im = IY[IY.length - 1].num, IE = true);
        let IG = 0;
        IE ? IG = 100 : Im > 0 && (IG = Math.min(100, Iy / Im * 100));
        return {
          id: IC,
          name: O7[IC],
          current: Iy,
          nextTarget: Im,
          percentage: IG,
          isCompleted: IE
        };
      }
    });
  };
  const Ov = () => {
    {
      const II = document.getElementById("qa-consumption-content");
      if (!II) {
        return;
      }
      const If = OP();
      const IK = OD();
      const IW = document.getElementById("qa-consumption-normal-item");
      const IC = document.getElementById("qa-consumption-gold-item");
      IW && (IW.textContent = TR.consumptionActivityItem || 0);
      IC && (IC.textContent = TR.consumptionGoldItem || 0);
      const Iy = document.getElementById("qa-consumption-badge");
      if (Iy && (Iy.textContent = If ? "进行中" : "未开放"), !If) {
        return void (II.innerHTML = "<div class=\"helper-text\">暂无活动数据，请点击刷新</div>");
      }
      const IY = IK.map(Im => {
        const IE = Im.isCompleted ? "#52c41a" : "#1890ff";
        const IX = Im.isCompleted ? "<span style=\"color:#52c41a;\">已完成所有档位</span>" : "<span style=\"color:var(--text-tertiary);\">下一档: " + Im.nextTarget + " (还需 " + (Im.nextTarget - Im.current) + ")</span>";
        return "\n      <div class=\"consumption-item\">\n        <div class=\"consumption-header\">\n          <span class=\"consumption-name\">" + Im.name + "</span>\n          <span class=\"consumption-values\">\n            <span style=\"color:#1890ff;font-weight:600;\">" + Im.current + "</span>\n            <span style=\"color:var(--text-tertiary);margin:0 2px;\">/</span>\n            <span style=\"color:var(--text-secondary);\">" + Im.nextTarget + "</span>\n          </span>\n        </div>\n        <div class=\"consumption-bar\">\n          <div class=\"consumption-bar-fill\" style=\"width:" + Im.percentage + "%;background:" + IE + ";\"></div>\n        </div>\n        <div class=\"consumption-footer\">" + IX + "</div>\n      </div>\n    ";
      }).join("");
      II.innerHTML = "<div class=\"consumption-list\">" + IY + "</div>";
    }
  };
  const OB = async () => {
    {
      try {
        const II = await Rz("activity_get", {});
        const If = O9(II);
        const IK = {
          items: window.ROLE?.["items"]
        };
        TR.consumptionData = If;
        Oz(IK);
        Ov();
        TQ("刷新消耗活动数据成功", "success");
      } catch (IW) {
        TQ("刷新消耗活动数据失败: " + IW.message, "error");
      }
    }
  };
  const Oz = Ib => {
    {
      const IK = Ib?.["items"] || {};
      TR.consumptionActivityItem = RZ(IK, 5261);
      TR.consumptionGoldItem = RZ(IK, 5262);
      const IW = document.getElementById("qa-consumption-normal-item");
      const IC = document.getElementById("qa-consumption-gold-item");
      IW && (IW.textContent = TR.consumptionActivityItem);
      IC && (IC.textContent = TR.consumptionGoldItem);
    }
  };
  const OM = async (Ib = 4) => {
    try {
      const II = {
        itemId: 5261,
        index: 0,
        number: Ib
      };
      const If = {
        items: window.ROLE?.["items"]
      };
      await Rz("item_openpack", II);
      Oz(If);
      TQ("成功打开" + Ib + "个道具", "success");
    } catch (IK) {
      TQ("打开道具失败: " + IK.message, "error");
    }
  };
  const OS = {
    __proto__: null,
    ConsumptionTaskID: O6,
    TaskNames: O7,
    fetchConsumptionData: OB,
    getProgressList: OD,
    hasConsumptionData: OP,
    missionTypes: O8,
    openConsumptionItem: OM,
    parseConsumptionData: O9,
    syncConsumptionItems: Oz,
    updateConsumptionDisplay: Ov
  };
  var OT = Object.freeze(OS);
  const OR = () => {
    {
      const II = "dark" === TR.theme;
      const If = {
        bg: II ? "#1a1a2e" : "#ffffff",
        text: II ? "#f9fafb" : "#1f2937",
        textSecondary: II ? "#9ca3af" : "#6b7280",
        headerBg: II ? "#374151" : "#f3f4f6",
        headerText: II ? "#e5e7eb" : "#374151",
        rowAlt: II ? "#2d2d44" : "#f9fafb",
        border: II ? "#4b5563" : "#e5e7eb",
        summaryBg: II ? "#374151" : "#f3f4f6",
        footerText: II ? "#6b7280" : "#9ca3af"
      };
      return If;
    }
  };
  let OZ = null;
  let OU = null;
  let ON = "";
  const Ou = () => {
    const Ib = new Date();
    const II = Ib.getDay();
    const If = 0 === II ? 1 : 6 === II ? 0 : II + 1;
    const IK = new Date(Ib);
    IK.setDate(Ib.getDate() - If);
    return IK.getFullYear() + "/" + String(IK.getMonth() + 1).padStart(2, "0") + "/" + String(IK.getDate()).padStart(2, "0");
  };
  const OF = Ib => {
    OZ = Ib;
    const If = document.getElementById("qa-battle-records-content");
    if (!If) {
      return;
    }
    if (!Ib || !Ib.roleDetailsList || 0 === Ib.roleDetailsList.length) {
      return void (If.innerHTML = "<div class=\"helper-text\">暂无战绩数据</div>");
    }
    const IK = Ib.roleDetailsList;
    If.innerHTML = "\n    <div class=\"battle-records-info\">\n      <div class=\"match-date-tag\">查询日期: " + ON + "</div>\n      <div class=\"battle-records-list\">\n        " + IK.map((IW, IC) => {
      {
        const Im = IW.winCnt || 0;
        const IE = IW.loseCnt || 0;
        const IX = IE > 0 ? (Im / IE).toFixed(2) : Im;
        const IG = IE > 0 ? Im / IE : Im;
        const IA = Math.max(IE - 6, 0);
        let IQ = "";
        IQ = IE < 5 ? "name-red" : IG >= 1 ? "name-green" : "name-yellow";
        return "\n          <div class=\"battle-member-card\" data-member-idx=\"" + IC + "\">\n            <div class=\"battle-member-header\" data-toggle-member=\"" + IC + "\">\n              <div class=\"battle-member-info\">\n                <span class=\"battle-rank\">#" + (IC + 1) + "</span>\n                <img src=\"" + (IW.headImg || "") + "\" class=\"battle-member-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                <span class=\"battle-member-name " + IQ + "\">" + (IW.name || "未知") + "</span>\n              </div>\n              <div class=\"battle-member-stats\">\n                <span class=\"stat-inline win\">胜 " + Im + "</span>\n                <span class=\"stat-inline lose\">负 " + IE + "</span>\n                <span class=\"stat-inline kd\">KD " + IX + "</span>\n                <span class=\"stat-inline dan\">丹 " + IA + "</span>\n                <span class=\"stat-inline building\">攻城 " + (IW.buildingCnt || 0) + "</span>\n                <span class=\"expand-icon\">▼</span>\n              </div>\n            </div>\n            <div class=\"battle-member-details\" style=\"display:none;\">\n              " + (IW.targetRoleList && IW.targetRoleList.length > 0 ? "\n                <div class=\"battle-list\">\n                  " + IW.targetRoleList.map(Ix => {
          const Ig = {
            text: "失败",
            class: "lose"
          };
          const IL = 2 === Ix.newWinFlag ? {
            text: "胜利",
            class: "win"
          } : Ig;
          const Id = (c3 => 0 === c3 ? "进攻" : "防守")(Ix.attackType);
          const c0 = Ix.targetRoleInfo?.["name"] || "未知";
          const c1 = Ix.targetRoleInfo?.["headImg"] || "";
          const c2 = Ix.roleInfo?.["name"] || IW.name || "";
          return "\n                      <div class=\"battle-item " + IL.class + "\">\n                        <span class=\"battle-time\">" + (c3 => {
            {
              if (!c3) {
                return "--";
              }
              const c4 = new Date(1000 * c3);
              return String(c4.getHours()).padStart(2, "0") + ":" + String(c4.getMinutes()).padStart(2, "0");
            }
          })(Ix.timestamp) + "</span>\n                        <span class=\"battle-type " + (0 === Ix.attackType ? "attack" : "defend") + "\">" + Id + "</span>\n                        <span class=\"battle-participants\">\n                          <span class=\"battle-self\">" + c2 + "</span>\n                          <span class=\"battle-vs\">vs</span>\n                          <img src=\"" + c1 + "\" class=\"battle-target-avatar\" onerror=\"this.style.display='none'\" alt=\"\">\n                          <span class=\"battle-target\">" + c0 + "</span>\n                        </span>\n                        <span class=\"battle-result " + IL.class + "\">" + IL.text + "</span>\n                      </div>\n                    ";
        }).join("") + "\n                </div>\n              " : "<div class=\"helper-text\">无详细战斗记录</div>") + "\n            </div>\n          </div>\n        ";
      }
    }).join("") + "\n      </div>\n    </div>\n  ";
    If.querySelectorAll("[data-toggle-member]").forEach(IW => {
      IW.addEventListener("click", () => {
        const IY = IW.getAttribute("data-toggle-member");
        const Im = If.querySelector("[data-member-idx=\"" + IY + "\"]").querySelector(".battle-member-details");
        const IE = IW.querySelector(".expand-icon");
        "none" === Im.style.display ? (Im.style.display = "block", IE.textContent = "▲") : (Im.style.display = "none", IE.textContent = "▼");
      });
    });
  };
  const Op = async Ib => {
    {
      ON = Ib || Ou();
      const If = document.getElementById("qa-battle-date");
      If && (If.value = ON);
      const IK = document.getElementById("qa-battle-records-content");
      IK && (IK.innerHTML = "<div class=\"helper-text\">正在加载战绩数据...</div>");
      try {
        {
          const IW = {
            date: ON
          };
          const IC = await Rz("legionwar_getdetails", IW);
          return IC && IC.roleDetailsList ? (IC.roleDetailsList.sort((Iy, IY) => {
            {
              const Im = Iy.winCnt || 0;
              const IE = IY.winCnt || 0;
              return IE !== Im ? IE - Im : (IY.buildingCnt || 0) - (Iy.buildingCnt || 0);
            }
          }), OF(IC), IC) : (IK && (IK.innerHTML = "<div class=\"helper-text\">未查询到战绩数据</div>"), null);
        }
      } catch (IY) {
        {
          IK && (IK.innerHTML = "<div class=\"helper-text\">获取战绩失败，请重试</div>");
          return null;
        }
      }
    }
  };
  const OV = async () => {
    if (!OZ?.["roleDetailsList"]) {
      return;
    }
    const II = OZ.roleDetailsList;
    const If = OR();
    let IK = 0;
    let IW = 0;
    let IC = 0;
    let Iy = 0;
    II.forEach(c0 => {
      {
        const c3 = c0.winCnt || 0;
        const c4 = c0.loseCnt || 0;
        IK += c3;
        IW += c4;
        IC += c0.buildingCnt || 0;
        Iy += Math.max(c4 - 6, 0);
      }
    });
    const IY = IW > 0 ? (IK / IW).toFixed(2) : IK;
    const Im = document.createElement("canvas");
    const IE = Im.getContext("2d");
    const IX = 20;
    const IG = [50, 140, 50, 50, 70, 50, 60];
    const IA = IG.reduce((c0, c1) => c0 + c1, 0) + 40;
    const IQ = 60 + 40 * II.length + 70 + 40;
    Im.width = 2 * IA;
    Im.height = 2 * IQ;
    IE.scale(2, 2);
    IE.fillStyle = If.bg;
    IE.fillRect(0, 0, IA, IQ);
    IE.fillStyle = If.text;
    IE.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IE.fillText("盐场战绩 - " + ON, IX, 40);
    IE.fillStyle = If.headerBg;
    IE.fillRect(IX, 60, IA - 40, 30);
    IE.fillStyle = If.headerText;
    IE.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let Ix = IX;
    ["排名", "成员", "胜", "负", "KD", "丹", "攻城"].forEach((c0, c1) => {
      IE.fillText(c0, Ix + 8, 80);
      Ix += IG[c1];
    });
    const Ik = II.map(c0 => {
      {
        c2 = c0.headImg;
        return new Promise(c4 => {
          if (!c2) {
            return void c4(null);
          }
          const c5 = new Image();
          c5.crossOrigin = "anonymous";
          c5.onload = () => c4(c5);
          c5.onerror = () => c4(null);
          c5.src = c2;
          setTimeout(() => c4(null), 3000);
        });
        var c2;
      }
    });
    const Ig = await Promise.all(Ik);
    IE.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    II.forEach((c0, c1) => {
      {
        const c3 = 90 + 40 * c1;
        const c4 = c0.winCnt || 0;
        const c5 = c0.loseCnt || 0;
        const c6 = c5 > 0 ? c4 / c5 : c4;
        const c7 = Math.max(c5 - 6, 0);
        c1 % 2 == 1 && (IE.fillStyle = If.rowAlt, IE.fillRect(IX, c3, IA - 40, 40));
        IE.fillStyle = If.text;
        let c8 = IX;
        IE.fillText(String(c1 + 1), c8 + 8, c3 + 26);
        c8 += IG[0];
        const c9 = Ig[c1];
        c9 && (IE.save(), IE.beginPath(), IE.arc(c8 + 8 + 12, c3 + 20, 12, 0, 2 * Math.PI), IE.clip(), IE.drawImage(c9, c8 + 8, c3 + 8, 24, 24), IE.restore());
        IE.fillStyle = c5 < 5 ? "#ef4444" : c6 >= 1 ? "#10b981" : "#f59e0b";
        IE.fillText((c0.name || "-").substring(0, 8), c8 + 40, c3 + 26);
        c8 += IG[1];
        IE.fillStyle = "#10b981";
        IE.fillText(String(c4), c8 + 8, c3 + 26);
        c8 += IG[2];
        IE.fillStyle = "#ef4444";
        IE.fillText(String(c5), c8 + 8, c3 + 26);
        c8 += IG[3];
        IE.fillStyle = "#6366f1";
        const cP = c5 > 0 ? (c4 / c5).toFixed(2) : c4;
        IE.fillText(String(cP), c8 + 8, c3 + 26);
        c8 += IG[4];
        IE.fillStyle = "#8b5cf6";
        IE.fillText(String(c7), c8 + 8, c3 + 26);
        c8 += IG[5];
        IE.fillStyle = "#f59e0b";
        IE.fillText(String(c0.buildingCnt || 0), c8 + 8, c3 + 26);
        IE.fillStyle = If.text;
      }
    });
    IE.strokeStyle = If.border;
    IE.lineWidth = 1;
    IE.strokeRect(IX, 60, IA - 40, 30 + 40 * II.length);
    const IL = 90 + 40 * II.length + 10;
    IE.fillStyle = If.summaryBg;
    IE.fillRect(IX, IL, IA - 40, 50);
    IE.strokeStyle = If.border;
    IE.strokeRect(IX, IL, IA - 40, 50);
    IE.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    IE.fillStyle = If.text;
    IE.fillText("俱乐部汇总数据", 30, IL + 16);
    IE.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    IE.fillStyle = If.headerText;
    const Id = "总KD: " + IY + "  |  总击杀: " + IK + "  |  总死亡: " + IW + "  |  总刨地: " + IC + "  |  总用丹: " + Iy;
    IE.fillText(Id, 30, IL + 36);
    IE.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    IE.fillStyle = If.footerText;
    IE.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), 30, IL + 66);
    await R9(Im, "盐场战绩_" + ON.replace(/\//g, "-") + ".png", TQ);
  };
  const OJ = Ib => {
    {
      switch (Ib) {
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
  const OH = Ib => {
    OU = Ib;
    const II = document.getElementById("qa-history-records-content");
    II && (Ib && Ib.warMap && 0 !== Ib.warMap.length ? II.innerHTML = "\n    <div class=\"history-records-info\">\n      <div class=\"history-records-list\">\n        " + Ib.warMap.map((If, IK) => "\n          <div class=\"history-war-item\">\n            <div class=\"war-type\">" + OJ(If.legionWarType) + "</div>\n            <div class=\"war-date\">日期: " + If.warDate + "</div>\n            <div class=\"war-rank\">名次: " + (Ib.warRank[IK] || "--") + "</div>\n          </div>\n        ").join("") + "\n      </div>\n    </div>\n  " : II.innerHTML = "<div class=\"helper-text\">暂无历史战绩数据</div>");
  };
  const Oh = async () => {
    const II = document.getElementById("qa-history-records-content");
    II && (II.innerHTML = "<div class=\"helper-text\">正在加载历史战绩...</div>");
    try {
      const If = await Rz("legion_getinfo", {});
      if (If && If.info && If.info.warRank && If.info.warMap) {
        {
          const IW = Object.values(If.info.warMap);
          const IC = {
            warMap: [].concat(...IW).reverse(),
            warRank: If.info.warRank.reverse()
          };
          OH(IC);
          return IC;
        }
      }
      II && (II.innerHTML = "<div class=\"helper-text\">未查询到历史战绩数据</div>");
      return null;
    } catch (Iy) {
      {
        II && (II.innerHTML = "<div class=\"helper-text\">获取历史战绩失败，请重试</div>");
        return null;
      }
    }
  };
  const OO = async () => {
    if (!OU?.["warMap"]) {
      return;
    }
    const II = OU.warMap;
    const If = OU.warRank;
    const IK = OR();
    const IW = document.createElement("canvas");
    const IC = IW.getContext("2d");
    const Iy = 20;
    const IY = [50, 120, 120, 80];
    const Im = IY.reduce((IA, IQ) => IA + IQ, 0) + 40;
    const IE = 60 + 35 * II.length + 40;
    IW.width = 2 * Im;
    IW.height = 2 * IE;
    IC.scale(2, 2);
    IC.fillStyle = IK.bg;
    IC.fillRect(0, 0, Im, IE);
    IC.fillStyle = IK.text;
    IC.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IC.fillText("俱乐部历史战绩", Iy, 40);
    IC.fillStyle = IK.headerBg;
    IC.fillRect(Iy, 60, Im - 40, 30);
    IC.fillStyle = IK.headerText;
    IC.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
    let IX = Iy;
    ["序号", "战争类型", "日期", "名次"].forEach((IA, IQ) => {
      IC.fillText(IA, IX + 8, 80);
      IX += IY[IQ];
    });
    IC.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    II.forEach((IA, IQ) => {
      {
        const Ik = 90 + 35 * IQ;
        IQ % 2 == 1 && (IC.fillStyle = IK.rowAlt, IC.fillRect(Iy, Ik, Im - 40, 35));
        IC.fillStyle = IK.text;
        let Ig = Iy;
        IC.fillText(String(IQ + 1), Ig + 8, Ik + 22);
        Ig += IY[0];
        IC.fillText(OJ(IA.legionWarType), Ig + 8, Ik + 22);
        Ig += IY[1];
        IC.fillText(IA.warDate || "--", Ig + 8, Ik + 22);
        Ig += IY[2];
        const IL = If[IQ] || "--";
        IC.fillStyle = IL <= 3 ? "#f59e0b" : IK.textSecondary;
        IC.fillText(String(IL), Ig + 8, Ik + 22);
        IC.fillStyle = IK.text;
      }
    });
    IC.strokeStyle = IK.border;
    IC.lineWidth = 1;
    IC.strokeRect(Iy, 60, Im - 40, 30 + 35 * II.length);
    const IG = new Date().toLocaleString("zh-CN");
    await R9(IW, "俱乐部历史战绩_" + IG.replace(/[/:]/g, "-") + ".png", TQ);
  };
  const Oj = () => {
    const Ib = document.getElementById("qa-battle-date");
    return Ib ? Ib.value : Ou();
  };
  var Oq = Object.freeze({
    __proto__: null,
    exportBattleRecordsImage: OV,
    exportHistoryRecordsImage: OO,
    fetchBattleRecords: Op,
    fetchHistoryRecords: Oh,
    getBattleDate: Oj,
    initBattleDate: () => {
      const Ib = document.getElementById("qa-battle-date");
      Ib && !Ib.value && (Ib.value = Ou());
    },
    renderBattleRecords: OF,
    renderHistoryRecords: OH
  });
  const Ob = {
    "5": [1],
    "6": [2],
    "0": [3],
    "1": [4],
    "2": [5],
    "3": [6],
    "4": [1, 2, 3, 4, 5, 6]
  };
  const OI = {
    "1": "BOSS 1",
    "2": "BOSS 2",
    "3": "BOSS 3",
    "4": "BOSS 4",
    "5": "BOSS 5",
    "6": "BOSS 6"
  };
  const Oc = () => Ob[new Date().getDay()] || [];
  const Of = () => {
    {
      const II = new Date().getHours();
      return II >= 8 && II < 20;
    }
  };
  const OK = Ib => Ib ? Ib >= 1000000000000 ? (Ib / 1000000000000).toFixed(2) + "万亿" : Ib >= 100000000 ? (Ib / 100000000).toFixed(2) + "亿" : Ib >= 10000 ? (Ib / 10000).toFixed(2) + "万" : Ib.toString() : "0";
  let OW = null;
  let OC = null;
  let Oy = false;
  let OY = 0;
  let Om = null;
  let OE = 0;
  let OX = null;
  let OG = false;
  let OA = false;
  let OQ = 0;
  const Ox = () => {
    const II = document.getElementById("qa-skin-towers-status");
    const If = document.getElementById("qa-skin-towers-count");
    const IK = document.getElementById("qa-skin-towers-boss-hint");
    const IW = document.getElementById("qa-skin-towers-grid");
    if (II && (Of() ? OC ? (II.textContent = "挑战BOSS" + OC + "中", II.className = "club-status-badge active") : OG ? (II.textContent = "抽奖中", II.className = "club-status-badge active") : OW ? (II.textContent = "第" + (OW.season || 1) + "赛季", II.className = "club-status-badge") : (II.textContent = "未加载", II.className = "club-status-badge") : (II.textContent = "非活动时间(8-20点)", II.className = "club-status-badge warning")), If && (If.textContent = OY + " / 10", If.style.color = OY >= 10 ? "#ef4444" : ""), IK) {
      const IG = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      const IA = new Date().getDay();
      const IQ = Oc();
      IK.textContent = 6 === IQ.length ? IG[IA] + " - 全部BOSS" : IG[IA] + " - BOSS " + IQ.join(", ");
    }
    if (IW && OW?.["towerData"]) {
      const Ix = Oc();
      let Ik = "";
      for (let Ig = 1; Ig <= 6; Ig++) {
        {
          const IL = OW.towerData[Ig] || {};
          const Id = Ix.includes(Ig);
          const c0 = IL.pass;
          const c1 = OC === Ig;
          const c2 = Id && !c0 && !OC && OY < 10 && Of();
          Ik += "\n        <div class=\"skin-tower-item " + (c0 ? "passed" : "") + " " + (c1 ? "fighting" : "") + " " + (Id ? "" : "disabled") + "\">\n          <div class=\"tower-name\">" + OI[Ig] + "</div>\n          <div class=\"tower-level\">第 " + (IL.actTowerLv || 1) + " 层</div>\n          <div class=\"tower-score\">" + OK(IL.towerScore) + "</div>\n          <div class=\"tower-status\">\n            " + (c0 ? "<span style=\"color:#22c55e\">已通关</span>" : c1 ? "<span style=\"color:#eab308\">挑战中</span>" : Id ? "<span style=\"color:#6b7280\">进行中</span>" : "<span style=\"color:#9ca3af\">未开放</span>") + "\n          </div>\n          <button class=\"btn btn-sm " + (c1 ? "btn-danger" : "btn-primary") + "\"\n                  data-action=\"" + (c1 ? "skin-towers-stop" : "skin-towers-challenge") + "\"\n                  data-boss=\"" + Ig + "\"\n                  " + (c2 || c1 ? "" : "disabled") + ">\n            " + (c1 ? "停止" : "挑战") + "\n          </button>\n        </div>";
        }
      }
      IW.innerHTML = Ik;
    }
    const IC = document.getElementById("qa-skin-lottery-count");
    const Iy = document.getElementById("qa-skin-lottery-actid");
    const IY = document.getElementById("qa-skin-lottery-status");
    const Im = document.getElementById("qa-skin-lottery-start");
    const IE = document.getElementById("qa-skin-lottery-stop");
    const IX = document.getElementById("qa-skin-lottery-refresh");
    IC && (IC.textContent = OE + " 个", IC.style.color = OE > 0 ? "#22c55e" : "");
    Iy && (Iy.textContent = Om ? "活动ID: " + Om : "未获取");
    IY && (OG ? (IY.textContent = "抽奖中... 已完成 " + OQ + " 次", IY.style.color = "#eab308") : IY.textContent = "");
    Im && (Im.style.display = OG ? "none" : "", Im.disabled = !Om || OE <= 0);
    IE && (IE.style.display = OG ? "" : "none");
    IX && (IX.disabled = OG || !Om);
  };
  const Ok = async () => {
    try {
      const Ib = await Rz("towers_getinfo", {}, "换皮闯关-获取信息");
      OW = Ib?.["towerData"] || Ib;
      undefined !== OW?.["todayUseTickCnt"] && (OY = OW.todayUseTickCnt);
      OW?.["actId"] && (Om = OW.actId + 1);
      Ox();
      TQ("获取换皮闯关信息成功", "success");
      return OW;
    } catch (II) {
      TQ("获取换皮闯关信息失败: " + II.message, "error");
      return null;
    }
  };
  const Og = () => {
    {
      Oy = true;
    }
  };
  const OL = Ib => {
    {
      const IW = {
        isVictory: false
      };
      if (!Ib?.["result"]) {
        return IW;
      }
      const IC = Ib.result.isWin;
      const Iy = Ib.result.sponsor?.["ext"]?.["curHP"] ?? 0;
      return {
        isVictory: undefined !== IC ? IC : Iy > 0,
        myHp: Iy
      };
    }
  };
  const Od = async Ib => {
    {
      if (!Of()) {
        return void TQ("非活动时间（8:00-20:00）", "warning");
      }
      if (!Oc().includes(Ib)) {
        return void TQ("BOSS" + Ib + "今日未开放", "warning");
      }
      if (OY >= 10) {
        return void TQ("今日挑战次数已用完", "warning");
      }
      if (OC) {
        return void TQ("已有挑战进行中", "warning");
      }
      OC = Ib;
      Oy = false;
      Ox();
      let If = 0;
      let IK = 0;
      try {
        for (let IW = 0; IW < 100 && !Oy; IW++) {
          let IC;
          try {
            {
              IC = await Rz("towers_getinfo", {}, "换皮闯关-BOSS" + Ib + "-状态查询");
            }
          } catch (IG) {}
          const Iy = IC?.["towerData"]?.["towerData"]?.[Ib];
          if (undefined !== IC?.["towerData"]?.["todayUseTickCnt"] && (OY = IC.towerData.todayUseTickCnt), IC?.["towerData"] && (OW = IC.towerData), OY >= 10) {
            break;
          }
          if (Iy?.["pass"]) {
            break;
          }
          if (true !== Iy?.["fighting"]) {
            try {
              {
                const IQ = {
                  towerType: Ib
                };
                const Ix = await Rz("towers_start", IQ, "换皮闯关-BOSS" + Ib + "-开始挑战");
                if (undefined !== Ix?.["towerData"]?.["todayUseTickCnt"] && (OY = Ix.towerData.todayUseTickCnt), Ix?.["towerData"]?.["towerData"]?.[Ib]?.["pass"]) {
                  break;
                }
              }
            } catch (Ik) {
              await R4(2000);
              continue;
            }
          }
          let IY = false;
          let Im = 0;
          const IE = 3;
          for (; !IY && Im < IE && !Oy;) {
            let Ig;
            try {
              const Id = {
                towerType: Ib
              };
              Ig = await Rz("towers_fight", Id, "换皮闯关-BOSS" + Ib + "-战斗(第" + (Im + 1) + "次)");
            } catch (c0) {
              Im++;
              await R4(2000);
              continue;
            }
            undefined !== Ig?.["towerData"]?.["todayUseTickCnt"] && (OY = Ig.towerData.todayUseTickCnt);
            const {
              isVictory: IL
            } = OL(Ig?.["battleData"]);
            if (IL) {
              if (If++, IK = 0, IY = true, Ig?.["towerData"]?.["pass"]) {
                break;
              }
              await R4(1500);
            } else {
              {
                if (IK++, IY = true, IK >= 3) {
                  break;
                }
                await R4(2000);
              }
            }
          }
          IY && Ox();
        }
      } catch (c2) {
        TQ("挑战BOSS" + Ib + "失败: " + c2.message, "error");
      } finally {
        {
          OC = null;
          Oy = false;
          await Ok();
          If > 0 && TQ("BOSS" + Ib + "挑战完成，胜利" + If + "次", "success");
        }
      }
    }
  };
  const j0 = async () => {
    if (Om) {
      try {
        {
          if (OX) {
            const If = await Rz("role_getroleinfo", {}, "换皮闯关-抽奖-查询道具数量");
            const IK = If?.["role"]?.["items"];
            const IW = RR(IK, OX);
            OE = IW && IW.quantity || 0;
          } else {
            {
              const IC = {
                actId: Om
              };
              const Iy = await Rz("activity_startactegame", IC, "换皮闯关-抽奖-获取道具ID");
              const IY = Iy?.["role"]?.["items"];
              if (IY) {
                const Im = Object.keys(IY);
                Im.length > 0 && (OX = Number(Im[0]), OE = RZ(IY, OX));
              }
            }
          }
          Ox();
          TQ("抽奖道具: " + OE + " 个", "success");
        }
      } catch (IX) {
        TQ("获取抽奖道具失败: " + IX.message, "error");
      }
    } else {
      TQ("请先刷新进度获取活动ID", "warning");
    }
  };
  const j1 = async () => {
    if (Om) {
      if (OG) {
        TQ("抽奖进行中", "warning");
      } else {
        if (OX) {
          OQ = 0;
        } else {
          try {
            const II = {
              actId: Om
            };
            const If = await Rz("activity_startactegame", II, "换皮闯关-抽奖-首次获取道具ID");
            const IK = If?.["role"]?.["items"];
            if (IK) {
              const IW = Object.keys(IK);
              IW.length > 0 && (OX = Number(IW[0]), OE = RZ(IK, OX));
            }
            OQ = 1;
            TQ("首次抽奖完成，已获取道具信息", "success");
          } catch (IC) {
            return void TQ("获取道具信息失败: " + IC.message, "error");
          }
        }
        OG = true;
        OA = false;
        Ox();
        try {
          {
            for (; !OA;) {
              {
                for (; OE > 0 && !OA;) {
                  try {
                    const Iy = {
                      actId: Om
                    };
                    await Rz("activity_startactegame", Iy, "换皮闯关-抽奖-第" + (OQ + 1) + "次");
                    OE--;
                    OQ++;
                    Ox();
                    await R4(500);
                  } catch (IY) {
                    TQ("抽奖失败: " + IY.message, "error");
                    await R4(1000);
                  }
                }
                if (OA) {
                  break;
                }
                try {
                  const Im = {
                    actId: Om
                  };
                  const IE = await Rz("activity_actegamestageclaim", Im, "换皮闯关-抽奖-领取节点奖励");
                  const IX = IE?.["role"]?.["items"];
                  const IG = RZ(IX, OX);
                  if (!(IX && OX && IG > 0)) {
                    break;
                  }
                  OE = IG;
                  TQ("领取节点奖励成功，获得 " + OE + " 个道具", "success");
                  Ox();
                  await R4(500);
                } catch (IA) {
                  {
                    break;
                  }
                }
              }
            }
            OA ? TQ("已停止抽奖，共完成 " + OQ + " 次", "info") : TQ("抽奖完成，共完成 " + OQ + " 次", "success");
          }
        } catch (Ig) {
          TQ("抽奖出错: " + Ig.message, "error");
        } finally {
          {
            OG = false;
            Ox();
          }
        }
      }
    } else {
      TQ("请先刷新进度获取活动ID", "warning");
    }
  };
  const j2 = () => {
    {
      OA = true;
      TQ("正在停止抽奖...", "info");
    }
  };
  const j3 = {
    __proto__: null,
    fetchLotteryInfo: j0,
    fetchSkinTowersInfo: Ok,
    startLottery: j1,
    startSkinTowersChallenge: Od,
    stopLottery: j2,
    stopSkinTowersChallenge: Og,
    updateSkinTowersUI: Ox
  };
  var j4 = Object.freeze(j3);
  let j5 = null;
  const j6 = (Ib, II, If = []) => {
    j5 && j7();
    const IW = document.createElement("div");
    IW.innerHTML = ((IY, Im, IE) => "\n    <div class=\"qa-modal-backdrop\">\n      <div class=\"qa-modal-container\">\n        <div class=\"qa-modal-header\">\n          <h3 class=\"qa-modal-title\">" + IY + "</h3>\n          <button class=\"qa-modal-close\" aria-label=\"关闭\">&times;</button>\n        </div>\n        <div class=\"qa-modal-body\">" + Im + "</div>\n        <div class=\"qa-modal-footer\">" + IE.map((IX, IG) => "<button class=\"qa-modal-btn qa-modal-btn-" + (IX.type || "default") + "\" data-btn-idx=\"" + IG + "\">" + IX.label + "</button>").join("") + "</div>\n      </div>\n    </div>\n  ")(Ib, II, If);
    const IC = IW.firstElementChild;
    document.body.appendChild(IC);
    j5 = IC;
    j9();
    IC.querySelector(".qa-modal-container");
    IC.querySelector(".qa-modal-close").addEventListener("click", j7);
    IC.addEventListener("click", IY => {
      IY.target === IC && j7();
    });
    const Iy = IY => {
      "Escape" === IY.key && (j7(), document.removeEventListener("keydown", Iy));
    };
    document.addEventListener("keydown", Iy);
    If.forEach((IY, Im) => {
      {
        const IG = IC.querySelector("[data-btn-idx=\"" + Im + "\"]");
        IG && IY.onClick && IG.addEventListener("click", () => {
          IY.onClick();
          false !== IY.closeOnClick && j7();
        });
      }
    });
    requestAnimationFrame(() => {
      IC.classList.add("qa-modal-show");
    });
  };
  const j7 = () => {
    j5 && (j5.classList.remove("qa-modal-show"), setTimeout(() => {
      j5 && j5.parentNode && j5.parentNode.removeChild(j5);
      j5 = null;
    }, 300));
  };
  let j8 = false;
  const j9 = () => {
    {
      if (j8) {
        return;
      }
      j8 = true;
      const IK = document.createElement("style");
      IK.textContent = "\n    .qa-modal-backdrop {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: rgba(0, 0, 0, 0.5);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 100000;\n      opacity: 0;\n      transition: opacity 0.3s ease;\n    }\n    .qa-modal-backdrop.qa-modal-show {\n      opacity: 1;\n    }\n    .qa-modal-container {\n      background: var(--card-bg, #fff);\n      border-radius: 12px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n      max-width: 500px;\n      width: 90%;\n      max-height: 80vh;\n      display: flex;\n      flex-direction: column;\n      transform: scale(0.9);\n      transition: transform 0.3s ease;\n    }\n    .qa-modal-show .qa-modal-container {\n      transform: scale(1);\n    }\n    .qa-modal-header {\n      padding: 16px 20px;\n      border-bottom: 1px solid var(--border-color, #e5e5e5);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .qa-modal-title {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: var(--text-primary, #000);\n    }\n    .qa-modal-close {\n      background: none;\n      border: none;\n      font-size: 28px;\n      line-height: 1;\n      color: var(--text-secondary, #666);\n      cursor: pointer;\n      padding: 0;\n      width: 32px;\n      height: 32px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 4px;\n      transition: background 0.2s;\n    }\n    .qa-modal-close:hover {\n      background: var(--hover-bg, #f0f0f0);\n    }\n    .qa-modal-body {\n      padding: 20px;\n      overflow-y: auto;\n      flex: 1;\n      color: var(--text-primary, #000);\n      line-height: 1.6;\n    }\n    .qa-modal-footer {\n      padding: 12px 20px;\n      border-top: 1px solid var(--border-color, #e5e5e5);\n      display: flex;\n      gap: 10px;\n      justify-content: flex-end;\n    }\n    .qa-modal-btn {\n      padding: 8px 16px;\n      border-radius: 6px;\n      border: none;\n      font-size: 14px;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n    .qa-modal-btn-primary {\n      background: #007AFF;\n      color: #fff;\n    }\n    .qa-modal-btn-primary:hover {\n      background: #0051D5;\n    }\n    .qa-modal-btn-default {\n      background: var(--card-bg, #f0f0f0);\n      color: var(--text-primary, #000);\n      border: 1px solid var(--border-color, #e5e5e5);\n    }\n    .qa-modal-btn-default:hover {\n      background: var(--hover-bg, #e5e5e5);\n    }\n  ";
      document.head.appendChild(IK);
    }
  };
  let jP = null;
  let jD = null;
  const jv = {
    name: "郭嘉",
    type: "魏国"
  };
  const jB = {
    name: "关羽",
    type: "蜀国"
  };
  const jz = {
    name: "周瑜",
    type: "吴国"
  };
  const jM = {
    name: "吕布",
    type: "群雄"
  };
  const jS = {
    name: "华佗",
    type: "群雄"
  };
  const jT = {
    name: "甄姬",
    type: "魏国"
  };
  const jR = {
    name: "黄月英",
    type: "蜀国"
  };
  const jZ = {
    name: "孙策",
    type: "吴国"
  };
  const jU = {
    name: "贾诩",
    type: "群雄"
  };
  const jN = {
    name: "曹仁",
    type: "魏国"
  };
  const ju = {
    name: "姜维",
    type: "蜀国"
  };
  const jF = {
    name: "孙坚",
    type: "吴国"
  };
  const jp = {
    name: "公孙瓒",
    type: "群雄"
  };
  const jV = {
    name: "典韦",
    type: "魏国"
  };
  const jJ = {
    name: "赵云",
    type: "蜀国"
  };
  const jH = {
    name: "大乔",
    type: "吴国"
  };
  const jh = {
    name: "张角",
    type: "群雄"
  };
  const jO = {
    name: "徐晃",
    type: "魏国"
  };
  const jj = {
    name: "荀彧",
    type: "魏国"
  };
  const jq = {
    name: "典韦",
    type: "魏国"
  };
  const jw = {
    name: "张飞",
    type: "蜀国"
  };
  const jb = {
    name: "赵云",
    type: "蜀国"
  };
  const jI = {
    name: "庞统",
    type: "蜀国"
  };
  const jc = {
    name: "鲁肃",
    type: "吴国"
  };
  const jf = {
    name: "陆逊",
    type: "吴国"
  };
  const jK = {
    name: "甘宁",
    type: "吴国"
  };
  const jW = {
    name: "貂蝉",
    type: "群雄"
  };
  const jC = {
    name: "董卓",
    type: "群雄"
  };
  const jy = {
    name: "张角",
    type: "群雄"
  };
  const jY = {
    name: "张辽",
    type: "魏国"
  };
  const jm = {
    name: "许褚",
    type: "魏国"
  };
  const jE = {
    name: "魏延",
    type: "蜀国"
  };
  const jX = {
    name: "黄忠",
    type: "蜀国"
  };
  const jG = {
    name: "马超",
    type: "蜀国"
  };
  const jA = {
    name: "马岱",
    type: "蜀国"
  };
  const jQ = {
    name: "吕蒙",
    type: "吴国"
  };
  const jx = {
    name: "黄盖",
    type: "吴国"
  };
  const jk = {
    name: "小乔",
    type: "吴国"
  };
  const jg = {
    name: "袁绍",
    type: "群雄"
  };
  const jL = {
    name: "华雄",
    type: "群雄"
  };
  const jd = {
    name: "颜良",
    type: "群雄"
  };
  const q0 = {
    name: "文丑",
    type: "群雄"
  };
  const q1 = {
    name: "周泰",
    type: "吴国"
  };
  const q2 = {
    name: "许攸",
    type: "魏国"
  };
  const q3 = {
    name: "于禁",
    type: "魏国"
  };
  const q4 = {
    name: "张星彩",
    type: "蜀国"
  };
  const q5 = {
    name: "关平",
    type: "蜀国"
  };
  const q6 = {
    name: "程普",
    type: "吴国"
  };
  const q7 = {
    name: "张昭",
    type: "吴国"
  };
  const q8 = {
    name: "陆绩",
    type: "吴国"
  };
  const q9 = {
    name: "吕玲绮",
    type: "群雄"
  };
  const qP = {
    name: "潘凤",
    type: "群雄"
  };
  const qD = {
    name: "孟获",
    type: "群雄"
  };
  const qv = (Ib, II) => "接口响应 " + Ib + " / " + II + "ms";
  const qB = async () => {
    const II = document.getElementById("qa-update-status");
    const If = document.getElementById("qa-latest-version");
    const IK = document.getElementById("qa-do-update-btn");
    const IW = document.getElementById("qa-check-update-btn");
    II && (II.textContent = "正在检查更新...");
    IW && (IW.disabled = true);
    try {
      {
        const Iy = performance.now();
        const IY = TZ + "/version-updates/latest?t=" + Date.now();
        const Im = await fetch(IY, {
          headers: {
            "Cache-Control": "no-cache"
          }
        });
        const IE = Math.round(performance.now() - Iy);
        if (!Im.ok) {
          throw new Error("请求失败 (" + Im.status + ")");
        }
        let IX;
        try {
          IX = await Im.json();
        } catch (IQ) {
          II && (II.textContent = qv(Im.status, IE) + "，返回格式异常");
          If && (If.textContent = "--");
          return void (IK && (IK.style.display = "none"));
        }
        const IG = qv(Im.status, IE);
        if (!IX.version) {
          II && (II.textContent = "接口可用（" + IG + "），暂无版本信息");
          If && (If.textContent = "--");
          IK && (IK.style.display = "none");
          jP = null;
          return void (jD = null);
        }
        jP = IX.version;
        jD = IX.scriptUrl || null;
        If && (If.textContent = "v" + jP);
        const IA = ((Ix, Ik) => {
          {
            const Id = Ix.replace(/^v/, "").split(".").map(Number);
            const c0 = Ik.replace(/^v/, "").split(".").map(Number);
            for (let c1 = 0; c1 < Math.max(Id.length, c0.length); c1++) {
              const c2 = Id[c1] || 0;
              const c3 = c0[c1] || 0;
              if (c2 > c3) {
                return 1;
              }
              if (c2 < c3) {
                return -1;
              }
            }
            return 0;
          }
        })(jP, Tb);
        IA > 0 ? jD ? (II && (II.innerHTML = "<span style=\"color:#34c759;\">发现新版本！</span> v" + Tb + " → v" + jP + " <span style=\"color:#8e8e93;\">(" + IG + ")</span>"), IK && (IK.style.display = ""), TQ("发现新版本 v" + jP, "success")) : (II && (II.textContent = "发现新版本 v" + jP + "，但脚本链接缺失（" + IG + "）"), IK && (IK.style.display = "none")) : 0 === IA ? (II && (II.textContent = "当前已是最新版本（" + IG + "）"), IK && (IK.style.display = "none")) : (II && (II.textContent = "当前版本较新（开发版本）（" + IG + "）"), IK && (IK.style.display = "none"));
      }
    } catch (Ix) {
      II && (II.textContent = "检查更新失败: " + (Ix.message || "网络错误"));
    } finally {
      IW && (IW.disabled = false);
    }
  };
  const qz = Ib => {
    {
      const IK = document.createElement("textarea");
      IK.value = Ib;
      IK.style.position = "fixed";
      IK.style.opacity = "0";
      document.body.appendChild(IK);
      IK.select();
      let IW = false;
      try {
        {
          IW = document.execCommand("copy");
        }
      } catch (Iy) {
        IW = false;
      }
      document.body.removeChild(IK);
      IW ? TQ("更新链接已复制到粘贴板", "success") : j6("复制失败", "\n      <p style=\"margin-bottom:12px;\">无法自动复制到粘贴板，请手动复制以下链接：</p>\n      <textarea readonly style=\"width:100%;height:80px;padding:8px;border:1px solid var(--border-color);border-radius:4px;font-size:12px;resize:none;background:var(--card-bg);\">" + Ib + "</textarea>\n    ", [{
        label: "关闭",
        type: "default"
      }]);
    }
  };
  const qM = {
    101: {
      name: "司马懿",
      type: "魏国"
    },
    102: jv,
    103: jB,
    104: {
      name: "诸葛亮",
      type: "蜀国"
    },
    105: jz,
    106: {
      name: "太史慈",
      type: "吴国"
    },
    107: jM,
    108: jS,
    109: jT,
    110: jR,
    111: jZ,
    112: jU,
    113: jN,
    114: ju,
    115: jF,
    116: jp,
    117: jV,
    118: jJ,
    119: jH,
    120: jh,
    201: jO,
    202: jj,
    203: jq,
    204: jw,
    205: jb,
    206: jI,
    207: jc,
    208: jf,
    209: jK,
    210: jW,
    211: jC,
    212: jy,
    213: jY,
    214: {
      name: "夏侯惇",
      type: "魏国"
    },
    215: jm,
    216: {
      name: "夏侯渊",
      type: "魏国"
    },
    217: jE,
    218: jX,
    219: jG,
    220: jA,
    221: jQ,
    222: jx,
    223: {
      name: "蔡文姬",
      type: "魏国"
    },
    224: jk,
    225: jg,
    226: jL,
    227: jd,
    228: q0,
    301: q1,
    302: q2,
    303: q3,
    304: q4,
    305: {
      name: "关银屏",
      type: "蜀国"
    },
    306: q5,
    307: q6,
    308: q7,
    309: q8,
    310: q9,
    311: qP,
    312: {
      name: "邢道荣",
      type: "群雄"
    },
    313: {
      name: "祝融夫人",
      type: "群雄"
    },
    314: qD
  };
  const qS = () => {
    {
      const Ib = "dark" === TR.theme;
      const II = {
        bg: Ib ? "#1a1a2e" : "#ffffff",
        text: Ib ? "#f9fafb" : "#1f2937",
        textSecondary: Ib ? "#9ca3af" : "#6b7280",
        headerBg: Ib ? "#374151" : "#f3f4f6",
        headerText: Ib ? "#d1d5db" : "#374151",
        border: Ib ? "#4b5563" : "#e5e7eb",
        zebraStripe: Ib ? "#2d2d44" : "#f9fafb",
        gold: "#fbbf24",
        red: "#f87171",
        footerText: Ib ? "#6b7280" : "#9ca3af"
      };
      return II;
    }
  };
  const qT = Ib => new Promise(II => {
    {
      if (!Ib) {
        return void II(null);
      }
      const IK = new Image();
      IK.crossOrigin = "anonymous";
      IK.onload = () => II(IK);
      IK.onerror = () => II(null);
      IK.src = Ib;
      Z7(() => II(null), 3000, "peachtree-img-load");
    }
  });
  let qR = null;
  let qZ = null;
  let qU = null;
  let qN = null;
  const qu = Ib => Ib ? Ib >= 100000000 ? (Ib / 100000000).toFixed(1) + "亿" : Ib >= 10000 ? Math.round(Ib / 10000) + "w" : String(Ib) : "0";
  const qF = Ib => {
    const If = {
      totalRedQuench: 0,
      lineupStr: "-"
    };
    if (!Ib) {
      return If;
    }
    let IK = Ib.heroes;
    const IW = {
      totalRedQuench: 0,
      lineupStr: "-"
    };
    if (!IK && Ib.roleInfo && (IK = Ib.roleInfo.heroes), !IK && Ib.bottle && (IK = Ib.bottle.heroes), !IK) {
      return IW;
    }
    const IC = Array.isArray(IK) ? IK : Object.values(IK);
    let Iy = 0;
    const IY = [];
    IC.forEach(Im => {
      let IX = 0;
      Im?.["equipment"] && (Array.isArray(Im.equipment) ? Im.equipment : Object.values(Im.equipment)).forEach(IQ => {
        {
          if (IQ?.["quenches"]) {
            const Ix = Array.isArray(IQ.quenches) ? IQ.quenches : Object.values(IQ.quenches);
            IX += Ix.filter(Ik => 6 === Number(Ik.colorId)).length;
          }
        }
      });
      Iy += IX;
      const IG = qM[Im.heroId];
      const IA = IG ? IG.name : "未知(" + Im.heroId + ")";
      IY.push(IA + "(" + IX + ")");
    });
    return {
      totalRedQuench: Iy,
      lineupStr: IY.join(", ")
    };
  };
  const qp = Ib => {
    {
      const If = new Set();
      if (Ib) {
        const IA = Ib.match(/([\u4e00-\u9fa5]+)\(\d+\)/g);
        IA && IA.forEach(IQ => {
          const Ix = IQ.match(/([\u4e00-\u9fa5]+)/)[1];
          If.add(Ix);
        });
      }
      const IK = {
        type: "吴国",
        color: "color:#f87171;"
      };
      const IW = {
        type: "姜维",
        color: "color:#06b6d4;"
      };
      const IC = {
        type: "司马",
        color: "color:#93c5fd;"
      };
      const Iy = {
        type: "典韦",
        color: "color:#60a5fa;"
      };
      const IY = {
        type: "吕赵",
        color: "color:#f97316;"
      };
      const Im = {
        type: "吕布",
        color: "color:#dc2626;"
      };
      const IE = {
        type: "毒爆",
        color: "color:#92400e;"
      };
      const IX = {
        type: "关羽",
        color: "color:#166534;"
      };
      const IG = {
        type: "三蜀",
        color: "color:#22c55e;"
      };
      return If.has("周瑜") && If.has("孙策") ? IK : If.has("姜维") && If.has("孙策") ? IW : If.has("司马懿") && If.has("曹仁") ? IC : If.has("典韦") && If.has("曹仁") ? Iy : If.has("吕布") && If.has("赵云") ? IY : If.has("吕布") ? Im : If.has("张角") && If.has("华佗") ? IE : If.has("关羽") ? IX : If.has("诸葛亮") && If.has("黄月英") && If.has("赵云") ? IG : {
        type: "其他",
        color: "color:#6b7280;"
      };
    }
  };
  const qV = (Ib = null) => {
    {
      const IK = Ib ? new Date(Ib) : new Date();
      const IW = IK.getDay();
      const IC = 0 === IW ? 0 : IW;
      const Iy = new Date(IK);
      Iy.setDate(IK.getDate() - IC);
      return Iy;
    }
  };
  const qJ = async () => {
    const II = document.getElementById("qa-peachtree-date");
    const If = document.getElementById("qa-peachtree-content");
    If && (If.innerHTML = "<div class=\"helper-text\">查询中...</div>");
    try {
      const IK = II?.["value"]?.["trim"]();
      if (!IK) {
        return void (If.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请输入日期</div>");
      }
      const IW = (c7 => {
        {
          const cD = new Date(c7);
          return "" + cD.getFullYear() % 100 + String(cD.getMonth() + 1).padStart(2, "0") + String(cD.getDate()).padStart(2, "0");
        }
      })(IK);
      const IC = await Rz("legion_getinfo", {});
      const Iy = IC._rawData || IC;
      const IY = Iy.info || Iy;
      if (!IY || !IY.id) {
        throw new Error("获取军团信息失败");
      }
      const Im = {
        date: IW
      };
      const IE = IY.id;
      const IX = await Rz("legion_getinfobyid", {
        legionId: IE
      });
      const IG = IX._rawData || IX;
      const IA = IG.legionData || IG;
      const IQ = IA.name || IY.name || "";
      const Ix = IA.logo || "";
      const Ik = IA.quenchNum || IA.info?.["quenchNum"] || 0;
      const Ig = await Rz("legion_getpayloadkillrecord", Im);
      const IL = Ig._rawData || Ig;
      if (!IL?.["recordsMap"]) {
        throw new Error("未获取到蟠桃园战场记录");
      }
      const Id = [];
      const c0 = new Set();
      const c1 = new Set();
      if (Object.values(IL.recordsMap).forEach(c7 => {
        c7.forEach(c8 => {
          c8.roleInfo && c8.roleInfo.legionId !== IE && -1 === Id.findIndex(c9 => c9.roleId === c8.roleInfo.roleId) && (Id.push({
            roleId: c8.roleInfo.roleId,
            name: c8.roleInfo.name,
            headImg: c8.roleInfo.headImg,
            power: c8.roleInfo.power,
            legionId: c8.roleInfo.legionId,
            legionName: c8.roleInfo.legionName
          }), c0.add(c8.roleInfo.legionId), c1.add(c8.roleInfo.legionName));
        });
      }), 0 === Id.length) {
        return void (If.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">未找到敌方玩家信息</div>");
      }
      Id.sort((c7, c8) => c8.power - c7.power);
      If.innerHTML = "<div class=\"helper-text\">正在查询红淬信息... (0/" + Id.length + ")</div>";
      const c2 = 5;
      const c3 = [];
      for (let c7 = 0; c7 < Id.length; c7 += c2) {
        {
          const c9 = Id.slice(c7, c7 + c2);
          const cP = await Promise.all(c9.map(async cD => {
            {
              try {
                {
                  const cz = {
                    roleId: cD.roleId,
                    bottleType: 0,
                    includeBottleTeam: false,
                    isSearch: false
                  };
                  const cM = await Rz("rank_getroleinfo", cz);
                  const cS = cM._rawData || cM;
                  const {
                    totalRedQuench: cT,
                    lineupStr: cR
                  } = qF(cS);
                  const cZ = {
                    ...cD,
                    redQuench: cT,
                    lineup: cR
                  };
                  return cZ;
                }
              } catch (cU) {
                const cN = {
                  ...cD,
                  redQuench: 0,
                  lineup: "-"
                };
                return cN;
              }
            }
          }));
          c3.push(...cP);
          If.innerHTML = "<div class=\"helper-text\">正在查询红淬信息... (" + c3.length + "/" + Id.length + ")</div>";
          c7 + c2 < Id.length && (await new Promise(cD => Z7(cD, 200, "peachtree-batch-delay")));
        }
      }
      const c4 = {};
      const c5 = {};
      for (const cD of c0) try {
        const cv = {
          legionId: cD
        };
        const cB = await Rz("legion_getinfobyid", cv);
        const cz = cB._rawData || cB;
        const cM = cz.legionData || cz;
        if (cM || cM?.["info"]) {
          {
            const cT = cM.logo || cM.info?.["logo"] || "";
            const cR = cM.name || cM.info?.["name"] || "未知军团(" + cD + ")";
            const cZ = cM.quenchNum || cM.info?.["quenchNum"] || 0;
            const cU = {
              logo: cT,
              name: cR
            };
            c4[cD] = cU;
            c5[cD] = cZ;
          }
        }
      } catch (cN) {
        c4[cD] = {
          logo: "",
          name: "未知军团(" + cD + ")"
        };
        let cu = 0;
        c3.forEach(cF => {
          cF.legionId === cD && (cu += cF.redQuench || 0);
        });
        c5[cD] = cu;
      }
      const c6 = [...c3].sort((cF, cp) => {
        const cV = cF.redQuench || 0;
        return (cp.redQuench || 0) - cV;
      });
      qZ = {
        enemyPlayers: c6,
        date: IK,
        myLegionName: IQ,
        myLegionLogo: Ix,
        myLegionQuenchNum: Ik,
        enemyLegionName: Array.from(c1).join("、"),
        enemyLegionsInfo: c4,
        enemyLegionTotalRed: c5
      };
      qH(qZ);
      qN = "opponent";
      TQ("蟠桃园对手查询成功", "success");
      return qZ;
    } catch (cF) {
      If && (If.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + cF.message + "</div>");
      TQ("蟠桃园对手查询失败: " + cF.message, "error");
      return null;
    }
  };
  const qH = Ib => {
    const If = document.getElementById("qa-peachtree-content");
    if (!If || !Ib) {
      return;
    }
    const {
      enemyPlayers: IK,
      date: IW,
      myLegionName: IC,
      myLegionLogo: Iy,
      myLegionQuenchNum: IY,
      enemyLegionName: Im,
      enemyLegionsInfo: IE,
      enemyLegionTotalRed: IX
    } = Ib;
    Object.values(IX).forEach(IA => {});
    const IG = "\n    <div style=\"display:flex;align-items:center;justify-content:space-around;margin-bottom:12px;padding:12px;background:rgba(239,68,68,0.1);border-radius:8px;\">\n      <!-- 我方俱乐部 -->\n      <div style=\"text-align:center;\">\n        " + (Iy ? "<img src=\"" + Iy + "\" style=\"width:50px;height:50px;border-radius:8px;margin-bottom:6px;\">" : "") + "\n        <div style=\"font-weight:bold;font-size:12px;margin-bottom:3px;\">" + IC + "</div>\n        <div style=\"color:#f87171;font-size:10px;\">总红淬: " + IY + "</div>\n      </div>\n      \n      <!-- VS标识 -->\n      <div style=\"font-size:45px;font-weight:bold;color:#ff9800;margin:0 15px;\">VS</div>\n      \n      <!-- 敌方俱乐部 -->\n      <div style=\"text-align:center;display:flex;flex-direction:column;justify-content:center;\">\n        " + Object.keys(IE).map(IA => {
      const IQ = IE[IA];
      const Ix = IX[IA] || 0;
      return "\n            <div style=\"display:inline-block;margin:0 5px;\">\n              " + (IQ.logo ? "<img src=\"" + IQ.logo + "\" style=\"width:50px;height:50px;border-radius:8px;margin-bottom:6px;\">" : "") + "\n              <div style=\"font-weight:bold;font-size:12px;margin-bottom:3px;\">" + IQ.name + "</div>\n              <div style=\"color:#f87171;font-size:10px;\">总红淬: " + Ix + "</div>\n            </div>\n          ";
    }).join("") + "\n      </div>\n    </div>\n  ";
    If.innerHTML = "\n    " + IG + "\n    <div style=\"margin-bottom:10px;font-size:12px;color:var(--qa-text-2);text-align:center;\">\n      " + IC + " | " + Im + " | " + IW + " | 共" + IK.length + "个敌方玩家\n    </div>\n    <div style=\"overflow-x:auto;\">\n      <table style=\"width:100%;border-collapse:collapse;font-size:11px;\">\n        <tr style=\"background:var(--qa-bg-2);\">\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">序号</th>\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">头像</th>\n          <th style=\"padding:6px 4px;text-align:left;width:80px;\">角色名称</th>\n          <th style=\"padding:6px 4px;text-align:right;width:50px;\">战力</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">红淬</th>\n          <th style=\"padding:6px 4px;text-align:center;width:150px;\">阵容(红数)</th>\n          <th style=\"padding:6px 4px;text-align:center;width:50px;\">阵容类型</th>\n          <th style=\"padding:6px 4px;text-align:center;width:60px;\">玩家ID</th>\n        </tr>\n        " + IK.map((IA, IQ) => {
      {
        const Ik = qp(IA.lineup);
        let Ig = IA.lineup || "-";
        if ("-" !== Ig) {
          const Id = Ik.color.replace("color:", "").replace(";", "");
          switch (Ik.type) {
            case "吴国":
              Ig = Ig.replace(/(周瑜\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "姜维":
              Ig = Ig.replace(/(姜维\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "司马":
              Ig = Ig.replace(/(司马懿\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "典韦":
              Ig = Ig.replace(/(典韦\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "吕赵":
              Ig = Ig.replace(/(赵云\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "吕布":
              Ig = Ig.replace(/(吕布\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "毒爆":
              Ig = Ig.replace(/(张角\(\d+\)|华佗\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "关羽":
              Ig = Ig.replace(/(关羽\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
              break;
            case "三蜀":
              Ig = Ig.replace(/(诸葛亮\(\d+\)|赵云\(\d+\)|黄月英\(\d+\))/g, "<span style=\"color:" + Id + ";\">$1</span>");
          }
        }
        let IL = "";
        0 === IQ ? IL = "color:#fbbf24;font-weight:bold;font-size:12px;" : 1 === IQ ? IL = "color:#9ca3af;font-weight:bold;font-size:12px;" : 2 === IQ && (IL = "color:#d97706;font-weight:bold;font-size:12px;");
        return "\n            <tr style=\"border-bottom:1px solid var(--qa-border);\">\n              <td style=\"padding:6px 4px;text-align:center;" + IL + "\">" + (IQ + 1) + "</td>\n              <td style=\"padding:6px 4px;text-align:center;\">" + (IA.headImg ? "<img src=\"" + IA.headImg + "\" style=\"width:18px;height:18px;border-radius:3px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "</td>\n              <td style=\"padding:6px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px;\" title=\"" + IA.name + "\">" + (IA.name || "-") + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#fbbf24;\">" + qu(IA.power) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + (IA.redQuench || 0) + "</td>\n              <td style=\"padding:6px 4px;font-size:8px;text-align:center;\">" + Ig + "</td>\n              <td style=\"padding:6px 4px;text-align:center;" + Ik.color + "font-weight:bold;\" title=\"阵容类型: " + Ik.type + "\">" + Ik.type + "</td>\n              <td style=\"padding:6px 4px;text-align:center;font-size:8px;\">" + (IA.roleId || "-") + "</td>\n            </tr>\n          ";
      }
    }).join("") + "\n      </table>\n    </div>\n  ";
  };
  const qh = async () => {
    if (!qZ || !qZ.enemyPlayers) {
      return void TQ("无对手数据可导出", "warning");
    }
    const {
      enemyPlayers: II,
      date: If,
      myLegionName: IK,
      enemyLegionName: IW
    } = qZ;
    const IC = qS();
    const Iy = document.createElement("canvas");
    const IY = Iy.getContext("2d");
    const Im = 20;
    const IE = 22;
    const IX = [40, 35, 100, 70, 50, 200, 70, 80];
    const IG = IX.reduce((Ik, Ig) => Ik + Ig, 0) + 40;
    const IA = 100 + 32 * (II.length + 1) + 40 + 30;
    Iy.width = 2 * IG;
    Iy.height = 2 * IA;
    IY.scale(2, 2);
    IY.fillStyle = IC.bg;
    IY.fillRect(0, 0, IG, IA);
    IY.fillStyle = IC.text;
    IY.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText("蟠桃园对手信息", Im, 40);
    IY.fillStyle = IC.textSecondary;
    IY.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText(IK + " VS " + IW + " · " + If, Im, 64);
    IY.fillText("共" + II.length + "个敌方玩家", Im, 86);
    const IQ = new Map();
    await Promise.all(II.map(async Ik => {
      if (Ik.headImg) {
        const Ig = await qT(Ik.headImg);
        Ig && IQ.set(Ik.headImg, Ig);
      }
    }));
    IY.fillStyle = IC.headerBg;
    IY.fillRect(Im, 100, IG - 40, 32);
    IY.fillStyle = IC.headerText;
    IY.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
    let Ix = Im;
    ["序号", "头像", "名称", "战力", "红淬", "阵容(红数)", "阵容类型", "用户ID"].forEach((Ik, Ig) => {
      {
        IY.fillText(Ik, Ix + 6, 121);
        Ix += IX[Ig];
      }
    });
    IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    II.forEach((Ik, Ig) => {
      const IL = 100 + 32 * (Ig + 1);
      Ig % 2 == 1 && (IY.fillStyle = IC.zebraStripe, IY.fillRect(Im, IL, IG - 40, 32));
      let Id = Im;
      IY.fillStyle = 0 === Ig ? "#fbbf24" : 1 === Ig ? "#9ca3af" : 2 === Ig ? "#d97706" : IC.text;
      IY.fillText(String(Ig + 1), Id + 6, IL + 21);
      Id += IX[0];
      const c0 = Ik.headImg ? IQ.get(Ik.headImg) : null;
      c0 && (IY.save(), IY.beginPath(), IY.roundRect(Id + (IX[1] - IE) / 2, IL + 5, IE, IE, 4), IY.clip(), IY.drawImage(c0, Id + (IX[1] - IE) / 2, IL + 5, IE, IE), IY.restore());
      Id += IX[1];
      IY.fillStyle = IC.text;
      IY.fillText((Ik.name || "-").substring(0, 8), Id + 6, IL + 21);
      Id += IX[2];
      IY.fillStyle = IC.gold;
      IY.fillText(qu(Ik.power), Id + 6, IL + 21);
      Id += IX[3];
      IY.fillStyle = IC.red;
      IY.fillText(String(Ik.redQuench || 0), Id + 6, IL + 21);
      Id += IX[4];
      IY.fillStyle = IC.text;
      IY.font = "8px -apple-system, BlinkMacSystemFont, sans-serif";
      const c1 = (Ik.lineup || "-").substring(0, 35);
      IY.fillText(c1, Id + 6, IL + 21);
      IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
      Id += IX[5];
      const c2 = qp(Ik.lineup);
      IY.fillStyle = c2.color.replace("color:", "").replace(";", "");
      IY.font = "bold 10px -apple-system, BlinkMacSystemFont, sans-serif";
      IY.fillText(c2.type, Id + 6, IL + 21);
      IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
      Id += IX[6];
      IY.fillStyle = IC.textSecondary;
      IY.font = "9px -apple-system, BlinkMacSystemFont, sans-serif";
      IY.fillText(String(Ik.roleId || "-"), Id + 6, IL + 21);
      IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    });
    IY.strokeStyle = IC.border;
    IY.lineWidth = 1;
    IY.strokeRect(Im, 100, IG - 40, 32 * (II.length + 1));
    IY.fillStyle = IC.footerText;
    IY.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    IY.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), Im, IA - Im);
    await R9(Iy, "蟠桃园对手_" + IK + "_" + If.replace(/[/-]/g, "") + ".png", TQ);
  };
  const qO = (Ib, II, If) => {
    const IW = Im => "kill" === If ? Im.killCnt || 0 : "kd" === If ? parseFloat(Im.kd) || 0 : "revive" === If && Im.reviveCnt || 0;
    const IC = [...Ib.map(Im => ({
      ...Im,
      side: "my"
    })), ...II.map(Im => ({
      ...Im,
      side: "opponent"
    }))].sort((Im, IE) => IW(IE) - IW(Im)).slice(0, 3);
    const Iy = ["#fbbf24", "#9ca3af", "#cd7f32"];
    const IY = {
      kill: "击杀榜",
      kd: "K/D榜",
      revive: "复活榜"
    };
    return "\n    <div class=\"rank-board\" style=\"flex:1;min-width:140px;background:var(--qa-bg-2);border-radius:8px;padding:8px;\">\n      <div style=\"text-align:center;font-size:11px;font-weight:600;color:var(--qa-accent);margin-bottom:6px;\">" + IY[If] + "</div>\n      " + IC.map((Im, IE) => {
      const IX = Im.roleInfo || {};
      const IG = "my" === Im.side ? "#60a5fa" : "#f87171";
      return "\n          <div style=\"display:flex;align-items:center;gap:4px;padding:3px 0;font-size:10px;color:var(--qa-text-1);\">\n            <span style=\"color:" + Iy[IE] + ";font-weight:bold;width:14px;\">" + (IE + 1) + "</span>\n            " + (IX.headImg ? "<img src=\"" + IX.headImg + "\" style=\"width:16px;height:16px;border-radius:3px;\" onerror=\"this.style.display='none'\">" : "<span style=\"width:16px;\"></span>") + "\n            <span style=\"flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:" + IG + ";\">" + (IX.name || "-") + "</span>\n            <span style=\"font-weight:600;\">" + (IA => "kd" === If ? IA.kd : IW(IA))(Im) + "</span>\n          </div>\n        ";
    }).join("") + "\n    </div>\n  ";
  };
  const qj = (Ib, II) => {
    const If = "my" === II ? "#60a5fa" : "#f87171";
    return "\n    <table style=\"width:100%;border-collapse:collapse;font-size:10px;\">\n      <tr>\n        <th style=\"padding:4px 2px;color:" + If + ";width:20px;\">排名</th>\n        <th style=\"padding:4px 2px;color:" + If + ";\">成员</th>\n        <th style=\"padding:4px 2px;color:" + If + ";width:32px;\">击杀</th>\n        <th style=\"padding:4px 2px;color:" + If + ";width:28px;\">抢船</th>\n        <th style=\"padding:4px 2px;color:" + If + ";width:28px;\">连杀</th>\n        <th style=\"padding:4px 2px;color:" + If + ";width:28px;\">复活</th>\n        <th style=\"padding:4px 2px;color:" + If + ";width:32px;\">K/D</th>\n      </tr>\n      " + Ib.slice(0, 30).map((IK, IW) => {
      {
        const Iy = IK.roleInfo || {};
        return "\n          <tr style=\"border-bottom:1px solid var(--qa-border);\">\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (IW + 1) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">\n              <div style=\"display:inline-flex;align-items:center;justify-content:center;gap:3px;\">\n                " + (Iy.headImg ? "<img src=\"" + Iy.headImg + "\" style=\"width:14px;height:14px;border-radius:2px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "\n                <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60px;\">" + (Iy.name || "-") + "</span>\n              </div>\n            </td>\n            <td style=\"padding:3px 2px;text-align:center;color:#f87171;font-weight:600;\">" + (IK.killCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (IK.carCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (IK.mCKCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:var(--qa-text-1);\">" + (IK.reviveCnt || 0) + "</td>\n            <td style=\"padding:3px 2px;text-align:center;color:#fbbf24;\">" + IK.kd + "</td>\n          </tr>\n        ";
      }
    }).join("") + "\n    </table>\n  ";
  };
  const qq = Ib => {
    {
      const If = document.getElementById("qa-peachtree-content");
      if (!If || !Ib) {
        return;
      }
      const {
        my: IK,
        opponent: IW,
        date: IC
      } = Ib;
      If.innerHTML = "\n    <div class=\"peachtree-battle-vs\" style=\"background:var(--qa-bg-2);border-radius:12px;padding:16px;margin-bottom:12px;\">\n      <!-- VS头部 -->\n      <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;\">\n        <!-- 左侧俱乐部 -->\n        <div style=\"flex:1;text-align:center;\">\n          " + (IK.logo ? "<img src=\"" + IK.logo + "\" style=\"width:48px;height:48px;border-radius:8px;margin-bottom:4px;\" onerror=\"this.style.display='none'\">" : "<div style=\"width:48px;height:48px;border-radius:8px;background:#3b82f6;margin:0 auto 4px;\"></div>") + "\n          <div style=\"font-size:13px;font-weight:600;color:#60a5fa;\">" + IK.name + "</div>\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">战力: " + qu(IK.power) + "</div>\n        </div>\n        <!-- VS中间 -->\n        <div style=\"text-align:center;padding:0 12px;\">\n          <div style=\"font-size:20px;font-weight:bold;background:linear-gradient(135deg,#fbbf24,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;\">VS</div>\n          <div style=\"font-size:10px;color:var(--qa-text-2);margin:4px 0;\">" + IC + "</div>\n          <div style=\"font-size:11px;color:var(--qa-text-2);\">总击杀</div>\n          <div style=\"font-size:16px;font-weight:bold;\">\n            <span style=\"color:#60a5fa;\">" + IK.totalKill + "</span>\n            <span style=\"color:var(--qa-text-2);margin:0 4px;\">:</span>\n            <span style=\"color:#f87171;\">" + IW.totalKill + "</span>\n          </div>\n        </div>\n        <!-- 右侧俱乐部 -->\n        <div style=\"flex:1;text-align:center;\">\n          " + (IW.logo ? "<img src=\"" + IW.logo + "\" style=\"width:48px;height:48px;border-radius:8px;margin-bottom:4px;\" onerror=\"this.style.display='none'\">" : "<div style=\"width:48px;height:48px;border-radius:8px;background:#ef4444;margin:0 auto 4px;\"></div>") + "\n          <div style=\"font-size:13px;font-weight:600;color:#f87171;\">" + IW.name + "</div>\n          <div style=\"font-size:10px;color:var(--qa-text-2);\">战力: " + qu(IW.power) + "</div>\n        </div>\n      </div>\n\n      <!-- 排行榜 -->\n      <div style=\"display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;\">\n        " + qO(IK.members, IW.members, "kill") + "\n        " + qO(IK.members, IW.members, "kd") + "\n        " + qO(IK.members, IW.members, "revive") + "\n      </div>\n\n      <!-- 双方成员列表 -->\n      <div style=\"display:flex;gap:8px;\">\n        <div style=\"flex:1;min-width:0;\">\n          <div style=\"font-size:11px;font-weight:600;color:#60a5fa;margin-bottom:6px;display:flex;align-items:center;gap:4px;\">\n            <span style=\"width:8px;height:8px;background:rgba(59,130,246,0.3);border-radius:50%;border:1.5px solid #3b82f6;box-sizing:border-box;\"></span>\n            " + IK.name + "\n          </div>\n          <div style=\"background:var(--qa-bg-3);border-radius:8px;padding:6px;max-height:400px;overflow-y:auto;\">\n            " + qj(IK.members, "my") + "\n          </div>\n        </div>\n        <div style=\"flex:1;min-width:0;\">\n          <div style=\"font-size:11px;font-weight:600;color:#f87171;margin-bottom:6px;display:flex;align-items:center;gap:4px;\">\n            <span style=\"width:8px;height:8px;background:rgba(239,68,68,0.3);border-radius:50%;border:1.5px solid #ef4444;box-sizing:border-box;\"></span>\n            " + IW.name + "\n          </div>\n          <div style=\"background:var(--qa-bg-3);border-radius:8px;padding:6px;max-height:400px;overflow-y:auto;\">\n            " + qj(IW.members, "opponent") + "\n          </div>\n        </div>\n      </div>\n    </div>\n  ";
    }
  };
  const qw = async () => {
    if (!qU) {
      return void TQ("无战绩数据可导出", "warning");
    }
    const II = qS();
    const {
      my: If,
      opponent: IK,
      date: IW
    } = qU;
    const IC = [...If.members, ...IK.members];
    const Iy = new Map();
    await Promise.all(IC.map(async c8 => {
      {
        const cP = c8.roleInfo || {};
        if (cP.headImg) {
          const cD = await qT(cP.headImg);
          cD && Iy.set(cP.headImg, cD);
        }
      }
    }));
    const IY = If.logo ? await qT(If.logo) : null;
    const Im = IK.logo ? await qT(IK.logo) : null;
    const IE = document.createElement("canvas");
    const IX = IE.getContext("2d");
    const IG = 24;
    const IA = Math.max(If.members.length, IK.members.length, 30);
    const IQ = Math.min(IA, 30);
    const Ix = ["排名", "成员", "击杀", "抢船", "连杀", "复活", "K/D"];
    const Ik = [40, 120, 50, 45, 45, 45, 50];
    const Ig = Ik.reduce((c8, c9) => c8 + c9, 0);
    const IL = 2 * Ig + 72;
    const Id = 272 + 30 * IQ + 48 + 40;
    IE.width = 2 * IL;
    IE.height = 2 * Id;
    IX.scale(2, 2);
    const c0 = IX.createLinearGradient(0, 0, 0, Id);
    c0.addColorStop(0, II.bg);
    c0.addColorStop(1, "dark" === TR.theme ? "#0f0f1a" : "#f8fafc");
    IX.fillStyle = c0;
    IX.fillRect(0, 0, IL, Id);
    const c1 = IL / 2;
    const c2 = 56;
    const c3 = 34;
    IX.save();
    IX.beginPath();
    IX.roundRect(64, c3, c2, c2, 10);
    IX.clip();
    IY ? IX.drawImage(IY, 64, c3, c2, c2) : (IX.fillStyle = "#3b82f6", IX.fillRect(64, c3, c2, c2));
    IX.restore();
    IX.fillStyle = "#60a5fa";
    IX.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.textAlign = "center";
    IX.fillText(If.name, 92, 110);
    IX.fillStyle = II.textSecondary;
    IX.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillText("战力: " + qu(If.power), 92, 126);
    IX.fillStyle = II.gold;
    IX.font = "bold 28px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.textAlign = "center";
    IX.fillText("VS", c1, 64);
    IX.fillStyle = II.textSecondary;
    IX.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillText(IW, c1, 82);
    IX.fillText("总击杀", c1, 102);
    IX.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillStyle = "#60a5fa";
    IX.fillText(String(If.totalKill), c1 - 35, 126);
    IX.fillStyle = II.textSecondary;
    IX.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillText(":", c1, 126);
    IX.fillStyle = "#f87171";
    IX.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillText(String(IK.totalKill), c1 + 35, 126);
    IX.save();
    IX.beginPath();
    IX.roundRect(IL - IG - 40 - c2, c3, c2, c2, 10);
    IX.clip();
    Im ? IX.drawImage(Im, IL - IG - 40 - c2, c3, c2, c2) : (IX.fillStyle = "#ef4444", IX.fillRect(IL - IG - 40 - c2, c3, c2, c2));
    IX.restore();
    IX.fillStyle = "#f87171";
    IX.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.textAlign = "center";
    IX.fillText(IK.name, IL - IG - 40 - 28, 110);
    IX.fillStyle = II.textSecondary;
    IX.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillText("战力: " + qu(IK.power), IL - IG - 40 - 28, 126);
    IX.textAlign = "left";
    const c4 = (IL - 96) / 3;
    const c5 = ["#fbbf24", "#9ca3af", "#cd7f32"];
    const c6 = {
      key: "kill",
      title: "击杀榜",
      getValue: c8 => c8.killCnt || 0,
      format: c8 => c8
    };
    [c6, {
      key: "kd",
      title: "K/D榜",
      getValue: c8 => parseFloat(c8.kd) || 0,
      format: (c8, c9) => c9.kd
    }, {
      key: "revive",
      title: "复活榜",
      getValue: c8 => c8.reviveCnt || 0,
      format: c8 => c8
    }].forEach((c8, c9) => {
      {
        const cv = IG + c9 * (c4 + 12);
        IX.fillStyle = "dark" === TR.theme ? "#1e1e2e" : "#f1f5f9";
        IX.beginPath();
        IX.roundRect(cv, 140, c4, 84, 8);
        IX.fill();
        IX.fillStyle = II.gold;
        IX.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
        IX.textAlign = "center";
        IX.fillText(c8.title, cv + c4 / 2, 158);
        [...If.members.map(cB => ({
          ...cB,
          side: "my"
        })), ...IK.members.map(cB => ({
          ...cB,
          side: "opponent"
        }))].sort((cB, cz) => c8.getValue(cz) - c8.getValue(cB)).slice(0, 3).forEach((cB, cz) => {
          {
            const cS = cB.roleInfo || {};
            const cT = 168 + 22 * cz;
            const cR = "my" === cB.side ? "#60a5fa" : "#f87171";
            IX.fillStyle = c5[cz];
            IX.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
            IX.textAlign = "left";
            IX.fillText(String(cz + 1), cv + 8, cT + 14);
            const cZ = cS.headImg ? Iy.get(cS.headImg) : null;
            cZ && (IX.save(), IX.beginPath(), IX.roundRect(cv + 22, cT + 2, 16, 16, 3), IX.clip(), IX.drawImage(cZ, cv + 22, cT + 2, 16, 16), IX.restore());
            IX.fillStyle = cR;
            IX.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
            IX.fillText((cS.name || "-").substring(0, 8), cv + 42, cT + 14);
            IX.fillStyle = II.text;
            IX.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
            IX.textAlign = "right";
            IX.fillText(String(c8.format(c8.getValue(cB), cB)), cv + c4 - 8, cT + 14);
          }
        });
        IX.textAlign = "left";
      }
    });
    const c7 = (c8, c9, cP, cD) => {
      {
        const cz = c9 + 4;
        IX.beginPath();
        IX.arc(cz, 246, 4, 0, 2 * Math.PI);
        IX.fillStyle = "#60a5fa" === cD ? "rgba(59,130,246,0.3)" : "rgba(248,113,113,0.3)";
        IX.fill();
        IX.beginPath();
        IX.arc(cz, 246, 4, 0, 2 * Math.PI);
        IX.strokeStyle = cD;
        IX.lineWidth = 1.5;
        IX.stroke();
        IX.fillStyle = cD;
        IX.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
        IX.fillText(cP, c9 + 12, 252);
        IX.fillStyle = "dark" === TR.theme ? "#252538" : "#e2e8f0";
        IX.beginPath();
        IX.roundRect(c9, 260, Ig, 32, [8, 8, 0, 0]);
        IX.fill();
        IX.fillStyle = cD;
        IX.font = "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";
        let cM = c9;
        Ix.forEach((cS, cT) => {
          {
            const cR = cM + Ik[cT] / 2;
            IX.textAlign = "center";
            IX.fillText(cS, cR, 281);
            cM += Ik[cT];
          }
        });
        IX.textAlign = "left";
        IX.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
        c8.slice(0, IQ).forEach((cS, cT) => {
          {
            const cZ = 292 + 30 * cT;
            const cU = cS.roleInfo || {};
            cT % 2 == 1 && (IX.fillStyle = II.zebraStripe, IX.fillRect(c9, cZ, Ig, 30));
            let cN = c9;
            IX.fillStyle = II.text;
            IX.textAlign = "center";
            IX.fillText(String(cT + 1), cN + Ik[0] / 2, cZ + 20);
            cN += Ik[0];
            const cu = cU.headImg ? Iy.get(cU.headImg) : null;
            cu && (IX.save(), IX.beginPath(), IX.roundRect(cN + 4, cZ + 5, 20, 20, 4), IX.clip(), IX.drawImage(cu, cN + 4, cZ + 5, 20, 20), IX.restore());
            IX.fillStyle = II.text;
            IX.textAlign = "left";
            IX.fillText((cU.name || "-").substring(0, 6), cN + 20 + 8, cZ + 20);
            cN += Ik[1];
            IX.fillStyle = II.red;
            IX.textAlign = "center";
            IX.fillText(String(cS.killCnt || 0), cN + Ik[2] / 2, cZ + 20);
            cN += Ik[2];
            IX.fillStyle = II.text;
            IX.fillText(String(cS.carCnt || 0), cN + Ik[3] / 2, cZ + 20);
            cN += Ik[3];
            IX.fillText(String(cS.mCKCnt || 0), cN + Ik[4] / 2, cZ + 20);
            cN += Ik[4];
            IX.fillText(String(cS.reviveCnt || 0), cN + Ik[5] / 2, cZ + 20);
            cN += Ik[5];
            IX.fillStyle = II.gold;
            IX.fillText(cS.kd || "0", cN + Ik[6] / 2, cZ + 20);
          }
        });
        IX.textAlign = "left";
        IX.strokeStyle = II.border;
        IX.lineWidth = 1;
        IX.beginPath();
        IX.roundRect(c9, 260, Ig, 32 + 30 * IQ, 8);
        IX.stroke();
      }
    };
    c7(If.members, IG, If.name, "#60a5fa");
    c7(IK.members, 48 + Ig, IK.name, "#f87171");
    IX.fillStyle = II.footerText;
    IX.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
    IX.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), IG, Id - IG);
    await R9(IE, "蟠桃园战绩_" + If.name + "_vs_" + IK.name + "_" + IW.replace(/[/-]/g, "") + ".png", TQ);
  };
  const qb = new Map();
  const qI = {
    ignoreBOM: true,
    fatal: true
  };
  new TextEncoder();
  new TextDecoder("utf-8", qI);
  let qf = null;
  const qK = async () => (qf || (qf = await (async (Ib, II = {}) => {
    {
      if (qb.has(Ib)) {
        return qb.get(Ib);
      }
      const IW = {
        initial: 1,
        maximum: 10
      };
      const IC = (Im => {
        const IE = atob(Im);
        const IX = new Uint8Array(IE.length);
        for (let IG = 0; IG < IE.length; IG++) {
          IX[IG] = IE.charCodeAt(IG);
        }
        return IX;
      })(Ib);
      const Iy = {
        env: {
          memory: new WebAssembly.Memory(IW),
          abort: () => {}
        },
        ...II
      };
      const {
        instance: IY
      } = await WebAssembly.instantiate(IC, Iy);
      qb.set(Ib, IY);
      return IY;
    }
  })("weirdTower")), qf);
  const qW = Ib => {
    {
      const If = [];
      for (const IW in Ib) {
        const IC = Ib[IW];
        if (IC) {
          for (const Iy in IC) {
            {
              const Im = IC[Iy];
              Im && If.push({
                x: Number(IW),
                y: Number(Iy),
                gridType: Im.gridType || 0,
                gridItemId: Im.gridItemId || 0,
                isLock: Im.isLock ? 1 : 0
              });
            }
          }
        }
      }
      const IK = new Uint8Array(5 * If.length);
      for (let IE = 0; IE < If.length; IE++) {
        IK[5 * IE] = If[IE].x;
        IK[5 * IE + 1] = If[IE].y;
        IK[5 * IE + 2] = If[IE].gridType;
        IK[5 * IE + 3] = If[IE].gridItemId;
        IK[5 * IE + 4] = If[IE].isLock;
      }
      return IK;
    }
  };
  let qC = null;
  let qy = null;
  const qY = () => {
    {
      qC || (qC = (() => {
        {
          const II = new UF();
          II.compileLoad("arg0");
          II.compileGetProp("activity");
          II.compileGetProp("activity");
          II.compileDup();
          II.compilePush(null);
          II.emit(UN.EQ);
          II.emitWithArg(UN.JZ, 0);
          const If = II.bytecode.length - 2;
          II.emit(UN.POP);
          II.compileLoad("arg0");
          II.compileGetProp("body");
          II.compileGetProp("activity");
          II.compileGetProp("activity");
          const IK = II.bytecode.length;
          II.bytecode[If] = 255 & IK;
          II.bytecode[If + 1] = IK >> 8 & 255;
          II.compilePush("江湖黑市");
          II.compilePush(null);
          II.compileInvoke("findByName", 2);
          II.compileDup();
          II.compilePush(null);
          II.emit(UN.EQ);
          II.emitWithArg(UN.JNZ, 0);
          const IW = II.bytecode.length - 2;
          II.compileGetProp("endTime");
          II.compilePush(null);
          II.compileInvoke("parseDate", 1);
          II.compilePush(null);
          II.compileInvoke("getCurrentTime", 0);
          II.emit(UN.GT);
          II.compileReturn();
          const IC = II.bytecode.length;
          II.bytecode[IW] = 255 & IC;
          II.bytecode[IW + 1] = IC >> 8 & 255;
          II.emit(UN.POP);
          II.compilePush(false);
          II.compileReturn();
          return II.toBase64();
        }
      })());
      qy || (qy = (() => {
        const II = new UF();
        II.compileLoad("arg0");
        II.compileGetProp("error");
        II.compileLoad("arg0");
        II.compileGetProp("code");
        II.compilePush(null);
        II.compileInvoke("or", 2);
        II.emitWithArg(UN.JZ, 0);
        const If = II.bytecode.length - 2;
        II.compileLoad("arg0");
        II.compileGetProp("msg");
        II.compileDup();
        II.emitWithArg(UN.JNZ, 0);
        const IK = II.bytecode.length - 2;
        II.emit(UN.POP);
        II.compileLoad("arg0");
        II.compileGetProp("error");
        II.compileDup();
        II.emitWithArg(UN.JNZ, 0);
        const IW = II.bytecode.length - 2;
        II.emit(UN.POP);
        II.compilePush("挑战失败");
        const IC = II.bytecode.length;
        II.bytecode[IK] = 255 & IC;
        II.bytecode[IK + 1] = IC >> 8 & 255;
        const Iy = II.bytecode.length;
        II.bytecode[IW] = 255 & Iy;
        II.bytecode[IW + 1] = Iy >> 8 & 255;
        II.compilePush("error");
        II.emit(UN.SWAP);
        II.compilePush(null);
        II.compileInvoke("createObject", 2);
        II.compileReturn();
        const IY = II.bytecode.length;
        II.bytecode[If] = 255 & IY;
        II.bytecode[If + 1] = IY >> 8 & 255;
        II.compilePush("success");
        II.compilePush(true);
        II.compilePush("result");
        II.compileLoad("arg0");
        II.compilePush(null);
        II.compileInvoke("createObject2", 4);
        II.compileReturn();
        return II.toBase64();
      })());
    }
  };
  const qm = Ib => {
    {
      const If = (Ib?.["activity"]?.["activity"] || Ib?.["body"]?.["activity"]?.["activity"] || []).find(IW => "江湖黑市" === IW.name);
      if (!If) {
        return false;
      }
      const IK = Date.now();
      return new Date(If.endTime).getTime() > IK;
    }
  };
  const qE = Ib => Ib?.["error"] || Ib?.["code"] ? {
    error: Ib?.["msg"] || Ib?.["error"] || "挑战失败"
  } : {
    success: true,
    result: Ib
  };
  let qX = null;
  const qG = Ib => null == Ib || Ib < 0 ? "未参与" : Math.floor(Ib / 10) + 1 + "-" + (Ib % 10 + 1);
  const qA = async () => {
    try {
      const Ib = await Rz("evotower_getinfo", {}, 5000);
      const II = Ib?.["evoTower"] || Ib?.["body"]?.["evoTower"];
      const If = {
        towerId: II?.["towerId"] ?? 0,
        energy: II?.["energy"] ?? 0,
        maxEnergy: II?.["maxEnergy"] ?? 0,
        lotteryLeftCnt: II?.["lotteryLeftCnt"] ?? 0
      };
      TR.weirdTower = If;
      qQ();
      return TR.weirdTower;
    } catch (IK) {
      {
        TQ("获取怪异塔信息失败", "error");
        return null;
      }
    }
  };
  const qQ = () => {
    const Ib = TR.weirdTower;
    if (!Ib) {
      return;
    }
    const II = Ib.towerId || 0;
    const If = Math.floor(II / 10) + 1;
    const IK = II % 10 + 1;
    const IW = document.getElementById("qa-weird-tower-floor");
    const IC = document.getElementById("qa-weird-tower-energy");
    const Iy = document.getElementById("qa-weird-tower-keys");
    IW && (IW.textContent = If + "-" + IK);
    IC && (IC.textContent = Ib.energy + " / " + Ib.maxEnergy);
    Iy && (Iy.textContent = Ib.lotteryLeftCnt || 0);
  };
  const qx = async () => {
    try {
      {
        await Rz("evotower_readyfight", {}, 5000);
        const II = {
          battleNum: 1,
          winNum: 1
        };
        const If = await Rz("evotower_fight", II, 10000);
        return await (async IK => {
          try {
            {
              const IC = await (async () => (qY(), await Uj(qy, {
                or: (Iy, IY) => Iy || IY,
                createObject: (Iy, IY) => ({
                  [Iy]: IY
                }),
                createObject2: (Iy, IY, Im, IE) => ({
                  [Iy]: IY,
                  [Im]: IE
                })
              })))();
              return await IC(IK);
            }
          } catch (Iy) {
            {
              console.warn("[VM] Battle response validation 回退到 JS:", Iy.message);
              return qE(IK);
            }
          }
        })(If);
      }
    } catch (IW) {
      const IC = {
        error: IW.message || "未知错误"
      };
      return IC;
    }
  };
  const qk = async () => {
    if (TR.weirdTowerClimbing) {
      return void TQ("怪异塔爬塔进行中", "warning");
    }
    TR.weirdTowerClimbing = true;
    const Ib = document.getElementById("qa-weird-tower-status");
    const II = document.getElementById("qa-weird-tower-climb-btn");
    II && (II.disabled = true);
    try {
      {
        await qA();
        let If = TR.weirdTower?.["energy"] || 0;
        let IK = 0;
        for (; If > 0 && TR.weirdTowerClimbing;) {
          Ib && (Ib.textContent = "爬塔中 " + (IK + 1) + "次");
          const IW = await qx();
          if (IW.error) {
            TQ("挑战失败: " + IW.error, "error");
            break;
          }
          IK++;
          await R4(400);
          await qA();
          If = TR.weirdTower?.["energy"] || 0;
          const IC = TR.weirdTower?.["towerId"] || 0;
          if (1 == IC % 10 + 1 && IK > 0) {
            try {
              await Rz("evotower_claimreward", {}, 5000);
              const Iy = Math.floor(IC / 10);
              TQ("成功领取第" + Iy + "章通关奖励", "success");
            } catch (IY) {}
          }
        }
        Ib && (Ib.textContent = "完成 (共" + IK + "次)");
        TQ("怪异塔爬塔完成，共" + IK + "次", "success");
      }
    } catch (IE) {
      TQ("爬塔异常: " + IE.message, "error");
    } finally {
      TR.weirdTowerClimbing = false;
      II && (II.disabled = false);
      await qA();
    }
  };
  const qg = () => {
    {
      TR.weirdTowerClimbing = false;
      TQ("已停止怪异塔爬塔", "info");
    }
  };
  const qL = async () => {
    try {
      const Ib = {
        actType: 1
      };
      const II = await Rz("mergebox_claimfreeenergy", Ib, 5000);
      const If = II?.["body"]?.["reward"] || II?.["reward"];
      if (If && If.length > 0) {
        const IK = If.find(IW => 37001 === IW.itemId);
        if (IK) {
          TQ("成功领取 " + IK.value + " 个怪异钥匙", "success");
          return void (await qA());
        }
      }
      TQ("领取钥匙成功", "success");
      await qA();
    } catch (IW) {
      TQ("领取钥匙失败: " + IW.message, "error");
    }
  };
  const qd = async () => {
    {
      const II = {
        actType: 1
      };
      const If = await Rz("mergebox_getinfo", II, 8000);
      return If?.["body"]?.["mergeBox"] || If?.["mergeBox"];
    }
  };
  const w0 = async (Ib, II, If, IK) => {
    {
      const IY = {
        gridX: Ib,
        gridY: II
      };
      const Im = {
        gridX: If,
        gridY: IK
      };
      const IE = {
        actType: 1,
        sourcePos: IY,
        targetPos: Im
      };
      await Rz("mergebox_mergeitem", IE, 8000);
    }
  };
  const w1 = async Ib => {
    {
      try {
        return await (async If => {
          const IK = await qK();
          const IW = qW(If);
          const IC = IK.exports.__new(IW.length, 0);
          const Iy = IK.exports.__new(512, 0);
          try {
            const IY = new Uint8Array(IK.exports.memory.buffer);
            IY.set(IW, IC);
            const Im = IK.exports.findOpenableBoxes(IC, IW.length / 5, Iy);
            const IE = [];
            for (let IX = 0; IX < Im; IX++) {
              IE.push({
                x: IY[Iy + 2 * IX],
                y: IY[Iy + 2 * IX + 1]
              });
            }
            return IE;
          } finally {
            IK.exports.__delete(IC);
            IK.exports.__delete(Iy);
          }
        })(Ib);
      } catch (If) {
        {
          return (IW => {
            const IC = [];
            for (const [Iy, IY] of Object.entries(IW)) for (const [Im, IE] of Object.entries(IY)) 1 !== IE.gridType || IE.isLock || IC.push({
              x: Number(Iy),
              y: Number(Im)
            });
            return IC;
          })(Ib);
        }
      }
    }
  };
  const w2 = async Ib => {
    {
      try {
        return await (async If => {
          const IW = await qK();
          const IC = qW(If);
          const Iy = IW.exports.__new(IC.length, 0);
          const IY = IW.exports.__new(1280, 0);
          try {
            {
              const IE = new Uint8Array(IW.exports.memory.buffer);
              IE.set(IC, Iy);
              const IX = IW.exports.findMergablePairs(Iy, IC.length / 5, IY);
              const IG = [];
              for (let IA = 0; IA < IX; IA++) {
                const IQ = IY + 5 * IA;
                IG.push({
                  level: IE[IQ],
                  pos1: {
                    x: IE[IQ + 1],
                    y: IE[IQ + 2]
                  },
                  pos2: {
                    x: IE[IQ + 3],
                    y: IE[IQ + 4]
                  }
                });
              }
              return IG;
            }
          } finally {
            {
              IW.exports.__delete(Iy);
              IW.exports.__delete(IY);
            }
          }
        })(Ib);
      } catch (If) {
        return (IK => {
          {
            const IW = [];
            for (const [Iy, IY] of Object.entries(IK)) for (const [Im, IE] of Object.entries(IY)) 2 !== IE.gridType || IE.isLock || IW.push({
              x: Number(Iy),
              y: Number(Im),
              level: IE.gridItemId
            });
            const IC = [];
            for (let IX = 0; IX < IW.length; IX++) {
              for (let IG = IX + 1; IG < IW.length; IG++) {
                IW[IX].level === IW[IG].level && IC.push({
                  pos1: {
                    x: IW[IX].x,
                    y: IW[IX].y
                  },
                  pos2: {
                    x: IW[IG].x,
                    y: IW[IG].y
                  },
                  level: IW[IX].level
                });
              }
            }
            return IC;
          }
        })(Ib);
      }
    }
  };
  let w3 = null;
  const w4 = (Ib, II, If) => {
    {
      if (w3) {
        w3[Ib]?.[II] && delete w3[Ib][II];
        for (const IC of If || []) {
          {
            const IY = IC.gridX;
            const Im = IC.gridY;
            const IE = {
              gridType: 2,
              gridItemId: IC.gridItemId,
              isLock: false
            };
            w3[IY] || (w3[IY] = {});
            w3[IY][Im] = IE;
          }
        }
      }
    }
  };
  const w5 = (Ib, II, If, IK, IW) => {
    {
      const Iy = {
        gridType: 2,
        gridItemId: IW,
        isLock: false
      };
      w3 && (w3[Ib]?.[II] && delete w3[Ib][II], w3[If] || (w3[If] = {}), w3[If][IK] = Iy);
    }
  };
  const w6 = async () => {
    {
      if (TR.smartMergeBoxRunning) {
        return void TQ("智能开箱合成进行中", "warning");
      }
      TR.smartMergeBoxRunning = true;
      const If = document.getElementById("qa-merge-box-status");
      const IK = document.getElementById("qa-merge-box-btn");
      IK && (IK.disabled = true);
      let IW = 0;
      let IC = 0;
      let Iy = 0;
      w3 = null;
      try {
        await qA();
        let IY = TR.weirdTower?.["lotteryLeftCnt"] || 0;
        const Im = await qd();
        if (!Im) {
          return void TQ("获取地图信息失败", "error");
        }
        w3 = JSON.parse(JSON.stringify(Im.gridMap || {}));
        let IE = Im;
        for (; TR.smartMergeBoxRunning;) {
          const IX = (await w1(w3)) || [];
          let IG = false;
          if (IY > 0 && IX.length > 0) {
            for (const IA of IX) {
              {
                if (!TR.smartMergeBoxRunning || IY <= 0) {
                  break;
                }
                try {
                  {
                    const Ix = {
                      gridX: IA.x,
                      gridY: IA.y
                    };
                    const Ik = {
                      actType: 1,
                      pos: Ix
                    };
                    const Ig = await Rz("mergebox_openbox", Ik, 8000);
                    const IL = Ig?.["body"]?.["newPosList"] || Ig?.["newPosList"] || [];
                    IW++;
                    w4(IA.x, IA.y, IL);
                    const Id = Ig?.["body"]?.["evoTower"]?.["lotteryLeftCnt"] ?? Ig?.["evoTower"]?.["lotteryLeftCnt"];
                    if (undefined !== Id ? (IY = Id, TR.weirdTower && (TR.weirdTower.lotteryLeftCnt = IY), qQ()) : IY--, If && (If.textContent = "已开箱 " + IW + " 次，合成 " + IC + " 次"), !IL || 0 === IL.length) {
                      IG = true;
                      break;
                    }
                    await R4(300);
                  }
                } catch (c1) {
                  c1.message?.["includes"]("物品数量不足") && (IY = 0);
                  IG = true;
                  break;
                }
              }
            }
          } else {
            IG = true;
          }
          if (IG) {
            {
              const c3 = (await w2(w3)) || [];
              if (0 === c3.length) {
                {
                  if (IY <= 0) {
                    try {
                      {
                        const c8 = {
                          actType: 1
                        };
                        const c9 = await Rz("mergebox_claimcostprogress", c8, 5000);
                        const cP = c9?.["body"]?.["reward"] || c9?.["reward"] || [];
                        const cD = c9?.["body"]?.["evoTower"]?.["lotteryLeftCnt"] ?? c9?.["evoTower"]?.["lotteryLeftCnt"];
                        if (undefined !== cD && TR.weirdTower && (TR.weirdTower.lotteryLeftCnt = cD, IY = cD, qQ()), cP.length > 0) {
                          {
                            const cv = cP.map(cB => JS(cB.itemId) + "x" + cB.value).join(", ");
                            TQ("领取消耗进度奖励: " + cv, "success");
                            Iy++;
                            If && (If.textContent = "已领取奖励 " + Iy + " 次");
                            await R4(300);
                          }
                        }
                      }
                    } catch (cz) {}
                    const c5 = IE.taskMap || {};
                    const c6 = IE.taskClaimMap || {};
                    for (const cM in c5) if (c5[cM] > 0 && !c6[cM]) {
                      try {
                        const cS = {
                          actType: 1,
                          taskId: cM
                        };
                        const cT = await Rz("mergebox_claimmergeprogress", cS, 5000);
                        const cR = cT?.["body"]?.["reward"] || cT?.["reward"] || [];
                        Iy++;
                        c6[cM] = true;
                        const cZ = cR.map(cU => JS(cU.itemId) + "x" + cU.value).join(", ");
                        TQ("领取累计奖励: " + (cZ || "任务" + cM), "success");
                        If && (If.textContent = "已领取奖励 " + Iy + " 次");
                        await R4(300);
                      } catch (cU) {}
                    }
                  }
                  if (IY <= 0) {
                    break;
                  }
                  const c4 = await qd();
                  c4 && (w3 = JSON.parse(JSON.stringify(c4.gridMap || {})), IE = c4);
                  continue;
                }
              }
              for (const cu of c3) {
                if (!TR.smartMergeBoxRunning) {
                  break;
                }
                try {
                  {
                    await w0(cu.pos1.x, cu.pos1.y, cu.pos2.x, cu.pos2.y);
                    IC++;
                    w5(cu.pos1.x, cu.pos1.y, cu.pos2.x, cu.pos2.y, cu.level + 1);
                    TQ("合成" + cu.level + "级卡片", "info");
                    If && (If.textContent = "已开箱 " + IW + " 次，合成 " + IC + " 次");
                    await R4(300);
                  }
                } catch (cp) {}
              }
            }
          }
        }
        If && (If.textContent = "完成：开箱 " + IW + " 次，合成 " + IC + " 次，领取 " + Iy + " 次");
        TQ("智能开箱合成完成：开箱 " + IW + " 次，合成 " + IC + " 次，领取 " + Iy + " 次", "success");
      } catch (cV) {
        TQ("开箱合成异常: " + cV.message, "error");
      } finally {
        {
          TR.smartMergeBoxRunning = false;
          w3 = null;
          IK && (IK.disabled = false);
        }
      }
    }
  };
  const w7 = () => {
    TR.smartMergeBoxRunning = false;
    TQ("已停止智能开箱合成", "info");
  };
  const w8 = async () => {
    {
      const If = document.getElementById("qa-weird-tower-rank-status");
      If && (If.textContent = "正在查询...");
      try {
        {
          const IW = await Rz("legion_getinfo", {}, 5000);
          const IC = IW?.["info"];
          if (!IC) {
            throw new Error("未加入俱乐部");
          }
          const Iy = IC.members || {};
          const IY = await Rz("evotower_getlegionjoinmembers", {}, 5000);
          const Im = IY?.["_rawData"]?.["memberScores"] || IY?.["memberScores"] || {};
          const IE = Object.values(Iy).map(IX => {
            const IG = String(IX.roleId);
            const IA = Im[IG];
            const IQ = undefined !== IA;
            return {
              roleId: IG,
              name: IX.name || "玩家" + IG,
              headImg: IX.headImg || "",
              power: IX.power || 0,
              score: IQ ? IA : -1,
              progress: qG(IQ ? IA : -1),
              participated: IQ
            };
          });
          IE.sort((IX, IG) => IX.participated && !IG.participated ? -1 : !IX.participated && IG.participated ? 1 : IG.score - IX.score);
          qX = {
            legionName: IC.name || "未知俱乐部",
            legionId: IC.id,
            queryTime: new Date().toLocaleString("zh-CN"),
            members: IE
          };
          w9();
          TQ("俱乐部怪异塔排名查询成功", "success");
          return qX;
        }
      } catch (IX) {
        {
          TQ("查询失败: " + IX.message, "error");
          If && (If.textContent = "查询失败: " + IX.message);
          return null;
        }
      }
    }
  };
  const w9 = () => {
    const Ib = document.getElementById("qa-weird-tower-rank-content");
    const II = document.getElementById("qa-weird-tower-rank-status");
    if (!Ib) {
      return;
    }
    if (!qX?.["members"]?.["length"]) {
      Ib.innerHTML = "<div class=\"helper-text\">暂无排名数据</div>";
      return void (II && (II.textContent = "暂无数据"));
    }
    const {
      legionName: If,
      members: IK,
      queryTime: IW
    } = qX;
    const IC = IK.filter(Iy => Iy.participated).length;
    II && (II.textContent = IC + "/" + IK.length + " 人参与");
    Ib.innerHTML = "\n    <div style=\"margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;\">\n      <span style=\"font-size:13px;font-weight:600;\">" + If + "</span>\n      <span style=\"font-size:11px;color:var(--text-secondary);\">" + IW + "</span>\n    </div>\n    <div class=\"weird-tower-rank-list\" style=\"max-height:300px;overflow-y:auto;\">\n      " + IK.map((Iy, IY) => "\n        <div class=\"member-row\" style=\"display:flex;align-items:center;padding:6px 0;border-bottom:1px solid var(--border-color);\">\n          <span style=\"width:30px;text-align:center;font-size:12px;color:var(--text-secondary);\">" + (IY + 1) + "</span>\n          <img src=\"" + Iy.headImg + "\" onerror=\"this.style.display='none'\" style=\"width:28px;height:28px;border-radius:50%;margin-right:8px;background:#e5e5e5;\">\n          <span style=\"flex:1;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">" + Iy.name + "</span>\n          <span style=\"font-size:13px;font-weight:500;color:" + (Iy.participated ? "#8b5cf6" : "#9ca3af") + ";\">" + Iy.progress + "</span>\n        </div>\n      ").join("") + "\n    </div>\n  ";
  };
  const wP = async () => {
    {
      if (!qX?.["members"]?.["length"]) {
        return void TQ("暂无排名数据，请先查询", "warning");
      }
      TQ("正在生成图片...", "info", 2000);
      const If = (() => {
        const Ig = "dark" === TR.theme;
        const IL = {
          bg: Ig ? "#1a1a2e" : "#ffffff",
          text: Ig ? "#f9fafb" : "#1f2937",
          textSecondary: Ig ? "#9ca3af" : "#6b7280",
          headerBg: Ig ? "#374151" : "#f3f4f6",
          headerText: Ig ? "#d1d5db" : "#374151",
          border: Ig ? "#4b5563" : "#e5e7eb",
          zebraStripe: Ig ? "#2d2d44" : "#f9fafb",
          purple: "#8b5cf6",
          gray: "#9ca3af"
        };
        return IL;
      })();
      const {
        legionName: IK,
        members: IW,
        queryTime: IC
      } = qX;
      const Iy = await Promise.all(IW.map(Ig => {
        Id = Ig.headImg;
        return new Promise(c0 => {
          {
            if (!Id) {
              return void c0(null);
            }
            const c3 = new Image();
            c3.crossOrigin = "anonymous";
            c3.onload = () => c0(c3);
            c3.onerror = () => c0(null);
            c3.src = Id;
          }
        });
        var Id;
      }));
      const IY = document.createElement("canvas");
      const Im = IY.getContext("2d");
      const IE = 20;
      const IX = [50, 45, 160, 100];
      const IG = IX.reduce((Ig, IL) => Ig + IL, 0) + 40;
      const IA = 80 + 36 * (IW.length + 1) + 30 + 40;
      IY.width = 2 * IG;
      IY.height = 2 * IA;
      Im.scale(2, 2);
      Im.fillStyle = If.bg;
      Im.fillRect(0, 0, IG, IA);
      Im.fillStyle = If.text;
      Im.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
      Im.fillText(IK + " - 怪异塔排名", IE, 44);
      const IQ = IW.filter(Ig => Ig.participated).length;
      Im.fillStyle = If.textSecondary;
      Im.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
      Im.fillText("参与人数: " + IQ + "/" + IW.length, IE, 70);
      Im.fillStyle = If.headerBg;
      Im.fillRect(IE, 80, IG - 40, 36);
      Im.fillStyle = If.headerText;
      Im.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
      let Ix = IE;
      ["排名", "头像", "昵称", "怪异塔进度"].forEach((Ig, IL) => {
        Im.fillText(Ig, Ix + 8, 104);
        Ix += IX[IL];
      });
      Im.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
      IW.forEach((Ig, IL) => {
        const c0 = 80 + 36 * (IL + 1);
        IL % 2 == 1 && (Im.fillStyle = If.zebraStripe, Im.fillRect(IE, c0, IG - 40, 36));
        Im.fillStyle = If.text;
        let c1 = IE;
        Im.fillText(String(IL + 1), c1 + 8, c0 + 24);
        c1 += IX[0];
        const c2 = Iy[IL];
        if (c2) {
          {
            const c4 = c1 + (IX[1] - 28) / 2;
            const c5 = c0 + 4;
            Im.save();
            Im.beginPath();
            Im.arc(c4 + 14, c5 + 14, 14, 0, 2 * Math.PI);
            Im.closePath();
            Im.clip();
            Im.drawImage(c2, c4, c5, 28, 28);
            Im.restore();
          }
        }
        c1 += IX[1];
        Im.fillStyle = If.text;
        Im.fillText(Ig.name || "-", c1 + 8, c0 + 24);
        c1 += IX[2];
        Im.fillStyle = Ig.participated ? If.purple : If.gray;
        Im.fillText(Ig.progress, c1 + 8, c0 + 24);
      });
      Im.strokeStyle = If.border;
      Im.lineWidth = 1;
      Im.strokeRect(IE, 80, IG - 40, 36 * (IW.length + 1));
      Im.fillStyle = If.textSecondary;
      Im.font = "11px -apple-system, BlinkMacSystemFont, sans-serif";
      Im.fillText("查询时间: " + IC, IE, IA - IE);
      const Ik = IC.replace(/[/:]/g, "-").replace(/\s/g, "_");
      await R9(IY, "怪异塔排名_" + IK + "_" + Ik + ".png");
      TQ("怪异塔排名导出成功", "success");
    }
  };
  var wD = Object.freeze({
    __proto__: null,
    checkBlackMarketWeek: async () => {
      {
        try {
          const If = await Rz("activity_get", {}, 5000);
          return await (async IK => {
            {
              try {
                const IC = await (async Iy => (qY(), await Uj(qC, Iy)))({
                  findByName: (Iy, IY) => Iy?.["find"](Im => Im.name === IY),
                  parseDate: Iy => new Date(Iy).getTime(),
                  getCurrentTime: () => Date.now()
                });
                return await IC(IK);
              } catch (Iy) {
                {
                  console.warn("[VM] Black market validation 回退到 JS:", Iy.message);
                  return qm(IK);
                }
              }
            }
          })(If);
        } catch (IK) {
          return false;
        }
      }
    },
    claimFreeKeys: qL,
    exportWeirdTowerRankImage: wP,
    queryWeirdTowerRank: w8,
    refreshWeirdTowerInfo: qA,
    startSmartMergeBox: w6,
    startWeirdTowerClimb: qk,
    stopSmartMergeBox: w7,
    stopWeirdTowerClimb: qg,
    updateWeirdTowerAvailability: Ib => {
      const II = document.getElementById("qa-weird-tower-content");
      const If = document.getElementById("qa-weird-tower-inactive");
      const IK = document.getElementById("qa-weird-tower-badge");
      II && If && (Ib ? (II.style.display = "block", If.style.display = "none") : (II.style.display = "none", If.style.display = "block"));
      IK && (Ib ? (IK.textContent = "开放中", IK.className = "club-status-badge success") : (IK.textContent = "未开放", IK.className = "club-status-badge warning"));
    },
    updateWeirdTowerUI: qQ
  });
  const wv = {
    length: 20
  };
  const wB = {
    length: 28
  };
  const wz = {
    length: 14
  };
  const wS = [...Array.from(wv, (Ib, II) => 101 + II), ...Array.from(wB, (Ib, II) => 201 + II), ...Array.from(wz, (Ib, II) => 301 + II)];
  const wT = {
    isRunning: false,
    stopRequested: false,
    total: 0,
    done: 0
  };
  const wR = () => {
    const Ib = document.getElementById("qa-star-progress-bar");
    const II = document.getElementById("qa-star-progress-text");
    const If = wT.total > 0 ? Math.min(100, Math.round(wT.done / wT.total * 100)) : 0;
    Ib && (Ib.style.width = If + "%");
    II && (II.textContent = wT.done + "/" + wT.total + " " + If + "%");
  };
  const wZ = Ib => {
    {
      const II = document.getElementById("qa-star-hero-btn");
      const If = document.getElementById("qa-star-book-btn");
      const IK = document.getElementById("qa-star-claim-btn");
      const IW = document.getElementById("qa-star-stop-btn");
      II && (II.disabled = Ib);
      If && (If.disabled = Ib);
      IK && (IK.disabled = Ib);
      IW && (IW.style.display = Ib ? "inline-block" : "none");
    }
  };
  const wU = () => {
    {
      const II = document.getElementById("qa-star-delay");
      return II && parseInt(II.value, 10) || 300;
    }
  };
  let wN = null;
  let wu = false;
  let wF = "level";
  const wp = {
    level: 100,
    order: 1
  };
  const wV = {
    level: 200,
    order: 2
  };
  const wJ = {
    level: 300,
    order: 3
  };
  const wH = {
    level: 500,
    order: 4
  };
  const wh = {
    level: 700,
    order: 5
  };
  const wO = {
    level: 900,
    order: 6
  };
  const wj = {
    level: 1100,
    order: 7
  };
  const wq = {
    level: 1300,
    order: 8
  };
  const ww = {
    level: 1500,
    order: 9
  };
  const wb = {
    level: 1800,
    order: 10
  };
  const wI = {
    level: 2100,
    order: 11
  };
  const wf = {
    level: 2400,
    order: 12
  };
  const wK = {
    level: 2800,
    order: 13
  };
  const wW = {
    level: 3200,
    order: 14
  };
  const wC = {
    level: 3600,
    order: 15
  };
  const wy = {
    level: 4000,
    order: 16
  };
  const wY = {
    level: 4500,
    order: 17
  };
  const wm = {
    level: 5000,
    order: 18
  };
  const wE = {
    level: 5500,
    order: 19
  };
  const wX = [wp, wV, wJ, wH, wh, wO, wj, wq, ww, wb, wI, wf, wK, wW, wC, wy, wY, wm, wE];
  let wG = [];
  const wQ = (Ib, II, If) => {
    for (const IK of wX) if (If !== IK.order && Ib <= IK.level && IK.level < Ib + II) {
      return IK.level;
    }
    return false;
  };
  const wx = (Ib, II) => wQ(Ib, 1, II) === Ib;
  const wk = Ib => {
    {
      const If = document.getElementById("qa-hero-upgrade-order-btn");
      const IK = document.getElementById("qa-hero-upgrade-tip");
      if (!If || !IK) {
        return;
      }
      if (!Ib) {
        If.disabled = true;
        return void (IK.textContent = "选择武将后可进行升级/进阶操作");
      }
      const IW = Ib.level || 0;
      const IC = Ib.order || 0;
      const Iy = wx(IW, IC);
      if (If.disabled = !Iy, IW >= 6000) {
        IK.textContent = "武将已满级";
        IK.style.color = "#34c759";
      } else {
        if (Iy) {
          IK.textContent = "已达到进阶条件，当前" + IW + "级可进阶";
          IK.style.color = "#ff9500";
        } else {
          const IY = wX.find(Im => Im.order > IC);
          IK.textContent = IY ? "下一进阶等级: " + IY.level + "级" : "已达到最高进阶";
          IK.style.color = "";
        }
      }
    }
  };
  const wg = (Ib, II) => {
    {
      const IW = document.getElementById("qa-hero-upgrade-level");
      const IC = document.getElementById("qa-hero-upgrade-attack");
      const Iy = document.getElementById("qa-hero-upgrade-speed");
      IW && (IW.textContent = (II.level || 0) + "/6000");
      IC && (IC.textContent = II.attack || 0);
      Iy && (Iy.textContent = II.speed || 0);
      b1(Ib, II.level || 0);
      wk(II);
    }
  };
  const wL = Ib => {
    const II = document.getElementById("qa-hero-upgrade-auto-btn");
    const If = document.getElementById("qa-hero-upgrade-stop-btn");
    II && (II.disabled = Ib);
    If && (If.style.display = Ib ? "inline-block" : "none");
  };
  const wd = (Ib = "") => {
    const II = document.getElementById("qa-hero-upgrade-dropdown");
    const If = document.getElementById("qa-hero-upgrade-input");
    if (!II || !If) {
      return;
    }
    const IK = Ib.toLowerCase().trim();
    const IW = wG.filter(Iy => !IK || Iy.name.toLowerCase().includes(IK) || Iy.label.toLowerCase().includes(IK));
    0 === IW.length ? II.innerHTML = "<div class=\"qa-autocomplete-empty\">无匹配武将</div>" : II.innerHTML = IW.map((Iy, IY) => "\n      <div class=\"qa-autocomplete-item " + (Iy.disabled ? "disabled" : "") + "\"\n           data-hero-id=\"" + Iy.heroId + "\"\n           data-label=\"" + Iy.label + "\">\n        <span class=\"qa-autocomplete-name\">" + b3(Iy.name, IK) + "</span>\n        <span class=\"qa-autocomplete-level\">Lv." + Iy.level + "</span>\n      </div>\n    ").join("");
    const IC = If.getBoundingClientRect();
    II.style.left = IC.left + "px";
    II.style.top = IC.bottom + "px";
    II.style.width = IC.width + "px";
    II.style.display = "block";
  };
  const b0 = () => {
    const Ib = document.getElementById("qa-hero-upgrade-dropdown");
    Ib && (Ib.style.display = "none");
  };
  const b1 = (Ib, II) => {
    {
      const IK = document.getElementById("qa-hero-upgrade-input");
      const IW = R3(Ib) + " (" + II + "/6000)";
      const IC = wG.findIndex(Iy => Iy.heroId === Ib);
      if (-1 !== IC) {
        if (II >= 6000) {
          wG.splice(IC, 1);
          IK.value = "";
          document.getElementById("qa-hero-upgrade-select").value = "";
          const Iy = document.getElementById("qa-hero-upgrade-info");
          Iy && (Iy.style.display = "none");
          wN = null;
        } else {
          wG[IC].level = II;
          wG[IC].label = IW;
          IK.value = IW;
        }
      }
    }
  };
  const b2 = (Ib, II) => {
    Ib.forEach((If, IK) => {
      IK === II ? (If.classList.add("active"), If.scrollIntoView({
        block: "nearest"
      })) : If.classList.remove("active");
    });
  };
  const b3 = (Ib, II) => {
    if (!II) {
      return Ib;
    }
    const If = new RegExp("(" + II.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return Ib.replace(If, "<mark>$1</mark>");
  };
  const b4 = "disconnected";
  const b5 = "connecting";
  const b6 = "connected";
  const b7 = "in_queue";
  const b8 = "in_waiting";
  const b9 = "in_room";
  const bP = "idle";
  const bD = "scanning";
  const bv = "assisting";
  const bB = {
    minLevel: 1,
    maxLevel: 14
  };
  class bz {
    constructor() {
      const Ib = {
        ...bB
      };
      const II = {
        scanned: 0,
        assisted: 0,
        received: 0
      };
      const If = {
        completedCount: 0,
        totalCount: 20
      };
      this.ws = null;
      this.state = b4;
      this.roomId = null;
      this.members = [];
      this.myRole = bP;
      this.levelPref = Ib;
      this.reconnectAttempts = 0;
      this.maxReconnectAttempts = 5;
      this.reconnectDelay = 3000;
      this.scanInterval = null;
      this.listeners = new Map();
      this.currentAssistTask = null;
      this.stats = II;
      this.progress = If;
      this.failedRooms = new Map();
      this.failureCount = new Map();
      this.lastAssistTime = 0;
      this.lastSuccessTime = 0;
    }
    isInCooldown() {
      return Date.now() - this.lastSuccessTime < bz.SUCCESS_COOLDOWN;
    }
    getCooldownRemaining() {
      const Ib = Date.now() - this.lastSuccessTime;
      return Math.max(0, bz.SUCCESS_COOLDOWN - Ib);
    }
    on(Ib, II) {
      this.listeners.has(Ib) || this.listeners.set(Ib, []);
      this.listeners.get(Ib).push(II);
    }
    off(Ib, II) {
      if (!this.listeners.has(Ib)) {
        return;
      }
      const If = this.listeners.get(Ib);
      const IK = If.indexOf(II);
      IK > -1 && If.splice(IK, 1);
    }
    emit(Ib, II) {
      this.listeners.has(Ib) && this.listeners.get(Ib).forEach(IK => IK(II));
    }
    async connect(Ib) {
      {
        if (this.state === b4) {
          this.state = b5;
          this.emit("state_change", {
            state: this.state
          });
          try {
            const IK = TU.replace(/^http/, "ws").replace(/\/api$/, "") + "/ws/coop?token=" + encodeURIComponent(Ib);
            this.ws = new WebSocket(IK);
            this.ws.onopen = () => {
              {
                console.log("✅ CoopClient 已连接");
                this.state = b6;
                this.reconnectAttempts = 0;
                this.emit("state_change", {
                  state: this.state
                });
                this.emit("connected", {});
              }
            };
            this.ws.onmessage = IW => {
              {
                try {
                  {
                    const IY = JSON.parse(IW.data);
                    this.handleMessage(IY);
                  }
                } catch (Im) {
                  {
                    console.error("CoopClient 消息解析失败:", Im);
                  }
                }
              }
            };
            this.ws.onclose = IW => {
              console.log("🔌 CoopClient 断开: " + IW.code);
              this.cleanup();
              this.state = b4;
              this.emit("state_change", {
                state: this.state
              });
              this.emit("disconnected", {
                code: IW.code,
                reason: IW.reason
              });
            };
            this.ws.onerror = IW => {
              console.error("CoopClient 错误:", IW);
              this.emit("error", {
                error: IW
              });
            };
          } catch (IW) {
            console.error("CoopClient 连接失败:", IW);
            this.state = b4;
            this.emit("error", {
              error: IW
            });
          }
        } else {
          console.warn("CoopClient 已连接或正在连接");
        }
      }
    }
    disconnect() {
      this.ws && this.ws.close(1000, "User disconnect");
      this.cleanup();
      this.state = b4;
      this.emit("state_change", {
        state: this.state
      });
    }
    cleanup() {
      const Ib = {
        completedCount: 0,
        totalCount: 20
      };
      this.stopScanning();
      this.roomId = null;
      this.members = [];
      this.myRole = bP;
      this.currentAssistTask = null;
      this.progress = Ib;
    }
    static BLACKLIST_TTL = 3600000;
    static BLACKLIST_THRESHOLD = 2;
    static FAILURE_WINDOW = 60000;
    static MIN_ASSIST_INTERVAL = 3000;
    static SUCCESS_COOLDOWN = 30000;
    isRoomBlacklisted(Ib) {
      const II = this.failedRooms.get(Ib);
      return !!II && (Date.now() < II || (this.failedRooms.delete(Ib), false));
    }
    _addToBlacklist(Ib) {
      this.failedRooms.set(Ib, Date.now() + bz.BLACKLIST_TTL);
      this.pruneExpiredBlacklist();
      console.log("🚫 房间 " + Ib + " 加入黑名单（1小时）");
    }
    recordFailure(Ib) {
      const II = Date.now();
      let If = this.failureCount.get(Ib);
      (!If || II - If.firstFailAt > bz.FAILURE_WINDOW) && (If = {
        count: 0,
        firstFailAt: II
      });
      If.count++;
      this.failureCount.set(Ib, If);
      return If.count >= bz.BLACKLIST_THRESHOLD ? (this._addToBlacklist(Ib), this.failureCount.delete(Ib), true) : (console.log("⚠️ 房间 " + Ib + " 失败 " + If.count + "/" + bz.BLACKLIST_THRESHOLD + "（未达阈值）"), false);
    }
    pruneExpiredBlacklist() {
      {
        const IK = Date.now();
        for (const [IW, IC] of this.failedRooms) IK >= IC && this.failedRooms.delete(IW);
        for (const [Iy, IY] of this.failureCount) IK - IY.firstFailAt > bz.FAILURE_WINDOW && this.failureCount.delete(Iy);
      }
    }
    send(Ib) {
      this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(JSON.stringify(Ib));
    }
    handleMessage(Ib) {
      {
        const {
          type: IK,
          payload: IW
        } = Ib;
        switch (IK) {
          case "queue_status":
            this.handleQueueStatus(IW);
            break;
          case "room_joined":
            this.handleRoomJoined(IW);
            break;
          case "member_joined":
            this.handleMemberJoined(IW);
            break;
          case "member_left":
            this.handleMemberLeft(IW);
            break;
          case "room_matched":
            this.handleRoomMatched(IW);
            break;
          case "start_scanning":
            this.handleStartScanning(IW);
            break;
          case "assist_request":
            this.handleAssistRequest(IW);
            break;
          case "member_assisted":
            this.handleMemberAssisted(IW);
            break;
          case "room_progress":
            this.handleRoomProgress(IW);
            break;
          case "room_state_update":
            this.handleRoomStateUpdate(IW);
            break;
          case "room_dissolved":
            this.handleRoomDissolved(IW);
            break;
          case "stats_update":
            this.handleStatsUpdate(IW);
            break;
          case "error":
            this.handleError(IW);
            break;
          case "heartbeat":
            break;
          default:
            console.warn("未知消息类型:", IK);
        }
      }
    }
    handleRoomJoined(Ib) {
      const {
        roomId: II,
        members: If,
        currentCount: IK,
        requiredCount: IW
      } = Ib;
      const IC = {
        currentCount: IK,
        requiredCount: IW
      };
      this.roomId = II;
      this.members = If;
      this.matchProgress = IC;
      this.state = IK < IW ? b8 : b9;
      this.emit("state_change", {
        state: this.state
      });
      this.emit("room_joined", {
        roomId: II,
        members: If,
        currentCount: IK,
        requiredCount: IW
      });
      this.autoReportHelpCount();
    }
    handleMemberJoined(Ib) {
      {
        const {
          member: If,
          currentCount: IK,
          requiredCount: IW
        } = Ib;
        const IC = {
          currentCount: IK,
          requiredCount: IW
        };
        this.members.find(IY => IY.oderId === If.oderId) || this.members.push(If);
        this.matchProgress = IC;
        const Iy = this.getMyOderId();
        If.oderId === Iy && this.autoReportHelpCount();
        this.emit("member_joined", {
          member: If,
          currentCount: IK,
          requiredCount: IW
        });
      }
    }
    handleMemberLeft(Ib) {
      {
        const {
          oderId: II,
          roleName: If,
          currentCount: IK,
          requiredCount: IW
        } = Ib;
        const IC = {
          currentCount: IK,
          requiredCount: IW
        };
        this.members = this.members.filter(Iy => Iy.oderId !== II);
        this.matchProgress = IC;
        this.emit("member_left", {
          oderId: II,
          roleName: If,
          currentCount: IK,
          requiredCount: IW
        });
      }
    }
    handleStatsUpdate(Ib) {
      this.serverStats = Ib;
      this.emit("stats_update", Ib);
    }
    handleQueueStatus(Ib) {
      this.state !== b7 && (this.state = b7, this.emit("state_change", {
        state: this.state
      }));
      this.emit("queue_status", Ib);
    }
    handleRoomMatched(Ib) {
      const {
        roomId: II,
        members: If
      } = Ib;
      this.roomId = II;
      this.members = If;
      this.state = b9;
      this.progress = {
        completedCount: 0,
        totalCount: If.length
      };
      this.emit("state_change", {
        state: this.state
      });
      this.emit("room_matched", {
        roomId: II,
        members: If
      });
    }
    handleStartScanning(Ib) {
      this.myRole = bD;
      this.emit("start_scanning", Ib);
      this.startScanning();
    }
    async handleAssistRequest(Ib) {
      const {
        roomId: If,
        gameRoomNumber: IK,
        ownerRoleId: IW,
        ownerOderId: IC,
        ownerRoleName: Iy,
        towerId: IY,
        serverSentAt: Im
      } = Ib;
      const IE = Date.now();
      if (IY < this.levelPref.minLevel || IY > this.levelPref.maxLevel) {
        this.send({
          type: "assist_result",
          payload: {
            roomId: If,
            visitorOderId: IC,
            success: false,
            error: "层数不在偏好范围"
          },
          timestamp: Date.now()
        });
      } else {
        this.stopScanning();
        this.myRole = bv;
        this.currentAssistTask = Ib;
        this.emit("assist_request", Ib);
        try {
          {
            await this.executeAssist(IK, IW, Iy);
            const IX = Date.now();
            const IG = IX - IE;
            const IA = Im ? {
              total: IX - IE,
              execution: IG,
              network: Math.max(0, IE - Im)
            } : {
              total: IG,
              execution: IG,
              network: 0
            };
            const IQ = {
              roomId: If,
              visitorOderId: IC,
              success: true
            };
            const Ix = {
              type: "assist_result",
              payload: IQ,
              timestamp: IX
            };
            const Ik = {
              success: true,
              targetRoleName: Iy,
              towerId: IY,
              latency: IA
            };
            this.send(Ix);
            this.stats.assisted++;
            this.lastSuccessTime = Date.now();
            this.emit("assist_complete", Ik);
          }
        } catch (IL) {
          this.recordFailure(IK);
          this.send({
            type: "assist_result",
            payload: {
              roomId: If,
              visitorOderId: IC,
              success: false,
              error: IL.message,
              gameRoomNumber: IK
            },
            timestamp: Date.now()
          });
          this.emit("assist_complete", {
            success: false,
            error: IL.message
          });
        } finally {
          this.currentAssistTask = null;
          this.myRole = bD;
          this.state === b9 && this.startScanning();
        }
      }
    }
    handleMemberAssisted(Ib) {
      const {
        assistedOderId: II,
        helperRoleName: If
      } = Ib;
      const IK = {
        helperRoleName: If
      };
      II === this.getMyOderId() && (this.stats.received++, this.emit("i_was_assisted", IK));
      this.emit("member_assisted", Ib);
    }
    mergeMemberUpdates(Ib, II) {
      if (Ib?.["length"]) {
        for (const If of Ib) {
          {
            const IW = this.members.find(IC => IC.oderId === If.oderId);
            if (IW) {
              for (const IC of II) undefined !== If[IC] && (IW[IC] = If[IC]);
            }
          }
        }
      }
    }
    handleRoomProgress(Ib) {
      const II = {
        completedCount: Ib.completedCount,
        totalCount: Ib.totalCount
      };
      this.progress = II;
      this.mergeMemberUpdates(Ib.members, ["assistedCount", "roleName"]);
      this.emit("room_progress", Ib);
    }
    handleRoomStateUpdate(Ib) {
      this.mergeMemberUpdates(Ib.members, ["remainHelpCnt", "assistedCount"]);
      this.emit("room_state_update", Ib);
    }
    handleRoomDissolved(Ib) {
      const {
        reason: II
      } = Ib;
      const If = {
        reason: II
      };
      this.stopScanning();
      this.roomId = null;
      this.members = [];
      this.myRole = bP;
      this.state = b6;
      this.emit("state_change", {
        state: this.state
      });
      this.emit("room_dissolved", If);
    }
    handleError(Ib) {
      console.error("CoopClient 错误:", Ib);
      this.emit("error", Ib);
    }
    joinQueue(Ib) {
      const II = window.ROLE;
      const If = {
        code: "NO_ROLE",
        message: "未获取到角色信息"
      };
      if (!II) {
        return void this.emit("error", If);
      }
      const IK = II.serverViewId || TR?.["roleInfo"]?.["serverViewId"];
      const IW = II.id || TR?.["roleInfo"]?.["roleId"];
      const IC = II.name || TR?.["roleInfo"]?.["roleName"];
      const Iy = {
        ...bB
      };
      IK ? (this.levelPref = Ib || Iy, this.send({
        type: "join_queue",
        payload: {
          serverId: String(IK),
          roleId: String(IW),
          roleName: IC || "Unknown",
          levelPref: this.levelPref
        },
        timestamp: Date.now()
      })) : this.emit("error", {
        code: "NO_SERVER",
        message: "未获取到服务器信息"
      });
    }
    leaveQueue() {
      {
        this.send({
          type: "leave_queue",
          payload: {},
          timestamp: Date.now()
        });
        this.state = b6;
        this.emit("state_change", {
          state: this.state
        });
      }
    }
    leaveRoom() {
      {
        this.roomId && (this.send({
          type: "leave_room",
          payload: {
            roomId: this.roomId
          },
          timestamp: Date.now()
        }), this.cleanup(), this.state = b6, this.emit("state_change", {
          state: this.state
        }), this.emit("room_left", {}));
      }
    }
    reportHelpCount(Ib) {
      const II = {
        remainHelpCnt: Ib
      };
      this.roomId && this.send({
        type: "report_help_count",
        payload: II,
        timestamp: Date.now()
      });
    }
    async autoReportHelpCount() {
      {
        if (this.roomId) {
          try {
            {
              const If = await Rz("bosstower_getinfo", {});
              const IK = If?.["bossTower"] || If?.["_rawData"]?.["bossTower"] || If?.["body"]?.["bossTower"];
              const IW = IK?.["remainHelpCnt"];
              "number" == typeof IW && (this.remainHelpCnt = IW, this.reportHelpCount(IW), console.log("📤 自动上报助力次数: " + IW));
            }
          } catch (IC) {
            console.error("自动上报助力次数失败:", IC);
          }
        }
      }
    }
    startScanning() {
      this.scanInterval || this.myRole !== bv && (this.scanInterval = setInterval(async () => {
        {
          this.myRole !== bv && (await this.scanRooms());
        }
      }, 1500), this.myRole !== bv && this.scanRooms());
    }
    stopScanning() {
      this.scanInterval && (clearInterval(this.scanInterval), this.scanInterval = null);
    }
    isValidForAssist(Ib) {
      return !(!Ib || !Ib.teamId || -1 === Ib.towerId || Ib.towerId < 1 || Ib.towerId > 14 || !Ib.id);
    }
    isLevelInMyPreference(Ib) {
      return this.levelPref.selectedLevels?.["length"] > 0 ? this.levelPref.selectedLevels.includes(Ib) : Ib >= this.levelPref.minLevel && Ib <= this.levelPref.maxLevel;
    }
    async executeSelfAssist(Ib) {
      {
        if (this.myRole === bv) {
          return;
        }
        const If = Ib.towerId;
        const IK = String(Ib.teamId);
        const IW = String(Ib.id);
        const IC = Ib.name || "Unknown";
        this.stopScanning();
        this.myRole = bv;
        const Iy = Date.now();
        try {
          const IY = {
            towerId: If,
            ownerRoleName: IC
          };
          this.emit("self_assist_start", IY);
          await this.executeAssist(IK, IW, IC);
          this.send({
            type: "self_assist_result",
            payload: {
              roomId: this.roomId,
              visitorOderId: IW,
              visitorRoleName: IC,
              towerId: If,
              success: true,
              scannedAt: Iy
            },
            timestamp: Date.now()
          });
          this.stats.assisted++;
          this.lastSuccessTime = Date.now();
          this.emit("self_assist_complete", {
            success: true,
            towerId: If,
            ownerRoleName: IC
          });
        } catch (Im) {
          this.recordFailure(IK);
          this.send({
            type: "self_assist_result",
            payload: {
              roomId: this.roomId,
              visitorOderId: IW,
              success: false,
              error: Im.message,
              gameRoomNumber: IK
            },
            timestamp: Date.now()
          });
          this.emit("self_assist_complete", {
            success: false,
            error: Im.message
          });
        } finally {
          this.myRole = bD;
          this.state === b9 && this.startScanning();
        }
      }
    }
    async scanRooms() {
      {
        if (this.roomId && this.myRole !== bv) {
          try {
            const If = await Rz("bosstower_gethall", {});
            const IK = If?.["_rawData"] || If;
            const IW = IK?.["recommendRoleList"] || [];
            const IC = {
              total: IW.length
            };
            if (this.emit("scan_tick", IC), IW.length > 0) {
              {
                const Iy = IW.filter(IG => !!this.isValidForAssist(IG) && !this.isRoomBlacklisted(String(IG.teamId)));
                if (0 === Iy.length) {
                  return;
                }
                const IY = this.isInCooldown();
                const Im = !this.levelPref.scanOnly && 0 !== this.remainHelpCnt && !IY;
                let IE = null;
                const IX = [];
                for (const IG of Iy) {
                  {
                    const IQ = IG.towerId;
                    const Ix = this.isLevelInMyPreference(IQ);
                    Im && Ix && !IE ? IE = IG : IX.push(IG);
                  }
                }
                for (const Ik of IX) this.send({
                  type: "room_scanned",
                  payload: {
                    roomId: this.roomId,
                    gameRoomNumber: String(Ik.teamId),
                    ownerRoleId: String(Ik.id),
                    ownerOderId: String(Ik.id),
                    ownerRoleName: Ik.name || "Unknown",
                    towerId: Ik.towerId
                  },
                  timestamp: Date.now()
                }), this.stats.scanned++, this.emit("room_scanned", {
                  gameRoomNumber: Ik.teamId,
                  towerId: Ik.towerId,
                  ownerName: Ik.name,
                  inCooldown: IY
                });
                if (IY && Iy.length > 0) {
                  const Ig = Math.ceil(this.getCooldownRemaining() / 1000);
                  const IL = {
                    remaining: Ig,
                    uploadedCount: IX.length
                  };
                  this.emit("cooldown_scan", IL);
                }
                IE && (await this.executeSelfAssist(IE));
              }
            }
          } catch (c0) {
            console.error("扫描房间失败:", c0);
            this.emit("scan_error", {
              error: c0.message
            });
          }
        }
      }
    }
    sleep(Ib) {
      {
        return new Promise(II => setTimeout(II, Ib));
      }
    }
    async executeAssist(Ib, II, If) {
      const IK = Date.now() - this.lastAssistTime;
      const IW = {
        gameRoomNumber: Ib,
        targetRoleName: If
      };
      IK < bz.MIN_ASSIST_INTERVAL && (await this.sleep(bz.MIN_ASSIST_INTERVAL - IK));
      this.lastAssistTime = Date.now();
      this.emit("assist_start", IW);
      const IC = this.levelPref.teamId || 1;
      this.levelPref.switchTeam && IC && (await Rz("presetteam_saveteam", {
        teamId: IC
      }));
      const Iy = await Rz("presetteam_getinfo", {});
      const IY = Iy?.["_rawData"] || Iy;
      const Im = IY?.["presetTeamInfo"]?.["presetTeamInfo"] || IY?.["presetTeamInfo"] || {};
      const IE = this.levelPref.switchTeam ? IC : IY?.["presetTeamInfo"]?.["useTeamId"] || 1;
      const IX = Im[String(IE)];
      if (!IX?.["teamInfo"]) {
        throw new Error("预设阵容获取失败");
      }
      const IG = IX.teamInfo;
      const IA = IX.weapon?.["weaponId"];
      if (!IA) {
        throw new Error("武器信息获取失败");
      }
      const IQ = {};
      for (const c1 in IG) {
        {
          const c2 = IG[c1]?.["heroId"];
          c2 && (IQ[c1] = c2);
        }
      }
      if (Object.keys(IQ).length < 1) {
        throw new Error("阵容为空");
      }
      const Ix = {
        name: "",
        notice: "",
        secret: 0,
        apply: 0,
        applyList: []
      };
      const Ik = {
        teamCfgId: 6,
        setting: Ix,
        param: 0,
        custom: {
          leaderId: String(II),
          teamId: Ib
        }
      };
      const Ig = await Promise.race([Rz("matchteam_create", Ik), new Promise((c4, c5) => setTimeout(() => c5(new Error("进入房间超时")), 2500))]);
      const IL = Ig?.["_rawData"] || Ig;
      if (!(IL?.["teamInfo"]?.["fightRoleBase"] || []).length) {
        throw new Error("进入房间失败");
      }
      const Id = {
        battleTeam: IQ,
        lordWeaponId: IA,
        teamType: 11,
        cCMonsterId: 0
      };
      const c0 = {
        success: true,
        useTeamId: IE
      };
      await Rz("team_setteam", Id);
      return c0;
    }
    getMyOderId() {
      return window.ROLE?.["id"] || TR?.["roleInfo"]?.["roleId"] || "";
    }
    getState() {
      return this.state;
    }
    getStats() {
      const Ib = {
        ...this.stats
      };
      return Ib;
    }
    getProgress() {
      const Ib = {
        ...this.progress
      };
      return Ib;
    }
    getRoomInfo() {
      {
        const II = {
          roomId: this.roomId,
          myRole: this.myRole,
          members: [...this.members]
        };
        return II;
      }
    }
    getLevelPref() {
      {
        const If = {
          ...this.levelPref
        };
        return If;
      }
    }
    setLevelPref(Ib) {
      const II = {
        ...Ib
      };
      this.levelPref = II;
    }
    isConnected() {
      return this.state !== b4 && this.state !== b5;
    }
    isInRoom() {
      return this.state === b9;
    }
    isInRoomOrWaiting() {
      {
        return this.state === b9 || this.state === b8;
      }
    }
  }
  const bM = new bz();
  const bS = "coop-assist-settings";
  let bT = false;
  let bR = null;
  const bu = {
    b4: "未连接",
    b5: "连接中...",
    b6: "已连接",
    b7: "匹配中",
    b8: "等待组队",
    b9: "互助中"
  };
  const bF = {
    b4: "inactive",
    b5: "warning",
    b6: "active",
    b7: "warning",
    b8: "warning",
    b9: "success"
  };
  const bp = {
    bP: "空闲",
    bD: "扫描中",
    bv: "助力中"
  };
  function bV(Ib) {
    try {
      localStorage.setItem(bS, JSON.stringify(Ib));
    } catch (II) {
      console.error("保存联网助战配置失败:", II);
    }
  }
  function bJ() {
    const Ib = bM.getState();
    const II = document.getElementById("qa-coop-status");
    const If = document.getElementById("qa-coop-connect-btn");
    const IK = document.getElementById("qa-coop-queue-btn");
    const IW = document.getElementById("qa-coop-level-section");
    II && (II.textContent = bu[Ib] || "未知", II.className = "club-status-badge " + (bF[Ib] || ""));
    If && (Ib === b4 ? (If.textContent = "连接服务器", If.disabled = false) : Ib === b5 ? (If.textContent = "连接中...", If.disabled = true) : (If.textContent = "断开连接", If.disabled = false));
    IK && (Ib === b6 ? (IK.textContent = "加入匹配", IK.className = "btn btn-success", IK.disabled = false, IK.style.display = "") : Ib === b7 ? (IK.textContent = "取消匹配", IK.className = "btn btn-warning", IK.disabled = false, IK.style.display = "") : Ib === b9 ? IK.style.display = "none" : (IK.disabled = true, IK.style.display = ""));
    IW && (IW.style.display = Ib === b6 ? "" : "none");
    bH();
    bh();
  }
  function bH() {
    {
      const II = document.getElementById("qa-coop-room-section");
      const If = bM.getRoomInfo();
      if (II) {
        if (bM.isInRoomOrWaiting()) {
          II.style.display = "";
          const IK = document.getElementById("qa-coop-my-role");
          if (IK) {
            {
              const Iy = bp[If.myRole] || "未知";
              const IY = If.myRole === bv ? "🎯" : "🔍";
              IK.textContent = IY + " " + Iy;
              IK.style.color = If.myRole === bv ? "#ff9500" : "#34c759";
            }
          }
          const IW = document.getElementById("qa-coop-members");
          IW && If.members.length > 0 && (IW.innerHTML = If.members.map(Im => {
            {
              const IG = Im.remainHelpCnt >= 0 ? Im.remainHelpCnt : "--";
              const IA = 0 === Im.remainHelpCnt;
              const IQ = IA ? "已完成" : "进行中";
              return "\n        <div class=\"coop-member-row " + (IA ? "completed" : "") + " " + (IA ? "no-help" : "") + "\" style=\"display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:var(--bg-secondary);border-radius:4px;font-size:12px;\">\n          <span class=\"coop-member-name\" style=\"flex:1;font-weight:500;\">" + (Im.serverId ? "[" + Im.serverId + "区]" : "") + " " + Im.roleName + "</span>\n          <span class=\"coop-member-remain\" style=\"color:var(--text-secondary);margin:0 8px;\" title=\"剩余助力次数\">剩余:" + IG + "</span>\n          <span class=\"coop-member-status\" style=\"color:" + (IA ? "#34c759" : "#ff9500") + ";\">" + IQ + "</span>\n        </div>\n      ";
            }
          }).join(""));
        } else {
          II.style.display = "none";
        }
      }
    }
  }
  function bh() {
    const Ib = bM.getRoomInfo().members.length;
    const II = document.getElementById("qa-coop-room-count");
    const If = document.getElementById("qa-coop-room-count-bar");
    if (II && (II.textContent = Ib + "/20"), If) {
      {
        const IW = Ib / 20 * 100;
        If.style.width = Math.min(IW, 100) + "%";
      }
    }
  }
  function bO() {
    {
      const Ib = bM.getStats();
      const II = document.getElementById("qa-coop-scanned");
      const If = document.getElementById("qa-coop-assisted");
      const IK = document.getElementById("qa-coop-received");
      II && (II.textContent = Ib.scanned);
      If && (If.textContent = Ib.assisted);
      IK && (IK.textContent = Ib.received);
    }
  }
  async function bj() {
    const II = await async function () {
      {
        try {
          {
            const Im = TR?.["roleId"] || window.ROLE?.["id"];
            const IE = localStorage.getItem(TH(Im)) || localStorage.getItem("qa_auth_token");
            if (!IE) {
              return null;
            }
            const IX = {
              Authorization: "Bearer " + IE
            };
            const IG = {
              headers: IX
            };
            const IA = await fetch(TU + "/coop/status", IG);
            if (!IA.ok) {
              return null;
            }
            const IQ = await IA.json();
            return IQ.success ? IQ.data : null;
          }
        } catch (Ix) {
          console.error("获取联网助战统计失败:", Ix);
          return null;
        }
      }
    }();
    if (!II) {
      return;
    }
    const If = document.getElementById("qa-coop-global-online");
    const IK = document.getElementById("qa-coop-global-rooms");
    const IW = document.getElementById("qa-coop-global-waiting");
    If && (If.textContent = II.onlineUsers ?? "--");
    IK && (IK.textContent = II.activeRooms ?? "--");
    IW && (IW.textContent = II.matchingPlayers ?? "--");
  }
  async function bq() {
    try {
      {
        const Ib = await Rz("bosstower_getinfo", {}, "联网助战-获取助战信息");
        const II = Ib?.["bossTower"] || Ib?.["body"]?.["bossTower"];
        const If = II?.["helpValue"] ?? "--";
        const IK = II?.["remainHelpCnt"] ?? "--";
        const IW = document.getElementById("coop-help-info");
        IW && (IW.textContent = "助战值: " + If + " | 剩余: " + IK);
        bM.isInRoom() && "number" == typeof IK && bM.reportHelpCount(IK);
      }
    } catch (Iy) {
      {
        console.error("获取助战信息失败:", Iy);
      }
    }
  }
  async function bw() {
    const Ib = document.getElementById("qa-coop-refresh-btn");
    Ib && (Ib.disabled = true, Ib.textContent = "刷新中...");
    try {
      await Promise.all([bj(), bq()]);
      TQ("刷新成功", "success");
    } catch (II) {
      {
        TQ("刷新失败", "error");
      }
    } finally {
      {
        Ib && (Ib.disabled = false, Ib.textContent = "刷新");
      }
    }
  }
  function bb(Ib, II = "info") {
    const If = document.getElementById("qa-coop-log");
    if (!If) {
      return;
    }
    const IW = new Date().toLocaleTimeString();
    const IC = {
      info: "var(--text-secondary)",
      success: "#34c759",
      warning: "#ff9500",
      error: "#ff3b30"
    };
    const Iy = document.createElement("div");
    for (Iy.style.cssText = "padding:4px 0;border-bottom:1px solid var(--border-color);color:" + (IC[II] || "var(--text-secondary)"), Iy.innerHTML = "<span style=\"color:var(--text-secondary);font-size:10px;\">" + IW + "</span> " + Ib, If.insertBefore(Iy, If.firstChild); If.children.length > 50;) {
      If.removeChild(If.lastChild);
    }
  }
  async function bI() {
    if (bM.getState() === b4) {
      {
        const Ib = TR?.["roleId"] || window.ROLE?.["id"];
        const II = localStorage.getItem(TH(Ib)) || localStorage.getItem("qa_auth_token") || TR?.["jwtToken"] || localStorage.getItem("xyzw_jwt_token");
        if (!II) {
          return void TQ("请先完成设备认证", "error");
        }
        await bM.connect(II);
      }
    } else {
      bM.disconnect();
    }
  }
  function bf() {
    {
      const If = bM.getState();
      if (If === b6) {
        const IK = document.querySelectorAll("input[name=\"coop-level\"]:checked");
        const IW = [];
        IK.forEach(IG => {
          "below_7" === IG.value ? [1, 2, 3, 4, 5, 6].forEach(IA => IW.push(IA)) : IW.push(parseInt(IG.value, 10));
        });
        const IC = [...new Set(IW)].sort((IG, IA) => IG - IA);
        if (0 === IC.length) {
          return void TQ("请至少选择一个层数", "warning");
        }
        const Iy = document.getElementById("qa-coop-switch-team")?.["checked"] || false;
        const IY = parseInt(document.getElementById("qa-coop-team")?.["value"] || "1", 10);
        const Im = document.getElementById("qa-coop-scan-only")?.["checked"] || false;
        const IE = {
          selectedLevels: IC,
          switchTeam: Iy,
          teamId: IY,
          scanOnly: Im
        };
        bV(IE);
        const IX = {
          minLevel: Math.min(...IC),
          maxLevel: Math.max(...IC),
          selectedLevels: IC,
          switchTeam: Iy,
          teamId: IY,
          scanOnly: Im
        };
        bM.joinQueue(IX);
      } else {
        If === b7 && bM.leaveQueue();
      }
    }
  }
  function bK() {
    {
      bM.isInRoomOrWaiting() && (bM.leaveRoom(), TQ("已离开房间", "info"));
    }
  }
  function bW() {
    {
      const II = document.querySelectorAll("input[name=\"coop-level\"]:checked");
      const If = [];
      II.forEach(Iy => {
        "below_7" === Iy.value ? [1, 2, 3, 4, 5, 6].forEach(IY => If.push(IY)) : If.push(parseInt(Iy.value, 10));
      });
      const IK = document.getElementById("qa-coop-switch-team")?.["checked"] || false;
      const IW = parseInt(document.getElementById("qa-coop-team")?.["value"] || "1", 10);
      const IC = document.getElementById("qa-coop-scan-only")?.["checked"] || false;
      bV({
        selectedLevels: [...new Set(If)],
        switchTeam: IK,
        teamId: IW,
        scanOnly: IC
      });
    }
  }
  function bC() {
    {
      return "\n    <div class=\"card collapsed\" data-collapsible data-card-id=\"coop-assist\">\n      <div class=\"card-header\">\n        <span class=\"card-title\">联网助战</span>\n        <div style=\"display:flex;align-items:center;gap:8px;\">\n          <span class=\"coop-tip-icon\" id=\"qa-coop-tip-btn\" tabindex=\"0\" title=\"点击查看说明\">?</span>\n          <span class=\"club-status-badge inactive\" id=\"qa-coop-status\">未连接</span>\n          <svg class=\"card-collapse-icon\" viewBox=\"0 0 24 24\"><path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"/></svg>\n        </div>\n      </div>\n      <div class=\"card-body\">\n\n        <!-- 全局统计 -->\n        <div id=\"qa-coop-global-stats\" style=\"margin-bottom:12px;padding:10px;background:linear-gradient(135deg,#667eea22,#764ba222);border-radius:8px;border:1px solid var(--border-color);\">\n          <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n            <span style=\"font-weight:600;font-size:12px;color:var(--text-secondary);\">📊 全局统计</span>\n            <button class=\"btn btn-secondary btn-small\" id=\"qa-coop-refresh-btn\" style=\"padding:2px 8px;font-size:11px;\">刷新</button>\n          </div>\n          <div class=\"stats-row\">\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">在线</span>\n              <span class=\"stat-value\" id=\"qa-coop-global-online\">--</span>\n            </div>\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">房间</span>\n              <span class=\"stat-value\" id=\"qa-coop-global-rooms\">--</span>\n            </div>\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">匹配中</span>\n              <span class=\"stat-value\" id=\"qa-coop-global-waiting\">--</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n          <button class=\"btn btn-primary\" id=\"qa-coop-connect-btn\" data-action=\"coop-connect\">连接服务器</button>\n          <button class=\"btn btn-success\" id=\"qa-coop-queue-btn\" data-action=\"coop-queue\" disabled>加入匹配</button>\n          <span id=\"coop-help-info\" style=\"font-size:12px;color:var(--text-secondary);margin-left:8px;\">助战值: -- | 剩余: --</span>\n        </div>\n\n        <!-- 层数偏好选择 -->\n        <div id=\"qa-coop-level-section\" style=\"display:none;margin-bottom:12px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n          <div style=\"font-weight:500;margin-bottom:8px;color:var(--text-primary);\">层数偏好</div>\n          <div class=\"task-grid\" style=\"margin-bottom:10px;\">\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"below_7\"><span>7层以下</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"7\"><span>7层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"8\"><span>8层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"10\"><span>10层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"11\"><span>11层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"13\"><span>13层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"14\"><span>14层</span></label>\n          </div>\n          <div class=\"form-row\" style=\"margin-bottom:8px;\">\n            <label class=\"task-check\" style=\"margin:0;\">\n              <input type=\"checkbox\" id=\"qa-coop-scan-only\">\n              <span>仅扫描（不参与助力）</span>\n            </label>\n          </div>\n          <div class=\"form-row\" style=\"margin-bottom:0;\">\n            <label class=\"task-check\" style=\"margin:0;\">\n              <input type=\"checkbox\" id=\"qa-coop-switch-team\">\n              <span>助战前切换阵容</span>\n            </label>\n            <select id=\"qa-coop-team\" disabled class=\"input\" style=\"width:80px;\">\n              <option value=\"1\">阵容1</option>\n              <option value=\"2\">阵容2</option>\n              <option value=\"3\">阵容3</option>\n              <option value=\"4\">阵容4</option>\n              <option value=\"5\">阵容5</option>\n              <option value=\"6\">阵容6</option>\n            </select>\n          </div>\n        </div>\n\n        <!-- 队列信息 -->\n        <div id=\"qa-coop-queue-section\" style=\"display:none;margin-bottom:12px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n          <div class=\"stats-row\">\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">排队位置</span>\n              <span class=\"stat-value\" id=\"qa-coop-queue-position\">--</span>\n            </div>\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">等待人数</span>\n              <span class=\"stat-value\" id=\"qa-coop-queue-waiting\">--</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- 房间信息 -->\n        <div id=\"qa-coop-room-section\" style=\"display:none;margin-bottom:12px;\">\n          <div style=\"padding:10px;background:var(--card-bg);border-radius:8px;margin-bottom:8px;\">\n            <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n              <span style=\"font-weight:600;\">当前状态</span>\n              <span id=\"qa-coop-my-role\" style=\"font-weight:bold;\">--</span>\n            </div>\n            <!-- 房间人数 -->\n            <div style=\"margin-bottom:8px;\">\n              <div style=\"display:flex;justify-content:space-between;margin-bottom:4px;\">\n                <span style=\"font-size:12px;\">房间人数</span>\n                <span style=\"font-size:12px;\" id=\"qa-coop-room-count\">0/5</span>\n              </div>\n              <div style=\"height:6px;background:var(--border-color);border-radius:3px;overflow:hidden;\">\n                <div id=\"qa-coop-room-count-bar\" style=\"height:100%;background:#34c759;width:0%;transition:width 0.3s;\"></div>\n              </div>\n            </div>\n            <!-- 成员列表 -->\n            <div id=\"qa-coop-members\" style=\"display:flex;flex-direction:column;gap:4px;\"></div>\n          </div>\n          <button class=\"btn btn-danger btn-small\" data-action=\"coop-leave\">离开房间</button>\n        </div>\n\n        <!-- 统计信息 -->\n        <div class=\"stats-row\" style=\"margin-bottom:12px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">扫描</span>\n            <span class=\"stat-value\" id=\"qa-coop-scanned\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">助力</span>\n            <span class=\"stat-value\" id=\"qa-coop-assisted\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">获助</span>\n            <span class=\"stat-value\" id=\"qa-coop-received\">0</span>\n          </div>\n        </div>\n\n        <!-- 日志 -->\n        <div id=\"qa-coop-log\" style=\"height:120px;overflow-y:auto;padding:8px;font-size:11px;background:var(--card-bg);border-radius:4px;\">\n          <div style=\"color:var(--text-secondary);\">等待连接...</div>\n        </div>\n      </div>\n    </div>\n  ";
    }
  }
  var by = Object.freeze({
    __proto__: null,
    getCoopAssistCardHtml: bC,
    handleCoopConnect: bI,
    handleCoopLeaveRoom: bK,
    handleCoopQueue: bf,
    initCoopAssist: function () {
      {
        if (bT) {
          return;
        }
        const II = document.getElementById("qa-coop-assist-placeholder");
        II && (II.outerHTML = "\n    <div class=\"card collapsed\" data-collapsible data-card-id=\"coop-assist\">\n      <div class=\"card-header\">\n        <span class=\"card-title\">联网助战</span>\n        <div style=\"display:flex;align-items:center;gap:8px;\">\n          <span class=\"coop-tip-icon\" id=\"qa-coop-tip-btn\" tabindex=\"0\" title=\"点击查看说明\">?</span>\n          <span class=\"club-status-badge inactive\" id=\"qa-coop-status\">未连接</span>\n          <svg class=\"card-collapse-icon\" viewBox=\"0 0 24 24\"><path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"/></svg>\n        </div>\n      </div>\n      <div class=\"card-body\">\n\n        <!-- 全局统计 -->\n        <div id=\"qa-coop-global-stats\" style=\"margin-bottom:12px;padding:10px;background:linear-gradient(135deg,#667eea22,#764ba222);border-radius:8px;border:1px solid var(--border-color);\">\n          <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n            <span style=\"font-weight:600;font-size:12px;color:var(--text-secondary);\">📊 全局统计</span>\n            <button class=\"btn btn-secondary btn-small\" id=\"qa-coop-refresh-btn\" style=\"padding:2px 8px;font-size:11px;\">刷新</button>\n          </div>\n          <div class=\"stats-row\">\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">在线</span>\n              <span class=\"stat-value\" id=\"qa-coop-global-online\">--</span>\n            </div>\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">房间</span>\n              <span class=\"stat-value\" id=\"qa-coop-global-rooms\">--</span>\n            </div>\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">匹配中</span>\n              <span class=\"stat-value\" id=\"qa-coop-global-waiting\">--</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"btn-row\" style=\"margin-bottom:12px;\">\n          <button class=\"btn btn-primary\" id=\"qa-coop-connect-btn\" data-action=\"coop-connect\">连接服务器</button>\n          <button class=\"btn btn-success\" id=\"qa-coop-queue-btn\" data-action=\"coop-queue\" disabled>加入匹配</button>\n          <span id=\"coop-help-info\" style=\"font-size:12px;color:var(--text-secondary);margin-left:8px;\">助战值: -- | 剩余: --</span>\n        </div>\n\n        <!-- 层数偏好选择 -->\n        <div id=\"qa-coop-level-section\" style=\"display:none;margin-bottom:12px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n          <div style=\"font-weight:500;margin-bottom:8px;color:var(--text-primary);\">层数偏好</div>\n          <div class=\"task-grid\" style=\"margin-bottom:10px;\">\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"below_7\"><span>7层以下</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"7\"><span>7层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"8\"><span>8层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"10\"><span>10层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"11\"><span>11层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"13\"><span>13层</span></label>\n            <label class=\"task-check\"><input type=\"checkbox\" name=\"coop-level\" value=\"14\"><span>14层</span></label>\n          </div>\n          <div class=\"form-row\" style=\"margin-bottom:8px;\">\n            <label class=\"task-check\" style=\"margin:0;\">\n              <input type=\"checkbox\" id=\"qa-coop-scan-only\">\n              <span>仅扫描（不参与助力）</span>\n            </label>\n          </div>\n          <div class=\"form-row\" style=\"margin-bottom:0;\">\n            <label class=\"task-check\" style=\"margin:0;\">\n              <input type=\"checkbox\" id=\"qa-coop-switch-team\">\n              <span>助战前切换阵容</span>\n            </label>\n            <select id=\"qa-coop-team\" disabled class=\"input\" style=\"width:80px;\">\n              <option value=\"1\">阵容1</option>\n              <option value=\"2\">阵容2</option>\n              <option value=\"3\">阵容3</option>\n              <option value=\"4\">阵容4</option>\n              <option value=\"5\">阵容5</option>\n              <option value=\"6\">阵容6</option>\n            </select>\n          </div>\n        </div>\n\n        <!-- 队列信息 -->\n        <div id=\"qa-coop-queue-section\" style=\"display:none;margin-bottom:12px;padding:10px;background:var(--card-bg);border-radius:8px;\">\n          <div class=\"stats-row\">\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">排队位置</span>\n              <span class=\"stat-value\" id=\"qa-coop-queue-position\">--</span>\n            </div>\n            <div class=\"stat-item\">\n              <span class=\"stat-label\">等待人数</span>\n              <span class=\"stat-value\" id=\"qa-coop-queue-waiting\">--</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- 房间信息 -->\n        <div id=\"qa-coop-room-section\" style=\"display:none;margin-bottom:12px;\">\n          <div style=\"padding:10px;background:var(--card-bg);border-radius:8px;margin-bottom:8px;\">\n            <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\n              <span style=\"font-weight:600;\">当前状态</span>\n              <span id=\"qa-coop-my-role\" style=\"font-weight:bold;\">--</span>\n            </div>\n            <!-- 房间人数 -->\n            <div style=\"margin-bottom:8px;\">\n              <div style=\"display:flex;justify-content:space-between;margin-bottom:4px;\">\n                <span style=\"font-size:12px;\">房间人数</span>\n                <span style=\"font-size:12px;\" id=\"qa-coop-room-count\">0/5</span>\n              </div>\n              <div style=\"height:6px;background:var(--border-color);border-radius:3px;overflow:hidden;\">\n                <div id=\"qa-coop-room-count-bar\" style=\"height:100%;background:#34c759;width:0%;transition:width 0.3s;\"></div>\n              </div>\n            </div>\n            <!-- 成员列表 -->\n            <div id=\"qa-coop-members\" style=\"display:flex;flex-direction:column;gap:4px;\"></div>\n          </div>\n          <button class=\"btn btn-danger btn-small\" data-action=\"coop-leave\">离开房间</button>\n        </div>\n\n        <!-- 统计信息 -->\n        <div class=\"stats-row\" style=\"margin-bottom:12px;\">\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">扫描</span>\n            <span class=\"stat-value\" id=\"qa-coop-scanned\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">助力</span>\n            <span class=\"stat-value\" id=\"qa-coop-assisted\">0</span>\n          </div>\n          <div class=\"stat-item\">\n            <span class=\"stat-label\">获助</span>\n            <span class=\"stat-value\" id=\"qa-coop-received\">0</span>\n          </div>\n        </div>\n\n        <!-- 日志 -->\n        <div id=\"qa-coop-log\" style=\"height:120px;overflow-y:auto;padding:8px;font-size:11px;background:var(--card-bg);border-radius:4px;\">\n          <div style=\"color:var(--text-secondary);\">等待连接...</div>\n        </div>\n      </div>\n    </div>\n  ");
        bM.on("state_change", ({
          state: IE
        }) => {
          bJ();
          bb("状态: " + bu[IE], "info");
        });
        bM.on("connected", () => {
          TQ("联网助战服务器已连接", "success");
          bR || (bj(), bR = setInterval(bj, 10000));
        });
        bM.on("disconnected", ({
          code: IE,
          reason: IX
        }) => {
          TQ("与服务器断开连接", "warning");
          bb("断开连接: " + IE + " " + IX, "warning");
          bR && (clearInterval(bR), bR = null);
        });
        bM.on("queue_status", IE => {
          !function (IA) {
            {
              const IQ = document.getElementById("qa-coop-queue-position");
              const Ix = document.getElementById("qa-coop-queue-waiting");
              IQ && (IQ.textContent = IA.position || "--");
              Ix && (Ix.textContent = IA.totalWaiting || "--");
            }
          }(IE);
          bb("匹配中: 位置 " + IE.position + ", 等待 " + IE.totalWaiting + " 人", "info");
        });
        bM.on("room_matched", ({
          roomId: IE,
          members: IX
        }) => {
          TQ("匹配成功！开始并行互助", "success");
          bb("匹配成功! " + IX.length + "人组队", "success");
          bH();
        });
        bM.on("start_scanning", () => {
          bb("开始扫描房间...", "info");
        });
        bM.on("scan_tick", ({
          total: IE
        }) => {
          {
            bb("扫描中: 发现 " + IE + " 个房间", "info");
          }
        });
        bM.on("scan_error", ({
          error: IE
        }) => {
          bb("扫描失败: " + IE, "error");
        });
        bM.on("room_scanned", ({
          gameRoomNumber: IE,
          towerId: IX,
          ownerName: IG
        }) => {
          {
            bb("扫描到: " + IG + " (" + IX + "层)", "info");
            bO();
          }
        });
        bM.on("assist_request", ({
          ownerRoleName: IE,
          towerId: IX
        }) => {
          {
            bb("收到助力任务: " + IE + " (" + IX + "层)", "warning");
          }
        });
        bM.on("assist_start", ({
          targetRoleName: IE
        }) => {
          bb("开始助力: " + IE, "info");
        });
        bM.on("assist_complete", ({
          success: IE,
          targetRoleName: IX,
          towerId: IG,
          error: IA,
          latency: IQ
        }) => {
          IE ? (bb("助力成功: " + IX + " (" + IG + "层)" + (IQ ? " | 耗时: " + IQ.total + "ms (网络" + IQ.network + "ms + 执行" + IQ.execution + "ms)" : ""), "success"), TQ("助力成功！", "success"), bq()) : bb("助力失败: " + (IA || "未知错误"), "error");
          bO();
        });
        bM.on("i_was_assisted", ({
          helperRoleName: IE
        }) => {
          {
            bb("被助力: " + IE + " 帮助了你", "success");
            TQ(IE + " 助力了你！", "success");
            bO();
          }
        });
        bM.on("member_assisted", ({
          assistedRoleName: IE,
          helperRoleName: IX
        }) => {
          bb(IX + " → " + IE, "info");
        });
        bM.on("member_joined", ({
          member: IE,
          currentCount: IX,
          requiredCount: IG
        }) => {
          bb("成员加入: " + IE.roleName, "info");
          bH();
          bh();
        });
        bM.on("member_left", ({
          tokenId: IE,
          roleName: IX,
          currentCount: IG,
          requiredCount: IA
        }) => {
          bb("成员离开: " + IX, "warning");
          bH();
          bh();
        });
        bM.on("room_progress", IE => {
          bh();
          bH();
        });
        bM.on("room_state_update", IE => {
          bH();
          bb("房间状态已更新", "info");
        });
        bM.on("room_dissolved", ({
          reason: IE
        }) => {
          bb("房间解散: " + ({
            completed: "全部完成！",
            timeout: "超时",
            member_left: "成员离开",
            error: "发生错误"
          }[IE] || IE), "completed" === IE ? "success" : "info");
          TQ("completed" === IE ? "互助完成！" : "房间已解散", "completed" === IE ? "success" : "info");
          bH();
        });
        bM.on("error", ({
          code: IE,
          message: IX
        }) => {
          TQ(IX || "发生错误", "error");
          bb("错误: " + (IX || IE), "error");
        });
        bM.on("stats_update", IE => {
          const IX = document.getElementById("qa-coop-global-online");
          const IG = document.getElementById("qa-coop-global-rooms");
          const IA = document.getElementById("qa-coop-global-waiting");
          IX && (IX.textContent = IE.onlinePlayers ?? "--");
          IG && (IG.textContent = IE.activeRooms ?? "--");
          IA && (IA.textContent = IE.matchingPlayers ?? "--");
        });
        bJ();
        bO();
        const IK = function () {
          {
            try {
              const IX = localStorage.getItem(bS);
              const IG = {
                selectedLevels: [7, 8, 10, 11, 13, 14],
                switchTeam: false,
                teamId: 1,
                scanOnly: false
              };
              if (!IX) {
                return IG;
              }
              const IA = JSON.parse(IX);
              const IQ = {
                selectedLevels: [7, 8, 10, 11, 13, 14],
                switchTeam: false,
                teamId: 1,
                scanOnly: false
              };
              return undefined === IA.minLevel || IA.selectedLevels ? IA : IQ;
            } catch {
              {
                const Ik = {
                  selectedLevels: [7, 8, 10, 11, 13, 14],
                  switchTeam: false,
                  teamId: 1
                };
                return Ik;
              }
            }
          }
        }();
        const IW = {
          below_7: [1, 2, 3, 4, 5, 6],
          "7": [7],
          "8": [8],
          "10": [10],
          "11": [11],
          "13": [13],
          "14": [14]
        };
        document.querySelectorAll("input[name=\"coop-level\"]").forEach(IE => {
          const IX = IW[IE.value] || [];
          IE.checked = IX.some(IG => IK.selectedLevels?.["includes"](IG));
        });
        const IC = document.getElementById("qa-coop-switch-team");
        const Iy = document.getElementById("qa-coop-team");
        const IY = document.getElementById("qa-coop-scan-only");
        IC && (IC.checked = IK.switchTeam || false);
        Iy && (Iy.value = IK.teamId || "1", Iy.disabled = !IK.switchTeam);
        IY && (IY.checked = IK.scanOnly || false);
        document.querySelectorAll("input[name=\"coop-level\"]").forEach(IE => {
          IE.addEventListener("change", bW);
        });
        IY && IY.addEventListener("change", bW);
        IC && IC.addEventListener("change", IE => {
          Iy && (Iy.disabled = !IE.target.checked);
          bW();
        });
        Iy && Iy.addEventListener("change", bW);
        const Im = document.getElementById("qa-coop-refresh-btn");
        Im && Im.addEventListener("click", bw);
        (function () {
          {
            const IX = document.getElementById("qa-coop-tip-btn");
            if (!IX) {
              return;
            }
            let IG = null;
            const IA = () => {
              IG || (IG = document.createElement("div"), IG.className = "coop-tip-popup", IG.innerHTML = "\n      <div>1、20人房间匹配，每个房间只分布一个500服角色</div>\n      <div>2、任务分发：根据层数偏好 + 最远时间 + 500服优先攻打</div>\n    ", IX.parentElement.style.position = "relative", IX.parentElement.appendChild(IG));
            };
            const IQ = () => {
              IG && (IG.remove(), IG = null);
            };
            IX.addEventListener("mouseenter", IA);
            IX.addEventListener("mouseleave", IQ);
            IX.addEventListener("focus", IA);
            IX.addEventListener("blur", IQ);
            IX.addEventListener("click", Ix => {
              Ix.stopPropagation();
              IG ? IQ() : IA();
            });
          }
        })();
        bT = true;
        console.log("✅ 联网助战模块初始化完成（并行互助模式）");
      }
    }
  });
  function bY() {
    JE();
  }
  const bm = {
    name: "木火把",
    duration: 600,
    icon: "🪵"
  };
  const bE = {
    name: "青铜火把",
    duration: 1800,
    icon: "🔥"
  };
  const bX = {
    name: "咸神火把",
    duration: 3600,
    icon: "✨"
  };
  const bA = {
    "1008": bm,
    "1009": bE,
    "1010": bX
  };
  let bQ = null;
  const bx = Ib => {
    {
      const If = Ib || window.ROLE?.["items"];
      if (!If) {
        return;
      }
      const IK = RZ(If, 1008);
      const IW = RZ(If, 1009);
      const IC = RZ(If, 1010);
      const Iy = document.getElementById("qa-torch-wood-count");
      const IY = document.getElementById("qa-torch-bronze-count");
      const Im = document.getElementById("qa-torch-golden-count");
      Iy && (Iy.textContent = IK.toLocaleString());
      IY && (IY.textContent = IW.toLocaleString());
      Im && (Im.textContent = IC.toLocaleString());
    }
  };
  const bk = Ib => {
    {
      const If = Ib || window.ROLE;
      if (!If) {
        return;
      }
      const {
        autoClickSettleTime: IK,
        autoClickTime: IW,
        autoClickType: IC
      } = If;
      const Iy = document.getElementById("qa-torch-status");
      const IY = document.getElementById("qa-torch-remaining");
      const Im = document.getElementById("qa-torch-message");
      if (bQ && (clearInterval(bQ), bQ = null), !IK || !IW || !IC) {
        Iy && (Iy.textContent = "未使用");
        IY && (IY.textContent = "--:--:--");
        return void (Im && (Im.textContent = "选择火把类型和数量后点击使用"));
      }
      const IE = bA[IC];
      const IX = IE ? IE.name : "火把" + IC;
      Iy && (Iy.textContent = "使用中 (" + IX + ")");
      const IG = () => {
        {
          const Ix = Math.floor(Date.now() / 1000);
          const Ik = IK + IW;
          const Ig = Math.max(0, Ik - Ix);
          if (Ig <= 0) {
            Iy && (Iy.textContent = "未使用");
            IY && (IY.textContent = "--:--:--");
            Im && (Im.textContent = "火把已用完，可以继续使用");
            return void (bQ && (clearInterval(bQ), bQ = null));
          }
          const IL = Math.floor(Ig / 3600);
          const Id = Math.floor(Ig % 3600 / 60);
          const c0 = Ig % 60;
          const c1 = String(IL).padStart(2, "0") + ":" + String(Id).padStart(2, "0") + ":" + String(c0).padStart(2, "0");
          IY && (IY.textContent = c1);
          Im && (Im.textContent = IX + "使用中，自动点击生效");
        }
      };
      IG();
      bQ = setInterval(IG, 1000);
    }
  };
  const bg = async (Ib, II) => {
    const IK = document.getElementById("qa-torch-message");
    try {
      {
        if (!bA[Ib]) {
          throw new Error("未知的火把类型: " + Ib);
        }
        const IC = parseInt(II, 10);
        if (!Number.isFinite(IC) || IC < 1) {
          throw new Error("数量必须大于0");
        }
        const Iy = window.ROLE?.["items"];
        if (!Iy) {
          throw new Error("无法获取道具数据");
        }
        const IY = RZ(Iy, Ib);
        if (IY < IC) {
          throw new Error("库存不足，当前库存: " + IY);
        }
        IK && (IK.textContent = "正在使用 " + bA[Ib].name + " x" + IC + "...");
        const Im = {
          itemId: Ib,
          quantity: IC
        };
        const IE = await Rz("item_consume", Im);
        if (!IE || !IE.role) {
          throw new Error("使用火把失败，响应数据异常");
        }
        if (window.ROLE && (undefined !== IE.role.autoClickSettleTime && (window.ROLE.autoClickSettleTime = IE.role.autoClickSettleTime), undefined !== IE.role.autoClickTime && (window.ROLE.autoClickTime = IE.role.autoClickTime), undefined !== IE.role.autoClickType && (window.ROLE.autoClickType = IE.role.autoClickType), IE.role.items && Object.assign(window.ROLE.items, IE.role.items)), bx(), bk(), IK) {
          {
            const IX = bA[Ib].duration * IC;
            const IG = Math.floor(IX / 3600);
            const IA = Math.floor(IX % 3600 / 60);
            IK.textContent = "✅ 成功使用 " + bA[Ib].name + " x" + IC + "，持续 " + (IG > 0 ? IG + "小时" : "") + IA + "分钟";
          }
        }
      }
    } catch (Ix) {
      {
        IK && (IK.textContent = "❌ " + (Ix.message || "使用火把失败"));
      }
    }
  };
  const bL = {
    __proto__: null,
    updateTorchCounts: bx,
    updateTorchStatus: bk,
    useTorch: bg
  };
  var bd = Object.freeze(bL);
  const I0 = () => {
    {
      try {
        return RU(37007) || 0;
      } catch (II) {
        {
          return 0;
        }
      }
    }
  };
  const I1 = () => {
    try {
      const Ib = TR.roleId;
      const II = Th(Ib);
      const If = localStorage.getItem(II);
      return If ? JSON.parse(If) : [];
    } catch (IK) {
      return [];
    }
  };
  const I2 = () => {
    {
      try {
        const II = TR.roleId;
        const If = TO(II);
        const IK = localStorage.getItem(If);
        return IK ? parseInt(IK) : 0;
      } catch (IW) {
        return 0;
      }
    }
  };
  const I3 = async () => {
    try {
      {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(Tj.toString());
          TQ("已复制到剪贴板", "success");
        } else {
          const If = document.createElement("input");
          If.value = Tj.toString();
          If.style.position = "fixed";
          If.style.left = "-9999px";
          document.body.appendChild(If);
          If.select();
          document.execCommand("copy");
          document.body.removeChild(If);
          TQ("已复制到剪贴板", "success");
        }
      }
    } catch (IK) {
      TQ("复制失败，请手动复制", "error");
    }
  };
  const I4 = async (Ib, II) => {
    const IK = Ib?.["value"]?.["trim"]();
    if (IK) {
      II && (II.textContent = "正在验证密码...");
      try {
        {
          const IC = {
            password: IK,
            passwordType: 1
          };
          const Iy = await Rz("role_commitpassword", IC, "捐赠-密码验证");
          const IY = Iy?.["body"]?.["role"]?.["statistics"] || Iy?.["role"]?.["statistics"] || {};
          const Im = IY["que:wh:tm"];
          if (IY["que:p:err"]) {
            TQ("密码输入错误", "error");
            Ib && (Ib.value = "");
            II && (II.textContent = "密码错误，请重新输入");
            TR.legacyPasswordVerified = false;
            return false;
          }
          if (Im) {
            {
              TR.legacyPasswordVerified = true;
              Ib && (Ib.disabled = true);
              II && (II.textContent = "密码验证成功");
              TQ("密码验证成功", "success");
              const IE = document.getElementById("qa-donation-password-row");
              const IX = document.getElementById("qa-donation-gift-row");
              IE && (IE.style.display = "none");
              IX && (IX.style.display = "block");
              return true;
            }
          }
          TQ("验证失败，请重试", "error");
          II && (II.textContent = "验证失败");
          return false;
        }
      } catch (IA) {
        {
          II && (II.textContent = "验证失败: " + IA.message);
          TQ("验证失败: " + IA.message, "error");
          return false;
        }
      }
    } else {
      TQ("请输入二级密码", "warning");
    }
  };
  const I5 = async (Ib, II, If) => {
    {
      const IC = parseInt(Ib?.["value"]) || 0;
      if (IC <= 0) {
        return void TQ("请输入有效的赠送数量", "warning");
      }
      if (!TR.legacyPasswordVerified) {
        TQ("请先验证二级密码", "warning");
        const IY = document.getElementById("qa-donation-password-row");
        return void (IY && (IY.style.display = "flex"));
      }
      const Iy = I0();
      if (Iy <= 0) {
        TQ("当前无可赠送残卷", "warning");
        return void (II && (II.textContent = "当前无可赠送残卷"));
      }
      if (IC > Iy) {
        TQ("赠送数量不能超过当前拥有数量 (" + Iy + ")", "warning");
      } else {
        try {
          const Im = 9999;
          let IE = IC;
          let IX = 0;
          for (; IE > 0;) {
            const Ix = Math.min(IE, Im);
            II && (II.textContent = "正在赠送 " + Ix + " 个残卷... (已送" + IX + "/" + IC + ")");
            const Ik = {
              itemCnt: Ix,
              legacyUIds: [],
              targetId: Tj
            };
            const Ig = await Rz("legacy_sendgift", Ik, "捐赠残卷");
            IX += Ix;
            IE -= Ix;
            Z1(Ig);
            IE > 0 && (await R4(500));
          }
          (IL => {
            {
              try {
                const c0 = TR.roleId;
                const c1 = Th(c0);
                const c2 = I1();
                c2.unshift({
                  timestamp: Date.now(),
                  amount: IL
                });
                c2.length > 50 && c2.splice(50);
                localStorage.setItem(c1, JSON.stringify(c2));
              } catch (c3) {
                console.error("保存捐赠记录失败:", c3);
              }
            }
          })(IC);
          const IG = (IL => {
            try {
              {
                const c1 = TR.roleId;
                const c2 = TO(c1);
                const c3 = I2() + IL;
                localStorage.setItem(c2, c3.toString());
                return c3;
              }
            } catch (c5) {
              console.error("更新累计捐赠失败:", c5);
              return 0;
            }
          })(IC);
          (async IL => {
            try {
              {
                const c0 = window.ROLE;
                if (!c0) {
                  return;
                }
                const c1 = {
                  roleId: String(c0.roleId || TR.roleId),
                  roleName: c0.name || TR.roleName || "未知",
                  serverName: c0.serverName || TR.serverName || "未知区服",
                  headImg: c0.headImg || TR.headImg || null,
                  amount: IL
                };
                await fetch(Tq + "/report", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(c1)
                });
              }
            } catch (c2) {}
          })(IC);
          II && (II.textContent = "赠送成功！");
          If && (If.textContent = "累计捐赠: " + IG + " 个残卷");
          Ib && (Ib.value = "");
          const IA = document.getElementById("qa-donation-records");
          IA && (IA.innerHTML = I6());
          const IQ = document.getElementById("qa-donation-current-count");
          if (IQ) {
            {
              const IL = I0();
              IQ.textContent = "当前拥有: " + IL + " 个残卷";
            }
          }
          TQ("感谢您的捐赠支持！", "success");
        } catch (c0) {
          II && (II.textContent = "赠送失败: " + c0.message);
          TQ("赠送失败: " + c0.message, "error");
        }
      }
    }
  };
  const I6 = () => {
    {
      const If = I1();
      return 0 === If.length ? "<div style=\"text-align:center;color:#999;padding:10px;\">暂无赠送记录</div>" : If.slice(0, 5).map(IK => {
        {
          const IC = new Date(IK.timestamp);
          return "<div style=\"padding:5px 0;border-bottom:1px solid var(--border-color,#e5e5e5);\">" + IC.getFullYear() + "-" + String(IC.getMonth() + 1).padStart(2, "0") + "-" + String(IC.getDate()).padStart(2, "0") + " " + String(IC.getHours()).padStart(2, "0") + ":" + String(IC.getMinutes()).padStart(2, "0") + " - " + IK.amount + "个</div>";
        }
      }).join("");
    }
  };
  const I7 = {
    "daily-refresh": async function () {
      window.ROLE ? (Rp(window.ROLE.dailyTask), TQ("已刷新", "info")) : TQ("数据未就绪，请稍后重试", "warning");
    },
    "daily-fix": async function () {
      {
        const II = Array.from(document.querySelectorAll("#page-daily input[data-task]:checked")).map(If => If.getAttribute("data-task")).filter(Boolean);
        if (II.length) {
          try {
            {
              if (RN("准备中..."), !window.ROLE) {
                return void TQ("数据未就绪，请稍后重试", "warning");
              }
              const If = (window.ROLE.dailyTask || window.ROLE.daily || {}).complete || {};
              const IK = c1 => {
                {
                  const c4 = RM(If, c1);
                  const c5 = TC[c1] || 1;
                  return (-1 === c4 ? c5 : "number" == typeof c4 ? Math.min(c4, c5) : 0) >= c5;
                }
              };
              const IW = [];
              const IC = {
                isSkipShareCard: true,
                type: 2
              };
              const Iy = {
                recruitType: 3,
                recruitNumber: 1
              };
              const IY = {
                recruitType: 1,
                recruitNumber: 1
              };
              if (II.includes("share") && !IK(2) && IW.push({
                cmd: "system_mysharecallback",
                params: IC,
                name: "分享游戏"
              }), II.includes("friend") && !IK(3) && IW.push({
                cmd: "friend_batch",
                params: {},
                name: "赠送好友金币"
              }), II.includes("recruit") && !IK(4) && (IW.push({
                cmd: "hero_recruit",
                params: Iy,
                name: "免费招募"
              }), IW.push({
                cmd: "hero_recruit",
                params: IY,
                name: "付费招募"
              })), II.includes("hangup") && !IK(5)) {
                const c1 = {
                  isSkipShareCard: true,
                  type: 2
                };
                for (let c4 = 0; c4 < 4; c4++) {
                  IW.push({
                    cmd: "system_mysharecallback",
                    params: c1,
                    name: "挂机加钟" + (c4 + 1) + "/8"
                  });
                }
                const c2 = {
                  cmd: "system_claimhangupreward",
                  params: {},
                  name: "领取挂机奖励"
                };
                IW.push(c2);
                const c3 = {
                  isSkipShareCard: true,
                  type: 2
                };
                for (let c5 = 0; c5 < 4; c5++) {
                  IW.push({
                    cmd: "system_mysharecallback",
                    params: c3,
                    name: "挂机加钟" + (c5 + 5) + "/8"
                  });
                }
              }
              if (II.includes("legacy") && IW.push({
                cmd: "legacy_claimhangup",
                params: {},
                name: "领取功法残卷"
              }), II.includes("buygold") && !IK(6)) {
                const c6 = window.ROLE?.["statisticsTime"] || {};
                const c7 = {
                  buyNum: 1
                };
                if (ZX(c6["buy:gold"])) {
                  for (let c8 = 0; c8 < 3; c8++) {
                    IW.push({
                      cmd: "system_buygold",
                      params: c7,
                      name: "免费点金" + (c8 + 1) + "/3"
                    });
                  }
                }
              }
              const Im = {
                itemId: 2001,
                number: 10
              };
              if (II.includes("openbox") && !IK(7) && IW.push({
                cmd: "item_openbox",
                params: Im,
                name: "开启木质宝箱10个"
              }), II.includes("blackmarket") && !IK(12) && IW.push({
                cmd: "store_purchase",
                params: {},
                name: "黑市一键采购",
                isBlackmarket: true
              }), II.includes("arena") && !IK(13)) {
                const c9 = new Date().getHours();
                if (c9 >= 8 && c9 <= 22) {
                  const cP = {
                    cmd: "arena_startarea",
                    params: {},
                    name: "开始竞技场"
                  };
                  IW.push(cP);
                  for (let cD = 1; cD <= 3; cD++) {
                    IW.push({
                      cmd: "arena_getareatarget",
                      params: {},
                      name: "获取竞技场目标" + cD,
                      isArenaTarget: true
                    });
                  }
                }
              }
              if (II.includes("legionboss")) {
                {
                  const cB = document.getElementById("qa-legionboss-count");
                  const cz = parseInt(cB?.["value"], 10) || 2;
                  if (cz > 0) {
                    for (let cM = 1; cM <= cz; cM++) {
                      IW.push({
                        cmd: "fight_startlegionboss",
                        params: {},
                        name: "俱乐部BOSS" + cM + "/" + cz,
                        isBossBattle: true
                      });
                    }
                  }
                }
              }
              if (II.includes("dailyboss")) {
                {
                  const cS = [9904, 9905, 9901, 9902, 9903, 9904, 9905][new Date().getDay()];
                  const cT = {
                    bossId: cS
                  };
                  for (let cR = 1; cR <= 3; cR++) {
                    IW.push({
                      cmd: "fight_startboss",
                      params: cT,
                      name: "每日BOSS" + cR + "/3",
                      isBossBattle: true
                    });
                  }
                }
              }
              const IE = {
                cmd: "bottlehelper_stop",
                params: {},
                name: "停止盐罐计时"
              };
              const IX = {
                cmd: "bottlehelper_start",
                params: {},
                name: "开始盐罐计时"
              };
              const IG = {
                discountId: 1
              };
              const IA = {
                cardId: 1
              };
              const IQ = {
                cardId: 4003
              };
              const Ix = {
                lotteryNumber: 1,
                newFree: true,
                type: 1
              };
              if (II.includes("bottle") && (IW.push(IE), IW.push(IX), IK(14) || IW.push({
                cmd: "bottlehelper_claim",
                params: {},
                name: "领取盐罐奖励"
              })), II.includes("treasure") && (IW.push({
                cmd: "collection_goodslist",
                params: {},
                name: "获取珍宝阁列表"
              }), IW.push({
                cmd: "collection_claimfreereward",
                params: {},
                name: "领取珍宝阁免费礼包"
              })), II.includes("signin") && (IW.push({
                cmd: "system_signinreward",
                params: {},
                name: "福利签到"
              }), IW.push({
                cmd: "legion_signin",
                params: {},
                name: "俱乐部签到"
              }), IW.push({
                cmd: "discount_claimreward",
                params: IG,
                name: "领取每日礼包"
              }), IW.push({
                cmd: "card_claimreward",
                params: IA,
                name: "领取免费礼包"
              }), IW.push({
                cmd: "card_claimreward",
                params: IQ,
                name: "领取永久卡礼包"
              })), II.includes("fish")) {
                for (let cU = 0; cU < 3; cU++) {
                  IW.push({
                    cmd: "artifact_lottery",
                    params: Ix,
                    name: "免费钓鱼" + (cU + 1) + "/3"
                  });
                }
              }
              if (II.includes("mail") && IW.push({
                cmd: "mail_claimallattachment",
                params: {},
                name: "领取邮件奖励"
              }), II.includes("sweepticket")) {
                for (let cN = 0; cN < 3; cN++) {
                  IW.push({
                    cmd: "genie_buysweep",
                    params: {},
                    name: "领取免费扫荡券" + (cN + 1) + "/3"
                  });
                }
              }
              if (II.includes("genie")) {
                for (let cu = 1; cu <= 4; cu++) {
                  {
                    const cp = ["魏国", "蜀国", "吴国", "群雄"][cu - 1];
                    const cV = {
                      genieId: cu
                    };
                    const cJ = {
                      cmd: "genie_sweep",
                      params: cV,
                      name: "灯神扫荡-" + cp
                    };
                    IW.push(cJ);
                  }
                }
              }
              const Ik = {
                genieId: 5
              };
              const Ig = {
                cmd: "genie_sweep",
                params: Ik,
                name: "深海扫荡"
              };
              II.includes("deepsea") && 1 === new Date().getDay() && IW.push(Ig);
              for (let cH = 1; cH <= 10; cH++) {
                -1 !== RM(If, cH) && IW.push({
                  cmd: "task_claimdailypoint",
                  params: {
                    taskId: cH
                  },
                  name: "领取任务奖励" + cH
                });
              }
              const IL = {
                cmd: "task_claimdailyreward",
                params: {},
                name: "领取日常任务奖励"
              };
              const Id = {
                cmd: "task_claimweekreward",
                params: {},
                name: "领取周常任务奖励"
              };
              if (IW.push(IL), IW.push(Id), 0 === IW.length) {
                return void RN("无需补差");
              }
              const c0 = ZH()?.["enabled"];
              IW.some(ch => ch.isArenaTarget || ch.isBossBattle) && (await Rf());
              for (let ch = 0; ch < IW.length; ch++) {
                const cO = IW[ch];
                RN(ch + 1 + "/" + IW.length + " " + (cO.name || cO.cmd));
                try {
                  const cj = await Rb("daily-tasks", cO.cmd, cO.params || {}, cO.name || cO.cmd);
                  if (c0 && Zj(cO.name || cO.cmd, "ok"), cO.isBlackmarket) {
                    const cq = cj?.["goodsList"] || cj?.["body"]?.["goodsList"] || {};
                    let cw = false;
                    for (const cb in cq) if (cq[cb]?.["buy_quantity"] > 0) {
                      cw = true;
                      break;
                    }
                    if (!cw) {
                      try {
                        const cI = {
                          goodsId: 1
                        };
                        await Rb("daily-tasks", "store_buy", cI, "黑市购买第1个物品");
                        c0 && Zj("黑市购买第1个物品", "ok");
                      } catch (cf) {
                        c0 && Zj("黑市购买第1个物品", "fail");
                      }
                    }
                  }
                  if (cO.isArenaTarget && cj) {
                    const cW = RK(cj);
                    cW && (await Rb("daily-tasks", "fight_startareaarena", {
                      targetId: cW
                    }, "竞技场战斗"), c0 && Zj("竞技场战斗", "ok"));
                  }
                } catch (cC) {
                  c0 && Zj(cO.name || cO.cmd, "fail", cC.message?.["slice"](0, 15));
                }
                await R4(500);
              }
              RN("补差完成");
              c0 && Zj("[日常] 补差完成", "ok");
              Rp(window.ROLE?.["dailyTask"]);
              TQ("每日任务补差完成", "success");
            }
          } catch (cY) {
            {
              RN("执行失败: " + cY.message);
              TQ("执行失败: " + cY.message, "error");
            }
          }
        }
      }
    },
    "bottle-restart": async function () {
      {
        const II = ZH()?.["enabled"];
        try {
          const If = {
            bottleType: -1
          };
          const IK = {
            bottleType: -1
          };
          await Rz("bottlehelper_stop", If, "盐罐助手-停止");
          await R4(500);
          await Rz("bottlehelper_start", IK, "盐罐助手-启动");
          const IW = await Rz("role_getroleinfo", {}, "盐罐助手-刷新状态");
          Rx(IW?.["role"] || IW);
          II && Zj("[盐罐] 重启成功", "ok");
        } catch (IC) {
          {
            II && Zj("[盐罐] 重启失败", "fail", IC.message?.["slice"](0, 15));
          }
        }
      }
    },
    "hangup-refresh": async function () {
      const Ib = await Rz("role_getroleinfo", {}, "挂机奖励-刷新状态");
      RL(Ib?.["role"] || Ib);
    },
    "hangup-claim": async function () {
      {
        const II = ZH()?.["enabled"];
        const If = [];
        const IK = {
          isSkipShareCard: true,
          type: 2
        };
        for (let Iy = 1; Iy <= 4; Iy++) {
          If.push({
            cmd: "system_mysharecallback",
            params: IK,
            name: "加钟" + Iy + "/8"
          });
        }
        const IW = {
          cmd: "system_claimhangupreward",
          params: {},
          name: "领取挂机奖励"
        };
        If.push(IW);
        const IC = {
          isSkipShareCard: true,
          type: 2
        };
        for (let IY = 5; IY <= 8; IY++) {
          If.push({
            cmd: "system_mysharecallback",
            params: IC,
            name: "加钟" + IY + "/8"
          });
        }
        try {
          await RI("add-time", If);
          const Im = await Rz("role_getroleinfo", {}, "挂机奖励-刷新状态");
          RL(Im?.["role"] || Im);
          II && Zj("[挂机] 领取成功", "ok");
        } catch (IE) {
          II && Zj("[挂机] 领取失败", "fail", IE.message?.["slice"](0, 15));
        }
      }
    },
    "addtime-run": async function () {
      const II = [];
      const If = {
        isSkipShareCard: true,
        type: 2
      };
      for (let IW = 0; IW < 5; IW++) {
        II.push({
          cmd: "system_mysharecallback",
          params: If,
          name: "加钟" + (IW + 1) + "/5"
        });
      }
      await RI("add-time", II);
      const IK = await Rz("role_getroleinfo", {}, "挂机加钟-刷新状态");
      RL(IK?.["role"] || IK);
    },
    "legacy-claim": async function () {
      const Ib = document.getElementById("qa-legacy-status");
      Ib && (Ib.textContent = "正在领取...");
      try {
        await Rz("legacy_claimhangup", {}, "领取功法残卷");
        const II = await Rz("legacy_getinfo", {}, "刷新功法绝学状态");
        Z1(II);
        Ib && (Ib.textContent = "领取成功");
        TQ("功法残卷领取成功", "success");
      } catch (If) {
        Ib && (Ib.textContent = "领取失败: " + If.message);
        TQ("领取失败: " + If.message, "error");
      }
    },
    "legacy-query": async function () {
      const II = document.getElementById("qa-legacy-status");
      const If = document.getElementById("qa-legacy-target-id");
      const IK = If?.["value"]?.["trim"]();
      if (IK) {
        II && (II.textContent = "正在查询目标信息...");
        try {
          const IW = {
            bottleType: 0,
            includeBottleTeam: false,
            isSearch: false,
            roleId: IK
          };
          const IC = await Rz("rank_getroleinfo", IW, "查询赠送目标");
          if (!IC.roleInfo) {
            TQ("未查询到目标信息", "warning");
            return void (II && (II.textContent = "未查询到目标信息"));
          }
          const Iy = document.getElementById("qa-legacy-target-info");
          Iy && (Iy.style.display = "block");
          const IY = document.getElementById("qa-legacy-avatar-img");
          IY && IC.roleInfo.headImg && (IY.src = IC.roleInfo.headImg, IY.style.display = "block", IY.referrerPolicy = "no-referrer", IY.onerror = () => {
            IY.style.display = "none";
          });
          const Im = document.getElementById("qa-legacy-target-name");
          Im && (Im.textContent = IC.roleInfo.name || "未知");
          const IE = document.getElementById("qa-legacy-target-server");
          IE && (IE.textContent = IC.roleInfo.serverName || "未知区服");
          const IX = document.getElementById("qa-legacy-target-power");
          if (IX) {
            const IQ = IC.roleInfo.power || 0;
            IX.textContent = IQ >= 100000000 ? (IQ / 100000000).toFixed(2) + "亿" : IQ >= 10000 ? (IQ / 10000).toFixed(1) + "万" : IQ;
          }
          const IG = document.getElementById("qa-legacy-target-legion");
          IG && (IG.textContent = IC.legionInfo?.["name"] || "无俱乐部");
          const IA = document.getElementById("qa-legacy-password-row");
          IA && (IA.style.display = "flex");
          II && (II.textContent = "查询完成，请验证密码后赠送");
          TQ("查询成功", "success");
        } catch (Ix) {
          II && (II.textContent = "查询失败: " + Ix.message);
          TQ("查询失败: " + Ix.message, "error");
        }
      } else {
        TQ("请输入目标ID", "warning");
      }
    },
    "legacy-verify-password": async function () {
      const Ib = document.getElementById("qa-legacy-status");
      const II = document.getElementById("qa-legacy-password");
      const If = document.getElementById("qa-legacy-password-status");
      const IK = II?.["value"]?.["trim"]();
      if (IK) {
        Ib && (Ib.textContent = "正在验证密码...");
        try {
          const IW = {
            password: IK,
            passwordType: 1
          };
          const IC = await Rz("role_commitpassword", IW, "残卷赠送-密码验证");
          const Iy = IC?.["body"]?.["role"]?.["statistics"] || IC?.["role"]?.["statistics"] || {};
          const IY = Iy["que:wh:tm"];
          if (Iy["que:p:err"]) {
            TQ("密码输入错误", "error");
            II && (II.value = "");
            Ib && (Ib.textContent = "密码错误，请重新输入");
            return void (TR.legacyPasswordVerified = false);
          }
          IY ? (TR.legacyPasswordVerified = true, II && (II.disabled = true), If && (If.style.display = "inline"), Ib && (Ib.textContent = "密码验证成功，可以赠送"), TQ("密码验证成功", "success")) : (TQ("验证失败，请重试", "error"), Ib && (Ib.textContent = "验证失败"));
        } catch (Im) {
          Ib && (Ib.textContent = "验证失败: " + Im.message);
          TQ("验证失败: " + Im.message, "error");
        }
      } else {
        TQ("请输入二级密码", "warning");
      }
    },
    "legacy-sendgift": async function () {
      {
        const II = document.getElementById("qa-legacy-status");
        const If = document.getElementById("qa-legacy-target-id");
        const IK = If?.["value"] ? parseInt(If.value) : null;
        if (!IK) {
          TQ("请先输入赠送目标ID", "warning");
          return void (II && (II.textContent = "请输入目标ID"));
        }
        if (!TR.legacyPasswordVerified) {
          TQ("请先验证二级密码", "warning");
          II && (II.textContent = "请先验证二级密码");
          const IW = document.getElementById("qa-legacy-password-row");
          return void (IW && (IW.style.display = "flex"));
        }
        II && (II.textContent = "正在获取残卷数量...");
        try {
          const IC = RU(37007);
          if (IC <= 0) {
            II && (II.textContent = "当前无可赠送残卷");
            return void TQ("当前无可赠送残卷", "warning");
          }
          const Iy = document.getElementById("qa-legacy-gift-count");
          const IY = parseInt(Iy?.["value"]) || 0;
          const Im = IY > 0 && IY <= IC ? IY : IC;
          const IE = 9999;
          let IX = Im;
          let IG = 0;
          let IA = null;
          for (; IX > 0;) {
            const Ix = Math.min(IX, IE);
            II && (II.textContent = "正在赠送 " + Ix + " 个残卷... (已送" + IG + "/" + Im + ")");
            const Ik = {
              itemCnt: Ix,
              legacyUIds: [],
              targetId: IK
            };
            const Ig = await Rz("legacy_sendgift", Ik, "赠送残卷");
            IA = Ig;
            IG += Ix;
            IX -= Ix;
            Z1(Ig);
            IX > 0 && (await R4(500));
          }
          const IQ = IA?.["roleLegacy"]?.["sendItemCnt"] || 0;
          II && (II.textContent = "赠送成功! 本次:" + Im + " 累计:" + IQ);
          TQ("残卷赠送成功，累计赠送 " + IQ + " 个", "success");
        } catch (IL) {
          II && (II.textContent = "赠送失败: " + IL.message);
          TQ("赠送失败: " + IL.message, "error");
        }
      }
    },
    "torch-use": async Ib => {
      try {
        {
          const II = document.getElementById("qa-torch-itemid");
          if (!II) {
            throw new Error("无法获取火把类型");
          }
          const If = parseInt(II.value, 10);
          if (!If) {
            throw new Error("请选择火把类型");
          }
          const IK = document.getElementById("qa-torch-quantity");
          if (!IK) {
            throw new Error("无法获取数量输入框");
          }
          const IW = parseInt(IK.value, 10);
          if (!Number.isFinite(IW) || IW < 1) {
            throw new Error("请输入有效的数量（大于0）");
          }
          await bg(If, IW);
        }
      } catch (Iy) {
        const IY = document.getElementById("qa-torch-message");
        IY && (IY.textContent = "❌ " + (Iy.message || "使用火把失败"));
      }
    },
    "club-info": async function () {
      await U6();
    },
    "club-signin": async function () {
      await U7();
    },
    "club-export": async function () {
      await U8();
    },
    "club-match-signup": async function () {
      await Rb("club-match", "legionmatch_rolesignup", {}, "俱乐部匹配报名");
    },
    "tower-loop": async function () {
      (async () => {
        if (TR.towerClimbing) {
          return void TQ("正在爬塔中", "warning");
        }
        if ((await UB()) <= 0) {
          return void TQ("体力不足", "warning");
        }
        TR.towerClimbing = true;
        UD = false;
        const If = document.getElementById("qa-tower-loop-btn");
        const IK = document.getElementById("qa-tower-stop-btn");
        If && (If.textContent = "爬塔中...", If.disabled = true);
        IK && (IK.style.display = "inline-block");
        Uv = setTimeout(() => {
          {
            UD = true;
            TR.towerClimbing = false;
            TQ("批量爬塔已超时自动停止", "info");
            UM();
          }
        }, 60000);
        let IW = 0;
        try {
          for (let IC = 0; IC < 100 && !UD; IC++) {
            if (Z3(), (await UB()) <= 0) {
              Z4("体力耗尽");
              break;
            }
            Z4("第 " + (IW + 1) + " 次爬塔中...");
            const Iy = await Rz("fight_starttower", {}, "爬塔-开始战斗");
            IW++;
            await R4(2000);
            await Uz(Iy);
          }
          TQ("已自动爬塔" + IW + "次，体力已耗尽或达到上限", "success");
        } catch (IY) {
          TQ("批量爬塔失败: " + (IY.message || "未知错误"), "error");
        }
        Uv && (clearTimeout(Uv), Uv = null);
        TR.towerClimbing = false;
        UM();
        Z4("--");
        Z3();
      })();
    },
    "tower-stop": async function () {
      {
        UD = true;
        Uv && (clearTimeout(Uv), Uv = null);
        TR.towerClimbing = false;
        UM();
        Z4("已停止");
        TQ("已手动停止爬塔", "info");
      }
    },
    "arena-refresh": async function () {
      await UU();
    },
    "arena-auto": async function () {
      await (async () => {
        {
          const IK = document.getElementById("qa-arena-times");
          const IW = document.getElementById("qa-arena-start-btn");
          const IC = document.getElementById("qa-arena-stop-btn");
          const Iy = document.getElementById("qa-arena-status");
          const IY = document.getElementById("qa-arena-ticket");
          if (!window.ROLE) {
            return void TQ("数据未就绪，请稍后重试", "warning");
          }
          const Im = parseInt(IK?.["value"], 10) || 1;
          const IE = UZ();
          if (IE < Im) {
            return void TQ("门票不足，需要" + Im + "张，当前" + IE + "张", "warning");
          }
          const IX = new Date().getHours();
          if (IX < 8 || IX > 22) {
            return void TQ("竞技场开放时间为8:00-22:00", "warning");
          }
          US = true;
          IW && (IW.style.display = "none");
          IC && (IC.style.display = "inline-block");
          IK && (IK.disabled = true);
          TQ("开始竞技场战斗，共" + Im + "次", "info");
          let IG = 0;
          let IA = 0;
          try {
            if (!(await Rf())) {
              return void TQ("无法获取战斗版本", "error");
            }
            await Rz("arena_startarea", {}, "竞技场-开始");
            for (let IQ = 0; IQ < Im; IQ++) {
              if (!US) {
                Iy && (Iy.textContent = "已停止 (完成" + IQ + "/" + Im + "，胜" + IG + "负" + IA + ")");
                break;
              }
              Iy && (Iy.textContent = "战斗中 (" + (IQ + 1) + "/" + Im + ")...");
              try {
                {
                  const Ik = await Rz("arena_getareatarget", {}, "竞技场-获取目标 (" + (IQ + 1) + "/" + Im + ")");
                  const Ig = UR(Ik);
                  if (!Ig) {
                    Iy && (Iy.textContent = "未找到可挑战目标");
                    break;
                  }
                  const IL = {
                    targetId: Ig
                  };
                  const Id = await Rz("fight_startareaarena", IL, "竞技场-战斗 (" + (IQ + 1) + "/" + Im + ")");
                  if (R1("arena", "竞技场战斗", Id), Id?.["battleData"]?.["result"]) {
                    const c1 = Id.battleData.result.sponsor;
                    const c2 = Id.battleData.result.accept;
                    (c1?.["teamInfo"]?.["filter"](c3 => c3.hp > 0)["length"] || 0) > (c2?.["teamInfo"]?.["filter"](c3 => c3.hp > 0)["length"] || 0) ? IG++ : IA++;
                  }
                  const c0 = UZ() - (IQ + 1);
                  IY && (IY.textContent = Math.max(0, c0));
                }
              } catch (c3) {
                IA++;
              }
              IQ < Im - 1 && US && (await new Promise(c4 => setTimeout(c4, 350)));
            }
            await UU();
            try {
              const c4 = window.ROLE?.["dailyTask"]?.["complete"] || {};
              const c5 = 9;
              const c6 = RM(c4, 13);
              const c7 = {
                taskId: c5
              };
              undefined !== c6 && -1 !== c6 && (await Rz("task_claimdailypoint", c7, "竞技场-领取任务积分"), TQ("竞技场任务积分已领取", "success"));
            } catch (c8) {}
            US && (Iy && (Iy.textContent = "战斗完成 (胜" + IG + "负" + IA + ")"), TQ("竞技场战斗完成，胜" + IG + "负" + IA, "success"));
          } catch (c9) {
            Iy && (Iy.textContent = "战斗出错: " + c9.message);
            TQ("战斗出错: " + c9.message, "error");
          } finally {
            US = false;
            IW && (IW.style.display = "inline-block");
            IC && (IC.style.display = "none");
            IK && (IK.disabled = false);
          }
        }
      })();
    },
    "arena-stop": async function () {
      US = false;
      TQ("已停止竞技场战斗", "info");
    },
    "quench-refresh": async function () {
      await Ry();
    },
    "verify-password": async function () {
      await (async () => {
        {
          const If = document.getElementById("qa-second-password");
          const IK = document.getElementById("qa-password-status");
          const IW = document.getElementById("qa-verify-password");
          const IC = If?.["value"]?.["trim"]();
          if (!IC) {
            TQ("请输入二级密码", "warning");
            return false;
          }
          TR.secondPassword = IC;
          try {
            IW && (IW.disabled = true);
            const Iy = {
              password: IC,
              passwordType: 1
            };
            const IY = await Rz("role_commitpassword", Iy, "淬炼-密码验证");
            const Im = IY?.["code"] ?? IY?.["body"]?.["code"];
            const IE = IY?.["body"]?.["role"]?.["statistics"] || IY?.["role"]?.["statistics"] || {};
            const IX = IE["que:wh:tm"];
            return IE["que:p:err"] ? (TQ("密码输入错误", "error"), If && (If.value = ""), TR.secondPassword = "", false) : IX || 0 === Im || undefined === Im ? (TR.isPasswordValidated = true, If && (If.disabled = true), IW && (IW.style.display = "none"), IK && (IK.style.display = "inline"), TQ("密码验证成功", "success"), true) : 7500140 === Im ? (TQ("请先输入密码", "warning"), false) : 7500100 === Im ? (TQ("密码输入错误", "error"), If && (If.value = ""), TR.secondPassword = "", false) : (TQ("验证失败: " + (IY?.["message"] || "未知错误"), "error"), false);
          } catch (IG) {
            const IA = IG?.["message"] || String(IG);
            IA.includes("7500140") ? TQ("请先输入密码", "warning") : IA.includes("7500100") ? (TQ("密码输入错误", "error"), If && (If.value = ""), TR.secondPassword = "") : TQ("验证失败: " + IA, "error");
            return false;
          } finally {
            IW && (IW.disabled = false);
          }
        }
      })();
    },
    "quench-once": async function () {
      {
        await NJ();
      }
    },
    "quench-continuous": async function () {
      (() => {
        if (TR.continuousQuenching) {
          return;
        }
        if (TR.autoQuenching) {
          return void TQ("请先停止自动淬炼", "warning");
        }
        TR.continuousQuenching = true;
        document.getElementById("qa-quench-continuous").style.display = "none";
        document.getElementById("qa-quench-stop").style.display = "inline-block";
        document.getElementById("qa-quench-once").disabled = true;
        const If = document.getElementById("qa-auto-start");
        If && (If.disabled = true);
        TQ("开始连续淬炼", "info");
        const IK = async () => {
          if (TR.continuousQuenching) {
            try {
              const IC = await NJ();
              if (IC && (await (async (IY, Im, IE) => {
                try {
                  {
                    const IG = await (async () => (NN(), await Uj(Uq, {
                      checkColorInQuenches: Nu,
                      toString: IA => String(IA)
                    })))();
                    return await IG(IY, Im, IE);
                  }
                } catch (IQ) {
                  {
                    console.warn("[VM] 橙色检测回退到 JS:", IQ.message);
                    return Np(IY, Im, IE);
                  }
                }
              })(IC, TR.selectedHeroId, TR.selectedPart))) {
                Nh();
                return void TQ("已出橙色或以上属性，停止淬炼", "success");
              }
              const Iy = Math.floor(150 * Math.random()) + 350;
              await new Promise(IY => setTimeout(IY, Iy));
              TR.continuousQuenching && (TR.continuousTimer = setTimeout(IK, 0));
            } catch (IY) {
              Nh();
            }
          }
        };
        IK();
      })();
    },
    "quench-stop": async function () {
      {
        Nh();
      }
    },
    "quench-reset": async function () {
      TR.quenchCount = 0;
      const Ib = document.getElementById("qa-quench-count");
      Ib && (Ib.textContent = "0");
    },
    "auto-start": async function () {
      NO();
    },
    "auto-stop": async function () {
      Nj();
    },
    "quench-times-start": async function () {
      (() => {
        {
          if (TR.continuousQuenching || TR.autoQuenching) {
            return void TQ("请先停止其他淬炼任务", "warning");
          }
          const If = document.getElementById("qa-quench-times");
          let IK = parseInt(If?.["value"], 10);
          (!Number.isFinite(IK) || IK < 10) && (IK = 10);
          IK > 10000 && (IK = 10000);
          If.value = IK;
          TR.timesQuenching = true;
          TR.timesTarget = IK;
          TR.timesCount = 0;
          document.getElementById("qa-times-start").style.display = "none";
          document.getElementById("qa-times-stop").style.display = "inline-block";
          document.getElementById("qa-quench-once").disabled = true;
          document.getElementById("qa-quench-continuous").disabled = true;
          const IW = document.getElementById("qa-auto-start");
          IW && (IW.disabled = true);
          If.disabled = true;
          const IC = document.getElementById("qa-times-progress");
          IC && (IC.textContent = "0 / " + IK);
          TQ("开始洗练 " + IK + " 次", "info");
          const Iy = async () => {
            {
              if (TR.timesQuenching) {
                try {
                  if (await NJ(), TR.timesCount++, IC && (IC.textContent = TR.timesCount + " / " + TR.timesTarget), TR.timesCount >= TR.timesTarget) {
                    Nq();
                    return void TQ("已完成 " + TR.timesTarget + " 次洗练", "success");
                  }
                  const Im = Math.floor(150 * Math.random()) + 350;
                  await new Promise(IE => setTimeout(IE, Im));
                  TR.timesQuenching && (TR.timesTimer = setTimeout(Iy, 0));
                } catch (IE) {
                  Nq();
                }
              }
            }
          };
          Iy();
        }
      })();
    },
    "quench-times-stop": async function () {
      Nq();
    },
    "pvp-query": async function () {
      await (async () => {
        {
          const IK = document.getElementById("qa-pvp-target");
          const IW = IK?.["value"]?.["trim"]();
          if (!IW) {
            TQ("请输入目标ID", "warning");
            return null;
          }
          const IC = document.getElementById("qa-pvp-status");
          IC && (IC.textContent = "正在查询双方信息...");
          try {
            {
              const Im = TR.roleId || window.ROLE?.["id"] || window.ROLE?.["roleId"];
              const IE = {
                bottleType: 0,
                includeBottleTeam: false,
                isSearch: false
              };
              const [IX, IG, IA, IQ] = await Promise.all([Im ? Rz("rank_getroleinfo", {
                ...IE,
                roleId: Im
              }) : Promise.resolve(null), Rz("rank_getroleinfo", {
                ...IE,
                roleId: IW
              }), Im ? Rz("role_gettargetteam", {
                cCMonsterId: 0,
                targetId: parseInt(Im),
                teamType: 17
              }) : Promise.resolve(null), Rz("role_gettargetteam", {
                cCMonsterId: 0,
                targetId: parseInt(IW),
                teamType: 17
              })]);
              if (R1("pvp", "查询对手信息", IG), !IG.roleInfo && !IG.legionInfo) {
                TQ("未查询到对手信息", "warning");
                IC && (IC.textContent = "未查询到对手信息");
                return null;
              }
              if (IX?.["roleInfo"]) {
                const c0 = NL(IX.roleInfo);
                const c1 = IA?.["teamInfo"] || IA?.["body"]?.["teamInfo"];
                Nd(c0.heroList, c1);
                TR.myHeroList = c0.heroList;
                TR.myLordWeaponId = IX.roleInfo?.["lordWeaponId"] || 0;
                TR.myRoleInfo = IX.roleInfo;
              }
              IX?.["legionInfo"] && (TR.myLegionName = IX.legionInfo.name || "无俱乐部", TR.myLegionMaxPower = Ng(IX.legionInfo.statistics?.["max:power"]), TR.myLegionRed = IX.legionInfo.statistics?.["battle:red:quench"] || 0);
              const Ix = NL(IG.roleInfo);
              const Ik = IG.roleInfo?.["lordWeaponId"] || 0;
              const Ig = Ik > 0 ? NW[Ik]?.["name"] || "未知玩具" : "-";
              const IL = IQ?.["teamInfo"] || IQ?.["body"]?.["teamInfo"];
              Nd(Ix.heroList, IL);
              const Id = {
                roleId: IW,
                name: IG.roleInfo?.["name"] || "未知",
                headImg: IG.roleInfo?.["headImg"] || "",
                serverName: IG.roleInfo?.["serverName"] || "未知区服",
                power: Ng(IG.roleInfo?.["power"]),
                red: Ix.redCount,
                hole: Ix.holeCount,
                heroList: Ix.heroList,
                legionName: IG.legionInfo?.["name"] || "无俱乐部",
                legionMaxPower: Ng(IG.legionInfo?.["statistics"]?.["max:power"]),
                legionRed: IG.legionInfo?.["statistics"]?.["battle:red:quench"] || 0,
                legionMaxRed: IG.legionInfo?.["statistics"]?.["red:quench"] || 0,
                lordWeaponId: Ik,
                lordWeaponName: Ig
              };
              TR.pvpTargetData = Id;
              (c2 => {
                {
                  const c4 = document.getElementById("qa-pvp-target-info");
                  c4 && (c4.style.display = "none");
                  const c6 = TR.myHeroList || TR.teamHeroes || [];
                  const c7 = TR.myLordWeaponId || TR.lordWeaponId || 0;
                  const c8 = {
                    name: window.ROLE?.["name"] || TR.roleName || "我方",
                    headImg: window.ROLE?.["headImg"] || "",
                    legion: TR.myLegionName || "无俱乐部",
                    legionMaxPower: TR.myLegionMaxPower || "",
                    legionRed: TR.myLegionRed || 0
                  };
                  const c9 = {
                    name: c2.name,
                    headImg: c2.headImg,
                    legion: c2.legionName,
                    legionMaxPower: c2.legionMaxPower,
                    legionRed: c2.legionRed
                  };
                  const cP = {
                    heroes: c6,
                    weaponId: c7,
                    playerInfo: c8
                  };
                  const cD = {
                    heroes: c2.heroList || [],
                    weaponId: c2.lordWeaponId || 0,
                    playerInfo: c9
                  };
                  u4(cP, cD);
                }
              })(Id);
              IC && (IC.textContent = "查询完成");
              return Id;
            }
          } catch (c2) {
            IC && (IC.textContent = "查询失败");
            return null;
          }
        }
      })();
    },
    "pvp-start": async function () {
      await (async () => {
        {
          const IK = document.getElementById("qa-pvp-target");
          const IW = document.getElementById("qa-pvp-count");
          const IC = IK?.["value"]?.["trim"]();
          const Iy = parseInt(IW?.["value"], 10) || 1;
          if (!IC) {
            return void TQ("请输入目标ID", "warning");
          }
          const IY = document.getElementById("qa-pvp-status");
          document.getElementById("qa-pvp-result");
          document.getElementById("qa-pvp-battles");
          IY && (IY.textContent = "正在切磋中 (0/" + Iy + ")...");
          TQ("开始切磋，共" + Iy + "次", "info");
          TR.pvpRunning = true;
          try {
            if (await Rf(), !TR.battleVersion) {
              IY && (IY.textContent = "获取战斗版本失败");
              TQ("获取战斗版本失败", "error");
              return void (TR.pvpRunning = false);
            }
            let Im = 0;
            let IE = 0;
            let IX = 0;
            let IG = 0;
            const IA = [];
            const IQ = [];
            const Ix = [];
            const Ik = TR.myHeroList || TR.teamHeroes || [];
            const Ig = TR.myLordWeaponId || TR.lordWeaponId || 0;
            const IL = TR.pvpTargetData;
            if (Ik.length > 0 || IL) {
              const c2 = {
                name: window.ROLE?.["name"] || TR.roleName || "我方",
                headImg: window.ROLE?.["headImg"] || "",
                legion: TR.myLegionName || "无俱乐部",
                legionMaxPower: TR.myLegionMaxPower || "",
                legionRed: TR.myLegionRed || 0
              };
              const c3 = {
                name: IL?.["name"] || "对方",
                headImg: IL?.["headImg"] || "",
                legion: IL?.["legionName"] || "无俱乐部",
                legionMaxPower: IL?.["legionMaxPower"] || "",
                legionRed: IL?.["legionRed"] || 0
              };
              const c4 = {
                heroes: Ik,
                weaponId: Ig,
                playerInfo: c2
              };
              const c5 = {
                heroes: IL?.["heroList"] || [],
                weaponId: IL?.["lordWeaponId"] || 0,
                playerInfo: c3
              };
              u4(c4, c5);
            }
            for (let c6 = 0; c6 < Iy; c6++) {
              {
                if (!TR.pvpRunning) {
                  TQ("切磋已停止", "info");
                  break;
                }
                IY && (IY.textContent = "正在切磋中 (" + (c6 + 1) + "/" + Iy + ")...");
                TQ("正在切磋 " + (c6 + 1) + "/" + Iy, "info");
                const c7 = {
                  targetId: IC
                };
                const c8 = await Rz("fight_startpvp", c7);
                if (!c8.battleData) {
                  TQ("切磋失败，无法获取战斗数据", "error");
                  break;
                }
                0 === c6 && c8.battleData && (c8.battleData.leftTeam?.["team"] && Ik.length > 0 && Object.values(c8.battleData.leftTeam.team).forEach((cM, cS) => {
                  Ik[cS] && cM && (Ik[cS].attack = cM.attack || 0, Ik[cS].hp = cM.hp || 0);
                }), c8.battleData.rightTeam?.["team"] && IL?.["heroList"] && Object.values(c8.battleData.rightTeam.team).forEach((cM, cS) => {
                  IL.heroList[cS] && cM && (IL.heroList[cS].attack = cM.attack || 0, IL.heroList[cS].hp = cM.hp || 0);
                }));
                let c9 = 0;
                let cP = 0;
                const cD = c8.battleData.result?.["sponsor"]?.["teamInfo"]?.["length"] || 0;
                const cv = c8.battleData.result?.["accept"]?.["teamInfo"]?.["length"] || 0;
                c8.battleData.result?.["sponsor"]?.["teamInfo"] && c8.battleData.result.sponsor.teamInfo.forEach(cM => {
                  {
                    0 === cM.hp && c9++;
                  }
                });
                c8.battleData.result?.["accept"]?.["teamInfo"] && c8.battleData.result.accept.teamInfo.forEach(cM => {
                  {
                    0 === cM.hp && cP++;
                  }
                });
                c9 > 0 && IE++;
                const cB = c8.battleData.result?.["isWin"] || false;
                const cz = c8.battleData.result?.["round"] || 0;
                cB ? (Im++, cz > 0 && IA.push(cz), 0 === c9 && cP === cv && cv > 0 && IX++) : (cz > 0 && IQ.push(cz), 0 === cP && c9 === cD && cD > 0 && IG++);
                Ix.push({
                  leftName: c8.battleData.leftTeam?.["name"] || "我方",
                  leftHeadImg: c8.battleData.leftTeam?.["headImg"] || "",
                  leftPower: Ng(c8.battleData.leftTeam?.["power"]),
                  rightName: c8.battleData.rightTeam?.["name"] || "对方",
                  rightHeadImg: c8.battleData.rightTeam?.["headImg"] || "",
                  rightPower: Ng(c8.battleData.rightTeam?.["power"]),
                  leftDieHero: c9,
                  rightDieHero: cP,
                  roundCount: cz,
                  isWin: cB
                });
                c6 < Iy - 1 && (await new Promise(cM => setTimeout(cM, 300)));
              }
            }
            const Id = {
              winCount: Im,
              dieHeroGameCount: IE,
              leftFullTeamWins: IX,
              rightFullTeamWins: IG,
              avgWinRounds: IA.length > 0 ? (IA.reduce((cS, cT) => cS + cT, 0) / IA.length).toFixed(1) : "-",
              avgLossRounds: IQ.length > 0 ? (IQ.reduce((cS, cT) => cS + cT, 0) / IQ.length).toFixed(1) : "-",
              total: Ix.length,
              battles: Ix
            };
            TR.pvpResult = Id;
            (cS => {
              const cT = document.getElementById("qa-pvp-result");
              if (!cT) {
                return;
              }
              cT.style.display = "block";
              const cR = document.getElementById("qa-pvp-win-rate");
              if (cR) {
                {
                  const cH = cS.total > 0 ? (cS.winCount / cS.total * 100).toFixed(1) : 0;
                  cR.textContent = cH + "%";
                }
              }
              const cZ = document.getElementById("qa-pvp-die-rate");
              if (cZ) {
                const ch = cS.total > 0 ? (cS.dieHeroGameCount / cS.total * 100).toFixed(1) : 0;
                cZ.textContent = ch + "%";
              }
              const cU = document.getElementById("qa-pvp-total");
              cU && (cU.textContent = cS.total);
              const cN = document.getElementById("qa-pvp-left-full-wins");
              cN && (cN.textContent = cS.leftFullTeamWins || 0);
              const cu = document.getElementById("qa-pvp-right-full-wins");
              cu && (cu.textContent = cS.rightFullTeamWins || 0);
              const cF = document.getElementById("qa-pvp-avg-win-rounds");
              cF && (cF.textContent = cS.avgWinRounds || "-");
              const cp = document.getElementById("qa-pvp-avg-loss-rounds");
              cp && (cp.textContent = cS.avgLossRounds || "-");
              const cV = document.getElementById("qa-pvp-battles");
              cV && cS.battles && (cV.innerHTML = cS.battles.map((cO, cj) => "\n      <div class=\"pvp-battle-item\" style=\"display:flex;align-items:center;justify-content:space-between;padding:8px;margin-bottom:6px;background:" + (cO.isWin ? "rgba(52,199,89,0.1)" : "rgba(255,59,48,0.1)") + ";border-radius:6px;border-left:3px solid " + (cO.isWin ? "#34c759" : "#ff3b30") + ";\">\n        <div style=\"flex:1;display:flex;align-items:center;gap:8px;min-width:0;\">\n          <div class=\"qa-avatar qa-avatar-24\" title=\"" + cO.leftName + "\">\n            <img class=\"qa-avatar-img\" " + (cO.leftHeadImg ? "src=\"" + cO.leftHeadImg + "\"" : "") + " alt=\"" + cO.leftName + "\" loading=\"lazy\" referrerpolicy=\"no-referrer\">\n            <div class=\"qa-avatar-fallback\">" + NY(cO.leftName) + "</div>\n          </div>\n          <div style=\"flex:1;min-width:0;\">\n            <div style=\"font-size:12px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">" + cO.leftName + "</div>\n            <div style=\"font-size:10px;color:var(--text-secondary);\">战力:" + cO.leftPower + "</div>\n            <div style=\"font-size:10px;color:#ff3b30;\">掉将:" + cO.leftDieHero + "</div>\n          </div>\n        </div>\n        <div style=\"padding:0 10px;\">\n          <span style=\"font-size:12px;font-weight:bold;color:" + (cO.isWin ? "#34c759" : "#ff3b30") + ";\">\n            " + (cO.isWin ? "胜利" : "失败") + "\n          </span>\n        </div>\n        <div style=\"flex:1;display:flex;align-items:center;gap:8px;justify-content:flex-end;min-width:0;\">\n          <div style=\"flex:1;min-width:0;text-align:right;\">\n            <div style=\"font-size:12px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\">" + cO.rightName + "</div>\n            <div style=\"font-size:10px;color:var(--text-secondary);\">战力:" + cO.rightPower + "</div>\n            <div style=\"font-size:10px;color:#ff3b30;\">掉将:" + cO.rightDieHero + "</div>\n          </div>\n          <div class=\"qa-avatar qa-avatar-24\" title=\"" + cO.rightName + "\">\n            <img class=\"qa-avatar-img\" " + (cO.rightHeadImg ? "src=\"" + cO.rightHeadImg + "\"" : "") + " alt=\"" + cO.rightName + "\" loading=\"lazy\" referrerpolicy=\"no-referrer\">\n            <div class=\"qa-avatar-fallback\">" + NY(cO.rightName) + "</div>\n          </div>\n        </div>\n      </div>\n    ").join(""), NE(cV));
            })(Id);
            R1("pvp", "切磋结果", Id);
            IY && (IY.textContent = "切磋完成: " + Im + "胜/" + Ix.length + "场");
            TQ("切磋完成: " + Im + "胜/" + Ix.length + "场", "success");
          } catch (cS) {
            {
              IY && (IY.textContent = "切磋失败");
              TQ("切磋失败: " + cS.message, "error");
            }
          } finally {
            TR.pvpRunning = false;
          }
        }
      })();
    },
    "pvp-stop": async function () {
      TR.pvpRunning = false;
    },
    "top-rank-query": async function () {
      {
        await up();
      }
    },
    "top-rank-export": async function () {
      await uH();
    },
    "top-rank-page-prev": async function () {
      uh("prev");
    },
    "top-rank-page-next": async function () {
      uh("next");
    },
    "club-rank-query": async function () {
      await uO();
    },
    "club-rank-export": async function () {
      {
        await uq();
      }
    },
    "club-rank-page-prev": async function () {
      uw("prev");
    },
    "club-rank-page-next": async function () {
      uw("next");
    },
    "gold-rank-query": async function () {
      {
        await uf();
      }
    },
    "gold-rank-export": async function () {
      await uW();
    },
    "gold-rank-page-prev": async function () {
      {
        uC("prev");
      }
    },
    "gold-rank-page-next": async function () {
      uC("next");
    },
    "gold-rank-group-1": async function () {
      {
        uy("gold1");
      }
    },
    "gold-rank-group-2": async function () {
      uy("gold2");
    },
    "gold-rank-group-3": async function () {
      uy("gold3");
    },
    "gold-rank-group-4": async function () {
      {
        uy("gold4");
      }
    },
    "gold-rank-group-5": async function () {
      {
        uy("gold5");
      }
    },
    "monthly-refresh": async function () {
      await (async () => {
        {
          const If = document.getElementById("qa-monthly-status");
          If && (If.textContent = "刷新中...");
          (await Zx()) && (Zk(), TQ("刷新月度进度成功", "success"));
        }
      })();
    },
    "monthly-fish-topup": async function () {
      {
        await Zg("topup");
      }
    },
    "monthly-fish-complete": async function () {
      {
        await Zg("complete");
      }
    },
    "monthly-arena-topup": async function () {
      await ZL("topup");
    },
    "monthly-arena-complete": async function () {
      await ZL("complete");
    },
    "bosstower-refresh": async function () {
      await (async () => {
        {
          if (!FR()) {
            TR.bossTower = null;
            return void Fp();
          }
          const II = document.getElementById("qa-bosstower-status");
          II && (II.textContent = "刷新中...");
          const If = await Fu();
          Fp();
          If ? FF().length > 0 ? TQ("有待领取的奖励", "info") : TQ("刷新成功", "success") : TQ("未获取到宝库数据", "warning");
        }
      })();
    },
    "bosstower-execute": async function () {
      {
        await (async () => {
          const If = TR.bossTower;
          if (!If) {
            return void TQ("未获取到宝库数据", "warning");
          }
          if ((If.towerId || 1) >= FB && 0 === If.boxCurHp) {
            return void TQ("已通关咸王宝库", "success");
          }
          const IK = FF();
          if (IK.length > 0) {
            return void (await FV(IK));
          }
          const IW = document.getElementById("qa-bosstower-use-paid-drill")?.["checked"];
          const IC = FM();
          if (0 === If.boxCurHp && If.drillCount <= 0 && (!IW || IC <= 0)) {
            return void TQ("钻头不足", "warning");
          }
          TR.bossTowerRunning = true;
          Fp();
          const Iy = IY => {
            {
              for (const IE of Fv) if (IE > IY) {
                return IE;
              }
              return FB;
            }
          };
          try {
            {
              let Im = If.towerId;
              let IE = If.boxCurHp;
              let IX = false;
              for (; Im < FB && !IX;) {
                {
                  if (!FZ(Im)) {
                    const IG = Iy(Im);
                    for (; Im < IG && Im < FB;) {
                      const IA = Im;
                      const IQ = await Rz("bosstower_startboss", {}, "咸王宝库-攻打Boss");
                      const Ix = IQ?.["bossTower"] || IQ?.["body"]?.["bossTower"];
                      const Ik = Ix?.["towerId"] ?? Im;
                      if (Im = Ik, IE = Ix?.["boxCurHp"] ?? 0, TR.bossTower.towerId = Ik, TR.bossTower.boxCurHp = IE, TR.bossTower.drillCount = Ix?.["boxFightCnt"] ?? TR.bossTower.drillCount, TR.bossTower.levelInfoMap = Ix?.["levelInfoMap"] ?? TR.bossTower.levelInfoMap, Ik === IA) {
                        {
                          TQ("Boss战斗失败，战力不足", "warning");
                          IX = true;
                          break;
                        }
                      }
                      Fp();
                      await R4(1500);
                    }
                    if (IX) {
                      break;
                    }
                    if (Fv.includes(Im)) {
                      TQ("已到达第" + Im + "层门", "info");
                    } else {
                      if (Im >= FB) {
                        break;
                      }
                    }
                  }
                  if (FZ(Im)) {
                    let IL = IE > 0 ? IE : 1;
                    let Id = [];
                    let c0 = 0;
                    const c1 = String(Im);
                    for (; IL > 0 && c0 < 50;) {
                      const c4 = TR.bossTower.drillCount ?? 0;
                      const c5 = IW && FM() > 0;
                      if (c4 > 0) {
                        const c6 = await Rz("bosstower_startbox", {}, "咸王宝库-攻打门");
                        c0++;
                        const c7 = c6?.["bossTower"] || c6?.["body"]?.["bossTower"];
                        IL = c7?.["boxCurHp"] ?? 0;
                        TR.bossTower.boxCurHp = IL;
                        TR.bossTower.drillCount = c7?.["boxFightCnt"] ?? TR.bossTower.drillCount;
                        TR.bossTower.levelInfoMap = c7?.["levelInfoMap"] ?? TR.bossTower.levelInfoMap;
                        0 === IL && c7?.["levelInfoMap"]?.[c1]?.["rewardList"] && (Id = c7.levelInfoMap[c1].rewardList);
                      } else {
                        {
                          if (!c5) {
                            {
                              TQ("钻头已用尽", "warning");
                              break;
                            }
                          }
                          {
                            const c9 = {
                              num: 1
                            };
                            const cP = await Rz("bosstower_boom", c9, "咸王宝库-付费钻头");
                            c0++;
                            const cD = cP?.["bossTower"] || cP?.["body"]?.["bossTower"];
                            const cv = cP?.["subHp"] || cP?.["body"]?.["subHp"] || 0;
                            IL = cD?.["boxCurHp"] ?? IL - cv;
                            TR.bossTower.boxCurHp = IL;
                            TR.bossTower.levelInfoMap = cD?.["levelInfoMap"] ?? TR.bossTower.levelInfoMap;
                            0 === IL && cD?.["levelInfoMap"]?.[c1]?.["rewardList"] && (Id = cD.levelInfoMap[c1].rewardList);
                          }
                        }
                      }
                      Fp();
                      await R4(1500);
                    }
                    if (0 === Id.length) {
                      break;
                    }
                    if (await FV(Id), await Fu(), Im = TR.bossTower?.["towerId"] ?? Im, IE = TR.bossTower?.["boxCurHp"] ?? 0, Im >= FB && 0 === IE) {
                      TQ("恭喜！咸王宝库已通关", "success");
                      break;
                    }
                    const c2 = TR.bossTower?.["drillCount"] ?? 0;
                    const c3 = IW ? FM() : 0;
                    if (c2 <= 0 && c3 <= 0) {
                      TQ("钻头已用尽，下次继续", "info");
                      break;
                    }
                    await R4(1000);
                  }
                }
              }
              await Fu();
              Fp();
            }
          } catch (cM) {} finally {
            TR.bossTowerRunning = false;
            Fp();
          }
        })();
      }
    },
    "warguess-refresh": async function () {
      {
        await (async () => {
          const If = document.getElementById("qa-warguess-status");
          const IK = document.getElementById("qa-warguess-refresh-btn");
          if (U0()) {
            {
              IK && (IK.disabled = true);
              If && (If.textContent = "刷新中...");
              try {
                {
                  const IW = {
                    bfId: ""
                  };
                  const IC = await Rz("warguess_getrank", IW, "月度任务-获取竞猜排名");
                  if (TR.warguessRankData = IC, !IC?.["list"] || 0 === IC.list.length) {
                    return;
                  }
                  U1();
                }
              } catch (IY) {} finally {
                IK && (IK.disabled = false);
                U1();
              }
            }
          }
        })();
      }
    },
    "warguess-start": async function () {
      await (async () => {
        {
          const Ib = document.getElementById("qa-warguess-start-btn");
          const II = document.getElementById("qa-warguess-status");
          if (!U0()) {
            return;
          }
          if (!TR.warguessRankData?.["list"]?.[0]) {
            return;
          }
          const If = TR.warguessRankData.list[0];
          if (If?.["id"]) {
            TR.warguessRunning = true;
            Ib && (Ib.disabled = true);
            II && (II.textContent = "竞猜中...");
            try {
              const IK = {
                legionId: If.id,
                guessCoin: 20
              };
              await Rz("warguess_startguess", IK, "月度任务-执行竞猜");
            } catch (IW) {} finally {
              TR.warguessRunning = false;
              Ib && (Ib.disabled = false);
              U1();
            }
          }
        }
      })();
    },
    "warguess-coin": async function () {
      await (async () => {
        const II = document.getElementById("qa-warguess-coin-btn");
        II && (II.disabled = true);
        try {
          await Rz("warguess_getguesscoinreward", {}, "月度任务-领取竞猜币");
        } catch (If) {} finally {
          {
            II && (II.disabled = false);
          }
        }
      })();
    },
    "dream-refresh-team": async function () {
      await Fb();
    },
    "dream-select-team": async function () {
      await FI();
    },
    "dream-refresh-merchant": async function () {
      await FC();
    },
    "dream-select-gold": async function () {
      FX();
    },
    "dream-buy-selected": async function () {
      await FG();
    },
    "dream-buy-all-gold": async function () {
      await FA();
    },
    "schedule-save": async function () {
      (() => {
        const IC = {
          enabled: document.getElementById("qa-schedule-enabled")?.["checked"] || false,
          tasks: {}
        };
        Object.keys(Zu).forEach(Iy => {
          {
            const IY = document.getElementById("qa-schedule-" + Iy + "-enabled")?.["checked"] || false;
            const Im = document.getElementById("qa-schedule-" + Iy + "-time");
            const IE = document.getElementById("qa-schedule-" + Iy + "-interval");
            IC.tasks[Iy] = {
              ...ZF.tasks[Iy],
              enabled: IY
            };
            Im && (IC.tasks[Iy].time = Im.value || ZF.tasks[Iy]?.["time"]);
            IE && (IC.tasks[Iy].interval = parseInt(IE.value) || ZF.tasks[Iy]?.["interval"]);
          }
        });
        Zh(IC);
        ZW();
        IC.enabled && ZK();
        TQ("定时配置已保存", "success");
        Zy();
      })();
      const II = Zb();
      const If = document.getElementById("qa-schedule-legacyGift-targetId");
      const IK = document.getElementById("qa-schedule-legacyGift-count");
      If && (II.targetId = If.value?.["trim"]() || null);
      IK && (II.giftCount = parseInt(IK.value) || 0);
      ZI(II);
    },
    "schedule-clear-logs": async function () {
      (() => {
        try {
          {
            const II = ZJ();
            const If = TV(II);
            localStorage.removeItem(If);
          }
        } catch (IW) {}
        Zq();
        TQ("日志已清空", "success");
      })();
    },
    "schedule-legacyGift-query": async function () {
      {
        const II = document.getElementById("qa-schedule-legacyGift-targetId");
        const If = II?.["value"]?.["trim"]();
        if (If) {
          try {
            {
              const IK = {
                bottleType: 0,
                includeBottleTeam: false,
                isSearch: false,
                roleId: If
              };
              const IW = await Rz("rank_getroleinfo", IK, "查询赠送目标");
              if (!IW.roleInfo) {
                return void TQ("未查询到目标信息", "warning");
              }
              const IC = document.getElementById("qa-schedule-legacyGift-target-info");
              IC && (IC.style.display = "block");
              const Iy = document.getElementById("qa-schedule-legacyGift-avatar");
              Iy && IW.roleInfo.headImg && (Iy.src = IW.roleInfo.headImg, Iy.style.display = "block", Iy.referrerPolicy = "no-referrer", Iy.onerror = () => {
                Iy.style.display = "none";
              });
              const IY = document.getElementById("qa-schedule-legacyGift-name");
              IY && (IY.textContent = IW.roleInfo.name || "未知");
              const Im = document.getElementById("qa-schedule-legacyGift-server");
              Im && (Im.textContent = IW.roleInfo.serverName || "未知区服");
              const IE = document.getElementById("qa-schedule-legacyGift-password-row");
              IE && (IE.style.display = "flex");
              const IX = Zb();
              IX.targetId = If;
              IX.targetName = IW.roleInfo.name;
              ZI(IX);
              TQ("查询成功，请验证二级密码", "success");
            }
          } catch (IA) {
            {
              TQ("查询失败: " + IA.message, "error");
            }
          }
        } else {
          TQ("请输入目标ID", "warning");
        }
      }
    },
    "schedule-legacyGift-verify": async function () {
      const II = document.getElementById("qa-schedule-legacyGift-password");
      const If = II?.["value"]?.["trim"]();
      if (If) {
        try {
          {
            const IW = {
              password: If,
              passwordType: 1
            };
            const IC = await Rz("role_commitpassword", IW, "定时赠送-密码验证");
            const Iy = IC?.["body"]?.["role"]?.["statistics"] || IC?.["role"]?.["statistics"] || {};
            const IY = Iy["que:wh:tm"];
            if (Iy["que:p:err"]) {
              TQ("密码输入错误", "error");
              return void (II && (II.value = ""));
            }
            if (IY) {
              const Im = Zb();
              Im.passwordVerified = true;
              Im.password = If;
              ZI(Im);
              II && (II.disabled = true);
              const IE = document.getElementById("qa-schedule-legacyGift-status");
              IE && (IE.style.display = "inline");
              const IX = document.querySelector("[data-action=\"schedule-legacyGift-verify\"]");
              IX && (IX.style.display = "none");
              const IG = document.getElementById("qa-schedule-legacyGift-reset");
              IG && (IG.style.display = "");
              TQ("密码验证成功，定时赠送已就绪", "success");
            } else {
              TQ("验证失败，请重试", "error");
            }
          }
        } catch (IA) {
          {
            TQ("验证失败: " + IA.message, "error");
          }
        }
      } else {
        TQ("请输入二级密码", "warning");
      }
    },
    "schedule-legacyGift-reset": async function () {
      (() => {
        const II = Zb();
        II.passwordVerified = false;
        II.password = null;
        ZI(II);
        const If = document.getElementById("qa-schedule-legacyGift-password");
        If && (If.disabled = false, If.value = "");
        const IK = document.getElementById("qa-schedule-legacyGift-status");
        IK && (IK.style.display = "none");
        const IW = document.getElementById("qa-schedule-legacyGift-reset");
        IW && (IW.style.display = "none");
        const IC = document.querySelector("[data-action=\"schedule-legacyGift-verify\"]");
        IC && (IC.style.display = "");
        TQ("验证已重置，请重新输入密码", "success");
      })();
    },
    "study-start": async function () {
      await nF();
    },
    "team-refresh": async function () {
      {
        await nj();
      }
    },
    "refresh-role": async function () {
      await Rc();
      TQ("角色信息刷新成功", "success");
    },
    "car-info": async function () {
      await JH();
    },
    "car-smart-send": async function () {
      await Jb();
    },
    "car-claim-all": async function () {
      await Jw();
    },
    "car-single-send": async function (Ib) {
      {
        const II = Ib.getAttribute("data-car-id");
        await JO(II);
      }
    },
    "car-single-refresh": async function (Ib) {
      const II = Ib.getAttribute("data-car-id");
      await Jh(II);
    },
    "car-single-claim": async function (Ib) {
      {
        const IW = Ib.getAttribute("data-car-id");
        await Jj(IW);
      }
    },
    "car-single-helper": async function (Ib) {
      const II = Ib.getAttribute("data-car-id");
      await JC(II);
    },
    "car-settings": bY,
    "car-one-click-send": async function () {
      await Jx();
    },
    "salt-match-query": async function () {
      const Ib = HT();
      await HD(Ib);
    },
    "salt-match-sort-red": async function () {
      Hv();
    },
    "salt-match-sort-score": async function () {
      HB();
    },
    "salt-match-export": async function () {
      {
        await HS();
      }
    },
    "salt-map-export": async function () {
      await h5();
    },
    "casualties-query": async function () {
      {
        await O5();
      }
    },
    "casualties-export": async function () {
      await (async () => {
        if (h7 && 0 !== h7.length) {
          TQ("正在生成图片...", "info", 1000);
          try {
            {
              const If = h7;
              const IK = "dark" === TR.theme;
              const IW = 24;
              const IC = 70;
              const Iy = 36;
              const IY = 24;
              const Im = [50, 180, 70, 70, 60, 60, 60, 70, 60, 60];
              const IE = Im.reduce((c1, c2) => c1 + c2, 0) + 2 * IW;
              const IX = IC + (If.length + 1) * Iy + 2 * IW;
              const IG = IK ? {
                bg: "#1a1a1a",
                headerBg: "#2d2d2d",
                rowBg: "#242424",
                rowAltBg: "#1e1e1e",
                text: "#ffffff",
                textSecondary: "#a0a0a0",
                border: "#3d3d3d",
                highlight: "#007AFF"
              } : {
                bg: "#ffffff",
                headerBg: "#f5f5f5",
                rowBg: "#ffffff",
                rowAltBg: "#fafafa",
                text: "#333333",
                textSecondary: "#666666",
                border: "#e5e5e5",
                highlight: "#007AFF"
              };
              const IA = document.createElement("canvas");
              const IQ = IA.getContext("2d");
              const Ix = 2;
              IA.width = IE * Ix;
              IA.height = IX * Ix;
              IQ.scale(Ix, Ix);
              IQ.fillStyle = IG.bg;
              IQ.fillRect(0, 0, IE, IX);
              IQ.fillStyle = IG.text;
              IQ.font = "bold 18px -apple-system, BlinkMacSystemFont, sans-serif";
              IQ.fillText("俱乐部全局战损统计", IW, IW + 24);
              IQ.fillStyle = IG.textSecondary;
              IQ.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
              IQ.fillText("共 " + If.length + " 个俱乐部 · " + new Date().toLocaleString(), IW, IW + 50);
              const Ik = IC + IW;
              IQ.fillStyle = IG.headerBg;
              IQ.fillRect(IW, Ik, IE - 2 * IW, Iy);
              const Ig = ["排名", "俱乐部", "服务器", "积分", "击杀", "死亡", "KD", "复活丹", "攻城", "成员"];
              IQ.fillStyle = IG.text;
              IQ.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
              let IL = IW;
              Ig.forEach((c1, c2) => {
                IQ.fillText(c1, IL + 10, Ik + 24);
                IL += Im[c2];
              });
              const Id = await Promise.all(If.map(c1 => {
                {
                  c3 = c1.logo;
                  return new Promise((c4, c5) => {
                    if (!c3) {
                      return void c4(null);
                    }
                    const c6 = new Image();
                    c6.crossOrigin = "anonymous";
                    c6.onload = () => c4(c6);
                    c6.onerror = () => c4(null);
                    c6.src = c3;
                  });
                  var c3;
                }
              }));
              IQ.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
              If.forEach((c1, c2) => {
                {
                  const c4 = Ik + (c2 + 1) * Iy;
                  IQ.fillStyle = c2 % 2 == 0 ? IG.rowBg : IG.rowAltBg;
                  IQ.fillRect(IW, c4, IE - 2 * IW, Iy);
                  IL = IW;
                  IQ.fillStyle = IG.textSecondary;
                  IQ.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
                  IQ.fillText(String(c2 + 1), IL + 10, c4 + 24);
                  IL += Im[0];
                  IQ.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
                  IQ.fillStyle = IG.text;
                  const c5 = Id[c2];
                  let c6 = IL + 10;
                  if (c5) {
                    const c8 = c4 + (Iy - IY) / 2;
                    IQ.save();
                    IQ.beginPath();
                    IQ.arc(c6 + IY / 2, c8 + IY / 2, IY / 2, 0, 2 * Math.PI);
                    IQ.closePath();
                    IQ.clip();
                    IQ.drawImage(c5, c6, c8, IY, IY);
                    IQ.restore();
                    c6 += IY + 6;
                  }
                  const c7 = c1.name.length > 8 ? c1.name.slice(0, 8) + "..." : c1.name;
                  IQ.fillText(c7, c6, c4 + 24);
                  IL += Im[1];
                  IQ.fillStyle = IG.text;
                  IQ.fillText(String(c1.serverId), IL + 10, c4 + 24);
                  IL += Im[2];
                  IQ.fillStyle = IG.highlight;
                  IQ.font = "bold 13px -apple-system, BlinkMacSystemFont, sans-serif";
                  IQ.fillText(String(c1.point), IL + 10, c4 + 24);
                  IL += Im[3];
                  IQ.fillStyle = "#34c759";
                  IQ.font = "13px -apple-system, BlinkMacSystemFont, sans-serif";
                  IQ.fillText(String(c1.totalKills), IL + 10, c4 + 24);
                  IL += Im[4];
                  IQ.fillStyle = "#ff3b30";
                  IQ.fillText(String(c1.totalDeaths), IL + 10, c4 + 24);
                  IL += Im[5];
                  IQ.fillStyle = IG.text;
                  IQ.fillText(c1.kd, IL + 10, c4 + 24);
                  IL += Im[6];
                  IQ.fillStyle = "#ff9500";
                  IQ.fillText(String(c1.totalRevivePills), IL + 10, c4 + 24);
                  IL += Im[7];
                  IQ.fillStyle = IG.text;
                  IQ.fillText(String(c1.totalAttackBuilding), IL + 10, c4 + 24);
                  IL += Im[8];
                  IQ.fillText(String(c1.memberCount), IL + 10, c4 + 24);
                }
              });
              IQ.strokeStyle = IG.border;
              IQ.lineWidth = 1;
              IQ.strokeRect(IW, Ik, IE - 2 * IW, (If.length + 1) * Iy);
              const c0 = "俱乐部战损统计_" + new Date().toISOString().slice(0, 10) + ".png";
              R9(IA, c0);
              TQ("图片已生成", "success");
            }
          } catch (c2) {
            TQ("导出失败: " + c2.message, "error");
          }
        } else {
          TQ("请先查询战损数据", "warning");
        }
      })();
    },
    "battle-records-query": async function () {
      const Ib = Oj();
      await Op(Ib);
    },
    "battle-records-export": async function () {
      await OV();
    },
    "history-records-query": async function () {
      {
        await Oh();
      }
    },
    "history-records-export": async function () {
      await OO();
    },
    "skin-towers-refresh": async function () {
      await Ok();
    },
    "skin-towers-challenge": async function (Ib) {
      const II = parseInt(Ib.getAttribute("data-boss"), 10);
      II >= 1 && II <= 6 && (await Od(II));
    },
    "skin-towers-stop": async function () {
      Og();
    },
    "skin-lottery-refresh": async function () {
      await j0();
    },
    "skin-lottery-start": async function () {
      await j1();
    },
    "skin-lottery-stop": async function () {
      {
        j2();
      }
    },
    "activity-get": async function () {
      await Rb("skin-challenge", "activity_get", {}, "获取活动");
    },
    "activity-start": async function () {
      const Ib = R6("qa-activity-actid", 0);
      const II = {
        actId: Ib
      };
      await Rb("skin-challenge", "activity_startactegame", II, "开始闯关");
    },
    "treasure-info": async function () {
      await Rb("treasure", "bosstower_getinfo", {}, "获取宝库信息");
    },
    "treasure-rank": async function () {
      await Rb("treasure", "bosstower_gethelprank", {}, "获取排行");
    },
    "fish-challenge-start": async function () {
      {
        const II = R6("qa-fish-actid", 0);
        const If = {
          actId: II
        };
        await Rb("fish-challenge", "activity_startactegame", If, "开始闯关");
      }
    },
    "consumption-info": async function () {
      {
        await OB();
      }
    },
    "consumption-open": async function () {
      const Ib = R6("qa-consumption-number", 4);
      await OM(Ib);
    },
    "consumption-get": async function () {
      await Rb("consumption", "activity_get", {}, "获取消耗活动");
    },
    "consumption-claim": async function () {
      await Rb("consumption", "activity_recyclewarorderrewardclaim", {}, "领取消耗奖励");
    },
    "box-open": async function () {
      try {
        {
          const II = R6("qa-box-itemid", 2001);
          const If = Math.floor(R6("qa-box-count", 10));
          if (!Number.isFinite(If) || If < 10) {
            return void TQ("数量无效，最少输入10", "warning");
          }
          if (If % 10 != 0) {
            return void TQ("数量必须是10的倍数", "warning");
          }
          const IK = window.ROLE?.["items"] || {};
          const IW = RZ(IK, II);
          if (IW <= 0) {
            return void TQ("宝箱库存为0", "warning");
          }
          if (If > IW) {
            return void TQ("超出库存数量（最大" + IW + "）", "warning");
          }
          const IC = Math.floor(If / 10);
          const Iy = {
            itemId: II,
            number: 10
          };
          for (let IY = 0; IY < IC; IY++) {
            await Rz("item_openbox", Iy, "工具箱-开宝箱");
            await R4(350);
          }
          await Rz("item_batchclaimboxpointreward", {}, "工具箱-领取宝箱积分奖励");
          Ru(window.ROLE?.["items"], "toolbox");
          TQ("宝箱开启完成", "success");
        }
      } catch (IE) {
        TQ("开箱失败: " + IE.message, "error");
      }
    },
    "box-claim": async function () {
      try {
        await Rz("item_batchclaimboxpointreward", {}, "工具箱-领取宝箱积分奖励");
      } catch (Ib) {}
    },
    "fish-run": async function () {
      {
        try {
          {
            const II = Math.floor(R6("qa-fish-count", 10));
            const If = R6("qa-fish-type", 1);
            const IK = R7("qa-fish-free");
            const IW = 2 === If ? 1012 : 1011;
            if (!Number.isFinite(II) || II < 10) {
              return void TQ("数量无效，最少输入10", "warning");
            }
            if (II % 10 != 0) {
              return void TQ("数量必须是10的倍数", "warning");
            }
            const IC = window.ROLE?.["items"] || {};
            const Iy = RZ(IC, IW);
            if (Iy <= 0) {
              return void TQ("鱼竿库存为0", "warning");
            }
            if (II > Iy) {
              return void TQ("超出库存数量（最大" + Iy + "）", "warning");
            }
            const IY = Math.floor(II / 10);
            const Im = {
              type: If,
              lotteryNumber: 10,
              newFree: IK
            };
            for (let IE = 0; IE < IY; IE++) {
              await Rz("artifact_lottery", Im, "工具箱-钓鱼");
              await R4(350);
            }
            Ru(window.ROLE?.["items"], "toolbox");
            TQ("钓鱼完成", "success");
          }
        } catch (IG) {
          TQ("钓鱼失败: " + IG.message, "error");
        }
      }
    },
    "recruit-run": async function () {
      {
        const Ib = R6("qa-recruit-type", 3);
        const II = R6("qa-recruit-count", 1);
        const If = R7("qa-recruit-club");
        const IK = {
          byClub: If,
          recruitNumber: II,
          recruitType: Ib
        };
        await Rb("recruit-helper", "hero_recruit", IK, "开始招募");
      }
    },
    "star-hero-upgrade": async function () {
      await (async () => {
        {
          if (wT.isRunning) {
            return;
          }
          wT.stopRequested = false;
          wT.total = wS.length;
          wT.done = 0;
          wT.isRunning = true;
          wZ(true);
          wR();
          const If = wU();
          try {
            for (const IK of wS) {
              if (wT.stopRequested) {
                break;
              }
              for (let IW = 1; IW <= 10 && !wT.stopRequested; IW++) {
                try {
                  const IC = {
                    heroId: IK
                  };
                  const Iy = await Rz("hero_heroupgradestar", IC);
                  if (!Iy || 0 !== Iy.code && true !== Iy.success && 0 !== Iy.result) {
                    break;
                  }
                } catch {
                  break;
                }
                await R4(If);
              }
              wT.done++;
              wR();
            }
            TQ(wT.stopRequested ? "已停止" : "英雄升星完成", wT.stopRequested ? "warning" : "success");
          } finally {
            wT.isRunning = false;
            wZ(false);
          }
        }
      })();
    },
    "star-book-upgrade": async function () {
      {
        await (async () => {
          {
            if (wT.isRunning) {
              return;
            }
            wT.stopRequested = false;
            wT.total = wS.length;
            wT.done = 0;
            wT.isRunning = true;
            wZ(true);
            wR();
            const If = wU();
            try {
              for (const IK of wS) {
                {
                  if (wT.stopRequested) {
                    break;
                  }
                  for (let IC = 1; IC <= 10 && !wT.stopRequested; IC++) {
                    try {
                      const Iy = {
                        heroId: IK
                      };
                      const IY = await Rz("book_upgrade", Iy);
                      if (!IY || 0 !== IY.code && true !== IY.success && 0 !== IY.result) {
                        break;
                      }
                    } catch {
                      {
                        break;
                      }
                    }
                    await R4(If);
                  }
                  wT.done++;
                  wR();
                }
              }
              TQ(wT.stopRequested ? "已停止" : "图鉴升星完成", wT.stopRequested ? "warning" : "success");
            } finally {
              wT.isRunning = false;
              wZ(false);
            }
          }
        })();
      }
    },
    "star-claim-rewards": async function () {
      {
        await (async () => {
          if (wT.isRunning) {
            return;
          }
          wT.stopRequested = false;
          wT.total = 10;
          wT.done = 0;
          wT.isRunning = true;
          wZ(true);
          wR();
          const If = wU();
          try {
            {
              for (let IK = 1; IK <= 10 && !wT.stopRequested; IK++) {
                {
                  try {
                    const IW = await Rz("book_claimpointreward", {});
                    const IC = IW && (0 === IW.code || true === IW.success || 0 === IW.result);
                    if (wT.done++, wR(), !IC) {
                      break;
                    }
                  } catch {
                    {
                      wT.done++;
                      wR();
                      break;
                    }
                  }
                  await R4(If);
                }
              }
              TQ(wT.stopRequested ? "已停止" : "领取奖励完成", wT.stopRequested ? "warning" : "success");
            }
          } finally {
            wT.isRunning = false;
            wZ(false);
          }
        })();
      }
    },
    "star-stop": async function () {
      wT.stopRequested = true;
    },
    "hero-upgrade-refresh": async function () {
      await (async () => {
        const II = document.getElementById("qa-hero-upgrade-input");
        const If = document.getElementById("qa-hero-upgrade-select");
        if (II) {
          {
            II.placeholder = "加载中...";
            II.disabled = true;
            try {
              if (!window.ROLE?.["heroes"]) {
                II.placeholder = "数据未就绪";
                return void (II.disabled = false);
              }
              const IW = window.ROLE.heroes;
              const IC = RS(IW);
              wG = IC.map(IY => RM(IW, IY)).filter(IY => IY && IY.level < 6000).sort((IY, Im) => Im.level - IY.level).map(IY => {
                const Im = R3(IY.heroId);
                const IE = {
                  heroId: IY.heroId,
                  name: Im,
                  level: IY.level,
                  label: Im + " (" + IY.level + "/6000)",
                  disabled: false
                };
                return IE;
              });
              0 === wG.length ? II.placeholder = "暂无可升级武将" : II.placeholder = "输入武将名称搜索...";
              II.disabled = false;
              II.value = "";
              If.value = "";
              const Iy = document.getElementById("qa-hero-upgrade-info");
              Iy && (Iy.style.display = "none");
            } catch (IY) {
              II.placeholder = "加载失败";
              II.disabled = false;
            }
          }
        }
      })();
    },
    "hero-upgrade-auto": async function () {
      await (async () => {
        {
          "speed" === wF ? await (async () => {
            {
              const IK = wN;
              const IW = document.getElementById("qa-hero-upgrade-target-speed");
              document.getElementById("qa-hero-upgrade-auto-btn");
              const IC = parseInt(IW?.["value"], 10);
              if (!IK) {
                return void TQ("请先选择武将", "warning");
              }
              if (!window.ROLE?.["heroes"]) {
                return void TQ("数据未就绪", "warning");
              }
              const Iy = RM(window.ROLE.heroes, IK);
              if (!Iy) {
                return void TQ("未找到武将数据", "warning");
              }
              const IY = Iy.speed || 0;
              if (!IC || IC <= IY) {
                return void TQ("目标速度必须大于当前速度", "warning");
              }
              const Im = Iy.level || 0;
              if (Im >= 6000) {
                return void TQ("武将已满级", "warning");
              }
              wu = false;
              wL(true);
              const IE = [50, 10, 5, 1];
              let IX = [];
              let IG = 0;
              let IA = true;
              try {
                let IQ = IY;
                let Ix = Im;
                let Ik = Iy.order || 0;
                for (; IQ < IC && Ix < 6000 && !wu;) {
                  if (wx(Ix, Ik)) {
                    {
                      const c5 = {
                        heroId: IK
                      };
                      const c6 = await Rz("hero_heroupgradeorder", c5, "武将升级-进阶(速度模式)");
                      if (c6?.["errCode"] || c6?.["code"] || c6?.["error"]) {
                        const c7 = c6?.["msg"] || c6?.["errMsg"] || c6?.["error"] || "进阶失败";
                        throw TQ("进阶失败: " + c7, "error"), new Error(c7);
                      }
                      if (!c6?.["role"]?.["heroes"]) {
                        throw TQ("进阶请求异常", "warning"), new Error("进阶请求异常");
                      }
                      {
                        const c8 = c6.role.heroes[String(IK)];
                        if (c8) {
                          const c9 = Ix;
                          const cP = IQ;
                          const cD = c8.level || 0;
                          const cv = c8.order || 0;
                          const cB = c8.speed || 0;
                          cD <= 0 || cD < c9 ? c8.level = c9 : Ix = cD;
                          cB <= 0 || cB < cP ? c8.speed = cP : (IQ = cB, IQ > cP && (IX.push({
                            levels: 0,
                            gain: IQ - cP,
                            isOrder: true
                          }), IX.length > 20 && (IX = IX.slice(-20))));
                          Ik = cv > 0 ? cv : Ik;
                          wg(IK, c8);
                          TQ("进阶成功，速度 " + cP + " → " + c8.speed, "success");
                        }
                      }
                      await new Promise(cz => setTimeout(cz, 500));
                      continue;
                    }
                  }
                  const Id = IC - IQ;
                  let c0 = 1;
                  if (IA) {
                    c0 = 1;
                  } else {
                    if (IG > 0) {
                      for (const cz of IE) {
                        const cM = cz * IG * 1.3;
                        const cS = false !== wQ(Ix, cz, Ik);
                        if (cM <= Id && !cS) {
                          {
                            c0 = cz;
                            break;
                          }
                        }
                      }
                    } else {
                      for (const cR of [10, 5, 1]) if (false === wQ(Ix, cR, Ik)) {
                        if (10 === cR && Id > 500) {
                          {
                            c0 = 10;
                            break;
                          }
                        }
                        if (5 === cR && Id > 100) {
                          c0 = 5;
                          break;
                        }
                        if (1 === cR) {
                          c0 = 1;
                          break;
                        }
                      }
                    }
                  }
                  const c1 = {
                    heroId: IK,
                    upgradeNum: c0
                  };
                  const c2 = IQ;
                  const c3 = await Rz("hero_heroupgradelevel", c1, "武将升级-升级(速度模式)");
                  if (c3?.["errCode"] || c3?.["code"] || c3?.["error"]) {
                    {
                      const cU = c3?.["msg"] || c3?.["errMsg"] || c3?.["error"] || "升级失败";
                      throw TQ("升级失败: " + cU, "error"), new Error(cU);
                    }
                  }
                  if (!c3?.["role"]?.["heroes"]) {
                    throw TQ("升级请求异常", "warning"), new Error("升级请求异常");
                  }
                  {
                    {
                      const cF = c3.role.heroes[String(IK)];
                      if (cF) {
                        Ix = cF.level || 0;
                        Ik = cF.order || 0;
                        const cp = cF.speed || 0;
                        if (IA = false, cp <= 0 || cp < c2) {
                          cF.speed = c2;
                        } else {
                          {
                            const cJ = cp - c2;
                            if (IQ = cp, cJ > 0 && c0 > 0) {
                              {
                                const ch = {
                                  levels: c0,
                                  gain: cJ
                                };
                                IX.push(ch);
                                IX.length > 20 && (IX = IX.slice(-20));
                                const cO = IX.filter(cj => !cj.isOrder && cj.levels > 0);
                                cO.length > 0 && (IG = cO.reduce((cj, cq) => cj + cq.gain / cq.levels, 0) / cO.length);
                              }
                            }
                          }
                        }
                        wg(IK, cF);
                      }
                    }
                  }
                  await new Promise(cj => setTimeout(cj, 500));
                }
                const Ig = IQ >= IC ? "达到目标速度 " + IQ + "，等级 " + Ix : "已满级 " + Ix + "，速度 " + IQ;
                const IL = {
                  success: true,
                  message: Ig
                };
                R1("hero-upgrade", "目标速度升级", IL);
                TQ(wu ? "升级已停止" : Ig, wu ? "info" : "success");
              } catch (cj) {
                TQ("升级失败: " + cj.message, "error");
              } finally {
                wu = false;
                wL(false);
              }
            }
          })() : await (async () => {
            const IK = wN;
            const IW = document.getElementById("qa-hero-upgrade-target");
            document.getElementById("qa-hero-upgrade-auto-btn");
            const IC = parseInt(IW?.["value"], 10);
            if (!IK) {
              return void TQ("请先选择武将", "warning");
            }
            if (!window.ROLE?.["heroes"]) {
              return void TQ("数据未就绪", "warning");
            }
            const Iy = RM(window.ROLE.heroes, IK);
            if (!Iy) {
              return void TQ("未找到武将数据", "warning");
            }
            const IY = Iy.level || 0;
            if (!IC || IC <= IY) {
              TQ("目标等级必须大于当前等级", "warning");
            } else {
              if (IC > 6000) {
                TQ("目标等级不能超过6000", "warning");
              } else {
                {
                  wu = false;
                  wL(true);
                  try {
                    let IE = IY;
                    let IX = Iy.order || 0;
                    const IG = [1, 5, 10, 50];
                    for (; IE < IC && !wu;) {
                      if (wx(IE, IX)) {
                        const IL = {
                          heroId: IK
                        };
                        const Id = await Rz("hero_heroupgradeorder", IL, "武将升级-进阶");
                        if (Id?.["errCode"] || Id?.["code"] || Id?.["error"]) {
                          {
                            const c0 = Id?.["msg"] || Id?.["errMsg"] || Id?.["error"] || "进阶失败";
                            throw TQ("进阶失败: " + c0, "error"), new Error(c0);
                          }
                        }
                        if (!Id?.["role"]?.["heroes"]) {
                          throw TQ("进阶请求异常，请检查进阶石是否充足", "warning"), new Error("进阶请求异常");
                        }
                        {
                          {
                            const c2 = Id.role.heroes[String(IK)];
                            if (c2) {
                              const c3 = IE;
                              if (IE = c2.level || 0, IX = c2.order || 0, wg(IK, c2), TQ("进阶成功，当前" + IE + "级", "success"), IE === c3 && IX === (Iy.order || 0)) {
                                throw TQ("进阶未生效，可能资源不足", "warning"), new Error("进阶未生效");
                              }
                            }
                          }
                        }
                        await new Promise(c5 => setTimeout(c5, 500));
                        continue;
                      }
                      const IQ = IC - IE;
                      let Ix = 1;
                      for (const c5 of IG.reverse()) if (c5 <= IQ && false === wQ(IE, c5, IX)) {
                        Ix = c5;
                        break;
                      }
                      IG.reverse();
                      const Ik = {
                        heroId: IK,
                        upgradeNum: Ix
                      };
                      const Ig = await Rz("hero_heroupgradelevel", Ik, "武将升级-升级");
                      if (Ig?.["errCode"] || Ig?.["code"] || Ig?.["error"]) {
                        {
                          const c7 = Ig?.["msg"] || Ig?.["errMsg"] || Ig?.["error"] || "升级失败";
                          throw TQ("升级失败: " + c7, "error"), new Error(c7);
                        }
                      }
                      if (!Ig?.["role"]?.["heroes"]) {
                        throw TQ("升级请求异常，请检查金币是否充足", "warning"), new Error("升级请求异常");
                      }
                      {
                        const c8 = Ig.role.heroes[String(IK)];
                        if (c8) {
                          const c9 = IE;
                          if (IE = c8.level || 0, IX = c8.order || 0, wg(IK, c8), IE === c9) {
                            throw TQ("升级未生效，可能金币不足", "warning"), new Error("升级未生效");
                          }
                        }
                      }
                      await new Promise(cP => setTimeout(cP, 500));
                    }
                    const IA = {
                      success: true,
                      message: "升级完成，当前" + IE + "级"
                    };
                    R1("hero-upgrade", "自动升级", IA);
                    TQ(wu ? "升级已停止" : "自动升级完成", wu ? "info" : "success");
                  } catch (cP) {
                    TQ("升级失败: " + cP.message, "error");
                  } finally {
                    wu = false;
                    wL(false);
                  }
                }
              }
            }
          })();
        }
      })();
    },
    "hero-upgrade-stop": async function () {
      wu = true;
      TQ("正在停止升级...", "info");
    },
    "hero-upgrade-order": async function () {
      {
        await (async () => {
          const II = wN;
          const If = document.getElementById("qa-hero-upgrade-order-btn");
          if (!II) {
            return;
          }
          if (!window.ROLE?.["heroes"]) {
            return void TQ("数据未就绪", "warning");
          }
          const IK = RM(window.ROLE.heroes, II);
          if (!IK) {
            return;
          }
          const IW = IK.level || 0;
          const IC = IK.order || 0;
          if (wx(IW, IC)) {
            If && (If.disabled = true);
            try {
              const Iy = {
                heroId: II
              };
              const IY = await Rz("hero_heroupgradeorder", Iy, "武将升级-手动进阶");
              if (R1("hero-upgrade", "武将进阶", IY), IY?.["role"]?.["heroes"]) {
                const Im = IY.role.heroes[String(II)];
                Im && wg(II, Im);
              }
            } catch (IE) {} finally {
              {
                const IX = RM(window.ROLE?.["heroes"], II);
                wk(IX);
              }
            }
          }
        })();
      }
    },
    "hero-upgrade-mode": async function (Ib) {
      const II = Ib.dataset.mode;
      II && (If => {
        wF = If;
        const IK = document.getElementById("qa-hero-upgrade-level-row");
        const IW = document.getElementById("qa-hero-upgrade-speed-row");
        const IC = document.getElementById("qa-hero-upgrade-mode-level");
        const Iy = document.getElementById("qa-hero-upgrade-mode-speed");
        const IY = "level" === If;
        IK && (IK.style.display = IY ? "" : "none");
        IW && (IW.style.display = IY ? "none" : "");
        IC && IC.classList.toggle("active", IY);
        Iy && Iy.classList.toggle("active", !IY);
      })(II);
    },
    "check-update": async function () {
      {
        await qB();
      }
    },
    "do-update": async function () {
      {
        jD ? navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(jD).then(() => {
          TQ("更新链接已复制到粘贴板", "success");
        }).catch(() => {
          {
            qz(jD);
          }
        }) : qz(jD) : TQ("未获取到脚本链接", "error");
      }
    },
    "peachtree-query": async function () {
      await (async () => {
        const II = document.getElementById("qa-peachtree-date");
        const If = document.getElementById("qa-peachtree-content");
        if (!II || !If) {
          return;
        }
        const IK = II.value.trim();
        if (IK) {
          {
            If.innerHTML = "<div class=\"helper-text\">查询中...</div>";
            try {
              {
                const Iy = await Rz("legion_getinfo", {});
                const IY = Iy._rawData || Iy;
                if (!IY || !IY.info || !IY.info.id) {
                  throw new Error("获取军团信息失败");
                }
                const Im = IY.info.id;
                const IE = IY.info.name;
                const IX = IK.split(/[/-]/);
                const IG = [IX[0].slice(2) + IX[1] + IX[2], IK.replace(/[/-]/g, ""), IK.replace(/-/g, "/")];
                let IA = null;
                for (const IL of IG) try {
                  {
                    const Id = {
                      date: IL
                    };
                    IA = await Rz("legion_getpayloadkillrecord", Id);
                    const c0 = IA._rawData || IA;
                    if (c0 && c0.recordsMap) {
                      break;
                    }
                  }
                } catch (c2) {
                  {
                    continue;
                  }
                }
                if (!IA) {
                  throw new Error("获取战斗记录失败");
                }
                const IQ = (IA._rawData || IA).recordsMap;
                const Ix = IQ[Im] || IQ[String(Im)] || IQ[Number(Im)];
                if (!Ix) {
                  throw new Error("未找到军团ID " + Im + " 的数据");
                }
                const Ik = Ix.sort((c4, c5) => (c5.killCnt || 0) - (c4.killCnt || 0)).slice(0, 30);
                const Ig = {
                  memberDetails: Ik,
                  legionName: IE,
                  date: IK
                };
                qR = Ig;
                ((c4, c5, c6) => {
                  {
                    const c8 = document.getElementById("qa-peachtree-content");
                    if (!c8) {
                      return;
                    }
                    const c9 = c4.reduce((cB, cz) => cB + (cz.killCnt || 0), 0);
                    const cP = c4.reduce((cB, cz) => cB + (cz.carCnt || 0), 0);
                    const cD = c4.reduce((cB, cz) => cB + (cz.mCKCnt || 0), 0);
                    const cv = c4.reduce((cB, cz) => cB + (cz.reviveCnt || 0), 0);
                    c8.innerHTML = "\n    <div style=\"margin-bottom:10px;font-size:12px;color:var(--qa-text-2);\">\n      " + c5 + " | " + c6 + " | 共" + c4.length + "人\n    </div>\n    <div style=\"overflow-x:auto;\">\n      <table class=\"peachtree-table\" style=\"width:100%;border-collapse:collapse;font-size:11px;\">\n        <tr style=\"background:var(--qa-bg-2);\">\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">序号</th>\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">头像</th>\n          <th style=\"padding:6px 4px;text-align:left;\">角色名称</th>\n          <th style=\"padding:6px 4px;text-align:right;width:50px;\">战力</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">击杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">抢船</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">连杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">复活</th>\n        </tr>\n        " + c4.map((cB, cz) => {
                      const cM = cB.roleInfo || {};
                      return "\n            <tr style=\"border-bottom:1px solid var(--qa-border);\">\n              <td style=\"padding:6px 4px;text-align:center;\">" + (cz + 1) + "</td>\n              <td style=\"padding:6px 4px;text-align:center;\">" + (cM.headImg ? "<img src=\"" + cM.headImg + "\" style=\"width:18px;height:18px;border-radius:3px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "</td>\n              <td style=\"padding:6px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px;\" title=\"" + (cM.name || "") + "\">" + (cM.name || "-") + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#fbbf24;\">" + qu(cM.power) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + (cB.killCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (cB.carCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (cB.mCKCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (cB.reviveCnt || 0) + "</td>\n            </tr>\n          ";
                    }).join("") + "\n        <tr style=\"font-weight:bold;background:var(--qa-bg-2);\">\n          <td colspan=\"4\" style=\"padding:6px 4px;text-align:center;\">总计</td>\n          <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + c9 + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + cP + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + cD + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + cv + "</td>\n        </tr>\n      </table>\n    </div>\n  ";
                  }
                })(Ik, IE, IK);
              }
            } catch (c4) {
              If.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + c4.message + "</div>";
            }
          }
        } else {
          If.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请输入日期</div>";
        }
      })();
    },
    "peachtree-opponent": async function () {
      await qJ();
    },
    "peachtree-export": async function () {
      await (async () => {
        if (!qR?.["memberDetails"]?.["length"]) {
          return void TQ("无数据可导出", "warning");
        }
        const {
          memberDetails: If,
          legionName: IK,
          date: IW
        } = qR;
        const IC = qS();
        const Iy = If.reduce((c1, c2) => c1 + (c2.killCnt || 0), 0);
        const IY = If.reduce((c1, c2) => c1 + (c2.carCnt || 0), 0);
        const Im = If.reduce((c1, c2) => c1 + (c2.mCKCnt || 0), 0);
        const IE = If.reduce((c1, c2) => c1 + (c2.reviveCnt || 0), 0);
        const IX = document.createElement("canvas");
        const IG = IX.getContext("2d");
        const IA = 20;
        const IQ = 32;
        const Ix = [50, 120, 80, 60, 60, 60, 60];
        const Ik = Ix.reduce((c1, c2) => c1 + c2, 0) + 40;
        const Ig = 80 + (If.length + 1) * IQ + 50 + 40;
        IX.width = 2 * Ik;
        IX.height = 2 * Ig;
        IG.scale(2, 2);
        IG.fillStyle = IC.bg;
        IG.fillRect(0, 0, Ik, Ig);
        IG.fillStyle = IC.text;
        IG.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
        IG.fillText("蟠桃园统计 - " + IW, IA, 40);
        IG.fillStyle = IC.textSecondary;
        IG.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
        IG.fillText(IK + " | 共" + If.length + "人", IA, 64);
        IG.fillStyle = IC.headerBg;
        IG.fillRect(IA, 80, Ik - 40, IQ);
        IG.fillStyle = IC.headerText;
        IG.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
        let IL = IA;
        ["序号", "角色名称", "战力", "击杀", "抢船", "连杀", "复活"].forEach((c1, c2) => {
          IG.fillText(c1, IL + 8, 101);
          IL += Ix[c2];
        });
        IG.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
        If.forEach((c1, c2) => {
          {
            const c5 = 80 + (c2 + 1) * IQ;
            const c6 = c1.roleInfo || {};
            c2 % 2 == 1 && (IG.fillStyle = IC.zebraStripe, IG.fillRect(IA, c5, Ik - 40, IQ));
            IG.fillStyle = IC.text;
            let c7 = IA;
            IG.fillText(String(c2 + 1), c7 + 8, c5 + 21);
            c7 += Ix[0];
            IG.fillText((c6.name || "-").substring(0, 8), c7 + 8, c5 + 21);
            c7 += Ix[1];
            IG.fillStyle = IC.gold;
            IG.fillText(qu(c6.power), c7 + 8, c5 + 21);
            c7 += Ix[2];
            IG.fillStyle = IC.red;
            IG.fillText(String(c1.killCnt || 0), c7 + 8, c5 + 21);
            c7 += Ix[3];
            IG.fillStyle = IC.text;
            IG.fillText(String(c1.carCnt || 0), c7 + 8, c5 + 21);
            c7 += Ix[4];
            IG.fillText(String(c1.mCKCnt || 0), c7 + 8, c5 + 21);
            c7 += Ix[5];
            IG.fillText(String(c1.reviveCnt || 0), c7 + 8, c5 + 21);
          }
        });
        const Id = 80 + (If.length + 1) * IQ;
        IG.fillStyle = IC.headerBg;
        IG.fillRect(IA, Id, Ik - 40, IQ);
        IG.fillStyle = IC.text;
        IG.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
        IG.fillText("总计", 28, Id + 21);
        let c0 = IA + Ix[0] + Ix[1] + Ix[2];
        IG.fillStyle = IC.red;
        IG.fillText(String(Iy), c0 + 8, Id + 21);
        c0 += Ix[3];
        IG.fillStyle = IC.text;
        IG.fillText(String(IY), c0 + 8, Id + 21);
        c0 += Ix[4];
        IG.fillText(String(Im), c0 + 8, Id + 21);
        c0 += Ix[5];
        IG.fillText(String(IE), c0 + 8, Id + 21);
        IG.strokeStyle = IC.border;
        IG.lineWidth = 1;
        IG.strokeRect(IA, 80, Ik - 40, (If.length + 2) * IQ);
        IG.fillStyle = IC.footerText;
        IG.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
        IG.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), IA, Ig - IA);
        await R9(IX, "蟠桃园统计_" + IK + "_" + IW.replace(/[/-]/g, "") + ".png", TQ);
      })();
    },
    "peachtree-opponent-export": async function () {
      await qh();
    },
    "peachtree-opponent-records": async function () {
      {
        await (async () => {
          {
            const If = document.getElementById("qa-peachtree-date");
            const IK = document.getElementById("qa-peachtree-opponent-records-content");
            if (!IK) {
              return;
            }
            const IW = If?.["value"]?.["trim"]();
            if (IW) {
              IK.innerHTML = "<div class=\"helper-text\">查询中...</div>";
              try {
                if (qZ?.["id"] || (await qJ()), !qZ?.["id"]) {
                  return void (IK.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请先查询对手俱乐部</div>");
                }
                const IC = qZ.id;
                const Iy = IW.split(/[/-]/);
                const IY = Iy.length >= 3 ? [Iy[0].slice(2) + Iy[1] + Iy[2], IW.replace(/[/-]/g, ""), IW.replace(/-/g, "/")] : [IW.replace(/[/-]/g, ""), IW];
                let Im = null;
                for (const IQ of IY) try {
                  {
                    const Ix = {
                      date: IQ
                    };
                    Im = await Rz("legion_getpayloadkillrecord", Ix);
                    const Ik = Im._rawData || Im;
                    if (Ik && Ik.recordsMap) {
                      break;
                    }
                  }
                } catch (IL) {
                  continue;
                }
                if (!Im) {
                  throw new Error("获取战斗记录失败");
                }
                const IE = (Im._rawData || Im).recordsMap;
                const IX = IE[IC] || IE[String(IC)] || IE[Number(IC)];
                if (!IX || 0 === IX.length) {
                  return void (IK.innerHTML = "<div class=\"helper-text\">未找到对手战绩数据</div>");
                }
                const IG = IX.sort((Id, c0) => (c0.killCnt || 0) - (Id.killCnt || 0)).slice(0, 30);
                const IA = {
                  memberDetails: IG,
                  date: IW
                };
                qZ.battleRecords = IA;
                ((Id, c0, c1) => {
                  {
                    const c3 = document.getElementById("qa-peachtree-opponent-records-content");
                    if (!c3) {
                      return;
                    }
                    const c4 = Id.reduce((c8, c9) => c8 + (c9.killCnt || 0), 0);
                    const c5 = Id.reduce((c8, c9) => c8 + (c9.carCnt || 0), 0);
                    const c6 = Id.reduce((c8, c9) => c8 + (c9.mCKCnt || 0), 0);
                    const c7 = Id.reduce((c8, c9) => c8 + (c9.reviveCnt || 0), 0);
                    c3.innerHTML = "\n    <div style=\"margin-bottom:10px;font-size:12px;color:var(--qa-text-2);\">\n      " + c0 + " | " + c1 + " | 共" + Id.length + "人\n    </div>\n    <div style=\"overflow-x:auto;\">\n      <table style=\"width:100%;border-collapse:collapse;font-size:11px;\">\n        <tr style=\"background:var(--qa-bg-2);\">\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">序号</th>\n          <th style=\"padding:6px 4px;text-align:center;width:30px;\">头像</th>\n          <th style=\"padding:6px 4px;text-align:left;\">角色名称</th>\n          <th style=\"padding:6px 4px;text-align:right;width:50px;\">战力</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">击杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">抢船</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">连杀</th>\n          <th style=\"padding:6px 4px;text-align:right;width:40px;\">复活</th>\n        </tr>\n        " + Id.map((c8, c9) => {
                      {
                        const cD = c8.roleInfo || {};
                        return "\n            <tr style=\"border-bottom:1px solid var(--qa-border);\">\n              <td style=\"padding:6px 4px;text-align:center;\">" + (c9 + 1) + "</td>\n              <td style=\"padding:6px 4px;text-align:center;\">" + (cD.headImg ? "<img src=\"" + cD.headImg + "\" style=\"width:18px;height:18px;border-radius:3px;vertical-align:middle;\" onerror=\"this.style.display='none'\">" : "") + "</td>\n              <td style=\"padding:6px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px;\" title=\"" + (cD.name || "") + "\">" + (cD.name || "-") + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#fbbf24;\">" + qu(cD.power) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + (c8.killCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (c8.carCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (c8.mCKCnt || 0) + "</td>\n              <td style=\"padding:6px 4px;text-align:right;\">" + (c8.reviveCnt || 0) + "</td>\n            </tr>\n          ";
                      }
                    }).join("") + "\n        <tr style=\"font-weight:bold;background:var(--qa-bg-2);\">\n          <td colspan=\"4\" style=\"padding:6px 4px;text-align:center;\">总计</td>\n          <td style=\"padding:6px 4px;text-align:right;color:#f87171;\">" + c4 + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + c5 + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + c6 + "</td>\n          <td style=\"padding:6px 4px;text-align:right;\">" + c7 + "</td>\n        </tr>\n      </table>\n    </div>\n  ";
                  }
                })(IG, qZ.name, IW);
                TQ("对手战绩查询成功", "success");
              } catch (Id) {
                IK.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + Id.message + "</div>";
                TQ("对手战绩查询失败: " + Id.message, "error");
              }
            } else {
              IK.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请先输入日期</div>";
            }
          }
        })();
      }
    },
    "peachtree-opponent-records-export": async function () {
      await (async () => {
        {
          if (!qZ?.["battleRecords"]?.["memberDetails"]?.["length"]) {
            return void TQ("无对手战绩数据可导出", "warning");
          }
          const {
            memberDetails: IK,
            date: IW
          } = qZ.battleRecords;
          const IC = qZ.name;
          const Iy = qS();
          const IY = IK.reduce((c2, c3) => c2 + (c3.killCnt || 0), 0);
          const Im = IK.reduce((c2, c3) => c2 + (c3.carCnt || 0), 0);
          const IE = IK.reduce((c2, c3) => c2 + (c3.mCKCnt || 0), 0);
          const IX = IK.reduce((c2, c3) => c2 + (c3.reviveCnt || 0), 0);
          const IG = document.createElement("canvas");
          const IA = IG.getContext("2d");
          const IQ = 20;
          const Ix = 32;
          const Ik = [50, 120, 80, 60, 60, 60, 60];
          const Ig = Ik.reduce((c2, c3) => c2 + c3, 0) + 40;
          const IL = 80 + (IK.length + 1) * Ix + 50 + 40;
          IG.width = 2 * Ig;
          IG.height = 2 * IL;
          IA.scale(2, 2);
          IA.fillStyle = Iy.bg;
          IA.fillRect(0, 0, Ig, IL);
          IA.fillStyle = Iy.text;
          IA.font = "bold 16px -apple-system, BlinkMacSystemFont, sans-serif";
          IA.fillText("蟠桃园对手战绩 - " + IW, IQ, 40);
          IA.fillStyle = Iy.textSecondary;
          IA.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
          IA.fillText(IC + " | 共" + IK.length + "人", IQ, 64);
          IA.fillStyle = Iy.headerBg;
          IA.fillRect(IQ, 80, Ig - 40, Ix);
          IA.fillStyle = Iy.headerText;
          IA.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
          let Id = IQ;
          ["序号", "角色名称", "战力", "击杀", "抢船", "连杀", "复活"].forEach((c2, c3) => {
            IA.fillText(c2, Id + 8, 101);
            Id += Ik[c3];
          });
          IA.font = "12px -apple-system, BlinkMacSystemFont, sans-serif";
          IK.forEach((c2, c3) => {
            {
              const c5 = 80 + (c3 + 1) * Ix;
              const c6 = c2.roleInfo || {};
              c3 % 2 == 1 && (IA.fillStyle = Iy.zebraStripe, IA.fillRect(IQ, c5, Ig - 40, Ix));
              IA.fillStyle = Iy.text;
              let c7 = IQ;
              IA.fillText(String(c3 + 1), c7 + 8, c5 + 21);
              c7 += Ik[0];
              IA.fillText((c6.name || "-").substring(0, 8), c7 + 8, c5 + 21);
              c7 += Ik[1];
              IA.fillStyle = Iy.gold;
              IA.fillText(qu(c6.power), c7 + 8, c5 + 21);
              c7 += Ik[2];
              IA.fillStyle = Iy.red;
              IA.fillText(String(c2.killCnt || 0), c7 + 8, c5 + 21);
              c7 += Ik[3];
              IA.fillStyle = Iy.text;
              IA.fillText(String(c2.carCnt || 0), c7 + 8, c5 + 21);
              c7 += Ik[4];
              IA.fillText(String(c2.mCKCnt || 0), c7 + 8, c5 + 21);
              c7 += Ik[5];
              IA.fillText(String(c2.reviveCnt || 0), c7 + 8, c5 + 21);
            }
          });
          const c0 = 80 + (IK.length + 1) * Ix;
          IA.fillStyle = Iy.headerBg;
          IA.fillRect(IQ, c0, Ig - 40, Ix);
          IA.fillStyle = Iy.text;
          IA.font = "bold 12px -apple-system, BlinkMacSystemFont, sans-serif";
          IA.fillText("总计", 28, c0 + 21);
          let c1 = IQ + Ik[0] + Ik[1] + Ik[2];
          IA.fillStyle = Iy.red;
          IA.fillText(String(IY), c1 + 8, c0 + 21);
          c1 += Ik[3];
          IA.fillStyle = Iy.text;
          IA.fillText(String(Im), c1 + 8, c0 + 21);
          c1 += Ik[4];
          IA.fillText(String(IE), c1 + 8, c0 + 21);
          c1 += Ik[5];
          IA.fillText(String(IX), c1 + 8, c0 + 21);
          IA.strokeStyle = Iy.border;
          IA.lineWidth = 1;
          IA.strokeRect(IQ, 80, Ig - 40, (IK.length + 2) * Ix);
          IA.fillStyle = Iy.footerText;
          IA.font = "10px -apple-system, BlinkMacSystemFont, sans-serif";
          IA.fillText("导出时间: " + new Date().toLocaleString("zh-CN"), IQ, IL - IQ);
          await R9(IG, "蟠桃园对手战绩_" + IC + "_" + IW.replace(/[/-]/g, "") + ".png", TQ);
        }
      })();
    },
    "peachtree-battle": async function () {
      await (async () => {
        const If = document.getElementById("qa-peachtree-date");
        const IK = document.getElementById("qa-peachtree-content");
        if (!IK) {
          return;
        }
        const IW = If?.["value"]?.["trim"]();
        if (IW) {
          IK.innerHTML = "<div class=\"helper-text\">查询中...</div>";
          try {
            const Iy = await Rz("legion_getinfo", {});
            const IY = Iy._rawData || Iy;
            if (!IY?.["info"]?.["id"]) {
              throw new Error("获取军团信息失败");
            }
            const Im = IY.info.id;
            const IE = IY.info.name || "本俱乐部";
            const IX = IY.info.logo || "";
            const IG = IY.info.power || 0;
            let IA = null;
            let IQ = "对手俱乐部";
            let Ix = "";
            let Ik = 0;
            const Ig = await Rz("legion_getpayloadrecord", {});
            const IL = Ig?.["_rawData"] || Ig;
            const Id = IL?.["enemyLegionMap"] || {};
            const c0 = IW.split(/[/-]/);
            let c1;
            if (c0.length >= 3) {
              const cS = 2 === c0[0].length ? "20" + c0[0] : c0[0];
              c1 = qV(new Date(cS, parseInt(c0[1]) - 1, parseInt(c0[2])));
            } else {
              c1 = qV();
            }
            IC = c1;
            const c2 = String(IC.getFullYear()).slice(2) + String(IC.getMonth() + 1).padStart(2, "0") + String(IC.getDate()).padStart(2, "0");
            if (Id[c2]) {
              IA = Id[c2].id;
              IQ = Id[c2].name || "对手俱乐部";
            } else {
              const cT = Object.keys(Id).sort().reverse();
              cT.join(", ");
              cT.length > 0 && (IA = Id[cT[0]].id, IQ = Id[cT[0]].name || "对手俱乐部");
            }
            if (IA) {
              const cR = {
                legionId: IA
              };
              const cZ = await Rz("legion_getinfobyid", cR);
              const cU = cZ?.["_rawData"] || cZ;
              const cN = cU?.["legionData"] || cU?.["info"] || {};
              IQ = cN.name || IQ;
              Ix = cN.logo || "";
              Ik = cN.power || 0;
            }
            const c3 = c0.length >= 3 ? [c0[0].slice(2) + c0[1] + c0[2], IW.replace(/[/-]/g, "")] : [IW.replace(/[/-]/g, ""), IW];
            let c4 = null;
            for (const cu of c3) try {
              const cF = {
                date: cu
              };
              c4 = await Rz("legion_getpayloadkillrecord", cF);
              const cp = c4._rawData || c4;
              if (cp?.["recordsMap"]) {
                break;
              }
            } catch (cV) {
              {
                continue;
              }
            }
            if (!c4) {
              throw new Error("获取战斗记录失败");
            }
            const c5 = (c4._rawData || c4).recordsMap;
            const c6 = c5[Im] || c5[String(Im)] || [];
            const c7 = IA && (c5[IA] || c5[String(IA)]) || [];
            const c8 = cH => cH.map(ch => ({
              ...ch,
              kd: ch.reviveCnt > 0 ? ((ch.killCnt || 0) / ch.reviveCnt).toFixed(2) : (ch.killCnt || 0).toFixed(2)
            })).sort((ch, cO) => (cO.killCnt || 0) - (ch.killCnt || 0));
            const c9 = c8(c6);
            const cP = c8(c7);
            const cD = c9.reduce((cH, ch) => cH + (ch.killCnt || 0), 0);
            const cv = cP.reduce((cH, ch) => cH + (ch.killCnt || 0), 0);
            const cB = {
              id: Im,
              name: IE,
              logo: IX,
              power: IG,
              members: c9,
              totalKill: cD
            };
            const cz = {
              id: IA,
              name: IQ,
              logo: Ix,
              power: Ik,
              members: cP,
              totalKill: cv
            };
            const cM = {
              date: IW,
              my: cB,
              opponent: cz
            };
            qU = cM;
            qq(qU);
            qN = "battle";
            TQ("战绩查询成功", "success");
          } catch (cH) {
            IK.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">" + cH.message + "</div>";
            TQ("战绩查询失败: " + cH.message, "error");
          }
          var IC;
        } else {
          IK.innerHTML = "<div class=\"helper-text\" style=\"color:#ff3b30;\">请输入日期</div>";
        }
      })();
    },
    "peachtree-battle-export": async function () {
      await qw();
    },
    "peachtree-combined-export": async function () {
      await (async () => {
        "battle" === qN && qU ? await qw() : "opponent" === qN && qZ ? await qh() : qU ? await qw() : qZ ? await qh() : TQ("请先查询战绩或对手信息", "warning");
      })();
    },
    "weird-tower-refresh": async function () {
      await qA();
    },
    "weird-tower-climb": async function () {
      await qk();
    },
    "weird-tower-stop": async function () {
      qg();
    },
    "claim-free-keys": async function () {
      await qL();
    },
    "merge-box-start": async function () {
      {
        await w6();
      }
    },
    "merge-box-stop": async function () {
      w7();
    },
    "weird-tower-rank-query": async function () {
      {
        await w8();
      }
    },
    "weird-tower-rank-export": async function () {
      await wP();
    },
    "coop-connect": bI,
    "coop-queue": bf,
    "coop-leave": bK,
    "show-donation": () => {
      const II = (() => {
        {
          const If = I0();
          const IK = I2();
          const IW = TR.legacyPasswordVerified;
          return "\n    <div style=\"max-width:500px;\">\n      <!-- 搞笑文案图片 -->\n      <div style=\"text-align:center;margin-bottom:20px;\">\n        <img src=\"https://xyzw222.eu.cc/xyzw/assets/%E4%B9%9E%E4%B8%90.jpg\"\n             alt=\"捐赠支持\"\n             style=\"max-width:100%;border-radius:8px;display:block;margin:0 auto;\"\n             onerror=\"this.style.display='none';this.nextElementSibling.style.display='block';\">\n        <div style=\"display:none;color:#999;padding:20px;\">图片加载中...</div>\n      </div>\n\n      <!-- 残卷赠送区域 -->\n      <div id=\"qa-donation-password-row\" style=\"display:" + (IW ? "none" : "block") + ";margin-bottom:20px;padding:15px;background:var(--card-bg,#f9f9f9);border-radius:8px;\">\n        <div style=\"font-weight:600;margin-bottom:10px;\">💝 残卷赠送</div>\n        <div style=\"color:#666;font-size:12px;margin-bottom:10px;\">赠送残卷需要验证二级密码</div>\n        <div style=\"display:flex;gap:10px;align-items:center;\">\n          <input type=\"password\"\n                 id=\"qa-donation-password\"\n                 placeholder=\"请输入二级密码\"\n                 style=\"flex:1;padding:8px;border:1px solid var(--border-color,#ddd);border-radius:4px;\">\n          <button id=\"qa-donation-verify-btn\"\n                  style=\"padding:8px 16px;background:#007AFF;color:#fff;border:none;border-radius:4px;cursor:pointer;\">\n            验证\n          </button>\n        </div>\n        <div id=\"qa-donation-password-status\" style=\"margin-top:8px;font-size:12px;color:#666;\"></div>\n      </div>\n\n      <!-- 残卷赠送输入区域 -->\n      <div id=\"qa-donation-gift-row\" style=\"display:" + (IW ? "block" : "none") + ";margin-bottom:20px;padding:15px;background:var(--card-bg,#f9f9f9);border-radius:8px;\">\n        <div style=\"font-weight:600;margin-bottom:10px;\">💝 残卷赠送</div>\n        <div id=\"qa-donation-current-count\" style=\"color:#666;font-size:12px;margin-bottom:10px;\">\n          当前拥有: " + If + " 个残卷\n        </div>\n        <div style=\"display:flex;gap:10px;align-items:center;\">\n          <input type=\"number\"\n                 id=\"qa-donation-amount\"\n                 placeholder=\"请输入赠送数量\"\n                 min=\"1\"\n                 max=\"" + If + "\"\n                 style=\"flex:1;padding:8px;border:1px solid var(--border-color,#ddd);border-radius:4px;\">\n          <button id=\"qa-donation-submit-btn\"\n                  style=\"padding:8px 16px;background:#FF6B6B;color:#fff;border:none;border-radius:4px;cursor:pointer;\">\n            赠送\n          </button>\n        </div>\n        <div id=\"qa-donation-status\" style=\"margin-top:8px;font-size:12px;color:#666;\"></div>\n      </div>\n\n      <!-- 捐赠排行榜 -->\n      <div style=\"padding:15px;background:var(--card-bg,#f9f9f9);border-radius:8px;margin-bottom:20px;\">\n        <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;\">\n          <div style=\"font-weight:600;\">🏆 捐赠排行榜（前20名）</div>\n          <button id=\"qa-donation-refresh-ranking\"\n                  style=\"padding:4px 10px;background:transparent;border:1px solid var(--border-color,#ddd);border-radius:4px;cursor:pointer;font-size:12px;\">\n            刷新\n          </button>\n        </div>\n        <div id=\"qa-donation-ranking-list\" style=\"max-height:300px;overflow-y:auto;\">\n          <div style=\"text-align:center;color:#999;padding:15px;\">加载中...</div>\n        </div>\n      </div>\n\n      <!-- 功法赠送 -->\n      <div style=\"margin-bottom:20px;padding:15px;background:var(--card-bg,#f9f9f9);border-radius:8px;\">\n        <div style=\"font-weight:600;margin-bottom:10px;\">📚 功法赠送</div>\n        <div style=\"margin-bottom:8px;\">\n          <button id=\"qa-donation-copy-btn\"\n                  style=\"padding:8px 16px;background:#007AFF;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;\">\n            📋 复制作者游戏ID\n          </button>\n        </div>\n        <div style=\"color:#999;font-size:12px;line-height:1.6;\">\n          💡 提示：赠送功法请复制作者ID后，在游戏内手动进行赠送\n        </div>\n      </div>\n\n      <!-- 捐赠统计 -->\n      <div style=\"margin-bottom:20px;padding:15px;background:var(--card-bg,#f9f9f9);border-radius:8px;\">\n        <div style=\"font-weight:600;margin-bottom:10px;\">📊 捐赠统计</div>\n        <div id=\"qa-donation-total\" style=\"color:#666;font-size:14px;\">\n          累计捐赠: " + IK + " 个残卷\n        </div>\n      </div>\n\n      <!-- 赠送记录 -->\n      <div style=\"padding:15px;background:var(--card-bg,#f9f9f9);border-radius:8px;\">\n        <div style=\"font-weight:600;margin-bottom:10px;\">📝 赠送记录（最近5条）</div>\n        <div id=\"qa-donation-records\" style=\"max-height:150px;overflow-y:auto;\">\n          " + I6() + "\n        </div>\n      </div>\n    </div>\n  ";
        }
      })();
      j6("💝 捐赠支持", II, [{
        label: "关闭",
        type: "default",
        onClick: () => j7()
      }]);
      setTimeout(() => {
        const IK = document.getElementById("qa-donation-verify-btn");
        const IW = document.getElementById("qa-donation-password");
        const IC = document.getElementById("qa-donation-password-status");
        IK && IW && (IK.addEventListener("click", () => {
          I4(IW, IC);
        }), IW.addEventListener("keypress", IQ => {
          "Enter" === IQ.key && I4(IW, IC);
        }));
        const Iy = document.getElementById("qa-donation-submit-btn");
        const IY = document.getElementById("qa-donation-amount");
        const Im = document.getElementById("qa-donation-status");
        const IE = document.getElementById("qa-donation-total");
        Iy && IY && (Iy.addEventListener("click", () => {
          I5(IY, Im, IE);
        }), IY.addEventListener("keypress", IQ => {
          "Enter" === IQ.key && I5(IY, Im, IE);
        }));
        const IX = document.getElementById("qa-donation-copy-btn");
        IX && IX.addEventListener("click", I3);
        const IG = async () => {
          {
            (Ix => {
              const Ik = document.getElementById("qa-donation-ranking-list");
              Ik && (Ix && 0 !== Ix.length ? Ik.innerHTML = Ix.map((Ig, IL) => "\n      <div style=\"display:flex;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-color,#eee);gap:10px;\">\n        <div style=\"width:28px;text-align:center;font-weight:600;font-size:" + (IL < 3 ? "16px" : "12px") + ";\">" + (0 === IL ? "🥇" : 1 === IL ? "🥈" : 2 === IL ? "🥉" : "" + Ig.rank) + "</div>\n        <div style=\"width:36px;height:36px;border-radius:50%;" + (Ig.headImg ? "background-image:url(" + Ig.headImg + ");background-size:cover;background-position:center;" : "background:#ddd;") + "flex-shrink:0;\">\n          " + (Ig.headImg ? "" : "<div style=\"width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#999;font-size:12px;\">?</div>") + "\n        </div>\n        <div style=\"flex:1;min-width:0;\">\n          <div style=\"font-weight:500;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">" + (Ig.roleName || "未知") + "</div>\n          <div style=\"font-size:11px;color:#999;\">" + (Ig.serverName || "未知区服") + "</div>\n        </div>\n        <div style=\"font-size:13px;color:#FF6B6B;font-weight:600;flex-shrink:0;\">" + Ig.totalAmount + "</div>\n      </div>\n    ").join("") : Ik.innerHTML = "<div style=\"text-align:center;color:#999;padding:15px;\">暂无捐赠记录</div>");
            })(await (async () => {
              {
                try {
                  const Ik = await fetch(Tq + "/ranking?limit=20");
                  return Ik.ok && (await Ik.json()).ranking || [];
                } catch (Ig) {
                  {
                    return [];
                  }
                }
              }
            })());
          }
        };
        IG();
        const IA = document.getElementById("qa-donation-refresh-ranking");
        IA && IA.addEventListener("click", async () => {
          {
            IA.disabled = true;
            IA.textContent = "刷新中...";
            await IG();
            IA.disabled = false;
            IA.textContent = "刷新";
          }
        });
      }, 100);
    }
  };
  const I8 = async Ib => {
    const If = Ib.getAttribute("data-action");
    if (!If) {
      return;
    }
    if ("log-clear" === If) {
      return void function (IW) {
        const IC = document.getElementById("qa-log-" + IW.getAttribute("data-log-target"));
        IC && (IC.textContent = "");
      }(Ib);
    }
    if ("result-clear" === If) {
      return void function (IW) {
        (Iy => {
          const IY = document.getElementById("qa-result-" + Iy);
          IY && (IY.textContent = "暂无数据");
        })(IW.getAttribute("data-result-target"));
      }(Ib);
    }
    if ("auto-target-add" === If) {
      return void function () {
        const IW = document.getElementById("qa-target-list");
        if (!IW) {
          return;
        }
        const IC = IW.querySelector(".qa-target-row");
        if (!IC) {
          return;
        }
        const Iy = IC.cloneNode(true);
        const IY = Iy.querySelector(".qa-target-attr");
        const Im = Iy.querySelector(".qa-target-value");
        IY && (IY.value = "1");
        Im && (Im.value = "");
        const IE = Iy.querySelector("button[data-action=\"auto-target-remove\"]");
        IE && (IE.disabled = false);
        IW.appendChild(Iy);
        const IX = Array.from(IW.querySelectorAll(".qa-target-row"));
        const IG = IX.length <= 1;
        for (const IA of IX) {
          {
            const Ix = IA.querySelector("button[data-action=\"auto-target-remove\"]");
            Ix && (Ix.disabled = IG);
          }
        }
      }();
    }
    if ("auto-target-remove" === If) {
      return void function (IW) {
        {
          const Iy = document.getElementById("qa-target-list");
          if (!Iy) {
            return;
          }
          const IY = IW.closest(".qa-target-row");
          IY && IY.remove();
          const Im = Array.from(Iy.querySelectorAll(".qa-target-row"));
          if (0 === Im.length) {
            return;
          }
          const IE = Im.length <= 1;
          for (const IX of Im) {
            const IG = IX.querySelector("button[data-action=\"auto-target-remove\"]");
            IG && (IG.disabled = IE);
          }
        }
      }(Ib);
    }
    if ("daily-run" === If) {
      return;
    }
    if ("car-settings" === If) {
      return void bY();
    }
    if (TR.actionLocks[If]) {
      return;
    }
    TR.actionLocks[If] = true;
    const IK = Ib.textContent;
    Ib.disabled = true;
    try {
      await (async (IW, IC) => {
        {
          const Iy = I7[IW];
          return Iy ? Iy(IC) : (console.warn("[Actions] Unknown action: " + IW), null);
        }
      })(If, Ib);
    } catch (IW) {} finally {
      {
        Ib.disabled = false;
        Ib.textContent = IK;
        TR.actionLocks[If] = false;
      }
    }
  };
  class I9 {
    constructor(Ib, II = {}) {
      {
        const IC = {
          weekendOnly: II.weekendOnly || false,
          format: II.format || "yyyy/MM/dd",
          onChange: II.onChange || null,
          ...II
        };
        this.input = Ib;
        this.options = IC;
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
        const II = document.createElement("div");
        II.style.cssText = "display: flex; gap: 4px; align-items: center;";
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        II.appendChild(this.input);
        const If = document.createElement("button");
        if (If.className = "date-picker-btn", If.innerHTML = "📅", If.type = "button", If.onclick = IK => {
          IK.preventDefault();
          IK.stopPropagation();
          this.toggle();
        }, II.appendChild(If), this.wrapper.appendChild(II), this.popup = document.createElement("div"), this.popup.className = "calendar-popup qa-root", document.body.appendChild(this.popup), this.input.value) {
          const IK = this.input.value.split("/");
          3 === IK.length && (this.selectedDate = new Date(IK[0], IK[1] - 1, IK[2]), this.currentDate = new Date(IK[0], IK[1] - 1, 1));
        }
        document.addEventListener("click", IW => {
          this.wrapper.contains(IW.target) || this.popup.contains(IW.target) || !this.isOpen || this.close();
        });
        this.input.addEventListener("click", () => this.toggle());
        this.input.addEventListener("focus", () => this.open());
      }
    }
    updatePosition() {
      const Ib = this.wrapper.getBoundingClientRect();
      const II = this.popup.offsetHeight || 320;
      window.innerHeight - Ib.bottom < II && Ib.top > II ? this.popup.style.top = Ib.top + window.scrollY - II - 4 + "px" : this.popup.style.top = Ib.bottom + window.scrollY + 4 + "px";
      this.popup.style.left = Ib.left + window.scrollX + "px";
    }
    toggle() {
      this.isOpen ? this.close() : this.open();
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
      const II = this.currentDate.getFullYear();
      const If = this.currentDate.getMonth();
      this.popup.innerHTML = "\n      <div class=\"calendar-header\">\n        <button class=\"calendar-nav\" data-action=\"prev-year\">«</button>\n        <button class=\"calendar-nav\" data-action=\"prev-month\">‹</button>\n        <span class=\"calendar-title\">" + II + "年" + (If + 1) + "月</span>\n        <button class=\"calendar-nav\" data-action=\"next-month\">›</button>\n        <button class=\"calendar-nav\" data-action=\"next-year\">»</button>\n      </div>\n      <div class=\"calendar-weekdays\">\n        <span class=\"calendar-weekday weekend\">日</span>\n        <span class=\"calendar-weekday\">一</span>\n        <span class=\"calendar-weekday\">二</span>\n        <span class=\"calendar-weekday\">三</span>\n        <span class=\"calendar-weekday\">四</span>\n        <span class=\"calendar-weekday\">五</span>\n        <span class=\"calendar-weekday weekend\">六</span>\n      </div>\n      <div class=\"calendar-days\">\n        " + this.renderDays() + "\n      </div>\n      <div class=\"calendar-shortcuts\">\n        <button class=\"calendar-shortcut\" data-shortcut=\"last-saturday\">上周六</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"last-sunday\">上周日</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"this-saturday\">本周六</button>\n        <button class=\"calendar-shortcut\" data-shortcut=\"this-sunday\">本周日</button>\n      </div>\n    ";
      this.popup.querySelectorAll(".calendar-nav").forEach(IK => {
        {
          IK.onclick = Iy => {
            {
              Iy.preventDefault();
              Iy.stopPropagation();
              this.handleNav(IK.dataset.action);
            }
          };
        }
      });
      this.popup.querySelectorAll(".calendar-day:not(.empty):not(.disabled)").forEach(IK => {
        {
          IK.onclick = Iy => {
            Iy.preventDefault();
            Iy.stopPropagation();
            this.selectDate(parseInt(IK.dataset.day), parseInt(IK.dataset.month), parseInt(IK.dataset.year));
          };
        }
      });
      this.popup.querySelectorAll(".calendar-shortcut").forEach(IK => {
        {
          IK.onclick = IY => {
            IY.preventDefault();
            IY.stopPropagation();
            this.handleShortcut(IK.dataset.shortcut);
          };
        }
      });
    }
    renderDays() {
      const II = this.currentDate.getFullYear();
      const If = this.currentDate.getMonth();
      const IK = new Date(II, If, 1).getDay();
      const IW = new Date(II, If + 1, 0).getDate();
      const IC = new Date(II, If, 0).getDate();
      const Iy = new Date();
      Iy.setHours(0, 0, 0, 0);
      let IY = "";
      for (let IE = IK - 1; IE >= 0; IE--) {
        {
          const IX = IC - IE;
          const IG = 0 === If ? 11 : If - 1;
          const IA = 0 === If ? II - 1 : II;
          const IQ = new Date(IA, IG, IX);
          const Ix = 0 === IQ.getDay() || 6 === IQ.getDay();
          IY += "<span class=\"calendar-day other-month" + (Ix ? " weekend" : "") + (this.options.weekendOnly && !Ix ? " disabled" : "") + "\"\n                     data-day=\"" + IX + "\" data-month=\"" + IG + "\" data-year=\"" + IA + "\">" + IX + "</span>";
        }
      }
      for (let Ig = 1; Ig <= IW; Ig++) {
        {
          const Id = new Date(II, If, Ig);
          const c0 = Id.getTime() === Iy.getTime();
          const c1 = this.selectedDate && Id.getFullYear() === this.selectedDate.getFullYear() && Id.getMonth() === this.selectedDate.getMonth() && Id.getDate() === this.selectedDate.getDate();
          const c2 = 0 === Id.getDay() || 6 === Id.getDay();
          const c3 = Id > Iy;
          let c4 = "calendar-day";
          c0 && (c4 += " today");
          c1 && (c4 += " selected");
          c2 && (c4 += " weekend");
          (this.options.weekendOnly && !c2 || c3) && (c4 += " disabled");
          IY += "<span class=\"" + c4 + "\" data-day=\"" + Ig + "\" data-month=\"" + If + "\" data-year=\"" + II + "\">" + Ig + "</span>";
        }
      }
      const Im = 7 * Math.ceil((IK + IW) / 7) - IK - IW;
      for (let c5 = 1; c5 <= Im; c5++) {
        IY += "<span class=\"calendar-day other-month disabled\"\n                     data-day=\"" + c5 + "\" data-month=\"" + (11 === If ? 0 : If + 1) + "\" data-year=\"" + (11 === If ? II + 1 : II) + "\">" + c5 + "</span>";
      }
      return IY;
    }
    handleNav(Ib) {
      switch (Ib) {
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
      }
      this.render();
    }
    handleShortcut(Ib) {
      const II = new Date();
      const If = II.getDay();
      let IK;
      switch (Ib) {
        case "last-saturday":
          const IW = 6 === If ? 7 : If + 1;
          IK = new Date(II);
          IK.setDate(II.getDate() - IW);
          break;
        case "last-sunday":
          const IC = 0 === If ? 7 : If;
          IK = new Date(II);
          IK.setDate(II.getDate() - IC);
          break;
        case "this-saturday":
          6 === If ? IK = new Date(II) : (IK = new Date(II), IK.setDate(II.getDate() + (6 - If)));
          IK > II && IK.setDate(IK.getDate() - 7);
          break;
        case "this-sunday":
          0 === If ? IK = new Date(II) : (IK = new Date(II), IK.setDate(II.getDate() - If));
      }
      IK && this.selectDate(IK.getDate(), IK.getMonth(), IK.getFullYear());
    }
    selectDate(Ib, II, If) {
      this.selectedDate = new Date(If, II, Ib);
      this.currentDate = new Date(If, II, 1);
      const IK = If + "/" + String(II + 1).padStart(2, "0") + "/" + String(Ib).padStart(2, "0");
      this.input.value = IK;
      this.options.onChange && this.options.onChange(IK, this.selectedDate);
      this.close();
    }
  }
  const IP = [];
  const ID = (Ib, II, If, IK) => {
    Ib.addEventListener(II, If, IK);
    IP.push({
      target: Ib,
      event: II,
      handler: If,
      options: IK
    });
  };
  "undefined" != typeof window && window.addEventListener("beforeunload", () => {
    {
      for (const {
        target: Ib,
        event: II,
        handler: If,
        options: IK
      } of IP) Ib.removeEventListener(II, If, IK);
      IP.length = 0;
    }
  });
  let Iv = false;
  let IB = false;
  const Iz = (Ib, II) => {
    const If = document.getElementById(Ib);
    If && If.classList.toggle("error", !!II);
  };
  const IM = (Ib, II) => {
    const If = document.getElementById(Ib);
    if (!If) {
      return;
    }
    const IK = String(II || "").trim();
    If.textContent = IK;
    If.style.display = IK ? "block" : "none";
  };
  const IS = Ib => {
    const II = window.ROLE?.["items"] || TR?.["items"] || {};
    return RZ(II, Ib);
  };
  const IT = () => {
    {
      const Ib = document.getElementById("qa-box-itemid");
      const II = document.getElementById("qa-box-count");
      const If = document.getElementById("qa-box-open-btn");
      const IK = Number(Ib?.["value"]) || 2001;
      const IW = IS(IK);
      const IC = Number(II?.["value"]);
      let Iy = "";
      TR?.["items"] ? Number.isFinite(IC) && IC ? IC < 10 ? Iy = "最少输入10" : IC % 10 != 0 ? Iy = "数量必须是10的倍数" : IW <= 0 ? Iy = "当前宝箱库存为0" : IC > IW && (Iy = "超出库存数量（最大" + IW + "）") : Iy = "请输入数量" : Iy = "请先刷新角色信息";
      IM("qa-box-error", Iy);
      Iz("qa-box-count", !!Iy);
      If && (If.disabled = !!Iy);
      const IY = document.getElementById("qa-fish-type");
      const Im = document.getElementById("qa-fish-count");
      const IE = document.getElementById("qa-fish-run-btn");
      const IX = Number(IY?.["value"]) || 1;
      const IG = IS(2 === IX ? 1012 : 1011);
      const IA = Number(Im?.["value"]);
      let IQ = "";
      TR?.["items"] ? Number.isFinite(IA) && IA ? IA < 10 ? IQ = "最少输入10" : IA % 10 != 0 ? IQ = "数量必须是10的倍数" : IG <= 0 ? IQ = "当前鱼竿库存为0" : IA > IG && (IQ = "超出库存数量（最大" + IG + "）") : IQ = "请输入数量" : IQ = "请先刷新角色信息";
      IM("qa-fish-error", IQ);
      Iz("qa-fish-count", !!IQ);
      IE && (IE.disabled = !!IQ);
    }
  };
  const IR = async () => {
    {
      if (document.getElementById("qa-root")) {
        return;
      }
      const II = document.createElement("style");
      II.textContent = "\n  .qa-root {\n    --qa-accent: #2f80ed;\n    --qa-accent-hover: #1a6dd6;\n    --qa-accent-weak: #e8f0fe;\n    --qa-text-1: #1f2937;\n    --qa-text-2: #6b7280;\n    --qa-text-3: #9ca3af;\n    --qa-bg-1: #ffffff;\n    --qa-bg-2: #f7f8fa;\n    --qa-bg-3: #f0f1f3;\n    --qa-border: #e5e7eb;\n    --qa-shadow-1: 0 8px 24px rgba(0,0,0,0.12);\n    --qa-shadow-2: 0 2px 8px rgba(0,0,0,0.08);\n    --qa-radius-lg: 16px;\n    --qa-radius-md: 12px;\n    --qa-radius-sm: 8px;\n    --qa-orb-size: 36px;\n    --qa-panel-width: 92vw;\n    --qa-panel-height: 70vh;\n    --qa-menu-width: 130px;\n    --qa-ease: cubic-bezier(0.22, 1, 0.36, 1);\n    --qa-dur-fast: 160ms;\n    --qa-dur-normal: 260ms;\n    --qa-font-xs: 10px;\n    --qa-font-sm: 11px;\n    --qa-font-md: 13px;\n    --qa-font-lg: 14px;\n    --qa-font-xl: 16px;\n    --qa-spacing-xs: 4px;\n    --qa-spacing-sm: 8px;\n    --qa-spacing-md: 12px;\n    --qa-spacing-lg: 16px;\n    --qa-btn-padding: 8px 14px;\n    --qa-btn-sm-padding: 4px 10px;\n    --qa-input-padding: 8px 12px;\n    --qa-card-padding: 14px;\n    --qa-icon-sm: 16px;\n    --qa-icon-md: 18px;\n    --qa-icon-lg: 22px;\n    font-family: -apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"Segoe UI\", sans-serif;\n    font-size: var(--qa-font-md);\n    color: var(--qa-text-1);\n  }\n  .qa-root[data-theme=\"dark\"] {\n    --qa-accent: #3b8ff6;\n    --qa-accent-hover: #5ca0f8;\n    --qa-accent-weak: #1e3a5f;\n    --qa-text-1: #f9fafb;\n    --qa-text-2: #d1d5db;\n    --qa-text-3: #9ca3af;\n    --qa-bg-1: #1f2937;\n    --qa-bg-2: #111827;\n    --qa-bg-3: #0d1117;\n    --qa-border: #374151;\n    --qa-shadow-1: 0 8px 24px rgba(0,0,0,0.4);\n    --qa-shadow-2: 0 2px 8px rgba(0,0,0,0.3);\n  }\n  .qa-root, .qa-root * { box-sizing: border-box; }\n  .qa-root {\n    position: fixed;\n    inset: 0;\n    pointer-events: none !important;\n    z-index: 99997;\n  }\n  .qa-root .floating-orb,\n  .qa-root .panel-shell,\n  .qa-root .car-reward-popup,\n  .qa-root .car-helper-modal,\n  .qa-root .qa-auth-overlay,\n  .qa-root .qa-autocomplete-dropdown,\n  .calendar-popup.qa-root { pointer-events: auto !important; }\n\n  .qa-root .floating-orb {\n    position: fixed;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: var(--qa-orb-size);\n    height: var(--qa-orb-size);\n    border-radius: 50%;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    box-shadow: var(--qa-shadow-2), 0 0 12px rgba(47, 128, 237, 0.3);\n    cursor: grab;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 99999;\n    transition: box-shadow var(--qa-dur-fast) var(--qa-ease);\n    user-select: none;\n    touch-action: none;\n  }\n  .qa-root .floating-orb:active { cursor: grabbing; }\n  .qa-root .floating-orb.dragging {\n    cursor: grabbing;\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(47, 128, 237, 0.5);\n  }\n  .qa-root .floating-orb:hover {\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(47, 128, 237, 0.5);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb {\n    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);\n    box-shadow: var(--qa-shadow-2), 0 0 12px rgba(0, 0, 0, 0.5);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb:hover {\n    box-shadow: var(--qa-shadow-1), 0 0 20px rgba(50, 50, 50, 0.6);\n  }\n  .qa-root[data-theme=\"dark\"] .floating-orb.dragging {\n    box-shadow: var(--qa-shadow-1), 0 0 24px rgba(50, 50, 50, 0.6);\n  }\n  .qa-root .orb-icon {\n    width: var(--qa-icon-lg);\n    height: var(--qa-icon-lg);\n    fill: #fff;\n    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));\n  }\n\n  .qa-root .panel-shell {\n    position: fixed;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    width: min(100vw - 8%, var(--qa-panel-width));\n    height: 70vh;\n    max-height: 70vh;\n    background: var(--qa-bg-1);\n    border-radius: var(--qa-radius-lg);\n    box-shadow: var(--qa-shadow-1);\n    overflow: hidden;\n    display: none;\n    flex-direction: column;\n    z-index: 99998;\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .panel-shell.show { display: flex; }\n\n  /* 顶部导航布局 */\n  .qa-root .panel-header {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    position: relative;\n    padding: 0 8px;\n  }\n  /* 去除折叠按钮样式 */\n  .qa-root .menu-toggle {\n    display: none !important;\n  }\n\n  /* ===================== 认证状态 ===================== */\n  .qa-root .auth-status {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    font-size: 12px;\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .auth-status.success {\n    background: var(--qa-accent-weak);\n    border-bottom-color: var(--qa-accent);\n  }\n  .qa-root .auth-status.error {\n    background: rgba(255, 59, 48, 0.1);\n    border-bottom-color: #ff3b30;\n  }\n  .qa-root .auth-status-icon {\n    font-size: 14px;\n    width: 20px;\n    text-align: center;\n  }\n  .qa-root .auth-status-text {\n    flex: 1;\n    color: var(--qa-text-2);\n  }\n  .qa-root .auth-status.success .auth-status-text {\n    color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .auth-status.error .auth-status-text {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n  .qa-root .auth-status-actions {\n    display: flex;\n    gap: 6px;\n  }\n  .qa-root .auth-status .btn-small {\n    padding: 4px 8px;\n    font-size: 11px;\n    border-radius: 6px;\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-2);\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-status .btn-small:hover {\n    background: var(--qa-bg-3);\n  }\n  .qa-root .auth-status .btn-danger {\n    border-color: #ff3b30;\n    color: #ff3b30;\n  }\n  .qa-root .auth-status .btn-danger:hover {\n    background: rgba(255, 59, 48, 0.1);\n  }\n\n  /* 简化的认证状态指示器 */\n  .qa-root .auth-status {\n    margin-left: auto;\n    padding: 6px 10px;\n    border-radius: 6px;\n    font-size: 12px;\n    cursor: default;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .qa-root .auth-status .status-dot {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #9ca3af;\n    flex-shrink: 0;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-status .status-text {\n    color: var(--qa-text-2);\n    white-space: nowrap;\n  }\n\n  /* 不同状态的样式 */\n  .qa-root .auth-status.auth-valid .status-dot {\n    background: #18a058;\n    box-shadow: 0 0 6px rgba(24, 160, 88, 0.4);\n  }\n  .qa-root .auth-status.auth-valid .status-text {\n    color: #18a058;\n    font-weight: 500;\n  }\n\n  .qa-root .auth-status.auth-invalid .status-dot {\n    background: #f0a020;\n  }\n  .qa-root .auth-status.auth-invalid .status-text {\n    color: #f0a020;\n  }\n\n  .qa-root .auth-status.auth-frozen .status-dot {\n    background: #ff3b30;\n    box-shadow: 0 0 6px rgba(255, 59, 48, 0.4);\n  }\n  .qa-root .auth-status.auth-frozen .status-text {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n\n  .qa-root .auth-status.auth-unauthenticated .status-dot {\n    background: #9ca3af;\n  }\n  .qa-root .auth-status.auth-unauthenticated .status-text {\n    color: var(--qa-text-3);\n  }\n\n  /* 认证调试窗口 */\n  .qa-root .auth-debug-window {\n    position: fixed;\n    top: 80px;\n    right: 20px;\n    width: 380px;\n    max-height: 70vh;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n    box-shadow: var(--qa-shadow-1);\n    z-index: 99999;\n    display: none;\n    overflow: hidden;\n    font-size: 12px;\n  }\n  .qa-root .auth-debug-window .debug-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 16px;\n    background: var(--qa-bg-2);\n    border-bottom: 1px solid var(--qa-border);\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-title {\n    color: var(--qa-text-1);\n    font-size: 13px;\n  }\n  .qa-root .auth-debug-window .debug-close {\n    background: none;\n    border: none;\n    color: var(--qa-text-2);\n    font-size: 20px;\n    cursor: pointer;\n    padding: 0;\n    width: 24px;\n    height: 24px;\n    line-height: 24px;\n    text-align: center;\n    border-radius: 4px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .auth-debug-window .debug-close:hover {\n    background: var(--qa-bg-3);\n    color: var(--qa-text-1);\n  }\n  .qa-root .auth-debug-window .debug-content {\n    padding: 16px;\n    overflow-y: auto;\n    max-height: calc(70vh - 50px);\n  }\n  .qa-root .auth-debug-window .debug-section {\n    margin-bottom: 16px;\n  }\n  .qa-root .auth-debug-window .debug-section:last-child {\n    margin-bottom: 0;\n  }\n  .qa-root .auth-debug-window .debug-section-title {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n    margin-bottom: 8px;\n    padding-bottom: 4px;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .auth-debug-window .debug-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 6px 0;\n    gap: 12px;\n  }\n  .qa-root .auth-debug-window .debug-label {\n    color: var(--qa-text-2);\n    font-size: 12px;\n    flex-shrink: 0;\n  }\n  .qa-root .auth-debug-window .debug-value {\n    color: var(--qa-text-1);\n    font-size: 12px;\n    text-align: right;\n    word-break: break-all;\n    max-width: 60%;\n  }\n  .qa-root .auth-debug-window .debug-value.monospace {\n    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;\n    font-size: 11px;\n  }\n  .qa-root .auth-debug-window .debug-value.status-frozen {\n    color: #ff3b30;\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-value.status-valid {\n    color: #18a058;\n    font-weight: 500;\n  }\n  .qa-root .auth-debug-window .debug-value.status-invalid {\n    color: #f0a020;\n  }\n\n  .qa-root .menu-nav {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    flex: 1;\n    background: var(--qa-bg-2);\n    transition: all var(--qa-dur-normal) var(--qa-ease);\n    /* 隐藏滚动条 */\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    padding: 0 4px;\n    /* 启用原生水平滚动 */\n    touch-action: pan-x;\n    -webkit-overflow-scrolling: touch;\n    cursor: grab;\n  }\n  .qa-root .menu-nav.dragging {\n    cursor: grabbing;\n    user-select: none;\n  }\n  .qa-root .menu-nav::-webkit-scrollbar {\n    display: none !important;\n    height: 0 !important;\n  }\n  .qa-root .menu-nav.collapsed {\n    width: 0 !important;\n    overflow: hidden;\n    border-bottom: none;\n  }\n\n  .qa-root .menu-group {\n    display: flex;\n    align-items: center;\n    padding: 0 2px;\n    flex-shrink: 0;\n    border-right: none;\n  }\n  .qa-root .menu-group-title {\n    display: none;\n  }\n  .qa-root .menu-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 12px 14px;\n    cursor: pointer;\n    color: var(--qa-text-2);\n    font-size: 14px;\n    font-weight: 500;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    flex-shrink: 0;\n    margin: 4px 2px;\n    border-radius: 8px;\n  }\n  .qa-root .menu-item:hover { background: var(--qa-bg-3); color: var(--qa-text-1); }\n  .qa-root .menu-item.active {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-bottom-color: var(--qa-accent);\n    font-weight: 600;\n  }\n  .qa-root .menu-item.dragging {\n    opacity: 0.5;\n    transform: scale(1.05);\n  }\n  .qa-root .menu-icon { font-size: 18px; }\n\n  .qa-root .content-wrapper { flex: 1; display: flex; flex-direction: column; overflow: hidden; }\n  .qa-root .content-area { flex: 1; padding: var(--qa-card-padding); overflow-y: auto; background: var(--qa-bg-1); }\n\n  .qa-root .page-content { display: none; }\n  .qa-root .page-content.active { display: block; }\n\n  .qa-root .card {\n    background: var(--qa-bg-2);\n    border-radius: var(--qa-radius-md);\n    overflow: hidden;\n    margin-bottom: 12px;\n  }\n  .qa-root .card-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--qa-spacing-md) var(--qa-card-padding);\n    border-bottom: 1px solid var(--qa-border);\n    cursor: pointer;\n    user-select: none;\n  }\n  .qa-root .card-header:hover { background: var(--qa-bg-3); }\n  .qa-root .card-title {\n    font-size: var(--qa-font-lg);\n    font-weight: 600;\n    color: var(--qa-text-1);\n    display: flex;\n    align-items: center;\n    gap: var(--qa-spacing-sm);\n    cursor: grab;\n  }\n  .qa-root .card-title:active {\n    cursor: grabbing;\n  }\n  .qa-root .card-title::before {\n    content: '';\n    width: 4px;\n    height: 16px;\n    background: var(--qa-accent);\n    border-radius: 2px;\n  }\n  .qa-root .card-collapse-icon {\n    width: 16px;\n    height: 16px;\n    fill: var(--qa-text-3);\n    transition: transform var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .card.collapsed .card-collapse-icon { transform: rotate(-90deg); }\n  .qa-root .card.collapsed .card-body, .qa-root .card.collapsed .card-footer { display: none; }\n\n  /* 更新日志版本折叠 */\n  .qa-root .changelog-version .card-collapse-icon { transition: transform var(--qa-dur-fast) var(--qa-ease); }\n  .qa-root .changelog-version.collapsed .card-collapse-icon { transform: rotate(-90deg); }\n  .qa-root .changelog-version.collapsed .changelog-content { display: none; }\n\n  .qa-root .card-body { padding: var(--qa-card-padding); }\n  .qa-root .card-footer { padding: var(--qa-spacing-sm) var(--qa-card-padding) var(--qa-card-padding); display: flex; gap: var(--qa-spacing-sm); flex-wrap: wrap; }\n\n  .qa-root .stats-row {\n    display: flex;\n    gap: var(--qa-spacing-md);\n    padding: var(--qa-spacing-md) var(--qa-card-padding);\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    margin-bottom: var(--qa-spacing-md);\n  }\n  .qa-root .stat-item { display: flex; align-items: center; gap: 6px; }\n  .qa-root .stat-label { font-size: var(--qa-font-sm); color: var(--qa-text-3); }\n  .qa-root .stat-value { font-size: var(--qa-font-xl); font-weight: 700; color: var(--qa-accent); }\n\n  .qa-root .progress-bar {\n    width: 100%;\n    height: 8px;\n    background: var(--qa-bg-3);\n    border-radius: 999px;\n    overflow: hidden;\n  }\n  .qa-root .progress-fill {\n    height: 100%;\n    background: linear-gradient(90deg, var(--qa-accent), #6366f1);\n    border-radius: 999px;\n  }\n\n  .qa-root .btn {\n    padding: var(--qa-btn-padding);\n    border: none;\n    border-radius: var(--qa-radius-sm);\n    font-size: var(--qa-font-md);\n    font-weight: 500;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    font-family: inherit;\n  }\n  .qa-root .btn:disabled { opacity: 0.5; cursor: not-allowed; }\n  .qa-root .btn-primary { background: var(--qa-accent); color: #fff; }\n  .qa-root .btn-primary:hover:not(:disabled) { background: var(--qa-accent-hover); transform: translateY(-1px); }\n  .qa-root .btn-success { background: #10b981; color: #fff; }\n  .qa-root .btn-success:hover:not(:disabled) { background: #059669; }\n  .qa-root .btn-danger { background: #ef4444; color: #fff; }\n  .qa-root .btn-danger:hover:not(:disabled) { background: #dc2626; }\n  .qa-root .btn-warning { background: #f59e0b; color: #fff; }\n  .qa-root .btn-warning:hover:not(:disabled) { background: #d97706; }\n  .qa-root .btn-secondary { background: var(--qa-bg-3); color: var(--qa-text-2); }\n  .qa-root .btn-secondary:hover:not(:disabled) { background: var(--qa-border); }\n  .qa-root .btn-icon { background: var(--qa-bg-3); color: var(--qa-text-2); display: inline-flex; align-items: center; justify-content: center; }\n  .qa-root .btn-icon:hover:not(:disabled) { background: var(--qa-accent); color: #fff; }\n  .qa-root .btn-icon svg { width: 16px; height: 16px; }\n  .qa-root .btn-small { padding: var(--qa-btn-sm-padding); font-size: var(--qa-font-sm); border-radius: 6px; }\n  .qa-root .btn-sm { padding: var(--qa-btn-sm-padding); font-size: var(--qa-font-sm); border-radius: 6px; }\n  .qa-root .btn.active { background: var(--qa-accent); color: #fff; }\n  .qa-root .btn-row { display: flex; gap: var(--qa-spacing-sm); flex-wrap: wrap; }\n\n  /* 换皮闯关BOSS网格 */\n  .qa-root .skin-towers-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    gap: var(--qa-spacing-sm);\n  }\n  .qa-root .skin-tower-item {\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 8px;\n    text-align: center;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .skin-tower-item.passed { border-color: #22c55e; background: rgba(34,197,94,0.1); }\n  .qa-root .skin-tower-item.fighting { border-color: #eab308; background: rgba(234,179,8,0.1); animation: qa-pulse 1.5s ease-in-out infinite; }\n  .qa-root .skin-tower-item.disabled { opacity: 0.5; }\n  .qa-root .skin-tower-item .tower-name { font-weight: 600; font-size: 12px; color: var(--qa-accent); margin-bottom: 4px; }\n  .qa-root .skin-tower-item .tower-level { font-size: 14px; font-weight: 700; color: var(--qa-text-1); }\n  .qa-root .skin-tower-item .tower-score { font-size: 11px; color: var(--qa-text-3); margin: 4px 0; }\n  .qa-root .skin-tower-item .tower-status { font-size: 11px; margin-bottom: 6px; }\n  @keyframes qa-pulse { 0%,100%{opacity:1} 50%{opacity:0.7} }\n\n  .qa-root .input, .qa-root .select {\n    padding: var(--qa-input-padding);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    background: var(--qa-bg-1);\n    color: var(--qa-text-1);\n    font-size: var(--qa-font-md);\n    outline: none;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    font-family: inherit;\n  }\n  .qa-root .input:focus, .qa-root .select:focus { border-color: var(--qa-accent); box-shadow: 0 0 0 3px var(--qa-accent-weak); }\n\n  .qa-root .form-row { display: flex; align-items: center; gap: var(--qa-spacing-sm); flex-wrap: wrap; margin-bottom: var(--qa-spacing-sm); }\n  .qa-root .form-label { font-size: var(--qa-font-sm); color: var(--qa-text-3); }\n  .qa-root .helper-text { font-size: var(--qa-font-sm); color: var(--qa-text-3); margin-top: var(--qa-spacing-sm); }\n  .qa-root .qa-input-error { font-size: var(--qa-font-sm); color: #ef4444; margin-top: 6px; }\n  .qa-root .input.error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.15); }\n  .qa-root[data-theme=\"dark\"] .input.error { box-shadow: 0 0 0 3px rgba(239,68,68,0.20); }\n\n  .qa-root .qa-target-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .qa-target-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n    padding: 8px 10px;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n  }\n  .qa-root .qa-target-row .qa-target-attr { min-width: 140px; }\n  .qa-root .qa-target-row .qa-target-value { width: 90px; }\n\n  .qa-root .qa-option-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--qa-spacing-sm); }\n  .qa-root .qa-option-item {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    border-radius: var(--qa-radius-md);\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-1);\n    cursor: pointer;\n    user-select: none;\n    transition: transform var(--qa-dur-fast) var(--qa-ease), border-color var(--qa-dur-fast) var(--qa-ease), box-shadow var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-option-item:hover { border-color: var(--qa-accent); transform: translateY(-1px); }\n  .qa-root .qa-option-item.selected { border-color: var(--qa-accent); box-shadow: 0 0 0 3px var(--qa-accent-weak); }\n  .qa-root .qa-option-icon { width: 40px; height: 40px; display: grid; place-items: center; }\n  .qa-root .qa-option-icon svg { width: 40px; height: 40px; display: block; }\n  .qa-root .qa-option-icon .qa-option-img { width: 40px; height: 40px; object-fit: contain; display: block; image-rendering: auto; }\n  .qa-root .qa-option-title { font-weight: 700; color: var(--qa-text-1); }\n  .qa-root .qa-option-sub { font-size: 12px; color: var(--qa-text-3); margin-top: 2px; }\n\n  .qa-root .task-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--qa-spacing-sm); }\n  .qa-root .task-check {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: var(--qa-font-sm);\n    color: var(--qa-text-2);\n    padding: 6px 8px;\n    border-radius: 8px;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .task-check input { accent-color: var(--qa-accent); }\n  .qa-root .task-check.done { background: rgba(16,185,129,0.14); color: #059669; }\n  .qa-root[data-theme=\"dark\"] .task-check.done { background: rgba(16,185,129,0.18); color: #34d399; }\n  .qa-root .task-check .task-status { margin-left: auto; font-size: 11px; color: var(--qa-text-3); }\n  .qa-root .task-check.done .task-status { color: inherit; }\n\n  /* 每日任务执行情况列表样式 */\n  .qa-root .task-list { display: flex; flex-direction: column; gap: 6px; }\n  .qa-root .task-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px 12px;\n    background: var(--qa-bg-3);\n    border-radius: 8px;\n    font-size: 13px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .task-item .task-name { color: var(--qa-text-1); font-weight: 500; }\n  .qa-root .task-item .task-progress { font-size: 12px; color: var(--qa-text-2); font-family: monospace; }\n  .qa-root .task-item.done {\n    background: rgba(16, 185, 129, 0.12);\n  }\n  .qa-root .task-item.done .task-name { color: #059669; }\n  .qa-root .task-item.done .task-progress { color: #059669; }\n  .qa-root[data-theme=\"dark\"] .task-item.done { background: rgba(16, 185, 129, 0.18); }\n  .qa-root[data-theme=\"dark\"] .task-item.done .task-name { color: #34d399; }\n  .qa-root[data-theme=\"dark\"] .task-item.done .task-progress { color: #34d399; }\n\n  .qa-root .qa-log {\n    font-size: 12px;\n    color: var(--qa-text-2);\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    white-space: pre-wrap;\n    min-height: 80px;\n  }\n\n  .qa-root .qa-json {\n    font-size: 12px;\n    color: var(--qa-text-1);\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    white-space: pre-wrap;\n    word-break: break-word;\n    overflow: auto;\n    max-height: 260px;\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n\n  .qa-root .qa-hero-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin-bottom: 12px;\n  }\n  .qa-root .qa-hero-item {\n    padding: 8px 14px;\n    background: var(--qa-bg-1);\n    border: 2px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 500;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    color: var(--qa-text-1);\n  }\n  .qa-root .qa-hero-item:hover {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-hero-item.active {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n  }\n\n  .qa-root .qa-equip-tabs { display: flex; gap: 8px; margin-bottom: 12px; }\n  .qa-root .qa-equip-tab {\n    flex: 1;\n    padding: 12px 10px;\n    background: var(--qa-bg-2);\n    border: 2px solid var(--qa-border);\n    border-radius: var(--qa-radius-md);\n    cursor: pointer;\n    text-align: center;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-equip-tab:hover { border-color: var(--qa-text-3); }\n  .qa-root .qa-equip-tab.active {\n    border-color: var(--qa-accent);\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-equip-tab .tab-name { font-weight: 600; font-size: 13px; color: var(--qa-text-1); }\n  .qa-root .qa-equip-tab .tab-level { font-size: 11px; color: var(--qa-text-3); margin-top: 3px; }\n  .qa-root .qa-equip-tab.active .tab-name { color: var(--qa-accent); }\n\n  .qa-root .qa-slot-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }\n  .qa-root .qa-slot-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 14px;\n    background: var(--qa-bg-1);\n    border-radius: var(--qa-radius-sm);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .qa-slot-item:hover { border-color: var(--qa-accent); }\n  .qa-root .qa-slot-item.locked { border-color: var(--qa-accent); background: var(--qa-accent-weak); }\n  .qa-root .qa-slot-label { font-weight: 600; color: var(--qa-text-2); font-size: 12px; width: 40px; }\n  .qa-root .qa-slot-checkbox { width: 16px; height: 16px; accent-color: var(--qa-accent); }\n  .qa-root .qa-slot-attr { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 13px; }\n  .qa-root .qa-slot-empty { color: var(--qa-text-3); font-size: 12px; }\n\n  .qa-root .qa-actions { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px; }\n  .qa-root .qa-count-display { font-size: 12px; color: var(--qa-text-2); margin-left: auto; display: flex; align-items: center; gap: 8px; }\n  .qa-root .qa-count-display strong { color: var(--qa-accent); font-size: 14px; }\n\n  .qa-root .qa-auto-section {\n    background: var(--qa-bg-2);\n    border-radius: var(--qa-radius-md);\n    padding: 12px;\n  }\n  .qa-root .qa-section-title { font-size: 13px; font-weight: 600; margin-bottom: 10px; color: var(--qa-text-1); }\n  .qa-root .qa-auto-form { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .qa-root .qa-form-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--qa-text-2); }\n  .qa-root .qa-form-label { font-size: 12px; color: var(--qa-text-2); }\n  .qa-root .qa-loading { font-size: 12px; color: var(--qa-text-3); text-align: center; padding: 6px 0; }\n\n  /* 俱乐部样式 */\n  .qa-root .club-status-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(156, 163, 175, 0.15);\n    color: var(--qa-text-3);\n  }\n  /* 提示图标 */\n  .qa-root .coop-tip-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: rgba(99, 102, 241, 0.15);\n    color: #6366f1;\n    font-size: 11px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n  .qa-root .coop-tip-icon:hover,\n  .qa-root .coop-tip-icon:focus {\n    background: rgba(99, 102, 241, 0.3);\n    outline: none;\n  }\n  .qa-root .coop-tip-popup {\n    position: absolute;\n    top: 100%;\n    right: 0;\n    margin-top: 4px;\n    padding: 10px 12px;\n    background: #ffffff;\n    border: 1px solid #e5e7eb;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n    font-size: 12px;\n    line-height: 1.6;\n    color: #374151;\n    white-space: nowrap;\n    z-index: 100;\n  }\n  .qa-root .coop-tip-popup::before {\n    content: '';\n    position: absolute;\n    top: -6px;\n    right: 12px;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid #e5e7eb;\n  }\n  .qa-root .coop-tip-popup::after {\n    content: '';\n    position: absolute;\n    top: -5px;\n    right: 12px;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid #ffffff;\n  }\n  .qa-root[data-theme=\"dark\"] .coop-tip-popup {\n    background: #1f2937;\n    border-color: #374151;\n    color: #e5e7eb;\n  }\n  .qa-root[data-theme=\"dark\"] .coop-tip-popup::before {\n    border-bottom-color: #374151;\n  }\n  .qa-root[data-theme=\"dark\"] .coop-tip-popup::after {\n    border-bottom-color: #1f2937;\n  }\n  .qa-root .club-status-badge.active {\n    background: rgba(34, 197, 94, 0.15);\n    color: #22c55e;\n  }\n  .qa-root .energy-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(99, 102, 241, 0.15);\n    color: #6366f1;\n  }\n  .qa-root .time-status-badge {\n    padding: 2px 8px;\n    border-radius: 10px;\n    font-size: 11px;\n    background: rgba(156, 163, 175, 0.15);\n    color: var(--qa-text-3);\n  }\n  .qa-root .time-status-badge.available {\n    background: rgba(34, 197, 94, 0.15);\n    color: #22c55e;\n  }\n  .qa-root .time-status-badge.unavailable {\n    background: rgba(239, 68, 68, 0.15);\n    color: #ef4444;\n  }\n  .qa-root .club-overview { display: flex; flex-direction: column; gap: 12px; }\n  .qa-root .club-header-row { display: flex; align-items: center; gap: 12px; }\n  .qa-root .club-avatar { width: 48px; height: 48px; border-radius: 8px; overflow: hidden; background: var(--qa-bg-3); flex-shrink: 0; }\n  .qa-root .club-avatar img { width: 100%; height: 100%; object-fit: cover; }\n  .qa-root .club-meta { flex: 1; min-width: 0; }\n  .qa-root .club-name { font-size: 16px; font-weight: 600; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .club-sub { font-size: 12px; color: var(--qa-text-2); margin-top: 2px; }\n  .qa-root .club-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: var(--qa-spacing-sm); }\n  .qa-root .club-stat-item { background: var(--qa-bg-2); border-radius: 8px; padding: 8px; text-align: center; }\n  .qa-root .club-stat-item .stat-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 2px; }\n  .qa-root .club-stat-item .stat-value { font-size: 13px; font-weight: 600; color: var(--qa-text-1); }\n  .qa-root .club-announcement { background: var(--qa-bg-2); border-radius: 8px; padding: 10px; }\n  .qa-root .club-announcement .ann-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 4px; }\n  .qa-root .club-announcement .ann-text { font-size: 12px; color: var(--qa-text-1); white-space: pre-wrap; word-break: break-all; }\n  .qa-root .club-leader .leader-label { font-size: 11px; color: var(--qa-text-3); margin-bottom: 4px; }\n  .qa-root .club-leader .leader-info { display: flex; align-items: center; gap: 8px; }\n  .qa-root .club-leader .leader-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--qa-bg-3); }\n  .qa-root .club-members-section { margin-top: 12px; }\n  .qa-root .club-members-section .section-title { font-size: 13px; font-weight: 600; color: var(--qa-text-1); margin-bottom: 8px; }\n  .qa-root .club-members-list { display: flex; flex-direction: column; gap: 6px; max-height: 300px; overflow-y: auto; }\n  .qa-root .member-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: var(--qa-bg-2); border-radius: 8px; }\n  .qa-root .member-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }\n  .qa-root .member-avatar { width: 24px; height: 24px; border-radius: 50%; background: var(--qa-bg-3); flex-shrink: 0; }\n  .qa-root .member-name { font-size: 12px; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .member-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; font-size: 11px; }\n  .qa-root .member-power { color: var(--qa-text-2); font-variant-numeric: tabular-nums; }\n  .qa-root .member-red { color: #ef4444; }\n  .qa-root .member-job { padding: 2px 6px; border-radius: 4px; background: rgba(59, 130, 246, 0.1); color: #3b82f6; }\n  .qa-root .member-job.job-leader { background: rgba(239, 68, 68, 0.1); color: #ef4444; }\n  .qa-root .member-job.job-vice { background: rgba(236, 72, 153, 0.1); color: #ec4899; }\n\n  .qa-toast {\n    position: fixed;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(31, 41, 55, 0.9);\n    color: #fff;\n    padding: 12px 20px;\n    border-radius: 8px;\n    font-size: 15px;\n    z-index: 100000;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-toast.show { opacity: 1; pointer-events: auto; }\n  .qa-toast.success { background: rgba(16, 185, 129, 0.95); }\n  .qa-toast.error { background: rgba(239, 68, 68, 0.95); }\n  .qa-toast.warning { background: rgba(245, 158, 11, 0.95); }\n  .qa-tip-toast { bottom: 80px; background: rgba(47, 128, 237, 0.95); }\n\n  .qa-auth-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(0,0,0,0.6);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 100001;\n    backdrop-filter: blur(6px);\n  }\n  .qa-auth-modal {\n    background: var(--qa-bg-1);\n    border-radius: 14px;\n    padding: 24px;\n    width: 320px;\n    text-align: center;\n    box-shadow: var(--qa-shadow-1);\n    color: var(--qa-text-1);\n  }\n  .qa-auth-title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }\n  .qa-auth-desc { font-size: 13px; color: #6b7280; margin-bottom: 16px; }\n  .qa-auth-input {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #e5e7eb;\n    border-radius: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .qa-auth-error { font-size: 12px; color: #ef4444; margin-bottom: 12px; display: none; }\n\n  .qa-root .qa-watermark {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    z-index: 1;\n    overflow: hidden;\n  }\n  .qa-root .qa-watermark-pattern {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-wrap: wrap;\n    transform: rotate(-30deg);\n  }\n  .qa-root .qa-watermark-item {\n    padding: 30px 50px;\n    font-size: 14px;\n    font-weight: 600;\n    color: rgba(0,0,0,0.05);\n    white-space: nowrap;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-watermark-item { color: rgba(255,255,255,0.05); }\n\n  /* 阵容选择器和展示样式 */\n  .qa-root .team-selector {\n    display: flex;\n    gap: 4px;\n  }\n  .qa-root .team-btn {\n    width: 28px;\n    height: 28px;\n    border: none;\n    border-radius: 50%;\n    background: var(--qa-bg-3);\n    color: var(--qa-text-2);\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .team-btn:hover { background: var(--qa-border); }\n  .qa-root .team-btn.active {\n    background: var(--qa-accent);\n    color: #fff;\n  }\n  .qa-root .team-btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .qa-root .team-heroes-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    min-height: 60px;\n    align-items: center;\n  }\n  .qa-root .team-hero-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    min-width: 52px;\n  }\n  .qa-root .team-hero-circle {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    background: var(--qa-bg-1);\n    border: 2px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .team-hero-circle:hover {\n    border-color: var(--qa-accent);\n    transform: translateY(-2px);\n  }\n  .qa-root .team-hero-avatar {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .team-hero-placeholder {\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2);\n  }\n  .qa-root .team-hero-name {\n    font-size: 11px;\n    color: var(--qa-text-2);\n    text-align: center;\n    max-width: 52px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  /* 疯狂赛车样式 - 紧凑卡片布局 */\n  .qa-root .car-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qa-root .car-item {\n    background: var(--qa-bg-2);\n    border-radius: 6px;\n    padding: 8px 10px;\n    border-left: 3px solid;\n  }\n  .qa-root .car-item.grade-1 { border-left-color: #22c55e; }\n  .qa-root .car-item.grade-2 { border-left-color: #3b82f6; }\n  .qa-root .car-item.grade-3 { border-left-color: #a855f7; }\n  .qa-root .car-item.grade-4 { border-left-color: #f59e0b; }\n  .qa-root .car-item.grade-5 { border-left-color: #ef4444; }\n  .qa-root .car-item.grade-6 { border-left-color: #eab308; }\n\n  .qa-root .car-item-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-bottom: 6px;\n  }\n  .qa-root .car-brand-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 4px;\n  }\n  .qa-root .car-grade-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    background: currentColor;\n    filter: brightness(0.95);\n  }\n  .qa-root .car-grade-icon svg {\n    display: block;\n    fill: #fff;\n    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));\n  }\n  .qa-root .car-badge {\n    font-size: 11px;\n    padding: 1px 6px;\n    border-radius: 4px;\n    border: 1px solid;\n    font-weight: 500;\n  }\n  .qa-root .car-name {\n    font-size: 12px;\n    color: var(--qa-text-2);\n    flex: 1;\n  }\n\n  .qa-root .car-meta-row {\n    display: grid;\n    grid-template-columns: repeat(6, auto);\n    gap: 4px 8px;\n    font-size: 11px;\n    margin-bottom: 6px;\n    align-items: center;\n  }\n  .qa-root .car-meta-row .meta-k {\n    color: var(--qa-text-3);\n    text-align: right;\n  }\n  .qa-root .car-meta-row .meta-v {\n    color: var(--qa-text-1);\n    font-weight: 500;\n  }\n  .qa-root .car-meta-row .reward-trigger {\n    cursor: pointer;\n    color: var(--qa-accent);\n  }\n  .qa-root .car-meta-row .reward-trigger.has-big-prize {\n    color: #10b981;\n    font-weight: 600;\n  }\n  .qa-root .car-meta-row .meta-v.has-helper {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n\n  .qa-root .car-actions {\n    display: flex;\n    gap: 6px;\n  }\n  .qa-root .car-actions .btn {\n    flex: 1;\n    padding: 5px 8px;\n    font-size: 11px;\n  }\n\n  /* 奖励弹窗样式 */\n  .qa-root .car-reward-popup {\n    position: fixed;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: 8px;\n    box-shadow: var(--qa-shadow-1);\n    z-index: 100000;\n    min-width: 180px;\n    max-width: 260px;\n  }\n  .qa-root .car-reward-popup .popup-header {\n    font-size: 12px;\n    font-weight: 600;\n    padding: 8px 12px;\n    border-bottom: 1px solid var(--qa-border);\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-reward-popup .popup-content {\n    padding: 8px 12px;\n    font-size: 11px;\n  }\n  .qa-root .car-reward-popup .reward-row {\n    display: flex;\n    justify-content: space-between;\n    padding: 3px 0;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .car-reward-popup .reward-row:last-child {\n    border-bottom: none;\n  }\n  .qa-root .car-reward-popup .reward-row .name {\n    color: var(--qa-text-2);\n  }\n  .qa-root .car-reward-popup .reward-row .value {\n    color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize {\n    background: rgba(245, 158, 11, 0.12);\n    padding: 4px 6px;\n    margin: 2px -6px;\n    border-radius: 4px;\n    border-bottom: none;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize .name {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .car-reward-popup .reward-row.is-big-prize .value {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .car-reward-popup .no-rewards {\n    text-align: center;\n    color: var(--qa-text-3);\n    padding: 4px 0;\n  }\n\n  /* 护卫选择弹窗优化 */\n  .qa-root .car-helper-modal .helper-list {\n    max-height: 320px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin: 12px 0;\n  }\n  .qa-root .car-helper-modal .helper-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    cursor: pointer;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 2px solid transparent;\n  }\n  .qa-root .car-helper-modal .helper-item:hover {\n    background: var(--qa-bg-3);\n    border-color: var(--qa-border);\n  }\n  .qa-root .car-helper-modal .helper-item.selected {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n  }\n  .qa-root .car-helper-modal .helper-item.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .car-helper-modal .helper-info {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n  .qa-root .car-helper-modal .helper-name {\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-helper-modal .helper-meta {\n    display: flex;\n    gap: 8px;\n    font-size: 11px;\n    color: var(--qa-text-3);\n  }\n  .qa-root .car-helper-modal .helper-power {\n    color: #f59e0b;\n    font-weight: 500;\n  }\n  .qa-root .car-helper-modal .helper-count {\n    color: var(--qa-accent);\n  }\n  .qa-root .car-helper-modal .helper-count.full {\n    color: #ef4444;\n  }\n\n  /* 发车条件设置弹窗 */\n  .qa-root .car-settings-modal .condition-section {\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    padding: 12px;\n  }\n  .qa-root .car-settings-modal .section-title {\n    font-size: 13px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n    margin-bottom: 10px;\n  }\n  .qa-root .car-settings-modal .condition-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 0;\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .car-settings-modal .condition-row:last-of-type {\n    border-bottom: none;\n  }\n  .qa-root .car-settings-modal .condition-checkbox input {\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n  }\n  .qa-root .car-settings-modal .condition-label {\n    font-size: 13px;\n    color: var(--qa-text-2);\n    min-width: 80px;\n  }\n  .qa-root .car-settings-modal .condition-input {\n    flex: 1;\n    max-width: 100px;\n    padding: 4px 8px;\n    border: 1px solid var(--qa-border);\n    border-radius: 4px;\n    font-size: 13px;\n    background: var(--qa-bg-1);\n    color: var(--qa-text-1);\n  }\n  .qa-root .car-settings-modal .condition-input:focus {\n    outline: none;\n    border-color: var(--qa-accent);\n  }\n  .qa-root .car-settings-modal .add-condition-btn {\n    margin-top: 8px;\n    width: 100%;\n    font-size: 12px;\n  }\n  .qa-root .car-settings-modal .refresh-limit-section {\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    padding: 12px;\n  }\n\n  /* 赛车状态栏 */\n  .qa-root .car-status-bar {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    padding: 10px 12px;\n    background: var(--qa-bg-3);\n    border-radius: var(--qa-radius-sm);\n    margin-bottom: 12px;\n  }\n  .qa-root .car-status-bar .status-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n  }\n  .qa-root .car-status-bar .status-label {\n    color: var(--qa-text-3);\n  }\n  .qa-root .car-status-bar .status-value {\n    font-weight: 600;\n    color: var(--qa-text-1);\n    padding: 2px 8px;\n    border-radius: 4px;\n    background: var(--qa-bg-2);\n  }\n  .qa-root .car-status-bar .status-value.active {\n    background: rgba(16, 185, 129, 0.15);\n    color: #10b981;\n  }\n  .qa-root .car-status-bar .status-value.inactive {\n    background: rgba(239, 68, 68, 0.15);\n    color: #ef4444;\n  }\n\n  /* 收车倒计时 */\n  .qa-root .car-countdown {\n    font-size: var(--qa-font-sm);\n    color: var(--qa-text-3);\n    padding: 5px 10px;\n    background: var(--qa-bg-3);\n    border-radius: 4px;\n  }\n\n  /* ===================== 响应式断点 ===================== */\n  /* 平板横屏 / 小桌面 */\n  @media (max-width: 1024px) {\n    .qa-root {\n      --qa-panel-width: 94vw;\n      --qa-card-padding: 12px;\n    }\n    .qa-root .skin-towers-grid { grid-template-columns: repeat(2, 1fr); }\n    .qa-root .club-stats-grid { grid-template-columns: repeat(2, 1fr); }\n  }\n\n  /* 平板竖屏 / 大手机 */\n  @media (max-width: 768px) {\n    .qa-root {\n      --qa-font-xs: 9px;\n      --qa-font-sm: 10px;\n      --qa-font-md: 12px;\n      --qa-font-lg: 13px;\n      --qa-font-xl: 15px;\n      --qa-spacing-sm: 6px;\n      --qa-spacing-md: 10px;\n      --qa-spacing-lg: 14px;\n      --qa-btn-padding: 6px 12px;\n      --qa-btn-sm-padding: 4px 8px;\n      --qa-input-padding: 6px 10px;\n      --qa-card-padding: 12px;\n      --qa-radius-lg: 14px;\n      --qa-radius-md: 10px;\n      --qa-orb-size: 32px;\n      --qa-icon-sm: 14px;\n      --qa-icon-md: 16px;\n      --qa-icon-lg: 20px;\n    }\n    .qa-root .panel-shell {\n      width: 94vw;\n      height: 78vh;\n      max-height: 78vh;\n      border-radius: var(--qa-radius-lg);\n      bottom: auto;\n      top: 6%;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .qa-root .floating-orb {\n      right: 8px;\n      bottom: auto;\n      top: 40%;\n      transform: translateY(-50%);\n    }\n    .qa-root .task-grid { grid-template-columns: 1fr; }\n    .qa-root .qa-option-grid { grid-template-columns: 1fr; gap: 8px; }\n    .qa-root .skin-towers-grid { grid-template-columns: repeat(2, 1fr); }\n    .qa-root .club-stats-grid { grid-template-columns: repeat(2, 1fr); }\n    .qa-root .menu-item {\n      padding: 8px 10px;\n      font-size: var(--qa-font-md);\n    }\n    .qa-root .menu-icon { font-size: var(--qa-icon-sm); }\n    .qa-root .menu-group { padding: 0 2px; }\n    .qa-root .panel-header { height: 44px; }\n    .qa-root .menu-toggle { display: none !important; }\n    .qa-root .content-area { padding: var(--qa-spacing-sm); }\n    .qa-root .card-header { padding: 10px 12px; }\n    .qa-root .card-body { padding: var(--qa-card-padding); }\n    .qa-root .card-footer { padding: 8px 12px 12px; }\n    .qa-root .btn { font-size: var(--qa-font-md); }\n    .qa-root .btn-small, .qa-root .btn-sm { font-size: var(--qa-font-xs); }\n  }\n\n  /* 小手机 */\n  @media (max-width: 480px) {\n    .qa-root {\n      --qa-font-xs: 9px;\n      --qa-font-sm: 10px;\n      --qa-font-md: 11px;\n      --qa-font-lg: 12px;\n      --qa-font-xl: 14px;\n      --qa-spacing-xs: 3px;\n      --qa-spacing-sm: 5px;\n      --qa-spacing-md: 8px;\n      --qa-spacing-lg: 12px;\n      --qa-btn-padding: 5px 10px;\n      --qa-btn-sm-padding: 3px 6px;\n      --qa-input-padding: 5px 8px;\n      --qa-card-padding: 10px;\n      --qa-radius-lg: 12px;\n      --qa-radius-md: 8px;\n      --qa-radius-sm: 6px;\n      --qa-orb-size: 28px;\n      --qa-icon-sm: 12px;\n      --qa-icon-md: 14px;\n      --qa-icon-lg: 18px;\n    }\n    .qa-root .panel-shell {\n      width: 96vw;\n      height: 82vh;\n      max-height: 82vh;\n      top: 4%;\n    }\n    .qa-root .floating-orb { right: 6px; }\n    .qa-root .skin-towers-grid { grid-template-columns: 1fr 1fr; gap: 6px; }\n    .qa-root .club-stats-grid { grid-template-columns: 1fr 1fr; gap: 6px; }\n    .qa-root .qa-hero-quench-grid { grid-template-columns: 1fr; }\n    .qa-root .menu-item { padding: 6px 8px; }\n    .qa-root .panel-header { height: 40px; }\n    .qa-root .content-area { padding: var(--qa-spacing-xs); }\n    .qa-root .stats-row { padding: 10px; gap: 8px; flex-wrap: wrap; }\n    .qa-root .form-row { gap: 6px; }\n    .qa-root .btn-row { gap: 6px; }\n  }\n\n  /* 盐场匹配详情样式 */\n  .qa-root .salt-match-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .match-date-tag {\n    display: inline-block;\n    padding: 4px 10px;\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-radius: 6px;\n    font-size: 12px;\n    font-weight: 500;\n    margin-bottom: 6px;\n  }\n  .qa-root .match-club-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qa-root .match-club-item {\n    background: var(--qa-bg-2);\n    border-radius: 10px;\n    padding: 12px;\n    border: 1px solid var(--qa-border);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .match-club-item:hover {\n    border-color: var(--qa-accent);\n    box-shadow: var(--qa-shadow-2);\n  }\n  .qa-root .club-main-row {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 8px;\n  }\n  .qa-root .club-rank {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 12px;\n    flex-shrink: 0;\n  }\n  .qa-root .club-logo {\n    width: 36px;\n    height: 36px;\n    border-radius: 8px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .club-logo img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .club-basic { flex: 1; min-width: 0; }\n  .qa-root .club-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }\n  .qa-root .club-name { font-weight: 600; font-size: 14px; color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .club-server { font-size: 11px; color: var(--qa-text-3); background: var(--qa-bg-3); padding: 2px 6px; border-radius: 4px; }\n  .qa-root .club-stats-row { display: flex; gap: 6px; flex-wrap: wrap; }\n  .qa-root .stat-tag {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .stat-tag.power { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .stat-tag.red { background: rgba(239, 68, 68, 0.12); color: #ef4444; }\n  .qa-root .stat-tag.score { background: rgba(236, 72, 153, 0.12); color: #ec4899; }\n  .qa-root .club-detail-row {\n    padding: 8px 0;\n    border-top: 1px dashed var(--qa-border);\n    border-bottom: 1px dashed var(--qa-border);\n    margin: 4px 0;\n  }\n  .qa-root .car-heads { display: flex; gap: 12px; flex-wrap: wrap; }\n  .qa-root .car-head-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 11px;\n    padding: 4px 8px;\n    background: rgba(0, 191, 255, 0.1);\n    color: #00bfff;\n    border-radius: 6px;\n  }\n  .qa-root .car-head-avatar {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .car-head-text { white-space: nowrap; }\n  .qa-root .club-extra-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 6px; }\n  .qa-root .alliance-tag {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .alliance-tag.梦 { background: rgba(236, 72, 153, 0.12); color: #ec4899; }\n  .qa-root .alliance-tag.大 { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }\n  .qa-root .alliance-tag.正义 { background: rgba(34, 197, 94, 0.12); color: #22c55e; }\n  .qa-root .alliance-tag.龙 { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .alliance-tag.未知 { background: rgba(107, 114, 128, 0.12); color: #6b7280; }\n  .qa-root .announcement {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    flex: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 0;\n  }\n\n  /* 消耗活动监控样式 */\n  .qa-root .consumption-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .qa-root .consumption-item {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .qa-root .consumption-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .qa-root .consumption-name {\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .consumption-values {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n  .qa-root .consumption-bar {\n    width: 100%;\n    height: 8px;\n    background: var(--qa-bg-3);\n    border-radius: 999px;\n    overflow: hidden;\n  }\n  .qa-root .consumption-bar-fill {\n    height: 100%;\n    border-radius: 999px;\n    transition: width var(--qa-dur-normal) var(--qa-ease);\n  }\n  .qa-root .consumption-footer {\n    display: flex;\n    justify-content: flex-end;\n    font-size: 11px;\n  }\n\n  /* 盐场战绩样式 */\n  .qa-root .battle-records-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .battle-records-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .battle-member-card {\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border);\n    overflow: hidden;\n  }\n  .qa-root .battle-member-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .battle-member-header:hover { background: var(--qa-bg-3); }\n  .qa-root .battle-member-info { display: flex; align-items: center; gap: 8px; }\n  .qa-root .battle-rank {\n    width: 28px;\n    height: 28px;\n    border-radius: 6px;\n    background: linear-gradient(135deg, var(--qa-accent) 0%, #6366f1 100%);\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 11px;\n  }\n  .qa-root .battle-member-avatar {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .battle-member-name { font-weight: 600; font-size: 13px; color: var(--qa-text-1); }\n  .qa-root .battle-member-stats { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }\n  .qa-root .stat-inline {\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n  .qa-root .stat-inline.win { background: rgba(16, 185, 129, 0.12); color: #10b981; }\n  .qa-root .stat-inline.lose { background: rgba(239, 68, 68, 0.12); color: #ef4444; }\n  .qa-root .stat-inline.lose.highlight { background: rgba(251, 191, 36, 0.2); color: #f59e0b; font-weight: 700; }\n  .qa-root .stat-inline.kd { background: rgba(99, 102, 241, 0.12); color: #6366f1; }\n  .qa-root .stat-inline.dan { background: rgba(139, 92, 246, 0.12); color: #8b5cf6; }\n  .qa-root .stat-inline.building { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }\n  .qa-root .battle-member-name.name-red { color: #ef4444; }\n  .qa-root .battle-member-name.name-green { color: #10b981; }\n  .qa-root .battle-member-name.name-yellow { color: #f59e0b; }\n  .qa-root .expand-icon { font-size: 10px; color: var(--qa-text-3); margin-left: 4px; }\n  .qa-root .battle-member-details {\n    padding: 0 12px 12px;\n    border-top: 1px dashed var(--qa-border);\n  }\n  .qa-root .battle-list { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }\n  .qa-root .battle-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 10px;\n    border-radius: 6px;\n    font-size: 11px;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .battle-item.win { background: rgba(16, 185, 129, 0.08); }\n  .qa-root .battle-item.lose { background: rgba(239, 68, 68, 0.08); }\n  .qa-root .battle-time { color: var(--qa-text-3); font-family: monospace; min-width: 40px; }\n  .qa-root .battle-type { color: var(--qa-text-2); min-width: 36px; padding: 2px 6px; border-radius: 4px; font-size: 10px; }\n  .qa-root .battle-type.attack { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }\n  .qa-root .battle-type.defend { background: rgba(99, 102, 241, 0.15); color: #6366f1; }\n  .qa-root .battle-participants { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; }\n  .qa-root .battle-self { color: var(--qa-text-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 60px; }\n  .qa-root .battle-vs { color: var(--qa-text-3); font-size: 10px; }\n  .qa-root .battle-target-avatar { width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; }\n  .qa-root .battle-target { color: var(--qa-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n  .qa-root .battle-result { font-weight: 600; min-width: 32px; text-align: right; }\n  .qa-root .battle-result.win { color: #10b981; }\n  .qa-root .battle-result.lose { color: #ef4444; }\n\n  /* 榜单样式 */\n  .qa-root .rank-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .rank-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .rank-member-card {\n    background: var(--qa-bg-2);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    padding: 10px 12px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .rank-member-card:hover {\n    box-shadow: var(--qa-shadow-2);\n    background: var(--qa-bg-3);\n  }\n  .qa-root .rank-member-header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    user-select: none;\n    cursor: grab;\n  }\n  .qa-root .rank-member-header::-webkit-scrollbar {\n    display: none;\n  }\n  .qa-root .rank-member-header {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .qa-root .rank-member-header:active {\n    cursor: grabbing;\n  }\n  .qa-root .rank-badge-top-left {\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    z-index: 10;\n  }\n  .qa-root .rank-badge-left {\n    flex-shrink: 0;\n    min-width: 36px;\n    font-weight: bold;\n    font-size: 16px;\n    color: var(--qa-primary);\n    text-align: center;\n  }\n  .qa-root .rank-member-content {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-root .rank-badge-top-left + .rank-member-content {\n    margin-left: 100px;\n  }\n  .qa-root .rank-member-info {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    min-width: 120px;\n    flex-shrink: 0;\n  }\n  .qa-root .rank-member-stats {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-root .rank-member-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    flex-wrap: nowrap;\n  }\n  .qa-root .rank-member-avatar {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .rank-member-avatar-small {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .rank-club-logo {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    object-fit: cover;\n    background: var(--qa-bg-3);\n    flex-shrink: 0;\n  }\n  .qa-root .stat-inline {\n    font-size: 11px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    white-space: nowrap;\n    font-weight: 500;\n    flex-shrink: 0;\n  }\n  .qa-root .stat-inline.rank {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n  .qa-root .stat-inline.win {\n    background: rgba(16, 185, 129, 0.15);\n    color: #059669;\n  }\n  .qa-root .stat-inline.loss {\n    background: rgba(239, 68, 68, 0.15);\n    color: #dc2626;\n  }\n  .qa-root .stat-inline.siege {\n    background: rgba(245, 158, 11, 0.15);\n    color: #d97706;\n  }\n  .qa-root .stat-inline.power {\n    background: rgba(250, 76, 44, 0.15);\n    color: #F96F19;\n  }\n  .qa-root .stat-inline.score {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n  .qa-root .stat-inline.red {\n    background: rgba(249, 203, 35, 0.15);\n    color: #F99D19;\n  }\n  .qa-root .stat-inline.name {\n    background: rgba(194, 166, 248, 0.15);\n    color: #AE86F9;\n  }\n  .qa-root .stat-inline.id {\n    background: rgba(244, 162, 216, 0.15);\n    color: #FA79CE;\n  }\n\n  /* 分页样式 */\n  .qa-root .pagination-container {\n    margin-top: 16px;\n    padding-top: 12px;\n    border-top: 1px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  .qa-root .pagination-info {\n    font-size: 12px;\n    color: var(--qa-text-2);\n  }\n  .qa-root .pagination-controls {\n    display: flex;\n    gap: 8px;\n  }\n\n  /* 单选按钮组样式 */\n  .qa-root .radio-group {\n    display: flex;\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  .qa-root .radio-option {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    user-select: none;\n  }\n  .qa-root .radio-option input[type=\"radio\"] {\n    margin: 0 4px 0 0;\n    cursor: pointer;\n  }\n  .qa-root .radio-option span {\n    font-size: 12px;\n    padding: 4px 8px;\n    border-radius: 6px;\n    background: var(--qa-bg-3);\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .radio-option input[type=\"radio\"]:checked + span {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n    border-color: var(--qa-accent);\n    font-weight: 500;\n  }\n  .qa-root .radio-option:hover span {\n    background: var(--qa-border);\n  }\n\n  /* 俱乐部历史战绩样式 */\n  .qa-root .history-records-info { display: flex; flex-direction: column; gap: 10px; }\n  .qa-root .history-records-list { display: flex; flex-direction: column; gap: 6px; }\n  .qa-root .history-war-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 10px 12px;\n    background: var(--qa-bg-2);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border);\n  }\n  .qa-root .war-type {\n    font-weight: 600;\n    font-size: 13px;\n    color: var(--qa-accent);\n    min-width: 80px;\n  }\n  .qa-root .war-date { font-size: 12px; color: var(--qa-text-2); flex: 1; }\n  .qa-root .war-rank {\n    font-size: 12px;\n    font-weight: 600;\n    padding: 2px 10px;\n    border-radius: 10px;\n    background: rgba(245, 158, 11, 0.12);\n    color: #f59e0b;\n  }\n\n  /* 日历选择器样式 */\n  .qa-root .date-picker-wrapper {\n    position: relative;\n    display: inline-block;\n  }\n  .qa-root .date-picker-btn {\n    padding: 6px 10px;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    cursor: pointer;\n    font-size: 14px;\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .date-picker-btn:hover {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n  }\n  .qa-root .calendar-popup, .calendar-popup.qa-root {\n    position: fixed;\n    background: var(--qa-bg-1, #1a1a2e);\n    border: 1px solid var(--qa-border, #2d2d44);\n    border-radius: var(--qa-radius-md, 12px);\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n    z-index: 99999;\n    min-width: 280px;\n    display: none;\n    padding: 12px;\n  }\n  .qa-root .calendar-popup.show, .calendar-popup.qa-root.show { display: block; }\n  .qa-root .calendar-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 12px;\n  }\n  .qa-root .calendar-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--qa-text-1);\n  }\n  .qa-root .calendar-nav {\n    width: 28px;\n    height: 28px;\n    border: none;\n    background: var(--qa-bg-3);\n    border-radius: 6px;\n    cursor: pointer;\n    font-size: 14px;\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-nav:hover {\n    background: var(--qa-accent-weak);\n    color: var(--qa-accent);\n  }\n  .qa-root .calendar-weekdays {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 2px;\n    margin-bottom: 8px;\n  }\n  .qa-root .calendar-weekday {\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-3);\n    padding: 4px;\n  }\n  .qa-root .calendar-weekday.weekend { color: var(--qa-accent); }\n  .qa-root .calendar-days {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    gap: 2px;\n  }\n  .qa-root .calendar-day {\n    text-align: center;\n    padding: 8px 4px;\n    font-size: 12px;\n    border-radius: 6px;\n    cursor: pointer;\n    color: var(--qa-text-1);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-day:hover:not(.disabled):not(.empty) {\n    background: var(--qa-bg-3);\n  }\n  .qa-root .calendar-day.weekend { color: var(--qa-accent); font-weight: 500; }\n  .qa-root .calendar-day.today {\n    background: var(--qa-bg-3);\n    font-weight: 600;\n    box-shadow: inset 0 0 0 1px var(--qa-accent);\n  }\n  .qa-root .calendar-day.selected {\n    background: var(--qa-accent);\n    color: #fff;\n    font-weight: 600;\n  }\n  .qa-root .calendar-day.selected.weekend { color: #fff; }\n  .qa-root .calendar-day.disabled {\n    color: var(--qa-text-3);\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n  .qa-root .calendar-day.other-month { opacity: 0.4; }\n  .qa-root .calendar-day.empty { cursor: default; }\n  .qa-root .calendar-shortcuts {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid var(--qa-border);\n  }\n  .qa-root .calendar-shortcut {\n    padding: 4px 10px;\n    font-size: 11px;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    border-radius: 4px;\n    cursor: pointer;\n    color: var(--qa-text-2);\n    transition: all var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .calendar-shortcut:hover {\n    background: var(--qa-accent-weak);\n    border-color: var(--qa-accent);\n    color: var(--qa-accent);\n  }\n  .qa-root .calendar-hint {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    margin-top: 8px;\n    text-align: center;\n  }\n\n  /* 自动完成/联想搜索组件样式 */\n  .qa-root .qa-autocomplete {\n    position: relative;\n  }\n  .qa-root .qa-autocomplete-input {\n    width: 100%;\n  }\n  .qa-root .qa-autocomplete-dropdown {\n    display: none;\n    position: fixed;\n    max-height: 240px;\n    overflow-y: auto;\n    background: var(--qa-bg-1);\n    border: 1px solid var(--qa-border);\n    border-radius: var(--qa-radius-sm);\n    box-shadow: var(--qa-shadow-1);\n    z-index: 100000;\n  }\n  .qa-root .qa-autocomplete-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 12px;\n    cursor: pointer;\n    transition: background var(--qa-dur-fast) var(--qa-ease);\n    border-bottom: 1px solid var(--qa-border);\n  }\n  .qa-root .qa-autocomplete-item:last-child {\n    border-bottom: none;\n  }\n  .qa-root .qa-autocomplete-item:hover,\n  .qa-root .qa-autocomplete-item.active {\n    background: var(--qa-accent-weak);\n  }\n  .qa-root .qa-autocomplete-item.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--qa-bg-3);\n  }\n  .qa-root .qa-autocomplete-name {\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--qa-text-1);\n  }\n  .qa-root .qa-autocomplete-name mark {\n    background: rgba(47, 128, 237, 0.25);\n    color: var(--qa-accent);\n    padding: 0 2px;\n    border-radius: 2px;\n  }\n  .qa-root .qa-autocomplete-level {\n    font-size: 11px;\n    color: var(--qa-text-3);\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n  }\n  .qa-root .qa-autocomplete-empty {\n    padding: 16px;\n    text-align: center;\n    color: var(--qa-text-3);\n    font-size: 12px;\n  }\n\n  /* ===================== 头像/武将头像（参考 xyzw_web_helper 展示风格） ===================== */\n  .qa-root .qa-avatar {\n    position: relative;\n    width: 32px;\n    height: 32px;\n    border-radius: 999px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    border: 1px solid var(--qa-border);\n    flex: none;\n  }\n  .qa-root .qa-avatar.qa-avatar-24 { width: 24px; height: 24px; }\n  .qa-root .qa-avatar.qa-avatar-32 { width: 32px; height: 32px; }\n  .qa-root .qa-avatar-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    opacity: 0;\n    transition: opacity var(--qa-dur-fast) var(--qa-ease);\n  }\n  .qa-root .qa-avatar-fallback {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2);\n    background: var(--qa-bg-3);\n  }\n  .qa-root .qa-pvp-hero-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 10px;\n    border-radius: 10px;\n    border: 1px solid var(--qa-border);\n    background: var(--qa-bg-2);\n    min-width: 170px;\n  }\n  .qa-root .qa-pvp-hero-meta { min-width: 0; }\n  .qa-root .qa-pvp-hero-name {\n    font-size: 12px;\n    font-weight: 700;\n    color: var(--qa-text-1);\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 110px;\n  }\n  .qa-root .qa-pvp-hero-sub {\n    font-size: 10px;\n    color: var(--qa-text-2);\n    line-height: 1.2;\n    margin-top: 3px;\n    display: flex;\n    gap: 6px;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .qa-root .qa-pvp-hero-red { color: #ff3b30; }\n  .qa-root .qa-pvp-hero-hole { color: #34c759; }\n  .qa-root .qa-pvp-hero-holy.on { color: #34c759; }\n  .qa-root .qa-pvp-hero-holy.off { color: #8e8e93; }\n\n  /* ===================== 武将详情弹窗 ===================== */\n  .qa-hero-overlay {\n    padding: 16px;\n    opacity: 0;\n    animation: qa-fade-in 0.2s ease forwards;\n  }\n  @keyframes qa-fade-in {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n  .qa-hero-modal {\n    width: min(380px, 90vw);\n    max-height: min(85vh, 600px);\n    overflow: hidden;\n    background: var(--qa-bg-1, #ffffff);\n    border-radius: var(--qa-radius-lg, 16px);\n    border: 1px solid var(--qa-border, #e5e7eb);\n    box-shadow: var(--qa-shadow-1, 0 8px 24px rgba(0,0,0,0.12));\n    display: flex;\n    flex-direction: column;\n    transform: scale(0.95);\n    animation: qa-modal-in 0.2s ease forwards;\n    position: relative;\n  }\n  @keyframes qa-modal-in {\n    from { transform: scale(0.95); opacity: 0; }\n    to { transform: scale(1); opacity: 1; }\n  }\n  .qa-hero-modal-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 16px;\n    border-bottom: 1px solid var(--qa-border, #e5e7eb);\n    background: var(--qa-bg-2, #f7f8fa);\n    position: relative;\n    z-index: 2;\n  }\n  .qa-hero-modal-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--qa-text-1, #1f2937);\n  }\n  .qa-hero-modal-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    border: none;\n    background: transparent;\n    color: var(--qa-text-3, #9ca3af);\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.15s ease;\n  }\n  .qa-hero-modal-close:hover {\n    background: var(--qa-bg-3, #f0f1f3);\n    color: var(--qa-text-1, #1f2937);\n  }\n  .qa-hero-modal-body {\n    flex: 1;\n    overflow-y: auto;\n    padding: 0;\n    position: relative;\n    z-index: 2;\n  }\n\n  /* 弹窗内的水印样式 */\n  .qa-hero-modal .qa-watermark {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    z-index: 1;\n    overflow: hidden;\n  }\n  .qa-hero-modal .qa-watermark-pattern {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-wrap: wrap;\n    transform: rotate(-30deg);\n  }\n  .qa-hero-modal .qa-watermark-item {\n    padding: 30px 50px;\n    font-size: 14px;\n    font-weight: 600;\n    color: rgba(0,0,0,0.05);\n    white-space: nowrap;\n  }\n  [data-theme=\"dark\"] .qa-hero-modal .qa-watermark-item {\n    color: rgba(255,255,255,0.05);\n  }\n\n  /* 武将头像区域 */\n  .qa-hero-profile {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 16px;\n    background: linear-gradient(135deg, var(--qa-accent-weak, #e8f0fe) 0%, var(--qa-bg-1, #ffffff) 100%);\n  }\n  .qa-hero-avatar-wrap {\n    flex-shrink: 0;\n  }\n  .qa-avatar-48 {\n    width: 52px;\n    height: 52px;\n    border-radius: 12px;\n    border: 2px solid var(--qa-accent, #2f80ed);\n    box-shadow: 0 2px 8px rgba(47, 128, 237, 0.2);\n  }\n  .qa-avatar-48 .qa-avatar-img,\n  .qa-avatar-48 .qa-avatar-fallback {\n    border-radius: 10px;\n  }\n  .qa-hero-info {\n    flex: 1;\n    min-width: 0;\n  }\n  .qa-hero-name {\n    font-size: 15px;\n    font-weight: 700;\n    color: var(--qa-text-1, #1f2937);\n    margin-bottom: 5px;\n  }\n  .qa-hero-stats {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin-bottom: 6px;\n  }\n  .qa-hero-stat {\n    font-size: 11px;\n    color: var(--qa-text-2, #6b7280);\n  }\n  .qa-hero-stat.star { color: #f59e0b; }\n  .qa-hero-stat.power { color: var(--qa-accent, #2f80ed); font-weight: 500; }\n  .qa-hero-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n  }\n  .qa-hero-tag {\n    display: inline-flex;\n    align-items: center;\n    padding: 2px 7px;\n    border-radius: 4px;\n    font-size: 10px;\n    font-weight: 500;\n  }\n  .qa-hero-tag.red {\n    background: rgba(255, 59, 48, 0.1);\n    color: #ff3b30;\n  }\n  .qa-hero-tag.hole {\n    background: rgba(52, 199, 89, 0.1);\n    color: #34c759;\n  }\n  .qa-hero-tag.holy.on {\n    background: rgba(52, 199, 89, 0.1);\n    color: #34c759;\n  }\n  .qa-hero-tag.holy.off {\n    background: rgba(142, 142, 147, 0.1);\n    color: #8e8e93;\n  }\n\n  /* 分区标题 */\n  .qa-hero-section {\n    padding: 10px 16px;\n    border-top: 1px solid var(--qa-border, #e5e7eb);\n  }\n  .qa-hero-section-title {\n    font-size: 11px;\n    font-weight: 600;\n    color: var(--qa-text-2, #6b7280);\n    margin-bottom: 8px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n\n  /* 基础属性网格 */\n  .qa-hero-attr-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .qa-hero-attr-item {\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    padding: 8px 10px;\n    background: var(--qa-bg-2, #f7f8fa);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border, #e5e7eb);\n  }\n  .qa-hero-attr-label {\n    font-size: 10px;\n    color: var(--qa-text-2, #6b7280);\n    font-weight: 500;\n  }\n  .qa-hero-attr-value {\n    font-size: 13px;\n    color: var(--qa-text-1, #1f2937);\n    font-weight: 600;\n  }\n\n  /* 装备淬炼网格 */\n  .qa-hero-equip-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 7px;\n  }\n  .qa-hero-equip-slot {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 7px 9px;\n    background: var(--qa-bg-2, #f7f8fa);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border, #e5e7eb);\n  }\n  .qa-hero-equip-label {\n    font-size: 11px;\n    color: var(--qa-text-2, #6b7280);\n    font-weight: 500;\n  }\n  .qa-hero-equip-none {\n    font-size: 11px;\n    color: var(--qa-text-3, #9ca3af);\n  }\n  .qa-hero-equip-diamonds {\n    display: flex;\n    gap: 3px;\n  }\n  .qa-hero-equip-diamond {\n    width: 10px;\n    height: 10px;\n    transform: rotate(45deg);\n    border: 1.5px solid var(--qa-border, #d1d5db);\n    background: var(--qa-bg-1, #ffffff);\n    flex-shrink: 0;\n  }\n  .qa-hero-equip-diamond.red {\n    background: #ff3b30;\n    border-color: #ff3b30;\n  }\n  .qa-hero-equip-empty {\n    grid-column: 1 / -1;\n    text-align: center;\n    padding: 12px;\n    color: var(--qa-text-3, #9ca3af);\n    font-size: 12px;\n  }\n\n  /* 鱼灵信息网格 */\n  .qa-hero-fish-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 7px;\n  }\n  .qa-hero-fish-item {\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    padding: 7px 9px;\n    background: var(--qa-bg-2, #f7f8fa);\n    border-radius: 8px;\n    border: 1px solid var(--qa-border, #e5e7eb);\n  }\n  .qa-hero-fish-item.full {\n    grid-column: 1 / -1;\n  }\n  .qa-hero-fish-label {\n    font-size: 10px;\n    color: var(--qa-text-3, #9ca3af);\n  }\n  .qa-hero-fish-value {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--qa-text-1, #1f2937);\n  }\n  .qa-hero-fish-dots {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n  }\n  .qa-hero-fish-dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: 2px solid rgba(255,255,255,0.8);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n    flex-shrink: 0;\n  }\n  .qa-hero-fish-empty {\n    font-size: 11px;\n    color: var(--qa-text-3, #9ca3af);\n  }\n\n  /* 暗色主题适配 */\n  .qa-root[data-theme=\"dark\"] .qa-hero-modal,\n  [data-theme=\"dark\"] .qa-hero-modal {\n    background: var(--qa-bg-1, #1f2937);\n    border-color: var(--qa-border, #374151);\n  }\n  .qa-root[data-theme=\"dark\"] .qa-hero-profile,\n  [data-theme=\"dark\"] .qa-hero-profile {\n    background: linear-gradient(135deg, var(--qa-accent-weak, #1e3a5f) 0%, var(--qa-bg-1, #1f2937) 100%);\n  }\n  .qa-root[data-theme=\"dark\"] .qa-hero-equip-diamond,\n  [data-theme=\"dark\"] .qa-hero-equip-diamond {\n    background: var(--qa-bg-3, #374151);\n    border-color: var(--qa-border, #4b5563);\n  }\n  .qa-root[data-theme=\"dark\"] .qa-hero-equip-diamond.red,\n  [data-theme=\"dark\"] .qa-hero-equip-diamond.red {\n    background: #ff3b30;\n    border-color: #ff3b30;\n  }\n  .qa-root[data-theme=\"dark\"] .qa-hero-fish-dot,\n  [data-theme=\"dark\"] .qa-hero-fish-dot {\n    border-color: rgba(0,0,0,0.3);\n  }\n\n  /* 定时任务页面样式 */\n  .qa-root .schedule-task-list { display: flex; flex-direction: column; gap: 8px; }\n  .qa-root .schedule-task-item { background: var(--qa-bg-3); border-radius: var(--qa-radius-sm); padding: 10px 12px; }\n  .qa-root .schedule-task-item[data-collapsible-task] .schedule-task-header { cursor: pointer; margin-bottom: 0; }\n  .qa-root .schedule-task-item[data-collapsible-task].expanded .schedule-task-header { margin-bottom: 8px; }\n  .qa-root .schedule-task-item[data-collapsible-task] .schedule-task-body { display: none; }\n  .qa-root .schedule-task-item[data-collapsible-task].expanded .schedule-task-body { display: block; }\n  .qa-root .task-collapse-icon { font-size: 10px; color: var(--qa-text-3); transition: transform 0.2s; }\n  .qa-root .schedule-task-item.expanded .task-collapse-icon { transform: rotate(180deg); }\n  .qa-root .schedule-task-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }\n  .qa-root .schedule-task-config { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .qa-root .schedule-status-badge { font-size: 11px; padding: 2px 8px; border-radius: 10px; background: var(--qa-bg-3); color: var(--qa-text-3); }\n  .qa-root .schedule-status-badge.running { background: #34c759; color: #fff; }\n  .qa-root .schedule-status-badge.stopped { background: var(--qa-bg-3); color: var(--qa-text-3); }\n  .qa-root .schedule-next { font-size: 11px; color: var(--qa-text-3); }\n  .qa-root .schedule-logs-container { max-height: 200px; overflow-y: auto; font-size: 11px; }\n  .qa-root .schedule-log-item { display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 1px solid var(--qa-border); }\n  .qa-root .schedule-log-item:last-child { border-bottom: none; }\n  .qa-root .log-time { color: var(--qa-text-3); min-width: 70px; }\n  .qa-root .log-task { color: var(--qa-text-1); min-width: 40px; }\n  .qa-root .log-status { font-weight: 600; }\n  .qa-root .log-status.ok { color: #34c759; }\n  .qa-root .log-status.skip { color: #ff9500; }\n  .qa-root .log-status.fail { color: #ff3b30; }\n  .qa-root .log-note { color: var(--qa-text-3); font-size: 10px; }\n\n  /* 俱乐部全局战损查询样式 */\n  .qa-root .casualties-table-wrapper { overflow-x: auto; margin-top: 10px; }\n  .qa-root .casualties-table { width: 100%; border-collapse: collapse; font-size: 12px; min-width: 650px; }\n  .qa-root .casualties-table th, .qa-root .casualties-table td { padding: 8px 6px; text-align: center; border-bottom: 1px solid var(--qa-border); }\n  .qa-root .casualties-table th { background: var(--qa-bg-3); font-weight: 600; position: sticky; top: 0; }\n  .qa-root .casualties-table tr:hover { background: var(--qa-bg-3); }\n  .qa-root .casualties-table .rank-cell { font-weight: bold; color: var(--qa-text-3); }\n  .qa-root .casualties-table .name-cell { text-align: left; max-width: 150px; display: flex; align-items: center; gap: 6px; }\n  .qa-root .casualties-table .name-cell span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n  .qa-root .casualties-table .club-logo { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; }\n  .qa-root .casualties-table .point-cell { color: #007AFF; font-weight: bold; }\n  .qa-root .casualties-table .kill-cell { color: #34c759; }\n  .qa-root .casualties-table .death-cell { color: #ff3b30; }\n  .qa-root .casualties-table .kd-cell { font-weight: 500; }\n  .qa-root .casualties-table .revive-cell { color: #ff9500; }\n\n  /* 对战阵容对比样式 */\n  .qa-root .pvp-teams-wrapper { display: flex; flex-direction: column; gap: 16px; }\n  /* 玩家对比头部 */\n  .qa-root .pvp-players-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 32px;\n    padding: 16px;\n    background: var(--qa-bg-2);\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .qa-root .pvp-player-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n  }\n  .qa-root .pvp-player-avatar {\n    position: relative;\n    width: 64px;\n    height: 64px;\n    border-radius: 8px;\n    overflow: hidden;\n    background: var(--qa-bg-3);\n    border: 3px solid var(--qa-border);\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n    flex-shrink: 0;\n  }\n  .qa-root .pvp-player-avatar:hover {\n    transform: scale(1.05);\n    box-shadow: 0 6px 16px rgba(0,0,0,0.25);\n  }\n  .qa-root .pvp-player-avatar img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .qa-root .pvp-player-avatar-fallback {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n    font-weight: bold;\n    color: var(--qa-text-1);\n    background: linear-gradient(135deg, var(--qa-primary), var(--qa-primary-hover));\n  }\n  .qa-root .pvp-player-name {\n    font-size: 14px;\n    font-weight: bold;\n    color: var(--qa-text-1);\n    max-width: 120px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-align: center;\n  }\n  .qa-root .pvp-player-stats {\n    font-size: 11px;\n    color: var(--qa-text-2);\n    margin-top: 4px;\n    text-align: center;\n    max-width: 200px;\n    line-height: 1.5;\n  }\n  .qa-root .pvp-player-stats .stat-power {\n    color: var(--qa-primary, #3b82f6);\n    font-weight: 600;\n  }\n  .qa-root .pvp-player-stats .stat-holes {\n    color: var(--qa-text-1);\n  }\n  .qa-root .pvp-player-stats .stat-red {\n    color: #ef4444;\n    font-weight: 600;\n  }\n  .qa-root .pvp-player-stats .stat-holy {\n    color: #f59e0b;\n    font-weight: 600;\n  }\n  .qa-root .pvp-vs-text {\n    font-size: 24px;\n    font-weight: bold;\n    color: #ef4444;\n    text-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n    letter-spacing: 2px;\n  }\n  /* 阵容对比内容 */\n  .qa-root .pvp-teams-content { display: flex; align-items: flex-start; justify-content: center; gap: 24px; }\n  .qa-root .pvp-team-column { display: flex; flex-direction: column; align-items: center; }\n  .qa-root .pvp-team-title { font-size: 13px; font-weight: bold; color: var(--qa-text-1); margin-bottom: 12px; }\n  .qa-root .pvp-team-side { display: flex; flex-direction: column; align-items: center; min-width: 120px; }\n  .qa-root .pvp-team-grid-3x2 {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    row-gap: 8px;\n    column-gap: 12px;\n    align-items: center;\n    justify-items: center;\n    width: fit-content;\n  }\n  .qa-root .pvp-hero-slot {\n    position: relative;\n    width: 72px;\n    height: 72px;\n    border-radius: 10px;\n    overflow: visible;\n    background: var(--qa-bg-3);\n    border: 3px solid var(--qa-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 3px 8px rgba(0,0,0,0.15);\n    cursor: pointer;\n    transition: transform 0.15s, box-shadow 0.15s;\n  }\n  .qa-root .pvp-hero-slot:hover { transform: scale(1.08); box-shadow: 0 6px 16px rgba(0,0,0,0.25); z-index: 10; }\n  .qa-root .pvp-hero-slot img { width: 100%; height: 100%; object-fit: cover; border-radius: 7px; }\n  .qa-root .pvp-hero-slot.empty { opacity: 0.4; cursor: default; }\n  .qa-root .pvp-hero-slot.empty:hover { transform: none; box-shadow: 0 3px 8px rgba(0,0,0,0.15); }\n  .qa-root .pvp-hero-placeholder { width: 100%; height: 100%; font-size: 13px; color: var(--qa-text-3); display: flex; align-items: center; justify-content: center; background: var(--qa-bg-2); border-radius: 7px; }\n  .qa-root .pvp-hero-level { position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%); font-size: 11px; color: #fff; background: rgba(0,0,0,0.75); padding: 2px 6px; border-radius: 5px; white-space: nowrap; font-weight: bold; }\n  .qa-root .pvp-weapon-cell { text-align: center; }\n  .qa-root .pvp-weapon-slot { display: inline-block; }\n  .qa-root .pvp-weapon-slot img { width: 36px; height: 36px; object-fit: contain; border-radius: 5px; }\n  .qa-root .pvp-team-empty { font-size: 12px; color: var(--qa-text-3); padding: 24px; text-align: center; }\n";
      document.head.appendChild(II);
      const If = document.createElement("div");
      If.id = "qa-root";
      If.className = "qa-root";
      If.setAttribute("data-theme", TR.theme);
      const IK = document.createElement("div");
      IK.id = "qa-orb";
      IK.className = "floating-orb";
      IK.innerHTML = "<svg class=\"orb-icon\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z\"/>\n    <path d=\"M7 17l5-8 5 8H7z\" opacity=\"0.5\"/>\n  </svg>";
      IK.title = "点击展开/收起\n长按切换主题\n可拖动位置";
      let IW = null;
      const IC = (cZ, cU) => {
        {
          const {
            x: cF,
            y: cp
          } = ((cV, cJ, cH = 20) => ({
            x: Math.max(cH, Math.min(window.innerWidth - cH, cV)),
            y: Math.max(cH, Math.min(window.innerHeight - cH, cJ))
          }))(cZ, cU);
          IK.style.left = cF + "px";
          IK.style.top = cp + "px";
          IK.style.right = "auto";
          IK.style.bottom = "auto";
          IK.style.transform = "translate(-50%, -50%)";
        }
      };
      const Iy = () => {
        if (!IW || !window.innerWidth || !window.innerHeight) {
          return;
        }
        const cZ = IW.x / 100 * window.innerWidth;
        const cU = IW.y / 100 * window.innerHeight;
        IC(cZ, cU);
      };
      const IY = localStorage.getItem(TF);
      if (IY) {
        try {
          {
            const cZ = JSON.parse(IY);
            if (undefined !== cZ.percentX && undefined !== cZ.percentY) {
              IW = {
                x: cZ.percentX,
                y: cZ.percentY
              };
              Iy();
            } else {
              if (undefined !== cZ.x && undefined !== cZ.y) {
                {
                  const cN = cZ.x / window.innerWidth * 100;
                  const cu = cZ.y / window.innerHeight * 100;
                  const cF = {
                    x: cN,
                    y: cu
                  };
                  const cp = {
                    percentX: cN,
                    percentY: cu
                  };
                  IW = cF;
                  Iy();
                  localStorage.setItem(TF, JSON.stringify(cp));
                }
              }
            }
          }
        } catch (cJ) {}
      }
      let Im = false;
      let IE = 0;
      let IX = 0;
      let IG = 0;
      let IA = 0;
      let IQ = false;
      let Ix = null;
      let Ik = false;
      const Ig = cH => {
        {
          if ("mousedown" === cH.type && 0 !== cH.button) {
            return;
          }
          cH.preventDefault();
          Im = true;
          IQ = false;
          Ik = false;
          IK.classList.add("dragging");
          const cO = cH.touches ? cH.touches[0] : cH;
          IE = cO.clientX;
          IX = cO.clientY;
          const cj = IK.getBoundingClientRect();
          IG = cj.left + cj.width / 2;
          IA = cj.top + cj.height / 2;
          Ix = setTimeout(() => {
            {
              IQ || (Ik = true, (() => {
                {
                  TR.theme = "light" === TR.theme ? "dark" : "light";
                  localStorage.setItem(TN, TR.theme);
                  const cb = document.getElementById("qa-root");
                  cb && cb.setAttribute("data-theme", TR.theme);
                }
              })(), TQ("dark" === TR.theme ? "已切换到暗色主题" : "已切换到亮色主题", "success"));
            }
          }, 500);
        }
      };
      const IL = cH => {
        if (!Im) {
          return;
        }
        cH.preventDefault();
        const ch = cH.touches ? cH.touches[0] : cH;
        const cO = ch.clientX - IE;
        const cj = ch.clientY - IX;
        (Math.abs(cO) > 5 || Math.abs(cj) > 5) && (IQ = true, Ix && (clearTimeout(Ix), Ix = null));
        IC(IG + cO, IA + cj);
      };
      const Id = () => {
        {
          if (Im) {
            {
              if (Im = false, IK.classList.remove("dragging"), Ix && (clearTimeout(Ix), Ix = null), IQ) {
                const cH = IK.getBoundingClientRect();
                const ch = cH.left + cH.width / 2;
                const cO = cH.top + cH.height / 2;
                const cj = ch / window.innerWidth * 100;
                const cq = cO / window.innerHeight * 100;
                const cw = {
                  x: cj,
                  y: cq
                };
                const cb = {
                  percentX: cj,
                  percentY: cq
                };
                IW = cw;
                localStorage.setItem(TF, JSON.stringify(cb));
              }
              if (!IQ && !Ik) {
                {
                  const cf = document.getElementById("qa-panel");
                  const cK = !cf.classList.contains("show");
                  cf.classList.toggle("show");
                  cK && (Iv || (Iv = true, IB || (IB = true, setTimeout(() => {
                    Td("💡 长按二级菜单标题调整菜单顺序", 2000);
                  }, 500))), TR.activePage && IU(TR.activePage));
                }
              }
            }
          }
        }
      };
      const c0 = {
        passive: false
      };
      const c1 = {
        passive: false
      };
      ID(IK, "mousedown", Ig);
      ID(IK, "touchstart", Ig, c0);
      ID(document, "mousemove", IL);
      ID(document, "touchmove", IL, c1);
      ID(document, "mouseup", Id);
      ID(document, "touchend", Id);
      let c2 = null;
      ID(window, "resize", () => {
        c2 && clearTimeout(c2);
        c2 = setTimeout(() => {
          IW && Iy();
        }, 300);
      });
      const c3 = document.createElement("div");
      c3.id = "qa-panel";
      c3.className = "panel-shell";
      c3.innerHTML = "\n    <div class=\"panel-header\">\n      <div class=\"menu-nav\" id=\"qa-menu-nav\">\n        " + Tm().map(cH => {
        const ch = TY.find(cO => cO.id === cH);
        return ch ? "\n      <div class=\"menu-item " + (ch.id === Ty ? "active" : "") + "\" data-page=\"" + ch.id + "\">\n        <span class=\"menu-icon\">" + ch.icon + "</span>" + ch.label + "\n      </div>" : "";
      }).join("") + "\n      </div>\n    </div>\n    <div class=\"content-wrapper\">\n      <div class=\"content-area\">\n        " + TE.map(cH => "\n  <div class=\"page-content " + (cH === Ty ? "active" : "") + "\" id=\"page-" + cH + "\">\n    " + (TG[cH] ? TG[cH]() : "<div class=\"card\"><div class=\"card-body\">暂无内容</div></div>") + "\n  </div>\n").join("") + "\n      </div>\n    </div>\n    <div class=\"qa-watermark\" id=\"qa-watermark\"></div>\n  ";
      If.appendChild(IK);
      If.appendChild(c3);
      document.body.appendChild(If);
      (() => {
        const cH = RV();
        cH && "1" !== cH.dataset.inited && (cH.dataset.inited = "1", RJ());
      })();
      If.setAttribute("data-theme", TR.theme);
      const c4 = document.getElementById("qa-menu-nav");
      c4 && TR.menuCollapsed && c4.classList.toggle("collapsed", TR.menuCollapsed);
      let c5 = null;
      let c6 = null;
      let c7 = 0;
      let c8 = null;
      let c9 = false;
      let cP = false;
      const cD = () => !!c4 && c4.scrollWidth > c4.clientWidth + 1;
      const cv = () => {
        cP = true;
        setTimeout(() => {
          {
            cP = false;
          }
        }, 350);
      };
      const cB = cH => {
        const ch = cH.touches[0];
        c5 = ch.clientX;
        c6 = ch.clientY;
        c7 = c4?.["scrollLeft"] || 0;
        c8 = null;
        c9 = false;
      };
      const cz = cH => {
        if (null === c5 || null === c6) {
          return;
        }
        const ch = cH.touches[0];
        const cO = ch.clientX - c5;
        const cj = ch.clientY - c6;
        c8 || (Math.abs(cO) > 8 && Math.abs(cO) > Math.abs(cj) ? c8 = "horizontal" : Math.abs(cj) > 8 && Math.abs(cj) > Math.abs(cO) && (c8 = "vertical"));
        "horizontal" === c8 && (Math.abs(cO) > 3 && (c9 = true), cD() && (c4.scrollLeft = c7 - cO), cH.preventDefault());
      };
      const cM = cH => {
        if (null !== c5 && null !== c6) {
          {
            if (cH.changedTouches && cH.changedTouches.length > 0) {
              const cj = cH.changedTouches[0];
              const cq = cj.clientX - c5;
              const cw = cj.clientY - c6;
              if (!cD() && Math.abs(cq) > 50 && Math.abs(cq) > Math.abs(cw)) {
                {
                  const cb = TR.activePage;
                  const cI = TE.indexOf(cb);
                  cq < 0 && cI < TE.length - 1 ? IZ(TE[cI + 1]) : cq > 0 && cI > 0 && IZ(TE[cI - 1]);
                  cv();
                }
              } else {
                c9 && cv();
              }
            }
            c5 = null;
            c6 = null;
            c8 = null;
            c9 = false;
          }
        }
      };
      if (c4) {
        {
          const cH = {
            passive: true
          };
          const ch = {
            passive: false
          };
          const cO = {
            passive: true
          };
          c4.addEventListener("touchstart", cB, cH);
          c4.addEventListener("touchmove", cz, ch);
          c4.addEventListener("touchend", cM, cO);
          let cj = false;
          let cq = 0;
          let cw = 0;
          let cb = false;
          c4.addEventListener("mousedown", cI => {
            0 === cI.button && (cj = true, cb = false, cq = cI.clientX, cw = c4.scrollLeft, c4.classList.add("dragging"), cI.preventDefault());
          });
          document.addEventListener("mousemove", cI => {
            if (!cj) {
              return;
            }
            const cf = cI.clientX - cq;
            Math.abs(cf) > 3 && (cb = true);
            c4.scrollLeft = cw - cf;
            cI.preventDefault();
          });
          document.addEventListener("mouseup", () => {
            cj && (cj = false, c4.classList.remove("dragging"), cb && cv());
          });
        }
      }
      c3.addEventListener("click", cf => {
        if (cP && cf.target.closest("#qa-menu-nav")) {
          cf.preventDefault();
          return void cf.stopPropagation();
        }
        const cW = cf.target.closest(".card-header");
        if (cW) {
          {
            const cA = cW.closest(".card[data-collapsible]");
            if (cA && !cf.target.closest("button") && !cf.target.closest("input")) {
              const cQ = cA.classList.contains("collapsed");
              if (cA.classList.toggle("collapsed"), cQ) {
                {
                  const cx = cA.dataset.cardId;
                  !cx || "tower" !== cx && cA.dataset.loaded || IN(cx, cA);
                }
              }
              return;
            }
          }
        }
        const cC = cf.target.closest("[data-changelog-toggle]");
        if (cC) {
          const cg = cC.closest(".changelog-version");
          if (cg) {
            return void cg.classList.toggle("collapsed");
          }
        }
        const cy = cf.target.closest(".menu-item");
        if (cy) {
          {
            const cL = cy.getAttribute("data-page");
            return void (cL && IZ(cL));
          }
        }
        const cY = cf.target.closest(".qa-box-option");
        if (cY) {
          {
            const f1 = Number(cY.getAttribute("data-itemid")) || 2001;
            document.querySelectorAll(".qa-box-option").forEach(f5 => f5.classList.toggle("selected", f5 === cY));
            const f2 = document.getElementById("qa-box-itemid");
            f2 && (f2.value = String(f1));
            const f3 = IS(f1);
            const f4 = document.getElementById("qa-box-count");
            if (f4) {
              {
                f4.max = String(Math.max(f3, 10));
                const f5 = Number(f4.value);
                if (Number.isFinite(f5) && f3 > 0 && f5 > f3) {
                  {
                    const f6 = Math.max(10 * Math.floor(f3 / 10), 10);
                    f4.value = String(f6);
                  }
                }
              }
            }
            return void IT();
          }
        }
        const cm = cf.target.closest(".qa-torch-option");
        if (cm) {
          {
            const f9 = Number(cm.getAttribute("data-itemid")) || 1008;
            document.querySelectorAll(".qa-torch-option").forEach(fB => fB.classList.toggle("selected", fB === cm));
            const fP = document.getElementById("qa-torch-itemid");
            fP && (fP.value = String(f9));
            const fD = IS(f9);
            const fv = document.getElementById("qa-torch-quantity");
            if (fv) {
              fv.max = String(Math.max(fD, 1));
              const fB = Number(fv.value);
              Number.isFinite(fB) && fD > 0 && fB > fD && (fv.value = String(fD));
            }
            return;
          }
        }
        const cE = cf.target.closest(".qa-fish-option");
        if (cE) {
          const fM = Number(cE.getAttribute("data-type")) || 1;
          document.querySelectorAll(".qa-fish-option").forEach(fZ => fZ.classList.toggle("selected", fZ === cE));
          const fS = document.getElementById("qa-fish-type");
          fS && (fS.value = String(fM));
          const fT = IS(2 === fM ? 1012 : 1011);
          const fR = document.getElementById("qa-fish-count");
          if (fR) {
            fR.max = String(Math.max(fT, 10));
            const fZ = Number(fR.value);
            if (Number.isFinite(fZ) && fT > 0 && fZ > fT) {
              {
                const fU = Math.max(10 * Math.floor(fT / 10), 10);
                fR.value = String(fU);
              }
            }
          }
          return void IT();
        }
        const cX = cf.target.closest("[data-action]");
        cX && I8(cX);
      });
      c3.addEventListener("change", async cf => {
        {
          const cC = cf.target;
          if (cC && cC.hasAttribute("data-task")) {
            const cy = document.getElementById("qa-daily-select-all");
            if (cy) {
              {
                const cm = document.querySelectorAll("#page-daily-tasks input[data-task]");
                const cE = Array.from(cm).every(cX => cX.checked);
                cy.checked = cE;
              }
            }
          }
          if (cC && "qa-fish-free" === cC.id && IT(), cC && "qa-top-rank-page-size" === cC.id) {
            const {
              handleTopRankPageSizeChange: cX
            } = await Promise.resolve().then(function () {
              return uY;
            });
            cX(cC.value);
          } else {
            if (cC && "qa-club-rank-page-size" === cC.id) {
              {
                const {
                  handleClubRankPageSizeChange: cA
                } = await Promise.resolve().then(function () {
                  {
                    return uY;
                  }
                });
                cA(cC.value);
              }
            } else {
              if (cC && "qa-gold-rank-page-size" === cC.id) {
                {
                  const {
                    handleGoldRankPageSizeChange: cQ
                  } = await Promise.resolve().then(function () {
                    {
                      return uY;
                    }
                  });
                  cQ(cC.value);
                }
              }
            }
          }
          if (cC && "qa-schedule-enabled" === cC.id) {
            const ck = ZH();
            ck.enabled = cC.checked;
            Zh(ck);
            cC.checked ? ZK() : ZW();
            Zy();
          }
        }
      });
      c3.addEventListener("click", cf => {
        {
          const cW = cf.target.closest("[data-task-toggle]");
          if (cW) {
            {
              const cC = cW.closest("[data-collapsible-task]");
              cC && cC.classList.toggle("expanded");
            }
          }
        }
      });
      c3.addEventListener("input", cf => {
        const cK = cf.target;
        cK && ("qa-box-count" !== cK.id && "qa-fish-count" !== cK.id || IT());
      });
      document.getElementById("qa-menu-toggle")?.["addEventListener"]("click", () => {
        TR.menuCollapsed = !TR.menuCollapsed;
        localStorage.setItem(Tu, String(TR.menuCollapsed));
        c4 && c4.classList.toggle("collapsed", TR.menuCollapsed);
      });
      IZ(Ty);
      (() => {
        {
          try {
            const cW = localStorage.getItem("qa-daily-settings");
            return cW ? (TR.dailySettings = JSON.parse(cW) || {}, TR.dailySettings) : TR.dailySettings = {};
          } catch {
            {
              TR.dailySettings = {};
              return {};
            }
          }
        }
      })();
      (() => {
        const cK = document.getElementById("qa-daily-select-all");
        if (!cK) {
          return;
        }
        const cW = () => {
          {
            const cy = document.querySelectorAll("#page-daily input[data-task]");
            const cY = Array.from(cy).every(cm => cm.checked);
            cK.checked = cY;
          }
        };
        cK.addEventListener("change", () => {
          document.querySelectorAll("#page-daily input[data-task]").forEach(cC => cC.checked = cK.checked);
        });
        document.querySelectorAll("#page-daily input[data-task]").forEach(cC => {
          cC.addEventListener("change", cW);
        });
        cW();
      })();
      (() => {
        {
          const cW = document.getElementById("qa-hero-upgrade-input");
          const cC = document.getElementById("qa-hero-upgrade-select");
          const cy = document.getElementById("qa-hero-upgrade-dropdown");
          cW && cy && (cW.addEventListener("focus", () => {
            {
              wd(cW.value);
            }
          }), cW.addEventListener("input", cY => {
            wd(cY.target.value);
          }), cy.addEventListener("click", cY => {
            const cE = cY.target.closest(".qa-autocomplete-item");
            if (cE && !cE.classList.contains("disabled")) {
              const cX = parseInt(cE.dataset.heroId, 10);
              const cG = cE.dataset.label;
              cW.value = cG;
              cC.value = cX;
              b0();
              (cA => {
                const cQ = document.getElementById("qa-hero-upgrade-info");
                const cx = document.getElementById("qa-hero-upgrade-level");
                const ck = document.getElementById("qa-hero-upgrade-attack");
                const cg = document.getElementById("qa-hero-upgrade-speed");
                if (document.getElementById("qa-hero-upgrade-order-btn"), document.getElementById("qa-hero-upgrade-tip"), !cA) {
                  cQ.style.display = "none";
                  return void (wN = null);
                }
                if (wN = cA, !window.ROLE?.["heroes"]) {
                  TQ("数据未就绪", "warning");
                  return void (cQ.style.display = "none");
                }
                const cL = RM(window.ROLE.heroes, cA);
                cL ? (cQ.style.display = "block", cx.textContent = (cL.level || 0) + "/6000", ck.textContent = cL.attack || 0, cg.textContent = cL.speed || 0, wk(cL)) : cQ.style.display = "none";
              })(cX);
            }
          }), document.addEventListener("click", cY => {
            const cm = document.getElementById("qa-hero-upgrade-autocomplete");
            cm && !cm.contains(cY.target) && b0();
          }), cW.addEventListener("keydown", cY => {
            {
              const cG = cy.querySelectorAll(".qa-autocomplete-item:not(.disabled)");
              const cA = cy.querySelector(".qa-autocomplete-item.active");
              let cQ = -1;
              if (cA && (cQ = Array.from(cG).indexOf(cA)), "ArrowDown" === cY.key) {
                if (cY.preventDefault(), "none" === cy.style.display) {
                  wd(cW.value);
                } else {
                  {
                    const ck = cQ < cG.length - 1 ? cQ + 1 : 0;
                    b2(cG, ck);
                  }
                }
              } else {
                if ("ArrowUp" === cY.key) {
                  cY.preventDefault();
                  const cg = cQ > 0 ? cQ - 1 : cG.length - 1;
                  b2(cG, cg);
                } else {
                  "Enter" === cY.key ? (cY.preventDefault(), cA && cA.click()) : "Escape" === cY.key && b0();
                }
              }
            }
          }));
        }
      })();
      RN("--");
      TR.monthlyActivity = null;
      TR.monthlyFishRunning = false;
      TR.monthlyArenaRunning = false;
      TR.warguessRankData = null;
      TR.warguessRunning = false;
      TR.bossTower = null;
      TR.bossTowerRunning = false;
      (() => {
        const cf = ZH();
        TR.scheduleConfig = cf;
        cf.enabled && ZK();
        Zy();
      })();
      const {
        initTreasureAssist: cS
      } = await Promise.resolve().then(function () {
        {
          return Ih;
        }
      });
      const {
        initDreamModule: cT
      } = await Promise.resolve().then(function () {
        return nS;
      });
      const {
        initCoopAssist: cR
      } = await Promise.resolve().then(function () {
        return by;
      });
      cS();
      cT();
      cR();
      setTimeout(() => (() => {
        const cf = document.getElementById("qa-salt-match-date");
        cf && !cf._datePicker && (cf._datePicker = new I9(cf, {
          weekendOnly: true,
          onChange: cy => {}
        }));
        const cK = document.getElementById("qa-battle-date");
        const cW = {
          weekendOnly: true,
          onChange: cy => {}
        };
        cK && !cK._datePicker && (cK._datePicker = new I9(cK, cW));
        const cC = document.getElementById("qa-peachtree-date");
        if (cC && !cC._datePicker) {
          {
            const cY = new Date();
            const cm = cY.getDay();
            const cE = new Date(cY);
            0 === cm ? cE.setDate(cY.getDate()) : cE.setDate(cY.getDate() - cm);
            const cX = cE.getFullYear() + "-" + String(cE.getMonth() + 1).padStart(2, "0") + "-" + String(cE.getDate()).padStart(2, "0");
            const cG = {
              weekendOnly: false,
              onChange: cA => {}
            };
            cC.value || (cC.value = cX);
            cC._datePicker = new I9(cC, cG);
          }
        }
      })(), 100);
      (() => {
        {
          let cK = null;
          let cW = false;
          const cC = cE => {
            {
              const cG = cE.target.closest("[data-long-press-info]");
              if (!cG) {
                return;
              }
              const cA = cG.getAttribute("data-long-press-info");
              cA && (cW = false, cK = setTimeout(() => {
                const cQ = cA.replace(/&#10;/g, "\n");
                cY(cQ);
                cW = true;
              }, 1500));
            }
          };
          const cy = cE => {
            cK && (clearTimeout(cK), cK = null);
            cW && (cE.preventDefault(), cE.stopPropagation(), cW = false);
          };
          const cY = cE => {
            {
              const cG = document.createElement("div");
              cG.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.7);\n      z-index: 999999;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      box-sizing: border-box;\n    ";
              const cA = document.createElement("div");
              cA.style.cssText = "\n      background: #1e293b;\n      border-radius: 12px;\n      padding: 20px;\n      max-width: 90%;\n      max-height: 70vh;\n      overflow-y: auto;\n      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n    ";
              const cQ = document.createElement("div");
              cQ.textContent = "功能说明";
              cQ.style.cssText = "\n      font-size: 16px;\n      font-weight: bold;\n      color: #fff;\n      margin-bottom: 15px;\n      text-align: center;\n    ";
              const cx = document.createElement("div");
              cx.textContent = cE;
              cx.style.cssText = "\n      color: #cbd5e1;\n      font-size: 14px;\n      line-height: 1.6;\n      white-space: pre-wrap;\n      margin-bottom: 15px;\n    ";
              const ck = document.createElement("button");
              ck.textContent = "关闭";
              ck.style.cssText = "\n      width: 100%;\n      padding: 12px;\n      background: #3b82f6;\n      color: #fff;\n      border: none;\n      border-radius: 8px;\n      font-size: 14px;\n      font-weight: 600;\n      cursor: pointer;\n    ";
              const cg = () => {
                {
                  document.body.removeChild(cG);
                }
              };
              ck.onclick = cg;
              cG.onclick = cL => {
                cL.target === cG && cg();
              };
              cA.appendChild(cQ);
              cA.appendChild(cx);
              cA.appendChild(ck);
              cG.appendChild(cA);
              document.body.appendChild(cG);
            }
          };
          const cm = {
            passive: true
          };
          document.addEventListener("touchstart", cC, cm);
          document.addEventListener("touchend", cy);
          document.addEventListener("mousedown", cC);
          document.addEventListener("mouseup", cy);
          document.addEventListener("mouseleave", cy);
        }
      })();
      (() => {
        {
          const cf = () => {
            if (window.ROLE?.["roleId"] || window.ROLE?.["id"]) {
              {
                const cy = window.ROLE.roleId || window.ROLE.id;
                TR.roleId = cy;
                TR.items = window.ROLE.items || {};
                RJ();
                Rw();
              }
            } else {
              setTimeout(cf, 500);
            }
          };
          cf();
        }
      })();
    }
  };
  const IZ = Ib => {
    TR.activePage = Ib;
    const If = document.getElementById("qa-panel");
    if (!If) {
      return;
    }
    If.querySelectorAll(".menu-item").forEach(IW => {
      {
        IW.classList.toggle("active", IW.getAttribute("data-page") === Ib);
      }
    });
    If.querySelectorAll(".page-content").forEach(IW => {
      {
        IW.classList.toggle("active", IW.id === "page-" + Ib);
      }
    });
    const IK = If.querySelector(".page-content.active");
    IK && Promise.resolve().then(function () {
      {
        return Iw;
      }
    }).then(({
      initCardReordering: IW,
      loadCardOrder: IC
    }) => {
      IC(IK);
      IW(IK);
    });
    Iv && IU(Ib);
  };
  const IU = async Ib => {
    try {
      {
        switch (Ib) {
          case "daily":
            if (window.ROLE) {
              Rp(window.ROLE.dailyTask);
            } else {
              const IK = (IW = 10) => {
                window.ROLE ? Rp(window.ROLE.dailyTask) : IW > 0 && setTimeout(() => IK(IW - 1), 500);
              };
              IK();
            }
            break;
          case "toolbox":
          case "activity":
            break;
          case "tower":
            Z3();
            break;
          case "club":
            {
              {
                const {
                  initSaltMatchDate: IW
                } = await Promise.resolve().then(function () {
                  return HR;
                });
                const {
                  initBattleDate: IC
                } = await Promise.resolve().then(function () {
                  return Oq;
                });
                const {
                  updateTimeStatus: Iy
                } = await Promise.resolve().then(function () {
                  {
                    return h6;
                  }
                });
                IW();
                IC();
                Iy();
                break;
              }
            }
          case "schedule":
            Zy();
        }
      }
    } catch (Im) {}
  };
  const IN = async (Ib, II) => {
    try {
      switch (Ib) {
        case "team":
          {
            const {
              refreshTeamInfo: IK
            } = await Promise.resolve().then(function () {
              return nb;
            });
            const IW = {
              silent: true
            };
            await IK(IW);
            break;
          }
        case "daily-status":
          if (window.ROLE?.["dailyTask"]?.["complete"] && RT(window.ROLE.dailyTask.complete)) {
            Rp(window.ROLE.dailyTask);
          } else {
            {
              const {
                refreshRoleInfo: IC
              } = await Promise.resolve().then(function () {
                {
                  return RA;
                }
              });
              const Iy = await IC();
              Rp(Iy?.["dailyTask"]);
            }
          }
          break;
        case "hangup":
          if (window.ROLE?.["hangUp"]) {
            RL(window.ROLE);
          } else {
            const Im = await Rz("role_getroleinfo", {});
            RL(Im?.["role"] || Im);
          }
          break;
        case "bottle":
          if (window.ROLE?.["bottle"]) {
            Rx(window.ROLE);
          } else {
            const IE = await Rz("role_getroleinfo", {});
            Rx(IE?.["role"] || IE);
          }
          break;
        case "tower":
          try {
            {
              await Rz("tower_getinfo", {}, "爬塔-获取信息");
            }
          } catch (IG) {}
          Z3();
          break;
        case "torch":
          {
            const {
              updateTorchCounts: IA,
              updateTorchStatus: IQ
            } = await Promise.resolve().then(function () {
              return bd;
            });
            if (window.ROLE) {
              IA(window.ROLE.items);
              IQ(window.ROLE);
            } else {
              const Ix = await Rz("role_getroleinfo", {});
              const Ik = Ix?.["role"] || Ix;
              Ik && (IA(Ik.items), IQ(Ik));
            }
            break;
          }
        case "daily-fix":
        case "arena":
        case "hero-upgrade":
        case "star-upgrade":
          break;
        case "club-info":
          {
            const {
              fetchClubInfo: Ig
            } = await Promise.resolve().then(function () {
              {
                return UP;
              }
            });
            await Ig();
            break;
          }
        case "car":
          {
            const {
              fetchCarInfo: IL
            } = await Promise.resolve().then(function () {
              {
                return Jg;
              }
            });
            await IL();
            break;
          }
        case "box":
        case "fish":
          window.ROLE?.["items"] && (TR.items = window.ROLE.items, Ru(window.ROLE.items, "toolbox"), IT());
          Nw(document.getElementById("page-toolbox") || document);
          break;
        case "quench":
          window.ROLE?.["items"] && (TR.items = window.ROLE.items, Ru(window.ROLE.items, "jade"));
          Nw(document.getElementById("page-toolbox") || document);
          break;
        case "monthly":
          (await Zx()) && Zk();
          break;
        case "boss-tower":
          await Fu();
          Fp();
          break;
        case "warguess":
          U1();
          break;
        case "consumption":
          {
            const {
              fetchConsumptionData: Id
            } = await Promise.resolve().then(function () {
              return OT;
            });
            await Id();
            break;
          }
        case "skin-tower":
          {
            const {
              fetchSkinTowersInfo: c0
            } = await Promise.resolve().then(function () {
              return j4;
            });
            await c0();
            break;
          }
        case "weird-tower":
          {
            const {
              checkBlackMarketWeek: c1,
              updateWeirdTowerAvailability: c2,
              refreshWeirdTowerInfo: c3
            } = await Promise.resolve().then(function () {
              return wD;
            });
            const c4 = await c1();
            c2(c4);
            c4 && (await c3());
            break;
          }
        case "dream":
          {
            {
              const {
                initDreamModule: c6
              } = await Promise.resolve().then(function () {
                return nS;
              });
              c6();
              break;
            }
          }
        case "legacy":
          {
            {
              const c8 = await Rz("legacy_getinfo", {}, "获取功法绝学信息");
              Z1(c8);
              break;
            }
          }
      }
      II.dataset.loaded = "1";
    } catch (c9) {}
  };
  const Iu = () => {
    {
      const II = {
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
        pvpRunning: false,
        secondPassword: "",
        isPasswordValidated: false
      };
      T0 = II;
      const If = localStorage.getItem(TN);
      If && (TR.theme = If);
      const IK = localStorage.getItem(Tu);
      IK ? TR.menuCollapsed = "true" === IK : window.innerWidth <= 768 && (TR.menuCollapsed = true);
      IR();
      setTimeout(() => {
        qB().catch(() => {});
      }, 2000);
    }
  };
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", Iu) : Iu();
  const IF = {
    __proto__: null,
    VMInterpreterWasm: undefined
  };
  var Ip = Object.freeze(IF);
  const IV = {
    attempted: 0,
    success: 0,
    fail: 0
  };
  const IJ = "treasure-assist-settings";
  const IH = {
    isRunning: false,
    stats: IV,
    delay: 1500,
    loadSettings() {
      try {
        const Ib = localStorage.getItem(IJ);
        return Ib ? JSON.parse(Ib) : null;
      } catch {
        return null;
      }
    },
    saveSettings() {
      {
        try {
          {
            const II = {
              checkboxStates: {},
              switchTeam: document.getElementById("treasure-switch")?.["checked"] || false,
              teamId: document.getElementById("treasure-team")?.["value"] || "1"
            };
            document.querySelectorAll("input[name=\"treasure-level\"]").forEach(If => {
              II.checkboxStates[If.value] = If.checked;
            });
            localStorage.setItem(IJ, JSON.stringify(II));
          }
        } catch (IK) {
          console.error("保存宝库助战配置失败:", IK);
        }
      }
    },
    applySettingsToUI() {
      const Ib = this.loadSettings();
      if (!Ib) {
        return void document.querySelectorAll("input[name=\"treasure-level\"]").forEach(IK => {
          IK.checked = true;
        });
      }
      Ib.checkboxStates && document.querySelectorAll("input[name=\"treasure-level\"]").forEach(IK => {
        Ib.checkboxStates.hasOwnProperty(IK.value) && (IK.checked = Ib.checkboxStates[IK.value]);
      });
      const II = document.getElementById("treasure-switch");
      II && (II.checked = Ib.switchTeam || false);
      const If = document.getElementById("treasure-team");
      If && (If.value = Ib.teamId || "1", If.disabled = !Ib.switchTeam);
    },
    getSelectedLevels() {
      {
        const If = document.querySelectorAll("input[name=\"treasure-level\"]:checked");
        const IK = [];
        If.forEach(IW => {
          {
            "below_7" === IW.value ? [1, 2, 3, 4, 5, 6].forEach(Iy => IK.push(Iy)) : IK.push(parseInt(IW.value, 10));
          }
        });
        return [...new Set(IK)];
      }
    },
    log(Ib) {
      {
        const If = document.getElementById("treasure-log");
        if (!If) {
          return;
        }
        const IK = new Date().toLocaleTimeString();
        If.innerHTML = "<div>" + IK + ": " + Ib + "</div>" + If.innerHTML;
      }
    },
    updateStats() {
      {
        const IK = document.getElementById("treasure-attempted");
        const IW = document.getElementById("treasure-success");
        const IC = document.getElementById("treasure-fail");
        IK && (IK.textContent = this.stats.attempted);
        IW && (IW.textContent = this.stats.success);
        IC && (IC.textContent = this.stats.fail);
      }
    },
    async start() {
      {
        if (this.isRunning) {
          return;
        }
        this.isRunning = true;
        const II = document.getElementById("treasure-start-btn");
        const If = document.querySelectorAll("input[name=\"treasure-level\"]");
        const IK = document.getElementById("treasure-switch");
        const IW = document.getElementById("treasure-team");
        const IC = {
          attempted: 0,
          success: 0,
          fail: 0
        };
        II && (II.textContent = "停止助战");
        If.forEach(Iy => Iy.disabled = true);
        IK && (IK.disabled = true);
        IW && (IW.disabled = true);
        this.stats = IC;
        this.updateStats();
        this.log("脚本启动");
        this.loop();
      }
    },
    stop() {
      this.isRunning = false;
      const Ib = document.getElementById("treasure-start-btn");
      const II = document.querySelectorAll("input[name=\"treasure-level\"]");
      const If = document.getElementById("treasure-switch");
      const IK = document.getElementById("treasure-team");
      Ib && (Ib.textContent = "开始助战");
      II.forEach(IW => IW.disabled = false);
      If && (If.disabled = false);
      IK && If?.["checked"] && (IK.disabled = false);
      this.log("脚本停止");
    },
    async loop() {
      {
        if (!this.isRunning) {
          return;
        }
        const If = this.getSelectedLevels();
        if (0 === If.length) {
          this.log("未选择层数");
          return void this.stop();
        }
        try {
          this.log("查找房间 " + If.join(","));
          const IK = await Rz("bosstower_gethall", {});
          const IW = IK?.["_rawData"] || IK;
          const IC = (IW?.["recommendRoleList"] || []).find(Iy => If.includes(Iy.towerId));
          if (IC) {
            this.log("找到房间 " + IC.towerId + " 层");
            this.stats.attempted++;
            const Iy = document.getElementById("treasure-switch");
            const IY = document.getElementById("treasure-team");
            const Im = parseInt(IY?.["value"] || "1", 10);
            Iy?.["checked"] && (this.log("切换阵容 " + Im), await Rz("presetteam_saveteam", {
              teamId: Im
            }));
            const IE = await Rz("presetteam_getinfo", {});
            const IX = IE?.["_rawData"] || IE;
            const IG = IX?.["presetTeamInfo"]?.["presetTeamInfo"] || IX?.["presetTeamInfo"] || {};
            const IA = Iy?.["checked"] ? Im : IX?.["presetTeamInfo"]?.["useTeamId"] || 1;
            const IQ = IG[String(IA)];
            if (!IQ?.["teamInfo"]) {
              throw new Error("预设阵容获取失败");
            }
            const Ix = IQ.teamInfo;
            const Ik = IQ.weapon?.["weaponId"];
            if (!Ik) {
              throw new Error("武器信息获取失败");
            }
            const Ig = {};
            for (const c3 in Ix) {
              {
                const c5 = Ix[c3]?.["heroId"];
                c5 && (Ig[c3] = c5);
              }
            }
            if (Object.keys(Ig).length < 1) {
              throw new Error("阵容为空");
            }
            const IL = {
              name: "",
              notice: "",
              secret: 0,
              apply: 0,
              applyList: []
            };
            const Id = {
              teamCfgId: 6,
              setting: IL,
              param: 0,
              custom: {
                leaderId: String(IC.id),
                teamId: IC.teamId
              }
            };
            const c0 = await Rz("matchteam_create", Id);
            const c1 = c0?.["_rawData"] || c0;
            if (!(c1?.["teamInfo"]?.["fightRoleBase"] || []).length) {
              throw new Error("进房失败");
            }
            const c2 = {
              battleTeam: Ig,
              lordWeaponId: Ik,
              teamType: 11,
              cCMonsterId: 0
            };
            await Rz("team_setteam", c2);
            this.stats.success++;
            this.log("助战成功 " + IC.towerId + " 层 (阵容" + IA + ")");
          } else {
            this.log("未找到房间");
          }
        } catch (c6) {
          this.log("错误: " + c6.message);
          this.stats.fail++;
        } finally {
          this.updateStats();
          Z7(() => this.loop(), this.delay, "treasure-assist-loop");
        }
      }
    },
    handleClick() {
      {
        this.isRunning ? this.stop() : this.start();
      }
    }
  };
  var Ih = Object.freeze({
    __proto__: null,
    TreasureAssist: IH,
    initTreasureAssist: () => {
      {
        IH.applySettingsToUI();
        document.querySelectorAll("input[name=\"treasure-level\"]").forEach(IC => {
          IC.addEventListener("change", () => IH.saveSettings());
        });
        const If = document.getElementById("treasure-switch");
        const IK = document.getElementById("treasure-team");
        const IW = document.getElementById("treasure-start-btn");
        If && IK && If.addEventListener("change", IC => {
          IK.disabled = !IC.target.checked;
          IH.saveSettings();
        });
        IK && IK.addEventListener("change", () => IH.saveSettings());
        IW && IW.addEventListener("click", () => IH.handleClick());
      }
    }
  });
  const IO = new Set();
  const Ij = (Ib, II, If) => {
    document.addEventListener(Ib, II, If);
    IO.add({
      event: Ib,
      handler: II,
      options: If
    });
  };
  const Iq = (Ib, II, If) => {
    document.removeEventListener(Ib, II, If);
    for (const IK of IO) if (IK.event === Ib && IK.handler === II) {
      IO.delete(IK);
      break;
    }
  };
  "undefined" != typeof window && window.addEventListener("beforeunload", () => {
    {
      for (const {
        event: Ib,
        handler: II,
        options: If
      } of IO) document.removeEventListener(Ib, II, If);
      IO.clear();
    }
  });
  var Iw = Object.freeze({
    __proto__: null,
    initCardReordering: Ib => {
      if (!Ib) {
        return;
      }
      let If = null;
      let IK = null;
      let IW = false;
      const IC = IY => {
        if (!IW || !If) {
          return;
        }
        IY.preventDefault();
        const Im = {
          offset: Number.NEGATIVE_INFINITY
        };
        const IE = IY.type.startsWith("touch") ? IY.touches[0].clientY : IY.clientY;
        IG = IE;
        const IX = [...Ib.querySelectorAll(".card[data-collapsible]:not(.dragging)")].reduce((IA, IQ) => {
          const Ix = IQ.getBoundingClientRect();
          const Ik = IG - Ix.top - Ix.height / 2;
          return Ik < 0 && Ik > IA.offset ? {
            offset: Ik,
            element: IQ
          } : IA;
        }, Im).element;
        var IG;
        null == IX ? Ib.appendChild(If) : Ib.insertBefore(If, IX);
      };
      const Iy = () => {
        const IY = {
          passive: false
        };
        IK && (Z8(IK), IK = null);
        IW && If && (If.classList.remove("dragging"), If.style.opacity = "", (Im => {
          const IX = [...Im.querySelectorAll(".card[data-collapsible]")].map(IA => {
            {
              const Ix = IA.querySelector(".card-title")?.["textContent"]?.["trim"]();
              return Ix;
            }
          }).filter(Boolean);
          const IG = Im.id?.["replace"]("page-", "");
          if (IG) {
            const IA = "qa-card-order-" + IG;
            localStorage.setItem(IA, JSON.stringify(IX));
          }
        })(Ib));
        IW = false;
        If = null;
        Iq("mousemove", IC);
        Iq("mouseup", Iy);
        Iq("touchmove", IC, IY);
        Iq("touchend", Iy);
      };
      Ib.querySelectorAll(".card[data-collapsible]").forEach(IY => {
        const IE = IA => {
          (IA.type.startsWith("touch") ? IA.touches[0].target : IA.target).closest(".card-title") && (IK = Z7(() => {
            {
              const Ik = {
                passive: false
              };
              IW = true;
              If = IY;
              IY.classList.add("dragging");
              IY.style.opacity = "0.5";
              Ij("mousemove", IC);
              Ij("mouseup", Iy);
              Ij("touchmove", IC, Ik);
              Ij("touchend", Iy);
            }
          }, 1000, "card-longpress"));
        };
        const IX = () => {
          {
            IK && (Z8(IK), IK = null);
          }
        };
        const IG = {
          passive: true
        };
        IY.addEventListener("mousedown", IE);
        IY.addEventListener("touchstart", IE, IG);
        IY.addEventListener("mouseup", IX);
        IY.addEventListener("touchend", IX);
        IY.addEventListener("mouseleave", IX);
      });
    },
    loadCardOrder: Ib => {
      if (!Ib) {
        return;
      }
      const II = Ib.id?.["replace"]("page-", "");
      if (!II) {
        return;
      }
      const If = "qa-card-order-" + II;
      const IK = localStorage.getItem(If);
      if (IK) {
        try {
          {
            const IW = JSON.parse(IK);
            const IC = [...Ib.querySelectorAll(".card[data-collapsible]")];
            IW.forEach((Iy, IY) => {
              const Im = IC.find(IE => IE.querySelector(".card-title")?.["textContent"]?.["trim"]() === Iy);
              Im && Ib.appendChild(Im);
            });
          }
        } catch (IY) {}
      }
      ((Im, IE) => {
        "rank" !== IE && "spar" !== IE && Im.querySelectorAll(".card[data-collapsible]").forEach(IA => {
          IA.classList.contains("collapsed") || IA.classList.add("collapsed");
        });
      })(Ib, II);
    }
  });
}();