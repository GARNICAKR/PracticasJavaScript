let NumeroPag = 300;
// Creacion de un Objeto
let libro={
    titulo: "NodeJS",
    autor: "Juan",
    costo: 200,
    vender: function(){
        console.log("Libro Vendido");
    },
    NumeroPag,
    comprar(){
        console.log("Libro Comprado");
    }
}

libro.titulo="Ruby";//Modo de uso de los objetos
console.log(libro.titulo);
console.log(libro.NumeroPag);
libro.vender();

let NuevoLibro={...libro, disponible: true} //Creando un nuevo Objeto apartir del objeto anterior
let NuevoLibro2={libro, disponible: true} 
//console.log (NuevoLibro);
//console.log (NuevoLibro2);


let copia= Object.assign({name:"Jesus"},NuevoLibro,{año:23});//Otro metodo para crear un nuevo Objeto apartir de otro objeto
//console.log(copia);



let {name,titulo,apellido="Garnica",...sobrantes}=copia;//De este modo se puede separar las variables de un Objeto,
                                                        //sobrantes son las demas variables que no fueron separadas
//console.log(titulo);
//console.log(sobrantes);

function Carro(marca,ano){ //Funcion Constructora
    this.marca=marca;
    this.ano=ano;
    this.vender=function(){console.log(this,arguments)};
    this.vender=this.vender.bind(this);//La funcion bidn aqui sirve para que el contexto de this sea siempre la del objeto
}

let Ford = new Carro("ford",1999);// Creacion de Objetos apartir de la funcion constructora
let Ferrari = new Carro("ferrari",1800);
console.log(Ford);
console.log(Ferrari);
let Nissan = new Carro("nissan",2020);
Nissan.vender.call({},1,12,4);   //Las funcions call y apply sirven para establecer el valor de this en el primer parametro
Nissan.vender.apply({},[1,12,4]);//y los demas parametros puedes poner los valores que quiras

let NuevaFuncion=Nissan.vender.bind({},1,12,4);//bidn sirve para mantener el contexto que tenia el objeto
NuevaFuncion();

