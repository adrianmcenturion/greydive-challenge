import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../services/firebase";
import {
  Button,
  Container,
  Flex,
  TableContainer,
  Table,
  Thead,
  Td,
  Tr,
  Th,
  Tbody,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";

const Results = () => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getUser = async (e) => {
    setIsLoading(true)
    try {
      const testing = await getDocs(collection(dbFirestore, "users"));
      let test = [];
      testing.forEach((doc) => {
        test.push({ ...doc.data(), id: doc.id });
      });
      setDocs(test);
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      throw new Error(error)
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxW={"6xl"}>
      <Flex py={10} alignItems="center">
        <Text
          fontSize={["lg", "xl"]}
          textTransform="uppercase"
          fontWeight="bold"
        >
          Datos de usuarios registrados
        </Text>
        <Spacer />
        <Button
          colorScheme="blue"
          variant="outline"
          fontSize={["xs", "sm", "md"]}
        >
          <Link to={"/"} replace>
            Volver al formulario
          </Link>
        </Button>
      </Flex>
      <TableContainer>
        {docs.length > 0 ? (
          <Table variant="striped" size={"sm"}>
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Email</Th>
                <Th>Fecha de nacimiento</Th>
                <Th>País de origen</Th>
              </Tr>
            </Thead>
            <Tbody>
              {docs.length > 0
                ? docs.map((doc) => (
                    <Tr key={doc.id}>
                      <Td textTransform="capitalize">{doc.full_name}</Td>
                      <Td>{doc.birth_date}</Td>
                      <Td>{doc.email}</Td>
                      <Td textTransform="capitalize">
                        {doc.country_of_origin}
                      </Td>
                    </Tr>
                  ))
                : <Spinner />}
            </Tbody>
          </Table>
        ) : (
          <Text textAlign={"center"}>No hay usuarios registrados</Text>
        )}
      </TableContainer>
    </Container>
  );
};
export default Results;
