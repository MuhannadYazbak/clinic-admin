import style from "./style.module.css";
import "./style.css";
import React from "react";
import options from "../../utils/allSurveys";
import { Card, Tabs, Descriptions, Divider, Collapse } from "antd";
import {
  CloseCircleTwoTone,
  CheckCircleTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

const { TabPane } = Tabs;

const Client = {
  id: 2,
  name: "Julio Elias",
  govId: "2323984983953",
  condition:
    "George djsaofsanm fnsafansd saofn saofnas[d sando[a snd[fasnw sdnaspif naspidn aspfna spodna sfonasp odnsapofn sapond aspofnaspo nfason p",
  phone: "0543198210",
  email: "some@random.email",
  gender: "Male",
  treatment: {
    status: "on-going",
    startDate: "02-01-2022",
  },
  protocol: {
    name: "PTSD protocol A",
  },
  surveyProgress: [
    {
      week: "1",
      isDone: true,
      isPartiallyDone: false,
      hasMissed: false,
      name: "Survey 1",
    },
    {
      week: "1",
      isDone: true,
      isPartiallyDone: false,
      hasMissed: false,
      name: "Survey 1",
    },
    {
      week: "1",
      isDone: true,
      isPartiallyDone: false,
      hasMissed: false,
      name: "Survey 1",
    },
    {
      week: "1",
      isDone: true,
      isPartiallyDone: false,
      hasMissed: false,
      name: "Survey 1",
    },
    {
      week: "1",
      isDone: true,
      isPartiallyDone: false,
      hasMissed: false,
      name: "Survey 1",
    },
    {
      week: "2",
      isDone: false,
      isPartiallyDone: false,
      hasMissed: true,
      name: "Survey 2",
    },
    {
      week: "3",
      isDone: false,
      isPartiallyDone: true,
      hasMissed: true,
      name: "Survey 3",
    },
    {
      week: "1",
      isDone: false,
      isPartiallyDone: true,
      hasMissed: true,
      name: "Survey 4",
    },
    {
      week: "2",
      isDone: false,
      isPartiallyDone: true,
      hasMissed: true,
      name: "Survey 5",
    },
    {
      week: "5",
      isDone: false,
      isPartiallyDone: true,
      hasMissed: true,
      name: "Survey 6",
    },
  ],
};

function ClientPage(props) {
  // const [client, setClient] = React.useState({}); //this is for when we do the fetch from backend
  // const [surveys, setSurveys] = React.useState([]);

  const tabsArray = new Array(8).fill(1);
  return (
    <div>
      <h1>ClientPage</h1>
      <div className={style.cardStyle}>
        <Card>
          <Descriptions title="Patient Info">
            <Descriptions.Item label="ID">{Client.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{Client.name}</Descriptions.Item>
            <Descriptions.Item label="Government ID">
              {Client.govId}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {Client.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">{Client.phone}</Descriptions.Item>
            <Descriptions.Item label="Email">{Client.email}</Descriptions.Item>
          </Descriptions>

          <Divider></Divider>

          <Descriptions title="Patient File">
            <Descriptions.Item label="Protocol" span="2">
              {Client.protocol.name}
            </Descriptions.Item>
            <Descriptions.Item>
              <Collapse
                style={{ position: "sticky", padding: "3px,16px" }}
                ghost
              >
                <Panel header="Treatment" className={style.test}>
                  <p>StartDate: {Client.treatment.startDate}</p>
                  <p>Status: {Client.treatment.status}</p>
                </Panel>
              </Collapse>
            </Descriptions.Item>
            <Descriptions.Item label="Condition" span="2">
              {Client.condition}
            </Descriptions.Item>
          </Descriptions>

          <Divider orientation="left">Survey</Divider>

          <Tabs defaultActiveKey="1">
            {tabsArray.map((Element, index) => {
              return (
                <TabPane tab={`Week ${index + 1}`} key={`${index + 1}`}>
                  <Descriptions>
                    {Client.surveyProgress
                      ? Client.surveyProgress
                          .map((element, idx) => {
                            if (element.week === `${index + 1}`) {
                              return (
                                <Descriptions.Item key={idx}>
                                  <Collapse
                                    accordion="true"
                                    style={{ padding: "3px,16px" }}
                                    ghost
                                  >
                                    <Panel header={element.name}>
                                      <p>
                                        Progress:
                                        {element.isDone ? (
                                          <CheckCircleTwoTone twoToneColor="#52c41a" />
                                        ) : element.isPartiallyDone ? (
                                          <LoadingOutlined />
                                        ) : (
                                          <CloseCircleTwoTone twoToneColor="#fc6161" />
                                        )}
                                      </p>
                                      <p>
                                        MissedDate:
                                        {element.hasMissed ? (
                                          <CheckCircleTwoTone twoToneColor="#52c41a" />
                                        ) : (
                                          <CloseCircleTwoTone twoToneColor="#fc6161" />
                                        )}
                                      </p>
                                    </Panel>
                                  </Collapse>
                                </Descriptions.Item>
                              );
                            } else {
                              return null;
                            }
                          })
                          .filter((x) => x)
                      : null}
                  </Descriptions>
                </TabPane>
              );
            })}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

export default ClientPage;
