// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(cart,key) {
  // เริ่มเขียนโค้ดตรงนี้

  let result = 0

 for (let key in  cart){
  
 result += (cart[key]).price * (cart[key]).quantity
  

}
return result
}
// ตัวอย่างการใช้งาน
calculateTotalPrice()

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
