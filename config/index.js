import dotenv from 'dotenv';

// populate env variables
dotenv.config()

const config = {
    identity: {
        username: 'TitatiBot',
        password: process.env.token,
    },
    channels: ["titatitutu"]
    
}

export default config
