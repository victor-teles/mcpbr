# OpenPix 💳

## 📦 Instalação

### Pre-requisitos

- Node.js
- Chave de API openpix

### Configurando o mcp com npx

```json
{
  "mcpServers": {
    "openpix": {
      "command": "npx",
      "args": ["-y", "@mcpbr/openpix"],
      "env": {
        "OPENPIX_API_KEY": "API_KEY_DA_OPENPIX"
      }
    }
  }
}
```

## 🛠️ Ferramentas disponíveis

O servidor openpix possui as seguintes ferramentas disponíveis:

### Criação
- `create-charge`
- `create-charge-refund`
- `create-customer`
- `create-partner-application`
- `create-payment`
- `create-pix-qrcode`
- `create-preregistration`
- `create-refund`
- `create-subaccount`
- `create-subaccount-withdrawal`
- `create-subscription`
- `create-transfer`
- `create-webhook`

### Consulta
- `get-account`
- `get-charge`
- `get-customer`
- `get-dispute`
- `get-payment`
- `get-pix-qrcode`
- `get-preregistration`
- `get-refund`
- `get-subaccount`
- `get-subscription`
- `get-transaction`

### Listagem
- `list-accounts`
- `list-charges`
- `list-charge-refunds`
- `list-customers`
- `list-disputes`
- `list-payments`
- `list-pix-qrcodes`
- `list-preregistrations`
- `list-refunds`
- `list-subaccounts`
- `list-transactions`
- `list-webhook-ips`
- `list-webhooks`

### Atualização
- `approve-payment`
- `update-charge-expiration`
- `update-customer`

### Deleção
- `delete-charge`
- `delete-webhook`

### Outros
- `transfer-subaccount`
- `withdrawal-from-account`

