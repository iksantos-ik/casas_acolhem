import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInputDto } from './DTO/user_input_dto';
import { UserUpdateDto } from './DTO/user_update_dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async listaTodosUsuarios() {
    return await this.userService.listaTodosUsuarios();
  }
  @Get(':id')
  async listaUsuarioPorId(@Param('id') id: string) {
    return await this.userService.listaUsuarioPorId(id);
  }
  @Post()
  async criaUsuario(
    @Body() user: UserInputDto,
  ) {
    return await this.userService.criaUsuario(user);
  }
  @Put(':id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() user: UserUpdateDto,
  ) {
    return await this.userService.atualizaUsuario(user);
  }
  @Delete(':id')
  async excluiUsuario(@Param('id') id: string) {
    return await this.userService.deletaUsuario(id);
  }
}
