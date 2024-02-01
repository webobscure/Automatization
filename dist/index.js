const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "shop.onkron.ru",
  user: "shop_o",
  database: "shop_new",
  password: "8dYNH846SPvY",
});

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
    
    let sql = "SELECT products_specification_id,specification,specifications_id, language_id FROM products_specifications WHERE products_id = 20"
    connection.query(sql, (err, result) => {
      if (err) throw err;
      //console.log(result)
      for (let i = 0; i < result.length; i++) {
        if (result[i].products_specification_id == 753460) {
            //result[i].specification = (result[i].specification * 2.2).toString();
            console.log(result[i])
            
          let updateSql = `UPDATE products_specifications SET specification = ${result[i].specification} WHERE specifications_id = 23 AND language_id = 2`;
          /*
          connection.query(updateSql, (err, updateResult) => {
            if (err) throw err;
            console.log('Updated a record with specification_id equal to 753426:', updateResult);
            console.log(result[i])
          });
          */
          break;
        }
      }
      
    });
  });
  