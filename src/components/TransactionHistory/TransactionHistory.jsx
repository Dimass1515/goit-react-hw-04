import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headtittle}>
          <th className={css.tittle}>Type</th>
          <th className={css.tittle}>Amount</th>
          <th className={css.tittle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.line} key={item.id}>
            <td className={css.lineitem}>{item.type}</td>
            <td className={css.lineitem}>{item.amount}</td>
            <td className={css.lineitem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}