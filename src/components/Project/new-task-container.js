import './new-task-container.css'
import '../layout/Button.css'

import { useState } from 'react'

import List from '../layout/List'

const NewTask = () => {
    // função que irá retornar ID da tarefa
    function gerarId(){
        return Math.floor(Math.random() * 3000);
    }

    const [inputElement, SetInputElement] = useState(null) // Estado do Input
    const [itemList, SetItemList] = useState([]) // estado do array de objetos das lista
    const [validar, SetValidar] = useState('normal')

    const handleChange = e => {
        SetInputElement(e.target.value) // Capturando valores do input
    }

    //Consts para formar a data da terefa
    const data = new Date()
    const  dia =  String(data.getDate()).padStart(2,"0")
    const mes = String(data.getMonth() + 1).padStart(2,"0")
    const ano = data.getFullYear()
    const atual = `${dia}-${mes}-${ano}`
    
    const addList = () => {
        // função de inserção de objetos no array
        if(inputElement.trim().length > 0){
            SetItemList([...itemList, {name: inputElement, key: gerarId(), date: atual}])
            SetInputElement("")
            SetValidar('normal')
        }
        else if(inputElement.trim().length <= 0){
            SetValidar('error')
        }
        
    }

    return(
        <>  
            <div className="container">
                <div className="new-task-container">

                        <input 
                        className={validar}
                        type="text"
                        placeholder='Adicionar tarefa ...'
                        value={inputElement} 
                        onChange={handleChange} 
                        onKeyDown={(e)=>{
                            if(e.key === 'Enter'){
                                addList()
                            }
                        }}/>

                        <button 
                        className="new-task-button" 
                        onClick={addList} >
                            Adicionar
                        </button>
                </div>
            </div>
            <List itemList={itemList} SetItemList={SetItemList}/>
        </>

    )
}

export default NewTask