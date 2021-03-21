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

    # https://www.mongodb.com/
    DB_CONNECT = mongodb+srv://LOGIN:SENHA@cluster0.oy7kt.mongodb.net/NAMEDATABASE?retryWrites=true&w=majority
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
 POST http://localhost:3000/api/register/
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/REGISTER.png?raw=true)

<br>

### Rota para login:
<p>Aqui sera feito login com base no cadastro feito préviamente, e será liberado o token access.</p>

 ```bash
 POST http://localhost:3000/api/user/login/
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/LOGIN.png?raw=true)

 
<br>


# APÓS LOGIN CRIE UM NAVER E ALGUNS PROJETOS!


<br>
<br>
<br>

<h1 align=center>START:</h1>

### Comece criando seu naver!
### (STORE) - Rota para criar navers:
 ```bash
 POST http://localhost:3000/api/navers/create
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/ADD_NAVER.png?raw=true)

### (STORE) - Rota para criar projetos:
 ```bash
 POST http://localhost:3000/api/projects/create
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/ADD_PROJECT.png?raw=true)
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/ADD_PROJECT2.png?raw=true)

### (STORE) - Rota para adicionar naver aos projetos:
 Aqui você pode adicionar participantes do projeto, no caso os navers.
 Escolha o nome do projeto pelo parametro na url e adicione o username do naver na body.
 ```bash
 POST http://localhost:3000/api/projects/add_naver/:name_project
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/NAVER_TO_PROJECT.png?raw=true)


<br>
<br>
<br>

<br>
<h2 align=center> NAVERS:</h2>
<br>


 ### (INDEX) - Rota para mostrar o naver criado pelo usuario autenticado:
 ```bash
  # O usuario poderá criar apenas um naver, e um naver está relacionado a n projetos
  GET  http://localhost:3000/api/navers
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/LIST_NAVERS.png?raw=true)



 ### (SHOW) - Rota para mostrar o naver e os projetos que ele participa:
 ```bash
 # O usuario poderá criar apenas um naver, e um naver está relacionado a n projetos
 GET http://localhost:3000/api/navers/show/:username
 ```
  ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/SHOW_NAVER.png?raw=true)

 
 ### (UPDATE) - Rota para alterar o naver do usuario autenticado:
 Requer o field id_projeto e id_naver na body
 ```bash
 # Alterar naver vinculado ao usuario autenticado
 PUT http://localhost:3000/api/naver/update/
 ```
   ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/SHOW_NAVER.png?raw=true)


### (DELETE) - Rota para deletar o naver do usuario autenticado:
Requer id do naver a ser deletado
 ```bash
 # DELETE - Deletar seu próprio naver vinculado ao usuario autenticado
 http://localhost:3000/api/navers/delete/
 ```


<br>
<br>
<br>


<br>
<h2 align=center> PROJETOS:</h2>
<br>



 ### (INDEX) - Rota para listar todos os projetos:
 ```bash
 #
 GET http://localhost:3000/api/projects/
 ```
![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/LIST_PROJECTS.png?raw=true)



 ### (UPDATE) - Rota para alterar apenas os projetos do usuario autenticado:
 ```bash
 # Alterar nome projeto
 # escolha o nome do projeto a ser alterado pela url, e na body o novo nome
 PUT http://localhost:3000/api/projetos/update/:name_projects
 ```
 ![alt text](https://github.com/lucasdmarten/desafioMongoDB/blob/master/tutorial_inmsonia/UPDATE_PROJECT.png?raw=true)



<br>

 <h2> Dificuldades:</h2>

<li>Mudança do Mysql para mongo DB e trabalhar com um banco de dados noSQL, mas acredito que consegui concluir o objetivo</li>
 