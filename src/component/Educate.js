import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"

const Educate = () => {
    const [eduopened, setEduopened] = useState(false);
    const [licensepened, setLicensepened] = useState(false);
    const [academicopened, setAcademicopened] = useState(false);
    let edu;
    let license;
    let academic;
    
    const educlicked = ()=>{
        setEduopened(prev=>!prev);
    }
    const academiclicked = ()=>{
        setAcademicopened(prev=>!prev);
    }
    const licenseclicked = ()=>{
        setLicensepened(prev=>!prev)
    }

  return (
    <article>
      <div class="textbox">
        {academicopened
        ?
            <>
                <p className="openup" onClick={academiclicked}>학력 사항 {" "}
                    <FontAwesomeIcon icon={faCaretDown} rotation={180}/>
                </p>
                <h3>2013.03 ~ 2015.02</h3>
                <h3>서원고등학교</h3>
                <br></br>
                <h3>2016.03 ~ 2022.02</h3>
                <h3>강남대학교 (소프트웨어 응용학)</h3>
            </>
        :
            <>
                <p className="openup" onClick={academiclicked}>학력 사항 {" "}
                    <FontAwesomeIcon icon={faCaretDown}/>
                </p>
            </>
        }
      </div>


        {eduopened
        ?
        <>
        <div class="textbox">
        <p className="openup" onClick={educlicked}>교육 이수 {" "}
        <FontAwesomeIcon icon={faCaretDown} rotation={180}/>
        </p>
        <h3>2023.01~2023.08</h3>
        <h3>빅데이터 활용 인공지능 기반 개인화 서비스 구축 개발자 과정</h3>
        <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
      </div>
      <div class="textbox">
        <h3>2022.01~2022.06</h3>
        <h3>웹개발-프론트엔드, 백엔드, DBMS(MySQL)(300시간)</h3>
        <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />{" "}

      </div>
      <div class="textbox">
        <h3>2021.06~2022.09</h3>
        <h3>DBMS, 자료구조, JAVA</h3>
        <img src="https://img.shields.io/badge/Java-6DB33F?style=for-the-badge&logo=Java&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/cplusplus-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" />{" "}
        <img src="https://img.shields.io/badge/DataStruct-007396?style=for-the-badge&logo=dataStruct&logoColor=white" />{" "}
      </div>
        </>
        :
        <>
        <div class="textbox">
            <p className="openup" onClick={educlicked}>교육 이수 {" "}
            <FontAwesomeIcon icon={faCaretDown}/>
            </p>
            
        </div>
        </>
        }
        {licensepened
        ?
        <>
        <div class="textbox">
            <p className="openup" onClick={licenseclicked}>자격 사항 {" "}
            <FontAwesomeIcon icon={faCaretDown} rotation={180}/>
            </p>
            <h3>2022.10</h3>
            <h3>데이터 베이스 개발자 (SQLD)</h3>
            <h3>2022.09</h3>
            <h3>정보처리기사(필기)</h3>
        </div>
        </>
        :
        <>
        <div class="textbox">
            <p className="openup" onClick={licenseclicked}>자격 사항 {" "}
            <FontAwesomeIcon icon={faCaretDown}/>
            </p>
        </div>
        </>

        }
    </article>
  );
};

export default Educate;
