import React, { useCallback, useState, useRef, useEffect, useContext } from 'react'
import PortfolioTabs from '@/components/PortfolioContainer/PortfolioTabs'
import PortfolioContent from '@/components/PortfolioContainer/PortfolioContent'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { get } from '@/hooks/clients'
import { IPortfolioInformation, IPortfolioItems } from '@/hooks/interfaces'
import Loader from '@/components/Loader/Loader'
import { DataContext } from '@/context/dataContext'
import classes from './PortfolioStyles.module.scss'

const Portfolio: React.FC = () => {
	const { isDarkTheme, portfolio, setPortfolio } = useContext(DataContext)
	const [activeTab, setActiveTab] = useState<string>('0')
	const [allProjects, setAllProjects] = useState<IPortfolioItems[]>([])
	const [error, setError] = useState<string | null>(null)

	const handleTabClick = useCallback((id: string) => {
		setActiveTab(id)
	}, [])

	const nodeRefs = useRef(new Map<string, React.RefObject<HTMLDivElement>>())
	const extractAllProjects = (arrData: IPortfolioInformation[]): IPortfolioItems[] => {
		let res: IPortfolioItems[] = []
		arrData.forEach(data => {
			res = [...res, ...data.projects]
		})
		return res
	}

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'projects' })
				setPortfolio(response.data)
				setAllProjects(extractAllProjects(response.data))
			} catch (err) {
				setError('Error fetching Portfolio information')
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

	const projectsToShow: IPortfolioItems[] =
		activeTab === '0'
			? allProjects
			: portfolio.find((tab: IPortfolioInformation) => tab.id === activeTab)?.projects || []

	if (!portfolio) {
		return <Loader />
	}

	return (
		<div
			className={`portfolio flex h-auto grow flex-col items-start justify-start ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			} relative 2xl:flex-row 2xl:overflow-y-auto`}
		>
			<div className='main_content'>
				<div className='main_title_container'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-xl sm:leading-7 xl:text-[30px]`}
					>
						What I am good at
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-[38px] sm:leading-10 xl:text-7xl`}
					>
						My Portfolio
					</h1>
				</div>
				<div className='tabs'>
					<ul className='sm:mb-[30px]'>
						{[{ id: '0', name: 'All', projects: [] }, ...portfolio].map(tab => (
							<PortfolioTabs
								key={tab.id}
								name={tab.name}
								id={tab.id}
								activeTab={activeTab}
								onTabClick={handleTabClick}
								isDarkTheme={isDarkTheme}
							/>
						))}
					</ul>
					<TransitionGroup
						className={`content_tabs flex items-stretch sm:flex-col sm:pb-[30px] lg:flex-row lg:flex-wrap lg:justify-start 2xl:overflow-auto 3xl:max-h-[440px] 4xl:max-h-[620px]`}
					>
						{projectsToShow.map(tab => {
							if (!nodeRefs.current.has(tab.id)) {
								nodeRefs.current.set(tab.id, React.createRef())
							}
							return (
								<CSSTransition
									key={tab.id}
									nodeRef={nodeRefs.current.get(tab.id)}
									timeout={500}
									classNames={{
										enter: classes['fade-enter'],
										enterActive: classes['fade-enter-active'],
										exit: classes['fade-exit'],
										exitActive: classes['fade-exit-active']
									}}
									unmountOnExit
								>
									<PortfolioContent
										ref={nodeRefs.current.get(tab.id)}
										key={tab.id}
										imageUrl={tab.image}
										title={tab.title}
										description={tab.description}
										url={tab.url}
										isDarkTheme={isDarkTheme}
									/>
								</CSSTransition>
							)
						})}
					</TransitionGroup>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
