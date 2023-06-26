<template>
    <div>
        <h1>This is a Dashboard Page</h1>
    </div>
</template>
<script lang="ts" setup>

onMounted(async () => {
    const data = await $fetch(`/api/list-data`)
    console.log(data);
})
</script>