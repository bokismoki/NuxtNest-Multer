/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'vblue': '#34495e',
        'vgreen': '#41b883'
      },
      borderRadius: {
        xl: '0.8rem'
      }
    }
  },
  variants: {
    textColor: ['hover', 'focus', 'group-hover'],
    opacity: ['hover', 'focus', 'group-hover']
  },
  plugins: []
}
