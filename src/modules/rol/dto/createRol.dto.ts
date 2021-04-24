import { IsBooleanString, IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { Rol } from "src/entities/enums";


export class CreateRolDto{
 

  @IsString()
  
  description:string;
}