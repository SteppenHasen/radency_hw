import { createServer } from 'http';

import app from './src/index.js';

const PORT = process.env.PORT || 8000;
const server = createServer(app);

function startServer() {

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();