import { Suspense, useContext, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactAsync } from '@/pages/Contact/Contact.async'
import { EducationAsync } from '@/pages/Education/Education.async'
import { ExperienceAsync } from '@/pages/Experience/Experience.async'
import { PortfolioAsync } from '@/pages/Portfolio/Portfolio.async'
import { ServicesAsync } from '@/pages/Services/Services.async'
import { TestimonialsAsync } from '@/pages/Testimonials/Testimonials.async'
import { NotFoundPageAsync } from '@/pages/NotFoundPage/NotFoundPage.async'
import { useTheme } from '@/context/useTheme'
import routes from '@/routes'
import Skills from '@/pages/Skills/Skills'
import About from './pages/About/About'
import NavBar from '@/components/NavBar/NavBar'
import Aside from './components/Aside/Aside'
import Menu from '@/components/Menu/Menu'
import { IRoutes } from './hooks/interfaces'
import '@/styles/index.scss'
import { DataContext } from './context/dataContext'
import { Link } from 'react-router-dom'

export default function App() {
	const { toggleTheme } = useTheme()
	const [showBurger, setShowBurger] = useState(false)
	let locationPage = useLocation()
	const { theme, isDarkTheme } = useContext(DataContext)

	const toggleBurgerMenu = () => {
		setShowBurger(prev => !prev)
	}

	const menuList = useMemo((): IRoutes[] => {
		return routes.slice(0, -2).map(route => {
			route.isActive = locationPage.pathname === route.path
			return route
		})
	}, [theme, locationPage.pathname])

	return (
		<div
			className={`super_container h-screen w-screen overflow-hidden ${
				isDarkTheme ? 'bg-[#1C1C1C] text-white' : 'bg-white text-darkColor'
			} pb-[45px] pl-10 pr-[41px] 2xl:px-10 2xl:py-10 ${theme} sm:pb-[60px] sm:pl-[15px] sm:pr-[15px] sm:pt-0`}
		>
			<div className='header ease left-0 top-0 z-10 w-full bg-white transition-all-200 sm:h-[59px] sm:pl-0 sm:pt-0'>
				<div
					className={`header_content relative flex h-full items-center justify-start ${
						isDarkTheme ? 'dark:bg-[#1C1C1C]' : 'bg-white'
					} `}
				>
					<Link
						to='/'
						className={`logo mr-12 text-3xl sm:mr-0 sm:text-[25px] ${isDarkTheme ? 'text-white' : 'text-darkMain'}`}
					>
						Kamil<span className={`${isDarkTheme ? 'text-[#5C5BEE]' : 'text-[#8583e1]'}`}>.</span>CV
					</Link>
					<nav className='main_nav hidden w-full items-center 2xl:flex'>
						<Menu isDarkTheme={isDarkTheme} menuList={menuList} />
					</nav>
					<div
						className={`burger_menu absolute transition-all-600 ${
							showBurger ? 'bottom-[-323px] sm:!w-[100%] lg:!w-[40%] xl:!w-1/4' : 'bottom-[0px]'
						} right-0 z-[100] block h-[430px] w-[250px] ${
							isDarkTheme ? 'bg-[#1C1C1C] text-white' : 'bg-white'
						} sm:w-[40%] lg:w-[40%] xl:w-1/4 2xl:hidden`}
					>
						<div className='menu_content h-full w-full pt-[10px] sm:flex sm:flex-col sm:justify-center'>
							<button
								className={`hamburger absolute bottom-[14px] right-[38px] cursor-pointer text-base font-bold tracking-wider ${
									isDarkTheme ? 'text-white' : 'text-darkMain'
								} transition-all-200 hover:text-[#7a798c] sm:right-0`}
								onClick={toggleBurgerMenu}
							>
								MENU
							</button>
							<div className='menu_nav pr-10 pt-[35px] text-right'>
								<NavBar isDarkTheme={isDarkTheme} menuList={menuList} setShowBurger={setShowBurger} />
							</div>
						</div>
					</div>

					<button
						type='button'
						onClick={toggleTheme}
						className={`toggleTheme hidden 3xl:ml-10 3xl:block ${
							isDarkTheme ? 'bg-[#5C5BEE]' : 'bg-darkMain'
						} text-white`}
					>
						{isDarkTheme ? 'Light Mode' : 'Dark Mode'}
					</button>
				</div>
			</div>
			<div className='relative flex h-full items-stretch sm:flex-col sm:overflow-y-auto 2xl:flex-row 2xl:overflow-hidden'>
				<Aside />
				<Suspense>
					<Routes>
						<Route path='/' element={<About />} />
						<Route path='/About' element={<About />} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/services' element={<ServicesAsync />} />
						<Route path='/experience' element={<ExperienceAsync />} />
						<Route path='/education' element={<EducationAsync />} />
						<Route path='/portfolio' element={<PortfolioAsync />} />
						<Route path='/testimonials' element={<TestimonialsAsync />} />
						<Route path='/contact' element={<ContactAsync />} />
						<Route path='*' element={<NotFoundPageAsync />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	)
}
