import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
        width: 260,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
}));

export default function CardNotification(props) {
    const classes = useStyles();

    const { title, description } = props.notification


    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
            />
            <CardContent>
                <Typography paragraph>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
