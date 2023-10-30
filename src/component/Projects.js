import React from 'react'

const Projects = () => {
    const LoadP2 = ()=>{
        const filename= "/semin_project2.pdf"
        window.open(filename,'_blank')
    }
    const LoadP3 = ()=>{
        const filename= "/semin_project3.pdf"
        window.open(filename,'_blank')
    }
    const LoadP4 = ()=>{
        const filename= "/semin_project4.pdf"
        window.open(filename,'_blank')
    }
    return (
        <article>
        <div class="textbox">
            <p>1. MERN Stack을 이용한 Instagram Clone Coding [작업중...]</p>
            <p>
                <a target="_blank"href="https://instagram-front.onrender.com">Demo</a>
                <a target="_blank"href="https://github.com/SMZZOL/Instagram_front">Git</a>
            </p>
        </div>
        <div class="textbox">
            <p>2. 머신러닝, Django를 이용한 화장품 맞춤 추천 서비스</p>
            <p>
                <a href="#" onClick={LoadP2}>PPT</a>
                <a target="_blank"href="https://github.com/SMZZOL/cosme_selection">Git</a>
            </p>
        </div>
        <div class="textbox">
            <p>3. Sql, SpringBoot 를 활용한 검색어 알고리즘</p>
            <p>
                <a href="#" onClick={LoadP3}>PPT</a>
                <a target="_blank"href="https://github.com/SMZZOL/search_algorithm">Git</a>
            </p>
        </div>
        <div class="textbox">
            <p>4. 색상값 RGB를 이용한 Digital Number 및 시간 구현</p>
            <p>
                <a href="#" onClick={LoadP4}>PPT</a>
                <a target="_blank"href="https://github.com/SMZZOL/rgb_digits">Git</a>
            </p>
        </div>
        </article>
    )
}

export default Projects