import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
} from "@material-tailwind/react";
import { PowerIcon, HomeIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { User } from "../../types/User";
import { getLeagueNameByID } from "../../server/getLeagueNameByID";

export function SidebarMenu({ user }: { user: User }) {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      {/* Toggle Icon */}
      <IconButton>
        <Bars3Icon className="h-5 w-5" />
      </IconButton>
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          ClubStat
        </Typography>
      </div>
      <List>
        {/* Dashboard */}
        <Link to={"/"}>
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Leagues
          </ListItem>
          {user?.leagueIDs.map((leagueID) => (
            <Link to={"/league/" + leagueID} key={leagueID}>
              <List>
                <ListItem>{getLeagueNameByID(leagueID)}</ListItem>
              </List>
            </Link>
          ))}
        </Link>
        {/* Log Out */}
        <Link to={"/account"}>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
