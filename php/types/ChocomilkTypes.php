<?php
declare(strict_types=1);

// Typed models for the Chocomilk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Search entity data model. */
class Search
{
    public ?string $author = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?string $author = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** YouTube entity data model. */
class YouTube
{
    public ?string $channel = null;
    public ?string $duration = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
    public ?string $videoId = null;
    public ?string $views = null;
}

/** Request payload for YouTube#list. */
class YouTubeListMatch
{
    public ?string $channel = null;
    public ?string $duration = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
    public ?string $videoId = null;
    public ?string $views = null;
}

