export class Contact {

  public name: string;
  public description: string;
  public id: number;
  public email: string;

  constructor(name: string, desc: string, id: number, email: string) {
    this.name = name;
    this.description = desc;
    this.id = id;
    this.email = email;
  }

}