import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    aboutMe: string
}

export function ProfileStatus(props: ProfileStatusType) {
    const [state, setState] = useState<boolean | string>(false)
    const [status, setStatus] = useState(props.aboutMe)

    const onDoubleClickHandler = () => {
        setStatus("")
        setState(true)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
    const onBlurHandler = () => {
        setState(status)
    }
    return (
        <div>
            {state ?
                <input value={status} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus/>
                : <span onDoubleClick={onDoubleClickHandler}>{props.aboutMe}</span>}
        </div>
    )
}
