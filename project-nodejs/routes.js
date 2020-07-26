const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url
    const method = req.method

    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message here</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();    
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end();
            })    
        })
    }
    
    res.write('<html>')
    res.write('<head><title>First Nodejs App</title></head>')
    res.write('<body>Server is up yaaay!!!!!</body>')
    res.write('</html>')
    res.end();
}

// module.exports = requestHandler

// module.exports = {
//     handler: requestHandler,
//     text: 'some hard coded text'
// }

// module.exports.handler = requestHandler
// module.exports.text = 'some hard coded text'

exports.handler = requestHandler
exports.text = 'some hard coded text'