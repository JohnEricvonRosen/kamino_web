import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
 });

function Cards(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardActionArea onClick={()=>{return 1}}>
            <CardMedia
              className={classes.media}
              image="/static/images/instagram_logo.jpeg"
              title="Instagram Account"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.account["username"]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.account["hashtags"].map((item) => {return(item + " ")})}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Typography variant="body1" color="primary" component="p" >
                Status: Active
            </Typography>
          </CardActions>
        </Card>
    )
}

export default Cards