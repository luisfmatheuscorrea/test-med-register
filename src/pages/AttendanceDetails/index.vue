<template>
  <div class="row">
    <b-form class="pl-2 py-3 form-responsive">
      <b-form-group label="Especialidade principal*">
        <b-form-select
          placeholder="Selecione sua especialidade"
          class="input-form"
          v-model="form.speciality"
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
          :state="form.value ? !$v.form.value.$error : null"
          aria-describedby="input-live-help"
          v-model.trim="$v.form.value.$model"
        />
        <b-input-group-text>,00</b-input-group-text>
        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.form.value.required
              ? !$v.form.value.minLength
                ? "Obrigatório 11 letras"
                : "Obrigatório 11 letras"
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-input-group>

      <div class="types-payment">
        <label>Formas de pagamento da consulta*</label>
        <b-card class="card-payment">
          <b-form-checkbox v-model="form.payments" value="pix"
            ><strong style="font-weight: 700; margin-left: 2rem"
              >Pix</strong
            ></b-form-checkbox
          >
        </b-card>

        <b-card class="card-payment">
          <b-form-checkbox v-model="form.payments" value="dinheiro"
            ><strong style="font-weight: 700; margin-left: 2rem"
              >Em dinheiro</strong
            ></b-form-checkbox
          >
        </b-card>

        <b-card class="card-payment">
          <b-form-checkbox v-model="form.payments" value="cartao"
            ><strong style="font-weight: 700; margin-left: 2rem"
              >Cartão de crédito</strong
            ></b-form-checkbox
          >
          <b-form-group
            v-if="form.payments.findIndex((e) => e === 'cartao') != -1"
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
  data() {
    return {
      form: {
        speciality: null,
        value: null,
        payments: [],
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "",
        precision: 2,
      },
      installment: "",
      fieldsStates: {
        name: null,
      },
      specialities: [
        { value: null, text: "Selecione" },
        { value: "cardio", text: "Cardiologia" },
        { value: "dermato", text: "Dermatologia" },
        { value: "neuro", text: "Neurologia" },
        { value: "oftalmo", text: "Oftalmologia" },
        { value: "psiqui", text: "Psiquiatria" },
        { value: "uro", text: "Urologia" },
      ],
    };
  },
  validations: {
    form: {
      value: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(3),
      },
    },
  },
};
</script>
