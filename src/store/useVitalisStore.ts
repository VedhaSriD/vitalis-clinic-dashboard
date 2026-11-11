import { create } from 'zustand';
import { Appointment, Doctor, Patient, Invoice } from '../types';
import { DOCTORS, PATIENTS, INITIAL_APPOINTMENTS, INVOICES } from '../data/mockData';

interface VitalisState {
  doctors: Doctor[];
  patients: Patient[];
  appointments: Appointment[];
  invoices: Invoice[];
  sidebarCollapsed: boolean;
  selectedPatient: Patient | null;
  isBookModalOpen: boolean;
  searchQuery: string;
  hasUnreadNotification: boolean;

  toggleSidebar: () => void;
  setSelectedPatient: (patient: Patient | null) => void;
  setBookModalOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  clearNotification: () => void;
  addAppointment: (newApt: Omit<Appointment, 'id'>) => void;
}

export const useVitalisStore = create<VitalisState>((set) => ({
  doctors: DOCTORS,
  patients: PATIENTS,
  appointments: INITIAL_APPOINTMENTS,
  invoices: INVOICES,
  sidebarCollapsed: false,
  selectedPatient: null,
  isBookModalOpen: false,
  searchQuery: '',
  hasUnreadNotification: true,

  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  setBookModalOpen: (open) => set({ isBookModalOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearNotification: () => set({ hasUnreadNotification: false }),
  addAppointment: (newApt) =>
    set((state) => ({
      appointments: [
        {
          ...newApt,
          id: `apt-${Date.now().toString().slice(-4)}`,
        },
        ...state.appointments,
      ],
    })),
}));