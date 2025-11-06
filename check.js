import statuscode from "./statuscode.js";

export default function check(code,errcode,continentCode,obj,res){ 
    for( let [Key,value] of Object.entries(obj) ){
                    res.statusCode=code;
                    if(continentCode.toLocaleUpperCase()=== Key.toLocaleUpperCase()){
                        return ({statusCode:res.statusCode,continent:value})

                    }

                    else{
                       statuscode(errcode,res)
                    }
                }

            }