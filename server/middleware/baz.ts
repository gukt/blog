export default defineEventHandler((event) => {
  console.log('New request xxx: ' + event.node.req.url)
})
