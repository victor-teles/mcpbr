# Installing Pagar.me

## Getting Started

1. First, you'll need to create an account at [Pagar.me](https://pagar.me)

2. Once logged in, you'll need to get your API keys from the dashboard:
   - API Key
   - Encryption Key

3. For development/testing, you can use the test API keys provided in your dashboard.

## Installation Methods

### Using npm

```bash
npm install pagarme
```

### Using yarn

```bash
yarn add pagarme
```

## Basic Setup

```javascript
const pagarme = require('pagarme')

// Initialize the client with your API key
const client = pagarme.client.connect({ api_key: 'YOUR_API_KEY' })

// For testing, you can use the test API key
const testClient = pagarme.client.connect({ api_key: 'YOUR_TEST_API_KEY' })
```

## Environment Variables

For security, it's recommended to store your API keys in environment variables:

```bash
# .env
PAGARME_API_KEY=your_api_key_here
PAGARME_ENCRYPTION_KEY=your_encryption_key_here
```

## Next Steps

After installation, you can:

1. Create transactions
2. Process payments
3. Handle webhooks
4. Manage subscriptions
5. Process refunds

For detailed API documentation and examples, refer to the [Pagar.me API Reference](https://docs.pagar.me/reference/introdução-1). 
