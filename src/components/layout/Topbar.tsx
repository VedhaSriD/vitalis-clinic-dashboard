import React, { useState } from 'react';
import { Search, Bell, Calendar as CalIcon, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVitalisStore } from '../../store/useVitalisStore';

export const Topbar: React.FC = () => {
  const { searchQuery, setSearchQuery, hasUnreadNotification, clearNotification, setBookModalOpen } = useVitalisStore();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-10 h-20 bg-ivory/80 backdrop-blur-md border-b border-ivory-border/60 px-6 flex items-center justify-between">
      <div className="relative w-72 md:w-96">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search patient, doctor, diagnosis..."
          className="w-full pl-10 pr-4 py-2 bg-ivory-dark/60 border border-ivory-border rounded-xl text-sm placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-scarlet/30 focus:border-scarlet transition"
        />
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ivory-dark/60 border border-ivory-border/60 text-xs text-charcoal/70">
          <CalIcon className="w-3.5 h-3.5 text-scarlet" />
          <span>Wednesday, 11 Nov 2026</span>
        </div>

        <button
          onClick={() => setBookModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-scarlet to-scarlet-light hover:brightness-105 active:scale-95 transition shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Appointment</span>
        </button>

        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              clearNotification();
            }}
            aria-label="View notifications"
            className="relative p-2.5 rounded-xl bg-ivory-dark/70 border border-ivory-border/70 text-charcoal hover:bg-ivory-dark active:scale-95 transition"
          >
            <motion.div
              animate={hasUnreadNotification ? { rotate: [0, -14, 14, -14, 0] } : {}}
              transition={{ repeat: Infinity, repeatDelay: 4, duration: 0.6 }}
            >
              <Bell className="w-4 h-4 text-charcoal/80" />
            </motion.div>
            {hasUnreadNotification && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-scarlet ring-2 ring-ivory" />
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                className="absolute right-0 mt-2 w-80 bg-ivory-dark border border-ivory-border rounded-2xl shadow-modal p-4 z-50 text-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-ivory-border">
                  <span className="font-semibold text-charcoal">Notifications</span>
                  <span className="text-[10px] text-charcoal/50">Nov 11, 2026</span>
                </div>
                <div className="space-y-2.5 mt-3">
                  <div className="p-2 rounded-lg bg-ivory border border-ivory-border/60">
                    <p className="font-medium text-charcoal">Critical BP Alert</p>
                    <p className="text-charcoal/60 text-[11px]">Marcus Vance recorded 165/104 mmHg at Suite 401.</p>
                  </div>
                  <div className="p-2 rounded-lg bg-ivory border border-ivory-border/60">
                    <p className="font-medium text-charcoal">Lab Results Ready</p>
                    <p className="text-charcoal/60 text-[11px]">Devraj Mukherjee HbA1c panel finalized by Biochemistry.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 pl-2 border-l border-ivory-border/80">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-charcoal to-charcoal-light text-white font-medium text-xs flex items-center justify-center ring-2 ring-scarlet/20">
            DR
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-xs font-semibold text-charcoal leading-none">Dr. Dev Ray</span>
            <span className="text-[10px] text-charcoal/60 mt-0.5">Medical Director</span>
          </div>
        </div>
      </div>
    </header>
  );
};