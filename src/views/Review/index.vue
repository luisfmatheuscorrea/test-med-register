<template>
  <div class="review">
    <div
      @click="
        () => {
          editRegister();
        }
      "
      class="icon-back"
    >
      <b-icon icon="arrow-left-short"></b-icon>
    </div>
    <b-card class="card-form">
      <b-card-body class="card-body-form pl-5 pr-0">
        <h1>Revisão do Cadastro</h1>
        <ReviewDetails
          v-bind="{ register: register, attendance: attendance }"
        />
        <div class="actions-page mt-2">
          <b-button
            style="
              width: 100%;
              border-radius: 0.9rem;
              text-transform: uppercase;
              margin-bottom: 0.5rem;
              font-family: 'Comfortaa', sans-serif;
              font-weight: 600;
            "
            @click="
              () => {
                registerProfissional();
              }
            "
            type="submit"
            variant="warning"
            >Cadastrar Profissional</b-button
          >
          <b-button
            style="
              width: 100%;
              border-radius: 0.9rem;
              color: var(--primary);
              font-weight: 700;
              font-family: 'Comfortaa', sans-serif;
            "
            @click="
              () => {
                editRegister();
              }
            "
            type="submit"
            >Editar cadastro</b-button
          >
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import ReviewDetails from "../../pages/ReviewDetails";
import "./styles.scss";

export default {
  name: "Review",
  components: { ReviewDetails },
  computed: {
    register() {
      return JSON.parse(localStorage.getItem("register"));
    },
    attendance() {
      return JSON.parse(localStorage.getItem("attendance"));
    },
  },
  methods: {
    registerProfissional() {
      var form = {
        name: this.register.name,
        cpf: this.register.cpf,
        phone: this.register.phone,
        state: this.register.state,
        city: this.register.city,
        speciality: this.attendance.speciality,
        payments: this.attendance.payments,
        value: this.attendance.value,
        installment: this.attendance.installment,
      };

      localStorage.setItem("profissional", JSON.stringify(form));

      localStorage.setItem("register", null);
      localStorage.setItem("attendance", null);

      this.$router.push("/finished");
    },
    editRegister() {
      this.$router.push("/");
    },
  },
};
</script>
