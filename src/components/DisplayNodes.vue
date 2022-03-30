<template>
    <div>
        <div>
            <draggable
                v-model="nodeList"
                item-key="order"
                ghostClass="on-drag"
                animation="600"
                draggable=".node"
            class="node-wrap">
                <template #item="{ element }">
                    <single-node :node="element"></single-node>
                </template>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import SingleNode from "@/components/SingleNode";
import store from "@/store";

export default {
    name: 'DisplayNodes',
    computed: {
        nodeList: {
            get(){
                return store.getters.getSelectedNodes;
            },
            set(newValue){
                store.dispatch('reorderSelectedNodes', newValue);
            }

        }
    },
    components: {SingleNode, draggable}
}
</script>

<style lang="scss">
.node-wrap{
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media only screen and (max-width: 1199.98px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 575.98px){
        grid-template-columns: repeat(1, 1fr);
    }

}
</style>
