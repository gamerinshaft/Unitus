class window.scrollSmoke
  constructor: (options) ->
    @$scrollWatch = options.$scrollWatch
    @$positionWatch = options.$positionWatch
    @$windowHeight = $(window).height()
    @$smoke        = options.$smoke
    @$header       = options.$header
    @npos = 0
    @$scrollWatch.on "scroll", =>
      @npos = @$positionWatch.position().top
      if -@npos < @$windowHeight
        @opacity =  -@npos / (@$windowHeight - @$header.outerHeight())
        @$smoke.css
          "opacity" : @opacity
        if @opacity > 1
          @$header.css
            "opacity": 1
            "background-color" : "rgb( 63, 104, 162)"
        else
          @$header.css
            "opacity" : 0
      else
        @$header.css
          opacity: 1
          "background-color" : "rgb( 63, 104, 162)"