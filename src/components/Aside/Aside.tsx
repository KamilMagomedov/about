import ListGeneralInfo from '../ListGeneralInfo/ListGeneralInfo'
import { useTheme } from '@/context/useTheme'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/context/dataContext'
import { get } from '@/hooks/clients'

const Aside: React.FC = () => {
	const { theme, userInfo, setUserInfo } = useContext(DataContext)
	const { toggleTheme } = useTheme()
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSkillsInfo = async () => {
			try {
				setError(null)
				const response = await get({ path: 'contacts' })
				setUserInfo(response.data)
			} catch (err) {
				setError('Error fetching Aside information')
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

	return (
		<div
			className={`aside w-[400px] ${
				theme === 'dark' ? 'bg-[#2C2C5E]' : 'bg-darkMain'
			} shrink-0 sm:flex sm:h-auto sm:w-full sm:flex-col xl:flex-row 2xl:h-full 2xl:w-[400px] 2xl:flex-col 3xl:w-[473px]`}
		>
			<div className='xl:h-ull xl:w-full'>
				{userInfo?.contacts.image && (
					<img src={userInfo.contacts.image} alt='photo owner' className='h-full w-full object-cover' />
				)}
			</div>
			<div className='general_info_content h-full w-full overflow-hidden pb-5 pl-[77px] pr-[15px] pt-[49px] sm:flex sm:flex-col sm:items-center sm:justify-center sm:px-[15px] sm:py-5 lg:pl-[15px] lg:pt-10 2xl:flex-col 2xl:justify-start'>
				<h2 className='general_info_title mb-[34px] text-[1.8rem] font-semibold leading-8 text-white sm:text-center'>
					{userInfo && userInfo.contacts.title}
				</h2>
				<ul className='general_info_list list-none'>
					{userInfo &&
						userInfo.contacts.items.map(info => (
							<ListGeneralInfo key={info.id} image={info.image} title={info.title} value={info.value} theme={theme} />
						))}
				</ul>
				<div className='mb-5 flex items-center justify-center gap-[10px]'>
					{userInfo &&
						userInfo.socialLinks.map(socialLink => (
							<a
								key={socialLink.id}
								href={socialLink.url}
								target='_blank'
								className='block h-5 w-5 text-[18px] text-[#8d8b9b]'
							>
								<img
									src={socialLink.image}
									alt='social media icon'
									className='ml-[46px] text-[21px] text-[#8583e1] sm:ml-0'
								/>
							</a>
						))}
				</div>
				<button
					type='button'
					onClick={toggleTheme}
					className={`toggleTheme sm:block 3xl:hidden ${theme === 'dark' ? 'bg-[#5C5BEE]' : 'bg-[#2c2c5e]'} text-white`}
				>
					{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
				</button>
			</div>
		</div>
	)
}

export default Aside
