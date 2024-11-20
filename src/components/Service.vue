<template>
    <section id="service" class="text-white mt-20">
        <h2 class="text-4xl font-bold text-black mb-4 text-center" data-aos="fade-up">My Service</h2>
        <div
            class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div class="px-[12px] mb-[24px]" data-aos="fade-up" v-for="element in service" :key="element.id">
                <div class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] bg-white">
                    <div class="mt-[-30px] flex justify-center relative">
                        <div class="mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
                            <span
                                class="h-[60px]w-[60px] m-auto border-[1px] border-solid boder-[#111a24] absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]">
                            </span>
                            <img :src="element.icon" alt="services" class="h-[35px] w-[35px] relative z-[1]">
                        </div>
                    </div>
                    <div class="p-[30px]">
                        <h3 class="uppercase font-semibold text-primary text-base">{{ element.name }}</h3>
                        <p class="text-[14px] leading-[20px] text-gray-500 tracking-[0.03rem]">{{ element.descript }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const service = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000',
        name: 'Web Developer',
        descript: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perspiciatis quod veritatis nam maxime asperiores excepturi voluptas aliquid ipsum molestiae.',
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000',
        name: 'Application Developer',
        descript: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perspiciatis quod veritatis nam maxime asperiores excepturi voluptas aliquid ipsum molestiae.',
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000',
        name: 'UX/UI',
        descript: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perspiciatis quod veritatis nam maxime asperiores excepturi voluptas aliquid ipsum molestiae.',
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/?size=100&id=19318&format=png&color=000000',
        name: 'YouTuber',
        descript: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perspiciatis quod veritatis nam maxime asperiores excepturi voluptas aliquid ipsum molestiae.',
    },
    {
        id: 5,
        icon: 'https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000',
        name: 'Video Creator',
        descript: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perspiciatis quod veritatis nam maxime asperiores excepturi voluptas aliquid ipsum molestiae.',
    },
    {
        id: 6,
        icon: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000',
        name: 'Designer',
        descript: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perspiciatis quod veritatis nam maxime asperiores excepturi voluptas aliquid ipsum molestiae.',
    },

])
</script>

<style></style>