import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Features/Redux/hooks', () => ({
  useAppDispatch: () => {
    return () => {};
  },
  useAppSelector: (cb: Function) => {
    const state = {
      dataTable: {
        loadedData: [],
        filteredData: [],
        dataKeys: [''],
        isLoading: true,
      },
      conditions: {
        groups: [
          {
            id: 'hu9igqqovi7',
            rules: [
              {
                condition: '',
                operator: 0,
                operand: '',
                id: '0j69kf8mgku5',
              },
            ],
          },
        ],
      },
    };

    return cb(state);
  },
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Condition Builder/i);
  expect(linkElement).toBeInTheDocument();
});
