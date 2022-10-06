class OrderService {
    constructor() {

    }
    findAll() {
        return 'orders'
    }
}
class OrderComponent {
    constructor(private orderService: OrderService) { }
    findAll() {
        return this.orderService.findAll()
    }
}
//link objects: has a : dependency Injection
let orderCmp = new OrderComponent(new OrderService())
console.log(orderCmp.findAll())
