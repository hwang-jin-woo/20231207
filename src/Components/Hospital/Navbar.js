import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import "./css/navbar.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { ModalContainer, ModalOverlay, ModalCloseBtn, ModalContent } from "./Modal";


const Container=styled.div`
    width: calc(100vw-10px);
    background-color: ffcdb2;
`
const Nav=styled.nav`
    padding-top: 10px;
    width: 1200px;
    margin: 0 auto; 
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    
    li{
        
        line-height:50px;
        list-style: none;
        
        font-weight: bold;
        font-size: 25px;
        z-index: 1;
        text-align:center;
    }
    li a:hover{
    color: rgb(55, 55, 198);
    li a {
        color: black;
        text-decoration: none;
        
        /* text-underline-position : under; */
    }
}

`;
const NavBrand = styled.div`
    display: flex;
    position: relative;
    right: 90px;
    h2 {
        margin-left: 30px;
    }
`;
const MainMenu = styled.ul`
    display: flex;
    flex-direction: column;    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        
        li {
            width: calc( 25% );
            text-align: center;                        
        }
        a {
        color: black;
        text-decoration: none;
        /* text-underline-position : under; */
    }

    }
`;
const SubMenu = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
    ul {
        display: flex;
        flex-direction: column;
        align-items:center;
        width: calc( 25% );
        text-align: center;
        position: relative;
        li {
            width: 100%;
            a{
                font-size: 20px;
            }
        }
        li a:hover{
            color: #ff7200;
        }
    }
    max-height: ${({ "$isSubContainerVisible": isSubContainerVisible }) =>
    isSubContainerVisible ? '500px' : '0'};
    opacity: ${({ "$isSubContainerVisible": isSubContainerVisible }) =>
    isSubContainerVisible ? '1' : '0.8'};
    overflow: hidden;
    transition: max-height 600ms, opacity 600ms;
`;
const Search = styled.div`
    position: relative;
    left: 70px;
    input{
        height: 40px;
        border: 1px solid black;
        font-size: 16px;
        margin-right: 10px;
        position: relative;
        top: 3px;
    }
    button{
    width: 100px;
    height: 40px;
    background: #ff7200;
    border: 2px solid #ff7200;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-bottom-right-radius: 5px;
    }
`;

export function Navbar(){
    const navigate=useNavigate();
    const [inputValue,setInputValue]=useState("");
    const [isSubContainerVisible, setSubContainerVisible]=useState(false);

    const handleMouseEnter = () => {
        setSubContainerVisible(true);
    };
    
    const handleMouseLeave = () => {
        setSubContainerVisible(false);
    };

    const mypageClick = () => {
        navigate('/Mypage');
    };
    const mbClick = () => {
        navigate('/Mb');
    };
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    console.log('open');
    };
    useEffect(() => {
    // 페이지 로딩 시 사이드바를 숨겨둘 경우
    setSidebarOpen(false);
    }, []);

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    
    const [isLogin, setIsLogin] = useState(false);
    
    useEffect(() => {
        if (sessionStorage.getItem('isLogin')) {
        setIsLogin(true);
        }
    },[]);


    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);
    const [modalOpen5, setModalOpen5] = useState(false);
    const [modalOpen6, setModalOpen6] = useState(false);


    const [test, setTest] = useState('');

    function testLoading() {
      // 서버의 API를 호출하여 데이터 가져오기
      fetch('http://localhost:3000/api/test') // 백엔드 서버 주소를 사용
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
return<>
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

    <Nav>
        <Sidebar mypageClick={mypageClick} mbClick={mbClick} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} toggleSidebar={toggleSidebar}/>
        <NavBrand>
            <div className="brand-icon">HP</div>
            <h2>병원 예약시스템</h2>
        </NavBrand>
        <MainMenu onMouseLeave={handleMouseLeave}>
            <ul >
                <li><Link to="./home" onMouseEnter={handleMouseEnter}>진료예약</Link></li>
                <li><Link to="./mg" onMouseEnter={handleMouseEnter}>나의 관리</Link></li>
                <li><Link to="./sc" onMouseEnter={handleMouseEnter}>검색</Link> </li>
                <li><Link to="./faq" onMouseEnter={handleMouseEnter}>FAQ</Link></li>
            </ul>
            <SubMenu $isSubContainerVisible={isSubContainerVisible}>
                <ul>
                    <li><Link to="./home"onClick={() => setModalOpen(true)}>예약하기</Link>
                    </li>                       
                    <li><Link to="./home"onClick={() => setModalOpen1(true)}>예약확인</Link>
                    </li> 
                    <li><Link to="/home"onClick={() => setModalOpen2(true)}>예약자현황</Link>
                    
                    </li>
                    <li><Link to="/home"onClick={() => setModalOpen3(true)}>병원정보</Link>
                    </li>
                </ul>
                <ul>
                    <li><Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank">병원내역조회</Link></li>
                    <li><Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank">건강검진</Link></li>
                    <li><Link to="./BmiMeasurement">BMI측정</Link></li>
                </ul>
                <ul>
                    <li><Link to="/sc"onClick={() => setModalOpen4(true)}>내가 가본병원</Link>
                    </li>
                    <li><Link to="/sc"onClick={() => setModalOpen5(true)}>가까운병원</Link>
                    </li>
                    <li><Link to="/sc"onClick={() => setModalOpen6(true)}>인기병원</Link>
                    </li>
                </ul>
            </SubMenu>
        </MainMenu>
        <Search>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="검색어를 입력하세요." />
            <button  onClick={()=>{
                setInputValue("");
                navigate(`/search?keyword=${inputValue}`);
            }}>검색</button>
        </Search>            
    </Nav>
</Container>
<Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} />
<Outlet />

</>
}