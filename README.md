## FitCard Test

# Pre Requisitos
nodeJS: ">=8.11.2"  
NPM  
MongoDB instalado localmente ou use [mlab](https://mlab.com/) eles possuem um serviço gratuito   

# Principais tecnologias utilizadas
ReactJs,  
Redux,  
MongoDB,  
Bootstrap,  
NodeJs  

# Instalando Dependências

**Backend** Roda na porta 3003:  
navegue até a pasta backend via CMD ou Terminal e escreva o comando abaixo  
```
npm install
```
**FrontEnd** Roda na porta 3000:  
navegue até a pasta frontend via CMD ou Terminal e escreva o comando abaixo  
```
npm install
```

# Configurando Banckend 

Por favor renomeie o arquivo exemple.env para .env   
altere o conteudo do arquivo com a string do seu banco de dados MongoDB  
```
module.exports = {
    stringDB: 'mongodb://localhost/teste'
}
```
exemplo com credenciais  
```
module.exports = {
    stringDB: 'mongodb://usuario:senha123@yourserver.mlab.com/fitcard'
}
```
# Configurando Frontend 

altere o conteudo do arquivo FitCard/frontend/src/consts.js com o endereço do seu backend   
```
export default {
    API_URL: 'http://localhost:3003/api',
  }
```  
# Iniciando sistema  
**Backend**:  
navegue até a pasta backend via CMD ou Terminal e escreva o comando abaixo  
```
npm run dev
```
**FrontEnd**:  
navegue até a pasta frontend via CMD ou Terminal e escreva o comando abaixo  
```
npm start
```

# Deploy em servidor web para demonstração
**Heroku**  
https://fitcard-f.herokuapp.com/#/  
OBS: a aplicação pode demonstrar lentidão no primeiro acesso ou erro, por favor insistir 1 minuto ate serviço normalizar, devido a aplicação esta no modo gratuito.  
