import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

// import { white } from '@material-ui/core/colors';


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

export default function CardCustom(props) {
    const classes = useStyles();

    const { id,  title, description, finishDate } = props.task

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={`Prazo: ${finishDate}`}
            />
            <CardActions disableSpacing>
            <IconButton aria-label="delete" onClick={() => console.log(`Removido ${id}`)} >
                <DeleteIcon />
            </IconButton>

            <IconButton aria-label="edit" onClick={() => console.log(`Editar ${id}`)}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="checkBox" onClick={() => console.log(`Concluir ${id}`)}>
                <CheckBoxIcon />
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
