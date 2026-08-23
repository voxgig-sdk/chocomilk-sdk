<?php
declare(strict_types=1);

// Chocomilk SDK configuration

class ChocomilkConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Chocomilk",
                "slug" => "chocomilk",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://chocomilk.amira.us.kg/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "search" => [],
                    "you_tube" => [],
                ],
            ],
            "entity" => [
        'search' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Pin author/creator',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Pin description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Pinterest pin ID',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image',
              'short' => 'Pin image URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Pin title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'Pinterest pin URL',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'minecraft',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search/pinterest',
                  'parts' => [
                    'search',
                    'pinterest',
                  ],
                  'select' => [
                    '$action' => 'pinterest',
                    'exist' => [
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'you_tube' => [
          'fields' => [
            [
              'name' => 'channel',
              'short' => 'Channel name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'duration',
              'short' => 'Video duration',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'thumbnail',
              'short' => 'Video thumbnail URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Video title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'videoId',
              'short' => 'YouTube video ID',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'views',
              'short' => 'View count',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'you_tube',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'mrbeast',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/youtube/search',
                  'parts' => [
                    'youtube',
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ChocomilkFeatures::make_feature($name);
    }
}
