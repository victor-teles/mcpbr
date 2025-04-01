import { CoreTool } from '@mcpay/core'
import { getBankTool } from './get-bank'
import { getCepTool } from './get-cep'
import { getCitiesTool } from './get-cities'
import { getCnpjTool } from './get-cnpj'
import { getCptecAirportWeatherTool } from './get-cptec-airport-weather'
import { getCptecCapitalWeatherTool } from './get-cptec-capital-weather'
import { getCptecCityTool } from './get-cptec-city'
import { getCptecForecastTool } from './get-cptec-forecast'
import { getCptecWavesTool } from './get-cptec-waves'
import { getDddTool } from './get-ddd'
import { getDomainStatusTool } from './get-domain-status'
import { getExchangeRateTool } from './get-exchange-rate'
import { getHolidaysTool } from './get-holidays'
import { getIbgeStateTool } from './get-ibge-state'
import { getIsbnTool } from './get-isbn'
import { getNcmTool } from './get-ncm'
import { getSecuritiesBrokerTool } from './get-securities-broker'
import { getTaxRatesTool } from './get-tax-rates'
import { getVehicleTool } from './get-vehicle'
import { getVehiclePriceTool } from './get-vehicle-price'
import { getVehiclePriceByReferenceTool } from './get-vehicle-price-by-reference'
import { getVehiclePriceHistoryTool } from './get-vehicle-price-history'
import { getVehicleReferenceTool } from './get-vehicle-reference'
import { listBanksTool } from './list-banks'
import { listCptecCitiesTool } from './list-cptec-cities'
import { listCurrenciesTool } from './list-currencies'
import { listNcmTool } from './list-ncm'
import { listPixParticipantsTool } from './list-pix-participants'
import { listSecuritiesBrokersTool } from './list-securities-brokers'
import { listStatesTool } from './list-states'
import { listVehicleBrandsTool } from './list-vehicle-brands'
import { listVehicleModelsTool } from './list-vehicle-models'
import { listVehicleYearsTool } from './list-vehicle-years'
import { searchNcmTool } from './search-ncm'

export const tools: CoreTool[] = [
  getCnpjTool,
  getCepTool,
  getBankTool,
  getDddTool,
  getHolidaysTool,
  listStatesTool,
  getCitiesTool,
  getTaxRatesTool,
  getVehicleTool,
  listVehicleBrandsTool,
  listVehicleModelsTool,
  listVehicleYearsTool,
  getVehiclePriceTool,
  getVehicleReferenceTool,
  getVehiclePriceHistoryTool,
  getVehiclePriceByReferenceTool,
  listPixParticipantsTool,
  getDomainStatusTool,
  listBanksTool,
  listCurrenciesTool,
  getExchangeRateTool,
  listSecuritiesBrokersTool,
  getSecuritiesBrokerTool,
  listCptecCitiesTool,
  getCptecCityTool,
  getCptecCapitalWeatherTool,
  getCptecAirportWeatherTool,
  getCptecForecastTool,
  getCptecWavesTool,
  getIbgeStateTool,
  getIsbnTool,
  listNcmTool,
  searchNcmTool,
  getNcmTool,
]
