import React, { useContext, useEffect, useState } from 'react'
import ServicesContainer from '@/components/ServicesContainer/ServicesContainer'
import { get } from '@/hooks/clients'
import Loader from '@/components/Loader/Loader'
import { DataContext } from '@/context/dataContext'

const Services: React.FC = () => {
	const { isDarkTheme, services, setServices } = useContext(DataContext)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'services' })
				setServices(response.data)
			} catch (err) {
				setError('Error fetching Services information')
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

	if (!services) {
		return <Loader />
	}

	return (
		<div
			className={`services flex h-auto items-start justify-start ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			} sm:flex-col 2xl:flex-row 2xl:overflow-auto`}
		>
			<div className='main_content'>
				<div className='main_title_container'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-xl sm:leading-7 xl:text-[30px]`}
					>
						{services.top_title}
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-[38px] sm:leading-10 xl:text-7xl`}
					>
						{services.title}
					</h1>
				</div>
				<div className='pb-[20px] pr-[60px] sm:mb-0 sm:pr-[10px] xl:flex xl:h-auto xl:flex-wrap'>
					{services.items.map(item => (
						<ServicesContainer
							key={item.id}
							img={item.image}
							title={item.title}
							text={item.description}
							isDarkTheme={isDarkTheme}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
