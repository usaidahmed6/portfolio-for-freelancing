import React from 'react'
import '../style/SkillsAndTools.css'

const SkillsAndTools = ({ children }) => {
  return (
    <section className="skill-area section-padding skillContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="skill_title_wrap">
              <h2 className="skill-heading"> My Skills</h2>
            </div>
          </div>

          <div className="kc-elm kc-css-811324 kc_row kc_row_inner"><div className="kc-elm kc-css-163532 kc_col-sm-6 kc_column_inner kc_col-sm-6"><div className="col-md-offset-2 kc_wrapper kc-col-inner-container">
            <div className="skillbar on-scroll clearfix active" data-percent="90%" >
              <div className="skillbar-title"><span>LOGO DESIGN</span>
              </div>
              <div className="skillbar-bar" style={{ width: '92%' }}></div>
              <div className="skill-bar-percent">92%</div>
            </div>


            <div className="skillbar on-scroll clearfix active" data-percent="95%" >
              <div className="skillbar-title"><span>GRAPHIC DESIGN </span>
              </div>
              <div className="skillbar-bar" style={{ width: '90%' }}></div>
              <div className="skill-bar-percent">90%</div>
            </div>

            <div className="skillbar on-scroll clearfix active" data-percent="95%" >
              <div className="skillbar-title"><span>ILLUSTRATION </span>
              </div>
              <div className="skillbar-bar" style={{ width: '87%' }}></div>
              <div className="skill-bar-percent">87%</div>
            </div>

          </div></div><div className="kc-elm kc-css-626438 kc_col-sm-6 kc_column_inner kc_col-sm-6"><div className="col-md-offset-2 kc_wrapper kc-col-inner-container">
            <div className="skillbar on-scroll clearfix active" data-percent="97%" >
              <div className="skillbar-title"><span>UI UX DESIGN</span>
              </div>
              <div className="skillbar-bar" style={{ width: '77%' }}></div>
              <div className="skill-bar-percent">77%</div>
            </div>


            <div className="skillbar on-scroll clearfix active" data-percent="92%" >
              <div className="skillbar-title"><span> INFOGRAPHICS </span>
              </div>
              <div className="skillbar-bar" style={{ width: '90%' }}></div>
              <div className="skill-bar-percent">90%</div>
            </div>

            <div className="skillbar on-scroll clearfix active" data-percent="92%" >
              <div className="skillbar-title"><span> PHOTO EDITING </span>
              </div>
              <div className="skillbar-bar" style={{ width: '94%' }}></div>
              <div className="skill-bar-percent">94%</div>
            </div>

          </div></div></div>
        </div>

      </div>
    </section>

  )
}

export default SkillsAndTools
