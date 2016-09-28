var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    
    title='Article One|Sruthi Mohan',
    date='sept.28 2016',
    heading='Article One',
    content=' <p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p>';
    
    
    
};
var HtmlTemplate='<html>
    <head>
        <title>{$title}}</title>
         <link href="/ui/style.css" rel="stylesheet" />
        
        
        
        
    </head>
    <body>
        <div class='container'>
            <div>
                
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h2>{$heading}}</h2>
            <p>{$date}}</p>
           <div> ${content}</div>
    </body>
    
    
    
</html>';



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/download.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download.jpg'));
});

app.get('/article-one',function(req,res){
    
   res.sendFile(path.join(__dirname,'ui','article-one.html')); 
});
app.get('/article-two',function(req,res){
    
    res.send('Article two is served here');
});
app.get('/article-three',function(req,res){
    
    res.send('Article three is served here');
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
