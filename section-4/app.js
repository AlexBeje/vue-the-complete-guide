Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      minHealth: 0,
      maxHealth: 100,
      abilities: {
        specialAttack: {
          used: false,
          coldown: 3,
          roundsUntilAbilityCanBeUsed: 0,
        },
        heal: {
          used: false,
          coldown: 2,
          roundsUntilAbilityCanBeUsed: 0,
        },
      },
      playerSurrendered: false,
      winnerTextColor: "black",
      logMessages: [],
    };
  },
  computed: {
    gameOver() {
      return (
        this.monsterHealth <= this.minHealth ||
        this.playerHealth <= this.minHealth ||
        this.playerSurrendered
      );
    },
    winner() {
      if (this.gameOver) {
        if (
          this.monsterHealth === this.playerHealth &&
          !this.playerSurrendered
        ) {
          this.winnerTextColor = "#88005b";
          return "It's a Draw!";
        }
        if (this.monsterHealth > this.playerHealth || this.playerSurrendered) {
          this.winnerTextColor = "#da8d00";
          return "The Monster won!";
        } else {
          this.winnerTextColor = "#7700ff";
          return "You won!";
        }
      }
    },
  },
  methods: {
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    getHealthByAttackValue(attackValue, health) {
      return attackValue >= health ? this.minHealth : (health -= attackValue);
    },
    getHealthByHealValue(healValue, health) {
      return health + healValue >= this.maxHealth
        ? this.maxHealth
        : (health += healValue);
    },
    healthBarWidth(healthBar) {
      return { width: `${healthBar}%` };
    },
    attackMonster() {
      if (this.gameOver) {
        return;
      }
      this.currentRound++;
      const attackValue = this.getRandomValue(5, 12);
      this.addLogMessage("player", "attack", attackValue);
      this.monsterHealth = this.getHealthByAttackValue(
        attackValue,
        this.monsterHealth
      );
      this.attackPlayer();
      this.updateAbilityColdown(this.abilities.specialAttack);
      this.updateAbilityColdown(this.abilities.heal);
    },
    attackPlayer() {
      const attackValue = this.getRandomValue(8, 15);
      this.addLogMessage("monster", "attack", attackValue);
      this.playerHealth = this.getHealthByAttackValue(
        attackValue,
        this.playerHealth
      );
    },
    updateAbilityColdown(ability) {
      if (ability.used) {
        ability.roundsUntilAbilityCanBeUsed =
          ability.roundsUntilAbilityCanBeUsed !== 0
            ? (ability.roundsUntilAbilityCanBeUsed -= 1)
            : 0;
        if (ability.roundsUntilAbilityCanBeUsed === 0) {
          ability.used = !ability.used;
        }
      }
    },
    abilityIsAvailable(ability) {
      return ability.roundsUntilAbilityCanBeUsed === 0;
    },
    specialAttack() {
      if (this.gameOver) {
        return;
      }
      if (this.playerHealth > this.minHealth) {
        this.abilities.specialAttack.used = true;
        this.abilities.specialAttack.roundsUntilAbilityCanBeUsed =
          this.abilities.specialAttack.coldown;
        const attackValue = this.getRandomValue(10, 25);
        this.addLogMessage("player", "specialAttack", attackValue);
        this.monsterHealth = this.getHealthByAttackValue(
          attackValue,
          this.monsterHealth
        );
        this.updateAbilityColdown(this.abilities.heal);
        this.attackPlayer();
      }
    },
    heal() {
      if (this.gameOver) {
        return;
      }
      if (this.playerHealth < this.maxHealth) {
        this.abilities.heal.used = true;
        this.abilities.heal.roundsUntilAbilityCanBeUsed =
          this.abilities.heal.coldown;
        const healValue = this.getRandomValue(8, 20);
        this.addLogMessage("player", "heal", healValue);
        this.playerHealth = this.getHealthByHealValue(
          healValue,
          this.playerHealth
        );
        this.updateAbilityColdown(this.abilities.specialAttack);
        this.attackPlayer();
      }
    },
    surrender() {
      if (this.gameOver) {
        return;
      }
      this.playerSurrendered = true;
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.abilities = {
        specialAttack: {
          used: false,
          coldown: 3,
          roundsUntilAbilityCanBeUsed: 0,
        },
        heal: {
          used: false,
          coldown: 2,
          roundsUntilAbilityCanBeUsed: 0,
        },
      };
      this.playerSurrendered = false;
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      // add something at the beginning of the array
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    actionByPlayer(logMessage) {
      return logMessage.actionBy === "player";
    },
    actionByMonster(logMessage) {
      return logMessage.actionBy === "monster";
    },
    healActionType(logMessage) {
      return logMessage.actionType === "heal";
    },
    attackActionType(logMessage) {
      return logMessage.actionType === "attack";
    },
    specialAttackActionType(logMessage) {
      return logMessage.actionType === "specialAttack";
    },
  },
}).mount("#game");
