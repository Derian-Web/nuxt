<template>
  <div>
    <div class="card shadow" style="width: 18rem;">
      <div
        style="width: 150px; position: relative; left: 20px;"
        class="ml-5 mt-2"
      >
        <img :src="image" class="card-img-top rounded-circle" alt />
      </div>
      <div class="card-body shadow">
        <h5 class="card-title text-center">{{ title }}</h5>
        <p class="card-text text-center">{{ description }}</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
        </div>
        <a
          @click="modalShow = !modalShow"
          class="btn text-center"
          style="width: 100%; background:#FF8000; color:#fff;"
        >
          Subscribete
        </a>
      </div>
    </div>
    <b-modal v-model="modalShow">
      <div
        style="width: 150px; position: relative; left: 125px;"
        class="ml-5 mt-0"
      >
        <img :src="image" class="card-img-top rounded-circle" alt />
      </div>
      <h5 class="card-title text-center">{{ title }}</h5>
      <p class="card-text text-center" style="min-heigth: 4.5em;">
        {{ description }}
      </p>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" style="background:#fff;">
            <i class="fas fa-envelope" style="color:#FF8000;"></i>
          </span>
        </div>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          placeholder="Your email"
        />
      </div>
      <a
        @click="suscribe"
        class="btn text-center"
        style="width: 100%; background:#FF8000; color:#fff;"
      >
        Subscribete
      </a>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['title', 'description', 'image'],
  data() {
    return {
      modalShow: false,
      form: {
        email: '',
        newsletter_id: 2
      }
    }
  },
  methods: {
    suscribe() {
      const url = 'https://newsletters.academlo.com/api/v1/users'
      axios
        .post(url, this.form)
        .then((response) => {
          console.log(response.data)
          alert('Se registró exitosamente')
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    }
  }
}
</script>

<style scoped>
p {
  min-height: 6em;
}
</style>
