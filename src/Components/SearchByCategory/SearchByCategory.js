import React, { useState } from 'react';
import './SearchByCategory.css'
import Notes from "../../Constants/notes";

function SearchByCategory() {

    const [category, updateCategory] = useState('');

    function byCategory({currentTarget}){
        updateCategory(currentTarget.value);
    }

    console.log(Notes)
    return (
            <div className="categoriesBtn"  >
                <button type="button" className="btn btn-info" value="Category 1" onClick={byCategory}>Category 1</button>
                <button type="button" className="btn btn-info" value="Category 2" onClick={byCategory}>Category 2</button>
                <button type="button" className="btn btn-info" value="Category 3" onClick={byCategory}>Category 3</button>
                <button type="button" className="btn btn-info" value="Category 4" onClick={byCategory}>Category 4</button>

               // <p>if(){Notes[0].category}</p>
            </div>

    )

}

export default SearchByCategory;