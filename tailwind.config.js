/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '345px',
      'xs': '467px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px'

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1.875rem',
        xl: '2rem',
      },
    },


    extend: {
      boxShadow: {
        "normal": "rgba(0, 0, 0, 0.2) 0px 0px 3px 0px",
        "normal-dark":"rgba(255, 255, 255, 0.2) 0px 0px 3px 0px"
      },
      borderWidth: {
        3: '3px',
      },
      width: {
        '75': '18.75rem'
      },
      colors: {
        "primary" : {
          "light" : '#FFFFFF',
          "dark" : '#303030',
          'darker': '#374151',
          DEFAULT: '#22c55e'
        },
        "secondary" : {
          "light" : '#F8F8F8',
          "dark" : '#191919'
        }

      },
      spacing: {
        '4.5': '18px',
        '5.5': '22px',
        '8.5': '34px',
        '15': '60px',
        '13': '52px',
        '17': '68px',
        '18': '72px',
        '22': '88px',
        '62': '248px',
        '67':'268px'
      }
    },
    fontFamily: {
      "Dana": "Dana",
      "DanaBold": "Dana Bold",
      "MorabbaBold": "Morabba Bold",
      "Morabba": "Morabba",
      "MorabbaHeavy" : "Morabba Heavy"
    },
  },
  plugins: [
    function({addVariant}) {
      addVariant("child","&>*");
      addVariant("child-hover","&>*:hover");
    },
  ],
}

