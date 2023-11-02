import { useState, useEffect } from "react";
import config from "../../config";
import { User } from "../types/User";
import axios from "axios";

function useFetchUser(id: string) {
  const [user, setUser] = useState<User | undefined>();
  const [userLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Define an async function to fetch user data
    async function fetchUser() {
      try {
        const response = await axios.get(config.API_URL + "/users/" + id);
        const userData = response.data;
        const newUser = new User(id, userData.leagueIDs);
        setUser(newUser);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUser();
  }, [id]);

  return { user, userLoading };
}

export default useFetchUser;
