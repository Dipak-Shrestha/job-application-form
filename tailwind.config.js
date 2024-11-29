/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              'cred': '#289538',
              'ccyan': '#0dcaf0',
              'secondary' : '#0B2154',
              'primary' : '#289538',
              'darkBlue' : '#0B2154',
              'error': '#ff0000',
          },
          keyframes: {
              zoomIn: {
                  '0%': { transform: 'scale(0.4)' },
                  '100%': { transform: 'scale(1)' },
              },
              dropdown : {
                  '0%': {
                      opacity : '0',
                      transform : 'translateY(100px)'
                  },
 
                  '100%': {
                      opacity : '1',
                      transform : 'translateY(0px)'
                  }
              },
              slideDown : {
                  '0%': {
                      transform : 'translateY(-100px)'
                  },
 
                  '100%': {
                      transform : 'translateY(0px)'
                  }
              },
              fadeLeft : {
                  '0%': {
                      opacity : '0',
                      transform : 'translateX(100px)'
                  },
 
                  '100%': {
                      opacity : '1',
                      transform : 'translateX(0px)'
                  }
              },
              fadeRight: {
                  '0%': {
                      opacity : '0',
                      transform : 'translateX(-200px)'
                  },
 
                  '100%': {
                      opacity : '1',
                      transform : 'translateX(0px)'
                  }
              },
              deepFadeIn : {
                  '0%': {
                      opacity : '0',
                      transform : 'translateY(300px)'
                  },

                  '100%': {
                      opacity : '1',
                      transform : 'translateY(0px)'
                  }
              },
              lightFadeIn : {
                  '0%': {
                      opacity : '0',
                      transform : 'translateY(50px)'
                  },

                  '100%': {
                      opacity : '1',
                      transform : 'translateY(0px)'
                  }
              },
              blink : {
                  '0%,100%': {
                      opacity : '0',
                  },
                   '50%': {
                      opacity : '1', 
                  }
              },

              fadeDown : {
                  '0%': {
                      opacity : '0',
                      transform : 'translateY(-100px)'
                  },

                  '100%': {
                      opacity : '1',
                      transform : 'translateY(0px)'
                  }
              },
              fadeRev : {
                  '0%': {
                      opacity : '0',
                  },
 
                  '100%': {
                      opacity : '1',
                  }
              },
              slideHeightDown : {
                  '0%' : {

                      height : '0%',
                  },
                  '100%': {

                      height : '100%',
                  }
              }
          },
          animation: {
              zoomIn: 'zoomIn 1s ease-out',
              dropdown : 'dropdown .3s ease-in-out',
              slideDown : 'slideDown 1s ease-in-out',
              fadeIn : 'dropdown 1s ease-in-out',
              fadeLeft : 'fadeLeft 1s ease-in-out',
              fadeRight : 'fadeRight 1s ease-in',
              deepFadeIn : 'deepFadeIn 1s ease-in-out',
              lightFadeIn : 'lightFadeIn 1s ease-in-out',
              fadeDown : 'fadeDown .5s ease-in-out',
              fadeRev : 'fadeRev 1s ease-in-out',
              slideHeightDown : 'slideHeightDown 1s linear',
              blink : "blink 2s infinite"
          }
      },
  },
  plugins: [],
}

