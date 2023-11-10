import React from "react";

import "./AppContainer.css";


const AppContainer: React.FC = () => (
    <div id={"APP_CONTAINER"}>
        <div style={{display: "block"}}>
            <h1>Крестики-нолики</h1>
        </div>
        <div style={{display: "block"}}>
            <table>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
            </table>
        </div>
    </div>
)

export default AppContainer;