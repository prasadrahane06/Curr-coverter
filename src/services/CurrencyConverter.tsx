export interface Currency {
  name: string;

  code: string;

  symbol: string;
}

export interface ExchangeRate {
  sourceCurrency: Currency;

  targetCurrency: Currency;

  rate: number;
}

export async function getExchangeRate(
  sourceCurrency: Currency,
  targetCurrency: Currency,
): Promise<ExchangeRate> {
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Sb05sN7LPrDSkVpA3URbv9azS3V1nXu3wP2t4OYo&base_currency=${sourceCurrency.code}&currencies=${targetCurrency.code}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Could not fetch exchange rate. HTTP error! status: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();

    if (data.data && data.data[targetCurrency.code]) {
      return {
        sourceCurrency: sourceCurrency,
        targetCurrency: targetCurrency,
        rate: data.data[targetCurrency.code],
      };
    } else {
      throw new Error('Unable to fetch exchange rate from API');
    }
  } catch (error: any) {
    console.error('Error fetching exchange rate:', error.message);
    return {
      sourceCurrency: sourceCurrency,
      targetCurrency: targetCurrency,
      rate: 1.2,
    };
  }
}
