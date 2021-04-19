import React, { useState } from 'react';
import Todolist from './Todolist';

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
        olditems = olditems;
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
    <div className="container">
      <div className="row">
        <div className="well">
          <br />
            <h1 className="well">ToDo List</h1>
          <br />
          <div>
            <input type="text" placeholder="Add items" value={inputItem} onChange={handleChange}/>
            <button type="submit" disabled={setInputItem === ""} className={`btn text-center ${setInputItem !== '' ? 'btn-success' : 'btn-success text-blur'}`}   onClick={addItems}> + </button>
            <ul>
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
