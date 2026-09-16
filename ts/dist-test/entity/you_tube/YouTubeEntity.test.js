"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('YouTubeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CHOCOMILK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CHOCOMILK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ChocomilkSDK.test();
        const ent = testsdk.YouTube();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CHOCOMILK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'you_tube.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "channel", "req": false, "short": "Channel name", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "duration", "req": false, "short": "Video duration", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "thumbnail", "req": false, "short": "Video thumbnail URL", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "title", "req": false, "short": "Video title", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "videoId", "req": false, "short": "YouTube video ID", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "views", "req": false, "short": "View count", "type": "`$STRING`", "index$": 5 }], "name": "you_tube", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "mrbeast", "kind": "query", "name": "query", "orig": "query", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /youtube/search", "json": "{\"operationId\":\"searchYouTube\",\"parameters\":[{\"description\":\"Search query for YouTube videos\",\"example\":\"mrbeast\",\"in\":\"query\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"results\":{\"items\":{\"properties\":{\"channel\":{\"description\":\"Channel name\",\"type\":\"string\"},\"duration\":{\"description\":\"Video duration\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"Video thumbnail URL\",\"type\":\"string\"},\"title\":{\"description\":\"Video title\",\"type\":\"string\"},\"videoId\":{\"description\":\"YouTube video ID\",\"type\":\"string\"},\"views\":{\"description\":\"View count\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"description\":\"Response status\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with YouTube search results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":400,\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"example\":\"Invalid query parameter\",\"type\":\"string\"},\"status\":{\"description\":\"Error status\",\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - missing or invalid query parameter\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":400,\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"example\":\"Invalid query parameter\",\"type\":\"string\"},\"status\":{\"description\":\"Error status\",\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/youtube/search", "segments": [{ "lit": "youtube" }, { "lit": "search" }], "select": { "exist": ["query"] }, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "you_tube", "name__orig": "you_tube", "Name": "YouTube", "name_": "you_tube", "name-": "you-tube", "NAME": "YOU_TUBE", "index$": 1 }, { "active": true, "entity": "you_tube", "key$": "BasicYouTubeFlow", "kind": "basic", "name": "BasicYouTubeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "you_tube_ref01" } }], "index$": 0 }] }, 'YouTube');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let you_tube_ref01_data = Object.values(setup.data.existing.you_tube)[0];
        // LIST
        const you_tube_ref01_ent = client.YouTube();
        const you_tube_ref01_match = {};
        const you_tube_ref01_list = (await you_tube_ref01_ent.list(you_tube_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/you_tube/YouTubeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ChocomilkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['you_tube01', 'you_tube02', 'you_tube03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CHOCOMILK_TEST_YOU_TUBE_ENTID': idmap,
        'CHOCOMILK_TEST_LIVE': 'FALSE',
        'CHOCOMILK_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CHOCOMILK_TEST_YOU_TUBE_ENTID'];
    const live = 'TRUE' === env.CHOCOMILK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CHOCOMILK_TEST_YOU_TUBE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ChocomilkSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CHOCOMILK_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=YouTubeEntity.test.js.map