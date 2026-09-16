# Chocomilk SDK feature factory

from chocomilk_sdk.feature.base_feature import ChocomilkBaseFeature
from chocomilk_sdk.feature.ratelimit_feature import ChocomilkRatelimitFeature
from chocomilk_sdk.feature.retry_feature import ChocomilkRetryFeature
from chocomilk_sdk.feature.test_feature import ChocomilkTestFeature
from chocomilk_sdk.feature.timeout_feature import ChocomilkTimeoutFeature


_FEATURES = {
    "base": lambda: ChocomilkBaseFeature(),
    "ratelimit": lambda: ChocomilkRatelimitFeature(),
    "retry": lambda: ChocomilkRetryFeature(),
    "test": lambda: ChocomilkTestFeature(),
    "timeout": lambda: ChocomilkTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
