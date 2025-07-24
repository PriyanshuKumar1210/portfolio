import "./MyWork.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import work from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>


{/*---------- It contains the multiple project works which are completed by me --------- */}

{/* Add a map function to pass the projects data from assests folder */}

      <div className="mywork-container">
            {work.map((work,index)=>{
              return(
                <img key={index} src={work.w_img} alt=""/>
              )
            })}
      </div>


      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>

{/*------- Ends the section which shows the projects works --------*/}
    </div>
  )
}

export default MyWork
