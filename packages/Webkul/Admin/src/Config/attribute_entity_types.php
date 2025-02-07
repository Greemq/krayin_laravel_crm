<?php

return [
    'leads'         => [
        'name'       => 'Лиды',
        'repository' => 'Webkul\Lead\Repositories\LeadRepository',
    ],

    'persons'       => [
        'name'       => 'Контакты - Персоны',
        'repository' => 'Webkul\Contact\Repositories\PersonRepository',
    ],

    'organizations' => [
        'name'       => 'Контакты - Организации',
        'repository' => 'Webkul\Contact\Repositories\OrganizationRepository',
    ],

    'products'      => [
        'name'       => 'Продукты',
        'repository' => 'Webkul\Product\Repositories\ProductRepository',
    ],

    'quotes'      => [
        'name'       => 'Котировки',
        'repository' => 'Webkul\Quote\Repositories\QuoteRepository',
    ],

    'warehouses'      => [
        'name'       => 'Складские помещения',
        'repository' => 'Webkul\Warehouse\Repositories\WarehouseRepository',
    ],
];
