import { IsBoolean, IsBooleanString, IsEmail, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";
import { State } from "src/entities/enums";


export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @Length(1, 200, {
    message: 'Name user is to loong'
  })
  name_user: string;

  @IsString()
  lastname_user: string;

  @IsString()
  @IsNotEmpty({ message: 'Tel is obligatore' })
  tel: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is obligatore' })
  @Length(1, 255, { message: 'Email is to loong' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is obligatore' })
  @Length(1, 255, { message: 'Passwor is to loong' })
  password: string;

  // @IsBooleanString()
  // state:State;

  @IsString()
  rol_id:number;

  @IsString()
  type_document_id: number;
}