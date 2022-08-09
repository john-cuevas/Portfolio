import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
    return (
        <div>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='June 2015 - May 2018'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='"vertical-timeline-element-title'>Diablo Valley College</h3>
                    <h4 className='"vertical-timeline-element-subtitle'> Pleasant Hill, CA</h4>
                    <p>A.S.T. Mathematics</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='September 2018 - June 2020'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='"vertical-timeline-element-title'>University of California, Irvine</h3>
                    <h4 className='"vertical-timeline-element-subtitle'> Irvine, CA</h4>
                    <p>B.S. Civil Engineering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date='May 2019 - March 2020'
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className='"vertical-timeline-element-title'>City of Santa Ana, Public Works</h3>
                    <h4 className='"vertical-timeline-element-subtitle'> Santa Ana, CA</h4>
                    <p>Design Engineering Intern</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date='February 2021 - January 2022'
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className='"vertical-timeline-element-title'>dk Engineering</h3>
                    <h4 className='"vertical-timeline-element-subtitle'> Walnut Creek, CA</h4>
                    <p>Engineer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='January 2022 - April 2022'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='"vertical-timeline-element-title'>Coding Dojo</h3>
                    <h4 className='"vertical-timeline-element-subtitle'> San Francisco, CA</h4>
                    <p>Full Stack Web Development with Python, Java, and MERN (MongoDB, Express, React, and Node)</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience