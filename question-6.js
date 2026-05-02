// Question #6: Calculating Total Price in User's Cart


function filterInStockProducts(products) {
  // เริ่มเขียนโค้ดตรงนี้
 
  let filter = []

  for (let key in products){
   
  if (products[key].quantity > 0){
   
    filter.push(products[key])
  
    }
 
}
 return filter
}
  
// ตัวอย่างการใช้งาน

filterInStockProducts()
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];


console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
