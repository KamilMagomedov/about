import { ISuccessfulFormSubmission } from '@/hooks/interfaces'
import Modal from 'react-modal'

const SuccessfulFormSubmission: React.FC<ISuccessfulFormSubmission> = ({
	isModalOpen,
	isDarkTheme,
	setIsModalOpen,
	successMessage
}) => {
	const closeModal = () => setIsModalOpen(false)

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			contentLabel='Form Modal'
			ariaHideApp={false}
			className={`modal_content relative flex rounded px-10 py-10 sm:w-[90%] sm:flex-col lg:w-[70%] xl:w-[40%] ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			}`}
			overlayClassName='modal_overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
		>
			<button onClick={closeModal} className='close-button absolute right-[0.8rem] top-2 text-2xl'>
				X
			</button>
			<div className='mb-5 flex h-full flex-col'>
				<p
					className={`descriptionModal relative mb-2 flex flex-grow flex-col text-2xl ${
						isDarkTheme ? 'active !text-lightBlue' : '!text-darkMain'
					}`}
					dangerouslySetInnerHTML={{ __html: successMessage || '' }}
				></p>
			</div>
			<div className='showProject mt-auto flex justify-center'>
				<button
					type='button'
					onClick={closeModal}
					className={`block w-[150px] px-5 text-base font-normal leading-[59px] text-white ${
						isDarkTheme ? 'bg-[#5C5BEE]' : 'bg-darkBackground'
					}`}
				>
					Close Modal
				</button>
			</div>
		</Modal>
	)
}

export default SuccessfulFormSubmission
