import LocalStorageData from './LocalStorageData'
import JsonData from './JsonData'

// Abstract Factory: crea el proveedor de datos según tipo
export default class DataFactory {
  static create(kind = 'local') {
    if (kind === 'json') return new JsonData()
    return new LocalStorageData('items_v1')
  }
}
