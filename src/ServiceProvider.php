<?php

namespace SoluzioneSoftware\NovaCollapsibleGroups;

use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Laravel\Nova\Nova;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->views();

        Nova::serving(function () {
            Nova::script('resources-group', __DIR__.'/../dist/js/index.js');
        });
    }

    private function views()
    {
        $this->publishes([
            __DIR__.'/../resources/vendor-views' => App::resourcePath('views/vendor'),
        ], ['views', 'nova-collapsible-groups', 'nova-collapsible-groups-vendor-views']);

        $this->publishes([
            __DIR__.'/../resources/views' => App::resourcePath('views/vendor/nova-collapsible-groups'),
        ], ['views', 'nova-collapsible-groups', 'nova-collapsible-groups-views']);

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'nova-collapsible-groups');
    }
}
