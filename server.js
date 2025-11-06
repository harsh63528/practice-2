    import http from 'node:http'
    import{countries,continents} from './data.js'
    import errorRes from './errorRes.js'
    import check from './check.js'
    import subdata from './sudata.js'

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
                
              

            const data=check(200,404,continentCode,continents,res);
            const subcheck=subdata(data,404,urlObj,'region',res)
            console.log(subdata(data,404,urlObj,'region',res))
             res.end(JSON.stringify(subcheck))  
            }
            else{
              errorRes(404,'continent code is missing ',res) 
            }
            
        }

        else{
            errorRes(404,'the url not found or the request method not match',res)
        }
       
    })

    const PORT=8000;

    server.listen(PORT,()=>{
        console.log(`server:http://localhost:${PORT}`)
    })