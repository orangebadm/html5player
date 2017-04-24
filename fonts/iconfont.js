;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M152.717705 79.504752c0-5.52483 2.912329-10.876722 8.035-13.735839 5.193279-2.877537 11.263531-2.508123 15.893992 0.420579l687.300538 432.489108c4.38589 2.789533 7.333012 7.700379 7.333012 13.31526 0 5.631254-2.947122 10.543124-7.333012 13.332656L176.646698 957.813578c-4.630461 2.929726-10.700713 3.28072-15.893992 0.438998-5.122671-2.859118-8.035-8.227382-8.035-13.770632L152.717705 79.504752 152.717705 79.504752z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zanting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M85.644005 64.201208l348.425477 0 0 895.324362L85.644005 959.52557 85.644005 64.201208zM588.896937 64.201208l348.428547 0 0 895.324362L588.896937 959.52557 588.896937 64.201208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 384l0 256 170.666667 0 213.333333 213.333333L512 170.666667 298.666667 384 128 384zM704 512c0-75.306667-43.52-140.373333-106.666667-171.733333l0 343.68C660.48 652.373333 704 587.306667 704 512zM597.333333 137.813333l0 88.106667c123.306667 36.693333 213.333333 150.826667 213.333333 286.08s-90.026667 249.386667-213.333333 286.08l0 88.106667c170.88-38.826667 298.666667-191.36 298.666667-374.186667S768.213333 176.64 597.333333 137.813333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jingyin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M992.744448 0 691.739648 301.027328 691.739648 55.69024 367.81056 313.89184 117.121024 313.89184 117.121024 513.748992 116.970496 513.857536 117.121024 513.985536 117.121024 711.749632 280.99584 711.749632 0 992.745472 31.255552 1024 343.50592 711.749632 344.649728 711.749632 386.8928 669.507584 386.244608 669.011968 647.59808 407.658496 647.59808 408.7808 691.80416 364.573696 691.80416 363.451392 1024 31.255552Z"  ></path>' +
    '' +
    '<path d="M647.59808 471.291904 421.924864 696.9856 421.90336 696.9856 390.432768 728.477696 691.739648 964.942848 691.739648 711.749632 691.80416 711.749632 691.80416 427.0848 647.59808 471.291904Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M725.525118 216.297254l-89.172949-88.587618 258.786974 0.199545 0 259.185041-88.750323-89.201601L664.383596 439.871239l-81.20651-81.214696L725.525118 216.297254zM299.252595 805.198715l142.347009-142.363382-81.210603-81.210603L218.388892 723.603349l-88.756463-89.194438 0 259.185041 258.787998 0.196475L299.252595 805.198715z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiaoquanping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M752.7936 351.2832l89.17504 88.58624-258.7904-0.19968V180.48512l88.75008 89.20064 142.0032-141.9776 81.2032 81.21344L752.7936 351.2832z m-480.80896 318.92992L129.6384 812.57984l81.21344 81.20832 141.99808-141.9776 88.75008 89.19552v-259.18464l-258.78528-0.19456 89.16992 88.58624z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M288 358.4064V665.6h198.4064L736 921.6V102.4L486.4064 358.4064z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M726.528 307.1872v409.632C796.8128 678.4128 848 601.5936 848 512s-51.1872-166.4064-121.472-204.8128zM176 358.4064V665.6h198.4064L624 921.6V102.4L374.4064 358.4064H176z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)