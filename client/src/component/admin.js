import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    name: 'category',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

console.log(state.category)
  //var firstName = document.getElementById("outlined-age-native-simple").value;
 // console.log(firstName)
//console.log(this.setState.name[0].value)
  return (
    <div>
     
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">category</InputLabel>
        <Select
          native
          value={state.category}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'category',
            id: 'outlined-age-native-simple',
          }}
     >
          <option value={"Bread"}>Bread</option>
          <option value={"dessert"}>dessert</option>
          <option value={"cookies"}>cookies</option>
        </Select>

        <Button onClick={() => { alert('clicked') }}>Click me</Button>
      </FormControl>
    
    </div>
  );
}































