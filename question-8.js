// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserFromServer = async () => {

  const response = await fetch ("https://jsonplaceholder.typicode.com/users ")
  const user = await response.json()


 let newUser = []
for (let key in user){

newUser.push(user[key].name)
}

console.log(newUser)
}

getUserFromServer()

