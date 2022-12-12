<template>
    <v-img height="250" width="250" :src="user.avatar_url"></v-img>
    <v-card-title class="text-center">{{ user.login }}</v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-center">
        <v-btn @click="memberDetails(user.login)" color="deep-purple lighten-2" text> Details </v-btn>
    </v-card-actions>
</template>

<script setup lang="ts">
import type { Member } from '@/types/index'
import type { PropType } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    user: {
        type: Object as PropType<Member>,
        required: true
    }
});

const memberDetails = (login: string): void => {
    router.push(`/detail/${login}`)
};

</script>