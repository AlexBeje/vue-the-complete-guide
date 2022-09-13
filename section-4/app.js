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
      specialAttackUsed: false,
      specialAttackColdown: 0,
    };
  },
  computed: {
    specialAttackIsAvailable() {
      return this.specialAttackColdown === 0;
    },
    gameEnd() {
      return this.monsterHealth <= 0 || this.playerHealth <= 0;
    },
  },
  methods: {
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    getHealthByAttackValue(attackValue, health) {
      // If the attack value is greater than the health returns 0 else returns the remaining health
      return attackValue >= health ? 0 : (health -= attackValue);
    },
    attackMonster() {
      if (this.gameEnd) {
        return;
      }

      this.currentRound++;
      // Calculate a random number between 5 and 12 (use the function outside the vue app)
      //
      // const attackValue = getRandomValue(5, 12);
      const attackValue = this.getRandomValue(5, 12);
      // this.monsterHealth = this.monsterHealth - attackValue;
      this.monsterHealth = this.getHealthByAttackValue(
        attackValue,
        this.monsterHealth
      );
      this.attackPlayer();
      this.specialAttackHandler();
    },
    attackPlayer() {
      const attackValue = this.getRandomValue(8, 15);
      this.playerHealth = this.getHealthByAttackValue(
        attackValue,
        this.playerHealth
      );
    },
    specialAttack() {
      if (this.gameEnd) {
        return;
      }

      this.specialAttackUsed = true;
      this.specialAttackColdown = 3;

      const attackValue = this.getRandomValue(10, 25);

      this.monsterHealth = this.getHealthByAttackValue(
        attackValue,
        this.monsterHealth
      );

      this.attackPlayer();
    },
    specialAttackHandler() {
      if (this.specialAttackUsed && !this.gameEnd) {
        this.specialAttackColdown -= 1;
        if (this.specialAttackColdown === 0) {
          this.specialAttackUsed = !this.specialAttackUsed;
        }
      }
    },
    healthBarWidth(healthBar) {
      return { width: `${healthBar}%` };
    },
  },
}).mount("#game");
