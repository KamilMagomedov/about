/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				darkMain: '#100f3a',
				darkMainTransp: 'rgba(16, 15, 58, 0.74)',
				darkBackground: '#090949',
				darkColor: '#0232c2',
				secondaryDarkColor: '#0449e0',
				lightBlue: '#8583e1',
				mediumGray: '#838383'
			},
			width: {
				'calc-aside': 'calc(100% - 473px)'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			},
			textShadow: {
				'text-shadow-red': '0px 0px 8px red'
			}
		},
		screens: {
			sm: '320px',
			md: '480px',
			lg: '767px',
			xl: '991px',
			'2xl': '1200px',
			'3xl': '1440px',
			'4xl': '1600px'
		}
	},
	variants: {
		extend: {
			backgroundColor: ['hover']
		}
	},
	plugins: [
		function ({ addUtilities }) {
			const transitionTimes = [200, 600, 1000]

			const newUtilities = transitionTimes.reduce((acc, time) => {
				acc[`.transition-all-${time}`] = {
					'-webkit-transition': `all ${time}ms ease`,
					'-moz-transition': `all ${time}ms ease`,
					'-ms-transition': `all ${time}ms ease`,
					'-o-transition': `all ${time}ms ease`,
					transition: `all ${time}ms ease`
				}
				return acc
			}, {})

			addUtilities(newUtilities, ['responsive', 'hover'])
		},
		require('tailwindcss-textshadow')
	]
}
