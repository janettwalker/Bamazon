var mysql = require('mysql');

var inquirer = require("inquirer")

var consoleTable = require("console.table")


var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Tminus987',
  database : 'bamazonDB'
});

 
// connect to the mysql server and sql database
function listItems() {
  // a) display the products (names, IDs, and prices)
  connection.query('SELECT * FROM products', function(err, results) {
    // errors
    if (err) throw err;

    // tell users they're looking at the product list
    console.log("Welcome to Bamazon!\nHere's our selection!");

    // loop through results array, log apropos results
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].item_id + ". " +
                  results[i].product_name + " ($" +
                  results[i].price + ")");
    }
    // run Purchase Item
    // purchaseItem(true); 
  })
}

listItems();
connection.end();