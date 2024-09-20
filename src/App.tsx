import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderedOptions = {
  sortType: SortType;
  isReversed: boolean;
};

const getReorderedGoods = (
  goods: string[],
  { sortType, isReversed }: ReorderedOptions,
) => {
  const availableGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      availableGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      availableGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    availableGoods.reverse();
  }

  return availableGoods;
};

export const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortType, setSortType] = useState(SortType.NONE);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isReversed, setIsReversed] = useState(false);

  const reorderedGoods = getReorderedGoods(goodsFromServer, {
    sortType,
    isReversed,
  });

  return (
    <div className="section content">
      <div className="buttons">
        <button type="button" className="button is-info is-light">
          Sort alphabetically
        </button>

        <button type="button" className="button is-success is-light">
          Sort by length
        </button>

        <button type="button" className="button is-warning is-light">
          Reverse
        </button>

        <button type="button" className="button is-danger is-light">
          Reset
        </button>
      </div>

      <ul>
        <ul>
          {reorderedGoods.map(good => (
            <li key={Date.now()} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
