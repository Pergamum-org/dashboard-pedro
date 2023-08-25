import { Panel } from "@/components/Panel";
import { Container, Header, MainContent, Services } from "@/styles/pages/home";
import { PieChart } from "@/components/Piechart";


export interface ServicesProps {
  service: string
  id: number
  status: 'up' | 'warning' | 'error'
} 

export default async function Home() {
  const searchService = await getServices()

  if(!searchService) return <></>

  const { services } = searchService

  const totalServicesActive = services.filter(service => service.status === 'up' || service.status === 'warning')

  const allServices = services.reduce((acc, service) => {
    if(service.status === 'up'){
      acc.up++ 
      return acc
    } else if(service.status === 'warning'){
      acc.warning++ 
      return acc
    }

    acc.error++
    return acc
  }, {up: 0, error: 0, warning: 0})

  return (
    <Container>
      <Header>
        <Services>
          <h1>Serviços ativos</h1>
          <div>
            <h2>{totalServicesActive.length}</h2>
          </div>
        </Services>
      </Header>
      <MainContent>
        <Panel services={services} />
        <PieChart up={allServices.up} error={allServices.error} warning={allServices.warning} />
      </MainContent>
    </Container>
  )
}

const getServices = async () => {
  try{
    const dataServices = await fetch('http://localhost:3333/services', {method: 'GET'})

    if(!dataServices){
      throw new Error('Network response was not ok');
    }

    const service: ServicesProps[] = await dataServices.json()

    return {services: [...service]}
  } catch(error){
      console.log(error)
  }
}