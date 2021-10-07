<template>
  <div class="row">
    <ul class="informations">
      <li>
        <h5>Nome completo</h5>
        <p>{{ register.name }}</p>
      </li>
      <li>
        <h5>CPF</h5>
        <p>{{ register.cpf }}</p>
      </li>
      <li>
        <h5>Número de celular ou telefone</h5>
        <p>{{ register.phone }}</p>
      </li>
      <li>
        <h5>Estado/Cidade</h5>
        <p>
          {{
            register.state === "PA"
              ? "Paraná"
              : register.state === "RS"
              ? "Rio Grande do Sul"
              : "Santa Catarina"
          }}
          - {{ register.city }}
        </p>
      </li>
      <li>
        <h5>Especialidade principal</h5>
        <p>{{ attendance.speciality }}</p>
      </li>
      <li>
        <h5>Preço da consulta</h5>
        <p>R$ {{ attendance.value }},00</p>
      </li>
      <li>
        <h5>Formas de pagamento da consulta</h5>
        <p v-for="payment in attendance.payments" v-bind:key="payment">
          {{
            payment === "Cartão de crédito"
              ? `${payment} - Parcelamento em ${attendance.installment} sem juros`
              : payment
          }}
        </p>
      </li>
    </ul>
    <img
      src="@/assets/desktop-pagina-3.png"
      alt="Imagem ilustrativa"
      class="img-page"
    />
  </div>
</template>

<script>
export default {
  name: "ReviewDetails",
  props: {
    register: Object,
    attendance: Object,
  },
};
</script>
