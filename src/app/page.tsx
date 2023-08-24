import { Panel } from "@/components/Panel";
import { Container, Header, Services } from "@/styles/pages/home";

export default function Home() {
  return (
    <Container>
      <Header>
        <Services>
          <h1>Serviços</h1>
          <div>
            <h2>25</h2>
          </div>
        </Services>
      </Header>
      <Panel/>
    </Container>
  )
}
