import React, {useState} from 'react';
import './SearchByCategory.css'
import Notes from "../../Constants/notes";
import Note from "../Note";

function SearchByCategory() {

    const [category, updateCategory] = useState('');
    const [categorySelected, updateCategorySelected] = useState([]);

    function byCategory({currentTarget}) {
        updateCategory(currentTarget.value);
        let selectedCat = []
        Notes.forEach((Note) => {
            if (Note.category == currentTarget.value) {
                selectedCat.push(Note)
            }
        })
        updateCategorySelected(selectedCat)
    }

    console.log(categorySelected)

    return (
        <div className="SearchByCategory">
            <div className="categoriesBtn">
                <button type="button" className="btn btn-info" value="Category 1" onClick={byCategory}>Category 1</button>
                <button type="button" className="btn btn-info" value="Category 2" onClick={byCategory}>Category 2</button>
                <button type="button" className="btn btn-info" value="Category 3" onClick={byCategory}>Category 3</button>
                <button type="button" className="btn btn-info" value="Category 4" onClick={byCategory}>Category 4</button>
            </div>
            <div className="notesSelected">
                {categorySelected.map(note => {
                    const {category, title, subject, content, date, index} = note;
                    return (
                        <Note
                            key={index}
                            title={title}
                            subject={subject}
                            category={category}
                            content={content}
                            date={date}
                        />
                    )
                })}
            </div>

        </div>

)

}

export default SearchByCategory;