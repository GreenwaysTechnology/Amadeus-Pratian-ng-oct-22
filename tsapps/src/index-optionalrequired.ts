//object types
type Product = {
    id: number
    name: string
    //? enable optional properties
    qty?: number
    price?: number
    inStock?: "Available" | "NotAvailable"
}

//object literals
let product:Product = {
    id: 1,
    name: 'Phone',
    qty: 100,
    price: 100,
    inStock: 'Available'
}

let newProduct:Product = {
    id: 1,
    name: 'Phone' 
}