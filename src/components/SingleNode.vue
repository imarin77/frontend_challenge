<template>
    <div class="node">
        <p class="text-strong fixed-height">{{ node.short_desc }}</p>
        <img :src="node.picture" :alt="node.title" />
        <p>{{ node.title }}</p>
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
