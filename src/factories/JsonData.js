// Simula un backend JSON en memoria
const SAMPLE = [
  { id: 'a1', title: 'Ejemplo 1', description: 'Elemento desde JSON simulado' },
  { id: 'a2', title: 'Ejemplo 2', description: 'Otro elemento' }
]

export default class JsonData {
  constructor() { this.store = [...SAMPLE] }

  async getAll() { return [...this.store] }
  async add(item) { const id = Date.now().toString(36); const it = { id, ...item }; this.store.push(it); return it }
  async update(item) { const i = this.store.findIndex(s => s.id === item.id); if (i!==-1) this.store[i] = { ...this.store[i], ...item }; return item }
  async remove(id) { this.store = this.store.filter(s => s.id !== id) }
}
