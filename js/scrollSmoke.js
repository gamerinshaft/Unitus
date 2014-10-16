(function() {
  window.scrollSmoke = (function() {
    function scrollSmoke(options) {
      this.$scrollWatch = options.$scrollWatch;
      this.$positionWatch = options.$positionWatch;
      this.$windowHeight = $(window).height();
      this.$smoke = options.$smoke;
      this.$header = options.$header;
      this.npos = 0;
      this.$scrollWatch.on("scroll", (function(_this) {
        return function() {
          _this.npos = _this.$positionWatch.position().top;
          if (-_this.npos < _this.$windowHeight) {
            _this.opacity = -_this.npos / (_this.$windowHeight - _this.$header.outerHeight());
            _this.$smoke.css({
              "opacity": _this.opacity
            });
            if (_this.opacity > 1) {
              return _this.$header.css({
                "opacity": 1,
                "background-color": "rgb( 63, 104, 162)"
              });
            } else {
              return _this.$header.css({
                "opacity": 0
              });
            }
          } else {
            return _this.$header.css({
              opacity: 1,
              "background-color": "rgb( 63, 104, 162)"
            });
          }
        };
      })(this));
    }

    return scrollSmoke;

  })();

}).call(this);
