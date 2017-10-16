<template>
  <div>
    <h1 class="h2 separator-left">Timeline</h1>
    <br>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero voluptatem.
    </p>
    <button class="button primary rounded" @click="navigateToHome">Go to home</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToHome() {
        this.$router.push({
          name: 'AppHome'
        });
      }
    }
  }
</script>