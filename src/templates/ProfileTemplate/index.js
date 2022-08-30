import React, { Fragment } from "react";
import FragmentHandler from "../../components/organisms/FragmentHandler";
import SideTabBar from "../../components/organisms/SideTabBar";
import { PRIMARY } from "../../styles/colors";
import "./styles.css";

export default function ProfileTemplate({
  name = "Mohamed Ibrahim",
  photoUrL = "user-avatar.jpg",
  
}) {
  const tabs = [
    {
      name: "dashboard",
      displayName: "Dashboard",
      imageName: "dashboard.png",
      component: <DashboardTemplate/>
    },
    {
      name: "ad",
      displayName: "Show Ads",
      imageName: "ad.png",
    },
    {
      name: "create",
      displayName: "Create Ad",
      imageName: "create.png",
    },
  ];
  return (
    <div style={{ flex: 1, backgroundColor: PRIMARY }} className="page">
      <SideTabBar tabs={tabs} userName={name} imageName={photoUrL} />
      <FragmentHandler
        fragments={tabs.map((tab) => {
          return { component: tab.component, name: tab.name };
        })}
        selected={tabs[0].name}
      />
    </div>
  );
}
