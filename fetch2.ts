const url = 'https://fakeapi.net'

let numUsers: number | null 

interface Name {
	firstname: string
	lastname: string
}

interface Phone {
	phone: string
	orders: number[]
}

interface Adress {
	street: string
	city: string
	zipcode: string
	country: string
}

interface User {
	id: number
	email: string
	username: string
	name: Name
	adresses: Adress
	phone: Phone
}


function getUserData(dataId: number): Promise<User> {
	return fetch(`${url}/users/${dataId}`)
	.then(response => response.json())

	.then(dataId => {
		console.log(dataId)
		numUsers = dataId
		return dataId
	})

	.catch(e => {
		console.log(e)
	})
}


getUserData(4)

	
