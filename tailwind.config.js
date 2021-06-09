module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Bitter'],
    },
    extend: {
      colors: {
        primary: '#003660',
        primaryHover: '#007BDB',
        secondary: '#AF1B67',
        secondaryHover: '#AF1B67',
        blueHover: '#0070A8',
        grayPrimary: '#F2F5F7',
        spacing: {
          px424: 'padding-left: 424px; padding-right: 424px;'
        },
        fontSize: {
          'text-title': '2.9rem',
           '5xl': '3rem',
           '6xl': '4rem',
          '7xl': '5rem',
         },
         lineHeight: {
          'extra-loose': '3.5',
          '12': '3rem',
         }
      },
      
      maxWidth: (theme, { breakpoints }) => ({
        none: 'none',
        '2xl': '42rem',
        '3xl': '48rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
        ...breakpoints(theme('screens')),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
