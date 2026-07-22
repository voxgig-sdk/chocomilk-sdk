<?php
declare(strict_types=1);

// Chocomilk SDK utility: prepare_body

class ChocomilkPrepareBody
{
    public static function call(ChocomilkContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
