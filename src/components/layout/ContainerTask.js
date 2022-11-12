import './ContainerTask.css'

import { RiCloseLine } from 'react-icons/ri'

const ContainerTask = (props) => {

    return (
        <>
            <div className={props.messageTask}>
                <button className='btn-fechar'
                    onClick={() => {
                        props.SetMessageTask('fecharTask')
                        props.SetFundo('fechar-janela')
                    }}
                >
                    <i className='icon'>
                        <RiCloseLine />
                    </i>
                </button>
                <span>Tarefa</span>
                <hr/>
                <label>{props.nameElement}</label>
            </div>
        </>
    )
}

export default ContainerTask