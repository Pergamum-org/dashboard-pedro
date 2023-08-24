import { Panel } from "@/components/Panel";
import { Container, Header, MainContent, Services } from "@/styles/pages/home";

const fakeServer = {
  services: [
    {
      id: 1,
      service: "SERPRO",
      status: "up"
    },
    {
      id: 2,
      service: "Conselho Nacional de Justiça",
      status: "warning"
    },
    {
      id: 3,
      service: "Tribunal de Justiça",
      status: "error"
    }
  ]
}

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
        <div></div>
      </MainContent>
    </Container>
  )
}

const getServices = async () => {
  try{
    const dataServices = await fetch('http://localhost:3333/services')

    if(!dataServices){
      throw new Error('Network response was not ok');
    }

    const service: ServicesProps[] = await dataServices.json()


    return {services: [...service]}
  } catch(error){
      console.log(error)
  }
}