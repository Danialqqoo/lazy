// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

app.use(express.static('public'));

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){

    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);



app.get("/about", function(request, response){
    response.sendFile(path.join(__dirname, '/public', 'admin.html'));

});



 