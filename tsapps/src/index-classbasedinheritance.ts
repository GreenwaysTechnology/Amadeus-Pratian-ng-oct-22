class Account {
    constructor(){
        console.log('Account class')
    }
    //
    deposit(){
        return 10
    }
}
class SavingsAccount extends Account{
    constructor(){
        super()
        console.log('SavingsAccount class')
    }
    //overriding
    deposit(){
        return 110 * super.deposit()
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())