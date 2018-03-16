import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router/index";

var baseUrl = '//localhost:3000/'

var auth = axios.create({
    baseURL: baseUrl + 'auth/',
    withCredentials: true
});

var wineAPI = axios.create({
    baseURL: baseUrl + 'api/',
    withCredentials: true
});

var user = axios.create({
    baseURL: baseUrl + 'user/',
    withCredentials: true
});

var baseAPI = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {},
        board: {},
        boards: [],
        lists: [],
        results: [],
        userWines: {},
        comments: {}
    },
    mutations: {
        setResults(state, payload) {
            state.results = payload;
        },

        // START AUTH MUTATIONS
        loginUser(state, payload) {
            state.user = payload
        },
        clearData(state, payload) {
            state.user = {}
            state.board = {}
            state.boards = []
            state.lists = []
            state.userWines = []
            state.comments = {}
        }
    },
    actions: {

        //region WINESEARCH
        getResults({ commit, dispatch }, payload) {
            console.log(payload);
            wineAPI.get('wines')
                .then(wines => {
                    var wineList = wines.data;
                    var categories = ["meats", "dairy", "vegetables", "starches", "sweets"];
                    var dict = {}
                    var bestPairs = []
                    var goodPairs = []
                    var pairs = []
                    for (var i = 0; i < wineList.length; i++) {
                        var wineVariety = wineList[i];
                        for (var j = 0; j < categories.length; j++) {
                            var category = categories[j];
                            for (var k = 0; k < payload.length; k++) {
                                var ingredient = payload[k];
                                if (wineVariety[category]["perfectPairs"].includes(ingredient) || (wineVariety[category]["pairs"].includes(ingredient))) {
                                    var name = wineVariety.variety
                                    if (!dict[name]) {
                                        dict[name] = {}
                                        dict[name]["count"] = 1
                                        dict[name]["val"] = wineVariety
                                    } else {
                                        dict[name].count++
                                    }
                                }
                            }
                        }
                    }

                    for (var key in dict) {
                        var wine = dict[key]
                        if (wine.count == 3) {
                            bestPairs.push(wine.val)
                        } else if (wine.count == 2) {
                            goodPairs.push(wine.val)
                        } else if (wine.count == 1) {
                            pairs.push(wine.val)
                        }

                    }
                    console.log("BEST PAIRS: ", bestPairs);
                    console.log("GOOD PAIRS: ", goodPairs);
                    console.log("PAIRS: ", pairs);
                    // commit('setResults', dict)
                    // return pairs;
                })

                .catch(err => {
                    console.log(err);
                })
        },



        //endregion WINESEARCH

        // region COMMENTS
        getComments({ commit, dispatch }, payload) {
            serverAPI.get('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments')
                .then(res => {
                    commit('setComments', { taskId: payload.taskId, comments: res.data })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addComment({ commit, dispatch }, payload) {
            serverAPI.post('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments', payload)
                .then(res => {
                    dispatch('getComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteComment({ commit, dispatch }, payload) {
            serverAPI.delete('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments/' + payload._id)
                .then(res => {
                    dispatch('getComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        // endregion COMMENTS

        // region TASKS
        moveToList({ commit, dispatch }, payload) {
            console.log("Moved task:", payload);
            serverAPI.put('boards/' + payload.task.boardId + '/lists/' + payload.listId + '/tasks/' + payload.task._id,
                {
                    boardId: payload.task.boardId,
                    body: payload.task.body,
                    listId: payload.listId
                })
                .then(res => {
                    console.log(res.data)
                    dispatch('getTasks',
                        {
                            listId: res.data.listId,
                            boardId: res.data.boardId
                        })
                    dispatch('getTasks',
                        {
                            boardId: res.data.boardId,
                            listId: payload.oldId
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getTasks({ commit, dispatch }, payload) {
            serverAPI.get('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks')
                .then(res => {
                    commit('setTasks', { listId: payload.listId, tasks: res.data })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        // getUpdatedTasks({commit, dispatch}, payload) {
        //     serverAPI.get('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks')
        //         .then(res => {
        //             console.log("Setting tasks with: ", res.data)
        //             commit('setTasks', res.data)
        //             })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        deleteTask({ commit, dispatch }, payload) {
            serverAPI.delete('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload._id)
                .then(res => {
                    dispatch('getTasks', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addTask({ commit, dispatch }, payload) {
            serverAPI.post('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks', payload)
                .then(res => {
                    dispatch('getTasks', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editTask({ commit, dispatch }, payload) {
            serverAPI.put('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload._id, payload)
                .then(res => {
                    dispatch('getTasks', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        // endregion   

        // region LISTS
        getLists({ commit, dispatch }, payload) {
            console.log(payload)
            baseAPI.get('lists/' + payload + '/lists')
                .then(res => {
                    commit('setLists', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addList({ commit, dispatch }, payload) {
            baseAPI.post('boards/' + payload.boardId + '/lists', payload.name)
                .then(res => {
                    dispatch('getLists', res.data.boardId);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteList({ commit, dispatch }, payload) {
            baseAPI.delete('boards/' + payload.boardId + '/lists/' + payload.listId)
                .then(res => {
                    dispatch('getLists', res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        editList({ commit, dispatch }, payload) {
            baseAPI.put('boards/' + payload.boardId + '/lists/' + payload._id, payload)
                .then(res => {
                    dispatch('getLists', res.data.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // endregion

        //region START AUTH ROUTES
        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(res => {
                    commit('loginUser', res.data.user)
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.log(err);
                    console.log('INVALID USERNAME OR PASSWORD')
                })
        },
        authenticate({ commit, dispatch }) {
            return new Promise((resolve, reject) => {
                auth.get('authenticate')
                    .then(res => {
                        commit('loginUser', res.data)
                        resolve()
                        // router.push({ name: 'Home' })
                    })
                    .catch(err => {
                        console.log(err)
                        router.push({ name: 'Login' })
                        reject(err)
                    })
            })
        },
        signup({ commit, dispatch }, payload) {
            auth.post('register', payload)
                .then(res => {
                    console.log(res.data.user)
                    commit('loginUser', res.data.user)
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        logout({ commit, dispatch }) {
            auth.delete('logout')
                .then(res => {
                    commit('loginUser', {})
                    commit('clearData', res)
                    router.push({ name: 'Login' })
                })
        }
        //endregion END AUTH ACTIONS

    }
})