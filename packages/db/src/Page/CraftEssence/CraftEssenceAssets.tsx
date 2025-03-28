import React from "react";
import { Alert } from "react-bootstrap";
import { withTranslation, WithTranslation } from "react-i18next";

import { CraftEssence, Entity, Region } from "@atlasacademy/api-connector";

import IllustratorDescriptor from "../../Descriptor/IllustratorDescriptor";
import { mergeElements } from "../../Helper/OutputHelper";

interface IProps extends WithTranslation {
    region: Region;
    craftEssence: CraftEssence.CraftEssence;
}

class CraftEssenceAssets extends React.Component<IProps> {
    private flattenAssets(assetMap: Entity.EntityAssetMap | undefined): string[] {
        if (!assetMap) return [];

        const assets = [];

        if (assetMap.equip) assets.push(...Object.values(assetMap.equip));

        return assets;
    }

    private displayAssets(assetMap: Entity.EntityAssetMap | undefined) {
        const assets = this.flattenAssets(assetMap);

        return mergeElements(
            assets.map((asset) => (
                <a href={asset} target={"_blank"} rel={"noopener noreferrer"}>
                    <img alt={""} src={asset} style={{ maxWidth: "100%" }} />
                </a>
            )),
            ""
        );
    }

    render() {
        const t = this.props.t;
        return (
            <div>
                <Alert variant="success">
                    <IllustratorDescriptor
                        region={this.props.region}
                        illustrator={this.props.craftEssence.profile?.illustrator}
                    />
                </Alert>
                <h3>{t("Portraits")}</h3>
                <div>{this.displayAssets(this.props.craftEssence.extraAssets.charaGraph)}</div>

                <hr />

                <h3>{t("Formation")}</h3>
                <div>{this.displayAssets(this.props.craftEssence.extraAssets.equipFace)}</div>

                <hr />

                <h3>{t("Thumbnail")}</h3>
                <div>{this.displayAssets(this.props.craftEssence.extraAssets.faces)}</div>
            </div>
        );
    }
}

export default withTranslation()(CraftEssenceAssets);
