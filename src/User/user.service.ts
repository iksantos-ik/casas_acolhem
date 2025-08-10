import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserInputDto } from './DTO/user_input_dto';
import { UserUpdateDto } from './DTO/user_update_dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {

  }

  async criaUsuario(
    User: UserInputDto, 
  ) {
    return await this.userRepository.createUser(User);

  }
  async listaTodosUsuarios() {
    return await this.userRepository.getUsers();
  }
  async listaUsuarioPorId(id: string) {
    return await this.userRepository.getUserById(id);
  }
  async deletaUsuario(id: string) {
    return await this.userRepository.deleteUser(id);
  }



  async atualizaUsuario(
    id: string,
    User: UserUpdateDto, 
  ) {
    return await this.userRepository.updateUser(id, User);
  }
  
}

