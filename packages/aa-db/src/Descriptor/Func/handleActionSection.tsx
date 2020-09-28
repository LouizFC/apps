import {Buff, DataVal, Func, Region} from "@atlasacademy/api-connector";
import React from "react";
import BuffDescriptor from "../BuffDescriptor";
import TraitDescription from "../TraitDescription";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export const funcDescriptions = new Map<Func.FuncType, string>([
    [Func.FuncType.ABSORB_NPTURN, 'Absorb Charge'],
    [Func.FuncType.ADD_STATE, 'Apply Buff'],
    [Func.FuncType.ADD_STATE_SHORT, 'Apply Buff'],
    [Func.FuncType.CARD_RESET, 'Shuffle Cards'],
    [Func.FuncType.DAMAGE_NP, 'Deal Damage'],
    [Func.FuncType.DAMAGE_NP_HPRATIO_LOW, 'Deal Damage with Bonus for Low Health'],
    [Func.FuncType.DAMAGE_NP_INDIVIDUAL, 'Deal Damage with Bonus to Trait'],
    [Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM, 'Deal Damage with Bonus per Trait'],
    [Func.FuncType.DAMAGE_NP_PIERCE, 'Deal Damage that pierces defense'],
    [Func.FuncType.DAMAGE_NP_RARE, 'Deal Damage with Bonus to Rarity'],
    [Func.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX, 'Deal Damage with Bonus to Trait'],
    [Func.FuncType.DELAY_NPTURN, 'Drain Charge'],
    [Func.FuncType.EVENT_DROP_UP, 'Increase Drop Amount'],
    [Func.FuncType.ENEMY_ENCOUNT_COPY_RATE_UP, 'Create Clone of Enemy'],
    [Func.FuncType.ENEMY_ENCOUNT_RATE_UP, 'Improve Appearance Rate of Enemy'],
    [Func.FuncType.EXP_UP, 'Increase Master Exp'],
    [Func.FuncType.EXTEND_SKILL, 'Increase Cooldowns'],
    [Func.FuncType.FIX_COMMANDCARD, 'Lock Command Cards'],
    [Func.FuncType.FORCE_INSTANT_DEATH, 'Force Instant Death'],
    [Func.FuncType.GAIN_HP, 'Restore HP'],
    [Func.FuncType.GAIN_HP_FROM_TARGETS, 'Absorb HP'],
    [Func.FuncType.GAIN_HP_PER, 'Restore HP to Percent'],
    [Func.FuncType.GAIN_NP, 'Charge NP'],
    [Func.FuncType.GAIN_NP_BUFF_INDIVIDUAL_SUM, 'Charge NP per Trait'],
    [Func.FuncType.GAIN_NP_FROM_TARGETS, 'Absorb NP'],
    [Func.FuncType.GAIN_STAR, 'Gain Critical Stars'],
    [Func.FuncType.HASTEN_NPTURN, 'Increase Charge'],
    [Func.FuncType.INSTANT_DEATH, 'Apply Death'],
    [Func.FuncType.LOSS_HP, 'Drain HP'],
    [Func.FuncType.LOSS_HP_SAFE, 'Drain HP without killing'],
    [Func.FuncType.LOSS_NP, 'Drain NP'],
    [Func.FuncType.LOSS_STAR, 'Remove Critical Stars'],
    [Func.FuncType.NONE, 'No Effect'],
    [Func.FuncType.QP_DROP_UP, 'Increase QP Reward'],
    [Func.FuncType.QP_UP, 'Increase QP Reward'],
    [Func.FuncType.REPLACE_MEMBER, 'Swap members'],
    [Func.FuncType.SERVANT_FRIENDSHIP_UP, 'Increase Bond Gain'],
    [Func.FuncType.SHORTEN_SKILL, 'Reduce Cooldowns'],
    [Func.FuncType.SUB_STATE, 'Remove Effects'],
    [Func.FuncType.USER_EQUIP_EXP_UP, 'Increase Mystic Code Exp'],
]);

function handleBuffActionSection(region: Region, sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.action,
        parts = section.parts;

    parts.push('Apply');
    func.buffs.forEach((buff, index) => {
        if (index > 0)
            parts.push('&');

        parts.push(<BuffDescriptor region={region} buff={buff}/>);
    });

    if (
        func.buffs[0]?.type === Buff.BuffType.FIELD_INDIVIDUALITY
        || func.buffs[0]?.type === Buff.BuffType.CHANGE_COMMAND_CARD_TYPE
    ) {
        sections.amount.preposition = 'to';
    }

    sections.target.preposition = 'on';
    if (
        func.buffs[0]?.type === Buff.BuffType.COMMANDATTACK_FUNCTION
        || func.buffs[0]?.type === Buff.BuffType.NPATTACK_PREV_BUFF
    ) {
        sections.target.preposition = 'for';
    }
}

