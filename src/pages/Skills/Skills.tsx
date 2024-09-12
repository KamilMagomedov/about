import ProgressBar from '@/components/ProgressBar/ProgressBar'
import Milestone from '@/components/Milestone/Milestone'
import { useContext, useEffect, useState } from 'react'
import { get } from '@/hooks/clients'
import Loader from '@/components/Loader/Loader'
import { DataContext } from '@/context/dataContext'

const Skills: React.FC = () => {
	const { isDarkTheme, skills, setSkills } = useContext(DataContext)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'skills' })
				setSkills(response.data)
			} catch (err) {
				setError('Error fetching Skills information')
				console.error('Error fetching Skills information:', err)
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

	if (!skills) {
		return <Loader />
	}

	return (
		<div
			className={`skills flex h-auto items-start justify-start ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			} sm:flex-col 2xl:flex-row 2xl:overflow-y-auto`}
		>
			<div className='main_content h-auto w-calc-aside pl-[82px] pr-[30px] sm:w-full sm:px-[15px] sm:py-5 lg:px-[30px] lg:py-[30px] xl:px-[80px] xl:pt-[90px]'>
				<div className='main_title_container flex flex-col items-start justify-end sm:mb-[10px] xl:mb-[72px]'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-[18px] sm:leading-7 xl:text-[30px]`}
					>
						{skills.top_title}
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-4xl sm:leading-10 xl:text-7xl`}
					>
						{skills.title}
					</h1>
				</div>
				<div className='pb-[20px] pr-[60px] sm:mb-0 sm:pr-[10px]'>
					<div className='skills'>
						<div
							className={`skills_text list-decimal sm:mb-[90px] ${isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'}`}
							dangerouslySetInnerHTML={{ __html: skills.description || '' }}
						></div>
						<div className='progress_bar sm:mb-5'>
							<div className='row sm:mb-[90px] 2xl:flex 2xl:flex-wrap'>
								{skills.progressItems.map(info => (
									<ProgressBar
										key={info.id}
										id={info.id}
										programmingLanguage={info.name}
										percent={info.percent}
										dataPerc={info.data_perc}
										dataName={info.data_name}
										dataColorStart={info.color_start}
										dataColorEnd={info.color_end}
										stopColor1={info.color_stop_1}
										stopColor2={info.color_stop_2}
										strokeDashoffset={info.stroke_dash_offset}
										isDarkTheme={isDarkTheme}
									/>
								))}
							</div>
						</div>
						<div className='milestones xl:flex xl:flex-wrap'>
							{skills.skillItems.map(info => (
								<Milestone
									key={info.id}
									index={info.id}
									milestoneLength={skills.skillItems.length}
									imgSrc={info.image}
									dataEndValue={info.title}
									text={info.description}
									isDarkTheme={isDarkTheme}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
