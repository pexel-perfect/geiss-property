import React from "react";

interface Props {
  data: {
    table_columns: number;
    total: string;
    table_content: {
      installments: string;
      due: string;
      amount_due: string;
      due_date?: string;
      milestones?: string;
    }[];
  };
}

const PaymentPlanTable: React.FC<Props> = ({ data }) => {
  const { table_columns, table_content } = data;
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          {table_columns === 5 ? (
            <tr className="uppercase bg-primary text-black">
              <th className="table-border">Installments</th>
              <th className="table-border">% Due</th>
              <th className="table-border">Amount Due</th>
              <th className="table-border">Due Date</th>
              <th className="table-border">Milestones</th>
            </tr>
          ) : (
            <tr className="uppercase bg-primary text-black">
              <th className="table-border">Installments</th>
              <th className="table-border">% Due</th>
              <th className="table-border">Amount Due</th>
            </tr>
          )}
        </thead>
        <tbody>
          {table_content?.map((row, index) => (
            <tr key={index}>
              <td className="table-border">{row.installments}</td>
              <td className="table-border">{row.due}</td>
              <td className="table-border">{row.amount_due}</td>
              {table_columns === 5 && (
                <>
                  <td className="table-border">{row.due_date}</td>
                  <td className="table-border">{row.milestones}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentPlanTable;
