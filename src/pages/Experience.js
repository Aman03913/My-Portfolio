import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Saint Hood Convent School, Dadri , Uttar Pradesh
          </h3>
          <p> 12th Class </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Abesit , Ghaziabad.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> BTech in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 Jan - 2023 March"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bussiness Development Manager -Shef solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ghaziabad,Uttar Pradesh
          </h4>
          <p>Making new client and making good client relation .</p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 Jan - 2023 March"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Android Developer - NICS(National Institute for Carrier Service )
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Noida , Uttar Pradesh
          </h4>
          <p>Working on a Project Under MINISTRY OF LABOUR & EMPLOYMENT </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
