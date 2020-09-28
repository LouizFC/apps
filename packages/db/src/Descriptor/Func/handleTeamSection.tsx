import {DataVal, Func, Region} from "@atlasacademy/api-connector";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (region: Region, sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.team,
        parts = section.parts;

    if (func.funcTargetTeam === Func.FuncTargetTeam.PLAYER)
        parts.push('[Player]');
    else if (func.funcTargetTeam === Func.FuncTargetTeam.ENEMY)
        parts.push('[Enemy]');
    else
        section.showing = false;
}
