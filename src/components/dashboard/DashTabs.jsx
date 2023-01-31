import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BaseTable from "../BaseTable";

export default function DashTabs({ scores }) {
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

  return (
    <Tabs id="custom-animation" value="1">
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
