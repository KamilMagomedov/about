import React, { useEffect, useRef, useState } from 'react'
import SkillLoaderSVG from './SkillLoaderSVG'
import { ISkillLoaderProps } from '@/hooks/interfaces'

const SkillLoader: React.FC<ISkillLoaderProps> = ({ id, skillLength, percent, characteristic, text, isDarkTheme }) => {
	const pathRef = useRef<SVGPathElement>(null)
	const initialValueCircleLength = 251.363
	const [displayedPercent, setDisplayedPercent] = useState(0)

	useEffect(() => {
		if (pathRef.current) {
			pathRef.current.style.strokeDashoffset = `${initialValueCircleLength}`

			const targetOffset = initialValueCircleLength * (1 - parseFloat(percent) / 100)
			requestAnimationFrame(() => {
				pathRef.current!.style.strokeDashoffset = `${targetOffset}`
			})
		}
	}, [percent])

	useEffect(() => {
		let start = 0
		const target = parseInt(percent, 10)
		const duration = 2000
		const increment = target / (duration / 16)

		const animate = () => {
			start += increment
			if (start < target) {
				setDisplayedPercent(Math.floor(start))
				requestAnimationFrame(animate)
			} else {
				setDisplayedPercent(target)
			}
		}

		animate()
	}, [percent])

	return (
		<div
			className={`loader_container relative h-[265px] w-1/4 last:mb-0 sm:mb-[60px] sm:w-full xl:w-1/2 4xl:w-1/4 ${
				id === skillLength - 2 ? 'xl:mb-0' : ''
			}`}
		>
			<div className='loader relative mx-auto mb-6 h-[195px] w-[195px] bg-transparent' data-perc={percent}>
				<SkillLoaderSVG ref={pathRef} />
				<span
					className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[44px] font-bold ${
						isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
					}`}
				>
					{displayedPercent}%
				</span>
			</div>
			<div className='loader_content flex flex-col items-center justify-center'>
				<p
					className={`mb-3 text-base font-bold uppercase leading-3 ${isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'}`}
				>
					{characteristic}
				</p>
				<p className={`font-medium ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'} px-2 text-center`}>{text}</p>
			</div>
		</div>
	)
}

export default SkillLoader
