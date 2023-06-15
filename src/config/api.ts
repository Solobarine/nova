interface Server {
    status: 'production' | 'development' | 'testing'
}
let server: Server = {
    status: 'development'
}
let domain = ''

domain = (server.status === 'production') ? 'https://whateverdomain' : 'http://localhost:8000/api'

export default domain