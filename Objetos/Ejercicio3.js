const object = {a: true, b : 42, c: false}

function getBoolean(object)
{
    const arr = []
    for( property in object){
    if (object[property] === true || object[property] === false){
        arr.push(property)    
    }
    }
    return arr
}
console.log(getBoolean(object))

