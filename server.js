const express = require('express');
const path = require('path')
const app = express();

// creating 2 protocols
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// setting public paste as static to frontend files
// calling EJS as render to HTML
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res, next)=>{
    res.render('public/index')
    next()
});

server.listen(3000, ()=>{
    console.log('Listening on 3000 port')
})
