var _0x3b5de7 = function () {
  var _0x375e16 = true;
  return function (_0x4eadbe, _0x159d26) {
    var _0x507853 = _0x375e16 ? function () {
      if (_0x159d26) {
        var _0x1c36ea = _0x159d26.apply(_0x4eadbe, arguments);
        _0x159d26 = null;
        return _0x1c36ea;
      }
    } : function () {};
    _0x375e16 = false;
    return _0x507853;
  };
}();
var _0x47f96d = _0x3b5de7(this, function () {
  var _0x37ff04 = function () {
    var _0x18e361;
    try {
      _0x18e361 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x9ce3fc) {
      _0x18e361 = window;
    }
    return _0x18e361;
  };
  var _0x1a30bb = _0x37ff04();
  var _0x2f42c8 = _0x1a30bb.console = _0x1a30bb.console || {};
  var _0x15356c = ["log", 'warn', "info", "error", "exception", "table", "trace"];
  for (var _0x2e771d = 0x0; _0x2e771d < _0x15356c.length; _0x2e771d++) {
    var _0x254dfa = _0x3b5de7.constructor.prototype.bind(_0x3b5de7);
    var _0x8ec8a3 = _0x15356c[_0x2e771d];
    var _0x2f867d = _0x2f42c8[_0x8ec8a3] || _0x254dfa;
    _0x254dfa.__proto__ = _0x3b5de7.bind(_0x3b5de7);
    _0x254dfa.toString = _0x2f867d.toString.bind(_0x2f867d);
    _0x2f42c8[_0x8ec8a3] = _0x254dfa;
  }
});
_0x47f96d();
var Direction;
var lxpdupdatezoom;
var lxpdmultiplier;
var lxpdzoomtext;
var crearRegion2;
var lxpdservertext;
var lxpdserverping;
var lxpdserverfps;
var lxpdTopHS_RecordHs;
var lxpdTop3HS_RecordHs;
var lxpdTopFriends_list;
var lxpdMinimapTeamCode;
var lxpdMinimapSombra;
var lxpdlastserver;
var lxpdtoplist;
var lxpdBackground;
var ctxHeadshotLine;
var lxpdzoomplustexture;
var lxpdzoomsubtracttexture;
var lxpdgiroplustexture;
var lxpdgirosubtracttexture;
var lxpdexplotWubtracttexture;
var lxpdsettingsblockbadwords;
var lxpdselectedbackground;
var lxpdjoystick;
var lxpdmobilecontrol;
var lxpdmobilecontrol2;
var lxpdmobilecontroltextures;
var lxpdmobilepredictiontextures;
var lxpdmobileprediction;
var lxpdjoysticks;
var lxpdmobilearrowtexture;
var lxpdmobilepeedtexture;
var lxpdmobilefullscreenstatus;
var lxpdmobilecheck;
var killtext;
var hstext;
var circle;
var GoogleAuth;
var __extends = this && this.__extends || function () {
  var _0x3873a7 = function (_0x1f08f4, _0x55252f) {
    return (_0x3873a7 = Object.setPrototypeOf || {
      '__proto__': []
    } instanceof Array && function (_0x2cc4c3, _0x6a2e66) {
      _0x2cc4c3.__proto__ = _0x6a2e66;
    } || function (_0x815bc5, _0xecee29) {
      for (var _0x53a3df in _0xecee29) if (Object.prototype.hasOwnProperty.call(_0xecee29, _0x53a3df)) {
        _0x815bc5[_0x53a3df] = _0xecee29[_0x53a3df];
      }
    })(_0x1f08f4, _0x55252f);
  };
  return function (_0x4ac929, _0x5ca0c0) {
    if ("function" != typeof _0x5ca0c0 && null !== _0x5ca0c0) {
      throw TypeError("Class extends value " + String(_0x5ca0c0) + " is not a constructor or null");
    }
    function _0x5b8391() {
      this.constructor = _0x4ac929;
    }
    _0x3873a7(_0x4ac929, _0x5ca0c0);
    _0x4ac929.prototype = null === _0x5ca0c0 ? Object.create(_0x5ca0c0) : (_0x5b8391.prototype = _0x5ca0c0.prototype, new _0x5b8391());
  };
}();
function optimizarTextura(_0x1a82ee) {
  if (!_0x1a82ee || !_0x1a82ee.Hc || !_0x1a82ee.Hc.baseTexture) {
    console.warn("⚠️ Geçersiz doku veya baseTexture bulunamadı. Optimizasyon atlandı.");
    return;
  }
  const _0x64e518 = _0x1a82ee.Hc.baseTexture;
  const _0x179c71 = _0x64e518.cacheId || _0x64e518.resource?.["url"] || _0x64e518.resource?.["source"]?.['src'] || '';
  if (!_0x179c71 || window._alreadyScaledWormTextures.has(_0x179c71)) {
    return;
  }
  try {
    if (_0x179c71.includes("100300_portions.png") && _0x64e518.resolution > 0.025) {
      _0x64e518.resolution = 0.025;
      console.log("🛠️ Çözünürlük ayarlandı (" + _0x64e518.resolution + "): " + _0x179c71);
    }
    if ('mipmap' in _0x64e518) {
      _0x64e518.mipmap = false;
    } else if ("mipmap" in _0x64e518.baseTexture) {
      _0x64e518.baseTexture.mipmap = false;
    }
    if ("anisotropicLevel" in _0x64e518) {
      _0x64e518.anisotropicLevel = 0x1;
    } else if ("anisotropicLevel" in _0x64e518.baseTexture) {
      _0x64e518.baseTexture.anisotropicLevel = 0x1;
    }
    if (_0x64e518.width > 0x400 || _0x64e518.height > 0x400) {
      const _0x33667c = 0x400 / _0x64e518.width;
      const _0x5e6f75 = 0x400 / _0x64e518.height;
      const _0x41f53a = Math.min(_0x33667c, _0x5e6f75);
      if (_0x64e518.setSize) {
        _0x64e518.setSize(_0x64e518.width * _0x41f53a, _0x64e518.height * _0x41f53a);
      } else if (_0x64e518.resource?.["source"] instanceof HTMLImageElement) {
        _0x64e518.resource.source.width *= _0x41f53a;
        _0x64e518.resource.source.height *= _0x41f53a;
      }
      console.log("🔧 Resim ölçeklendi (" + Math.round(_0x41f53a * 0x64) + "%): " + _0x179c71);
    }
    if (_0x64e518.isPowerOfTwo && !_0x179c71.includes("atlas") && !_0x179c71.includes("sprite")) {
      _0x64e518.isPowerOfTwo = false;
    }
    if (_0x64e518.destroyed || _0x64e518.resource?.["destroyed"]) {
      _0x64e518.destroy(true);
      console.log("🗑️ Doku geçersiz durumda olduğu için yok edildi: " + _0x179c71);
    }
    window._alreadyScaledWormTextures.add(_0x179c71);
    console.log("✅ Optimizasyon tamamlandı: " + _0x179c71);
  } catch (_0x6ac714) {
    console.error("❌ Doku optimize edilirken hata oluştu: " + _0x179c71, _0x6ac714);
  }
}
!function (_0x189ff9) {
  var _0x55849a;
  var _0x3bae9b;
  _0x55849a = true;
  var _0xfd6431 = function (_0x2d0adf, _0x1cd5c7) {
    var _0x775f4c = _0x55849a ? function () {
      if (_0x1cd5c7) {
        var _0x16805a = _0x1cd5c7.apply(_0x2d0adf, arguments);
        _0x1cd5c7 = null;
        return _0x16805a;
      }
    } : function () {};
    _0x55849a = false;
    return _0x775f4c;
  }(this, function () {
    return _0xfd6431.toString().search("(((.+)+)+)+$").toString().constructor(_0xfd6431).search("(((.+)+)+)+$");
  });
  _0xfd6431();
  var _0x46581e;
  _0x3bae9b = true;
  var _0x4c5ace = function (_0x2f5b7d, _0x230014) {
    var _0x587946 = _0x3bae9b ? function () {
      if (_0x230014) {
        var _0x12f57d = _0x230014.apply(_0x2f5b7d, arguments);
        _0x230014 = null;
        return _0x12f57d;
      }
    } : function () {};
    _0x3bae9b = false;
    return _0x587946;
  };
  !function () {
    _0x4c5ace(this, function () {
      var _0x5a795d = RegExp("function *\\( *\\)");
      var _0x50115f = RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      var _0x292615 = _0x3797b0("init");
      if (_0x5a795d.test(_0x292615 + "chain") && _0x50115f.test(_0x292615 + "input")) {
        _0x3797b0();
      } else {
        _0x292615('0');
      }
    })();
  }();
  _0x46581e = true;
  var _0x4465ec = function (_0x2f2173, _0x55ac66) {
    var _0x566a13 = _0x46581e ? function () {
      if (_0x55ac66) {
        var _0x499d9b = _0x55ac66.apply(_0x2f2173, arguments);
        _0x55ac66 = null;
        return _0x499d9b;
      }
    } : function () {};
    _0x46581e = false;
    return _0x566a13;
  };
  _0x4465ec(this, function () {
    try {
      var _0x54e02e;
      _0x54e02e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x17019c) {
      _0x54e02e = window;
    }
    var _0x1785ab = _0x54e02e.console = _0x54e02e.console || {};
    var _0x51abac = ['log', "warn", "info", "error", "exception", 'table', "trace"];
    for (var _0x643b8c = 0x0; _0x643b8c < _0x51abac.length; _0x643b8c++) {
      var _0x3988e4 = _0x4465ec.constructor.prototype.bind(_0x4465ec);
      var _0x54171b = _0x51abac[_0x643b8c];
      var _0x41be43 = _0x1785ab[_0x54171b] || _0x3988e4;
      _0x3988e4.__proto__ = _0x4465ec.bind(_0x4465ec);
      _0x3988e4.toString = _0x41be43.toString.bind(_0x41be43);
      _0x1785ab[_0x54171b] = _0x3988e4;
    }
  })();
  _0x189ff9.LEFT = "left";
  _0x189ff9.TOP = "top";
  _0x189ff9.BOTTOM = "bottom";
  _0x189ff9.RIGHT = "right";
  _0x189ff9.TOP_LEFT = "top_left";
  _0x189ff9.TOP_RIGHT = "top_right";
  _0x189ff9.BOTTOM_LEFT = 'bottom_left';
  _0x189ff9.BOTTOM_RIGHT = "bottom_right";
}(Direction = {});
var Joystick = function (_0xa18db7) {
  function _0x5be5a4(_0x4dae7e) {
    var _0x1b54ef = _0xa18db7.call(this) || this;
    _0x1b54ef.outerRadius = 0x0;
    _0x1b54ef.innerRadius = 0x0;
    _0x1b54ef.innerAlphaStandby = 0.5;
    _0x1b54ef.settings = Object.assign({
      'outerScale': {
        'x': 0x1,
        'y': 0x1
      },
      'innerScale': {
        'x': 0x1,
        'y': 0x1
      }
    }, _0x4dae7e);
    if (!_0x1b54ef.settings.outer) {
      var _0x55da7a = new PIXI.Graphics();
      _0x55da7a.beginFill(0xff0000);
      _0x55da7a.drawCircle(0x0, 0x0, 0x3c);
      _0x55da7a.alpha = 0.5;
      _0x1b54ef.settings.outer = _0x55da7a;
    }
    if (!_0x1b54ef.settings.inner) {
      var _0x1a2011 = new PIXI.Graphics();
      _0x1a2011.beginFill(0xff0000);
      _0x1a2011.drawCircle(0x0, 0x0, 0x23);
      _0x1a2011.alpha = _0x1b54ef.innerAlphaStandby;
      _0x1b54ef.settings.inner = _0x1a2011;
    }
    _0x1b54ef.initialize();
    return _0x1b54ef;
  }
  __extends(_0x5be5a4, _0xa18db7);
  _0x5be5a4.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ('anchor' in this.outer) {
      this.outer.anchor.set(0.5);
    }
    if ("anchor" in this.inner) {
      this.inner.anchor.set(0.5);
    }
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 0x2;
    this.bindEvents();
  };
  _0x5be5a4.prototype.bindEvents = function () {
    var _0x3c63da;
    var _0x383ee4;
    var _0x59ed97;
    var _0x4be5b9 = this;
    this.interactive = true;
    var _0x5ce03a = false;
    this.onDragStart = function (_0x237844) {
      var _0x5a231e;
      var _0x1849b1;
      _0x3c63da = _0x237844;
      _0x59ed97 = this.toLocal(_0x3c63da);
      _0x5ce03a = true;
      _0x4be5b9.inner.alpha = 0x1;
      if (!(null === (_0x1849b1 = (_0x5a231e = _0x4be5b9.settings).onStart) || undefined === _0x1849b1)) {
        _0x1849b1.call(_0x5a231e);
      }
    };
    this.onDragEnd = function (_0x39bade) {
      var _0x256fd0;
      var _0x552ffa;
      if (false != _0x5ce03a) {
        _0x4be5b9.inner.position.set(0x0, 0x0);
        _0x5ce03a = false;
        _0x4be5b9.inner.alpha = _0x4be5b9.innerAlphaStandby;
        if (!(null === (_0x552ffa = (_0x256fd0 = _0x4be5b9.settings).onEnd) || undefined === _0x552ffa)) {
          _0x552ffa.call(_0x256fd0);
        }
      }
    };
    this.onDragMove = function (_0x43a528) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 0x2;
      if (false != _0x5ce03a) {
        var _0x138c43;
        var _0x50f8a1;
        var _0x5c233e;
        var _0x3a9f28;
        var _0x59dbfe;
        var _0x30bcb0;
        var _0xabcf = this.toLocal(_0x43a528);
        var _0x3a0085 = _0xabcf.x - _0x59ed97.x;
        var _0x1a8598 = _0xabcf.y - _0x59ed97.y;
        var _0x5ef7ae = new PIXI.Point(0x0, 0x0);
        var _0x3980dc = 0x0;
        if (0x0 != _0x3a0085 || 0x0 != _0x1a8598) {
          var _0x11b768 = 0x0;
          _0x11b768 = _0x3a0085 * _0x3a0085 + _0x1a8598 * _0x1a8598 >= _0x4be5b9.outerRadius * _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : _0x4be5b9.outerRadius - _0x4be5b9.innerRadius;
          var _0x4b6d56 = Direction.LEFT;
          if (0x0 == _0x3a0085) {
            if (_0x1a8598 > 0x0) {
              _0x5ef7ae.set(0x0, _0x1a8598 > _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : _0x1a8598);
              _0x3980dc = 0x10e;
              _0x4b6d56 = Direction.BOTTOM;
            } else {
              _0x5ef7ae.set(0x0, -(Math.abs(_0x1a8598) > _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : Math.abs(_0x1a8598)));
              _0x3980dc = 0x5a;
              _0x4b6d56 = Direction.TOP;
            }
            _0x4be5b9.inner.position.set(_0x5ef7ae.x, _0x5ef7ae.y);
            _0x383ee4 = _0x4be5b9.getPower(_0x5ef7ae);
            if (!(null === (_0x50f8a1 = (_0x138c43 = _0x4be5b9.settings).onChange) || undefined === _0x50f8a1)) {
              _0x50f8a1.call(_0x138c43, {
                'angle': _0x3980dc,
                'direction': _0x4b6d56,
                'power': _0x383ee4
              });
            }
            return;
          }
          if (0x0 == _0x1a8598) {
            if (_0x3a0085 > 0x0) {
              _0x5ef7ae.set(Math.abs(_0x3a0085) > _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : Math.abs(_0x3a0085), 0x0);
              _0x3980dc = 0x0;
              _0x4b6d56 = Direction.LEFT;
            } else {
              _0x5ef7ae.set(-(Math.abs(_0x3a0085) > _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : Math.abs(_0x3a0085)), 0x0);
              _0x3980dc = 0xb4;
              _0x4b6d56 = Direction.RIGHT;
            }
            _0x4be5b9.inner.position.set(_0x5ef7ae.x, _0x5ef7ae.y);
            _0x383ee4 = _0x4be5b9.getPower(_0x5ef7ae);
            if (!(null === (_0x3a9f28 = (_0x5c233e = _0x4be5b9.settings).onChange) || undefined === _0x3a9f28)) {
              _0x3a9f28.call(_0x5c233e, {
                'angle': _0x3980dc,
                'direction': _0x4b6d56,
                'power': _0x383ee4
              });
            }
            return;
          }
          var _0x52bfc1 = Math.atan(Math.abs(_0x1a8598 / _0x3a0085));
          _0x3980dc = 0xb4 * _0x52bfc1 / Math.PI;
          var _0x139fc0 = 0x0;
          var _0x576317 = 0x0;
          if (_0x3a0085 * _0x3a0085 + _0x1a8598 * _0x1a8598 >= _0x4be5b9.outerRadius * _0x4be5b9.outerRadius) {
            _0x139fc0 = _0x4be5b9.outerRadius * Math.cos(_0x52bfc1);
            _0x576317 = _0x4be5b9.outerRadius * Math.sin(_0x52bfc1);
          } else {
            _0x139fc0 = Math.abs(_0x3a0085) > _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : Math.abs(_0x3a0085);
            _0x576317 = Math.abs(_0x1a8598) > _0x4be5b9.outerRadius ? _0x4be5b9.outerRadius : Math.abs(_0x1a8598);
          }
          if (_0x1a8598 < 0x0) {
            _0x576317 = -Math.abs(_0x576317);
          }
          if (_0x3a0085 < 0x0) {
            _0x139fc0 = -Math.abs(_0x139fc0);
          }
          if (!(_0x3a0085 > 0x0 && _0x1a8598 < 0x0)) {
            if (_0x3a0085 < 0x0 && _0x1a8598 < 0x0) {
              _0x3980dc = 0xb4 - _0x3980dc;
            } else {
              if (_0x3a0085 < 0x0 && _0x1a8598 > 0x0) {
                _0x3980dc += 0xb4;
              } else if (_0x3a0085 > 0x0 && _0x1a8598 > 0x0) {
                _0x3980dc = 0x168 - _0x3980dc;
              }
            }
          }
          _0x5ef7ae.set(_0x139fc0, _0x576317);
          _0x383ee4 = _0x4be5b9.getPower(_0x5ef7ae);
          _0x4b6d56 = _0x4be5b9.getDirection(_0x5ef7ae);
          _0x4be5b9.inner.position.set(_0x5ef7ae.x, _0x5ef7ae.y);
          if (!(null === (_0x30bcb0 = (_0x59dbfe = _0x4be5b9.settings).onChange) || undefined === _0x30bcb0)) {
            _0x30bcb0.call(_0x59dbfe, {
              'angle': _0x3980dc,
              'direction': _0x4b6d56,
              'power': _0x383ee4
            });
          }
        }
      }
    };
  };
  _0x5be5a4.prototype.getPower = function (_0x19b95e) {
    var _0x2373d7 = _0x19b95e.x - 0x0;
    var _0x54171c = _0x19b95e.y - 0x0;
    return Math.min(0x1, Math.sqrt(_0x2373d7 * _0x2373d7 + _0x54171c * _0x54171c) / this.outerRadius);
  };
  _0x5be5a4.prototype.getDirection = function (_0x5439cc) {
    var _0x27b1b9 = Math.atan2(_0x5439cc.y, _0x5439cc.x);
    return _0x27b1b9 >= -Math.PI / 0x8 && _0x27b1b9 < 0x0 || _0x27b1b9 >= 0x0 && _0x27b1b9 < Math.PI / 0x8 ? Direction.RIGHT : _0x27b1b9 >= Math.PI / 0x8 && _0x27b1b9 < 0x3 * Math.PI / 0x8 ? Direction.BOTTOM_RIGHT : _0x27b1b9 >= 0x3 * Math.PI / 0x8 && _0x27b1b9 < 0x5 * Math.PI / 0x8 ? Direction.BOTTOM : _0x27b1b9 >= 0x5 * Math.PI / 0x8 && _0x27b1b9 < 0x7 * Math.PI / 0x8 ? Direction.BOTTOM_LEFT : _0x27b1b9 >= 0x7 * Math.PI / 0x8 && _0x27b1b9 < Math.PI || _0x27b1b9 >= -Math.PI && _0x27b1b9 < -0x7 * Math.PI / 0x8 ? Direction.LEFT : _0x27b1b9 >= -0x7 * Math.PI / 0x8 && _0x27b1b9 < -0x5 * Math.PI / 0x8 ? Direction.TOP_LEFT : _0x27b1b9 >= -0x5 * Math.PI / 0x8 && _0x27b1b9 < -0x3 * Math.PI / 0x8 ? Direction.TOP : Direction.TOP_RIGHT;
  };
  return _0x5be5a4;
}(PIXI.Container);
function _typeof(_0x2205e9) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0xef470) {
    return typeof _0xef470;
  } : function (_0x7723a8) {
    return _0x7723a8 && "function" == typeof Symbol && _0x7723a8.constructor === Symbol && _0x7723a8 !== Symbol.prototype ? 'symbol' : typeof _0x7723a8;
  })(_0x2205e9);
}
var lenguaje = {
  'es': {
    'opciones': "opciones",
    'zoomVelocidad': "Zoom Velocidad",
    'anchoPotenciador': "ancho del potenciador",
    'auraPotenciador': "aura del potenciador",
    'anchoComida': "ancho de la comida",
    'brilloComida': "brillo de la comida",
    'fondo': "fondo Solido",
    'laser': "laser de cabeza",
    'sectores': "sectores",
    'colorJuego': "color del juego",
    'colorLaser': "color del laser",
    'colorBorde': "color del borde",
    'copiar': "copiar",
    'fondos': "fondos",
    'fondo0': "por defecto",
    'fondo1': "espacio",
    'fondo2': "espacio 2",
    'fondo3': "azul",
    'fondo4': "espacio 3",
    'skinVisible': "SkinVisible(Para publico)",
    'soundTuto1': "descargar sonido",
    'soundTuto2': "subir sonido",
    'soundTuto3': "sonido link cabeza",
    'soundTuto4': "sonido link 10cabezas"
  },
  'en': {
    'opciones': "settings",
    'zoomVelocidad': "Zoom Speed",
    'anchoPotenciador': "booster width",
    'auraPotenciador': "power up glow",
    'anchoComida': "size of food",
    'brilloComida': "food shine",
    'fondo': "Solid background",
    'laser': "Center laser",
    'sectores': "sectors",
    'colorJuego': "game color",
    'colorLaser': "laser color",
    'colorBorde': "border color",
    'copiar': "copy",
    'fondos': "background",
    'fondo0': "default",
    'fondo1': "Green",
    'fondo2': "Blue",
    'fondo3': "Blue Black",
    'fondo4': "Blue Light",
    'skinVisible': "SkinVisible(For public)",
    'soundTuto1': "download sounds",
    'soundTuto2': "turn up sound",
    'soundTuto3': "sound link head",
    'soundTuto4': "sound link 10heads"
  },
  'uk': {
    'opciones': "Ayarlar",
    'zoomVelocidad': "Yakınlaştırma Hızı",
    'anchoPotenciador': "Güçlendirici Genişliği",
    'auraPotenciador': "Güçlendirme Aurası",
    'anchoComida': "Yem Boyutu",
    'brilloComida': "Yem Parlaklığı",
    'fondo': "Düz Arka Plan",
    'laser': "Merkez Lazeri",
    'sectores': "Sektörler",
    'colorJuego': "Oyun Rengi",
    'colorLaser': "Lazer Rengi",
    'colorBorde': "Kenarlık Rengi",
    'copiar': "Kopyala",
    'fondos': "Arka Planlar",
    'fondo0': "Varsayılan",
    'fondo1': 'Yeşil',
    'fondo2': 'Mavi',
    'fondo3': "Mavi Siyah",
    'fondo4': "Açık Mavi",
    'skinVisible': "Skin Görünürlüğü (Herkese Açık)",
    'soundTuto1': "Sesleri İndir",
    'soundTuto2': "Sesi Aç",
    'soundTuto3': "Kafa Ses Bağlantısı",
    'soundTuto4': "10 Kafa Ses Bağlantısı"
  }
};
const _wrmxt = {
  'isSkinCustom'(_0x2fb5f7) {
    var _0x5c7994 = /[a-zA-Z]/;
    return "string" == typeof _0x2fb5f7 && _0x5c7994.test(_0x2fb5f7);
  },
  'testSkinCustom': function (_0x2dd428) {
    return _wrmxt.isSkinCustom(_0x2dd428) ? 0x22 : _0x2dd428;
  },
  'testSkinMod': function (_0x58d667) {
    return 0x18f <= _0x58d667 && 0x3e7 > _0x58d667;
  },
  'testWear': function (_0x48891f) {
    return 0x18f <= _0x48891f && 0x3e7 > _0x48891f;
  },
  'isNumberValid': function (_0x5423d8) {
    return '' !== _0x5423d8 && null != _0x5423d8 && !isNaN(_0x5423d8);
  },
  'validInput': function (_0x2ecf8d) {
    if (!(0x18f <= _0x2ecf8d && 0x3e7 > _0x2ecf8d) && !_wrmxt.isSkinCustom(_0x2ecf8d)) {
      return _0x2ecf8d;
    }
    try {
      let _0x3f6caf = $("#inputReplaceSkin").val();
      return encodeURI('' !== _0x3f6caf && null != _0x3f6caf && !isNaN(_0x3f6caf) ? _0x3f6caf : 0x23);
    } catch (_0x1da69a) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
var intervalID = null;
var isRunning = false;
var initialInterval = 0x37;
var cycleCounter = 0x1;
var isIncrementing = true;
let pixi = Function("return PIXI;")();
let ungirotexture = pixi.Texture.from('https://i.imgur.com/12MgJyy.png');
let explotWtexture = pixi.Texture.from('https://i.imgur.com/DbWbUxD.png');
var keys = {
  'zoom': 'z',
  'restart': 'r',
  'giro': 'q',
  'wormExplot': 'r',
  'laserHS': 'l',
  'sectores': 'q',
  'background': 'c',
  'noSkin': '1',
  'noAuras': '2'
};
function cambiarKey(_0x2f8534, _0x35e533) {
  if (keys.hasOwnProperty(_0x2f8534)) {
    keys[_0x2f8534] = _0x35e533;
  }
}
let theoObjects = {
  'teamColor': "FFFFFF",
  'laserColor': "FFFFFF",
  'colorFondo': "0D0400",
  'colorBorde': "FF0000",
  'hsTextColor': "ffa500",
  'killTextColor': "ffa500",
  'minimapBorderColor': 'ffa500'
};
let ping;
lxpdmultiplier = 0x1;
let frameTimes = [];
let lastFrameTime = performance.now();
var backgrounds = ['https://asserts.wormworld.io/backgrounds/bkgnd0.png', 'https://asserts.wormworld.io/backgrounds/bkgnd8.png', 'https://asserts.wormworld.io/backgrounds/bkgnd9.png', 'https://asserts.wormworld.io/backgrounds/bkgnd10.png', "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", "https://asserts.wormworld.io/backgrounds/bg_sky_3.png", "https://asserts.wormworld.io/backgrounds/bg_sky_4.png", "https://asserts.wormworld.io/backgrounds/bg_sky_5.png", "https://asserts.wormworld.io/backgrounds/arena01.png", "https://asserts.wormworld.io/backgrounds/arena02.png", 'https://asserts.wormworld.io/backgrounds/arena03.png', "https://asserts.wormworld.io/backgrounds/arena04.png", "https://i.imgur.com/5gWTgd3.png", 'https://i.imgur.com/jTM50FE.png', "https://i.imgur.com/NvgYNlV.png"];
let currentIndex = localStorage.getItem('selectedBackground') ? parseInt(localStorage.getItem('selectedBackground')) : 0x0;
var fonts = ["Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace", "'Georgia', serif", "'Times New Roman', serif", "'Comic Sans MS', cursive", "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let currentFontIndex = localStorage.getItem('selectedFont') ? parseInt(localStorage.getItem("selectedFont")) : 0x0;
function getPingColor(_0x502155) {
  return _0x502155 <= 0x32 ? "#00FF00" : _0x502155 <= 0x50 ? "#ADFF2F" : _0x502155 <= 0x78 ? "#FFFF00" : _0x502155 <= 0xb4 ? "#FFA500" : _0x502155 <= 0xfa ? "#FF4500" : "#FF0000";
}
function getFPSColor(_0x5778b8) {
  return _0x5778b8 >= 0x3c ? "#00FF00" : _0x5778b8 >= 0x32 ? '#ADFF2F' : _0x5778b8 >= 0x28 ? "#FFFF00" : _0x5778b8 >= 0x1e ? "#FFA500" : _0x5778b8 >= 0x14 ? '#FF4500' : "#FF0000";
}
window.onwheel = _0x2d77ce => {
  if (_0x2d77ce.deltaY > 0x0) {
    lxpdupdatezoom(Math.max(lxpdmultiplier - 0.75 * parseFloat(theoKzObjects.zoomSpeed), 0.5));
  } else {
    lxpdupdatezoom(Math.min(lxpdmultiplier + 1.05 * parseFloat(theoKzObjects.zoomSpeed), 0x32));
  }
};
var lxpdmobilecheck = function () {
  return new (Function("return RegExp;")())("iPhone|iPad|iPod|Android", 'i').test(navigator.userAgent);
};
var lxpdupdatezoom = function (_0x266ef4) {
  var _0x54d60b = parseFloat((lxpdmultiplier = _0x266ef4).toFixed(0x2));
  if (0.01 > Math.abs(_0x54d60b)) {
    _0x54d60b = 0x0;
  } else if (0.01 > Math.abs(_0x54d60b - 0x1)) {
    _0x54d60b = 0x1;
  }
  lxpdzoomtext.text = _0x54d60b + 'x';
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var isPlaying = false;
window.keyMove = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': "dynamic",
    'position': {
      'left': "110px",
      'bottom': '110px'
    },
    'color': "#222",
    'pxy': 0x6e
  }
};
var idiomaActual = window.location.href.includes("/es") ? 'es' : window.location.href.includes("/uk") ? 'uk' : 'en';
var theoKzObjects = {
  'FB_UserID': '',
  'fps': false,
  'ping': false,
  'chngBotSkins': true,
  'chngPersonsSkins': true,
  'minimapTeamcod': false,
  'hideYouNameInMinimap': false,
  'Incognito': false,
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': false,
  'sectores': false,
  'visiblePowersAll': false,
  'speed_zigzag': true,
  'zoomSpeed': localStorage.getItem("zoomSpeed") || 0x1,
  'PotenciadorSize': localStorage.getItem("PotenciadorSize") || 0x2,
  'PotenciadorAura': localStorage.getItem("PotenciadorAura") || 1.2,
  'ComidaShadow': localStorage.getItem('ComidaShadow') || 0x2,
  'ComidaSize': localStorage.getItem("ComidaSize") || 0x2,
  'mouseDelay': localStorage.getItem("mouseDelay") || 0x14,
  'smoothCamera': localStorage.getItem('smoothCamera') || 0.5,
  'eat_animation': 0.0025,
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'showTeamList': true,
  'animationHeadshot': true,
  'top8': true,
  'killFeed': true,
  'noAuras': true,
  'noSkin': true,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'dead': false,
  'FoodShadow': localStorage.ComidaShadow || 0x2,
  'FoodSize': localStorage.ComidaSize || 0x2,
  'headshot': 0x0,
  'idReplaceSkin': 0x23,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents.joystick,
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
if ((saveGameLocal = localStorage.getItem("SaveGameXT")) && "null" !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects.loading = true;
let soundEnabled;
var turkData = {
  'id_user': '',
  'nickname': "WTR",
  'enemyNameHs': "No Name Player",
  'teamCode': '',
  'playerX': 0x0,
  'playerY': 0x0,
  'hs': 0x0,
  'kill': 0x0,
  'message': '',
  'teamColor': localStorage.getItem("teamColor") || "0xffffff",
  'wssServer': ''
};
let socket;
const gameState = {
  'players': new Map()
};
function connectSocket() {
  if (socket && socket.readyState !== WebSocket.CLOSED) {
    console.log("Eski bağlantı kapatılıyor...");
    socket.close();
  }
  socket = new WebSocket("wss://wormmedia.xyz:9800");
  socket.addEventListener("open", () => {
    isConnected = true;
    console.log("✅ WebSocket bağlı");
  });
  socket.addEventListener("close", () => {
    isConnected = false;
    console.log("❌ WebSocket bağlantısı kesildi. Tekrar bağlanılacak...");
    attemptReconnect();
  });
  socket.addEventListener("message", async _0x28b767 => {
    try {
      const _0x272e8e = _0x28b767.data instanceof Blob ? JSON.parse(await _0x28b767.data.text()) : JSON.parse(_0x28b767.data);
      if (_0x272e8e.type === "hsKillUpdate") {
        gameState.players.set(_0x272e8e.id_user, {
          'nickname': _0x272e8e.nickname,
          'hskill': _0x272e8e.hskill,
          'teamColor': _0x272e8e.teamColor || 0xffffff
        });
        updateTop8Hs();
      }
      if (_0x272e8e.type === "topHsPlayers") {
        updateHeadshotHistory(_0x272e8e.players);
      }
      handleMessage(_0x272e8e);
    } catch (_0x31c46d) {
      console.error("Mesaj işleme hatası:", _0x31c46d);
    }
  });
}
let isConnected = false;
function attemptReconnect() {
  if (!isConnected) {
    setTimeout(() => {
      connectSocket();
    }, 0x1388);
  }
}
connectSocket();
window.addEventListener("beforeunload", () => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
  }
});
function handleMessage(_0x2d59ae) {
  if (_0x2d59ae.id_user === "gg_116823912010482082044") {
    createServerMessage("[By YıLdo OWNER]", _0x2d59ae.message);
    console.log("Servidor " + _0x2d59ae.id_user + " ha enviado un mensaje: " + _0x2d59ae.message);
  }
  if (_0x2d59ae.wssServer !== '') {
    return;
  }
  switch (_0x2d59ae.type) {
    case 'initialState':
      handleInitialState(_0x2d59ae.players);
      break;
    case "playerUpdate":
      handlePlayerUpdate(_0x2d59ae);
      break;
    case "hsKillUpdate":
      handleHSKillUpdate(_0x2d59ae);
      break;
    case "playerDeath":
      handlePlayerDeath(_0x2d59ae);
      break;
    case "playerDisconnect":
      removePlayer(_0x2d59ae.id);
      break;
    default:
      console.log("Mensaje desconocido:", _0x2d59ae);
  }
}
function sendMessage() {
  if (!isConnected) {
    console.log("No conectado, esperando a que se restablezca la conexión...");
    return;
  }
  const _0x3556c5 = $('#chat-input').val().trim();
  if (_0x3556c5 === '') {
    return;
  }
  const _0x1dcb6f = "WTR".substring(0x0, 0x10);
  const _0x33e951 = getUserData('');
  const _0x3f0e51 = {
    'type': "chatMessage",
    'id_user': '',
    'nickname': _0x1dcb6f,
    'message': _0x3556c5,
    'wssServer': '',
    'color': _0x33e951 ? _0x33e951.color : "rgba(255, 255, 255, 0.1)",
    'image': _0x33e951 ? _0x33e951.image : "default_icon.png"
  };
  socket.send(JSON.stringify(_0x3f0e51));
  displayMessage(_0x1dcb6f, _0x3556c5, '', _0x3f0e51.color, _0x3f0e51.image, true);
  $("#chat-input").val('');
}
function displayMessage(_0x295c81, _0x5e1894, _0x382d7f, _0x18d0c3, _0x573fc3, _0x57b2e9 = false) {
  const _0x255cca = _0x573fc3 ? "<img src=\"" + _0x573fc3 + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : '';
  const _0x5bd77c = _0x57b2e9 ? "lightblue" : 'white';
  const _0x2836e0 = "\n        <div class=\"chat-message\" style=\"background: " + (_0x18d0c3 || "rgba(255, 255, 255, 0.1)") + ";\">\n            " + _0x255cca + "\n            <strong id=\"" + _0x382d7f + "\" style=\"color: " + _0x5bd77c + "\">" + _0x295c81 + ":</strong>\n            <span>" + _0x5e1894 + "</span>\n        </div>\n    ";
  $('#chat-history').append(_0x2836e0).scrollTop($('#chat-history')[0x0].scrollHeight);
}
function handleInitialState(_0x5dfe26) {
  _0x5dfe26.forEach(_0x596f72 => gameState.players.set(_0x596f72.id_user, _0x596f72));
  console.log("Estado inicial recibido:", _0x5dfe26);
}
function handlePlayerUpdate(_0x1d7fc9) {
  const _0x2048a4 = gameState.players.get(_0x1d7fc9.id_user) || {};
  const _0x1e6cf0 = {
    ..._0x2048a4,
    ..._0x1d7fc9
  };
  _0x1e6cf0.position = _0x1d7fc9.position || _0x2048a4.position || {
    'x': 0x0,
    'y': 0x0
  };
  gameState.players.set(_0x1d7fc9.id_user, _0x1e6cf0);
  updateTop8Hs();
  if (_0x1e6cf0.teamCode && _0x1e6cf0.teamCode === '') {
    createTeamUbication(_0x1e6cf0.teamCode, _0x1e6cf0.teamColor);
    createTeamMessage(_0x1e6cf0.teamCode, _0x1e6cf0.nickname, _0x1e6cf0.message);
  }
}
function handleHSKillUpdate(_0x2a2e67, _0x5edc20) {
  console.log("🎯 HS Güncelleme: " + _0x2a2e67.nickname);
  const _0x1321ed = gameState.players.get(_0x2a2e67.id_user);
  if (_0x1321ed) {
    _0x1321ed.hskill.hs += _0x2a2e67.hskill.hs;
    _0x1321ed.hskill.kill += _0x2a2e67.hskill.kill;
  } else {
    gameState.players.set(_0x2a2e67.id_user, {
      ..._0x2a2e67,
      'hskill': {
        ..._0x2a2e67.hskill
      },
      'position': {
        'x': 0x0,
        'y': 0x0
      }
    });
  }
  const _0x4fbe78 = gameState.players.get(_0x2a2e67.id_user);
  console.log("🧠 Player state:", _0x4fbe78);
  updateTop8Hs();
}
function handlePlayerDeath(_0x22fe6e) {
  gameState.players['delete'](_0x22fe6e.id_user);
  console.log("El jugador " + _0x22fe6e.nickname + " ha muerto.");
  updateTop8Hs();
  clearTeamUbication();
}
function removePlayer(_0x5acc0f) {
  gameState.players['delete'](_0x5acc0f);
  console.log("Jugador " + _0x5acc0f + " desconectado.");
}
function sendUpdate(_0x3b4ea6, _0x1b0c95 = {}) {
  if (!isConnected) {
    console.log("No conectado, esperando para enviar actualización...");
    return;
  }
  const _0x1caa92 = {
    'type': _0x3b4ea6,
    'id_user': '',
    'nickname': "WTR",
    'enemyNameHs': "No Name Player",
    'hskill': {
      'hs': 0x0,
      'kill': 0x0
    },
    'position': {
      'x': 0x0,
      'y': 0x0
    },
    'message': '',
    'teamCode': '',
    'teamColor': turkData.teamColor,
    'wssServer': '',
    ..._0x1b0c95
  };
  socket.send(JSON.stringify(_0x1caa92));
}
let lastUpdateTime = 0x0;
let updateQueue = [];
function sendPlayerUpdate(_0x540bab, _0x502a3a) {
  const _0xaf741a = Date.now();
  updateQueue.push({
    'x': _0x540bab,
    'y': _0x502a3a
  });
  if (_0xaf741a - lastUpdateTime >= 0x64) {
    sendBufferedUpdates();
    lastUpdateTime = _0xaf741a;
  }
}
function sendBufferedUpdates() {
  if (updateQueue.length > 0x0) {
    updateQueue.forEach(_0x462a3d => {
      sendUpdate("playerUpdate", {
        'position': _0x462a3d
      });
    });
    updateQueue = [];
  }
}
function sendPlayerDeath(_0x4c1fe4, _0x33e6ac) {
  sendUpdate("playerDeath", {
    'hskill': {
      'hs': _0x4c1fe4,
      'kill': _0x33e6ac
    }
  });
  console.log("Jugador  ha muerto.");
}
function sendHSKillUpdate(_0x290850, _0x2919e1) {
  sendUpdate("hsKillUpdate", {
    'hskill': {
      'hs': _0x290850,
      'kill': _0x2919e1
    }
  });
  console.log("Jugador  HS/Kill actualizado: HS " + _0x290850 + ", Kill " + _0x2919e1);
}
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
let clientsSkins = {
  'clientsSkinsVencidos': [],
  'clientsSkinsActivos': []
};
var TIME = new Date().getTime();
async function loadUsers() {
  try {
    await fetch('https://wormmedia.xyz:2701/api/clients.json');
    let _0x4313ce = await t.json();
    console.log(_0x4313ce);
    if (_0x4313ce.success) {
      let _0x1777d9 = _0x4313ce.Users;
      clientes.clientesActivos = _0x1777d9.filter(_0x4a388e => _0x4a388e.client_ID);
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
    }
  } catch (_0x47b55f) {
    console.error("API request failed:", _0x47b55f);
  }
}
async function loadSkinUnlock() {
  await fetch("https://wormatetr.github.io/extension/w2/api/skinsActived.php?v=" + TIME).then(_0x481571 => _0x481571.json()).then(_0x547180 => {
    console.log(_0x547180);
    if (_0x547180.success) {
      let _0x4dc3b3 = _0x547180.Users;
      clientsSkins.clientsSkinsActivos = _0x4dc3b3.filter(_0xbfde5c => _0xbfde5c.client_ID);
    } else {
      clientsSkins = {
        'clientsSkinsVencidos': [],
        'clientsSkinsActivos': []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadUsers();
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  const _0x5216db = "https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=" + TIME;
  try {
    const _0x5a0fc8 = await fetch(_0x5216db);
    const _0xf8fbc1 = await _0x5a0fc8.text();
    const _0x1a0df9 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    const _0x219ece = [..._0xf8fbc1.matchAll(_0x1a0df9)];
    serverDataTimMap = _0x219ece.map(_0x5d7839 => {
      const _0x313b0b = _0x5d7839[0x1];
      const _0x247b57 = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      const _0x35e83b = _0x313b0b.match(_0x247b57);
      if (!_0x35e83b) {
        return null;
      }
      const _0x49f866 = _0x35e83b[0x3].replace(/\\\//g, '/');
      const _0x3fee89 = _0x35e83b[0x2];
      const _0x4d350b = decodeUnicode(_0x35e83b[0x4].trim());
      const _0xfad5a = /<img src=\\"(.*?)\\"/;
      const _0x27e4c9 = _0x313b0b.match(_0xfad5a);
      const _0x14411f = _0x27e4c9 ? _0x27e4c9[0x1].replace(/\\\//g, '/') : '';
      return {
        'dataCon': _0x49f866,
        'dataRoom': _0x3fee89,
        'dataType': 'false',
        'imgSrc': _0x14411f,
        'serverName': _0x4d350b
      };
    }).filter(Boolean);
  } catch (_0x5c778a) {
    console.error("Error al cargar servidores TimMap:", _0x5c778a);
  }
}
var top1Servers = {};
async function extractTopScores() {
  const _0x38949b = 'https://zworm.xyz:3305/data?v=' + Date.now();
  try {
    let _0x10f922 = await fetch(_0x38949b);
    if (!_0x10f922.ok) {
      throw new Error("HTTP error! Status: " + _0x10f922.status);
    }
    let _0x56f521 = await _0x10f922.json();
    top1Servers = {};
    for (let _0x423263 in _0x56f521) {
      const _0x5b2132 = _0x56f521[_0x423263];
      if (!_0x5b2132.wsUrl) {
        continue;
      }
      const _0x506c91 = _0x5b2132.players || [];
      const _0x3835ba = _0x5b2132.wsUrl;
      if (_0x506c91.length > 0x0) {
        let _0x3a78db = _0x506c91.reduce((_0x2f93f3, _0x4befaf) => _0x4befaf.Score > _0x2f93f3.Score ? _0x4befaf : _0x2f93f3, _0x506c91[0x0]);
        let _0x23cb45 = _0x3a78db.Score >= 0xf4240 ? (_0x3a78db.Score / 0xf4240).toFixed(0x1) + 'M' : _0x3a78db.Score >= 0x3e8 ? (_0x3a78db.Score / 0x3e8).toFixed(0x1) + 'K' : _0x3a78db.Score.toString();
        let _0x434194 = _0x3a78db.Score > 0x989680 ? "green" : _0x3a78db.Score > 0x1e8480 ? "orange" : "red";
        top1Servers[_0x3835ba] = {
          'ServerName': _0x3a78db.ServerName,
          'Initials': _0x423263,
          'Score': _0x23cb45,
          'StatusColor': _0x434194,
          'Avatar': _0x5b2132.avatar || null,
          'Name': _0x3a78db.Name || "(unknown)",
          'TopPlayers': _0x506c91.slice(0x0, 0xa)
        };
      } else if (_0x5b2132.wsUrl) {
        top1Servers[_0x3835ba] = {
          'ServerName': _0x5b2132.serverName,
          'Initials': _0x423263,
          'Score': "Vacío",
          'StatusColor': "gray",
          'Avatar': _0x5b2132.avatar || "https://i.imgur.com/placeholder.png",
          'Name': '(N/A)',
          'TopPlayers': []
        };
      }
    }
    console.log("Datos de Top 1 organizados por WSS:", top1Servers);
  } catch (_0x1eee4c) {
    console.error("Error fetching server data:", _0x1eee4c);
  }
}
let serverData = [];
async function loadServersWormWorld() {
  let _0x5cd5d4 = "https://wormatetr.github.io/extension/w2/api/servers.php?v=" + TIME;
  await fetch(_0x5cd5d4).then(_0x3459f5 => _0x3459f5.text()).then(_0x3cb898 => {
    let _0x17411e = new DOMParser();
    let _0x4eede7 = _0x17411e.parseFromString(_0x3cb898, "text/html");
    let _0x37cd2d = _0x4eede7.querySelectorAll("div[id*=\"wwc_room_item_\"]");
    console.log(_0x37cd2d);
    _0x37cd2d.forEach(_0x41c015 => {
      let _0x2aaa7b = _0x41c015.querySelector(".dropdown-item.selecionar-sala-v2");
      let _0x233894 = _0x2aaa7b.getAttribute('data-con');
      let _0xc1ae72 = _0x2aaa7b.getAttribute("data-room");
      let _0x4a1c71 = _0x41c015.textContent.trim();
      let _0x2e9fa3 = _0x2aaa7b.getAttribute("data-type");
      let _0x47bf97 = _0x41c015.querySelector("img");
      let _0x3b042f = _0x47bf97 ? _0x47bf97.getAttribute("src") : null;
      serverData.push({
        'dataCon': _0x233894,
        'dataRoom': _0xc1ae72,
        'serverName': _0x4a1c71,
        'dataType': _0x2e9fa3,
        'imgSrc': _0x3b042f
      });
    });
    console.log(serverData);
  })["catch"](_0x405143 => {
    console.log(_0x405143);
  });
}
function formatScore(_0x39a31a) {
  return _0x39a31a >= 0xf4240 ? (_0x39a31a / 0xf4240).toFixed(0x1) + 'M' : _0x39a31a >= 0x3e8 ? (_0x39a31a / 0x3e8).toFixed(0x1) + 'K' : _0x39a31a.toString();
}
function getStatusColor(_0x4ee9f8) {
  return _0x4ee9f8 > 0x989680 ? 'green' : _0x4ee9f8 > 0x1e8480 ? 'orange' : 'red';
}
async function registerUpdatePlayer(_0x5e9b96) {
  await fetch("https://wormturkio.com/new/api/register_update_player.php", {
    'method': 'POST',
    'body': JSON.stringify({
      'data': _0x5e9b96
    })
  }).then(_0x4d701c => _0x4d701c.json()).then(_0x2070a7 => {
    console.log(_0x2070a7);
  });
}
async function checkSubscriptionExpired(_0x1359b9) {
  await fetch("https://wormturkio.com/new/api/checkSubscriptionExpired.php", {
    'method': "POST",
    'body': JSON.stringify({
      'code': _0x1359b9
    })
  }).then(_0x36d359 => _0x36d359.json()).then(_0xe09421 => {
    console.log(_0xe09421);
  });
}
function fetchCustomLogo(_0x1dddd2) {
  $.ajax({
    'url': 'https://wormturkio.com/wormExtension/key/streming.php',
    'method': "GET",
    'dataType': "json",
    'success': function (_0x3e7801) {
      var _0x54653c = _0x3e7801.allstreamers.streamers.filter(function (_0x39694d) {
        return _0x39694d.id_game === _0x1dddd2;
      });
      if (0x0 === _0x54653c.length) {
        console.log("No hay streamers online.");
        return;
      }
      var _0x4c98fe = _0x54653c[0x0];
      $(".mm-logo").attr("src", _0x4c98fe.logo);
      $(".loading-logo").attr("src", _0x4c98fe.logo);
      $(".mm-logo").attr("src", _0x4c98fe.logo);
      $(".mm-logo2").attr("src", _0x4c98fe.url_logo);
    },
    'error': function (_0x5742de) {
      console.error("Error al obtener los datos:", _0x5742de);
    }
  });
}
async function init() {
  await Promise.all([extractTopScores(), loadServersWormWorld(), loadServersTimMap()]);
  console.log("Todo listo");
  renderInterface(serverData, serverDataTimMap, top1Servers);
}
function renderInterface(_0x4c3771, _0x1f44a5, _0x52cb80) {
  $('.description-text').empty();
  let _0x4b06b1 = "wormworld";
  const _0x4a8f0b = {
    'sao': 'br',
    'vin': 'us',
    'dal': 'us',
    'fra': 'de',
    'sgp': 'sg',
    'tok': 'jp',
    'syd': 'au',
    'lon': 'gb',
    'tor': 'ca',
    'mex': 'mx',
    'sin': 'sg',
    'hil': 'us',
    'gra': 'de'
  };
  const _0x28f8df = [{
    'code': 'br',
    'name': "Peru"
  }, {
    'code': 'mx',
    'name': "Mexico"
  }, {
    'code': 'us',
    'name': "EEUU"
  }, {
    'code': 'ca',
    'name': "Canada"
  }, {
    'code': 'de',
    'name': "Germania"
  }, {
    'code': 'fr',
    'name': "Francia"
  }, {
    'code': 'sg',
    'name': "Singapur"
  }, {
    'code': 'jp',
    'name': 'Japon'
  }, {
    'code': 'au',
    'name': "Australia"
  }, {
    'code': 'gb',
    'name': "Granbretana"
  }];
  $(".description-text").append("\n        <div class=\"switchServerSource\" style=\"position: absolute; top: -5px; left: 200px; width: 200px;\">\n            <button id=\"toggleServerSource\" style=\"margin-bottom: 10px; padding: 6px 12px; background: #252535; color: white; border: 1px solid; border-radius: 1px;\">\n                 Switch to TimMap Servers\n            </button>\n        </div>\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let _0x2f74da = $("#optionSelect").val();
    let _0x2ddb8b = $("#numberInput").val();
    if (!_0x2f74da || _0x2ddb8b === '') {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
      return;
    }
    zw_lastserver = "wss://" + _0x2f74da + ':' + _0x2ddb8b + '/wormy';
    anApp.r.Hd();
    anApp.sa(zw_lastserver);
    zw_servertext.text = '' + zw_lastserver.replace('wss://', '').replace(".wormate.io", '').replace('/wormy', '');
  });
  const _0x584af8 = $("<ul class=\"ui-tabs-nav\"></ul>");
  const _0x9a2461 = $("<div class=\"servers-container\"></div>");
  _0x28f8df.forEach(function (_0x3b19bb, _0x1245d4) {
    _0x584af8.append("\n            <li class=\"ui-tabs-tab ui-tab " + (_0x1245d4 === 0x0 ? 'ui-tab-active' : '') + "\" data-country=\"" + _0x3b19bb.code + "\">\n                <a><span class=\"flag " + _0x3b19bb.code + "\"></span></a>\n            </li>\n        ");
    _0x9a2461.append("\n            <div class=\"servers-" + _0x3b19bb.code + "\" style=\"display: " + (_0x1245d4 === 0x0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
  });
  $('.description-text').append(_0x584af8, _0x9a2461);
  $(".ui-tabs-tab").click(function () {
    var _0x325700 = $(this).data('country');
    $(".ui-tabs-tab").removeClass('ui-tab-active');
    $(this).addClass('ui-tab-active');
    $(".servers-container > div").hide();
    $(".servers-" + _0x325700).fadeIn(0xc8);
  });
  function _0x2680e2(_0x2fcccd) {
    $(".server-table tbody").empty();
    _0x2fcccd.forEach(function (_0x279f87) {
      const _0x45b936 = {
        'serverName': _0x279f87.serverName || _0x279f87.name || '❗',
        'dataCon': _0x279f87.dataCon || _0x279f87.wss,
        'dataRoom': _0x279f87.dataRoom || _0x279f87.room || '❗',
        'imgSrc': _0x279f87.imgSrc || _0x279f87.streamerImg || "https://i.imgur.com/placeholder.png"
      };
      _0x54856e(_0x45b936, _0x52cb80);
    });
  }
  $(document).on("click", "#toggleServerSource", function () {
    _0x4b06b1 = _0x4b06b1 === "wormworld" ? "timmap" : 'wormworld';
    $(this).text(_0x4b06b1 === "wormworld" ? "Switch to TimMap Servers" : "Switch to WormWorld Servers");
    _0x2680e2(_0x4b06b1 === "wormworld" ? _0x4c3771 : _0x1f44a5);
  });
  _0x2680e2(_0x4c3771);
  function _0x54856e(_0x545b76, _0x509fe8) {
    let _0x385400 = /^\d+[a-z]{2}$/i.test(_0x545b76.dataRoom) ? _0x545b76.dataRoom.slice(-0x2).toLowerCase() : /^[A-Z]{2}_\d+$/i.test(_0x545b76.dataRoom) ? _0x545b76.dataRoom.split('_')[0x0].toLowerCase() : "otros";
    if (_0x385400 === 'ae') {
      _0x385400 = 'gb';
    }
    if (!_0x28f8df.some(_0x4cc937 => _0x4cc937.code === _0x385400)) {
      return;
    }
    let _0x305457 = _0x545b76.dataCon?.["match"](/wss:\/\/([a-z]+)-/i);
    let _0x1ff5d8 = _0x305457 ? _0x305457[0x1] : null;
    let _0x16e492 = _0x4a8f0b[_0x1ff5d8] ? _0x4a8f0b[_0x1ff5d8].toUpperCase() : "Desconocido";
    const _0x35eab0 = _0x545b76.dataCon || _0x545b76.wss;
    let _0xccb53 = _0x509fe8[_0x35eab0] || {
      'Score': '❗',
      'StatusColor': "gray",
      'Avatar': "https://i.imgur.com/placeholder.png"
    };
    let _0x18ec6a = $("\n            <tr class=\"server-row\" data-wss=\"" + _0x35eab0 + "\" value=\"" + _0x545b76.dataRoom + "\">\n                <td class=\"server-status\" data-score=\"" + _0xccb53.Score + "\" data-img=\"" + _0xccb53.Avatar + "\">\n                    <span class=\"status-dot\" style=\"background-color: " + _0xccb53.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\">" + _0x545b76.serverName + "</td>\n                <td class=\"server-region\">" + _0x16e492 + "</td>\n                <td class=\"server-top1\" data-score=\"" + _0xccb53.Score + "\" data-img=\"" + _0xccb53.Avatar + "\">" + _0xccb53.Score + "</td>\n                <td><img src=\"" + _0x545b76.imgSrc + "\" class=\"streamer-image\"></td>\n                <td><button class=\"btn-check-ports\">PLAY</button></td>\n            </tr>\n        ");
    $('.servers-' + _0x385400 + " tbody").append(_0x18ec6a);
  }
  $(document).on("click", ".server-row", function () {
    let _0x1da365 = $(this).attr("value");
    let _0xe77033 = $(this).attr('data-wss');
    if (_0xe77033) {
      anApp.r.Hd();
      anApp.sa(_0xe77033);
      zw_servertext.text = _0x1da365;
      setTimeout(() => {
        zw_servertext.text = _0x1da365;
      }, 0x7d0);
    }
  });
  createFloatingElements();
  bindHoverEvents(".server-top1");
  bindHoverEvents(".server-status");
}
function createFloatingElements() {
  if (!document.getElementById('avatarPreview')) {
    const _0x5da0d6 = document.createElement("div");
    _0x5da0d6.id = "avatarPreview";
    Object.assign(_0x5da0d6.style, {
      'position': 'absolute',
      'display': "none",
      'pointerEvents': "none",
      'opacity': '0',
      'transition': "opacity 0.3s ease",
      'zIndex': "9999"
    });
    const _0xce3f41 = document.createElement("img");
    _0xce3f41.id = "avatarImage";
    Object.assign(_0xce3f41.style, {
      'width': "100px",
      'height': "100px",
      'borderRadius': "50%",
      'border': "2px solid #fff",
      'boxShadow': "0 0 10px rgba(0,0,0,0.5)",
      'backgroundColor': "#1a1a1a"
    });
    _0x5da0d6.appendChild(_0xce3f41);
    document.body.appendChild(_0x5da0d6);
  }
  if (!document.getElementById('top10Preview')) {
    const _0x3ec3f4 = document.createElement("div");
    _0x3ec3f4.id = 'top10Preview';
    Object.assign(_0x3ec3f4.style, {
      'position': "absolute",
      'display': "none",
      'pointerEvents': 'none',
      'opacity': '0',
      'transition': "opacity 0.3s ease",
      'zIndex': "9999",
      'padding': "10px",
      'borderRadius': "8px",
      'backgroundColor': "rgba(30, 30, 40, 0.95)",
      'color': '#fff',
      'fontSize': "12px",
      'minWidth': "230px",
      'boxShadow': "0 0 10px rgba(0,0,0,0.6)",
      'fontFamily': "Segoe UI, sans-serif"
    });
    const _0xb72f97 = document.createElement("div");
    _0xb72f97.id = "top10List";
    _0x3ec3f4.appendChild(_0xb72f97);
    document.body.appendChild(_0x3ec3f4);
  }
}
function showAvatar(_0x3c3757, _0x26b565) {
  if (_0x26b565) {
    $("#avatarImage").attr("src", _0x26b565);
    $("#avatarPreview").css({
      'top': _0x3c3757.pageY + 0xa + 'px',
      'left': _0x3c3757.pageX + 0xa + 'px',
      'display': "block"
    }).stop(true, true).fadeTo(0xc8, 0x1);
  }
}
function showTop10(_0x1bae65, _0x323e69) {
  if (_0x323e69.length > 0x0) {
    let _0x186835 = "<div style=\"font-size:14px; font-weight:bold; text-align:center; margin-bottom:8px;\">Top 10 </div><hr style=\"border-color:#444;\">";
    _0x186835 += _0x323e69.map((_0x5637c1, _0x3104e4) => {
      const _0x44f31f = _0x3104e4 === 0x0;
      return "\n                <div style=\"display:flex; justify-content:space-between; margin: 4px 0; " + (_0x44f31f ? "font-weight:bold; color:#ffd700;" : '') + "\">\n                    <span>" + (_0x44f31f ? '' : _0x3104e4 + 0x1 + '.') + " " + _0x5637c1.Name.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '').trim() + "</span>\n                    <span>" + (_0x5637c1.Score >= 0xf4240 ? (_0x5637c1.Score / 0xf4240).toFixed(0x1) + 'M' : _0x5637c1.Score >= 0x3e8 ? (_0x5637c1.Score / 0x3e8).toFixed(0x1) + 'K' : _0x5637c1.Score.toString()) + "</span>\n                </div>";
    }).join('');
    $("#top10List").html(_0x186835);
    $('#top10Preview').css({
      'top': _0x1bae65.pageY + 0xa + 0x64 + 0xa + 'px',
      'left': _0x1bae65.pageX + 0xa + 'px',
      'display': "block"
    }).stop(true, true).fadeTo(0xc8, 0x1);
  }
}
function bindHoverEvents(_0x44101a) {
  $(document).off("mouseenter", _0x44101a).on("mouseenter", _0x44101a, function (_0x5339d0) {
    const _0x4d5406 = $(this).closest('tr').attr("data-wss");
    if (!_0x4d5406) {
      return;
    }
    const _0x41bc38 = top1Servers[_0x4d5406];
    if (_0x41bc38) {
      showAvatar(_0x5339d0, _0x41bc38.Avatar);
      showTop10(_0x5339d0, _0x41bc38.TopPlayers || []);
    }
  });
  $(document).off("mousemove", _0x44101a).on("mousemove", _0x44101a, function (_0x44bda8) {
    $('#avatarPreview').css({
      'top': _0x44bda8.pageY + 0xa + 'px',
      'left': _0x44bda8.pageX + 0xa + 'px'
    });
    $("#top10Preview").css({
      'top': _0x44bda8.pageY + 0xa + 0x64 + 0xa + 'px',
      'left': _0x44bda8.pageX + -0x4b + 'px'
    });
  });
  $(document).off("mouseleave", _0x44101a).on("mouseleave", _0x44101a, function () {
    $("#avatarPreview").stop(true, true).fadeTo(0x12c, 0x0, function () {
      $(this).hide();
    });
    $('#top10Preview').stop(true, true).fadeTo(0x12c, 0x0, function () {
      $(this).hide();
    });
  });
}
init();
function sanitize(_0x4a06c1) {
  return _0x4a06c1.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '').trim();
}
function obtenerImagenPorSeleccion(_0x4789fb) {
  let _0x50aa97 = '';
  switch (_0x4789fb) {
    case '0':
      _0x50aa97 = 'https://asserts.wormworld.io/backgrounds/bkgnd0.png';
      break;
    case '1':
      _0x50aa97 = 'https://asserts.wormworld.io/backgrounds/bkgnd8.png';
      break;
    case '2':
      _0x50aa97 = 'https://asserts.wormworld.io/backgrounds/bkgnd9.png';
      break;
    case '3':
      _0x50aa97 = 'https://asserts.wormworld.io/backgrounds/bkgnd10.png';
      break;
    case '4':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case '5':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case '6':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case '7':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case '8':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case '9':
      _0x50aa97 = 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png';
      break;
    case '10':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case '11':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/arena01.png";
      break;
    case '12':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case '13':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case '14':
      _0x50aa97 = "https://asserts.wormworld.io/backgrounds/arena04.png";
      break;
    default:
      console.warn("Valor no vï¿½lido, se utilizarï¿½ una imagen por defecto.");
  }
  return _0x50aa97;
}
function startInterval() {
  clearInterval(intervalID);
  if (null === intervalID) {
    intervalID = setInterval(function () {
      var _0x2db3ed = anApp.s.H.sk;
      let _0x5c66dc = Math.PI;
      var _0x3f6c52 = _0x2db3ed + _0x5c66dc / 0x168 * 0x9;
      if (_0x3f6c52 >= _0x5c66dc) {
        _0x3f6c52 = -_0x2db3ed;
      }
      anApp.s.H.sk = _0x3f6c52;
    }, 0x37);
  }
}
function adjustInterval() {
  if (cycleCounter >= 0x28) {
    if (isIncrementing) {
      initialInterval += 0x19;
    } else {
      initialInterval -= 0x64;
    }
    cycleCounter = 0x1;
  }
}
function controlIntervalAdjustment() {
  if (0x37 === initialInterval && cycleCounter >= 0x28) {
    initialInterval += 0x19;
    cycleCounter = 0x1;
    isIncrementing = true;
  }
  if (0x50 === initialInterval) {
    adjustInterval();
  }
  if (0x69 === initialInterval) {
    adjustInterval();
  }
  if (0x82 === initialInterval) {
    adjustInterval();
  }
  if (0x9b === initialInterval) {
    adjustInterval();
  }
  if (0xb4 === initialInterval) {
    adjustInterval();
  }
  if (0xcd === initialInterval) {
    adjustInterval();
  }
  if (0xe6 === initialInterval) {
    adjustInterval();
  }
  if (0xff === initialInterval) {
    adjustInterval();
  }
  if (0x118 === initialInterval) {
    adjustInterval();
  }
  if (0x131 === initialInterval) {
    adjustInterval();
  }
  if (0x14a === initialInterval) {
    adjustInterval();
  }
  if (0x163 === initialInterval) {
    adjustInterval();
  }
  if (0x17c === initialInterval) {
    adjustInterval();
  }
  if (0x195 === initialInterval) {
    adjustInterval();
  }
  if (0x1ae === initialInterval) {
    adjustInterval();
  }
  if (0x1c7 === initialInterval && cycleCounter >= 0x28) {
    initialInterval -= 0x64;
    cycleCounter = 0x1;
    isIncrementing = false;
  }
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (null === intervalID) {
    let _0x5d49d9 = anApp.s.H.sk;
    let _0x38c442 = Math.PI;
    let _0x26d9d8 = _0x5d49d9 + _0x38c442 / 0x168 * 0x9;
    if (_0x26d9d8 >= _0x38c442) {
      _0x26d9d8 = -_0x5d49d9;
    }
    anApp.s.H.sk = _0x26d9d8;
    cycleCounter += 0x1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
    }
  }
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 0x37;
  cycleCounter = 0x1;
  isIncrementing = true;
  manageIntervalCycle();
}
loadServersWormWorld();
loadServersTimMap();
extractTopScores();
const isPremiumUser = 'true' === localStorage.getItem("premium");
console.log("Premium Status:", localStorage.getItem('premium'));
const wormxt_5dlrs_Obj = {
  'visiblePowersAll': false,
  'speed_zigzag': true
};
var wormxt_Obj = {
  'laserColor': 'FFFFFF',
  'colorFondo': "0D0400",
  'colorBorde': "FF0000",
  'laserHS': false,
  'spawnInfinity': false,
  'backgroundSolid': false,
  'sectores': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
const showVersionPays = async function (_0x5cf6a2) {
  var _0x86282a = clientes.clientesActivos.find(function (_0x484e06) {
    return _0x484e06.client_ID === _0x5cf6a2.user_data.userId;
  });
  if (_0x86282a) {
    console.log("El ID " + _0x5cf6a2.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    let _0x3737d0 = new Date();
    let _0x1ba6ff = new Date(_0x86282a.client_DateExpired);
    if (_0x3737d0 > _0x1ba6ff) {
      console.log("La fecha de expiraciï¿½n ha vencido.");
      localStorage.setItem("premium", "false");
    } else {
      console.log("La fecha de expiraciï¿½n es vï¿½lida.");
      settings5dolars(_0x86282a.client_DateExpired);
      localStorage.setItem('premium', "true");
    }
  } else {
    console.log("El ID generado no coincide con ningï¿½n ID almacenado en la base de datos.");
    localStorage.setItem("premium", "false");
  }
};
function setSectorsGame() {
  lxpdBackground.removeChildren();
  lxpdBackground.clear();
  console.log("0D0400");
  lxpdBackground.removeChildren();
  lxpdBackground.clear();
  lxpdBackground.lineStyle(0x1, 0xff0000, 0x1);
  lxpdBackground.drawCircle(0x0, 0x0, 0x1f4);
  lxpdBackground.endFill();
}
function decodeUnicode(_0x255985) {
  return _0x255985.replace(/\\u[\dA-F]{4}/gi, function (_0x2d18fb) {
    return String.fromCharCode(parseInt(_0x2d18fb.replace(/\\u/, ''), 0x10));
  }).replace(/\\u[0-9A-F]{2}/g, function (_0x3d7f49) {
    return String.fromCharCode(parseInt(_0x3d7f49.replace(/\\u/, ''), 0x10));
  });
}
const settings5dolars = async function (_0x30c661) {
  var _0x1f3d06 = $("div[category='theme']");
  addMinicolor(_0x1f3d06[0x1], "gameColorGroup", 'Game', "colorFondo", "0D0400");
  addMinicolor(_0x1f3d06[0x1], "borderColorGroup", "Borde Game", "colorBorde", "FF0000");
  addMinicolor(_0x1f3d06[0x1], 'laserColorGroup', "Laser", "laserColor", "FFFFFF");
  addMinicolor(_0x1f3d06[0x1], 'hsTextColorGroup', "Headshot Text", "hsTextColor", "ffa500");
  addMinicolor(_0x1f3d06[0x1], "killTextColorGroup", "Kill Text", "killTextColor", "ffa500");
  addMinicolor(_0x1f3d06[0x1], "minimapBorderColorGroup", "Minimap Border", 'minimapBorderColor', 'ffa500');
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on('click', function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    giroActive = false;
    toggleGiro();
  });
  let _0x153a8b = localStorage.getItem("showTeamList");
  let _0x2d2f4a;
  if ("true" === _0x153a8b) {
    _0x2d2f4a = true;
    theoKzObjects.showTeamList = true;
  } else if ("false" === _0x153a8b) {
    _0x2d2f4a = false;
    theoKzObjects.showTeamList = false;
  } else {
    _0x2d2f4a = true;
  }
  let _0x1f8abd = localStorage.getItem("showAnimationHeadshot");
  let _0x3d04b0;
  if ('true' === _0x1f8abd) {
    _0x3d04b0 = true;
    theoKzObjects.animationHeadshot = true;
  } else if ("false" === _0x1f8abd) {
    _0x3d04b0 = false;
    theoKzObjects.animationHeadshot = false;
  } else {
    _0x3d04b0 = true;
  }
  $('#settings-backgroundSolid-switch').prop("checked", false);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $('#showAnimationHeadshot').on("change", function () {
    theoKzObjects.animationHeadshot = $(this).is(":checked");
    localStorage.setItem("showAnimationHeadshot", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $('#showTeamList').on('change', function () {
    theoKzObjects.showTeamList = $(this).is(":checked");
    localStorage.setItem("showTeamList", true);
    console.log("Mostrar lista de amigos:", true);
  });
  $('#clossed_Setings').on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    giroActive = true;
    toggleGiro();
  });
  let _0x19eb96 = $("<div class=\"cursor-menu\"></div>");
  let _0x5d575e = $("<div class=\"icon-selector\"></div>");
  for (let _0x5e8acd = 0x1; _0x5e8acd < 0x2a; _0x5e8acd++) {
    let _0x1f75db = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + _0x5e8acd.toString().padStart(0x2, '0') + ".cur";
    let _0x2dae21 = 0x1 === _0x5e8acd ? "active" : '';
    let _0xa4de8 = $('<img>').attr({
      'src': _0x1f75db,
      'data-cursor': _0x1f75db,
      'alt': "Cursor " + _0x5e8acd
    });
    let _0xd5f573 = $("<div>").addClass("cursor-box icon-selector__item").addClass(_0x2dae21).append(_0xa4de8);
    _0x5d575e.append(_0xd5f573);
  }
  _0x19eb96.append(_0x5d575e);
  $(".options-list.ps div[category=\"cursor\"]").append(_0x19eb96);
  $('#background-canvas').after("<div id=\"firefly-container\"></div>");
  for (let _0x40d31d = 0x0; _0x40d31d < 0x14; _0x40d31d++) {
    $('<div>').addClass('firefly').css({
      'left': Math.random() * window.innerWidth + 'px',
      'top': Math.random() * window.innerHeight + 'px',
      'animationDuration': 0x2 + Math.random() + "s, " + (0x5 + 0xa * Math.random()) + 's'
    });
  }
  $('.profile-info').prepend("\n        <div class=\"premium-badge\">\n             Premium  <br> \n            Expire: <span id=\"premium-expiration\">" + _0x30c661 + "</span>\n        </div>\n    ");
  $(".hotkey-container").append("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $("#zoom-key").val('z');
  $('#restart-key').val('r');
  $("#laserHSkey-key").val('l');
  $('#wormExplot-key').val('r');
  $('#giro-key').val('q');
  $("#noSkin-key").val('1');
  $("#noAuras-key").val('2');
  $('#sectores-key').val('q');
  $("#background-key").val('c');
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
  });
  $(".key-input").keydown(function (_0x4252aa) {
    _0x4252aa.stopPropagation();
  });
  $(".key-input").keypress(function (_0x3aff46) {
    _0x3aff46.preventDefault();
    var _0x59dae1 = _0x3aff46.key.toLowerCase();
    $(this).val(_0x59dae1);
    var _0x50dcc4 = $(this).attr('id');
    switch (_0x50dcc4) {
      case 'zoom-key':
        cambiarKey("zoom", _0x59dae1);
        break;
      case "restart-key":
        cambiarKey("restart", _0x59dae1);
        break;
      case 'wormExplot-key':
        cambiarKey("wormExplot", _0x59dae1);
        break;
      case "laserHSkey-key":
        cambiarKey("laserHS", _0x59dae1);
        break;
      case "giro-key":
        cambiarKey("giro", _0x59dae1);
        break;
      case "noSkin-key":
        cambiarKey("noSkin", _0x59dae1);
        break;
      case "noAuras-key":
        cambiarKey("noAuras", _0x59dae1);
        break;
      case "sectores-key":
        cambiarKey("sectores", _0x59dae1);
        break;
      case "background-key":
        cambiarKey("background", _0x59dae1);
    }
    $(this).blur();
  });
  $("#user-section").append(_0x5d575e);
  $('.cursor-box').on('click', function () {
    var _0x2e6999 = $(this).find("img").attr('src');
    $("body, button, input, a, textarea, select, div, span, p").css({
      'cursor': 'url(' + _0x2e6999 + "), auto"
    });
    $('.cursor-box').removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + _0x30c661 + "</span>");
  $("#sound-hs").val("https://wormturkio.com/wormExtension/key/sounds/headshot_normal.mp3");
  $("#sound-10hs").val("https://wormturkio.com/wormExtension/key/sounds/10hskahkaha.mp3");
  lxpdhssound = new Audio($('#sound-hs').val());
  lxpdlaughsound = new Audio($("#sound-10hs").val());
  $('#sound-hs').on("input", function () {
    lxpdhssound.src = $(this).val();
  });
  $('#sound-10hs').on('input', function () {
    lxpdlaughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual].laser + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\" id=\"sectores\"> " + lenguaje[idiomaActual].sectores + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : Show All Power-Ups</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\"><span class=\"names_settings\"> : Show Speed&Zigzag</span></div><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual].colorJuego + " </span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\" id=\"colorLaser\"> " + lenguaje[idiomaActual].colorLaser + " </span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\" id=\"colorBorde\"> " + lenguaje[idiomaActual].colorBorde + "</span></div>");
  let _0x229a2e = {
    'color_paletRGB': _0x567ff3 => wormxt_Obj.colorFondo = _0x567ff3,
    'color_palet': _0x1cf5a4 => wormxt_Obj.laserColor = _0x1cf5a4,
    'color_palet2': _0x52f4b3 => wormxt_Obj.colorBorde = _0x52f4b3
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    let _0x23493e = $(this).attr('id');
    let _0x224eb3 = $(this).val().replace('#', '');
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + _0x23493e + ": " + _0x224eb3);
    if (_0x229a2e[_0x23493e]) {
      _0x229a2e[_0x23493e](_0x224eb3);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", false);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
    }
  });
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#settings-Speed_ZigZag-switch").prop("checked", true);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.speed_zigzag = true;
    } else {
      wormxt_5dlrs_Obj.speed_zigzag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", false);
  $("#settings-laserHS-switch").on('click', function () {
    if (this.checked) {
      wormxt_Obj.laserHS = true;
    } else {
      wormxt_Obj.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop('checked', wormxt_Obj.interactive);
  $('#settings-interactive-switch').on('click', function () {
    if (this.checked) {
      lxpdexplotWubtracttexture.interactive = false;
    }
  });
  $('#settings-sectores-switch').prop("checked", false);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
    } else {
      wormxt_Obj.sectores = false;
      setSectorsGame();
    }
  });
};
var TIME = new Date().getTime();
var linkCSS = "https://wormatetr.github.io/extension/w2/css/style2.css?v=" + TIME;
var unlockSkinsPrivate = async function (_0x4548cc) {
  var _0x3c8b70 = _0x4548cc.u.si.userId;
  var _0x45d813 = clientsSkins.clientsSkinsActivos.find(_0x262387 => _0x262387.client_ID === _0x3c8b70);
  if (_0x45d813 && _0x45d813.Client_VisibleSkinPrivate) {
    console.log(_0x45d813);
    let _0xd21829 = new Date();
    let _0x3dc876 = new Date(_0x45d813.client_DateExpired);
    if (_0xd21829 > _0x3dc876) {
      console.log("La fecha de skins expiraciï¿½n ha vencido.");
    } else {
      console.log("La fecha de skins expiraciï¿½n es vï¿½lida.");
      let _0x4d50f1 = Array.isArray(_0x45d813.Client_VisibleSkinPrivate) ? _0x45d813.Client_VisibleSkinPrivate : [_0x45d813.Client_VisibleSkinPrivate];
      _0x4d50f1.forEach(_0x162d7b => {
        let _0x4a086d = theoKzObjects.idSkin.find(_0x5a5194 => _0x5a5194.id === _0x162d7b);
        if (_0x4a086d) {
          _0x4a086d.nonbuyable = false;
        }
      });
      console.log("Skins privadas desbloqueadas para el usuario " + _0x3c8b70 + ':', _0x4d50f1);
    }
  } else {
    console.log("No se encontraron skins privadas para el usuario " + _0x3c8b70 + '.');
  }
};
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    lxpdgirosubtracttexture.texture = ungirotexture;
    lxpdgirosubtracttexture.alpha = 0.25;
    console.log("Giro deactivated");
    isRunning = false;
    initialInterval = 0x37;
    cycleCounter = 0x1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
  } else {
    lxpdgirosubtracttexture.alpha = 0.75;
    console.log("Giro activated");
    startInterval();
    isRunning = true;
  }
  giroActive = !giroActive;
}
const showServer2 = async function (_0x13944e) {
  function _0x58afbe() {
    lxpdexplotWubtracttexture.interactive = false;
    var _0x50763f = 0x0;
    var _0xe46ef = setInterval(function () {
      var _0x2a4e46 = 0x1 - 0.0075 * _0x50763f;
      lxpdexplotWubtracttexture.alpha = _0x2a4e46;
      if (++_0x50763f > 0x64) {
        clearInterval(_0xe46ef);
        lxpdexplotWubtracttexture.alpha = 0.25;
        lxpdexplotWubtracttexture.interactive = true;
      }
    }, 0x64);
  }
  updateBackground();
  unlockSkinsPrivate(_0x13944e);
  fetchCustomLogo(_0x13944e.u.si.userId);
  turkData.id_user = _0x13944e.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(_0x13944e, _0x13944e.u.si.userId);
  lxpdhssound = new Audio('https://wormturkio.com/wormExtension/key/sounds/headshot_normal.mp3');
  lxpdlaughsound = new Audio("https://wormturkio.com/wormExtension/key/sounds/10hskahkaha.mp3");
  (lxpdexplotWubtracttexture = new pixi.Sprite()).texture = explotWtexture;
  lxpdexplotWubtracttexture.interactive = true;
  lxpdexplotWubtracttexture.buttonMode = true;
  lxpdexplotWubtracttexture.x = -0x2d;
  lxpdexplotWubtracttexture.y = 0xa;
  lxpdexplotWubtracttexture.alpha = 0.25;
  lxpdexplotWubtracttexture.on("mouseup", function () {
    _0x58afbe();
    let _0x51edcf = new Uint8Array([0x1]);
    anApp.o.Wb(_0x51edcf);
    setTimeout(() => {
      let _0x1ea21b = lxpdlastserver;
      $(".overlay-2").css("position", "static");
      if (_0x1ea21b) {
        anApp.r.Hd();
        anApp.sa(_0x1ea21b);
      }
    }, 0x3e8);
  });
  (lxpdgirosubtracttexture = new pixi.Sprite()).texture = ungirotexture;
  lxpdgirosubtracttexture.interactive = true;
  lxpdgirosubtracttexture.buttonMode = true;
  lxpdgirosubtracttexture.x = -0xa;
  lxpdgirosubtracttexture.y = 0xa;
  lxpdgirosubtracttexture.alpha = 0.25;
  lxpdgirosubtracttexture.on('mouseup', function () {
    toggleGiro();
  });
  if (lxpdmobilecheck()) {
    lxpdgirosubtracttexture.x = -0x5a;
    lxpdexplotWubtracttexture.x = -0x87;
    lxpdexplotWubtracttexture.y = 0xa;
    let _0x5ca291 = Function("return PIXI;")();
    let _0xdd2648 = _0x5ca291.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let _0x39a888 = _0x5ca291.Texture.from("https://i.imgur.com/4JZUa1u.png");
    (lxpdzoomplustexture = new _0x5ca291.Sprite()).texture = _0xdd2648;
    lxpdzoomplustexture.interactive = true;
    lxpdzoomplustexture.buttonMode = true;
    lxpdzoomplustexture.x = -0xa;
    lxpdzoomplustexture.y = 0xa;
    lxpdzoomplustexture.alpha = 0.25;
    lxpdzoomplustexture.on("mouseup", function () {
      lxpdupdatezoom(Math.min(lxpdmultiplier + 0.25, 0x32));
    });
    (lxpdzoomsubtracttexture = new _0x5ca291.Sprite()).texture = _0x39a888;
    lxpdzoomsubtracttexture.interactive = true;
    lxpdzoomsubtracttexture.buttonMode = true;
    lxpdzoomsubtracttexture.x = -0x2b;
    lxpdzoomsubtracttexture.y = 0xa;
    lxpdzoomsubtracttexture.alpha = 0.25;
    lxpdzoomsubtracttexture.on("mouseup", function () {
      lxpdupdatezoom(Math.max(lxpdmultiplier - 0.25, 0.25));
    });
  }
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  var _0x4ddf97 = function () {
    $('#chatInput').css("display", "none").val('');
    $("#game-canvas").focus();
  };
  var _0x5a6ccc = function () {
    let _0x478987 = $("#chatInput").val();
    if ('' !== $.trim(_0x478987)) {
      console.log("Mensaje enviado:", _0x478987);
      turkData.message = _0x478987;
      setTimeout(() => {
        turkData.message = '';
      }, 0x5dc);
    }
  };
  $('#chatInput').on('keydown', function (_0x717d1a) {
    if ("Enter" === _0x717d1a.key) {
      _0x5a6ccc();
      _0x4ddf97();
    } else if ("Escape" === _0x717d1a.key) {
      _0x4ddf97();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $('#mm-settings').html("<i class=\"material-icons\">settings</i>");
  $('#mm-leaders').html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-wtr-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#user-icon").on("click", function () {
    $("#user-icon").addClass("active");
    $('#hotkeys-icon').removeClass('active');
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $('#background-canvas').replaceWith("\n  <div style=\"position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0;\">\n    <canvas id=\"background-canvas\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\"></canvas>\n  </div>\n  <script>\n    (function() {\n      const canvas = document.getElementById('background-canvas');\n      const ctx = canvas.getContext('2d');\n      let width, height;\n\n      const backgroundImage = new Image();\n      backgroundImage.src = 'https://wormate.io/images/bg-event-pattern-valday2024.png';\n\n      // Orijinal renkli opacity’li renk katmanları\n      const colorLayers = [\n        {colorStart: 'rgba(255, 100, 180, 0.45)', colorEnd: 'rgba(255, 100, 180, 0)', xRatio: -0.1, yRatio: 0.1, radius: 650, speedX: 0.12, speedY: 0.08},\n        {colorStart: 'rgba(150, 100, 255, 0.40)', colorEnd: 'rgba(150, 100, 255, 0)', xRatio: 1.1, yRatio: 0.3, radius: 700, speedX: -0.10, speedY: 0.05},\n        {colorStart: 'rgba(100, 200, 255, 0.45)', colorEnd: 'rgba(100, 200, 255, 0)', xRatio: 0.5, yRatio: 1.1, radius: 650, speedX: 0.06, speedY: -0.07},\n        {colorStart: 'rgba(255, 255, 255, 0.30)', colorEnd: 'rgba(255, 255, 255, 0)', xRatio: 0.9, yRatio: -0.1, radius: 600, speedX: -0.05, speedY: 0.10}\n      ];\n\n      let spots = [];\n\n      function resize() {\n        width = window.innerWidth;\n        height = window.innerHeight;\n        const dpr = window.devicePixelRatio || 1;\n        canvas.width = width * dpr;\n        canvas.height = height * dpr;\n        canvas.style.width = width + \"px\";\n        canvas.style.height = height + \"px\";\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n        ctx.scale(dpr, dpr);\n\n        spots = colorLayers.map(layer => ({\n          x: width * layer.xRatio,\n          y: height * layer.yRatio,\n          radius: layer.radius,\n          colorStart: layer.colorStart,\n          colorEnd: layer.colorEnd,\n          speedX: layer.speedX,\n          speedY: layer.speedY\n        }));\n      }\n      resize();\n      window.addEventListener('resize', resize);\n\n      // Daha koyu siyah kenar efekti (vignette)\n      function drawBlackVignette() {\n        let vignette = ctx.createRadialGradient(\n          width / 2, height / 2,\n          Math.min(width, height) / 2 * 0.4,\n          width / 2, height / 2,\n          Math.min(width, height) / 2\n        );\n        vignette.addColorStop(0, 'rgba(0,0,0,0)');\n        vignette.addColorStop(1, 'rgba(0,0,0,0.85)');\n        ctx.fillStyle = vignette;\n        ctx.fillRect(0, 0, width, height);\n      }\n\n      function drawBackground() {\n        if(backgroundImage.complete) {\n          ctx.globalAlpha = 0.9;\n          ctx.drawImage(backgroundImage, 0, 0, width, height);\n          ctx.globalAlpha = 1;\n          drawColorSpots();\n          drawBlackVignette();\n        }\n      }\n\n      function drawColorSpots() {\n        spots.forEach(spot => {\n          spot.x += spot.speedX;\n          spot.y += spot.speedY;\n\n          if (spot.x - spot.radius > width) spot.x = -spot.radius;\n          else if (spot.x + spot.radius < 0) spot.x = width + spot.radius;\n\n          if (spot.y - spot.radius > height) spot.y = -spot.radius;\n          else if (spot.y + spot.radius < 0) spot.y = height + spot.radius;\n\n          const grad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.radius);\n          grad.addColorStop(0, spot.colorStart);\n          grad.addColorStop(1, spot.colorEnd);\n\n          ctx.fillStyle = grad;\n          ctx.beginPath();\n          ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI*2);\n          ctx.fill();\n        });\n      }\n\n      // Konfetti animasyonunu kaldırdım (isteğine göre ekleyebilirim)\n\n      function animate() {\n        ctx.clearRect(0, 0, width, height);\n        drawBackground();\n        requestAnimationFrame(animate);\n      }\n\n      backgroundImage.onload = () => {\n        animate();\n      };\n    })();\n  </script>\n");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#game-view").append("<span id=\"ping\"></span>");
  $(document).ready(function () {
    $("#aqnvgcpz05orkobh").replaceWith("\n            <div id=\"premium-panel\" style=\"position: relative; width: 100%; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.5); background: #111;\">\n                \n                <!-- Slider Bölümü -->\n                <div class=\"slider\" style=\"width: 100%; height: 300px; overflow: hidden;\">\n                    <img src=\"https://i.imgur.com/vRVg5IP.png\" class=\"slide active\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/bnhGxPK.png\" class=\"slide active\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/rzPF1cq.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/4sHsRk4.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Cz3Y2Uo.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/HCO0rMH.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/wrJuK3p.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/zde41M3.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/NFBy0Pn.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/ZgG3UoD.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Ak3uLoh.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/na1tkie.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/RZ1Mhcw.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Nz4TCot.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n                    <img src=\"https://i.imgur.com/Xx6ya1p.png\" class=\"slide\" style=\"width: 100%; height: 100%; object-fit: cover;\" />\n\n                </div>\n            </div>\n\n        ");
  });
  $(document).ready(function () {
    let _0x24e901 = 0x0;
    let _0x2b5918 = $("#premium-panel .slide");
    let _0xac8a10 = _0x2b5918.length;
    setInterval(() => {
      _0x2b5918.eq(_0x24e901).removeClass("active");
      _0x24e901 = (_0x24e901 + 0x1) % _0xac8a10;
      _0x2b5918.eq(_0x24e901).addClass("active");
    }, 0xbb8);
  });
  $("#buy-premium").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", '_blank');
  });
  $('#social-buttons').replaceWith('');
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $(".mm-logo2").attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $('.loading-logo').attr("src", "https://wormate.io/images/linelogo-valday2025.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #wtrplayagain, #final-replay").click(function () {
    $(".overlay-2").css("position", "static");
  });
  $("#mm-wtr-settings").click(function () {
    $('#settings-menu').css({
      'display': "flex",
      'opacity': '1'
    });
  });
  $("#popup-menu-back").click(function () {
    $("#settings-menu").css("opacity", '0');
  });
  $("#mm-skin-next").click(function () {
    $('#mm-skin-canv').addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 0x15e);
  });
  $("#mm-skin-prev").click(function () {
    $('#mm-skin-canv').addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 0x15e);
  });
  let _0x678769 = ["#mm-player-info", "#mm-skin-canv", '#mm-settings', "#mm-leaders", "#mm-store", "#mm-coins-box"];
  $(_0x678769.join(", ")).click(function () {
    $("#settings-menu").css({
      'display': "none",
      'opacity': '0'
    });
  });
  let _0x1018dd = ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-wtr-settings"];
  _0x1018dd.forEach(function (_0x5612f1) {
    $(_0x5612f1).hover(function () {
      $(this).css({
        'box-shadow': "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        'box-shadow': "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $(".mm-merchant-cont").replaceWith('');
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#wtrplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(".description-text").replaceWith("\n    <div class=\"description-text\">\n      <div id=\"title\">\n          <div class=\"title-wormate-yildo-flag\" style=\"position: absolute; top: 0; z-index: 1; width: 132%; margin-left: 100px;\">\n              <img src=\"https://wormate.io/images/linelogo-valday2025.png\" width=\"20\" align=\"center\" alt=\"\">WormateTR\n          </div>\n      </div>\n      </div>\n    </div>\n  ");
  $(".description-text").append("\n            <div class=\"containerDoorsServers\">\n                <select id=\"optionSelect\">\n                    <option value=\"sao-a.wormate.io\">sao-a</option>\n                    <option value=\"mum-a.wormate.io\">mum-a</option>\n                    <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                    <option value=\"fra-e.wormate.io\">fra-e</option>\n                    <option value=\"fra-d.wormate.io\">fra-d</option>\n                    <option value=\"fra-c.wormate.io\">fra-c</option>\n                    <option value=\"fra-b.wormate.io\">fra-b</option>\n                    <option value=\"waw-a.wormate.io\">waw-a</option>\n                    <option value=\"dal-b.wormate.io\">dal-b</option>\n                    <option value=\"vin-a.wormate.io\">vin-a</option>\n                    <option value=\"dal-a.wormate.io\">dal-a</option>\n                    <option value=\"sao-c.wormate.io\">sao-c</option>\n                    <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                    <option value=\"sao-b.wormate.io\">sao-b</option>\n                    <option value=\"hil-a.wormate.io\">hil-a</option>\n                    <option value=\"syd-a.wormate.io\">syd-a</option>\n                    <option value=\"sin-g.wormate.io\">sin-g</option>\n                    <option value=\"gra-a.wormate.io\">gra-a</option>\n                    <option value=\"sin-i.wormate.io\">sin-i</option>\n                    <option value=\"sin-h.wormate.io\">sin-h</option>\n                    <option value=\"sin-f.wormate.io\">sin-f</option>\n                    <option value=\"sin-c.wormate.io\">sin-c</option>\n                    <option value=\"sin-b.wormate.io\">sin-b</option>\n                    <option value=\"sin-a.wormate.io\">sin-a</option>\n                    <option value=\"tok-b.wormate.io\">tok-b</option>\n                    <option value=\"sin-d.wormate.io\">sin-d</option>\n                    <option value=\"sin-e.wormate.io\">sin-e</option>\n                </select>\n                \n                <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n                \n                <button id=\"connectButton\">CONNECT</button>\n            </div>\n        ");
  $("#connectButton").click(function () {
    let _0x5040e4 = $("#optionSelect").val();
    let _0x222e95 = $("#numberInput").val();
    if (!_0x5040e4 || '' === _0x222e95) {
      alert("Por favor, selecciona una opciÃ³n y escribe un nÃºmero antes de conectar.");
      return;
    }
    lxpdlastserver = "wss://" + _0x5040e4 + ':' + _0x222e95 + "/wormy";
    anApp.r.Hd();
    anApp.sa(lxpdlastserver);
    lxpdservertext.text = '' + lxpdlastserver.replace('wss://', '').replace(".wormate.io", '').replace("/wormy", '');
  });
  var _0x55510d = {
    'sao': 'br',
    'vin': 'vg',
    'dal': 'ds',
    'fra': 'de',
    'sgp': 'sg',
    'tok': 'jp',
    'syd': 'au',
    'lon': 'gb',
    'tor': 'ca',
    'mex': 'mx',
    'sin': 'sg',
    'hil': 'hn',
    'gra': 'de'
  };
  var _0x9c46a9 = [{
    'code': 'br',
    'name': 'Peru'
  }, {
    'code': 'mx',
    'name': "Mexico"
  }, {
    'code': 'us',
    'name': "EEUU"
  }, {
    'code': 'ca',
    'name': "Canada"
  }, {
    'code': 'de',
    'name': "Germania"
  }, {
    'code': 'fr',
    'name': "Francia"
  }, {
    'code': 'sg',
    'name': "Singapur"
  }, {
    'code': 'jp',
    'name': "Japon"
  }, {
    'code': 'au',
    'name': "Australia"
  }, {
    'code': 'gb',
    'name': "Granbretana"
  }];
  var _0x40f11e = $("<ul class=\"ui-tabs-nav\"></ul>");
  var _0x5a2162 = $("<div class=\"servers-container\"></div>");
  _0x9c46a9.forEach(function (_0x9615d6, _0x1a4dfb) {
    var _0x471320 = $("\n                        <li class=\"ui-tabs-tab ui-tab " + (0x0 === _0x1a4dfb ? "ui-tab-active" : '') + "\" data-country=\"" + _0x9615d6.code + "\">\n                            <a><span class=\"flag " + _0x9615d6.code + "\"></span></a>\n                        </li>\n                    ");
    _0x40f11e.append(_0x471320);
    var _0x269592 = $("\n                        <div class=\"servers-" + _0x9615d6.code + "\" style=\"display: " + (0x0 === _0x1a4dfb ? "block" : "none") + ";\">\n                            <table class=\"server-table\">\n                                <thead>\n                                    <tr>\n                                        <th>On/Off</th>\n                                        <th>Name</th>\n                                        <th>🌎</th>\n                                        <th>👑</th>\n                                        <th>Streamer</th>\n                                    </tr>\n                                </thead>\n                                <tbody></tbody>\n                            </table>\n                        </div>\n                    ");
    _0x5a2162.append(_0x269592);
  });
  $(".description-text").append(_0x40f11e, _0x5a2162);
  $(".ui-tabs-tab").click(function () {
    var _0x2b8fce = $(this).data("country");
    $('.ui-tabs-tab').removeClass('ui-tab-active');
    $(this).addClass('ui-tab-active');
    $(".servers-container > div").hide();
    $(".servers-" + _0x2b8fce).fadeIn(0xc8);
  });
  serverData.forEach(function (_0x426c06) {
    var _0x5eeb29 = _0x426c06.dataRoom.match(/[a-zA-Z]+/g).join('');
    if ('ae' === _0x5eeb29) {
      _0x5eeb29 = 'gb';
    }
    var _0x3ac425 = _0x426c06.dataCon.match(/wss:\/\/([a-z]+)-/i);
    var _0x5ba903 = _0x3ac425 ? _0x3ac425[0x1] : null;
    var _0x194545 = _0x55510d[_0x5ba903] ? _0x55510d[_0x5ba903].toUpperCase() : '!';
    if (_0x9c46a9.some(_0x41a57a => _0x41a57a.code === _0x5eeb29)) {
      var _0x1f517c = top1Servers[_0x426c06.dataRoom.trim().toLowerCase()] || {
        'Score': '❗',
        'StatusColor': "gray"
      };
      console.log("server.dataRoom:", _0x426c06.dataRoom);
      console.log("Claves en top1Servers:", Object.keys(top1Servers));
      var _0x2dd3b6 = $("\n                    <tr class=\"server-row\" data-wss=\"" + _0x426c06.dataCon + "\" value=\"" + _0x426c06.dataRoom + "\">\n                            <td class=\"server-status\">\n                                <span class=\"status-dot\" style=\"background-color: " + _0x1f517c.StatusColor + ";\"></span>\n                            </td>\n                            <td class=\"server-name\" >" + _0x426c06.serverName + "</td>\n                            <td class=\"server-region\">" + _0x194545 + "</td>\n                            <td class=\"server-top1\">" + _0x1f517c.Score + "</td>\n                            <td><img src=\"" + _0x426c06.imgSrc + "\" class=\"streamer-image\"></td>\n                        </tr>\n                    ");
      $(".servers-" + _0x5eeb29 + " tbody").append(_0x2dd3b6);
    }
  });
  $(document).on("click", ".server-row", function () {
    let _0x1f62ff = $(this).attr("value");
    let _0x2256b1 = $(this).find(".server-name").text();
    let _0x5198d7 = $(this).attr("data-wss");
    if (_0x2256b1 && _0x5198d7) {
      _0x13944e.r.Hd();
      _0x13944e.sa(_0x5198d7);
      lxpdservertext.text = '' + _0x1f62ff;
      console.log("Conectando a:", _0x5198d7);
    }
  });
  $(".mm-logo").on("click", function () {
    var _0x162166 = prompt("Extension 'W' or 'T':");
    if ('W' === _0x162166) {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("WormWorld");
          }, 0x7d0);
        }, 0x5dc);
      }, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $(".servers-eeuu").html('');
      $(".servers-canada").html('');
      $(".servers-germania").html('');
      $(".servers-francia").html('');
      $(".servers-singapur").html('');
      $('.servers-japon').html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (a = 0x0; a < serverData.length; a++) {
          var _0x215e3b = serverData[a].dataCon;
          var _0x3aa365 = serverData[a].dataRoom;
          var _0x409466 = serverData[a].serverName;
          let _0x2e4f5f = "<a>\n                        <img src=\"" + serverData[a].imgSrc + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let _0x514ebb = _0x3aa365.match(/[a-zA-Z]+/g).join('');
          let _0x176f2e = document.createElement('p');
          _0x176f2e.value = _0x215e3b;
          _0x176f2e.innerHTML = _0x409466;
          let _0x4c3fe6 = document.createElement("div");
          _0x4c3fe6.setAttribute("class", "conteiner");
          if ('br' == _0x514ebb) {
            $('.servers-peru').append(_0x4c3fe6);
            $(_0x4c3fe6).append(_0x176f2e);
            $(_0x176f2e).append(_0x2e4f5f);
          } else {
            if ('mx' == _0x514ebb) {
              $(".servers-mexico").append(_0x4c3fe6);
              $(_0x4c3fe6).append(_0x176f2e);
              $(_0x176f2e).append(_0x2e4f5f);
            } else {
              if ('us' == _0x514ebb) {
                $(".servers-eeuu").append(_0x4c3fe6);
                $(_0x4c3fe6).append(_0x176f2e);
                $(_0x176f2e).append(_0x2e4f5f);
              } else {
                if ('ca' == _0x514ebb) {
                  $(".servers-canada").append(_0x4c3fe6);
                  $(_0x4c3fe6).append(_0x176f2e);
                  $(_0x176f2e).append(_0x2e4f5f);
                } else {
                  if ('de' == _0x514ebb) {
                    $(".servers-germania").append(_0x4c3fe6);
                    $(_0x4c3fe6).append(_0x176f2e);
                    $(_0x176f2e).append(_0x2e4f5f);
                  } else {
                    if ('fr' == _0x514ebb) {
                      $(".servers-francia").append(_0x4c3fe6);
                      $(_0x4c3fe6).append(_0x176f2e);
                      $(_0x176f2e).append(_0x2e4f5f);
                    } else {
                      if ('sg' == _0x514ebb) {
                        $(".servers-singapur").append(_0x4c3fe6);
                        $(_0x4c3fe6).append(_0x176f2e);
                        $(_0x176f2e).append(_0x2e4f5f);
                      } else {
                        if ('jp' == _0x514ebb) {
                          $(".servers-japon").append(_0x4c3fe6);
                          $(_0x4c3fe6).append(_0x176f2e);
                          $(_0x176f2e).append(_0x2e4f5f);
                        } else {
                          if ('au' == _0x514ebb) {
                            $(".servers-australia").append(_0x4c3fe6);
                            $(_0x4c3fe6).append(_0x176f2e);
                            $(_0x176f2e).append(_0x2e4f5f);
                          } else if ('ae' == _0x514ebb) {
                            $(".servers-granbretana").append(_0x4c3fe6);
                            $(_0x4c3fe6).append(_0x176f2e);
                            $(_0x176f2e).append(_0x2e4f5f);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          $(_0x176f2e).attr('class', "selectSala");
          $(_0x176f2e).attr("value", _0x3aa365);
          $(_0x176f2e).attr("data-con", _0x215e3b);
          $(_0x176f2e).click(function () {
            $(".overlay-2").css("position", "static");
            let _0xaca7e5 = $(this).attr("data-con");
            console.log(_0xaca7e5);
            if (_0xaca7e5) {
              _0x13944e.r.Hd();
              _0x13944e.sa(_0xaca7e5);
              lxpdservertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 0xbb8);
    } else if ('T' === _0x162166) {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $('.mm-logo').text("Tim Map");
          }, 0x7d0);
        }, 0x5dc);
      }, 0x3e8);
      $(".servers-peru").html('');
      $(".servers-mexico").html('');
      $('.servers-eeuu').html('');
      $('.servers-canada').html('');
      $('.servers-germania').html('');
      $(".servers-francia").html('');
      $('.servers-singapur').html('');
      $(".servers-japon").html('');
      $(".servers-australia").html('');
      $(".servers-granbretana").html('');
      setTimeout(() => {
        for (a = 0x0; a < serverDataTimMap.length; a++) {
          var _0x12eb80 = serverDataTimMap[a].dataCon;
          var _0x178760 = serverDataTimMap[a].dataRoom;
          var _0x482dae = serverDataTimMap[a].serverName;
          var _0x454b72 = serverDataTimMap[a].imgSrc;
          serverDataTimMap[a].secondHref;
          let _0x8671d5 = _0x178760.match(/[a-zA-Z]+/g).join('');
          let _0x4be198 = document.createElement('p');
          _0x4be198.value = _0x12eb80;
          let _0x1acd3e = "<a>\n                        <img src=\"" + _0x454b72 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let _0x1b0aad = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (_0x1b0aad.test(_0x1acd3e)) {
            _0x1acd3e = _0x1acd3e.replace(_0x1b0aad, '');
          }
          let _0x4397ff = /<span style=\\"(.*?)"><\\\/span>/;
          if (_0x4397ff.test(_0x482dae)) {
            _0x482dae = _0x482dae.replace(_0x4397ff, "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>");
          }
          _0x4be198.innerHTML = _0x482dae;
          let _0x4d6d4d = document.createElement("div");
          _0x4d6d4d.setAttribute("class", "conteiner");
          if ('BR' == _0x8671d5) {
            $('.servers-peru').append(_0x4d6d4d);
            $(_0x4d6d4d).append(_0x4be198);
            $(_0x4be198).append(_0x1acd3e);
          } else {
            if ('MX' == _0x8671d5) {
              $(".servers-mexico").append(_0x4d6d4d);
              $(_0x4d6d4d).append(_0x4be198);
              $(_0x4be198).append(_0x1acd3e);
            } else {
              if ('US' == _0x8671d5) {
                $(".servers-eeuu").append(_0x4d6d4d);
                $(_0x4d6d4d).append(_0x4be198);
                $(_0x4be198).append(_0x1acd3e);
              } else {
                if ('CA' == _0x8671d5) {
                  $(".servers-canada").append(_0x4d6d4d);
                  $(_0x4d6d4d).append(_0x4be198);
                  $(_0x4be198).append(_0x1acd3e);
                } else {
                  if ('DE' == _0x8671d5) {
                    $(".servers-germania").append(_0x4d6d4d);
                    $(_0x4d6d4d).append(_0x4be198);
                    $(_0x4be198).append(_0x1acd3e);
                  } else {
                    if ('FR' == _0x8671d5) {
                      $('.servers-francia').append(_0x4d6d4d);
                      $(_0x4d6d4d).append(_0x4be198);
                      $(_0x4be198).append(_0x1acd3e);
                    } else {
                      if ('SG' == _0x8671d5) {
                        $('.servers-singapur').append(_0x4d6d4d);
                        $(_0x4d6d4d).append(_0x4be198);
                        $(_0x4be198).append(_0x1acd3e);
                      } else {
                        if ('JP' == _0x8671d5) {
                          $(".servers-japon").append(_0x4d6d4d);
                          $(_0x4d6d4d).append(_0x4be198);
                          $(_0x4be198).append(_0x1acd3e);
                        } else {
                          if ('AU' == _0x8671d5) {
                            $('.servers-australia').append(_0x4d6d4d);
                            $(_0x4d6d4d).append(_0x4be198);
                            $(_0x4be198).append(_0x1acd3e);
                          } else if ('AE' == _0x8671d5) {
                            $(".servers-granbretana").append(_0x4d6d4d);
                            $(_0x4d6d4d).append(_0x4be198);
                            $(_0x4be198).append(_0x1acd3e);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          $(_0x4be198).attr("class", "selectSala");
          $(_0x4be198).attr("value", _0x178760);
          $(_0x4be198).attr("data-con", _0x12eb80);
          $(_0x4be198).click(function () {
            $('.overlay-2').css("position", "static");
            let _0x48bf17 = $(this).attr("data-con");
            let _0x1c6f3b = $(this).attr('value');
            console.log(_0x1c6f3b);
            if (_0x48bf17) {
              _0x13944e.r.Hd();
              _0x13944e.sa(_0x48bf17);
              lxpdservertext.text = _0x1c6f3b;
            }
          });
        }
      }, 0xbb8);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const ctx = {
  'fontStyle': {
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0x9,
      'lineJoin': 'round',
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'wordWrap': true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0x0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    'align': "center",
    'fill': color,
    'fontSize': 0x19,
    'lineJoin': 'round',
    'whiteSpace': 'normal',
    'wordWrap': true,
    'dropShadow': true,
    'dropShadowBlur': 0x6,
    'fontWeight': "bold"
  });
}
ctx.ptc = {};
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0; i < portionTimes.length; i++) {
  let name = "clock_ad" + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle["tfc" + i]);
  ctx.ptc[name].y = 0x3d;
}
ctx.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived);
ctx.containerImgTest.anchor.set(0.5);
ctx.containerImgTest.x = window.innerWidth / 0x2;
ctx.containerImgTest.y = window.innerHeight / 0x2;
ctx.containerImgTest.alpha = 0.3;
ctx.pointsContainer = new PIXI.Container();
const createCircle = function () {
  if (!window.coords || undefined === window.coords.playerX || undefined === window.coords.playerY) {
    console.error("Error: window.coords no estï¿½ definido correctamente o no contiene playerX y playerY.");
    return;
  }
  if (!ctx.team_2) {
    ctx.team_2 = new PIXI.Graphics();
    ctx.team_2.zIndex = 0x2;
    ctx.team_2.alpha = 0.9;
    ctx.team_2.beginFill(0xff0000);
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
    ctx.team_2.lineStyle(0x1, "black");
    ctx.team_2.drawCircle(0x0, 0x0, 2.4);
    ctx.team_2.endFill();
  }
  ctx.team_2.x = window.coords.playerX;
  ctx.team_2.y = window.coords.playerY;
  if (ctx.pointsContainer) {
    ctx.pointsContainer.addChild(ctx.team_2);
  } else {
    console.error("Error: ctx.pointsContainer no estï¿½ definido.");
  }
};
ctx.teamsContainer = new PIXI.Container();
var createServerMessage = function (_0x23091a, _0x59ea42) {
  if ('' !== _0x59ea42.trim()) {
    toastr.options = {
      'closeButton': false,
      'debug': false,
      'newestOnTop': true,
      'progressBar': true,
      'positionClass': 'toast-top-center',
      'preventDuplicates': true,
      'onclick': null,
      'showDuration': "300",
      'hideDuration': "1000",
      'timeOut': "5000",
      'extendedTimeOut': "1000",
      'showEasing': "swing",
      'hideEasing': "linear",
      'showMethod': "fadeIn",
      'hideMethod': "fadeOut",
      'toastClass': "server-message-toast"
    };
    toastr.success(_0x59ea42, _0x23091a, {
      'iconClass': 'toast-info'
    });
  }
};
var createTeamMessage = function (_0x46a7d5, _0x57eeb1, _0x5ac202) {
  if ('' !== _0x5ac202.trim()) {
    gameState.players.forEach((_0x1fce70, _0x392f52) => {
      if (_0x1fce70.teamCode === _0x46a7d5 && _0x1fce70.nickname !== _0x57eeb1) {
        let _0x4a1a6c = _0x1fce70.nickname.length > 0xc ? _0x1fce70.nickname.slice(0x0, 0xc) : _0x1fce70.nickname;
        toastr.options = {
          'closeButton': false,
          'debug': false,
          'newestOnTop': true,
          'progressBar': true,
          'positionClass': "toast-top-center",
          'preventDuplicates': true,
          'onclick': null,
          'showDuration': "300",
          'hideDuration': '1000',
          'timeOut': "5000",
          'extendedTimeOut': "1000",
          'showEasing': "swing",
          'hideEasing': "linear",
          'showMethod': "fadeIn",
          'hideMethod': "fadeOut"
        };
        toastr.success('' + _0x5ac202, '' + _0x57eeb1, {
          'iconClass': "toast-info"
        });
        console.log("Mensaje enviado por " + _0x57eeb1 + " recibido por el jugador " + _0x4a1a6c + " (" + _0x392f52 + ") del equipo " + _0x46a7d5);
      }
    });
  }
};
var createTeamUbication = function (_0x10f710, _0x274fdc) {
  updateTeamTable(gameState, _0x10f710);
  gameState.players.forEach((_0x4cc233, _0x31f5c0) => {
    if (_0x4cc233.teamCode === _0x10f710) {
      let _0x22d391 = _0x4cc233.teamColor || _0x274fdc;
      let _0x5635f1 = _0x4cc233.nickname.replace(/\u3164/g, '').replace(/WTR_\d+$/, '').trim();
      if (!ctx[_0x31f5c0]) {
        ctx[_0x31f5c0] = new PIXI.Graphics();
        ctx[_0x31f5c0].zIndex = 0x2;
        ctx[_0x31f5c0].alpha = 0.9;
        ctx.teamsContainer.addChild(ctx[_0x31f5c0]);
        let _0xdb2146 = new PIXI.Text(_0x5635f1, {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xe,
          'fill': _0x22d391,
          'stroke': 0x0,
          'strokeThickness': 0x2
        });
        _0xdb2146.anchor.set(0.5);
        _0xdb2146.visible = false;
        _0xdb2146.y = -0xf;
        ctx[_0x31f5c0].addChild(_0xdb2146);
        ctx[_0x31f5c0].hitArea = new PIXI.Circle(0x0, 0x0, 2.4);
        ctx[_0x31f5c0].interactive = true;
        ctx[_0x31f5c0].buttonMode = true;
        ctx[_0x31f5c0].on("mouseover", () => {
          _0xdb2146.visible = true;
        });
        ctx[_0x31f5c0].on("mouseout", () => {
          _0xdb2146.visible = false;
        });
        ctx[_0x31f5c0].on("mouseup", () => {
          _0xdb2146.visible = !_0xdb2146.visible;
        });
        ctx[_0x31f5c0].on("touchend", () => {
          _0xdb2146.visible = !_0xdb2146.visible;
        });
        ctx[_0x31f5c0].nameText = _0xdb2146;
      }
      ctx[_0x31f5c0].clear();
      ctx[_0x31f5c0].beginFill(_0x22d391);
      ctx[_0x31f5c0].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x31f5c0].endFill();
      ctx[_0x31f5c0].lineStyle(0x1, 0x0);
      ctx[_0x31f5c0].drawCircle(0x0, 0x0, 2.4);
      ctx[_0x31f5c0].endFill();
      ctx[_0x31f5c0].x = _0x4cc233.position.x;
      ctx[_0x31f5c0].y = _0x4cc233.position.y;
      ctx[_0x31f5c0].nameText.y = -0xf;
      if (ctx[_0x31f5c0].nameText.text !== _0x5635f1) {
        ctx[_0x31f5c0].nameText.text = _0x5635f1;
      }
      if (ctx[_0x31f5c0].nameText.style.fill !== _0x22d391) {
        ctx[_0x31f5c0].nameText.style.fill = _0x22d391;
      }
    }
  });
};
var clearTeamUbication = function () {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(_0x2a113e => {
      if (ctx[_0x2a113e] instanceof PIXI.Graphics && ctx[_0x2a113e].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x2a113e]);
        ctx[_0x2a113e].destroy(true);
        delete ctx[_0x2a113e];
      }
      if (ctx[_0x2a113e + "_text"] && ctx[_0x2a113e + '_text'].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[_0x2a113e + "_text"]);
        ctx[_0x2a113e + "_text"].destroy(true);
        delete ctx[_0x2a113e + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
};
ctx.titleRec2 = new PIXI.Text("Friends", ctx.fontStyle.blanco);
ctx.titleRec2.y = -0x5;
ctx.containerHsRec2 = new PIXI.Container();
ctx.containerHsRec2.x = 0x1e;
ctx.containerHsRec2.y = 0xaa;
let playersTexts = [];
for (let index = 0x0; index < 0x5; index++) {
  let wallBounce = index + 0x1;
  let deltaCoordinate = new PIXI.Text(wallBounce + '.', ctx.fontStyle.blanco);
  deltaCoordinate.x = 0x0;
  deltaCoordinate.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text('--', {
    'fill': '#FFFFFF',
    'fontSize': 0xc
  });
  playerNameText.x = 0xf;
  playerNameText.y = 0xd * wallBounce;
  ctx.containerHsRec2.addChild(playerNameText);
  playersTexts.push(playerNameText);
}
function updatePlayerTable(_0x3a2c3f) {
  let _0x109efa = _0x3a2c3f.players;
  let _0x3db986 = Array.from(_0x109efa.values());
  let _0x13bfac = _0x3db986.filter(_0x11299f => _0x11299f.teamCode === '');
  playersTexts.forEach((_0x3ce8a7, _0x18f6f1) => {
    if (_0x13bfac[_0x18f6f1]) {
      let _0x814836 = _0x13bfac[_0x18f6f1];
      _0x3ce8a7.text = _0x814836.nickname.substring(0x0, 0x14);
      _0x3ce8a7.style.fill = _0x814836.teamColor;
    } else {
      _0x3ce8a7.text = '--';
      _0x3ce8a7.style.fill = '#FFFFFF';
    }
  });
}
ctx.containerHsRec2.addChild(ctx.titleRec2);
(lxpdTopFriends_list = new PIXI.Container()).x = 0x50;
lxpdTopFriends_list.y = 0xb9;
const titleTextfriendlist = new PIXI.Text("Team (RS)", {
  'fontFamily': fonts[currentFontIndex],
  'fontSize': 0xa,
  'fill': 0xffa500,
  'fontWeight': "bold"
});
titleTextfriendlist.x = 0xa;
titleTextfriendlist.y = -0x5;
lxpdTopFriends_list.addChild(titleTextfriendlist);
const dividerfriendlist = new PIXI.Graphics();
function updateTeamTable(_0x48930f, _0x393d74) {
  for (let _0x5a176a = lxpdTopFriends_list.children.length - 0x1; _0x5a176a >= 0x0; _0x5a176a--) {
    let _0xe7421c = lxpdTopFriends_list.children[_0x5a176a];
    if (_0xe7421c !== titleTextfriendlist && _0xe7421c !== dividerfriendlist) {
      lxpdTopFriends_list.removeChild(_0xe7421c);
    }
  }
  let _0x5ca312 = 0x0;
  _0x48930f.players.forEach((_0x1e8b5b, _0x1f5f96) => {
    if (_0x1e8b5b.teamCode === _0x393d74 && _0x1e8b5b.wssCode === turkData.wssCode) {
      let _0x226894 = _0x1e8b5b.nickname.replace(/[_.\s:)+?]*WTR[T]*_\d+$/g, '').trim();
      let _0x4ee8c1 = /[\u0600-\u06FF]/.test(_0x226894);
      let _0xe4cc8c = new PIXI.Text(_0x5ca312 + 0x1 + ". " + _0x226894, {
        'fontFamily': fonts[currentFontIndex],
        'fontSize': 0xa,
        'fill': _0x1e8b5b.teamColor || 0xffa500,
        'stroke': 0x0,
        'strokeThickness': 0x2,
        'align': _0x4ee8c1 ? 'right' : "left"
      });
      _0xe4cc8c.x = -0x32;
      _0xe4cc8c.y = 0x14 + 0xf * _0x5ca312;
      lxpdTopFriends_list.addChild(_0xe4cc8c);
      if (++_0x5ca312 >= 0xa) {
        return;
      }
    }
  });
}
const commonTextStyle = {
  'fontFamily': "Courier New",
  'fontSize': 0x9,
  'fill': 0xffffff,
  'align': "left"
};
dividerfriendlist.lineStyle(0.04, 0xffffff, 0x1);
dividerfriendlist.moveTo(-0xf, 0xf);
dividerfriendlist.lineTo(0x50, 0xf);
dividerfriendlist.x = 0x5;
lxpdTopFriends_list.addChild(dividerfriendlist);
(lxpdTopHS_RecordHs = new PIXI.Container()).x = -0x37;
lxpdTopHS_RecordHs.y = 0x73;
const titleText = new PIXI.Text("Top HS", commonTextStyle);
titleText.x = 0x20;
titleText.y = -0x5;
lxpdTopHS_RecordHs.addChild(titleText);
const divider = new PIXI.Graphics();
divider.lineStyle(0x2, 0xffffff, 0x1);
divider.moveTo(0x0, 0xf);
divider.lineTo(0x50, 0xf);
divider.x = 0xf;
lxpdTopHS_RecordHs.addChild(divider);
(lxpdTop3HS_RecordHs = new PIXI.Container()).y = 0x19;
const titleText3hs = new PIXI.Text("Top 3 HS (kb)", commonTextStyle);
titleText3hs.x = 0xa;
titleText3hs.y = -0x5;
lxpdTop3HS_RecordHs.addChild(titleText3hs);
const divider3hs = new PIXI.Graphics();
divider3hs.lineStyle(0x2, 0xffffff, 0x1);
divider3hs.moveTo(0x0, 0xf);
divider3hs.lineTo(0x50, 0xf);
divider3hs.x = 0x5;
lxpdTop3HS_RecordHs.addChild(divider3hs);
var playerTexts = [];
const cleanNickname = _0x15e9cb => _0x15e9cb.replace(/[_.\s:)+?]*WTR[T]*_\d+$/g, '').trim();
const updateTop8Hs = function () {
  let _0x507f3f = Array.from(gameState.players.values());
  let _0x21a983 = _0x507f3f.filter(_0x22dcf3 => _0x22dcf3.hskill.hs > 0x0 && '' !== _0x22dcf3.nickname.trim());
  if (!_0x21a983.some(_0x3e9f21 => _0x3e9f21.nickname === "WTR") && false) {
    _0x21a983.push({
      'nickname': "WTR",
      'hskill': {
        'hs': 0x0
      },
      'teamColor': turkData.teamColor
    });
  }
  if (_0x21a983.length !== 0x0) {
    _0x21a983.sort((_0x5d40e6, _0x1d2813) => _0x1d2813.hskill.hs - _0x5d40e6.hskill.hs);
    for (let _0x16ca47 = lxpdTopHS_RecordHs.children.length - 0x1; _0x16ca47 >= 0x0; _0x16ca47--) {
      const _0x1d3948 = lxpdTopHS_RecordHs.children[_0x16ca47];
      if (_0x1d3948 !== titleText && _0x1d3948 !== divider) {
        lxpdTopHS_RecordHs.removeChild(_0x1d3948);
      }
    }
    playerTexts.length = 0x0;
    for (let _0x144450 = 0x0; _0x144450 < Math.min(_0x21a983.length, 0x6); _0x144450++) {
      const _0x24521e = _0x21a983[_0x144450];
      let _0x123dba = _0x24521e.nickname.replace(/[_.\s:)+?]*WTR[T]*_\d+$/g, '').trim().slice(0x0, 0xa).padEnd(0xa, '_');
      let _0x3b6fe2 = (" (" + _0x24521e.hskill.hs + ')').padStart(0x8, " ");
      const _0x394833 = _0x144450 + 0x1 + ".  " + _0x123dba + "  - " + _0x3b6fe2;
      const _0x148b9e = new PIXI.Text(_0x394833, commonTextStyle);
      _0x148b9e.x = 0xa;
      _0x148b9e.y = 0x14 + 0xf * _0x144450;
      playerTexts.push(_0x148b9e);
      lxpdTopHS_RecordHs.addChild(_0x148b9e);
    }
    lxpdTop3HS_RecordHs.y = 0x1e + 0xf * playerTexts.length;
  }
};
const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
const textStyle = {
  'fontFamily': "Courier New",
  'fontSize': 0x9,
  'fill': 0xffffff,
  'align': "left",
  'wordWrap': true,
  'whiteSpace': "normal"
};
ctx.titleRec3 = new PIXI.Text("-----Records----", textStyle);
ctx.titleRec3.y = -0x5;
ctx.titleRec3.x = 0xa;
ctx.containerHsRec3 = new PIXI.Container();
ctx.containerHsRec3.x = -0x37;
ctx.containerHsRec3.y = 0x104;
ctx.recordsEntries = [];
for (let i = 0x0; i < 0x4; i++) {
  const baseY = 0xd * (i + 0x1);
  const crown = new PIXI.Text('👑', {
    'fontFamily': "Courier New",
    'fontSize': 0x9,
    'fill': 0xffffff,
    'align': "left"
  });
  crown.x = 0x0;
  crown.y = baseY - 0x1;
  ctx.containerHsRec3.addChild(crown);
  const playerNameText = new PIXI.Text('--', textStyle);
  playerNameText.x = 0x12;
  playerNameText.y = baseY;
  ctx.containerHsRec3.addChild(playerNameText);
  const playerHsText = new PIXI.Text('--', textStyle);
  playerHsText.x = 0x6e;
  playerHsText.y = baseY;
  ctx.containerHsRec3.addChild(playerHsText);
  ctx.recordsEntries.push({
    'crown': crown,
    'playerNameText': playerNameText,
    'playerHsText': playerHsText
  });
}
ctx.containerHsRec3.addChild(ctx.titleRec3);
function updateHeadshotHistory(_0x2f1cef) {
  for (let _0x45bff7 = 0x0; _0x45bff7 < ctx.recordsEntries.length; _0x45bff7++) {
    const _0x46663f = _0x2f1cef[_0x45bff7];
    const _0x2a2eb2 = ctx.recordsEntries[_0x45bff7];
    if (!_0x2a2eb2) {
      continue;
    }
    if (_0x46663f) {
      let _0x61d5bb = _0x46663f.nickname || "---";
      if (_0x61d5bb.length > 0x8) {
        _0x61d5bb = _0x61d5bb.slice(0x0, 0x8) + '..';
      }
      _0x2a2eb2.playerNameText.text = _0x61d5bb;
      _0x2a2eb2.playerHsText.text = _0x46663f.hskill?.['hs']?.['toString']() || _0x46663f.hs?.['toString']() || '--';
      _0x2a2eb2.crown.visible = true;
    } else {
      _0x2a2eb2.playerNameText.text = "---";
      _0x2a2eb2.playerHsText.text = '--';
      _0x2a2eb2.crown.visible = false;
    }
  }
}
function assignPtcValues(_0x8b6b0b, _0x5f1499, _0x3c5f15) {
  let _0x4c170e = portionTimes[_0x5f1499] - parseInt((0.99 == _0x3c5f15 ? 0x1 : _0x3c5f15) * portionTimes[_0x5f1499] / 0x1);
  let _0x4fe2bb = 'clock_ad' + _0x5f1499;
  _0x8b6b0b.Tf[_0x5f1499].addChild(ctx.ptc[_0x4fe2bb]);
  if (ctx.ptc[_0x4fe2bb]) {
    ctx.ptc[_0x4fe2bb].x = _0x4c170e >= 0x64 ? 0xb : _0x4c170e >= 0xa ? 0x12 : 0x1a;
    ctx.ptc[_0x4fe2bb].text = _0x4c170e;
  }
}
function account() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var _0x1fac57 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass('ui-tab-active');
    $(".servers-container > div").hide();
    $(".servers-" + _0x1fac57.toLowerCase()).fadeIn(0xc8);
    $(".servers-container > div").not(".servers-" + _0x1fac57.toLowerCase()).fadeOut(0x64);
  });
}
function obtieneUSER() {
  var _0x263545 = {};
  window.onclick = function () {
    if ((_0x263545 = window.nodes) && Object.keys(_0x263545).length > 0x0 && (console.log(_0x263545), _0x263545)) {
      var _0x12c77c = window.mouseX - _0x263545.qj.If.x;
      var _0x375782 = window.mouseY - _0x263545.qj.If.y;
      var _0xa81a94 = _0x263545.Mb.ad;
      var _0x5156fb = Math.sqrt(_0x12c77c * _0x12c77c + _0x375782 * _0x375782);
      console.log("Cell:", _0x263545, "nickname: ", _0xa81a94, 'Distance:', _0x5156fb);
    }
  };
}
function loadScript2(_0x251444, _0xe2af11 = true) {
  return new Promise((_0x2cbbf8, _0x2a1709) => {
    var _0x3d6133 = document.createElement('script');
    _0x3d6133.type = "text/javascript";
    _0x3d6133.src = _0x251444;
    _0x3d6133.defer = _0xe2af11;
    _0x3d6133.onload = _0x2cbbf8;
    _0x3d6133.onerror = _0x2a1709;
    document.head.appendChild(_0x3d6133);
  });
}
function loadStylesheet(_0x46e2ee) {
  return new Promise((_0x398238, _0x2d5a5e) => {
    var _0x1495a6 = document.createElement("link");
    _0x1495a6.rel = "stylesheet";
    _0x1495a6.type = "text/css";
    _0x1495a6.href = _0x46e2ee;
    _0x1495a6.onload = _0x398238;
    _0x1495a6.onerror = _0x2d5a5e;
    document.head.appendChild(_0x1495a6);
  });
}
"use strict";
loadStylesheet('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap');
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js", true);
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css");
loadScript2('https://cdn.socket.io/4.4.1/socket.io.min.js');
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css');
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (_0x26cdfe) {
  return typeof _0x26cdfe;
} : function (_0x111e20) {
  return _0x111e20 && "function" == typeof Symbol && _0x111e20.constructor === Symbol && _0x111e20 !== Symbol.prototype ? "symbol" : typeof _0x111e20;
};
function addMinicolor(_0xdaa2ce, _0x463383, _0x1c2ecb, _0x3ade61, _0x501123, _0x5c002e) {
  var _0x567f48 = localStorage.getItem(_0x3ade61);
  if (_0x567f48) {
    if (_0x567f48.startsWith('0x')) {
      _0x567f48 = '#' + _0x567f48.substring(0x2);
    } else if (!_0x567f48.startsWith('#')) {
      _0x567f48 = '#' + _0x567f48;
    }
  }
  theoObjects[_0x3ade61] = _0x567f48 || _0x501123;
  $(_0xdaa2ce).append("<div class=\"option colorpicker\"><div class=\"name\">" + _0x1c2ecb + "</div><input id=\"" + _0x3ade61 + "\" type=\"text\" class=\"minicolors form-control\"><div class=\"color-preview\" id=\"preview_" + _0x3ade61 + "\" style=\"background-color: " + theoObjects[_0x3ade61] + ";\" onclick=\"openColorPanel('" + _0x3ade61 + "')\"></div></div>");
  if (null !== localStorage.getItem(_0x3ade61)) {
    theoObjects[_0x3ade61] = localStorage.getItem(_0x3ade61);
  }
  if (_0x5c002e) {
    _0x5c002e();
  }
  $('#' + _0x3ade61).minicolors({
    'control': $(this).attr('data-control') || "hue",
    'defaultValue': theoObjects[_0x3ade61] || _0x501123,
    'format': $(this).attr("data-format") || "hex",
    'inline': "true" === $(this).attr("data-inline"),
    'letterCase': $(this).attr('data-letterCase') || "lowercase",
    'opacity': $(this).attr("data-opacity") || true,
    'position': $(this).attr("data-position") || "bottom left",
    'theme': "default",
    'change': function (_0xb67cea, _0x2d5b0e) {
      var _0x6d818f = _0xb67cea.replace('#', '');
      theoObjects[_0x3ade61] = _0x6d818f;
      localStorage.setItem(_0x3ade61, _0x6d818f);
      if (_0x5c002e) {
        _0x5c002e();
      }
      $('#preview_' + _0x3ade61).css("background-color", _0xb67cea);
    }
  });
}
function openColorPanel(_0x3a2f0d) {
  $('#' + _0x3a2f0d).minicolors("show");
}
function updateBackground(_0x4ff47d = null) {
  var _0x26586c = document.getElementById("backgroundPreview");
  let _0x644a68 = localStorage.getItem("selectedBackground");
  if (null === _0x4ff47d && null !== _0x644a68) {
    _0x4ff47d = parseInt(_0x644a68);
  }
  if (null === _0x4ff47d || _0x4ff47d < 0x0 || _0x4ff47d >= backgrounds.length) {
    _0x4ff47d = 0x0;
  }
  var _0x4967fe = backgrounds[_0x4ff47d];
  _0x26586c.style.backgroundImage = 'url(' + _0x4967fe + ')';
  if ('undefined' != typeof anApp && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x4967fe));
  }
  localStorage.setItem("selectedBackground", _0x4ff47d);
}
function updateFont() {
  var _0xdb5a0f = document.getElementById('fontPreview');
  let _0x24a472 = fonts[currentFontIndex];
  _0xdb5a0f.style.fontFamily = _0x24a472;
  localStorage.setItem("selectedFont", currentFontIndex);
}
!function () {
  try {
    console.log(function (_0x31f9e4, _0x4b3b19) {
      for (var _0x5f1ac9 = 0x0; _0x5f1ac9 < _0x4b3b19.length; _0x5f1ac9 += 0x2) {
        _0x31f9e4 = _0x31f9e4.replaceAll(_0x4b3b19[_0x5f1ac9], _0x4b3b19[_0x5f1ac9 + 0x1]);
      }
      return _0x31f9e4;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', 'hhhh', 'Q', "ssss", 'M', "mmm", 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0x5e91f3) {}
}();
window.addEventListener("load", function () {
  function _0x27783f() {
    (function (_0x3aeccb, _0x364a64, _0x399b5c) {
      var _0xa7897f = [];
      var _0x256496 = [];
      var _0x4e23e2 = {
        '_version': '3.3.1',
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x1a30d4, _0x5e09f4) {
          var _0x245e7b = this;
          setTimeout(function () {
            _0x5e09f4(_0x245e7b[_0x1a30d4]);
          }, 0x0);
        },
        'addTest': function (_0x22411b, _0x3c744a, _0x42fa67) {
          _0x256496.push({
            'name': _0x22411b,
            'fn': _0x3c744a,
            'options': _0x42fa67
          });
        },
        'addAsyncTest': function (_0x17f239) {
          _0x256496.push({
            'name': null,
            'fn': _0x17f239
          });
        }
      };
      var _0x11451d = function () {};
      _0x11451d.prototype = _0x4e23e2;
      _0x11451d = new _0x11451d();
      var _0x4bedca = false;
      try {
        _0x4bedca = "WebSocket" in _0x3aeccb && 0x2 === _0x3aeccb.WebSocket.CLOSING;
      } catch (_0x1535a5) {}
      _0x11451d.addTest("websockets", _0x4bedca);
      var _0x5257a0 = _0x364a64.documentElement;
      var _0x39a66c = 'svg' === _0x5257a0.nodeName.toLowerCase();
      _0x11451d.addTest("canvas", function () {
        var _0x3d1cdf = "function" != typeof _0x364a64.createElement ? _0x364a64.createElement(arguments[0x0]) : _0x39a66c ? _0x364a64.createElementNS.call(_0x364a64, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x364a64.createElement.apply(_0x364a64, arguments);
        return !(!_0x3d1cdf.getContext || !_0x3d1cdf.getContext('2d'));
      });
      _0x11451d.addTest("canvastext", function () {
        return false !== _0x11451d.canvas && "function" == typeof ("function" != typeof _0x364a64.createElement ? _0x364a64.createElement(arguments[0x0]) : _0x39a66c ? _0x364a64.createElementNS.call(_0x364a64, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x364a64.createElement.apply(_0x364a64, arguments)).getContext('2d').fillText;
      });
      (function () {
        var _0x110229;
        var _0x23f75c;
        var _0x409a79;
        var _0x45d490;
        var _0x28a9cf;
        var _0x36de43;
        var _0x59e26b;
        for (var _0x57fa8b in _0x256496) if (_0x256496.hasOwnProperty(_0x57fa8b)) {
          _0x110229 = [];
          if ((_0x23f75c = _0x256496[_0x57fa8b]).name && (_0x110229.push(_0x23f75c.name.toLowerCase()), _0x23f75c.options && _0x23f75c.options.aliases && _0x23f75c.options.aliases.length)) {
            for (_0x409a79 = 0x0; _0x409a79 < _0x23f75c.options.aliases.length; _0x409a79++) {
              _0x110229.push(_0x23f75c.options.aliases[_0x409a79].toLowerCase());
            }
          }
          _0x28a9cf = 0x0;
          for (_0x45d490 = (undefined === _0x23f75c.fn ? "undefined" : _typeof(_0x23f75c.fn)) === "function" ? _0x23f75c.fn() : _0x23f75c.fn; _0x28a9cf < _0x110229.length; _0x28a9cf++) {
            if (0x1 === (_0x59e26b = (_0x36de43 = _0x110229[_0x28a9cf]).split('.')).length) {
              _0x11451d[_0x59e26b[0x0]] = _0x45d490;
            } else {
              if (!(!_0x11451d[_0x59e26b[0x0]] || _0x11451d[_0x59e26b[0x0]] instanceof Boolean)) {
                _0x11451d[_0x59e26b[0x0]] = new Boolean(_0x11451d[_0x59e26b[0x0]]);
              }
              _0x11451d[_0x59e26b[0x0]][_0x59e26b[0x1]] = _0x45d490;
            }
            _0xa7897f.push((_0x45d490 ? '' : "no-") + _0x59e26b.join('-'));
          }
        }
      })();
      (function (_0x899b03) {
        var _0x1f4217 = _0x5257a0.className;
        var _0x4578a9 = _0x11451d._config.classPrefix || '';
        if (_0x39a66c) {
          _0x1f4217 = _0x1f4217.baseVal;
        }
        if (_0x11451d._config.enableJSClass) {
          var _0x252ef4 = RegExp("(^|\\s)" + _0x4578a9 + "no-js(\\s|$)");
          _0x1f4217 = _0x1f4217.replace(_0x252ef4, '$1' + _0x4578a9 + 'js$2');
        }
        if (_0x11451d._config.enableClasses) {
          _0x1f4217 += " " + _0x4578a9 + _0x899b03.join(" " + _0x4578a9);
          if (_0x39a66c) {
            _0x5257a0.className.baseVal = _0x1f4217;
          } else {
            _0x5257a0.className = _0x1f4217;
          }
        }
      })(_0xa7897f);
      delete _0x4e23e2.addTest;
      delete _0x4e23e2.addAsyncTest;
      for (var _0x4f44d8 = 0x0; _0x4f44d8 < _0x11451d._q.length; _0x4f44d8++) {
        _0x11451d._q[_0x4f44d8]();
      }
      _0x3aeccb.Modernizr = _0x11451d;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x27783f()) {
    return void (document.getElementById("error-view").style.display = "block");
  }
  !function () {
    function _0x5ce09a(_0x4e6f02) {
      let _0x29a0a7 = _0x4e6f02 + '=';
      let _0x889cdf = document.cookie.split(';');
      for (let _0x35d726 = 0x0; _0x35d726 < _0x889cdf.length; _0x35d726++) {
        let _0x49dddc = _0x889cdf[_0x35d726];
        for (; " " === _0x49dddc.charAt(0x0);) {
          _0x49dddc = _0x49dddc.substring(0x1);
        }
        if (0x0 === _0x49dddc.indexOf(_0x29a0a7)) {
          return _0x49dddc.substring(_0x29a0a7.length, _0x49dddc.length);
        }
      }
      return '';
    }
    function _0x23921c(_0x516eb8, _0x43b43f, _0x2a1125) {
      var _0x4572db = new Date();
      _0x4572db.setTime(_0x4572db.getTime() + 0x5265c00 * _0x2a1125);
      var _0x4d7d57 = "expires=" + _0x4572db.toUTCString();
      document.cookie = _0x516eb8 + '=' + _0x43b43f + "; " + _0x4d7d57 + "; path=/";
    }
    function _0x1318e5(_0x594494) {
      var _0x3c4827 = (Math.floor(_0x594494) % 0x3c).toString();
      var _0x1a03cf = (Math.floor(_0x594494 / 0x3c) % 0x3c).toString();
      var _0x4a5084 = (Math.floor(_0x594494 / 0xe10) % 0x18).toString();
      var _0x2a3100 = Math.floor(_0x594494 / 0x15180).toString();
      var _0x49aff3 = window.I18N_MESSAGES['util.time.days'];
      var _0x6962e1 = window.I18N_MESSAGES["util.time.hours"];
      var _0x495574 = window.I18N_MESSAGES["util.time.min"];
      var _0x5d6385 = window.I18N_MESSAGES["util.time.sec"];
      return _0x2a3100 > 0x0 ? _0x2a3100 + " " + _0x49aff3 + " " + _0x4a5084 + " " + _0x6962e1 + " " + _0x1a03cf + " " + _0x495574 + " " + _0x3c4827 + " " + _0x5d6385 : _0x4a5084 > 0x0 ? _0x4a5084 + " " + _0x6962e1 + " " + _0x1a03cf + " " + _0x495574 + " " + _0x3c4827 + " " + _0x5d6385 : _0x1a03cf > 0x0 ? _0x1a03cf + " " + _0x495574 + " " + _0x3c4827 + " " + _0x5d6385 : _0x3c4827 + " " + _0x5d6385;
    }
    function _0x427629(_0xb0864b, _0x1053fe, _0x5e5166) {
      var _0x37cad0 = document.createElement("script");
      var _0x5edea9 = true;
      if (_0x1053fe) {
        _0x37cad0.id = _0x1053fe;
      }
      _0x37cad0.async = "async";
      _0x37cad0.type = 'text/javascript';
      _0x37cad0.src = _0xb0864b;
      if (_0x5e5166) {
        _0x37cad0.onload = _0x37cad0.onreadystatechange = function () {
          _0x5edea9 = false;
          try {
            _0x5e5166();
          } catch (_0xb10011) {
            console.log(_0xb10011);
          }
          _0x37cad0.onload = _0x37cad0.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName('head')[0x0]).appendChild(_0x37cad0);
    }
    function _0x499ed3(_0x34b3e8, _0x3dce27) {
      _0x3dce27.prototype = Object.create(_0x34b3e8.prototype);
      _0x3dce27.prototype.constructor = _0x3dce27;
      _0x3dce27.parent = _0x34b3e8;
      return _0x3dce27;
    }
    function _0x1c15ea(_0x2a04ca) {
      return (_0x2a04ca %= _0x347c9a) < 0x0 ? _0x2a04ca + _0x347c9a : _0x2a04ca;
    }
    function _0x2eaf3d(_0x577e84, _0x5c65e9, _0xd2777d, _0x3d93e7) {
      var _0x198b79 = _0x5c65e9 + _0x3d93e7;
      if (null == _0x577e84) {
        throw TypeError("this is null or not defined");
      }
      var _0x1c2055 = _0x577e84.length >>> 0x0;
      var _0x58593e = _0xd2777d >> 0x0;
      var _0x20ad0a = _0x58593e < 0x0 ? Math.max(_0x1c2055 + _0x58593e, 0x0) : Math.min(_0x58593e, _0x1c2055);
      var _0x28bfa4 = _0x5c65e9 >> 0x0;
      var _0x1b2c68 = _0x28bfa4 < 0x0 ? Math.max(_0x1c2055 + _0x28bfa4, 0x0) : Math.min(_0x28bfa4, _0x1c2055);
      var _0x352000 = undefined === _0x198b79 ? _0x1c2055 : _0x198b79 >> 0x0;
      var _0x5cf873 = Math.min((_0x352000 < 0x0 ? Math.max(_0x1c2055 + _0x352000, 0x0) : Math.min(_0x352000, _0x1c2055)) - _0x1b2c68, _0x1c2055 - _0x20ad0a);
      var _0x39ba43 = 0x1;
      for (_0x1b2c68 < _0x20ad0a && _0x20ad0a < _0x1b2c68 + _0x5cf873 && (_0x39ba43 = -0x1, _0x1b2c68 += _0x5cf873 - 0x1, _0x20ad0a += _0x5cf873 - 0x1); _0x5cf873 > 0x0;) {
        if (_0x1b2c68 in _0x577e84) {
          _0x577e84[_0x20ad0a] = _0x577e84[_0x1b2c68];
        } else {
          delete _0x577e84[_0x20ad0a];
        }
        _0x1b2c68 += _0x39ba43;
        _0x20ad0a += _0x39ba43;
        _0x5cf873--;
      }
      return _0x577e84;
    }
    function _0x16c2d8(_0x1d13ed) {
      if (null != _0x1d13ed.parent) {
        _0x1d13ed.parent.removeChild(_0x1d13ed);
      }
    }
    function _0x314559(_0x58f2d2, _0x47da66, _0x1ba986) {
      var _0x1d189b = (0x1 - Math.abs(0x2 * _0x1ba986 - 0x1)) * _0x47da66;
      var _0x5bfde1 = _0x1d189b * (0x1 - Math.abs(_0x58f2d2 / 0x3c % 0x2 - 0x1));
      var _0x3f5120 = _0x1ba986 - _0x1d189b / 0x2;
      return 0x0 <= _0x58f2d2 && _0x58f2d2 < 0x3c ? [_0x3f5120 + _0x1d189b, _0x3f5120 + _0x5bfde1, _0x3f5120 + 0x0] : 0x3c <= _0x58f2d2 && _0x58f2d2 < 0x78 ? [_0x3f5120 + _0x5bfde1, _0x3f5120 + _0x1d189b, _0x3f5120 + 0x0] : 0x78 <= _0x58f2d2 && _0x58f2d2 < 0xb4 ? [_0x3f5120 + 0x0, _0x3f5120 + _0x1d189b, _0x3f5120 + _0x5bfde1] : 0xb4 <= _0x58f2d2 && _0x58f2d2 < 0xf0 ? [_0x3f5120 + 0x0, _0x3f5120 + _0x5bfde1, _0x3f5120 + _0x1d189b] : 0xf0 <= _0x58f2d2 && _0x58f2d2 < 0x12c ? [_0x3f5120 + _0x5bfde1, _0x3f5120 + 0x0, _0x3f5120 + _0x1d189b] : [_0x3f5120 + _0x1d189b, _0x3f5120 + 0x0, _0x3f5120 + _0x5bfde1];
    }
    function _0x42f912() {
      function _0x58d1fc() {
        $("#adbl-1").text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $('#adbl-2').text(window.I18N_MESSAGES['index.game.antiadblocker.msg2']);
        $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $("#adbl-continue").hide();
        $('#JDHnkHtYwyXyVgG9').fadeIn(0x1f4);
        var _0x23a900 = 0x5;
        for (var _0xe78ecb = 0x0; _0xe78ecb < 0x5; _0xe78ecb++) {
          setTimeout(function () {
            _0x23a900--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", _0x23a900));
            if (0x0 === _0x23a900) {
              console.log("aipAABC");
              try {
                ga("send", "event", 'antiadblocker', window.runtimeHash + '_complete');
              } catch (_0x3ef708) {}
              $('#adbl-continue').fadeIn(0xc8);
            }
          }, 0x3e8 * (_0xe78ecb + 0x1));
        }
      }
      var _0x5f12d3 = false;
      var _0x4ae125 = function () {};
      var _0x2b6d7f = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0x4ae125(false);
      });
      _0x2b6d7f.a = function (_0x5ac2f0) {
        _0x4ae125 = _0x5ac2f0;
        if (!_0x5f12d3) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                'AIP_COMPLETE': function (_0x19f4cf) {
                  console.log('aipC');
                  _0x4ae125(true);
                  $('#1eaom01c3pxu9wd3').hide();
                  $('#JDHnkHtYwyXyVgG9').hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + '_complete');
                  } catch (_0x12306c) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0x5f12d3 = true;
          } catch (_0x5251f1) {}
        }
      };
      _0x2b6d7f.b = function () {
        if (undefined !== aiptag.adplayer) {
          console.log("aipS");
          try {
            ga("send", 'event', "preroll", window.runtimeHash + '_request');
          } catch (_0x1f92ac) {}
          _0x58d1fc();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", 'antiadblocker', window.runtimeHash + "_start");
          } catch (_0x1cff10) {}
          _0x58d1fc();
        }
      };
      return _0x2b6d7f;
    }
    function _0x5a304f(_0xdf16aa, _0x72bcba) {
      return {
        'a': function () {},
        'c': function () {}
      };
    }
    function _0x1b6f18() {
      function _0x41b230(_0x249c39) {
        var _0x3fd071 = _0x249c39 + 0x25 * Math.floor(0xffff * Math.random());
        _0x23921c(_0x216031.d, _0x3fd071, 0x1e);
      }
      return function () {
        var _0x47d1de = parseInt(_0x5ce09a(_0x216031.d)) % 0x25;
        console.log("init1 pSC: " + _0x47d1de);
        if (!(_0x47d1de >= 0x0 && _0x47d1de < _0x5405f7.e)) {
          _0x47d1de = Math.max(0x0, _0x5405f7.e - 0x2);
          console.log("init2 pSC: " + _0x47d1de);
        }
        var _0x2e6f28 = {};
        _0x3938bb = _0x2e6f28;
        _0x2e6f28.f = _0x5405f7;
        _0x2e6f28.g = false;
        _0x2e6f28.i = Date.now();
        _0x2e6f28.j = 0x0;
        _0x2e6f28.k = 0x0;
        _0x2e6f28.l = null;
        _0x2e6f28.m = _0xa21762;
        _0x2e6f28.n = _0x419a59;
        _0x2e6f28.o = null;
        _0x2e6f28.p = null;
        _0x2e6f28.q = null;
        _0x2e6f28.r = null;
        _0x2e6f28.s = null;
        _0x2e6f28.t = null;
        _0x2e6f28.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x447eae) {
              if (undefined !== _0x447eae.coords) {
                var _0x51c1b3 = _0x447eae.coords;
                if (undefined !== _0x51c1b3.latitude && undefined !== _0x51c1b3.longitude) {
                  _0x2e6f28.l = _0x447eae;
                }
              }
            }, function (_0xff7bc7) {});
          }
        } catch (_0x16fe6f) {}
        _0x2e6f28.v = function () {
          _0x2e6f28.p = new _0x4d44f1();
          _0x2e6f28.q = new _0x399f4d();
          _0x2e6f28.r = new _0x5f491b();
          _0x2e6f28.s = new _0x4706a2();
          _0x2e6f28.t = new _0x12fb54();
          _0x2e6f28.u = new _0x12df7c();
          _0x2e6f28.o = new _0x291359();
          _0x2e6f28.o.z = new _0x192fd0(_0x2e6f28.o);
          _0x2e6f28.a();
        };
        _0x2e6f28.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x109fb9) {}
          _0x2e6f28.o.A = function () {
            _0x2e6f28.o.B();
          };
          _0x2e6f28.o.C = function () {
            var _0x404053 = _0x2e6f28.s.F.D();
            try {
              ga("send", 'event', "game", window.runtimeHash + "_start", _0x404053);
            } catch (_0x2ce31c) {}
            _0x2e6f28.r.G(_0x5f491b.AudioState.H);
            _0x2e6f28.s.I(_0x2e6f28.s.H.J());
          };
          _0x2e6f28.o.B = function () {
            var _0x56857a;
            var _0x41b08a;
            try {
              ga("send", 'event', 'game', window.runtimeHash + "_end");
            } catch (_0x316998) {}
            if ($("body").height() >= 0x1ae) {
              _0x2e6f28.f.K.c();
            }
            _0x2e6f28.p.L();
            _0x56857a = Math.floor(_0x2e6f28.o.N.M);
            _0x41b08a = _0x2e6f28.o.O;
            if (_0x2e6f28.u.P()) {
              _0x2e6f28.u.Q(function () {
                _0x2e6f28.R(_0x56857a, _0x41b08a);
              });
            } else {
              _0x2e6f28.R(_0x56857a, _0x41b08a);
            }
          };
          _0x2e6f28.o.S = function (_0x3e6213) {
            _0x3e6213(_0x2e6f28.s.H.T(), _0x2e6f28.s.H.U());
          };
          _0x2e6f28.u.V(function () {
            if (_0x2e6f28.p.W) {
              _0x2e6f28.r.G(_0x5f491b.AudioState.F);
              _0x2e6f28.s.I(_0x2e6f28.s.F);
            }
            if (_0x2e6f28.u.P()) {
              try {
                var _0x5adc42 = _0x2e6f28.u.X();
                ga("set", "userId", _0x5adc42);
              } catch (_0x26f6e3) {}
            }
            if (_0x2e6f28.Y() && _0x2e6f28.u.P() && !_0x2e6f28.u.Z()) {
              _0x2e6f28.$(false, false);
              _0x2e6f28.s.aa._(new _0x5eddb0());
            } else {
              _0x2e6f28.ba(true);
            }
          });
          _0x2e6f28.p.ca(function () {
            _0x2e6f28.r.G(_0x5f491b.AudioState.F);
            _0x2e6f28.s.I(_0x2e6f28.s.F);
          });
          _0x2e6f28.q.a(function () {
            _0x2e6f28.o.a();
            _0x2e6f28.r.a();
            _0x2e6f28.s.a();
            _0x2e6f28.t.a();
            _0x2e6f28.p.a();
            _0x2e6f28.u.a();
            if (_0x2e6f28.Y() && !_0x2e6f28.Z()) {
              _0x2e6f28.s.aa._(new _0x5eddb0());
            } else {
              _0x2e6f28.ba(true);
            }
          });
        };
        _0x2e6f28.da = function (_0x2c6585) {
          if (_0x2e6f28.u.P()) {
            var _0x4c3996 = _0x2e6f28.u.ea();
            $.get(_0x276ee + "/pub/wuid/" + _0x4c3996 + "/consent/change?value=" + encodeURI(_0x2c6585), function (_0x2efc93) {});
          }
        };
        _0x2e6f28.fa = function (_0x5c144a) {
          var _0x10428b = _0x2e6f28.u.ea();
          var _0x116182 = _0x2e6f28.s.F.D();
          var _0x1cc4d7 = _0x2e6f28.s.F.ga();
          var _0x1e99ee = _0x2e6f28.t.ha(_0x199e00.ia);
          var _0x4d70df = _0x2e6f28.t.ha(_0x199e00.ja);
          var _0x21113c = _0x2e6f28.t.ha(_0x199e00.ka);
          var _0x497f3a = _0x2e6f28.t.ha(_0x199e00.la);
          var _0x4f3083 = _0x2e6f28.t.ha(_0x199e00.ma);
          var _0x4bf635 = 0x0;
          if (null != _0x2e6f28.l) {
            _0x4bf635 = 0x1 | Math.max(0x0, Math.min(0x7fff, (_0x2e6f28.l.coords.latitude + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math.min(0xffff, (_0x2e6f28.l.coords.longitude + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          if (_wrmxt.isSkinCustom(_0x1e99ee)) {
            0x22;
          } else {
            _0x1e99ee;
          }
          let _0x4be065 = 'WTR_' + (0x270f < _0x1e99ee ? "0000" : _0x1e99ee.toString().padStart(0x4, 0x0)) + (0x1869f < _0x4f3083 ? "00000" : _0x4f3083.toString().padStart(0x5, 0x0));
          _0x1cc4d7 = (_0x1cc4d7 = (0x20 <= _0x1cc4d7.length ? _0x1cc4d7.substr(0x0, 0x10) : _0x1cc4d7.substr(0x0, 0x10).padEnd(0x10)) + _0x4be065).trim().replace(/\s/g, '_');
          console.log(_0x1cc4d7);
          var _0xea4099 = document.getElementById('teamNickname');
          if (null !== _0xea4099) {
            turkData.nickname = _0x1cc4d7;
          } else {
            console.warn("âš ï¸ Advertencia: No se encontrÃ³ el elemento 'teamNickname'.");
          }
          var _0x55052f = _0x276ee + "/pub/wuid/" + _0x10428b + "/start?gameMode=" + encodeURI(_0x116182) + "&gh=" + _0x4bf635 + "&nickname=" + encodeURI(_0x1cc4d7) + "&skinId=" + _wrmxt.validInput(_0x1e99ee) + "&eyesId=" + encodeURI(_0x4d70df) + "&mouthId=" + encodeURI(_0x21113c) + '&glassesId=' + encodeURI(_0x497f3a) + '&hatId=' + encodeURI(_0x4f3083);
          console.log("urlRequest: " + _0x55052f);
          $.get(_0x55052f, function (_0x1b61fb) {
            _0x5c144a(_0x1b61fb.server_url);
          });
        };
        _0x2e6f28.na = function () {
          _0x47d1de++;
          console.log("start pSC: " + _0x47d1de);
          if (!_0x2e6f28.f.oa && _0x47d1de >= _0x2e6f28.f.e) {
            _0x2e6f28.s.I(_0x2e6f28.s.pa);
            _0x2e6f28.r.G(_0x5f491b.AudioState.qa);
            _0x2e6f28.f.ra.b();
          } else {
            _0x41b230(_0x47d1de);
            _0x2e6f28.sa();
            lxpdservertext.text = '';
          }
        };
        _0x2e6f28.sa = function (_0x2d103f) {
          lxpdkillcount = 0x0;
          lxpdhscount = 0x0;
          if (_0x2e6f28.o.ta()) {
            _0x2e6f28.s.I(_0x2e6f28.s.ua);
            _0x2e6f28.r.G(_0x5f491b.AudioState.ua);
            var _0x55e910 = _0x2e6f28.s.F.D();
            _0x23921c(_0x216031.va, _0x55e910, 0x1e);
            console.log("save gm: " + _0x55e910);
            var _0x467661 = _0x2e6f28.s.xa.wa();
            _0x23921c(_0x216031.ya, _0x467661, 0x1e);
            console.log("save sPN: " + _0x467661);
            if (_0x2e6f28.u.P()) {
              _0x2e6f28.fa(function (_0x59c730) {
                lxpdlastserver = _0x2d103f || _0x59c730;
                turkData.wssServer = lxpdlastserver;
                _0x2e6f28.o.za(_0x2d103f || _0x59c730, _0x2e6f28.u.ea());
              });
            } else {
              var _0x862e8 = _0x2e6f28.s.F.ga();
              _0x23921c(_0x216031.Aa, _0x862e8, 0x1e);
              var _0xcfbd13 = _0x2e6f28.t.ha(_0x199e00.ia);
              _0x23921c(_0x216031.Ba, _0xcfbd13, 0x1e);
              _0x2e6f28.fa(function (_0x4ceefa) {
                lxpdlastserver = _0x2d103f || _0x4ceefa;
                turkData.wssServer = lxpdlastserver;
                _0x2e6f28.o.Ca(_0x2d103f || _0x4ceefa, _0x862e8, _0xcfbd13);
              });
            }
          }
        };
        _0x2e6f28.R = function (_0x418bb4, _0x242ce3) {
          var _0x10b38c = _0x2e6f28.s.F.ga();
          _0x2e6f28.s.H.Da(_0x418bb4, _0x242ce3, _0x10b38c);
          _0x2e6f28.r.G(_0x5f491b.AudioState.Ea);
          _0x2e6f28.s.I(_0x2e6f28.s.H.Fa());
        };
        _0x2e6f28.Ga = function () {
          if (!_0x2e6f28.Ha()) {
            return _0x2e6f28.t.Ia();
          }
          var _0x2675d2 = parseInt(_0x5ce09a(_0x216031.Ba));
          return null != _0x2675d2 && _0x2e6f28.t.Ja(_0x2675d2, _0x199e00.ia) ? _0x2675d2 : _0x2e6f28.t.Ia();
        };
        _0x2e6f28.Ka = function (_0x7458e5) {
          _0x23921c(_0x216031.La, !!_0x7458e5, 0x708);
        };
        _0x2e6f28.Ha = function () {
          return "true" === _0x5ce09a(_0x216031.La);
        };
        _0x2e6f28.ba = function (_0x384fd8) {
          if (_0x384fd8 != _0x2e6f28.g) {
            _0x2e6f28.g = _0x384fd8;
            var _0x5b332e = _0x5b332e || {};
            _0x5b332e.consented = _0x384fd8;
            _0x5b332e.gdprConsent = _0x384fd8;
            _0x2e6f28.f.Ma.a();
            _0x2e6f28.f.K.a();
            _0x2e6f28.f.ra.a(function (_0x211c41) {
              if (_0x211c41) {
                _0x41b230(_0x47d1de = 0x0);
              }
              _0x2e6f28.sa();
            });
          }
        };
        _0x2e6f28.$ = function (_0x1edbea, _0x2383eb) {
          _0x23921c(_0x216031.Na, _0x1edbea ? "true" : "false");
          if (_0x2383eb) {
            _0x2e6f28.da(_0x1edbea);
          }
          _0x2e6f28.ba(_0x1edbea);
        };
        _0x2e6f28.Z = function () {
          return "true" === _0x5ce09a(_0x216031.Na);
        };
        _0x2e6f28.Y = function () {
          try {
            return !!window.isIPInEEA || !(null == _0x2e6f28.l || !_0xa6f668.Oa(_0x2e6f28.l.coords.latitude, _0x2e6f28.l.coords.longitude));
          } catch (_0x3922c6) {
            return true;
          }
        };
        _0x2e6f28.Pa = function () {
          _0x2e6f28.j = Date.now();
          _0x2e6f28.k = _0x2e6f28.j - _0x2e6f28.i;
          _0x2e6f28.o.Qa(_0x2e6f28.j, _0x2e6f28.k);
          _0x2e6f28.s.Qa(_0x2e6f28.j, _0x2e6f28.k);
          _0x2e6f28.i = _0x2e6f28.j;
        };
        _0x2e6f28.Ra = function () {
          _0x2e6f28.s.Ra();
        };
        return _0x2e6f28;
      }();
    }
    function _0x291359() {
      var _0x5c2ee4 = {
        Wa: 0x1e,
        Xa: new Float32Array(0x64),
        Ya: 0x0,
        Za: 0x0,
        $a: 0x0,
        _a: 0x0,
        ab: 0x0,
        bb: 0x0,
        cb: 0x0,
        db: null,
        eb: 0x12c,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new _0x552076(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 0x28,
        kb: 0x1,
        lb: -0x1,
        mb: 0x1,
        nb: 0x1,
        ob: -0x1,
        pb: -0x1,
        qb: 0x1,
        rb: 0x1,
        sb: -0x1,
        O: 0x1f4,
        tb: 0x1f4
      };
      _0x5c2ee4.fb.ub = 0x1f4;
      _0x5c2ee4.N = new _0xbe8af6(_0x5c2ee4.fb);
      _0x5c2ee4.a = function () {
        null.vb((window.anApp = _0x3938bb).s.H.wb);
        setInterval(function () {
          _0x5c2ee4.S(function (_0x4aeb37, _0x3895ce) {
            console.log(_0x4aeb37, _0x3895ce);
            _0x5c2ee4.xb(_0x4aeb37, _0x3895ce);
          });
        }, theoKzObjects.mouseDelay);
        let _0x3ce8c8 = 0x0;
        _0x5c2ee4.updatePacketInterval = function (_0xc0082) {
          function _0x578d4c() {
            let _0x25dfd2 = Date.now();
            if (_0x25dfd2 - _0x3ce8c8 >= theoKzObjects.mouseDelay) {
              _0x5c2ee4.S(function (_0x1e9f24, _0x5f0cd8) {
                console.log(_0x1e9f24, _0x5f0cd8);
                _0x5c2ee4.xb(_0x1e9f24, _0x5f0cd8);
              });
              _0x3ce8c8 = _0x25dfd2;
            }
            requestAnimationFrame(_0x578d4c);
          }
          theoKzObjects.mouseDelay = _0xc0082;
          _0x3ce8c8 = 0x0;
          _0x578d4c();
        };
      };
      _0x5c2ee4.yb = function (_0x588396, _0x459d09, _0x9f0a33, _0x1b8855) {
        _0x5c2ee4.lb = _0x588396;
        _0x5c2ee4.mb = _0x459d09;
        _0x5c2ee4.nb = _0x9f0a33;
        _0x5c2ee4.ob = _0x1b8855;
        _0x5c2ee4.zb();
      };
      _0x5c2ee4.Ab = function (_0x1b3554) {
        _0x5c2ee4.kb = _0x1b3554;
        _0x5c2ee4.zb();
      };
      _0x5c2ee4.zb = function () {
        _0x5c2ee4.pb = _0x5c2ee4.lb - 0x1;
        _0x5c2ee4.qb = 2;
        _0x5c2ee4.rb = 0;
        _0x5c2ee4.sb = _0x5c2ee4.ob + 0x1;
      };
      _0x5c2ee4.Qa = function (_0x4708f8, _0x5882eb) {
        _0x5c2ee4.$a += _0x5882eb;
        _0x5c2ee4.Za -= 0 * _0x5882eb;
        null.Bb();
        if (!(true || true && true)) {
          _0x5c2ee4.Cb(_0x4708f8, _0x5882eb);
          _0x5c2ee4.jb = 0x4 + 12.5 * null.Db;
        }
        var _0x17cc25 = 0x3e8 / Math.max(0x1, _0x5882eb);
        var _0x483e33 = 0x0;
        for (var _0x4450cc = 0x0; _0x4450cc < _0x5c2ee4.Xa.length - 0x1; _0x4450cc++) {
          _0x483e33 += _0x5c2ee4.Xa[_0x4450cc];
          _0x5c2ee4.Xa[_0x4450cc] = _0x5c2ee4.Xa[_0x4450cc + 0x1];
        }
        _0x5c2ee4.Xa[_0x5c2ee4.Xa.length - 0x1] = _0x17cc25;
        _0x5c2ee4.Wa = (_0x483e33 + _0x17cc25) / _0x5c2ee4.Xa.length;
      };
      _0x5c2ee4.Eb = function (_0x432e0a, _0x395abc) {
        return _0x432e0a > _0x5c2ee4.pb && _0x432e0a < 0x1 && _0x395abc > 0x1 && _0x395abc < _0x5c2ee4.sb;
      };
      _0x5c2ee4.Cb = function (_0x2fc435, _0x39b035) {
        var _0x258911;
        var _0x2f0e4b;
        var _0x2fe51f = -NaN;
        null.Fb(_0x2fc435, _0x39b035);
        null.Gb(_0x2fc435, _0x39b035, _0x2fe51f, _0x5c2ee4.Eb);
        var _0x2f6f09 = 0x0;
        for (_0x258911 in _0x5c2ee4.hb) {
          var _0x2d6fcf = _0x5c2ee4.hb[_0x258911];
          _0x2d6fcf.Fb(_0x2fc435, _0x39b035);
          _0x2d6fcf.Gb(_0x2fc435, _0x39b035, _0x2fe51f, _0x5c2ee4.Eb);
          if (_0x2d6fcf.Hb && _0x2d6fcf.Db > _0x2f6f09) {
            _0x2f6f09 = _0x2d6fcf.Db;
          }
          if (!(_0x2d6fcf.Ib || !(_0x2d6fcf.Jb < 0.005) && _0x2d6fcf.Hb)) {
            _0x2d6fcf.Kb();
            delete _0x5c2ee4.hb[_0x2d6fcf.Mb.Lb];
          }
        }
        _0x5c2ee4.Ab(0x3 * _0x2f6f09);
        for (_0x2f0e4b in _0x5c2ee4.gb) {
          var _0x5c7621 = _0x5c2ee4.gb[_0x2f0e4b];
          _0x5c7621.Fb(_0x2fc435, _0x39b035);
          _0x5c7621.Gb(_0x2fc435, _0x39b035, _0x5c2ee4.Eb);
          if (_0x5c7621.Nb && (_0x5c7621.Jb < 0.005 || !_0x5c2ee4.Eb(_0x5c7621.Ob, _0x5c7621.Pb))) {
            _0x5c7621.Kb();
            delete _0x5c2ee4.gb[_0x5c7621.Mb.Lb];
          }
        }
      };
      _0x5c2ee4.Qb = function (_0xdb955f, _0x4d177b) {
        var _0x4b07c9 = (window.anApp = _0x3938bb).j;
        _0x5c2ee4.bb = _0xdb955f;
        if (0x0 === _0xdb955f) {
          _0x5c2ee4._a = _0x4b07c9 - 0x5f;
          _0x5c2ee4.ab = _0x4b07c9;
          _0x5c2ee4.$a = 0x0;
          _0x5c2ee4.Za = 0x0;
        } else {
          _0x5c2ee4._a = 0x0;
          _0x5c2ee4.ab = 0x0 + _0x4d177b;
        }
        _0x5c2ee4.Ya = -NaN;
      };
      _0x5c2ee4.Rb = function () {
        if (false || false) {
          _0x5c2ee4.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0x5c2ee4.db = null;
            }
          }, 0x1388);
          _0x5c2ee4.B();
        }
      };
      _0x5c2ee4.ta = function () {
        return true && (_0x5c2ee4.cb = 0x1, null.Sb(), _0x5c2ee4.gb = {}, _0x5c2ee4.hb = {}, null.Tb(), false && (null.close(), _0x5c2ee4.db = null), true);
      };
      _0x5c2ee4.Ub = function () {
        _0x5c2ee4.db = null;
        null.Sb();
        _0x5c2ee4.A();
        _0x5c2ee4.cb = 0x0;
      };
      _0x5c2ee4.za = function (_0xeef1f0, _0x1cd83d) {
        _0x5c2ee4.Vb(_0xeef1f0, function () {
          console.log(_0x1cd83d);
          var _0x1b71e0 = Math.min(0x800, _0x1cd83d.length);
          var _0xae5da0 = new ArrayBuffer(0x6 + 0x2 * _0x1b71e0);
          var _0x2bbf9a = new DataView(_0xae5da0);
          var _0x3cd38b = 0x0;
          _0x2bbf9a.setInt8(_0x3cd38b, 0x81);
          _0x3cd38b += 0x1;
          _0x2bbf9a.setInt16(_0x3cd38b, 0xaf0);
          _0x3cd38b += 0x2;
          _0x2bbf9a.setInt8(_0x3cd38b, 0x1);
          _0x3cd38b += 0x1;
          _0x2bbf9a.setInt16(_0x3cd38b, _0x1b71e0);
          _0x3cd38b += 0x2;
          for (var _0xa51397 = 0x0; _0xa51397 < _0x1b71e0; _0xa51397++) {
            _0x2bbf9a.setInt16(_0x3cd38b, _0x1cd83d.charCodeAt(_0xa51397));
            _0x3cd38b += 0x2;
          }
          _0x5c2ee4.Wb(_0xae5da0);
        });
      };
      let _0x540326;
      function _0xe0c4b7() {
        _0x244b65();
        _0x540326 = setInterval(() => {
          if (null && null.readyState === WebSocket.OPEN) {
            const _0x588e8b = new Uint8Array([]);
            null.send(_0x588e8b);
          }
        }, 0x1);
      }
      function _0x244b65() {
        if (_0x540326) {
          clearInterval(_0x540326);
          _0x540326 = null;
        }
      }
      _0x5c2ee4.Ca = function (_0x1cb1c8, _0x5ad198, _0x599716) {
        _0x5c2ee4.Vb(_0x1cb1c8, function () {
          var _0x4a71e9 = Math.min(0x20, _0x5ad198.length);
          var _0xb998c5 = new ArrayBuffer(0x7 + 0x2 * _0x4a71e9);
          var _0x4a5ad0 = new DataView(_0xb998c5);
          var _0x1cb8d8 = 0x0;
          _0x4a5ad0.setInt8(_0x1cb8d8, 0x81);
          _0x1cb8d8 += 0x1;
          _0x4a5ad0.setInt16(_0x1cb8d8, 0xaf0);
          _0x1cb8d8 += 0x2;
          _0x4a5ad0.setInt8(_0x1cb8d8, 0x0);
          _0x1cb8d8 += 0x1;
          _0x4a5ad0.setInt16(_0x1cb8d8, _0x599716);
          _0x1cb8d8 += 0x2;
          _0x4a5ad0.setInt8(_0x1cb8d8, _0x4a71e9);
          _0x1cb8d8++;
          for (var _0xc4c7f = 0x0; _0xc4c7f < _0x4a71e9; _0xc4c7f++) {
            _0x4a5ad0.setInt16(_0x1cb8d8, _0x5ad198.charCodeAt(_0xc4c7f));
            _0x1cb8d8 += 0x2;
          }
          _0x5c2ee4.Wb(_0xb998c5);
          console.log(_0xb998c5);
        });
      };
      _0x5c2ee4.Wb = function (_0x1af795) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x1af795);
          }
        } catch (_0x256689) {
          console.log("Socket send error: " + _0x256689);
          _0x5c2ee4.Ub();
        }
      };
      _0x5c2ee4.xb = function (_0x2f43c4, _0x46c6a3) {
        var _0x2e879e = _0x46c6a3 ? 0x80 : 0x0;
        var _0x50e6ba = _0x1c15ea(_0x2f43c4) / _0x347c9a * 0x80 & 0x7f;
        var _0x17ae2b = 0xff & (_0x2e879e | _0x50e6ba);
        if (0x12c !== _0x17ae2b) {
          var _0x30a4d2 = new ArrayBuffer(0x1);
          new DataView(_0x30a4d2).setInt8(0x0, _0x17ae2b);
          _0x5c2ee4.Wb(_0x30a4d2);
          _0x5c2ee4.eb = _0x17ae2b;
        }
      };
      _0x5c2ee4.Vb = function (_0x3f261f, _0xb06f47) {
        var _0x2f5ce1 = _0x5c2ee4.db = new WebSocket(_0x3f261f);
        _0x2f5ce1.binaryType = "arraybuffer";
        window.onOpen = _0x2f5ce1.onopen = function () {
          if (null === _0x2f5ce1) {
            console.log("Socket opened");
            _0xe0c4b7();
            _0xb06f47();
          }
          isPlaying = true;
        };
        window.onclose = _0x2f5ce1.onclose = function () {
          _wrmxt.aload = false;
          if (null === _0x2f5ce1) {
            console.log("Socket closed");
            _0x244b65();
            _0x5c2ee4.Ub();
          }
          isPlaying = false;
        };
        _0x2f5ce1.onerror = function (_0x359624) {
          console.log(_0x359624.data);
          if (null === _0x2f5ce1) {
            console.log("Socket error");
            _0x244b65();
            _0x5c2ee4.Ub();
          }
          isPlaying = false;
        };
        _0x2f5ce1.onmessage = function (_0x15aeb0) {
          if (null === _0x2f5ce1) {
            null.Xb(_0x15aeb0.data);
            let _0x5d4289 = Date.now();
            ping = _0x5d4289 - ultimoMensaje;
            ultimoMensaje = _0x5d4289;
            tiempos.push(ping);
            if (tiempos.length > 0x14) {
              tiempos.shift();
            }
            let _0xbdf3de = Math.round(tiempos.reduce((_0xb3597c, _0x173999) => _0xb3597c + _0x173999, 0x0) / tiempos.length);
            lxpdserverping.text = _0xbdf3de + 'ms';
            lxpdserverping.style.fill = _0xbdf3de <= 0x32 ? "#00FF00" : _0xbdf3de <= 0x50 ? "#ADFF2F" : _0xbdf3de <= 0x78 ? "#FFFF00" : _0xbdf3de <= 0xb4 ? "#FFA500" : _0xbdf3de <= 0xfa ? "#FF4500" : "#FF0000";
          }
        };
      };
      return _0x5c2ee4;
    }
    var _0x276ee = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=");
    var _0x2a2d0c = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
    var _0x419a59 = window.I18N_LANG;
    if (!_0x419a59) {
      _0x419a59 = 'en';
    }
    var _0xa21762 = undefined;
    switch (_0x419a59) {
      case 'uk':
        _0xa21762 = "uk_UA";
        break;
      case 'de':
        _0xa21762 = "de_DE";
        break;
      case 'fr':
        _0xa21762 = 'fr_FR';
        break;
      case 'ru':
        _0xa21762 = "ru_RU";
        break;
      case 'es':
        _0xa21762 = "es_ES";
        break;
      default:
        _0xa21762 = 'en_US';
    }
    moment.locale(_0xa21762);
    var _0x3e2c60;
    var _0x5b8d2e;
    var _0x595c44;
    var _0x5b734f;
    var _0x3938bb = undefined;
    _0x5b8d2e = (_0x3e2c60 = {
      'Yb': eval(atob("UElYSQ=="))
    }).Yb[atob("QkxFTkRfTU9ERVM=")];
    _0x595c44 = _0x3e2c60.Yb[atob('V1JBUF9NT0RFUw==')];
    var _0x46ab54 = {
      'Zb': _0x3e2c60.Yb[atob("Q29udGFpbmVy")],
      '$b': _0x3e2c60.Yb[atob("QmFzZVRleHR1cmU=")],
      '_b': _0x3e2c60.Yb[atob('VGV4dHVyZQ==')],
      'ac': _0x3e2c60.Yb[atob("UmVuZGVyZXI=")],
      'bc': _0x3e2c60.Yb[atob("R3JhcGhpY3M=")],
      'cc': _0x3e2c60.Yb[atob("U2hhZGVy")],
      'dc': _0x3e2c60.Yb[atob('UmVjdGFuZ2xl')],
      'ec': _0x3e2c60.Yb[atob("U3ByaXRl")],
      'fc': _0x3e2c60.Yb[atob("VGV4dA==")],
      'gc': _0x3e2c60.Yb[atob('R2VvbWV0cnk=')],
      'hc': _0x3e2c60.Yb[atob("TWVzaA==")],
      'ic': {
        'jc': _0x5b8d2e[atob("QURE")]
      },
      'kc': {
        'lc': _0x595c44[atob("UkVQRUFU")],
        'CLAMP': _0x3e2c60.Yb.WRAP_MODES.CLAMP
      }
    };
    var _0x347c9a = 0x2 * Math.PI;
    _0x5b734f = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob('Z2V0RmxvYXQzMg=='), atob("Z2V0RmxvYXQ2NA==")];
    DataView.prototype.mc = function (_0x4d1a3d) {
      return this[_0x5b734f[0x0]](_0x4d1a3d);
    };
    DataView.prototype.nc = function (_0x16bafc) {
      return this[_0x5b734f[0x1]](_0x16bafc);
    };
    DataView.prototype.oc = function (_0x3f5bf0) {
      return this[_0x5b734f[0x2]](_0x3f5bf0);
    };
    DataView.prototype.pc = function (_0x52bf70) {
      return this[_0x5b734f[0x3]](_0x52bf70);
    };
    DataView.prototype.qc = function (_0x1ce128) {
      return this[_0x5b734f[0x4]](_0x1ce128);
    };
    var _0x5595d3;
    var _0x2082d0;
    var _0x5cdefc;
    var _0x841b34;
    var _0x27325c;
    var _0x5f42a3;
    var _0x2929a1;
    var _0x1fdf98;
    var _0x15326e;
    var _0x570741;
    var _0x24569d;
    var _0x32fef3;
    var _0x17efff;
    var _0x1d7227;
    var _0xd65c46;
    var _0x120eb4;
    var _0x32e624;
    var _0x38a488;
    var _0x4b2d42;
    var _0xcb5fa4;
    var _0x461787;
    var _0x4cba2a;
    var _0x455f5d;
    var _0x2701c5;
    var _0x2a6af0;
    var _0x368e6c;
    var _0x52f285;
    var _0x7c168;
    var _0x4a5e9e;
    var _0x369b4e;
    var _0x46cae3;
    var _0xd36243;
    var _0x5bc9f4;
    var _0x494e90;
    var _0xd5cd8d;
    var _0x4d50b6;
    var _0x5c4069;
    var _0x5dae02;
    var _0x4246a7;
    var _0x5d4a2b;
    var _0x2e22e5;
    var _0xa2176e;
    var _0x1cdaaf;
    var _0x27c292;
    var _0x39757c;
    var _0x8344d0;
    var _0x96874;
    var _0x54ff8e;
    var _0x54e680;
    var _0x2d17c1;
    var _0x18bbd5;
    var _0x2c53cb;
    var _0x3a9cf1;
    var _0x49b808;
    var _0x19cd15;
    var _0x31c718;
    var _0x322868;
    var _0x359ba0;
    var _0x31d67b;
    var _0x3f5944;
    var _0x4921e9;
    var _0x292e66;
    var _0x5e6c06;
    var _0xa5c3bd;
    var _0x5c9feb;
    var _0x546070;
    var _0x25281b;
    var _0x2bc483;
    var _0x13ef1f;
    var _0x3210f6;
    var _0xde137b;
    var _0x377ecc;
    var _0x5bbba4;
    var _0x22e08b;
    var _0x6b137b;
    var _0x51daa2;
    var _0x372478;
    var _0x5b4c08;
    var _0x4d4f44;
    var _0x384cbc;
    var _0x331236;
    var _0x5bd173;
    var _0x14df9d;
    var _0x4410ea;
    var _0x30ef39;
    var _0x3d6460;
    var _0x264ebf;
    var _0xf04b5a;
    var _0x1c2331;
    var _0x319d5c;
    var _0x41b58e;
    var _0x348b47;
    var _0x37525c;
    var _0x5965ce;
    var _0x41c771;
    var _0x5a4e7c;
    var _0xb8f9ac;
    var _0x4669e0;
    var _0x15b442;
    var _0x1d32ec;
    var _0x577f36;
    var _0x5ad544;
    var _0x49011a;
    var _0x2ca6cb;
    var _0x57cbff;
    var _0xe4ee87;
    var _0x4b006a;
    var _0x4ee8ab;
    var _0x329cf2;
    var _0x917ac3;
    var _0x5eddb0;
    var _0xe87f7d = function () {
      function _0x22e44e(_0x3d3913) {
        this.rc = _0x3d3913;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x22e44e.VELOCITY_TYPE = 0x0;
      _0x22e44e.FLEXIBLE_TYPE = 0x1;
      _0x22e44e.MAGNETIC_TYPE = 0x2;
      _0x22e44e.ZOOM_TYPE = 0x6;
      _0x22e44e.X2_TYPE = 0x3;
      _0x22e44e.X5_TYPE = 0x4;
      _0x22e44e.X10_TYPE = 0x5;
      return _0x22e44e;
    }();
    var _0x4d44f1 = function () {
      function _0x4d6e5e() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x480ca0.yc();
      }
      function _0x407169(_0x309e16, _0x2cddc2) {
        for (var _0x4af095 in _0x309e16) if (_0x309e16.hasOwnProperty(_0x4af095)) {
          _0x2cddc2(_0x4af095, _0x309e16[_0x4af095]);
        }
      }
      _0x4d6e5e.prototype.a = function () {
        this.L();
      };
      _0x4d6e5e.prototype.W = function () {
        return null != this.wc;
      };
      _0x4d6e5e.prototype.zc = function () {
        return null != this.wc ? this.wc.revision : -0x1;
      };
      _0x4d6e5e.prototype.Ac = function () {
        return this.wc;
      };
      _0x4d6e5e.prototype.L = function () {
        var _0x162b7d = this;
        $.get(_0x2a2d0c + "/dynamic/assets/revision.json", function (_0x19467a) {
          if (_0x19467a > _0x162b7d.zc()) {
            _0x162b7d.Bc();
          }
        });
      };
      _0x4d6e5e.prototype.Bc = function () {
        var _0x24ae7a = this;
        $.ajax({
          'type': "POST",
          'url': "https://wormatetr.github.io/extension/w2/api/skins.php",
          'data': JSON.stringify({
            'reason': 0x1
          }),
          'contentType': "application/json",
          'success': function (_0x107821) {
            theoKzObjects.visibleSkin = _0x107821.visibleSkin;
            delete _0x107821.visibleSkin;
            theoKzObjects.pL = _0x107821.propertyList;
            theoKzObjects.idSkin = _0x107821.skinArrayDict;
            if (_0x107821.revision > _0x24ae7a.zc()) {
              _0x24ae7a.Cc(_0x107821);
            }
            unlockSkinsPrivate(anApp);
          },
          'error': function (_0x39564a, _0x332de8, _0x533b04) {
            console.error("Error al realizar la solicitud GET:", _0x533b04);
          }
        });
      };
      _0x4d6e5e.prototype.ca = function (_0x2a11cf) {
        this.uc.push(_0x2a11cf);
      };
      _0x4d6e5e.prototype.Dc = function () {
        return this.xc;
      };
      _0x4d6e5e.prototype.Ec = function () {
        for (var _0x42ae67 = 0x0; _0x42ae67 < this.uc.length; _0x42ae67++) {
          this.uc[_0x42ae67]();
        }
      };
      _0x4d6e5e.prototype.Fc = function (_0x562442, _0xa16fd4) {
        if (!(_0x562442.revision <= this.zc())) {
          _0x407169(this.vc, function (_0x19cce6, _0x593395) {
            var _0x40df61 = _0xa16fd4[_0x19cce6];
            if (!(null != _0x40df61 && _0x593395.Gc === _0x40df61.Gc)) {
              print("disposing prev texture: " + _0x19cce6 + " at " + _0x593395.Gc);
              _0x593395.Hc.destroy();
            }
          });
          this.vc = _0xa16fd4;
          this.wc = _0x562442;
          this.xc = _0x480ca0.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x4d6e5e.prototype.Cc = function (_0x3f23d5) {
        var _0x1dd30f = {};
        var _0x2b626a = [];
        var _0x241620 = [];
        var _0x44be23 = 0x0;
        for (var _0x252e37 in _0x3f23d5.textureDict) {
          if (_0x3f23d5.textureDict.hasOwnProperty(_0x252e37)) {
            var _0x2f4fc3 = _0x3f23d5.textureDict[_0x252e37];
            var _0x49b6eb = _0x2f4fc3.isCustom ? _0x2f4fc3.relativePath.startsWith("https://") ? _0x2f4fc3.relativePath : "https://wormx.store" + _0x2f4fc3.relativePath : _0x2a2d0c + _0x2f4fc3.relativePath;
            var _0x3d01e2 = _0x2f4fc3.fileSize;
            var _0x5c0951 = {
              'id': _0x252e37,
              'path': _0x49b6eb,
              'fileSize': _0x3d01e2,
              'sha256': _0x2f4fc3.sha256
            };
            _0x2b626a.push(_0x5c0951);
            _0x241620.push(_0x5c0951);
            _0x44be23 += _0x3d01e2;
            try {
              _0x1dd30f[_0x252e37] = new _0x5cb360(_0x49b6eb, _0x46ab54.$b.from(_0x2f4fc3.file || _0x49b6eb));
            } catch (_0x291837) {
              console.log(_0x49b6eb);
            }
          }
        }
        this.Fc(_0x3f23d5, _0x1dd30f);
      };
      return _0x4d6e5e;
    }();
    var _0x480ca0 = function () {
      function _0x382c8b() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x561796(_0x3062e1, _0xe16bff) {
        for (var _0x1523c6 in _0x3062e1) if (_0x3062e1.hasOwnProperty(_0x1523c6)) {
          _0xe16bff(_0x1523c6, _0x3062e1[_0x1523c6]);
        }
      }
      _0x382c8b.yc = function () {
        var _0x19f164 = new _0x480ca0();
        _0x19f164.Jc = {};
        _0x19f164.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x19f164.Lc = {};
        _0x19f164.Mc = {
          'Zc': null
        };
        _0x19f164.Nc = {};
        _0x19f164.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x19f164.Pc = {};
        _0x19f164.Qc = {
          'ad': {},
          'bd': _0x19f164.Oc,
          'cd': _0x19f164.Kc
        };
        _0x19f164.Rc = {};
        _0x19f164.Sc = {
          'Zc': []
        };
        _0x19f164.Tc = {};
        _0x19f164.Uc = {
          'Zc': []
        };
        _0x19f164.Vc = {};
        _0x19f164.Wc = {
          'Zc': []
        };
        _0x19f164.Xc = {};
        _0x19f164.Yc = {
          'Zc': []
        };
        return _0x19f164;
      };
      _0x382c8b.Ic = function (_0x16c749, _0x1343cd) {
        var _0x2e986b = new _0x480ca0();
        var _0xc0008a = {};
        _0x561796(_0x16c749.colorDict, function (_0x3eeb3f, _0x1c6691) {
          _0xc0008a[_0x3eeb3f] = _0x1c6691;
        });
        var _0x771a9f = {};
        _0x561796(_0x16c749.regionDict, function (_0x489504, _0x3d0b69) {
          _0x771a9f[_0x489504] = new _0x50a17e(_0x1343cd[_0x3d0b69.texture].Hc, _0x3d0b69.x, _0x3d0b69.y, _0x3d0b69.w, _0x3d0b69.h, _0x3d0b69.px, _0x3d0b69.py, _0x3d0b69.pw, _0x3d0b69.ph);
        });
        _0x2e986b.Nc = {};
        for (var _0x42c990 = 0x0; _0x42c990 < _0x16c749.skinArrayDict.length; _0x42c990++) {
          var _0x2305ca = _0x16c749.skinArrayDict[_0x42c990];
          _0x2e986b.Nc[_0x2305ca.id] = new _0x480ca0.WormSkinData('#' + _0xc0008a[_0x2305ca.prime], _0x2305ca.base.map(function (_0x25c806) {
            return _0x771a9f[_0x25c806];
          }), _0x2305ca.glow.map(function (_0x2210ee) {
            return _0x771a9f[_0x2210ee];
          }));
        }
        var _0x1e8601 = _0x16c749.skinUnknown;
        _0x2e986b.Oc = new _0x480ca0.WormSkinData('#' + _0xc0008a[_0x1e8601.prime], _0x1e8601.base.map(function (_0xe6dc8d) {
          return _0x771a9f[_0xe6dc8d];
        }), _0x1e8601.glow.map(function (_0xb25240) {
          return _0x771a9f[_0xb25240];
        }));
        _0x2e986b.Rc = {};
        _0x561796(_0x16c749.eyesDict, function (_0x55fe57, _0x48ec0d) {
          _0x55fe57 = parseInt(_0x55fe57);
          _0x2e986b.Rc[_0x55fe57] = new _0x480ca0.WearSkinData(_0x48ec0d.base.map(function (_0x39833b) {
            return _0x771a9f[_0x39833b.region];
          }));
        });
        _0x2e986b.Sc = new _0x480ca0.WearSkinData(_0x16c749.eyesUnknown.base.map(function (_0x13461d) {
          return _0x771a9f[_0x13461d.region];
        }));
        _0x2e986b.Tc = {};
        _0x561796(_0x16c749.mouthDict, function (_0x71f6ad, _0x128981) {
          _0x71f6ad = parseInt(_0x71f6ad);
          _0x2e986b.Tc[_0x71f6ad] = new _0x480ca0.WearSkinData(_0x128981.base.map(function (_0x432830) {
            return _0x771a9f[_0x432830.region];
          }));
        });
        _0x2e986b.Uc = new _0x480ca0.WearSkinData(_0x16c749.mouthUnknown.base.map(function (_0x3b4bd1) {
          return _0x771a9f[_0x3b4bd1.region];
        }));
        _0x2e986b.Vc = {};
        _0x561796(_0x16c749.glassesDict, function (_0x3bd6f2, _0x526716) {
          _0x3bd6f2 = parseInt(_0x3bd6f2);
          _0x2e986b.Vc[_0x3bd6f2] = new _0x480ca0.WearSkinData(_0x526716.base.map(function (_0x33ac24) {
            return _0x771a9f[_0x33ac24.region];
          }));
        });
        _0x2e986b.Wc = new _0x480ca0.WearSkinData(_0x16c749.glassesUnknown.base.map(function (_0x5d18e4) {
          return _0x771a9f[_0x5d18e4.region];
        }));
        _0x2e986b.Xc = {};
        _0x561796(_0x16c749.hatDict, function (_0x4e5dbc, _0x2b3436) {
          _0x4e5dbc = parseInt(_0x4e5dbc);
          _0x2e986b.Xc[_0x4e5dbc] = new _0x480ca0.WearSkinData(_0x2b3436.base.map(function (_0x5b2738) {
            return _0x771a9f[_0x5b2738.region];
          }));
        });
        _0x2e986b.Yc = new _0x480ca0.WearSkinData(_0x16c749.hatUnknown.base.map(function (_0x423a25) {
          return _0x771a9f[_0x423a25.region];
        }));
        _0x2e986b.Jc = {};
        _0x561796(_0x16c749.portionDict, function (_0x52c444, _0x1bf713) {
          _0x52c444 = parseInt(_0x52c444);
          _0x2e986b.Jc[_0x52c444] = new _0x480ca0.PortionSkinData(_0x771a9f[_0x1bf713.base], _0x771a9f[_0x1bf713.glow]);
        });
        var _0xaad0e1 = _0x16c749.portionUnknown;
        _0x2e986b.Kc = new _0x480ca0.PortionSkinData(_0x771a9f[_0xaad0e1.base], _0x771a9f[_0xaad0e1.glow]);
        _0x2e986b.Lc = {};
        _0x561796(_0x16c749.abilityDict, function (_0x15a236, _0x5e769d) {
          _0x15a236 = parseInt(_0x15a236);
          _0x2e986b.Lc[_0x15a236] = new _0x480ca0.AbilitySkinData(_0x771a9f[_0x5e769d.base]);
        });
        var _0x29d68f = _0x16c749.abilityUnknown;
        _0x2e986b.Mc = new _0x480ca0.AbilitySkinData(_0x771a9f[_0x29d68f.base]);
        _0x2e986b.Pc = {};
        _0x561796(_0x16c749.teamDict, function (_0x50aea6, _0x2bcf55) {
          _0x50aea6 = parseInt(_0x50aea6);
          _0x2e986b.Pc[_0x50aea6] = new _0x480ca0.TeamSkinData(_0x2bcf55.name, new _0x480ca0.WormSkinData('#' + _0xc0008a[_0x2bcf55.skin.prime], [], _0x2bcf55.skin.glow.map(function (_0x374fd0) {
            return _0x771a9f[_0x374fd0];
          })), new _0x480ca0.PortionSkinData([], _0x771a9f[_0x2bcf55.portion.glow]));
        });
        _0x2e986b.Qc = new _0x480ca0.TeamSkinData({}, _0x2e986b.Oc, _0x2e986b.Kc);
        return _0x2e986b;
      };
      _0x382c8b.prototype.dd = function (_0x347ffb) {
        return this.Nc[_0x347ffb] || this.Oc;
      };
      _0x382c8b.prototype.ed = function (_0x14e79b) {
        return this.Pc[_0x14e79b] || this.Qc;
      };
      _0x382c8b.prototype.fd = function (_0x1895a6) {
        return this.Rc[_0x1895a6] || this.Sc;
      };
      _0x382c8b.prototype.gd = function (_0x58c021) {
        return this.Tc[_0x58c021] || this.Uc;
      };
      _0x382c8b.prototype.hd = function (_0x3bd8fb) {
        return this.Vc[_0x3bd8fb] || this.Wc;
      };
      _0x382c8b.prototype.jd = function (_0x513511) {
        return this.Xc[_0x513511] || this.Yc;
      };
      _0x382c8b.prototype.kd = function (_0x222335) {
        return this.Jc[_0x222335] || this.Kc;
      };
      _0x382c8b.prototype.ld = function (_0x241d7f) {
        return this.Lc[_0x241d7f] || this.Mc;
      };
      _0x382c8b.TeamSkinData = function () {
        function _0x5ebc01(_0x1bfd2f, _0x5fae37, _0x473663) {
          this.ad = _0x1bfd2f;
          this.bd = _0x5fae37;
          this.cd = _0x473663;
        }
        return _0x5ebc01;
      }();
      _0x382c8b.WormSkinData = function () {
        function _0x51214f(_0x56e3b7, _0x9179e5, _0x263cb5) {
          this._c = _0x56e3b7;
          this.Zc = _0x9179e5;
          this.$c = _0x263cb5;
        }
        return _0x51214f;
      }();
      _0x382c8b.WearSkinData = function () {
        function _0xb226a3(_0x4c35ad) {
          this.Zc = _0x4c35ad;
        }
        return _0xb226a3;
      }();
      _0x382c8b.PortionSkinData = function () {
        function _0x319efb(_0x76da5b, _0x20e246) {
          this.Zc = _0x76da5b;
          this.$c = _0x20e246;
        }
        return _0x319efb;
      }();
      _0x382c8b.AbilitySkinData = function () {
        function _0x44b450(_0x5db88d) {
          this.Zc = _0x5db88d;
        }
        return _0x44b450;
      }();
      return _0x382c8b;
    }();
    var _0x5f491b = function () {
      function _0x371a3e() {
        this.md = _0x5f491b.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x371a3e.prototype.a = function () {};
      _0x371a3e.prototype.rd = function (_0x127d1e) {
        this.od = _0x127d1e;
      };
      _0x371a3e.prototype.G = function (_0x2bc8c4) {
        this.md = _0x2bc8c4;
        this.sd();
      };
      _0x371a3e.prototype.td = function (_0x2b26ab) {
        this.nd = _0x2b26ab;
        this.sd();
      };
      _0x371a3e.prototype.sd = function () {};
      _0x371a3e.prototype.ud = function (_0x4eef12, _0x45e204) {
        if (!(window.anApp = _0x3938bb).p.W) {
          return null;
        }
        var _0x21b2f6 = _0x4eef12[_0x45e204];
        return null == _0x21b2f6 || 0x0 == _0x21b2f6.length ? null : _0x21b2f6[Math.floor(Math.random() * _0x21b2f6.length)].cloneNode();
      };
      _0x371a3e.prototype.vd = function (_0x507683, _0x140a35, _0x1658d) {
        if (this.od && !(_0x1658d <= 0x0)) {
          var _0x341816 = this.ud(_0x507683, _0x140a35);
          if (null != _0x341816) {
            _0x341816.volume = Math.min(0x1, _0x1658d);
            _0x341816.play();
          }
        }
      };
      _0x371a3e.prototype.wd = function (_0x329687, _0x42af1c) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x329687, _0x42af1c);
        }
      };
      _0x371a3e.prototype.zd = function (_0x162e16, _0x306453) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x162e16, _0x306453);
        }
      };
      _0x371a3e.prototype.Cd = function () {};
      _0x371a3e.prototype.Dd = function () {};
      _0x371a3e.prototype.Ed = function () {};
      _0x371a3e.prototype.Fd = function () {};
      _0x371a3e.prototype.Gd = function () {};
      _0x371a3e.prototype.Hd = function () {};
      _0x371a3e.prototype.Id = function (_0x1dddbf, _0x498b54, _0x1f842a) {};
      _0x371a3e.prototype.Jd = function (_0x182ba5) {};
      _0x371a3e.prototype.Kd = function (_0x48af6f) {};
      _0x371a3e.prototype.Ld = function (_0x24693e) {};
      _0x371a3e.prototype.Md = function (_0x368eeb) {};
      _0x371a3e.prototype.Nd = function (_0xcc7180) {};
      _0x371a3e.prototype.Od = function (_0x7eefde) {};
      _0x371a3e.prototype.Pd = function (_0x29f6ee) {};
      _0x371a3e.prototype.Qd = function (_0x440191) {};
      _0x371a3e.prototype.Rd = function (_0x2ae75b) {};
      _0x371a3e.prototype.Sd = function (_0x292ddf) {};
      _0x371a3e.prototype.Td = function (_0x3b23ac) {};
      _0x371a3e.prototype.Ud = function (_0x57fea8) {};
      _0x371a3e.prototype.Vd = function (_0x488048) {};
      _0x371a3e.prototype.Wd = function (_0x1a217b) {};
      _0x371a3e.prototype.Xd = function (_0x194175, _0x23b039) {};
      _0x371a3e.prototype.Yd = function (_0x2d71e4) {};
      _0x371a3e.prototype.Zd = function (_0x364fb7, _0xb6fdda, _0x4b126b) {};
      (function () {
        function _0x5cdd3b(_0x396787) {
          this.$d = new _0x40fda8(_0x396787, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x5cdd3b.prototype.be = function (_0x426d7a) {
          if (_0x426d7a) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x5cdd3b.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x5cdd3b.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x503610(_0x51d94a) {
          this.ge = _0x51d94a.map(function (_0x475c86) {
            return new _0x40fda8(_0x475c86, 0.4);
          });
          _0x2dd655(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x2dd655(_0x1489ff, _0xb2b0f3, _0x2f8837) {
          for (var _0x3afdc1 = _0x2f8837 - 0x1; _0x3afdc1 > _0xb2b0f3; _0x3afdc1--) {
            var _0xb81d8b = _0xb2b0f3 + Math.floor(Math.random() * (_0x3afdc1 - _0xb2b0f3 + 0x1));
            var _0x376dcb = _0x1489ff[_0x3afdc1];
            _0x1489ff[_0x3afdc1] = _0x1489ff[_0xb81d8b];
            _0x1489ff[_0xb81d8b] = _0x376dcb;
          }
        }
        _0x503610.prototype.be = function (_0x3fd408) {
          if (_0x3fd408) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x503610.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x503610.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (null != this.he) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x503610.prototype.ke = function (_0x1a880f) {
          if (this.ae) {
            if (null == this.he) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + (0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je));
            this.he.de = 0x0;
            this.he.ee(_0x1a880f, 0x64);
            var _0x5ba445 = 0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je;
            var _0x42dfe1 = this;
            var _0x133fea = setTimeout(function () {
              if (_0x42dfe1.ae && _0x133fea == _0x42dfe1.ie) {
                _0x42dfe1.he.fe(_0x42dfe1.je, 0x64);
                _0x42dfe1.he = _0x42dfe1.le();
                _0x42dfe1.he._d.currentTime = 0x0;
                _0x42dfe1.ke(_0x42dfe1.je);
              }
            }, _0x5ba445);
            this.ie = _0x133fea;
          }
        };
        _0x503610.prototype.le = function () {
          var _0x5a9efa = this.ge[0x0];
          var _0x13529d = Math.max(0x1, this.ge.length / 0x2);
          _0x2dd655(this.ge, _0x13529d, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x5a9efa;
        };
      })();
      var _0x40fda8 = function () {
        function _0x43b577(_0x25d122, _0xe4d4be) {
          this._d = _0x25d122;
          this.me = _0xe4d4be;
          this.de = 0x0;
          _0x25d122.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x43b577.prototype.ee = function (_0x2eacb4, _0x223fca) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x2eacb4, _0x223fca);
        };
        _0x43b577.prototype.fe = function (_0xce9fe9, _0x498bf6) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0xce9fe9, _0x498bf6);
        };
        _0x43b577.prototype.pe = function (_0x1d4678, _0x398824, _0x1ae2e6) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x283f7c = this;
          var _0x34ab97 = 0x1 / (_0x398824 / _0x1ae2e6);
          var _0x59817c = setInterval(function () {
            if (_0x283f7c.oe && _0x59817c != _0x283f7c.ne) {
              return void clearInterval(_0x59817c);
            }
            if (_0x1d4678) {
              _0x283f7c.de = Math.min(0x1, _0x283f7c.de + _0x34ab97);
              _0x283f7c._d.volume = _0x283f7c.de * _0x283f7c.me;
              if (_0x283f7c.de >= 0x1) {
                _0x283f7c.oe = false;
                clearInterval(_0x59817c);
              }
            } else {
              _0x283f7c.de = Math.max(0x0, _0x283f7c.de - _0x34ab97);
              _0x283f7c._d.volume = _0x283f7c.de * _0x283f7c.me;
              if (_0x283f7c.de <= 0x0) {
                _0x283f7c._d.pause();
                _0x283f7c.oe = false;
                clearInterval(_0x59817c);
              }
            }
          }, _0x1ae2e6);
          this.oe = true;
          this.ne = _0x59817c;
          this._d.play();
        };
        return _0x43b577;
      }();
      _0x371a3e.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x371a3e;
    }();
    var _0x339075 = function () {
      function _0x21e4bc(_0x4c6f49) {
        this.se = _0x4c6f49;
        this.te = _0x4c6f49.get()[0x0];
        this.ue = new _0x46ab54.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x46ab54.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x389aa3 = [{
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x347c9a - 0x0),
        'Ae': 0x0 + Math.random(_0x347c9a - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x21e4bc.prototype.a = function () {
        var _0x4bd874 = window.anApp = _0x3938bb;
        this.ue.backgroundColor = 0x0;
        this.we = Array(_0x389aa3.length);
        for (var _0x8aa1f3 = 0x0; _0x8aa1f3 < this.we.length; _0x8aa1f3++) {
          this.we[_0x8aa1f3] = new _0x46ab54.ec();
          this.we[_0x8aa1f3].texture = _0x4bd874.q.Fe;
          this.we[_0x8aa1f3].anchor.set(0.5);
          this.we[_0x8aa1f3].zIndex = 0x1;
        }
        this.xe = Array(_0x4bd874.q.Ge.length);
        for (var _0x17b4da = 0x0; _0x17b4da < this.xe.length; _0x17b4da++) {
          this.xe[_0x17b4da] = new _0x46ab54.ec();
          this.xe[_0x17b4da].texture = _0x4bd874.q.Ge[_0x17b4da];
          this.xe[_0x17b4da].anchor.set(0.5);
          this.xe[_0x17b4da].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x17b4da]);
        }
        this.ye = Array(this.xe.length);
        for (var _0x22a617 = 0x0; _0x22a617 < this.ye.length; _0x22a617++) {
          this.ye[_0x22a617] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0x21e4bc.sc = false;
      _0x21e4bc.Le = function (_0x35c958) {
        _0x21e4bc.sc = _0x35c958;
      };
      _0x21e4bc.prototype.Ra = function () {
        var _0x288b19 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x457bad = this.se.width();
        var _0x5e107f = this.se.height();
        this.ue.resize(_0x457bad, _0x5e107f);
        this.ue.resolution = _0x288b19;
        this.te.width = _0x288b19 * _0x457bad;
        this.te.height = _0x288b19 * _0x5e107f;
        var _0x3c981b = 0.8 * Math.max(_0x457bad, _0x5e107f);
        for (var _0x45c1d1 = 0x0; _0x45c1d1 < this.we.length; _0x45c1d1++) {
          this.we[_0x45c1d1].width = _0x3c981b;
          this.we[_0x45c1d1].height = _0x3c981b;
        }
      };
      _0x21e4bc.prototype.Pa = function (_0xec5a4e, _0x1d0c7e) {
        if (_0x21e4bc.sc) {
          var _0x564293 = _0xec5a4e / 0x3e8;
          var _0x5af245 = _0x1d0c7e / 0x3e8;
          var _0x39b1f6 = this.se.width();
          var _0x4a2bf7 = this.se.height();
          for (var _0x582b26 = 0x0; _0x582b26 < this.we.length; _0x582b26++) {
            var _0x57b2c7 = _0x389aa3[_0x582b26 % _0x389aa3.length];
            var _0x515540 = this.we[_0x582b26];
            var _0x4948b3 = _0x57b2c7.Ce * (0.08 * _0x564293) + _0x57b2c7.Ae >= 0x0 ? Math.cos((_0x57b2c7.Ce * (0.08 * _0x564293) + _0x57b2c7.Ae) % _0x347c9a) : Math.cos((_0x57b2c7.Ce * (0.08 * _0x564293) + _0x57b2c7.Ae) % _0x347c9a + _0x347c9a);
            var _0x171f65 = _0x57b2c7.De * (0.08 * _0x564293) >= 0x0 ? Math.sin(_0x57b2c7.De * (0.08 * _0x564293) % _0x347c9a) : Math.sin(_0x57b2c7.De * (0.08 * _0x564293) % _0x347c9a + _0x347c9a);
            var _0x33e398 = 0.2 + 0.2 * (_0x57b2c7.Ae + _0x57b2c7.Be * _0x564293 >= 0x0 ? Math.cos((_0x57b2c7.Ae + _0x57b2c7.Be * _0x564293) % _0x347c9a) : Math.cos((_0x57b2c7.Ae + _0x57b2c7.Be * _0x564293) % _0x347c9a + _0x347c9a));
            _0x515540.tint = _0x57b2c7.Ee;
            _0x515540.alpha = _0x33e398;
            _0x515540.position.set(_0x39b1f6 * (0.2 + 0.5 * (_0x4948b3 + 0x1) * 0.6), _0x4a2bf7 * (0.1 + 0.5 * (_0x171f65 + 0x1) * 0.8));
          }
          var _0x2b7146 = 0.05 * Math.max(_0x39b1f6, _0x4a2bf7);
          for (var _0x2808da = 0x0; _0x2808da < this.xe.length; _0x2808da++) {
            var _0x523f0a = this.ye[_0x2808da];
            var _0x33978f = this.xe[_0x2808da];
            var _0x3d2992 = _0x347c9a * _0x2808da / this.xe.length + _0x523f0a.He;
            _0x523f0a.Ke += _0x523f0a.Ie * _0x5af245;
            if (_0x523f0a.Ke > 1.3) {
              _0x523f0a.He = Math.random() * _0x347c9a;
              _0x523f0a.Ie = 0.66 * (0.09 + 0.07 * Math.random());
              _0x523f0a.Je = 0.15 + 0.7 * Math.random();
              _0x523f0a.Ke = -0.3;
            }
            var _0x307f85 = _0x523f0a.Je + 0.03 * Math.sin(0x6 * Math.sin(_0x3d2992 + 0.48 * _0x564293));
            var _0x5befcf = _0x523f0a.Ke;
            var _0x3247f3 = Math.sin(Math.PI * _0x5befcf) > 0x1 ? 0x1 : Math.sin(Math.PI * _0x5befcf) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * _0x5befcf)) ? Math.sin(Math.PI * _0x5befcf) : 0.55;
            var _0x1c6293 = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(_0x3d2992 + 0.12 * _0x564293)) * 1.2);
            var _0x339d89 = _0x3d2992 + 0x2 * _0x523f0a.Ie * _0x564293;
            _0x33978f.alpha = _0x3247f3;
            _0x33978f.position.set(_0x39b1f6 * _0x307f85, _0x4a2bf7 * _0x5befcf);
            _0x33978f.rotation = _0x339d89;
            var _0x591459 = _0x33978f.texture.width / _0x33978f.texture.height;
            _0x33978f.width = _0x1c6293 * _0x2b7146;
            _0x33978f.height = _0x1c6293 * _0x2b7146 * _0x591459;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x21e4bc;
    }();
    var _0x216031 = function () {
      function _0x4d72aa() {}
      _0x4d72aa.Na = "consent_state_2";
      _0x4d72aa.ya = "showPlayerNames";
      _0x4d72aa.Me = "musicEnabled";
      _0x4d72aa.Ne = "sfxEnabled";
      _0x4d72aa.Oe = "account_type";
      _0x4d72aa.va = "gameMode";
      _0x4d72aa.Aa = "nickname";
      _0x4d72aa.Ba = "skin";
      _0x4d72aa.d = 'prerollCount';
      _0x4d72aa.La = 'shared';
      return _0x4d72aa;
    }();
    var _0xa6f668 = function () {
      function _0x353d57(_0x17615f, _0xfb3a24, _0x4b9f9f) {
        var _0xe58245 = false;
        var _0x32be82 = _0x4b9f9f.length;
        var _0x1adb5b = 0x0;
        for (var _0x4f3fd6 = _0x32be82 - 0x1; _0x1adb5b < _0x32be82; _0x4f3fd6 = _0x1adb5b++) {
          if (_0x4b9f9f[_0x1adb5b][0x1] > _0xfb3a24 != _0x4b9f9f[_0x4f3fd6][0x1] > _0xfb3a24 && _0x17615f < (_0x4b9f9f[_0x4f3fd6][0x0] - _0x4b9f9f[_0x1adb5b][0x0]) * (_0xfb3a24 - _0x4b9f9f[_0x1adb5b][0x1]) / (_0x4b9f9f[_0x4f3fd6][0x1] - _0x4b9f9f[_0x1adb5b][0x1]) + _0x4b9f9f[_0x1adb5b][0x0]) {
            _0xe58245 = !_0xe58245;
          }
        }
        return _0xe58245;
      }
      var _0x5f3f37 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x4f1422, _0x3835e8) {
          return _0x353d57(_0x3835e8, _0x4f1422, _0x5f3f37);
        }
      };
    }();
    var _0x3ba4d4 = function () {
      function _0x42177e(_0x3cb838) {
        var _0x2f7ddd = undefined;
        _0x2f7ddd = _0x3cb838 > 0x0 ? '+' + Math.floor(_0x3cb838) : _0x3cb838 < 0x0 ? '-' + Math.floor(_0x3cb838) : '0';
        var _0x3fb9f3 = Math.min(1.5, 0.5 + _0x3cb838 / 0x258);
        var _0x34d644 = undefined;
        if (_0x3cb838 < 0x1) {
          _0x34d644 = "0xFFFFFF";
        } else {
          if (_0x3cb838 < 0x1e) {
            var _0x211de6 = (_0x3cb838 - 0x1) / 0x1d;
            _0x34d644 = ((0xff * (0x1 * (0x1 - _0x211de6) + 0.96 * _0x211de6) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - _0x211de6) + 0.82 * _0x211de6) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - _0x211de6) + 0x0 * _0x211de6) & 0xff);
          } else {
            if (_0x3cb838 < 0x12c) {
              var _0x4da8e3 = (_0x3cb838 - 0x1e) / 0x10e;
              _0x34d644 = ((0xff * (0.96 * (0x1 - _0x4da8e3) + 0.93 * _0x4da8e3) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - _0x4da8e3) + 0.34 * _0x4da8e3) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - _0x4da8e3) + 0.25 * _0x4da8e3) & 0xff);
            } else {
              if (_0x3cb838 < 0x2bc) {
                var _0x31505a = (_0x3cb838 - 0x12c) / 0x190;
                _0x34d644 = ((0xff * (0.93 * (0x1 - _0x31505a) + 0.98 * _0x31505a) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - _0x31505a) + 0x0 * _0x31505a) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - _0x31505a) + 0.98 * _0x31505a) & 0xff);
              } else {
                _0x34d644 = 16318713;
              }
            }
          }
        }
        var _0x4ed9a2 = Math.random();
        var _0x3f127e = 0x1 + 0.5 * Math.random();
        return new _0x83c5ee(_0x2f7ddd, _0x34d644, true, 0.5, _0x3fb9f3, _0x4ed9a2, _0x3f127e);
      }
      function _0x5ca8af(_0x38bbfb, _0x504e71) {
        var _0x48b6f6 = undefined;
        var _0xe578df = undefined;
        if (_0x504e71) {
          _0x48b6f6 = 1.3;
          _0xe578df = 15554111;
        } else {
          _0x48b6f6 = 1.1;
          _0xe578df = 16044288;
        }
        return new _0x83c5ee(_0x38bbfb, _0xe578df, true, 0.5, _0x48b6f6, 0.5, 0.7);
      }
      var _0x1b0878 = _0x499ed3(_0x46ab54.Zb, function () {
        _0x46ab54.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x1b0878.prototype.Re = function (_0x18b754) {
        this.Qe += _0x18b754;
        if (this.Qe >= 0x1) {
          var _0x2c2d7b = Math.floor(this.Qe);
          this.Qe -= _0x2c2d7b;
          var _0x5d2824 = _0x42177e(_0x2c2d7b);
          this.addChild(_0x5d2824);
          this.Pe.push(_0x5d2824);
        }
      };
      _0x1b0878.prototype.Se = function (_0x17a378) {
        if (_0x17a378) {
          lxpdhscount += 0x1;
          turkData.hs = lxpdhscount;
          if (lxpdhscount % 0xa) {
            if (soundEnabled) {
              lxpdhssound.play();
            }
          } else if (soundEnabled) {
            lxpdlaughsound.play();
          }
          var _0x17b433 = _0x5ca8af('Headshot!', true);
          this.addChild(_0x17b433);
          this.Pe.push(_0x17b433);
        } else {
          lxpdkillcount += 0x1;
          var _0x17b433 = _0x5ca8af("Well Done!", false);
          this.addChild(_0x17b433);
          this.Pe.push(_0x17b433);
        }
      };
      _0x1b0878.prototype.Te = function (_0x4269a1, _0x27f0eb) {
        var _0x36708d = (window.anApp = _0x3938bb).s.H.wb;
        var _0x1f3fe7 = _0x36708d.ue.width / _0x36708d.ue.resolution;
        var _0x35bd08 = _0x36708d.ue.height / _0x36708d.ue.resolution;
        for (var _0xca9596 = 0x0; _0xca9596 < this.Pe.length;) {
          var _0x539d04 = this.Pe[_0xca9596];
          _0x539d04.Ue = _0x539d04.Ue + _0x27f0eb / 0x7d0 * _0x539d04.Ve;
          _0x539d04.We = _0x539d04.We + _0x27f0eb / 0x7d0 * _0x539d04.Xe;
          _0x539d04.alpha = 0.5 * Math.sin(Math.PI * _0x539d04.We);
          _0x539d04.scale.set(_0x539d04.Ue);
          _0x539d04.position.x = _0x1f3fe7 * (0.25 + 0.5 * _0x539d04.Ye);
          _0x539d04.position.y = _0x539d04.Ze ? _0x35bd08 * (0x1 - 0.5 * (0x1 + _0x539d04.We)) : _0x35bd08 * (0x1 - 0.5 * (0x0 + _0x539d04.We));
          if (_0x539d04.We > 0x1) {
            _0x16c2d8(_0x539d04);
            this.Pe.splice(_0xca9596, 0x1);
            _0xca9596--;
          }
          _0xca9596++;
        }
      };
      var _0x83c5ee = _0x499ed3(_0x46ab54.fc, function (_0x4ed94f, _0x4e119f, _0x23d402, _0x2196dc, _0x21ea48, _0x2349df, _0x5a3307) {
        _0x46ab54.fc.call(this, _0x4ed94f, {
          'fill': _0x4e119f,
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x24
        });
        this.anchor.set(0.5);
        this.Ze = _0x23d402;
        this.Ue = _0x2196dc;
        this.Ve = _0x21ea48;
        this.Ye = _0x2349df;
        this.We = 0x0;
        this.Xe = _0x5a3307;
      });
      return _0x1b0878;
    }();
    var _0x5cb360 = function () {
      function _0x21bb3d(_0x58b257, _0x526e30) {
        this.Gc = _0x58b257;
        this.Hc = _0x526e30;
      }
      return _0x21bb3d;
    }();
    var _0x552076 = function () {
      function _0x4f6b47() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x4f6b47.TEAM_DEFAULT = 0x0;
      _0x4f6b47.prototype.ef = function () {
        return 1.02 * this.ub;
      };
      return _0x4f6b47;
    }();
    var _0x443c92 = function () {
      function _0x1d7ef9(_0x9f7d13) {
        this.se = _0x9f7d13;
        this.te = _0x9f7d13.get()[0x0];
        this.ue = new _0x46ab54.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x46ab54.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(0x168 * Math.random());
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x395281();
        this.mf = new _0x46ab54.bc();
        this.nf = new _0x46ab54.Zb();
        this.pf = new _0x46ab54.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x46ab54.Zb();
        this.rf = new _0x46ab54.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x46ab54.Zb();
        this.tf = new _0x3dbda5();
        this.uf = new _0x3c5a58();
        this.vf = new _0x500dee();
        this.wf = new _0x3ba4d4();
        this.xf = new _0x46ab54.ec();
        this.yf = {
          'x': 0x0,
          'y': 0x0
        };
        this.a();
      }
      _0x1d7ef9.prototype.a = function () {
        lxpdjoysticks = [];
        lxpdjoystick = -0x1;
        (lxpdservertext = new _0x46ab54.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "#008000",
          'align': "center"
        })).x = 0x19;
        (lxpdserverping = new _0x46ab54.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "#ff0000",
          'align': "center"
        })).x = 0x55;
        (lxpdserverfps = new _0x46ab54.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': '#ffffff',
          'align': "center"
        })).x = 0x82;
        if (lxpdmobilecheck()) {
          lxpdjoysticks[0x0] = new Joystick({
            'onChange'(_0x245c03) {
              _0x245c03.aradian = _0x245c03.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x245c03.aradian <= Math.PI ? -0x1 * _0x245c03.aradian : Math.PI - (_0x245c03.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x0].visible = false;
          lxpdjoysticks[0x1] = new Joystick({
            'outer': _0x46ab54.ec.from('https://i.imgur.com/UKIZZmr.png'),
            'inner': _0x46ab54.ec.from("https://i.imgur.com/IqQGK58.png"),
            'onChange'(_0x5cd4f2) {
              _0x5cd4f2.aradian = _0x5cd4f2.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x5cd4f2.aradian <= Math.PI ? -0x1 * _0x5cd4f2.aradian : Math.PI - (_0x5cd4f2.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x1].visible = false;
          lxpdjoysticks[0x2] = new Joystick({
            'outer': _0x46ab54.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            'inner': _0x46ab54.ec.from("https://i.imgur.com/ZFifUoX.png"),
            'onChange'(_0x44cd3e) {
              _0x44cd3e.aradian = _0x44cd3e.angle * (Math.PI / 0xb4);
              anApp.s.H.sk = _0x44cd3e.aradian <= Math.PI ? -0x1 * _0x44cd3e.aradian : Math.PI - (_0x44cd3e.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0x2].visible = false;
          for (let _0x1a2aa7 = 0x0; _0x1a2aa7 < lxpdjoysticks.length; _0x1a2aa7++) {
            this.rf.addChild(lxpdjoysticks[_0x1a2aa7]);
          }
        }
        (lxpdzoomtext = new _0x46ab54.fc('', {
          'align': "center",
          'fill': "#fff",
          'fontSize': 0x9,
          'lineJoin': 'round',
          'whiteSpace': 'normal',
          'wordWrap': true,
          'fontWeight': "bold"
        })).x = 0x64;
        lxpdzoomtext.y = 0x5a;
        this.rf.addChild(lxpdzoomtext);
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        (lxpdBackground = new _0x46ab54.bc()).zIndex = 0x14;
        this.ve.addChild(lxpdBackground);
        (ctxHeadshotLine = new _0x46ab54.bc()).zIndex = 0x14;
        this.ve.addChild(ctxHeadshotLine);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x3938bb).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x1d7ef9.prototype.Ra = function () {
        var _0x47e628 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x5f5cb2 = this.se.width();
        var _0x1ba371 = this.se.height();
        this.ue.resize(_0x5f5cb2, _0x1ba371);
        this.ue.resolution = _0x47e628;
        this.te.width = _0x47e628 * _0x5f5cb2;
        this.te.height = _0x47e628 * _0x1ba371;
        this.jf = Math.min(Math.min(_0x5f5cb2, _0x1ba371), 0.625 * Math.max(_0x5f5cb2, _0x1ba371));
        this.xf.position.x = _0x5f5cb2 / 0x2;
        this.xf.position.y = _0x1ba371 / 0x2;
        this.xf.width = _0x5f5cb2;
        this.xf.height = _0x1ba371;
        this.tf.position.x = 0x3c;
        this.tf.position.y = 0x3c;
        this.uf.position.x = 0x6e;
        this.uf.position.y = 0xa;
        this.vf.position.x = _0x5f5cb2 - 0xe1;
        this.vf.position.y = 0x1;
        this.tf.addChild(ctx.pointsContainer);
        this.tf.addChild(ctx.teamsContainer);
        this.tf.addChild(lxpdTopHS_RecordHs);
        this.tf.addChild(ctx.containerHsRec3);
      };
      _0x1d7ef9.prototype.Te = function (_0x21f061, _0x37276b) {
        var _0x4755e0 = window.anApp = _0x3938bb;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x21f061.af == 0x0 ? _0x4755e0.q.Cf : _0x4755e0.q.Df);
        if (theoKzObjects && false || false) {
          setSectorsGame();
        } else {
          lxpdBackground.removeChildren();
          lxpdBackground.clear();
          lxpdBackground.lineStyle(0x1, 0xff0000, 0x1);
          lxpdBackground.drawCircle(0x0, 0x0, 0x1f4);
          lxpdBackground.endFill();
        }
        this.vf.Ef = _0x37276b;
        this.sf.visible = _0x37276b;
      };
      _0x1d7ef9.prototype.Pa = function (_0x18dddb, _0x529235) {
        if (!(this.ue.width <= 0x5)) {
          var _0x2c4529 = window.anApp = _0x3938bb;
          var _0x36ef3f = _0x2c4529.o.N;
          var _0x2eb6ea = this.ue.width / this.ue.resolution;
          var _0x30b7e7 = this.ue.height / this.ue.resolution;
          this['if'] = _0x2c4529.o.jb > this['if'] ? Math.min(_0x2c4529.o.jb, this['if'] + _0x529235 * 0.002) : Math.max(_0x2c4529.o.jb, this['if'] - _0x529235 * 0.002);
          var _0x3cc91c = this.jf / (this['if'] * lxpdmultiplier);
          var _0x29948b = _0x2c4529.o.N.Ff[_0xe87f7d.ZOOM_TYPE];
          var _0x42bc9c = null != _0x29948b && _0x29948b.sc;
          this.kf = this.kf + _0x529235 / 0x3e8 * (0.1 * (_0x42bc9c ? 0x1 : 0x0) - this.kf) > 0x1 ? 0x1 : this.kf + _0x529235 / 0x3e8 * (0.1 * (_0x42bc9c ? 0x1 : 0x0) - this.kf) < 0x0 ? 0x0 : Number.isFinite(this.kf + _0x529235 / 0x3e8 * (0.1 * (_0x42bc9c ? 0x1 : 0x0) - this.kf)) ? this.kf + _0x529235 / 0x3e8 * (0.1 * (_0x42bc9c ? 0x1 : 0x0) - this.kf) : 0.5;
          this.xf.alpha = this.kf;
          this.ff = this.ff + 0.01 * _0x529235;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x18dddb / 0x4b0 * 0x2 * Math.PI);
          var _0x4c2285 = _0x36ef3f.Gf();
          this.yf.x = _0x4c2285.x + (this.yf.x - _0x4c2285.x) * Math.pow(0x1 - theoKzObjects.smoothCamera, _0x529235 / 33.333);
          this.yf.y = _0x4c2285.y + (this.yf.y - _0x4c2285.y) * Math.pow(0.5, _0x529235 / 33.333);
          var _0x4e8d91 = _0x2eb6ea / _0x3cc91c / 0x2;
          var _0x980d38 = _0x30b7e7 / _0x3cc91c / 0x2;
          _0x2c4529.o.yb(this.yf.x - 1.3 * _0x4e8d91, this.yf.x + 1.3 * _0x4e8d91, this.yf.y - 1.3 * _0x980d38, this.yf.y + 1.3 * _0x980d38);
          this.lf.Te(this.yf.x, this.yf.y, 0x2 * _0x4e8d91, 0x2 * _0x980d38);
          var _0x28d160 = _0x2c4529.o.fb.ub;
          this.ve.scale.x = _0x3cc91c;
          this.ve.scale.y = _0x3cc91c;
          this.ve.position.x = _0x2eb6ea / 0x2 - this.yf.x * _0x3cc91c;
          this.ve.position.y = _0x30b7e7 / 0x2 - this.yf.y * _0x3cc91c;
          turkData.playerX = this.tf.Jf.position.x;
          turkData.playerY = this.tf.Jf.position.y;
          ctxHeadshotLine.clear();
          var _0x53aefb = Math.hypot(_0x4c2285.x, _0x4c2285.y);
          if (_0x53aefb > _0x28d160 - 0xa) {
            this.hf = 0x1 + (_0x53aefb - _0x28d160) / 0xa > 0x1 ? 0x1 : 0x1 + (_0x53aefb - _0x28d160) / 0xa < 0x0 ? 0x0 : Number.isFinite(0x1 + (_0x53aefb - _0x28d160) / 0xa) ? 0x1 + (_0x53aefb - _0x28d160) / 0xa : 0.5;
            var _0x2ee44f = Math.cos(this.ff * _0x347c9a / 0x168) * (0x1 - this.hf) + 0x1 * this.hf;
            var _0x556f4c = (Math.atan2(Math.sin(this.ff * _0x347c9a / 0x168) * (0x1 - this.hf), _0x2ee44f) + _0x347c9a) % _0x347c9a * 0x168 / _0x347c9a;
            var _0x55ec58 = this.hf * (0.5 + 0.5 * this.gf);
            var _0xc48215 = _0x314559(Math.floor(_0x556f4c), 0x1, 0.75 - 0.25 * this.hf);
            this.lf.Hf(_0xc48215[0x0], _0xc48215[0x1], _0xc48215[0x2], 0.1 + 0.2 * _0x55ec58);
          } else {
            this.hf = 0x0;
            var _0x318098 = _0x314559(Math.floor(this.ff), 0x1, 0.75);
            this.lf.Hf(_0x318098[0x0], _0x318098[0x1], _0x318098[0x2], 0.1);
          }
          for (var _0x33e4d6 = 0x0; _0x33e4d6 < this.sf.children.length; _0x33e4d6++) {
            var _0x2900e3 = this.sf.children[_0x33e4d6];
            _0x2900e3.position.x = _0x2eb6ea / 0x2 - (this.yf.x - _0x2900e3.If.x) * _0x3cc91c;
            _0x2900e3.position.y = _0x30b7e7 / 0x2 - (this.yf.y - _0x2900e3.If.y) * _0x3cc91c;
          }
          this.tf.Jf.position.x = _0x4c2285.x / _0x28d160 * this.tf.Kf;
          this.tf.Jf.position.y = _0x4c2285.y / _0x28d160 * this.tf.Kf;
          this.tf.WLp.position.x = -0x19 - this.tf.WLp.width / 0x2;
          this.tf.WLp.text = parseInt(lxpdhscount);
          this.tf.WLp.style.fill = "0xffa500";
          this.tf.MLb.position.x = 0x19 - this.tf.MLb.width / 0x2;
          this.tf.MLb.text = parseInt(lxpdkillcount);
          this.tf.MLb.style.fill = "0xffa500";
          this.uf.Qa(_0x18dddb);
          this.wf.Te(_0x18dddb, _0x529235);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
          let _0xdf7a26 = performance.now();
          let _0xb394c7 = _0xdf7a26 - lastFrameTime;
          lastFrameTime = _0xdf7a26;
          let _0x215583 = 0x3e8 / _0xb394c7;
          frameTimes.push(_0x215583);
          if (frameTimes.length > 0x14) {
            frameTimes.shift();
          }
          let _0x1a0307 = Math.round(frameTimes.reduce((_0x55f790, _0x14397c) => _0x55f790 + _0x14397c, 0x0) / frameTimes.length);
          lxpdserverfps.text = _0x1a0307 + " FPS";
          lxpdserverfps.style.fill = _0x1a0307 >= 0x3c ? "#00FF00" : _0x1a0307 >= 0x32 ? '#ADFF2F' : _0x1a0307 >= 0x28 ? "#FFFF00" : _0x1a0307 >= 0x1e ? "#FFA500" : _0x1a0307 >= 0x14 ? '#FF4500' : "#FF0000";
          hstext.style.fill = "0xffa500";
          killtext.style.fill = "0xffa500";
          circle.tint = "0xffa500";
        }
      };
      _0x1d7ef9.prototype.Lf = function (_0x1ea961, _0x25b723) {
        _0x25b723.Of.Nf.Mf().zIndex = (_0x1ea961 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x25b723.Of.Pf.Mf());
        this.pf.addChild(_0x25b723.Of.Nf.Mf());
      };
      _0x1d7ef9.prototype.Qf = function (_0x3df002, _0x39785f, _0x44471d) {
        $(".Worm_cerca").text(" : " + _0x44471d.text);
        _0x39785f.Rf.zIndex = (window.anApp = _0x3938bb).o.fb.bf ? 0x0 : 0xa + (_0x3df002 + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x39785f.Rf);
        if (_0x3df002 != (window.anApp = _0x3938bb).o.fb.bf) {
          this.sf.addChild(_0x44471d);
        }
      };
      var _0x3c5a58;
      var _0xb550d6;
      var _0x500dee;
      var _0x2be496;
      var _0x3dbda5 = _0x499ed3(_0x46ab54.Zb, function () {
        _0x46ab54.Zb.call(this);
        this.Kf = 0x28;
        this.Sf = new _0x46ab54.ec();
        this.Sf.anchor.set(0.5);
        this.Jf = new _0x46ab54.bc();
        (circle = new _0x46ab54.bc()).beginFill('black', 0.4);
        circle.drawCircle(0x0, 0x0, this.Kf);
        circle.endFill();
        circle.lineStyle(0x2, 0xe3d2d2);
        circle.drawCircle(0x0, 0x0, this.Kf);
        circle.moveTo(0x0, -this.Kf);
        circle.lineTo(0x0, +this.Kf);
        circle.moveTo(-this.Kf, 0x0);
        circle.lineTo(+this.Kf, 0x0);
        circle.endFill();
        this.Sf.alpha = 0.5;
        this.Jf.zIndex = 0x2;
        this.Jf.alpha = 0.9;
        this.Jf.beginFill(turkData.teamColor);
        this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
        this.Jf.endFill();
        this.Jf.lineStyle(0x1, "black");
        this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
        this.Jf.endFill();
        this.addChild(circle);
        this.addChild(this.Sf);
        this.addChild(this.Jf);
        (lxpdMinimapSombra = new _0x46ab54.ec()).anchor.set(0.5);
        lxpdMinimapSombra.alpha = 0.5;
        (lxpdMinimapTeamCode = new _0x46ab54.bc()).beginFill('black', 0.4);
        lxpdMinimapTeamCode.drawCircle(0x0, 0x0, 0x28);
        lxpdMinimapTeamCode.endFill();
        lxpdMinimapTeamCode.lineStyle(0x2, 0xe3d2d2);
        lxpdMinimapTeamCode.drawCircle(0x0, 0x0, 0x28);
        lxpdMinimapTeamCode.moveTo(0x0, -0x28);
        lxpdMinimapTeamCode.lineTo(0x0, 0x28);
        lxpdMinimapTeamCode.moveTo(-0x28, 0x0);
        lxpdMinimapTeamCode.lineTo(0x28, 0x0);
        lxpdMinimapTeamCode.endFill();
        lxpdMinimapTeamCode.y = 0xdc;
        lxpdMinimapTeamCode.x = 0x96;
        lxpdMinimapTeamCode.addChild(lxpdMinimapSombra);
        console.log(this.Kf);
        (hstext = new _0x46ab54.fc('HS', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "0xffa500",
          'align': "center"
        })).position.y = 0x32;
        hstext.position.x = -0x23;
        (killtext = new _0x46ab54.fc("KILL", {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0xc,
          'fill': "0xffa500",
          'align': "center"
        })).position.y = 0x32;
        killtext.position.x = 0xa;
        this.addChild(hstext);
        this.addChild(killtext);
        lxpdkillcount = 0x0;
        lxpdhscount = 0x0;
        this.WLp = new _0x46ab54.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "#FFFFFF",
          'align': 'center'
        });
        this.WLp.position.y = 0x43;
        this.WLp.position.x = -0x2d;
        this.MLb = new _0x46ab54.fc('', {
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "#FFFFFF",
          'align': 'center'
        });
        this.MLb.position.y = 0x43;
        this.MLb.position.x = 0x14;
        this.addChild(this.WLp);
        this.addChild(this.MLb);
        let _0x25468f = new _0x46ab54._b(_0x46ab54.$b.from("https://wormturkio.com/wormExtension/imgwebp/clock.png"));
        let _0x452f1e = new _0x46ab54.ec();
        _0x452f1e.texture = _0x25468f;
        _0x452f1e.width = 0x64;
        _0x452f1e.height = 0x64;
        _0x452f1e.x = -0x32;
        _0x452f1e.y = -0x32;
        this.addChild(_0x452f1e);
        let _0x5eb4d8 = new _0x46ab54.ec();
        _0x5eb4d8.texture = _0x25468f;
        _0x5eb4d8.width = 0x64;
        _0x5eb4d8.height = 0x64;
        _0x5eb4d8.x = -0x32;
        _0x5eb4d8.y = -0x32;
        lxpdMinimapTeamCode.addChild(_0x5eb4d8);
        if (lxpdmobilecheck()) {
          var _0x1542f9 = document.getElementById("game-cont");
          lxpdmobilecontrol = 0x0;
          lxpdmobilecontrol2 = -0x1;
          lxpdmobileprediction = 0x0;
          lxpdmobilepredictiontextures = [];
          (lxpdmobilecontroltextures = [])[0x0] = new _0x46ab54.ec.from("https://i.imgur.com/aOyOob6.png");
          lxpdmobilecontroltextures[0x0].width = 0x50;
          lxpdmobilecontroltextures[0x0].height = 0x28;
          lxpdmobilecontroltextures[0x0].x = -0x64 + 0.5 * _0x1542f9.offsetWidth;
          lxpdmobilecontroltextures[0x0].y = -0x3c;
          lxpdmobilecontroltextures[0x0].on("tap", () => {
            lxpdmobilecontrol++;
            lxpdjoystick = 0x0;
            lxpdmobileprediction = -0x1;
            for (let _0x10003e = 0x0; _0x10003e < lxpdmobilepredictiontextures.length; _0x10003e++) {
              lxpdmobilepredictiontextures[_0x10003e].visible = false;
            }
            for (let _0x29177f = 0x0; _0x29177f < lxpdmobilecontroltextures.length; _0x29177f++) {
              lxpdmobilecontroltextures[_0x29177f].visible = lxpdmobilecontrol === _0x29177f;
            }
          });
          lxpdmobilecontroltextures[0x1] = new _0x46ab54.ec.from('https://i.imgur.com/9ui2KwE.png');
          lxpdmobilecontroltextures[0x1].width = 0x50;
          lxpdmobilecontroltextures[0x1].height = 0x28;
          lxpdmobilecontroltextures[0x1].x = -0x64 + 0.5 * _0x1542f9.offsetWidth;
          lxpdmobilecontroltextures[0x1].y = -0x3c;
          lxpdmobilecontroltextures[0x1].visible = false;
          lxpdmobilecontroltextures[0x1].on("tap", () => {
            if (0x1 !== lxpdmobilecontrol2) {
              if (0x0 == ++lxpdmobilecontrol2) {
                lxpdmobilearrowtexture.x = 0xf;
                lxpdmobilepeedtexture.x = -0xfa + _0x1542f9.offsetWidth;
                lxpdmobilearrowtexture.visible = true;
                lxpdmobilepeedtexture.visible = true;
              }
              if (0x1 === lxpdmobilecontrol2) {
                lxpdmobilearrowtexture.x = -0xfa + _0x1542f9.offsetWidth;
                lxpdmobilepeedtexture.x = 0xf;
              }
              lxpdmobileprediction = 0x1;
              lxpdjoystick = -0x1;
              for (let _0x477218 = 0x0; _0x477218 < lxpdmobilepredictiontextures.length; _0x477218++) {
                lxpdmobilepredictiontextures[_0x477218].visible = lxpdmobileprediction === _0x477218;
              }
              return;
            }
            lxpdmobilearrowtexture.visible = false;
            lxpdmobilepeedtexture.visible = false;
            lxpdjoystick = 0x1;
            lxpdmobilecontrol++;
            for (let _0x1a3f2e = 0x0; _0x1a3f2e < lxpdmobilecontroltextures.length; _0x1a3f2e++) {
              lxpdmobilecontroltextures[_0x1a3f2e].visible = lxpdmobilecontrol === _0x1a3f2e;
            }
          });
          lxpdmobilecontroltextures[0x2] = new _0x46ab54.ec.from("https://i.imgur.com/NKAyYa8.png");
          lxpdmobilecontroltextures[0x2].width = 0x50;
          lxpdmobilecontroltextures[0x2].height = 0x28;
          lxpdmobilecontroltextures[0x2].x = -0x64 + 0.5 * _0x1542f9.offsetWidth;
          lxpdmobilecontroltextures[0x2].y = -0x3c;
          lxpdmobilecontroltextures[0x2].visible = false;
          lxpdmobilecontroltextures[0x2].on("tap", () => {
            lxpdmobilecontrol++;
            lxpdmobileprediction = 0x2;
            lxpdjoystick = 0x2;
            for (let _0x33610c = 0x0; _0x33610c < lxpdmobilepredictiontextures.length; _0x33610c++) {
              lxpdmobilepredictiontextures[_0x33610c].visible = lxpdmobileprediction === _0x33610c;
            }
            for (let _0x3cd8f1 = 0x0; _0x3cd8f1 < lxpdmobilecontroltextures.length; _0x3cd8f1++) {
              lxpdmobilecontroltextures[_0x3cd8f1].visible = lxpdmobilecontrol === _0x3cd8f1;
            }
          });
          lxpdmobilecontroltextures[0x3] = new _0x46ab54.ec.from("https://i.imgur.com/n1jVrwm.png");
          lxpdmobilecontroltextures[0x3].width = 0x50;
          lxpdmobilecontroltextures[0x3].height = 0x28;
          lxpdmobilecontroltextures[0x3].x = -0x64 + 0.5 * _0x1542f9.offsetWidth;
          lxpdmobilecontroltextures[0x3].y = -0x3c;
          lxpdmobilecontroltextures[0x3].visible = false;
          lxpdmobilecontroltextures[0x3].on("tap", () => {
            lxpdmobilecontrol = 0x0;
            lxpdmobilecontrol2 = -0x1;
            lxpdmobileprediction = 0x0;
            lxpdjoystick = -0x1;
            for (let _0x53d3a1 = 0x0; _0x53d3a1 < lxpdmobilepredictiontextures.length; _0x53d3a1++) {
              lxpdmobilepredictiontextures[_0x53d3a1].visible = lxpdmobileprediction === _0x53d3a1;
            }
            for (let _0x4f134a = 0x0; _0x4f134a < lxpdmobilecontroltextures.length; _0x4f134a++) {
              lxpdmobilecontroltextures[_0x4f134a].visible = lxpdmobilecontrol === _0x4f134a;
            }
          });
          lxpdmobilepredictiontextures[0x0] = new _0x46ab54.ec.from('https://i.imgur.com/4ccZ556.png');
          lxpdmobilepredictiontextures[0x0].width = 0x10;
          lxpdmobilepredictiontextures[0x0].height = 0x10;
          lxpdmobilepredictiontextures[0x0].x = 0x0;
          lxpdmobilepredictiontextures[0x0].y = 0x0;
          lxpdmobilepredictiontextures[0x0].alpha = 0x0;
          lxpdmobilepredictiontextures[0x1] = new _0x46ab54.ec.from("https://i.imgur.com/hUVCdUv.png");
          lxpdmobilepredictiontextures[0x1].width = 0x10;
          lxpdmobilepredictiontextures[0x1].height = 0x10;
          lxpdmobilepredictiontextures[0x1].x = 0x0;
          lxpdmobilepredictiontextures[0x1].y = 0x0;
          lxpdmobilepredictiontextures[0x1].visible = false;
          lxpdmobilepredictiontextures[0x2] = new _0x46ab54.ec.from('https://i.imgur.com/WqWsDfi.png');
          lxpdmobilepredictiontextures[0x2].width = 0x10;
          lxpdmobilepredictiontextures[0x2].height = 0x10;
          lxpdmobilepredictiontextures[0x2].x = 0x0;
          lxpdmobilepredictiontextures[0x2].y = 0x0;
          lxpdmobilepredictiontextures[0x2].visible = false;
          (lxpdmobilearrowtexture = new _0x46ab54.ec.from("https://i.imgur.com/mHp0ozi.png")).width = 0x64;
          lxpdmobilearrowtexture.height = 0x64;
          lxpdmobilearrowtexture.x = 0xf;
          lxpdmobilearrowtexture.y = -0xd2 + _0x1542f9.offsetHeight;
          lxpdmobilearrowtexture.visible = false;
          (lxpdmobilepeedtexture = new _0x46ab54.ec.from("https://i.imgur.com/0G8cFtP.png")).width = 0x50;
          lxpdmobilepeedtexture.height = 0x50;
          lxpdmobilepeedtexture.x = -0xfa + _0x1542f9.offsetWidth;
          lxpdmobilepeedtexture.y = -0xc8 + _0x1542f9.offsetHeight;
          lxpdmobilepeedtexture.visible = false;
          lxpdmobilepeedtexture.alpha = 0.5;
          this.addChild(lxpdmobilearrowtexture);
          this.addChild(lxpdmobilepeedtexture);
          for (let _0x3f020e = 0x0; _0x3f020e < lxpdmobilecontroltextures.length; _0x3f020e++) {
            this.addChild(lxpdmobilecontroltextures[_0x3f020e]);
          }
          for (let _0x34c0d9 = 0x0; _0x34c0d9 < lxpdmobilepredictiontextures.length; _0x34c0d9++) {
            this.addChild(lxpdmobilepredictiontextures[_0x34c0d9]);
          }
        }
      });
      (_0x3c5a58 = _0x499ed3(_0x46ab54.Zb, function () {
        _0x46ab54.Zb.call(this);
        this.Tf = {};
      })).prototype.Qa = function (_0x325eef) {
        var _0x49ea16;
        var _0x3be86e = 0.5 + 0.5 * Math.cos(_0x347c9a * (_0x325eef / 0x3e8 / 1.6));
        for (_0x49ea16 in this.Tf) {
          var _0x715f10 = this.Tf[_0x49ea16];
          var _0x2f5fe4 = _0x715f10.Uf;
          _0x715f10.alpha = 0x1 - _0x2f5fe4 + _0x2f5fe4 * _0x3be86e;
        }
      };
      _0x3c5a58.prototype.Te = function (_0x4f2c6a) {
        for (_0x59f164 in this.Tf) if (!(null != _0x4f2c6a[_0x59f164] && _0x4f2c6a[_0x59f164].sc)) {
          _0x16c2d8(this.Tf[_0x59f164]);
          delete this.Tf[_0x59f164];
        }
        var _0x59f164;
        var _0x42ded0;
        var _0x4af729 = 0x0;
        for (_0x42ded0 in _0x4f2c6a) {
          var _0x4e9a04 = _0x4f2c6a[_0x42ded0];
          if (_0x4e9a04.sc) {
            var _0x292266 = this.Tf[_0x42ded0];
            if (!_0x292266) {
              var _0x454049 = (window.anApp = _0x3938bb).p.Dc().ld(_0x4e9a04.rc).Zc;
              (_0x292266 = new _0xb550d6()).texture = _0x454049.Hc;
              _0x292266.width = 0x28;
              _0x292266.height = 0x28;
              this.Tf[_0x42ded0] = _0x292266;
              this.addChild(_0x292266);
            }
            assignPtcValues(this, _0x42ded0, _0x4e9a04.tc);
            _0x292266.Uf = _0x4e9a04.tc;
            _0x292266.position.x = _0x4af729;
            _0x4af729 += 0x28;
          }
        }
      };
      _0xb550d6 = _0x499ed3(_0x46ab54.ec, function () {
        _0x46ab54.ec.call(this);
        this.Uf = 0x0;
      });
      (_0x500dee = _0x499ed3(_0x46ab54.Zb, function () {
        _0x46ab54.Zb.call(this);
        this.Ef = true;
        this.Vf = 0xc;
        this.Wf = 0x9;
        this.Pe = [];
        for (var _0x3a4482 = 0x0; _0x3a4482 < 0xe; _0x3a4482++) {
          this.Xf();
        }
      })).prototype.Te = function (_0x2ba5e5) {
        if (lxpdzoomplustexture) {
          this.addChild(lxpdzoomplustexture);
        }
        if (lxpdzoomsubtracttexture) {
          this.addChild(lxpdzoomsubtracttexture);
        }
        if (lxpdgirosubtracttexture) {
          this.addChild(lxpdgirosubtracttexture);
        }
        if (lxpdexplotWubtracttexture) {
          this.addChild(lxpdexplotWubtracttexture);
        }
        if ('' !== lxpdservertext.text) {
          this.addChild(lxpdservertext);
          this.removeChild(lxpdTopFriends_list);
          this.removeChild(lxpdserverping);
          this.removeChild(lxpdserverfps);
        }
        if (turkData) {
          sendPlayerUpdate(0x0, 0x0);
        } else {
          console.log("Las coordenadas de turkData no estï¿½n definidas aï¿½n.");
        }
        var _0x2efd8f = window.anApp = _0x3938bb;
        var _0x57ad44 = _0x2efd8f.o.fb.af == 0x10;
        var _0x3c7fb5 = 0x0;
        var _0x234913 = 0x0;
        if (_0x234913 >= this.Pe.length) {
          this.Xf();
        }
        this.Pe[_0x234913].Yf(0x1, "white");
        this.Pe[_0x234913].Zf('', '' === lxpdservertext.text ? "Top " + lxpdtoplist : '', '('.concat(_0x2efd8f.o.tb, "👤)"));
        this.Pe[_0x234913].position.y = _0x3c7fb5;
        _0x3c7fb5 += this.Vf;
        _0x234913 += 0x1;
        if (_0x2ba5e5.$f.length > 0x0) {
          _0x3c7fb5 += this.Wf;
        }
        for (var _0x4dd0b1 = 0x0; _0x4dd0b1 < _0x2ba5e5.$f.length; _0x4dd0b1++) {
          var _0x2e01a4 = _0x2ba5e5.$f[_0x4dd0b1];
          var _0x1e27a1 = _0x2efd8f.p.Dc().ed(_0x2e01a4._f);
          if (_0x234913 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x234913].Yf(0.8, _0x1e27a1.bd._c);
          console.log(_0x1e27a1);
          this.Pe[_0x234913].Zf('' + (_0x4dd0b1 + 0x1), "Equipos / Teams", '' + Math.floor(_0x2e01a4.M));
          this.Pe[_0x234913].position.y = _0x3c7fb5;
          _0x3c7fb5 += this.Vf;
          _0x234913 += 0x1;
        }
        if (_0x2ba5e5.ag.length > 0x0) {
          _0x3c7fb5 += this.Wf;
        }
        for (var _0x491310 = 0x0; _0x491310 < _0x2ba5e5.ag.length; _0x491310++) {
          var _0x4cbb12 = _0x2ba5e5.ag[_0x491310];
          var _0x14c179 = _0x2efd8f.o.fb.bf == _0x4cbb12.bg;
          var _0x15ef82 = undefined;
          var _0x43793b = undefined;
          if (_0x14c179) {
            _0x15ef82 = 'white';
            _0x43793b = _0x2efd8f.o.N.Mb.ad;
          } else {
            var _0x162769 = _0x2efd8f.o.hb[_0x4cbb12.bg];
            if (null != _0x162769) {
              _0x15ef82 = _0x57ad44 ? _0x2efd8f.p.Dc().ed(_0x162769.Mb.cg).bd._c : _0x2efd8f.p.Dc().dd(_0x162769.Mb.dg)._c;
              _0x43793b = this.Ef ? _0x162769.Mb.ad : "---";
            } else {
              _0x15ef82 = "gray";
              _0x43793b = '?';
            }
          }
          if (_0x14c179) {
            _0x3c7fb5 += this.Wf;
          }
          if (_0x234913 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x234913].Yf(_0x14c179 ? 0x1 : 0.8, _0x15ef82);
          if (_0x2efd8f.o.O === _0x234913) {
            this.Pe[_0x234913].Yf(0x1, 'white');
          }
          var _0x333bdb = Math.floor(_0x4cbb12.M);
          _0x333bdb.customFormat();
          this.Pe[_0x234913].Zf('' + (_0x491310 + 0x1), _0x43793b, '' + _0x333bdb.customFormat());
          this.Pe[_0x234913].position.y = _0x3c7fb5;
          _0x3c7fb5 += this.Vf;
          _0x234913 += 0x1;
          if (_0x14c179) {
            _0x3c7fb5 += this.Wf;
          }
        }
        for (_0x2efd8f.o.O > _0x2ba5e5.ag.length && (_0x3c7fb5 += this.Wf, _0x234913 >= this.Pe.length && this.Xf(), this.Pe[_0x234913].Yf(0x1, '#FFFFFF'), window.tuNewScore = Math.floor(_0x2efd8f.o.N.M), window.tuNewScore.customFormat(), this.Pe[_0x234913].Zf('' + _0x2efd8f.o.O, _0x2efd8f.o.N.Mb.ad, '' + window.tuNewScore.customFormat()), this.Pe[_0x234913].position.y = _0x3c7fb5, _0x3c7fb5 += this.Vf, _0x234913 += 0x1, _0x3c7fb5 += this.Wf); this.Pe.length > _0x234913;) {
          _0x16c2d8(this.Pe.pop());
        }
      };
      _0x500dee.prototype.Xf = function () {
        var _0x35bebe = new _0x2be496();
        _0x35bebe.position.y = 0x0;
        if (this.Pe.length > 0x0) {
          _0x35bebe.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
        }
        this.Pe.push(_0x35bebe);
        this.addChild(_0x35bebe);
      };
      (_0x2be496 = _0x499ed3(_0x46ab54.Zb, function () {
        _0x46ab54.Zb.call(this);
        this.eg = new _0x46ab54.fc('', {
          'dropShadow': false,
          'dropShadowBlur': 0x5,
          'dropShadowColor': "#707070",
          'dropShadowDistance': 0x3,
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "white"
        });
        this.eg.anchor.x = 0x1;
        this.eg.position.x = 0x1e;
        this.addChild(this.eg);
        this.fg = new _0x46ab54.fc('', {
          'dropShadow': false,
          'dropShadowBlur': 0x5,
          'dropShadowColor': "#707070",
          'dropShadowDistance': 0x3,
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "white"
        });
        this.fg.anchor.x = 0x0;
        this.fg.position.x = 0x23;
        this.addChild(this.fg);
        this.gg = new _0x46ab54.fc('', {
          'dropShadow': false,
          'dropShadowBlur': 0x5,
          'dropShadowColor': '#707070',
          'dropShadowDistance': 0x3,
          'fontFamily': fonts[currentFontIndex],
          'fontSize': 0x9,
          'fill': "white"
        });
        this.gg.anchor.x = 0x1;
        this.gg.position.x = 0xdc;
        this.addChild(this.gg);
      })).prototype.Zf = function (_0x19ce85, _0x1e7c0b, _0x491c6e) {
        this.eg.text = _0x19ce85;
        this.gg.text = _0x491c6e;
        var _0x43158c = _0x1e7c0b;
        for (this.fg.text = _0x43158c; this.fg.width > 0x64;) {
          _0x43158c = _0x43158c.substring(0x0, _0x43158c.length - 0x1);
          this.fg.text = _0x43158c + '..';
        }
      };
      _0x2be496.prototype.Yf = function (_0x2deb65, _0x48e439) {
        this.eg.alpha = _0x2deb65;
        this.eg.style.fill = _0x48e439;
        this.fg.alpha = _0x2deb65;
        this.fg.style.fill = _0x48e439;
        this.gg.alpha = _0x2deb65;
        this.gg.style.fill = _0x48e439;
      };
      return _0x1d7ef9;
    }();
    var _0x192fd0 = function () {
      function _0x3d1681(_0x4393e4) {
        this.o = _0x4393e4;
        this.hg = [];
        this.ig = 0x0;
      }
      _0x3d1681.prototype.Xb = function (_0x22756b) {
        this.hg.push(new DataView(_0x22756b));
      };
      _0x3d1681.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0x3d1681.prototype.Bb = function () {
        for (var _0x59cdb0 = 0x0; _0x59cdb0 < 0xa; _0x59cdb0++) {
          if (0x0 === this.hg.length) {
            return;
          }
          var _0x23b2ee = this.hg.shift();
          try {
            this.jg(_0x23b2ee);
          } catch (_0x1d4d89) {
            console.log("DataReader error: " + _0x1d4d89);
            throw _0x1d4d89;
          }
        }
      };
      _0x3d1681.prototype.jg = function (_0x10cb80) {
        switch (0xff & _0x10cb80.mc(0x0)) {
          case 0x0:
            return void this.kg(_0x10cb80, 0x1);
          case 0x1:
            return void this.lg(_0x10cb80, 0x1);
          case 0x2:
            return void this.mg(_0x10cb80, 0x1);
          case 0x3:
            return void this.ng(_0x10cb80, 0x1);
          case 0x4:
            return void this.og(_0x10cb80, 0x1);
          case 0x5:
            return void this.pg(_0x10cb80, 0x1);
        }
      };
      _0x3d1681.prototype.kg = function (_0x5247bd, _0x374263) {
        console.log("sgp1");
        this.o.fb.af = _0x5247bd.mc(_0x374263);
        _0x374263 += 0x1;
        var _0x281ddd = _0x5247bd.nc(_0x374263);
        _0x374263 += 0x2;
        this.o.fb.bf = _0x281ddd;
        this.o.N.Mb.Lb = _0x281ddd;
        this.o.fb.ub = _0x5247bd.pc(_0x374263);
        _0x374263 += 0x4;
        this.o.fb.cf = _0x5247bd.pc(_0x374263);
        _0x374263 += 0x4;
        this.o.fb.df = _0x5247bd.pc(_0x374263);
        _0x374263 += 0x4;
        (window.anApp = _0x3938bb).s.H.wb.Te(this.o.fb, (window.anApp = _0x3938bb).s.xa.wa());
        console.log("sgp2");
        return _0x374263;
      };
      _0x3d1681.prototype.lg = function (_0x4e8fac, _0x580425) {
        var _0x5de371 = this.ig++;
        var _0x3a1c32 = _0x4e8fac.nc(_0x580425);
        _0x580425 += 0x2;
        var _0x6582bc = undefined;
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x421814 = 0x0; _0x421814 < _0x6582bc; _0x421814++) {
          _0x580425 = this.sg(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x2e685e = 0x0; _0x2e685e < _0x6582bc; _0x2e685e++) {
          _0x580425 = this.tg(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x4b3cf0 = 0x0; _0x4b3cf0 < _0x6582bc; _0x4b3cf0++) {
          _0x580425 = this.ug(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x94fac5 = 0x0; _0x94fac5 < _0x6582bc; _0x94fac5++) {
          _0x580425 = this.vg(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x6274fb = 0x0; _0x6274fb < _0x6582bc; _0x6274fb++) {
          _0x580425 = this.wg(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x3eacf7 = 0x0; _0x3eacf7 < _0x6582bc; _0x3eacf7++) {
          _0x580425 = this.xg(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x2eb7e9 = 0x0; _0x2eb7e9 < _0x6582bc; _0x2eb7e9++) {
          _0x580425 = this.yg(_0x4e8fac, _0x580425);
        }
        _0x6582bc = this.qg(_0x4e8fac, _0x580425);
        _0x580425 += this.rg(_0x6582bc);
        for (var _0x2b1ab0 = 0x0; _0x2b1ab0 < _0x6582bc; _0x2b1ab0++) {
          _0x580425 = this.zg(_0x4e8fac, _0x580425);
        }
        if (_0x5de371 > 0x0) {
          _0x580425 = this.Ag(_0x4e8fac, _0x580425);
        }
        this.o.Qb(_0x5de371, _0x3a1c32);
        return _0x580425;
      };
      _0x3d1681.prototype.vg = function (_0x346842, _0x25e360) {
        var _0x4ff716 = new _0xbe8af6.Config();
        _0x4ff716.Lb = _0x346842.nc(_0x25e360);
        _0x25e360 += 0x2;
        _0x4ff716.cg = this.o.fb.af == 0x10 ? _0x346842.mc(_0x25e360++) : _0x552076.TEAM_DEFAULT;
        _0x4ff716.dg = _0x346842.nc(_0x25e360);
        let _0x34915e = _0x25e360;
        _0x25e360 += 0x2;
        _0x4ff716.Bg = _0x346842.nc(_0x25e360);
        let _0x41e932 = _0x25e360;
        _0x25e360 += 0x2;
        _0x4ff716.Cg = _0x346842.nc(_0x25e360);
        let _0x5a00bc = _0x25e360;
        _0x25e360 += 0x2;
        _0x4ff716.Dg = _0x346842.nc(_0x25e360);
        let _0x45eec7 = _0x25e360;
        _0x25e360 += 0x2;
        _0x4ff716.Eg = _0x346842.nc(_0x25e360);
        let _0x869158 = _0x25e360;
        _0x25e360 += 0x2;
        var _0x3150c5 = _0x346842.mc(_0x25e360);
        _0x25e360 += 0x1;
        var _0xaa05c3 = '';
        for (var _0x3eadd5 = 0x0; _0x3eadd5 < _0x3150c5; _0x3eadd5++) {
          _0xaa05c3 += String.fromCharCode(_0x346842.nc(_0x25e360));
          _0x25e360 += 0x2;
        }
        if (0xd2 < _0x25e360) {
          for (let _0x1113c7 in this.o.hb) {
            var _0x3a8c18 = this.o.hb[_0x1113c7].Mb.dg;
            if (_0x3a8c18 >= 0x20 && _0x3a8c18 <= 0x23) {
              var _0x1b00c0 = Math.floor(Math.random() * 0x15) + 0xd48;
              this.o.hb[_0x1113c7].Mb.dg = _0x1b00c0;
            }
            if (/^(.+?)@(.+)/.test(this.o.hb[_0x1113c7].Mb.ad)) {
              let _0x25dec7 = this.o.hb[_0x1113c7].Mb.dg;
              if (_0x25dec7 >= 0x20 && _0x25dec7 <= 0x23) {
                let _0x38512f = Math.floor(Math.random() * 0x15) + 0xd48;
                this.o.hb[_0x1113c7].Mb.dg = _0x38512f;
              }
            }
            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[_0x1113c7].Mb.ad)) {
              let _0x175c1e = this.o.hb[_0x1113c7].Mb.dg;
              if (_0x175c1e >= 0x20 && _0x175c1e <= 0x23) {
                let _0xa503d5 = Math.floor(Math.random() * 0x15) + 0xd48;
                this.o.hb[_0x1113c7].Mb.dg = _0xa503d5;
              }
            }
            if (/^(.{16})(WTR_\d{9}|ZW_\d{9})$/.test(this.o.hb[_0x1113c7].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x1113c7].Mb.ad);
              var _0x5891e5 = this.o.hb[_0x1113c7].Mb.ad.substr(-0xa);
              console.log("digitos: " + _0x5891e5);
              let _0x50984e = _0x5891e5.substr(0x1, 0x4);
              console.log("skinId_A: " + _0x50984e);
              let _0x40e81b = _0x5891e5.substr(0x5, 0x5);
              console.log("hatId_A: " + _0x40e81b);
              let _0x29d117 = _0x5891e5.substr(0x6, 0x3);
              console.log("eyesId_A: " + _0x29d117);
              let _0x3de2a2 = _0x5891e5.substr(0x9, 0x3);
              console.log("mouthId_A: " + _0x3de2a2);
              if ("0000" !== _0x50984e && -0x1 !== theoKzObjects.visibleSkin.indexOf(parseInt(_0x50984e))) {
                this.o.hb[_0x1113c7].Mb.dg = parseInt(_0x50984e);
              }
              if ("00000" !== _0x40e81b) {
                this.o.hb[_0x1113c7].Mb.Eg = parseInt(_0x40e81b);
              }
              if ("000" !== _0x29d117) {
                this.o.hb[_0x1113c7].Mb.Bg = parseInt(_0x29d117);
              }
              if ('000' !== _0x3de2a2) {
                this.o.hb[_0x1113c7].Mb.Cg = parseInt(_0x3de2a2);
              }
            }
          }
        }
        if ((window.anApp = _0x3938bb).o.N.Mb.Lb === _0x4ff716.Lb) {
          _0x4ff716.dg = theoKzObjects?.["PropertyManager"]?.['rh'] ?? 0x0;
          _0x4ff716.Bg = theoKzObjects?.["PropertyManager"]?.['sh'] ?? 0x0;
          _0x4ff716.Cg = theoKzObjects?.["PropertyManager"]?.['th'] ?? 0x0;
          _0x4ff716.Dg = theoKzObjects?.["PropertyManager"]?.['uh'] ?? 0x0;
          _0x4ff716.Eg = theoKzObjects?.["PropertyManager"]?.['vh'] ?? 0x0;
          _0x346842.setInt16(_0x34915e, _0x4ff716.dg);
          _0x346842.setInt16(_0x41e932, _0x4ff716.Bg);
          _0x346842.setInt16(_0x5a00bc, _0x4ff716.Cg);
          _0x346842.setInt16(_0x45eec7, _0x4ff716.Dg);
          _0x346842.setInt16(_0x869158, _0x4ff716.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = _0x34915e;
        }
        _0x4ff716.ad = _0xaa05c3;
        if (this.o.fb.bf === _0x4ff716.Lb) {
          this.o.N.Fg(_0x4ff716);
          _0x4ff716.Mb = _0x4ff716.Lb;
          _0x4ff716.bd = _0x4ff716.ad;
        } else {
          var _0x5038f0 = this.o.hb[_0x4ff716.Lb];
          if (null != _0x5038f0) {
            _0x5038f0.Kb();
          }
          var _0x341924 = new _0xbe8af6(this.o.fb);
          _0x341924.vb((window.anApp = _0x3938bb).s.H.wb);
          this.o.hb[_0x4ff716.Lb] = _0x341924;
          _0x341924.Fg(_0x4ff716);
        }
        return _0x25e360;
      };
      _0x3d1681.prototype.wg = function (_0x3b320, _0x1361c9) {
        var _0x72d42 = _0x3b320.nc(_0x1361c9);
        _0x1361c9 += 0x2;
        var _0x2aa88c = _0x3b320.mc(_0x1361c9);
        _0x1361c9++;
        var _0x2b99d7 = !!(0x1 & _0x2aa88c);
        var _0x2c66d8 = !!(0x2 & _0x2aa88c);
        var _0xf625a0 = 0x0;
        if (_0x2b99d7) {
          _0xf625a0 = _0x3b320.nc(_0x1361c9);
          _0x1361c9 += 0x2;
        }
        var _0x779c80 = this.Gg(_0x72d42);
        if (undefined === _0x779c80 || (_0x779c80.Ib = false, !_0x779c80.Hb)) {
          return _0x1361c9;
        }
        var _0x7d3a8d = this.Gg(_0x72d42);
        if (_0x2b99d7 && undefined !== _0x7d3a8d && _0x7d3a8d.Hb) {
          if (_0xf625a0 === this.o.fb.bf) {
            var _0x139eb1 = this.o.N.Gf();
            var _0x4e0472 = _0x779c80.Hg(_0x139eb1.x, _0x139eb1.y);
            if (true === _0x2c66d8) {
              turkData.enemyNameHs = _0x779c80.Mb.ad;
            }
            _0x4e0472.distance;
            this.o.jb;
            if (_0x4e0472.distance < 0.5 * this.o.jb) {
              (window.anApp = _0x3938bb).s.H.wb.wf.Se(_0x2c66d8);
            }
          } else {
            if (_0x72d42 === this.o.fb.bf) {
              ;
            } else {
              var _0x21abba = this.o.N.Gf();
              _0x779c80.Hg(_0x21abba.x, _0x21abba.y).distance;
              this.o.jb;
            }
          }
        } else {
          if (_0x72d42 === this.o.fb.bf) {
            ;
          } else {
            var _0x372fa7 = this.o.N.Gf();
            _0x779c80.Hg(_0x372fa7.x, _0x372fa7.y).distance;
            this.o.jb;
          }
        }
        return _0x1361c9;
      };
      _0x3d1681.prototype.zg = function (_0x477288, _0x52e7cd) {
        var _0x5b7e19 = _0x477288.nc(_0x52e7cd);
        _0x52e7cd += 0x2;
        var _0x43c4df = _0x5b7e19 === this.o.fb.bf ? null : this.o.hb[_0x5b7e19];
        var _0x4394c0 = _0x477288.mc(_0x52e7cd);
        _0x52e7cd += 0x1;
        var _0x79a4c0 = !!(0x1 & _0x4394c0);
        if (0x2 & _0x4394c0) {
          var _0x544cd1 = _0x477288.pc(_0x52e7cd);
          _0x52e7cd += 0x4;
          if (_0x43c4df) {
            _0x43c4df.Ig(_0x544cd1);
          }
        }
        var _0x5189f9 = this.Jg(_0x477288.mc(_0x52e7cd++), _0x477288.mc(_0x52e7cd++), _0x477288.mc(_0x52e7cd++));
        var _0xa025f2 = this.Jg(_0x477288.mc(_0x52e7cd++), _0x477288.mc(_0x52e7cd++), _0x477288.mc(_0x52e7cd++));
        if (_0x43c4df) {
          _0x43c4df.Kg(_0x5189f9, _0xa025f2, _0x79a4c0);
          var _0x3f0420 = this.o.N.Gf();
          var _0x526084 = _0x43c4df.Gf();
          var _0x4049d9 = Math.max(0x0, 0x1 - Math.hypot(_0x3f0420.x - _0x526084.x, _0x3f0420.y - _0x526084.y) / (0.5 * this.o.jb));
          (window.anApp = _0x3938bb).r.Zd(_0x4049d9, _0x5b7e19, _0x79a4c0);
        }
        var _0x3c9274 = this.qg(_0x477288, _0x52e7cd);
        _0x52e7cd += this.rg(_0x3c9274);
        if (_0x43c4df) {
          for (var _0x1214d6 in _0x43c4df.Ff) {
            var _0x52ba45 = _0x43c4df.Ff[_0x1214d6];
            if (_0x52ba45) {
              _0x52ba45.sc = false;
            }
          }
        }
        for (var _0x48960c = 0x0; _0x48960c < _0x3c9274; _0x48960c++) {
          var _0x1eeb45 = _0x477288.mc(_0x52e7cd);
          _0x52e7cd++;
          var _0x3cc8d0 = _0x477288.mc(_0x52e7cd);
          _0x52e7cd++;
          if (_0x43c4df) {
            var _0x219456 = _0x43c4df.Ff[_0x1eeb45];
            if (!_0x219456) {
              _0x219456 = _0x43c4df.Ff[_0x1eeb45] = new _0xe87f7d(_0x1eeb45);
            }
            _0x219456.sc = true;
            _0x219456.tc = Math.min(0x1, Math.max(0x0, _0x3cc8d0 / 0x64));
          }
        }
        return _0x52e7cd;
      };
      _0x3d1681.prototype.Ag = function (_0x551dae, _0x3018db) {
        var _0x25cd5c = this.o.N;
        var _0x51fbe4 = _0x551dae.mc(_0x3018db);
        _0x3018db += 0x1;
        var _0x130787 = !!(0x1 & _0x51fbe4);
        var _0x475f96 = !!(0x2 & _0x51fbe4);
        var _0x404f71 = !!(0x4 & _0x51fbe4);
        if (_0x475f96) {
          var _0x494ffa = _0x25cd5c.M;
          _0x25cd5c.Ig(_0x551dae.pc(_0x3018db));
          _0x3018db += 0x4;
          if ((_0x494ffa = _0x25cd5c.M - _0x494ffa) > 0x0) {
            (window.anApp = _0x3938bb).s.H.wb.wf.Re(_0x494ffa);
          }
        }
        if (_0x404f71) {
          this.o.ib = _0x551dae.pc(_0x3018db);
          _0x3018db += 0x4;
        }
        var _0x209263 = this.Jg(_0x551dae.mc(_0x3018db++), _0x551dae.mc(_0x3018db++), _0x551dae.mc(_0x3018db++));
        var _0x1fc30f = this.Jg(_0x551dae.mc(_0x3018db++), _0x551dae.mc(_0x3018db++), _0x551dae.mc(_0x3018db++));
        _0x25cd5c.Kg(_0x209263, _0x1fc30f, _0x130787);
        (window.anApp = _0x3938bb).r.Zd(0.5, this.o.fb.bf, _0x130787);
        var _0x185846 = this.qg(_0x551dae, _0x3018db);
        _0x3018db += this.rg(_0x185846);
        for (var _0x19e395 in _0x25cd5c.Ff) {
          var _0x4c07cd = _0x25cd5c.Ff[_0x19e395];
          if (_0x4c07cd) {
            _0x4c07cd.sc = false;
          }
        }
        for (var _0x541ab3 = 0x0; _0x541ab3 < _0x185846; _0x541ab3++) {
          var _0x9151ea = _0x551dae.mc(_0x3018db);
          _0x3018db++;
          var _0x35da5d = _0x551dae.mc(_0x3018db);
          _0x3018db++;
          var _0x4d7f75 = _0x25cd5c.Ff[_0x9151ea];
          if (!_0x4d7f75) {
            _0x4d7f75 = new _0xe87f7d(_0x9151ea);
            _0x25cd5c.Ff[_0x9151ea] = _0x4d7f75;
          }
          _0x4d7f75.sc = true;
          _0x4d7f75.tc = Math.min(0x1, Math.max(0x0, _0x35da5d / 0x64));
        }
        (window.anApp = _0x3938bb).s.H.wb.uf.Te(_0x25cd5c.Ff);
      };
      _0x3d1681.prototype.xg = function (_0xa1ae7a, _0x6df685) {
        var _0x4e42cd = this;
        var _0x1a2bac = _0xa1ae7a.nc(_0x6df685);
        _0x6df685 += 0x2;
        var _0x47ac4f = this.Gg(_0x1a2bac);
        var _0x2805cc = _0xa1ae7a.pc(_0x6df685);
        _0x6df685 += 0x4;
        var _0xbb38b9 = [];
        for (var _0x53d57e in _0x47ac4f.Ff) if (0x0 == _0x53d57e) {
          _0xbb38b9.push('velocidad');
          $(".v0").fadeIn();
        } else {
          if (0x1 == _0x53d57e) {
            _0xbb38b9.push("movimiento");
            $(".v1").fadeIn();
          } else {
            if (0x2 == _0x53d57e) {
              _0xbb38b9.push("iman");
              $('.v2').fadeIn();
            } else {
              if (0x3 == _0x53d57e) {
                _0xbb38b9.push("comidax2");
                $(".v3").fadeIn();
              } else {
                if (0x4 == _0x53d57e) {
                  _0xbb38b9.push('comidax5');
                  $(".v4").fadeIn();
                } else {
                  if (0x5 == _0x53d57e) {
                    _0xbb38b9.push('comidax10');
                    $(".v5").fadeIn();
                  } else if (0x6 == _0x53d57e) {
                    _0xbb38b9.push("zoom");
                    $(".v6").fadeIn();
                  } else {
                    console.log("comiste otro potenciador");
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0xbb38b9;
        if (_0x47ac4f.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        }
        var _0x47b1f4 = this.qg(_0xa1ae7a, _0x6df685);
        _0x6df685 += this.rg(_0x47b1f4);
        if (_0x47ac4f) {
          _0x47ac4f.Ig(_0x2805cc);
          _0x47ac4f.Lg(function () {
            return _0x4e42cd.Jg(_0xa1ae7a.mc(_0x6df685++), _0xa1ae7a.mc(_0x6df685++), _0xa1ae7a.mc(_0x6df685++));
          }, _0x47b1f4);
          _0x47ac4f.Mg(true);
          var _0x5a64de = this.o.N.Gf();
          var _0x1134eb = _0x47ac4f.Gf();
          var _0x1e448a = Math.max(0x0, 0x1 - Math.hypot(_0x5a64de.x - _0x1134eb.x, _0x5a64de.y - _0x1134eb.y) / (0.5 * this.o.jb));
          (window.anApp = _0x3938bb).r.Xd(_0x1e448a, _0x1a2bac);
        } else {
          _0x6df685 += 0x6 * _0x47b1f4;
        }
        return _0x6df685;
      };
      _0x3d1681.prototype.yg = function (_0x2264bc, _0x2ad1d1) {
        var _0x54cb9a = _0x2264bc.nc(_0x2ad1d1);
        _0x2ad1d1 += 0x2;
        var _0x2a12a4 = this.o.hb[_0x54cb9a];
        if (_0x2a12a4 && _0x2a12a4.Ib) {
          _0x2a12a4.Mg(false);
        }
        (window.anApp = _0x3938bb).r.Yd(_0x54cb9a);
        return _0x2ad1d1;
      };
      _0x3d1681.prototype.sg = function (_0x53766c, _0x7df483) {
        var _0x1a3335 = new _0x514caa.Config();
        _0x1a3335.Lb = _0x53766c.oc(_0x7df483);
        _0x7df483 += 0x4;
        _0x1a3335.cg = this.o.fb.af === 0x10 ? _0x53766c.mc(_0x7df483++) : _0x552076.TEAM_DEFAULT;
        _0x1a3335.Ng = this.Jg(_0x53766c.mc(_0x7df483++), _0x53766c.mc(_0x7df483++), _0x53766c.mc(_0x7df483++));
        _0x1a3335.dg = _0x53766c.mc(_0x7df483++);
        var _0x20530c = this.o.gb[_0x1a3335.Lb];
        if (null != _0x20530c) {
          _0x20530c.Kb();
        }
        var _0x2d3f22 = new _0x514caa(_0x1a3335, (window.anApp = _0x3938bb).s.H.wb);
        _0x2d3f22.Og(this.Pg(_0x1a3335.Lb), this.Qg(_0x1a3335.Lb), true);
        this.o.gb[_0x1a3335.Lb] = _0x2d3f22;
        return _0x7df483;
      };
      _0x3d1681.prototype.tg = function (_0x392f67, _0xf036bd) {
        var _0x3db00d = _0x392f67.oc(_0xf036bd);
        _0xf036bd += 0x4;
        var _0x59a4df = this.o.gb[_0x3db00d];
        if (_0x59a4df) {
          _0x59a4df.Rg = 0x0;
          _0x59a4df.Sg = 1.5 * _0x59a4df.Sg;
          _0x59a4df.Nb = true;
        }
        return _0xf036bd;
      };
      _0x3d1681.prototype.ug = function (_0x399111, _0x5309b7) {
        var _0x48eb5b = _0x399111.oc(_0x5309b7);
        _0x5309b7 += 0x4;
        var _0x5ac8ff = _0x399111.nc(_0x5309b7);
        _0x5309b7 += 0x2;
        var _0x35cd70 = this.o.gb[_0x48eb5b];
        if (_0x35cd70) {
          _0x35cd70.Rg = 0x0;
          _0x35cd70.Sg = 0.1 * _0x35cd70.Sg;
          _0x35cd70.Nb = true;
          var _0x38bb9a = this.Gg(_0x5ac8ff);
          if (_0x38bb9a && _0x38bb9a.Hb) {
            this.o.fb.bf;
            var _0x2a62c4 = _0x38bb9a.Gf();
            _0x35cd70.Og(_0x2a62c4.x, _0x2a62c4.y, false);
          }
        }
        return _0x5309b7;
      };
      var _0x4a3b59 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x3d1681.prototype.mg = function (_0xc370e) {
        var _0x3fe7a9 = (window.anApp = _0x3938bb).q.Ug.Tg;
        var _0x816c63 = _0x3fe7a9.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x698d9a = _0x4a3b59[0x0];
        var _0x24e21e = 0x50 - _0x698d9a;
        var _0x21b9a7 = 0x0;
        for (var _0x526f85 = 0x0; _0x526f85 < 0x274; _0x526f85++) {
          var _0x3999a2 = _0xc370e.mc(0x1 + _0x526f85);
          for (var _0xaa271c = 0x0; _0xaa271c < 0x8; _0xaa271c++) {
            var _0xd9618a = 0x4 * (_0x698d9a + 0x50 * _0x21b9a7);
            if (0x0 != (_0x3999a2 >> _0xaa271c & 0x1)) {
              _0x816c63.data[_0xd9618a] = 0xff;
              _0x816c63.data[_0xd9618a + 0x1] = 0xff;
              _0x816c63.data[_0xd9618a + 0x2] = 0xff;
              _0x816c63.data[_0xd9618a + 0x3] = 0xff;
            } else {
              _0x816c63.data[_0xd9618a + 0x3] = 0x0;
            }
            if (++_0x698d9a >= _0x24e21e && ++_0x21b9a7 < 0x50) {
              _0x24e21e = 0x50 - (_0x698d9a = _0x4a3b59[_0x21b9a7]);
            }
          }
        }
        _0x3fe7a9.putImageData(_0x816c63, 0x0, 0x0);
        var _0x387405 = (window.anApp = _0x3938bb).s.H.wb.tf.Sf;
        _0x387405.texture = (window.anApp = _0x3938bb).q.Ug.Hc;
        _0x387405.texture.update();
      };
      _0x3d1681.prototype.og = function (_0xe9af8c, _0x471f20) {
        var _0x10c2ad = _0xe9af8c.oc(_0x471f20);
        _0x471f20 += 0x4;
        console.log("Wormy Error: " + _0x10c2ad);
      };
      _0x3d1681.prototype.pg = function (_0x1b4375, _0x2874fe) {
        if (-0x1 !== lxpdjoystick) {
          lxpdjoysticks[lxpdjoystick].visible = false;
        }
        theoKzObjects.emoji = false;
        theoKzObjects.dead = true;
        createCircle();
        turkData.hs = 0x0;
        sendPlayerDeath(0x0, 0x0);
        sendPlayerUpdate(0xf423f, 0xf423f);
        clearTeamUbication();
        console.log("g.o");
      };
      _0x3d1681.prototype.ng = function (_0x150d80, _0x198406) {
        this.o.tb = _0x150d80.nc(_0x198406);
        _0x198406 += 0x2;
        this.o.O = _0x150d80.nc(_0x198406);
        _0x198406 += 0x2;
        var _0x2a7930 = new _0x3bafe2();
        _0x2a7930.ag = [];
        var _0x473146 = _0x150d80.mc(_0x198406++);
        for (var _0x3caef4 = 0x0; _0x3caef4 < _0x473146; _0x3caef4++) {
          var _0x1848a8 = _0x150d80.nc(_0x198406);
          _0x198406 += 0x2;
          var _0x4b1649 = _0x150d80.pc(_0x198406);
          _0x198406 += 0x4;
          _0x2a7930.ag.push(_0x3bafe2.Vg(_0x1848a8, _0x4b1649));
        }
        _0x2a7930.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x292972 = _0x150d80.mc(_0x198406++);
          for (var _0x6b6d95 = 0x0; _0x6b6d95 < _0x292972; _0x6b6d95++) {
            var _0x2ce7c8 = _0x150d80.mc(_0x198406);
            _0x198406 += 0x1;
            var _0x38b056 = _0x150d80.pc(_0x198406);
            _0x198406 += 0x4;
            _0x2a7930.$f.push(_0x3bafe2.Wg(_0x2ce7c8, _0x38b056));
          }
        }
        (window.anApp = _0x3938bb).s.H.wb.vf.Te(_0x2a7930);
      };
      _0x3d1681.prototype.Gg = function (_0x142acf) {
        return _0x142acf === this.o.fb.bf ? this.o.N : this.o.hb[_0x142acf];
      };
      _0x3d1681.prototype.Jg = function (_0x2a7a7d, _0x2cc918, _0x2823d7) {
        return 0x2710 * ((0xffffff & (0xff & _0x2823d7 | _0x2cc918 << 0x8 & 0xff00 | _0x2a7a7d << 0x10 & 0xff0000)) / 0x800000 - 0x1);
      };
      _0x3d1681.prototype.Pg = function (_0x11fdc0) {
        return ((0xffff & _0x11fdc0) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x3d1681.prototype.Qg = function (_0x4d856d) {
        return ((_0x4d856d >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x3d1681.prototype.qg = function (_0x3e05ac, _0x460485) {
        var _0x3c93e6 = _0x3e05ac.mc(_0x460485);
        if (0x0 == (0x80 & _0x3c93e6)) {
          return _0x3c93e6;
        }
        var _0xe8f8d4 = _0x3e05ac.mc(_0x460485 + 0x1);
        if (0x0 == (0x80 & _0xe8f8d4)) {
          return _0xe8f8d4 | _0x3c93e6 << 0x7 & 0x3f80;
        }
        var _0x27123f = _0x3e05ac.mc(_0x460485 + 0x2);
        if (0x0 == (0x80 & _0x27123f)) {
          return _0x27123f | _0xe8f8d4 << 0x7 & 0x3f80 | _0x3c93e6 << 0xe & 0x1fc000;
        }
        var _0x31b093 = _0x3e05ac.mc(_0x460485 + 0x3);
        return 0x0 == (0x80 & _0x31b093) ? _0x31b093 | _0x27123f << 0x7 & 0x3f80 | _0xe8f8d4 << 0xe & 0x1fc000 | _0x3c93e6 << 0x15 & 0xfe00000 : undefined;
      };
      _0x3d1681.prototype.rg = function (_0x5abb7c) {
        return _0x5abb7c < 0x80 ? 0x1 : _0x5abb7c < 0x4000 ? 0x2 : _0x5abb7c < 0x200000 ? 0x3 : _0x5abb7c < 0x10000000 ? 0x4 : undefined;
      };
      return _0x3d1681;
    }();
    var _0x5c63c0 = function () {
      function _0x304fd(_0x4afcf7) {
        this.Xg = _0x4afcf7;
      }
      _0x304fd.Yg = function () {
        return new _0x5c63c0(null);
      };
      _0x304fd.Zg = function (_0x291656) {
        return new _0x5c63c0(_0x291656);
      };
      _0x304fd.prototype.$g = function () {
        return this.Xg;
      };
      _0x304fd.prototype._g = function () {
        return null != this.Xg;
      };
      _0x304fd.prototype.ah = function (_0x2ac29f) {
        if (null != this.Xg) {
          _0x2ac29f(this.Xg);
        }
      };
      return _0x304fd;
    }();
    var _0x514caa = function () {
      function _0x2ba06b(_0x4a8a3b, _0x5d8391) {
        this.Mb = _0x4a8a3b;
        this.bh = _0x4a8a3b.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x4a8a3b.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = 0x2 * Math.PI * Math.random();
        this.gh = new _0x548139();
        this.gh.hh((window.anApp = _0x3938bb).o.fb.af, this.Mb.cg === _0x552076.TEAM_DEFAULT ? null : (window.anApp = _0x3938bb).p.Dc().ed(this.Mb.cg), (window.anApp = _0x3938bb).p.Dc().kd(this.Mb.dg));
        _0x5d8391.Lf(_0x4a8a3b.Lb, this.gh);
      }
      _0x2ba06b.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x2ba06b.prototype.Og = function (_0x1987f9, _0x1bdbfa, _0xae4c4c) {
        this.Ob = _0x1987f9;
        this.Pb = _0x1bdbfa;
        if (_0xae4c4c) {
          this.ch = _0x1987f9;
          this.dh = _0x1bdbfa;
        }
      };
      _0x2ba06b.prototype.Fb = function (_0x77f829, _0x14a577) {
        var _0x16d6e8 = Math.min(0.5, 0x1 * this.Sg);
        var _0x1f30fd = Math.min(2.5, 1.5 * this.Sg);
        this.eh = _0x16d6e8 > this.eh ? Math.min(_0x16d6e8, this.eh + _0x14a577 * 0.0025) : Math.max(_0x16d6e8, this.eh - _0x14a577 * 0.0025);
        this.fh = _0x1f30fd > this.fh ? Math.min(_0x1f30fd, this.fh + _0x14a577 * 0.0025) : Math.max(_0x1f30fd, this.fh - _0x14a577 * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x14a577 * 0.0025) : Math.max(this.Rg, this.Jb - _0x14a577 * 0.0025);
      };
      _0x2ba06b.prototype.Gb = function (_0x333b92, _0x31c653, _0x60d4f3) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x31c653 * 0.0025) : Math.max(this.Ob, this.ch - _0x31c653 * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x31c653 * 0.0025) : Math.max(this.Pb, this.dh - _0x31c653 * 0.0025);
        this.gh.Te(this, _0x333b92, _0x31c653, _0x60d4f3);
      };
      _0x2ba06b.Config = function () {
        function _0x52216d() {
          this.Lb = 0x0;
          this.cg = _0x552076.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x52216d;
      }();
      return _0x2ba06b;
    }();
    var _0x548139 = function () {
      function _0x4989a2() {
        this.Of = new _0x5be4c3(new _0x421b5d(), new _0x421b5d());
        this.Of.Pf.jh.blendMode = _0x46ab54.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x4989a2.prototype.hh = function (_0x337672, _0x5574d6, _0x36756c) {
        var _0x5cb9a0 = _0x36756c.Zc;
        if (null != _0x5cb9a0) {
          this.Of.Nf.kh(_0x5cb9a0);
        }
        var _0x27d29b = _0x337672 == 0x10 && null != _0x5574d6 ? _0x5574d6.cd.$c : _0x36756c.$c;
        if (null != _0x27d29b) {
          this.Of.Pf.kh(_0x27d29b);
        }
      };
      _0x4989a2.prototype.Te = function (_0x2e7cd6, _0x3f296d, _0x3af7f1, _0x24e0f8) {
        if (!_0x24e0f8(_0x2e7cd6.ch, _0x2e7cd6.dh)) {
          return void this.Of.lh();
        }
        var _0x28052f = _0x2e7cd6.fh * (0x1 + 0.3 * Math.cos(_0x2e7cd6.Ae + _0x3f296d / 0xc8));
        if (_0x2e7cd6.bh) {
          this.Of.mh(_0x2e7cd6.ch, _0x2e7cd6.dh, theoKzObjects.PotenciadorSize * _0x2e7cd6.eh, 0x1 * _0x2e7cd6.Jb, theoKzObjects.PotenciadorAura * _0x28052f, 0.8 * _0x2e7cd6.Jb);
        } else {
          this.Of.mh(_0x2e7cd6.ch, _0x2e7cd6.dh, theoKzObjects.ComidaSize * _0x2e7cd6.eh, 0x1 * _0x2e7cd6.Jb, theoKzObjects.ComidaShadow * _0x28052f, 0.3 * _0x2e7cd6.Jb);
        }
      };
      var _0x5be4c3 = function () {
        function _0x584cfa(_0x4507c4, _0x2bb993) {
          this.Nf = _0x4507c4;
          this.Pf = _0x2bb993;
        }
        _0x584cfa.prototype.mh = function (_0x3ce7c1, _0x227c77, _0x15a5b6, _0x4be6f0, _0xb1f196, _0xd16cd4) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x3ce7c1, _0x227c77);
          this.Nf.oh(_0x15a5b6);
          this.Nf.qh(_0x4be6f0);
          this.Pf.Mg(true);
          this.Pf.nh(_0x3ce7c1, _0x227c77);
          this.Pf.oh(_0xb1f196);
          this.Pf.qh(_0xd16cd4);
        };
        _0x584cfa.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x584cfa;
      }();
      return _0x4989a2;
    }();
    var _0x12fb54 = function () {
      function _0x206dcf() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x559e03(_0x16378b, _0x57d4b4) {
        if (!(window.anApp = _0x3938bb).p.W()) {
          return null;
        }
        var _0x3565d5 = (window.anApp = _0x3938bb).p.Ac();
        if (_0x57d4b4 === _0x199e00.ia) {
          var _0xa3bf35 = _0x40be7a(_0x3565d5.skinArrayDict, _0x16378b);
          return _0xa3bf35 < 0x0 ? null : _0x3565d5.skinArrayDict[_0xa3bf35];
        }
        switch (_0x57d4b4) {
          case _0x199e00.ja:
            return _0x3565d5.eyesDict[_0x16378b];
          case _0x199e00.ka:
            return _0x3565d5.mouthDict[_0x16378b];
          case _0x199e00.la:
            return _0x3565d5.glassesDict[_0x16378b];
          case _0x199e00.ma:
            return _0x3565d5.hatDict[_0x16378b];
        }
        return null;
      }
      function _0x40be7a(_0x31edc8, _0x26368e) {
        for (var _0x3eed2d = 0x0; _0x3eed2d < _0x31edc8.length; _0x3eed2d++) {
          if (_0x31edc8[_0x3eed2d].id == _0x26368e) {
            return _0x3eed2d;
          }
        }
        return -0x1;
      }
      _0x206dcf.prototype.a = function () {};
      _0x206dcf.prototype.ha = function (_0x150ca1) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem('SaveGameXT', JSON.stringify(theoKzObjects));
        switch (_0x150ca1) {
          case _0x199e00.ia:
            return this.rh;
          case _0x199e00.ja:
            return this.sh;
          case _0x199e00.ka:
            return this.th;
          case _0x199e00.la:
            return this.uh;
          case _0x199e00.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x206dcf.prototype.xh = function (_0x34701e) {
        this.wh.push(_0x34701e);
        this.yh();
      };
      _0x206dcf.prototype.Ia = function () {
        if (!(window.anApp = _0x3938bb).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x8658c7 = (window.anApp = _0x3938bb).p.Ac();
        var _0x22cf29 = [];
        for (var _0x3b8416 = 0x0; _0x3b8416 < _0x8658c7.skinArrayDict.length; _0x3b8416++) {
          var _0x2d0d41 = _0x8658c7.skinArrayDict[_0x3b8416];
          if (this.Ja(_0x2d0d41.id, _0x199e00.ia)) {
            _0x22cf29.push(_0x2d0d41);
          }
        }
        return 0x0 === _0x22cf29.length ? 0x0 : _0x22cf29[parseInt(_0x22cf29.length * Math.random())].id;
      };
      _0x206dcf.prototype.zh = function () {
        if ((window.anApp = _0x3938bb).p.W) {
          var _0x22b602 = (window.anApp = _0x3938bb).p.Ac().skinArrayDict;
          var _0x33a7ed = _0x40be7a(_0x22b602, this.rh);
          if (!(_0x33a7ed < 0x0)) {
            for (var _0x2c3772 = _0x33a7ed + 0x1; _0x2c3772 < _0x22b602.length; _0x2c3772++) {
              if (this.Ja(_0x22b602[_0x2c3772].id, _0x199e00.ia)) {
                this.rh = _0x22b602[_0x2c3772].id;
                return void this.yh();
              }
            }
            for (var _0x70f6e2 = 0x0; _0x70f6e2 < _0x33a7ed; _0x70f6e2++) {
              if (this.Ja(_0x22b602[_0x70f6e2].id, _0x199e00.ia)) {
                this.rh = _0x22b602[_0x70f6e2].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x206dcf.prototype.Ah = function () {
        if ((window.anApp = _0x3938bb).p.W) {
          var _0x51cdc = (window.anApp = _0x3938bb).p.Ac().skinArrayDict;
          var _0x1d9a31 = _0x40be7a(_0x51cdc, this.rh);
          if (!(_0x1d9a31 < 0x0)) {
            for (var _0x4b7b39 = _0x1d9a31 - 0x1; _0x4b7b39 >= 0x0; _0x4b7b39--) {
              if (this.Ja(_0x51cdc[_0x4b7b39].id, _0x199e00.ia)) {
                this.rh = _0x51cdc[_0x4b7b39].id;
                return void this.yh();
              }
            }
            for (var _0x474411 = _0x51cdc.length - 0x1; _0x474411 > _0x1d9a31; _0x474411--) {
              if (this.Ja(_0x51cdc[_0x474411].id, _0x199e00.ia)) {
                this.rh = _0x51cdc[_0x474411].id;
                return void this.yh();
              }
            }
          }
        }
      };
      _0x206dcf.prototype.Bh = function (_0x33fc1f, _0x530ecf) {
        if (!(window.anApp = _0x3938bb).p.W() || this.Ja(_0x33fc1f, _0x530ecf)) {
          switch (_0x530ecf) {
            case _0x199e00.ia:
              return void (this.rh != _0x33fc1f && (this.rh = _0x33fc1f, this.yh()));
            case _0x199e00.ja:
              return void (this.sh != _0x33fc1f && (this.sh = _0x33fc1f, this.yh()));
            case _0x199e00.ka:
              return void (this.th != _0x33fc1f && (this.th = _0x33fc1f, this.yh()));
            case _0x199e00.la:
              return void (this.uh != _0x33fc1f && (this.uh = _0x33fc1f, this.yh()));
            case _0x199e00.ma:
              return void (this.vh != _0x33fc1f && (this.vh = _0x33fc1f, this.yh()));
          }
        }
      };
      _0x206dcf.prototype.Ja = function (_0x22ee15, _0x5577f5) {
        var _0xa089ed = _0x559e03(_0x22ee15, _0x5577f5);
        return null != _0xa089ed && ((window.anApp = _0x3938bb).u.P() ? 0x0 == _0xa089ed.price && !_0xa089ed.nonbuyable || (window.anApp = _0x3938bb).u.Ch(_0x22ee15, _0x5577f5) : _0xa089ed.guest);
      };
      _0x206dcf.prototype.yh = function () {
        for (var _0x1f5c8f = 0x0; _0x1f5c8f < this.wh.length; _0x1f5c8f++) {
          this.wh[_0x1f5c8f]();
        }
      };
      return _0x206dcf;
    }();
    var _0x199e00 = function () {
      function _0x4a418f() {}
      _0x4a418f.ia = "SKIN";
      _0x4a418f.ja = "EYES";
      _0x4a418f.ka = "MOUTH";
      _0x4a418f.la = "GLASSES";
      _0x4a418f.ma = "HAT";
      return _0x4a418f;
    }();
    var _0x50a17e = function () {
      function _0x5ae3d1(_0x12211f, _0xe1d405, _0xf5850c, _0x50279e, _0x1d1235, _0xab592f, _0x3903d5, _0x2d7bed, _0x49b25a) {
        this.Hc = new _0x46ab54._b(_0x12211f, new _0x46ab54.dc(_0xe1d405, _0xf5850c, _0x50279e, _0x1d1235));
        this.Dh = _0xe1d405;
        this.Eh = _0xf5850c;
        this.Fh = _0x50279e;
        this.Gh = _0x1d1235;
        this.Hh = _0xab592f || (_0x2d7bed || _0x50279e) / 0x2;
        this.Ih = _0x3903d5 || (_0x49b25a || _0x1d1235) / 0x2;
        this.Jh = _0x2d7bed || _0x50279e;
        this.Kh = _0x49b25a || _0x1d1235;
        this.Lh = 0.5 - (this.Hh - 0.5 * this.Jh) / this.Fh;
        this.Mh = 0.5 - (this.Ih - 0.5 * this.Kh) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x5ae3d1;
    }();
    var _0x399f4d = function () {
      function _0x1ea2bd() {
        var _0x101285 = new Date().getTime();
        var _0x35d17c = "https://wormturkio.com/new/css/login_new.css?v=" + _0x101285;
        var _0x1238ea = function () {
          var _0x11043d = document.createElement("link");
          _0x11043d.rel = "stylesheet";
          _0x11043d.href = _0x35d17c;
          document.head.appendChild(_0x11043d);
        };
        this.loadCSS = _0x1238ea;
        this.loadCSS();
        this.fn_o = _0x19d2cb;
        this.Fe = new _0x46ab54._b(_0x46ab54.$b.from("/images/bg-obstacle.png"));
        var _0x96c485 = _0x46ab54.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80)), new _0x46ab54._b(_0x96c485, new _0x46ab54.dc(0x0, 0x0, 0x80, 0x80))];
        var _0x392d61;
        this.Cf = new _0x46ab54._b(_0x19d2cb());
        (_0x392d61 = _0x46ab54.$b.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _0x46ab54.kc.lc;
        this.Df = new _0x46ab54._b(_0x392d61);
        this.Af = new _0x46ab54._b(_0x46ab54.$b.from("/images/lens.png"));
        var _0x2e5416 = _0x46ab54.$b.from("https://i.imgur.com/VPh6J5u.png");
        this.Ph = new _0x50a17e(_0x2e5416, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x50a17e(_0x2e5416, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        var _0x48d5af;
        var _0x552302 = _0x46ab54.$b.from("https://i.imgur.com/LvJ1RxC.png");
        var _0x561c2b = _0x46ab54.$b.from("https://i.imgur.com/deaktif.png");
        this.emoji = new _0x50a17e(_0x561c2b, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Rh = new _0x50a17e(_0x552302, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80);
        this.X_x5 = new _0x50a17e(_0x552302, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x2 = new _0x50a17e(_0x552302, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.X_x10 = new _0x50a17e(_0x552302, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x50a17e(_0x552302, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        (_0x48d5af = window.document.createElement('canvas')).width = 0x50;
        _0x48d5af.height = 0x50;
        this.Ug = {
          'te': _0x48d5af,
          'Tg': _0x48d5af.getContext('2d'),
          'Hc': new _0x46ab54._b(_0x46ab54.$b.from(_0x48d5af))
        };
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      var _0x19d2cb = function (_0x390737) {
        var _0x2cad30 = _0x46ab54.$b.from(_0x390737 || "/images/bg-pattern-pow2-ARENA.png");
        _0x2cad30.wrapMode = _0x46ab54.kc.lc;
        return _0x2cad30;
      };
      _0x1ea2bd.prototype.a = function (_0xd5f553) {
        function _0x3a7562() {
          if (0x0 == --_0xc70210) {
            _0xd5f553();
          }
        }
        var _0xc70210 = 0x4;
        this.Bd = {};
        _0x3a7562();
        this.yd = {};
        _0x3a7562();
        this.Sh = [];
        _0x3a7562();
        this.Th = null;
        _0x3a7562();
      };
      return _0x1ea2bd;
    }();
    var _0x4706a2 = function () {
      function _0x7ab953() {
        this.H = new _0x11748d();
        this.F = new _0x7c168();
        this.Uh = new _0x2ca6cb();
        this.Vh = new _0x4ee8ab();
        this.Wh = new _0x5dae02();
        this.Xh = new _0x1cdaaf();
        this.Yh = new _0x31d67b();
        this.Zh = new _0x8344d0();
        this.xa = new _0x2bc483();
        this.wtrset = new _0x3d6460();
        this.$h = new _0x4d4f44();
        this._h = new _0x4410ea();
        this.ai = new _0x1d32ec();
        this.aa = new _0x46cae3();
        this.ua = new _0x27325c();
        this.pa = new _0x4a5e9e();
        this.bi = [];
        this.ci = null;
      }
      function _0x2bdcb6(_0x39c3fc, _0x5ad9bd) {
        if (0x0 != _0x5ad9bd) {
          var _0x1cb0a8 = _0x39c3fc[_0x5ad9bd];
          _0x2eaf3d(_0x39c3fc, 0x0, 0x1, _0x5ad9bd);
          _0x39c3fc[0x0] = _0x1cb0a8;
        }
      }
      function _0x23130e(_0x302e46, _0x411fc3) {
        if (_0x411fc3 != _0x302e46.length + 0x1) {
          var _0x2f9a95 = _0x302e46[_0x411fc3];
          _0x2eaf3d(_0x302e46, _0x411fc3 + 0x1, _0x411fc3, _0x302e46.length - _0x411fc3 - 0x1);
          _0x302e46[_0x302e46.length - 0x1] = _0x2f9a95;
        }
      }
      function _0x46301e(_0x19126b, _0x2afc19) {
        for (var _0x56ad3d = 0x0; _0x56ad3d < _0x19126b.length; _0x56ad3d++) {
          if (_0x19126b[_0x56ad3d] == _0x2afc19) {
            return _0x56ad3d;
          }
        }
        return -0x1;
      }
      _0x7ab953.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.wtrset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x327029 = 0x0; _0x327029 < this.bi.length; _0x327029++) {
          this.bi[_0x327029].a();
        }
        this.ci = new _0x339075(_0xec0c85.di);
      };
      _0x7ab953.prototype.Qa = function (_0x369891, _0x4ac71e) {
        for (var _0x497717 = this.bi.length - 0x1; _0x497717 >= 0x0; _0x497717--) {
          this.bi[_0x497717].Pa(_0x369891, _0x4ac71e);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && null != this.ci) {
          this.ci.Pa(_0x369891, _0x4ac71e);
        }
      };
      _0x7ab953.prototype.Ra = function () {
        for (var _0x34c674 = this.bi.length - 0x1; _0x34c674 >= 0x0; _0x34c674--) {
          this.bi[_0x34c674].Ra();
        }
        if (null != this.ci) {
          this.ci.Ra();
        }
      };
      _0x7ab953.prototype.I = function (_0x4e0944) {
        var _0x48ee71 = _0x46301e(this.bi, _0x4e0944);
        if (!(_0x48ee71 < 0x0)) {
          this.bi[0x0].ei();
          _0x2bdcb6(this.bi, _0x48ee71);
          this.fi();
        }
      };
      _0x7ab953.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x23130e(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x7ab953.prototype.fi = function () {
        var _0x59897c = this.bi[0x0];
        _0x59897c.ii();
        _0x59897c.ji();
        this.ki();
      };
      _0x7ab953.prototype.li = function () {
        return 0x0 != this.bi.length && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x7ab953.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x7ab953;
    }();
    var _0x3bafe2 = function () {
      function _0xb799e8() {
        this.ag = [];
        this.$f = [];
      }
      _0xb799e8.Vg = function (_0x521c84, _0xc343a7) {
        return {
          'bg': _0x521c84,
          'M': _0xc343a7
        };
      };
      _0xb799e8.Wg = function (_0x3deb58, _0x5a2b64) {
        return {
          '_f': _0x3deb58,
          'M': _0x5a2b64
        };
      };
      return _0xb799e8;
    }();
    var _0x12df7c = function () {
      function _0x1cf0a2() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
      }
      _0x1cf0a2.prototype.a = function () {
        this.vi();
      };
      _0x1cf0a2.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x1cf0a2.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x1cf0a2.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x1cf0a2.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png";
      };
      _0x1cf0a2.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x1cf0a2.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x1cf0a2.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x1cf0a2.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x1cf0a2.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x1cf0a2.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x1cf0a2.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x1cf0a2.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x1cf0a2.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x1cf0a2.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x1cf0a2.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x1cf0a2.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x1cf0a2.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x1cf0a2.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x1cf0a2.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x1cf0a2.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x1cf0a2.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x1cf0a2.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x1cf0a2.prototype.V = function (_0x3e2da7) {
        this.ni.push(_0x3e2da7);
        _0x3e2da7();
      };
      _0x1cf0a2.prototype.Pi = function (_0x534a88) {
        this.oi.push(_0x534a88);
        _0x534a88();
      };
      _0x1cf0a2.prototype.Qi = function (_0x1655db) {
        this.pi.push(_0x1655db);
      };
      _0x1cf0a2.prototype.Ch = function (_0x2d84fd, _0x286e6c) {
        var _0x347a6b = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x347a6b) {
          return false;
        }
        for (var _0xafd657 = 0x0; _0xafd657 < _0x347a6b.length; _0xafd657++) {
          var _0x101ca9 = _0x347a6b[_0xafd657];
          if (_0x101ca9.id == _0x2d84fd && _0x101ca9.type === _0x286e6c) {
            return true;
          }
        }
        return false;
      };
      _0x1cf0a2.prototype.P = function () {
        return this.qi;
      };
      _0x1cf0a2.prototype.ea = function () {
        return this.ri;
      };
      _0x1cf0a2.prototype.Q = function (_0x2a1070) {
        var _0x28011e = this;
        if (this.qi) {
          this.Ri(function (_0x2e8560) {
            if (_0x2e8560) {
              var _0x31859f = _0x28011e.zi();
              var _0x16261c = _0x28011e.Ai();
              _0x28011e.si = _0x2e8560;
              _0x3b41e3(_0x28011e.si);
              _0x28011e.Si();
              var _0x38ec71 = _0x28011e.zi();
              var _0x5407db = _0x28011e.Ai();
              if (_0x5407db > 0x1 && _0x5407db != _0x16261c) {
                (window.anApp = _0x3938bb).s.aa.Ti(new _0x917ac3(_0x5407db));
              }
              var _0x4b979d = _0x38ec71 - _0x31859f;
              if (_0x4b979d >= 0x14) {
                (window.anApp = _0x3938bb).s.aa.Ti(new _0x329cf2(_0x4b979d));
              }
            }
            if (_0x2a1070) {
              _0x2a1070();
            }
          });
        }
      };
      _0x1cf0a2.prototype.Ri = function (_0x153bdd) {
        $.get(_0x276ee + "/pub/wuid/" + this.ri + '/getUserData', function (_0x24b573) {
          _0x153bdd(_0x24b573.user_data);
        });
      };
      _0x1cf0a2.prototype.Ui = function (_0x1112fb, _0x2c724e, _0x2867b8) {
        var _0x4ccd42 = this;
        $.get(_0x276ee + '/pub/wuid/' + this.ri + "/buyProperty?id=" + _0x1112fb + "&type=" + _0x2c724e, function (_0x267ded) {
          if (0x4b0 == _0x267ded.code) {
            _0x4ccd42.Q(_0x2867b8);
          } else {
            _0x2867b8();
          }
        }).fail(function () {
          _0x2867b8();
        });
      };
      _0x1cf0a2.prototype.Vi = function () {
        var _0x2e9770 = this;
        this.Wi();
        if ('undefined' == typeof FB) {
          return void this.Xi();
        }
        FB.getLoginStatus(function (_0x1cfa4f) {
          if ("connected" === _0x1cfa4f.status) {
            return void (_0x1cfa4f.authResponse && _0x1cfa4f.authResponse.accessToken ? _0x2e9770.Yi("facebook", "fb_" + _0x1cfa4f.authResponse.accessToken) : _0x2e9770.Xi());
          }
          FB.login(function (_0x2fd258) {
            if ('connected' === _0x2fd258.status && _0x2fd258.authResponse && _0x2fd258.authResponse.accessToken) {
              _0x2e9770.Yi("facebook", "fb_" + _0x2fd258.authResponse.accessToken);
            } else {
              _0x2e9770.Xi();
            }
          });
        });
      };
      _0x1cf0a2.prototype.Zi = function () {
        var _0x2581cf = this;
        this.Wi();
        if (undefined === GoogleAuth) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log('gsi:then');
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var _0x43c69c = GoogleAuth.currentUser.get();
            _0x2581cf.Yi("google", 'gg_' + _0x43c69c.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x577196) {
            if (undefined !== _0x577196.error) {
              console.log("gsi:e: " + _0x577196.error);
              _0x2581cf.Xi();
              return;
            }
            if (_0x577196.isSignedIn()) {
              console.log("gsi:s");
              _0x2581cf.Yi('google', "gg_" + _0x577196.getAuthResponse().id_token);
            } else {
              console.log('gsi:c');
              _0x2581cf.Xi();
            }
          });
        });
      };
      _0x1cf0a2.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x52e6ad = this.ri;
        var _0x4128c9 = this.ti;
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
        _0x23921c(_0x216031.Oe, '', 0x3c);
        switch (_0x4128c9) {
          case 'facebook':
            this.$i();
            break;
          case 'google':
            this._i();
        }
        if (_0x52e6ad !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x1cf0a2.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get(_0x276ee + "/pub/wuid/" + this.ri + '/deleteAccount', function (_0x1df920) {
            if (0x4b0 === _0x1df920.code) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x1cf0a2.prototype.vi = function () {
        console.log('rs');
        var _0x436aa7 = _0x5ce09a(_0x216031.Oe);
        var _0x34a60a = this;
        if ("facebook" == _0x436aa7) {
          console.log("rs:fb");
          (function _0xc23374() {
            if ("undefined" != typeof FB) {
              _0x34a60a.Vi();
            } else {
              setTimeout(_0xc23374, 0x64);
            }
          })();
        } else if ("google" == _0x436aa7) {
          console.log("rs:gg");
          (function _0x4f9a38() {
            if (undefined !== GoogleAuth) {
              _0x34a60a.Zi();
            } else {
              setTimeout(_0x4f9a38, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x1cf0a2.prototype.aj = function () {
        for (var _0x3a4e0c = 0x0; _0x3a4e0c < this.ni.length; _0x3a4e0c++) {
          this.ni[_0x3a4e0c]();
        }
        this.Si();
      };
      _0x1cf0a2.prototype.Si = function () {
        for (var _0x4aecbe = 0x0; _0x4aecbe < this.oi.length; _0x4aecbe++) {
          this.oi[_0x4aecbe]();
        }
        var _0x421633 = this.pi;
        this.pi = [];
        for (var _0xd5bc62 = 0x0; _0xd5bc62 < _0x421633.length; _0xd5bc62++) {
          _0x421633[_0xd5bc62]();
        }
      };
      _0x1cf0a2.prototype.Yi = function (_0x48b1b3, _0x3ade77) {
        var _0x263e21 = this;
        $.get(_0x276ee + "/pub/wuid/" + _0x3ade77 + "/login", function (_0x54db39) {
          if (_0x54db39 && _0x54db39.user_data) {
            checkSubscriptionExpired(_0x54db39.user_data.userId);
            registerUpdatePlayer(_0x54db39.user_data);
            _0x3b41e3(_0x54db39.user_data);
            var _0x3e4771 = this.ri;
            _0x263e21.qi = true;
            _0x263e21.ri = _0x3ade77;
            _0x263e21.si = _0x54db39.user_data;
            _0x263e21.ti = _0x48b1b3;
            _0x23921c(_0x216031.Oe, _0x263e21.ti, 0x3c);
            console.log(_0x263e21);
            showServer2(_0x3938bb);
            showVersionPays(_0x54db39);
            lxpduserId = _0x54db39.user_data.userId;
            $("#userid").text(lxpduserId);
            $('#avatarUrl').attr("src", _0x54db39.user_data.avatarUrl);
            $("#wtr-settings-id").text("ID: " + lxpduserId);
            theoKzObjects.loading = false;
            if (_0x3e4771 !== _0x3ade77) {
              _0x263e21.aj();
            } else {
              _0x263e21.Si();
            }
          } else {
            _0x263e21.Xi();
          }
        }).fail(function () {
          _0x263e21.Xi();
        });
      };
      _0x1cf0a2.prototype.Xi = function () {
        this.Wi();
      };
      _0x1cf0a2.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x1cf0a2.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x1cf0a2;
    }();
    var _0x395281 = function () {
      function _0x3b8a5d() {
        this.cj = {};
        this.cj[_0xcffa2f] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x3103db] = _0x46ab54._b.WHITE;
        this.cj[_0x30b3a6] = [0x0, 0x0];
        this.cj[_0x408ff6] = [0x0, 0x0];
        var _0x311bd3 = _0x46ab54.cc.from(_0x1bc2d8, _0x4845e4, this.cj);
        this.zf = new _0x46ab54.hc(_0x463a2a, _0x311bd3);
      }
      var _0x47d9bf = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1ab359 = 'a2_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x532f6a = atob("dHJhbnNsYXRpb25NYXRyaXg=");
      var _0x59b6ee = atob("cHJvamVjdGlvbk1hdHJpeA==");
      var _0xcffa2f = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x3103db = "u4_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x30b3a6 = 'u5_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x408ff6 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x3b8f07 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x463a2a = new _0x46ab54.gc().addAttribute(_0x47d9bf, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x1ab359, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x1bc2d8 = atob('cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg') + _0x47d9bf + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + _0x1ab359 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x532f6a + atob("O3VuaWZvcm0gbWF0MyA=") + _0x59b6ee + atob("O3ZhcnlpbmcgdmVjMiA=") + _0x3b8f07 + atob('O3ZvaWQgbWFpbigpew==') + _0x3b8f07 + atob("PQ==") + _0x1ab359 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + _0x59b6ee + atob('Kg==') + _0x532f6a + atob("KnZlYzMo") + _0x47d9bf + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
      var _0x4845e4 = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + _0x3b8f07 + atob("O3VuaWZvcm0gdmVjNCA=") + _0xcffa2f + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + _0x3103db + atob("O3VuaWZvcm0gdmVjMiA=") + _0x30b3a6 + atob("O3VuaWZvcm0gdmVjMiA=") + _0x408ff6 + atob('O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9') + _0x3b8f07 + atob("Kg==") + _0x30b3a6 + atob("Kw==") + _0x408ff6 + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + _0xcffa2f + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + _0x3103db + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
      _0x3b8a5d.prototype.Hf = function (_0x58ff4f, _0x2cbd97, _0x2f7fa5, _0x18b8c6) {
        var _0x2cead4 = this.cj[_0xcffa2f];
        _0x2cead4[0x0] = _0x58ff4f;
        _0x2cead4[0x1] = _0x2cbd97;
        _0x2cead4[0x2] = _0x2f7fa5;
        _0x2cead4[0x3] = _0x18b8c6;
      };
      _0x3b8a5d.prototype.Bf = function (_0x3b298e) {
        this.cj[_0x3103db] = _0x3b298e;
      };
      _0x3b8a5d.prototype.Te = function (_0x594901, _0x52e709, _0x515715, _0xe66e47) {
        this.zf.position.x = _0x594901;
        this.zf.position.y = _0x52e709;
        this.zf.scale.x = _0x515715;
        this.zf.scale.y = _0xe66e47;
        var _0xd756fd = this.cj[_0x30b3a6];
        _0xd756fd[0x0] = 0.2520615384615385 * _0x515715;
        _0xd756fd[0x1] = 0.4357063736263738 * _0xe66e47;
        var _0x341b9b = this.cj[_0x408ff6];
        _0x341b9b[0x0] = 0.2520615384615385 * _0x594901;
        _0x341b9b[0x1] = 0.4357063736263738 * _0x52e709;
      };
      return _0x3b8a5d;
    }();
    var _0x421b5d = function () {
      function _0x1232cd() {
        this.jh = new _0x46ab54.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x1232cd.prototype.kh = function (_0x28d6c7) {
        this.jh.texture = _0x28d6c7.Hc;
        this.jh.anchor.set(_0x28d6c7.Lh, _0x28d6c7.Mh);
        this.dj = _0x28d6c7.Nh;
        this.ej = _0x28d6c7.Oh;
      };
      _0x1232cd.prototype.oh = function (_0x19f4d4) {
        this.jh.width = _0x19f4d4 * this.dj;
        this.jh.height = _0x19f4d4 * this.ej;
      };
      _0x1232cd.prototype.fj = function (_0x5ce16c) {
        this.jh.rotation = _0x5ce16c;
      };
      _0x1232cd.prototype.nh = function (_0x23ba4e, _0x5cfa1c) {
        this.jh.position.set(_0x23ba4e, _0x5cfa1c);
      };
      _0x1232cd.prototype.Mg = function (_0x378e90) {
        this.jh.visible = _0x378e90;
      };
      _0x1232cd.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x1232cd.prototype.qh = function (_0x53b5a3) {
        this.jh.alpha = _0x53b5a3;
      };
      _0x1232cd.prototype.Mf = function () {
        return this.jh;
      };
      _0x1232cd.prototype.ih = function () {
        _0x16c2d8(this.jh);
      };
      return _0x1232cd;
    }();
    var _0xbe8af6 = function () {
      function _0x4da71b(_0x182f77) {
        this.fb = _0x182f77;
        this.Mb = new _0xbe8af6.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(0x190);
        this.mj = new Float32Array(0x190);
        this.nj = new Float32Array(0x190);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      _0x4da71b.prototype.Kb = function () {
        if (null != this.pj) {
          _0x16c2d8(this.pj.Rf);
        }
        if (null != this.qj) {
          _0x16c2d8(this.qj);
        }
      };
      _0x4da71b.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x4da71b.prototype.Fg = function (_0x47e3e7) {
        this.Mb = _0x47e3e7;
        this.rj(this.Hb);
      };
      _0x4da71b.prototype.Mg = function (_0x4d481c) {
        var _0x2daf47 = this.Hb;
        this.Hb = _0x4d481c;
        this.rj(_0x2daf47);
      };
      _0x4da71b.prototype.Ig = function (_0x168bb0) {
        this.M = 0x32 * _0x168bb0;
        var _0x109c08 = _0x168bb0;
        if (_0x168bb0 > this.fb.cf) {
          _0x109c08 = Math.atan((_0x168bb0 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x17dbc6 = Math.sqrt(0x4 * Math.pow(0x5 * _0x109c08, 0.707106781186548) + 0x19);
        var _0x4c907d = Math.min(0xc8, Math.max(0x3, 0x5 * (_0x17dbc6 - 0x5) + 0x1));
        var _0x57d63d = this.kj;
        this.Db = 0.025 * (0x5 + 0.9 * _0x17dbc6);
        this.kj = Math.floor(_0x4c907d);
        this.ij = _0x4c907d - this.kj;
        if (_0x57d63d > 0x0 && _0x57d63d < this.kj) {
          var _0xc67fd = this.lj[0x2 * _0x57d63d - 0x2];
          var _0x154141 = this.lj[0x2 * _0x57d63d - 0x1];
          var _0x4e7be6 = this.mj[0x2 * _0x57d63d - 0x2];
          var _0x3bcc30 = this.mj[0x2 * _0x57d63d - 0x1];
          var _0x358904 = this.nj[0x2 * _0x57d63d - 0x2];
          var _0x12d5d4 = this.nj[0x2 * _0x57d63d - 0x1];
          for (var _0x5b92be = _0x57d63d; _0x5b92be < this.kj; _0x5b92be++) {
            this.lj[0x2 * _0x5b92be] = _0xc67fd;
            this.lj[0x2 * _0x5b92be + 0x1] = _0x154141;
            this.mj[0x2 * _0x5b92be] = _0x4e7be6;
            this.mj[0x2 * _0x5b92be + 0x1] = _0x3bcc30;
            this.nj[0x2 * _0x5b92be] = _0x358904;
            this.nj[0x2 * _0x5b92be + 0x1] = _0x12d5d4;
          }
        }
      };
      _0x4da71b.prototype.Lg = function (_0x74ee5e, _0x554d87) {
        this.kj = _0x554d87;
        for (var _0x5a78f1 = 0x0; _0x5a78f1 < this.kj; _0x5a78f1++) {
          this.lj[0x2 * _0x5a78f1] = this.mj[0x2 * _0x5a78f1] = this.nj[0x2 * _0x5a78f1] = _0x74ee5e();
          this.lj[0x2 * _0x5a78f1 + 0x1] = this.mj[0x2 * _0x5a78f1 + 0x1] = this.nj[0x2 * _0x5a78f1 + 0x1] = _0x74ee5e();
        }
      };
      _0x4da71b.prototype.Kg = function (_0x47e7bb, _0x2b2263, _0x3d2628) {
        this.hj = _0x3d2628;
        for (var _0x59dfa0 = 0x0; _0x59dfa0 < this.kj; _0x59dfa0++) {
          this.lj[0x2 * _0x59dfa0] = this.mj[0x2 * _0x59dfa0];
          this.lj[0x2 * _0x59dfa0 + 0x1] = this.mj[0x2 * _0x59dfa0 + 0x1];
        }
        var _0xaa9ba6 = _0x47e7bb - this.mj[0x0];
        var _0x25dad9 = _0x2b2263 - this.mj[0x1];
        this.sj(_0xaa9ba6, _0x25dad9, this.kj, this.mj);
      };
      _0x4da71b.prototype.sj = function (_0x1d37dd, _0x3679db, _0x18f991, _0x14ded1) {
        var _0xdd0147 = Math.hypot(_0x1d37dd, _0x3679db);
        if (!(_0xdd0147 <= 0x0)) {
          var _0x593ed5 = _0x14ded1[0x0];
          var _0x42a998 = undefined;
          _0x14ded1[0x0] += _0x1d37dd;
          var _0xb302ec = _0x14ded1[0x1];
          var _0x4c1b18 = undefined;
          _0x14ded1[0x1] += _0x3679db;
          var _0x173106 = this.Db / (this.Db + _0xdd0147);
          var _0x1cc7cb = 0x1 - 0x2 * _0x173106;
          var _0x19b6e8 = 0x1;
          for (var _0x4f024b = _0x18f991 - 0x1; _0x19b6e8 < _0x4f024b; _0x19b6e8++) {
            _0x42a998 = _0x14ded1[0x2 * _0x19b6e8];
            _0x14ded1[0x2 * _0x19b6e8] = _0x14ded1[0x2 * _0x19b6e8 - 0x2] * _0x1cc7cb + (_0x42a998 + _0x593ed5) * _0x173106;
            _0x593ed5 = _0x42a998;
            _0x4c1b18 = _0x14ded1[0x2 * _0x19b6e8 + 0x1];
            _0x14ded1[0x2 * _0x19b6e8 + 0x1] = _0x14ded1[0x2 * _0x19b6e8 - 0x1] * _0x1cc7cb + (_0x4c1b18 + _0xb302ec) * _0x173106;
            _0xb302ec = _0x4c1b18;
          }
          _0x1cc7cb = 0x1 - 0x2 * (_0x173106 = this.ij * this.Db / (this.ij * this.Db + _0xdd0147));
          _0x14ded1[0x2 * _0x18f991 - 0x2] = _0x14ded1[0x2 * _0x18f991 - 0x4] * _0x1cc7cb + (_0x14ded1[0x2 * _0x18f991 - 0x2] + _0x593ed5) * _0x173106;
          _0x14ded1[0x2 * _0x18f991 - 0x1] = _0x14ded1[0x2 * _0x18f991 - 0x3] * _0x1cc7cb + (_0x14ded1[0x2 * _0x18f991 - 0x1] + _0xb302ec) * _0x173106;
        }
      };
      _0x4da71b.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x4da71b.prototype.Hg = function (_0x19632f, _0x4d73e4) {
        var _0x4e2599 = 0xf4240;
        var _0x3e9c5c = _0x19632f;
        var _0x2c87bb = _0x4d73e4;
        for (var _0x4d01f1 = 0x0; _0x4d01f1 < this.kj; _0x4d01f1++) {
          var _0x4848b7 = this.nj[0x2 * _0x4d01f1];
          var _0x17568a = this.nj[0x2 * _0x4d01f1 + 0x1];
          var _0x1c93c2 = Math.hypot(_0x19632f - _0x4848b7, _0x4d73e4 - _0x17568a);
          if (_0x1c93c2 < _0x4e2599) {
            _0x4e2599 = _0x1c93c2;
            _0x3e9c5c = _0x4848b7;
            _0x2c87bb = _0x17568a;
          }
        }
        return {
          'x': _0x3e9c5c,
          'y': _0x2c87bb,
          'distance': _0x4e2599
        };
      };
      _0x4da71b.prototype.vb = function (_0x3cb86b) {
        this.oj = _0x3cb86b;
      };
      _0x4da71b.prototype.Fb = function (_0x144dc1, _0x1e1da1) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x144dc1 / 0x190 * Math.PI) : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x144dc1 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb + _0x1e1da1 * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x144dc1 / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb - _0x1e1da1 * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x1e1da1 * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x1e1da1 * 0.0025);
        if (null != this.pj) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (null != this.qj) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x4da71b.prototype.Gb = function (_0x3824ce, _0x12fcc3, _0x1506f5, _0x3e1676) {
        if (this.Hb && this.Ib) {
          var _0x9437e = Math.pow(0.11112, _0x12fcc3 / 0x5f);
          for (var _0x2690aa = 0x0; _0x2690aa < this.kj; _0x2690aa++) {
            var _0x4c0b38 = this.lj[0x2 * _0x2690aa] * (0x1 - _0x1506f5) + this.mj[0x2 * _0x2690aa] * _0x1506f5;
            var _0x1cfbfb = this.lj[0x2 * _0x2690aa + 0x1] * (0x1 - _0x1506f5) + this.mj[0x2 * _0x2690aa + 0x1] * _0x1506f5;
            this.nj[0x2 * _0x2690aa] = _0x4c0b38 * (0x1 - _0x9437e) + this.nj[0x2 * _0x2690aa] * _0x9437e;
            this.nj[0x2 * _0x2690aa + 0x1] = _0x1cfbfb * (0x1 - _0x9437e) + this.nj[0x2 * _0x2690aa + 0x1] * _0x9437e;
          }
        }
        if (null != this.pj && this.Hb) {
          this.pj.tj(this, _0x3824ce, _0x12fcc3, _0x3e1676);
        }
        if (null != this.qj) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - 0x3 * this.Db;
        }
      };
      _0x4da71b.prototype.rj = function (_0x2a6e4d) {
        if (this.Hb) {
          if (!_0x2a6e4d) {
            this.uj();
          }
        } else {
          if (null != this.pj) {
            _0x16c2d8(this.pj.Rf);
          }
          if (null != this.qj) {
            _0x16c2d8(this.qj);
          }
        }
      };
      _0x4da71b.prototype.uj = function () {
        var _0x3d9a34 = window.anApp = _0x3938bb;
        if (null == this.pj) {
          this.pj = new _0x18b979();
        } else {
          _0x16c2d8(this.pj.Rf);
        }
        this.pj.hh(_0x3d9a34.o.fb.af, _0x3d9a34.p.Dc().ed(this.Mb.cg), _0x3d9a34.p.Dc().dd(this.Mb.dg), _0x3d9a34.p.Dc().fd(this.Mb.Bg), _0x3d9a34.p.Dc().gd(this.Mb.Cg), _0x3d9a34.p.Dc().hd(this.Mb.Dg), _0x3d9a34.p.Dc().jd(this.Mb.Eg));
        if (null == this.qj) {
          this.qj = new _0x34c23e('');
          this.qj.style.fontFamily = fonts[currentFontIndex];
          this.qj.anchor.set(0.5);
        } else {
          _0x16c2d8(this.qj);
        }
        this.qj.style.fontSize = 0xe;
        this.qj.style.fill = _0x3d9a34.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x4da71b.Config = function () {
        function _0x53e1ad() {
          this.Lb = 0x0;
          this.cg = _0x552076.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x53e1ad;
      }();
      return _0x4da71b;
    }();
    var _0x34c23e = _0x499ed3(_0x46ab54.fc, function (_0x217300, _0x47e9f8, _0x5ba277) {
      _0x46ab54.fc.call(this, _0x217300, _0x47e9f8, _0x5ba277);
      this.If = {
        'x': 0x0,
        'y': 0x0
      };
    });
    var _0x18b979 = function () {
      function _0x5d5c36() {
        this.Rf = new _0x46ab54.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x18b37a();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x421b5d(), new _0x421b5d());
        for (var _0x3626e5 = 0x1; _0x3626e5 < 0x31d; _0x3626e5++) {
          this.xj[_0x3626e5] = this.yj(_0x3626e5, new _0x421b5d(), new _0x421b5d());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x18b37a;
      var _0x36128d = 0.1 * Math.PI;
      var _0x4601bf = -0.06640625;
      var _0x4fb578 = -0.03515625;
      var _0x2cc7fd = -0.0625;
      var _0x213348 = 0x3 * _0x4601bf + 0.84375;
      var _0x18cf77 = 0.2578125 - 0x3 * _0x4601bf;
      var _0x94c370 = _0x4601bf + _0x4fb578;
      var _0x4d2ee1 = _0x2cc7fd + _0x2cc7fd;
      var _0x176332 = 0x3 * _0x4fb578 + 0.2578125;
      var _0x5ee73b = 0.84375 - 0x3 * _0x4fb578;
      var _0x5e87a3 = _0x4fb578 + _0x4601bf;
      _0x5d5c36.prototype.yj = function (_0x428a73, _0x4363f1, _0x2409ce) {
        var _0x577d0a = new _0x1994a5(_0x4363f1, _0x2409ce);
        _0x4363f1.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x428a73) + 0x1 + 0x3);
        _0x2409ce.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x428a73) - 0x2 + 0x3);
        return _0x577d0a;
      };
      _0x5d5c36.prototype.hh = function (_0x3227e9, _0x57e602, _0x1c0d90, _0x2ae1ca, _0x328bd1, _0x2de4c7, _0x416fb1) {
        var _0xb0c1a = _0x1c0d90.Zc;
        var _0x553e24 = _0x3227e9 == 0x10 ? _0x57e602.bd.$c : _0x1c0d90.$c;
        if (_0xb0c1a.length > 0x0 && _0x553e24.length > 0x0) {
          for (var _0x2baa0a = 0x0; _0x2baa0a < this.xj.length; _0x2baa0a++) {
            this.xj[_0x2baa0a].Nf.kh(_0xb0c1a[_0x2baa0a % _0xb0c1a.length]);
            this.xj[_0x2baa0a].Pf.kh(_0x553e24[_0x2baa0a % _0x553e24.length]);
          }
        }
        this.vj.hh(_0x2ae1ca, _0x328bd1, _0x2de4c7, _0x416fb1);
      };
      (_0x18b37a = _0x499ed3(_0x46ab54.Zb, function () {
        _0x46ab54.Zb.call(this);
        this.sortableChildren = true;
        this.Cj = [];
        this.Dj = [];
        this.Ej = [];
        this.Fj = [];
        this.Gj = new _0x46ab54.Zb();
        this.Hj = [];
        for (var _0x886051 = 0x0; _0x886051 < 0x4; _0x886051++) {
          var _0x1ec5b6 = new _0x421b5d();
          _0x1ec5b6.kh((window.anApp = _0x3938bb).q.Ph);
          this.Gj.addChild(_0x1ec5b6.jh);
          this.Hj.push(_0x1ec5b6);
        }
        this.Gj.zIndex = 0.0011;
        this.addChild(this.Gj);
        this.Ij();
        this.Jj = new _0x421b5d();
        this.Jj.kh((window.anApp = _0x3938bb).q.Qh);
        this.Jj.jh.zIndex = 0.001;
        this.addChild(this.Jj.jh);
        this.Kj();
        this.flx = new _0x421b5d();
        this.flx.kh((window.anApp = _0x3938bb).q.Rh);
        this.flx.jh.zIndex = 0.001;
        this.addChild(this.flx.jh);
        this.flexx();
        this.xxx5 = new _0x421b5d();
        this.xxx5.kh((window.anApp = _0x3938bb).q.X_x5);
        this.xxx5.jh.zIndex = 0.001;
        this.addChild(this.xxx5.jh);
        this.xXx5();
        this.xxx2 = new _0x421b5d();
        this.xxx2.kh((window.anApp = _0x3938bb).q.X_x2);
        this.xxx2.jh.zIndex = 0.001;
        this.addChild(this.xxx2.jh);
        this.xXx2();
        this.xxx10 = new _0x421b5d();
        this.xxx10.kh((window.anApp = _0x3938bb).q.X_x10);
        this.xxx10.jh.zIndex = 0.001;
        this.addChild(this.xxx10.jh);
        this.xXx10();
        this.xxxLupatype = new _0x421b5d();
        this.xxxLupatype.kh((window.anApp = _0x3938bb).q.X_xxlupa);
        this.xxxLupatype.jh.zIndex = 0.001;
        this.addChild(this.xxxLupatype.jh);
        this.xXxLupaZ();
        this.xxxEmojiType = new _0x421b5d();
        this.xxxEmojiType.kh((window.anApp = _0x3938bb).q.emoji);
        this.xxxEmojiType.jh.zIndex = 0.001;
        this.addChild(this.xxxEmojiType.jh);
        this.x_emoji();
      })).prototype.hh = function (_0x28693d, _0xc8c7e7, _0xb60ca2, _0x33faf3) {
        this.Lj(0.002, this.Cj, _0x28693d.Zc);
        this.Lj(0.003, this.Dj, _0xc8c7e7.Zc);
        this.Lj(0.004, this.Fj, _0x33faf3.Zc);
        this.Lj(0.005, this.Ej, _0xb60ca2.Zc);
      };
      _0x18b37a.prototype.Lj = function (_0x546ae3, _0x1ae6f5, _0x4bca3e) {
        for (; _0x4bca3e.length > _0x1ae6f5.length;) {
          var _0x5e5bbe = new _0x421b5d();
          _0x1ae6f5.push(_0x5e5bbe);
          this.addChild(_0x5e5bbe.Mf());
        }
        for (; _0x4bca3e.length < _0x1ae6f5.length;) {
          _0x1ae6f5.pop().ih();
        }
        var _0x525ebd = _0x546ae3;
        for (var _0x2f8b9d = 0x0; _0x2f8b9d < _0x4bca3e.length; _0x2f8b9d++) {
          _0x525ebd += 0.0001;
          var _0x3ae69e = _0x1ae6f5[_0x2f8b9d];
          _0x3ae69e.kh(_0x4bca3e[_0x2f8b9d]);
          _0x3ae69e.jh.zIndex = _0x525ebd;
        }
      };
      _0x18b37a.prototype.mh = function (_0x5d1383, _0x369b2d, _0x1881e4, _0x48b672) {
        this.visible = true;
        this.position.set(_0x5d1383, _0x369b2d);
        this.rotation = _0x48b672;
        for (var _0x22ab7b = 0x0; _0x22ab7b < this.Cj.length; _0x22ab7b++) {
          this.Cj[_0x22ab7b].oh(_0x1881e4);
        }
        for (var _0x5d5350 = 0x0; _0x5d5350 < this.Dj.length; _0x5d5350++) {
          this.Dj[_0x5d5350].oh(_0x1881e4);
        }
        for (var _0x3b7d1c = 0x0; _0x3b7d1c < this.Ej.length; _0x3b7d1c++) {
          this.Ej[_0x3b7d1c].oh(_0x1881e4);
        }
        for (var _0x31e12a = 0x0; _0x31e12a < this.Fj.length; _0x31e12a++) {
          this.Fj[_0x31e12a].oh(_0x1881e4);
        }
      };
      _0x18b37a.prototype.lh = function () {
        this.visible = false;
      };
      _0x18b37a.prototype.Mj = function (_0x40d6ba, _0x18f375, _0x4d7240, _0x2a2d7d) {
        this.Gj.visible = true;
        var _0x117388 = _0x4d7240 / 0x3e8;
        var _0x191666 = 0x1 / this.Hj.length;
        for (var _0x3388f7 = 0x0; _0x3388f7 < this.Hj.length; _0x3388f7++) {
          var _0x10bed6 = 0x1 - (_0x117388 + _0x191666 * _0x3388f7) % 0x1;
          this.Hj[_0x3388f7].jh.alpha = 0x1 - _0x10bed6;
          this.Hj[_0x3388f7].oh(_0x18f375 * (0.5 + 4.5 * _0x10bed6));
        }
      };
      _0x18b37a.prototype.Ij = function () {
        this.Gj.visible = false;
      };
      _0x18b37a.prototype.Nj = function (_0x676a1f, _0x258d2f, _0x4c4a8e, _0xdfea35) {
        this.Jj.jh.visible = true;
        this.Jj.jh.alpha = (_0x676a1f.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x676a1f.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0xdfea35 * 0.0025) : Math.max(_0x676a1f.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0xdfea35 * 0.0025);
        this.Jj.oh(_0x258d2f);
      };
      _0x18b37a.prototype.Nflex = function (_0x13e3b1, _0x29ff25, _0x5b327d, _0x68d742) {
        this.flx.jh.visible = true;
        this.flx.oh(_0x29ff25);
      };
      _0x18b37a.prototype.flexx = function () {
        this.flx.jh.visible = false;
      };
      _0x18b37a.prototype.ActiveX5 = function (_0x553642, _0x3210c3, _0x536875, _0x4aab9c) {
        this.xxx5.jh.visible = true;
        this.xxx5.jh.alpha = (_0x553642.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x553642.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x4aab9c * 0.0025) : Math.max(_0x553642.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x4aab9c * 0.0025);
        this.xxx5.oh(_0x3210c3);
      };
      _0x18b37a.prototype.xXx5 = function () {
        this.xxx5.jh.visible = false;
      };
      _0x18b37a.prototype.ActiveEmoji = function (_0x16e22d, _0x4156a1, _0x5b27a4, _0x310a51) {
        this.xxxEmojiType.jh.visible = true;
        this.xxxEmojiType.oh(_0x4156a1);
      };
      _0x18b37a.prototype.x_emoji = function () {
        this.xxxEmojiType.jh.visible = false;
      };
      _0x18b37a.prototype.ActiveX2 = function (_0x12619b, _0xfcb263, _0x22e126, _0x4ff6ed) {
        this.xxx2.jh.visible = true;
        this.xxx2.jh.alpha = (_0x12619b.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x12619b.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x4ff6ed * 0.0025) : Math.max(_0x12619b.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x4ff6ed * 0.0025);
        this.xxx2.oh(_0xfcb263);
      };
      _0x18b37a.prototype.xXx2 = function () {
        this.xxx2.jh.visible = false;
      };
      _0x18b37a.prototype.ActiveX10 = function (_0x5e3a33, _0x31b1e1, _0x3a98a1, _0x1701f2) {
        this.xxx10.jh.visible = true;
        this.xxx10.jh.alpha = (_0x5e3a33.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x5e3a33.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x1701f2 * 0.0025) : Math.max(_0x5e3a33.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x1701f2 * 0.0025);
        this.xxx10.oh(_0x31b1e1);
      };
      _0x18b37a.prototype.xXx10 = function () {
        this.xxx10.jh.visible = false;
      };
      _0x18b37a.prototype.ActiveZlupa = function (_0x513fc9, _0x5893ca, _0x274558, _0x3e5a7d) {
        this.xxxLupatype.jh.visible = true;
        this.xxxLupatype.jh.alpha = (_0x513fc9.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x513fc9.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x3e5a7d * 0.0025) : Math.max(_0x513fc9.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x3e5a7d * 0.0025);
        this.xxxLupatype.oh(_0x5893ca);
      };
      _0x18b37a.prototype.xXxLupaZ = function () {
        this.xxxLupatype.jh.visible = false;
      };
      _0x18b37a.prototype.Kj = function () {
        this.Jj.jh.visible = false;
      };
      _0x5d5c36.prototype.Oj = function (_0x417b8b) {
        return this.Aj + this.Bj * Math.sin(_0x417b8b * _0x36128d - this.zj);
      };
      _0x5d5c36.prototype.tj = function (_0x1e3b73, _0x8e01d9, _0x2a5a77, _0x3bbbfe) {
        var _0x119b56;
        var _0x1dc0aa;
        var _0xcc807;
        var _0x34ea70;
        var _0x347257;
        var _0x161683;
        var _0x1d4470;
        var _0x58e4e3;
        var _0x5bf68c = 0x2 * _0x1e3b73.Db;
        var _0x48ec0f = _0x1e3b73.nj;
        var _0x1dc912 = _0x1e3b73.kj;
        var _0x29ae1b = 0x4 * _0x1dc912 - 0x3;
        this.zj = _0x8e01d9 / 0x190 * Math.PI;
        this.Aj = 1.5 * _0x5bf68c;
        this.Bj = 0.1 * _0x5bf68c * _0x1e3b73.jj;
        if (_0x3bbbfe(_0x1dc0aa = _0x48ec0f[0x0], _0x161683 = _0x48ec0f[0x1])) {
          _0xcc807 = _0x48ec0f[0x2];
          _0x1d4470 = _0x48ec0f[0x3];
          _0x34ea70 = _0x48ec0f[0x4];
          var _0x1c0360 = Math.atan2((_0x58e4e3 = _0x48ec0f[0x5]) + 0x2 * _0x161683 - 0x3 * _0x1d4470, _0x34ea70 + 0x2 * _0x1dc0aa - 0x3 * _0xcc807);
          this.vj.mh(_0x1dc0aa, _0x161683, _0x5bf68c, _0x1c0360);
          this.xj[0x0].mh(_0x1dc0aa, _0x161683, _0x5bf68c, this.Oj(0x0), _0x1c0360);
          this.xj[0x1].mh(_0x213348 * _0x1dc0aa + _0x18cf77 * _0xcc807 + _0x94c370 * _0x34ea70, _0x213348 * _0x161683 + _0x18cf77 * _0x1d4470 + _0x94c370 * _0x58e4e3, _0x5bf68c, this.Oj(0x1), _0x1994a5.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x1dc0aa + 0.75 * _0xcc807 + _0x4d2ee1 * _0x34ea70, 0.375 * _0x161683 + 0.75 * _0x1d4470 + _0x4d2ee1 * _0x58e4e3, _0x5bf68c, this.Oj(0x2), _0x1994a5.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x176332 * _0x1dc0aa + _0x5ee73b * _0xcc807 + _0x5e87a3 * _0x34ea70, _0x176332 * _0x161683 + _0x5ee73b * _0x1d4470 + _0x5e87a3 * _0x58e4e3, _0x5bf68c, this.Oj(0x3), _0x1994a5.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0xd82bd = 0x4;
        var _0x3f9749 = 0x2;
        for (var _0x22d86f = 0x2 * _0x1dc912 - 0x4; _0x3f9749 < _0x22d86f; _0x3f9749 += 0x2) {
          if (_0x3bbbfe(_0x1dc0aa = _0x48ec0f[_0x3f9749], _0x161683 = _0x48ec0f[_0x3f9749 + 0x1])) {
            _0x119b56 = _0x48ec0f[_0x3f9749 - 0x2];
            _0x347257 = _0x48ec0f[_0x3f9749 - 0x1];
            _0xcc807 = _0x48ec0f[_0x3f9749 + 0x2];
            _0x1d4470 = _0x48ec0f[_0x3f9749 + 0x3];
            _0x34ea70 = _0x48ec0f[_0x3f9749 + 0x4];
            _0x58e4e3 = _0x48ec0f[_0x3f9749 + 0x5];
            this.xj[_0xd82bd].mh(_0x1dc0aa, _0x161683, _0x5bf68c, this.Oj(_0xd82bd), _0x1994a5.angleBetween(this.xj[_0xd82bd - 0x1], this.xj[_0xd82bd + 0x1]));
            _0xd82bd++;
            this.xj[_0xd82bd].mh(_0x4601bf * _0x119b56 + 0.84375 * _0x1dc0aa + 0.2578125 * _0xcc807 + _0x4fb578 * _0x34ea70, _0x4601bf * _0x347257 + 0.84375 * _0x161683 + 0.2578125 * _0x1d4470 + _0x4fb578 * _0x58e4e3, _0x5bf68c, this.Oj(_0xd82bd), _0x1994a5.angleBetween(this.xj[_0xd82bd - 0x1], this.xj[_0xd82bd + 0x1]));
            _0xd82bd++;
            this.xj[_0xd82bd].mh(_0x2cc7fd * _0x119b56 + 0.5625 * _0x1dc0aa + 0.5625 * _0xcc807 + _0x2cc7fd * _0x34ea70, _0x2cc7fd * _0x347257 + 0.5625 * _0x161683 + 0.5625 * _0x1d4470 + _0x2cc7fd * _0x58e4e3, _0x5bf68c, this.Oj(_0xd82bd), _0x1994a5.angleBetween(this.xj[_0xd82bd - 0x1], this.xj[_0xd82bd + 0x1]));
            _0xd82bd++;
            this.xj[_0xd82bd].mh(_0x4fb578 * _0x119b56 + 0.2578125 * _0x1dc0aa + 0.84375 * _0xcc807 + _0x4601bf * _0x34ea70, _0x4fb578 * _0x347257 + 0.2578125 * _0x161683 + 0.84375 * _0x1d4470 + _0x4601bf * _0x58e4e3, _0x5bf68c, this.Oj(_0xd82bd), _0x1994a5.angleBetween(this.xj[_0xd82bd - 0x1], this.xj[_0xd82bd + 0x1]));
            _0xd82bd++;
          } else {
            this.xj[_0xd82bd].lh();
            _0xd82bd++;
            this.xj[_0xd82bd].lh();
            _0xd82bd++;
            this.xj[_0xd82bd].lh();
            _0xd82bd++;
            this.xj[_0xd82bd].lh();
            _0xd82bd++;
          }
        }
        if (_0x3bbbfe(_0x1dc0aa = _0x48ec0f[0x2 * _0x1dc912 - 0x4], _0x161683 = _0x48ec0f[0x2 * _0x1dc912 - 0x3])) {
          _0x119b56 = _0x48ec0f[0x2 * _0x1dc912 - 0x6];
          _0x347257 = _0x48ec0f[0x2 * _0x1dc912 - 0x5];
          _0xcc807 = _0x48ec0f[0x2 * _0x1dc912 - 0x2];
          _0x1d4470 = _0x48ec0f[0x2 * _0x1dc912 - 0x1];
          this.xj[_0x29ae1b - 0x5].mh(_0x1dc0aa, _0x161683, _0x5bf68c, this.Oj(_0x29ae1b - 0x5), _0x1994a5.angleBetween(this.xj[_0x29ae1b - 0x6], this.xj[_0x29ae1b - 0x4]));
          this.xj[_0x29ae1b - 0x4].mh(_0x5e87a3 * _0x119b56 + _0x5ee73b * _0x1dc0aa + _0x176332 * _0xcc807, _0x5e87a3 * _0x347257 + _0x5ee73b * _0x161683 + _0x176332 * _0x1d4470, _0x5bf68c, this.Oj(_0x29ae1b - 0x4), _0x1994a5.angleBetween(this.xj[_0x29ae1b - 0x5], this.xj[_0x29ae1b - 0x3]));
          this.xj[_0x29ae1b - 0x3].mh(_0x4d2ee1 * _0x119b56 + 0.75 * _0x1dc0aa + 0.375 * _0xcc807, _0x4d2ee1 * _0x347257 + 0.75 * _0x161683 + 0.375 * _0x1d4470, _0x5bf68c, this.Oj(_0x29ae1b - 0x3), _0x1994a5.angleBetween(this.xj[_0x29ae1b - 0x4], this.xj[_0x29ae1b - 0x2]));
          this.xj[_0x29ae1b - 0x2].mh(_0x94c370 * _0x119b56 + _0x18cf77 * _0x1dc0aa + _0x213348 * _0xcc807, _0x94c370 * _0x347257 + _0x18cf77 * _0x161683 + _0x213348 * _0x1d4470, _0x5bf68c, this.Oj(_0x29ae1b - 0x2), _0x1994a5.angleBetween(this.xj[_0x29ae1b - 0x3], this.xj[_0x29ae1b - 0x1]));
          this.xj[_0x29ae1b - 0x1].mh(_0xcc807, _0x1d4470, _0x5bf68c, this.Oj(_0x29ae1b - 0x1), _0x1994a5.angleBetween(this.xj[_0x29ae1b - 0x2], this.xj[_0x29ae1b - 0x1]));
        } else {
          this.xj[_0x29ae1b - 0x5].lh();
          this.xj[_0x29ae1b - 0x4].lh();
          this.xj[_0x29ae1b - 0x3].lh();
          this.xj[_0x29ae1b - 0x2].lh();
          this.xj[_0x29ae1b - 0x1].lh();
        }
        if (0x0 == this.wj && _0x29ae1b > 0x0) {
          this.Rf.addChild(this.vj);
        }
        for (this.wj > 0x0 && 0x0 == _0x29ae1b && _0x16c2d8(this.vj); this.wj < _0x29ae1b;) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        for (; this.wj > _0x29ae1b;) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        if (theoKzObjects.emoji && _0x1e3b73 && _0x1e3b73.Mb && _0x1e3b73.Mb.Mb) {
          this.vj.ActiveEmoji(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.x_emoji();
        }
        var _0x5297a3 = _0x1e3b73.Ff[_0xe87f7d.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && null != _0x5297a3 && _0x5297a3.sc) {
          this.vj.Mj(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.Ij();
        }
        var _0x1ab677 = _0x1e3b73.Ff[_0xe87f7d.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && null != _0x1ab677 && _0x1ab677.sc) {
          this.vj.Nj(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.Kj();
        }
        var _0x35040e = _0x1e3b73.Ff[_0xe87f7d.FLEXIBLE_TYPE];
        if (true && this.xj[0x0].gj() && null != _0x35040e && _0x35040e.sc) {
          this.vj.Nflex(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.flexx();
        }
        var _0x10ff68 = _0x1e3b73.Ff[_0xe87f7d.X5_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x10ff68 && _0x10ff68.sc) {
          this.vj.ActiveX5(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.xXx5();
        }
        var _0x245a9f = _0x1e3b73.Ff[_0xe87f7d.X2_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x245a9f && _0x245a9f.sc) {
          this.vj.ActiveX2(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.xXx2();
        }
        var _0x2a209f = _0x1e3b73.Ff[_0xe87f7d.X10_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x2a209f && _0x2a209f.sc) {
          this.vj.ActiveX10(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.xXx10();
        }
        var _0x249a5f = _0x1e3b73.Ff[_0xe87f7d.ZOOM_TYPE];
        if (false && this.xj[0x0].gj() && null != _0x249a5f && _0x249a5f.sc) {
          this.vj.ActiveZlupa(_0x1e3b73, _0x5bf68c, _0x8e01d9, _0x2a5a77);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0x1994a5 = function () {
        function _0x1db6de(_0x5a3d59, _0x544f3c) {
          this.Nf = _0x5a3d59;
          this.Nf.Mg(false);
          this.Pf = _0x544f3c;
          this.Pf.Mg(false);
        }
        _0x1db6de.prototype.mh = function (_0x46a919, _0x4d8b71, _0x390080, _0x31967f, _0x21e453) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x46a919, _0x4d8b71);
          this.Nf.oh(_0x390080);
          this.Nf.fj(_0x21e453);
          this.Pf.Mg(true);
          this.Pf.nh(_0x46a919, _0x4d8b71);
          this.Pf.oh(_0x31967f);
          this.Pf.fj(_0x21e453);
        };
        _0x1db6de.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x1db6de.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x1db6de.angleBetween = function (_0x32cef1, _0x437994) {
          return Math.atan2(_0x32cef1.Nf.jh.position.y - _0x437994.Nf.jh.position.y, _0x32cef1.Nf.jh.position.x - _0x437994.Nf.jh.position.x);
        };
        return _0x1db6de;
      }();
      return _0x5d5c36;
    }();
    var _0x2cf077 = function () {
      function _0xc3eec8(_0x549f95) {
        this.se = _0x549f95;
        this.te = _0x549f95.get()[0x0];
        this.ue = new _0x46ab54.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x18b979();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x2f1c95 = this;
        (window.anApp = _0x3938bb).p.ca(function () {
          if ((window.anApp = _0x3938bb).p.W()) {
            _0x2f1c95.Fb();
          }
        });
      }
      _0xc3eec8.prototype.Fb = function () {
        var _0x2b091a = window.anApp = _0x3938bb;
        this.Pj.hh(0x0, null, _0x2b091a.p.Dc().dd(this.rh), _0x2b091a.p.Dc().fd(this.sh), _0x2b091a.p.Dc().gd(this.th), _0x2b091a.p.Dc().hd(this.uh), _0x2b091a.p.Dc().jd(this.vh));
      };
      _0xc3eec8.prototype.Le = function (_0x442e02) {
        this.sc = _0x442e02;
      };
      _0xc3eec8.prototype.ak = function (_0x27d380, _0x54dfae, _0x1aea2f) {
        this.rh = _0x27d380;
        this.Sj = _0x54dfae;
        this.Xj = _0x1aea2f;
        this.Fb();
      };
      _0xc3eec8.prototype.bk = function (_0x690b85, _0x112e3e, _0x33d6f3) {
        this.sh = _0x690b85;
        this.Tj = _0x112e3e;
        this.Yj = _0x33d6f3;
        this.Fb();
      };
      _0xc3eec8.prototype.ck = function (_0x3bbc33, _0x40c337, _0x108047) {
        this.th = _0x3bbc33;
        this.Uj = _0x40c337;
        this.Zj = _0x108047;
        this.Fb();
      };
      _0xc3eec8.prototype.dk = function (_0x3af204, _0x4f3c2c, _0xb302bd) {
        this.uh = _0x3af204;
        this.Vj = _0x4f3c2c;
        this.$j = _0xb302bd;
        this.Fb();
      };
      _0xc3eec8.prototype.ek = function (_0x49c8fa, _0x5a5f8a, _0xa82d85) {
        this.vh = _0x49c8fa;
        this.Wj = _0x5a5f8a;
        this._j = _0xa82d85;
        this.Fb();
      };
      _0xc3eec8.prototype.Ra = function () {
        var _0x41bfae = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x41bfae;
        this.te.width = _0x41bfae * this.Qj;
        this.te.height = _0x41bfae * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x270003 = 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 > this.Pj.xj.length ? this.Pj.xj.length : 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 < 0x1 ? 0x1 : Number.isFinite(0x2 * Math.floor(this.Qj / this.Ng) - 0x5) ? 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 : 0.5 * (0x1 + this.Pj.xj.length);
        if (this.Pj.wj != _0x270003) {
          for (var _0x26d0e1 = _0x270003; _0x26d0e1 < this.Pj.xj.length; _0x26d0e1++) {
            this.Pj.xj[_0x26d0e1].lh();
          }
          for (; this.Pj.wj < _0x270003;) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          for (; this.Pj.wj > _0x270003;) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0xc3eec8.prototype.Pa = function () {
        if (this.sc && (window.anApp = _0x3938bb).p.W) {
          var _0x5ba6c1 = Date.now() / 0xc8;
          var _0x2cba17 = Math.sin(_0x5ba6c1);
          var _0x47d8f6 = this.Ng;
          var _0x29afab = 1.5 * this.Ng;
          var _0x1bd7f9 = this.Qj - 0.5 * (this.Qj - 0.5 * _0x47d8f6 * (this.Pj.wj - 0x1));
          var _0x4e3b4c = 0.5 * this.Rj;
          var _0x4add64 = 0x0;
          var _0x315449 = 0x0;
          for (var _0x5c0f46 = -0x1; _0x5c0f46 < this.Pj.wj; _0x5c0f46++) {
            var _0x361f8e = _0x5c0f46;
            var _0x35ddaf = Math.cos(0x1 * _0x361f8e / 0xc * Math.PI - _0x5ba6c1) * (0x1 - Math.pow(0x10, -0x1 * _0x361f8e / 0xc));
            if (_0x5c0f46 >= 0x0) {
              var _0x473d83 = _0x1bd7f9 + -0.5 * _0x47d8f6 * _0x361f8e;
              var _0x448b7f = _0x4e3b4c + 0.5 * _0x47d8f6 * _0x35ddaf;
              var _0x3cda26 = 0x2 * _0x47d8f6;
              var _0x518bda = 0x2 * _0x29afab;
              var _0x6a5c6c = Math.atan2(_0x315449 - _0x35ddaf, _0x361f8e - _0x4add64);
              if (0x0 == _0x5c0f46) {
                this.Pj.vj.mh(_0x473d83, _0x448b7f, _0x3cda26, _0x6a5c6c);
              }
              this.Pj.xj[_0x5c0f46].mh(_0x473d83, _0x448b7f, _0x3cda26, _0x518bda, _0x6a5c6c);
              var _0x2fa5aa = this.Sj ? this.Xj ? 0.4 + 0.2 * _0x2cba17 : 0.9 + 0.1 * _0x2cba17 : this.Xj ? 0.4 : 0x1;
              this.Pj.xj[_0x5c0f46].Nf.qh(_0x2fa5aa);
              this.Pj.xj[_0x5c0f46].Pf.qh(_0x2fa5aa);
            }
            _0x4add64 = _0x361f8e;
            _0x315449 = _0x35ddaf;
          }
          for (var _0x41a0d7 = 0x0; _0x41a0d7 < this.Pj.vj.Cj.length; _0x41a0d7++) {
            var _0x1843c2 = this.Tj ? this.Yj ? 0.4 + 0.2 * _0x2cba17 : 0.9 + 0.1 * _0x2cba17 : this.Yj ? 0.4 : 0x1;
            this.Pj.vj.Cj[_0x41a0d7].qh(_0x1843c2);
          }
          for (var _0x3b3993 = 0x0; _0x3b3993 < this.Pj.vj.Dj.length; _0x3b3993++) {
            var _0x41ee4b = this.Uj ? this.Zj ? 0.4 + 0.2 * _0x2cba17 : 0.9 + 0.1 * _0x2cba17 : this.Zj ? 0.4 : 0x1;
            this.Pj.vj.Dj[_0x3b3993].qh(_0x41ee4b);
          }
          for (var _0x1b0bc6 = 0x0; _0x1b0bc6 < this.Pj.vj.Ej.length; _0x1b0bc6++) {
            var _0x14dbd8 = this.Vj ? this.$j ? 0.4 + 0.2 * _0x2cba17 : 0.9 + 0.1 * _0x2cba17 : this.$j ? 0.4 : 0x1;
            this.Pj.vj.Ej[_0x1b0bc6].qh(_0x14dbd8);
          }
          for (var _0x37bd8a = 0x0; _0x37bd8a < this.Pj.vj.Fj.length; _0x37bd8a++) {
            var _0x5042ca = this.Wj ? this._j ? 0.4 + 0.2 * _0x2cba17 : 0.9 + 0.1 * _0x2cba17 : this._j ? 0.4 : 0x1;
            this.Pj.vj.Fj[_0x37bd8a].qh(_0x5042ca);
          }
          this.ue.render(this.Pj.Rf);
        }
      };
      return _0xc3eec8;
    }();
    var _0xec0c85 = function () {
      function _0x44e265(_0xbf8625) {
        this.rc = _0xbf8625;
      }
      _0x44e265.fk = $('#game-view');
      _0x44e265.gk = $("#results-view");
      _0x44e265.hk = $("#main-menu-view");
      _0x44e265.ik = $("#popup-view");
      _0x44e265.jk = $("#toaster-view");
      _0x44e265.kk = $("#loading-view");
      _0x44e265.lk = $('#stretch-box');
      _0x44e265.mk = $("#game-canvas");
      _0x44e265.di = $('#background-canvas');
      _0x44e265.nk = $("#social-buttons");
      _0x44e265.ok = $("#markup-wrap");
      _0x44e265.prototype.a = function () {};
      _0x44e265.prototype.ii = function () {};
      _0x44e265.prototype.ji = function () {};
      _0x44e265.prototype.ei = function () {};
      _0x44e265.prototype.Ra = function () {};
      _0x44e265.prototype.Pa = function (_0x1b3889, _0x131629) {};
      return _0x44e265;
    }();
    var _0x11748d = function () {
      function _0x346126(_0x5adddf, _0x3b9d50, _0x5822b2, _0x2dd3ac, _0x2072b1, _0x3bd819) {
        var _0xccfd63 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x5adddf + '</span></div>');
        _0xccfd63.click(function () {
          if ("undefined" != typeof FB && undefined !== FB.ui) {
            FB.ui({
              'method': "feed",
              'display': "popup",
              'link': _0x3b9d50,
              'name': _0x5822b2,
              'caption': _0x2dd3ac,
              'description': _0x2072b1,
              'picture': _0x3bd819
            }, function () {});
          }
        });
        return _0xccfd63;
      }
      var _0x37932f = $("#final-caption");
      var _0x3c13bd = $("#final-continue");
      var _0x2c0e7a = $('#congrats-bg');
      var _0x18b09c = $('#unl6wj4czdl84o9b');
      $("#congrats");
      var _0x40753f = $("#final-share-fb");
      var _0x659a05 = $('#final-message');
      var _0x378c1b = $('#final-score');
      var _0x51c898 = $("#final-place");
      var _0x39dbe6 = $("#final-board");
      var _0x81bb23 = _0x499ed3(_0xec0c85, function () {
        _0xec0c85.call(this, 0x0);
        var _0x12aae7 = this;
        var _0x180a8d = window.anApp = _0x3938bb;
        var _0x4a9cf7 = _0xec0c85.mk.get()[0x0];
        console.log("sSE=" + _0x5405f7.qk);
        _0x37932f.text(window.I18N_MESSAGES['index.game.result.title']);
        _0x3c13bd.text(window.I18N_MESSAGES['index.game.result.continue']);
        _0x3c13bd.click(function () {
          _0x180a8d.r.Cd();
          _0x180a8d.r.G(_0x5f491b.AudioState.F);
          _0x180a8d.s.I(_0x180a8d.s.F);
        });
        $("#game-canvas").attr("tabindex", 0x0).focus();
        $("#game-canvas").click();
        $('#game-canvas').keypress(function (_0xc0543) {
          console.log(_0xc0543);
          if ("text" !== _0xc0543.target.type) {
            if (_0xc0543.key.toLowerCase() === 'z') {
              lxpdupdatezoom(0x1);
            }
            if (_0xc0543.key.toLowerCase() === 'r') {
              let _0x2d264e = lxpdlastserver;
              $('.overlay-2').css("position", 'static');
              if (_0x2d264e) {
                anApp.r.Hd();
                anApp.sa(_0x2d264e);
              }
            }
            if (_0xc0543.key.toLowerCase() === 'r') {
              let _0x27677a = new Uint8Array([NaN, NaN]);
              anApp.o.Wb(_0x27677a);
              setTimeout(() => {
                let _0x2e0f37 = lxpdlastserver;
                $('.overlay-2').css("position", "static");
                if (_0x2e0f37) {
                  anApp.r.Hd();
                  anApp.sa(_0x2e0f37);
                }
              }, 0x3e8);
            }
            if (_0xc0543.key.toLowerCase() === 'l') {
              $(".option.toggle[data-option='laserHS'] .box").click();
            }
            if (_0xc0543.key.toLowerCase() === 'q') {
              $(".option.toggle[data-option='sectores'] .box").click();
              setSectorsGame();
            }
            if (_0xc0543.key.toLowerCase() === 'c') {
              $(".option.toggle[data-option='backgroundSolid'] .box").click();
              setSectorsGame();
            }
            if (_0xc0543.key.toLowerCase() === '1') {
              theoKzObjects.noSkin = false;
            }
            if (_0xc0543.key.toLowerCase() === '2') {
              theoKzObjects.noAuras = false;
            }
            if (_0xc0543.key.toLowerCase() === 'q') {
              if (isRunning) {
                isRunning = false;
                initialInterval = 0x37;
                cycleCounter = 0x1;
                isIncrementing = true;
                clearInterval(intervalID);
                intervalID = null;
                lxpdgirosubtracttexture.texture = ungirotexture;
                lxpdgirosubtracttexture.alpha = 0.25;
              } else {
                lxpdgirosubtracttexture.alpha = 0.75;
                startInterval();
                isRunning = true;
              }
            }
          }
        });
        $("#game-canvas").keydown(function (_0x119fda) {
          if ("Enter" === _0x119fda.key) {
            _0x1fbfa6();
          }
          if (0x20 == _0x119fda.keyCode) {
            _0x12aae7.rk = true;
          }
          if (0x31 == _0x119fda.keyCode) {
            theoKzObjects.emoji = true;
            setTimeout(() => {
              theoKzObjects.emoji = false;
            }, 0x7d0);
          }
          _0x119fda.keyCode;
        }).keyup(function (_0x1fcc02) {
          if (0x20 == _0x1fcc02.keyCode) {
            _0x12aae7.rk = false;
          }
        });
        var _0x1fbfa6 = function () {
          $('#chatInput').css("display", "block").focus();
        };
        _0x4a9cf7.addEventListener("touchstart", function (_0x24535d) {
          if (_0x24535d = _0x24535d || window.event) {
            _0x12aae7.rk = _0x24535d.touches.length >= 0x2;
          }
          _0x24535d.preventDefault();
        }, true);
        _0x4a9cf7.addEventListener("touchend", function (_0x5aba0e) {
          if (_0x5aba0e = _0x5aba0e || window.event) {
            _0x12aae7.rk = _0x5aba0e.touches.length >= 0x2;
          }
        }, true);
        _0x4a9cf7.addEventListener("mousemove", function (_0x26d969) {
          if ((_0x26d969 = _0x26d969 || window.event && undefined !== _0x26d969.clientX) && !isRunning) {
            var _0x5b25ca = _0x26d969.clientX;
            var _0x367b93 = _0x26d969.clientY;
            window.mouseX = _0x5b25ca;
            window.mouseY = _0x367b93;
            _0x12aae7.sk = Math.atan2(_0x367b93 - 0.5 * _0x4a9cf7.offsetHeight, _0x5b25ca - 0.5 * _0x4a9cf7.offsetWidth);
          }
        }, true);
        _0x4a9cf7.addEventListener('mousedown', function (_0x903285) {
          _0x12aae7.rk = true;
        }, true);
        _0x4a9cf7.addEventListener("mouseup", function (_0x158cde) {
          _0x12aae7.rk = false;
        }, true);
        if (lxpdmobilecheck()) {
          var _0x2bfa2c;
          var _0x405f8e = -0x1;
          _0x4a9cf7.addEventListener("touchmove", function (_0xcd54d5) {
            if (_0xcd54d5 = _0xcd54d5 || window.event) {
              _0xcd54d5 = _0xcd54d5.touches[0x0];
              var _0x522fe5 = 0.5 * _0x4a9cf7.offsetWidth;
              var _0x414948 = 0.5 * _0x4a9cf7.offsetHeight;
              if (lxpdmobilearrowtexture.visible) {
                _0x522fe5 = lxpdmobilearrowtexture.x + 0x6e;
                _0x414948 = lxpdmobilearrowtexture.y + 0x6e;
              }
              if (-0x1 === lxpdjoystick) {
                _0x12aae7.sk = Math.atan2(_0xcd54d5.pageY - _0x414948, _0xcd54d5.pageX - _0x522fe5);
              }
              if (-0x1 != lxpdmobileprediction) {
                var _0x1adab7 = Math.sqrt((_0x522fe5 - _0xcd54d5.pageX) * (_0x522fe5 - _0xcd54d5.pageX) + (_0x414948 - _0xcd54d5.pageY) * (_0x414948 - _0xcd54d5.pageY));
                lxpdmobilepredictiontextures[lxpdmobileprediction].x = 0.5 * _0x4a9cf7.offsetWidth + (_0x1adab7 < 0x6e ? _0x1adab7 : 0x6e) * Math.cos(_0x12aae7.sk) - 0x44;
                lxpdmobilepredictiontextures[lxpdmobileprediction].y = 0.5 * _0x4a9cf7.offsetHeight + (_0x1adab7 < 0x6e ? _0x1adab7 : 0x6e) * Math.sin(_0x12aae7.sk) - 0x44;
                lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0x1;
              }
            }
          }, true);
          _0x4a9cf7.addEventListener("touchend", function (_0x18ec29) {
            if (-0x1 != lxpdmobileprediction) {
              lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0.25;
            }
            if (_0x18ec29 && -0x1 === _0x405f8e) {
              _0x12aae7.rk = _0x18ec29.touches.length >= 0x2;
            }
          }, true);
          _0x4a9cf7.addEventListener("pointerdown", function (_0x36d01c) {
            let _0x1c25c6 = lxpdzoomplustexture.getGlobalPosition();
            let _0x5aa02a = lxpdzoomsubtracttexture.getGlobalPosition();
            let _0x1b6044;
            let _0x5bb59a;
            if (undefined !== lxpdgirosubtracttexture && undefined !== lxpdexplotWubtracttexture) {
              _0x1b6044 = lxpdgirosubtracttexture.getGlobalPosition();
              _0x5bb59a = lxpdexplotWubtracttexture.getGlobalPosition();
            }
            let _0x26f7d5 = lxpdmobilecontroltextures[lxpdmobilecontrol].getGlobalPosition();
            let _0x2ee635 = lxpdmobilepeedtexture.getGlobalPosition();
            if (undefined !== _0x5bb59a && undefined !== _0x1b6044) {
              if (_0x36d01c.clientX > _0x5bb59a.x && _0x36d01c.clientX <= _0x5bb59a.x + lxpdexplotWubtracttexture.width && _0x36d01c.clientY > _0x5bb59a.y && _0x36d01c.clientY <= _0x5bb59a.y + lxpdexplotWubtracttexture.height) {
                lxpdexplotWubtracttexture.emit("mouseup");
                return;
              }
              if (_0x36d01c.clientX > _0x1b6044.x && _0x36d01c.clientX <= _0x1b6044.x + lxpdgirosubtracttexture.width && _0x36d01c.clientY > _0x1b6044.y && _0x36d01c.clientY <= _0x1b6044.y + lxpdgirosubtracttexture.height) {
                lxpdgirosubtracttexture.emit("mouseup");
                return;
              }
            }
            if (_0x36d01c.clientX > _0x1c25c6.x && _0x36d01c.clientX <= _0x1c25c6.x + lxpdzoomplustexture.width && _0x36d01c.clientY > _0x1c25c6.y && _0x36d01c.clientY <= _0x1c25c6.y + lxpdzoomplustexture.height) {
              lxpdzoomplustexture.emit("mouseup");
              return;
            }
            if (_0x36d01c.clientX > _0x5aa02a.x && _0x36d01c.clientX <= _0x5aa02a.x + lxpdzoomsubtracttexture.width && _0x36d01c.clientY > _0x5aa02a.y && _0x36d01c.clientY <= _0x5aa02a.y + lxpdzoomsubtracttexture.height) {
              lxpdzoomsubtracttexture.emit('mouseup');
              return;
            }
            if (_0x36d01c.clientX > _0x26f7d5.x && _0x36d01c.clientX <= _0x26f7d5.x + lxpdmobilecontroltextures[lxpdmobilecontrol].width && _0x36d01c.clientY > _0x26f7d5.y && _0x36d01c.clientY <= _0x26f7d5.y + lxpdmobilecontroltextures[lxpdmobilecontrol].height) {
              lxpdmobilecontroltextures[lxpdmobilecontrol].emit("tap");
              return;
            }
            if (lxpdmobilepeedtexture.visible && _0x36d01c.clientX > _0x2ee635.x && _0x36d01c.clientX <= _0x2ee635.x + lxpdmobilepeedtexture.width && _0x36d01c.clientY > _0x2ee635.y && _0x36d01c.clientY <= _0x2ee635.y + lxpdmobilepeedtexture.height) {
              _0x405f8e = _0x36d01c.pointerId;
              _0x12aae7.rk = true;
              lxpdmobilepeedtexture.alpha = 0x1;
              return;
            }
            if (!(-0x1 === lxpdjoystick || lxpdjoysticks[lxpdjoystick].visible)) {
              _0x2bfa2c = _0x36d01c.pointerId;
              lxpdjoysticks[lxpdjoystick].x = _0x36d01c.clientX;
              lxpdjoysticks[lxpdjoystick].y = _0x36d01c.clientY;
              lxpdjoysticks[lxpdjoystick].visible = true;
              lxpdjoysticks[lxpdjoystick].onDragStart(_0x36d01c);
            }
          }, true);
          _0x4a9cf7.addEventListener("pointerup", function (_0x18efff) {
            if (_0x18efff.pointerId == _0x405f8e) {
              _0x12aae7.rk = false;
              _0x405f8e = -0x1;
              lxpdmobilepeedtexture.alpha = 0.5;
            }
            if (_0x18efff.pointerId == _0x2bfa2c && -0x1 !== lxpdjoystick) {
              lxpdjoysticks[lxpdjoystick].visible = false;
              lxpdjoysticks[lxpdjoystick].onDragEnd(_0x18efff);
            }
          }, true);
          _0x4a9cf7.addEventListener("pointermove", function (_0x5ec747) {
            if (_0x5ec747.pointerId == _0x2bfa2c && -0x1 !== lxpdjoystick) {
              lxpdjoysticks[lxpdjoystick].onDragMove(_0x5ec747);
            }
          }, true);
        }
        this.wb = new _0x443c92(_0xec0c85.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x12aae7;
      });
      _0x81bb23.prototype.a = function () {};
      _0x81bb23.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0xec0c85.fk.stop();
          _0xec0c85.fk.fadeIn(0x1f4);
          _0xec0c85.gk.stop();
          _0xec0c85.gk.fadeOut(0x1);
          _0xec0c85.hk.stop();
          _0xec0c85.hk.fadeOut(0x32);
          _0xec0c85.ik.stop();
          _0xec0c85.ik.fadeOut(0x32);
          _0xec0c85.jk.stop();
          _0xec0c85.jk.fadeOut(0x32);
          _0xec0c85.kk.stop();
          _0xec0c85.kk.fadeOut(0x32);
          _0xec0c85.lk.stop();
          _0xec0c85.lk.fadeOut(0x1);
          _0xec0c85.di.stop();
          _0xec0c85.di.fadeOut(0x32);
          _0x339075.Le(false);
          _0xec0c85.nk.stop();
          _0xec0c85.nk.fadeOut(0x32);
          _0xec0c85.ok.stop();
          _0xec0c85.ok.fadeOut(0x32);
        } else {
          _0xec0c85.fk.stop();
          _0xec0c85.fk.fadeIn(0x1f4);
          _0xec0c85.gk.stop();
          _0xec0c85.gk.fadeIn(0x1f4);
          _0xec0c85.hk.stop();
          _0xec0c85.hk.fadeOut(0x32);
          _0xec0c85.ik.stop();
          _0xec0c85.ik.fadeOut(0x32);
          _0xec0c85.jk.stop();
          _0xec0c85.jk.fadeOut(0x32);
          _0xec0c85.kk.stop();
          _0xec0c85.kk.fadeOut(0x32);
          _0xec0c85.lk.stop();
          _0xec0c85.lk.fadeOut(0x1);
          _0xec0c85.di.stop();
          _0xec0c85.di.fadeOut(0x32);
          _0x339075.Le(false);
          _0xec0c85.nk.stop();
          _0xec0c85.nk.fadeOut(0x32);
          _0xec0c85.ok.stop();
          _0xec0c85.ok.fadeOut(0x32);
        }
      };
      _0x81bb23.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x81bb23.prototype.Fa = function () {
        console.log('re');
        _0x2c0e7a.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x2c0e7a.fadeIn(0xa);
        }, 0x1);
        _0x18b09c.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0x18b09c.fadeIn(0xa);
        }, 0x1);
        this.cb = 0x1;
        return this;
      };
      _0x81bb23.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x3938bb).r.Gd();
        }
      };
      _0x81bb23.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x81bb23.prototype.Pa = function (_0x435ac7, _0x80b435) {
        this.wb.Pa(_0x435ac7, _0x80b435);
      };
      _0x81bb23.prototype.Da = function (_0xc93878, _0x48946b, _0x3b2faf) {
        var _0x151624 = undefined;
        var _0x4b8635 = undefined;
        var _0x46dad3 = undefined;
        if (_0x48946b >= 0x1 && _0x48946b <= 0xa) {
          _0x151624 = window.I18N_MESSAGES["index.game.result.place.i" + _0x48946b];
          _0x4b8635 = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x46dad3 = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x3b2faf).replace("{1}", _0xc93878).replace("{2}", _0x151624);
        } else {
          _0x151624 = '';
          _0x4b8635 = window.I18N_MESSAGES["index.game.result.tryHit"];
          _0x46dad3 = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{0}", _0x3b2faf).replace("{1}", _0xc93878);
        }
        _0x659a05.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x378c1b.html(_0xc93878);
        _0x51c898.html(_0x151624);
        _0x39dbe6.html(_0x4b8635);
        if (_0x5405f7.qk) {
          var _0x48bd0b = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0x40753f.empty().append(_0x346126(_0x48bd0b, 'https://wormate.io', 'wormate.io', _0x46dad3, _0x46dad3, 'https://wormate.io/images/og-share-img-new.jpg'));
        }
      };
      _0x81bb23.prototype.T = function () {
        return this.sk;
      };
      _0x81bb23.prototype.U = function () {
        return this.rk;
      };
      return _0x81bb23;
    }();
    _0x5595d3 = $("#loading-worm-a");
    _0x2082d0 = $("#loading-worm-b");
    _0x5cdefc = $('#loading-worm-c');
    _0x841b34 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
    (_0x27325c = _0x499ed3(_0xec0c85, function () {
      _0xec0c85.call(this, 0x0);
    })).prototype.a = function () {};
    _0x27325c.prototype.ii = function () {
      _0xec0c85.fk.stop();
      _0xec0c85.fk.fadeOut(0x32);
      _0xec0c85.gk.stop();
      _0xec0c85.gk.fadeOut(0x32);
      _0xec0c85.hk.stop();
      _0xec0c85.hk.fadeOut(0x32);
      _0xec0c85.ik.stop();
      _0xec0c85.ik.fadeOut(0x32);
      _0xec0c85.jk.stop();
      _0xec0c85.jk.fadeOut(0x32);
      _0xec0c85.kk.stop();
      _0xec0c85.kk.fadeIn(0x1f4);
      _0xec0c85.lk.stop();
      _0xec0c85.lk.fadeIn(0x1);
      _0xec0c85.di.stop();
      _0xec0c85.di.fadeIn(0x1f4);
      _0x339075.Le(true);
      _0xec0c85.nk.stop();
      _0xec0c85.nk.fadeOut(0x32);
      _0xec0c85.ok.stop();
      _0xec0c85.ok.fadeOut(0x32);
    };
    _0x27325c.prototype.ji = function () {
      this.tk();
    };
    _0x27325c.prototype.tk = function () {
      _0x5595d3.css("background-position", "100% 200%");
      for (var _0x1b8280 = 0x0; _0x1b8280 < _0x841b34.length; _0x1b8280++) {
        var _0x1c6803 = Math.floor(Math.random() * _0x841b34.length);
        var _0x33696a = _0x841b34[_0x1b8280];
        _0x841b34[_0x1b8280] = _0x841b34[_0x1c6803];
        _0x841b34[_0x1c6803] = _0x33696a;
      }
      _0x5595d3.css("background-position", _0x841b34[0x0]);
      _0x2082d0.css("background-position", _0x841b34[0x1]);
      _0x5cdefc.css("background-position", _0x841b34[0x2]);
    };
    $("#mm-event-text");
    _0x5f42a3 = $("#mm-skin-canv");
    _0x2929a1 = $("#mm-skin-prev");
    _0x1fdf98 = $("#mm-skin-next");
    _0x15326e = $("#mm-skin-over");
    _0x570741 = $("#mm-skin-over-button-list");
    _0x24569d = $("#mm-params-nickname");
    _0x32fef3 = $("#mm-params-game-mode");
    _0x17efff = $("#mm-action-buttons");
    _0x1d7227 = $('#mm-action-play');
    _0xd65c46 = $('#mm-action-guest');
    _0x120eb4 = $("#mm-action-login");
    _0x32e624 = $("#mm-player-info");
    _0x38a488 = $('#mm-store');
    _0x4b2d42 = $("#mm-leaders");
    _0xcb5fa4 = $("#mm-settings");
    _0x461787 = $("#mm-coins-box");
    _0x4cba2a = $("#mm-player-avatar");
    _0x455f5d = $("#mm-player-username");
    _0x2701c5 = $("#mm-coins-val");
    _0x2a6af0 = $("#mm-player-exp-bar");
    _0x368e6c = $("#mm-player-exp-val");
    _0x52f285 = $('#mm-player-level');
    (_0x7c168 = _0x499ed3(_0xec0c85, function () {
      _0xec0c85.call(this, 0x1);
      var _0x5d533d = window.anApp = _0x3938bb;
      this.uk = new _0x2cf077(_0x5f42a3);
      _0x32fef3.click(function () {
        _0x5d533d.r.Cd();
      });
      _0x5f42a3.click(function () {
        if (_0x5d533d.u.P()) {
          _0x5d533d.r.Cd();
          _0x5d533d.s.I(_0x5d533d.s.$h);
        }
      });
      _0x2929a1.click(function () {
        _0x5d533d.r.Cd();
        _0x5d533d.t.Ah();
      });
      _0x1fdf98.click(function () {
        _0x5d533d.r.Cd();
        _0x5d533d.t.zh();
      });
      _0x24569d.keypress(function (_0x19f484) {
        if (0xd == _0x19f484.keyCode) {
          _0x5d533d.na();
        }
      });
      _0x1d7227.click(function () {
        _0x5d533d.r.Cd();
        _0x5d533d.na();
      });
      _0xd65c46.click(function () {
        _0x5d533d.r.Cd();
        _0x5d533d.na();
      });
      _0x120eb4.click(function () {
        _0x5d533d.r.Cd();
        _0x5d533d.s.I(_0x5d533d.s.Zh);
      });
      _0xcb5fa4.click(function () {
        _0x5d533d.r.Cd();
        _0x5d533d.s.I(_0x5d533d.s.xa);
      });
      _0x32e624.click(function () {
        if (_0x5d533d.u.P()) {
          _0x5d533d.r.Cd();
          _0x5d533d.s.I(_0x5d533d.s.Yh);
        }
      });
      _0x4b2d42.click(function () {
        if (_0x5d533d.u.P()) {
          _0x5d533d.r.Cd();
          _0x5d533d.s.I(_0x5d533d.s.Xh);
        }
      });
      _0x38a488.click(function () {
        if (_0x5d533d.u.P()) {
          _0x5d533d.r.Cd();
          _0x5d533d.s.I(_0x5d533d.s._h);
        }
      });
      _0x461787.click(function () {
        if (_0x5d533d.u.P()) {
          _0x5d533d.r.Cd();
          _0x5d533d.s.I(_0x5d533d.s.Wh);
        }
      });
      this.vk();
      this.wk();
      $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
      $("#final-replay").click(function () {
        let _0x34a26 = lxpdlastserver;
        if (_0x34a26) {
          anApp.r.Hd();
          anApp.sa(_0x34a26);
        }
      });
      _0x38a488.after("<div id=\"mm-wtr-settings\" style=\"\">Settings</div>");
      $("#mm-advice-cont").html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">FULL SCREEN</button><button value=\"Replay\" id=\"wtrplayagain\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">REPLAY</button></div>");
      $('#wtrplayagain').click(function () {
        let _0x4641e9 = lxpdlastserver;
        if (_0x4641e9) {
          anApp.r.Hd();
          anApp.sa(_0x4641e9);
        }
      });
      $("#fullscreen").click(function () {
        if (lxpdmobilefullscreenstatus) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else {
            if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else {
              if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.body.webkitExitFullscreen) {
                document.body.webkitExitFullscreen();
              }
            }
          }
          lxpdmobilefullscreenstatus = false;
        } else {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else {
            if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else {
              if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.body.webkitRequestFullscreen) {
                document.body.webkitRequestFullscreen();
              }
            }
          }
          lxpdmobilefullscreenstatus = true;
        }
      });
      $('#mm-wtr-settings').click(function () {
        if (_0x5d533d.u.P()) {
          _0x5d533d.r.Cd();
          _0x5d533d.s.I(_0x5d533d.s.wtrset);
        }
      });
      var _0x3fef5d = _0x5ce09a(_0x216031.va);
      if ("ARENA" != _0x3fef5d && "TEAM2" != _0x3fef5d) {
        _0x3fef5d = 'ARENA';
      }
      _0x32fef3.val(_0x3fef5d);
      console.log("Load GM: " + _0x3fef5d);
    })).prototype.a = function () {
      var _0x4ac7cd = window.anApp = _0x3938bb;
      var _0x30dcef = this;
      _0x4ac7cd.u.V(function () {
        _0x4ac7cd.s.F.xk();
      });
      _0x4ac7cd.u.Pi(function () {
        if (_0x4ac7cd.u.P()) {
          _0x4ac7cd.t.Bh(_0x4ac7cd.u.Di(), _0x199e00.ia);
          _0x4ac7cd.t.Bh(_0x4ac7cd.u.Ei(), _0x199e00.ja);
          _0x4ac7cd.t.Bh(_0x4ac7cd.u.Fi(), _0x199e00.ka);
          _0x4ac7cd.t.Bh(_0x4ac7cd.u.Gi(), _0x199e00.la);
          _0x4ac7cd.t.Bh(_0x4ac7cd.u.Hi(), _0x199e00.ma);
        } else {
          _0x4ac7cd.t.Bh(_0x4ac7cd.Ga(), _0x199e00.ia);
          _0x4ac7cd.t.Bh(0x0, _0x199e00.ja);
          _0x4ac7cd.t.Bh(0x0, _0x199e00.ka);
          _0x4ac7cd.t.Bh(0x0, _0x199e00.la);
          _0x4ac7cd.t.Bh(0x0, _0x199e00.ma);
        }
      });
      _0x4ac7cd.u.Pi(function () {
        _0x1d7227.toggle(_0x4ac7cd.u.P());
        _0x120eb4.toggle(!_0x4ac7cd.u.P());
        _0xd65c46.toggle(!_0x4ac7cd.u.P());
        _0x4b2d42.toggle(_0x4ac7cd.u.P());
        _0x38a488.toggle(_0x4ac7cd.u.P());
        _0x461787.toggle(_0x4ac7cd.u.P());
        if (_0x4ac7cd.u.P()) {
          _0x15326e.hide();
          _0x455f5d.html(_0x4ac7cd.u.wi());
          _0x4cba2a.attr("src", _0x4ac7cd.u.xi());
          _0x2701c5.html(_0x4ac7cd.u.zi());
          _0x2a6af0.width(0x64 * _0x4ac7cd.u.Bi() / _0x4ac7cd.u.Ci() + '%');
          _0x368e6c.html(_0x4ac7cd.u.Bi() + " / " + _0x4ac7cd.u.Ci());
          _0x52f285.html(_0x4ac7cd.u.Ai());
          _0x24569d.val(_0x4ac7cd.u.ga());
        } else {
          _0x15326e.toggle(_0x5405f7.qk && !_0x4ac7cd.Ha());
          _0x455f5d.html(_0x455f5d.data("guest"));
          _0x4cba2a.attr("src", '/images/guest-avatar-xmas2022.png');
          _0x2701c5.html('10');
          _0x2a6af0.width('0');
          _0x368e6c.html('');
          _0x52f285.html(0x1);
          _0x24569d.val(_0x5ce09a(_0x216031.Aa));
        }
      });
      _0x4ac7cd.t.xh(function () {
        _0x30dcef.uk.ak(_0x4ac7cd.t.ha(_0x199e00.ia), false, false);
        _0x30dcef.uk.bk(_0x4ac7cd.t.ha(_0x199e00.ja), false, false);
        _0x30dcef.uk.ck(_0x4ac7cd.t.ha(_0x199e00.ka), false, false);
        _0x30dcef.uk.dk(_0x4ac7cd.t.ha(_0x199e00.la), false, false);
        _0x30dcef.uk.ek(_0x4ac7cd.t.ha(_0x199e00.ma), false, false);
      });
    };
    _0x7c168.prototype.ii = function () {
      _0xec0c85.fk.stop();
      _0xec0c85.fk.fadeOut(0x32);
      _0xec0c85.gk.stop();
      _0xec0c85.gk.fadeOut(0x32);
      _0xec0c85.hk.stop();
      _0xec0c85.hk.fadeIn(0x1f4);
      _0xec0c85.ik.stop();
      _0xec0c85.ik.fadeOut(0x32);
      _0xec0c85.jk.stop();
      _0xec0c85.jk.fadeOut(0x32);
      _0xec0c85.kk.stop();
      _0xec0c85.kk.fadeOut(0x32);
      _0xec0c85.lk.stop();
      _0xec0c85.lk.fadeIn(0x1);
      _0xec0c85.di.stop();
      _0xec0c85.di.fadeIn(0x1f4);
      _0x339075.Le(true);
      _0xec0c85.nk.stop();
      _0xec0c85.nk.fadeIn(0x1f4);
      _0xec0c85.ok.stop();
      _0xec0c85.ok.fadeIn(0x1f4);
    };
    _0x7c168.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
      this.uk.Le(true);
    };
    _0x7c168.prototype.ei = function () {
      this.uk.Le(false);
    };
    _0x7c168.prototype.Ra = function () {
      this.uk.Ra();
    };
    _0x7c168.prototype.Pa = function (_0x558758, _0xde4664) {
      this.uk.Pa();
    };
    _0x7c168.prototype.ga = function () {
      return _0x24569d.val();
    };
    _0x7c168.prototype.D = function () {
      return _0x32fef3.val();
    };
    _0x7c168.prototype.xk = function () {
      _0x17efff.show();
    };
    _0x7c168.prototype.vk = function () {
      var _0x581985 = $("#mm-advice-cont").children();
      var _0x124e13 = 0x0;
      setInterval(function () {
        _0x581985.eq(_0x124e13).fadeOut(0x1f4, function () {
          if (++_0x124e13 >= _0x581985.length) {
            _0x124e13 = 0x0;
          }
          _0x581985.eq(_0x124e13).fadeIn(0x1f4).css("display", 'inline-block');
        });
      }, 0xbb8);
    };
    _0x7c168.prototype.wk = function () {
      function _0x25df3b() {
        _0x3360e0.Ka(true);
        setTimeout(function () {
          _0x15326e.hide();
        }, 0xbb8);
      }
      var _0x3360e0 = window.anApp = _0x3938bb;
      if (_0x5405f7.qk && !_0x3360e0.Ha()) {
        _0x15326e.show();
        var _0x440400 = window.I18N_MESSAGES['index.game.main.menu.unlockSkins.share'];
        var _0x3df0ca = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
        var _0x313bbf = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
        _0x570741.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x3df0ca + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x440400 + "</span></a>").click(_0x25df3b));
        _0x570741.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x313bbf + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x440400 + '</span></a>').click(_0x25df3b));
      }
    };
    (_0x4a5e9e = _0x499ed3(_0xec0c85, function () {
      _0xec0c85.call(this, 0x0);
    })).prototype.a = function () {};
    _0x4a5e9e.prototype.ii = function () {
      _0xec0c85.fk.stop();
      _0xec0c85.fk.fadeOut(0x32);
      _0xec0c85.gk.stop();
      _0xec0c85.gk.fadeOut(0x32);
      _0xec0c85.hk.stop();
      _0xec0c85.hk.fadeOut(0x32);
      _0xec0c85.ik.stop();
      _0xec0c85.ik.fadeOut(0x32);
      _0xec0c85.jk.stop();
      _0xec0c85.jk.fadeOut(0x32);
      _0xec0c85.kk.stop();
      _0xec0c85.kk.fadeOut(0x32);
      _0xec0c85.lk.stop();
      _0xec0c85.lk.fadeOut(0x1);
      _0xec0c85.di.stop();
      _0xec0c85.di.fadeOut(0x32);
      _0x339075.Le(false);
      _0xec0c85.nk.stop();
      _0xec0c85.nk.fadeOut(0x32);
      _0xec0c85.ok.stop();
      _0xec0c85.ok.fadeOut(0x32);
    };
    _0x369b4e = $('#toaster-stack');
    (_0x46cae3 = _0x499ed3(_0xec0c85, function () {
      _0xec0c85.call(this, 0x0);
      this.yk = [];
      this.zk = null;
    })).prototype.a = function () {};
    _0x46cae3.prototype.ii = function () {
      _0xec0c85.fk.stop();
      _0xec0c85.fk.fadeOut(0x32);
      _0xec0c85.gk.stop();
      _0xec0c85.gk.fadeOut(0x32);
      _0xec0c85.hk.stop();
      _0xec0c85.hk.fadeOut(0x32);
      _0xec0c85.ik.stop();
      _0xec0c85.ik.fadeOut(0x32);
      _0xec0c85.jk.stop();
      _0xec0c85.jk.fadeIn(0x1f4);
      _0xec0c85.kk.stop();
      _0xec0c85.kk.fadeOut(0x32);
      _0xec0c85.lk.stop();
      _0xec0c85.lk.fadeIn(0x1);
      _0xec0c85.di.stop();
      _0xec0c85.di.fadeIn(0x1f4);
      _0x339075.Le(true);
      _0xec0c85.nk.stop();
      _0xec0c85.nk.fadeOut(0x32);
      _0xec0c85.ok.stop();
      _0xec0c85.ok.fadeIn(0x1f4);
    };
    _0x46cae3.prototype.ji = function () {
      this.Ak();
    };
    _0x46cae3.prototype.mi = function () {
      return null != this.zk || this.yk.length > 0x0;
    };
    _0x46cae3.prototype._ = function (_0x3f6be2) {
      this.yk.unshift(_0x3f6be2);
      setTimeout(function () {
        (window.anApp = _0x3938bb).s.ki();
      }, 0x0);
    };
    _0x46cae3.prototype.Ti = function (_0x3b5d4a) {
      this.yk.push(_0x3b5d4a);
      setTimeout(function () {
        (window.anApp = _0x3938bb).s.ki();
      }, 0x0);
    };
    _0x46cae3.prototype.Ak = function () {
      var _0x220017 = this;
      if (null == this.zk) {
        if (0x0 == this.yk.length) {
          return void (window.anApp = _0x3938bb).s.gi();
        }
        var _0x1a4e83 = this.yk.shift();
        this.zk = _0x1a4e83;
        var _0x53b98c = _0x1a4e83.Bk();
        _0x53b98c.hide();
        _0x53b98c.fadeIn(0x12c);
        _0x369b4e.append(_0x53b98c);
        _0x1a4e83.Ck = function () {
          _0x53b98c.fadeOut(0x12c);
          setTimeout(function () {
            _0x53b98c.remove();
          }, 0x12c);
          if (_0x220017.zk == _0x1a4e83) {
            _0x220017.zk = null;
          }
          _0x220017.Ak();
        };
        _0x1a4e83.ji();
      }
    };
    var _0x4159b9 = function () {
      var _0x1aec94 = $('#popup-menu-label');
      var _0xd082d9 = $("#popup-menu-coins-box");
      var _0x8575ee = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x37d148 = window.anApp = _0x3938bb;
        _0x37d148.r.Cd();
        _0x37d148.s.gi();
      });
      _0xd082d9.click(function () {
        var _0x278153 = window.anApp = _0x3938bb;
        if (_0x278153.u.P()) {
          _0x278153.r.Cd();
          _0x278153.s.I(_0x278153.s.Wh);
        }
      });
      var _0x504feb = _0x499ed3(_0xec0c85, function (_0x1e7beb, _0x220602) {
        _0xec0c85.call(this, 0x1);
        this.ad = _0x1e7beb;
        this.Dk = _0x220602;
      });
      $("#settings-view").after("\n      <div id=\"settings-menu\" style=\"display: flex; opacity: 0; z-index: 2;\">\n    <div class=\"navigation\">\n        <div class=\"tab material-button active\" category=\"profile\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">person</i>\n            <span>Profile</span>\n        </div>\n        <div class=\"tab material-button\" category=\"game\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">games</i>\n            <span>Game</span>\n        </div>\n                            <div class=\"tab material-button\" category=\"theme\" style=\"position: relative; overflow: hidden;\">\n                                <i class=\"material-icons\">palette</i>\n                                <span>COLOR</span>\n                            </div>\n\n\n        <div class=\"tab material-button\" category=\"sound\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">volume_up</i>\n            <span>Sound</span>\n        </div>\n        <!-- Nueva pestaña: Equipos -->\n        <div class=\"tab material-button\" category=\"teams\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">group</i>\n            <span>Teams</span>\n        </div>\n        <!-- Nueva pestaña: Skins -->\n        <div class=\"tab material-button\" category=\"skins\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">brush</i>\n            <span>Skins</span>\n        </div>\n        <!-- Nueva pestaña: Streamers -->\n        <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative; overflow: hidden;\">\n            <i class=\"material-icons\">live_tv</i>\n            <span>Live</span>\n        </div>\n    </div>\n\n    <div class=\"options-list ps\">\n              <div category=\"game\">\n                  <div class=\"background-container\">\n                      <div class=\"name2\">Select Background</div>\n                      <div class=\"background-selector\">\n                          <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">←</button>\n                          <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                          <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">→</button>\n                      </div>\n                  </div>\n                  <div class=\"background-container\">\n                      <div class=\"name2\">Select Font In Game</div>\n                      <div class=\"background-selector\">\n                          <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">←</button>\n                          <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                          <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">→</button>\n                      </div>\n                  </div>\n              </div>\n  \n        <div category=\"theme\"></div>\n        <div category=\"controls\">\n            <div class=\"hotkey-container\"></div>\n        </div>\n<div category=\"profile\" class=\"active\">\n    <div class=\"profile-card\">\n        <!-- Profile Image -->\n        <div class=\"profile-picture\">\n            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n        </div>\n        <!-- User Info -->\n        <div class=\"profile-info\">\n            <h2>User Profile</h2>\n            <!-- User details -->\n            <div class=\"profile-id-container\">\n                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n            </div>\n            <h3>Other</h3>\n            <div class=\"button-group\">\n                <button id=\"resetScript\" class=\"reset-button\">Version Change</button>\n                <button id=\"resetScript2\" class=\"reset-button2\">Skinlab</button> \n                <button id=\"resetScript3\" class=\"reset-button3\">Social</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n        <div category=\"cursor\"></div>\n        <div category=\"sound\">\n            <!-- Sound tutorial links -->\n            <div class=\"sound-inputs\">\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 1</div>\n                    <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 2</div>\n                    <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 3:</div>\n                    <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Sound Tutorial 4:</div>\n                    <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                </div>\n                <div class=\"input-container\">\n                    <div class=\"name\">Headshot Sound:</div>\n                    <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                </div>\n            </div>\n            \n        </div>\n    <!-- Nueva sección: Equipos -->\n    <div category=\"teams\" class=\"\">\n      <div class=\"input-container\">\n        <div class=\"name2\">TEAM CODE:</div>\n        <input type=\"text\" id=\"teamCodeInput\" class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n      </div>\n      <div class=\"input-container\">\n        <div class=\"name2\" style=\"color: yellow;\">\n          PUT YOUR NAME FOR TEAM LIST:\n        </div>\n        <input \n          type=\"text\" \n          id=\"teamNickname\" \n          class=\"sounds-input\" \n          placeholder=\"ENTER YOUR NAME FOR FRIENDS\" \n        />\n      </div>\n    </div>\n        <div category=\"skins\">\n            <div class=\"input-container\">\n                <div class=\"name2\">Skin Original:</div>\n                <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" class=\"sounds-input\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n            </div>\n    <!-- JSON dosyası yükleme alanı -->\n    <div class=\"input-container\">\n        <div class=\"name2\">Upload Skins JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        <!-- JSON dosyası yükleme alanı -->\n    <div class=\"input-container\">\n        <div class=\"name2\">Upload Wear JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        <!-- JSON dosyası yükleme alanı -->\n    <div class=\"input-container\">\n        <div class=\"name2\">Upload Ear JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        <div class=\"input-container\">\n        <div class=\"name2\">Upload Head JSON File:</div>\n        <input type=\"file\" id=\"fileSkin\" accept=\"application/json\" onchange=\"handleFileUpload(event)\">\n    </div>\n        </div>\n              <div category=\"streamers\">\n                  <div class=\"input-container\">\n                      <div id=\"streamers-section\" style=\"display: none; padding: 10px;\">\n                          <hlive>Live Broadcasters Wormate.io</hlive>\n                          <div id=\"streamers-grid\">\n                              <div class=\"streamer inlive\">\n                                  <img src=\"https://i.imgur.com/kTehWGt.jpeg\" class=\"streamer-avatar\">\n                                  <div class=\"streamer-info\">\n                                      <span class=\"streamer-name\">Tiktok Name: yildolive</span>\n                                      <span class=\"streamer-name\">Founder Extension</span>\n                                      <span class=\"streamer-platform\">Tiktok</span>\n                                    </div>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  ");
      $(".tab.material-button").on("click", function () {
        var _0x249a90 = $(this).attr("category");
        if (!$(this).hasClass('active')) {
          $(".tab.material-button, .options-list > div").removeClass('active');
          $(this).addClass("active");
          $("div[category='" + _0x249a90 + "']").addClass("active");
        }
      });
      document.getElementById('resetScript').addEventListener("click", async function () {
        localStorage.clear();
        sessionStorage.clear();
        if (window.indexedDB) {
          let _0x28f4f6 = await indexedDB.databases();
          _0x28f4f6.forEach(_0x5034ae => indexedDB.deleteDatabase(_0x5034ae.name));
        }
        if (window.openDatabase) {
          console.warn("Web SQL no se puede eliminar automÃ¡ticamente desde JavaScript.");
        }
        document.cookie.split(';').forEach(function (_0x45b438) {
          document.cookie = _0x45b438.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ";path=/");
        });
        if ("caches" in window) {
          caches.keys().then(function (_0x4b8ac0) {
            for (let _0x3c05ea of _0x4b8ac0) caches["delete"](_0x3c05ea);
          });
        }
        if ("serviceWorker" in navigator) {
          let _0x242e96 = await navigator.serviceWorker.getRegistrations();
          for (let _0x32c03d of _0x242e96) await _0x32c03d.unregister();
        }
        localStorage.removeItem('scriptSeleccionado');
        location.reload();
      });
      document.getElementById('resetScript2').addEventListener("click", function () {
        window.location.href = "https://wormatefriendsturkey.com/skinlab/css/index.html";
      });
      document.getElementById("resetScript3").addEventListener("click", function () {
        window.location.href = 'https://wormatefriendsturkey.com';
      });
      soundEnabled = true;
      $("#toggle-sound").click(function () {
        soundEnabled = !soundEnabled;
        $(this).text(soundEnabled ? "Disable Sound" : "Enable Sound");
      });
      $("#idcopiar").click(function () {
        navigator.clipboard.writeText(lxpduserId);
        alert("ID copiado: " + lxpduserId);
      });
      window.changeBackground = function (_0x3c839e) {
        let _0x58ec0e = localStorage.getItem("selectedBackground");
        currentIndex = ((currentIndex = null !== _0x58ec0e ? parseInt(_0x58ec0e) : 0x0) + _0x3c839e + backgrounds.length) % backgrounds.length;
        updateBackground(currentIndex);
      };
      window.changeFont = function (_0x1c4d8a) {
        currentFontIndex = (currentFontIndex + _0x1c4d8a + fonts.length) % fonts.length;
        updateFont();
      };
      updateFont();
      let _0x26f042 = [{
        'id': 'ping',
        'label': "Show Fps",
        'category': "game",
        'tooltip': ''
      }, {
        'id': "low",
        'label': "Low Fps",
        'category': 'game',
        'tooltip': ''
      }, {
        'id': 'fps',
        'label': "Show Ping",
        'category': 'game',
        'tooltip': ''
      }, {
        'id': "laserHS",
        'label': "LASER HS",
        'category': "game",
        'tooltip': "Premium Feature"
      }, {
        'id': "chngBotSkins",
        'label': "Change bot & People to Basic Skins",
        'category': 'game',
        'tooltip': ''
      }, {
        'id': "chngPersonsSkins",
        'label': "Change Skins to WTR",
        'category': "game",
        'tooltip': ''
      }, {
        'id': "top8",
        'label': "Top Hs Show",
        'category': "game",
        'tooltip': "If you enable this option, you will see the list of the top 8 players."
      }, {
        'id': "killFeed",
        'label': "Hs Records",
        'category': "game",
        'tooltip': "If you enable this option, you will see the list of kills in real time."
      }, {
        'id': "minimapTeamcod",
        'label': "Team List Show",
        'category': 'teams',
        'tooltip': ''
      }];
      let _0x40512d = [{
        'name': "ZOOM SPEED",
        'id': "zoomSpeed",
        'min': 0.1,
        'max': 0xf,
        'step': 0.1,
        'category': "game",
        'tooltip': ''
      }, {
        'name': "BOOSTER SIZE",
        'id': "PotenciadorSize",
        'min': 0x1,
        'max': 0x6,
        'step': 0x1,
        'category': "game",
        'tooltip': "Premium Feature"
      }, {
        'name': "AURA THE BOOSTER",
        'id': "PotenciadorAura",
        'min': 1.2,
        'max': 3.2,
        'step': 0.2,
        'category': "game",
        'tooltip': "Premium Feature"
      }, {
        'name': "FOOD SHADOW",
        'id': "ComidaShadow",
        'min': 0.5,
        'max': 0x3,
        'step': 0.5,
        'category': 'game',
        'tooltip': "Premium Feature"
      }, {
        'name': "SIZE FOOD",
        'id': "ComidaSize",
        'min': 0.5,
        'max': 0x3,
        'step': 0.5,
        'category': "game",
        'tooltip': "Premium Feature"
      }, {
        'name': "MOUSE DELAY",
        'id': "mouseDelay",
        'min': 0xa,
        'max': 0x14,
        'step': 0x1,
        'category': 'game',
        'tooltip': "Premium Feature"
      }, {
        'name': "SMOOTH CAMERA",
        'id': "smoothCamera",
        'min': 0.1,
        'max': 0.9,
        'step': 0.1,
        'category': "game",
        'tooltip': "Premium Feature"
      }];
      let _0xb87ea6 = {
        'game': document.querySelector(".options-list > div[category=\"game\"]"),
        'teams': document.querySelector(".options-list > div[category=\"teams\"]"),
        'theme': document.querySelector(".options-list > div[category=\"theme\"]"),
        'controls': document.querySelector(".options-list > div[category=\"controls\"]")
      };
      if (isPremiumUser) {
        _0x26f042.push({
          'id': "Incognito",
          'label': "Hidden",
          'category': 'game',
          'tooltip': "Premium Feature"
        }, {
          'id': "laserHS",
          'label': "Laser Headshot",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': 'backgroundSolid',
          'label': "Background Solid",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "sectores",
          'label': "Sectors Background",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "speed_zigzag",
          'label': "Visible Zigzag and Speed",
          'category': 'game',
          'tooltip': "Premium Feature"
        }, {
          'id': "visiblePowersAll",
          'label': "Visible All Power Ups",
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'id': "hideYouNameInMinimap",
          'label': "Show your name for team list",
          'category': "teams",
          'tooltip': "Premium Feature"
        });
        _0xb87ea6.teams.insertAdjacentHTML("beforeend", "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;\">Put your name for team list:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"Enter your name for friends\" />\n                            </div>\n                        ");
        _0x40512d.push({
          'name': "Booster Size",
          'id': "PotenciadorSize",
          'min': 0x1,
          'max': 0x6,
          'step': 0x1,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "Aura The Booster",
          'id': "PotenciadorAura",
          'min': 1.2,
          'max': 3.2,
          'step': 0.2,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "Food Shadow",
          'id': 'ComidaShadow',
          'min': 0.5,
          'max': 0x3,
          'step': 0.5,
          'category': 'game',
          'tooltip': "Premium Feature"
        }, {
          'name': "Size Food",
          'id': "ComidaSize",
          'min': 0.5,
          'max': 0x3,
          'step': 0.5,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "Mouse Delay",
          'id': 'mouseDelay',
          'min': 0xa,
          'max': 0x14,
          'step': 0x1,
          'category': "game",
          'tooltip': "Premium Feature"
        }, {
          'name': "Smooth Camera",
          'id': "smoothCamera",
          'min': 0.1,
          'max': 0.9,
          'step': 0.1,
          'category': 'game',
          'tooltip': "Premium Feature"
        });
      }
      _0x40512d.forEach(_0x538ce2 => {
        let _0x49bfc9 = parseFloat(theoKzObjects[_0x538ce2.id]);
        let _0x2a1f2e = document.createElement("div");
        _0x2a1f2e.className = "option range";
        _0x2a1f2e.innerHTML = "\n        <div class=\"name\" style=\"" + (_0x538ce2.tooltip.includes("Premium") ? "color: yellow;" : '') + "\">" + _0x538ce2.name + "</div>\n        <div class=\"value\">" + _0x49bfc9 + "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: " + (_0x49bfc9 - _0x538ce2.min) / (_0x538ce2.max - _0x538ce2.min) * 0x64 + "%;\"></div>\n            </div>\n            <input type=\"range\" id=\"" + _0x538ce2.id + "\" min=\"" + _0x538ce2.min + "\" max=\"" + _0x538ce2.max + "\" step=\"" + _0x538ce2.step + "\" value=\"" + _0x49bfc9 + "\">\n        </div>\n    ";
        let _0x2cb2aa = _0x2a1f2e.querySelector("input");
        let _0x5b2b83 = _0x2a1f2e.querySelector(".value");
        let _0x402297 = _0x2a1f2e.querySelector('.fill');
        _0x2cb2aa.addEventListener("input", () => {
          _0x5b2b83.textContent = _0x2cb2aa.value;
          _0x402297.style.width = (_0x2cb2aa.value - _0x538ce2.min) / (_0x538ce2.max - _0x538ce2.min) * 0x64 + '%';
          theoKzObjects[_0x538ce2.id] = _0x2cb2aa.value;
          localStorage.setItem(_0x538ce2.id, _0x2cb2aa.value);
          if ("mouseDelay" === _0x538ce2.id) {
            anApp.o.updatePacketInterval(parseInt(_0x2cb2aa.value));
          }
        });
        _0xb87ea6[_0x538ce2.category].appendChild(_0x2a1f2e);
      });
      _0x26f042.forEach(_0x53b937 => {
        let _0x17fc97 = 'true' === localStorage.getItem(_0x53b937.id);
        let _0x15d2bc = "\n                            <div class=\"option toggle " + (_0x17fc97 ? 'on' : '') + "\" data-option=\"" + _0x53b937.id + "\">\n                                <div class=\"name\" style=\"" + (_0x53b937.tooltip.includes("Premium") ? "color: yellow;" : '') + "\">" + _0x53b937.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (_0x53b937.tooltip ? "<span class=\"tooltip\">" + _0x53b937.tooltip + "</span>" : '') + "\n                            </div>\n                        ";
        _0xb87ea6[_0x53b937.category].insertAdjacentHTML("beforeend", _0x15d2bc);
      });
      document.querySelectorAll('.box').forEach(_0xb42e9a => {
        _0xb42e9a.addEventListener("click", function (_0x3f9af5) {
          _0x3f9af5.stopPropagation();
          let _0x41018a = this.parentElement;
          let _0x544969 = _0x41018a.getAttribute("data-option");
          let _0x34d711 = !_0x41018a.classList.contains('on');
          _0x41018a.classList.toggle('on', _0x34d711);
          theoKzObjects[_0x544969] = _0x34d711;
          localStorage.setItem(_0x544969, _0x34d711);
          let _0x36434b = _0x41018a.querySelector(".tooltip");
          if (_0x36434b) {
            _0x36434b.style.display = _0x34d711 ? "block" : "none";
          }
          console.log(_0x544969 + " changed to", _0x34d711);
        });
      });
      var _0xfda04c = $("div[category='theme']");
      addMinicolor(_0xfda04c[0x1], "teamColorGroup", "YOUR COLOR IN MAP", "teamColor", "FFFFFF");
      addMinicolor(_0xfda04c[0x1], "laserColorGroup", "LASER", "laserColor", "FFFFFF");
      addMinicolor(_0xfda04c[0x1], 'hsTextColorGroup', "HS TEXT", 'hsTextColor', "ffa500");
      addMinicolor(_0xfda04c[0x1], "minimapBorderColorGroup", "MINIMAP BORDER", "minimapBorderColor", 'ffa500');
      addMinicolor(_0xfda04c[0x1], "killTextColorGroup", "KILL TEXT", "killTextColor", "ffa500");
      $('#teamColor').on("input", function () {
        let _0x27a7c9 = $(this).val();
        $("#preview_teamColor").css('background-color', _0x27a7c9);
        localStorage.setItem("teamColor", turkData.teamColor);
        turkData.teamColor = '0x' + _0x27a7c9.substring(0x1);
        console.log(turkData.teamColor);
      });
      let _0x5885bb = localStorage.getItem("teamColor");
      if (_0x5885bb) {
        turkData.teamColor = _0x5885bb;
        $('#preview_teamColor').css("background-color", '#' + _0x5885bb.substring(0x2));
        $("#teamColor").val('#' + _0x5885bb.substring(0x2));
      }
      let _0x484ca2 = localStorage.getItem("top8");
      let _0x561a02 = localStorage.getItem("killFeed");
      if (_0x484ca2 === null) {
        _0x484ca2 = true;
        localStorage.setItem("top8", "true");
      } else {
        _0x484ca2 = _0x484ca2 === "true";
      }
      if (_0x561a02 === null) {
        _0x561a02 = true;
        localStorage.setItem("killFeed", 'true');
      } else {
        _0x561a02 = _0x561a02 === "true";
      }
      $("#toggleTop8").prop('checked', _0x484ca2);
      $("#toggleKillFeed").prop("checked", _0x561a02);
      $("#top8List").toggle(_0x484ca2);
      $("#killFeed").toggle(_0x561a02);
      theoKzObjects.top8 = _0x484ca2;
      theoKzObjects.killFeed = _0x561a02;
      $("#toggleTop8").on('change', function () {
        theoKzObjects.top8 = this.checked;
        $('#top8List').toggle(this.checked);
        localStorage.setItem("top8", this.checked);
      });
      $("#toggleKillFeed").on("change", function () {
        theoKzObjects.killFeed = this.checked;
        $("#killFeed").toggle(this.checked);
        localStorage.setItem("killFeed", this.checked);
      });
      $("#toggleTop8").hover(function () {
        $("#tooltipTop8").fadeIn();
      }, function () {
        $("#tooltipTop8").fadeOut();
      });
      $("#toggleKillFeed").hover(function () {
        $('#tooltipKillFeed').fadeIn();
      }, function () {
        $('#tooltipKillFeed').fadeOut();
      });
      $("#teamCodeInput").on("input", function () {
        turkData.teamCode = $(this).val();
        localStorage.setItem("teamCode", '');
        console.log("Team Code updated:", '');
      });
      let _0xae1d65 = localStorage.getItem('teamCode');
      if (_0xae1d65) {
        turkData.teamCode = _0xae1d65;
        $("#teamCodeInput").val(_0xae1d65);
      }
      lxpdselectedbackground = 0x0;
      lxpdtoplist = 0xa;
      var _0x2e738b = $('#arkaplan');
      var _0x5e75d2 = $("#wtrtop");
      var _0xf4cbbc = localStorage.getItem("wtr-background");
      if (_0xf4cbbc) {
        var _0x36083f = parseInt(_0xf4cbbc);
        _0x2e738b.val(_0x36083f);
        lxpdselectedbackground = _0x36083f;
      }
      let _0x5eb0be = localStorage.getItem("wtr-toplist");
      if (_0x5eb0be) {
        let _0x34f1e0 = parseInt(_0x5eb0be);
        lxpdtoplist = _0x34f1e0;
      }
      let _0x18b760 = true && true && !isNaN(0x23);
      if (_0x18b760) {
        $("#inputReplaceSkin").val(0x23);
      } else {
        let _0x2ff0e1 = $("#inputReplaceSkin").val();
        _0x18b760 = '' !== _0x2ff0e1 && null != _0x2ff0e1 && !isNaN(_0x2ff0e1);
        theoKzObjects.idReplaceSkin = _0x18b760 ? _0x2ff0e1 : 0x23;
      }
      _0x5e75d2.val(lxpdtoplist);
      _0x2e738b.change(function (_0xa642dc) {
        var _0x580d7a = obtenerImagenPorSeleccion(lxpdselectedbackground = this.value);
        if (_0x580d7a) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x580d7a));
        }
        localStorage.setItem("wtr-background", this.value.toString());
      });
      _0x5e75d2.change(function (_0x2d1729) {
        lxpdtoplist = this.value;
        localStorage.setItem('wtr-toplist', this.value.toString());
      });
      $('#idkopyala').click(function () {
        navigator.clipboard.writeText(lxpduserId);
      });
      _0x504feb.prototype.a = function () {
        _0x504feb.parent.prototype.a.call(this);
        if (!_0x504feb.Ek) {
          _0x504feb.Ek = true;
          var _0x4f9ca1 = window.anApp = _0x3938bb;
          _0x4f9ca1.u.Pi(function () {
            if (_0x4f9ca1.u.P()) {
              _0x8575ee.html(_0x4f9ca1.u.zi());
            } else {
              _0x8575ee.html('0');
            }
          });
        }
      };
      _0x504feb.Fk = $("#coins-view");
      _0x504feb.Gk = $("#leaders-view");
      _0x504feb.Hk = $('#profile-view');
      _0x504feb.Ik = $("#settings-view");
      _0x504feb.Jk = $("#login-view");
      _0x504feb.Kk = $("#skins-view");
      _0x504feb.Lk = $('#store-view');
      _0x504feb.wtrset = $("#wormtr-settings-view");
      _0x504feb.Mk = $('#wear-view');
      _0x504feb.Nk = $("#withdraw-consent-view");
      _0x504feb.Ok = $("#delete-account-view");
      _0x504feb.Pk = $("#please-wait-view");
      _0x504feb.prototype.ii = function () {
        _0xec0c85.fk.stop();
        _0xec0c85.fk.fadeOut(0xc8);
        _0xec0c85.gk.stop();
        _0xec0c85.gk.fadeOut(0xc8);
        _0xec0c85.hk.stop();
        _0xec0c85.hk.fadeOut(0xc8);
        _0xec0c85.ik.stop();
        _0xec0c85.ik.fadeIn(0xc8);
        _0xec0c85.jk.stop();
        _0xec0c85.jk.fadeOut(0xc8);
        _0xec0c85.kk.stop();
        _0xec0c85.kk.fadeOut(0xc8);
        _0xec0c85.nk.stop();
        _0xec0c85.nk.fadeIn(0xc8);
        _0xec0c85.ok.stop();
        _0xec0c85.ok.fadeIn(0xc8);
        _0x1aec94.html(this.ad);
        _0xd082d9.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x504feb.prototype.Rk = function () {};
      _0x504feb.prototype.Sk = function () {
        _0x4159b9.Pk.stop();
        _0x4159b9.Pk.fadeIn(0x12c);
      };
      _0x504feb.prototype.Qk = function () {
        _0x4159b9.Pk.stop();
        _0x4159b9.Pk.fadeOut(0x12c);
      };
      return _0x504feb;
    }();
    _0xd36243 = $("#store-buy-coins_125000");
    _0x5bc9f4 = $("#store-buy-coins_50000");
    _0x494e90 = $("#store-buy-coins_16000");
    _0xd5cd8d = $('#store-buy-coins_7000');
    _0x4d50b6 = $("#store-buy-coins_3250");
    _0x5c4069 = $("#store-buy-coins_1250");
    (_0x5dae02 = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES['index.game.popup.menu.coins.tab'], false);
      var _0x17c58c = window.anApp = _0x3938bb;
      var _0x27d4bb = this;
      _0xd36243.click(function () {
        _0x17c58c.r.Cd();
        _0x27d4bb.Tk("coins_125000");
      });
      _0x5bc9f4.click(function () {
        _0x17c58c.r.Cd();
        _0x27d4bb.Tk("coins_50000");
      });
      _0x494e90.click(function () {
        _0x17c58c.r.Cd();
        _0x27d4bb.Tk("coins_16000");
      });
      _0xd5cd8d.click(function () {
        _0x17c58c.r.Cd();
        _0x27d4bb.Tk('coins_7000');
      });
      _0x4d50b6.click(function () {
        _0x17c58c.r.Cd();
        _0x27d4bb.Tk('coins_3250');
      });
      _0x5c4069.click(function () {
        _0x17c58c.r.Cd();
        _0x27d4bb.Tk("coins_1250");
      });
    })).prototype.a = function () {
      _0x5dae02.parent.prototype.a.call(this);
    };
    _0x5dae02.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeIn(0xc8);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x5dae02.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
    };
    _0x5dae02.prototype.Tk = function (_0x3d130f) {};
    _0x4246a7 = $("#highscore-table");
    _0x5d4a2b = $('#leaders-button-level');
    _0x2e22e5 = $("#leaders-button-highscore");
    _0xa2176e = $("#leaders-button-kills");
    (_0x1cdaaf = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
      var _0x45710c = window.anApp = _0x3938bb;
      var _0x2172a4 = this;
      this.Uk = {};
      this.Vk = {
        'Wk': {
          'Xk': _0x5d4a2b,
          'Yk': 'byLevel'
        },
        'Zk': {
          'Xk': _0x2e22e5,
          'Yk': 'byHighScore'
        },
        '$k': {
          'Xk': _0xa2176e,
          'Yk': "byKillsAndHeadShots"
        }
      };
      _0x5d4a2b.click(function () {
        _0x45710c.r.Cd();
        _0x2172a4._k(_0x2172a4.Vk.Wk);
      });
      _0x2e22e5.click(function () {
        _0x45710c.r.Cd();
        _0x2172a4._k(_0x2172a4.Vk.Zk);
      });
      _0xa2176e.click(function () {
        _0x45710c.r.Cd();
        _0x2172a4._k(_0x2172a4.Vk.$k);
      });
    })).prototype.a = function () {
      _0x1cdaaf.parent.prototype.a.call(this);
    };
    _0x1cdaaf.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeIn(0xc8);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x1cdaaf.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
      var _0x364f46 = this;
      this.Sk();
      $.get(_0x276ee + "/pub/leaders", function (_0x17322c) {
        _0x364f46.Uk = _0x17322c;
        _0x364f46._k(null != _0x364f46.al ? _0x364f46.al : _0x364f46.Vk.Wk);
        _0x364f46.Qk();
      }).done(function () {
        _0x364f46.Qk();
      });
    };
    _0x1cdaaf.prototype._k = function (_0x23a52d) {
      this.al = _0x23a52d;
      for (var _0x2aa087 in this.Vk) if (this.Vk.hasOwnProperty(_0x2aa087)) {
        this.Vk[_0x2aa087].Xk.removeClass("pressed");
      }
      this.al.Xk.addClass("pressed");
      var _0x33b3cb = this.Uk[this.al.Yk];
      var _0x50fea9 = '';
      for (var _0x28bbc1 = 0x0; _0x28bbc1 < _0x33b3cb.length; _0x28bbc1++) {
        var _0x29320f = _0x33b3cb[_0x28bbc1];
        _0x50fea9 += "<div class=\"table-row\"><span>" + (_0x28bbc1 + 0x1) + "</span><span><img src=\"" + _0x29320f.avatarUrl + "\"/></span><span>" + _0x29320f.username + "</span><span>" + _0x29320f.level + "</span><span>" + _0x29320f.highScore + '</span><span>' + _0x29320f.headShots + " / " + _0x29320f.kills + "</span></div>";
      }
      _0x4246a7.empty();
      _0x4246a7.append(_0x50fea9);
    };
    _0x27c292 = $("#popup-login-gg");
    $("#background-canvas").replaceWith("\n  <div style=\"position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0;\">\n    <canvas id=\"background-canvas\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\"></canvas>\n  </div>\n  <script>\n    (function() {\n      const canvas = document.getElementById('background-canvas');\n      const ctx = canvas.getContext('2d');\n      let width, height;\n\n      const backgroundImage = new Image();\n      backgroundImage.src = 'https://wormate.io/images/bg-event-pattern-valday2024.png';\n\n      // Orijinal renkli opacity’li renk katmanları\n      const colorLayers = [\n        {colorStart: 'rgba(255, 100, 180, 0.45)', colorEnd: 'rgba(255, 100, 180, 0)', xRatio: -0.1, yRatio: 0.1, radius: 650, speedX: 0.12, speedY: 0.08},\n        {colorStart: 'rgba(150, 100, 255, 0.40)', colorEnd: 'rgba(150, 100, 255, 0)', xRatio: 1.1, yRatio: 0.3, radius: 700, speedX: -0.10, speedY: 0.05},\n        {colorStart: 'rgba(100, 200, 255, 0.45)', colorEnd: 'rgba(100, 200, 255, 0)', xRatio: 0.5, yRatio: 1.1, radius: 650, speedX: 0.06, speedY: -0.07},\n        {colorStart: 'rgba(255, 255, 255, 0.30)', colorEnd: 'rgba(255, 255, 255, 0)', xRatio: 0.9, yRatio: -0.1, radius: 600, speedX: -0.05, speedY: 0.10}\n      ];\n\n      let spots = [];\n\n      function resize() {\n        width = window.innerWidth;\n        height = window.innerHeight;\n        const dpr = window.devicePixelRatio || 1;\n        canvas.width = width * dpr;\n        canvas.height = height * dpr;\n        canvas.style.width = width + \"px\";\n        canvas.style.height = height + \"px\";\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n        ctx.scale(dpr, dpr);\n\n        spots = colorLayers.map(layer => ({\n          x: width * layer.xRatio,\n          y: height * layer.yRatio,\n          radius: layer.radius,\n          colorStart: layer.colorStart,\n          colorEnd: layer.colorEnd,\n          speedX: layer.speedX,\n          speedY: layer.speedY\n        }));\n      }\n      resize();\n      window.addEventListener('resize', resize);\n\n      // Daha koyu siyah kenar efekti (vignette)\n      function drawBlackVignette() {\n        let vignette = ctx.createRadialGradient(\n          width / 2, height / 2,\n          Math.min(width, height) / 2 * 0.4,\n          width / 2, height / 2,\n          Math.min(width, height) / 2\n        );\n        vignette.addColorStop(0, 'rgba(0,0,0,0)');\n        vignette.addColorStop(1, 'rgba(0,0,0,0.85)');\n        ctx.fillStyle = vignette;\n        ctx.fillRect(0, 0, width, height);\n      }\n\n      function drawBackground() {\n        if(backgroundImage.complete) {\n          ctx.globalAlpha = 0.9;\n          ctx.drawImage(backgroundImage, 0, 0, width, height);\n          ctx.globalAlpha = 1;\n          drawColorSpots();\n          drawBlackVignette();\n        }\n      }\n\n      function drawColorSpots() {\n        spots.forEach(spot => {\n          spot.x += spot.speedX;\n          spot.y += spot.speedY;\n\n          if (spot.x - spot.radius > width) spot.x = -spot.radius;\n          else if (spot.x + spot.radius < 0) spot.x = width + spot.radius;\n\n          if (spot.y - spot.radius > height) spot.y = -spot.radius;\n          else if (spot.y + spot.radius < 0) spot.y = height + spot.radius;\n\n          const grad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.radius);\n          grad.addColorStop(0, spot.colorStart);\n          grad.addColorStop(1, spot.colorEnd);\n\n          ctx.fillStyle = grad;\n          ctx.beginPath();\n          ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI*2);\n          ctx.fill();\n        });\n      }\n\n      // Konfetti animasyonunu kaldırdım (isteğine göre ekleyebilirim)\n\n      function animate() {\n        ctx.clearRect(0, 0, width, height);\n        drawBackground();\n        requestAnimationFrame(animate);\n      }\n\n      backgroundImage.onload = () => {\n        animate();\n      };\n    })();\n  </script>\n");
    _0x39757c = $("#popup-login-fb");
    (_0x8344d0 = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES['index.game.popup.menu.login.tab'], false);
      var _0x1ce8af = window.anApp = _0x3938bb;
      var _0x267233 = this;
      _0x27c292.click(function () {
        _0x1ce8af.r.Cd();
        _0x267233.Sk();
        _0x1ce8af.u.Qi(function () {
          _0x267233.Qk();
        });
        setTimeout(function () {
          _0x267233.Qk();
        }, 0x2710);
        _0x1ce8af.u.Zi();
      });
      _0x39757c.click(function () {
        _0x1ce8af.r.Cd();
        _0x267233.Sk();
        _0x1ce8af.u.Qi(function () {
          _0x267233.Qk();
        });
        setTimeout(function () {
          _0x267233.Qk();
        }, 0x2710);
        _0x1ce8af.u.Vi();
      });
    })).prototype.a = function () {
      _0x8344d0.parent.prototype.a.call(this);
    };
    _0x8344d0.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeIn(0xc8);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x8344d0.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
    };
    _0x96874 = $("#profile-avatar");
    _0x54ff8e = $("#profile-username");
    _0x54e680 = $("#profile-experience-bar");
    _0x2d17c1 = $("#profile-experience-val");
    _0x18bbd5 = $('#profile-level');
    _0x2c53cb = $("#profile-stat-highScore");
    _0x3a9cf1 = $("#profile-stat-bestSurvivalTime");
    _0x49b808 = $('#profile-stat-kills');
    _0x19cd15 = $("#profile-stat-headshots");
    _0x31c718 = $('#profile-stat-gamesPlayed');
    _0x322868 = $("#profile-stat-totalTimeSpent");
    _0x359ba0 = $("#profile-stat-registrationDate");
    (_0x31d67b = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES['index.game.popup.menu.profile.tab'], true);
    })).prototype.a = function () {
      _0x31d67b.parent.prototype.a.call(this);
    };
    _0x31d67b.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeIn(0xc8);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x31d67b.prototype.ji = function () {
      var _0x4c8d6d = window.anApp = _0x3938bb;
      _0x4c8d6d.r.Dd();
      var _0x1bb0f8 = _0x4c8d6d.u.Oi();
      var _0x3dfb3a = moment([_0x1bb0f8.year, _0x1bb0f8.month - 0x1, _0x1bb0f8.day]).format('LL');
      _0x54ff8e.html(_0x4c8d6d.u.wi());
      _0x96874.attr("src", _0x4c8d6d.u.xi());
      _0x54e680.width(0x64 * _0x4c8d6d.u.Bi() / _0x4c8d6d.u.Ci() + '%');
      _0x2d17c1.html(_0x4c8d6d.u.Bi() + " / " + _0x4c8d6d.u.Ci());
      _0x18bbd5.html(_0x4c8d6d.u.Ai());
      _0x2c53cb.html(_0x4c8d6d.u.Ii());
      _0x3a9cf1.html(_0x1318e5(_0x4c8d6d.u.Ji()));
      _0x49b808.html(_0x4c8d6d.u.Ki());
      _0x19cd15.html(_0x4c8d6d.u.Li());
      _0x31c718.html(_0x4c8d6d.u.Mi());
      _0x322868.html(_0x1318e5(_0x4c8d6d.u.Ni()));
      _0x359ba0.html(_0x3dfb3a);
    };
    _0x3f5944 = $("#settings-music-enabled-switch");
    _0x4921e9 = $("#settings-sfx-enabled-switch");
    _0x292e66 = $("#settings-show-names-switch");
    _0x5e6c06 = $("#popup-logout");
    _0xa5c3bd = $('#popup-logout-container');
    _0x5c9feb = $("#popup-delete-account");
    _0x546070 = $("#popup-delete-account-container");
    _0x25281b = $("#popup-withdraw-consent");
    (_0x2bc483 = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
      var _0x3c9db0 = this;
      var _0x999bda = window.anApp = _0x3938bb;
      _0x3f5944.click(function () {
        var _0x28c3c2 = !!_0x3f5944.prop("checked");
        _0x23921c(_0x216031.Me, _0x28c3c2, 0x1e);
        _0x999bda.r.td(_0x28c3c2);
        _0x999bda.r.Cd();
      });
      _0x4921e9.click(function () {
        var _0x1d67cc = !!_0x4921e9.prop("checked");
        _0x23921c(_0x216031.Ne, _0x1d67cc, 0x1e);
        _0x999bda.r.rd(_0x1d67cc);
        _0x999bda.r.Cd();
      });
      _0x292e66.click(function () {
        _0x999bda.r.Cd();
      });
      _0x5e6c06.click(function () {
        _0x999bda.r.Cd();
        _0x3c9db0.Sk();
        setTimeout(function () {
          _0x3c9db0.Qk();
        }, 0x7d0);
        _0x999bda.u.Wi();
      });
      _0x5c9feb.click(function () {
        if (_0x999bda.u.P()) {
          _0x999bda.r.Cd();
          _0x999bda.s.I(_0x999bda.s.Vh);
        } else {
          _0x999bda.r.Hd();
        }
      });
      _0x25281b.click(function () {
        if (_0x999bda.Y()) {
          _0x999bda.r.Cd();
          _0x999bda.s.I(_0x999bda.s.Uh);
        } else {
          _0x999bda.r.Hd();
        }
      });
    })).prototype.a = function () {
      _0x2bc483.parent.prototype.a.call(this);
      var _0x51495e = window.anApp = _0x3938bb;
      var _0x2eb774 = undefined;
      _0x2eb774 = "false" !== _0x5ce09a(_0x216031.Me);
      _0x3f5944.prop("checked", _0x2eb774);
      _0x51495e.r.td(_0x2eb774);
      var _0x154905 = undefined;
      _0x154905 = "false" !== _0x5ce09a(_0x216031.Ne);
      _0x4921e9.prop("checked", _0x154905);
      _0x51495e.r.rd(_0x154905);
      var _0x257527 = undefined;
      _0x257527 = 'false' !== _0x5ce09a(_0x216031.ya);
      console.log("Load sPN: " + _0x257527);
      _0x292e66.prop('checked', _0x257527);
      _0x51495e.u.V(function () {
        _0xa5c3bd.toggle(_0x51495e.u.P());
        _0x546070.toggle(_0x51495e.u.P());
      });
    };
    _0x2bc483.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeIn(0xc8);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x2bc483.prototype.ji = function () {
      var _0x123921 = window.anApp = _0x3938bb;
      _0x123921.r.Dd();
      if (_0x123921.Y()) {
        _0x25281b.show();
      } else {
        _0x25281b.hide();
      }
    };
    _0x2bc483.prototype.wa = function () {
      return _0x292e66.prop("checked");
    };
    _0x13ef1f = $("#store-view-canv");
    _0x3210f6 = $("#skin-description-text");
    _0xde137b = $("#skin-group-description-text");
    _0x377ecc = $("#store-locked-bar");
    _0x5bbba4 = $("#store-locked-bar-text");
    _0x22e08b = $("#store-buy-button");
    _0x6b137b = $('#store-item-price');
    _0x51daa2 = $("#store-groups");
    _0x372478 = $("#store-view-prev");
    _0x5b4c08 = $('#store-view-next');
    (_0x4d4f44 = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], true);
      var _0x32a3ec = this;
      var _0x221b83 = window.anApp = _0x3938bb;
      this.bl = null;
      this.cl = [];
      this.dl = {};
      this.el = new _0x2cf077(_0x13ef1f);
      _0x22e08b.click(function () {
        _0x221b83.r.Cd();
        _0x32a3ec.fl();
      });
      _0x372478.click(function () {
        _0x221b83.r.Cd();
        _0x32a3ec.bl.gl();
      });
      _0x5b4c08.click(function () {
        _0x221b83.r.Cd();
        _0x32a3ec.bl.hl();
      });
    })).prototype.a = function () {
      _0x4d4f44.parent.prototype.a.call(this);
      var _0x7f0fff = this;
      var _0x24cc34 = window.anApp = _0x3938bb;
      _0x24cc34.p.ca(function () {
        var _0x290b64 = _0x24cc34.p.Ac();
        if (null != _0x290b64) {
          _0x7f0fff.cl = [];
          for (var _0x781f44 = 0x0; _0x781f44 < _0x290b64.skinGroupArrayDict.length; _0x781f44++) {
            _0x7f0fff.cl.push(new _0x384cbc(_0x7f0fff, _0x290b64.skinGroupArrayDict[_0x781f44]));
          }
          _0x7f0fff.dl = {};
          for (var _0x4c010c = 0x0; _0x4c010c < _0x290b64.skinArrayDict.length; _0x4c010c++) {
            var _0x1a77bb = _0x290b64.skinArrayDict[_0x4c010c];
            _0x7f0fff.dl[_0x1a77bb.id] = _0x1a77bb;
          }
        }
      });
      this.il(false);
      _0x24cc34.t.xh(function () {
        _0x7f0fff.il(false);
      });
    };
    _0x4d4f44.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeIn(0xc8);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x4d4f44.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
      this.jl();
      this.el.Le(true);
    };
    _0x4d4f44.prototype.ei = function () {
      this.el.Le(false);
    };
    _0x4d4f44.prototype.Ra = function () {
      this.el.Ra();
    };
    _0x4d4f44.prototype.Pa = function (_0xcde91f, _0x17846c) {
      this.el.Pa();
    };
    _0x4d4f44.prototype.jl = function () {
      var _0x482b1b = this;
      var _0x5a930f = this;
      var _0x35dc30 = window.anApp = _0x3938bb;
      _0x51daa2.empty();
      for (var _0x566cc8 = 0x0; _0x566cc8 < this.cl.length; _0x566cc8++) {
        !function (_0x277be4) {
          var _0x4474a1 = _0x482b1b.cl[_0x277be4];
          var _0x546167 = document.createElement('li');
          _0x51daa2.append(_0x546167);
          var _0x53488b = $(_0x546167);
          _0x53488b.html(_0x4474a1.kl());
          _0x53488b.click(function () {
            _0x35dc30.r.Cd();
            _0x5a930f.ll(_0x4474a1);
          });
          _0x4474a1.ml = _0x53488b;
        }(_0x566cc8);
      }
      if (this.cl.length > 0x0) {
        var _0xc6bf0e = _0x35dc30.t.ha(_0x199e00.ia);
        for (var _0x566cc8 = 0x0; _0x566cc8 < this.cl.length; _0x566cc8++) {
          var _0x40c13a = this.cl[_0x566cc8];
          var _0x196703 = _0x40c13a.nl.list;
          for (var _0x174447 = 0x0; _0x174447 < _0x196703.length; _0x174447++) {
            if (_0x196703[_0x174447] == _0xc6bf0e) {
              _0x40c13a.ol = _0x174447;
              return void this.ll(_0x40c13a);
            }
          }
        }
        this.ll(this.cl[0x0]);
      }
    };
    _0x4d4f44.prototype.ll = function (_0x1cf211) {
      if (this.bl != _0x1cf211) {
        var _0x259b63 = window.anApp = _0x3938bb;
        this.bl = _0x1cf211;
        _0x51daa2.children().removeClass("pressed");
        if (this.bl.ml) {
          this.bl.ml.addClass("pressed");
        }
        _0xde137b.html('');
        if (null != _0x1cf211.nl) {
          var _0xd67db8 = _0x259b63.p.Ac().textDict[_0x1cf211.nl.description];
          if (null != _0xd67db8) {
            _0xde137b.html((_0xd67db8[_0x419a59] ? _0xd67db8[_0x419a59] : _0xd67db8.en ? _0xd67db8.en : _0xd67db8.x).includes('href') ? (_0xd67db8[_0x419a59] ? _0xd67db8[_0x419a59] : _0xd67db8.en ? _0xd67db8.en : _0xd67db8.x).replaceAll('href', "target=\"_black\" href") : _0xd67db8[_0x419a59] ? _0xd67db8[_0x419a59] : _0xd67db8.en ? _0xd67db8.en : _0xd67db8.x);
          }
        }
        this.il(true);
      }
    };
    _0x4d4f44.prototype.pl = function () {
      return null == this.bl ? _0x5c63c0.Yg() : this.bl.ql();
    };
    _0x4d4f44.prototype.fl = function () {
      var _0x26406e = this;
      this.pl().ah(function (_0x4c15d0) {
        _0x26406e.rl(_0x4c15d0);
      });
    };
    _0x4d4f44.prototype.rl = function (_0x847c5d) {
      var _0x4f71b7 = this;
      var _0x5d111a = window.anApp = _0x3938bb;
      var _0x2cb808 = this.dl[_0x847c5d].price;
      if (!(_0x5d111a.u.zi() < _0x2cb808)) {
        this.Sk();
        var _0x448708 = _0x5d111a.t.ha(_0x199e00.ia);
        var _0x5d0d96 = _0x5d111a.t.ha(_0x199e00.ja);
        var _0x3197f2 = _0x5d111a.t.ha(_0x199e00.ka);
        var _0xff03bd = _0x5d111a.t.ha(_0x199e00.la);
        var _0x3e462d = _0x5d111a.t.ha(_0x199e00.ma);
        _0x5d111a.u.Ui(_0x847c5d, _0x199e00.ia, function () {
          _0x5d111a.t.Bh(_0x448708, _0x199e00.ia);
          _0x5d111a.t.Bh(_0x5d0d96, _0x199e00.ja);
          _0x5d111a.t.Bh(_0x3197f2, _0x199e00.ka);
          _0x5d111a.t.Bh(_0xff03bd, _0x199e00.la);
          _0x5d111a.t.Bh(_0x3e462d, _0x199e00.ma);
          if (_0x5d111a.u.Ch(_0x847c5d, _0x199e00.ia)) {
            _0x5d111a.t.Bh(_0x847c5d, _0x199e00.ia);
          }
          _0x4f71b7.Qk();
        });
      }
    };
    _0x4d4f44.prototype.il = function (_0x2cd7bf) {
      var _0x360a69 = window.anApp = _0x3938bb;
      this.el.bk(_0x360a69.t.ha(_0x199e00.ja), false, false);
      this.el.ck(_0x360a69.t.ha(_0x199e00.ka), false, false);
      this.el.dk(_0x360a69.t.ha(_0x199e00.la), false, false);
      this.el.ek(_0x360a69.t.ha(_0x199e00.ma), false, false);
      var _0x5d9064 = this.pl();
      if (_0x5d9064._g()) {
        var _0x3d260b = _0x5d9064.$g();
        var _0x5e0c5d = this.dl[_0x3d260b];
        var _0x358312 = false;
        if (_0x360a69.t.Ja(_0x3d260b, _0x199e00.ia)) {
          _0x377ecc.hide();
          _0x22e08b.hide();
        } else {
          if (null == _0x5e0c5d || 0x1 == _0x5e0c5d.nonbuyable) {
            _0x358312 = true;
            _0x377ecc.show();
            _0x22e08b.hide();
            _0x5bbba4.text(window.I18N_MESSAGES['index.game.popup.menu.store.locked']);
            if (null != _0x5e0c5d && _0x5e0c5d.nonbuyable && null != _0x5e0c5d.nonbuyableCause) {
              var _0xc042aa = _0x360a69.p.Ac().textDict[_0x5e0c5d.nonbuyableCause];
              if (null != _0xc042aa) {
                _0x5bbba4.text(_0xc042aa[_0x419a59] ? _0xc042aa[_0x419a59] : _0xc042aa.en ? _0xc042aa.en : _0xc042aa.x);
              }
            }
          } else {
            _0x377ecc.hide();
            _0x22e08b.show();
            _0x6b137b.html(_0x5e0c5d.price);
          }
        }
        _0x3210f6.html("ID: " + _0x3d260b + " TYPE: " + _0x199e00.ia);
        if (null != _0x5e0c5d && null != _0x5e0c5d.description) {
          var _0x3d0c4e = _0x360a69.p.Ac().textDict[_0x5e0c5d.description];
          if (null != _0x3d0c4e) {
            _0x3210f6.html((_0x3d0c4e[_0x419a59] ? _0x3d0c4e[_0x419a59] : _0x3d0c4e.en ? _0x3d0c4e.en : _0x3d0c4e.x).includes('href') ? (_0x3d0c4e[_0x419a59] ? _0x3d0c4e[_0x419a59] : _0x3d0c4e.en ? _0x3d0c4e.en : _0x3d0c4e.x).replaceAll('href', "target=\"_black\" href") : _0x3d0c4e[_0x419a59] ? _0x3d0c4e[_0x419a59] : _0x3d0c4e.en ? _0x3d0c4e.en : _0x3d0c4e.x);
          }
        }
        this.el.ak(_0x3d260b, true, _0x358312);
        if (_0x2cd7bf) {
          _0x360a69.t.Bh(_0x3d260b, _0x199e00.ia);
        }
      }
    };
    _0x384cbc = function () {
      function _0x325ec8(_0x5ab9ce, _0x3bc912) {
        this.sl = _0x5ab9ce;
        this.ol = 0x0;
        this.nl = _0x3bc912;
      }
      _0x325ec8.prototype.gl = function () {
        if (--this.ol < 0x0) {
          this.ol = this.nl.list.length - 0x1;
        }
        this.sl.il(true);
      };
      _0x325ec8.prototype.hl = function () {
        if (++this.ol >= this.nl.list.length) {
          this.ol = 0x0;
        }
        this.sl.il(true);
      };
      _0x325ec8.prototype.kl = function () {
        let _0x51c4e0 = this.nl.name[_0x419a59] ? this.nl.name[_0x419a59] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
        console.log(this.nl);
        if (this.nl.img) {
          _0x51c4e0 = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
        }
        return _0x51c4e0;
      };
      _0x325ec8.prototype.ql = function () {
        return this.ol >= this.nl.list.length ? _0x5c63c0.Yg() : _0x5c63c0.Zg(this.nl.list[this.ol]);
      };
      return _0x325ec8;
    }();
    _0x331236 = $("#store-go-coins-button");
    _0x5bd173 = $("#store-go-skins-button");
    _0x14df9d = $("#store-go-wear-button");
    (_0x4410ea = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
      var _0x426e02 = window.anApp = _0x3938bb;
      _0x331236.click(function () {
        _0x426e02.r.Cd();
        _0x426e02.s.I(_0x426e02.s.Wh);
      });
      _0x5bd173.click(function () {
        _0x426e02.r.Cd();
        _0x426e02.s.I(_0x426e02.s.$h);
      });
      _0x14df9d.click(function () {
        _0x426e02.r.Cd();
        _0x426e02.s.I(_0x426e02.s.ai);
      });
    })).prototype.a = function () {
      _0x4410ea.parent.prototype.a.call(this);
    };
    _0x4410ea.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeIn(0xc8);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x4410ea.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
    };
    _0x30ef39 = $("#settings-kufur-isim");
    (_0x3d6460 = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, "WTR ⚙️SETTINGS", 0x0);
      lxpdsettingsblockbadwords = !('true' !== localStorage.getItem("wtr-block-bad-words"));
      _0x30ef39.prop("checked", lxpdsettingsblockbadwords);
      _0x30ef39.click(function () {
        let _0x383afe = _0x30ef39.prop("checked");
        lxpdsettingsblockbadwords = _0x383afe;
        localStorage.setItem("wtr-block-bad-words", _0x383afe ? "true" : 'false');
      });
    })).prototype.a = function () {
      _0x3d6460.parent.prototype.a.call(this);
    };
    _0x3d6460.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeIn(0xc8);
    };
    _0x3d6460.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
    };
    _0x264ebf = $("#wear-view-canv");
    _0xf04b5a = $('#wear-description-text');
    _0x1c2331 = $("#wear-locked-bar");
    _0x319d5c = $("#wear-locked-bar-text");
    _0x41b58e = $("#wear-buy-button");
    _0x348b47 = $("#wear-item-price");
    _0x37525c = $("#wear-eyes-button");
    _0x5965ce = $("#wear-mouths-button");
    _0x41c771 = $("#wear-glasses-button");
    _0x5a4e7c = $("#wear-hats-button");
    _0xb8f9ac = $('#wear-tint-chooser');
    _0x4669e0 = $('#wear-view-prev');
    _0x15b442 = $('#wear-view-next');
    (_0x1d32ec = _0x499ed3(_0x4159b9, function () {
      var _0x2cb6a1 = this;
      _0x4159b9.call(this, window.I18N_MESSAGES['index.game.popup.menu.wear.tab'], true);
      var _0x535cfa = window.anApp = _0x3938bb;
      var _0x443ac8 = this;
      this.tl = [];
      this.ja = new _0x577f36(this, _0x199e00.ja, _0x37525c);
      this.ka = new _0x577f36(this, _0x199e00.ka, _0x5965ce);
      this.la = new _0x577f36(this, _0x199e00.la, _0x41c771);
      this.ma = new _0x577f36(this, _0x199e00.ma, _0x5a4e7c);
      this.ul = null;
      this.vl = null;
      this.wl = null;
      this.xl = null;
      this.yl = null;
      this.zl = null;
      this.Al = new _0x2cf077(_0x264ebf);
      _0x41b58e.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.Bl();
      });
      _0x4669e0.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.ul.Cl();
      });
      _0x15b442.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.ul.Dl();
      });
      _0x37525c.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.El(_0x2cb6a1.ja);
      });
      _0x5965ce.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.El(_0x2cb6a1.ka);
      });
      _0x41c771.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.El(_0x2cb6a1.la);
      });
      _0x5a4e7c.click(function () {
        _0x535cfa.r.Cd();
        _0x443ac8.El(_0x2cb6a1.ma);
      });
      this.tl.push(this.ja);
      this.tl.push(this.ka);
      this.tl.push(this.la);
      this.tl.push(this.ma);
    })).prototype.a = function () {
      _0x1d32ec.parent.prototype.a.call(this);
      var _0x48bd8e = window.anApp = _0x3938bb;
      var _0x119294 = this;
      _0x48bd8e.p.ca(function () {
        var _0x1ceb61 = _0x48bd8e.p.Ac();
        if (null != _0x1ceb61) {
          _0x119294.vl = _0x1ceb61.eyesDict;
          _0x119294.wl = _0x1ceb61.mouthDict;
          _0x119294.xl = _0x1ceb61.glassesDict;
          _0x119294.yl = _0x1ceb61.hatDict;
          _0x119294.zl = _0x1ceb61.colorDict;
          _0x119294.ja.Fl(_0x1ceb61.eyesVariantArray);
          _0x119294.ja.Gl(_0x119294.vl);
          _0x119294.ka.Fl(_0x1ceb61.mouthVariantArray);
          _0x119294.ka.Gl(_0x119294.wl);
          _0x119294.la.Fl(_0x1ceb61.glassesVariantArray);
          _0x119294.la.Gl(_0x119294.xl);
          _0x119294.ma.Fl(_0x1ceb61.hatVariantArray);
          _0x119294.ma.Gl(_0x119294.yl);
        }
      });
      this.il(false);
      _0x48bd8e.t.xh(function () {
        _0x119294.il(false);
      });
    };
    _0x1d32ec.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeIn(0xc8);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x1d32ec.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
      this.El(null != this.ul ? this.ul : this.ja);
      this.Al.Le(true);
    };
    _0x1d32ec.prototype.ei = function () {
      this.Al.Le(false);
    };
    _0x1d32ec.prototype.Ra = function () {
      this.Al.Ra();
    };
    _0x1d32ec.prototype.Pa = function (_0x1e6852, _0x2c6632) {
      this.Al.Pa();
    };
    _0x1d32ec.prototype.El = function (_0x227771) {
      this.ul = _0x227771;
      for (var _0x3902d4 = 0x0; _0x3902d4 < this.tl.length; _0x3902d4++) {
        this.tl[_0x3902d4].Xk.removeClass('pressed');
      }
      this.ul.Xk.addClass("pressed");
      this.ul.ii();
    };
    _0x1d32ec.prototype.Hl = function () {
      return null == this.ul ? _0x5c63c0.Yg() : _0x5c63c0.Zg({
        'Lb': this.ul.ql(),
        'rc': this.ul.rc
      });
    };
    _0x1d32ec.prototype.Bl = function () {
      var _0x3dd9b9 = this;
      this.Hl().ah(function (_0x62f8bb) {
        _0x3dd9b9.Ui(_0x62f8bb.Lb, _0x62f8bb.rc);
      });
    };
    _0x1d32ec.prototype.Ui = function (_0x304df9, _0x54f6d1) {
      var _0x384f89 = this;
      var _0x1bc65b = window.anApp = _0x3938bb;
      var _0x2dab10 = undefined;
      switch (_0x54f6d1) {
        case _0x199e00.ja:
          _0x2dab10 = this.vl[_0x304df9].price;
          break;
        case _0x199e00.ka:
          _0x2dab10 = this.wl[_0x304df9].price;
          break;
        case _0x199e00.la:
          _0x2dab10 = this.xl[_0x304df9].price;
          break;
        case _0x199e00.ma:
          _0x2dab10 = this.yl[_0x304df9].price;
          break;
        default:
          return;
      }
      if (!(_0x1bc65b.u.zi() < _0x2dab10)) {
        this.Sk();
        var _0x2adbd3 = _0x1bc65b.t.ha(_0x199e00.ia);
        var _0x5f5024 = _0x1bc65b.t.ha(_0x199e00.ja);
        var _0x337359 = _0x1bc65b.t.ha(_0x199e00.ka);
        var _0x1158b2 = _0x1bc65b.t.ha(_0x199e00.la);
        var _0x1aaad6 = _0x1bc65b.t.ha(_0x199e00.ma);
        _0x1bc65b.u.Ui(_0x304df9, _0x54f6d1, function () {
          _0x1bc65b.t.Bh(_0x2adbd3, _0x199e00.ia);
          _0x1bc65b.t.Bh(_0x5f5024, _0x199e00.ja);
          _0x1bc65b.t.Bh(_0x337359, _0x199e00.ka);
          _0x1bc65b.t.Bh(_0x1158b2, _0x199e00.la);
          _0x1bc65b.t.Bh(_0x1aaad6, _0x199e00.ma);
          if (_0x1bc65b.u.Ch(_0x304df9, _0x54f6d1)) {
            _0x1bc65b.t.Bh(_0x304df9, _0x54f6d1);
          }
          _0x384f89.Qk();
        });
      }
    };
    _0x1d32ec.prototype.Il = function (_0x550da9, _0x469181) {
      switch (_0x469181) {
        case _0x199e00.ja:
          return this.vl[_0x550da9];
        case _0x199e00.ka:
          return this.wl[_0x550da9];
        case _0x199e00.la:
          return this.xl[_0x550da9];
        case _0x199e00.ma:
          return this.yl[_0x550da9];
      }
      return null;
    };
    _0x1d32ec.prototype.il = function (_0x4b31b0) {
      var _0xc3b79b = window.anApp = _0x3938bb;
      this.Al.ak(_0xc3b79b.t.ha(_0x199e00.ia), false, false);
      this.Al.bk(_0xc3b79b.t.ha(_0x199e00.ja), false, false);
      this.Al.ck(_0xc3b79b.t.ha(_0x199e00.ka), false, false);
      this.Al.dk(_0xc3b79b.t.ha(_0x199e00.la), false, false);
      this.Al.ek(_0xc3b79b.t.ha(_0x199e00.ma), false, false);
      var _0x27105a = this.Hl();
      if (_0x27105a._g()) {
        var _0x2393c1 = _0x27105a.$g();
        var _0x220501 = this.Il(_0x2393c1.Lb, _0x2393c1.rc);
        var _0x5bd733 = false;
        if (_0xc3b79b.t.Ja(_0x2393c1.Lb, _0x2393c1.rc)) {
          _0x1c2331.hide();
          _0x41b58e.hide();
        } else {
          if (null == _0x220501 || 0x1 == _0x220501.nonbuyable) {
            _0x5bd733 = true;
            _0x1c2331.show();
            _0x41b58e.hide();
            _0x319d5c.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
            if (null != _0x220501 && _0x220501.nonbuyable && null != _0x220501.nonbuyableCause) {
              var _0x5e3eba = _0xc3b79b.p.Ac().textDict[_0x220501.nonbuyableCause];
              if (null != _0x5e3eba) {
                _0x319d5c.text(_0x5e3eba[_0x419a59] ? _0x5e3eba[_0x419a59] : _0x5e3eba.en ? _0x5e3eba.en : _0x5e3eba.x);
              }
            }
          } else {
            _0x1c2331.hide();
            _0x41b58e.show();
            _0x348b47.html(_0x220501.price);
          }
        }
        _0xf04b5a.html("ID: " + _0x2393c1.Lb);
        if (null != _0x220501 && null != _0x220501.description) {
          var _0x378dfb = _0xc3b79b.p.Ac().textDict[_0x220501.description];
          if (null != _0x378dfb) {
            _0xf04b5a.html((_0x378dfb[_0x419a59] ? _0x378dfb[_0x419a59] : _0x378dfb.en ? _0x378dfb.en : _0x378dfb.x).includes('href') ? (_0x378dfb[_0x419a59] ? _0x378dfb[_0x419a59] : _0x378dfb.en ? _0x378dfb.en : _0x378dfb.x).replaceAll('href', "target=\"_black\" href") : _0x378dfb[_0x419a59] ? _0x378dfb[_0x419a59] : _0x378dfb.en ? _0x378dfb.en : _0x378dfb.x);
          }
        }
        switch (_0x2393c1.rc) {
          case _0x199e00.ja:
            this.Al.bk(_0x2393c1.Lb, true, _0x5bd733);
            break;
          case _0x199e00.ka:
            this.Al.ck(_0x2393c1.Lb, true, _0x5bd733);
            break;
          case _0x199e00.la:
            this.Al.dk(_0x2393c1.Lb, true, _0x5bd733);
            break;
          case _0x199e00.ma:
            this.Al.ek(_0x2393c1.Lb, true, _0x5bd733);
        }
        if (_0x4b31b0) {
          _0xc3b79b.t.Bh(_0x2393c1.Lb, _0x2393c1.rc);
        }
      }
    };
    _0x577f36 = function () {
      function _0x57cd3f(_0x1c9622, _0x4946a7, _0x5d798a) {
        this.sl = _0x1c9622;
        this.rc = _0x4946a7;
        this.Xk = _0x5d798a;
        this.Jl = {};
        this.Kl = [[]];
        this.Ll = -0xa;
        this.Ml = -0xa;
      }
      _0x57cd3f.prototype.Fl = function (_0x5be296) {
        this.Kl = _0x5be296;
      };
      _0x57cd3f.prototype.Gl = function (_0x7f941e) {
        this.Jl = _0x7f941e;
      };
      _0x57cd3f.prototype.ii = function () {
        var _0x51f02f = (window.anApp = _0x3938bb).t.ha(this.rc);
        for (var _0x1be7dc = 0x0; _0x1be7dc < this.Kl.length; _0x1be7dc++) {
          for (var _0x2e20b9 = 0x0; _0x2e20b9 < this.Kl[_0x1be7dc].length; _0x2e20b9++) {
            if (this.Kl[_0x1be7dc][_0x2e20b9] == _0x51f02f) {
              this.Nl(_0x1be7dc);
              return void this.Ol(_0x2e20b9);
            }
          }
        }
        this.Nl(0x0);
        this.Ol(0x0);
      };
      _0x57cd3f.prototype.Cl = function () {
        var _0x4ada81 = this.Ll - 0x1;
        if (_0x4ada81 < 0x0) {
          _0x4ada81 = this.Kl.length - 0x1;
        }
        this.Nl(_0x4ada81);
        this.Ol(this.Ml % this.Kl[_0x4ada81].length);
      };
      _0x57cd3f.prototype.Dl = function () {
        var _0x43ffa5 = this.Ll + 0x1;
        if (_0x43ffa5 >= this.Kl.length) {
          _0x43ffa5 = 0x0;
        }
        this.Nl(_0x43ffa5);
        this.Ol(this.Ml % this.Kl[_0x43ffa5].length);
      };
      _0x57cd3f.prototype.Nl = function (_0x5dfa48) {
        var _0x297e06 = this;
        if (!(_0x5dfa48 < 0x0 || _0x5dfa48 >= this.Kl.length)) {
          this.Ll = _0x5dfa48;
          _0xb8f9ac.empty();
          var _0x329f06 = this.Kl[this.Ll];
          if (_0x329f06.length > 0x1) {
            for (var _0x1fbc1b = 0x0; _0x1fbc1b < _0x329f06.length; _0x1fbc1b++) {
              !function (_0x3357f2) {
                var _0xfc7c1d = _0x329f06[_0x3357f2];
                var _0x404ce2 = _0x297e06.Jl[_0xfc7c1d];
                var _0x8eeddc = $("<div style=\"border-color:#" + _0x297e06.sl.zl[_0x404ce2.prime] + "\"></div>");
                _0x8eeddc.click(function () {
                  (window.anApp = _0x3938bb).r.Cd();
                  _0x297e06.Ol(_0x3357f2);
                });
                _0xb8f9ac.append(_0x8eeddc);
              }(_0x1fbc1b);
            }
          }
        }
      };
      _0x57cd3f.prototype.Ol = function (_0x4c159a) {
        if (!(_0x4c159a < 0x0 || _0x4c159a >= this.Kl[this.Ll].length)) {
          this.Ml = _0x4c159a;
          _0xb8f9ac.children().css('background-color', "transparent");
          var _0x2743ca = _0xb8f9ac.children(":nth-child(" + (0x1 + _0x4c159a) + ')');
          _0x2743ca.css("background-color", _0x2743ca.css("border-color"));
          this.sl.il(true);
        }
      };
      _0x57cd3f.prototype.ql = function () {
        return this.Kl[this.Ll][this.Ml];
      };
      return _0x57cd3f;
    }();
    _0x5ad544 = $("#withdraw-consent-yes");
    _0x49011a = $("#withdraw-consent-no");
    (_0x2ca6cb = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
      var _0x4b301f = window.anApp = _0x3938bb;
      _0x5ad544.click(function () {
        _0x4b301f.r.Cd();
        if (_0x4b301f.Y()) {
          _0x4b301f.s.I(_0x4b301f.s.F);
          _0x4b301f.$(false, true);
          _0x4b301f.s.aa._(new _0x5eddb0());
        } else {
          _0x4b301f.s.gi();
        }
      });
      _0x49011a.click(function () {
        _0x4b301f.r.Cd();
        _0x4b301f.s.gi();
      });
    })).prototype.a = function () {
      _0x2ca6cb.parent.prototype.a.call(this);
    };
    _0x2ca6cb.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeIn(0xc8);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeOut(0x32);
    };
    _0x2ca6cb.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Dd();
    };
    _0x57cbff = $("#delete-account-timer");
    _0xe4ee87 = $("#delete-account-yes");
    _0x4b006a = $("#delete-account-no");
    (_0x4ee8ab = _0x499ed3(_0x4159b9, function () {
      _0x4159b9.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], false);
      var _0x166789 = window.anApp = _0x3938bb;
      _0xe4ee87.click(function () {
        _0x166789.r.Cd();
        if (_0x166789.u.P()) {
          _0x166789.u.bj();
          _0x166789.u.Wi();
        } else {
          _0x166789.s.gi();
        }
      });
      _0x4b006a.click(function () {
        _0x166789.r.Cd();
        _0x166789.s.gi();
      });
      this.Pl = [];
    })).prototype.a = function () {
      _0x4ee8ab.parent.prototype.a.call(this);
    };
    _0x4ee8ab.prototype.Rk = function () {
      _0x4159b9.Fk.stop();
      _0x4159b9.Fk.fadeOut(0x32);
      _0x4159b9.Gk.stop();
      _0x4159b9.Gk.fadeOut(0x32);
      _0x4159b9.Hk.stop();
      _0x4159b9.Hk.fadeOut(0x32);
      _0x4159b9.Jk.stop();
      _0x4159b9.Jk.fadeOut(0x32);
      _0x4159b9.Ik.stop();
      _0x4159b9.Ik.fadeOut(0x32);
      _0x4159b9.Kk.stop();
      _0x4159b9.Kk.fadeOut(0x32);
      _0x4159b9.Lk.stop();
      _0x4159b9.Lk.fadeOut(0x32);
      _0x4159b9.Mk.stop();
      _0x4159b9.Mk.fadeOut(0x32);
      _0x4159b9.wtrset.stop();
      _0x4159b9.wtrset.fadeOut(0x32);
      _0x4159b9.Nk.stop();
      _0x4159b9.Nk.fadeOut(0x32);
      _0x4159b9.Ok.stop();
      _0x4159b9.Ok.fadeIn(0xc8);
    };
    _0x4ee8ab.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Hd();
      _0xe4ee87.stop();
      _0xe4ee87.hide();
      _0x57cbff.stop();
      _0x57cbff.show();
      _0x57cbff.text(".. 10 ..");
      this.Ql();
      this.Rl(function () {
        _0x57cbff.text(".. 9 ..");
      }, 0x3e8);
      this.Rl(function () {
        _0x57cbff.text(".. 8 ..");
      }, 0x7d0);
      this.Rl(function () {
        _0x57cbff.text(".. 7 ..");
      }, 0xbb8);
      this.Rl(function () {
        _0x57cbff.text(".. 6 ..");
      }, 0xfa0);
      this.Rl(function () {
        _0x57cbff.text(".. 5 ..");
      }, 0x1388);
      this.Rl(function () {
        _0x57cbff.text(".. 4 ..");
      }, 0x1770);
      this.Rl(function () {
        _0x57cbff.text(".. 3 ..");
      }, 0x1b58);
      this.Rl(function () {
        _0x57cbff.text(".. 2 ..");
      }, 0x1f40);
      this.Rl(function () {
        _0x57cbff.text(".. 1 ..");
      }, 0x2328);
      this.Rl(function () {
        _0x57cbff.hide();
        _0xe4ee87.fadeIn(0x12c);
      }, 0x2710);
    };
    _0x4ee8ab.prototype.Rl = function (_0xbcd6d, _0x48606a) {
      var _0x1166bb = setTimeout(_0xbcd6d, _0x48606a);
      this.Pl.push(_0x1166bb);
    };
    _0x4ee8ab.prototype.Ql = function () {
      for (var _0x278ad1 = 0x0; _0x278ad1 < this.Pl.length; _0x278ad1++) {
        clearTimeout(this.Pl[_0x278ad1]);
      }
      this.Pl = [];
    };
    var _0x1ba834 = function () {
      function _0x4b013c() {
        this.Ck = function () {};
      }
      _0x4b013c.prototype.Bk = function () {};
      _0x4b013c.prototype.ji = function () {};
      return _0x4b013c;
    }();
    (_0x329cf2 = _0x499ed3(_0x1ba834, function (_0x3033b6) {
      _0x1ba834.call(this);
      var _0x3df688 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
      this.Sl = $("<div id=\"" + _0x3df688 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x3033b6 + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + '</div></div>');
      var _0x2f9c74 = this;
      this.Sl.find(".toaster-coins-close").click(function () {
        (window.anApp = _0x3938bb).r.Cd();
        _0x2f9c74.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    _0x329cf2.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Fd();
    };
    (_0x917ac3 = _0x499ed3(_0x1ba834, function (_0x2855d4) {
      _0x1ba834.call(this);
      var _0x39128a = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
      this.Sl = $("<div id=\"" + _0x39128a + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x2855d4 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
      var _0x490289 = this;
      this.Sl.find(".toaster-levelup-close").click(function () {
        (window.anApp = _0x3938bb).r.Cd();
        _0x490289.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    _0x917ac3.prototype.ji = function () {
      (window.anApp = _0x3938bb).r.Ed();
    };
    (_0x5eddb0 = _0x499ed3(_0x1ba834, function () {
      _0x1ba834.call(this);
      var _0x23ce8b = this;
      var _0x30c776 = window.anApp = _0x3938bb;
      var _0x1e017b = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
      this.Sl = $("<div id=\"" + _0x1e017b + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"/images/linelogo-xmas2022.png\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", '<br/>') + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES['index.game.toaster.consent.link'] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES['index.game.toaster.consent.iAccept'] + '</div></div>');
      this.Tl = this.Sl.find(".toaster-consent-close");
      this.Tl.hide();
      this.Tl.click(function () {
        _0x30c776.r.Cd();
        if (_0x30c776.Y()) {
          _0x30c776.$(true, true);
        }
        _0x23ce8b.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    _0x5eddb0.prototype.ji = function () {
      var _0x53a94d = this;
      var _0x21e4e6 = window.anApp = _0x3938bb;
      if (_0x21e4e6.Y() && !_0x21e4e6.Z()) {
        _0x21e4e6.r.Hd();
        setTimeout(function () {
          _0x53a94d.Tl.fadeIn(0x12c);
        }, 0x7d0);
      } else {
        setTimeout(function () {
          _0x53a94d.Ck();
        }, 0x0);
      }
    };
    var _0x2195bd = {
      "main": {
        'Ma': _0x5a304f('aqnvgcpz05orkobh', atob('V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==')),
        'K': _0x5a304f("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': _0x42f912(),
        'e': 0x4,
        'oa': false,
        'qk': true
      },
      "miniclip": {
        'Ma': _0x5a304f("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
        'K': _0x5a304f('ltmolilci1iurq1i', atob("d29ybWF0ZS1pb185NzB4MjUw")),
        'ra': _0x42f912(),
        'e': 0x4,
        'oa': false,
        'qk': false
      }
    };
    var _0x5405f7 = _0x2195bd[window.ENV];
    if (!_0x5405f7) {
      _0x5405f7 = _0x2195bd.main;
    }
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x1cd7e5) {
      _0x1cd7e5.preventDefault();
      _0x1cd7e5.stopPropagation();
      return false;
    });
    _0x427629("//connect.facebook.net/" + _0xa21762 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        'appId': atob("ODYxOTI2ODUwNjE5MDUx"),
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': 'v8.0'
      });
    });
    _0x427629("//apis.google.com/js/api:client.js", null, function () {
      gapi.load('auth2', function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
        });
      });
    });
    (_0x3938bb = _0x1b6f18()).v();
    $("#mm-menu-cont").css("display", "block");
    theoKzObjects.loading = true;
    var _0x54f721 = obtenerImagenPorSeleccion(localStorage.getItem("wtr-background"));
    if (_0x54f721) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(_0x54f721));
      console.log("Fondo cargado desde almacenamiento:", _0x54f721);
    }
    var _0x3b41e3 = function (_0x35edd7) {
      if (theoKzObjects.PropertyManager) {
        _0x35edd7.skinId = theoKzObjects.PropertyManager.rh;
        _0x35edd7.eyesId = theoKzObjects.PropertyManager.sh;
        _0x35edd7.mouthId = theoKzObjects.PropertyManager.th;
        _0x35edd7.glassesId = theoKzObjects.PropertyManager.uh;
        _0x35edd7.hatId = theoKzObjects.PropertyManager.vh;
      }
    };
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        return this >= 0xf4240 ? (this / 0xf4240).toFixed(0x1) + 'M' : this >= 0x186a0 ? (this / 0x3e8).toFixed(0x0) + 'K' : this.dotFormat();
      };
    }
    (function _0x56225e() {
      requestAnimationFrame(_0x56225e);
      (window.anApp = _0x3938bb).Pa();
    })();
    var _0x3fa995 = function () {
      var _0x299d43 = _0x3ca923.width();
      var _0x1eb78a = _0x3ca923.height();
      var _0x1ffcb7 = _0xc6fe37.outerWidth();
      var _0x43e4f5 = _0xc6fe37.outerHeight();
      var _0x504160 = _0x1231f0.outerHeight();
      var _0x271d08 = "translate(-50%, -50%) scale(" + Math.min(0x1, Math.min((_0x1eb78a - _0x5e7b14.outerHeight() - _0x504160) / _0x43e4f5, _0x299d43 / _0x1ffcb7)) + ')';
      _0xc6fe37.css({
        '-webkit-transform': _0x271d08,
        '-moz-transform': _0x271d08,
        '-ms-transform': _0x271d08,
        '-o-transform': _0x271d08,
        'transform': _0x271d08
      });
      (window.anApp = _0x3938bb).Ra();
      window.scrollTo(0x0, 0x1);
    };
    var _0x3ca923 = $("body");
    var _0xc6fe37 = $('#stretch-box');
    var _0x1231f0 = $('#markup-header');
    var _0x5e7b14 = $("#markup-footer");
    _0x3fa995();
    $(window).resize(_0x3fa995);
  }();
});
console.log("WTR Team");