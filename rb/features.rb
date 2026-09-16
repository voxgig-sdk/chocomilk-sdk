# Chocomilk SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ChocomilkFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChocomilkBaseFeature.new
    when "ratelimit"
      ChocomilkRatelimitFeature.new
    when "retry"
      ChocomilkRetryFeature.new
    when "test"
      ChocomilkTestFeature.new
    when "timeout"
      ChocomilkTimeoutFeature.new
    else
      ChocomilkBaseFeature.new
    end
  end
end
