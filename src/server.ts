import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (request, response)=>{
  return response.json({message:"hello word"})
})

app.post('/curses', (request, response) => {
  const {name} = request.body
  return response.json({name})
})

app.listen(3333, () => {
  console.log('run server')
})