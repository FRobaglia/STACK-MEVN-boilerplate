<template>
  <li @mouseover="hover()">
    <audio :ref="people.name" :id="people.name" >
      <source :src="people.sample"> </source>
    Votre navigateur ne supporte pas la balise <code>audio</code>, essayez avec Google Chrome ou Firefox.
    </audio>
    <h2> {{ people.name }} </h2>
    <h3> {{ people.age }} </h3>
  <!-- <av-circle
      canv-class="circle"
      :ref-link="people.name"
      :outline-width="0"
      :progress="false"
      :bar-color="['#000']"
      :bar-length="20"
      :line-space="1"
      :playtime="false"
      :audio-controls="false"
      playtime-font="18px Monaco"
    ></av-circle> -->

          <av-line
      canv-class="audio"
      :line-width="1"
      :line-color="['rgba(0,0,0, 0.5)']"
      :ref-link="people.name"
      :audio-controls="false"
    ></av-line>

  </li>
</template>


<style lang='scss'>  
  h2,h3 {
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    color: white;
    font-weight: bold;
  }
  li:nth-child(odd) {
    background-color: grey;
  }
  li:nth-child(even) {
    background-color: black;
  } 
  h2 {
    bottom: 26%;
    font-size: 40px;
  }
  h3 {
    bottom: 20%;
    font-size: 32px;
  }
  li {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 25vw;

    .audio {
    opacity: 0;
    margin: 10px;
    width: 90%;
    }

    &:hover {
      background-color: orange;

      & .audio {
        opacity: 1;
      }
    }
  }

</style>


<script>

export default {
  props: ["people"],
  methods: {
    hover() {
    }
  }
};

</script>