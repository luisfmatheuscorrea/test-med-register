<template>
  <div class="row">
    <div class="calendar-div">
      <h5>Confira suas consultas marcadas aqui em baixo</h5>
      <b-calendar
        block
        selected-variant="primary"
        today-variant="primary"
        nav-button-variant="primary"
        locale="pt-BR"
        v-model="selectedDate"
      />
    </div>
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
    profissional: Object,
  },
};
</script>
