// Gemeinsame Komponenten und Utilities

// Typen
export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

// Konstanten
export const DEFAULT_THEME: Theme = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#FFFFFF',
  text: '#000000',
};

// Utility-Funktionen
export function formatCurrency(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}