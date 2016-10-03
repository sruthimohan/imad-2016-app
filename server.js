var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
    
    title:'Article One|Sruthi Mohan',
    date:'sept.28 2016',
    heading:'Article One',
    content:' <p>Article One Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p>'
    
    
    
},
'articl-two':{
    
     title:'Article Two|Sruthi Mohan',
    date:'sept.29 2016',
    heading:'Article Two',
    content:' <p>Article Two s Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contenhere.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p>'
    
    
    
},
'article-three':{
    
    title:'Article Three|Sruthi Mohan',
    date:'sept.30 2016',
    heading:'Article Three',
    content:' <p>Article Three s Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contenhere.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p><p>Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.Contents here.</p>'
    
    
    
}};

function(createTemplate(data))
{
    
    var title=data.title;
    var date=data.date;
    var headinfg=data.heading;
    var content=data.content;
    
    
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
return HtmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/download.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download.jpg'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.param.articleName;
   res.send(createTemplate(articles[articleName]));
});
app.get('/article-two',function(req,res){
    
    res.send('Article two is served here');
});
app.get('/article-three',function(req,res){
    
    res.send('Article three is served here');
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
