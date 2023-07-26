export const standardizedRate = (rates: [{ rate: number; review: number }]) => {
  const dataRates = [
    {
      rate: 5,
      review: 0,
    },
    {
      rate: 4,
      review: 0,
    },
    {
      rate: 3,
      review: 0,
    },
    {
      rate: 2,
      review: 0,
    },
    {
      rate: 1,
      review: 0,
    },
  ];

  rates.map((item: any) => {
    switch (item.rate) {
      case 5:
        dataRates[0].review = item.review;
        break;
      case 4:
        dataRates[1].review = item.review;
        break;
      case 3:
        dataRates[2].review = item.review;
        break;
      case 2:
        dataRates[3].review = item.review;
        break;
      case 1:
        dataRates[4].review = item.review;
        break;
      default:
        return;
    }
  });

  return dataRates;
};
