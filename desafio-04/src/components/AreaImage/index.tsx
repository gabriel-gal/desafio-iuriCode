import Image from "next/image";

export default function AreaImage () {
    return (
        <Image
            src={"/image.svg"}
            width={500}
            height={420}
            alt={"Pessoa olhando o mundo."}
        />
    )
}