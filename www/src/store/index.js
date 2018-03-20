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
        lists: {},
        bestRes: [],
        goodRes: [],
        res: [],
        activeTypes: {},
        vineyardwines: [],
        userwines: [],
        comments: {}
    },
    mutations: {
        setResults(state, payload) {
            console.log(payload);
            state.bestRes = payload[0];
            state.goodRes = payload[1];
            state.res = payload[2];
        },
        setActiveTypes(state, payload) {
            vue.set(state.activeTypes, payload.id, payload.type)
        },
        clearActiveTypes(state) {
            state.activeTypes = {}
            console.log(state.activeTypes)
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
            state.vineyardwines = []
            state.userwines = []
            state.comments = {}
        },
        setLists(state, payload) {
            payload.forEach(list => {
                // creates lists as dictionary where key = listId and value = object
                state.lists[list._id] = list
            });
        },
        setVineyardWines(state, payload) {
            state.vineyardwines = payload
        },
        setUserWines(state, payload) {
            // this will probably change
            state.userwines = payload.type
        },
        clearVineyardWines(state) {
            state.vineyardwines = []
        }
    },
    getters: {
        vwInList(state) {
            for (var listId in state.lists) {
                let list = state.lists[listId].vineyardwines   
                list.map(vwId => {
                    // @ts-ignore
                    return state.vineyardwines.find(function (wine) {
                        return wine._id === vwId
                    })
                })
            }
            return state.lists
        }
    },
    actions: {

        setActiveTypes({ commit, dispatch }, payload) {
            commit('setActiveTypes', { type: payload.type, id: payload._id });
        },
        clearActiveTypes({ commit, dispatch }) {
            commit('clearActiveTypes')
        },
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
                    console.log("DICTIONARY ", dict)
                    for (var key in dict) {
                        var wine = dict[key]
                        if (wine.count == payload.length) {
                            bestPairs.push(wine.val)
                        } else if (wine.count == payload.length - 1) {
                            goodPairs.push(wine.val)
                        } else if (wine.count == payload.length - 2) {
                            pairs.push(wine.val)
                        }

                    }
                    console.log("BEST PAIRS: ", bestPairs);
                    console.log("GOOD PAIRS: ", goodPairs);
                    console.log("PAIRS: ", pairs);

                    var out = [];
                    out.push(bestPairs);
                    out.push(goodPairs);
                    out.push(pairs);
                    commit('setResults', out)
                })

                .catch(err => {
                    console.log(err);
                })

        },
        refResults({ commit, dispatch }, payload) {
            console.log("Are we in here?", payload)
            wineAPI.get('wines')
                .then(wines => {
                    var out = [];
                    for (var i = 0; i < wines.data.length; i++) {
                        var wineVariety = wines[i];
                        for (var j = 0; j < payload.length; j++) {
                            var subArr = payload[j];
                            var variety = subArr[0];
                            if (wineVariety.variety == variety) {
                                out.push(wineVariety);
                            }
                        }
                    }
                    console.log(out);
                    return out
                })
                .catch(next => {
                    // console.log(err);
                })
        },



        //endregion WINESEARCH

        // region VINEYARDWINE COMMENTS
        getVWComments({ commit, dispatch }, payload) {
            baseAPI.get('lists/' + payload.lisId + '/vineyardwines/' + payload.vineyardwineId + '/comments/')
                .then(res => {
                    commit('setVWComments', { taskId: payload.taskId, comments: res.data })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addVWComment({ commit, dispatch }, payload) {
            baseAPI.post('lists/' + payload.lisId + '/vineyardwines/' + payload.vineyardwineId + '/comments/', payload)
                .then(res => {
                    dispatch('getVWComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteVWComment({ commit, dispatch }, payload) {
            baseAPI.delete('lists/' + payload.lisId + '/vineyardwines/' + payload.vineyardwineId + '/comments/' + payload.commentId)
                .then(res => {
                    dispatch('getVWComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editVWComment({ commit, dispatch }, payload) {
            baseAPI.put('lists/' + payload.lisId + '/vineyardwines/' + payload.vineyardwineId + '/comments/' + payload.commentId)
                .then(res => {
                    dispatch('getVWComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        // endregion VINEYARDWINE COMMENTS

        // region USERWINE COMMENTS
        getUserComments({ commit, dispatch }, payload) {
            baseAPI.get('lists/' + payload.lisId + '/userwines/' + payload.userwineId + '/comments/')
                .then(res => {
                    commit('setUserComments', { taskId: payload.taskId, comments: res.data })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addUserComment({ commit, dispatch }, payload) {
            baseAPI.post('lists/' + payload.lisId + '/userwines/' + payload.userwineId + '/comments/', payload)
                .then(res => {
                    dispatch('getUserComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteUserComment({ commit, dispatch }, payload) {
            baseAPI.delete('lists/' + payload.listId + '/userwines/' + payload.userwineId + '/comments/' + payload.commentId)
                .then(res => {
                    dispatch('getUserComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editUserComment({ commit, dispatch }, payload) {
            baseAPI.put('lists/' + payload.listId + '/userwines/' + payload.wineId + '/comments/' + payload.commentId)
                .then(res => {
                    dispatch('getUserComments', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // endregion USERWINE COMMENTS

        // region VINEYARDWINES
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

        getAllVineyardWines({ commit, dispatch }) {
            baseAPI.get('/vineyardwines')
                .then(res => {
                    console.log(res)
                    commit('setVineyardWines', res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        deleteVineyardWine({ commit, dispatch }, payload) {
            baseAPI.delete('lists/' + payload.listId + '/vineyardwines/' + payload._id)
                .then(res => {
                    dispatch('getTasks', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addVineyardWine({ commit, dispatch }, payload) {
            baseAPI.put('lists/' + payload.listId + '/vineyardwines', payload.type)
                .then(res => {
                    console.log("Vineyard wine successfully added to your list!");
                    // dispatch('getVineyardWines', payload);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        clearVineyardWines({ commit, dispatch }) {
            commit('clearVineyardWines')
        },
        // EDIT FUNCTION OMITTED ON VINEYARD WINES BECAUSE WE DON'T WANT USERS TO CHANGE THE DATA
        // endregion

        // region USERWINES
        getUserWines({ commit, dispatch }, payload) {
            baseAPI.get('lists/' + payload.listId + '/userwines')
                .then(res => {
                    console.log(res)
                    commit('setUserWines', { listId: payload.listId, type: res.data })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        deleteUserWine({ commit, dispatch }, payload) {
            baseAPI.delete('lists/' + payload.listId + '/userwines/' + payload._id)
                .then(res => {
                    dispatch('getUserWines', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addUserWine({ commit, dispatch }, payload) {
            baseAPI.post('lists/' + payload.listId + '/userwines', payload.type)
                .then(res => {
                    console.log("User wine successfully added to your list!");
                    dispatch('getUserWines', payload);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editUserWine({ commit, dispatch }, payload) {
            baseAPI.put('lists/' + payload.listId + '/userwines')
                .then(res => {
                    dispatch('getUserWines', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },


        // endregion USERWINES

        // region LISTS
        getLists({ commit, dispatch }, payload) {
            baseAPI.get('lists/')
                .then(res => {
                    console.log(res.data)
                    commit('setLists', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addList({ commit, dispatch }, payload) {
            console.log(payload.title)
            baseAPI.post('lists/', payload.title)
                .then(res => {
                    dispatch('getLists', res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteList({ commit, dispatch }, payload) {
            baseAPI.delete('lists/:listId')
                .then(res => {
                    dispatch('getLists', res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        editList({ commit, dispatch }, payload) {
            baseAPI.put('lists/:listId')
                .then(res => {
                    dispatch('getLists', res.data)
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
        createUser({ commit, dispatch }, payload) {
            auth.post('register', payload)
                .then(res => {
                    // console.log(res.data.user)
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