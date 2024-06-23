# Use Node.js 20.12.0 LTS image as base
FROM node:20.12.0

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências do npm
RUN npm install

# Copia o código fonte da aplicação para o diretório de trabalho do contêiner
COPY . .

# Expõe a porta 3000, que é a porta padrão para o Nest.js
EXPOSE 3000

# Comando para executar a aplicação quando o contêiner for iniciado
CMD ["npm", "run", "start:prod"]
