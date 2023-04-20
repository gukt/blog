import { createConnection } from 'mysql'

// https://github.com/mysqljs/mysql
export default function useDatabase() {

  console.log('process.env', process.env)

  const connection = createConnection({
    host: 'codedog996.com',
    port: 13306,
    user: 'root',
    password: '1234+aaaa',
    database: 'testdb',
  })

  console.log('useDatabase', connection)

  function connect() {
    connection.connect()
    return connection
  }

  return {
    connection,
    connect,
  }
}
