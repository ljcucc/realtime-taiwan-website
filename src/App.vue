<script setup>
import { ref, computed } from 'vue';
import HomePage from './components/Home.vue';
import DataPage from './components/Data.vue';
import LicensePage from './components/License.vue';
import PrivacyPage from './components/Privacy.vue';

const routes = {
  '/': HomePage,
  '/license': LicensePage,
  '/data': DataPage,
  '/privacy': PrivacyPage,
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
    <component :is="currentView" />
</template>

<style scoped>
.main{
  padding: 5rem;
  display: flex;
  flex-direction: column;
}

.main > *{
}

.title>*{
  padding-block-end: 24px;
}

h1{
  font-size: 60px;
  margin: 0;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  letter-spacing: -.8px;

  color: #003734;
}

.screenshot{
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* height: 80vmin; */
}

.screenshot > span{
  font-size: 12px;
  color: #6f7977;
}

.img{
  width: 80vw;
  height: 50vw;
  border-radius: 20vmin;
  background: url(./assets/screenshot.png) center / cover;
  /* box-shadow: 0px 4px 18px rgba(0,0,0,.15); */

  transition: box-shadow 0.35s;
}

img:hover{
  /* box-shadow: 0px 0px 40px rgba(0,0,0,.15); */
}

.sections{
  padding: 32px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.sections>*{
  background-color: #fafdfb;
  margin-inline-end: 16px;
}

a{
  cursor: pointer;
  text-decoration:none;
  padding: 8px 16px;
  border-radius: 100px;
  background-color: transparent;
  transition: background-color 0.35s;
  color: #3f4947;
}

a.primary{
  background-color: #cce8e4 !important;
  color: #051f1e;
}

a.primary:hover{
  background-color: hsl(171, 38%, 70%) !important;
}

a:hover{
  background-color: #dae5e2 !important;
}
</style>

