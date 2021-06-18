import { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

interface IOrganograma {
  id: number;
  nome: string;
  descricao: string;
  criterios: string;
  nivel2?: [{
    id: number;
    nome: string;
    descricao: string;
    criterios: string;
  }]
}

Modal.setAppElement('#root');

export function Organograma() {
  
    const [name, setName] = useState('');
    const [descricao, setDescricao] = useState('');
    const [criterios, setCriterios] = useState('');
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

    function handleOpenNewModalEap1() {
      setIdModalOpen(6);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap2() {
      setIdModalOpen(7);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap3() {
      setIdModalOpen(8);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap4() {
      setIdModalOpen(9);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalEap5() {
      setIdModalOpen(10);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModalTwo() {
      setIdModalOpen(2);
      setIsNewModalOpen(true);
    }

    function handleOpenNewModal() {
      setIsNewModalOpen(true);
    }

    function handleCloseNewModal() {
      setIsNewModalOpen(false);
    }

    function handleCancel () {
      setIsNewModalOpen(false);
    }

    function handleSubmit() {

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
                    <h1 className="tag"> Raiz </h1>

                    <div className="nivel-2">
                        {eap.length === 0 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 1 || eap.length > 1 ?     
                        <div className="no">
                            <h1 className="tag"> {eap[0].nome} </h1>
                          
                            <div className="nivel-3">
                                
                                {eap1.length === 0 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}
                                
                                {eap1.length === 1 || eap1.length > 1 ?
                                <div className="no">
                                    <h1 className="tag"> {eap1[0].nome}</h1>
                                </div>: null}

                                {eap1.length === 1 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}
                                
                                {eap1.length === 2 || eap1.length > 2 ?
                                <div className="no">
                                    <h1 className="tag"> {eap1[1].nome} </h1>
                                </div> : null}

                                {eap1.length === 2 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}

                                {eap1.length === 3 || eap1.length > 3 ?
                                <div className="no">
                                    <h1 className="tag"> {eap1[2].nome} </h1>
                                </div> : null}

                                {eap1.length === 3 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}

                                {eap1.length === 4 || eap1.length > 4 ?
                                <div className="no">
                                    <h1 className="tag"> {eap1[3].nome} </h1>
                                </div> : null}

                                {eap1.length === 4 ?
                                    <div className="no">
                                        <button className="add" onClick={handleOpenNewModalEap1}> Adicionar </button>
                                    </div> : null}

                                {eap1.length === 5 || eap1.length > 5 ?
                                <div className="no">
                                    <h1 className="tag"> {eap1[4].nome} </h1>
                                </div> : null}
                            </div>
                        </div> : null }

                        
                        {eap.length === 1 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 2 || eap.length > 2 ?     
                        <div className="no">
                            <h1 className="tag"> {eap[1].nome} </h1>
    
                            <div className="nivel-3">
                                {eap2.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}
                                
                                {eap2.length === 1 || eap2.length > 1 ?
                                <div className="no">
                                    <h1 className="tag"> {eap2[0].nome} </h1>
                                </div> : null}

                                {eap2.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}
    
                                {eap2.length === 2 || eap2.length > 2 ?
                                <div className="no">
                                    <h1 className="tag"> {eap2[1].nome} </h1>
                                </div> : null}

                                {eap2.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}

                                {eap2.length === 3 || eap2.length > 3 ?
                                <div className="no">
                                    <h1 className="tag"> {eap2[2].nome} </h1>
                                </div> : null}

                                {eap2.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}

                                {eap2.length === 4 || eap2.length > 4 ?
                                <div className="no">
                                    <h1 className="tag"> {eap2[3].nome} </h1>
                                </div> : null}

                                {eap2.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap2}> Adicionar </button>
                                </div> : null}

                                {eap2.length === 5 || eap2.length > 5 ?
                                <div className="no">
                                    <h1 className="tag"> {eap2[4].nome} </h1>
                                </div> : null}
                            </div>
                        </div> : null }



                        {eap.length === 2 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 3 || eap.length > 3 ?     
                        <div className="no">
                            <h1 className="tag"> {eap[2].nome} </h1>
    
                            <div className="nivel-3">

                                {eap3.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}
                                
                                {eap3.length === 1 || eap3.length > 1 ?
                                <div className="no">
                                    <h1 className="tag"> {eap3[0].nome} </h1>
                                </div> : null}

                                {eap3.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}
    
                                {eap3.length === 2 || eap3.length > 2 ?
                                <div className="no">
                                    <h1 className="tag"> {eap3[1].nome} </h1>
                                </div> : null}

                                {eap3.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}

                                {eap3.length === 3 || eap3.length > 3 ?
                                <div className="no">
                                    <h1 className="tag"> {eap3[2].nome} </h1>
                                </div> : null}

                                {eap3.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}

                                {eap3.length === 4 || eap3.length > 4 ?
                                <div className="no">
                                    <h1 className="tag"> {eap3[3].nome} </h1>
                                </div> : null}

                                {eap3.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap3}> Adicionar </button>
                                </div> : null}

                                {eap3.length === 5 || eap3.length > 5 ?
                                <div className="no">
                                    <h1 className="tag"> {eap3[4].nome} </h1>
                                </div> : null}
                            </div>
                        </div> : null}


                        {eap.length === 3 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 4 || eap.length > 4 ?     
                        <div className="no">
                            <h1 className="tag"> {eap[3].nome} </h1>
    
                            <div className="nivel-3">

                                {eap4.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 1 || eap4.length > 1 ?
                                <div className="no">
                                    <h1 className="tag"> {eap4[0].nome} </h1>
                                </div> : null}

                                {eap4.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}
    
                                {eap4.length === 2 || eap4.length > 2 ?
                                <div className="no">
                                    <h1 className="tag"> {eap4[1].nome} </h1>
                                </div> : null}

                                {eap4.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 3 || eap4.length > 3 ?
                                <div className="no">
                                    <h1 className="tag"> {eap4[2].nome} </h1>
                                </div> : null}

                                {eap4.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 4 || eap4.length > 4 ?
                                <div className="no">
                                    <h1 className="tag"> {eap4[3].nome} </h1>
                                </div> : null}

                                {eap4.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap4}> Adicionar </button>
                                </div> : null}

                                {eap4.length === 5 || eap4.length > 5 ?
                                <div className="no">
                                    <h1 className="tag"> {eap4[4].nome} </h1>
                                </div> : null}
                            </div>
                        </div> : null} 

                        
                        
                        {eap.length === 4 ?
                        <div className="no">
                              <button className="add" onClick={handleOpenNewModalOne}> Adicionar </button>
                        </div> : null}

                        {eap.length === 5 || eap.length > 5 ?     
                        <div className="no">
                            <h1 className="tag"> {eap[4].nome} </h1>
    
                            <div className="nivel-3">
                            
                                {eap5.length === 0 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 1 || eap5.length > 1 ?
                                <div className="no">
                                    <h1 className="tag"> {eap5[0].nome} </h1>
                                </div> : null}

                                {eap5.length === 1 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}
    
                                {eap5.length === 2 || eap5.length > 2 ?
                                <div className="no">
                                    <h1 className="tag"> {eap5[1].nome} </h1>
                                </div> : null}

                                {eap5.length === 2 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 3 || eap5.length > 3 ?
                                <div className="no">
                                    <h1 className="tag"> {eap5[2].nome} </h1>
                                </div> : null}

                                {eap5.length === 3 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 4 || eap5.length > 4 ?
                                <div className="no">
                                    <h1 className="tag"> {eap5[3].nome} </h1>
                                </div> : null}

                                {eap5.length === 4 ?
                                <div className="no">
                                    <button className="add" onClick={handleOpenNewModalEap5}> Adicionar </button>
                                </div> : null}

                                {eap5.length === 5 || eap5.length > 5 ?
                                <div className="no">
                                    <h1 className="tag"> {eap5[4].nome} </h1>
                                </div> : null}
                            </div>
                        </div> : null} 

                    </div>
                </div>
            </div>
        </div>
    </div>

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
    </Modal> 
    
  </>
)}