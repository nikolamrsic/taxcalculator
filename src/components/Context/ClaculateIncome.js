export default function CalculateIncome(value, freq, type) {
  const tax = 1.65;

  let table = {
    weekly: {
      gross: 0,
      neto: 0,
      tax: 0,
    },
    monthly: {
      gross: 0,
      neto: 0,
      tax: 0,
    },
    annually: {
      gross: 0,
      neto: 0,
      tax: 0,
    },
  };
  let arr = [];
  switch (type) {
    case "gross":
      if (freq === "weekly") {
        //gross
        table.weekly.gross = value;
        table.monthly.gross = Math.round(value * 4);
        table.annually.gross = Math.round(value * 4 * 12);
        //neto
        table.weekly.neto = Math.round(Math.abs(value - value * tax));
        table.monthly.neto = Math.round(Math.abs(value * 4 - value * 4 * tax));
        table.annually.neto = Math.round(
          Math.abs(value * 4 * 12 - value * 4 * 12 * tax)
        );
        //tax
        table.weekly.tax = Math.round(
          Math.abs(table.weekly.gross - table.weekly.neto)
        );
        table.monthly.tax = Math.round(
          Math.abs(table.monthly.gross - table.monthly.neto)
        );
        table.annually.tax = Math.round(
          Math.abs(table.annually.gross - table.annually.neto)
        );
      }
      if (freq === "monthly") {
        //gross
        table.weekly.gross = Math.round(Math.abs(value / 4));
        table.monthly.gross = Math.round(Math.abs(value));
        table.annually.gross = Math.round(Math.abs(value * 12));
        //neto
        table.weekly.neto = Math.round(Math.abs(value / 4 - (value / 4) * tax));
        table.monthly.neto = Math.round(Math.abs(value - value * tax));
        table.annually.neto = Math.round(
          Math.abs(value * 12 - value * 12 * tax)
        );
        //tax
        table.weekly.tax = Math.round(
          Math.abs(table.weekly.gross - table.weekly.neto)
        );
        table.monthly.tax = Math.round(
          Math.abs(table.monthly.gross - table.monthly.neto)
        );
        table.annually.tax = Math.round(
          Math.abs(table.annually.gross - table.annually.neto)
        );
      }
      if (freq === "annually") {
        //gross
        table.weekly.gross = Math.round(Math.abs(value / 12 / 4));
        table.monthly.gross = Math.round(Math.abs(value / 12));
        table.annually.gross = Math.round(Math.abs(value));
        //neto
        table.weekly.neto = Math.round(
          Math.abs(value / 12 / 4 - (value / 12 / 4) * tax)
        );
        table.monthly.neto = Math.round(
          Math.abs(value / 12 - (value / 12) * tax)
        );
        table.annually.neto = Math.round(Math.abs(value - value * tax));
        //tax
        table.weekly.tax = Math.round(
          Math.abs(table.weekly.gross - table.weekly.neto)
        );
        table.monthly.tax = Math.round(
          Math.abs(table.monthly.gross - table.monthly.neto)
        );
        table.annually.tax = Math.round(
          Math.abs(table.annually.gross - table.annually.neto)
        );
      }
      break;
    case "neto":
      if (freq === "weekly") {
        //neto
        table.weekly.neto = Math.round(Math.abs(value));
        table.monthly.neto = Math.round(Math.abs(value * 4));
        table.annually.neto = Math.round(Math.abs(value * 4 * 12));
        //gorss
        table.weekly.gross = Math.round(Math.abs(value + value / tax));
        table.monthly.gross = Math.round(
          Math.abs(value * 4 + (value * 4) / tax)
        );
        table.annually.gross = Math.round(
          Math.abs(value * 4 * 12 + (value * 4 * 12) / tax)
        );
        table.weekly.tax = Math.round(
          Math.abs(table.weekly.gross - table.weekly.neto)
        );
        table.monthly.tax = Math.round(
          Math.abs(table.monthly.gross - table.monthly.neto)
        );
        table.annually.tax = Math.round(
          Math.abs(table.annually.gross - table.annually.neto)
        );
      }
      if (freq === "monthly") {
        //neto
        table.weekly.neto = Math.round(Math.abs(value / 4));
        table.monthly.neto = Math.round(Math.abs(value));
        table.annually.neto = Math.round(Math.abs(value * 12));
        //gross
        table.weekly.gross = Math.round(Math.abs(value / 4 + value / 4 / tax));
        table.monthly.gross = Math.round(Math.abs(value + value / tax));
        table.annually.gross = Math.round(
          Math.abs(value * 12 + (value * 12) / tax)
        );
        //tax
        table.weekly.tax = Math.round(
          Math.abs(table.weekly.gross - table.weekly.neto)
        );
        table.monthly.tax = Math.round(
          Math.abs(table.monthly.gross - table.monthly.neto)
        );
        table.annually.tax = Math.round(
          Math.abs(table.annually.gross - table.annually.neto)
        );
      }
      if (freq === "annually") {
        //neto
        table.weekly.neto = Math.round(Math.abs(value / 12 / 4));
        table.monthly.neto = Math.round(Math.abs(value / 12));
        table.annually.neto = Math.round(Math.abs(value));
        //gross
        table.weekly.gross = Math.round(
          Math.abs(value / 12 / 4 + value / 12 / 4 / tax)
        );
        table.monthly.gross = Math.round(
          Math.abs(value / 12) + value / 12 / tax
        );
        table.annually.gross = Math.round(Math.abs(value + value / tax));
        //tax
        table.weekly.tax = Math.round(
          Math.abs(table.weekly.gross - table.weekly.neto)
        );
        table.monthly.tax = Math.round(
          Math.abs(table.monthly.gross - table.monthly.neto)
        );
        table.annually.tax = Math.round(
          Math.abs(table.annually.gross - table.annually.neto)
        );
      }
      break;
  }

  return table;
}
