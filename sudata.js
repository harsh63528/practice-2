import  errorRes  from "./errorRes.js";

export default function subdata(data,errcode,urlObj,param,res){

    
                 const subRegion=urlObj.searchParams.get(`${param}`)||'';

                if(data.statusCode===200){
                    if(subRegion){
                        res.statusCode=200
                        return({response:res.statusCode,subregion:subRegion})
                    }
                }
                else{
                   errorRes(errcode,`${subRegion} not match`,res)
                }
              } 
