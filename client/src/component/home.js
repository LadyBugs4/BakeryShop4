import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HomePageHeader from './homePageheader';


const styles = makeStyles((theme) => ({
  oven:{
    fontWeight:"fontWeightBold",
     fontSize:"48px",
     color:"rgba(0, 0, 0, 0.95)"

  },
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function ProductCategories(props) {
 const classes = styles();;

  const images = [
  {
      url:
        'https://i.pinimg.com/236x/ff/62/db/ff62dbdb21216831dbfc956ec7a176b6.jpg',
      title: 'coockies',
      width: '32%',
      purl:'./coockies'
    },
    {
      url:
        'https://images.unsplash.com/photo-1575613423904-ee05880c291e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      title: 'dessert',
      width: '36%',
      purl:'./dessert'
    },
    {
      url:
        'https://image.shutterstock.com/image-photo/black-white-loaf-on-wooden-600w-612891392.jpg',
      title: 'Bread',
      width: '32%',
      purl:'./Bread'
    },
    //{
    //   url:
    //     'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUQEhMWFRUSFRUVFxUXFRcVFxYVFRUWFxYVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLf/AABEIAMABBwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwEEAAUGB//EAEYQAAEDAQUEBwQGBgoDAQAAAAEAAhEDBBIhMVEFQWFxEyKBkaGx8AZiwdEHFDJCUuEjM3KiwtIVJENjc4KSk7LxdIOUF//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQEAAwEAAgICAwAAAAAAABEBAhIhMUFRYfATgUKR8f/aAAwDAQACEQMRAD8A7RoRgKWhGAutcIwBGApaEYCUiA1GApDUYClWIDUQaiARAJTqENRAIgEQCVYENUhqMBTClWBDVN1GAphKQu6supl1TdSkKurLqbdUXUpCrqi6nXVBalISWqC1OuqC1KQgtQlqfdQlqUhBagLU8tQlqUhBagLU8tQkK0hBagLU8hAQlTqQWoC1WCEshKdSC1YmFqxKdTAEbQoajasVuJATAEITAlIkBGAoCMJSMARgKAjCVYwBEAsCIJSMARQpUhKRACmEQWJSIhZCILEpEQshEsSkBCyEahKQEISEwqClIUQoITCEJClIUQgITiEBCVYUQgITSEBCUhRCAhNIQFKQohAQmlLcnY6lkLFLlilOqQjagCNqjUGEwJYTAhBhGEARBKQwIggCMJSCCIIQiCUggiCAFTKEGpQSplCCUoZWSgKVMoJUygKVCiVEoQSVXqhovOOCNc/tC0lzzo0lsaQYVxOWxZdtczIAu8c0dLaoJ6wgHI5rSWW0tMsM3mkyNGmS0nhHkU60VA3DOeStxj10cgiQZGqErVbEqkuc37sTyMx81tCs66Z7gSgciKAosCUtyMoHIsAUso3IHIQDligrEIW20N1Ri0t1XIMruB5cdxVinaTPZ8Vn10646oWluqj661c2KjnHAEkYkjcEbq0DXil0646YWxuqYy1s1XNUqhu57kulXJgzrPZmnp1x1v1huqmna2neuabaeKY2sQQN2qXTpjpRaG6qRaW6rnPrHH1Kltow7Y8VLp0x0f1huqj622Ylc8awjOYUstIgE6JdOmOiFpbqpFqbqufdXx5oWVYlLq9MdEbU3VY21tzlc/0u/UIhV6qXTpjdjaDJjxTG2th3rnm1MJKyjVz8Fbqdcb99rbOaj60NxWifUmEVKpnPFS6deLfPrjccVyu2LWadZ5za7PhgMeSvMeZlc7Utra1e00nOg0qgA39Q02EGM4vFwVzWOfHIMVg5za7HNwm9iMW5xO+Dik19rsG+Z3LVW6w0S6W2hgnMBxk8wMVFhsDAZDalU8GOaO1z4Vc3Y7BtZIc7WMOX/a37bQIxziVxOzNt0/rLbKAA5zXzBm69sEMPvQHkjdC31RxMATIw4lTd9deHHz1fpWqbztwKW+24E7gtbUe5sscCNRBB4YJT6pDS0ziZU9bzMbN9qkYHRQLXkJzWrbTe6QBuz8YQNa8OyJu8RlIwUWY2Zt7ZjGQlV7S0HE7h3Faaq18k7zx3oLVeJJ0GXyVJjcWW2NjE7/JQtFZ6FUxAkb8QI8ViWHVfbsZup708bKZjxTgdfIo2FWufpVPZrRkSJEYOIU/0UzXxVhvYiB5eu1KeljZjfRUs2ayInDmnMHJSG8EADZzOCIbOZM4JwB9BYxqARYWIvqbM0d31gij1KFJNiZv3rDYaWUJ0D1KyB6CCKVBjTeEgxnzEFQ2zU/RTQpA5oFmz09ETKFOMkd3mpY3mgV0NPRG2lTjBqw08Z+B+aIN9QEA3GT9lSQ38KxzShuHh4oJJb+FeJe0lqP1+0VGEgitUAIMEXXXcCOS9Y9qdtiyWd1UxegimJxc+MMNBmeS8RM43jLjJJzxJk9uKuLi6dsWiP19XT7bsu9Iq26q7B1So4cXuPgSq5wA7T5KXZnnPrvWkWNmWk0KrajM6Tm1GjUNMlva0ub2r3Wz2plSmyqyC2o0PacMnCQvBBuOmC672D9qxZz9Urn9CSTTef7IuJMO0YTOO4mciSM6r04HCSEtxEbs01gEZYHEGZB4g70LgIyPYslLcAgETknOEa9yEjn3ItVbok4eaXWDcSQrVxLqt9QhVWg0RkpTW5ZH12rFUpbSNExpSWn1Ca0qudMB5qZ4+KgORh6sKlpRjkoD0V5IdhjkiaPUIAUQchR3VIagvKbwQpkKQOKWIUiFCmAKbvFBPFSHKwpgCxDeWXlCiBOnrvU3uCC+ovoUTpXI+3vtLVsgpso3Q+qHOvEB11rSBg04YknE6Lqi9eR/SLVJ2i4bgKO/3Gkx3la4/U33xptsW6taKl+u8vcTA3NaBmGtyaMMhvVemzzHiksqyRO5vi4ifLxVg1Rj2eZ+SmuuK9UYAdnhKAHrc48cETjhPH4JY3HT5oaew+aGuBIO7I+uGfYge7HD1mPkhdUwI1+IVz6m/HXewO13stVOjfNyoTTc2cJh10gHI3gMdCQvVQ3iV4NsCtdtNJ3vtIOjsgexwBXvAdOOXDQ7wpqb+0lnE96ghZeQkqRKxyU+dURKW8pClEnXwUpbnLESqbKnJOa/iFSaU1rluOdXGvCY14VNp9YprXJEq2HhEHKqHckYdx8CpFqx2qQEkH1CMH1CsKcCivJAHqFMeoCkLp99TfSJ4/wDFTeH4vJIdj+k4qQ9IvDUqZCsTsff4rL6TeCy/xSHY7pEJekuqcVzHtR7YssrhSazpahEkXrrWA5XjBxOcacxN6nZ1gcvIPpHqRtKpH4Kc/wC03LsC6nYn0hUajrloZ0JOTwb1P/Mc2c8RqQub+lGzFtvbU+7WpMcCTIlhLXBvCLhw/HxV6xrOXrlX5xyHn8lLneXk4oKT5J56fFE7dzd5hY12wU9X1r+aAZ9/l81Bflz9fBQ048iPl8VBJdnwKEiR65IZwRUmyCB6x/NXE1d2DRJtFNsYlwIHLH4L3bMSvKvo32d0lpfXk3bO0AbpdUlvdda/vC9QvR/2Vdz1z5cvwZ3IS53Du/NLNRCah4JGeyXOdqO780pz3aeXzWOrHgkvrpNLiHvOixJfXWJN/Rc/bWioNfEJja/E+CqMenNrepW3GrLa/PvCY2sePeq7a59BNFpRf9rDajtPFNBd6JVUWpELWNQnp5+1todqPFMDDr5/NUhbB+LuCMVp3lJqXFsMRXR6hUxJ3qej4q/7L/C51VIe3gqgpDXxRAMQ9Wg9ugRB40Hgqgc1EKg9SkSrYqDgp6TkqgqBECkWrDqg4LyH2sb/AF60Tmak9haC3wIXrAaFwH0k2K7Wp2gZVG3HftsxHe0/uJnjXH3XFvCtWrahfZGWaoZ6CoX0nHNrHNh9IH8MhrhpiNIQ8KpWKvJ0xliEk46Yajf6+SdMjt80FiOBJMThG4xjj3oqbcc9/rzXPc8dOOgcMe34KJxPGfNHVHmEp2frist6LdPrJOscAyZjfHIj4hJp5H1qntb1DnIjlEwZ7SFcy6zux2n0XPu1qrQc6U84e35r0J1XivNvo3dFoqH+5OPN7Pku/dW/ZXTceflvprq/FJfaOaWa/AJbq/EDtUjNY+081XfXCJ9b32qvUqe83uVAvqj0ViS9x3Ob3LFUadtqGru5Nbahq7uC1oqcUYrLccm0ZaRq4pgtC1Ire8UbaqsStsLUNJTBbho0c1pxU7UxtQaJMS6242hxaiG0OK1QtHA+XwRi0+63tJTrh21tRbZTG1yd60/1rg3sBKE2v1BTqdm9FT3gjFcfiC576z6xCJtp4eMJ1O7oun4jx+akV+I7lomV+A70+m+dO/8ANTqvZuBXOoU9KdVrWjjHcmhvvFIt1eDzqqPtBYPrFnfSkXvtM4Pbi3vxHJxRBuiazn4fmpFzY8ia7DHA5Rx0SqwW09paVy11cIBe53acfjPauj9hvZVlW7aLSy8x7rlKm7J5gudUc3ewAGAcDjuic569W7MrjLPRFy8fveu380ung7DBexWz2dstcF9WldqfeLHlpDgACMMHARplC0dp+jyznFtas3nceB3BphTTjyx5y18+HyWPcu5P0dNyFpJ4dEPE30f/AOeUw6H2h+IwIY0Cd4Mk9ixG+7hKZ8fyVxjA6kR94dbmGzI7i4rt6X0cUQRNaueXRgH9wroNkbBs1nB6KmJIIL3G+4gggi8cAM5iAtccZ5c8ji/o+b16ztGMb/qc4/wrsXO4BaTYmzjZempvEE1SWxjNKB0ZB0xctg62Dj3LeZrz8+WU5zufeB5lJqP95w7Z8gUl9uH/AGkvtg0BVms3DKlU6n934tVepXOrvLyasNcHLww8kh4nTsQDUtB1Pf8AksSnM59yxXwjW9C8AGIByN04zphish28nD3Th4LrmUwD0rzeeMjGA91jfjmfBN+r33B73ERiKcwBxcBgT4BN5JnFyDWnj/pd8kymycrx4hjj5BdiBfwBIbvM4u1A4KyHBohoAA7AApnI3jjkKVjqFpcGuutzJaQBGOMhSKL4mHx/hvjwC6ekDUIJwpAy1p/tDmHH3dBvz0VirWk3B/mIjDhzV7J0/lxzcRIvHj0dQ+QQ9U4S7/aqGOcBdz0zWgNAjIAc8MkdJl0Y4k/aPL4AKd9XpjiaFnvuutvk5wKVTLuRdCASOtgSD+hqOgjMYAhdhaKpA6v6x/Vb7vvEaAST3JzBcZAGDRvzJ3k8zim89P8AHmuIa5swC/DcKFXDuajETH6Wf8Ct/Ku3srIZiBecZLsZ4CDwUURLnPw0BjH1kp31f8fH+/8AjkaVCTAFUk60Kg82qz9ScPuvwiYpP35ZBdW8i8OGPwHxSqDybzsILzGvV6v8K12Z6Y5VziDEVJ06CrPdCVUtYb9oVRxNnq/yrqAJrzozMRqMJKm3fZ9BZ77HT/Hlcx/SAG6t/wDNW+SN1uIaHltW66Lp6J+MiRGGi6ioJyzjCcVqalP+rUpMlhpCY/C4NPDKVc5M9ccxatnC3WmlTDajSXAVHOpuaOibJcZIwMSBqSF6W+ldugMF0YBwzYYuiB+GMOwpHs7s2411Z2LqmA91gPmSJ7AtwRBBw7cu1Zrf3xoWUyXRV6pbgHNiHMnqkyOzwOICl2zqo61MhwxgjBwx/CcC3hPJbW2Um/ebHkDqD5jeqlFxYCHSWySHNmW47xw1y8k1M2eNbS2ib3R1qT6Z/HcdcPGYw7VZLmEFpcIO8FX3vdGDg9uhxWpdYKN4l1ICcx1g3ua6As3G6HpwD0d68fwtMk8JGQ4q3Z7M52L+q0ZAYExnh91u7HE8ME+xUqdNsUwxg90Qe/M96r2q0Asc1rhecSJJwDb0uJ0EeYVz1nlygdrWRtVgaOq8CWECZ3lsbx5d64pta8JAqxws7j5Fei2ayABr9zQ4AY5vMl2OPYtLtGj0dVzmjB3WI1nMjjMrdYjkemBMfpZ06CpKTVqgDHpP9ir3ZYnguuIDgHsMHXfOhQPqNeDTqNBnAtOIcFaTHG1I3iqD/wCPWn/ikOe3K9UH/oq/yrrnPdSGMvp/ixL6f7W97eOes5hlQB4BBGoOcgjMEdiepMcQ6o0ZveOLqVRo7yIULsy4tkPxbwEkcwoRf7/fGw2gSKVIuiQ3DqwB1KeAP3/2uMblRpEu3Q3hm7nwVjaVHq0nH7zAYutH3WZloknPMnsnGo5+7xxCxmVd+rBqRgD+STTPSQT+rGX94dT7nnyzrUKYfuikMhlfj+Dz5Z7C8e05DQK/ENfWP2W5nfoOxNYA0ZGBv1KWwADzKJjg7fgMuP5KetMs1PHpDnu4A/FWKtTduzKF74x3nJVnC8ej3Ref+zubzJ8AdQrmJaKyF7qhqkNuObDJJvhusRAnA56aK3el13c3Ewd+hWXt/cso4CIOMlZ361hlV0CdUVCYA37/AIoCJcBpj68Ebsi4nJM+m/C6leL7jkPJox8ZWUMGNacwBPM4nxSH04a1n4i1uZM73STngCrbnY+tyv4T8houxcQM/XwSrW5xgQI5me6ITbKerzKys+I4/NY/Df8AyHvWrcxzqLmNEm9UujDEtcXCOMAFbZ2ao0JAMbqjjB5nI7sDGkHEFdMc9+Oisb7tFl4EQ1o7cBEBWHOEbuWR7JXO7FLmsBY6854Li+oS2ZIhjmA3WkCGi6CIbhgr18nGrSukYyx14c4IHgm4mcosivBuXjwyy4gjBNZTacQM98QOa179oC+KQYXEsviTjgR1S3CDjMcCtDtTbm0aRvdBZ+jJIB6R4dG69eADSRzHFX4Z7rrX9/Iz8Es3d4Pcue2Rt+vU/WWQsiJd0gIPLq44aFbr+laABPSMF0gEOJaZOQxzngp4em1LJTcMWjuHxUWeytp/ZIxykNaByDQMVrdo7cqMBuWZ78MHXg1nacXfulaTZntPbDV/TUqPQkwej6W+z3jfaA8agRhrkaR2rcTjuVXaNka+CZEbxxVbaNtNJoMDrODRJAE55ndAcY4YLQWv2ktD46Olda15vT1i9gyLQYumZMEHdkcp81fuNu7ZIBvB5GogEFUtoWMAxMziDkRx9aJTLdVdD213QRldpxz+zPiq4puBLhi8klxJm963QrUjOnc0w+ODtx5qrXpFsmkN5LqcwDOZYfuu8D4qzfa8eY3gqq+pcMPxG528JVn/AGrUi5z77azgMjTcGugxkQes09qxMr2cO6wdddueN40IyIWKxnd/sbHbNocG0mwB1BGB3tZOJaAd+IJWppDpMSf0f/M/y+fLOztFrX0aADqd26S8MABc4huLiHGZEScCSDuMJTXjf2D1uWc+Nb9Wm1CMTjoFaogjHeVToMP2jn5KwXxlmU/nT+MOJk3R2lPAAx3BIaAAB6lCasmBu80zP2m7+h1q2BcccoGp3NHElMszCGwTLiZcdxJ3chgOQVWg6+4vP2WEhuObsiezEd6sOfAnXAfNN1cz8LN6TG5qeypv0VWmzqgLK5wDRme1Z+etffFthwnXyWWh0ADU+Ax+SBpOW4QlPdLzoBHz+HcribrC+ag91pd34DwvI2nqnDd24qtRMuqOjeGDWAMf3i5Oe6G6SYTTFihg0CFFZ2Iw9YqATh5fmlVz1gs78az6uSqNKp1qmOT/ADa0/FWHOEZntWvs7gKtQTOLXcgWx/CtMntY1zLrgCAXCCAcnEZFQwBhaGdVpwuiC3j1CC3wWUnYvEH7QIw1aJ8ZUWkdWYyP5lZ5NcF1te6C0MpgHMNb0ZMiM28OCCntrrXX03BgbF5hdUIjMmIed+IBKSTgCkOADgQBj5+vNN3TMwe07NTJD6Zvub1gXdaNG39CCRGYGalzmvaHQCIkYbjmOeSK/jBEeKo0XXHGnuJL2nmesO8z/mVRNSkBhiAciCfglNpz1S5/LpH/AMya+p93TFvLeEl1Q4OGYwI4arHxvPVmq5wYGX3XGRAMOgDLrEXvFV6FppnG+2cjuyMZbsZRPtBwIgj1qq75abzbt12BB3do9dy1fUnkJr22nRf9toa84gES1x+8AN2o7dVsW1JAx4g/notdX2dSq9ZxEn7zcx244qrRJs5FJxc6mTDHn7p/CTpotZu59+M8szc8+trUaL0jB8dhHHvQucHDXUIOlnDuPwKQ528Ahw7iFv45/S7gbl9nuhYiFSRhgRmFiZn6N5ft/9k=',
    //   title: 'Calm',
    //   width: '40%',
    //   purl :'/happy'
    // },
    // {
    //   url:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9hjogjbiJI020wZbnYABhPk-jk4wsEv-sRQ&usqp=CAU',
    //   title: 'Pop',
    //   width: '20%',
    //   purl :'/pop'
    // },
    // {
    //   url:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm9H3NMwnb5DDyEZTzzBcTUfB6qUNXI75B1g&usqp=CAU',
    //   title: 'Jazz',
    //   width: '40%',
    //   purl :'/jazz'
    // },
  ];

  return (
    <div>
    <HomePageHeader/>
    <Container className={classes.root} component="section">
      
      <Typography   className={classes.oven}  variant="h3" marked="center" align="center" component="h2">
      Fresh From the Oven to Your Doorstep     
       </Typography>
      <br/>
      <br/>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.purl}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
       
     

       
      </div>
    </Container>
    </div>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);