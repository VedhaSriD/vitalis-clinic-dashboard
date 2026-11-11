import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, BellRing, User } from 'lucide-react';
import { fadeUp } from '../../lib/motionVariants';

export const SettingsPage: React.FC = () => {
  const [criticalBpAlerts, setCriticalBpAlerts] = useState(true);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [autoArchive, setAutoArchive] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6 max-w-4xl">
      <div>
        <h1 className="font-fraunces text-3xl font-semibold text-charcoal">
          Clinic Preferences
        </h1>
        <p className="text-xs text-charcoal/60 mt-0.5">
          Configure telemetry threshold triggers and staff credentials
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-6 shadow-soft space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-ivory-border text-charcoal font-fraunces text-lg font-semibold">
            <User className="w-4 h-4 text-scarlet" /> Hospital Profile
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-medium text-charcoal mb-1">Facility Name</label>
              <input
                type="text"
                defaultValue="Vitalis Central Medical Campus"
                className="w-full p-2.5 rounded-xl bg-ivory border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-charcoal mb-1">Medical Director</label>
              <input
                type="text"
                defaultValue="Dr. Dev Ray, MD, FRCS"
                className="w-full p-2.5 rounded-xl bg-ivory border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-charcoal mb-1">Contact Email</label>
              <input
                type="email"
                defaultValue="director@vitalis-central.health"
                className="w-full p-2.5 rounded-xl bg-ivory border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-charcoal mb-1">Default Currency</label>
              <select className="w-full p-2.5 rounded-xl bg-ivory border border-ivory-border focus:ring-2 focus:ring-scarlet/20 focus:outline-none">
                <option>INR (₹)</option>
                <option>USD ($)</option>
                <option>EUR (€)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-6 shadow-soft space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-ivory-border text-charcoal font-fraunces text-lg font-semibold">
            <BellRing className="w-4 h-4 text-scarlet" /> Alert Triggers & Telemetry
          </div>
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-charcoal">Critical Blood Pressure Push Alerts</p>
                <p className="text-charcoal/60">Dispatch instant notification when systolic &gt; 160 or diastolic &gt; 100.</p>
              </div>
              <input
                type="checkbox"
                checked={criticalBpAlerts}
                onChange={(e) => setCriticalBpAlerts(e.target.checked)}
                className="w-4 h-4 accent-scarlet cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-charcoal">End-of-Day OPD Summary Digest</p>
                <p className="text-charcoal/60">Send PDF digest of all appointments to chief consultant mailboxes.</p>
              </div>
              <input
                type="checkbox"
                checked={dailyDigest}
                onChange={(e) => setDailyDigest(e.target.checked)}
                className="w-4 h-4 accent-scarlet cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-charcoal">Auto-archive Closed Billing Records</p>
                <p className="text-charcoal/60">Archive settled receipts older than 90 days to cold storage.</p>
              </div>
              <input
                type="checkbox"
                checked={autoArchive}
                onChange={(e) => setAutoArchive(e.target.checked)}
                className="w-4 h-4 accent-scarlet cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-scarlet to-scarlet-light hover:brightness-105 active:scale-95 transition shadow-sm"
          >
            <Save className="w-4 h-4" /> Save Configuration
          </button>
          {saved && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg">
              Preferences updated successfully!
            </span>
          )}
        </div>
      </form>
    </motion.div>
  );
};