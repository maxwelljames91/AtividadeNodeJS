const restify = require('restify');     //Requisitando a utilização do pacote restify
const port = 3000;                      //Porta na qual o nosso servidor irá executar
const server = restify.createServer();  //Cria a interface do nosso servidor

/*Adicionamos o plugin do bodyparser, para trabalhar com json automaticamente
 na entrada e saída e também para que o restify já faça o map dos parâmetros de entradas
*/

server.use(restify.plugins.bodyParser({
 mapParams:true,
 mapFiles:false,
 overrideParams: false
}));

/*
 Criação de uma rota de entrada para nossa API,
 aqui poderia ser uma rota do tipo post(insert), put(update),del(delete),
 como apenas iremos retornar um objeto, utilizaremos get(busca/retorno).
 — Request, serve para obter algum parâmetro ou cabeçalho(header) da requisição;
 — Response, retorna uma resposta/status da nossa api;
 — next, este método serve para parar a execução do código em um determinado momento e pular
 para o próximo método/função, caso existir.
*/

server.get('/', (request, response, next) => {
 //estaremos retornando para teste o status 200(O navegador interpreta que a requisição retornou com sucesso), dizendo que a resposta está ok e um objeto json com uma mensagem.
 const retorno = {retorno:'restify ok'};
 response.send(200, retorno);
 next();
});

//Iremos executar nosso servidor com as configurações e rotas adicionadas anteriormente
server.listen(port, () => {
 console.log('restify executando na porta:${port}');
});

//Exportamos nossa variável server, para que a mesma se torne “pública” e seja executada pelo index.js
module.exports = server;