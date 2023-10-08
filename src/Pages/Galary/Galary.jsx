

const Galary = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div data-aos="fade-up" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Brand new
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Our</span>
                    </span>{' '}
                    Photo Session Galary
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Most importantly, we will always be available to support you every step of the way, because we know that personal care
                    and attention makes a difference. Whatever you need, we’ll be there to help.
                </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
                <a data-aos="zoom-in"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1549417229-7686ac5595fd"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a data-aos="zoom-in-up"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1616745962516-803cbd9fe08c"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>

                <a data-aos="zoom-in-left"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1563808599496-715100c95388"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a data-aos="zoom-in-right"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1518384411282-d81d1af76508"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a data-aos="zoom-in"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a data-aos="zoom-in-left"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a data-aos="zoom-in-right"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a  data-aos="zoom-in"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>
                <a data-aos="zoom-in-left"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                    </div>
                </a>

            </div>

        </div>
    );
};

export default Galary;