//Tue Jan 06 2026 03:39:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";

  const _0x4efb90 = document.createElement("div");
  _0x4efb90.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        width: 213px;\n        background: #1a1a1a;\n        border: 1px solid #b8860b;\n        border-radius: 12px;\n        box-shadow: 0 4px 12px rgba(184, 134, 11, 0.2);\n        z-index: 99999;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n        min-height: 180px;\n        max-height: 250px;\n        overflow: hidden;\n        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        backdrop-filter: blur(5px);\n    ";
  _0x4efb90.className = "js-importer-container";
  const _0x17204c = document.createElement("div");
  _0x17204c.style.cssText = "\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 10px 14px;\n        background: #2d2d2d;\n        color: #d4af37;\n        cursor: move;\n        user-select: none;\n        border-radius: 10px 10px 0 0;\n        box-shadow: 0 1px 3px rgba(184, 134, 11, 0.3);\n        border-bottom: 1px solid #b8860b;\n    ";
  _0x17204c.className = "js-importer-titlebar";
  const _0x2f7d14 = document.createElement("h3");
  _0x2f7d14.textContent = "🪙 哈哈脚本选择器";
  _0x2f7d14.style.cssText = "margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.3px;";
  _0x17204c.appendChild(_0x2f7d14);
  const _0xc21ea7 = document.createElement("div");
  _0xc21ea7.style.cssText = "display: flex; gap: 6px;";
  const _0xd14d50 = document.createElement("button");
  _0xd14d50.innerHTML = "✕";
  _0xd14d50.title = "隐藏窗口";
  _0xd14d50.style.cssText = "\n        background: rgba(184, 134, 11, 0.2);\n        color: #d4af37;\n        border: 1px solid #b8860b;\n        font-size: 11px;\n        cursor: pointer;\n        padding: 5px 8px;\n        border-radius: 5px;\n        transition: all 0.2s ease;\n    ";
  _0xd14d50.onmouseenter = () => {
    _0xd14d50.style.background = "rgba(244, 67, 54, 0.5)";
    _0xd14d50.style.transform = "scale(1.05)";
    _0xd14d50.style.color = "#ff6b6b";
  };
  _0xd14d50.onmouseleave = () => {
    _0xd14d50.style.background = "rgba(184, 134, 11, 0.2)";
    _0xd14d50.style.transform = "scale(1)";
    _0xd14d50.style.color = "#d4af37";
  };
  _0xc21ea7.appendChild(_0xd14d50);
  _0x17204c.appendChild(_0xc21ea7);
  _0x4efb90.appendChild(_0x17204c);
  const _0x432cd7 = document.createElement("div");
  _0x432cd7.style.cssText = "\n        padding: 14px;\n        overflow-y: auto;\n        max-height: calc(250px - 48px);\n        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        background: #1a1a1a;\n        color: #e0e0e0;\n    ";
  _0x432cd7.className = "js-importer-content";
  const _0x567c28 = document.createElement("div");
  _0x567c28.style.cssText = "margin-bottom: 15px;";
  const _0x2fa2ef = document.createElement("div");
  _0x2fa2ef.style.cssText = "\n        position: relative;\n        margin-bottom: 10px;\n    ";
  const _0x3c9e4b = document.createElement("input");
  _0x3c9e4b.type = "file";
  _0x3c9e4b.accept = ".js";
  _0x3c9e4b.style.cssText = "\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    ";
  const _0x1629c0 = document.createElement("button");
  _0x1629c0.innerHTML = "🪙 导入脚本";
  _0x1629c0.style.cssText = "\n        display: block;\n        width: 100%;\n        padding: 9px 14px;\n        background: #2d2d2d;\n        color: #d4af37;\n        border: 1px solid #b8860b;\n        border-radius: 7px;\n        cursor: pointer;\n        font-size: 12px;\n        font-weight: 600;\n        transition: all 0.2s ease;\n        text-align: left;\n    ";
  _0x3c9e4b.onmouseenter = () => {
    _0x1629c0.style.background = "#3a3a3a";
    _0x1629c0.style.borderColor = "#d4af37";
    _0x1629c0.style.transform = "translateY(-1px)";
    _0x1629c0.style.boxShadow = "0 2px 6px rgba(184, 134, 11, 0.3)";
  };
  _0x3c9e4b.onmouseleave = () => {
    _0x1629c0.style.background = "#2d2d2d";
    _0x1629c0.style.borderColor = "#b8860b";
    _0x1629c0.style.transform = "translateY(0)";
    _0x1629c0.style.boxShadow = "none";
  };
  _0x2fa2ef.appendChild(_0x3c9e4b);
  _0x2fa2ef.appendChild(_0x1629c0);
  _0x567c28.appendChild(_0x2fa2ef);
  const _0x37fa17 = document.createElement("div");
  _0x37fa17.style.cssText = "display: flex; justify-content: space-between; align-items: center; gap: 8px; margin: 10px 0; flex-wrap: nowrap;";
  const _0x2ce7ad = document.createElement("div");
  _0x2ce7ad.style.cssText = "\n        color: #d4af37;\n        font-style: italic;\n        font-size: 11px;\n        padding: 5px 8px;\n        background: #2d2d2d;\n        border-radius: 5px;\n        border-left: 3px solid #b8860b;\n        word-break: break-all;\n        flex: 1;\n        min-width: 0;\n    ";
  _0x37fa17.appendChild(_0x2ce7ad);
  const _0x1db01a = document.createElement("div");
  _0x1db01a.style.cssText = "display: flex; gap: 6px; flex-shrink: 0;";
  const _0x3d9bc8 = document.createElement("button");
  _0x3d9bc8.innerHTML = "▶ 执行";
  _0x3d9bc8.style.cssText = "\n        padding: 5px 10px;\n        background: #b8860b;\n        color: #1a1a1a;\n        border: 1px solid #d4af37;\n        border-radius: 7px;\n        cursor: pointer;\n        font-size: 10px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        transition: all 0.2s ease;\n        box-shadow: 0 2px 6px rgba(184, 134, 11, 0.3);\n        white-space: nowrap;\n    ";
  _0x3d9bc8.disabled = true;
  _0x3d9bc8.onmouseenter = () => {
    !_0x3d9bc8.disabled && (_0x3d9bc8.style.background = "#d4af37", _0x3d9bc8.style.transform = "translateY(-1px)", _0x3d9bc8.style.boxShadow = "0 3px 8px rgba(184, 134, 11, 0.4)");
  };
  _0x3d9bc8.onmouseleave = () => {
    !_0x3d9bc8.disabled && (_0x3d9bc8.style.background = "#b8860b", _0x3d9bc8.style.transform = "translateY(0)", _0x3d9bc8.style.boxShadow = "0 2px 6px rgba(184, 134, 11, 0.3)");
  };
  _0x3d9bc8.onmousedown = () => {
    !_0x3d9bc8.disabled && (_0x3d9bc8.style.transform = "translateY(1px)");
  };
  _0x3d9bc8.onmouseup = () => {
    !_0x3d9bc8.disabled && (_0x3d9bc8.style.transform = "translateY(-1px)");
  };
  _0x1db01a.appendChild(_0x3d9bc8);
  _0x37fa17.appendChild(_0x1db01a);
  _0x567c28.appendChild(_0x37fa17);
  const _0x53f9a0 = document.createElement("div");
  _0x53f9a0.style.cssText = "\n        padding: 8px 10px;\n        margin-top: 10px;\n        border-radius: 7px;\n        font-size: 10px;\n        font-weight: 500;\n        line-height: 1.4;\n        transition: all 0.3s ease;\n        box-shadow: 0 2px 7px rgba(184, 134, 11, 0.2);\n    ";
  _0x567c28.appendChild(_0x53f9a0);
  _0x432cd7.appendChild(_0x567c28);
  _0x4efb90.appendChild(_0x432cd7);
  document.body.appendChild(_0x4efb90);
  const _0x39135c = document.createElement("button");
  _0x39135c.innerHTML = "🪙";
  _0x39135c.title = "打开哈哈脚本选择器（点击拖拽）";
  _0x39135c.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        width: 42px;\n        height: 42px;\n        background: #1a1a1a;\n        color: #d4af37;\n        border: 1px solid #b8860b;\n        border-radius: 50%;\n        font-size: 17px;\n        cursor: move;\n        box-shadow: 0 3px 8px rgba(184, 134, 11, 0.3);\n        z-index: 99998;\n        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        display: none;\n        align-items: center;\n        justify-content: center;\n        user-select: none;\n        touch-action: none;\n    ";
  _0x39135c.className = "js-importer-minibtn";
  _0x39135c.onmouseenter = () => {
    _0x39135c.style.transform = "scale(1.08) rotate(4deg)";
    _0x39135c.style.boxShadow = "0 4px 12px rgba(184, 134, 11, 0.5)";
    _0x39135c.style.cursor = "grab";
  };
  _0x39135c.onmouseleave = () => {
    _0x39135c.style.transform = "scale(1) rotate(0deg)";
    _0x39135c.style.boxShadow = "0 3px 8px rgba(184, 134, 11, 0.3)";
  };
  document.body.appendChild(_0x39135c);
  let _0x5c7e97 = null;
  let _0x4403d9 = "";
  function _0x166a58(_0x2934f5, _0x278229, _0xe30137 = false) {
    _0x278229.style.position = "fixed";
    _0x278229.style.left = _0x278229.style.left || "20px";
    _0x278229.style.top = _0x278229.style.top || "20px";
    _0x278229.style.right = "auto";
    _0x278229.style.bottom = "auto";
    _0x278229.style.transform = "translate3d(0, 0, 0)";
    _0x278229.style.willChange = "transform";
    _0x278229.style.transition = "none";
    let _0x539310 = false;
    let _0x32f69c;
    let _0x18ed8a;
    let _0x89899c = 0;
    let _0x1c2108 = 0;
    let _0x199e4c = null;
    const _0x28e377 = () => {
      const _0x395c4e = new DOMMatrixReadOnly(window.getComputedStyle(_0x278229).transform);
      return {
        x: _0x395c4e.m41,
        y: _0x395c4e.m42
      };
    };
    const _0x530ede = _0x3e08eb => {
      if (_0x3e08eb.type === "mousedown" && _0x3e08eb.button !== 0) {
        return;
      }
      _0x539310 = true;
      const _0x2346ea = _0x3e08eb.touches ? _0x3e08eb.touches[0].clientX : _0x3e08eb.clientX;
      const _0x1bbae4 = _0x3e08eb.touches ? _0x3e08eb.touches[0].clientY : _0x3e08eb.clientY;
      _0x32f69c = _0x2346ea;
      _0x18ed8a = _0x1bbae4;
      const _0x39d0b7 = _0x28e377();
      _0x89899c = _0x39d0b7.x;
      _0x1c2108 = _0x39d0b7.y;
      _0x2934f5.style.cursor = "grabbing";
      _0x278229.style.zIndex = "999999";
      _0x278229.style.transition = "none";
    };
    const _0x59b27b = _0x4ccf3d => {
      if (!_0x539310) {
        return;
      }
      const _0x32ebcf = _0x4ccf3d.touches ? _0x4ccf3d.touches[0].clientX : _0x4ccf3d.clientX;
      const _0x337c16 = _0x4ccf3d.touches ? _0x4ccf3d.touches[0].clientY : _0x4ccf3d.clientY;
      const _0x5973a3 = _0x32ebcf - _0x32f69c + _0x89899c;
      const _0x9766da = _0x337c16 - _0x18ed8a + _0x1c2108;
      !_0x199e4c && (_0x199e4c = requestAnimationFrame(() => {
        _0x278229.style.transform = "translate3d(" + _0x5973a3 + "px, " + _0x9766da + "px, 0)";
        _0x199e4c = null;
      }));
    };
    const _0x17041e = () => {
      if (!_0x539310) {
        return;
      }
      _0x539310 = false;
      _0x199e4c && (cancelAnimationFrame(_0x199e4c), _0x199e4c = null);
      const _0x508f75 = _0x28e377();
      const _0x5385bf = window.getComputedStyle(_0x278229);
      const _0x1967f9 = _0x278229.getBoundingClientRect();
      _0x278229.style.left = _0x1967f9.left + "px";
      _0x278229.style.top = _0x1967f9.top + "px";
      _0x278229.style.transform = "translate3d(0, 0, 0)";
      _0x2934f5.style.cursor = "move";
      _0x278229.style.zIndex = _0xe30137 ? "99998" : "99999";
    };
    _0x2934f5.addEventListener("mousedown", _0x530ede, {
      passive: false
    });
    _0x2934f5.addEventListener("touchstart", _0x530ede, {
      passive: false
    });
    document.addEventListener("mousemove", _0x59b27b, {
      passive: true
    });
    document.addEventListener("touchmove", _0x59b27b, {
      passive: true
    });
    document.addEventListener("mouseup", _0x17041e, {
      passive: true
    });
    document.addEventListener("touchend", _0x17041e, {
      passive: true
    });
    document.addEventListener("mouseleave", _0x17041e, {
      passive: true
    });
    document.addEventListener("touchcancel", _0x17041e, {
      passive: true
    });
  }
  _0x166a58(_0x17204c, _0x4efb90, false);
  _0x166a58(_0x39135c, _0x39135c, true);
  const _0x1cfd86 = () => {
    _0x4efb90.style.display = "none";
    _0x39135c.style.display = "flex";
  };
  _0xd14d50.addEventListener("click", _0x1cfd86);
  _0xd14d50.addEventListener("touchend", _0x477dd6 => {
    _0x477dd6.preventDefault();
    _0x477dd6.stopPropagation();
    _0x1cfd86();
  });
  const _0x3f8954 = () => {
    _0x4efb90.style.display = "block";
    _0x39135c.style.display = "none";
  };
  _0x39135c.addEventListener("click", _0x3f8954);
  _0x39135c.addEventListener("touchend", _0x5823e9 => {
    _0x5823e9.preventDefault();
    _0x5823e9.stopPropagation();
    _0x3f8954();
  });
  _0x3c9e4b.addEventListener("change", _0x408560 => {
    const _0x331eae = _0x408560.target.files[0];
    if (!_0x331eae) {
      return;
    }
    if (_0x331eae.type !== "text/javascript" && !_0x331eae.name.endsWith(".js")) {
      _0x73107d("❌ 请选择JavaScript文件(.js)", "error");
      return;
    }
    _0x5c7e97 = _0x331eae;
    _0x2ce7ad.textContent = "已选择: " + _0x331eae.name;
    const _0x289fdd = new FileReader();
    _0x289fdd.onload = _0x33487b => {
      _0x4403d9 = _0x33487b.target.result;
      _0x3d9bc8.disabled = false;
      _0x73107d("✅ 文件已加载，点击执行", "success");
    };
    _0x289fdd.onerror = () => {
      _0x73107d("❌ 文件读取失败", "error");
    };
    _0x289fdd.readAsText(_0x331eae);
  });
  _0x3d9bc8.addEventListener("click", () => {
    if (!_0x4403d9) {
      _0x73107d("❌ 请先选择并加载脚本", "error");
      return;
    }
    try {
      const _0x1d6434 = document.createElement("script");
      _0x1d6434.textContent = _0x4403d9;
      document.head.appendChild(_0x1d6434);
      _0x73107d("✅ 脚本执行成功", "success");
    } catch (_0xf15bdb) {
      _0x73107d("❌ 执行错误: " + _0xf15bdb.message, "error");
    }
  });
  function _0x73107d(_0x36910b, _0x1b6541) {
    _0x53f9a0.textContent = _0x36910b;
    _0x53f9a0.className = _0x1b6541;
    if (_0x1b6541 === "success") {
      _0x53f9a0.style.backgroundColor = "#2d2d2d";
      _0x53f9a0.style.border = "2px solid #b8860b";
      _0x53f9a0.style.color = "#d4af37";
      _0x53f9a0.style.display = "block";
    } else {
      _0x1b6541 === "error" ? (_0x53f9a0.style.backgroundColor = "#2d2d2d", _0x53f9a0.style.border = "2px solid #b8860b", _0x53f9a0.style.color = "#ff6b6b", _0x53f9a0.style.display = "block") : (_0x53f9a0.style.display = "block", _0x53f9a0.style.backgroundColor = "#2d2d2d", _0x53f9a0.style.border = "2px solid #b8860b", _0x53f9a0.style.color = "#d4af37");
    }
  }
  _0x73107d("🪙 选择本地脚本文件，点击执行", "");
})();