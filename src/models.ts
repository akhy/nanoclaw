export interface ModelInfo {
  id: string;
  shorthand: string;
  label: string;
}

export const AVAILABLE_MODELS: ModelInfo[] = [
  { id: 'claude-opus-4-6',           shorthand: 'opus',   label: 'Claude Opus 4.6 (most capable)' },
  { id: 'claude-sonnet-4-6',         shorthand: 'sonnet', label: 'Claude Sonnet 4.6 (balanced)' },
  { id: 'claude-haiku-4-5-20251001', shorthand: 'haiku',  label: 'Claude Haiku 4.5 (fastest)' },
];

export const DEFAULT_MODEL = 'claude-sonnet-4-6';

/**
 * Resolve a model shorthand or full ID to a canonical model ID.
 * Returns null if not recognized.
 */
export function resolveModel(input: string): string | null {
  const normalized = input.trim().toLowerCase();
  const byShorthand = AVAILABLE_MODELS.find((m) => m.shorthand === normalized);
  if (byShorthand) return byShorthand.id;
  const byId = AVAILABLE_MODELS.find((m) => m.id === normalized);
  if (byId) return byId.id;
  return null;
}
