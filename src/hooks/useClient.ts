import { useSelector } from "react-redux";
import { RootState } from "store";
import { useMemo } from "react";
import axios from "axios";
import API_URL from "api/url";

function useClient() {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const client = useMemo(
    () =>
      axios.create({
        baseURL: API_URL,
        headers: {
          "x-access-token": token,
        },
      }),
    [token]
  );

  return client;
}

export default useClient;
