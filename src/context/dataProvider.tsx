import { FC, useState, ReactNode, useMemo } from 'react'
import { LOCAL_STORAGE_THEME_KEY, DataContext } from '@/context/dataContext'
import {
	IAboutData,
	IContact,
	IEducationInformation,
	IExperience,
	IPortfolioInformation,
	IServicesItems,
	ISkillItemsWithProgress,
	ITestimonialsInfo,
	IUserInfo,
	Theme
} from '@/hooks/interfaces'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IDataProviderProps {
	children: ReactNode
}

export const DataProvider: FC<IDataProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	const [about, setAbout] = useState<IAboutData>(null)
	const [userInfo, setUserInfo] = useState<IUserInfo>(null)
	const [skills, setSkills] = useState<ISkillItemsWithProgress>(null)
	const [services, setServices] = useState<IServicesItems>(null)
	const [experience, setExperience] = useState<IExperience>(null)
	const [education, setEducation] = useState<IEducationInformation>(null)
	const [portfolio, setPortfolio] = useState<IPortfolioInformation[]>(null)
	const [testimonials, setTestimonials] = useState<ITestimonialsInfo[]>(null)
	const [contact, setContact] = useState<IContact>(null)

	const isDarkTheme = useMemo(() => {
		return theme === Theme.DARK
	}, [theme])

	const defaultProps = {
		theme,
		setTheme,
		about,
		setAbout,
		userInfo,
		setUserInfo,
		skills,
		setSkills,
		services,
		setServices,
		experience,
		setExperience,
		education,
		setEducation,
		portfolio,
		setPortfolio,
		testimonials,
		setTestimonials,
		contact,
		setContact,
		isDarkTheme
	}

	return <DataContext.Provider value={defaultProps}>{children}</DataContext.Provider>
}
