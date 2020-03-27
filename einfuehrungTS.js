var PersonTS = /** @class */ (function () {
    function PersonTS(firstName, lastName) {
        this.firstName = "";
        this.lastName = "";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonTS.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    PersonTS.prototype.whoAreYou = function () {
        return "Hi, i'm " + this.name();
    };
    return PersonTS;
}());
var michaelTS = new PersonTS("Michael", "Schmitt");
console.log(michaelTS.whoAreYou());
