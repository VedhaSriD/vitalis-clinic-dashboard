export type AppointmentStatus = 'Confirmed' | 'Waiting' | 'Cancelled' | 'Completed';
export type DoctorStatus = 'Available' | 'In Consultation' | 'In Surgery' | 'Off duty';
export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue';
export type PatientStatus = 'Critical' | 'Stable' | 'Recovering' | 'Observation';
export type AppointmentType =
  | 'General Checkup'
  | 'Follow-up'
  | 'Cardiology Consultation'
  | 'Emergency'
  | 'Pediatric Exam';

export interface Doctor {
  id: string;
  name: string;
  initials: string;
  specialty: string;
  avatarColor: string;
  rating: number;
  status: DoctorStatus;
  patientsToday: number;
  room: string;
}

export interface VitalSigns {
  bloodPressure: string;
  heartRate: number;
  oxygenLevel: number;
  temperature: string;
  bloodSugar: string;
}

export interface VisitRecord {
  id: string;
  date: string;
  doctorName: string;
  diagnosis: string;
  notes: string;
  prescription: string[];
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Female' | 'Male' | 'Other';
  condition: string;
  status: PatientStatus;
  primaryDoctor: string;
  lastVisit: string;
  contact: string;
  email: string;
  vitals: VitalSigns;
  history: VisitRecord[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  time: string;
  duration: number;
  type: AppointmentType;
  status: AppointmentStatus;
  room: string;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  patientName: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
  paymentMethod: 'Credit Card' | 'Insurance' | 'UPI / NetBanking' | 'Cash';
  service: string;
}