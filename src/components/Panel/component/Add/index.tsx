'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Hero, Label, MainContent, Navgation, Overlay, Title, Trigger } from './styles'
import { X, Plus } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchedule = z.object({
  name: z.string().min(3),
  status: z.string()
})

type FormProps = z.infer<typeof formSchedule>
export function Add(){
  const { register, handleSubmit, reset, watch } = useForm<FormProps>()

  const statusInput = watch('status')

  async function handleAddNewService({name, status}: FormProps){
    await fetch('http://localhost:3333/services', 
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({service: name, status})
      })

    reset()
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
                <Label active={statusInput === 'up'}>
                  Ativo
                  <input type="radio" {...register('status')} name='status' value='up' />
                </Label>
                <Label active={statusInput === 'warning'}>
                  Inativo
                  <input type="radio" {...register('status')} name='status' value='warning' />
                </Label>
                <Label active={statusInput === 'error'}>
                  Erro
                  <input type="radio" {...register('status')} name='status' value='error' />
                </Label>
              </div>

              <button type='submit'>Adicionar <Plus size={24} weight="bold" /> </button>
            </form>
          </MainContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}