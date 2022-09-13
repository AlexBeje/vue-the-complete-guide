// We can define functions outside the Vue app and use them inside the Vue app
//
// function getRandomValue(min, max) {
//   Math.floor(Math.random() * (max - min)) + min
// }

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    attackMonster() {
      // Calculate a random number between 5 and 12 (use the function outside the vue app)
      //
      // const attackValue = getRandomValue(5, 12);
      const attackValue = this.getRandomValue(5, 12);
      // this.monsterHealth = this.monsterHealth - attackValue;
      this.monsterHealth = this.isAttackValueGreaterThanHealth(
        attackValue,
        this.monsterHealth
      );
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = this.getRandomValue(8, 15);

      this.playerHealth = this.isAttackValueGreaterThanHealth(
        attackValue,
        this.playerHealth
      );
    },
    isAttackValueGreaterThanHealth(attackValue, health) {
      // If the attack value is greater than the health returns 0 else returns the remaining health
      return attackValue >= health ? 0 : (health -= attackValue);
    },
  },
}).mount("#game");
