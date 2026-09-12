# Chocomilk SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Chocomilk",
            "slug": "chocomilk",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://chocomilk.amira.us.kg/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "search": {},
                "you_tube": {},
            },
        },
        "entity": {
      "search": {
        "fields": [
          {
            "name": "author",
            "short": "Pin author/creator",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Pin description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Pinterest pin ID",
            "type": "`$STRING`",
          },
          {
            "name": "image",
            "short": "Pin image URL",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Pin title",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Pinterest pin URL",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "minecraft",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search/pinterest",
                "segments": [
                  {
                    "lit": "search",
                  },
                  {
                    "lit": "pinterest",
                  },
                ],
                "select": {
                  "$action": "pinterest",
                  "exist": [
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "search",
                  "pinterest",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "you_tube": {
        "fields": [
          {
            "name": "channel",
            "short": "Channel name",
            "type": "`$STRING`",
          },
          {
            "name": "duration",
            "short": "Video duration",
            "type": "`$STRING`",
          },
          {
            "name": "thumbnail",
            "short": "Video thumbnail URL",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Video title",
            "type": "`$STRING`",
          },
          {
            "name": "videoId",
            "short": "YouTube video ID",
            "type": "`$STRING`",
          },
          {
            "name": "views",
            "short": "View count",
            "type": "`$STRING`",
          },
        ],
        "name": "you_tube",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "mrbeast",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/youtube/search",
                "segments": [
                  {
                    "lit": "youtube",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "select": {
                  "exist": [
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "youtube",
                  "search",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
