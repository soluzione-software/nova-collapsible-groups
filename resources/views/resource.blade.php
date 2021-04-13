<li class="leading-tight mb-4 ml-8 text-sm">
    <router-link
            :to="{
                name: 'index',
                params: {
                    resourceName: '{{ $resource::uriKey() }}'
                }
            }"
            class="text-white text-justify no-underline dim"
            dusk="{{ $resource::uriKey() }}-resource-link"
    >
        {{ $resource::label() }}
    </router-link>
</li>
