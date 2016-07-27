var http=require("http");
var express=require("express");
var fs=require("fs");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var ejs=require("ejs");
var bootstrap=require("bootstrap");
var jquery=require("jquery");
var serv=express(); //express모듈 생성

serv.use(bodyParser.json());
serv.use(bodyParser.urlencoded({extended:true}));

var client = mysql.createConnection({ //Maria DB 접속
	"url":"localhost",
	"user":"root",
	"password":""
});

client.query("use board"); //board DB접속

//게시판 첫 페이지 요청시 동작.
serv.route("/bootstrap_home").get(function(request, response){
	var data = fs.readFileSync("./bootstrap_home.html","utf8");
	response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
	response.end(data);
}); 


//글쓰기

//글목록

//글삭제

//서버시작
var board = http.createServer(serv);
board.listen(8583,function(){
	console.log("Server is running at 8583");
});