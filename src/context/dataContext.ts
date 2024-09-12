import { dataContextProps } from '@/hooks/interfaces'
import { createContext } from 'react'

export const DataContext = createContext<dataContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
