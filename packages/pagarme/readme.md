# Pagarme 💳

## 📦 Instalação

### Pre-requisitos

- Node.js
- Chave de API pagarme

### Configurando o mcp com npx

```json
{
  "mcpServers": {
    "pagarme": {
      "command": "npx",
      "args": ["-y", "@mcpbr/pagarme"],
      "env": {
        "PAGARME_API_KEY": "API_KEY_DA_PAGARME"
      }
    }
  }
}
```

## 🛠️ Ferramentas disponíveis

O servidor pagarme possui as seguintes ferramentas disponíveis:

### Endereços
- `create-address`
- `delete-address`
- `get-address`
- `list-addresses`
- `update-address`

### Cartões
- `create-card`
- `create-card-token`
- `delete-card`
- `get-card`
- `get-bin`
- `list-cards`
- `renew-card`
- `update-card`

### Clientes
- `create-customer`
- `get-customer`
- `list-customers`
- `update-customer`
