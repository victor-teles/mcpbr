import packageJson from '../package.json'

export const meta = {
  name: 'mcp-server/openpix',
  version: packageJson.version,
  env: {
    production: {
      url: 'https://api.openpix.com.br/api/v1',
    },
    development: {
      url: 'https://api.openpix.com.br/api/v1',
    },
  },
}

const env = process.env.NODE_ENV || 'development'
export const baseUrl = meta.env[env as 'production' | 'development'].url
