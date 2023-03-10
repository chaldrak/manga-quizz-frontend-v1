import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { formatTime } from "../../utils/formatTime";
import { formatDateText } from "../../utils/formatDate";

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

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

export default function RecentActivities({ scores }) {
  const recents = scores.filter((s, index) => index < 5);
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {recents.map((event, index) => (
          <li key={index}>
            <div className="relative pb-8">
              {index !== recents?.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 ring-8 ring-white">
                    <CheckIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      You played{" "}
                      <a
                        href={data[event.manga_id - 1].path}
                        className="font-medium text-gray-900"
                      >
                        {data.at(event.manga_id - 1).label}
                      </a>{" "}
                      with the score {event.total}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime="2020-10-04">
                      {formatDateText(event.created_date)}
                      {", "}
                      {formatTime(event.created_date)}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
