<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <NavBar>
        </NavBar>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div
                class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-2 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1>Hi, I'm <br>
                            <span>Vue Tailwind</span>
                        </h1>
                    </div>
                    <p class="text-gray-500 pt-8 text-center lg:text-left mx-auto max-w-xl">Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Explicabo, fuga dolor. Ullam ducimus eligendi pariatur repellendus
                        eum voluptates fugiat minus labore eos laboriosam veniam, necessitatibus harum! Sequi fugiat
                        cumque deleniti dolor, maxime vel eius omnis, aliquid rerum doloremque laboriosam quia eveniet
                        similique adipisci, incidunt ducimus. Delectus temporibus sapiente ad aliquam tempora maiores
                        exercitationem praesentium optio fugiat maxime recusandae fugit quod deleniti aliquid quidem
                        sunt, labore id ipsam qui assumenda! Iure consequatur repellat ea animi ut commodi vitae optio
                        quis enim, non doloremque dolores accusantium est numquam nesciunt quae impedit, sint neque
                        explicabo itaque ducimus. Deleniti earum beatae ducimus nulla dolorem?
                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button
                            class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span
                                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent">
                            </span>
                            <span class="relative flex items-center justify-center">Hire Me</span>
                        </button>
                        <button
                            class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div
                                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="svg-container">
                                    <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13v1" stroke="#0CA7ff"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1 17V18C1 18.77956 1.31607 19.5587 1.878768 20.1213C2.4129 20.6839 3.20435 12 4 21H14C14.7956
                                            21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                            stroke="#0CA7ff" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                    <div class="donwload-loader hidden"></div>
                                </div>
                                <a href="/resume.pdf" download="resume.pdf" class="pl-2 text-primary">Download</a>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <figure class="relative overflow-hidden rounded-lg">
                        <img src="/baby2023.jpg" alt="Hero Picture" class="w-full h-auto object-cover">
                        <div class="absolute top-0 left-0 bg-white clip-top-left rounded-br-[20px]"></div>
                        <div class="absolute bottom-0 right-0 w-14 h-14 bg-white clip-bootom-right rounded-tl-[20px]">
                        </div>
                        <figcaption
                            class="absolute bottom-16 left-2/4 flex w-[class(100%-4rem)] -translate-x-2/4 justify-between
                         rounded-xl border border-primary2 bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <div>
                                <h5 class="uppercase font-semibold text-primary text-base">Vue Tialwind</h5>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('./NavBar.vue'))
</script>

<style scope>
.clip-top-left {
    clip-path: polygon(0 0, 100 0%, 100%);
}

.clip-bottom-right {
    clip-path: polygon(100% 100%, 100% 0, 100%);
}
</style>