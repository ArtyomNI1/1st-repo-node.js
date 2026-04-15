import http from 'http';
import 'dotenv/config';

const hostname = "localhost"
const {PORT}=process.env
const server = http.createServer(async function (req, res) {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});

console.log(1);
server.listen(PORT, hostname, () => {
  console.log(`Server running on${PORT}`);
});
