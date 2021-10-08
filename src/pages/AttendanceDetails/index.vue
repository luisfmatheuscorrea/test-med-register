<template>
  <div class="row">
    <b-form class="pl-2 py-3 form-responsive">
      <b-form-group label="Especialidade principal*">
        <b-form-select
          placeholder="Selecione sua especialidade"
          class="input-form"
          v-model="speciality"
          :options="specialities"
        />
      </b-form-group>

      <label>Informe o preço da consulta*</label>
      <b-input-group class="input-group-value">
        <b-input-group-text>R$</b-input-group-text>
        <b-form-input
          type="number"
          placeholder="Valor"
          class="input-value"
          trim
          :state="
            value
              ? value < 30 || value > 350
                ? false
                : !$v.value.$error
              : null
          "
          aria-describedby="input-live-help"
          v-model.trim="$v.value.$model"
        />
        <b-input-group-text>,00</b-input-group-text>
        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.value.required
              ? 30 > value || value > 350
                ? "O valor da consulta deve ser entre R$ 30,00 - R$ 350,00"
                : ""
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-input-group>

      <div class="types-payment">
        <label>Formas de pagamento da consulta*</label>
        <b-card class="card-payment">
          <b-card-body class="card-body-payment">
            <b-form-checkbox v-model="payments" value="Pix"
              ><strong style="font-weight: 700; margin-left: 2rem"
                >Pix</strong
              ></b-form-checkbox
            >
          </b-card-body>
        </b-card>

        <b-card class="card-payment">
          <b-card-body class="card-body-payment">
            <b-form-checkbox v-model="payments" value="Dinheiro"
              ><strong style="font-weight: 700; margin-left: 2rem"
                >Em dinheiro</strong
              ></b-form-checkbox
            >
          </b-card-body>
        </b-card>

        <b-card class="card-payment">
          <b-card-body class="card-body-payment">
            <b-form-checkbox v-model="payments" value="Cartão de crédito"
              ><strong style="font-weight: 700; margin-left: 2rem"
                >Cartão de crédito</strong
              ></b-form-checkbox
            >
            <b-form-group
              v-if="payments.findIndex((e) => e === 'Cartão de crédito') != -1"
              label="Parcelamento em"
              style="margin-left: 3.5rem; margin-top: 1rem"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="installment"
                :aria-describedby="ariaDescribedby"
                value="1x"
                >1x, sem juros</b-form-radio
              >
              <b-form-radio
                v-model="installment"
                :aria-describedby="ariaDescribedby"
                value="2x"
                >2x, sem juros</b-form-radio
              >
              <b-form-radio
                v-model="installment"
                :aria-describedby="ariaDescribedby"
                value="3x"
                >3x, sem juros</b-form-radio
              >
            </b-form-group>
          </b-card-body>
        </b-card>
      </div>
    </b-form>
    <img
      src="@/assets/desktop-pagina-2.png"
      alt="Imagem ilustrativa"
      class="img-page"
    />
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "AttendanceDetails",
  computed: {
    attendance() {
      return JSON.parse(localStorage.getItem("attendance"));
    },
  },
  data() {
    return {
      speciality: null,
      value: null,
      payments: [],
      installment: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "",
        precision: 2,
      },
      fieldsStates: {
        name: null,
      },
      specialities: [
        { value: null, text: "Selecione" },
        "Cardiologia",
        "Dermatologia",
        "Neurologia",
        "Oftalmologia",
        "Psiquiatria",
        "Urologia",
      ],
    };
  },
  created() {
    this.checkAttendance();
  },
  watch: {
    speciality: function () {
      this.checkAndSave();
    },
    value: function () {
      this.checkAndSave();
    },
    payments: function () {
      this.checkAndSave();
    },
    installment: function () {
      this.checkAndSave();
    },
  },
  validations: {
    speciality: {
      required,
    },
    payments: {
      required,
    },
    value: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(3),
    },
    installment: {
      required,
    },
  },
  methods: {
    checkAttendance() {
      if (this.attendance != null) {
        this.speciality = this.attendance.speciality;
        this.value = this.attendance.value;
        this.payments = this.attendance.payments;
        this.installment = this.attendance.installment;
      }
    },
    checkAndSave() {
      var form = {
        speciality: this.speciality,
        payments: this.payments,
        value: this.value,
        installment: this.installment,
      };

      console.log(form);
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        console.log("foi");
        localStorage.setItem("attendance", JSON.stringify(form));
      }
    },
  },
};
</script>
