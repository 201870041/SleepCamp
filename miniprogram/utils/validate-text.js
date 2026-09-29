// Generic form validation. The caller supplies any product-specific limit.
function validateText(value, maxLength) {
  if (!Number.isInteger(maxLength) || maxLength < 1) {
    throw new RangeError('The character limit must be a positive integer.');
  }
  if (typeof value !== 'string') return { valid: false, error: 'Expected text.' };
  const text = value.trim();
  if (!text) return { valid: false, error: 'Enter some text.' };
  // Count Unicode code points rather than UTF-16 code units.
  // Combined emoji and grapheme clusters can still contain multiple code points.
  if ([...text].length > maxLength) return { valid: false, error: 'Text is too long.' };
  return { valid: true, value: text };
}

module.exports = { validateText };
