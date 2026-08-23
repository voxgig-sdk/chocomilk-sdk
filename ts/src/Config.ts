
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Chocomilk',
        slug: "chocomilk",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://chocomilk.amira.us.kg/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      search: {
      },

      you_tube: {
      },

    }
  }


  entity = {
    "search": {
      "fields": [
        {
          "name": "author",
          "short": "Pin author/creator",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Pin description",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Pinterest pin ID",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "Pin image URL",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Pin title",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Pinterest pin URL",
          "type": "`$STRING`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search/pinterest",
              "parts": [
                "search",
                "pinterest"
              ],
              "select": {
                "$action": "pinterest",
                "exist": [
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "you_tube": {
      "fields": [
        {
          "name": "channel",
          "short": "Channel name",
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "short": "Video duration",
          "type": "`$STRING`"
        },
        {
          "name": "thumbnail",
          "short": "Video thumbnail URL",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Video title",
          "type": "`$STRING`"
        },
        {
          "name": "videoId",
          "short": "YouTube video ID",
          "type": "`$STRING`"
        },
        {
          "name": "views",
          "short": "View count",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/youtube/search",
              "parts": [
                "youtube",
                "search"
              ],
              "select": {
                "exist": [
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

