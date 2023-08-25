import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Simula a função getServices
jest.mock('@/app/getServices', () => {
  return {
    __esModule: true,
    default: async () => {
      return {
        services: [
          { id: 1, service: 'Service 1', status: 'up' },
          { id: 2, service: 'Service 2', status: 'warning' },
          { id: 3, service: 'Service 3', status: 'error' },
        ],
      };
    },
  };
});

describe('renders home component with correct service counts', async () => {
  render(<Home />);

  // Espera a resolução da chamada assíncrona ao mock getServices
  await screen.findByText('Serviços ativos');

  // Verifica se os elementos com os números de serviços estão presentes
  expect(screen.getByText('2')).toBeInTheDocument(); // Total de serviços ativos
  expect(screen.getByText('1')).toBeInTheDocument(); // Total de serviços 'up'
  expect(screen.getByText('1')).toBeInTheDocument(); // Total de serviços 'warning'
  expect(screen.getByText('1')).toBeInTheDocument(); // Total de serviços 'error'
});
