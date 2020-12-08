import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

import api from '../services/api'


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

export default function CardFinished(props) {
    const classes = useStyles();

    const { id,  title, description, beginDate, endDate } = props.task

    async function handleRemoveTask(e) {
        e.preventDefault();
        try {
            await api.delete(`tasks/${id}`)
            alert('Evento removido')
            document.location.reload()
            
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={`${beginDate} - ${endDate}`}
            />
            <CardActions disableSpacing>
            <IconButton aria-label="delete" onClick={e => handleRemoveTask(e)} >
                <DeleteIcon />
            </IconButton>

            </CardActions>
            <CardContent>
                <Typography paragraph>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
