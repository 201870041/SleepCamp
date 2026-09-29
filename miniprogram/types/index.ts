// Selected presentation types, adapted for this portfolio. Not API contracts.
export type DisplayState = 'idle' | 'loading' | 'ready' | 'error';
export interface DisplayItem {
  label: string;
  description: string;
}
export interface ViewModel {
  status: DisplayState;
  item: DisplayItem | null;
  errorMessage: string;
}
