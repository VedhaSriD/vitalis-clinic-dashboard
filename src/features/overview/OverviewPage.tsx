import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  CalendarCheck,
  IndianRupee,
  Smile,
  Activity,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { KpiCard } from '../../components/cards/KpiCard';
import { ECGLine } from '../../components/feedback/ECGLine';
import { StatusBadge } from '../../components/feedback/StatusBadge';
import { staggerContainer, fadeUp } from '../../lib/motionVariants';
import { PATIENT_FLOW_DATA, MONTHLY_REVENUE_DATA } from '../../data/mockData';
import { useVitalisStore } from '../../store/useVitalisStore';

export const OverviewPage: React.FC = () => {
  const { doctors, appointments, setSelectedPatient, patients } = useVitalisStore();
  const todayAppointments = appointments.filter((a) => a.date === '2026-11-11').slice(0, 5);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-bento bg-gradient-to-br from-charcoal via-charcoal-surface to-charcoal-dark text-white p-6 md:p-8 shadow-xl"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scarlet/20 border border-scarlet/30 text-scarlet-light text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Live Clinical Operations
            </div>
            <h1 className="font-fraunces text-3xl md:text-4xl font-normal tracking-tight text-ivory">
              Welcome back, <span className="italic font-light text-scarlet-light">Director Ray</span>
            </h1>
            <p className="text-sm text-ivory/70 leading-relaxed">
              Vitalis Central reports 98.4% surgical clearance today. 14 critical telemetry feeds are running normal in Cardio-Thoracic wings.
            </p>
          </div>

          <div className="w-full md:w-80 bg-charcoal/60 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-inner">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="flex items-center gap-1.5 text-ivory/80 font-medium">
                <Activity className="w-3.5 h-3.5 text-scarlet" /> Vitalis Telemetry Stream
              </span>
              <span className="text-emerald-400 font-mono text-[11px]">72 BPM AVG</span>
            </div>
            <ECGLine />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Patients Today"
          value={84}
          suffix=" admitted"
          trend="+12%"
          isPositive={true}
          icon={Users}
          subtext="vs last Wednesday"
        />
        <KpiCard
          title="Appointments"
          value={128}
          trend="+6%"
          isPositive={true}
          icon={CalendarCheck}
          subtext="8 cancellations"
        />
        <KpiCard
          title="Revenue (Nov MTD)"
          value={1140000}
          prefix="₹"
          trend="+19%"
          isPositive={true}
          icon={IndianRupee}
          subtext="ahead of target"
        />
        <KpiCard
          title="Patient Satisfaction"
          value={97}
          suffix="%"
          trend="+2.1%"
          isPositive={true}
          icon={Smile}
          subtext="from 412 reviews"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          variants={fadeUp}
          className="lg:col-span-2 bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-fraunces text-xl font-semibold text-charcoal">
                Weekly Patient Flow
              </h2>
              <p className="text-xs text-charcoal/60 mt-0.5">
                Outpatient Department vs Emergency Admissions (Nov 2026)
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ivory border border-ivory-border">
              Nov 05 - Nov 11
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PATIENT_FLOW_DATA}>
                <defs>
                  <linearGradient id="patientGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E5282B" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#E5282B" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#6b7280" fontSize={12} tickLine={false} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E1E22',
                    borderRadius: '12px',
                    color: '#FAF6EE',
                    border: 'none',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="patients"
                  stroke="#E5282B"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#patientGradient)"
                  name="OPD Patients"
                />
                <Area
                  type="monotone"
                  dataKey="emergency"
                  stroke="#FF6A4D"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fill="none"
                  name="Emergency"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-6 shadow-soft flex flex-col justify-between"
        >
          <div>
            <h2 className="font-fraunces text-xl font-semibold text-charcoal">
              Monthly Revenue
            </h2>
            <p className="text-xs text-charcoal/60 mt-0.5">Performance against targets (₹)</p>
          </div>

          <div className="h-56 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_REVENUE_DATA} barGap={4}>
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} />
                <YAxis
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  tickFormatter={(v) => `₹${v / 100000}L`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E1E22',
                    borderRadius: '12px',
                    color: '#FAF6EE',
                    border: 'none',
                    fontSize: '12px',
                  }}
                  formatter={(val: number) => [`₹${val.toLocaleString('en-IN')}`, 'Revenue']}
                />
                <Bar dataKey="revenue" fill="#1E1E22" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-xs pt-3 border-t border-ivory-border/50">
            <span className="text-charcoal/60">Nov Target: ₹9.5L</span>
            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Achieved 120%
            </span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          variants={fadeUp}
          className="lg:col-span-2 bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-fraunces text-xl font-semibold text-charcoal">
              Today's Consultation Timeline
            </h2>
            <span className="text-xs text-charcoal/60">Nov 11, 2026</span>
          </div>

          <div className="space-y-3">
            {todayAppointments.map((apt) => (
              <div
                key={apt.id}
                onClick={() => {
                  const pat = patients.find((p) => p.id === apt.patientId);
                  if (pat) setSelectedPatient(pat);
                }}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-ivory-border/60 hover:border-scarlet/40 hover:shadow-sm cursor-pointer transition"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 text-center">
                    <span className="font-mono text-xs font-semibold text-charcoal">
                      {apt.time}
                    </span>
                    <span className="block text-[10px] text-charcoal/50">{apt.duration}m</span>
                  </div>
                  <div className="h-8 w-px bg-ivory-border" />
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal group-hover:text-scarlet transition-colors">
                      {apt.patientName}
                    </h4>
                    <p className="text-xs text-charcoal/60">
                      {apt.type} • {apt.doctorName} ({apt.room})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StatusBadge status={apt.status} />
                  <ArrowUpRight className="w-4 h-4 text-charcoal/40 group-hover:text-scarlet group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-6 shadow-soft flex flex-col"
        >
          <h2 className="font-fraunces text-xl font-semibold text-charcoal mb-4">
            On-Duty Specialists
          </h2>
          <div className="space-y-3 flex-1">
            {doctors.slice(0, 5).map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-ivory border border-ivory-border/50 text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg ${doc.avatarColor} text-white font-semibold text-[11px] flex items-center justify-center`}
                  >
                    {doc.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{doc.name}</p>
                    <p className="text-[10px] text-charcoal/60">{doc.specialty}</p>
                  </div>
                </div>
                <StatusBadge status={doc.status} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};