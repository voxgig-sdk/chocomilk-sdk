<?php
declare(strict_types=1);

// Chocomilk SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ChocomilkMakeContext
{
    public static function call(array $ctxmap, ?ChocomilkContext $basectx): ChocomilkContext
    {
        return new ChocomilkContext($ctxmap, $basectx);
    }
}
