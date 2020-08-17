import {Buff, DataVal, Func, Region} from "@atlasacademy/api-connector";
import React from "react";
import {asPercent, mergeElements, Renderable} from "../Helper/OutputHelper";
import BuffValueDescription from "./BuffValueDescription";

interface IProps {
    region: Region;
    func: Func.Func;
    staticDataVal: DataVal.DataVal;
    dataVal: DataVal.DataVal;
    hideRate?: boolean;
}

class FuncValueDescriptor extends React.Component<IProps> {
    render() {
        const region = this.props.region,
            func = this.props.func,
            dataVal = this.props.dataVal,
            parts: Renderable[] = [];

        if (func.funcType === Func.FuncType.ABSORB_NPTURN) {
            switch (this.props.staticDataVal.DependFuncId) {
                case 469:
                    const npAbsorbParts = [];
                    if (dataVal.DependFuncVals?.Value) {
                        npAbsorbParts.push(`${asPercent(dataVal.DependFuncVals.Value, 2)}`);
                    }

                    if (typeof dataVal.DependFuncVals?.Value2 === "number") {
                        npAbsorbParts.push(`${dataVal.DependFuncVals.Value2 / 100} Charge`);
                    }

                    if (npAbsorbParts.length) {
                        parts.push(<React.Fragment>
                            ({mergeElements(npAbsorbParts, ' => ')})
                        </React.Fragment>);
                    }
                    break;
                case 5061:
                    if (dataVal.DependFuncVals?.Value)
                        parts.push(dataVal.DependFuncVals.Value.toString());
                    break;
            }
        }

        if (func.funcType === Func.FuncType.GAIN_HP_FROM_TARGETS) {
            switch (this.props.staticDataVal.DependFuncId) {
                case 711:
                    if (dataVal.DependFuncVals?.Value)
                        parts.push(dataVal.DependFuncVals?.Value.toString());
                    break;
            }
        }

        if (func.funcType === Func.FuncType.GAIN_NP_FROM_TARGETS) {
            switch (this.props.staticDataVal.DependFuncId) {
                case 474:
                    const npAbsorbParts = [];
                    if (dataVal.DependFuncVals?.Value) {
                        npAbsorbParts.push(`${dataVal.DependFuncVals.Value} Charge`);
                    }

                    if (dataVal.DependFuncVals?.Value2) {
                        npAbsorbParts.push(`${asPercent(dataVal.DependFuncVals.Value2, 2)}`);
                    }

                    if (npAbsorbParts.length) {
                        parts.push(<React.Fragment>
                            ({mergeElements(npAbsorbParts, ' => ')})
                        </React.Fragment>);
                    }
                    break;
                case 3962:
                    if (dataVal.DependFuncVals?.Value)
                        parts.push(asPercent(dataVal.DependFuncVals?.Value, 2));
                    break;
            }
        }

        if (
            (func.funcType === Func.FuncType.ADD_STATE || func.funcType === Func.FuncType.ADD_STATE_SHORT)
            && func.buffs[0]
            && (
                this.props.dataVal.Value
                || (func.buffs[0].type === Buff.BuffType.COMMANDATTACK_FUNCTION && this.props.staticDataVal.Value)
                || (func.buffs[0].type === Buff.BuffType.DAMAGE_FUNCTION && this.props.staticDataVal.Value2)
                || (func.buffs[0].type === Buff.BuffType.DEAD_FUNCTION && this.props.staticDataVal.Value2)
                || (func.buffs[0].type === Buff.BuffType.DELAY_FUNCTION && this.props.staticDataVal.Value2)
                || (func.buffs[0].type === Buff.BuffType.NPATTACK_PREV_BUFF && this.props.staticDataVal.SkillID)
                || (func.buffs[0].type === Buff.BuffType.SELFTURNEND_FUNCTION && this.props.staticDataVal.Value2)
            )
        ) {
            return <BuffValueDescription region={region} buff={func.buffs[0]} dataVal={dataVal}/>;
        }

        if (!this.props.hideRate && dataVal.Rate !== undefined) {
            parts.push(asPercent(dataVal.Rate, 1));
        }

        if (dataVal.Value !== undefined) {
            switch (func.funcType) {
                case Func.FuncType.DAMAGE_NP:
                case Func.FuncType.DAMAGE_NP_HPRATIO_LOW:
                case Func.FuncType.DAMAGE_NP_INDIVIDUAL:
                case Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM:
                case Func.FuncType.DAMAGE_NP_PIERCE:
                case Func.FuncType.DAMAGE_NP_RARE:
                case Func.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX:
                case Func.FuncType.GAIN_HP_PER:
                case Func.FuncType.QP_DROP_UP:
                    parts.push(asPercent(dataVal.Value, 1));
                    break;
                case Func.FuncType.GAIN_NP:
                case Func.FuncType.GAIN_NP_BUFF_INDIVIDUAL_SUM:
                case Func.FuncType.LOSS_NP:
                    parts.push(asPercent(dataVal.Value, 2));
                    break;
                default:
                    parts.push(dataVal.Value.toString());
            }
        }

        if (dataVal.Value2 !== undefined) {
            switch (func.funcType) {
                case Func.FuncType.GAIN_NP_FROM_TARGETS:
                    parts.push(asPercent(dataVal.Value2, 2));
                    break;
                case Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM:
                    parts.push("additional " + asPercent(dataVal.Value2, 1));
            }
        }

        if (dataVal.Correction) {
            switch (func.funcType) {
                case Func.FuncType.DAMAGE_NP_INDIVIDUAL:
                case Func.FuncType.DAMAGE_NP_RARE:
                case Func.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX:
                    parts.push(asPercent(dataVal.Correction, 1));
                    break;
                case Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM:
                    parts.push("(" + asPercent(dataVal.Correction, 1) + " x count)");
                    break;
                default:
                    parts.push(dataVal.Correction.toString());
            }
        }

        if (dataVal.Target !== undefined) {
            switch (func.funcType) {
                case Func.FuncType.DAMAGE_NP_HPRATIO_LOW:
                    parts.push(asPercent(dataVal.Target, 1));
                    break;
                // default:
                //     parts.push(dataVal.Target.toString());
            }
        }

        if (dataVal.AddCount !== undefined) {
            switch (func.funcType) {
                default:
                    parts.push(dataVal.AddCount);
            }
        }

        if (dataVal.RateCount) {
            switch (func.funcType) {
                case Func.FuncType.QP_DROP_UP:
                case Func.FuncType.SERVANT_FRIENDSHIP_UP:
                case Func.FuncType.USER_EQUIP_EXP_UP:
                    parts.push(asPercent(dataVal.RateCount, 1));
                    break;
                default:
                    parts.push(dataVal.RateCount);
            }
        }

        if (dataVal.Count) {
            parts.push(`${dataVal.Count} Time${dataVal.Count > 1 ? 's' : ''}`)
        }

        if (!parts.length)
            return <span>-</span>;

        return <span>{mergeElements(parts, ' + ')}</span>;
    }
}

export default FuncValueDescriptor;