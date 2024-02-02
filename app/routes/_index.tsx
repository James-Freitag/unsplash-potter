import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const imageIds = [
    "1467646208740-18124b37eb58",
    "1551269901-5c5e14c25df7",
    "1598153346810-860daa814c4b",
    "1653292743989-4616ac5d5fd7",
  ];

  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <ul className="flex gap-4 w-full max-w-6xl">
          {[...Array(4).keys()].map((_, index) => (
            <li
              key={index}
              className="relative group overflow-hidden h-[500px] w-full rounded-2xl flex-1 hover:grow-[1.3] transition-all duration-300 ease-in shadow-xl"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={`https://images.unsplash.com/photo-${imageIds[index]}?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 from-30%">
                <div className="w-48">
                  <h2 className="text-2xl font-medium text-white leading-none">
                    The card title is here.
                  </h2>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-200 ease-in">
                    <p className="mt-2 overflow-hidden text-white/70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora necessitatibus modi explicabo!
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
