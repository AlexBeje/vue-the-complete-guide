<template>
  <teleport to="body">
    <div v-if="dialogIsVisible">
      <div class="backdrop" @click="closeDialog"></div>
      <dialog open>
        <header>
          <slot name="title">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot />
        </section>
        <menu>
          <slot name="actions">
            <base-button @click="closeDialog">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    dialogIsVisible: {
      type: Boolean,
      default: false,
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: ['closeDialogEvent'],
  methods: {
    closeDialog() {
      this.$emit('closeDialogEvent');
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  margin: 1rem;
}

menu {
  margin: 1rem;
  display: flex;
  justify-content: flex-end;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
