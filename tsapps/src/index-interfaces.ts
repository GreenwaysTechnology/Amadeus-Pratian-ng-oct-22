interface Fly {
    fly(): string
}
interface onInit {
    init(): void
}
class Airplane implements Fly, onInit {
    fly(): string {
        return "AirPlane"
    }
    init(): void {
        console.log('init')
    }
}

let airPlane = new Airplane()
console.log(airPlane.fly())
airPlane.init()