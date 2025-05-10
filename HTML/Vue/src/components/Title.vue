<template>
    <div>
        <h1 class="text-center text-info">{{ props.title }}</h1>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    });
</script>