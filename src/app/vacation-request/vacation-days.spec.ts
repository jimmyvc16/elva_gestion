import { CR_HOLIDAYS } from './holidays';
import { countDeductedDays, listVacationDays } from './vacation-days';

const count = (start: string, end: string) => countDeductedDays(listVacationDays(start, end, CR_HOLIDAYS));

describe('vacation days', () => {
  it('skips weekends and mandatory holidays (Christmas to New Year)', () => {
    // Dec 21-24 + Dec 28-31; Dec 25 and Jan 1 are mandatory holidays, Dec 26-27 weekend.
    expect(count('2026-12-21', '2027-01-01')).toBe(8);
  });

  it('skips Holy Thursday and Good Friday', () => {
    expect(count('2026-03-30', '2026-04-03')).toBe(3);
  });

  it('deducts optional holidays like a normal day', () => {
    // Nov 30 (Monday) + Dec 1 (Abolición del Ejército, optional).
    expect(count('2026-11-30', '2026-12-01')).toBe(2);
    const dec1 = listVacationDays('2026-12-01', '2026-12-01', CR_HOLIDAYS)[0];
    expect(dec1.kind).toBe('optionalHoliday');
    expect(dec1.holidayName).toBe('Abolición del Ejército');
  });

  it('counts a single working day', () => {
    expect(count('2026-11-04', '2026-11-04')).toBe(1);
  });

  it('deducts nothing for a weekend', () => {
    expect(count('2026-11-07', '2026-11-08')).toBe(0);
  });

  it('returns no days when end is before start or dates are invalid', () => {
    expect(listVacationDays('2026-11-10', '2026-11-09', CR_HOLIDAYS)).toEqual([]);
    expect(listVacationDays('', '2026-11-09', CR_HOLIDAYS)).toEqual([]);
    expect(listVacationDays('2026-02-30', '2026-03-02', CR_HOLIDAYS)).toEqual([]);
  });

  it('does not shift days across the month change', () => {
    const days = listVacationDays('2026-10-30', '2026-11-02', CR_HOLIDAYS);
    expect(days.map((d) => d.date)).toEqual(['2026-10-30', '2026-10-31', '2026-11-01', '2026-11-02']);
    expect(days.map((d) => d.weekday)).toEqual([5, 6, 0, 1]);
  });
});
