import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { validURL } from '../helpers'
import ShopContext from '../context/shop-context'
const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)
const useStyles = makeStyles(theme => ({
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    '$jagged &': {
      '& > *:nth-child(even)': {
        paddingTop: theme.spacing(6),
      },
    },
  },
  header: {
    textAlign: 'center',
  },
  heading: {
    textTransform: 'uppercase',
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))
export default function Category() {
  const classes = useStyles()
  let { category } = useParams() // Object
  const token = localStorage.getItem('loggedInToken')
  const context = React.useContext(ShopContext)
  const { products } = context.useDataApi(token, category)
  return (
    <section>
      <Container className={classes.header} component="header" maxWidth="md">
        <Typography className={classes.heading} component="h2" variant="h4" gutterBottom>
          {category}
        </Typography>
      </Container>
      <Container className={classes.body}>
        {products.length > 0 ? (
          products.map((item, idx) => {
            const imagePlaceholder =
              'https://dynamic.brandcrowd.com/preview/logodraft/1ed57d70-5be9-4d98-9c5d-df3d94923cd3/image/large.png'
            // Check if Image is a valid URL
            const itemImage = validURL(item.image) ? item.image : imagePlaceholder
            return (
              <Card key={idx}>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      src="https://dynamic.brandcrowd.com/preview/logodraft/1ed57d70-5be9-4d98-9c5d-df3d94923cd3/image/large.png"
                      className={classes.avatar}
                    />
                  }
                  title={item.name}
                />
                <CardMedia className={classes.media} image={itemImage} />
                <CardContent>
                  <Typography component="p">{item.description}</Typography>
                  <Typography>{`${item.price} jd`}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <div>
                    <ButtonGroup>
                      <Button
                        onClick={context.addProductToCart.bind(this, item)}
                        aria-label="Add to Cart"
                      >
                        Add to Cart
                      </Button>
                    </ButtonGroup>
                  </div>
                </CardActions>
              </Card>
            )
          })
        ) : (
          <p>No products were found :white_frowning_face:</p>
        )}
      </Container>
    </section>
  )
}