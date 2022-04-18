var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var state;
(function (state) {
    state["Create"] = "create";
    state["Processing"] = "processing";
    state["Finish"] = "finish";
})(state || (state = {}));
var CongViec = /** @class */ (function () {
    function CongViec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    CongViec.prototype.showInfo = function () {
        return "".concat(this.id, ", ").concat(this.ten, ", ").concat(this.trangthai);
    };
    return CongViec;
}());
var cv1 = new CongViec(1, "Da banh", state.Create);
console.debug(cv1);
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code(id, ten, trangthai, bug) {
        var _this = _super.call(this, id, ten, trangthai) || this;
        _this.bug = bug;
        return _this;
    }
    Code.prototype.showInfo = function () {
        return "".concat(this.id, ", ").concat(this.ten, ", ").concat(this.trangthai, " , ").concat(this.bug);
    };
    return Code;
}(CongViec));
// const code1 = new Code(4, "codingggg", state.Processing, "has");
// console.log(code1.showInfo());
