import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {GrAdd} from 'react-icons/gr';
import {getSources} from '../services/headlines';

const StyledBanner = styled.div`
    display: flex;
    background-color: #091A20;
    justify-content: center;
    height: 8vh;
    align-items: center;
    margin-top: 1em;
    .source {
        margin-right: 2.5em;
        font-weight: 600;
        background-color: #fbfbfb;
        padding: 0.4em;
        border-radius: 4px;
        cursor: pointer;
    }

    .source:last-child {
        margin-right: 0;
    }

    .selected {
        margin-right: 2.5em;
        font-weight: 600;
        background-color: #c3c3c3;
        padding: 0.4em;
        border-radius: 4px;
        cursor: pointer;
    }
    button {
        background-color: #fbfbfb;
        border: none;
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 0.2em;
        align-items: center;
        padding: 0.4em;
        border-radius: 4px;
        font-weight: 700;
        cursor: pointer;
    }
`;

const Banner = ({sources, handleSourceClick}) => {
    const [data, setData] = useState([]);
    const [source, setSource] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        let mounted = true;
        getSources(source)
            .then(articles => {
                if(mounted) {
                    setData(articles)
                }
            })
            return () => mounted = false;
    }, [source])

    return (
        <StyledBanner>
            {sources.map((sources, i) => {
                const handleClick = (itemClicked) => {
                    setSelectedItem(selectedItem => [...selectedItem, itemClicked]);
                    console.log(selectedItem);
                    setSource(source => [...source, sources.link])
                    handleSourceClick(data);
                }
                return <div key={i} onClick={() => {handleClick(i);}} className={selectedItem.includes(i) ? 'selected' : 'source'}>{sources.name}</div>
            })}
            <button>Add <GrAdd /></button>
        </StyledBanner>
    )
}

export default Banner;
