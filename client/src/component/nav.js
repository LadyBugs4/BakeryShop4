import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles'
import ShopContext from '../context/shop-context'

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#ab003c',
      main: '#ab003c',
      dark: '#ab003c',
      contrastText: '#000',
    },
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'rgba(0, 0, 0, 0.95)',
    border: 0,
    color: 'white',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const context = React.useContext(ShopContext)
  const history = useHistory()

  const isLoggedInToken = localStorage.getItem('loggedInToken') !== null

  const totalItems = context.cart.reduce((count, curItem) => {
    return count + curItem.quantity
  }, 0)

  const onLogoutUser = () => {
    // remove token from localStorage
    if (localStorage.getItem('loggedInToken') !== null) {
      localStorage.removeItem('loggedInToken')
    }
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          classes={{
            root: classes.root,
          }}
        >
          <Button component={RouterLink} to="/" color="inherit" className={classes.title}>
            Bakery
          </Button>
          {isLoggedInToken ? (
            <>
            <Button component={RouterLink} to="/categories" color="inherit">
              Categories
            </Button>
            {/* <Button component={RouterLink} to="/admin" color="inherit">
              Admin
            </Button> */}
            <Button onClick={onLogoutUser} color="inherit">
              Logout
            </Button>
            </>
          ) : (
            <>
              <Button component={RouterLink} to="/login" color="inherit">
                Login
              </Button>
              <Button component={RouterLink} to="/signup" color="inherit">
                Sign Up
              </Button>
            </>
          )}

          <Button component={RouterLink} to="/cart" color="inherit">
            Cart {`(${totalItems})`}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
