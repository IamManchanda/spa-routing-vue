<template>
  <div>
    <hr>
    <h3>Welcome User {{ $route.params.id }}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus eligendi, deleniti libero quibusdam reiciendis illum, illo, praesentium saepe vel autem animi molestias corporis dolor consequatur soluta. Harum, adipisci quasi!</p>
    <router-link tag="button" class="button primary rounded" :to="link">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: { 
          name: 'AppUserEdit', 
          params: { 
            id: this.$route.params.id 
          }, 
          query: { 
            locale: 'en', 
            q: 100 
          },
          hash: '#data' 
        }
      };
    },
    beforeRouteEnter(to, from, next) { 
      if(true) {
        next();
      } else {
        next(false);
      }
    }
  };
</script>