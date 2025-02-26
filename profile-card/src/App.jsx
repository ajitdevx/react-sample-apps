import './index.css'
import { profiles } from "./data";
import PropTypes from 'prop-types';

PropTypes.UserCard = {
    profiles: PropTypes.object({
        id: PropTypes.number,
        name: PropTypes.string,
        city: PropTypes.string,
        job: PropTypes.string,
        img: PropTypes.string,
        skills: PropTypes.array,
        status: PropTypes.string
    })
}

function User() {
    return (
        <>
            {profiles?.map(profile => (
                <UserCard key={profile.id} profile={profile} />
            ))}
        </>
    )
}

function UserCard(props) {
    const { id, name, city, job, img, skills, status } = props.profile;
    return (
        <div className="card-container">
            <span className={status == "online" ? "status online" : "status offline"}>{status}</span>
            <img className='img' src={img} alt="Profile Image" />
            <h5>{name}</h5>
            <h5>{city}</h5>
            <p>{job}</p>
            <div className="buttons">
                <button className="btn btn-primary">Message</button>
                <button className="btn btn-primary btn-primary-outline">Follow</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul className="list-skills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
            <User />
        </>
    )
}

export default App;