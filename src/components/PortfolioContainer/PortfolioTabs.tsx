import { ITabsInfo } from '@/hooks/interfaces'
import React, { memo } from 'react'

const PortfolioTabs: React.FC<ITabsInfo> = memo(({ id, name, activeTab, onTabClick, isDarkTheme }) => {
	return (
		<li
			onClick={() => onTabClick(id)}
			className={`${
				activeTab === id ? (isDarkTheme ? 'active !text-lightBlue' : '!text-darkMain') : ''
			} inline-block cursor-pointer font-semibold text-mediumGray last:mr-0 sm:mr-[21px] sm:text-[16px] lg:mr-[41px] lg:text-[18px]`}
		>
			{name}
		</li>
	)
})

export default PortfolioTabs
