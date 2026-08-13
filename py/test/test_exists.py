# Chocomilk SDK exists test

import pytest
from chocomilk_sdk import ChocomilkSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ChocomilkSDK.test(None, None)
        assert testsdk is not None
