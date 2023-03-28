import { createStyles, Header, Navbar,Text} from "@mantine/core";


const useStyles = createStyles((theme)=>({
  navbar:{
    display:'flex',
    backgroundColor: theme.colors.blue[9],
    color: theme.colors.gray[0],
    hight:'100%',
    padding:theme.spacing.md,
    fontSize:theme.fontSizes.md,

  },

}));

const HeaderComponent = () =>{
  const {classes} = useStyles();
  return(

    <Header >
      <Navbar className={classes.navbar} height={100} >
          <Text>Home</Text>
          <Text>Todo - App</Text>
      </Navbar>
    
    </Header>
  )
}

export default HeaderComponent;