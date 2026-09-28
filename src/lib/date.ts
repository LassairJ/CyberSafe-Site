const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** Format a frontmatter date (Date object or 'YYYY-MM-DD' string) as
 *  'September 27, 2026'. Uses UTC getters so timezone never shifts the day. */
export function formatDate(value: unknown): string {
  let y: number, m: number, d: number;
  if (value instanceof Date) {
    y = value.getUTCFullYear();
    m = value.getUTCMonth();
    d = value.getUTCDate();
  } else if (typeof value === 'string') {
    const match = value.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return value;
    y = Number(match[1]);
    m = Number(match[2]) - 1;
    d = Number(match[3]);
  } else {
    return String(value ?? '');
  }
  if (!MONTHS[m]) return String(value);
  return `${MONTHS[m]} ${d}, ${y}`;
}
