import {  AiOutlineMenu  } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import "./css/sidebar.css";
import styled from "styled-components"
import { Link} from "react-router-dom"
import { useState,useEffect } from "react";
import { ModalContainer, ModalOverlay, ModalCloseBtn, ModalContent } from "./Modal";

const Container=styled.div` 
position: absolute;
left: 5px;
top: 60px;
li a{
    font-size: 20px;
}
`
const Barbrand=styled.div`
display: flex;
h2 {
        margin-left: 30px;
    }
`


export default function Sidebar({mypageClick,mbClick,isSidebarOpen,setSidebarOpen,toggleSidebar}){

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
const [modalOpen4, setModalOpen4] = useState(false);
const [modalOpen5, setModalOpen5] = useState(false);
const [modalOpen6, setModalOpen6] = useState(false);


return(
    <>
    <Container>
    {modalOpen &&
        <ModalContainer >
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
        <ModalContainer >
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
        <ModalContainer >
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
        <ModalContainer >
        <ModalOverlay onClick={() => setModalOpen3(false)}/>    
        <ModalContent>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen3(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen4 &&
        <ModalContainer >
        <ModalOverlay onClick={() => setModalOpen4(false)}/>    
        <ModalContent>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen4(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen5 &&
        <ModalContainer >
        <ModalOverlay onClick={() => setModalOpen5(false)}/>    
        <ModalContent>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen5(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen6 &&
        <ModalContainer >
        <ModalOverlay onClick={() => setModalOpen6(false)}/>    
        <ModalContent>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen6(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="menu-icon"onClick={toggleSidebar}> 
                <AiOutlineMenu />
                </div>
                    <Barbrand>        
                        <div className="sidebabrand-icon">HP</div>
                        <h2>병원 예약시스템</h2>
                        </Barbrand>
                        <div className="Sidebaicon1">
                        <button className="sidebarlogin"onClick={mypageClick}>
                            <div className="user-icon">
                            <AiOutlineUser />
                            </div>
                        <h3>내정보수정</h3>
                        </button>
                        <button className="sidebarmb"onClick={mbClick}>
                            <div className="login-icon">
                            <FiLogIn/>
                            </div>
                    <h3>회원가입</h3>
                        </button>
                        </div>
                        <ul id="Sidebamenu">
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">
                            <div className="down-icon">
                            진료예약<FiChevronDown />
                            </div>
                            </div>
                            <ul className="Sidebamenu-sub">
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/home"}className="sidemenu"onClick={() => setModalOpen(true)}>예약하기</Link>
                                
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/home"}className="sidemenu"onClick={() => setModalOpen1(true)}>예약확인</Link>
                                
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/home"}className="sidemenu"onClick={() => setModalOpen2(true)}>예약자 현황</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/home"}className="sidemenu"onClick={() => setModalOpen3(true)}>병원정보</Link>
                                
                            </li>
                            </ul>
                        </li>
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">
                            <div className="down-icon">
                            나의관리<FiChevronDown />
                            </div>
                            </div>
                            <ul className="Sidebamenu-sub">
                            <li className="Sidebamenu-sub-item">
                                <Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank"className="sidemenu">병원내역 조회</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank"className="sidemenu">건강검진</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/bmiMeasurement"}className="sidemenu">BMI측정</Link>
                            </li>
                            </ul>
                        </li>
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">                        
                            <div className="down-icon">
                                검색<FiChevronDown />
                                </div>
                            </div>
                            <ul className="Sidebamenu-sub">
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/sc"}className="sidemenu"onClick={() => setModalOpen4(true)}>내가 가본 병원</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/sc"}className="sidemenu"onClick={() => setModalOpen5(true)}>가까운 병원</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/sc"}className="sidemenu"onClick={() => setModalOpen6(true)}>인기병원</Link>
                            </li>
                            </ul>
                        </li>
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">
                            <Link to={"/reservationConfirm"}className="sidemenu">FAQ</Link>
                            </div>
                        </li>
                        </ul>
                </div>
    </Container>
    </>
)
}