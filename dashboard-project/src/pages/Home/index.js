import React, { useState } from 'react';
import Graphic from '../../components/Graphic';
import {RootDiv, NoGraphicsText} from './styles';
import SearchAppBar from '../../components/SearchAppBar';
import TextField from '@material-ui/core/TextField';
import { Button, Fab } from '@material-ui/core';
import plusIcon from '../../design/assets/plusIcon.png';

const Home = () => {
    const [graphicTitle, setGraphicTitle] = useState('');
    const [graphicValues, setGraphicValues] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [graphics, setGraphics] = useState([]);

    function addGraphic(title, values) {
        const newGraphic = {
            title: title,
            values: values
        };
        setGraphics([...graphics, newGraphic]);
    }

    function deleteGraphic(graphicIndex) {
        setGraphics(graphics.filter((grafic, index) => index !== graphicIndex));
    }

    // TODO implement
    function updateGraphic() {

    }

    function renderFabIcon() {
        return (
            <Fab color="primary" aria-label="add" onClick={() => setFormVisible(true)}>
                <img src={plusIcon} width={30} height={30}/>
            </Fab>
        )
    }

    function renderAddForm() {
        return (
            <div>
                <TextField required id="standard-required" label="Título" defaultValue="" onChange={(event) => setGraphicTitle(event.target.value)}/>
                <TextField required id="standard-required" label="Valores" defaultValue="" onChange={(event) => {
                    const inputValues = event.target.value;
                    const numericValues = inputValues.split`,`.map(value => +value);
                    setGraphicValues(numericValues);
                }}/>
                <Button variant="contained" color="primary" onClick={() => {
                    addGraphic(graphicTitle, graphicValues);
                    setFormVisible(false);
                }}>
                    <p>Salvar</p>
                </Button>
            </div>
        )
    }

    return (
        <RootDiv>
            <SearchAppBar/>
            {isFormVisible && renderAddForm()}
            { graphics.length == 0 && <NoGraphicsText>Nenhum gráfico foi adicionado.</NoGraphicsText> }
            {
                graphics.map((graphic, index) => {
                    return (
                        <Graphic
                            handleDelete={() => deleteGraphic(index)}
                            key={index}
                            title={graphic.title}
                            data={graphic.values}
                        />
                    )
                })
            }
            {!isFormVisible && renderFabIcon()}
        </RootDiv>
    )
}

export default Home;