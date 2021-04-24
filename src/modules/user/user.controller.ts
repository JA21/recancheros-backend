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

  // @Get('/:id')
  // public async findOneUser(@Param('id') id: number) {
  //   const res = await this.findService.oneUser(id);
  //   return res;
  // }

  // @Get('/:name')
  // public async findOneUserName(@Param('name') name: string) {
  //   const res = await this.findService.oneUserName(name);
  //   return res;
  // }

  @Get('/usersall')
  public async userInnerJoin() {
    console.log("enviand");
    const res = await this.findService.rolinnerJoin();
    return res;
  }

  @Get('findUserNameId/:name/:id')
  public async findOneUserNameId(@Param('name') name: string, @Param('id') id: number) {
    const res = await this.findService.oneUserNameId(name, id);
    return res;
  }

  @Get('/userInnerLeft')
  public async userInneJoinLeft() {
    return await this.findService.userInneJoinLeft();
  }

  @Get('/innerUserRol')
  public async UserInnerTypeDocumentRol() {
    const res = await this.findService.UserInnerTypeDocumentRol();
    return res;
  }

  @Get('/relationsUserOneToMany')
  public async AllRelationsUserOneToMany() {
    const res = await this.findService.AllRelationsUserOneToMany();
    return res;
  }

  @Get('/userDiferentName')
  public async userDiferentName(){
    const res = await this.findService.userDiferentName();
    return res;
  }

  @Get('/documentType')
  public async documentType(){
    const res = await this.findService.documentType();
    return res;
  }

  @Post('/create')
  // @UsePipes(new ValidationPipe({ transform: true }))
  public async createUser(@Body() createUserDto: CreateUserDto) {
    const res = await this.findService.createUserTransaction(createUserDto);
  }

  @Post('/createUsersql')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async createUsersql(@Body() createUserDto: CreateUserDto) {
    const res = await this.findService.createUser(createUserDto);
    return res
  }


}
