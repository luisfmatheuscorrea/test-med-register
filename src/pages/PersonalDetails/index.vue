<template>
  <div class="row">
    <b-form class="pl-2 py-3 form-responsive">
      <b-form-group label="Nome completo*">
        <b-form-input
          type="text"
          placeholder="Digite seu nome completo"
          class="input-form"
          trim
          :state="name ? !$v.name.$error : null"
          aria-describedby="input-live-help"
          v-model.trim="$v.name.$model"
        />

        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.name.required
              ? !$v.name.minLength
                ? "Minímo de 3 letras"
                : "Máximo de 48 letras"
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group style="width: 80%" label="CPF*">
        <b-form-input
          placeholder="Digite seu CPF"
          class="input-form"
          v-mask="'###.###.###-##'"
          trim
          :max="11"
          :state="cpf ? !$v.cpf.$error : null"
          aria-describedby="input-live-help"
          v-model.trim="$v.cpf.$model"
        />

        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.cpf.required
              ? !$v.cpf.minLength
                ? "Obrigatório 11 letras"
                : "Obrigatório 11 letras"
              : "Esse campo é obrigatório"
          }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group style="width: 80%" label="Número de celular*">
        <b-form-input
          placeholder="Digite seu número de celular"
          class="input-form"
          v-mask="'+55 (##) # ####-####'"
          trim
          :max="11"
          :state="phone ? !$v.phone.$error : null"
          aria-describedby="input-live-help"
          v-model.trim="$v.phone.$model"
        />

        <b-form-invalid-feedback id="input-live-feedback">
          {{
            $v.phone.required
              ? !$v.phone.minLength
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
            v-model="state"
            :options="states"
          />
        </b-form-group>

        <b-form-group style="width: 45%" label="Cidade*">
          <b-form-select
            placeholder="Selecione sua cidade"
            class="input-form"
            v-model="city"
            :disabled="!state"
            :options="state ? citys[state] : citys['NULL']"
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
  props: {
    actualizeForm: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    register() {
      return JSON.parse(localStorage.getItem("register"));
    },
  },
  data() {
    return {
      name: null,
      cpf: null,
      phone: null,
      state: null,
      city: null,
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
  created() {
    this.checkRegister();
  },
  watch: {
    name: function () {
      this.checkAndSave();
    },
    cpf: function () {
      this.checkAndSave();
    },
    phone: function () {
      this.checkAndSave();
    },
    state: function () {
      this.checkAndSave();
    },
    city: function () {
      this.checkAndSave();
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(48),
    },
    cpf: {
      required,
      minLength: minLength(14),
      maxLength: maxLength(14),
    },
    phone: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(20),
    },
    state: {
      required,
    },
    city: {
      required,
    },
  },
  methods: {
    checkRegister() {
      if (this.register != null) {
        this.name = this.register.name;
        this.cpf = this.register.cpf;
        this.phone = this.register.phone;
        this.state = this.register.state;
        this.city = this.register.city;
      }
    },
    checkAndSave() {
      var form = {
        name: this.name,
        cpf: this.cpf,
        phone: this.phone,
        // state:
        //   this.state.value === "PA"
        //     ? "Paraná"
        //     : this.state.value === "RS"
        //     ? "Rio Grande do Sul"
        //     : "Santa Catarina",
        state: this.state,
        city: this.city,
      };

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        localStorage.setItem("register", JSON.stringify(form));
      }
    },
  },
};
</script>
