<template>
  <div class="item-list">
    <h3>Lista</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <strong>{{ item.title }}</strong> — {{ item.description }}
        <button @click="$emit('edit', item)">Editar</button>
        <button @click="$emit('delete', item.id)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: { items: { type: Array, default: () => [] } }
}
</script>
