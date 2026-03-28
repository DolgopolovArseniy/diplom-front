import { useLoaderData } from "react-router";
import "../glass.css";

export default function DonationsPage() {
  const transactions = useLoaderData();

  const thClassName = "font-semibold text-left py-2 px-5";
  const tdClassName = "py-4 px-5 align-top";

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  function formatAmount(amount) {
    return Number(amount).toLocaleString("uk-UA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <>
      <title>Donations - Donathell</title>
      <div className="w-260 flex flex-col gap-10">
        <div className="flex items-center justify-between text-xl">
          <h2>Donations</h2>
          <span>{transactions.length} total</span>
        </div>
        {transactions.length > 0 ? (
          <div className="rounded-3xl bg-[#121315] overflow-hidden shadow-lg/15">
            <table className="w-full glass">
              <thead>
                <tr className="border-b border-[#101115]">
                  <th className={thClassName}>Donor</th>
                  <th className={thClassName}>Date</th>
                  <th className={thClassName}>Currency</th>
                  <th className="text-right py-2 px-5 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t._id} className="border-b border-[#101115]">
                    <td className={tdClassName}>
                      <div>
                        <p>{t.from}</p>
                        {t.message && (
                          <p className="text-[#666] mt-1 leading-relaxed wrap-break-word">
                            {t.message}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className={tdClassName}>
                      {formatDate(t.transactionDate)}
                    </td>
                    <td className={tdClassName}>
                      <span className="px-2 py-1 rounded-full glass">
                        {t.currency}
                      </span>
                    </td>
                    <td className="py-4 px-5 align-top text-right">
                      {formatAmount(t.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-lg border border-[#202123] p-10 text-center bg-[#121315]">
            <p className="text-[#666]">No donations yet.</p>
          </div>
        )}
      </div>
    </>
  );
}
