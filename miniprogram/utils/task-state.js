// Generic state calculation. The caller supplies all scheduling policy.
// This sample does not unlock tasks, store progress, or authorize submissions.
function taskState({ now, opensAt, closesAt, completed = false }) {
  if (![now, opensAt, closesAt].every(Number.isFinite)) {
    throw new TypeError('Times must be finite numbers.');
  }
  if (closesAt < opensAt) throw new RangeError('Closing time precedes opening time.');
  if (completed) return 'completed';
  if (now < opensAt) return 'locked';
  if (now > closesAt) return 'expired';
  return 'available';
}

module.exports = { taskState };
