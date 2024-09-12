interface IAboutItem {
	id: number
	percent: string
	title: string
	description: string
	is_active: boolean
}

export interface IAboutData {
	position: string
	fio: string
	description: string
	items: IAboutItem[]
}

export interface IContact {
	top_title: string
	title: string
	description: string
	success_message: string
}

interface IEducationItem {
	id: string
	year: string
	image: string
	educational_institution: string
	speciality: string
	description: string
}

export interface IEducationInformation {
	id: string
	top_title: string
	title: string
	items: IEducationItem[]
}

interface IExperienceItems {
	id: string
	position: string
	company: string
	description: string
	start_date: string
	end_date: string
}

export interface IExperience {
	id: string
	topTitle: string
	title: string
	items: IExperienceItems[]
}

export interface IPortfolioItems {
	id: string
	image: string
	title: string
	description: string
	url: string
}

export interface IPortfolioInformation {
	id: string
	name: string
	projects: IPortfolioItems[]
}

export interface IServicesItem {
	id: number
	image: string
	title: string
	description: string
}

export interface IServicesItems {
	top_title: string
	title: string
	items: IServicesItem[]
}

interface ISkillItems {
	id: number
	image: string
	title: string
	description: string
}

interface IProgressItems {
	percent: string
	name: string
	id: string
	color_start: string
	color_end: string
	color_stop_1: string
	color_stop_2: string
	stroke_dash_offset: string
	data_perc: string
	data_name: string
}

export interface ISkillItemsWithProgress {
	top_title: string
	title: string
	description: string
	skillItems: ISkillItems[]
	progressItems: IProgressItems[]
}

export interface ITestimonialsInfo {
	id: string
	title: string
	text: string
	image: string
	fio: string
	position: string
}

export interface IRoutes {
	path: string
	label: string
	isActive: boolean
}

export enum Theme {
	'LIGHT' = 'light',
	'DARK' = 'dark'
}

export interface dataContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
	userInfo?: IUserInfo
	setUserInfo?: (userInfo: IUserInfo) => void
	about?: IAboutData
	setAbout?: (about: IAboutData) => void
	skills?: ISkillItemsWithProgress
	setSkills?: (skills: ISkillItemsWithProgress) => void
	services?: IServicesItems
	setServices?: (services: IServicesItems) => void
	experience?: IExperience
	setExperience?: (experience: IExperience) => void
	education?: IEducationInformation
	setEducation?: (education: IEducationInformation) => void
	portfolio?: IPortfolioInformation[]
	setPortfolio?: (portfolio: IPortfolioInformation[]) => void
	testimonials?: ITestimonialsInfo[]
	setTestimonials?: (testimonials: ITestimonialsInfo[]) => void
	contact?: IContact
	setContact?: (contact: IContact) => void
	isDarkTheme?: boolean
}

export interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export interface ScrollIndicatorProps {
	totalSections: number
	currentSection: number
	itemsPerPage: number
}

export interface ITestimonialsContainerProps {
	title: string
	text: string
	photo: string
	info: string
	isDarkTheme: boolean
}

export interface ISkillLoaderProps {
	id: number
	skillLength: number
	percent: string
	characteristic: string
	text: string
	isDarkTheme: boolean
}

export interface IServicesContainer {
	img: string
	title: string
	text: string
	isDarkTheme: boolean
}

export interface ProgressBarSVGProps {
	gradientId: string
	stopColor1: string
	stopColor2: string
	strokeDashoffset: string
}

export interface IProgressBarProps {
	id: string
	programmingLanguage: string
	percent: string
	dataPerc: string
	dataName: string
	dataColorStart: string
	dataColorEnd: string
	stopColor1: string
	stopColor2: string
	strokeDashoffset: string
	isDarkTheme: boolean
}

export interface ITabsInfo {
	id: string
	name: string
	activeTab: string
	onTabClick: (keyActive: string) => void
	isDarkTheme: boolean
}

export interface IContentTabs {
	imageUrl: string
	url: string
	isDarkTheme: boolean
	title: string
	description: string
}

export interface ThemeProps {
	isDarkTheme: boolean
	menuList?: IRoutes[]
}

export interface ThemePropsWithBurger extends ThemeProps {
	setShowBurger: (value: boolean) => void
}

export interface IMilestoneProps {
	index: number
	milestoneLength: number
	imgSrc: string
	dataEndValue: string
	text: string
	isDarkTheme: boolean
}

export interface IListGeneralInfoProps {
	image?: string
	title: string
	value: string
	theme: string
}

export interface IExperienceContainer {
	yearStart: string
	yearEnd: string
	position: string
	company: string
	description: string
	isDarkTheme: boolean
}

export interface IEducationInfo {
	year: string
	img: string
	educationalEstablishments: string
	education: string
	text: string
	isDarkTheme: boolean
}

export interface ISuccessfulFormSubmission {
	isModalOpen: boolean
	isDarkTheme: boolean
	setIsModalOpen: (isOpen: boolean) => void
	successMessage: string
}

export interface IContactForm {
	name: string
	email: string
	subject: string
	message: string
}

export interface IContactProps {
	description: string
	successMessage: string
	isDarkTheme: boolean
}

export interface IErrorValidations {
	name: string[] | ''
	email: string[] | ''
	subject: string[] | ''
	message: string[] | ''
}

export interface IContactItem {
	id: string
	image?: string | null
	title: string
	value: string
}

interface ISocialLink {
	id: string
	image?: string
	url: string
	sort: string
}

interface IContacts {
	id: string
	image?: string | null
	title: string
	items: IContactItem[]
}

export interface IUserInfo {
	contacts: IContacts
	socialLinks: ISocialLink[]
}

export interface IGet {
	path?: string | null
}

export interface IPost {
	path: string
	data: object | {}
}
