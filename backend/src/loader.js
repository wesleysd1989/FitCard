const server = require('./config/server')//importa a configuracao inicial do server
require('./config/database') //importa a configuracao do banco de dados
require('./config/routes')(server)//importa a configuracao das rotas passando os paremtros do server