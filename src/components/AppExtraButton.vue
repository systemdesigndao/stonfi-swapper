<script lang="ts" setup>
defineProps<{ on_click?: () => void, text: string, width: string, height: string, buttonColor?: string, textColor?: string, }>();
</script>

<template>
    <button :class="`flex ${width} ${height} justify-center items-center cursor-pointer ${buttonColor ?? 'bg-white-1 dark:bg-black-1'} rounded-[1rem]`" @click="on_click">
        <span :class="`${textColor ?? 'text-[#0F0E0E]'}`">
          {{ text }}
        </span>
    </button>
</template>