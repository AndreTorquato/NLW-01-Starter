// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()
//  Criar o objeto que irá fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Ultilizar  o objeto de banco de dados, para nossas operações


// db.serialize(() => {
    // // Com commandos SQL eu vou:
    
    // // 1 criar uma tabela
    //  db.run(`
    //  CREATE TABLE IF NOT EXISTS places (
    //      id INTEGER PRIMARY KEY AUTOINCREMENT,
    //      image TEXT,
    //      name TEXT,
    //      address TEXT,
    //      address2 TEXT,
    //      state TEXT,
    //      city TEXT,
    //      items TEXT
    //  );
    //  `)
    // // 2 Inserir dados na tabela 
    // const query = `
    // INSERT INTO places(
    //     image,
    //     name, 
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg",
    //     "Hakuna matata",
    //     "Capitão Mor",
    //     "Pedra-Braca",
    //     "Ceará",
    //     "Grande Muralha da chinha",
    //     "Residuos eletronicos, lampadas"
    // ]
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }
    // db.run(query, values, afterInsertData)
    // 3 Consultar dados na tabela 
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })
    // 4 deletar dados na tabela 
    // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
// })