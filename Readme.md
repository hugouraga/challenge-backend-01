anotações

Entities:
  - usuários comuns:
    - Nome completo 
    - CPF
    - Email
    - Senha
  - usuários lojistas:
    - Nome Fantasia 
    - CNPJ
    - Email
    - Senha

Use Cases:
  Usuários comuns:
    - Enviam dinheiro para lojistas
    - Enviam dinheiro para usuários
  Usuários lojistas:
    - Recebem transferência

Domain service:
  - Validar se o usuário tem saldo antes de realizar a transferência

Gateway: 
  - Antes de finalizar a transferência, deve-se consultar um serviço autorizador externo, use este mock para simular (https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc).
  
A operação de transferência deve ser uma transação (ou seja, revertida em qualquer caso de inconsistência) e o dinheiro deve voltar para a carteira do usuário que envia.
No recebimento de pagamento, o usuário ou lojista precisa receber notificação (envio de email, sms) enviada por um serviço de terceiro e eventualmente este serviço pode estar indisponível/instável. Use este mock para simular o envio (https://run.mocky.io/v3/54dc2cf1-3add-45b5-b5a9-6bf7e7f1f4a6).

Este serviço deve ser RESTFul.
  