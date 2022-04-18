enum state {
  Create = "create",
  Processing = "processing",
  Finish = "finish",
}

class CongViec {
  id: number;
  ten: string;
  trangthai: state;

  constructor(id: number, ten: string, trangthai: state) {
    this.id = id;
    this.ten = ten;
    this.trangthai = trangthai;
  }

  showInfo(): string {
    return `${this.id}, ${this.ten}, ${this.trangthai}`;
  }
}

const cv1 = new CongViec(1, "Da banh", state.Create);
console.debug(cv1);

class Code extends CongViec {
  bug: string;

  constructor(id: number, ten: string, trangthai: state, bug: string) {
    super(id, ten, trangthai);
    this.bug = bug;
  }

  showInfo(): string {
    return `${this.id}, ${this.ten}, ${this.trangthai} , ${this.bug}`;
  }
}

// const code1 = new Code(4, "codingggg", state.Processing, "has");
// console.log(code1.showInfo());
