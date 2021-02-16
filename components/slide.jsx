
import React from 'react'
import {AiOutlineLink,AiOutlineGithub} from 'react-icons/ai';

function Slide(props) {
    return (
        <div className="column has-text-centered m-1" style={{ borderRadius: '8px', backgroundColor: '#11082E' }}>
            {props.image}
            <p className="my-1 is-size-5 has-text-grey has-text-weight-medium">
                {props.name}
            </p>
            <p className="my-1 has-text-grey has-text-weight-medium">
                <a target="_blank" className="is-flex is-align-items-center is-justify-content-center" href={props.project}><AiOutlineLink /> Ver projeto</a>
                <a target="_____________blank" className="is-flex is-align-items-center is-justify-content-center" href={props.github}><AiOutlineGithub /> Ver Repositório</a>
            </p>
        </div>
    )
}

export default Slide
