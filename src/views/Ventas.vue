<!-- Template -->
<template>
  <div class="ventasPage">
    <h1 class="tituloVentas">Ventas</h1>
      <h5 class="subtituloVentas">Productos Disponibles</h5>
      <ul>
        <li v-for="(producto, clave) in productosConStock" :key="clave">
          <label class="listaProductos">{{ producto.nombre }} | stock: {{ producto.stock }} | precio: ${{ producto.precio }} |</label>
          <input class="btnVenta" type="button" value="Comprar" @click="vender(producto)" />
        </li>
      </ul>
      <hr />
      <p><label class="totalTxt" v-text="totalVentas"></label></p>
      <hr />
    </div>
</template>

<!-- Script -->
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      busquedaPorId: "",
    };
  },
  methods: {
   ...mapActions(['vender']),   
    vender(producto) {
      this.$store.dispatch("vender", producto);
    },
  },
  computed: {
    productosConStock() {
      return this.$store.getters.productosConStock;
    },
    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.busquedaPorId);
    },
    ...mapState({
      totalVentas: (state) => {
        return `Total compra: $${state.totalVentas}`;
      },
    }),
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
.ventasPage {
  max-width: 1200px;
  margin: auto;
  color: rgb(63, 63, 63);
}
.tituloVentas {
  margin-top: 30px;
  font-weight: 600;
}
.subtituloVentas {
  font-weight: 400;
  margin-bottom: 30px;
}
.listaProductos {
  margin-bottom: 20px;
  margin-left: 10px;
}
.btnVenta {
  background-color: rgb(105, 131, 248);
  color: rgb(236, 236, 236);
  border-radius: 5px;
  padding: 2px 10px;
  border-style: inherit;
  margin-left: 10px;
}
.totalTxt {
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
}
</style>