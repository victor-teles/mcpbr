#!/usr/bin/env node

import { mcpServerFactory } from '@mcpbr/core'
import { meta } from './meta'
import { tools } from './tools'

const apiKey = process.env.OPENPIX_API_KEY

if (!apiKey) {
  throw new Error('OPENPIX_API_KEY is not set')
}

const server = mcpServerFactory({ name: meta.name, version: meta.version }, { apiKey })

server.make(tools)
server.start()
