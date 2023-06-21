interface Server {
    status: 'production' | 'development' | 'testing'
}
const server: Server = {
    status: 'development'
}
let domain = ''

domain = (server.status === 'production') ? 'https://whateverdomain' : 'http://localhost:8000/api'

export default domain