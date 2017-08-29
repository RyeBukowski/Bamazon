var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	port: 8080,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

connection.connect(function(err){
	if (err) throw err;
});


function dispProduct(){
	connection.query('SELECT * FROM Products', function(err, res){
		if(err) throw err;
		console.log('ITEMS IN STORE');

		for(i = 0; i < res.length; i++) {
			console.log('Item ID: ' + res[i].id + ' Product: ' + res[i].product_name + ' Department: ' + res[i].department_name + ' Price: ' + res[i].price + ' Stock: ' + res[i].stock_quantity);
		}
	});
}

function Order() {
	inquirer.prompt([{
		type: 'input',
		name: 'purchase',
		message: 'Enter the ID of the item you want to buy',
		
	}, {
		type: 'input',
		name: 'amount',
		message: "How much of the item do you want",

	}]).then(function(response) {
		connection.query('SELECT * FROM Products WHERE id = ?', [response.purchase], function(err, res){ 
			if(response.amount > res[0].stock_quantity){
				console.log('Insufficient quantity!');
				inquirer.prompt([{
					name: 'yn',
					message: 'Place a different order?',
					type: 'confirm'
				}]).then(function(response){
					if(response.yn){
						Order();
					}

					else{
						console.log('Come Again!');
					}
				})
			}

			else {
				console.log('Order processed!');
				var cost = res[0].price * response.amount;
				var dep = res[0].department_name;
				console.log('Amount due is ' + cost);

				connection.query('UPDATE products SET ? WHERE ?', [{
					stock_quantity: res[0].stock_quantity - response.amount
				}, {
					id: response.purchase
				}], function(err, res){
					if(err) throw err;
				})
			}

		})
	})
}

dispProduct();
Order();






