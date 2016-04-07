/**
 * Created by miaomin on 3/31/2016.
 */
var express = require ('express');
var fs = require('fs');

var server = express();

server.use('/bootstrap/css',express.static(__dirname + '/bower_components/bootstrap/dist/css'));
server.use('/bootstrap/js',express.static(__dirname + '/bower_components/bootstrap/dist/js'));
server.use('/js',express.static(__dirname + '/bower_components/jquery/dist'));
server.use('/static',express.static(__dirname + '/static'));
server.use('/assets',express.static(__dirname + '/assets'));
server.use('/',express.static(__dirname));

server.listen(3999,function(){
    console.log('[info] Node server is listen on port 3999......');
});

server.get('/basic/index',function(req,res,next){
    var content = fs.readFileSync(__dirname + '/index.html','utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(content);
    res.end();
});

server.get('/basic/start',function(req,res,next){
    var content = fs.readFileSync(__dirname + '/start.html','utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(content);
    res.end();
});

server.get('/basic/schedule',function(req,res,next){
    var content = fs.readFileSync(__dirname + '/schedule.html','utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(content);
    res.end();
});

server.get('/basic/slides',function(req,res,next){
    var content = fs.readFileSync(__dirname + '/slides.html','utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(content);
    res.end();
});