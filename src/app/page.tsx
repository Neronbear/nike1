export default function Home() {
    return (
        <main className="relative h-screen w-screen overflow-hidden m-0 p-0">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.jpg"
                    alt="Спортивный конвент"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
                </h1>
            </div>
        </main>
    );
}