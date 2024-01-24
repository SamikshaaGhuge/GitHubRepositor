var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res)
{fs.open('input.txt','F',function(err,fd)
{
if(err){
console.error(err);
return res.end("404 file not found");
}
else
{
console.log('success');
res.end(data);
fs.close(fd);
});
});
server.listen(5000);