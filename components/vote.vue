<template>
  <div>
    <div class="card shadow" style="width: 18rem;">
      <div
        style="width: 100px; position: relative; left: -35px;"
        class="ml-5 mt-2"
      >
        <img :src="image" class="card-img-top rounded-circle" />
      </div>
      <div class="card-body shadow">
        <div class="posicio-texto">
          <h5 class="card-title text-left">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
        </div>
        <a
          @click="modalShow = !modalShow"
          class="btn text-center"
          style="width: 100%; background:#FF8000; color:#fff; cursor: pointer;"
        >
          Vote
        </a>
      </div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'image']
}
</script>

<style scoped>
.posicio-texto {
  position: relative;
  left: 105px;
  top: -120px;
}
</style>
