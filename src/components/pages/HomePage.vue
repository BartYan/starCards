<template>
  <section class="home">
    <div class="home__container">
      <h1 class="home__container-head">STAR CARDS</h1>
      <h3 class="home__container-subhead">"May the Force..."</h3>
      <!-- <p class="home__container-txt">A special edition of trading cards for fans of Star Wars</p> -->
      <p class="home__container-txt">
        Discover a brand new series of trading cards for Star Wars fans!
      </p>
    </div>
    <div class="home__cards">
      <div class="cards__box-items">
        <item-result
          name="Darth Vader"
          height="202"
          mass="136"
          birth="41.9BBY"
          gender="male"
        ></item-result>
      </div>
    </div>
  </section>
</template>

<script>
import ItemResult from'../items/ItemResult.vue';
export default {
  name: 'HomePage',
  components: {
    ItemResult,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .home {
    &__container {
      color: #fff;
      text-align: left;
      @media screen and (max-width: 1024px) {
          text-align: center;
      }

      &-head {
        font-size: 5rem;
        @media screen and (max-width: 767px) {
          font-size: 3rem;
        }
      }
      &-subhead {
        font-size: 2rem;
        margin: 2rem 0;
      }
      &-txt {
        font-size: 1.5rem;
        width: 50%;
        margin: 1rem 0;
        @media screen and (max-width: 1024px) {
           margin: 2rem auto;
        }
      }
    }
    &__cards {
      width: 50%;
      height: fit-content;
      max-width: 500px;
      padding: 5rem;
      border-radius: 12px;
      background-color: #f7f7f7;
      -webkit-box-shadow: 0px 0px 30px -10px rgb(253, 52, 96);
      -moz-box-shadow: 0px 0px 30px -10px rgb(253, 52, 96);
      box-shadow: 0px 0px 30px -10px rgb(253, 52, 96);
      display: flex;
      justify-content: center;
    }
    .cards__box-items {
    animation: levitate 5s infinite;
    } 
    @keyframes levitate {
    0% {transform: translatey(0px);}	
    50% {transform: translatey(-10px);}
    100% {transform: translatey(0px);}
  }
  
  
}
</style>
