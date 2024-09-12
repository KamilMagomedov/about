import React, { forwardRef } from 'react'

const SkillLoaderSVG = forwardRef<SVGPathElement, React.SVGProps<SVGPathElement>>((_, ref) => (
	<svg viewBox='0 0 100 100' style={{ display: 'block', width: '100%' }}>
		<path
			d='M 50,50 m 0,-40 a 40,40 0 1 1 0,80 a 40,40 0 1 1 0,-80'
			stroke='#e5e6e8'
			strokeWidth='20'
			fillOpacity='0'
		/>
		<path
			ref={ref}
			d='M 50,50 m 0,-40 a 40,40 0 1 1 0,80 a 40,40 0 1 1 0,-80'
			stroke='rgb(133,131,225)'
			strokeWidth='3'
			fillOpacity='0'
			style={{
				strokeDasharray: 251.363,
				strokeDashoffset: 251.363,
				transition: 'stroke-dashoffset 2s ease-out'
			}}
		/>
	</svg>
))

export default SkillLoaderSVG
