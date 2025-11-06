    import http from 'node:http'
    import{countries,continents} from './data.js'
import { count } from 'node:console'

    const server=http.createServer((req,res)=>{
        const urlObj=new URL(req.url,`http://${req.headers.host}`)
        console.log(urlObj)
        // accessing pathname and paramenters
        
        const path=urlObj.pathname;
        const  splitPath=path.split('/').filter(Boolean)
           
        // routing
        if(req.url.startsWith('/') && req.method==='GET'){
            // if condition match then start this
            //  storing the url
            const continentCode=splitPath[0]||'';

            // checking if continent is exist
            if(continentCode.length !== 0){
                
               const check=()=>{ for( let [Key,value] of Object.entries(continents) ){
                    res.statusCode=200;
                    if(continentCode.toLocaleUpperCase()=== Key.toLocaleUpperCase()){
                        return ({statusCode:res.statusCode,continent:value})

                    }

                    else{
                        res.statusCode=404;
                        return ({statusCode:res.statusCode})
                    }
                }

            }

            const data=check();
              function subdata(){

                if(data.statusCode===200){
                    const subRegion=urlObj.searchParams.get('region')||'';
                    if(subRegion){
                        res.statusCode=200
                        return({response:res.statusCode,subregion:subRegion})
                    }
                }
                else{
                    res.statusCode=404
                    return({response:res.statusCode,message:`${subRegion} not match`})
                }
              } 
               const subcheck=subdata()
            res.end(JSON.stringify(subcheck))  
            }
            else{
              res.statusCode=404;
              res.end(JSON.stringify({response:404,message:'continent code is missing '}),'utf-8')  
            }
            
        }

        else{
            res.statusCode=404;
            res.end(JSON.stringify({response:res.statusCode,message:'the url not found or the request method not match'}))
        }
       
    })

    const PORT=8000;

    server.listen(PORT,()=>{
        console.log(`server:http://localhost:${PORT}`)
    })