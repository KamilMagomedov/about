import { ScrollIndicatorProps } from '@/hooks/interfaces'
import React, { useEffect, useState } from 'react'

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ totalSections, currentSection, itemsPerPage }) => {
	const [visibleDots, setVisibleDots] = useState<number>(totalSections)

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth >= 1440
				? setVisibleDots(Math.ceil(totalSections / itemsPerPage))
				: setVisibleDots(totalSections)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [totalSections, itemsPerPage])

	const currentPage = Math.floor(currentSection / itemsPerPage)

	return (
		<div className='absolute -bottom-[50px] left-1/2 z-10 flex -translate-x-1/2 transform space-x-2'>
			{Array.from({ length: visibleDots }).map((_, index) => (
				<div
					key={index}
					className={`h-3 w-3 rounded-full transition-colors duration-300 ${
						index === (window.innerWidth >= 1440 ? currentPage : currentSection) ? 'bg-blue-500' : 'bg-gray-300'
					}`}
				/>
			))}
		</div>
	)
}

export default ScrollIndicator
