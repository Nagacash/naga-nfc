import React from 'react';

const DoTheMath: React.FC = () => {
  const cardCosts = {
    '100': 5.29, // €529 / 100
    '500': 3.99, // €1999 / 500
    '1000': 3.79, // €3799 / 1000
  };

  const sellingPrices = [10, 15, 20, 100]; // per unit

  return (
    <section id="do-the-math" className="py-20 bg-brand-dark text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Do the Math: Your Profit Margins</h2>
        

        {Object.entries(cardCosts).map(([quantity, costPerCard]) => (
          <div key={quantity} className="mb-12">
            <h3 className="text-2xl font-bold text-brand-red mb-6">{quantity} pcs Bundle</h3>
            <p className="text-gray-300 mb-6">Your cost per card: €{costPerCard.toFixed(2)}</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/10 rounded-lg overflow-hidden shadow-lg mb-8 mx-auto">
                <thead>
                  <tr className="bg-brand-red text-white">
                    <th className="py-3 px-4 text-left">Selling Price per Unit</th>
                    <th className="py-3 px-4 text-left">Revenue ({quantity} units)</th>
                    <th className="py-3 px-4 text-left">Total Cost ({quantity} units)</th>
                    <th className="py-3 px-4 text-left">Gross Profit ({quantity} units)</th>
                  </tr>
                </thead>
                <tbody>
                  {sellingPrices.map((price) => {
                    const revenue = price * parseInt(quantity);
                    const totalCost = costPerCard * parseInt(quantity);
                    const grossProfit = revenue - totalCost;
                    return (
                      <tr key={price} className="border-b border-gray-700 last:border-b-0">
                        <td className="py-3 px-4">€{price.toFixed(2)}</td>
                        <td className="py-3 px-4">€{revenue.toFixed(2)}</td>
                        <td className="py-3 px-4">€{totalCost.toFixed(2)}</td>
                        <td className="py-3 px-4">€{grossProfit.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          See how much you can earn by selling your album catalogs on Streamii NFC Business Cards.
          We've calculated potential profits based on our bundle pricing and common selling prices.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mt-12">
          *Prices are estimates and do not include shipping, taxes, or other potential fees.
          "Unit" refers to one NFC Business Card or USB.
        </p>
      </div>
    </section>
  );
};

export default DoTheMath;