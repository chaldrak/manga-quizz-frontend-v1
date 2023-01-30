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
      path: "/naruto/game",
      value: "1",
    },
    {
      label: "Naruto Shippuden",
      path: "/naruto-shippuden/game",
      value: "2",
    },

    {
      label: "Boruto: Naruto next generations",
      path: "/boruto/game",
      value: "3",
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
        {data.map(({ value, label, path }) => (
          <TabPanel key={value} value={value}>
            <BaseTable
              title={label}
              path={path}
              data={scores.filter((s) => s.manga_id === parseInt(value))}
            />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
