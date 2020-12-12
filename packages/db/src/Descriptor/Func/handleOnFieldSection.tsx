import {DataVal, Func, Region} from "@atlasacademy/api-connector";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (region: Region, sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.onField,
        parts = section.parts;

    if (dataVal.OnField? dataVal.OnField > 0 : false) {
        parts.push('when on the field');
    } else {
        section.showing = false;
    }
}
