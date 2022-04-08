import Meta from "../components/Meta";

export default function Custom404() {
    return (
        <>
            <Meta title="404" />
            <div className="w-full flex flex-col items-center justify-center space-y-4">
                <h5 className="text-2xl font-semibold text-gray-700">
                    404 Not Found!
                </h5>
            </div>
        </>
    );
}
