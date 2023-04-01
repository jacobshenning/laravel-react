export default function InputTabSelect({ options, currentOption, setOption }) {

    const select_options = [];
    const links = [];

    for (let i = 0; i < options.length; i++) {
        const option = options[i];

        select_options.push(
            <option key={"option_" + option} value={option}>{option}</option>
        );

        links.push(
            <a
                key={"link_" + option}
                onClick={(e) => setOption(option)}
                className={ 'whitespace-nowrap px-1 pb-4 text-sm font-medium ' +
                    ( currentOption === option
                        ? 'text-sky-600'
                        : 'text-gray-500 hover:text-gray-700'
                    )
                }
                href="#"
            >
                {option}
            </a>
        );
    }

    return (
        <div className="sm:mt-4 py-3">
            <div className="sm:hidden">
                <label className="sr-only">Select a tab</label>
                <select id="current-tab" name="current-tab" value={currentOption} onChange={(e) => setOption(e.target.value)} className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm cursor-pointer">
                    {select_options}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="-mb-px flex space-x-8">
                    {links}
                </nav>
            </div>
        </div>
    );
}
