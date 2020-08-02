// import React, { useContext, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/core/IconButton'

// import ShopContext from '../context/shop-context'

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   title: {
//     flex: '1 1 100%',
//     padding: '1rem'
//   },
//   container: {
//     marginTop: '3.3rem'
//   }
// });

// const CartPage = props => {
//   const history = useHistory()
//   const classes = useStyles()
//   const context = useContext(ShopContext)

//   const totalItems = context.cart.reduce((count, curItem) => {
//     return count + curItem.quantity
//   }, 0)

//   React.useEffect(() => {
//     // there is no token, redirect to login page
//     if (localStorage.getItem('loggedInToken') === null) {
//       history.push('/login')
//     }
//   }, [])

//   return (
//     <section>
//       <Container className={classes.container}>
//     <TableContainer component={Paper}>
//       <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           Total Items: {totalItems}
//         </Typography>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Category</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Quantity</TableCell>
//             <TableCell align="right">Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {context.cart.length > 0 ? context.cart.map((cartItem, idx) => (
//             <TableRow key={idx}>
//               <TableCell component="th" scope="row">
//                 {cartItem.name}
//               </TableCell>
//               <TableCell align="right">{cartItem.category}</TableCell>
//               <TableCell align="right">{cartItem.price}</TableCell>
//               <TableCell align="right">{cartItem.quantity}</TableCell>
//               <IconButton onClick={context.removeProductFromCart.bind(this, cartItem._id)}>
//                 <DeleteIcon className={classes.icon} />
//               </IconButton>
//             </TableRow>
//           )): (
//             <Typography className={classes.title} variant="p" id="tableTitle" component="p">
//               No item in your shopping cart
//             </Typography>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     {/* // <React.Fragment>
//     //   <span>totalItems : {totalItems}</span>
//     //   <main>
//     //     {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
//     //     <ul>
//     //       {context.cart.map((cartItem, idx) => (
//     //         <li key={idx}>
//     //           <div>
//     //             <strong>{cartItem.name}</strong> - ${cartItem.price} ({cartItem.quantity})
//     //           </div>
//     //           <div>
//     //             <button onClick={context.removeProductFromCart.bind(this, cartItem._id)}>
//     //               Remove from Cart
//     //             </button>
//     //           </div>
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   </main>
//     // </React.Fragment> */}
//     </Container>
//     </section>
//   )
// }
// export default CartPage


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
const TAX_RATE = 0.08
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    flex: '1 1 100%',
    padding: '1rem'
  },
  container: {
    marginTop: '3.3rem'
  }
});
function ccyFormat(num) {
  return `${num.toFixed(2)} JOD`
}
function subtotal(items) {
  return  items.map(({ price, quantity}) => price * quantity).reduce((sum, i) => sum + i, 0)
}
export default function SpanningTable() {
  const classes = useStyles()
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
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.length > 0 && cartItems.map((cartItem, idx) => (
                <TableRow key={idx}>
                  <TableCell>{cartItem.name}</TableCell>
                  <TableCell align="right">{cartItem.quantity}</TableCell>
                  <TableCell align="right">{cartItem.price}</TableCell>
                  <TableCell align="right">{ccyFormat(cartItem.price * cartItem.quantity)}</TableCell>
                  <TableCell align="right">
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
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
               <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
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
<Button > Buy</Button>
    </div>
    </div>
  )
}