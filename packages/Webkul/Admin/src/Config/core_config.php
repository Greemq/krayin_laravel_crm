<?php

return [
    [
        'key'  => 'general',
        'name' => 'Общие настройки',
        'info' => 'Общая информация',
        'sort' => 1,
    ], [
        'key'  => 'general.general',
        'name' => 'Основные параметры',
        'info' => 'Основные сведения',
        'icon' => 'icon-setting',
        'sort' => 1,
    ], [
        'key'    => 'general.general.locale_settings',
        'name'   => 'Настройки локали',
        'info'   => 'Выбор языка и региона',
        'sort'   => 1,
        'fields' => [
            [
                'name'    => 'locale',
                'title'   => 'Настройки локали',
                'type'    => 'select',
                'default' => 'en',
                'options' => 'Webkul\Core\Core@locales',
            ],
        ],
    ],
];
