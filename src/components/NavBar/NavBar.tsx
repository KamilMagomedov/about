import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.scss'
import { ThemePropsWithBurger } from '@/hooks/interfaces'

const Menu: React.FC<ThemePropsWithBurger> = ({ isDarkTheme, menuList, setShowBurger }) => {
	const getStylesForActive = (state: boolean) => {
		return state ? (isDarkTheme ? ' text-shadow-text-shadow-red' : ' text-darkMain text-shadow-text-shadow-red') : ''
	}

	return (
		<ul className={`${classes.burgerList} flex w-full list-none transition-all-200`}>
			{menuList.map((route, index) => {
				return (
					<li
						key={index}
						className={`${classes.item} text-white ${isDarkTheme ? 'sm:bg-[#1C1C1C]' : 'sm:text-darkMain'}`}
						onClick={() => setShowBurger(false)}
					>
						<Link to={route.path} className={`${classes.linkPages} ${getStylesForActive(route.isActive)}`}>
							{route.label}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default Menu
