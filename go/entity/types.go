// Typed models for the Chocomilk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Search is the typed data model for the search entity.
type Search struct {
	Author *string `json:"author,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Author *string `json:"author,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// YouTube is the typed data model for the you_tube entity.
type YouTube struct {
	Channel *string `json:"channel,omitempty"`
	Duration *string `json:"duration,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
	VideoId *string `json:"video_id,omitempty"`
	View *string `json:"view,omitempty"`
}

// YouTubeListMatch is the typed request payload for YouTube.ListTyped.
type YouTubeListMatch struct {
	Channel *string `json:"channel,omitempty"`
	Duration *string `json:"duration,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
	VideoId *string `json:"video_id,omitempty"`
	View *string `json:"view,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
