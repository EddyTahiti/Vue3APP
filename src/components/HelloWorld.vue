<script setup lang="ts">
export interface Props{
  msg?:String,

}

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>


  </div>
  <svg class="line" width="800" height="800" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" x2="600" y1="110" y2="110" stroke="orange"
          fill="transparent" stroke-width="8" />
  </svg>
  <svg width="180" height="50" version="1.1"
       xmlns="http://www.w3.org/2000/svg">
    <path id="pathSecond" fill="none" stroke="rgba(0,0,0,0.8)"
          stroke-width="2px"
          d="M73.73,24.5c0,0,2.78-21.26-23.75-16.46
              c0,0-11.12-12.63-25.01-5.81c0,0-11.12,4.8-8.84,16.67
 c0,0-13.81-2.27-16.13,13.39c0,0-3.07,10.67,10.32,16.71h180.02" />
  </svg>
</template>

<style scoped>
.line{
  animation: move1 3s alternate  infinite linear forwards;
}
@keyframes move1{
  from{
    stroke-dasharray: 0 800px;
    /*transform: translateX(-100%);*/
  }
  to{
    stroke-dasharray: 800px 0;
    /*transform: translateX(0);*/
  }
}

#pathSecond {
  stroke-dashoffset: 0;
  animation: move 3s infinite  linear;
}
@keyframes move {
  0%{
    stroke-dasharray: 0, 600px;
    opacity: 1;
    stroke-width: 3px
  }
  100%{
    stroke-dasharray: 600px, 0;
    opacity: 0;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
