package voxgigchocomilksdk

import (
	"github.com/voxgig-sdk/chocomilk-sdk/go/core"
	"github.com/voxgig-sdk/chocomilk-sdk/go/entity"
	"github.com/voxgig-sdk/chocomilk-sdk/go/feature"
	_ "github.com/voxgig-sdk/chocomilk-sdk/go/utility"
)

// Type aliases preserve external API.
type ChocomilkSDK = core.ChocomilkSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ChocomilkEntity = core.ChocomilkEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ChocomilkError = core.ChocomilkError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewSearchEntityFunc = func(client *core.ChocomilkSDK, entopts map[string]any) core.ChocomilkEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewYouTubeEntityFunc = func(client *core.ChocomilkSDK, entopts map[string]any) core.ChocomilkEntity {
		return entity.NewYouTubeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewChocomilkSDK = core.NewChocomilkSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewChocomilkSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ChocomilkSDK  { return NewChocomilkSDK(nil) }
func Test() *ChocomilkSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
