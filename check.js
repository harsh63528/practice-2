

export default function check(code,errcode,continentCode,obj,res){ 
    for( let [Key,value] of Object.entries(obj) ){
                    res.statusCode=code;
                    if(continentCode.toLocaleUpperCase()=== Key.toLocaleUpperCase()){
                        return ({statusCode:res.statusCode,continent:value})

                    }

                    else{
                      res.statusCode=errcode;
                     return ({statusCode:res.statusCode})
                    }
                }

            }