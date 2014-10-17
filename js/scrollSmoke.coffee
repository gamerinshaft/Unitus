class window.scrollSmoke
  constructor: (options) ->
    @$scrollWatch = options.$scrollWatch
    @$positionWatch = options.$positionWatch
    @$smoke        = options.$smoke
    @$header       = options.$header
    @npos = 0
    @showWord = false

    @$scrollWatch.on "resize scroll", =>
      @$windowHeight = $(window).height()
      @npos = @$positionWatch.position().top
      if -@npos < @$windowHeight
        @smokeAnimation()
        if @opacity > 0.98
          @$header.show()
          @$header.find(":first-child").stop().animate
            opacity: 1
            "easing": "swing"
            100
        else
          @$header.hide()
          @$header.find(":first-child").css
            opacity: 0
      else
        @$smoke.css
          "opacity" : 1



  smokeAnimation: ->
    @opacity =  -@npos / (@$windowHeight - @$header.outerHeight())
    @$smoke.css
      "opacity" : @opacity
    @$scrollWatch.css
      "background-position-y" : -@opacity * 100
