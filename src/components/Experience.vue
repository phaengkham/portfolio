<template>
    <section>
        <h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-right">Experrience</h2>
        <div class="space-y-16 py-14">
            <div class="space-y-16 py-14">
                <div v-for="element in Experrience" :key="element.id" data-aos="fade-right"
                    class="flex items-center rounded-xl bg-white/75">
                    <div class="w-1/4">
                        <img src="https://img.icons8.com/ios-filled/100/lawyer.png" alt="lawyer">
                    </div>
                    <div class="w-3/4 pl-4">
                        <h3 class="uppercase font-semibold text-primary text-base">{{ element.title}}</h3>
                        <p class="text-gray-500">{{ element.company }}</p>
                        <p class="text-gray-500">{{ element.duration }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const Experrience = ref([
    {
        id: 1,
        title: 'Sofware Engineer',
        company: 'Microsoft',
        duration: 'Mar 2024 - september 2025'
    },
    {
        id: 2,
        title: 'Frontend Developer',
        company: 'Spotify',
        duration: 'Mar 2023 - september 2024'
    },
    {
        id: 3,
        title: 'Backend Developer',
        company: 'Facebook',
        duration: 'Mar 2022 - september 2023'
    }
])
</script>

<style></style>