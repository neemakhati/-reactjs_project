import Main from "../components/Main";
import Katie from "../images/katie-zaferes.png"
import Wedding from "../images/wedding-photography.png"
import Boy from "../images/boy.png"
import Man from "../images/man.png"
const About = ()=>{
    return (
      <div>
        <h1 className="about_top">MEET OUR TEAM</h1>
        <div>
            <Main name="James Bernal" job="Doctor | Influencer" imagePath={Wedding}/>
            <Main name="Jordan Bernal" job="Devoloper | Youtuber" imagePath={Katie}/>
            <Main name="Jack Brown" job="Engineer | Programmer" imagePath={Boy}/>
            <Main name="David Bob" job="Professor | Youtuber" imagePath={Man}/>
        </div>
      </div>
    )
}
export default About;