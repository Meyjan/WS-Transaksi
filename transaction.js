// Transaction class
// Used to define a transaction
class Transaction {
    constructor () {
        this.id = 0
        this.user = 0
        this.film = 0
        this.schedule = 0
        this.virtual_acc = 0
        this.status = "Pending"
    }

    constructor (id, user, film, schedule, chair, virtual_acc) {
        this.id = id
        this.user = user
        this.film = film
        this.schedule = schedule
        this.chair = chair
        this.virtual_acc
    }
}