

    export default function subdata(data,errcode,urlObj,param,res){

        
                    const subRegion=urlObj.searchParams.get(`${param}`)||'';

                    if(data.statusCode===200){
                        if(subRegion){
                            res.statusCode=200
                            return({response:res.statusCode,subregion:subRegion})
                        }
                    }
                    else{
                    res.statusCode=404;
    return ({statusCode:res.statusCode})
                    }
                } 
