import { formatter } from "../util/investment";

export default function Result({ calculated }) {
  // The 'calculated' prop is expected to be an array of objects
  // Each object contains data for a year of investment
  // The structure of each object is:
  // {
  //   year: <year number>,
  //   interest: <interest earned in that year>,
  //   valueEndOfYear: <total investment value at the end of that year>,
  //   annualInvestment: <amount invested in that year>
  // }

  let initInvestCap = parseInt(
    calculated[0].valueEndOfYear -
      calculated[0].interest -
      calculated[0].annualInvestment,
    10
  );

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {calculated.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear.toFixed(2))}</td>
            <td>{formatter.format(yearData.interest.toFixed(2))}</td>
            <td>
              {formatter.format(
                calculated
                  .slice(0, yearData.year)
                  .reduce((total, data) => total + data.interest, 0)
                  .toFixed(2)
              )}
            </td>
            <td>
              {formatter.format(
                calculated
                  .slice(0, yearData.year)
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.annualInvestment,
                    initInvestCap
                  )
                  .toFixed(2)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
