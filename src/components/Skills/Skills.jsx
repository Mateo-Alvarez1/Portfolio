import { BoxLayout } from './BoxLayout';
import './Skills.css'

export const Skills = () => {
  return (
    <div className='skills_container' id='skills'>
      <div className="about_title skills_title">
        <span id="about_span">Take a look at my</span>
        <h1 id="about_h1">Skills</h1>
      </div>
      <div className='Skills_box_container'>
       <BoxLayout/>
      </div>
    </div>
  );
};
