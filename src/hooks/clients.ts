import axios from 'axios'
import { IGet, IPost } from './interfaces'

export const HTTP_CREATED = 201
export const HTTP_INTERNAL_SERVER_ERROR = 500
export const HTTP_UNPROCESSABLE_ENTITY = 422

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
	return instance.post(path, data)
}
