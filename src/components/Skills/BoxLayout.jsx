import { GoVerified } from "react-icons/go";

export const BoxLayout = () => {
  return (
    <>
      <div className="box_layout_container">
        <h1>FrontEnd</h1>
        <div className="box_tools_container">
          <div className="box_tools">
            <div>
              <h3><GoVerified  className='icon_style'  /> HTML</h3>
              <p>Experienced</p>
            </div>
            <div>
              <h3><GoVerified  className='icon_style' /> CSS</h3>
              <p>Experienced</p>
            </div>
            <div>
              <h3><GoVerified className='icon_style'  /> Javascript</h3>
              <p>Experienced</p>
            </div>
          </div>
          <div className="box_tools">
            <div>
              <h3><GoVerified  className='icon_style' /> React</h3>
              <p>Experienced</p>
            </div>
            <div>
              <h3><GoVerified  className='icon_style' /> Bootstrap</h3>
              <p>Intermediate</p>
            </div>
            <div>
              <h3><GoVerified className='icon_style'  /> Material UI</h3>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box_layout_container">
        <h1>BackEnd</h1>
        <div className="box_tools_container">
          <div className="box_tools">
            <div> 
                <h3><GoVerified  className='icon_style' /> MySQL</h3>
                <p>Experienced</p>
            </div>
            <div>
                <h3><GoVerified  className='icon_style' /> JAVA</h3>
                <p>Intermediate</p>
            </div>
            <div>
                <h3><GoVerified  className='icon_style' /> SpringBoot</h3>
                <p>Intermediate</p>
            </div>

          </div>
          <div className="box_tools">
            <div>
                <h3><GoVerified  className='icon_style' /> Docker</h3>
                <p>Intermediate</p>
            </div>
            <div>
                <h3> <GoVerified  className='icon_style' /> AWS</h3>
                <p>Intermediate</p>
            </div>
            <div>
                <h3><GoVerified className='icon_style'  /> Mongo DB</h3>
                <p>Intermediate</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
