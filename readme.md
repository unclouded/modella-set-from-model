# modella-set-from-model

Provides a utility function `setFrom()` that allows modella models to be updated from other models.

It's essentially the same as the core `set()` but uses toJSON() if the passed object supports it.
