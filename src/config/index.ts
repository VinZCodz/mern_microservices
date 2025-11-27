import dotenv from 'dotenv'
import logger from './logger'

const result = dotenv.config()

if (result.error) {
    logger.error('Error loading .env file:', result.error)
}

const { PORT, NODE_ENV } = process.env

export const Config = {
    PORT: PORT || '3000',
    NODE_ENV: NODE_ENV || 'development',
}
