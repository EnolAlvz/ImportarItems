function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2,8)
}

export default class LocalStorageData {
  constructor(key = 'items') { this.key = key }

  async _read() {
    const raw = localStorage.getItem(this.key)
    return raw ? JSON.parse(raw) : []
  }

  async _write(list) { localStorage.setItem(this.key, JSON.stringify(list)) }

  async getAll() { return await this._read() }

  async add(item) {
    const list = await this._read()
    const newItem = { id: uid(), ...item }
    list.push(newItem)
    await this._write(list)
    return newItem
  }

  async update(item) {
    const list = await this._read()
    const idx = list.findIndex(i => i.id === item.id)
    if (idx !== -1) { list[idx] = { ...list[idx], ...item }; await this._write(list) }
    return item
  }

  async remove(id) {
    let list = await this._read()
    list = list.filter(i => i.id !== id)
    await this._write(list)
  }
}
