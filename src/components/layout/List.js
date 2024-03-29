import './List.css'

import { useState } from 'react'

import { FiTrash2 } from 'react-icons/fi'
import { BiPencil } from 'react-icons/bi'
import { GrView } from 'react-icons/gr'

import Container from './Container'
import MessageDelete from './MessageDelete'
import ContainerTask from './ContainerTask'

const List = (props) => {

    const [idElement, SetIdElement] = useState() //Estado do ID do objeto selecionado
    const [nameElement, SetNameElement] = useState()// Estado do Nome da terefa selecionado

    // Estados relacionados a aparição da janela de edição
    const [color, SetColor] = useState('janela-edicao-fechar')// CSS da Janela de Edição
    const [fundo, SetFundo] = useState('fechar-janela')// CSS do fundo com opacidade atrás da janela
    const [deleteContainer, SetDeleteConatiner] = useState('fechar')// CSS da janela de delete
    const [messageTask, SetMessageTask] = useState('fecharTask')
    
    return(
        <>
            <div>
                <ul className='tasks-container'>
                {props.itemList.map( itemObj => {
                    //Mapeando objetos do array, para serem exibidos na lista
                    return (

                    <li>
                        <span>{itemObj.name}</span>
                        
                        <div className='btnList'>

                            <button className='btnView' title='Visualizar'
                                onClick={() => {
                                    SetMessageTask('messageTask')
                                    SetNameElement(itemObj.name)
                                    SetFundo('fundo')
                                }}>
                                <i>
                                    <GrView />
                                </i>
                            </button>

                            <button className='btnEdite' title='Editar' onClick={() =>{
                                //Capturando valores da tarefa selecionada 
                                SetIdElement(itemObj.key)
                                SetNameElement(itemObj.name)
                                SetColor('janela-edicao')
                                SetFundo('fundo')
                                }}>
                                <i>
                                    <BiPencil />
                                </i>
                            </button>

                            <button className='btnDelete' title='Excluir' onClick={() => {
                                SetIdElement(itemObj.key)
                                SetFundo('fundo')
                                SetDeleteConatiner('container-message')
                                }}>
                                <i>
                                    <FiTrash2 />
                                </i>
                            </button>

                            <div className='data'>
                                <span>{itemObj.date}</span>
                            </div>
                        </div>
                    </li> )
                    
                })}
                
                </ul>
                <Container 
                idElement={idElement}
                SetIdElement={SetIdElement} 
                nameElement={nameElement}
                SetNameElement={SetNameElement}
                color={color} 
                SetColor={SetColor} 
                fundo={fundo} 
                SetFundo={SetFundo}
                itemList={props.itemList}
                SetItemList={props.SetItemList}
                />

                <MessageDelete 
                SetFundo={SetFundo}
                deleteContainer={deleteContainer}
                SetDeleteConatiner={SetDeleteConatiner}
                itemList={props.itemList}
                SetItemList={props.SetItemList}
                SetIdElement={SetIdElement}
                idElement={idElement}
                />
                
                <ContainerTask 
                nameElement={nameElement}
                SetNameElement={SetNameElement}
                messageTask={messageTask}
                SetMessageTask={SetMessageTask}
                fundo={fundo}
                SetFundo={SetFundo}
                />
                
            </div>    
        </>

    )
}

export default List