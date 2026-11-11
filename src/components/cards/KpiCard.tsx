import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { CountUpNumber } from '../feedback/CountUpNumber';
import { fadeUp } from '../../lib/motionVariants';

interface KpiCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend: string;
  isPositive: boolean;
  icon: LucideIcon;
  subtext: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  prefix = '',
  suffix = '',
  trend,
  isPositive,
  icon: Icon,
  subtext,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-ivory-dark/70 border border-ivory-border/60 rounded-bento p-5 shadow-soft flex flex-col justify-between transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium tracking-wide uppercase text-charcoal/60">
          {title}
        </span>
        <div className="p-2.5 rounded-xl bg-ivory text-charcoal/80 border border-ivory-border/50">
          <Icon className="w-4 h-4 text-charcoal" />
        </div>
      </div>

      <div className="my-1">
        <h3 className="font-fraunces text-3xl font-semibold text-charcoal tracking-tight">
          <CountUpNumber end={value} prefix={prefix} suffix={suffix} />
        </h3>
      </div>

      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-ivory-border/40 text-xs">
        <span
          className={`font-semibold px-1.5 py-0.5 rounded text-[11px] ${
            isPositive
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-rose-100 text-rose-800'
          }`}
        >
          {trend}
        </span>
        <span className="text-charcoal/60">{subtext}</span>
      </div>
    </motion.div>
  );
};