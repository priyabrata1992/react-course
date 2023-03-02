import { Component, ReactNode } from "react";
import Customer from "../model/Customer";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

type Props = {}
type AppState = {
    "customers": Customer[]
}
export class CustomerList extends Component<Props, AppState> {

    constructor(props:Props){
        super(props)
        this.state = {
            "customers": [
            {
                "id": 1,
                "firstName": "Rachel",
                "lastName": "Green "
            },
            {
                "id": 2,
                "firstName": "Chandler",
                "lastName": "Bing"
            },
            {
                "id": 3,
                "firstName": "Joey",
                "lastName": "Tribbiani"
            },
            {
                "id": 4,
                "firstName": "Monica",
                "lastName": "Geller"
            },
            {
                "id": 5,
                "firstName": "Ross",
                "lastName": "Geller"
            },
            {
                "id": 6,
                "firstName": "Phoebe",
                "lastName": "Buffay"
            }
            ]
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    // deleteCustomer = (customerId: number) => {
    //     let customers = this.state.customers.filter(c => customerId !== c.id)
    //     this.setState({
    //         "customers" : customers
    //     });
    // }

    deleteCustomer(customerId: number) {
        let customers = this.state.customers.filter(c => customerId !== c.id)
        this.setState({
            "customers" : customers
        });
    }

    render(): ReactNode {
        return (
            <div>
                <Filter />
                {
                    this.state.customers.map(c => <CustomerRow customer = {c} onDeletePressed={this.deleteCustomer} key={c.id} /> )
                }
            </div>
        )
    }
}