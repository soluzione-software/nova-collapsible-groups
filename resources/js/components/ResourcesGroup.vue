<template>
    <div>
        <slot name="group" :expanded="expanded" :toggle="() => this.expanded = !this.expanded"/>

        <slot v-if="expanded || groupsCount === 1"/>
    </div>
</template>

<script>
export default {
    props: {
        groupsCount: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            expanded: false,
        };
    },
}
</script>
