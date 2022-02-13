import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        games: []
    },
    mutations: {
        setGames(state, games) {
            state.games = games;
            //console.log(state.games);
        },
        getGames(state) {
            return state.games;
        },

    },
    actions: {

        async getGames(state) {
            axios('https://public.connectnow.org.uk/applicant-test/').then(response => {
                this.commit('setGames', response.data);
            });

        }

    },
    modules: {}
})