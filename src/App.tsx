import Profile from "./components/Profile"
import Button from "./components/ui/Button"


const App: React.FC = () => {
  return (
    <div className="p-10">
      <Profile name="Mudi" age={22} />
      <Profile name="Beginner Student" />
      <div className="bg-success text-white p-4 rounded-xl">Tailwind Design Token Test</div>
      <div className="text-sm md:text-lg lg:text-2xl">Responsive text</div>
      <button className="bg-brand hover:bg-blue-700 text-white px-4 py-2 rounded">Hover me</button>

      <div className="flex gap-4 mt-6">
        <Button>Default Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button size="lg">Big Button</Button>
        <Button size="sm">Small Button</Button>
        <Button variant="success">Success</Button>
      </div>

      <section className="bg-gray-100 p-8 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-4">This is my first real Tailwind section.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Get Started</button>
      </section>
    </div>
  );
};

export default App;
