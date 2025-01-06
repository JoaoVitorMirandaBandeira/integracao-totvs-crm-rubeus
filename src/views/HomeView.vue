<template>
  <main>
    <p class="font-bold text-2xl">Integração TOTVS x Rubeus</p>
    <form @submit.prevent="submitForm">
        <Input
          label="link"
          id="link"
          name="link"
          type="text"
          value=""
          v-model="form.link"
        />
        <Input
          label="user"
          id="user"
          name="user"
          type="text"
          value=""
          v-model="form.user"
        />
        <Input
          label="password"
          id="password"
          name="password"
          type="password"
          value=""
          v-model="form.password"
        />
        <Input
          label="crm"
          id="crm"
          name="crm"
          type="text"
          value=""
          v-model="form.crm"
        />
        <Input
          label="token"
          id="token"
          name="token"
          type="text"
          value=""
          v-model="form.token"
        />
      <Input
        label="origem"
        id="origem"
        name="origem"
        type="text"
        value=""
        v-model="form.origem"
      />
        <button type="submit">Enviar</button>
    </form>
  </main>
</template>

<script setup>
import { onBeforeMount, reactive } from 'vue'
import { httpRequest } from '@/services/http/HttpRequest.ts'
import Input from '@/components/Form/Input.vue'

const data = reactive({
  sql: null
})
const form = reactive({
  link: '',
  user: '',
  password: '',
  crm: '',
  token: '',
  origem: '',
})

const submitForm = () => {
  console.log(form)
}
onBeforeMount(async () => {
  try {
    const body = {
      clientId: "e5a633ee-7268-48ef-9cbe-d03cc335bb17",
      code: "RB.PS.IM.003",
      codColigada: 0,
      codSistema: "S",
      parameters: "IDPS="
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const response = await httpRequest('https://rubeusscripttotvs.apprbs.com.br/rubeus/api/v1/middleware/execute-sql', options)
    console.log(response)
    if(!response.status){
      data.sql = response
      return
    }
    data.sql = response.data
  } catch (error) {
    console.error('Erro ao realizar a consulta SQL:', error);
    data.sql = 'Erro ao carregar os dados.'
  }
})

</script>

