"use client";
import { useGetCalls } from "@/hooks/useGetCall";
import React from "react";

const CallList = ({ type }: { type: "ended" | "recordings" }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  return <div>CallList</div>;
};

export default CallList;
