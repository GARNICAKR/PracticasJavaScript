function Course(title){  // Constructores 
    this.title=title
}
function LiveCourse(date){// Constructores 
    this.date=date
}

LiveCourse.prototype=Object.create(Course.prototype);//El prototipo del constructor Course se hereda al Constructor
                                                    //de LiveCourse, LiveCourse puede usar todos los metodos creados en
                                                     //el prototype Course o los que vayan a crearse
                                                    
Course.prototype.inscribir=function(){    //se crea un metodo en el prototipo de Course          
    console.log("Inscrito");                        
}

Course.prototype.cont=0;                    //Se Crea una variable contador en el Prototipo Course


let javaScript=new Course("javaScript");    
javaScript.__proto__.cont+=1;

let ruby = Object.create(javaScript);// Se crea un objeto apartir del objeto anterior JavaScript herando su prototype   
ruby.__proto__.cont+=1;

let NodeJSLive=new LiveCourse("06/10/2000");
NodeJSLive.__proto__.cont+=1;       //Podemos Observar como el Objeto Creado con LiveCourse apartir del prototipo Course 
                                    //pude modificar la variable cont del Prototipo Course 

Course.prototype.inscribir=function(){//Los metodos de un prototipo puden ser modificados en cualquier momento y afectara
                                      //a todos los objetos creados con ese prototipo y a sus Herencias.
    console.log("Inscrito v2");
}
Course.prototype.Alumno=()=>{
    console.log("Jesus es el Nuevo Alumno")
}
LiveCourse.prototype.MostrarFecha=()=>{
    console.log(NodeJSLive.__proto__.date);
}
javaScript.inscribir();
ruby.inscribir();
javaScript.Alumno();
console.log(ruby.__proto__.cont);
NodeJSLive.inscribir();
console.log(NodeJSLive.__proto__.cont);
console.log(NodeJSLive.date);
