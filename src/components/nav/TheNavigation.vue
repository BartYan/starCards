<template>
  <header>
    <nav>
      <p class="logo">STAR CARDS</p>
      <ul class="menu">
        <li class="menu__link">
          <router-link to="/home">home</router-link>
        </li>
        <li>
          <router-link to="/collection">collection</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #f7f7f7;
  z-index: 100;
}

nav {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
   flex-direction: column;
  }
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 2rem
}
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    margin: 0 1rem;
  }
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: #000;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: #f8444a;
  /* border-color: #f1a80a;
  background-color: #1a037e; */
}
</style>