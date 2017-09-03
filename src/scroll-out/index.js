function calcTop (el, h = 0) {
  if (el == null) {
    return h
  }
  return calcTop(el.offsetParent, el.offsetTop + h)
}

let ScrollOut = {}

ScrollOut.install = function(Vue, options) {
  Vue.directive('scroll-out', {
    bind (el, binding) {
      const { upOut, upIn, bottomOut, bottomIn, height } = binding.value
      el.options = {
        height: height || 0,
        elHeight: 0,
        upOut,
        upIn,
        bottomOut,
        bottomIn,
        up: false,
        bottom: false
      }
      el.handleScroll = () => {
        const { height, elHeight, upOut, upIn, bottomOut, bottomIn } = el.options
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        const clientHeight = document.documentElement.clientHeight
        if (scrollTop > elHeight - height) {
          if (!el.options.up) {
            upOut && upOut()
            el.options.up = true
          }
        } else
        if (scrollTop < elHeight - height && scrollTop > elHeight - el.offsetHeight + height - clientHeight) {
          if (el.options.up) {
            upIn && upIn()
            el.options.up = false
          } else
          if (el.options.bottom) {
            bottomIn && bottomIn()
            el.options.bottom = false
          }
        } else
        if (scrollTop < elHeight - el.offsetHeight + height - clientHeight) {
          if (!el.options.bottom) {
            bottomOut && bottomOut()
            el.options.bottom = true
          }
        }
      }
      document.addEventListener('scroll', el.handleScroll)
    },
    inserted (el) {
      el.options.elHeight = calcTop(el) + el.offsetHeight
    },
    componentUpdated (el) {
      el.options.elHeight = calcTop(el) + el.offsetHeight
    },
    unbind (el) {
      document.removeEventListener('scroll', el.handleScroll)
    }
  })
}

export default ScrollOut
