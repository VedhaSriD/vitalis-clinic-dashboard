import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { PatientDrawer } from '../../features/patients/PatientDrawer';
import { BookAppointmentModal } from '../../features/appointments/BookAppointmentModal';

export const AppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-ivory text-charcoal antialiased">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      <PatientDrawer />
      <BookAppointmentModal />
    </div>
  );
};