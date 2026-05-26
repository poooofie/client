export default function Navbar() {
return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex gap-6 p-6">
                <a href="#home">home</a>
                <a href="#feed">feed</a>
                <a href="#experiments">experiments</a>
                <a href="#failures">failures</a>
                <a href="#about">about</a>
            </div>
        </nav>
    );
}