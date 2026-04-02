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

 function getProduct(productId: number): Promise<Product> {
	return fetch(`${url}/products/${productId}`)
  .then(response => response.json())

  .then(productId => {
    console.log(productId)
    numProduct = productId
    return productId
  })
  .catch(e => {
    console.log(e)
    throw e
  })
}
getProduct(5)



