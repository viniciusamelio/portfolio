import React from 'react'

export default function Button(props) {
    return (
        <button className={"is-clickable is-size-5 has-text-weight-semibold " + props.className} onClick={props.onClick}  style={{border:'none',color: props.textColor ?? 'white', borderRadius: '6px', padding: '10px 30px', backgroundColor: props.color ?? '#E10C7D', boxShadow: '0px 0px 8px #E10C7D'}}>
            {props.text}
        </button>
    )
}
