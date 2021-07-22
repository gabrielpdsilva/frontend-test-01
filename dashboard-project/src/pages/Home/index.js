import React, { useState } from 'react';
import Graphic from '../../components/Graphic';
import SearchAppBar from '../../components/SearchAppBar';
import TextField from '@material-ui/core/TextField';
import { Button, Fab } from '@material-ui/core';
import plusIcon from '../../design/assets/plusIcon.png';
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../design/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: COLORS.white,
    },
    fabContainer: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    welcomeText: {
        fontSize: 50,
        color: COLORS.dark_gray2,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    informationText: {
        fontSize: 20,
        color: COLORS.dark_gray2,
        textAlign: 'center',
    },
    noGraphicsText: {
        fontSize: 20,
        color: COLORS.gray,
        textAlign: 'center',
    },
    formContainer: {
        minWidth: 300,
        marginLeft: 300,
        marginRight: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        padding: 25,
        display: 'flex',
        backgroundColor: COLORS.light_gray,
        flexDirection: 'column',
        borderRadius: 5,
        boxShadow: "1px 3px 1px #9E9E9E",
        
    },
    graphicsContainer: {
        margin: 50,
    },
    formText: {
        color: COLORS.gray,
    },
    buttonContainer: {
        marginTop: 25,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',

    }
}));

const Home = () => {
    const classes = useStyles();

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
            <div className={classes.fabContainer}>
                <Fab color="primary" aria-label="add" onClick={() => setAddFormVisible(true)}>
                    <img src={plusIcon} width={30} height={30}/>
                </Fab>
            </div>
        )
    }

    function handleSave() {
        if(graphicTitle.length == 0 || graphicValues.length == 0) {
            alert("Tanto título quanto os valores são obrigatórios.");
            return;
        }
        addGraphic(graphicTitle, graphicValues);
        resetCurrentState();
        setAddFormVisible(false);
    }

    function resetCurrentState() {
        setGraphicTitle('');
        setGraphicValues([]);
    }

    function renderAddForm() {
        return (
            <div class={classes.formContainer}>
                <p class={classes.formText}>Digite o título e os valores pro novo gráfico</p>
                <TextField required id="standard-required" label="Título" defaultValue="" onChange={(event) => setGraphicTitle(event.target.value)}/>
                <TextField required id="standard-required" label="Valores" defaultValue="" onChange={(event) => {
                    const inputValues = event.target.value;
                    const numericValues = inputValues.split`,`.map(value => +value);
                    setGraphicValues(numericValues);
                }}/>
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        <p>Salvar</p>
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => setAddFormVisible(false)}>
                        <p>Cancelar</p>
                    </Button>
                </div>
            </div>
        )
    }

    function renderEditForm() {
        return (
            <div class={classes.formContainer}>
                <p class={classes.formText}>Digite os novos valores do gráfico {graphicIndex}</p>
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
        <div className={classes.root}>
            <SearchAppBar/>
            <div>
                <h1 className={classes.welcomeText}>Bem-vindo ao Dashboard!</h1>
                <h2 className={classes.informationText}>Você já pode adicionar, editar e remover quantos gráficos desejar.</h2>
            </div>
            {isAddFormVisible && renderAddForm()}
            {isEditFormVisible && renderEditForm()}
            { graphics.length == 0 && <p className={classes.noGraphicsText}>Nenhum gráfico foi adicionado.</p> }
            <div className={classes.graphicsContainer}>
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
            </div>
            {!isAddFormVisible && renderFabIcon()}
        </div>
    )
}

export default Home;