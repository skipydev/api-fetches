const url = 'https://fakeapi.net'

interface Products { 
	prodoctId: number
	quantity: number
}

interface Pagination {
	page: number
	limit: number
	total: number
}

interface Orders {
	id: number
	userId: number
	products: Products
	totalAmount: number
	status: string
	orderDate: string
	deliveryDate: string
	pagination: Pagination
}

async function getOrders(orderId: number): Promise<Orders> {
	try {
		const res = await fetch(`${url}/orders/${orderId}`)
		if (!res.ok) throw new Error(`${res.status}`)
		const id = await res.json() as Orders

		console.log(id)
		return id
		}
		catch(e) {
			console.log(e)
			throw e
		}
}

getOrders(1)