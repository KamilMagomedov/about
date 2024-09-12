import EducationContainer from '@/components/EducationContainer/EducationContainer'
import { useContext, useEffect, useState } from 'react'
import { get } from '@/hooks/clients'
import Loader from '@/components/Loader/Loader'
import { DataContext } from '@/context/dataContext'

const Education: React.FC = () => {
	const { isDarkTheme, education, setEducation } = useContext(DataContext)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'educations' })
				setEducation(response.data)
			} catch (err) {
				setError('Error fetching Education information')
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

	if (!education) {
		return <Loader />
	}

	return (
		<div
			className={`education flex h-auto items-start justify-start ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			} sm:flex-col 2xl:flex-row 2xl:overflow-auto`}
		>
			<div className='main_content h-full w-calc-aside pl-[82px] pr-[30px] sm:w-full sm:px-[15px] sm:py-5 lg:px-[30px] lg:py-[30px] xl:px-[80px] xl:pt-[90px]'>
				<div className='main_title_container flex flex-col items-start justify-end sm:mb-[10px] xl:mb-[72px]'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-xl sm:leading-7 xl:text-[30px]`}
					>
						{education.top_title}
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-[38px] sm:leading-10 xl:text-7xl`}
					>
						{education.title}
					</h1>
				</div>
				<div className='pb-[20px]'>
					{education.items.map(item => (
						<EducationContainer
							key={item.id}
							year={item.year}
							img={item.image}
							educationalEstablishments={item.educational_institution}
							education={item.speciality}
							text={item.description}
							isDarkTheme={isDarkTheme}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Education
