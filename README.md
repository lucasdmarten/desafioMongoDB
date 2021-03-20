<h1 align="center">Navedex Api</h1>
<p align="center"> Sistema desenvolvido para o teste proposto pela empresa <a href="https://github.com/naveteam">Nave</a>.</p>


<h3>💻 Sobre o projeto</h3>

<p> O banco de dados possui 3 tabelas: usuarios, navers e projetos.</p>
<h3> BANCO DE DADOS:</h3>
<li> MongoDB</li>
<br>
USUARIOS:
<li> podem criar apenas um naver.</li>
<li> podem alterar ou deletar apenas o seu naver e os projetos que estão ligados a ele.</li>
<li> podem visualizar todos navers e seus projetos.??</li>
<br>
NAVERS:
<li> id do usuario é usado para criação do naver.</li>
<li> está vinculado ao usuario pelo id.</li>
<li> podem participar de N projetos.</li>
<br>
PROJETOS:
<li> estão vinculados a um naver.</li>
<br>


<h3>🔨 Tecnologias</h3>  
<p>As seguintes ferramentas foram usadas na construção do projeto:</p>
<ul>
  <li><a href="">NodeJS</a></li>
  <li><a href="">mongoose</a></li>
  <li><a href="">express</a></li>
  <li><a href="">jsonwebtoken</a></li>
  <li><a href="">dotenv</a></li>
  <li><a href="">bcryptjs</a></li>
  <li><a href="">cookie-parser</a></li>
  <li><a href="">@hapi/joi</a></li>

</ul>


<br>
<h2 align=center> Criar arquivo no diretório base chamado .env , este arquivo irá conter as informações do banco de dados.</h2>
<br>


    $ nano ./.env

    DB_CONNECT = mongodb+srv://lucasdmarten:i1i2i3i4@cluster0.oy7kt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    TOKEN_SECRET = ASJDLKASDJ
    JWT_COOKIE_EXPIRES_IN=90

#

 
<br>
<h2 align=center> Como rodar este projeto:</h2>
<br>



 ```bash
 
 # Clonar o repostório
 $ git clone git@github.com:lucasdmarten/desafioMongoDB.git
 # Entre na pasta do projeto
 $ cd desafioMongoDB
 # Instale todas as bibliotecas
 $ npm install --save-dev nodemon
 $ npm install express mongoose dotenv bcryptjs cookie-parser jsonwebtoken @hapi/joi
 # Runserver...
 $ npm start
 ```
<br>
<br>
<br>


<h2 align=center> AUTENTICAÇÃO:</h2>

### Rota para cadastro:
<p>Registro de usuario:</p>

 ```bash
 # POST
 http://localhost:3000/api/register/


 $ curl --location --request POST 'http://localhost:3000/api/user/register/' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE2Mjc2ODgwLCJleHAiOjE2MjQwNTI4ODB9.Etg05msaSnq5XY_sjftTRBZZye8mO7vxfL0yMa-LQ8c; acess-token-id=3' \
--data-raw '{
    "username": "mongoose",
    "email":"mongoose@note.com",
    "password":"123"
}' 

 ```
<br>

### Rota para login:
<p>Aqui sera feito login com base no cadastro feito préviamente, e será liberado o token access.</p>

 ```bash
 # POST
 http://localhost:3000/api/user/login/
 
 Exemplo:
 $ curl --location --request POST 'http://localhost:3000/api/user/login/' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyNzk3NjZ9.ICNOYOYfT5tqEaiBPbXO3J80BDVfvd6vIu6MlO8BKK4; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose' \
--data-raw '{
    "email":"mongoose@note.com",
    "password":"123"
}'
 ```

 
<br>


# APÓS LOGIN CRIE UM NAVER E ALGUNS PROJETOS!


<br>
<br>
<br>


<br>
<h2 align=center> NAVERS:</h2>
<br>


