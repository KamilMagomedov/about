import { IContentTabs } from '@/hooks/interfaces'
import React, { useState } from 'react'
import Modal from 'react-modal'

const PortfolioContent = React.forwardRef<HTMLDivElement, IContentTabs>(
	({ imageUrl, url, isDarkTheme, title, description }, ref) => {
		const hasImage = !!imageUrl
		const [isModalOpen, setIsModalOpen] = useState(false)

		const openModal = () => setIsModalOpen(true)
		const closeModal = () => setIsModalOpen(false)
		const colorBorder = isDarkTheme ? 'lightBlue' : 'darkMain'

		return (
			<>
				<div
					ref={ref}
					onClick={openModal}
					className={`project ${
						!hasImage ? `border-${colorBorder} items-stretch border border-solid` : ''
					} pointer-events-none relative flex min-h-[275px] w-auto sm:mb-5 sm:w-full sm:items-center sm:justify-center sm:last:mb-0 lg:w-[45%] lg:last:mb-5 2xl:mr-[30px] 3xl:w-[20%] 3xl:last:mb-5`}
				>
					{hasImage ? (
						<img src={imageUrl} alt='project' className='aspect-square sm:w-[260px]' />
					) : (
						<div className='flex items-center justify-center text-xl'>No Image</div>
					)}
					<div className='portfolio_item_content pointer-events-auto absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer flex-col items-center justify-center bg-darkMainTransp text-center opacity-0 transition-all-200 hover:visible hover:opacity-100'>
						<p className='portfolio_item_title text-white'>{title}</p>
						<p className='portfolio_item_link text-white'>See More</p>
					</div>
				</div>

				<Modal
					isOpen={isModalOpen}
					onRequestClose={closeModal}
					contentLabel='Project Modal'
					ariaHideApp={false}
					className={`modal_content relative flex w-[80%] flex-row rounded px-10 py-10 sm:flex-col lg:h-[570px] xl:h-[500px] xl:flex-row ${
						isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
					}`}
					overlayClassName='modal_overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
				>
					{hasImage && <img src={imageUrl} alt='project' className='mb-4 mr-4 sm:w-full xl:w-[60%]' />}
					<button onClick={closeModal} className='close-button absolute right-6 top-4 text-2xl'>
						X
					</button>
					<div className='flex h-full flex-col'>
						<div className='descriptionModal relative flex flex-grow flex-col'>
							<h2
								className={`mb-2 text-2xl font-extrabold ${isDarkTheme ? 'active !text-lightBlue' : '!text-darkMain'}`}
							>
								{title}
							</h2>
							<p className={`${isDarkTheme ? 'text-[#C2C2C2]' : 'text-darkMain'} sm:mb-5`}>{description}</p>
							<div className='showProject mb-[16px] mt-auto flex justify-center'>
								<a
									href={url}
									target='_blank'
									className={`block w-[150px] px-5 text-base font-normal leading-[59px] text-white ${
										isDarkTheme ? 'bg-[#5C5BEE]' : 'bg-darkBackground'
									}`}
								>
									Open Project
								</a>
							</div>
						</div>
					</div>
				</Modal>
			</>
		)
	}
)

export default PortfolioContent
