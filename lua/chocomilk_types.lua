-- Typed models for the Chocomilk SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Search
---@field author? string
---@field description? string
---@field id? string
---@field image? string
---@field title? string
---@field url? string

---@class SearchListMatch
---@field author? string
---@field description? string
---@field id? string
---@field image? string
---@field title? string
---@field url? string

---@class YouTube
---@field channel? string
---@field duration? string
---@field thumbnail? string
---@field title? string
---@field video_id? string
---@field view? string

---@class YouTubeListMatch
---@field channel? string
---@field duration? string
---@field thumbnail? string
---@field title? string
---@field video_id? string
---@field view? string

local M = {}

return M
