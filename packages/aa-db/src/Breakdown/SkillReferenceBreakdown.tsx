import {Region, Skill} from "@atlasacademy/api-connector";
import React from "react";
import Api from "../Api";
import SkillBreakdown from "./SkillBreakdown";

interface IProps {
    region: Region;
    id: number;
    cooldowns: boolean;
    levels?: number;
    rankUp?: number;
}

interface IState {
    skill?: Skill.Skill;
}

class SkillReferenceBreakdown extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {
        try {
            this.setState({
                skill: await Api.skill(this.props.id)
            });
        } catch (e) {
            // do nothing
        }
    }

    render() {
        if (this.state.skill === undefined) {
            return null;
        }

        return (
            <SkillBreakdown region={this.props.region}
                            skill={this.state.skill}
                            cooldowns={this.props.cooldowns}
                            levels={this.props.levels}
                            rankUp={this.props.rankUp}/>
        );
    }
}

export default SkillReferenceBreakdown;
