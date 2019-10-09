<template>
  <div>
    <div class="card" style="width: 18rem; border:none;">
      <div
        style="width: 100px; position: relative; left: -35px;"
        class="ml-5 mt-2"
      >
        <img :src="image" class="card-img-top rounded-circle" />
      </div>
      <div class="card-body">
        <div class="posicio-texto">
          <h5 class="card-title text-left">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
        </div>
        <a
          @click="modalShow = !modalShow"
          class="btn text-center position-vot border border-munted"
          style="width: 350px; background:#fff; color:#FF8000; cursor: pointer;"
        >
          <i class="fas fa-envelope" style="color:#FF8000;"></i>
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

.position-vot {
  position: relative;
  top: -100px;
}
</style>
