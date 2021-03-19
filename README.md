<h1 align="center">Navedex Api (EM DESENVOLVIMENTO)</h1>
<p align="center"> Sistema desenvolvido para o teste proposto pela empresa <a href="https://github.com/naveteam">Nave</a>.</p>


<h3>💻 Sobre o projeto</h3>
<p> O banco de dados possui 3 tabelas: usuarios, navers e projetos.</p>
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
 
 # Crie uma pasta
 $ mkdir navedexAPI_nodejs
 # Entre na pasta e clone o repositorio
 $ cd navedexAPI_nodejs
 $ git clone git@github.com:lucasdmarten/navedexAPI_nodejs.git
 # Entre na pasta do projeto
 $ cd navedexAPI_nodejs
 # Instale todas as bibliotecas
 $ npm install --save-dev nodemon
 $ npm install express mongoose dotenv bcryptjs cookie-parser jsonwebtoken
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
 # http://localhost:4000/api/register/

 ```
<br>

### Rota para login:
<p>Aqui sera feito login com base no cadastro feito préviamente, e será liberado o token access.</p>

 ```bash
 #http://localhost:4000/api/login/

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
 http://localhost:4000/api/navers/create

 ```

 ### (INDEX) - Rota para mostrar o naver criado pelo usuario autenticado:
 ```bash
 # O usuario poderá criar apenas um naver, e um naver está relacionado a n projetos
 http://localhost:4000/api/navers/
 ```
 ### (SHOW) - Rota para mostrar o naver e os projetos que ele participa:
 ```bash
 # O usuario poderá criar apenas um naver, e um naver está relacionado a n projetos
 http://localhost:4000/api/navers/show/:id

 ```
 
 ### (UPDATE) - Rota para alterar o naver do usuario autenticado:
 Requer o field id_projeto e id_naver na body
 ```bash
 # PUT - Alterar naver vinculado ao usuario autenticado
 http://localhost:4000/api/naver/update/:id
 ```

### (DELETE) - Rota para deletar o naver do usuario autenticado:
Requer id do naver a ser deletado
 ```bash
 # DELETE - Deletar seu próprio naver vinculado ao usuario autenticado
 http://localhost:4000/api/delete_naver/
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
 #
 http://localhost:4000/api/projetos/create
 ```

  ```bash
#
 http://localhost:4000/api/projetos/add_naver/:name_projeto
 ```

 ### (INDEX) - Rota para listar todos os projetos:
 ```bash
 # GET - Listar projetos criados pelo usuario
 http://localhost:4000/api/projetos/update/:name_projeto

 ```
 
 ### (UPDATE) - Rota para alterar apenas os projetos do usuario autenticado:
 ```bash
 # PUT - Alterar projeto vinculado ao usuario autenticado
 http://localhost:4000/auth/update_projeto/<id_projeto>
 ```

### (DELETE) - Rota para alterar o projetos do usuario autenticado:
 ```bash
 # PUT - Alterar naver vinculado ao usuario autenticado
 http://localhost:4000/auth/delete_projeto/<int_projeto>

$ curl --location --request DELETE 'http://localhost:4000/auth/delete_projeto/<id_projeto>' \
--header 'Cookie: acess-token=   substituirTOKEN   ; acess-token-id= substituirID'
 ```

<br>

 <h2> Dificuldades:</h2>
 <h3>EM DESENVOLVIMENTO</h3>
 <!-- <p>Neste projeto fiquei com muita dificuldade em fazer a relação correta entre Naver e Projeto. Usei o model User do próprio Django mas customizado com email obrigatório. A partir deste model foi criado o objeto Projeto que possui relação ManyToMany com o MyUser, ou seja, um usuario pode participar de N projetos e cada projeto possui relação com N usuarios. Posteriormente foi criado o objeto Naver que está relacionado com usuario a partir do campo OneToOneField, e também projetos a partir do campo ManyToManyField, assim um naver está ligado a apenas UM usuario e o naver pode estar ligado com varios projetos.</p>
 <p>Problema: Não consigo relacionar um Naver a um Projeto e nem o Projeto ao Naver a partir do método POST, só na pagina de admin do Django. Acredito que seja problema na serialização dos models.</p> -->
 