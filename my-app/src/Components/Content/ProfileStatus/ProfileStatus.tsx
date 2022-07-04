import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: (status: string) => void
    updateUserStatusThunk: (status: string) => void
}

export function ProfileStatus(props: ProfileStatusType ) {
    const [state, setState] = useState<boolean | string>(false)
    const [status, setStatus] = useState('s')

    const onDoubleClickHandler = () => {
        setStatus("")
        setState(true)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
    const onBlurHandler = () => {
        setState(false)
        props.updateUserStatusThunk(status)
    }
    return (
        <div>
            {state ? <input value={status} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus/> :
                <span onDoubleClick={onDoubleClickHandler}> {status}</span>}
        </div>
    )
}
