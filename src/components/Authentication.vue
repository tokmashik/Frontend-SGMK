<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
    >
     <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Авторизация
        </v-btn>
      </template>
       <v-card>
          <v-card-text>
            <v-container>
              <v-card-title>
                  <span class="text-h5">Авторизация</span>
              </v-card-title>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email*"
                    required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6">
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>  
              </v-row>  
              <v-btn
                color="#EA5F4B"
                dark
                v-bind="attrs"
                v-on="on">
                Войти
              </v-btn>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="$event"
            >
              Регистрация
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Отмена
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        // methods: {
        // event {
      }
    },
  }
</script>

<!--password: 'Password',-->
