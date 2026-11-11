import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ListFilter, Plus, MapPin } from 'lucide-react';
import { useVitalisStore } from '../../store/useVitalisStore';
import { StatusBadge } from '../../components/feedback/StatusBadge';
import { fadeUp } from '../../lib/motionVariants';

const WEEKDAYS = [
  { day: 'Mon', date: 'Nov 09' },
  { day: 'Tue', date: 'Nov 10' },
  { day: 'Wed', date: 'Nov 11', isToday: true },
  { day: 'Thu', date: 'Nov 12' },
  { day: 'Fri', date: 'Nov 13' },
  { day: 'Sat', date: 'Nov 14' },
];

export const AppointmentsPage: React.FC = () => {
  const { appointments, setBookModalOpen } = useVitalisStore();
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-fraunces text-3xl font-semibold text-charcoal">
            Appointments & Schedule
          </h1>
          <p className="text-xs text-charcoal/60 mt-0.5">
            Active week: November 09 - November 15, 2026
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-ivory-dark border border-ivory-border rounded-xl p-1 text-xs">
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
                viewMode === 'calendar'
                  ? 'bg-ivory text-charcoal shadow-sm'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" /> Calendar
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
                viewMode === 'list'
                  ? 'bg-ivory text-charcoal shadow-sm'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" /> List
            </button>
          </div>

          <button
            onClick={() => setBookModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-scarlet to-scarlet-light hover:brightness-105 active:scale-95 transition shadow-sm"
          >
            <Plus className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      </div>

      {viewMode === 'calendar' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {WEEKDAYS.map((w, index) => {
            const formattedDate = `2026-11-${String(9 + index).padStart(2, '0')}`;
            const dayApts = appointments.filter((a) => a.date === formattedDate);

            return (
              <div
                key={w.day}
                className={`flex flex-col rounded-bento p-4 border transition-all ${
                  w.isToday
                    ? 'bg-ivory-dark border-scarlet/50 shadow-soft ring-1 ring-scarlet/20'
                    : 'bg-ivory-dark/60 border-ivory-border/60'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-ivory-border/60">
                  <div>
                    <h3 className="font-fraunces font-bold text-sm text-charcoal">{w.day}</h3>
                    <span className="text-[10px] text-charcoal/50">{w.date}</span>
                  </div>
                  {w.isToday && (
                    <span className="text-[10px] uppercase font-bold text-scarlet px-1.5 py-0.5 rounded bg-scarlet/10">
                      Today
                    </span>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  {dayApts.length > 0 ? (
                    dayApts.map((apt) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={apt.id}
                        className="p-2.5 rounded-xl bg-ivory border border-ivory-border text-xs shadow-xs hover:border-scarlet/40 transition"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[11px] font-bold text-scarlet">
                            {apt.time}
                          </span>
                          <StatusBadge status={apt.status} />
                        </div>
                        <p className="font-semibold text-charcoal truncate">{apt.patientName}</p>
                        <p className="text-[11px] text-charcoal/60 truncate">{apt.doctorName}</p>
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-charcoal/50">
                          <MapPin className="w-3 h-3" /> {apt.room}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="h-28 flex items-center justify-center text-center text-[11px] text-charcoal/40 italic">
                      No slots booked
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento overflow-hidden shadow-soft">
          <div className="divide-y divide-ivory-border/50">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-ivory transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 text-center">
                    <span className="text-xs font-mono font-bold text-charcoal block">
                      {apt.time}
                    </span>
                    <span className="text-[10px] text-charcoal/50">{apt.date}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-charcoal">{apt.patientName}</h4>
                    <p className="text-xs text-charcoal/60">
                      {apt.type} • {apt.doctorName} ({apt.doctorSpecialty})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right text-xs text-charcoal/60">
                    <span>{apt.room}</span>
                  </div>
                  <StatusBadge status={apt.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};