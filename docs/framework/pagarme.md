<page>
  <title>Introdução</title>
  <url>https://docs.pagar.me/reference/introdução-1</url>
  <content>Bem vindo a API Reference da Pagar.me !

  
A API Pagar.me foi desenvolvida de acordo com os melhores padrões [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer).

As operações são feitas por requisições aos _endpoints_, de acordo com os verbos HTTP, com corpos de mensagem em [JSON](http://www.json.org/). As respostas podem ser interpretadas através do código de status HTTP. Isso permite que quaisquer aplicações consumam a API de forma simples e clara, independente da linguagem utilizada.

Para facilitar ainda mais a integração, fornecemos SDKs em todas as principais linguagens de programação. [Saiba mais sobre as nossas SDKs](https://docs.pagar.me/docs/bibliotecas-1).

Também oferecemos uma chave de testes na API para que a integração seja feita com testes a vontade, sem se preocupar com cobranças reais nos cartões de crédito utilizados.</content>
</page>

<page>
  <title>Pagar.me</title>
  <url>https://docs.pagar.me/</url>
  <content>Bem-vindo à documentação Pagar.me
---------------------------------

Aqui você vai encontrar guias e exemplos para te ajudar  
a integrar com a melhor API de Pagamentos do Brasil!
--------------------------------------------------------------------------------------------------------------

[Começar](https://docs.pagar.me/docs/overview-principal "Começar")

Você também pode buscar ou navegar pelas categorias</content>
</page>

<page>
  <title>Introdução</title>
  <url>https://docs.pagar.me/reference</url>
  <content>Bem vindo a API Reference da Pagar.me !

  
A API Pagar.me foi desenvolvida de acordo com os melhores padrões [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer).

As operações são feitas por requisições aos _endpoints_, de acordo com os verbos HTTP, com corpos de mensagem em [JSON](http://www.json.org/). As respostas podem ser interpretadas através do código de status HTTP. Isso permite que quaisquer aplicações consumam a API de forma simples e clara, independente da linguagem utilizada.

Para facilitar ainda mais a integração, fornecemos SDKs em todas as principais linguagens de programação. [Saiba mais sobre as nossas SDKs](https://docs.pagar.me/docs/bibliotecas-1).

Também oferecemos uma chave de testes na API para que a integração seja feita com testes a vontade, sem se preocupar com cobranças reais nos cartões de crédito utilizados.</content>
</page>

<page>
  <title>IP Allowlist</title>
  <url>https://docs.pagar.me/reference/ip-allowlist-1</url>
  <content>É possível configurar uma lista de endereços de IP que terão permissão para acessar o sistema Pagar.me utilizando a nossa funcionalidade de **IP Allowlist**.

Ao cadastrar os seus IPs, outros endereços serão bloqueados assim aumentando a segurança de sua integração, permitindo apenas conexões de fontes confiáveis.

> 📘
> 
> Formatos aceitos
> 
> 
> ----------------------
> 
> IPs: _xxx.xxx.xxx.xxx;_
> 
> Intervalo de IPs (suporta formatos IPv4 e IPv6):
> 
> *   xxx.xxx.x.x
> *   xxx.xxx.x.x/xx
> *   192.168.0.10 - 192.168.10.20
> *   2001:db8:3333:4444:5555:6666:7777:8888
> *   fe80::/10

Para cadastrar a IP Allowlist, é só seguir o passo a passo em nosso [Guides - IP Allowlist](https://docs.pagar.me/docs/ip-allowlist)</content>
</page>

<page>
  <title>Segurança</title>
  <url>https://docs.pagar.me/reference/seguran%C3%A7a-1</url>
  <content>Normas PCI Compliance

  
Para manter a segurança na troca de mensagens é necessário que nossos servidores sejam liberados no seu ambiente. Recomendamos fortemente que você libere o domínio: **api.pagar.me**. Caso não seja possível a liberação do domínio, segue abaixo a lista de IP's que devem ser liberados:

> 🚧
> 
> IPs
> 
> 
> ---------
> 
> 52.186.34.80/28  
> 104.45.183.192/28  
> 52.186.34.84

Além disso, por sermos uma empresa com certficado _PCI Compliance_ precisamos manter a segurança na troca de informações com a nossa API. Seguem as configurações aceitas:

> 🚧
> 
> Protocolos aceitos
> 
> 
> ------------------------
> 
> TLS 1.2  
> TLS 1.3 (O Pagar.me recomenda fortemente a utilização deste protocolo)

> 🚧
> 
> Hashs Codes
> 
> 
> -----------------
> 
> SHA256  
> SHA384  
> SHA512

> 🚧
> 
> Cipher Suites
> 
> 
> -------------------
> 
> Com criptografia igual ou superior a 128 bits.

> 📘
> 
> Certificados Digitais SSL
> 
> 
> -------------------------------
> 
> O Pagar.me faz uso de uma tecnologia que provisiona de forma automática os certificados digitais das aplicações dos seus domínios.
> 
> Esses certificados tem validade de **90 dias** e por isso, recomendamos sempre aos clientes, o envio das transações para o nome (FQDN) dos endpoints das nossas APIs.
> 
> **Não é recomendado o pinning de certificado, com a chave pública.**</content>
</page>

<page>
  <title>Bem-vindo ao Pagar.me!</title>
  <url>https://docs.pagar.me/docs</url>
  <content>Aqui, você transaciona de forma rápida, simples e segura.

Pensamos em cada passo para que você tenha uma experiência única e consiga transacionar com poucas linhas de código.

Nesta documentação você pode explorar todos os produtos e funcionalidades que a nossa API oferece e adaptá-los ao seu sistema, seja ele no browser, mobile ou sistema interno.

Seja bem-vindo à documentação dos produtos de tecnologia do Pagar.me!

O Pagar.me é uma empresa de tecnologia especializada em meios de pagamentos, que oferece uma solução única para alavancar e escalar negócios. Nós atuamos com foco no aumento de conversão e gestão de recebíveis, e oferecemos a melhor experiência para você e para a sua empresa.

Nós começamos como um Gateway de pagamentos e, hoje, além de oferecer esse serviço, oferecemos também um produto conhecido como Provedor de Serviços de Pagamento (PSP), que une as vantagens de um Gateway com as de um intermediador, garantindo uma conversão maior que a do restante do mercado.

Aqui você encontra guias e referências sobre como usar a nossa infraestrutura de pagamentos, as nossas bibliotecas e os nossos componentes para destravar o seu potencial financeiro.

Oferecemos diversos meios de pagamento como cartão de crédito, cartão de débito, vouchers, boleto, pix e transferencias entre contas. Tudo estruturado em um sistema de pedidos, cobranças e transações para dar uma visibilidade completa dos pagamentos que processamos. Além disso contamos com sistemas de retentativa e cancelamento garantido para lhe proporcionar mais segurança

Oferecemos um motor de recorrência completo, com diversas maneiras de precificar seus produtos permitindo cobranças pré-pagas, pós-pagas, adição de itens, entre outras funcionalidades

O tokenizecard.js é um JavaScript você pode incluir na sua página de checkout transparente. O nosso JavaScript captura os dados do cartão, manda direto para a nossa API e a nossa API devolve um token deste cartão aumentando a segurança e facilitando a integração.

O Checkout Pagar.me é uma página desenvolvida por nós e hospedada em nossos servidores, que oferece um checkout personalizado para ficar com a cara do seu e-commerce. Você pode inserir seu logo e alterar as cores, deste modo seu cliente se sente no ambiente da sua loja.

A nova API possibilita a construção e o gerenciamento de uma Carteira de Clientes. Sempre que um novo cliente é criado, o mesmo vai diretamente para a sua carteira. Sua coleção será alimentada automaticamente sempre que uma cobrança for gerada, seja de forma avulsa, através de pedidos ou assinaturas.

A retentativa é uma tecnologia que reprocessa as transações não autorizadas afim de melhorar sua conversão além contornar problemas de indisponibilidade.

No ambiente de testes possuimos simuladores que permitem testar os mais diversos cenários afim de fazer uma integração completa.

Para manter suas aplicações sempre atualizadas nós da Pagar.me enviamos webhooks, informando sempre que houver uma atualização nos nossos pedidos.

Oferecemos uma funcionalidade que lhe permite criar uma lista de endereços (IPs ou domínios) capazes de criar requisições para uma determinada loja. Assim, será possível ter maior segurança em sua integração com a API Pagar.me.

Possuimos uma ampla gama de bibliotecas que facilitam a integração nas mais diversas linguagens.

Nossos clientes podem usufruir de integrações com diversas plataformas, todas plugadas diretamente na nossa API.

Se você tiver qualquer dúvida sobre o Pagar.me pode consultar a nossa Central de Ajuda ou entrar em contato com as nossas equipes de Suporte ou Atendimento:

Nossa Central de Ajuda funciona como um guia completo para que você encontre rapidamente a resposta para as suas dúvidas. Nela, você pode navegar por dúvidas frequentes e explicações sobre várias questões relacionadas ao nosso negócio. Ela pode ser acessada pelo seguinte link: [Central de Ajuda](https://pagarme.helpjuice.com/pt_BR/pagarme20).

É o time responsável por resolver dúvidas sobre os produtos do Pagar.me. O seu atendimento é realizado através do e-mail, enviando a sua dúvida para `[[email protected]](https://docs.pagar.me/cdn-cgi/l/email-protection)` e por telefone, ligando para `4004-1330`. Se você já é cliente pode também entrar em contato através do chat dentro da sua Dashboard.

Se você ainda não é cliente e tem alguma dúvida sobre o uso dos nossos produtos ou sobre a integração, pode entrar em contato pelo e-mail `[[email protected]](https://docs.pagar.me/cdn-cgi/l/email-protection)`, falar conosco através do chat no nosso site ou ligar para o nosso time pelo telefone `(11) 3157-3121`.

É responsável por resolver dúvidas técnicas. A equipe de suporte mantém contato apenas por meio de tickets, que podem ser abertos enviando a sua dúvida para `[[email protected]](https://docs.pagar.me/cdn-cgi/l/email-protection)`

Por fim, se você possui alguma dúvida ou sugestão para tornar a nossa documentação melhor, mande um e-mail para [\[email protected\]](https://docs.pagar.me/cdn-cgi/l/email-protection#1c6e79707d7f7573727d71797268735c6c7d7b7d6e327179) e estamos prontos para ajudar!  
:-)

* * *

> 📘
> 
> API Reference
> 
> 
> -------------------
> 
> Para entender melhor sobre os endpoints e requisições, acesse nossa [API Reference](https://docs.pagar.me/reference).

Updated over 1 year ago

* * *

*   [Quickstart Pagar.me](https://docs.pagar.me/docs/quickstart-pagarme)

*   [Table of Contents](#)
*   *   [1\. Explicando o Pagar.me](#1-explicando-o-pagarme)
    *   [2\. O que o Pagar.me oferece](#2-o-que-o-pagarme-oferece)
        *   [Pagamentos](#pagamentos)
        *   [Assinatura](#assinatura)
        *   [tokenizecard.js](#tokenizecardjs)
        *   [Checkout](#checkout)
        *   [Gestão de clientes](#gest%C3%A3o-de-clientes)
        *   [Retentativas](#retentativas)
        *   [Simuladores](#simuladores)
        *   [Webhooks](#webhooks)
        *   [Segurança de integração](#seguran%C3%A7a-de-integra%C3%A7%C3%A3o)
        *   [Bibliotecas](#bibliotecas)
        *   [Plataformas](#plataformas)
    *   [Em caso de dúvidas](#em-caso-de-d%C3%BAvidas)</content>
</page>

<page>
  <title>Rate Limit</title>
  <url>https://docs.pagar.me/reference/rate-limit</url>
  <content>**Rate Limit - Tabela de quantidade máxima de requisições por minuto em cada endpoint:**

| Endpoint/Recurso | Metodo | Rate Limit por minuto |
| --- | --- | --- |
| [/charges](https://docs.pagar.me/reference#listar-cobran%C3%A7as) | GET | 200 |
| [/charges/\*](https://docs.pagar.me/reference#obter-cobran%C3%A7a) | GET | 200 |
| [/charges/{{charge\_id}}](https://docs.pagar.me/reference/cancelar-cobran%C3%A7a-1) | DELETE | **Somente para PIX:** Após a 10° tentativa de cancelamento de uma mesma cobrança, permitimos somente uma nova tentativa a cada 15 minutos. |
| [/orders](https://docs.pagar.me/reference#listar-pedidos) | GET | 200 |
| [/orders/\*](https://docs.pagar.me/reference#obter-pedido) | GET | 200 |
| [/recipients](https://docs.pagar.me/reference#listar-recebedores-1) | GET | 100 |
| [/recipients/\*](https://docs.pagar.me/reference#obter-recebedor-1) | GET | 150 |
| [/subscriptions](https://docs.pagar.me/reference#listar-assinaturas-1) | GET | 200 |
| [/subscriptions/\*](https://docs.pagar.me/reference#obter-assinatura-1) | GET | 200 |
| [/invoices](https://docs.pagar.me/reference#listar-faturas-1) | GET | 200 |
| [/invoices/\*](https://docs.pagar.me/reference#obter-fatura-1) | GET | 200 |
| [/customers](https://docs.pagar.me/reference#listar-clientes-1) | GET | 200 |
| [/customers/\*](https://docs.pagar.me/reference#obter-cliente-1) | GET | 200 |
| [/hooks](https://docs.pagar.me/reference#listar-webhooks) | GET | 50 |
| [/hooks/\*](https://docs.pagar.me/reference/obter-webhook) | GET | 50 |
| [/payables](https://docs.pagar.me/reference/retornando-receb%C3%ADveis) | GET | 700 |
| [/balance/operations](https://docs.pagar.me/reference/obter-hist%C3%B3rico-das-opera%C3%A7%C3%B5es) | GET | 300 |</content>
</page>

<page>
  <title>Autenticação</title>
  <url>https://docs.pagar.me/reference/autentica%C3%A7%C3%A3o-2</url>
  <content>Obtendo sua Chave de API

  
Antes de começar, você precisa obter suas chaves de API.  
Para isso, siga os seguintes passos:  
**1** - Acesse este [**link**](https://id.pagar.me/) e faça login com seu usuário,  
**2** - Após acessar o Dash, navegue até a área de **Desenvolvimento** e em seguida clique em **Chaves**.

> 📘
> 
> Clientes integrados na versão anterior da API
> 
> 
> ---------------------------------------------------
> 
> Caso você já seja cliente Pagar.me e esteja integrado na versão anterior da API, entre em contato com o nosso time de suporte.

> 🚧
> 
> Endpoints para teste e produção
> 
> 
> -------------------------------------
> 
> As chamadas de testes e de produção devem ser feitas para o **mesmo endpoint**: [https://api.pagar.me/core/v5](https://api.pagar.me/core/v5).
> 
> O que definirá se a transação irá utilizar o nosso simulador ou se seguirá o fluxo de produção é o **tipo da Chave de API** enviada.

Nós disponibilizaremos 02 chaves para que você possa realizar testes:

*   Exemplo de prefixo da **Chave Secreta** de Sandbox: `sk_test_*`
*   Exemplo de prefixo da **Chave Pública** de Sandbox: `pk_test_*`

Após o fechamento do contrato o cliente receberá as chaves do ambiente de produção:

*   Exemplo de prefixo da **Chave Secreta** de Produção: `sk_*`
*   Exemplo de prefixo da **Chave Pública** de Produção: `pk_*`

Para se autenticar conosco você deve enviar a **Chave de API** no cabeçalho **Authorization**, seguindo o padrão da [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

    var fs = require('fs');
    const request = require("request");
    var body = JSON.parse(fs.readFileSync('body.json', 'utf8'));
    
    var options = {                 
        method: 'POST',             
        uri: 'https://api.pagar.me/core/v5/orders',                    
        headers: {               
          'Authorization': 'Basic ' + Buffer.from("sk_test_*:").toString('base64'),
          'Content-Type': 'application/json'              
        },
        json : body
    };    
    
    request(options, function(error, response, body) {  
        console.log(response.body);
    });
    

> 📘
> 
> Como utilizar a SecretKey
> 
> 
> -------------------------------
> 
> Para montar a requisição Basic Auth, você deve utilizar a SecretKey da seguinte maneira:  
> **User:** SecretKey  
> **Password:** _vazio_

> 📘
> 
> Chave Pública de API (PK)
> 
> 
> -------------------------------
> 
> Essas chaves serão utilizadas para representar a sua loja na integração com o [checkout](https://docs.pagar.me/reference/checkout-pagarme).

> ❗️
> 
> NÃO COMPARTILHE SUAS CHAVES DE API
> 
> 
> ----------------------------------------
> 
> A sua chave da API é **SECRETA** e não deve ser compartilhada com terceiros.

*   [Table of Contents](#)
*   *   [Tipos de Chave](#tipos-de-chave)
    *   [Autorização Basic Auth](#autoriza%C3%A7%C3%A3o-basic-auth)</content>
</page>

<page>
  <title>Erros</title>
  <url>https://docs.pagar.me/reference/erros-1</url>
  <content>A nossa API valida cada um dos campos enviados na requisição antes de prosseguir com a criação, consulta ou gerenciamento dos pedidos, transações e recursos.

Utilizamos os códigos de resposta convencionais do HTTP para indicar o sucesso ou a falha de uma requisição. Sendo assim, códigos **2xx** indicam sucesso, **4xx** indicam erros por algum dado informado incorretamente (por exemplo, algum campo obrigatório não enviado ou um cartão sem data de validade) e **5xx** indicando erros nos servidores do Pagar.me.

**Tabela dos HTTP Status Code:**

| Código | Status | Definição |
| --- | --- | --- |
| `200` | OK | Sucesso |
| `400` | Bad Request | Requisição inválida |
| `401` | Unauthorized | Chave de API inválida |
| `403` | Forbidden | Bloqueio por IP/Domínio |
| `404` | Not Found | O recurso solicitado não existe |
| `412` | Precondition Failed | Parâmetros válidos mas a requisição falhou |
| `422` | Unprocessable Entity | Parâmetros inválidos |
| `429` | Too Many Requests | Quantidade de requisições realizadas pelo IP maior que o permitido pela Pagar.me |
| `500` | Internal Server Error | Ocorreu um erro interno |

    {
        "message": "Customer not found."
    }
    

> "Cliente não encontrado": Ocorre quando não identificamos o objeto `customer` ou `customer_id` na [requisição de criação do pedido](https://docs.pagar.me/reference/criar-pedido-2).

    {
        "message": "The request is invalid.",
        "errors": {
            "order.customer.name": [
                "The name field is required."
            ]
        },
      ...
    

> "O campo nome é obrigatório": Ocorre quando não identificamos o campo `name` dentro do objeto `customer`. É necessário adicionar o nome do cliente aos dados informados na requisição de [requisição de criação do pedido](https://docs.pagar.me/reference/criar-pedido-2).

    {
        "message": "The request is invalid.",
        "errors": {
            "order.payments[0].credit_card.card": [
                "The number field is not a valid card number"
            ]
        },
      ...
    

> "O campo do número não é um número de cartão válido": Ocorre quando o campo `number` dentro do objeto `card` não é um número de cartão válido. É necessário revisar o número do cartão informado na [requisição de criação do pedido](https://docs.pagar.me/reference/criar-pedido-2).

    {
        "message": "The request is invalid.",
        "errors": {
            "card.number": [
                "The field number must be a string with a minimum length of 13 and a maximum length of 19."
            ]
        },
      ...
    

> "O número do campo deve ser uma `string` com comprimento mínimo de 13 e máximo de 19": Ocorre quando o campo `number` tem a quantidade de caracteres incorreta. É necessário revisar o número do cartão informado na [requisição de criação do cartão](https://docs.pagar.me/reference/criar-cart%C3%A3o).

    {
        "message": "The request is invalid.",
        "errors": {
            "order.items": [
                "The items field is required"
            ]
        },
      ...
    

> "O campo itens é obrigatório": Ocorre quando não encontramos o objeto `items` na requisição. Para realizar a [criação de um pedido](https://docs.pagar.me/reference/criar-pedido-2), é obrigatório informar os itens.

    ...               
    "gateway_response": {
        "code": "412",
        "errors": [
            {
                "message": "At least one customer phone is required."
            }
        ]
    },
      ...
    

> "É necessário pelo menos um telefone do cliente": O erro ocorre quando não encontramos o objeto `phones` dentro do objeto `customer`. Para clientes _Pagar.me PSP_ é obrigatório enviar o telefone dentro junto aos dados do cliente. [Mais sobre o objeto phones.](https://docs.pagar.me/reference/telefones-1)

> 📘
> 
> Dados obrigatórios PSP x Gateway
> 
> 
> --------------------------------------
> 
> A integração PSP ou Gateway afeta os dados necessários para efetuar certas solicitações, como a criação de um pedido.
> 
> Portanto, leve em consideração o seu modelo de negócios ao seguir as orientações da nossa [Referência da API](https://docs.pagar.me/reference/introdu%C3%A7%C3%A3o-1) e consultar a assistência de nossas equipes de suporte.</content>
</page>

<page>
  <title>Paginação</title>
  <url>https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1</url>
  <content>  
A API Pagar.me tem suporte a buscas em massa através dos métodos **list**. Deste modo, você pode listar compradores, assinaturas, pedidos e diversos outros objetos do Pagar.me. Todos esses métodos de listagem possuem uma estrutura em comum, que é a de **paginação**.

    {
      "data": [...],
      "paging": {
        "total": 11,
        "previous": null,
        "next": "{url}?page=2&size=10"
      }
    }</content>
</page>

<page>
  <title>Metadata</title>
  <url>https://docs.pagar.me/reference/metadata-1</url>
  <content>A maioria dos nossos objetos - como [customer](https://docs.pagar.me/reference/clientes-1), [card](https://docs.pagar.me/reference#cart%C3%B5es-1), [address](https://docs.pagar.me/reference#endere%C3%A7os), [subscription](https://docs.pagar.me/reference#assinaturas-1), [plan](https://docs.pagar.me/reference/planos-1), [order](https://docs.pagar.me/reference/pedidos-1), [charge](https://docs.pagar.me/reference/cobran%C3%A7as-1) e [invoice](https://docs.pagar.me/reference#faturas-1) - possuem o parâmetro `metadata`, pelo qual você consegue armazenar dados **chave-valor**.

Metadados são interessantes para o armazenamento estruturado de dados complementares relacionados a algum objeto. Um exemplo seria adição do nome do pai de um cliente para ter essa informação em sua carteira de clientes.

    {
      ...
      "metadata": {
        "meu_campo1": "valor1",
        "meu_campo2": "valor2"
      }
    }</content>
</page>

<page>
  <title>Telefones</title>
  <url>https://docs.pagar.me/reference/telefones-1</url>
  <content>O objeto `phones` possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `home_phone` | **object** | _Telefone residencial_. |
| `mobile_phone` | **object** | _Telefone móvel_. |

Tanto o `home_phone` quanto o `mobile_phone` são compostos pelos seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `country_code` | **string** | _Código do País (Apenas numérico)_. |
| `area_code` | **string** | _Código da área (Apenas numérico)_. |
| `number` | **string** | _Número do telefone (Apenas numérico)_. |

    "phones": {
      "home_phone": {
        "country_code": "55",
        "number": "000000000",
        "area_code": "21"
      },
      "mobile_phone": {
        "country_code": "55",
        "number": "000000000",
        "area_code": "21"
      }
    }</content>
</page>

<page>
  <title>Entregas</title>
  <url>https://docs.pagar.me/reference/entregas-1</url>
  <content>O objeto `shipping` contém informações referentes à **entrega do produto** ao comprador, e possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `amount` | **integer** | _Valor da entrega_. |
| `description` | **string** | _Descrição da entrega_. |
| `recipient_name` | **string** | _Destinatário da entrega_. |
| `recipient_phone` | **string** | _Telefone do destinatário_. |
| `address` | **object** | _Endereço de entrega_. [Saiba mais sobre endereços](https://docs.pagar.me/reference/endere%C3%A7os). |
| `max_delivery_date` | **string** | _Data de entrega máxima_. |
| `estimated_delivery_date` | **string** | _Data de entrega estimada_. |
| `type` | **string** | _Tipo de entrega_. |

    "shipping" : {
        "amount": 100,
        "description": "Express Shipping",
        "recipient_name": "Tony Stark",
        "recipient_phone": "24586787867",
        "address": {
            "line_1": "10880, Malibu Point, Malibu Central",
            "zip_code": "90265",
            "city": "Malibu",
            "state": "CA",
            "country": "US"
        },
        "max_delivery_date": "2022-07-31",
      	"estimated_delivery_date": "2022-07-30",
        "type": "Express"
     }</content>
</page>

<page>
  <title>Clientes</title>
  <url>https://docs.pagar.me/reference/clientes-1</url>
  <content>O objeto `customer` possibilita a criação e gerenciamento de uma [Carteira de Clientes](https://docs.pagar.me/docs/carteira-de-clientes). Um `customer` possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do cliente_. Formato `cus_XXXXXXXXXXXXXXXX`. |
| `name` | **string** | _Nome do cliente_. |
| `email` | **string** | _E-mail do cliente_. |
| `phones` | **object** | _Telefones do cliente_. [Saiba mais sobre telefones](https://docs.pagar.me/reference#telefones-1). |
| `document` | **string** | _CPF, CNPJ, PASSAPORTE do cliente_. |
| `document_type` | **string** | _Tipo de documento_. Valores possíveis: `PASSPORT` , `CPF`, `CNPJ`. |
| `type` | **enum** | _Tipo de cliente_. Valores possíveis: `individual` e `company`. |
| `gender` | **string** | _Sexo do cliente_. Valores possíveis: `male` ou `female`. |
| `address` | **object** | _Endereço do cliente_. [Saiba mais sobre endereços](https://docs.pagar.me/reference/endere%C3%A7os). |
| `fb_id` | **integer** | _Código do cliente no Facebook_. |
| `fb_access_token` | **string** | [_Token de acesso_](https://developers.facebook.com/docs/facebook-login/access-tokens/?locale=pt_BR) _do Facebook_. Usado para fazer chamadas da GraphAPI e obter informações do usuário. |
| `delinquent` | **boolean** | _Indica se o cliente está inadimplente_. |
| `code` | **string** | _Código de referência do cliente no sistema da loja_. |
| `created_at` | **datetime** | _Data de criação do cliente (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do cliente (UTC)_. |
| `birthdate` | **datetime** | _Data de nascimento do cliente_. Formato mm/dd/aa |
| `metadata` | **object** | _Informações adicionais sobre o cliente_. [Saiba mais sobre metadata](https://docs.pagar.me/reference#metadata-1). |</content>
</page>

<page>
  <title>Criar cliente</title>
  <url>https://docs.pagar.me/reference/criar-cliente-1</url>
  <content>post https://api.pagar.me/core/v5/customers

> 🚧
> 
> O e-mail do cliente é único
> 
> 
> ---------------------------------
> 
> É importante destacar que o campo **e-mail é único**, ou seja, caso seja requisitada **a criação de um cliente com um e-mail já cadastrado**, o _endpoint_ irá atualizar os dados do `customer` anteriormente cadastrado com o email informado.

> 🚧
> 
> Clientes com Passaporte
> 
> 
> -----------------------------
> 
> Clientes com documento do tipo "passport" na integração da Sub Pagar.me só conseguirão transacionar utilizando endereços internacionais, reconhecidos pelo ZIP Code de cada país.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Facilitadores de pagamento (Dados de Subadquirente)</title>
  <url>https://docs.pagar.me/reference/facilitadores-de-pagamento-dados-de-subadquirente</url>
  <content>Por determinação do **Banco Central e das bandeiras** os cliente de E-commerce que se enquadram na categoria de **Facilitadores de Pagamento** deverão enviar dados referentes aos seus **sub credenciados** em cada requisição transacional.

O objeto `SubMerchant` possibilita o envio de informação de sub credenciados.  
Um `SubMerchant` possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `SubMerchant` | **object** | Dados de sub credenciador |
| `Merchant_Category_Code` | **string** | MCC do subcredenciado - Código de categoria do estabelecimento comercial. Limite de quatro dígitos. |
| `Payment_Facilitator_Code` | **string** | Código de identificação do Facilitador de pagamentos cadastrado com as bandeiras |
| `Code` | **string** | Código de identificação do sub credenciado para o facilitador de pagamentos |
| `Name` | **string** | Nome do sub credenciado. |
| `Legal_name` | **string** | Razão social do sub credenciado.  
_Observação: Campo será disponibilizado até o dia 04/04_ |
| `Document` | **string** | CPF ou CNPJ do sub credenciado. |
| `Type` | **string** | Tipo de sub credenciado. Valores possíveis: `individual` e `company`. |
| `Phones` | **object** | Telefones do sub credenciado. |
| `Phone_Type` | **string** | Tipo do telefone do sub credenciado. |
| `Coutry_code` | **string** | Código do País (Apenas numérico). |
| `Area_code` | **string** | Código da área (Apenas numérico). |
| `Number` | **string** | Número do telefone (Apenas numérico). |
| `Address` | **object** | Endereço do sub credenciado. |
| `Country` | **string** | País (Código do país no formato ISO 3166-1 alpha-2). |
| `State` | **string** | _Estado_.  
(Código do estado no formato ISO 3166-2). |
| `City` | **string** | _Cidade_. |
| `Neighborhood` | **string** | _Bairro_. |
| `Street` | **string** | _Rua_. |
| `Number` | **string** | _Número da rua_. |
| `Complement` | **string** | _Complemento_. |
| `Zip_Code` | **string** | Código Postal (CEP)  
(Apenas numérico). |

    {
        "submerchant": {
            "merchant_category_code": "4444",
            "payment_facilitator_code": "5555555",
            "code": "code2",
            "name": "sub tony stark",
            "legal_name": "empresa ltda",
            "document": "123456789",
            "type": "individual",
            "phone": {
                "country_code": "55",
                "number": "000000000",
                "area_code": "21"
            },
            "address": {
                "street": "malibu point",
                "number": "10880",
                "complement": "a",
                "neighborhood": "central malibu",
                "city": "malibu",
                "state": "ca",
                "country": "us",
                "zip_code": "24210460"
            }
        },
        "items": [
            {
                "amount": 2990,
                "description": "chaveiro do tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "tony stark",
            "email": "{{email}}"
        },
        "ip": "192.168.0.1",
        "location": {
            "latitude": "10",
            "longitude": "20"
        },
        "session_id": "session_id_test",
        "device": {
            "platform": "android os"
        },
        "payments": [
            {
                "payment_method": "credit_card",
                "credit_card": {
                    "installments": 1,
                    "statement_descriptor": "avengers",
                    "card": {
                        "number": "4000000000000010",
                        "holder_name": "tony stark",
                        "exp_month": 1,
                        "exp_year": 25,
                        "cvv": "351",
                        "billing_address": {
                            "street": "malibu point",
                            "number": "10880",
                            "zip_code": "90265",
                            "neighborhood": "central malibu",
                            "city": "malibu",
                            "state": "ca",
                            "country": "us"
                        }
                    }
                }
            }
        ],
        "shipping": {
            "amount": 110,
            "description": "teste",
            "recipient_name": "marcelo",
            "type": "standard",
            "address": {
                "street": "malibu point",
                "number": "10882",
                "zip_code": "90265",
                "neighborhood": "central malibu",
                "city": "malibu",
                "state": "ca",
                "country": "us"
            }
        }
    }
    
    

    {
        "submerchant": {
            "payment_facilitator_code": "55555",
            "merchant_category_code": "44444",
            "code": "code2",
            "name": "sub tony stark",
            "legal_name": "empresa ltda",
            "document": "123456789",
            "type": "individual",
            "phone": {
                "country_code": "55",
                "number": "000000000",
                "area_code": "21"
            },
            "address": {
                "street": "malibu point",
                "number": "10880",
                "neighborhood": "central malibu",
                "city": "malibu",
                "state": "ca",
                "country": "us",
                "zip_code": "24210-460"
            }
        },
        "items": [
            {
                "amount": 3000,
                "description": "chaveiro do teressact",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "tony stark"
        },
        "payments": [
            {
                "amount": 3000,
                "payment_method": "checkout",
                "checkout": {
                    "expires_in": 120,
                    "billing_address_editable": false,
                    "customer_editable": true,
                    "accepted_payment_methods": [
                        "credit_card"
                    ],
                    "success_url": "https://www.pagar.me",
                    "credit_card": {
                        "installments": [
                            {
                                "number": 1,
                                "total": 3000
                            },
                            {
                                "number": 2,
                                "total": 3000
                            }
                        ]
                    }
                }
            }
        ]
    }
    
    

    {
        "submerchant": {
            "payment_facilitator_code": "55555",
            "merchant_category_code": "44444",
            "code": "code2",
            "name": "sub tony stark",
            "legal_name": "empresa ltda",
            "document": "123456789",
            "type": "individual",
            "phone": {
                "country_code": "55",
                "number": "000000000",
                "area_code": "21"
            },
            "address": {
                "street": "malibu point",
                "number": "10880",
                "neighborhood": "central malibu",
                "city": "malibu",
                "state": "ca",
                "country": "us",
                "zip_code": "24210-460"
            }
        },
        "billing_type": "prepaid",
        "items": [
            {
                "name": "premium",
                "description": "sem anuncios",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 1490
                },
                "discounts": [
                    {
                        "discount_type": "percentage",
                        "value": 10,
                        "description": "desconto 10% item sem anuncios"
                    }
                ],
                "increments": [
                    {
                        "discount_type": "percentage",
                        "value": 20,
                        "description": "incremento 20% item sem anuncios"
                    }
                ]
            },
            {
                "name": "silver",
                "description": "com anuncios",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 2000
                },
                "increments": [
                    {
                        "discount_type": "percentage",
                        "value": 20
                    }
                ]
            }
        ],
        "customer": {
            "name": "tony stark",
            "email": "[email protected]"
        },
        "card": {
            "number": "4000000000000010",
            "holder_name": "tony stark",
            "exp_month": 1,
            "exp_year": 22,
            "cvv": "3531",
            "billing_address": {
                "street": "malibu point",
                "number": "10880",
                "zip_code": "90265",
                "neighborhood": "central malibu",
                "city": "malibu",
                "state": "ca",
                "country": "us"
            }
        },
        "discounts": [
            {
                "discount_type": "percentage",
                "value": 10,
                "description": "desconto 10% assinatura sem anuncios"
            }
        ],
        "increments": [
            {
                "discount_type": "percentage",
                "value": 20,
                "description": "incremento 20% assinatura sem anuncios"
            }
        ]
    }
    

> 📘
> 
> Adquirentes integradas para envio das informações de Facilitadores de Pagamento
> 
> 
> -------------------------------------------------------------------------------------
> 
> Stone, GetNet, Cielo 1.5, Cielo 3, PagSeguro, ERede e SafraPay.

> 🚧
> 
> Importante
> 
> 
> ----------------
> 
> Essa é uma determinação do Banco Central e das bandeiras e para saber quais dados são obrigatórios para sua integração entre em contato com sua adquirente.</content>
</page>

<page>
  <title>Obter cliente</title>
  <url>https://docs.pagar.me/reference/obter-cliente-1</url>
  <content>get https://api.pagar.me/core/v5/customers/

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar cliente</title>
  <url>https://docs.pagar.me/reference/editar-cliente-1</url>
  <content>put https://api.pagar.me/core/v5/customers/

> 🚧
> 
> O e-mail do cliente é único
> 
> 
> ---------------------------------
> 
> É importante destacar que o campo **e-mail é único**, ou seja, caso seja requisitada **a criação de um cliente com um e-mail já cadastrado**, o _endpoint_ irá atualizar os dados do `customer` anteriormente cadastrado com o email informado.

> ❗️
> 
> Este endpoint altera todos os dados do customer
> 
> 
> -----------------------------------------------------
> 
> Ao enviar uma requisição sem todas as informações do customer, as informações não enviadas serão sobrescritas como 'null'. Por exemplo: Se o customer já tem um telefone cadastrado e você realizar um PUT sem o dado de telefone, o telefone será apagado.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar clientes</title>
  <url>https://docs.pagar.me/reference/listar-clientes-1</url>
  <content>get https://api.pagar.me/core/v5/customers

Este recurso permite a obtenção da **carteira de clientes** do lojista. Pode ser utilizados alguns parâmetros como filtro da listagem

  

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cartões</title>
  <url>https://docs.pagar.me/reference/cart%C3%B5es-1</url>
  <content>O objeto `card` descreve um cartão (crédito, voucher ou private label) associado a um `customer`. Este recurso viabiliza a criação de uma **Wallet**, que representa todos os `card` associados a um `customer`. [Saiba mais sobre Wallet](https://docs.pagar.me/docs/wallets).

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do cartão_. Formato `card_XXXXXXXXXXXXXXXX`. |
| `last_four_digits` | **string** | _Quatro últimos dígitos do cartão_. |
| `first_six_digits` | **string** | _Primeiros seis dígitos do cartão_. |
| `brand` | **string** | _Bandeira do cartão_.  
Para **cartões de crédito**, temos como valores possíveis : `Elo`, `Mastercard`, `Visa`, `Amex`, `JCB`, `Aura`, `Hipercard`, `Diners`, ou `Discover`. Para **voucher**, temos como valores possíveis `VR`, `Sodexo`, `Ticket` ou `Alelo` . |
| `holder_name` | **string** | _Nome impresso no cartão_. |
| `holder_document` | **string** | _CPF ou CNPJ do portador do cartão_. |
| `exp_month` | **integer** | _Mês de vencimento do cartão_. |
| `exp_year` | **integer** | _Ano de vencimento do cartão_. Formatos: **yy** ou **yyyy**. |
| `status` | **enum** | _Status do cartão_. Valores possíveis: `active`, `deleted` ou `expired`. |
| `created_at` | **datetime** | _Data de criação do cartão (UTC)_. |
| `update_at` | **datetime** | _Data de atualização do cartão (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão do cartão (UTC)_. |
| `billing_address` | **object** | _Endereço de cobrança_. [Saiba mais sobre endereços](https://docs.pagar.me/reference/endere%C3%A7os). |
| `customer` | **object** | _Dados do cliente_. [Saiba mais sobre clientes](https://docs.pagar.me/reference/clientes-1). |
| `private_label` | **boolean** | _Indica se é um cartão private label_. |
| `type` | **string** | _Tipo do cartão_. Valores possíveis: `credit` ou `voucher`. |
| `metadata` | **object** | _Informações adicionais sobre o cartão_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |</content>
</page>

<page>
  <title>Criar cartão</title>
  <url>https://docs.pagar.me/reference/criar-cart%C3%A3o</url>
  <content>post https://api.pagar.me/core/v5/customers//cards

Este recurso cria um `card` associado ao `customer` através do `customer_id` informado.

  

> 🚧
> 
> Falha na verificação de cartão
> 
> 
> ------------------------------------
> 
> Quando a verificação de cartão esta ativa e ocorre uma falha na verificação, a API irá retornar erro "412" com a mensagem: "Could not create credit card. The card verification failed."

> 🚧
> 
> Cartão já cadastrado
> 
> 
> --------------------------
> 
> Caso um cliente tente cadastrar um **mesmo cartão mais de uma vez\***, será retornado o mesmo `card_id` do cartão previamente cadastrado.

> ❗️
> 
> Campo "brand" é obrigatório para cartões Private Label
> 
> 
> ------------------------------------------------------------
> 
> Caso o cartão seja _private label_ (ou seja `private_label` = **true**), `brand` será um campo obrigatório.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar cartão</title>
  <url>https://docs.pagar.me/reference/listar-cart%C3%A3o</url>
  <content>get https://api.pagar.me/core/v5/customers//cards

Este recurso permite a recuperação da **Wallet** contendo todos os cartões do cliente através do seu identificador (`customer_id`).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter cartão</title>
  <url>https://docs.pagar.me/reference/obter-cart%C3%A3o</url>
  <content>get https://api.pagar.me/core/v5/customers//cards/

Possibilita a recuperação de um `card` através dos identificadores do cartão (`card_id`) e do cliente associado (`customer_id`), informados por parâmetro.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar cartão</title>
  <url>https://docs.pagar.me/reference/editar-cart%C3%A3o</url>
  <content>put https://api.pagar.me/core/v5/customers//cards/

Com o verbo _HTTP PUT_, através do identificador do cartão (`card_id`) e do identificador do cliente ao qual o mesmo está associado (`customer_id`) é possível alterar dados do cartão informado.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Excluir cartão</title>
  <url>https://docs.pagar.me/reference/excluir-cart%C3%A3o</url>
  <content>delete https://api.pagar.me/core/v5/customers//cards/

Com o verbo _HTTP DELETE_, através do identificador do cartão (`card_id`) e do identificador do cliente (`customer_id`) ao qual o cartão está associado, é possível remover o cartão da **Wallet** do cliente.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Renovar cartão</title>
  <url>https://docs.pagar.me/reference/renovar-cart%C3%A3o-1</url>
  <content>post https://api.pagar.me/core/v5/customers//cards//renew

Com o verbo _HTTP POST_, através do identificador do cartão (`card_id`) e do identificador do cliente (`customer_id`) ao qual o cartão está associado, é possível renovar o cartão da **Wallet** do cliente, utilizando a funcionalidade manual do Card Updater.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar Token cartão</title>
  <url>https://docs.pagar.me/reference/criar-token-cart%C3%A3o-1</url>
  <content>post https://api.pagar.me/core/v5/tokens

> 🚧
> 
> Billing Address
> 
> 
> ---------------------
> 
> A entidade de billing address do cartão não é tokenizada. Logo, ao criar um pedido/cobrança com token também será preciso informar o billing address.

> ❗️
> 
> Atenção
> 
> 
> -------------
> 
> 1 - Certifique-se de ter o seu domínio devidamente registrado na dashboard.
> 
> Para orientações detalhadas sobre como cadastrar o domínio, consulte [cadastrando de domínio](https://docs.pagar.me/docs/configurando-a-dashboard-nuvemshop#configura%C3%A7%C3%A3o-de-dom%C3%ADnio).
> 
> 2 - Ao utilizar este endpoint, observe que apenas o cabeçalho Content-Type é permitido.  
> Não é permitido incluir o cabeçalho de autorização ao realizar o request.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar endereço</title>
  <url>https://docs.pagar.me/reference/criar-endere%C3%A7o-1</url>
  <content>post https://api.pagar.me/core/v5/customers//addresses

Para a criação de um `address` é necessário informar o `customer_id` do cliente ao qual será associado o endereço.

> 🚧
> 
> Clientes com endereços Internacionais
> 
> 
> -------------------------------------------
> 
> Clientes que utilizarem passaporte como documento podem realizar transações, informando o endereço internacional e, em vez do CEP, inserindo o ZIP Code correspondente ao país.
> 
> Não é possível um cliente usar o passaporte e colocar um endereço nacional.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter endereço</title>
  <url>https://docs.pagar.me/reference/obter-endere%C3%A7o-1</url>
  <content>get https://api.pagar.me/core/v5/customers//addresses/

Através dos identificadores do cliente (`customer_id`) e do endereço (`address_id`) é possível obter o endereço do cliente.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Endereços</title>
  <url>https://docs.pagar.me/reference/endere%C3%A7os</url>
  <content>O objeto `address` representam endereços associados aos `customers`. Um `address` possui os seguintes atributos:

| Atributo | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do endereço_. Formato: `addr_XXXXXXXXXXXXXXXX` |
| `line_1` | **string** | _Dados principais do endereço_. Neste campo deve ser informado **Número, Rua, Bairro**, nesta **ordem** e **separados por vírgula**. |
| `line_2` | **string** | _Dados complementares do endereço_. Neste campo pode ser informado complemento, referências. |
| `zip_code` | **integer** | _Código Postal (CEP)_. Apenas numérico. |
| `city` | **string** | _Cidade_. |
| `state` | **string** | _Código do estado no formato ISO 3166-2_. |
| `country` | **string** | _Código do país no formato ISO 3166-1 alpha-2_. |
| `status` | **enum** | _Status do endereço_. Valores possíveis: `active` ou `deleted` |
| `created_at` | **datetime** | _Data de criação do endereço (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do endereço (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão do endereço (UTC)_. |
| `customer` | **object** | _Dados do cliente_. [Saiba mais sobre clientes](https://docs.pagar.me/reference/clientes-1). |
| `metadata` | **object** | _Informações adicionais sobre o endereço_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |

> ❗️
> 
> FORMATAÇÃO DO ENDEREÇO
> 
> 
> ----------------------------
> 
> O atributo `line_1` deverá seguir o formato: **Número, Rua, Bairro** - nesta ordem e separados por vírgula, em virtude do antifraude ou boleto com registro, caso não tiver número pode enviar sem.
> 
> O atributo `line_2` poderá conter informações complementares do endereço, tais como andar, apto, sala, etc.

    "line_1" : "375, Av. General Justo, Centro",
    "line_2" : "7º andar, sala 01"
    

> 🚧
> 
> Atributos Descontinuados
> 
> 
> ------------------------------
> 
> O objeto `address` possui ainda os atributos: `street`, `number`, `complement` e `neighborhood` porém os mesmo serão **descontinuados** em breve, portanto, **não é recomendado** o uso destes campos.</content>
</page>

<page>
  <title>Listar endereços</title>
  <url>https://docs.pagar.me/reference/listar-endere%C3%A7os-1</url>
  <content>get https://api.pagar.me/core/v5/customers//addresses

Este recurso permite a recuperação dos endereços de um determinado cliente através do seu identificador(`customer_id`). Pode ser utilizados alguns parâmetros como filtro da listagem.

  

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar endereço</title>
  <url>https://docs.pagar.me/reference/editar-endere%C3%A7o-1</url>
  <content>put https://api.pagar.me/core/v5/customers//addresses/

Com o verbo _HTTP PUT_, através dos identificadores do cliente (`customer_id`) e do endereço (`address_id`) é possível atualizar informações complementares do endereço.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Excluir endereço</title>
  <url>https://docs.pagar.me/reference/excluir-endere%C3%A7o-1</url>
  <content>delete https://api.pagar.me/core/v5/customers//addresses/

Com o verbo _HTTP DELETE_, através do identificador do endereço(`address_id`) e do identificador do cliente (`customer_id`) ao qual o endereço está associado, é possível remover o endereço da **Wallet** do cliente.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>BIN</title>
  <url>https://docs.pagar.me/reference/bin</url>
  <content>Os seis primeiros dígitos de um número de cartão (incluindo o dígito **MII** inicial) são conhecidos como o **número de identificação do emissor** (**IIN**) ou **número de identificação do banco** (**BIN**). Estes números identificam a instituição que emitiu o cartão ao titular do cartão. O restante do número é alocado pelo emissor. O objeto `bin` contém os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `brand` | **string** | _Bandeira do Cartão_. |
| `gaps` | **integer** | _Array de intervalos dos espaçamentos do número do cartão_. |
| `lenghts` | **integer** | _Array de número de dígitos possíveis para o cartão com o BIN informado_. |
| `mask` | **string** | _Expressão regular para mascarar o cartão_. |
| `cvv` | **integer** | _Número de dígitos do código de segurança do cartão_. |
| `brandImage` | **string** | _Link para imagem da bandeira_. |
| `possibleBrands` | **string** | _Possíveis bandeiras para o cartão com o BIN informado_. |</content>
</page>

<page>
  <title>Obter informações do BIN</title>
  <url>https://docs.pagar.me/reference/obter-informa%C3%A7%C3%B5es-do-bin</url>
  <content>get https://api.pagar.me/bin/v1/

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Visão Geral sobre Pagamento</title>
  <url>https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-pagamento</url>
  <content>| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `payment_method` | **string** | Meio de pagamento. Valores possíveis: **credit\_card**,**debit\_card**, **boleto**, **voucher**, **bank\_transfer**, **safety\_pay**, **checkout**, **cash**, **pix**. |
| `credit_card` | **object** | Dados sobre o pagamento com cartão de crédito (obrigatório caso o **payment\_method** seja **credit\_card**). Este método também pode ser utilizado com token de bandeiras. [Saiba mais sobre pagamentos com cartão de crédito](https://docs.pagar.me/reference#cart%C3%A3o-de-cr%C3%A9dito-1). |
| `debit_card` | **object** | Dados sobre o pagamento com cartão de débito (obrigatório caso o **payment\_method** seja **debit\_card**). Este método também pode ser utilizado com token de bandeiras. [Saiba mais sobre pagamentos com cartão de débito](https://docs.pagar.me/reference#cart%C3%A3o-de-d%C3%A9bito-2). |
| `voucher` | **object** | Dados sobre o pagamento com voucher (obrigatório caso o **payment\_method** seja **voucher**). [Saiba mais sobre pagamentos com voucher](https://docs.pagar.me/reference#voucher-1). |
| `boleto` | **object** | Dados sobre o pagamento com boleto (obrigatório caso o **payment\_method** seja **boleto**). [Saiba mais sobre pagamentos com boleto](https://docs.pagar.me/reference#boleto-1). |
| `bank_transfer` | **object** | Dados sobre o pagamento com transferência entre contas bancárias. (obrigatório caso o **payment\_method** seja **bank\_transfer**). [Saiba mais sobre pagamentos com transferência entre contas](https://docs.pagar.me/reference#transfer%C3%AAncia-banc%C3%A1ria). |
| `checkout` | **object** | Dados sobre o pagamento com checkout. (obrigatório caso o **payment\_method** seja **checkout**). **Este método está disponível apenas para pedidos.** [Saiba mais sobre pagamentos com meio de pagamento checkout](https://docs.pagar.me/reference#checkout-2). |
| `cash` | **object** | Dados sobre o pagamento com cash (obrigatório caso o **payment\_method** seja **cash**). [Saiba mais sobre pagamentos com cash](https://docs.pagar.me/reference#cash-2). |
| `pix` | **object** | Dados sobre o pagamento com pix (obrigatório caso o **payment\_method** seja **pix**). [Saiba mais sobre pagamentos com pix](https://docs.pagar.me/reference#pix-2) |
| `amount` | **integer** | Valor da cobrança em centavos |
| `metadata` | **object** | Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento. [Saiba mais sobre metadata](https://docs.pagar.me/reference#metadata-1) |</content>
</page>

<page>
  <title>Pix</title>
  <url>https://docs.pagar.me/reference/pix-2</url>
  <content>Para criar um [pedido](https://docs.pagar.me/reference#criar-pedido-2) com **Pix**, devemos incluir o objeto `pix` dentro do nó `payment`, assim como a propriedade `"payment_method": "pix"`. O objeto `pix` contém as seguintes propriedades:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `expires_in` | **integer** | _Data de expiração do Pix em segundos_.  
(**Mandatório**) |
| `expires_at` | **datetime** | _Data de expiração do Pix_.  
(**Opcional | Mandatório caso não enviado o expires\_in**) [Formato: YYYY-MM-DDThh:mm:ss](https://docs.pagar.me/reference/UTC) |
| `additional_information` | **Array of objects** | _Objeto chave/valor utilizado para adicionar informações sobre o pagamento. Esses dados serão visíveis para o consumidor na hora do pagamento_. |

> 📘
> 
> Bancos aceitos para transações de PIX
> 
> 
> -------------------------------------------
> 
> O meio de pagamento PIX só está disponível para contas configuradas com um gateway específico chamado Pagar.me .

> 📘
> 
> Estorno de transações
> 
> 
> ---------------------------
> 
> Para realizar o estorno de transações com pix é necessário enviar uma requisição de cancelamento de cobrança informando o id da cobrança que deve ser cancelada.

> 📘
> 
> Pix com Split
> 
> 
> -------------------
> 
> Para os clientes com afiliação Pagar.me, é possível criar pedidos e cobranças com o meio de pagamento Pix incluindo a funcionalidade de Split.

    {
        "items": [
            {
                "amount": 2990,
                "description": "Chaveiro do Tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]",
            "type": "individual",
            "document": "01234567890",
            "phones": {
                "home_phone": {
                    "country_code": "55",
                    "number": "22180513",
                    "area_code": "21"
                }
            }
        },
        "payments": [
            {
                "payment_method": "pix",
                "pix": {
                    "expires_in": "52134613",
                    "additional_information": [
                        {
                            "name": "Quantidade",
                            "value": "2"
                        }
                    ]
                }
            }
        ]
    }
    

    {
        "items": [
            {
                "amount": 100,
                "description": "Chaveiro do Tesseract",
                "quantity": 1,
                "code": "12345"
            }
        ],
       "customer": {
            "name": "Tony Stark",
            "email": "[email protected]",
            "type": "individual",
            "document": "01234567890",
            "phones": {
                "home_phone": {
                    "country_code": "55",
                    "number": "22180513",
                    "area_code": "21"
                }
            }
        },
        "payments": [
            {
                "payment_method": "pix",
                "pix": {
                    "expires_in": "52134613",
                    "additional_information": [
                        {
                            "name": "Quantidade",
                            "value": "2"
                        }
                    ]
                },
                "split": [
                    {
                        "amount": 50,
                        "recipient_id": "rp_5yGwpMGckBHVYmb6",
                        "type": "percentage",
                        "options": {
                            "charge_processing_fee": true,
                            "charge_remainder_fee": true,
                            "liable": true
                        }
                    },
                    {
                        "amount": 50,
                        "type": "percentage",
                        "recipient_id": "rp_yLnAyVpHbQIqZxwO",
                        "options": {
                            "charge_processing_fee": false,
                            "charge_remainder_fee": false,
                            "liable": false
                        }
                    }
                ]
            }
        ]
    }
    

    {
      "id": "or_56GXnk6T0eU88qMm",
      "code": "YV3RCRIN24",
      "amount": 3090,
      "currency": "BRL",
      "closed": true,
      "items": [
        {
          "id": "oi_6rXqKEzuZYcRo2zL",
          "description": "Chaveiro do Tesseract",
          "amount": 2990,
          "quantity": 1,
          "status": "active",
          "created_at": "2019-10-16T17:36:30Z",
          "updated_at": "2019-10-16T17:36:30Z"
        }
      ],
      "customer": {
        "id": "cus_x4nz0P4SbOTA0KBZ",
        "name": "Tony Stark",
        "email": "[email protected]",
        "document": "14582256988",
        "type": "individual",
        "delinquent": false,
        "created_at": "2019-05-02T17:06:01Z",
        "updated_at": "2019-06-12T14:50:18Z",
        "phones": {}
      },
      "shipping": {
        "amount": 100,
        "description": "Stark",
        "recipient_name": "Tony Stark",
        "recipient_phone": "24586787867",
        "address": {
          "city": "Malibu",
          "state": "CA",
          "country": "US",
          "zip_code": "90265",
          "line_1": "10880, Malibu Point, Malibu Central"
        }
      },
      "status": "pending",
      "created_at": "2019-10-16T17:36:30Z",
      "updated_at": "2019-10-16T17:36:30Z",
      "closed_at": "2019-10-16T17:36:30Z",
      "ip": "52.168.67.32",
      "session_id": "322b821a",
      "device": {
        "platform": "ANDROID OS"
      },
      "location": {
        "latitude": "-22.970722",
        "longitude": "43.182365"
      },
      "charges": [
        {
          "id": "ch_K2rJ5nlHwTE4qRDP",
          "code": "YV3RCRIN24",
          "gateway_id": "3b4bb2d9-19b3-4638-a974-0bb914fff472",
          "amount": 3090,
          "status": "pending",
          "currency": "BRL",
          "payment_method": "Pix",
          "created_at": "2019-10-16T17:36:30Z",
          "updated_at": "2019-10-16T17:36:31Z",
          "customer": {
            "id": "cus_x4nz0P4SbOTA0KBZ",
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "14582256988",
            "type": "individual",
            "delinquent": false,
            "created_at": "2019-05-02T17:06:01Z",
            "updated_at": "2019-06-12T14:50:18Z",
            "phones": {}
          },
          "last_transaction": {
            "id": "tran_bZ0N3DjjUzTW68eq",
            "transaction_type": "Pix",
            "gateway_id": "044581ea-67e8-4772-bd56-f10ade5499de",
            "amount": 3090,
            "status": "waiting_payment",
            "success": true,
            "qr_code": "00020101021226480019BR.COM.STONE.QRCODE0108A37F8712020912345678927820 014BR.GOV.BCB.PIX2560sandbox-qrcode.stone.com.br/api/v2/qr/sGY7FyVExavqkzFvkQu MXA28580010BR.COM.ELO0104516002151234567890000000308933BB1100401P520400 00530398654041.005802BR5911STONE TESTE6009SAO PAULO62600522sGY7FyVExavqkzFvkQuMXA50300017BR.GOV.BCB.BRCODE01051.0.0 80500010BR.COM.ELO01100915132023020200030201040613202363043BA1",
             "qr_code_url": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/qrcode.png",
             "additional_information": [
                {
                 "name": "Quantidade",
                 "value": "2"
                }
                ],
            "expires_at": "2020-09-20T00:00:00Z",
            "created_at": "2019-10-16T17:36:30Z",
            "updated_at": "2019-10-16T17:36:30Z",
            "gateway_response": {},
            "antifraud_response": {},
            "metadata": {}
          }
        }
      ],
      "checkouts": []
    }
    

    {
        "id": "ch_Qym35AmhvcZ5goJV",
        "code": "J3X6U97A6O",
        "gateway_id": "16232821",
        "amount": 350,
        "paid_amount": 350,
        "status": "paid",
        "currency": "BRL",
        "payment_method": "pix",
        "paid_at": "2021-12-01T17:55:27Z",
        "created_at": "2022-02-25T18:53:34Z",
        "updated_at": "2022-02-25T18:53:47Z",
        "customer": {
            "id": "cus_DZ5KolmUzSb6P7kE",
            "name": "Tony Stark",
            "email": "[email protected]",
            "code": "MYRRR_ssCUSTOMER_001",
            "document": "1234567890",
            "document_type": "cpf",
            "type": "individual",
            "gender": "male",
            "delinquent": false,
            "address": {
                "id": "addr_o7EPa96T53UYYP2X",
                "line_1": "375, Av. General Justorr, Centro",
                "line_2": "8º anrrdar",
                "zip_code": "20421130",
                "city": "Rio 44de Janeiro",
                "state": "RJ",
                "country": "BR",
                "status": "active",
                "created_at": "2022-02-25T18:53:32Z",
                "updated_at": "2022-02-25T18:53:32Z"
            },
            "created_at": "2022-02-25T18:53:31Z",
            "updated_at": "2022-02-25T18:53:31Z",
            "birthdate": "1994-05-03T00:00:00Z",
            "phones": {
                "home_phone": {
                    "country_code": "55",
                    "number": "000000000",
                    "area_code": "21"
                },
                "mobile_phone": {
                    "country_code": "55",
                    "number": "000000000",
                    "area_code": "21"
                }
            },
            "metadata": {
                "company": "Avsengers"
            }
        },
        "last_transaction": {
            "qr_code": "00020101021226840014br.gov.bcb.pix2562pix-h.stone.com.br/pix/v2/e6157b05-4987-4635-af58-968f165f386d52040000530398654043.505802BR5914EAD PLATAFORMA6014RIO DE JANEIRO62290525086dc8785e1f4ccaafed11fbd63049D7C",
            "qr_code_url": "http://localhost:22886/core/v1/transactions/tran_3Y6P751ASnhb7gje/qrcode?payment_method=pix",
            "expires_at": "2023-10-22T04:43:47Z",
            "end_to_end_id": "E12345678912",
            "payer": {
                "name": "Tony Stark",
                "document_type": "CPF",
                "document": "***.777.888-**",
                "bank_account": {
                    "bank_name": "Pagarme",
                    "ispb": "423452"
                }
            },
            "id": "tran_24zrDeoJf7FXLEp9",
            "transaction_type": "pix",
            "gateway_id": "16232821",
            "amount": 350,
            "status": "paid",
            "success": true,
            "created_at": "2022-02-25T18:53:47Z",
            "updated_at": "2022-02-25T18:53:47Z",
            "gateway_response": {},
            "antifraud_response": {},
            "metadata": {}
        }
    }
    

> ❗️
> 
> Integração de Pagamento via Pix
> 
> 
> -------------------------------------
> 
> Para garantir a criação de pagamento via Pix, é necessário enviar o objeto `customer` contendo as seguintes informações:
> 
> *   `name`
> *   `email`
> *   `document`
> *   `phones`
> 
> Estas informações são essenciais para o processamento bem-sucedido dos pagamentos.

As transações de Pix podem possuir os seguintes status:

| Status | Descrição |
| --- | --- |
| `waiting_payment` | Aguardando pagamento |
| `paid` | Pago |
| `pending_refund` | Aguardando estorno |
| `refunded` | Estornado |
| `with_error` | Com erro |
| `failed` | Falha |</content>
</page>

<page>
  <title>Cartão de crédito</title>
  <url>https://docs.pagar.me/reference/cart%C3%A3o-de-cr%C3%A9dito-1</url>
  <content>    {
        "items": [
            {
                "amount": 2990,
                "description": "Chaveiro do Tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]"
        },
        "payments": [
            {
                "payment_method": "credit_card",
                "credit_card": {
                    "recurrence_cycle": "first",
                    "installments": 1,
                    "statement_descriptor": "AVENGERS",
                    "card": {
                        "number": "4000000000000010",
                        "holder_name": "Tony Stark",
                        "exp_month": 1,
                        "exp_year": 30,
                        "cvv": "3531",
                        "billing_address": {
                            "line_1": "10880, Malibu Point, Malibu Central",
                            "zip_code": "90265",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"                
                        }
                    }
                }
            }
        ]
    }
    

    {
        "id": "or_DNobwn2CpGuvw0zp",
        "code": "GP8KUL0B2D",
        "amount": 2990,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_zd0pe0LRuEsBeQlg",
                "type": "product",
                "description": "Chaveiro do Tesseract",
                "amount": 2990,
                "quantity": 1,
                "status": "active",
                "created_at": "2023-03-03T19:49:14Z",
                "updated_at": "2023-03-03T19:49:14Z"
            }
        ],
        "customer": {
            "id": "cus_NOjl9o0iPFr8wdQp",
            "name": "Tony Stark",
            "email": "[email protected]",
            "delinquent": false,
            "created_at": "2023-03-03T19:38:58Z",
            "updated_at": "2023-03-03T19:38:58Z",
            "phones": {}
        },
        "status": "pending",
        "created_at": "2023-03-03T19:49:14Z",
        "updated_at": "2023-03-03T19:49:15Z",
        "closed_at": "2023-03-03T19:49:14Z",
        "charges": [
            {
                "id": "ch_p4lnAGyU0GT1E9MZ",
                "code": "GP8KUL0B2D",
                "amount": 2990,
                "status": "pending",
                "currency": "BRL",
                "payment_method": "credit_card",
                "funding_source": "prepaid",
                "created_at": "2023-03-03T19:49:14Z",
                "updated_at": "2023-03-03T19:49:15Z",
                "customer": {
                    "id": "cus_NOjl9o0iPFr8wdQp",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "delinquent": false,
                    "created_at": "2023-03-03T19:38:58Z",
                    "updated_at": "2023-03-03T19:38:58Z",
                    "phones": {}
                },
                "last_transaction": {
                    "operation_key": "830608357",
                    "id": "tran_ywqNVaxiorcpde8W",
                    "transaction_type": "credit_card",
                    "gateway_id": "e98d2459-7b0e-43c1-b5e6-adea2c751427",
                    "amount": 2990,
                    "status": "authorized_pending_capture",
                    "success": true,
                    "installments": 1,
                    "funding_source": "prepaid",
                    "statement_descriptor": "AVENGERS",
                    "acquirer_name": "simulator",
                    "acquirer_tid": "806863466",
                    "acquirer_nsu": "66184",
                    "acquirer_auth_code": "890",
                    "acquirer_message": "Transação autorizada com sucesso",
                    "acquirer_return_code": "00",
                    "operation_type": "auth_only",
                    "card": {
                        "id": "card_D5p74jkH15SBYvYq",
                        "first_six_digits": "400000",
                        "last_four_digits": "0010",
                        "brand": "Visa",
                        "holder_name": "Homelander",
                        "exp_month": 12,
                        "exp_year": 2025,
                        "status": "active",
                        "type": "credit",
                        "created_at": "2023-03-03T19:49:14Z",
                        "updated_at": "2023-03-03T19:49:14Z",
                        "billing_address": {
                            "zip_code": "90265",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US",
                            "line_1": "10880, Malibu Point, Malibu Central"
                        }
                    },
                    "payment_type": "PAN",
                    "created_at": "2023-03-03T19:49:15Z",
                    "updated_at": "2023-03-03T19:49:15Z",
                    "gateway_response": {
                        "code": "200",
                        "errors": []
                    },
                    "antifraud_response": {},
                    "metadata": {}
                }
            }
        ],
        "checkouts": []
    }
    

    {
        "items": [
            {
                "amount": 2990,
                "description": "Chaveiro do Tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]"
        },
        "payments": [
            {
                "payment_method": "credit_card",
                "credit_card": {
                    "card": {
                        "number": "4000000000000010",
                        "holder_name": "Tony Stark",
                        "exp_month": 1,
                        "exp_year": 30,
                        "cvv": "3531",
                        "billing_address": {
                            "line_1": "10880, Malibu Point, Malibu Central",
                            "zip_code": "90265",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    },
                    "authentication": {
                        "type": "threed_secure",
                        "threed_secure": {
                            "mpi": "third_party",
                            "eci": "05",
                            "cavv": "BwABBylVaQAAAAFwllVpAAAAAAA=",
                            "ds_transaction_id": "4165037e-2f84-443c-a4e2-0e3285eb911a",
                            "transaction_id": "9345dcf2-57bf-48ee-a495-663cf1fdb760",
                            "version": "2"
                        }
                    }
                }
            }
        ]
    }
    

    {
        "items": [
            {
                "amount": 2990,
                "description": "Chaveiro do Tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]"
        },
        "payments": [
            {
                "payment_method": "credit_card",
                "credit_card": {
                    "installments": 1,
                    "statement_descriptor": "AVENGERS",
                    "network_token": {
                        "number": "4190000000000010",
                        "holder_name": "Tony Stark",
                        "exp_month": 1,
                        "exp_year": 30,
                        "cryptograms": [
                            "ANfQt43bddROAAEnSAMhAAADFA===="
                        ],
                        "billing_address": {
                            "line_1": "10880, Malibu Point, Malibu Central",
                            "zip_code": "90265",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    }
                }
            }
        ]
    }
    

    {
        "id": "or_GNmb7XquVcWdYJjA",
        "code": "R99AK2A1MR",
        "amount": 2990,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_nw6JPwTqDUawXro4",
                "type": "product",
                "description": "Chaveiro do Tesseract",
                "amount": 2990,
                "quantity": 1,
                "status": "active",
                "created_at": "2023-03-03T19:50:27Z",
                "updated_at": "2023-03-03T19:50:27Z"
            }
        ],
        "customer": {
            "id": "cus_NOjl9o0iPFr8wdQp",
            "name": "Tony Stark",
            "email": "[email protected]",
            "delinquent": false,
            "created_at": "2023-03-03T19:38:58Z",
            "updated_at": "2023-03-03T19:38:58Z",
            "phones": {}
        },
        "status": "paid",
        "created_at": "2023-03-03T19:50:27Z",
        "updated_at": "2023-03-03T19:50:28Z",
        "closed_at": "2023-03-03T19:50:27Z",
        "charges": [
            {
                "id": "ch_K6rxrpVHNt59037l",
                "code": "R99AK2A1MR",
                "amount": 2990,
                "paid_amount": 2990,
                "status": "paid",
                "currency": "BRL",
                "payment_method": "credit_card",
                "funding_source": "prepaid",
                "paid_at": "2023-03-03T19:50:28Z",
                "created_at": "2023-03-03T19:50:27Z",
                "updated_at": "2023-03-03T19:50:28Z",
                "customer": {
                    "id": "cus_NOjl9o0iPFr8wdQp",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "delinquent": false,
                    "created_at": "2023-03-03T19:38:58Z",
                    "updated_at": "2023-03-03T19:38:58Z",
                    "phones": {}
                },
                "last_transaction": {
                    "operation_key": "394806072",
                    "id": "tran_ygrZqYlf4tY5ALXp",
                    "transaction_type": "credit_card",
                    "gateway_id": "a89cea2b-4e0b-4f40-82a5-6dc08bcf5f19",
                    "amount": 2990,
                    "status": "captured",
                    "success": true,
                    "funding_source": "prepaid",
                    "installments": 1,
                    "installment_type": "merchant",
                    "statement_descriptor": "AVENGERS",
                    "acquirer_name": "simulator",
                    "acquirer_tid": "275763350",
                    "acquirer_nsu": "70119",
                    "acquirer_auth_code": "293",
                    "acquirer_message": "Transação capturada com sucesso",
                    "acquirer_return_code": "00",
                    "entry_mode": "ecommerce",
                    "operation_type": "auth_and_capture",
                    "network_token": {
                        "id": "nt_AL0yDEQS22UODzGw",
                        "first_six_digits": "419000",
                        "last_four_digits": "0010",
                        "brand": "Visa",
                        "holder_name": "Tony Stark",
                        "exp_month": 1,
                        "exp_year": 2030,
                        "created_at": "2023-03-03T19:38:58Z",
                        "updated_at": "2023-03-03T19:38:58Z",
                        "status": "active",
                        "billing_address": {
                            "street": "Malibu Point",
                            "number": "10880",
                            "zip_code": "90265",
                            "neighborhood": "Malibu Central",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    },
                    "payment_type": "Token",
                    "created_at": "2023-03-03T19:50:27Z",
                    "updated_at": "2023-03-03T19:50:27Z",
                    "gateway_response": {
                        "code": "200",
                        "errors": []
                    },
                    "antifraud_response": {},
                    "metadata": {}
                }
            }
        ]
    }</content>
</page>

<page>
  <title>Boleto</title>
  <url>https://docs.pagar.me/reference/boleto-1</url>
  <content>    {
        "items": [
            {
                "amount": 2990,
                "description": "Chaveiro do Tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]" ,
            "document_type": "CPF",
            "document": "93095135270",
            "type": "Individual",
            "address": {
        	"line_1": "375, Av. General Justo, Centro",
        	"line_2": "8º andar",
        	"zip_code": "20021130",
        	"city": "Rio de Janeiro",
        	"state": "RJ",
        	"country": "BR"
        }
        },
        "shipping": {
            "amount": 100,
            "description": "Stark",
            "recipient_name": "Tony Stark",
            "recipient_phone": "24586787867",
            "address": {
                "line_1": "10880, Malibu Point, Malibu Central",
                "zip_code": "90265",
                "city": "Malibu",
                "state": "CA",
                "country": "US"    
            }
        },
        "payments": [
            {
                "payment_method": "boleto",
          "boleto": {
            "instructions": "Pagar até o vencimento",
            "due_at": "2022-09-20T00:00:00Z",
            "document_number": "123",
            "type": "DM"            
                        }
                    }
               
            
        ]
    }
    

    {
      "id": "or_56GXnk6T0eU88qMm",
      "code": "YV3RCRIN24",
      "amount": 3090,
      "currency": "BRL",
      "closed": true,
      "items": [
        {
          "id": "oi_6rXqKEzuZYcRo2zL",
          "description": "Chaveiro do Tesseract",
          "amount": 2990,
          "quantity": 1,
          "status": "active",
          "created_at": "2019-10-16T17:36:30Z",
          "updated_at": "2019-10-16T17:36:30Z"
        }
      ],
      "customer": {
        "id": "cus_x4nz0P4SbOTA0KBZ",
        "name": "Tony Stark",
        "email": "[email protected]",
        "document": "14582256988",
        "type": "individual",
        "delinquent": false,
        "created_at": "2019-05-02T17:06:01Z",
        "updated_at": "2019-06-12T14:50:18Z",
        "phones": {}
      },
      "shipping": {
        "amount": 100,
        "description": "Stark",
        "recipient_name": "Tony Stark",
        "recipient_phone": "24586787867",
        "address": {
          "city": "Malibu",
          "state": "CA",
          "country": "US",
          "zip_code": "90265",
          "line_1": "10880, Malibu Point, Malibu Central"
        }
      },
      "status": "pending",
      "created_at": "2019-10-16T17:36:30Z",
      "updated_at": "2019-10-16T17:36:30Z",
      "closed_at": "2019-10-16T17:36:30Z",
      "ip": "52.168.67.32",
      "session_id": "322b821a",
      "device": {
        "platform": "ANDROID OS"
      },
      "location": {
        "latitude": "-22.970722",
        "longitude": "43.182365"
      },
      "charges": [
        {
          "id": "ch_K2rJ5nlHwTE4qRDP",
          "code": "YV3RCRIN24",
          "gateway_id": "3b4bb2d9-19b3-4638-a974-0bb914fff472",
          "amount": 3090,
          "status": "pending",
          "currency": "BRL",
          "payment_method": "boleto",
          "created_at": "2019-10-16T17:36:30Z",
          "updated_at": "2019-10-16T17:36:31Z",
          "customer": {
            "id": "cus_x4nz0P4SbOTA0KBZ",
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "14582256988",
            "type": "individual",
            "delinquent": false,
            "created_at": "2019-05-02T17:06:01Z",
            "updated_at": "2019-06-12T14:50:18Z",
            "phones": {}
          },
          "last_transaction": {
            "id": "tran_bZ0N3DjjUzTW68eq",
            "transaction_type": "boleto",
            "gateway_id": "044581ea-67e8-4772-bd56-f10ade5499de",
            "amount": 3090,
            "status": "generated",
            "success": true,
            "url": "https://sandbox.pagar.me/Boleto/ViewBoleto.aspx?044581ea-67e8-4772-bd56-f10ade5499de",
            "pdf": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/pdf",
            "line": "34191.75462 24615.781234 41234.510000 3 83840000003090",
            "barcode": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/barcode",
            "qr_code": "https://api.pagar.me/core/v1/transactions/tran_bZ0N3DjjUzTW68eq/qrcode",
            "nosso_numero": "46246157",
            "type": "DM",
            "document_number": "123",
            "instructions": "Pagar até o vencimento",
            "due_at": "2020-09-20T00:00:00Z",
            "created_at": "2019-10-16T17:36:30Z",
            "updated_at": "2019-10-16T17:36:30Z",
            "gateway_response": {
              "code": "201"
            },
            "antifraud_response": {}
          }
        }
      ],
      "checkouts": []
    }
    

    {
        "items": [
            {
                "amount": 500,
                "description": "Chaveiro do Tesseract",
                "quantity": 1,
                "code": "123"
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "21811216137",
            "type": "individual",
            "address": {
                "line_1": "375, Av. General Justo, Centro",
                "line_2": "8º andar",
                "zip_code": "20021130",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BR"
            },
            "phones": {
                "home_phone": {
                    "country_code": "55",
                    "area_code": "21",
                    "number": "000000000"
                },
                "mobile_phone": {
                    "country_code": "55",
                    "area_code": "21",
                    "number": "000000000"
                }
            }
        },
        "payments": [
            {
                "payment_method": "boleto",
                "boleto": {
                    "instructions": "Pagar até o vencimento",
                    "due_at": "2023-07-24T00:00:00Z",
                    "document_number": "123",
                    "type": "DM",
                    "interest": {
                        "days": "2",
                        "type": "percentage",
                        "amount": 20
                    },
                    "fine": {
                        "days": "2",
                        "type": "flat",
                        "amount": 10
                    }
                }
            }
        ]
    }
    

    {
        "id": "or_eKd6Nk7hKyFd2BMl",
        "code": "849WF0YCW7",
        "amount": 500,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_8pazKKpFnpS9KzE7",
                "type": "product",
                "description": "Chaveiro do Tesseract",
                "amount": 500,
                "quantity": 1,
                "status": "active",
                "created_at": "2022-10-13T20:24:39Z",
                "updated_at": "2022-10-13T20:24:39Z",
                "code": "123"
            }
        ],
        "customer": {
            "id": "cus_3LVRrkoUVF8AlrY0",
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "21811216137",
            "document_type": "cpf",
            "type": "individual",
            "delinquent": false,
            "address": {
                "id": "addr_KgWJNxBsKsQG7PDj",
                "line_1": "375, Av. General Justo, Centro",
                "line_2": "8º andar",
                "zip_code": "20021130",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BR",
                "status": "active",
                "created_at": "2021-07-20T14:25:18Z",
                "updated_at": "2022-10-13T19:52:19Z"
            },
            "created_at": "2020-11-23T17:55:51Z",
            "updated_at": "2022-10-13T19:52:19Z",
            "phones": {
                "home_phone": {
                    "country_code": "55",
                    "number": "000000000",
                    "area_code": "21"
                },
                "mobile_phone": {
                    "country_code": "55",
                    "number": "000000000",
                    "area_code": "21"
                }
            }
        },
        "status": "pending",
        "created_at": "2022-10-13T20:24:39Z",
        "updated_at": "2022-10-13T20:24:39Z",
        "closed_at": "2022-10-13T20:24:39Z",
        "charges": [
            {
                "id": "ch_PA50xD0GSaCZxrNB",
                "code": "849WF0YCW7",
                "gateway_id": "18752786",
                "amount": 500,
                "status": "pending",
                "currency": "BRL",
                "payment_method": "boleto",
                "created_at": "2022-10-13T20:24:39Z",
                "updated_at": "2022-10-13T20:24:39Z",
                "customer": {
                    "id": "cus_3LVRrkoUVF8AlrY0",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "document": "21811216137",
                    "document_type": "cpf",
                    "type": "individual",
                    "delinquent": false,
                    "address": {
                        "id": "addr_KgWJNxBsKsQG7PDj",
                        "line_1": "375, Av. General Justo, Centro",
                        "line_2": "8º andar",
                        "zip_code": "20021130",
                        "city": "Rio de Janeiro",
                        "state": "RJ",
                        "country": "BR",
                        "status": "active",
                        "created_at": "2021-07-20T14:25:18Z",
                        "updated_at": "2022-10-13T19:52:19Z"
                    },
                    "created_at": "2020-11-23T17:55:51Z",
                    "updated_at": "2022-10-13T19:52:19Z",
                    "phones": {
                        "home_phone": {
                            "country_code": "55",
                            "number": "000000000",
                            "area_code": "21"
                        },
                        "mobile_phone": {
                            "country_code": "55",
                            "number": "000000000",
                            "area_code": "21"
                        }
                    }
                },
                "last_transaction": {
                    "id": "tran_naLPrX2COIlEAol9",
                    "transaction_type": "boleto",
                    "gateway_id": "18752786",
                    "amount": 500,
                    "status": "generated",
                    "success": true,
                    "url": "https://pagar.me",
                    "pdf": "https://pagar.me?format=pdf",
                    "line": "1234 5678",
                    "barcode": "https://api.pagar.me/core/v5/transactions/tran_naLPrX2COIlEAol9/barcode",
                    "qr_code": "https://api.pagar.me/core/v5/transactions/tran_naLPrX2COIlEAol9/qrcode",
                    "nosso_numero": "18752786",
                    "type": "DM",
                    "bank": "198",
                    "document_number": "18752786",
                    "instructions": "Pagar até o vencimento",
                    "due_at": "2023-07-24T23:59:59Z",
                    "interest": {
                        "days": 2,
                        "type": "percentage",
                        "amount": 20.0
                    },
                    "fine": {
                        "days": 2,
                        "type": "flat",
                        "amount": 10.0
                    },
                    "created_at": "2022-10-13T20:24:39Z",
                    "updated_at": "2022-10-13T20:24:39Z",
                    "gateway_response": {
                        "code": "200"
                    },
                    "antifraud_response": {}
                }
            }
        ],
        "checkouts": []
    }</content>
</page>

<page>
  <title>Voucher</title>
  <url>https://docs.pagar.me/reference/voucher-1</url>
  <content>Para criar um [pedido](https://docs.pagar.me/reference#criar-pedido-2) com **voucher**, devemos incluir o objeto `voucher` dentro do nó `payment`, assim como a propriedade `"payment_method": "voucher"`. O objeto `voucher` contém as seguintes propriedades:

> 🚧
> 
> Funcionalidade disponível apenas para clientes Gateway
> 
> 
> ------------------------------------------------------------
> 
> As funcionalidades apresentadas abaixo estão disponível apenas para clientes gateway.

> 🚧
> 
> Bandeiras
> 
> 
> ---------------
> 
> Possibilitamos a integração com as principais bandeiras do mercado: **VR benefícios**, **Sodexo** e **Ticket**.
> 
> **Alelo:** Devido ao término do contrato entre a Cielo e a Alelo, não é possível realizar novas integrações com essa bandeira de voucher.

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `statement_descriptor` | **string** | _Texto exibido na fatura do cartão_. Max: 22 caracteres. |
| `card`, `card_id` ou `card_token` | **object** | _Cartão de crédito_.  
`card_id` é o identificador do cartão de um cliente.  
`***card_token***` é o token do cartão gerado pelo checkout transparente. [Saiba mais sobre cartões](https://docs.pagar.me/reference#pagarme-js). |
| `card.holder_document` | **string** | _Número do documento do portador do cartão_. Este campo deverá ser enviado dentro do objeto `card` e é **obrigatório** para voucher. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento_.[Saiba mais sobre metadata](https://docs.pagar.me/reference#metadata-1). |

    {
    	"items": [{
    			"amount": 2990,
    			"description": "Chaveiro do Tesseract",
    			"quantity": 1
    		}
    	],
    	"customer": {
    		"name": "Tony Stark",
    		"email": "[email protected]"
    	},
    	"payments": [{
    			"payment_method": "voucher",
    			"voucher": {
    				"statement_descriptor": "AVENGERS",
    				"card": {
    					"number": "4000000000000010",
    					"holder_name": "Tony Stark",
    					"holder_document": "93095135270",
    					"exp_month": 1,
    					"exp_year": 30,
    					"cvv": "351",
    					"billing_address": {
    						"line_1": "10880, Malibu Point, Malibu Central",
    						"zip_code": "90265",
    						"city": "Malibu",
    						"state": "CA",
    						"country": "US"
    					}
    				}
    			}
    		}
    	]
    }
    

    {
    	"id": "or_rW4pw5yck1fwdD7O",
    	"code": "0WX7TE6BJ6",
    	"amount": 2990,
    	"currency": "BRL",
    	"closed": true,
    	"items": [{
    			"id": "oi_D3XEBzJuE9hABb1a",
    			"description": "Chaveiro do Tesseract",
    			"amount": 2990,
    			"quantity": 1,
    			"status": "active",
    			"created_at": "2019-01-22T14:20:18Z",
    			"updated_at": "2019-01-22T14:20:18Z",
    			"order": {
    				"id": "or_rW4pw5yck1fwdD7O",
    				"code": "0WX7TE6BJ6",
    				"amount": 2990,
    				"closed": true,
    				"created_at": "2019-01-22T14:20:18Z",
    				"updated_at": "2019-01-22T14:20:19Z",
    				"closed_at": "2019-01-22T14:20:18Z",
    				"currency": "BRL",
    				"status": "paid",
    				"customer_id": "cus_n3bqEzdsZUmNA7Qp",
    				"items": [{
    						"id": "oi_D3XEBzJuE9hABb1a",
    						"description": "Chaveiro do Tesseract",
    						"amount": 2990,
    						"quantity": 1,
    						"status": "active"
    					}
    				]
    			}
    		}
    	],
    	"customer": {
    		"id": "cus_n3bqEzdsZUmNA7Qp",
    		"name": "Tony Stark",
    		"email": "[email protected]",
    		"delinquent": false,
    		"address": {
    			"id": "addr_yEd4rG0HJNupdX2m",
    			"line_1": "375, Av. General Justo, Centro",
    			"line_2": "8º andar",
    			"zip_code": "20021130",
    			"city": "Rio de Janeiro",
    			"state": "RJ",
    			"country": "BR",
    			"status": "active",
    			"created_at": "2019-01-21T18:44:17Z",
    			"updated_at": "2019-01-21T18:44:17Z",
    			"metadata": {
    				"id": "my_address_id"
    			}
    		},
    		"created_at": "2019-01-21T18:36:30Z",
    		"updated_at": "2019-01-21T18:44:17Z",
    		"phones": {}
    	},
    	"status": "paid",
    	"created_at": "2019-01-22T14:20:18Z",
    	"updated_at": "2019-01-22T14:20:19Z",
    	"closed_at": "2019-01-22T14:20:18Z",
    	"charges": [{
    			"id": "ch_dZWwGNQIgCgXyO14",
    			"code": "0WX7TE6BJ6",
    			"amount": 2990,
    			"paid_amount": 2990,
    			"status": "paid",
    			"currency": "BRL",
    			"payment_method": "voucher",
    			"paid_at": "2019-01-22T14:20:19Z",
    			"created_at": "2019-01-22T14:20:18Z",
    			"updated_at": "2019-01-22T14:20:18Z",
    			"customer": {
    				"id": "cus_n3bqEzdsZUmNA7Qp",
    				"name": "Tony Stark",
    				"email": "[email protected]",
    				"delinquent": false,
    				"address": {
    					"id": "addr_yEd4rG0HJNupdX2m",
    					"line_1": "375, Av. General Justo, Centro",
    					"line_2": "8º andar",
    					"zip_code": "20021130",
    					"city": "Rio de Janeiro",
    					"state": "RJ",
    					"country": "BR",
    					"status": "active",
    					"created_at": "2019-01-21T18:44:17Z",
    					"updated_at": "2019-01-21T18:44:17Z",
    					"metadata": {
    						"id": "my_address_id"
    					}
    				},
    				"created_at": "2019-01-21T18:36:30Z",
    				"updated_at": "2019-01-21T18:44:17Z",
    				"phones": {}
    			},
    			"last_transaction": {
    				"id": "tran_x30Ml3TVkUan61vl",
    				"transaction_type": "voucher",
    				"gateway_id": "abe20e9d-fc1f-4458-86c0-b5e21a172ed8",
    				"amount": 2990,
    				"status": "captured",
    				"success": true,
    				"statement_descriptor": "AVENGERS",
    				"acquirer_tid": "f55f99cd-fdc0-4271-a8f8-5be39c496fce",
    				"acquirer_nsu": "f55f99cd-fdc0-4271-a8f8-5be39c496fce",
    				"acquirer_message": "Transação capturada com sucesso",
    				"acquirer_return_code": "00",
    				"operation_type": "auth_and_capture",
    				"card": {
    					"id": "card_apxQeXJsV2fGVwPL",
    					"first_six_digits": "400000",
    					"last_four_digits": "0010",
    					"brand": "Visa",
    					"holder_name": "Tony Stark",
    					"holder_document": "93095135270",
    					"exp_month": 1,
    					"exp_year": 2030,
    					"status": "active",
    					"type": "credit",
    					"created_at": "2019-01-21T18:37:48Z",
    					"updated_at": "2019-01-22T14:20:18Z",
    					"billing_address": {
    						"zip_code": "90265",
    						"city": "Malibu",
    						"state": "CA",
    						"country": "US",
    						"line_1": "10880, Malibu Point, Malibu Central"
    					},
    					"customer": {
    						"id": "cus_n3bqEzdsZUmNA7Qp",
    						"name": "Tony Stark",
    						"email": "[email protected]",
    						"delinquent": false,
    						"address": {
    							"id": "addr_yEd4rG0HJNupdX2m",
    							"line_1": "375, Av. General Justo, Centro",
    							"line_2": "8º andar",
    							"zip_code": "20021130",
    							"city": "Rio de Janeiro",
    							"state": "RJ",
    							"country": "BR",
    							"status": "active",
    							"created_at": "2019-01-21T18:44:17Z",
    							"updated_at": "2019-01-21T18:44:17Z",
    							"metadata": {
    								"id": "my_address_id"
    							}
    						},
    						"created_at": "2019-01-21T18:36:30Z",
    						"updated_at": "2019-01-21T18:44:17Z",
    						"phones": {}
    					}
    				},
    				"created_at": "2019-01-22T14:20:19Z",
    				"updated_at": "2019-01-22T14:20:19Z",
    				"gateway_response": {
    					"code": "200"
    				}
    			}
    		}
    	],
    	"checkouts": []
    }
    

As transações de Voucher podem possuir os seguintes status:

| Status | Descrição |
| --- | --- |
| `authorized_pending_capture` | Autorizada pendente de captura |
| `not_authorized` | Não autorizada |
| `captured` | Capturada |
| `partial_capture` | Capturada parcialmente |
| `refunded` | Estornada |
| `voided` | Cancelada |
| `partial_refunded` | Estornada parcialmente |
| `partial_void` | Cancelada parcialemente |
| `error_on_voiding` | Erro no cancelamento |
| `error_on_refunding` | Erro no estorno |
| `waiting_cancellation` | Aguardando cancelamento |
| `with_error` | Com erro |
| `failed` | Falha |</content>
</page>

<page>
  <title>Cash</title>
  <url>https://docs.pagar.me/reference/cash-2</url>
  <content>Para criar um [pedido](https://docs.pagar.me/reference#criar-pedido-2) com **cash**, devemos incluir o objeto `cash` dentro do nó `payment`, assim como a propriedade `"payment_method": "cash"`. O objeto `cash` contém as seguintes propriedades:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `description` | **string** | _Descrição do pagamento_. Max: 256 caracteres. |
| `confirm` | **boolean** | _Indica se o pagamento será confirmado no ato da criação da cobrança ou se deve ser confirmado posteriormente_. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento_.[Saiba mais sobre metadata](https://docs.pagar.me/reference#metadata-1). |

    {
    	"items": [{
    			"amount": 2990,
    			"description": "Chaveiro do Tesseract",
    			"quantity": 1
    		}
    	],
    	"customer": {
    		"name": "Tony Stark",
    		"email": "[email protected]"
    	},
    	"payments": [{
    			"payment_method": "cash",
    			"cash": {
    				"description": "Teste",
    				"confirm": false
    			}
    		}
    	]
    }
    

    {
        "id": "ch_1GWo9VyiBJs4AOBy",
        "code": "6OY1HPSX3L",
        "amount": 1490,
        "paid_amount": 1490,
        "status": "pending",
        "currency": "BRL",
        "payment_method": "cash",
        "created_at": "2018-06-28T18:58:03Z",
        "updated_at": "2018-06-28T18:58:03Z",
        "customer": {
            "id": "cus_qGW6pRYCrU5qwPm2",
            "name": "Tony Stark",
            "email": "[email protected]",
            "delinquent": false,
            "created_at": "2018-06-28T18:58:03Z",
            "updated_at": "2018-06-28T18:58:03Z",
            "phones": {}
        },
        "last_transaction": {
            "description": "Teste",
            "id": "tran_4rKBYmDT9TxWyJgn",
            "transaction_type": "cash",
            "amount": 1490,
            "status": "pending",
            "success": true,
            "created_at": "2018-06-28T18:58:05Z",
            "updated_at": "2018-06-28T18:58:05Z",
            "gateway_response": {}
        },
        "metadata": {
            "code": "123"
        }
    }
    

As transações de Cash podem pussuir os seguintes status:

| Status | Descrição |
| --- | --- |
| `pending` | Pendente |
| `paid` | Paga |

*   [Table of Contents](#)
*   *   [Status das transações de Cash (Transaction)](#status-das-transa%C3%A7%C3%B5es-de-cash-transaction)</content>
</page>

<page>
  <title>Google Pay™</title>
  <url>https://docs.pagar.me/reference/google-paytm-api</url>
  <content>A API Google Pay retorna as formas de pagamento em um payload `PaymentMethodToken` assinado e criptografado. As informações retornadas são cartões com PAN ou tokenizados que têm criptogramas e PANs de dispositivos.

Para mais informações sobre os campos do token, acesse a [documentação Google](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography?hl=pt-br#payment-method-token-structure).

Veja a seguir uma resposta do token da forma de pagamento no JSON:

    {
      "protocolVersion":"ECv2",
      "signature":"MEQCIH6Q4OwQ0jAceFEkGF0JID6sJNXxOEi4r+mA7biRxqBQAiAondqoUpU/bdsrAOpZIsrHQS9nwiiNwOrr24RyPeHA0Q\u003d\u003d",
      "intermediateSigningKey":{
        "signedKey": "{\"keyExpiration\":\"1542323393147\",\"keyValue\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/1+3HBVSbdv+j7NaArdgMyoSAM43yRydzqdg1TxodSzA96Dj4Mc1EiKroxxunavVIvdxGnJeFViTzFvzFRxyCw\\u003d\\u003d\"}",
        "signatures": ["MEYCIQCO2EIi48s8VTH+ilMEpoXLFfkxAwHjfPSCVED/QDSHmQIhALLJmrUlNAY8hDQRV/y1iKZGsWpeNmIP+z+tCQHQxP0v"]
      },
      "signedMessage":"{\"tag\":\"jpGz1F1Bcoi/fCNxI9n7Qrsw7i7KHrGtTf3NrRclt+U\\u003d\",\"ephemeralPublicKey\":\"BJatyFvFPPD21l8/uLP46Ta1hsKHndf8Z+tAgk+DEPQgYTkhHy19cF3h/bXs0tWTmZtnNm+vlVrKbRU9K8+7cZs\\u003d\",\"encryptedMessage\":\"mKOoXwi8OavZ\"}"
    }
    

> 🚧
> 
> **Atenção**
> 
> 
> -----------------
> 
> GooglePay está disponível apenas para modelo de negócio do tipo Gateway.
> 
> Cliente que utilizam o modelo PSP ainda não está disponível.

A autorização com o token do Google Pay acontece da mesma maneira que de um cartão, fornecendo os dados do token recebido pelo Google.

Para criar uma cobrança ou um pedido com Google Pay, devemos incluir o objeto `credit_card` dentro do nó `payments`, assim como a propriedade `"payment_method": "credit_card"`. Além disso, o objeto `credit_card` deve conter os atributos do `payload`. O objeto `payload` possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `type` | **string** | _Determina o tipo de token. Para Google Pay deve-se enviar `**google_pay**`._ |
| `google_pay` | **object** | _Campos a serem enviados para pagamento com Google Pay_ |

O objeto `google_pay` possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `data` | **string** | _Dados de pagamento criptografados. Corresponde ao encryptedMessage do token Google._ |
| `signature` | **string** | _Assinatura dos dados de pagamento. Verifica se a origem da mensagem é o Google. Corresponde ao `signature` do token Google._ |
| `intermediate_signing_key` | **object** | _Objeto JSON serializado codificado em UTF-8 que contém os seguintes valores:_ |
| `signed_key` | **string** | _Uma mensagem codificada em Base64 com a descrição de pagamento da chave._ |
| `signatures` | **string** | _Verifica se a origem da chave de assinatura intermediária é o Google. É codificada em Base64 e criada usando o ECDSA._ |
| `version` | **string** | _Informação sobre a versão do token._ Único valor aceito é **EC\_v2** |
| `signed_message` | **object** | _Objeto JSON serializado codificado em UTF-8 que contém os seguintes valores:_ |
| `encryptedMessage` | **string** | _Uma mensagem criptografada e codificada em Base64 que contém informações de pagamento e outros [campos de segurança](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography?hl=pt-br#encrypted-message)._ |
| `ephemeralPublicKey` | **string** | _Uma chave pública temporária e codificada em Base64 que está associada à chave privada para criptografar a mensagem no formato de ponto descompactado. Para mais informações, consulte [Formato de chave pública de criptografia](https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography?hl=pt-br#public-key-format)._ |
| `tag` | **string** | _Um MAC codificado em Base64 de `encryptedMessage`._ |
| `merchant_identifier` | **string** | _Identificador da loja no Pagar.me. O mesmo identificador que foi configurado no aplicativo para criar o token de pagamento._ |

> 🚧
> 
> Atenção!
> 
> 
> --------------
> 
> Todos os campos do objeto `google_pay` são obrigatórios caso a transação seja feita por esse meio de pagamento!
> 
> **Não** manipule os campos!

    {
    	"items": [
    		{
    			"amount": 105173,
    			"description": "Chaveiro do Tesseract",
    			"quantity": 1
    		}
    	],
    	"customer": {
    		"name": "Tony Stark",
    		"email": "[email protected]"
    	},
    	"payments": [
    		{
    			"amount": 105173,
    			"payment_method": "credit_card",
    			"credit_card": {
    				"statement_descriptor": "AVENGERS",
    				"payload": {
    					"type": "google_pay",
    					"google_pay": {
    						"signature": "MEUCIQD+nIwKFkBK9sd4aB4EOC/ADOhn1DUjc3zQJDVQE4mA3AIgLjljobb3YcclsxEqVRHUzW9xLvSs0yuatzkR8E0WAiM=",
    						"intermediate_signing_key": {
    							"signed_key": "{\"keyValue\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEZX978i9NWBAONSBr3WjGF5VS4TenlDVRQrgKMtSfuR5dSjf3DXotumaRrR7Humeg3dt95S7fkjc2AeMkww9HPA\\u003d\\u003d\",\"keyExpiration\":\"1691085271820\"}",
    							"signatures": [
    								"MEYCIQCfLBI0d2EpAvEcEHeW7eX4E5JLTHxxs+iNgy470w5fPAIhAMWBaIUzaSwCgz1feUl86HLZ1oXYzBhkxa3t1MCSfTYl"
    							]
    						},
    						"version": "ECv2",
    						"signed_message": "{\"encryptedMessage\":\"fRPuSGxG6IUsZqXO5nnAKASVSxQu9dG2G6+0IQbP6mBehIzJboFnKJeozIu4t5rQaKnyL08OA5VX96m4MBewuM/YIubKF87qtjkIS7t/3hYtTHxGj01Z8TWSljeMyApCdaDBsvgo1/zRe4n7WSsm8ka4MpNEaBYz+BWcc0AMQb2ixt82TCrlcvv5NBe2jezdiN55Oo10eW6JZdb1e7Ss/zWVPOQe6iWyeq4fwMjuAMBwcNKF4ZPz5PD1g21J70f1DBSV1zfyOKotgSndZFqBEEfq7i2Lvf6Ps7a0u+DtHBBZU1v5j0WiQqeIVdcY1lSSajSboQg/F2NfREPwhk4psP4e4Sj71VGZ1pkoEgIIs9xAI7y5BlGuW+S+7QUhe6bsrBL2fA2jfJXGxn2hxU2vZ77dZ6xXlTetOtaTQxEU2yD7JTw5mKI9pL3oq6lkVMSKx/L8nJnQFcSCjCdM1Q15f/UgxXzA4w9lMYJlIO3HRh/y7KdQYYoTe2N7CsrSZcmm08oSsAe1kzHHLMGA7VNNxNkyqH0DzEv8ThS0bBb2HWxN2FVZbrFIJkmJa0uQKmwoUPYQ/Ri2/2TmnsG0\",\"ephemeralPublicKey\":\"BEVFEhmx/XPsGjuV/+/i8pAGafhiiHkdOzFcOGl8SeGmLVD3TcPSn52KdDqGYO42MntVk4bjdRCjJrpOqkxGo44\\u003d\",\"tag\":\"9eVSs9PLlZX8hyKAvF5lRZPdy9YtREhzJv+fzqfynXU\\u003d\"}",
                "merchant_identifier": "acc_xyzadasdw",
    					}
    				}
    			}
    		}
    	]
    }
    

    {
        "id": "or_38KZgonh9EcrPZEQ",
        "code": "2ZRLTGNI7Y",
        "amount": 105173,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_5O7YMOaU8vSjNmDr",
                "type": "product",
                "description": "Chaveiro do Tesseract",
                "amount": 105173,
                "quantity": 1,
                "status": "active",
                "created_at": "2023-08-08T13:53:01Z",
                "updated_at": "2023-08-08T13:53:01Z"
            }
        ],
        "customer": {
            "id": "cus_zyMgpnmuQvImBErW",
            "name": "Tony Stark",
            "email": "[email protected]",
            "delinquent": false,
            "created_at": "2023-08-04T17:58:57Z",
            "updated_at": "2023-08-04T17:58:57Z",
            "phones": {}
        },
        "status": "paid",
        "created_at": "2023-08-08T13:53:01Z",
        "updated_at": "2023-08-08T13:53:05Z",
        "closed_at": "2023-08-08T13:53:01Z",
        "charges": [
            {
                "id": "ch_g3kN6XWIAZUVY9Xz",
                "code": "2ZRLTGNI7Y",
                "amount": 105173,
                "status": "paid",
                "currency": "BRL",
                "payment_method": "credit_card",
                "created_at": "2023-08-08T13:53:02Z",
                "updated_at": "2023-08-08T13:53:05Z",
                "customer": {
                    "id": "cus_zyMgpnmuQvImBErW",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "delinquent": false,
                    "created_at": "2023-08-04T17:58:57Z",
                    "updated_at": "2023-08-04T17:58:57Z",
                    "phones": {}
                },
                "last_transaction": {
                    "id": "tran_aP9wR6jt3tbKRgGJ",
                    "transaction_type": "credit_card",
                    "amount": 105173,
                    "status": "paid",
                    "success": false,
                    "operation_type": "auth_and_capture",
                    "created_at": "2023-08-08T13:53:05Z",
                    "updated_at": "2023-08-08T13:53:05Z",
                    "gateway_response": {
                        "code": "200"
                    },
                    "antifraud_response": {},
                    "metadata": {}
                }
            }
        ],
        "checkouts": []
    }</content>
</page>

<page>
  <title>SafetyPay</title>
  <url>https://docs.pagar.me/reference/safetypay-1</url>
  <content>Para criar um [pedido](https://docs.pagar.me/reference#criar-pedido-2) com **SafetyPay**, devemos incluir a propriedade `"payment_method": "safetypay"` dentro do nó `payment`.

> 🚧
> 
> Funcionalidade disponível apenas para clientes Gateway
> 
> 
> ------------------------------------------------------------
> 
> As funcionalidades apresentadas abaixo estão disponível apenas para clientes gateway

    {
    	"items": [{
    			"amount": 1000,
    			"description": "Chaveiro do Tesseract",
    			"quantity": 1
    		}
    	],
    	"customer": {
    		"name": "Tony Stark",
    		"email": "[email protected]",
    		"type": "individual",
    		"document": "12345678900",
    		"phones": {
    			"home_phone": {
    				"country_code": "55",
    				"area_code": "21",
    				"number": "32659874"
    			},
    			"mobile_phone": {
    				"country_code": "55",
    				"area_code": "21",
    				"number": "998563214"
    			}
    		}
    	},
    	"payments": [{
    			"payment_method": "safetypay"
    		}
    	]
    }
    

    {
    	"id": "or_l02Adj6Ytgs5debP",
    	"code": "4LJQINWC1Y",
    	"amount": 1500,
    	"currency": "BRL",
    	"closed": true,
    	"items": [{
    			"id": "oi_NV2K6KOSxIDZ6Z0a",
    			"description": "Chaveiro do Tesseract",
    			"amount": 1000,
    			"quantity": 1,
    			"status": "active",
    			"created_at": "2019-01-21T18:56:14Z",
    			"updated_at": "2019-01-21T18:56:14Z",
    			"order": {
    				"id": "or_l02Adj6Ytgs5debP",
    				"code": "4LJQINWC1Y",
    				"amount": 1500,
    				"closed": true,
    				"created_at": "2019-01-21T18:56:14Z",
    				"updated_at": "2019-01-21T18:56:14Z",
    				"closed_at": "2019-01-21T18:56:14Z",
    				"currency": "BRL",
    				"status": "pending",
    				"customer_id": "cus_rN18K4KIMKcYW2RV",
    				"metadata": {
    					"nfeio_issuance_enabled": "true",
    					"charge_failed_cancellation_enabled": "true",
    					"charge_cancellation_enabled": "false",
    					"nfeio_cancellation_enabled": "true"
    				},
    				"items": [{
    						"id": "oi_NV2K6KOSxIDZ6Z0a",
    						"description": "Chaveiro do Tesseract",
    						"amount": 1000,
    						"quantity": 1,
    						"status": "active"
    					}, {
    						"id": "oi_JRv3j71cyGUa90Pk",
    						"description": "Chaveiro do Tesseract2",
    						"amount": 500,
    						"quantity": 1,
    						"status": "active"
    					}
    				]
    			}
    		}
    	],
    	"customer": {
    		"id": "cus_rN18K4KIMKcYW2RV",
    		"name": "Tony Stark",
    		"email": "[email protected]",
    		"document": "12345678900",
    		"type": "individual",
    		"delinquent": false,
    		"created_at": "2019-01-21T18:55:22Z",
    		"updated_at": "2019-01-21T18:55:22Z",
    		"phones": {
    			"home_phone": {
    				"country_code": "55",
    				"number": "32659874",
    				"area_code": "21"
    			},
    			"mobile_phone": {
    				"country_code": "55",
    				"number": "998563214",
    				"area_code": "21"
    			}
    		}
    	},
    	"status": "pending",
    	"created_at": "2019-01-21T18:56:14Z",
    	"updated_at": "2019-01-21T18:56:14Z",
    	"closed_at": "2019-01-21T18:56:14Z",
    	"charges": [{
    			"id": "ch_JpXR7Q8Fg4u4YaeD",
    			"code": "4LJQINWC1Y",
    			"amount": 1500,
    			"status": "pending",
    			"currency": "BRL",
    			"payment_method": "safetypay",
    			"created_at": "2019-01-21T18:56:14Z",
    			"updated_at": "2019-01-21T18:56:14Z",
    			"customer": {
    				"id": "cus_rN18K4KIMKcYW2RV",
    				"name": "Tony Stark",
    				"email": "[email protected]",
    				"document": "12345678900",
    				"type": "individual",
    				"delinquent": false,
    				"created_at": "2019-01-21T18:55:22Z",
    				"updated_at": "2019-01-21T18:55:22Z",
    				"phones": {
    					"home_phone": {
    						"country_code": "55",
    						"number": "32659874",
    						"area_code": "21"
    					},
    					"mobile_phone": {
    						"country_code": "55",
    						"number": "998563214",
    						"area_code": "21"
    					}
    				}
    			},
    			"last_transaction": {
    				"url": "https://sandbox-gateway.safetypay.com/Express4/Checkout/index?TokenID=6c60d19c-64bf-4a81-96d1-ad46bdba9764",
    				"safetypay_tid": "e09f39ad33fc4c3b",
    				"id": "tran_2vrxYNnhZpSQazQ5",
    				"transaction_type": "safetypay",
    				"gateway_id": "e09f39ad-33fc-4c3b-a88a-103df99c3614",
    				"amount": 1490,
    				"status": "pending",
    				"success": true,
    				"created_at": "2017-07-05T16:59:30Z",
    				"updated_at": "2017-07-05T16:59:30Z",
    				"gateway_response": {
    					"code": "201"
    				}
    			}
    		}
    	]
    }
    

As transações de SafatyPay podem possuir os seguintes status:

| Status | Descrição |
| --- | --- |
| `pending` | Pendente |
| `paid` | Paga |
| `overpaid` | Paga a maior |
| `underpaid` | Paga a menor |
| `with_error` | Com erro |
| `not_paid` | Não paga |
| `failed` | Falha |</content>
</page>

<page>
  <title>Cartão private label</title>
  <url>https://docs.pagar.me/reference/cart%C3%A3o-private-label-2</url>
  <content>Para criar um [pedido](https://docs.pagar.me/reference#criar-pedido-2) com **cartão private label**, devemos incluir o objeto `private_label` dentro do nó `payment`, assim como a propriedade `"payment_method": "private_label"`. O objeto `private_label` contêm os seguintes atributos:

> ❗️
> 
> Produto Temporariamente Suspenso Para Novas Habilitações
> 
> 
> --------------------------------------------------------------

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `installments` | **integer** | _Quantidade de parcelas_. Valor padrão: `1`. |
| `statement_descriptor` | **string** | _Texto exibido na fatura do cartão_. Max: 22 caracteres. |
| `capture` | **boolean** | _Indica se o pagamento deve ser processado imediatamente_. Caso seja `false` o pagamento deverá ser confirmado posteriormente. Valor padrão: `true`. |
| `card`, `**card_id**` ou `card_token` | **object** | _Cartão private label_.  
`card_id` é o identificador do cartão de um cliente.  
`card_token` é o token do cartão gerado pelo checkout transparente. [Saiba mais sobre cartões](https://docs.pagar.me/reference#pagarme-js). |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento_. |

    {
        "items": [
            {
                "amount": 2990,
                "description": "Chaveiro do Tesseract",
                "quantity": 1
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]"
        },
        "payments": [
            {
                "payment_method": "private_label",
                "private_label": {
                    "capture": true,
                    "installments": 1,
                    "statement_descriptor": "AVENGERS",
                    "card": {
                        "number": "4716806755265342",
                        "holder_name": "Tony Stark",
                        "label": "Private Label",
                        "exp_month": 1,
                        "exp_year": 20,
                        "cvv": "151"
                    }
                },
                "metadata": {
                    "plan_id": "003000"
                }
            }
        ],
    }
    

    {
        "id": "or_57oxkMntecE1P6JO",
        "code": "PGW5F69IX6",
        "amount": 2990,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_DZlmrdXfXQcmr5kO",
                "description": "Chaveiro do Tesseract",
                "amount": 2990,
                "quantity": 1,
                "status": "active",
                "created_at": "2019-01-21T18:37:48Z",
                "updated_at": "2019-01-21T18:37:48Z",
                "order": {
                    "id": "or_57oxkMntecE1P6JO",
                    "code": "PGW5F69IX6",
                    "amount": 2990,
                    "closed": true,
                    "created_at": "2019-01-21T18:37:48Z",
                    "updated_at": "2019-01-21T18:37:48Z",
                    "closed_at": "2019-01-21T18:37:48Z",
                    "currency": "BRL",
                    "status": "paid",
                    "customer_id": "cus_n3bqEzdsZUmNA7Qp",
                    "items": [
                        {
                            "id": "oi_DZlmrdXfXQcmr5kO",
                            "description": "Chaveiro do Tesseract",
                            "amount": 2990,
                            "quantity": 1,
                            "status": "active"
                        }
                    ]
                }
            }
        ],
        "customer": {
            "id": "cus_n3bqEzdsZUmNA7Qp",
            "name": "Tony Stark",
            "email": "[email protected]",
            "delinquent": false,
            "created_at": "2019-01-21T18:36:30Z",
            "updated_at": "2019-01-21T18:36:30Z",
            "phones": {}
        },
        "status": "paid",
        "created_at": "2019-01-21T18:37:48Z",
        "updated_at": "2019-01-21T18:37:48Z",
        "closed_at": "2019-01-21T18:37:48Z",
        "charges": [
            {
                "id": "ch_PNbX8jDIPuL1p5nM",
                "code": "PGW5F69IX6",
                "amount": 2990,
                "paid_amount": 2990,
                "status": "paid",
                "currency": "BRL",
                "payment_method": "private_label",
                "paid_at": "2019-01-21T18:37:48Z",
                "created_at": "2019-01-21T18:37:48Z",
                "updated_at": "2019-01-21T18:37:48Z",
                "customer": {
                    "id": "cus_n3bqEzdsZUmNA7Qp",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "delinquent": false,
                    "created_at": "2019-01-21T18:36:30Z",
                    "updated_at": "2019-01-21T18:36:30Z",
                    "phones": {}
                },
                "last_transaction": {
                    "id": "tran_G1byLaJUXHm5Eg4R",
                    "transaction_type": "private_label",
                    "gateway_id": "82c0acb3-75b0-48b8-a3ac-0e51c4b3744c",
                    "amount": 2990,
                    "status": "captured",
                    "success": true,
                    "installments": 1,
                    "statement_descriptor": "AVENGERS",
                    "acquirer_tid": "a4cf3de1-beb2-4724-822d-ac7ad14fa306",
                    "acquirer_nsu": "a4cf3de1-beb2-4724-822d-ac7ad14fa306",
                    "acquirer_auth_code": "903",
                    "acquirer_message": "Transação capturada com sucesso",
                    "acquirer_return_code": "00",
                    "operation_type": "auth_and_capture",
                    "card": {
                        "id": "card_apxQeXJsV2fGVwPL",
                        "first_six_digits": "400000",
                        "last_four_digits": "0010",
                        "brand": "Visa",
                        "holder_name": "Tony Stark",
                        "exp_month": 1,
                        "exp_year": 2030,
                        "status": "active",
                        "type": "credit",
                        "private_label" true,
                        "created_at": "2019-01-21T18:37:48Z",
                        "updated_at": "2019-01-21T18:37:48Z",
                        "billing_address": {
                            "zip_code": "90265",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US",
                            "line_1": "10880, Malibu Point, Malibu Central"
                        }
                    },
                    "created_at": "2019-01-21T18:37:48Z",
                    "updated_at": "2019-01-21T18:37:48Z",
                    "gateway_response": {
                        "code": "200",
                        "errors": []
                    }
                }
            }
        ],
        "checkouts": []
    }
    

As transações de Cartão Private Label podem possuir os seguintes status dependendo da regra de negócio definida pela processadora do cartão:

| Status | Descrição |
| --- | --- |
| `authorized_pending_capture` | Autorizada pendente de captura |
| `not_authorized` | Não autorizada |
| `captured` | Capturada |
| `partial_capture` | Capturada parcialmente |
| `waiting_capture` | Aguardando captura |
| `refunded` | Estornada |
| `voided` | Cancelada |
| `partial_refunded` | Estornada parcialmente |
| `partial_void` | Cancelada parcialmente |
| `error_on_voiding` | Erro no cancelamento |
| `error_on_refunding` | Erro no estorno |
| `waiting_cancellation` | Aguardando cancelamento |
| `with_error` | Com erro |
| `failed` | Falha |</content>
</page>

<page>
  <title>Cartão de débito</title>
  <url>https://docs.pagar.me/reference/cart%C3%A3o-de-d%C3%A9bito-2</url>
  <content>    {
        "amount": 1000,
        "code": "123",
        "customer": {
            "name": "Tony Stark"
        },
        "currency": "BRL",
        "payment": {
            "payment_method": "debit_card",
            "operation_reference": "TESTEAPIDOCS",
            "debit_card": {
                "capture": false,
                "installments": 1,
                "statement_descriptor": "APIDOCS",
                "card": {
                    "number": "4000000000000010",
                    "holder_name": "Tony Stark",
                    "exp_month": 11,
                    "exp_year": 23,
                    "cvv": "351"
                },
                "authentication": {
                    "type": "threed_secure",
                    "threed_secure": {
                        "mpi": "third_party",
                        "eci": "05",
                        "cavv": "BwABBylVaQAAAAFwllVpAAAAAAA=",
                        "ds_transaction_id": "Nmp3VFdWMlEwZ05pWGN3SGo4TDA=",
                        "version": "2"
                    }
                }
            },
            "metadata": {
                "mundipagg_payment_method_code": "19"
            }
        }
    }
    

    {
        "items": [
            {
                "amount": 2990,
                "description": "Teste de débito",
                "quantity": 1,
                "code": "123"
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "93095135270",
            "type": "individual",
            "document_type": "CPF",
            "address": {
                "line_1": "375, Av. General Justo, Centro",
                "line_2": "8º andar",
                "zip_code": "20021130",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BR"
            }
        },
        "payments": [
            {
                "payment_method": "debit_card",
                "debit_card": {
                    "capture": false,
                    "installments": 1,
                    "statement_descriptor": "AVENGERS",
                    "network_token": {
                        "number": "5256621004565548",
                        "holder_name": "Tony Stark",
                        "exp_month": 12,
                        "exp_year": 2023,
                        "cryptograms": [
                            "ANfQt43bddROAAEnSAMhAAADFA===="
                        ],
                        "billing_address": {
                            "street": "Malibu Point",
                            "number": "10880",
                            "zip_code": "90265",
                            "neighborhood": "Central Malibu",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    }
                },
            }
        ]
    }
    

    {
        "id": "or_nEA3rVEC7TqOVWM2",
        "code": "W2NQAEJF3J",
        "amount": 2990,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_2jdEG82C8Cz5wLy4",
                "type": "product",
                "description": "Teste de débito",
                "amount": 2990,
                "quantity": 1,
                "status": "active",
                "created_at": "2023-04-14T18:13:25Z",
                "updated_at": "2023-04-14T18:13:25Z",
                "code": "123"
            }
        ],
        "customer": {
            "id": "cus_4qN8MKbCxt8aDovj",
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "93095135270",
            "document_type": "cpf",
            "type": "individual",
            "delinquent": false,
            "address": {
                "id": "addr_bve7jDhwvsm5orDk",
                "line_1": "375, Av. General Justo, Centro",
                "line_2": "8º andar",
                "zip_code": "20021130",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BR",
                "status": "active",
                "created_at": "2023-04-14T18:13:16Z",
                "updated_at": "2023-04-14T18:13:16Z"
            },
            "created_at": "2023-04-14T18:13:16Z",
            "updated_at": "2023-04-14T18:13:16Z",
            "phones": {}
        },
        "status": "paid",
        "created_at": "2023-04-14T18:13:25Z",
        "updated_at": "2023-04-14T18:13:28Z",
        "closed_at": "2023-04-14T18:13:25Z",
        "charges": [
            {
                "id": "ch_K83x0jXHMLumQalm",
                "code": "W2NQAEJF3J",
                "gateway_id": "f942829d-4a63-47b2-9af1-bef65ced0a5a",
                "amount": 2990,
                "paid_amount": 2990,
                "status": "paid",
                "currency": "BRL",
                "payment_method": "debit_card",
                "paid_at": "2023-04-14T18:13:27Z",
                "created_at": "2023-04-14T18:13:25Z",
                "updated_at": "2023-04-14T18:13:27Z",
                "customer": {
                    "id": "cus_4qN8MKbCxt8aDovj",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "document": "93095135270",
                    "document_type": "cpf",
                    "type": "individual",
                    "delinquent": false,
                    "address": {
                        "id": "addr_bve7jDhwvsm5orDk",
                        "line_1": "375, Av. General Justo, Centro",
                        "line_2": "8º andar",
                        "zip_code": "20021130",
                        "city": "Rio de Janeiro",
                        "state": "RJ",
                        "country": "BR",
                        "status": "active",
                        "created_at": "2023-04-14T18:13:16Z",
                        "updated_at": "2023-04-14T18:13:16Z"
                    },
                    "created_at": "2023-04-14T18:13:16Z",
                    "updated_at": "2023-04-14T18:13:16Z",
                    "phones": {}
                },
                "last_transaction": {
                    "id": "tran_BaQ7M70FRiQbVZew",
                    "transaction_type": "debit_card",
                    "gateway_id": "db376787-7071-49d4-9ab0-a3a5d4d176f2",
                    "amount": 2990,
                    "status": "captured",
                    "success": true,
                    "statement_descriptor": "AVENGERS",
                    "acquirer_name": "stone",
                    "acquirer_affiliation_code": "266B24CD5F429E56134743A01287BACB",
                    "acquirer_tid": "20430073908801",
                    "acquirer_nsu": "20430073908801",
                    "acquirer_auth_code": "908801",
                    "acquirer_message": "Stone|Aprovado",
                    "acquirer_return_code": "0000",
                    "operation_type": "capture",
                    "network_token": {
                        "id": "nt_doLl3pGmUrIo5Pgn",
                        "first_six_digits": "525662",
                        "last_four_digits": "5548",
                        "brand": "Mastercard",
                        "holder_name": "Tony Stark",
                        "exp_month": 12,
                        "exp_year": 2023,
                        "created_at": "2023-04-14T18:13:16Z",
                        "updated_at": "2023-04-14T18:13:16Z",
                        "status": "active",
                        "billing_address": {
                            "street": "Malibu Point",
                            "number": "10880",
                            "zip_code": "90265",
                            "neighborhood": "Central Malibu",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    },
                    "payment_type": "Token",
                    "created_at": "2023-04-14T18:13:25Z",
                    "updated_at": "2023-04-14T18:13:25Z",
                    "gateway_response": {
                        "code": "201",
                        "errors": []
                    },
                    "antifraud_response": {},
                    "metadata": {}
                },
            }
        ]
    }
    

    {
        "items": [
            {
                "amount": 2990,
                "description": "Teste de débito",
                "quantity": 1,
                "code": "123"
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "93095135270",
            "type": "individual",
            "document_type": "CPF",
            "address": {
                "line_1": "375, Av. General Justo, Centro",
                "line_2": "8º andar",
                "zip_code": "20021130",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BR"
            }
        },
        "payments": [
            {
                "payment_method": "debit_card",
                "debit_card": {
                    "capture": false,
                    "installments": 1,
                    "statement_descriptor": "AVENGERS",
                    "network_token": {
                        "number": "5256621004565548",
                        "holder_name": "Tony Stark",
                        "exp_month": 12,
                        "exp_year": 2023,
                        "cryptograms": [
                            "ANfQt43bddROAAEnSAMhAAADFA===="
                        ],
                        "billing_address": {
                            "street": "Malibu Point",
                            "number": "10880",
                            "zip_code": "90265",
                            "neighborhood": "Central Malibu",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    },
                    "authentication": {
                        "type": "threed_secure",
                        "threed_secure": {
                            "mpi": "acquirer",
                            "success_url": "http://www.pagar.me"
                        }
                    }
                },
            }
        ]
    }
    

    {
        "id": "or_yJPVBm7szliRwx97",
        "code": "MKJDF40UO8",
        "amount": 2990,
        "currency": "BRL",
        "closed": true,
        "items": [
            {
                "id": "oi_a9g8lb5t6cQKXWpe",
                "type": "product",
                "description": "Teste de débito",
                "amount": 2990,
                "quantity": 1,
                "status": "active",
                "created_at": "2023-04-14T18:25:38Z",
                "updated_at": "2023-04-14T18:25:38Z",
                "code": "123"
            }
        ],
        "customer": {
            "id": "cus_4qN8MKbCxt8aDovj",
            "name": "Tony Stark",
            "email": "[email protected]",
            "document": "93095135270",
            "document_type": "cpf",
            "type": "individual",
            "delinquent": false,
            "address": {
                "id": "addr_bve7jDhwvsm5orDk",
                "line_1": "375, Av. General Justo, Centro",
                "line_2": "8º andar",
                "zip_code": "20021130",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BR",
                "status": "active",
                "created_at": "2023-04-14T18:13:16Z",
                "updated_at": "2023-04-14T18:13:16Z"
            },
            "created_at": "2023-04-14T18:13:16Z",
            "updated_at": "2023-04-14T18:13:16Z",
            "phones": {}
        },
        "status": "paid",
        "created_at": "2023-04-14T18:25:38Z",
        "updated_at": "2023-04-14T18:25:42Z",
        "closed_at": "2023-04-14T18:25:38Z",
        "charges": [
            {
                "id": "ch_aRLoYxLHefrMOkAG",
                "code": "MKJDF40UO8",
                "gateway_id": "824a2f78-0548-4655-9131-8b4065066d77",
                "amount": 2990,
                "paid_amount": 2990,
                "status": "paid",
                "currency": "BRL",
                "payment_method": "debit_card",
                "paid_at": "2023-04-14T18:25:42Z",
                "created_at": "2023-04-14T18:25:39Z",
                "updated_at": "2023-04-14T18:25:42Z",
                "customer": {
                    "id": "cus_4qN8MKbCxt8aDovj",
                    "name": "Tony Stark",
                    "email": "[email protected]",
                    "document": "93095135270",
                    "document_type": "cpf",
                    "type": "individual",
                    "delinquent": false,
                    "address": {
                        "id": "addr_bve7jDhwvsm5orDk",
                        "line_1": "375, Av. General Justo, Centro",
                        "line_2": "8º andar",
                        "zip_code": "20021130",
                        "city": "Rio de Janeiro",
                        "state": "RJ",
                        "country": "BR",
                        "status": "active",
                        "created_at": "2023-04-14T18:13:16Z",
                        "updated_at": "2023-04-14T18:13:16Z"
                    },
                    "created_at": "2023-04-14T18:13:16Z",
                    "updated_at": "2023-04-14T18:13:16Z",
                    "phones": {}
                },
                "last_transaction": {
                    "id": "tran_jRpOmqgckHn6NBEb",
                    "transaction_type": "debit_card",
                    "gateway_id": "5c7d44af-f695-4046-8264-fa7a238b3bae",
                    "amount": 2990,
                    "status": "captured",
                    "success": true,
                    "statement_descriptor": "AVENGERS",
                    "acquirer_name": "stone",
                    "acquirer_affiliation_code": "266B24CD5F429E56134743A01287BACB",
                    "acquirer_tid": "20430073908837",
                    "acquirer_nsu": "20430073908837",
                    "acquirer_auth_code": "908837",
                    "acquirer_message": "Stone|Aprovado",
                    "acquirer_return_code": "0000",
                    "operation_type": "capture",
                    "mpi": "acquirer",
                    "network_token": {
                        "id": "nt_doLl3pGmUrIo5Pgn",
                        "first_six_digits": "525662",
                        "last_four_digits": "5548",
                        "brand": "Mastercard",
                        "holder_name": "Tony Stark",
                        "exp_month": 12,
                        "exp_year": 2023,
                        "created_at": "2023-04-14T18:13:16Z",
                        "updated_at": "2023-04-14T18:13:16Z",
                        "status": "active",
                        "billing_address": {
                            "street": "Malibu Point",
                            "number": "10880",
                            "zip_code": "90265",
                            "neighborhood": "Central Malibu",
                            "city": "Malibu",
                            "state": "CA",
                            "country": "US"
                        }
                    },
                    "payment_type": "Token",
                    "created_at": "2023-04-14T18:25:39Z",
                    "updated_at": "2023-04-14T18:25:39Z",
                    "gateway_response": {
                        "code": "201",
                        "errors": []
                    },
                    "antifraud_response": {},
                    "metadata": {}
                },
                }
            }
        ]
    }</content>
</page>

<page>
  <title>Criar pedido</title>
  <url>https://docs.pagar.me/reference/criar-pedido-2</url>
  <content>post https://api.pagar.me/core/v5/orders

Essa funcionalidade está disponível para clientes Gateway e PSP Pagar.me

  

> ❗️
> 
> NÃO ENVIE DADOS ABERTOS DO CARTÃO DO COMPRADOR
> 
> 
> ----------------------------------------------------
> 
> Para poder trafegar dados de cartão abertos em seu servidor, você deve ser [PCI Compliance](https://pagar.me/blog/pci-compliance/). Por isso, **recomendamos fortemente** que as requisições sejam enviadas sempre usando o `card_id` ou `card_token`, de forma que você não precise trafegar os dados de cartão no seu servidor.

> ❗️
> 
> DADOS DO COMPRADOR SÃO OBRIGATÓRIOS
> 
> 
> -----------------------------------------
> 
> Caso seja informado o `customer_id`, não é necessário incluir o objeto `customer`. Entretanto, é **obrigatório** que um desses parâmetros seja informado.
> 
> Para clientes Pagar.me PSP com o produto de antifraude ativo, é obrigatório preencher todos os campos do objeto `customer`, incluindo endereço e telefone.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Pedidos</title>
  <url>https://docs.pagar.me/reference/pedidos-1</url>
  <content>Para realizar pedidos de cartão de crédito ou boleto, você deve criar um objeto `order`. Este objeto tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do pedido_. Formato: `or_XXXXXXXXXXXXXXXX` |
| `currency` | **string** | _Moeda_. Valor possível: `BRL`. |
| `status` | **string** | _Status do pedido_. Possíveis valores: `Pending`, `Paid`, `Canceled`, `Failed`. |
| `code` | **string** | _Código identificador do pedido no sistema da loja_. |
| `customer` | **object** | _Dados do cliente_. [Saiba mais sobre clientes](https://docs.pagar.me/reference/clientes-1). |
| `shipping` | **object** | _Dados para entrega_. [Saiba mais sobre entregas](https://docs.pagar.me/reference/entregas-1). |
| `antifraud` | **object** | Dados do serviço de antifraude. [Saiba mais sobre antifraude](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-antifraude-1). |
| `payments` | **array of object** | _Lista de dados de cobrança_. [Saiba mais sobre cobranças](https://docs.pagar.me/reference/cobran%C3%A7as-1). |
| `items` | **object** | _Itens do pedido_. [Saiba mais sobre itens do pedido](https://docs.pagar.me/reference/item-do-pedido-1). |
| `closed` | **boolean** | _Indica se o pedido fechado_. Valor padrão: `true`. |
| `created_at` | **datetime** | _Data de criação do pedido (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do pedido (UTC)_. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o pedido_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |
| `recurrence_cycle` | **string** | Informa se o pedido é a primeira ou subsequente transação de uma recorrência externa.  
Possíveis valores: `first` ou `subsequent`.  
**Observação:** [O atributo é referente ao objeto payments.credit\_card.](https://docs.pagar.me/reference/criar-pedido-2)  
(**Importante:** Não cria uma cobrança recorrente) |

> 🚧
> 
> Pedidos Abertos e Fechados
> 
> 
> --------------------------------
> 
> Existem duas opções de pedido: **Pedido Aberto** e **Pedido Fechado**, de acordo com o atributo `closed`.  
> Um pedido fechado, ou seja, `"closed" : "true"` (valor default), **não** pode sofrer alterações após sua criação.  
> Um pedido aberto, isto é, `"closed" : "false"`, **pode** ser alterado após sua criação.

> 🚧
> 
> Pedido Aberto
> 
> 
> -------------------
> 
> Caso o pedido seja criado como aberto, ou seja, o atributo "closed" : "false", seu status não será alterado para 'paid' até que seja ele seja fechado manualmente. [Saiba mais sobre fechamento de pedidos](https://docs.pagar.me/reference/fechar-um-pedido).
> 
> Vale ressaltar que seu status não será mudado para pago, ainda que todas as suas cobranças estejam pagas.</content>
</page>

<page>
  <title>Incluir cobrança no pedido</title>
  <url>https://docs.pagar.me/reference/incluir-cobran%C3%A7a-no-pedido</url>
  <content>post https://api.pagar.me/core/v5/charges

Enquanto um pedido estiver **aberto**, é possível adicionar novas cobranças utilizando o `order_id` na criação de uma cobrança.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar pedido multimeios</title>
  <url>https://docs.pagar.me/reference/criar-pedido-multimeios</url>
  <content>post https://api.pagar.me/core/v5/orders

Neste caso você inclui mais de um objeto na coleção de **payments**. Desta maneira você pode realizar pedido com diversos cartões ou combinando diferentes meios de pagamento.

> 🚧
> 
> MULTIMEIOS DEVEM TER SEUS VALORES DISCRIMINADOS SEPARADAMENTE
> 
> 
> -------------------------------------------------------------------
> 
> Portanto, cada objeto dentro `payments` deverá ter seu próprio valor, bastando para isso incluir a propriedade `amount` com o valor correspondente ao de cada um dos meios de pagamento escolhidos. A resposta conterá além dos valores separados, um campo `amount` com a soma do todos os meios utilizados, que representa o valor total do pedido.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar pedido multicompradores</title>
  <url>https://docs.pagar.me/reference/criar-pedido-multicompradores</url>
  <content>post https://api.pagar.me/core/v5/orders

Neste caso você pode incluir um cliente (`customer`) dentro do nó de pagamento (`payment`). Caso um nó `payment` não possua um nó `customer` dentro, assumiremos que o pagador dele é o mesmo `customer` do pedido.

> 🚧
> 
> MULTIMEIOS DEVEM TER SEUS VALORES DISCRIMINADOS SEPARADAMENTE
> 
> 
> -------------------------------------------------------------------
> 
> Portanto, cada objeto dentro `payments` deverá ter seu próprio valor, bastando para isso incluir a propriedade `amount` com o valor correspondente ao de cada um dos meios de pagamento escolhidos. A resposta conterá além dos valores separados, um campo `amount` com a soma do todos os meios utilizados, que representa o valor total do pedido.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter pedido</title>
  <url>https://docs.pagar.me/reference/obter-pedido</url>
  <content>get https://api.pagar.me/core/v5/orders/

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Fechar um pedido</title>
  <url>https://docs.pagar.me/reference/fechar-um-pedido</url>
  <content>patch https://api.pagar.me/core/v5/orders//closed

Utilizado para fechar um pedido para que não seja mais possível adicionar cobranças.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar pedidos</title>
  <url>https://docs.pagar.me/reference/listar-pedidos</url>
  <content>get https://api.pagar.me/core/v5/orders

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante e retorna no máximo 30 JSONs por página [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Incluir item</title>
  <url>https://docs.pagar.me/reference/incluir-item</url>
  <content>post https://api.pagar.me/core/v5/orders//items

Quando um pedido está **aberto**, você pode incluir itens nele.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Item do pedido</title>
  <url>https://docs.pagar.me/reference/item-do-pedido-1</url>
  <content>Com a criação de um pedido **aberto**, é possível que itens sejam gerenciados. O objeto `item` do pedido tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do item do pedido_. Formato: `oi_XXXXXXXXXXXXXXXX`. |
| `amount` | **integer** | _Valor unitário_. |
| `description` | **string** | _Descrição do item_. |
| `quantity` | **short** | _Quantidade de itens_. |
| `code` | **string** | _Código do item no sistema da loja_. |
| `category` | **string** | _Categoria do item_. |
| `status` | **string** | _Status do item do pedido_. Valores possíveis: `active` ou `deleted`. |
| `created_at` | **datetime** | _Data de criação do item do pedido (UTC)_. |
| `updated_at` | **datetime** | _Data de última atualização do item do pedido (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão do item do pedido (UTC)_. |
| `order` | **object** | _Dados do pedido_. |</content>
</page>

<page>
  <title>Editar item do pedido</title>
  <url>https://docs.pagar.me/reference/editar-item-do-pedido</url>
  <content>put https://api.pagar.me/core/v5/orders//items/

Quando um pedido está **aberto**, você pode editar os itens dele.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Deletar item</title>
  <url>https://docs.pagar.me/reference/deletar-item</url>
  <content>delete https://api.pagar.me/core/v5/orders//items/

Quando um pedido está **aberto**, você pode excluir itens dele.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Remover todos os itens</title>
  <url>https://docs.pagar.me/reference/remover-todos-os-itens</url>
  <content>delete https://api.pagar.me/core/v5/orders//items

Quando um pedido está **aberto**, você pode remover todos os itens dele.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cobranças</title>
  <url>https://docs.pagar.me/reference/cobran%C3%A7as-1</url>
  <content>Para realizar cobranças de cartão de crédito ou boleto, você deve criar um objeto `charge`. Este objeto tem os seguintes atributos:

> 🚧
> 
> Novo status "chargedback"
> 
> 
> -------------------------------
> 
> Com intuito de aumentar a visibilidade sobre as suas transações, a partir do dia 12/09/2022, sempre que uma _charge_ sofrer uma ação de chargeback, a nossa API vai passar a modificar o estado da _charge_ para _chargedback_.
> 
> Essa funcionalidade só irá existir para clientes na integração PSP (subadiquirência). Para integrações do tipo Gateway, não é possível termos essa informação.
> 
> Para mais informações acesse: [Novo status chargeback](https://docs.pagar.me/page/chargeback-novo-status-na-cobran%C3%A7a)

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código da cobrança_. Formato: `ch_XXXXXXXXXXXXXXXX`. |
| `code` | **string** | _Código identificador da cobrança no sistema da loja_. |
| `gateway_id` | **string** | _Código da cobrança no gateway de pagamento_. |
| `amount` | **integer** | _Valor da cobrança_. |
| `payment_method` | **string** | _Meio de pagamento_. |
| `status` | **string** | _Status da cobrança_. Valores possíveis: `pending`, `paid`, `canceled`, `processing`, `failed`, `overpaid` ou `underpaid` e `chargedback` |
| `due_at` | **datetime** | _Data de vencimento da cobrança_. |
| `created_at` | **datetime** | _Data de criação da cobrança (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização da cobrança (UTC)_. |
| `customer` | **object** | _Dados do cliente_. [Saiba mais sobre clientes](https://docs.pagar.me/reference/clientes-1). |
| `invoice` | **object** | _Dados da fatura_. [Saiba mais sobre faturas](https://docs.pagar.me/reference/faturas-1). |
| `last_transaction` | **object** | _Informações sobre a última transação da cobrança_. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre a cobrança_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |</content>
</page>

<page>
  <title>Capturar cobrança</title>
  <url>https://docs.pagar.me/reference/capturar-cobran%C3%A7a</url>
  <content>post https://api.pagar.me/core/v5/charges//capture

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter item do pedido</title>
  <url>https://docs.pagar.me/reference/obter-item-do-pedido</url>
  <content>get https://api.pagar.me/core/v5/orders//items/

Obter um item especifico dentro de um pedido especifico.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter cobrança</title>
  <url>https://docs.pagar.me/reference/obter-cobran%C3%A7a</url>
  <content>get https://api.pagar.me/core/v5/charges/

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar cartão de cobrança</title>
  <url>https://docs.pagar.me/reference/editar-cart%C3%A3o-de-cobran%C3%A7a</url>
  <content>patch https://api.pagar.me/core/v5/charges//card

Esse recurso só pode ser chamado quando o cartão a ser editado teve a transação não autorizada.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar data de vencimento da cobrança</title>
  <url>https://docs.pagar.me/reference/editar-data-de-vencimento-da-cobran%C3%A7a</url>
  <content>patch https://api.pagar.me/core/v5/charges//due-date

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar método de pagamento</title>
  <url>https://docs.pagar.me/reference/editar-m%C3%A9todo-de-pagamento</url>
  <content>patch https://api.pagar.me/core/v5/charges//payment-method

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar cobranças</title>
  <url>https://docs.pagar.me/reference/listar-cobran%C3%A7as</url>
  <content>get https://api.pagar.me/core/v5/charges

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cancelar cobrança</title>
  <url>https://docs.pagar.me/reference/cancelar-cobran%C3%A7a</url>
  <content>delete https://api.pagar.me/core/v5/charges/.

> 🚧
> 
> CANCELAMENTO DE BOLETO
> 
> 
> ----------------------------
> 
> Para clientes gateway, o cancelamento de uma cobrança de boleto não gera um estorno financeiro para o cliente final. O cancelamento só modifica o status da charge na API para registro do integrador.
> 
> Para clientes PSP, o estorno de boleto funciona como uma transferência bancária, portanto é necessário enviar os dados bancários do seu cliente na requisição. Ressaltamos que o estorno deve ser realizado para o mesmo documento o qual a venda foi realizada.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Retentar uma cobrança manualmente</title>
  <url>https://docs.pagar.me/reference/retentar-uma-cobran%C3%A7a-manualmente</url>
  <content>post https://api.pagar.me/core/v5/charges//retry

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Visão Geral sobre Antifraude</title>
  <url>https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-antifraude-1</url>
  <content>Para criar [pedidos](https://docs.pagar.me/reference#criar-pedido-2) alguns dados adicionais são obrigatórios para análise.

> 🚧
> 
> Dados obrigatórios
> 
> 
> ------------------------
> 
> Para que o pedido seja analisado pelo antifraude, é imprescindível o envio das seguintes informações: `name`, `email`, `phones`, `document`, `type`, `items`, `address` (ou `billing_address`)

> ❗️
> 
> Endereço
> 
> 
> --------------
> 
> É necessário o envio de pelo menos um dos endereços: `customer.address`, `payment.credit_card.card.billing_address` ou `payment.boleto.billing_address`</content>
</page>

<page>
  <title>Confirmar cobrança (cash)</title>
  <url>https://docs.pagar.me/reference/confirmar-cobran%C3%A7a-cash</url>
  <content>post https://api.pagar.me/core/v5/charges//confirm-payment

Para a confirmação de cobranças com meio de pagamento `cash` com o status `pending`.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar pedido (com Antifraude)</title>
  <url>https://docs.pagar.me/reference/criar-pedido-com-antifraude</url>
  <content>post https://api.pagar.me/core/v5/orders

  

> ❗️
> 
> NÃO ENVIE DADOS ABERTOS DO CARTÃO DO COMPRADOR
> 
> 
> ----------------------------------------------------
> 
> Para poder trafegar dados de cartão abertos em seu servidor, você deve ser PCI Compliance. Por isso, **recomendamos fortemente** que as requisições sejam enviadas sempre usando o `card_id` ou `card_token`, de forma que você não precise trafegar os dados de cartão no seu servidor.

> ❗️
> 
> DADOS DO COMPRADOR SÃO OBRIGATÓRIOS
> 
> 
> -----------------------------------------
> 
> Caso seja informado o `customer_id`, não é necessário incluir o objeto `customer`. Entretanto, é **obrigatório** que um desses parâmetros seja informado.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Link de Pagamento</title>
  <url>https://docs.pagar.me/reference/checkout-link</url>
  <content>> ❗️
> 
> Atenção!
> 
> 
> --------------
> 
> Ao criar Links de pagamento, oferecemos duas opções principais: a geração de um pedido único ou a criação de uma recorrência.
> 
> Caso tenha interesse em explorar mais detalhes sobre nosso conceito de [recorrência](https://docs.pagar.me/docs/overview-recorr%C3%AAncia), acesse nossa documentação específica de [assinaturas](https://docs.pagar.me/docs/assinatura) e [planos](https://docs.pagar.me/docs/plano).
> 
> **É importante destacar que, no contexto de Links de pagamento, a criação de uma recorrência só pode ser feita se estiver vinculada a um plano.**

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `type` | **string** | Define o tipo do link de pagamento a ser criado, podendo ser `order`, para criação de pedidos, ou `subscription`, para recorrências. |
| `payment_settings.accepted_payment_methods` | **object** | _Meios de pagamento aceitos para o Checkout_. Valores possíveis: `credit_card`, `boleto`, e `pix`. |
| `payment_settings.credit_card_settings` | **object** | Define as configurações de pagamento quando cartão de crédito for selecionado. Obrigatório quando enviado `credit_card` em `accepted_payment_methods`. |
| `payment_settings.boleto_settings` | **object** | Define as configurações de pagamento quando boleto for selecionado. Obrigatório quando enviado `boleto` em `accepted_payment_methods`. |
| `payment_settings.pix_settings` | **object** | Define as configurações de pagamento quando Pix for selecionado. Obrigatório quando enviado `pix` em `accepted_payment_methods`. |
| `customer_settings` | **object** | Define os dados do cliente, se aplicável. |
| `cart_settings` | **object** | Define os dados do carrinho que será pago pelo link de pagamento. |
| `cart_settings.items` | **object** | Esse objeto deve ser enviado caso o seu Checkout seja do tipo `order` |
| `cart_settings.recurrence` | **object** | Esse objeto deve ser enviado caso o seu Checkout seja doo tipo `subscription` |
| `layout_settings` | **object** | Dados de layout. |

    {
      "is_building": false,
      "payment_settings": {
        "credit_card_settings": {
          "installments_setup": {
            "interest_type": "simple"
          },
          "operation_type": "auth_and_capture",
          "installments": [
            {
              "number": 1,
              "total": 12000
            },
            {
              "number": 2,
              "total": 12000
            }
          ]
        },
        "accepted_payment_methods": [
          "credit_card"
        ]
      },
      "cart_settings": {
        "items": [
          {
            "amount": 12000,
            "name": "Banner",
            "default_quantity": 1
          }
        ]
      },
      "name": "Banner N12345",
      "type": "order"
    }
    

    {
        "payment_settings": {
            "accepted_payment_methods": [
                "credit_card"
            ],
            "credit_card_settings": {
                "operation_type": "auth_and_capture",
                "installments": [
                    {
                        "number": 1,
                        "total": 12000
                    },
                    {
                        "number": 2,
                        "total": 12000
                    }
                ]
            }
        },
        "cart_settings": {
            "items": [
                {
                    "amount": 12000,
                    "name": "Banner",
                    "default_quantity": 1
                }
            ],
           "items_total_cost": 12000,
           "total_cost": 12000,
           "shipping_cost": 0,
           "shipping_total_cost": 0,
        },
        "name": "Banner N12345",
        "type": "order",
        "total_sessions": 0,
        "max_paid_sessions": 0,
        "total_paid_sessions": 0,
        "max_sessions": 0,
        "created_at": "2024-05-13T01:09:40.6331583Z",
        "url": "https://payment-link.pagar.me/pl_GNe8zkaO2MlBxxGcJcv0BALq9Pon514W",
        "updated_at": "2024-05-13T01:09:40.6331583Z",
        "id": "pl_GNe8zkaO2MlBxxGcJcv0BALq9Pon514W",
        "expires_in": 0,
        "status": "active"
    }
    

    {
      "is_building": false,
      "payment_settings": {
        "credit_card_settings": {
          "installments_setup": {
            "interest_type": "simple"
          },
          "operation_type": "auth_and_capture"
        },
        "accepted_payment_methods": [
          "credit_card"
        ]
      },
      "customer_settings": {
        "customer_id": "cus_8ka4RGDF9F7MvemD"
      },
      "cart_settings": {
        "recurrences": [
          {
            "start_in": 1,
            "plan_id": "plan_odzJgEyf9fqgR7Kj"
          }
        ]
      },
      "max_paid_sessions": 1,
      "expires_at": "2024-05-12T19:44:39.5870000Z",
      "name": "Banner mensal N135",
      "type": "subscription"
    }</content>
</page>

<page>
  <title>Checkout Pagar.me</title>
  <url>https://docs.pagar.me/reference/checkout-response</url>
  <content>Com o **Link de pagamento Pagar.me**, oferecemos uma página de Checkout desenvolvida por nós e hospedada em nossos servidores. Desta forma, você não precisa se preocupar em desenvolver essa interface.

**Passo 1**:  
Envie uma requisição de [criação de um Link de pagamento](https://docs.pagar.me/reference/create-link) com as informações da venda e configurações do Checkout [Saiba mais sobre as configurações do Checkout](https://docs.pagar.me/reference/checkout-copy).

    {
      "is_building": false,
      "payment_settings": {
        "credit_card_settings": {
          "installments_setup": {
            "interest_type": "simple"
          },
          "operation_type": "auth_and_capture",
          "installments": [
            {
              "number": 1,
              "total": 12000
            },
            {
              "number": 2,
              "total": 12000
            }
          ]
        },
        "accepted_payment_methods": [
          "credit_card"
        ]
      },
      "cart_settings": {
        "items": [
          {
            "amount": 12000,
            "name": "Banner",
            "default_quantity": 1
          }
        ]
      },
      "name": "Banner N12345",
      "type": "order"
    }
    

**Passo 2**:  
A resposta da requisição de criação de um checkout conterá um campo `url`:

    {
        "payment_settings": {
            "accepted_payment_methods": [
                "credit_card"
            ],
            "credit_card_settings": {
                "operation_type": "auth_and_capture",
                "installments": [
                    {
                        "number": 1,
                        "total": 12000
                    },
                    {
                        "number": 2,
                        "total": 12000
                    }
                ]
            }
        },
        "cart_settings": {
            "items": [
                {
                    "amount": 12000,
                    "name": "Banner",
                    "default_quantity": 1
                }
            ],
           "items_total_cost": 12000,
           "total_cost": 12000,
           "shipping_cost": 0,
           "shipping_total_cost": 0,
        },
        "name": "Banner N12345",
        "type": "order",
        "total_sessions": 0,
        "max_paid_sessions": 0,
        "total_paid_sessions": 0,
        "max_sessions": 0,
        "created_at": "2024-05-13T01:09:40.6331583Z",
        "url": "https://payment-link.pagar.me/pl_GNe8zkaO2MlBxxGcJcv0BALq9Pon514W",
        "updated_at": "2024-05-13T01:09:40.6331583Z",
        "id": "pl_GNe8zkaO2MlBxxGcJcv0BALq9Pon514W",
        "expires_in": 0,
        "status": "active"
    }
    

Esta URL deverá ser disponibilizada ao comprador por sua aplicação. Ao acessar a URL o comprador será redirecionado para o ambiente do Pagar.me para a realização do pagamento.

> 🚧
> 
> Se você não está nessa versão do Checkout acima, fique atento!
> 
> 
> --------------------------------------------------------------------
> 
> Para ter acesso a nova interface do Checkout e outras novidades, indicamos que realize a migração da sua conta para a versão mais recente da nossa API - V5. No canto superior esquerdo da tela é indicado qual versão da documentação você está vendo. Clique na seta onde indica a versão e altere para a V5 para acessar a documentação.
> 
> Se você já é cliente, precisa realizar obrigatoriamente a migração para a versão V5.
> 
> Em caso de dúvidas, basta entrar em contato com o nosso time de atendimento através do e-mail, enviando a sua dúvida para [\[email protected\]](https://docs.pagar.me/cdn-cgi/l/email-protection#9ceef9f0fdfff5f3f2fdf1f9f2e8f3dcecfdfbfdeeb2f1f9) e por telefone, ligando para 4004-1330. Se você já é cliente pode também entrar em contato através do chat dentro da sua Dashboard.</content>
</page>

<page>
  <title>Criar link de pagamento</title>
  <url>https://docs.pagar.me/reference/create-link</url>
  <content>post https://api.pagar.me/core/v5/paymentlinks

> 📘
> 
> Importante!
> 
> 
> -----------------
> 
> Essa documentação se refere a URL e autenticação de uma conta em Produção, caso queira realizar testes em uma conta de Test, você deve utilizar as seguintes informações:
> 
> **REQUEST URL:** [https://sdx-api.pagar.me/core/v5/paymentlinks](https://sdx-api.pagar.me/core/v5/paymentlinks)
> 
> **AUTENTICATION:** sk\_test
> 
> **O body continuará o mesmo!**

  

> 🚧
> 
> Importante!
> 
> 
> -----------------
> 
> Em Links de pagamento `type: subscription` **NÃO** é possível realizar parcelamentos!
> 
> Caso queira utilizar um plano junto com a assinatura, é necessário realizar a criação do plano antes de criar o Link de pagamento, mais informações sobre os planos podem ser encontradas [aqui](https://docs.pagar.me/docs/plano) .

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter link de pagamento</title>
  <url>https://docs.pagar.me/reference/obter-link</url>
  <content>get https://api.pagar.me/core/v5/paymentlinks/

> 📘
> 
> Importante!
> 
> 
> -----------------
> 
> Essa documentação se refere a URL e autenticação de uma conta em Produção, caso queira realizar testes em uma conta de Test, você deve utilizar as seguintes informações:
> 
> **REQUEST URL:** [https://sdx-api.pagar.me/core/v5/paymentlinks/{payment\_link\_id}](https://sdx-api.pagar.me/core/v5/paymentlinks/%7Bpayment_link_id%7D)
> 
> **AUTENTICATION:** sk\_test
> 
> **O body continuará o mesmo!**

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter links de pagamento</title>
  <url>https://docs.pagar.me/reference/obter-links</url>
  <content>get https://api.pagar.me/core/v5/paymentlinks

> 📘
> 
> Importante!
> 
> 
> -----------------
> 
> Essa documentação se refere a URL e autenticação de uma conta em Produção, caso queira realizar testes em uma conta de Test, você deve utilizar as seguintes informações:
> 
> **REQUEST URL:** [https://sdx-api.pagar.me/core/v5/paymentlinks](https://sdx-api.pagar.me/core/v5/paymentlinks)
> 
> **AUTENTICATION:** sk\_test
> 
> **O body continuará o mesmo!**

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Ativar link de pagamento em construção</title>
  <url>https://docs.pagar.me/reference/ativar-link-de-pagamento-em-constru%C3%A7%C3%A3o</url>
  <content>patch https://api.pagar.me/core/v5/paymentlinks//activate

> 📘
> 
> Importante!
> 
> 
> -----------------
> 
> Essa documentação se refere a URL e autenticação de uma conta em Produção, caso queira realizar testes em uma conta de Test, você deve utilizar as seguintes informações:
> 
> **REQUEST URL:** [https://sdx-api.pagar.me/core/v5/paymentlinks/{payment\_link\_id}/activate](https://sdx-api.pagar.me/core/v5/paymentlinks/%7Bpayment_link_id%7D/activate)
> 
> **AUTENTICATION:** sk\_test
> 
> **O body continuará o mesmo!**

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cancelar link de pagamento</title>
  <url>https://docs.pagar.me/reference/cancelar-um-link-de-pagamento</url>
  <content>patch https://api.pagar.me/core/v5/paymentlinks//cancel

> 📘
> 
> Importante!
> 
> 
> -----------------
> 
> Essa documentação se refere a URL e autenticação de uma conta em Produção, caso queira realizar testes em uma conta de Test, você deve utilizar as seguintes informações:
> 
> **REQUEST URL:** [https://sdx-api.pagar.me/core/v5/paymentlinks/{payment\_link\_id}/cancel](https://sdx-api.pagar.me/core/v5/paymentlinks/%7Bpayment_link_id%7D/cancel)
> 
> **AUTENTICATION:** sk\_test
> 
> **O body continuará o mesmo!**

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Precificação</title>
  <url>https://docs.pagar.me/reference/precifica%C3%A7%C3%A3o</url>
  <content>O objeto `price_scheme` dá suporte para criação de diferentes formas de precificação de assinaturas, adequadas a serviços distintos, facilitando a criação de modelos de preços para o seu clientes. O objeto `price_scheme` pode conter ainda um objeto `price_brackets` que dá suporte para criação de faixas distintas de preço de acordo com o serviço prestado. [Saiba mais sobre os modelos de precificação acessando nossa documentação](https://docs.pagar.me/docs/price-scheme).

O objeto `price_scheme` contêm os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `price` | **integer** | _Valor por unidade_. |
| `mininum_price` | **integer** | _Valor mínimo a ser cobrado_. |
| `scheme_type` | **string** | _Tipo de unidade de precificação_. Valores possíveis são: [`unit`](https://docs.pagar.me/reference/unidade-1), [`package`](https://docs.pagar.me/reference/pacote-1), [`volume`](https://docs.pagar.me/reference/volume-1) e [`tier`](https://docs.pagar.me/reference/faixa). |
| `price_brackets` | **object** | _Intervalo de preços_. Este atributo está disponível para os `scheme_type` : `package`, `volume` e `tier`. |

Por sua vez o objeto `price_brackets` é geralmente estruturado como um _array objects_ onde cada item representa um **intervalo de cobrança** tendo, cada objeto, os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `start_quantity` | **integer** | _Valor que define a quantidade inicial de unidades do intervalo_. |
| `end_quantity` | **integer** | _Valor que define a quantidade final de unidades do intervalo_. |
| `overage_price` | **integer** | _Valor para cálculo do preço por unidade que exceder o intervalo_. |
| `price` | **integer** | _Valor para cálculo do preço dentro do intervalo_.  
**OBS**: o preço a ser cobrado do cliente será calculado de acordo com a quantidade e o `scheme_type` definidos. [Conheça mais sobre o cálculo dos tipos de precificação acessando nossa documentação](https://docs.pagar.me/docs/price-scheme). |

> 👍
> 
> A Precificação é um modelo de preço para o comprador final
> 
> 
> ----------------------------------------------------------------
> 
> É importante destacar que esta **não é a forma de cobrança da Pagar.me**, e sim, o modelo de precificação que você poderá aplicar em seus planos e assinaturas para cobrar seus clientes.

Como exemplo do uso da precificação, vamos explorar a seguir os `scheme_type` tendo como unidade de medida _tempo (minutos)_, porém podem ser aplicados outros tipos de medida, tais como: tamanho, objetos, dentre outros.</content>
</page>

<page>
  <title>Unidade</title>
  <url>https://docs.pagar.me/reference/unidade-1</url>
  <content>No `scheme_type` : `unit`, preço final é baseado no consumo **direto** de unidades.

    {
      "scheme_type": "unit",
      "price": 500,
      "minimum_price": 100,
    }
    

No exemplo acima temos a seguinte precificação:

1 minuto = R$ 5,00.

Assim, se um cliente utilizar 100 minutos o valor total será R$ 500,00 (100 x R$ 5,00).  
Caso o consumo seja menor que 1 minuto, será cobrado o valor mínimo R$ 1,00.</content>
</page>

<page>
  <title>Pacote</title>
  <url>https://docs.pagar.me/reference/pacote-1</url>
  <content>No `scheme_type` : `package`, o preço final é baseado no consumo direto de um **bloco** de unidades.

    {
        "scheme_type": "package",
        "price_brackets": [
            {
                "start_quantity": 0,
                "end_quantity": 10,
                "price": 5000
            },
            {
                "start_quantity": 11,
                "end_quantity": 50,
                "price": 7000
            },
            {
                "start_quantity": 51,
                "end_quantity": 100,
                "price": 10000,
                "overage_price": 90
            }
        ]
    }
    

No exemplo acima temos a seguinte precificação:

De 0 a 10 minutos = R$ 50,00.  
De 11 a 50 minutos = R$ 70,00.  
De 51 a 100 minutos = R$ 100,00.  
Cada minuto acima da última faixa = R$0,90.

Se um cliente utilizar 25 minutos o valor será R$ 70,00.  
Se um cliente utilizar 110 minutos o valor será R$ 109,00 (R$ 100,00 + (10 x R$ 0,90)).</content>
</page>

<page>
  <title>Volume</title>
  <url>https://docs.pagar.me/reference/volume-1</url>
  <content>No `scheme_type` : `volume`, o preço final é baseado na **faixa de consumo final** de unidades.

    {
        "scheme_type": "volume",
        "price_brackets": [
            {
                "start_quantity": 0,
                "end_quantity": 10,
                "price": 100
            },
            {
                "start_quantity": 11,
                "end_quantity": 20,
                "price": 90
            },
            {
                "start_quantity": 21,
                "end_quantity": 50,
                "price": 80,
                "overage_price": 70
            }
        ]
    }
    

No exemplo acima temos a seguinte precificação:

Se utilizar entre 1 ~ 10 minutos - Cada minuto custa R$ 1,00.  
Se utilizar entre 11 ~ 20 minutos - Cada minuto custa R$ 0,90.  
Se utilizar entre 21 ~ 50 minutos - Cada minuto custa R$ 0,80.  
Cada minuto acima da última faixa custa R$ 0,70.

Se um cliente utilizar 25 minutos o valor total será R$ 20,00 (25 x R$ 0,80).  
Se um cliente utilizar 52 minutos o valor total será R$ 41,40 ((50 x R$ 0,80) + (2 x R$ 0,70)).</content>
</page>

<page>
  <title>Criar plano</title>
  <url>https://docs.pagar.me/reference/criar-plano-1</url>
  <content>post https://api.pagar.me/core/v5/plans

Este recurso possibilita a criação de um `plan` que poderá ser utilizado futuramente para a criação de uma assinatura. Para mais detalhes consulte a [pagina principal do objeto](https://docs.pagar.me/reference/planos-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Planos</title>
  <url>https://docs.pagar.me/reference/planos-1</url>
  <content>O objeto `plan` representa um _template_ pré-definido de assinatura, isto é, um **plano**, que facilita a criação de uma nova assinatura para um cliente. Saiba mais sobre planos acessando nossa [Pagina de Guias](https://docs.pagar.me/docs/plano). O objeto `plan` possui os seguintes atributos:

Para visualizar as informações de negócio consulte o nosso [Guia](https://docs.pagar.me/docs/plano).

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do plano_. Formato: `plan_XXXXXXXXXXXXXXXX`. |
| `name` | **string** | _Nome do plano_. |
| `description` | **string** | _Descrição do plano_. |
| `currency` | **enum** | _Moeda_. Valores possíveis: `BRL`. |
| `interval` | **enum** | _Frequência da recorrência_. Valores possíveis: `day`,`week`, `month` ou `year`. |
| `interval_count` | **integer** | _Número de intervalos de acordo com a propriedade **interval** entre cada cobrança da assinatura_. Ex.: plano mensal = **interval\_count** (1) e **interval** (month); plano trimestral = **interval\_count** (3) e **interval** (month); plano semestral = **interval\_count** (6) e **interval** (month). |
| `minimum_price` | **integer** | _Valor mínimo em centavos da assinatura_. |
| `billing_type` | **enum** | _Tipo de cobrança_. Valores possíveis: `prepaid`, `postpaid` ou `exact_day`. |
| `billing_days` | **array of integers** | _Dias disponíveis para cobrança das assinaturas criadas a partir do plano_. |
| `payment_methods` | **array of strings** | _Meios de pagamento disponíveis para assinaturas criadas a partir do plano_. Valores possíveis: `credit_card`, `boleto` ou `cash`. |
| `installments` | **array of integers** | _Opções de parcelamento disponíveis para assinaturas criadas a partir do plano_. Disponível apenas caso o meio de pagamento da assinatura seja `credit_card`. |
| `statement_descriptor` | **string** | _Texto exibido na fatura do cartão_. |
| `trial_period_days` | **integer** | _Número de dias de trial_. O cliente só será cobrado após esse período, quando a assinatura será iniciada. |
| `status` | **enum** | _Status do plano_. Valores possíveis: `active`, `inactive` ou `deleted`. |
| `shippable` | **boolean** | _Indica se o produto oferecido pelo plano é passível de entrega_. Por exemplo, planos relacionados a serviços não possuem dados para entrega. |
| `created_at` | **datetime** | _Data de criação do plano (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do plano (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão do plano (UTC)_. |
| `items` | **array of objects** | _Itens do plano_.[Saiba mais sobre itens do plano](https://docs.pagar.me/reference/item-do-plano-1). |
| `metadata` | **object** | _Informações adicionais sobre o plano_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |

Exemplos de Requests de criação de plano, com diferentes [tipos de precificação](https://docs.pagar.me/docs/price-scheme):

    {
        "name": "Plano somente com Parâmetros Obrigatórios", // Nome do plano
        "payment_methods": [
            "credit_card",
            "boleto",
            "debit_card"
        ], // Meios de pagamentos aceitos. Caso o parâmetro não seja indicado, a assinatura somente poderá ser paga via credit card
        "items": [
            {
                "name": "Nome do item 1",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 18990
                }
            }
        ] // Um item pode conter diversos atributos, porém ao gerar um plano somente estes são obrigatórios
    }
    

    {
        "name": "Plano Unit", // Nome do plano
        "description": "Plano de teste", // Descrição do plano
        "shippable": "True", // Indica se o plano oferece entrega
        "payment_methods": [
            "credit_card",
            "boleto",
            "debit_card"
        ], // Meios de pagamentos aceitos. Caso o parâmetro não seja indicado, a assinatura somente poderá ser paga via credit_card
        "minimum_price": "1000", // Valor mínimo em centavos da fatura
        "statement_descriptor": "Plano contratado", // Texto exibido na fatura do cartão de crédito. Máximo 13 caracteres
        "currency": "BRL", // Moeda
        "interval": "month", // Frequência da recorrência. Valores possíveis: day,week, month ou year
        "installments": [
            2
        ], // Opções de parcelamento disponíveis. Caso não seja informado, o plano irá disponibilizar apenas assinaturas com pagamentos à vista
        "interval_count": 2, // Número de intervalos de acordo com a propriedade interval entre cada cobrança da assinatura
        "trial_period_days": 10, // Dias de teste
        "billing_type": "prepaid", // Tipo de cobrança. Valores possíveis: prepaid, postpaid ou exact_day
        "items": [
            {
                "name": "Nome do item 1",
                "quantity": 1,
                "status": "active", // Valores possíveis: active, inactive ou deleted
                "pricing_scheme": {
                    "scheme_type": "unit",
                    "price": 18990
                }
            }
        ]
    }
    

    {
        "name": "Plano Package", // Nome do plano
        "description": "Plano de teste", // Descrição do plano
        "shippable": "True", // Indica se o plano oferece entrega
        "payment_methods": [
            "credit_card",
            "boleto",
            "debit_card"
        ], // Meios de pagamentos aceitos. Caso o parâmetro não seja indicado, a assinatura somente poderá ser paga via credit_card
        "minimum_price": "10000", // Valor mínimo em centavos da fatura
        "statement_descriptor": "Plano contratado", // Texto exibido na fatura do cartão de crédito. Máximo 13 caracteres
        "currency": "BRL", // Moeda
        "interval": "month", // Frequência da recorrência. Valores possíveis: day,week, month ou year
        "installments": [
            2
        ], // Opções de parcelamento disponíveis. Caso não seja informado, o plano irá disponibilizar apenas assinaturas com pagamentos à vista
        "interval_count": 2, // Número de intervalos de acordo com a propriedade interval entre cada cobrança da assinatura
        "trial_period_days": 10, // Dias de teste
        "billing_type": "prepaid", // Tipo de cobrança. Valores possíveis: prepaid, postpaid ou exact_day
        "items": [
            {
                "name": "Nome do item 1",
                "quantity": 1,
                "status": "active", // Valores possíveis: active, inactive ou deleted
                "pricing_scheme": {
                    "mininum_price": "1000",
                    "scheme_type": "package", // Tipo de unidade de precificação. Valores possíveis são: unit, package, volume e tier. Default: unit
                    "price_brackets": [
                        {
                            "start_quantity": 0,
                            "end_quantity": 10,
                            "price": 5000
                        },
                        {
                            "start_quantity": 11,
                            "end_quantity": 50,
                            "price": 7000
                        },
                        {
                            "start_quantity": 51,
                            "end_quantity": 100,
                            "price": 10000,
                            "overage_price": 90
                        }
                    ] // Este atributo está disponível para os scheme_type : package, volume e tier
                }
            }
        ]
    }
    

    {
        "name": "Plano Volume", // Nome do plano
        "description": "Plano de teste", // Descrição do plano
        "shippable": "True", // Indica se o plano oferece entrega
        "payment_methods": [
            "credit_card",
            "boleto",
            "debit_card"
        ], // Meios de pagamentos aceitos. Caso o parâmetro não seja indicado, a assinatura somente poderá ser paga via credit_card
        "minimum_price": "10000", // Valor mínimo em centavos da fatura
        "statement_descriptor": "Plano contratado", // Texto exibido na fatura do cartão de crédito. Máximo 13 caracteres
        "currency": "BRL", // Moeda
        "interval": "month", // Frequência da recorrência. Valores possíveis: day,week, month ou year
        "installments": [
            2
        ], // Opções de parcelamento disponíveis. Caso não seja informado, o plano irá disponibilizar apenas assinaturas com pagamentos à vista
        "interval_count": 2, // Número de intervalos de acordo com a propriedade interval entre cada cobrança da assinatura
        "trial_period_days": 10, // Dias de teste
        "billing_type": "prepaid", // Tipo de cobrança. Valores possíveis: prepaid, postpaid ou exact_day
        "items": [
            {
                "name": "Nome do item 1",
                "quantity": 1,
                "status": "active", // Valores possíveis: active, inactive ou deleted
                "pricing_scheme": {
                    "mininum_price": "1000",
                    "scheme_type": "volume", // Tipo de unidade de precificação. Valores possíveis são: unit, package, volume e tier. Default: unit
                    "price_brackets": [
                        {
                            "start_quantity": 0,
                            "end_quantity": 10,
                            "price": 5000
                        },
                        {
                            "start_quantity": 11,
                            "end_quantity": 50,
                            "price": 7000
                        },
                        {
                            "start_quantity": 51,
                            "end_quantity": 100,
                            "price": 10000,
                            "overage_price": 90
                        }
                    ] // Este atributo está disponível para os scheme_type : package, volume e tier
                }
            }
        ]
    }
    

    {
        "name": "Plano Tier", // Nome do plano
        "description": "Plano de teste", // Descrição do plano
        "shippable": "True", // Indica se o plano oferece entrega
        "payment_methods": [
            "credit_card",
            "boleto",
            "debit_card"
        ], // Meios de pagamentos aceitos. Caso o parâmetro não seja indicado, a assinatura somente poderá ser paga via credit_card
        "minimum_price": "10000", // Valor mínimo em centavos da fatura
        "statement_descriptor": "Plano contratado", // Texto exibido na fatura do cartão de crédito. Máximo 13 caracteres
        "currency": "BRL", // Moeda
        "interval": "month", // Frequência da recorrência. Valores possíveis: day,week, month ou year
        "installments": [
            2
        ], // Opções de parcelamento disponíveis. Caso não seja informado, o plano irá disponibilizar apenas assinaturas com pagamentos à vista
        "interval_count": 2, // Número de intervalos de acordo com a propriedade interval entre cada cobrança da assinatura
        "trial_period_days": 10, // Dias de teste
        "billing_type": "prepaid", // Tipo de cobrança. Valores possíveis: prepaid, postpaid ou exact_day
        "items": [
            {
                "name": "Nome do item 1",
                "quantity": 1,
                "status": "active", // Valores possíveis: active, inactive ou deleted
                "pricing_scheme": {
                    "mininum_price": "1000",
                    "scheme_type": "tier", // Tipo de unidade de precificação. Valores possíveis são: unit, package, volume e tier. Default: unit
                    "price_brackets": [
                        {
                            "start_quantity": 0,
                            "end_quantity": 10,
                            "price": 5000
                        },
                        {
                            "start_quantity": 11,
                            "end_quantity": 50,
                            "price": 7000
                        },
                        {
                            "start_quantity": 51,
                            "end_quantity": 100,
                            "price": 10000,
                            "overage_price": 90
                        }
                    ] // Este atributo está disponível para os scheme_type : package, volume e tier
                }
            }
        ]
    }</content>
</page>

<page>
  <title>Faixa</title>
  <url>https://docs.pagar.me/reference/faixa</url>
  <content>No `scheme_type` : `tier`, o preço final é baseado nas faixa de consumo de unidades, **de forma cumulativa**.

    {
        "scheme_type": "tier",
        "price_brackets": [
            {
                "start_quantity": 0,
                "end_quantity": 10,
                "price": 100
            },
            {
                "start_quantity": 11,
                "end_quantity": 20,
                "price": 90
            },
            {
                "start_quantity": 21,
                "end_quantity": 50,
                "price": 80,
                "overage_price": 70
            }
        ]
    }
    

No exemplo acima temos a seguinte precificação:

Do 1° ao 10° minuto - Cada minuto custa R$ 1,00.  
Do 11° ao 20° minuto - Cada minuto custa R$ 0,90.  
Do 21° ao 50° minuto - Cada minuto custa R$ 0,80.  
Cada minuto acima da última faixa custa R$ 0,70.

Se um cliente utilizar 25 minutos o valor total será R$23,00 ((10 x R$ 1,00) + (10 x R$ 0,90) + (5 x R$0,80)).</content>
</page>

<page>
  <title>Editar metadados do plano</title>
  <url>https://docs.pagar.me/reference/editar-metadados-do-plano-1</url>
  <content>patch https://api.pagar.me/core/v5/plans//metadata

Com o verbo _HTTP PATCH_, através do identificador do plano (`plan_id`) é possível atualizar o objeto `metadata` do plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter plano</title>
  <url>https://docs.pagar.me/reference/obter-plano-1</url>
  <content>get https://api.pagar.me/core/v5/plans/

A partir do identificador de um plano criado (`plan_id`) é possível recuperar as informações deste plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar plano</title>
  <url>https://docs.pagar.me/reference/editar-plano-1</url>
  <content>put https://api.pagar.me/core/v5/plans/

Com o verbo HTTP PUT, através do identificador do plano (`plan_id`) é possível atualizar os dados do plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar planos</title>
  <url>https://docs.pagar.me/reference/listar-planos-1</url>
  <content>get https://api.pagar.me/core/v5/plans

Este recurso permite listar seus planos. Pode ser utilizados alguns parâmetros como filtro da listagem.

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference#pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Excluir plano</title>
  <url>https://docs.pagar.me/reference/excluir-plano-1</url>
  <content>delete https://api.pagar.me/core/v5/plans/

Com o verbo HTTP DELETE, através do identificador do plano (`plan_id`) é possível excluir um plano.

> 📘
> 
> Planos com assinaturas em curso
> 
> 
> -------------------------------------
> 
> A exclusão de um plano **não afeta** assinaturas correntes de clientes que porventura sejam oriundas do plano excluído, apenas **impede a criação de novas assinaturas** do plano excluído.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Assinaturas</title>
  <url>https://docs.pagar.me/reference/assinaturas-1</url>
  <content>O objeto `subscription` é uma recorrência em si, que possibilita a cobrança do clientes com intervalos pré determinados, sem que seja necessário criar essa regra de negócio do seu lado. O objeto `subscription` contêm os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código da assinatura_. Formato: `sub_XXXXXXXXXXXXXXXX`. |
| `payment_method` | **string** | _Meio de pagamento_. Valores possíveis: `credit_card`, `boleto`, `cash` ou `debit_card`. |
| `currency` | **string** | _Moeda_. Valor possível: `BRL`. |
| `start_at` | **datetime** | _Data de início da assinatura_.  
Observação: Por padrão, os ciclos se iniciam as 00:00:00, por isso, apenas a data deve ser levada em consideração na response. |
| `interval` | **string** | _Intervalo da recorrência_. Valores possíveis: `day`, `week`, `month` ou `year`. |
| `interval_count` | **string** | _Repetições do intervalo da recorrência_. Ex: plano mensal = **interval\_count** (1) e **interval** (month); plano trimestral = **interval\_count** (3) e **interval** (month); plano semestral = **interval\_count** (6) e **interval** (month). |
| `billing_type` | **string** | _Tipo de cobrança_. Valores possíveis: `prepaid`, `postpaid` ou `exact_day`. |
| `billing_day` | **integer** | Dia da cobrança. **Obrigatório**, caso o `billing_type` seja `exact_day`. |
| `current_cycle` | **object** | _Período atual da assinatura_. |
| `next_billing_at` | **datetime** | _Data da próxima cobrança_. |
| `installments` | **integer** | _Quantidade de parcelas_. Será aplicada caso o método de pagamento da assinatura seja cartão de crédito . |
| `statement_descriptor` | **integer** | _Texto exibido na fatura do cartão_. |
| `customer` | **object** | _Dados do cliente_. [Saiba mais sobre clientes](https://docs.pagar.me/reference/clientes-1). |
| `card` | **object** | _Dados do cartão de crédito_. [Saiba mais sobre cartões](https://docs.pagar.me/reference/cart%C3%B5es-1). |
| `plan` | **object** | _Dados do plano_. [Saiba mais sobre planos](https://docs.pagar.me/reference/planos-1). |
| `discounts` | **array of objects** | _Descontos_. |
| `increments` | **array of objects** | _Incrementos_. |
| `minimum_price` | **integer** | _Valor mínimo, **em centavos**, da assinatura_. |
| `items` | **array of objects** | _Itens da assinatura_. [Saiba mais sobre itens da assinatura](https://docs.pagar.me/reference/item-da-assinatura-1). |
| `status` | **string** | _Status da assinatura_. Valores possíveis: `active`, `canceled` ou `future`. |
| `created_at` | **datetime** | _Data de criação da assinatura (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização da assinatura (UTC)_. |
| `canceled_at` | **datetime** | _Data de cancelamento da assinatura (UTC)_. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o assinatura_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |
| `split` | **object** | Split na assinatura.  
[Saiba mais sobre split na recorrência](https://docs.pagar.me/reference/split-na-recorr%C3%AAncia). |

> 🚧
> 
> Formas de Pagamento de Assinaturas
> 
> 
> ----------------------------------------
> 
> Podemos criar uma assinatura com os dois meios de pagamento distintos: `credit_card` ou `boleto`. Caso utilize `credit_card` será necessário o envio do `card` dentro da requisição juntamente do `payment_method`. Já no caso do `boleto` somente será necessário o `payment_method`.

> 🚧
> 
> Assinaturas e o Staus Chargeback
> 
> 
> --------------------------------------
> 
> A partir do dia 12 de setembro de 2023, o status _chargedback_ será acrescentado à API do Pagar.me como um novo status de [cobrança](https://docs.pagar.me/reference/cobran%C3%A7as-1).  
> [Saiba mais sobre o fluxo de Assinaturas com cobranças em status Chargeback.](https://docs.pagar.me/page/chargeback-novo-status-na-cobran%C3%A7a)
> 
> **Quando uma _charge_ de uma assinatura sofre chargeback, essa assinatura será cancelada de forma automática**.</content>
</page>

<page>
  <title>Criar assinatura de plano</title>
  <url>https://docs.pagar.me/reference/criar-assinatura-de-plano-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions

Fornecemos a possibilidade de criação de uma assinatura (`subscription`) a partir de plano (`plan`).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter assinatura</title>
  <url>https://docs.pagar.me/reference/obter-assinatura-1</url>
  <content>get https://api.pagar.me/core/v5/subscriptions/

Este recurso possibilita, através do identificador da assinatura (`subscription_id`), recuperar as informações da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar assinatura avulsa</title>
  <url>https://docs.pagar.me/reference/criar-assinatura-avulsa</url>
  <content>post https://api.pagar.me/core/v5/subscriptions

Fornecemos a possibilidade de criação de uma assinatura (`subscription`) sem a necessidade de criação de um plano (`plan`).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar assinaturas</title>
  <url>https://docs.pagar.me/reference/listar-assinaturas-1</url>
  <content>get https://api.pagar.me/core/v5/subscriptions

Este recurso permite listar as assinaturas. Pode ser utilizados alguns parâmetros como filtro da listagem.

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar cartão da assinatura</title>
  <url>https://docs.pagar.me/reference/editar-cart%C3%A3o-da-assinatura-1</url>
  <content>patch https://api.pagar.me/core/v5/subscriptions//card

Com o verbo _HTTP PATCH_, através do identificador da assinatura (`subscription_id`) é possível atualizar o cartão utilizado para pagamento da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cancelar assinatura</title>
  <url>https://docs.pagar.me/reference/cancelar-assinatura-1</url>
  <content>delete https://api.pagar.me/core/v5/subscriptions/

Com o verbo HTTP DELETE, através do identificador da assinatura (`subscription_id`) é possível cancelar a assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar metadados da assinatura</title>
  <url>https://docs.pagar.me/reference/editar-metadados-da-assinatura-1</url>
  <content>patch https://api.pagar.me/core/v5/subscriptions//metadata

Com o verbo _HTTP PATCH_, através do identificador da assinatura (`subscription_id`) é possível atualizar o objeto `metadata` da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar data de início da assinatura</title>
  <url>https://docs.pagar.me/reference/editar-data-de-in%C3%ADcio-da-assinatura-1</url>
  <content>patch https://api.pagar.me/core/v5/subscriptions//start-at

Com o verbo _HTTP PATCH_, através do identificador da assinatura (`subscription_id`) é possível atualizar a data de início da assinatura.

> 📘
> 
> Restrições de mudança de data
> 
> 
> -----------------------------------
> 
> 1 - Não é possível atualizar a data de início da assinatura para o dia anterior ao dia atual.
> 
> 2 - Não é possível atualizar a data de início de uma assinatura que já começou

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar meio de pagamento da assinatura</title>
  <url>https://docs.pagar.me/reference/editar-meio-de-pagamento-da-assinatura</url>
  <content>patch https://api.pagar.me/core/v5/subscriptions//payment-method

Com o verbo HTTP PATCH, através do identificador da assinatura (`subscription_id`) é possível atualizar o meio de pagamento da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar preço mínimo da assinatura</title>
  <url>https://docs.pagar.me/reference/editar-minimum-price-da-assinatura</url>
  <content>patch https://api.pagar.me/core/v5/subscriptions//minimum\_price

Com o verbo HTTP PATCH, através do identificador da assinatura (`subscription_id`) é possível atualizar o minimum price da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Ativar faturamento manual</title>
  <url>https://docs.pagar.me/reference/ativar-faturamento-manual-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//manual-billing

Configuração da assinatura que indica se o faturamento será feito de forma `manual` ou `automática`.`Caso esteja ativa`, as faturas não serão geradas automaticamente pelo nosso sistema, ficando a cargo do lojista realizar o faturamento pelo endpoint [Criar Fatura](https://docs.pagar.me/reference/criar-fatura-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Desativar faturamento manual</title>
  <url>https://docs.pagar.me/reference/desativar-faturamento-manual-1</url>
  <content>delete https://api.pagar.me/core/v5/subscriptions//manual-billing

Configuração da assinatura que indica se o faturamento será feito de forma `manual` ou `automática`.  
`Caso esteja desativada`, as faturas serão geradas automaticamente pelo nosso sistema.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Item da assinatura</title>
  <url>https://docs.pagar.me/reference/item-da-assinatura-1</url>
  <content>Um objeto `subscription` poderá ser compostas por um ou mais `items`. Cada objeto de `items` é composto pelos seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do item da assinatura_. Formato: `si_XXXXXXXXXXXXXXXX`. |
| `description` | **string** | _Descrição do item da assinatura_. |
| `cycles` | **integer** | _Ciclos de cobrança_. Ex: Um ciclo representa que um item será cobrado apenas uma vez. Caso não seja informado, o item será cobrado até que seja desativado. |
| `quantity` | **integer** | _Quantidade de itens_. |
| `status` | **string** | _Status do item da assinatura_. Valores possíveis: `active`, `inactive` ou `deleted` |
| `created_at` | **datetime** | _Data de criação do item da assinatura (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do item da assinatura (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão do item da assinatura (UTC)_. |
| `discounts` | **array of objects** | _Descontos_. |
| `increments` | **array of objects** | _Incrementos_. |
| `pricing_scheme` | **object** | _Esquema de precificação_. [Saiba mais sobre precificação](https://docs.pagar.me/reference/precifica%C3%A7%C3%A3o). |
| `subscription` | **object** | _Dados da assinatura_. [Saiba mais sobre assinaturas](https://docs.pagar.me/reference/assinaturas-1) |
| `name` | **string** | _Nome do item da assinatura_. |</content>
</page>

<page>
  <title>Listar itens de uma assinatura</title>
  <url>https://docs.pagar.me/reference/listar-%C3%ADtens-de-uma-assinatura</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//items

Este recurso permite listar as assinaturas. Pode ser utilizados alguns parâmetros como filtro da listagem.

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Incluir item</title>
  <url>https://docs.pagar.me/reference/incluir-item-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//items

Através do identificador da assinatura (`subscription_id`) é possível incluir itens na assinatura do cliente.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar item</title>
  <url>https://docs.pagar.me/reference/editar-item</url>
  <content>put https://api.pagar.me/core/v5/subscriptions//items/

Com o verbo _HTTP PUT_, através dos identificadores do item (`subscription_item_id`) e da assinatura (`subscription_id`) associada é possível atualizar os dados do item da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Remover item</title>
  <url>https://docs.pagar.me/reference/remover-item</url>
  <content>delete https://api.pagar.me/core/v5/subscriptions//items/

Com o verbo _HTTP DELETE_, através dos identificadores do item (`subscription_item_id`) e da assinatura (`subscription_id`) associada é possível remover um item da assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Uso de um item da assinatura</title>
  <url>https://docs.pagar.me/reference/uso-de-um-item-da-assinatura</url>
  <content>O objeto `usage` descreve o uso de um `items` pertencente a uma `subscription`. O objeto `usage` tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do uso do item da assinatura_. Formato: `usage_XXXXXXXXXXXXXXXX`. |
| `quantity` | **integer** | _Quantidade do uso do item da assinatura_. |
| `description` | **string** | _Descrição do uso do item da assinatura_. |
| `status` | **string** | _Status do uso do item da assinatura_. Valores possíveis: `active` ou `deleted`. |
| `used_at` | **datetime** | _Data do uso do item da assinatura (UTC)_. |
| `created_at` | **datetime** | _Data de criação do uso do item da assinatura (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do uso do item da assinatura (UTC)_. |
| `subscription_item` | **object** | _Itens da assinatura_. [Saiba mais sobre itens da assinatura](https://docs.pagar.me/reference/item-da-assinatura-1). |
| `group` | _string_ | _Código de identificação do grupo no sistema do cliente_ |</content>
</page>

<page>
  <title>Incluir uso</title>
  <url>https://docs.pagar.me/reference/incluir-uso</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//items//usages

Este recurso permite incluir um `usage` de um `items` associado a uma `subscription`.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Remover uso</title>
  <url>https://docs.pagar.me/reference/remover-uso</url>
  <content>delete https://api.pagar.me/core/v5/subscriptions//items//usages/

Com o verbo HTTP DELETE, através dos identificadores do uso (`usage_id`), do item (`subscription_item_id`) a da assinatura associada (`subscription_id`), é possível excluir o uso do item de uma assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar uso</title>
  <url>https://docs.pagar.me/reference/listar-uso</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//items//usages

Este recurso permite listar os usos de um item de assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Incluir item</title>
  <url>https://docs.pagar.me/reference/incluir-item-2</url>
  <content>post https://api.pagar.me/core/v5/plans//items

Através do identificador do plano (`plan_id`) é possível incluir itens ao plano associado.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Item do plano</title>
  <url>https://docs.pagar.me/reference/item-do-plano-1</url>
  <content>Um objeto `plan` poderá ser compostos por um ou mais `items`. Cada objeto de `items` é composto pelos seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do item do plano_. Formato: `pi_XXXXXXXXXXXXXXXX`. |
| `name` | **string** | _Nome do item_. |
| `description` | **string** | _Descrição do item_. |
| `quantity` | **integer** | _Quantidade de itens_. |
| `cycles` | **integer** | _Número de ciclos durante o qual o item será cobrado_. Ex: Um item com `cycles` = 1 representa que um item será cobrado apenas uma vez. Caso não seja informado, o item será cobrado até que seja desativado. |
| `interval` | **string** | _Intervalo de cobrança do item_. |
| `created_at` | **datetime** | _Data de criação do item do plano (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do item do plano (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão do item do plano (UTC)_. |
| `pricing_scheme` | **object** | _Esquema de precificação do item do plano_. [Saiba mais sobre precificação](https://docs.pagar.me/reference/precifica%C3%A7%C3%A3o). |
| `plan` | **object** | _Dados do plano_. [Saiba mais sobre planos](https://docs.pagar.me/reference/planos-1). |
| `status` | **string** | _Status do item do plano_. Valores possíveis: `active`, `inactive` ou `deleted`. |</content>
</page>

<page>
  <title>Editar item</title>
  <url>https://docs.pagar.me/reference/editar-item-1</url>
  <content>put https://api.pagar.me/core/v5/plans//items/

Com o verbo _HTTP PUT_, através dos identificadores do item (`plan_item_id`) e do plano (`plan_id`) associado é possível atualizar os dados do item do plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Remover item</title>
  <url>https://docs.pagar.me/reference/remover-item-1</url>
  <content>delete https://api.pagar.me/core/v5/plans//items/

Com o verbo _HTTP DELETE_, através dos identificadores do item (`plan_item_id`) e do plano (`plan_id`) associado é possível remover um item do plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Desconto</title>
  <url>https://docs.pagar.me/reference/desconto-1</url>
  <content>O objeto `discount` poderá ser adicionado a um objeto de assinatura específico (`subscription`) para gerar um desconto, podendo aplicar-se a assinatura completa ou apenas a um item desta assinatura. O objeto `discount` tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do desconto_. Formato: `dis_XXXXXXXXXXXXXXXX`. |
| `value` | **integer** | _Valor do desconto_. |
| `discount_type` | **string** | _Tipo do desconto_.  
Valores possíveis: `flat` ou `percentage`. Valor padrão: `percentage`. |
| `cycles` | **integer** | _Número de vezes que o desconto será aplicado_. |
| `item_id` | **string** | _Código do Item que receberá o desconto_. Se não informado o desconto será aplicado à oda assinatura. |
| `status` | **string** | _Status do desconto_. Valores possíveis: `active` ou `deleted`. |
| created\_at | **datetime** | _Data da criação do desconto (UTC)_. |</content>
</page>

<page>
  <title>Incluir desconto</title>
  <url>https://docs.pagar.me/reference/incluir-desconto-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//discounts

Este recurso permite adicionar um desconto, através do identificador da assinatura (`subscription_id`).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter desconto</title>
  <url>https://docs.pagar.me/reference/obter-desconto-1</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//discounts/

Através dos identificadores da assinatura (`subscription_id`) e do desconto associado (`discount_id`) é possível recuperar as informações do desconto.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar descontos</title>
  <url>https://docs.pagar.me/reference/listar-descontos-2</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//discounts

Este recurso permite listar os descontos associados a uma assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Incremento</title>
  <url>https://docs.pagar.me/reference/incremento-1</url>
  <content>O objeto `increment` poderá ser adicionado a um objeto de assinatura específico (`subscription`) para gerar um incremento, podendo aplicar-se a assinatura completa ou apenas a um item desta assinatura. O objeto `increment` tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do incremento_. Formato: `inc_XXXXXXXXXXXXXXXX`. |
| `value` | **integer** | _Valor do incremento_. |
| `increment_type` | **string** | _Tipo do incremento_.  
Valores possíveis: `flat` ou `percentage`. Valor padrão: `percentage`. |
| `cycles` | **integer** | _Número de vezes que o incremento será aplicado_. |
| `item_id` | **string** | _Código do Item que receberá o incremento_. Se não informado o incremento será aplicado à toda assinatura. |
| `status` | **string** | _Status do incremento_. Valores possíveis: `active` ou `deleted`. |
| created\_at | **datetime** | _Data da criação do incremento (UTC)_. |</content>
</page>

<page>
  <title>Remover desconto</title>
  <url>https://docs.pagar.me/reference/remover-desconto-1</url>
  <content>delete https://api.pagar.me/core/v5/subscriptions//discounts/

Com o verbo _HTTP DELETE_, através dos identificadores do desconto (`discount_id`) e da assinatura associada (`subscription_id`) é possível remover um desconto do plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Incluir incremento</title>
  <url>https://docs.pagar.me/reference/incluir-incremento-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//increments

Este recurso permite adicionar um incremento, através do identificador da assinatura (`subscription_id`).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar incrementos</title>
  <url>https://docs.pagar.me/reference/listar-incrementos</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//increments

Este recurso permite listar os incrementos associados a uma assinatura.

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference#pagina%C3%A7%C3%A3o).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter incremento</title>
  <url>https://docs.pagar.me/reference/obter-incremento-1</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//increments/

Através dos identificadores da assinatura (`subscription_id`) e do incremento associado (`incremento_id`) é possível recuperar as informações do incremento.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Remover incremento</title>
  <url>https://docs.pagar.me/reference/remover-incremento-1</url>
  <content>delete https://api.pagar.me/core/v5/subscriptions//increments/

Com o verbo _HTTP DELETE_, através dos identificadores do incremento (`increment_id`) e da assinatura associada (`subscription_id`) é possível remover um incremento do plano.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar fatura</title>
  <url>https://docs.pagar.me/reference/criar-fatura-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//cycles//pay

Este recurso cria uma fatura (`invoice`) de acordo com o identificador do ciclo a ser cobrado (`cycle_id`) de um determinada assinatura (`subscription_id`).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Faturas</title>
  <url>https://docs.pagar.me/reference/faturas-1</url>
  <content>O objeto `invoice` representa os documentos gerados automaticamente ao final de cada ciclo de uma assinatura, discriminando todos os valores referentes à assinatura, como itens e descontos, para realização da cobrança do assinante. [Saiba mais sobre faturas](https://docs.pagar.me/docs/fatura). o objeto `invoice` tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código da fatura_. Formato: `in_XXXXXXXXXXXXXXXX` |
| `url` | **string** | _URL da página de pagamento da fatura_. |
| `amount` | **integer** | _Valor total em centavos_. |
| `payment_method` | **string** | _Meio de pagamento_. Valores possíveis: `credit_card`, `boleto` ou `cash` |
| `installments` | **integer** | _Quantidade de parcelas_. Será aplicado caso o método de pagamento da assinatura seja `cartão de crédito`. |
| `status` | **string** | _Status da fatura_. Valores possíveis: `pending`, `paid`, `canceled`, `scheduled` ou `failed`. |
| `billing_at` | **datetime** | _Data da cobrança da fatura_. |
| `seen_at` | **datetime** | _Data de visualização da fatura_. |
| `due_at` | **datetime** | _Data de vencimento da fatura_. |
| `created_at` | **datetime** | _Data de criação da fatura (UTC)_. |
| `canceled_at` | **datetime** | _Data de cancelamento da fatura (UTC)_. |
| `period` | **object** | _Período da fatura_. |
| `items` | **array of objects** | _Item da fatura_. |
| `subscription` | **object** | _Dados da assinatura_. [Saiba mais sobre assinaturas](https://docs.pagar.me/reference/assinaturas-1). |
| `customer` | **object** | _Dados do cliente_. [Saiba mais sobre clientes](https://docs.pagar.me/reference/clientes-1). |
| `metadata` | **object** | _Informações adicionais sobre a fatura_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1) |
| `total_discount` | **integer** | \_Cálculo total dos descontos aplicados. |
| `total_increment` | **integer** | \_Cálculo total dos acréscimos aplicados. |</content>
</page>

<page>
  <title>Obter fatura</title>
  <url>https://docs.pagar.me/reference/obter-fatura-1</url>
  <content>get https://api.pagar.me/core/v5/invoices/

Através do identificador da fatura (`invoice_id`) é possível recuperar as informação da fatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar faturas</title>
  <url>https://docs.pagar.me/reference/listar-faturas-1</url>
  <content>get https://api.pagar.me/core/v5/invoices

Este recurso permite listar os descontos associados a uma assinatura. Pode ser utilizados alguns parâmetros como filtro da listagem.

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar metadados da fatura</title>
  <url>https://docs.pagar.me/reference/editar-metadados-da-fatura-1</url>
  <content>patch https://api.pagar.me/core/v5/invoices//metadata

Com o verbo _HTTP PATCH_, através do identificador da fatura (`invoice_id`) é possível atualizar o objeto `metadata` da fatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cancelar fatura</title>
  <url>https://docs.pagar.me/reference/cancelar-fatura-1</url>
  <content>delete https://api.pagar.me/core/v5/invoices/

Com o verbo _HTTP DELETE_, através do identificador da fatura (`invoice_id`), este recurso possibilita realizar o cancelamento da fatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Renovar ciclo</title>
  <url>https://docs.pagar.me/reference/renovar-ciclo-1</url>
  <content>post https://api.pagar.me/core/v5/subscriptions//cycles

Através do identificador da assinatura (`subscription_id`) é possível renovar o ciclo de uma assinatura. A utilização do método irá sempre renovar o ciclo à frente. Para Listar os ciclos de uma assinatura, acesse [Listar Ciclos](https://docs.pagar.me/reference/listar-ciclos-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Ciclos</title>
  <url>https://docs.pagar.me/reference/ciclos-1</url>
  <content>O objeto `cycle` representa o ciclo de faturamento de uma assinatura. O objeto `cycle` tem os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do ciclo_. Formato: `cycle_XXXXXXXXXXXXXXXX`. |
| `billing_at` | **datetime** | _Data da cobrança do ciclo_. |
| `cycle` | **integer** | _Ciclo de faturamento do período_. |
| `start_at` | **datetime** | _Data de início do ciclo_. |
| `end_at` | **datetime** | _Data de fim do ciclo_. |
| `duration` | **integer** | _Duração do ciclo_. |
| `created_at` | **datetime** | _Data de criação do ciclo (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do ciclo (UTC)_. |
| `status` | **string** | _Status do ciclo_. |

> 🚧
> 
> Assinaturas futuras
> 
> 
> -------------------------
> 
> Não é possível renovar o ciclo de uma assinatura futura. No entanto, é possível antecipar a ativação da assinatura atualizando o `start_at` para a data mais próxima permitida pela API (dia seguinte). Quando a assinatura estiver ativa, será possível renovar o ciclo manualmente quantas vezes for necessário.</content>
</page>

<page>
  <title>Obter ciclo</title>
  <url>https://docs.pagar.me/reference/obter-ciclo-1</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//cycles/

Através do identificador do ciclo (`cycle_id`) é possível recuperar as informação do ciclo de uma assinatura.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Split</title>
  <url>https://docs.pagar.me/reference/split-na-recorr%C3%AAncia</url>
  <content>Fornecemos a possibilidade de criação de uma assinatura com split, onde a assinatura terá um ou mais recebedores.

Tais recebedores terão acesso a uma parte do valor da compra recorrentemente, podendo informar uma porcentagem do valor.

Ao ativar a regra na recorrência toda cobrança gerada a partir da assinatura possuirá split.

> 🚧
> 
> Quem pode usar Split
> 
> 
> --------------------------
> 
> Esta funcionalidade está disponível apenas para clientes PSP

Para criar uma recorrência com split basta adicionar o objeto split dentro de uma assinatura, conforme os exemplos abaixo.

Para conhecer todas as propriedades do Split [confira a nossa documentação](https://docs.pagar.me/reference#split-1).

    "split": {
            "enabled": true,
            "rules": [
                {
                    "amount": 50,
                    "recipient_id": "rp_n9voQ2QT0SQrMwOL",
                    "type": "percentage",
                    "options": {
                        "charge_processing_fee": true,
                        "charge_remainder_fee": true,
                        "liable": true
                    }
                },
                {
                    "amount": 50,
                    "type": "percentage",
                    "recipient_id": "rp_6gyn5oIvAcwjrNej",
                    "options": {
                        "charge_processing_fee": false,
                        "charge_remainder_fee": false,
                        "liable": false
                    }
                }
            ]
        }
    

    {
        "billing_type": "prepaid",
        "items": [
            {
                "name": "Premium",
                "description": "Sem anuncios",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 1490
                }
            },
            {
                "name": "Silver",
                "description": "Com anuncios",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 1490
                }
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]",
            "Document": "11111111111",
            "type": "individual",
            "phones": {
                "home_phone": {
                    "country_code": "55",
                    "area_code": "21",
                    "number": "000000000"
                },
                "mobile_phone": {
                    "country_code": "55",
                    "area_code": "21",
                    "number": "000000000"
                }
            }
        },
        "card": {
            "number": "4000000000000010",
            "holder_name": "Tony Stark",
            "exp_month": 1,
            "exp_year": 22,
            "cvv": "3531",
            "billing_address": {
                "street": "Malibu Point",
                "number": "10880",
                "zip_code": "90265",
                "neighborhood": "Central Malibu",
                "city": "Malibu",
                "state": "CA",
                "country": "US"
            }
        },
        "split": {
            "enabled": true,
            "rules": [
                {
                    "amount": 50,
                    "recipient_id": "rp_n9voQ2QT0SQrMwOL",
                    "type": "percentage",
                    "options": {
                        "charge_processing_fee": true,
                        "charge_remainder_fee": true,
                        "liable": true
                    }
                },
                {
                    "amount": 50,
                    "type": "percentage",
                    "recipient_id": "rp_6gyn5oIvAcwjrNej",
                    "options": {
                        "charge_processing_fee": false,
                        "charge_remainder_fee": false,
                        "liable": false
                    }
                }
            ]
        },
        "metadata": {
            "id": "teste"
        }
    }
    

    {
        "payment_method": "boleto",
        "billing_type": "prepaid",
        "items": [
            {
                "name": "Premium",
                "description": "Sem anuncios",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 1490
                }
            },
            {
                "name": "Silver",
                "description": "Com anuncios",
                "quantity": 1,
                "pricing_scheme": {
                    "price": 1490
                }
            }
        ],
        "customer": {
            "name": "Tony Stark",
            "email": "[email protected]"
        },
        "boleto": {
            "bank": "033",
            "instructions": "Pagar até o vencimento",
            "due_at": "2021-12-09T00:00:00Z",
            "document_number": "{{boleto_document_number}}"
        },
        "split": {
            "enabled": true,
            "rules": [
                {
                    "amount": 50,
                    "recipient_id": "rp_n9voQ2QT0SQrMwOL",
                    "type": "percentage",
                    "options": {
                        "charge_processing_fee": true,
                        "charge_remainder_fee": true,
                        "liable": true
                    }
                },
                {
                    "amount": 50,
                    "type": "percentage",
                    "recipient_id": "rp_6gyn5oIvAcwjrNej",
                    "options": {
                        "charge_processing_fee": false,
                        "charge_remainder_fee": false,
                        "liable": false
                    }
                }
            ]
        },
        "metadata": {
            "id": "teste"
        }
    }
    

O objeto `split` na recorrência tem os seguintes atributos.

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| Enabled | Boolean | Indica se o split está habilitado ou não na assinatura. |
| Rules | Array of Objects | Configurações para pagamentos com Split. [Saiba mais sobre Split](https://docs.pagar.me/reference/split-1). |

> 🚧
> 
> Importante
> 
> 
> ----------------
> 
> É preciso criar no mínimo dois recebedores para ativar a regra Split para saber como criar recebedores [confira a nossa documentação](https://docs.pagar.me/reference#recebedores-1).
> 
> Só é possível fazer split na recorrência através de porcentagens (´type´: ´percentage´). Valores monetários de (´type´: ´flat´) não são permitidos.
> 
> Os valores em porcentagens não podem conter decimais.</content>
</page>

<page>
  <title>Listar ciclos</title>
  <url>https://docs.pagar.me/reference/listar-ciclos-1</url>
  <content>get https://api.pagar.me/core/v5/subscriptions//cycles

Este recurso permite listar os ciclos associados a uma assinatura. Podem ser utilizados alguns parâmetros como filtro da listagem.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Recebedores</title>
  <url>https://docs.pagar.me/reference/recebedores-1</url>
  <content>O objeto `recipient` representa um **recebedor**, que irá receber parte da venda realizada. Para criar um pedido com [Split de pagamentos](https://docs.pagar.me/reference/split-1), você deve primeiramente cadastrar recebedores. Cada recebedor deve ser criado somente uma vez e poderá ser utilizado em qualquer quantidade de pedidos.

Por exemplo, vamos supor que seu marketplace tem duas lojas cadastradas. Para realizar split entre essas lojas e seu marketplace, você terá que criar três recebedores:

*   Marketplace
*   Loja 1
*   Loja 2

Dessa forma, quando você criar um pedido com Split para a loja 1, você irá enviar o recebedor da loja 1, o recebedor do marketplace e sua regra de divisão para este pedido.

Este objeto possui os seguintes atributos:

> 🚧
> 
> **Atenção - Mudanças no contrato de recebedores**
> 
> 
> -------------------------------------------------------
> 
> Com objetivo de atender as diretrizes dispostas na [Circular 3.978/20 do Banco Central](https://www.bcb.gov.br/pre/normativos/busca/downloadNormativo.asp?arquivo=/Lists/Normativos/Attachments/50905/Circ_3978_v1_O.pdf) sobre os procedimentos a serem adotados para prevenção à lavagem de dinheiro e financiamento ao terrorismo é imprescindível o envio de dados mínimos de cadastro para os sellers dos marketplaces.
> 
> O novo contrato para a criação de recebedores entrou em vigor em **Fevereiro de 2024**. Para obter mais informações, consulte o artigo [Mudanças de contrato na criação de Recebedores](https://docs.pagar.me/page/novas-regras-para-cria%C3%A7%C3%A3o-de-sellers-de-marketplace-c-v5).

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do recebedor_. Formato: `rp_XXXXXXXXXXXXXXXX`. |
| `name` | **string** | _Nome do recebedor_. |
| `email` | **string** | _E-mail do recebedor_. |
| `document` | **string** | _CPF ou CNPJ do recebedor_. |
| `description` | **string** | _Descrição do recebedor_. |
| `type` | **enum** | _Tipo de cliente_. Valores possíveis: `individual` (pessoa física) ou `company` (pessoa jurídica). |
| `status` | **string** | _Status do recebedor_. Valores possíveis: `registration`, `affiliation`, `active`, `refused`, `suspended`, `blocked`, `inactive` |
| `created_at` | **datetime** | _Data de criação do recebedor (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização do recebedor (UTC)_. |
| `default_bank_account` | **object** | _Conta bancária do recebedor_. |
| `transfer_settings` | **object** | _Informações de transferência do recebedor_. |
| `gateway_recipients` | **object** | _Informações do recebedor no gateway_. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o recebedor_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1) |

> ❗️
> 
> SPLIT DE PAGAMENTOS SÓ ESTÁ DISPONÍVEL PARA PAGAR.ME
> 
> 
> ----------------------------------------------------------
> 
> As funcionalidades do [Split de Pagamento](https://docs.pagar.me/reference/split-1) só estão disponíveis para contas configuradas com a adquirencia Pagar.me

> 🚧
> 
> Status do Recebedor
> 
> 
> -------------------------
> 
> Recebedores podem receber os seguintes status:
> 
> **registration**: Estágio no qual o recebedor já passou pelo pré-credenciamento e está com o auto credenciamento pendente. Aqui ele pode transacionar, mas **não pode** realizar um [saque](https://docs.pagar.me/reference/v5/reference#cria-saque).
> 
> **affiliation**: Estágio no qual o recebedor já passou pelo auto credenciamento e está esperando a afiliação por parte do Pagar.me. Ele continua podendo transacionar, mas **não pode** realizar um [saque](https://docs.pagar.me/reference/v5/reference#cria-saque).
> 
> **active**: Estágio no qual o recebedor já passou por todos os estágios do credenciamento e esta apto a transacionar e realizar [saques](https://docs.pagar.me/reference/v5/reference#cria-saque).
> 
> **refused**: Estágio no qual o recebedor foi recusado no pré-credenciamento ou na afiliação. Nesse estágio o recebedor **não** esta apto a realizar transações e [saques](https://docs.pagar.me/reference/v5/reference#cria-saque).
> 
> **suspended**: Estágio no qual o recebedor não se auto credenciou após um período de dias, ou teve pendências no estágio de afiliação. Nesse estágio o recebedor **não esta apto** a realizar transações e [saques](https://docs.pagar.me/reference/v5/reference#cria-saque).
> 
> **blocked**: Estágio no qual após ativo, mostrou comportamento suspeito. Nesse estágio o recebedor **não** esta apto a realizar transações e [saques](https://docs.pagar.me/reference/v5/reference#cria-saque).
> 
> **inactive**: Estágio no qual após ser monitorado, mostrou comportamento suspeito, e comprovamos algo de errado. Nesse estágio o recebedor **não** esta apto a realizar transações e [saques](https://docs.pagar.me/reference/v5/reference#cria-saque).

*   [Table of Contents](#)
*   *   [Objeto **recipient**](#objeto-recipient)</content>
</page>

<page>
  <title>Editar regras do Split</title>
  <url>https://docs.pagar.me/reference/editar-ativa%C3%A7%C3%A3o-ou-regras-do-split</url>
  <content>patch https://api.pagar.me/core/v5/subscriptions//split

Com o verbo HTTP PATCH, através do identificador da assinatura (subscription\_id) é possível ativar, desativar ou alterar as regras do split na recorrência.

Para realizar a edição tem que ser enviado pelo menos um dos campos, `enabled` ou `rules`, ambos campos são opcionais e independentes.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar recebedor</title>
  <url>https://docs.pagar.me/reference/criar-recebedor-1</url>
  <content>post https://api.pagar.me/core/v5/recipients

Rota para criar um recebedor, definindo os dados do recebedor, transferência e qual a conta bancária que será utilizada para envio dos pagamentos.

> 🚧
> 
> **Atenção - Mudanças no contrato de recebedores**
> 
> 
> -------------------------------------------------------
> 
> Com objetivo de atender as diretrizes dispostas na [Circular 3.978/20 do Banco Central](https://www.bcb.gov.br/pre/normativos/busca/downloadNormativo.asp?arquivo=/Lists/Normativos/Attachments/50905/Circ_3978_v1_O.pdf) sobre os procedimentos a serem adotados para prevenção à lavagem de dinheiro e financiamento ao terrorismo é imprescindível o envio de dados mínimos de cadastro para os sellers dos marketplaces.
> 
> O novo contrato para a criação de recebedores entrou em vigor em **Fevereiro de 2024**. Para obter mais informações, consulte o artigo [Mudanças de contrato na criação de Recebedores](https://docs.pagar.me/page/novas-regras-para-cria%C3%A7%C3%A3o-de-sellers-de-marketplace-c-v5).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar link de de Prova de Vida (KYC)</title>
  <url>https://docs.pagar.me/reference/criar-link-recebedor</url>
  <content>post https://api.pagar.me/core/v5/recipients//kyc\_link

Rota para gerar o QR Code de acesso ao webapp.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar recebedor</title>
  <url>https://docs.pagar.me/reference/editar-recebedor-1</url>
  <content>put https://api.pagar.me/core/v5/recipients/

Rota para criar um recebedor, definindo os dados do recebedor, transferência e qual a conta bancária que será utilizada para envio dos pagamentos.

> 🚧
> 
> **Atenção - Mudanças no contrato de recebedores**
> 
> 
> -------------------------------------------------------
> 
> Com objetivo de atender as diretrizes dispostas na [Circular 3.978/20 do Banco Central](https://www.bcb.gov.br/pre/normativos/busca/downloadNormativo.asp?arquivo=/Lists/Normativos/Attachments/50905/Circ_3978_v1_O.pdf) sobre os procedimentos a serem adotados para prevenção à lavagem de dinheiro e financiamento ao terrorismo é imprescindível o envio de dados mínimos de cadastro para os sellers dos marketplaces.
> 
> O novo contrato para a criação de recebedores entrou em vigor em **Fevereiro de 2024**. Para obter mais informações, consulte o artigo [Mudanças de contrato na criação de Recebedores](https://docs.pagar.me/page/novas-regras-para-cria%C3%A7%C3%A3o-de-sellers-de-marketplace-c-v5).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter recebedor</title>
  <url>https://docs.pagar.me/reference/obter-recebedor-1</url>
  <content>get https://api.pagar.me/core/v5/recipients/

Retorna um objeto com os dados de um recebedor específico.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar recebedores</title>
  <url>https://docs.pagar.me/reference/listar-recebedores-1</url>
  <content>get https://api.pagar.me/core/v5/recipients

Retorna uma lista de objetos com os dados dos recebedor encontrados.

> 📘
> 
> Paginação
> 
> 
> ---------------
> 
> Este recurso utiliza **paginação** para manipulação da listagem resultante. [Saiba mais sobre paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1).

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Editar code de recebedor</title>
  <url>https://docs.pagar.me/reference/atualizar-code-de-recebedor</url>
  <content>patch https://api.pagar.me/core/v5/recipients//code

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Conta bancária</title>
  <url>https://docs.pagar.me/reference/conta-banc%C3%A1ria-1</url>
  <content>O objeto `bank_account` representa a conta bancária associada a um **recebedor**. Este objeto possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código da conta bancária_. Formato: `ba_XXXXXXXXXXXXXXXX`. |
| `recipient` | **object** | _Dados do recebedor_. |
| `holder_name` | **string** | _Nome do titular da conta_. |
| `holder_type` | **string** | _Tipo do titular da conta_. Valores possíveis são `individual` ou `company`. |
| `bank` | **string** | _Banco_. |
| `branch_number` | **string** | _Número da agência_. |
| `branch_check_digit` | **string** | _Dígito verificador da agência_. |
| `account_number` | **string** | _Número da conta bancária_. |
| `account_check_digit` | **string** | _Dígito verificador da conta bancária_. |
| `type` | **string** | _Tipo da conta bancária_. |
| `status` | **string** | _Status da conta bancária._. |
| `created_at` | **datetime** | _Data de criação da conta bancária (UTC)_. |
| `updated_at` | **datetime** | _Data da última atualização da conta bancária (UTC)_. |
| `deleted_at` | **datetime** | _Data de exclusão da conta bancária (UTC)_. |
| `metadata` | **object** | _Objeto chave/valor contendo mais informações sobre a conta bancária_. [Saiba mais sobre Metadata](https://docs.pagar.me/reference/metadata-1). |</content>
</page>

<page>
  <title>Atualizar conta bancária do recebedor</title>
  <url>https://docs.pagar.me/reference/atualizar-conta-banc%C3%A1ria-do-recebedor-1</url>
  <content>patch https://api.pagar.me/core/v5/recipients//default-bank-account

> ❗️
> 
> Para utilizar esta rota, é necessário configurar a sua Allow List
> 
> 
> -----------------------------------------------------------------------
> 
> Para adicionar novos IPs na lista de permissões é só seguir o passo a passo indicado na página:  
> [Allow List](https://docs.pagar.me/docs/ip-allowlist)
> 
> Caso contrário, ao utilizar a rota de atualização de conta bancária do recebedor o retorno será:  
> `{ "message": "Request denied. Second authentication factor is necessary." }`

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter saldo</title>
  <url>https://docs.pagar.me/reference/obter-saldo</url>
  <content>get https://api.pagar.me/core/v5/recipients//balance

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Saldo</title>
  <url>https://docs.pagar.me/reference/saldo-2</url>
  <content>O objeto `balance` representa os saldos associados a um **recebedor**. Este objeto possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `currency` | **string** | _Código da moeda_. |
| `available_amount` | **object** | _Indica o saldo disponível em sua conta digital_. |
| `waiting_funds_amount` | **string** | _Indica o saldo a receber_. |
| `transferred_amount` | **string** | _Indica o saldo transferido para a conta bancária_. |</content>
</page>

<page>
  <title>Saque</title>
  <url>https://docs.pagar.me/reference/saque-1</url>
  <content>o objeto `withdrawals` representa uma **Saque** realizada para a **conta bancária** de um **recebedor**. Este objeto possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código da saque_.  
Formato: `with_XXXXXXXXXXXXXXXX` |
| `amount` | **integer** | _Valor da transferência_. |
| `status` | **string** | _Status da transferência_. Os valores possíveis: `created`, `pending`, `processing`, `transferred`, `failed` ou `canceled`. |
| `created_at` | **datetime** | _Data de criação (UTC)_. |
| `updated_at` | **datetime** | _Data de atualização (UTC)_. |
| `bank_account` | **object** | _Conta bancária para onde foi feita a transferência_. [Saiba mais sobre Conta Bancária](https://docs.pagar.me/reference/conta-banc%C3%A1ria-1). |
| `metadata` | **object** | _Informações adicionais sobre a transferência_. [Saiba mais sobre metadata](https://docs.pagar.me/reference/metadata-1). |</content>
</page>

<page>
  <title>Cria saque</title>
  <url>https://docs.pagar.me/reference/cria-saque-1</url>
  <content>post https://api.pagar.me/core/v5/recipients//withdrawals

Rota para realizar o saque para uma **conta bancária** de um **recebedor**.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter saque</title>
  <url>https://docs.pagar.me/reference/obter-saque-1</url>
  <content>get https://api.pagar.me/core/v5/recipients//withdrawals/

Rota para realizar a consulta de um saque específico.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Configurações de transferência</title>
  <url>https://docs.pagar.me/reference/informa%C3%A7%C3%B5es-de-transfer%C3%AAncia-1</url>
  <content>Pagar.me API
------------

*   [Introdução](https://docs.pagar.me/reference/introdu%C3%A7%C3%A3o-1)
*   [Segurança](https://docs.pagar.me/reference/seguran%C3%A7a-1)
    *   [IP Allowlist](https://docs.pagar.me/reference/ip-allowlist-1)
    *   [Rate Limit](https://docs.pagar.me/reference/rate-limit)
*   [Autenticação](https://docs.pagar.me/reference/autentica%C3%A7%C3%A3o-2)
*   [Erros](https://docs.pagar.me/reference/erros-1)
*   [Paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1)
*   [Metadata](https://docs.pagar.me/reference/metadata-1)
*   [Telefones](https://docs.pagar.me/reference/telefones-1)
*   [Entregas](https://docs.pagar.me/reference/entregas-1)
*   [Facilitadores de pagamento (Dados de Subadquirente)](https://docs.pagar.me/reference/facilitadores-de-pagamento-dados-de-subadquirente)

Carteira de clientes
--------------------

*   [Clientes](https://docs.pagar.me/reference/clientes-1)
    *   [Criar clientepost](https://docs.pagar.me/reference/criar-cliente-1)
    *   [Obter clienteget](https://docs.pagar.me/reference/obter-cliente-1)
    *   [Editar clienteput](https://docs.pagar.me/reference/editar-cliente-1)
    *   [Listar clientesget](https://docs.pagar.me/reference/listar-clientes-1)
*   [Cartões](https://docs.pagar.me/reference/cart%C3%B5es-1)
    *   [Criar cartãopost](https://docs.pagar.me/reference/criar-cart%C3%A3o)
    *   [Obter cartãoget](https://docs.pagar.me/reference/obter-cart%C3%A3o)
    *   [Listar cartãoget](https://docs.pagar.me/reference/listar-cart%C3%A3o)
    *   [Editar cartãoput](https://docs.pagar.me/reference/editar-cart%C3%A3o)
    *   [Excluir cartãodelete](https://docs.pagar.me/reference/excluir-cart%C3%A3o)
    *   [Renovar cartãopost](https://docs.pagar.me/reference/renovar-cart%C3%A3o-1)
    *   [Criar Token cartãopost](https://docs.pagar.me/reference/criar-token-cart%C3%A3o-1)
*   [Endereços](https://docs.pagar.me/reference/endere%C3%A7os)
    *   [Criar endereçopost](https://docs.pagar.me/reference/criar-endere%C3%A7o-1)
    *   [Obter endereçoget](https://docs.pagar.me/reference/obter-endere%C3%A7o-1)
    *   [Editar endereçoput](https://docs.pagar.me/reference/editar-endere%C3%A7o-1)
    *   [Listar endereçosget](https://docs.pagar.me/reference/listar-endere%C3%A7os-1)
    *   [Excluir endereçodelete](https://docs.pagar.me/reference/excluir-endere%C3%A7o-1)
*   [BIN](https://docs.pagar.me/reference/bin)
    *   [Obter informações do BINget](https://docs.pagar.me/reference/obter-informa%C3%A7%C3%B5es-do-bin)

Pagamentos
----------

*   [Visão Geral sobre Pagamento](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-pagamento)
    *   [Cartão de crédito](https://docs.pagar.me/reference/cart%C3%A3o-de-cr%C3%A9dito-1)
    *   [Pix](https://docs.pagar.me/reference/pix-2)
    *   [Boleto](https://docs.pagar.me/reference/boleto-1)
    *   [Voucher](https://docs.pagar.me/reference/voucher-1)
    *   [Google Pay™](https://docs.pagar.me/reference/google-paytm-api)
    *   [Cash](https://docs.pagar.me/reference/cash-2)
    *   [SafetyPay](https://docs.pagar.me/reference/safetypay-1)
    *   [Cartão private label](https://docs.pagar.me/reference/cart%C3%A3o-private-label-2)
    *   [Cartão de débito](https://docs.pagar.me/reference/cart%C3%A3o-de-d%C3%A9bito-2)
*   [Pedidos](https://docs.pagar.me/reference/pedidos-1)
    *   [Criar pedidopost](https://docs.pagar.me/reference/criar-pedido-2)
    *   [Incluir cobrança no pedidopost](https://docs.pagar.me/reference/incluir-cobran%C3%A7a-no-pedido)
    *   [Criar pedido multimeiospost](https://docs.pagar.me/reference/criar-pedido-multimeios)
    *   [Criar pedido multicompradorespost](https://docs.pagar.me/reference/criar-pedido-multicompradores)
    *   [Obter pedidoget](https://docs.pagar.me/reference/obter-pedido)
    *   [Fechar um pedidopatch](https://docs.pagar.me/reference/fechar-um-pedido)
    *   [Listar pedidosget](https://docs.pagar.me/reference/listar-pedidos)
*   [Item do pedido](https://docs.pagar.me/reference/item-do-pedido-1)
    *   [Incluir itempost](https://docs.pagar.me/reference/incluir-item)
    *   [Editar item do pedidoput](https://docs.pagar.me/reference/editar-item-do-pedido)
    *   [Deletar itemdelete](https://docs.pagar.me/reference/deletar-item)
    *   [Remover todos os itensdelete](https://docs.pagar.me/reference/remover-todos-os-itens)
    *   [Obter item do pedidoget](https://docs.pagar.me/reference/obter-item-do-pedido)
*   [Cobranças](https://docs.pagar.me/reference/cobran%C3%A7as-1)
    *   [Capturar cobrançapost](https://docs.pagar.me/reference/capturar-cobran%C3%A7a)
    *   [Obter cobrançaget](https://docs.pagar.me/reference/obter-cobran%C3%A7a)
    *   [Editar cartão de cobrançapatch](https://docs.pagar.me/reference/editar-cart%C3%A3o-de-cobran%C3%A7a)
    *   [Editar data de vencimento da cobrançapatch](https://docs.pagar.me/reference/editar-data-de-vencimento-da-cobran%C3%A7a)
    *   [Editar método de pagamentopatch](https://docs.pagar.me/reference/editar-m%C3%A9todo-de-pagamento)
    *   [Cancelar cobrançadelete](https://docs.pagar.me/reference/cancelar-cobran%C3%A7a)
    *   [Listar cobrançasget](https://docs.pagar.me/reference/listar-cobran%C3%A7as)
    *   [Retentar uma cobrança manualmentepost](https://docs.pagar.me/reference/retentar-uma-cobran%C3%A7a-manualmente)
    *   [Confirmar cobrança (cash)post](https://docs.pagar.me/reference/confirmar-cobran%C3%A7a-cash)

Antifraude
----------

*   [Visão Geral sobre Antifraude](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-antifraude-1)
    *   [Criar pedido (com Antifraude)post](https://docs.pagar.me/reference/criar-pedido-com-antifraude)

Link de Pagamento
-----------------

*   [Link de Pagamento](https://docs.pagar.me/reference/checkout-link)
    *   [Checkout Pagar.me](https://docs.pagar.me/reference/checkout-response)
*   [Criar link de pagamentopost](https://docs.pagar.me/reference/create-link)
*   [Obter link de pagamentoget](https://docs.pagar.me/reference/obter-link)
*   [Obter links de pagamentoget](https://docs.pagar.me/reference/obter-links)
*   [Ativar link de pagamento em construçãopatch](https://docs.pagar.me/reference/ativar-link-de-pagamento-em-constru%C3%A7%C3%A3o)
*   [Cancelar link de pagamentopatch](https://docs.pagar.me/reference/cancelar-um-link-de-pagamento)

Recorrência
-----------

*   [Precificação](https://docs.pagar.me/reference/precifica%C3%A7%C3%A3o)
    *   [Unidade](https://docs.pagar.me/reference/unidade-1)
    *   [Pacote](https://docs.pagar.me/reference/pacote-1)
    *   [Volume](https://docs.pagar.me/reference/volume-1)
    *   [Faixa](https://docs.pagar.me/reference/faixa)
*   [Planos](https://docs.pagar.me/reference/planos-1)
    *   [Criar planopost](https://docs.pagar.me/reference/criar-plano-1)
    *   [Obter planoget](https://docs.pagar.me/reference/obter-plano-1)
    *   [Editar metadados do planopatch](https://docs.pagar.me/reference/editar-metadados-do-plano-1)
    *   [Editar planoput](https://docs.pagar.me/reference/editar-plano-1)
    *   [Excluir planodelete](https://docs.pagar.me/reference/excluir-plano-1)
    *   [Listar planosget](https://docs.pagar.me/reference/listar-planos-1)
*   [Assinaturas](https://docs.pagar.me/reference/assinaturas-1)
    *   [Criar assinatura avulsapost](https://docs.pagar.me/reference/criar-assinatura-avulsa)
    *   [Criar assinatura de planopost](https://docs.pagar.me/reference/criar-assinatura-de-plano-1)
    *   [Obter assinaturaget](https://docs.pagar.me/reference/obter-assinatura-1)
    *   [Listar assinaturasget](https://docs.pagar.me/reference/listar-assinaturas-1)
    *   [Cancelar assinaturadelete](https://docs.pagar.me/reference/cancelar-assinatura-1)
    *   [Editar cartão da assinaturapatch](https://docs.pagar.me/reference/editar-cart%C3%A3o-da-assinatura-1)
    *   [Editar metadados da assinaturapatch](https://docs.pagar.me/reference/editar-metadados-da-assinatura-1)
    *   [Editar meio de pagamento da assinaturapatch](https://docs.pagar.me/reference/editar-meio-de-pagamento-da-assinatura)
    *   [Editar data de início da assinaturapatch](https://docs.pagar.me/reference/editar-data-de-in%C3%ADcio-da-assinatura-1)
    *   [Editar preço mínimo da assinaturapatch](https://docs.pagar.me/reference/editar-minimum-price-da-assinatura)
    *   [Ativar faturamento manualpost](https://docs.pagar.me/reference/ativar-faturamento-manual-1)
    *   [Desativar faturamento manualdelete](https://docs.pagar.me/reference/desativar-faturamento-manual-1)
*   [Item da assinatura](https://docs.pagar.me/reference/item-da-assinatura-1)
    *   [Incluir itempost](https://docs.pagar.me/reference/incluir-item-1)
    *   [Listar itens de uma assinaturaget](https://docs.pagar.me/reference/listar-%C3%ADtens-de-uma-assinatura)
    *   [Editar itemput](https://docs.pagar.me/reference/editar-item)
    *   [Remover itemdelete](https://docs.pagar.me/reference/remover-item)
*   [Uso de um item da assinatura](https://docs.pagar.me/reference/uso-de-um-item-da-assinatura)
    *   [Incluir usopost](https://docs.pagar.me/reference/incluir-uso)
    *   [Remover usodelete](https://docs.pagar.me/reference/remover-uso)
    *   [Listar usoget](https://docs.pagar.me/reference/listar-uso)
*   [Item do plano](https://docs.pagar.me/reference/item-do-plano-1)
    *   [Incluir itempost](https://docs.pagar.me/reference/incluir-item-2)
    *   [Editar itemput](https://docs.pagar.me/reference/editar-item-1)
    *   [Remover itemdelete](https://docs.pagar.me/reference/remover-item-1)
*   [Desconto](https://docs.pagar.me/reference/desconto-1)
    *   [Incluir descontopost](https://docs.pagar.me/reference/incluir-desconto-1)
    *   [Obter descontoget](https://docs.pagar.me/reference/obter-desconto-1)
    *   [Listar descontosget](https://docs.pagar.me/reference/listar-descontos-2)
    *   [Remover descontodelete](https://docs.pagar.me/reference/remover-desconto-1)
*   [Incremento](https://docs.pagar.me/reference/incremento-1)
    *   [Incluir incrementopost](https://docs.pagar.me/reference/incluir-incremento-1)
    *   [Obter incrementoget](https://docs.pagar.me/reference/obter-incremento-1)
    *   [Listar incrementosget](https://docs.pagar.me/reference/listar-incrementos)
    *   [Remover incrementodelete](https://docs.pagar.me/reference/remover-incremento-1)
*   [Faturas](https://docs.pagar.me/reference/faturas-1)
    *   [Criar faturapost](https://docs.pagar.me/reference/criar-fatura-1)
    *   [Obter faturaget](https://docs.pagar.me/reference/obter-fatura-1)
    *   [Listar faturasget](https://docs.pagar.me/reference/listar-faturas-1)
    *   [Editar metadados da faturapatch](https://docs.pagar.me/reference/editar-metadados-da-fatura-1)
    *   [Cancelar faturadelete](https://docs.pagar.me/reference/cancelar-fatura-1)
*   [Ciclos](https://docs.pagar.me/reference/ciclos-1)
    *   [Renovar ciclopost](https://docs.pagar.me/reference/renovar-ciclo-1)
    *   [Obter cicloget](https://docs.pagar.me/reference/obter-ciclo-1)
    *   [Listar ciclosget](https://docs.pagar.me/reference/listar-ciclos-1)
*   [Split](https://docs.pagar.me/reference/split-na-recorr%C3%AAncia)
    *   [Editar regras do Splitpatch](https://docs.pagar.me/reference/editar-ativa%C3%A7%C3%A3o-ou-regras-do-split)

Recebedores
-----------

*   [Recebedores](https://docs.pagar.me/reference/recebedores-1)
    *   [Criar recebedorpost](https://docs.pagar.me/reference/criar-recebedor-1)
    *   [Criar link de de Prova de Vida (KYC)post](https://docs.pagar.me/reference/criar-link-recebedor)
    *   [Editar recebedorput](https://docs.pagar.me/reference/editar-recebedor-1)
    *   [Obter recebedorget](https://docs.pagar.me/reference/obter-recebedor-1)
    *   [Listar recebedoresget](https://docs.pagar.me/reference/listar-recebedores-1)
    *   [Editar code de recebedorpatch](https://docs.pagar.me/reference/atualizar-code-de-recebedor)
*   [Conta bancária](https://docs.pagar.me/reference/conta-banc%C3%A1ria-1)
    *   [Atualizar conta bancária do recebedorpatch](https://docs.pagar.me/reference/atualizar-conta-banc%C3%A1ria-do-recebedor-1)
*   [Saldo](https://docs.pagar.me/reference/saldo-2)
    *   [Obter saldoget](https://docs.pagar.me/reference/obter-saldo)
*   [Saque](https://docs.pagar.me/reference/saque-1)
    *   [Cria saquepost](https://docs.pagar.me/reference/cria-saque-1)
    *   [Obter saqueget](https://docs.pagar.me/reference/obter-saque-1)
    *   [Listar saquesget](https://docs.pagar.me/reference/listar-saques-1)
*   [Configurações de transferência](https://docs.pagar.me/reference/informa%C3%A7%C3%B5es-de-transfer%C3%AAncia-1)
    *   [Atualizar configurações de transferênciapatch](https://docs.pagar.me/reference/atualizar-informa%C3%A7%C3%B5es-de-transfer%C3%AAncia-1)
*   [Configurações de antecipação automática](https://docs.pagar.me/reference/informa%C3%A7%C3%B5es-de-antecipa%C3%A7%C3%A3o-autom%C3%A1tica-1)
    *   [Atualizar configurações de antecipação automáticapatch](https://docs.pagar.me/reference/atualizar-informa%C3%A7%C3%B5es-de-antecipa%C3%A7%C3%A3o-autom%C3%A1tica-1)

financeiro
----------

*   [Recebíveis](https://docs.pagar.me/reference/receb%C3%ADveis)
    *   [Obter recebíveisget](https://docs.pagar.me/reference/retornando-receb%C3%ADveis)
    *   [Obter um recebívelget](https://docs.pagar.me/reference/obter-receb%C3%ADveis-copy)
*   [Operações de Saldo](https://docs.pagar.me/reference/opera%C3%A7%C3%A3o-de-saldo)
    *   [Obter histórico das operaçõesget](https://docs.pagar.me/reference/obter-hist%C3%B3rico-das-opera%C3%A7%C3%B5es)
    *   [Obter histórico específico de uma operaçãoget](https://docs.pagar.me/reference/obter-hist%C3%B3rico-espec%C3%ADfico-de-uma-opera%C3%A7%C3%A3o)

Marketplace
-----------

*   [Visão Geral do Marketplace](https://docs.pagar.me/reference/vis%C3%A3o-geral-do-marketplace)
*   [Split](https://docs.pagar.me/reference/split-1)
    *   [Criar pedido com splitpost](https://docs.pagar.me/reference/criar-pedido-com-split-1)
    *   [Capturar cobrança com splitpost](https://docs.pagar.me/reference/capturar-cobran%C3%A7a-com-split-1)
    *   [Cancelar cobrança com splitdelete](https://docs.pagar.me/reference/cancelar-cobran%C3%A7a-com-split-1)
*   [Res.264/349: Interface Eletrônica para Sellers](https://docs.pagar.me/reference/res264346-manual-de-integra%C3%A7%C3%A3o)
    *   [Retornando URs de um Recebedorget](https://docs.pagar.me/reference/retornando-urs-de-um-recebedor-v5)
    *   [Retornando Efeitos de Contratosget](https://docs.pagar.me/reference/retornando-efeitos-de-contratos-v5)
    *   [Retornando Contratosget](https://docs.pagar.me/reference/retornando-efeitos-de-contratos-copy)
    *   [Retornando Contestaçõesget](https://docs.pagar.me/reference/retornando-contestacoes)
    *   [Contestando um Contratopost](https://docs.pagar.me/reference/contestando-um-contrato-v5)

Tokenizecard JS
---------------

*   [Tokenizecard JS](https://docs.pagar.me/reference/pagarme-js)
*   [Alternativas ao Tokenizecard JS](https://docs.pagar.me/reference/tokeniza%C3%A7%C3%A3o-1)
    *   [Tokenização](https://docs.pagar.me/reference/tokeniza%C3%A7%C3%A3o-1)
    *   [Criar Token Cartão](https://docs.pagar.me/reference/criar-token-cart%C3%A3o-1)
    *   [Criar Checkout](https://docs.pagar.me/v5/reference/checkout-2)

Webhook
-------

*   [Visão geral sobre Webhooks](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-webhooks)
    *   [Exemplo de webhook](https://docs.pagar.me/reference/exemplo-de-webhook-1)
    *   [Eventos de webhook](https://docs.pagar.me/reference/eventos-de-webhook-1)
    *   [Enviar webhookpost](https://docs.pagar.me/reference/enviar-webhook)
    *   [Obter webhookget](https://docs.pagar.me/reference/obter-webhook)
    *   [Listar webhooksget](https://docs.pagar.me/reference/listar-webhooks)

Pagar.me API - Register V5
--------------------------

*   [Getting Started With Your API](https://docs.pagar.me/reference/getting-started-with-your-api)

Pagar.me API
------------

*   [Introdução](https://docs.pagar.me/reference/introdu%C3%A7%C3%A3o-1)
*   [Segurança](https://docs.pagar.me/reference/seguran%C3%A7a-1)
    *   [IP Allowlist](https://docs.pagar.me/reference/ip-allowlist-1)
    *   [Rate Limit](https://docs.pagar.me/reference/rate-limit)
*   [Autenticação](https://docs.pagar.me/reference/autentica%C3%A7%C3%A3o-2)
*   [Erros](https://docs.pagar.me/reference/erros-1)
*   [Paginação](https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1)
*   [Metadata](https://docs.pagar.me/reference/metadata-1)
*   [Telefones](https://docs.pagar.me/reference/telefones-1)
*   [Entregas](https://docs.pagar.me/reference/entregas-1)
*   [Facilitadores de pagamento (Dados de Subadquirente)](https://docs.pagar.me/reference/facilitadores-de-pagamento-dados-de-subadquirente)

Carteira de clientes
--------------------

*   [Clientes](https://docs.pagar.me/reference/clientes-1)
    *   [Criar clientepost](https://docs.pagar.me/reference/criar-cliente-1)
    *   [Obter clienteget](https://docs.pagar.me/reference/obter-cliente-1)
    *   [Editar clienteput](https://docs.pagar.me/reference/editar-cliente-1)
    *   [Listar clientesget](https://docs.pagar.me/reference/listar-clientes-1)
*   [Cartões](https://docs.pagar.me/reference/cart%C3%B5es-1)
    *   [Criar cartãopost](https://docs.pagar.me/reference/criar-cart%C3%A3o)
    *   [Obter cartãoget](https://docs.pagar.me/reference/obter-cart%C3%A3o)
    *   [Listar cartãoget](https://docs.pagar.me/reference/listar-cart%C3%A3o)
    *   [Editar cartãoput](https://docs.pagar.me/reference/editar-cart%C3%A3o)
    *   [Excluir cartãodelete](https://docs.pagar.me/reference/excluir-cart%C3%A3o)
    *   [Renovar cartãopost](https://docs.pagar.me/reference/renovar-cart%C3%A3o-1)
    *   [Criar Token cartãopost](https://docs.pagar.me/reference/criar-token-cart%C3%A3o-1)
*   [Endereços](https://docs.pagar.me/reference/endere%C3%A7os)
    *   [Criar endereçopost](https://docs.pagar.me/reference/criar-endere%C3%A7o-1)
    *   [Obter endereçoget](https://docs.pagar.me/reference/obter-endere%C3%A7o-1)
    *   [Editar endereçoput](https://docs.pagar.me/reference/editar-endere%C3%A7o-1)
    *   [Listar endereçosget](https://docs.pagar.me/reference/listar-endere%C3%A7os-1)
    *   [Excluir endereçodelete](https://docs.pagar.me/reference/excluir-endere%C3%A7o-1)
*   [BIN](https://docs.pagar.me/reference/bin)
    *   [Obter informações do BINget](https://docs.pagar.me/reference/obter-informa%C3%A7%C3%B5es-do-bin)

Pagamentos
----------

*   [Visão Geral sobre Pagamento](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-pagamento)
    *   [Cartão de crédito](https://docs.pagar.me/reference/cart%C3%A3o-de-cr%C3%A9dito-1)
    *   [Pix](https://docs.pagar.me/reference/pix-2)
    *   [Boleto](https://docs.pagar.me/reference/boleto-1)
    *   [Voucher](https://docs.pagar.me/reference/voucher-1)
    *   [Google Pay™](https://docs.pagar.me/reference/google-paytm-api)
    *   [Cash](https://docs.pagar.me/reference/cash-2)
    *   [SafetyPay](https://docs.pagar.me/reference/safetypay-1)
    *   [Cartão private label](https://docs.pagar.me/reference/cart%C3%A3o-private-label-2)
    *   [Cartão de débito](https://docs.pagar.me/reference/cart%C3%A3o-de-d%C3%A9bito-2)
*   [Pedidos](https://docs.pagar.me/reference/pedidos-1)
    *   [Criar pedidopost](https://docs.pagar.me/reference/criar-pedido-2)
    *   [Incluir cobrança no pedidopost](https://docs.pagar.me/reference/incluir-cobran%C3%A7a-no-pedido)
    *   [Criar pedido multimeiospost](https://docs.pagar.me/reference/criar-pedido-multimeios)
    *   [Criar pedido multicompradorespost](https://docs.pagar.me/reference/criar-pedido-multicompradores)
    *   [Obter pedidoget](https://docs.pagar.me/reference/obter-pedido)
    *   [Fechar um pedidopatch](https://docs.pagar.me/reference/fechar-um-pedido)
    *   [Listar pedidosget](https://docs.pagar.me/reference/listar-pedidos)
*   [Item do pedido](https://docs.pagar.me/reference/item-do-pedido-1)
    *   [Incluir itempost](https://docs.pagar.me/reference/incluir-item)
    *   [Editar item do pedidoput](https://docs.pagar.me/reference/editar-item-do-pedido)
    *   [Deletar itemdelete](https://docs.pagar.me/reference/deletar-item)
    *   [Remover todos os itensdelete](https://docs.pagar.me/reference/remover-todos-os-itens)
    *   [Obter item do pedidoget](https://docs.pagar.me/reference/obter-item-do-pedido)
*   [Cobranças](https://docs.pagar.me/reference/cobran%C3%A7as-1)
    *   [Capturar cobrançapost](https://docs.pagar.me/reference/capturar-cobran%C3%A7a)
    *   [Obter cobrançaget](https://docs.pagar.me/reference/obter-cobran%C3%A7a)
    *   [Editar cartão de cobrançapatch](https://docs.pagar.me/reference/editar-cart%C3%A3o-de-cobran%C3%A7a)
    *   [Editar data de vencimento da cobrançapatch](https://docs.pagar.me/reference/editar-data-de-vencimento-da-cobran%C3%A7a)
    *   [Editar método de pagamentopatch](https://docs.pagar.me/reference/editar-m%C3%A9todo-de-pagamento)
    *   [Cancelar cobrançadelete](https://docs.pagar.me/reference/cancelar-cobran%C3%A7a)
    *   [Listar cobrançasget](https://docs.pagar.me/reference/listar-cobran%C3%A7as)
    *   [Retentar uma cobrança manualmentepost](https://docs.pagar.me/reference/retentar-uma-cobran%C3%A7a-manualmente)
    *   [Confirmar cobrança (cash)post](https://docs.pagar.me/reference/confirmar-cobran%C3%A7a-cash)

Antifraude
----------

*   [Visão Geral sobre Antifraude](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-antifraude-1)
    *   [Criar pedido (com Antifraude)post](https://docs.pagar.me/reference/criar-pedido-com-antifraude)

Link de Pagamento
-----------------

*   [Link de Pagamento](https://docs.pagar.me/reference/checkout-link)
    *   [Checkout Pagar.me](https://docs.pagar.me/reference/checkout-response)
*   [Criar link de pagamentopost](https://docs.pagar.me/reference/create-link)
*   [Obter link de pagamentoget](https://docs.pagar.me/reference/obter-link)
*   [Obter links de pagamentoget](https://docs.pagar.me/reference/obter-links)
*   [Ativar link de pagamento em construçãopatch](https://docs.pagar.me/reference/ativar-link-de-pagamento-em-constru%C3%A7%C3%A3o)
*   [Cancelar link de pagamentopatch](https://docs.pagar.me/reference/cancelar-um-link-de-pagamento)

Recorrência
-----------

*   [Precificação](https://docs.pagar.me/reference/precifica%C3%A7%C3%A3o)
    *   [Unidade](https://docs.pagar.me/reference/unidade-1)
    *   [Pacote](https://docs.pagar.me/reference/pacote-1)
    *   [Volume](https://docs.pagar.me/reference/volume-1)
    *   [Faixa](https://docs.pagar.me/reference/faixa)
*   [Planos](https://docs.pagar.me/reference/planos-1)
    *   [Criar planopost](https://docs.pagar.me/reference/criar-plano-1)
    *   [Obter planoget](https://docs.pagar.me/reference/obter-plano-1)
    *   [Editar metadados do planopatch](https://docs.pagar.me/reference/editar-metadados-do-plano-1)
    *   [Editar planoput](https://docs.pagar.me/reference/editar-plano-1)
    *   [Excluir planodelete](https://docs.pagar.me/reference/excluir-plano-1)
    *   [Listar planosget](https://docs.pagar.me/reference/listar-planos-1)
*   [Assinaturas](https://docs.pagar.me/reference/assinaturas-1)
    *   [Criar assinatura avulsapost](https://docs.pagar.me/reference/criar-assinatura-avulsa)
    *   [Criar assinatura de planopost](https://docs.pagar.me/reference/criar-assinatura-de-plano-1)
    *   [Obter assinaturaget](https://docs.pagar.me/reference/obter-assinatura-1)
    *   [Listar assinaturasget](https://docs.pagar.me/reference/listar-assinaturas-1)
    *   [Cancelar assinaturadelete](https://docs.pagar.me/reference/cancelar-assinatura-1)
    *   [Editar cartão da assinaturapatch](https://docs.pagar.me/reference/editar-cart%C3%A3o-da-assinatura-1)
    *   [Editar metadados da assinaturapatch](https://docs.pagar.me/reference/editar-metadados-da-assinatura-1)
    *   [Editar meio de pagamento da assinaturapatch](https://docs.pagar.me/reference/editar-meio-de-pagamento-da-assinatura)
    *   [Editar data de início da assinaturapatch](https://docs.pagar.me/reference/editar-data-de-in%C3%ADcio-da-assinatura-1)
    *   [Editar preço mínimo da assinaturapatch](https://docs.pagar.me/reference/editar-minimum-price-da-assinatura)
    *   [Ativar faturamento manualpost](https://docs.pagar.me/reference/ativar-faturamento-manual-1)
    *   [Desativar faturamento manualdelete](https://docs.pagar.me/reference/desativar-faturamento-manual-1)
*   [Item da assinatura](https://docs.pagar.me/reference/item-da-assinatura-1)
    *   [Incluir itempost](https://docs.pagar.me/reference/incluir-item-1)
    *   [Listar itens de uma assinaturaget](https://docs.pagar.me/reference/listar-%C3%ADtens-de-uma-assinatura)
    *   [Editar itemput](https://docs.pagar.me/reference/editar-item)
    *   [Remover itemdelete](https://docs.pagar.me/reference/remover-item)
*   [Uso de um item da assinatura](https://docs.pagar.me/reference/uso-de-um-item-da-assinatura)
    *   [Incluir usopost](https://docs.pagar.me/reference/incluir-uso)
    *   [Remover usodelete](https://docs.pagar.me/reference/remover-uso)
    *   [Listar usoget](https://docs.pagar.me/reference/listar-uso)
*   [Item do plano](https://docs.pagar.me/reference/item-do-plano-1)
    *   [Incluir itempost](https://docs.pagar.me/reference/incluir-item-2)
    *   [Editar itemput](https://docs.pagar.me/reference/editar-item-1)
    *   [Remover itemdelete](https://docs.pagar.me/reference/remover-item-1)
*   [Desconto](https://docs.pagar.me/reference/desconto-1)
    *   [Incluir descontopost](https://docs.pagar.me/reference/incluir-desconto-1)
    *   [Obter descontoget](https://docs.pagar.me/reference/obter-desconto-1)
    *   [Listar descontosget](https://docs.pagar.me/reference/listar-descontos-2)
    *   [Remover descontodelete](https://docs.pagar.me/reference/remover-desconto-1)
*   [Incremento](https://docs.pagar.me/reference/incremento-1)
    *   [Incluir incrementopost](https://docs.pagar.me/reference/incluir-incremento-1)
    *   [Obter incrementoget](https://docs.pagar.me/reference/obter-incremento-1)
    *   [Listar incrementosget](https://docs.pagar.me/reference/listar-incrementos)
    *   [Remover incrementodelete](https://docs.pagar.me/reference/remover-incremento-1)
*   [Faturas](https://docs.pagar.me/reference/faturas-1)
    *   [Criar faturapost](https://docs.pagar.me/reference/criar-fatura-1)
    *   [Obter faturaget](https://docs.pagar.me/reference/obter-fatura-1)
    *   [Listar faturasget](https://docs.pagar.me/reference/listar-faturas-1)
    *   [Editar metadados da faturapatch](https://docs.pagar.me/reference/editar-metadados-da-fatura-1)
    *   [Cancelar faturadelete](https://docs.pagar.me/reference/cancelar-fatura-1)
*   [Ciclos](https://docs.pagar.me/reference/ciclos-1)
    *   [Renovar ciclopost](https://docs.pagar.me/reference/renovar-ciclo-1)
    *   [Obter cicloget](https://docs.pagar.me/reference/obter-ciclo-1)
    *   [Listar ciclosget](https://docs.pagar.me/reference/listar-ciclos-1)
*   [Split](https://docs.pagar.me/reference/split-na-recorr%C3%AAncia)
    *   [Editar regras do Splitpatch](https://docs.pagar.me/reference/editar-ativa%C3%A7%C3%A3o-ou-regras-do-split)

Recebedores
-----------

*   [Recebedores](https://docs.pagar.me/reference/recebedores-1)
    *   [Criar recebedorpost](https://docs.pagar.me/reference/criar-recebedor-1)
    *   [Criar link de de Prova de Vida (KYC)post](https://docs.pagar.me/reference/criar-link-recebedor)
    *   [Editar recebedorput](https://docs.pagar.me/reference/editar-recebedor-1)
    *   [Obter recebedorget](https://docs.pagar.me/reference/obter-recebedor-1)
    *   [Listar recebedoresget](https://docs.pagar.me/reference/listar-recebedores-1)
    *   [Editar code de recebedorpatch](https://docs.pagar.me/reference/atualizar-code-de-recebedor)
*   [Conta bancária](https://docs.pagar.me/reference/conta-banc%C3%A1ria-1)
    *   [Atualizar conta bancária do recebedorpatch](https://docs.pagar.me/reference/atualizar-conta-banc%C3%A1ria-do-recebedor-1)
*   [Saldo](https://docs.pagar.me/reference/saldo-2)
    *   [Obter saldoget](https://docs.pagar.me/reference/obter-saldo)
*   [Saque](https://docs.pagar.me/reference/saque-1)
    *   [Cria saquepost](https://docs.pagar.me/reference/cria-saque-1)
    *   [Obter saqueget](https://docs.pagar.me/reference/obter-saque-1)
    *   [Listar saquesget](https://docs.pagar.me/reference/listar-saques-1)
*   [Configurações de transferência](https://docs.pagar.me/reference/informa%C3%A7%C3%B5es-de-transfer%C3%AAncia-1)
    *   [Atualizar configurações de transferênciapatch](https://docs.pagar.me/reference/atualizar-informa%C3%A7%C3%B5es-de-transfer%C3%AAncia-1)
*   [Configurações de antecipação automática](https://docs.pagar.me/reference/informa%C3%A7%C3%B5es-de-antecipa%C3%A7%C3%A3o-autom%C3%A1tica-1)
    *   [Atualizar configurações de antecipação automáticapatch](https://docs.pagar.me/reference/atualizar-informa%C3%A7%C3%B5es-de-antecipa%C3%A7%C3%A3o-autom%C3%A1tica-1)

financeiro
----------

*   [Recebíveis](https://docs.pagar.me/reference/receb%C3%ADveis)
    *   [Obter recebíveisget](https://docs.pagar.me/reference/retornando-receb%C3%ADveis)
    *   [Obter um recebívelget](https://docs.pagar.me/reference/obter-receb%C3%ADveis-copy)
*   [Operações de Saldo](https://docs.pagar.me/reference/opera%C3%A7%C3%A3o-de-saldo)
    *   [Obter histórico das operaçõesget](https://docs.pagar.me/reference/obter-hist%C3%B3rico-das-opera%C3%A7%C3%B5es)
    *   [Obter histórico específico de uma operaçãoget](https://docs.pagar.me/reference/obter-hist%C3%B3rico-espec%C3%ADfico-de-uma-opera%C3%A7%C3%A3o)

Marketplace
-----------

*   [Visão Geral do Marketplace](https://docs.pagar.me/reference/vis%C3%A3o-geral-do-marketplace)
*   [Split](https://docs.pagar.me/reference/split-1)
    *   [Criar pedido com splitpost](https://docs.pagar.me/reference/criar-pedido-com-split-1)
    *   [Capturar cobrança com splitpost](https://docs.pagar.me/reference/capturar-cobran%C3%A7a-com-split-1)
    *   [Cancelar cobrança com splitdelete](https://docs.pagar.me/reference/cancelar-cobran%C3%A7a-com-split-1)
*   [Res.264/349: Interface Eletrônica para Sellers](https://docs.pagar.me/reference/res264346-manual-de-integra%C3%A7%C3%A3o)
    *   [Retornando URs de um Recebedorget](https://docs.pagar.me/reference/retornando-urs-de-um-recebedor-v5)
    *   [Retornando Efeitos de Contratosget](https://docs.pagar.me/reference/retornando-efeitos-de-contratos-v5)
    *   [Retornando Contratosget](https://docs.pagar.me/reference/retornando-efeitos-de-contratos-copy)
    *   [Retornando Contestaçõesget](https://docs.pagar.me/reference/retornando-contestacoes)
    *   [Contestando um Contratopost](https://docs.pagar.me/reference/contestando-um-contrato-v5)

Tokenizecard JS
---------------

*   [Tokenizecard JS](https://docs.pagar.me/reference/pagarme-js)
*   [Alternativas ao Tokenizecard JS](https://docs.pagar.me/reference/tokeniza%C3%A7%C3%A3o-1)
    *   [Tokenização](https://docs.pagar.me/reference/tokeniza%C3%A7%C3%A3o-1)
    *   [Criar Token Cartão](https://docs.pagar.me/reference/criar-token-cart%C3%A3o-1)
    *   [Criar Checkout](https://docs.pagar.me/v5/reference/checkout-2)

Webhook
-------

*   [Visão geral sobre Webhooks](https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-webhooks)
    *   [Exemplo de webhook](https://docs.pagar.me/reference/exemplo-de-webhook-1)
    *   [Eventos de webhook](https://docs.pagar.me/reference/eventos-de-webhook-1)
    *   [Enviar webhookpost](https://docs.pagar.me/reference/enviar-webhook)
    *   [Obter webhookget](https://docs.pagar.me/reference/obter-webhook)
    *   [Listar webhooksget](https://docs.pagar.me/reference/listar-webhooks)

Pagar.me API - Register V5
--------------------------

*   [Getting Started With Your API](https://docs.pagar.me/reference/getting-started-with-your-api)

O objeto `transfer_setting` representa a configuração de transferência automática associada a um **recebedor**. Este objeto possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `transfer_enabled`\* | **bool** | \_Indica se o recebedor receberá seus pagamentos automaticamente \`. |
| `transfer_interval`\* | **string** | _Indica a frequência das transferências automáticas para a conta do recebedor_. |
| `transfer_day`\* | **int** | _Indica o dia em que ocorrerá as transferências automáticas_. |</content>
</page>

<page>
  <title>Listar saques</title>
  <url>https://docs.pagar.me/reference/listar-saques-1</url>
  <content>get https://api.pagar.me/core/v5/recipients//withdrawals

Rota para realizar a consulta de saques para um determinado **recebedor**.

> 🚧
> 
> Disponibilidade das informações
> 
> 
> -------------------------------------
> 
> Para clientes da V5 esta opção lista somente saques criados via API, não sendo possível visualizar por ela saques automáticos e criados via dashboard.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Configurações de antecipação automática</title>
  <url>https://docs.pagar.me/reference/informa%C3%A7%C3%B5es-de-antecipa%C3%A7%C3%A3o-autom%C3%A1tica-1</url>
  <content>O objeto `automatic_anticipation_settings` representa a configuração de antecipação automática associada a um **recebedor**. Este objeto possui os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `enabled`\* | **bool** | \_Indica se o recebedor receberá antecipações automaticamente \`. |
| `type`\* | **string** | _Indica o tipo de antecipação automática que será configurado para a conta do recebedor_. |
| `volume_percentage`\* | **string** | _Indica o volume passível de ser antecipado para o recebedor_. |
| `days`\* | **string** | _Indica os dias em que ocorrerá as antecipações automáticas_. |
| `delay`\* | **string** | _Indica a quantidade de dias que serão desconsiderados na contabilização do valor passível de ser antecipado. A contagem de dias é realizada a partir do dia da antecipação para trás._. |

> 🚧
> 
> Liberação de configurações de antecipação automática
> 
> 
> ----------------------------------------------------------
> 
> Para utilizar configurações de antecipação automática é necessário realizar a liberação junto a Pagar.me .</content>
</page>

<page>
  <title>Atualizar configurações de transferência</title>
  <url>https://docs.pagar.me/reference/atualizar-informa%C3%A7%C3%B5es-de-transfer%C3%AAncia-1</url>
  <content>patch https://api.pagar.me/core/v5/recipients//transfer-settings

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Atualizar configurações de antecipação automática</title>
  <url>https://docs.pagar.me/reference/atualizar-informa%C3%A7%C3%B5es-de-antecipa%C3%A7%C3%A3o-autom%C3%A1tica-1</url>
  <content>patch https://api.pagar.me/core/v5/recipients//automatic-anticipation-settings

> ❗️
> 
> Liberação de configurações de antecipação automática
> 
> 
> ----------------------------------------------------------
> 
> Para utilizar configurações de antecipação automática é necessário realizar a liberação junto a Pagar.me .

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Recebíveis</title>
  <url>https://docs.pagar.me/reference/receb%C3%ADveis</url>
  <content>O saldo da conta Pagar.me é determinado pelos recebíveis, que são representados pela entidade de Payables e refletem o compromisso de pagamento do Pagar.me com seus clientes. Dessa forma, cada recebível contribui para aumentar ou diminuir o saldo total da conta Pagar.me.

Existem 5 tipos de recebíveis no Pagar.me, são eles:

| Tipo do payable | Descrição | Impacto no saldo do recebedor |
| --- | --- | --- |
| **credit** | O recebível que irá adicionar saldo à conta do recebedor. | + |
| **refund** | Recebível referente a uma cobrança estornada. | \- |
| **refund\_reversal** | Referente de um estorno revertido. Só existe para transações de boleto. | + |
| **chargeback** | Recebível referente a um chargeback. | \- |
| **chargeback\_refund** | Referente a um chargeback com reapresentação ganha. | + |

**Objeto payable:**

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| **id** | `Long` | Identificador do recebível. |
| **status** | `String` | Estado atual do recebível.  
Valores possíveis: `waiting_funds`, `prepaid`, `paid`. |
| **amount** | `Int` | Valor em centavos do recebível. |
| **fee** | `Int` | Valor em centavos que foi cobrado (taxa). |
| **anticipation\_fee** | `Int` | Valor em centavos que foi cobrado pela respectiva antecipação (caso criada). |
| **fraud\_coverage\_fee** | `Int` | Taxa de cobertura do Antifraude |
| **installment** | `Int` | Número da parcela. |
| **gateway\_id** | `Numeric` | Identificador da cobrança no gateway de pagamento. Contém o identificador da transação da API v4. |
| **charge\_id** | `String` | Identificador da cobrança que gerou o recebível. |
| **split\_id** | `String` | Identificador da regra de split do recebível. |
| **bulk\_anticipation\_id** | `String` | Identificador da antecipação deste recebível, caso tenha sido criada. |
| **anticipation\_id** | `String` | Identificador da antecipação. |
| **recipient\_id** | `String` | Identificador do recebedor a qual este recebível pertence. |
| **originator\_model** | `String` | Para recebíveis gerados por operações diferentes de transações, como estornos, será preenchido com o tipo de operação que originou esse recebível. Valores possíveis: `refund` e `chargeback`. |
| **originator\_model\_id** | `String` | Caso o campo `originator_model` esteja preenchido, o id respectivo daquele model estará presente nesse campo. |
| **payment\_date** | `Datetime` | Dia e hora do pagamento. |
| **original\_payment\_date** | `Datetime` | Dia de hora de pagamento originais do recebível. |
| **type** | `String` | Tipo do recebível.  
Valores possíveis: `credit`, `refund`, `refund_reversal`, `chargeback`, `chargeback_refund`. |
| **payment\_method** | `String` | Tipo de pagamento da transação. |
| **accrual\_at** | `Datetime` | Data em que o banco emissor reconheceu o pagamento da transação a que este recebível pertence. |
| **created\_at** | `Datetime` | Data da criação do objeto recebível. |
| **liquidation\_arrangement\_id** | `String` | Identificador da liquidação do recebível. |

> 📘
> 
> Observação sobre o identificador da cobrança
> 
> 
> --------------------------------------------------
> 
> O campo charge\_id somente será indicado em cobranças geradas a partir do dia 01 de Julho de 2023.
> 
> Recebíveis referentes a cobranças geradas antes deste dia não terão o campo de charge\_id no contrato de resposta.</content>
</page>

<page>
  <title>Obter recebíveis</title>
  <url>https://docs.pagar.me/reference/retornando-receb%C3%ADveis</url>
  <content>get https://api.pagar.me/core/v5/payables

Retorna os recebíveis da sua loja.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Operações de Saldo</title>
  <url>https://docs.pagar.me/reference/opera%C3%A7%C3%A3o-de-saldo</url>
  <content>As operações de saldo referem-se a todas as atividades que envolvem a movimentação do saldo disponível na conta Pagar.me, como pagamentos ou saques.

> 📘
> 
> Novo tipo de Operação de Saldo
> 
> 
> ------------------------------------
> 
> Com a [Conta Digital Pagar.me](https://pagarme.helpjuice.com/pt_BR/sobre-o-pagarme/sobre-a-conta-digital-pagarme) teremos um novo tipo de operação de saldo referente aos arranjos financeiros(`external_settlement`).
> 
> Os arranjos possuem um `movement_object` próprio com nome `settlement`.

Atualmente, existem quatro tipos de operações de saldo: `payable`, `refund`, `transfer` e `fee_collection`. O tipo `payable` representa os recebíveis, `refund` refere-se a devolução da taxa de boleto, `transfer` diz respeito a transferências e o `fee_collection` são descontos relacionados a serviços da Pagar.me, como cobrança de gateway.

As operações de saldo podem ter um dos três status: `waiting_funds`, `available` e `transferred`. O status `waiting_funds` é usado para operações de saldo em processamento. O status `available` indica operações concluídas. E o status `transferred` se aplica apenas a transferências bem-sucedidas.

| Payables |
| --- |
| `waiting_funds`  
Esse status faz referência ao saldo à receber. Recebíveis com esse status não podem ser sacados. |
| `available`  
Significa que o valor da transação atrelada a esse recebível foi paga e, portanto, esse valor está disponível para saque |
| `transferred`  
Significa que esse valor já foi sacado. |

**Objeto Balance Operation:**

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| **id** | `Long` | Identificador da operação de saldo. |
| **status** | `String` | Estado do saldo da conta.  
_Valores possíveis:_ `waiting_funds`, `available` e `transferred`. |
| **balance\_amount** | `Int` | Saldo atual da conta. |
| **balance\_old\_amount** | `Int` | Saldo antigo da conta. |
| **type** | `String` | Tipo da operação.  
_Valores possíveis:_ `payable`, `transfer`, `refund`, `fee_collection` e `external_settlement` |
| **amount** | `Int` | Valor da operação em centavos. |
| **fee** | `Int` | Taxa da operação em centavos. |
| **created\_at** | `Datetime` | Data que a operação foi registrada. |
| **movement\_object** | `Object` | Origem daquela operação de saldo.  
_Valores possíveis:_ `payable`, `transfer`, `refund`, `fee_collection` e `settlement` |</content>
</page>

<page>
  <title>Obter um recebível</title>
  <url>https://docs.pagar.me/reference/obter-receb%C3%ADveis-copy</url>
  <content>get https://api.pagar.me/core/v5/payables/

Retorna um recebível específico da sua loja.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter histórico específico de uma operação</title>
  <url>https://docs.pagar.me/reference/obter-hist%C3%B3rico-espec%C3%ADfico-de-uma-opera%C3%A7%C3%A3o</url>
  <content>get https://api.pagar.me/core/v5/balance/operations/

Retorna uma operação específica ocorrida no saldo da sua conta.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter histórico das operações</title>
  <url>https://docs.pagar.me/reference/obter-hist%C3%B3rico-das-opera%C3%A7%C3%B5es</url>
  <content>get https://api.pagar.me/core/v5/balance/operations

Com esta rota é possível verificar os movimentos ocorridos no saldo da sua conta.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Visão Geral do Marketplace</title>
  <url>https://docs.pagar.me/reference/vis%C3%A3o-geral-do-marketplace</url>
  <content>Com a API Pagar.me é possível realizar o gerenciamento do seu Marketplace e para isso nosso sistema provê uma gama de recursos necessários para sua operação. Oferecemos recurso de [Recebedores](https://docs.pagar.me/reference/recebedores-1) para gerenciamento dos recebíveis de uma venda com [Split](https://docs.pagar.me/reference/split-1).</content>
</page>

<page>
  <title>Split</title>
  <url>https://docs.pagar.me/reference/split-1</url>
  <content>Utilizando a funcionalidade de Split você pode criar um pedido com mais de um recebedor e N regras de Split  
[Saiba mais sobre Split](https://docs.pagar.me/docs/pedidos-com-split).

> ❗️
> 
> Regras de uso do Split
> 
> 
> ----------------------------
> 
> Esta funcionalidade está disponível apenas para clientes PSP

O objeto `split` tem as seguintes propriedades:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `amount` | **integer** | _Valor destinado ao recebedor_. |
| `type` | **string** | _Tipo de divisão_. Os valores possíveis são `flat` ou `percentage`. |
| `recipient_id` | **string** | _Código do recebedor_. Formato: `rp_XXXXXXXXXXXXXXXX`. |
| `options` | **object** | _Informações da responsabilidade do recebedor na transação_. |
| `options.liable` | **bool** | _Indica se o recebedor é responsável pela transação em caso de chargeback_. |
| `options.charge_processing_fee` | **bool** | _Indica se o recebedor vinculado à regra será cobrado pelas taxas da transação_ |
| `options.charge_remainder_fee` | **bool** | _Indica se o recebedor vinculado à regra irá receber o restante dos recebíveis após uma divisão_ |

Com a funcionalidade split é possível criar vários cenários que consigam atender a suas necessidades de negócios, pode criar N recebedores com uma única regra de split ou pode criar N quantidade de recebedores com mais de uma regra de split para cada recebedor.

    "split": [
    	{
    		"amount": 50,
    		"recipient_id": "{{recipient_id_1}}",
    		"type": "percentage",
    		"options": {
    			"charge_processing_fee": true,
    			"charge_remainder_fee": true,
    			"liable": true
    		}
    	},
    	{
    		"amount": 50,
    		"type": "percentage",
    		"recipient_id": "{{recipient_id_2}}",
    		"options": {
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false,
    			"liable": false
    		}
    	}
    ]
    

    "split": [
    	{
    		"id": "sr_rqNglzXwF5fMQ2Rd",
    		"type": "percentage",
    		"amount": 50,
    		"recipient": {
    			"id": "rp_7YZXapnCAWcGrnaV",
    			"name": "Recipient 1",
    			"email": "[email protected]",
    			"document": "26224451990",
    			"description": "Recipient 1",
    			"type": "individual",
    			"payment_mode": "bank_transfer",
    			"status": "active",
    			"created_at": "2022-03-07T20:43:25Z",
    			"updated_at": "2022-03-07T20:43:25Z"
    		},
    		"options": {
    			"liable": true,
    			"charge_processing_fee": true,
    			"charge_remainder_fee": true
    		}
    	},
    	{
    		"id": "sr_Eb40Z63CxhekXlgr",
    		"type": "percentage",
    		"amount": 50,
    		"recipient": {
    			"id": "rp_jwvVZZrSzxubVr5X",
    			"name": "Recipient 2",
    			"email": "[email protected]",
    			"document": "26224451990",
    			"description": "Recipient 2",
    			"type": "individual",
    			"payment_mode": "bank_transfer",
    			"status": "active",
    			"created_at": "2022-03-07T20:43:33Z",
    			"updated_at": "2022-03-07T20:43:33Z"
    		},
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	}
    ]
    

    "split": [
    	{
    		"amount": 500,
    		"recipient_id": "{{recipient_1}}",
    		"type": "flat",
    		"options": {
    			"liable": true,
    			"charge_processing_fee": true,
    			"charge_remainder_fee": true
    		}
    	},
    	{
    		"amount": 4500,
    		"recipient_id": "{{recipient_2}}",
    		"type": "percentage",
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	},
    	{
    		"amount": 500,
    		"recipient_id": "{{recipient_1}}",
    		"type": "flat",
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	},
    	{
    		"amount": 4500,
    		"recipient_id": "{{recipient_3}}",
    		"type": "flat",
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	}
    ]
    

    "split": [
    	{
    		"id": "sr_vDMrKxHMzUZgWKyb",
    		"type": "flat",
    		"gateway_id": "sr_cl0h5h1he02f20i9t1x342lq1",
    		"amount": 500,
    		"recipient": {
    			"id": "rp_Yjzd0rlso5HG1KLP",
    			"name": "TVA (Autoridade de Variância do Tempo)",
    			"email": "[email protected]",
    			"document": "63495937072",
    			"description": "Agente Mobius",
    			"type": "individual",
    			"payment_mode": "bank_transfer",
    			"status": "active",
    			"created_at": "2022-03-07T20:19:55Z",
    			"updated_at": "2022-03-07T20:19:55Z"
    		},
    		"options": {
    			"liable": true,
    			"charge_processing_fee": true,
    			"charge_remainder_fee": true
    		}
    	},
    	{
    		"id": "sr_1knXBEmtmIKVewMO",
    		"type": "flat",
    		"gateway_id": "sr_cl0h5h1hf02f30i9txhn78z5v",
    		"amount": 4500,
    		"recipient": {
    			"id": "rp_lkMPKDFN2FrNRyw6",
    			"name": "TVA (Autoridade de Variância do Tempo)",
    			"email": "[email protected]",
    			"document": "63495937072",
    			"description": "Agente Mobius",
    			"type": "individual",
    			"payment_mode": "bank_transfer",
    			"status": "active",
    			"created_at": "2022-03-07T20:19:59Z",
    			"updated_at": "2022-03-07T20:19:59Z"
    		},
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	},
    	{
    		"id": "sr_Ae0Ygw0uWtvROBaL",
    		"type": "flat",
    		"gateway_id": "sr_cl0h5h1hf02f40i9t2tdxyt2h",
    		"amount": 500,
    		"recipient": {
    			"id": "rp_Yjzd0rlso5HG1KLP",
    			"name": "TVA (Autoridade de Variância do Tempo)",
    			"email": "[email protected]",
    			"document": "63495937072",
    			"description": "Agente Mobius",
    			"type": "individual",
    			"payment_mode": "bank_transfer",
    			"status": "active",
    			"created_at": "2022-03-07T20:19:55Z",
    			"updated_at": "2022-03-07T20:19:55Z"
    		},
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	},
    	{
    		"id": "sr_9bzgAwaHXGcX5RM5",
    		"type": "flat",
    		"gateway_id": "sr_cl0h5h1hf02f50i9t09msen0k",
    		"amount": 4500,
    		"recipient": {
    			"id": "rp_jRYNBWac97HaPMoq",
    			"name": "TVA (Autoridade de Variância do Tempo)",
    			"email": "[email protected]",
    			"document": "63495937072",
    			"description": "Agente Mobius",
    			"type": "individual",
    			"payment_mode": "bank_transfer",
    			"status": "active",
    			"created_at": "2022-03-07T20:20:03Z",
    			"updated_at": "2022-03-07T20:20:03Z"
    		},
    		"options": {
    			"liable": false,
    			"charge_processing_fee": false,
    			"charge_remainder_fee": false
    		}
    	}
    ]
    

> ❗️
> 
> Regras de Split - responsabilidade
> 
> 
> ----------------------------------------
> 
> Ao menos um recebedor deve ser responsável pelos seguintes pontos:  
> Responsável pela transação em caso de chargeback;  
> Responsável pelas taxas da transação;  
> Responsável pelo restante dos recebíveis após uma divisão.</content>
</page>

<page>
  <title>Capturar cobrança com split</title>
  <url>https://docs.pagar.me/reference/capturar-cobran%C3%A7a-com-split-1</url>
  <content>post https://api.pagar.me/core/v5/charges//capture

Rota para capturar uma cobrança com split, definindo a regra de split e os recebedor que irão participar da divisão dos pagamentos.

> 📘
> 
> Capturar pedidos com Split
> 
> 
> --------------------------------
> 
> Apenas cobranças criadas e autorizadas sem Split podem ser capturadas com regras de Split.
> 
> O envio de novas regras de Split, diferentes das regras enviadas na autorização, não irão sobrescrever as regras enviadas anteriormente.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Cancelar cobrança com split</title>
  <url>https://docs.pagar.me/reference/cancelar-cobran%C3%A7a-com-split-1</url>
  <content>delete https://api.pagar.me/core/v5/charges/

Rota para cancelar uma cobrança com split, definindo a regra de split e os recebedor que irão participar da divisão dos pagamentos.

> 📘
> 
> Cancelamento de uma cobrança com split
> 
> 
> --------------------------------------------
> 
> Apenas cobranças capturadas com Split podem ser canceladas com regras de Split.  
> O envio de novas regras de Split, diferentes das regras enviadas na autorização/captura de uma cobrança irão sobrescrever as regras enviadas na autorização.

> 🚧
> 
> Cancelamento parcial
> 
> 
> --------------------------
> 
> O envio das regras de split no cancelamento parcial de cobranças realizadas com split é fundamental, do contrário, as regras definas na autorização/captura da cobrança serão aplicadas de forma automática ao cancelamento.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Criar pedido com split</title>
  <url>https://docs.pagar.me/reference/criar-pedido-com-split-1</url>
  <content>post https://api.pagar.me/core/v5/orders

Para realizar pedidos com split, você deve criar um objeto order com o objeto split.  
Para formar o objeto split, você deve primeiramente cadastrar recebedores.  
O objeto order com split possui os seguintes atributos:

> ❗️
> 
> Pedidos com análise de fraude
> 
> 
> -----------------------------------
> 
> Para pedidos com split que serão submetidos a análise de fraude o envio do billing\_address é obrigatório.

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Retornando URs de um Recebedor</title>
  <url>https://docs.pagar.me/reference/retornando-urs-de-um-recebedor-v5</url>
  <content>get https://api.pagar.me/core/v5/recipients/:recipient\_id/receivable-units

Na Resolução 264, o Banco Central do Brasil deu origem a Unidade de Recebíveis.

Podemos dizer que a Unidade de Recebíveis é um ativo financeiro, criado a partir do registro em uma Entidade Registradora e que é composto pela somatória de transações de Arranjo de Pagamentos com o mesmo:

*   Titular/credor original da transação
*   Credenciador ou Subcredenciador
*   Arranjo de Pagamentos
*   Data de liquidação

Para obter informações detalhadas sobre esses assuntos, recomendamos [consultar a documentação da TAG](https://docs.taginfraestrutura.com.br/docs/unidade-de-recebiveis-ur), a registradora do grupo StoneCo. Lá você encontrará explicações abrangentes e informações específicas sobre esses conceitos.

| Campo | Descrição |
| --- | --- |
| payment\_method | Método de pagamento utilizado na transação. |
| card\_brand | Bandeira do cartão utilizado na transação. |
| amount | Valor líquido recebido após a aplicação de taxas e descontos. |
| chargeback\_amount | Valor descontado devido a chargebacks (contestação de compra). |
| chargeback\_refund\_amount | Valor devolvido após a contestação de um chargeback ser bem-sucedida. |
| credit\_amount | Valor bruto total das transações antes da aplicação de taxas. |
| fee\_amount | Valor das taxas de operação descontadas das transações. |
| liquidation\_amount | Valor já liquidado da Unidade de Recebíveis (UR). |
| refund\_amount | Total de valores estornados aos clientes. |
| blocked\_amount | Valores bloqueados por motivos de segurança. |
| payment\_date | Data em que o pagamento sera realizado. |

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Retornando Efeitos de Contratos</title>
  <url>https://docs.pagar.me/reference/retornando-efeitos-de-contratos-v5</url>
  <content>get https://api.pagar.me/register/v5/settlement-obligations

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Res.264/349: Interface Eletrônica para Sellers</title>
  <url>https://docs.pagar.me/reference/res264346-manual-de-integra%C3%A7%C3%A3o</url>
  <content>  

> 📘
> 
> O BCB pede que os comandos contidos nos artigos 13 da [resolução 264](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=264) estejam implementados até o dia ~6 de novembro de 2023~ 01 de abril de 2024, adiamento conforme a [resolução 349.](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=349)
> 
> 
> --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

De acordo com a Resolução 264/349, Artigo 13, do Banco Central, a partir de 1 de abril de 2024, torna-se necessário fornecer uma interface eletrônica aos proprietários dos recebíveis, neste caso, os recebedores. Essa interface deverá conter informações sobre agenda, contratos e a possibilidade de contestação de contrato. Abaixo iremos detalhar.

**Abaixo uma ilustração de como essas informações se convergem**

Valor bruto total das transações que compõem cada [unidade de recebível](https://docs.taginfraestrutura.com.br/docs/unidade-de-recebiveis-ur) da [agenda](https://docs.taginfraestrutura.com.br/docs/agenda-de-recebiveis).

> **\[V1\]**[Retornando URs de um Recebedor](https://docs.pagar.me/v1/reference/retornando-urs-de-um-recebedor)
> 
> **\[V2\]** [Retornando URs de um Recebedor](https://docs.pagar.me/v2/reference/retornando-urs-de-um-recebedor)
> 
> **\[V3\]** [Retornando URs de um Recebedor](https://docs.pagar.me/v3/reference/retornando-urs-de-um-recebedor)
> 
> **\[V4\]** [Retornando URs de um Recebedor](https://docs.pagar.me/v4/reference/retornando-urs-de-um-recebedor)
> 
> **\[V5\]** [Retornando URs de um Recebedor](https://docs.pagar.me/reference/retornando-urs-de-um-recebedor-v5)

* * *

Deduções aplicáveis a cada unidade de recebível, discriminadas nas categorias abaixo, conforme o caso:  
(i) Taxas administrativas ou de remuneração, cobradas pela instituição credenciadora ou pelo subcredenciador, que incidam sobre o valor das transações que compõem essa unidade;  
(ii) Estornos decorrentes de cancelamentos, contestações ou fraudes, no âmbito do arranjo de pagamento, de transações que compõem essa unidade;  
(iii) Liquidações de valores de recebíveis constituídos associados à unidade de recebíveis, inclusive decorrentes de antecipações pós-contratadas; e  
(iv) Valores bloqueados nos termos do art. 8º da Resolução.

> **\[V1\]**[Retornando Dados de Contrato](https://docs.pagar.me/v1/reference/retornando-urs-de-um-recebedor)
> 
> **\[V2\]**[Retornando URs de um Recebedor](https://docs.pagar.me/v2/reference/retornando-urs-de-um-recebedor)
> 
> **\[V3\]**[Retornando URs de um Recebedor](https://docs.pagar.me/v3/reference/retornando-urs-de-um-recebedor)
> 
> **\[V4\]** [Retornando URs de um Recebedor](https://docs.pagar.me/v4/reference/retornando-urs-de-um-recebedor)
> 
> **\[V5\]**[Retornando URs de um Recebedor](https://docs.pagar.me/reference/retornando-urs-de-um-recebedor-v5)

* * *

Valor de recebíveis constituídos de cada unidade de recebível da agenda, discriminados em valor livre e valores alocados para cada efeito de contrato sobre a unidade.

> **\[V1\]**[Retornando Dados de Contrato](https://docs.pagar.me/v1/reference/retornando-efeitos-de-contratos)
> 
> **\[V2\]**[Retornando Dados de Contrato](https://docs.pagar.me/v2/reference/retornando-efeitos-de-contratos)
> 
> **\[V3\]**[Retornando Dados de Contrato](https://docs.pagar.me/v3/reference/retornando-efeitos-de-contratos)
> 
> **\[V4\]**[Retornando Dados de Contrato](https://docs.pagar.me/v4/reference/retornando-efeitos-de-contrato)
> 
> **\[V5\]** [Retornando Dados de Contrato](https://docs.pagar.me/reference/retornando-efeitos-de-contratos-v5)

* * *

As especificações dos [contratos](https://docs.taginfraestrutura.com.br/docs/obrigacao-de-contrato) com efeitos sobre a agenda, no que tange a identificação da contraparte, unidades de recebíveis alcançadas, natureza do contrato e tipo e valor do efeito (percentual ou valor fixo).

> **\[V1\]**[Retornando Dados de Contrato](https://docs.pagar.me/v1/reference/retornando-efeitos-de-contratos)
> 
> **\[V2\]**[Retornando Dados de Contrato](https://docs.pagar.me/v2/reference/retornando-efeitos-de-contratos)
> 
> **\[V3\]**[Retornando Dados de Contrato](https://docs.pagar.me/v3/reference/retornando-efeitos-de-contratos)
> 
> **\[V4\]**[Retornando Dados de Contrato](https://docs.pagar.me/v4/reference/retornando-efeitos-de-contrato)
> 
> **\[V5\]** [Retornando Dados de Contrato](https://docs.pagar.me/reference/retornando-efeitos-de-contratos-v5)

* * *

Disponibilização de ferramenta que permita a realização, pelo usuário final recebedor, de contestações de efeitos de contratos sobre suas agendas de recebíveis registradas de responsabilidade da instituição credenciadora, a serem direcionadas aos sistemas de registro.

> **\[V1\]**[Criando uma Contestação](https://docs.pagar.me/v1/reference/contestando-um-contrato)
> 
> **\[V2\]**[Criando uma Contestação](https://docs.pagar.me/v2/reference/contestando-um-contrato)
> 
> **\[V3\]**[Criando uma Contestação](https://docs.pagar.me/v3/reference/contestando-um-contrato)
> 
> **\[V4\]**[Criando uma Contestação](https://docs.pagar.me/v4/reference/contestando-um-contrato)
> 
> **\[V5\]** [Criando uma Contestação](https://docs.pagar.me/reference/contestando-um-contrato-v5)

* * *

Compreendemos que, na prática, seus recebedores muitas vezes não estão familiarizados com a Pagar.me. Por isso, pensando em garantir a melhor experiência para eles, é fundamental que vocês atuem como intermediários, fornecendo as informações obrigatórias de acordo com as normas para os recebedores.

A norma não especifica um local exato, como acontece no caso do PIX. Portanto, a decisão sobre onde exibir essas informações, em qual tela e formato fica a seu critério. A única exigência é que as informações estejam acessíveis caso o cliente solicite.

Se considerarem mais apropriado para o seu negócio, vocês podem executar esse processo sob demanda, liberando as informações mediante solicitação do recebedor. O aspecto crítico a ser garantido é que, quando o recebedor solicitar essas informações, todas elas sejam prontamente disponibilizadas dentro do prazo razoável acordado com eles.

Sempre que a sua aplicação chama algum de nossos endpoints, você deve passar como forma de autenticação a sua API Key, chave que pode ser encontrada na sua Dashboard. Saiba mais aqui

Se estiver utilizando um terceiro como interface (como um Seller Center) não tem problema. Você deve solicitar que este terceiro se responsabilize pelas implementações necessárias. No entanto, nesses casos, é importante ressaltar que contamos com vocês para garantir que essas implementações sejam cumpridas corretamente por eles.

Por enquanto, os dados serão fornecidos pelo Pagar.me exclusivamente por meio da API.

Para contestar um contrato, o recebedor precisará entrar em contato com você ou através da sua interface para solicitar a contestação.

Para os recebedores que têm documentos exclusivamente vinculados à sua company, iremos disponibilizar as informações de Agenda e Contratos normalmente via API.

No entanto, é importante destacar que o seu recebedor não terá visibilidade dos dados de outros marketplaces em sua interface. Isso significa que eles terão acesso às informações relacionadas apenas à sua própria company.

Para os casos em que os recebedores possuem documentos vinculados a mais de uma company (marketplace), nossa API retornará apenas a visualização das Agendas (URs) dentro do seu marketplace, e não retornará nenhum dado nas rotas de Contrato. Essa medida visa garantir a confidencialidade das informações, uma vez que, atualmente, não é possível operacionalmente segmentar as agendas por marketplace. Dessa forma, cada recebedor terá acesso apenas aos dados relevantes à sua operação, preservando a privacidade das demais companies.

Uma Unidade de Recebíveis (UR) é um ativo financeiro criado a partir do registro em uma Entidade Registradora, no caso da Pagar.me, a TAG. Ela é composta por todas as transações de Arranjo de Pagamentos que possuem, em comum, o mesmo : Titular/Credor original da transação (sua empresa ou seu recebedor), Credenciador(Stone) ou Subcredenciador(Pagar.me), Arranjo de Pagamentos(Ex. Visa Crédito, Master Débito, Etc.) e a Data de Liquidação. Para saber mais, [acesse aqui](https://docs.taginfraestrutura.com.br/docs/unidade-de-recebiveis-ur).

Uma Agenda de Recebíveis é o somatório de todas as URs. Para saber mais, [acesse aqui](https://docs.taginfraestrutura.com.br/docs/agenda-de-recebiveis).

Contratos representam acordos bilaterais entre o titular da UR, como a sua empresa ou seu recebedor, e um Credor, que é a empresa/instituição financeira que adquire em definitivo ou em garantia os recebíveis por meio de um contrato, que será averbado no sistema de registro para produzir seus efeitos sobre uma ou mais URs (alteração de titularidade ou constituição de garantia). Para saber mais, [acesse aqui](https://docs.taginfraestrutura.com.br/docs/obrigacao-de-contrato).</content>
</page>

<page>
  <title>Retornando Contratos</title>
  <url>https://docs.pagar.me/reference/retornando-efeitos-de-contratos-copy</url>
  <content>get https://api.pagar.me/register/v5/settlement\_obligations/contracts

| Campo | Descrição |
| --- | --- |
| Key | Chave do contrato (contractKey) |
| contractHolder | Credor |
| contractType | Tipo de contrato |
| isCanceled | Ativo |
| createdAt | Data da criação |
| bankAccount | Domicílio Bancário |
| tradeRepository | Registradora do credor |
| PaymentScheme | Arranjo de pagamento |

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Retornando Contestações</title>
  <url>https://docs.pagar.me/reference/retornando-contestacoes</url>
  <content>get https://api.pagar.me/register/v5/contestations

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Contestando um Contrato</title>
  <url>https://docs.pagar.me/reference/contestando-um-contrato-v5</url>
  <content>post https://api.pagar.me/register/v5/contestations

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Tokenizecard JS</title>
  <url>https://docs.pagar.me/reference/pagarme-js</url>
  <content>Devido a preocupações de segurança, não é possível transmitir dados sensíveis, como informações de cartões de pagamento, em servidores que não estejam em conformidade com o Padrão de Segurança de Dados da Indústria de Cartões de Pagamento (PCI DSS).

O PCI DSS estabelece diretrizes rigorosas para proteger esses dados, e servidores não conformes estão suscetíveis a ataques de hackers, vazamentos de dados, penalidades financeiras, danos à reputação e responsabilidade legal. Portanto, oferecemos soluções que evitam a necessidade de dados sensíveis passarem diretamente pelos seus servidores.

Uma dessas soluções é o 'tokenizecard.js', um script JavaScript desenvolvido pelo Pagar.me. Você pode integrá-lo à sua página de checkout sem afetar a aparência da sua loja. Desta forma, toda vez que um comprador clicar no botão para finalizar o pedido, antes mesmo que o seu sistema monte a requisição para o Pagar.me, o nosso JavaScript captura os dados do cartão, manda direto para a nossa API e a nossa API devolve um **token** deste cartão.

O **tokenizecard.js** segue o seguinte fluxo:

> 🚧
> 
> Liberação de Domínio
> 
> 
> --------------------------
> 
> Para utilizar o tokenizecard.js é necessário cadastrar o domínio que fará a requisição para a Pagar.me. A liberação do domínio pode ser feita via dashboard nas configurações de conta.

**Passo 1:**  
Na tag `<form>` insira o atributo `data-pagarmecheckout-form` para que o script identifique de onde serão extraídos os dados.

    <form action="{{url de sua action}}" method="POST" data-pagarmecheckout-form>
       </form>
    

**Passo 2:**  
Coloque nos campos `<input>` do seu formulário os atributos `"data-pagarmecheckout-element"` correspondentes a cada um dos campos do cartão, conforme HTML abaixo. Estes serão capturados pelo script para a geração do token na submissão do formulário.

    <form action="{{url de sua action}}" method="POST" data-pagarmecheckout-form>
        <input type="text" name="holder-name" data-pagarmecheckout-element="holder_name">
        <input type="text" name="card-number" data-pagarmecheckout-element="number">
        <span  data-pagarmecheckout-element="brand"></span>
        <input type="text" name="card-exp-month" data-pagarmecheckout-element="exp_month">
        <input type="text" name="card-exp-year" data-pagarmecheckout-element="exp_year">
        <input type="text" name="cvv" data-pagarmecheckout-element="cvv">
        <input type="text" name="buyer-name">
        <button type="submit">Enviar</button>
    </form>
    

    <form action="{{url de sua action}}" data-pagarmecheckout-form>
        holder_name:<input data-pagarmecheckout-element="holder_name-0"><br>
        number:<input data-pagarmecheckout-element="number-0"> <span data-pagarmecheckout-element="brand-0"></span><br>
        exp_month:<input data-pagarmecheckout-element="exp_month-0"><br>
        exp_year:<input data-pagarmecheckout-element="exp_year-0"><br>
        cvv:<input data-pagarmecheckout-element="cvv-0"><br>
    
        <br><br>
    
        holder_name 1:<input data-pagarmecheckout-element="holder_name-1"><br>
        number 1:<input data-pagarmecheckout-element="number-1"> <span data-pagarmecheckout-element="brand-1"></span><br>
        exp_month 1:<input  data-pagarmecheckout-element="exp_month-1"><br>
        exp_year 1:<input data-pagarmecheckout-element="exp_year-1"><br>
        cvv 1:<input data-pagarmecheckout-element="cvv-1"><br>
    
        <input name="user-info x"><br>
        <input name="user-info y"><br>
        <input name="user-info z"><br>
    
        <button type="submit">Enviar</button>
    </form>
    

Quando o formulário for submetido, o script vai gerar o token e retorná-lo de duas maneiras:

1.  Através do atributo `"pagarmetoken"` no POST realizado.
2.  Inserindo um novo campo com o atributo `"name=pagarmetoken"` contendo o token gerado.

No caso de multimeios, para cada um dos formulários é feita uma requisição e no final é gerado um campo com o atributo "pagarmetoken-x".

> 👍
> 
> Campos adicionais podem ser inseridos
> 
> 
> -------------------------------------------
> 
> Quaisquer outros campos podem ser adicionados ao mesmo formulário, sem o atributo`data-pagarmecheckout-element`, e estes serão enviados normalmente ao seu servidor, sem a intervenção do script, como por exemplo, `buyer-name`.

> 📘
> 
> A bandeira do cartão é opcional
> 
> 
> -------------------------------------
> 
> Não é obrigatório enviar a bandeira do cartão. Se ela não for enviada, o nosso sistema irá detectá-la automaticamente.

> 🚧
> 
> Formatos válidos para data de expiração
> 
> 
> ---------------------------------------------
> 
> O campo referente a data da expiração do cartão pode ser informado de duas formas:
> 
> *   Em campo único, marcado como "exp\_date" (O formato esperado é MM-YY ou MM-YYYY)
> *   Em dois campos, "exp\_month" e "exp\_year".

**Passo 3**  
Deve ser inserido no final da sua página uma tag `<script>` com o **tokenizecard.js** e o atributo `data-pagarmecheckout-app-id` contendo sua **Chave Pública**.

    <script src="https://checkout.pagar.me/v1/tokenizecard.js"
            data-pagarmecheckout-app-id="{{sua chave pública}}">
        </script>
    

> ❗️
> 
> NÃO UTILIZE A SECRET\_KEY DO LOJISTA
> 
> 
> ------------------------------------------
> 
> A autenticação deste _endpoint_ deverá ser feita **exclusivamente** enviando a `public_key` do lojista no parâmetro **appId** na _query string_. A `secret_key` de sua loja **não deverá** ser armazenada na página, tão pouco ser enviada na requisição.

**Passo 4:**  
Depois de inserir o script é preciso **iniciar a detecção dos campos** com a chamada da função `PagarmeCheckout.init()`. O método`init()` pode receber 02 funções de [_callback_](https://www.w3schools.com/jquery/jquery_callback.asp):

*   **success(data)**, para execução de qualquer lógica de validação customizada.
*   **fail(error)**, para tratamento de erros.

Quando a função de _callback_ **success** é chamada recebe por parâmetro um objeto `data`, que é um **JSON** com o token gerado e os demais campos adicionais não mapeados com `data-pagarmecheckout-element`. Já a função **fail** recebe por parâmetro os detalhes do erro ocorrido.

    <script>
            function success(data) {
                return true;
            };
        
            function fail(error) {
                console.error(error);
            };
        
            PagarmeCheckout.init(success,fail)
        </script>
    

> 🚧
> 
> Chamada da função init
> 
> 
> ----------------------------
> 
> É essencial que a chamada da função esteja no startup da aplicação. Recomendamos que a chamada seja feita no root da aplicação(index.html) porém ela pode ser feita também no init do seu framework/lib

> 🚧
> 
> Inclua o atributo "name" nos campos não mapeados
> 
> 
> ------------------------------------------------------
> 
> É importante que todos os campos adicionais não mapeados possuam o atributo `name`, pois ele será utilizado para definir o objeto JSON de retorno.

> ❗️
> 
> CAMPO MAPEADOS DEVEM ESTAR NO DOM
> 
> 
> ---------------------------------------
> 
> Todos os elementos mapeados pelo atributo data-pagarmecheckout-element devem estar no DOM (Document Object Model) quando a função PagarmeCheckout.init() for chamada.

> ❗️
> 
> ABORTANDO O ENVIO DO PEDIDO
> 
> 
> ---------------------------------
> 
> Você pode impedir o envio dos dados para os servidores da Pagar.me retornando o valor `false` na função **success**.</content>
</page>

<page>
  <title>Tokenização</title>
  <url>https://docs.pagar.me/reference/tokeniza%C3%A7%C3%A3o-1</url>
  <content>  
Caso não seja possível embarcar nosso script **tokenizecard.js** em sua página, você pode **chamar diretamente a API de criação de tokens de cartão**. Os dados de cartão deverão ser enviados para a API da Pagar.me antes de submeter o formulário para o seu servidor. Nós retornaremos um objeto `token`, que deverá ser utilizado em sua requisição, no lugar dos dados de cartão.

> ❗️
> 
> NÃO TRAFEGUE DADOS DE CARTÃO EM SEU SERVIDOR
> 
> 
> --------------------------------------------------
> 
> É importante que você garanta que os dados abertos de cartão (número, cvv, vencimento e nome do titular) **não serão enviados para seu servidor**.

> 🚧
> 
> O Token do cartão é temporário
> 
> 
> ------------------------------------
> 
> Os tokens de cartão tem tempo de expiração de 60 segundos, e só poderão ser usados uma única vez. Se quiser armazenar de forma permanente o cartão em nosso sistema, [leia mais sobre cartões](https://docs.pagar.me/reference#cart%C3%B5es-1).

O objeto `token` possui os seguinte atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Token do cartão_. Formato: `token_XXXXXXXXXXXXXXXX` |
| `type` | **string** | _Tipo do token_. Valor padrão: `card`. |
| `created_at` | **datetime** | _Data de criação do token_. |
| `expires_at` | **datetime** | _Data de expiração do token_. |
| `card` | **objeto** | _Dados do cartão_. |</content>
</page>

<page>
  <title>Visão geral sobre Webhooks</title>
  <url>https://docs.pagar.me/reference/vis%C3%A3o-geral-sobre-webhooks</url>
  <content>Sempre que ocorre um evento importante, nós disparamos uma notificação para seu servidor. Essas notificações são chamadas de **webhooks**. É possível configurar varios endpoints e escolher quais eventos serão disparados . O objeto `webhook` contêm os seguintes atributos:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `id` | **string** | _Código do webhook_. Formato: `hook_XXXXXXXXXXXXXXXX`. |
| `url` | **string** | _Endereço do alvo_. |
| `event` | **enum** | _Evento do webhook_. |
| `status` | **enum** | _Status do webhook_. Valores possíveis: `pending`, `sent` ou `failed`. |
| `attempts` | **string** | _Tentativas realizadas_. |
| `last_attempt` | **datetime** | _Data da última tentativa_. |
| `response_status` | **string** | _Código de resposta do servidor_. |
| `response_raw` | **string** | _Resposta do servidor_. |
| `account` | **object** | _Dados da loja_. |
| `account.id` | **string** | _Código da loja_. |
| `account.name` | **string** | _Nome da loja_. |
| `data` | **object** | _Conteúdo da requisição_. |

> 🚧
> 
> Portas Padrão por protocolo (http e https)
> 
> 
> ------------------------------------------------
> 
> No caso de habilitar uma porta específica para o recebimento dos webhooks, para cada protocolo abaixo há uma porta específica:
> 
> *   http:80
> *   https:443

> 📘
> 
> Inspeção e debug
> 
> 
> ----------------------
> 
> Você pode usar o [RequestBin](http://requestb.in/) para facilmente inspecionar e debugar os webhooks que recebe.</content>
</page>

<page>
  <title>Exemplo de webhook</title>
  <url>https://docs.pagar.me/reference/exemplo-de-webhook-1</url>
  <content>Segue o exemplo de um webhook `order.paid` que nós enviamos:

    {
      "id": "hook_RyEKQO789TRpZjv5",
      "account": {
        "id": "acc_jZkdN857et650oNv",
        "name": "Lojinha"
      },
      "type": "order.paid",
      "created_at": "2017-06-29T20:23:47",
      "data": {
        "id": "or_ZdnB5BBCmYhk534R",
        "code": "1303724",
        "amount": 12356,
        "currency": "BRL",
        "closed": true,
        "items": [
          {
            "id": "oi_EqnMMrbFgBf0MaN1",
            "description": "Produto",
            "amount": 10166,
            "quantity": 1,
            "status": "active",
            "created_at": "2022-06-29T20:23:42",
            "updated_at": "2022-06-29T20:23:42"
          }
        ],
        "customer": {
          "id": "cus_oy23JRQCM1cvzlmD",
          "name": "FABIO ",
          "email": "[email protected]",
          "document": "09006068709",
          "type": "individual",
          "delinquent": false,
          "created_at": "2022-06-29T20:23:42",
          "updated_at": "2022-06-29T20:23:42",
          "phones": {}
        },
        "shipping": {
          "amount": 2190,
          "description": "Economico",
          "address": {
            "zip_code": "90265",
            "city": "Malibu",
            "state": "CA",
            "country": "US",
            "line_1": "10880, Malibu Point, Malibu Central"
          }
        },
        "status": "paid",
        "created_at": "2022-06-29T20:23:42",
        "updated_at": "2022-06-29T20:23:47",
        "closed_at": "2022-06-29T20:23:44",
        "charges": [
          {
            "id": "ch_d22356Jf4WuGr8no",
            "code": "1303624",
            "gateway_id": "da7f2304-1937-42a4-b995-0f4ea2b36264",
            "amount": 12356,
            "status": "paid",
            "currency": "BRL",
            "payment_method": "credit_card",
            "paid_at": "2022-06-29T20:23:47",
            "created_at": "2022-06-29T20:23:42",
            "updated_at": "2022-06-29T20:23:47",
            "customer": {
              "id": "cus_oybzJRQ231cvzlmD",
              "name": "FABIO E RACHEL ",
              "email": "[email protected]",
              "document": "09006507709",
              "type": "individual",
              "delinquent": false,
              "created_at": "2022-06-29T20:23:42",
              "updated_at": "2022-06-29T20:23:42",
              "phones": {}
            },
            "last_transaction": {
              "id": "tran_opAqDj2390S1lKQO",
              "transaction_type": "credit_card",
              "gateway_id": "3b12320a-0d67-4c06-b497-6622fe9763c8",
              "amount": 12356,
              "status": "captured",
              "success": true,
              "installments": 2,
              "acquirer_name": "redecard",
              "acquirer_affiliation_code": "30233726",
              "acquirer_tid": "247391236",
              "acquirer_nsu": "247391236",
              "acquirer_auth_code": "236689",
              "operation_type": "capture",
              "card": {
                "id": "card_BjKOmahgAf0D23lw",
                "last_four_digits": "4485",
                "brand": "Visa",
                "holder_name": "FABIO",
                "exp_month": 6,
                "exp_year": 2025,
                "status": "active",
                "created_at": "2022-06-29T20:23:42",
                "updated_at": "2022-06-29T20:23:42",
                "billing_address": {
                  "zip_code": "90265",
                  "city": "Malibu",
                  "state": "CA",
                  "country": "US",
                  "line_1": "10880, Malibu Point, Malibu Central"
                },
                "type": "credit"
              },
              "created_at": "2022-06-29T20:23:47",
              "updated_at": "2022-06-29T20:23:47",
              "gateway_response": {
                "code": "200"
              }
            }
          }
        ]
      }
    }</content>
</page>

<page>
  <title>Checkout</title>
  <url>https://docs.pagar.me/v5/reference/checkout-2</url>
  <content>Para criar um pedido com **checkout**, é necessário fazer uma `requisição` para a nossa [API de checkout](https://docs.pagar.me/reference/create-link). O objeto `checkout` contêm as seguintes propriedades:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| `accepted_payment_methods` | **array of string** | _Meios de pagamento aceitos para o checkout_. Valores possíveis: `credit_card`, `debit_card`, `boleto`, `voucher` e `bank_transfer`, `pix`. |
| `accepted_multi_payment_methods` | **array of array of string** | _Meios de pagamentos aceitos para permitir ao cliente a opção de multimeios_. Valores possíveis: `credit_card, boleto` e `credit_card, credit_card` . |
| `default_payment_method` | **string** | _Meio de pagamento padrão_. |
| `success_url` | **string** | _URL para redirecionamento de sucesso_. |
| `debit_card` | **object** | \_Configurações para pagamento com cartão de débito. [Saiba mais sobre cartão de débito](https://docs.pagar.me/reference#cart%C3%A3o-de-d%C3%A9bito-1). |
| `credit_card` | **object** | _Configurações para pagamento com cartão de crédito_. [Saiba mais sobre cartão de crédito](https://docs.pagar.me/reference#cart%C3%A3o-de-cr%C3%A9dito-1) |
| `credit_card.capture` | **boolean** | _Indica se a transação deve ser capturada ou somente autorizada_. Caso seja `true`, o valor é capturado simultaneamente à autorização. |
| `credit_card.statement_descriptor` | **string** | _Texto da fatura do cartão_. |
| `credit_card.installments` | **array of objects** | _Array de configurações de parcelas_. |
| `credit_card.installments.number` | **number** | _Quantidade de parcelas_. |
| `credit_card.installments.total` | **number** | _Valor total referente à quantidade de parcelas_. |
| `boleto` | **object** | _Configurações para pagamento com boleto_. |
| `boleto.due_at` | **string** | _Data de vencimento do boleto_. |
| `boleto.instructions` | **string** | _Instruções do boleto_. |
| `skip_checkout_success_page` | **boolean** | _Permite pular a tela de redirecionamento pós pagamento_. |
| `customer_editable` | **boolean** | _Torna o objeto do cliente editável_. |
| `metadata` | **object** | _Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento_.[Saiba mais sobre metadata](https://docs.pagar.me/reference#metadata-1). |
| `bank_transfer` | **object** | _Configurações para pagamento via transferência bancária_. |
| `bank_transfer.bank` | **array of objects** | _Array de configurações para indicar quais bancos serão utilizados para a transferência bancária_. |
| `expires_in` | **integer** | _Tempo, em minutos, para a expiração do checkout_. Caso não seja enviado, o checkout não irá expirar. |
| `billing_address_editable` | **boolean** | _Torna o objeto billing address editável_. |
| `billing_address` | **object** | _Configuração para endereço de cobrança_. |
| `voucher` | **object** | _Configurações para pagamento com voucher._ [Saiba mais sobre voucher](https://docs.pagar.me/reference#voucher-1). |
| `pix` | **object** | _Configurações para pagamento com PIX_  
\[Saiba mais sobre PIX\]  
([https://docs.pagar.me/v5/reference#pix-1](https://docs.pagar.me/reference#pix-1)) |

    {
       "items":[
          {
             "amount":2990,
             "description":"Chaveiro do Tesseract",
             "quantity":1
          }
       ],
       "customer":{
          "name":"Tony Stark",
          "email":"[email protected]"
       },
       "payments":[
          {
             "payment_method":"checkout",
             "amount":2000,
             "checkout": {
               "customer_editable" : false,
               "skip_checkout_success_page": true,
               "accepted_payment_methods": [ "credit_card", "boleto", "pix", "bank_transfer", "voucher","debit_card"],
               "accepted_multi_payment_methods": [ 
    		      		["credit_card","credit_card"],
    		      		["credit_card","boleto"]
    		   			],
               "success_url": "https://www.pagar.me",
               "bank_transfer": {
                 "bank": ["237", "001", "341"]
               },
               "boleto": {
                 "bank": "033",
                 "instructions": "Pagar até o vencimento",
                 "due_at": "2020-07-25T00:00:00Z"
             },
               "credit_card": {
                  "capture": true,
                  "statement_descriptor": "Desc na fatura",
                  "installments": [
                    {
                      "number": 1,
                      "total": 2000
                    },
                    {
                      "number": 2,
                      "total": 2500
                    }
                 ]
               },"pix": {
               		"expires_in": 100000
               },"voucher":{
               		"capture": true,
               		"statement_descriptor": "pagar.me"
               },
              "debit_card": {
                 "authentication":{
                   "statement_descriptor": "Desc na fatura",
                   "type":"threed_secure",
                   "threed_secure":{
                     "mpi":"acquirer",
                     "success_url":"http://www.pagar.me"
                   }
                 }
               }
             }
          }
       ]
    }
    

    {
      "id": "or_3AQ5bRgsyzfe5KEr",
      "code": "Z9GQZSVHX8",
      "amount": 2990,
      "currency": "BRL",
      "closed": false,
      "items": [
        {
          "id": "oi_1Y6DxKAUNXtvgMOW",
          "type": "product",
          "description": "Chaveiro do Tesseract",
          "amount": 2990,
          "quantity": 1,
          "status": "active",
          "created_at": "2020-07-06T22:53:47Z",
          "updated_at": "2020-07-06T22:53:47Z"
        }
      ],
      "customer": {
        "id": "cus_QaJd1LRfxF0g3KDP",
        "name": "Tony Stark",
        "email": "[email protected]",
        "delinquent": false,
        "created_at": "2020-07-06T22:42:09Z",
        "updated_at": "2020-07-06T22:42:09Z",
        "phones": {}
      },
      "status": "pending",
      "created_at": "2020-07-06T22:53:47Z",
      "updated_at": "2020-07-06T22:53:47Z",
      "checkouts": [
        {
          "id": "chk_GmMAkj7h2U6ONrW5",
          "currency": "BRL",
          "amount": 2000,
          "status": "open",
          "success_url": "https://www.pagar.me",
          "payment_url": "https://api.pagar.me/checkout/v1/orders/chk_GmMAkj7h2U6ONrW5",
          "customer_editable": false,
          "billing_address_editable": true,
          "skip_checkout_success_page": true,
          "shippable": false,
          "created_at": "2020-07-06T22:53:47Z",
          "updated_at": "2020-07-06T22:53:47Z",
          "accepted_payment_methods": [
            "credit_card",
            "boleto",
            "bank_transfer",
            "voucher",
            "debit_card"
          ],
          "accepted_multi_payment_methods": [
            [
              "credit_card",
              "credit_card"
            ],
            [
              "credit_card",
              "boleto"
            ]
          ],
          "customer": {
            "id": "cus_QaJd1LRfxF0g3KDP",
            "name": "Tony Stark",
            "email": "[email protected]",
            "delinquent": false,
            "created_at": "2020-07-06T22:42:09Z",
            "updated_at": "2020-07-06T22:42:09Z",
            "phones": {}
          },
          "credit_card": {
            "capture": true,
            "statementDescriptor": "Desc na fatura",
            "statement_descriptor": "Desc na fatura",
            "authentication": {
              "type": "none",
              "threed_secure": {}
            },
            "installments": [
              {
                "number": 1,
                "total": 2000
              },
              {
                "number": 2,
                "total": 2500
              }
            ]
          },
          "debit_card": {
            "authentication": {
              "type": "threed_secure",
              "threed_secure": {
                "mpi": "acquirer",
                "success_url": "http://www.pagar.me"
              }
            }
          },
          "boleto": {
            "due_at": "2020-07-25T00:00:00Z",
            "instructions": "Pagar até o vencimento"
          },
          "voucher": {
            "capture": true,
            "statement_descriptor": "pagar.me"
          },
          "billing_address": {},
          "metadata": {}
        }
      ]
    }
    

    //This example was built using MundiAPI-PHP SDK.
    //For more information, please refer to https://github.com/mundipagg/MundiAPI-PHP
    
    $secretKey = 'sk_test_4tdVXpseumRmqbo'; //the secret key will be provided by MundiPagg.
    $basicAuthPassword = ''; //fill it with an empty string
    
    $apiClient = new \MundiAPILib\MundiAPIClient(
        $secretKey,
        $basicAuthPassword
    );
    
    $orderController = $apiClient->getOrders();
    
    $customer = new \MundiAPILib\Models\CreateCustomerRequest();
    $customer->name = "Tony Stark";
    $customer->email = "[email protected]";
    
    $checkout = new \MundiAPILib\Models\CreateCheckoutPaymentRequest();
    $checkout->customerEditable = false;
    $checkout->skipCheckoutSuccessPage = true;
    $checkout->acceptedPaymentMethods = ["credit_card", "boleto", "bank_transfer", "debit_card"];
    $checkout->acceptedMultiPaymentMethods = [["credit_card", "credit_card"], ["credit_card", "boleto"]];
    $checkout->successUrl = "https://www.mundipagg.com";
    
    //Bank transfer payment Setup;
    $checkout->bankTransfer = new \MundiAPILib\Models\CreateCheckoutBankTransferRequest();
    $checkout->bankTransfer->bank = ["237", "001", "341"];
    
    //Boleto Payment Setup;
    $checkout->boleto = new \MundiAPILib\Models\CreateCheckoutBoletoPaymentRequest();
    $checkout->boleto->bank = "033";
    $checkout->boleto->instructions ="Pagar ate o vencimento";
    $checkout->boleto->dueAt = new \DateTime("2021-07-25T00:00:00Z");
    
    //Credit Card Payment Setup;
    $checkout->creditCard = new \MundiAPILib\Models\CreateCheckoutCreditCardPaymentRequest();
    $checkout->creditCard->capture = true;
    $checkout->creditCard->statement_descriptor = "Descriptor example";
    $checkout->creditCard->installments = [ //Credit card installments Setup
        new \MundiAPILib\Models\CreateCheckoutCardInstallmentOptionRequest(),
        new \MundiAPILib\Models\CreateCheckoutCardInstallmentOptionRequest()
    ];
    // installment 1;
    $checkout->creditCard->installments[0]->number = 1;
    $checkout->creditCard->installments[0]->total = 2000;
    // installment 2 with extra tax of 500;
    $checkout->creditCard->installments[1]->number = 1;
    $checkout->creditCard->installments[1]->total = 2500;
    
    // Debit Card Payment Setup;
    $checkout->debitCard = new \MundiAPILib\Models\CreateCheckoutDebitCardPaymentRequest();
    // Debit card Authentication Setup;
    $checkout->debitCard->authentication = new \MundiAPILib\Models\CreatePaymentAuthenticationRequest();
    $checkout->debitCard->authentication->type = 'threed_secure';
    $checkout->debitCard->authentication->threedSecure = new \MundiAPILib\Models\CreateThreeDSecureRequest();
    $checkout->debitCard->authentication->threedSecure->mpi = "acquirer";
    $checkout->debitCard->authentication->threedSecure->successUrl = "https://www.mundipagg.com";
    
    $request = new \MundiAPILib\Models\CreateOrderRequest();
    
    $request->items = [new \MundiAPILib\Models\CreateOrderItemRequest()];
    $request->items[0]->description = "Tesseract Bracelet";
    $request->items[0]->quantity = 1;
    $request->items[0]->amount = 2990; // this value should be in cents
    
    $request->payments = [new \MundiAPILib\Models\CreatePaymentRequest()];
    $request->payments[0]->amount = 2000; // this value should be in cents
    $request->payments[0]->paymentMethod = "checkout";
    $request->payments[0]->checkout = $checkout;
    $request->customer = $customer;
    
    $result = new \MundiAPILib\Models\GetOrderResponse();
    $result->checkouts = [new \MundiAPILib\Models\GetCheckoutPaymentResponse()];
    $result = $orderController->createOrder($request);
    
    echo json_encode($result, JSON_PRETTY_PRINT);
    

    from mundiapi.mundiapi_client import MundiapiClient
    from mundiapi.models import *
    from mundiapi.controllers import *
    from mundiapi.exceptions.error_exception import *
    
    MundiapiClient.config.basic_auth_user_name = "SUA_SECRET_KEY:"
    orders_controller = orders_controller.OrdersController()
    
    customer = create_customer_request.CreateCustomerRequest()
    customer.name = "Tony Stark"
    customer.email = "[email protected]"
    
    checkout = create_checkout_payment_request.CreateCheckoutPaymentRequest()
    checkout.customer_editable = False
    checkout.skip_checkout_success_page = True
    checkout.accepted_payment_methods = ["credit_card", "boleto", "bank_transfer", "debit_card"]
    checkout.accepted_multi_payment_methods = [["credit_card", "credit_card"], ["credit_card", "boleto"]]
    checkout.success_url = "https://www.mundipagg.com"
    
    #Bank transfer payment Setup
    checkout.bank_transfer = create_checkout_bank_transfer_request.CreateCheckoutBankTransferRequest()
    checkout.bank_transfer.bank = ["237", "001", "341"]
    
    #Boleto Payment Setup
    checkout.boleto = create_checkout_boleto_payment_request.CreateCheckoutBoletoPaymentRequest()
    checkout.boleto.bank = "033"
    checkout.boleto.instructions ="Pagar ate o vencimento"
    checkout.boleto.due_at = "2021-07-25T00:00:00Z"
    
    #Credit Card Payment Setup
    checkout.credit_card = create_checkout_credit_card_payment_request.CreateCheckoutCreditCardPaymentRequest()
    checkout.credit_card.capture = True
    checkout.credit_card.statement_descriptor = "Descriptor example"
    checkout.credit_card.installments = [ # Credit card installments Setup
        create_checkout_card_installment_option_request.CreateCheckoutCardInstallmentOptionRequest(),
        create_checkout_card_installment_option_request.CreateCheckoutCardInstallmentOptionRequest()]
    # installment 1
    checkout.credit_card.installments[0].number = 1
    checkout.credit_card.installments[0].total = 2000
    # installment 2 with extra tax of 500
    checkout.credit_card.installments[1].number = 1
    checkout.credit_card.installments[1].total = 2500
    
    # Debit Card Payment Setup
    checkout.debit_card = create_checkout_debit_card_payment_request.CreateCheckoutDebitCardPaymentRequest()
    # Debit card Authentication Setup
    checkout.debit_card.authentication = create_payment_authentication_request.CreatePaymentAuthenticationRequest()
    checkout.debit_card.authentication.mtype = 'none'
    checkout.debit_card.authentication.threed_secure = create_three_d_secure_request.CreateThreeDSecureRequest()
    checkout.debit_card.authentication.threed_secure.mpi = "acquirer"
    checkout.debit_card.authentication.threed_secure.success_url = "https://www.mundipagg.com"
    
    request = create_order_request.CreateOrderRequest()
    request.code = "test-SDK-python"
    request.items = [create_order_item_request.CreateOrderItemRequest()]
    request.items[0].description = "Tesseract Bracelet"
    request.items[0].quantity = 1
    request.items[0].amount = 2990
    
    request.payments = [create_payment_request.CreatePaymentRequest()]
    request.payments[0].amount = 2000
    request.payments[0].payment_method = "checkout"
    request.payments[0].checkout = checkout
    request.customer = customer
    
    try:
        result = get_order_response.GetOrderResponse()
        result.checkouts = [get_checkout_payment_response.GetCheckoutPaymentResponse()]
        result = orders_controller.create_order(request)
        print("Order id: ", result.id)
        print("Checkout id: ", result.checkouts[0].id)
        print("Order result status: ", result.status)
        print("Checkout payment url: ", result.checkouts[0].payment_url)
        assert result.status == "pending"
        assert result.checkouts[0].boleto is not None
        assert result.checkouts[0].credit_card is not None
        assert result.checkouts[0].debit_card is not None
        assert result.checkouts[0].bank_transfer is not None
        assert result.checkouts[0].payment_url is not None
    except ErrorException as ex:
        print("\n")
        print("Error Message: ", ex.message)
        print("Status code Response: ", ex.response_code)
        if(ex.errors is not None):
            print("Errors: ", ex.errors)
    except Exception as ex:
        raise ex
    

> ❗️
> 
> CHECKOUT APLICA-SE APENAS A PEDIDOS
> 
> 
> -----------------------------------------
> 
> É importante notar que o meio de pagamento checkout é suportado somente por pedidos, **não podendo ser utilizado em cobranças**.</content>
</page>

<page>
  <title>Eventos de webhook</title>
  <url>https://docs.pagar.me/reference/eventos-de-webhook-1</url>
  <content>`customer.created`Ocorre sempre que um comprador é criado.`customer.updated`Ocorre sempre que um comprador é atualizado.`card.created`Ocorre sempre que um cartão é criado.`card.updated`Ocorre sempre que um cartão é atualizado.`card.deleted`Ocorre sempre que um cartão é excluído.`address.created`Ocorre sempre que um endereço é criado.`address.updated`Ocorre sempre que um endereço é atualizado.`address.deleted`Ocorre sempre que um endereço é excluído.`card.expired`Ocorre sempre que um cartão expira a data de validade.`plan.created`Ocorre sempre que um plano é criado.`plan.updated`Ocorre sempre que um plano é atualizado.`plan.deleted`Ocorre sempre que um plano é excluído.`plan_item.created`Ocorre sempre que um item de plano é criado.`plan_item.updated`Ocorre sempre que um item de plano é atualizado.`plan_item.deleted`Ocorre sempre que um item de plano é excluído.`subscription.created`Ocorre sempre que uma assinatura é criada.`subscription.canceled`Ocorre sempre que a assinatura é cancelada.`subscription_item.created`Ocorre sempre que um item de assinatura é criado.`subscription_item.updated`Ocorre sempre que um item de assinatura é atualizado.`subscription_item.deleted`Ocorre sempre que um item de assinatura é excluído.`discount.created`Ocorre sempre que um desconto é criado.`discount.deleted`Ocorre sempre que um desconto é excluído.`increment.created`Ocorre sempre que um incremento é criado.`increment.deleted`Ocorre sempre que um incremento é excluído.`order.paid`Ocorre sempre que um pedido é pago.`order.payment_failed`Ocorre sempre que o pagamento de um pedido falha.`order.created`Ocorre sempre que um pedido é criado.`order.canceled`Ocorre sempre que um pedido é cancelado.`order_item.created`Ocorre sempre que um item do pedido é criado .`order_item.updated`Ocorre sempre que um item do pedido é atualizado.`order_item.deleted`Ocorre sempre que um item do pedido é excluído.`order.closed`Ocorre sempre que um pedido é fechado.`order.updated`Ocorre sempre que um pedido é atualizado.`invoice.created`Ocorre sempre que uma fatura é criada.`invoice.updated`Ocorre sempre que uma fatura é atualizada.`invoice.paid`Ocorre sempre que uma fatura é paga.`invoice.payment_failed`Ocorre sempre que o pagamento de uma fatura falha.`invoice.canceled`Ocorre sempre que uma fatura é cancelada`charge.created`Ocorre sempre que uma cobrança é criada.`charge.updated`Ocorre sempre que uma cobrança é atualizado.`charge.paid`Ocorre sempre que uma cobrança é paga.`charge.payment_failed`Ocorre sempre que o pagamento de uma cobrança falha.`charge.refunded`Ocorre sempre que uma cobrança é estornada.`charge.pending`Ocorre sempre que uma cobrança é pendente.`charge.processing`Ocorre sempre que uma cobrança ainda está sendo processada.`charge.underpaid`Ocorre sempre que uma cobrança foi paga a menos.`charge.overpaid`Ocorre sempre que uma cobrança foi paga a mais.`charge.partial_canceled`Ocorre sempre que uma cobrança foi parcialmente cancelada.`charge.chargedback`Ocorre sempre que uma cobrança sofre chargeback.`usage.created`Ocorre sempre que o uso de um item no período é criado.`usage.deleted`Ocorre sempre que o uso de um item no período é excluído.`recipient.created`Ocorre sempre que um recebedor é criado.`recipient.deleted`Ocorre sempre que um recebedor é excluído.`recipient.updated`Ocorre sempre que um recebedor é atualizado.`bank_account.created`Ocorre sempre que uma conta bancária é criada.`bank_account.updated`Ocorre sempre que uma conta bancária é atualizada.`bank_account.deleted`Ocorre sempre que uma conta bancária é excluído.`seller.created`Ocorre sempre que um vendedor e criado.`seller.updated`Ocorre sempre que um vendedor e editado.`seller.deleted`Ocorre sempre que um vendedor e deletado.`transfer.pending`Ocorre sempre que uma transferência esta em processo pendente.`transfer.created`Ocorre sempre que uma transferência e criada.`transfer.processing`Ocorre sempre que uma transferência esta em processamento.`transfer.paid`Ocorre sempre que uma transferência e paga.`transfer.canceled`Ocorre sempre que uma transferência e cancelada.`transfer.failed`Ocorre sempre que uma transferência ocorre falha.`checkout.created`Ocorre quando um checkout é criado.`checkout.canceled`Ocorre quando um checkout é cancelado.`checkout.closed`Ocorre quando um checkout é fechado.`charge.antifraud_approved`Ocorre quando um pedido no antifraude é aprovado.`charge.antifraud_reproved`Ocorre quando um pedido no antifraude é reprovado.`charge.antifraud_manual`Ocorre quando um pedido no antifraude é marcado para análise manual.`charge.antifraud_pending`Ocorre quando um pedido está pendente de envio para a análise do serviço de antifraude.</content>
</page>

<page>
  <title>Enviar webhook</title>
  <url>https://docs.pagar.me/reference/enviar-webhook</url>
  <content>post https://api.pagar.me/core/v5/hooks//retry

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Obter webhook</title>
  <url>https://docs.pagar.me/reference/obter-webhook</url>
  <content>get https://api.pagar.me/core/v5/hooks/

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Listar webhooks</title>
  <url>https://docs.pagar.me/reference/listar-webhooks</url>
  <content>get https://api.pagar.me/core/v5/hooks

Click `Try It!` to start a request and see the response here!</content>
</page>

<page>
  <title>Getting Started With Your API</title>
  <url>https://docs.pagar.me/reference/getting-started-with-your-api</url>
  <content>This page will help you get started with Pagar.me API - Register V5.

This is where you show your users how to set it up. You can use code samples, like this:

    $http.post('/someUrl', data).success(successCallback);
    
    alert('test');
    

Try typing `/` to see how easy it is to add more content!</content>
</page>