
import React from 'react'
import {AiOutlineLink,AiOutlineGithub} from 'react-icons/ai';

function Slide(props) {

    const tags = props.tags;

    const renderTags=()=>{
        const list = [];
        for (const position in tags) {
            list.push(
                <div className="has-text-centered has-text-grey px-3 py-2 mx-1 is-size-7 has-text-white-bold" style={{opacity: 0.85,borderRadius:'50px', backgroundColor: '#E10C7D', minWidth: '30%'}}>
                    {tags[position]}
                </div>
            );
        }
        return list;
    }

    return (
        <div className="column has-text-centered m-1 is-flex is-align-items-center is-justify-content-space-between is-flex-direction-column" style={{ borderRadius: '8px', backgroundColor: '#11082E' }}>
            <div>
                {props.image}
            </div>
            <div className="column">
                <p className="my-1 is-size-5 has-text-grey has-text-weight-medium">
                    {props.name}
                </p>
                <p className="my-1 has-text-grey has-text-weight-medium">
                    <a target="_blank" className="is-flex is-align-items-center is-justify-content-center" href={props.project}><AiOutlineLink /> Ver projeto</a>
                    <a target="_____________blank" className="is-flex is-align-items-center is-justify-content-center" href={props.github}><AiOutlineGithub /> Ver Repositório</a>
                </p>
            </div>
            <div className="column is-12 is-flex is-align-items-center is-justify-content-center">
                {renderTags()}
            </div>
        </div>
    )
}

export default Slide
