-- Chocomilk SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Chocomilk",
      slug = "chocomilk",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://chocomilk.amira.us.kg/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["search"] = {},
        ["you_tube"] = {},
      },
    },
    entity = {
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Pin author/creator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Pin description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Pinterest pin ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image",
            ["short"] = "Pin image URL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Pin title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "Pinterest pin URL",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "minecraft",
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search/pinterest",
                ["parts"] = {
                  "search",
                  "pinterest",
                },
                ["select"] = {
                  ["$action"] = "pinterest",
                  ["exist"] = {
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["you_tube"] = {
        ["fields"] = {
          {
            ["name"] = "channel",
            ["short"] = "Channel name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "duration",
            ["short"] = "Video duration",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "thumbnail",
            ["short"] = "Video thumbnail URL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Video title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "videoId",
            ["short"] = "YouTube video ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "views",
            ["short"] = "View count",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "you_tube",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "mrbeast",
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/youtube/search",
                ["parts"] = {
                  "youtube",
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
