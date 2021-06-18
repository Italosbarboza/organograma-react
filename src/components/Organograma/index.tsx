import { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

interface IOrganograma {
  id: number;
  nome: string;
  descricao: string;
  criterios: string;
}

interface HeaderProps {
    onOpenNewTrasactionModal: () => void;
}

Modal.setAppElement('#root');

export function Organograma() {
    
    const [name, setName] = useState('');
    const [descricao, setDescricao] = useState('');
    const [criterios, setCriterios] = useState('');
    const [idEdicao, setIdEdicao] = useState(false);
    const [idModalOpen, setIdModalOpen] = useState(1);
    const [eap, setEap] = useState<IOrganograma[] | []>([]);
    const [eap1, setEap1] = useState<IOrganograma[] | []>([]);
    const [eap2, setEap2] = useState<IOrganograma[] | []>([]);
    const [eap3, setEap3] = useState<IOrganograma[] | []>([]);
    const [eap4, setEap4] = useState<IOrganograma[] | []>([]);
    const [eap5, setEap5] = useState<IOrganograma[] | []>([]);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);

    function handleOpenNewModalOne() {
      setIdModalOpen(1);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModal1() {
        setName(eap[0].nome);
        setDescricao(eap[0].descricao);
        setCriterios(eap[0].criterios);
        console.log(eap[0].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
        setIdModalOpen(1);
      }

      function handleOpenNewModal2() {
        setName(eap[1].nome);
        setDescricao(eap[1].descricao);
        setCriterios(eap[1].criterios);
        console.log(eap[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
        setIdModalOpen(2);
      }

      function handleOpenNewModal3() {
        setName(eap[2].nome);
        setDescricao(eap[2].descricao);
        setCriterios(eap[2].criterios);
        console.log(eap[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
        setIdModalOpen(3);
      }

      function handleOpenNewModal4() {
        setName(eap[3].nome);
        setDescricao(eap[3].descricao);
        setCriterios(eap[3].criterios);
        console.log(eap[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
        setIdModalOpen(4);
      }

      function handleOpenNewModal5() {
        setName(eap[4].nome);
        setDescricao(eap[4].descricao);
        setCriterios(eap[4].criterios);
        console.log(eap[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
        setIdModalOpen(5);
      }

      
// Vamos começar por aqui
    function handleOpenNewModalEap1() {
        setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap2() {
      setIdEdicao(false);
      setIdModalOpen(7);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap3() {
      setIdEdicao(false);
      setIdModalOpen(8);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap4() {
        setIdEdicao(false);
        setIdModalOpen(9);
        setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap5() {
        setIdEdicao(false);
        setIdModalOpen(10);
        setIsNewModalOpen(true);
    }

    function handleOpenNewModalTwo() {
        setIdEdicao(false);
        setIdModalOpen(2);
        setIsNewModalOpen(true);
    }

    function handleOpenNewModal() {
        setIdEdicao(false);
        setIsNewModalOpen(true);
    }

    function handleCloseNewModal() {
        setIdEdicao(false);
        setIsNewModalOpen(false);
    }

    function handleCancel () {
      setIdEdicao(false);
      setIdEdicao(false);
      setIsNewModalOpen(false);
    }

    function handleSubmit() {
    
      setIdEdicao(false);

      if(idModalOpen === 6) {
        var organanogramaTemp: IOrganograma = {
          "id": idModalOpen,
          "nome": name,
          "descricao": descricao,
          "criterios": criterios,
        }
  
        setEap1([...eap1, organanogramaTemp]);
        setIsNewModalOpen(false);
        
       } else if (idModalOpen === 7) {
        var organanogramaTemp: IOrganograma = {
          "id": idModalOpen,
          "nome": name,
          "descricao": descricao,
          "criterios": criterios,
        }
  
        setEap2([...eap2, organanogramaTemp]);
        setIsNewModalOpen(false);

      }else if (idModalOpen === 8) {
        var organanogramaTemp: IOrganograma = {
          "id": idModalOpen,
          "nome": name,
          "descricao": descricao,
          "criterios": criterios,
        }
  
        setEap3([...eap3, organanogramaTemp]);
        setIsNewModalOpen(false);

      }else if (idModalOpen === 9) {
        var organanogramaTemp: IOrganograma = {
          "id": idModalOpen,
          "nome": name,
          "descricao": descricao,
          "criterios": criterios,
        }
  
        setEap4([...eap4, organanogramaTemp]);
        setIsNewModalOpen(false);

      }else if (idModalOpen === 10) {
        var organanogramaTemp: IOrganograma = {
          "id": idModalOpen,
          "nome": name,
          "descricao": descricao,
          "criterios": criterios,
        }
  
        setEap5([...eap5, organanogramaTemp]);
        setIsNewModalOpen(false);

      } else {

        var organanogramaTemp: IOrganograma = {
          "id": idModalOpen,
          "nome": name,
          "descricao": descricao,
          "criterios": criterios,
        }

        setEap([...eap, organanogramaTemp]);
        setIsNewModalOpen(false);
      }

      
    }

    function handleNameChange(e) {
      setName(e.target.value);
    }

    function handleDescricaoChange(e) {
      setDescricao(e.target.value);
    }

    function handleCriteriosChange(e) {
      setCriterios(e.target.value);
    }

    return( 
      
        <>
        <div id="organograma">
        <div className="arvore">
            <div className="nivel-1">
                <div className="no">
                    <button className="tag"> 
                        <p>Raiz</p>
                    </button>

                    <div className="nivel-2">
                        {eap.length === 0 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 1 || eap.length > 1 ?     
                        <div className="no">
                            <button className="tag" onClick={handleOpenNewModal1}> 
                                <div className="circulo-nivel" >
                                    <p>1</p>
                                </div>
                                <p>{eap[0].nome}</p>
                            </button>
                          
                            <div className="nivel-3">
                                
                                {eap1.length === 0 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}
                                
                                {eap1.length === 1 || eap1.length > 1 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>1.1</p>
                                            </div>
                                            <p>{eap1[0].nome}</p>
                                    </button>
                                </div>: null}

                                {eap1.length === 1 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}
                                
                                {eap1.length === 2 || eap1.length > 2 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>1.2</p>
                                            </div>
                                            <p>{eap1[1].nome}</p>
                                    </button>
                                </div> : null}

                                {eap1.length === 2 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}

                                {eap1.length === 3 || eap1.length > 3 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>1.3</p>
                                            </div>
                                            <p>{eap1[2].nome}</p>
                                    </button>
                                </div> : null}

                                {eap1.length === 3 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}

                                {eap1.length === 4 || eap1.length > 4 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>1.4</p>
                                            </div>
                                            <p>{eap1[3].nome}</p>
                                    </button>
                                </div> : null}

                                {eap1.length === 4 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}

                                {eap1.length === 5 || eap1.length > 5 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>1.5</p>
                                            </div>
                                            <p>{eap1[4].nome}</p>
                                    </button>
                                </div> : null}
                            </div>
                        </div> : null }

                        
                      
                        {eap.length === 1 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 2 || eap.length > 2 ?     
                        <div className="no">
                            <button className="tag" onClick={handleOpenNewModal2}> 
                                <div className="circulo-nivel">
                                    <p>2</p>
                                </div>
                                <p>{eap[1].nome}</p>
                            </button>
    
                            <div className="nivel-3">
                                {eap2.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}
                                
                                {eap2.length === 1 || eap2.length > 1 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>2.1</p>
                                            </div>
                                            <p>{eap2[0].nome}</p>
                                    </button>
                                </div> : null}

                                {eap2.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}
    
                                {eap2.length === 2 || eap2.length > 2 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>2.2</p>
                                            </div>
                                            <p>{eap2[1].nome}</p>
                                    </button>
                                </div> : null}

                                {eap2.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}

                                {eap2.length === 3 || eap2.length > 3 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>2.3</p>
                                            </div>
                                            <p>{eap2[2].nome}</p>
                                    </button>
                                </div> : null}

                                {eap2.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}

                                {eap2.length === 4 || eap2.length > 4 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>2.4</p>
                                            </div>
                                            <p>{eap2[3].nome}</p>
                                    </button>
                                </div> : null}

                                {eap2.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}

                                {eap2.length === 5 || eap2.length > 5 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>2.5</p>
                                            </div>
                                            <p>{eap2[4].nome}</p>
                                    </button>
                                </div> : null}
                            </div>
                        </div> : null }



                        {eap.length === 2 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 3 || eap.length > 3 ?     
                        <div className="no">
                            <button className="tag" onClick={handleOpenNewModal3}> 
                                <div className="circulo-nivel">
                                    <p>3</p>
                                </div>
                                <p>{eap[2].nome}</p>
                            </button>
    
                            <div className="nivel-3">

                                {eap3.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}
                                
                                {eap3.length === 1 || eap3.length > 1 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>3.1</p>
                                            </div>
                                            <p>{eap3[0].nome}</p>
                                    </button>
                                </div> : null}

                                {eap3.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}
    
                                {eap3.length === 2 || eap3.length > 2 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>3.2</p>
                                            </div>
                                            <p>{eap3[1].nome}</p>
                                    </button>
                                </div> : null}

                                {eap3.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}

                                {eap3.length === 3 || eap3.length > 3 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>3.3</p>
                                            </div>
                                            <p>{eap3[2].nome}</p>
                                    </button>
                                </div> : null}

                                {eap3.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}

                                {eap3.length === 4 || eap3.length > 4 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>3.4</p>
                                            </div>
                                            <p>{eap3[3].nome}</p>
                                    </button>
                                </div> : null}

                                {eap3.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}

                                {eap3.length === 5 || eap3.length > 5 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>3.5</p>
                                            </div>
                                            <p>{eap3[4].nome}</p>
                                    </button>
                                </div> : null}
                            </div>
                        </div> : null}


                        {eap.length === 3 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 4 || eap.length > 4 ?     
                        <div className="no">
                            <button className="tag" onClick={handleOpenNewModal4}> 
                                <div className="circulo-nivel">
                                    <p>4</p>
                                </div>
                                <p>{eap[3].nome}</p>
                            </button>
    
                            <div className="nivel-3">

                                {eap4.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 1 || eap4.length > 1 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>4.1</p>
                                            </div>
                                            <p>{eap4[0].nome}</p>
                                    </button>
                                </div> : null}

                                {eap4.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}
    
                                {eap4.length === 2 || eap4.length > 2 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>4.2</p>
                                            </div>
                                            <p>{eap4[1].nome}</p>
                                    </button>
                                </div> : null}

                                {eap4.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 3 || eap4.length > 3 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>4.3</p>
                                            </div>
                                            <p>{eap4[2].nome}</p>
                                    </button>
                                </div> : null}

                                {eap4.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 4 || eap4.length > 4 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>4.4</p>
                                            </div>
                                            <p>{eap4[3].nome}</p>
                                    </button>
                                </div> : null}

                                {eap4.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 5 || eap4.length > 5 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>4.5</p>
                                            </div>
                                            <p>{eap4[4].nome}</p>
                                    </button>
                                </div> : null}
                            </div>
                        </div> : null} 

                        
                        
                        {eap.length === 4 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 5 || eap.length > 5 ?     
                        <div className="no">
                            <button className="tag" onClick={handleOpenNewModal5}> 
                                <div className="circulo-nivel">
                                    <p>5</p>
                                </div>
                                <p>{eap[4].nome}</p>
                            </button>
    
                            <div className="nivel-3">
                            
                                {eap5.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 1 || eap5.length > 1 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>5.1</p>
                                            </div>
                                            <p>{eap5[0].nome}</p>
                                    </button>
                                </div> : null}

                                {eap5.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}
    
                                {eap5.length === 2 || eap5.length > 2 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>5.2</p>
                                            </div>
                                            <p>{eap5[1].nome}</p>
                                    </button>
                                </div> : null}

                                {eap5.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 3 || eap5.length > 3 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>5.3</p>
                                            </div>
                                            <p>{eap5[2].nome}</p>
                                    </button>
                                </div> : null}

                                {eap5.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 4 || eap5.length > 4 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>5.4</p>
                                            </div>
                                            <p>{eap5[3].nome}</p>
                                    </button>
                                </div> : null}

                                {eap5.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 5 || eap5.length > 5 ?
                                <div className="no">
                                    <button className="tag"> 
                                            <div className="circulo-nivel">
                                                <p>5.5</p>
                                            </div>
                                            <p>{eap5[4].nome}</p>
                                    </button>
                                </div> : null}
                            </div>
                        </div> : null} 

                    </div>
                </div>
            </div>
        </div>
    </div>

    {!idEdicao ? 
        <Modal isOpen={isNewModalOpen} 
        onRequestClose={handleCloseNewModal}
        overlayClassName="react-modal-overlay"
        
        className="react-modal-content">
            <form>
              <h2>Adicionar nova Célula</h2>
              <input
              type="text"
              onChange={handleNameChange}
              placeholder="Nome"/>
                
              <input
              className="inputDescricao"
              onChange={handleDescricaoChange}
              placeholder="Descricao"/>
              
              <input
              onChange={handleCriteriosChange}
              placeholder="Criterios"/>
                <div className="butoesform">
                  <button type="button" className="botaoAdicionar" onClick={handleSubmit}>Adicionar</button>
                  <button type="button" className="botaoCancelar" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </Modal> : 
        
        <Modal isOpen={isNewModalOpen} 
        onRequestClose={handleCloseNewModal}

        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <form>
              <h2>Adicionar nova Célula</h2>
              <input
              type="text"
              onChange={handleNameChange}
              value={name}
              placeholder="Nome"/>
                
              <input
              className="inputDescricao"
              onChange={handleDescricaoChange}
              value={descricao}
              placeholder="Descricao"/>
              
              <input
              onChange={handleCriteriosChange}
              value={criterios}
              placeholder="Criterios"/>
                <div className="butoesform">
                  <button type="button" className="botaoAdicionar" onClick={handleSubmit}>Salvar</button>
                  <button type="button" className="botaoCancelar" onClick={handleCancel}>Excluir</button>
                </div>
            </form>
        </Modal>    
}  
  </>
)}