<template>
  <div class="container mt-5">
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Email address:">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Submit</b-button>
    </b-form>
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
