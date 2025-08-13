function CurrencyTable() {
  return (
    <div className="container mt-5">
      <div className="mx-5 px-5">
        <table class="table border">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">Currency futures</th>
              <th scope="col">Currency options</th>
            </tr>
          </thead>
          <tbody className="p-5">
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹ 20/executed order whichever is lower</td>
              <td>₹ 20/executed order</td>
            </tr>
            <tr >
              <td className="bg-light">STT/CTT</td>
              <td className="bg-light">No STT</td>
              <td className="bg-light">No STT</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>NSE: 0.00035%<br></br>BSE: 0.00045%</td>
              <td>NSE: 0.0311%<br></br>BSE: 0.001%</td>
            </tr>
            <tr>
              <td className="bg-light">GST</td>
              <td className="bg-light">18% on (brokerage + SEBI charges + transaction charges)</td>
              <td className="bg-light">18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td className="bg-light">Stamp charges</td>
              <td className="bg-light">0.0001% or ₹10 / crore on buy side</td>
              <td className="bg-light">0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyTable;
