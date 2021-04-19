import React from 'react';



const Todolist = (props) => {

   
    return (
        <>  
            <div className="mylist"> 
                <li className="list-group"> {props.list} 
                    <span> 
                        <i className="fas fa-edit"  onClick={() => {props.onEdit(props.id)}}></i>
                        <i className="fas fa-trash" onClick={() => {props.onSelect(props.id)}}></i> 
                    </span> 
                </li>
            </div>
        </>
    )
}

export default Todolist;