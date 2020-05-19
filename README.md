
# Recuperação de senha
**Requisitos Funcionais**
- O Usuário deve poder  recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**Requisitos Não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente dev
- Utilizar o Amazon SES (Simple Email Service)  para envios de produção
- O envio de e-mail deve acontecer em segindo plano (background job)


**Regras Negócios**
- O link enviado por e-mail para resetar senha, deve expirar em 2h
- O usuário precisa confirmar nova senha ao resetar sua senha



# Atualização do perfil

**RF**
- O usuário deve poder atualizar seu nome, email e senha

**RN**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado
- Para atualizar sua senha o usário deve informar sua senha antiga
- Para atualizar sua senha, o usuário precisa confirmar a nova senha
# Painel do prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas
**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no MogoDb
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io
**RN**
- A notficação deve ter ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços
**RF**
- O usuário deve poder listar todos os prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador
**RNF**
- A listagem de prestadores devem ser armazandos em cache
-

**RN**
- Cada agendamento deve durar uma hora extamente
- Os agendamentos devem estar disponíveis entre 8h às 18hs (primeiro às 8h, último as 17h)
- O usuário não pode agendar em um horário  já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar serviços consigo mesmo


# Passos para realizar novas rotas
**Começando com as rotas**
- password.routes.ts  (users)
- criar os controllers (ForgotPasswordController e ResetPasswordController) e importar no password.routes.ts
- nas rotas dentro do shared importar a rota password.routes.ts
- dentro de infra, typeorm, repositories criar o UserTokensRepository.ts
- criar a migration do usertoken (yarn typeorm migration:create - n CreateUserTokens)
- registrar providers no container do DI (dependences injection)






- criar um ResetPasswordService





- Os controller possuem 5 metodos (create, read, update, delete, show)




curiosidade para gravar aulas - screenFlow
