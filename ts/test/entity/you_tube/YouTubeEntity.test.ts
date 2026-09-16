

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ChocomilkSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('YouTubeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CHOCOMILK_TEST_LIVE=TRUE.
  afterEach(liveDelay('CHOCOMILK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ChocomilkSDK.test()
    const ent = testsdk.YouTube()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CHOCOMILK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'you_tube.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"channel","req":false,"short":"Channel name","type":"`$STRING`","index$":0},{"active":true,"name":"duration","req":false,"short":"Video duration","type":"`$STRING`","index$":1},{"active":true,"name":"thumbnail","req":false,"short":"Video thumbnail URL","type":"`$STRING`","index$":2},{"active":true,"name":"title","req":false,"short":"Video title","type":"`$STRING`","index$":3},{"active":true,"name":"videoId","req":false,"short":"YouTube video ID","type":"`$STRING`","index$":4},{"active":true,"name":"views","req":false,"short":"View count","type":"`$STRING`","index$":5}],"name":"you_tube","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"mrbeast","kind":"query","name":"query","orig":"query","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /youtube/search","json":"{\"operationId\":\"searchYouTube\",\"parameters\":[{\"description\":\"Search query for YouTube videos\",\"example\":\"mrbeast\",\"in\":\"query\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"results\":{\"items\":{\"properties\":{\"channel\":{\"description\":\"Channel name\",\"type\":\"string\"},\"duration\":{\"description\":\"Video duration\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"Video thumbnail URL\",\"type\":\"string\"},\"title\":{\"description\":\"Video title\",\"type\":\"string\"},\"videoId\":{\"description\":\"YouTube video ID\",\"type\":\"string\"},\"views\":{\"description\":\"View count\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"description\":\"Response status\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with YouTube search results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":400,\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"example\":\"Invalid query parameter\",\"type\":\"string\"},\"status\":{\"description\":\"Error status\",\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - missing or invalid query parameter\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":400,\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"example\":\"Invalid query parameter\",\"type\":\"string\"},\"status\":{\"description\":\"Error status\",\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/youtube/search","segments":[{"lit":"youtube"},{"lit":"search"}],"select":{"exist":["query"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"you_tube","name__orig":"you_tube","Name":"YouTube","name_":"you_tube","name-":"you-tube","NAME":"YOU_TUBE","index$":1}, {"active":true,"entity":"you_tube","key$":"BasicYouTubeFlow","kind":"basic","name":"BasicYouTubeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"you_tube_ref01"}}],"index$":0}]}, 'YouTube')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let you_tube_ref01_data = Object.values(setup.data.existing.you_tube)[0] as any

    // LIST
    const you_tube_ref01_ent = client.YouTube()
    const you_tube_ref01_match: any = {}

    const you_tube_ref01_list = (await you_tube_ref01_ent.list(you_tube_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/you_tube/YouTubeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ChocomilkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['you_tube01','you_tube02','you_tube03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CHOCOMILK_TEST_YOU_TUBE_ENTID': idmap,
    'CHOCOMILK_TEST_LIVE': 'FALSE',
    'CHOCOMILK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CHOCOMILK_TEST_YOU_TUBE_ENTID']

  const live = 'TRUE' === env.CHOCOMILK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CHOCOMILK_TEST_YOU_TUBE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ChocomilkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
