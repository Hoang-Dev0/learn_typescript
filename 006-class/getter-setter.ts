class Hero {
  private _name: string;

  constructor(_name: string) {
    this._name = _name;
  }

  public get name(): string {
    return this._name;
  }
  public;
  public set name(_name: string) {
    this._name = _name;
  }
}

const Thor = new Hero("Thor"); //get _name using getter
Thor.name = "Day la Thor"; // set _name using setter
console.log(Thor.name);
