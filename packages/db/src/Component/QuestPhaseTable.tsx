import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Quest, Region } from "@atlasacademy/api-connector";

import { QuestTypeDescription } from "../Page/QuestPage";
import { lang } from "../Setting/Manager";

const QuestPhaseTable = ({ region, quests }: { region: Region; quests: Quest.QuestPhaseBasic[] }) => {
    const { t } = useTranslation();
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>{t("Quest")} ID</th>
                    <th className="col-center">{t("Phase")}</th>
                    <th>{t("Quest")} {t("Name")}</th>
                    <th className="col-center">{t("Quest")} {t("Type")}</th>
                    <th className="col-center">{t("War")} ID</th>
                    <th>{t("War")} {t("Long Name")}</th>
                </tr>
            </thead>
            <tbody>
                {quests.map((quest) => {
                    const questLink = `/${region}/quest/${quest.id}/${quest.phase}`,
                        warLink = `/${region}/war/${quest.warId}`;
                    return (
                        <tr key={`${quest.id}-${quest.phase}`}>
                            <td>
                                <Link to={questLink}>{quest.id}</Link>
                            </td>
                            <td className="col-center">
                                <Link to={questLink}>{quest.phase}</Link>
                            </td>
                            <td lang={lang(region)}>
                                <Link to={questLink}>{quest.name}</Link>
                            </td>
                            <td className="col-center">{QuestTypeDescription.get(quest.type)}</td>
                            <td className="col-center">
                                <Link to={warLink}>{quest.warId}</Link>
                            </td>
                            <td lang={lang(region)}>
                                <Link to={warLink}>{quest.warLongName}</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default QuestPhaseTable;
