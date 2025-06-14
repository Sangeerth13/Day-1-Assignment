/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let price = transactions[i].price;
    let index = -1;
    for (let k = 0; k < result.length; k++) {
      if (result[k].category === category) {
        index = k;
        break;
      }
    }
    if (index === -1) {
     
      result.push({ category: category, totalSpent: price });
    } else {
      
      result[index].totalSpent += price;
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
