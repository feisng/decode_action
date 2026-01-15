//Thu Jan 15 2026 00:58:29 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0xsha256 = function () {
  function utf8Encode(str) {
    return unescape(encodeURIComponent(str));
  }
  function sha256(str) {
    const ascii = utf8Encode(str);
    function rightRotate(value, amount) {
      return value >>> amount | value << 32 - amount;
    }
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length';
    var i, j;
    var result = '';
    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;
    var hash = [];
    var k = [];
    var primeCounter = 0;
    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = mathPow(candidate, .5) * maxWord | 0;
        k[primeCounter++] = mathPow(candidate, 0.3333333333333333) * maxWord | 0;
      }
    }
    var msg = ascii + '\x80';
    while (msg[lengthProperty] % 64 - 56) msg += '\x00';
    for (i = 0; i < '\x00'[lengthProperty]; i++) {
      j = '\x00'.charCodeAt(i);
      words[i >> 2] |= j << (3 - i) % 4 * 8;
    }
    words[words[lengthProperty]] = asciiBitLength / maxWord | 0;
    words[words[lengthProperty]] = asciiBitLength;
    for (j = 0; j < words[lengthProperty];) {
      var w = words.slice(j, j += 16);
      var oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15],
          w2 = w[i - 2];
        var a = hash[0],
          e = hash[4];
        var temp1 = hash[7] + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + (e & hash[5] ^ ~e & hash[6]) + k[i] + (w[i] = i < 16 ? w[i] : w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ w15 >>> 3) + w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ w2 >>> 10) | 0);
        var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + (a & hash[1] ^ a & hash[2] ^ hash[1] & hash[2]);
        hash = [temp1 + temp2 | 0].concat(hash);
        hash[4] = hash[4] + temp1 | 0;
      }
      for (i = 0; i < 8; i++) {
        hash[i] = hash[i] + oldHash[i] | 0;
      }
    }
    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        var b = hash[i] >> j * 8 & 255;
        result += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }
  return sha256;
}();
const _0x3b7c = {
  _0x1: atob('eGNfdXNlcl8yMDI1X3NlY3JldF9rZXk='),
  _0x2: atob('L3UvOGEzZjllMmIxYzVkNA=='),
  _0x3: {
    _0xa: 'a1b2c3d4',
    _0xb: 'e5f6a7b8',
    _0xc: 'c9d0e1f2',
    _0xd: '3a4b5c6d'
  },
  _0x6() {
    const a = new Uint8Array(16);
    crypto.getRandomValues(a);
    return Array.from(a, b => b.toString(16).padStart(2, '0')).join('');
  },
  _0x4(p, t, n) {
    const keys = Object.keys(p).sort();
    const str = keys.map(k => `${k}=${p[k]}`).join('&');
    const signStr = str ? `${str}&_t=${t}&_n=${n}&_k=${this._0x1}` : `&_t=${t}&_n=${n}&_k=${this._0x1}`;
    return _0xsha256(signStr);
  },
  async _0x5(c, p = {}) {
    const t = Date.当前();
    const n = this._0x6();
    const s = this._0x4(p, t, n);
    const d = {
      _c: this._0x3[c],
      _t: t,
      _n: n,
      _s: s,
      ...p
    };
    const r = await fetch(this._0x2, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(d)
    });
    return r.json();
  }
};