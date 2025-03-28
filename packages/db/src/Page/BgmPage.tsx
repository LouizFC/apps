import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { Region } from "@atlasacademy/api-connector";
import { BgmEntity } from "@atlasacademy/api-connector/dist/Schema/Bgm";
import { toTitleCase } from "@atlasacademy/api-descriptor";

import Api, { Host } from "../Api";
import DataTable from "../Component/DataTable";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import RawDataViewer from "../Component/RawDataViewer";
import BgmDescriptor, { getBgmName } from "../Descriptor/BgmDescriptor";
import ItemDescriptor from "../Descriptor/ItemDescriptor";
import { QuestDescriptorId } from "../Descriptor/QuestDescriptor";
import QuestSearchDescriptor from "../Descriptor/QuestSearchDescriptor";
import { mergeElements } from "../Helper/OutputHelper";
import Manager, { lang } from "../Setting/Manager";

import "../Helper/StringHelper.css";

const BgmPage = (props: { region: Region; bgmId: number }) => {
    const { t } = useTranslation();
    const { region, bgmId } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | undefined>(undefined);
    const [bgm, setBgm] = useState<BgmEntity | undefined>(undefined);

    useEffect(() => {
        Manager.setRegion(region);
        Api.bgm(bgmId)
            .then((bgm) => {
                setBgm(bgm);
                setLoading(false);
            })
            .catch((e) => setError(e));
    }, [region, bgmId]);

    if (error !== undefined) return <ErrorStatus error={error} />;

    if (loading) return <Loading />;

    if (bgm === undefined) return null;

    const showName = getBgmName(bgm);

    document.title = `[${region}] BGM ${showName} - Atlas Academy DB`;

    const shopDetail = bgm.shop ? (
        <>
            <ItemDescriptor region={region} item={bgm.shop.cost.item} /> ×{bgm.shop.cost.amount}
        </>
    ) : (
        ""
    );
    const bgmRelease = (
        <>
            {mergeElements(
                bgm.releaseConditions.map((release) => (
                    <div key={release.id}>
                        {release.closedMessage !== "" ? (
                            <span lang={lang(region)}>{release.closedMessage} — </span>
                        ) : (
                            ""
                        )}
                        {t("Cleared")}{" "}
                        {mergeElements(
                            release.targetIds.map((questId) => (
                                <QuestDescriptorId
                                    key={questId}
                                    text=""
                                    region={region}
                                    questId={questId}
                                    questPhase={1}
                                />
                            )),
                            " or "
                        )}
                    </div>
                )),
                <br />
            )}
        </>
    );

    return (
        <>
            <h1>
                <img src={bgm.logo} style={{ height: "1.5em" }} alt="BGM Logo" />
                <span className="newline" lang={lang(region)}>
                    {showName}
                </span>
            </h1>
            <DataTable
                data={[
                    { label: "ID", value: bgm.id },
                    {
                        label: t("Name"),
                        value: (
                            <span className="newline" lang={lang(region)}>
                                {showName}
                            </span>
                        ),
                    },
                    {
                        label: t("Original Name"),
                        value: <span lang={lang(region)}>{bgm.originalName}</span>,
                        hidden: bgm.name === bgm.originalName,
                    },
                    { label: t("Available to Buy"), value: toTitleCase((!bgm.notReleased).toString()) },
                    { label: t("Player"), value: <BgmDescriptor region={region} bgm={bgm} showName="Download" /> },
                    { label: t("Unlock Condition"), value: bgmRelease },
                    { label: t("Unlock Cost"), value: shopDetail },
                    { label: t("Quests"), value: <QuestSearchDescriptor region={region} bgmId={bgm.id} /> },
                    {
                        label: "Raw",
                        value: (
                            <Row>
                                <Col>
                                    <RawDataViewer text="Nice" data={bgm} />
                                </Col>
                                <Col>
                                    <RawDataViewer text="Raw" data={`${Host}/raw/${props.region}/bgm/${bgm.id}`} />
                                </Col>
                            </Row>
                        ),
                    },
                ]}
            />
        </>
    );
};

export default BgmPage;
