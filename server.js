// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

app.use(express.static('public'));


var sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('database.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });






  
db.serialize(function () {
  db.run("CREATE TABLE if not exists admin(id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, password TEXT)");
  
  

 
 
 
 
 
//   db.each('SELECT rowid AS id, info FROM lorem', function (
//     err,
//     row
//   ) {
//     console.log(row.id + ': ' + row.info)
//   })
})

db.close()





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



 