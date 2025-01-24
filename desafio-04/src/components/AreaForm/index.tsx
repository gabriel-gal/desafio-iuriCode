import Image from "next/image";

export default function AreaForm() {
    return (
        <div className="w-5/6 md:w-3/5 flex flex-col gap-5">
            <div className="text-dark flex-col gap-3">
                <p className="text-xl font-medium">
                    Bem-vindo de volta
                </p>
                <h1 className="text-3xl font-semibold">
                    Faça login na sua conta
                </h1>
            </div>
            <form action="">
                <div>
                    <label
                        htmlFor="email"
                        className="text-lg text-dark"
                    >
                        E-mail:
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="exemplo@gmail.com"
                        className="mt-1 w-full p-4 border-[1px] border-gray20 rounded-md bg-gray30 focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="senha"
                        className="text-lg text-dark"
                    >
                        Senha:
                    </label>
                    <input
                        id="senha"
                        name="senha"
                        type="password"
                        placeholder="0123456789"
                        className="mt-1 w-full p-4 border-[1px] border-gray20 rounded-md bg-gray30 focus:outline-none focus:border-gray-500"
                    />
                </div>

                <div className="mt-2 flex justify-between">
                    <div>
                        <input
                            type="checkbox"
                            className="bg-gray30 border-[1px] border-gray20 rounded-full"
                        />
                        <span className="text-dark font-medium ml-1">
                            Lembre de mim
                        </span>
                    </div>
                    <div className="text-brandColor font-medium cursor-pointer">
                        Esqueceu sua senha?
                    </div>
                </div>

                <div className="mt-4 flex flex-col gap-4">
                    <button className="font-semibold text-lg text-white bg-brandColor w-full px-8 py-4 rounded-md hover:bg-[#248860]">
                        Entrar na conta
                    </button>

                    <button className="flex justify-center gap-4 font-semibold text-lg text-white bg-dark w-full px-8 py-4 rounded-md hover:bg-[#10131a]">
                        <Image
                            src={"/icon.png"}
                            width={28}
                            height={20}
                            alt={"Simbolo do google."}
                        />
                        Ou faça login com o Google
                    </button>
                </div>
            </form>

            <div className="w-full flex justify-center font-medium text-lg">
                Não tem uma conta? <span className="text-brandColor cursor-pointer ml-2">Cadastre-se</span>
            </div>
        </div>
    )
}