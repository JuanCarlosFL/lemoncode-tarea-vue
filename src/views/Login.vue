<template>
    <v-app class="background">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center" class="fill-height" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="10">
                            <v-img :src="logo" contain height="125"></v-img>
                            <p class="text-center">(admin - 1234)</p>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Enter your email" v-model="email" prepend-inner-icon="mdi-mail"
                                        type="email" class="rounded-0" outlined @keyup.enter="submit"></v-text-field>
                                    <v-text-field label="Enter your password" v-model="password"
                                        prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined
                                        @keyup.enter="submit"></v-text-field>
                                    <v-btn class="rounded-0" x-large block dark @click="submit">
                                        Login
                                    </v-btn>
                                </v-form>
                                <v-row class="d-flex justify-center mt-4">
                                    <v-img
                                        :src="`https://images.squarespace-cdn.com/content/v1/56cdb491a3360cdd18de5e16/1536155167931-3JJ7O74IM4QP88L0RQS9/3_200.png?format=400w`"
                                        max-height="150" max-width="250"></v-img>

                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import logo from "../assets/logo.png";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");

const emits = defineEmits([
    'login'
]);

const submit = () => {
    if (email.value === "admin" && password.value === "1234") {
        emits('login')
    }
    else console.log("Error");
};
</script>

<style scoped>
.background {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(171, 171, 197, 1) 28%,
            rgba(0, 212, 255, 1) 100%);
}
</style>
