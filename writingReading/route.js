


const fs = require('fs');
const path = require('path');

const requestHandler = (req, res) => {
    if (req.url == '/') {

        const filepath = path.join(__dirname, "message.txt");

        fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
            if (err) { console.log(err) };
            // console.log(data);

            res.write('<html>');
            res.write('<head><title>Enter Massage</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action = "/message"  method ="POST"><input type = "text" name ="message"><button>sbmit</button></form></body>');
            res.write('</html>');
            return res.end();

        })
    } else if (req.url == '/message' && req.method == "POST") {
        const body = [];
        req.on('data', (chunk) => {

            // console.log(" chunk  " + chunk);

            body.push(chunk);
        });

        req.on('end', () => {

            const ParseBody = Buffer.concat(body).toString();
            // console.log("ParseBody  " + ParseBody);

            const message = ParseBody.split('=')[1];

            // console.log(" message  " + message);

            fs.writeFileSync('message.txt', message);

        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    } else {
        res.setHeader('Conten-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Enter Massage</title></head>');
        res.write('<body><h1>Error 404 : page not found</h1></body>');
        res.write('</html>');
        res.end();
    }

}
// exports = requestHandler;

module.exports = requestHandler;
