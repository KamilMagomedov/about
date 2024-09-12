import { IExperienceContainer } from '@/hooks/interfaces'
import React from 'react'

const ExperienceContainer: React.FC<IExperienceContainer> = ({
	yearStart,
	yearEnd,
	position,
	company,
	description,
	isDarkTheme
}) => {
	return (
		<div className='experience last:mb-0 sm:mb-[60px] sm:w-full sm:last:pb-5 3xl:last:pb-10'>
			<div className='exp_item sm:flex sm:flex-col sm:items-start sm:justify-start lg:flex-row 3xl:mx-[50px]'>
				<p
					className={`year whitespace-nowrap text-right font-bold leading-6 sm:text-[17px] 3xl:text-xl ${
						isDarkTheme ? 'text-[#C3C0FF}' : 'text-lightBlue'
					} sm:mb-[10px] sm:w-auto sm:text-left lg:mb-0 lg:w-[40%] lg:-translate-x-[30px] lg:text-right`}
				>
					{yearStart}-{yearEnd}
				</p>
				<div className='exp_content lg:flex-1'>
					<div className='exp_title_container mb-[18px]'>
						<p className={`exp_title text-xl font-bold leading-6 ${isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'}`}>
							{position}
						</p>
						<p
							className={`exp_subtitle ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-mediumGray'} text-[16px] font-semibold`}
						>
							{company}
						</p>
					</div>
					<div className='exp_text' dangerouslySetInnerHTML={{ __html: description || '' }}></div>
				</div>
			</div>
		</div>
	)
}

export default ExperienceContainer
