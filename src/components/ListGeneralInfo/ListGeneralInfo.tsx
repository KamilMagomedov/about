import { IListGeneralInfoProps } from '@/hooks/interfaces'
import React, { useState } from 'react'

const ListGeneralInfo: React.FC<IListGeneralInfoProps> = ({ image, title, value, theme }) => {
	const isEmail = title === 'Email'
	const isPhone = title === 'Phone'
	const [showTooltip, setShowTooltip] = useState(false)

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(
			() => {
				alert('Phone number copied to clipboard')
			},
			err => {
				console.error('Could not copy text: ', err)
			}
		)
	}

	const styleTooltip = `absolute top-full left-1/2 transform -translate-x-1/2 
		${theme === 'dark' ? 'bg-[#343541]' : 'bg-[#f7f8fc]'} text-white py-1 px-2  
		rounded whitespace-nowrap text-sm opacity-90 transition-opacity ease-in-out z-40`

	return (
		<li className='mb-[15px] flex flex-row items-center justify-start'>
			<div className='h-[21px] w-[21px] sm:mr-2 3xl:mr-6'>
				{image && <img src={image} className='text-[21px] text-[#8583e1] sm:text-[15px]' />}
			</div>
			<p
				className={`general_info_text leading-5 sm:text-xs md:text-base 2xl:text-[13px] ${
					theme === 'dark' ? 'text-[#A8A7B4]' : 'text-[#7a798c]'
				} `}
			>
				{title}{' '}
				{isEmail ? (
					<a
						href={`mailto:${value}`}
						title='click me and then you can send me message'
						className='relative text-white'
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
					>
						{value}
						{showTooltip && <span className={styleTooltip}>Click to send an email</span>}
					</a>
				) : isPhone ? (
					<span
						className='relative cursor-pointer text-white'
						onClick={() => copyToClipboard(value)}
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
					>
						{value}
						{showTooltip && <span className={styleTooltip}>Click to copy phone number</span>}
					</span>
				) : (
					value && <span className='text-white'>{value}</span>
				)}
			</p>
		</li>
	)
}

export default ListGeneralInfo
