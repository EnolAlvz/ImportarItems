<template>
  <section>
    <h2>Gestión de Items</h2>
    <item-form @saved="reload" :edit-item="editing" @cancel="cancelEdit" />
    <item-list :items="items" @edit="startEdit" @delete="removeItem" />
  </section>
</template>

<script>
import ItemList from '../components/ItemList.vue'
import ItemForm from '../components/ItemForm.vue'
import DataFactory from '../factories/DataFactory'

export default {
  name: 'Items',
  components: { ItemList, ItemForm },
  data() {
    return {
      ds: null,
      items: [],
      editing: null
    }
  },
  async created() {
    // Crear la fábrica: 'local' usa LocalStorage, 'json' simula JSON
    this.ds = DataFactory.create('local')
    this.items = await this.ds.getAll()
  },
  methods: {
    async reload() { this.items = await this.ds.getAll(); this.editing = null },
    startEdit(item) { this.editing = item },
    cancelEdit() { this.editing = null },
    async removeItem(id) { await this.ds.remove(id); this.reload() }
  }
}
</script>
