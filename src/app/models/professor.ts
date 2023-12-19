export class Professor {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  image?:string;
  grade ?:string;


  constructor(id?: number, username?: string, password?: string, firstName?: string,image?:string,grade?:string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.image=image;
    this.grade=grade;
  }


}
