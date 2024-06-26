import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <th className="triangle-box">
              <div className="corner-triangle"></div>
            </th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
            <th>H</th>
          </tr>
          <tr>
            <td className="axis">1</td>
            <td></td>
            <td className="td-header">Benjamin-David Friedman</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">3</td>
            <td></td>
            <td className="content"></td>
            <td className="content td-header">User Information</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">4</td>
            <td></td>
            <td className="content td-header">First Name</td>
            <td className="content">Benjamin-David</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">5</td>
            <td></td>
            <td className="content td-header">Last Name</td>
            <td className="content">Friedman</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">6</td>
            <td></td>
            <td className="content td-header">Welcome Message</td>
            <td className="content">"Hi, I'm Ben"</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">7</td>
            <td></td>
            <td className="content td-header">Profession</td>
            <td className="content">Web Developer</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">8</td>
            <td></td>
            <td className="content td-header">Background</td>
            <td className="content">
              I previously worked as a financial controller. Recently I
              transitioned into Web Development.
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">9</td>
            <td></td>
            <td className="content td-header">Skillset</td>
            <td className="content">
              MERN Stack, JavaScript, REST APIs, CSS, Jasmine Framework, bcrypt
              JS
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">10</td>
            <td></td>
            <td className="content td-header">GitHub</td>
            <td className="content">
              <Link to="https://github.com/bendfriedman" target="_blank">
                github.com/bendfriedman
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">11</td>
            <td></td>
            <td className="content td-header">LinkedIn</td>
            <td className="content">
              <Link
                to="https://linkedin.com/in/benjamindfriedman/"
                target="_blank"
              >
                linkedin.com/in/benjamindfriedman
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">12</td>
            <td></td>
            <td className="content td-header">E-Mail</td>
            <td className="content">
              <Link to="mailto:benjamindfriedman@gmail.com">
                benjamindfriedman@gmail.com
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">13</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">14</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">16</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">17</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="axis">18</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="pages-container">
        <div className="pages">
          <Link to="/">
            <div className="page active-page">Info</div>
          </Link>
          <Link to="/portfolio">
            <div className="page">Portfolio</div>
          </Link>
          <Link to="/">
            <div className="page">Contact</div>
          </Link>
        </div>
      </div>
    </>
  );
};
