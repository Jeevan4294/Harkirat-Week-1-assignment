/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  newArr = []
  for(var nTrans=0; nTrans < transactions.length; nTrans++){
    var itemPriceAdded = false;
    var item = transactions[nTrans];
    if( item.price != 0){
      for(var nCat = 0; nCat < newArr.length ; nCat++){
        if(newArr[nCat].category === item.category){
          var updatedPrice = newArr[nCat].totalSpent + item.price;
          var cat = item.category;
          var updatedObj = { category : cat, totalSpent : updatedPrice}
          newArr[nCat] = updatedObj;
          itemPriceAdded = true;
          continue;
        }
      }
      if (itemPriceAdded) {
        continue;
      }
      var cat = item.category;
      var updatedObj = { category : cat , totalSpent : item.price}
      newArr.push(updatedObj);
    }
  }
  return newArr;
}

module.exports = calculateTotalSpentByCategory;
