/**
 * 
 * Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
 */

const b = document.getElementById("btn")
const content = document.getElementById("content");
b.addEventListener('click', ()=>{
    let c = document.getElementById("text").value.split(' ')
    if (c.length != 2) {
        content.innerHTML = "Введите 2 числа"
        return
    }
    if (isNaN(Number(c[0])) || isNaN(Number(c[1]))) {
        content.innerHTML = "Введите числa"
    } else if (Number(c[0]) < 100 || Number(c[0]) > 300 ||Number(c[1]) < 100 || Number(c[1]) > 300 ){
        content.innerHTML= "одно из чисел вне диапазона от 100 до 300"
    } else {
        var url = `https://picsum.photos/${c[0]}/${c[1]}`
        fetch(url)
            .then((response) => {
                const a =
                `<div>
                    <img src="${response.url}">
                </div>`;
                // console.log(ans);
                content.innerHTML = a
            })
            .catch(() => {
                console.log("error")
            })
        
    }
    
})
