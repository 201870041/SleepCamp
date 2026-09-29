// Adapted from the original property-driven component; wording is generic.
Component({
  properties: {
    visible: { type: Boolean, value: false },
    title: { type: String, value: 'Action complete' },
    subtitle: { type: String, value: 'Your update has been recorded.' }
  }
});
