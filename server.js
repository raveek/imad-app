var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'Article One | Ravi K',
    heading : 'Artical One',
    date : '8 Feb ,2018',
    content: `<p>
                This is sample text just to demonstrate. This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.
              </p>
              <p>
                 This is sample text just to demonstrate. This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.
              </p>
              <p>
                This is sample text just to demonstrate. This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.This is sample text just to demonstrate.
              </p>`
};

function crateTemplate (data) {
    var title = data.title;
    var date = date.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <dev class="container">
                <dev>
                    <a href ="/"> Home </a>
                </dev>
                <h3>
                    ${heading}
                </h3>
                <dev>
                    ${date}
                </dev>
                <dev>
                    ${content}
                </dev>
            </dev>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/article-two', function (req, res) {
  res.send('Article-two requested and will be server here');
})

;app.get('/article-three', function (req, res) {
  res.send('Article-three requested and will be server here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
