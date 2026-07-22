# Chocomilk SDK utility: make_context

from core.context import ChocomilkContext


def make_context_util(ctxmap, basectx):
    return ChocomilkContext(ctxmap, basectx)
