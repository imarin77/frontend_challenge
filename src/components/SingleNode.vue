<template>
    <div class="node">
        <p class="text-strong fixed-height">{{ node.query.short_desc }}</p>
        <img :src="node.query.picture" :alt="node.query.title" />
        <p>{{ node.query.title }}</p>
    </div>
</template>

<script>
export default {
    name: 'SingleNode',
    props: {
        node: {
            type: Object,
            required: true,
        }
    },
    mounted() {
        console.log(this.node)
    }
}
</script>

<style lang="scss">
.node{
    padding: 0 20px;

    .text-strong{
        font-weight: 600;
    }

    .fixed-height{
        height: 40px;
    }
}
</style>
