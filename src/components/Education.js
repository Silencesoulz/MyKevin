import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';




const Education = () => {
    return (
        <section id = "Education">
        <div className = "background-edu">
        <div className = "center">
        <br />    
            <h1>Education</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
       
            <div>
        <VerticalTimeline>  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2003 - 2005"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Pimrapee Kindergarten</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangkok, Bangna</h4>
   <p>
       Kindergarten School
   </p>
  </VerticalTimelineElement>
  <br />
  <br />
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Somthavil School</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangkok, Sukhumvit 62</h4>
    <p>
      Primary School
    </p>
  </VerticalTimelineElement>
  <br />
  <br />
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2012 - 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Triam Udom Suksa Pattanakarn School</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangkok, Pattanakarn</h4>
    <p>
      Middle school (2012 - 2014) & High school (2015 - 2017)
    </p>
  </VerticalTimelineElement>
  <br />
  <br />
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - Now"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">King Mongkut's Institute of Technology Ladkrabang</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangkok, Ladkrabang</h4>
    <p>
        B.eng., Information Engineering.<br/>
        Current GPA : 3.40
    </p>
  </VerticalTimelineElement>
  <br />
  <br />
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
  
  </VerticalTimeline>
        

  
            </div>
        </div>
        











        </section>
    )
}

export default Education
