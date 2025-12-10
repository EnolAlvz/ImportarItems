<template>
  <div id="app">
    <header>
      <h1>App Importar Items Enol</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
        |
        <router-link to="/items">Items</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
