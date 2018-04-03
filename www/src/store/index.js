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
    baseURL: baseUrl + 'users/',
    withCredentials: true
});

var baseAPI = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        foundUser: {},
        following: [],
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
        comments: {},
        images: {
            "Bold Red": "https://www.vintageroots.co.uk/blog/wp-content/uploads/2015/08/red-wine-glass.jpg",
            "Medium Red": "https://www.shape.com/sites/shape.com/files/styles/story_detail/public/story/red-wine-holidays_0.jpg?itok=AfwDQZCt",
            "Light Red": "https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/uploads/2017/02/Rose_wine-640x427.jpg",
            "Rose": "https://thewinefeed.com/wp-content/uploads/2017/03/rose1.jpg",
            "Rich White": "http://winegifted.com/wp-content/uploads/2015/09/White-Wine-e1443641480339.jpg",
            "Light White": "https://i0.wp.com/blog.tuscanyholidayrent.com/wp-content/uploads/01-Benvenuto-Vermentino.jpg",
            "Sparkling": "https://www.caymancompass.com/core/wp-content/uploads/2016/08/champagne-verre.jpg",
            "Sweet White": "https://cf.ltkcdn.net/wine/images/orig/203167-2121x1414-whitewine.jpg",
            "Dessert": "http://www.totalwine.com/media/sys_master/cmsmedia/h51/h82/9114567868446.jpg",
        }
    },
    mutations: {
        setFoundUser(state, payload) {
            state.foundUser = payload;
        },
        setFollowers(state, payload) {
            state.following = payload;
        },
        setResults(state, payload) {
            console.log(payload);
            state.bestRes = payload[0];
            state.goodRes = payload[1];
            state.res = payload[2];
        },
        setActiveTypes(state, payload) {
            state.activeTypes = payload;
            // vue.set(state.activeTypes, payload.id, payload.type)
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
            state.comments = []
        },
        setLists(state, payload) {
            // hack to reset the state with current 
            state.lists = {};
            payload.forEach(list => {
                // creates lists as dictionary where key = listId and value = object
                // state.lists[list._id] = list // does not apply a watcher
                vue.set(state.lists, list._id, list) // applies a watcher
            });
        },
        setVineyardWines(state, payload) {
            state.vineyardwines = payload
        },
        setUserWines(state, payload) {
            state.userwines = payload
        },
        setUserComments(state, payload) {
            console.log("SET PAYLOAD: ", payload)
            vue.set(state.comments, payload[1].wineId, payload)
            // state.comments = payload
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
                    return state.vineyardwines.find(function (wine) {
                        return wine._id === vwId
                    })
                })
            }
            return state.lists
        },
        uwInList(state) {
            for (var listId in state.lists) {
                let list = state.lists[listId].userwines
                list.map(uwId => {
                    return state.userwines.find(function (wine) {
                        return wine._id === uwId
                    })
                })
            }
            return state.lists
        },
        // ucInList(state){
        //     for (var listId in state.lists) {
        //         let list = state.lists[listId].userwines
        //         list.map(uwId => {
        //             state.userwines.find(function (wine) {
        //                 wine._id === uwId
        //                 let comment = state.lists[listId].userwines.comments
        //                 comment.map(c => {
        //                     state.userwin
        //                 })
        //             })
        //         })
        //     }
        //     return state.lists
        // }
    },
    actions: {
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

        //region USERCOLLAB
        searchByEmail({ commit, dispatch }, payload) {
            user.get('users')
                .then(res => {
                    var user = {};
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].email == payload.email) {
                            user = res.data[i];
                        }
                    }
                    commit('setFoundUser', user);
                })
                .catch(err => {
                    console.log("ERROR", err);
                })
        },
        followUser({ commit, dispatch }, payload) {
            console.log(payload)
            user.put(payload.user._id, payload)
                .then(res => {
                    console.log("RES.DATA: ", res.data)
                    commit('setFollowers', res.data)
                })
        },
        //endregion

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
        // getUserComments({ commit, dispatch }, payload) {
        //     baseAPI.get('lists/' + payload.listId + '/userwines/' + payload.userwineId + '/comments/')
        //         .then(res => {
        //             commit('setUserComments', { taskId: payload.taskId, comments: res.data })
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // },
        addUserComment({ commit, dispatch }, payload) {
            baseAPI.put('lists/' + payload.listId + '/userwines/' + payload.wineId + '/comments/', payload)
                .then(res => {
                    console.log(res.data)
                    var out = []
                    for (var i = 0; i < res.data.userwines.length; i++) {
                        var wine = res.data.userwines[i]
                        commit('setUserComments', wine.comments)
                    }
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
            baseAPI.put('lists/' + payload.listId + '/vineyardwines/' + payload.wine._id, payload.wine)
                .then(res => {
                    commit('setVineyardWines', res.data.vineyardwines)
                    dispatch('getLists');
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addVineyardWine({ commit, dispatch }, payload) {
            baseAPI.put('lists/' + payload.listId + '/vineyardwines', payload.wine)
                .then(res => {
                    console.log("Vineyard wine successfully added to your list!");
                    // commit('setVineyardWines', res.data.vineyardwines);
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
        deleteUserWine({ commit, dispatch }, payload) {
            console.log(payload);
            baseAPI.put('lists/' + payload.listId + '/userwines/' + payload.userwine._id)
                .then(res => {
                    commit('setUserWines', res.data.userwines);
                    dispatch('getLists');
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addUserWine({ commit, dispatch }, payload) {
            console.log("listId: ", payload.listId)
            baseAPI.put('lists/' + payload.listId + '/userwines', payload.userWine)
                .then(res => {
                    console.log("User wine successfully added to your list!");
                    // console.log("res.data.userwines:", res.data.userwines)
                    // commit('setUserWines', res.data.userwines);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // COME BACK TO THIS
        // editUserWine({ commit, dispatch }, payload) {
        //     baseAPI.put('lists/' + payload.listId + '/userwines')
        //         .then(res => {
        //             dispatch('getUserWines', res.data)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        // endregion USERWINES

        // region LISTS
        getLists({ commit, dispatch }, payload) {
            baseAPI.get('lists/')
                .then(res => {
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
            baseAPI.delete('lists/' + payload)
                .then(res => {
                    dispatch('getLists')
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
        getFriendLists({ commit, dispatch }, payload) {
            console.log("I NEED THIS", payload)

            baseAPI.get('friendslists')
                .then(res => {
                    console.log("RES.DATA", res)
                    var out = []
                    res.data.forEach(arr => {
                        arr.forEach(elem => {
                            out.push(elem)
                        })
                    });
                    commit('setLists', out)
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