import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useVitalisStore } from '../../store/useVitalisStore';
import { StatusBadge } from '../../components/feedback/StatusBadge';
import { formatCurrency } from '../../lib/utils';
import { fadeUp } from '../../lib/motionVariants';

const SPARKLINE_DATA = [
  { val: 40 },
  { val: 55 },
  { val: 52 },
  { val: 68 },
  { val: 62 },
  { val: 84 },
  { val: 92 },
];

export const BillingPage: React.FC = () => {
  const { invoices } = useVitalisStore();

  const totalCollected = invoices
    .filter((i) => i.status === 'Paid')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const pendingAmount = invoices
    .filter((i) => i.status === 'Pending')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
      <div>
        <h1 className="font-fraunces text-3xl font-semibold text-charcoal">
          Financial & Billing Ledger
        </h1>
        <p className="text-xs text-charcoal/60 mt-0.5">
          Settlement records, insurance processing and OPD fee collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-xs text-charcoal/60 uppercase font-medium">Total Collected (Nov)</span>
            <h3 className="font-fraunces text-2xl font-bold text-charcoal mt-1">
              {formatCurrency(totalCollected)}
            </h3>
            <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded mt-2 inline-block">
              +14.2% vs last month
            </span>
          </div>
          <div className="w-24 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={SPARKLINE_DATA}>
                <Line type="monotone" dataKey="val" stroke="#15803D" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-xs text-charcoal/60 uppercase font-medium">Pending Claims</span>
            <h3 className="font-fraunces text-2xl font-bold text-amber-800 mt-1">
              {formatCurrency(pendingAmount)}
            </h3>
            <span className="text-[11px] text-amber-700 font-semibold bg-amber-100 px-1.5 py-0.5 rounded mt-2 inline-block">
              3 Invoices Under Review
            </span>
          </div>
          <Clock className="w-8 h-8 text-amber-600/60" />
        </div>

        <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento p-5 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-xs text-charcoal/60 uppercase font-medium">Overdue Reminders</span>
            <h3 className="font-fraunces text-2xl font-bold text-scarlet mt-1">
              {formatCurrency(1800)}
            </h3>
            <span className="text-[11px] text-scarlet font-semibold bg-rose-100 px-1.5 py-0.5 rounded mt-2 inline-block">
              1 Unsettled account
            </span>
          </div>
          <AlertTriangle className="w-8 h-8 text-scarlet/60" />
        </div>
      </div>

      <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento overflow-hidden shadow-soft">
        <div className="p-4 border-b border-ivory-border/60">
          <h2 className="font-fraunces text-lg font-semibold text-charcoal">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-ivory-dark/90 border-b border-ivory-border/60 text-charcoal/60 font-semibold uppercase tracking-wider">
                <th className="px-5 py-3">Invoice #</th>
                <th className="px-5 py-3">Patient</th>
                <th className="px-5 py-3">Service</th>
                <th className="px-5 py-3">Payment Method</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-border/40">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-ivory transition-colors">
                  <td className="px-5 py-3.5 font-mono font-medium text-charcoal">{inv.invoiceNo}</td>
                  <td className="px-5 py-3.5 font-semibold text-charcoal">{inv.patientName}</td>
                  <td className="px-5 py-3.5 text-charcoal/70">{inv.service}</td>
                  <td className="px-5 py-3.5 text-charcoal/70">{inv.paymentMethod}</td>
                  <td className="px-5 py-3.5 text-charcoal/60">{inv.date}</td>
                  <td className="px-5 py-3.5 font-semibold text-charcoal">
                    {formatCurrency(inv.amount)}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={inv.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};