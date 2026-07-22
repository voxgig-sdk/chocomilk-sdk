<?php
declare(strict_types=1);

// Chocomilk SDK utility: result_headers

class ChocomilkResultHeaders
{
    public static function call(ChocomilkContext $ctx): ?ChocomilkResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
