const fs = require('fs')

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter user name</title><head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/create-user' && req.method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const username = parsedBody.split('=')[1]
            console.log(`username is ${username}`)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')    
        res.end();
    }

    if(req.url === '/users') {
        res.write('<html>');
        res.write('<head><title>All users</title><head>');
        res.write('<body><ul><li>user1</li><li>user2</li><ul></body>');
        res.write('</html>');
    }
}

exports.handler = requestHandler