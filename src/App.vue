<!-- Template -->
<template>
  <div id="app" class="app">
    <div class="cabecera">
      <img src='assets/img/mario.png' class="imgMario">
      <h1 class="txtCabecera">Tienda de Juegos 32 bit</h1>
      <h2>Juegos de PC y consolas</h2>
    </div>
    <div class="navBar">
      <b-nav tabs>
        <b-nav-item><router-link :to="{ name: 'Inicio' }" class="linkNav">Inicio</router-link></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'Busqueda' }" class="linkNav">Busqueda</router-link></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'Ventas' }" class="linkNav">Ventas</router-link></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'Inventario' }" class="linkNav">Inventario</router-link></b-nav-item>
      </b-nav>
    </div>
    <router-view class="contenidoPagina"></router-view>
  </div>
</template>

<!-- Script -->
<script>
export default {
  name: "App",
};
</script>

<!-- Estilos-->
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', 'Press Start 2P', sans-serif;
}
.linkNav {
  font-weight: 700;
  font-size: 20px;
  color: rgb(253, 143, 0) ;
}
.cabecera {
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  background-color: rgb(12, 12, 12);
  color: rgb(236, 236, 236);
}
.imgMario {
  width: 50px;
  margin-right: 10px;
  display: flex;
  display: inline-block;
}
.txtCabecera {
  display: inline-block;
  font-family: 'Press Start 2P';
  font-size: 30px;
}
.navBar {
  max-width: 1200px;
  margin: auto;
}
.contenidoPagina {
  max-width: 1200px;
  margin: auto;
}
</style>
