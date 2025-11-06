export default function statuscode(code,res){
    res.statusCode=code;
   return ({statusCode:res.statusCode})
}