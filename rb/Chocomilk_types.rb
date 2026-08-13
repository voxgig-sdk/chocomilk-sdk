# frozen_string_literal: true

# Typed models for the Chocomilk SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Search entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Search = Struct.new(
  :author,
  :description,
  :id,
  :image,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SearchListMatch = Struct.new(
  :author,
  :description,
  :id,
  :image,
  :title,
  :url,
  keyword_init: true
)

# YouTube entity data model.
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] thumbnail
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] videoId
#   @return [String, nil]
#
# @!attribute [rw] views
#   @return [String, nil]
YouTube = Struct.new(
  :channel,
  :duration,
  :thumbnail,
  :title,
  :videoId,
  :views,
  keyword_init: true
)

# Request payload for YouTube#list.
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] thumbnail
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] videoId
#   @return [String, nil]
#
# @!attribute [rw] views
#   @return [String, nil]
YouTubeListMatch = Struct.new(
  :channel,
  :duration,
  :thumbnail,
  :title,
  :videoId,
  :views,
  keyword_init: true
)

