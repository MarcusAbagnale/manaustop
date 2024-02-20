import FormUser from "../components/FormUser.jsx";
import Navbar from "./Navbar.jsx";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Começe mais uma história de sucesso com a gente.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Somos Manauaras, seja de nascimento seja por adoção.
                    <br />
                    Amamos esta terra e sua gente. <br />
                    Vamos reunir os melhores negócios e profissionais
                    verificados <br />
                    em um Site que é só nosso!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <img src="https://inova-edu.com/fotos/award.png" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Publicidade Focada
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Vamos criar juntos um local onde seja seguro e fácil
                      encontrar parceiros de negócio e profissionais liberais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <img src="https://inova-edu.com/fotos/retweet.png" />
                    </div>
                    <h6 className="text-xl font-semibold">Você no Controle</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Mantenha os seus dados de contato sempre atualizados. Seu
                      conteúdo na sua mão.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <img src="https://inova-edu.com/fotos/fingerprint.png" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Negócio Verificado
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Aqui só fica quem é bom. Empresas e Profissionais passam
                      por rigorosa verificação e constante aprimoramento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <img src="https://inova-edu.com/fotos/friends.png" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Trabalhar conosco é um prazer
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Linguagem simples e objetiva é a nossa marca de sucesso.
                  Deixamos de lado as tecnicidades para que todos nós ganhemos o
                  que mais importa. Tempo e dinheiro.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Disponibilidade de atendimento. Estamos aqui pra lhe ajudar a
                  configurar o seu espaço em nosso site. Fique a vontade para
                  entrar em contato por email ou whatsapp.
                </p>
                <a
                  href="mailto:marcus.lima@hotmail.com.br"
                  className="font-bold text-gray-800 mt-8"
                >
                  Enviar Email
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold ">
                      O melhor sempre pode acontecer!
                    </h4>
                    <p className="text-md font-light mt-2 ">
                      Investir na exposição da sua marca e negócio vai lhe dar a
                      visibilidade e confiabilidade que sempre é bem-vinda!
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto p-3 rounded-md mr-auto px-4 bg-gray-400">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <img src="https://inova-edu.com/fotos/comunity.png" />
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Faça Parte desta comunidade
                  </h3>
                  <FormUser />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48  bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Feito por pessoas reais.
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Nossa equipe dedicada é liderada por esta equipe de renomados
                  profissionais. <br />
                  Aqui a inteligência não é artificial.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <img
                      className="rounded-xl"
                      src="https://inova-edu.com/fotos/Mauro.jpg"
                    />
                    <h5 className="text-xl font-bold">Mauro Frank</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Fundador
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <img
                      className="rounded-xl"
                      src="https://inova-edu.com/fotos/Marcus.jpg"
                    />
                    <h5 className="text-xl font-bold">Marcus Lima</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Desenvolvedor e Gerente de Projetos
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <img
                      className="rounded-xl"
                      src="https://inova-edu.com/fotos/Neidinha.jpg"
                    />
                    <h5 className="text-xl font-bold">Jocineide Lima</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Analista de Testes
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <img
                      className="rounded-xl"
                      src="https://inova-edu.com/fotos/Mauricio.jpg"
                    />
                    <h5 className="text-xl font-bold">Maurício Ferrer</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Gerente de Marketing e Inovação
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
