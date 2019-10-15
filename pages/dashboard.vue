<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <button class="btn btn-success" title="Nuevo">
              <i class="fas fa-plus-circle fa-2x"></i>
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-12">
            <table class="table table-striped">
              <thead>
                <tr class="text-light" style="background:#ff8000;">
                  <th>Title</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tag in tags" :key="tag.id">
                  <td>{{ tag.title }}</td>
                  <td>{{ tag.description }}</td>
                  <td>Producto</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button class="btn btn-secondary" title="Editar">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button class="btn btn-danger" title="Eliminar">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  middleware: 'authenticated',
  data() {
    return {
      tags: []
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
