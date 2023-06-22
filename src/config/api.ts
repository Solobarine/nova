interface Server {
    status: 'production' | 'development' | 'testing'
}
const server: Server = {
    status: 'production'
}
let domain = ''

domain = (server.status === 'production') ? 'https://nova-solly.fly.dev/api' : 'http://localhost:8000/api'

export default domain