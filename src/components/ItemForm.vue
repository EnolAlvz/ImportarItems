<template>
  <form @submit.prevent="save">
    <h3>{{ editItem ? 'Editar' : 'Nuevo' }} Item</h3>
    <label>
      Título
      <input v-model="model.title" required />
    </label>
    <label>
      Descripción
      <input v-model="model.description" />
    </label>
    <div class="actions">
      <button type="submit">Guardar</button>
      <button type="button" v-if="editItem" @click="$emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>

<script>
import DataFactory from '../factories/DataFactory'

export default {
  name: 'ItemForm',
  props: { editItem: { default: null } },
  data() {
    return {
      ds: DataFactory.create('local'),
      model: { id: null, title: '', description: '' }
    }
  },
  watch: {
    editItem: {
      handler(v) { this.model = v ? { ...v } : { id: null, title: '', description: '' } },
      immediate: true
    }
  },
  methods: {
    async save() {
      if (this.model.id) await this.ds.update(this.model)
      else await this.ds.add(this.model)
      this.$emit('saved')
      this.model = { id: null, title: '', description: '' }
    }
  }
}
</script>
