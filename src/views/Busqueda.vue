<!-- Template -->
<template>
  <div class="busquedaPage">
    <h1 class="tituloBusqueda">Búsqueda de productos disponibles</h1>
    <h5 class="subtituloBusqueda">Ingresa el nombre del producto que buscas (usa letras minúsculas)</h5>
    <input class="inputBusqueda" type="text" v-model="producto" />
    <ul v-if="check">
      <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
        <label class="resultadoBusqueda">nombre: {{ producto.nombre }} | stock:{{ producto.stock }} | precio: ${{ producto.precio }}</label>
      </li>
    </ul>
  </div>
</template>

<!-- Script -->
<script>
export default {
  name: "Busqueda",
  data() {
    return {
      producto: "",
    };
  },
  computed: {
    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.producto);
    },
    check() {
      return this.productoDisponiblePorId.length > 0 && this.producto !== "";
    },
  },
};
</script>

<!-- Estilos-->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.busquedaPage {
  max-width: 1200px;
  margin: auto;
  color: rgb(63, 63, 63);
}
.tituloBusqueda {
  margin-top: 30px;
  font-weight: 600;
}
.subtituloBusqueda {
  font-weight: 400;
}
.inputBusqueda {
  margin-top: 30px;
  margin-bottom: 30px;
}
.resultadoBusqueda {
  margin-top: 20px;
  font-weight: 400;
  color: rgba(61, 63, 219, 0.904);
}
</style>
