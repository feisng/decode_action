//Sat Nov 01 2025 02:17:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import { ad as _0x182571, ae as _0x31707e, af as _0x246fc0 } from "./main-DgK-CuC8.js";
function _0x21ec51(_0x58eb41) {
  const _0x52b576 = _0x58eb41.split("/").filter(_0x4d1038 => "." !== _0x4d1038);
  const _0x2a11d0 = [];
  _0x52b576.forEach(_0x355ddd => {
    ".." === _0x355ddd && _0x2a11d0.length > 0 && ".." !== _0x2a11d0[_0x2a11d0.length - 1] ? _0x2a11d0.pop() : _0x2a11d0.push(_0x355ddd);
  });
  return _0x2a11d0.join("/");
}
class _0x42eb2d extends _0x182571 {
  constructor() {
    super(...arguments);
    this.DB_VERSION = 1;
    this.DB_NAME = "Disc";
    this._writeCmds = ["add", "put", "delete"];
    this.downloadFile = async _0x46fa03 => {
      var _0x1ba9a1;
      var _0x4569b6;
      const _0x48aad8 = _0x31707e(_0x46fa03, _0x46fa03.webFetchExtra);
      const _0x1c00cb = await fetch(_0x46fa03.url, _0x48aad8);
      let _0x469159;
      if (_0x46fa03.progress) {
        if (null == _0x1c00cb ? undefined : _0x1c00cb.body) {
          const _0x39f5ed = _0x1c00cb.body.getReader();
          let _0x5cf9b1 = 0;
          const _0x22d041 = [];
          const _0x177210 = _0x1c00cb.headers.get("content-type");
          const _0x27717d = parseInt(_0x1c00cb.headers.get("content-length") || "0", 10);
          for (;;) {
            const {
              done: _0x1c370c,
              value: _0x436506
            } = await _0x39f5ed.read();
            if (_0x1c370c) {
              break;
            }
            _0x22d041.push(_0x436506);
            _0x5cf9b1 += (null == _0x436506 ? undefined : _0x436506.length) || 0;
            const _0x50fdc7 = {
              url: _0x46fa03.url,
              bytes: _0x5cf9b1,
              contentLength: _0x27717d
            };
            this.notifyListeners("progress", _0x50fdc7);
          }
          const _0xfa4d58 = new Uint8Array(_0x5cf9b1);
          let _0x3ead56 = 0;
          for (const _0x4e17f1 of _0x22d041) undefined !== _0x4e17f1 && (_0xfa4d58.set(_0x4e17f1, _0x3ead56), _0x3ead56 += _0x4e17f1.length);
          _0x469159 = new Blob([_0xfa4d58.buffer], {
            type: _0x177210 || undefined
          });
        } else {
          _0x469159 = new Blob();
        }
      } else {
        _0x469159 = await _0x1c00cb.blob();
      }
      return {
        path: (await this.writeFile({
          path: _0x46fa03.path,
          directory: null !== (_0x1ba9a1 = _0x46fa03.directory) && undefined !== _0x1ba9a1 ? _0x1ba9a1 : undefined,
          recursive: null !== (_0x4569b6 = _0x46fa03.recursive) && undefined !== _0x4569b6 && _0x4569b6,
          data: _0x469159
        })).uri,
        blob: _0x469159
      };
    };
  }
  async initDb() {
    if (undefined !== this._db) {
      return this._db;
    }
    if (!("indexedDB" in window)) {
      throw this.unavailable("This browser doesn't support IndexedDB");
    }
    return new Promise((_0x3cf735, _0x17dfe5) => {
      const _0x1f3e78 = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      _0x1f3e78.onupgradeneeded = _0x42eb2d.doUpgrade;
      _0x1f3e78.onsuccess = () => {
        this._db = _0x1f3e78.result;
        _0x3cf735(_0x1f3e78.result);
      };
      _0x1f3e78.onerror = () => _0x17dfe5(_0x1f3e78.error);
      _0x1f3e78.onblocked = () => {};
    });
  }
  static doUpgrade(_0x5912cd) {
    const _0x46882 = _0x5912cd.target.result;
    _0x5912cd.oldVersion;
    _0x46882.objectStoreNames.contains("FileStorage") && _0x46882.deleteObjectStore("FileStorage");
    _0x46882.createObjectStore("FileStorage", {
      keyPath: "path"
    }).createIndex("by_folder", "folder");
  }
  async dbRequest(_0x495e95, _0x4072ec) {
    const _0xba4ac6 = -1 !== this._writeCmds.indexOf(_0x495e95) ? "readwrite" : "readonly";
    return this.initDb().then(_0x46077f => new Promise((_0x46d32b, _0x5ae066) => {
      const _0x2ae6da = _0x46077f.transaction(["FileStorage"], _0xba4ac6).objectStore("FileStorage")[_0x495e95](..._0x4072ec);
      _0x2ae6da.onsuccess = () => _0x46d32b(_0x2ae6da.result);
      _0x2ae6da.onerror = () => _0x5ae066(_0x2ae6da.error);
    }));
  }
  async dbIndexRequest(_0x2774d8, _0x28803d, _0x535d6a) {
    const _0x257c69 = -1 !== this._writeCmds.indexOf(_0x28803d) ? "readwrite" : "readonly";
    return this.initDb().then(_0x27a916 => new Promise((_0x1817c5, _0x17ade4) => {
      const _0x397f93 = _0x27a916.transaction(["FileStorage"], _0x257c69).objectStore("FileStorage").index(_0x2774d8)[_0x28803d](..._0x535d6a);
      _0x397f93.onsuccess = () => _0x1817c5(_0x397f93.result);
      _0x397f93.onerror = () => _0x17ade4(_0x397f93.error);
    }));
  }
  getPath(_0x2717a9, _0xd1fce9) {
    const _0x5eb655 = undefined !== _0xd1fce9 ? _0xd1fce9.replace(/^[/]+|[/]+$/g, "") : "";
    let _0x3bbdac = "";
    undefined !== _0x2717a9 && (_0x3bbdac += "/" + _0x2717a9);
    "" !== _0xd1fce9 && (_0x3bbdac += "/" + _0x5eb655);
    return _0x3bbdac;
  }
  async clear() {
    (await this.initDb()).transaction(["FileStorage"], "readwrite").objectStore("FileStorage").clear();
  }
  async readFile(_0x4ab52d) {
    const _0x461155 = this.getPath(_0x4ab52d.directory, _0x4ab52d.path);
    const _0x55b282 = await this.dbRequest("get", [_0x461155]);
    if (undefined === _0x55b282) {
      throw Error("File does not exist.");
    }
    return {
      data: _0x55b282.content ? _0x55b282.content : ""
    };
  }
  async writeFile(_0x7bd0ba) {
    const _0x49f685 = this.getPath(_0x7bd0ba.directory, _0x7bd0ba.path);
    let _0x37dcee = _0x7bd0ba.data;
    const _0x43b357 = _0x7bd0ba.encoding;
    const _0x5574d2 = _0x7bd0ba.recursive;
    const _0x41c35d = await this.dbRequest("get", [_0x49f685]);
    if (_0x41c35d && "directory" === _0x41c35d.type) {
      throw Error("The supplied path is a directory.");
    }
    const _0x4332b6 = _0x49f685.substr(0, _0x49f685.lastIndexOf("/"));
    if (undefined === (await this.dbRequest("get", [_0x4332b6]))) {
      const _0x1790fb = _0x4332b6.indexOf("/", 1);
      if (-1 !== _0x1790fb) {
        const _0x567c77 = _0x4332b6.substr(_0x1790fb);
        await this.mkdir({
          path: _0x567c77,
          directory: _0x7bd0ba.directory,
          recursive: _0x5574d2
        });
      }
    }
    if (!(_0x43b357 || _0x37dcee instanceof Blob || (_0x37dcee = _0x37dcee.indexOf(",") >= 0 ? _0x37dcee.split(",")[1] : _0x37dcee, this.isBase64String(_0x37dcee)))) {
      throw Error("The supplied data is not valid base64 content.");
    }
    const _0x160770 = Date.now();
    const _0x5a7178 = {
      path: _0x49f685,
      folder: _0x4332b6,
      type: "file",
      size: _0x37dcee instanceof Blob ? _0x37dcee.size : _0x37dcee.length,
      ctime: _0x160770,
      mtime: _0x160770,
      content: _0x37dcee
    };
    await this.dbRequest("put", [_0x5a7178]);
    return {
      uri: _0x5a7178.path
    };
  }
  async appendFile(_0x257ec3) {
    const _0xc788f2 = this.getPath(_0x257ec3.directory, _0x257ec3.path);
    let _0x49be11 = _0x257ec3.data;
    const _0xed69d2 = _0x257ec3.encoding;
    const _0x1ac8d8 = _0xc788f2.substr(0, _0xc788f2.lastIndexOf("/"));
    const _0x5f507f = Date.now();
    let _0x1cdcf6 = _0x5f507f;
    const _0xcf9e87 = await this.dbRequest("get", [_0xc788f2]);
    if (_0xcf9e87 && "directory" === _0xcf9e87.type) {
      throw Error("The supplied path is a directory.");
    }
    if (undefined === (await this.dbRequest("get", [_0x1ac8d8]))) {
      const _0x1a2c6a = _0x1ac8d8.indexOf("/", 1);
      if (-1 !== _0x1a2c6a) {
        const _0x1e4c99 = _0x1ac8d8.substr(_0x1a2c6a);
        await this.mkdir({
          path: _0x1e4c99,
          directory: _0x257ec3.directory,
          recursive: true
        });
      }
    }
    if (!_0xed69d2 && !this.isBase64String(_0x49be11)) {
      throw Error("The supplied data is not valid base64 content.");
    }
    if (undefined !== _0xcf9e87) {
      if (_0xcf9e87.content instanceof Blob) {
        throw Error("The occupied entry contains a Blob object which cannot be appended to.");
      }
      _0x49be11 = undefined === _0xcf9e87.content || _0xed69d2 ? _0xcf9e87.content + _0x49be11 : btoa(atob(_0xcf9e87.content) + atob(_0x49be11));
      _0x1cdcf6 = _0xcf9e87.ctime;
    }
    const _0x10c61b = {
      path: _0xc788f2,
      folder: _0x1ac8d8,
      type: "file",
      size: _0x49be11.length,
      ctime: _0x1cdcf6,
      mtime: _0x5f507f,
      content: _0x49be11
    };
    await this.dbRequest("put", [_0x10c61b]);
  }
  async deleteFile(_0x49d26b) {
    const _0x39c8a4 = this.getPath(_0x49d26b.directory, _0x49d26b.path);
    if (undefined === (await this.dbRequest("get", [_0x39c8a4]))) {
      throw Error("File does not exist.");
    }
    if (0 !== (await this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(_0x39c8a4)])).length) {
      throw Error("Folder is not empty.");
    }
    await this.dbRequest("delete", [_0x39c8a4]);
  }
  async mkdir(_0x2a5501) {
    const _0x4415a6 = this.getPath(_0x2a5501.directory, _0x2a5501.path);
    const _0x3c61d8 = _0x2a5501.recursive;
    const _0x9114bf = _0x4415a6.substr(0, _0x4415a6.lastIndexOf("/"));
    const _0x3c45d3 = (_0x4415a6.match(/\//g) || []).length;
    const _0x3a0cc9 = await this.dbRequest("get", [_0x9114bf]);
    const _0x227d88 = await this.dbRequest("get", [_0x4415a6]);
    if (1 === _0x3c45d3) {
      throw Error("Cannot create Root directory");
    }
    if (undefined !== _0x227d88) {
      throw Error("Current directory does already exist.");
    }
    if (!_0x3c61d8 && 2 !== _0x3c45d3 && undefined === _0x3a0cc9) {
      throw Error("Parent directory must exist");
    }
    if (_0x3c61d8 && 2 !== _0x3c45d3 && undefined === _0x3a0cc9) {
      const _0x2c0520 = _0x9114bf.substr(_0x9114bf.indexOf("/", 1));
      await this.mkdir({
        path: _0x2c0520,
        directory: _0x2a5501.directory,
        recursive: _0x3c61d8
      });
    }
    const _0xb23fa5 = Date.now();
    const _0x320dac = {
      path: _0x4415a6,
      folder: _0x9114bf,
      type: "directory",
      size: 0,
      ctime: _0xb23fa5,
      mtime: _0xb23fa5
    };
    await this.dbRequest("put", [_0x320dac]);
  }
  async rmdir(_0xd1d74a) {
    const {
      path: _0x115784,
      directory: _0x3ab5ed,
      recursive: _0x3254c1
    } = _0xd1d74a;
    const _0x242ba1 = this.getPath(_0x3ab5ed, _0x115784);
    const _0x437be2 = await this.dbRequest("get", [_0x242ba1]);
    if (undefined === _0x437be2) {
      throw Error("Folder does not exist.");
    }
    if ("directory" !== _0x437be2.type) {
      throw Error("Requested path is not a directory");
    }
    const _0x2f63dd = await this.readdir({
      path: _0x115784,
      directory: _0x3ab5ed
    });
    if (0 !== _0x2f63dd.files.length && !_0x3254c1) {
      throw Error("Folder is not empty");
    }
    for (const _0x4e7926 of _0x2f63dd.files) {
      const _0x1119e6 = _0x115784 + "/" + _0x4e7926.name;
      "file" === (await this.stat({
        path: _0x1119e6,
        directory: _0x3ab5ed
      })).type ? await this.deleteFile({
        path: _0x1119e6,
        directory: _0x3ab5ed
      }) : await this.rmdir({
        path: _0x1119e6,
        directory: _0x3ab5ed,
        recursive: _0x3254c1
      });
    }
    await this.dbRequest("delete", [_0x242ba1]);
  }
  async readdir(_0x1cfbb2) {
    const _0x56a162 = this.getPath(_0x1cfbb2.directory, _0x1cfbb2.path);
    const _0x55a620 = await this.dbRequest("get", [_0x56a162]);
    if ("" !== _0x1cfbb2.path && undefined === _0x55a620) {
      throw Error("Folder does not exist.");
    }
    const _0x349ab0 = await this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(_0x56a162)]);
    return {
      files: await Promise.all(_0x349ab0.map(async _0x498de4 => {
        let _0xee86df = await this.dbRequest("get", [_0x498de4]);
        undefined === _0xee86df && (_0xee86df = await this.dbRequest("get", [_0x498de4 + "/"]));
        return {
          name: _0x498de4.substring(_0x56a162.length + 1),
          type: _0xee86df.type,
          size: _0xee86df.size,
          ctime: _0xee86df.ctime,
          mtime: _0xee86df.mtime,
          uri: _0xee86df.path
        };
      }))
    };
  }
  async getUri(_0x1ff6b1) {
    const _0x5f58fd = this.getPath(_0x1ff6b1.directory, _0x1ff6b1.path);
    let _0x5b5778 = await this.dbRequest("get", [_0x5f58fd]);
    undefined === _0x5b5778 && (_0x5b5778 = await this.dbRequest("get", [_0x5f58fd + "/"]));
    return {
      uri: (null == _0x5b5778 ? undefined : _0x5b5778.path) || _0x5f58fd
    };
  }
  async stat(_0x2fe772) {
    const _0x262ffe = this.getPath(_0x2fe772.directory, _0x2fe772.path);
    let _0x530fe1 = await this.dbRequest("get", [_0x262ffe]);
    if (undefined === _0x530fe1 && (_0x530fe1 = await this.dbRequest("get", [_0x262ffe + "/"])), undefined === _0x530fe1) {
      throw Error("Entry does not exist.");
    }
    return {
      type: _0x530fe1.type,
      size: _0x530fe1.size,
      ctime: _0x530fe1.ctime,
      mtime: _0x530fe1.mtime,
      uri: _0x530fe1.path
    };
  }
  async rename(_0x4cda58) {
    await this._copy(_0x4cda58, true);
  }
  async copy(_0x333f2c) {
    return this._copy(_0x333f2c, false);
  }
  async requestPermissions() {
    return {
      publicStorage: "granted"
    };
  }
  async checkPermissions() {
    return {
      publicStorage: "granted"
    };
  }
  async _copy(_0x239536, _0x5cac65 = false) {
    let {
      toDirectory: _0x21b4a6
    } = _0x239536;
    const {
      to: _0x47b9fc,
      from: _0x39b88d,
      directory: _0x13a8e1
    } = _0x239536;
    if (!_0x47b9fc || !_0x39b88d) {
      throw Error("Both to and from must be provided");
    }
    _0x21b4a6 || (_0x21b4a6 = _0x13a8e1);
    const _0x20c840 = this.getPath(_0x13a8e1, _0x39b88d);
    const _0x136711 = this.getPath(_0x21b4a6, _0x47b9fc);
    if (_0x20c840 === _0x136711) {
      return {
        uri: _0x136711
      };
    }
    if (function (_0x254f2f, _0x1ce3b9) {
      _0x254f2f = _0x21ec51(_0x254f2f);
      _0x1ce3b9 = _0x21ec51(_0x1ce3b9);
      const _0x33527f = _0x254f2f.split("/");
      const _0x2a5152 = _0x1ce3b9.split("/");
      return _0x254f2f !== _0x1ce3b9 && _0x33527f.every((_0x5770fb, _0xdc96a1) => _0x5770fb === _0x2a5152[_0xdc96a1]);
    }(_0x20c840, _0x136711)) {
      throw Error("To path cannot contain the from path");
    }
    let _0x26c7c7;
    try {
      _0x26c7c7 = await this.stat({
        path: _0x47b9fc,
        directory: _0x21b4a6
      });
    } catch (_0x5cbcee) {
      const _0x2a6965 = _0x47b9fc.split("/");
      _0x2a6965.pop();
      const _0x353fd3 = _0x2a6965.join("/");
      if (_0x2a6965.length > 0) {
        if ("directory" !== (await this.stat({
          path: _0x353fd3,
          directory: _0x21b4a6
        })).type) {
          throw new Error("Parent directory of the to path is a file");
        }
      }
    }
    if (_0x26c7c7 && "directory" === _0x26c7c7.type) {
      throw new Error("Cannot overwrite a directory with a file");
    }
    const _0x3c66c0 = await this.stat({
      path: _0x39b88d,
      directory: _0x13a8e1
    });
    const _0x7530ad = async (_0x283f15, _0x19608f, _0x375b76) => {
      const _0x458e70 = this.getPath(_0x21b4a6, _0x283f15);
      const _0x449334 = await this.dbRequest("get", [_0x458e70]);
      _0x449334.ctime = _0x19608f;
      _0x449334.mtime = _0x375b76;
      await this.dbRequest("put", [_0x449334]);
    };
    const _0x540fe6 = _0x3c66c0.ctime ? _0x3c66c0.ctime : Date.now();
    switch (_0x3c66c0.type) {
      case "file":
        {
          const _0x48fd16 = await this.readFile({
            path: _0x39b88d,
            directory: _0x13a8e1
          });
          let _0x58a2b1;
          _0x5cac65 && (await this.deleteFile({
            path: _0x39b88d,
            directory: _0x13a8e1
          }));
          _0x48fd16.data instanceof Blob || this.isBase64String(_0x48fd16.data) || (_0x58a2b1 = _0x246fc0.UTF8);
          const _0x2e4623 = await this.writeFile({
            path: _0x47b9fc,
            directory: _0x21b4a6,
            data: _0x48fd16.data,
            encoding: _0x58a2b1
          });
          _0x5cac65 && (await _0x7530ad(_0x47b9fc, _0x540fe6, _0x3c66c0.mtime));
          return _0x2e4623;
        }
      case "directory":
        {
          if (_0x26c7c7) {
            throw Error("Cannot move a directory over an existing object");
          }
          try {
            await this.mkdir({
              path: _0x47b9fc,
              directory: _0x21b4a6,
              recursive: false
            });
            _0x5cac65 && (await _0x7530ad(_0x47b9fc, _0x540fe6, _0x3c66c0.mtime));
          } catch (_0x46153c) {}
          const _0x519d23 = (await this.readdir({
            path: _0x39b88d,
            directory: _0x13a8e1
          })).files;
          for (const _0x333b9a of _0x519d23) await this._copy({
            from: _0x39b88d + "/" + _0x333b9a.name,
            to: _0x47b9fc + "/" + _0x333b9a.name,
            directory: _0x13a8e1,
            toDirectory: _0x21b4a6
          }, _0x5cac65);
          _0x5cac65 && (await this.rmdir({
            path: _0x39b88d,
            directory: _0x13a8e1
          }));
        }
    }
    return {
      uri: _0x136711
    };
  }
  isBase64String(_0x51e373) {
    try {
      return btoa(atob(_0x51e373)) == _0x51e373;
    } catch (_0x1fac3f) {
      return false;
    }
  }
}
_0x42eb2d._debug = true;
export { _0x42eb2d as FilesystemWeb };