import React from 'react';
import FilmItem from "../film-item/FilmItem";

const FilmList = ({items}) => {
    return (
        <div>
            {items.map(item => <FilmItem key={item.id} {...item}/>)}
        </div>
    );
};

export default FilmList;