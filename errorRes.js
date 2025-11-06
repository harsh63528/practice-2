export default function errorRes(code=404,message,res){
    res.statusCode=code;
    res.end(JSON.stringify({response:code,message:`${message}`}),'utf-8')  
  }


