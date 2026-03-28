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


async function getUserData(dataId: number): Promise<User> {
	try {
		const res = await fetch(`${url}/users/${dataId}`)
		if (!res.ok) throw new Error(`Whoops: ${res.status}`)
		const user = await res.json() as User
		
		numUsers = dataId
		return user
	}
	catch(e) {
		console.error(e)
		throw e
	}
}

getUserData(2).then(user => {
	console.log('Вот эта пешка еббная:', user)
}).catch(e => {
	console.error(e)
	throw e	
})