import { IServicesContainer } from '@/hooks/interfaces'
import React from 'react'

const ServicesContainer: React.FC<IServicesContainer> = ({ img, title, text, isDarkTheme }) => {
	return (
		<div className={`service last:mb-0 sm:mb-[60px] sm:w-full sm:px-[15px] sm:last:pb-5 xl:w-1/2 xl:last:pb-0`}>
			<div className='service_title_container sm:mb-[5px] sm:flex sm:flex-row sm:items-center sm:justify-start'>
				<div className='service_icon sm:mr-5 sm:flex sm:h-[46px] sm:min-w-[46px] sm:items-center sm:justify-center lg:translate-y-[14px] 2xl:translate-y-[0px] 3xl:translate-y-[14px]'>
					<img src={img} alt='icon' className='max-sm:w-full' />
				</div>
				<h2
					className={`service_title ${
						isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
					} sm:text-xl sm:font-bold sm:leading-6`}
				>
					{title}
				</h2>
			</div>
			<p className={`${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'} service_text lg:pl-[65px]`}>{text}</p>
		</div>
	)
}

export default ServicesContainer
