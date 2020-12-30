<template>
  <div>
    <ion-content>
        <div id="outer">
          <div id="titles">
            <h1>THE OPEN SOURCE SOCIAL MEDIA</h1>
            <h3 class="scramble">NO LOGIN REQUIRED</h3>
          </div>
        </div>
    </ion-content>
  </div>
</template>

<script>
import { textScramble } from '../js/textScramble.js'

export default {
  name: "HomePage",
  mixins: [textScramble],
  mounted() {
    this.startScramble(
      [
          'No registration',
          '100% free',
          'Share your thoughts',
          'Share your code',
          'Get famous',
          'Easy to use',
          'Easy to master',
          'Open Source',
          'Just for fun',
          'Try it out!'
      ]
    )
  },
};
</script>

<style scoped>
  h1 {
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
  }
  #titles {
    display: table-cell;
    vertical-align: middle;
    margin: auto;
  }
  #outer {
    min-height: 300px;
    height: 60%;
  }
  .scramble {
    height: 25px;
  }
</style>