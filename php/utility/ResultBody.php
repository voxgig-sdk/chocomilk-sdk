<?php
declare(strict_types=1);

// Chocomilk SDK utility: result_body

class ChocomilkResultBody
{
    public static function call(ChocomilkContext $ctx): ?ChocomilkResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
