# Chocomilk SDK feature factory

from feature.base_feature import ChocomilkBaseFeature
from feature.test_feature import ChocomilkTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ChocomilkBaseFeature(),
        "test": lambda: ChocomilkTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
