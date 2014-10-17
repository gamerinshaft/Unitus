(function() {
  window.scrollSmoke = (function() {
    function scrollSmoke(options) {
      this.$scrollWatch = options.$scrollWatch;
      this.$positionWatch = options.$positionWatch;
      this.$smoke = options.$smoke;
      this.$header = options.$header;
      this.npos = 0;
      this.showWord = false;
      this.$scrollWatch.on("resize scroll", (function(_this) {
        return function() {
          _this.$windowHeight = $(window).height();
          _this.npos = _this.$positionWatch.position().top;
          if (-_this.npos < _this.$windowHeight) {
            _this.smokeAnimation();
            if (_this.opacity > 0.98) {
              _this.$header.show();
              return _this.$header.find(":first-child").stop().animate({
                opacity: 1,
                "easing": "swing"
              }, 100);
            } else {
              _this.$header.hide();
              return _this.$header.find(":first-child").css({
                opacity: 0
              });
            }
          } else {
            return _this.$smoke.css({
              "opacity": 1
            });
          }
        };
      })(this));
    }

    scrollSmoke.prototype.smokeAnimation = function() {
      this.opacity = -this.npos / (this.$windowHeight - this.$header.outerHeight());
      this.$smoke.css({
        "opacity": this.opacity
      });
      return this.$scrollWatch.css({
        "background-position-y": -this.opacity * 100
      });
    };

    return scrollSmoke;

  })();

}).call(this);
