class nhan_vat_game {
  ten_nhan_vat: string;
  slogan: string;
  mau: number;

  constructor(ten_nhan_vat: string, slogan: string, mau: number) {
    this.ten_nhan_vat = ten_nhan_vat;
    this.slogan = slogan;
    this.mau = mau;
  }

  chay() {}
  chem() {}
  showProperty() {
    return `${this.ten_nhan_vat}, ${this.slogan}`;
  }
}

const nhanvat1 = new nhan_vat_game("fiora", "y chi cua kiem", 321);