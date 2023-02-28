import {useState} from 'react';
import './App.css'



function App() {

  const [newItem,setNewItem] = useState('')
  const handleNewItem=(e)=>{
    setNewItem(e.target.value)
  }

  

  const [addItem, setAddItem] = useState([])
  const handleAddItem=(e)=>{

    if(!newItem){
      alert('Enter an Item')
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setAddItem(oldList=>[...oldList,item])
    setNewItem('')

    console.log(item.id)
    
  }

  function deleteItem(id){
    console.log('deletion happeninhg')
    const newAddItem = addItem.filter(item => item.id !== id)
    setAddItem(newAddItem)
  }


  


  

 


  return (
    <div className='outerdiv'>


      <h1 className='header'>
        Things to do
      </h1>


      <div >
        <input className='inputbox' type="text" placeholder="Add to list.." onChange={handleNewItem} value={newItem}/>
        <button className="button" onClick={handleAddItem}> Add </button>
      </div> 


      <div >
        <ul className='bulletPoints'>
          {
            addItem.map(item=>{
              return(
                <div>
                  <li className='listitem'key={item.id}> {item.value} <button className='delButton' onClick={()=>deleteItem(item.id)}>X</button>  </li>
                  
                  
                </div>
                
              )
             })
          }
           
          

        </ul>
      </div>


    </div>
  );
}

export default App;
