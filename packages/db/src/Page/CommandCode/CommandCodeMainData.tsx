import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";

import { CommandCode, Region } from "@atlasacademy/api-connector";

import { Host } from "../../Api";
import DataTable from "../../Component/DataTable";
import RawDataViewer from "../../Component/RawDataViewer";
import IllustratorDescriptor from "../../Descriptor/IllustratorDescriptor";
import RarityDescriptor from "../../Descriptor/RarityDescriptor";
import getRubyText from "../../Helper/StringHelper";
import { lang } from "../../Setting/Manager";

import "../../Helper/StringHelper.css";

interface IProps extends WithTranslation {
    region: Region;
    commandCode: CommandCode.CommandCode;
}

class CommandCodeMainData extends React.Component<IProps> {
    render() {
        const commandCode = this.props.commandCode,
            t = this.props.t;

        return (
            <div>
                <h1 lang={lang(this.props.region)}>{commandCode.name}</h1>

                <DataTable
                    data={[
                        { label: "ID", value: commandCode.id },
                        { label: t("Collection"), value: commandCode.collectionNo },
                        { label: t("Name"), value: <span lang={lang(this.props.region)}>{commandCode.name}</span> },
                        {
                            label: t("Original Name"),
                            value: (
                                <span lang={lang(this.props.region)}>
                                    {getRubyText(this.props.region, commandCode.originalName, commandCode.ruby)}
                                </span>
                            ),
                            hidden: commandCode.name === commandCode.originalName,
                        },
                        {
                            label: t("Ruby"),
                            value: <span lang={lang(this.props.region)}>{commandCode.ruby}</span>,
                            hidden:
                                commandCode.name !== commandCode.originalName ||
                                commandCode.name === commandCode.ruby ||
                                commandCode.ruby === "-",
                        },
                        { label: t("Rarity"), value: <RarityDescriptor rarity={commandCode.rarity} /> },
                        {
                            label: t("Illustrator"),
                            value: (
                                <IllustratorDescriptor
                                    region={this.props.region}
                                    illustrator={commandCode.illustrator}
                                    hideTypeText={true}
                                />
                            ),
                        },
                        {
                            label: t("Comment"),
                            value: (
                                <span className="newline" lang={lang(this.props.region)}>
                                    {commandCode.comment}
                                </span>
                            ),
                        },
                    ]}
                />
                <span>
                    <RawDataViewer text="Nice" data={commandCode} />
                    <RawDataViewer
                        text="Raw"
                        data={`${Host}/raw/${this.props.region}/CC/${commandCode.id}?expand=true`}
                    />
                </span>
            </div>
        );
    }
}

export default withTranslation()(CommandCodeMainData);
