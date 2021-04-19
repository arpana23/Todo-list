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

    const olditems = itemList.filter((arrElement,index) => {
      return index !== id;
    })
    const newitems = itemList.find((arrElement,index,event) => {
      if(index === id) {
        setInputItem(event.target.value);
        olditems = [...olditems, newitems]
      }
      return [olditems];
    })
    setItemList({
      olditems: olditems,
      newitems: newitems
    });
    setInputItem("");
    // let updatetodo = itemList.map((olditems,index,data) => {
    //   if(index === id) {
    //     setInputItem(data.splice(index));
    //     olditems = !olditems;
    //   }
    //   return [olditems];
    // })
    // setItemList(updatetodo);
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
            <button type="submit" onClick={addItems}> + </button>
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
