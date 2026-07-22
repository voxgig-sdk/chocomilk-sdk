-- Chocomilk SDK error

local ChocomilkError = {}
ChocomilkError.__index = ChocomilkError


function ChocomilkError.new(code, msg, ctx)
  local self = setmetatable({}, ChocomilkError)
  self.is_sdk_error = true
  self.sdk = "Chocomilk"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ChocomilkError:error()
  return self.msg
end


function ChocomilkError:__tostring()
  return self.msg
end


return ChocomilkError
