var net=require('net');

var server=net.createServer(function(socket){

    socket.on('data',function(data){
        socket.write('您好');
    });
    
    socket.on('end',function(){

        console.log('断开');
    });

    socket.write('welcome');
});
server.listen(8181,function(){
    console.log('端口绑定');
})