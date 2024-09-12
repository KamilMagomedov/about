import SkillLoader from '@/components/SkillLoader/SkillLoader'
import { useContext, useEffect, useState } from 'react'
import Loader from '@/components/Loader/Loader'
import { get } from '@/hooks/clients'
import { DataContext } from '@/context/dataContext'

const About: React.FC = () => {
	const { about, setAbout, isDarkTheme } = useContext(DataContext)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchAboutInfo = async () => {
			try {
				const response = await get({ path: 'about' })

				if (response && typeof response === 'object' && 'position' in response.data) {
					setAbout(response.data)
				}
				setError(null)
			} catch (err) {
				setError('Error fetching About information')
			}
		}
		fetchAboutInfo()
	}, [])

	if (error) {
		return (
			<div className='error-message flex h-full items-center justify-center text-center text-5xl text-red-500'>
				{error}
			</div>
		)
	}

	if (!about) {
		return <Loader />
	}

	return (
		<div
			className={`about flex h-auto items-start justify-start sm:pb-5 2xl:overflow-y-auto ${isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'} `}
		>
			<div className='main_content h-auto w-calc-aside pl-[82px] pr-[30px] sm:w-full sm:px-[15px] sm:py-5 lg:px-[30px] lg:py-[30px] xl:px-[80px] xl:pt-[90px]'>
				<div className='main_title_container flex flex-col items-start justify-end sm:mb-[10px] xl:mb-[72px]'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-xl sm:leading-7 xl:text-[30px]`}
					>
						{about.position}
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-[38px] sm:leading-10 xl:text-7xl`}
					>
						{about.fio}
					</h1>
				</div>
				<div className='pb-[20px] pr-[60px] sm:mb-0 sm:pr-[10px]'>
					<h3
						className={`about_title mb-[31px] font-bold ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:mb-0 sm:text-2xl xl:mb-[31px] xl:text-[30px]`}
					>
						Description
					</h3>
					<p
						className={`sm:mb-10 xl:mb-[98px] ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'}`}
						dangerouslySetInnerHTML={{ __html: about.description || '' }}
					></p>
					<div className='loaders flex flex-wrap sm:w-full'>
						{about.items.map(skill => {
							return (
								<SkillLoader
									key={skill.id}
									id={skill.id}
									skillLength={about.items.length}
									percent={skill.percent}
									characteristic={skill.title}
									text={skill.description}
									isDarkTheme={isDarkTheme}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
