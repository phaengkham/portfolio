<template>
    <section id="contact" class="py-12 bg-gray-50">
        <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
            Contact Me
        </h2>
        <div class="mx-auto max-w-7xl px-4 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-8 items-start">
                <!-- Contact Info Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div v-for="element in data" :key="element.id" data-aos="fade-up"
                        class="flex flex-col items-center justify-center rounded-lg w-full h-44 text-center bg-white shadow-lg transition transform hover:-translate-y-2">
                        <img :src="element.icon" alt="data icon" class="h-12 w-12 mb-4">
                        <h4 class="text-gray-800 text-lg font-semibold">{{ element.title }}</h4>
                        <p class="text-sm text-gray-500">{{ element.info }}</p>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-10" data-aos="fade-up">
                    <form>
                        <div class="max-w-xl mx-auto space-y-6">
                            <input type="text" placeholder="Name"
                                class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-primary">
                            <input type="email" placeholder="example@gmail.com"
                                class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-primary">
                            <textarea placeholder="Your Message" rows="6"
                                class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-primary"></textarea>
                            <button type="submit"
                                class="px-6 py-3 w-full sm:w-auto bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition shadow-md">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'
const data = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/?size=100&id=63779&format=png&color=000000',
        title: 'Visit office',
        info: '1234 Khaisone Street, Vietiand Capital'
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/?size=100&id=I24lanX6Nq71&format=png&color=000000',
        title: 'Visit Call',
        info: '+856 20 5782 45678'
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000',
        title: 'Visit Online',
        info: 'Facebook'
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/?size=100&id=16713&format=png&color=000000',
        title: 'Visit Online',
        info: 'WhatsApp'
    },
]);

const form = ref({
    name: '',
    email: '',
    message: '',
});

const handleSubmit = () => {
    console.log('Form Submitted:', form.value);
    form.value = { name: '', email: '', message: '' }
}
</script>

<style></style>