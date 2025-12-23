// ==UserScript==
// @name         蟠桃大会战报单独版
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  蟠桃大会战报查询与导出
// @author       9479星星✨（感谢黄佬给思路）
// @match        https://xxz-xyzw-res.hortorgames.com/h5web/*
// @match        https://http://localhost:3000//*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hortorgames.com
// @grant        none
// ==/UserScript==
(function (_0x164c02, _0x30b1d4) {
    const _0xafc6ad = a0_0x2744,
    _0x12f213 = _0x164c02();
    while (!![]) {
        try {
            const _0x3cb534 = -parseInt(_0xafc6ad(0x1cc)) / 0x1 * (-parseInt(_0xafc6ad(0x1ef)) / 0x2) + parseInt(_0xafc6ad(0x1c7)) / 0x3 + parseInt(_0xafc6ad(0x1d2)) / 0x4 * (parseInt(_0xafc6ad(0x1a3)) / 0x5) + parseInt(_0xafc6ad(0x1bd)) / 0x6 * (parseInt(_0xafc6ad(0x176)) / 0x7) + -parseInt(_0xafc6ad(0x203)) / 0x8 * (-parseInt(_0xafc6ad(0x206)) / 0x9) + -parseInt(_0xafc6ad(0x1a6)) / 0xa * (-parseInt(_0xafc6ad(0x1e1)) / 0xb) + -parseInt(_0xafc6ad(0x1e6)) / 0xc;
            if (_0x3cb534 === _0x30b1d4)
                break;
            else
                _0x12f213['push'](_0x12f213['shift']());
        } catch (_0x46b674) {
            _0x12f213['push'](_0x12f213['shift']());
        }
    }
}
    (a0_0x2299, 0x83020), (function () {
        'use strict';
        const _0x55aa89 = a0_0x2744;
        const _0x5b190f = (_0x21dcca, _0x4907f5, _0x6e8abc, _0x5a1b08) => {
            return new Promise(_0x5eb058 => {
                if (window[_0x4907f5] && _0x5a1b08['value']) {
                    _0x5eb058(!![]);
                    return;
                }
                let _0x50ba57 = 0x0;
                const _0x38b14b = 0x2710,
                _0x228a95 = () => {
                    const _0x2c9c3c = a0_0x2744;
                    if (_0x50ba57 >= _0x6e8abc[_0x2c9c3c(0x156)]) {
                        _0x5eb058(![]);
                        return;
                    }
                    const _0x314f79 = document[_0x2c9c3c(0x222)](_0x2c9c3c(0x1f0));
                    _0x314f79[_0x2c9c3c(0x1fe)] = _0x6e8abc[_0x50ba57];
                    const _0x26d01a = setTimeout(() => {
                        const _0x2e3c3c = _0x2c9c3c;
                        console[_0x2e3c3c(0x1f3)](_0x21dcca + _0x2e3c3c(0x1b0) + _0x6e8abc[_0x50ba57] + ')'),
                        _0x314f79[_0x2e3c3c(0x179)]();
                    }, _0x38b14b);
                    _0x314f79[_0x2c9c3c(0x160)] = () => {
                        const _0x50ecfd = _0x2c9c3c;
                        clearTimeout(_0x26d01a),
                        _0x5a1b08[_0x50ecfd(0x226)] = !![],
                        console['log'](_0x21dcca + _0x50ecfd(0x1e7) + _0x6e8abc[_0x50ba57] + ')'),
                        _0x5eb058(!![]);
                    },
                    _0x314f79[_0x2c9c3c(0x179)] = () => {
                        const _0x2fa9c0 = _0x2c9c3c;
                        clearTimeout(_0x26d01a),
                        console[_0x2fa9c0(0x1f3)](_0x21dcca + _0x2fa9c0(0x1a4) + _0x6e8abc[_0x50ba57] + ')'),
                        _0x50ba57++,
                        _0x228a95();
                    },
                    document[_0x2c9c3c(0x1bc)][_0x2c9c3c(0x194)](_0x314f79);
                };
                _0x228a95();
            });
        },
        _0x33e031 = {
            'html2canvas': ![],
            'sheetjs': ![]
        },
        _0x37bca4 = () => _0x5b190f(_0x55aa89(0x220), _0x55aa89(0x220), [_0x55aa89(0x19a), _0x55aa89(0x1cf), 'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js'], {
            'value': _0x33e031['html2canvas']
        }),
        _0x181315 = _0x619a14 => !_0x619a14 ? '0' : _0x619a14 >= 0x5f5e100 ? (_0x619a14 / 0x5f5e100)['toFixed'](0x1) + '亿' : _0x619a14 >= 0x2710 ? Math[_0x55aa89(0x1ed)](_0x619a14 / 0x2710) + 'w' : String(_0x619a14),
        _0x1776c3 = (_0x42ace1, _0x4fb368 = Infinity) => {
            const _0x326f98 = _0x55aa89,
            _0x25afbe = [],
            _0x44dce6 = new Date(),
            _0x183260 = _0x44dce6[_0x326f98(0x182)](),
            _0x11987f = _0x44dce6[_0x326f98(0x17a)](),
            _0x2e64b0 = new Date(_0x183260, _0x11987f, 0x1),
            _0x222d87 = new Date(_0x183260, _0x11987f + 0x1, 0x0);
            let _0x38dd4a = new Date(_0x2e64b0);
            while (_0x38dd4a[_0x326f98(0x15d)]() !== _0x42ace1 && _0x38dd4a <= _0x222d87) {
                _0x38dd4a['setDate'](_0x38dd4a[_0x326f98(0x16c)]() + 0x1);
            }
            while (_0x38dd4a <= _0x222d87 && _0x25afbe[_0x326f98(0x156)] < _0x4fb368) {
                const _0x33346d = new Date(_0x38dd4a);
                _0x25afbe[_0x326f98(0x195)]({
                    'displayDate': _0x33346d,
                    'actualDate': new Date(_0x33346d)
                }),
                _0x38dd4a[_0x326f98(0x212)](_0x38dd4a['getDate']() + 0x7);
            }
            return _0x25afbe;
        },
        _0x4f67a8 = () => _0x1776c3(0x0, 0x3),
        _0x406605 = _0x17c12e => {
            const _0x797681 = _0x55aa89,
            _0x23ca2a = _0x17c12e[_0x797681(0x182)](),
            _0xc30cdc = String(_0x17c12e['getMonth']() + 0x1)[_0x797681(0x197)](0x2, '0'),
            _0x9dc02b = String(_0x17c12e[_0x797681(0x16c)]())['padStart'](0x2, '0');
            return {
                'display': _0x23ca2a + '-' + _0xc30cdc + '-' + _0x9dc02b,
                'actual': _0x23ca2a + '/' + _0xc30cdc + '/' + _0x9dc02b
            };
        },
        _0x3bf9f5 = (_0x131d95, _0x5108c8, _0x2ae1b7 = null) => {
            const _0x22020d = _0x55aa89,
            _0x5d6eb8 = document[_0x22020d(0x1fc)](_0x131d95);
            if (!_0x5d6eb8)
                return;
            _0x5d6eb8['innerHTML'] = '',
            _0x5108c8[_0x22020d(0x158)](_0x300fc0 => {
                const _0x5a3826 = _0x22020d, {
                    display: _0x5d8018,
                    actual: _0x571a76
                } = _0x406605(_0x300fc0[_0x5a3826(0x225)]),
                _0x35d1c3 = document['createElement']('option');
                _0x35d1c3[_0x5a3826(0x226)] = _0x571a76,
                _0x35d1c3[_0x5a3826(0x1c5)] = _0x5d8018,
                _0x5d6eb8[_0x5a3826(0x194)](_0x35d1c3);
            });
            if (_0x2ae1b7 && _0x5108c8[_0x22020d(0x156)] > 0x0) {
                const {
                    actual: _0x20c926
                } = _0x406605(_0x2ae1b7[_0x22020d(0x218)]);
                _0x5d6eb8['value'] = _0x20c926;
            } else {
                if (_0x5108c8[_0x22020d(0x156)] > 0x0) {
                    const {
                        actual: _0x1f4099
                    } = _0x406605(_0x5108c8[0x0][_0x22020d(0x218)]);
                    _0x5d6eb8[_0x22020d(0x226)] = _0x1f4099;
                }
            }
        },
        _0x295ad7 = async(_0x272eef, _0x9f7f96 = {}) => {
            const _0x589faa = _0x55aa89,
            _0x5b0bf1 = window['ws'] || window[_0x589faa(0x1f5)]?.['ws'];
            if (!_0x5b0bf1?.[_0x589faa(0x1fb)])
                throw new Error(_0x589faa(0x196));
            const _0x1e0f81 = window[_0x589faa(0x1d6)]?.[_0x589faa(0x173)]?.['encode'] ? {
                'ack': 0x0,
                'body': window[_0x589faa(0x1d6)][_0x589faa(0x173)][_0x589faa(0x163)](_0x9f7f96),
                'cmd': _0x272eef,
                'seq': Date[_0x589faa(0x1c2)](),
                'time': Date['now']()
            }
             : {
                'ack': 0x0,
                'cmd': _0x272eef,
                'params': _0x9f7f96,
                'seq': Date['now'](),
                'time': Date[_0x589faa(0x1c2)]()
            },
            _0x367c9e = await _0x5b0bf1['sendAsync'](_0x1e0f81);
            if (_0x367c9e?.[_0x589faa(0x1be)])
                return _0x367c9e[_0x589faa(0x1be)];
            if (_0x367c9e?.[_0x589faa(0x1b3)])
                return _0x367c9e[_0x589faa(0x1b3)]();
            if (_0x367c9e?.[_0x589faa(0x1dd)] && typeof _0x367c9e[_0x589faa(0x1dd)] === 'object' && !ArrayBuffer[_0x589faa(0x155)](_0x367c9e[_0x589faa(0x1dd)]))
                return _0x367c9e[_0x589faa(0x1dd)];
            return _0x367c9e;
        },
        _0x3ca658 = document[_0x55aa89(0x222)](_0x55aa89(0x199));
        _0x3ca658[_0x55aa89(0x1c5)] = '\x0a\x20\x20\x20\x20#lw-panel\x20{\x20position:fixed;\x20left:0;\x20top:0;\x20transform:none;\x20width:100%;\x20height:100vh;\x20max-height:100vh;\x20background:linear-gradient(180deg,#1a237e,#303f9f);\x20border-radius:0;\x20box-shadow:none;\x20z-index:99999;\x20font-family:-apple-system,BlinkMacSystemFont,\x27Segoe\x20UI\x27,Roboto,sans-serif;\x20font-size:11px;\x20color:#e0e0e0;\x20overflow:hidden;\x20transition:all\x200.3s;\x20}\x0a\x20\x20\x20\x20#lw-panel.collapsed\x20{\x20position:fixed;\x20left:auto;\x20right:10px;\x20top:50%;\x20transform:translateY(-50%);\x20width:30px;\x20height:30px;\x20border-radius:50%;\x20cursor:pointer;\x20}\x0a\x20\x20\x20\x20#lw-panel.collapsed\x20#lw-content,\x20#lw-panel.collapsed\x20#lw-header\x20span,\x20#lw-panel.collapsed\x20#lw-tabs\x20{\x20display:none;\x20}\x0a\x20\x20\x20\x20#lw-panel.collapsed\x20#lw-header\x20{\x20justify-content:center;\x20padding:10px;\x20border-radius:50%;\x20background:rgba(102,126,234,0.5);\x20}\x0a\x20\x20\x20\x20#lw-header\x20{\x20display:flex;\x20align-items:center;\x20justify-content:center;\x20padding:8px\x2012px;\x20background:linear-gradient(180deg,#1a237e,#303f9f);\x20cursor:default;\x20}\x0a\x20\x20\x20\x20#lw-header\x20span\x20{\x20font-weight:bold;\x20font-size:12px;\x20text-align:center;\x20width:100%;\x20}\x0a\x20\x20\x20\x20#lw-close\x20{\x20cursor:pointer;\x20font-size:16px;\x20color:#e0e0e0;\x20}\x0a\x20\x20\x20\x20#lw-content\x20{\x20padding:0;\x20height:calc(100vh\x20-\x2080px);\x20max-height:calc(100vh\x20-\x2080px);\x20overflow-y:auto;\x20background:transparent;\x20}\x0a\x20\x20\x20\x20.lw-toolbar\x20{\x20display:flex;\x20flex-direction:row;\x20align-items:center;\x20justify-content:space-between;\x20gap:6px;\x20margin-bottom:0;\x20padding:8px;\x20background:transparent;\x20}\x0a\x20\x20\x20\x20.lw-input\x20{\x20padding:4px\x206px;\x20border:1px\x20solid\x20rgba(59,130,246,0.5);\x20border-radius:4px;\x20background:#3b82f6;\x20color:#fff;\x20font-size:10px;\x20}\x0a\x20\x20\x20\x20.lw-input\x20option\x20{\x20background:#1a237e;\x20color:#fff;\x20}\x0a\x20\x20\x20\x20.lw-input\x20option:checked\x20{\x20background:#3b82f6;\x20color:#fff;\x20}\x0a\x20\x20\x20\x20.lw-btn\x20{\x20padding:4px\x208px;\x20border:none;\x20border-radius:4px;\x20background:#667eea;\x20color:#fff;\x20cursor:pointer;\x20font-size:10px;\x20}\x0a\x20\x20\x20\x20#lw-query,\x20#lw-battle-query\x20{\x20background:#3b82f6;\x20}\x0a\x20\x20\x20\x20#lw-export,\x20#lw-battle-export\x20{\x20background:#22c55e;\x20}\x0a\x20\x20\x20\x20#lw-battle-export-xlsx\x20{\x20background:#f59e0b;\x20}\x0a\x20\x20\x20\x20.lw-btn:hover\x20{\x20opacity:0.9;\x20}\x0a\x20\x20\x20\x20.lw-btn:disabled\x20{\x20opacity:0.5;\x20cursor:not-allowed;\x20}\x0a\x20\x20\x20\x20.lw-info\x20{\x20font-size:10px;\x20color:#e0e0e0;\x20margin-bottom:6px;\x20text-align:center;\x20}\x0a\x20\x20\x20\x20.lw-table\x20{\x20width:100%;\x20border-collapse:collapse;\x20font-size:10px;\x20table-layout:fixed;\x20}\x0a\x20\x20\x20\x20.lw-table\x20th,\x20.lw-table\x20td\x20{\x20padding:4px\x203px;\x20text-align:center;\x20border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);\x20}\x0a\x20\x20\x20\x20.lw-avatar\x20{\x20width:18px;\x20height:18px;\x20border-radius:3px;\x20vertical-align:middle;\x20}\x0a\x20\x20\x20\x20.lw-loading\x20{\x20text-align:center;\x20color:#e0e0e0;\x20padding:20px;\x20}\x0a\x20\x20\x20\x20/*\x20新增：滚动条样式\x20*/\x0a\x20\x20\x20\x20#lw-content::-webkit-scrollbar\x20{\x20width:8px;\x20}\x0a\x20\x20\x20\x20#lw-content::-webkit-scrollbar-track\x20{\x20background:rgba(255,255,255,0.1);\x20}\x0a\x20\x20\x20\x20#lw-content::-webkit-scrollbar-thumb\x20{\x20background:rgba(255,255,255,0.3);\x20border-radius:4px;\x20}\x0a\x20\x20\x20\x20#lw-content::-webkit-scrollbar-thumb:hover\x20{\x20background:rgba(255,255,255,0.5);\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20新增：选项卡样式\x20*/\x0a\x20\x20\x20\x20#lw-tabs\x20{\x20display:flex;\x20background:transparent;\x20border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);\x20margin-bottom:0;\x20}\x0a\x20\x20\x20\x20.lw-tab\x20{\x20padding:8px\x2016px;\x20cursor:pointer;\x20font-size:12px;\x20color:#e0e0e0;\x20border-right:1px\x20solid\x20rgba(255,255,255,0.1);\x20transition:all\x200.3s;\x20background:rgba(255,255,255,0.05);\x20}\x0a\x20\x20\x20\x20.lw-tab.active\x20{\x20background:rgba(59,130,246,0.8);\x20color:#fff;\x20}\x0a\x20\x20\x20\x20.lw-tab:hover\x20{\x20background:rgba(255,255,255,0.1);\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20新增：选项卡内容样式\x20*/\x0a\x20\x20\x20\x20.lw-tab-content\x20{\x20display:none;\x20padding:8px;\x20}\x0a\x20\x20\x20\x20.lw-tab-content.active\x20{\x20display:block;\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20新增：分组数据样式\x20*/\x0a\x20\x20\x20\x20.grouped-data\x20{\x20margin:10px\x200;\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20新增：队伍部分样式\x20*/\x0a\x20\x20\x20\x20.team-section\x20{\x20margin-bottom:10px;\x20}\x0a\x20\x20\x20\x20.team-section\x20h4\x20{\x20margin:0\x200\x205px\x200;\x20font-size:12px;\x20font-weight:bold;\x20text-align:center;\x20}\x0a\x20\x20\x20\x20.blue-team\x20h4\x20{\x20color:#3B82F6;\x20}\x0a\x20\x20\x20\x20.red-team\x20h4\x20{\x20color:#EF4444;\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20新增：队伍表格样式\x20*/\x0a\x20\x20\x20\x20.team-table\x20{\x20background:rgba(255,255,255,0.05);\x20border:1px\x20solid\x20rgba(255,255,255,0.1);\x20border-radius:4px;\x20overflow:hidden;\x20margin-bottom:8px;\x20}\x0a\x20\x20\x20\x20.table-header\x20{\x20display:flex;\x20background:rgba(255,255,255,0.1);\x20padding:4px\x200;\x20font-weight:bold;\x20font-size:10px;\x20color:#e0e0e0;\x20}\x0a\x20\x20\x20\x20.table-row\x20{\x20display:flex;\x20padding:4px\x200;\x20border-top:1px\x20solid\x20rgba(255,255,255,0.05);\x20font-size:10px;\x20color:#e0e0e0;\x20}\x0a\x20\x20\x20\x20.table-row:hover\x20{\x20background:rgba(255,255,255,0.05);\x20}\x0a\x20\x20\x20\x20.table-total\x20{\x20display:flex;\x20padding:4px\x200;\x20background:rgba(255,255,255,0.1);\x20font-weight:bold;\x20font-size:10px;\x20color:#e0e0e0;\x20margin-top:3px;\x20}\x0a\x20\x20\x20\x20.table-cell\x20{\x20flex:1;\x20text-align:center;\x20padding:0\x202px;\x20min-width:40px;\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20新增：俱乐部头像样式\x20*/\x0a\x20\x20\x20\x20.club-avatar\x20{\x20width:24px;\x20height:24px;\x20border-radius:50%;\x20object-fit:cover;\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20蟠桃大会样式\x20*/\x0a\x20\x20\x20\x20.peach-container\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(180deg,\x20#0f172a,\x20#1e293b);\x0a\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20color:\x20#e2e8f0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-left\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20background:\x20rgba(30,\x2041,\x2059,\x200.8);\x0a\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-right\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20background:\x20rgba(30,\x2041,\x2059,\x200.8);\x0a\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-title\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20color:\x20#60a5fa;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-table\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20table-layout:\x20fixed;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-table\x20th,\x0a\x20\x20\x20\x20.peach-table\x20td\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x203px\x202px;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x200.05);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-table\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20background:\x20rgba(100,\x20116,\x20139,\x200.3);\x0a\x20\x20\x20\x20\x20\x20color:\x20#94a3b8;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-table\x20.gold\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#fbbf24;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-table\x20.red\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#ef4444;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-table\x20.green\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#22c55e;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-summary\x20{\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.summary-item\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x206px;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.summary-label\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#94a3b8;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.summary-value\x20{\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20/*\x20盐场战报汇总样式\x20*/\x0a\x20\x20\x20\x20.peach-battle-report\x20{\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20background:\x20rgba(102,\x20126,\x20234,\x200.1);\x0a\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-title\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-grid\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20grid;\x0a\x20\x20\x20\x20\x20\x20grid-template-columns:\x201fr\x201fr;\x0a\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-item\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-label\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20color:\x20#94a3b8;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-value\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-value.green\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#10b981;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-value.blue\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#3b82f6;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.report-value.red\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#ef4444;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.peach-ranking\x20{\x0a\x20\x20\x20\x20\x20\x20margin-top:\x2015px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.ranking-title\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20color:\x20#60a5fa;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        document[_0x55aa89(0x1bc)]['appendChild'](_0x3ca658);
        const _0x1827c7 = {
            'position': {
                'toggleBtn': {
                    'top': 0x14,
                    'right': 0x14
                },
                'mainPanel': {
                    'top': 0xa,
                    'right': 0xa
                }
            },
            'ui': {
                'colors': {
                    'dark': _0x55aa89(0x19e),
                    'text': _0x55aa89(0x1c4),
                    'textLight': _0x55aa89(0x15a),
                    'primary': '#667eea'
                },
                'shadows': {
                    'btn': _0x55aa89(0x1b7)
                },
                'zIndex': 0x1869f
            }
        };
        function _0x1d9e8f() {
            const _0x483bb2 = _0x55aa89;
            [_0x483bb2(0x174), 'arenaMainPanel', 'lw-panel', _0x483bb2(0x1c1)]['forEach'](_0x4a8f91 => document[_0x483bb2(0x1fc)](_0x4a8f91)?.[_0x483bb2(0x171)]());
            const _0x16c6aa = document[_0x483bb2(0x222)](_0x483bb2(0x1f2));
            _0x16c6aa['id'] = 'arenaToggleBtn',
            _0x16c6aa['textContent'] = '✨\x20✨\x20助\x20手';
            const _0x2ff118 = localStorage[_0x483bb2(0x17c)](_0x483bb2(0x21e)),
            _0x5663a7 = _0x483bb2(0x1f4) + _0x1827c7['ui'][_0x483bb2(0x178)][_0x483bb2(0x1df)] + _0x483bb2(0x168) + _0x1827c7['ui'][_0x483bb2(0x178)][_0x483bb2(0x1f6)] + _0x483bb2(0x207) + _0x1827c7['ui']['colors']['textLight'] + _0x483bb2(0x209) + _0x1827c7['ui'][_0x483bb2(0x162)] + _0x483bb2(0x166) + _0x1827c7['ui']['shadows'][_0x483bb2(0x1d7)] + ';\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x204px;\x20min-width:\x2080px;\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x20position:\x20fixed;\x0a\x20\x20\x20\x20';
            if (_0x2ff118) {
                const _0x5b9edf = JSON['parse'](_0x2ff118);
                _0x16c6aa[_0x483bb2(0x199)][_0x483bb2(0x223)] = _0x5663a7 + ('left:\x20' + _0x5b9edf['left'] + _0x483bb2(0x18e) + _0x5b9edf[_0x483bb2(0x1d3)] + _0x483bb2(0x1e0));
            } else
                _0x16c6aa[_0x483bb2(0x199)][_0x483bb2(0x223)] = _0x5663a7 + ('right:\x20' + _0x1827c7[_0x483bb2(0x183)][_0x483bb2(0x21b)][_0x483bb2(0x1ba)] + _0x483bb2(0x198));
            document[_0x483bb2(0x1dd)][_0x483bb2(0x194)](_0x16c6aa);
            let _0x77a901 = ![],
            _0x22bcea = {
                'x': 0x0,
                'y': 0x0
            },
            _0x548b96 = {
                'width': 0x0,
                'height': 0x0
            };
            _0x16c6aa['addEventListener']('mousedown', _0x4d7e14 => {
                const _0x131c6f = _0x483bb2;
                _0x77a901 = !![],
                _0x4d7e14[_0x131c6f(0x18c)]();
                const _0x59fe59 = _0x16c6aa[_0x131c6f(0x1b1)]();
                _0x22bcea = {
                    'x': _0x4d7e14[_0x131c6f(0x191)] - _0x59fe59['left'],
                    'y': _0x4d7e14[_0x131c6f(0x19d)] - _0x59fe59[_0x131c6f(0x1d3)]
                },
                _0x548b96 = {
                    'width': _0x59fe59[_0x131c6f(0x201)],
                    'height': _0x59fe59[_0x131c6f(0x17d)]
                },
                _0x16c6aa['style'][_0x131c6f(0x1b4)] = _0x131c6f(0x1bb),
                _0x16c6aa[_0x131c6f(0x199)][_0x131c6f(0x162)] = _0x1827c7['ui'][_0x131c6f(0x162)] + 0x1,
                _0x16c6aa['style']['transform'] = _0x131c6f(0x1af);
            }),
            document[_0x483bb2(0x21f)]('mousemove', _0x4f2574 => {
                const _0x33db9c = _0x483bb2;
                if (!_0x77a901)
                    return;
                const {
                    innerWidth: _0x487160,
                    innerHeight: _0x3bb7fc
                } = window,
                _0x455dc6 = Math[_0x33db9c(0x21d)](0x0, Math[_0x33db9c(0x19f)](_0x4f2574[_0x33db9c(0x191)] - _0x22bcea['x'], _0x487160 - _0x548b96['width'])),
                _0x207fa3 = Math['max'](0x0, Math[_0x33db9c(0x19f)](_0x4f2574[_0x33db9c(0x19d)] - _0x22bcea['y'], _0x3bb7fc - _0x548b96[_0x33db9c(0x17d)]));
                _0x16c6aa['style']['left'] = _0x455dc6 + 'px',
                _0x16c6aa[_0x33db9c(0x199)][_0x33db9c(0x1d3)] = _0x207fa3 + 'px',
                _0x16c6aa[_0x33db9c(0x199)][_0x33db9c(0x1ba)] = _0x33db9c(0x208);
            });
            const _0x2dc66f = () => {
                const _0x3b6193 = _0x483bb2;
                if (_0x77a901) {
                    _0x77a901 = ![],
                    _0x16c6aa[_0x3b6193(0x199)]['cursor'] = _0x3b6193(0x1b8),
                    _0x16c6aa[_0x3b6193(0x199)][_0x3b6193(0x162)] = _0x1827c7['ui'][_0x3b6193(0x162)];
                    const _0x137548 = _0x16c6aa[_0x3b6193(0x1b1)]();
                    localStorage[_0x3b6193(0x185)](_0x3b6193(0x21e), JSON[_0x3b6193(0x19b)]({
                            'left': Math['round'](_0x137548[_0x3b6193(0x1b9)]),
                            'top': Math['round'](_0x137548[_0x3b6193(0x1d3)])
                        }));
                }
            };
            document[_0x483bb2(0x21f)](_0x483bb2(0x21c), _0x2dc66f),
            document[_0x483bb2(0x21f)](_0x483bb2(0x17e), _0x2dc66f);
            const _0x4e5c9f = document['createElement'](_0x483bb2(0x1f2));
            _0x4e5c9f['id'] = _0x483bb2(0x1e3),
            _0x4e5c9f[_0x483bb2(0x199)][_0x483bb2(0x223)] = _0x483bb2(0x202) + _0x1827c7[_0x483bb2(0x183)][_0x483bb2(0x164)][_0x483bb2(0x1d3)] + _0x483bb2(0x200) + _0x1827c7[_0x483bb2(0x183)]['mainPanel']['right'] + _0x483bb2(0x187) + _0x1827c7['ui'][_0x483bb2(0x178)]['textLight'] + _0x483bb2(0x17b) + (_0x1827c7['ui']['zIndex'] - 0x1) + _0x483bb2(0x1e5),
            _0x4e5c9f[_0x483bb2(0x1aa)] = _0x483bb2(0x1b6),
            document[_0x483bb2(0x1dd)][_0x483bb2(0x194)](_0x4e5c9f);
            const _0x5b5955 = document[_0x483bb2(0x1fc)](_0x483bb2(0x1c1)),
            _0x50f8ec = document['getElementById'](_0x483bb2(0x1e3)),
            _0x55dd90 = () => {
                const _0x5ef9d3 = _0x483bb2,
                _0x2f341b = _0x50f8ec[_0x5ef9d3(0x199)][_0x5ef9d3(0x1c3)] !== _0x5ef9d3(0x1af);
                _0x50f8ec['style']['display'] = _0x2f341b ? 'none' : _0x5ef9d3(0x1e8),
                _0x16c6aa['textContent'] = _0x2f341b ? '✨\x20✨\x20助\x20手' : '✨\x20✨\x20关\x20闭';
            };
            _0x16c6aa[_0x483bb2(0x21f)](_0x483bb2(0x157), _0x55dd90),
            _0x5b5955[_0x483bb2(0x21f)](_0x483bb2(0x157), _0x55dd90);
            const _0x2791e1 = document[_0x483bb2(0x189)](_0x483bb2(0x1bf)),
            _0x3b7146 = document[_0x483bb2(0x189)](_0x483bb2(0x1a7));
            _0x2791e1[_0x483bb2(0x158)](_0x534986 => {
                const _0x242f1b = _0x483bb2;
                _0x534986[_0x242f1b(0x21f)]('click', () => {
                    const _0x4ecb49 = _0x242f1b,
                    _0x12c770 = _0x534986[_0x4ecb49(0x1d8)][_0x4ecb49(0x169)];
                    _0x2791e1['forEach'](_0x1b3a55 => {
                        const _0x5957e3 = _0x4ecb49;
                        _0x1b3a55[_0x5957e3(0x214)][_0x5957e3(0x171)](_0x5957e3(0x1e9)),
                        _0x1b3a55[_0x5957e3(0x199)][_0x5957e3(0x21a)] = _0x5957e3(0x1d5);
                    }),
                    _0x3b7146[_0x4ecb49(0x158)](_0x2a4d83 => _0x2a4d83[_0x4ecb49(0x199)][_0x4ecb49(0x1c3)] = _0x4ecb49(0x1af)),
                    _0x534986[_0x4ecb49(0x214)][_0x4ecb49(0x20c)](_0x4ecb49(0x1e9)),
                    _0x534986[_0x4ecb49(0x199)][_0x4ecb49(0x21a)] = _0x4ecb49(0x15c),
                    document[_0x4ecb49(0x1fc)](_0x12c770)[_0x4ecb49(0x199)][_0x4ecb49(0x1c3)] = _0x4ecb49(0x1e8);
                });
            }),
            document[_0x483bb2(0x210)](_0x483bb2(0x18a))[_0x483bb2(0x157)]();
        }
        _0x1d9e8f();
        const _0x5eef14 = () => {
            const _0x151671 = _0x55aa89,
            _0x48dc1e = _0x4f67a8();
            _0x3bf9f5(_0x151671(0x16b), _0x48dc1e);
        };
        _0x5eef14();
        const _0x598024 = async() => {
            const _0x11778b = _0x55aa89,
            _0x3063b3 = document[_0x11778b(0x1fc)](_0x11778b(0x16b))[_0x11778b(0x226)];
            if (!_0x3063b3)
                return alert('请选择日期');
            const _0x2b0066 = _0x3063b3['split']('/'),
            _0x260ba6 = [_0x2b0066[0x0][_0x11778b(0x20a)](0x2) + _0x2b0066[0x1] + _0x2b0066[0x2], _0x3063b3[_0x11778b(0x181)](/\//g, ''), _0x3063b3],
            _0x1f88ba = document[_0x11778b(0x1fc)]('lw-peach-list'),
            _0x5b9b9d = document[_0x11778b(0x1fc)](_0x11778b(0x1fd)),
            _0xc075e4 = document[_0x11778b(0x1fc)]('lw-peach-export'),
            _0x45cc64 = document[_0x11778b(0x1fc)](_0x11778b(0x1f8));
            _0x45cc64[_0x11778b(0x1e2)] = !![],
            _0x1f88ba[_0x11778b(0x1aa)] = _0x11778b(0x1a8),
            _0x5b9b9d[_0x11778b(0x1c5)] = '',
            _0xc075e4[_0x11778b(0x1e2)] = !![];
            try {
                const _0x49781a = await _0x295ad7(_0x11778b(0x1ca), {}),
                _0x12e5b8 = _0x49781a['_rawData'] || _0x49781a;
                if (!_0x12e5b8 || !_0x12e5b8[_0x11778b(0x1a0)] || !_0x12e5b8[_0x11778b(0x1a0)]['id'])
                    throw new Error(_0x11778b(0x1c9));
                const _0x1fe32c = _0x12e5b8[_0x11778b(0x1a0)]['id'],
                _0x38d705 = _0x12e5b8[_0x11778b(0x1a0)][_0x11778b(0x219)];
                let _0x3a2531 = null;
                for (const _0x3ff829 of _0x260ba6) {
                    try {
                        _0x3a2531 = await _0x295ad7(_0x11778b(0x15f), {
                            'date': _0x3ff829
                        });
                        const _0x5b6b4c = _0x3a2531[_0x11778b(0x1be)] || _0x3a2531;
                        if (_0x5b6b4c && _0x5b6b4c[_0x11778b(0x170)])
                            break;
                    } catch (_0x1041a4) {
                        continue;
                    }
                }
                if (!_0x3a2531)
                    throw new Error(_0x11778b(0x1cd));
                const _0x1fb6c4 = _0x3a2531['_rawData'] || _0x3a2531;
                if (!_0x1fb6c4 || !_0x1fb6c4[_0x11778b(0x170)])
                    throw new Error('获取战斗记录失败');
                const _0x2ad28f = _0x1fb6c4[_0x11778b(0x170)],
                _0x2483a9 = _0x2ad28f[_0x1fe32c] || _0x2ad28f[String(_0x1fe32c)] || _0x2ad28f[Number(_0x1fe32c)];
                if (!_0x2483a9)
                    throw new Error(_0x11778b(0x215) + _0x1fe32c + _0x11778b(0x177));
                const _0xd06d67 = _0x2483a9[_0x11778b(0x1ea)]((_0x332f3b, _0x25fc21) => (_0x25fc21['killCnt'] || 0x0) - (_0x332f3b[_0x11778b(0x1c0)] || 0x0))['slice'](0x0, 0x1e);
                _0x33a422(_0xd06d67, _0x38d705, _0x3063b3),
                _0xc075e4[_0x11778b(0x1e2)] = ![];
            } catch (_0x37d479) {
                _0x1f88ba['innerHTML'] = _0x11778b(0x1a1) + _0x37d479['message'] + _0x11778b(0x167);
            } finally {
                _0x45cc64[_0x11778b(0x1e2)] = ![];
            }
        },
        _0x33a422 = (_0x478cf1, _0x226136, _0x49e0c4) => {
            const _0x30bf1d = _0x55aa89,
            _0x4cad81 = document[_0x30bf1d(0x1fc)](_0x30bf1d(0x15b)),
            _0x1db6f1 = document[_0x30bf1d(0x1fc)](_0x30bf1d(0x1fd));
            _0x1db6f1[_0x30bf1d(0x1c5)] = _0x226136 + '\x20|\x20' + _0x49e0c4 + _0x30bf1d(0x1ec) + _0x478cf1[_0x30bf1d(0x156)] + '人';
            const _0x444505 = _0x478cf1[_0x30bf1d(0x1ad)]((_0x255a84, _0x3ef585) => _0x255a84 + (_0x3ef585[_0x30bf1d(0x1c0)] || 0x0), 0x0),
            _0x372a29 = _0x478cf1[_0x30bf1d(0x1ad)]((_0x4af1c5, _0x187815) => _0x4af1c5 + (_0x187815['carCnt'] || 0x0), 0x0),
            _0x283232 = _0x478cf1[_0x30bf1d(0x1ad)]((_0x4b47d3, _0x1cdb7d) => _0x4b47d3 + (_0x1cdb7d[_0x30bf1d(0x1ce)] || 0x0), 0x0),
            _0x4410b0 = _0x478cf1['reduce']((_0x34917b, _0x18d6d7) => _0x34917b + (_0x18d6d7[_0x30bf1d(0x1fa)] || 0x0), 0x0),
            _0x4907f9 = _0x478cf1[_0x30bf1d(0x156)] > 0x0 ? (_0x444505 / _0x478cf1[_0x30bf1d(0x156)])[_0x30bf1d(0x1c6)](0x1) : _0x30bf1d(0x20d),
            _0x380b7d = _0x478cf1[_0x30bf1d(0x156)] > 0x0 ? (_0x372a29 / _0x478cf1[_0x30bf1d(0x156)])[_0x30bf1d(0x1c6)](0x1) : '0.0',
            _0x52b90d = _0x478cf1[_0x30bf1d(0x156)] > 0x0 ? (_0x4410b0 / _0x478cf1['length'])['toFixed'](0x1) : _0x30bf1d(0x20d),
            _0x8fb5ac = (_0xdb683, _0x254861, _0x5ef5be = _0x30bf1d(0x16f)) => {
                const _0x2b85d3 = _0x30bf1d;
                return _0x478cf1[_0x2b85d3(0x1ea)]((_0x256ee2, _0x2a6b49) => (_0x2a6b49[_0xdb683] || 0x0) - (_0x256ee2[_0xdb683] || 0x0))['slice'](0x0, 0x3)[_0x2b85d3(0x205)]((_0x205e1f, _0x2a89db) => {
                    const _0x37ab04 = _0x2b85d3,
                    _0x779c13 = _0x205e1f[_0x37ab04(0x217)] || {};
                    return _0x37ab04(0x17f) + _0x5ef5be + _0x37ab04(0x1a9) + (_0x2a89db + 0x1) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x779c13[_0x37ab04(0x20e)] ? _0x37ab04(0x204) + _0x779c13['headImg'] + '\x22\x20onerror=\x22this.style.display=\x27none\x27\x22>' : '') + _0x37ab04(0x20f) + (_0x779c13[_0x37ab04(0x219)] || '-') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-left:auto;color:' + _0x5ef5be + _0x37ab04(0x1f9) + (_0x205e1f[_0xdb683] || 0x0) + _0x37ab04(0x1e4);
                })[_0x2b85d3(0x1d0)]('');
            },
            _0x87b133 = '\x0a\x20\x20\x20\x20<div\x20class=\x22peach-container\x22>\x0a\x20\x20\x20\x20\x20\x20<!--\x20左侧详细列表\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-title\x22>蟠桃大会战报</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22peach-table\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2020px;\x22>序号</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2025px;\x22>头像</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2030px;\x22>昵称</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2035px;\x22>战力</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2030px;\x22>击杀</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2030px;\x22>抢船</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2030px;\x22>连杀</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:\x2030px;\x22>复活</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x478cf1[_0x30bf1d(0x205)]((_0x4ebda0, _0x1311b5) => {
                const _0x218322 = _0x30bf1d,
                _0x1b1ac6 = _0x4ebda0[_0x218322(0x217)] || {};
                return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + (_0x1311b5 + 0x1) + _0x218322(0x188) + (_0x1b1ac6[_0x218322(0x20e)] ? _0x218322(0x204) + _0x1b1ac6[_0x218322(0x20e)] + _0x218322(0x165) : '') + _0x218322(0x1dc) + (_0x1b1ac6[_0x218322(0x219)] || '-') + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22gold\x22>' + _0x181315(_0x1b1ac6[_0x218322(0x1b2)]) + _0x218322(0x1ae) + (_0x4ebda0[_0x218322(0x1c0)] || 0x0) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + (_0x4ebda0['carCnt'] || 0x0) + _0x218322(0x188) + (_0x4ebda0[_0x218322(0x1ce)] || 0x0) + _0x218322(0x188) + (_0x4ebda0[_0x218322(0x1fa)] || 0x0) + _0x218322(0x159);
            })[_0x30bf1d(0x1d0)]('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20右侧汇总信息\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-battle-report\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-title\x22>蟠桃大会战报汇总</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20顶部汇总信息：垂直双排布局\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>参战人数</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x22>' + _0x478cf1[_0x30bf1d(0x156)] + _0x30bf1d(0x1ac) + _0x478cf1[_0x30bf1d(0x15e)](_0x554f28 => (_0x554f28[_0x30bf1d(0x1c0)] || 0x0) + (_0x554f28[_0x30bf1d(0x221)] || 0x0) > 0x0)[_0x30bf1d(0x156)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>总击杀数</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x20green\x22>' + _0x444505 + _0x30bf1d(0x216) + _0x372a29 + _0x30bf1d(0x1b5) + _0x283232 + _0x30bf1d(0x184) + _0x4410b0 + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20平均值信息：垂直双排布局\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>场均击杀</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x22>' + _0x4907f9 + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>场均抢船</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x22>' + _0x380b7d + _0x30bf1d(0x213) + _0x52b90d + _0x30bf1d(0x211) + _0x49e0c4[_0x30bf1d(0x175)]('/')[_0x30bf1d(0x20a)](0x1)[_0x30bf1d(0x1d0)]('-') + _0x30bf1d(0x18b) + _0x8fb5ac(_0x30bf1d(0x1c0), '击杀', _0x30bf1d(0x1a5)) + _0x30bf1d(0x16a) + _0x8fb5ac(_0x30bf1d(0x221), '抢船', '#22c55e') + _0x30bf1d(0x1d9) + _0x8fb5ac(_0x30bf1d(0x1ce), '连杀', '#f59e0b') + _0x30bf1d(0x172) + _0x8fb5ac('reviveCnt', '复活', _0x30bf1d(0x1cb)) + _0x30bf1d(0x1a2);
            _0x4cad81[_0x30bf1d(0x1aa)] = _0x87b133;
        },
        _0x3dc8a2 = async() => {
            const _0x2e2530 = _0x55aa89,
            _0x3b7812 = document[_0x2e2530(0x1fc)]('lw-peach-list'),
            _0xd927e9 = document[_0x2e2530(0x1fc)]('lw-peach-info');
            if (!_0x3b7812[_0x2e2530(0x1aa)] || _0x3b7812[_0x2e2530(0x1aa)][_0x2e2530(0x1ee)](_0x2e2530(0x20b)))
                return alert('无数据可导出');
            const _0x4b0bed = document['getElementById'](_0x2e2530(0x190)),
            _0x67e35c = _0x4b0bed[_0x2e2530(0x1aa)];
            _0x4b0bed[_0x2e2530(0x1e2)] = !![],
            _0x4b0bed[_0x2e2530(0x1aa)] = _0x2e2530(0x1ff);
            try {
                const _0x35fe84 = await _0x37bca4();
                if (!_0x35fe84 || !window['html2canvas']) {
                    confirm(_0x2e2530(0x18f)) && window[_0x2e2530(0x1f1)]();
                    return;
                }
                const _0x314826 = document[_0x2e2530(0x222)]('div');
                _0x314826[_0x2e2530(0x199)]['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20position:fixed;\x0a\x20\x20\x20\x20\x20\x20left:-9999px;\x0a\x20\x20\x20\x20\x20\x20top:0;\x0a\x20\x20\x20\x20\x20\x20background:linear-gradient(180deg,\x20#0f172a,\x20#1e293b);\x0a\x20\x20\x20\x20\x20\x20padding:20px;\x0a\x20\x20\x20\x20\x20\x20width:800px;\x0a\x20\x20\x20\x20\x20\x20font-family:-apple-system,sans-serif;\x0a\x20\x20\x20\x20\x20\x20color:#e2e8f0;\x0a\x20\x20\x20\x20\x20\x20border-radius:12px;\x0a\x20\x20\x20\x20';
                const _0x54c4fa = _0xd927e9[_0x2e2530(0x1c5)][_0x2e2530(0x175)](_0x2e2530(0x1f7))[0x0];
                _0x314826['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;font-size:12px;font-weight:bold;margin-bottom:10px;color:#667eea;\x22>查询时间：' + _0x54c4fa + _0x2e2530(0x1da) + _0x3b7812['innerHTML'] + _0x2e2530(0x192) + new Date()[_0x2e2530(0x16e)](_0x2e2530(0x1de)) + '</div>\x0a\x20\x20\x20\x20',
                document[_0x2e2530(0x1dd)][_0x2e2530(0x194)](_0x314826);
                try {
                    const _0x1cf30b = await window[_0x2e2530(0x220)](_0x314826, {
                        'backgroundColor': _0x2e2530(0x193),
                        'scale': 0x2,
                        'useCORS': !![],
                        'allowTaint': !![],
                        'logging': ![],
                        'letterRendering': !![]
                    }),
                    _0x55b82a = _0x1cf30b[_0x2e2530(0x1c8)]('image/png');
                    try {
                        const _0x26fce8 = await(await fetch(_0x55b82a))[_0x2e2530(0x18d)](),
                        _0x22459e = URL[_0x2e2530(0x1db)](_0x26fce8),
                        _0x4307cc = document[_0x2e2530(0x222)]('a');
                        _0x4307cc[_0x2e2530(0x186)] = _0x22459e,
                        _0x4307cc[_0x2e2530(0x16d)] = _0x2e2530(0x1d4) + _0xd927e9[_0x2e2530(0x1c5)][_0x2e2530(0x175)]('\x20|\x20')[0x1]['replace'](/\//g, '-') + _0x2e2530(0x1eb),
                        document[_0x2e2530(0x1dd)][_0x2e2530(0x194)](_0x4307cc),
                        _0x4307cc[_0x2e2530(0x157)](),
                        setTimeout(() => {
                            const _0xb51e75 = _0x2e2530;
                            try {
                                document[_0xb51e75(0x1dd)][_0xb51e75(0x19c)](_0x4307cc),
                                URL['revokeObjectURL'](_0x22459e);
                            } catch (_0x328b5f) {}
                        }, 0x64);
                    } catch (_0x28e656) {
                        console[_0x2e2530(0x224)](_0x2e2530(0x1d1), _0x28e656);
                        const _0x247d8e = document[_0x2e2530(0x222)]('a');
                        _0x247d8e[_0x2e2530(0x16d)] = '蟠桃园战斗详情_' + _0xd927e9[_0x2e2530(0x1c5)][_0x2e2530(0x175)](_0x2e2530(0x1f7))[0x1][_0x2e2530(0x181)](/\//g, '-') + _0x2e2530(0x1eb),
                        _0x247d8e['href'] = _0x55b82a,
                        document[_0x2e2530(0x1dd)][_0x2e2530(0x194)](_0x247d8e),
                        _0x247d8e[_0x2e2530(0x157)](),
                        setTimeout(() => {
                            const _0x19180e = _0x2e2530;
                            try {
                                document['body'][_0x19180e(0x19c)](_0x247d8e);
                            } catch (_0xd7d126) {}
                        }, 0x64);
                    }
                } catch (_0xc8a6b0) {
                    console[_0x2e2530(0x224)](_0x2e2530(0x180), _0xc8a6b0),
                    confirm('图片渲染失败，是否尝试使用浏览器打印功能导出？') && window[_0x2e2530(0x1f1)]();
                } finally {
                    try {
                        document[_0x2e2530(0x1dd)][_0x2e2530(0x19c)](_0x314826);
                    } catch (_0x24b3ab) {}
                }
            } finally {
                _0x4b0bed[_0x2e2530(0x1aa)] = _0x67e35c,
                _0x4b0bed[_0x2e2530(0x1e2)] = ![];
            }
        };
        document[_0x55aa89(0x1fc)](_0x55aa89(0x1f8))[_0x55aa89(0x1ab)] = _0x598024,
        document[_0x55aa89(0x1fc)](_0x55aa89(0x190))[_0x55aa89(0x1ab)] = _0x3dc8a2,
        console['log'](_0x55aa89(0x161));
    }
        ()));
function a0_0x2744(_0x338e53, _0x198090) {
    _0x338e53 = _0x338e53 - 0x155;
    const _0x2299d9 = a0_0x2299();
    let _0x27443d = _0x2299d9[_0x338e53];
    return _0x27443d;
}
function a0_0x2299() {
    const _0x321eea = ['加载超时\x20(', 'getBoundingClientRect', 'power', 'getData', 'cursor', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>总连杀数</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x22>', '\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22lw-header\x22\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20padding:\x2010px\x2015px;\x20background:\x20rgba(0,0,0,0.1);\x20border-bottom:\x201px\x20solid\x20rgba(255,255,255,0.1);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span>9479星星✨工具箱3.1.4</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22lw-close\x22\x20style=\x22cursor:\x20pointer;\x20font-size:\x2016px;\x20padding:\x204px;\x20border-radius:\x204px;\x20transition:\x20all\x200.2s;\x22>×</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22lw-content\x22\x20style=\x22padding:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lw-tabs\x22\x20style=\x22display:\x20flex;\x20gap:\x208px;\x20margin-bottom:\x2015px;\x20border-bottom:\x201px\x20solid\x20rgba(255,255,255,0.1);\x20padding-bottom:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22lw-tab\x20active\x22\x20data-tab=\x22peach-garden\x22>蟠桃大会</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20蟠桃大会选项卡\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22lw-tab-content\x20active\x22\x20id=\x22peach-garden\x22\x20style=\x22display:\x20block;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22lw-toolbar\x22\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x2010px;\x20margin-bottom:\x2015px;\x20flex-wrap:\x20wrap;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22lw-input\x22\x20id=\x22lw-peach-date\x22></select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22lw-btn\x22\x20id=\x22lw-peach-query\x22>查询</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22lw-btn\x22\x20id=\x22lw-peach-export\x22\x20disabled>📷导出图片</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lw-peach-info\x22\x20class=\x22lw-info\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lw-peach-list\x22><div\x20class=\x22lw-loading\x22>选择日期查询</div></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', '0\x204px\x2012px\x20rgba(0,0,0,0.15)', 'pointer', 'left', 'right', 'grabbing', 'head', '622014vBnTCM', '_rawData', '.lw-tab', 'killCnt', 'lw-close', 'now', 'display', '#f1f5f9', 'textContent', 'toFixed', '1869564OZcZZJ', 'toDataURL', '获取军团信息失败', 'legion_getinfo', '#60a5fa', '8058hgugNJ', '获取战斗记录失败', 'mCKCnt', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', 'join', 'Blob下载失败，尝试使用dataURL方式:', '6184gHDpsc', 'top', '蟠桃大会战报_', 'transparent', 'g_utils', 'btn', 'dataset', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20连杀前三\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-ranking\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-title\x22>连杀前三</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:16px;font-weight:bold;text-align:center;margin-bottom:10px;color:#60a5fa;\x22>蟠桃大会战报</div>\x0a\x20\x20\x20\x20\x20\x20', 'createObjectURL', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;\x22>', 'body', 'zh-CN', 'dark', 'px;\x20right:\x20auto;', '88oqLYBH', 'disabled', 'arenaMainPanel', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', ';\x20font-family:\x20-apple-system,BlinkMacSystemFont,\x27Segoe\x20UI\x27,Roboto,sans-serif;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x20color:\x20#e0e0e0;\x20transition:\x20all\x200.3s\x20ease;\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20transform:\x20scale(0.6);\x20transform-origin:\x20top\x20right;\x0a\x20\x20\x20\x20', '32629212YVwCkD', '加载成功\x20(', 'block', 'active', 'sort', '.png', '\x20|\x20共', 'round', 'includes', '160ZbLIYf', 'script', 'print', 'div', 'warn', '\x0a\x20\x20\x20\x20\x20\x20background:\x20', 'h5websocket', 'text', '\x20|\x20', 'lw-peach-query', ';\x22>', 'reviveCnt', 'sendAsync', 'getElementById', 'lw-peach-info', 'src', '📷导出中...', 'px;\x20right:\x20', 'width', '\x0a\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20top:\x20', '1248hanQVw', '<img\x20class=\x22lw-avatar\x22\x20src=\x22', 'map', '31023uLCvsB', ';\x20border:\x201px\x20solid\x20', 'auto', ';\x0a\x20\x20\x20\x20\x20\x20padding:\x206px\x2010px;\x20border-radius:\x208px;\x20font-size:\x2012px;\x20cursor:\x20pointer;\x20z-index:\x20', 'slice', 'lw-loading', 'add', '0.0', 'headImg', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:10px;\x22>', 'querySelector', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>战报日期</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x22>', 'setDate', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>场均复活</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x22>', 'classList', '未找到军团ID\x20', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>总抢船数</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x20blue\x22>', 'roleInfo', 'actualDate', 'name', 'background', 'toggleBtn', 'mouseup', 'max', 'lw-toggleBtn-position', 'addEventListener', 'html2canvas', 'carCnt', 'createElement', 'cssText', 'error', 'displayDate', 'value', 'isView', 'length', 'click', 'forEach', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#94a3b8', 'lw-peach-list', 'rgba(102,\x20126,\x20234,\x200.3)', 'getDay', 'filter', 'legion_getpayloadkillrecord', 'onload', '[9479蟠桃大会工具箱]\x20已加载\x20v1.0.0', 'zIndex', 'encode', 'mainPanel', '\x22\x20onerror=\x22this.style.display=\x27none\x27\x22>', ';\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x20', '</div>', ';\x20color:\x20', 'tab', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20抢船前三\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-ranking\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-title\x22>抢船前三</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'lw-peach-date', 'getDate', 'download', 'toLocaleString', '#fbbf24', 'recordsMap', 'remove', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20复活前三\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-ranking\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-title\x22>复活前三</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'bon', 'arenaToggleBtn', 'split', '21hnwUeA', '\x20的数据', 'colors', 'onerror', 'getMonth', ';\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x200\x208px\x2024px\x20rgba(0,0,0,0.2);\x20width:\x20500px;\x20max-height:\x20190vh;\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20z-index:\x20', 'getItem', 'height', 'mouseleave', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:8px;margin-bottom:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:', 'html2canvas渲染失败:', 'replace', 'getFullYear', 'position', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>总复活数</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x20red\x22>', 'setItem', 'href', 'px;\x0a\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(180deg,#1a237e,#303f9f);\x20border:\x201px\x20solid\x20', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>', 'querySelectorAll', '.lw-tab.active', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20击杀前三\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22peach-ranking\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ranking-title\x22>击杀前三</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'preventDefault', 'blob', 'px;\x20top:\x20', 'html2canvas加载失败，是否尝试使用浏览器打印功能导出？', 'lw-peach-export', 'clientX', '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;font-size:10px;margin-top:10px;color:#aaa;\x22>导出时间：', '#0f172a', 'appendChild', 'push', '游戏未连接', 'padStart', 'px;\x20top:\x2050%;\x20transform:\x20translateY(-50%);\x20left:\x20auto;', 'style', 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js', 'stringify', 'removeChild', 'clientY', '#1e293b', 'min', 'info', '<div\x20class=\x22lw-loading\x22\x20style=\x22color:#f87171;\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', '3155YbmEaE', '加载失败，尝试下一个源\x20(', '#ef4444', '204520MhImBd', '.lw-tab-content', '<div\x20class=\x22lw-loading\x22>查询中...</div>', ';color:white;font-size:10px;\x22>', 'innerHTML', 'onclick', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-label\x22>活跃人数</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22report-value\x20green\x22>', 'reduce', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22red\x22>', 'none'];
    a0_0x2299 = function () {
        return _0x321eea;
    };
    return a0_0x2299();
}
