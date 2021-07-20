import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {RootDiv, Title} from './styles';

const options = [
    'Editar',
    'Deletar',
];

const ITEM_HEIGHT = 48;

const Graphic = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        setAnchorEl(null);
        // TODO remove
        console.log(option);
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
        <RootDiv>
            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
            <Title>{props.title}</Title>
            {renderMoreIcon()}
            </div>
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
        </RootDiv>
    )
}

export default Graphic;