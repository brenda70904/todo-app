import { createStyles, Header, Navbar, NavLink, Group } from "@mantine/core";


const useStyles = createStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'cneter',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.blue[9],
    hight: '100%',
    padding: '20px',

  },
  link:{
    color: theme.colors.gray[0],
    padding: '20px',
    fontSize: theme.fontSizes.xl,
  }

}));

const HeaderComponent = () => {
  const { classes } = useStyles();
  return (

    <Header >
      <Navbar className={classes.navbar} height={100} >
        <Group>
          <NavLink className={classes.link} to="/" default >Home</NavLink>
          <NavLink to="setting">Settings</NavLink>
        </Group>
      </Navbar>

    </Header>
  )
}

export default HeaderComponent;