<template>
  <div class="home">
    <div
      v-if="page > 0"
      @click="
        () => {
          previousPage();
        }
      "
      class="icon-back"
    >
      <b-icon icon="arrow-left-short"></b-icon>
    </div>
    <b-card class="card-form">
      <b-card-body class="pl-5 pr-0">
        <div v-if="page === 0">
          <h1>Sobre o profissional</h1>
          <h4 class="mt-2">Dados do profissional</h4>
        </div>
        <div v-if="page === 1">
          <h1>Sobre o atendimento</h1>
          <h4 class="mt-2">Detalhes do atendimento</h4>
        </div>
        <PersonalDetails v-if="page === 0" />
        <AttendanceDetails v-if="page === 1" />
        <div class="actions-page mt-2">
          <div class="row justify-content-between m-0">
            <b-progress
              style="width: 75%; height: 1.4rem"
              :max="page"
              class="mb-3"
            >
              <b-progress-bar
                variant="primary"
                :value="(page + 1 * 100) / 2"
              ></b-progress-bar>
            </b-progress>
            <h5 class="mr-3">{{ page + 1 }} de 2</h5>
          </div>
          <b-button
            style="
              width: 100%;
              border-radius: 0.9rem;
              text-transform: uppercase;
              font-family: 'Comfortaa', sans-serif;
              font-weight: 600;
            "
            @click="
              () => {
                nextPage();
              }
            "
            type="submit"
            variant="primary"
            >{{ page > 0 ? "Finalizar" : "Próximo" }}</b-button
          >
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PersonalDetails from "../../pages/PersonalDetails";
import AttendanceDetails from "../../pages/AttendanceDetails";
import "./styles.scss";

export default {
  name: "Home",
  components: { PersonalDetails, AttendanceDetails },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    nextPage() {
      if (this.page < 1) {
        this.page = this.page + 1;
      } else {
        this.$router.push("/review");
      }
    },
    previousPage() {
      if (this.page != 0) {
        this.page = this.page - 1;
      }
    },
  },
};
</script>
