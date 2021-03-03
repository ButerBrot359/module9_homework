/**
 * Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.
 */

const b = document.getElementById("btn")
const content = document.getElementById("content");
b.addEventListener('click', ()=>{
    let c = Number(document.getElementById("text").value);
    if (isNaN(c)) {
        content.innerHTML = "Введите число"
    } else {
        if (c >= 1 && c <= 10) {
            var result = null;
            var url = `https://picsum.photos/v2/list?limit=${c}`
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status != 200) {
                    console.log("Что-то пошло не так. Статус ответа - " + xhr.status);

                } else {
                    
                    result = JSON.parse(xhr.response)
                    
                    let ans = '';
                    result.forEach(item => {
                        const a =
                        `<div>
                            <img src="${item.download_url}" class="card">
                            <p>${item.author}</p>
                        </div>`;
                        ans = ans + a;
                    });
                    console.log(ans);
                    content.innerHTML = ans
                }
            }
            xhr.onerror= function() {
                console.log("Что-то пошло не так. Статус ответа - " + xhr.status);
            }
            xhr.send()
            
            
        } else {
            content.innerHTML = "число вне диапазона от 1 до 10"
        }
    }
    
})
