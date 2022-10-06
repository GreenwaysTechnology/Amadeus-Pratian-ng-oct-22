//class based inheritance:
//extends,super,this - keyword
//extends - two connect two classes
//super - to access parent class constructor and methods
//this - to access current class members

class Account {
    constructor() {
        console.log('Account class')
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount class')
    }
}
let sb = new SavingsAccount()