// An extracted presentation pattern, not the original task screen.
// No registration, navigation, exercises, draft persistence, or submission.
const { loadDisplayItem } = require('../../../services/omitted');

function createPageOptions(loadItem = loadDisplayItem) {
  return {
    data: { status: 'idle', item: null, errorMessage: '' },
    onLoad() {
      this.alive = true;
      this.requestVersion = 0;
      return this.reload();
    },
    async reload() {
      if (!this.alive) return;
      const version = ++this.requestVersion;
      this.setData({ status: 'loading', item: null, errorMessage: '' });
      try {
        const item = await loadItem();
        // Ignore old requests and responses arriving after the page is closed.
        if (!this.alive || version !== this.requestVersion) return;
        this.setData({ status: 'ready', item, errorMessage: '' });
      } catch {
        if (!this.alive || version !== this.requestVersion) return;
        this.setData({ status: 'error', item: null, errorMessage: 'Content is unavailable.' });
      }
    },
    onUnload() {
      this.alive = false;
      this.requestVersion += 1;
    }
  };
}
module.exports = { createPageOptions };
