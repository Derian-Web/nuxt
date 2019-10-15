<template>
  <div>
    <div class="modal-dialog text-center">
      <div class="col-sm-8 main-section">
        <div class="modal-content">
          <div class="col-12 user-img">
            <img src="/user.png" />
          </div>
          <form class="col-12" @submit.prevent="onSubmit">
            <div class="form-group" id="contrasena-group">
              <input
                type="email"
                class="form-control"
                placeholder="emaill"
                v-model="form.email"
                required
              />
            </div>
            <div class="form-group" id="contrasena-group">
              <input
                type="password"
                class="form-control"
                placeholder="Contrasena"
                v-model="form.password"
              />
            </div>
            <button type="submit" class="btn color">
              <i class="fas fa-sign-in-alt"></i>
              Ingresar
            </button>
          </form>
          <div class="col-12 forgot">
            <a href="#">Recordar contrasena?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    onSubmit() {
      const endPoint = 'https://newsletters.academlo.com/api/v1/auth/login'
      axios
        .post(endPoint, this.form)
        .then((response) => {
          // asignamos la respuesta de la api ala constante user
          const user = response.data
          // mandamos a llamar el metodo login que fue mapeado
          this.login(user)
          this.$router.push('/dashboard')
        })
        .catch((error) => {
          if (error.response.status === 401) {
            alert('no existe el usuario en la base de datos')
          } else if (error.response.status === 422) {
            alert('no estoy enviando buen la informacion')
          } else {
            alert('tuvimos un error desconocido')
          }
        })
    }
  }
}
</script>

<style scoped>
body {
  background: url('https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=671&q=80');
  background-size: cover;
}
.main-section {
  margin: 0 auto;
  margin-top: 25%;
  padding: 0;
}
.modal-content {
  background-color: #fff;
  opacity: 0.85;
  padding: 0 20px;
  box-shadow: 0px 0px 3px #848484;
}
.user-img {
  margin-top: -50px;
  margin-bottom: 35px;
}
.user-img img {
  width: 100xp;
  height: 100px;
  box-shadow: 0px 0px 3px #848484;
  border-radius: 50%;
}
.form-group input {
  height: 42px;
  font-size: 18px;
  border: 0;
  padding-left: 54px;
  border-radius: 5px;
}
.form-group::before {
  font-family: 'Font Awesome\ 5 Free';
  position: absolute;
  left: 28px;
  font-size: 22px;
  padding-top: 4px;
}
.form-group#user-group::before {
  content: '\f007';
}
.form-group#contrasena-group::before {
  content: '\f023';
}
button {
  width: 60%;
  margin: 5px 0 25px;
}
.forgot {
  padding: 5px 0;
}
.forgot a {
  color: white;
}
.color {
  background: #ff8000;
  color: #fff;
}
</style>
