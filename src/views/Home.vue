<template>
  <div>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Palmy</ion-title>
        <ion-buttons slot="secondary">
          <router-link tag="ion-button" fill="clear" shape="round" to="register">
            <ion-icon name="person"></ion-icon>
          </router-link>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div>
      <div id="titles">
        <h1>EASY ONLINE TEXT EDITOR</h1>
        <h3>NO LOGIN REQUIRED</h3>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
  }
  div {
    height: 100%;
    width: 100%;
    display: table;
  }
  #titles {
    display: table-cell;
    vertical-align: middle;
    margin: auto;
  }
</style>