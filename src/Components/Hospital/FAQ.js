import styled from "styled-components"
import "./css/faq.css";
import { Link } from "react-router-dom"
import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Container=styled.div`
  width: calc(100vw-10px);
  background-color:e5989b;
`
const Footer=styled.div`
display: flex;
`
const Board=styled.div`
position: relative;
left: 1000px;
input{
  display: flex;
  flex-direction: column;
}
`

export function FAQ(){
  const [formData, setFormData] = useState({
    title: '',
    context: '',
    time: '',
    modiatedDate: '',
    writer: '',
    modifiter: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버에 POST 요청을 보내어 새로운 게시글 추가
      await axios.post('http://localhost:3301/api/board', formData);

      // 폼 데이터 초기화 또는 다른 동작 수행
      setFormData({
        title: '',
        context: '',
        time: '',
        modiatedDate: '',
        writer: '',
        modifiter: '',
      });

      console.log('게시글이 성공적으로 추가되었습니다.');
    } catch (error) {
      console.error('게시글 추가 오류:', error);
    }
  };

  const [posts, setPosts] = useState([]); // 불러온 게시글을 저장할 상태
  useEffect(() => {
    // 컴포넌트가 마운트될 때 게시글을 불러옴
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3301/api/board');
        setPosts(response.data); // 불러온 데이터로 상태를 업데이트
      } catch (error) {
        console.error('게시글 불러오기 오류:', error);
      }
    };

    fetchPosts();
  }, []); 



  return<>
      <Container>    
      <main className="main">
            <section >
            <Board>
          <h1>리액트 게시판</h1>
          <form onSubmit={handleSubmit}>
            <label>
              제목:
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
            </label>
            <label>
              내용:
              <textarea name="context" value={formData.context} onChange={handleInputChange} />
            </label>
            {/* 다른 필드들도 위와 같이 추가 */}
            <button type="submit">게시글 추가</button>
          </form>
    </Board>
            </section>            
        </main> 
        <Footer>
           {/* 불러온 게시글을 렌더링 */}
            <ul>
              {posts.map(post => (
                <li key={post.title}>{post.context}</li>
              ))}
            </ul>
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