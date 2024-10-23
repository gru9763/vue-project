
<template>
  <div>
    <p v-text="message"></p>
    <p v-html="htmlContent"></p>

    <img v-bind:src="imageUrl" alt="Image" />
    <div v-bind:class="{ active: isActive }"></div>
    <p v-bind:style="{ color: 'red', fontSize: '24px' }"></p>

    <button v-on:click="handleClick">Click me</button>
    <input type="text" v-bind="name" />

    <p v-if="showParagraph">
      This paragraph will only appear if showParagraph is true.
    </p>
    <p v-else-if="condition2">Condition 2</p>
    <p v-else>Default</p>
    <p v-show="isVisible">This paragraph's visibility will be toggled.</p>

    <input type="text" v-model="message" />
    <!-- <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul> -->

    <component-a v-if="showComponentA"></component-a>
    <component-b v-else></component-b>

    <p v-pre>{{ message }}</p>
    <p v-cloak>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      htmlContent: `<div> <h1> Never give up </h1><span>Sky is the limit</span> </div>`,
      imageUrl: "https://images.app.goo.gl/ThcwYqYkRWKiS8Mh8",
      isActive: true,
      name: "Hello, World!",
      showParagraph: true,
      condition2: false,
      isVisible: true,
      items: ["Item 1", "Item 2", "Item 3"],
      showComponentA: true,
    };
  },
  methods: {
    handleClick() {
      alert("Button clicked!");
    },
  },
};
</script>
