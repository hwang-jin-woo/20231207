import styled from "styled-components"
import "./css/home.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import { ModalContainer, ModalOverlay, ModalCloseBtn, ModalContent } from "./Modal";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:e5989b ;
`
const Footer=styled.div`
display: flex;
`
const Buttons=styled.ul`
li{
    list-style: none;
    margin: 20px;
    float: left;
    position: relative;
    top: 100px;
    left: 250px;
    z-index: 1;
}
`
export function Home(){
  const [test, setTest] = useState('');

  function testLoading() {
    // 서버의 API를 호출하여 데이터 가져오기
    fetch('http://localhost:3301/api/test') // 백엔드 서버 주소를 사용
    .then((response) => response.json())
    .then((data) => {
      setTest(data);
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    testLoading();
  }, [test]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  


  return<>
      <Container>   
      {modalOpen &&
        <ModalContainer>
            <ModalOverlay onClick={() => setModalOpen(false)}/>
            <ModalContent>
                <ModalCloseBtn onClick={() => setModalOpen(false)}>x</ModalCloseBtn>
                <div className="tap-panels">
                    <div className="tab-panel">
                    <div className="date">날짜:<input type="date" /></div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <select name="nation">
                                <option value="">병원을 선택하세요.</option>
                                <optgroup label="병원">
                                <option value="medc" >내과</option>
                                <option value="surg">외과</option>
                                <option value="dent">치과</option>
                                </optgroup>
                            </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div><input type="text" /></div>
                    <div>예약하기<input type="submit" value="Submit" /></div>
                    </div>
                </div>
            </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen1 &&
        <ModalContainer>
        <ModalOverlay onClick={() => setModalOpen1(false)}/>    
        <ModalContent>
            {test && test.length > 0 &&
                <ul  style={{ zIndex: 10000 }} >
                <li>no:{test[0].no}</li>
                <li>title:{test[0].title}</li>
                <li>content:{test[0].content}</li>
                <li>type:{test[0].type}</li>
                </ul>
                }
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen1(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen2 &&
        <ModalContainer>
        <ModalOverlay onClick={() => setModalOpen2(false)}/>    
        <ModalContent>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen2(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen3 &&
        <ModalContainer>
        <ModalOverlay onClick={() => setModalOpen3(false)}/>    
        <ModalContent>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen3(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    } 
        <main>
              <section className="section">
                    <div>
                      <Buttons>        
                          <li>
                              <button className="button" onClick={() => setModalOpen(true)}>
                                <h2>예약 하기</h2>
                              </button>  
                            </li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen1(true)}>
                                <h2>예약 확인</h2>
                              </button>  
                            </li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen2(true)}>
                                <h2>예약자 현황</h2>
                              </button>  
                            </li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen3(true)}>
                                <h2>병원 정보</h2>
                              </button>  
                            </li>        
                        </Buttons>
                    </div>
              </section>
          </main>
          <Footer>
    <ul>
        <li><Link to='https://cocoder.tistory.com' target='_blank'>Blog</Link> </li>
        <li><Link to='https://github.com/hwang-jin-woo/' target='_blank'>Github</Link></li>
    </ul>
    <p>
        <span>저자 : 황진우</span><br/>
        <span>이메일 : hjinu91@naver.com</span><br/>
        <span>Copyright 2023. copy. All Rights Reserved.</span>
    </p>
</Footer>
    </Container>  
  </>
}