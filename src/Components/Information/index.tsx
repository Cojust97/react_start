import React, { FunctionComponent } from "react";


interface IInformationProps {
    text: string,
    data: Date
}

const Information: FunctionComponent<IInformationProps> = (props: IInformationProps): JSX.Element => {
    const {text, data} = props
    return (
        <div>
            <div>
                {text}
            </div>
            <div>
                {data.getFullYear()}
            </div>
        </div>
    )
};
export default Information;