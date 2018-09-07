const express = require('express');
const request = require('request');
const app = express();
var path = require('path');
// 设置静态资源管理,可以直接使用localhost:3000/xxx/xxx.png
app.use(express.static(path.join(__dirname, 'public')))

//在服务端解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
var imageBase = 'http://localhost:8888/'
app.get('/api/focus',function(req,res){
    var focus = [
        {title:'01',imageUrl:imageBase+'/focus/01.jpg'},
        {title:'02',imageUrl:imageBase+'/focus/02.jpg'},
        {title:'03',imageUrl:imageBase+'/focus/03.jpg'},
        {title:'04',imageUrl:imageBase+'/focus/04.jpg'},
        {title:'05',imageUrl:imageBase+'/focus/05.jpg'},
        {title:'06',imageUrl:imageBase+'/focus/06.jpg'}
    ]
    res.send(focus);
})
app.get('/api/focus2',function(req,res){
    var focus = [
        {title:'01',imageUrl:imageBase+'/focus/11.jpg'},
        {title:'02',imageUrl:imageBase+'/focus/12.jpg'},
        {title:'03',imageUrl:imageBase+'/focus/13.jpg'},
        {title:'04',imageUrl:imageBase+'/focus/14.jpg'},
        {title:'05',imageUrl:imageBase+'/focus/15.jpg'},
        {title:'06',imageUrl:imageBase+'/focus/16.jpg'}
    ]
    res.send(focus);
})



app.listen(8888,function(){
    console.log("服务器已经打开了");
})