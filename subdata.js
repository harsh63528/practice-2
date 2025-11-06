

    export default function subdata(data,errcode,urlObj,res){
        const subRegion=urlObj.searchParams.get(`region`)||'';
                    console.log(subRegion)
                    if(data.statusCode===200){
                        if(subRegion){
                            res.statusCode=200
                            return { response: res.statusCode, 
                                subregion:  subRegion}
                        }
                    }
                    else{

                    res.statusCode=errcode;
    return { statusCode: res.statusCode }
                    }
                } 
