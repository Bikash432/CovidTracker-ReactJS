import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    
    if(!confirmed){
        return '....Loading';
    }
    return(
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography varaint="h5">
                <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    seperator=","
                />
                    </Typography>
                   <Typography color="textSecondary">{lastUpdate}</Typography>
                   <Typography variant="body2">Number of active cases of covid19:{confirmed.value-recovered.value}</Typography>
                </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
               <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography varaint="h5"><CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                seperator=","
                /></Typography>
               <Typography color="textSecondary">{lastUpdate}</Typography>
               <Typography variant="body2">Number of recovered cases of covid19:{recovered.value}</Typography>
            </CardContent>
         </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
            <CardContent>
             <Typography color="textSecondary" gutterBottom>Deaths</Typography>
             <Typography varaint="h5"><CountUp
               start={0}
               end={deaths.value}
               duration={2.5}
               seperator=","
            /></Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of Deaths caused by covid19:{deaths.value}</Typography>
            </CardContent>
            </Grid>
        </Grid>

    </div>
    )
}
export default Cards;