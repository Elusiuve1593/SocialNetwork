import React, {memo} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsFormType = {
    handleSubmit: any;
    onSubmit: () => void
    addPosts: () => void
    newText: (text: string) => void
    newMessages: string;
}

// @ts-ignore
export const MyPostsForm: React.FC<InjectedFormProps<any>> = memo((props: MyPostsFormType) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newPostText" component="textarea"></Field>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }
)

export const MyPostsReduxForm = reduxForm<any>(
    {
        form: "form"
    }
)(MyPostsForm)