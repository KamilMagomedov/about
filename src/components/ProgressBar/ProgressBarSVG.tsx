import { ProgressBarSVGProps } from '@/hooks/interfaces'
import { forwardRef } from 'react'

const ProgressBarSVG = forwardRef<SVGPathElement, ProgressBarSVGProps>(
	({ gradientId, stopColor1, stopColor2, strokeDashoffset }, ref) => (
		<svg viewBox='0 0 100 1' preserveAspectRatio='none' style={{ width: '100%', height: '100%' }}>
			<defs>
				<linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='userSpaceOnUse'>
					<stop offset='20%' stopColor={stopColor1}></stop>
					<stop offset='50%' stopColor={stopColor2}></stop>
				</linearGradient>
			</defs>
			<path d='M 0,0.5 L 100,0.5' stroke='#ffffff' strokeWidth='1' fillOpacity='0'></path>
			<path
				ref={ref}
				d='M 0,0.5 L 100,0.5'
				stroke={`url(#${gradientId})`}
				strokeWidth='1'
				fillOpacity='0'
				style={{
					strokeDasharray: 100,
					strokeDashoffset: 100,
					transition: 'stroke-dashoffset 2s ease-out'
				}}
			></path>
		</svg>
	)
)

export default ProgressBarSVG
