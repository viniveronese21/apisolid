# App

## RFs (Requisitos funcionais)

- [] Deve ser possivel se cadastrar;
- [] Deve ser possivel se autenticar;
- [] Deve ser possivel obter o perfil de um usuario logado;
- [] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [] Deve ser possivel o usuario buscar academias proximas;
- [] Deve ser possivel o usuario buscar academias pelo nome;
- [] Deve ser possivel o usuario ralizar check-in em uma academia;
- [] Deve ser possivel validar o check-in de um usuario ;
- [] deve ser possivel cadastrar uma academia;

## RNs (Regras de negocio)

- [] o usuario nao pode se cadastrar com um email duplicado;
- [] o usuario nao pode fazer dois check-ins no mesmo dia;
- [] o usuario nao pode fazer check-in se nao estiver perto
  (100m) da academia;
- [] o check-in so pode ser validado ate 20 min apos criado;
- [] o chck-in so pode ser validado por administradores;
- [] A academia so pode ser cadastrada por adminsitradores;

## RNFs (Requisitos nao-funcionais)

- [] A senha do usuario precisa estar criptografada;
- [] Os dados da aplicacao devem estar percistidos no banco em um banco PostgreSQL
- [] Todas as listas de dados precisam estar paginados com 20 itens por pagina;
- [] O usuario deve ser identificado por um JWT (JSON Wbe Token);
