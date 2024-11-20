<template>
    <section class="relative w-full p-3 bg-primary2">
        <div class="grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-4">
            <div class="col-span-1 order-2 md:order-1 lg:order-1 rounded-3xl p-5 bg-white">
                <Experrience></Experrience>
            </div>
            <div class="col-span-1 order-1 lmd:col-span-1 lg:col-span-2 rounded-3xl p-4 bg-white">
                <MainHero></MainHero>
            </div>
            <div class="col-span-1 order-3 md:order-3 lg:order-3 flex justify-center rounded-3xl p-4 bg-white">
                <education></education>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const MainHero = defineAsyncComponent(() => import('./MainHero.vue'))
const Experrience = defineAsyncComponent(() => import('./Experience.vue'))
const Education = defineAsyncComponent(() => import('./Education.vue'))
</script>

<style></style>