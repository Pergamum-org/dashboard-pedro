import React from 'react';
import { render, screen } from '@testing-library/react';
import { Panel } from '@/components/Panel';

describe('renders panel component with services correctly', () => {
  const mockServices = [
    { id: 1, service: 'Service 1', status: 'up' },
    { id: 2, service: 'Service 2', status: 'warning' },
  ];

  render(<Panel services={mockServices} />);

  expect(screen.getByText('Service 1')).toBeInTheDocument();
  expect(screen.getByText('Service 2')).toBeInTheDocument();
  expect(screen.getByText('up')).toBeInTheDocument();
  expect(screen.getByText('warning')).toBeInTheDocument();
});

describe('renders panel component without services', () => {
  render(<Panel services={[]} />);

  expect(screen.queryByText('Service 1')).toBeNull();
  expect(screen.queryByText('Service 2')).toBeNull();
  expect(screen.queryByText('up')).toBeNull();
  expect(screen.queryByText('warning')).toBeNull();
});