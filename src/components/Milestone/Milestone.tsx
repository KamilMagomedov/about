import { IMilestoneProps } from '@/hooks/interfaces'
import React, { useEffect, useState } from 'react'

const Milestone: React.FC<IMilestoneProps> = ({ index, milestoneLength, imgSrc, dataEndValue, text, isDarkTheme }) => {
	const [displayedPercent, setDisplayedPercent] = useState(0)

	useEffect(() => {
		let start = 0
		const target = parseInt(dataEndValue, 10)
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
	}, [dataEndValue])

	return (
		<div
			className={`milestone text-center last:mb-0 sm:mb-[60px] sm:last:pb-5 xl:w-1/2 3xl:w-1/4 ${index === milestoneLength - 2 ? 'xl:mb-0 xl:pb-5' : ''} 3xl:mb-0 3xl:pb-0 3xl:last:pb-0`}
		>
			<div className='milestone_icon sm:h-[61px]'>
				<img src={imgSrc} alt='icon' className='sm:mx-auto sm:mb-[6px] sm:h-full sm:w-auto' />
			</div>
			<div
				className={`milestone_counter sm:text-4xl sm:font-extrabold ${isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'}`}
				data-end-value={dataEndValue}
			>
				{displayedPercent}
			</div>
			<div
				className={`milestone_text sm:text-base sm:font-medium ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'}`}
			>
				{text}
			</div>
		</div>
	)
}

export default Milestone
