<template>
  <div>
    <hr>
    <h3>Edit the User</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cupiditate vero fugit quis vel quaerat voluptas ad consequuntur repudiandae accusantium, provident porro. Labore rerum adipisci omnis, unde voluptate ipsa qui.</p>
    <p>Locale: {{ $route.query.locale }} </p>
    <p>Analytics: {{ $route.query.q }} </p>
    <button class="button primary rounded" @click="confirmed = true">Confirm</button>
    <div id="data">
      <hr>
      <h4>Some Extra Data</h4>
      <p>Some extra data... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam non incidunt quia pariatur voluptate omnis, eaque totam eos nostrum itaque labore sapiente inventore culpa recusandae perspiciatis. Sequi tempora, ipsa.</p>
      <p>Some extra data... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam non incidunt quia pariatur voluptate omnis, eaque totam eos nostrum itaque labore sapiente inventore culpa recusandae perspiciatis. Sequi tempora, ipsa.</p>
      <p>Some extra data... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam non incidunt quia pariatur voluptate omnis, eaque totam eos nostrum itaque labore sapiente inventore culpa recusandae perspiciatis. Sequi tempora, ipsa.</p>
      <p>Some extra data... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam non incidunt quia pariatur voluptate omnis, eaque totam eos nostrum itaque labore sapiente inventore culpa recusandae perspiciatis. Sequi tempora, ipsa.</p>
      <p>Some extra data... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam non incidunt quia pariatur voluptate omnis, eaque totam eos nostrum itaque labore sapiente inventore culpa recusandae perspiciatis. Sequi tempora, ipsa.</p>
      <p>Some extra data... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam non incidunt quia pariatur voluptate omnis, eaque totam eos nostrum itaque labore sapiente inventore culpa recusandae perspiciatis. Sequi tempora, ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum saepe, officia! A, aperiam officia quibusdam veniam dolorem cum accusantium.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed)
        next();  
      else
        if (confirm('Are you sure'))
          next();
        else
          next(false);
    }
  }
</script>
