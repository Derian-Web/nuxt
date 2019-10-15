<template>
  <div>
    <div class="card">
      <div class="card-body">
        <img :src="image" class="img-fluid rounded-circle w-50 mb-3" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="position-relative">
          <input
            @click="modalShow = !modalShow"
            value="Suscribe"
            class="btn btn-block btn-light text-muted text-left pl-5 py-2 border rounded "
            type="button"
            style="background:#fff;"
          />
          <i
            class="position-absolute fas fa-envelope"
            style="top: 0.8rem; left: 1.5rem; bottom:0; color:#ff8000;"
          >
          </i>
          <i
            class="position-absolute text-black-50 fas fa-chevron-right"
            style="top: 0.8rem; right: 1.5rem; bottom:0;"
          >
          </i>
        </div>
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
import swal from 'sweetalert'
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');

body {
  font-family: 'Open Sans';
}
p {
  min-height: 3em;
  color: #9e9e9e;
}
h3 {
  color: #333;
  font-weight: bold;
  min-height: 2em;
}
#team img {
  margin-top: -50px;
}
#team p {
  font-weight: 500;
}
#team .card {
  border-radius: 0;
  box-shadow: 5px 5px 10px #9e9e9e;
  transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
}
#team .card:hover {
  background: #ff8000;
  color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 10px;
}
#team .card:hover h3,
#team .card:hover p {
  color: #fff;
}
</style>
