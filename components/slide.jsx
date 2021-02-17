
import React from 'react'
import {AiOutlineLink,AiOutlineGithub} from 'react-icons/ai';
import { motion } from "framer-motion";

function Slide(props) {

    const tags = props.tags;

    const [scale, setScale] = React.useState(1);
    const reference = React.useRef();

    React.useEffect(()=>{
        if(reference.current){
            reference.current?.addEventListener('mouseenter',()=>{
                setScale(0.9);
            });
        
            reference.current?.addEventListener('mouseout',()=>{
                setScale(1);
            });
        
            reference.current?.addEventListener('mouseleave',()=>{
                setScale(1);
            });
        
            reference.current?.addEventListener('mouseover',()=>{
                setScale(0.9);
            });
        }
        
    })


    const renderTags=()=>{
        const list = [];
        for (const position in tags) {
            list.push(
                <div key={tags[position]} className="has-text-centered has-text-grey px-3 py-2 mx-1 is-size-7 has-text-white-bold" style={{opacity: 0.85,borderRadius:'50px', backgroundColor: '#E10C7D', minWidth: '30%'}}>
                    {tags[position]}
                </div>
            );
        }
        return list;
    }

    return (
        <motion.div animate={{scale:scale}} transition={{duration: 0.5 }} ref={reference} className="column has-text-centered m-1 is-flex is-align-items-center is-justify-content-space-between is-flex-direction-column" style={{ borderRadius: '8px', backgroundColor: '#11082E' }}>
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
        </motion.div>
    )
}

export default Slide
