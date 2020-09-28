import {CraftEssence, Region} from "@atlasacademy/api-connector";
import React from "react";
import {Link} from "react-router-dom";
import Api from "../Api";
import CraftEssenceDescriptor from "./CraftEssenceDescriptor";

interface IProps {
    region: Region;
    id: number;
}

interface IState {
    craftEssence?: CraftEssence.CraftEssence;
}

class CraftEssenceReferenceDescriptor extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {
        try {
            this.setState({
                craftEssence: await Api.craftEssence(this.props.id)
            });
        } catch (e) {
            // do nothing
        }
    }

    render() {
        const route = `/${this.props.region}/craft-essence/${this.props.id}`;

        if (this.state.craftEssence === undefined) {
            return <Link to={route}>[Craft Essence: {this.props.id}]</Link>;
        }

        return (
            <CraftEssenceDescriptor region={this.props.region} craftEssence={this.state.craftEssence}/>
        );
    }
}

export default CraftEssenceReferenceDescriptor;
