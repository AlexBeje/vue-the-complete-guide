<template>
  <ul>
    <!-- <li :class="{ active: activeOption === 'poor' }" @click="activate('poor')"> -->
    <li :class="{ active: modelValue === 'poor' }" @click="activate('poor')">
      Poor
    </li>
    <li
      :class="{ active: modelValue === 'avarage' }"
      @click="activate('avarage')"
    >
      Average
    </li>
    <li
      :class="{ active: modelValue === 'great' }"
      @click="activate('great')"
    >
      Great
    </li>
  </ul>
</template>

<script>
export default {
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   }
  // },
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style>
.active {
  border-color: purple;
  color: purple;
}

ul {
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
