<template>
  <div class="card">
    <h5 class="card__title">
      {{ name }}
      <!-- <span :class="headClass">{{ name }}</span>. -->
    </h5>
    <img class="card__img" src="../../assets/cardsPhotos/2.jpg" alt="card placeholder">
    <!-- <img class="card__img" :src="randomImg ()" alt="card placeholder"> -->
    <div class="card__infos">

      <div class="card__mid">
        <p class="card__prop">gender: {{ gender }}</p> 
        <p class="card__prop">Did you know that
        <br> about <strong>{{ name }}</strong>?
      </p>
      </div>
      <div class="card__btm">
          <p class="card__prop">{{ height }}<br/><span>height</span></p> 
          <p class="card__prop">{{ mass }}<br/><span>mass</span></p> 
          <p class="card__prop">{{ birth }}<br/><span>birth</span></p> 
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemResult',
  props: ['name', 'height', 'mass', 'birth', 'gender'],
  data() {
    return {
      // if you want random image for all cards 
      // imgPlaceHolders: [
      // '../../assets/cardsPhotos/1.jpg',
      // '../../assets/cardsPhotos/2.jpg',
      // '../../assets/cardsPhotos/3.jpg'
      // ],
    };
  },
  computed: {
    headClass() {
      return 'highlight rating--' + this.name;
    },
  },
  // if you want random image for all cards
  // methods: {
  //   randomImg () {
  //     return imgPlaceHolders[Math.floor(Math.random()*imgPlaceHolders.length)];
  //   }
  // },
};
</script>

<style lang="scss">
  $mainColor: #f8444a;
  .card {
    position:relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 1rem;
    border-radius: 12px;
    -webkit-box-shadow: 0px 0px 30px -10px rgba(135, 255, 129, 1);
    -moz-box-shadow: 0px 0px 30px -10px rgba(135, 255, 129, 1);
    box-shadow: 0px 0px 30px -10px rgba(135, 255, 129, 1);
    transition: all .4s ease-in-out;
    @media screen and (max-width: 767px) {
      width: 250px;
      margin: 1rem auto;
    }
    @media screen and (max-width: 300px) {
      width: 200px;
    }
    &__title {
      position: absolute;
      width:100%;
      text-align: center;
      top: 30px;
      font-size:2rem;
      margin: 10px auto;
      color: #f7f7f7;
    }
    &__img {
      width:auto;
      height: 200px;
      border-radius: 10px 10px 0 0 ;
    }
    &__infos {
      width: 100%;
      text-align: left;
      background: #f7f7f7;
      border-radius: 0 0 10px 10px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__prop {
      display: block;
      margin: 0 0 5px 10px;
      color: #fff;
      font-weight: 600;
      text-align: center;
      font-size: 1.2rem;
      span {
        font-size: 1rem;
        font-weight: 300;
      }
    }
    &__mid {
      .card__prop:nth-child(1) {
        font-size: 14px;
        margin: 10px auto;
        color: $mainColor;
      }
      .card__prop:nth-child(2) {
        font-size: 1rem;
        margin: 1rem auto 1.5rem;
        font-weight: 400;
        color: rgb(29, 29, 29);
      }
    }
    &__btm {
      width: 100%;
      display: flex;
      border-radius:10px 10px;
      .card__prop {
        color: #fff;
        background: $mainColor;
        margin: 0;
        padding: 5px;
        width:33.33%;
      }
      .card__prop:nth-child(1) {
        border-radius: 0 0 0 10px;
      }
      .card__prop:nth-child(2) {
        border-left: 1px solid #f7f7f7;
        border-right: 1px solid #f7f7f7;
      }
      .card__prop:nth-child(3) {
        border-radius: 0 0 10px 0;
      }
    }
    
  }
  .card:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 80px -10px rgb(255, 158, 129);
    -moz-box-shadow: 0px 0px 80px -10px rgba(255, 158, 129);
    box-shadow: 0px 0px 80px -10px rgba(255, 158, 129);
    cursor: pointer;
  }
</style>