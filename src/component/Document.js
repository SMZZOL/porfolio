import React, { useEffect,useState  } from "react";
import Educate from "./Educate"
import Aboutme from "./Aboutme";
import Projects from "./Projects";

const Document = () => {
  const [aboutmeClicked, setAboutmeClicked] = useState(true);
  const [projectClicked, setProjectClicked] = useState(false);
  const [educationClicked, setEducationClicked] = useState(false)
  let content;
  content = aboutmeClicked
              ?<Aboutme/>
                :projectClicked
                ?<Projects/>
                  :<Educate/>
  const about = ()=>{
    setAboutmeClicked(true);
    setProjectClicked(false);
    setEducationClicked(false);
  }
  const project = ()=>{
    setAboutmeClicked(false);
    setProjectClicked(true);
    setEducationClicked(false);
  }
  const educate = ()=>{
    setAboutmeClicked(false);
    setProjectClicked(false);
    setEducationClicked(true);
  }
  return (
    <div className="App">
      <header>
        <div>
          <div className="info_text">Semin-Portfolio</div>
        </div>
        <div className="buttonDiv">
          <button className={`${aboutmeClicked?"clicked":""}`} onClick={about}>About Me</button>
          <button className={`${projectClicked?"clicked":""}`} onClick={project}>Project</button>
          <button className={`${educationClicked?"clicked":""}`} onClick={educate}>Educate</button>
        </div>
      </header>
      {content}
    </div>
  );
};

export default Document;
