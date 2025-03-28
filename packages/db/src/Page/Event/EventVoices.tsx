import React from "react";
import { useTranslation } from "react-i18next";

import { Region, Profile, Servant, Event } from "@atlasacademy/api-connector";
import { toTitleCase } from "@atlasacademy/api-descriptor";

import renderCollapsibleContent from "../../Component/CollapsibleContent";
import { lang } from "../../Setting/Manager";
import { VoiceLinesTable } from "../Servant/ServantVoiceLines";

const EventVoices = ({
    region,
    voiceGroups,
    servants,
    eventRewardScenes,
}: {
    region: Region;
    voiceGroups: Profile.VoiceGroup[];
    servants: Map<number, Servant.ServantBasic>;
    eventRewardScenes: Event.EventRewardScene[];
}) => {
    const { t } = useTranslation();
    return (
        <>
            {voiceGroups.map((voiceGroup, i) => {
                let guideName = `${t("EventVoiceGuide")} ${voiceGroup.svtId}`;

                for (const rewardScene of eventRewardScenes) {
                    for (const guide of rewardScene.guides) {
                        if (guide.imageId === voiceGroup.svtId && guide.displayName) {
                            guideName = guide.displayName;
                        }
                    }
                }

                if (servants.has(voiceGroup.svtId)) {
                    guideName = servants.get(voiceGroup.svtId)!.name;
                }

                const title = guideName + " " + toTitleCase(voiceGroup.type);

                const voiceLineTable = (
                    <VoiceLinesTable
                        region={region}
                        voice={voiceGroup}
                        mergedDownloadNamePrefix={title}
                        servants={servants}
                        costumes={{}}
                    />
                );

                const voiceGroupKey = `${voiceGroup.svtId}-${voiceGroup.voicePrefix}-${voiceGroup.type}`;

                return (
                    <React.Fragment key={voiceGroupKey}>
                        {renderCollapsibleContent({
                            title: <span lang={lang(region)}>{title}</span>,
                            content: voiceLineTable,
                            subheader: false,
                            accordionKey: voiceGroupKey,
                            separator: i !== 0,
                        })}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default EventVoices;
