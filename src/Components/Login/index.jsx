import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth'
import { Button, Group, TextInput } from '@mantine/core';
import { Else, If, Then } from 'react-if';
import Auth from '../../Context/Auth'


const Login = () => {

  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    logout();
    setUsername("");
    setPassword("");
  }


  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color="red" onClick={handleLogout}>Logout</Button>
        </Then>
        <Else>
          <Group>
            {/* remove form to make it side by side */}
            {/* <form> */}
              <TextInput
                placeholder="username"
                onChange={e => setUsername(e.target.value)}
              />
              <TextInput
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
              />
              <Button color="gray.8" onClick={() => login(username, password)}>Log in</Button>
            {/* </form> */}
          </Group>
        </Else>
      </If>
    </>
  )

}

export default Login;