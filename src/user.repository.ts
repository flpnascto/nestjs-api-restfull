export default class UserRepository {
  private users = [];
  async save(user: any) {
    this.users.push(user);
    console.log(this.users);
  }

  async findAll() {
    return this.users;
  }
}
