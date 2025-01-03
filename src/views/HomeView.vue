<template>
  <main>
    <p class="font-bold text-2xl">Integração TOTVS x Rubeus</p>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import { httpRequest } from '@/services/http/HttpRequest.ts'

const data = reactive<{
  sql: string | null;
}>({
  sql: null
})

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

