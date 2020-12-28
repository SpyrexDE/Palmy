<template>
  <ion-app>
    <main>
      <transition :name="transitionName" class="fullHeight">
        <router-view/>
      </transition>
    </main>
  </ion-app>
</template>

<script>

import { auth } from './firebase'

export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.page > from.meta.page ? "next" : "prev";
    }
  }
}
</script>

<style>

html,
body,
main {
  height: 100%;
}

body {
  font-family: 'Gothic A1', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  color: gainsboro;
  margin: 0;
  overflow: hidden;
}

ion-header {
  background: #21222C;
}

ion-title {
  font-size: 30px;
}

.fullHeight {
  height: 100%;
}

main {
  min-height: 100%;
  display: grid;
  grid-template: "main";
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #2c3e50;
}

main > * {
  grid-area: main; /* Transition: make sections overlap on same cell */
  flex: 1 1 auto;
  background-color: #2c3e50;
  position: relative;
  height: 100vh; /* To be fixed */
}

main > :first-child {
  z-index: 1; /* Prevent flickering on first frame when transition classes not added yet */
}


/* Transitions */

.next-leave-to {
  animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

.next-enter-to {
  animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-leave-to {
  animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-enter-to {
  animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

@keyframes leaveToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25%);
    filter: brightness(0.5);
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-25%);
    filter: brightness(0.5);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leaveToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
