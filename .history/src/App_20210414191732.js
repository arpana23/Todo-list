import React, { useState } from 'react';
import Todolist from './Todolist';
import './App.css';

const App = () => {


  const [inputItem , setInputItem] = useState("");
  const [itemList , setItemList] = useState([]);

  const handleChange = (e) => {
    setInputItem(e.target.value);
  }

  const addItems = (e) => {
    e.preventDefault();
    setItemList((olditems) => {
      return [...olditems, inputItem];
    });
    setInputItem("");
  }

  const updateItem = (id) => {
    let item =  itemList.map((olditems,index,data) => {
      if(index === id) {
        setInputItem(data.splice(index,1));
        olditems = !olditems;
      }
      return [olditems];
      }
    )
    return item;
  }
  
  const deleteItem = (id) => {
    setItemList((olditems) => {
      return olditems.filter((arrElement,index) => {
        return index !== id;
        // if(index !== id) {
        //   return [...arrElement];
        // }
      })
    })
  }


 return (
  <>
    <div className="main-container">
      <div className="flex-container">
        <div className="well">
          <br />
            <h1 className="title text-center">Todo List</h1>
          <br />
          <div>
            <input type="text" className="addInput" max="10" min="1" placeholder="Add items" value={inputItem} onChange={handleChange}/>
            <button type="submit" className={`btn text-center ${setInputItem !== '' ? 'btn-success' : 'btn-success text-blur'}`}   onClick={addItems}> Add </button>
            <ul className="list-group">
              {
                itemList.map((data,index) => {
                  return <Todolist 
                  key= {index} 
                  id= {index} 
                  list= {data} 
                  onEdit= {updateItem}
                  onSelect= {deleteItem} 
                  />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
        
  </>
 )
}

export default App;
