import React from 'react'
import classes from './TestimonialsContainer.module.scss'
import { ITestimonialsContainerProps } from '@/hooks/interfaces'

const TestimonialsContainer: React.FC<ITestimonialsContainerProps> = ({ title, text, photo, info, isDarkTheme }) => {
	return (
		<div
			className={`${classes.review} relative mr-[30px] w-[87%] ${
				isDarkTheme ? 'bg-[#343541]' : 'bg-[#f7f8fc]'
			} h-auto px-[1.5rem] sm:mr-0 sm:w-full sm:py-8 3xl:py-[30px]`}
		>
			<h3
				className={`title mb-6 overflow-scroll text-xl font-bold sm:max-h-[60px] ${
					isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
				}`}
			>
				{title}
			</h3>
			<p
				className={`mb-10 ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'} h-[125px] overflow-scroll`}
				dangerouslySetInnerHTML={{ __html: text || '' }}
			></p>
			<div className='photo_block mb-[25px] h-[53px] w-[53px] overflow-hidden rounded-full'>
				<img src={photo} alt='photo owner' className='block h-full w-full object-cover' />
			</div>
			<p className={`text-[15px] font-semibold ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'}`}>
				<a href='#' className={`mr-2 text-lightBlue`}>
					{info}
				</a>{' '}
				<span>Customer</span>
			</p>
		</div>
	)
}

export default TestimonialsContainer
