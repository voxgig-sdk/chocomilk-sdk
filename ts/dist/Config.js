"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Chocomilk',
        slug: "chocomilk",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://chocomilk.amira.us.kg/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            search: {},
            you_tube: {},
        }
    };
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
            "id": {
                "field": "id",
                "name": "id"
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
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search/pinterest",
                            "segments": [
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "pinterest"
                                }
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
                            },
                            "parts": [
                                "search",
                                "pinterest"
                            ]
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
                            "segments": [
                                {
                                    "lit": "youtube"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "youtube",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map