function handleCleanseActionSection(region: Region, sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.action,
        parts = section.parts;

    parts.push(funcDescriptions.get(func.funcType) ?? func.funcType);

    if (func.traitVals?.length) {
        parts.push('with');

        func.traitVals.forEach((trait, index) => {
            if (index > 0)
                parts.push('or');

            parts.push(<TraitDescription region={region} trait={trait}/>);
        });
    }

    sections.target.preposition = 'on';
}

function handleChargeNpPerTraitActionSection(region: Region, sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.action,
        parts = section.parts;

    parts.push('Charge NP per');

    if (func.traitVals?.length) {
        func.traitVals.forEach((trait, index) => {
            if (index > 0)
                parts.push('&');

            parts.push(<TraitDescription region={region} trait={trait}/>);
        });
    }

    parts.push('traits');

    sections.amount.preposition = 'by';
    sections.target.preposition = 'for';
}

export default function (region: Region, sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.action,
        parts = section.parts;

    if (func.funcType === Func.FuncType.ADD_STATE || func.funcType === Func.FuncType.ADD_STATE_SHORT) {
        handleBuffActionSection(region, sections, func, dataVal);

        return;
    } else if (func.funcType === Func.FuncType.SUB_STATE) {
        handleCleanseActionSection(region, sections, func, dataVal);

        return;
    } else if (func.funcType === Func.FuncType.GAIN_NP_BUFF_INDIVIDUAL_SUM) {
        handleChargeNpPerTraitActionSection(region, sections, func, dataVal);

        return;
    } else if (
        func.funcType === Func.FuncType.DAMAGE_NP
        || func.funcType === Func.FuncType.DAMAGE_NP_HPRATIO_LOW
        || func.funcType === Func.FuncType.DAMAGE_NP_INDIVIDUAL
        || func.funcType === Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM
        || func.funcType === Func.FuncType.DAMAGE_NP_PIERCE
        || func.funcType === Func.FuncType.DAMAGE_NP_RARE
        || func.funcType === Func.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX
    ) {
        parts.push('Deal damage');
        sections.amount.preposition = 'of';

        return;
    }

    switch (func.funcType) {
        case Func.FuncType.ABSORB_NPTURN:
        case Func.FuncType.GAIN_HP_FROM_TARGETS:
        case Func.FuncType.GAIN_NP_FROM_TARGETS:
            sections.amount.preposition = 'of';
            sections.target.preposition = 'from';
            break;
        case Func.FuncType.CARD_RESET:
        case Func.FuncType.GAIN_STAR:
        case Func.FuncType.LOSS_STAR:
        case Func.FuncType.NONE:
            sections.target.showing = false;
            break;
        case Func.FuncType.DELAY_NPTURN:
        case Func.FuncType.LOSS_HP:
        case Func.FuncType.LOSS_HP_SAFE:
        case Func.FuncType.LOSS_NP:
            sections.amount.preposition = 'by';
            sections.target.preposition = 'from';
            break;
        case Func.FuncType.ENEMY_ENCOUNT_COPY_RATE_UP:
        case Func.FuncType.ENEMY_ENCOUNT_RATE_UP:
        case Func.FuncType.FIX_COMMANDCARD:
            sections.amount.showing = false;
            sections.target.showing = false;
            break;
        case Func.FuncType.EVENT_DROP_UP:
        case Func.FuncType.EXP_UP:
        case Func.FuncType.QP_DROP_UP:
        case Func.FuncType.QP_UP:
        case Func.FuncType.SERVANT_FRIENDSHIP_UP:
        case Func.FuncType.USER_EQUIP_EXP_UP:
            sections.chance.showing = false;
            sections.amount.preposition = 'by';
            sections.target.showing = false;
            break;
        case Func.FuncType.EXTEND_SKILL:
        case Func.FuncType.GAIN_HP:
        case Func.FuncType.GAIN_NP:
        case Func.FuncType.HASTEN_NPTURN:
        case Func.FuncType.SHORTEN_SKILL:
            sections.amount.preposition = 'by';
            sections.target.preposition = 'for';
            break;
        case Func.FuncType.FORCE_INSTANT_DEATH:
        case Func.FuncType.INSTANT_DEATH:
            sections.amount.showing = false;
            sections.target.preposition = 'on';
            break;
        case Func.FuncType.GAIN_HP_PER:
            sections.amount.preposition = 'of';
            sections.target.preposition = 'for';
            break;
        case Func.FuncType.REPLACE_MEMBER:
            sections.amount.showing = false;
            sections.target.preposition = 'with';
            break;
    }

    parts.push(funcDescriptions.get(func.funcType) ?? func.funcType);
}
