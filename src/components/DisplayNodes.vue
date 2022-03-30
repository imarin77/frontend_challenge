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
import SingleNode from "@/components/SingleNode";
import draggable from "vuedraggable";
import store from "@/store";

export default {
    name: 'DisplayNodes',
    components: {SingleNode, draggable},
    computed: {
        nodeList() {
            return store.getters.getNodeList;
        }
    },
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
