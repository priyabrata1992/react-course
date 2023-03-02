import { ReactNode, Component } from "react";
import Customer from "../model/Customer";

type Props = {
    customer: Customer,
    onDeletePressed: (id:number) => void
}

export default class CustomerRow extends Component<Props, {}> {

    render(): ReactNode {
        let { id, firstName, lastName } = this.props.customer;
        return (
            <div>
                { firstName } &nbsp; { lastName } &nbsp;
                <button type="button" onClick={() => {this.onClick(id)}}>Delete</button>
            </div>
        )
    }

    onClick = (id:number):void => {
        this.props.onDeletePressed(id)
    }
}