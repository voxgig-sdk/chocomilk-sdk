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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "image",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
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
                  "parts" => [
                    "search",
                    "pinterest",
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
              "type" => "`$STRING`",
            },
            {
              "name" => "duration",
              "type" => "`$STRING`",
            },
            {
              "name" => "thumbnail",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "videoId",
              "type" => "`$STRING`",
            },
            {
              "name" => "views",
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
                  "parts" => [
                    "youtube",
                    "search",
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
