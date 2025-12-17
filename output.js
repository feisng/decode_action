//Wed Dec 17 2025 07:05:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let aD = false;
function aE(a, b = "info") {
  const d = {
    UiZzv: function (h) {
      return h();
    },
    XAfAK: function (h, i, j) {
      return h(i, j);
    },
    GXXjO: "debug",
    wJcqV: function (h, i) {
      return h === i;
    },
    gQAEP: "function",
    Ymaoe: "aqleT",
    tVkck: "swRnX",
    JKiRR: function (h, i) {
      return h === i;
    },
    PAlVx: "error",
    zyyFR: "success",
    YUQvP: "info",
    zxVTP: function (h, i) {
      return h !== i;
    },
    bSfRH: "slyqB",
    xFKcD: "xhYun",
    wzEKO: function (h, i) {
      return h === i;
    }
  };
  if (window.GVH && typeof window.GVH.logOperation === "function") {
    window.GVH.logOperation(a, b);
  } else {
    if (window.__SHARK__ && window.__SHARK__.logMessage) {
      {
        window.__SHARK__.logMessage(a, b === "error" ? "error" : b === "success" ? "success" : "info");
      }
    } else {
      {
        const i = b === "error" ? "❌" : b === "success" ? "✅" : "ℹ️";
        console.log(i + " " + a);
      }
    }
  }
}
function aF() {
  if (aD) {
    {
      return;
    }
  }
  const b = () => {
    const h = {
      cwwIe: "已暂停",
      ZryQH: "task-status paused",
      FotmE: function (i, j, k) {
        return i(j, k);
      },
      cqUyA: "success"
    };
    {
      if (document.title && document.title.includes("WS已连接")) {
        {
          aD = true;
          aE("检测到游戏标题显示WebSocket已连接，停止检查", "success");
          return;
        }
      }
      if (window.ws && typeof window.ws.sendAsync === "function") {
        {
          if (document.title && !document.title.includes("WS已连接")) {
            {
              document.title += " WS已连接";
            }
          }
          aD = true;
          aE("WebSocket连接成功，已更新游戏标题", "success");
          return;
        }
      }
      if (!aD) {
        setTimeout(b, 2000);
      }
    }
  };
  b();
}
const aG = new Date("2025-12-18T23:59:59");
async function aH() {
  const b = "https://time.akamai.com/";
  try {
    {
      const h = new AbortController();
      const i = setTimeout(() => h.abort(), 5000);
      const j = await fetch(b, {
        method: "HEAD",
        cache: "no-cache",
        signal: h.signal
      });
      clearTimeout(i);
      if (j.ok) {
        {
          const k = j.headers.get("date");
          if (k) {
            const l = new Date(k);
            if (!isNaN(l.getTime())) {
              console.log("✅ 网络时间获取成功:", {
                "服务器": b,
                "网络时间": l.toLocaleString(),
                "本地时间": new Date().toLocaleString()
              });
              return l;
            }
          }
        }
      }
    }
  } catch (n) {
    {
      if (n.name === "AbortError") {
        {
          console.warn("⚠️ Akamai 时间服务器请求超时");
        }
      } else {
        {
          console.warn("⚠️ Akamai 时间服务器获取失败:", n.message);
        }
      }
    }
  }
  console.warn("⚠️ Akamai 时间服务器失败，使用本地时间作为备用方案");
  return new Date();
}
async function aI() {
  try {
    const b = await aH();
    const d = new Date();
    const h = performance.timing ? performance.timing.navigationStart : Date.now();
    const i = Math.abs(b.getTime() - d.getTime());
    if (i > 300000) {
      {
        console.warn("⚠️ 本地时间与网络时间差异过大:", {
          "网络时间": b.toLocaleString(),
          "本地时间": d.toLocaleString(),
          "时间差异": i / 1000 + "秒"
        });
      }
    }
    if (b > aG) {
      {
        const k = "🚫 车辆助手+辣条助手脚本已过期\n\n使用期限: 2025年12月18日 23:59:59\n" + ("网络时间: " + b.toLocaleString() + "\n") + ("本地时间: " + d.toLocaleString() + "\n") + ("页面加载时间: " + new Date(h).toLocaleString() + "\n\n") + "请联系脚本作者获取最新版本";
        alert(k);
        throw new Error("脚本已过期");
      }
    }
    if (aJ(b, d, h)) {
      {
        const n = "🚫 检测到时间篡改行为\n\n过期日期: 2025年12月18日 23:59:59\n" + ("网络时间: " + b.toLocaleString() + "\n") + ("本地时间: " + d.toLocaleString() + "\n") + ("页面加载时间: " + new Date(h).toLocaleString() + "\n\n") + "检测到时间异常，请恢复正确的系统时间";
        alert(n);
        throw new Error("检测到时间篡改行为");
      }
    }
    console.log("✅ 脚本时间验证通过:", {
      "网络时间": b.toLocaleString(),
      "本地时间": d.toLocaleString(),
      "页面加载时间": new Date(h).toLocaleString(),
      "过期日期": aG.toLocaleString()
    });
    return true;
  } catch (o) {
    {
      console.error("❌ 时间验证失败:", o.message);
      throw o;
    }
  }
}
function aJ(a, b, d) {
  const h = {
    Camsx: function (j, k, l) {
      return j(k, l);
    },
    wMNWd: "success",
    BbgNC: function (j, k) {
      return j === k;
    },
    PulUf: "object",
    hauNN: function (j, k) {
      return j !== k;
    },
    lHukU: function (j, k) {
      return j > k;
    },
    hTarh: "辣条助手",
    uiudw: "未从_rawData.roleCar找到carDataMap",
    sZBjs: "warning",
    XJUDy: "车辆改装奖励领取成功",
    uOgvX: function (j, k) {
      return j - k;
    },
    NLShw: function (j, k) {
      return j > k;
    },
    UbyCQ: function (j, k) {
      return j !== k;
    },
    lCgmT: "RqyCr",
    piDvi: "⚠️ 本地时间与网络时间差异过大:",
    lfOwJ: function (j, k) {
      return j / k;
    },
    ACFoP: function (j, k) {
      return j < k;
    },
    KOxKr: function (j, k) {
      return j - k;
    },
    jOxmP: "DgkTi",
    gQmlz: "zVkIE",
    twPml: "⚠️ 检测到时间倒流异常:",
    QvDRm: "number",
    tISRc: function (j, k) {
      return j - k;
    },
    sTblX: function (j, k) {
      return j !== k;
    },
    RDkNw: "yQCpd",
    TlfYr: "⚠️ 检测到时间往前调整异常:",
    beZRa: "GdsfR",
    qCxGs: function (j, k) {
      return j < k;
    },
    gcRbh: "QuARU",
    ReIdx: "⚠️ 检测到系统时间被重置:",
    mKpVO: function (j, k) {
      return j / k;
    },
    Cpyom: function (j, k) {
      return j - k;
    },
    xlAJv: function (j, k) {
      return j < k;
    },
    ntRnY: "⚠️ 检测到时间从过期状态篡改回有效状态:",
    QiHxr: "从过期状态(页面加载时)篡改回有效状态(网络时间)",
    Pzgma: function (j, k) {
      return j > k;
    },
    xCdQZ: function (j, k) {
      return j + k;
    },
    VbsIT: function (j, k) {
      return j === k;
    },
    LAwMn: "KSwPF",
    XAVms: "feKRq",
    COXhA: "⚠️ 检测到时间跳跃异常:",
    SXLpA: function (j, k) {
      return j / k;
    },
    qolwq: function (j, k) {
      return j - k;
    },
    UsZwS: "✅ 时间验证通过:"
  };
  const i = Math.abs(a.getTime() - b.getTime());
  if (i > 300000) {
    {
      console.warn("⚠️ 本地时间与网络时间差异过大:", {
        "网络时间": a.toLocaleString(),
        "本地时间": b.toLocaleString(),
        "时间差异": i / 1000 + "秒"
      });
      return true;
    }
  }
  if (b.getTime() < d - 60000) {
    {
      console.warn("⚠️ 检测到时间倒流异常:", {
        "页面加载时间": new Date(d).toLocaleString(),
        "本地时间": b.toLocaleString(),
        "网络时间": a.toLocaleString(),
        "时间差异": (d - b.getTime()) / 1000 + "秒"
      });
      return true;
    }
  }
  if (typeof window.scriptLoadTime === "number") {
    const l = b.getTime() - window.scriptLoadTime;
    if (l < -300000) {
      {
        console.warn("⚠️ 检测到时间往前调整异常:", {
          "脚本加载时间": new Date(window.scriptLoadTime).toLocaleString(),
          "本地时间": b.toLocaleString(),
          "网络时间": a.toLocaleString(),
          "时间差异": -l / 1000 + "秒"
        });
        return true;
      }
    }
  } else {
    window.scriptLoadTime = a.getTime();
  }
  if (typeof window.lastValidTime === "number") {
    {
      if (b.getTime() < window.lastValidTime - 120000) {
        {
          console.warn("⚠️ 检测到系统时间被重置:", {
            "上次有效时间": new Date(window.lastValidTime).toLocaleString(),
            "本地时间": b.toLocaleString(),
            "网络时间": a.toLocaleString(),
            "时间差异": (window.lastValidTime - b.getTime()) / 1000 + "秒"
          });
          return true;
        }
      }
    }
  }
  if (d > aG.getTime() && a < aG) {
    console.warn("⚠️ 检测到时间从过期状态篡改回有效状态:", {
      "过期日期": aG.toLocaleString(),
      "页面加载时间": new Date(d).toLocaleString(),
      "网络时间": a.toLocaleString(),
      "本地时间": b.toLocaleString(),
      "篡改行为": "从过期状态(页面加载时)篡改回有效状态(网络时间)"
    });
    return true;
  }
  if (a.getTime() > d + 86400000) {
    {
      console.warn("⚠️ 检测到时间跳跃异常:", {
        "页面加载时间": new Date(d).toLocaleString(),
        "网络时间": a.toLocaleString(),
        "本地时间": b.toLocaleString(),
        "时间差异": (a.getTime() - d) / 1000 / 3600 + "小时"
      });
      return true;
    }
  }
  window.lastValidTime = a.getTime();
  console.log("✅ 时间验证通过:", {
    "页面加载时间": new Date(d).toLocaleString(),
    "网络时间": a.toLocaleString(),
    "本地时间": b.toLocaleString(),
    "脚本加载时间": new Date(window.scriptLoadTime).toLocaleString(),
    "过期日期": aG.toLocaleString()
  });
  return false;
}
(async function () {
  try {
    {
      await aI();
    }
  } catch (d) {
    {
      window.stop();
      document.body.innerHTML = "<div style=\"padding:20px;text-align:center;color:red;font-size:18px;\">脚本验证失败，无法继续使用</div>";
      return false;
    }
  }
})();
(function () {
  "use strict";
  const j = function () {
    const l = {
      CYZpp: function (m, n, o) {
        return m(n, o);
      },
      deRdP: "error",
      KqVMm: function (m, n) {
        return m === n;
      },
      lhuLb: "KRcny",
      WnGbN: "WEyLu",
      KxJvE: "function *\\( *\\)",
      WdCIx: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
      ooyof: function (m, n) {
        return m(n);
      },
      kbqTM: "init",
      QvrHJ: function (m, n) {
        return m + n;
      },
      oTMji: "chain",
      gAoJD: "input",
      SwLHt: function (m, n) {
        return m !== n;
      },
      TyWWT: "nQvnE",
      XLDbX: "aKdFT",
      mlLgu: function (m) {
        return m();
      },
      ouGYp: function (m, n) {
        return m === n;
      },
      YqEeS: "JnTnN",
      bDAhV: "qGrJJ",
      mJDHL: function (m, n) {
        return m !== n;
      },
      Aagzl: "AeRXL",
      lJagV: "lkyRK",
      cDyhb: function (m, n) {
        return m(n);
      },
      KEvFn: function (m, n) {
        return m + n;
      },
      srIGe: "return (function() ",
      QWcyX: "{}.constructor(\"return this\")( )",
      njaJq: function (m, n, o) {
        return m(n, o);
      },
      AkGHR: "已领取",
      GHscK: "特惠礼包已领取",
      seBkB: "info",
      TLwTZ: "领取特惠礼包失败",
      USATx: "WS已连接",
      Oregt: " WS已连接",
      USXdA: function (m, n) {
        return m(n);
      },
      dHRHP: function (m, n) {
        return m === n;
      },
      UikOq: "gkyAd",
      vwttY: function (m) {
        return m();
      },
      TtFna: "log",
      chbiG: "warn",
      tMWuZ: "exception",
      WLMEB: "table",
      nivSY: "trace",
      tiMrD: function (m, n) {
        return m < n;
      },
      UHFXa: "YbaLf",
      aeRwK: "PawSg",
      tcOoA: function (m, n) {
        return m >= n;
      },
      UQydX: function (m, n) {
        return m - n;
      },
      ajKTf: function (m, n) {
        return m !== n;
      },
      iHxCg: "UuOLi",
      YqDCq: function (m, n) {
        return m === n;
      },
      PRsGd: "success",
      LizzC: "[账号切换]",
      IcIvO: function (m, n, o) {
        return m(n, o);
      },
      kiOih: function (m, n) {
        return m !== n;
      },
      kifaU: "OgMQa",
      FDwlu: function (m, n) {
        return m + n;
      },
      itNrJ: "脚本已过期",
      gtLNK: "当前不在竞技场开放时间（6:00-21:59），跳过执行",
      iUnEp: "warning",
      rLVGp: function (m, n) {
        return m(n);
      },
      BjdNK: "arenaLogContainer",
      wVYXc: "div",
      swmiy: "zh-CN",
      dQRAl: "2-digit",
      MLmKX: function (m, n) {
        return m === n;
      },
      iVSCQ: "summary",
      mqUSx: "discount",
      SDlyq: "#fbbf24",
      judVk: "bold",
      DiRBk: function (m, n) {
        return m(n);
      },
      vlmbG: "OrXPO",
      bFyzg: "jabEo",
      CnUvo: function (m, n) {
        return m || n;
      },
      fvifH: function (m, n) {
        return m - n;
      },
      EDJqB: function (m, n, o, p) {
        return m(n, o, p);
      },
      OimXl: "gvh-mini-helper-icon",
      pCHZH: function (m, n) {
        return m === n;
      },
      zpvua: "HIoKN",
      pBTVn: "dragging",
      ZeFVB: "已达到4500层上限，停止爬塔",
      iSzhs: "已达4500层上限",
      ThulO: function (m, n) {
        return m === n;
      },
      ahnfO: "AmpYH",
      iMxWc: "uiYDD",
      KyjtE: "没有可收获的车辆数据，自动监控将更新",
      IfgAB: "(((.+)+)+)+$",
      Sbtuu: function (m, n) {
        return m <= n;
      },
      cHbsJ: function (m, n) {
        return m > n;
      },
      FzOmg: function (m, n) {
        return m / n;
      },
      hWXtH: "KnNje",
      vYIBA: "OWduX",
      LnFBh: function (m, n) {
        return m !== n;
      },
      AlgZK: function (m, n) {
        return m > n;
      },
      WVHgP: "FMzfl",
      WlOrD: "登录相关奖励领取出错",
      nkxuy: "swBaE",
      dZQYm: "KzVik",
      HOsSx: function (m, n) {
        return m > n;
      },
      dKkfR: "qHMxo",
      gaeot: "xURoR",
      jpLwy: function (m, n) {
        return m === n;
      },
      jbdlj: "khmrI",
      oOMXj: "xenHx",
      xHrZQ: "未知名称",
      vqTPI: "object",
      lILzZ: function (m, n) {
        return m in n;
      },
      naxOi: "name",
      EnYiV: "roleName",
      DbrLU: function (m, n) {
        return m === n;
      },
      OJdZf: "lVVoV",
      rxSHQ: "xjyQp",
      nLgpQ: "diamond",
      hxnkz: "gold",
      qiOem: "UHupZ",
      dSZVW: function (m, n) {
        return m in n;
      },
      xQGCl: "serverViewId",
      bLgkG: function (m, n) {
        return m === n;
      },
      SSWVK: "vhnop",
      kqFrJ: "ldnGs",
      NBFWx: function (m, n) {
        return m === n;
      },
      WAdnt: function (m, n) {
        return m !== n;
      },
      XOdnU: "LwOWr",
      kHnMh: "fjEgA",
      rDNtS: function (m, n) {
        return m !== n;
      },
      LZMOa: "SUuox",
      PzyZZ: "tVJwQ",
      FvfEm: function (m, n) {
        return m !== n;
      },
      FJYOZ: "last:login:time",
      uhsXi: "XJPhk",
      rFjCg: "RAztl",
      nLgKp: function (m, n) {
        return m !== n;
      },
      ZgiAZ: "TtzON",
      gFRxt: function (m, n) {
        return m === n;
      },
      Texhu: function (m, n) {
        return m !== n;
      },
      bCHjz: "none",
      FLyUc: "flex",
      JTiws: "1001",
      AyFfw: function (m, n) {
        return m === n;
      },
      BrHte: "1012",
      FRaps: "35002",
      bKWtg: "2001",
      HmyCD: function (m, n) {
        return m * n;
      },
      gPwCC: "2002",
      MbLVN: "2003",
      ggHih: "2004",
      OaiWs: function (m, n) {
        return m !== n;
      },
      zWDsl: "sRZbY",
      GVidV: "<span class=\"gvh-status-normal\">待发车</span>",
      hUYka: "yqAmM",
      GLSqu: "AKQQQ",
      Azxvl: function (m, n) {
        return m <= n;
      },
      AUelx: "IKUdv",
      svGfg: "<span class=\"gvh-status-pending\">待领取</span>",
      sDphO: function (m, n) {
        return m - n;
      },
      sVTaz: function (m, n) {
        return m % n;
      },
      cunTX: "无效时间",
      PZcFP: "gvh-role-info-display",
      warxP: function (m, n) {
        return m <= n;
      },
      uswGw: function (m, n) {
        return m >= n;
      },
      ICuDF: function (m, n) {
        return m < n;
      },
      ijpab: "<div style=\"color: #ff5722; font-size: 11px; margin-top: 5px;\">不在发车时间（仅周一至周三8:00-20:00）</div>",
      UmNtS: "CTMBO",
      vvNvB: function (m, n) {
        return m !== n;
      },
      DjYXA: function (m, n) {
        return m !== n;
      },
      eUicy: function (m, n) {
        return m !== n;
      },
      sSXVE: function (m, n) {
        return m > n;
      },
      SPcpL: "ePwYI",
      hCWjo: "xGLLb",
      evncU: function (m, n) {
        return m < n;
      },
      nDmDt: function (m, n) {
        return m !== n;
      },
      zTVVS: "MtqHS",
      unmft: "nMQFi",
      ZnqbJ: function (m, n) {
        return m !== n;
      },
      UBzMI: function (m, n) {
        return m > n;
      },
      EJEXV: function (m, n) {
        return m === n;
      },
      UeDzm: function (m, n) {
        return m === n;
      },
      LErqs: function (m, n) {
        return m === n;
      },
      ltuzg: function (m, n) {
        return m * n;
      },
      pibwN: "input[type=\"checkbox\"][data-task-key]",
      XDbox: "Jsyat",
      DEypw: function (m, n) {
        return m === n;
      },
      JrVBI: "vHbpD",
      xJKer: "YhNTc",
      afHlM: function (m, n, o) {
        return m(n, o);
      },
      xQBAI: "debug",
      Hmccg: "style",
      kuKVb: function (m, n, o) {
        return m(n, o);
      },
      vAmxs: function (m, n) {
        return m !== n;
      },
      fEiCT: "NLCaF",
      jpTPv: "IrAqD",
      HFnjC: "gvh-operation-log-container",
      muUlB: "gvh-log-entry",
      rdKeP: "#28a745",
      dOkvv: "#dc3545",
      twuel: "#ffc107",
      qteQD: "#343a40",
      yXCAe: "left",
      IlZrB: "pre-line",
      aWKDU: "2px",
      BZTpZ: "2px 0",
      IGSYN: "1px solid rgba(0,0,0,0.05)",
      MUqIb: "11px",
      JhMyd: "黄金鱼竿不在高级商人配置中",
      CbSrA: "未找到高级商人或高级商人没有商品",
      ktrRn: "AvMQk",
      bwRPU: function (m, n) {
        return m(n);
      },
      meIdn: "radio",
      PZOrH: "span",
      UTVQl: "click",
      CyYaJ: function (m, n) {
        return m === n;
      },
      VUGfv: "APXLE",
      Zwysi: "iSDKw",
      AEGKr: "OBxZd",
      oWeJQ: "qIqoI",
      fPrno: function (m, n) {
        return m === n;
      },
      nPRyO: "HFDis",
      lqgXP: function (m, n) {
        return m || n;
      },
      yOKsS: "复制成功",
      CDZON: function (m, n, o) {
        return m(n, o);
      },
      hFeGd: function (m, n) {
        return m !== n;
      },
      RLYHg: "BmqNV",
      wsvQS: function (m, n, o) {
        return m(n, o);
      },
      mPakT: "mousemove",
      hczfF: "mouseup",
      CwrTe: "touchmove",
      YIzsI: "touchend",
      ZWmQs: "[TIP]",
      jklRb: function (m, n) {
        return m(n);
      },
      DTGYL: function (m) {
        return m();
      },
      gDsnj: function (m, n, o) {
        return m(n, o);
      },
      XyClx: function (m, n) {
        return m + n;
      },
      ezoiJ: "获取月度任务数据时发生错误: ",
      tvfGB: ".collapsible-panel",
      jaEId: ".manual-title",
      BXjIy: "每日任务配置",
      RNjbR: ".task-options-grid",
      XMZvC: "CAzun",
      uSoCF: "function",
      rgscr: function (m, n) {
        return m === n;
      },
      VqKiW: "KDVnj",
      UUutq: "dOQWg",
      lwohn: "KpGMH",
      NeBKX: function (m, n) {
        return m - n;
      },
      IIWfo: function (m, n) {
        return m !== n;
      },
      WNNrQ: "WPPyr",
      IzuTV: "VmdmV",
      PMusi: "wRpER",
      htted: function (m) {
        return m();
      },
      qnACQ: "gvh-autoExecuteOnLoad",
      JYqSF: function (m, n, o) {
        return m(n, o);
      },
      rnmJh: "模块未开启",
      cgZWN: function (m, n, o) {
        return m(n, o);
      },
      oNujP: "正在执行操作，请等待完成",
      yXVzE: "zgFNC",
      dtSmT: function (m, n) {
        return m >= n;
      },
      vdmJC: function (m, n) {
        return m <= n;
      },
      TczNn: function (m, n) {
        return m < n;
      },
      Vrbis: "没有达标车辆，不执行发车",
      Jkjcf: function (m, n) {
        return m + n;
      },
      jJVSR: function (m, n) {
        return m(n);
      },
      gDOfo: "active",
      FfzdV: ".shark-tab[data-tab=\"enhanced\"]",
      dPGBN: function (m) {
        return m();
      },
      yhOhC: ".manual-controls",
      EIlGQ: "show",
      MiPLQ: "IkDkr",
      YWZPg: "每日任务完成",
      mrvfr: function (m, n) {
        return m === n;
      },
      AFnOw: "tLqtu",
      qPNQo: "iQGTs",
      RYzWS: "IqHph",
      ViKhn: "BxRct",
      GjesS: "LgyJb",
      ysDGS: "KjHZn",
      IJlHl: "udoPb",
      UjLuD: "CaXYG",
      xvcVB: "HPUje",
      DKgeI: "fujWp",
      Smjhp: "lhNRI",
      Iifuk: "等待每日任务完成后开启监控",
      owBdg: "WebSocket未连接，无法启动信息监控",
      JaJWB: function (m) {
        return m();
      },
      UHSFd: function (m, n, o) {
        return m(n, o);
      },
      FkNJi: "vUrMS",
      eBzvz: function (m, n) {
        return m !== n;
      },
      rREoq: "evRvj",
      qaLgr: "测试购买每周礼包失败",
      mExng: function (m, n) {
        return m !== n;
      },
      sqysr: "ESSsP",
      BGliw: "rdDxL",
      hESzQ: function (m, n) {
        return m(n);
      },
      UPAKC: function (m, n) {
        return m !== n;
      },
      fpSjy: function (m, n, o) {
        return m(n, o);
      },
      gJVYX: function (m, n) {
        return m === n;
      },
      WJbEa: "oLCWx",
      harqx: "qxyBT",
      aterF: "刷新票",
      qARrG: function (m, n) {
        return m * n;
      },
      duQPP: "招募令",
      fZyPr: function (m, n) {
        return m * n;
      },
      tTypm: function (m, n) {
        return m * n;
      },
      tqJAr: function (m, n, o) {
        return m(n, o);
      },
      QckNC: "从字符串直接提取数据成功",
      CYqkD: "钓鱼次数: ",
      fjrXU: function (m, n, o) {
        return m(n, o);
      },
      yFGGy: "竞技场积分: ",
      xXAUu: "Lmzkd",
      YSvhL: "eWObY",
      JkUkL: function (m, n) {
        return m / n;
      },
      kbJfb: function (m, n, o) {
        return m(n, o);
      },
      JhXnu: "false",
      fydJI: "未知错误码",
      xYLuk: "checkbox-container",
      VOoxr: "checkbox",
      jrrjw: "task-checkbox",
      luHhO: "task-name",
      gNiSQ: function (m, n, o) {
        return m(n, o);
      },
      xFlCv: function (m) {
        return m();
      },
      dEnSE: "upntZ",
      ObJfc: function (m, n) {
        return m === n;
      },
      Fpvoa: "send",
      bTnXN: function (m, n) {
        return m !== n;
      },
      ffgTZ: "iwwRD",
      WTiCc: "AZhPV",
      qwFUz: function (m, n) {
        return m(n);
      },
      zVuVa: "claim",
      ROReQ: function (m, n) {
        return m === n;
      },
      QASAa: "jlVBl",
      xtUac: "KJrOg",
      OBYBk: "KvYsf",
      EYlSC: "IbwyD",
      EVifZ: "<span class=\"gvh-status-normal\">未知时间</span>",
      neaah: function (m, n) {
        return m !== n;
      },
      yJdMO: "TdujG",
      mXyGD: "gAjXq",
      nYcdW: "PFeNj",
      mThRk: "NVTmC",
      pQvSH: "linear-gradient(135deg, #ce93d8, #ba68c8)",
      ruTPi: "linear-gradient(135deg, #bbdefb, #90caf9)",
      fziLa: "translateY(-1px)",
      HKqLR: "已经领取过奖励了",
      QcjyZ: "兑换码不存在",
      skiUS: "兑换码已过期",
      iTwAr: "未知错误",
      vPRjU: "返回错误码-5",
      pkPnO: "uVLUh",
      cJgfN: "linear-gradient(135deg, #f3e5f5, #ce93d8)",
      xYuto: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      YvtZW: "translateY(0)",
      XfILh: "NRCkW",
      HXAlW: "SRDHL",
      qflhV: "button",
      uPcNp: "#7b1fa2",
      CdTCp: "#1976d2",
      MHJIq: "#ce93d8",
      OLBqz: "#90caf9",
      ilqpf: "3px 6px",
      HVrSL: "6px 9px",
      QzhiZ: "10px",
      wmzxT: "12px",
      BgNaU: "3px",
      fDOxt: "6px",
      sjQGF: "没有待领取的车辆（均未到领取时间或未发送）",
      puTVV: "gvh-tight-card",
      aYWHO: "gvh-card-inner",
      WyXIn: function (m, n, o) {
        return m(n, o);
      },
      xCAKB: function (m, n) {
        return m(n);
      },
      GYDmx: function (m, n) {
        return m === n;
      },
      GaERe: "dvKaF",
      iGYTE: "Vvgib",
      oKwFy: "wtVEA",
      RNUMZ: "nNjPx",
      FdHbA: function (m, n) {
        return m && n;
      },
      uRsMI: "NkKbk",
      jEiUy: "dDSvw",
      IMSBn: function (m, n) {
        return m !== n;
      },
      tnuJe: "LPYpP",
      sBpPE: function (m, n) {
        return m * n;
      },
      YJrDb: function (m, n) {
        return m * n;
      },
      jQqaX: function (m, n) {
        return m / n;
      },
      SszzM: "gvh-mini-icon-position",
      jdIRY: "gvh-helper-position",
      oHawL: "运行中",
      tCwnO: "task-status running",
      EKsNP: "IpATO",
      ZlaDR: function (m, n) {
        return m - n;
      },
      MPwUu: "grabbing",
      NlokT: function (m, n) {
        return m !== n;
      },
      CtZDT: "mWVwi",
      rwJTK: function (m, n) {
        return m === n;
      },
      xDwTz: function (m, n) {
        return m === n;
      },
      MkfKO: function (m, n) {
        return m * n;
      },
      jeeXo: function (m, n) {
        return m * n;
      },
      jhxuK: function (m, n) {
        return m !== n;
      },
      Pggvt: "TpxuC",
      hoerP: "ANhdU",
      NNkOt: "ojwai",
      gWcYb: "LtlMq",
      EhxcF: "gvh-drag-handle",
      CaDzW: "mousedown",
      xfapU: "touchstart",
      CgfVU: function (m, n, o) {
        return m(n, o);
      },
      xIOxY: function (m, n) {
        return m(n);
      },
      AvJJS: function (m) {
        return m();
      },
      rBqGL: "WuHoH",
      glnTR: function (m, n) {
        return m === n;
      },
      rvCvK: function (m, n) {
        return m === n;
      },
      LNvFr: "mzrki",
      fjbGR: function (m, n) {
        return m === n;
      },
      PBaER: function (m, n) {
        return m === n;
      },
      GZqyO: "JELHM",
      igwFE: "syQRd",
      opDPH: function (m, n) {
        return m === n;
      },
      CvvzX: "EzBsX",
      UQyZJ: function (m, n) {
        return m === n;
      },
      AcRsd: function (m, n) {
        return m !== n;
      },
      bGceQ: "qIxwq",
      QAeWc: "HzMkH",
      SrFwJ: function (m, n) {
        return m === n;
      },
      ydKgo: function (m, n) {
        return m(n);
      },
      TfdPR: function (m, n, o) {
        return m(n, o);
      },
      LcUQq: "bmTqV",
      cYSUy: "IKYMF",
      EKOmf: function (m, n) {
        return m !== n;
      },
      GBdlP: "YTMZr",
      TMuOS: "XAlFP",
      FALhN: function (m, n) {
        return m > n;
      },
      DPhSk: function (m, n) {
        return m > n;
      },
      iNqHI: "无可用WebSocket",
      mWXwn: function (m, n) {
        return m !== n;
      },
      bbUDH: "Bosxh",
      irXiB: "每日登录奖励已领取",
      lJAok: "已处理全部bin",
      sLkTY: function (m, n) {
        return m - n;
      },
      QVvvf: function (m, n) {
        return m + n;
      },
      PjYYR: "#666",
      YeOmB: "normal",
      BnMRr: "gvh-rewards-cell",
      fBQbF: function (m, n) {
        return m === n;
      },
      sLavb: "<br>",
      cFrLD: "gvh-time-cell",
      XbLXs: "center",
      GejNG: function (m, n) {
        return m * n;
      },
      dDxOJ: function (m, n) {
        return m / n;
      },
      LQUDE: function (m, n) {
        return m !== n;
      },
      CXock: "yjOfM",
      Xvgnd: "dNhST",
      Wshvf: "处理中",
      hHYfQ: function (m, n) {
        return m !== n;
      },
      AIccX: "tBiac",
      iqYMw: "bCIjT",
      uxNVS: "SZmda",
      WsGec: "MoCGL",
      YdahF: function (m, n) {
        return m === n;
      },
      bpxls: "Reuix",
      xVsbS: "gvh-action-btn gvh-action-btn-small",
      nZpWP: "已发车",
      zDcum: "control-row",
      XSZRq: "Jjxld",
      CqRMB: function (m, n) {
        return m - n;
      },
      BXkUv: function (m, n) {
        return m(n);
      },
      fjfKH: "gvh-valueThreshold",
      qkNQx: "未找到sendCntResetTime，使用原始次数",
      njQLK: function (m, n) {
        return m - n;
      },
      SedGZ: "yHVVV",
      mTZoG: function (m, n) {
        return m >= n;
      },
      wLFgt: function (m, n) {
        return m !== n;
      },
      ORtgD: "SpmqN",
      lgQUY: "LtZqo",
      KSxjq: function (m, n) {
        return m / n;
      },
      RwgMI: function (m, n) {
        return m === n;
      },
      cwXyt: "QhsJX",
      dHQfI: "gvh-main-car-table-container",
      rOQkF: "<div style=\"text-align:center; padding:7px; color:#666; font-size:11px;\">暂无车辆数据，自动监控将定期更新</div>",
      eckcr: "gvh-data-table",
      HSyvt: "thead",
      eMzTY: "发车时间",
      adePf: "领取时间",
      qHpEZ: "tbody",
      EEnmt: "梦境挑战已提前结束，开始购买商品...",
      PRHys: function (m, n) {
        return m * n;
      },
      oDRwt: "✅ 网络时间获取成功:",
      BwOhE: "PvBGl",
      tNdiw: "SowHy",
      TKfRQ: "car_refresh",
      VVlSc: function (m, n) {
        return m !== n;
      },
      OmaMa: "MUdbr",
      wKYbR: function (m, n) {
        return m !== n;
      },
      CzpDL: "EuZSB",
      gqnfD: function (m, n) {
        return m === n;
      },
      gDiSW: function (m, n) {
        return m !== n;
      },
      EbDoR: "wgVgS",
      sZSSr: function (m, n) {
        return m !== n;
      },
      STEkA: "ebylH",
      paewZ: "FsGyV",
      jhhEf: "bShBN",
      PIXeN: function (m, n, o, p) {
        return m(n, o, p);
      },
      TpBcB: function (m, n) {
        return m(n);
      },
      cQCCR: function (m, n) {
        return m(n);
      },
      ExNCX: "      每日任务完成",
      XhSMJ: "角色等级≤50或已达4500层，跳过爬塔",
      UANtK: "未查询到俱乐部车辆数据",
      DokOg: function (m, n, o) {
        return m(n, o);
      },
      VfTfc: "日志已复制到剪贴板",
      fRgro: "日志复制成功",
      fZFXM: function (m, n) {
        return m !== n;
      },
      bXwsQ: "BfXBW",
      wkwCm: "car_claim",
      vDCdr: "stuYJ",
      AnZgi: "PYMVN",
      ZZrIU: "1|2|4|0|3",
      KraBt: function (m, n) {
        return m !== n;
      },
      kQorz: "bThiv",
      DRVup: function (m, n) {
        return m === n;
      },
      pBcPv: "isToa",
      AXZkH: function (m, n) {
        return m !== n;
      },
      yolsR: function (m, n, o) {
        return m(n, o);
      },
      hkvlk: "一键升星",
      QscQk: "pointer",
      qiTeU: "刷新黑市成功",
      iSrXG: function (m) {
        return m();
      },
      rpqFl: function (m, n, o) {
        return m(n, o);
      },
      yYmjN: function (m, n) {
        return m !== n;
      },
      wuCVV: "USZyI",
      rSIog: "lzMkD",
      lPiUC: function (m, n) {
        return m + n;
      },
      gqnYC: "RzYJv",
      fZVKN: "TKoRT",
      SBtAS: function (m, n) {
        return m / n;
      },
      ysJNm: function (m, n, o) {
        return m(n, o);
      },
      Sfvgn: function (m, n) {
        return m > n;
      },
      huZkx: "车辆未发车（待发车状态）",
      vGnev: function (m, n) {
        return m === n;
      },
      WWcLr: "RWyLE",
      VKcwn: function (m, n) {
        return m + n;
      },
      TBJGP: function (m, n) {
        return m + n;
      },
      elPqI: function (m, n) {
        return m !== n;
      },
      sbaRM: "EsEfI",
      VpTYe: "rIbLq",
      LUDaI: "car_research",
      WiCaT: function (m, n) {
        return m !== n;
      },
      FMitf: "BSyhO",
      JlpqF: function (m, n) {
        return m !== n;
      },
      NLOTM: "mKYcW",
      VIOZY: function (m, n) {
        return m + n;
      },
      RHAVe: function (m, n) {
        return m !== n;
      },
      uRulK: "zPOsl",
      lbVRC: "kXbcO",
      GMLND: function (m, n) {
        return m === n;
      },
      kMTzA: "ZUbCq",
      toHiG: "pHKgk",
      vpsoJ: function (m, n) {
        return m === n;
      },
      jZzAJ: "lKWje",
      iUGzG: function (m, n) {
        return m(n);
      },
      pfPRg: function (m, n) {
        return m(n);
      },
      NhCdZ: function (m, n) {
        return m !== n;
      },
      xFbXw: "wnSgX",
      KEmsv: "JyVIt",
      VAkcW: function (m, n) {
        return m + n;
      },
      ftYKf: function (m, n) {
        return m(n);
      },
      dtOhm: function (m, n) {
        return m <= n;
      },
      CCqXq: "mjJGZ",
      FyMbH: "dhZGe",
      oVuAt: "发动机升级失败，将继续执行收获操作",
      mYJQQ: "发动机升级失败，将继续执行收获",
      TXBTc: function (m, n) {
        return m === n;
      },
      PcYDp: "AbortError",
      GAUzp: function (m, n) {
        return m(n);
      },
      yIWsi: function (m, n, o) {
        return m(n, o);
      },
      eyPxY: "领取每日登录奖励失败",
      RasXl: function (m, n) {
        return m === n;
      },
      KgCix: "AjYyK",
      yFAdv: "MacYW",
      BKhSv: "TvDTt",
      piNas: "SLkCB",
      OacCi: "发动机升级成功",
      TgscE: function (m, n) {
        return m === n;
      },
      plerg: "mSURP",
      PlqNP: function (m, n) {
        return m(n);
      },
      meEKR: function (m, n) {
        return m > n;
      },
      Wbnxw: function (m, n) {
        return m !== n;
      },
      xYvek: "BcbFm",
      ngTuS: "tAxgP",
      AIDYy: "ruroS",
      TmdVP: function (m, n) {
        return m !== n;
      },
      SxgmI: "yYcmS",
      nQxfL: function (m, n) {
        return m < n;
      },
      vNDBR: function (m, n) {
        return m - n;
      },
      PDfQZ: function (m, n) {
        return m === n;
      },
      IWWAf: "MrOFq",
      LqdFN: "bJJDw",
      mrGMd: function (m, n, o) {
        return m(n, o);
      },
      ZDUTR: "获取商品列表成功",
      DDYRG: "POST",
      UUPyy: "application/octet-stream",
      jkNdI: "无可用WebSocket连接",
      jcvGJ: "WebSocket连接缺失",
      JYNzp: "暂无车辆数据，自动监控将更新",
      xYKsX: function (m, n) {
        return m + n;
      },
      Sllbn: function (m, n) {
        return m <= n;
      },
      kgFUQ: function (m, n) {
        return m === n;
      },
      quYad: function (m, n) {
        return m === n;
      },
      IJRTe: "请输入兑换码",
      ggqdE: "Qperc",
      lhJqm: "vwfQD",
      ahdJc: "check_car_status_before_switch",
      HpCXO: "true",
      EabaF: "hFnVi",
      PByTp: "JCnYd",
      lTHgy: function (m, n) {
        return m(n);
      },
      FZxcv: "rUMFf",
      yBkJk: "iHAFV",
      cSrgs: function (m, n) {
        return m !== n;
      },
      pkFCF: "uNZBT",
      VvNee: "QnVuH",
      yXZsU: function (m, n, o) {
        return m(n, o);
      },
      HTAzd: "⚠️ 检测到时间从过期状态篡改回有效状态:",
      WEFnU: "从过期状态(页面加载时)篡改回有效状态(网络时间)",
      NFRgW: function (m, n) {
        return m > n;
      },
      fXoMT: function (m, n, o) {
        return m(n, o);
      },
      nvIFa: function (m, n, o) {
        return m(n, o);
      },
      YVLLQ: "高级商人当前没有黄金鱼竿商品",
      SqhMI: ".shark-tab[data-tab=\"log\"]",
      zmNwj: function (m) {
        return m();
      },
      wQEFM: function (m, n, o) {
        return m(n, o);
      },
      zBCei: function (m, n) {
        return m === n;
      },
      knpSE: "vmsAU",
      QLhdf: "oqxfz",
      gmNqM: function (m, n) {
        return m >= n;
      },
      LlKxx: function (m, n) {
        return m >= n;
      },
      jcEVa: function (m, n) {
        return m >= n;
      },
      WzPlo: function (m, n) {
        return m !== n;
      },
      NXZtY: "BiPZm",
      EDLgB: "HBgZQ",
      fDPAE: function (m, n) {
        return m !== n;
      },
      dHXGr: "IVMDW",
      HfcVu: function (m, n) {
        return m === n;
      },
      kdXMn: "BHayL",
      fcOmc: "一键根据价值刷新并发车 - 先查询最新车辆信息",
      ZhuqU: function (m, n) {
        return m !== n;
      },
      czZCl: "Xadge",
      WTjgF: "zCYbp",
      pczFo: "查询后未获取到车辆数据，无法继续",
      oIoYL: "首次查询成功获取到车辆数据，立即开始处理",
      MehYo: function (m, n) {
        return m >= n;
      },
      yWjzx: function (m, n) {
        return m !== n;
      },
      aXgIZ: "cRwtJ",
      cJNZI: "uKeTH",
      fwNuw: function (m, n) {
        return m !== n;
      },
      icxjm: "wxRUy",
      CvQNn: "NBszS",
      gTYxN: "【一键根据价值刷新并发车】开始 - 执行收获所有可领取车辆",
      NcsMJ: "开始处理：先收获所有可领取车辆...",
      iUlPs: function (m, n) {
        return m !== n;
      },
      CuCPf: "XUsMp",
      USwJQ: "发现待处理车辆状态异常（非待发车状态），停止执行",
      HNaXS: "车辆状态异常，已停止处理",
      MspPR: function (m, n) {
        return m === n;
      },
      XHwCw: "bJQQa",
      JnHmF: "OvaJU",
      GEliw: "所有车辆均已发车，无需处理",
      BtThK: "（仅刷新不发车）",
      DhfZp: function (m, n) {
        return m <= n;
      },
      bPpYx: function (m, n) {
        return m > n;
      },
      LkjDz: function (m, n) {
        return m <= n;
      },
      NuDWr: function (m, n) {
        return m / n;
      },
      hMoHN: function (m, n) {
        return m && n;
      },
      QJoxl: "izHgC",
      RlYlU: function (m, n) {
        return m + n;
      },
      hCTrL: "（仅刷新）",
      FmIhr: function (m, n) {
        return m < n;
      },
      BoVwi: function (m, n) {
        return m - n;
      },
      bvtOV: function (m, n) {
        return m !== n;
      },
      epfuK: "UEEUs",
      ncIXy: "所有槽位车辆刷新次数统计：",
      Acxtc: "（已达上限，未执行发车）",
      UACWT: "【一键根据价值刷新并发车】处理完成",
      MsnKd: "车辆处理完成",
      eltMk: "dDCTN",
      TCFXu: "chnIq",
      hNsdg: function (m, n, o) {
        return m(n, o);
      },
      wszmE: function (m, n) {
        return m(n);
      },
      pRKJk: "manual-controls",
      VvDGB: function (m, n, o) {
        return m(n, o);
      },
      tsswE: "月赛助威未在规定时间范围内（每月第四个周日00:00-19:55）",
      QvdeY: function (m, n) {
        return m !== n;
      },
      LTjrr: function (m, n) {
        return m > n;
      },
      fpWFA: function (m, n) {
        return m(n);
      },
      obzwh: "WebSocket连接成功，已通过游戏标题通知其他脚本",
      DAfyL: "生日祝福签到执行成功",
      FGzlB: "otherTaskStates",
      ACICJ: "其他任务状态已保存",
      RYvOT: function (m, n, o, p) {
        return m(n, o, p);
      },
      fOQgk: "未获取到月度竞技场积分",
      MKLsQ: function (m, n, o) {
        return m(n, o);
      },
      dqavO: function (m, n) {
        return m !== n;
      },
      MfOxt: "GLFAO",
      vuBzY: function (m, n) {
        return m !== n;
      },
      ZPmej: "cIqEJ",
      EjFCI: "car_getrolecar",
      pHKuR: function (m, n) {
        return m === n;
      },
      WmBmV: function (m, n) {
        return m !== n;
      },
      ByNLr: "TRbiQ",
      VkqWT: function (m, n) {
        return m === n;
      },
      tcMou: "zmofI",
      uSccn: function (m, n) {
        return m(n);
      },
      iFqqV: function (m, n) {
        return m !== n;
      },
      NsqrX: "qgqvn",
      xQjbQ: function (m, n) {
        return m * n;
      },
      ggpLG: function (m, n) {
        return m === n;
      },
      Piizf: function (m, n) {
        return m === n;
      },
      ysoAA: "bdewW",
      zLnXH: "lwOuZ",
      TqGSr: function (m, n) {
        return m !== n;
      },
      lzHLk: "LJhEJ",
      kbtFZ: "ueeVj",
      vQIzv: "ZmiEj",
      wYmfW: "未找到_rawData.roleCar，发车次数默认0",
      Uqmut: "nveLW",
      MCyHS: "Edutw",
      SYxxp: "未从_rawData.roleCar找到carDataMap",
      FWann: function (m, n) {
        return m > n;
      },
      TolQZ: function (m, n) {
        return m === n;
      },
      RqpXT: "WpPqh",
      PHWFr: "adjpY",
      LlkPa: "MfzDS",
      sCajj: function (m, n) {
        return m !== n;
      },
      tXQCb: "MpFRe",
      tobGt: "hZyOo",
      dFeBh: function (m, n) {
        return m !== n;
      },
      wCMJk: "bXLmz",
      oYRgF: "NxMsc",
      IKabw: "车辆查询失败",
      wQSnj: function (m, n) {
        return m !== n;
      },
      xiqec: "KxFpB",
      Ccidx: "ZqNWS",
      MAVVG: "查询过程出错",
      cdhAD: function (m, n, o) {
        return m(n, o);
      },
      plnUM: "change",
      aWuay: function (m, n, o) {
        return m(n, o);
      },
      hksPC: "获取元素位置失败:",
      cZLme: function (m, n) {
        return m + n;
      },
      gaAtM: function (m, n) {
        return m(n);
      },
      OBAkz: function (m, n) {
        return m > n;
      },
      plmnN: function (m, n) {
        return m <= n;
      },
      aPssw: "JNtcC",
      QbXAu: "car_send",
      RQbpC: "YbtJc",
      gWwPb: "1|0|3|2|4",
      EyTic: "gwkcE",
      VusHW: "fKiad",
      GLTKF: function (m, n) {
        return m === n;
      },
      uZQll: "mPrnk",
      gORuj: "Krehs",
      yaMij: "已启用自动切换，按列表顺序依次执行，最后一个账号后停止",
      KOtmS: function (m, n) {
        return m !== n;
      },
      whyOZ: "NMrlj",
      iiIsu: function (m, n) {
        return m >= n;
      },
      GkfMK: function (m, n) {
        return m >= n;
      },
      ZMVhc: "DMqby",
      yPXdj: "qgjwS",
      MWJen: function (m, n) {
        return m !== n;
      },
      gcxCQ: "VMEJJ",
      wHQOo: "yPBdd",
      VLLbQ: "cIHJT",
      inGMK: "所有车辆均已发车，无需重复发送",
      oKImx: function (m, n, o) {
        return m(n, o);
      },
      MysGq: "auto",
      gbWvR: function (m, n, o) {
        return m(n, o);
      },
      VxSBT: "BTbPu",
      KkdSw: "bVada",
      LWIFB: "pwMsH",
      oYHHY: "LqFzY",
      azdIZ: function (m, n) {
        return m === n;
      },
      aCGsI: "TPhYy",
      cysFR: "wDewO",
      Zrjot: function (m, n) {
        return m === n;
      },
      qVIKV: "YWolC",
      RpfBC: "TaALd",
      KhYTI: function (m, n) {
        return m === n;
      },
      RKcAE: "rvLyC",
      ptCdC: "blZfF",
      gYnKq: function (m, n) {
        return m >= n;
      },
      sVaiU: function (m, n) {
        return m === n;
      },
      IAcoS: "MUOvS",
      ciBUS: function (m, n) {
        return m + n;
      },
      LSQPz: function (m, n) {
        return m + n;
      },
      jUhDi: "nEDcw",
      OkQFn: "暂无日志可复制",
      dPAQM: "日志已复制",
      OzXBA: function (m, n) {
        return m || n;
      },
      pFwMA: function (m, n, o, p) {
        return m(n, o, p);
      },
      Jjtll: function (m, n) {
        return m === n;
      },
      jCtNX: "nnReL",
      mmcPY: function (m, n) {
        return m(n);
      },
      WVGxP: "oYrQD",
      YUtBq: function (m, n, o) {
        return m(n, o);
      },
      ErVxA: function (m, n) {
        return m - n;
      },
      mGdVq: function (m, n) {
        return m >= n;
      },
      cLmtI: function (m, n) {
        return m === n;
      },
      lAtym: "umAhk",
      rZtsq: function (m, n) {
        return m === n;
      },
      VOolP: "yxohB",
      rjXYO: function (m, n) {
        return m === n;
      },
      RGwJU: "piuBD",
      XIlyT: "每日任务完成，开始执行一键收发车",
      rxXnJ: "自动执行一键收发车开始",
      qYwfX: "每日任务完成后一键收发车执行完成",
      ifMAr: "RTwoA",
      AVBSx: "WebSocket连接未就绪，自动执行失败",
      dqMTA: function (m, n, o) {
        return m(n, o);
      },
      pDDtk: function (m) {
        return m();
      },
      ydPNn: "SubRole",
      WLVjb: "TipsManager",
      etqFQ: "data-index",
      byJNl: "ServerData",
      qfgyv: function (m, n, o) {
        return m(n, o);
      },
      wYSMQ: function (m, n) {
        return m === n;
      },
      xtSkZ: "hdcKS",
      lSOmY: "WeTwC",
      qZYJF: function (m, n, o) {
        return m(n, o);
      },
      jNrFK: function (m, n) {
        return m * n;
      },
      IVhVc: function (m) {
        return m();
      },
      CxNPl: "XaiQy",
      IjvGo: "VcGka",
      xxzLo: "ueZIc",
      YFjgm: "ukCeu",
      giSdp: "teRbB",
      nZbHt: function (m, n) {
        return m === n;
      },
      FxBCk: "string",
      tfmyI: function (m, n) {
        return m !== n;
      },
      lIdoK: "RxrnQ",
      FJKXi: "Fpjvq",
      TGNny: "ZChRd",
      xjQam: function (m, n) {
        return m * n;
      },
      UIqUK: function (m, n) {
        return m(n);
      },
      QognC: function (m, n) {
        return m !== n;
      },
      wlmqA: "cbTgY",
      XLzlR: function (m, n) {
        return m * n;
      },
      zMOqM: function (m, n) {
        return m(n);
      },
      ReXKq: function (m, n) {
        return m === n;
      },
      WLqfp: "100vw",
      njVSf: "yENPe",
      yiHUb: "uQVrC",
      CDLDd: "laRVa",
      SogWV: function (m, n) {
        return m(n);
      },
      lAmES: function (m, n) {
        return m * n;
      },
      EZTUj: function (m, n) {
        return m / n;
      },
      wLkPH: function (m, n) {
        return m || n;
      },
      dzmUy: function (m, n, o) {
        return m(n, o);
      },
      XsQBo: function (m, n, o) {
        return m(n, o);
      },
      xFdUn: "svrQc",
      ZGhJs: "WxKjH",
      vmkUf: function (m, n) {
        return m !== n;
      },
      aAAqY: "pBRxn",
      OmsuU: function (m, n, o) {
        return m(n, o);
      },
      fwaZz: function (m, n, o) {
        return m(n, o);
      },
      pbGaq: function (m, n, o, p) {
        return m(n, o, p);
      },
      YterV: ".task-checkbox[data-task-name]",
      uXmFd: "dailyTaskStates",
      CVVKk: function (m, n, o) {
        return m(n, o);
      },
      ePohu: function (m, n) {
        return m === n;
      },
      fyver: "Gjwow",
      rsZGg: "领取车辆改装奖励过程出错",
      pEhmu: "复制失败，请手动复制",
      FZONc: function (m, n, o) {
        return m(n, o);
      },
      TvRdd: "ZvoLf",
      dlWoT: "gvh-setting-item",
      OinIg: "flex-start",
      royno: "8px",
      dAwOy: "label",
      zeszT: "120px",
      qUElD: "Odzas",
      dcTgH: "number",
      IGgqD: "25px",
      kvfyp: function (m, n) {
        return m === n;
      },
      JGrKY: "Phhwm",
      wViGg: "gvh-waitForDailyTask",
      sdbgW: function (m, n) {
        return m === n;
      },
      wQtkL: "oPmAr",
      lZBWD: "gvh-autoExpandPanel",
      uqNid: "GXUIr",
      zeBBc: "TEuAM",
      wuNuK: function (m, n) {
        return m(n);
      },
      RnIKR: "gvh-autoExecuteDelay",
      nLMTY: "fdYvS",
      KlkKb: "Intux",
      smxvr: function (m, n) {
        return m(n);
      },
      Jsotf: "gvh-infoInterval",
      beDqH: function (m, n) {
        return m === n;
      },
      EZBRL: "ESZsI",
      iAuFq: "gvh-maxRefreshTimes",
      McKrJ: function (m, n) {
        return m === n;
      },
      OMXiy: "kxeMk",
      GtZCU: function (m, n) {
        return m(n);
      },
      lefAB: "gvh-rewardValueConfig",
      zgyLZ: function (m, n) {
        return m !== n;
      },
      NFEAW: "TOOGF",
      rAncp: "vUXOC",
      wJZvQ: function (m, n, o) {
        return m(n, o);
      },
      ssnuG: "当前不是梦境开放时间（周三/周四/周日/周一），停止执行",
      TLFta: function (m, n) {
        return m === n;
      },
      qDVvF: "不在竞技场开放时间内（6:00-21:59:59），跳过竞技场任务",
      sEZPp: "uHctp",
      chyXi: "AamcF",
      QeJiY: "ontouchstart",
      yygZa: "fXktz",
      EjoQa: "mZWKO",
      xtjmX: function (m, n, o, p) {
        return m(n, o, p);
      },
      jLVtN: "日志复制失败: execCommand返回false",
      lcNNt: "执行中...",
      ENyFc: "0.8",
      ZgNcj: "not-allowed",
      jKrXg: "collapsed",
      nGnLP: "bTIWe",
      MrDHm: "GpIkV",
      GyhBu: function (m, n, o) {
        return m(n, o);
      },
      tntqx: "WebSocket连接超时，跳过切换后任务执行",
      pIsMp: "ZtlxH",
      Dvgae: "俱乐部签到完成",
      sQdiO: "iRwmr",
      sFZjV: "nYRaF",
      bYXxw: "Mfufj",
      kWgqQ: "UfQXE",
      hXvPD: "mkRES",
      Hoilc: "SMWPE",
      rGfnF: function (m, n, o) {
        return m(n, o);
      },
      USxSA: function (m, n) {
        return m === n;
      },
      thKlM: "droFT",
      RMVNg: "无法获取角色信息或登录时间，跳过随机种子发送",
      dJsnm: function (m, n) {
        return m(n);
      },
      vPbFN: function (m, n, o) {
        return m(n, o);
      },
      qtuSx: function (m, n, o) {
        return m(n, o);
      },
      AEBmm: function (m, n) {
        return m !== n;
      },
      IIQXD: "MZnxp",
      aWZZH: "JhJWv",
      EeqoB: "OtOdv",
      utddh: "RHnjo",
      oUFBR: ".gvh-refresh-counts",
      XBEdn: "0|3|1|4|2",
      EGbOf: function (m) {
        return m();
      },
      FXiIQ: "Xnxmi",
      esYKB: "fLzSY",
      BgfGT: "BdyBi",
      cQtWb: "MVDzr",
      bZBfV: "uaLOa",
      oXsfS: "link[href*=\"font-awesome\"]",
      dGDAu: "link",
      KnOZl: "stylesheet",
      FClSb: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      szgXB: "<i class=\"fa fa-car\"></i>",
      anNtG: "6vh",
      kQZED: "sFxHZ",
      yRqOr: "loading",
      qffmF: function (m, n) {
        return m === n;
      },
      WXukU: "hiNCE",
      oasBh: "sBKNK",
      HGsvg: "DOMContentLoaded",
      VIAPX: function (m, n, o) {
        return m(n, o);
      },
      nzdnZ: "resize",
      InNQo: "gvh-game-helper-panel",
      wfJqC: function (m, n) {
        return m !== n;
      },
      OmNqb: "MEcwh",
      hxbEV: "KjMdE",
      HObUc: function (m, n) {
        return m === n;
      },
      yUJlG: "qnsFZ",
      VOELp: "50%",
      mQZzW: "translate(-50%, -50%)",
      pQnZN: function (m, n) {
        return m === n;
      },
      PwoLa: "gvZNL",
      dxmCC: "<i class=\"fa fa-car\" style=\"margin-right: 5px;\"></i>俱乐部车辆助手",
      kflHm: "<i class=\"fa fa-window-minimize\"></i>",
      whTum: "7px",
      KZtZH: "信息监控（角色+车辆）",
      DAQNf: "<div class=\"gvh-role-base\"><strong>自动监控启动中</strong> - 正在获取信息...</div>",
      raKln: "gvh-data-container gvh-main-car-container",
      CCfAe: "核心功能",
      knbNx: "gvh-core-functions",
      rCWSl: "一键根据价值刷新并发车",
      znXQD: "查询俱乐部车辆",
      zzGUe: "按价值自动发车",
      hbqLA: "一键发车-不刷新",
      ztHCx: "收获所有可领取车辆",
      CxMzx: "系统设置",
      UCbaK: "15px",
      faHCT: "100%",
      OZogN: "border-box",
      sbugC: "0 5px",
      eXxiS: "column",
      OefSc: "自动执行设置",
      TMAuD: function (m, n, o, p, q, r, s) {
        return m(n, o, p, q, r, s);
      },
      nANse: "自动执行一键收发车",
      jrpJo: "等待每日任务完成",
      WRBgt: function (m, n, o, p, q, r, s) {
        return m(n, o, p, q, r, s);
      },
      zXvvO: "自动展开界面",
      Aaeas: function (m, n, o, p, q, r) {
        return m(n, o, p, q, r);
      },
      ijNMC: "自动执行延迟（秒）",
      sOtgL: "监控间隔时间（秒）",
      XGGPH: "价值判断设置",
      uOoot: function (m, n, o, p, q, r) {
        return m(n, o, p, q, r);
      },
      aMits: "发车价值阈值",
      nYChh: "最大刷新次数",
      mZoeN: "奖励价值详细设置",
      qzMzW: "金砖价值（/个）",
      iaNhU: "刷新票价值（/个）",
      MOGmh: function (m, n, o, p, q, r) {
        return m(n, o, p, q, r);
      },
      QWUmW: "招募令价值（/个）",
      lutJt: "白玉价值（/个）",
      TyhfU: function (m, n, o, p, q, r) {
        return m(n, o, p, q, r);
      },
      kxVzR: "彩玉价值（/个）",
      cdLFs: "操作日志",
      qzURf: "space-between",
      EnOrv: "5px",
      MxlKy: "gvh-action-btn",
      MmZZc: "<i class=\"fa fa-trash-o\"></i> 清空",
      GxmxE: "gvh-action-btn gvh-action-btn-copy",
      GfLeK: "<i class=\"fa fa-copy\"></i> 复制",
      vBXpm: "gvh-log-container",
      nEsFa: "Consolas, monospace",
      ELMqr: "车辆助手（修复版）已加载完成，自动监控启动中...",
      BRmYE: "复制失败: execCommand返回false"
    };
    {
      let n = false;
      let o = 0;
      let p = 0;
      let q = null;
      let s = false;
      let t = null;
      const u = {
        name: "未知",
        goldBricks: 0,
        recruitOrder: 0,
        serverId: "未知",
        refreshTicket: 0,
        treasureBoxPoints: 0,
        goldFishingRod: 0
      };
      let v = u;
      const w = {
        "1": 9000,
        "2": 9000,
        "3": 10800,
        "4": 10800,
        "5": 14400,
        "6": 14400
      };
      const x = w;
      const y = {
        "1": "#4CAF50",
        "2": "#2196F3",
        "3": "#9C27B0",
        "4": "#FF9800",
        "5": "#F44336",
        "6": "#FFD700"
      };
      const z = y;
      const B = (P, Q = 16) => {
        {
          let T = 0;
          return function (...U) {
            {
              const W = Date.now();
              if (W - T >= Q) {
                {
                  T = W;
                  P.apply(this, U);
                }
              }
            }
          };
        }
      };
      const C = P => {
        {
          try {
            const R = P.getBoundingClientRect();
            return {
              x: Math.round(R.left),
              y: Math.round(R.top)
            };
          } catch (S) {
            console.error("获取元素位置失败:", S);
            const T = {
              x: 0,
              y: 0
            };
            return T;
          }
        }
      };
      const D = (P, Q, R) => {
        {
          requestAnimationFrame(() => {
            const U = P.offsetWidth;
            const V = P.offsetHeight;
            const W = window.innerWidth;
            const X = window.innerHeight;
            const Y = Math.max(0, Math.min(Q, W - U));
            const Z = Math.max(0, Math.min(R, X - V));
            P.style.left = Y + "px";
            P.style.top = Z + "px";
            P.style.transform = "none";
          });
        }
      };
      const E = (P, Q) => {
        {
          if (!n || !q) {
            return;
          }
          const S = P - o;
          const T = Q - p;
          D(q, S, T);
          if (q.id === "gvh-mini-helper-icon") {
            {
              q.classList.add("dragging");
            }
          }
        }
      };
      const F = B(function (P) {
        {
          E(P.clientX, P.clientY);
        }
      });
      const G = B(function (P) {
        {
          if (P.touches.length === 1) {
            {
              E(P.touches[0].clientX, P.touches[0].clientY);
            }
          }
        }
      });
      const H = P => {
        {
          const S = [P];
          const U = {
            name: "未知名称",
            diamond: 0,
            serverViewId: "未知",
            items: [],
            lastLoginTime: 0
          };
          let V = false;
          let W = false;
          let X = false;
          let Y = false;
          while (S.length > 0) {
            const Z = S.pop();
            if (typeof Z !== "object" || Z === null) {
              continue;
            }
            if (!V && ("name" in Z || "roleName" in Z)) {
              {
                U.name = Z.name || Z.roleName;
                V = true;
              }
            }
            if (!W && ("diamond" in Z || "gold" in Z)) {
              {
                U.diamond = Z.diamond ?? Z.gold ?? 0;
                W = true;
              }
            }
            if (!X && "serverViewId" in Z) {
              {
                U.serverViewId = Z.serverViewId || "未知";
                X = true;
              }
            }
            if (Z.items && typeof Z.items === "object" && !Array.isArray(Z.items)) {
              {
                Object.values(Z.items).forEach(a3 => {
                  {
                    if (a3?.["itemId"] !== undefined && (a3?.["quantity"] !== undefined || a3?.["num"] !== undefined) && (a3.quantity > 0 || a3.num > 0)) {
                      {
                        U.items.push({
                          itemId: String(a3.itemId),
                          quantity: a3.quantity ?? a3.num ?? 0
                        });
                      }
                    }
                  }
                });
              }
            } else {
              if (Array.isArray(Z.items)) {
                {
                  Z.items.forEach(a5 => {
                    {
                      if (a5?.["itemId"] !== undefined && (a5?.["quantity"] !== undefined || a5?.["num"] !== undefined) && (a5.quantity > 0 || a5.num > 0)) {
                        {
                          U.items.push({
                            itemId: String(a5.itemId),
                            quantity: a5.quantity ?? a5.num ?? 0
                          });
                        }
                      }
                    }
                  });
                }
              }
            }
            if (!Y) {
              {
                if (Z["last:login:time"] !== undefined) {
                  {
                    U.lastLoginTime = Z["last:login:time"];
                    Y = true;
                  }
                }
                if (!Y && Z.role && Z.role["last:login:time"] !== undefined) {
                  {
                    U.lastLoginTime = Z.role["last:login:time"];
                    Y = true;
                  }
                }
              }
            }
            for (const [a8, a9] of Object.entries(Z).reverse()) {
              {
                if (typeof a9 === "object" && a9 !== null) {
                  S.push(a9);
                }
              }
            }
          }
          return U;
        }
      };
      const I = P => {
        {
          const S = P.diamond;
          let T = 0;
          let U = 0;
          let V = 0;
          let W = 0;
          P.items.forEach(Y => {
            const Z = Y.itemId;
            const a0 = Y.quantity;
            if (Z === "1001") {
              T = a0;
            }
            if (Z === "1012") {
              U = a0;
            }
            if (Z === "35002") {
              V = a0;
            }
            if (Z === "2001") {
              W += a0 * 1;
            }
            if (Z === "2002") {
              W += a0 * 10;
            }
            if (Z === "2003") {
              W += a0 * 20;
            }
            if (Z === "2004") {
              W += a0 * 50;
            }
          });
          const X = {
            name: P.name,
            serverId: P.serverViewId,
            goldBricks: S,
            recruitOrder: T,
            goldFishingRod: U,
            refreshTicket: V,
            treasureBoxPoints: W
          };
          return X;
        }
      };
      const J = P => {
        {
          const S = P * 1000;
          const T = new Date(S);
          if (isNaN(T.getTime())) {
            {
              j.logOperation("无效时间戳处理: " + P, "warning");
              return "无效时间";
            }
          }
          const U = String(T.getMonth() + 1).padStart(2, "0");
          const V = String(T.getDate()).padStart(2, "0");
          const W = String(T.getHours()).padStart(2, "0");
          const X = String(T.getMinutes()).padStart(2, "0");
          return U + "/" + V + " " + W + ":" + X;
        }
      };
      const K = P => {
        {
          const R = P * 1000;
          const S = Date.now();
          if (R <= S) {
            {
              return "<span class=\"gvh-status-pending\">待领取</span>";
            }
          }
          const T = Math.floor((R - S) / 1000);
          const U = Math.floor(T / 3600);
          const V = Math.floor(T % 3600 / 60);
          if (U > 0) {
            return "<span class=\"gvh-status-normal\">" + U + "小时" + V + "分钟后</span>";
          } else {
            return "<span class=\"gvh-status-normal\">" + V + "分钟后</span>";
          }
        }
      };
      const L = (P, Q) => {
        {
          if (P <= 0) {
            return 0;
          }
          const R = x[Q] || 9000;
          const S = R;
          return P + S;
        }
      };
      const M = P => {
        let Q = P >>> 0;
        Q ^= 2118920861;
        Q = Q << 16 | Q >>> 16;
        Q ^= 797788954;
        Q ^= 1513922175;
        return Q >>> 0;
      };
      window.generateRandomSeed = P => {
        {
          let S = P >>> 0;
          S ^= 2118920861;
          S = S << 16 | S >>> 16;
          S ^= 797788954;
          S ^= 1513922175;
          return S >>> 0;
        }
      };
      window.findRoleDataWithItems = P => {
        {
          const R = [P];
          const T = {
            name: "未知名称",
            diamond: 0,
            gold: 0,
            serverViewId: "未知",
            items: [],
            lastLoginTime: 0
          };
          let U = false;
          let V = false;
          let W = false;
          let X = false;
          let Y = false;
          while (R.length > 0) {
            {
              const Z = R.pop();
              if (typeof Z !== "object" || Z === null) {
                continue;
              }
              if (!U && ("name" in Z || "roleName" in Z)) {
                {
                  T.name = Z.name || Z.roleName;
                  U = true;
                }
              }
              if (!V && "diamond" in Z) {
                {
                  T.diamond = Z.diamond || 0;
                  V = true;
                }
              }
              if (!W && "gold" in Z) {
                {
                  T.gold = Z.gold || 0;
                  W = true;
                }
              }
              if (!X && "serverViewId" in Z) {
                {
                  T.serverViewId = Z.serverViewId || "未知";
                  X = true;
                }
              }
              if (Z.items && typeof Z.items === "object" && !Array.isArray(Z.items)) {
                Object.values(Z.items).forEach(a4 => {
                  {
                    if (a4?.["itemId"] !== undefined && (a4?.["quantity"] !== undefined || a4?.["num"] !== undefined) && (a4.quantity > 0 || a4.num > 0)) {
                      {
                        T.items.push({
                          itemId: String(a4.itemId),
                          quantity: a4.quantity ?? a4.num ?? 0
                        });
                      }
                    }
                  }
                });
              } else {
                if (Array.isArray(Z.items)) {
                  {
                    Z.items.forEach(a5 => {
                      {
                        if (a5?.["itemId"] !== undefined && (a5?.["quantity"] !== undefined || a5?.["num"] !== undefined) && (a5.quantity > 0 || a5.num > 0)) {
                          T.items.push({
                            itemId: String(a5.itemId),
                            quantity: a5.quantity ?? a5.num ?? 0
                          });
                        }
                      }
                    });
                  }
                }
              }
              if (!Y) {
                {
                  if (Z["last:login:time"] !== undefined) {
                    T.lastLoginTime = Z["last:login:time"];
                    Y = true;
                  }
                  if (!Y && Z.role && Z.role["last:login:time"] !== undefined) {
                    {
                      T.lastLoginTime = Z.role["last:login:time"];
                      Y = true;
                    }
                  }
                }
              }
              for (const [a7, a8] of Object.entries(Z).reverse()) {
                {
                  if (typeof a8 === "object" && a8 !== null) {
                    R.push(a8);
                  }
                }
              }
            }
          }
          return T;
        }
      };
      const N = P => {
        {
          const S = Number(P);
          if (isNaN(S) || !Number.isInteger(S) || S < 0 || S > 3) {
            {
              j.logOperation("检测到无效的槽位索引: " + P + "（应为0-3的整数）", "warning");
              return -1;
            }
          }
          return S;
        }
      };
      const O = {
        refreshTicket: 250,
        recruitOrder: 120,
        whiteJade: 0.25,
        coloredJade: 200,
        goldBrick: 1
      };
      return {
        state: {
          fullCarData: [],
          rawResponseData: null,
          currentSeq: 1,
          rewardValueConfig: JSON.parse(localStorage.getItem("gvh-rewardValueConfig")) || O,
          valueThreshold: parseInt(localStorage.getItem("gvh-valueThreshold")) || 500,
          maxRefreshTimes: parseInt(localStorage.getItem("gvh-maxRefreshTimes")) || 10,
          dailySendCount: 0,
          dailySendLimit: 4,
          refreshCounts: {},
          autoExecuteOnLoad: localStorage.getItem("gvh-autoExecuteOnLoad") !== "false",
          autoExecuteDelay: parseInt(localStorage.getItem("gvh-autoExecuteDelay")) || 1,
          infoIntervalTime: parseInt(localStorage.getItem("gvh-infoInterval")) || 60,
          autoExpandPanel: localStorage.getItem("gvh-autoExpandPanel") === "true",
          waitForDailyTask: localStorage.getItem("gvh-waitForDailyTask") !== "false"
        },
        showtip(P, Q = "info", R = "") {
          {
            const T = document.createElement("div");
            T.className = "gvh-toast";
            T.innerText = R ? "[" + R + "] " + P : P;
            T.style.cssText = "\n                    position: fixed;\n                    bottom: 15px;\n                    left: 50%;\n                    transform: translateX(-50%);\n                    background: " + (Q === "success" ? "#4CAF50" : Q === "error" ? "#ff5555" : "#2196F3") + ";\n                    color: #fff;\n                    padding: 8px 16px;\n                    border-radius: 4px;\n                    font-family: 'Microsoft YaHei', Arial;\n                    font-size: 13px;\n                    z-index: 1000;\n                    box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n                    min-width: 240px;\n                    text-align: center;\n                    animation: gvh-slideIn 0.3s, gvh-fadeOut 0.3s 2.7s;\n                ";
            document.body.appendChild(T);
            setTimeout(() => T.remove(), 3000);
          }
        },
        addStyles() {
          const P = document.createElement("style");
          P.textContent = "\n                    @keyframes gvh-slideIn { from { transform: translate(-50%, 100%); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }\n                    @keyframes gvh-fadeOut { from { opacity: 1; } to { opacity: 0; } }\n\n                    .gvh-data-table { width: 100%; border-collapse: collapse; font-size: 11px; margin: 4px 0; }\n                    .gvh-data-table th {\n                        background: #e3f2fd;\n                        color: #1976d2;\n                        padding: 3px 5px;\n                        text-align: left;\n                        border: 1px solid #bbdefb;\n                        white-space: nowrap;\n                        font-size: 11px;\n                    }\n                    .gvh-data-table td {\n                        padding: 3px 5px;\n                        border: 1px solid #bbdefb;\n                        word-break: break-all;\n                        vertical-align: middle;\n                    }\n\n                    // 序号列宽度设置\n                    .gvh-data-table th:nth-child(1),\n                    .gvh-data-table td:nth-child(1) {\n                        width: 40px;\n                        text-align: center;\n                        font-weight: bold;\n                    }\n                    // 价值列宽度设置\n                    .gvh-data-table th:nth-child(3),\n                    .gvh-data-table td:nth-child(3) {\n                        width: 80px;\n                        min-width: 30px;\n                        text-align: left;\n                    }\n                    // 奖励列宽度\n                    .gvh-rewards-cell {\n                        max-width: 50px;\n                        min-width: 50px;\n                        line-height: 1.4;\n                        font-size: 10.5px;\n                    }\n                    .gvh-time-cell { white-space: nowrap; font-size: 10.5px; }\n                    .gvh-status-pending { color: #ff9800; font-weight: bold; }\n                    .gvh-status-normal { color: #666; }\n                    .gvh-invalid-slot { color: #9e9e9e; font-style: italic; }\n\n                    .gvh-action-btn {\n                        background: #1976d2;\n                        color: white;\n                        border: 1px solid #1976d2;\n                        padding: 2px 6px;\n                        border-radius: 3px;\n                        cursor: pointer;\n                        font-size: 11px;\n                        transition: all 0.2s;\n                        margin-left: 2px;\n                    }\n                    .gvh-action-btn:disabled {\n                        background: #f0f0f0;\n                        color: #9e9e9e;\n                        border-color: #e0e0e0;\n                        cursor: not-allowed;\n                        transform: none;\n                    }\n                    .gvh-action-btn:hover:not(:disabled) { background: #bbdefb; }\n                    .gvh-action-btn-copy { color: #4caf50; border-color: #a5d6a7; background: #e8f5e9; }\n                    .gvh-action-btn-copy:hover:not(:disabled) { background: #c8e6c9; }\n                    .gvh-action-btn-small { padding: 2px 5px; font-size: 10px; margin: 0; }\n\n                    .execute-btn {\n                        background: #1976d2;\n                        color: white;\n                        border: 1px solid #1976d2;\n                        padding: 2px 6px;\n                        border-radius: 3px;\n                        cursor: pointer;\n                        font-size: 11px;\n                        transition: all 0.2s;\n                        margin-left: 2px;\n                        height: 24px;\n                        box-sizing: border-box;\n                    }\n\n                    .execute-btn:hover:not(:disabled) {\n                        background: #1565c0;\n                        border-color: #1565c0;\n                    }\n\n                    .gvh-data-container {\n                        display: flex;\n                        flex-direction: column;\n                        gap: 2px;\n                    }\n                    .gvh-setting-item label {\n                        font-size: 11px;\n                        color: #555;\n                    }\n                    .gvh-setting-item input {\n                        padding: 4px 7px;\n                        font-size: 11px;\n                        border: 1px solid #bbdefb;\n                        border-radius: 3px;\n                    }\n\n                    #gvh-mini-helper-icon {\n                        position: fixed;\n                        width: 45px;\n                        height: 45px;\n                        border-radius: 50%;\n                        background: linear-gradient(135deg, #2196F3, #1976d2);\n                        color: white;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        cursor: grab;\n                        box-shadow: 0 3px 8px rgba(33, 150, 243, 0.3);\n                        z-index: 1000;\n                        transition: all 0.1s ease;\n                        display: none;\n                        touch-action: none;\n                        user-select: none;\n                        /* 响应式设计：确保在不同屏幕尺寸下都能正常显示 */\n                        min-width: 45px;\n                        min-height: 45px;\n                        max-width: 60px;\n                        max-height: 60px;\n                    }\n                    #gvh-mini-helper-icon.dragging {\n                        cursor: grabbing;\n                        box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);\n                        transition: none;\n                    }\n\n                    #gvh-game-helper-panel {\n                        position: fixed;\n                        width: 720px;\n                        max-width: 95vw;\n                        height: auto;\n                        max-height: 90vh;\n                        background: #f0f7ff;\n                        border: 1px solid #bbdefb;\n                        border-radius: 6px;\n                        color: #333;\n                        font-family: 'Microsoft YaHei', Arial;\n                        font-size: 12px;\n                        z-index: 1000;\n                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n                        overflow: hidden;\n                        display: flex;\n                        flex-direction: column;\n                        user-select: none;\n                    }\n\n                    .gvh-refresh-counts {\n                        margin: 7px 0;\n                        padding: 6px;\n                        background: #e8f5e9;\n                        border-radius: 3px;\n                        font-size: 12px;\n                    }\n                    .gvh-refresh-counts-title {\n                        font-weight: bold;\n                        color: #2e7d32;\n                        margin-bottom: 3px;\n                    }\n                    .gvh-refresh-counts-item {\n                        margin: 2px 0;\n                        font-size: 11px;\n                    }\n\n                    .gvh-core-functions {\n                        display: grid;\n                        grid-template-columns: repeat(2, 1fr);\n                        gap: 7px;\n                        margin-bottom: 7px;\n                    }\n\n                    .gvh-log-container {\n                        background: #fff;\n                        border: 1px solid #bbdefb;\n                        border-radius: 5px;\n                        padding: 6px;\n                        box-shadow: inset 0 2px 4px rgba(0,0,0,0.04);\n                        min-height: 100px;\n                        max-height: 230px;\n                        overflow-y: auto;\n                    }\n\n                    .gvh-card-inner {\n                        padding: 0 2px;\n                    }\n\n                    .gvh-role-info-display {\n                        background: #ffffff;\n                        border-radius: 6px;\n                        margin: 6px 0;\n                        padding: 10px;\n                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n                        border: 1px solid #f0f0f0;\n                    }\n\n                    .gvh-role-base {\n                        font-size: 12px;\n                        color: #555;\n                        margin-bottom: 8px;\n                        padding-bottom: 6px;\n                        border-bottom: 1px dashed #eee;\n                    }\n\n                    .gvh-send-count {\n                        color: #d32f2f;\n                        font-weight: bold;\n                        margin-bottom: 8px;\n                        font-size: 12px;\n                    }\n\n                    .gvh-info-grid {\n                        display: grid;\n                        grid-template-columns: 1fr 1fr;\n                        gap: 8px;\n                    }\n\n                    .gvh-info-group {\n                        background: #f9f9f9;\n                        border-radius: 4px;\n                        padding: 6px;\n                    }\n\n                    .gvh-info-group-title {\n                        font-size: 10px;\n                        color: #888;\n                        margin-bottom: 4px;\n                        text-transform: uppercase;\n                        letter-spacing: 0.5px;\n                    }\n\n                    .gvh-info-row {\n                        display: flex;\n                        justify-content: space-between;\n                        padding: 3px 0;\n                        font-size: 11px;\n                    }\n\n                    .gvh-info-label {\n                        color: #666;\n                    }\n\n                    .gvh-info-value {\n                        font-weight: 500;\n                    }\n\n                    .gvh-highlight {\n                        color: #d32f2f;\n                        font-weight: bold;\n                        font-size: 12px;\n                    }\n\n                    // 标题栏拖动样式\n                    .gvh-drag-handle {\n                        cursor: grab;\n                        user-select: none;\n                        flex: 1;\n                    }\n                    .gvh-drag-handle:active {\n                        cursor: grabbing;\n                    }\n\n                    // 紧贴的卡片样式\n                    .gvh-tight-card {\n                        margin-bottom: 0 !important;\n                        border-bottom-left-radius: 0 !important;\n                        border-bottom-right-radius: 0 !important;\n                        border-bottom: none !important;\n                    }\n\n                    .gvh-tight-card + .gvh-tight-card {\n                        margin-top: 0 !important;\n                        border-top-left-radius: 0 !important;\n                        border-top-right-radius: 0 !important;\n                    }\n\n                    @media (max-width: 768px) {\n                        #gvh-game-helper-panel { width: 95% !important; }\n                        .gvh-value-setting-container { grid-template-columns: 1fr !important; }\n                        .gvh-core-functions { grid-template-columns: 1fr !important; }\n                        .gvh-info-grid { grid-template-columns: 1fr !important; }\n                        #gvh-mini-helper-icon { width: 50px; height: 50px; font-size: 19px; }\n                        .gvh-rewards-cell { max-width: 140px; }\n                    }\n                ";
          document.head.appendChild(P);
        },
        logOperation(P, Q = "info") {
          {
            const R = document.getElementById("gvh-operation-log-container");
            if (!R) {
              return;
            }
            const S = document.createElement("div");
            S.className = "gvh-log-entry";
            const T = new Date().toLocaleTimeString();
            S.innerHTML = "[" + T + "] " + P;
            switch (Q) {
              case "success":
                S.style.color = "#28a745";
                break;
              case "error":
                S.style.color = "#dc3545";
                break;
              case "warning":
                S.style.color = "#ffc107";
                break;
              default:
                S.style.color = "#343a40";
            }
            S.style.textAlign = "left";
            S.style.whiteSpace = "pre-line";
            S.style.marginBottom = "2px";
            S.style.padding = "2px 0";
            S.style.borderBottom = "1px solid rgba(0,0,0,0.05)";
            S.style.fontSize = "11px";
            R.appendChild(S);
            R.scrollTop = R.scrollHeight;
            this.adjustLogContainerHeight();
          }
        },
        adjustLogContainerHeight() {
          {
            const Q = document.getElementById("gvh-operation-log-container");
            if (!Q) {
              return;
            }
            const R = Q.scrollHeight;
            const S = 230;
            Q.style.height = Math.min(R, S) + "px";
          }
        },
        safeLocalStorageSet(P, Q) {
          {
            try {
              localStorage.setItem(P, JSON.stringify(Q));
              return true;
            } catch (T) {
              console.error("保存" + P + "失败:", T);
              this.logOperation("位置保存失败: " + T.message, "error");
              return false;
            }
          }
        },
        safeLocalStorageGet(P, Q) {
          {
            try {
              const T = localStorage.getItem(P);
              return T ? JSON.parse(T) : Q;
            } catch (U) {
              {
                console.error("读取" + P + "失败:", U);
                this.logOperation("位置读取失败，使用默认值", "warning");
                return Q;
              }
            }
          }
        },
        copyToClipboard(P, Q) {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            {
              navigator.clipboard.writeText(P).then(() => {
                {
                  this.showtip(Q || "复制成功", "success");
                }
              }).catch(S => {
                {
                  this.fallbackCopyToClipboard(P, Q);
                }
              });
            }
          } else {
            {
              this.fallbackCopyToClipboard(P, Q);
            }
          }
        },
        fallbackCopyToClipboard(P, Q) {
          {
            try {
              {
                const S = document.createElement("textarea");
                S.value = P;
                S.style.position = "fixed";
                S.style.left = "-999999px";
                S.style.top = "-999999px";
                S.setAttribute("readonly", "");
                S.setAttribute("aria-hidden", "true");
                document.body.appendChild(S);
                S.focus();
                S.select();
                const T = document.execCommand("copy");
                document.body.removeChild(S);
                if (T) {
                  {
                    this.showtip(Q || "复制成功", "success");
                  }
                } else {
                  {
                    this.showtip("复制失败，请手动复制", "error");
                    this.logOperation("复制失败: execCommand返回false", "error");
                  }
                }
              }
            } catch (X) {
              {
                this.showtip("复制失败，请手动复制", "error");
                this.logOperation("复制失败: " + X.message, "error");
              }
            }
          }
        },
        async retryOperation(P, Q, R = 10, S = 300) {
          {
            let U = null;
            for (let V = 1; V <= R; V++) {
              {
                try {
                  {
                    const X = await P();
                    if (X === -5 || X && X.code === -5) {
                      {
                        throw new Error("返回错误码-5");
                      }
                    }
                    return X;
                  }
                } catch (a0) {
                  {
                    U = a0;
                    if (V < R) {
                      this.logOperation(Q + "失败（第" + V + "次），" + S + "ms后重试...", "warning");
                      await new Promise(a1 => setTimeout(a1, S));
                    } else {
                      {
                        this.logOperation(Q + "失败（第" + V + "次），已达到最大重试次数" + R, "error");
                      }
                    }
                  }
                }
              }
            }
            throw U;
          }
        },
        checkWsConnection(P = 10000, Q = 500) {
          return new Promise(S => {
            {
              const V = Date.now();
              const W = () => {
                {
                  if (window.ws && typeof window.ws.sendAsync === "function") {
                    {
                      if (document.title && !document.title.includes("WS已连接")) {
                        {
                          document.title += " WS已连接";
                        }
                      }
                      S(true);
                    }
                  } else {
                    if (Date.now() - V >= P) {
                      {
                        S(false);
                      }
                    } else {
                      setTimeout(W, Q);
                    }
                  }
                }
              };
              W();
            }
          });
        },
        async sendCommand(P, Q = {}) {
          {
            const S = await this.checkWsConnection(10000, 500);
            if (!S) {
              {
                this.showtip("错误：未找到可用的WebSocket连接", "error");
                return null;
              }
            }
            try {
              {
                const V = this.state.currentSeq++;
                const W = Date.now();
                const Y = {
                  ack: 0,
                  cmd: P,
                  params: Q,
                  seq: V,
                  time: W
                };
                const Z = await window.ws.sendAsync(Y);
                this.state.rawResponseData = Z;
                if (!(Z.code === 0)) {
                  {
                    this.logOperation("命令失败[" + V + ", 错误码: " + Z.code + "]: " + P, "error");
                  }
                }
                return Z;
              }
            } catch (a1) {
              {
                this.logOperation("命令出错: " + P + " - " + a1.message, "error");
                return null;
              }
            }
          }
        },
        async getRoleInfo() {
          {
            const Q = await this.checkWsConnection(10000, 500);
            if (!Q) {
              {
                this.showtip("错误：未找到可用的WebSocket连接", "error");
                return;
              }
            }
            try {
              {
                const U = {
                  clientVersion: "2.6.6-wx",
                  inviteUid: 0,
                  platform: "hortor",
                  platformExt: "mix",
                  scene: ""
                };
                const V = await this.sendCommand("role_getroleinfo", U);
                if (V && V.code === 0) {
                  {
                    const X = H(V);
                    const Y = I(X);
                    v = Y;
                    const Z = document.title;
                    const a0 = Z.includes("每日任务完成");
                    const a1 = Y.name + " 金:" + Y.goldBricks + "-券:" + Y.refreshTicket;
                    document.title = a0 ? a1 + "      每日任务完成" : a1;
                    this.logOperation("更新角色信息: " + Y.name + " (" + Y.serverId + "服)", "success");
                    this.updateRoleInfoDisplay(Y);
                    return Y;
                  }
                } else {
                  {
                    this.logOperation("获取角色信息失败", "error");
                    this.showtip("获取角色信息失败", "error");
                    return null;
                  }
                }
              }
            } catch (a3) {
              {
                this.logOperation("获取角色信息出错: " + a3.message, "error");
                return null;
              }
            }
          }
        },
        updateRoleInfoDisplay(P) {
          {
            const S = document.getElementById("gvh-role-info-display");
            if (!S) {
              return;
            }
            const T = new Date();
            const U = T.getDay();
            const V = T.getHours();
            const W = U >= 1 && U <= 3 && V >= 8 && V < 20;
            const X = W ? "" : "<div style=\"color: #ff5722; font-size: 11px; margin-top: 5px;\">不在发车时间（仅周一至周三8:00-20:00）</div>";
            const Y = "今日发车次数: " + this.state.dailySendCount + "/" + this.state.dailySendLimit;
            S.innerHTML = "\n        <div class=\"gvh-role-base\">\n            <strong>角色信息:</strong> " + P.name + "（" + P.serverId + "服）\n        </div>\n        <div class=\"gvh-send-count\">\n            " + Y + "\n        </div>\n        <!-- 核心和其他资源左右分布容器 -->\n        <div style=\"display: flex; gap: 10px; margin-top: 8px;\">\n            <!-- 左侧：核心资源 -->\n            <div style=\"flex: 1; background: #f9f9f9; border-radius: 4px; padding: 6px;\">\n                <div class=\"gvh-info-group-title\">核心资源</div>\n                <div class=\"gvh-info-row\">\n                    <span class=\"gvh-info-label\">金砖:</span>\n                    <span class=\"gvh-info-value gvh-highlight\">" + P.goldBricks + "</span>\n                </div>\n                <div class=\"gvh-info-row\">\n                    <span class=\"gvh-info-label\">刷新券:</span>\n                    <span class=\"gvh-info-value gvh-highlight\">" + P.refreshTicket + "</span>\n                </div>\n            </div>\n\n            <!-- 右侧：其他资源 -->\n            <div style=\"flex: 1; background: #f9f9f9; border-radius: 4px; padding: 6px;\">\n                <div class=\"gvh-info-group-title\">其他资源</div>\n                <div class=\"gvh-info-row\">\n                    <span class=\"gvh-info-label\">招募令:</span>\n                    <span class=\"gvh-info-value\">" + P.recruitOrder + "</span>\n                </div>\n                <div class=\"gvh-info-row\">\n                    <span class=\"gvh-info-label\">黄金鱼竿:</span>\n                    <span class=\"gvh-info-value\">" + P.goldFishingRod + "</span>\n                </div>\n                <div class=\"gvh-info-row\">\n                    <span class=\"gvh-info-label\">宝箱积分:</span>\n                    <span class=\"gvh-info-value\">" + P.treasureBoxPoints + "</span>\n                </div>\n            </div>\n        </div>\n        " + X + "\n    ";
          }
        },
        startInfoLoop() {
          {
            this.stopInfoLoop();
            this.checkWsConnection(100000, 500).then(R => {
              {
                if (!R) {
                  {
                    if (this.state.waitForDailyTask) {
                      this.logOperation("等待每日任务完成后开启监控", "info");
                    } else {
                      this.logOperation("WebSocket未连接，无法启动信息监控", "warning");
                    }
                    setTimeout(() => this.startInfoLoop(), 5000);
                    return;
                  }
                }
                const T = () => {
                  {
                    return new Promise(X => {
                      {
                        if (!this.state.waitForDailyTask) {
                          X(true);
                          return;
                        }
                        const Z = () => {
                          {
                            if (document.title.includes("每日任务完成")) {
                              {
                                X(true);
                              }
                            } else {
                              {
                                setTimeout(() => Z(), 500);
                              }
                            }
                          }
                        };
                        Z();
                      }
                    });
                  }
                };
                T().then(() => {
                  {
                    this.getRoleInfo();
                    this.queryClubCars();
                    const W = this.state.infoIntervalTime * 1000;
                    t = setInterval(() => {
                      {
                        this.getRoleInfo();
                        this.queryClubCars();
                      }
                    }, W);
                    this.logOperation("已启动自动信息监控，间隔 " + this.state.infoIntervalTime + " 秒", "success");
                    this.showtip("自动信息监控已启动 (间隔 " + this.state.infoIntervalTime + " 秒)", "success");
                  }
                });
              }
            });
          }
        },
        stopInfoLoop() {
          {
            if (t) {
              clearInterval(t);
              t = null;
            }
          }
        },
        calculateSingleRewardValue(P, Q) {
          {
            const T = this.state.rewardValueConfig;
            switch (P) {
              case "刷新票":
                return Q * T.refreshTicket;
              case "招募令":
                return Q * T.recruitOrder;
              case "白玉":
                return Q * T.whiteJade;
              case "彩玉":
                return Q * T.coloredJade;
              case "金砖":
                return Q * T.goldBrick;
              default:
                return 0;
            }
          }
        },
        calculateTotalRewardValue(P, Q, R) {
          {
            if (!P || !Array.isArray(P)) {
              return 0;
            }
            let T = 0;
            const U = [];
            P.forEach(V => {
              const [W, X] = V.split(":");
              const Y = parseInt(X) || 0;
              const Z = this.calculateSingleRewardValue(W, Y);
              T += Z;
              U.push(W + "×" + Y + "=" + Z);
            });
            return Math.round(T * 100) / 100;
          }
        },
        formatTimeDisplay(P, Q) {
          {
            if (Q === "send") {
              {
                if (!P || P <= 0) {
                  return "<span class=\"gvh-status-normal\">待发车</span>";
                }
                const S = J(P);
                return "<span class=\"gvh-status-normal\">" + S + "</span>";
              }
            }
            if (Q === "claim") {
              {
                if (!P || P <= 0) {
                  {
                    return "<span class=\"gvh-status-normal\">待发车</span>";
                  }
                }
                return K(P);
              }
            }
            return "<span class=\"gvh-status-normal\">未知时间</span>";
          }
        },
        createFunctionButton(P, Q, R, S = {}) {
          {
            const V = document.createElement("button");
            V.innerText = P;
            const W = S.small || false;
            const X = S.isClaim || false;
            const Y = S.disabled || false;
            V.disabled = Y;
            V.style.cssText = "\n                    width: 100%;\n                    background: " + (X ? "linear-gradient(135deg, #f3e5f5, #ce93d8)" : "linear-gradient(135deg, #e3f2fd, #bbdefb)") + ";\n                    color: " + (X ? "#7b1fa2" : "#1976d2") + ";\n                    border: 1px solid " + (X ? "#ce93d8" : "#90caf9") + ";\n                    padding: " + (W ? "3px 6px" : "6px 9px") + ";\n                    font-family: 'Microsoft YaHei', Arial;\n                    font-size: " + (W ? "10px" : "12px") + ";\n                    cursor: pointer;\n                    border-radius: 4px;\n                    margin-bottom: " + (W ? "3px" : "6px") + ";\n                    transition: all 0.2s ease;\n                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n                ";
            V.onmouseover = () => {
              {
                if (!V.disabled) {
                  {
                    V.style.background = X ? "linear-gradient(135deg, #ce93d8, #ba68c8)" : "linear-gradient(135deg, #bbdefb, #90caf9)";
                    V.style.transform = "translateY(-1px)";
                  }
                }
              }
            };
            V.onmouseout = () => {
              {
                if (!V.disabled) {
                  V.style.background = X ? "linear-gradient(135deg, #f3e5f5, #ce93d8)" : "linear-gradient(135deg, #e3f2fd, #bbdefb)";
                  V.style.transform = "translateY(0)";
                }
              }
            };
            V.onclick = Q.bind(this);
            R.appendChild(V);
            return V;
          }
        },
        createSectionTitle(P, Q, R = true) {
          {
            const T = document.createElement("div");
            T.innerText = P;
            T.style.cssText = "\n                    color: #1976d2;\n                    font-size: 13px;\n                    font-weight: bold;\n                    " + (R ? "margin: 7px 0 4px 0;" : "margin: 0 0 4px 0;") + ";\n                    padding-bottom: 2px;\n                    border-bottom: 1px solid rgba(25, 118, 210, 0.3);\n                ";
            Q.appendChild(T);
            return T;
          }
        },
        createCardContainer(P, Q = false) {
          const R = document.createElement("div");
          R.style.cssText = "\n                    background: rgba(255, 255, 255, 0.9);\n                    border-radius: 5px;\n                    padding: 7px;\n                    margin-bottom: 7px;\n                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n                ";
          if (Q) {
            R.classList.add("gvh-tight-card");
          }
          const S = document.createElement("div");
          S.className = "gvh-card-inner";
          R.appendChild(S);
          P.appendChild(R);
          return S;
        },
        toggleMinimize() {
          {
            const R = document.getElementById("gvh-game-helper-panel");
            const S = document.getElementById("gvh-mini-helper-icon");
            if (!R || !S) {
              return;
            }
            if (R.style.display !== "none") {
              {
                this.lastMiniIconPosition = C(S);
                this.safeLocalStorageSet("gvh-mini-icon-position", this.lastMiniIconPosition);
                const T = C(R);
                this.safeLocalStorageSet("gvh-helper-position", T);
                R.style.display = "none";
                S.style.display = "flex";
              }
            } else {
              {
                R.style.display = "flex";
                S.style.display = "none";
                R.style.visibility = "hidden";
                R.offsetWidth;
                const V = {
                  x: 0,
                  y: 50
                };
                const W = this.safeLocalStorageGet("gvh-helper-position", V);
                const X = R.offsetWidth;
                const Y = R.offsetHeight;
                const Z = window.innerWidth;
                const a0 = window.innerHeight;
                let a1 = W.x;
                let a2 = W.y;
                if (a1 < 0) {
                  a1 = 0;
                }
                if (a1 + X > Z) {
                  a1 = Z - X;
                }
                if (a2 < 0) {
                  a2 = 0;
                }
                if (a2 + Y > a0) {
                  a2 = a0 - Y;
                }
                if (Z < X || a0 < Y) {
                  {
                    a1 = Math.max(0, (Z - X) / 2);
                    a2 = Math.max(0, (a0 - Y) / 2);
                  }
                }
                D(R, a1, a2);
                const a3 = {
                  x: a1,
                  y: a2
                };
                this.safeLocalStorageSet("gvh-helper-position", a3);
                R.style.visibility = "visible";
              }
            }
          }
        },
        unbindDragEvents() {
          {
            document.removeEventListener("mousemove", F);
            document.removeEventListener("mouseup", this.handleMouseUp.bind(this));
            document.removeEventListener("touchmove", G);
            document.removeEventListener("touchend", this.handleTouchEnd.bind(this));
          }
        },
        handleMouseUp() {
          {
            if (n && q) {
              {
                const R = C(q);
                if (q.id === "gvh-mini-helper-icon") {
                  {
                    const T = {
                      x: (R.x / window.innerWidth * 100).toFixed(2) + "vw",
                      y: (R.y / window.innerHeight * 100).toFixed(2) + "vh"
                    };
                    this.safeLocalStorageSet("gvh-mini-icon-position", T);
                    this.lastMiniIconPosition = T;
                    q.classList.remove("dragging");
                  }
                } else {
                  this.safeLocalStorageSet("gvh-helper-position", R);
                }
                n = false;
                q = null;
                this.unbindDragEvents();
              }
            }
          }
        },
        handleTouchEnd(P) {
          if (n && q) {
            {
              const R = C(q);
              if (q.id === "gvh-mini-helper-icon") {
                const S = {
                  x: (R.x / window.innerWidth * 100).toFixed(2) + "vw",
                  y: (R.y / window.innerHeight * 100).toFixed(2) + "vh"
                };
                this.safeLocalStorageSet("gvh-mini-icon-position", S);
                this.lastMiniIconPosition = S;
                q.classList.remove("dragging");
              } else {
                {
                  this.safeLocalStorageSet("gvh-helper-position", R);
                }
              }
              n = false;
              q = null;
              this.unbindDragEvents();
              P.preventDefault();
            }
          }
        },
        setupDraggable(P, Q = null) {
          {
            const S = this;
            const T = Q || P;
            if (Q) {
              {
                T.classList.add("gvh-drag-handle");
              }
            }
            T.style.userSelect = "none";
            T.style.touchAction = "none";
            T.addEventListener("mousedown", function (V) {
              {
                if (V.button !== 0) {
                  return;
                }
                V.stopPropagation();
                V.preventDefault();
                n = true;
                q = P;
                const W = P.getBoundingClientRect();
                o = V.clientX - W.left;
                p = V.clientY - W.top;
                T.style.cursor = "grabbing";
                document.addEventListener("mousemove", F);
                document.addEventListener("mouseup", S.handleMouseUp.bind(S));
              }
            });
            T.addEventListener("touchstart", function (V) {
              {
                if (V.touches.length !== 1) {
                  return;
                }
                V.stopPropagation();
                V.preventDefault();
                n = true;
                q = P;
                const Y = V.touches[0];
                const Z = P.getBoundingClientRect();
                o = Y.clientX - Z.left;
                p = Y.clientY - Z.top;
                T.style.cursor = "grabbing";
                const a0 = {
                  passive: false
                };
                document.addEventListener("touchmove", G, a0);
                document.addEventListener("touchend", S.handleTouchEnd.bind(S));
              }
            });
          }
        },
        parseRewards(P) {
          {
            if (!P || !Array.isArray(P)) {
              {
                return [];
              }
            }
            const S = {
              name: "招募令",
              count: 0
            };
            const T = {
              name: "刷新票",
              count: 0
            };
            const U = {
              name: "彩玉",
              count: 0
            };
            const V = {
              name: "白玉",
              count: 0
            };
            const W = {
              name: "万能",
              count: 0
            };
            const X = {
              name: "金砖",
              count: 0
            };
            const Z = {
              recruitOrder: S,
              refreshTicket: T,
              coloredJade: U,
              whiteJade: V,
              wanneng: W,
              goldBrick: X
            };
            P.forEach(a2 => {
              {
                if (a2.itemId === 0 && a2.type === 2) {
                  Z.goldBrick.count += a2.value || 0;
                } else {
                  if (a2.itemId === 1001 && a2.type === 3) {
                    {
                      Z.recruitOrder.count += a2.value || 0;
                    }
                  } else {
                    if (a2.itemId === 35002 && a2.type === 3) {
                      {
                        Z.refreshTicket.count += a2.value || 0;
                      }
                    } else {
                      if (a2.itemId === 1023 && a2.type === 3) {
                        {
                          Z.coloredJade.count += a2.value || 0;
                        }
                      } else {
                        if (a2.itemId === 1022 && a2.type === 3) {
                          {
                            Z.whiteJade.count += a2.value || 0;
                          }
                        } else {
                          if (a2.itemId === 3201 && a2.type === 3) {
                            Z.wanneng.count += a2.value || 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
            const a0 = [];
            if (Z.goldBrick.count > 0) {
              a0.push(Z.goldBrick.name + ":" + Z.goldBrick.count);
            }
            if (Z.recruitOrder.count > 0) {
              a0.push(Z.recruitOrder.name + ":" + Z.recruitOrder.count);
            }
            if (Z.refreshTicket.count > 0) {
              a0.push(Z.refreshTicket.name + ":" + Z.refreshTicket.count);
            }
            if (Z.coloredJade.count > 0) {
              a0.push(Z.coloredJade.name + ":" + Z.coloredJade.count);
            }
            if (Z.whiteJade.count > 0) {
              a0.push(Z.whiteJade.name + ":" + Z.whiteJade.count);
            }
            if (Z.wanneng.count > 0) {
              a0.push(Z.wanneng.name + ":" + Z.wanneng.count);
            }
            return a0;
          }
        },
        getCarQualityText(P) {
          {
            const T = {
              "1": "普通",
              "2": "稀有",
              "3": "史诗",
              "4": "传说",
              "5": "神话",
              "6": "传奇"
            };
            return T[P] || "未知";
          }
        },
        createRefreshButton(P, Q, R) {
          const S = {
            XCUcd: function (U, V, W) {
              return U(V, W);
            },
            XtOrK: "每日登录奖励已领取",
            CFrmd: "info",
            BLkWW: "已处理全部bin",
            BAwOr: "div",
            JbFeM: "style",
            Wgckf: function (U, V, W) {
              return U(V, W);
            },
            BYOUT: function (U, V) {
              return U(V);
            },
            ONdva: function (U, V) {
              return U - V;
            },
            nTZJw: function (U, V) {
              return U + V;
            },
            WTjTJ: function (U, V) {
              return U > V;
            },
            ewGVo: "#1976d2",
            Qxfea: "#666",
            XOFUh: "bold",
            thukd: "left",
            gMSzV: function (U, V) {
              return U >= V;
            },
            FlgWx: "normal",
            KErZI: "#28a745",
            nmIpS: "gvh-rewards-cell",
            QwRtZ: function (U, V) {
              return U === V;
            },
            iltwN: "<br>",
            eLZSp: "gvh-time-cell",
            DxWap: "send",
            DKCmA: "claim",
            PfpQg: "center",
            tQGDQ: function (U, V) {
              return U * V;
            },
            peFqF: function (U, V) {
              return U / V;
            },
            lfUWy: function (U, V) {
              return U !== V;
            },
            IpZAl: "yjOfM",
            JAhdi: "dNhST",
            NgTcI: "处理中",
            YIYJs: function (U, V) {
              return U !== V;
            },
            kFfaA: "tBiac",
            GPuNw: "bCIjT",
            HIQgb: function (U, V) {
              return U <= V;
            },
            FKbkD: "SZmda",
            unQQh: "warning",
            ynbmT: "MoCGL",
            YcKcL: function (U, V) {
              return U === V;
            },
            dObcQ: "Reuix"
          };
          const T = document.createElement("button");
          T.className = "gvh-action-btn gvh-action-btn-small";
          T.innerText = R ? "已发车" : "刷新";
          T.disabled = R;
          T.onclick = async () => {
            {
              if (R) {
                return;
              }
              T.disabled = true;
              T.innerText = "处理中";
              try {
                {
                  if (v.refreshTicket <= 0) {
                    {
                      this.logOperation("赛车刷新券不足，执行发车操作 (槽位: " + P + ")", "warning");
                      await this.sendCar(Q);
                    }
                  } else {
                    const W = await this.refreshCar(Q);
                    if (W) {
                      {
                        await this.queryClubCars();
                      }
                    }
                  }
                }
              } finally {
                if (!R) {
                  {
                    T.disabled = false;
                    T.innerText = "刷新";
                  }
                }
              }
            }
          };
          return T;
        },
        renderCarDataTable() {
          {
            const Q = document.getElementById("gvh-main-car-table-container");
            if (!Q) {
              return;
            }
            Q.innerHTML = "";
            const R = [...this.state.fullCarData].sort((a3, a4) => {
              {
                return a3.slot - a4.slot;
              }
            });
            if (R.length === 0) {
              Q.innerHTML = "<div style=\"text-align:center; padding:7px; color:#666; font-size:11px;\">暂无车辆数据，自动监控将定期更新</div>";
              return;
            }
            const S = document.createElement("table");
            S.className = "gvh-data-table";
            const T = document.createElement("thead");
            const U = document.createElement("tr");
            const V = document.createElement("th");
            V.innerText = "序号";
            U.appendChild(V);
            const W = document.createElement("th");
            W.innerText = "品质";
            U.appendChild(W);
            const X = document.createElement("th");
            X.innerText = "价值";
            U.appendChild(X);
            const Y = document.createElement("th");
            Y.innerText = "奖励";
            U.appendChild(Y);
            const Z = document.createElement("th");
            Z.innerText = "发车时间";
            U.appendChild(Z);
            const a0 = document.createElement("th");
            a0.innerText = "领取时间";
            U.appendChild(a0);
            const a1 = document.createElement("th");
            a1.innerText = "操作";
            U.appendChild(a1);
            T.appendChild(U);
            S.appendChild(T);
            const a2 = document.createElement("tbody");
            R.forEach(a3 => {
              {
                const a5 = a3.slot + 1;
                const a6 = document.createElement("tr");
                const a7 = this.calculateTotalRewardValue(a3.rewards, a3.carId, a3.slot);
                const a8 = L(a3.sendAt, a3.quality);
                const a9 = a3.sendAt > 0;
                const aa = document.createElement("td");
                aa.innerText = a5;
                aa.style.color = "#1976d2";
                a6.appendChild(aa);
                const ab = document.createElement("td");
                ab.innerText = this.getCarQualityText(a3.quality);
                ab.style.color = z[a3.quality] || "#666";
                ab.style.fontWeight = "bold";
                a6.appendChild(ab);
                const ac = document.createElement("td");
                ac.innerText = a7;
                ac.style.textAlign = "left";
                ac.style.fontWeight = a7 >= this.state.valueThreshold ? "bold" : "normal";
                ac.style.color = a7 >= this.state.valueThreshold ? "#28a745" : "#666";
                a6.appendChild(ac);
                const ad = document.createElement("td");
                ad.className = "gvh-rewards-cell";
                if (a3.rewards.length === 0) {
                  {
                    ad.innerText = "无";
                  }
                } else {
                  const aj = [...a3.rewards].sort((al, am) => {
                    const [an, ao] = al.split(":");
                    const [ap, aq] = am.split(":");
                    const ar = this.calculateSingleRewardValue(an, parseInt(ao));
                    const as = this.calculateSingleRewardValue(ap, parseInt(aq));
                    return as - ar;
                  });
                  const ak = aj.slice(0, 3);
                  ad.innerHTML = ak.join("<br>");
                }
                a6.appendChild(ad);
                const ae = document.createElement("td");
                ae.className = "gvh-time-cell";
                ae.innerHTML = this.formatTimeDisplay(a3.sendAt, "send");
                a6.appendChild(ae);
                const af = document.createElement("td");
                af.className = "gvh-time-cell";
                af.innerHTML = this.formatTimeDisplay(a8, "claim");
                a6.appendChild(af);
                const ag = document.createElement("td");
                ag.style.textAlign = "center";
                const ah = this.createRefreshButton(a5, a3.carId, a9);
                ag.appendChild(ah);
                a6.appendChild(ag);
                a2.appendChild(a6);
              }
            });
            S.appendChild(a2);
            Q.appendChild(S);
          }
        },
        async refreshCar(P) {
          {
            const S = this.state.fullCarData.find(V => V.carId === P);
            const T = S ? S.slot + 1 : "?";
            const U = await this.checkWsConnection(10000, 500);
            if (!U) {
              return false;
            }
            try {
              {
                this.showtip("正在刷新槽位 " + T + " 车辆", "info");
                const V = await this.retryOperation(async () => {
                  {
                    const Y = {
                      carId: P
                    };
                    const Z = await this.sendCommand("car_refresh", Y);
                    if (Z?.["code"] === 0) {
                      {
                        this.logOperation("槽位 " + T + " 车辆刷新成功", "success");
                        this.showtip("槽位 " + T + " 车辆刷新成功", "success");
                        return true;
                      }
                    } else {
                      {
                        this.logOperation("槽位 " + T + " 车辆刷新失败，错误码: " + Z?.["code"], "error");
                        this.showtip("槽位 " + T + " 车辆刷新失败", "error");
                        if (Z?.["code"] === -5) {
                          {
                            throw new Error("返回错误码-5");
                          }
                        }
                        return false;
                      }
                    }
                  }
                }, "槽位 " + T + " 车辆刷新", 10, 300);
                return V;
              }
            } catch (X) {
              this.logOperation("刷新槽位 " + T + " 车辆出错: " + X.message, "error");
              this.showtip("刷新槽位 " + T + " 车辆过程出错", "error");
              return false;
            }
          }
        },
        async executeEngineUpgrades(P) {
          {
            const R = await this.checkWsConnection(10000, 500);
            if (!R) {
              {
                this.logOperation("WebSocket未连接，无法执行发动机升级", "error");
                await this.tryClaimPartReward();
                return false;
              }
            }
            this.logOperation("开始执行发动机升级，共 " + P + " 次", "info");
            this.showtip("开始执行发动机升级（" + P + "次）", "info");
            let S = true;
            for (let U = 0; U < P; U++) {
              {
                this.showtip("发动机升级中 " + (U + 1) + "/" + P, "info", U + 1 + "/" + P);
                try {
                  {
                    const X = {
                      researchId: 1
                    };
                    const Y = await this.sendCommand("car_research", X);
                    if (!Y || Y.code !== 0) {
                      {
                        this.logOperation("发动机升级第 " + (U + 1) + " 次失败，错误码: " + Y?.["code"], "error");
                        this.showtip("发动机升级失败（第" + (U + 1) + "次）", "error");
                        S = false;
                        break;
                      }
                    }
                    this.logOperation("发动机升级第 " + (U + 1) + " 次成功", "success");
                    await new Promise(a0 => setTimeout(a0, 100));
                  }
                } catch (a0) {
                  {
                    this.logOperation("发动机升级第 " + (U + 1) + " 次出错: " + a0.message, "error");
                    this.showtip("发动机升级出错（第" + (U + 1) + "次）", "error");
                    S = false;
                    break;
                  }
                }
              }
            }
            await this.tryClaimPartReward();
            if (S) {
              this.logOperation("全部 " + P + " 次发动机升级完成", "success");
              this.showtip("已完成 " + P + " 次发动机升级", "success");
              return true;
            } else {
              {
                this.logOperation("发动机升级未全部完成（部分失败）", "warning");
                this.showtip("发动机升级未全部完成，已尝试领取改装奖励", "warning");
                return false;
              }
            }
          }
        },
        async tryClaimPartReward() {
          try {
            {
              this.logOperation("开始尝试领取车辆改装奖励", "info");
              this.showtip("正在尝试领取车辆改装奖励...", "info");
              const R = await this.sendCommand("car_claimpartconsumereward", {});
              if (R?.["code"] === 0) {
                {
                  this.logOperation("车辆改装奖励领取成功", "success");
                  this.showtip("车辆改装奖励领取成功", "success");
                }
              } else {
                {
                  this.logOperation("车辆改装奖励领取失败，错误码: " + R?.["code"], "error");
                  this.showtip("车辆改装奖励领取失败", "error");
                }
              }
            }
          } catch (U) {
            {
              this.logOperation("领取车辆改装奖励出错: " + U.message, "error");
              this.showtip("领取车辆改装奖励过程出错", "error");
            }
          }
        },
        async claimCar(P) {
          {
            await this.queryClubCars();
            const R = this.state.fullCarData.find(Y => Y.carId === P);
            const S = R ? R.slot + 1 : "?";
            if (!R) {
              {
                this.logOperation("未找到ID为" + P + "的车辆，无法收获", "error");
                this.showtip("未找到目标车辆，无法收获", "error");
                return false;
              }
            }
            const T = Math.floor(Date.now() / 1000);
            const U = L(R.sendAt, R.quality);
            const V = R.sendAt > 0 && U <= T;
            if (!V) {
              const Z = J(T);
              const a0 = J(U);
              const a1 = R.sendAt <= 0 ? "车辆未发车（待发车状态）" : "未到领取时间（当前: " + Z + "，可收车时间: " + a0 + "）";
              this.logOperation("槽位 " + S + " 车辆）不可收获：" + a1, "warning");
              this.showtip("槽位 " + S + " 车辆暂不可收获", "warning");
              return false;
            }
            this.logOperation("收车操作前，开始执行60次发动机升级", "info");
            this.showtip("正在执行发动机升级（收车准备）", "info");
            let W = true;
            for (let a2 = 0; a2 < 60; a2++) {
              {
                this.showtip("发动机升级中 " + (a2 + 1) + "/60", "info", a2 + 1 + "/60");
                try {
                  {
                    const a3 = {
                      researchId: 1
                    };
                    const a4 = await this.sendCommand("car_research", a3);
                    if (!a4 || a4.code !== 0) {
                      {
                        this.logOperation("发动机升级第 " + (a2 + 1) + " 次失败，错误码: " + a4?.["code"] + "，将停止升级并继续收车", "warning");
                        this.showtip("发动机升级失败，将继续执行收车操作", "warning");
                        W = false;
                        break;
                      }
                    }
                    this.logOperation("发动机升级第 " + (a2 + 1) + " 次成功", "success");
                    await new Promise(a6 => setTimeout(a6, 100));
                  }
                } catch (a7) {
                  {
                    this.logOperation("发动机升级第 " + (a2 + 1) + " 次出错: " + a7.message + "，将停止升级并继续收车", "error");
                    this.showtip("发动机升级出错，将继续执行收车操作", "error");
                    W = false;
                    break;
                  }
                }
              }
            }
            if (W) {
              {
                this.logOperation("全部60次发动机升级完成，准备收车", "success");
                this.showtip("发动机升级完成，准备收车", "success");
              }
            }
            const X = await this.checkWsConnection(10000, 500);
            if (!X) {
              return false;
            }
            try {
              {
                this.showtip("正在收获槽位 " + S + " 车辆（待领取状态）", "info");
                const ac = await this.retryOperation(async () => {
                  {
                    const af = {
                      carId: P
                    };
                    const ag = await this.sendCommand("car_claim", af);
                    if (ag?.["code"] === 0) {
                      {
                        this.logOperation("槽位 " + S + " 车辆（待领取）收获成功", "success");
                        this.showtip("槽位 " + S + " 车辆收获成功", "success");
                        await this.queryClubCars();
                        await this.getRoleInfo();
                        return true;
                      }
                    } else {
                      {
                        this.logOperation("槽位 " + S + " 车辆收获失败，错误码: " + ag?.["code"], "error");
                        this.showtip("槽位 " + S + " 车辆收获失败", "error");
                        if (ag?.["code"] === -5) {
                          {
                            throw new Error("返回错误码-5");
                          }
                        }
                        return false;
                      }
                    }
                  }
                }, "槽位 " + S + " 车辆收获", 10, 300);
                return ac;
              }
            } catch (ad) {
              {
                this.logOperation("收获槽位 " + S + " 车辆出错: " + ad.message, "error");
                this.showtip("收获槽位 " + S + " 车辆过程出错", "error");
                return false;
              }
            }
          }
        },
        async claimAllCars() {
          {
            await this.queryClubCars();
            const Q = await this.executeEngineUpgrades(60);
            if (!Q) {
              {
                this.logOperation("发动机升级失败，将继续执行收获操作", "warning");
                this.showtip("发动机升级失败，将继续执行收获", "warning");
              }
            } else {
              {
                this.logOperation("发动机升级成功", "info");
              }
            }
            if (this.state.fullCarData.length === 0) {
              {
                this.showtip("没有可收获的车辆数据，自动监控将更新", "warning");
                return;
              }
            }
            const R = Math.floor(Date.now() / 1000);
            const S = J(R);
            const T = [...this.state.fullCarData].sort((Z, a0) => Z.slot - a0.slot);
            const U = [];
            const V = [];
            T.forEach(Z => {
              {
                const a1 = Z.slot + 1;
                const a2 = L(Z.sendAt, Z.quality);
                const a3 = J(a2);
                if (Z.sendAt > 0 && a2 <= R) {
                  {
                    U.push(Z);
                  }
                } else {
                  const a5 = Z.sendAt <= 0 ? "槽位" + a1 + "：未发车（待发车状态）" : "槽位" + a1 + "：未到领取时间（可收车时间: " + a3 + "）";
                  V.push(a5);
                }
              }
            });
            if (V.length > 0) {
              {
                this.logOperation("检测到" + V.length + "辆不可收获车辆（当前时间: " + S + "）：\n" + V.join("\n"), "info");
              }
            }
            if (U.length === 0) {
              {
                this.showtip("没有待领取的车辆（均未到领取时间或未发送）", "info");
                return;
              }
            }
            this.showtip("准备收获 " + U.length + " 辆待领取车辆", "info");
            for (const [a1, a2] of U.entries()) {
              {
                const a4 = a2.slot + 1;
                this.showtip("正在收获槽位 " + a4 + "（" + (a1 + 1) + "/" + U.length + "）", "info", a1 + 1 + "/" + U.length);
                await this.claimCar(a2.carId);
                if (a1 < U.length - 1) {
                  {
                    await new Promise(a6 => setTimeout(a6, 200));
                  }
                }
              }
            }
            await this.getRoleInfo();
            this.showtip("已完成 " + U.length + " 辆待领取车辆收获", "success");
          }
        },
        async processSingleCar(P, Q = 0) {
          const R = {
            COtPO: function (S) {
              return S();
            },
            BYAVr: "shark-title",
            abZvP: function (S, T) {
              return S > T;
            },
            SQKUy: "辣条助手",
            QyIcr: function (S, T) {
              return S === T;
            },
            GOAga: "function",
            VtyXT: "error",
            cSnOY: function (S, T) {
              return S === T;
            },
            smvmA: "success",
            UKuIG: "info",
            PYoHK: function (S, T) {
              return S === T;
            },
            Cnopc: function (S, T) {
              return S === T;
            },
            kOkvb: "暂无车辆数据，自动监控将更新",
            wpSkg: "warning",
            ACpxS: "未找到_rawData.roleCar，发车次数默认0",
            nDYje: function (S, T, U) {
              return S(T, U);
            },
            wtxMC: "游戏标题显示WebSocket已连接，跳过等待",
            vLeXt: "检测到另一个脚本已通过游戏标题通知连接成功",
            gqWIA: function (S, T) {
              return S(T);
            },
            jEtHk: "linear-gradient(135deg, #f3e5f5, #ce93d8)",
            kVscZ: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            QyCgU: "translateY(0)",
            nbRuC: function (S, T) {
              return S && T;
            },
            gfaSC: function (S, T, U) {
              return S(T, U);
            },
            jKYSx: "从字符串直接提取数据成功",
            IwDAr: function (S, T) {
              return S + T;
            },
            LMgnl: "钓鱼次数: ",
            slard: function (S, T, U) {
              return S(T, U);
            },
            tNlmS: "竞技场积分: ",
            NPwOe: function (S, T) {
              return S(T);
            }
          };
          {
            await this.queryClubCars();
            const T = this.state.fullCarData.find(a9 => a9.carId === P);
            const U = T ? T.slot : -1;
            const V = U !== -1 ? U + 1 : "?";
            if (!T) {
              {
                this.logOperation("未找到槽位 " + V + " 车辆），停止处理", "warning");
                s = false;
                return;
              }
            }
            const W = T.sendAt <= 0;
            const X = L(T.sendAt, T.quality);
            const Y = T.sendAt > 0 && X <= Math.floor(Date.now() / 1000);
            if (!W && !Y) {
              {
                this.logOperation("槽位 " + V + " 车辆）状态无效（非待发车/待领取），停止处理", "error");
                this.showtip("槽位 " + V + " 车辆状态异常，已停止", "error");
                s = false;
                return;
              }
            }
            if (T.sendAt > 0 && !Y) {
              {
                this.logOperation("槽位 " + V + " 车辆）已发车但未到领取时间，跳过", "info");
                return;
              }
            }
            const Z = this.calculateTotalRewardValue(T.rewards, T.carId, T.slot);
            this.state.refreshCounts[P] = Q;
            this.logOperation("处理槽位 " + V + " 车辆，价值: " + Z + "，已刷新: " + Q + "次）", "info");
            if (Y) {
              {
                this.logOperation("槽位 " + V + " 车辆可领取，执行收获操作", "info");
                await this.claimCar(P);
                return;
              }
            }
            const a0 = this.state.dailySendCount >= this.state.dailySendLimit;
            const a1 = new Date();
            const a2 = a1.getDay();
            const a3 = a1.getHours();
            const a4 = a2 >= 1 && a2 <= 3 && a3 >= 8 && a3 < 20;
            const a5 = a0 || !a4;
            if (a5) {
              {
                if (a0) {
                  {
                    this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，仅处理刷新不执行发车", "warning");
                  }
                } else {
                  {
                    this.logOperation("当前不在发车有效时段（周一至周三8:00-19:59），仅处理刷新不执行发车", "warning");
                  }
                }
              }
            }
            if (Z >= this.state.valueThreshold && !a5) {
              {
                this.logOperation("槽位 " + V + " 车辆）价值达标，执行发车", "info");
                await this.sendCar(P);
                return;
              }
            }
            if (Z >= this.state.valueThreshold && a5) {
              {
                this.logOperation("槽位 " + V + " 车辆）价值达标，但已达发车上限，不执行发车", "info");
                this.showtip("槽位 " + V + " 车辆价值达标但已达上限", "info");
                return;
              }
            }
            if (Q >= this.state.maxRefreshTimes) {
              {
                this.logOperation("槽位 " + V + " 车辆）刷新达上限（" + Q + "次），停止处理", "warning");
                this.showtip("槽位 " + V + " 车辆刷新" + Q + "次未达标", "warning");
                return;
              }
            }
            if (v.refreshTicket <= 0) {
              {
                this.logOperation("槽位 " + V + " 车辆）刷新券不足，无法继续刷新", "warning");
                this.showtip("槽位 " + V + " 车辆刷新券不足", "warning");
                return;
              }
            }
            let a6 = false;
            const a7 = 10;
            let a8 = 0;
            while (a8 < a7 && !a6) {
              {
                a6 = await this.refreshCar(P);
                if (!a6) {
                  {
                    a8++;
                    if (a8 < a7) {
                      {
                        this.logOperation("槽位 " + V + " 车辆）刷新失败，300ms后进行第" + (a8 + 1) + "次重试", "warning");
                        await new Promise(ak => setTimeout(ak, 300));
                      }
                    } else {
                      {
                        this.logOperation("槽位 " + V + " 车辆）刷新失败，已重试" + a7 + "次，停止后续操作", "error");
                        this.showtip("槽位 " + V + " 车辆刷新失败，已重试" + a7 + "次", "error");
                      }
                    }
                  }
                }
              }
            }
            if (a6) {
              {
                await new Promise(aq => setTimeout(aq, 200));
                await this.queryClubCars();
                await new Promise(aq => setTimeout(aq, 200));
                const ap = this.state.fullCarData.find(aq => aq.carId === P);
                if (ap) {
                  await new Promise(aq => setTimeout(aq, 200));
                  await this.processSingleCar(ap.carId, Q + 1);
                } else {
                  this.logOperation("槽位 " + V + " 车辆）刷新后数据丢失，停止处理", "error");
                  this.showtip("槽位 " + V + " 车辆数据更新失败", "error");
                }
              }
            }
          }
        },
        async processAllCarsByValue() {
          const Q = this.state.dailySendCount >= this.state.dailySendLimit;
          const R = new Date();
          const S = R.getDay();
          const T = R.getHours();
          const U = S >= 1 && S <= 3 && T >= 8 && T < 20;
          const V = Q || !U;
          if (Q) {
            {
              this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，将仅执行收车和刷新操作", "warning");
              this.showtip("已达今日发车上限，仅执行收车和刷新", "warning");
            }
          }
          if (!U) {
            {
              this.logOperation("当前不在发车有效时间段（仅周一至周三8:00-20:00），将仅执行收车和刷新操作", "warning");
              this.showtip("不在发车时间，仅执行收车和刷新", "warning");
            }
          }
          if (s) {
            {
              this.showtip("正在执行操作，请等待完成", "warning");
              return;
            }
          }
          if (this.state.waitForDailyTask) {
            {
              const a3 = () => {
                {
                  return new Promise(a5 => {
                    {
                      const a7 = setInterval(() => {
                        {
                          if (document.title && document.title.includes("每日任务完成")) {
                            {
                              clearInterval(a7);
                              a5();
                            }
                          }
                        }
                      }, 500);
                    }
                  });
                }
              };
              await a3();
            }
          }
          this.logOperation("一键根据价值刷新并发车 - 先查询最新车辆信息", "info");
          await this.queryClubCars();
          if (this.state.fullCarData.length === 0) {
            {
              this.showtip("查询后未获取到车辆数据，无法继续", "warning");
              return;
            }
          }
          this.logOperation("首次查询成功获取到车辆数据，立即开始处理", "info");
          const W = [...this.state.fullCarData].sort((a6, a7) => a6.slot - a7.slot);
          const X = W.filter(a6 => {
            {
              const a8 = a6.sendAt <= 0;
              const a9 = L(a6.sendAt, a6.quality);
              const aa = a6.sendAt > 0 && a9 <= Math.floor(Date.now() / 1000);
              return !a8 && !aa;
            }
          });
          if (X.length >= 4) {
            {
              const a6 = X.map(a7 => a7.slot + 1).join(", ");
              this.logOperation("所有4个槽位车辆都处于无效状态（非待领取/待发车），槽位: " + a6 + "，停止执行", "error");
              this.showtip("所有车辆状态无效，已停止执行", "error");
              s = false;
              return;
            }
          }
          if (X.length > 0) {
            {
              const a8 = X.map(a9 => a9.slot + 1).join(", ");
              this.logOperation("发现" + X.length + "个槽位车辆处于无效状态（非待领取/待发车），槽位: " + a8 + "，将继续处理有效车辆", "warning");
              this.showtip("检测到" + X.length + "辆无效车辆，继续处理有效车辆", "warning");
            }
          }
          this.state.refreshCounts = {};
          s = true;
          this.logOperation("【一键根据价值刷新并发车】开始 - 执行收获所有可领取车辆", "info");
          this.showtip("开始处理：先收获所有可领取车辆...", "info");
          await this.claimAllCars();
          await new Promise(aa => setTimeout(aa, 2000));
          await this.queryClubCars();
          const Y = [...this.state.fullCarData].sort((aa, ab) => aa.slot - ab.slot).filter(aa => aa.sendAt <= 0);
          if (Y.some(aa => {
            const ab = L(aa.sendAt, aa.quality);
            return !(aa.sendAt <= 0 || aa.sendAt > 0 && ab <= Math.floor(Date.now() / 1000));
          })) {
            {
              this.logOperation("发现待处理车辆状态异常（非待发车状态），停止执行", "error");
              this.showtip("车辆状态异常，已停止处理", "error");
              s = false;
              return;
            }
          }
          if (Y.length === 0) {
            {
              this.showtip("所有车辆均已发车，无需处理", "info");
              s = false;
              return;
            }
          }
          this.logOperation("收获完成，开始处理 " + Y.length + " 个槽位的待发车车辆" + (V ? "（仅刷新不发车）" : ""), "info");
          this.showtip("收获完成，开始处理 " + Y.length + " 个槽位的待发车车辆" + (V ? "（仅刷新不发车）" : "") + "...", "info");
          for (const [ac, ad] of Y.entries()) {
            const ae = ad.slot + 1;
            const af = this.state.fullCarData.find(aj => aj.carId === ad.carId);
            if (!af) {
              this.logOperation("槽位 " + ae + " 车辆已不存在，停止处理", "error");
              this.showtip("槽位 " + ae + " 车辆不存在，已停止", "error");
              s = false;
              return;
            }
            const ag = af.sendAt <= 0;
            const ah = L(af.sendAt, af.quality);
            const ai = af.sendAt > 0 && ah <= Math.floor(Date.now() / 1000);
            if (!ag && !ai) {
              {
                this.logOperation("槽位 " + ae + " 车辆处于无效状态（非待领取/待发车），跳过该车辆", "warning");
                this.showtip("槽位 " + ae + " 车辆状态异常，跳过", "warning");
                continue;
              }
            }
            this.showtip("处理槽位 " + ae + "（" + (ac + 1) + "/" + Y.length + "）" + (V ? "（仅刷新）" : ""), "info", ac + 1 + "/" + Y.length);
            await this.processSingleCar(ad.carId);
            if (!s) {
              break;
            }
            if (ac < Y.length - 1) {
              {
                await new Promise(al => setTimeout(al, 1000));
              }
            }
          }
          let Z = "所有槽位车辆刷新次数统计：";
          Object.entries(this.state.refreshCounts).map(([al, am]) => {
            const an = this.state.fullCarData.find(ap => ap.carId === al);
            const ao = {
              slot: an?.["slot"] ?? -1,
              count: am
            };
            return ao;
          }).sort((al, am) => al.slot - am.slot).forEach(({
            slot: al,
            count: am
          }) => {
            {
              const ap = al !== -1 ? al + 1 : "?";
              Z += "\n槽位" + ap + "：" + am + "次";
            }
          });
          this.logOperation(Z, "success");
          this.showtip("所有车辆处理完成" + (V ? "（已达上限，未执行发车）" : "") + "，刷新次数已统计", "success");
          s = false;
          this.logOperation("【一键根据价值刷新并发车】处理完成", "success");
          if (document.title && !document.title.endsWith("车辆处理完成")) {
            {
              document.title += "车辆处理完成";
            }
          }
        },
        async queryClubCars() {
          {
            const R = await this.checkWsConnection(10000, 500);
            if (!R) {
              return;
            }
            try {
              {
                const T = await this.sendCommand("car_getrolecar");
                if (T?.["code"] === 0) {
                  {
                    this.state.fullCarData = [];
                    let V = null;
                    let W = 0;
                    let X = null;
                    if (T._rawData?.["roleCar"]) {
                      {
                        W = Number(T._rawData.roleCar.sendCnt) || 0;
                        X = T._rawData.roleCar.sendCntResetTime ? Number(T._rawData.roleCar.sendCntResetTime) : null;
                        if (X) {
                          {
                            const Z = new Date(X * 1000);
                            const a0 = new Date();
                            const a1 = Z.getFullYear() === a0.getFullYear() && Z.getMonth() === a0.getMonth() && Z.getDate() === a0.getDate();
                            if (!a1) {
                              {
                                W = 0;
                              }
                            }
                          }
                        } else {
                          {
                            this.logOperation("未找到sendCntResetTime，使用原始次数", "warning");
                          }
                        }
                      }
                    } else {
                      {
                        this.logOperation("未找到_rawData.roleCar，发车次数默认0", "warning");
                      }
                    }
                    if (T._rawData?.["roleCar"]?.["carDataMap"]) {
                      {
                        V = T._rawData.roleCar.carDataMap;
                      }
                    } else {
                      this.logOperation("未从_rawData.roleCar找到carDataMap", "warning");
                    }
                    this.state.dailySendCount = W;
                    this.updateRoleInfoDisplay(v);
                    if (V && Object.keys(V).length > 0) {
                      {
                        for (const [a8, a9] of Object.entries(V)) {
                          {
                            const aa = N(a9.slot);
                            if (aa === -1) {
                              {
                                this.logOperation("车辆ID: " + a8 + " 的slot无效，已跳过", "warning");
                                continue;
                              }
                            }
                            const ab = a9.sendAt || 0;
                            const ac = this.parseRewards(a9.rewards || []);
                            const ad = {
                              carId: a8,
                              slot: aa,
                              quality: a9.color || "1",
                              rewards: ac,
                              rawInfo: a9,
                              sendAt: ab
                            };
                            this.state.fullCarData.push(ad);
                          }
                        }
                        this.state.fullCarData.sort((ag, ah) => ag.slot - ah.slot);
                        this.renderCarDataTable();
                      }
                    } else {
                      {
                        this.logOperation("未查询到俱乐部车辆数据", "warning");
                        this.renderCarDataTable();
                      }
                    }
                  }
                } else {
                  {
                    this.logOperation("查询失败，错误码: " + T?.["code"], "error");
                    this.showtip("车辆查询失败", "error");
                  }
                }
              }
            } catch (ai) {
              {
                this.logOperation("查询出错: " + ai.message, "error");
                this.showtip("查询过程出错", "error");
              }
            }
          }
        },
        async sendCar(P) {
          {
            const S = this.state.dailySendCount >= this.state.dailySendLimit;
            const T = new Date();
            const U = T.getDay();
            const V = T.getHours();
            const W = U >= 1 && U <= 3 && V >= 8 && V < 20;
            const X = S || !W;
            if (X) {
              {
                if (S) {
                  this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，无法继续发车", "warning");
                  this.showtip("已达今日发车上限(" + this.state.dailySendLimit + "次)", "warning");
                } else {
                  {
                    this.logOperation("当前不在发车有效时段（周一至周三8:00-19:59），无法发车", "warning");
                    this.showtip("当前不在发车有效时段", "warning");
                  }
                }
                return;
              }
            }
            const Y = this.state.fullCarData.find(a3 => a3.carId === P);
            const Z = Y ? Y.slot + 1 : "?";
            const a0 = await this.checkWsConnection(10000, 500);
            if (!a0) {
              return;
            }
            try {
              {
                this.showtip("正在发送槽位 " + Z + " 车辆", "info");
                const a3 = await this.retryOperation(async () => {
                  {
                    const a4 = {
                      carId: P,
                      helperId: 0,
                      text: ""
                    };
                    const a5 = await this.sendCommand("car_send", a4);
                    if (a5?.["code"] === 0) {
                      {
                        this.state.dailySendCount++;
                        this.logOperation("槽位 " + Z + " 车辆发送成功，今日已发车 " + this.state.dailySendCount + "/" + this.state.dailySendLimit + " 次", "success");
                        this.showtip("槽位 " + Z + " 车辆发送成功", "success");
                        await this.queryClubCars();
                        return true;
                      }
                    } else {
                      {
                        this.logOperation("槽位 " + Z + " 车辆发送失败，错误码: " + a5?.["code"], "error");
                        this.showtip("槽位 " + Z + " 车辆发送失败", "error");
                        if (a5?.["code"] === -5) {
                          {
                            throw new Error("返回错误码-5");
                          }
                        }
                        return false;
                      }
                    }
                  }
                }, "槽位 " + Z + " 车辆发车", 10, 300);
                return a3;
              }
            } catch (a5) {
              {
                this.logOperation("发送槽位 " + Z + " 车辆出错: " + a5.message, "error");
                this.showtip("发送槽位 " + Z + " 车辆过程出错", "error");
                return false;
              }
            }
          }
        },
        async autoCheckAndSendCars() {
          if (this.state.dailySendCount >= this.state.dailySendLimit) {
            {
              this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，无法执行自动发车", "warning");
              this.showtip("已达今日发车上限(" + this.state.dailySendLimit + "次)", "warning");
              return;
            }
          }
          if (this.state.fullCarData.length === 0) {
            {
              this.showtip("暂无车辆数据，自动监控将更新", "warning");
              return;
            }
          }
          const Q = [...this.state.fullCarData].sort((V, W) => V.slot - W.slot);
          const R = Q.filter(V => V.sendAt <= 0);
          const S = [];
          R.forEach(V => {
            {
              const X = this.calculateTotalRewardValue(V.rewards, V.carId, V.slot);
              if (X >= this.state.valueThreshold) {
                {
                  const Z = {
                    ...V,
                    value: X
                  };
                  S.push(Z);
                }
              }
            }
          });
          this.logOperation("达标车辆: " + S.length + " 辆（价值≥" + this.state.valueThreshold + "）", "info");
          if (S.length === 0) {
            {
              this.showtip("没有达标车辆，不执行发车", "info");
              return;
            }
          }
          this.showtip("发现 " + S.length + " 辆达标车辆，准备发车", "info");
          for (const [W, X] of S.entries()) {
            {
              if (this.state.dailySendCount >= this.state.dailySendLimit) {
                {
                  this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，停止自动发车", "warning");
                  this.showtip("已达今日发车上限(" + this.state.dailySendLimit + "次)", "warning");
                  return;
                }
              }
              const Z = X.slot + 1;
              this.showtip("发送达标车辆（槽位 " + Z + "） " + (W + 1) + "/" + S.length, "info", W + 1 + "/" + S.length);
              await this.sendCar(X.carId);
              if (W < S.length - 1) {
                {
                  await new Promise(a1 => setTimeout(a1, 1000));
                }
              }
            }
          }
          this.showtip("已完成所有达标车辆发送（共 " + S.length + " 辆）", "success");
        },
        async sendAllCarsWithoutRefresh() {
          if (this.state.dailySendCount >= this.state.dailySendLimit) {
            {
              this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，无法执行一键发车", "warning");
              this.showtip("已达今日发车上限(" + this.state.dailySendLimit + "次)", "warning");
              return;
            }
          }
          if (this.state.fullCarData.length === 0) {
            {
              this.showtip("暂无车辆数据，自动监控将更新", "warning");
              return;
            }
          }
          const Q = [...this.state.fullCarData].sort((V, W) => V.slot - W.slot);
          const R = Q.filter(V => V.sendAt <= 0);
          const S = this.state.dailySendLimit - this.state.dailySendCount;
          if (R.length > S) {
            {
              this.logOperation("剩余可发车次数(" + S + "次)不足，仅能发送部分车辆", "warning");
              this.showtip("剩余可发车" + S + "次，将发送部分车辆", "warning");
              R.splice(S);
            }
          }
          if (R.length === 0) {
            this.showtip("所有车辆均已发车，无需重复发送", "info");
            return;
          }
          this.showtip("准备发送 " + R.length + " 个槽位的车辆（不刷新）", "info");
          for (const [W, X] of R.entries()) {
            const Y = X.slot + 1;
            this.showtip("发送槽位 " + Y + "（" + (W + 1) + "/" + R.length + "）", "info", W + 1 + "/" + R.length);
            await this.sendCar(X.carId);
            if (this.state.dailySendCount >= this.state.dailySendLimit) {
              this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，停止一键发车", "warning");
              this.showtip("已达今日发车上限(" + this.state.dailySendLimit + "次)", "warning");
              return;
            }
            if (W < R.length - 1) {
              {
                await new Promise(a0 => setTimeout(a0, 1000));
              }
            }
          }
          this.showtip("已完成 " + R.length + " 个槽位的车辆发送", "success");
        },
        setupAutoExecute() {
          {
            if (this.state.autoExecuteOnLoad) {
              this.logOperation("将在 " + this.state.autoExecuteDelay + " 秒后自动执行一键收发车", "info");
              this.showtip("将在 " + this.state.autoExecuteDelay + " 秒后自动执行一键收发车", "info");
              setTimeout(async () => {
                if (this.state.dailySendCount >= this.state.dailySendLimit) {
                  {
                    this.logOperation("已达今日发车上限(" + this.state.dailySendLimit + "次)，取消自动执行", "warning");
                    this.showtip("已达今日发车上限(" + this.state.dailySendLimit + "次)，取消自动执行", "warning");
                    document.title += "车辆处理完成";
                    return;
                  }
                }
                if (this.state.waitForDailyTask) {
                  {
                    const U = () => {
                      return new Promise(W => {
                        {
                          const Z = setInterval(() => {
                            {
                              if (document.title && document.title.includes("每日任务完成")) {
                                clearInterval(Z);
                                W();
                              }
                            }
                          }, 500);
                        }
                      });
                    };
                    await U();
                  }
                }
                const S = await this.checkWsConnection(10000, 500);
                if (S) {
                  {
                    this.logOperation("每日任务完成，开始执行一键收发车", "info");
                    this.logOperation("自动执行一键收发车开始", "info");
                    await this.processAllCarsByValue();
                    this.logOperation("每日任务完成后一键收发车执行完成", "success");
                  }
                } else {
                  {
                    this.logOperation("WebSocket连接未就绪，自动执行失败", "error");
                    this.showtip("WebSocket连接未就绪，自动执行失败", "error");
                  }
                }
              }, this.state.autoExecuteDelay * 1000);
            }
          }
        },
        createMainUI() {
          {
            if (!document.querySelector("link[href*=\"font-awesome\"]")) {
              const as = document.createElement("link");
              as.rel = "stylesheet";
              as.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
              document.head.appendChild(as);
            }
            const R = document.createElement("div");
            R.id = "gvh-mini-helper-icon";
            R.innerHTML = "<i class=\"fa fa-car\"></i>";
            let S = 0;
            R.addEventListener("touchstart", at => {
              {
                S = Date.now();
                at.preventDefault();
              }
            });
            R.addEventListener("touchend", at => {
              {
                at.preventDefault();
                if (Date.now() - S < 300) {
                  {
                    this.toggleMinimize();
                  }
                }
              }
            });
            R.addEventListener("click", at => {
              {
                if (!("ontouchstart" in window)) {
                  {
                    this.toggleMinimize();
                  }
                }
              }
            });
            document.body.appendChild(R);
            const T = this.safeLocalStorageGet("gvh-mini-icon-position", {
              x: "100vw",
              y: "6vh"
            });
            const U = (at, au = true) => {
              {
                if (typeof at === "string") {
                  {
                    if (at.includes("vh")) {
                      {
                        return parseFloat(at) / 100 * window.innerHeight;
                      }
                    } else {
                      if (at.includes("vw")) {
                        {
                          let aA = parseFloat(at) / 100 * window.innerWidth;
                          if (at === "100vw" && au) {
                            {
                              aA = Math.max(0, aA - 45);
                            }
                          }
                          return aA;
                        }
                      } else {
                        if (at.includes("px")) {
                          {
                            return parseFloat(at);
                          }
                        } else {
                          if (at.includes("%")) {
                            return parseFloat(at) / 100 * (au ? window.innerWidth : window.innerHeight);
                          }
                        }
                      }
                    }
                  }
                }
                return at || 0;
              }
            };
            const V = () => {
              const at = U(T.x, true);
              const au = U(T.y, false);
              D(R, at, au);
              this.lastMiniIconPosition = T;
            };
            if ("ontouchstart" in window) {
              {
                if (document.readyState === "loading") {
                  {
                    document.addEventListener("DOMContentLoaded", V);
                  }
                } else {
                  setTimeout(V, 100);
                }
              }
            } else {
              V();
            }
            const W = () => {
              {
                if (!n && R.style.display !== "none") {
                  {
                    const aw = U(this.lastMiniIconPosition.x, true);
                    const ax = U(this.lastMiniIconPosition.y, false);
                    D(R, aw, ax);
                  }
                }
              }
            };
            let X;
            window.addEventListener("resize", () => {
              {
                clearTimeout(X);
                X = setTimeout(W, 100);
              }
            });
            this.setupDraggable(R);
            const Y = document.createElement("div");
            Y.id = "gvh-game-helper-panel";
            Y.style.cssText = "\n                    position: fixed;\n                    width: 720px;\n                    max-width: 95vw;\n                    height: auto;\n                    max-height: 90vh;\n                    background: #f0f7ff;\n                    border: 1px solid #bbdefb;\n                    border-radius: 6px;\n                    color: #333;\n                    font-family: 'Microsoft YaHei', Arial;\n                    font-size: 12px;\n                    z-index: 1000;\n                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n                    overflow: hidden;\n                    display: flex;\n                    flex-direction: column;\n                ";
            const Z = this.safeLocalStorageGet("gvh-helper-position", null);
            if (Z) {
              {
                D(Y, Z.x, Z.y);
              }
            } else {
              {
                Y.style.left = "50%";
                Y.style.top = "50%";
                Y.style.transform = "translate(-50%, -50%)";
              }
            }
            document.body.appendChild(Y);
            if (!this.state.autoExpandPanel) {
              {
                Y.style.display = "none";
                R.style.display = "flex";
              }
            }
            const a0 = document.createElement("div");
            a0.style.cssText = "\n                    background: linear-gradient(135deg, #e3f2fd, #bbdefb);\n                    color: #1976d2;\n                    font-size: 14px;\n                    font-weight: bold;\n                    padding: 7px 12px;\n                    border-bottom: 1px solid #bbdefb;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                ";
            const a1 = document.createElement("div");
            a1.style.display = "flex";
            a1.style.alignItems = "center";
            a1.innerHTML = "<i class=\"fa fa-car\" style=\"margin-right: 5px;\"></i>俱乐部车辆助手";
            a0.appendChild(a1);
            const a2 = document.createElement("button");
            a2.innerHTML = "<i class=\"fa fa-window-minimize\"></i>";
            a2.style.cssText = "\n                    background: transparent;\n                    border: none;\n                    color: #1976d2;\n                    font-size: 14px;\n                    cursor: pointer;\n                    width: 26px;\n                    height: 26px;\n                ";
            a2.onclick = () => this.toggleMinimize();
            a0.appendChild(a2);
            Y.appendChild(a0);
            this.setupDraggable(Y, a1);
            const a3 = document.createElement("div");
            a3.style.flex = "1";
            a3.style.overflowY = "auto";
            a3.style.padding = "7px";
            Y.appendChild(a3);
            const a4 = this.createCardContainer(a3, true);
            this.createSectionTitle("信息监控（角色+车辆）", a4);
            const a5 = document.createElement("div");
            a5.id = "gvh-role-info-display";
            a5.className = "gvh-role-info-display";
            a5.innerHTML = "<div class=\"gvh-role-base\"><strong>自动监控启动中</strong> - 正在获取信息...</div>";
            a4.appendChild(a5);
            const a6 = this.createCardContainer(a3, true);
            const a7 = document.createElement("div");
            a7.className = "gvh-data-container gvh-main-car-container";
            a6.appendChild(a7);
            const a8 = document.createElement("div");
            a8.id = "gvh-main-car-table-container";
            a7.appendChild(a8);
            const a9 = this.createCardContainer(a3);
            this.createSectionTitle("核心功能", a9);
            const aa = document.createElement("div");
            aa.className = "gvh-core-functions";
            a9.appendChild(aa);
            this.createFunctionButton("一键根据价值刷新并发车", async function () {
              {
                await this.processAllCarsByValue();
              }
            }, aa);
            this.createFunctionButton("查询俱乐部车辆", async function () {
              {
                await this.queryClubCars();
              }
            }, aa);
            this.createFunctionButton("按价值自动发车", async function () {
              {
                await this.autoCheckAndSendCars();
              }
            }, aa);
            this.createFunctionButton("一键发车-不刷新", async function () {
              {
                await this.sendAllCarsWithoutRefresh();
              }
            }, aa);
            const ab = {
              isClaim: true
            };
            this.createFunctionButton("收获所有可领取车辆", async function () {
              await this.claimAllCars();
            }, aa, ab);
            const ac = this.createCardContainer(a3);
            this.createSectionTitle("系统设置", ac);
            const ad = document.createElement("div");
            ad.style.display = "flex";
            ad.style.gap = "15px";
            ad.style.width = "100%";
            ad.style.boxSizing = "border-box";
            ad.style.padding = "0 5px";
            ac.appendChild(ad);
            const ae = document.createElement("div");
            ae.style.flex = "1";
            ae.style.minWidth = "0";
            ae.style.display = "flex";
            ae.style.flexDirection = "column";
            ae.style.gap = "10px";
            ad.appendChild(ae);
            const af = document.createElement("div");
            af.style.display = "flex";
            af.style.flexDirection = "column";
            af.style.gap = "8px";
            ae.appendChild(af);
            const ag = document.createElement("div");
            ag.innerText = "自动执行设置";
            ag.style.fontSize = "11px";
            ag.style.fontWeight = "bold";
            ag.style.color = "#1976d2";
            ag.style.marginBottom = "3px";
            af.appendChild(ag);
            const ah = (ay, az, aA, aB, aC, aL = false) => {
              {
                const aO = document.createElement("div");
                aO.className = "gvh-setting-item";
                aO.style.display = "flex";
                aO.style.alignItems = "center";
                aO.style.justifyContent = "flex-start";
                aO.style.gap = "8px";
                const aP = document.createElement("label");
                aP.innerText = ay;
                aP.style.width = "120px";
                aP.style.textAlign = "left";
                aP.style.flexShrink = "0";
                const aQ = document.createElement("input");
                aQ.type = az;
                if (!aL) {
                  {
                    aQ.value = aA;
                    aQ.min = aB;
                    aQ.style.width = az === "number" ? "25px" : "auto";
                    aQ.style.textAlign = "left";
                  }
                } else {
                  {
                    aQ.checked = aA;
                    aQ.style.width = "auto";
                  }
                }
                aQ.onchange = aC;
                aO.appendChild(aP);
                aO.appendChild(aQ);
                return aO;
              }
            };
            af.appendChild(ah("自动执行一键收发车", "checkbox", this.state.autoExecuteOnLoad, null, ay => {
              {
                this.state.autoExecuteOnLoad = ay.target.checked;
                localStorage.setItem("gvh-autoExecuteOnLoad", this.state.autoExecuteOnLoad);
              }
            }, true));
            af.appendChild(ah("等待每日任务完成", "checkbox", this.state.waitForDailyTask, null, ay => {
              this.state.waitForDailyTask = ay.target.checked;
              localStorage.setItem("gvh-waitForDailyTask", this.state.waitForDailyTask);
            }, true));
            af.appendChild(ah("自动展开界面", "checkbox", this.state.autoExpandPanel, null, ay => {
              {
                this.state.autoExpandPanel = ay.target.checked;
                localStorage.setItem("gvh-autoExpandPanel", this.state.autoExpandPanel);
              }
            }, true));
            af.appendChild(ah("自动执行延迟（秒）", "number", this.state.autoExecuteDelay, 1, ay => {
              {
                this.state.autoExecuteDelay = parseInt(ay.target.value) || 1;
                localStorage.setItem("gvh-autoExecuteDelay", this.state.autoExecuteDelay);
              }
            }));
            af.appendChild(ah("监控间隔时间（秒）", "number", this.state.infoIntervalTime, 5, ay => {
              {
                const aB = parseInt(ay.target.value) || 5;
                this.state.infoIntervalTime = Math.max(5, aB);
                localStorage.setItem("gvh-infoInterval", this.state.infoIntervalTime);
                this.startInfoLoop();
              }
            }));
            const ai = document.createElement("div");
            ai.style.display = "flex";
            ai.style.flexDirection = "column";
            ai.style.gap = "8px";
            ae.appendChild(ai);
            const aj = document.createElement("div");
            aj.innerText = "价值判断设置";
            aj.style.fontSize = "11px";
            aj.style.fontWeight = "bold";
            aj.style.color = "#1976d2";
            aj.style.marginBottom = "3px";
            ai.appendChild(aj);
            ai.appendChild(ah("发车价值阈值", "number", this.state.valueThreshold, 0, ay => {
              {
                this.state.valueThreshold = parseInt(ay.target.value) || 0;
                localStorage.setItem("gvh-valueThreshold", this.state.valueThreshold);
              }
            }));
            ai.appendChild(ah("最大刷新次数", "number", this.state.maxRefreshTimes, 1, ay => {
              {
                this.state.maxRefreshTimes = parseInt(ay.target.value) || 1;
                localStorage.setItem("gvh-maxRefreshTimes", this.state.maxRefreshTimes);
              }
            }));
            const ak = document.createElement("div");
            ak.style.flex = "1";
            ak.style.minWidth = "0";
            ak.style.display = "flex";
            ak.style.flexDirection = "column";
            ak.style.gap = "8px";
            ad.appendChild(ak);
            const al = document.createElement("div");
            al.innerText = "奖励价值详细设置";
            al.style.fontSize = "11px";
            al.style.fontWeight = "bold";
            al.style.color = "#1976d2";
            al.style.marginBottom = "3px";
            ak.appendChild(al);
            ak.appendChild(ah("金砖价值（/个）", "number", this.state.rewardValueConfig.goldBrick, 0, ay => {
              this.state.rewardValueConfig.goldBrick = parseFloat(ay.target.value) || 0;
              localStorage.setItem("gvh-rewardValueConfig", JSON.stringify(this.state.rewardValueConfig));
            }));
            ak.appendChild(ah("刷新票价值（/个）", "number", this.state.rewardValueConfig.refreshTicket, 0, ay => {
              this.state.rewardValueConfig.refreshTicket = parseFloat(ay.target.value) || 0;
              localStorage.setItem("gvh-rewardValueConfig", JSON.stringify(this.state.rewardValueConfig));
            }));
            ak.appendChild(ah("招募令价值（/个）", "number", this.state.rewardValueConfig.recruitOrder, 0, ay => {
              {
                this.state.rewardValueConfig.recruitOrder = parseFloat(ay.target.value) || 0;
                localStorage.setItem("gvh-rewardValueConfig", JSON.stringify(this.state.rewardValueConfig));
              }
            }));
            ak.appendChild(ah("白玉价值（/个）", "number", this.state.rewardValueConfig.whiteJade, 0, ay => {
              this.state.rewardValueConfig.whiteJade = parseFloat(ay.target.value) || 0;
              localStorage.setItem("gvh-rewardValueConfig", JSON.stringify(this.state.rewardValueConfig));
            }));
            ak.appendChild(ah("彩玉价值（/个）", "number", this.state.rewardValueConfig.coloredJade, 0, ay => {
              {
                this.state.rewardValueConfig.coloredJade = parseFloat(ay.target.value) || 0;
                localStorage.setItem("gvh-rewardValueConfig", JSON.stringify(this.state.rewardValueConfig));
              }
            }));
            const am = this.createCardContainer(a3);
            this.createSectionTitle("操作日志", am);
            const an = document.createElement("div");
            an.style.display = "flex";
            an.style.justifyContent = "space-between";
            an.style.marginBottom = "5px";
            am.appendChild(an);
            const ao = document.createElement("button");
            ao.className = "gvh-action-btn";
            ao.innerHTML = "<i class=\"fa fa-trash-o\"></i> 清空";
            ao.onclick = () => {
              {
                const aA = document.getElementById("gvh-operation-log-container");
                if (aA) {
                  {
                    aA.innerHTML = "";
                    this.adjustLogContainerHeight();
                  }
                }
                const aB = document.querySelector(".gvh-refresh-counts");
                if (aB) {
                  aB.remove();
                }
              }
            };
            an.appendChild(ao);
            const ap = document.createElement("button");
            ap.className = "gvh-action-btn gvh-action-btn-copy";
            ap.innerHTML = "<i class=\"fa fa-copy\"></i> 复制";
            ap.onclick = () => {
              {
                const aA = document.getElementById("gvh-operation-log-container");
                if (!aA) {
                  {
                    this.showtip("暂无日志可复制", "warning");
                    return;
                  }
                }
                const aB = aA.querySelectorAll("div");
                const aC = Array.from(aB).map(aN => aN.textContent);
                const aL = aC.join("\n");
                this.copyToClipboard(aL, "日志已复制");
              }
            };
            an.appendChild(ap);
            const aq = document.createElement("div");
            aq.className = "gvh-log-container";
            am.appendChild(aq);
            const ar = document.createElement("div");
            ar.id = "gvh-operation-log-container";
            ar.style.fontFamily = "Consolas, monospace";
            aq.appendChild(ar);
            this.logOperation("车辆助手（修复版）已加载完成，自动监控启动中...", "success");
          }
        },
        init() {
          this.addStyles();
          this.createMainUI();
          this.setupAutoExecute();
          this.startInfoLoop();
        }
      };
    }
  }();
  if (document.readyState === "loading") {
    {
      document.addEventListener("DOMContentLoaded", () => j.init());
    }
  } else {
    {
      j.init();
    }
  }
})();
(function () {
  const an = {
    UIQFe: "div",
    jJEeh: "gvh-tight-card",
    EaQzY: "gvh-card-inner",
    VCCWz: "已领取",
    nYKMu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    nSYDZ: "每周奖励已领取",
    UHkOX: "info",
    ulCwo: "领取每周奖励失败",
    hHwvy: function (d1, d2) {
      return d1 === d2;
    },
    NXlrf: "CpGAX",
    DQWxg: "jCxcT",
    MfqSO: function (d1, d2) {
      return d1 !== d2;
    },
    IyOmJ: "RuRxA",
    JkslM: "zDTgp",
    kJwvK: "debug",
    RyjMv: "未找到可用的军团ID",
    FoOxk: function (d1) {
      return d1();
    },
    PMHpj: function (d1, d2) {
      return d1 === d2;
    },
    KUVPD: function (d1, d2) {
      return d1 + d2;
    },
    ZsCPN: function (d1, d2) {
      return d1 !== d2;
    },
    oxSaw: "iBFZD",
    lTVZK: "WgxmK",
    FOqeA: function (d1, d2) {
      return d1 === d2;
    },
    Nusad: "wYUVs",
    mxuNi: "glKbO",
    uuoCD: "(((.+)+)+)+$",
    MkwXE: "DIBJZ",
    hxyJk: "EFtgv",
    ecEer: "edKfY",
    GgwSY: function (d1, d2) {
      return d1 + d2;
    },
    pwBsu: function (d1, d2) {
      return d1 === d2;
    },
    vJutj: "ablxd",
    RjWwj: "REkuy",
    ExBjw: "true",
    GxoJS: function (d1, d2) {
      return d1 === d2;
    },
    gptuy: "tkadD",
    OwyTs: "lgjcI",
    vpCdf: "thCBS",
    HtcYV: "VbprO",
    yPVfA: "last:login:time",
    cMoAc: "JfQLh",
    IDDMk: "JqGod",
    EnfdL: function (d1, d2) {
      return d1(d2);
    },
    uLUMx: function (d1, d2) {
      return d1 < d2;
    },
    fRKng: function (d1, d2) {
      return d1 === d2;
    },
    EwweG: "mLpNW",
    qkwLD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    XhmZu: function (d1, d2) {
      return d1(d2);
    },
    BSavm: function (d1, d2) {
      return d1 - d2;
    },
    vnpkF: "<br>",
    rEliM: function (d1, d2) {
      return d1 !== d2;
    },
    sqclH: "JLMKG",
    qEuJT: "NpitB",
    Qijrq: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    hClfB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    oEUyU: "error",
    VuUYX: "竞技场任务执行出错",
    GRODg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    xdwac: "无可用WebSocket连接",
    GjTJU: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kxhuX: "WebSocket连接缺失",
    qtuPr: function (d1, d2) {
      return d1 === d2;
    },
    pjSEX: "tPewG",
    XGzOw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pWtyz: function (d1, d2) {
      return d1 === d2;
    },
    RzDMh: "IsVnZ",
    vumSj: "已到达最后一个账号，自动切换已停止",
    gxkcg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    MKRTY: "false",
    NTaJb: "shark-title",
    JTaCb: function (d1, d2) {
      return d1 === d2;
    },
    rGcUS: "iPDHr",
    zpcrS: "已处理全部bin",
    DNJii: "daily-task-checkbox",
    rrxoK: "auto-answer-checkbox",
    zqVZP: "salt-jar-auto-checkbox",
    QtgKo: "tower-climb-checkbox",
    kEvld: "black-market-checkbox",
    zKZSa: function (d1, d2) {
      return d1(d2);
    },
    oIMuW: function (d1, d2) {
      return d1 === d2;
    },
    Zarwq: "MPdDo",
    eFcau: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    xPGNQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rLzPg: "accountSelect",
    ubrso: "BndOw",
    CtBzq: function (d1, d2) {
      return d1 === d2;
    },
    EwUAC: "wQEZZ",
    YYFbi: "yrZjh",
    YFSsm: "csXGP",
    jfrpJ: "change",
    BzsAK: "warning",
    yPZVJ: "未找到账号选择框，尝试直接切换",
    NSOlL: function (d1, d2) {
      return d1 === d2;
    },
    dUBDj: "mMqdw",
    lnGJg: "dQRRz",
    OTdeZ: "check_car_status_before_switch",
    ZKUBU: "⚠️ 本地时间与网络时间差异过大:",
    byBTw: function (d1, d2) {
      return d1 / d2;
    },
    TEGDm: "无符合条件商品",
    AvJgY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    cycrt: "IrrZF",
    ApDwr: "QMqWB",
    zlGaD: function (d1) {
      return d1();
    },
    unpbP: "KTbAS",
    blWNl: "正在等待车辆处理完成...",
    RppqZ: function (d1, d2) {
      return d1 < d2;
    },
    bHCst: function (d1, d2) {
      return d1 !== d2;
    },
    YTteL: "SzdyZ",
    brGra: "ulruh",
    cPMVu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    tPyuJ: "车辆处理已完成，准备切换账号",
    IgQbN: "success",
    ImgVB: "等待车辆处理超时，强制切换账号",
    vbXGu: "已停止登录请求监控",
    NNkXL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    UfsmV: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    EgUjA: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PFnVX: "<div style=\"text-align:center; padding:7px; color:#666; font-size:11px;\">暂无车辆数据，自动监控将定期更新</div>",
    EZwry: "otherTaskStates",
    kXhdm: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    paVxo: "其他任务状态已加载",
    RnDMv: "input[type=\"checkbox\"][data-task-key]",
    OBPgR: function (d1) {
      return d1();
    },
    cNbml: function (d1, d2) {
      return d1 !== d2;
    },
    akPKV: "xgcIw",
    Zymer: "HpRPK",
    UHqHP: function (d1, d2) {
      return d1 > d2;
    },
    EZYDT: function (d1, d2) {
      return d1 === d2;
    },
    kCkpl: "mVXeL",
    WQvjT: "oBjww",
    oWHzq: "HpCqz",
    SVdcu: "EWoRk",
    jnEtN: "辣条助手",
    cdIGl: function (d1, d2) {
      return d1(d2);
    },
    hiiJS: function (d1, d2) {
      return d1(d2);
    },
    sGzLg: "已暂停",
    nZODm: "已恢复",
    JQOuX: "JMGTf",
    STGWe: "collapsed",
    WusNP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RkTIm: "TuYxk",
    fQekN: function (d1, d2) {
      return d1 !== d2;
    },
    CZaAn: "TZeTM",
    aZltE: "vkLdy",
    lijWw: "黄金鱼竿不在高级商人配置中",
    cdpRm: "kqIbE",
    VnEyh: "Zsrso",
    kpvCi: "XcJym",
    lctAs: "IhyBB",
    FkRJP: "bUWvd",
    osFJD: "每日任务完成",
    KyLgV: function (d1) {
      return d1();
    },
    UQMer: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    DMnIG: "vaCWQ",
    LGzYt: "xtVCA",
    YIMFi: "lkRPI",
    HcZfr: "aXMEc",
    uCTZb: function (d1, d2) {
      return d1(d2);
    },
    LAgLT: function (d1, d2) {
      return d1(d2);
    },
    MJANY: "discount",
    OXYIc: "VnNTg",
    kANHX: "Tjmhu",
    LYkbm: "OEcgR",
    nZQSe: "车辆改装奖励领取失败",
    TCkvK: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QUnyB: function (d1, d2) {
      return d1 === d2;
    },
    xwFms: "qQQxU",
    VLLML: "jUaqU",
    peYCX: function (d1) {
      return d1();
    },
    EIICu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    cjafO: function (d1, d2) {
      return d1(d2);
    },
    Klgwc: "ViJPu",
    lUJMA: "qBqvt",
    MkHPU: "brkrc",
    QWkeN: "[账号切换]",
    Tlraa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jiAGV: "IJaia",
    neqzs: "PNjZI",
    XFnRD: "[TIP]",
    rFzYa: function (d1, d2) {
      return d1 !== d2;
    },
    rrAYT: "CmXRA",
    MHDgn: "kPied",
    NQgag: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    VyIdk: "ZmQSJ",
    MpdPn: "kvPNF",
    UnmnH: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jrIFk: "UVpXY",
    cnUmi: "NIfXM",
    zFCvE: "vJdnL",
    ztKQR: function (d1, d2) {
      return d1 !== d2;
    },
    NBYqC: "mEcTF",
    MZqPT: function (d1) {
      return d1();
    },
    ABpFz: "arena",
    APZpi: "upgradeStar",
    MuwpQ: function (d1) {
      return d1();
    },
    hhrVP: function (d1, d2) {
      return d1 === d2;
    },
    oLmhi: "tower",
    CgMzO: function (d1) {
      return d1();
    },
    cByNc: "monthlyTask",
    GQrHy: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    BuDAQ: "string",
    HoaTo: "login/authuser",
    DjpgY: "YbEdf",
    kKSWO: "FWIVr",
    qIAiY: "GXMKS",
    Ctcdn: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eGFhk: "加载任务状态失败",
    BQglj: "dailyTaskStates",
    xJBmC: "nfpKb",
    YYfeq: "RYdgf",
    tCFGW: "POST",
    VHjNe: "application/octet-stream",
    FcKAM: "NRcNv",
    BmLaP: "FkaAC",
    jvsGc: "tUidK",
    sfbWv: function (d1) {
      return d1();
    },
    BkZkb: function (d1, d2) {
      return d1 === d2;
    },
    yuYDi: "AwIxw",
    auWUY: "VlUfJ",
    WPwqC: function (d1) {
      return d1();
    },
    adfFi: "RHaFS",
    Afmbx: "pvdnn",
    WQnVS: function (d1, d2) {
      return d1 <= d2;
    },
    cwPOg: "OJFNM",
    Aibej: function (d1, d2) {
      return d1 + d2;
    },
    gtkaW: function (d1, d2) {
      return d1 >= d2;
    },
    DAZIA: "emcXQ",
    lEuDf: "Syxff",
    KktLd: function (d1, d2) {
      return d1(d2);
    },
    lXZqc: function (d1, d2) {
      return d1(d2);
    },
    SWsxF: "summary",
    UcfbQ: function (d1, d2) {
      return d1 !== d2;
    },
    VhMza: function (d1, d2) {
      return d1 > d2;
    },
    AhmNW: function (d1) {
      return d1();
    },
    gTVCa: "DxvJn",
    pVJHz: "WJwIx",
    EMhbP: "shark-panel",
    LWBgp: "YGAbI",
    couGM: "book_upgrade",
    RbeYd: "NhFLL",
    ivWHK: "#accountSwitchButton",
    PwpSi: function (d1, d2) {
      return d1 !== d2;
    },
    dCSBI: "XkiSI",
    twofo: "HbJIO",
    cIXUC: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rHshv: "找到切换按钮，强制触发点击事件",
    jBmPR: "click",
    MlKns: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Jxgny: "未找到切换按钮，执行直接切换",
    vTRfn: "autoExpandAfterRefresh",
    XJvdY: "tXosL",
    gvImm: function (d1, d2) {
      return d1 * d2;
    },
    sNLZU: function (d1, d2) {
      return d1 / d2;
    },
    xUuev: ".manual-title",
    Opkup: "每日任务配置",
    FMnlx: "JIOju",
    tXhNz: function (d1, d2) {
      return d1 * d2;
    },
    ofDuK: "IwEZV",
    YOzMn: function (d1, d2) {
      return d1 !== d2;
    },
    vlNJo: "JixjF",
    rNieo: "none",
    Nrjds: "Dmtcv",
    IooXN: "PGhBY",
    BgFqM: "vlCwi",
    UgHEL: "RcgVz",
    lMYuR: "请先选择BIN文件",
    YmINc: function (d1, d2) {
      return d1 !== d2;
    },
    tyDof: "sXZCK",
    TJNDD: "正在处理文件，请稍候...",
    LDAyh: "block",
    gbgMt: "yOCzX",
    RwGrN: function (d1) {
      return d1();
    },
    CEiiL: "gvh-autoExecuteDelay",
    psyQR: "PuEYu",
    AGquu: "QLgzZ",
    EwuHg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    meGBY: "已经是最后一个账号，没有下一个可切换",
    VweZb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    nesFf: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jSSiJ: "lXSHg",
    FvSwx: "wBUgF",
    oRDXt: "cwjiU",
    AjWzv: "HmpQa",
    VSksi: "刷新票",
    EYagU: function (d1, d2) {
      return d1 * d2;
    },
    oXlDD: "招募令",
    KjpNe: "input[type=\"checkbox\"]",
    Covnb: "option",
    AxxtY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZixmA: "KKEQR",
    yuCxf: "PBKgM",
    Sqmvg: "NPVBu",
    oDMYj: "WiFNM",
    tqlgR: "检测到执行选项，自动切换账号...",
    Hbswg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    mUshJ: "MxYdJ",
    gVIKH: "yizhG",
    QLoBE: "IDpQQ",
    ZwSNu: "xLXew",
    fNBCP: "bFwqN",
    eqWwS: "DWydO",
    dOVQu: function (d1, d2) {
      return d1(d2);
    },
    LCgES: "UcNdv",
    ddSJh: "tlZpN",
    QENKI: function (d1, d2) {
      return d1 === d2;
    },
    ASQPi: "SzZkf",
    FnCJp: "没有可删除的账号",
    vOxVc: "date",
    HXfuF: function (d1, d2) {
      return d1(d2);
    },
    mOiPv: "✅ 网络时间获取成功:",
    FSwyr: "sUIZR",
    wMXsX: "FnKKQ",
    mzatW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WBqax: "saSnO",
    oJYpz: "vnyId",
    fDGoe: "DLAQX",
    hvvHT: "已启用自动切换，按列表顺序依次执行，最后一个账号后停止",
    IiRFQ: "XYjPK",
    qyVlJ: "IzTBS",
    OJLIy: "DOMContentLoaded",
    OfUNL: function (d1, d2) {
      return d1 - d2;
    },
    qQEBQ: "未运行",
    eSqSm: "task-status",
    Khekt: "hZuBO",
    HzENU: "NxQHT",
    tMkad: "fjUee",
    YlnmR: "请先选择账号",
    KQAXx: "FdSzx",
    vthsB: "prdJE",
    UUFpJ: function (d1, d2) {
      return d1 === d2;
    },
    lyDWT: "Mqrqu",
    plNdA: "DTVPX",
    OfEYx: "<option value=\"\">-- 选择账号 --</option>",
    iaMTK: "manual-card",
    WJyPH: "display:flex; flex-direction:column; gap:8px;",
    WYGvp: "input",
    vxhKj: "file",
    WtMFZ: ".bin",
    SSTPf: "binFileInput",
    fujnT: "height:6px; background:#eee; border-radius:3px; display:none;",
    UuevP: "progressBar",
    ujIIi: "height:100%; background:#4CAF50; width:0%; transition:width 0.3s ease;",
    TcnEX: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    MuseO: "runonce-btn",
    BUZEc: "display:flex; flex-direction:column; gap:12px;",
    hvYnW: "display:flex; gap:8px;",
    mAuRs: "select",
    iQdIc: "flex:1; padding:6px; border-radius:4px; background:#334155; color:#fff; border:1px solid #475569;",
    KhIdv: "stop-btn",
    zwrBL: "切换下一个",
    dDCBq: "start-btn",
    ZzDxU: "font-size:13px; font-weight:bold; color:#fff; margin-top:5px;",
    hlyZW: "切换规则：按列表顺序依次切换，最后一个账号后停止",
    StpxE: "manual-title",
    cYlan: "切换后立即执行",
    IyqkI: "display:grid; grid-template-columns: repeat(2, 1fr); gap:8px;",
    MurmI: "每日任务",
    HcPvw: "自动答题",
    hirMC: "盐罐自动化",
    IiUwv: "咸将塔爬塔",
    gTWXB: "黑市采购",
    rPhqC: "使用兑换码",
    pyZCV: "display:flex; align-items:center; gap:8px; margin-top:5px; flex-wrap: wrap;",
    AxVqg: "任务完成后自动切号",
    mdbHJ: function (d1, d2) {
      return d1 === d2;
    },
    ZoGZw: "自动展开界面",
    dhnMv: function (d1, d2) {
      return d1 === d2;
    },
    xmKyH: "切号时判断车辆处理状态",
    aLyrE: "切换账号",
    Ixxok: "accountSwitchButton",
    HaELs: function (d1, d2) {
      return d1 >>> d2;
    },
    Rpeab: function (d1, d2) {
      return d1 | d2;
    },
    iVpLk: function (d1, d2) {
      return d1 << d2;
    },
    hCTkM: function (d1, d2) {
      return d1 >>> d2;
    },
    dSzFc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    OSqQa: "object",
    gwxmi: "data-index",
    jwuEg: "阵容已选择，继续挑战",
    rIDeo: "qxbQn",
    hFKPg: "gEzXD",
    miiMp: "CMsxL",
    bsyaU: "debu",
    orBcH: "gger",
    uTJau: "stateObject",
    sAxzx: "cPRkL",
    ghRHX: "WS已连接",
    cNmBs: "nqOHr",
    RmcfG: "游戏标题显示WebSocket已连接，跳过等待",
    wUYEV: "检测到另一个脚本已通过游戏标题通知连接成功",
    vrYYa: "function",
    RMMen: "GVQVZ",
    jxsJk: "QqTLT",
    JVyCQ: "EZZYi",
    xTozo: "QgmiR",
    dAybU: " WS已连接",
    MOltz: "WebSocket连接成功",
    Dbbkl: function (d1, d2) {
      return d1 >= d2;
    },
    GBGiD: "GzOGW",
    IVVyz: function (d1, d2) {
      return d1 && d2;
    },
    DIYba: "gvh-mini-helper-icon",
    beaGk: "gvh-mini-icon-position",
    JNJvY: "dragging",
    JHlnn: "gvh-helper-position",
    kbwtm: "button",
    xPbgd: function (d1) {
      return d1();
    },
    LuGpK: "（金币）",
    LEbBo: "（金砖）",
    ZkEGy: "zDyWX",
    kkWVU: "JdvTv",
    AxxIb: "领取0元累充奖励成功",
    Wzmrq: "每日总奖励已领取",
    JCWBv: "⚠️ 检测到时间往前调整异常:",
    iPEcN: "车辆未发车（待发车状态）",
    DxKQu: "GYGJa",
    dJBOt: "aouAa",
    lAZTS: function (d1) {
      return d1();
    },
    zQNtQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    DagPr: "等待WebSocket连接就绪...",
    WoPSM: "yGidD",
    vsqFe: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uZOnM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ETaQF: "LRCTh",
    UPYOY: function (d1, d2) {
      return d1 !== d2;
    },
    tIQCq: "aFYBA",
    rBXVe: "WebSocket连接超时，跳过切换后任务执行",
    cOlTg: "WebSocket连接已就绪，开始执行切换后的任务...",
    mkZBn: "yWYMe",
    CwIYd: "YGnUA",
    NcPRi: "JjwsP",
    GwfBF: function (d1, d2) {
      return d1 === d2;
    },
    REqUo: "LenhB",
    xspXQ: "BISgl",
    wjDmJ: "XCrFC",
    NyKPI: "AsMTR",
    wozjo: "eKWlS",
    rjsqP: "ruxvV",
    UfCry: "IGcKg",
    CvlvR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ohdel: function (d1, d2) {
      return d1 === d2;
    },
    nwunF: "XCNIU",
    jJBZg: function (d1, d2) {
      return d1 !== d2;
    },
    QHSDF: "KnybA",
    KOJJH: "niVFw",
    dTrWJ: "wiAle",
    nQrtw: "xYWLx",
    JLdiw: "Wxfcy",
    AVWUL: function (d1, d2) {
      return d1 !== d2;
    },
    wtlov: "eYcde",
    DteAG: "VKgLy",
    UTQKi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    dgDgI: function (d1, d2) {
      return d1 !== d2;
    },
    Pnfyv: "bzbqU",
    WEbGZ: ".control-textarea",
    RcoqN: "GOQft",
    nQjkl: "ZdMXr",
    hEmXT: "qMZFm",
    DMJyW: "AgUKp",
    EDUpW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pNhSV: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vMQYe: "切换后任务执行完成",
    MzpME: "切换后任务已完成",
    QmXzf: "AtFhB",
    srvKe: "准备自动切换到下一个账号...",
    fFPzx: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aOOvN: function (d1, d2) {
      return d1 !== d2;
    },
    Mhxjb: "sFklp",
    ioRSp: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    paiKA: "车辆处理完成",
    yYIag: "bin_",
    OeIxG: "bin_file_names",
    PTxmd: "current_selected_account",
    HEvKq: "post_switch_actions",
    DzECT: "exec_delay_seconds",
    mLTTU: "account_switch_order",
    APaoB: "auto_switch_enabled",
    brrWz: "auto_expand_enabled",
    JVlwC: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    KjsIG: function (d1, d2) {
      return d1 - d2;
    },
    tOIfW: function (d1, d2) {
      return d1 - d2;
    },
    HiVAK: function (d1, d2) {
      return d1 * d2;
    },
    aYisq: function (d1, d2) {
      return d1(d2);
    },
    piVqo: "gvh-infoInterval",
    ulSsM: function (d1, d2) {
      return d1 === d2;
    },
    YkTUI: "tUbYC",
    pfOaR: ".shark-tab[data-tab=\"log\"]",
    JbpAK: "active",
    hERhI: function (d1, d2) {
      return d1 === d2;
    },
    hdvUt: "biByT",
    XZpVy: "HwaBa",
    ruGYt: "领取每日总奖励失败",
    wFUGr: "shark-header",
    bYZOO: function (d1, d2) {
      return d1 === d2;
    },
    OHdio: "ybupq",
    wzGvl: "fhKyY",
    IexKI: function (d1, d2) {
      return d1 !== d2;
    },
    yruLM: "tWjId",
    SqEjn: "linear-gradient(135deg, #ce93d8, #ba68c8)",
    sGCGw: "linear-gradient(135deg, #bbdefb, #90caf9)",
    RHuri: "translateY(-1px)",
    WCowL: function (d1, d2) {
      return d1 !== d2;
    },
    iEDSG: "xBEgY",
    KVJrR: "自动挑战咸将塔，直到体力耗尽或达到4500层上限，按设定间隔重复执行",
    JhMIS: function (d1, d2) {
      return d1 !== d2;
    },
    DyltE: "pvRBU",
    ZyKqJ: "ruBMS",
    FYTSr: "KVMtU",
    lNGLE: "radio",
    UJmGq: "span",
    SlkjP: function (d1, d2) {
      return d1 === d2;
    },
    RlpFk: "nFuJg",
    edXak: "Cvmop",
    trvMN: "linear-gradient(135deg, #f3e5f5, #ce93d8)",
    ZTVhM: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    vIXCN: "translateY(0)",
    jCnED: function (d1, d2) {
      return d1 === d2;
    },
    pABPD: "mWPCL",
    WUBHw: "arena-tip",
    PYxdN: function (d1, d2) {
      return d1 === d2;
    },
    RmMgI: function (d1, d2) {
      return d1 === d2;
    },
    dQhXM: "ojfMU",
    vGNeq: "PpbeE",
    KFLlQ: "luHcM",
    FourJ: "YxKOJ",
    VYrPg: "style",
    Ewqih: function (d1, d2) {
      return d1 !== d2;
    },
    gQxze: "cLLov",
    dkHdV: "WebSocket连接未就绪，自动执行失败",
    cFbfZ: "qocxD",
    PGQTq: "gYBKm",
    PqbEU: function (d1, d2) {
      return d1(d2);
    },
    ZkZFN: "arenaLogContainer",
    Dzfgi: "zh-CN",
    EKflR: "2-digit",
    Ummin: function (d1, d2) {
      return d1 === d2;
    },
    HnACh: function (d1, d2) {
      return d1 === d2;
    },
    KbtSH: function (d1, d2) {
      return d1 === d2;
    },
    XYVLE: function (d1, d2) {
      return d1 === d2;
    },
    OkuSo: "#fbbf24",
    CkBOk: "YnCvN",
    WcYUl: "bold",
    fkpFH: function (d1, d2) {
      return d1(d2);
    },
    CeDej: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WmbwC: function (d1, d2) {
      return d1 === d2;
    },
    nbwIE: "vuPdQ",
    ZuHXq: "hshMp",
    JMzvb: function (d1, d2) {
      return d1 === d2;
    },
    laVPD: "PiPsj",
    badUv: function (d1) {
      return d1();
    },
    AAHQK: function (d1, d2) {
      return d1 + d2;
    },
    fMmeE: function (d1, d2) {
      return d1 !== d2;
    },
    zJwgN: "gPTqF",
    BMiOl: function (d1) {
      return d1();
    },
    QFDbF: "gvh-game-helper-panel",
    snnjI: function (d1, d2) {
      return d1 || d2;
    },
    tbyEE: function (d1, d2) {
      return d1 !== d2;
    },
    INzKr: function (d1, d2) {
      return d1(d2);
    },
    MwQTV: "flex",
    Dglgk: "hidden",
    aiUeJ: function (d1, d2) {
      return d1 < d2;
    },
    CDUIP: function (d1, d2) {
      return d1 + d2;
    },
    LaiTe: function (d1, d2) {
      return d1 < d2;
    },
    UliFF: function (d1, d2) {
      return d1 - d2;
    },
    yJohy: function (d1, d2) {
      return d1 / d2;
    },
    KllvK: function (d1, d2) {
      return d1 - d2;
    },
    SJnPR: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    BvAPr: "visible",
    yagXp: "wGEHd",
    lIySp: "pFqKB",
    UobBB: function (d1) {
      return d1();
    },
    aCBwF: function (d1, d2) {
      return d1 !== d2;
    },
    IJDqw: function (d1, d2) {
      return d1 > d2;
    },
    Ackzv: "jRuap",
    beJxA: "checkbox-container",
    jeVZm: "checkbox",
    PgjGf: "task-checkbox",
    Pscge: "task-name",
    BDfuw: "gvh-rewardValueConfig",
    zxHZN: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    LlwEe: function (d1) {
      return d1();
    },
    pnvYR: function (d1, d2) {
      return d1(d2);
    },
    yxrtY: "4|1|0|2|3",
    moDRg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    czMmz: function (d1) {
      return d1();
    },
    xYidS: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    szNpY: "bnuod",
    jAoIb: "WyPZj",
    rMNGu: function (d1, d2) {
      return d1 !== d2;
    },
    KRtxC: "0px",
    FUSQU: function (d1, d2) {
      return d1 !== d2;
    },
    cCrAT: "YpaBH",
    jsIYC: function (d1, d2) {
      return d1 === d2;
    },
    eHfvk: "qxMxP",
    tarHa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aXmWz: "lcIGm",
    DjmEa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rsaft: "错误：未找到可用的WebSocket连接",
    IyLnW: "CdjoV",
    BetsH: "jeKvg",
    mWELe: function (d1, d2) {
      return d1 + d2;
    },
    YbZqJ: function (d1, d2) {
      return d1(d2);
    },
    qQHiF: "goods-item",
    wYBZK: "goods-name",
    rsFzt: "60px",
    kbLAF: "jpXgO",
    tvhAw: "QbBUs",
    SNkXd: function (d1, d2) {
      return d1(d2);
    },
    TpVKF: "nPTRV",
    tLEiv: "0 0 1px 0",
    bPOaZ: function (d1, d2) {
      return d1 === d2;
    },
    OPWZq: "iedhU",
    hxBXZ: "vqBsW",
    VzLKD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    yqnYV: "XKVQn",
    nMPNg: "aFcoh",
    MwMrx: "collapsible-panel",
    HtVTw: function (d1, d2) {
      return d1 !== d2;
    },
    Secei: "FMyca",
    uuqQp: "wNglb",
    DeBJr: "WKcVM",
    clhed: "oYvNk",
    RgqkY: "返回错误码-5",
    OVjtJ: "⚠️ 检测到系统时间被重置:",
    JqLfW: function (d1, d2) {
      return d1 / d2;
    },
    pqngh: function (d1, d2) {
      return d1 - d2;
    },
    vdvdB: function (d1, d2) {
      return d1 === d2;
    },
    JBnGx: "otyRv",
    TpWhl: "oRuUx",
    jMGIj: ".collapsible-panel",
    SLELR: function (d1, d2) {
      return d1 !== d2;
    },
    xMxKw: "HyKXl",
    tKqeO: function (d1, d2) {
      return d1 === d2;
    },
    hwhgj: ".task-options-grid",
    eighp: function (d1, d2) {
      return d1 === d2;
    },
    timfC: "hpZap",
    Gpzhp: "JwJTl",
    gyCeC: function (d1, d2) {
      return d1 === d2;
    },
    cpfID: "JPRqu",
    eZcIS: "upCJg",
    fcFzF: function (d1, d2) {
      return d1 === d2;
    },
    oVaHL: "bOvDP",
    HUzUs: function (d1) {
      return d1();
    },
    EnswY: ".task-checkbox[data-task-name]",
    GbqWn: function (d1, d2) {
      return d1 > d2;
    },
    HPsXR: function (d1, d2) {
      return d1 !== d2;
    },
    VJwKB: "AejYZ",
    AwNpM: "GTtlu",
    JkQnx: function (d1) {
      return d1();
    },
    NYpha: "无法获取队伍信息，数据结构异常",
    dfFwC: function (d1, d2) {
      return d1(d2);
    },
    slWhb: "FbsAG",
    yONde: "ZwWlO",
    vVzJW: function (d1, d2) {
      return d1 !== d2;
    },
    abKdz: "jegUD",
    YqFIv: function (d1, d2) {
      return d1 === d2;
    },
    lzKfE: "cviyo",
    ApmTI: "LUAEY",
    dxtNB: "gvh-setting-item",
    YXgxN: "center",
    GpJHa: "flex-start",
    VoPiS: "8px",
    PiafA: "label",
    wLfrT: "120px",
    eunIU: "left",
    fggZN: "number",
    dfLGc: "25px",
    fiHhd: "auto",
    oWgVs: function (d1) {
      return d1();
    },
    PChQz: "BpoLa",
    KQJZX: function (d1, d2) {
      return d1 === d2;
    },
    CBldO: "IioMv",
    RJMqU: function (d1, d2) {
      return d1 === d2;
    },
    CxqdQ: function (d1) {
      return d1();
    },
    tnCTG: function (d1, d2) {
      return d1 !== d2;
    },
    mgsPM: "Khifq",
    kkfOU: function (d1, d2) {
      return d1 !== d2;
    },
    nUNab: "HhnxV",
    PTutd: "xfXHF",
    uFKEB: ".task-checkbox",
    Sczse: function (d1, d2) {
      return d1 === d2;
    },
    QqICX: "FgYmw",
    iWPlq: "ZfVsc",
    dTtHi: function (d1, d2) {
      return d1 !== d2;
    },
    CUKBA: "BwDMt",
    VEfXX: "NdKJZ",
    uLlpT: function (d1, d2) {
      return d1(d2);
    },
    vIFeI: "LZQri",
    GGDyd: "pVrmp",
    PqFOQ: "return (function() ",
    dCqdu: "{}.constructor(\"return this\")( )",
    lgjWC: "⚠️ 检测到时间倒流异常:",
    SjzbV: function (d1, d2) {
      return d1 / d2;
    },
    PVabw: function (d1, d2) {
      return d1 === d2;
    },
    Gxpck: "ZbbJW",
    PPJiT: "LvXWJ",
    JKYQO: function (d1, d2) {
      return d1 !== d2;
    },
    hvmDU: "gvQje",
    EMpZb: "WkNmU",
    MwDGD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    IpWEL: "其他任务状态已保存",
    OqvLg: function (d1, d2) {
      return d1 === d2;
    },
    STCNQ: "SQpBJ",
    DXOdU: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aSOny: "保存其他任务状态失败",
    gpXna: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    chYwz: "WebSocket连接成功，已更新游戏标题",
    ryCzc: function (d1, d2) {
      return d1 < d2;
    },
    bXlnm: function (d1, d2) {
      return d1 !== d2;
    },
    XsiaV: "BThOI",
    szynJ: "hero_heroupgradestar",
    gyMQg: "DJoOb",
    bwuct: "qlXrL",
    zcyZR: "XCCYA",
    VAyKe: function (d1, d2) {
      return d1 === d2;
    },
    ZtoOH: "RgBsy",
    eboZD: "pNFph",
    pFVYr: function (d1, d2) {
      return d1 !== d2;
    },
    GfLOG: "QPLEb",
    FdrJe: "wDcuL",
    mWRhd: "加载其他任务状态失败",
    fhSeE: "AfXPv",
    oGJYI: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    NHNUd: "准备执行：生日祝福签到",
    ToILh: "celebrate_sign",
    yiaXN: function (d1, d2) {
      return d1 !== d2;
    },
    dFriG: "JcPiC",
    GFWuZ: "生日祝福签到执行成功",
    QAMfA: function (d1, d2) {
      return d1 !== d2;
    },
    aHeWo: "LunAE",
    NAKiF: "tab-content",
    tmtzn: "武将升星",
    cxQIj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    siuNu: "竞技场挑战",
    TExbM: "chest",
    mcONW: "开启宝箱",
    nLgsL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eNJUH: "fishing",
    cFCFQ: "recruit",
    tKvbZ: "招募武将",
    asVuW: "一键补月度任务",
    DIqag: function (d1) {
      return d1();
    },
    Wlwxq: function (d1, d2) {
      return d1 === d2;
    },
    pyjvu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    JYgiR: "❌ 时间验证失败:",
    JOPwL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    StAtb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jgpVf: function (d1, d2) {
      return d1 !== d2;
    },
    PQrRw: "hMxqV",
    AxYur: "zPYfl",
    PZWvH: function (d1, d2) {
      return d1 <= d2;
    },
    lyRgy: "BBiBp",
    keosX: "GgWNe",
    rZsLw: function (d1, d2) {
      return d1 === d2;
    },
    OBNyY: "uaVeJ",
    ahGCr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    KCIkL: "celebrate_claimfullserver",
    Cdsyg: function (d1, d2) {
      return d1 + d2;
    },
    CmbaG: function (d1, d2) {
      return d1 + d2;
    },
    CzrsA: function (d1, d2) {
      return d1 !== d2;
    },
    JOqfQ: "ctFbL",
    IiPQZ: "dTBTz",
    WeCOk: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zPAWE: "FgtVK",
    QHZky: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YCVii: function (d1, d2) {
      return d1 === d2;
    },
    eREFX: "aOUMB",
    nebTB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vdnar: "ldisM",
    wOgCH: function (d1, d2) {
      return d1 === d2;
    },
    CtdsI: "eZDcy",
    iTKxg: "iucYD",
    bUsbQ: "EkIDP",
    aIvhM: "zqzjo",
    nCNkj: function (d1, d2) {
      return d1(d2);
    },
    aLbzx: function (d1, d2) {
      return d1 === d2;
    },
    FSaFR: "SJYRk",
    ZHDev: "fENZj",
    tbFqV: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kGcSE: function (d1, d2) {
      return d1 > d2;
    },
    SKLDf: function (d1, d2) {
      return d1 !== d2;
    },
    YvPXW: "IVKdq",
    waSIl: "eqOQJ",
    UvvaD: function (d1, d2) {
      return d1 !== d2;
    },
    cUEYG: "AveWo",
    rDTvh: "IlghW",
    vXbNd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kuwSr: "所有兑换码已处理完成",
    sMVPJ: "upgradeStarExecuteBtn",
    kbbpl: "100%",
    vfzPV: "8px 0",
    fpwLq: "UocNn",
    prNdA: function (d1, d2) {
      return d1 <= d2;
    },
    klZmM: function (d1, d2) {
      return d1 !== d2;
    },
    BcuZG: "JDQEZ",
    ULDJp: "DnMZK",
    VnpWM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ySEJu: "celebrate_share",
    JENPy: function (d1, d2) {
      return d1 + d2;
    },
    QETTj: function (d1, d2) {
      return d1 + d2;
    },
    nTkhJ: function (d1, d2) {
      return d1 === d2;
    },
    UAZOC: "QYBnK",
    IPigg: function (d1, d2) {
      return d1 === d2;
    },
    IfJWY: "kpvWD",
    scHaU: "NAIcr",
    GeWgi: function (d1, d2) {
      return d1(d2);
    },
    kCLbO: function (d1, d2) {
      return d1 !== d2;
    },
    FgTRQ: "SrsdP",
    pryjA: "izmjJ",
    BIvaZ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eCugV: function (d1, d2) {
      return d1 !== d2;
    },
    VXPyX: "tbmbj",
    zMkxE: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    xGDHj: function (d1, d2) {
      return d1 === d2;
    },
    RQJrz: "BMxQe",
    SoYsv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rSJFs: "准备执行：领取免费福袋",
    zynHA: "activity_commonbuygoods",
    lVXne: "vwiGc",
    lBVSv: function (d1, d2) {
      return d1 === d2;
    },
    HhxgI: "iqoTx",
    dKkug: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HcDeS: "领取免费福袋成功",
    lNybN: function (d1, d2) {
      return d1 !== d2;
    },
    lEMnQ: "FCoJX",
    ahhLl: function (d1, d2) {
      return d1(d2);
    },
    wCgAM: function (d1, d2) {
      return d1 <= d2;
    },
    yeSUG: "<span class=\"gvh-status-normal\">待发车</span>",
    VlsOD: function (d1, d2) {
      return d1(d2);
    },
    kyxxa: "knpLA",
    UjkBU: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    bqTNQ: "准备执行：领取0元累充奖励",
    pXwMw: "common_claimtotalreward",
    vwcRc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    JOgUD: function (d1, d2) {
      return d1 !== d2;
    },
    jAupX: "aKlnQ",
    Yigwq: "pWigV",
    MqPBN: "mXtGP",
    JLgSN: "TunNS",
    COReY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kvMiU: function (d1) {
      return d1();
    },
    JDuOg: function (d1, d2) {
      return d1 - d2;
    },
    qeRco: function (d1, d2) {
      return d1 + d2;
    },
    jGvXv: function (d1, d2) {
      return d1 > d2;
    },
    JIePC: function (d1, d2) {
      return d1(d2);
    },
    CsETZ: "dGBpR",
    lyoSV: "tlqjQ",
    vPWUl: "准备执行：领取怪塔金钥匙",
    bnmQl: "mergebox_claimfreeenergy",
    eVkwe: function (d1, d2) {
      return d1 !== d2;
    },
    xNmSI: "CMcGk",
    vUpBK: "rSSNG",
    ksPML: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rqiPn: "YVybr",
    kERSM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    oglIZ: "领取怪塔金钥匙成功",
    mhMSL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    lMRRV: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TuuMA: "复制成功",
    tCxAK: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zFmcd: "暂无日志可复制",
    KxaYJ: "获取元素位置失败:",
    coIQv: function (d1, d2) {
      return d1 + d2;
    },
    gQKCx: "CDK兑换请求错误:",
    TwXnn: "请求失败",
    jeYra: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PCHJE: function (d1, d2) {
      return d1 <= d2;
    },
    nqGkL: "JLHLm",
    Vugff: "celebrate_claimpersonal",
    uteSy: function (d1, d2) {
      return d1 + d2;
    },
    evHqz: "nyhRN",
    RdavJ: "DpYbk",
    ManiO: "pxsVM",
    pAJcf: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LyCBc: "wTyfT",
    gRbuf: "lhaJf",
    OBSYb: function (d1, d2) {
      return d1(d2);
    },
    jFlEj: "YAdDz",
    FXSvU: "XMcGs",
    ebSuE: "查询后未获取到车辆数据，无法继续",
    EFrHH: "珍宝阁福利已领取",
    mkdgP: "50%",
    zeVfo: "translate(-50%, -50%)",
    ZytUH: function (d1, d2) {
      return d1 - d2;
    },
    pBpNm: "grabbing",
    kyFcR: "mousemove",
    NVJXG: "mouseup",
    IXkFE: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    xczJP: "link",
    gAoBB: "stylesheet",
    KXRUO: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    PgCmF: function (d1, d2) {
      return d1 !== d2;
    },
    vDdQt: "OCsJB",
    ufemf: "XOfkI",
    qAVSv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    appum: "开始执行其他任务",
    RHTou: "aKUsv",
    KMipq: "CRuNO",
    dMSCU: "生日祝福签到",
    TDqHD: function (d1, d2) {
      return d1 === d2;
    },
    ngBns: "albPs",
    MPbxU: "领取祝福奖励（1-20）",
    qTDnw: "UEMNB",
    uaHzq: "领取庆典任务奖励（1-7）",
    FLxiL: "庆典分享（1-7）",
    DeLIm: "NEAQD",
    mEyqC: "领取免费福袋",
    bfTUU: function (d1, d2) {
      return d1 === d2;
    },
    sKdcr: "agily",
    MMYrb: "领取0元累充奖励",
    njRRY: "byExg",
    VRmAj: "LmemB",
    rStEr: "领取怪塔金钥匙",
    mfBeZ: "CpDfy",
    hEAuW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    dWTri: function (d1, d2) {
      return d1 !== d2;
    },
    eGuxa: "ZBTSl",
    sMLry: "aCGEA",
    TRpwT: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    OLBGu: "其他任务执行完成",
    zVvHj: function (d1, d2) {
      return d1(d2);
    },
    UBHpG: "其他任务已完成",
    HnHZX: function (d1, d2) {
      return d1 < d2;
    },
    mjSFt: function (d1, d2) {
      return d1 > d2;
    },
    SWNkc: function (d1, d2) {
      return d1 < d2;
    },
    deZHL: function (d1, d2) {
      return d1 > d2;
    },
    XnQDw: function (d1, d2) {
      return d1 < d2;
    },
    NPfFk: function (d1, d2) {
      return d1 / d2;
    },
    XomSM: function (d1, d2) {
      return d1 / d2;
    },
    fZXFV: function (d1, d2) {
      return d1(d2);
    },
    zujhe: "检测到时间篡改行为",
    evNVM: "CfwhW",
    SiycJ: "DtlVM",
    irGvj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    bhhUj: "ZgzrG",
    vcqxd: function (d1, d2) {
      return d1 !== d2;
    },
    avQPN: "CefzL",
    tbXoP: function (d1) {
      return d1();
    },
    BGsbf: function (d1) {
      return d1();
    },
    WQOUf: function (d1, d2) {
      return d1 === d2;
    },
    YCzei: "gdSiJ",
    xasTt: "Embxs",
    TRsvr: function (d1, d2) {
      return d1(d2);
    },
    pohfc: function (d1, d2) {
      return d1 === d2;
    },
    icuCF: "CqzMz",
    bmuok: function (d1) {
      return d1();
    },
    vixVC: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LooHf: function (d1, d2) {
      return d1(d2);
    },
    eIRbm: function (d1, d2) {
      return d1 + d2;
    },
    DtZdw: function (d1, d2) {
      return d1 + d2;
    },
    IQjCC: "0.1",
    apJti: "goods-discount",
    wGfrv: "swgPg",
    xbfSq: "MCGVh",
    BuLZC: "yBJwG",
    USSpW: "mkYuf",
    mzWEJ: "NAkiM",
    PpcMl: "task-status paused",
    VLLUc: function (d1, d2) {
      return d1 === d2;
    },
    BrJzW: "aufmA",
    EkLnE: "ToBKB",
    JFEzg: "运行中",
    FYSPd: "task-status running",
    NtFzL: "检测到游戏标题显示WebSocket已连接，停止检查",
    vEPzR: function (d1, d2) {
      return d1 === d2;
    },
    lVSUY: "WRFhg",
    KRrCE: "daily",
    tOFwP: "answer",
    OOvFe: "salt",
    OfDeJ: "blackmarket",
    hiAdB: function (d1, d2) {
      return d1(d2);
    },
    DlSVT: function (d1) {
      return d1();
    },
    yKGOd: "eIIfZ",
    JsdjR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    VFJMX: function (d1, d2) {
      return d1 !== d2;
    },
    xvkWH: "COsLr",
    gxdhi: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    Yhrqa: function (d1, d2) {
      return d1 !== d2;
    },
    lrRZm: "crumb",
    EEdhx: "TyVCa",
    xzwBV: function (d1, d2) {
      return d1 / d2;
    },
    ziusf: function (d1, d2) {
      return d1(d2);
    },
    YhsOK: function (d1, d2) {
      return d1(d2);
    },
    RQIrQ: "nBJar",
    qSjDU: function (d1, d2) {
      return d1 === d2;
    },
    yQEcq: "ATSSb",
    okZkR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    sNBPj: "获取月度任务数据失败，无法继续",
    JwIGx: "LwPNU",
    bLVFu: "oXXpN",
    iCsVf: function (d1, d2) {
      return d1 !== d2;
    },
    CDCSI: "mNUfu",
    CzqHA: function (d1, d2) {
      return d1 !== d2;
    },
    eGYCG: function (d1, d2) {
      return d1 === d2;
    },
    QuQLx: "IxYBQ",
    nYpaB: "hHdIX",
    GCefk: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    cMIkv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ebHxU: "开始执行升级挂机等级（10次）",
    nAtYj: "CAnTy",
    iAUmI: "system_hangupupgrade",
    QVRDq: function (d1, d2) {
      return d1 + d2;
    },
    Uvwqu: function (d1, d2) {
      return d1 !== d2;
    },
    Nuehw: function (d1, d2) {
      return d1 !== d2;
    },
    PGfur: function (d1, d2) {
      return d1 === d2;
    },
    VLMpu: "WxJhz",
    sRmux: function (d1, d2) {
      return d1 + d2;
    },
    EIHqR: function (d1, d2) {
      return d1 + d2;
    },
    YIMfg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eokJj: "升级挂机等级完成（共10次）",
    yangB: function (d1, d2) {
      return d1 === d2;
    },
    cDZyw: function (d1, d2) {
      return d1 === d2;
    },
    LciyN: "SLTPm",
    vuXVe: "bxSCf",
    WflWM: function (d1, d2) {
      return d1 !== d2;
    },
    kGdUP: "xxwkx",
    UxkXz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    qXHNe: function (d1, d2) {
      return d1 === d2;
    },
    jqMmJ: "uRpDK",
    kTJBw: "Nyvuk",
    HJyGw: "genie_buysweep",
    SOmJT: function (d1, d2) {
      return d1 + d2;
    },
    oranR: "gIHis",
    llLkZ: "OauxE",
    XrfKP: function (d1, d2) {
      return d1 + d2;
    },
    Hvlra: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    AKmOM: function (d1, d2) {
      return d1 === d2;
    },
    GXyVO: "hJvGA",
    nBnFt: function (d1, d2) {
      return d1(d2);
    },
    dIPVa: function (d1, d2) {
      return d1 * d2;
    },
    QGaeA: function (d1, d2) {
      return d1(d2);
    },
    UAiMb: function (d1, d2) {
      return d1 >>> d2;
    },
    hcDrt: function (d1, d2) {
      return d1 << d2;
    },
    KguFt: function (d1, d2) {
      return d1 !== d2;
    },
    zafBR: "QTbXK",
    XmRtV: "vLScp",
    pHxQN: "activity_buystoregoods",
    gQPgn: "plIAt",
    McMhM: "ZNaxl",
    zDWtD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    iBYfu: "tyABU",
    ybWZK: "zSlhg",
    xgOuy: "NdwVD",
    LJMDR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QLQYF: function (d1, d2) {
      return d1 / d2;
    },
    PJJMy: function (d1, d2) {
      return d1 === d2;
    },
    JyVaw: "qGcVL",
    mUAOo: "aUSov",
    NlNsv: "招募达标",
    evcKn: "招募周福利",
    JoODG: "宝箱达标",
    PadvP: "宝箱周福利",
    vfwwM: "金砖达标",
    CSCXS: "黑市周福利",
    WzFIO: "YmnHO",
    igfAI: "activity_get",
    yBsqt: "未找到活动数据",
    URVEQ: "活动列表格式错误",
    RwNuu: function (d1, d2) {
      return d1 === d2;
    },
    uPznP: "lselP",
    mazLU: "ftNwJ",
    RgHsU: function (d1, d2) {
      return d1 !== d2;
    },
    apkya: "VTpYG",
    CmInw: "JvRLu",
    rqpVR: "EnbIt",
    PPHsD: "VSWlU",
    jaAVO: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    qriQl: "所有周福利活动均未找到，无需领取",
    GHGwW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HjPdT: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZkzUu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PUQpU: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    VuOVt: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HcBbf: function (d1) {
      return d1();
    },
    hgeFr: function (d1, d2) {
      return d1 === d2;
    },
    kcujx: "RnkTi",
    hpoxl: function (d1, d2) {
      return d1 - d2;
    },
    XdBPm: function (d1, d2) {
      return d1 + d2;
    },
    UzSmq: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    SWSLf: "开始领取俱乐部大事件奖励（将分别请求两个目标日期）",
    ENOwe: "ZLBkt",
    sPAgh: function (d1, d2) {
      return d1 - d2;
    },
    CXpMS: function (d1, d2) {
      return d1 !== d2;
    },
    eaVSk: "LiYXf",
    EVsEX: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TiusX: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HHUcm: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aFDzZ: "Jozgx",
    vwOJe: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RgDRS: "legion_claimwarrankreward",
    vVCJl: function (d1, d2) {
      return d1 + d2;
    },
    ikMYt: function (d1, d2) {
      return d1 + d2;
    },
    SErYE: "sokhP",
    SEVfX: function (d1, d2) {
      return d1 !== d2;
    },
    rjbkd: "FDHyc",
    pFAMZ: "USjdX",
    dfWhA: "sqvnc",
    niheV: "gRGMO",
    YKrrq: function (d1, d2) {
      return d1 + d2;
    },
    mtMfG: "SVlRs",
    mWKgQ: function (d1, d2) {
      return d1 < d2;
    },
    yzOqi: function (d1, d2) {
      return d1(d2);
    },
    wvNlh: "\n所有目标日期的奖励请求已处理完毕",
    ZFjuX: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PVmfD: "领取俱乐部大事件奖励总流程异常",
    CEskE: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    XFAuG: "execute-btn",
    ZPtBm: function (d1, d2) {
      return d1(d2);
    },
    uCjtn: function (d1, d2) {
      return d1 + d2;
    },
    NsaSm: function (d1, d2) {
      return d1 + d2;
    },
    isASB: function (d1, d2) {
      return d1 === d2;
    },
    TzbTO: "MmSQf",
    kmFdq: function (d1, d2) {
      return d1 === d2;
    },
    jvyjZ: "pxTYy",
    IMgkY: "kzIRK",
    UMQmU: function (d1, d2) {
      return d1 !== d2;
    },
    YTxOg: "PFuGo",
    FmttG: "zEkfk",
    DhCeF: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    NjdBJ: function (d1, d2) {
      return d1 !== d2;
    },
    meOPx: "WiuCc",
    uLQOO: "iYyik",
    fLroB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZroXc: function (d1, d2) {
      return d1 * d2;
    },
    JiEFF: function (d1, d2) {
      return d1 === d2;
    },
    gFYns: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    wCqJj: "获取商品列表失败",
    doqUz: "ivhHP",
    wLnfH: function (d1, d2) {
      return d1 !== d2;
    },
    LmHNR: "geohK",
    PdBhH: "QOxyj",
    vglUf: "未找到普通钓鱼配置",
    kJShk: "scMAm",
    VVFmB: function (d1, d2) {
      return d1 < d2;
    },
    LrmGK: function (d1, d2) {
      return d1 === d2;
    },
    tmxXq: "euKAV",
    KICaO: "uWYJp",
    WYSfZ: function (d1, d2) {
      return d1 !== d2;
    },
    aXCas: "vPwZj",
    HYQRD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    XsSmn: function (d1, d2) {
      return d1 + d2;
    },
    dHGjI: function (d1, d2) {
      return d1(d2);
    },
    Mqpwp: function (d1, d2) {
      return d1 !== d2;
    },
    htpsA: "BDHfR",
    bkdtL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aBOQr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kClEM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    dqdbo: "TikiO",
    PelVd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    EDQRc: "领取每日任务积分奖励（共10个）",
    phsif: function (d1, d2) {
      return d1 === d2;
    },
    ddrxA: "zEARe",
    TsIQp: "XzAWs",
    zgfUU: "Qnfus",
    XiUKZ: "Task",
    IHMBE: "claimDailyPoint",
    cCZZM: function (d1, d2) {
      return d1(d2);
    },
    YobzB: function (d1, d2) {
      return d1 !== d2;
    },
    CyMLZ: "ykHHG",
    MJwUj: "omQzX",
    kNWmq: "uipsg",
    kWCPr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vEvfe: function (d1, d2) {
      return d1(d2);
    },
    RjdQF: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TUiwr: function (d1, d2) {
      return d1(d2);
    },
    GaWPF: "<div style=\"padding:20px;text-align:center;color:red;font-size:18px;\">脚本验证失败，无法继续使用</div>",
    GsqYx: "发现待处理车辆状态异常（非待发车状态），停止执行",
    WkhTj: "车辆状态异常，已停止处理",
    FbCjI: function (d1, d2) {
      return d1 >>> d2;
    },
    ONfmr: function (d1, d2) {
      return d1 << d2;
    },
    JUaQd: ".manual-controls",
    qmYIu: "show",
    PtdNM: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    FJLff: "expand-btn",
    bqAfK: "3px 8px",
    tqCKP: "11px",
    SSQuq: "获取折扣失败",
    HVRLx: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    rkWOB: function (d1, d2) {
      return d1 === d2;
    },
    MgTDS: "PWFTx",
    lCWmT: "开始执行：领取任务奖励",
    GGFRF: function (d1, d2) {
      return d1 === d2;
    },
    zbjaq: "dUUzM",
    yDlln: "fCyqx",
    XaGCw: function (d1) {
      return d1();
    },
    xJksf: "ldvdp",
    SLLbS: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rYsyV: "领取每日总奖励",
    BxAxS: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    gvYAy: "claimDailyReward",
    kCBSh: function (d1, d2) {
      return d1 !== d2;
    },
    GpqlS: "jjsaV",
    zxQdA: "nFacm",
    JgwCg: "GBxRa",
    Ockmm: "ckSIx",
    Cxpkr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    FGEwl: function (d1, d2) {
      return d1 === d2;
    },
    exvhL: "zkkUR",
    bZFif: "lUnaJ",
    qOnuD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    qtZDV: "领取每周奖励",
    Vrlrc: "claimWeekReward",
    mmcwE: "aMNTg",
    khGuh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    dkuTb: function (d1, d2) {
      return d1 !== d2;
    },
    iDVZr: "BoEVR",
    SWgfW: "EnrLy",
    XyTYD: "完成：领取任务奖励",
    Yhesm: "LAJdj",
    lxkrJ: function (d1, d2) {
      return d1 + d2;
    },
    awAKg: function (d1, d2) {
      return d1(d2);
    },
    PIlNL: function (d1, d2) {
      return d1 === d2;
    },
    FELvY: "SUqTJ",
    weDJA: function (d1, d2) {
      return d1 !== d2;
    },
    fYaZr: "msvUZ",
    Ubwkg: "CGrNi",
    VDFkO: "开始执行盐罐固定流程",
    vEnXb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    FEkpo: "停止罐子成功",
    dgAMp: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    oZQIl: "启动罐子成功",
    gCbzs: "收罐成功",
    eLxcU: function (d1, d2) {
      return d1 !== d2;
    },
    kAdVx: "eFXod",
    fctyg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    hKVoP: function (d1) {
      return d1();
    },
    hEfiM: "control-group",
    XaHhG: "control-label",
    ielPJ: "每次数量",
    fMVTy: "control-input",
    hMwKI: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Wevxh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    bVmxh: "自动参与答题活动并领取奖励，使用内置题库匹配答案",
    MwZWO: "游戏标题显示WebSocket已连接，跳过检查（另一个脚本已通过标题通讯）",
    VDFBi: function (d1, d2) {
      return d1 + d2;
    },
    ENXDT: "action",
    uaSoi: function (d1, d2) {
      return d1(d2);
    },
    dHSWB: function (d1, d2) {
      return d1 !== d2;
    },
    mMpMX: "ENcbO",
    UvSvK: "InDNJ",
    BWGZO: function (d1, d2) {
      return d1 === d2;
    },
    WPXTd: "sRNcl",
    BXLAu: "EemzW",
    SHIBx: "开始执行：登录相关奖励领取",
    pbAVS: "sGnOj",
    wkEcL: "buagm",
    pjtLV: "领取每日登录奖励",
    HHIAP: "System",
    wXqZu: "signInReward",
    uhNRD: "TbvpJ",
    IdvtY: "kIVyh",
    fgSKe: "XyNkd",
    dyxgQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uQSjk: "每日登录奖励已领取",
    ULKuW: function (d1, d2) {
      return d1 === d2;
    },
    yHidM: "vjLnU",
    ZgfMJ: "MuWuS",
    dVJCu: "领取每日登录奖励失败",
    TGJto: function (d1, d2) {
      return d1 === d2;
    },
    btANK: "jtktR",
    HyBeJ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    VueIQ: "领取特惠礼包",
    aByAO: "claimreward",
    FCdLz: function (d1, d2) {
      return d1(d2);
    },
    UKSFY: "XWJFK",
    hqMpk: "yrPLc",
    UyqfA: function (d1, d2) {
      return d1 === d2;
    },
    XwmoV: "XSrmH",
    lutmO: "特惠礼包已领取",
    AxqlK: "kmuIz",
    HXUvk: "KcqGp",
    slQvP: "领取特惠礼包失败",
    zTBJf: "福利卡",
    iuzxZ: "永久卡",
    BQfdH: function (d1, d2) {
      return d1 === d2;
    },
    UGytT: "FzltG",
    OpLxS: "aQqFj",
    jCWGh: function (d1, d2) {
      return d1 === d2;
    },
    OGtiG: "hhuWY",
    tCbIP: "1|4|3|0|2",
    zNIZs: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    fXMVh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZLiQV: function (d1, d2) {
      return d1(d2);
    },
    JbTTJ: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    ShgRE: "card",
    Gmjsw: function (d1, d2) {
      return d1(d2);
    },
    kmGGH: "Kejzj",
    rDztC: function (d1, d2) {
      return d1 === d2;
    },
    gIxfe: "umytX",
    kEEde: function (d1, d2) {
      return d1 === d2;
    },
    zGkab: "JMYsa",
    dFiQE: "huVHT",
    rVjAj: function (d1, d2) {
      return d1(d2);
    },
    ReAKu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HLNmp: "登录相关奖励领取完成",
    qhvKc: "RFpzO",
    fwsTo: "dWYBl",
    yNjFt: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    FoOWH: "登录相关奖励领取出错",
    zpKNk: "panel-account",
    zRwvo: function (d1, d2) {
      return d1 !== d2;
    },
    HoIUM: "wTtdx",
    MwYFU: "UYnOT",
    NCcej: function (d1, d2) {
      return d1 / d2;
    },
    PcJii: function (d1, d2) {
      return d1 * d2;
    },
    QSZPq: function (d1, d2) {
      return d1 * d2;
    },
    zSwAA: function (d1, d2) {
      return d1 + d2;
    },
    YYuSD: function (d1, d2) {
      return d1(d2);
    },
    iaUVi: "无法解析角色信息",
    ZXOST: "hMTBh",
    kYovA: "yOJbA",
    JUXna: "iCeAO",
    ksTMc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WnzLq: "https://xxz-xyzw.hortorgames.com/login/manifest?platform=hortor&version=0.30.0-android",
    hdsKX: "xxz-xyzw.hortorgames.com",
    fAcHT: "Regable/3.0.29",
    sJxAt: "keep-alive",
    QwfEN: "application/json, text/plain, */*",
    YVHUF: "gzip, deflate, br",
    qHrak: "application/json;charset=UTF-8",
    gKekZ: "zh-CN,zh;q=0.9",
    tQlqk: function (d1, d2) {
      return d1 === d2;
    },
    LwdWA: "euYmF",
    kdBrD: "syiHA",
    oCjkM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    EIHRw: function (d1) {
      return d1();
    },
    UYJSL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    qTpuH: function (d1, d2) {
      return d1 < d2;
    },
    OKhdF: function (d1, d2) {
      return d1 - d2;
    },
    PlQNU: "gvh-toast",
    qAAmA: function (d1, d2) {
      return d1 === d2;
    },
    XhSRz: "#4CAF50",
    PHYmF: "#ff5555",
    fKikE: "#2196F3",
    LvIcd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    xgbyY: function (d1, d2) {
      return d1 === d2;
    },
    juZVv: "获取角色信息失败",
    MdLxE: "book_claimpointreward",
    tDyEE: "未找到高级商人或高级商人没有商品",
    GjWug: "发动机升级成功",
    DCjDR: function (d1, d2) {
      return d1(d2);
    },
    EzYhg: function (d1, d2) {
      return d1 + d2;
    },
    bXpHZ: "tTRfd",
    AFNKv: "OFFgs",
    MAMMe: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pXmoC: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    VEtNg: function (d1, d2) {
      return d1(d2);
    },
    rgONG: function (d1, d2) {
      return d1 <= d2;
    },
    EYKlb: "IJZyk",
    CiWXq: "IKFfn",
    Zczik: "BUMPE",
    hTCyi: "arena_startarea",
    WtMyI: "gMuIN",
    hITDp: "TOAFP",
    AnhnY: function (d1, d2) {
      return d1(d2);
    },
    OlACN: "arena_getareatarget",
    xxene: function (d1, d2) {
      return d1 !== d2;
    },
    jNKvF: "KIZji",
    vNGKW: "uBCfe",
    GbTKP: "未获取到目标ID，尝试刷新列表",
    FdnEB: "刷新后仍未获取到角色ID",
    ECIYv: function (d1) {
      return d1();
    },
    aEtmi: "fight_startareaarena",
    vnpOI: function (d1, d2) {
      return d1 !== d2;
    },
    ofmRf: "kfvsb",
    DMZIy: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    SLKqC: "pYWvs",
    gmArZ: "dyBup",
    UWCev: "\"activity:arena\"",
    OJSMf: function (d1, d2) {
      return d1 !== d2;
    },
    JPgyr: function (d1, d2) {
      return d1 !== d2;
    },
    ifmlk: "LGsxg",
    xdtoC: "VMADA",
    DKceZ: function (d1, d2) {
      return d1 < d2;
    },
    BEFDn: function (d1, d2) {
      return d1 === d2;
    },
    cWSVm: function (d1, d2) {
      return d1 === d2;
    },
    iSmdY: function (d1, d2) {
      return d1 !== d2;
    },
    fvhbv: "AzDbS",
    HxraF: "pgEXn",
    xPiqM: "XAYcD",
    PTGTr: function (d1, d2) {
      return d1 === d2;
    },
    yXBHG: "qlMHE",
    umEFu: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    rDesP: "SJQqk",
    uRrfh: "rnMjy",
    mchda: "vCRtU",
    CPKLn: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    ooXFf: "未获取到月度竞技场积分",
    fSxcE: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    EbypT: "iMTPn",
    cvBLU: "fAGRX",
    jEhCP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TWFeW: function (d1, d2) {
      return d1 < d2;
    },
    xppJn: function (d1, d2) {
      return d1(d2);
    },
    wharg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vQesp: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    VHyuz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PKorz: "无可用WebSocket",
    HvyKz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    tXCOZ: function (d1, d2) {
      return d1 === d2;
    },
    zwDvQ: function (d1, d2) {
      return d1 / d2;
    },
    UOlsy: function (d1, d2) {
      return d1 * d2;
    },
    pTEQA: function (d1, d2) {
      return d1 / d2;
    },
    goACr: "textarea",
    RgvBm: "fixed",
    RofDK: "-999999px",
    lFcHZ: "readonly",
    QJRve: "aria-hidden",
    oFCIQ: "copy",
    KMgTr: "复制失败，请手动复制",
    ymYBE: "复制失败: execCommand返回false",
    eScKP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    bpMQF: "刷新黑市失败",
    eedDC: "kttwC",
    CBDls: "VbEeF",
    cZRxM: "xcAwr",
    HrQDF: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    CZZcv: function (d1, d2) {
      return d1 === d2;
    },
    nVoYB: "mIdvS",
    zlPrl: "fbWLQ",
    xUaxd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    piNKr: function (d1, d2) {
      return d1 * d2;
    },
    QczgV: "qxZGf",
    AQpAx: function (d1, d2) {
      return d1 <= d2;
    },
    MkYLJ: function (d1, d2) {
      return d1 !== d2;
    },
    iNVEv: "vVazT",
    oEzOB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    IiYaL: function (d1, d2) {
      return d1 === d2;
    },
    Elbrm: "iNlpg",
    errXm: "ppRZJ",
    YwAQx: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    nFVgV: function (d1, d2) {
      return d1 === d2;
    },
    VsjgM: "TxxxK",
    mgPLh: function (d1, d2) {
      return d1 === d2;
    },
    URDWw: "lWIRe",
    KtMnP: "ssTHp",
    PTVGH: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    natDw: function (d1, d2) {
      return d1(d2);
    },
    cTwYR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jQSEW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    mBbAA: function (d1, d2) {
      return d1 === d2;
    },
    TTyBU: "ndNiL",
    vvGQu: "SZBrQ",
    IKohp: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pmsEg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    wBTUv: "高级商人当前没有黄金鱼竿商品",
    yzAmY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZJOxU: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HHVnx: function (d1) {
      return d1();
    },
    xpLtF: "物品折扣信息：",
    wnjmo: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Vaxxl: "折扣获取完成",
    UxHtc: function (d1, d2) {
      return d1 !== d2;
    },
    EvMCB: "EJmuU",
    COyfE: function (d1, d2) {
      return d1 !== d2;
    },
    rJFuf: function (d1, d2) {
      return d1 === d2;
    },
    iMvuu: "BHGdN",
    KBJKa: "当前页面无可用WebSocket连接，无法执行任务",
    qumds: "无WebSocket连接",
    mKUiL: "#upgradeStarExecuteBtn",
    lQHEl: "rhidk",
    MltRY: "执行中...",
    mijEa: "0.8",
    vPIRF: "not-allowed",
    KPnkQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zbwAr: "开始一键升星",
    fWdwh: "开始一键升星任务",
    WJszA: "JWDfg",
    dzDPb: "rbVQB",
    TTMJJ: "UUZss",
    djcrv: "daozI",
    iVyLf: function (d1, d2) {
      return d1 < d2;
    },
    dxIvH: "zEWdL",
    dQSWe: "ALEZV",
    AbVTc: function (d1, d2) {
      return d1 === d2;
    },
    RALTr: "OCXZj",
    zEXvt: function (d1, d2) {
      return d1 !== d2;
    },
    lKEtv: "ugdex",
    MwRFq: function (d1, d2) {
      return d1 === d2;
    },
    WFKKw: function (d1, d2) {
      return d1 !== d2;
    },
    sCdAH: function (d1, d2) {
      return d1 !== d2;
    },
    YzfTa: "lFclU",
    dMSsn: "uARKL",
    GAzAB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    gvwdH: "aBRUi",
    ImkeX: "HbVrC",
    gupPF: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    gCxIm: "英雄升星完成，开始图鉴升星",
    GcuOp: function (d1, d2) {
      return d1(d2);
    },
    sPKRq: "英雄升星全部完成",
    TxAPL: function (d1, d2) {
      return d1 === d2;
    },
    drcWe: "QEUUD",
    rluWD: "fUWdT",
    weHKq: function (d1, d2) {
      return d1 < d2;
    },
    etzcs: function (d1, d2) {
      return d1 !== d2;
    },
    Tciej: "dIYNR",
    noKyX: "uixZd",
    OgqPr: function (d1, d2) {
      return d1 === d2;
    },
    EBVSF: "dpgBH",
    SKxxy: "gGykH",
    UKPJe: "fMGkz",
    vgYzG: "fZSlC",
    gweBY: function (d1, d2) {
      return d1 !== d2;
    },
    xJPzt: "BPfFx",
    NqYkc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    gcjVt: "图鉴升星完成，开始领取奖励",
    arOFw: function (d1, d2) {
      return d1(d2);
    },
    MTfOx: "图鉴升星全部完成",
    KXYvD: function (d1, d2) {
      return d1 !== d2;
    },
    IIZmX: "lVDou",
    RFbMP: function (d1, d2) {
      return d1 === d2;
    },
    SpOLB: "VxeiB",
    RPEKx: "zThHj",
    hcQnc: "GbacA",
    TzSsC: "jKgwz",
    zyKgy: "cBTWj",
    GLJkm: "HnhLQ",
    iyCgK: "PGkxz",
    iYVke: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TbAyH: "一键升星全部完成",
    mCzPN: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    cWoYo: function (d1, d2) {
      return d1 !== d2;
    },
    HjXyR: "dHnSa",
    HvxaX: function (d1, d2) {
      return d1 !== d2;
    },
    KIlma: "MgmRM",
    IwNzG: "HUcIQ",
    bbdJG: "一键升星",
    KdToI: "pointer",
    gcvMi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    lFOMo: "开始执行选中的其他任务",
    QVuGV: function (d1) {
      return d1();
    },
    eNcwc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    NhCAf: "LacfI",
    bZIFW: "fRTYh",
    SQOnV: "qbXMc",
    OgtTm: "jvLVl",
    vAXxW: "SubRole",
    VmOqF: "TipsManager",
    BFGie: "ServerData",
    eEupY: "VFWgs",
    tdphN: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    lNELp: "爬塔依赖模块缺失",
    zLnkW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ljVQS: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    SZAmi: "开始自动爬塔",
    wkELb: function (d1, d2) {
      return d1(d2);
    },
    Afgrf: function (d1, d2) {
      return d1 !== d2;
    },
    OsyZL: "ykdHs",
    ngwlh: "guEcZ",
    SOLXW: "角色等级≤50，不满足爬塔条件",
    CauXP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HrLYF: "角色等级≤50，无法爬塔",
    eVSnq: function (d1, d2) {
      return d1 !== d2;
    },
    FdHWU: "SagzU",
    AVPIB: "爬塔体力耗尽，停止爬塔",
    RYzTu: "爬塔体力耗尽",
    rNMvo: function (d1, d2) {
      return d1 == d2;
    },
    MBBEl: function (d1, d2) {
      return d1 % d2;
    },
    VluxV: function (d1, d2) {
      return d1 !== d2;
    },
    BaAKU: "dbSEb",
    voFkB: function (d1, d2) {
      return d1 / d2;
    },
    VyPoZ: function (d1, d2) {
      return d1 === d2;
    },
    PQvoU: "wVddV",
    njcrv: "mqgRL",
    NGFKX: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    iThTt: "已达到4500层上限，停止爬塔",
    vCCIy: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WVRyK: "已达4500层上限",
    Qvxxl: function (d1, d2) {
      return d1 + d2;
    },
    vdAsk: function (d1, d2) {
      return d1 / d2;
    },
    OYHof: function (d1, d2) {
      return d1(d2);
    },
    IPKyw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YQxnt: "自动爬塔任务完成",
    hFjbB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kAbIK: "自动爬塔完成",
    gguAc: function (d1, d2) {
      return d1 !== d2;
    },
    Upoad: "OddAD",
    nIBgI: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    SuGiv: "自动爬塔出错: ",
    LayKw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jdqVm: "爬塔出错",
    taksY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YqpzV: "未知错误码",
    lpyiW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RSrHf: "未启用任何购买物品",
    jzCLM: function (d1, d2) {
      return d1 !== d2;
    },
    WZmaS: "ZtTsD",
    GfVoM: "TmQnB",
    bWUal: "开始盐罐自动化任务",
    jLhFs: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    fErQM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    lXljT: "领挂机奖励成功",
    ywRtz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    cXFoh: function (d1, d2) {
      return d1 !== d2;
    },
    JoMeM: "yjPHc",
    DmNWA: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    MQipL: "盐罐任务完成",
    KaucA: function (d1, d2) {
      return d1 === d2;
    },
    CqtfT: "BUjkx",
    LPprK: "IjvCh",
    xYsxt: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LwATO: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YGtPT: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HGeXP: "Wurld",
    QYgFT: function (d1, d2) {
      return d1 === d2;
    },
    yNoBj: "tQaqO",
    tKOXM: function (d1, d2) {
      return d1 >= d2;
    },
    rtbOl: function (d1, d2) {
      return d1 !== d2;
    },
    ypAIe: "QVPnv",
    lJjJR: "ZoykX",
    eTTQC: "角色等级≤50或已达4500层，跳过爬塔",
    dWKjo: "开始咸将塔爬塔任务",
    XSTqY: function (d1, d2) {
      return d1 === d2;
    },
    XRRqR: "bLzUN",
    FYFLJ: "gXgFS",
    Wyeec: function (d1, d2) {
      return d1 % d2;
    },
    HvtQE: function (d1, d2) {
      return d1 / d2;
    },
    hPhcF: function (d1, d2) {
      return d1 !== d2;
    },
    khGui: "aPYzs",
    oMdsN: function (d1, d2) {
      return d1(d2);
    },
    YWKLX: function (d1, d2) {
      return d1(d2);
    },
    WWsmK: function (d1, d2) {
      return d1 / d2;
    },
    nwEHp: function (d1, d2) {
      return d1(d2);
    },
    myEum: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    gAnnA: "咸将塔爬塔任务完成",
    jatxq: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    gmvfu: "nVTyK",
    DGQRk: function (d1, d2) {
      return d1 - d2;
    },
    sXMxb: "WwwRb",
    pmCPT: "klkzJ",
    wreZh: function (d1, d2) {
      return d1 === d2;
    },
    RszLp: "MRxTa",
    nEVDy: function (d1, d2) {
      return d1 * d2;
    },
    AyGPY: function (d1, d2) {
      return d1 * d2;
    },
    auPyp: function (d1, d2) {
      return d1 + d2;
    },
    igKgI: function (d1, d2) {
      return d1 === d2;
    },
    QKayM: function (d1, d2) {
      return d1 < d2;
    },
    lTrdT: "ojUAF",
    ANkVB: "fmgeq",
    XOuSl: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    UmSGP: "PDweg",
    GntuC: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jAfTc: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    kxWSi: function (d1, d2) {
      return d1(d2);
    },
    eTtYG: function (d1, d2) {
      return d1(d2);
    },
    LMQJQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WrcsH: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Lgszh: function (d1, d2) {
      return d1 !== d2;
    },
    gNgDS: "BYKYG",
    rnMVD: "PKfSJ",
    JUFsQ: function (d1, d2) {
      return d1 === d2;
    },
    EioOU: "jwiff",
    kGtMM: "QZWYK",
    vRUMP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aGMpq: function (d1, d2) {
      return d1 !== d2;
    },
    boDfY: "LkyFx",
    ahBYM: "UYaDh",
    NOfKO: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    BLXxv: "CIoUb",
    GfPSX: "KkAIz",
    lUlsh: "fStLL",
    ERqqi: "Jcylq",
    YJlAP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QpPQW: function (d1, d2) {
      return d1 === d2;
    },
    OaNjc: function (d1, d2) {
      return d1 === d2;
    },
    XZKrm: function (d1, d2) {
      return d1 + d2;
    },
    NGUvL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    GRjNm: function (d1, d2) {
      return d1 === d2;
    },
    KBmfp: "RHFax",
    baYeL: "kImfM",
    MPLFW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WITqv: "MTfeM",
    Iqnfa: "VUGGp",
    FxXZS: "takgh",
    vtHWS: function (d1, d2) {
      return d1 === d2;
    },
    rzfzd: "KIyDx",
    OJZkK: "gvh-waitForDailyTask",
    ioHQY: "cONzZ",
    fFAgy: "GKEtF",
    AixYa: "dALQf",
    KhdFL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    coXNd: "领取珍宝阁福利失败",
    ROwmG: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kBBVY: "YNwzW",
    VIccz: function (d1, d2) {
      return d1(d2);
    },
    FHDDd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    nnHzD: "oVkad",
    qhJcY: function (d1, d2) {
      return d1(d2);
    },
    ybmkH: function (d1, d2) {
      return d1(d2);
    },
    EYRoW: function (d1, d2) {
      return d1 === d2;
    },
    jGrjF: "task-option-item",
    vLEsu: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    xWkZf: "yxrkD",
    MDTHA: "FUWho",
    ALKMl: "珍宝阁福利领取成功",
    pkvSp: "wiEmn",
    VpPtk: "zpMbI",
    IKjeD: function (d1, d2) {
      return d1 + d2;
    },
    dsUPC: "所有车辆均已发车，无需处理",
    sJmbV: function (d1, d2) {
      return d1 | d2;
    },
    GmtTk: function (d1, d2) {
      return d1 >>> d2;
    },
    wVDyy: function (d1, d2) {
      return d1 >>> d2;
    },
    rLEEG: function (d1, d2) {
      return d1 * d2;
    },
    WxrzI: function (d1, d2) {
      return d1(d2);
    },
    PodGA: function (d1, d2) {
      return d1 <= d2;
    },
    YpFWQ: function (d1, d2) {
      return d1 + d2;
    },
    OCJDF: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vLXvu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rOEVs: function (d1, d2) {
      return d1(d2);
    },
    jRqNp: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    JZDSm: "vVejv",
    YhaWi: function (d1, d2) {
      return d1 - d2;
    },
    VVRxY: function (d1, d2) {
      return d1 * d2;
    },
    fIBJY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    iWbZb: "EYcmW",
    tRwDt: "uReEC",
    ecQRX: "weyiP",
    ozojl: "JxByt",
    CetuH: "CQlWd",
    EUnRR: "margin: 7px 0 4px 0;",
    UUxCl: "margin: 0 0 4px 0;",
    NcAHj: "日志已复制到剪贴板",
    dAKdR: "日志复制成功",
    eYjSm: "LJGNs",
    gBTqe: "BXQiB",
    csqOc: function (d1, d2) {
      return d1 === d2;
    },
    ZHclm: "ZZCcv",
    GZLhF: "wNQjd",
    OjmiA: function (d1, d2) {
      return d1 === d2;
    },
    cMxOw: "tUaoo",
    lPMpJ: function (d1, d2) {
      return d1 + d2;
    },
    pwPyn: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    AoSDx: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    XqpOq: function (d1, d2) {
      return d1 === d2;
    },
    hBKBH: "vSMQR",
    tSMlR: "VUzHp",
    Houga: "mazBm",
    Pwyyy: "领灯神扫荡券过程中出现错误（可能部分或全部失败）",
    EgckW: "fycom",
    rPkUy: "QTXZd",
    pOESR: function (d1, d2) {
      return d1 === d2;
    },
    QdqbE: "GnZat",
    CQwwY: "FjjiP",
    uCtmX: "StnHO",
    EuvHr: function (d1, d2) {
      return d1 !== d2;
    },
    cmAPH: function (d1, d2) {
      return d1 - d2;
    },
    ILneZ: "touchmove",
    CuQWf: "touchend",
    BtTHw: "gvh-drag-handle",
    ZBawb: "mousedown",
    MxeSi: "touchstart",
    Ptwlj: "司马懿",
    IsDmZ: "诸葛亮",
    OXQqT: "太史慈",
    CVfMU: "黄月英",
    DQAOl: "公孙瓒",
    Vubkh: function (d1, d2) {
      return d1 in d2;
    },
    ZDZrC: "ontouchstart",
    CCaHS: "while (true) {}",
    atczh: "counter",
    ULmNs: function (d1) {
      return d1();
    },
    PkiEh: "TYSFV",
    TYFyi: "FtSbO",
    gLroS: "开始执行每日任务流程",
    cLCWu: function (d1, d2) {
      return d1 !== d2;
    },
    KqyQw: "pXnhv",
    CgOwT: "ACgNh",
    gcFhd: "iQfVc",
    EVmFL: "WebSocket连接未就绪，请稍后重试",
    jYieD: function (d1, d2) {
      return d1 !== d2;
    },
    LsFZO: "XJJap",
    SYrbR: function (d1, d2) {
      return d1 === d2;
    },
    jaKIg: "dEyEb",
    NKhlP: "RCzfq",
    BWsQl: "WebSocket连接成功，已通过游戏标题通知其他脚本",
    aYAfc: "登录奖励领取",
    ekfOR: "分享领火把",
    CNmXx: "领取好友金币",
    PAEPK: "招募两次",
    Topes: "领取挂机奖励",
    pVwdS: "点金三次",
    xGkoM: "开启木质宝箱",
    DrHhE: "竞技场三次",
    MFNVL: "收罐子",
    QqODl: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    fYsQy: "===== 开始获取角色信息并发送随机种子 =====",
    taRXy: "role_getroleinfo",
    GdtJY: "2.6.6-wx",
    iulmb: "hortor",
    RFPvw: "mix",
    GToeS: function (d1, d2) {
      return d1 * d2;
    },
    ZHTdG: function (d1, d2) {
      return d1 || d2;
    },
    hLLKg: "aGYSv",
    twCag: "vRSWu",
    mTmAg: function (d1, d2) {
      return d1 !== d2;
    },
    eFpJg: "CMaWc",
    thhXt: "ePFAp",
    uTBQg: function (d1, d2) {
      return d1 !== d2;
    },
    IzMas: function (d1, d2) {
      return d1 === d2;
    },
    gSVxq: "khdKx",
    OBLtc: "Krsah",
    ljuvT: function (d1, d2) {
      return d1 > d2;
    },
    UVNeA: "BDIVY",
    eaCVe: function (d1, d2) {
      return d1 === d2;
    },
    KfBXB: "ffbnQ",
    IQQfo: "pqVtI",
    nqPXl: function (d1, d2) {
      return d1 !== d2;
    },
    jZMUn: "NLFky",
    plGdP: function (d1, d2) {
      return d1 !== d2;
    },
    jtJvD: "IlOte",
    SCDcV: function (d1, d2) {
      return d1 === d2;
    },
    UnUFB: function (d1, d2) {
      return d1 !== d2;
    },
    zrCnJ: "befLI",
    dcBUw: "rObao",
    mgHrW: function (d1, d2) {
      return d1 > d2;
    },
    ZjFeR: "QfUmP",
    Ghbgo: "ZIuxA",
    VwxOp: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uJaWM: "randomSeed",
    rRCCu: "system_custom",
    ljGWt: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    wDGZI: "vaigG",
    LpbAa: "无法获取角色信息或登录时间，跳过随机种子发送",
    EhIMc: "nByIA",
    Spisb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    CSeKt: "NDhZp",
    AXzrl: "QACwu",
    kBehz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vkYPP: function (d1, d2) {
      return d1 >= d2;
    },
    buLVh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    BhfTI: "不在竞技场开放时间内（6:00-21:59:59），跳过竞技场任务",
    msGka: function (d1, d2) {
      return d1 === d2;
    },
    NNDrl: "WLyJh",
    Edwqs: "nqFyW",
    yEcdn: "PkjtG",
    bVYnK: "CUVPV",
    UILCC: function (d1, d2) {
      return d1(d2);
    },
    FPXHp: function (d1, d2) {
      return d1 !== d2;
    },
    uJRTF: "MzruQ",
    dzHkg: "OtyRp",
    piBdG: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    liSKF: "===== 开始盐罐操作 =====",
    xolXi: function (d1, d2) {
      return d1 !== d2;
    },
    kEQOF: "FhVoR",
    tuCOR: "nozVF",
    XTCjC: "停止所有盐罐成功",
    ZvQtp: "BhpwX",
    NCoFh: "CCblA",
    owkUp: "IdaqX",
    tTYhv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rItHz: "启动所有盐罐成功",
    krdLa: function (d1, d2) {
      return d1 !== d2;
    },
    PaDCp: "LPEzX",
    CIZPA: "iZmCg",
    rJbbz: function (d1, d2) {
      return d1(d2);
    },
    mzVDI: "OnrAC",
    tKRxw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    qSeTx: "xLamb",
    OiGTs: function (d1, d2) {
      return d1 !== d2;
    },
    QxylB: "JqCTP",
    UKHDB: function (d1, d2) {
      return d1 === d2;
    },
    zmhVP: "qdzas",
    Vpuzs: "hHpXS",
    ERqyJ: function (d1, d2) {
      return d1 !== d2;
    },
    WmhCv: "MBehf",
    bmyMz: "ehksq",
    eSXSt: "LDxJA",
    PQNUN: function (d1, d2) {
      return d1 === d2;
    },
    esIHY: "QzYFy",
    PcTfU: "xESWh",
    PiAtL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    XPeOY: function (d1, d2) {
      return d1 === d2;
    },
    ibTRo: "QVaJM",
    amVZn: function (d1, d2) {
      return d1 + d2;
    },
    bYryK: "YZwRT",
    ouQLM: "qSHgx",
    hgXUC: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TnfjY: "gwIOJ",
    kmMAC: "DGgIx",
    OTOFH: "xCwWx",
    luGoB: "IkXZr",
    XaLZm: "俱乐部签到",
    XpRHc: function (d1, d2) {
      return d1 !== d2;
    },
    DUKRh: "rNMFP",
    PRzVX: "wTsbe",
    pnXhN: "meTOs",
    WvtfT: "GhRwB",
    BEFBS: "领灯神扫荡券",
    JNdKi: function (d1, d2) {
      return d1 === d2;
    },
    ukOUC: "XyYFz",
    RmxzB: "BlcuB",
    RPwIl: "每日咸王挑战",
    pwrrx: function (d1, d2) {
      return d1 === d2;
    },
    SBzQq: "ZJanp",
    qrfvq: "fZpsN",
    DlvFe: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QQtws: function (d1, d2) {
      return d1 !== d2;
    },
    QqiVD: "qIzdg",
    QRFBQ: "挑战咸王梦境",
    oHMWi: function (d1, d2) {
      return d1 !== d2;
    },
    SDuGo: "zkIPd",
    hpiPL: "PCOeP",
    MjkuV: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eyXxm: "俱乐部BOSS",
    RLyrC: function (d1, d2) {
      return d1 === d2;
    },
    hUlQb: "kMoYw",
    nKblN: "MFfHA",
    OIJAI: "NJICl",
    WBUJs: "dGiaS",
    SHesP: "普通钓鱼",
    zWQTJ: function (d1, d2) {
      return d1 === d2;
    },
    MdDNb: "SAoSA",
    kTWXX: "xrfPJ",
    epXsE: "HAYQJ",
    vyqlx: "gZQlJ",
    dXXbe: "灯神扫荡",
    Xaoks: function (d1, d2) {
      return d1 !== d2;
    },
    Ekxdc: "GzNqS",
    bZYwM: "uMWzp",
    aVwon: "购买皮肤币",
    Bsftq: "SrQwl",
    ZHJhM: "sUNYx",
    fzUfb: "ekfRN",
    qrfFL: "珍宝阁福利",
    otgBj: "LlQOK",
    kVjEi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    okfSE: "gwLLO",
    xlaJn: "周活动福利",
    kwdBM: function (d1, d2) {
      return d1 !== d2;
    },
    jpwAO: "PlYVC",
    dfjkC: "HzzKG",
    RssFk: function (d1, d2) {
      return d1 !== d2;
    },
    MfDoW: "NYICG",
    KVqTe: "月赛助威",
    CsivH: "MZIMJ",
    OQJnL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PiymN: "xGUrm",
    BliQl: "KOKXs",
    OETSp: "俱乐部大事件",
    GjXfs: function (d1, d2) {
      return d1 === d2;
    },
    sQswS: "MqgJm",
    aWmMB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eBEQN: function (d1, d2) {
      return d1 === d2;
    },
    OLeqk: "BUUnG",
    nxnMs: "领取邮件奖励",
    rooCj: function (d1, d2) {
      return d1 === d2;
    },
    VZLPL: "kWLEJ",
    zoqHv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uhZxg: function (d1, d2) {
      return d1 !== d2;
    },
    CwirN: "nwggW",
    pomnt: "RbrKa",
    vrWoV: function (d1, d2) {
      return d1 + d2;
    },
    Yrbvw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zrXNA: function (d1, d2) {
      return d1 + d2;
    },
    vNfpJ: "===== 所有任务执行完毕，开始领取全部任务奖励 =====",
    kaPap: function (d1, d2) {
      return d1(d2);
    },
    foQeS: function (d1) {
      return d1();
    },
    QuIUh: "所有每日任务均已完成",
    iiGQD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ovDuu: "===== 全部流程执行完毕 =====",
    rkaWy: "     每日任务完成",
    KIZDW: "DGjXv",
    YHuyY: "日志已清空",
    ahBTv: "查询过程出错",
    YsEoi: "⚠️ 检测到时间跳跃异常:",
    KmXhS: function (d1, d2) {
      return d1 - d2;
    },
    rJmtu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    xWpdh: function (d1, d2) {
      return d1 !== d2;
    },
    NerTm: "cURgy",
    MNbbj: "LLfYi",
    RSHTA: "myvLQ",
    llRIR: "开始自动答题",
    Zsehw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    smpDw: "nfDqh",
    CnMiY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZbIbP: function (d1, d2) {
      return d1(d2);
    },
    wHjEI: function (d1, d2) {
      return d1 === d2;
    },
    nxceU: "tiNhF",
    UIzqP: function (d1, d2) {
      return d1(d2);
    },
    KdhNW: function (d1, d2) {
      return d1 === d2;
    },
    EoOex: "vPDrb",
    oieFZ: "ZFGfk",
    ZvvOe: function (d1, d2) {
      return d1 === d2;
    },
    kDmxD: function (d1, d2) {
      return d1 === d2;
    },
    pKeuo: "OsSBy",
    hxLna: "OqSYe",
    JpvYx: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aVZaQ: function (d1, d2) {
      return d1 !== d2;
    },
    oBwok: "ytzCk",
    BAxXs: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pzWxb: function (d1, d2) {
      return d1(d2);
    },
    pkLGi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ABjYO: function (d1, d2) {
      return d1(d2);
    },
    JeKbD: "自动答题完成",
    CaDJk: "无法获取角色信息",
    mBVFb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uWFkD: "QyXdl",
    QByVC: function (d1, d2) {
      return d1(d2);
    },
    PPWDJ: function (d1, d2) {
      return d1(d2);
    },
    rQikM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    NOZJI: function (d1, d2) {
      return d1(d2);
    },
    jTKRp: "获取所有物品折扣...",
    luWve: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    cCHvH: "正在获取折扣",
    gtoRI: "eSogz",
    UtOsG: function (d1, d2) {
      return d1 !== d2;
    },
    Luafw: "RCCLs",
    LleOD: "hRslZ",
    YFbfq: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    dMKoR: "store_goodslist",
    RQBxm: function (d1, d2) {
      return d1 === d2;
    },
    kmHQx: "foPLy",
    qQKIX: "FmXae",
    LPRUA: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    GFXPu: function (d1, d2) {
      return d1 === d2;
    },
    Yvxhz: "kZCjV",
    qRppJ: "cSWWN",
    ngCUB: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    KyQum: function (d1, d2) {
      return d1 !== d2;
    },
    LuHFH: "kzYTD",
    tJGZP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    UkFez: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    CNiXP: "otherTasks",
    HMYmj: function (d1, d2) {
      return d1 === d2;
    },
    mPxCg: function (d1, d2) {
      return d1 * d2;
    },
    IRgSu: "hIfLS",
    WjyWQ: function (d1, d2) {
      return d1 !== d2;
    },
    QzTiD: "tjfIO",
    tOepJ: "RRgTD",
    TtRJz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jkmky: function (d1, d2) {
      return d1 === d2;
    },
    jWpxH: "EDbOT",
    HAgPo: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    rgnmB: "获取商品列表成功",
    oilvI: "QATrT",
    EsVQj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eLtGP: "UfwTM",
    XkQco: "ioxJA",
    qTUIJ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    CzQxz: function (d1, d2) {
      return d1 / d2;
    },
    VJguW: function (d1, d2) {
      return d1(d2);
    },
    lnnPF: function (d1, d2) {
      return d1 + d2;
    },
    lLexD: function (d1, d2) {
      return d1 + d2;
    },
    LfezC: function (d1, d2) {
      return d1 + d2;
    },
    ThdFi: "wlKZX",
    JIGIo: function (d1, d2) {
      return d1 !== d2;
    },
    rxSCN: function (d1, d2) {
      return d1 === d2;
    },
    MoChP: "KxgPI",
    aHQvR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    GQLtP: "store_refresh",
    oytde: function (d1, d2) {
      return d1 === d2;
    },
    Rtnsh: "IXtsd",
    IKPLv: "刷新黑市成功",
    ksKSU: "ZNWqk",
    rsIDb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZuZgc: "zonii",
    vqsWg: function (d1, d2) {
      return d1(d2);
    },
    AhexL: "无效时间",
    ZVKWB: function (d1, d2) {
      return d1(d2);
    },
    Vmtpk: function (d1, d2) {
      return d1(d2);
    },
    GMmAR: "DrNwX",
    xoiQX: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YpeuM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aeBex: "store_buy",
    EKdGp: function (d1, d2) {
      return d1 === d2;
    },
    UJbRu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    optHE: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    hAplh: function (d1, d2) {
      return d1 === d2;
    },
    pWQNG: "dPklf",
    TCCkP: "WEpKG",
    kcOMC: "Klljo",
    SMcQD: "manual-header",
    myRmz: "display: flex; align-items: center; gap: 8px;",
    twYEo: "manual-controls",
    ngEMQ: "control-textarea",
    UARZe: "请输入兑换码，每行一个",
    CeFSN: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    aKSPW: "执行兑换",
    kSknq: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    vGOOX: "gvh-autoExpandPanel",
    guIjl: "车辆查询失败",
    jTqQA: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uCHlv: "请输入兑换码",
    oEEcN: "计算需要补充的次数失败",
    mPpyu: function (d1, d2) {
      return d1 !== d2;
    },
    TEaOQ: "WRtlj",
    zFcqD: function (d1, d2) {
      return d1 === d2;
    },
    jeMxv: "WJpyR",
    sfBbb: "sfHqC",
    bOdCt: "yVOhA",
    lGRJc: "ZEYHO",
    JpuTn: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    aCgcP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RDlzN: function (d1, d2) {
      return d1(d2);
    },
    Dcttl: function (d1, d2) {
      return d1 === d2;
    },
    objJQ: function (d1, d2) {
      return d1 === d2;
    },
    szfKT: "jGLcW",
    HhbYm: "dXfKR",
    JUpZK: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    mTvmX: "VzoqI",
    AKBZo: function (d1, d2) {
      return d1 !== d2;
    },
    XjDIi: "cmFvx",
    ZygeX: "hsYFa",
    SzpaR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pvJfr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    BRXvY: function (d1, d2) {
      return d1 - d2;
    },
    LlcSM: function (d1) {
      return d1();
    },
    XCAbb: function (d1, d2) {
      return d1 === d2;
    },
    ILjlB: "znMgs",
    mpQWU: "xvNsA",
    tRzNB: function (d1, d2) {
      return d1 !== d2;
    },
    qeHjN: "jKDgc",
    TSpkn: "eWLbC",
    PiBnv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Dcphj: function (d1, d2) {
      return d1 === d2;
    },
    fFuzi: "MVIUY",
    tCTCL: "upyBd",
    lWXFh: function (d1, d2) {
      return d1 !== d2;
    },
    mygUP: "MDoju",
    BiLXY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PZKcH: function (d1, d2) {
      return d1 === d2;
    },
    hIGNB: "tTyuf",
    ZpPxC: "TmwUs",
    CkxWr: function (d1, d2) {
      return d1(d2);
    },
    mbDpM: function (d1, d2) {
      return d1 > d2;
    },
    yMpfI: "ExUvn",
    DoEMD: "WtVbi",
    NxZYv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vSUVy: function (d1, d2) {
      return d1 !== d2;
    },
    OZXfa: "sOEJV",
    QRfsi: "jzhHU",
    MayFM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eQuWk: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    nXIHX: "PgVwX",
    rUIVr: "SDDwa",
    WUCDM: function (d1, d2) {
      return d1 === d2;
    },
    DjSNI: function (d1, d2) {
      return d1 - d2;
    },
    LAnUg: "无符合条件礼包",
    CYhsf: "bpTFU",
    qSwOH: "UuHnZ",
    SZMBH: function (d1, d2) {
      return d1 === d2;
    },
    PpHbR: "FQcGh",
    zQcit: "daxor",
    RhnLz: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    mcCjF: "未启用任何购买礼包",
    erlCM: "zFqNq",
    fMbGN: function (d1, d2) {
      return d1 !== d2;
    },
    oEmpJ: "OydVZ",
    YVNjX: function (d1, d2) {
      return d1(d2);
    },
    gfYmu: function (d1, d2) {
      return d1 !== d2;
    },
    btEpn: "vhSyy",
    KiicU: "AykJV",
    tlnuh: function (d1, d2) {
      return d1 !== d2;
    },
    VsWHT: "xicMF",
    XhuBJ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RWMhu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ipKJz: "90vw",
    EUkbD: function (d1, d2) {
      return d1 + d2;
    },
    gmyuG: function (d1, d2) {
      return d1 === d2;
    },
    olxRK: "sWAkR",
    ydgmh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    BMkHi: "开始测试购买每日黑市商品",
    RMTRb: "开始测试购买每日商品",
    lNZHL: function (d1, d2) {
      return d1 === d2;
    },
    tdBAN: "TKmxZ",
    LaUwm: "oHbrT",
    LRrAr: function (d1) {
      return d1();
    },
    KyGTw: "测试购买每日黑市完成",
    zjVWH: "测试购买每日商品完成",
    RzPuf: function (d1, d2) {
      return d1 !== d2;
    },
    zDrSG: "xIwPn",
    pvFuT: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RyxGZ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    stKWu: "测试购买每日商品失败",
    zlKco: "gvh-operation-log-container",
    kzgTf: ".gvh-refresh-counts",
    neFvT: function (d1, d2) {
      return d1 === d2;
    },
    ifzzT: "loading",
    mLLdW: "开始测试购买每周黑市礼包",
    hUsUZ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RhqAF: "开始测试购买每周礼包",
    qjqGP: "CRVJq",
    enpwD: "nkuxl",
    xVwcG: "测试购买每周黑市完成",
    VJPUu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    WDBGU: "测试购买每周礼包完成",
    xmyLa: "slyKx",
    qTrLh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jXnUh: "测试购买每周礼包失败",
    exLYJ: function (d1, d2) {
      return d1 * d2;
    },
    rLsVo: function (d1, d2) {
      return d1 === d2;
    },
    MTnZN: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    jyRyv: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QnYOX: function (d1, d2) {
      return d1 === d2;
    },
    bUWUU: "sAbPu",
    kzVGr: "Sbkue",
    bKfDv: "开始黑市采购任务",
    xxALw: "开始黑市采购",
    hYFiT: function (d1, d2) {
      return d1 !== d2;
    },
    EMoBy: "gbYdt",
    RYIKP: function (d1) {
      return d1();
    },
    DNfli: "PTgXh",
    hYJiz: function (d1, d2) {
      return d1 + d2;
    },
    tcIYU: function (d1) {
      return d1();
    },
    kaboH: "iuCuE",
    VmnSS: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PRBll: function (d1, d2) {
      return d1 === d2;
    },
    BVIlY: "oQhoM",
    ALFWm: "因刷新失败，停止后续操作",
    GMbVG: function (d1, d2) {
      return d1 !== d2;
    },
    yUHZp: "hEGly",
    ZNRIg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    tCzEd: "黑市采购任务完成",
    AvqgU: "黑市采购完成",
    tdjTs: function (d1, d2) {
      return d1 === d2;
    },
    UfgEz: "CiOik",
    FmRFj: "MrpwD",
    jXfDg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    afBVg: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eoemB: function (d1, d2) {
      return d1 !== d2;
    },
    NLkHE: "eJtYw",
    gHXmb: function (d1, d2) {
      return d1 + d2;
    },
    BDNZg: function (d1, d2) {
      return d1 - d2;
    },
    vpTfd: function (d1, d2) {
      return d1 / d2;
    },
    EOfKv: function (d1, d2) {
      return d1 - d2;
    },
    QLdXz: "GheXB",
    BAqzF: function (d1, d2) {
      return d1(d2);
    },
    KuXHS: "vfPEt",
    yjYUV: function (d1, d2) {
      return d1(d2);
    },
    lYuED: function (d1, d2) {
      return d1(d2);
    },
    SFmnM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    gFLKH: function (d1, d2) {
      return d1(d2);
    },
    dgwxj: function (d1, d2) {
      return d1 === d2;
    },
    boupK: function (d1, d2) {
      return d1(d2);
    },
    QOIau: "control-select",
    OtBAW: "HxBJL",
    RPJdt: "bwoWB",
    SiTRJ: function (d1, d2) {
      return d1 === d2;
    },
    yESSX: "LOeBJ",
    ApcUj: "ORhnr",
    fSfxD: function (d1, d2) {
      return d1 === d2;
    },
    ntxKP: "Ckbgh",
    fuQad: "rrQZK",
    tcHSU: function (d1) {
      return d1();
    },
    JNwyH: function (d1, d2) {
      return d1 === d2;
    },
    ZbShR: function (d1, d2) {
      return d1 !== d2;
    },
    vHMoh: "AxQsO",
    GCaVz: function (d1) {
      return d1();
    },
    pPSis: function (d1, d2) {
      return d1 === d2;
    },
    LWTEH: "kJpDP",
    pJnKW: "vrCGp",
    rEZEd: function (d1, d2) {
      return d1 / d2;
    },
    QNxrj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    tfqfm: ".shark-tab",
    KwGhw: ".tab-content",
    LLmsj: "日志复制失败: execCommand返回false",
    eRcqB: function (d1, d2) {
      return d1 !== d2;
    },
    earvm: "mwNbZ",
    wNuWL: "YsSjI",
    zKpHT: "iGGRH",
    wUwSC: "VGDPy",
    ggmbJ: "OHoMY",
    jwIDG: "hQxRl",
    oQcqu: "xWapy",
    zPAHe: function (d1, d2) {
      return d1 === d2;
    },
    Cgllr: "function *\\( *\\)",
    Hqcbx: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    TYoFR: "init",
    qCakC: function (d1, d2) {
      return d1 + d2;
    },
    edLwD: "chain",
    CBDfx: function (d1, d2) {
      return d1(d2);
    },
    ZjGrG: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YXkQn: "task-card",
    Fpnkk: "task-title",
    bOQKZ: "task-desc",
    uRIzB: "interval-control",
    aTbsI: "interval-label",
    BHzDC: "循环间隔(小时)",
    OsnHc: "interval-input",
    rNbmA: "task-btn-group",
    xiRdd: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    oeuRR: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    aeSEa: "pause-btn",
    yfLyu: "执行一次",
    nTYGi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    vykni: function (d1, d2) {
      return d1 === d2;
    },
    qrKyM: "wyhfi",
    ZldtK: function (d1, d2) {
      return d1 === d2;
    },
    MnfDt: function (d1, d2) {
      return d1 !== d2;
    },
    AwFdL: "LkxEy",
    uzNBh: "UuTHU",
    xPkdf: "bottlehelper_claim",
    JwwJe: "收罐子操作完成",
    VfJTg: function (d1, d2) {
      return d1 !== d2;
    },
    EKfoN: "WJaEa",
    HIkyV: "mWrhC",
    iPAXC: "system_buygold",
    ilXFk: function (d1, d2) {
      return d1(d2);
    },
    zbEJt: "fSswN",
    YODhX: "BltXh",
    lPjra: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zNbmQ: "执行点金三次",
    XiBgY: "Vinjd",
    PzWvF: function (d1, d2) {
      return d1 / d2;
    },
    NnbPM: function (d1, d2) {
      return d1(d2);
    },
    ekfWJ: function (d1, d2) {
      return d1 === d2;
    },
    tYzkB: "100vw",
    hPDOP: function (d1, d2) {
      return d1 - d2;
    },
    DtVqG: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    AMVND: function (d1, d2) {
      return d1(d2);
    },
    UHYqq: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    Jtccu: "自动启停盐罐、收罐并执行4次分享加钟，按设定间隔重复执行",
    BgYFR: "margin-top:10px;",
    YQBIP: "自动收罐",
    GhuqP: "gvh-maxRefreshTimes",
    oddUi: function (d1, d2) {
      return d1 === d2;
    },
    Hsyuv: "Ifjdz",
    CgvHL: function (d1, d2) {
      return d1 <= d2;
    },
    iKaHN: function (d1, d2) {
      return d1 >= d2;
    },
    Kyxld: function (d1, d2) {
      return d1 > d2;
    },
    MdOlt: function (d1, d2) {
      return d1 === d2;
    },
    OgSHp: function (d1, d2) {
      return d1 <= d2;
    },
    AaLXe: function (d1, d2) {
      return d1 !== d2;
    },
    dvZwA: "znSjv",
    kXqcz: "lRnIQ",
    kYjgh: "月赛助威未在规定时间范围内（每月第四个周日00:00-19:55）",
    pZVlr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zqtIt: "开始执行月赛助威",
    bbTMb: "warguess_getrank",
    yLfDw: "发送获取助威名单请求...",
    eBCgL: function (d1, d2) {
      return d1 !== d2;
    },
    Pvyao: "wRrYh",
    miZpI: function (d1, d2) {
      return d1 !== d2;
    },
    XyYZK: "FsQuo",
    PdXLR: function (d1, d2) {
      return d1 === d2;
    },
    tWhJy: function (d1, d2) {
      return d1 === d2;
    },
    LHhqP: "argYT",
    YzzPP: "rbueH",
    FxSii: "HROqc",
    KRIWj: "Rxulb",
    XbwVy: function (d1, d2) {
      return d1 !== d2;
    },
    iuanI: "ThkOj",
    oeiva: function (d1, d2) {
      return d1 === d2;
    },
    ZNIVA: function (d1, d2) {
      return d1 !== d2;
    },
    MEPQt: "ttdQn",
    TMBjC: function (d1, d2) {
      return d1 !== d2;
    },
    TJqNP: "JLROw",
    jURCk: "无法解析助威名单数据",
    KBQQh: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ZKObp: "warguess_startguess",
    IrbTQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    oTIvl: "发送助威请求...",
    gJTPq: function (d1, d2) {
      return d1 !== d2;
    },
    knUHW: function (d1, d2) {
      return d1 !== d2;
    },
    BwYST: "obPom",
    zuwQK: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QGdXx: "月赛助威成功",
    fFXQs: "jLJko",
    ndxHC: function (d1) {
      return d1();
    },
    RTldV: function (d1, d2) {
      return d1 === d2;
    },
    qICBz: "HQVPC",
    JRhqK: "yNPjx",
    iDxuL: "gJFhi",
    oROJO: "lprgH",
    jbFJd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    bFMpm: "执行领挂机奖励",
    BkCiQ: "未找到日志容器",
    knYRN: function (d1, d2) {
      return d1 !== d2;
    },
    GRyIH: "LjvGJ",
    zCoqi: "MQilv",
    mPFPa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QsfSY: function (d1, d2) {
      return d1 !== d2;
    },
    kMpLO: "UpuDG",
    sXcyy: "jLUTB",
    sbXfg: function (d1, d2) {
      return d1 !== d2;
    },
    yfpHr: "rWkIh",
    ckema: "hero_recruit",
    givfH: function (d1, d2) {
      return d1 === d2;
    },
    gFTVT: "免费招募失败",
    OhhdX: function (d1, d2) {
      return d1(d2);
    },
    omXxx: "付费招募失败",
    PmSid: "item_openbox",
    zxskF: function (d1) {
      return d1();
    },
    YGLES: "fight_startlegionboss",
    zRUFh: function (d1, d2) {
      return d1(d2);
    },
    YoSAj: function (d1, d2) {
      return d1 + d2;
    },
    KzHhN: function (d1, d2) {
      return d1(d2);
    },
    NxLaR: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    sCIZa: "legion_signin",
    eRdyD: function (d1, d2) {
      return d1(d2);
    },
    mRsby: function (d1, d2) {
      return d1 === d2;
    },
    RrJhl: function (d1, d2) {
      return d1 === d2;
    },
    ixyVk: "俱乐部签到完成",
    Rvaxz: "genie_sweep",
    wMQvu: "legion_storebuygoods",
    LMeGG: function (d1, d2) {
      return d1(d2);
    },
    Flenp: "开始梦境挑战任务",
    kwXtj: "当前不是梦境开放时间（周三/周四/周日/周一），停止执行",
    tKNuz: "获取队伍信息失败或队伍为空",
    aQSFD: function (d1, d2) {
      return d1 === d2;
    },
    OEirE: "模块未开启",
    kGlWj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kTxyj: "梦境阵容选择成功",
    fBBZY: function (d1, d2) {
      return d1 < d2;
    },
    BnIXl: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    QqzTn: function (d1, d2) {
      return d1 && d2;
    },
    IKbOP: function (d1, d2) {
      return d1 < d2;
    },
    cKkxs: "4|2|3|0|1|5",
    vayug: function (d1, d2) {
      return d1(d2);
    },
    cVRty: function (d1, d2) {
      return d1 >= d2;
    },
    owFyG: "200160",
    MdxLP: "2600050",
    LsboQ: "400080",
    bOIVD: function (d1, d2) {
      return d1 === d2;
    },
    uKwCv: "咸王梦境已经全部通关",
    QKhhW: "武将不存在",
    jEkzl: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ugoHV: "梦境挑战已提前结束，开始购买商品...",
    gTHLc: "挑战结束，开始购买商品...",
    SDAlg: function (d1, d2) {
      return d1 === d2;
    },
    Jruvx: function (d1, d2) {
      return d1 !== d2;
    },
    zeqPa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    CGeye: function (d1, d2) {
      return d1 === d2;
    },
    SpCOe: function (d1, d2) {
      return d1 === d2;
    },
    rNIOZ: "dungeon_selecthero",
    RQVKv: function (d1, d2) {
      return d1 === d2;
    },
    ilbBb: function (d1, d2) {
      return d1 === d2;
    },
    xLihN: function (d1, d2) {
      return d1 === d2;
    },
    KnLUt: "fight_startdungeon",
    oWgOy: function (d1, d2) {
      return d1 === d2;
    },
    mYUFD: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RSAAr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    NFzbq: "初级商人",
    vOTpm: "进阶石",
    fRQbc: "木质宝箱",
    nblcB: "青铜宝箱",
    ktBys: "普通鱼竿",
    afYIq: "挑战票",
    EVhqa: "咸神火把",
    KacQK: "中级商人",
    qPDvB: "梦魇晶石",
    qoAOA: "黄金宝箱",
    UnDuw: "黄金鱼竿",
    uHNEe: "橙将碎片",
    TgmiP: "紫将碎片",
    ntKNd: "高级商人",
    sargQ: "铂金宝箱",
    iHGNL: "红将碎片",
    qdXnQ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    sDaax: "商人列表:",
    Dleht: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    olOJi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TVNGD: "金币大于30亿，开始购买所有金币商品和高级商人的黄金鱼竿...",
    iqgpD: "dungeon_buymerchant",
    rQuoX: function (d1, d2) {
      return d1(d2);
    },
    deQHu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ASBCw: function (d1, d2) {
      return d1 > d2;
    },
    iTEHO: function (d1, d2) {
      return d1(d2);
    },
    Vkcjj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    pDFrq: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    KZFeH: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    eittj: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    tXlhB: "金币小于30亿，仅购买高级商人的黄金鱼竿...",
    RuvlY: function (d1, d2) {
      return d1 > d2;
    },
    VxCpb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kTXYL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    yUICf: function (d1, d2) {
      return d1(d2);
    },
    ELqwt: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LxOfZ: function (d1, d2) {
      return d1 === d2;
    },
    xhgga: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Flbpb: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    sKKlG: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ojmib: "开始领取珍宝阁福利",
    QNspi: "collection_claimfreereward",
    aMhBE: function (d1, d2) {
      return d1(d2);
    },
    fbWdD: function (d1) {
      return d1();
    },
    BIpaE: function (d1) {
      return d1();
    },
    DyPyM: function (d1) {
      return d1();
    },
    wLrmc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Daqfz: "collectBottle",
    BACCQ: function (d1, d2) {
      return d1(d2);
    },
    sPWxu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    OXdUF: "goldThree",
    UhrbZ: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    sxxzL: "当前不在竞技场开放时间（6:00-21:59），跳过执行",
    DuKJd: "loginReward",
    oiBjl: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ABPAx: "share",
    tcsdr: "friend",
    OUOeM: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    edpQn: "openChest",
    tfymU: "market",
    QskzB: "mail",
    qoJAY: "boss",
    fFjgL: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LGZHy: "genieSweepTicket",
    ZJloF: "collectVegetables",
    pcihQ: "fishThree",
    estVb: "sweepGenie",
    LXFTd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    zylZx: "buySkinCoin",
    LGGLN: "dailySaltKing",
    xZIOd: "saltDream",
    xLWRd: "legion",
    UaIwH: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    yigeg: "treasureFreeReward",
    iDefP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LsQxG: "weeklyWelfare",
    jchRj: "legionEventReward",
    FiDOr: "warGuess",
    hdMgM: function (d1, d2) {
      return d1 === d2;
    },
    OlBQs: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    CkIMe: function (d1, d2) {
      return d1(d2);
    },
    tadsX: function (d1, d2) {
      return d1 !== d2;
    },
    oRJlp: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    nGVdx: "每日任务自动化",
    CVsBl: "包含日常签到、竞技场挑战、点金等综合任务",
    jDQGi: "task-operations",
    bfWFU: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    fbzGr: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    RPusM: "取消全部选中",
    sznbf: "font-weight:bold; margin:10px 0 5px; color:#10b981;",
    gPoct: "核心任务",
    JqLpp: "task-options-grid",
    vlCRC: "font-weight:bold; margin:10px 0 5px; color:#f59e0b;",
    XqKpE: "其他任务",
    aUogG: "领挂机奖励",
    JXyMW: "每日任务奖励",
    yBnhg: "每周任务奖励",
    rlvMO: "其他任务（执行设置中开启的功能）",
    wwWXn: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    qaMwL: function (d1, d2) {
      return d1(d2);
    },
    cNEpG: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    IqrAw: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    DdXZu: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    ynIUq: function (d1, d2) {
      return d1(d2);
    },
    BEJwX: function (d1, d2) {
      return d1(d2);
    },
    SXSJC: "黑市采购自动化",
    nBQus: "自动购买折扣商品和周礼包，按设定间隔重复执行",
    fvUZr: "max-height: 300px; overflow-y: auto; padding-right: 5px;",
    qSqWQ: "font-weight:bold; margin:10px 0 5px; color:#3b82f6;",
    EglHc: "每日黑市配置",
    LTixQ: "margin-bottom: 15px;",
    LtkYi: "config-row",
    AjLpS: "config-label",
    WFRdy: "最大刷新次数",
    JHWdR: "config-input",
    RluIo: "刷新失败时停止",
    DSAgE: "0 auto",
    cIDvP: "goods-config-container",
    ckkRB: "font-weight:bold; margin:15px 0 5px; color:#3b82f6;",
    KePck: "黑市周配置",
    LxRHT: "settings-actions",
    SdPkU: "查看当前折扣",
    ULKiT: "测试购买每日黑市",
    xcWqr: "测试购买每周黑市",
    DVgSa: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    vfiJd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LYGBO: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PYJRa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    JkeVk: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    HhWZn: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    MvGCq: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    wuEvm: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    odgYw: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kqEGi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    RSZQE: function (d1) {
      return d1();
    },
    nHUeF: function (d1, d2) {
      return d1(d2);
    },
    CzCuk: function (d1) {
      return d1();
    },
    SlhCl: function (d1, d2) {
      return d1 === d2;
    },
    HXsMz: "margin: 8px 0; display: flex; flex-wrap: wrap; gap: 8px;",
    ZwvLw: function (d1, d2) {
      return d1 !== d2;
    },
    nazGp: "control-row",
    ibvjI: "执行次数",
    dJAJO: "延迟(ms)",
    uQMLA: "100",
    jFnNq: function (d1, d2) {
      return d1 === d2;
    },
    yFhox: "武将升星+图鉴+领奖",
    HXOdb: function (d1, d2) {
      return d1 === d2;
    },
    knRoN: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    fhyjU: function (d1, d2) {
      return d1 === d2;
    },
    TIflX: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    GHCsj: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    nFXJp: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    MbHov: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    XndvE: "h5web",
    smRAb: "system_claimcdkreward",
    fmiIW: function (d1, d2) {
      return d1 === d2;
    },
    SWUEa: function (d1, d2) {
      return d1 === d2;
    },
    YYfug: "已经领取过奖励了",
    wDUjw: "兑换码不存在",
    dvhVO: "兑换码已过期",
    Yqcvm: "未知错误",
    wmKac: function (d1, d2) {
      return d1 || d2;
    },
    xuDDl: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    IXScP: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    nQKEh: function (d1, d2) {
      return d1 === d2;
    },
    JSPYV: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    kQOAV: "settings-desc",
    ABYVE: "以下任务可单独启用/禁用，当每日任务中的\"其他任务\"选项开启时，将执行所有在此处启用的任务。",
    TmxJr: "single-column-grid",
    tEuBl: "celebrateSign",
    DolnO: "claimFullServer",
    pkhHZ: "领取祝福奖励",
    HAlra: "claimPersonal",
    pIavV: "领取庆典奖励",
    DMblr: "celebrateShare",
    FMXFZ: "庆典分享",
    UbsuQ: "claimAnniversaryBag",
    WSrsy: "claimRechargeReward",
    ZcPKw: "claimMergeBoxEnergy",
    KEeSJ: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    FNVFe: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    ajZIh: "全不选",
    qmzqL: "执行选中项",
    mHCdr: "task-option-item-aligned",
    gUcvc: "task-checkbox-aligned",
    lYOFr: "task-name-aligned",
    MTyXE: "runonce-btn task-btn-aligned",
    rCWmK: function (d1) {
      return d1();
    },
    bMesJ: function (d1, d2, d3, d4) {
      return d1(d2, d3, d4);
    },
    KoSlX: function (d1, d2) {
      return d1(d2);
    },
    udeNa: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    higEr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    CMWRr: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    dswIi: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    YBKRG: function (d1, d2) {
      return d1(d2);
    },
    ohaPP: "display: flex; justify-content: space-between; margin-bottom: 10px;",
    SXznG: "操作日志",
    KTwRz: "display: flex; gap: 8px;",
    LCiCk: function (d1, d2, d3, d4, d5) {
      return d1(d2, d3, d4, d5);
    },
    wUVXc: "清空日志",
    ekCHB: "复制日志",
    tiYDi: ".shark-tab[data-tab=\"enhanced\"]",
    kkUXj: "4|0|3|1|2",
    WFOxI: "shark-tabs",
    ridAi: "enhanced",
    xOYTA: "自动化",
    BAFLV: "account",
    mzaTh: "账号切换",
    FQhEV: "manual",
    Lxugp: "手动任务",
    zySPv: "settings",
    BtKWX: "log",
    tzoLi: "shark-content",
    ydttI: function (d1) {
      return d1();
    },
    Dgatl: function (d1) {
      return d1();
    },
    egqCz: function (d1) {
      return d1();
    },
    qvsKH: function (d1) {
      return d1();
    },
    ONEZO: function (d1) {
      return d1();
    },
    IwlQW: function (d1, d2) {
      return d1 && d2;
    },
    iZrjA: function (d1) {
      return d1();
    },
    QTnPB: "车辆助手+辣条助手8.4.10.4",
    EXLQx: "myMonthInfo",
    Lkprk: "myArenaInfo",
    iaHgD: "从字符串直接提取数据成功",
    QHUOr: function (d1, d2) {
      return d1 + d2;
    },
    blKQR: "钓鱼次数: ",
    DdOPw: "竞技场积分: ",
    wwvfh: function (d1, d2) {
      return d1(d2);
    },
    NhqoK: "获取月度任务数据失败: 无法从响应中提取有效数据",
    zOGAA: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    UiIFA: "获取月度任务数据时发生错误: ",
    nZQIP: function (d1, d2) {
      return d1 + d2;
    },
    nyFzs: function (d1, d2) {
      return d1 - d2;
    },
    xLrHg: function (d1, d2) {
      return d1 * d2;
    },
    GoHQM: function (d1, d2) {
      return d1 - d2;
    },
    Yzosa: function (d1, d2) {
      return d1 - d2;
    },
    HxMtY: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    EBdYa: "开始获取月度任务数据...",
    RLqIK: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    TlJaO: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    DWlJb: function (d1, d2) {
      return d1 > d2;
    },
    kBaPd: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    ONbWr: function (d1, d2) {
      return d1(d2);
    },
    fqwOi: function (d1, d2) {
      return d1 > d2;
    },
    FsEvs: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    uQZoS: function (d1, d2) {
      return d1(d2);
    },
    ifEtF: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    PjZhH: "月度任务补全完成",
    qQmaZ: function (d1) {
      return d1();
    },
    ODihu: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Drvpu: function (d1, d2) {
      return d1 >= d2;
    },
    zCHeK: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    Qbimu: function (d1) {
      return d1();
    },
    WuhpA: function (d1, d2) {
      return d1 !== d2;
    },
    Gxzox: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    CIkKM: function (d1, d2) {
      return d1 + d2;
    },
    xWBAW: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    yZwvh: function (d1, d2) {
      return d1 + d2;
    },
    OrTJG: function (d1, d2) {
      return d1 + d2;
    },
    YNuec: function (d1, d2) {
      return d1(d2);
    },
    WxCJc: function (d1, d2, d3) {
      return d1(d2, d3);
    },
    LYTCh: function (d1, d2) {
      return d1(d2);
    },
    MdHYW: "rewardDaily",
    gGkkv: "rewardWeek",
    gkmcf: "#3b82f6",
    HbKtX: "#10b981",
    QOonj: "#ef4444",
    LCojG: "#f59e0b",
    nvtbg: "#1e293b",
    TqleN: "#334155",
    DAwyb: "#f8fafc",
    FQdvI: "#94a3b8",
    ahwOb: "随机红将碎片",
    BZyfH: "随机橙将碎片",
    PpUOV: "随机紫将碎片",
    wqNgz: "咸神门票",
    NakjT: "金砖回馈0",
    GZKfj: "黑市福利0",
    EfXlw: "黑市见面礼600",
    zAaXs: "黑市惊喜礼1200",
    qvqDl: "初级黑市包（进阶石）2500",
    blrJq: "中级黑市包（宝箱）5000",
    ybzPA: "高级黑市包（招募和紫碎片）8000",
    xAjYO: "顶级鱼竿包12000",
    RzCoi: "白玉黑市包2000",
    AteSy: "特级灵贝包25000",
    rnmws: "养成补给包（晶石和扳手）8000",
    wClBS: "钻石宝箱",
    chOCz: "artifact_lottery",
    bQvJu: "高级钓鱼",
    MaIor: "免费招募",
    eNcHC: "付费招募"
  };
  "use strict";
  const ap = d1 => document.getElementById(d1);
  const aq = function () {
    const d3 = "bin_";
    const d4 = {
      fileNames: "bin_file_names",
      current: "current_selected_account",
      postSwitchActions: "post_switch_actions",
      execDelay: "exec_delay_seconds",
      switchOrder: "account_switch_order",
      autoSwitch: "auto_switch_enabled",
      autoExpand: "auto_expand_enabled"
    };
    const d5 = d4;
    const d6 = window.XMLHttpRequest;
    const d7 = window.fetch;
    function d8() {
      window.XMLHttpRequest = d6;
      window.fetch = d7;
      dt("已停止登录请求监控", "info");
    }
    let d9 = false;
    let da = 0;
    let db = 0;
    function dc() {
      {
        const dH = dp();
        const dI = dh(d5.current, "");
        if (!dI || dH.length === 0) {
          {
            const dM = {
              currentIndex: 0,
              total: 0
            };
            return dM;
          }
        }
        const dJ = dH.indexOf(dI) + 1;
        const dK = {
          currentIndex: dJ,
          total: dH.length
        };
        return dK;
      }
    }
    function dd() {
      const {
        currentIndex: dI,
        total: dJ
      } = dc();
      const dK = document.getElementById("shark-title");
      if (dK) {
        {
          if (dJ > 0) {
            {
              dK.textContent = "进度" + dI + "/" + dJ;
            }
          } else {
            {
              dK.textContent = "辣条助手";
            }
          }
        }
      }
    }
    function de() {
      {
        return dh(d5.autoExpand, "true") === "true";
      }
    }
    const df = {
      daily: false,
      answer: false,
      salt: false,
      tower: false,
      blackmarket: false,
      cdk: false
    };
    const dg = df;
    function dh(dG, dH = "") {
      {
        try {
          const dJ = localStorage.getItem(dG);
          return dJ === null ? dH : dJ;
        } catch {
          return dH;
        }
      }
    }
    function di(dG, dH) {
      {
        try {
          {
            localStorage.setItem(dG, dH);
          }
        } catch {}
      }
    }
    function dj(dG) {
      {
        try {
          {
            localStorage.removeItem(dG);
          }
        } catch {}
      }
    }
    function dk(dG, dH) {
      {
        try {
          {
            const dK = localStorage.getItem(dG);
            return dK ? JSON.parse(dK) : dH;
          }
        } catch {
          {
            return dH;
          }
        }
      }
    }
    function dl(dG, dH) {
      {
        try {
          {
            localStorage.setItem(dG, JSON.stringify(dH));
          }
        } catch {}
      }
    }
    function dm(dG) {
      {
        const dH = new Uint8Array(dG);
        let dI = "";
        for (let dJ = 0; dJ < dH.byteLength; dJ++) {
          {
            dI += String.fromCharCode(dH[dJ]);
          }
        }
        return btoa(dI);
      }
    }
    function dn(dG) {
      {
        const dI = atob(dG);
        const dJ = dI.length;
        const dK = new Uint8Array(dJ);
        for (let dL = 0; dL < dJ; dL++) {
          {
            dK[dL] = dI.charCodeAt(dL);
          }
        }
        return dK.buffer;
      }
    }
    function dp() {
      return dk(d5.fileNames, []);
    }
    function dq(dG, dH) {
      {
        const dJ = dm(dH);
        di("" + d3 + dG, dJ);
        let dK = dp().filter(dL => dL !== dG);
        dK.push(dG);
        dl(d5.fileNames, dK);
      }
    }
    function dr(dG) {
      {
        dj("" + d3 + dG);
        let dJ = dp().filter(dK => dK !== dG);
        dl(d5.fileNames, dJ);
      }
    }
    function ds(dG) {
      return !!dh("" + d3 + dG, "");
    }
    function dt(dG, dH = "") {
      {
        if (window.__SHARK__ && window.__SHARK__.logMessage) {
          {
            window.__SHARK__.logMessage(dG, dH === "error" ? "error" : dH === "success" ? "success" : "info");
          }
        } else {
          console.log("[账号切换]", dG);
        }
      }
    }
    function du(dG, dH = "info") {
      {
        if (window.__SHARK__ && window.__SHARK__.showTip) {
          window.__SHARK__.showTip(dG, dH);
        } else {
          {
            console.log("[TIP]", dH, dG);
          }
        }
      }
    }
    async function dv(dG, dH) {
      try {
        {
          dq(dH, dG);
          dt(dH + " 保存成功", "success");
        }
      } catch (dJ) {
        {
          dq(dH, dG);
          dt(dH + " 保存成功（忽略格式校验）", "warning");
        }
      }
    }
    function dw() {
      {
        const dH = dh(d5.current, "");
        if (!dH) {
          {
            d8();
            return;
          }
        }
        const dI = dh("" + d3 + dH, "");
        if (!dI) {
          {
            dt("账号 " + dH + " 数据不完整，请重新上传", "error");
            d8();
            return;
          }
        }
        const dJ = dn(dI);
        window.XMLHttpRequest = function () {
          {
            const dO = new d6();
            const dP = dO.open;
            dO.open = function (dR, dS) {
              if (typeof dS === "string" && dS.includes("login/authuser")) {
                {
                  this._isLoginRequest = true;
                }
              }
              return dP.apply(this, arguments);
            };
            const dQ = dO.send;
            dO.send = function (dR) {
              if (this._isLoginRequest) {
                const dS = dQ.call(this, dJ);
                d8();
                return dS;
              }
              return dQ.apply(this, arguments);
            };
            return dO;
          }
        };
        function dK() {
          {
            if (window.fetch && !window.__loginInterceptorActive) {
              {
                window.__loginInterceptorActive = true;
                const dP = window.fetch;
                window.fetch = function (dQ, dR) {
                  {
                    const dT = typeof dQ === "string" ? dQ : dQ?.["url"] || "";
                    if (dT.includes("login/authuser")) {
                      {
                        const dU = {
                          ...dR,
                          method: "POST",
                          body: dJ,
                          headers: {
                            ...dR?.["headers"]
                          }
                        };
                        dU.headers["Content-Type"] = "application/octet-stream";
                        const dV = dU;
                        const dW = dP(dQ, dV);
                        dW.finally(() => {
                          {
                            window.fetch = dP;
                            window.__loginInterceptorActive = false;
                          }
                        });
                        return dW;
                      }
                    }
                    return dP.apply(this, arguments);
                  }
                };
              }
            }
          }
        }
        dt("已应用账号：" + dH + "，开始监控登录请求", "success");
      }
    }
    function dx(dG) {
      {
        const dJ = dp();
        if (dJ.length <= 1) {
          return null;
        }
        const dK = dJ.indexOf(dG);
        if (dK === -1) {
          return null;
        }
        if (dK === dJ.length - 1) {
          return null;
        } else {
          {
            return dJ[dK + 1];
          }
        }
      }
    }
    function dy() {
      {
        const dH = dh(d5.current, "");
        const dI = dx(dH);
        if (!dI) {
          {
            dt("已到达最后一个账号，自动切换已停止", "info");
            di(d5.autoSwitch, "false");
            const dK = document.getElementById("shark-title");
            if (dK) {
              {
                dK.textContent = "已处理全部bin";
              }
            }
            const dL = ["daily-task-checkbox", "auto-answer-checkbox", "salt-jar-auto-checkbox", "tower-climb-checkbox", "black-market-checkbox"];
            dL.forEach(dN => {
              {
                const dQ = document.getElementById(dN);
                if (dQ && dQ.checked) {
                  {
                    dQ.checked = false;
                    this.logOperation("已取消选中: " + dN, "info");
                  }
                }
              }
            });
            return;
          }
        }
        if (!ds(dI)) {
          {
            dt("下一个账号 " + dI + " 的BIN文件不存在，自动切换已停止", "error");
            di(d5.autoSwitch, "false");
            return;
          }
        }
        dt("准备切换到下一个账号：" + dI, "info");
        const dJ = ap("accountSelect");
        if (dJ) {
          {
            let dQ = false;
            for (let dR = 0; dR < dJ.options.length; dR++) {
              {
                if (dJ.options[dR].value === dI) {
                  {
                    dJ.selectedIndex = dR;
                    dQ = true;
                    const dT = {
                      bubbles: true
                    };
                    const dU = new Event("change", dT);
                    dJ.dispatchEvent(dU);
                    di(d5.current, dI);
                    break;
                  }
                }
              }
            }
            if (!dQ) {
              dt("在下拉列表中未找到账号 " + dI + "，尝试直接切换", "warning");
            }
          }
        } else {
          dt("未找到账号选择框，尝试直接切换", "warning");
        }
        setTimeout(() => {
          {
            const dY = document.querySelector("#accountSwitchButton");
            if (dY) {
              {
                dt("找到切换按钮，强制触发点击事件", "info");
                const dZ = {
                  view: window,
                  bubbles: true,
                  cancelable: true
                };
                const e0 = new MouseEvent("click", dZ);
                dY.dispatchEvent(e0);
                setTimeout(() => {
                  dd();
                  const e2 = de();
                  if (e2) {
                    {
                      ar();
                    }
                  } else {
                    const e4 = document.getElementById("shark-panel");
                    if (e4 && !e4.classList.contains("collapsed")) {
                      {
                        e4.classList.add("collapsed");
                      }
                    }
                  }
                }, 1000);
                return;
              }
            }
            dt("未找到切换按钮，执行直接切换", "warning");
            di(d5.current, dI);
            localStorage.setItem("autoExpandAfterRefresh", de() ? "true" : "false");
            dd();
            window.location.reload();
          }
        }, 1000);
      }
    }
    function dz(dG, dH) {
      const {
        createButton: dJ,
        createCheckbox: dK,
        createRadio: dL
      } = dH;
      const dM = document.createElement("div");
      dM.style.cssText = "display:flex; flex-direction:column; gap:10px;";
      const dN = document.createElement("div");
      dN.className = "manual-card";
      dN.innerHTML = "\n                <div class=\"manual-header\">\n                    <div class=\"manual-title\">上传BIN（可多选）</div>\n                </div>\n            ";
      const dO = document.createElement("div");
      dO.style.cssText = "display:flex; flex-direction:column; gap:8px;";
      const dP = document.createElement("input");
      dP.type = "file";
      dP.accept = ".bin";
      dP.multiple = true;
      dP.id = "binFileInput";
      const dQ = document.createElement("div");
      dQ.style.cssText = "height:6px; background:#eee; border-radius:3px; display:none;";
      const dR = document.createElement("div");
      dR.id = "progressBar";
      dR.style.cssText = "height:100%; background:#4CAF50; width:0%; transition:width 0.3s ease;";
      dQ.appendChild(dR);
      const dS = dJ("上传", async () => {
        {
          const eg = dP.files;
          if (!eg || eg.length === 0) {
            {
              dt("请先选择BIN文件", "error");
              return;
            }
          }
          if (d9) {
            {
              dt("正在处理文件，请稍候...", "warning");
              return;
            }
          }
          d9 = true;
          da = eg.length;
          db = 0;
          dS.disabled = true;
          dQ.style.display = "block";
          dR.style.width = "0%";
          dt("开始处理 " + da + " 个文件...");
          for (const ej of Array.from(eg)) {
            {
              await new Promise(ek => {
                {
                  const em = ej.name;
                  const en = dp();
                  if (en.includes(em)) {
                    dt("覆盖已存在文件：" + em, "warning");
                  }
                  const eo = new FileReader();
                  eo.onload = async ep => {
                    {
                      const eq = ep.target.result;
                      dt("正在处理 " + em + "...");
                      await dv(eq, em);
                      db++;
                      const er = db / da * 100;
                      dR.style.width = er + "%";
                      ek();
                    }
                  };
                  eo.onerror = () => {
                    {
                      dt("读取 " + em + " 失败", "error");
                      db++;
                      const ep = db / da * 100;
                      dR.style.width = ep + "%";
                      ek();
                    }
                  };
                  eo.readAsArrayBuffer(ej);
                }
              });
            }
          }
          d9 = false;
          dS.disabled = false;
          dt("已完成 " + da + " 个文件处理", "success");
          setTimeout(() => {
            {
              dP.value = "";
              dQ.style.display = "none";
            }
          }, 1000);
          ee();
        }
      }, true, "runonce-btn");
      dO.appendChild(dP);
      dO.appendChild(dS);
      dO.appendChild(dQ);
      dN.appendChild(dO);
      dM.appendChild(dN);
      const dT = document.createElement("div");
      dT.className = "manual-card";
      dT.innerHTML = "\n                <div class=\"manual-header\">\n                    <div class=\"manual-title\">账号管理</div>\n                </div>\n            ";
      const dU = document.createElement("div");
      dU.style.cssText = "display:flex; flex-direction:column; gap:12px;";
      const dV = document.createElement("div");
      dV.style.cssText = "display:flex; gap:8px;";
      const dW = document.createElement("select");
      dW.id = "accountSelect";
      dW.style.cssText = "flex:1; padding:6px; border-radius:4px; background:#334155; color:#fff; border:1px solid #475569;";
      dW.addEventListener("change", () => {
        const eg = dk(d5.postSwitchActions, dg);
        const eh = eg.daily || eg.answer || eg.salt || eg.tower || eg.blackmarket;
        if (eh && dW.value) {
          {
            if (!ds(dW.value)) {
              {
                dt("账号 " + dW.value + " 的BIN文件不存在，请重新上传", "error");
                return;
              }
            }
            dt("检测到执行选项，自动切换账号...", "info");
            startLoginMonitoring();
            di(d5.current, dW.value);
            dl(d5.postSwitchActions, eg);
            const ei = document.querySelector("#accountSwitchButton");
            if (ei) {
              {
                ei.click();
              }
            } else {
              {
                window.location.reload();
              }
            }
          }
        }
      });
      const dX = dJ("全删", () => {
        {
          const eg = dp();
          if (eg.length === 0) {
            {
              dt("没有可删除的账号", "warning");
              return;
            }
          }
          if (confirm("确定要删除所有 " + eg.length + " 个账号的BIN文件吗？此操作不可撤销！")) {
            eg.forEach(ei => {
              {
                dj("" + d3 + ei);
              }
            });
            dl(d5.fileNames, []);
            dj(d5.current);
            ee();
            dt("已删除所有 " + eg.length + " 个账号的BIN文件", "success");
          }
        }
      }, false, "stop-btn");
      const dY = dJ("切换下一个", () => {
        {
          const eh = dW.value || dh(d5.current, "");
          const ei = dx(eh);
          if (!ei) {
            dt("已经是最后一个账号，没有下一个可切换", "warning");
            return;
          }
          if (!ds(ei)) {
            dt("账号 " + ei + " 的BIN文件不存在，请重新上传", "error");
            return;
          }
          di(d5.current, ei);
          dt("正在切换到下一个账号：" + ei + "...", "info");
          const ej = dk(d5.postSwitchActions, dg);
          dl(d5.postSwitchActions, ej);
          window.location.reload();
        }
      }, false, "start-btn");
      dV.appendChild(dW);
      dV.appendChild(dX);
      dV.appendChild(dY);
      dU.appendChild(dV);
      const dZ = document.createElement("div");
      dZ.style.cssText = "font-size:13px; font-weight:bold; color:#fff; margin-top:5px;";
      dZ.textContent = "切换规则：按列表顺序依次切换，最后一个账号后停止";
      dU.appendChild(dZ);
      const e0 = document.createElement("div");
      e0.className = "manual-title";
      e0.textContent = "切换后立即执行";
      dU.appendChild(e0);
      const e1 = document.createElement("div");
      e1.style.cssText = "display:grid; grid-template-columns: repeat(2, 1fr); gap:8px;";
      const e2 = dk(d5.postSwitchActions, dg);
      const e3 = dK("每日任务", !!e2.daily, ef => {
        {
          e2.daily = ef;
          dl(d5.postSwitchActions, e2);
        }
      });
      const e4 = dK("自动答题", !!e2.answer, ef => {
        e2.answer = ef;
        dl(d5.postSwitchActions, e2);
      });
      const e5 = dK("盐罐自动化", !!e2.salt, ef => {
        {
          e2.salt = ef;
          dl(d5.postSwitchActions, e2);
        }
      });
      const e6 = dK("咸将塔爬塔", !!e2.tower, ef => {
        {
          e2.tower = ef;
          dl(d5.postSwitchActions, e2);
        }
      });
      const e7 = dK("黑市采购", !!e2.blackmarket, ef => {
        {
          e2.blackmarket = ef;
          dl(d5.postSwitchActions, e2);
        }
      });
      const e8 = dK("使用兑换码", !!e2.cdk, ef => {
        {
          e2.cdk = ef;
          dl(d5.postSwitchActions, e2);
        }
      });
      e1.appendChild(e3);
      e1.appendChild(e4);
      e1.appendChild(e5);
      e1.appendChild(e6);
      e1.appendChild(e7);
      e1.appendChild(e8);
      dU.appendChild(e1);
      const e9 = document.createElement("div");
      e9.style.cssText = "display:flex; align-items:center; gap:8px; margin-top:5px; flex-wrap: wrap;";
      const ea = dK("任务完成后自动切号", dh(d5.autoSwitch, "false") === "true", ef => {
        di(d5.autoSwitch, ef ? "true" : "false");
        if (ef) {
          {
            dt("已启用自动切换，按列表顺序依次执行，最后一个账号后停止", "info");
          }
        }
      });
      const eb = dK("自动展开界面", dh(d5.autoExpand, "true") === "true", ef => {
        {
          di(d5.autoExpand, ef ? "true" : "false");
          dt("已" + (ef ? "启用" : "禁用") + "自动展开界面", "info");
        }
      });
      e9.appendChild(ea);
      e9.appendChild(eb);
      const ec = dK("切号时判断车辆处理状态", dh("check_car_status_before_switch", "false") === "true", ef => {
        di("check_car_status_before_switch", ef ? "true" : "false");
        dt("已" + (ef ? "启用" : "禁用") + "切号时判断车辆处理状态", "info");
      });
      e9.appendChild(ec);
      dU.appendChild(e9);
      const ed = dJ("切换账号", () => {
        {
          const eh = dW.value;
          if (!eh) {
            {
              dt("请先选择账号", "warning");
              return;
            }
          }
          if (!ds(eh)) {
            {
              dt("账号 " + eh + " 的BIN文件不存在，请重新上传", "error");
              return;
            }
          }
          di(d5.current, eh);
          dl(d5.postSwitchActions, e2);
          dt("正在切换到 " + eh + "...");
          if (dh(d5.autoSwitch, "false") === "true") {
            {
              localStorage.setItem("autoExpandAfterRefresh", "true");
            }
          }
          window.location.reload();
        }
      }, true, "runonce-btn");
      ed.id = "accountSwitchButton";
      dU.appendChild(ed);
      dT.appendChild(dU);
      dM.appendChild(dT);
      dG.appendChild(dM);
      function ee() {
        const eg = dp();
        dW.innerHTML = "<option value=\"\">-- 选择账号 --</option>";
        const eh = dh(d5.current, "");
        eg.forEach(ei => {
          {
            const el = document.createElement("option");
            el.value = ei;
            el.textContent = ei;
            if (ei === eh) {
              el.selected = true;
            }
            dW.appendChild(el);
          }
        });
      }
      ee();
    }
    async function dA(dG) {
      {
        const dJ = dk(d5.postSwitchActions, dg);
        const dK = dJ.daily || dJ.answer || dJ.salt || dJ.tower || dJ.blackmarket || dJ.cdk;
        if (!dK) {
          return;
        }
        dd();
        dt("等待WebSocket连接就绪...", "info");
        let dL;
        if (document.title && document.title.includes("WS已连接")) {
          {
            dL = true;
            dt("游戏标题显示WebSocket已连接，跳过等待", "info");
            aw("检测到另一个脚本已通过游戏标题通知连接成功", "info");
          }
        } else {
          {
            dL = await new Promise(dP => {
              {
                const dS = 120000;
                const dT = 1000;
                const dU = Date.now();
                const dV = () => {
                  {
                    if (document.title && document.title.includes("WS已连接")) {
                      {
                        dt("游戏标题显示WebSocket已连接，跳过等待", "info");
                        aw("检测到另一个脚本已通过游戏标题通知连接成功", "info");
                        dP(true);
                        return;
                      }
                    }
                    if (window.ws && typeof window.ws.sendAsync === "function") {
                      {
                        if (document.title && !document.title.includes("WS已连接")) {
                          {
                            document.title += " WS已连接";
                          }
                        }
                        dt("WebSocket连接成功", "success");
                        dP(true);
                      }
                    } else {
                      if (Date.now() - dU >= dS) {
                        dP(false);
                      } else {
                        {
                          setTimeout(dV, dT);
                        }
                      }
                    }
                  }
                };
                dV();
              }
            });
          }
        }
        if (!dL) {
          {
            dt("WebSocket连接超时，跳过切换后任务执行", "error");
            return;
          }
        }
        dt("WebSocket连接已就绪，开始执行切换后的任务...", "info");
        await c8(100);
        if (dJ.daily && dG.dailyEnhancedTask) {
          {
            try {
              {
                await dG.dailyEnhancedTask();
              }
            } catch (dR) {
              {
                dt("每日任务执行失败: " + dR.message, "error");
              }
            }
          }
        }
        if (dJ.answer && dG.answerTask) {
          {
            try {
              {
                await dG.answerTask();
              }
            } catch (dV) {
              {
                dt("答题任务执行失败: " + dV.message, "error");
              }
            }
          }
        }
        if (dJ.salt && dG.saltJarTask) {
          {
            try {
              {
                await dG.saltJarTask();
              }
            } catch (dZ) {
              {
                dt("盐罐任务执行失败: " + dZ.message, "error");
              }
            }
          }
        }
        if (dJ.tower && dG.enhancedTowerTask) {
          {
            try {
              await dG.enhancedTowerTask();
            } catch (e3) {
              {
                dt("爬塔任务执行失败: " + e3.message, "error");
              }
            }
          }
        }
        if (dJ.blackmarket && dG.executeBlackMarketTask) {
          try {
            {
              await dG.executeBlackMarketTask();
            }
          } catch (e6) {
            dt("黑市采购执行失败: " + e6.message, "error");
          }
        }
        if (dJ.cdk && dG.executeCDKTask) {
          {
            try {
              const e8 = document.querySelector(".control-textarea");
              if (e8) {
                {
                  const e9 = e8.value.split("\n").filter(ea => ea.trim() !== "");
                  if (e9.length > 0) {
                    {
                      await dG.executeCDKTask(e9);
                    }
                  }
                }
              }
            } catch (ec) {
              {
                dt("兑换码执行失败: " + ec.message, "error");
              }
            }
          }
        }
        dt("切换后任务执行完成", "success");
        av("切换后任务已完成");
        const dM = {
          daily: false,
          answer: false,
          salt: false,
          tower: false,
          blackmarket: false,
          cdk: false
        };
        dl(d5.postSwitchActions, dM);
        if (dh(d5.autoSwitch, "false") === "true") {
          {
            dt("准备自动切换到下一个账号...", "info");
            setTimeout(async () => {
              {
                if (aq.shouldCheckCarStatus()) {
                  {
                    await aq.waitForCarProcessing();
                  }
                }
                dy();
              }
            }, 200);
          }
        }
      }
    }
    function dB() {
      {
        return dh(d5.autoSwitch, "false") === "true";
      }
    }
    function dC() {
      {
        return dh("check_car_status_before_switch", "false") === "true";
      }
    }
    async function dD() {
      return document.title.includes("车辆处理完成");
    }
    async function dE() {
      {
        if (!dC()) {
          {
            return true;
          }
        }
        dt("正在等待车辆处理完成...", "info");
        const dH = 20000;
        const dI = 500;
        const dJ = dH / dI;
        for (let dL = 0; dL < dJ; dL++) {
          {
            if (await dD()) {
              dt("车辆处理已完成，准备切换账号", "success");
              return true;
            }
            await new Promise(dM => setTimeout(dM, dI));
          }
        }
        dt("等待车辆处理超时，强制切换账号", "warning");
        return false;
      }
    }
    const dF = {
      applyCurrentAccount: dw,
      buildAccountTab: dz,
      runPostSwitchActions: dA,
      isAutoSwitchEnabled: dB,
      isAutoExpandEnabled: de,
      shouldCheckCarStatus: dC,
      waitForCarProcessing: dE,
      updateTitleWithProgress: dd
    };
    return dF;
  }();
  function ar() {
    const d2 = document.getElementById("shark-panel");
    const d3 = document.getElementById("shark-header");
    const d4 = document.getElementById("shark-title");
    c2.ui.collapsed = false;
    if (d2 && d2.classList.contains("collapsed")) {
      {
        d2.classList.remove("collapsed");
      }
    }
    if (d3 && d3.classList.contains("collapsed")) {
      {
        d3.classList.remove("collapsed");
      }
    }
    if (d4 && d4.classList.contains("collapsed")) {
      {
        d4.classList.remove("collapsed");
      }
    }
    setTimeout(() => {
      {
        const d9 = document.querySelector(".shark-tab[data-tab=\"log\"]");
        if (d9 && !d9.classList.contains("active")) {
          {
            d9.click();
          }
        }
      }
    }, 500);
  }
  function as(d1, d2, d3 = false, d4) {
    {
      const d7 = document.createElement("div");
      d7.style.cssText = "display: flex; align-items: center; gap: 7px; cursor: pointer;";
      const d8 = document.createElement("input");
      d8.type = "radio";
      d8.name = d2;
      d8.checked = d3;
      d8.style.cssText = "width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;";
      const d9 = document.createElement("span");
      d9.textContent = d1;
      d9.style.cssText = "color: #f8fafc; font-size: 13px;";
      d8.addEventListener("click", function (da) {
        {
          da.stopPropagation();
          d4(d8.checked);
        }
      }, false);
      d7.addEventListener("click", function () {
        {
          d8.checked = true;
          d4(true);
        }
      }, false);
      d7.appendChild(d8);
      d7.appendChild(d9);
      return d7;
    }
  }
  function at(d1) {
    {
      return d1.replace(/[！？。，,;:"'(){}\[\]<>《》「」]/g, "").trim();
    }
  }
  function au(d1, d2 = "info") {
    {
      const d5 = document.createElement("div");
      d5.className = "arena-tip";
      d5.textContent = d1;
      let d6 = bJ.ui.colors.primary;
      if (d2 === "success") {
        d6 = bJ.ui.colors.success;
      }
      if (d2 === "error") {
        d6 = bJ.ui.colors.error;
      }
      if (d2 === "warning") {
        d6 = bJ.ui.colors.warning;
      }
      d5.style.cssText = "\n            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);\n            background: " + d6 + "; color: white; padding: 8px 14px; border-radius: 6px;\n            font-family: 'Microsoft YaHei', sans-serif; font-size: 13px; z-index: " + (bJ.ui.zIndex + 10) + ";\n            box-shadow: 0 4px 12px rgba(0,0,0,0.15); white-space: nowrap;\n        ";
      document.body.appendChild(d5);
      setTimeout(() => d5.remove(), 3000);
    }
  }
  function av(d1) {
    {
      const d3 = document.createElement("div");
      d3.style.cssText = "\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: rgba(59, 130, 246, 0.95);\n        color: white;\n        padding: 20px 30px;\n        border-radius: 12px;\n        font-family: 'Microsoft YaHei', sans-serif;\n        font-size: 18px;\n        font-weight: bold;\n        z-index: 9999999;\n        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n        text-align: center;\n        min-width: 280px;\n        animation: popIn 0.3s ease-out forwards, fadeOut 0.5s ease-in 2.5s forwards;\n    ";
      const d4 = document.createElement("style");
      d4.textContent = "\n        @keyframes popIn {\n            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }\n            70% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }\n            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }\n        }\n        @keyframes fadeOut {\n            0% { opacity: 1; }\n            100% { opacity: 0; visibility: hidden; }\n        }\n    ";
      document.head.appendChild(d4);
      d3.innerHTML = "\n        <div style=\"margin-bottom: 8px;\">🎉 任务完成</div>\n        <div>" + d1 + "</div>\n    ";
      document.body.appendChild(d3);
      setTimeout(() => {
        {
          d3.remove();
          d4.remove();
        }
      }, 3000);
    }
  }
  function aw(d1, d2 = "info", d3 = "") {
    {
      const d5 = ap("arenaLogContainer");
      if (!d5) {
        return;
      }
      const d6 = document.createElement("div");
      const d7 = new Date().toLocaleTimeString("zh-CN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      d6.textContent = d3 ? "[" + d7 + "] [" + d3 + "] " + d1 : "[" + d7 + "] " + d1;
      let d8 = bJ.ui.colors.text;
      if (d2 === "success") {
        d8 = bJ.ui.colors.success;
      }
      if (d2 === "error") {
        d8 = bJ.ui.colors.error;
      }
      if (d2 === "warning") {
        d8 = bJ.ui.colors.warning;
      }
      if (d2 === "summary") {
        d8 = bJ.ui.colors.success;
      }
      if (d2 === "discount") {
        d8 = "#fbbf24";
      }
      d6.style.cssText = "\n        margin: 3px 0; padding: 3px 6px; border-radius: 4px; color: " + d8 + ";\n        font-size: 12px; line-height: 1.4; font-family: 'Consolas', monospace;\n    ";
      if (d2 === "summary") {
        {
          d6.style.fontWeight = "bold";
          d6.style.background = bJ.ui.colors.success + "10";
          d6.style.borderLeft = "3px solid " + bJ.ui.colors.success;
        }
      }
      d5.appendChild(d6);
      requestAnimationFrame(() => {
        {
          d5.scrollTop = d5.scrollHeight;
        }
      });
    }
  }
  function ax(d1, d2) {
    {
      aw(d1 + ": " + (d2.message || d2), "error");
    }
  }
  function ay(d1, d2, d3 = false, d4 = "") {
    const d6 = document.createElement("button");
    d6.textContent = d1;
    d6.className = "shark-btn " + d4;
    d6.style.cssText = "\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                padding: 6px 12px; border-radius: 4px; border: none;\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                font-size: 12px; font-weight: 500; cursor: pointer;\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                transition: all 0.2s ease; font-family: 'Microsoft YaHei', sans-serif;\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                " + (d3 ? " background: $ {\n            config.ui.colors.primary\n        };\n        color: white;\n        " : " background: $ {\n            config.ui.colors.lightDark\n        };\n        color: $ {\n            config.ui.colors.text\n        };\n        ") + "\n            z-index: " + (bJ.ui.zIndex + 5) + "; position: relative;\n        ";
    const d7 = {
      capture: false
    };
    d6.addEventListener("click", function (d8) {
      {
        d8.stopPropagation();
        d8.preventDefault();
        d2();
      }
    }, d7);
    return d6;
  }
  function az(d1, d2 = false, d3) {
    {
      const d5 = document.createElement("div");
      d5.className = "checkbox-container";
      d5.style.cssText = "display: flex; align-items: center; gap: 7px; margin-bottom: 8px; cursor: pointer;";
      const d6 = document.createElement("input");
      d6.type = "checkbox";
      d6.checked = d2;
      d6.style.cssText = "width: 16px; height: 16px; cursor: pointer; accent-color: " + bJ.ui.colors.primary + ";";
      d6.className = "task-checkbox";
      d6.dataset.taskName = d1;
      const d7 = document.createElement("span");
      d7.textContent = d1;
      d7.style.cssText = "color: " + bJ.ui.colors.text + "; font-size: 11px;";
      d7.className = "task-name";
      d6.addEventListener("click", function (d8) {
        {
          d8.stopPropagation();
          d3(d6.checked);
          aM();
        }
      }, false);
      d5.addEventListener("click", function () {
        {
          d6.checked = !d6.checked;
          d3(d6.checked);
          aM();
        }
      }, false);
      d5.appendChild(d6);
      d5.appendChild(d7);
      return d5;
    }
  }
  function aA(d1, d2, d3 = false) {
    {
      const d5 = document.createElement("div");
      d5.className = "collapsible-panel";
      d5.style.cssText = "\n        background: " + bJ.ui.colors.dark + ";\n        border-radius: 6px;\n        margin-bottom: 10px;\n        overflow: hidden;\n        border: 1px solid " + bJ.ui.colors.lightDark + ";\n        transition: all 0.3s ease;\n    ";
      const d6 = document.createElement("div");
      d6.style.cssText = "\n        padding: 8px 12px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        cursor: pointer;\n        background: " + bJ.ui.colors.lightDark + ";\n    ";
      const d7 = document.createElement("div");
      d7.style.cssText = "font-weight: bold; color: " + bJ.ui.colors.text + ";";
      d7.textContent = d1;
      const d8 = document.createElement("div");
      d8.style.cssText = "color: " + bJ.ui.colors.text + "; font-size: 14px;";
      d8.textContent = d3 ? "▼" : "►";
      d6.appendChild(d7);
      d6.appendChild(d8);
      const d9 = document.createElement("div");
      d9.style.cssText = "\n        overflow: hidden;\n        transition: max-height 0.5s ease, padding 0.3s ease;\n    ";
      const da = document.createElement("div");
      da.style.cssText = "\n        padding: 10px;\n    ";
      d2(da);
      d9.appendChild(da);
      if (d3) {
        {
          setTimeout(() => {
            {
              da.offsetHeight;
              requestAnimationFrame(() => {
                {
                  const dd = da.scrollHeight + 20;
                  d9.style.maxHeight = dd + "px";
                }
              });
            }
          }, 300);
        }
      } else {
        {
          d9.style.maxHeight = "0";
          d9.style.padding = "0";
        }
      }
      d6.addEventListener("click", () => {
        {
          const de = d9.style.maxHeight !== "0px" && d9.style.maxHeight !== "";
          if (de) {
            {
              d9.style.maxHeight = "0";
              d9.style.padding = "0";
              d8.textContent = "►";
            }
          } else {
            {
              da.offsetHeight;
              setTimeout(() => {
                {
                  const di = da.scrollHeight + 20;
                  d9.style.maxHeight = di + "px";
                  d9.style.padding = "0";
                  d8.textContent = "▼";
                  setTimeout(() => {
                    {
                      d9.style.padding = "0 0 1px 0";
                    }
                  }, 10);
                }
              }, 100);
            }
          }
          if (!de) {
            {
              setTimeout(aN, 300);
            }
          }
        }
      });
      d5.appendChild(d6);
      d5.appendChild(d9);
      return d5;
    }
  }
  function aB() {
    {
      const d3 = document.querySelectorAll(".collapsible-panel");
      for (const d5 of d3) {
        {
          const d7 = d5.querySelector(".manual-title");
          if (d7 && d7.textContent.trim() === "每日任务配置") {
            return d5;
          }
        }
      }
      const d4 = document.querySelector(".task-options-grid");
      if (d4) {
        {
          return d4.closest(".collapsible-panel");
        }
      }
      return null;
    }
  }
  const aL = {
    "分享领火把": "share",
    "领取邮件奖励": "mail",
    "俱乐部BOSS": "boss",
    "招募两次": "recruit",
    "竞技场三次": "arena",
    "领取好友金币": "friend",
    "黑市采购": "market",
    "每日任务奖励": "rewardDaily",
    "每周任务奖励": "rewardWeek",
    "点金三次": "goldThree",
    "普通钓鱼": "fishThree",
    "登录奖励领取": "loginReward",
    "俱乐部签到": "legion",
    "灯神扫荡": "sweepGenie",
    "购买皮肤币": "buySkinCoin",
    "开启木质宝箱": "openChest",
    "每日咸王挑战": "dailySaltKing",
    "挑战咸王梦境": "saltDream",
    "领灯神扫荡券": "genieSweepTicket",
    "领挂机奖励": "collectVegetables",
    "收罐子": "collectBottle",
    "珍宝阁福利": "treasureFreeReward",
    "周活动福利": "weeklyWelfare",
    "俱乐部大事件": "legionEventReward",
    "月赛助威": "warGuess",
    "其他任务（执行设置中开启的功能）": "otherTasks"
  };
  function aM() {
    {
      const d2 = aB();
      if (!d2) {
        return;
      }
      const d3 = d2.querySelectorAll(".task-checkbox[data-task-name]");
      if (d3.length === 0) {
        return;
      }
      const d4 = {};
      d3.forEach(d5 => {
        {
          const d8 = d5.dataset.taskName;
          if (!d8) {
            return;
          }
          d4[d8] = d5.checked;
          const d9 = aL[d8];
          if (d9) {
            bJ.dailyTasks[d9] = d5.checked;
          }
        }
      });
      if (Object.keys(d4).length > 0) {
        {
          localStorage.setItem("dailyTaskStates", JSON.stringify(d4));
        }
      }
    }
  }
  function aN() {
    {
      try {
        {
          const d2 = localStorage.getItem("dailyTaskStates");
          if (!d2) {
            return;
          }
          const d3 = JSON.parse(d2);
          if (Object.keys(d3).length === 0) {
            return;
          }
          const d4 = aB();
          if (!d4) {
            {
              setTimeout(aN, 1000);
              return;
            }
          }
          const d5 = d4.querySelectorAll(".task-checkbox[data-task-name]");
          d5.forEach(d7 => {
            {
              const d9 = d7.dataset.taskName;
              if (d3.hasOwnProperty(d9)) {
                {
                  d7.checked = d3[d9];
                  const db = aL[d9];
                  if (db) {
                    {
                      bJ.dailyTasks[db] = d7.checked;
                    }
                  }
                }
              }
            }
          });
        }
      } catch (d8) {
        ax("加载任务状态失败", d8);
        localStorage.removeItem("dailyTaskStates");
      }
    }
  }
  function aO() {
    {
      let d3 = 0;
      const d4 = 15;
      const d5 = setInterval(() => {
        {
          d3++;
          const d6 = aB();
          if (d6) {
            clearInterval(d5);
            const d7 = d6.querySelectorAll(".task-checkbox");
            if (d7.length > 0) {
              {
                d7.forEach(d9 => {
                  d9.removeEventListener("change", aM);
                  d9.addEventListener("change", aM);
                });
              }
            }
          } else {
            if (d3 >= d4) {
              {
                clearInterval(d5);
              }
            }
          }
        }
      }, 500);
    }
  }
  function aP() {
    {
      try {
        {
          localStorage.setItem("otherTaskStates", JSON.stringify(bJ.otherTasks));
          aw("其他任务状态已保存", "info");
        }
      } catch (d4) {
        {
          ax("保存其他任务状态失败", d4);
        }
      }
    }
  }
  function aQ() {
    {
      try {
        {
          const d3 = localStorage.getItem("otherTaskStates");
          if (d3) {
            {
              const d5 = JSON.parse(d3);
              Object.assign(bJ.otherTasks, d5);
              aw("其他任务状态已加载", "info");
              const d6 = document.querySelectorAll("input[type=\"checkbox\"][data-task-key]");
              d6.forEach(d7 => {
                {
                  const da = d7.dataset.taskKey;
                  if (bJ.otherTasks.hasOwnProperty(da)) {
                    d7.checked = bJ.otherTasks[da];
                  }
                }
              });
            }
          }
        }
      } catch (d8) {
        {
          ax("加载其他任务状态失败", d8);
          localStorage.removeItem("otherTaskStates");
        }
      }
    }
  }
  async function aR() {
    {
      aw("开始执行其他任务", "info");
      const d2 = [];
      if (bJ.otherTasks.celebrateSign) {
        {
          d2.push({
            name: "生日祝福签到",
            execute: async () => {
              {
                aw("准备执行：生日祝福签到", "info");
                const d6 = window.g_utils?.["bon"]?.["encode"] ? {
                  ack: 0,
                  body: window.g_utils.bon.encode({}),
                  cmd: "celebrate_sign",
                  seq: Date.now(),
                  time: Date.now()
                } : {
                  ack: 0,
                  cmd: "celebrate_sign",
                  params: {},
                  seq: Date.now(),
                  time: Date.now()
                };
                const d7 = await window.ws.sendAsync(d6);
                const d8 = "code=" + d7?.["code"] + ", ack=" + d7?.["ack"] + ", error=" + (d7?.["error"] || "无");
                if (d7?.["code"] !== 0) {
                  {
                    aw("服务器返回（生日祝福签到）：" + d8, "debug");
                  }
                }
                if (d7?.["code"] === 0) {
                  aw("生日祝福签到执行成功", "success");
                } else {
                  {
                    aw("生日祝福签到执行失败（" + d8 + "）", "error");
                  }
                }
              }
            }
          });
        }
      }
      if (bJ.otherTasks.claimFullServer) {
        {
          d2.push({
            name: "领取祝福奖励（1-20）",
            execute: async () => {
              {
                const d5 = [];
                const d6 = [];
                const d7 = 20;
                let d8 = false;
                let d9 = false;
                for (let da = 1; da <= d7; da++) {
                  {
                    if (d9) {
                      break;
                    }
                    try {
                      {
                        aw("尝试领取祝福奖励 ID=" + da, "info");
                        const dc = {
                          idList: [da]
                        };
                        const dd = window.g_utils?.["bon"]?.["encode"] ? {
                          ack: 0,
                          body: window.g_utils.bon.encode(dc),
                          cmd: "celebrate_claimfullserver",
                          seq: Date.now() + da,
                          time: Date.now()
                        } : {
                          ack: 0,
                          cmd: "celebrate_claimfullserver",
                          params: dc,
                          seq: Date.now() + da,
                          time: Date.now()
                        };
                        const de = await window.ws.sendAsync(dd);
                        const df = "code=" + de?.["code"] + ", ack=" + de?.["ack"] + ", error=" + (de?.["error"] || "无");
                        if (de?.["code"] !== 0) {
                          {
                            if (!d8) {
                              d6.push(da);
                              aw("领取祝福奖励：ID=" + da + "失败（忽略，继续尝试后续ID）", "warning");
                            } else {
                              {
                                aw("领取祝福奖励：ID=" + da + "失败（已找到成功ID，停止后续请求）", "error");
                                d9 = true;
                              }
                            }
                          }
                        } else {
                          {
                            d8 = true;
                            d5.push(da);
                            aw("领取祝福奖励：ID=" + da + "成功（继续尝试下一个）", "success");
                          }
                        }
                      }
                    } catch (dk) {
                      {
                        if (!d8) {
                          {
                            d6.push(da);
                            aw("领取祝福奖励：ID=" + da + "异常（忽略，继续尝试后续ID）", "warning");
                          }
                        } else {
                          aw("领取祝福奖励：ID=" + da + "异常（已找到成功ID，停止后续请求）", "error");
                          d9 = true;
                        }
                      }
                    }
                    if (!d9) {
                      {
                        await c8(bJ.taskSettings.taskInterval);
                      }
                    }
                  }
                }
                if (d5.length > 0) {
                  {
                    aw("领取完成！成功ID：" + d5.join(", "), "success");
                    if (d6.length > 0) {
                      {
                        aw("第一个成功前的失败ID：" + d6.join(", ") + "（已忽略）", "info");
                      }
                    }
                  }
                } else {
                  {
                    aw("所有" + d7 + "个ID均领取失败", "error");
                  }
                }
              }
            }
          });
        }
      }
      if (bJ.otherTasks.claimPersonal) {
        {
          d2.push({
            name: "领取庆典任务奖励（1-7）",
            execute: async () => {
              let d7 = null;
              const d8 = 7;
              for (let d9 = 1; d9 <= d8; d9++) {
                try {
                  {
                    aw("尝试领取庆典任务奖励 ID=" + d9, "info");
                    const dc = {
                      idList: [d9]
                    };
                    const dd = window.g_utils?.["bon"]?.["encode"] ? {
                      ack: 0,
                      body: window.g_utils.bon.encode(dc),
                      cmd: "celebrate_claimpersonal",
                      seq: Date.now() + d9,
                      time: Date.now()
                    } : {
                      ack: 0,
                      cmd: "celebrate_claimpersonal",
                      params: dc,
                      seq: Date.now() + d9,
                      time: Date.now()
                    };
                    const de = await window.ws.sendAsync(dd);
                    const df = "code=" + de?.["code"] + ", ack=" + de?.["ack"] + ", error=" + (de?.["error"] || "无");
                    if (de?.["code"] !== 0) {
                      {
                        aw("服务器返回（ID=" + d9 + "）：" + df, "debug");
                      }
                    }
                    if (de?.["code"] === 0) {
                      {
                        d7 = d9;
                        aw("领取庆典任务奖励：ID=" + d9 + "成功", "success");
                        break;
                      }
                    } else {
                      aw("领取庆典任务奖励：ID=" + d9 + "失败（" + df + "），尝试下一个ID", "warning");
                    }
                  }
                } catch (di) {
                  {
                    aw("领取庆典任务奖励：ID=" + d9 + "异常（" + di.message + "），尝试下一个ID", "warning");
                  }
                }
                await c8(bJ.taskSettings.taskInterval);
              }
              if (d7 !== null) {
                aw("领取庆典任务奖励完成，成功领取ID=" + d7, "success");
              } else {
                {
                  throw new Error("所有" + d8 + "个庆典任务奖励ID均领取失败");
                }
              }
            }
          });
        }
      }
      if (bJ.otherTasks.celebrateShare) {
        d2.push({
          name: "庆典分享（1-7）",
          execute: async () => {
            {
              let d8 = null;
              const d9 = 7;
              for (let da = 1; da <= d9; da++) {
                try {
                  {
                    aw("尝试庆典分享 ID=" + da, "info");
                    const dc = {
                      id: da
                    };
                    const dd = window.g_utils?.["bon"]?.["encode"] ? {
                      ack: 0,
                      body: window.g_utils.bon.encode(dc),
                      cmd: "celebrate_share",
                      seq: Date.now() + da,
                      time: Date.now()
                    } : {
                      ack: 0,
                      cmd: "celebrate_share",
                      params: dc,
                      seq: Date.now() + da,
                      time: Date.now()
                    };
                    const de = await window.ws.sendAsync(dd);
                    const df = "code=" + de?.["code"] + ", ack=" + de?.["ack"] + ", error=" + (de?.["error"] || "无");
                    if (de?.["code"] !== 0) {
                      aw("服务器返回（ID=" + da + "）：" + df, "debug");
                    }
                    if (de?.["code"] === 0) {
                      d8 = da;
                      aw("庆典分享：ID=" + da + "成功", "success");
                      break;
                    } else {
                      {
                        aw("庆典分享：ID=" + da + "失败（" + df + "），尝试下一个ID", "warning");
                      }
                    }
                  }
                } catch (di) {
                  {
                    aw("庆典分享：ID=" + da + "异常（" + di.message + "），尝试下一个ID", "warning");
                  }
                }
                await c8(bJ.taskSettings.taskInterval);
              }
              if (d8 !== null) {
                {
                  aw("庆典分享完成，成功分享ID=" + d8, "success");
                }
              } else {
                {
                  throw new Error("所有" + d9 + "个庆典分享ID均失败");
                }
              }
            }
          }
        });
      }
      if (bJ.otherTasks.claimAnniversaryBag) {
        {
          d2.push({
            name: "领取免费福袋",
            execute: async () => {
              {
                aw("准备执行：领取免费福袋", "info");
                const d8 = {
                  goodsId: 25101861
                };
                const d9 = window.g_utils?.["bon"]?.["encode"] ? {
                  ack: 0,
                  body: window.g_utils.bon.encode(d8),
                  cmd: "activity_commonbuygoods",
                  seq: Date.now(),
                  time: Date.now()
                } : {
                  ack: 0,
                  cmd: "activity_commonbuygoods",
                  params: d8,
                  seq: Date.now(),
                  time: Date.now()
                };
                const da = await window.ws.sendAsync(d9);
                const db = "code=" + da?.["code"] + ", ack=" + da?.["ack"] + ", error=" + (da?.["error"] || "无");
                if (da?.["code"] !== 0) {
                  {
                    aw("服务器返回（周年免费福袋）：" + db, "debug");
                  }
                }
                if (da?.["code"] === 0) {
                  {
                    aw("领取免费福袋成功", "success");
                  }
                } else {
                  {
                    aw("领取免费福袋失败（" + db + "）", "error");
                  }
                }
              }
            }
          });
        }
      }
      if (bJ.otherTasks.claimRechargeReward) {
        {
          d2.push({
            name: "领取0元累充奖励",
            execute: async () => {
              {
                aw("准备执行：领取0元累充奖励", "info");
                const da = {
                  activityId: 2510187,
                  configId: 251018701
                };
                const db = window.g_utils?.["bon"]?.["encode"] ? {
                  ack: 0,
                  body: window.g_utils.bon.encode(da),
                  cmd: "common_claimtotalreward",
                  seq: Date.now(),
                  time: Date.now()
                } : {
                  ack: 0,
                  cmd: "common_claimtotalreward",
                  params: da,
                  seq: Date.now(),
                  time: Date.now()
                };
                const dc = await window.ws.sendAsync(db);
                const dd = "code=" + dc?.["code"] + ", ack=" + dc?.["ack"] + ", error=" + (dc?.["error"] || "无");
                if (dc?.["code"] !== 0) {
                  aw("服务器返回（周年累充奖励）：" + dd, "debug");
                }
                if (dc?.["code"] === 0) {
                  {
                    aw("领取0元累充奖励成功", "success");
                  }
                } else {
                  {
                    aw("领取0元累充奖励失败（" + dd + "）", "error");
                  }
                }
              }
            }
          });
        }
      }
      if (bJ.otherTasks.claimMergeBoxEnergy) {
        {
          d2.push({
            name: "领取怪塔金钥匙",
            execute: async () => {
              {
                aw("准备执行：领取怪塔金钥匙", "info");
                const d9 = {
                  actType: 1
                };
                const da = {
                  actType: 1
                };
                const db = window.g_utils?.["bon"]?.["encode"] ? {
                  ack: 0,
                  body: window.g_utils.bon.encode(d9),
                  cmd: "mergebox_claimfreeenergy",
                  seq: Date.now(),
                  time: Date.now()
                } : {
                  ack: 0,
                  cmd: "mergebox_claimfreeenergy",
                  params: da,
                  seq: Date.now(),
                  time: Date.now()
                };
                const dc = await window.ws.sendAsync(db);
                const dd = "code=" + dc?.["code"] + ", ack=" + dc?.["ack"] + ", error=" + (dc?.["error"] || "无");
                if (dc?.["code"] !== 0) {
                  {
                    aw("服务器返回（领取怪塔金钥匙）：" + dd, "debug");
                  }
                }
                if (dc?.["code"] === 0) {
                  {
                    aw("领取怪塔金钥匙成功", "success");
                  }
                } else {
                  aw("领取怪塔金钥匙失败（" + dd + "）", "error");
                }
              }
            }
          });
        }
      }
      aw("共" + d2.length + "个其他任务，开始执行", "info");
      for (let d9 = 0; d9 < d2.length; d9++) {
        const da = d2[d9];
        try {
          {
            await c8(100);
            aw("开始执行：" + da.name, "info");
            await da.execute();
            await c8(bJ.taskSettings.taskInterval);
          }
        } catch (dc) {
          {
            aw("其他任务[" + da.name + "]执行失败: " + dc.message, "error");
          }
        }
      }
      aw("其他任务执行完成", "success");
      av("其他任务已完成");
    }
  }
  const aS = {
    primary: "#3b82f6",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    dark: "#1e293b",
    lightDark: "#334155",
    text: "#f8fafc",
    textLight: "#94a3b8"
  };
  const aT = {
    colors: aS,
    zIndex: 999999,
    panelWidth: 380,
    mobileWidth: 360,
    contentHeight: 2000
  };
  const aU = {
    enabled: true,
    count: 100,
    targetId: 0,
    delay: 100,
    useRecommended: true
  };
  const aV = {
    enabled: false,
    count: 1,
    quantity: 10,
    type: 2001,
    delay: 100
  };
  const aW = {
    enabled: false,
    count: 100,
    quantity: 1,
    type: 1,
    delay: 100
  };
  const aX = {
    enabled: false,
    count: 100,
    quantity: 10,
    type: 3,
    delay: 100
  };
  const aY = {
    enabled: false,
    delay: 100
  };
  const aZ = {
    enabled: false,
    count: 100,
    delay: 100
  };
  const b0 = {};
  b0.enabled = false;
  b0.count = 1;
  b0.delay = 100;
  const b1 = {
    enabled: false,
    delay: 100
  };
  const b2 = {
    arena: aU,
    chest: aV,
    fishing: aW,
    recruit: aX,
    upgradeStar: aY,
    tower: aZ,
    cdk: b0,
    monthlyTask: b1
  };
  const b3 = {
    enabled: false,
    interval: 24
  };
  const b4 = {
    enabled: false,
    interval: 24
  };
  const b5 = {
    enabled: false,
    interval: 6,
    claimEnabled: true
  };
  const b6 = {
    enabled: false,
    interval: 4
  };
  const b7 = {
    enabled: false,
    interval: 24
  };
  const b8 = {
    daily: b3,
    answer: b4,
    salt: b5,
    tower: b6,
    blackmarket: b7
  };
  const b9 = {
    share: true,
    mail: true,
    boss: true,
    recruit: true,
    arena: true,
    friend: true,
    market: true,
    rewardDaily: true,
    rewardWeek: true,
    goldThree: true,
    fishThree: true,
    loginReward: true,
    legion: true,
    sweepGenie: true,
    buySkinCoin: true,
    openChest: true,
    dailySaltKing: true,
    saltDream: true,
    genieSweepTicket: true,
    collectVegetables: true,
    collectBottle: true,
    treasureFreeReward: true,
    weeklyWelfare: true,
    legionEventReward: true,
    warGuess: true,
    otherTasks: false
  };
  const ba = {
    celebrateSign: false,
    claimFullServer: false,
    claimPersonal: false,
    celebrateShare: false,
    claimAnniversaryBag: false,
    claimRechargeReward: false,
    claimMergeBoxEnergy: false
  };
  const bb = {
    legionBossCount: 2,
    skinCoinBuyCount: 5,
    taskInterval: 20,
    dailySaltKingCount: 3,
    saltDreamCount: 1,
    genieSweepTicketCount: 3
  };
  const bc = {
    id: 1,
    name: "青铜宝箱",
    discount: 0.5,
    enabled: true
  };
  const bd = {
    id: 2,
    name: "黄金宝箱",
    discount: 0.5,
    enabled: true
  };
  const be = {
    id: 3,
    name: "铂金宝箱",
    discount: 0.8,
    enabled: true
  };
  const bf = {
    id: 4,
    name: "进阶石",
    discount: 0.5,
    enabled: false
  };
  const bg = {
    id: 5,
    name: "精铁",
    discount: 0.5,
    enabled: false
  };
  const bh = {
    id: 6,
    name: "招募令",
    discount: 0.8,
    enabled: true
  };
  const bi = {
    id: 7,
    name: "随机红将碎片",
    discount: 0.5,
    enabled: false
  };
  const bj = {
    id: 8,
    name: "随机橙将碎片",
    discount: 0.5,
    enabled: false
  };
  const bk = {
    id: 9,
    name: "随机紫将碎片",
    discount: 0.5,
    enabled: false
  };
  const bl = {
    id: 10,
    name: "梦魇晶石",
    discount: 0.5,
    enabled: false
  };
  const bm = {
    id: 11,
    name: "普通鱼竿",
    discount: 0.5,
    enabled: true
  };
  const bn = {
    id: 12,
    name: "黄金鱼竿",
    discount: 0.7,
    enabled: true
  };
  const bo = {
    id: 13,
    name: "咸神门票",
    discount: 0.5,
    enabled: false
  };
  const bp = {
    id: 14,
    name: "白玉",
    discount: 0.5,
    enabled: false
  };
  const bq = {
    id: 15,
    name: "彩玉",
    discount: 0.5,
    enabled: false
  };
  const br = {
    id: 16,
    name: "扳手",
    discount: 0.5,
    enabled: false
  };
  const bs = {
    "1": bc,
    "2": bd,
    "3": be,
    "4": bf,
    "5": bg,
    "6": bh,
    "7": bi,
    "8": bj,
    "9": bk,
    "10": bl,
    "11": bm,
    "12": bn,
    "13": bo,
    "14": bp,
    "15": bq,
    "16": br
  };
  const bt = {
    enabled: true,
    refreshTimes: 15,
    purchaseDelay: 20,
    filterDelay: 100,
    stopOnFailure: true,
    items: bs
  };
  const bu = {
    id: 0,
    activityId: 5,
    name: "金砖回馈0",
    enabled: true
  };
  const bv = {
    id: 0,
    activityId: 9,
    name: "黑市福利0",
    enabled: true
  };
  const bw = {
    id: 1,
    activityId: 9,
    name: "黑市见面礼600",
    enabled: true
  };
  const bx = {
    id: 2,
    activityId: 9,
    name: "黑市惊喜礼1200",
    enabled: true
  };
  const by = {
    id: 3,
    activityId: 9,
    name: "初级黑市包（进阶石）2500",
    enabled: false
  };
  const bz = {
    id: 4,
    activityId: 9,
    name: "中级黑市包（宝箱）5000",
    enabled: true
  };
  const bA = {
    id: 5,
    activityId: 9,
    name: "高级黑市包（招募和紫碎片）8000",
    enabled: false
  };
  const bB = {
    id: 6,
    activityId: 9,
    name: "顶级鱼竿包12000",
    enabled: true
  };
  const bC = {
    id: 7,
    activityId: 9,
    name: "白玉黑市包2000",
    enabled: false
  };
  const bD = {
    id: 8,
    activityId: 9,
    name: "特级灵贝包25000",
    enabled: false
  };
  const bE = {
    id: 9,
    activityId: 9,
    name: "养成补给包（晶石和扳手）8000",
    enabled: false
  };
  const bF = {
    "99": bu,
    "0": bv,
    "1": bw,
    "2": bx,
    "3": by,
    "4": bz,
    "5": bA,
    "6": bB,
    "7": bC,
    "8": bD,
    "9": bE
  };
  const bG = {
    enabled: true,
    packages: bF
  };
  const bH = {
    daily: bt,
    weekly: bG
  };
  const bJ = {
    ui: aT,
    manual: b2,
    enhanced: b8,
    dailyTasks: b9,
    otherTasks: ba,
    taskSettings: bb,
    blackmarket: bH
  };
  const bK = {
    name: "木质宝箱",
    cmd: "item_openbox",
    params: d1 => ({
      itemId: 2001,
      number: d1
    })
  };
  const bL = {
    name: "青铜宝箱",
    cmd: "item_openbox",
    params: d1 => ({
      itemId: 2002,
      number: d1
    })
  };
  const bM = {
    name: "黄金宝箱",
    cmd: "item_openbox",
    params: d1 => ({
      itemId: 2003,
      number: d1
    })
  };
  const bN = {
    name: "铂金宝箱",
    cmd: "item_openbox",
    params: d1 => ({
      itemId: 2004,
      number: d1
    })
  };
  const bO = {
    name: "钻石宝箱",
    cmd: "item_openbox",
    params: d1 => ({
      itemId: 2005,
      number: d1
    })
  };
  const bP = {
    "2001": bK,
    "2002": bL,
    "2003": bM,
    "2004": bN,
    "2005": bO
  };
  const bQ = {
    name: "普通钓鱼",
    cmd: "artifact_lottery",
    params: d1 => ({
      lotteryNumber: d1,
      newFree: true,
      type: 1
    })
  };
  const bR = {
    name: "高级钓鱼",
    cmd: "artifact_lottery",
    params: d1 => ({
      lotteryNumber: d1,
      newFree: true,
      type: 2
    })
  };
  const bS = {
    "1": bQ,
    "2": bR
  };
  const bT = {
    name: "免费招募",
    cmd: "hero_recruit",
    params: d1 => ({
      byClub: false,
      recruitNumber: d1,
      recruitType: 3
    })
  };
  const bU = {
    name: "付费招募",
    cmd: "hero_recruit",
    params: d1 => ({
      byClub: false,
      recruitNumber: d1,
      recruitType: 1
    })
  };
  const bV = {
    "3": bT,
    "1": bU
  };
  const bX = {
    chest: bP,
    fishing: bS,
    recruit: bV
  };
  const bZ = {
    "《三国演义》中，「大意失街亭」的是马谩": 1,
    "《三国演义》中，「挥泪斩马谩」的是孙权": 2,
    "《三国演义》中，「火烧博望坡」的是庞统": 2,
    "《三国演义》中，「火烧藤甲兵」的是徐庶": 2,
    "《三国演义》中，「千里走单骑」的是赵云": 2,
    "《三国演义》中，「温酒斩华雄」的是张飞": 2,
    "《三国演义》中，关羽在长坂坡「七进七出」": 2,
    "《三国演义》中，刘备三顾茅庐请诸葛亮出山": 1,
    "《三国演义》中，孙权与曹操「煮酒论英雄」": 2,
    "《三国演义》中，提出「隆中对」的是诸葛亮": 1,
    "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取": 1,
    "《咸鱼之王》里「咸神火把」的持续时间为30分钟": 1,
    "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分": 1,
    "《咸鱼之王》里每位玩家每日可以进行三次「点金三次」": 1
  };
  const c0 = {
    collapsed: true,
    activeTab: "enhanced"
  };
  const c2 = {
    taskIntervals: {},
    taskPaused: {},
    ui: c0
  };
  function c3(d1, d2, d3) {
    {
      if (c2.taskIntervals[d1]) {
        {
          clearInterval(c2.taskIntervals[d1]);
        }
      }
      c2.taskPaused[d1] = false;
      const d6 = async () => {
        {
          if (c2.taskPaused[d1]) {
            {
              aw("[" + d1 + "] 任务已暂停", "info");
              c7();
              return;
            }
          }
          await d2();
        }
      };
      d6();
      c2.taskIntervals[d1] = setInterval(d6, d3);
      c7();
    }
  }
  function c4(d1) {
    {
      if (c2.taskIntervals[d1]) {
        {
          clearInterval(c2.taskIntervals[d1]);
          delete c2.taskIntervals[d1];
          delete c2.taskPaused[d1];
          c7();
        }
      }
    }
  }
  function c5(d1) {
    {
      if (!c2.taskIntervals[d1]) {
        return;
      }
      c2.taskPaused[d1] = !c2.taskPaused[d1];
      c7();
      au("[" + c6(d1) + "]" + (c2.taskPaused[d1] ? "已暂停" : "已恢复"));
    }
  }
  function c6(d1) {
    const d3 = {
      daily: "每日任务",
      answer: "自动答题",
      salt: "盐罐自动化",
      tower: "咸将塔爬塔",
      blackmarket: "黑市采购",
      cdk: "使用兑换码"
    };
    return d3[d1] || d1;
  }
  function c7() {
    {
      const d2 = ["daily", "answer", "salt", "tower", "blackmarket"];
      d2.forEach(d3 => {
        {
          const d6 = ap("status-" + d3);
          const d7 = ap("pause-" + d3);
          if (!d6) {
            return;
          }
          if (!c2.taskIntervals[d3]) {
            {
              d6.textContent = "未运行";
              d6.className = "task-status";
              if (d7) {
                d7.textContent = "暂停";
              }
            }
          } else {
            if (c2.taskPaused[d3]) {
              {
                d6.textContent = "已暂停";
                d6.className = "task-status paused";
                if (d7) {
                  d7.textContent = "恢复";
                }
              }
            } else {
              {
                d6.textContent = "运行中";
                d6.className = "task-status running";
                if (d7) {
                  d7.textContent = "暂停";
                }
              }
            }
          }
        }
      });
    }
  }
  function c8(d1) {
    return new Promise(d2 => setTimeout(d2, d1));
  }
  function c9(d1) {
    {
      const d4 = Math.min(d1, bJ.taskSettings.taskInterval);
      return new Promise(d5 => setTimeout(d5, d4));
    }
  }
  function ca(d1) {
    {
      return parseFloat(d1).toFixed(1);
    }
  }
  function cb(d1, d2) {
    {
      const d4 = Math.round(parseFloat(d1) * 10) / 10;
      const d5 = Math.round(parseFloat(d2) * 10) / 10;
      if (isNaN(d4) || isNaN(d5)) {
        return false;
      }
      return d4 <= d5;
    }
  }
  function cc() {
    {
      return window.innerWidth <= bJ.ui.mobileWidth;
    }
  }
  function cd(d1) {
    {
      return new Date(d1);
    }
  }
  async function ce(d1, d2, d3 = {}) {
    {
      if (!window.ws || !window.ws.sendAsync) {
        {
          throw new Error("无可用WebSocket连接");
        }
      }
      const d6 = d1 + "_" + d2;
      const d7 = window.g_utils?.["bon"]?.["encode"] ? {
        ack: 0,
        body: window.g_utils.bon.encode(d3),
        cmd: d6,
        seq: Date.now(),
        time: Date.now()
      } : {
        ack: 0,
        cmd: d6,
        params: d3,
        seq: Date.now(),
        time: Date.now()
      };
      const d8 = await window.ws.sendAsync(d7);
      if (d8?.["code"] !== 0 && d8?.["ack"] !== 0) {
        {
          const db = d8?.["code"] || d8?.["ack"];
          const dc = d8?.["error"] || d8?.["message"] || "";
          const dd = dc ? " " + dc : "";
          throw new Error("操作失败（错误码：" + db + dd + "）");
        }
      }
      return d8;
    }
  }
  async function cf() {
    try {
      aw("开始执行升级挂机等级（10次）", "info");
      for (let d3 = 0; d3 < 10; d3++) {
        {
          const d4 = {
            upgradeNum: 1
          };
          const d5 = {
            ack: 0,
            body: d4,
            cmd: "system_hangupupgrade",
            seq: Date.now() + d3,
            time: Date.now()
          };
          const d6 = await window.ws.sendAsync(d5);
          if (d6?.["code"] !== 0 && d6?.["ack"] !== 0) {
            {
              const d7 = d6?.["code"] || d6?.["ack"];
              const d8 = d6?.["error"] || d6?.["message"] || "";
              const d9 = d8 ? " " + d8 : "";
              throw new Error("第" + (d3 + 1) + "次升级失败（错误码：" + d7 + d9 + "）");
            }
          }
          aw("升级挂机等级第" + (d3 + 1) + "/10次成功", "success");
          await c8(10);
        }
      }
      aw("升级挂机等级完成（共10次）", "success");
      return true;
    } catch (dc) {
      aw("升级挂机等级失败: " + dc.message, "error");
      return false;
    }
  }
  async function cg() {
    {
      try {
        {
          const d4 = bJ.taskSettings.genieSweepTicketCount;
          aw("开始领取灯神扫荡券（共" + d4 + "次）", "info");
          for (let d5 = 0; d5 < d4; d5++) {
            {
              const d7 = {
                ack: 0,
                body: {},
                cmd: "genie_buysweep",
                seq: Date.now() + d5,
                time: Date.now()
              };
              await c8(200);
              const d8 = await window.ws.sendAsync(d7);
              if (d8?.["code"] !== 0 && d8?.["ack"] !== 0) {
                {
                  const da = d8?.["code"];
                  const db = d8?.["error"];
                  const dc = db ? " " + db : "";
                  throw new Error("第" + (d5 + 1) + "次领取失败（错误码：" + da + dc + "）");
                }
              }
              aw("领取灯神扫荡券第" + (d5 + 1) + "/" + d4 + "次成功", "success");
            }
          }
          aw("灯神扫荡券领取完成（共" + d4 + "次）", "success");
          return true;
        }
      } catch (dd) {
        {
          aw("领取灯神扫荡券失败: " + dd.message, "error");
          return false;
        }
      }
    }
  }
  async function ch() {
    {
      const d3 = {
        name: "招募达标",
        fixedId: 6,
        desc: "招募周福利"
      };
      const d4 = {
        name: "宝箱达标",
        fixedId: 7,
        desc: "宝箱周福利"
      };
      const d5 = {
        name: "金砖达标",
        fixedId: 9,
        desc: "黑市周福利"
      };
      const d6 = [d3, d4, d5];
      let d7 = null;
      try {
        {
          const d9 = {
            ack: 0,
            cmd: "activity_get",
            params: {},
            seq: Date.now(),
            time: Date.now()
          };
          const da = await window.ws.sendAsync(d9);
          const db = da?.["_rawData"];
          if (!db) {
            throw new Error("未找到活动数据");
          }
          const dc = db?.["activityList"] || db?.["activities"] || db?.["activity"]?.["activity"];
          if (!dc || !Array.isArray(dc)) {
            throw new Error("活动列表格式错误");
          }
          for (const dd of d6) {
            {
              const df = dc.find(dg => dg?.["name"] === dd.name);
              if (df) {
                {
                  d7 = dd;
                  break;
                }
              }
            }
          }
          if (!d7) {
            {
              aw("所有周福利活动均未找到，无需领取", "info");
              return;
            }
          }
          await cj("执行" + d7.desc + "领取", async () => {
            {
              try {
                {
                  const dl = {
                    activityId: d7.fixedId,
                    buyNum: 1,
                    goodsIndex: 0
                  };
                  const dm = {
                    ack: 0,
                    cmd: "activity_buystoregoods",
                    params: dl,
                    seq: Date.now(),
                    time: Date.now()
                  };
                  const dn = await window.ws.sendAsync(dm);
                  if (dn?.["code"] === 0) {
                    aw(d7.desc + "（ID：" + d7.fixedId + "）领取成功", "success");
                  } else {
                    {
                      const dp = dn?.["message"] || "错误码：" + dn?.["code"];
                      aw(d7.desc + "（ID：" + d7.fixedId + "）领取失败：" + dp, "warning");
                    }
                  }
                  await c8(bJ.taskSettings.taskInterval);
                }
              } catch (dr) {
                {
                  if (dr.message.includes("已领取")) {
                    {
                      aw(d7.desc + "（ID：" + d7.fixedId + "）已领取", "info");
                    }
                  } else {
                    aw(d7.desc + "（ID：" + d7.fixedId + "）领取异常：" + dr.message, "error");
                  }
                  await c8(bJ.taskSettings.taskInterval / 2);
                }
              }
            }
          });
        }
      } catch (di) {
        aw("周福利流程异常：" + di.message, "error");
        return false;
      }
    }
  }
  async function ci() {
    try {
      aw("开始领取俱乐部大事件奖励（将分别请求两个目标日期）", "info");
      const d2 = (db, dc) => {
        {
          const dd = new Date(db, dc + 1, 0);
          const de = dd.getDay();
          const df = new Date(dd);
          df.setDate(dd.getDate() - de);
          const dg = df.getFullYear();
          const dh = String(df.getMonth() + 1).padStart(2, "0");
          const di = String(df.getDate()).padStart(2, "0");
          return dg + "/" + dh + "/" + di;
        }
      };
      const d3 = new Date();
      const d4 = d3.getFullYear();
      const d5 = d3.getMonth();
      let d6;
      let d7;
      if (d5 === 0) {
        {
          d6 = 11;
          d7 = d4 - 1;
        }
      } else {
        {
          d6 = d5 - 1;
          d7 = d4;
        }
      }
      const d8 = d2(d7, d6);
      const d9 = d2(d4, d5);
      const da = [d8, d9];
      aw("目标日期列表：" + da.join("、") + "，将依次请求", "info");
      for (const [dd, de] of da.entries()) {
        {
          aw("\n[" + (dd + 1) + "/" + da.length + "] 开始请求 " + de + " 的奖励", "info");
          const df = {
            date: de
          };
          const dg = {
            date: de
          };
          const dh = window.g_utils?.["bon"]?.["encode"] ? {
            ack: 0,
            body: window.g_utils.bon.encode(df),
            cmd: "legion_claimwarrankreward",
            seq: Date.now() + dd,
            time: Date.now()
          } : {
            ack: 0,
            cmd: "legion_claimwarrankreward",
            params: dg,
            seq: Date.now() + dd,
            time: Date.now()
          };
          try {
            {
              const dj = await window.ws.sendAsync(dh);
              if (dj?.["code"] === 0 || dj?.["ack"] === 0) {
                {
                  aw("[" + (dd + 1) + "] ✅ " + de + " 奖励领取成功", "success");
                }
              } else {
                {
                  const dm = dj?.["code"];
                  const dn = dj?.["error"];
                  const dp = dn ? " " + dn : "";
                  aw("[" + (dd + 1) + "] ⚠️ " + de + " 领取失败（错误码：" + dm + dp + "）", "warning");
                }
              }
            }
          } catch (dq) {
            {
              aw("[" + (dd + 1) + "] ❌ " + de + " 请求异常：" + dq.message, "error");
            }
          }
          if (dd < da.length - 1) {
            await c8(bJ.taskSettings.taskInterval);
          }
        }
      }
      aw("\n所有目标日期的奖励请求已处理完毕", "info");
    } catch (dt) {
      ax("领取俱乐部大事件奖励总流程异常", dt);
      await c8(bJ.taskSettings.taskInterval / 2);
    }
  }
  async function cj(d1, d2) {
    try {
      {
        if (window.__require) {
          {
            const d5 = window.__require("data-index");
            aw("执行" + d1, "info");
            await d2(d5);
            aw(d1 + "完成", "success");
            return true;
          }
        } else {
          {
            aw(d1 + "：缺少data-index模块", "error");
            return false;
          }
        }
      }
    } catch (d8) {
      {
        aw(d1 + "失败: " + d8.message, "error");
        return false;
      }
    }
  }
  async function ck(d1) {
    {
      try {
        {
          aw("开始普通钓鱼" + d1 + "次", "info");
          const d4 = bX.fishing[1];
          if (!d4) {
            throw new Error("未找到普通钓鱼配置");
          }
          if (!window.ws || !window.ws.sendAsync) {
            {
              throw new Error("无可用WebSocket连接");
            }
          }
          for (let d6 = 0; d6 < d1; d6++) {
            {
              const d8 = d4.params(1);
              const d9 = window.g_utils?.["bon"]?.["encode"] ? {
                ack: 0,
                body: window.g_utils.bon.encode(d8),
                cmd: d4.cmd,
                seq: Date.now(),
                time: Date.now()
              } : {
                ack: 0,
                cmd: d4.cmd,
                params: d8,
                seq: Date.now(),
                time: Date.now()
              };
              await c8(300);
              const da = await window.ws.sendAsync(d9);
              if (da?.["code"] !== 0 && da?.["ack"] !== 0) {
                {
                  const db = da?.["code"];
                  const dc = da?.["error"];
                  const dd = dc ? " " + dc : "";
                  throw new Error("钓鱼失败（错误码：" + db + dd + "）");
                }
              }
              aw("普通钓鱼第" + (d6 + 1) + "/" + d1 + "次成功", "success");
              await c8(bJ.taskSettings.taskInterval);
            }
          }
          aw("普通钓鱼" + d1 + "次完成", "success");
          return true;
        }
      } catch (dg) {
        {
          aw("普通钓鱼失败: " + dg.message, "error");
          return false;
        }
      }
    }
  }
  async function cl() {
    {
      aw("领取每日任务积分奖励（共10个）", "info");
      let d3 = 0;
      let d4 = 0;
      for (const d6 of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        {
          try {
            {
              aw("领取第" + d6 + "个任务奖励", "info");
              const d8 = {
                taskId: d6
              };
              await ce("Task", "claimDailyPoint", d8);
              d3++;
              await c8(100);
            }
          } catch (d9) {
            {
              if (d9.message.includes("已领取") || d9.message.includes("-2")) {
                {
                  aw("第" + d6 + "个任务奖励已领取，跳过", "info");
                }
              } else {
                ax("领取第" + d6 + "个任务奖励失败", d9);
              }
              d4++;
              await c8(100);
            }
          }
        }
      }
      aw("任务奖励领取完成：成功" + d3 + "个，失败/已领取" + d4 + "个", "info");
      const d5 = {
        success: d3,
        fail: d4
      };
      return d5;
    }
  }
  async function cm() {
    {
      aw("开始执行：领取任务奖励", "info");
      try {
        {
          await cl();
          try {
            {
              aw("领取每日总奖励", "info");
              const d3 = {
                rewardId: 0
              };
              await ce("Task", "claimDailyReward", d3);
              await c8(bJ.taskSettings.taskInterval);
            }
          } catch (d5) {
            {
              if (d5.message.includes("已领取")) {
                {
                  aw("每日总奖励已领取", "info");
                }
              } else {
                {
                  ax("领取每日总奖励失败", d5);
                }
              }
            }
          }
          try {
            {
              aw("领取每周奖励", "info");
              const d9 = {
                rewardId: 0
              };
              await ce("Task", "claimWeekReward", d9);
              await c8(bJ.taskSettings.taskInterval);
            }
          } catch (db) {
            {
              if (db.message.includes("已领取")) {
                aw("每周奖励已领取", "info");
              } else {
                {
                  ax("领取每周奖励失败", db);
                }
              }
            }
          }
          aw("完成：领取任务奖励", "success");
          return true;
        }
      } catch (de) {
        {
          ax("领取任务奖励失败", de);
          au("操作失败: " + de.message, "error");
          return false;
        }
      }
    }
  }
  async function cn() {
    {
      try {
        {
          const d1 = window.__require("data-index");
          aw("开始执行盐罐固定流程", "info");
          const d2 = {
            bottleType: -1
          };
          await d1.BottleHelperService.stop(d2);
          aw("停止罐子成功", "success");
          await c8(100);
          const d3 = {
            bottleType: -1
          };
          await d1.BottleHelperService.start(d3);
          aw("启动罐子成功", "success");
          await c8(100);
          await d1.BottleHelperService.claim({});
          aw("收罐成功", "success");
          return true;
        }
      } catch (d5) {
        {
          aw("盐罐流程出错: " + d5.message, "error");
          return false;
        }
      }
    }
  }
  async function co() {
    {
      try {
        {
          aw("开始执行：登录相关奖励领取", "info");
          try {
            {
              aw("领取每日登录奖励", "info");
              await ce("System", "signInReward", {});
              await c8(bJ.taskSettings.taskInterval);
            }
          } catch (d9) {
            {
              if (d9.message.includes("已领取")) {
                {
                  aw("每日登录奖励已领取", "info");
                }
              } else {
                {
                  ax("领取每日登录奖励失败", d9);
                }
              }
            }
          }
          try {
            {
              aw("领取特惠礼包", "info");
              const dd = {
                discountId: 1
              };
              await ce("discount", "claimreward", dd);
              await c8(bJ.taskSettings.taskInterval);
            }
          } catch (df) {
            {
              if (df.message.includes("已领取") || df.message.includes("-2")) {
                {
                  aw("特惠礼包已领取", "info");
                }
              } else {
                {
                  ax("领取特惠礼包失败", df);
                }
              }
            }
          }
          const d3 = {
            id: 1,
            name: "福利卡"
          };
          const d4 = {
            id: 4001,
            name: "周卡"
          };
          const d5 = {
            id: 4002,
            name: "月卡"
          };
          const d6 = {
            id: 4003,
            name: "永久卡"
          };
          const d7 = [d3, d4, d5, d6];
          for (const dj of d7) {
            {
              try {
                {
                  aw("领取特权礼包-" + dj.name, "info");
                  await c8(200);
                  const dn = {
                    cardId: dj.id
                  };
                  await ce("card", "claimreward", dn);
                  aw("领取特权礼包-" + dj.name + "成功", "success");
                  await c8(bJ.taskSettings.taskInterval);
                }
              } catch (dq) {
                {
                  if (dq.message.includes("已领取") || dq.message.includes("-2")) {
                    {
                      aw("特权礼包-" + dj.name + "已领取", "info");
                    }
                  } else {
                    {
                      ax("领取特权礼包-" + dj.name + "失败", dq);
                    }
                  }
                  await c8(bJ.taskSettings.taskInterval / 2);
                }
              }
            }
          }
          aw("登录相关奖励领取完成", "success");
          return true;
        }
      } catch (du) {
        {
          ax("登录相关奖励领取出错", du);
          return false;
        }
      }
    }
  }
  async function cp() {
    {
      function d2() {
        {
          const d3 = new Date(2024, 5, 21);
          const d4 = new Date();
          const d5 = Math.floor((d4.getTime() - d3.getTime()) / 86400000);
          const d6 = Math.ceil(d5 / 7);
          const d7 = 240400 + d6;
          return d7;
        }
      }
      try {
        {
          const d4 = await fetch("https://xxz-xyzw.hortorgames.com/login/manifest?platform=hortor&version=0.30.0-android", {
            method: "POST",
            headers: {
              Host: "xxz-xyzw.hortorgames.com",
              "User-Agent": "Regable/3.0.29",
              Connection: "keep-alive",
              Accept: "application/json, text/plain, */*",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json;charset=UTF-8",
              "Accept-Language": "zh-CN,zh;q=0.9"
            },
            body: JSON.stringify({})
          });
          const d5 = await d4.json();
          if (d5.body && d5.body.battleVersion) {
            {
              aw("API获取battleVersion: " + d5.body.battleVersion, "success");
              return d5.body.battleVersion;
            }
          } else {
            const d7 = d2();
            return d7;
          }
        }
      } catch (d8) {
        const d9 = d2();
        aw("使用日期计算fallback获取battleVersion: " + d9, "info");
        return d9;
      }
    }
  }
  async function cq() {
    const d2 = bJ.manual.arena;
    if (!window.ws || !window.ws.sendAsync) {
      {
        au("无可用WebSocket连接", "error");
        aw("WebSocket连接缺失", "error");
        return false;
      }
    }
    au("开始竞技场战斗（" + d2.count + "次）", "success");
    aw("竞技场战斗启动：" + d2.count + "次，目标ID：" + d2.targetId);
    let d3 = 0;
    let d4 = null;
    try {
      for (let d7 = 1; d7 <= d2.count; d7++) {
        {
          const d9 = "轮次 " + d7 + "/" + d2.count;
          aw("===== " + d9 + " =====", "info");
          try {
            {
              const db = window.g_utils?.["bon"]?.["encode"] ? {
                ack: 0,
                body: window.g_utils.bon.encode({}),
                cmd: "arena_startarea",
                seq: Date.now(),
                time: Date.now()
              } : {
                ack: 0,
                cmd: "arena_startarea",
                params: {},
                seq: Date.now(),
                time: Date.now()
              };
              const dc = await window.ws.sendAsync(db);
              if (dc?.["code"] !== 0 && dc?.["ack"] !== 0) {
                {
                  const dr = dc?.["code"] || dc?.["ack"];
                  const ds = dc?.["error"] || dc?.["message"] || "";
                  const dt = ds ? " " + ds : "";
                  aw("arena_startarea请求失败（错误码：" + dr + dt + "）", "warning", d9);
                }
              }
              await c8(50);
              const dd = {
                refresh: false
              };
              const de = {
                refresh: false
              };
              const df = window.g_utils?.["bon"]?.["encode"] ? {
                ack: 0,
                body: window.g_utils.bon.encode(dd),
                cmd: "arena_getareatarget",
                seq: Date.now(),
                time: Date.now()
              } : {
                ack: 0,
                cmd: "arena_getareatarget",
                params: de,
                seq: Date.now(),
                time: Date.now()
              };
              const dg = await window.ws.sendAsync(df);
              let dh;
              if (d2.useRecommended && dg?.["_rawData"]?.["roleList"]?.["length"] > 0) {
                dh = dg._rawData.roleList[0].roleId;
              } else {
                {
                  dh = d2.targetId;
                }
              }
              if (!dh) {
                {
                  aw("未获取到目标ID，尝试刷新列表", "warning");
                  const dv = {
                    refresh: true
                  };
                  const dw = {
                    refresh: true
                  };
                  const dx = window.g_utils?.["bon"]?.["encode"] ? {
                    ack: 0,
                    body: window.g_utils.bon.encode(dv),
                    cmd: "arena_getareatarget",
                    seq: Date.now(),
                    time: Date.now()
                  } : {
                    ack: 0,
                    cmd: "arena_getareatarget",
                    params: dw,
                    seq: Date.now(),
                    time: Date.now()
                  };
                  const dy = await window.ws.sendAsync(dx);
                  dh = dy?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                  if (!dh) {
                    throw new Error("刷新后仍未获取到角色ID");
                  }
                }
              }
              aw("获取角色ID成功（" + dh + "）", "success", d9);
              const di = await cp();
              const dj = {
                targetId: dh,
                battleVersion: di
              };
              const dk = {
                targetId: dh,
                battleVersion: di
              };
              const dl = window.g_utils?.["bon"]?.["encode"] ? {
                ack: 0,
                body: window.g_utils.bon.encode(dj),
                cmd: "fight_startareaarena",
                seq: Date.now(),
                time: Date.now()
              } : {
                ack: 0,
                cmd: "fight_startareaarena",
                params: dk,
                seq: Date.now(),
                time: Date.now()
              };
              const dm = await window.ws.sendAsync(dl);
              if (dm?.["code"] !== 0 && dm?.["ack"] !== 0) {
                {
                  const dB = dm?.["code"] || dm?.["ack"];
                  const dC = dm?.["error"] || dm?.["message"] || "";
                  const dD = dC ? " " + dC : "";
                  throw new Error("战斗请求失败（错误码：" + dB + dD + "）");
                }
              }
              d3++;
              const dn = dm?.["_rawData"]?.["battleData"]?.["result"]?.["isWin"] === true;
              const dp = dn ? "胜利" : "失败";
              await c8(200);
              aw("战斗" + dp, "info", d9);
              try {
                {
                  const dF = JSON.stringify(dm);
                  const dG = "\"activity:arena\"";
                  const dH = dF.indexOf(dG);
                  if (dH !== -1) {
                    const dI = dF.indexOf(":", dH + dG.length);
                    if (dI !== -1) {
                      {
                        let dJ = "";
                        let dK = dI + 1;
                        while (dK < dF.length && (dF[dK] === " " || dF[dK] === "\t")) {
                          {
                            dK++;
                          }
                        }
                        while (dK < dF.length && /\d/.test(dF[dK])) {
                          dJ += dF[dK];
                          dK++;
                        }
                        if (dJ) {
                          {
                            d4 = parseInt(dJ);
                          }
                        }
                      }
                    }
                  }
                }
              } catch (dO) {
                {
                  aw("获取月度积分时出错: " + dO.message, "error", d9);
                }
              }
              if (d4 !== null && !isNaN(d4)) {
                {
                  aw("月度竞技场积分: " + d4, "info", d9);
                  au("月度竞技场积分: " + d4, "info");
                }
              } else {
                {
                  aw("未获取到月度竞技场积分", "warning", d9);
                }
              }
              au(d9 + " 成功", "success");
            }
          } catch (dS) {
            {
              aw("本轮失败：" + dS.message, "error", d9);
              au(d9 + " 失败", "error");
              const dT = {
                success: false,
                monthlyArenaScore: null
              };
              return dT;
            }
          }
          if (d7 < d2.count) {
            await c8(d2.delay);
          }
        }
      }
      const d6 = "竞技场战斗完成！总轮次：" + d2.count + "，成功：" + d3;
      aw(d6, "summary");
      au(d6, "success");
      return {
        success: d3 > 0,
        monthlyArenaScore: d4
      };
    } catch (dV) {
      aw("竞技场任务出错: " + dV.message, "error");
      au("竞技场任务执行出错", "error");
      const dW = {
        success: false,
        monthlyArenaScore: null
      };
      return dW;
    }
  }
  async function cr(d1, d2, d3) {
    {
      if (!window.ws || !window.ws.sendAsync) {
        {
          au("无可用WebSocket连接", "error");
          aw("WebSocket连接缺失", "error");
          return;
        }
      }
      const d5 = bX[d1][d3.type];
      if (!d5) {
        {
          au("无效的" + d2 + "类型", "error");
          return;
        }
      }
      const d6 = d3.count * d3.quantity;
      au("开始" + d5.name + "（" + d3.count + "次×" + d3.quantity + "个）", "success");
      aw(d5.name + "启动：" + d3.count + "次，每次" + d3.quantity + "个，总计" + d6 + "个");
      let d7 = 0;
      try {
        {
          for (let db = 1; db <= d3.count; db++) {
            {
              const dd = "轮次 " + db + "/" + d3.count;
              aw("===== " + dd + " =====", "info");
              try {
                const de = d5.params(d3.quantity);
                const df = window.g_utils?.["bon"]?.["encode"] ? {
                  ack: 0,
                  body: window.g_utils.bon.encode(de),
                  cmd: d5.cmd,
                  seq: Date.now(),
                  time: Date.now()
                } : {
                  ack: 0,
                  cmd: d5.cmd,
                  params: de,
                  seq: Date.now(),
                  time: Date.now()
                };
                const dg = await window.ws.sendAsync(df);
                const dh = dg?.["code"] === 0 || dg?.["ack"] === 0;
                if (dh) {
                  {
                    aw(d5.name + "成功（数量：" + d3.quantity + "）", "success", dd);
                    d7++;
                    au(dd + " 成功", "success");
                  }
                } else {
                  {
                    const dj = dg?.["code"];
                    const dk = dg?.["error"];
                    const dl = dk ? " " + dk : "";
                    throw new Error("执行失败（错误码：" + dj + dl + "）");
                  }
                }
              } catch (dn) {
                {
                  aw("本轮失败：" + dn.message, "error", dd);
                  au(dd + " 失败", "error");
                }
              }
              if (db < d3.count) {
                await c8(d3.delay);
              }
            }
          }
          const da = d5.name + "完成！总次数：" + d3.count + "，成功：" + d7;
          aw(da, "summary");
          au(da, "success");
        }
      } catch (dr) {
        {
          aw(d2 + "任务出错: " + dr.message, "error");
          au(d2 + "任务执行出错", "error");
        }
      }
    }
  }
  async function cs() {
    {
      const d3 = 100;
      const d4 = {
        length: 20
      };
      const d5 = {
        length: 28
      };
      const d6 = {
        length: 14
      };
      const d7 = [...Array.from(d4, (d9, da) => 101 + da), ...Array.from(d5, (d9, da) => 201 + da), ...Array.from(d6, (d9, da) => 301 + da)];
      if (!window.ws || typeof window.ws.sendAsync !== "function") {
        {
          au("当前页面无可用WebSocket连接，无法执行任务", "error");
          aw("无WebSocket连接", "error");
          return;
        }
      }
      const d8 = document.querySelector("#upgradeStarExecuteBtn");
      if (d8) {
        {
          d8.disabled = true;
          d8.textContent = "执行中...";
          d8.style.opacity = "0.8";
          d8.style.cursor = "not-allowed";
        }
      }
      au("开始一键升星", "success");
      aw("开始一键升星任务");
      try {
        {
          for (const db of d7) {
            {
              for (let dc = 0; dc < 10; dc++) {
                {
                  let dd;
                  const df = {
                    heroId: db
                  };
                  if (window.g_utils && typeof window.g_utils.bon?.["encode"] === "function") {
                    {
                      dd = {
                        ack: 0,
                        body: window.g_utils.bon.encode(df),
                        cmd: "hero_heroupgradestar",
                        seq: Date.now(),
                        time: Date.now()
                      };
                    }
                  } else {
                    {
                      dd = {
                        ack: 0,
                        cmd: "hero_heroupgradestar",
                        params: df,
                        seq: Date.now(),
                        time: Date.now()
                      };
                    }
                  }
                  try {
                    const di = await window.ws.sendAsync(dd);
                    aw("英雄ID:" + db + " 升星第" + (dc + 1) + "/10次", di?.["code"] === 0 ? "success" : "error");
                    if (di?.["code"] !== 0) {
                      {
                        aw("英雄ID:" + db + " 升星失败，跳过剩余次数", "error");
                        break;
                      }
                    }
                  } catch (dk) {
                    {
                      aw("英雄ID:" + db + " 升星第" + (dc + 1) + "/10次异常，跳过剩余次数", "error");
                      break;
                    }
                  }
                  await new Promise(dm => setTimeout(dm, d3));
                }
              }
            }
          }
          au("英雄升星完成，开始图鉴升星", "success");
          aw("英雄升星全部完成");
          for (const dp of d7) {
            {
              for (let dr = 0; dr < 10; dr++) {
                {
                  let ds;
                  const du = {
                    heroId: dp
                  };
                  if (window.g_utils && typeof window.g_utils.bon?.["encode"] === "function") {
                    {
                      ds = {
                        ack: 0,
                        body: window.g_utils.bon.encode(du),
                        cmd: "book_upgrade",
                        seq: Date.now(),
                        time: Date.now()
                      };
                    }
                  } else {
                    ds = {
                      ack: 0,
                      cmd: "book_upgrade",
                      params: du,
                      seq: Date.now(),
                      time: Date.now()
                    };
                  }
                  try {
                    {
                      const dx = await window.ws.sendAsync(ds);
                      aw("英雄ID:" + dp + " 图鉴升星第" + (dr + 1) + "/10次", dx?.["code"] === 0 ? "success" : "error");
                      if (dx?.["code"] !== 0) {
                        aw("英雄ID:" + dp + " 图鉴升星失败，跳过剩余次数", "error");
                        break;
                      }
                    }
                  } catch (dy) {
                    {
                      aw("英雄ID:" + dp + " 图鉴升星第" + (dr + 1) + "/10次异常，跳过剩余次数", "error");
                      break;
                    }
                  }
                  await new Promise(dA => setTimeout(dA, d3));
                }
              }
            }
          }
          au("图鉴升星完成，开始领取奖励", "success");
          aw("图鉴升星全部完成");
          for (let dB = 0; dB < 10; dB++) {
            {
              let dD;
              const dE = {};
              if (window.g_utils && typeof window.g_utils.bon?.["encode"] === "function") {
                dD = {
                  ack: 0,
                  body: window.g_utils.bon.encode(dE),
                  cmd: "book_claimpointreward",
                  seq: Date.now(),
                  time: Date.now()
                };
              } else {
                {
                  dD = {
                    ack: 0,
                    cmd: "book_claimpointreward",
                    params: dE,
                    seq: Date.now(),
                    time: Date.now()
                  };
                }
              }
              try {
                {
                  const dG = await window.ws.sendAsync(dD);
                  aw("领取图鉴奖励第" + (dB + 1) + "/10次", dG?.["code"] === 0 ? "success" : "error");
                  if (dG?.["code"] !== 0) {
                    {
                      aw("领取图鉴奖励失败，跳过剩余次数", "error");
                      break;
                    }
                  }
                }
              } catch (dJ) {
                {
                  aw("领取图鉴奖励第" + (dB + 1) + "/10次异常，跳过剩余次数", "error");
                  break;
                }
              }
              await new Promise(dL => setTimeout(dL, d3));
            }
          }
          au("一键升星全部完成", "success");
          aw("一键升星全部完成", "summary");
        }
      } finally {
        {
          if (d8) {
            {
              d8.disabled = false;
              d8.textContent = "一键升星";
              d8.style.opacity = "1";
              d8.style.cursor = "pointer";
            }
          }
        }
      }
    }
  }
  async function ct() {
    {
      const d2 = bJ.manual.tower;
      try {
        {
          window.__require("SubRole");
          window.__require("TipsManager");
          window.__require("data-index");
          window.__require("ServerData");
        }
      } catch (d4) {
        {
          au("爬塔依赖模块缺失", "error");
          aw("爬塔依赖模块缺失", "error");
          return;
        }
      }
      au("开始自动爬塔", "success");
      aw("自动爬塔启动：每步延迟" + d2.delay + "ms");
      try {
        const d6 = window.__require("data-index");
        const d7 = window.__require("ServerData");
        const d8 = d7.ROLE;
        if (d8.levelId <= 50) {
          {
            aw("角色等级≤50，不满足爬塔条件", "warning");
            au("角色等级≤50，无法爬塔", "warning");
            return;
          }
        }
        await d6.TowerService.getInfo({});
        for (let da = 0; da <= 30; da++) {
          if (d8.tower.energy <= 0) {
            {
              aw("爬塔体力耗尽，停止爬塔", "info");
              au("爬塔体力耗尽", "info");
              break;
            }
          }
          if (d8.tower.id % 10 == 0) {
            {
              const df = d8.tower.id / 10;
              if (!d8.tower.reward[df]) {
                {
                  aw("领取咸将塔第" + df + "-10层通关奖励", "info");
                  const dg = {
                    rewardId: df
                  };
                  await d6.TowerService.claimReward(dg);
                }
              }
            }
          }
          if (d8.tower.id >= 4500) {
            {
              aw("已达到4500层上限，停止爬塔", "info");
              au("已达4500层上限", "info");
              return;
            }
          }
          const db = Math.floor(d8.tower.id / 10) + 1;
          const dc = (d8.tower.id + 1) % 10 || 10;
          aw("挑战咸将塔第" + db + "-" + dc + "层");
          au("挑战第" + db + "-" + dc + "层", "info");
          await d6.FightService.startTower({});
          await c8(d2.delay);
        }
        aw("自动爬塔任务完成", "summary");
        au("自动爬塔完成", "success");
      } catch (dj) {
        {
          aw("自动爬塔出错: " + dj.message, "error");
          au("爬塔出错", "error");
        }
      }
    }
  }
  async function cu() {
    {
      try {
        {
          const d3 = window.__require("data-index");
          aw("开始盐罐自动化任务", "info");
          const d4 = {
            bottleType: -1
          };
          await d3.BottleHelperService.stop(d4);
          aw("停止罐子成功", "success");
          await c8(1000);
          const d5 = {
            bottleType: -1
          };
          await d3.BottleHelperService.start(d5);
          aw("启动罐子成功", "success");
          await c8(3000);
          await cf();
          await d3.SystemService.claimHangUpReward({});
          aw("领挂机奖励成功", "success");
          await c8(1000);
          for (let d6 = 0; d6 < 4; d6++) {
            const d7 = {
              isSkipShareCard: true,
              type: 2
            };
            await d3.SystemService.myShareCallback(d7);
            aw("第" + (d6 + 1) + "次分享加钟成功", "success");
            await c8(100);
          }
          if (bJ.enhanced.salt.claimEnabled) {
            {
              await d3.BottleHelperService.claim({});
              aw("收罐成功", "success");
            }
          }
          aw("盐罐任务完成", "success");
        }
      } catch (da) {
        {
          aw("盐罐任务出错: " + da.message, "error");
        }
      }
    }
  }
  async function cv() {
    {
      try {
        {
          const d3 = window.__require("data-index");
          const d4 = window.__require("ServerData");
          const d5 = d4.ROLE;
          if (d5.levelId <= 50 || d5.tower.id >= 4500) {
            {
              aw("角色等级≤50或已达4500层，跳过爬塔", "warning");
              return;
            }
          }
          aw("开始咸将塔爬塔任务", "info");
          await d3.TowerService.getInfo({});
          for (let d7 = 0; d7 <= 30 && d5.tower.energy > 0; d7++) {
            {
              if (d5.tower.id % 10 === 0) {
                const da = d5.tower.id / 10;
                if (!d5.tower.reward[da]) {
                  {
                    aw("领取咸将塔第" + da + "-10层奖励");
                    const dc = {
                      rewardId: da
                    };
                    await d3.TowerService.claimReward(dc);
                    await c8(300);
                  }
                }
              }
              const d9 = Math.floor(d5.tower.id / 10) + 1;
              await d3.FightService.startTower({});
              await c8(300);
            }
          }
          aw("咸将塔爬塔任务完成", "success");
        }
      } catch (de) {
        aw("爬塔任务出错: " + de.message, "error");
      }
    }
  }
  async function cw() {
    {
      try {
        {
          const d4 = bJ.taskSettings.dailySaltKingCount;
          aw("开始挑战每日咸王（共" + d4 + "次）", "info");
          const d5 = 28800000;
          const d6 = Date.now() + d5;
          const d7 = new Date(d6);
          const d8 = d7.getUTCDay();
          const d9 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][d8];
          aw("今日（UTC+8时间）星期" + (d8 === 0 ? "日" : d8) + "，挑战BOSS ID: " + d9, "info");
          for (let da = 0; da < d4; da++) {
            {
              await cj("挑战每日咸王boss（第" + (da + 1) + "/" + d4 + "次）", async function (dc) {
                {
                  await c8(500);
                  const dd = {
                    bossId: d9
                  };
                  await dc.FightService.startBoss(dd);
                  await c8(200);
                }
              });
              await c8(100);
            }
          }
          aw("每日咸王挑战完成（共" + d4 + "次）", "success");
          return true;
        }
      } catch (dd) {
        {
          aw("每日咸王挑战失败: " + dd.message, "error");
          return false;
        }
      }
    }
  }
  async function cx() {
    try {
      {
        const d3 = window.__require("data-index");
        aw("开始执行每日任务流程", "info");
        if (document.title && document.title.includes("WS已连接")) {
          {
            aw("游戏标题显示WebSocket已连接，跳过检查（另一个脚本已通过标题通讯）", "info");
          }
        } else {
          if (!window.ws || typeof window.ws.sendAsync !== "function") {
            {
              throw new Error("WebSocket连接未就绪，请稍后重试");
            }
          } else {
            {
              if (document.title && !document.title.includes("WS已连接")) {
                {
                  document.title += " WS已连接";
                }
              }
              aw("WebSocket连接成功，已通过游戏标题通知其他脚本", "success");
            }
          }
        }
        const d4 = {
          ...bJ
        };
        const d5 = d4;
        const d6 = {
          name: "登录奖励领取",
          taskId: 1
        };
        const d7 = {
          name: "分享领火把",
          taskId: 2
        };
        const d8 = {
          name: "领取好友金币",
          taskId: 3
        };
        const d9 = {
          name: "招募两次",
          taskId: 4
        };
        const da = {
          name: "领取挂机奖励",
          taskId: 5
        };
        const db = {
          name: "点金三次",
          taskId: 6
        };
        const dc = {
          name: "开启木质宝箱",
          taskId: 7
        };
        const dd = {
          name: "黑市采购",
          taskId: 12
        };
        const de = {
          name: "竞技场三次",
          taskId: 13
        };
        const df = {
          name: "收罐子",
          taskId: 14
        };
        const dh = {
          loginReward: d6,
          share: d7,
          friend: d8,
          recruit: d9,
          collectVegetables: da,
          goldThree: db,
          openChest: dc,
          market: dd,
          arena: de,
          collectBottle: df
        };
        try {
          aw("===== 开始获取角色信息并发送随机种子 =====", "info");
          const dA = {
            ack: 0,
            cmd: "role_getroleinfo",
            params: {
              clientVersion: "2.6.6-wx",
              platform: "hortor",
              platformExt: "mix"
            },
            seq: Date.now() + Math.floor(Math.random() * 1000),
            time: Date.now()
          };
          const dB = await window.ws.sendAsync(dA);
          const dC = dB?.["_rawData"];
          let dD = dC || {};
          if (window.g_utils?.["bon"]?.["decode"] && dC) {
            {
              try {
                {
                  dD = window.g_utils.bon.decode(dC);
                }
              } catch (dH) {
                aw("解码失败，使用原始数据: " + dH.message, "warning");
              }
            }
          }
          let dE = 0;
          if (dD["last:login:time"] !== undefined) {
            dE = dD["last:login:time"];
          } else {
            if (dD?.["role"] && dD?.["role"]["last:login:time"] !== undefined) {
              {
                dE = dD?.["role"]["last:login:time"];
              }
            } else {
              if (dD?.["data"] && dD?.["data"]["last:login:time"] !== undefined) {
                {
                  dE = dD?.["data"]["last:login:time"];
                }
              } else {
                let dK = dD;
                const dL = [dK];
                while (dL.length > 0) {
                  {
                    const dN = dL.pop();
                    if (typeof dN === "object" && dN !== null) {
                      {
                        if (dN["last:login:time"] !== undefined) {
                          {
                            dE = dN["last:login:time"];
                            break;
                          }
                        }
                        for (const dP in dN) {
                          {
                            if (typeof dN[dP] === "object" && dN[dP] !== null) {
                              {
                                dL.push(dN[dP]);
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
          if (dE > 0) {
            {
              const dT = dX => {
                let dY = dX >>> 0;
                dY ^= 2118920861;
                dY = dY << 16 | dY >>> 16;
                dY ^= 797788954;
                dY ^= 1513922175;
                return dY >>> 0;
              };
              const dU = dT(dE);
              aw("last:login:time: " + dE, "info");
              aw("种子: " + dU, "info");
              const dV = {
                key: "randomSeed",
                value: dU
              };
              const dW = window.g_utils?.["bon"]?.["encode"] ? {
                ack: 0,
                body: window.g_utils.bon.encode(dV),
                cmd: "system_custom",
                seq: Date.now(),
                time: Date.now()
              } : {
                ack: 0,
                cmd: "system_custom",
                params: {
                  key: "randomSeed",
                  value: dU
                },
                seq: Date.now(),
                time: Date.now()
              };
              await window.ws.sendAsync(dW);
              aw("种子发送成功", "success");
            }
          } else {
            {
              aw("无法获取角色信息或登录时间，跳过随机种子发送", "warning");
            }
          }
        } catch (dZ) {
          {
            aw("发送随机种子失败: " + dZ.message, "error");
          }
        }
        const {
          arena: di
        } = d5.dailyTasks;
        if (di) {
          {
            aw("===== 开始执行" + dh.arena.name + " =====", "info");
            const e1 = new Date();
            const e2 = e1.getHours();
            if (e2 < 6 || e2 >= 22) {
              aw("不在竞技场开放时间内（6:00-21:59:59），跳过竞技场任务", "warning");
            } else {
              {
                try {
                  {
                    await c8(2000);
                    await cL.arena(bJ);
                    aw(dh.arena.name + "完成", "success");
                  }
                } catch (e5) {
                  {
                    aw(dh.arena.name + "失败: " + e5.message, "error");
                  }
                }
              }
            }
          }
        } else {
          {
            aw(dh.arena.name + ": ⚙️ 配置未开启（跳过）", "info");
          }
        }
        await c8(100);
        aw("===== 开始盐罐操作 =====", "info");
        try {
          {
            const e9 = {
              bottleType: -1
            };
            await d3.BottleHelperService.stop(e9);
            aw("停止所有盐罐成功", "success");
          }
        } catch (eb) {
          {
            aw("停止盐罐失败: " + eb.message, "error");
          }
        }
        await c8(100);
        try {
          {
            const ee = {
              bottleType: -1
            };
            await d3.BottleHelperService.start(ee);
            aw("启动所有盐罐成功", "success");
          }
        } catch (ef) {
          {
            aw("启动盐罐失败: " + ef.message, "error");
          }
        }
        await c8(100);
        const {
          collectBottle: dj
        } = d5.dailyTasks;
        let dk = false;
        if (dj) {
          {
            aw("===== 开始执行" + dh.collectBottle.name + " =====", "info");
            try {
              {
                await c8(100);
                await cL.collectBottle();
                dk = true;
              }
            } catch (ei) {
              aw(dh.collectBottle.name + "失败: " + ei.message, "error");
            }
          }
        } else {
          {
            aw(dh.collectBottle.name + ": ⚙️ 配置未开启（跳过）", "info");
          }
        }
        const dl = [];
        const {
          loginReward: dm
        } = d5.dailyTasks;
        if (dm) {
          {
            dl.push({
              name: dh.loginReward.name,
              taskId: dh.loginReward.taskId,
              execute: async () => {
                {
                  try {
                    {
                      await cL.loginReward();
                      aw(dh.loginReward.name + "完成", "success");
                    }
                  } catch (en) {
                    {
                      aw(dh.loginReward.name + "失败: " + en.message, "error");
                    }
                  }
                }
              }
            });
          }
        }
        const {
          share: dn
        } = d5.dailyTasks;
        if (dn) {
          {
            dl.push({
              name: dh.share.name,
              taskId: dh.share.taskId,
              execute: async () => {
                try {
                  await cL.share();
                  aw(dh.share.name + "完成", "success");
                } catch (en) {
                  {
                    aw(dh.share.name + "失败: " + en.message, "error");
                  }
                }
              }
            });
          }
        }
        const {
          friend: dp
        } = d5.dailyTasks;
        if (dp) {
          dl.push({
            name: dh.friend.name,
            taskId: dh.friend.taskId,
            execute: async () => {
              {
                try {
                  {
                    await cL.friend();
                    aw(dh.friend.name + "完成", "success");
                  }
                } catch (eq) {
                  {
                    aw(dh.friend.name + "失败: " + eq.message, "error");
                  }
                }
              }
            }
          });
        }
        const {
          recruit: dq
        } = d5.dailyTasks;
        if (dq) {
          {
            dl.push({
              name: dh.recruit.name,
              taskId: dh.recruit.taskId,
              execute: async () => {
                {
                  try {
                    {
                      await cL.recruit();
                      aw(dh.recruit.name + "完成（免费+付费均成功）", "success");
                    }
                  } catch (er) {
                    {
                      aw(dh.recruit.name + "失败: " + er.message, "error");
                    }
                  }
                }
              }
            });
          }
        }
        const {
          collectVegetables: dr
        } = d5.dailyTasks;
        if (dr) {
          dl.push({
            name: dh.collectVegetables.name,
            taskId: dh.collectVegetables.taskId,
            execute: async () => {
              {
                try {
                  {
                    await cf();
                    await d3.SystemService.claimHangUpReward({});
                    aw("领挂机奖励成功", "success");
                    await c8(1000);
                    for (let eq = 0; eq < 4; eq++) {
                      {
                        const er = {
                          isSkipShareCard: true,
                          type: 2
                        };
                        await d3.SystemService.myShareCallback(er);
                        aw("第" + (eq + 1) + "次分享加钟成功", "success");
                        await c8(300);
                      }
                    }
                    aw(dh.collectVegetables.name + "成功", "success");
                  }
                } catch (et) {
                  aw(dh.collectVegetables.name + "失败: " + et.message, "error");
                }
              }
            }
          });
        }
        const {
          goldThree: ds
        } = d5.dailyTasks;
        if (ds) {
          dl.push({
            name: dh.goldThree.name,
            taskId: dh.goldThree.taskId,
            execute: async () => {
              await cL.goldThree();
            }
          });
        }
        const {
          openChest: dt
        } = d5.dailyTasks;
        if (dt) {
          {
            dl.push({
              name: dh.openChest.name,
              taskId: dh.openChest.taskId,
              execute: async () => {
                {
                  await cL.openChest();
                }
              }
            });
          }
        }
        const {
          market: du
        } = d5.dailyTasks;
        if (du && d5.blackmarket.daily.enabled) {
          {
            dl.push({
              name: dh.market.name,
              taskId: dh.market.taskId,
              execute: async () => {
                {
                  await cL.market();
                }
              }
            });
          }
        } else {
          if (du) {
            aw(dh.market.name + ": ⚙️ 黑市配置未开启（跳过）", "info");
          }
        }
        aw("===== 开始执行每日任务（共" + dl.length + "个） =====", "info");
        for (const [eq, er] of dl.entries()) {
          {
            aw("执行每日任务[" + (eq + 1) + "/" + dl.length + "]: " + er.name, "info");
            au("正在执行每日任务[" + (eq + 1) + "/" + dl.length + "]: " + er.name, "info");
            try {
              {
                await er.execute();
                aw(er.name + "完成", "success");
              }
            } catch (et) {
              {
                aw(er.name + "失败: " + et.message, "error");
              }
            }
            await c8(100);
          }
        }
        const dv = [];
        if (d5.dailyTasks.legion) {
          {
            dv.push({
              name: "俱乐部签到",
              execute: async () => {
                {
                  await cL.legion();
                }
              }
            });
          }
        } else {
          {
            aw("俱乐部签到: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.genieSweepTicket) {
          {
            dv.push({
              name: "领灯神扫荡券",
              execute: async () => {
                {
                  await cL.genieSweepTicket();
                }
              }
            });
          }
        } else {
          {
            aw("领灯神扫荡券: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.dailySaltKing) {
          dv.push({
            name: "每日咸王挑战",
            execute: async () => {
              {
                await cL.dailySaltKing();
              }
            }
          });
        } else {
          {
            aw("每日咸王挑战: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.saltDream) {
          {
            dv.push({
              name: "挑战咸王梦境",
              execute: async () => {
                {
                  await cL.saltDream();
                }
              }
            });
          }
        } else {
          {
            aw("挑战咸王梦境: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.boss) {
          dv.push({
            name: "俱乐部BOSS",
            execute: async () => {
              {
                await cL.boss(d5);
              }
            }
          });
        } else {
          {
            aw("俱乐部BOSS: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.fishThree) {
          {
            dv.push({
              name: "普通钓鱼",
              execute: async () => {
                {
                  await cL.fishThree();
                }
              }
            });
          }
        } else {
          {
            aw("普通钓鱼: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.sweepGenie) {
          {
            dv.push({
              name: "灯神扫荡",
              execute: async () => {
                {
                  await cL.sweepGenie();
                }
              }
            });
          }
        } else {
          {
            aw("灯神扫荡: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.buySkinCoin) {
          dv.push({
            name: "购买皮肤币",
            execute: async () => {
              await cL.buySkinCoin(d5);
            }
          });
        } else {
          {
            aw("购买皮肤币: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.treasureFreeReward) {
          {
            dv.push({
              name: "珍宝阁福利",
              execute: async () => {
                try {
                  {
                    await c8(100);
                    await cL.treasureFreeReward(d5);
                  }
                } catch (eK) {
                  {
                    if (eK.message.includes("已领取")) {
                      aw("珍宝阁福利已领取", "info");
                    } else {
                      ax("领取珍宝阁福利失败", eK);
                    }
                    await c8(d5.taskSettings.taskInterval / 2);
                  }
                }
              }
            });
          }
        } else {
          {
            aw("珍宝阁福利: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.weeklyWelfare) {
          {
            dv.push({
              name: "周活动福利",
              execute: async () => {
                {
                  await c8(100);
                  await cL.weeklyWelfare();
                }
              }
            });
          }
        } else {
          {
            aw("周活动福利: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.warGuess) {
          {
            dv.push({
              name: "月赛助威",
              execute: async () => {
                {
                  await c8(100);
                  await cL.warGuess();
                }
              }
            });
          }
        } else {
          {
            aw("月赛助威: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.legionEventReward) {
          {
            dv.push({
              name: "俱乐部大事件",
              execute: async () => {
                {
                  await c8(100);
                  await cL.legionEventReward();
                }
              }
            });
          }
        } else {
          {
            aw("俱乐部大事件: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        if (d5.dailyTasks.mail) {
          {
            dv.push({
              name: "领取邮件奖励",
              execute: async () => {
                {
                  await cL.mail();
                }
              }
            });
          }
        } else {
          {
            aw("领取邮件奖励: ⚙️ 配置未开启（跳过）", "info");
          }
        }
        aw("===== 开始执行其他扩展任务（共" + dv.length + "个） =====", "info");
        for (const [eT, eU] of dv.entries()) {
          {
            aw("执行其他任务[" + (eT + 1) + "/" + dv.length + "]: " + eU.name, "info");
            au("正在执行其他任务[" + (eT + 1) + "/" + dv.length + "]: " + eU.name, "info");
            try {
              await eU.execute();
              aw(eU.name + "完成", "success");
            } catch (eV) {
              aw(eU.name + "失败: " + eV.message, "error");
            }
            await c8(100);
          }
        }
        aw("===== 所有任务执行完毕，开始领取全部任务奖励 =====", "info");
        await c8(100);
        await cm();
        aw("所有每日任务均已完成", "info");
        aw("===== 全部流程执行完毕 =====", "success");
        if (document.title && !document.title.endsWith("     每日任务完成")) {
          document.title += "     每日任务完成";
        }
      }
    } catch (eX) {
      {
        aw("总流程错误: " + eX.message, "error");
      }
    }
  }
  async function cy() {
    {
      try {
        {
          const d2 = window.__require("data-index");
          aw("开始自动答题", "info");
          const d3 = await d2.StudyService.startGame({});
          const d4 = d3.getData();
          const d5 = d4.questionList;
          aw("题库总量: " + Object.keys(bZ).length + " 题", "info");
          for (let d6 = 0; d6 < d5.length; d6++) {
            {
              const d8 = d5[d6];
              aw("收到问题: \"" + d8.question + "\"", "info");
              const d9 = at(d8.question);
              let da = 2;
              const db = Object.entries(bZ);
              for (const [dd, de] of db) {
                {
                  const df = at(dd);
                  if (df === d9) {
                    {
                      da = de;
                      break;
                    }
                  }
                }
              }
              if (da === 2) {
                {
                  aw("未找到匹配答案，使用默认答案" + da, "warning");
                }
              } else {
                {
                  aw("答案: " + da, "success");
                }
              }
              const dc = {
                id: d4.role.study.id,
                option: [da],
                questionId: [d8.id]
              };
              await d2.StudyService.answer(dc);
              await c8(1000);
            }
          }
          for (let dk = 1; dk <= 10; dk++) {
            const dl = {
              rewardId: dk
            };
            await d2.StudyService.claimReward(dl);
            aw("领取答题奖励" + dk + "完成", "success");
            await c8(1000);
          }
          aw("自动答题完成", "success");
        }
      } catch (dn) {
        aw("自动答题出错: " + dn.message, "error");
      }
    }
  }
  async function cz() {
    aw("获取所有物品折扣...", "info");
    au("正在获取折扣", "info");
    try {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            aw("无可用WebSocket", "error");
            au("无可用WebSocket", "error");
            return null;
          }
        }
        const d3 = {
          storeId: 1
        };
        const d4 = {
          storeId: 1
        };
        const d5 = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode(d3),
          cmd: "store_goodslist",
          seq: Date.now(),
          time: Date.now()
        } : {
          ack: 0,
          cmd: "store_goodslist",
          params: d4,
          seq: Date.now(),
          time: Date.now()
        };
        const d6 = await window.ws.sendAsync(d5);
        if (d6 && d6._rawData && d6._rawData.goodsList) {
          {
            aw("物品折扣信息：", "info");
            Object.entries(d6._rawData.goodsList).forEach(([d9, da]) => {
              {
                const dc = bJ.blackmarket.daily.items[d9] || {
                  name: "未知(" + d9 + ")",
                  discount: 1
                };
                const dd = ca(da.discount);
                const de = ca(dc.discount);
                const df = cb(da.discount, dc.discount);
                aw(dc.name + " - 当前:" + dd + " 期望:" + de + " " + (df ? "✅" : "❌"), "discount");
              }
            });
            au("折扣获取完成", "success");
            return d6._rawData.goodsList;
          }
        } else {
          {
            aw("获取折扣失败", "error");
            au("获取折扣失败", "error");
            return null;
          }
        }
      }
    } catch (da) {
      {
        aw("获取折扣出错: " + da.message, "error");
        return null;
      }
    }
  }
  async function cA() {
    {
      try {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            aw("无可用WebSocket", "error");
            return null;
          }
        }
        const d2 = {
          storeId: 1
        };
        const d3 = {
          storeId: 1
        };
        const d4 = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode(d2),
          cmd: "store_goodslist",
          seq: Date.now(),
          time: Date.now()
        } : {
          ack: 0,
          cmd: "store_goodslist",
          params: d3,
          seq: Date.now(),
          time: Date.now()
        };
        const d5 = await window.ws.sendAsync(d4);
        if (d5 && d5._rawData && d5._rawData.goodsList) {
          {
            aw("获取商品列表成功", "success");
            return d5._rawData.goodsList;
          }
        } else {
          {
            aw("获取商品列表失败", "error");
            return null;
          }
        }
      } catch (d9) {
        {
          aw("获取列表出错: " + d9.message, "error");
          return null;
        }
      }
    }
  }
  async function cB() {
    {
      try {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          {
            aw("无可用WebSocket", "error");
            return null;
          }
        }
        const d3 = {
          storeId: 1
        };
        const d4 = {
          storeId: 1
        };
        const d5 = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode(d3),
          cmd: "store_refresh",
          seq: Date.now(),
          time: Date.now()
        } : {
          ack: 0,
          cmd: "store_refresh",
          params: d4,
          seq: Date.now(),
          time: Date.now()
        };
        const d6 = await window.ws.sendAsync(d5);
        if (d6 && d6._rawData && d6._rawData.goodsList) {
          {
            aw("刷新黑市成功", "success");
            return d6._rawData.goodsList;
          }
        } else {
          {
            aw("刷新黑市失败", "error");
            return null;
          }
        }
      } catch (da) {
        {
          aw("刷新出错: " + da.message, "error");
          return null;
        }
      }
    }
  }
  async function cC(d1) {
    try {
      {
        if (!window.ws || typeof window.ws.sendAsync !== "function") {
          aw("无可用WebSocket", "error");
          return false;
        }
        const d4 = bJ.blackmarket.daily.items[d1] || {
          name: "未知(" + d1 + ")"
        };
        aw("尝试购买 " + d4.name, "info");
        await c8(100);
        const d5 = {
          goodsId: d1
        };
        const d6 = {
          goodsId: d1
        };
        const d7 = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode(d5),
          cmd: "store_buy",
          seq: Date.now(),
          time: Date.now()
        } : {
          ack: 0,
          cmd: "store_buy",
          params: d6,
          seq: Date.now(),
          time: Date.now()
        };
        const d8 = await window.ws.sendAsync(d7);
        if (d8?.["code"] === 0 || d8?.["ack"] === 0) {
          aw("购买 " + d4.name + " 成功", "success");
          au("购买 " + d4.name + " 成功", "success");
          return true;
        } else {
          {
            aw("购买 " + d4.name + " 失败", "error");
            return false;
          }
        }
      }
    } catch (da) {
      {
        aw("购买出错: " + da.message, "error");
        return false;
      }
    }
  }
  async function cD(d1) {
    {
      try {
        {
          if (!window.ws || typeof window.ws.sendAsync !== "function") {
            {
              aw("无可用WebSocket", "error");
              return false;
            }
          }
          const {
            id: d5,
            activityId: d6,
            name: d7
          } = d1;
          aw("尝试购买 " + d7 + "（ID:" + d5 + ", activityId:" + d6 + "）", "info");
          await c8(100);
          const d8 = {
            activityId: d6,
            buyNum: 1,
            goodsIndex: d5
          };
          const d9 = {
            activityId: d6,
            buyNum: 1,
            goodsIndex: d5
          };
          const da = window.g_utils?.["bon"]?.["encode"] ? {
            ack: 0,
            body: window.g_utils.bon.encode(d8),
            cmd: "activity_buystoregoods",
            seq: Date.now(),
            time: Date.now()
          } : {
            ack: 0,
            cmd: "activity_buystoregoods",
            params: d9,
            seq: Date.now(),
            time: Date.now()
          };
          const db = await window.ws.sendAsync(da);
          if (db?.["code"] === 0 || db?.["ack"] === 0) {
            {
              aw("购买 " + d7 + " 成功", "success");
              au("购买 " + d7 + " 成功", "success");
              return true;
            }
          } else {
            {
              const df = db?.["code"] || db?.["ack"];
              const dg = db?.["error"] || db?.["message"] || "";
              const dh = dg ? " " + dg : "";
              aw("购买 " + d7 + " 失败（错误码：" + df + dh + "）", "warning");
              return false;
            }
          }
        }
      } catch (di) {
        {
          aw("购买礼包出错: " + di.message, "error");
          return false;
        }
      }
    }
  }
  async function cE(d1) {
    {
      const d4 = Object.values(bJ.blackmarket.daily.items).filter(d6 => d6.enabled);
      if (d4.length === 0) {
        {
          aw("未启用任何购买物品", "warning");
          return;
        }
      }
      let d5 = 0;
      for (const d7 of d4) {
        {
          const d9 = d1[d7.id];
          if (d9) {
            {
              const db = cb(d9.discount, d7.discount);
              if (db && d9.buy_quantity === 0) {
                const dc = await cC(d7.id);
                if (dc) {
                  {
                    d5++;
                    await c8(bJ.blackmarket.daily.purchaseDelay);
                  }
                }
              }
            }
          }
          await c8(bJ.blackmarket.daily.filterDelay);
        }
      }
      if (d5 > 0) {
        {
          aw("成功购买 " + d5 + " 件商品", "summary");
        }
      } else {
        {
          aw("无符合条件商品", "info");
        }
      }
    }
  }
  async function cF() {
    {
      const d3 = Object.values(bJ.blackmarket.weekly.packages).filter(d5 => d5.enabled).sort((d5, d6) => {
        {
          if (d5.activityId === 5) {
            return -1;
          }
          if (d6.activityId === 5) {
            return 1;
          }
          return d5.id - d6.id;
        }
      });
      if (d3.length === 0) {
        {
          aw("未启用任何购买礼包", "warning");
          return;
        }
      }
      let d4 = 0;
      for (const d6 of d3) {
        {
          const d8 = await cD(d6);
          if (d8) {
            {
              d4++;
              await c8(bJ.blackmarket.daily.purchaseDelay);
            }
          }
        }
      }
      if (d4 > 0) {
        {
          aw("成功购买 " + d4 + " 个礼包", "summary");
        }
      } else {
        {
          aw("无符合条件礼包", "info");
        }
      }
    }
  }
  async function cG() {
    {
      aw("开始测试购买每日黑市商品", "info");
      au("开始测试购买每日商品", "info");
      try {
        {
          const d3 = await cA();
          if (!d3) {
            throw new Error("获取商品列表失败");
          }
          await cE(d3);
          aw("测试购买每日黑市完成", "success");
          au("测试购买每日商品完成", "success");
        }
      } catch (d4) {
        {
          aw("测试购买每日黑市失败: " + d4.message, "error");
          au("测试购买每日商品失败", "error");
        }
      }
    }
  }
  async function cH() {
    aw("开始测试购买每周黑市礼包", "info");
    au("开始测试购买每周礼包", "info");
    try {
      {
        await cF();
        aw("测试购买每周黑市完成", "success");
        au("测试购买每周礼包完成", "success");
      }
    } catch (d3) {
      {
        aw("测试购买每周黑市失败: " + d3.message, "error");
        au("测试购买每周礼包失败", "error");
      }
    }
  }
  async function cI() {
    {
      aw("开始黑市采购任务", "info");
      au("开始黑市采购", "info");
      try {
        {
          let d4 = await cA();
          if (!d4) {
            throw new Error("获取商品列表失败");
          }
          await cE(d4);
          for (let d5 = 0; d5 < bJ.blackmarket.daily.refreshTimes; d5++) {
            {
              const d7 = "刷新(" + (d5 + 1) + "/" + bJ.blackmarket.daily.refreshTimes + ")";
              aw(d7 + " - 开始刷新", "info");
              au(d7, "info");
              const d8 = await cB();
              if (!d8) {
                {
                  aw(d7 + " - 刷新失败", "error");
                  if (bJ.blackmarket.daily.stopOnFailure) {
                    {
                      aw("因刷新失败，停止后续操作", "warning");
                      break;
                    }
                  }
                  continue;
                }
              }
              await cE(d8);
            }
          }
          if (bJ.blackmarket.weekly.enabled) {
            {
              await cF();
            }
          }
          aw("黑市采购任务完成", "summary");
          au("黑市采购完成", "success");
        }
      } catch (dc) {
        {
          aw("商品采购中断: " + dc.message, "error");
          au("商品采购失败", "error");
        }
      }
    }
  }
  function cJ() {
    {
      const d2 = document.createElement("style");
      d2.textContent = "\n        #shark-panel {\n            position: fixed;\n            top: 10px;\n            right: 10px;\n            width: " + (cc() ? "90vw" : bJ.ui.panelWidth + "px") + ";\n            max-width: 400px;\n            background: rgba(17, 17, 17, 0.95);\n            border: 2px solid " + bJ.ui.colors.primary + ";\n            border-radius: 8px;\n            z-index: " + bJ.ui.zIndex + ";\n            color: " + bJ.ui.colors.text + ";\n            font-family: \"Microsoft YaHei\", Arial, sans-serif;\n            overflow: hidden;\n            box-shadow: 0 4px 20px rgba(0,0,0,0.6);\n            transition: all 0.3s ease;\n        }\n        #shark-panel.collapsed {\n            width: 90px; /* 调整宽度适配短标题 */\n            height: 30px;\n            overflow: hidden; /* 确保文字不溢出 */\n        }\n\n\n\n\n    #shark-header {\n            background: " + bJ.ui.colors.dark + ";\n            padding: 8px 15px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            height: 30px;\n            border-bottom: 1px solid " + bJ.ui.colors.lightDark + ";\n            z-index: " + (bJ.ui.zIndex + 1) + ";\n            position: relative;\n            user-select: none;\n        }\n        #shark-header.collapsed {\n            background: linear-gradient(45deg, " + bJ.ui.colors.primary + ", #60a5fa) !important; /* 强制蓝色背景 */\n            padding: 0 !important; /* 强制清除内边距 */\n            width: 100% !important;\n        }\n        #shark-title {\n            font-size: 12px;\n\t\t\twhite-space: nowrap; /* 禁止文字换行 */\n\t\t\ttext-align: center; /* 文字居中 */\n            font-weight: bold;\n        }\n        #shark-title.collapsed {\n            font-size: 12px !important; /* 强制小字体 */\n            white-space: nowrap; /* 禁止文字换行 */\n            text-align: center; /* 文字居中 */\n            width: 100%; /* 占满容器 */\n        }\n        #shark-tabs {\n            display: flex;\n            border-bottom: 1px solid #333;\n            background: " + bJ.ui.colors.dark + ";\n            z-index: " + (bJ.ui.zIndex + 1) + ";\n            position: relative;\n        }\n        .shark-tab {\n            flex: 1;\n            padding: 8px 10px;\n            font-size: 12px;\n            cursor: pointer;\n            text-align: center;\n            transition: background 0.2s;\n            user-select: none;\n        }\n        .shark-tab.active {\n            background: " + bJ.ui.colors.primary + ";\n            color: #111;\n            font-weight: bold;\n        }\n        .shark-tab:hover:not(.active) {\n            background: " + bJ.ui.colors.lightDark + ";\n        }\n#shark-content {\n    padding: 12px;\n    height: 100%; /* 改为100%，由父容器控制高度 */\n    max-height: calc(100vh - 20vh); /* 关键：最大高度不超过屏幕高度（减去底部留空） */\n    overflow-y: auto !important; /* 强制启用垂直滚动，!important确保优先级 */\n    box-sizing: border-box;\n    -webkit-overflow-scrolling: touch; /* 优化移动端滚动体验 */\n}\n        .tab-content {\n            display: none;\n            height: 100%;\n            overflow-y: auto;\n        }\n        .tab-content.active {\n            display: block;\n        }\n        .task-card {\n            background: " + bJ.ui.colors.dark + ";\n            border-radius: 6px;\n            padding: 10px;\n            margin-bottom: 10px;\n            border-left: 3px solid " + bJ.ui.colors.primary + ";\n        }\n        .task-title {\n            font-size: 13px;\n            font-weight: bold;\n            margin-bottom: 6px;\n            display: flex;\n            justify-content: space-between;\n        }\n        .task-status {\n            font-size: 11px;\n            color: #999;\n        }\n        .task-status.running {\n            color: " + bJ.ui.colors.success + ";\n        }\n        .task-status.paused {\n            color: " + bJ.ui.colors.warning + ";\n        }\n        .task-desc {\n            font-size: 11px;\n            color: " + bJ.ui.colors.textLight + ";\n            margin-bottom: 8px;\n            line-height: 1.4;\n        }\n        .task-btn-group {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 6px;\n            margin-bottom: 5px;\n        }\n        .shark-btn {\n            padding: 6px 12px;\n            border: none;\n            border-radius: 4px;\n            font-size: 12px;\n            cursor: pointer;\n            transition: all 0.2s;\n        }\n        .start-btn {\n            background: " + bJ.ui.colors.success + ";\n            color: white;\n        }\n        .stop-btn {\n            background: " + bJ.ui.colors.error + ";\n            color: white;\n        }\n        .pause-btn {\n            background: " + bJ.ui.colors.warning + ";\n            color: #111;\n        }\n        .runonce-btn {\n            background: " + bJ.ui.colors.primary + ";\n            color: white;\n        }\n        .expand-btn {\n            background: #8b5cf6;\n            color: white;\n            width: 100%;\n        }\n        #shark-panel.collapsed #shark-tabs,\n        #shark-panel.collapsed #shark-content {\n            display: none;\n        }\n        .manual-card {\n            background: " + bJ.ui.colors.dark + ";\n            border-radius: 6px;\n            padding: 10px;\n            margin-bottom: 10px;\n            border: 1px solid " + bJ.ui.colors.lightDark + ";\n        }\n        .manual-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 8px;\n        }\n        .manual-title {\n            font-size: 13px;\n            font-weight: bold;\n        }\n        .manual-controls {\n            display: none;\n            flex-wrap: wrap;\n            gap: 8px;\n            margin: 8px 0;\n        }\n        .manual-controls.show {\n            display: flex;\n        }\n        .control-row {\n            display: flex;\n            width: 100%;\n            justify-content: space-between;\n            margin-bottom: 6px;\n        }\n        .control-group {\n            display: flex;\n            flex-direction: column;\n            width: 48%;\n        }\n        .control-label {\n            font-size: 11px;\n            color: " + bJ.ui.colors.textLight + ";\n            margin-bottom: 3px;\n        }\n        .control-input, .control-select {\n            width: 100%;\n            padding: 4px 6px;\n            border: 1px solid #475569;\n            border-radius: 4px;\n            background: " + bJ.ui.colors.lightDark + ";\n            color: white;\n            font-size: 11px;\n            box-sizing: border-box;\n        }\n        .expand-panel {\n            padding: 8px;\n            background: " + bJ.ui.colors.dark + ";\n            border-radius: 6px;\n            margin-top: 6px;\n            display: none;\n            border: 1px solid " + bJ.ui.colors.lightDark + ";\n        }\n        .expand-panel.show {\n            display: block;\n        }\n#arenaLogContainer {\n    height: 800px; /* 固定高度，确保有足够空间显示滚动条 */\n    max-height: 80vh; /* 最大高度不超过屏幕一半，适配不同设备 */\n    background: #111;\n    border-radius: 6px;\n    padding: 8px;\n    overflow-y: auto; /* 强制启用垂直滚动 */\n    font-family: 'Consolas', monospace;\n    font-size: 11px;\n    box-sizing: border-box;\n    scroll-behavior: smooth; /* 平滑滚动效果 */\n}\n        .task-options-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 8px;\n            margin-top: 6px;\n            padding-right: 5px;\n            min-height: 200px;\n        }\n.task-option-item {\n    display: flex;\n    align-items: center; /* 垂直居中对齐 */\n    gap: 6px; /* 缩小内部元素间距（原代码是8px） */\n    min-height: 24px;\n    padding: 4px 0;\n    /* 新增：强制任务项占满列宽，避免内容过短导致错位 */\n    width: 100%;\n    justify-content: space-between; /* 文字靠左，按钮靠右 */\n}\n.task-name {\n    font-size: 11px;\n    flex: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; /* 文字过长时显示省略号 */\n    max-width: 120px; /* 限制最大宽度（根据手机屏幕调整） */\n}\n        .task-option-execute {\n            padding: 1px 8px;\n            font-size: 11px;\n            height: 22px;\n            box-sizing: border-box;\n            margin-left: auto;\n            flex-shrink: 0;\n        }\n        .settings-section {\n            margin-bottom: 15px;\n            padding-bottom: 10px;\n            border-bottom: 1px solid " + bJ.ui.colors.lightDark + ";\n        }\n        .settings-title {\n            font-size: 14px;\n            font-weight: bold;\n            margin-bottom: 8px;\n            color: " + bJ.ui.colors.primary + ";\n        }\n        .settings-desc {\n            font-size: 12px;\n            color: " + bJ.ui.colors.textLight + ";\n            margin-bottom: 10px;\n            padding: 5px;\n            background: rgba(255,255,255,0.05);\n            border-radius: 4px;\n        }\n        .config-row {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 8px;\n            padding: 5px 0;\n        }\n        .config-label {\n            font-size: 12px;\n            color: " + bJ.ui.colors.text + ";\n        }\n        .config-input {\n            width: 40%;\n            padding: 4px 6px;\n            border: 1px solid #475569;\n            border-radius: 4px;\n            background: " + bJ.ui.colors.lightDark + ";\n            color: white;\n            font-size: 12px;\n        }\n        .collapsible-panel {\n            margin-bottom: 10px;\n            transition: all 0.3s ease;\n        }\n        .interval-control {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            margin: 8px 0;\n        }\n        .interval-label {\n            font-size: 12px;\n            color: " + bJ.ui.colors.textLight + ";\n            width: 80px;\n        }\n        .interval-input {\n            flex: 1;\n            padding: 4px;\n            border: 1px solid #475569;\n            border-radius: 4px;\n            background: " + bJ.ui.colors.lightDark + ";\n            color: white;\n            font-size: 12px;\n        }\n        .goods-config-container {\n            display: grid;\n            grid-template-columns: 1fr;\n            gap: 8px;\n            margin: 10px 0;\n            max-height: 300px;\n            overflow-y: auto;\n            padding-right: 5px;\n        }\n        .goods-item {\n            padding: 8px;\n            background: rgba(255,255,255,0.05);\n            border-radius: 4px;\n            display: grid;\n            grid-template-columns: 1fr auto auto;\n            align-items: center;\n            gap: 8px;\n        }\n        .goods-name {\n            font-size: 12px;\n            color: " + bJ.ui.colors.text + ";\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .goods-discount {\n            width: 60px;\n            padding: 4px;\n            border: 1px solid #475569;\n            border-radius: 3px;\n            background: " + bJ.ui.colors.lightDark + ";\n            color: white;\n            font-size: 12px;\n        }\n        .settings-actions {\n            display: flex;\n            gap: 8px;\n            margin-top: 15px;\n            flex-wrap: wrap;\n        }\n        .test-command-container {\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n            height: 100%;\n        }\n        .command-input {\n            flex: 1;\n            width: 100%;\n            padding: 8px;\n            border-radius: 4px;\n            background: " + bJ.ui.colors.lightDark + ";\n            color: white;\n            border: 1px solid #475569;\n            font-family: monospace;\n            font-size: 12px;\n            resize: vertical;\n            box-sizing: border-box;\n        }\n        .task-operations {\n            display: flex;\n            gap: 8px;\n            margin: 10px 0;\n        }\n        @media (max-width: 360px) {\n            .settings-actions {\n                flex-direction: column;\n            }\n            .settings-actions .shark-btn {\n                width: 100%;\n            }\n        }\n\n        /* 以下是新增的对齐相关样式（其他任务区域专用） */\n        .single-column-grid {\n            display: grid;\n            grid-template-columns: 1fr; /* 单列布局 */\n            gap: 8px; /* 任务项之间的间距 */\n            margin-top: 10px;\n            padding-right: 5px;\n        }\n        .task-option-item-aligned {\n            display: flex;\n            align-items: center; /* 垂直方向居中对齐 */\n            justify-content: flex-start; /* 整体靠左排列 */\n            gap: 10px; /* 内部元素间距 */\n            min-height: 32px; /* 统一行高 */\n            padding: 4px 0;\n            width: 100%; /* 占满宽度 */\n        }\n        .task-name-aligned {\n            font-size: 13px; /* 放大文字 */\n            text-align: left; /* 文字靠左 */\n            flex: 1; /* 占据中间剩余空间 */\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        .task-btn-aligned {\n            padding: 4px 10px;\n            font-size: 12px; /* 按钮文字放大 */\n            height: 24px;\n            box-sizing: border-box;\n            margin-left: auto; /* 强制靠右侧对齐 */\n            flex-shrink: 0; /* 不被压缩 */\n            background: #1976d2;\n            color: white;\n            border: 1px solid #1976d2;\n            border-radius: 3px;\n        }\n        .task-checkbox-aligned {\n            width: 18px; /* 复选框放大 */\n            height: 18px;\n            cursor: pointer;\n            accent-color: #3b82f6;\n            flex-shrink: 0; /* 不被压缩 */\n        }\n    ";
      document.head.appendChild(d2);
    }
  }
  function cK(d1, d2, d3) {
    const d5 = bJ.enhanced[d1];
    const d6 = document.createElement("div");
    d6.className = "task-card";
    const d7 = document.createElement("div");
    d7.className = "task-title";
    const d8 = document.createElement("div");
    d8.textContent = d2;
    const d9 = document.createElement("div");
    d9.id = "status-" + d1;
    d9.className = "task-status";
    d9.textContent = "未运行";
    d7.appendChild(d8);
    d7.appendChild(d9);
    d6.appendChild(d7);
    const da = document.createElement("div");
    da.className = "task-desc";
    da.textContent = d3;
    d6.appendChild(da);
    const db = document.createElement("div");
    db.className = "interval-control";
    const dc = document.createElement("div");
    dc.className = "interval-label";
    dc.textContent = "循环间隔(小时)";
    const dd = document.createElement("input");
    dd.type = "number";
    dd.min = "1";
    dd.value = d5.interval;
    dd.className = "interval-input";
    dd.addEventListener("change", () => {
      {
        d5.interval = parseInt(dd.value) || 1;
        aw(d2 + "循环间隔已设置为" + d5.interval + "小时");
      }
    });
    db.appendChild(dc);
    db.appendChild(dd);
    d6.appendChild(db);
    const de = document.createElement("div");
    de.className = "task-btn-group";
    const df = ay("启动", () => {
      const dk = d5.interval * 60 * 60 * 1000;
      aw("启动" + d2 + "（间隔" + d5.interval + "小时）");
      if (d1 === "daily") {
        {
          c3(d1, cx, dk);
        }
      } else {
        if (d1 === "answer") {
          {
            c3(d1, cy, dk);
          }
        } else {
          if (d1 === "salt") {
            {
              c3(d1, cu, dk);
            }
          } else {
            if (d1 === "tower") {
              {
                c3(d1, cv, dk);
              }
            } else {
              if (d1 === "blackmarket") {
                {
                  c3(d1, cI, dk);
                }
              }
            }
          }
        }
      }
      au("已启动" + d2, "success");
    }, true, "start-btn");
    const dg = ay("暂停", () => {
      c5(d1);
    }, false, "pause-btn");
    dg.id = "pause-" + d1;
    const dh = ay("停止", () => {
      {
        c4(d1);
        aw("已停止" + d2);
        au("已停止" + d2, "info");
      }
    }, false, "stop-btn");
    const di = ay("执行一次", () => {
      {
        aw("手动执行" + d2);
        if (d1 === "daily") {
          {
            cx();
          }
        } else {
          if (d1 === "answer") {
            {
              cy();
            }
          } else {
            if (d1 === "salt") {
              {
                cu();
              }
            } else {
              if (d1 === "tower") {
                {
                  cv();
                }
              } else {
                if (d1 === "blackmarket") {
                  {
                    cI();
                  }
                }
              }
            }
          }
        }
      }
    }, false, "runonce-btn");
    de.appendChild(df);
    de.appendChild(dg);
    de.appendChild(dh);
    de.appendChild(di);
    d6.appendChild(de);
    return d6;
  }
  const cL = {
    get dataIndex() {
      {
        return window.__require("data-index");
      }
    },
    async collectBottle() {
      {
        const d2 = {
          ack: 0,
          body: {},
          cmd: "bottlehelper_claim",
          seq: Date.now(),
          time: Date.now()
        };
        await window.ws.sendAsync(d2);
        aw("收罐子操作完成", "info");
      }
    },
    async goldThree() {
      {
        await cj("执行点金三次", async () => {
          for (let d3 = 0; d3 < 3; d3++) {
            {
              const d4 = {
                buyNum: 1
              };
              const d5 = {
                ack: 0,
                cmd: "system_buygold",
                params: d4,
                seq: Date.now(),
                time: Date.now()
              };
              await window.ws.sendAsync(d5);
              await c8(800);
            }
          }
        });
      }
    },
    async arena(d1) {
      {
        const d4 = d1.manual.arena.count;
        d1.manual.arena.count = 3;
        await cq();
        d1.manual.arena.count = d4;
      }
    },
    async warGuess() {
      {
        const d2 = new Date();
        const d3 = d2.getDay();
        const d4 = d2.getDate();
        const d5 = d2.getHours();
        const d6 = d2.getMinutes();
        const d7 = d3 === 0 && d4 >= 22 && d4 <= 28;
        const d8 = d5 === 0 && d6 >= 0 || d5 > 0 && d5 < 19 || d5 === 19 && d6 <= 55;
        if (!d7 || !d8) {
          {
            aw("月赛助威未在规定时间范围内（每月第四个周日00:00-19:55）", "info");
            return;
          }
        }
        aw("开始执行月赛助威", "info");
        const d9 = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode({}),
          cmd: "warguess_getrank",
          seq: Date.now(),
          time: Date.now()
        } : {
          ack: 0,
          cmd: "warguess_getrank",
          params: {},
          seq: Date.now(),
          time: Date.now()
        };
        aw("发送获取助威名单请求...", "debug");
        const da = await window.ws.sendAsync(d9);
        if (da?.["ack"] !== 0 && da?.["code"] !== 0) {
          {
            const di = da?.["code"] || da?.["ack"];
            const dj = da?.["error"] || da?.["message"] || "";
            throw new Error("获取助威名单失败（错误码：" + di + " " + dj + "）");
          }
        }
        let db = null;
        let dc = "";
        try {
          {
            if (da?.["_rawData"]) {
              const dm = typeof da._rawData === "object" ? da._rawData : JSON.parse(da._rawData);
              if (dm?.["list"] && Array.isArray(dm.list) && dm.list.length > 0) {
                {
                  db = dm.list[0].id || dm.list[0].legionId;
                  dc = dm.list[0].name || "";
                }
              } else {
                if (Array.isArray(dm) && dm.length > 0) {
                  {
                    db = dm[0].id || dm[0].legionId;
                    dc = dm[0].name || "";
                  }
                }
              }
            }
            if (!db && da?.["body"]) {
              {
                const dr = typeof da.body === "object" ? da.body : JSON.parse(da.body);
                if (Array.isArray(dr) && dr.length > 0) {
                  {
                    db = dr[0].id || dr[0].legionId;
                    dc = dr[0].name || "";
                  }
                }
              }
            }
          }
        } catch (dt) {
          {
            aw("解析助威名单数据时出错: " + dt.message, "error");
            throw new Error("无法解析助威名单数据");
          }
        }
        if (!db) {
          aw("===== 助威名单响应数据详情 =====", "debug");
          aw("响应_rawData: " + JSON.stringify(da?.["_rawData"]), "debug");
          throw new Error("未找到可用的军团ID");
        }
        aw("成功获取军团ID: " + db, "info");
        aw("俱乐部名称: " + dc, "info");
        const dd = {
          guessCoin: 20,
          legionId: db
        };
        const de = {
          guessCoin: 20,
          legionId: db
        };
        const df = window.g_utils?.["bon"]?.["encode"] ? {
          ack: 0,
          body: window.g_utils.bon.encode(dd),
          cmd: "warguess_startguess",
          seq: Date.now(),
          time: Date.now()
        } : {
          ack: 0,
          cmd: "warguess_startguess",
          params: de,
          seq: Date.now(),
          time: Date.now()
        };
        aw("发送助威请求...", "debug");
        const dg = await window.ws.sendAsync(df);
        if (dg?.["ack"] !== 0 && dg?.["code"] !== 0) {
          {
            const dv = dg?.["code"] || dg?.["ack"];
            const dw = dg?.["error"] || dg?.["message"] || "";
            throw new Error("助威失败（错误码：" + dv + " " + dw + "）");
          }
        }
        aw("月赛助威成功", "success");
      }
    },
    async loginReward() {
      {
        await co();
      }
    },
    async collectVegetables() {
      {
        await cf();
        await cj("执行领挂机奖励", async d4 => {
          {
            await d4.SystemService.claimHangUpReward({});
          }
        });
      }
    },
    async share() {
      {
        const d2 = {
          isSkipShareCard: false,
          type: 1
        };
        await this.dataIndex.SystemService.myShareCallback(d2);
      }
    },
    async friend() {
      {
        const d2 = {
          friendId: 0
        };
        await this.dataIndex.FriendService.batch(d2);
      }
    },
    async recruit() {
      const d2 = async d5 => {
        {
          const d7 = {
            byClub: false,
            recruitNumber: 1,
            recruitType: d5
          };
          const d8 = {
            byClub: false,
            recruitNumber: 1,
            recruitType: d5
          };
          const d9 = window.g_utils?.["bon"]?.["encode"] ? {
            ack: 0,
            body: window.g_utils.bon.encode(d7),
            cmd: "hero_recruit",
            seq: Date.now(),
            time: Date.now()
          } : {
            ack: 0,
            cmd: "hero_recruit",
            params: d8,
            seq: Date.now(),
            time: Date.now()
          };
          const da = await window.ws.sendAsync(d9);
          const db = da?.["ack"] === 0 || da?.["code"] === 0;
          return db;
        }
      };
      const d3 = await d2(3);
      if (!d3) {
        throw new Error("免费招募失败");
      }
      await c8(200);
      const d4 = await d2(1);
      if (!d4) {
        throw new Error("付费招募失败");
      }
    },
    async openChest() {
      const d1 = {
        itemId: 2001,
        number: 10
      };
      const d2 = {
        ack: 0,
        cmd: "item_openbox",
        params: d1,
        seq: Date.now(),
        time: Date.now()
      };
      await window.ws.sendAsync(d2);
    },
    async market() {
      await cI();
    },
    async mail() {
      await c8(1000);
      const d1 = {
        category: 0
      };
      await this.dataIndex.MailService.claimAllAttachment(d1);
    },
    async boss(d1) {
      await cj("攻打" + d1.taskSettings.legionBossCount + "次俱乐部BOSS", async () => {
        for (let d2 = 0; d2 < d1.taskSettings.legionBossCount; d2++) {
          const d3 = {
            ack: 0,
            cmd: "fight_startlegionboss",
            params: {},
            seq: Date.now(),
            time: Date.now()
          };
          await window.ws.sendAsync(d3);
          aw("攻打俱乐部BOSS第" + (d2 + 1) + "/" + d1.taskSettings.legionBossCount + "次成功");
          await c8(d1.taskSettings.taskInterval);
        }
      });
    },
    async legion() {
      const d1 = {
        ack: 0,
        body: {},
        cmd: "legion_signin",
        seq: Date.now(),
        time: Date.now()
      };
      await c8(800);
      const d2 = await window.ws.sendAsync(d1);
      const d3 = d2?.["ack"] === 0 || d2?.["code"] === 0;
      if (d3) {
        aw("俱乐部签到完成", "info");
      } else {
        const d4 = d2?.["code"] || d2?.["_raw"]?.["code"] || "未知错误码";
        const d5 = d2?.["error"] || d2?.["_raw"]?.["error"] || "";
        const d6 = d5 ? " " + d5 : "";
        throw new Error("签到失败（错误码：" + d4 + d6 + "）");
      }
    },
    async fishThree() {
      await ck(3);
    },
    async sweepGenie() {
      const d1 = [1, 2, 3, 4];
      for (const d2 of d1) {
        const d3 = {
          genieId: d2,
          sweepCnt: 1
        };
        const d4 = {
          ack: 0,
          cmd: "genie_sweep",
          params: d3,
          seq: Date.now(),
          time: Date.now()
        };
        await window.ws.sendAsync(d4);
      }
    },
    async buySkinCoin(d1) {
      for (let d2 = 0; d2 < d1.taskSettings.skinCoinBuyCount; d2++) {
        const d3 = {
          id: 1
        };
        const d4 = {
          ack: 0,
          cmd: "legion_storebuygoods",
          params: d3,
          seq: Date.now(),
          time: Date.now()
        };
        await window.ws.sendAsync(d4);
      }
    },
    async dailySaltKing() {
      await c8(100);
      await cw();
    },
    async saltDream() {
      aw("开始梦境挑战任务", "info");
      if (!this.isDungeonOpen()) {
        aw("当前不是梦境开放时间（周三/周四/周日/周一），停止执行", "warning");
        return false;
      }
      try {
        const d1 = await this.getDreamTeamInfo();
        if (!d1 || !d1.heroes || d1.heroes.length === 0) {
          throw new Error("获取队伍信息失败或队伍为空");
        }
        try {
          await this.selectDreamTeamFormation(d1);
        } catch (d5) {
          if (d5.message === "模块未开启") {
            return;
          }
          throw d5;
        }
        aw("梦境阵容选择成功", "success");
        const d2 = Math.min(5, d1.heroes.length);
        aw("开始挑战，将从第一个角色开始挑战，挑战成功则继续挑战同一个英雄直至阵亡（最多" + d2 + "个角色）", "info");
        let d3 = 0;
        let d4 = false;
        for (let d6 = 0; d6 < d2 && !d4; d6++) {
          const d7 = d1.heroes[d6];
          aw("开始挑战角色：" + d7.name, "info");
          let d8 = 0;
          let d9 = 0;
          let da = true;
          while (da && !d4 && d9 < 100) {
            d8++;
            try {
              await this.startDreamBattle(d7.id);
              d9++;
              d3++;
              aw(d7.name + " 第" + d8 + "次挑战成功，已成功" + d9 + "次，继续挑战", "success");
              await c8(200);
              if (d9 >= 100) {
                aw(d7.name + " 已成功挑战" + d9 + "次，达到上限，切换到下一个角色", "info");
                da = false;
              }
            } catch (dd) {
              aw(d7.name + " 第" + d8 + "次挑战失败：" + dd.message + "，切换到下一个角色", "warning");
              da = false;
              if (dd.message.includes("200160") || dd.message.includes("2600050") || dd.message.includes("400080")) {
                const de = dd.message.includes("200160") ? "200160" : dd.message.includes("2600050") ? "2600050" : "400080";
                const df = de === "2600050" ? "咸王梦境已经全部通关" : "武将不存在";
                aw("检测到错误码" + de + "：" + df + "，停止挑战", "info");
                d4 = true;
                break;
              }
            }
          }
          if (d9 > 0) {
            aw(d7.name + " 共挑战" + d8 + "次，成功" + d9 + "次，已阵亡", "info");
          }
        }
        if (d4) {
          aw("梦境挑战已提前结束，开始购买商品...", "info");
        }
        aw("梦境挑战完成，总成功挑战" + d3 + "次", "success");
        aw("挑战结束，开始购买商品...", "info");
        await this.dreamShopping();
      } catch (dg) {
        aw("梦境挑战任务失败：" + dg.message, "error");
        throw dg;
      }
    },
    isDungeonOpen() {
      const d1 = new Date();
      const d2 = d1.getDay();
      return [0, 1, 3, 4].includes(d2);
    },
    async getDreamTeamInfo() {
      try {
        const d1 = await window.ws.sendAsync({
          ack: 0,
          cmd: "role_getroleinfo",
          params: {},
          seq: Date.now(),
          time: Date.now()
        });
        const d2 = window.findRoleDataWithItems(d1);
        if (d1 && d1._rawData && d1._rawData.role && d1._rawData.role.battleTeam) {
          const d3 = d1._rawData.role.battleTeam;
          const d4 = [];
          for (let d6 = 0; d6 < 5; d6++) {
            const d7 = d6.toString();
            if (d3[d7]) {
              const d8 = d3[d7];
              let d9 = 0;
              if (typeof d8 === "object" && d8.heroId) {
                d9 = d8.heroId;
              } else {
                if (typeof d8 === "number") {
                  d9 = d8;
                } else {
                  d9 = d8;
                }
              }
              if (d9 !== 0 && d9 !== null && d9 !== undefined) {
                d4.push({
                  id: d9,
                  name: this.getHeroName(d9),
                  position: d6
                });
              }
            }
          }
          aw("解析后的英雄列表: " + JSON.stringify(d4), "debug");
          const d5 = {
            heroes: d4,
            battleTeam: d3
          };
          return d5;
        } else {
          throw new Error("无法获取队伍信息，数据结构异常");
        }
      } catch (da) {
        aw("获取梦境队伍信息失败: " + da.message, "error");
        throw da;
      }
    },
    async selectDreamTeamFormation(d1) {
      const d2 = {};
      for (let d9 = 0; d9 < 5; d9++) {
        const da = d9.toString();
        if (d1.battleTeam[da]) {
          const db = d1.battleTeam[da];
          let dc = 0;
          if (typeof db === "object" && db.heroId) {
            dc = db.heroId;
          } else {
            if (typeof db === "number") {
              dc = db;
            } else {
              dc = db;
            }
          }
          d2[da] = dc;
        } else {
          d2[da] = 0;
        }
      }
      const d3 = {
        battleTeam: d2
      };
      const d4 = {
        battleTeam: d2
      };
      const d5 = window.g_utils?.["bon"]?.["encode"] ? {
        ack: 0,
        body: window.g_utils.bon.encode(d3),
        cmd: "dungeon_selecthero",
        seq: Date.now(),
        time: Date.now()
      } : {
        ack: 0,
        cmd: "dungeon_selecthero",
        params: d4,
        seq: Date.now(),
        time: Date.now()
      };
      const d6 = await window.ws.sendAsync(d5);
      const d7 = d6?.["code"] || d6?.["_raw"]?.["code"] || "未知错误码";
      const d8 = d6?.["error"] || d6?.["_raw"]?.["error"] || "";
      if (d7 == 200160 && d8 === "模块未开启") {
        aw("梦境挑战 错误码：200160 模块未开启", "error");
        throw new Error("模块未开启");
      }
      if (d6 && (d6.code === 0 || d6.body?.["0"] === 8)) {
        return true;
      } else {
        if (d6 && d6.code === 2600040) {
          aw("阵容已选择，继续挑战", "info");
          return true;
        } else {
          const dd = d6?.["code"] || d6?.["_raw"]?.["code"] || "未知错误码";
          const de = d6?.["error"] || d6?.["_raw"]?.["error"] || "";
          const df = de ? " " + de : "";
          throw new Error("选择梦境阵容失败（错误码：" + dd + df + "）");
        }
      }
    },
    async startDreamBattle(d1) {
      try {
        const d2 = {
          heroId: d1
        };
        const d3 = await window.ws.sendAsync({
          ack: 0,
          cmd: "fight_startdungeon",
          params: d2,
          seq: Date.now(),
          time: Date.now()
        });
        if (d3 && (d3.code === 0 || d3.body?.["0"] === 8)) {
          return true;
        } else {
          const d4 = d3?.["code"] || d3?.["ack"];
          const d5 = d3?.["error"] || d3?.["message"] || "";
          const d6 = d5 ? " " + d5 : "";
          throw new Error("梦境战斗失败（错误码：" + d4 + d6 + "）");
        }
      } catch (d7) {
        aw("梦境战斗失败: " + d7.message, "error");
        throw d7;
      }
    },
    async dreamShopping() {
      try {
        const d2 = await window.ws.sendAsync({
          ack: 0,
          cmd: "role_getroleinfo",
          params: {},
          seq: Date.now(),
          time: Date.now()
        });
        if (!d2) {
          throw new Error("无法获取角色信息");
        }
        const d3 = window.findRoleDataWithItems(d2);
        if (!d3) {
          throw new Error("无法解析角色信息");
        }
        const d4 = d3.gold || 0;
        aw("当前金币数量: " + d4.toLocaleString(), "info");
        const d5 = {
          name: "初级商人",
          items: ["进阶石", "精铁", "木质宝箱", "青铜宝箱", "普通鱼竿", "挑战票", "咸神火把"]
        };
        const d6 = {
          name: "中级商人",
          items: ["梦魇晶石", "进阶石", "精铁", "黄金宝箱", "黄金鱼竿", "招募令", "橙将碎片", "紫将碎片"]
        };
        const d7 = {
          name: "高级商人",
          items: ["梦魇晶石", "铂金宝箱", "黄金鱼竿", "招募令", "红将碎片", "橙将碎片", "红将碎片", "普通鱼竿"]
        };
        const d9 = {
          "1": d5,
          "2": d6,
          "3": d7
        };
        const da = d2?.["_rawData"]?.["role"]?.["dungeon"]?.["merchant"] || {};
        const db = {};
        for (const dh in da) {
          if (d9[dh]) {
            db[d9[dh].name] = da[dh].map(di => {
              const dj = d9[dh].items[di] || "未知商品(" + di + ")";
              return dj;
            });
          }
        }
        const dd = {
          "1": [5, 6],
          "2": [6, 7],
          "3": [5, 6, 7]
        };
        aw("商人列表:", "info");
        for (const di in db) {
          let dj = "";
          for (const dl in d9) {
            if (d9[dl].name === di) {
              dj = dl;
              break;
            }
          }
          aw(di + "：", "info");
          const dk = dd[dj] || [];
          db[di].forEach((dm, dn) => {
            const dp = d9[dj].items.indexOf(dm);
            const dq = dp !== -1 && dk.includes(dp);
            const dr = dq ? "（金币）" : "（金砖）";
            aw("•••••• " + dm + dr, "info");
          });
        }
        let de = 0;
        let df = 0;
        function dg(dm, dn) {
          const dp = d9[dm];
          if (dp && dp.items[dn] !== undefined) {
            return dp.items[dn];
          }
          return "未知商品(" + dn + ")";
        }
        if (d4 > 3000000000) {
          aw("金币大于30亿，开始购买所有金币商品和高级商人的黄金鱼竿...", "info");
          for (const dp in da) {
            const dq = da[dp] || [];
            const ds = {
              "1": [5, 6],
              "2": [6, 7],
              "3": [5, 6, 7]
            };
            const dt = ds[dp] || [];
            for (const [du, dv] of dq.entries()) {
              if (dt.includes(dv)) {
                df++;
                try {
                  const dw = {
                    id: dp,
                    index: dv,
                    pos: du
                  };
                  await window.ws.sendAsync({
                    ack: 0,
                    cmd: "dungeon_buymerchant",
                    params: dw,
                    seq: Date.now(),
                    time: Date.now()
                  });
                  de++;
                  const dx = dg(dp, dv);
                  aw("成功购买: " + d9[dp].name + " - " + dx + " (1个)", "success");
                  await c8(1000);
                } catch (dy) {
                  aw("购买商人" + dp + "的商品" + dv + "失败: " + dy.message, "warning");
                }
              }
            }
          }
          const dm = da[3] || [];
          const dn = d9[3].items.indexOf("黄金鱼竿");
          if (dm.length > 0 && dn >= 0) {
            const dz = dm.includes(dn);
            if (dz) {
              df++;
              try {
                const dA = dm.findIndex(dC => dC === dn);
                const dB = {
                  id: 3,
                  index: dn,
                  pos: dA
                };
                await window.ws.sendAsync({
                  ack: 0,
                  cmd: "dungeon_buymerchant",
                  params: dB,
                  seq: Date.now(),
                  time: Date.now()
                });
                de++;
                aw("成功购买: " + d9[3].name + " - " + dg(3, dn) + " (1个)", "success");
                await c8(1000);
              } catch (dC) {
                aw("购买高级商人的黄金鱼竿失败: " + dC.message, "warning");
              }
            } else {
              aw("高级商人当前没有黄金鱼竿商品", "info");
            }
          } else {
            if (dn === -1) {
              aw("黄金鱼竿不在高级商人配置中", "info");
            }
            if (dm.length === 0) {
              aw("未找到高级商人或高级商人没有商品", "info");
            }
          }
        } else {
          aw("金币小于30亿，仅购买高级商人的黄金鱼竿...", "info");
          const dD = da[3] || [];
          const dE = d9[3].items.indexOf("黄金鱼竿");
          if (dD.length > 0 && dE >= 0) {
            const dF = dD.includes(dE);
            if (dF) {
              df++;
              try {
                const dG = dD.findIndex(dI => dI === dE);
                const dH = {
                  id: 3,
                  index: dE,
                  pos: dG
                };
                await window.ws.sendAsync({
                  ack: 0,
                  cmd: "dungeon_buymerchant",
                  params: dH,
                  seq: Date.now(),
                  time: Date.now()
                });
                de++;
                aw("成功购买: " + d9[3].name + " - " + dg(3, dE) + " (1个)", "success");
                await c8(1000);
              } catch (dI) {
                aw("购买高级商人的黄金鱼竿失败: " + dI.message, "warning");
              }
            } else {
              aw("高级商人当前没有黄金鱼竿商品", "info");
            }
          } else {
            let dJ = "";
            if (dE === -1) {
              dJ += "黄金鱼竿不在高级商人配置中";
            }
            if (dD.length === 0) {
              dJ = dJ ? dJ + "，且" : "";
              dJ += "未找到高级商人或高级商人没有商品";
            }
            aw(dJ, "warning");
          }
        }
        aw("梦境购物完成，成功购买" + de + "/" + df + "件商品", "success");
      } catch (dK) {
        aw("梦境购物失败: " + dK.message, "error");
        throw dK;
      }
    },
    getHeroName(d1) {
      const d3 = {
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
        "120": "张角"
      };
      return d3[d1] || "英雄" + d1;
    },
    async genieSweepTicket() {
      await c8(100);
      const d1 = await cg();
      if (!d1) {
        throw new Error("领灯神扫荡券过程中出现错误（可能部分或全部失败）");
      }
    },
    async treasureFreeReward(d1) {
      aw("开始领取珍宝阁福利", "info");
      const d2 = {
        ack: 0,
        cmd: "collection_claimfreereward",
        params: {},
        seq: Date.now(),
        time: Date.now()
      };
      const d3 = await window.ws.sendAsync(d2);
      if (d3?.["code"] === 0 || d3?.["ack"] === 0) {
        aw("珍宝阁福利领取成功", "success");
      } else {
        const d4 = d3?.["code"];
        const d5 = d3?.["error"];
        const d6 = d5 ? " " + d5 : "";
        aw("珍宝阁福利领取失败（错误码：" + d4 + d6 + "）", "warning");
      }
      await c8(d1.taskSettings.taskInterval);
    },
    async weeklyWelfare() {
      await ch();
    },
    async legionEventReward() {
      await ci();
    }
  };
  function cM() {
    const d2 = document.createElement("div");
    d2.className = "tab-content";
    const d3 = aA("每日任务", d8 => {
      const da = cK("daily", "每日任务自动化", "包含日常签到、竞技场挑战、点金等综合任务");
      d8.appendChild(da);
      const db = document.createElement("div");
      db.className = "task-operations";
      const dc = ay("全选", () => {
        const dm = d8.querySelectorAll("input[type=\"checkbox\"]");
        dm.forEach(dn => {
          dn.checked = true;
        });
        aM();
      }, false, "start-btn");
      const dd = ay("取消全部选中", () => {
        const dm = d8.querySelectorAll("input[type=\"checkbox\"]");
        dm.forEach(dn => {
          dn.checked = false;
        });
        aM();
      }, false, "stop-btn");
      db.appendChild(dc);
      db.appendChild(dd);
      d8.appendChild(db);
      const de = document.createElement("div");
      de.style.cssText = "font-weight:bold; margin:10px 0 5px; color:#10b981;";
      de.textContent = "核心任务";
      d8.appendChild(de);
      const df = document.createElement("div");
      df.className = "task-options-grid";
      d8.appendChild(df);
      const dg = document.createElement("div");
      dg.style.cssText = "font-weight:bold; margin:10px 0 5px; color:#f59e0b;";
      dg.textContent = "其他任务";
      d8.appendChild(dg);
      const dh = document.createElement("div");
      dh.className = "task-options-grid";
      d8.appendChild(dh);
      const di = ["loginReward", "share", "friend", "recruit", "collectVegetables", "goldThree", "openChest", "market", "arena", "collectBottle"];
      const dk = {
        loginReward: "登录奖励领取",
        share: "分享领火把",
        friend: "领取好友金币",
        recruit: "招募两次",
        collectVegetables: "领挂机奖励",
        goldThree: "点金三次",
        openChest: "开启木质宝箱",
        market: "黑市采购",
        arena: "竞技场三次",
        collectBottle: "收罐子",
        mail: "领取邮件奖励",
        boss: "俱乐部BOSS",
        fishThree: "普通钓鱼",
        rewardDaily: "每日任务奖励",
        rewardWeek: "每周任务奖励",
        legion: "俱乐部签到",
        sweepGenie: "灯神扫荡",
        buySkinCoin: "购买皮肤币",
        dailySaltKing: "每日咸王挑战",
        saltDream: "挑战咸王梦境",
        genieSweepTicket: "领灯神扫荡券",
        treasureFreeReward: "珍宝阁福利",
        weeklyWelfare: "周活动福利",
        legionEventReward: "俱乐部大事件",
        warGuess: "月赛助威",
        otherTasks: "其他任务（执行设置中开启的功能）"
      };
      const dl = async dm => {
        const dn = dk[dm] || dm;
        aw("手动执行" + dn, "info");
        try {
          switch (dm) {
            case "collectBottle":
              await cL.stopSaltJar();
              await c8(1000);
              await cL.startSaltJar();
              await c8(1000);
              await cL.collectBottle();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "goldThree":
              await cL.goldThree();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "arena":
              const dp = new Date();
              const dq = dp.getHours();
              if (dq < 6 || dq >= 22) {
                aw("当前不在竞技场开放时间（6:00-21:59），跳过执行", "warning");
                return;
              }
              await cL.arena(bJ);
              aw("手动执行" + dn + "成功", "success");
              break;
            case "loginReward":
              await cL.loginReward();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "share":
              await cL.share();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "friend":
              await cL.friend();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "recruit":
              await cL.recruit();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "openChest":
              await cL.openChest();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "market":
              await cL.market();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "mail":
              await cL.mail();
              aw("手动手动执行" + dn + "成功", "success");
              break;
            case "boss":
              await cL.boss(bJ);
              aw("手动执行" + dn + "成功", "success");
              break;
            case "genieSweepTicket":
              await cL.genieSweepTicket();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "collectVegetables":
              await cL.collectVegetables();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "fishThree":
              await cL.fishThree();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "sweepGenie":
              await cL.sweepGenie();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "buySkinCoin":
              await cL.buySkinCoin(bJ);
              aw("手动执行" + dn + "成功", "success");
              break;
            case "dailySaltKing":
              await cL.dailySaltKing();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "saltDream":
              await cL.saltDream();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "legion":
              await cL.legion();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "treasureFreeReward":
              await cL.treasureFreeReward(bJ);
              aw("手动执行" + dn + "成功", "success");
              break;
            case "weeklyWelfare":
              await ch();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "legionEventReward":
              await cL.legionEventReward();
              aw("手动执行" + dn + "成功", "success");
              break;
            case "warGuess":
              await cL.warGuess();
              aw("手动执行" + dn + "成功", "success");
              break;
            default:
              aw("任务\"" + dn + "\"暂不支持手动执行", "warning");
          }
        } catch (dr) {
          aw("手动执行" + dn + "失败: " + dr.message, "error");
        }
      };
      di.forEach(dm => {
        const dn = bJ.dailyTasks[dm];
        if (dn === undefined) {
          return;
        }
        const dp = dk[dm] || dm;
        const dq = document.createElement("div");
        dq.className = "task-option-item";
        const dr = az(dp, dn, dt => {
          bJ.dailyTasks[dm] = dt;
          aw(dp + "已" + (dt ? "启用" : "关闭"));
        });
        dr.style.margin = "0";
        const ds = ay("执行", () => dl(dm), false, "execute-btn");
        dq.appendChild(dr);
        dq.appendChild(ds);
        df.appendChild(dq);
      });
      Object.entries(bJ.dailyTasks).forEach(([dm, dn]) => {
        if (di.includes(dm)) {
          return;
        }
        const dp = dk[dm] || dm;
        const dq = document.createElement("div");
        dq.className = "task-option-item";
        const dr = az(dp, dn, dt => {
          bJ.dailyTasks[dm] = dt;
          aw(dp + "已" + (dt ? "启用" : "关闭"));
        });
        dr.style.margin = "0";
        let ds = null;
        if (dm !== "otherTasks") {
          ds = ay("执行", () => dl(dm), false, "execute-btn");
          dq.appendChild(dr);
          dq.appendChild(ds);
        } else {
          dq.appendChild(dr);
        }
        dh.appendChild(dq);
      });
    }, false);
    d2.appendChild(d3);
    const d4 = aA("自动答题", d8 => {
      const d9 = cK("answer", "自动答题", "自动参与答题活动并领取奖励，使用内置题库匹配答案");
      d8.appendChild(d9);
    });
    d2.appendChild(d4);
    const d5 = aA("盐罐自动化", d8 => {
      const da = cK("salt", "盐罐自动化", "自动启停盐罐、收罐并执行4次分享加钟，按设定间隔重复执行");
      d8.appendChild(da);
      const db = document.createElement("div");
      db.style.cssText = "margin-top:10px;";
      const dc = az("自动收罐", bJ.enhanced.salt.claimEnabled, dd => {
        bJ.enhanced.salt.claimEnabled = dd;
        aw("盐罐自动收罐已" + (dd ? "启用" : "关闭"));
      });
      db.appendChild(dc);
      d8.appendChild(db);
    });
    d2.appendChild(d5);
    const d6 = aA("咸将塔爬塔", d8 => {
      const d9 = cK("tower", "咸将塔爬塔", "自动挑战咸将塔，直到体力耗尽或达到4500层上限，按设定间隔重复执行");
      d8.appendChild(d9);
    });
    d2.appendChild(d6);
    const d7 = aA("黑市采购", d8 => {
      const da = cK("blackmarket", "黑市采购自动化", "自动购买折扣商品和周礼包，按设定间隔重复执行");
      d8.appendChild(da);
      const db = document.createElement("div");
      db.style.cssText = "max-height: 300px; overflow-y: auto; padding-right: 5px;";
      d8.appendChild(db);
      const dc = document.createElement("div");
      dc.style.cssText = "font-weight:bold; margin:10px 0 5px; color:#3b82f6;";
      dc.textContent = "每日黑市配置";
      db.appendChild(dc);
      const dd = document.createElement("div");
      dd.style.cssText = "margin-bottom: 15px;";
      const de = document.createElement("div");
      de.className = "config-row";
      const df = document.createElement("div");
      df.className = "config-label";
      df.textContent = "最大刷新次数";
      const dg = document.createElement("input");
      dg.type = "number";
      dg.min = "1";
      dg.value = bJ.blackmarket.daily.refreshTimes;
      dg.className = "config-input";
      dg.addEventListener("change", () => {
        bJ.blackmarket.daily.refreshTimes = parseInt(dg.value) || 1;
      });
      de.appendChild(df);
      de.appendChild(dg);
      dd.appendChild(de);
      const dh = document.createElement("div");
      dh.className = "config-row";
      const di = az("刷新失败时停止", bJ.blackmarket.daily.stopOnFailure, dr => {
        bJ.blackmarket.daily.stopOnFailure = dr;
      });
      di.style.margin = "0 auto";
      dh.appendChild(di);
      dd.appendChild(dh);
      db.appendChild(dd);
      const dj = document.createElement("div");
      dj.className = "goods-config-container";
      Object.values(bJ.blackmarket.daily.items).forEach(dr => {
        const ds = document.createElement("div");
        ds.className = "goods-item";
        const dt = document.createElement("div");
        dt.className = "goods-name";
        dt.textContent = dr.name;
        const du = document.createElement("input");
        du.type = "number";
        du.min = "0.1";
        du.max = "1";
        du.step = "0.1";
        du.value = dr.discount;
        du.className = "goods-discount";
        du.addEventListener("change", () => {
          dr.discount = parseFloat(du.value) || 0.5;
        });
        const dv = az("", dr.enabled, dw => {
          dr.enabled = dw;
        });
        dv.style.margin = "0";
        ds.appendChild(dt);
        ds.appendChild(du);
        ds.appendChild(dv);
        dj.appendChild(ds);
      });
      db.appendChild(dj);
      const dk = document.createElement("div");
      dk.style.cssText = "font-weight:bold; margin:15px 0 5px; color:#3b82f6;";
      dk.textContent = "黑市周配置";
      db.appendChild(dk);
      const dl = document.createElement("div");
      dl.className = "goods-config-container";
      Object.values(bJ.blackmarket.weekly.packages).forEach(dr => {
        const ds = document.createElement("div");
        ds.className = "goods-item";
        const dt = document.createElement("div");
        dt.className = "goods-name";
        dt.textContent = dr.name;
        const du = document.createElement("div");
        du.style.width = "60px";
        const dv = az("", dr.enabled, dw => {
          dr.enabled = dw;
        });
        dv.style.margin = "0";
        ds.appendChild(dt);
        ds.appendChild(du);
        ds.appendChild(dv);
        dl.appendChild(ds);
      });
      db.appendChild(dl);
      const dm = document.createElement("div");
      dm.className = "settings-actions";
      const dn = ay("查看当前折扣", cz, false, "runonce-btn");
      const dp = ay("测试购买每日黑市", cG, false, "runonce-btn");
      const dq = ay("测试购买每周黑市", cH, false, "runonce-btn");
      dm.appendChild(dn);
      dm.appendChild(dp);
      dm.appendChild(dq);
      d8.appendChild(dm);
    });
    d2.appendChild(d7);
    return d2;
  }
  function cN() {
    const d1 = document.createElement("div");
    d1.className = "tab-content";
    d1.appendChild(cO("upgradeStar", "武将升星"));
    d1.appendChild(cO("arena", "竞技场挑战"));
    d1.appendChild(cO("chest", "开启宝箱"));
    d1.appendChild(cO("fishing", "钓鱼"));
    d1.appendChild(cO("recruit", "招募武将"));
    d1.appendChild(cO("tower", "咸将塔爬塔"));
    d1.appendChild(cO("monthlyTask", "一键补月度任务"));
    d1.appendChild(cP());
    return d1;
  }
  function cO(d1, d2) {
    const d4 = bJ.manual[d1];
    const d5 = document.createElement("div");
    d5.className = "manual-card";
    const d6 = document.createElement("div");
    d6.className = "manual-header";
    const d7 = document.createElement("div");
    d7.className = "manual-title";
    d7.textContent = d2;
    const d8 = document.createElement("div");
    d8.style.cssText = "display: flex; align-items: center; gap: 8px;";
    if (d1 !== "upgradeStar") {
      const dc = ay("设置", () => {
        const dd = d5.querySelector(".manual-controls");
        dd.classList.toggle("show");
      }, false, "expand-btn");
      dc.style.padding = "3px 8px";
      dc.style.fontSize = "11px";
      d8.appendChild(dc);
    }
    d6.appendChild(d7);
    d6.appendChild(d8);
    d5.appendChild(d6);
    const d9 = document.createElement("div");
    if (d1 === "upgradeStar") {
      d9.style.cssText = "margin: 8px 0; display: flex; flex-wrap: wrap; gap: 8px;";
    } else {
      d9.className = "manual-controls";
    }
    if (d1 !== "upgradeStar") {
      const dd = document.createElement("div");
      dd.className = "control-row";
      const de = document.createElement("div");
      de.className = "control-group";
      const df = document.createElement("div");
      df.className = "control-label";
      df.textContent = "执行次数";
      const dg = document.createElement("input");
      dg.type = "number";
      dg.min = "1";
      dg.value = d4.count;
      dg.className = "control-input";
      dg.addEventListener("change", () => {
        d4.count = parseInt(dg.value) || 1;
      });
      de.appendChild(df);
      de.appendChild(dg);
      let dh = null;
      if (["chest", "fishing", "recruit"].includes(d1)) {
        dh = document.createElement("div");
        dh.className = "control-group";
        const dm = document.createElement("div");
        dm.className = "control-label";
        dm.textContent = "每次数量";
        const dn = document.createElement("input");
        dn.type = "number";
        dn.min = "1";
        dn.value = d4.quantity;
        dn.className = "control-input";
        dn.addEventListener("change", () => {
          d4.quantity = parseInt(dn.value) || 1;
        });
        dh.appendChild(dm);
        dh.appendChild(dn);
      }
      let di = null;
      if (["chest", "fishing", "recruit"].includes(d1)) {
        di = document.createElement("div");
        di.className = "control-group";
        const dp = document.createElement("div");
        dp.className = "control-label";
        dp.textContent = "类型";
        const dq = document.createElement("select");
        dq.className = "control-select";
        const dr = bX[d1];
        Object.entries(dr).forEach(([ds, dt]) => {
          const du = document.createElement("option");
          du.value = ds;
          du.textContent = dt.name;
          if (parseInt(ds) === d4.type) {
            du.selected = true;
          }
          dq.appendChild(du);
        });
        dq.addEventListener("change", () => {
          d4.type = parseInt(dq.value);
        });
        di.appendChild(dp);
        di.appendChild(dq);
      }
      const dj = document.createElement("div");
      dj.className = "control-group";
      const dk = document.createElement("div");
      dk.className = "control-label";
      dk.textContent = "延迟(ms)";
      const dl = document.createElement("input");
      dl.type = "number";
      dl.min = "100";
      dl.value = d4.delay;
      dl.className = "control-input";
      dl.addEventListener("change", () => {
        d4.delay = parseInt(dl.value) || 100;
      });
      dj.appendChild(dk);
      dj.appendChild(dl);
      dd.appendChild(de);
      if (dh) {
        dd.appendChild(dh);
      } else {
        dd.appendChild(dj);
      }
      d9.appendChild(dd);
      if (di) {
        const ds = document.createElement("div");
        ds.className = "control-row";
        ds.appendChild(di);
        ds.appendChild(dj);
        d9.appendChild(ds);
      }
    }
    const da = d1 === "upgradeStar" ? "武将升星+图鉴+领奖" : d1 === "monthlyTask" ? "一键补月度任务" : "执行" + d2;
    const db = ay(da, () => {
      if (d1 === "arena") {
        cq();
      } else {
        if (d1 === "upgradeStar") {
          cs();
        } else {
          if (d1 === "tower") {
            ct();
          } else {
            if (d1 === "monthlyTask") {
              cY();
            } else {
              cr(d1, d2, d4);
            }
          }
        }
      }
    }, true, "runonce-btn");
    if (d1 === "upgradeStar") {
      db.id = "upgradeStarExecuteBtn";
      db.style.width = "100%";
      db.style.padding = "8px 0";
    }
    d9.appendChild(db);
    d5.appendChild(d9);
    return d5;
  }
  function cP() {
    const d3 = document.createElement("div");
    d3.className = "manual-card";
    const d4 = document.createElement("div");
    d4.className = "manual-header";
    const d5 = document.createElement("div");
    d5.className = "manual-title";
    d5.textContent = "使用兑换码";
    const d6 = document.createElement("div");
    d6.style.cssText = "display: flex; align-items: center; gap: 8px;";
    const d7 = document.createElement("div");
    d7.className = "manual-controls";
    const d8 = document.createElement("textarea");
    d8.className = "control-textarea";
    d8.placeholder = "请输入兑换码，每行一个";
    d8.style.cssText = "\n            width: 100%;\n            min-height: 120px;\n            margin-bottom: 8px;\n            padding: 6px;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n            font-size: 12px;\n            resize: vertical;\n        ";
    d8.value = "VIP666\ndouyin666\ndouyin777\ndouyin888\nHAPPY666\nQQ888\nQQXY888\nAPP666\nbdvip666\n\nhuhushengwei888\n25XYZW1111";
    d7.appendChild(d8);
    const d9 = ay("执行兑换", () => {
      const db = d8.value.split("\n").filter(dc => dc.trim() !== "");
      if (db.length === 0) {
        au("请输入兑换码", "warning");
        return;
      }
      cQ(db);
    }, true, "runonce-btn");
    d9.style.width = "100%";
    d9.style.padding = "8px 0";
    d7.appendChild(d9);
    const da = ay("设置", () => {
      d7.classList.toggle("show");
    }, false, "expand-btn");
    da.style.padding = "3px 8px";
    da.style.fontSize = "11px";
    d6.appendChild(da);
    d4.appendChild(d5);
    d4.appendChild(d6);
    d3.appendChild(d4);
    d3.appendChild(d7);
    return d3;
  }
  function cQ(d1) {
    let d2 = 0;
    async function d3() {
      if (d2 >= d1.length) {
        au("所有兑换码已处理完成", "success");
        return;
      }
      const d4 = d1[d2].trim();
      d2++;
      au("正在兑换：" + d4 + " (" + d2 + "/" + d1.length + ")", "info");
      const d5 = {
        key: d4,
        platformType: "h5web"
      };
      const d6 = window.g_utils?.["bon"]?.["encode"] ? {
        ack: 0,
        body: window.g_utils.bon.encode(d5),
        cmd: "system_claimcdkreward",
        seq: Date.now(),
        time: Date.now()
      } : {
        ack: 0,
        cmd: "system_claimcdkreward",
        params: {
          key: d4,
          platformType: "h5web"
        },
        seq: Date.now(),
        time: Date.now()
      };
      try {
        const d8 = await window.ws.sendAsync(d6);
        const d9 = d8?.["ack"] === 0 || d8?.["code"] === 0;
        if (d9) {
          au("兑换成功：" + d4, "success");
          if (window.__SHARK__ && window.__SHARK__.logMessage) {
            window.__SHARK__.logMessage("兑换成功：" + d4, "info");
          }
        } else {
          const db = {
            "200120": "已经领取过奖励了",
            "200150": "兑换码不存在",
            "200230": "兑换码已过期"
          };
          const dc = d8?.["code"] || d8?.["_raw"]?.["code"];
          const dd = db[dc] || d8?.["msg"] || d8?.["_raw"]?.["error"] || "未知错误";
          au("兑换失败：" + d4 + " - " + dd, "error");
          if (window.__SHARK__ && window.__SHARK__.logMessage) {
            window.__SHARK__.logMessage("兑换失败：" + d4 + " - " + (dc || "未知错误码") + " - " + dd, "error");
          }
        }
      } catch (de) {
        console.error("CDK兑换请求错误:", de);
        const df = de?.["message"] || "请求失败";
        if (window.__SHARK__ && window.__SHARK__.logMessage) {
          window.__SHARK__.logMessage("兑换失败：" + d4 + " - 请求异常 - " + df, "error");
        }
        au("兑换失败：" + d4 + " - " + df, "error");
      }
      const d7 = 300;
      setTimeout(d3, d7);
    }
    d3();
  }
  function cR() {
    const d1 = document.createElement("div");
    d1.className = "tab-content";
    d1.id = "panel-account";
    const d2 = {
      createButton: ay,
      createCheckbox: az,
      createRadio: as
    };
    aq.buildAccountTab(d1, d2);
    return d1;
  }
  function cS() {
    const d2 = document.createElement("div");
    d2.className = "tab-content";
    const d3 = aA("其他任务", d4 => {
      const d6 = document.createElement("div");
      d6.className = "settings-desc";
      d6.textContent = "以下任务可单独启用/禁用，当每日任务中的\"其他任务\"选项开启时，将执行所有在此处启用的任务。";
      d4.appendChild(d6);
      const d7 = document.createElement("div");
      d7.className = "single-column-grid";
      d4.appendChild(d7);
      const d8 = {
        key: "celebrateSign",
        name: "生日祝福签到"
      };
      const d9 = {
        key: "claimFullServer",
        name: "领取祝福奖励"
      };
      const da = {
        key: "claimPersonal",
        name: "领取庆典奖励"
      };
      const db = {
        key: "celebrateShare",
        name: "庆典分享"
      };
      const dc = {
        key: "claimAnniversaryBag",
        name: "领取免费福袋"
      };
      const dd = {
        key: "claimRechargeReward",
        name: "领取0元累充奖励"
      };
      const de = {
        key: "claimMergeBoxEnergy",
        name: "领取怪塔金钥匙"
      };
      const df = [d8, d9, da, db, dc, dd, de];
      df.forEach(dk => {
        const dm = document.createElement("div");
        dm.className = "task-option-item-aligned";
        const dn = document.createElement("div");
        const dp = document.createElement("input");
        dp.type = "checkbox";
        dp.checked = bJ.otherTasks[dk.key];
        dp.className = "task-checkbox-aligned";
        dp.dataset.taskKey = dk.key;
        dp.addEventListener("change", ds => {
          bJ.otherTasks[dk.key] = ds.target.checked;
          aP();
        });
        dn.appendChild(dp);
        const dq = document.createElement("span");
        dq.className = "task-name-aligned";
        dq.textContent = dk.name;
        const dr = ay("执行", () => {
          aw("手动执行：" + dk.name, "info");
          const dt = {
            ...bJ.otherTasks
          };
          const du = dt;
          Object.keys(bJ.otherTasks).forEach(dv => {
            bJ.otherTasks[dv] = dv === dk.key;
          });
          aR().finally(() => {
            Object.assign(bJ.otherTasks, du);
            aP();
          });
        }, false, "runonce-btn task-btn-aligned");
        dm.appendChild(dn);
        dm.appendChild(dq);
        dm.appendChild(dr);
        d7.appendChild(dm);
      });
      const dg = document.createElement("div");
      dg.className = "settings-actions";
      const dh = ay("全选", () => {
        Object.keys(bJ.otherTasks).forEach(dl => {
          bJ.otherTasks[dl] = true;
        });
        const dk = d4.querySelectorAll("input[type=\"checkbox\"][data-task-key]");
        dk.forEach(dl => {
          dl.checked = true;
        });
        aP();
      }, false, "start-btn");
      const di = ay("全不选", () => {
        Object.keys(bJ.otherTasks).forEach(dl => {
          bJ.otherTasks[dl] = false;
        });
        const dk = d4.querySelectorAll("input[type=\"checkbox\"][data-task-key]");
        dk.forEach(dl => {
          dl.checked = false;
        });
        aP();
      }, false, "stop-btn");
      const dj = ay("执行选中项", () => {
        aw("开始执行选中的其他任务", "info");
        aR();
      }, false, "runonce-btn");
      dg.appendChild(dh);
      dg.appendChild(di);
      dg.appendChild(dj);
      d4.appendChild(dg);
    }, false);
    d2.appendChild(d3);
    return d2;
  }
  function cT() {
    const d2 = document.createElement("div");
    d2.className = "tab-content";
    const d3 = document.createElement("div");
    d3.style.cssText = "display: flex; justify-content: space-between; margin-bottom: 10px;";
    const d4 = document.createElement("div");
    d4.className = "manual-title";
    d4.textContent = "操作日志";
    const d5 = document.createElement("div");
    d5.style.cssText = "display: flex; gap: 8px;";
    const d6 = ay("清空日志", () => {
      ap("arenaLogContainer").innerHTML = "";
      aw("日志已清空", "info");
    }, false, "stop-btn");
    d6.style.padding = "3px 8px";
    const d7 = ay("复制日志", () => {
      const db = ap("arenaLogContainer");
      if (!db) {
        au("未找到日志容器", "error");
        return;
      }
      const dc = db.querySelectorAll("div");
      const dd = Array.from(dc).map(df => df.textContent);
      const de = dd.join("\n");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(de).then(() => {
          au("日志已复制到剪贴板", "success");
          aw("日志复制成功", "success");
        }).catch(df => {
          d8(de);
        });
      } else {
        d8(de);
      }
    }, false, "runonce-btn");
    function d8(da) {
      try {
        const db = document.createElement("textarea");
        db.value = da;
        db.style.position = "fixed";
        db.style.left = "-999999px";
        db.style.top = "-999999px";
        db.setAttribute("readonly", "");
        db.setAttribute("aria-hidden", "true");
        document.body.appendChild(db);
        db.focus();
        db.select();
        const dc = document.execCommand("copy");
        document.body.removeChild(db);
        if (dc) {
          au("日志已复制到剪贴板", "success");
          aw("日志复制成功", "success");
        } else {
          au("复制失败，请手动复制", "error");
          aw("日志复制失败: execCommand返回false", "error");
        }
      } catch (dd) {
        au("复制失败，请手动复制", "error");
        aw("日志复制失败: " + dd.message, "error");
      }
    }
    d7.style.padding = "3px 8px";
    d5.appendChild(d6);
    d5.appendChild(d7);
    d3.appendChild(d4);
    d3.appendChild(d5);
    d2.appendChild(d3);
    const d9 = document.createElement("div");
    d9.id = "arenaLogContainer";
    d9.style.cssText = "\n        text-align: left; /* 核心：日志条目左对齐 */\n\t\t";
    d2.appendChild(d9);
    return d2;
  }
  function cU() {
    const d1 = aq.isAutoSwitchEnabled();
    const d2 = aq.isAutoExpandEnabled();
    const d3 = d1 ? !d2 : true;
    c2.ui.collapsed = d3;
    const d4 = document.createElement("div");
    d4.id = "shark-panel";
    d4.className = c2.ui.collapsed ? "collapsed" : "";
    const d5 = document.createElement("div");
    d5.id = "shark-header";
    if (c2.ui.collapsed) {
      d5.classList.add("collapsed");
    }
    d5.addEventListener("click", () => {
      c2.ui.collapsed = !c2.ui.collapsed;
      d4.classList.toggle("collapsed", c2.ui.collapsed);
      d5.classList.toggle("collapsed", c2.ui.collapsed);
      d6.classList.toggle("collapsed", c2.ui.collapsed);
      d6.textContent = c2.ui.collapsed ? "辣条助手" : "辣条助手";
      if (!c2.ui.collapsed && d1) {
        const dg = document.querySelector(".shark-tab[data-tab=\"log\"]");
        if (dg && !dg.classList.contains("active")) {
          dg.click();
        }
      } else {
        if (!c2.ui.collapsed && !window.__SHARK_INITIALIZED__) {
          window.__SHARK_INITIALIZED__ = true;
          const dh = document.querySelector(".shark-tab[data-tab=\"enhanced\"]");
          if (dh) {
            dh.click();
          }
        }
      }
    });
    const d6 = document.createElement("div");
    d6.id = "shark-title";
    d6.className = c2.ui.collapsed ? "collapsed" : "";
    d6.textContent = c2.ui.collapsed ? "辣条助手" : "辣条助手";
    d5.appendChild(d6);
    d4.appendChild(d5);
    const d7 = document.createElement("div");
    d7.id = "shark-tabs";
    const d8 = {
      id: "enhanced",
      text: "自动化"
    };
    const d9 = {
      id: "account",
      text: "账号切换"
    };
    const da = {
      id: "manual",
      text: "手动任务"
    };
    const db = {
      id: "settings",
      text: "其他"
    };
    const dc = {
      id: "log",
      text: "日志"
    };
    const dd = [d8, d9, da, db, dc];
    dd.forEach(dg => {
      const dj = document.createElement("div");
      dj.className = "shark-tab " + (c2.ui.activeTab === dg.id ? "active" : "");
      dj.textContent = dg.text;
      dj.dataset.tab = dg.id;
      dj.addEventListener("click", () => {
        c2.ui.activeTab = dg.id;
        document.querySelectorAll(".shark-tab").forEach(dm => {
          dm.classList.remove("active");
        });
        dj.classList.add("active");
        document.querySelectorAll(".tab-content").forEach(dm => {
          dm.classList.remove("active");
        });
        document.querySelector(".tab-content[data-tab=\"" + dg.id + "\"]").classList.add("active");
      });
      d7.appendChild(dj);
    });
    d4.appendChild(d7);
    const de = document.createElement("div");
    de.id = "shark-content";
    const df = [{
      id: "enhanced",
      element: cM()
    }, {
      id: "account",
      element: cR()
    }, {
      id: "manual",
      element: cN()
    }, {
      id: "settings",
      element: cS()
    }, {
      id: "log",
      element: cT()
    }];
    df.forEach(dg => {
      dg.element.dataset.tab = dg.id;
      de.appendChild(dg.element);
    });
    d4.appendChild(de);
    document.body.appendChild(d4);
  }
  function cV() {
    cJ();
    cU();
    aq.applyCurrentAccount();
    const d2 = {
      logMessage: aw,
      showTip: au
    };
    window.__SHARK__ = d2;
    const d3 = aq.isAutoSwitchEnabled();
    const d4 = aq.isAutoExpandEnabled();
    if (d3 && d4) {
      setTimeout(() => {
        ar();
        if (d3) {
          aq.updateTitleWithProgress();
        }
      }, 500);
    }
    aO();
    setTimeout(aN, 1000);
    setTimeout(aQ, 1500);
    setTimeout(() => {
      const d5 = {
        dailyEnhancedTask: cx,
        answerTask: cy,
        saltJarTask: cu,
        enhancedTowerTask: cv,
        executeBlackMarketTask: cI,
        executeCDKTask: cQ
      };
      aq.runPostSwitchActions(d5);
    }, 5000);
    if (aq.isAutoSwitchEnabled() && aq.isAutoExpandEnabled()) {
      setTimeout(() => {
        const d5 = document.querySelector(".shark-tab[data-tab=\"log\"]");
        if (d5 && !d5.classList.contains("active")) {
          d5.click();
        }
        aq.updateTitleWithProgress();
      }, 1000);
    }
    aw("车辆助手+辣条助手8.4.10.4", "success");
    au("车辆助手+辣条助手8.4.10.4", "success");
    setTimeout(() => {
      aF();
    }, 1000);
  }
  async function cW() {
    const d1 = Date.now();
    const d2 = Date.now();
    const d4 = {
      ack: 0,
      body: {},
      cmd: "activity_get",
      seq: d1,
      time: d2
    };
    try {
      const d5 = await window.ws.sendAsync(d4);
      const d6 = JSON.stringify(d5);
      if (d6.includes("myMonthInfo") || d6.includes("myArenaInfo")) {
        const d7 = d6.match(/myMonthInfo[^}]*\"2\":\{"num":(\d+)/);
        const d8 = d6.match(/myArenaInfo[^}]*"num":(\d+)/);
        if (d7 && d8) {
          aw("从字符串直接提取数据成功", "success");
          aw("钓鱼次数: " + d7[1], "info");
          aw("竞技场积分: " + d8[1], "info");
          return {
            myMonthInfo: {
              "2": {
                num: parseInt(d7[1])
              }
            },
            myArenaInfo: {
              num: parseInt(d8[1])
            }
          };
        }
      }
      aw("获取月度任务数据失败: 无法从响应中提取有效数据", "error");
      return null;
    } catch (d9) {
      aw("获取月度任务数据时发生错误: " + d9.message, "error");
      return null;
    }
  }
  function cX(d1) {
    if (!d1) {
      return null;
    }
    const d2 = d1.myArenaInfo?.["num"] || 0;
    const d3 = d1.myMonthInfo?.["2"]?.["num"] || 0;
    const d4 = new Date();
    const d5 = d4.getDate();
    const d6 = new Date(d4.getFullYear(), d4.getMonth() + 1, 0).getDate();
    const d7 = d6 - d5 + 1;
    aw("日期计算：当前日期" + d5 + "号，本月最后一天" + d6 + "号，剩余天数" + d7 + "天", "debug");
    const d8 = 240;
    const d9 = d2;
    const da = d8 - d9;
    const db = Math.ceil(da / 2);
    const dc = 320;
    const dd = d3;
    const de = dc - dd;
    const df = Math.max(0, d7 - 1) * 3;
    const dg = Math.max(0, de - df);
    const dh = dg;
    const di = {
      current: d9,
      required: d8,
      remaining: da
    };
    const dj = {
      currentBattles: 0,
      required: db,
      points: di
    };
    const dk = {
      current: d3,
      required: dh,
      totalRequired: de,
      freeFishingCount: df,
      requiredFishingBattles: dg,
      remainingDays: d7
    };
    const dl = {
      arena: dj,
      fishing: dk
    };
    return dl;
  }
  async function cY() {
    aw("开始获取月度任务数据...", "info");
    const d1 = await cW();
    if (!d1) {
      aw("获取月度任务数据失败，无法继续", "error");
      return;
    }
    const d2 = cX(d1);
    if (!d2) {
      aw("计算需要补充的次数失败", "error");
      return;
    }
    aw("月度任务数据获取成功：竞技场积分" + d2.arena.points.current + "分，钓鱼" + d2.fishing.current + "次", "success");
    aw("当月剩余" + d2.fishing.remainingDays + "天，需要补充：竞技场" + d2.arena.required + "次，钓鱼" + d2.fishing.required + "次", "info");
    aw("竞技场：当前" + d2.arena.points.current + "分，目标240分，还需" + d2.arena.points.remaining + "分", "info");
    aw("钓鱼：当前" + d2.fishing.current + "次，目标320次，还需" + d2.fishing.totalRequired + "次，免费" + d2.fishing.freeFishingCount + "次，需一次性补充" + d2.fishing.requiredFishingBattles + "次", "info");
    let d3 = false;
    if (d2.arena.required > 0) {
      aw("开始执行竞技场挑战" + d2.arena.required + "次...", "info");
      const d4 = await cZ(d2.arena.required);
      if (d4 > 0) {
        aw("竞技场挑战成功完成" + d4 + "次", "success");
      } else {
        aw("竞技场挑战失败，继续执行钓鱼任务", "warning");
      }
      d3 = true;
    }
    if (d2.fishing.required > 0) {
      aw("开始执行普通钓鱼" + d2.fishing.required + "次...", "info");
      await d0(d2.fishing.required);
    } else {
      if (d3) {
        aw("不需要钓鱼任务", "info");
      }
    }
    aw("月度任务补全完成", "success");
  }
  async function cZ(d1) {
    const d2 = bJ.manual.arena.count;
    bJ.manual.arena.count = 1;
    let d3 = 0;
    let d4 = 0;
    try {
      const d5 = await cW();
      if (d5) {
        d4 = d5.myArenaInfo?.["num"] || 0;
        aw("初始竞技场积分：" + d4 + "分，目标240分", "info");
        if (d4 >= 240) {
          aw("竞技场积分已达到目标240分，当前积分：" + d4 + "分，无需挑战", "success");
          return d3;
        }
      }
      for (let d6 = 0; d6 < 200; d6++) {
        if (d4 >= 240) {
          aw("竞技场积分已达到目标240分，当前积分：" + d4 + "分，停止挑战", "success");
          break;
        }
        const d7 = await cq();
        if (d7.success) {
          d3++;
          if (d7.monthlyArenaScore !== null && !isNaN(d7.monthlyArenaScore)) {
            d4 = d7.monthlyArenaScore;
            aw("竞技场挑战第" + (d6 + 1) + "次成功，当前积分：" + d4 + "分", "info");
          } else {
            aw("竞技场挑战第" + (d6 + 1) + "次成功，但未获取到积分信息", "info");
          }
        } else {
          aw("竞技场挑战第" + (d6 + 1) + "次失败，继续尝试", "warning");
        }
        await c8(bJ.manual.monthlyTask.delay);
      }
      aw("竞技场挑战完成：成功" + d3 + "次，最终积分：" + d4 + "分", "info");
    } finally {
      bJ.manual.arena.count = d2;
    }
    return d3;
  }
  async function d0(d1) {
    try {
      return await ck(d1);
    } catch (d2) {
      aw("钓鱼任务执行失败: " + d2.message, "error");
      return false;
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cV);
  } else {
    cV();
  }
})();