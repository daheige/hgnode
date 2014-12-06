/**
 *  HTTP�ͻ���
 *  ��httpģ���У�������request��������������վ��������
 */
//�����ͻ�������ٶ���ҳ
var http=require("http");
var options={
    'hostname':'www.baidu.com',
    'port':80,
    'path':'/',
    'method':'GET'
}
//�����ͻ���
var req=http.request(options,function(res){
    //res��ʾ���󷵻صĽ��
    console.log("״̬�룺"+res.statusCode);
    console.log("��Ӧͷ��"+JSON.stringify(res.headers));
    //ת��Ϊ�ַ���
    //���ñ���
    res.setEncoding("utf8");
    //����data�¼�
    res.on('data',function(chuck){
        console.log("���ص����ݣ�"+chuck);
    });
});

//��������з�������
req.on("error",function(err){
    //��socket����ʱ�����������ECONNRESET
    if(err.code === "ECONNRESET"){
        console.log("socket�˿ڳ�ʱ");
    }else{
        console.log("�����з������󣬴������:"+err.code);
    }
    
});

//�ڽ�������ʱ�򣬻�Ϊ���ӷ���˿ڣ�����socket�¼�
req.on("socket",function(socket){
    socket.setTimeout(1000);//����socket��ʱ
    //����socket��ʱ
    socket.on("timeout",function(){
        req.abort();//socket��ʱ��ֹ��������
    });
});

req.end();//��������
