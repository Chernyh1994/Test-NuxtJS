<template>
 <v-card
    max-width="544"
    class="mx-auto"
  >
  <v-form
  ref="form"
  v-model="valid"
  lazy-validation
  @submit.prevent="onSubmit"
  >
    <v-card-title>
       <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="10"
            label="User name"
            required
          ></v-text-field>
        </v-col>
    </v-card-title>
    <v-card-title>
      <v-col
        cols="12"
        md="12"
      >
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
      </v-col>
    </v-card-title>
    <v-card-actions>
      <v-btn
          class="ma-2"
          color="primary"
        >
          Submit
      </v-btn> 
      <v-btn
        class="ma-2"
        color="primary"
        to='/' active-class
      >
          Cancel
      </v-btn> 
    </v-card-actions>
    <v-card-text>New to Test(JSN)? <NuxtLink to='/login/registration'> Create an account.</NuxtLink>or</v-card-text>
  </v-form>
  </v-card>
</template>


<script>
export default {
  layout: 'login',
  data: () => ({
    valid: false,
    username: '',
    show1: false,
    password: '',

    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],

    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters',
      emailMatch: () => ('The email and password you entered don\'t match'),
    },
  }),
  methods:{
    onSubmit(){
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>