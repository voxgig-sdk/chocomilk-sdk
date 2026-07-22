-- Chocomilk SDK exists test

local sdk = require("chocomilk_sdk")

describe("ChocomilkSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
