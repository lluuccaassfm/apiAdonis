'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mssql'),


  mssql: {
    client: 'mssql',
    debug: true,
    connection: {
      type: 'mssql',
      host: Env.get('DB_HOST', 'localhost'), 
      user: Env.get('DB_USER', 'Sa'), 
      password: Env.get('DB_PASSWORD', 'LfMa$725'), 
      database: Env.get('DB_DATABASE', 'adonis'), 
      options: {
        encrypt: Env.get('DB_ENCRYPT', false) 
      }
    }
  }
}
