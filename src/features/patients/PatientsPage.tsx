import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from '@tanstack/react-table';
import { motion } from 'framer-motion';
import { Filter, ArrowUpDown, ChevronRight, HeartPulse } from 'lucide-react';
import { Patient } from '../../types';
import { useVitalisStore } from '../../store/useVitalisStore';
import { StatusBadge } from '../../components/feedback/StatusBadge';
import { fadeUp } from '../../lib/motionVariants';

export const PatientsPage: React.FC = () => {
  const { patients, setSelectedPatient, searchQuery } = useVitalisStore();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [conditionFilter, setConditionFilter] = useState<string>('ALL');

  const filteredData = useMemo(() => {
    return patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.primaryDoctor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCondition =
        conditionFilter === 'ALL' || patient.status === conditionFilter;

      return matchesSearch && matchesCondition;
    });
  }, [patients, searchQuery, conditionFilter]);

  const columns = useMemo<ColumnDef<Patient>[]>(
    () => [
      {
        accessorKey: 'name',
        header: ({ column }) => (
          <button
            className="flex items-center gap-1 font-semibold text-xs tracking-wider uppercase text-charcoal/70"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Patient Name
            <ArrowUpDown className="w-3 h-3" />
          </button>
        ),
        cell: (info) => {
          const patient = info.row.original;
          return (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-charcoal/10 text-charcoal font-semibold text-xs flex items-center justify-center">
                {patient.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-sm text-charcoal">{patient.name}</p>
                <p className="text-xs text-charcoal/60">
                  {patient.age} yrs • {patient.gender}
                </p>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'condition',
        header: 'Condition / Diagnosis',
        cell: (info) => (
          <span className="text-sm font-medium text-charcoal/80">
            {info.getValue() as string}
          </span>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Health Status',
        cell: (info) => <StatusBadge status={info.getValue() as Patient['status']} />,
      },
      {
        accessorKey: 'primaryDoctor',
        header: 'Attending Physician',
        cell: (info) => (
          <span className="text-xs text-charcoal/80 font-medium">
            {info.getValue() as string}
          </span>
        ),
      },
      {
        accessorKey: 'vitals.bloodPressure',
        header: 'Latest BP',
        cell: (info) => (
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-charcoal/80">
            <HeartPulse className="w-3.5 h-3.5 text-scarlet" />
            {info.row.original.vitals.bloodPressure}
          </div>
        ),
      },
      {
        id: 'action',
        header: '',
        cell: () => <ChevronRight className="w-4 h-4 text-charcoal/40" />,
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 8 } },
  });

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-fraunces text-3xl font-semibold text-charcoal">
            Patient Registry
          </h1>
          <p className="text-xs text-charcoal/60 mt-0.5">
            Showing {filteredData.length} active registered patients
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-ivory-dark border border-ivory-border rounded-xl px-3 py-1.5 text-xs text-charcoal">
            <Filter className="w-3.5 h-3.5 text-charcoal/60" />
            <select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              className="bg-transparent font-medium focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Conditions</option>
              <option value="Critical">Critical</option>
              <option value="Stable">Stable</option>
              <option value="Observation">Observation</option>
              <option value="Recovering">Recovering</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-ivory-dark/70 border border-ivory-border/70 rounded-bento overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b border-ivory-border/60 bg-ivory-dark/90">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-6 py-4 text-xs font-semibold text-charcoal/70">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-ivory-border/40">
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedPatient(row.original)}
                    className="hover:bg-ivory/80 cursor-pointer transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 text-sm">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center text-charcoal/60 text-sm">
                    No matching patient records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-3 border-t border-ivory-border/60 bg-ivory-dark text-xs">
          <span className="text-charcoal/60">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() || 1}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1.5 rounded-lg border border-ivory-border bg-ivory disabled:opacity-40 font-medium"
            >
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1.5 rounded-lg border border-ivory-border bg-ivory disabled:opacity-40 font-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};