'use strict'

const User = use("App/Models/User")

class UserController {

  async getAll () {
    const users = await User.query()
      .with('tweets')
      .fetch();

    return users;
  }

}

module.exports = UserController
