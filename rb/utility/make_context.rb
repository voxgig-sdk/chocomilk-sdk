# Chocomilk SDK utility: make_context
require_relative '../core/context'
module ChocomilkUtilities
  MakeContext = ->(ctxmap, basectx) {
    ChocomilkContext.new(ctxmap, basectx)
  }
end
