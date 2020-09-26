<!-- Template -->
<template>
  <div class="totalPage">
    <h1 class="tituloTotal">Inventario</h1>
    <b-table striped hover :items="juguetes"></b-table>
  </div>
</template>

<!-- Script -->
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["juguetes"]),
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
.totalPage {
  max-width: 1200px;
  margin: auto;
  color: rgb(63, 63, 63);
}
.tituloTotal {
  margin-top: 30px;
  font-weight: 600;
}
</style>
