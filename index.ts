const url = 'https://fakeapi.net'

let numProduct: number | null


interface Specs {
  color: string;
  weight: string;
  storage: string;
}

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  image: string;
  specs: Specs;
  rating: Rating;
}


async function getProduct(productId: number): Promise<Product> {
	try{
		const res = await fetch(`${url}/products/${productId}`)
		if (!res.ok) throw new Error(`Whoops: ${res.status}`)
		const product = await res.json() as Product
		
		numProduct = productId
		return product
	}
	catch(e) {
		console.error(e)
		throw e
	}
}
getProduct(5).then(product => {
	console.log(`Товар:`, product )
}).catch(e => {
	console.error(e)
	throw e
})

