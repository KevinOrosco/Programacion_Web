//1) Apareceria 70 y 180 en la consola porque al utilizarce console.log se pide el valor de weight y height

//2) Apareceria un error, debido a que age no esta definido

//3) Se llama Destructuracion

const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { age: personAge } = person
  console.log(age)