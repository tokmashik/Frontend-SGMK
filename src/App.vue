<template>
  <v-app id="app">  
    <v-navigation-drawer class="grey darken-4" dark permanent app absolute width="60">
      <v-card height="48" width="60">
        <img  class="SGMK_logo"
          alt="Vuetify Logo"
          src="@/assets/mainlogo.png"
          width="29.27" height="23">
      </v-card>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>
    <v-app-bar app class="white" dense dark>
       <v-btn icon color="grey darken-1">
        <v-icon  >mdi-menu</v-icon>
      </v-btn> 
      <AppSearch />
      <v-spacer></v-spacer>  
      <v-toolbar-items> 
        <v-row>
        <v-avatar class="avatar" >
        <img
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg">
        </v-avatar>
        </v-row>
      </v-toolbar-items>   
    </v-app-bar>
    <v-main>
      <v-content>     
        <v-container fluid>
          <Authentication />
          <AppTable_filters />
          <AppTable />

          <!-- <v-spacer></v-spacer>-->
          <!-- <h4>Фильтр</h4>-->
          <!-- <input type="search" v-model="search" class="search" placeholder="поиск..."/>-->
          <!-- <p> {{searchHandler}} </p> -->
          <!-- <p> {{search}} </p> -->
          <!-- <v-btn @click="searchHandler"> search </v-btn> -->

            <!--<ul>-->
             <!-- <li v-for="item in searchHandler" :key="item.id">-->
             <!-- <p> <span> transport: {{ item.transport }} </span></p>-->
             <!-- <p>-->
              <!-- cargo: {{ item.cargo }}-->
             <!-- </p>-->
             <!-- </li>-->
          <!--  </ul>-->

        </v-container>
      </v-content>
    </v-main>
  <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import AppTable from "@/components/AppTable"
import AppTable_filters from "@/components/AppTable_filters"
import AppDialog from "@/components/AppDialog"
import AppSearch from "@/components/AppSearch"
import Authentication from "@/components/Authentication"
export default {
  name: 'App',
  components: {
  AppTable_filters,
  AppDialog,
  AppSearch,
  Authentication,
  AppTable,
  },
  data () {
    return {
      search: '',
        items: [
          { title: 'Заход', icon: 'mdi-view-dashboard' },
          { title: 'Акцепт', icon: 'mdi-view-dashboard', link: '/akcept'},
          { title: 'Задачи', icon: 'mdi-view-dashboard', link: '/zadachi'},
          { title: 'Уведомления', icon: 'mdi-view-dashboard', link: '/uvedomleniya'},
          { title: 'Документооборот', icon: 'mdi-view-dashboard', link: '/dokumentooborot'},
          { title: 'Техподдержка', icon: 'mdi-view-dashboard', link: '/tehpodderzhka'},
          { title: 'Журнал действий', icon: 'mdi-view-dashboard', link: '/zhurnal_deystviy' },
        ],
        data: []
    };
  }, 
}
</script>

<style lang="scss">

.SGMK_logo {
margin-top: 13px;
margin-left: 15px;
}

.avatar {
  margin-top: 10px;
}

.grey darken-1 {
   margin-top: 10px;
}

</style>