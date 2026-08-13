# Chocomilk SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ChocomilkUtility.registrar = ->(u) {
  u.clean = ChocomilkUtilities::Clean
  u.done = ChocomilkUtilities::Done
  u.make_error = ChocomilkUtilities::MakeError
  u.feature_add = ChocomilkUtilities::FeatureAdd
  u.feature_hook = ChocomilkUtilities::FeatureHook
  u.feature_init = ChocomilkUtilities::FeatureInit
  u.fetcher = ChocomilkUtilities::Fetcher
  u.make_fetch_def = ChocomilkUtilities::MakeFetchDef
  u.make_context = ChocomilkUtilities::MakeContext
  u.make_options = ChocomilkUtilities::MakeOptions
  u.make_request = ChocomilkUtilities::MakeRequest
  u.make_response = ChocomilkUtilities::MakeResponse
  u.make_result = ChocomilkUtilities::MakeResult
  u.make_point = ChocomilkUtilities::MakePoint
  u.make_spec = ChocomilkUtilities::MakeSpec
  u.make_url = ChocomilkUtilities::MakeUrl
  u.param = ChocomilkUtilities::Param
  u.prepare_auth = ChocomilkUtilities::PrepareAuth
  u.prepare_body = ChocomilkUtilities::PrepareBody
  u.prepare_headers = ChocomilkUtilities::PrepareHeaders
  u.prepare_method = ChocomilkUtilities::PrepareMethod
  u.prepare_params = ChocomilkUtilities::PrepareParams
  u.prepare_path = ChocomilkUtilities::PreparePath
  u.prepare_query = ChocomilkUtilities::PrepareQuery
  u.graphql_body = ChocomilkUtilities::GraphqlBody
  u.graphql_errors = ChocomilkUtilities::GraphqlErrors
  u.result_basic = ChocomilkUtilities::ResultBasic
  u.result_body = ChocomilkUtilities::ResultBody
  u.result_headers = ChocomilkUtilities::ResultHeaders
  u.transform_request = ChocomilkUtilities::TransformRequest
  u.transform_response = ChocomilkUtilities::TransformResponse
}
