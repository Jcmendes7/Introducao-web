//sem o Express

// const http = require('http');

// http.createServer((req,res) =>{
//     res.writeHead(200,{"content-type": "text/plain"});
//     switch (req.url) {
//         case '/':
//             res.end("Bem vindo a minha Pagina");
//             break;
//         case '/contatos':
//             res.end("Bem vindo ao meus contatos");
//             break;
    
//         default:
//             res.end("Pagina nao encontrada");
//             break;
//     }
    
// }).listen(3000, console.log("Servidor rodando na porta 3000"));

// usando o Express
const express = require('express');
const app = express();


app.get('/', (req,res) => res.sendFile(__dirname + '/Website/index.html'));


app.get('/contatos',(req,res) => res.send("Bem vindo a pagina de contatos"));

app.listen(3000, () => console.log("servidor rodando na porta 3000"));