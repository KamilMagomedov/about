import ContactForm from '@/components/ContactContainer/ContactForm'
import { get } from '@/hooks/clients'
import { useContext, useEffect, useState } from 'react'
import Loader from '@/components/Loader/Loader'
import { DataContext } from '@/context/dataContext'

const Contact: React.FC = () => {
	const { contact, setContact, isDarkTheme } = useContext(DataContext)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'contact-forms' })
				setContact(response.data)
			} catch (err) {
				setError('Error fetching Contact information')
			}
		}
		fetchSkillsInfo()
	}, [])

	if (error) {
		return (
			<div className='error-message flex h-full items-center justify-center text-center text-5xl text-red-500'>
				{error}
			</div>
		)
	}

	if (!contact) {
		return <Loader />
	}

	return (
		<div
			className={`flex h-auto flex-col items-start justify-start ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			} 2xl:flex-row 2xl:overflow-y-auto`}
		>
			<div className='main_content'>
				<div className='main_title_container'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-xl sm:leading-7 xl:text-[30px]`}
					>
						{contact.top_title}
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-[38px] sm:leading-10 xl:text-7xl`}
					>
						{contact.title}
					</h1>
				</div>
				<div className='form_map_wrapper flex sm:flex-col 2xl:pb-[70px]'>
					{
						<ContactForm
							description={contact.description}
							successMessage={contact.success_message}
							isDarkTheme={isDarkTheme}
						/>
					}
				</div>
			</div>
		</div>
	)
}

export default Contact
