<template>
        <div class="userwine">
            <div class="row flexor">
                <div class="col-sm-12">
                    <p class="name">{{userwine.name}}</p>
                </div>
                <div class="col-sm-12">
                    <p>{{userwine.description}}</p>
                </div>
                <button @click="deleteUW(userwine)">Delete wine from List</button>
            </div>
        </div>
    </template>
    
    <script>
        // import Comment from './Comment'
        export default {
            name: 'UserWine',
            data() {
                return {
    
                }
            },
            props: ['userwine', 'listId'],
            methods: {
                deleteUW(uw) {
                    this.$store.dispatch('deleteUserWine', {listId: this.listId, userwine: uw})
                }
            }
        }
    
    </script>
    
    <style scoped>
        .flexor {
            display: flex;
            flex-direction: column
        }
    
        .name {
            font-weight: 700
        }
    
        .bg-1 {
            background-color: #cfbc8b;
            background-image: url("https://www.transparenttextures.com/patterns/notebook.png");
        }
    </style>