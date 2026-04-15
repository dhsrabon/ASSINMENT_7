export default function SummaryCard({ value, label }) {
  return (
    <div className="bg-white rounded-md border border-slate-200 p-5 text-center shadow-sm">
      <h3 className="text-2xl font-semibold text-[#225b49]">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  )
}