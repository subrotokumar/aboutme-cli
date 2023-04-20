import { education } from '../helper'

function Eduaction() {
  return (
    <div className='education'>
        {
            education.map(
                (e,i)=> {
                    return <>
                        <p className='education-title onhover-white'><strong>{e.name} | {e.location}</strong></p>
                        <p className='education-title'>{e.degree}</p>
                            <p className='info'>├── {e.duration}</p>
                            <p className='info'>└── Grade: {e.grade}</p>
                        {i!=education.length-1 &&<br />}
                    </>
                }
            )
        }
    </div>
  )
}

export default Eduaction