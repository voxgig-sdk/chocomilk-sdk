# Chocomilk SDK configuration

module ChocomilkConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Chocomilk",
        "slug" => "chocomilk",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://chocomilk.amira.us.kg/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "search" => {},
          "you_tube" => {},
        },
      },
      "entity" => {
        "search" => {
          "fields" => [
            {
              "name" => "author",
              "short" => "Pin author/creator",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Pin description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Pinterest pin ID",
              "type" => "`$STRING`",
            },
            {
              "name" => "image",
              "short" => "Pin image URL",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Pin title",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "short" => "Pinterest pin URL",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "minecraft",
                        "kind" => "query",
                        "name" => "query",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search/pinterest",
                  "segments" => [
                    {
                      "lit" => "search",
                    },
                    {
                      "lit" => "pinterest",
                    },
                  ],
                  "select" => {
                    "$action" => "pinterest",
                    "exist" => [
                      "query",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "parts" => [
                    "search",
                    "pinterest",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "you_tube" => {
          "fields" => [
            {
              "name" => "channel",
              "short" => "Channel name",
              "type" => "`$STRING`",
            },
            {
              "name" => "duration",
              "short" => "Video duration",
              "type" => "`$STRING`",
            },
            {
              "name" => "thumbnail",
              "short" => "Video thumbnail URL",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Video title",
              "type" => "`$STRING`",
            },
            {
              "name" => "videoId",
              "short" => "YouTube video ID",
              "type" => "`$STRING`",
            },
            {
              "name" => "views",
              "short" => "View count",
              "type" => "`$STRING`",
            },
          ],
          "name" => "you_tube",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "mrbeast",
                        "kind" => "query",
                        "name" => "query",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/youtube/search",
                  "segments" => [
                    {
                      "lit" => "youtube",
                    },
                    {
                      "lit" => "search",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "query",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "parts" => [
                    "youtube",
                    "search",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ChocomilkFeatures.make_feature(name)
  end
end
