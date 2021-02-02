import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    }

    return <div className="ui segment"><form onSubmit={onFormSubmit} className="ui form">
        <div className="field"><input onChange={e => setTerm(e.target.value)} value={term} type="text" placeholder="Search ITube..." /></div>
    </form></div>
}

export default SearchBar;