import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public  registerUser = async ({ name, email, description }) => {
    const userValue = new UserValue({ name, email });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated
  }

  public  getUserById = async (uuid:string) => {
    const user = await this.userRepository.findUserById(uuid)
    return user
  }

  public getUsers = async () => {
    const user = await this.userRepository.listUser()
    return user
  }
}
