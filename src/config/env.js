import dotenv from 'dotenv'

dotenv.config()

const env = {
    port: process.env.SERVER_PORT || 5458
}

export default env