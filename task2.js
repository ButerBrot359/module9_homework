/*
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/


function jsonToObj(data) {
    const newObject = JSON.parse(data);
    var arr = []
    for (v of newObject.list) {
        var human = {
            name: v.name,
            age: v.age,
            prof: v.prof,
        }
        arr.push(human)
    }
    return arr
    
}
var a = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`

console.log(jsonToObj(a));