import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { getAllPolls } from './routes/get-all-polls'
import { pollResults } from './ws/poll-results'
import cors from '@fastify/cors'



const app = fastify()

app.register(cors, {
    origin: true
})

app.register(cookie, {
    secret: "polls-app-nlw-lrc",
    hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(getAllPolls)

app.register(pollResults)


app.listen({port: 3333}).then(()=> {
    console.log('HTTP server running!')
})