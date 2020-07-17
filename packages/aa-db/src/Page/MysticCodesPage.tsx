import {AxiosError} from "axios";
import React from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Connection from "../Api/Connection";
import MysticCode from "../Api/Data/MysticCode";
import Region from "../Api/Data/Region";
import ErrorStatus from "../Component/ErrorStatus";
import FaceIcon from "../Component/FaceIcon";
import Loading from "../Component/Loading";

import "./MysticCodesPage.css";

interface IProps {
    region: Region;
}

interface IState {
    error?: AxiosError;
    loading: boolean;
    mysticCodes: MysticCode[];
}

class MysticCodesPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            mysticCodes: [],
        };
    }

    componentDidMount() {
        try {
            Connection.mysticCodeList(this.props.region).then(list => {
                this.setState({
                    loading: false,
                    mysticCodes: list
                });
            });
        } catch (e) {
            this.setState({
                error: e
            });
        }
    }

    render() {
        if (this.state.error)
            return <ErrorStatus error={this.state.error}/>;

        if (this.state.loading)
            return <Loading/>;

        return (
            <div id={'mystic-codes'}>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th style={{textAlign: "center", width: '1px'}}>#</th>
                        <th style={{textAlign: "center", width: '140px'}}>Thumbnail</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.mysticCodes.map((mysticCode, index) => {
                        const route = `/${this.props.region}/mystic-code/${mysticCode.id}`;

                        return (
                            <tr key={index}>
                                <td align={"center"}>
                                    <Link to={route}>
                                        {mysticCode.id}
                                    </Link>
                                </td>
                                <td align={"center"}>
                                    <Link to={route}>
                                        <FaceIcon location={mysticCode.extraAssets.item.male} height={50}/>
                                        <FaceIcon location={mysticCode.extraAssets.item.female} height={50}/>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={route}>
                                        {mysticCode.name}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MysticCodesPage;
