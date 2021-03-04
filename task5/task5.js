/**
 * 
 * Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).
 */

const b = document.getElementById("btn")
const content = document.getElementById("content");
console.log(typeof localStorage)
if (localStorage.length != 0) {
    var x = localStorage.getItem("localData")
    var c = JSON.parse(x)
    let ans = '';
        c.forEach(item => {
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
b.addEventListener('click', ()=>{
    let page = Number(document.getElementById("page").value)
    let limit = Number(document.getElementById("limit").value)
    console.log(page, limit)
    if ((isNaN(page) || page > 10 || page < 1) && (isNaN(limit) || limit > 10 || limit < 1)) {
        content.innerHTML = `<div>Номер страницы и лимит вне диапазона от 1 до 10</div>`
    } else if (isNaN(page) || page > 10 || page < 1) {
        content.innerHTML = `<div>Номер страницы вне диапазона от 1 до 10</div>`
    } else if (isNaN(limit) || limit > 10 || limit < 1){
        content.innerHTML = `<div>Лимит вне диапазона от 1 до 10</div>`
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response)=> {
            return response.json()
        })
        .then((data) => {
            localStorage.setItem("localData", JSON.stringify(data));
            
                    
                let ans = '';
                data.forEach(item => {
                    const a =
                    `<div>
                        <img src="${item.download_url}" class="card">
                        <p>${item.author}</p>
                    </div>`;
                    ans = ans + a;
                });
                console.log(ans);
                content.innerHTML = ans
        })
        .catch(() => {
            console.log("error")
        })
    }

})
// Если копируете код, поменяйте названия переменных ))