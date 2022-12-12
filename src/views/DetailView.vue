<template>
    <div class="flex flex-column">
        <div class="flex-grow-1 d-flex justify-center align-center">
            <v-card class="mx-auto pt-5" min-width="200">
                <v-img class="white--text align-end" height="200px" :src="user.AvatarUrl">
                </v-img>
                <v-card-title class="text-center">{{ fullname }}</v-card-title>
                <v-card-subtitle class="pb-4 text-center">Github member from: {{ fromDate }}</v-card-subtitle>
                <v-carousel :continuous="false" :show-arrows="false" :cycle="true" hide-delimiter-background
                    delimiter-icon="mdi-minus" height="150">
                    <v-carousel-item>
                        <v-sheet color="#fafad2" height="100%" tile>
                            <v-row class="fill-height" justify="center" align="center">
                                <div class="text-h5">Public repos: {{ user.PublicRepos }}</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet color="#f0e68c" height="100%" tile>
                            <v-row class="fill-height" justify="center" align="center">
                                <div class="text-h5">Followers: {{ user.Followers }}</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet color="#ffd700" height="100%" tile>
                            <v-row class="fill-height" justify="center" align="center">
                                <div class="text-h5">Following: {{ user.Following }}</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <v-card-actions class="d-flex justify-center">
                    <v-btn color="red lighten-2" text @click="back">
                        Back
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, type ComputedRef } from "vue";
import useUserApi from "@/composables/member.api";

const route = useRoute();
const router = useRouter();

const { user } = await useUserApi(route.params.login as string);

const back = () => {
    router.push('/member-list')
};

const fullname: ComputedRef<string> = computed(() => {
    if (user.value.Name === null)
        return "Name not registered";

    const name: string[] = user.value.Name.split(/(?=[A-Z])/);

    return name.join(" ");
});

const fromDate: ComputedRef<string> = computed(() => {
    const date = new Date(user.value.CreatedAt);

    return date.toLocaleDateString();
});

</script>
