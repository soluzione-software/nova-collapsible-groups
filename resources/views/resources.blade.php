@foreach($navigation as $group => $resources)
    <resources-group :groups-count="{{ count($groups) }}">
        @include('nova-collapsible-groups::group')

        <ul class="list-reset mb-8">
            @foreach ($resources as $key => $resource)
                @include('nova-collapsible-groups::resource')
            @endforeach
        </ul>
    </resources-group>
@endforeach
