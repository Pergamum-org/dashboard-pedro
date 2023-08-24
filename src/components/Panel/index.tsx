import { Add } from "./component/Add";
import { Container } from "./style";

export function Panel(){
  return (
    <Container>
      <div>
        <Add />
      </div>
    </Container>
  )
}