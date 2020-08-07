import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-query";
import client from "api/client";

function ProjectPage({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) {
  const {} = useQuery(["project", id], () => client.get("/work/" + id));
  return null;
}
