## Sobre

Neste repositório contém um projeto de uma ferramenta To-do list básica composta pelo CRUD e adicionada possibilidade de notificações quanto aos estados das tarefas (VENCIDO ou NÃO-VENCIDO). As tarefas podem ter data de prazo para auxiliar na verificação quanto ao estado. O projeto foi desenvolvido com **React.JS** no frontend juntamente com o **Spring** no backend.

## Requisitos

- Yarn
- Java
- Docker (_opcional_)
- Docker Compose (_opcional_)

## Como instalar e executar

Inicialmente, faça clonagem do repositório para a máquina local.
```
$ git clone git@github.com:Samuellucas97/To-Do-List.git
```

### Frontend

Execute os seguintes comandos:

```
$ cd frontend
$ yarn install
$ yarn start
```
Com isso, a aplicação frontend executada na porta 3000. E será aberto o navegador em [http://localhost:3000](http://localhost:3000).

### Backend

O banco de dados adotado é o **MySQL**. Porém o serviço do banco de dados será feito através de um container Docker.

```
$ cd backend-todolist
$ docker-compose up -d
```

Em seguida, execute o seguinte comando:

```
$ mvn clean spring-boot:run 
```

Com isso, a aplicação backend será executada na porta 8080.
