@if (count($groups) > 1)
    <h4
            class="ml-8 mb-4 text-xs dim text-white-50% uppercase tracking-wide cursor-pointer"
            slot="group"
            slot-scope="{ expanded, toggle }"
            @click.prevent="toggle()"
    >
        {{ $group }}
        <template v-if="expanded">&minus;</template>
        <template v-else>&plus;</template>
    </h4>
@endif
