<template>
  <div class="review">
    <div
      @click="
        () => {
          backToRegister();
        }
      "
      class="icon-back"
    >
      <b-icon icon="arrow-left-short"></b-icon>
    </div>
    <b-card class="card-finished">
      <b-card-body class="card-body-finished pl-5 pr-0">
        <h2 style="font-weight: 500; font-size: 2.4rem; margin-bottom: 1.5rem">
          Olá,
          <strong
            style="font-weight: 900; font-size: 2.8rem; color: var(--primary)"
            >{{ profissional.name }}</strong
          >
          Bem-vindo!
        </h2>
        <FinishedDetails v-bind="{ profissional: getProfissional }" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import FinishedDetails from "../../pages/FinishedDetails";
import "./styles.scss";

export default {
  name: "Finished",
  components: { FinishedDetails },
  computed: {
    profissional() {
      return JSON.parse(localStorage.getItem("profissional"));
    },
  },
  methods: {
    backToRegister() {
      this.$router.push("/");
    },
  },
};
</script>
