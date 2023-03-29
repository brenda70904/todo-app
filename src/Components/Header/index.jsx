import { createStyles, Header, Navbar,NavLink,Text} from "@mantine/core";


const useStyles = createStyles((theme)=>({
  navbar:{
    display:'flex',
    flexDirection:'row',
    alignItems: 'cneter',
    justifyContent:'space-between',
    backgroundColor: theme.colors.blue[9],
    color: theme.colors.gray[0],
    hight:'100%',
    padding:'20px',
    fontSize:theme.fontSizes.xl,

  },


}));

const HeaderComponent = () =>{
  const {classes} = useStyles();
  return(

    <Header >
      <Navbar className={classes.navbar} height={100} >
          <Text >Home</Text>
          <Text >Setting</Text>
      </Navbar>
    
    </Header>
  )
}

export default HeaderComponent;