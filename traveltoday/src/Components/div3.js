import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import Colombo from '../images/destinations/colombo.jpg';
import Anuradhapura from '../images/destinations//Anuradhapura.jpg';
import Galle from '../images/destinations/Galle.jpg';
import Ella from '../images/destinations/Ella.jpg';
import Jaffna from '../images/destinations/Jaffna.jpg';
import Nuwara from '../images/destinations/Nuwara.jpg';

const useStyles =makeStyles((themes)=>({
    root:{
        backgroundColor:'rgb(205, 235, 146 )',
        padding:'10px',
        textAlign:'center'
    },
    card: {
        maxWidth: 345,
        margin:'auto',
        marginBottom:'20px',
        borderRadius:'10px',
        '&:hover':{
            maxWidth:350,   
        }
       
      },
      media: {
        height: 140,
      },
}));

export default function Div3(){

    const classes =useStyles()

    return(
        <Grid container className={classes.root} >
            <Grid item xs={12} md={4} >
                    <Card className={classes.card} elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Colombo}
                                title="Colombo"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Colombo
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Colombo is the commercial capital and largest city of Sri Lanka by population. 
                                    According to the Brookings Institution, Colombo metropolitan area has a population of 5.6 million, and 752,993 in the city proper. 
                                    It is the financial centre of the island and a tourist destination.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                    </Card>
            </Grid>
            <Grid item xs={12} md={4} >
                    <Card className={classes.card} elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Anuradhapura}
                                title="Anuradhapura"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Anuradhapura
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Anuradhapura is a major city in Sri Lanka. 
                                It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District.
                                Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sinhala civilization.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                    </Card>
            </Grid>
            <Grid item xs={12} md={4} >
                    <Card className={classes.card} elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Galle}
                                title="Galle"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Galle
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Galle is a city on the southwest coast of Sri Lanka. 
                                It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. 
                                Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                    </Card>
            </Grid>
            <Grid item xs={12} md={4} >
                    <Card className={classes.card} elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Ella}
                                title="Ella"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ella
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council.
                                It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. 
                                The area has a rich bio-diversity, dense with numerous varieties of flora and fauna.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                    </Card>
            </Grid>
            <Grid item xs={12} md={4} >
                    <Card className={classes.card} elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Jaffna}
                                title="Jaffna"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Jaffna
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Jaffna is a city on the northern tip of Sri Lanka. 
                                Nallur Kandaswamy is Hindu temple with golden arches and an ornate gopuram tower. 
                                By the coast, star-shaped Jaffna Fort was built by the Portuguese in the 17th century and later occupied by the Dutch and British.
                                Jaffna Public Library is a symbol of the city’s post-war 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                    </Card>
            </Grid>
            <Grid item xs={12} md={4} >
                    <Card className={classes.card} elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Nuwara}
                                title="Nuwara"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Nuwara  Eliya
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Nuwara Eliya is a city in the tea country hills of central Sri Lanka. 
                                The naturally landscaped Hakgala Botanical Gardens displays roses and tree ferns, and shelters monkeys and blue magpies. 
                                Nearby Seetha Amman Temple, a colorful Hindu shrine, is decorated with religious figures.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </CardActions>
                    </Card>
            </Grid>
        </Grid>
    );
}