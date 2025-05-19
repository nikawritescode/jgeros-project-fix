import { create } from 'zustand';

// Your store definition
export const useStore = create(set => ({
  session: null,
  reports: [],
  setSession: session => set({ session }),
  resetSession: () => set({ session: null }),
  setReports: reports => set({ reports }),
  addReport: report => set(state => ({ reports: [...state.reports, report] }))
}));
