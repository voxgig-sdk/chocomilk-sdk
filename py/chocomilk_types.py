# Typed models for the Chocomilk SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Search(TypedDict, total=False):
    author: str
    description: str
    id: str
    image: str
    title: str
    url: str


class SearchListMatch(TypedDict, total=False):
    author: str
    description: str
    id: str
    image: str
    title: str
    url: str


class YouTube(TypedDict, total=False):
    channel: str
    duration: str
    thumbnail: str
    title: str
    video_id: str
    view: str


class YouTubeListMatch(TypedDict, total=False):
    channel: str
    duration: str
    thumbnail: str
    title: str
    video_id: str
    view: str
