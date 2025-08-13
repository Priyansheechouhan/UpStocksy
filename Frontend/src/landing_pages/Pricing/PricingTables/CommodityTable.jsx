function CommodityTable() {
  return (
    <div className="container mt-5">
      <div className="mx-lg-5 mx-md-0 mx-sm-0 px-lg-5 px-md-0 px-sm-0">
        <table class="table border">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">Commodity futures</th>
              <th scope="col">Commodity options</th>
            </tr>
          </thead>
          <tbody className="p-5">
            <tr>
              <td>Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>₹ 20/executed order</td>
            </tr>
            <tr>
              <td className="bg-light">STT/CTT</td>
              <td className="bg-light">0.01% on sell side (Non-Agri)</td>
              <td className="bg-light">0.05% on sell side</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>
                MCX: 0.0021%<br></br>NSE: 0.0001%
              </td>
              <td>
                MCX: 0.0418%<br></br>NSE: 0.001%
              </td>
            </tr>
            <tr>
              <td className="bg-light">GST</td>
              <td className="bg-light">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="bg-light">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td>
                Agri:<br></br>
                ₹1 / crore<br></br>
                Non-agri:<br></br>
                ₹10 / crore
              </td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td className="bg-light">Stamp charges</td>
              <td className="bg-light">0.002% or ₹200 / crore on buy side</td>
              <td className="bg-light">0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommodityTable;
