import React, { useState } from 'react';
import Graphic from '../../components/Graphic';

import {RootDiv} from './styles';
import SearchAppBar from '../../components/SearchAppBar';
import TransitionsModal from '../../components/TransitionsModal';

const Home = () => {
    const [graphicTitle, setGraphicTitle] = useState('');
    const [graphicValues, setGraphicValues] = useState([]);
    // TODO remove hardcoded values
    const [graphics, setGraphics] = useState([
        {title: 'A', values: [3, 2, 5]},
        {title: 'B', values: [10, 5, 6]},
    ]);

    function addGraphic(title, values) {
        const newGraphic = {
            title: title,
            values: values
        };
        setGraphics([...graphics, newGraphic]);
    }
    // TODO this structure is just for test and will be refactored soon
    return (
        <RootDiv>
            <SearchAppBar/>
            {
                graphics.map((graphic, index) => {
                    return (
                        <Graphic key={index} title={graphic.title} data={graphic.values}/>
                    )
                })
            }
            <button onClick={() => addGraphic(graphicTitle, graphicValues)}>
                <p>Salvar</p>
            </button>
            <TransitionsModal
                title={"Novo gráfico"}
                description={"Digite os dados do novo gráfico."}
                setGraphicTitle={setGraphicTitle}
                setGraphicValues={setGraphicValues}
            />
        </RootDiv>
    )
}

export default Home;