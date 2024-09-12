import { IEducationInfo } from '@/hooks/interfaces'
import React from 'react'

const EducationContainer: React.FC<IEducationInfo> = ({
	year,
	img,
	educationalEstablishments,
	education,
	text,
	isDarkTheme
}) => {
	return (
		<div className={`education mb-[60px] w-full last:mb-0 sm:px-[15px] sm:last:pb-5 xl:last:pb-0`}>
			<div className='edu_item sm:mb-[5px] sm:flex sm:flex-col sm:items-start sm:justify-start xl:flex-row'>
				<p
					className={`edu_year text-2xl font-bold leading-7 ${
						isDarkTheme ? 'text-[#C3C0FF}' : 'text-lightBlue'
					} sm:mb-[10px] xl:mb-0 xl:mr-10`}
				>
					{year}
				</p>
				<div className='edu_image h-[90px] w-[90px] flex-shrink-0 sm:mb-[10px] xl:mb-0 xl:mr-10'>
					<img src={img} alt='icon' className='max-sm:w-full' />
				</div>
				<div className='edu_content'>
					<div className='edu_title_container mb-[18px]'>
						<h2
							className={`edu_title mb-[7px] ${
								isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
							} sm:text-2xl sm:font-bold sm:leading-6`}
						>
							{educationalEstablishments}
						</h2>
						<h4
							className={`edu_subtitle font-semibold ${
								isDarkTheme ? 'text-[#C2C2C2]' : 'text-mediumGray'
							} sm:text-[14px] xl:text-[16px]`}
						>
							{education}
						</h4>
					</div>
					<p className='edu_text sm:text-[13px] md:text-[14px]'>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default EducationContainer
