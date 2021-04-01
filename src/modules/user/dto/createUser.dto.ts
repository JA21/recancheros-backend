import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class CreateUserDto{

  @IsString()
  @IsNotEmpty()
  @Length(10,50)
  name_user:string;
  
  @IsString()
  lastname_user:string;

  @IsString()
  @IsNotEmpty()
  tel:string;
  
  @IsEmail()
  @IsNotEmpty()
  email:string;

  @IsString()
  @IsNotEmpty()
  password:string;

  @IsBoolean()
  state:boolean;

  
}