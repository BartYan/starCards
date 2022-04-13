<template>
  <the-navigation></the-navigation>
  <!-- <HomePage msg="Welcome"/> -->

  <main>
    <router-view></router-view>
  </main>
  <div class="overlay"></div>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  position: relative;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  
}
#app {
  background: url('./assets/space.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  min-height: 100vh;
}
main {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

section {
    width: 80%;
    height: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 10rem;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
}

/* @font-face {
    font-family: obviously_wide_regular;
    src: url('../fonts/font_obviously_wide_regular/Obviously-Wide.woff') format('woff'),
    url('../fonts/font_obviously_wide_regular/Obviously-Wide.woff2') format('woff');
} */
</style>
