import React, { useEffect, useRef } from 'react'
import ProgressBarSVG from './ProgressBarSVG'
import { IProgressBarProps } from '@/hooks/interfaces'

const ProgressBar: React.FC<IProgressBarProps> = ({
	id,
	programmingLanguage,
	percent,
	dataPerc,
	dataName,
	dataColorStart,
	dataColorEnd,
	stopColor1,
	stopColor2,
	strokeDashoffset,
	isDarkTheme
}) => {
	const gradientId = `gradient_${id}`
	const pathRef = useRef<SVGPathElement>(null)

	useEffect(() => {
		if (pathRef.current) {
			const initialOffset = 100
			pathRef.current.style.strokeDashoffset = `${initialOffset}`

			setTimeout(() => {
				if (pathRef.current) {
					pathRef.current.style.strokeDashoffset = strokeDashoffset
				}
			}, 50)
		}
	}, [strokeDashoffset, id])

	return (
		<div className='pb_item relative sm:mb-[19px] 2xl:w-1/3 2xl:flex-shrink-0 2xl:flex-grow 2xl:flex-col 2xl:px-[15px]'>
			<div
				className={`p_bar_title sm:mb-[17px] sm:text-[13px] sm:font-medium sm:leading-3 ${
					isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
				}`}
			>
				{programmingLanguage}
			</div>
			<div
				id={id}
				className='skill_bars 2xl:h-1'
				data-perc={dataPerc}
				data-name={dataName}
				data-color-start={dataColorStart}
				data-color-end={dataColorEnd}
			>
				<ProgressBarSVG
					gradientId={gradientId}
					stopColor1={stopColor1}
					stopColor2={stopColor2}
					strokeDashoffset={strokeDashoffset}
					ref={pathRef}
				/>
				<div
					className={`progressbar-text font-semibold ${
						isDarkTheme ? 'text-[#C2C2C2]' : 'text-black'
					} sm:absolute sm:-top-[5px] sm:right-0 sm:mx-0 sm:my-0 sm:px-0 sm:py-0`}
				>
					{percent}
				</div>
			</div>
		</div>
	)
}

export default ProgressBar
