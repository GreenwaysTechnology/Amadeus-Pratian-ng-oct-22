class OrderService {
    constructor() {

    }
    findAll() {
        return 'orders'
    }
}
class OrderComponent {
    private orderService: OrderService
    constructor(orderService: OrderService) {
        this.orderService = orderService
    }
    findAll() {
        return this.orderService.findAll()
    }
}
//link objects: has a : dependency Injection
let orderCmp = new OrderComponent(new OrderService())
console.log(orderCmp.findAll())
