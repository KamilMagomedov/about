import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from '@/hooks/clients'
import SuccessfulFormSubmission from './SuccessfulFormSubmission'
import { IContactForm, IContactProps, IErrorValidations } from '@/hooks/interfaces'

const ContactForm: React.FC<IContactProps> = ({ description, successMessage, isDarkTheme }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IContactForm>()
	const [errorValidations, setErrorValidations] = useState<Partial<IErrorValidations>>({})
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => setIsModalOpen(true)

	const submitForm: SubmitHandler<IContactForm> = data => {
		setErrorValidations({})
		try {
			post({ path: 'contact-form', data: data })
			reset()
			openModal()
		} catch (error) {
			setErrorValidations(error.response.data.errors)
		}
	}

	const errorBorderClass = 'border-red-500'
	const normalBorderClass = 'border-b-[#a5a5a5]'

	return (
		<div className='3xl:mt-5'>
			<p
				className={`sm:mb-10 ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'}`}
				dangerouslySetInnerHTML={{ __html: description || '' }}
			></p>

			<form onSubmit={handleSubmit(submitForm)}>
				<div className='parent_name_email mb-5 flex w-full gap-[5%] sm:flex-col lg:relative lg:flex-row'>
					<div className='grow'>
						<input
							type='text'
							className={`form__input ${errors.name ? errorBorderClass : normalBorderClass} ${isDarkTheme ? 'text-white' : 'text-black'}`}
							placeholder='Name'
							{...register('name', {
								required: 'Name is required'
							})}
						/>
						{errorValidations.name && (
							<div>
								{errorValidations.name.map((err, i) => (
									<p key={i} className='text-red-500'>
										{err}
									</p>
								))}
							</div>
						)}
						{errors.name && <div className='text-red-500'>{errors.name.message}</div>}
					</div>
					<div className='grow'>
						<input
							type='email'
							className={`form__input ${
								errors.email ? errorBorderClass : normalBorderClass
							} ${isDarkTheme ? 'text-white' : 'text-black'}`}
							placeholder='E-mail'
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
									message: 'Please enter a valid email address'
								}
							})}
						/>
						{errorValidations.email && (
							<div>
								{errorValidations.email.map((err, i) => (
									<p className='text-red-500' key={i}>
										{err}
									</p>
								))}
							</div>
						)}
						{errors.email && <div className='text-red-500'>{errors.email.message}</div>}
					</div>
				</div>

				<div className='mb-5'>
					<input
						type='text'
						className={`form__input ${
							errors.subject ? errorBorderClass : normalBorderClass
						} ${isDarkTheme ? 'text-white' : 'text-black'} mb-5`}
						placeholder='Subject'
						{...register('subject', {
							required: 'Subject is required'
						})}
					/>
					{errorValidations.subject && (
						<div>
							{errorValidations.subject.map((err, i) => (
								<p className='text-red-500' key={i}>
									{err}
								</p>
							))}
						</div>
					)}
					{errors.subject && <div className='text-red-500'>{errors.subject.message}</div>}
				</div>

				<div className='mb-5'>
					<textarea
						className={`h-[125px] w-full border-b-2 bg-transparent ${
							isDarkTheme ? 'text-white' : 'text-black'
						} outline-none transition-all-200 hover:border-b-lightBlue ${errors.message ? errorBorderClass : normalBorderClass}`}
						placeholder='Message'
						{...register('message', {
							required: 'Message is required'
						})}
					></textarea>
					{errorValidations.message && (
						<div>
							{errorValidations.message.map((err, i) => (
								<p className='text-red-500' key={i}>
									{err}
								</p>
							))}
						</div>
					)}
					{errors.message && <div className='text-red-500'>{errors.message.message}</div>}
				</div>

				<button
					type='submit'
					className='cursor-pointer bg-lightBlue font-medium text-white outline-none sm:h-[45px] sm:w-[179px] sm:text-xs lg:h-[55px] lg:w-[239px] lg:text-[14px]'
				>
					Send Message
				</button>
			</form>
			<SuccessfulFormSubmission
				isModalOpen={isModalOpen}
				isDarkTheme={isDarkTheme}
				setIsModalOpen={setIsModalOpen}
				successMessage={successMessage}
			/>
		</div>
	)
}

export default ContactForm
