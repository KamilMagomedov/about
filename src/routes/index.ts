import { IRoutes } from '@/hooks/interfaces'

const routes: IRoutes[] = [
	{ path: '/', label: 'About', isActive: false },
	{ path: '/skills', label: 'Skills', isActive: false },
	{ path: '/services', label: 'Services', isActive: false },
	{ path: '/experience', label: 'Experience', isActive: false },
	{ path: '/education', label: 'Education', isActive: false },
	{ path: '/portfolio', label: 'Portfolio', isActive: false },
	{ path: '/testimonials', label: 'Testimonials', isActive: false },
	{ path: '/contact', label: 'Contact', isActive: false },
	{ path: '/notFoundPage', label: 'NotFoundPage', isActive: false }
]

export default routes
