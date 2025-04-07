# Abacate pay 🥑

## 📦 Instalação

### Pre-requisitos

- Node.js
- Chave de API abacatepay

### Configurando o mcp com npx

```json
{
  "mcpServers": {
    "abacatepay": {
      "command": "npx",
      "args": ["-y", "@mcpbr/abacatepay"],
      "env": {
        "ABACATEPAY_API_KEY": "API_KEY_DA_ABACATEPAY"
      }
    }
  }
}
```

## 🛠️ Ferramentas disponíveis

O servidor abacatepay possui as seguintes ferramentas disponíveis:

- `create-customer`
- `create-payment`
- `list-coupons`
- `list-customers`
- `list-payments`