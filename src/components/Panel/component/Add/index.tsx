'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Hero, MainContent, Navgation, Overlay, Title, Trigger } from './styles'
import { X, Plus } from '@phosphor-icons/react'

export function Add(){
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
            <form >
              <label>
                Nome do serviço
                <input required placeholder='Conselho Nacional de Justiça'/>
              </label>
              
              <h2>Status do serviço</h2>

              <div>
                <label>
                  Ativo
                  <input type="radio" name='status' value='up' />
                </label>
                <label>
                  Inativo
                  <input type="radio" name='status' value='warning' />
                </label>
                <label>
                  Erro
                  <input type="radio" name='status' value='error' />
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