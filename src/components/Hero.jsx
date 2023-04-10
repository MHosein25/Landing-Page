import img1 from '../images/violinist.jpg'
import Buttons from './Buttons'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="get-started">
                <h3><span>Harmonize</span> Your World</h3>
                <p>Discover your joy of music with <span>personalized lessons</span> from top instructors</p>
                <Buttons text='Join Octavio' />
            </div>
            {/* <img src={img1} alt="girl playing violin" /> */}
        </div>
    )
}

export default Hero