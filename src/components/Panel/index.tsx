import { ServicesProps } from "@/app/page";
import { Add } from "./component/Add";
import { Container, PanelStatus } from "./style";

interface PanelProps {
  services: ServicesProps[]
}

export function Panel({ services }: PanelProps){
  return (
    <Container>
      <div>
        <Add />
      </div>
      <PanelStatus>
        {}
      </PanelStatus>
    </Container>
  )
}