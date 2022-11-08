class User {
    private username: string;
    constructor(username: string) {
        this.username = username;
    }

    sayHello() {
        return `${this.username} says hi!`;
    }
}

const user = new User('Pesho');
console.log(user.sayHello());