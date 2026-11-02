export interface Holiday {
  date: string; // YYYY-MM-DD
  name: string;
  mandatory: boolean;
}

// Costa Rica holidays. TODO: move to an admin-editable list in Firestore (dates change every year).
export const CR_HOLIDAYS: Holiday[] = [
  { date: '2026-01-01', name: 'Año Nuevo', mandatory: true },
  { date: '2026-04-02', name: 'Jueves Santo', mandatory: true },
  { date: '2026-04-03', name: 'Viernes Santo', mandatory: true },
  { date: '2026-04-11', name: 'Día de Juan Santamaría', mandatory: true },
  { date: '2026-05-01', name: 'Día del Trabajador', mandatory: true },
  { date: '2026-07-25', name: 'Anexión de Guanacaste', mandatory: true },
  { date: '2026-08-02', name: 'Virgen de los Ángeles', mandatory: false },
  { date: '2026-08-15', name: 'Día de la Madre', mandatory: true },
  { date: '2026-08-31', name: 'Día de la Persona Negra', mandatory: false },
  { date: '2026-09-15', name: 'Día de la Independencia', mandatory: true },
  { date: '2026-12-01', name: 'Abolición del Ejército', mandatory: false },
  { date: '2026-12-25', name: 'Navidad', mandatory: true },
  { date: '2027-01-01', name: 'Año Nuevo', mandatory: true },
];
