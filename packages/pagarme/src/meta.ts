import packageJson from '../package.json'

export const meta = {
  name: 'mcp-server/pagarme',
  version: packageJson.version,
  env: {
    production: {
      url: 'https://api.pagar.me',
    },
    development: {
      url: 'https://api.pagar.me',
    },
  },
}

const env = process.env.NODE_ENV || 'development'
export const baseUrl = meta.env[env as 'production' | 'development'].url
