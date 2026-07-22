package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewSearchEntityFunc func(client *ChocomilkSDK, entopts map[string]any) ChocomilkEntity

var NewYouTubeEntityFunc func(client *ChocomilkSDK, entopts map[string]any) ChocomilkEntity

