import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
import ShopContext from '../context/shop-context'
const TAX_RATE = 0.06
const useStyles = makeStyles(theme => ({
  tabl: {
    
  borderBlockEndStyle:"groove",
   borderColor:"#d50000",
   borderWidth:3,
   borderWidth:5

  },

  container: {
    marginTop: '3.5rem'
  },
  button: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(86),
    color:"white",
    background:"rgba(0, 0, 0, 0.95)",
    width:"150px",
    height:"67px"
  },
  na:{
    fontSize:22,
    fontFamily:"Serif",
    fontWeight: "bold",
    color:"#d50000"
  },
  Qa:{
   fontSize:21,
   fontFamily:"Serif",
   fontWeight: "bold",
   color:"#d50000",
   fontWeight: "bold",
  },
  m:{
    
    fontSize:17,
    fontFamily:"Serif",
    fontWeight: "bold",
    
   


  },
  tax:{
    fontSize:17,
   fontFamily:"Serif",
   fontWeight: "bold",
   color:"#d50000",
   fontWeight: "bold",
  },
  ts:{
    fontSize:15,
    fontFamily:"Serif",
    fontWeight: "bold",
  }

}));

function ccyFormat(num) {
  return `${num.toFixed(2)} JOD`
}
function subtotal(items) {
  return  items.map(({ price, quantity}) => price * quantity).reduce((sum, i) => sum + i, 0)
}
export default function SpanningTable() {
  const classes = useStyles()
  const order = () => {
  
    window.location = "/location";
     //alert(value)
  };
  const context = React.useContext(ShopContext)
  const history = useHistory()
  const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem("cart"))|| [])
  let invoiceSubtotal = subtotal(cartItems)
  let invoiceTaxes = TAX_RATE * invoiceSubtotal
  let invoiceTotal = invoiceTaxes + invoiceSubtotal
  let localCart = localStorage.getItem("cart");
  React.useEffect(() => {
    // there is no token, redirect to login page
    if (localStorage.getItem('loggedInToken') === null) {
      history.push('/login')
    }
    //turn it into js
    localCart = JSON.parse(localCart);
    // //load persisted cart into state if it exists
    if (localCart) {
      setCartItems(localCart)
      invoiceSubtotal = subtotal(localCart)
    }
  }, [localCart])
  return (
    <div>
    <div>
    <section>
      <Container className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.tabl} >
            <TableHead>
              
              
                {/* <TableCell align="right">Action</TableCell> */}
              
              <TableRow>
                <TableCell className={classes.na}>Product</TableCell>
                <TableCell className={classes.Qa} >Quantity</TableCell>
                <TableCell  className={classes.Qa}>Price</TableCell>
                {/* <TableCell align="right">Unit</TableCell> */}
                <TableCell  className={classes.Qa} align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.length > 0 && cartItems.map((cartItem, idx) => (
                <TableRow key={idx}>
               
                  <TableCell className={classes.m}>{cartItem.name}</TableCell>
                  <TableCell className={classes.m} >{cartItem.quantity}</TableCell>
                  <TableCell className={classes.m}>{cartItem.price}jd</TableCell>
                  <TableCell className={classes.m} align="right">{ccyFormat(cartItem.price * cartItem.quantity)}</TableCell>
                  <TableCell >
                  <IconButton onClick={context.removeProductFromCart.bind(this, cartItem._id)}>
                    <DeleteIcon className={classes.icon} />
                  </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {cartItems.length > 0 && (
              <>
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell  className={classes.tax} colSpan={2}>Subtotal</TableCell>
                  <TableCell className={classes.ts} >{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
               <TableRow>
                  <TableCell  className={classes.tax} >Tax</TableCell>
                  <TableCell className={classes.ts} >{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                  <TableCell className={classes.ts} >{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell  className={classes.tax} colSpan={2}>Total</TableCell>
                  <TableCell className={classes.ts} >{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </>
              )}
              {cartItems.length < 1 && (
                <Typography className={classes.title} variant="p" id="tableTitle" component="p">
                  No item in your shopping cart
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>  
    </section>
    </div>
    <div>
    <Button
        
        size="large"
        variant="contained"
        className={classes.button}
        component="a"
        onClick={order}
      >
Next     </Button>
    </div>
    </div>
  )
}

