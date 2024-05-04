import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import usePeople from "../hooks/usePeople";

export default function DetailPeople() {
  const { id } = useParams();
  const { onePeople, getOnePeople } = usePeople();

  useEffect(() => {
    getOnePeople(id);
  }, []);

  return (
    <Container>
      <Typography>{}</Typography>
    </Container>
  );
}
