<template>
    <div class="search-wrap">
        <v-select placeholder="Add new node" :filter="fuseSearch" :options="nodeList"
                  :getOptionLabel="option => option.title" v-model="query">
            <template #option="{short_desc, title}">
                {{ title }} <br>
                <cite>{{ short_desc }}</cite>
            </template>
        </v-select>
        <button class="btn btn-add" @click="addNodeToScreen">Add Node</button>
    </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Fuse from 'fuse.js'
import store from "@/store";

export default {
    name: 'SearchAndAdd',
    components: {vSelect},
    data() {
        return {
            nodeList: [],
            query: "",
        }
    },
    mounted() {
        this.nodeList = store.getters.getAllNodes;
    },
    methods: {
        fuseSearch(options, query) {
            const fuse = new Fuse(this.nodeList, {
                keys: ['title', 'short_desc']
            });
            return (query.length ? fuse.search(query).map(({ item }) => item) : fuse.list);
        },
        addNodeToScreen() {
            this.$emit("addNodeToDisplay", this.query)
            this.query = "";
        }
    },
}
</script>

<style lang="scss">
.search-wrap {
    width: 500px;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
        display: block;
    }

    @media only screen and (max-width: 575px) {
        width: 90%;
    }

    .v-select {
        width: 400px;

        @media only screen and (max-width: 650px) {
            width: 100%;
            margin-bottom: 20px;
        }

        .vs__dropdown-menu{
            color: black;
            .vs__dropdown-option{
                color: black
            }
        }
    }

    .btn {
        display: inline-block;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        padding: 0.5rem 0.9rem;
        border-radius: 0.25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    .btn-add {
        background-color: #ffd800;
        color: black;
        border: 1px solid #ffd800;

        &:hover {
            color: #fff;
            background-color: #3e3a39;
            border: 1px solid #3e3a39;
        }
    }
}
</style>
