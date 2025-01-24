import AreaImage from "@/components/AreaImage"
import AreaForm from "@/components/AreaForm"

export default function Home() {
    return (
        <main className="flex h-screen">
            {/* <div className="hidden w-1/2 bg-backgroundImage flex justify-center lg:block "> */}

            <div className="w-1/2 bg-backgroundImage justify-center lg:flex hidden">
                <AreaImage />
            </div>
            <div className="w-full flex justify-center items-center lg:w-1/2">
                <AreaForm />
            </div>
        </main>
    )
}