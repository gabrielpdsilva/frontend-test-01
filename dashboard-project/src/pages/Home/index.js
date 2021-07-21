import React, { useState } from 'react';
import Graphic from '../../components/Graphic';
import {RootDiv, NoGraphicsText, WelcomeText, InformationText} from './styles';
import SearchAppBar from '../../components/SearchAppBar';
import TextField from '@material-ui/core/TextField';
import { Button, Fab } from '@material-ui/core';
import plusIcon from '../../design/assets/plusIcon.png';

const Home = () => {
    const [graphicTitle, setGraphicTitle] = useState('');
    const [graphicValues, setGraphicValues] = useState([]);
    const [isAddFormVisible, setAddFormVisible] = useState(false);
    const [isEditFormVisible, setEditFormVisible] = useState(false);
    const [graphics, setGraphics] = useState([]);
    const [graphicIndex, setGraphicIndex] = useState(0);

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

    function updateGraphic(updatedGraphic, index) {
       const updatedGraphics = [...graphics];
       updatedGraphics[index] = updatedGraphic;
       setGraphics(updatedGraphics);   
    }

    function renderFabIcon() {
        return (
            <Fab color="primary" aria-label="add" onClick={() => setAddFormVisible(true)}>
                <img src={plusIcon} width={30} height={30}/>
            </Fab>
        )
    }

    // TODO create better layout
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
                    if(graphicTitle.length == 0 || graphicValues.length == 0) {
                        alert("Tanto título quanto os valores são obrigatórios.");
                        return;
                    }
                    addGraphic(graphicTitle, graphicValues);
                    setAddFormVisible(false);
                }}>
                    <p>Salvar</p>
                </Button>
            </div>
        )
    }

    // TODO create better layout
    function renderEditForm() {
        return (
            <div>
                <TextField required id="standard-required" label="Título" defaultValue="" onChange={(event) => setGraphicTitle(event.target.value)}/>
                <TextField required id="standard-required" label="Valores" defaultValue="" onChange={(event) => {
                    const inputValues = event.target.value;
                    const numericValues = inputValues.split`,`.map(value => +value);
                    setGraphicValues(numericValues);
                }}/>
                <Button variant="contained" color="primary" onClick={() => {
                    const updatedGraphic = {
                        title: graphicTitle,
                        values: graphicValues
                    }
                    updateGraphic(updatedGraphic, graphicIndex);
                    setEditFormVisible(false);
                }}>
                    <p>Editar</p>
                </Button>
            </div>
        )
    }

    return (
        <RootDiv>
            <SearchAppBar/>
            <div>
                <WelcomeText>Bem-vindo ao Dashboard!</WelcomeText>
                <InformationText>Você já pode adicionar, editar e remover quantos gráficos desejar.</InformationText>
            </div>
            {isAddFormVisible && renderAddForm()}
            {isEditFormVisible && renderEditForm()}
            { graphics.length == 0 && <NoGraphicsText>Nenhum gráfico foi adicionado.</NoGraphicsText> }
            {
                graphics.map((graphic, index) => {
                    return (
                        <Graphic
                            key={index}
                            title={graphic.title}
                            data={graphic.values}
                            handleDelete={() => deleteGraphic(index)}
                            handleUpdate={() => {
                                setEditFormVisible(true);
                                setGraphicIndex(index);
                            }}
                        />
                    )
                })
            }
            {!isAddFormVisible && renderFabIcon()}
        </RootDiv>
    )
}

export default Home;