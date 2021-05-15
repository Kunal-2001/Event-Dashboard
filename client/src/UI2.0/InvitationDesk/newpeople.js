import React from "react";
import Table from "../AttendeeTable/Table";
import NewNav from "../EventDashboard/newnav";
import Box from "./textbox";

const NewPeople = () => {
  return (
    <div className="margin">
      <NewNav />
      <br />
      <br />
      <Box />
      <Table style={{ width: "100%" }} />
    </div>
  );
};

export default NewPeople;
