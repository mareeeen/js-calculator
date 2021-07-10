

function App() {

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    
    const display = (symbol) => {
        setExpression(prev => prev + symbol);
        if (expression[expression.length-1]== "=") {
            if(/[1-9.]/.test(symbol)){
                setExpression(symbol)
            }
            else {
                setExpression(answer + symbol)
            }
        }
    };

    const calculate = () => {
       setAnswer(eval(expression));
       setExpression(prev => prev + "=");
    };

    const allClear = () => {
        setExpression("");
        setAnswer("");
    };
    const clear = () => {
        setExpression(prev => prev.split("").slice(0, length-1).join(""));
        setAnswer(0);
    };

    return (
        <div className="container">
             <div className="grid">
                <div className="dis">
                 <input type="text" value={expression} placeholder="0" disabled></input>   
                 <div className="total">{answer}</div> 
                </div>
                <div onClick={allClear} className="padButton AC tomato">AC</div>
                <div onClick={clear} className="padButton C green">C</div>
                <div onClick={() => display("/")} className="padButton div">/</div>
                <div onClick={() => display("*")} className="padButton times">x</div>
                <div onClick={() => display("7")} className="padButton seven dark-grey">7</div>
                <div onClick={() => display("8")} className="padButton eight dark-grey">8</div>
                <div onClick={() => display("9")} className="padButton nine dark-grey">9</div>
                <div onClick={() => display("-")} className="padButton minus">-</div>
                <div onClick={() => display("4")} className="padButton four dark-grey">4</div>
                <div onClick={() => display("5")} className="padButton five dark-grey">5</div>
                <div onClick={() => display("6")} className="padButton six dark-grey">6</div>
                <div onClick={() => display("+")} className="padButton plus">+</div>
                <div onClick={() => display("1")} className="padButton one dark-grey">1</div>
                <div onClick={() => display("2")} className="padButton two dark-grey">2</div>
                <div onClick={() => display("3")} className="padButton three dark-grey">3</div>
                <div onClick={calculate} className="padButton equal yellow">=</div>
                <div onClick={() => display("0")} className="padButton zero dark-grey">0</div>
                <div onClick={() => display(".")} className="padButton dot">.</div>
             </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));