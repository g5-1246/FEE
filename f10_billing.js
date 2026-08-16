console.clear();

const prompt = require("prompt-sync")();
const store="Happy Mart";

console.log(store);
// let item1="Mobile";
// let item2="Shoes";
// inventory

let items=["item1","item2","item3"];
let prices=[2000,5000,3000];

console.log(items);
console.log(items.length);

items.push("item4","item5");// add the last elements
console.log(items);
console.log(items.length);

prices.push(3000,3500);
console.log(prices);
console.log(prices.length);

// items.pop(); //remove the last elements
// console.log(items);
// console.log(items.length);
// customer oriented billing


console.log("Billing System");
console.log();
console.log("SrNo.\t","Item\t","Price");
for(let i = 0; i<items.length;i++)
{
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}


console.log();
let srno = Number(prompt("Enter Item No : "));
let quantity = Number(prompt("Enter Quantity : "));

// billing 
let price = prices[srno-1];
let cost= price*quantity;
let discount = 0;
if(cost>=5000){
    discount = cost*0.05;
}
else if(cost>=2000){
    discount = cost *0.02;
}
else{
    discount = cost * 0.01;
}
console.log("Your Discount is : ",discount)
console.log("Your Bill Amount is : ",cost-discount);
console.log();