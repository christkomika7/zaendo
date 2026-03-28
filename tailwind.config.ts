import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

const config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: '#ffffff',
				foreground: '#171717',
				border: '#0D0D0D',
				'bg-dark': '#0e1016',
			},
			linearGradients: {
				'bg-top': ['180deg', '#0e1016 0%', 'transparent 50%'],
				'bg-bottom': ['0deg', '#0e1016 0%', 'transparent 100%'],
			},
			height: {
				header: 'calc(100dvh - 80px)'
			},
			gridTemplateColumns: {
				'2-v2': '1.5fr 1fr',
				'2-v3': '1fr 1.5fr',
				'2-v4': '30px 1fr',
				'2-v5': '2fr 1fr',
				'2-v6': '1fr minmax(0, 820px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				ripple: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(0.9)'
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				},
				aurora: {
					'0%': {
						backgroundPosition: '0% 50%',
						transform: 'rotate(-5deg) scale(0.9)'
					},
					'25%': {
						backgroundPosition: '50% 100%',
						transform: 'rotate(5deg) scale(1.1)'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						transform: 'rotate(-3deg) scale(0.95)'
					},
					'75%': {
						backgroundPosition: '50% 0%',
						transform: 'rotate(3deg) scale(1.05)'
					},
					'100%': {
						backgroundPosition: '0% 50%',
						transform: 'rotate(-5deg) scale(0.9)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
				shine: 'shine var(--duration) infinite linear',
				aurora: 'aurora 8s ease-in-out infinite alternate'
			},
			screens: {
				ms: '850px',
				xs: '350px',
				mxl: '1400px'
			}
		}
	},
	plugins: [animatePlugin],
} satisfies Config


export default config