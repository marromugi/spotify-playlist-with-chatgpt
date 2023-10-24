import { APP_URL } from "@/const/app";
import useSWRMutation from "swr/mutation";

type UsePlayParams = {
  deviceId: string;
};

const handler = (
  deviceId: string,
  {
    arg,
  }: {
    arg: Omit<SpotifyApi.PlayParameterObject, "device_id">;
  },
) =>
  fetch(`${APP_URL}/api/play?deviceId=${deviceId}`, {
    method: "PUT",
    body: JSON.stringify(arg),
    cache: "no-store",
  });

export const usePlay = ({ deviceId }: UsePlayParams) => {
  return useSWRMutation(deviceId, handler);
};
