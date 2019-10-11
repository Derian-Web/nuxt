<template>
  <div>
    <h2 class="text-center">Real news, curated by real humans</h2>
    <p class="text-muted text-center">
      Packed with the trend, news links you need to be smart, ifrmoed,and ahead
      of the curve
    </p>
    <div class="container d-flex">
      <div class="row m-0 ">
        <div class="col-4 ml-5 mr-2 mt-3" v-for="tag in aproved" :key="tag.id">
          <card
            :title="tag.title"
            :description="tag.description"
            :image="tag.image"
          />
        </div>
      </div>
    </div>
    <h2 class="text-center mt-5">Up-and-coming</h2>
    <div class="container d-flex">
      <div class="row m-0 ">
        <div
          class="col-4 ml-5 mr-2 mt-3"
          v-for="tag in notapproved"
          :key="tag.id"
        >
          <vote
            :title="tag.title"
            :description="tag.description"
            :image="tag.image"
          />
        </div>
      </div>
    </div>
    <footer>
      <section class="redes-sociales mt-5">
        <div class="contenedor">
          <a href="" class="twitter"><i class="fab fa-twitter"></i></a>
          <a href="" class="facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="" class="Github"><i class="fab fa-github"></i></a>
          <a href="" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
          <a href="" class="instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
import vote from '~/components/vote.vue'
export default {
  components: {
    Card,
    vote
  },
  data() {
    return {
      aproved: [],
      notapproved: []
    }
  },
  created() {
    this.getTags()
  },
  methods: {
    getTags() {
      const url = 'https://newsletters.academlo.com/api/v1/newsletters'
      axios
        .get(url)
        .then((response) => {
          this.filteraproved(response.data)
          this.filternotapproved(response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    filteraproved(tag) {
      this.aproved = tag.filter(function(tag) {
        return tag.subscribed >= tag.target
      })
    },
    filternotapproved(tag) {
      this.notapproved = tag.filter(function(tag) {
        return tag.subscribed <= tag.target
      })
    }
  }
}
</script>

<style scoped>
footer .redes-sociales {
  background: #ff8000;
  padding: 20px 0;
}
footer .redes-sociales .contenedor {
  display: flex;
  justify-content: center;
}
footer .redes-sociales a {
  color: #fff;
  text-align: center;
  width: 100px;
  display: block;
  padding: 15px 0;
  border-radius: 3px;
  font-size: 30px;
  margin: 0 20px;
}
</style>
