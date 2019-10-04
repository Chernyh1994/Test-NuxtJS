<template>
    <div>

        <v-navigation-drawer
            color = "primary"
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                router
                exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text headline" v-text="item.title" />
                     </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            color = "primary"
            :clipped-left="clipped"
            fixed
            app
        >
            <v-app-bar-nav-icon class="white--text headline" @click.stop="drawer = !drawer" />
                <v-btn
                    class="white--text headline"
                    icon
                    @click.stop="miniVariant = !miniVariant"
                >
                    <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
                </v-btn>
            <v-toolbar-title class="white--text headline" v-text="title" />
            <v-spacer />
            
            <nuxt-link to="/login">
                <v-avatar color="#26C4DA">
                    <span class="white--text headline">CJ</span>
                </v-avatar>
            </nuxt-link>

        </v-app-bar>

    </div>
</template>

<script>
export default {
    
  methods: {
    inspire() {
    }
  },

  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-twitter-circle mdi-light',
          title: 'All Twitter',
          to: '/',
        },
        {
          icon: 'mdi-account-key mdi-light',
          title: 'Inspire',
          to: '/inspire',
          emit: console.log('dddddddddd')
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'MyTest'
    }
  }
}
</script>