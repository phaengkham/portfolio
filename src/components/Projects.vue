<template>
    <section id="projects">
        <h2 class="text-4xl font-bold text-black mb-4 text-center">
            My Projects
        </h2>
        <div class="py-8 px-4 sm:py-2 xl:px-16 space-y-8 grid grid-cols-1 md:gap-2 lg:gap-2">
            <div data-aos="fade-up" v-for="element in projects" :key="element.id"
                class="flex flex-col md:flex-row rounded-3xl bg-white shadow-lg overflow-hidden">
                <!-- Image Section -->
                <img :src="element.image" alt="project img" class="w-full h-48 md:h-auto md:w-1/3 object-cover">
                <!-- Content Section -->
                <div class="flex flex-col justify-start p-6 space-y-4 md:w-2/3">
                    <span class="bg-primary2 px-4 py-1 rounded-full text-sm font-medium text-black">
                        {{ element.category }}
                    </span>
                    <h3 class="uppercase font-semibold text-primary text-lg">
                        {{ element.title }}
                    </h3>
                    <p class="text-sm leading-relaxed text-gray-500">
                        {{ element.description }}
                    </p>
                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-3 space-y-4 sm:space-y-0">
                        <a :href="element.webURL" target="_blank"
                            class="px-6 py-3 text-sm font-medium text-white bg-primary rounded-full shadow hover:bg-primary-dark transition">
                            Live Preview
                        </a>
                        <a :href="element.gitURL" target="_blank"
                            class="px-6 py-3 text-sm font-medium text-primary border border-primary rounded-full shadow hover:bg-primary hover:text-white transition">
                            Code Source
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const projects = ref([
    {
        id: 1,
        title: 'project 1',
        image: '/vuejs.png',
        category: 'Web Application',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non architecto, nisi harum accusamus totam atque at ut rerum iste esse recusandae distinctio cum quos tempora eligendi? Voluptas quas, facilis ipsam nemo impedit aspernatur facere provident unde maiores reiciendis. Optio aliquam quos sint obcaecati dolorem reiciendis veniam modi totam pariatur aut, earum unde corporis magni id voluptatum adipisci nisi odio. Ad alias id magni vero animi ullam molestias sed similique sit, maiores quibusdam, quas esse soluta, omnis aut numquam minima quo ducimus saepe sapiente! Officia nisi possimus doloremque fuga quisquam quos, aliquid magni modi aut! Eum totam beatae quisquam error.',
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        title: 'project 2',
        image: '/vue.jpg',
        category: 'Web landingpage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non architecto, nisi harum accusamus totam atque at ut rerum iste esse recusandae distinctio cum quos tempora eligendi? Voluptas quas, facilis ipsam nemo impedit aspernatur facere provident unde maiores reiciendis. Optio aliquam quos sint obcaecati dolorem reiciendis veniam modi totam pariatur aut, earum unde corporis magni id voluptatum adipisci nisi odio. Ad alias id magni vero animi ullam molestias sed similique sit, maiores quibusdam, quas esse soluta, omnis aut numquam minima quo ducimus saepe sapiente! Officia nisi possimus doloremque fuga quisquam quos, aliquid magni modi aut! Eum totam beatae quisquam error.',
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        title: 'project 3',
        image: '/vueTailwind1.png',
        category: 'Web App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non architecto, nisi harum accusamus totam atque at ut rerum iste esse recusandae distinctio cum quos tempora eligendi? Voluptas quas, facilis ipsam nemo impedit aspernatur facere provident unde maiores reiciendis. Optio aliquam quos sint obcaecati dolorem reiciendis veniam modi totam pariatur aut, earum unde corporis magni id voluptatum adipisci nisi odio. Ad alias id magni vero animi ullam molestias sed similique sit, maiores quibusdam, quas esse soluta, omnis aut numquam minima quo ducimus saepe sapiente! Officia nisi possimus doloremque fuga quisquam quos, aliquid magni modi aut! Eum totam beatae quisquam error.',
        gitURL: '',
        webURL: ''
    },
    {
        id: 4,
        title: 'project 4',
        image: '/vue.jpg',
        category: 'Web App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non architecto, nisi harum accusamus totam atque at ut rerum iste esse recusandae distinctio cum quos tempora eligendi? Voluptas quas, facilis ipsam nemo impedit aspernatur facere provident unde maiores reiciendis. Optio aliquam quos sint obcaecati dolorem reiciendis veniam modi totam pariatur aut, earum unde corporis magni id voluptatum adipisci nisi odio. Ad alias id magni vero animi ullam molestias sed similique sit, maiores quibusdam, quas esse soluta, omnis aut numquam minima quo ducimus saepe sapiente! Officia nisi possimus doloremque fuga quisquam quos, aliquid magni modi aut! Eum totam beatae quisquam error.',
        gitURL: '',
        webURL: ''
    }
])
</script>

<style></style>