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

* {
  color:azure;
  -webkit-tap-highlight-color: transparent;
}

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
}

ion-header {
  background: #21222C;
}

ion-title {
  font-size: 30px;
  background: -webkit-linear-gradient(rgb(255, 255, 255), rgb(168, 168, 168));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

ion-button {
	z-index: 100;
}


ion-card, ion-list, ion-item {
    --background: #21222C !important;
    background: #21222C !important;
}

.fullHeight {
  height: 100%;
}

.centerAll{
  margin: 0;
  position: absolute;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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


div {
  height: 100%;
  width: 100%;
  display: table;
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
