import newArray from '../sort';

test('small first', () => {
   const received = newArray([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ]);
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}
  ];
  expect(received).toEqual(expected);
})