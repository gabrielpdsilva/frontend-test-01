import { Fab, Input } from '@material-ui/core';
import plusIcon from '../../design/assets/plusIcon.png';
import delfos_Intelligent_maintenance from '../../design/assets/delfos_Intelligent_maintenance.png';
import React from 'react';
import Graphic from '../../components/Graphic';

const Home = () => {
    return (
        <div style={{backgroundColor: '#36394c', height: '100vh'}}>
            <div style={{width: 100}}>
                <img src={delfos_Intelligent_maintenance} width={200} height={150}/>
                <Input placeholder={"Search..."}/>
            </div>
            <Graphic/>
            <Fab color="primary" aria-label="add" onClick={() => {
                // TODO implement
            }}>
                <img src={plusIcon} width={30} height={30}/>
            </Fab>
        </div>
    )
}

export default Home;