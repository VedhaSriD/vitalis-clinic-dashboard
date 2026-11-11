import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useVitalisStore } from '../../store/useVitalisStore';
import { SuccessCheckmark } from '../../components/feedback/SuccessCheckmark';
import { modalScale } from '../../lib/motionVariants';
import { AppointmentType } from '../../types';

export const BookAppointmentModal: React.FC = () => {
  const { isBookModalOpen, setBookModalOpen, doctors, patients, addAppointment } =
    useVitalisStore();

  const [patientId, setPatientId] = useState(patients[0]?.id || '');
  const [doctorId, setDoctorId] = useState(doctors[0]?.id || '');
  const [date, setDate] = useState('2026-11-12');
  const [time, setTime] = useState('10:00');
  const [type, setType] = useState<AppointmentType>('General Checkup');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const patient = patients.find((p) => p.id === patientId);
    const doctor = doctors.find((d) => d.id === doctorId);

    if (!patient || !doctor) return;

    addAppointment({
      patientId: patient.id,
      patientName: patient.name,
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      date,
      time,
      duration: 30,
      type,
      status: 'Confirmed',
      room: doctor.room,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setBookModalOpen(false);
    }, 1200);
  };

  if (!isBookModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setBookModalOpen(false)}
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-xs"
        />

        <motion.div
          variants={modalScale}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-lg bg-ivory border border-ivory-border rounded-bento p-6 shadow-modal z-10"
        >
          {isSuccess ? (
            <div className="py-8 text-center space-y-2">
              <SuccessCheckmark />
              <h3 className="font-fraunces text-2xl font-bold text-charcoal">
                Appointment Scheduled!
              </h3>
              <p className="text-xs text-charcoal/60">
                Notification dispatched to patient and doctor portal.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-ivory-border">
                <h3 className="font-fraunces text-xl font-bold text-charcoal">
                  Book New Consultation
                </h3>
                <button
                  onClick={() => setBookModalOpen(false)}
                  className="p-1.5 rounded-lg text-charcoal/50 hover:text-charcoal hover:bg-ivory-dark transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4 text-xs">
                <div>
                  <label className="block font-medium text-charcoal mb-1">Select Patient</label>
                  <select
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-ivory-dark border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
                  >
                    {patients.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.condition})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-charcoal mb-1">Attending Doctor</label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-ivory-dark border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
                  >
                    {doctors.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.specialty} ({d.room})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-charcoal mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-ivory-dark border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-charcoal mb-1">Time Slot</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-ivory-dark border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-charcoal mb-1">Appointment Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as AppointmentType)}
                    className="w-full p-2.5 rounded-xl bg-ivory-dark border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
                  >
                    <option value="General Checkup">General Checkup</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Cardiology Consultation">Cardiology Consultation</option>
                    <option value="Pediatric Exam">Pediatric Exam</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-scarlet to-scarlet-light hover:brightness-105 active:scale-98 transition shadow-md"
                  >
                    Confirm & Reserve Slot
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};