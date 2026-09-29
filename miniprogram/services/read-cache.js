// Adapted from the original service's cached-read/in-flight-promise pattern.
// Generic mechanics only: no endpoints, identity, business rules, or storage.
function createReadCache({ ttlMs, now = Date.now }) {
  if (!Number.isFinite(ttlMs) || ttlMs < 0) throw new RangeError('Invalid cache lifetime.');
  let hasValue = false;
  let value;
  let expiresAt = 0;
  let pending = null;
  let generation = 0;

  function clear() {
    generation += 1;
    hasValue = false;
    value = undefined;
    pending = null;
  }

  function read(loader) {
    if (hasValue && now() < expiresAt) return Promise.resolve(value);
    if (pending) return pending;
    const startedIn = generation;
    const request = Promise.resolve().then(loader).then(result => {
      // A result from before invalidation must not repopulate the cache.
      if (generation === startedIn) {
        value = result;
        hasValue = true;
        expiresAt = now() + ttlMs;
      }
      return result;
    }).finally(() => {
      if (pending === request) pending = null;
    });
    pending = request;
    return request;
  }

  return { read, clear };
}
module.exports = { createReadCache };
