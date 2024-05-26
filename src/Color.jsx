import { useState } from "react"

function Color() {
    const [color, setColor] = useState("#FFFFFF")

    const changeColor = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="color-container">
            <h1>Color Picker</h1>
            <main>
                <div className="color-prev" style={{backgroundColor: color}}>
                    <h2>Selected Color: {color} </h2>
                </div>
                <p>Select Color:</p>
                <input type="color" value={color} onChange={changeColor} />
            </main>
        </div>
    )
}

export default Color