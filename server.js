const express = require('express');
const next = require('next');
const routes = require('./routes');


const dev = process.env.NODE_ENV !== 'production'
const app = next( {dev} );
const handler = routes.getRequestHandler(app);



app.prepare()
.then(()=>{
    const server = express();

    // server.get('/portfolio/:id',(req,res)=>{
    //     const actualPage = '/portfolio';
    //     const queryParams = {id : req.params.id};
    //     app.render(req,res,actualPage, queryParams)
    // })
    
    server.get('*',(req,res)=>{
        return handler(req,res);
    })

    server.use(handler).listen(3000,(err)=>{
        if(err) throw err;
        console.log("server running on local host:3000");
    })
})
.catch((err)=>{
    console.log(err.stack);
    process.exit(1);
})