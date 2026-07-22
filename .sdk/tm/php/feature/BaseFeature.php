<?php
declare(strict_types=1);

// Chocomilk SDK base feature

class ChocomilkBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ChocomilkContext $ctx, array $options): void {}
    public function PostConstruct(ChocomilkContext $ctx): void {}
    public function PostConstructEntity(ChocomilkContext $ctx): void {}
    public function SetData(ChocomilkContext $ctx): void {}
    public function GetData(ChocomilkContext $ctx): void {}
    public function GetMatch(ChocomilkContext $ctx): void {}
    public function SetMatch(ChocomilkContext $ctx): void {}
    public function PrePoint(ChocomilkContext $ctx): void {}
    public function PreSpec(ChocomilkContext $ctx): void {}
    public function PreRequest(ChocomilkContext $ctx): void {}
    public function PreResponse(ChocomilkContext $ctx): void {}
    public function PreResult(ChocomilkContext $ctx): void {}
    public function PreDone(ChocomilkContext $ctx): void {}
    public function PreUnexpected(ChocomilkContext $ctx): void {}
}
