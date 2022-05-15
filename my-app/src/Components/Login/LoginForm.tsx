import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    onSubmit: () => void
    input: string
    password: string
    checkbox: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={"input"} name={"login"}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} component={"input"} name={"checkbox"}/> Remember me!
            </div>
            <div>
                <button>Press</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)
