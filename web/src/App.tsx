import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
export default function App() {
const [theme, setTheme] = useState("light");
return (
<ThemeContext.Provider value={{ theme, setTheme }}>
<div
style={{
minHeight: 400,
color: "green",
padding: 20,
background:
theme === "light"
? "lightblue"
: "darkblue",
}}>
<Header />
</div>
</ThemeContext.Provider>
);
}
function Header() {
return <Title />;
}
function Title() {
const { theme, setTheme } = useContext(ThemeContext);
return (
<div>
<h1>Hello Context</h1>
<button onClick={() => {
setTheme(
theme === "light" ? "dark" : "light"
)
}}>Toggle Theme</button>
</div>
);
}
