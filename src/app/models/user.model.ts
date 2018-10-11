export class User
{
  public id: number;
  public email: string ;
  public password: string;

  constructor( id?, email?, password?) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
