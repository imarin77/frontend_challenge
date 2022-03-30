<template>
    <div class="main">
        <h1>Design Your Simple Workflow</h1>
        <search-and-add v-if="loaded"></search-and-add>
        <display-nodes></display-nodes>
    </div>
</template>

<script>
import SearchAndAdd from './components/SearchAndAdd.vue';
import DisplayNodes from './components/DisplayNodes.vue';
import nodeData from "./data/data.json";
import store from "@/store";

export default {
    name: 'App',
    components: {
        SearchAndAdd, DisplayNodes
    },
    data(){
        return{
            loaded: false,
        }
    },
    async mounted() {
        await store.dispatch('setUpNodeTypes', nodeData);
        this.loaded = true;
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
}

.main{
    width: 80%;
    margin: auto;
    padding: 30px 60px;
    border: 3px solid #ffd800;
    border-radius: 0.25rem;

    @media only screen and (max-width: 650px){
        width: 90%;
        padding: 30px 20px;
    }
    @media only screen and (max-width: 650px){
        width: 80%;
    }

}
</style>
