"use client";

import { Button } from "@/components/ui";
import { COOKIES_KEY } from "@/const/cookie";

export const ClientButton = () => {
  return <Button onClick={() => console.log("client")}>Client</Button>;
};