### Comece criando seu naver!
### (STORE) - Rota para criar navers:
 ```bash
 # POST
 http://localhost:3000/api/navers/create

 Exemplo:
 $ curl --location --request POST 'http://localhost:3000/api/navers/create/' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose' \
--data-raw '{
    "fullname":"mongoose",
    "birth_date":"1994-10-27",
    "admission_date":"2020-04-08",
    "job_role":"DB"
}'
 ```

 ### (INDEX) - Rota para mostrar o naver criado pelo usuario autenticado:
 ```bash
 # O usuario poderá criar apenas um naver, e um naver está relacionado a n projetos
  
  # GET
  http://localhost:3000/api/navers
  $ curl --location --request GET 'http://localhost:3000/api/navers' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose'
 ```
 ### (SHOW) - Rota para mostrar o naver e os projetos que ele participa:
 ```bash
 # O usuario poderá criar apenas um naver, e um naver está relacionado a n projetos
 http://localhost:3000/api/navers/show/:id

 $ curl --location --request GET 'http://localhost:3000/api/navers/show/username' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose'

 ```
 
 ### (UPDATE) - Rota para alterar o naver do usuario autenticado:
 Requer o field id_projeto e id_naver na body
 ```bash
 # PUT - Alterar naver vinculado ao usuario autenticado
 http://localhost:3000/api/naver/update/

 $ curl --location --request PUT 'localhost:3000/api/navers/update/' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose' \
--data-raw '{
    "fullname":"mongoose fullname"
}'
 ```

### (DELETE) - Rota para deletar o naver do usuario autenticado:
Requer id do naver a ser deletado
 ```bash
 # DELETE - Deletar seu próprio naver vinculado ao usuario autenticado
 http://localhost:3000/api/navers/delete/

 $ curl --location --request GET 'http://localhost:3000/api/navers/delete/' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose'
 ```


<br>
<br>
<br>


<br>
<h2 align=center> PROJETOS:</h2>
<br>

## Registre os projetos que o seu naver já participou
### (STORE) - Rota para criar projetos:
 
 ```bash
 # POST
 http://localhost:3000/api/projetos/create

 $ curl --location --request POST 'http://localhost:3000/api/projetos/create' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose' \
--data-raw '{
    "name_projeto":"cantina"
}'
 ```

Aqui você pode adicionar participantes do projeto, no caso os navers.
Escolha o nome do projeto pelo parametro na url e adicione o username do naver na body.
  ```bash
# PUT
 http://localhost:3000/api/projetos/add_naver/:name_projeto

 $ curl --location --request PUT 'http://localhost:3000/api/projetos/add_naver/cantina' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose' \
--data-raw '{
    "username_navers":["mongoose","username"]
}'
 ```

 ### (INDEX) - Rota para listar todos os projetos:
 ```bash
 # GET 
 http://localhost:3000/api/projetos/

 $ curl --location --request GET 'http://localhost:3000/api/projetos' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose'
 ```
 
 ### (UPDATE) - Rota para alterar apenas os projetos do usuario autenticado:
 ```bash
 # PUT - Alterar nome projeto
 # escolha o nome do projeto a ser alterado pela url, e na body o novo nome
 http://localhost:3000/api/projetos/update/:name_projeto  

 $ curl --location --request PUT 'localhost:3000/api/projetos/update/cantina' \
--header 'Content-Type: application/json' \
--header 'Cookie: acess-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2Nzg1MmI5NmE4NTEyY2NhNzI1MTAiLCJpYXQiOjE2MTYyODAyNTR9.CRkeJJ2cX6P9OU6O129W1P50_Jstip6hPyv25h9mWLY; acess-token-id=j%3A%2260567852b96a8512cca72510%22; acess-token-username=mongoose' \
--data-raw '{
    "name_projeto":"mongoose projeto"
}'
 ```


<br>

 <h2> Dificuldades:</h2>

<li>Mudança do Mysql para mongo DB e trabalhar com um banco de dados noSQL, mas acredito que consegui concluir o objetivo</li>
 