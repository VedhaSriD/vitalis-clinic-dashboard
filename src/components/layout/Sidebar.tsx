import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Stethoscope,
  Receipt,
  Settings,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
} from 'lucide-react';
import { useVitalisStore } from '../../store/useVitalisStore';

const NAV_ITEMS = [
  { name: 'Overview', to: '/', icon: LayoutDashboard },
  { name: 'Patients', to: '/patients', icon: Users },
  { name: 'Appointments', to: '/appointments', icon: CalendarCheck },
  { name: 'Doctors', to: '/doctors', icon: Stethoscope },
  { name: 'Billing', to: '/billing', icon: Receipt },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const { sidebarCollapsed, toggleSidebar } = useVitalisStore();

  return (
    <aside
      className={`relative z-20 flex flex-col bg-charcoal text-white transition-all duration-300 ease-in-out border-r border-charcoal-light ${
        sidebarCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="h-20 flex items-center justify-between px-5 border-b border-charcoal-light/60">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-scarlet to-scarlet-light flex items-center justify-center flex-shrink-0 shadow-lg shadow-scarlet/20">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col whitespace-nowrap"
            >
              <span className="font-fraunces text-xl font-bold tracking-tight text-ivory">
                Vitalis
              </span>
              <span className="text-[10px] tracking-widest text-ivory/50 uppercase">
                Clinical Health
              </span>
            </motion.div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-charcoal-surface transition"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1.5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `relative flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-ivory/60 hover:text-white hover:bg-charcoal-surface/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-scarlet/90 to-scarlet-light/80 rounded-xl -z-10 shadow-md shadow-scarlet/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {!sidebarCollapsed && (
        <div className="p-4 mx-3 mb-4 rounded-xl bg-charcoal-surface border border-charcoal-light text-xs">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-ivory/90">Main OPD Active</span>
          </div>
          <p className="text-ivory/50 text-[11px] leading-relaxed">
            Emergency triage is synchronized with Ward 3.
          </p>
        </div>
      )}
    </aside>
  );
};