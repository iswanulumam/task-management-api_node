import { IsString, IsNotEmpty, Length, IsInt, Min } from 'class-validator';

export default class User {
    @IsInt()
    @Min(0)
    public id: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    public username: string;

    @IsString()
    public email: string;
  
    constructor(username: string, email: string, id?: number) {
      this.id = id || 0; // Default to 0 if id is not provided
      this.username = username;
      this.email = email;
    }
}