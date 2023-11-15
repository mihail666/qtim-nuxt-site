<template>
  <v-footer
    class="bg-backgroundFooter mt-16 "
    height="900"
    max-width="1000"
  >
    <v-row
      no-gutters
      class="max-w-header mx-auto"
    >
      <v-col cols="6">
        <v-card
          class="mx-auto bg-backgroundFooter"
          max-width="464"
          :elevation="0"
        >
          <p>Is there a project?</p>
          <h1 class="mt-14 text-decoration-underline text-no-wrap">
            Let’s work <br />
            together
          </h1>
        </v-card>
      </v-col>

      <v-col
        cols="6"
        class="mt-14"
      >
        <v-card
          class="mx-auto bg-backgroundFooter"
          max-width="152"
          :elevation="0"
        >
          <v-list class="mx-auto bg-backgroundFooter">
            <p class="mb-3">For all questions</p>
            <p>+7 (920) 278 00 68</p>
            <p>qtim@agency.com</p>
          </v-list>
          <v-list class="mx-auto bg-backgroundFooter">
            <p class="mb-3">For all questions</p>
            <p>+7 (920) 278 00 68</p>
            <p>qtim@agency.com</p>
          </v-list>
          <v-list class="mx-auto bg-backgroundFooter">
            <p class="mb-3">For all questions</p>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
  <v-footer
    class="bg-backgroundFooter overflow-hidden"
    height="180"
  >
    <v-row
      no-gutters
      class="max-w-page mx-auto"
    >
      <v-col
        cols="5"
        class="d-flex justify-start mt-12"
      >
        <v-btn
          v-for="link in linksfoo1"
          :key="link"
          :text="link"
          variant="text"
          class="text-h6"
        ></v-btn>
      </v-col>
      <v-col
        cols="2"
        class="d-flex justify-center"
      >
        <button class="btn">
          <h3 class="text-white mb-16 mt-n6">Go</h3>
        </button>
      </v-col>
      <v-col
        cols="5"
        class="d-flex justify-end mt-12"
      >
        <v-btn
          v-for="link in linksfoo2"
          :key="link"
          :text="link"
          variant="text"
          class="text-h6"
        >
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
const linksfoo1 = ['Facebook', 'Instagram', 'Telegram']
const linksfoo2 = ['Behance', 'Privacy Policy', 'Linkedn']
</script>
