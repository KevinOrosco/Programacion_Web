print = (console.log)

//Array

const numeros = [1,2,3]
print(numeros[1])

//Objetos

const persona = { 
    name: 'Dani',
    age: 30,
    isWorking: true,
    cats: ["Zoe", "Pipe", "Lujan"],
    walk: function(){
        //Si la funcion retorna void es que no se devuelve nada, si no, aclara el tipo de dato
        return "estoy caminando";
        //Si la funcion no devuelve ningun valor, va a devolver un undefined por default
    }
  };

print(persona.name)
print(persona["age"])
print(persona.cats[1])
//Si cuando estas mostrando/ejecutando una funcion no le ponen los parentesis este no va a funcionar
print(persona.walk())

//reasignamos el valor de la propiedad age
persona.age = 17;

print(persona.age)

//delete borra las propiedades seleccionadas del objeto
delete persona.age;

function createObject(name, subs) {
    const objeto = {
        nombre: name,
        suscriptores: subs,
        hash: name.length * subs ,
        getstatus: `El canal de ${name} tiene ${subs} suscriptores`
    }
    return objeto
}

console.log(createObject("pipe", 20))