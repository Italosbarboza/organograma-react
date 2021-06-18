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
      }

      function handleOpenNewModa2() {
        setName(eap[1].nome);
        setDescricao(eap[1].descricao);
        setCriterios(eap[1].criterios);
        console.log(eap[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModa3() {
        setName(eap[2].nome);
        setDescricao(eap[2].descricao);
        setCriterios(eap[2].criterios);
        console.log(eap[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModa4() {
        setName(eap[3].nome);
        setDescricao(eap[3].descricao);
        setCriterios(eap[3].criterios);
        console.log(eap[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModa5() {
        setName(eap[4].nome);
        setDescricao(eap[4].descricao);
        setCriterios(eap[4].criterios);
        console.log(eap[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal11() {
        setName(eap1[0].nome);
        setDescricao(eap1[0].descricao);
        setCriterios(eap1[0].criterios);
        console.log(eap1[0].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal12() {
        setName(eap1[1].nome);
        setDescricao(eap1[1].descricao);
        setCriterios(eap1[1].criterios);
        console.log(eap1[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal13() {
        setName(eap1[2].nome);
        setDescricao(eap1[2].descricao);
        setCriterios(eap1[2].criterios);
        console.log(eap1[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal14() {
        setName(eap1[3].nome);
        setDescricao(eap1[3].descricao);
        setCriterios(eap1[3].criterios);
        console.log(eap1[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal15() {
        setName(eap1[4].nome);
        setDescricao(eap1[4].descricao);
        setCriterios(eap1[4].criterios);
        console.log(eap1[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal21() {
        setName(eap2[0].nome);
        setDescricao(eap2[0].descricao);
        setCriterios(eap2[0].criterios);
        console.log(eap2[0].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal22() {
        setName(eap2[1].nome);
        setDescricao(eap2[1].descricao);
        setCriterios(eap2[1].criterios);
        console.log(eap2[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal23() {
        setName(eap2[2].nome);
        setDescricao(eap2[2].descricao);
        setCriterios(eap2[2].criterios);
        console.log(eap2[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal24() {
        setName(eap2[3].nome);
        setDescricao(eap2[3].descricao);
        setCriterios(eap2[3].criterios);
        console.log(eap2[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal25() {
        setName(eap2[4].nome);
        setDescricao(eap2[4].descricao);
        setCriterios(eap2[4].criterios);
        console.log(eap2[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal31() {
        setName(eap3[0].nome);
        setDescricao(eap3[0].descricao);
        setCriterios(eap3[0].criterios);
        console.log(eap3[0].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal32() {
        setName(eap3[1].nome);
        setDescricao(eap3[1].descricao);
        setCriterios(eap3[1].criterios);
        console.log(eap3[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal33() {
        setName(eap3[2].nome);
        setDescricao(eap3[2].descricao);
        setCriterios(eap3[2].criterios);
        console.log(eap3[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal34() {
        setName(eap3[3].nome);
        setDescricao(eap3[3].descricao);
        setCriterios(eap3[3].criterios);
        console.log(eap3[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal35() {
        setName(eap3[4].nome);
        setDescricao(eap3[4].descricao);
        setCriterios(eap3[4].criterios);
        console.log(eap3[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal41() {
        setName(eap4[0].nome);
        setDescricao(eap4[0].descricao);
        setCriterios(eap4[0].criterios);
        console.log(eap4[0].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal42() {
        setName(eap4[1].nome);
        setDescricao(eap4[1].descricao);
        setCriterios(eap4[1].criterios);
        console.log(eap4[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal43() {
        setName(eap4[2].nome);
        setDescricao(eap4[2].descricao);
        setCriterios(eap4[2].criterios);
        console.log(eap4[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal44() {
        setName(eap4[3].nome);
        setDescricao(eap4[3].descricao);
        setCriterios(eap4[3].criterios);
        console.log(eap4[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal45() {
        setName(eap4[4].nome);
        setDescricao(eap4[4].descricao);
        setCriterios(eap4[4].criterios);
        console.log(eap4[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal51() {
        setName(eap5[0].nome);
        setDescricao(eap5[0].descricao);
        setCriterios(eap5[0].criterios);
        console.log(eap5[0].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal52() {
        setName(eap5[1].nome);
        setDescricao(eap5[1].descricao);
        setCriterios(eap5[1].criterios);
        console.log(eap5[1].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal53() {
        setName(eap5[2].nome);
        setDescricao(eap5[2].descricao);
        setCriterios(eap5[2].criterios);
        console.log(eap5[2].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal54() {
        setName(eap5[3].nome);
        setDescricao(eap5[3].descricao);
        setCriterios(eap5[3].criterios);
        console.log(eap5[3].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      function handleOpenNewModal55() {
        setName(eap5[4].nome);
        setDescricao(eap5[4].descricao);
        setCriterios(eap5[4].criterios);
        console.log(eap5[4].criterios)
        setIdEdicao(true);
        setIsNewModalOpen(true);
      }

      
// Vamos começar por aqui
    function handleOpenNewModalEap1() {
        setIdModalOpen(6);
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
                                    <button className="tag" onClick={handleOpenNewModal11}> 
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
                                    <button className="tag" onClick={handleOpenNewModal12}> 
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
                                    <button className="tag" onClick={handleOpenNewModal13}> 
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
                                    <button className="tag" onClick={handleOpenNewModal14}> 
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
                                    <button className="tag" onClick={handleOpenNewModal15}> 
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
                            <button className="tag" onClick={handleOpenNewModa2}> 
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
                                    <button className="tag" onClick={handleOpenNewModal21}> 
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
                                    <button className="tag" onClick={handleOpenNewModal22}> 
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
                                    <button className="tag" onClick={handleOpenNewModal23}> 
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
                                    <button className="tag" onClick={handleOpenNewModal24}> 
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
                                    <button className="tag" onClick={handleOpenNewModal25}> 
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
                            <button className="tag" onClick={handleOpenNewModa3}> 
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
                                    <button className="tag" onClick={handleOpenNewModal31}> 
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
                                    <button className="tag" onClick={handleOpenNewModal32}> 
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
                                    <button className="tag" onClick={handleOpenNewModal33}> 
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
                                    <button className="tag" onClick={handleOpenNewModal34}> 
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
                                    <button className="tag" onClick={handleOpenNewModal35}> 
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
                            <button className="tag" onClick={handleOpenNewModa4}> 
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
                                    <button className="tag" onClick={handleOpenNewModal41}> 
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
                                    <button className="tag" onClick={handleOpenNewModal42}> 
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
                                    <button className="tag" onClick={handleOpenNewModal43}> 
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
                                    <button className="tag" onClick={handleOpenNewModal44}> 
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
                                    <button className="tag" onClick={handleOpenNewModal45}> 
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
                            <button className="tag" onClick={handleOpenNewModa5}> 
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
                                    <button className="tag" onClick={handleOpenNewModal51}> 
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
                                    <button className="tag" onClick={handleOpenNewModal52}> 
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
                                    <button className="tag" onClick={handleOpenNewModal53}> 
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
                                    <button className="tag" onClick={handleOpenNewModal54}> 
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
                                    <button className="tag" onClick={handleOpenNewModal55}> 
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
              <h2>Modificar celular {name}</h2>
              <input
              type="text"
              readOnly
              onChange={handleNameChange}
              value={name}
              placeholder="Nome"/>
                
              <input
              readOnly
              className="inputDescricao"
              onChange={handleDescricaoChange}
              value={descricao}
              placeholder="Descricao"/>
              
              <input
              readOnly
              onChange={handleCriteriosChange}
              value={criterios}
              placeholder="Criterios"/>
                <div className="butoesform">
                  <button type="button" className="botaoEditar" disabled onClick={handleCancel}>Editar</button>
                  <button type="button" className="botaoCancelar" onClick={handleCancel}>Salvar</button>
                </div>
            </form>
        </Modal>    
}  
  </>
)}