import { Panel } from "@/components/Panel";
import { Container, Header, MainContent, Services } from "@/styles/pages/home";

export interface ServicesProps {
  service: string
  id: number
  status: 'up' | 'warning' | 'error'
}

export interface DataServicesProps {
  services: ServicesProps[]
}

export default async function Home() {
  const { services } = await getServices()

  const utilsServices = services.filter(service => service.status === 'up' || service.status === 'warning')

  return (
    <Container>
      <Header>
        <Services>
          <h1>Serviços ativos</h1>
          <div>
            <h2>{utilsServices.length}</h2>
          </div>
        </Services>
      </Header>
      <MainContent>
        <Panel services={services}/>
        <div></div>
      </MainContent>
    </Container>
  )
}

const getServices = async () => {
  const dataServices = await fetch('http://localhost:3000/api/book/assenssiment', {
      cache: 'force-cache',
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    })

    const { services }: DataServicesProps = await dataServices.json()

  return {
    services
  }
}