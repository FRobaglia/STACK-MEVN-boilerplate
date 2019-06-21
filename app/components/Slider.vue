<template>
<div>
  <ul ref="slider"> 
    <SliderItem @mouseover.native="playAudio(people)" @mouseleave.native="pauseAudio(people)" v-for="people in peoples" v-bind:people="people" :key="people.name" >
    </SliderItem>    
  </ul>
  <div 
    @mouseover="hover.right = true; slideRight()"
    @mouseleave="hover.right = false"
    class="slide slide-right"> 
    </div>
    <div 
    @mouseover="hover.left = true; slideLeft()"
    @mouseleave="hover.left = false"
    class="slide slide-left"> 
    </div>
</div>
</template>

<style scoped>

ul {
  display: inline-flex;
  height: 100vh;
}

.slide {
  cursor: e-resize;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100px;
  background-color: transparent;

}
.slide.slide-left {
  left: 0;
}

.slide.slide-right {
  right: 0;
}

</style>

<script>

import data from '../data.js'
import SliderItem from './SliderItem.vue';

export default {
  data() {
    return {
      translate: 0,
      hover: {
        left: false,
        right: false
      },
      peoples: data.peoples,
    };
  },
  mounted() {
    // let data = fetch api
    // this.data = data
  },
  methods: {
    slideRight() {
      let itemWidth = window.innerWidth / 4;
      let itemNumber = this.peoples.length;
      let maxTranslate = -(itemNumber - 4) * itemWidth + 1;
      if (this.hover.right && this.translate > maxTranslate) {
        this.translate -= 8;
        this.$refs.slider.style.transform = `translateX(${this.translate}px)`
        setTimeout(this.slideRight, 20)
      }
    },
    slideLeft() {
      if (this.hover.left && this.translate < 0) {
        this.translate += 8;
        this.$refs.slider.style.transform = `translateX(${this.translate}px)`
        setTimeout(this.slideLeft, 20)
      }
    },
    playAudio(people) {
      let audio = document.getElementById(people.name);
      audio.currentTime = 0;
      audio.play();
    },
    pauseAudio(people) {
      let audio = document.getElementById(people.name);
      audio.pause();
    }
  },
  components: {
    SliderItem
  }
};
</script>
