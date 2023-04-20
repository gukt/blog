import useDatabase from '~~/composables/useDatabase'

export default defineEventHandler(async (event) => {
  const { connection } = useDatabase()
  connection.connect()

  return await new Promise((resolve, reject) => {
    const query = connection.query(
      'SELECT 1 + 1 AS solution',
      function (error: any, results: any, fields: any) {
        if (error) reject(error)
        console.log('The solution is: ', results[0].solution)
        resolve(results[0].solution)
      }
    )
    connection.end()
    console.log('connection ended!')
  })
})
