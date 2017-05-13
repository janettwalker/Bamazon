var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Tminus987',
  database : 'bamazonDB'
});

connection.connect();
 
var displayItems = function(){
 
connection.query('SELECT * FROM products', function (err, res) {
  	currentItems = res;
  	if (error) throw error;
  	for (var i = 0; i < res.length; i++) {
  		console.log(res[i].item_id + ". " + res[i].product_name + ". " + res[i].price + ".")
  	}
  	console.log(currentItems);
});
};

displayItems();
 
connection.end();