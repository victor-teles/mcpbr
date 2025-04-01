import packageJson from '../package.json'

export const meta = {
  name: 'mcp-server/brazilapi',
  version: packageJson.version,
  env: {
    production: {
      url: 'https://brasilapi.com.br/api',
    },
    development: {
      url: 'https://brasilapi.com.br/api',
    },
  },
}

const env = process.env.NODE_ENV || 'development'
export const baseUrl = meta.env[env as 'production' | 'development'].url
