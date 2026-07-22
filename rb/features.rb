# Chocomilk SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ChocomilkFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChocomilkBaseFeature.new
    when "test"
      ChocomilkTestFeature.new
    else
      ChocomilkBaseFeature.new
    end
  end
end
