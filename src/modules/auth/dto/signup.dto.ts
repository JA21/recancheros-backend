import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class SignupDto{

  @IsString()
  @IsNotEmpty()
  @Length(1,65)
  name_user:string;

  @IsString()
  @IsNotEmpty()
  @Length(1,65)
  lastName:string;

  @IsString()
  @Length(1,11)
  tel:string;

  @IsEmail()
  @Length(1,255)
  @IsNotEmpty()
  email:string;

  @IsString()
  @IsNotEmpty()
  @Length(1,65)
  password:string;

}