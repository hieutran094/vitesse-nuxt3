<script setup lang="ts">
const online = useOnline()
const { data } = await useLazyAsyncData('count', () => $fetch('https://sportlight-api.tranhieudev.com/api/v1/guest/product/now'))
console.log(data)
</script>

<template>
  <div>
    <span class="text-xs">{{data}}</span>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
