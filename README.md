## FitCard Test

# Pre Requisitos
nodeJS: ">=8.11.2"  
NPM  
MongoDB instalado localmente ou use [mlab](https://mlab.com/) eles possuem um serviço gratuito   

# Instalando Dependencias

**Backend** Roda na porta 3003:  
navegue ate a pasta backend via CMD ou Terminal e escreva o comando abaixo  
```
npm install
```
**FrontEnd** Roda na porta 3000:  
navegue ate a pasta frontend via CMD ou Terminal e escreva o comando abaixo  
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

# Iniciando sistema  
**Backend**:  
navegue ate a pasta backend via CMD ou Terminal e escreva o comando abaixo  
```
npm run dev
```
**FrontEnd**:  
navegue ate a pasta frontend via CMD ou Terminal e escreva o comando abaixo  
```
npm start
```

