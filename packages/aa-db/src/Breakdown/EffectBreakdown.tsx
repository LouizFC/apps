import {Func, NoblePhantasm, Region, Skill} from "@atlasacademy/api-connector";
import React from "react";
import {Table} from "react-bootstrap";

import "./EffectBreakdown.css";
import EffectBreakdownLines from "./EffectBreakdownLines";

interface IProps {
    region: Region;
    cooldowns?: number[];
    funcs: Func.Func[];
    gain?: NoblePhantasm.NoblePhantasmGain;
    levels?: number;
    scripts?: Skill.SkillScript;
}

class EffectBreakdown extends React.Component<IProps> {
    render() {
        return (
            <Table responsive className={'effect-breakdown'}>
                <thead>
                <tr>
                    <th>Effect</th>
                    {this.props.levels ? Array.from(Array(this.props.levels).keys()).map(level => {
                        return <td key={level}>{level + 1}</td>;
                    }) : null}
                </tr>
                </thead>
                <tbody>
                <EffectBreakdownLines region={this.props.region}
                                      cooldowns={this.props.cooldowns}
                                      funcs={this.props.funcs}
                                      gain={this.props.gain}
                                      levels={this.props.levels}
                                      scripts={this.props.scripts}/>
                </tbody>
            </Table>
        );
    }
}

export default EffectBreakdown;
