const fs = require('fs')
exports.get_search_data = function(key,start,end){
    return function(cb){
        var https = require('https')
        var qs = require('querystring')
        var data = {
            key:key,
            start:start,
            end:end
        };
      
        var content = qs.stringify(data)
        var http_request = {
            hostname:'https://kyfw.12306.cn',
            port:80,
            path:'/otn/leftTicket/init? linktypeid=dc&fs=%E5%8C%97%E4%BA%AC,BJP&ts=%E4%B8%8A%E6%B5%B7,SHH&date=2019-12-09&flag=N,N,Y',
        }

        var req =https.request(http_request,function(response){
            var body = ''
            response.setEncoding('utf-8')
            response.on('data',function(chunk){
                body+=chunk;
            })
            response.on('end',function(){
                cb(null,body);
            })
        })
        req.end()
    }
}