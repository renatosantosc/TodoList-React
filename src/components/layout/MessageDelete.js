import './MessageDelete.css'

const MessageDelete = (props) => {

    const btnFechar = () => {
        props.SetFundo('fechar-janela')
        props.SetDeleteConatiner('fechar')
    }

    const excluirTask = (key) => {

        const excluir = props.itemList.filter( itemObj => {
            return itemObj.key !== key
        } )
        props.SetItemList(excluir)
        props.SetFundo('fechar-janela')
        props.SetDeleteConatiner('fechar')
    }


    return (
        <>
            <div className={props.deleteContainer}>
                <label>Realmente deseja excluir está tarefa ?</label>
                <div className='btn'>
                    <button onClick={() => excluirTask(props.idElement)}>SIM</button>
                    <button onClick={btnFechar}>NÃO</button>
                </div>
            </div>
            <div className={props.fundo}></div>
        </>
    )
}

export default MessageDelete