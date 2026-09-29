// A deliberate boundary, not a mock backend or a production adapter.
async function loadDisplayItem() {
  throw new Error('The application data integration is omitted from this portfolio.');
}
module.exports = { loadDisplayItem };
