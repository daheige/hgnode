const httpUtils = require(__dirname+'/httpUtils');
httpUtils.get('https://www.baidu.com',function(data){
    console.log(data);
});