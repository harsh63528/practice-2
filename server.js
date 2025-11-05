import http from 'node:http'
import{countries,continents} from './data.js'

const server=http.createServer((req,res)=>{
    const urlObj=new URL(req.url,`http://${req.headers.host}`)
    console.log(urlObj)
     if(req.url==='/' && req.method==='GET'){
        res.writeHead(200)
        res.end(JSON.stringify(continents));
     }

    else if(req.url.startsWith('/')&& req.method==='GET'){
      
        res.writeHead(200,{'content-Type':'text/json'})
        let data=req.url.split('/').pop();
        const store=[];
        const returnData=()=>{countries.filter(element=>{
            if(element.continentCode.toLocaleLowerCase()===data.toLocaleLowerCase()){
                store.push(element)
            }
        })
        return store
    }
        res.end(JSON.stringify(returnData()),'utf-8')
    }
    


     else{
        res.writeHead(404)
        res.end(`${res.statusCode}:url not found`)
     }
})

const PORT=8000;

server.listen(PORT,()=>{
    console.log(`server:http://localhost:${PORT}`)
})