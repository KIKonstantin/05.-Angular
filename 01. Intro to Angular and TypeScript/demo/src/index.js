var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.username, " says hi!");
    };
    return User;
}());
var user = new User('Pesho');
console.log(user.sayHello());
