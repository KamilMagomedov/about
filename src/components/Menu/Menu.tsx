import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Menu.module.scss'
import { ThemeProps } from '@/hooks/interfaces'

const Menu: React.FC<ThemeProps> = ({ isDarkTheme, menuList }) => {
	const getStylesForActive = (state: boolean) => {
		return state
			? isDarkTheme
				? 'bg-darkBackground text-shadow-text-shadow-red'
				: 'bg-[#5C5BEE] text-darkMain text-shadow-text-shadow-red'
			: ''
	}

	return (
		<ul className={`${classes.list} flex w-full list-none justify-end transition-all-200`}>
			{menuList.map((route, index) => {
				return (
					<li key={index} className={`${classes.item} ${isDarkTheme ? 'bg-[#5C5BEE]' : 'bg-darkBackground'}`}>
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
