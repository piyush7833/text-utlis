import React from 'react'

export default function Alerts(props) {
    const capitalize=(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        props.alert &&<>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/*props.alert && is used so that if it is null or false then rest of js will not be evaluated*/}
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </>
    )
}
