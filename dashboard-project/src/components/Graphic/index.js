import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../design/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: COLORS.gray,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    titleText: {
        fontSize: 30,
        color: COLORS.white,
    },
    titleAndOptionsContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    graphicContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    }
}));

const options = [
    'Editar',
    'Deletar',
];

const ITEM_HEIGHT = 48;

const Graphic = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        setAnchorEl(null);
        switch(option) {
            case "Deletar":
                props.handleDelete();
                break;
            case "Editar":
                props.handleUpdate();
                break;
        }
    };

    function renderMoreIcon() {
        return (
            <div>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Editar'} onClick={() => handleClose(option)}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }

    return (
        <div class={classes.root}>
            <div class={classes.titleAndOptionsContainer}>
                <h1 className={classes.titleText}>{props.title}</h1>
                {renderMoreIcon()}
            </div>
            <div class={classes.graphicContainer}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={{
                        title: {
                            text: props.title
                        },
                        series: [{
                            data: props.data
                        }]
                    }}
                />
            </div>
            
        </div>
    )
}

export default Graphic;