'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Hero, MainContent, Navgation, Overlay, Title, Trigger } from './styles'
import { X, Plus } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchedule = z.object({
  name: z.string().min(3),
  status: z.string()
})

type FormProps = z.infer<typeof formSchedule>
export function Add(){
  const { register, handleSubmit } = useForm<FormProps>()

  async function handleAddNewService({name, status}: FormProps){
    await fetch('http://localhost:3333/services', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name, status})})
  }

  return(
    <Dialog.Root>
      <Trigger type='button'>
        <Plus size={20} weight='bold' /> Adicionar
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Hero>
            <Close type='button'>
              <X size={24} weight='bold' />
            </Close>

            <Navgation>
              <Title select>Adicionar um serviço a grid</Title>
            </Navgation>
          </Hero>

          <MainContent>
            <form onSubmit={handleSubmit(handleAddNewService)}>
              <label>
                Nome do serviço
                <input required {...register('name')} placeholder='Conselho Nacional de Justiça'/>
              </label>
              
              <h2>Status do serviço</h2>

              <div>
                <label>
                  Ativo
                  <input type="radio" {...register('status')} name='status' value='up' />
                </label>
                <label>
                  Inativo
                  <input type="radio" {...register('status')} name='status' value='warning' />
                </label>
                <label>
                  Erro
                  <input type="radio" {...register('status')} name='status' value='error' />
                </label>
              </div>

              <button type='submit'>Adicionar <Plus size={24} weight="bold" /> </button>
            </form>
          </MainContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}