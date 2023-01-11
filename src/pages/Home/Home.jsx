import { VStack, Container, Text } from "@chakra-ui/react";
import db from "../../utils/db.json";
import Element from "./Element";
import { useEffect, useState } from "react";
import { FormContext } from "../../utils/FormContext";
import { collection, addDoc } from "firebase/firestore";
import { dbFirestore } from "../../services/firebase";
import { Error, success } from "../../components/UI/alerts";
import { useNavigate } from "react-router-dom";

const initStates = {
  full_name: "",
  email: "",
  birth_date: "",
  country_of_origin: "",
  terms_and_conditions: false,
};
const Home = () => {
  const navigate = useNavigate();

  const [elementStates, setElementStates] = useState(initStates);
  const [elements, setElements] = useState({});
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
  });
  const { items } = elements;

  const handleChange = (name, type, e) => {
    let newElementStates = { ...elementStates };
    newElementStates[name] =
      type === "checkbox" ? e.target.checked : e.target.value;
    setElementStates(newElementStates);
    setFormData({
      birth_date: newElementStates.birth_date,
      country_of_origin: newElementStates.country_of_origin,
      email: newElementStates.email,
      full_name: newElementStates.full_name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const create = await addDoc(collection(dbFirestore, "users"), {
        ...formData,
      });
      if (create.id) {
        success();
        setTimeout(() => {
          navigate(`/results`, { replace: true });
        }, 2100);
      }
    } catch (error) {
      Error();
    }
  };

  useEffect(() => {
    setElements(db);
  }, []);

  return (
    <FormContext.Provider value={{ handleChange }}>
      <Container maxW={"lg"}>
        <Text
          fontSize={["xl", "2xl"]}
          textTransform="uppercase"
          fontWeight="bold"
          textAlign="center"
          py={10}
        >
          Formulario de registro
        </Text>
        <VStack as="form" onSubmit={handleSubmit} id="form1" gap={2}>
          {items?.length > 0
            ? items.map((item, i) => (
                <Element
                  key={i}
                  label={item.label}
                  type={item.type}
                  name={item.name}
                  options={item.options}
                  value={elementStates[item.name]}
                  required={item.required}
                />
              ))
            : null}
        </VStack>
      </Container>
    </FormContext.Provider>
  );
};
export default Home;
