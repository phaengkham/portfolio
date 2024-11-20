<template>
    <section>
        <div
            class="w-full bg-white border-b-5 border-y-4 border-white flex flex-wrap justify-center p-2 gap-6 lg:gap-24">
            <div data-aos="zoom-in-up" v-for="element in skills" :key="element.id">
                <figure class="w-20 h-20 flex justify-center items-center rounded-full ml-2 mt-2">
                    <img :src="element.icon" alt="skill icon" class="w-10 h-12 absolute z-10">
                </figure>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000',
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000',
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000',
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
    },
    {
        id: 5,
        icon: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000',
    },
    {
        id: 6,
        icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
    },
    {
        id: 7,
        icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000',
    },
]);

</script>

<style></style>