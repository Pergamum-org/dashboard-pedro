import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '@/components/Panel/component/Card';

describe('renders card with correct name and status', () => {
  const cardName = 'Sample Card';
  const cardStatus = 'up';

  render(<Card name={cardName} status={cardStatus} />);

  const nameElement = screen.getByText(cardName);
  const statusElement = screen.getByText('Status');
  const spanElement = screen.getByRole('span');

  expect(nameElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(spanElement).toHaveClass('up');
});

describe('renders card with different status', () => {
  const cardName = 'Another Card';
  const cardStatus = 'error';

  render(<Card name={cardName} status={cardStatus} />);

  const nameElement = screen.getByText(cardName);
  const statusElement = screen.getByText('Status');
  const spanElement = screen.getByRole('span');

  expect(nameElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(spanElement).toHaveClass('error');
});
