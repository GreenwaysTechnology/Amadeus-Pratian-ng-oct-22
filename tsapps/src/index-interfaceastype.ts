//object types
interface Product {
    id: number
    name: string
    qty: number
    price: number
    inStock: "Available" | "NotAvailable"
}

//object literals
let product:Product = {
    id: 1,
    name: 'Phone',
    qty: 100,
    price: 100,
    inStock: 'Available'
}