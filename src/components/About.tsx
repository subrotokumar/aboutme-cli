import { about } from '../helper'
function About() {
  return (
    <div className="about-box">{
        about.map((e,i)=>
        <div key={"aboutme"+i}>
          {i==0 && <h2>About Me</h2>}
          {e}
          {i!=about.length-1&&<br/>}
          {i!=about.length-1&&<br/>}
        </div>)
      }
      <br />
    </div>
  )
}

export default About