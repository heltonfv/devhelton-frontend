function Post(){
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-left max-w-2xl w-full px-4">
                    <h2 className="text-xl font-semibold">Como subir uma aplicação na AWS com Docker?</h2>
                    <div className="text-sm flex mb-6">
                        <p className="text-sm">Helton</p>
                        <p className="text-sm">02/03/2025</p>
                    </div>
                    <p className="mb-4 break-words">
                        Texto de exempo.
                        Como Subir uma Aplicação na AWS com Docker: Guia Passo a Passo

                        Subir uma aplicação na AWS (Amazon Web Services) usando Docker pode ser uma excelente maneira de garantir portabilidade, escalabilidade e eficiência para sua aplicação. O Docker permite empacotar uma aplicação e suas dependências em um container, tornando o processo de deployment mais simples e consistente, independentemente do ambiente em que a aplicação está sendo executada.

                        Neste guia, vamos te mostrar como configurar um ambiente na AWS e como implantar uma aplicação Dockerizada usando serviços como o EC2 (Elastic Compute Cloud) e o ECR (Elastic Container Registry).
                        Passo 1: Preparar o Dockerfile

                        O primeiro passo é ter o seu Dockerfile configurado. Ele é responsável por criar a imagem do Docker para a sua aplicação. Supondo que você tenha uma aplicação simples, como um servidor Node.js ou um app Python, seu Dockerfile pode ser assim    
                    
                        Passo 2: Criar um Repositório no ECR

                        Para hospedar a imagem Docker na AWS, você precisará do Amazon Elastic Container Registry (ECR), que é um serviço gerenciado de registro de contêineres. Aqui estão os passos para criar um repositório ECR:

                            1. Acesse o console da AWS e procure por “ECR” na barra de busca.
                            2. Clique em Criar repositório.
                            3. Defina um nome para o repositório, como "my-app-repo".
                            4. Clique em Criar repositório.

                        Agora, você precisa autenticar o Docker no ECR e fazer o push da imagem criada.
                    </p> 
                </div>
            </div>
        </>
    )
}

export default Post