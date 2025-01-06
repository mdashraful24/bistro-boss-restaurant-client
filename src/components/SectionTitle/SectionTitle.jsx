const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center space-y-2 my-10">
            <p className="text-[#D99904]">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;