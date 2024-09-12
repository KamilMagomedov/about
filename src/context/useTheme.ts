import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, DataContext } from './dataContext'
import { Theme, UseThemeResult } from '@/hooks/interfaces'

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(DataContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toggleTheme
	}
}
