import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Users } from 'lucide-react';
import { useVitalisStore } from '../../store/useVitalisStore';
import { StatusBadge } from '../../components/feedback/StatusBadge';
import { staggerContainer, fadeUp } from '../../lib/motionVariants';

export const DoctorsPage: React.FC = () => {
  const { doctors } = useVitalisStore();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div>
        <h1 className="font-fraunces text-3xl font-semibold text-charcoal">
          Medical Staff Directory
        </h1>
        <p className="text-xs text-charcoal/60 mt-0.5">
          Specialists on rotation across surgical and outpatient wings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {doctors.map((doc) => (
          <motion.div
            key={doc.id}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-5 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${doc.avatarColor} text-white font-semibold text-sm flex items-center justify-center shadow-sm`}
                >
                  {doc.initials}
                </div>
                <StatusBadge status={doc.status} />
              </div>

              <h3 className="font-fraunces font-bold text-base text-charcoal leading-snug">
                {doc.name}
              </h3>
              <p className="text-xs font-medium text-scarlet mt-0.5">{doc.specialty}</p>

              <div className="mt-4 pt-3 border-t border-ivory-border/50 space-y-2 text-xs text-charcoal/70">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-charcoal/60">
                    <MapPin className="w-3.5 h-3.5 text-charcoal/40" /> Room
                  </span>
                  <span className="font-medium text-charcoal">{doc.room}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-charcoal/60">
                    <Users className="w-3.5 h-3.5 text-charcoal/40" /> Patients Today
                  </span>
                  <span className="font-semibold text-charcoal">{doc.patientsToday}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-charcoal/60">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Patient Rating
                  </span>
                  <span className="font-semibold text-charcoal">{doc.rating} / 5.0</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-ivory-border/60">
              <button className="w-full py-2 rounded-xl bg-ivory border border-ivory-border text-xs font-semibold text-charcoal hover:bg-white hover:border-charcoal/20 transition">
                Consultation Roster
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};