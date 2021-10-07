<template>
  <div class="review">
    <div
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
        <h1>Revisão do Cadastro</h1>
        <ReviewDetails
          v-bind="{ register: getRegister, attendance: getAttendance }"
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
    getRegister() {
      return JSON.parse(localStorage.getItem("register"));
    },
    getAttendance() {
      return JSON.parse(localStorage.getItem("attendance"));
    },
  },
  data() {
    return {
      register: null,
      attendance: null,
    };
  },
  created() {
    this.checkData();
  },
  methods: {
    checkData() {
      if (this.register != null) {
        this.register = this.getRegister;
      }
      if (this.attendance != null) {
        this.attendance = this.getAttendance;
      }
    },
    registerProfissional() {
      var form = {
        id: 0,
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

      console.log(form);
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        console.log("foi");
        var profissionals = JSON.parse(localStorage.getItem("profissionals"));

        if (profissionals !== null) {
          form.id = length + 1;
          profissionals.push(form);
          localStorage.setItem("profissionals", JSON.stringify(profissionals));
        } else {
          localStorage.setItem("profissionals", JSON.stringify([form]));
        }
      }
    },
    editRegister() {
      this.$router.push("/");
    },
  },
};
</script>
