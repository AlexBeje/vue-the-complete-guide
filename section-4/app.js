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
    gameEnded() {
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
      if (this.gameEnded) {
        return;
      }
      this.currentRound++;
      const attackValue = this.getRandomValue(5, 12);
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
    specialAttackHandler() {
      if (this.specialAttackUsed && !this.gameEnd) {
        this.specialAttackColdown =
          this.specialAttackColdown !== 0
            ? (this.specialAttackColdown -= 1)
            : 0;
        if (this.specialAttackColdown === 0) {
          this.specialAttackUsed = !this.specialAttackUsed;
        }
      }
    },
    specialAttack() {
      if (this.gameEnded) {
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
    healthBarWidth(healthBar) {
      return { width: `${healthBar}%` };
    },
  },
}).mount("#game");
