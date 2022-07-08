import './Container.css'

import { RiCloseLine } from 'react-icons/ri'

const Container = (props) => {

    const handleChange = e =>{
        // Capturando o valor do textarea, que será o valor do update da tarefa
        
        props.SetNameElement(e.target.value)
    }

    return(
        <>
        <div>
            <div className={props.color}>
                
                <button className="btnfechar" onClick={() => {
                    props.SetColor('janela-edicao-fechar')
                    props.SetFundo('fechar-janela')
                }} >
                    <i>
                        <RiCloseLine />
                    </i>
                </button>
                    <h2 className="idEdicao">ID: {props.idElement}</h2>            
            <hr/>
            <form>
                <div className="frm-linha">

                    <label htmlFor="nome">Tarefa</label>
                    <textarea 
                    name="" 
                    className="InputTarefa" 
                    cols="30" rows="10" 
                    value={props.nameElement}
                    onChange={handleChange} >
                    </textarea>
                </div>

                <div className="frm-linha">
                    <button className="atualizar" onClick={(e) => {
                        e.preventDefault()
                        if(props.nameElement.trim().length > 0){

                            props.itemList.map(item => {
                                // Update da tarefa
                                return item.key === props.idElement ? item.name = props.nameElement : ''
                            })
                        }
                        

                        props.SetColor('janela-edicao-fechar')
                        props.SetFundo('fechar-janela')

                    }}>Salvar</button>
                </div>
                
            </form>
        </div>
        
        <div className={props.fundo}></div>
        </div>
        
        </>
    )
    
}


export default Container