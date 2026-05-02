// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity= 200
console.log(inventory.apple)
inventory.orange= {}
inventory.orange.price = 20
inventory.orange.quantity=300
console.log(inventory.orange)

let total = 0

for (let key in inventory ){
 //let a =  inventory[key]
 //total += a.price * a.quantity
 //console.log(a)
 
total += (inventory[key]).price * (inventory[key]).quantity



}

console.log(inventory)
console.log(total)
console.log(`Total inventory value: ${total}  baht`)




