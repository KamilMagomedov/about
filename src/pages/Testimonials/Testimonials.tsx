import { useContext, useEffect, useState } from 'react'
import TestimonialsContainer from '@/components/TestimonialsContainer/TestimonialsContainer'
import ScrollIndicator from '@/components/TestimonialsContainer/ScrollIndicator'
import { get } from '@/hooks/clients'
import Loader from '@/components/Loader/Loader'
import { DataContext } from '@/context/dataContext'
import classes from './Testimonials.module.scss'

const Testimonials: React.FC = () => {
	const { isDarkTheme, testimonials, setTestimonials } = useContext(DataContext)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'testimonials' })
				setTestimonials(response.data)
			} catch (err) {
				setError('Error fetching Testimonials information')
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

	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [itemsPerPage, setItemsPerPage] = useState<number>(3)

	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(window.innerWidth < 1440 ? 1 : 3)
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const nextSlide = (): void => {
		setCurrentIndex(prevIndex => (prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage))
	}

	const prevSlide = (): void => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage))
	}

	if (!testimonials) {
		return <Loader />
	}

	return (
		<div
			className={`testimonials flex h-auto flex-col items-start justify-start ${
				isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-[#f5f0f0]'
			} 2xl:flex-row 2xl:overflow-y-auto`}
		>
			<div className={`${classes.main_content} main_content`}>
				<div className='main_title_container'>
					<p
						className={`main_subtitle mb-3 font-medium leading-8 ${
							isDarkTheme ? 'text-[#C2C2C2]' : 'text-[#7a798c]'
						} sm:text-xl sm:leading-7 xl:text-[30px]`}
					>
						What clients say
					</p>
					<h1
						className={`main_title text-[90px] font-extrabold leading-[5rem] ${
							isDarkTheme ? 'text-[#EAEAEA]' : 'text-darkMain'
						} sm:text-[38px] sm:leading-10 xl:text-7xl`}
					>
						Testimonials
					</h1>
				</div>
				<div className='testimonials_carousel_scrollIndicator relative'>
					<div className='testimonials_block relative overflow-hidden sm:mb-[60px]'>
						<div
							className='testimonials_carousel flex items-stretch transition-transform duration-500'
							style={{
								transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`
							}}
						>
							{testimonials.map(item => (
								<div
									key={item.id}
									className={`flex-shrink-0 ${classes.calcWidth} flex grow self-stretch 3xl:mr-[30px]`}
								>
									<TestimonialsContainer
										title={item.title}
										text={item.text}
										photo={item.image}
										info={item.fio}
										isDarkTheme={isDarkTheme}
									/>
								</div>
							))}
						</div>
						<button
							type='button'
							className={`absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white ${
								isDarkTheme ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-800 hover:bg-gray-700'
							}`}
							onClick={prevSlide}
						>
							&#10094;
						</button>
						<button
							type='button'
							className={`absolute top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white ${
								isDarkTheme ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-800 hover:bg-gray-700'
							} sm:right-0 3xl:right-[30px]`}
							onClick={nextSlide}
						>
							&#10095;
						</button>
					</div>
					{
						<ScrollIndicator
							totalSections={testimonials.length}
							currentSection={currentIndex}
							itemsPerPage={itemsPerPage}
						/>
					}
				</div>
			</div>
		</div>
	)
}

export default Testimonials
