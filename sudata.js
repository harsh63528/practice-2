

    export default function subdata(data,errcode,subRegion,res){
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
