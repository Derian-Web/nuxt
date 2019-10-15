<template>
  <div>
    <div class="shadow px-2 py-4 mb-5">
      <div class="">
        <div class="d-flex">
          <div
            class="overflow-hidden shadow rounded-circle mx-2 my-3"
            style="width:100%; height:100%;"
          >
            <img class="" :src="image" alt="" width="100%" />
          </div>
          <div class="col-8">
            <h4 class="pt-2">
              {{ title }}
            </h4>
            <p class="text-muted">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <input
          value="Vote"
          class="btn btn-block btn-light text-muted text-left pl-5 py-2 border rounded"
          type="button"
          style="background:#fff;"
        />
        <i
          class="position-absolute fas fa-envelope "
          style="top: 0.8rem; left: 1.5rem; bottom:0; color:#ff8000;"
        >
        </i>
        <i
          class="position-absolute text-black-50 fas fa-chevron-right"
          style="top: 0.8rem; right: 1.5rem; bottom:0;"
        >
        </i>
      </div>
      <b-progress :value="subscribed" :max="target" class="mt-3"></b-progress>
      <div class="d-flex justify-content-between">
        <p class="mb-0 ml-3">
          <i
            class="fas fa-heart mt-2"
            style="color:#ff8000; font-size:20px;"
          ></i>
        </p>
        <p class="mb-0 mr-3">
          <i
            class="fas fa-bullseye mt-2"
            style="color:#ff8000; font-size:20px;"
          ></i>
        </p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="text-muted mb-0">SUBSCRIBED</p>
        <p class="text-muted mb-0">TARGET</p>
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
        Vote
      </a>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  props: ['title', 'description', 'image', 'subscribed', 'target'],
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
          swal({
            title: 'Good job!',
            text: 'subscribed successfully',
            icon: 'success'
          })
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    }
  }
}
</script>

<style scoped>
.posicio-texto {
  position: relative;
  left: 105px;
  top: -120px;
}

.position-vot {
  position: relative;
  top: -100px;
}
</style>
