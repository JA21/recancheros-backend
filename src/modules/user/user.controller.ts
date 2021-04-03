import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { FindService } from './service';

@Controller('user')
export class UserController {

  constructor(private findService: FindService) { }

  @Get()
  public async AllUser() {
    const res = await this.findService.findAll();
    return res;
  }

  @Get('/:id')
  public async findOneUser(@Param('id') id: number) {
    const res = await this.findService.oneUser(id);
    return res;
  }

  @Get('/:name')
  public async findOneUserName(@Param('name') name: string) {
    const res = await this.findService.oneUserName(name);
    return res;
  }

  @Get('usersall')
  public async findUserTypeDocument() {
    const res = await this.findService.typeDocumentUser();
    console.log(res,"enviand");
    return res;
  }

  @Get('findUserNameId/:name/:id')
  public async findOneUserNameId(@Param('name') name: string, @Param('id') id: number) {
    const res = await this.findService.oneUserNameId(name, id);
    return res;
  }

  @Get('/userInnerLeft')
  public async userInneJoinLeft(){
    return await this.findService.userInneJoinLeft();
  }

  @Get('/innerUserRol')
  public async UserInnerTypeDocumentRol(){
    const res = await this.findService.UserInnerTypeDocumentRol();
    return res;
  }

  @Post('/find')
  public async findUser(@Body() dtoCreateUser: CreateUserDto) {
    return await this.findService.finUser(dtoCreateUser);
  }

  @Post('/create')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async createUser(@Body() createUserDto: CreateUserDto) {
    const res = await this.findService.createuser(createUserDto);
    return res.name_user.length > 1 ? {
      message: 'Post user created',
      data: true
    }
      :
      {
        message: 'Error to create Product',
        data: false
      }

  }

  @Post('/createUsersql')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async createUsersql(@Body() createUserDto: CreateUserDto) {
    const res = await this.findService.createUser(createUserDto);
    return res
  }


}
