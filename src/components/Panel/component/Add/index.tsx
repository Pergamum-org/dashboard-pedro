'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Hero, MainContent, Navgation, Overlay, Title, Trigger } from './styles'
import { X, Plus } from '@phosphor-icons/react'

export function Add(){
  return(
    <Dialog.Root>
      <Trigger type='button'>
        <Plus size={24} weight='bold' /> Adicionar
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
            <form >
              <label>
                Nome do serviço
                <input required placeholder=''/>
              </label>

              <button type='submit'>Adicionar <Plus size={32} weight="bold" /> </button>
            </form>
          </MainContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}