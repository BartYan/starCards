<template>
  <section class="collection">
    <div class="collection__infoBox">
      <h2 class="collection__infoBox-head">STAR CARDS COLLECTION</h2>
      <p class="collection__infoBox-text">Here is some Rare Cards for you!</p>
    </div>

      <!-- cards loop -->
    <div class="collection__cards">
      <button @click="load" class="collection__btn">explore all</button>
      <button 
        class="collection__btn" 
        v-for="filter in filters"
        :key="filter"
        @click="() => filterPeople(filter)"> 
          {{filter}}
      </button>
      <cards-box>
        <p class="message" v-if="isLoading">A long time ago in a galaxy far, far away..</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <p class="message" v-else-if="!isLoading && (!results || results.length === 0)"
        >Lost in space</p>
        <div class="cards__box-items" v-else>
          <item-result
            v-for="result in results"
            :key="result.birth"
            :name="result.name"
            :height="result.height"
            :mass="result.mass"
            :birth="result.birth"
            :gender="result.gender"
          ></item-result>
        </div>
      </cards-box>
    </div>

  </section>

  
</template>

<script>
import ItemResult from'../items/ItemResult.vue';
import CardsBox from '../ui/CardsBox.vue';

const filters = [
  "male",
  "female",
  "n/a"
]

export default {
  name: 'CollectionPage',
  components: {
    ItemResult,
    CardsBox
  },
  data() {
      return {
        results: [],
        resultsGenre: [],
        isLoading: false,
        error: null,
        // movies: [],
        filters,
      }
  },
  methods: {
    load() {
      this.isLoading = true;
      this.error = null;
      fetch('https://swapi.dev/api/people/?format=json')
      .then(response=>response.json())
      .then(data=>{
        // console.log(data.results);
        this.isLoading = false;
         const results = [];
        //  const movies = [];
         for (const index in data.results) {

            // movies table with objects
            // Promise.all(data.results[index].films.map(url => fetch(url)))
            // .then(resp => Promise.all( resp.map(r => r.json()) ))
            // .then(result => {
            //   movies.push(result)
            //   this.movies = movies;
            // });            
           
            results.push({
              name: data.results[index].name,
              height: data.results[index].height,
              mass: data.results[index].mass,
              birth: data.results[index].birth_year,
              gender: data.results[index].gender,
            });
          }
          this.results = results;
          this.resultsGenre = results;
          
          // console.log(this.movies);
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Data was lost in space';
      });
    },
    filterPeople(catName) {
      // update results
      this.results = this.resultsGenre;
      // set new results array
      this.results = this.results.filter((item) => {
        return item.gender === catName;
      })
    }
  },
  mounted() {
    this.load();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .collection {
    flex-direction: column;
    justify-content: center;
    width:80%;

    &__btn {
      font-size: 1rem;
      background: none;
      border: 1px solid rgb(114, 114, 114);
      padding: 7px 14px;
      margin: 0.5rem;
      border-radius: 12px;
      transition: all .1s ease-in-out;
    }
    &__btn:hover {
      -webkit-box-shadow: 0px 0px 20px -10px rgb(134, 134, 134);
      -moz-box-shadow: 0px 0px 20px -10px rgb(134, 134, 134);
      box-shadow: 0px 0px 20px -10px rgba(134, 134, 134);
      cursor: pointer;
      transform: scale(1.01);
    }

    &__infoBox {
      color: #fff;
      &-head {
        font-size: 3rem;
        @media screen and (max-width: 767px) {
          font-size: 2rem;
        }
      }
      &-text {
        margin: 1rem auto;
        font-size: 2rem;
        @media screen and (max-width: 767px) {
          font-size: 1rem;
        }
      }
    }
    &__cards {
      width: 100%;
      height: fit-content; 
      min-height: 200px;     
      padding: 2rem 5rem;
      margin-bottom: 2rem;
      border-radius: 12px;
      background-color: #f7f7f7;
      -webkit-box-shadow: 0px 0px 30px -10px rgba(135, 255, 129, 1);
      -moz-box-shadow: 0px 0px 30px -10px rgba(135, 255, 129, 1);
      box-shadow: 0px 0px 30px -10px rgba(135, 255, 129, 1);
      
      @media screen and (max-width: 767px) {
          padding: 1rem;
      }
    }
    .cards__box-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 2rem auto;
      width: fit-content;
    }
    .message {
      margin: 2rem auto;
      font-size: 2rem;
    }
  }
</style>
