<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const { data: customData } = await useFetch('https://sportlight-api.tranhieudev.com/api/v1/guest/product/now')
console.log(customData)
const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data?.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
    <span class="text-xs">{{customData}}</span>
  </div>
</template>
