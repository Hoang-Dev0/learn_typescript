var nhan_vat_game = /** @class */ (function () {
    function nhan_vat_game(ten_nhan_vat, slogan, mau) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    nhan_vat_game.prototype.chay = function () { };
    nhan_vat_game.prototype.chem = function () { };
    nhan_vat_game.prototype.showProperty = function () {
        return "".concat(this.ten_nhan_vat, ", ").concat(this.slogan);
    };
    return nhan_vat_game;
}());
var nhanvat1 = new nhan_vat_game("fiora", "y chi cua kiem", 321);
