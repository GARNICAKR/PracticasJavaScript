class Carro{ 
    constructor(marca,ano){//metodo constructor de una clase, se ejecuta automaticamente cuando se crea un objeto de la clase
        this.marca=marca;
        this.ano=ano;
    }
    vender(){
        console.log("Carro Vendido");
    }
    mostrar(){
        console.log(this.marca,"  ",this.ano,"  ",this.nombre);
    }
}
class Comprador extends Carro{ //En esta clase hereda los metodos de la clase Carro
    vender(){
        super.vender();//la palabra reservada super ayuda a hacer referencia a la clase padre
        console.log("El cliente Compro el auto");
    }
}

let Ford=new Carro("Ford",2015);
let Cliente=new Comprador();
Cliente.vender();
console.log(Ford.marca);
console.log(Ford.ano);
Ford.vender();
Ford.mostrar();


class User{
    static Host="localhost 3000";//las variables staticas se acceden atravez del nombre de la clase
    get nombre(){return this._nombre;}
    set nombre(nombre){
        if(typeof nombre !== "string")//verifica que no se ingresen numeros en el nombre
            throw new Error ("No es una cadena");
        this._nombre=nombre;
        
    }
}
console.log(User.Host);
let user=new User();
user.nombre="Luffy";//setter
console.log(user.nombre);//getter
