const price = {
	chicken: 18000,
	bap_burger: 3000,
	cheese_ball: 6000,
	melon_soda: 4000,
};

const account = [
	{ name: 'sinji', order: { chicken: 1, bap_burger: 2, cheese_ball: 2 } },
	{ name: 'misato', order: { chicken: 1, bap_burger: 2 } },
	{ name: 'asuka', order: { chicken: 1, melon_soda: 2 } },
	{ name: 'ray', order: { chicken: 1, bap_burger: 2, cheese_ball: 6, melon_soda: 9 } },
	{ name: 'kaoru', order: { cheese_ball: 1, melon_soda: 1 } },
];

const totalSum = account.map((customer) => {
	let sum = 0;
	for (const [item, quantity] of Object.entries(customer.order)) {
		sum += price[item] * quantity;
	}
	return { name: customer.name, total: sum };
});

const grandTotal = account.reduce((total, customer) => {
	for (const [item, quantity] of Object.entries(customer.order)) {
		total += price[item] * quantity;
	}
	return total;
}, 0);

console.log({ totalSum, grandTotal });
/*
{
  totalSum: [
    { name: 'sinji', total: 36000 },
    { name: 'misato', total: 24000 },
    { name: 'asuka', total: 26000 },
    { name: 'ray', total: 96000 },
    { name: 'kaoru', total: 10000 }
  ],
  grandTotal: 192000
}
*/
