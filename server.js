    import http from 'node:http'
    import{countries,continents} from './data.js'

    const server=http.createServer((req,res)=>{
        const urlObj=new URL(req.url,`http://${req.headers.host}`)

        // accessing pathname and paramenters
        
        const path=urlObj.pathname;
        const  splitPath=path.split('/').filter(Boolean)
           
        // routing
        if(req.url.startsWith('/') && req.method==='GET'){
            // if condition match then start this
            //  storing the url
            const continentCode=splitPath[0]||'';
            const subRegion=splitPath[1]||'';

            // checking if continent is exist
            if(continentCode.length !== 0){
                
                for( let [Key,value] of Object.entries(continents) ){
                    if(continentCode.toLocaleUpperCase()=== Key.toLocaleUpperCase()){
                        res.end('matched')
                    }

                    else{
                        res.statusCode=404;
              res.end(JSON.stringify({response:404,message:'continent code does not '}),'utf-8') 
                    }
                }
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