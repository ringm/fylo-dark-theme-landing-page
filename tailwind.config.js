module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'vd-blue': '#0c1524',
        'd-blue': '#181F2A',
        'l-blue': '#21293c',
        'cyan': '#65E2D9',
        'c-blue': '#339ECC',
      },
      fontFamily: {
        display: [
          '"Raleway"'
        ],
        body: [
          '"Open Sans"'
        ],
      },
      fill: {
        'white': '#fff',
        'gray': '#cbd5e0',
        'cyan': '#65E2D9',
      },
      backgroundSize: {
        '100vw': '100vw',
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
