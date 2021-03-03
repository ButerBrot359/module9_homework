/*
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/


function xmlToObj(data) {
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(data, "text/xml");
    
    const listTag = xmlDOM.querySelector("list");
    const studentsArr = listTag.querySelectorAll("student")

    let list = [];
    for (var v of studentsArr) {
        let student = {
            name: v.querySelector("first").textContent,
            age:  v.querySelector("age").textContent,
            prof: v.querySelector("prof").textContent,
            lang: v.querySelector("name").getAttribute("lang"),
        }
        list.push(student)
        // console.log(student)
    }
    return list
}

var a = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`

console.log(xmlToObj(a));