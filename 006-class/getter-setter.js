var Hero = /** @class */ (function () {
    function Hero(_name) {
        this._name = _name;
    }
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
var Thor = new Hero("Thor"); //get _name using getter
Thor.name = "Day la Thor"; // set _name using setter
console.log(Thor.name);
