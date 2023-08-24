import { ServicesProps } from "@/app/page";
import { Add } from "./component/Add";
import { Container, PanelStatus } from "./style";
import { Card } from "./component/Card";

interface DataServicesProps {
  services: ServicesProps[] 
}
export function Panel({ services }: DataServicesProps){
  return (
    <Container>
      <div>
        <Add />
      </div>
      <PanelStatus>
        {services.map(service => {
          return (
            <Card key={service.id}  name={service.service} status={service.status} />
          )
        })}
      </PanelStatus>
    </Container>
  )
}