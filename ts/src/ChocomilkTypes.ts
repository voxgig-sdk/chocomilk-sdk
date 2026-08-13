// Typed models for the Chocomilk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Search {
  author?: string
  description?: string
  id?: string
  image?: string
  title?: string
  url?: string
}

export interface SearchListMatch {
  author?: string
  description?: string
  id?: string
  image?: string
  title?: string
  url?: string

  // Selects a custom action instead of the plain list:
  //   'pinterest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface YouTube {
  channel?: string
  duration?: string
  thumbnail?: string
  title?: string
  videoId?: string
  views?: string
}

export interface YouTubeListMatch {
  channel?: string
  duration?: string
  thumbnail?: string
  title?: string
  videoId?: string
  views?: string
}

