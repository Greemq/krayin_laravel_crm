<?php

return [
    'leads' => [
        'name'         => 'Лиды',
        'repository'   => 'Webkul\Lead\Repositories\LeadRepository',
        'label_column' => 'title',
    ],

    'lead_sources' => [
        'name'         => 'Источники лидов',
        'repository'   => 'Webkul\Lead\Repositories\SourceRepository',
    ],

    'lead_types' => [
        'name'         => 'Типы лидов',
        'repository'   => 'Webkul\Lead\Repositories\TypeRepository',
    ],

    'lead_pipelines' => [
        'name'         => 'Конвейеры лидов',
        'repository'   => 'Webkul\Lead\Repositories\PipelineRepository',
    ],

    'lead_pipeline_stages' => [
        'name'         => 'Этапы конвейера лидов',
        'repository'   => 'Webkul\Lead\Repositories\StageRepository',
    ],

    'users' => [
        'name'         => 'Ответственные за продажи',
        'repository'   => 'Webkul\User\Repositories\UserRepository',
    ],

    'organizations' => [
        'name'         => 'Организации',
        'repository'   => 'Webkul\Contact\Repositories\OrganizationRepository',
    ],

    'persons' => [
        'name'         => 'Persons',
        'repository'   => 'Webkul\Contact\Repositories\PersonRepository',
    ],

    'warehouses' => [
        'name'         => 'Warehouses',
        'repository'   => 'Webkul\Warehouse\Repositories\WarehouseRepository',
    ],

    'locations' => [
        'name'         => 'Locations',
        'repository'   => 'Webkul\Warehouse\Repositories\LocationRepository',
    ],
];
