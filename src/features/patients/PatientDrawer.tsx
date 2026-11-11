import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, Heart, Droplet, Thermometer, Phone, Mail } from 'lucide-react';
import { useVitalisStore } from '../../store/useVitalisStore';
import { StatusBadge } from '../../components/feedback/StatusBadge';
import { drawerSlide } from '../../lib/motionVariants';

export const PatientDrawer: React.FC = () => {
  const { selectedPatient, setSelectedPatient } = useVitalisStore();

  if (!selectedPatient) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPatient(null)}
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-xs"
        />

        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            variants={drawerSlide}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-screen max-w-md bg-ivory border-l border-ivory-border p-6 shadow-modal flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-ivory-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-scarlet to-scarlet-light text-white font-semibold text-lg flex items-center justify-center shadow-sm">
                    {selectedPatient.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="font-fraunces text-xl font-bold text-charcoal">
                      {selectedPatient.name}
                    </h2>
                    <p className="text-xs text-charcoal/60">
                      ID: {selectedPatient.id} • {selectedPatient.age} yrs • {selectedPatient.gender}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPatient(null)}
                  className="p-1.5 rounded-lg text-charcoal/50 hover:text-charcoal hover:bg-ivory-dark transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-4 flex items-center justify-between">
                <StatusBadge status={selectedPatient.status} />
                <span className="text-xs font-medium text-charcoal/70">
                  Doctor: <strong className="text-charcoal">{selectedPatient.primaryDoctor}</strong>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-ivory-dark/70 border border-ivory-border/60 text-xs space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-charcoal/70">
                  <Phone className="w-3.5 h-3.5 text-scarlet" />
                  <span>{selectedPatient.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/70">
                  <Mail className="w-3.5 h-3.5 text-scarlet" />
                  <span>{selectedPatient.email}</span>
                </div>
              </div>

              <h3 className="font-fraunces text-base font-semibold text-charcoal mb-3">
                Current Vital Signs
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-ivory-dark/70 border border-ivory-border/60">
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-1">
                    <Activity className="w-3.5 h-3.5 text-scarlet" /> Blood Pressure
                  </div>
                  <span className="font-mono text-base font-bold text-charcoal">
                    {selectedPatient.vitals.bloodPressure}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-ivory-dark/70 border border-ivory-border/60">
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500" /> Heart Rate
                  </div>
                  <span className="font-mono text-base font-bold text-charcoal">
                    {selectedPatient.vitals.heartRate} bpm
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-ivory-dark/70 border border-ivory-border/60">
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-1">
                    <Droplet className="w-3.5 h-3.5 text-sky-500" /> SpO2 Level
                  </div>
                  <span className="font-mono text-base font-bold text-charcoal">
                    {selectedPatient.vitals.oxygenLevel}%
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-ivory-dark/70 border border-ivory-border/60">
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-1">
                    <Thermometer className="w-3.5 h-3.5 text-amber-500" /> Temperature
                  </div>
                  <span className="font-mono text-base font-bold text-charcoal">
                    {selectedPatient.vitals.temperature}
                  </span>
                </div>
              </div>

              <h3 className="font-fraunces text-base font-semibold text-charcoal mb-3">
                Visit & Prescription History
              </h3>
              <div className="space-y-4">
                {selectedPatient.history.map((record) => (
                  <div
                    key={record.id}
                    className="p-3.5 rounded-xl bg-ivory-dark border border-ivory-border text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-semibold text-charcoal">
                      <span>{record.diagnosis}</span>
                      <span className="font-mono text-[10px] text-charcoal/50">{record.date}</span>
                    </div>
                    <p className="text-charcoal/70 leading-relaxed">{record.notes}</p>
                    <div className="pt-2 border-t border-ivory-border/50">
                      <span className="font-medium text-scarlet block mb-1">Rx Prescribed:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {record.prescription.map((rx, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-ivory text-charcoal/80 border border-ivory-border text-[11px]"
                          >
                            {rx}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-ivory-border mt-6">
              <button
                onClick={() => setSelectedPatient(null)}
                className="w-full py-2.5 rounded-xl bg-charcoal text-white text-xs font-semibold hover:bg-charcoal-light transition"
              >
                Close Patient File
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};