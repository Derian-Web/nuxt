<template>
  <div>
    <nav class="navbar navbar-light">
      <nuxt-link id="naranja1" class="navbar-brand" to="/">
        [ INSIDE ]
      </nuxt-link>
      <form class="form-inline">
        <a href class="mr-4 Narnjaicon">
          <i class="fas fa-search"></i>
        </a>
        <nuxt-link to="/login" class="mr-4 Narnjaicon">
          <i class="fas fa-user"></i>
        </nuxt-link>
        <button
          class="btn btn-outline-success my-2 my-sm-0 boton-color"
          type="submit"
        >
          SPONSORSHIP
        </button>
      </form>
    </nav>
    <div class="ml-4">
      <ul class="nav nav-pills">
        <li v-for="tag in tags" id="color" :key="tag.id" class="nav-item">
          <nuxt-link class="nav-link" :to="'/category/' + tag.slug">
            {{ tag.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <hr class="mt-0" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tags: {
        tags: []
      }
    }
  },
  created() {
    this.getTags()
  },
  methods: {
    getTags() {
      const url = 'https://newsletters.academlo.com/api/v1/tags'
      axios
        .get(url)
        .then((response) => {
          this.tags = response.data
          console.log(this.tags)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
}
</script>

<style scoped>
body {
  background: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
}
#naranja1 {
  color: #ff8000;
  font-weight: 600;
  font-size: 30px;
}

.Narnjaicon {
  color: #ff8000;
  font-size: 2rem;
}
.boton-color {
  color: #ff8000;
  border: solid 2px #ff8000;
}
#color a {
  color: #707b7c;
}
#color a:hover {
  background: #e5e7e9;
}
</style>
