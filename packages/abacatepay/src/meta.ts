import packageJson from '../package.json'

export const meta = {
  name: 'mcp-server/abacatepay',
  version: packageJson.version,
  env: {
    production: {
      url: 'https://api.abacatepay.com',
    },
    development: {
      url: 'https://api.abacatepay.com',
    },
  },
}

const env = process.env.NODE_ENV || 'development'
export const baseUrl = meta.env[env as 'production' | 'development'].url
