import React from 'react';



const Todolist = (props) => {

   
    return (
        <>  
            <div> 
                <li> {props.list} 
                    <span> 
                    <i className="fas fa-edit" onClick={() => {props.onEdit(props.id)}}></i> 
                    <i className="fas fa-trash" onClick={() => {props.onSelect(props.id)}}></i> 
                    </span> 
                </li>
            </div>
        </>
    )
}

export default Todolist;