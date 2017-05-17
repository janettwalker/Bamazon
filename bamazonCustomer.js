var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'bamazonDB'
});

// connect to the mysql server and sql database
function listItems() {
  // display the products (id, name, and price)
  connection.query('SELECT * FROM products', function(err, results) {
    // errors
    if (err) throw err;

    // tell users they're looking at the product list
    console.log("Welcome to Bamazon!\nHere is a list of products. Enjoy!");

    // loop through results array, log results
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].item_id + ". " +
                  results[i].product_name + " ($" +
                  results[i].price + ")");
    };
    // run Purchase Item
    purchaseItem(true); 
  });
};

function purchaseItem() {
  inquirer.prompt([
      {
        type: "number",
        message: "What is the item ID of the product your would like to purchase?",
        name: "itemID"
      },
      {
        type: "number",
        message: "How many would you like to buy?",
        name: "quantity"
      },
]};

prompt.start();
listItems();
connection.end();