import { Config } from './config/index.js'
import app from './app.js'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log(`Server up and running at ${PORT}`));
    } catch (error) {
        console.warn(error);
        process.exit(1);
    }
}

startServer();