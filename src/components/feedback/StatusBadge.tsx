import React from 'react';
import { CheckCircle2, Clock, AlertOctagon, MinusCircle } from 'lucide-react';
import { AppointmentStatus, InvoiceStatus, DoctorStatus, PatientStatus } from '../../types';

interface StatusBadgeProps {
  status: AppointmentStatus | InvoiceStatus | DoctorStatus | PatientStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case 'Confirmed':
    case 'Paid':
    case 'Available':
    case 'Stable':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {status}
        </span>
      );

    case 'Waiting':
    case 'Pending':
    case 'In Consultation':
    case 'In Surgery':
    case 'Observation':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          {status}
        </span>
      );

    case 'Cancelled':
    case 'Critical':
    case 'Overdue':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
          <AlertOctagon className="w-3.5 h-3.5 text-scarlet" />
          {status}
        </span>
      );

    case 'Off duty':
    case 'Recovering':
    case 'Completed':
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
          <MinusCircle className="w-3.5 h-3.5 text-slate-500" />
          {status}
        </span>
      );
  }
};