import axios from 'axios'
import { IGet, IPost } from './interfaces'

const instance = axios.create({
	baseURL: 'https://portfolio.laravelhub.kyiv.ua/api/'
})

export const get = ({ path }: IGet) => {
	if (!path) {
		throw new Error('Path is required')
	}

	return instance
		.get(path)
		.then(response => response.data)
		.catch(error => {
			console.error('Error fetching data:', error)
			throw error
		})
}

export const post = ({ path, data }: IPost) => {
	return instance
		.post(path, data)
		.then(response => response.data)
		.catch(error => {
			console.error('Error posting data:', error)
			throw error
		})
}
