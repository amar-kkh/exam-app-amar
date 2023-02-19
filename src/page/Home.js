import { useEffect,} from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home({user}) {

    const navigate = useNavigate();
    


    useEffect(() =>{
        if(Object.keys(user).length === 0 && !localStorage.getItem('loggedUser')){
            navigate("/sign-in");
        }

    }, [user])

    const logout = () => {
        navigate('/sign-in')
        localStorage.removeItem("loggedUser")
      }

  return (
    <Container>
        <h1>Home</h1>
        <Button onClick={() => logout()}>Logout</Button>
    </Container>
  )
}

export default Home