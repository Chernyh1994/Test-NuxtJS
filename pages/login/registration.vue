<template>
  <v-card
    class="ma-1 pa-7"
  >
    <span>New account</span>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : ''"
            name="input-10-1"
            label="Password"
            hint="At least 6 characters"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>

        <v-card-actions>
            <v-btn
                color="primary"
                class="mr-4"
            >
                Create
            </v-btn>
        </v-card-actions>

    </v-form>
  </v-card>
</template>

<script>
export default {
  layout: 'login',
    data: () => ({
        show1: false,
        password: '',
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 6 || 'Min 6 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        },
    }),

    methods: {
     
    },
}
</script>

