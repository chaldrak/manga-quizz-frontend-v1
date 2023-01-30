import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BaseTable from "../BaseTable";
import { useEffect, useState } from "react";
import { getScores } from "../../services/scoreServices";
import useAuth from "../../hooks/useAuth";

export default function DashTabs() {
  const data = [
    {
      label: "Naruto",
      value: "1",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Naruto Shippuden",
      value: "2",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Boruto: Naruto next generations",
      value: "3",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  const [scores, setScores] = useState([]);
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    listScores();
  }, []);

  const listScores = async () => {
    const response = await getScores(auth?.token);
    if (response?.error) {
      console.log(response?.error);
    }
    setScores(response?.scores);
  };

  return (
    <Tabs id="custom-animation" value="1" className="h-[calc(100vh_-_200px)]">
      <TabsHeader className="bg-yellow-900">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, label, desc }) => (
          <TabPanel key={value} value={value}>
            <BaseTable
              title={label}
              data={scores.filter((s) => s.manga_id === parseInt(value))}
            />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
