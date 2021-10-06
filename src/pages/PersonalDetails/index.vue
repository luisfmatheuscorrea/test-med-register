<template>
  <div class="row">
    <b-form class="pl-2 py-3 form-responsive">
      <b-form-group label="Nome completo*">
        <b-form-input
          type="text"
          placeholder="Digite seu nome completo"
          class="input-form"
          trim
          :state="form.name ? !$v.form.name.$error : null"
          aria-describedby="input-live-help"
          v-model.trim="$v.form.name.$model"
        />

        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.form.name.required
              ? !$v.form.name.minLength
                ? "Minímo de 3 letras"
                : "Máximo de 48 letras"
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group style="width: 80%" label="CPF*">
        <b-form-input
          type="number"
          placeholder="Digite seu CPF"
          class="input-form"
          trim
          :max="11"
          :state="form.cpf ? !$v.form.cpf.$error : null"
          aria-describedby="input-live-help"
          v-model.number.trim="$v.form.cpf.$model"
        />

        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.form.cpf.required
              ? !$v.form.cpf.minLength
                ? "Obrigatório 11 letras"
                : "Obrigatório 11 letras"
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group style="width: 80%" label="Número de celular*">
        <b-form-input
          type="number"
          placeholder="Digite seu número de celular"
          class="input-form"
          trim
          :max="11"
          :state="form.phone ? !$v.form.phone.$error : null"
          aria-describedby="input-live-help"
          v-model.number.trim="$v.form.phone.$model"
        />

        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.form.phone.required
              ? !$v.form.phone.minLength
                ? "Obrigatório 11 letras"
                : "Obrigatório 11 letras"
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-form-group>

      <div class="row justify-content-between m-0">
        <b-form-group style="width: 45%" label="Estado*">
          <b-form-select
            placeholder="Selecione seu estado"
            class="input-form"
            v-model="form.state"
            :options="states"
          />
        </b-form-group>

        <b-form-group style="width: 45%" label="Cidade*">
          <b-form-select
            placeholder="Selecione sua cidade"
            class="input-form"
            v-model="form.city"
            :disabled="!form.state"
            :options="form.state ? citys[form.state] : citys['NULL']"
          />
        </b-form-group>
      </div>
    </b-form>
    <img
      src="@/assets/desktop-pagina-1.png"
      alt="Imagem ilustrativa"
      class="img-page"
    />
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "PersonalDetails",
  created() {
    this.checkRegister();
  },
  data() {
    return {
      form: {
        name: null,
        cpf: null,
        phone: null,
        state: null,
        city: null,
      },
      fieldsStates: {
        name: null,
      },
      states: [
        { value: null, text: "Selecione" },
        { value: "PA", text: "Paraná" },
        { value: "RS", text: "Rio Grande do Sul" },
        { value: "SC", text: "Santa Catarina" },
      ],
      citys: {
        NULL: [{ value: null, text: "Selecione" }],
        PA: [{ value: null, text: "Selecione" }, "Londrina", "Maringá"],
        RS: [{ value: null, text: "Selecione" }, "Pelotas", "Porto Alegre"],
        SC: [{ value: null, text: "Selecione" }, "Florianópolis", "Joinville"],
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(48),
      },
      cpf: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  methods: {
    checkRegister() {
      var register = this.$cookies.get("register");

      register;
    },
  },
};
</script>
