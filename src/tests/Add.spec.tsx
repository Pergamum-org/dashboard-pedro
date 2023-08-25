import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Add } from '@/components/Panel/component/Add';

describe('renders the component correctly', () => {
  render(<Add />);

  expect(screen.getByText('Adicionar')).toBeInTheDocument();
  expect(screen.getByText('Adicionar um serviço a grid')).toBeInTheDocument();
  expect(screen.getByLabelText('Nome do serviço')).toBeInTheDocument();
  expect(screen.getByLabelText('Ativo')).toBeInTheDocument();
  expect(screen.getByLabelText('Inativo')).toBeInTheDocument();
  expect(screen.getByLabelText('Erro')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
});

describe('submits form with correct data', async () => {
  render(<Add />);

  const nameInput = screen.getByLabelText('Nome do serviço');
  const activeRadioButton = screen.getByLabelText('Ativo');
  const submitButton = screen.getByRole('button', { name: 'Adicionar' });

  userEvent.type(nameInput, 'Conselho Nacional de Justiça');
  fireEvent.click(activeRadioButton);
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith('http://localhost:3333/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Conselho Nacional de Justiça', status: 'up' }),
    });
  });
});
