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
