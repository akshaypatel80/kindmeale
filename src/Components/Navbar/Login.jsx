import {
  Button,
  Container,
  Divider,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { Appcontext } from "../../context/AuthContex";
import axios from "axios";

const Login = ({ isModalVisible, setIsModalVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const { isAuth, token, handleLogin, handleLogout } = useContext(Appcontext);
  const toast = useToast();
  function handleSubmit() {
    const paylod = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", paylod)
      .then((res) => {
        console.log(res.data);
        handleLogin(res.data.token);
        setIsModalVisible(false);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Errer",
          description: "Enter Valid Email & Password",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      });
  }

  const onClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal isOpen={isModalVisible} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin={"100px"}>
          <ModalHeader textAlign={"center"}>
            <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" />
            <Text>Member Login</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <Container
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Input
                placeholder="Enter Email id"
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Enter Password"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                colorScheme={"whatsapp"}
                fontSize={"25px"}
                width={"50%"}
                marginTop={"20px"}
                p={"15px 20px"}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Container>
          </ModalBody>
          <hr />
          <ModalFooter pb={9} justifyContent={"center"}>
            <Stack align={"center"}>
              <Button
                display={"block"}
                colorScheme={"facebook"}
                fontSize={"20px"}
              >
                Login With Facebook
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
