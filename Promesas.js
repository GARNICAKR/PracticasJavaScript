const request=require("request");
const request_Promise=require("request-promise");

/*    request('https://www.google.com',function(){
        console.log("Termine la peticion")
    });*/

let promesa1=request_Promise('https://www.google.com')
    .then(()=>{console.log("Primera Peticion")})
    .then(()=>{console.log("Segunda Peticion")})
    .catch((error)=>{console.log("ERROR")})
    .finally((error)=>{console.log("Tercera Peticion")});

function leerPagina(url){
    return new Promise((res,rej)=>{
        request(url,(error,response)=>{
            if(error)return rej(error);
            res(response);
        });
    });
}
let promesa2 =leerPagina("https://google.com");
promesa2.then(r=> console.log("Cuarta Peticion")).catch(err=>console.log(err));
Promise.all([promesa1,promesa2]).then((resultados)=>{(console.log("Quinta Peticion"))});
console.log("Ultima Peticion");