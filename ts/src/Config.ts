
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


  main = {
    name: 'Chocomilk',
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
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        },
        {
          "name": "url",
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
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "type": "`$STRING`"
        },
        {
          "name": "thumbnail",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        },
        {
          "name": "videoId",
          "type": "`$STRING`"
        },
        {
          "name": "views",
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

