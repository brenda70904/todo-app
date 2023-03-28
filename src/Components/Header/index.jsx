import { createStyles,Text } from "@mantine/core";

const useStyles = createStyles((theme)=>({
  header:{
    display:'flex',
    backgroundColor: theme.colors.indigo[1],
  },

}))

const Header = () =>{
  const {classes} = useStyles();
  return(

    <header className={classes.header}>
      <h1>Todo - App</h1>
    </header>
  )
}

export default Header;