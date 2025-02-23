
import certificate from '../../assets/certification.js'
import './Certification.css'

const Certification = () => {
  return (
    <div className='certificate-container'>

         <div className="certificate-title">
                <h1>Certification</h1> 
        </div>
      
      <div className="certificates">
            {certificate.map((work,index)=>{
              return(
                <img key={index} src={work.w_img} alt=""/>
              )
            })}
      </div>

    </div>
  )
}

export default Certification
