    import http from 'node:http'
    import{countries,continents} from './data.js'

    const server=http.createServer((req,res)=>{
        const urlObj=new URL(req.url,`http://${req.headers.host}`)

        // accessing pathname and paramenters
        
        const path=urlObj.pathname;
        const  splitPath=path.split('/').filter(Boolean)
    

        // set header type
        res.setHeader('Content-Type','application/json;charset=utf-8')

        // routing
        if(req.url.startsWith('/') && splitPath.length !==0 && req.method==='GET'){
            const data=splitPath[0];

            // filtering country by code
            async function findCountryByCode(data){
                
                const co=()=>{
                    const co=[]
                    countries.filter((country)=>{
                if(country.code===data.toUpperCase()){
                    co.push(country)
                    res.end(JSON.stringify(country))
                }
            }
        )
        return co;
    }  
               return co();
               
            }
            let give=findCountryByCode(data);
             if(give.length===0){
                    res.statusCode=404;
                    res.end(JSON.stringify({error:res.statusCode,reason:'Not Found'}))
                } 
                
                else{
                    res.end(JSON.stringify(give),'utf-8')
                }
        
            
        }
       
    })

    const PORT=8000;

    server.listen(PORT,()=>{
        console.log(`server:http://localhost:${PORT}`)
    })