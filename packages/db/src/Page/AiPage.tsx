import { Ai, Region } from "@atlasacademy/api-connector";
import { AxiosError } from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import Api, { Host } from "../Api";
import DataTable from "../Component/DataTable";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import RawDataViewer from "../Component/RawDataViewer";
import AiDescriptor from "../Descriptor/AiDescriptor";
import QuestDescriptor from "../Descriptor/QuestDescriptor";
import { mergeElements } from "../Helper/OutputHelper";
import Manager from "../Setting/Manager";
import AiGraph from "./Ai/AiGraph";
import AiTable from "./Ai/AiTable";

interface IProps extends RouteComponentProps {
    region: Region;
    aiType: Ai.AiType;
    id: number;
}

interface IState {
    error?: AxiosError;
    loading: boolean;
    aiCollection?: Ai.AiCollection;
    skillId1?: number;
    skillId2?: number;
    skillId3?: number;
    refs: Map<number, React.Ref<any>>;
}

class AiPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const searchParams = new URLSearchParams(props.location.search);
        const getQueryNum = (param: string) => {
            const value = searchParams.get(param);
            return value !== null ? parseInt(value) : undefined;
        };

        this.state = {
            loading: true,
            refs: new Map(),
            skillId1: getQueryNum("skillId1"),
            skillId2: getQueryNum("skillId2"),
            skillId3: getQueryNum("skillId3"),
        };
    }

    componentDidMount() {
        Manager.setRegion(this.props.region);
        this.loadAi();
    }

    async loadAi() {
        try {
            const ai = await Api.ai(this.props.aiType, this.props.id);
            this.setState({
                loading: false,
                aiCollection: ai,
                refs: new Map(
                    [...ai.mainAis, ...ai.relatedAis].map((ai) => [
                        ai.id,
                        React.createRef(),
                    ])
                ),
            });
            document.title = `[${this.props.region}] AI - ${this.props.id} - Atlas Academy DB`;
        } catch (e) {
            this.setState({
                error: e,
            });
        }
    }

    render() {
        if (this.state.error) return <ErrorStatus error={this.state.error} />;

        if (this.state.loading || !this.state.aiCollection) return <Loading />;

        const aiCollection = this.state.aiCollection;
        const mainAi = aiCollection.mainAis[0];

        const rawUrl = `${Host}/raw/${this.props.region}/ai/${this.props.aiType}/${this.props.id}`;

        const scrollToAiId = (id: number) => {
            let elementRef = this.state.refs.get(id);
            (elementRef as React.RefObject<HTMLDivElement>)?.current?.scrollIntoView(
                { behavior: "smooth" }
            );
        };

        const relatedQuests = mergeElements(
            this.state.aiCollection.relatedQuests.map((quest) => (
                <QuestDescriptor
                    text=""
                    region={this.props.region}
                    questId={quest.questId}
                    questPhase={quest.phase}
                    questStage={quest.stage}
                />
            )),
            <br />
        );

        return (
            <div>
                <h1>AI {this.props.id}</h1>

                <br />

                <DataTable
                    data={{
                        "Parent AIs": AiDescriptor.renderParentAiLinks(
                            this.props.region,
                            mainAi.parentAis
                        ),
                        "Related Quests": relatedQuests,
                        Raw: (
                            <Row>
                                <Col>
                                    <RawDataViewer
                                        text="Nice"
                                        data={this.state.aiCollection}
                                    />
                                </Col>
                                <Col>
                                    <RawDataViewer text="Raw" data={rawUrl} />
                                </Col>
                            </Row>
                        ),
                    }}
                />

                <AiGraph
                    aiCol={this.state.aiCollection}
                    handleNavigateAiId={scrollToAiId}
                />
                <div ref={this.state.refs.get(aiCollection.mainAis[0].id)}>
                    <AiTable
                        region={this.props.region}
                        aiType={this.props.aiType}
                        ais={aiCollection.mainAis}
                        handleNavigateAiId={scrollToAiId}
                        skillId1={this.state.skillId1}
                        skillId2={this.state.skillId2}
                        skillId3={this.state.skillId3}
                    />
                </div>
                {Array.from(
                    new Set(aiCollection.relatedAis.map((ai) => ai.id))
                ).map((aiId) => (
                    <div ref={this.state.refs.get(aiId)}>
                        <AiTable
                            region={this.props.region}
                            aiType={this.props.aiType}
                            ais={aiCollection.relatedAis.filter(
                                (ai) => ai.id === aiId
                            )}
                            handleNavigateAiId={scrollToAiId}
                            skillId1={this.state.skillId1}
                            skillId2={this.state.skillId2}
                            skillId3={this.state.skillId3}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default withRouter(AiPage);
